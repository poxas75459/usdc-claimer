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
    "49q6w8ez9HwchogU2eNUx2eyNvDRg3DwQknxSkudZYsafdfZDLobE5FQBHTJrFqsxsfSCHxfU1Dpqy2zQHbfAPku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HbrjVBUCPB1UiPB2N7vxDYHa7XEkx3n6BNyUHF412L8BL6yMNXoDQR2rA7D7njoyN4nT1zkMtirYDXWe68zFUmE",
  "key1": "29NmdeuxEnKEz4UMNVzRYFAUEfgEt7kRb1WUHJdb8BLvSEwsdTYtLJKfoi6CwKKFE129m6oVqSLDs4Z9U4DPLPKi",
  "key2": "2GdJuNTEQhWXYz3JhcLJM4grzqfGY7p6ATjYFNppSz4wyYqPw9vXXQBEiZ4kWCjtzsocHV4gPekPi81WaVQQ7Efi",
  "key3": "37SrcXA2VdHxrC37V1dsSkT2KQWJGqkPsqQgjWbgcWN5n2GsuW74Yiotpa62vSoRFQQ8hAG3nUHHSvTegbES5RDJ",
  "key4": "M9dCng7RpwbX6FBGoaWLxVqp4rF47DoXr8z4nbtnWbZPpizjhd52nyMXf82MoTecZqfd7idTtKBUfEwbPqN3hZc",
  "key5": "PxgSaVhdS9YTmZNsi5V9eXM4EAU5d5cZXJKUX6kn7CL2L59LAgb9v9QA1qzj7fJsREUnxtJ6WE7qUn6172ymWhr",
  "key6": "5VEcoAMWBrdmjSz6kJwKSqBZyEcLqDrACVb1aATzGTqV8BbuYBae6uS8kEjHK252pQDekwdo2D5dyL7DdCBdPX1j",
  "key7": "QrueSmd6DyJc8QWLViu5EwGyHVi6vDTyJNiUUv9G9P5fqr9GWSUs1G1BweJWH4BspUR2dmb3reDdxgGJNCzS2A6",
  "key8": "4ZVYn8R4KsTQ46UZ5VjJszM7thk827k7zWk7tPEwSPTHeHiarpCVXkAWjufxHT9bonbVf51qqbEbTDd3nhsoHie1",
  "key9": "3LTu2Bv4tjzHpaygTYmBmuevHeQBRtjFBXgWmmxzdMezP2E7XiTqojzamCpotGZzYiuyUEXrAdHo9r9gmck2pwS5",
  "key10": "27vnkSNKvbFJBfagD5TXDoWdEpg2tD9XtnsL6M9WaK2hsoZBZBaZ9X29Ux1L97dLxpbLFbCYpZ4Sdov8YTFL14wm",
  "key11": "CA87wpoasuzw5L6ntK3rzxnztApBymzq3Lb7Qrk2S9HuPNNybQg4wyf9hbPqqqFKe97zJDRMDswYKZdGeoLmkEq",
  "key12": "4CJNSxVLCDASn2xmAAz8hmqExLCSpiJMa65FmGaxiLKNZxVg7U9rYKmucPpRmBXrv825zzeH6U7p2tAWdiFGYTHz",
  "key13": "4mvjtvPHo4rB7CLuB58S4VRafddv9f2asN4YhdhJg7jDhMpaPC5KSxsa354i3bvBhrB7CZikZU8HwdAA6P3zJDMz",
  "key14": "r2BqwUoXpxPpLuVjrxv7GPaozw28EgPytMrsGj5kMvqTCfXaVZyTsZiKniBE5WQJgcNeevCnqQmvTomcqVZ7ehe",
  "key15": "A2FjUzK5zwQ2FjZ3DW5JPGu9Qdy7CoRXFRFWhBmmMUpMcLMy5ptruRNW6ENRuV8eEu7YCf2MSdPEkwhHQUagNHq",
  "key16": "4oejeqH2D8XVsv7rAuKn4YZ5uzfzMwcQfpYhgvTvbYYTvVvxQNkX9FXW7MxstQ6f8NCAG5BRRuDLXjBohaSNHpXZ",
  "key17": "5fetBnHEkJEFDAu6kG66VVwkArUK5chqyX211GP6phjh1u8Fa79FLneuALrc8C9oUYotDT7UkWUgcsYALuromftG",
  "key18": "2kyzmHMQCepvu9Y8Jh6a14nsaTGv1nhPohu5invxdFAXbbEG5YRxQueDgYHzmzhKTn36bFiZrvyPcb1Tjpq65Gf5",
  "key19": "5jtaPj1q2hsDixHcfwbgeQdVrK3TCk21wcpjMK3mgXnDKzyZzE2CsZhAc4hwResLEMRrAWxxWF9qs4tpZB9Hpv5v",
  "key20": "3Lxovou1NrJYAY9j9GdVBoTrv1Eqjp6nWh4Wvo8TNdq84X5Z9wvZhCdq6DKd2LRnfVwuHLwzs7KYjj61tZEta8o3",
  "key21": "QGhSNwAFpN25kbMdnSXRdYWEtA2CnTYYXDqQKMgGB1aQmbL6P9Lnq6saDS3QgjjCJVgPJPBSF5hkkMeWv91Z5ew",
  "key22": "2W7j9tHk139mqy5NgJmJsSZyKaxF6DSqpDhmN3v3AUfDKa3y2JJGTp3VjKaJrnLDGUXeZvhEGgWKrtH5g63GRA29",
  "key23": "4oXhD1pbp4kMWqj3Tu5e4E3YkHTLFLzGexa2q9Kg7xLh1iVooskCxFNoamVkovXQXQK3GAZ5fiympLMr1SddvDAa",
  "key24": "1277EekCNYENciusJdwHxhhTdZPiNSXVaUhzbGcmB5qef39fUyBZzBXP8BAoD9kMTWpfMUtZqbkM1yjKpqrHwXFb",
  "key25": "Z57L5rMkULn4KMK3YJG4uenxfsUb146wkbhfNHLeV1L3xXpAhsrboa6iCJbuKUw6RfHedzy24PvvmstSYWPA14P"
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
