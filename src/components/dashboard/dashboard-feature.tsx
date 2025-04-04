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
    "4N9oiy8N98QUymECq8fit9n9gbkG2jAToPMqtJB5En9fEijrbqYSqksrBnU4FPkf2D6w7XCoJRvCFtPARQ8x8Wme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ci46KHibURrBi5aVPqLWikVhrE4N8jTHAcnAsjSQEZLhu4hb3BUntXov4tSrwiEmvF1CWNPapJmdEAhj2H2YQfF",
  "key1": "3hqYLFLjGFFcFquKvxkfURGRk7cLyu8ueV3BDU8gBB6p3W7kRAyZ4SyJeo7WRaZXyte3mdd44TNYQ3sTw289eN49",
  "key2": "5AnqKFAmrKFkw1okUp4dVw4Xoo7z1KdrMUnz9VC6wkY9zvt1PVJD6c5Wgv3VsrMAmdGUWqTcCDpxJ6phLDi8B9dv",
  "key3": "4p5mttvcm6qoJSNNd6KGZBVkWMgfpmyokD5ron54SsPr9YxTUaoEjtRt6Xs3gAwzghfRCABRU1Bk2sH7mrQk2b84",
  "key4": "3WmH7is5jKhZpwbu5yAC3NTG2Ku4zhzYZUxmT39RcXVAtenP2LDAd58jvo82DEDMnw7WggekGzSA9xm7abEHqrzM",
  "key5": "gL1XtJWjRGd4EVq6z8BWTJfZFPJyyAfoHCeWjXDnxv4XtMw7CHuwxsFaPydnUJ4HkuSnEGV5vWWpLqgHgq5RiaU",
  "key6": "5ze32mG1pVvYp5GQ4WjN3zBH22eF9xzc3NarHRkXrwozvJhhor7QyVmZjKSh2Xxqk4yYooknteJaNVXueRu9pEY3",
  "key7": "2PhRHzaeZppT329wty2xJQSjpKvTVmL3gYuKb7WyfXVLE7ANYe5h9q6ncGYV1p6vGRKZgywmhoccqfPnx1Z5aNDn",
  "key8": "yrWxpNXsuGa1ACC9ux98HU3ULoteKvZSoUFLgqzARZZ1CBTRMD66D2opi4onxfrWrgkHbEsUdc5pViGE51Mu5jf",
  "key9": "3EYjqxa92gRfXNpw4XSjfPcUebVKot8b8XXVBjX64WpQGyr3GoRtmYFxJ3EASD9SKErfbkrT9TKSzPACKEWmXVae",
  "key10": "3CaKdKEp19QAycSMbcZhTSkySMpYw1kYLPddnPXsRY3uG6xUnsLP9vxHhXrmtzP9Nrgy1dyeDoEZcCSCYMyKq9FF",
  "key11": "34Lzjg5GQEE4sx7T9JtKnPaSeU5FFRr72puJd9n1eDHMVDcFKQK6nKT5ujJZfJHDDwZwgzqXFmYUNnmL1zjVCcpX",
  "key12": "4fH2HZXTrEEiR8P1HqUXAb2sDBPKGaXhwTVvrAFhXmf3D7JUgcTG88YAq9wAS2p91JURsA9rV7YZokFVWUENy6m9",
  "key13": "4b44vcJMAzgKzH9f5cWW47qS9XJS8X6kKiW8oc5RLxEMKajJPVhuQZ5Z6HCHnW86enhcYuNfYvP4fet5aQxHcfrT",
  "key14": "Q5BijdUNW5wH5MeGewULYCMHdnTqsFfpXmaac7ggz4yfw9RMNGeqnVE1ognq3oGXdiYA4VRxKL6G7HmGThPvpPS",
  "key15": "2KszDkYUuKTEQZ6LGjzUwS2HmTv2qkEtuwFPWzpeXdPTSfiU5vhG71xoj2sBW7KZzM6Mv84mZPrHd1gYH5jDJ43K",
  "key16": "BHMHWHKVmo21kCiCygVXx44pj1zKJBgW8wBg6Cmiag5zSAL9s3sFP8PC6YAVYSi8XRzn27UXVFrryLv772tSf7W",
  "key17": "59nkei5EmRidoHELtoRf5FmYzkJG4yDeJLvckXxChGADm2B1HuRWMVeKv7Bddw9jp2TffLnwKgs2F3fTiQo3ieg4",
  "key18": "4vAiRBcQfe72B12KruA9s3zjHFbpHHKx2Zw3bsdo9rbq8W5qm6DFtkwPQ9huu3Y65ChYJ9NC62ekVFkBP4ubrPpp",
  "key19": "2bCqQCCJpvq8En3G37VcEQFoGwwmv78wtL1TGsyDZeWN4ByX4JLmKzeMighbRcF7zznW77wBe3rxA1vnjjeZQ1f7",
  "key20": "2S54ZTYesjDg9YQXQmNwrfQ3oagECqFhZacmoWNiuLZaeVmHtzRaQMADvwaakGrZudJk5taMuNhwoyRmb5wxc5qn",
  "key21": "5ZgddZo4V5yojnDfRPrRKw633VtfaKwCxXahA2KzmyfvWtmzYSx6Xmm4oby23mctC7h5qj6WEunxYz1c4JATvQEa",
  "key22": "22EDjhHK5sEfeaE9RTz2QZijrCM93zim4rNW1fk86d1SBqRxgtgXHoi9h9F5J7wAiXNmDDRPYv9EKwJxrTzQW4te",
  "key23": "2Ly8drf5hqtLbBxvnaHpYTG9HzqeeT7a1Prt7NBGsssj1Z7iKs58wtTtaBSX1PVL5km5gYA8ESNU9MtpcUC6yH5k",
  "key24": "2PnA46gYqRqWtm8tDpmqbnSWbXanPDaTeiFHZto1aVhACYdZvZdyHKeUrmn5L1CMYirZXuzGXCYNRCUD6MLCYkTN",
  "key25": "4tcFD8b2oqNVzrEfyTcyeYVnkJrLgDKTFN8WtUgsHh3MqPH8dLts5GYrk3pFjyr8vDjhu49tEQjGiGqz27AS52bf",
  "key26": "TENah38YHm8YamC5qv3EshdqRdbZaDfhr8hwQqrcB5LRb8tfP6vMBxMeBxJcrrGMPPq9eVjazzRrg2mxqGzcsrm",
  "key27": "2D7qAbjGvB1V1mcpoRfwKKv8aNMYrL1FwuEtoz5JbBGdQ9BpzeRCqTPq3DJ71cxWLdT1eFrx5WRj1SmAoqSwvbt6"
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
