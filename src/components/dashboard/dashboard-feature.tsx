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
    "jNs59AKVVgWmQDJV2THViiBq89sgwRPmK4K6MyjFpWVoGfRmRyXEEofsDc2obRfWWux9RNA4T23DRsqFQMoZV7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aZPktYiFDSopP51SYD3nZP1fEBJA4zPQqWNMbdQRHpN3LjAoXm1Uc7wH8CPkRppy93u9j5uDUjuRyHvYqDB47c",
  "key1": "4cHZdBjBPctyGxz4eWLTgzhNeKekQ1BoTS1TnxK1L93R3M2r1FwfBj8stHdNvU7Bgx6Tv4kwYwhL5EMaXTsXwqd1",
  "key2": "2mJAgUo1qKGjHhEhTCr1ncXjCcbTYBsvRAs5daaCqwLcdP8uKzcqvbYhRnkdrgfqDPs4uD9HSj1nctqWwBZje4yk",
  "key3": "3tmtrc7ViGSQLghbSDUCsAZfn63kJWxNVGi8TzbRwqgFDUzauFXAhXCDqphAiP2AcFgpFo8JdsDm4pVe2mqHhETP",
  "key4": "3rhtuYS5Tm6Ti4TxrSY46JdFPqcmzwcSxQZ4ewWcdkruyf7jxDsuyqKjyFQqbaM2KJqtPrzyHz7pWuNeoa4UE451",
  "key5": "33uMzGqk7D6eUWn5FrJK55kjS5K74JqYbhowrJRriWXafLxnLgwoV4eJpMq18G3Evgpy6iW9Ur9amDDU3zXuSepZ",
  "key6": "4uCWrda7o3hP47tbVkxEmtsUooGTbRyhpEgxWZVJ7UMBoSPcotM4ux7caEygCXHxygu8FQ8YMGvVh8BUqr9Jg6d7",
  "key7": "25Zma6GdsZFG1tMecPVSy1LjQKuXiAAs2dRnrN5ZDAnnijw8ctSMFzZ9ebu4kgepqgFHbTPWrCwGbYRDqcCwhH48",
  "key8": "5oCyWFWsKs5cwGbVZhhZ4XNMd9jLnHoqmzHQ8doux11rpz4yVQB9uQaRx8JyiXXVqRsP9rPB25Cuyv4QTmdZCJpY",
  "key9": "5seCPbVAbaeaShLJkL96dbf6eoDS4oGVT7EJpqKicHYCcNEtBemQ4PUne5NhYUBf4L3CyV2VYgh1vTMTza4BB99E",
  "key10": "5x9LJceLZ7vab7GJHtUvfdsUAkGwNxDdUCGchWneo3D4n5X4wm3HubAqyQ6TjMjThTrZrmzTbGMyFZ1GPGnPNN8s",
  "key11": "5BqRoDy9eGuqstmA2SD7Esdz79wsJfkAs9VLm2CnSAuiWjcpkAfWEU5cXG9pePBmHqPcRV3soNi55eJ6Mir97BBt",
  "key12": "zKzm4a6yALHVzu12GMhd5DNjU1hqm7B33YaoH31FssJeVgW8gpbt7SBbJLQ5QW5apNPJZ4NEPMRqeh6Kyj2zecz",
  "key13": "fCzkrCqL6HAMTwX7EmA9AKpMaJC6ZyUnEjR4ihZJ1jdDnWN3vBjNZju8obQXmB8gyVZnhf8ombjXmNfEo3AYEQN",
  "key14": "2ea8NabZookDiHLX3MhLZtc2oLGzguqVjaSmMaxVrmc2DdmPxUmVEMZ74xWgfZ7dGRAMG4TYZMYp6mhZgTAY3hSd",
  "key15": "2K6HnzhSz511NcsipiacFwRDTTYHznWXZLb6UTTiJWtAinAy5qQih7uphcDu7bghQiyGevZZ6vmpNRkikDB6SFgf",
  "key16": "6vhzBpS3n2x1FS1wjeQh4PnpHBpew3h5o4PvGERR4P6wZR5dMkaE4sGwReRDTddkcskzPZDdSLSe8ZroiBv9gvc",
  "key17": "2vqfqA5EHpdCWGPxypheyGSYTCysRcVfL1RAy3ka88JrYxtttaeF7jzjSgAgorghQ2dox2bLKCD5k9JFhnNWKhPj",
  "key18": "4sM9mqLDrLvKPZs3nFewgV4ZfT9b42XX3cFVTbYC3ET36zfDXfeGm3nJUyGcKTS4dher2gnkynSXwvjKeHge3TKR",
  "key19": "45Pd9Mk2Bcr55j8gHYVdxq4yPYzLD7PrCnattnFaUFQseowEDaqSiuyrkKEEeQm2Ya1aD4KRr24sbaaD1EeTF7mH",
  "key20": "35Yxi1VkBXbqohyu1MGZB3txU21r2SGMo7M2jxAY4au73by2gmpp7pZiSzi5LQu5QTjHVNAf7v9U2G1pio9BvvjF",
  "key21": "4dof2Js1FBrM7x65zgYJAnoWWWXCtbmfEantLVqQtikDKkR32dH7yA2Zh2iqSrV4dKKMTF6RLQrFFqEawG6keZfh",
  "key22": "3muFXTaqDTE4sjfzRXooJXP3bxjcwgECzpemRonATVW6osyL1Bq3X9BYdcrrFwvUSUD2FfNcjoRCgegXW5tBotpn",
  "key23": "3urmeRvYbejdcB5XuCTiHJAoRdn8Mpn7bcSE44A9TcnJuRsorkXHHCNmgsatbxaT7MZHHWaypwhJdYMApNAt6VB4",
  "key24": "2VTzb1B9CcLbhwc2GSXMkXvBxD43Qo66GvrHQEEgj1mRmY3DcHFBXa8uacZiVPgaY3U8mvoPkPRmjzTG3WARKNqx",
  "key25": "2AaVJwfxYrgmWEuoTNuYTQUY7C27jL1k9aXAbMdX5fGWNKvsaBQCbfdoK9eHJ87DrmizNAJ7aFiiGj6HTKtjxD1s",
  "key26": "Td4JKbGa5ppUdLgq6bH7Gn3aQt55mA7uqgUQZ7JyBDaAzLhtypKNdP8Xx134guedoo1KdCpeWswAdYvUkTfXYiv",
  "key27": "3abqA8k9QQbf9A5ACS41nAZNUgHkSU7dRVDrXsa8vow5mDYLjCLaUia4hTKLDyrGsSADcdJ1ZJtabHm5qpa7ixBc",
  "key28": "hrbFGXjY6AeUQx4cWy41hZP74tqfBfFgFG1fSUAesTSje6JqkrGvfuHRqRkUzjJ4AdqyesZXdVkhEzEf6PQ99jM",
  "key29": "2jNRXR1M7am5npjRHFaNdEeyBEDebmNZDFR5eM6w4sDhkp1MhEE9iD2ov8CoqVRhhUi7oqLdSW9u2GpFXP9sZsai",
  "key30": "4sswT9Pybtui8vVLeaXeegyBgKUczfgB4fNFcVr9dyrvypEri8qcJsgvyC2KjdQAXKTn7V9yYZ3viB9oi6vPoM9X",
  "key31": "4eqo1f4pTStoSvF8rMnRfpfZtG8qy1cCnkDcJuWTDZMLRrvjSgoJfJtfzpmKQVn8h8tGDeFQa3537Rq2urMGxn3C",
  "key32": "5WCvgsDEbfSzARjX6SuLj12GHbfN6ZsBwpbVVbXXRenjAjLVgHDBzXpzrkdMbHSccaNZg2fezRP3s6a6d2RDvNAi",
  "key33": "KFRPKcgVp1RquBSMGDi4NGjYVCc7QXzpDSs9g8UY7uiHHiWnkJkRsiC5HXkmvUpioUPzLFo6NzCSKsGiASS1Kyd",
  "key34": "2C8mMFDArP8KNpgPWusAYAnxaN1F9WPtGHuf72hfGXhjwMXn7c3PbRgb47M3Ep9HXKL2Ewxtho8KPtm5Wdp6siNE",
  "key35": "nkY7n38GmCHMinGg4pmHL3goNJsfRDG3EF4CQhWFcdjo94fMfWAEwqKx34F6WYrziQmrNFK4VkhRPWionAetofo",
  "key36": "EsLoFssD3TPrPKGzBwDufEUKD7UDbrTsjRiy13P2N7wjc7G7RqRtsLGu1pMpAJUmdRCf5QM6zAiR9os93gbgp6N"
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
