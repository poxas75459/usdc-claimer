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
    "4UWTbJ3DMj35Z1GvpGM2bx19nV75XZ8ebWpn2m2Ljma8UXHPtycJCMZQZFa14cDZK2ZhLEtvBpAYTm9bQDkUzpnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jciwtBGkGxjVRuntqmK1zCSppwy7h7JDjhuMRzWkiM8umXzZTobWQ5j5PbSw998EDhbehNXa3dxxbYbSyH5MGYn",
  "key1": "x9RLAuEWWiwWEgYsr3zMDQe4R5Ht6vdqXg7PXERRTHtWdSyfzMgyvqow7ZikykF3ASvUPCwEoArZxfqYRKbcUKw",
  "key2": "3swAxdQiP7a4oureXQXpDN5c9jcPrjKKTW1dBcUifWBW6orimrgvuM2RU9RwWTMLLcqpBYmnjdBsHzmUfUqteSt7",
  "key3": "3fupGAfUBewyrxhAsg3vidcoyvisGBKCuqPU5VcnymDo4cqfuRiPU7sVkQKZBc8NP515rCr85UhL7DmvbxaPoQ2n",
  "key4": "pR54bjjM168RVwycxDCFw9ZmNsbMz7Ff8zzn9pnnMhiYiQxnYmBAe7usWUyTwEzPuM5472gGQBCeFtQx5Fe3Rcv",
  "key5": "41R6Y2RtEJ9Sdg9AG12mL283Ve1qg7KB8qXRF3KcX4vJ8zm8ewPpkg57ExWePk6ddFU4tdF87sMeoH6C7zUaEg4W",
  "key6": "4yo8erkcc6Gtoryz5JviGsgnmAU83gQaeN39rNCW7Are6eDRLzPTknJEinGs2GKtSg4LgfkWLoXWMnv5JjM9Jr8x",
  "key7": "4wL1z85GNLCLG2d41qdBnpGAbdYYJdqMkSzEwuCPSQRjkh49BMRYztsbz1X74Ty1QRfXYW8L6h9vMBAjL4KHtbHb",
  "key8": "4YAvNiubxWsht6MKUAMY1yBXHgu3pyCYrADYquvpxZobDNBFqeQ2D11iHQYeuHUrh3i5Ek4TUgaLohbVadsjnf58",
  "key9": "5wEXrYeKm9bZ7JbmssDpx11CNwD1NiA97qgLUjqtDEwwNdry3mqbAxz9EqytVfsSwqt2ifCBDxUH3y7AbzkKJz9C",
  "key10": "5PuRHgere251cdEML3b1be14z98JVbVHzrUdFuNP7Ssz7gyjK627eW3FzWgs2kgGJY5Dc17u1uxWXBdoDEo2qQQ2",
  "key11": "3CgJsgMuJuRUMfPkiWuKz2pCATcrC4aeEA3GHLvKsG7Sh1ZmoMiHXXao6pPqbmR8eyPJ9kge9v6iRYVbUiPYr7Ym",
  "key12": "5yUsnp2jQb3TWghZxL9MZK3FJAbX6aKskHc7Lv6Bjtb5Nreos1RW6GuXvJhCoqZSArE57BrGpe33pnoWLuVnMwmG",
  "key13": "4TXrWG9ZQ5EA8zoZFi4qpVBjBccUGGn5KCiNtykKUrRYZgfLdZCeJtpkyErdfJ8bLzbTJCHpLcRQGi8VB1QHozRq",
  "key14": "roicW5GAJuJW3mXVbbcrcaYJh5H8GYJnsiMW96roWP2ZmQmSd45NGzim6QxjMQSY6aR14MtXMdjTC7K3vifbuF8",
  "key15": "5mZU2wXc9u9UE1y91xM7dDd916rCbq3Dpy1JSC4vu6WbWr7f98rmEW23ZixGb3dkRfc7Ku1eEW78gXakSbzgc5bf",
  "key16": "5cpVoJ5setrXm9aNW3Q5DptByK2XT8XQ4ssEyq8kPJZgbb8XA6xV3GaaXNKzrAKeASiaksES7p1STzU1Bb9mZe1c",
  "key17": "319k5LUYgGTHdsU8q5r22WfT8pFd34FzzW83zotXJs2BSfpkDLXNvLTNnyVAdr2MtttHmwaGN2D9SAK8LPxDPYDQ",
  "key18": "M2yCVfZaiziUAzBx3h6Qbe6PzgM7Mce4KLhyGudcZdP1ocgpf4QnpUBGUWeQft3QLy8WxjXsGmTgTKPKpWZRUra",
  "key19": "nXqDCp18CjsSjtegUwrJ6yBi5CL1U3iRNnudfJZTg7uPqNnudboWUVDeNkd1ZV98qJ9U4iYAffMMravZcZ6Tzsf",
  "key20": "32L6HMiW3tTDDFptVi1qwhZsmsA26JB7g27PX33MTFeJpEzMN43FYPgL4LYFwrdbcCXB7q6Ac9pZFsxUrE89AUpQ",
  "key21": "3WUpQwg4wdo8JNS6dPznie6J2woWDMs7UdjP5tmqVx8DFZEPtKb46t77SMfYp5P3W2RCJizSSKNmHvuvdr9Va16B",
  "key22": "7APS64TnLrPXuenuvPMzXrNBq8TYFVi1dri11CnarBpSdjKjx27G4WksCWFZbA3MshUDQ8bkbJ5VWSUMNhix9cY",
  "key23": "23QKWvuxuwRTsoCXRKgi8MYTbQGbJ3sCNeHs3RaUD4t6KUxLGii2w937aLHRW3754gQAZQDmr3MSCtoNZTbyjU2U",
  "key24": "M5Vakc4P2q7mjeCxW2VGjgTf7gyxdJxCuwWR3wKSLhBPhTYkBfqdLQy3Bn75hZs4ooLtbFjkbW9nDs11bCos4Wg",
  "key25": "5sp2F4V7167zioE7nvEGuwnJf44zCKQko8PdwcWxjeeXH6ioJ6ZtnjXUumNKATcT3MFSEUQCYEvE3cpUs2FhoQyb",
  "key26": "4WWBetXH2tHvrPA8RrmTbbyCFpTpFzqfBUf6oUeNtQRjKoysj3gmybiJWD9sGByQUDCQBBhF8Tyi216qFzg8f66s",
  "key27": "4TYH6T68c9tdS8moUydrGBK6Z4f9ZPCWFwaAMifccgXCswMJ7eUWfQTpj7Rsyjb9MVbh8zofBFzHzcREYkim1yQU"
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
