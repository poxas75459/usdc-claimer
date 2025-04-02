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
    "4D8UDasx86zVrBScTY56D1pCpAsPzBRqw2kJXejptAjtF2REMruer3eqye9LCHfa6aRML1okCVKNWWkBYGYEFq4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFKKRcjettgFzFPnapEPQG6L2rK5ruVafRTSzckTXYfvxZRxTx1jccDunPFK33PktH4k5GfE4mNKyqmYkpJunge",
  "key1": "QnKUfQ2CjgJVnAPwLHMzb5YUgLUASoZAGgcXsBuUiPFJ2Up3ZYvUuqrHvDHNbxa9Psik2Pp3wxrzuyA4M6cfMJa",
  "key2": "2sbioY9y73VPimbCRdKuYDvzVpb3EnfNqj9HuhLv1NSCii8aR1bzLgeZvkZjh4E6Lyq8hrNHgfCWeeaQMewDj6SM",
  "key3": "mMVFPytjmtUQJD8XR5VjUCHUtwEeKfy4A6dk1KxNRsYjaQJbapARZegXJRoaCUdqpUGPf8e2Nv3P4P9RPdzZAZW",
  "key4": "23Bb8nQ4PfqdqoWuVF7XTtxvMyZmzPXSvNPZsjvC1Hh8KZf3GQ3f4iha4ua6vwKMPRqHSXPL4HU1azSkqhBTrVJo",
  "key5": "XURUFMhaJNvAYztaFrqHvaHenjoVcLxKwTdSUx7a5BWYhV1KBaLPz6uSCmPvQYCAdTFqLRoVHHoC13oPe4yb8Lc",
  "key6": "9EKGTipXJVniUJE9zLNREm5Wmoxu2bm5Fce1NNLyGYj19dsbjMo6uSvGq3UwRH8zWHHKFs4upC6qEj9MqawDDTe",
  "key7": "2jBTiSx2moWnTBzamPF3UYFgH8Ws79Aj28QvdXw1a46H4hXo6jyFPMfXPwJSLA4GukNvko1ArCqtzvb18tA296YF",
  "key8": "5MbokEZEeNxwDQxMbZKBuBT3FBbqbDkA6xWkN3HgG7Y6ztzDEmfLLA5ky1fENYubgsUnvR6Vg15VV3pvfY3GDVRj",
  "key9": "3waM7RGM1RCZmJSy7Co8o5wqMxfxf8EAvGLdhzffrpkTxX2zhWg9aE5MoVfNReTEkRRmtvURgRZpzJcUMXUbo5Ym",
  "key10": "3V9p9AHBTCteMLWdoCPEeyCia7zTwbUNvLD7e92E7qm6MuKNUEEHqBcLrsfCGe71LDHovMsnNTEzQzSJa3u7DqH2",
  "key11": "56MjNL7bT7SdWHsXqnHcTfybgcm8vYL9bEYFtpsT3F2J7ZuLkwr2MQNP91vwLNXFztB4c4ft1e8i3XbpFC8fCZu9",
  "key12": "45e4UT5UArNi9ogVcHytPoVmsGUimmVQ9h4STi195Mxz6yeZYJX76Y6xWczRtnggiaaybZVCnj2g1NyREN2iLSn1",
  "key13": "4cmKTiM5W6tXMVpnEtazon3wofzQrjZ4HTrwc1e9deV7ULoUPWynPM1UxgRNaqaBwMgdfNcuvg4yiwJLCeCE2cd1",
  "key14": "3rgRhp2hW2xok4E7ZVmH1KZHVRKDR2GsvD2Vsh3CB8mirk8Vey42Eg4JttwiRHStZskSS5ffGxMC8WoaKX6gZrV3",
  "key15": "5y2RH3JAXce1H4KYbek93YZrM9ojQxTpKsV2jjcmCyoW3D3wEhU8Azp5moefM3n7sjieWq7cXrrZKeeMxdUsMFBU",
  "key16": "tPwYbX9QuADxGchuyKXeCZat2KHBeJsko5TD1tqYdUBHM4a2fxf3ZrGtMLHP3KZT7GMsyXtn4Stf9rMp1sJ2d8W",
  "key17": "42ufmeQ8BkU4TzACKMCxT3WpSXLaTP4DAQAtBUDci7eF5Xt2Ty1YDoCbir7LgPgqAYUiXBp4FVYPYVUzC1joYi6V",
  "key18": "2J9mZVnDXWyYrMtDvhubqnXMn5Qe8roReCekZKNg6VrAPpubGoQBm81QVbaSE7osrJ5bFKVMG2BUfa5EYGtAWf9E",
  "key19": "3SjswnwsGmcTQqQbqPNRzPWFY6AJDwaFfHFAv3afdm5cWYVQWVi84ZYqrPjPDnL4BuSeAUXsonWEYnuQnoAM2TMg",
  "key20": "3fmXH1NKYKMq2a2oX5LYsYGcJ7Xfp8yTvQdGh3xeQN4ZzGM9MyeEFP9e7ysSCuZF7sXoQzQdh7U2X9fg4fpP2ZtG",
  "key21": "3t46kNWSPyK5dxRf8Vs3WKapfW6CSUaPsJfwAYM9CZa4CGShzbQYHkp9YihqftJU9VpALWU1oZr8ZDWf5UMrQhwT",
  "key22": "46djeZCD3bhuetXFzGYNdqqYvMWUpEpkCqYhSBUfJSLvAVqNx3iiXjhvWh5Q6hmwdDvJL7tWmHw9vtecHDLwkjgS",
  "key23": "2DioYsHMGTMyMd6QQT3wXgmfJVhjdEAG51EwTei2EpPxLf2kfjn2ADw91RxNciFz46M2ngRRHmXbE5EYpWkw26uh",
  "key24": "498ykbpx9mhNe9JcHKny2ZY7mmivVbqpjR9aDVjeqjogaeLakTRYWbgZkBC1h5FTVx8BNZ6n4s4AZ2TGtDtJaYvG",
  "key25": "KpAbQZuZFEaEdcQU95UYPkFLg5Jvib9LM154yFabNnfAeWsqekcJ7mhbeHHovQov9mWbf882RWr1gzLYhHC5j1K",
  "key26": "4EuvNP9JVfNPsE9zXybHwZWasGPgAVRqhf84qgnyq2kTqLjXWXfLxunJGcJTiQYKqYyLiyNd7creT3GnoFT1o5tF"
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
