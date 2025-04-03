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
    "3ATYxH45ACjUhTvtpC3bmaDCrfLNqbLBbFRc832T1ewENKhZ1ngCriLtfavBAuHxY7wYQLFZbFZug8s7Q77JCyNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNY2swrCfFQ3G1peFDbg5XxxDjgygAJ7bJdRe8sUBu7HfJxMPSCCs5jn5w6xuSeeGcF41mFSBHA3YA6dHmrBtD7",
  "key1": "4XsKyaRMPHbFSYkfhkksGPKxKnaQm7RTx5emNQ8xKYpHUs4f5PTiMJGCxLLJm52QqHSgrMgV2K3kyBZ8srTi9u2x",
  "key2": "4AaH8zQLKbsqXX1GiFzc7xmzK12RDdzrCLbSix7xuSYPtxoFSPkauXbVie4cuqSv2mdSGLsQzafDMaDkTgs2dKde",
  "key3": "4j4UhjMAJV7GmWokYguWT44KuFiNuFwnTFia8umJNoBQs3U8ELYapUuTeHdMY1cwujotujjBAGWXgXL2qc1DUpPg",
  "key4": "7G4F2dqeyDqYKWbEXNKynNeAJEybg6jNgP5AAZ6LVeRjVMpmFfMsFsWT1PPokB1piSZjctmsyPY9HsnTr4FyPSW",
  "key5": "3bEwKNWs7pKRFFVnbELLGE9esS3Sgrc1qiAoFeRgHbfxbvkVtz34fXfHb8eUfUCJhLjJfNMQZvyCq4Q2mcXh3xQ4",
  "key6": "HY5hDmVDEzHxtG4nqAX6BfT1dPGNNMMXyPW1oP98yQRXRSXGmixMy8iUhs8oJXkLEwyppfQwa6JT8GoW1U5AyPW",
  "key7": "vPpwfRB35ZogWGLSCL4ZKW6BrXfqEDyL3vJkBzDeyEK7sPcvkDWwCgTV1ipYW17GXsDL7wp6XQraqSni8vQATqg",
  "key8": "4yACJ4NhBa4d81HEhP8oSK9m8E6CS7AxNdshKsy5GFaXFxiqebX2xXjcG9vAexFrJ6KQR3qwEgzEvm5REcgTvcLR",
  "key9": "2h9FgdvmoeczG7UfbP1moTuqT6ftfwqyYVMUot8qkQ6ad46JK9sCb1bHrsrqfzud4RowF1KqGuquSkuHaJKjwfnB",
  "key10": "2K94TUmh7yfmEHFX7guK9bhNTanKHVLmxzbGW7JQpPMR17Mics1De1cb1SmVmDptojXa4KeAgGV5nnDbi9Xm6WxU",
  "key11": "fKFsEsyNevAXsBSo4WP67PJCrYD8sp8SaXkf4St3F6uuWNHvG4nwTMpaD3HCDbBxW48dXTat4KaiBNTJhwQZEaW",
  "key12": "3hpYZp2wJYCRjMhhq3SRQYtR4yjLGHJj9roTztprM3VfL9ajUFpaZk2YjowWWkWryFejHAvgtYG9PrAgcoqhXTws",
  "key13": "UxTwK6MgpoQTv9P7c4bZFXj5QaQE38V677XMsxGWmBBvBrjXqaFuc8CFQzFEzW78ofWUv5ttNsvoaf4zqrXquSY",
  "key14": "3bRmWWZtvpqXUQpUo4uvbUhhSbCVkKzY2FiEKjHEyYVkZ56zUv8xRQWQS98S7A7Z3Jgev2nnqWcSk1QyutPj7xtq",
  "key15": "55UdPP1LbiZh5hJscShYLzvh4tahQBoN5A1WcHEcVRyifjCUBQLsfVKSqLFyfnzeSf4fKSPdYJHzikqwRYURY6ws",
  "key16": "5RLoJgtVWcmQRTk4RNYPg55CHPaBjBjYZaezJfkbGo8fKFoL4Ffs7yZMbhMLRBhMzV6HLLyQeFC6e5s7Z1AbLuLo",
  "key17": "2wLYES6t7RLHjL5xQeDWW1D9yLk69ZgRRmHMv3QQ95q7cvidTWKjkYTCWmn8tVs7uChEMkdTdsvuuy4WjGs4AvGJ",
  "key18": "3tfsS54obqKpxHhD46w9KjJXPJXrTcXL7Cx2UXZjaa31Fpku6debr3uDRDenJWqJm1L8i4SftHrDrkxNmPi2kBrz",
  "key19": "4SVP1rnsPC376sshTUToAYvj4zGCgFqDiKnbKewuFWDLVnTWnz1deiS3KMkMxsihU3LcfWj7Tx1RknUXUMio4p1G",
  "key20": "5gnqPhXhiHeT7enmJ6TV3N2dTT8Y1mQM8GHJ8cPihRMrzZX38S8n3jjn7fgbG7PVxjZMdpZGe5ywCA7vomZXg3nx",
  "key21": "4HTA59PXHhsEf7oJpnhLpWSBMuTC59FhKUF2K3i6eygZcUCiyqfQshQFgBoFGRBNKTTdapU1tYNEmQCtbrjdhzaq",
  "key22": "VmxN6XzQ5LxzxZ1zdt5vXWH7p6DUmty6oPF3JMRtno6hPvEkD6TZGpUixPUynYRBH9uezUueKmHeZbZ3sF8Y5vb",
  "key23": "5KyCTsX7i8benoQeRafrXxYoh4z1E6FNmxqg1jEcQ55EuTwubaPffWpz8LprRm7xWKMT3bU3zMe9vuKvw8P8HUEt",
  "key24": "65jSfMf9KjCor8XK5v4nWFJAiHdD5MrzG5QRPBNoPddUqgiA8xUshhWw1wojCspmV67AVr2ZbskijMqE3gP2UxcT",
  "key25": "4qdL1YQK8VrKuooEm5H4s5YGkXaoNdzjVtaxWnUGXLMSFWBX63vW3gemLbWkTRdQ6ZPkjnxrNB4n5xgJpjMcvisz",
  "key26": "3CDJ7zTZXEaoWwx3ecyPH3kiohteu4eRKT82C4EeeCixdj7JHucjGeh5gebtWUsX24KUY7TLsXNp26ojzvEjMQHV",
  "key27": "XokmT1QjACvdNEAvU7yDWSoiQbaMYwYqjXXAYLtCMU4L9kN8Jd6aUzP5MXEcG2bz5R4DHzhzoNNkPaCeC5CvnjG"
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
