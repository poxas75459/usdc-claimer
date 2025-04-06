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
    "49mo4HaLnPVN5cfXP55WJNPZyCMv53gJFnL5KWMEMA5W11Uyr5TuVgWnbmLkpuKf1R6jsrPgTgBpMUpVuk28qaUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWDBaaTQtTisxJiCUaQtAvsBKebYHAYStuxDwXiJZEyNW6XjuuyPs5NqqAkYSmB4ZEkJ7YjtKXkqCNXFhCVQne1",
  "key1": "2s5FuDb8BSDgFh5L9SSZnUewBCmDXN7PyRX22Dixenpk4qDXBqDDP84tVWovoi1rEUvCob9MPvfvzbeB7z8jSJrz",
  "key2": "XxGB53Bxr7Se2MChnTw8vSSnt2wS4qGiKTxczsW7fbSAyv3u9QFGLPzTSHtZiipD4sJ5pA6GKiLUzDwKRFZoAvz",
  "key3": "3rqW83wP7GzA3uGEPegS4PdBX16nB8Aq7pox9hucCi7JxMoGSBbEoQU4qDTwUnBfcsFS8fvAcf153YBiJT4EUbTN",
  "key4": "4iUmmEj3mJusuqdS2bZTk3F2mhKnM45QCHsZJDkjVxJhYLrEouUhD2vXbLd1AsnoHude9wAhPrWkJYaFxP7Q4DoC",
  "key5": "5Sw1ZKaAorMyEnahSk725vzBuLMctAsrgobaVbScpsVDrnNqDsGg2JdBotKzVFjipA2FH3J5AB8oQMn6MydK6ZLT",
  "key6": "2oGiAmdNKErZLqsa8G3GHEuyabf1gsNjmfqm6DwBxaow28wLd21roFhgfK13X6TRuyWQ48WAL8EKtjmXkQAekD41",
  "key7": "2uHBuhxXfYg4VM6UwgZkcFLvMi49f1jqc6yeJx4YYvYHZQa6T7RuYfRTiTSz7nrcv3TBZvDw5oT4Dd8PhyaLZqwu",
  "key8": "4bQ7X3dGPyawCQWdvxPuWThxEgYRALVC9iAQwFeN6BykNL56QUPvsM8cKzSP95uQN51kLhonFZywjCGGeYzDAZE5",
  "key9": "4hvW8FDnkfR9NF5rDT1LjnsxX5GtcCnDwnXXQFfyCdEgcvUjELAncbiGdpWoSKobry9D7QPN8NAaDJ4wqL6xhnVD",
  "key10": "4uR85ywGTv2hq1UgCadDzcZtg8crmcqMhWSPxmuHkEZYwtLnT6d1zX9GH61aTtYbtcDdigpmdk5s3FWBDFDTG6yD",
  "key11": "2P2wu5Xi8Hiyik2CbWgQgFg2gT52bUoKcUkMCmTLy8Aze5VwJvoZ9SUbxXJRgiQgpUgGoh6MsDKZvZsrqgk3Zzf7",
  "key12": "4oe4NqEbWtit4FYi1CZ2cm4XAJPtLtCtCX97gXygiD5M7bYp31emdK9zu286k36RsEhKyMs8TKhqcdUZrVPZSoQQ",
  "key13": "3n8My3xKAM4RFXpV71GbBYxwbi65jaLjJc2nv3o4W9bihAVydGxuiMBm5azepSLGZVkxoFVL2zhemy8vrHvyqNfD",
  "key14": "4eh942K6tQ7e3fVZ5kW5bYMYZTfuA2ijfNrgq3uy6eq7Kpk5k26VfUMUjUxG5JmHfy9NBosY1KSWZ6szvttNmptT",
  "key15": "41Hax28mKdEcAbxR3mtYxXCeAMko1veGi5QagkFggWEjRr4WDWgE9vns3GYkikcqyVZdERKLBVxmdPWn4Dn1CdhN",
  "key16": "2PnbKQSxQkdk9stBjd27uupJUuxWUeUdFrwyD7ZNJNFdCkWLWwgUKTjFyG5a3FjvmXCjuD2XCw3Gdbro1XqByqVP",
  "key17": "4vAcXHfbHDa6Wnt8GbgknDQkEQ3cQJNDeLCFrCmd9sbzf8PubSMT6bZEwSmnLwjR8PEAvvmvhsr6ypak8gmMYfKr",
  "key18": "2GE1r3ByiAf21Dg6iVZJRPmnDvi27P9Yw889v4PPXWwD8AE115gZ3kzUkidFj94NP2vCYqHrGEU2JXinEh33q3Rk",
  "key19": "4bqcJD34Ct4xUJAcUd3wCG4TptbEb438j44YW4c5a6SWTRXxGyg6R3Xdufm5ihXcgFE3nE2XuG6ZR4UEgMhY72dp",
  "key20": "4TBQBXWpYkpWLTrtcRtsTJD63kH1ZMrJzvvyENVrsGCemipv28Pvq6hruAWbsnuVUzsKWczo91pT229sw426mYs4",
  "key21": "2g1x6HtJKNdWSDeSeRubfhbyFFaTpEMZZN4Qhy827S2B9Cv487bLF19PLyZaagECbCMrkk87s9pWuCGCjQWUvbs4",
  "key22": "2NQA9srUNrPz3JA2o9wp6w1Cuv3wDFWXeVTHGWuaq1f8WApCDJkuK45Qf24BJypFTNBUHYPNKAHmSM6R6iMiEjaP",
  "key23": "3zmpqSVrR52SHx2m928BkNV3oUfJ8goYxQE5pvv7diFzAWqfnmdf4K1S9XqiPzdnzQpXmDP8ZjxEJtMhbLtJakxS",
  "key24": "4qf1948spfRgN3jUmA1Bjjz1ZqxpARkkYrajmxw8QQxgu6aSP6UVNd5eH8XgPuaGTpwNXS5TMuVjmNCZiC6winS6",
  "key25": "58g559anHhpRundC5EHKUcJ7fqwJfarh4ELx2ifoBNUT8AryT5s5cT7eFqhHyRJpYr7EDQT7atzzPu7w36EJ2m3Q",
  "key26": "j3oqQN3yKyA77Fv642BVydTadCKGV3b3AbhnCVaDo3mCbeThdd47UbqNCTtfWUpVupdS5Te7yP6kxPtbVvTSSir",
  "key27": "4pibBqKedAL2NsuhSLrViwFizUZJiZZ8NXVSP9gi6LzrWN32FeKsCgDFDY9H6yvicmakQW45BUDmWCqyMEZQ1KB2"
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
