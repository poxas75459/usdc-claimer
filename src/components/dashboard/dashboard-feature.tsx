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
    "3CQ9urPZoJwtDgJWcDCqmzuyxzLb2CGsDEGSUK1Vczw5oU1iv4f1AUBP2soCofZJQ9EowV6t7CNddpEkFc8KAkzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kJapgAsNYuZAXG6yANGeZMSv6KGkDgjJZmZCuWXZQG3kMaX85jGJe9cu35KmPki6zNzwaecCmgy5JacVuT54di",
  "key1": "2VbmMNJaJjPv4joWj6YkhiFfZa7xiWRdebtxWmnyQpuaJVXgpYeH5uJL2wHWgCQVVssQXLG2oSBb21uqsA3qj1Bo",
  "key2": "3T3xwXefxH27A67MDNxJwNNLtA3UUW11Y6LcTsVRqLgv6nrcdbm3cLpRWoPXoa9mAgghvMhcibRvFpyNGFY44K5V",
  "key3": "2ttfMyobxeGLR13WrfHnP84V6nqHkiV5banQ2mHhTogkKZxzYsVWRmfuFHDScdjh3LaGFDdAgUZ8D17hQz3q76y9",
  "key4": "25QD1DuYeZD1Atna8BPM5dtmGVbxwZJBVESrZ2YbaK2MZXCi9zok2uP3ZSbkDcyycmK6FKGMNKoCVXvBxHk345d4",
  "key5": "3Kb5mhqrk3grMZkXMD8Zv8iqFJdEsyajC5HoE8MhNSWpAkBm8RazKWomZGF2yRmANukYndhA4MAKEX18dnyGvzC7",
  "key6": "4uYFAUpzco66b7fTqqXbTyKehqmoamJGXozkRgdYmwHAE33xgS93Hi8uv4mArKwLTGybeiwR3qC5ZmAEUbN5BGzr",
  "key7": "2i6A2udgpFEe1iJ2qidrKPCbiXSZfwCX5f5NVBYPgLGBNs4Bgyx85qSZUEvTX8yiJqS7kDpNYTqppMoTKWxDmPmo",
  "key8": "4bWyL21NY7FcevSEhtJh2ENdXSgPnZtiQwD8mryDSncEJX4CyjSxaUNmrA69nTN3AG6E5jbiNpcmeMxb1c9ivo7m",
  "key9": "3P8298P7FXEyUQa7qaUKQvLZoQ9T2nxbwJK37RStZtbbatca3QRpAgVBgQ7jjQD5f58Zx1hSP6Uc9ejitqa88kxt",
  "key10": "WgPVGoEMTh5TLBp3jaVsRwHH58JsysGKwDAS4wA47fYBidNFAmNkXWJNNSmWeTpYFNj7psVcVAGwMRa1Ch9hWcF",
  "key11": "67F1ev1Fv3zD6ErdTYK55WUr6dKLgoR6938D7tbCYPHXgtfQquRHUeSs6asubgomimqqcgfGVkbFZkuN4fevLoiH",
  "key12": "DvVXLZqeGuMPG8jV6TMJMK7MyZjhtQdoTMGbWtNdg2JGZgWZiPm2EbRrdCvsLNTDRzk5uY8xGPjboQRLixWuxnX",
  "key13": "4UvqhVfXxMorkJBiL388QgWBBNho5MV2sS2uigZ5Y24WtoboQyj1Lr4bdfiJaqVxvwHxf5gLvyFVwEiegpaBB9av",
  "key14": "1bd5m5bmThrTyeKitRC8z9xpznBqNVNLuCmRgzewVMpxFUdHsqCTp4bHo6crvZgi5veXXzGvrVt5MymYNuz9Vgq",
  "key15": "4zR5YtrKrwPNUwyQggz8c48KmPoLzCUNG9RTt8uBPXDxcxu1HA2sk7FgvoPirUPWyRdBHbP8MF2EzCNpyysdmvat",
  "key16": "5WS1UG3v5yBfDqSfseaLmSqZbHKgy2GwBByiP8BEGLS6psiw3V8NjUptPAHNShboqmyKuKtuWPa1Xnrkq48FoozE",
  "key17": "4NT2FzRfUPYZ4LB3mKGs7CFiDQdG2SaFVrGdhmgMGWtVpNWm9PHNWt3vKZGXoCspzGJbMRAkDW7euddcSRSAcUr1",
  "key18": "5ceeSpo8zWHhctyS8eF8G72gVE9peesEuucj6ZbrBZ1TbtWb6BF5v52reFG892MEJXWvDbdMLYM3kBuNhboHc45B",
  "key19": "beqQTF8btGte6BapT66UewQxYqLwrtTvXqNiZY5smSFx6bHb3Mu27KD9SDs5H7BTDXz3YB8uExmAQzCBfDnMGQ5",
  "key20": "4ZB3sCiZ5Qtm47WVKVxTNp336TvL3KeZCxvocHUXmdcU72VyxjyxjHagGMyMY6gaUesXY4Vw3WFXKgY4dHLmUBnk",
  "key21": "X9ZU5QqUHd6d49x1RGboMavELLFRnoGWbWHoQZCVCaC8RKv4cWLBhRh6iQMT8nnt9SqoHt9tArdQ3vUxS2Xsgn1",
  "key22": "3pSkHjjdtFM7qUNnGiaArRmLQWZWywMYDHahChdii5aPJnLBV9neirMBiHPm758CCZAisDrJWk3D9fyx6jQSLnGc",
  "key23": "N3xYYvPUBrUmMmj6Rws3Buc8efPfaW8rNj96CZkzbzWSWiJUBk8rgNBuWG2qBDfMWQRUHQydtfWu5aAPWQCfcCg",
  "key24": "25Cz9HZjPGT9KNyfGuTPRRXGU9pnPbqj4ocVz5dsCKTbRjce3BP96P6CXM8BRuubWHg7yjarnz81m5u8gzAB25xz",
  "key25": "5snUTQyMyQctca6vK7Er7E9qhTDdYAWWSmFYCw3FsAuW2FbDoSuTfBvh2ZDfs56f1FL6e19m855DHpnggXgCFvaa",
  "key26": "2QRZnuPhfEfyuVXXgcAD63xPdUmq5bidnGZjwhKBQHPkq9hKQw8Ng3KhWjHYnXubz7PaSQB5hCYRbz9kscHnA97H",
  "key27": "4ZHmcoC1W1gRMZ9o2RdH3HoRtNgikY2Xo5ng2AawydQKpz7j4rYwiVRiRDPCyteLDAF3h8i41HvpZeKX83CTLJDd"
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
