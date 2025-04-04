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
    "BbrJB3KyRwvWPaV3FVAsScjd1RULhwwWmvpYTWXKK13bQG7LVqCtFF5BVEF9JUqLGrezCaVu4z7wSzSRX4XMPPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7Hr38xyA4cmTVWCsuEfRYdd1DidWwHx4GKYkBvtKrYNHkULxKuSJRX1a8u5W792tuXe6vUUvxPpvA5WLSPACse",
  "key1": "4bMCrNy5MTCsHoPUjgwAKD5gwADHkY1QMEtEzoy6vhWAUPRdBy7FFy6V61jcgHgot8aQWs6UoHmh468TFWDXXpoC",
  "key2": "5pNYtqvtTpGNBK7nay3zMZG4y5jdzyCVcGb3SBGEmzPD3LS9bPDbTsn6K9DaX9vuurk4LnqVRDBLREY694Vjc6AK",
  "key3": "44bLPtXeNBdVTcxscFZ6pkoz6etsstpQ8a9ShRNhTWRdiHyeZux4s2RThGuygwRPBWwqTGbZWSXrge8ixojerLDA",
  "key4": "32aaDLbQgPF82oGqCxeWVGXsvCqVqjG7wG6bvu5Z9eqm9W5KS9G3orA2qYXCpjnxtCntyVxdV8XYQmxMb92MfCdn",
  "key5": "3qCMi6R5cNUAXGkfRRWQ4HgkeEazgin9oDrGerrL21radZqcHe4DoKX1KqRxzwVNbQgZCww2qvX4EjRTuGcbkMot",
  "key6": "HM8bLjYZb41QAqzz8EAaZz8aXUR19YRXjE8McBrqaAs4cJU1scqqrR2BfdEhBf6j8mK3RqA6X6txbEkahTVSjnx",
  "key7": "4JiWfTz4SFNVw8g1Sn4YS59CFPtr6WrSVBeQ1is6LGZf2eXrRstpKsg2c3Us7HTiAi2GwKxHVwmzeXtvAePBa7cx",
  "key8": "47kBhfyRAnP4ZoCiHcN9nNGauysUqszMCpsh9FTLj6eLHWeRwahXR2r1wpnasSM9SvSVGi7GbPQLsjs9oL6oVYJH",
  "key9": "3fBcj9hRGuu9LBzWmraQijwSYjVQnF8eHkuvbqiTJhM84PPvZdECJi9xfU7BgTb9CwDkagr6gt4ze4Ue5KUwUxhq",
  "key10": "nLcn2FXW6mp99TfH6Rinpg5tsKCWTqCxA8vcfYMEHvWGGakUe12Pa73Gpy5f6X6kmanZRi5NA52rhS57Dv995hc",
  "key11": "22aLawu77KQRwXSgp6A1nX1NyFFCPk9xttEYUL9LBysXZocXfeTxwVLbUx8dF82D9yy7v2uFGKsucCR2LMxSoRwF",
  "key12": "25rQM75AoRaoaddWDhm6wBCchoJLWcumTjjSfRzSxhcfrWKedDnaUARtpeP9DdHthkZASBvXLKRp4a5oAnBPdRdg",
  "key13": "97D4Qn8MESYLEkQoUTGWZU7DJw3VcmQ99EpTqroby4RYm3vNxrN68ZVb1ACajsXpxE6U4s2ybaaZSSVHdsiqZWq",
  "key14": "61WQ2kYL4wXjjixyPk6GwWs8fLx4fWFzNzGw7YftN6BL79iiujKwr6kaaEkJ8p6aeMGys9V4TaENy3fQqPbc7jrD",
  "key15": "dbydCjNvNjmkCx4YeV2unn5jbYMr8vAmfkNfRAUSoP7wtenBdYhBMeqtENuMvtCC884LrsbSHnCqqN86v4qU8ta",
  "key16": "wuiT6uWgb7sgrZLNNYR4NA8Bi8bR29h4ACrBYpXXpUosxBvpdEz4QcdJdwLhfpKmDjfpLZzKSsMmQ7CHqqcNtPK",
  "key17": "5xHQpaaDiv44NWqSGWbm7W2QdnUut5wvkzgcs6bLT5uS62CLdDLiCoVo1RssxxyoYZmqHRKCv5TFoCaLCmoSUX6",
  "key18": "4hEw3dwtLjKYTYTe7FDzK7ybzbPMY8UhJNQWHZTdwFfqPgEKsF8MkdPVax4JQGLrFfmWPPi2HSLaGnyDW1xMQ38b",
  "key19": "52VKqQ23M4ZfDDkympMxfAfzUMnbCogVZGmn5vCkzLDtS6aBAZFFp21mtxt4xwJwe7yd2zcZGoK7gaxFWCdHL49j",
  "key20": "4KWT7go3s4XVShwcMPavYVYimci1ymtm6x2Q6jdgQvBie9HaymJfF65Hdvy8oqkapV38LhaSuZBkhdBAJQ5X6R5J",
  "key21": "4vnH6xyGSrQUENhj9zdcGMZRCGHXSRrrEDYVkwyTRiwZTrV64hZGzcjSKP1EbQRQT7t5suyDP38nNV2oC4nhhek3",
  "key22": "5NxLsHyJvU9fJukTUoQB6XgNcMbWYTgYvQLmfhbt9iitaC51hV5T8E2u94qet4Ewz4dm7GWW6FeJ3cPkBdyyoFHD",
  "key23": "5wV8FS5JpZZU2nySfFVKmBsV1KNCFwwVid92xF91Zj7Xou1o2kX64anGd3YW9xpNgPpNrbhaWzvkTHTvLuYCK5zG",
  "key24": "4SpwgEWKft5axeu2NHz3QJMgrJtzCT6gjt599qZKejAFGGydrmxuh5ySU1ZgjgEMm2EibLGH8rcBmMp1hMSR4fvN",
  "key25": "2UWentKUGZGzuUijZsma9XWE6Ng1XE13bGgRdedVyxHz3dPj4MRz7Am1aMJB9EUwtStTxp7UNoEfZAtnHzHzPHnG",
  "key26": "VnbbA4quCQautuRwviFV2hzbdUsHZhrxu5kxS9gTKuK22bXT3zfNquohHyUiuTda6nu82AGKJAY43z53oz5fwoi",
  "key27": "56iyHg5tSZwgScfvToCznx9HFVCeAGmqitXHaioiuBH2742ZyH6RXh6C3s1uSAPmqeSp69vRhRsd51dAqpa4FVzB",
  "key28": "BeY9UkdZ5Mg5sWV26nBcbFTUkQ2LBVLmhcuMXZ6ecjoHm9rRr3P4nT9E4vf9L3EhbRkfnTxuXnXWRsAVfws4aVn",
  "key29": "YpQmkq6EDgjZEPZSPJgkgbdHRGAyLymfk9qTQgnAspZsV7gdYvPVY8d9XDAUEJvN4G4iCQnZZ2ZUXi9HUi5gGsD"
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
