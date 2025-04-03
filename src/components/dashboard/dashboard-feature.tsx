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
    "5AoR47FpbGk4THP6SYBpms8hqZuFrAapaRxQ8xd6MUCgaijfs8D4Gd1sg26JmeVVKfPJjWtq1sHcstETTPtUgM69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUJ1b2gMJkxrYbTreSBxknPisjCMr7ec7UqeowrNo4kHBSN7X9EziX4KvbWafF17TfqLqEkQCvMaMQrkg2fkFQL",
  "key1": "4j4K1rxCpSnWhNpWmy8SBXhBGXnfqhpc7ZMJtQYyvG4BJzPAnLteWvaXsrS1Y9nZvUKdXMkX3LN7G1GLWq3HHaHw",
  "key2": "5Dtecjika28h8Eg5toXv35q2FwX8n9PkFusqHn4Gv1yymUVgtoM2eveMRxKaaKkXuh5orJwcqZowD4WDGr7Lq3Hc",
  "key3": "2mWova6m7dX47iErpWKjCnaVjGKzYZwxbUav7b3kzKnCenZ9hAgSXpfUN2sFTMfMCWecBZiJ3TGWb4bNa2fKDBo8",
  "key4": "5LHmutFWXeJKgWcRaGWQuJG5H4aiadWGsoPcrAvasb48nyd3DHrmab1XCmLLZsAQkbky3nxcQwmvEn5x3qUW7m7y",
  "key5": "4PocsZHvB8VxXKvtyhV7WArY7ekKkeeNpcc8B5nmh593cc6usrQZriukWErYWcemnnRhcZVZn6MdWUG27r9TNjvd",
  "key6": "44yaect2bcSVxw4wT8bKSk7aqEAxypWLjcpe54WCLWWLE5c4nTm6G2Jd1GuNybG4cVNJepbmP3xRHyJhVNosSkBd",
  "key7": "3KPqHohPh52NFBP7NoHkNTkyDf4ckyocrZ2jy5z8zmjaLpUxRBjs2v9aV5HUXHvJ8ZveiRCeiR24J94VoYfVcrDi",
  "key8": "HSbxPQLXAiKFFDi48a3CrDpmSnpUCWrjNBugenmiR3uuk4TpmiuWgG874BywU1F59fmZKSi7Rr2bBAESwGUzVfa",
  "key9": "UNoWtJZotAtLLVu7SQHTYHWDf9g4g3a3qMmKhodUjKSi4whHAF3H3m3wVvYhwZuDCEuRkRTi8SqAoDJw8NuCxuG",
  "key10": "5zBE4DrYcgTNBExeftsP9Jjthfzj2v89yoHJx2kjnjRAVEuEAbQegtPCom3D8isPnMp6dazFiK1iHmFHMEhz9h7Y",
  "key11": "48EkniKkEB2CuEwo6VrGbu3sKWVkRj1RhuPf47U8dd9BpNzbiVZQNAP7HYEsjiNXj6bmcL3kcdVYDdquKbEZvPbc",
  "key12": "1227y6AYsBe7nFfW6SaZNYy9bYacbVi97awFm3gHk3YZhwceikA76Chq7tBJJZYHkEnL6WxasZc52FMtnW8oXzfZ",
  "key13": "3sbfXnJ8VcwCsdGutTw9tyQGTk4Dupbt7eGSZpZpjN8DTVYi6FVfaFbnpZZYBoFyB9uKcYrQbDsR5gCXGjLMaTCU",
  "key14": "3Pg8sLvhsgUMYF8SVqff5MqwZAHqRfMMkFcLLR4nM9HNsmvv4x42Dx6Uwx79JHwiUP16t6M5qoAaG3V7gC5RVqhu",
  "key15": "5Xjf94pyFz6p82iKBKYM5ViaC4J7xBHi8Rpn94QgtgsAYLfirbNgb1Duo6jXm6svrBWJ6XYSwRCkmuLP2Yzt3gHZ",
  "key16": "3mhVqibLzFZwbnjXqk9RWbyNi41dcyJcYac1ov5gxEq3UyznYyBMLLVS4CggVxbnpAZkq6SNsWmkQNZ8XgiXxBtV",
  "key17": "2WMJsSD94Xnt9pMqb5L7uAUCjfCacGcV7CfSyFgmbRF5zDirAPB4vBy2UTXXnEJDUvGUm5LvnTeSi2iDKjHdQMNc",
  "key18": "2eCeg2BWb4dVWmfLkm35Bm4Lk7YbM3huDWs13Z2rhGdeayrLkLAgeJFyTo1CnaTpDF8a9c4AWfusvuVDRRv4fUke",
  "key19": "4MaFsv65tisRqm7C3ZJ1PhqoHAA9K7uaoef3KMfsRkDhCM7sdfR9hhFTJBr2SG14rzwCM5KUEcv8WaTskJut4FJG",
  "key20": "3oyc4ByDmYKup8uQa8B1Q2HcwpQh6AsoYDhnBN1ERby514ixtXanQkthAL4VX1WdBtyW7QYUji2TE6oERempe569",
  "key21": "5LpiXwxqHX4BTwGDoPkLHkSNDzL8LQhpHjsTGGxcFwzT6TrTk8XvJejWa9oMh6fEqSvFau1hY27wj5UacxzgL82z",
  "key22": "444vqg4TH8xu1BVx6XkfeS1AB4deubGrH5aDwSmVHfTG1tFACw6tTyfFgy8h13zV3SP1H6NUeiLTZ9uZbZF5aQj4",
  "key23": "7Rt6PpXQKuHZjop9M7FLAExtH2Jg8CE5GtxRk9uzxprciXKrYGbWWnFSWnANyc77eEDFUJEPTJh2QbmzU8mEvKA",
  "key24": "zze3c1E7ySXmMKeFZiHsrququGvN8g3YqVubRHKWoQCDucuycRHvdC7nPcdTkTrgWFqDxm4FMLTgmnPyvfZ4HSQ",
  "key25": "5rmq6m2gFZPLByCfuQMJKGx5eQZNB9Jsc2UBbgXoq8BatBi88VCdYH1Ekpa2t7VX3KvpGsnvargcvWpe14ZpwfJi",
  "key26": "2XrnMfyNfySse2iL6YHM5b9vawgXbmh4rBtJxVHbHncKEPQcwtq6Gi75yMAay76VfmXD2scBNHWSVsE2Z6tq1kyy",
  "key27": "3B4HXsj8yxq5rvPMQr8XCCGocdJHrpDrqojEVyKHLs3SkZzwLrBRsjr4vhBMamYkPqnhTqKHACRz6w9Hjc1nY3gm",
  "key28": "HU6C8QE4dm5JGiw4Jx39kpCecpqPEs1ojhkL5GXDxsRUGxrT7BSnYKaR2yoCf3Znti1JUFQk5E6UgAgdDBAu6vW",
  "key29": "HouX97t8o3JY33zp8Z9z59qe5C8ueCytvUAVa3RmCtZq79eAAhBjPCV5Gd9YN7T4rMSMZSd1tKZPekh3UmRFAs1"
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
