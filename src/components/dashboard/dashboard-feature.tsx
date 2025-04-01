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
    "48SL3ncEENTUaRXgCk8YyYRAo3mnZN8jEW8X2TvfSh6sHzZJf8rGvicUva4ajYTGE1hdFRcN9mok6NVc3wDbKujm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24EtEXryiQg2n4N67KohFyft7s9JvMjX6fsLDAGY5fc8Q2B7LREuNLZrR7uvNCV6wJ5X6F3CW2uk8R1JfPew7fT3",
  "key1": "bqmxpKwiUgcmQN7B8VSNeHTkHNigbuJJe4z5EaXuxung4nbkGrWgHpgqTUpLDSZQkBDReYdYn27RP7xo4wX58LE",
  "key2": "5kULw7Bh7qiZm78baPa6yu6wzXUU4emZHaLQTvea17o7xkF7cmWHopPzdjo4X1DH5WJdzPeRw7Af6NSHuybYQRza",
  "key3": "kej8R2d9MoZ4RNtwt1JNCDyYUohDJ9vEizSRt5j2FYb6XbPoWAbvKfGoJKJHw7yJUceGc9cVTKtt4gbMScBRgg4",
  "key4": "fTn7zLHakEKCtAoi24WTExYeL6VbazUqE3GM1swtZtrVctqiY6wQNb4ZTP3TLqdZhPG2Pxy3ygFrxPLTd6EEZUX",
  "key5": "5q1nzMmQH4yfLLRPAM2bQziWpzFdXCSaHF294ijmLSPNWgcmYEn6VnnA6LXnD579hbtYW6UznEit7k5E54vQmeKm",
  "key6": "56ayYmv1hqCwFBv3M9MStbCR8oVdYgZVtp3PN6zBxoycteRUAyZSEDHG1bzSjRLTtEMLbZQpVzgUkAK6feZFSo2B",
  "key7": "5ctgzvLQHLPFqEP3ejyCtwZFKcLhLqmgPequbCtYwEne42CUCRPs5HdbXAdeJTxwjco86wLueWBvcFBV4LfCncVU",
  "key8": "4vDgkrAw1ZjVvD6bKDQBh7bG5DC1mcsfvh7uc6JeJ7LaGHavN3SJJSCs3jsMK76s95a7ziPxQ1PJGbNvjhEArSDA",
  "key9": "315L4ZyC5QVBAaiiKDukaeL2d1saKWAazgcGm1uz817wg8hSMy2eoyyCEtqqgwt67XY7jqAVRXJcsepcuktu2GR5",
  "key10": "3bpDpvgUNZSKsvZph5Mi4bariinpGxAGpzDZkFGJ1iRyYY58N6YVcWago8B5VnsjJCKvthDn7caYq7DedZwHSqcf",
  "key11": "571Y5SwzxZ1YFfzEoCfo8HB2K23fPEhQXpdW8XiM36eqw4VsuWyVNnX7gFHV54SYxiPhtApDcVVSjyv9vk4oCDWY",
  "key12": "2A9FT3u21tRQtn1PT5cinFDoj5mS4Tr6FvAwBppjR16vrjfxVHFpR1MNtzSyCYzLShfZcVQmcdMpX8sCPNkZoidu",
  "key13": "YdcxwmYegLFrNot6ohPJxKbEAY2rMnFetSAxdhy8nQgRauutP4wuyPoKnFzrsX2M7ecTQyMn6fJpgZcP1qEH8eN",
  "key14": "4H4ee1htge8EPFdYTp27AvZNkJoCyjgHqdRDmhMdHiWkgb725roacmyC51BHyutgeZSxYkSfKgzQH1hGRp2Mdj7K",
  "key15": "5mbjeBsapfmNwiATnyRLkCV2QEhmQbGG1EoTtxcdxdGBCEqqA6a8M4RfBauuQrJraEB4V9RUeu7SenKo9iRwNv9W",
  "key16": "2pzxiWV8YQfyrL94aiVAnzkKDzAeUuppFv2ZgAshcbNuPddTb51Hwmtu7R8otbyHN6c1pDTKaxWkgQ6aovcd4mk",
  "key17": "2eKmY3bWLKDePbqaHVbxs8XV1pJTXXrpKxMbsimmxsiQjad5Q6yL6Nfku99bBgtBeQ7RjcFNH12UsKhpbCgG6UQG",
  "key18": "62NR72LH27SiTLbusujYyBru2JwM7S9f2i3SUeuxRHcbwj7rB4EPGeZnLKDuFw3B1diNoiXDfdBXszU3haR4y1aY",
  "key19": "5czjXgbWoehSAkdDSK61PDhgiskA4wxEU2BwiHrocN1M5p2QGzfbJnK5RaADZ5qxJUXZgBuY9BnpTJU1JTwBPo9N",
  "key20": "2uFW6ZF9H2x8z4j5bvScuX9CFegNVKNnXmoWtWq4huUXUiuM7zcap1NeEpX2nBGkp64odVioH133F8spRozzuMAm",
  "key21": "2uSktrd5vcviYEjcemN94Wi3h4P2YmXyUwNV3Dv7fgW8sQ2Newr4XdkkbQapBbDCMaYyWAawTj1AtudsuBpvrydR",
  "key22": "5hGHNujCgdF4uauHMMKexteSPMjmU5pkC8qS4E1zde3Yog7KXFG1fDZ2tBCYuPJMyFmSRFXQ9WMzVcHBTwSWNV8n",
  "key23": "9SZRgVYL1SCC8L2g4edRDi53LwuLEnR9THQndKhScKkGeUxFyHR52Xr3VPcQeZgFydeWNg7MBuJpZWNGHX1vr5a",
  "key24": "2Xu5pMHTVAV7kdh4Z7VKCYSPCGLpaPKChrPgAvNDppTxSQW8HWhNCep5Z6VAtB5iRHRQyGnTAVKUYqNfoQXb2rjx",
  "key25": "Bgmpzki9Z6pKPZzL72XrZk7EqQ677rDzKKDe9eyq26uzekp2LppNRUBhfTpRQvcGTuxnLzPSZJYkhm1YDQBNWKT"
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
