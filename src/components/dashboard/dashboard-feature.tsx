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
    "5yGUy238FQXu5xA65MBTiuQYeVaq49Koq95Y8cGSJA4LiY2NHsZ3cvoKH2pGSMgn5F7FKzet8FAom99cmGCQJSCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221mxvHUDnCrdsGTfMh6xUFpczTua3TwBNsyFuP4qR1jcnXKT9MpFgvbo9mMNosZ5Ut7HFDWKjGe4YZdVA8rsTnE",
  "key1": "3CTfj1WZmgnqKRKtnXtdHCCecEMHu4xhSdWs4SEAzSq39HsTuiLdjWNGioV7PpDH3ctZKxNJHPiTVjdPATSCmJh7",
  "key2": "Tg47aFy3iisC4neu7cFM9S2NFcWFGezbRUUdSr4ZRZqvb5nbm66AMXZDYGyTZgdHH1imbSGxsoUur7A1RpS2Ju9",
  "key3": "kmvMMbWD7ZchM158ZPYqqgQXwQ7BbKnbHMF71tt5ZUY5baCgAn1kspNpNNZ1TUQppMziUdXQ14USVyTSJq2v5xZ",
  "key4": "hFffCxWoSo4nNi3XjSHEuCw4ZFZDuFpuz4Eyq62j96K6Ge3HZxiCtz53Lk4W3Wfbck8QZVFGxkhX2NpXWfbDYrq",
  "key5": "47epqrucd12vMzgjAHHGAVD8pyVxXUKdXRtD99jxLoCDTikoNRCdtzUe2B5Jyh89uB8bHSoharrEs6EzG2bu5MuY",
  "key6": "5oqNVPeSsjL8eKRCWuxSiS1UZbF5P7tApHZr77wc1TAXD49gVUqTgk3vzbRHViPBzTPSUV3UqUum5eChGwfbJp8E",
  "key7": "VsYcs9RoBjtAJemNvWAjaqfMQE3MPzFBpfxdV97d93Bcd2meEhczXnj5XZ2j1KK8cA12fwzWR2B2V2x28xyJdLY",
  "key8": "2MX4GmJ4MFQCVm8JtPqrZjTvbmiznfrjZrAbjtVdPDz5x9XAEc5AmiuuNRUq9MMQH8Rm4vsJU3phru3hx6GranRw",
  "key9": "55CBAbr7jsJBQi6eGzw2r73fe21TDyEMVMVEAn8TC3wjN8qfDieokNbUz46KtwfLHCzzWWU3Ae4wsr94rnZoX6XX",
  "key10": "4XoGiCrHidwJ2sUprHahmsbV7qykgsTDXaLdEm5HzrdfmJCYSA38yo7AN6JZ3fEsJVWS5kdetrffUMspFVZ6H9hf",
  "key11": "51s6N34S4gsfARMALmfkeTbkuaHbtWvp8i8eZ2gRhAxfVDa8YBPSMnnmegbcwMzjifeubQL9KvJszi3NgcKToyiH",
  "key12": "wUhRogDUGz8zJJTGfZeCEUdsUrRKmskyBr4SckUuuMWQZfJi5obfxRjdL7avixyeznK9CnzZWGsQYfs5xBJYDN6",
  "key13": "5siNUo2gi2mAtWvhod7p5EyiB72RcS3ovrS7pf8rvjFyTtDEinC5CBWyPDQJgsKyRnc7p3iapW53YYsABQ7VkDB7",
  "key14": "4bt3SghsVCcB2cgk9B86WBJSekXT5PUXBvMRi2ZiXKGPy77ogHZvx1Rh5PPzK4kjJNu1wTrp1cXXYfQmZLLhjAY6",
  "key15": "4xDjMwZXLrUCxny2f48QNfb8bg4SjsY5G4tRqxsCrVkEHxErDqUcQnSueXTD9La7LnB3ebQba6WDqe7HxFrSgYKs",
  "key16": "5DczrATr6ZtN14g2fiQ7EmvxCFcGJiR3jKtrZw3wLsApe6W3eSZrsM2gD7HC2qTm1pa7SeuthSg9fPgkBq78nenY",
  "key17": "3RQZggF1ny8ge7gKyTJS946bhjo3TMmvKsBTnf7bSimUuGDSRsqKntYTJc2zLTiQR7baXxxMJyoud9e4PfuV9BAD",
  "key18": "3E5DeDTEp9Zsb6EvG23q7Cnt9mS2myTagfUbvQuD4isNABzoRBRPmwXYxzkTZKBFHPmUZxwwW5sdMjUghmNqFQNi",
  "key19": "5SiyRqMfthVqDKgYgByZjvNmHQh5rBeAZfK6x65Uk6MBaqwAJKYsSRsBZARFpG7CwrcD4kUQiKLjZzBs3t2QqtiR",
  "key20": "5kw4q7foUxw83kRh4DQxe5CHdqi6XpX4T4vDZpRo2XVMTMLAfmRdCcLRzRsh6sx4XwvtJhfQj1eNKwexvLoSBf2i",
  "key21": "qHrzpMRw8efm1z8mCai24NUhFiZcndHpgwbS53BEbfwS1CqeEZexdvWBomVDVLtcQbxzE7VEmvU3Cbr6eBJdNXF",
  "key22": "4XeUuLrhMFLGBaq7ew8t54JDA4HfY41tvDFRpnxMvRmLKgWurBoEuPJABr7B85PGgZ3UgD27yuKXjLAd7mP4d25G",
  "key23": "5RdFVivX6ooPT7hrSJPbADf6Cntsn31YA2vv9dsLEf21GHxU9KgS6CofBRszWEJdzC83qCwYnacf9W36Fbmq94L8",
  "key24": "4vkUebPGt8v79r7KX2KUgUrEqHaCdF7pAbTnnZstXUhZU7zior6vjd4x5pMFHHjzLiTVfMG6u4kwWd7yW9v4z7Ug",
  "key25": "3R5x3RZkBEzJjiyCingEmRPjrYwv4LBiPzk6pFp616RWchnd8HXFv53zkftevnrhoyedpgUs3mRQMWfrv8XdPQyo",
  "key26": "2NrK3njbu2ZRBUJqCS5RXBvFw8Gp4CApDKaehF8hrEriDFCHtoBeYn7ptanDXZZPvd8PYXh3KNfLCHDYUsRDrrVy",
  "key27": "4kFL2GC67WYL6fGDXwzbKLW2zo9vQMyGhCP1cVB2fJkRLKRRDFZq8kk8RK4Da4pc8MkYtDWE6a8w59kCP8jC2o61",
  "key28": "246enP2b15mDZCKqb1fX4Nrscm9pCBR4rmgVLF9i86w2b9DhBEdUymTikSuWHsyv3Dc86cV6KDSj8Hcpp3CRzJKW",
  "key29": "8r2LDEiKX9cS7XdgWDtmZfWn7f3RgZ2XEukcP8vQeZChBoxYh93joXqhTDbmspYSYrBMjTamE5KRB1x81J8hUif",
  "key30": "4dzLqFb4KGt5zPPP2Hnz4BmcufxXLW7hg8YZazrmErJXiAw65ZMkctbFm7GtFca7FojMJYnru8VFBy3EodhMdVm3"
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
