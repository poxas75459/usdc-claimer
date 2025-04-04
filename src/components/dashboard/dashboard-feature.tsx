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
    "xjps1VgkReVmwTYgiMEaHUaZa9VN3sdZoe7E52o1CXdUbKVjMW3Y1EmSFps2cmVCDtP3rHGoxB5a5bdarukAU5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FMvcPVWA71PdKUwMWMtgrpATBwCY5nsoXaeEMa2nYnhgtqYr9Bu4oRn6yoSDwn287adssgJ4uirnMUprenuhKyR",
  "key1": "nsFhWCKKNwm58TvBkgZMA8XLijHg6wMRV1FpoDx6vEBiij2NGuKUFawm9gqdMdzgkxpqQjFDTQLhBKYWw6eJbqu",
  "key2": "5Yk1Nv5YYUwRNVQQpTRUSQ4Fwm6RDi6igL9bXcPKZ3zZ8y88bi8vjawMNN9JDcrx29HpXtLc15r8q4PEQcTngVHS",
  "key3": "cpsX3Whkawqw4K1SWgzMqsirBMWRPKbQkyYUfF58pjsN4KuZ22BDPeuW9YcUHyEkPYbVD6vfC9to65JxTy7LD3q",
  "key4": "mJ4v7AkRoGW175NVcTnBjbwZkB4ApHVvrdDJreXPKYmZ1jL2my3p618DvBw2uq2E37XPDUBGFLfhQKh7wHM5bJU",
  "key5": "3oVCv1bskRd8gBE24L3GJbimf5VAtoUbhC9oDnXBEPXoskKMrtR6GQExG6W8CPzAGFNU6iKNfJTUeevAx4f7oED5",
  "key6": "3wxWyLgwLDGyqaWG24afgPSp3EAJFFwDRyxWewQgtjLxHLMuLiJk37QrD54PtsrW92WvmZZNTXY5aLjV488jeDA6",
  "key7": "3DhkvhDz1TXBj4qf8mYDET9WQARvTADa3modtu2QS4SFKD6x5edbU2RxPpW76kpzkNzUBiAc6GsSfw1zRGYRfXLd",
  "key8": "oSgjztTQGgQbeAtk2q4MPdJB6nitbNg4PS5L48e9YtFYGzaTANFdADzM1qxeQKe5Ht62H4kv2PygEeQQYx5QsTE",
  "key9": "4SMoZ27ce2urKNJHTbWoApSwSVUw2yqeKmi1PnuhP4BzGSWcmSNB2tAeYzFm7daFXkWCCB9TSxHFChENct82KjCR",
  "key10": "4qLvftMf6NdnopQw2DuHqFh6KMLJikCdsNebpDV6Us2HCiDeUJuH7v7qPLimXpcicsK7sooeFrjDXnHYtMpGzJ3Q",
  "key11": "8L6wrHyDTjTxyWU9uKCvxMFDH8LiaYSUyMEoy83i7rDbMybnyLrhp7VsHUcFuTwEqPuUiT2Rc3HnqhWrW7WPR3a",
  "key12": "23zkhTAewRXm3vdq5ZuJ9DcdCP9TDKvaQLj1zdvh8zHZBcRB7xArdY3UHcirnW3Bnn9otXg5oMe2YjRBMZukS3Eo",
  "key13": "pJWWnW2AP7VmwnhVbADfx7z4UKzaFjzSamfa1vPVuKV46VshuQyywBirbQpqAYQZAwHZPpaLkmxeDpCS78SFcRi",
  "key14": "4jwpoRd2okay1dcqYpi63RVBGvj8G54BUnJoQwPzYHWGTmqWnWiCxvrWt4bGDh94d1vtyjQ7cvgw43WhVENrCYGQ",
  "key15": "3sLjjEaj2cAQ27WkA74EHxWXvEy6Q3MG6Yuv9c2fNFs43Ua335rQaeauV6bibZnGmGZBiY54fRQVjffs3N5F9vvt",
  "key16": "4LZ7q2AuB6kWK29xa3C17ufhfggscZobRqQmZB3N5o5RcL8YBJTz6Ge8L5ACjeDimGtZX93zL1FWxp1D7w48sY5g",
  "key17": "4o3vQ191nuRKdr4efnGfYj4hVRHd6DP5GxXdQQxmrvFZxebJFy7PuMTCwm4yL2TccJgbjtPg5EcDh4FbkagCi5cE",
  "key18": "My4rZ4DE5mkF27YhG7DozqezqgvPXVv8o1geGuyt8JSQKic1JR5ezELow4BKCKN5K26r7mgmcB825R5mbeJDGDo",
  "key19": "5W8tZnpB1Le93TPEECKgdkmBCWvEvTkkeWWpqNqcovvpfZGZxfzUkHEy1wto2ZACrBZbPvaAHWrJnqkWWhtBbibT",
  "key20": "2nHkBJdu11yQXU57YB1VG7A5pCohUZLGST5sECA6ARhgZgcLJFguEFoBtyjRaVa8Q5nYkY1HT7weBm7fCPGzEQXG",
  "key21": "3ToZhpEpGxJjMcd1pNSoedRKae3HByKAk7TxiyYYLwUiU75ycY7gRHirtEt347y4mVRYes6QS8cQgYC8U9CvdbM4",
  "key22": "31YbXxrN7T7VPyWvKQnLGTkcm1Bq6dbneBc973gX6KsERuur6LhY1ahko1pjF9a1KSZYZTphD2tpma9RfkH2V6Zs",
  "key23": "33vp13e8gjxxCt7RKJCsBGEZJHHtLGH4v47bmoGdXb97qbXTTmR4M5MFuTcxYeVQTcubGabFgqdWCrHWVCZuKMrG",
  "key24": "2pTpy9caEu67yJqzSrdVUExST9NWZiM3kCB326nNTz7v2r6QnkPcbsPyTm2xM9QGGTLXt7WPZkAmwNuQWtcY8Bce",
  "key25": "qingH49rE1LZkzzffMWnkJVcCFu6tQVHBPjTGjvTaCT1bYp5b3iD7Rx1TepeJU1c98SBAfXtdk7B2pp7zdrYZTE",
  "key26": "4oDCNU7srtZyd3xWRXWWAwXP8std5yNB7aJruK6JLD58aM35dx8FApdpMWKr6a26aXKmsb8kwbrbGc9mCXw1w6Bz",
  "key27": "Ba3Q17kUPGPiYqaaSZPKz6xZ324D79szdgUfeaYKYDYZKBj9W2imi4AnqFrXsobsedTpEAwKxwng7zQ67sNpKDW",
  "key28": "5mi6Ux74gQLsnV4vyRo9qX25MrV7Vw77rCzBDnqZD2NUivDeg1d9jCVQ3YutQnnuqdUP4X6AZSYn98p9NgxdLf7B",
  "key29": "4LEyJwCFxjHDfmf945E9vCoa7wATrxQ2PBpJgqe5JJ7fLNz7J955L2PyePh3XC1CNPiVGgG9hApgQoQFuuM8Ya32",
  "key30": "toTMrKhf4pVRUzvUQCqutS24MvLxVb5ZttFFVkcrRtbswVJfCJb8np1WdDbG9dVq1EMCb26L8K414iytRwJXJVq",
  "key31": "57xB5aBv221JhSjTU7w2eL2YB6iX9dyjhqD1Et2HtXwBCfx8cnVPTBoD9x2LvG4NpFXc1Zt9w6pECBSJX7LpVv2D",
  "key32": "3Dzx5G6UwquvxuUme5oUjfWGFzZsGXFjc8JX5tzGpyFzMrAZgTX4eGZEpHW81jErq6zUPBpZVwcN7ppQ8WMUveBF"
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
