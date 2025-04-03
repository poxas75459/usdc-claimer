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
    "2SR93PWj4ve7yvtHpqKj7MGtQDvT8iGVjQtJrDrAyLVEmoNYwVWEC6JSihYQfL1uVKXR1f57K6JEb5Sv3euGxU19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wT4EtCrerZDg9zWuoHrEf7dXMUt135nWUj7ic31q5c4dSnoRzTQBcKmrxHkNxKiZMZcyUMvY8m1FGD5RCF3R2t7",
  "key1": "34NSYLpRmBrg4Zxu4VY6SnatbcGa1kPADZzcbStd9X2PNtpr92GiSEBCmjWsNgQs25qMPeTV1THMrzdLabpZyBKn",
  "key2": "3hnaAhbcCqeyLmEvnbvxV7ha8r6gxWSjipdG6DBhfKE1CdSGsViBDGKbnJe6fSU37vVfSujvWcskHzvA6PyC9JWk",
  "key3": "5j3EUiUYJcN2qsGxrXR3bFdAFocW6NnuHhgzDnXzh5WpTh27NkEwvkZFz16iirP69KG6aE2SYaV93ov5gRYdKTWZ",
  "key4": "qVHEGCuWbwidERCnHP8LYHbrhJiiiyAGCBLP4ViUgsfsXbjSn3xqPHM2pBDqpFZic28GbpE2apWG9vCPcwk5zJV",
  "key5": "3nK1bgQWAQ539adZ4odp1sEnjdYLD1VTrNF3MnfbVGNF5aERxT1B2ZvY3rckm7KsitN6b7SMzxXjtzc3nGR9g6LS",
  "key6": "5rxhWNRXpVJcSq9AFNehw4A7mPb14gpcvLoha4kLT9HfruD3dBiMtYqqR1hHDX7eGsDrqRyF3Mbvqu3McZydaJ8U",
  "key7": "VX5VbDwNpRw1qVYC2secUefFCqabPop4DvXLb5WbbEMUsPtSsoJbkPN3aJHjbbpeMAyufWXjRaRJXrUzfLeeURy",
  "key8": "5Wzahp7dCuJQ9FVJQ4X7Dsmbgre6uEDDewEtRkiWtLL2BBmYJpqvsT6mRQatzFtCamjrmDm3yJ5JMBjX1R882r2k",
  "key9": "36qhbRyzFUctYEohS8FXCZGwykrwCLW3Z8iiiS2yM8h2axgjpNZD8g7JkQocsehm7bYHVeWvzqyqg1L6aaXUwcJY",
  "key10": "32w1zC3E3gFCUe6B8RBXTAbEhfgTkg8PhyL6E9jZy6i7BYX6BS6ycisjnYyeTyWSrDoiMv2KR6rxjKzhcPspERWm",
  "key11": "YZWX64rveB1CeDRkQTFuSWHthBCpBx9Eaki3XENi8apjbdFQQJxBH9RCDMCYrxxcqENhkeTTJqawbCmRbkEohn3",
  "key12": "twdxb5bbm68pgr3DGf6iR8cyCFqqK9PGLu9Fz54Txxrf5LKaxLZuCwXJKJSw6soeQwKcdNGt57LnYhVpAk58Dq9",
  "key13": "4iA1fnvsJqvYodUXPqSYhwai9b8ZUJwZdYxRbrikxaKUeCoCYd64WrKV9M27r1dHAcWBDe5C3UaZKHFm8p5TcfJW",
  "key14": "3gy9bnykNayQjBMHoFTABMNhMxhtDYiLcqojw9WsqLmgw6ctDr7X5jNLNhKraLbsdKLjnJcXZpEj7ro3Knpnm62M",
  "key15": "4heWKwQYLqMd3RQc1ekTxaFMSxC9pYucAHauNANLXAnMWDtWAU3KVikVFbim8KUujSCc3odGMxpJ9H6TsPuaFFxb",
  "key16": "5EuAmCygyjrBPHDR3CKRf2hUYQQN5Xtm2GyWTpDPVfBtKb7kuTiVk9PKYQFoHVYTfURGhEqGAtYXHszQYiB9sR8D",
  "key17": "63H2qL45ATuBQb4DCR846kTde21H5fmLqwbDphUsSpEKj156jh4JiAprxoyRsyQNQsr1oduPgUz7k8deLACe4yzq",
  "key18": "3ujX8mzCDy2wiRFXpyvhDayYhKY7dgCRD1tx9Kd1DJ9r9y1deBvRv2jFTxnz3Ja5AanfjEVxkJ1MVTTsTfL3339E",
  "key19": "4kE9LfgbvqoH2g8r1uudgJQK8QHa2HWvYPMifvYM5wiKComGMQs5N2njBz8W8G84RjxM3sGq7whypnvm3dJa2CdF",
  "key20": "2ktWzfQuTYjz6ZzTMkRCCr7v8x26Q9YuRqy7RBbpzmmfpAwKt21GVCvYrjhLZPH2YfSoJVcMvDkycUx2zpaKDLyK",
  "key21": "4LcMpdVW82229uWDQpu656ExuHRWABFT84exZ7HeVfJaRRAkHFCtLUDaBBFri6gYauDoBkdX8oVoorvXvFuYipW7",
  "key22": "2RX6MYQBMhPsQyMfgRVX5c7pVvgjEmYQwQiWT1sfdaNiVDSPdtA4A8E7p1Ygcgyx1dGK3viqdoWA1TifN1HgjZVD",
  "key23": "2unbKVtsMPqgV53i8sotgdrB9xT73eP9PijkNAPNYd9Cd3zqNGb2dPzZdUrMJEaDUHrs4fb7Sf21s9tTf2apzyG5",
  "key24": "3RFEjHPRhLhoFxLTDVYhQj37khQLD7B4ojCXWAJP5gvjMEon1kKaj8o7GERJUzZyEzuN1so6ZG9FYKhcUjWSByL3",
  "key25": "51gtqnLBavx2yX1cxNPVdHLKQi7JLHgBHRGr68V46kHAP2AxPGh1PU843zGoGD3oeRWVo8CTyJBiC3j725siBiN6",
  "key26": "Y95fEjLbzoB8hW7fzuxZLWztq4ieW2Fsaodi1p3gtKoQ7Fw5qXTL7TNANGiY6YLeAkvqsZA5CHR5X7ch1rfQZUz",
  "key27": "5uXt7QymCSXUcyo2W1eoGXC5gDoiKp2LsU7ZPaSf741UQ87RwmtycBnacARWF1e2JDXY1kBaCyLbSeS4ypC1fQP3",
  "key28": "FUvsTvMvazFwmZur57LcQnmKbZ8CeSJGBzvS4jggSDqeudZqYf6EN7LSZChV2NDyXapVEAkkXEP8ZfqQN7xzpk2",
  "key29": "4SEJ3xW5z81ewWYFATpWuZbzh644G5gxxLUjm8Z2zoYni4HmuiLj8cCfqRpYoiN7uCN5mF48SvF6D8NbxBE38xNY",
  "key30": "3D7Yfqo6vXaGgQvXX1tGWuiKg8YXsgfxGgbQqMTRmvSsR6mjqeWnFspBFAKLRZ483cpzFgZE8GWCBE3X2mLKquR",
  "key31": "2LBvL9zXCAu9cmvZe3MKTqnBVRmPDaWpTehrX8w8GTgcGpDqst5Hc8555YHwJcuDaPPB5TP17oRXY4RCdM9E5GJd",
  "key32": "2SjmU1Lex2Kdm8vmX6kvNZbCumB7FefAnMmnr6jNjdtvhagtr8RfM6Jsw4HDL8XRXiEBFtYaFbquNDk8p8433zUe",
  "key33": "2asbQT8CuPNwYSV4KLKsZT4ozdcCqpUov5xy63DtZ6ekhjqS54SypmmZSHhuwfP3ab1sS3iXdfNtPtzzgoaPD733",
  "key34": "3TKj8GvHA5FK1BNkfDEetLUCyQHbRh3gKiPpZyTrivaifXxC4R9nHqJVXbE9zLpDL4uo8m6x1Ypd7oeNTzwJFcgz",
  "key35": "2rXakqbyzGaJERe5a75YyqVhhggCZ7pebyA5GdS9AMFVgADp5PJhG3PtFi3CtogR1XwUkps8xrr62oPByequy6g4",
  "key36": "3jreHTZujiTv4kat7CsvtDDzcbpXoQdrJf3kHPurH79fdxiiCV9CWfPt7qrAK6Vh8mzvaoPHgx8dxpzLFgQDpKfy",
  "key37": "tdyAWXCASbHTNj4ENm2nDqKDNivNJstC6g1qSFp5XfbfV7dbPj1yq4a41t3au48thepSFdTFoeg48pUjip6siFf",
  "key38": "4ubVnKG6UTZRMU8FgP1tv7mawMvkeivbQv8S4Pn14jBSzEr4msrYCQMG9ds6jB6oCdw72nFDZRbYuRJ4vB1XEPZN",
  "key39": "4wue96zwMq8gE7113BW7x7BayQqPsdwgZfjTGq165WeXUyKjPbtr5g3rEmZQmv51zow7QP7wbqLwfmncWAq4ygwU",
  "key40": "2PFXndCM3xoqaDYMmWuWfkT6GgBYGjGrueU7AviQdJVD4Fy94Q7Db1XJSjpzqEEe2CHt4LpPFMUU7pcaNya9vxck",
  "key41": "5dypdw2hL625rqEhSoaAYnyMfaKS635gwhWJ3fwKq7cjdyNGFkALsUHxNeYsreq8Fcd8pqrfUEP1opZoNnJ2Kqaf",
  "key42": "2wDaM8UMYV3nrZJiWbcLcKMsFFQ1nHHnG7zrRGEhRkpgXFvUKVMyApacwymTUUBoXePQyRhLHFG1T6XLX4N45UHZ",
  "key43": "HgScn59vMaN4oWjW684iW8p4czHNkq1ftxNFifREFqUMFKRQ7ytiK37T5fdyjwPbgQT6uBCPcQH4oiSUxYHZpem",
  "key44": "2SzLKBcUAqi3EJwzUfv2QNZeVvhzN4nq9tzcgbtVX9gnNfEgMf6jEPGnt4YE6PhQkY7EYfHEQZD2wLsPBa3gq6nv",
  "key45": "3zn6K6RXABQuvL2PaZ8HASKvqNU4ujAPJLeE4BLadKemx3mksYH6yaNXNHKbAk8rxpC4jpKNaGmv36MdVzWKAinw",
  "key46": "2p42AifUUprbEoptk5BfmxNVCn7bbL4kP2Uai6egMZ9RWxY3CgTWZSp8GNcf5Zz2otd5uVaNTecDfHUpi7EP3Uyt",
  "key47": "28zRTCERYF6d1EM3wMR5LJ4Y1gDPGCccrEXNZoeSL3mLcKkBiMn4B197eb5qQrTkjq39y6Zgox3vxKkdzgLVakWX",
  "key48": "4MPo6QobCxwhAZ8VCgtat6KobMWzscDQ6XDJknjEGgyThdGqv5PK318zoR3f8uH1wun7dTLXGdeRWCGSxXc2uxRN"
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
