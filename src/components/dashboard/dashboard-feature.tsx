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
    "3Rbenp7sSnZTk1u2SFLvfUx9gNvSZ7j5BBnVUPehpFgJ3B9mEYtmRH2p1XPkEEctMa6PtkSzAQWpWmHRyrjRc5g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ut7yX4fhGfbYfsrnYMBawcA3NUhvTWX1w8dcbUxD97LhCwabEEeDt2eQpmWbFmJBdjfyre9n4QqHqkUa8P27Cgm",
  "key1": "3QXwe7Dbb4pV8hwRVKvM9aMpcMbStYJg672NzkCRpiD9vgC8wBwKjXi4xW2FA4t8KTTkeUTyUb7nqaniTfdVmQ7q",
  "key2": "9nXNt7fxs6yD2PTd88bYVQdSMYCJwZyneZShXFWa1aM5D4tiqcCgXwub1Ta2NGS9a5QKNjKTA8732gaXmsHmjfN",
  "key3": "VGDBTxBC9pt8DcJvXhtrUN57bQw6gc89GbB6TMxPRUK9XhEcEJKCf7HHf25dDUAG6JbExBThucYzSc9Ts7Ks36G",
  "key4": "4qL5VkTW6xBR1TdbGmBwW1gzrRzyrQGBE1Qe2bcKjVFYVRUyKwvho3fHcpNZ2n4Y1tDQHpvHoaEKikZyo4hpSL6K",
  "key5": "3AvNm8qt38TM6V8suZYQXL1Z87UJViswDmya6Z6cscarXrY1WzCAsfC7m9XQZiru8NdChdGd49cB9JpuANkYh17Q",
  "key6": "6Jq2KbVzx9q5wvnFuLhLMAFJ7MJe68KntWwpDSdwxUUs8cbXdsT1C1YNWpt8omXMx4mnhjz2tMVXpLf2dao7Egf",
  "key7": "3cFX49DMo9SUQoWTuR2MmEcSttECDAsJTbRmC4zP4Kzjm5EEJk76WAtR7WCJ6FPhv7Z5jbWn3CoCCy1yAjmxxZja",
  "key8": "4CgSipHqRwasUcgT2a3nBA1X1tHL4VyYporJFxtp9Z1wVErecDko1z7vprY2GU8LktcoKLuanNzpwJpYRYwpSGqR",
  "key9": "5pjTuq27MukmdLZ6a3KXSCW87UdQG62wAwxM5dfXR6ouEszjpyfbAZwBwswqzi6vkR9xc78SWHTv7xRUid67LKWX",
  "key10": "3frrAgTe2SGgAbtc2pkMKZwtzNFzRD817E5S3ww9iWWsvnvkjaWtKaYrtWVS5HUF3SzkFY9RiVX1TjHqTD772Udb",
  "key11": "358mHzFEdvRAfoVfb3Zjxvm4jtFCpBVbEy9sp78XB6ze2QoRCd2EASQyq4kvgVkUVnTqHS744oVAAFr7YCa1Y1gF",
  "key12": "4BgbYSFvVPuEMwy89tNei8MVJaVwY6n6eoMArbygreA82rCLpGVVZCTSvGsmoKt4mZpt3S66nCjb9Fwh9DcWb1mi",
  "key13": "2jHkw7W6eqshUxw9DHs2U9CLEvq2b8fnSP6yDmhQvvWoqRDk9Fmf33cN1VuLQHzA2iU4fAMiNqBZJ1qWPQnd5vtj",
  "key14": "4uqwWtHodhC8d3H9qV22Nonw5eyV1GXhtU4bJ2LguxYdZ2AAFotJsJkwfYkzBxKP6zHHvWS7JcsGiq4GAEd2fSQJ",
  "key15": "nsMrKBbErbASf5m8mxrAG727iccWbo2qSLSaCY1TUzHCzwSQHw8UrAtvSRYZL2T7U1QPM8PKK7Ao5bNRYDWmbt1",
  "key16": "4aVQVX7dRqNeT3yRB2XjeFyAoi9hFDQdabMmW89qtJqsGKLXB6N3UJUspUDCnx3LGA5EEk6qMKKcSJJVWcU5bzU7",
  "key17": "3EK2uVLQtfwxuhNpRscLk8sgHTZibWXu7yNPeG4qvWHDHnNWx7wkkrpYWcvxdfTGZTxWpDagchwboyLbDuCZJ2mn",
  "key18": "37w8WFw7zqK4VzbwiRWhV4jQasdkfbCENTWMwnRz1jNAuqozSijBhAQeuckcqwrs57zCJ68B5KESvD96cZCWNuQs",
  "key19": "2DqwEsGizxCJGgM7toC3aFkoYidPQ1edfxYXsdt7ZEzfT4F1dyJKXS7m7dp5e1VseGEba81HATb5mJ5txYJnnbfF",
  "key20": "4ePVFuSBisyC8V5rYqh1JA48wqh1WQYfx17QyX3PiFGgWdDndFGpS5unRccPjSo1vyHt4p24r1inazrLFwamTgRT",
  "key21": "3kYjjm65WrgSknNkDQFaziJ5nDXn6LNKxXXAobbTnSpCMNJiyvwRBDGxk1oEwtHxvSS4ugzxBcYRWRbxgFstr5JQ",
  "key22": "2aEUabNNxyFt8sh36Pm7y88z3vFvNLAt3XRFjMAajp4nnQQDHZ813FgCXy2KAUMVzSmVLEhxChGSEPkcuBuoyqSa",
  "key23": "uEt2A3LmMnhHZrn5PD1wJDacytsrZWVk4E7FwFEMyKLo9dxe5jKJZSQbRJ6r6NRU7y92jNqZhpGQv99YkwV8gcL",
  "key24": "3DDEWmHA8Khk92JiqH1hEdeNs8f7gPjeNBYKtbQf59jyasZuUUNAW8w28XHJpNc2DhjM2AeeJkLwmp1XKu1Yd5mT",
  "key25": "4VBeq85cDkxwakpsZe4bknMrn9PDcPNNP1mYQ4zQJuwL1Jox5gtGDur7Rt2VAJNbKKVk2QXrSH4AReZe88xRWTrV"
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
