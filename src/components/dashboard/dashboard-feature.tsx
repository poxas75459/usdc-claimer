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
    "i4Ht9Mpqu75gSKxgAWv2XYLz2fbMwGCexq9KVBo5EeiZGgrDBfigcgnJ7pa9xb1dnQnt46trUYCFvWXAqLx88eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NurML1x5RvCURi7XuSuPJDEjvb2NUBMYceAKfDwbtsiZP4r4cdySFsGnEAmtLbNtLv7z3BwLxSsMFWBbpm4Z4i2",
  "key1": "3WS79HX99Y7utZPewqHK3FKumRWQa6MSdS3nePwiJujXy3ixyQPyvNFgvV6DUH6BogXB7B2aEuDKYFTGTSQPNRyK",
  "key2": "16QxJ751jpGTuydpbK8GU9X1qyUcKpewWPkU7BpxPJCW13q4TCM2CvMoUbMfZ5sZVPzbSXdfdYksMpgoWpGWXNT",
  "key3": "3DiXdAPPF9pZiABAQShX6hADnEb6K36ZUSb6LfLd5p39AE34tWDFCCLXAfWaU8fqRPvku5MqjmnsWCFev53Eb6yH",
  "key4": "2GWEKkZnhkgoTxoYsUn6F95sfMPw8pND1XajDx1fKHa7paXQkSjDmHxY82KN8urZ6gTKSqHJg4Qn9bnuArdA1MJU",
  "key5": "51LASwzwphRdNsNBJqBrJWQsT3AqoEbvvKQiAYqtbhVjTeQ8LgSGGeqY5xNRdHWi1Jz3D71frc5o66YEy6gNwTNG",
  "key6": "eSTva8VzEKTEtwF5FLNtKWUXJC3ixziFX21adzTp7JgBjvkpeshKy6Uya6SKePNVHbNUuyfuFZ6iDPgtgM2QXdU",
  "key7": "3eD98rTykXGraxH8W9gJYQhsS1pwohm6aH2N18rCTjc66Jy6ifT6UPLZnmwBye4LBra19C8eC4kA7XK5WUvCPeLS",
  "key8": "2n785nZitYLyWkVrEma8k6fwmTYQ7niurigHaZQR8viarc6ckXcYU9rt25XikgYwq7CYcHck7CKZyyPA4joyRjCn",
  "key9": "599acyP52DX3ZiADtYWFehb4Q1JpfVALA5Z8zE9vmmombLXfWVp5Uaa6BuWA5HziALp6MajHykNm2xoREP5eYFNy",
  "key10": "EzgdC3V3UehDFXx7AdGEbEiDuFvoTSQazWrVb7ioVgK5mQNSJDiXKPHwmAsSLXDqRnZ3FoSQeq7awXtoK2atzQW",
  "key11": "3uYWoDYRM82dhmQGjGzM6QnUMRVRjwoML3W4N3TdqZSU5iD4Ub2Wwz6L6pqcqj8Wpum4QpXL7wjQeJHMZWk3Y5PZ",
  "key12": "4gC6ciywW9hEPZPPzotcHXtL3K5tzndtoAuWWauegbj4Wo7tdVw7eRnfoHnx6tSbEheu6Fx5vpBzLsHyZvGP7nsz",
  "key13": "2motAf4SwV2JTND6W4L1rF5Gj6WDAWBCyuwetPtJZGb5v7CnRbfrajvK15iwTMUAGvei2gGxLQjaPZpnRonR5teU",
  "key14": "3SBgZ599hr7nj1MqkHc6XmiDLb64kWzYjDLPEdDfCpkqcr7ux6vcNz93tUbuEF1ehZym12YxcE6kvPkr7GYt51AH",
  "key15": "5bPRpES6EvfmPBHeomSqA74nCycwp87SkkWrqigfLjF81dAt2hXx71zkJbCktG5zRQ6zmUBBtcpFwfVXee7vGSQT",
  "key16": "39MbQugWdbFFMdLTqhYXo3jMRG55HoWEuttvexawsxXH9Sjo81LqX8chSRCw3N2VB9psmHLZpDCdBJfA16UHqYLK",
  "key17": "D2sgebuSgBMqthayHcy1YSA9S6NqRakqXQHwurwW1WawdbJseQSYANfJWJueTNmS9n3dZ4LPnAkTjY64a4i5sWt",
  "key18": "5N2sBpyxW6PgM2isw1EETuWajA3p26FKN3yKhbC7iR5CWYWFYLCH7cWagGL9cVwuDgMzsfJEWUvSeQSNCqVkG5gP",
  "key19": "4hE9yR7yHARuDasGPmT6Rd5X2Yt9b8BMzyQK7XeTzEhW54skZfwwQMidcpE67M3uZMvRg7C9FbfVYCJxCorQg4ca",
  "key20": "3jft8wzgx1KzTErxp9eUD1zBGgmmN3dBp4A92JJ2b78KxkGd8KNVzGcogRCkM5VL3MxqYBbMiQHsZBA3ST1rEBtd",
  "key21": "4MgZmQHajJYdhrcYPPQeutMFV1PSuPGwLgiajUsAa8bq4GnJB9xUKKv38GtEovUsp67FWcsFSgPh9fBZ3Ld2zYqA",
  "key22": "2Vrrw2ndzixJqPFyQzKxPQD1EDh345bQRqSxAwromzGSBEmY25JEe3hJgGHfgMu7vuYBfuF1biZ2SixtowHtC9qi",
  "key23": "285PJU8sG1TUFHarDb5ouhB3fpKzqPd3iuM8nJfWK5KFbff73CfZJDo58zCZZhd8Gtztwt6fcz1pnoDSfEWHkunn",
  "key24": "5g3N2Kwz7ZjtLvhq2hRjqcGnE323d7pBZSoBFo5XtYYC3MWKMG81wVVWfSvnmqcpEydKCWP7AGhhEsVKnyMbDnKT",
  "key25": "27zs9DBctuuQxRiNw5FJ47wFGjh1rbiW1zcqFpnfNcr5vrBWg4bfJC4GfMgqq7m8mFZ9QdWNzxepqANavvT2M4ie",
  "key26": "3rf5avhh8UugR2ixXmADsfHRrE7rSLAoTKEVebVgjqS66aVm3VErfdvCeB5NpwDW8freo3gd6sqZkp6dgREqtpDA",
  "key27": "2WCwFTSwJTGhwJ1nyxBVjUXVhVzcc3x4q6HnNZNazKziTp8TqezsZbguPw7haEZ5nJ1Xfa59UPpDcswAUs41FX92",
  "key28": "2yzuPsv7AqEjCeLHMC9RPsinuwHjdx7PPq9ZJxr2NgJdmqMoSt5xSEbPS9A65XJ8DdhBKQjP66xoACHxafZELVoL",
  "key29": "3nHStyRJUWxmZ53Unf3MVfjL6fBUGH2ejFWSLnUQXvi1uzRgAaWp4LBWw7dNY2vBEQ8h29nBXiRQbezCwhyygCrU",
  "key30": "28CzUEw739fkDDXxTp5auh36NwLDzx5AsXK9THVWBK6bQVCAratRFrFTLTXNnddm7SkK2HCsptWbS5VQ8QXvFuED",
  "key31": "3Ms633rpJxdRjXVFJWp61avPYAzQmWvs9sCP6rYJyDDd8xYNsQLySgF9Xyp2JjC61514DYyRCv6M5cA2LYnchXrt",
  "key32": "37EZvMujE2zSsyWtkbAzjteaAUBiQMzv37x49HUexQ5NJKVXAeTTXQH99FotTwEGkExCKFGiquzXrJCxZn1FHHdi",
  "key33": "4eMsuNNiFb5iRUCow6BgYjUGwBSPuAQr8X2Ev2XEhK826tSBFmh1ounfYZWn2bSURmuPkVXgHqYaMpiApY8VEepV",
  "key34": "5bWrrvzhFsmcN4Hqpm7X1Z2GVo4jSGyU5KBTnzHvHGBPyCxn4v68fnzdGCcYv4CUxHWdag1CZBBnQdqHF27P8DDt",
  "key35": "5SLK1HtfPYfMrwu2jxdnJj6xqb3SvAUFwMNdWXTC8NzwLEXWTD76qtBhSgUmzSN7DS9DHiTn1jx47XpaFbbicdL6",
  "key36": "2coou9whKKcMLH8oMRwxTuARK8zSLLD8SNRU7oDQSdRehVNNBzTvCoBhspecPnV8T34qbvGaBMxY52Q9i8KNXMA3"
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
