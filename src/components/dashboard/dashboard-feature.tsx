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
    "477PSwGYh1Y7qGRD7bBiujeimwckRyFx5h3D4REWQeGxWg4pSpkribZZ2E693gBRexcEVnSqZwEEB8cbeD2xgX3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaEPfTKH1Q41fNKkRF6JTpuYa96TKbaiywYCmvGEjwMUwPoVjTVWbxeX4JZMwzfXoYfN9ocYGCpJQsSr1TB5bKP",
  "key1": "5xHtawXpsvBCqMyXYEQUkeC2dfZaMcaYTfKgsisUD9KKKCMeJcYMcMLU1yFneeYoaotupanCV1xkzfUgDcPAoW2Y",
  "key2": "ZGvEXPkCWJmEifL3NmwoiiAVDnA5m8mgbmKPXPfMZxUtpoH3MNdUD64C1f6ewWmoTkLX9NSu5GGftMwrMk6rZnK",
  "key3": "2DyPTdu3Kv3588tNBfSLSjKrPT88hPcoYijiBM2VjhVoRcL7WrXCVV3giiUpmAEE5bxfpi1bYjgnQP7rWKPrWvFz",
  "key4": "3yHBQKfUonfaaSg4wrtz5UnnfDB1Z8qyvSNYKUaHsdQdF7P1h9pWJq23uUn82UtNKZqs6f3cyfb48KutpRApC9aK",
  "key5": "4MUubdaoc9CZu9PkL2NEPo5Uo5TGmfe1MXVkXwQ3xqaDhEQTZYwBbheMwg9kJTGrT8Juuc37Ymb2it4Eo6ZTnHHa",
  "key6": "2tQxBi4z3XpHEfnWj5GSsgHojjijprodSZGMordArxG1RGb2ctBvDUPLk5bKd1WoLPGF7VXQ6s2NZofgau3vWHG",
  "key7": "2KRwJoWLrAPyNmMMDaSY6NtkJxwNKGA8fDA2mZmmixgFwvGbnvb9LHUSfY9isP21uCW2iMv1ZeLAj1xbbRUQCTRP",
  "key8": "2Tx68ej6co4GdTzWYvKMTmeFdKBnjVaafKGMCb16wkMygmXTWEbTz9ED3hJorrCfSkLNT9tdZRPCDVRkoRgHh131",
  "key9": "4QdWN2zcGME5T4scNj4EzchiyrL7Y5G9xt6eRJopQojHGoUn4CvbfFfLiBsZDYMy69r395BW8zkfHj7z9Qwwo2ew",
  "key10": "AT1APGBJXwBwaTFVxh2r6z4wwYyLT4sePuoK93zshpKuH4LCsDuRNxP9dPUraBJCcjEodT7MaUZ24FEiH95XtJS",
  "key11": "596VUk7hSmKFKab4NRUQmLUTzWG8dLnyJJqp2XqpPvvTnL1zq833JFc72hU31jD38qmr5VP1pNE8H4BrFGdeCbho",
  "key12": "mGwBotUzJKny2BnSadRrPQe8KinamRs84PtYfGzLj8WdSNjM1LCFPJqHtMetrcywxdhwZowud7eiM4dVQb5e3TL",
  "key13": "S4szMPmpznkPq2rWP8bZuxhCAXxPh5gjtnXbBorFeEhqms3t7NArgHRszuXjYG8bJSEgMDc71Mo7qNgsd3rVYRi",
  "key14": "2M7tgBPpwmSqSksCNgccF1hNWcsuLUwd2HbBYc4bTZRm8ZpsD7qNYWfGfhRzxYFj1NFnrDiEH2EWGxXcew5JQpep",
  "key15": "567DdBMGaUG3WNhxb7myzaRmcYkUMyevyKwGYnhmtEkjRJgLN78WPoNSsZMrgXK3ujweofu9KXqZYCgQ2yE4hQSW",
  "key16": "5YKMxoJzcwZeijHwoMoV6yfwF2PVNM1gjQZjj5bHWYBceiywrc4f56uGyA2hHdFtVDzFXzQDor5gmypxZgKCTUUy",
  "key17": "7cysmfXCq4uuBfWZbRSZb87Rzs1UHBLFhUbT3Eo46hKxFuo9KLTHt6WfHdJPGaCgb8BX8pEnr7xE2W9skUM6PWs",
  "key18": "5TyXkRuYss7w7pxCbKqyCGz7t9ogrEvZqiUWFRWim1qQzKHmdQkM4aUK5tLU3w9F55QS3kwkeDknF3ErVxAxh1ni",
  "key19": "iJxcCji5JD7yqNaohjMUje1NCpJZG3uD46Z2WHVcAkUGsMoUyVVGWh4fF1iRvFMp1eC6WSsrNdwUT2a5VgDCXWn",
  "key20": "4NgoqgJRyyjrbsiF9KYkNgphF3EmKC7ytd6av47NZ14nGdKcpTrX7esfRMq81ku2JcdUryD6Af7gW8Yj6KaVB5Zq",
  "key21": "3Q2tnUsY4yr5Ht9EqfinDJjbRQ7wg4a776oFgdpDFZdQE2zbHAqSuw2Rz2TzXq3vWuPaGRuvB14wdtpjSqwqgUm8",
  "key22": "67p1yXBuRKKmwYML3r8nv2GTdsMbMgoSFpMJ8ENAMkne92qNNr2Faw8bfUNQbQfcNc8CUXrhAobd6gAtCUMArpdy",
  "key23": "3cEiXDcd8Mrt8duN5jVZ5vyobnvEXM5yzEoMHxp3xAUrQZ352nsmhELF3KaC2ARnRShPiseK9o7boADWBE13ttVV",
  "key24": "3654T3jFuWSR24ghsCw5UuxsYxc7dTpwKeWwQK2fJkhQWh63uyRbD6YmyUqpQXNt3DV48vGsfzK3yUB7VsxDPghc",
  "key25": "Rr9gHzMDEdq7rRGNh5RmbLVjpGEdJDkdjULeYu577S7N51pBtd8DoHiVdZcxo4HwSRn5CNgWDPx6YXRfhZGTpCj",
  "key26": "3yUxHzCewEBVrSwGdtgdDgDGZdFSvd1cSe5PPDmcFWugCgoYKe2sy3Gc4yDAeWqw2Ly8jDwWRukiamrKDeyqKjAp",
  "key27": "4do4iRDHKbKQAfvMtSy1guaYoSHS2nNZWuMTGPkjYCSHFhon2WxB6TaNtz6vL6mLCTKkxrCbsT49odKrKSQdCpBH",
  "key28": "5FsMmDD75ZGYarXexeg5HbJZCSrVDui2URHHrFuWrUexcdNRSWzArpW8HJswVsrd8c8VHxB2Lm5iugj3Ah3E6NCr",
  "key29": "3rJEr1oPcgSkejuvz2Kf94SeKwLGgh9xogn7AaAtc7CLig22TrcZ1pF1Pp1VsRgssZgDZp5UtQ9tpgchGBeKR4n9",
  "key30": "5T1ucsBmT2NhyU6ZyebZNMTMvUL1C3dJiHA2Ckjjdvwfh79U21DmVEimjqU3c3s3xLVZPfkBb2HcHY6uYPHPc1ae",
  "key31": "2iZ7JFqMwC6ew3sj1D4mc3jV6Q7vCFkQ3T1iFaYcdtaY69woMcsZJ368QcM6HZMBrYBHQjpzumzRQS79exb5Dh9h",
  "key32": "2ztQR2gGux7QvUXAt8Se7Q2oYForn3xY1vMD28E2uDREf5ddJQKAqtUdTxqFQpHsLMrP85oL5TN6LApdCmi3gVZe",
  "key33": "2oW9UD7Hqy2tTZfFgjtc6RT25V5biEh42fGxWBXRAzbtvj73WatzH1rfLrQHKjvakAwUEkHJFRuYcx6Q6Vxp2D7m"
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
