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
    "wrrJWXdv8FJCRXy4sXrwD81q5DLvS2w2Waq21oG5rkjhWxfPHZx3gTLyfxqL2Niiyn5ebRa8FWdhmmpyahwg2v1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LkQobDNimuXF4HW52FHWvjhAAJhMtLBcNGXtGmAFQbSz7WRqGsNQkoN3Wfc649gYwAPrTizoJ42sYccDheJ9M2t",
  "key1": "4KrEG2M2WGcWSuy8QHziwRGurUJYGVUtBDf95JveTFuGAp79BwZmT938mTYe75TpfftJGpfA4s2kJTmZ9hcVQ9a3",
  "key2": "2NNrjr8LM9UcRRT29wZ1oQhpKNgoKySVPJJSuVrGLhn9FW3fNftCfS6boGS86fLMCG8rVA3sSvLDoXmiKD7qQYpW",
  "key3": "4WeyuEFz2pheY9vn7zMpS7sYfi9QhWEj44DwKfZt9WMhYePvFjHne4TtSXWuJr2nzcmnx7dsE82hgkH1rx2Vw4EX",
  "key4": "5jTpNFvm9N6Jf5pyvFFA4Rqe3Cu98asm4btvdnTQLQoyhv64AAirEWgmHomUcJSErEHincGjP9Y2e1axPfNdReEr",
  "key5": "3Zf8mWWEUc8Q9kSwcPYMAPHgviyHyvSHCtLAxhyd56ga5gEVvZijHth5RpZXffY7aD2TVppCJCd3vKF5UPdQ8Qw2",
  "key6": "52VrQCeYWF4KUSozk64FK8RQfmPajiddgc9omvJmXiBF6wECK1GptkV1PXzGNxG8tFCdWpwkx82yTCxSrzZ7hSK3",
  "key7": "9ZYXoJ88Bs5qWJdrx2FUQXcSgEjw61GfqAraSnVWEi5Qx2Jj7LUXGqXtk5z4dyHZ3iCwZDV8Ep3fmsAusSNKNbk",
  "key8": "BzdjJ1eDvozuKqGdP5PG75B6NpMpvTmbrQVyqx5gzvKzq2cJGmGiRSnhWTfSfi3gHBw3b1N8uiG4bRPgbss2yXK",
  "key9": "57VFduK83dfutq2tK27coPhMXz62YnULoWGom7GbsrNHHr995e2SRX5FRzirKkhNiUJccmXH5sM82HxQkxEmF4rt",
  "key10": "22f8LcGbArAJHv2aTiFmK2BQ6jzdzVu3V9dptpKndRpTmbxUzPwTrWf7okfNFQ8EpcTvtcTK8GJgLHpNFD2RjF3j",
  "key11": "3UnPorV1JNHiYtuk5VDWpYKb2bUTHPFLAFcituM1gPzJeE1vTY3xRWpMHpQUT8Yii9m3M1r7HdEauC8ansTuarHR",
  "key12": "4P4LzSf5dN1jm6SDrbrTfvymSaZDEx1JUeSgTkaiHXCJ1ARn4CN8btiTJTksTPShzGdiLBZQ7EUpTnnc9WVS6Kfi",
  "key13": "59n37tLYumBCVnF8YF1RX5CxZwBR1TktkTymumoiGnVDxvwP1jXGRRcBvuvGJzG2jc63R2uTrdsMieuy2gqcPCTj",
  "key14": "4oz6nqZcG5bXtbmKf9KUsuxDiGGBmnYhr3h93ZufNREaW1Gbo1oC66Kf6Qhnso8uGwYXBYWktmdB3cScoGSUPVvG",
  "key15": "3xRHzHRoQF8UHR4MEFFmJ1z3YqAZYSimAvDWaeN5PmvZ5JZ9ovXcVXJJNB9fUgBcvFDTzgv6EeycMFTg7hZyj4LB",
  "key16": "5FXCfkJE2ziKS5yXPmFEZjBpwKEiyanVcXLaw23MSeZUrnpjEig9utLKF3XicTdKSGQwBHsC6qUa2LSh9sUUNSqD",
  "key17": "3Z6AU3SuSUKiPJTTnbU5s96pUj7Nj1nagiL9Shz257kFqwuw4CMKJuCf1wAZ1wT3Xkr67Kc9cmwwfRRF2cMPPP8D",
  "key18": "5azMrmMqLLkFBPz7JsL7bbRKeAbpRu8Q8WjdanScj2quigE2o12xW6Fu2wWDTqJHrLAaSvbQdsDkhPgq8b2KCxhe",
  "key19": "51gRmHTWWsjMHq3FrtFCXCJUJbgSUKN8UiNqwAjQKKFTGxpA8r3hmLtdBxZQ77w5bg1GdVr2Bnm41QnJpUwBM4DH",
  "key20": "3Qq11CgF9MhVqYqsoxGviboD5cP2zVhnXgfEXAzeH7puWomzKRv1LXxN3wYMPK5fpKumzNKansyx3JWuSFTQofpd",
  "key21": "44eSYijAg5cNCatZGTKvYrxT7vhBVSot4KPJDPw1EoBt7hAJrY6k9GiBTVgMemeLtYGiuvwxwiEZ1CD62TLmv1Zk",
  "key22": "3eTzXNerhcTJeL7DjU28YnE14cDmr8sDr3rnopUhWbGC9TJhPaQKWU2nuRB83srxeETDHf6kAhb2QTp1ojv6t5kS",
  "key23": "533ff7WzRDx9wfHnrdrbSrfdWPHbJSz9pKCEK3CvFXEMwGDamMqba4WAxTYvMYZao7LX62X7MHetnwbbDjtVuQmW",
  "key24": "4KuTkbmbtm7y8Rj2XZ4SLhhqVKQfGJemULemipXotnRzZLNShUgxrzypHYipFUW8cbDegRzeLi4aoNf25kQVd9L3",
  "key25": "5H6GsNmBiwWEwQLnRfnp9GWDEec7fGHVbPLzwDNzcac7gq5P1RDUL1WeKJ8vwUhsqoC7Z8bXcDwaaFBfKsvBEZ1C",
  "key26": "27b7LwuRwZrPhhVaxTVjMrrxoVg2PY2gT6qTupMvWkRXPcskM3AGADBTBwDWvvBShoZumuth8syzLjw9AHw8NvVd",
  "key27": "2YiS4JmrxVeDpvFrdBwaKHpD5sSDaD1p62nuh83VGxa3H56cKJkdNrVaPSGBCh73edtAHEmzsFuyCrmjCLvohcy"
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
