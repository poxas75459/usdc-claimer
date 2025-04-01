/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4qQo1f89XSLCu6AX1QMqboK1EbBcUgRF16dFczSs2csWMEoBMZvBtn2q4mxgoR1JBHhuCDdaJrVch1oVQtqsyzUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWFwW65G1uXP1eVMWqN5JS6cozAWfPhh9tFd1ZffVag6Cx1gYjztiFW4dc3MhbdcWVUD9yeAmMcUmKbB9rgT5Na",
  "key1": "65coibdxUjMod9LtPo7NXusYM8Ss3zSGRdhj2Whdg9qdH1ZGfPapGE3q1mjWqRACo2UU3PeRHSWUewGgT41Yz9rM",
  "key2": "4yFFyMDU5qY1vXUnnuMyWPVEYXp2JFrxqcTpSxXDrHfkkP5ccfGVctPbmt6GCXnzsfdMMggenoqzhh1DX3RpLieQ",
  "key3": "4MrCZhsZjsLXqhCdB2Gx2HeK5gQPD1uqkjCrLKAdDfAod84x8Dwj4Dh5krdzCmyRNr7dMdij9aYTtRWyrVqV3uRX",
  "key4": "4KcAVeGUkUsw7RCP2SB3p4GDSnVpQi34is3pDTGSnkiqZ9ZTSJ2SJTkkws4xpJfZTTuZxmqQtLz4Gu1MBEJZcQDy",
  "key5": "2KGXRqEZDdPUEfzj6BPvd7eiA3fD3hWWyrfMAzQvYqwcJsarbDBy3HB1AtdWYohyxYpmam4v9U94fLHNBC5ymYdd",
  "key6": "2PBfjYYQ7hKHyUqLRt7kmoKyQdxa9XNC6QRnpiSX75PJ6h35GHdwo7mLWxURfZc3NbRi7pMHXJKWQGmPEEqRh4cD",
  "key7": "3DPVxhD9pmsEMZ5goZhFdfBghmyJSBX7dteZGpTGvT7jmFUnea18cs6czkt9B53BkweWVMv3YDZsCLSy4zRAq1m7",
  "key8": "toW6iSiumAggLxVRSFvL9xmfagsWKWxAo8UsnbbyFwjSSeJLpusMppp2EYMNJ8ckCnjsfzp42svYuLeKLi8TJMe",
  "key9": "5UC8RrMkRhas6VeeaSaVAoy3aGWVthgYg57cjuEEvazzDqShLzDH87Lj8ahYz1CSzxZxuS6SrvBA47upXxLh1kgL",
  "key10": "2MPFbZ8MwYEenotyVLw7k1FtxDQG92RoihzJnScSHRpKiGhJiCv2W261RR7b4d8q2L5aovkWoJBcXR5To676t7Td",
  "key11": "3R2mEecp26XapuuCjkZQJT3Fz8H37xv6o92jWh6AsuR5hx1xfbg3jwTSPMAtrrvojCf7d7ywBadfoPSXQNtFoHk1",
  "key12": "3Mf5WnhavpxiF1kkzANM2pqGHKnx8kfxM1VXp4NxJTT9zNFUykdUQkN3esxXequGifxWAB7G8pNws4spksNJ6AyL",
  "key13": "2v31evy6upBTvMFBGJj7oaYtKv848XoDMs5EZ3xoyxYk5rDTRjAJx7UakUpHztqMkXSKZ7nH8QTNgCDBDw34YrLM",
  "key14": "haAewKBWKyehRQTBixcfQkreZ3BqqpYgacDQ13CWip6oswCkaXKHd8GeNmdqXRcjgADydTMnx7cXr467QHY2VRZ",
  "key15": "62eQv52tZrjsgN3QZMYb6JgxwPFfu5ba6ALweoXGc9PazjoFXeoYVhbQ8mKoYwFiDX5uefZzZexj5BkLdquMbwZn",
  "key16": "5BpbV2GiJwqvbMryrAjjDEE5cq2ZqYAJcPXwGcBq2vHnremrFoiZ4iScYm837NEcgJDznangBG81XWXbhqvjY6hQ",
  "key17": "piYNmCgk5NACdnU5zfDmNHqr6Lo5nyXyCJHHKs4vAMTzMHQVrzoGthaMSTua3UpaSRNuoxz828anUXUvGY1G7QV",
  "key18": "649yu4bfX5fLRfD7o9pepPSzk473PHtR3PpGzSDLtyM2jvhe31xCdRheqcyXxTu79o1N9tnG8XA6MqpXCznKAME6",
  "key19": "2DwVSBGFH8s3qjQvRvedCRrzRvjQgPRdhcUZ3kNtyz6DKaFWpbt532Q5UC9jQoLKVtAdUWmuJ5cTgr9tPgGqnioV",
  "key20": "2wYoCyHfTpnb2AcDwWzpKaVhEL9VdiZv1kri1fzNnJCHCYazgkCS5FHGzM2uPp5aRAz731jFP11qd42L2ycbPNqm",
  "key21": "4zdFN6r7WiDxrgf3f1RJ3RA2rA4HQgF9RkXT99dGuYM6DCPftz1k3KptCn5cBBRurQBP7JukGQCRVeqbe1EYqhVw",
  "key22": "2pruofd1Cpmr15FjLLHoEXYj8QDPDqN1B461GEkSBUw5wcHwq2zUkKvmugXV67MFYF9vVb5HU3ycFXDeM6vna697",
  "key23": "3AytYBpEht4k7pVz7NvrAgUPViF2Gw5iKwGL2dfeoGzQmAAYB48hfyUwXR5QBzcKd44BTgAKAaeBaYPwqfbAj6x",
  "key24": "2ufaER9MRJNVemM7x6ZMfNVjY2zjToRVZHDDxQ7upA7CCpLSgPdLVqvSCENsjaVztKEwCtZJCu7YsmvLhNzVnpW1",
  "key25": "2gkgykQL2Dc8KCi25GWJJfzVTWk3oiDqjGPCNQ9mu8xgrcnyVVkigQR6ytmae5qjBMV27UHk3bromkUvUH3yRQcW",
  "key26": "3baWfxdYjJZZ75ycrUMMLkbUxeZ3bTthNPYPz5jKHkGC4t3TAXAmBUK7g2PQiodnBu53hLatbJukySSZvFyYagZa",
  "key27": "4GFzWoNNgtG8p3we8uKBz5B9RrjhaKq3kyDCRE5ujN6ami82EwxBfTfLCAxBPanMwSwYMssSJvqJGr5BXtEqQu54",
  "key28": "233pCYwdrEeRQpwpxR1fiLnVBknR8m9g7v16W8Wdmo953tST9Ssh1S46W5VkBdVMNCgJGn16Bf8pt99nPrgQxqqx",
  "key29": "64Jezx5f2eAqggum9dnny7Xva3ee52twdjdcDJGQhssRib6XJ4dkfaQea6Y1SeS4qFn6386596LuPgncnDFwqins",
  "key30": "22GBYfai286GoPfsPNZbGzMvsbHenW9nPPpnJcHSXbhiAgzFbRBQG4TAwCJQSnmFRYeEqH6rGvXSEGg6MdWUckPy",
  "key31": "4i3ccihmrEELztnDaxTCNegXe2AE3CCnNgYCy2L85mKGZKmhhJY77BgPofKR1HoRbTgb17ztpCtBmapRpDTAsYvB",
  "key32": "HW37g7ngpHjFGbeqvS8dPQT7FFqkoevGo3bSuBsaTsjrdns2DPvS33so8rCX2qsJHUpoUgw1XDvMswJGwLCHQNt",
  "key33": "2zvP2ETxwETKST8CMefhmEMeL8YJhurA2mqE6gzHfc3QmxanUYh1CZzLwj1nktZ8Z8Z84WR3fG9Xw9YtcwHe4MLi",
  "key34": "2UdCiGPVSTnxWm8HrTXmG3D8Ba3Quri61G6uHord3HyqeKxHP5sp4JCof6TfLGvbzGb2yD1m78LCM8Ki7bvozXdG",
  "key35": "jJoAgs9sxGRKYyMfnVTdiGSvriugvE5181M6qMMrtiVZPjwWNmEZLwLmKELGVCvxhwh2i6m4735q11AL4yxML2r"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
