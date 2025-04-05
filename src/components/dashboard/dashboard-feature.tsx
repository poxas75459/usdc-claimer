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
    "3wn7KPrdVXkDmbL6PpdHrRCnmVyh66cSxAJZ2QeaUE44QzL5z2N5dEqoscFJ22nsc7xUhbyJfMsc7M9JcQyhZ8yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyLu5zYQf62YtvJ3rKpx5C7gkakqy3DexhEg1ZHdzxTzCHnbqMRfrZbkTmdDBVXxS6284GYottthHpKD3RoWWuT",
  "key1": "3d722NGU9AGZq7T4ibAg9iswaidxycDbgc8cEvJWeW1V8JqPR88LJ9ed67NzkHNSWFUr72jTRNuzdKZ7Pqr48vfK",
  "key2": "4JPfrcUEf6QiyPyU9odLaWgbkgiRk48pL3SuDNUJUWNTSq22Cg2muUdJQtS8krr2jDUCAAPmnJHZCNuVeBWVW8CL",
  "key3": "5WczjURybaWY96JH5Y5aCNZUmYTvrSCkLo3C5Y7UnmQu46bZaQXazYMCcnnFm7W61irBgCok81wG6Q9NdWpA7ppB",
  "key4": "29AMEDgs72H9FBHSTeDUrKSTkVzEYedwfSa7GNFVD9uxCV4mFFYsWBi6LHSo7ydKKhtAkyPXynNrRfmKPNEdGpCt",
  "key5": "SajYzmE8xQBrhCbNPySxuqkPLm9zdNDqEy2FVpzPb5SxPvHtQ59PrzJcU9ytErsYeMZPLeDJEXVFHjjcGyjuYZX",
  "key6": "4eXELPTUe5P4rVZwcn42d32cR1TwVesKjPm155hx6Logzv9X6x2ccg2BYfDjrsGkCMWuBtgUCJZMWDUVUbpeLKNC",
  "key7": "59ViaN8Dg69gcGdiGJE3Qiek3mN2fQ2LDniWxH4deM4G2aFEh5yddgRFGty1w1iLfFcrSpCrBc3JSKGG9c7G4HeG",
  "key8": "5CA5VaxaFggTkgSyRKNSy23pS3Hh5DFGzKFwTdqrbavKDVUHXGUKF3dof7HFwgjPZmGTNuu2cEb3i1qAxsNqMQts",
  "key9": "4DhjHUAACNZwggobtfdYWpF1seRTukvgsgatZrbf3JQJpuFPiHYvMpXe8Ni4M7cSVfSpBqrGj7PAVCqVufjPbBgp",
  "key10": "wo1VfdhKKSXbULMc5HA5tMTEgefH5UCTsoNJfpKNJSvrNUBEu4TLi6HcsUQbeXwyoCb3Xb2vgg1FAepogbM9ps4",
  "key11": "4xN2UfQph2JdeAbMeaxXLrVVroaY1gCKC1HLeMsVkt4ha8FWuJ3btQF6ZcMTRaCGjCTLSXnjqgX4gESEKepg621V",
  "key12": "4g2akCkQqfcPZtfsNRdNNdt9VuzRLRTotCWF6Xb6nVy923ANqC1EYLGnjiNHZeBjqaaG48y9eW3EH6k1bz6W3Yby",
  "key13": "36dd3pRa77JGSdDzo45SPZztcZXyWenwG4MumyWnTmi62aVCAyQwqKQNFyheeQ7dpyHW1S1orqAPuAKNdhvZE2tg",
  "key14": "iYv1YQxXvj9bC3dPWad1sWj4ueNQWTdb553h6xegiVKrdje7HrLVY9FsCDLSXFHyD7jK6bJPfqm1H2WHT5Yk9v5",
  "key15": "2VMJUzANUo6JnWjzwhmSrFdsYQMuw4kn2sj5ncU3mvoGeunziUbaNxE9BGTm15BUFUXt194fBPQkEcCbj2a4K2Qs",
  "key16": "gA8ewt6smwHu7zRQWX3rHGUc8cr2A9EqTdrcppPEiZjW1rqrKwyCVMjwCHjzEFCZwdid9iLLiZTfLRDtXyY9tNm",
  "key17": "pBhunF6csWdu7E7kCM6aCWGziYoQ5k15F86Xt6tuvaaapQVqYPuPoXkxMs9pL1TXnWUq6NCqT6vHPvutsKwobY7",
  "key18": "5uzHBcy7VN7BD4eW3LSkrmACWU17uGaAdxgtCaqpx1fG6Qz82iTkX3DNWRtdS5YNNMAKei3YEYDcEuyu1QSg2L7t",
  "key19": "4SGsGL8oF8C3JkRSmbWurPqmBzduYzzfduGUXp7fUBwxDRmPdGamXB2EcH6D2VybeQwXfAHFeXDe5iJneauZhYfN",
  "key20": "k7vWvHA3p5Qx9XvMvi3s8FWMLpMsswTWYoPjWL8vNc3tx21LT7WN1349bXhfDqvnHUXZBUjV1CCEpqEsHVhsTvt",
  "key21": "4MoxxBL7ZQTQj8DSjuKh7WG3aCdhxbekJ4Y7cdEQFmZqu7tQrKSufZ3xA1tpSVjxJzRNJy3FWNLhPKRgivbD9h3n",
  "key22": "5noMuUguy3mGk6QSRUFtkp3HBrACGYnHYmo5qxxAskbNrrcjsg17HCfr9wWP1daMyrqcPVjpcPGWsva6VphKMwyM",
  "key23": "AQdDQCc3UBbtmggxZ6UyrjWJjujmRyjSqHE64yLw1PiPAR4JHvQXdMte28azpnTKQRJ1mYCUzrS3HByqoaq7oLk",
  "key24": "26iwmLWzcU5mbnccd6Mkt6q2oFYfKTCmBm9ugXm25odvL8d3BebavaiEDwUv3y8b6izAxdFjXpvuyQfKeqL67Umf",
  "key25": "529nWkvP2n67iBNdiDvz2B9Rv46j6Qz6eWk43KwEoqheaSZ3W7exBZnPs8sUJTeikL8ZkHP2p8VevxNGkpBsqot3",
  "key26": "5jpgYFHLZzkEhvnrfj8AWmqYPZ8snJDMRuHf6NrnjahXH6ka4pWQtdijQ7LA9VvFkNUPBmdru5eSkMdKcSDmDM34",
  "key27": "5XDPQKApCkc52UT9J4m57YREScfjvqNGtzfewAv4NaSgY5L7WZV5ixxpzEQNygfowsWeZU9B13G9AbKrfnDmkbxA",
  "key28": "3ZD7ADY9FzuJHZizeHTeGvJSgQBidafGLCJwhMtdWbx7FWxn2VrAdPHcjpNUFHbH4zcPWUjFj1xMHrLz1JCQr4Mn",
  "key29": "4oTofx6adYrmypT3MK8PhgQALitrsa4drtuwakEgMbismrMe8GWaggEMJFsKjjNgLRdr2wYEg7m8EX13ZDRoXk3J",
  "key30": "2c8jobRQUj5fYzHtwzHyMEGmfh8KEN59SAdSSCjQbD743VSjXUZUHAp9P6DtUL9xnyuiZsVaoCZZMnZ19aRJCSbG",
  "key31": "prY21pwRxmhUjbdGJgiDFTpZbnRUgkjvZDA5sye5yHas2YgfiL1VZM2Ne14y4chGin7a7pHD7fE9moMsBz4tVYN",
  "key32": "Np6LWSx73ReYEDiaTj3weyj5tEsAydcB12w9oQEvpaHGWh764pnXCfbNbBhxmDzk1GQFTsmUkARs2WmDgTZMq7Y",
  "key33": "4BFaNuBJTD8nQRpNW2oZJ8PGvG3RDgqonjCwhcMr9CzeF42SAupTANpGwFp7isG3HzRkrZ6fr12o49TrFyPFdiNL",
  "key34": "3x564JADSAPwLe8drjfAE6BSQ1zrDr57Dr6jQg7QMXSRBFZht3hrV8WabZ6MY5i8oBYrd1PjHrsErrUxvUtxPpoE",
  "key35": "3PdpFpbPB3de7LXb5hbo3ocfRWA9NixmcQcKJLRZHhzomjV1SzCFqZpn5VxsSSY5LzUdydUaUKN3XBJS5vs1VauM",
  "key36": "ujSSidoRB73TEF4wT9vCpw23DfCisdtP32TUp8EViBrrJD1Pfurowfd9hQv7kzJWoNofzp9c6vr4Nda1v3vyxYD",
  "key37": "915dDDhG7fRAyCT19n9s98zq9gNbhjrD1JsRnVmsNhFPoT6rxL6nYv2ra1roFiKK7YFV1rQxAu9t7USaXWG255p",
  "key38": "BzczCxH5aDnKNy5WAeJnYVCR1ySD9vQzqTCnvnzysWtyEM2Tk7buSSA4GUn4vhxg75iD9UtH1kbF2JP146fJD2J",
  "key39": "5TJsSwx2DoRjSJ29EJ3mcV9FiWEK2cd8rSGQfPetCaG35PQn4HuJh9ZE5uLc9WSLZV7druvfEr59NV8JvxcVuECB",
  "key40": "UkrknVfAfdRrtkePKokh7GgtyPPyNzTSK7N2JvqRd8Qe7XrPkUVXcXYEMqS6tWSXkYjCFbHPovdy1rUAdFxbFqA",
  "key41": "3gQ5m9PACQ1jdiuakK6E9xW5LN2HbuTY5KSBBbmY56UumRBHoyaZRif5Qqd2NqptKGo8Catist9ahMLMjgeJewpd",
  "key42": "4d88SAn5WsRDNe5TwQX3kQGe7gVL7U5o7QgoUjfyWG4yreBQKjeCpMYDNaQmUHnFNTPdztsnNbkGtzB9n5t4PMeo",
  "key43": "4LJtEDasTzXvRdYMtVLg366oLmVKAd11nPx9CiMEEUQ1ZMCTWtBRdHcjrNj5JbqSSPAnHzQuUEhCDqigAP8yEp7i",
  "key44": "3Ku4Ad8WMqjAGJ5joUr5kQtjp16ktdjD71pbE6bXGfRDwjGTGXpD3Qj8fTkJY7SxLFL1cCVnoCbCNh8Kii6BmQzy",
  "key45": "354t78WhtAYhS1SoNf2ozGzo7wcxHpwecagTmhaAEbeBmrNprcNyxRBTWCUNdaAACDfofxxbmctb9QoV6cTT6UNx"
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
