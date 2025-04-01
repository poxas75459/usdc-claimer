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
    "cDF93zdCj1ubsrP9EJGgUWbAZk7MCdjUyKFMMc7aVV7cLEz9w4BQKTyThGAGHvqEybPwh3iJWwCGU7PQrGTCEz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yY7me5N3q9fRonW7gssLcEHWFxhKjDPkhdoaQYiYS77Wf1Amad2aA2FNhW579CFfX5KGAuQVkPe5SpuXntoqpYW",
  "key1": "2hBG4MQkCbvAiNxZDLgxZVP1S4swZ1ADJgCyx82oB2ocxhFmNUScZeNZuojnkk3LsxLYj93obEBYbSR8X1GRijMD",
  "key2": "2PFqaqcMVqyZw13LxMHthyA7QMdmULsVkKnSk4njjGh1j1YRY784zfwRqBsXZFNrhy7DtXWKJYnix4Lafq4oDGVf",
  "key3": "4WwCWjPMraTm6mysjCjX8NbKqqj3SCsHPXKCqse3PGov8mcWvnL7suDTSLA786PyhLnYs16WuQycfbSZPZtzq5Y3",
  "key4": "5QcqdJJHxzduxCfKMhdGkhteL1k6E9LXBQ4S3FztTHndhwAJtXej3iS4TXSviRTW3QBJ8QYuJHX8crvZwBCfvSBu",
  "key5": "4vySSP7LFkVdL8igb1x9J42nLk4RCbcKTesMdoM5R8BHUN63VEySGwEsRdvYEyA7aEmqaWeBdff6ZJbZ5bav72N2",
  "key6": "3YrSVtb5FqUDCB2YBwVEATMi79EBQ1jD6BjW5RFXxJcp1KzkxujXrjxdbezWF5S4zBZ95HGg3dq8o7jCrgUyD1pg",
  "key7": "q6gZM6gDgVyL2kTTkNH8wiKzR529VyCPZqCTY2hUeYe3wDDJ343dJkj8wEVohWAUQVgPivUDorNAsGuDgFqpRZo",
  "key8": "3kdzb3MAZWqFdVJCKWiLontrhwowHV7kzC5PzXBawygjUjRpujYAxsY4YRMjxZERMiZTg2m6wYnGDMFm33ER26hs",
  "key9": "2XBSBB6HmDdnqooHxpMmBCzeYtvkiG78g9c3piUQCukg5XPCoweehrmENNKospwzxU6E78aR8DHzH776TZG5bawP",
  "key10": "3J6JjJFGnUh9AB5R2Mz29tB9L5xEQvnwhFym76AQCBcaH93CqD62pyFbvFCkY5AiK48fmjhxTCr5GdMzWgGA2d1E",
  "key11": "PDNNWLpDR4YWv1EBjji6tfh4systRNTox7racpZC8kkUahNCENp6xn5vA1ysC5aY9BLmsE4GUfNvG1RCA5xkXyH",
  "key12": "4moFHdJHb9xWwsj39TFiQxdDwWoKVaJThg77MS4BnPQFiiNVHhTkbcuLDw9FtVCvTVhJL5beCnryfQh1QNfHNL2m",
  "key13": "5ReG6ugTZUppuXmxtg3xkz3uLMhFM1sXcz5cs3KKQNbocdxThM3Tj1T8VhshiscYS6sEXi67DzTBvNGDPpNnfVnh",
  "key14": "3KvVGraptQveCuQqvdrp2un9W5vbkiDh2hDSjnug8DrdWfHnmFJNEcVKjgW1dsyYDFPytRsGSAt5TSNBqLHiWHz6",
  "key15": "5fs6wm9BzEBh6B4V4HugfiuCWLiTtJzEeBUprLxaWZC99gva6JgjjB7fL3rZqK2YG9zb4uxzk9i8PXQxHckJPCRK",
  "key16": "5BzUaxW6SAVGTwBWpgVJiNod7tTbiGb9g7H6KJ3hMDJiDxpHuhw2F7MVyfQpEk3ULvKiEwStoLCqteb8tUshzmtL",
  "key17": "rk7nPuiPFjz8fKkTGtSPRpSPxmSYdK3AoHHcLQdRQ9VAxUUwjoKWDLtJHvFXjpsiEpjUZ6HjixP8LkuSj4ENaEH",
  "key18": "FMG933xNb91a5Dxs5jm4TXVnmVUdgiXiV9cX9gLtQ9oowXz8JH7Bya8Gd7jAdV1dZPTNKha4yQxuoSTTwAkjAyJ",
  "key19": "44H9enVvQ82UbmpS2E6yTAsdWcpMRQXxcsA1nTFoKajizwNbRWdeVMwkrhQqBHFwGT5A62uaupx1jVikNx7W7iMw",
  "key20": "LYBT7PsnS9HuqxcKzaaKTVPkQjsRJXvsxz13Cf2b5y1FtM2aQBfV6KX2ptmStETbjSU598RAgKLGmR33WLz4qsz",
  "key21": "4PxbSAamra2eM2F7dLJK7kAE8Dqsp57QuLLKxHHnoYHNJgqFKny2FmTeHUFNqyTqv9i4M6kYeWHCEdhRqeFTtrsr",
  "key22": "23WJkjyvYLNfaMFFXzt5j9ABSUEHzrghCTKdNRaaxkAPqfVpQt4wtvnschzDZ6Ea9FRwAfoAGYU68XHC8r6hF2yf",
  "key23": "64WBUf3WyQVMs5DCnq4Hs5jfZcqni3gr6NQ6g2XiWozyqhoCZ8aBKufyL9ZNzMQjZxtggDkcx26dRc16MGJeyW5R",
  "key24": "61B8za3DeeU52cNEdWWTrYJt83KcQWPCCDjw1tKrCuFYQvBq5HkLDaL6ChZ1S2mQVeCU1684ZtGiGSVSzu4AMVWX"
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
