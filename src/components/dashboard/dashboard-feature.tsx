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
    "3HPu5PrKxiRG3zoHcGW5xz3VSWGJoJW1SQoDY9yr5PKD8iEfwNDT3Gf3E6Bh4tty42ccQgfDKiM3jKKxPqymUjBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fxiwbe4dYMDgfjsoE3sdmqUGLz2DgxtVZWSLPwBghQB9YceGCTjNpvy65Dx8bCrGWQLh29ZVN9UhUEaFmx85Zan",
  "key1": "2qgGghxiGEroMA2nro5TLvgDRCQcStff8zjoFaqG4tV7caLFvViuVCu6vA1npz99S6ETsAkWenMF46THbcqvvTAy",
  "key2": "4vBGsuEAR673yeC3Q6ciDCScyWM2jGLiTGqraRcPrAPFtD1YsWz3gcDTjLqXVCnR8qGGv3zyVNReWcMAFUSUcH4K",
  "key3": "5BU1Hg7s8penn5Q8KU59rb55zDKJYoxJLNYeJFb2KjcHvizqEtK6mJHcywwQRrHXW47uro486QBvsKttkYjaJ8sG",
  "key4": "2pZRCyoma4tFAhnwzSs6oTXTUv47dssZuvLrn9wUFCtsRbHwjxTdjGsJQhybxffLxAxccZ3vFFSMwnHcNqpdZHT9",
  "key5": "2uRgQJdU2pZswfbocofbb5nQuui9ERAreqXJE2douhNoxTk3jhhvYdaw2QQGJQ52bZzWRhGbojnJCafxCMNrbojS",
  "key6": "3rFwccMBSJAq9rsZ6YqeTGVrCUZuu4hMGjPREj18PHd4djnLBNHDsbSCEjcNgcJskQNY3V1gMziKQgJBmMqR5wfm",
  "key7": "2XXFPLUKQ97NgyAwMJVEBTCLByoR3sW21bTQWtd4RAX3L39buH2ydpxkPVPZBSat61urTPX2XaTjw7sLcufoqHyr",
  "key8": "5W3R8ph2RCWnTEbPmb68vpBvUWamLivJ2ZdcJjhzKvrctCfQfTs2q192Vd9Cr5RNsHMqrVQJP63aNYhXQSejwBNE",
  "key9": "2FF1LdqXTZ3UPntsrcJvZMy3VHyqi4dZLk6BRowYUN6DvJ7YScP3xcfdCM1zajgmCYEbqBKiUK9PauFT5XmnLE2h",
  "key10": "54Hsv3aEvHFho6eyPprmNeDr6fxDfcG5iNXHAyNFMghcPmCixab9jGgqALoWkrGqHDx1693bQdFo1wbTUpNeFjM2",
  "key11": "5K9GknZFBvdrTivu6ktWZWm7BHjGJXtAtsaAEQpwao17KxFmrSKnbocHhjW44Mg7uVpCAnCwHStzTMQmf1buFUNC",
  "key12": "uKfR9eTTijC7TCZhhPkhp2rAnierpq9S9eYcS6YZZJCL68REaph3dEZ4Ynv1zfnwsNmYuERpoTV9XiHPMW4wtP7",
  "key13": "4iyxcwWLSWu1CGG5Z2DvEx3aJoCLuhoqVD5wseXZTJWAo9zp5mYixytzy9hok7Ueu5FkzKE6ycK9Vus61BueuduZ",
  "key14": "2X4YaKsaG8L2Lomeov5H8dyPRGZkdyMPWGGDtwvjYEDaReGMdCyZYfSzNwUhV8iJbsYvaTbh38hbuLX1g4NeiMLQ",
  "key15": "4FvFJZsTjuAgdWFWuXEtW19G9ET1nS9yAc6FEoMYMw6jd435BcLsYaEZevkKHTCSZnCm7as8rfjDvLduw4iv46o1",
  "key16": "5UbYjf8kbxCyRMuYDFDnQXk9iPRrAnajT9xEWJqgyJybBjmvqZzS5LpwMmH8xu1A5CwZXD6QxLtUHhRMPLxG7DKc",
  "key17": "5HPAfeFTEJETPY7hxgYyQELcNLgcTRZoZ8ykBCuh5dBqZhy4n4pVkXFJHSKHkj63EtU3Fm2B5SuiwtCW7pQw1BfM",
  "key18": "2k5KB3i7yfxskkDvXktBSsMFK8n3YTVE7m1BM2idyzNHK4WHbAj141we3WLnYnuZEDE9C1eqoHkUJ1bou3WT19zv",
  "key19": "4PSVz7owBST7FbjXtRZGYATASFgPXk72vhGgYs3a1RkVE67b8G23snzNan6YgTHq9iC4FqMM83JTjRm1PyTzmgm5",
  "key20": "4Ey7pv9hhoL9KuDSLio5uNvW7xqwHwymMnvHZTDWmU2SdfpZ5iVZfuGDAaNnwoFbDQT6znxuD1w4Upyt8EqZfUie",
  "key21": "5gNfToLX8Ks1Q22JnGUjHF1VLr67EVkESvj5dmK1yXwaw4ZnU9jpzgSaD3aVNzf8hz9oQzeUepX8RuAZVFNQ7MGW",
  "key22": "5r3HmDc8k27kfNAEQEje12dYPooDSoA28wHz57YJXftLkcc2YhFaFcR9BcuHSPBwioTKkVbVXSsmq7SDPkEytm7e",
  "key23": "ajuWZLBZtim8LEet8QFzDftosEtiU23xjDU7svXogcvMty2VQocBE2yam4BRSUeNWvs7yUBTqqGB3KkVNz1BoMV",
  "key24": "5viX2CDikmhgGihiVVEFgWFbJ2LZsJPdtuz7DaYtPaLWjaGZtmf2b23eq4mjCDxXnGgJj3WJgGbGHmz3rmvDQnjb"
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
