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
    "3wRkwX13oxLbxJwH3hUv1PzPujW5Fr1D6iRa5GNqKzwBSyZERksBpgievDXQex1xU4uWMro3PKruYCeMHtGnNDDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycSimPb62qsab1gh47jdZiHZmex9756pDrTtdiJbe3wfMyiYJhgY9ZbjR47MzCSH5UdU3W9D1vuYGWF93fikmo8",
  "key1": "5Fmb7BTAy3WFxZMPmcVZxEQtct8bg8B5TQ71tWeM1oQ5EyKTyotqdMKkjjjSr7NW9VTubLrgtxfVpBM1sFtWE1n2",
  "key2": "41GiNcyRgL2ryzbyYRdAyRznAPHUzQKBHDK6t3SA2q3nA2pTwMDKMx5SkyAAio35c6k9E15FTnb7boEEpEenWJQr",
  "key3": "7uJ8JRkozaiq8hcYgVwbW5KTu5mJr3ikN2Da2dQHm4nfRuPABH4h7XikKcUp2p67493Q6vAWgugg1ZiX8nN1aCr",
  "key4": "qsqcBdR5Svousjw7WfbBiFwFwFfhCakd7bSa2ub6EJVShNEFcxHi93m6K7XwiymiG3MfeRpZMegZiUxwtN1Vrp7",
  "key5": "3aGicgzXifNc5TQC4cJ6Mju2h2RYZ1PqU8u82jCb9JB52HKoRJrX8isMVSTkQbUw4LNX9FAcqL3fZB1LkkZYgwrG",
  "key6": "QWW2TnQKVbg69W4NgVaszSB6Ec9gZ7ouG3DTXJYZUhjthDnPejP5EhBj1W7Zr5AK3pDBnbLShwQkikSy3vjt1JF",
  "key7": "4Fi11KKUfSUaRTAFuPPTw9Mz7kzaDratifzCLQiDCVdVj6cT2yWX4psvZENZXQ6ShvTCoUD8jy66HthBE8Pzqi9k",
  "key8": "eDuqKjvCjohqfvfSTL3x5QAX6wngP4xzGXcy6GAJ31YnNjbSPMkAVw3BSVnrJtd2U6p38ofoRvTh4ENitFcfhed",
  "key9": "3D7Zs4XgdcK1NY2JVdWHgsBc6KhhUsp5mGyiFG7KrjMQyvTdaCXrXFRxauGqreVdXgn4rio2yuEuj3Uzd2EZTct1",
  "key10": "5qZ821bD493uuJoEsSB3LZYLmVoD9BB2TReypg83dd3vPy2FfAVo6wgF3Jsk1AkMtKjKHqEr1o9JEXz8PRvxj5TP",
  "key11": "tLZXyuuDMuN486tHUCfZvLSe3Cw3TqFJPUw2f9FzPSGxwUGrVQfjsRsVwwQmUeRVAMSLmBjr7c64oMkR1y7GFTj",
  "key12": "4eZVVjg7GFoySyjF5gMC6jr5LUWjKZYhZXxnbZB7bunNGtiyNXAFX7jB6cYCCrTVbao4ZG6b2vACksob178XaHM6",
  "key13": "2WQCdYRWqUTpTQKNE2e4NqSstTcxTjzy9LfmemgL3GJCuwc4JV6UiNzAsqhF7rHBf7bcUJ7nyWEbGrfzEvyx1hJp",
  "key14": "4djKSNRJDB835tjyc3mQr2TH11X73CwUzfyhWby5HQd8YS6ZeJtukk3TZ1gCNP57gozEnrJsq4iesh729mW6x3Wo",
  "key15": "62X5fkKQGS8iAQzn7wh72BYaVnARWBRwQpa5m7Z3pLjNGBHq8fV9gLFpdaQqBayA6PbrMmWfNpJ6i3ALYBc39Fmj",
  "key16": "2QU2in3ivZbUHM1xLFCVkDAH3KVDwbMG2ytcJA2HugD7sCvFB8yZw3YyomUsUG8FbJmkHLBLvQmZev3uG7ESCXUR",
  "key17": "PdjQ7UVStRszuSz6eQTVmBVFfHF3QjyCV8g6rN14vhJTzk3A2b5wPCqY7fiyET32XuXozTHqtWKjtyQ5AhVnisB",
  "key18": "4JjyjEqmTFDAzvcDQsHnsMBpYT9A8mZxkEgtZZqvf3a9Gm94Xjieo7NGbytiE5QawwhRQaWi3YtziomKEm8n1aWA",
  "key19": "59hpA3PrCXyKzUaHfPk9hjqjSsVFVEUfjkjRXbvQtJZZ89YccuyAxAbj1rhjzHuNjHppkPtNBAgL7WXQydzCQeGr",
  "key20": "2s9zk5Lsxyu3X8HWqdes3dEc3nMPWgroVwi1W4R6sDcrnr2NNs1Ut7Zdp7kGujGHonN1b5RarBNC1wK8pLMFK4fg",
  "key21": "24PmarD3MVsuTsCygJBMBbUuaG8UUbmH1cpQ6PWrCnrz7Biyj5vMgU7ZVEy7g6Y551xc1oyuLh88kuXhc3MmB4SL",
  "key22": "2JiLhHBrvEF9215J9XicGMDqWMWqiVJLXUGSbSa3zN2hsmqmWWG7nBetQCHscRxveArh99bnEJmAZCCyTnxqBJVQ",
  "key23": "bGR8VGoVBLUaYiwerrgAEt1uGmH7vq1gz2EnxtQLKaB7tszvxU7DwryEkDU4ThWec7uFQSrk37KTrJBSvsSHHGE",
  "key24": "PU6ebUqePcYug1ovAgk1G5ry7SWCuzGf3WbvxMyzo6tKQUgkgPxSUC9srMQTqDQofaxTshmDnAGuyXwjrdmHmEu",
  "key25": "4bu3oYcRnDfm43LVL16VokqzZrmpXbuy4kmSBVty9CUkVzBgJeU9R7osoWLGAL5EhLZgBFsuHswi3Rb34EnzZyX4"
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
