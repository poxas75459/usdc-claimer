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
    "qcvnct2iQWUrVpjgFFyggStbrTq8nWdEbrRrbUW3ajVHhfArBaN7ZU2QjmtfksSn5Wf6FdLBHEMKDGMYgsospMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22g2rg28Q5hvRkNcFMYiLf7mybvhZGyyoiXWAhxQGdCmNXK3YBWo4H6tzeRnDTCpJZotdVnc8F9MNEsZMWUM3Tvw",
  "key1": "3MKx4YJUzsD6sV6AodmJLVPHe26EGZQjatkbjSSrTPfb35hXG8NLrS9jeiGXvpftjraAgkzaSjPAwDeKAH9xCn37",
  "key2": "2q456fNVPSePENBZeUjk82kXeWAV6hkiMwhrsk3WYowrCERndBDgmWXQPQMgfoHviEqDCRXwCRVg6Zi95ewzncca",
  "key3": "5gczJgPsJBQuFDMviCVKao5wWZgaiXpCjPSsHvqWbznt4MUSdkMxBgnK2pQopv7ojE7g974iFa5jwPW9fasUeKfi",
  "key4": "5Jrr41eR5f8UFHapM9XC4spQELGKEbp7vNrUm5wegxDjqxX7VGfxe4wtGgJoBs38Zg2MenDeXgtcZeRCGP5yiX5S",
  "key5": "Sk6UwRq3TLmq9aDbSA1jvFhiH1GtbN2qqB7CNE1Z8UZaykkcX7WNfawjdvUei87PBRuwgJ1oa5X6gRyyE9E7xYw",
  "key6": "24et2y2TJ3W1iqoQAQBQbkohUeFJeAgbCejAcHGcvWrCtPN7w9j3rC7FBvmzmoY2aGLLSZzSXsyfW1oGAReKTFCv",
  "key7": "4zFdEAPTbg9BN8xZs698A8iVHaDmz1ZxtfBx6LaoLxTpeKRogLs5AYprRvZtCgtPm4JxCbe1B4wmiwGsW7qDyzn7",
  "key8": "2y94HFkeX6a7jQbby49XCCgP1pAoRMxRYk7D14THSWbwUr83J5HhzQMX9okJSk7bpsxxnxGwJrNgvEKsk6yiuh1y",
  "key9": "5AB2mKEjKeuPMURPKjudZfQqhmS6Q6XnZu4wkRePwZ8Cj3PpE7MSBESbVqohoiydYRiNJ1e3KwR82dN2JxruYdM2",
  "key10": "4cYbDucaafz2e2X1z8u2G6FWZFFhPVwLWB6R48Xya1YF8N5HyUB53byZLS6PhLuRv1wBvZyo7fx3jKThKdo22Q9o",
  "key11": "3xQ5mdzzPJ7pwGDc6eN7Hx6La7HHuBrRSqrpaw7VuNRsdw9KdNyCVE9oBGS58fR1NHJx4jdxc5UyMkwd6BUi5dTG",
  "key12": "5hwjrmngXmGCdYGgZqQNFNh3Vxz9rjaonysz2zx2Zafr4PGWAtqDha3QNhZoS8rnKKPSZzzoSifZrnD8MQgUnqgX",
  "key13": "5BLTE5ug9mujA2YeNTKNGArxDP3iKGbRWHGsSuVC8qL2Zm3PhGpa7h6NvQCu519qEMeudRyxpD8cbu3WpLzZwKjK",
  "key14": "42FJryAc4kkyNihVQMZ8tgevPNMXQ7tMjfvxumymaRQ7weJDvVrn6p4R5MZ8GmsLWdRTWCykCsqeic4FwwgWm9pP",
  "key15": "3T2Nwz8xmPyMCSrYnRWoXYYunsWs6cCNzuDxNUP5GDamooXMQiideFFUFz8qCeZ27mFkQmSsLXXU2TkJJHJy5JkZ",
  "key16": "3yEZfQ8tZQm8PVNHvBy3vfCvnZJcL3vWAakvvYK1s2hpLYL9GfCe2xW1v477cf5gxNAbJZUDJxNzhGUfjBptNXdV",
  "key17": "2iWrU8vhMKJJrswNeU8C4tBuusoVq2L4LUfvUgAoCcBURq7NuDYZqPycrGzGmBqXX2zAtUTrswLwU8XSug878eRG",
  "key18": "55VvQ2LSmL7GcuXKJZjYsEYT2mBarnWG1BW4GjMxxbRWQnSeWcApkbJ4m5hyHXn6jFxbvvQckuDbLZhV9XkN15D8",
  "key19": "5hLd7HdDaEfnLYnx4RCyAxxr6yaDET57JxP6UGee2QdE6dAtzi57rBWGHPCMbzfaHYNFwapYMcfESF3kgx7hit6E",
  "key20": "5junHs2WS8CBzUjFkWTVPgrQ3bpwFwDhKgzo8nsRo2WiVWL1ZWufy7qpSKB9yJW6ZM3Udes2iauwyJTVfqSkPUnE",
  "key21": "49HafuRMa6jnNQfjuaBN2b1bkNuPKQ7GSifeScBbsfbTNFaLGHuzb2NXKrZyRd6cgssJLxf1pkhJFPLYV8oMbGmT",
  "key22": "Y2ZXfHZwmUzKTgz1uchZiW6kufiBWQrKA7z1K3DiWZsFCCXVofm4MzupVqsDzhTesWGrGTPQi9byv4Bm6zx74kf",
  "key23": "2ba2djPdgEpjBcXaKKQhziaoHxcpo9CxcaFGakP5WUxmKTjDfaCwkSUy2bSt9NCpY2GArkcxrDjoGgi8mrNjA72D",
  "key24": "4hbAJSd9JBX6cPNLAbw4ubvFnedJbBe6T6FYkJPrsyUndwLVExuKSidv4sQ6reDdFyUCEZb7pXiSokJJep4oB9J9",
  "key25": "5r4H2dDY3DFtVGgbtb44exTMSrMtpvJGsopEf9ybyj3wXFRzqTfM3pioCACarcBfupuPeMFcY5GkiqwmrPfUKhLE"
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
