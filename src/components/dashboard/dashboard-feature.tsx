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
    "3aEL7rZrfWv9CRXwSKQN5SMJP7mu64v2MwZgy8WHhL5udXi7Jspi59TR68xLpB14NfZ9srRhiKGoY5TTgoHQmozt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71rTJwCfZoqEXjsJKgdow5wktvqL8G3m8df1u36piNa9ZQZtgwSbs2q1DMpNdxpWhnPpcyqPtW3rVvHd9XSEDUB",
  "key1": "45BVQ9QdKXSjFjFcfM1DaiBPdgGKwU2Jqz3AvSndK46B7qiWLPb3LiJVDAEp4VVxbE32CiGutdci1Tcrk1o33XfJ",
  "key2": "HX22e9XW1S3VnoHuUAEjGKasD6QTHc8C36mwLtigQD6xm6EV12dPTVAqRvJuhRbTtsU3Ly9ERhCuUAaWhD9fsCN",
  "key3": "3kukCwhaY4gqza33pRTXbVbNTJWLADugSFtugDX2x9yjNMm57Av1Ypa4ws5JABxNSWvQ2uLmv2UDKykacEFs2ETX",
  "key4": "5fT95gMUQchmvSHM6VKbWnbf9NAiEJ72mhTiyeFWvzNWPDKphptnrMqJN7VLcK72QFH7dofZ3qVVpM2cettLWFsQ",
  "key5": "48JFcuYzQupYNSfP4BiineVFWJAnEZAsF1est1YyortXXktmJSTt1SuQKCepVHmij6nKxCDDrKkfhdAaMWVkvKQ7",
  "key6": "cvHApLBUZVVMHohUdeosheWZ84CMegwi21Aecyv8ayabMqPjUHyg94GJ473FRySL37YxV7wDfF4sCF7m4fiFRC7",
  "key7": "4A6YWRA5JRs586PhTVYGsUm96ZUvj4fWBiJkfcJLFpMRkQnqVDiTXKXDxJjXTTMvRmkxtBtPADpQZhDYE1mbEfNF",
  "key8": "Am2LxFSnwyadNBeBF2wKoGbWNfbibMGn7fJ2TwyoV72vS7qVP8jgJ49zJUTCGBvvZgNaNkqi5pyciFE3G1aig4j",
  "key9": "2ukqdgwCF1nmdC8ikJeRyc1tc5zGkEtxBKfvj2HgHrsBVuLGTFAaCDgRaMycGn59dfi8WWK78fpzjd9rWQjxH3Da",
  "key10": "3dAi5wuv2kqC4c6DhTc3o6sdzPaGpjhi2y2tKBNqZr2HugQ3ginV1WSbypacez8BsSxnVNuF8fhT3HYGBiiFzE2x",
  "key11": "4FqHjxR6WDWyJComRtrHADfCui99EKKsPJ6x6N8D2HPuL8tAUpwuXMNKRWoqybsS1tJCGaZyjh5mGEawcjwNhaFM",
  "key12": "3jxZPjUd8wQULEFqpzqqSjrAfzCW9iQHFnsJZNAN9eXBgz3rkpgHUS4YevPvcrr4MifoxstrNeut3NdqAwBHhch",
  "key13": "usGcg1fhm9QX8oBDEYcKGxvqZyqRS1Lbfnztr8RWgLuCPEVg19vpC1YyHU9gAqsJfBNE6SAMWHQqv2yghmMyaaS",
  "key14": "5BxkA4waaxnVcra4JL3kbRZaGQECZzJb6uX641aZJfDizA4jKVnUViMofwMPV3aLteVurrcMcG4RHDGbP9uVYbHP",
  "key15": "d2occxCdaBgQnpysioADJL9AAiViwZwNGbkykQX4o9jYUKhVoSr8CX6UZwHffBXBrAvkT5WLZKB9DVgwYFStAXp",
  "key16": "aiNJY6yoKe6gGQhX1Xw4tzpiKCryrNVi17fd6PXuSidWuPGckgUPNRQTPhjjrfv5YYW6fguJSRF2YbHEfACtnvy",
  "key17": "4rkQcWHupeyEKErx9a2caUh9jY3WJZaJjqRmAy1AVbi3kKXV9YU2QcuQMyqfi4vbQH2UiKKGnZ5GFzpCASjtWYS8",
  "key18": "2mYYbmjREtxGvqbBC4dQKxbKTAfiLG2wpgLYD2TgNYcjpqQBY8k2LddkQ5rdjLpw2hjro5NUTwY1AHp6a8WV11wR",
  "key19": "5DAfzTAP4ujmPGaSGujuTgxujNxYUko3jLCNpyzvJBsecZJcDZScpVKkkNmnX7ED2ZX8tY1nnGbmqV4AKVdFTqpn",
  "key20": "Y6xhawFHfoMeSPa2rHRV1fADSHgiy4xCDnLgCxcpRcn7yYoRsEDwBPUUNByC8B3aFcjUg8X1KM5yWardLabWQfS",
  "key21": "45w55P4DP4mEggYRb5QKzhMehuUnumigCM61cck2qKi4X5cmMCBayVFAxebFsbaXUK2Boi658wGtDtEKAJTYGgXX",
  "key22": "5Gqw4YPX9RUPEFJrJetzPBjq4BqQjdinkxN6BwsJBs4PU9nAVDGMLpHFRzhrdqP7qH5GrDawacFdx34ARi164oN4",
  "key23": "4v92wYw51LoyABsi46GSu8NBkXnxP4kZSsbAZfs4cE9hmGn7Keu3KJcAhAUbuztYDWGmH2jeqW9fiXDWeqJ5tEek",
  "key24": "24yyxinDDuRS6hiBH8JCVM6HR5oVzMEBpPUKYdx5s2efdYyy153xr4BMFQuiZKtYKTrXVCT2tGhtfsS7Geeckwi3",
  "key25": "5NsbSaaUGPAzXnDHfu8EFpchKwTopgCNL2hsHDfVwfc4D4G6w6kmx7c5y6rCX6nnZ1MDgDRWGcYqEFD9WUpTsWev",
  "key26": "4G4igrC1w3hqcAVwU5CSkF8avdKRX6NNqprLMMzD6HcGczaWX68EiBrBMBoQ6Rr57qJbAhuh1xdxs7spTpb7TtCP",
  "key27": "3SQUnUyVCTBiRLVRLxsp8PaSPGsBFXM34SiYHqULnVbEUQ3mM9LpKrP8LVPfLJXsNpgQHLRGw6YLsn8NFq3WsRo6",
  "key28": "9n5fR371D6GVbxB2NW2CAU9GjVnFsJE87SKsfecWvADZRkPHyH6WM7sZg9z5HVP1NB1mKchjV6jMWJut9LafuZU",
  "key29": "3EpFn52CrqV92oEPwW8j5Qj2UJkngf2H7zVk8kK5vzEmED6VS3vr7quRuLyzKgyuVuRXkzeU17dUZcC2Qiy8TNdX",
  "key30": "331ZwcnFb5qZNtqHGDWPr8sfzfeaKghbS68rSqNyqyaEy43m3ACVs2Vs6MaFWk5KpeyqpMuCF2heT8eC5Vd41rpP"
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
