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
    "49Y8HWvoYCUQPetxKZxfqm3gP1S6r2wYmLskAjBqvJ5j6GJKgB96upi5k3qxwQPF9QMXuMPKYZQJeiRiLPFGr185"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fs8M7Z1nqE5QL2VdYE5v9e3mw8yh1aqZGsR7HSzNaTZ3Npg1gQpdPf42aZ2KyU6gVmt8yM9KdxfyUwjRNAbXWN7",
  "key1": "38uUyXaFKU8XdVKTuWZ4S2TiQSPZqKJ4fZuyckYWEnbxnbbUbXgt1Fq7L9kt6rFQWcCdBzKaP3UsBLrsUdZdN9od",
  "key2": "u1ck4fxX6zwZoGETTMctz4puCvu65QNRr3wWLNmPGrebyiuUNai4zqWesZ6KcNFpNZmYWtELCzLyvdhfPMfNUnc",
  "key3": "47zeudWcLXR66yXvaWgrmHWWVep9MfQbCG3sqTVzd7Ah6zu2Zogurg4piAM4MN99YQJiWcCAh5jdeCiv28qpouKn",
  "key4": "2qHZcyqBPfRv2TTMKkyxqr2QKfnZ4Livf4KneKvwxHW3gzGRakqsaLgnpNPBdfREk7CnSWckXDg5ZFmHTg1RBsMM",
  "key5": "333Fok6n2TDPCSUmhw1TUuWKkES4dsUYie2imt3enUj2xwgaVmQtSvL7DSyBLuXDM54xoCLzLaTwuCVHtpnErNYJ",
  "key6": "2xuY9MqYa635BMtZjFZKhyTYocouwjCzfj8WdUPTPnkLvCuDj3MkgBcwaTeP3s1gNszpzafaDWWec9JnQdYv7msu",
  "key7": "4YnfPeqv4GHxd7w9obCYTo41VRXiSopRsvUN8KnsqByz5BgSi1KELYq2H3Y8B9ZQYrTbG7bqbCMKxfLN5JKbM2tj",
  "key8": "2ziNwJ2FN698WEKtdeUEzkHV6Rf4AMYEyFaP11V1wM6CTutVWcGC5G38crBAojBtLzVzqxairccoShNbcMH73bFz",
  "key9": "57VxgSzSG5xdJD5oh8VE84ScokEtjjbyhpMHw9PEtJGBTnqf2t3zXwnj6XEHJpxrt5sP6kLC5S6HAWgTn5KCbvkx",
  "key10": "GJhdLyz7XVSM4goepAahEsP868XxKdKjh1ULk5eWkhz8aYSNo7gbpnK4VSTeSJnKHga1AhNKRH7WN6pQi5aC58E",
  "key11": "3m4iJjZukoVcGmHUkW9xg7wtzvoYk4fEXo8d2bzav5TreU6fAvPzPEpHTakT1WyP9L57jsVy4fLPkEJgcBCrszhF",
  "key12": "F6hmLvFgrGm1LuSnypm7QaTvjX3S9KswyW3zG5ghhSUknt1TEmCtN4WaW4NLCHkrCBPbbmPNFAYHR4XzZ3GKsSg",
  "key13": "4kPQNsYCnbYB5HMWLUjs5FAUngdT1yYHuTNDFons2YhPxzKUztj7ppsNSEPRWniaxb9xZnTZoUWZrbMYmzZTmuCL",
  "key14": "4JSUnn1drLnF3YDYa6xQKxpsaadU6Gq3kemieuGk1PGpSXaKA1W7w8kdJVDsfSFXxmLeD5nbTDffhebRTGCz99xA",
  "key15": "7fuuRTyb9mvLf8ioNWB5Ww1Hup8ExSmX7Rgzx3yy2cZ44emWGGk5Btdamf5Xr2nsCGV9YTd3FvzmjoLE29YJ3P9",
  "key16": "5BAzjLsoqqVeb2qnK7q4teyHoSCNCrBPPVK6mJp1PDvc2aQnBtTk5Wi999aVbk1AGdrhWLy1gMc1SSz2A52ARS4D",
  "key17": "5EQ9DYmMSLtTqQj2ysxFpGit6KMoZZfHxpsLrWnxntHMRqBeFmAKMM8pE4NbGscL5sUtTzKte6zQesY5dVS8Bt9L",
  "key18": "3ttYBPDgYn8S69yyEfb1Cicirtmpf3jRosLvSQCbNqbiTZSQzW6Uh9uxTzSzJNzFTW93oZ2JEc2mvaJXxwwQHWxn",
  "key19": "36b3pwUh1ouiECioxWSgrCGJFxbpnuGYbSmJfZFFSB3Kj9WWaKEgzaevoNpd8g2tCdMtKiTcueFvofnQgNfzgL6y",
  "key20": "6RBn8rrzEncTFZ15LBi52ouKUNmpk5rF3SHyTPVHt1EQR2yS4J1t1Re5NoYsXomJ9DcUYkQ658WSgnmUs7Qjw4M",
  "key21": "3TUFECZFgS4geV98krkittd56EQ3cPf8em4STrS97wv1eFkS79dkTFXbBSF8m5pvebY6mAdfNdsoa69BzoPR7633",
  "key22": "4nY3Khbj9Ec5oFKAQ5HeKZrbpNy3rLLPKPPYEAiB8J2VPG812ooo3h1k6QPoCeBBmjBMswr5Dupae53iBa5mrfCS",
  "key23": "4e7xF4d86ZcZaCFsZuUsKtSjLSH8S5LWJ8LixwFN826ZBFCpZJ11PE2NadjNHr9VfCNSGmfqkkDGGCdYZ2C7x8r6",
  "key24": "uMd4xFosbWgHznwKHEv47Texz12hqUw9NBKCLEGN4QVeGy5EwnDQJnrGf1TN8pAPoJEW1ykGQiQBJXV5Lkft9Rf",
  "key25": "4UreUrvcPaVZKb9Gq4uKuuTbLugNgnY7FRR4BxUG1RjvSFRLTDrwdPtWNs8sd8R82SUPXG5wdq9C8JZ9pAEVLEg1",
  "key26": "3ht1ymhkcWq2DHESmRuYYN17Uq3JwFDeVtZA3RasFFJ2Hk8t7x5LYHfa3iwaXBFDUme9DmgaBvXXS9kSjSrL8MDt"
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
