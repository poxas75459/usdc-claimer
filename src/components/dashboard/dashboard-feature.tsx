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
    "5VpkcAWvPu9UGhmRiU9mtWxdMTSywnbWz9SZbWWZ3JCX4FwQnQMjQuhNASvSbsdPMd71VBECPH4BsxHb2Rry7ENv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpudAae4ZLr5FaPLULpkEfw7AHyAWjDNeMJHyc5mGLgWtH5mZ7jcXDLQyBqcejFCGCenPKyz1FsAizw2SWo2j52",
  "key1": "cUz9bgt12RX2Ha6cbhV34bNDHK1Udyc8njZYBLYrQ9DjG24BGwmJbU2H7zLjuxrhifB2zMtpE8dWE4mnzNGVnXp",
  "key2": "5poftzYCCw5xBh83stn32zfARGmSdyVuai7H97FJKwrDw4nFM44tmtjjwh4fcgkV8V4z9gUrahuj4gDDh5H27gqX",
  "key3": "5P6CKmHsAjLiz6RaAcnAaj8UuDSYbyQLUsXLFtWLf5Wwy2m132Xh5sZyfodQfkRJ2DEWfrcpBYJt3ELryPxVMTYy",
  "key4": "4imYQ4gd519k6LnxyNCgvuUvC9gepbM4WPRgci4uE4xh5GBdgHvRqqGFGPgZ5abgohYkkLJgHkiWDWLDZ39VtA47",
  "key5": "2Bnz2rMBXdy6BbpDVcZDGUzX2PzY1UcKS2tPnd4VbVyNJzxbpEvyvjY1nGfCLg34wx1wXc3PSsy6QJghJr36Wv8D",
  "key6": "2tW2pwJzTW1WSGuwYKHGkVshhEaDtJGj4NwihGLtpDE33H9g3X4aqrYZ4Sx1WeZExCaJNifwcwt7Vc9zKoNZo638",
  "key7": "48EBnyePMXLi5tojrtwyh22wP231oSqaztRovtU1Nn3pVPLaXT471NhC9KDg4BAaxZsXHT9uRAychXBNt5A51Pvj",
  "key8": "4EmfEGQ24H2P7NrzMDQQh2DYGpm6ijibV8P4Ycfn4TUZ5EQwFN8Z94ZTRMymZTiGGhpfKJGPo95mffcy3GPndCew",
  "key9": "3qwAP2X3jVgZtWQ46ke3zdUDjV3XET7XX9HCHBgdhZqoJEyB6QrzuHgqbhLqiDPPWHKxMGxTES5QUdNev1xU2rSs",
  "key10": "5wNr49jCYNkvvr3S1kEKewrispQuPAYtmaW1nbYXBApsqwR5Q3qQ8RzjrFVoneEgLEn8b5a26aP822yiZBQYZqf9",
  "key11": "4G8f3ETCYTGfW2qRpzCnRicqP5hswZncdBDrFTp4GQMzLPRL87jDESaxRnuV2yaTwhLjKJoKMEhAYNsCKM2zMz78",
  "key12": "5M5qagi92C3yFzb7M5S24ghgygBCtXy8LuPQH14JBX9hRxvM5aYxLKFj5Jow772CD7T8boBuiZ2ReKRPYTmooAGd",
  "key13": "cMCDdWzd7dwCufB2gx2ZZra8KFjpJCaBCRakXh1Gz9smrybnQiZrXXu6XrGwEpLLU5zZ1ThBQNXiUH1LWt6WtQc",
  "key14": "5eizDzFeXzxumcCLsigDrtZfRrfzZhMyDMYygUbScMUbqVZe7aZAU9bECccThbWn3M2bqkAM3114vaaPtPRRUqB2",
  "key15": "3wS1ibmmcAu58pBUsgphKWFAgRhEzntkf2bTBFYScwAqzQuV7ZRvvZgP8nY8hAsMG8fa2W32vv7bvZPRV2hSWrYx",
  "key16": "2zuv85bGhtSj2MsgZC89sHLfRu23yaXgtS22NTfuuWd7vb1xnn1A3PHSx2hgdbLiCL9CWsBgpTjBjXkvXsyBfzY5",
  "key17": "57ZyLjtAPPd2ThuXvXnjDS3Hekx1j6AN8y5fCJakH6NhqD6eZGQKHfRCg6i9QfGAnJy7FFmTvV6BYUZ3Bqt34ex",
  "key18": "4pv2pBeTv7Lfs4iNCc6aLDuboBj3xF3ELJVm1d2JTsADpaku7KVbxNwRzxxa4MFpn97vT2t1McHA3HsA7DMBkB49",
  "key19": "3VE2Ny76LYVRghwLpeKnnwUAufzFPLLtnsP1t615sPhcovAuRbCepya8rE7TBtAd1jstKYQ2iLrinWCvDnq1YSAX",
  "key20": "5ikwQULNrZyGt544C3R4RZqAr9baPdboYYFuiSF3GiSf5yo1ShrMkeZ192VFRu6uofZ8iRD7McUCyNGs31rYckVv",
  "key21": "5uBUYHAsihzN5Rco3qtekucmfL38dC3cpUUdCuamTW8cDTFJGZ3fbYPoe3UjLWVJvrrGR9j2XUK8RH1aa3aAmHGk",
  "key22": "5Ry5wnckyRdjqGHNF6Z4K5XyRbuRdWXpyHEETMkFjzXuBpD8yVnB2NFgc5AezFRVocQwELW7wexQsm5bokxvSi52",
  "key23": "5YPeVAxM1i4yXbe7H1EfkLjgMXboGAg2fHTCSPxDiathvYYvSrKcoN6kphYV4GG8iSbfDrHuxZe8ZozivQJjt6r1",
  "key24": "2shBTPJSmkNry4DuSL27gYAGEXh9AQziTWEwiu4mToZ8EMdw462YufLx7mgamCzSJCNxsRDczuXSKUe95zhqzB4Z",
  "key25": "3w6bQ6LiMPPJdVQTeZR1oeF46dDwhY9nvrbWH4cPf8ySkQAEFZG1r2Lyvdemne4ywvXPdfLvtQ2KV98GznNLkwyN",
  "key26": "2vm7gQ7YBFTKyQddjqovTGTS2RCPir7o2bwJaVBVAWbw1wpPywCHH8nJmqAPfQz1opM91Hb8PkFb5ofn2dLkE5p6",
  "key27": "34vghgipgifnunY1GXEZutRdkCBPE2h1jfHWShtFUdtdQUYM2jSWy8Y916Z9xvzPq71aqECaWrhxjNRhJkVatmEZ",
  "key28": "fKWs1U5ehpbNKvafMRtF36tEV57Z45rh6cEWSsL4Z3mPwTdnYjgkytuHp6gjpuxZkehZ3piZ9iQNHcFMF8K8xUa",
  "key29": "5Wobxf7UrB4PooeGFeEYq8BGDpB2FuWo8QLs9qbyTih82gFDSKKg5wyAsk5n8K2YFuX5PTgFz8DEFE4sUJQvDo6r",
  "key30": "5RCMME35dMyjnB8W3G16bLkusUUZAZKaJZ6zKCWkJccHRmVxBbCf8xa6vW24Ejr4AtsfaKB2g5bdnjkjFedYPray",
  "key31": "5p9yufHEy1G7ZcufZyxn7A1DaCxaCcpYdbAkyAr5ucsL88pMfUNzg7mzESbfZFXvWqzYtcTzymHP7XVDXEUp55cp",
  "key32": "5dFi3TFJtbbNwk2jBBTqy29p45ae2jcouBnAYqRcqKF2Esb7frbfumEbLEA5VayndAbkfh1m9bPWN5Vqi5D8QtP7",
  "key33": "2KSodEQDSPeekg9sKsU7u5EJd5qUHohjw5eoH5gBSkD3bqrzvnXeepbor5Dhfsd8UzfYFw9heydvhkrRDEin69aL"
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
