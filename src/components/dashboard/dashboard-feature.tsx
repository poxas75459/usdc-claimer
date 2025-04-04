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
    "2EgQW9s8fLCeYTyzbszFDUvd2oh4RLnvAoh5XvfhdvTy5CuDYWfgTQe6KRcUAY51SVi2RaGCFYLAKN38Gt5nkd8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HH1Zi9SjpXv4LWCDiD4ikgfuX1rt93cfqC6UMDQpMLRh9Dr3gBL7LxBm3L235QzJ84AqY197R834nHfFR1TXK6A",
  "key1": "3jhoNP6LWxBjg8MCSiSac7zYZ6TrXhDDLpv2jjdEbLBLZqXLCJBtthvPxYBF4b1cXUMQkYDY97n43xdfLV9scLT9",
  "key2": "4pYvJ4XaLEBCiZgF9RQDf49Uc6LC2a24WagqV126zjuLax7qoZSoSZXxfiwrSH4XFND9L5hTVi6t1Uw4DNRy7auf",
  "key3": "3QRSSsRbWNrh7SNxLeoZtKgQqSKHrMjkxumw8CumbjDe7wVmiwtN3uMb2cpM5ekqEauoRDLdTF3Exm9gufz2LPZr",
  "key4": "4H4g2ckBhKXyweSU9eBYkQP593ez7VYpR5BbSCLXrcvTyteKU2MCeLnW7vEsxgAVaNfQGc1bA7bt6QwzqPMg5gjQ",
  "key5": "4sLCy6J8oEVVmGE3CmyYJ81QHK8RF9h5UzGhPhMeBdgG9vMXmCT1GgvAg45nM6fh8piyqTVCHL1hmAG4dGcxkg7T",
  "key6": "4w9x51Q2nQkEKzQoMQAwceNb6CUQGc4m3bQ7mMJDCmie2ZrxWSAQ2dKQJjtnJTbZBx7G9U3ws8AhonCD4NHtZ6dW",
  "key7": "5jDd3nRrSpaqKR9gifsNuwhufix6Kgs5S5Wa8DbgVGK8swzN4ynx6FKXP8XryYzfX7c6ne4PijRubGFhHnq7ZZFr",
  "key8": "3rcS6n2JM446StDK8uhL4TnwWSdtiEXUGVHrzW5jLDm7N3dMejiPhwS5vB9JCkH5h2ZphqgSujirZoRMopny76Pb",
  "key9": "2QeH1ppDfQH2LGM6hBE6nZjqbf6McTFe5t5y9qUkMWTbrYx9wJcvDAojKfnqBh4xrGQYXSZqGmtTPMVPFLzGbdVR",
  "key10": "4ww9efxyKoSiUwmsPJFkMtrVJBPEbMSMFjYjy3gCSUaciDihqouQNW53STN4iXcnQFfpMZKeEZAXJGBUeriUHXAs",
  "key11": "4UjFCXsE2yWnMydnbfqS7CMhgGDdVBoN58GszyVjf58RYC95oywgTNZsqrPk5iaTdwDxapM7tkZEMPLw5Di4GFne",
  "key12": "4JKXDZKoT8yEXF3pVdNs8FyVwDTuXkXGfeqW38TAmuEvnSaPhz8yC4w3CqR3sfeTsCxMtwGQ6XuM535zvPnCCQLh",
  "key13": "4MYib6ukVpbztnAZZmGGe96CBQ9ET4NtYhaYXYG8LSYQ5bVbUzDR3vPbHbHEH3AyYWv1Ddny3uwXEBFJKTUGt7fz",
  "key14": "4sXYQMu7h1Vd9bYzaf9LuS4ErMfSYGFMvJ3t9HxX689Qug35bZEtr5BWhwCi25QaEqtgWdBo1wvTPREwcuj7rgDD",
  "key15": "2sHquMmwD66NPpT384iWZ5d135P74fWGgKQLbQyT9by8wwTJsUWCpkGZLvnAL6YpTJEyFGuPkAo7mrK1jMGhf88T",
  "key16": "2n9ohusrmPcXB6UrM77A3rkN5V288bmATT1u28Q2dQixisqu5BhbxDUu2tHchAzaX5vDWXXFFAidKiTTmvbHPtma",
  "key17": "KhLB4bVqRkmBnVeSCPR7qLM8iFogSuZzawLM9mfbPf2sKbuvprbH3bQukNjVuoBb8biJdpDoz6E2DbcRPhUb4n4",
  "key18": "hn1qMyZjB1HEbYC9phUUEvFtmyysmGTVS28qbGuk449V8Ph4ztEYPNp45yF78W1qPU2gQpRV3xSthaApky3TDco",
  "key19": "b91b1cSbRQ3LU6vnJPC7wNW6EPmHdVpj1HjGzDS3PLSRD4ToHaKx4Y4Aq6RCP2jnctxPLUM1hbwUjffkQNFqDtC",
  "key20": "4Hv6Luv4n6uz5ELkeksjSWpn1RAML3VZ8ZNFARJNsSbCcrVjRhhZGRxVbHvokTo28NunhezmTCRnmukxLGjL58L5",
  "key21": "2xknYJzzpfAb1aMVvP7Ptwsk5H9B6un1hFdZxyUNbJjehGrLUxDSm6EJShDE3Tp2XZqGxknH8odqw92dpU44ZdkR",
  "key22": "3fhK4sUAWBDzxCwJZSVZsZs62kknDbA27nXxkXkqv3yD4zLvJnjtEJKbQFhSo6J5ETWrAaJws5LFUWT6EW5BZVHR",
  "key23": "5LEKe6pb7uuPHyTKgapD2kfakXjSB8Z4a64fuq2pkFfYYYuJtxHVVg3WSzMSG9BzZEfvArXjVde6NxL4SX63MYvH",
  "key24": "4NAjENt6FGpwas1GCXTnSYoynJdUHfMduVePPR8ZvqdXNpKUh5eyrdoru5WuYxfSvbMqL3vXfxYMFKFEGbtbGZax",
  "key25": "5nLeqzpDP2BW6RQrUZf2G27Qqoo3rtfsEgRYCk93qK9jqXzhDc9854te95LbxWCAjR1kgEdsRqFdvUgPr2yiRK99"
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
