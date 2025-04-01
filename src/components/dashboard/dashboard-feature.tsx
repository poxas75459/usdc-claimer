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
    "2Q4orRqMcxxQecMKNdv4xWm2PTpJFhF8HvPK8THSJzebuhkQMKPNeaYRtYrJ68edjopAuQYwP7hMjwtdbg7huSQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjGBQmYoAptxGAAeKaUmZhpkhac3iK1AzFpiASH6eQVoPD99FKPLP2tZfRcwWdpe2HSdNtvRs6jz7j7axWhQjfr",
  "key1": "k64ZVATNUWyqJX4xTwpXsLgmVUsa2paD4VoV2JW4x9LdMbiKBLtRS91HNtPCsaVDwRREDBX9msvtwJhqX4BPdsG",
  "key2": "4Qv5DVY9M8BpCAs3tNPR4wQSVjwW2ctmJ2SLVrmL9QdRia4z9EKvKENq6FrGj5KxhKfPA2BQnoqVQcAnv4kc8rDT",
  "key3": "2c6dMd7TWbrCX6ReDvWSy5pnz365jTCmZ5YoRTsLMmuNanTbEKZ8gKXhLEqJHep4dVe4ZHjXyPFmXdZ4hdYRMJbJ",
  "key4": "zF2og9DJS75RcdMuDn8nm57LWFByjhFE1Yb8c55zX8Npth8C2yGyPeZ7U8TQtBqvMpHBT6ZYqTJN6ggAqFYS7Cd",
  "key5": "3WJns2zcFbuS58txyzM3rQ934EtqwwHjgE9c4uqM9uEndoQv16Hb7BSWbjMcE7F5CJw3hUpMsaD4wMQ4f2gMkm3u",
  "key6": "2TDUWktXSMTEr8vBWxyfp5yYWujHNaAEDDg1roeGgXJGrNubEHSkkYFfECspNeUNBGUCTGFr18zAoSKFnDHv8Vf5",
  "key7": "bJnn4optUHKoUShqai5rnsktG8pVRvTMf9TErjAHKRmyArPZ7wP17pFoYeihVsD3q4t3x3hFoCsBMimWpSTzPbR",
  "key8": "2Uhxu41p3Y7Did8zSLGvC9Lz3VchU9aSbxtiKbfa3F4jxjsuL1QaficzcwHaGEiuePAjxGNSov175JrLHgor1G7W",
  "key9": "3UDKvpioAFkmJ4BPvQHqLZkrr2VNtYWGEafwaNoEo34Cqi246hgwEipPVX522XSoiBKsKiCFqHp6VKuQapKHQRdS",
  "key10": "m8CyFPkDTjnpGvhCuRYj7vyb7phwxJsWkFk3CbmKbPzQPVVMNQZVURDkNvzRffevMejWVSm83TYnHSirgZbWS4m",
  "key11": "5bTVm3D3nMdRt8ZWoSrKrX1eAmpdWsB935CgPGERiXMQVCcvtfsFPtxk22nqeaXmC1ugBYpPygSH3dvAGfeDRyCw",
  "key12": "5RsoX1xXNXmTKc8HTDZQ9h3Ehr5opXM5KxCGD23JKQGFND39hYCdQxLHn5YdXQ2rmE4K1vLoJ8M9TTmGrs1Cd5Uu",
  "key13": "2bqC6bYYZr5ELFAhNVDrvSNg6x7cjaEyT44AW2fr1mYKTEF5x1fYdwMeDEheke8xiupJ7rFKXbTRvAj5oLiZiMbF",
  "key14": "51BZdEb7QUx1Gy39fDpT7aRrZ1HWpMpZjAMCDTYzgCDHzikif5qjsahugjYskFen3Aymqmxx5Y3akcrs8qPzqaqB",
  "key15": "4MhSn9K6XWfjiiHfrvdNguexLV1EiGYDQyksXjR5pggkKyohQat2yzwVPfCzxMFVCJrPefRqhY1k9Xk9DUX5PH2f",
  "key16": "2UGUVHW5VWab39brqCnDqaRhe7DXJ1jaiaUKSYNvGPEni9uVYoPprdHj4mKyxhaeCyjMFYDiBwpQ7zzz7VXeneFD",
  "key17": "5oX7EULoGcnV9WNLqGev72R8pvcLmNoR5ay8jYdXtL1jZCU2FFXX76Y9DAvFA6JqBaSbUUm78TNwwV5t7cvEx6Hz",
  "key18": "5cXzhfChcbs61tPbadTficGxfSfDoyGBXfqwyRbQc5k1rUTZXP26HCMbWYKi3Svva6DDPNWRvtA36eQdPuXEy3J9",
  "key19": "DaUzq16bxutT3njCVjUcg88sr4yBc6PVbfd8sWtVMnD4hMdPASCZQPCLRWg652fr6Dz8LdZrt9cPee352HiZfDw",
  "key20": "5ohxeZqgJJgxfFAgLb6vf6vMQPCpKE4beyhzKJ5WKGaeKqKhquVM8kF3sYQBVcWG8UEaHwJvMiDj5bh3Lm2ApRJ",
  "key21": "3jkmMPaDDWHTWWRShG721SMtNs43b3ux72uvpxa8HqvQD7VXP94pzYbuo94BQKwpxjkzpEaZ4yRYfuEXiALtqdAs",
  "key22": "3k2k8W4ASjeJLP4QswVvH4GtiGkrSd1vZRjFzAnTnnbLGbW9JyzFzt5is2ErPdSAY54T8kCnE12TuPbs8FsaUhA3",
  "key23": "4jQokmUyjgdWhXVQXGFM4Qn1PYX279tQw8cF7zoJDKx4QaRhxHe4HfRJpatuwdEQKqrbti2p1x1dRUP6JnrqF7RQ",
  "key24": "3JLYr2SkEg8TeFLVpmvLD3dV4w6UwYQGgdrpxURWbg2bbUFzLsocreStw6HyPsitn9JR4dmEYRvdzF2u8J55kFBb",
  "key25": "62pJwBPkJQRi9eSzBnD48TzohJGHZqfPfq3SUYhfLum3C4AizCcajGPthBMjkmecXVEnxZ7WLjGTioqdNBi1cUjD",
  "key26": "35TGtS6Be5C6k6MoJaBk2Ad9pi8rvifEXDBaCP1WGWRQcto7y2jEeC2yi1dU8LggEnDfZtUJwWEEv7hYe7XZY8mN",
  "key27": "48dewxqdeZHkUEEM7SMWVWVff41eJujupMzdBjp3ZAZSaa2V842Kmi3hJ13pr1a7UJWD55jcyfrcZLq1K9xR84rw",
  "key28": "3CfDgkEuKeHVxPHkTfghAMHP62paFvubSn8LKP4uUiq3j1XsyXekCcpBf3mW6D3atGGoYhmE915uzKNciTDfHYDq",
  "key29": "2csyDy8VU3Qcf2ALtVbLbmScZp83fkjTHtc1Q7sY8cEgwurGNMWSTes8FUVaoCwQ1ddBLrEnPoZru6yB5VV7vPAH",
  "key30": "3XiSgBe11q9TEm5cd16F9Z8Z7ZofjnU1sJ75VUgEmAowXVPeCNpnSahMztyVZhsDr8XPok51HhAivFvt5UedvDR8",
  "key31": "4zAYgX1CuzAXpoWHs9szrASpZESWeWj77cWB1ZGNBPHvcoVWuata2PE7TkcbENWMqj9KHQJ6Zu78jLLdRev3gVY7"
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
