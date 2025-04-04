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
    "5nELdMCc51Ch35qWSyrLD42WnboRB3CkCBQaT68TcD1H9HwdeCTLqAeXQdj9gfQeWit716uzTG41kwgdo8pBPEkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5vnjU2oJJez9MkM4nBNkMX52oKMGZ4cUDzRoCEknxYFhrNWE7KH4w51Gwr9aAagR6JQ1TXG8wRNaa2RVuM8Q93",
  "key1": "3hguN6rz5pm7WGT9CipVsWtwXw6PAGDZp11fX4wdBh5SHUFynF3oGbfJwfy3mJdDeVHRQCyBAy9UjEiLqJpU1Bz8",
  "key2": "4RMyK6VaLYU7N1BhJi1yAYtSFUV2pZRFVMGTjFSvdP997jHF7fyuyPeZD1suNF6hVEN9G27FNbQajGXYUGzuUhcz",
  "key3": "3voTkzwvsxyigVXYsXKqdNrQSa8mqedwaUMa6bNgXyHLLVmUVH4dfZc7oeo7NFQqvGRBYAj3Y41kBebTf2CJNHEu",
  "key4": "4gqvWyFwEmaejkE5x21h1GWbVkmM5bYWbTHu8yzMKvXmbqbB1CShrAcqdVNEARyuRY6X7TnVPQUmqX7Zaz1RVUxA",
  "key5": "Q5SvJStistFXsL6TTjL4icCZo9u7fyxj5t82xdYiFXV8yod2SUp4sA7tXHWcTqSUEkujvTJX3YfYSjGz2riri1q",
  "key6": "Yk8fdBrCwdRXoYCFXxSQTzqeDiDpbK5c7zrb8JiqYFWXCMBqyHksC8bUf1KBw4AiD5R1KMeeUad4iU62kCUJEC7",
  "key7": "Woct6rXXEwKHi3W2HwZ8JbnsKaSV7dV1KEpsRwmyPeVr4UuuM9at3cD5T84hcEzfSuWszgNqKDGJ16huk6UprTG",
  "key8": "4S9vS7HpnWzNJYNm3rVr2pypF8pBsiq2kWy29LRabaBXgyoveqKLjFP2UuSRtfFzrRHQPYaHbh42rbMU6BuRUfrw",
  "key9": "6qzzsyKfQY6wBnvRZtiRj3GZDfjMyB1pu1Qe2SRCxwLqv2Jno1Hfwy3JW3AVmxLzRhivjGy6wt2mxasPNFD2hMf",
  "key10": "4VasqUW7hPWGsXSgvCPwsr7HMYrWjMGGoto1WwU6VsXq5skywRRwQCgW8PojPbTN59gmdStkFLUsTCAumt2pjfmC",
  "key11": "5m4gT11SGKMJCZmzYUfv3Dn5fPdDvEd3BXJL35QSMKCrZiEmWhJeH82vzFwGfQee8qS9k6oQ4LejfbFYYGRXPngv",
  "key12": "21uayKcFnqYfT5ob6c3bDTrFewrRzzwWpAEtLUKoVxxfanSbKCNC5LAS5xRA2jyYtnEzhTLyXigx7bLTBSue2auQ",
  "key13": "66HBX2jkNpr9XYeWioFXVJGDhH6K14n39SxVUeULPCJW6QYxQoARJz45Jpx2Ua9KJEmGdNwGfFL1CSXpzuRYa3fJ",
  "key14": "4zZCavhtd6F51QVdJUH5FmpuNTHYCNwmED8KQq5ZxMRJTfEmJKPcpi4Nx3bU2imSZQVygmMtRt8en4msMjfenqh3",
  "key15": "41PbNgiCpYPJ9qAHEnHEiVR2mCUH5wqXYAACyCPQeEX5pZLBr862dXTSvrwf1ZYkg47epcWPMks9QeHg5ZaVAk9L",
  "key16": "5DzRmnBf8ZNRyYJN8buexHzpditHo5aUAY4ejmBmjU2zrSwF32GBcwu9LiedkUUrRCHyLkcrZhDpbCbuLVagckYe",
  "key17": "2uBAsATic1NWjajcdbNRf3m2MtpEBgfjRsDZ6FooqM56eUU21GmSozJyY2GFpHvZ5hJ2r8cyUAYJ68D56We7KGRM",
  "key18": "66zzHpNP7ePug78cuaisGhoaDLuCqMyhn6c6TMB1oborjmQpm5YrMWXebGybeCreeCyzusAu5CnDjCUCtFiFMTfV",
  "key19": "6Moz4nXYZd9T9RzLKGMuocLEst9vdD7xNRXfm7H45dLYoePXwQdEBbu5LucxnFQvAF5cP9TXwKzKXJ5j4fctLXq",
  "key20": "2MMNn7vk7JGncqAxJQs236YDnxApYxxWmxMZXKQUnsaEjWLbQmWPq1r9ex481pN8eSTVMGJnwjpmoJhN64JvgBz",
  "key21": "3wsb8Zg4VuQkimiQ9bLSxhGt7sCm1nT6FfyK5cVhxrUeayK6MuaH5ifEk9HcSihtNe1Sk1zBPtHeqCXAAoRtsh4q",
  "key22": "4SgW4S95pZX3nnzZ2wyHGw6kh5mES17UUXDare1VsKCA2GQpuzKhmT2fLezT7Drfi97o2riJYBEpgs3iqqtVu7jQ",
  "key23": "4qYVYaEsvD588P2cM65Ujtk15uEwx7LPxGZxABrptH599DmLhqC3jztMhVF8YeVkLy78QkQqXhPTP3oCzcC6Q3GL",
  "key24": "JLEuhgC4RDrJeVzoRdphZVA2aVz49vJt1m8rCjdFA9TsUnJfKqt5LUMnbqgirjrmV1JZzdh7NjdZx86RzHMWLyB",
  "key25": "Q3kivTgVEAaDxfGpzX1VrRAbaRz291RhdqLwfDsYhdEMBpqyvohgWD7Wac54cwWVLMMbHGmZEPjiZwtLMM17Twz",
  "key26": "5ywFdXjRhm98Q7EJi8xmgpwhUvEbExyDVyBwpRFmBicaGAXuLyYfkbTuc5fggtqeiPTfqf3aENFCQCprGaA31VFb",
  "key27": "4n2AzbqKmEHXjrLTbiUAsR3KDSW8LNdFpZAnFPqtuQRCc9UeByM24cPbXgh6mKCHUjTE6JrEXY1inQCSrgmtGZM6",
  "key28": "4VxPiaDHyniVxVyfFbZiDVEnj5hnNpJENfymq1vesNXTjxUQ7pS18ntmRTjdtCngsAvHNNzvhJmnroksN2Z5Xh23",
  "key29": "8UqttwJJAWwgfDr9T6MSqLFLc4xjysXHiYv7dmX8duyGokjujrtR9rq3kpSD83WEGyjR51aiaHVgUpmfdtc6ego",
  "key30": "HYPFfcDHXVhyJ1XAAVVfnEQgYMQWBrgMRw3Nsi49LthGwkJ97iD8N7PPKptDM8GZVKZGXeTV5GLd48HHyLdvYfS",
  "key31": "58AuateyvJ3RmJrPmL82tzNWqSLnjNTbjcsZ8jyqKMgUQnyPVUeronhv1j4YxWouWpu3EA14UQuzQCBUUpa6Mims",
  "key32": "5a4YGGFCCHbTyhghErxzN6ffFxJ9XSPVcKY6nGFKHsm9uR7yk7R7vgXVKrENEZPakCFCHsxKv9UGvMnsREv3teaq",
  "key33": "4s2ZR33Rf47argTEgfoDaN1gYE1SYuS7H3FLT2fkKMJousKW3uww95KkcWfEfUsfxUjXTKCpzJdzqJAkWGptc1S4",
  "key34": "YX4Y5vT3jYHrBvQDT7RrpT1W2kPn59R2uzsAJ5R7T7gZ2GrhAstqbxJpwKTgh9YhERWWvdzU9fFvmTenq1JiEer",
  "key35": "5GZeoCaFwM1yzwxGrtRuXUksESm5dtaKUgJQDNxH9rs6opAQWQZTVqgYcGEMLBosYX77ZNmw1YP9qDY1q1Xr1cnR",
  "key36": "5x28ZvPKXyr7QwpYYUQbRHfWMrz7XPr3u3yG8qvWQhVZ6wX5oMJn1bCHUtKFvHZM1XZkJJiPhTnUSYyMGBrRRZRJ",
  "key37": "3yr4Dw6jTTbPUXEAdUJfzSVX3p1qsNtBoa8dmc2DENhAuApYt3NLdKFVJr5oAnHotpMTApnEDmCC8rynFsYV7yiW",
  "key38": "umVBwLv9HN9cR25BBmk2yYBrMvcDdU8dez4zSEvNPAiRXnw2ZB2jrcLf3wTdUrWFe6a1MQGnWaxtCcBtuqukFk2",
  "key39": "4QjKXHh9spCLeJDfb2pbtEocqxEFzYEdXKiggRR4X2DSYa6w4xfZRM1fciFJW8qAwSfNEXgVxVTK8CA2oxuAX2Xw",
  "key40": "4HUDym55a9BvpZPc5mxqRwbUfEfoHUyXEP8uV8sQKazrFjw94TxzqXD3zxkGNt15bjBHmBJQRYgBt9ZqzycbbLLn",
  "key41": "53mC2czFugr6S1fmTfUK9MxW71aaP8cNP6VdQki8bKFNicLHZ6wRREhfov3xGMa7Qnzkuaacahvoc2ctRwPtgVrj",
  "key42": "3kwamkpBTASUvEhahYrwi3UrLaQnpRRRT13ivo32mEK9iixNDoaWTiYLcYCTZiG578Bz5VQ6Ke4eoagpddcyPhaw",
  "key43": "3KyTT2fqCyo6rZbLY5Pd55KdqLZrqqPmYXMqnNQjYxsQgybCfnvJT75SXn5QcqZW9zikZvurQZFcvAretEFyHUNF",
  "key44": "NsmDVPU6wjL9Q4vahQuSnebDYTEkEh2CS1hEy6iqP6xw1RxiYVTBTdqSSWGrdiXoF3EHaZX4jGXws5xKUXp8T96"
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
