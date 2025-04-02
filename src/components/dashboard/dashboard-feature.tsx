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
    "2tHmGsQeB7JmTpxzH7ebFzXx9RNcAZzqymRdCT5sKrnVedar9UYsrpjcKD2pYHQYrEHewCNYyGJfqQw6PFNpikjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G91JKfE8QEqFRB1WRtq5dyPkBMsHjFhpjcgpTU1ECDnanqSbpCr6TTwC9E481465eHgmTq8jCoChFj6ZYSFXqca",
  "key1": "4S3QS4qF9yQhWJso1ggbEpvUTPEimnWe5GmH5U2vbAmPNGMdXDVGgbDHKoQpBczVs5g8wWLNET6sBDeZnHYY67kc",
  "key2": "2wo2Tuvd3ks3YVpJzm2vzydGf2mXKqyUPcSb5d61AhEcM25fGoq946GbPut3x8yFvFkQwYb4Avgg1QGBsuzjaXJ",
  "key3": "5rcx8kwXgMzkurBcPqyAoM2rciiChpVHj1mtpFKoMAQHYmFJBAHhN44TmbuvsHsJwNijCPftUejVv2YYXwFb9Kb8",
  "key4": "UwwLjesks4e7ZypekMpHnT7cCfYFuNRQMtJcegnHK7ZQxHL3GxJTXCpQ2nGXf2Y1h2nbg3THASZLnSGUGfB4q1T",
  "key5": "57eca7vFQuc9P1dZUDvojQwMQntVZSq89H7EwG4qG1gWJTHqiBPtYMxNNpSKuTcxXeeGZxpMze78hZ1UGyKXfBHY",
  "key6": "5qH1G9UnsZUMMgeQZ8cTqhuVABqquqaRicf8uaQvE4TgyxKfoN4hTP6PuGTAbyZPuE4iREeFsXmTothKN6bxaYLm",
  "key7": "4Tf4WuA5yC63yybPAmWPEDDwa9Nzr3ADWRbrNAEYpufm1a4wuN2ftDhTGNyEurEayuseE5hNBDKuTZz9w7zToQyL",
  "key8": "5TbVhSPoHiFw2KSoszJyn1roHG7wLDNn394nh47HsjQWw62Sn16oMDGkJVjHKMgFzqLXdjyxm1PcHV3NsjhUDRSM",
  "key9": "5fpFHNCDqpmg889AgemU48MKYF5g4X7vf5Psng9k6pPJG33K3dXTWYwmexmc4E3brWmNdpjQfr3MBMZQ6VJqgXf3",
  "key10": "1sFk2swPrDrND7hCDKTi1jvju8Bm7kRfgNkQXmpFFfKqShHLWAgYL7sZLV28kWM11eMzrkLyMwy8NZVKRH6om8W",
  "key11": "5mcUP1XhH8QwtcrDJy8HdBqBgCwcL7WTcap86NvzvvM9Kfiyxtc8AW2eTWDrXj4TAsvRuxR8MxKnahf5PvrjSBg8",
  "key12": "Y1gAk45J3n5Pc2qyTNnWvBam8NTcqBaBF1UXxoE4L2M9w4WD67Wyq2fpPRjJwkErHjkUnMCZQMSE7DobRoEy8Xf",
  "key13": "25HVw9EyyNmwFh1AWxgM5pyddQ8bGSwTzrzq2e7PFeViN4QfFhyyBVWcoyTGJz8z5B7oSTxzUhgaY6DvigFyFU8Q",
  "key14": "42WJdpLfCLGfAWjCQJXHCDktRibFGYVekttnSpnCY5XVcECWpEL6C1gq9AiBntVBY3dSWnJrWoK4tauy3E9pVtHJ",
  "key15": "wvruvVSXchGn84zv1CBraCgkpRNiPmX8xr5n1SCTwejPfRM4XGeDQuUtPqk2N1wu2QrKzD2Pn5fRzPb3LB3Y2jU",
  "key16": "3zaJa8CpkaZFDH88He4cw16QDJuMMq1pzT7TnHv3YawVhhn3dmAGJeinG9Kn2to1zvD7NzWvSSgPyiS3qgh2Xycu",
  "key17": "Yc78zoSjWi6HnEomA7mJGus3787mv7PXjWTNkrjvAAcoBY4vHor87NcxCc42TJMiqMohAXpHPPB5V3BvBQnDKud",
  "key18": "4aoeca3Ez4VeTzurZ1CwfTqXGXhKwwwmE478Kg3vF3BtTsk7E23b3nan5cg3WLJqAv1xMQhnkk8LSrtJ4amebEDj",
  "key19": "4w9aSX9TWHdShniPEFEVytsU9wiRZwezrq1N7KhuRck1qjwNeJ9V87mqPpeWvMHPq2VQmxZMUAW1TRmtimYeeYGG",
  "key20": "2kXQdjMin8yjmTFxDhMpvumFu5SEAajJdjLnDutowtX92GJtmRgpyLAWcqPWzATZwUsb4pGTUSkZ1khzVgiCNCpB",
  "key21": "44QBfM3ntp6q754BLzmdBDXbTfkV7WN8tNYYQYuPEcUx9TGzCxyR4ws6WuZV2aJkffRQRWA4AMjsUVUdQ5edf5Xv",
  "key22": "4vrAVMcWftNfD2A7DgXK2j5hvC96K2uq4rxypY8svfdHnfzcPQVfZbDTCy5JK5GuCBxyxDdwuJsHYb1GitRj3iXW",
  "key23": "2poKDQELTPqFRUBQ3zEJLpT4nnKyumduhUYChb9JNy4rD7wH5Qys5HHwXGYm4cxaaKD1FT9W6RkFW5uFUVdP5vBa",
  "key24": "28DqqHFvcDpadeoCdWkBfonzP4RrnzgyPgGfKELmFJgrpaZxMocfCdFBQqMsDWxREGGAoHRqzZjN1Qnvzcwhn38X",
  "key25": "4WZRDW89nAqN8pkLh2g9huDco5wAz3krnWEFkWwjorxWSyhhQ6rpoJ87uey9RSHtdXi9UTsVAggpHRs8P2BuXBUD",
  "key26": "3Rg5hsTLPAuyTJ17h8F5wmycrSYWR9jxmvTPk7UbM2iC1Hp1awuXDRLATzY3SJu4PuvToB9bbjyvVsJLXFyn9wNm",
  "key27": "5k3CTA6mMnErZia7hTHgHQb5sQDRo6zP69mUYwPzFsBC4Ynt3itHaGCjV55QQPLFMziNDxN7MdtW8P6UGwGeMGE8",
  "key28": "2JCbDRw1TD4GK95jz6AiTW1A7z71ngxKBumsY4Zdss9hfnhKyRAkSd2XEhC3ZaazFFbwZv7dojJFYVFCfRoEC2wG",
  "key29": "5JfCKBKZyip1XmPCqb4cg3kT9FnKp3DWkQk8guEUx5wMm9TktCjwzTfB8XmqiR4yUqTNTYBkdu6xZwnHE8ARfs7g"
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
