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
    "2mZRk2y4fsDzWPp1TDRsPBUeS5UsNzPeA1Uu4nJWHtce3QVa8YiMEeAauhGimRU21S4LZp4xiFoJb1fkJfwV7BEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pLuniDAfrzYA5ispWUSmUKUbRzmq18UBDpRYJue4VssyXVjYVExxhJktz5wVE2EA76DPvVfugMdqC63QPx74j7",
  "key1": "2XdC9MaTY3LMetet9YdtXMw5toNPjMoBi7XjtAbYwQ76pQ3pTSJjfYKLvim3mmaG2Gv4xByAjX1yYbymPF2pQ1Uu",
  "key2": "2GE6HVAvAJ9YSwHqZNQ38WudvPMUcJa5GSLGxUkun6J7Ka8BkvMz2Z8r5BgjWohSC5KrnyMFRmP7DLnDpWMr86tg",
  "key3": "3nucbgkN5PTTRQicoxi8FC6XnYrLgfJDuzmQcjVbnFwmhBJPRrXvFQsyYogRiT8que8EokKcR97DRHg1Wve4rYpk",
  "key4": "5rJ9XnEgA2UnCFWHtu2DVtp6NuKJcYYmzgTMiWKpmZiaXkM7s6VFj1Rqb1kT82kukr7wRhakd6pPKobCsm3hTFhd",
  "key5": "jtfAnyWqKjSpxGVtUZgUyaoA7NoNHaDXZrLyWdR4scopie1zpu63j8wpL9n48zH1yM83SXiNCyHQX3xjWfDeLSp",
  "key6": "3v7hbUqAtjutoWtu89yjSTn8qQ72H8jvf6MZJcpJsMp96BYyuueR95NUBs4NtqoRMJfkzSnrTPi17JwwSioQVD1M",
  "key7": "5pLx7oxHuc2N6QpJ4FtUkNS2xnszzJpVZACQXPGRCVvph7Jp1jLdJgZyNFid88UJX97N7GMRMJwpvxih91UHmpbP",
  "key8": "5DmcRrak7VXbuw6XrLQcZ6cwvN5KWkrHnKJUr5jFjs9RM12JVYrRSNDsQ3rY276ebWLMounH5XU2YTeKZitmqufC",
  "key9": "28ij5HLdv1QS5wBdgqm2VUAuG35jBZVez3MH9L7qUMCEHmJ8ne9oJFxJC4qpMftB7XSU2HGouoYq6raFKyyBizzp",
  "key10": "NgqyBhaaKWYjkdMLV5Zozmy5rbSBAWksYEXz4SoQ5KqpxnpqjVfo5rkVZxgkKRJFHNDH1kSx1TQJJZNDXWb4XgL",
  "key11": "5Ns7b7BcN7So76Ac3QdXnoJCkyidcFnDHCWRHJiFpwbLAAinDnczFfhJ8xrxA4p3CsrYmRBEu2XzhWZ5Q5ueUi6G",
  "key12": "3G5PUNuP6JNgdfPmoLx1nBEAb1e9eX4dqsWmnPisfcPSae6RpdgSo2WhYRAS6bsLv4HzJo5BaXTj78AwNAfg95VB",
  "key13": "4TJs8RpFETzA7ggvtaZxwSSwiDi2MRzzedm4mhR7k1EsmGA7GUyXvj2ZvFLtYn8atAyDx6wbEsofEJThAkQCsxYP",
  "key14": "U2gwzPURYDZTo74v94vhugfrMosjH6GYVybYNJ1m4W9S2RL5DcuXp8bEzQki6xtLpkHjLiDXDCG54G15gXREdRJ",
  "key15": "EongMva137WpinbiaHjAWHuvc877HpRXceovu6VFLgrgMxVzsbkeseRxNMvoJ7x863R4V2a7RGWcqiS3KT9E5A3",
  "key16": "3q4uBudMTL6TJ32pyV9mSyk1S9NmcQSLqmvoeBJCzA61ivpqGDHR8dJg4dQWKLRzHYtQhNGuKaPHixVAcesLf8dN",
  "key17": "518BfP6NGhkjdSL6tKNTygpBbnLn8vfyUDKdx1FdXfshw32bzxGP6nNve5G7H9cSLf58WNoTvYW59gE1so5QKLqD",
  "key18": "54SVz9d7V9vtVhBQFimCmbrju71F5cZxvmLPeCMEAjXzfH7KxuazAvyKNHirzgJ6V9oc3WVqTnLomkTB5D97Yzit",
  "key19": "126vxDM74ripbdxvZGxo71dHmDZ7EJRz83tbt5u61FuMvRiqJSrUoHU6GmN4aRdU5c1gCCFxjqXdXYZgngH94on3",
  "key20": "66Qns6aHwh4wMxLRVkqCUMxgFvMTKNxo1BfsLzdRcYQphfhZVYshp9eQJcYz8rHsmGGD4jivaGB9fUy56zECPXKT",
  "key21": "4k8DuQwJF4vypNhNykNHZAFjh162TtxRoHhFLpSEho9VcLdynK1gMaG5DYCGFXfsFmhdDqeY9tEPtLBCnvHeR9ZF",
  "key22": "3CVfz9Fsg7Lp31xYt3KL3fXpFcBZQRdy5iaYSBM9YPFfduXXVz7WLBHYAD18A39CzfcEsDevzGXt7ZcvoMhi7VZt",
  "key23": "3LE88uMjCbNv4jkSZfG5jonVVct8hLSdJGwiq9TFrqAhnHQUvXQ4CK3bJQ3sfxRrPPbWs9PrdKMbwSLRxM5UapL5",
  "key24": "Fe56vZ58zXm7y8Wt5josWY9CqAfiajnBu87BYS8dbFY35n3qXP19nCGmwRGha1NaQkCFbSne8AZhEi9uLmDm86y",
  "key25": "4eaL5ZUdqLfuELVoEVzZhHnn7CYyRC3DXWABDpPDG3Hp5ecTvgD4p3LRpG3jKq8hDBkBKmTRWBS5EpeHGmid4ero"
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
