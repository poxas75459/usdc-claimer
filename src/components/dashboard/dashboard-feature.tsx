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
    "2DkUVTuw5EatXnnAszYU5KwmsuXZno7eBDEjtXvwmk73Z53MD1c2p3wcqovVwqq6K4S1gmQMp4wcycUzYUVVSP3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXV5PSvcQdGAQrYxjzpfJvvN2265BzkE7FctjEkqDWQq7eF1Me9t3KdBh2PiXBfjftjSgQQsm6CVMwip5XDGgLC",
  "key1": "3yuAKEPYwP7qxnqufGCf9CJCt58cqt2QJh7JjVjXVGgsfpD9aAM54M2FP9CAiASR3RkhxfXRPUKRLxYTBf8hHG9K",
  "key2": "4pNdvfT6emRi8Lu8r3nopSTGJ3GqbviGrfrjAMtFRSJwhoDQDx7Xdzcg4HdmvgXZG78HstVxrb99NSN55FqtGW46",
  "key3": "45UcXrvCMfJoVKjdQpZrbMneMi6XN9H7JYBKVBo82ni5W6XqoYDL8C2DxpCu2ysLXCGfXWVuJCHrMvpc47jBVSZ2",
  "key4": "5sMVZ8JzQphGvhbKgckFCC6guaDBSZRoKDGraAC5J7gC3rhvmYvtntPVv4uf89AdXhxifmg1Yto6tzoy6vY66Xkq",
  "key5": "4K9P24T7m9tFhGKm7VTzTRDVbgnZC7jtFAbX4eBmTPdUw9qJmtnmQE3NwELahQmqYk34YNXPWGvLnG63QR52g9sx",
  "key6": "4TgvJhQm7sqHJ3kY2TNkxrvAAsavSy3foRnGnSQvHmXUSRu9wAv9MpFNsg1D6ms5SAaW6Vs6N9A31MrcwgDCMkR6",
  "key7": "5h6GVNdoJUweAthSjmYW4E5fWQ9Rz8j4M8gfgiEq8TPMkKePecQwFPvXvSaLXNtExjUJmvWFPAB9qRqs1ndmkZSj",
  "key8": "2twXAyVrYXSpz8moggdGcRX3rFPgzjSi7MVDDt5Ed39WmcVfXpwMfmcS8S1NXK8Sh5Cx1t6TTYh1KsRxkjZFPDYp",
  "key9": "59Si15eNk3kwpDNzQ95Qs6vs9rGkkVTovQdnr7zKJrUuSmJEoZPiA2n2YuVZxdYVPA2HHdg38McTyx5WKfxwoB6w",
  "key10": "5Ft5tQtbKJ9qB6TVGApP17sfyEJuHEvEepj4U3EyWc4HsW6puh8VMPa6XpRsxuQHRAYjine7ybCWQF1EYy3TnpM2",
  "key11": "5hGLdNtCWyRshJDK3B7v2s5QEgGfNZAkMsHPqbqf7TKbJzRPgFSHXDdmJpZygzWVaiF4pcj21ZF9SJCQmJKchQLN",
  "key12": "4ro8oU5mLA98Bkc97yRMwStkn59DtnNQr8kM6HAKozLs58LrdPtdrne1RfZQ32CMdzjiigXuyEirwg3opKBHb6Rw",
  "key13": "4wfJ4HM8shPz9DrtK4sendACaNDA3cQGHGtu2wo5FdEeBGQ46BDt8vUBDpy8d6vg5PkQAWXEXdB3Q9pvvi4EJpe4",
  "key14": "4rYoMJHgRe2jKA5kmHz9JmBcxqgq7rzRsLQ6tHpCHjQrBbVTYwhAZcTzvE7GQakX8G2ZnULft7ezrGH3qotv9eKw",
  "key15": "62N9W9G5qK6e7p1CdhZaueVTtxNpeuM9KNP26JSyR5QBZJENaZyYTc1SXUwf6qh8Nib7dWeW9eBGag7mbJX4t5Cs",
  "key16": "5NcEijvobYLgNpgAuyWDLPUg52kDfkS3Emre24mNqB4Z7DFWiLUGDmiPAgAgjiN8cHhUahZZLdto4YxxLkoHKJz7",
  "key17": "FnCw2aKiqys1rCzXvAhxH8QswLuqSqZmuETwsSXzuPXgubo6oBk1f91kFgcXk8G8qA2B1bKMi7vB5oNmPKiP56g",
  "key18": "5h19kJTBEj7xhLNoz6J9BWDXtQUWh9caSBRfeoR1EWUvmP1me2hWaxx2UmiTv5SoVaRoHn36DAH7USQVDEJvsNnX",
  "key19": "CXJVrq6isnBdBNK1wdEWdsa1SSv57rAoJwfWKPeCyeGgr8jRJuMfk1qNfQYT5LPq8XnUCTVZ6jgmgJaPbA2ZQUP",
  "key20": "41vjr7zB2Ym6cMAFZaER9mta9hntrAiSbeudsVbfES9rkR4qFkvRRrwLQmGZ5Fisswj4ZceD2VMe6YJLfRiVaGXV",
  "key21": "5rp9bRE76fxEa1j6D67kGvYEtjRtURe4QkuQACiruzdqCfzdF6cb3PTS7sx16RsU5LSS4GaVDHD3u3yG46rn2vDa",
  "key22": "5DNy3pFuJJKAimNa9MSVUCAiZg4k2dUo9dAxJUdF1MiqyBC3NZyMBWEfW1pd5z8keXe6NKmsFPjG1wcjVF1KgXcd",
  "key23": "5o3wz9JonGDQwY5quLxChvTJVcZwnXmK8AVZmnxSKZYhXBs8fCeKVBuZGMHz8KQkCxkwfxzrScQPJsba4gtj1Ede",
  "key24": "3rF4qoPhkxENNfKKpviUY36Zh3sAJNrjrynuQgVGyUizuyDyJaf1vPPXrHYYJKmMwnN6YGLBeJ4DWmBZ2uM576sS",
  "key25": "2wSmoQX8qZwRHzkMiH7AdLwfYDL6SmLzd3pbMJ6mvFB9PaqvcXEojinWNoBxoWQZyRwtFZbw1U5LE1VjczYKHACz",
  "key26": "4pJLXwDc4tWJf91m9e5SSf8SmAwVcDpknPDdrmEYCRteSAzrUvr6Fre2nrrzaCf5kNd81oKiE6onLVGJTAQqNTEP",
  "key27": "3s15f1X2Y17HoBZCpxczdZDhnhEpf9YUdRB3jjQDeGa93Na3wqBK8CaT4zFWk4iboZwpYgadg1uvdknzRixYEvTL",
  "key28": "2PbfiFhnGmdGLq3QjWoKL36hXN7NBbhTfrbpgowLLiP8UuTatWXTmwBMDPMmWHn2y6R8fcLX7BrwaB93Z4pWVB8a",
  "key29": "8nFeFnvD5NPoVorWhAuoT5qFSzXrYTp9xSAosQeTmwd7Bp3A99C4GxD7yEyFoSyDBWfxzxhXmzsyB28Sk99A2S3"
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
