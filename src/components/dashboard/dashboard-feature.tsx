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
    "5LvMDU8FU9S2A9kcU1NgP4nBRxMFu6LZESrExHDHAyYmw7Av4ZKvXrKUGpz4fEGugJSvd6GX9kckkQ5xByiCnFRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auNxe1u4VTFkGrk6pgBpDujLaQQfL1zH4QHnSASNVHhmZrWpGUa2aosZEHXaS6QGva2M7A3UteZLjrL1gkKxd2w",
  "key1": "dRw6tvZhqUZbgGLuKXz34Ag7h9FoLrCGnEWBdTBjLebj3C7UQYHqbhUSmXFuhKxUaPMnaqtsA4fXMtaEjmeom7d",
  "key2": "5r93oJRWtXGLe7iMTtuRuXaynenRt5J9CsG2yi9Kc4fwA5QLnvnsGQXfGEDs37T7WvVbpJSdFoUKiN8jo6WmkoqF",
  "key3": "5pswQAJ6ef2kctfhDmE38vyYaSY12hX6qFmmWHYMwLeEZYztgKR5Xs682A6FFGcj37Q6FWWMpbg3E5o5bAJ2Md4n",
  "key4": "yD48qu8RPrnZBCMWkhhiG9ayzr7PxquTrbDrduEQ79SH2ecozEwwt7hmaukRSwkHzGrMrKENaWE4t8sWV1Y6RT6",
  "key5": "3C2wkwa3owttGDq5DSjUPnsqwg5Dkp6Wsb78pX1jPrENyJvGnEvW9tJ4gxdKEswnyGFPuGRFeUYsi9ATmDESa2ii",
  "key6": "5D7W5W5Kjd5U91hLrw5J8FcKwhvjKmqwh7tHyDWugUqKo8Hojd4eX1JrKT5WZsw1eEze8zbukqgStfdhxH4j9qzr",
  "key7": "PNBgvxrM5k5thUQyo3pRSmo1LHj1xueqe3s5VKhQW2BqxkpLQa1TxdoJqgTAavfKVd6KjpyJkvhuh5YuLUg7DnX",
  "key8": "2G6jxP4QKVei9vuDnUzcRRxQm2R3d9fq9y1NvhcMp5UF6oszQr3ffy9iBiEWsPU1AcckdQj2ZNqL3DqNm98ncMp",
  "key9": "3xvmoDyjdvtewvreXcbfchUFb48MbyLYKLY35UNpjmUrNuAB1vGnYVN4yfVHD1STfoiBve9PqgYde5eXbAwA55Fi",
  "key10": "YAaLZCm94ZKTNTSTergHofb6zL1esq9s7XQR4GpVTunit7kveXTFmFL6oSu4zmqPGBm1Ft46FHSUxujJo3VRBKb",
  "key11": "25HkspdQBNSWAgJfttN1URWNA9SWT78ZRt7JHMeXcFVuSXejaDwmN76tRG4nqnBy8dARn3wPEM6JoQQbs1DvTRuv",
  "key12": "qzQUXw8fzNThb1twC1MrwGfjU6PpYy3EioeHn3GZM9zM18V9NytXuWy4GmNH31jCY6MYCPzan9nunJ3URUJmvTe",
  "key13": "4GoeszAkW8asuePeEmbGbVsRBzUdxRq6K62THPF3T2szdC1m42NkUarQgPbTy8bE2S9jqBVeVo8bYBhiD9umLPNM",
  "key14": "5JQAaLrfEij7girJhabmPkEQA4EB1ZvPtXxg9BukBDr6Zu2mAGDLo7Wg1hDjLfg5UEQfzTjs9G71knhWiEC7wgs9",
  "key15": "4qLUo4peFrSi7rC2toFTSp53q6axTbXDbJsJEoxyvcY614XTsMr1uMunYoqQnWz8HvN1YLaZWXrsfsryLgRobTYd",
  "key16": "1sxgNq2TrCeZGWmHCwYtTEHcLPbSgg3mijsoEzthj1Qs1v4AJvVqUq12wq3BrM5PxdFSAJAvvuRNUxM55zoi5cu",
  "key17": "23SDdGBMRDkn7KaQaUAWZ4X2ANZ1x9CPcZtUDCSBJvt98x4CdhmMsuRBphzci6AVuJkNXfszivXZWG3hKgZSCLsi",
  "key18": "2HwwpE78c4e5EDkvAdPc6NSS8MhpowcPveshfVq8AbZVgcscr1wuzReLBmXkC3CjBEpNKpH4VKBVsHM3cB1SJY11",
  "key19": "65UKMwZtpmtiTJGt5g2jPfQC5rWouPG871MLLnJYrwR9WDRsfpxehQgJ2iGPFq9kpZa9cCF2jQVyuetmqzUGFxhh",
  "key20": "EYqiVQUBaTB7Njpn55VPfGSSG55qTFt1eKHX7gRnnR4XZBbzkw1E1mwrsNT1g75BgoS7BsLmiV9wjFC8rRtUXym",
  "key21": "3ieCv19FbFQbj8D6f1FU9X9b1crtS76m4P3SvREWe8V3hcKVKK3TmqFmjX2GMmMwGN6sHz9Vo1ghZrdB5U8FMJkF",
  "key22": "4mTyc2YUrDtNVtAn69UtspkbJzLeqAQsiqceNKaz61uuVqtxLChFgn4gq1NKbJcLSFUZieNqHrEU9VbkFo5miHgk",
  "key23": "2BYqRrKtxRxR3TWjb2nkCcFr2kzYaFgwtahB2h6pbKgZ7C3EPw6DUnn6m5mFyfnyfK4Qwe1pqf8PRcZsT5hyVzqg",
  "key24": "3nasmPBTYnFjDRQSnpxy6HLPEcAp29cimJgP8bgRzC73Wz9jWr3fz5NcFYP6XdJkrxYbbybnD4oLobxaXceTRbbK",
  "key25": "TC9LE9Y86n2y9rKBPJeHWtk4EXz2NyrNgrV9zwhiZS5KCXUL5rNyt1B9Q1pKb6BAFhsDCd1Q6VvD4hZZUPH2o2b",
  "key26": "56bk6D8cGp1k4LYn9Z1TwsmWTQyEunKemyERMdPXp2z39YXASkQ1Ja97D3vD6MoAiDQbnX4JscQjSq1mpuvxE13a",
  "key27": "3NqgCxxVhd7uPUkPqmF9ez8vsCgwoWgqzYYwykMuyZg9QuBPhmnqXVAQHTCzbf6FemDnwuipnW5kjXMcPz3wPcXQ",
  "key28": "2SstA1oovh114b6ivK14jvJCqnZYR8QLyQ2SEg9czAkE8zcNGntyTBVKFBkcwS2HCVYM9p6KkUfZNFnZyo9HqadP",
  "key29": "2u3G7EomtdzT9iAPo4pRpDBgV8CmuvStrroQK8gR5YWmQhkVDXYgQNrUWyYVUu8pNHNg7L6MzDGUJFyta3GqAUTR",
  "key30": "3Vuycu8qnm7K5Bm6kKCQnpEGivLkHw7iHZY9M5CyVhqoupwUEPDFUm8GoTKDjrTAQtGDxPWSwghDuAWDX8ZBAgTV"
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
