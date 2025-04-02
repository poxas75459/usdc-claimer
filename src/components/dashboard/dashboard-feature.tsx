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
    "4NcbavpncDsdeWU9PKfbB69ajzhwzeJgtKxDBSaRWPi6J9wcw54yry4u3iNshbs5AKtWhyeV52U9PFAiUdqoX1tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvpjQhx8d3WkLXH6nk5jbB75FmCX5VFKyxiyVEo31oqBLWEydjwUYfkinL1XpofZgL23eGgLpY3He9gCjRZLhFn",
  "key1": "3yA2SscnxEC691pJVKiaprQ6ctULfj2UhzGnBW8EoELTsovevzQtZk3nV5WEuReWtjPDm9xrVuzQ9hvfSPQpRUA",
  "key2": "2sJhEpxWrC2AEwx6mQwU9fefHctvNjpjrsS957SUZpqJSgjke2f3GAG7z2C4GAzwV8HrN3JXXq5tvhoSnf6H3zK6",
  "key3": "29A2E3sMCzLkWTSMHtA1w4vJybDJ68RyDCpmuCYUTUwxwstJdDt8PUQiKnG1B6wgKRoSkiue9XnWBdkr8iaEnFPM",
  "key4": "5jcSwnrnfedcx8h4dt7sgB8aHJGgAA6kmg8Kcv3A3J2yFGeRP221iak1K7LkSKxd6RhggaLucvmZaZSsMtS2ohRV",
  "key5": "4xL8xW3hJ43fpMPgDVWUh9vbtUhUahnaVj6XKhh9mw11bPy5qUBdNoXvVA147hPohRQwJVXR5huo6eXAw2y9jAs1",
  "key6": "38yLYHDA1LFqdJ1DXqdTLjtkqzGBdHmLxReQqnfi3e7ySMjTaxRtgLzYT46yRksHci9DisMCLcnU3PSiQ7Aid98N",
  "key7": "3cASn9BsTqZPiERqyjCgVhPBaYFTZZNhFkJBTK41Expya5fQyV8Vv9ayWsDxvXZ7vaUkTcdh4jHCzYndsquvdjhq",
  "key8": "fR5ybJaYpcJymy31SdVtcSEcbkpthth9kw1tJjAUGdSskhzCghAfu3DzkwavfymgWEPxbJALyvG2MUJ7f8DkeWG",
  "key9": "5dxtfEaxTe73W1z9AAKMsTUSviBxxsWTN7uMTk2yCTY1V96j5usdfNPNhfAngfZaQnYWXPaQDUzrDrZhVWsySU5J",
  "key10": "5rrmzYhohJ3WSgdKYrWhykaxRjomW5KnPns3Y8FmWLqcTK3Gj6XDsM1N7MU55yicQdNewHzFqSAbtapUrBrnyV4a",
  "key11": "5vwGs8MKBsS7atQcDTvmpwn4M2RLjod518wRZHPFVCW4Bw9Pemfqc9sHxZpYdr2QVU2gAcXgBq727yC6TXVz9sNL",
  "key12": "xW5WbrjgWUisQnf9GAzJgRio67hhY3XhzLJ4CMBiHai6pzqtiKXLL9SKYXc8XfGWT8rnBVKbogFfWqb8WPcNzn3",
  "key13": "289yWpFo3j9jQ4sJxjxGYzbHmeHtukDKLGpLyg5Y4vLBYymnjCctdbSGwAkwPXprwQzYaNwnbdR74Lnr3vouvGUL",
  "key14": "38VysWWaoRtZHdiDvoB5gc32dGTKkn23KydAVKX6DQ1ody7kp6wXqhbqi7nGPJhooo14onSyRVmBFbrsj3XsrXW5",
  "key15": "2TWVMozhFyhDppD96dsA79GTa3YPib8oAS7CQzazFrD3JvYTxsbBamKMCAFSMj3aKT6y8AE9hRrEa1DNxvFaihwC",
  "key16": "5dUe9qKRzJbfNraTmMqVCQN2rEwqvuqAM5RxPCdXXoPFSpTNtJHYh5nUk5QYY9JBPiyvWEzjDpruotxtiSoKptDv",
  "key17": "MzzGLkhKyfE4RKbveCrNnLyp5mEaypEVa8oUTRnb8EeZzHDjNBo6xYjfCu4R56GDUmKtJD6h2zUTSYGoDfAEdN8",
  "key18": "s8NTLpBGzpqH97ouxZWo9TmbbzUDu95peMvyUBrtBbzrowgAqZRJRyxiugwbvtYDHVFQK8eviDC9QFX4iVgxhiC",
  "key19": "49mh7p7tXUUxADhvxiE4Nk4sj9d2shdM7ZCYa9qChQYhkBeDLGX8JcbUENMws4RmQP3jSXtf4jxXhCKPKhk1ihFH",
  "key20": "5z4ZNnNYSjp6EdqHUdZwhMiMWVp1jSqnZ3JhGCAiVt1EYud897ChY37feb2UPAuyWdFooNdhqFMmPfaY2T3Rt3Rj",
  "key21": "49okJUdZQmh3dd93BKNAJDxtZ7gFb7528P2jg75eXvver4UjkuAHRr62SXcrP184MVfR3crQw6qbs3ud4qAFYRC4",
  "key22": "4R15gkmVMXUtUGXTqpdrePrb16umLpCDAVphP5aBkFXgyCGVjmdPaFP2C1pRxBgNBHCZYZicx1KSVRubJVrev2wJ",
  "key23": "4h47aNdYRBZ1C4xtLTp6ooPvWTirBw5NU6FPBH2seh8WNfvixB8JH9X1b9tModpdoUG27nYhmgrJJRokp1rgRoio",
  "key24": "3yAZvKq9CfKMGhiQGxKTFFsuEtwaMBypM2CtC4onhhf2xgS3tzShnRW6bHkhVGxYPmg6hTU1zFLMS65z758wys16",
  "key25": "4JEKVEcs4aH53XGHz4z8Zt9CXPWDfSTWn4pA128xSNfRdYqAZiACJLJY7kyi7rR2tjq1uEcR9dpbhnEcDgonqRgp"
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
