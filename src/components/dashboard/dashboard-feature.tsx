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
    "3wD9cWEkdB6vDwPuRdcumyyHFVHnBF9B51GMAXXL9rreZrmwFhJyucq1pjLzfu2MZFXW67TDvyWBRW3ZpZEfW9rE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUb9tgcKwwTDdSf5DVLjK6PN3TEdQDSdai91GKNEqRRo5ZaF1BtsZSu63tVSYKa5W92QapVHfurCaNnByX4quJj",
  "key1": "47G5W4ArNFcrVANmzxrYudzHbkoGELHL4U47mkFvPZMEU4TK2CkKCfQtYUggRAxXPz4U6sB8bmYz79dD6AyzBefk",
  "key2": "LAEikgxGQPPKDim1M8QATWWgwkTu1f8psY6dHJ8jE4pxByneyNSwkX2UxMQPeRJk2BKLy7GjVBdMRn8hqDFrQyz",
  "key3": "4bNeVi8M9Q57UjaDKEmsABoY6zvufWqMj7dgE9JMZPgGjqqaQbgi8vuWLQuCW938FPM5BicNBYDE68C1Y6C7akKa",
  "key4": "51oE9oeYqrtBhzkh2oH7BNjzvLWHLPWohyr1EkhqMP4A9F34PFMF1hr4nuubJFDXym48EyqpksgJziZVQgrijdNJ",
  "key5": "VTueXd9ApkAjMcuRAAT9zXYR5G1at6U9wGYn3RuNxmFgUESwZTSozCb6VU32z1D1PdHhKVX5sYUUfR1N57HQgqS",
  "key6": "JhTpQZymfxUiArh5nUXhCsyuwdMjYMzekEqoA4WZo2eWTiAwstifSsoFkwQn6q4PM3k3adBTgz1rVw4oaqDMVit",
  "key7": "54vnba8iX1QVbmNSYmbNW8REpcrP1Sdd99EemQGnfefovqjbZCEKjCZ9iBfdujq9yFkAAVzyiV8wXoPuMTxSbont",
  "key8": "2oJvE7N1SmxGnw5wJrBRrHnNKPwQcvxCHVpxZe5gEiyjuNGANHy37mhRGG6qC3KshJw97a3ZhWvMepmMG22k9yBP",
  "key9": "4xccb4iXQbUR3QVdoYKecjdXTJUu4mFbQECXHjQVvGWvGtcVytAF2qSWYCJZyBWZeyE1obL3gKjzbRZ4KtrVuUiv",
  "key10": "2zefHjf5BbSsUaNBCTLhoSoXUmbKPJd67c59tftKvpdVjVNK9TFbspRGhZvV1NDg5QuEUrFiKbPfuwSoUwZkoMHw",
  "key11": "PHPVFcouTvCnTLADsedPawEumzNTnoGy9ovTpHBuziCf4uWAz7Qa5YZQRtz25N6RaVDohtzLF7f8WUu4sHmQZvE",
  "key12": "2gwXiJfhrrFAHXKZUzucdjQmLKNSYtzMdokWdqNDBC551NAV6ZqwijpKXEPCA9FXeCPNMfTEwEfhJSRqvaoyUGjz",
  "key13": "4o4F48q8reDVARLFM9YBmsip1YRimu4o2767rzAPWQaR4ta6pvtW1FC8uSSyxWzT5qUyPY6BzpPGE6LqVqPyXKtQ",
  "key14": "3g9Y6DV5cDHmY5xZFeqEt2ByM6HP7hyjjFjTPpnepsKF5qzuFnco2kzoZYp3aB5tpMTbteBgyW2ujShU1GWDm9oG",
  "key15": "53qmtaiXYRezTRJxwn1CwWSKSF91rzJhKG9KjEfWDifMjg2K5ECRrA3LC5PDVg4zqdpWpHaFWrnUcvWbU3Gx1o3M",
  "key16": "2S4ppna1NxNjafTcBZ1TuoWX8x1Ab2vcFVaV9N3gAynBzCSPW4DgVqjbmYDgHQht16pkW5VqKY84JzXowsW4hEg7",
  "key17": "3mYUYaKBuj5DzFNwzGZH8pHyusDRuCZfLRZrC8GZYnTBEGqDdTer5dLLx6L9ZWUhocZHg6Q3HaDyuhN8rzq5Ea7A",
  "key18": "5eb1hPeA2bbtfQF6JUyqeGUTKnpgRguPbNbiA9zckWF7AAqwdth5CKY1qLHKCcBtdabHA7ubmmqibB2CoeAyRjVf",
  "key19": "536FF3RVpYYAZRdeBXt7uSNgWc8VTnbgQGphg2KK785pMjrPxzub6jxrbEPtn2mqaUGE9Mpr9AAxkVwmk658am8d",
  "key20": "WpyDbpBS88sd8JN7dto9GVN7Fo8CJiLehrHdrFr5Ct2gbJYvfaJbSKbWPhnJ4CcuGrzNUvV8XeRm4mVdeVdnYwQ",
  "key21": "QdVX1M5Phcc7fzoJPiYK2eeoFy6YFMfDrxGUAr7G3Cry3bkHo3RVxEoyEf15JKUZLYkhvkzDAzPffiZ8VMpjYB5",
  "key22": "56jteXzT5eZct7AKogxeLkEfdfa7p2TY23eE7zq9Nj5Q3Yr9N38DRrYX9iUNJWcraCa8nbqFVpDmngb4z5egJUBw",
  "key23": "3kECDhC9WzUeCtffxShQUerqm5y4UYeo9LXJCLsy3XnHuhJervFUXbsMaM7tuA82aSkGrWD6UXDtxwanTVAq3x5n",
  "key24": "4ZxL2pbgzrwfdWfbTiZmJPSysp6eucq2gmTfzmKrvcBMRSDB5AtSbBPZNxdTEsmmeCz266cb4dAYxyQ7PtRydH7T"
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
