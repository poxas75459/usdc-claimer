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
    "mUqJePAiBPSxFdeq4ugVfdYde26BAWqjMLWiqyJrd6svnPSWC4fAkPgyRUkY1Pc2uxZCeJWn2PvXek6M9aNY5BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24P2z2SHjC4QXYBrp3K2at6DjDwjJsyCdvpXLvWjSUD3CUCrMpwfr5SyiK7jWVSjhDTTmDD1XhPjrPjhUoNSTCKH",
  "key1": "qfjEBvUPUsRLrdd9z5rx3PThNHJUWtZJcf8ZiUMWj7mhsr2cEyLPCTfAVhc3cm9L86VNqPVAznMraoEed9mWDBS",
  "key2": "5TuFmsgwtvn6zdCiGooz4qMjj4FgGuvy4jCykfi5FN3UunNhweCKtWYczx8VURySEoa8vbEXUd7vFcW9sQr3aQWx",
  "key3": "61ScfefVQni5PxjZ4eEU3MSKfJAuVPgfwKq52ihhELwv5dkZ7G9rCPPA6EbM19epBiSfJTwH6WG8RKick8Zsamra",
  "key4": "5knKkTyXmLjquxvaxYUS7JMe3sEatc7snH9zGZR2ZddMKrvENEwHZWiBBjcAEhXaG9efcrhc3hTHuUJmrrmFNcFK",
  "key5": "cV9qYsN5mxAAWmPLY5DJEoYNkJmDy3D8AtAyRWfQfTXrB7YSmm5ynYfXptm9MdwD4edCfECFUqJx6DP4h8rEFsu",
  "key6": "2H3stUDxdkbaohVxjK9T5Kyzne7MjGXW8RHu9P9W1trdht6CoSHY1XiDKjXZxBu4PxTTrM7SiJ7aVjg6DqVHzB95",
  "key7": "5ZoM5xjL1nBMoe89ZFZc6ZqzrXLBpMWga4Np2jp4qVnq6urv4MFUJNqbrgzgnZuE5zgXdE57ejie97igbn2BX2qh",
  "key8": "2aqaHAyxkFFCZvaaY78naxdGtZXz991MZBbNFYAJs6Jp1P5Tgtfx3rGJQE2XY4qb9rUzj2cjZLaP2sRfzDBgnxCc",
  "key9": "61HLuewKV7sMehCiqg6iFTwXxa7XApz9q9KqGRVWcS2E5EXHfrWYQMz2BDfJVYqxaF8zED5tdyqk84adZUCexSva",
  "key10": "3y8BX3tBiE6GPj4vggdW5XnLwiSz5QJ2NFbF2K2DDf2bZmSweyany8LtmBD88zQMoFYRpGPJiSK8754j1xoXPZdW",
  "key11": "2U42ANfdUoGhbXn5mqw2wuuKw4NwwN3jDbaVNWtyaZPzLZx3PBdAJ9v8BBwwTQRU1qVTUBznt8b76LfKqLxrSY1",
  "key12": "4kvsXGCDxpktiYL6R4qjxgSuoj3Q6gDZqw8jCo1uhM7hzNQsHYz5wQJpmdr9mn5xnqCMB4ukNRQ5N5idpmxY3mSp",
  "key13": "48UzcxCumZs6j7HmkJr6AmGMQPwvpYyoRiqm5QpwkBBNQGmj8t8H1W1uSDxozsnqYiGrUkbDAm91XwW6ibZaWDXT",
  "key14": "2wpu534Mj41iA5j2o42aH2mCzLDMS7HMjKJd24BC4y1oAdkRmUTY34vCPBXcSRjkJs1dXg6njbpAmaZe228ejtiR",
  "key15": "5UeMpNo37QyzCpLYJ7JjsiJZiUM5SvCpTNLpwHhLAKJBTebR1iENoCyPGC8S75TNWExEkDt44aiRYs53yPtfmDBH",
  "key16": "5ieZ5kL8LMgq82wojV1nVjsQEkbc7gqjpSYNayk3DxAi4UkyfVLy7yniazyoTg7A8g1J12SYPv15w7G5adff8FXE",
  "key17": "3hjL78cspre3yPGHkwWxC8EejvPPHY3PgB5DHru2fhjuCnHxMrvV48WkWeBTrrZXNvwf8uHEH1MLijjtkAHym6m8",
  "key18": "3nVQkaMLNiV6fM7X3kEJPeecsnQvGgcQFpaZ4nBW4hRh2CxJE5yRiYsYA2P3Qs7M892GBrVmbAUMU9n37Q6M4ap9",
  "key19": "5nd1KLqeCX6arY7rmpSntP5Pf9kaQfWNxjS2M6ijmdo5dhwxpn11YacrhxYSgQuTZiLxDRs3ivPQ88Zo4zpEJuqp",
  "key20": "3SCCEB27LAgXcZGTGbhMGxxc7m4XuKtxv4d4htuyWz37HPWKh6P7sdZ7xuuTfefJMEV7pXx7g5hFDA2vjAmVrMnz",
  "key21": "4LExHcH2bpQukSrPrN5e8GxxB229Fp5tj8SSWDB8dercVrM2d1iQe4G3KunErBxuiWbZydrkhKg1hHtPtkhsQZXT",
  "key22": "5waEcTCLtHdb3E6kXhZPyuEEsMQz5HmsSrm3AeHfiyQNCCP44GzYJMufnBarbDFo1jrB3eZf448GU1Jz8x58kmA5",
  "key23": "kymqXzwPHQaRRaX9cyS82jmPW9aSBxc5R4s4xDSron4sgiqERHswnqN3AhEeH5gbhEngSyLwNFGUTfYAnksXQJj",
  "key24": "22aKf7mHMZbPCsWi5AsQg6NAq2ft7rmeypYLFe7xY5NdyhFYPX6nCgp9Z5L7RJWXdytm4RZDKxzQrJSsPSkqnc14"
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
