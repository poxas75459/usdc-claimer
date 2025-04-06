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
    "4bYrJkspdPJfoGALW9irWdc54zxC8TeNaVp4U2oKbDkcb9FPetwZ8uvFHXKGXaMNfMW2XrqTKtdLA3aVqAiRM3Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3r9Sjyp1dPhWJqMffzLM6zKch1MpSfVACgrrcV6o3NYhzCMaCk43xEzwaoXZuxQ2v1V21xZhTEFQRckZ4gqBHJ",
  "key1": "2CpGMYMzLSmSpqLpquNTjcN5eTRAWASwCHWmjaJVQro8QmfmYnX5CcHZbXZajra8X5PexkMuLVNVRBMED28K9Vov",
  "key2": "HH42w4xp4AuwQ6NDqNbhvZwdEbvfx62EbsFL25Hx1hq2LQVnU7HankXnE1DiJn7yCRdUK4BJZBB7YmmiqyVf2Y4",
  "key3": "2t1FSqE3QdJxnvjnTYd5Ud25G92dFJekaR3u5JwMYFEgaqjthjtqn4rqNThpU9BC9wbXb2dhjHdKqwSQ52i39Hfw",
  "key4": "4UobHBt34iLTPTNNkxJXQ8WUNzgiCBxyEsV2PcyMijNepjp3cbJ49mx7iApRAbMt9havdNQvGuVC6zm7UfxrKD9y",
  "key5": "5i46BiYQU3ZLXeAGf52XgSPTfiT47xAQ2aQfsSy52D8C84wYKv8xtbSDdzjPos7wRGbTy4t8c9C6a3qDF8Zzg7W4",
  "key6": "3ya5W5V4AyeXcEw6iFuxG5Gbh567CQ2AJ8oA5qfrdSMWSx9jq2GgGaUVxy7zKF2efQ5T3gCuM6FdwWiLhPG6LGNF",
  "key7": "3mTZzocp4pV26624c6dkW9XboeoP2SF5jq7KkCdHHGMm725GAqNhrJg4H5m78d69xDLBu1zw7PTrwEWtAxFFpsEL",
  "key8": "2fqu3jo4jdDz5kaNeAJ1gz4y4AnA64zXW7axW1Lye6m5ycmHKLffWbzXR2HFzTRK2ES32dvNmcHX6jEEsbJ7dg5k",
  "key9": "26DGHvBed6GRm4dDhheeqmB1ukUNGUKiL1teYK9iEXvtqNr9m3nnBdLVvjPcTUzRD36qKJesW3dejDgevR5xeq46",
  "key10": "5FhxxVqh2MhtutvD7sQKPsxjq4oiV5RTXcp48x8AWto27rvznyrMyezAtP1srzWLzDLrVyC5dSR6Y1mWCg5srvFJ",
  "key11": "4r4o1sH4umD2AQ5Ju8LJpCUeoypnct8xwrBUVQvTt9JUf99U3RKD7By5LhVAy5LHkfeqfBuc7Qvq1d8NpKkCNpDo",
  "key12": "35xgEzwGuWAaw8PdunkanK22cp55SFxiGnwBhdD7XgDPy6Tj1aqP4mUuPZQqSUbXEsqBxeqUpjVNCFqmqRQde38r",
  "key13": "Tfihy9YbefjvuG6L3oHD9pYcDL3prTDU6eiLZixnsYWmcETdBNQX6229PSpra9ijFJtqg72j6KfWyK4eSkyusUd",
  "key14": "2tuSsDkPQLYUSRUXarwUXPiRp9vEXH89o18HTUuaqE7X9LfuTatR2k64zzhqdRzsEUnLjmTzeCPK2uHAtABGBrmP",
  "key15": "34xkef9BPHY3U2ntJWPLpEs15rgLyPjrcgimaMtKZFZJtfRoEwNSMA3dvW3ZdxKJKaN1dJC6kFmNZmUeQa2ULJD4",
  "key16": "4DXv6hiqQD5PjfvpqLrpZZsbiLymPDjH9g3985z2PF7DMKL3NrN1LeRvCKtSeky9vduPb1CALEYFN6sCdd1PQ7oT",
  "key17": "2g3FwvBeQHshqm3fjtFZJEu8FCjcZ5W2gfJFcr8Ukr4REKYYkdxnxLJWJrvRhBpLBsV8Wmbzb7JdtYCTMKyntghx",
  "key18": "2uukCgFRZFTDDkmQkHqTJWHT4kNrsMLaCYa3NRPEdgWBknwXGX6VLdq1SxAAF2X8UczmdPCz3DjAy4xMKTahQFho",
  "key19": "5X5FaxiF2ywC5MD1HaXX3RwnU1h8dKvdJudrdcVinDad5armbwQoDcUMqLVaFwMG7V8NGjAwd5pNYaebhCUXbQJT",
  "key20": "63tk9TSEyMgqgnHa6PeNyRScHYxr8ZJCS7P6HqUW7JUwtVZGkcpdHewG7zWSjiNCY6zxWeRcPNiiC1DCfijKmpHu",
  "key21": "e748LqQKYh1MrioUGnttsjX6PgxdHPK5A3n9GvP7uxepjmNrUfiaCm6ZWcMmTiQ21MReDVMBTqfGNTAGsegLM7N",
  "key22": "2X4hP198cDBiCaQyjnGjczM2YD86ddFfXgeBhidpXYrwcVFvcuGY9njoaGaYwN2rhm7FLpNcdE7N1AFV9G8kCsm4",
  "key23": "61TX3eT53Hrq1sxmGGefSeRqMgrMtzhu8Cieban7KGZx2cB3xbhAoDgtX2HK4XqKazkirDWVsfBJdGu2Cw5kcFwt",
  "key24": "5DVYi52AQ5MAJxv41RqsUmJkona1awoGtecKVwwHcjkMr29yreq5uFKNmJ8gdDq1omAM3pC3iV3VQhgMc6yg2EfW",
  "key25": "2sdHeee1h3UWbTkDnPoV63coXEoLdoUjj6rsqczHSCQW6xtsBaVxLL8ocszamtC4TniruppxS7D4AYnfBiQfM8GW",
  "key26": "3gd5xKB4mf1LbUTAJyU9sHsJGPE48W5toFVf9Fx8A6ij5LPRQyVWFRUrvrrXn8bGqsJzPh3ACsxQp78YANySF33r",
  "key27": "5nEPqPPNQt1fhTss1RbznfjBGqzTsXLz1DWch1Jzncyfr5DDkKKLYQhyGmEd7zA22zRweChpnyzUQAosPSEcrkLY",
  "key28": "3jtthyErsn85bncBj1AQx1rLD2s7tyhNKmUCNPXbxrPSa2pZ4gpNH1SJmi1btwTwYrPyw2BKitNtT7piLx5eEoRy"
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
