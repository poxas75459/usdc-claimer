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
    "3ZPaMzBHRvBB4xYgAegHUbCtEc8V1xQVw8uTWQwBVaAHu1oHcY4qTzLS3suqYFeqw5R6hEB3zcEyWheXfwhaJWme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FvL6wAm6PJbLcDn63QU92vn51o9LGwcjpFiw2KSXUDihwB9idgr4F3EPBcC3SRXtaAKMcL4PXgriS9uf43VdXBX",
  "key1": "VaUAqr8GVwVPkoon8vdYz7yP8N1V9Bx64dm26wfjZW65weKY9Hufz5VoMEuvgDmkFN3XUCUVBMHLirRYZHq8qTu",
  "key2": "3jY7sVGZLJzyXgmvAaqZtEG4idwNUfsT3tSVjiuwmogXQSwvY1yZRMJNUvic6ViCHyjYtgqcbEj7e9bvW7ByB9CX",
  "key3": "1Df91wpwjXcReRBXr9AGDvshR1JoWv78oYuMhrfwCdYLdaaACYXyHTS7hUCTFqqqHc4ri58Fws6RMdovxbME8Xg",
  "key4": "5zeoUvLrwJzqSnCLFShvg7DEH1f9VvVNf81FCFmAeJJmzAYYtAifErWAkwNs9Q3gwdYwU3CFwJaz2QDqVPrCih41",
  "key5": "5Ya1uNtgJJPP6qdDuy8xTUM8H3h579Haedvmad5itNCsYtyVxhY2d4HhsRorvXsDRmyfGHn2yfkDXjddcJk9dAu6",
  "key6": "4rwPkznKkADRYG97JsSowjc8bmxsfA55qSx8AifeJDZrAcjT2sne22aDRkvEP1sv8o2QCEYuSrJdad1dXeHDEynU",
  "key7": "Nw7S55ZLfyDRVDtFJXUkfgvicQkD9YwFq4wfJB2D4KzTV5r7Ht9Z9t2K2BSUaZnhjKo8A64d293GRMsR3LKq5oy",
  "key8": "4ekaJf3qMRrxktbRgGhAidrRKeGgfTmFMJNPJ2g12kaeWWuWVdewS7QKfkES7bXJDDSo9M9VHSWs5eBGJH7MUi3H",
  "key9": "48jyhKkzrC1pMvAodXjB6bktAAUa2Nuv9gW18beo83mzwKP5Ljh3fSJZeCthyZQQucj2bYRaTHfuGML7iss5ZsbR",
  "key10": "4dnVsRmJEVCdAvgVEzoUD7Rmsm2dK3Cpys1oo8Zf52Vjzb6n6ShjtPTYur1mzW9RV1Rv3CqH2yHAuoa7nw7gbgkP",
  "key11": "3aNpeSQzjwAELUsk4MV9sdxV2Cpu3TQMs5bb35nFCZzHWDy2xNo1hWaMujvaHaY8mozpBuRvuLFWV6Xb9orqNakp",
  "key12": "2ssSxFPqtDdkxtxbQhw2Dy53V5aBPjbTZuzJFemjfzoSt9DqXrhRPkyKaHKTi3naXsrj1tyouyfUQcwTjkTBfeP7",
  "key13": "5qDY2faAjN9bG8oRHYAgNGqXV2PuyyCAzCHmp3tR5UGXxH7yLnVm6YKGmQGaUdZLpLPr5Bsxdd4zQQj3cJP2Kx1D",
  "key14": "3ecank298zDnehKmnYFC76oyexekGcPpy2hQZ2BDqVbMN3dic7DM3yZjCDbAm4AdSgTZoiowWAUvWpLYuFdHr8r6",
  "key15": "5kPHXVK26JYzybLotA1q2b1skSFpBzJX3qGcg6yS9SgGnfCKxfQiMk7XwnnKhnyDtHvVQ71QgNQptpH6HXx58pwa",
  "key16": "JtVKUeFJEAAQ6HYNYPRYJxYGn13mYviGAFRibo4rbXPnncQtA4qPVyreiTkSGQ4Uaby7woWdNQnc38stuEjGaN3",
  "key17": "5ywBid2A7Wte5fxNoVb7VzZt3xDLPgXJTpdwVcJdEejwZeJvx4Q1aaACuEYv3tao1xQLzx9QprxuMhMMFonwP8vh",
  "key18": "4USBKFPQbXjcyUwexSzWwaUfVNcyzT3Ci1CPxfdKUdmjUx6sbXKJU1kkrMHxbcRDyhfyMQ6j1ddWgQtFxE1oR2BZ",
  "key19": "4XgNMuSkh1AJ6ojv3zv9hrjUbWSMpWSRsMRpNFvQQeWLTnbrVaRNEFkesWEaAEmLxaU8bM9XXmdGxf3ij6f3B4QW",
  "key20": "ERgWFZXEeqYGqzzDJw1CnsTXdXzuDnHwuRFgWttZgXLstVXfZxzHngkpuE5cWrbmo3rihFpqiPaRXwwyiPsYgWm",
  "key21": "5rakDKfkon24dPNDtcnerMestPGbNwP5KEws2e4W8i4PzFXr9k9bZg94oVzYhb62Z4QdL7YJuEYBXtZFujU6Mikj",
  "key22": "62TGbJQ18BhD3EzQDjVFt3wLwJ7iYoxuRYNQaks4qkanAuRQzZDw5PFkEsSYHkGTjevPMLatv8sYEtb2FKKY8TU",
  "key23": "586yV1XgJ9zeq79mftDfwcHHkYZbJA6hcFCFjxeDmR4ra48EdB5ejq9vHv6EHTVSzbTHQz7hXFYZ84qTxZGwUdvn",
  "key24": "3SuSmZ9eSSRTGgxYrcwbemxvoDufyfym5U5f4VdftstkmUabc1uYM9PN1ZacSYcMNTUPdFZUBRN2yEHtB1jbx4Jh",
  "key25": "2rMY76U8wU8sWz62hnQV59DxdtWVRHsGW9L1MCTJrb1jzSRyVwtgYZbkgkZvvhUwoFanwk4ervsZgxSNAGVRs3WF",
  "key26": "DXyuFVHyi3TiJC861TEUdvXv9n9y2pW3QaSAziqefsv1j73fPnDk7YEEpjMxvgc2wQKQajg5Fm7ABApZcEgsdre",
  "key27": "3gvMzwxJbE7LR1haHSQXZ8g9JbAHyU1dSDw1eX5WQ3JYc65MKRRfKAECuit28svojZDd97P9SAPfGzFMBTURsnkQ",
  "key28": "5hW4nCvVCuQchtnBcWjT61g3f7pf3QwixVGHypzzrr9zvdYJDx1qy9GzUQYKCUNGtf2wTY6tAVhjSMoy3BjBuQXx",
  "key29": "4idHawwax7dZLzdGFNFS91sJSUPYkxAumtWWLL3HNx6FGGXNNo2T3ncFGqo9KWc2yL6pM3sQeL2QEwqePwPWevMC",
  "key30": "3uWGdcD3SvfVxHhBmZB6VpCkzEdsDr7fo116tDzA8AQQ75SGoKGbxcn3QAxFfJpWjT8ZAnw9JEdS2cqL6GgpNPfw",
  "key31": "N9WyXdnFFnnRt5gCj87M9M87jm3o4YmLMSaEhbkDDcK5mfBevMNUvrvpwtexWNEbZY1P2ogKkHf7Dv2eaVjGoD4",
  "key32": "3o2xnHJVyvssw8L7Stgid87Xgk1XmevtJBouVpqnuQ3AgyYK13Sg3cyCQHtFTn5eLt9hQypYhccaviXmTsLHJC5d",
  "key33": "2WPj4mLtHv25purFa6ukDdd6dTzLbzwZoQihdCZWBvn2fN1hmAaGER9M7a1GMF6BGwWyNPscsgLdTeNHTx5Nqgkh",
  "key34": "141tZhptwnVpcSJc8iD4Um7WzyFnzjDz5SPwK4zg2nZrJhhuAG65EcbupUQHnp8i1tCDmPj2YNL1H9sxuJsGwaX",
  "key35": "3ZZmt8N7cj6zkXVastdEXREcFUKaSkLxfXgjqBvzZwhJv26sBvubdLbd7WsTe9frSfDxUKzAE1mdHxgUeuwq9oKT",
  "key36": "21aqn7uAagobX3cTyMJpzaD9Y54DZqSsgREt3JyEFMXncNzKH2VuqisyTzPhZo4bF7wZYADViw1yk7tS6hpDRshP",
  "key37": "Rh8zrKPedGQZEHZq9cVh3Ke7kZPHrhv6EdEct8YL3ZwbXeYSwrKQv8NJm7N8gLkzwGQajD2rsUn7hYSrdxoBB9C",
  "key38": "5ocvWQutZBWs9UBGnjVtHrdiyo9hs11bvSEWHQki49cF4JQPXhUKJYvgZAupSfSaxHPo16wuRavWAFWd6JyGQWCK",
  "key39": "TUGn8fY2HbK3qWUmSo4s6EnGwt8vvabC2Fbf9NbkiDKo2Qy8JstjrE7ggpJ7DVuyuQDZ31UzGd89oEuHTX6qU8z"
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
