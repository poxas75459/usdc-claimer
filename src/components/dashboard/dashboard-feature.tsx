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
    "bhBzJTqR6sZ2o3FgKMF8EN3ruQW7NvDV6NVgDodL4Dnz5xqiw2mx74i1etFdMuUb1Y6njtJb4FgofBXVDy2Lc6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUPhCfqSzZERHYZnsjy1xxUeGXadboZTaKh1BdqdMKfRjhspC1jJm3avv86rYJzqw2xHkaP32DUFb3TzmRx1dud",
  "key1": "5uKTWMFJ64AZR5LAeDhr6mvNp46dLmo2b9crtnobwAgJPKPRRriXBi5FBmVgn1fJzvrooVB3VjiPqGHxJvnTjnd5",
  "key2": "5DnijvQZmEzPMmeqj5xttZ4LdFCUWm2kDUWLxEuVvK5H8A9FLk7hdztNvATL8g18A9af4FCASLoKXcNKim1GGCbQ",
  "key3": "3FUUAKDhqAg1k4xFAb3TRkW62skrJByJ8JfC4jiZaKuUkwWxRXzLdXfJ9kMxgWnELGk4xkb93XSwVWfAtsPGvf6x",
  "key4": "Cs3nyjVis9G5j1ZyfBEj6kwcD4Cv5w6FfW3w1ZqjbvvCnCSFgVijVDuNZoZc8uMe3PHpQzfm9MkQwHaKky5B5k5",
  "key5": "3CSvRJqa2uVaXwEU2SZh1jUK1rEoq6UDHEvdajGsizjRxKaDz6LynuznbM7pg6oWp1myXixzucBWvYWpktMdokF3",
  "key6": "66PVvVSqUmGQXeDHbgRztRdANRz4TSBBUhQtSZQc3oCje9qibfUb6TEWXJBkmUfF9VaDwoDNWcpeH9pKoArCy7nU",
  "key7": "4PXVdijPZqcR2gJX7PpLMKYo6qdfPWai1DW8cbnQpwawgSCyN8WpHCCHNxAE351dkaVB6Fp9DkgHyaKB1n9E2QAH",
  "key8": "3gz2Du3wkeVzudCiueG2Spoyae7X8kt82u482sKZEYHHjCtRSGg1rkAyx7KvR5Qm69Fr3vi4fTt5BcirtfWXpteJ",
  "key9": "4jhG5hL3SBrJxtDySNdK97yvwUoD7kWjpP5e4Rqk8sBUpn8dAfcsUwByWJ7NVHjEyLYD6w8bLpiJ8sCSykSc9ksx",
  "key10": "b49ZpiPV5Ws9fmM3cVnYD2ZWNCxhGJgYAiJqCJQwzfsdx1E2aUgYD6UKRmfEYF7oK73peoCQLNi4GVEHoPaWNMV",
  "key11": "u8oMqjqJZ3Rcs6Uy5x67NRfECPmi3Z7FyUTCnqGp55RvWugRm3PZTzj7fEcNcnUQReinivCKNfQk62fncxfmbYc",
  "key12": "5PiUYmN7seT67AJEdahpTRgzZ9YZaCDAjXhnKtHU6BfBTJii7qZhzMBE4ujMLmnHkcnpueeQFzw2XfRzA75rP9rw",
  "key13": "m1aW4pppczqNMMZ52f1r1pxwUwGcZEU6CdY3tXWpF91EshjsU5VAW4NmYMXP4YAqc6rvvgd67f8mpJtRforEVPa",
  "key14": "5M6WLsZRZkAHpaXdb2ugo5xC4SRamwqqiA7VYEouPhnM9rQEf3g7HpgwaBgcC2rThuzwrnCrKm2oCZFdJ8qkXYpk",
  "key15": "3MVADuEumk8r697y35oU1AxfJQpgPPMxA7CZR4k3kkF8Ecn78xd3as6y5Pw4uQythcP8rajwsA7Yq18jQjU9fvjX",
  "key16": "41PmtkMLAjusSyxN2CT65xFmGNQiB3fM8WLYMsKjdKTLdkdJs5ZH9dyonaVqAmDugP7JFzS5dRDUmWPQxXnJ44oL",
  "key17": "roTnv7epzbRnQ5hWyryz6AvAEBVzuPoHRpTjZPyyEv4eFjT5Fm7z176wQC8foEfdzkoNWqVVgnbBwYjp8FtPekc",
  "key18": "kCUgdVVUmjVvwP4sZk1441RfXk3ccBXAz6moqFei8oynEa3VS72RrvjQ6GD5zLocQFVNFVUUrWy7KpNduk74cSu",
  "key19": "hXPDQviGene1Xa3WGD2YnsgHDJ117TCbCVwrWmLe6JFsoJ1ccFa9EN8TKD7n2zJ4W5b6TTHBRjpnC3Q1AWz9foe",
  "key20": "2KFC79hff7bPstKVP24HBAzJng9s5h9eguPUzkMMd5FzjSmvXuLcEMcK65SqPCHpJxqXMQQxCtTyYfDR4MmgorV9",
  "key21": "62DPdw6aLGgpAQD1yo2rKgQku6aBrhoEf8AdiQLMHFoYR7okpCGcdWJoRHjnX5cHzFsA4skMdiQYbK3TLovc7Pgm",
  "key22": "2aeAUns8EHSnqAyrvBV1fQtHSjziT6qsvP5BrWDmxjC4caQWa2j36aY8MYZULc7em2sd8xjzUCakRo4tZksfit6f",
  "key23": "5QcrCknGP4dnnt4o4SV75XhYHfLJ6s1kBjuXp9mWJvLxXjR3ZGV6tYj9HfzGa4SBuLQCHpQ2kzF9G4XkkBBp76ux",
  "key24": "2eZEx5jjLZ79dUbQ1AsJedxY2iaGMtGyrqfirX81LdUcGyUMqTcuL8BsTRf7Bg1e7Um957bxspVfCq4HvyCTJxLb",
  "key25": "53VdVTLBbxoTGeoYja4MGFjzWcUcSRWBcKxpJUkZXF1S7Gg44CYe2eaSq69dJxJeqttaHgqu9ouG2ZUjUTNyXz4E",
  "key26": "UBEtTkWk93JyYYJWEVeN97i3qHCGRRjpDg2hMxb66zaPR37LM85Lp3itC6hq2T2SxwLKdqx93g3D2LTUY6Vg3sS",
  "key27": "1Ss17DxVzwv4WSrtdC97S6vwfuqucZhS1mRGbATP3LoUhWfyak77dQvjcPqhzYpAXJoMGN32Q7QZZVKUw7Mj8ra",
  "key28": "2JxgcN3QWpXSCQrmLu9efPNbGzKKfU37h4qs9XLjz3aRrBSajWFktDTthfTGoNFwQ5v6uKz6gQuPpku8iMQnPF6J",
  "key29": "4rpsL6ZSaccVQiMNyDkHTb9LrCnqjpVxLWpoHmWdaVcTkYwrJUDR9xCjSjGhhRFAvGxLxG8xSu73nPhAAy5uzRBE",
  "key30": "2YBaUMeDRbnqhDRxunKQ81r61aYPhxwmjczB1m314SV3EENtRatqFR5NAPXw8cZxmdgNFDravK2DfAtp7Cxeds4f",
  "key31": "2FSnXrqB2GmkpmqnwN8dXD4n8QEo2FrKqEemmh6vtKuKSeAZ3roDsG8YTCncHKkTJV8VMtNN3YUAj57gbgETAU3N",
  "key32": "3kNZ5d7BBVjxkww5uLgZmeLGCAkaC2MRhTkb5kggF9GMNYd83JTTWhHdaDnGJvF22sNV1H6zAZuW928G4Q46UqUz",
  "key33": "3e4HSHQqHUYGxxhU5KzmFQj3t6KAVpHvi87rDLe456d4N27PkeY6GZMRGP5kB7UsB9BG5vNAaE35VrKxScbVXWMb",
  "key34": "64KYqvy6Sggyzy6VWQNxq1KX6AvVR5XqKgYAwULifTmMDgLMkMdUkPiYtaZgth8Rvf7KfgccrkmCSCDS3yGDdG9y",
  "key35": "MXxSMTG6Br89TVCUZyqoWNUDLBSyPnNLjr6XTVeVFtTKCWBKX4ReNJ8mk6FKyG5xHThkiXrxnAjcC7zWRniU2tr"
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
