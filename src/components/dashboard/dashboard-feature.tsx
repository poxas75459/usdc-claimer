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
    "6T2HFS83npN2PmGUHeo1sbwd65JstehRtCvwZymeoFDfZ8pCMrLGGGrXQMikczJKjqvHPEQDAnysX4Nm1nxPD65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7KzNLQPLFYYLEFHicj8Ep9NTjNuTHXwxkjftWoBTvNoB3rqPSYBEHXc7bGXbuKVcrNKfRGhjXRKh3esRoNEBhN",
  "key1": "dN2UEvw287ABbb7vcR7q45ERFMfeN5MAPEC4uaxzk4trEB4se6w78X4woFi3tPMeKvwFfDVtwWAxBUQVfg4713T",
  "key2": "54XeseCFo6EvQWLRKtkapsRnrW418YXi8ek1kSozNrvGfa81GHHKCbzsSmBAd7j6riN8QubjCaRNXikrLpeNDiqG",
  "key3": "44sLGtHkxQgLwvnyfWzyoMFmQDnC6omHr7P4Lnasi3LT1cMMCRUBUhF2cm1izZC4b6dZ6T6C8mZgb16diN7EavSP",
  "key4": "5wCQSYTqboP9Uf5T38FPYGBYL81DCQh2gbqtcshcvpjD4Nvepc41yjJ9ZCLmdEv9mU5emTPGMfD8JQrguTxaoqLd",
  "key5": "hbKb8QSANdmdrADqKuofSBQN5gM5FsWtFYUZtXCihCrCP9k2ECvkMtp9QiJ3J3TiNJadqAAxJXKTB7ZJx5yxAgy",
  "key6": "2g1TvAN87GrytbM4RbH5gWWQy2vcpPan2JxDL19n1fYKu7R4SBnnYZogfq17sWwcuF7rYHWw5b5Nrn6xyg6HAcUP",
  "key7": "64yheSb35q2ESyUn5bgruWkr9FxacGqx1oMy8HoJA27YEeMeQLky8Zk3i3ohxDDxeGNpyHKYyJzC9kmoTBct1GbM",
  "key8": "ySXxrj27fB12z7C2rdPNmaH1rtqATSZM2DACGiiZc3hcAemmsz1CnWg2xwzoGgHzrMkVTuTZJ7KWmzH9htxEJ7M",
  "key9": "5Czw1YfabknyvNbVJ9MH36SwPrJ9jnfGsex98VkEsPpg2k9sfYBZ5nn6BCSXPtMGh144cR1vbKpZrtbbYZuGENSx",
  "key10": "KrqpW3tQZVsJXqMAfFuJ3oKbp2axThSnG6n85QHFtdq1uA4cUXbLKYzU2fynH6YyDWaNFfGL4Utg1Rbi97LXdKp",
  "key11": "5TvjxBtcjdAfJXCaNsCtjsYjRZZUvWSyiiHUhee3wWaF5oqaDKfbWaDHgZJ6hqXzU5uisu6h7NNjiCHc5Fp793MT",
  "key12": "5NzHkkBjpu3Sb9BTm8hD165Nw5RUBQ2qXcnfYpuQnfGkN1N4XaauKvgV6f1sLu6Ca1YEy2pxYeiGbzJmac9GLkoq",
  "key13": "2mekYx1o7Z256b2aMZZSdi5iRXac5gvYduifBQmvNaG6mtmXbLjP2WMxuZy5zGeZZDXLsx5Qnik5osSfPRDrXNYM",
  "key14": "581queyt3JBYUyqDUgfLbmCQUqTEC1nGpGgdL5VDoNg2NrDeWHuzFir434QZte1dkJNzm7fBJVcFoEgJNzdLFkPi",
  "key15": "vLdENzMUu49wv1Kz97pm8FJUjD8YD3ftqoTdPPXWHbo9PNuhhNnH3LPTZr2BvWAEDaJzYeg8rwvvjGBaTx2eNKA",
  "key16": "49PJ1chmqSq9Q9Ypdn37UFWmb1AE45vULXWwqgNRthuHEgqQ3S87fDMmST7fY84YAkSff8FPTjVQEwnDsbFkxKFS",
  "key17": "5nKcppARwgg1yEMkqB2XFtWzZaGBUVxXJcnEtPvxPtg98zqG3E8DeKmdueij2F69DKrE9RdcJqtMM5gN7XTHP8uc",
  "key18": "2pbh81yPCq6Ck3bgVjPUHGgYyfaRsTQ9SwBPEsXtXRMRv7tZDcrf3a4mzfVffshysxqw1CV6EGfoCzrb36jZxuUb",
  "key19": "o7JB39Bj3uPWig7jScNc4doLbg3GMEyJFFJzeGWPdanEZAoigTYjdQKYVdxvCG6W7MSkn79MYQiSomqruLMKV3R",
  "key20": "3orScTrFdwbirvyn4XzkqCTCMgu4uSLs7sHdZEb3msGcEXNqLLwgsE7iFDsgQcUeYbB1i7DSH7x1Py5cLT9EhvKV",
  "key21": "34mPrfiQHffNwSZFdg7W47cWaoJ37w9pSAqt6UQ693PMt8CDUCLKUryPpFPak6KsEus3nDuo1cpc9zM92sd4ov2x",
  "key22": "5cxXi8HsyoWFpycq8ht68DY8PiRrrtN3auBc5SFUbEibH3ZXo7kqNa7eUQVJuPQiZhJRa9mejwuJsqFK1mjR5sU9",
  "key23": "4HJaXJ396R4sQg7tjrzqEJku2SKVE99W2bN7UWMtLVdsXBRkqo6zMZD6DLwErKrLe7hEgQKQH6qB6wtn31Ld8pS2",
  "key24": "4Ep9ZQyjdagCw9phAJTrstYc1XvkZtWZYPCqPJfLxH2gNeLYEqcUjJVUprx8Q3LSdBdtNXs2PhX5SQKfVNxogJ3s",
  "key25": "DL4tfe832L2jJV2vBGfvWM6d2wmu5Cu4Gt8WLu343C33vwAEp5K24KcxfnUxdyuQqFkomsu2hcPPxmFyFRaUvkp",
  "key26": "YVEgg1rE9dRBqMnoYUMRNSpptUPzfRC6coCwZ5QaGQBkPD9W7gsAW45r5T5zXdx1fgbAyW7dk3VFLDRbnijjehX",
  "key27": "4oKchavVToeMSvMTBaXQLTc85YBTULrTwMrsrvu5DfUnd63pPth21R7KcNzRzBQR4tTJvSfEZni7jP3RyeJUA7Es",
  "key28": "2MokA9xaeiVNy1CyYmH96JSUsswz5D4Urz3Lqi9kSeH8Jq9Q2x5bwjiVV36Yy8StBrUniA9mYqcHJvo4EYa2wiw6"
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
