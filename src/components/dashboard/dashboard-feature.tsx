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
    "5oAfUprAnHxevvVm9dZW54J793D5meSArjQGHrhkJem8KAq9PEy2TvziCJ9HtX2WPVUiheswExvUp6vRW7sU6Vk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3JpefwFSAtmVqZ4cWLFPLWYtRAAEFumUJNG6EcT3F4Hrr5YmgxPwD6FZxJRx5P2CL2VxMXtChZovJpD563DoNn",
  "key1": "2wJUHitCfBsMzaAuAdsLvakwH9KgQ965CsonMPEPDimhNmwTWvPvNq6CDzGprtAspVnyqMkMwmX4Z2GUvqrvggbC",
  "key2": "vjihJwz3exW6ekM6haak8Uy6p8cf1vrF7ByRaRgpt5bv8VfwL1y16irftB4Cg8LgsYkjy9hLGHjisAP7wLVffTD",
  "key3": "WY7rHfCFgv7NtW4NGCsXhFBoWPpRTjBUptv4XU1DmR6RMwFUG1rX8nQfBn9K5fBvqMjP5b4zRYjBzB4n7KEZW2J",
  "key4": "vFmJYmp3Uj4eJ9jtfQWieLVqeCSjqSCEXL3wLGUSth2DVVFjNh4xMLAHYWSdep4uUD3BMhe58F3jZuUvAZpH5bB",
  "key5": "5h6fgBgyz7oUvvyeZqDA51VaoTrheh7QM93yiF6vGNQv79BpP4joyZcq3qZbUcW1Qp78b3izKdqdAoF9d3ryHfNJ",
  "key6": "49x2Srgzy5sTqfjX8jCqDJR3ZKpcT3DDmzGqxv17smkcu5gAYZaju95ovQsK65SWfgmhGRhB9CBPXy7ZEaV4PhRk",
  "key7": "3pZ6kj2mzPKcbjovXtCNKesfyNirnBCLuuGnzvZu4PoXUTx6NtgYyjchuEkrTHeg1j71c2K27t1SFDptZKkU3uwi",
  "key8": "TqmqyaPPFPwFePYFNnSQ67P2VbnYpkPQYhPk9GsCzRLUfM1fB12pha2r7a8VLoVs9pufkKLJsNLJELXgYSh48Ns",
  "key9": "4n7Wb5M6D7zDyt9Qarprp2UAjA4YVG91QDnsPAMCvkdzyfEZ2fpE1vgPKwnyjBAosxoWSEcwPGtT4REsCiA618vR",
  "key10": "5Xdyok5LZ7dYc2Pn7SrVUGTQHLHdnNzH1smrW9eLmwxfkWw4U5B2uSynNyJG7njQ2juAWETEDca6GWmEufkN4cQt",
  "key11": "5aqui8SNSBya4zNSoyH8cdZEqujBHToM1dChAUYKC6nRKuE2haUf3uuCcK7GH69Ct7kKNZ4MbejjLYk38v4tL2mC",
  "key12": "5TLv1zFQ3LyBw1cFyDi7uDhpYapV1iB5aj6eE2jmgwuF2yxmDUeiASWVyNRgJdiP87G9SWBnrrMGcgpVJPMPsuo2",
  "key13": "5F9HqE4wFgAvz5vvVFGV7GmB4a2b2eTKMQy7SYynqCVKkxkTwCTPfm2WYYr1psXsjL7iSWE9jYnwGjdm9Y6cVFp9",
  "key14": "619G25QoXF3W3kzyEa7HLQMNuhaZGssb5mgcXXeHv4zS7ZhfVZymNocSf4ShFEN4zczZNAdDZEP5P1y9BMTayvSd",
  "key15": "3LhXbxKyFpGHLGyRhW66XWTASN3N6LEEjoj5YhNG1sH7iXovwUwup8FqcK55tnJYE3sv4C3ZRKzusYnjE48KaVqV",
  "key16": "2ZTbPcwQZHvsg3rbqBvotQkSDzGaAbmNEpXCDAd1iEfcTKeJ1enQ93JA4YvLzsACyVqymHqrH5pu5EJHU7D7VrAt",
  "key17": "65r2JSShAg7wkknj6UfpuL7tE3YnCYra8JCyLp3iDtU85ooHDgu2wsNG5BfnVFu6Aej4RX78iZfqNbxdfVgnR4Dr",
  "key18": "2sGnjPxd7dqR73cuioKpJw986Hfe1KUFBuCNe7GZadPDnAmE3KUmiQBb14JVKZvZTBJJLnNcBYJRucVMBz6s23DB",
  "key19": "3r9NfWWCM6YSjBru742ckUyoinnt3TjJYYfiy7UgCdbRhshJhxoTHjwWYFUAKb9RrFTY3TvqvA4aKc8oBHMibD27",
  "key20": "bxP7yMQbVAzXB5ZD6KHoHKANvJsQV15qhwm3uWgS9Sjk1EVS8ZVpdLgekWoW7zvzrY1XSW8M9ViisvxTqL8xiKY",
  "key21": "GA5WAXBGucch8GorUqe4TYsAhNyfBnZss8W7x5cbSAGkq1n4ZLZAdVFCjxAE1AKpQkd4z47b2GkmXU8qcJsxB5F",
  "key22": "25bfokv6MjbwujT5mcZjsPibn4G7xvML2KBBzaP9GGJd7NF2yeG6b6rUcKv1na3WsizsFNjzUV6AX1iQXTTc8dzV",
  "key23": "5ujNFc7ZD1ndKgfvqQnJgMKqbVrECmWDXhH64LPNLA7hkB9Fq1UT5tkBNBsyyukDCq5M2f1T3QB6G8AfE2AviQ9e",
  "key24": "jtFJDsgEHiTgMb2QiuQYG5UPz2yTqgYPvaFbyUbVGjfuE2ZuRYmyRvk24usaMdRXuscvafFqrdhWDsKFA8E7PGu",
  "key25": "4SRHdvG6LEYZzcJC64Z1w2vb2qbTTmTGAEA86qXmMUrd3Vk4zUhVLADHcyWkDNnhMVAB9FtMEFcUGJQTFfrdwLra",
  "key26": "AYR1C9KppTRfVp1VjjopLLpawJNBG86DHyJMj4Ho82tiXENpYP6neiqt9Ggz4EpNizauNHST53pFdRHJ2Jsq7fP",
  "key27": "4N7hr19Kym2FuyirjiMTaBM4FSEUyq2by3yk5cw9S1SKrxvHdZacPpTTTwMpsNbkDr9wTFZv63Y5oF3ao6vRkHjv",
  "key28": "5WFz87DB6r7GVGa1om3TsHo3mpgsGEWRt5pujGgR7r3vpi7rtbmmK43nqhNkN4pAzcfTHZ441vSeTQrbidjy3CE8",
  "key29": "Lwiwir7rcvurgMCh2uCwSsHyXfpF2DghBPj4EW3ozB6tH13dPcwcPhD1pdQ6rsdhuY4Dcs6c5LDFJdTgoLqaeZn",
  "key30": "4QqdZN9B2yFtXJkFuLARxBbvpWZRF3AEosc48ACFCiy7BgSgQSUx3uic7mfUGAge5jxRW8rAskwo91tvZvESPoUn",
  "key31": "4ia4npnFbaFqqXCpGRfqE6TqsWaHBkWQGWTxV49PqRW1WNKDy8LjTtUh7hDnbDBCvk3w86qS1Ky6hFcKiDVnbXc7",
  "key32": "3s7pxkqu76mEuamWdtCJE7tpehxk6HXT7g7E1jt4ZHs54dfSVEymevzqWZwSnnHmbLp946iCJwdb7kbk8onPBZQb",
  "key33": "4t4o6YfW4v78a1PyHAQJ6fsy2AVuhDT9D9bM2Y1DmARMPBbRnZ6ep94wxxQvJR7t1cpX5MigUP2GtLsVTQb6sw3J",
  "key34": "wkcvpJYNXKGXmrfNWyPr3DUabtL4QauXHj1iPcNttnb42u7zLBxJAwLy4UJaAevQTMr9tkAkofegpZTKxJ8WSfx",
  "key35": "4HjSzRP7Wwkhe3JztnyuMSEWEd2C23K7bhMcs6ZZCaSTWk2LMkoJ4QbtRj83X8pCwmJuC8wZ9hge4YeTnuu4vfnA",
  "key36": "3NBrmA27awZSUYGovPGtBbjzyHKcccwVufzPANrfRcWVnUFq9ATYPR1R5XwU4Pjz7jHjBaQhaJsu6XSgG8vqAZUu",
  "key37": "3N9mk6TirZzXfUt6h3M7wQWMFGV5nmu96m5C58iyw5ma8mK8B6ohgMnvJRvMtBkReJrAPPLfHc3ibmmMy69UE5yJ"
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
