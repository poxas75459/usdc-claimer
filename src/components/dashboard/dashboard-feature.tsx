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
    "a29AodC3TuozuQ9enYaqSfed6LiML8Xr6Q1h9rYYPoFpD86cW9hpyXTPKSaoowF2Jw5H768eCfZETk6tCEso1tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPtyyL7totjtRwzaFh3M2EJ9wWbyuKn3rXNAer7eMK2Rj5y4ujQPzkvwQrAoePZpmBQLHLrxYiPsQWwHcNtC9am",
  "key1": "2Tzqdh22APhZkE1pTsLNPYmw7h9Yp5HscxmwcwqhSv2pPv5RRnkkwjDAw7Fee8jwwYxiVqs4feXjF7mTy8J5UfHL",
  "key2": "3P4TLuPdFrwvdxkZ6CxCimfnV2yrarUbPDAqrbzu27UYsGw5UTo8CuDU1oCZB4jmoXRsYwvUukeCWj6DrpKB3ZM7",
  "key3": "5sdsVL3SW1zR8s4uYcQLf57Wdm6zXqsFDjWXyZH2moUgjM5EKugAYMeQ5j5wR6p2KoAcBdCFdgetsW6AGohUbVbK",
  "key4": "3gYbtEdCZRPrWciqxX9o8JcvxuGfgxknv3SxLjf244Dv18tKqGRehgh5Ld4mCQ7MmdHa1KWNN5JU9Ypiifbcw3zx",
  "key5": "63EZiNJR6kH5TSGVjgRYQK5vxw9NWVecp4qvXKKhWopa7njXbRyUyJyccuWW43iDjEiUQ1dQDaDZZ4TY77qFv7zi",
  "key6": "3KoLkahxZ4Qr2QzC9Lz7ZVGkkbi5oyUCXFcXtMUXWF7EDJ88FNnrh3UT9VpbRkG6C6eg9d3uPj3S7zHeZKUPGQbA",
  "key7": "2wGbpp4o4mEJgNp7gKjzRdvNvrxZTii2AiX6xJo18zG1Myee5Z3cbAEGFZZt52GZRyvtdT9dci8poaUe6HKdY8jZ",
  "key8": "3SN6HjwCrjwdaTNPa2vWt8jqnq1PZxk8p773mft95nacBLuofZQg3jkXGaMaE8wYvqJQPAmthVLvxZELvhooskkb",
  "key9": "4wtvh5GP5zGR997zkHqhSYKcvRHJEMpRUHex2Vb3DvDkYj1HSgnNScvTepdjGqimtXmBYX4gYis27jfDHynnHNPx",
  "key10": "4VQaYBtiZXhs9YpvfhEZ995SEdcNnE1rq3Nu7H94wDhs6wFeax4bo7ADsKaQb8x1qyEMEmxqojZmoM3hUEuhPSUm",
  "key11": "2DiWMqQfgbzudcmF44SscXX5knkg2LLPbew6aun7CrGtqRFiUAUsjy7mWQDsJb2XGKXhruipjUGx2TDRQEXiLQVD",
  "key12": "59wKN96q3e9PHfrxASzhp6BcxKo3JR6KA2DKjW3AEL734pjXHL3ouRLGYYifpxQQxYceztDFakAyJy4eRFJGDgYw",
  "key13": "3Ggmaiq7aaR7Zbd2BwJKX56nNvZy1kFMTFMEnFyq6cpFywZpoPRRu8f8sKormTxFah2XoPGuMx4KbeGnibs2sZFw",
  "key14": "zJknGLCYahYcz1ZbuUdG7dcjWA4QRKWA3FrmS4ofHsm1JcKsB4XGoEBPE2QxnxH9QwZZfWNcVPp5nAWGgMxMi8Q",
  "key15": "5C4cYyFdeCRc5iPk85VKHpcDS8A3uoxmriPcXWS3PZdQeZanMj6t4jiY1h7WbWXv6iAJKM4NqMgktW2uLyjLBWS2",
  "key16": "5xiNMbGgrCqkvC26Ar3vKvUF8Wm5iogFS79LyB8P4iRu8XLZBrigh23wfGLwFb27SHva98Cg7KRZUtEdM88Hgwih",
  "key17": "5sakmw61524kE1F6QwJWB3r4BNzix51u7kANt7vhPkMovRCxkfaiCjkYD26YPxT4FjtJUunEtJpHXQuW7pXyEpjc",
  "key18": "dy7jLysf71mTmmijfQkVQY3QtcTtuhbWwHWfUmzdDtsmo2xPtmWeZ5iKXHRsgTdeEYRh5chPFzvn3TpJFkxa4az",
  "key19": "3JUV5TLANWmmEyex6SsnXt2RXwdgt5hLgB5UDwJRbeBzVbVf74sWhjwtFSXLzAXsAxYgSUNzCYxADfCtnysUsUq8",
  "key20": "2CjLoXLh6jgQ6obUXTMUByNVUUcTrqjPtj7oUpkjz7i32jz5Jp8GA1tjnegw7co41r3Sj8AVoGdE1HXbzXruQYom",
  "key21": "46S3o2JS4JYvbi4Eu6LWKwwQQ2x8KypqNQjbWDRzWnFCfFxk3awhyMARcTWYKpbjAyb4CfTVtPL6n3QuqWwr1d7a",
  "key22": "4YkpZ6pcUUJTvrsK7gToWVp4oxRiNv19aCYz1oFhJrrwTFKMMqNiWqTHLDppAZNFjE7mRmSNR822t8gj4XrXFZkw",
  "key23": "3x1wqqgfW8tkNCyAbQRc35FZDxS9HNUtB7A3LvmULo6zFChXvRkWinQy1rviu5dMgMknwCVmMG7VwiuTnS4Pte81",
  "key24": "2ZawindZUtDHiMTxc5CfeGLrRkESQ8UkdgvexU2Q978QW1GGFnBo1KEMrYXyCCGL7WL8f4c7DK8eqKt9a74qWsFD",
  "key25": "gRzy5d8y2hDajBdPC1iKcX764kQh546zjRLqCkpLgdeQAwfEJWVDMMPtu2u2ufJeRo649ePp4RUwSa7njEJZdja",
  "key26": "5XkrPvbLPUa1TmtU39RnXU1BkBszbQ6cKMSza8rS6PJswbn7yaCmMNyNznJZx7RgNKRa1wft65ZqPvzQ6VdhXHnP",
  "key27": "4z94BbrVsun1zPGJCW8oXuappTCuGKND5XDMV7LvtmygocZs8K788qN9E8Gb7bzo3aTdk9AKuVm93xes7srpVCzV",
  "key28": "VKg5ojqG6SXo64PgTiZWp2aw3wqwuk4AeimCcvzyxXisSH2ji3VcZ6iudYMxcybudfrJtSzhdhMQ9CuVYZZCA23",
  "key29": "4RKxaKDm3xXG46DWfLUauGERLnxwMZTwM9bX3RmrFK2iiuJtg5P6KmHrJuXuBsAcAEYTEriBHUj7G4N7z9mmCqUp",
  "key30": "4pMKCRYB7ehbgJ3drv5EjCjVu6yy6En6ccKU8PHmGSZq1CfGPVaxJCjyL6ZScDgrJrFv7B5pG9NjjbvocQJLKLwo"
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
