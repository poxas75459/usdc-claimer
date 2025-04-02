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
    "5b7mbBSkGQbvtzHHTSKKn6UBEkWBEEhZmvGt6pvi4qah8rWgMZeKyLjo3FCcjSorxi9kgBj6ijnFi8JJAPBZzEdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w76WZUs9qybHgLhcjadKFAB9oiw7sx7AeBLtvcGubTtTrLxvG233BDwGfiN5QxF77dLKsAFHb932JZ2nJxTULqF",
  "key1": "54s8Kgu8stMMiS3uR7Ka2a12wJgcMLNpDtkrC1fSnJXHdmACVZxybH8rWL5YHD11vPMM8Bjiyj5ekHFNHHBh8wHi",
  "key2": "A2xUxSoybbGYRRbkXCXd1oatvyo2n2HccBjhaFhxgnQeEysJJTVaUTu4buqUCByEZcU4qdtSUEpPaLqBAU7Tx1L",
  "key3": "5S3afUSvHQzEk9VTbJScimMkmL27VhUJscQJh61reykzvkqgAD6HPzKVNGtVpkPu1MgiSkSNjyTwtfmT77j9cuCn",
  "key4": "4oevnV33C6kCVMjrrkqLB472wgnt5g6zhfo495FWfmgwLf6iS7wV9fAnxGQzJJrXKKhXGFYRkzawA5YgWDiJau3m",
  "key5": "2k4aDHXGWRfwKk8T7GPd7mWzRwFxWBeqZy7aZ6mxrphMrgnq7DWEi3ddwMQTGhW8msGT2TsyVUcQUie3sehiW5FX",
  "key6": "521ntTXefJ2QBzU9tF7nU4zy66tF6VtWvs2j7UKi3CdSNjaeVRqXYtb5AMAJ5b8NtamncEsHVBzijoSzFJ1tqxuP",
  "key7": "4ZdiW8yVPT2jsr7EXhG22FdWSs67Ets9tQPNhyKtHbBQwkzShw3TfkmzA16H6EJ14dctLaT8PWmyqyv7Mn5y1Yod",
  "key8": "3Sj9L5y2ATRh2JXoaAjqieu37ugc1HMronKsCBHqrEm1fwgkTfbRnx3ot9MZUaB3rAcuqzh4rhydrroS8kbeu9rk",
  "key9": "4igc8fFS78R1rwPbtrv6n9dLfe2pzmdpuhdwpLYiq6Sw5wFmdcDQtXQYrXJsBH1v2WrhkDyXuym3vEeLMuRpurJs",
  "key10": "3fa4RV8NM8R39CNbT2p8SPoR7oZFNWUGNU7MBN9npLjBSsV3DGhsNN8MsHX4kMi9GhyNwuMJLM1wPHmapr4QkmjA",
  "key11": "3qZRJJqS5AFPh99dobHXi1DYGmywuAvPYSnPESPi4BoMAZM79BhC2CQtQckje3WLdwpj8VNNNN5pj5nxKMefHHTp",
  "key12": "125b6qp3miVzKFi7Ssx9PrLExybx7wkWfcxkVmZ3RgmxoJzfAjuaRT6HbL5suPXCBR9X27XukpumzGpHzMRXFnAh",
  "key13": "4YtYJUz9MLhtqiKTnnt33AVYJsptw7Rm7NHpKYLP5gmGnucsrvGEh6zQZGoGSWn8TBJRDf1ShWBKLqYS4zGPNunA",
  "key14": "3DqwBs484gsmwZCAawXhd2ca17Y5AxuJsVn1dWwPnr8cn75RU7yhBfV5YgK3Vjf3GVMuFpswKb2Np8jP6pieLK5G",
  "key15": "2TFRQ8VDvzwGq9v2j5CYBpsNroX6P3D3vzWg3yespZmriJjra63kZzTY3Kq1SL3NSARsAB97qRG3BuN3MB4khZ4i",
  "key16": "5UCwqh2FUD5h5BvRemNyJ1jcEHfgk8dxixVodxajECFPGG9hPEw2B5Re4JjjNLibbpoD448HfYwzEZB1kVefqDg2",
  "key17": "5gTjCVwSbVxSyLnSWRV1tom3TjRQ1PoNM7ihEds1mR5uGHQUtFxdi27n9gpRyNXjA3TK7rhnNRXU688NvdUVtbMk",
  "key18": "4WzvFqj1mQ6gkQuGDf35qm2Mn5Tz4fTwHsYanN28uhsPzeWT1LePEHSqv4yBdoQ8RSn4oWQRgBh9WddD2Tmh2hfT",
  "key19": "MwJVs9KV2ZFznx9xX1Yhe1hF1YFSmh1NWrobZaCoUrehkgKqLdfByyh19wVM5H3hmeDsMhdN4ZdeSVXjLVBCPFT",
  "key20": "4fo9c2PC8LGc1XWk3B8davnxMsJxFy59VcbaPCh6khCMWVWhoEr7Gh6ryetV5BEquDLebiv7DN35spdu8SNNw97Q",
  "key21": "2eJmRm5V4V9iKzBL9YsEyzKZ8zsvNwExRxPo4QbPY31bEvUpr8GMNw1r5YVKqsmYLAU6jUhtwggB7YZ8epKjkXUe",
  "key22": "3t9VCP8rPT1TYBwW7hioTjfrU66eu6oDZaCVi4Bzx19Epp1LnYBG4R1a1Gvq3irK6nu6XPc8mDEuNzrXyoHj4JcN",
  "key23": "4RTe9bHamoSMKmn5S9etMPCeYqYnUvJxbraBbwMyXLZDBFg5j162forfCtSrhbKvyqWcf7RJXxhkU91wfLqsZuS3",
  "key24": "45CwP2m7X43t62d6TSSgEAi8MusSEzwetcJWKwuEHQjPrbQxfF7mzze2jfCy1DWScXsv4S5VN4mc8CZtuEG9LZTE",
  "key25": "4ra6ioHUtBPRSQRy6SatqgtYsZLSToRJXSxv76p9NLhRuLiBVXq1LZ7b1juCdW6cztzUUG7waiB5MULmBSJ2FH1R",
  "key26": "4rRc9qzQXiPN2DRYHfjuBM9Em43HPBTbvkGP3J9XRvFkyh54udFdMUNnVgQzKRbZahWpSbfDgGmXrhXuDjQQLJ2R",
  "key27": "ZZzxRfwg52jN5yBMVs8zkHDL1p5WZjE9fcRrFc2CGh4cVq6kQ6NpYJY5qXGLJ1bBdVeNQgTDWVcBqt2dyDSuEa4",
  "key28": "2YXZEM7eqfN16ydB3W5Hk2veJRhdmj1Dcwta8DmkyvkSPePKeb4FtvJ2NSEYmRbMjJxKJEemv332avrmxG9KLhzJ",
  "key29": "G1zYX9LVtjhxmrxZJktc3krwdhsuH5V9sis56bL3aTEUmahPFKrnHAgyACf4p2ttZijJEc5q9EwPAs9UwLPygEt"
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
