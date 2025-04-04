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
    "43ofpjo3TMnk9M3fZhjc431KAWz5utiUaarCtRVCK9jeFxDpZVtjuVxGYUuYJqjD88YDL7kAWYSP2aR5tDSwszZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MrU1JiySncuuLyioQLLW6pshrhhsNhQe7K5PxNrZbVsZDTMpVpy9orowk9v2B2RgFbpAFXwfjdMUCrbEmjafDHY",
  "key1": "5QN15fScvGoycogcMQ2f61s2NHJMWAFKBs5ryKXiC418w4yQcnxGJK22iMCwvpX87339hSyNh9gzKvX1FXYGdpA9",
  "key2": "2TVd1hRUARDbMWQ78hE8pgPKGwH9iczkPvSTNNE4crxPEp6TsUAgiyuazbFWP1VMs4YrsHigARRJGG6vrVmejf8U",
  "key3": "3KW52wqPvbhPpSwUHFqvgALN1izWz1CZPbbCEgKXMspyxBVPsKBLTN8msCWAe3nwJ82tMPq8XvUaWJJFQpjt1wrn",
  "key4": "5iMctpyaYwFRe74aodex9rwrvgwtQ39hAQExVyoxC6byr2jRqajEvCkjmENL3H3sF9irJymoSnU993zUTGeCuVdr",
  "key5": "5BiT2fmW9gGvCNpxuM1A3gdvWTMksgZaJftgKsRKxedDRbH8SYALWaDGKMh4kGfX845VjV9fCLLg9dimJHEoH1Gi",
  "key6": "3JousFAsDAXUuuGva6RtLqXtyLcDpfNDnR6YKPXcEtZUBmtopGgiadSLemFLs9nPDtixmnutxS9nPsoWEhKuRtmM",
  "key7": "3W95kZYaNMHX8MrAUSoebNbLfdGzUAbZcGX7r5cnnX9NbTtyaVwytsYGc1jPHk3jM91bfhr6gEjhg4im9k33nbbp",
  "key8": "5XAfaFZho8ggF5REghCvumFwnkW61JiAAE7eiN2Nwdz7zojCKmFVXZRpqQy5nzzgZi5xj55qqrCsrgEB7vs8g8rJ",
  "key9": "2X4uE3fdvsx8gGTPxwks1BkSmi5jMpEP9jWfXkVFbmFuYYdLThofanwm4Y51NDFgntwiaNXy79ph4WwUBkvTvf1D",
  "key10": "29Drn4wY1oTkgVEyNpoME4rhER4DCfdvn1mebcQmsgQUDm8Set2x33RAvJsWfBFHvAjWKKD9tLxvvrBVBihDmhPE",
  "key11": "2Fw6E3eLYTbzA8F9F9Fid1fnAqVCziGzCNJujJXpSnYMG6UBS5gZC3czGyMru9MKsybf7zQrKp89Y9esDvfGrhtb",
  "key12": "59W4x9VkB5pp7cNgAKWoqfjAH4BSEkC7Zy7qe1wfYty6SFNmdEbVMXa22RCUehha3eFFK76E1LwyQoVYd9QPsFpU",
  "key13": "EzNFRDUSxQjXFJUD6kr7eoEvGjfEZoNf93A9Zf6GVPMYo15o32iuQr2JSQJMhaJcevnxNXuFzx1HoZuiApAnmm1",
  "key14": "2csyRtMcUFdiKUtVUcurQXxz7e31awVCX8iPv89m8hJyXe2FxMJFEf9m2yzRpa5D3CFCMgp1ac8U5TKNaURRBdyY",
  "key15": "28obXNMRDz7zKEhsDUKfPFSPRC7BZdq3ajTpqBPwuRCcicFAvN7XVX7Q2dGbFW6vy6dVWkb9Z1cPwwi8z2sdtCeQ",
  "key16": "5wJ1G1mJAs8QEHt8CwwLu5CtEx78jqd5XJG7fGiAVNNqRVrLb7i5RnGz15u1VCKGyduqq1v2MUopKw3pXrpmCsqv",
  "key17": "2RvFfYVGrBdeoHbX1As8VsXpTChWBTqakysDFM8n42ndrC2Z1NLiVEYcDzU8YwQ9UacF49C5crnxf1VHwNhdW9Et",
  "key18": "5wWyQgZBYmXMEBQtLrhW9jFqC5AsqY5EfXWnEkJ6YPkjBjxy96dknK9Ws6aqqHVboGRLsGDEbB2jsqn1rvY1Ck3q",
  "key19": "3Vzmdeoa6GWg8FnTb71aKxr9xTSUuPwkUZxSxgp6SS6KeBYjSwuTZZKNgZBcwk4VQThXSJDbBeeogLwXVuhDV37H",
  "key20": "L9oc4kArERCoYp3XDLanyN8pydV9Hg9qkXBj1MCutYiF2hpATJVJCYse4KdyQqdfA43Y3LEVBsrgWVnsFGq96mA",
  "key21": "4CKLt4aMLaKbY9a71hN2nXqVDLMQgsckZhwWKf9BmfYmW42bQiL2ZpqBXaEJs4bmT1HLwQqKjcg5C59FR7HCB6id",
  "key22": "2QWgPz6m7cdpxAwbbT888f3xMNPT7vuDhQHx2ws7CnoV6BFjsybUnRxXa5YmAAP7QjF6VqPrSn4tBZvcppW2mhm8",
  "key23": "3HyJjEnYZ1nih4TTzpRKHhuS8qPc2BXipKL69Gy7yML4G67c5TxERzAjuyGv84wYMQV73MvV5tRQNp2XEXZpBXrb",
  "key24": "45sBuFNM8MvTbFKq89LUhzCtVdQQaBGibSyDy6hayM5v48ytH1F4kLS4kJdvmfES9qmXipyWYW7Go61Hj5aUx7Ro",
  "key25": "2BvhwYtyUJPGVb4u91ZXvEuaeBPdoFkTYLr4pg4oKRr6d33r942ZhwrLmayf1LdiEwVHdRZuoM3wASiWTgdByeKu",
  "key26": "L45VKTQTcHrC9toMWLKpJQtUM1tVTmy1hqYgHARbAnGY1yAcwRDyb698hzymXRkBTZwGp3LcE6j4k7rjWYXASfi",
  "key27": "261LJHtucae4YGAtboHGrT58c2vF9hb8dqmypm1756vbH3shrEiRi8ZdJiN12EyjoiyhmHVE2ukQyresb2Tf2xev",
  "key28": "dmosRWCeo5R32fTqfyJPqTD1BycpAGdPfRxCcGp3aUGbYR2dSauU2vGE6LPnLMVhkL8yxy18eNtdfVBEFEDyTp6",
  "key29": "3uG3fTP9NVV9kQfWXLMrYXDhNtpsrRH9oKRgZBtzK8FhyZ5AKkbZkSUo4NGMTFzrTbUwGg9N4P8jp83Rtey4hyoD"
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
