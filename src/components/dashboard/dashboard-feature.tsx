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
    "4wfW6cNfjRQAWenoA9NKkKtUpojBrfBjZ4dHFm5F8aKKcCXySzvvTaGu2e4iDZJxeiHM7B2KRCgfLD8eFCo2Fur9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uw4RaBgB8BwVafZK2MfxUDB7yGgPSGGU2jSZULiHeYg1LWBwmBLdn24L2HfH58w2e5GzZpQL5nSWpFzdwNnvumH",
  "key1": "48tXN1T2DgkFqPKHk68AU8b1rb4sUJETFajouCqoaiT8bPkrczhpwCnSznT8akD7A3h47p9vUgaZby2AuT3FFn6B",
  "key2": "3PKVZNmW9qARCa6uBbekiWx72AFiVqeXUBDNJsvpQMsuqmVNdhj1CdPJu5YwwAvhCs8SVUnZ7gWNwoGjdHWn1cx2",
  "key3": "HG5f4EuzzuZT9pg4FJ7zS8Uyr6D398PvpsFhh16d9V6RA8vjEMvSKsSPnifShgK2CQ28aLH8i5tcssGXfqX6XST",
  "key4": "3ZvqENLBWb56QUaLZUoFQCwai9tBU2DmAK38RtGbtQvasmMTC132VwRBj5BAr2RLoCs7XJbcnWhzjSrc5Ft3JDSq",
  "key5": "3GsgXfhtsgH8AGVBYRf3zF8FDvoSkUpnL77aMhkfkwxiX2o8chyZp8weHRDKkoZeAWRe2DizAnxGypf4573eieeU",
  "key6": "2REXyjV2JFAGzxQVjeCtxd7SpC7gKNjJANE8NkWP3ro7WnzAaScpUHKEzS1U4MYDSxRxNxXJ1BojFLqk4hvzU7gp",
  "key7": "34xnCE7s7czDMu7vX8sAPe5ynXszycGsEwdRLXX3nzuRH3umzbFRBdyiGLecVBNcDdo1oxzNMRTYHs2i3zXNWbvD",
  "key8": "cxo4ct6AdjLYeAPYZVwJnt6nxi3yuoDFa5Vz2kkLWDUzqRFwLzXP8xZXbiaXSwSYycT9xCx79j8N3VXEwMYgRZ1",
  "key9": "3GGgqTPBafBiFmmc6ynAfQ8LJBnZxVoAZqbXeqTJyHAE3iPHHJVCyBh3zGXickjtnbvte77iYToXXvDBjqFnEDEZ",
  "key10": "3AY3ayR1mFvk21D3JKEXJKwT6W3yyN6WZSKw4BQyActRiMBwpiGRPy6Sabw9a6AxXpG6KbT4DanSdqHQTzMoRh5w",
  "key11": "3ckowp92WvWCwdFknWdg6hdAf7wJE6NTUftngrBT4U8h4sNo5KPnhNug4Csnhjks18Vksc3WZ3yvd3SsU4LvSwAf",
  "key12": "4eXmrK2nercUd3FW8g6LA1Y9UxtM1P5wDf9zqTQJdR1cE8BRAYkEmVqUwds9Lj3BL2jb4bVbQ79dsFwH2wkoSLkw",
  "key13": "5Lqr6QpnGKWT4WPkj5RSrv9RFteTXM8euVTqmB2h6JKWdC26aEVVywxXRL2bygZQRsd5DngDgkBq57M5FoivDKhJ",
  "key14": "3Ss17XWfnWdwKAjGVUctKNrHPghx8cfAT4fv5SKyiSmiuj3zpms6LYym9i6JSuPSM2m33fXuvtmasT9rwo4qCAbT",
  "key15": "3taCN73YymLBq5ctVmJNEs2VymvaVi49VncXA9pLyzrRRbrFgx3VvMkQ7S6TR9jaf9JmZfmLt2xuAhq3CmPGxoNF",
  "key16": "4z8HfuQbQVN6tr3PBCheCQLApAdEsssJGGv6NeAtf9wTLE1iZhVVVA8nd2kFik5tfr95GYih6GegEJV6E2D7wq9n",
  "key17": "4k1MtkUsB4gyd5wgaNwt4GfBo88RAPt2xrM1562rHQHgAKi6WnrSNEGB4YDuMUgpcPfboi9w92dw3uZS4hxaXCBm",
  "key18": "ajBXpZoDkMDYkqwWiXx77bXS6foJy7wsBy1Nus8J31NrsMTUJMwqk8NQnuLhdJkL8VVMuW7S1eJLjntjGMbiWDP",
  "key19": "4RjQusw97mrN2TCcomnBXu13pkjndbeuoHAr9yhpe4tsthJpyHNUAX2stat7C2VyQwGeCzTUnAs7b3ysLPfJA8rh",
  "key20": "2EA59Mf7dpkmQ7uWo7p8PAWGmeYD9BSsstEVdx1U2i1mKRJc7R8cCGGEzEs4fiujjaJGasehA9aLi15jWTaDv2ae",
  "key21": "5dkxaCcMwh8hByPiMdL5g8yJnL5TMBQrjHDB9wdm8NbdMVNDxLoSs7DjxbooPjDneE4LvTW36GFBkjK7qZ2zHDRt",
  "key22": "43XCXnP5Z2bs9HzPCwjswTmqUqEBfHo4aexF5fKqnsHswgKAHUjwhRUSBVdPWkUSMbdpi43oJYknZsbdAK1Vjzpx",
  "key23": "CfjWKo7Tgo2gVwWfXrtnNtCPkJqJ3QR6ivxGtofC3bXhuRo8691UfypN4LD2xm25kbiGf4cL3TnhDvwYHukHN84",
  "key24": "sdfNnbsGmRr7Tk5HjsLpCi8WA72r5BqS14YvgpCirfNbHFVJnfQYMdwJCmzcc5SG1fRxeruqDCKqYeGXjwNumXY",
  "key25": "59AHkKCR1CkQ9ftbwvFNp8PKcYMbz5fYQ8fjThGpjCfjaqt7N5UwE1Bf67EycXx6dUq1mgWEg7PNpe5iu3r4CMNB",
  "key26": "5YNyJ7E2oQT2wVEi3ro1eUXasQwmwVNVURn6WkfiAf7BCKo6xzJY1F5Wx7PdpQo67MZM1fzyxngRWyYSRHM2N3v8",
  "key27": "4cw48EbkQUa63HwU7jJhpDr38xyPFrFMeegi2CEgupkrkcJeHL5FASpJGutaZNKFNX5zGLHzPohkWdJWj9xADyp8",
  "key28": "2y91AXxLWKJMXfX5LrG346Kmddi8cHLPZroxxGoKw8KEGGaTzHLo1mJk1H1pNiPRh69SQm5pwWiAL8f89rMDgQjE",
  "key29": "4CMD3GqjmvXrXZspvcbki2iWCJZ83Y8X6KvZfukU56d6A6Jtw5ktR3o9tqkYwt72PzsYjwqPRBsFfKjrVY4zpbaU",
  "key30": "5vAFd5u1KeoeFdhbm61rDYtEVkKr1znDoRreUcWg3xb7Rx2yvKs3NdbUGRhohJMb329AoiXYCNUwhJm8fYRf7eqS",
  "key31": "2R8mPMmpYhVshhuWQWBbma5McUXrfbYCfgHfAFBTVb1LqAQtTyebBTqjqZfcMCCWiJSXraWvv4idergDCV21tVPV",
  "key32": "1LYNDKzEbuymPAoGeid3UWFGgnELpU4m4qNCEYtmX4KTyoU97aV2zrGsQPMRoicYKqmQBZEThtkfUXTxSHgMNAg"
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
