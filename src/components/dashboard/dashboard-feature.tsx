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
    "3hGmTV5JvBtAFejq2yWLHLiqqCCii575g5Qeueqw58gi1xPFhdvg7hx9vWxJ8jvhPGaicRbTYm7WjTKmsPbySPWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twnRPCnoiMYaKgoYbxCVhrrwQRfsF6gzgcrACNbQJ4wEEfjBVuZ6CNQncByarSecRmxHBGvpUyEZMo1pgfaRTx8",
  "key1": "3JsHhxffAKk65FnsDh7MYpbDw9bkfZcQDgRu5Q6PMYHCpgeHjgXCMW3BbUJxYRsoz6CWfW1nxPCMrYarx5fa5bzV",
  "key2": "5b8E7U8cioA2N5oJmSCsVyeDoVBM1KtMrwCoqraNeGfeBUeLSZBTVxQ81R8iJAGewQYRgVqZcEWhoNjnvXYLaKFT",
  "key3": "4Ea2LjyUuj36VdruNs9yq77jURfHqxsN5r9Rot3oqtSLQbHNgkYmcayXK2NVW9L4FAGUbw5oAXmWRgnLEKUvNNLb",
  "key4": "2Y2BkNrL9cDRD9PiGer9tAFmwaAVJXuHFBYfAKw59YXGMkugWXW6vyXDn8n5qpfA9DCZGsJSS1cZNkvFzuExmXWP",
  "key5": "373G5Ydg1aMBGcEGTLu3tSffXBfqXs17VWFKjc1mnYUho3vQX3F3ksCVromWi3deNpBKrFghbVnv8dbbagVboqnk",
  "key6": "3vwWa9rSCZorYYPtuFB4M9BUouS1cKdhXcHjzaRvfsF61ZmDTfNx54jTDk14hs2rg3Yg8XKzaVAVPTs34L1KBgc5",
  "key7": "5d4bkQJXEZgNj6n2tEA1nVNVDKfwfYqAfXMd1jd1ooPhP71jBdpVoBxT4tXBmUPaEBqMAykGrBYhP5U3YXndGi6f",
  "key8": "5FM9h5i56cigMCuD4P3S2wmYufJBHu6FCSzF2SPbwyn813JkaznduUdmMbfdiGpCDAqKptoqUmKbUb6ozACMkyM9",
  "key9": "3kCq4TP72gu3ojpbZE37innnjbjbXEet3wrZRRLEhcCCqvWKoweSGrjLJkF7KGEkFrrmK76pF1GRN8wz72XYPfYe",
  "key10": "4Mbe6ZXZ5unwiZBgB6urmYcELfVsdESmHSBi2X1r5QNnnfqZ2KVQQcGDAkm4WoTffHHRE4zkDzLzbbxriARpaAGZ",
  "key11": "4A2mu3Ea6CTNZA2xpuiVp4a6WK1S1XPvbymyNKWRUiduQzQT1t8jyps8yhMBBtdcVSpAAqrXG5jaQvb2SDxkeAbL",
  "key12": "4GFy3DYr5qH7UsYP4bdp68gUE44E9weWBbKGv4aWh1y7MHEtcxoH8f5yCWmfadLZHuZgjV7vsnJm1XiUK5UBVxno",
  "key13": "4nB1CqevYNuTrLxaQjdbcA6uu1R6zx1N75gHoq9rYUZcXYeSMfGRCFMu5yh8HjBztsXLNJvZL8FL4YTvMNpkfWpa",
  "key14": "5G9yRyazELUqgHpLRWs9C93HW6HhBBunJg2781FeASQoHKRZ3u2mEqVzz1NujWYME4yDAAzruQQeoWXBBo6ZGW8E",
  "key15": "54mvpXH9UWTc71yq3f91dcQ8qzg1LpNTbE2K25XYhUQnqaBWYbqWbT2qwUfnyT2cryZ3dQ3LPUzA5L1YsYxktnj6",
  "key16": "2k3Acx4HQVh4cq9YFtH9X8u72LcHrdu3n1hNfZ6oYithpMERN87DjheAjHijSrJHLEp5emymRyQ2XsGDRbArLGS1",
  "key17": "ASaTfGUWRv8ACo19jfmuEXakri6Zs8K1iC1aM9VK9GTFiRiFzkWF8nDdLLM4drQzz9JgtGz2YAdNxJBCanXxLuq",
  "key18": "Dh3TKeYnvLgTgopWvgVperVFtwvEofxdXQJYjTLptWQpddhrqQTP7wqL334Hos5NLXd5PLqPchgN6kY6L5PnhGV",
  "key19": "32346WLE7GohVoV6UJBjiQivL8Wmy6xRWa67xmgwEnzyoLsPTPe5ovsVsynKrUsz652EuBG9sgE3xLQMf6zDkr69",
  "key20": "2d1C5Aej3kehq9bGoqPjPjtaRwwQNRt4nYdT9KLqx7XKQRNUoogN711RMrbYZxZicw4EreSD81P3yPfEXWf7pfgw",
  "key21": "59T6jXCgJdTdPTYuSP9PqSjVEztBHq3jRk4TZkq4DjyBqBRExN3EsmUbpkonD5RuNtvcM772GqeSZv5n4ip1Ln63",
  "key22": "4DTjaNXPwCiyoxfKGY8gpZijx44Aaymq1uqLGUR6YrtRMgU95beTFBrgMCucsVDNeZgwhVvEJZ1hDfjMs9JDdi9f",
  "key23": "4tqsLj718KEJXiAWcBYv48s8feXxuk7xd5sq7UDcmtctFgCQudWuh38mCN59acA745D7vqjuNLkscLYUfKnfw3kq",
  "key24": "4G2MRnKQzF29Dv7wHW1CXdX9YipA2o99EeLxShVa36CV52ESAcKJ9CKo29aeSv9byTp3Kqy5aoi7MCQRtdTLF6W8"
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
