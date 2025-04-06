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
    "4nNArrVRem9vELzxJCpokr3yB7EKwPuVV1WT5hEDURmKWx6menUDxdPJFagqN45kFhGTaLoei2zw9Y2TQitGoV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyM6HyJUvFGeiSQiccg8MYu8KdAg3TqLqb2NHaUZiofZkcDJq1FvjHDnorVpkguGBQVRyL9fLGWG5ctVdhWP5YJ",
  "key1": "2apnfMwHmc7DVeQZdDu3gJ6RqD1a4tsC8RioLGZPgEFFmhnHFYVNapATzW1XjChLNosWT75jcT63BwU5iR8ucxJT",
  "key2": "23UMdnpybfuTpFgAwMW1hBFac37KGjjkhNPx7rPvQR5eugm5riKuqn5Dqvg8c7iJrabD6ar5MuAP3Fm3RZ1spNQk",
  "key3": "2bAXwvgG3vHrtr2PP4vhQ1aBFV7fiq32sKxb17h6Ygn6krRZATCwxGdGPQhPyfpfQUuuejcaqLxMsmNggcYLmX19",
  "key4": "4qRnBdgGtZMmhMo7TQN4QF7A1SDQCemM8swsN8TSiZBbBEqucDNZhPEJ2NDWK5ShM2hrC1v7TbiyoycAZsftMBji",
  "key5": "YXzvm7g7bTiccdNPq4eAb6884v3yakM8hqBaMm8BMT1cfUwHHxqmE9qhYgLiJccy4d7SJSPsKry5iauqQp7sgye",
  "key6": "2L7YBAHd7fxf9JZAvxbzMSMqqwLCjYR2bQgWLmrqMqPWpD53Gc2cnBkts881x3JuZ1iTVMTnu8Hc1DnKFirGpBMZ",
  "key7": "2A4BDesjrUPGJpmcFoaTSuwseTN3EveR5q1rZq7QtXuFSGT3dNjbtHbkq1GYneH2GWE2c6geaPHg8e46GgXwpmJF",
  "key8": "riXWDtVWytofamW4RvWYKk1objgXcSRNQmumagbwxTHpEQceki1mFtv3aWR5CrpiEHgz9JjViwDpTXPiiqm2n3b",
  "key9": "5uPqocKACQopWoo2GcuRG8tf5qkhiKXYc33wBZrYg2dKn2C7ieoP9FEcLqe1YMwHXABpmpaPvLb6kXJJh6BNygYe",
  "key10": "2fr9T1Car299P4hcywgBvyvb8tAJuxGrDcQPV1iL4FiKFds4nmtid2BNeET3QZshUGw1bAB3dZVnFPJ4Ktj1ZEEo",
  "key11": "3ceVXBMsxnQAnsHocbmdWN5iJCKhKkjvZoioDxSgsTsiwHahdzza2G3mTwUyaqnVJbCfWc8xodw8JQZFDPSNZmBJ",
  "key12": "4TxhfnZFW5drbusMCHRDMrDy2anhwxfpGYTFcLqM3BMJygxzRdy6LZ8XffMfFL7a6koBnmMUzrikjvGLwVTBX2wX",
  "key13": "2EyiHaGgcBNANeK3bUBXNFuAjpkQTQYNSaHkA7EX5RpRw9vNw2WtvUH6AHA6Y79KqfpDWrP75hxGrFTokTkemQd9",
  "key14": "4sUehXm1mUQvAcnxhfQqsfLaq1G2Tw73oYZ1fFPksT69grL9ncEVivSbqdpZAejcE1CJq9JjqnJNK64GQkDDtFXy",
  "key15": "4vi15wvGMkrS8NmtDAr7gTYiFcJDjoyYr8rRBykv6rEUwHkXZhwh1i178ydvXqL5ZZBfX513mXjdhVT3JX59sGW",
  "key16": "5tVQPzHZVUH1Zh5cYc9ranryzgiHgACYxB9wRkqqCgiXidNAhqZLf9Eef48h1Hpgg3KUsK6RVjbsAwEFbyW4w6Q5",
  "key17": "5V3GMxBpxNVURcZ1aGpf9LXvpSxBTxJgpdf8fySJ1DWMfVG8SVib6CHr7GWp1AL39i2unqmSkNSdgeDemXfZXzkY",
  "key18": "5yYK2qF41gF5N1DNeCX85B3YQZnC2sgzcZdFYGgirsuVUfMUhZYngCbKw3PL5xhS4iMiv1XLC6r9TYjenUYwJkq7",
  "key19": "5QNKzUQth9krMBBFbcUwmo3VXCeoz5uTKzdsGh5sZP5H7wra3RjpRLMDEWWZpn7xkrw9CxmS4Sg2WH6MYPxQj4uB",
  "key20": "3QXJd6xaMuZk2MEtnhBeNVapcWTTJKaPGi4hLhR9hk9XfKRTTCN3j1GMp3ZX7hGPSeGDXUtYkzBZ1ghsLxtFx9gm",
  "key21": "5uZv3UWy8FJ3K2RnkQk2UdroNDsk4rf4xPoVaTpM7eNypZbZ6bQTQTBXXezcgP9sciqRwjYodQpb2FnaSBTn2Brn",
  "key22": "37XQdde9KqPo6DXf4orfg7uNx5frzNhUXgRVRGWtEPw8hW11ZCmKTHQGxHkPbqXABWWh98Wn5XBHAZiWjfx48kLn",
  "key23": "2MmzqRCMy8uKSJeXL3QoegQpxV3ocwMAXBvjEhjn3T8p9jvgv4TEuCy9tmJ9rtnruZB4k5QkPnGtMXUHRWhuft3G",
  "key24": "5Za2ahzhafM5WxJCYtexZ3b7cjs2yqPMcda5LvfPK8vrLSTxo1i2xEDkTjc8ijymhQY658A8ThENf2htFtkVVuoi",
  "key25": "3YvSB8Thqg7R77nezLFS3DqRPTEyogo8VShfsofPqzxdUbX4dYdvBQ7NurtTvRzdBstfagfuRPeuckPFqTDZE3wX",
  "key26": "58Vf8qditRBEDarsz26MY4tXa9vtpk3DzjJ6y5V1CBkGBKPDzGi13f8FqLg4aLxqa4kxBepHvQCNCaL8uNwhpZPF",
  "key27": "4nPWWhLs7UtsWAW2pupLt1Ps9j54zDWWBRKbv5tTDtfUD84YW3P1S9W5StC24aMooqnAxoHbVSec3KgcuL5y8doF"
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
