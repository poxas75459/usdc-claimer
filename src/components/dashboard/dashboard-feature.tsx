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
    "63Kmyb9VJ2gNvRhFa3bw8Vh4ULYcK3PGeSqYAVvWSxv9qonAZwCC9aN9P2Kwgkec9ctGGRDPPckGaas1NEUnpVxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asT6PvX1Q7imdN3EcKDWnzorqAB8ZfrPQZF7miCqnFf21rkWhbCnFCV8CNeE6TaiJWbmqg3RqcfxMuNr1Ztp5kg",
  "key1": "YbqcRDatVWkv4Be9eBUBLQuwFdgixGX7TLaLDVx2xkiaX64zGZcGfMujEtLBHfaqMCnoq6ZXvQGBqWcumaDAzJH",
  "key2": "4tChPovuk3oit8yWBQ83NBizogj3DVtwgmigYxt7iFGNdmgPVHESfYtieT1k4tymenfQFGZsNnDPwts4FHt5hErB",
  "key3": "4NZrS6NUCAKzzY2No1NNSDKu5gUebVrYd2vxDWJZyUffhCQVkv8ymeQPp1wmv8YHejGT4dcWuWHSCRSP8QdjXVAt",
  "key4": "5YRBdgXZ8yhZyuvX21BEx262Z2vAQaVDzX725ssnYRWjCGCzDkbrV62AoBtrcWtTNbMLMfoj57Xq8sAUpz5MwRqM",
  "key5": "rX7AkaCvDAZn67W8cYAUuC1mL2yKFQqkF9FW8RygvKuPegWzUiCFTcscANJ79YycY3UHSi5LWNRjWk7xPp8J7ha",
  "key6": "63RHZveh9FGFNRJ1Z9UtgcDuKp3XFA96aQUWKnrHya11UVLp8EkHay9GkqpmqAAcZpeakePrVq6fZsoHACnExCxi",
  "key7": "2qDJLBwFMpfDkqHzrp8W33ZmRxY3vCfgpa7FL3AC3jamyRW7s4tFXYfk8VeFRagFJwmSoTqU7C6HvG9HjcMyntpP",
  "key8": "3ob1xjpJwhakkzFkQz5Ma2gK1wiE43bL1jaWcFqu8ecC5FHRJewQD771ppT1Vrm64qb9gcPVwNuxipqzwNvUwkDZ",
  "key9": "5MvXQ2Q3E6GJHayHkjXnLXqBLMmKzvhYSKyFCbmbvvVwpSyDCyfbtjsz32db6ohjvdcd93LVXHf1JSw9PAaZJyss",
  "key10": "pEEPm7fxrqaaiNDEaxsBnRXEveR1gykyfEZz2yoJS9DyHVmzDg94wMbSXkob1QkggKGh9LnfTg28xDgS5DZnQ7y",
  "key11": "55DgP4x7jmG4hMQwAp4614BP52QLr3ZxpfQJwbomc3kmr2mmhUrxQhPP1YttzBDF7E1rVwHEgoeQAB7GUjKg2rbV",
  "key12": "2e2aJAq69sJ15SH73smK72AFNfpWqx2VwBWuNrxRcHTbxzbgicSyf1xcsQdLchGcTPJEK7mYjJ73tC2ufJsok2J",
  "key13": "PZzcv7PykoGc4yzVhdFneCJzZFgpnwRr7yKVupNQ3G8kUZBHjLuhbohACTuuFWVCzY5DnxuUbw4GShNurCWYpCt",
  "key14": "2b7LycnDcjh4hf7VLXC8AYJZYLDQrPZPDzi3NEXHmFVmQSwnkwZMNjrdYPWTwH8yc3Ugz33UQhHmNTbHot7EntEu",
  "key15": "51ZutnNSqDZ2XAy94YJmkfxbvPMw9Ycic9eAvd6XZdY2HMMLi21ggmMPkeV5ezo3fe66fzkTB756Ty41GSzfpUGm",
  "key16": "wKtQPeirckRXdAq9faEaYyenvGPCkvZcgvHA6S6eXq4mo2Tem974yYM5tVXJgucEM61r8mp93e3pGTBgUNdVyA2",
  "key17": "3QiwYMhSBkdwe348PKwEdFjWtEkcrtGDhR6Df2CmUtu57kNv8dV9PBxvKKzB4DrbaaCrXbMRqMYNdmrCqt9VdmRj",
  "key18": "3VJ881wi6wQMvCCLNQ7ZgwBvCcahNwYzvMkLMeKTY77ZgJLTxLgk7m9mm65b2JenvZseFA8DNdZLMWyHemL51pav",
  "key19": "2Uypp7Xbn87pvokS16qLC4z27NuNyFkRMX7APAMwqEQXkSFgd9jzpJexdR8c9QJYezJq3H7hW35x8dmDZYSAcoCF",
  "key20": "2WcmuFQCGjfSVo3gtLyDS5LxUtysuW4oyCUZMsFXkzBBfCD9iqEqPzV27bz85EBRvWBbbWcDuJZZhJceRQGdJ65g",
  "key21": "4s5v6jVuEKJE8g4HfoHPyBVP32RKHYYxLSPhNBKuFiP8HJbXhYH1b5oksmF2HvZcvtzg5ejdy23W7v93ntFDjSw",
  "key22": "2NqM5YVo31AmpLKpUgskfqnfz7RVkkVqXPLFtADaVNAyCZFd1eCqkU99ybZ2Jv59HPYQB2Qx2jyN9sv2XLDohG1z",
  "key23": "3fH7XVSbj9crVrbDbiHrrxhunDF9u7mgXBHGB7P4pNnuNZPbJpfaMUojhbY3pujBX6ZUwb118Xs15vbobNSejAs9",
  "key24": "YPNQfu1HXzbdmhuUoxv6CuQupg59vTwpL5dTkjPGmAxMzTVckxZc3HKSTsfbADmjtMmNEKWnACFW5h4dNSWsxPZ",
  "key25": "3ik3X8TwWtjVUxrbxsENYqaGV3XcebGXEnnZvfcpfYiHEHaWrskSQkhYZ5EgHjNNnVcTwzur4mNPfYxVXUxP3cgb",
  "key26": "3BZTDB76knXhnonuTiumQqK4g3dZtridQGT5F59ErkpYtvN8N15tt1LSzFj98Wwqzwc5Kf7VaCx6ecAEseeZ4haY",
  "key27": "2PYyKxAeRiHngMZLnngYnmYKkjZNvpCZFSK69JVVAvYfaYoTbVKCC71wu3TYkCvm9ztyu5eYFe3QsDetWrJyqcLH",
  "key28": "631StaJfLwGUBuSStQXsepe8cYTEgzbGhgiNj9rKemFGynEMHr2dAdrkNYEyZUV9AtjLsxFSMgKL5Uh5Jg7hxJpp",
  "key29": "3dwKoFd1rAQjzQ2BRy6iTFmfBzMiF3r9eespuwgjKx4arit1uEGx4KgdAQPT6pe2Gbmutmg2meHtVKFscWBvKq96",
  "key30": "KFWgRhCMbMRn4uBkPqxHG4xXg652NNg4LWqDeXvmXGwrW61QrsS5Mw9uRnui947R8RyVuaDRecdT1Bji3YgoNx9",
  "key31": "5i5svu2rGDQHVWa38XTXKomePZVM4bT77C4MYpz5JwScNzdP7LNGHbDyGsN9fPUx59bDAWhQhnUD7ULLpFiVpPTK",
  "key32": "2mWez9UTSgPWtr4iAwacdFUriQA4WbWH6wdjFjKVdUrFrkgTYc13TFATgVypMaPBnrKEgjKKNv6fJvRSBT7TUG7J",
  "key33": "3TrArqeMnsLkAnEvELVP4tACF5B8DvodYWHbVeRKRjp8KVWBXFvsosYZmDagcxt3KLfHq8vXBKtf42DqAn2or3KX",
  "key34": "NXiNTYWu4GLpCmmG2k1CFYsKm8hafPa2vspizzLzWqRgLAuARzy79dV83qK7SwEXxwcwbxKLEFVdaNsqN7TfJWG",
  "key35": "22k94WwS1oZMwvPTGSW9KmqdGgJkdduwFnCqpXt6r6dXwXbKw728NRjB9DRhkzLkf5LfAYDiV2tWPhMPdCyhHSk1",
  "key36": "3iiXtSZ38J2x7KDG5x4RUWi649c3xdyq6RZRNgAcvj2bJSRZcN4xZhZdCi55BK1Uqp9zP7eNtxKatQfTcGQ8QcYV",
  "key37": "PE8hCtKedFu4gN3URich75QXZhJJWYwjcvYkp2h9UY2DpLBVE5VGhznj6rN2jT8QVHTVfedcmcqTyaZG2SwwjDi",
  "key38": "BwoMCTiEzvV8dZg9ETCEz3equrkTHNEsKauQTxNsEBKnxevwiYKMCJQm9tyyuJafdM9McBgGJ3pr6EReyNECNVv",
  "key39": "5CT7sQ112rLsK9e8MbyJLkPkVmEw6E2eqmm7LQGtEkhd9JCUxcj7iXE7eFmSJd4WwfLxR4aRU5uibEmL4tajmKx7",
  "key40": "Rg7K6axN91smcBFR6PEZVYuQt2W7sRKutbmswrmnLpL8RTx4NPHhzMW8sAQJi2eNNnv3MShKXbDfvAzZM578x9U",
  "key41": "3S2HrZKgcdiQ2mWrUzQHiKES8C8AvVGSBiAHcdM91FVtuonrX5gLdAjfircMEFG3vDrU1wetMfybeZrrYPzjgJu8"
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
