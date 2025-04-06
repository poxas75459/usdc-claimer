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
    "4o9TbKPbMwqsPujqrgDe8MN9H3daLAJoB67jcgdVLVetQLKwThJX3ZHYkMs1jepxS1EXjaupRm1smYF454zJegtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvM3WeAaUHUy4AcPtptvXE2FBgvsvyw7yvbrRusrJFyt8gBhQ8P6yK8CT6n4PYF9FcfGH7FjAXFgjddEQgmcXa8",
  "key1": "2CgVyTBZL8JVW5Z7JMdmBb1EQ8TqwSB45TYYocsH6LiYEGPLALQ1i8hd3YidfhQK5su9p9LDPCahthU8AHh7wT6p",
  "key2": "5rgTHbZYTSSECsL6zUXGmho8DGimkWbwQzNPhLDdELEvvXjPTNuFtUdZuSgFX6oq4ni1CZyrW2TgpbBL9Qbeba3M",
  "key3": "4AzDATYgcEVmi5oxcPb5QGjJzdyEmQfhVeZrWjwwa4X6DsLzeUPpSvqtb1R22qXAUTfYsRyAq391m5dabXecfesV",
  "key4": "4MHVzYj3T4mha7LdzBW89aZNoahUyVc41JncXfvRVKBfnPSuyLirBysksxn2pTD3yV8tDTYfVKQdCSywCGpf7DZA",
  "key5": "2LUNyXStmddYEvG6bttX14L7rtM6nYbXzD3xT1heffdPtveVkK3AJCLzygaSwgmGw7wKz5SCN8z8oHV9QSzpZoHS",
  "key6": "2iQH6tyd2oAdCLgxnZApZ7ZdLNg4FBFDnsjJeWLQEXJ9TN8MouB7qJTotQJZdTsKhxXwCfpQrJjLJ6qBzqBPThjs",
  "key7": "5rdjhd9SVdwEe8wjtPsM88wRRAyoDshJBSZDSzaTvATVbxEDTsbMgbnP3KfFBQmyJ6gjMdBrC5YXvccp1T1SLHKb",
  "key8": "3iQxjKmtVAK24u3GjgXDyzWKq3hdnnyZQ3x5PPQuttjx86E4NjFZEzoymeKC5wyyvweWbCFwXZ6vBweLnVyf41iy",
  "key9": "4Cmvtxo661wMxSr64mzHRDAGzQM9ArGoAYM8TZkZQvyQDztjsQKYfRG6QbLJQvbv5g34jHF22ioywSauZKMfWcX9",
  "key10": "4sDEtkMFMU79HgoWmGmdEZWhQS3za3PN86iC11bw8ERn99ZRDuxaMVLThGosZry2CZt4pF6YbHLjC4uDLu7AcvYm",
  "key11": "5rSuRD8E5qRMzzCys95VTEP47chTJyCfaDp8SpTkgnc7EA5JKVvs9renzeZS3RjenntuW2Xk9uKSV8sZ4y6fM2Vp",
  "key12": "snkNg5fBMGgvS6TfV8YxieaXXbzyLNkineNDLasjPWwNqTteNFfXTntiSFwxDwbkkkWQkvcPshhboNUAfcVevg3",
  "key13": "4aRyhvvoqjgf2yp5BAc5mKPo4cEVRvVGaPcoWNFC2dDJpkBGdg7QNSVzmDDh2HHe1cBSNYhmo5xei1xWCjo6S7cY",
  "key14": "3uLKsGS4PeQUC6YG2XAiJ4yUaTDcHkDw4isxsL1JfmSXHbh7zKJCbQHcB9CTT9t71MgaUz6oQZv35Nd1wTuqwrTr",
  "key15": "3JFEjqs9LpzhGY276TYGMTPaLSzShhtuS6NeuWr4nv2stpmo1sS3U9EcmCALSWrRVtQRgVWGs98FSKaFJGuUzzaS",
  "key16": "gLanHyjDAxoSb6jBnaF5rEqM1p8FPqR5aNs5ytCUBp4hVN3oVqFX1aLdyeoRBR1wV4mfG87GSJqV4qN8VxGt89A",
  "key17": "4MXz2sn5mDEQWJEjrVeNCpsMYUgvjggEP7mcSCxjt7a9XhknSTwYNQ7N5Eo9eEzDuPHEiAkPrW3nPzALCxjQ6goq",
  "key18": "54A5ryvWaYRuVnkFpVXMQyvXBDbNJTwe9gc84gxqd9CAkaJtzbm5yGXoNikQWQjRPwJjw1WsjKkKCNLMR2Wu3vua",
  "key19": "2C2jtkeEjtUR9D28CuEHnKfshfDbdzbqYVrCkunEYikfhdK7t3YhBBxYpGKGxvizGfzgHa7gvZ4VYsW6RmaHmCjc",
  "key20": "54iBWZMqp2VdB15YowZRkfgZXVzkSVKGVDzrnmEZUDQpCyxsmcYik4uyJ3FP6STmrn2wwgScMytDUxeUqShe2mSh",
  "key21": "28dJDqL9xgZBGtQj1dHxoqyZJk5dHK7X53Bhs69sRtGp87iL9Q2afneeodXLYZtFDcWir3y6JGPS4c3zKgzDzb6K",
  "key22": "4ReZBNqihrwWqxkuSLLrXYUNMWffNxLRGqw1yH5YzUkKnU3BE5ESLEz36Nkzb5vSV9USYSszeKoc9oPEpFFotRFM",
  "key23": "2m8CkKo5rRYQxRTvMPvx2EiN8cz7SJ3NqWL7yigP52vTdW9hqNZdruWsEKb4YbLM6WbD371SzuFd43kMYRs3AFwn",
  "key24": "2PWneoC6qNje6aNt93VWHopMjfqXwKiaM8rr3KeWLe7Z1zVpRZ8hYJNQAfuypTR6FxJhvkn6XfjqRaZD368Se9zY",
  "key25": "2SFREEHLoCYjVtGVD7tfAxUVs4pFKzvuUmPPGJhLdcP583rfTaTAkyvhtkL2P382vy7L542RTfFThG36zAwbQVZ",
  "key26": "3z5vzVPdcPDmppi6N2TpuMf3bGFNK6LsiWRT3eXryHCc5vQEkjP4LQfPxfgeotyamh7KQCGqeRFCNnT1As7uSW2b"
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
