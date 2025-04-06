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
    "48ewpRQGXXnTnjEvS12cyDyPG3Rt5whJexAaZz82S1nP9wE8M3yvgXi8z8ote5mc88UN4wCUNC8dnTLDSN8VMcXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dThEjDH4mqy4QTqKxmoExYCL1DAui3F9BFV2mDrj1r6YchBhiK4HFuF9Jj18EtY88kByhqdZF6gX3D1mp8vnbLE",
  "key1": "3pSYzwkdNDSxJRLHnQWb12ZLXwJHUS2G5VVnHMjKbratWHehhJEJ1mziCeBgtAYMKw6acF1n6q5y92Uq39LsU3vo",
  "key2": "61nuAnjkej9oBxcJD3NEYxdaaujJQ3CMeG6impTo4Pxz7QbuAWfgMTNMsyYp2zovB1SvJmZ2ZoWx1LGKBeVaV3Nt",
  "key3": "34A9DC66kALTGyN8h4C6eauRXVxbbxwfDjuCPzPrBVggkiwE3iN9tLogugkF9Ncdeyuj95rQVMg7fCd1iUhxRtLM",
  "key4": "2Mi6EjefuJAjW1SG59Wrv5e68J5XABgtph2S33L1d3or8Hk99Nt6PYqXgNhkfUTPRCtb7qhNqoKzvAMPxntgsH9w",
  "key5": "4mnXXba6TTXcxiVmtyu1ntRjqvjVTLbnTQ5rqsp2aGYt74DVQr5Qd7YBmGS7NfyWyFC6pxX1xUZSupEqhschnx77",
  "key6": "gPmAu9x1zdhnkLLTgknAxc8c7VpzAUeLjMCHaKxcKPJXPAND11einDCPR8TncdrpMzBD1zZgJfyyHKD3SRnn7tf",
  "key7": "51LpWBzKirnK9jcy7gmpxyJQFLTAdHgiavFroJNDmDC54i2fa3J44YxN7edytUBCZgWk9beo6h169TyJ2BvGy5Bx",
  "key8": "2Q6XjjnCEKzNazmLrXoEBB3tTL6L35ty5K1Jfx5HjbksymU3MdNsVGGTn7RvuCsFWMS9FQegtQWNGGMjgb748aSb",
  "key9": "4ottoT3o6Xqnn6akK8r7WULxuUVXfhujCYExGifEMBoMAuLCR4hVF9hG24Rcgjie3QdXK7x4SQEwjcYzfrqXAZgG",
  "key10": "iZYgF4HvtdjzGXzWUbqtgLvKpyqP8LPWJA7bck5kuWnMBiT3pr9v5oQ32TwGkNrMsgYJWdLJ4Jsgg3JByq6LE2v",
  "key11": "BybUbsVDnYzRx1uDKEVBH3u2ukzsved5VGnPVjzP5u17c3QY7LJC5PGRusQ9LiXCyxf6RR7DQQ63PBUhHfFfpWW",
  "key12": "Wnk9jDCtASV6xHhg938TUCuVGzXdQeLCtMPH2sbijmDSaT6EXHTq7yx5fnGJs9PqFCfKwwS1uygoZk8VvMBnvrJ",
  "key13": "r2XJ1TgBEqjJqvovUxdu2G3PqNUVZsDDyAj8YQwmbH4uKRRviNewkhkZBtpXKPcjgW8FkXSSuzZmQGsVx3XHQH2",
  "key14": "2Jp6EnKFQX2fizmwVhNmUbofaW1DQRwAqrmNiRfZBYC9h4XTnFN1s1hvVwYpF1RvBEnbfauv3zdjvPMc7xw1sfpZ",
  "key15": "3mFtet8PeesebXVjiBmCh3o3c2v67NBo4nQRb3vZXa4rp6gnQQWaKcZRNASX34FfPUGdz3D8P2nUYrBc7mnYHyxx",
  "key16": "42CoSCo8dcN7U5chdCYzvGgqy63eWeYeQzvoejtuLw1voTaUUK5er66pmEwLuEKsVDvQ9K3JtfWhLa1cjjGWyrgG",
  "key17": "2DwC6jt6zdTfUieFTuigj1o93F6y2RjhvJhKAXiZH1k4tRrWU1aMpBNC2BZkqxa6xwyMXCJc1JqqKWi5V8Ex7hdX",
  "key18": "4vBjHftPMVZ4GzDqEoUxSMJAuqWb8EM3p2ZcUDug3g3ebjyX3HUzsLDh7wK2msJHQWpf6Mom1WGhp9qZ3MebkddQ",
  "key19": "2vL64Fwf9sjhMbMKXASMDiC7LT53mmyaFCCLGNpYf33YNP1RbCCqn988UCvVNtc5fCAH6vCXbTjJPepXNPboouPw",
  "key20": "6tDEzbryAXzf6TftYi7fwd1f5H6PehTEDCzcJ4GGKEC97DFts2Lz9WCz9bepdjFnGdhWGBCs67NXpPG2AXQu9cp",
  "key21": "3yGfLSb1zQB4Hn68qjtCKh6MdG1UQFfCJL9doGMevrWmKydQL5WX8wX1S6oQhJ5vu1f45TMc1iwdiJbJayRtJd4N",
  "key22": "5v5CrsQ7gZiyogVjx3z9oUM5RNRkL4Jah8vridbrdLNghaQfcswSfkhRcZe6TCzYovyy3fxLzgRVxAUpdoZaoKTX",
  "key23": "5UjqKihRrPXBjkpRhUDGSYyrP8JzaCxymN8dUiyzKBbWdFXGDF4A8C1iRg38CzaoP6d7kEunNfNPsWgKCUW6m9pt",
  "key24": "qNMmEsQpzgLUnUR7NasvNKZLtA7kDtPxrwHHXoSjNHg7gtBxVtLnccFMGdzKoaK2AVGiSDGD5djdymQPq9Rfv1u",
  "key25": "3xVLE6E1gGSDyZSrs9hTaf9a91PPtVE5L6mVyCBGzLKX73BX7A6LSv7gxEDBi59ReqEER5fdg5U6LC3Q91LCT8XK",
  "key26": "hsbX3CEYziJzZkBcgeL3Bua4UFM3RXaqJ2W2d52PVygDpUmikyFHFAvk8kpWHVVLXvSuFczWioAqmzR94sJYoqV",
  "key27": "5yRxN7kE359kNctYUfeAsc2duWsnfHxycrRDWN4a5EU4djNok5VJX8t6kESWqsyym76ax2CKFMiC5Y3iJV148b2x",
  "key28": "5g5Aw9MXKR125LC7sK5RR8FKNuYdednYKALCDPgioPcRmuWsvZFntziL6YkoJjKWkTbg77iDcr7mKsGxQuyTEiQB"
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
