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
    "3rKQbwNoFZBTDWfAJXf72BPA8ur9Qtc1vnLARK2h9hWtAqi1JsERqp2hPJsL8j4nuC5R6ANisvEnNyRDyWweUQNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvX4mU62Ux56A5t5Z6LKMLKeqiPztV2qxgpj1Cebju34juuMQaUpxXxpQK9zQ1wbehJMKX2Rcf4rRXQx5ehvtUm",
  "key1": "5dpUnVAsxZZbvG8D6UKqHnfFPYzG3SLwJBm9ofpRbHuDELuUJPdFqZJGKGCdGTJ21NVkh9BN3b7y3V7fXA1AhUaa",
  "key2": "4jki2SMbVVytvg5L8JqQj5ve3LEfoRHgZBKNPShPJYnfUucJ1zm6Yd7Cfb2N3pby2Q5qxw74qvLNr23dUUZrUUa7",
  "key3": "4vyqbMxJvNX7B1broc7yCVVdRhyB1SeR62WkgNH8NmP7CDieNy96bJGZqPzwbFczeQkzjzv1aDRoMhaMTQmh64Z",
  "key4": "46F5hQ9VLitgE258GCPjcio3s13vLE35WdYsrzpDcZx8ayh6iWtkajuj38hcyQXT9MXCDtaTFGACN49mCf18XW7v",
  "key5": "47SJNenSXD3ep1NXEDxwmrhh1HWeTbQ97jksTEPYuGPxSF3AqoJaiJBPYWp9CbTuqksuuqzjJ6ncaRFmEEsUPF5t",
  "key6": "3PHwp8Wk7KToWCS1iPiYirXox9zcSm5eBvfrSjpTtzYkphTDnviBqFWZYtyhF4zatZcCYdaRiixyAwV5aGS2vFkJ",
  "key7": "4jQShvGQtx1vtQe3CfwTpuoW8Hby76iuRmavtsEMkdN4YYJ2MA8VaXjMed7hNabkb5kcXu9AFncYyED94f4XxiYp",
  "key8": "4M3hM8d7Rjm7UWFLkhvySihCLBHUvNFSXTcF17RKk5W2KjbcqR1DqKKzVFUppf2x9qSMUx6gA95icFN28rHbh139",
  "key9": "5PJvgtxTebDXbZTQfDYpkkjks3rANBULXhS8rbtqJq5hduEbXfx5Bbud1NzvXcTW9Wweh1NEcYvRHV1Uy5rdcqWo",
  "key10": "35wSzkEJiMsZoNtfo9TWyLLuedjPLtuxpMHwdQi3ZmxccG8r5KgwoGQwp7uR5wG6MskQi6L7ccYzGsLrujeDE2V5",
  "key11": "65cx8WiDBgcszkfcuTkFnx7fNXga7veYG3Jt6SZF5m2fbdXsG1hXbVpDovoKDackr3RoMk3W6xsuo29ZLnntX2Je",
  "key12": "4bSnwdeU6FqZajXs3LGNNhgvyCuPxz1AU5RW8ryF6SkLraKrgv1ehaooe2uTZRA3MaAkToqZvQQLCDgSqvFJJQ6h",
  "key13": "2J2gaTFSbCPDp4w2aWMLkt3X9scK5vhp9J8m4whF8M1bCNbokpqo9L7q6WF1VbwQVSMRtXBRVEfPao753s7wv9W5",
  "key14": "3cnLhukG6VhWMqHwLCynuNgis2ytqkrzQ4v7oQqbuScjjhnJsM2qFbpmp5rdNvw65aSY3efLQysKwarXzXafTb7a",
  "key15": "88c4tjZB2fFfGN1cKLqKdfrxkoYYB3RpmFPxRMe6u9W51EqNiAJxix9o9RAaPnLM9QBcXSanjEY7iWbHNvQDSCg",
  "key16": "4Q3Foh6ChFnewC3TaGU9BPA7EMjWRHFHBaytj6FpXeGt69aUjAto3PZYji2R9b7g2oPg3Ny4m6K49hpqXBNE7QDD",
  "key17": "JqkLJ6Z1TxNxnDoPdbAcdY21Qxy1aSDE67p3UyPe8qkZMqFuXbSG9CA9iLLYo2ia4iJYWuBsxWUGUdi2j4a1Ec7",
  "key18": "3v3Kx436mSMqxFZ8ZQBQwwQXFmGQZEhKuUs2Aij1QQ1dWtCJkYW3GnmHmQ2yCo4cnUsYXKYCWn2C6PyEUdajr6iV",
  "key19": "3x2HMXu5M5Azqs4BSpmet8TYjEVKWFJSt4V7o1oMFGVRzLDfrJUXM3414e5ffPhyo954GSpHpiS4HxfygU2xBy1a",
  "key20": "2WgQ1pMnfSLY1ZNt9fCsJ2hmvksQGHb9d3y19ucgL4MMAb8ZiuD4fvMg7F9nbczzJ2BhQTwnjY5Zbh2Kxou1Zfog",
  "key21": "5bGsf68JzbuYNr8X4Rq8PdXLtUf3vztH4hJymgF4mVJQxRrc86h5nFXSY84xXA6p39W8jFupkKj6xxTQcDwwt4zE",
  "key22": "4FnC3uGo3GzCSM2MrLTZnM4b1iyVQUBM485jouvuNui19g1XzSXZRduTB9TfaVr1vt22CEDqgufbhXX25T9EvLfm",
  "key23": "5HRsQ8LJSxj69o9FJCTbywWymPCMfFHsXDrWrPzNdxUfaFDHkHBaAiaoV7Ao5DCo9bvznjzhERArRRQZYUbjZXkt",
  "key24": "5nNhQ2KTTVmy5crXHyyM8h95pUPsLtK1HAN13g2CgnegHvw492eMwAfkwLPGFgnVrrwfVB3v3xhPo9sXrAiYVCVj",
  "key25": "NsdHFoAC5DYC8eRUjFM83jgZGfq38RpzXGqeLkg1FzmCDWmhR4hb91G74o7foBuJSqsUSAebnn1F5o2MRqduWQZ",
  "key26": "3tahaCxZ3LiwoC7N2BoR49wYuQzyRGo9VnXb7t6yb8sv8SWsVSWEb66S6RsLEYSveUKhTkNHQf5pqeAqKpyUBSNC",
  "key27": "Hf6zsQpZXBXxyZB785ZJdQcSfbFPAcwyNAm2RkmDA23mvhJzPmTCVcvHf9B8E1FHnPyjEGPYipWxGnS9JwsyW26",
  "key28": "5KTyVHzQCFTxHj95fTW7SwhMSLchhxTjP7eKfzrMTJNmw5xHsvxkCnSxvNGAwPr2s5WKVNn3d93YTBzha3vDMcG7",
  "key29": "5e6TiJiWrWSD2PLTkV1bu97Dnq4gmoMDGLvXzSLVNV8K12SS1LQq6r6qLo7McoB6tMbNxMAmBpmncvDpow9UQBuo",
  "key30": "SjVLXPNXNYEfB7cDZgG67ZHfkjtay1kg2DUQiSfvxkXYUve9RPW3ZCLVKEHSpkTwrHDkT7KNUAAV5HV1VPg7oPb",
  "key31": "5dDYMAxiiwz5onSHbXKVPGiccxCp3CaPj4Mdwfjcbf51UUyA8j3f5nQAKXRhc3xozy6cMyL2gQFQgxmANcdXMP6Q",
  "key32": "58WTx5zg7BzaNRYvcmiF2bYC1qDXdKGEGTnbbNRHPUujLo8Xs4whKbBXs2g8zDCfJ6kA6L3gLJyZrHWeep1hNGho",
  "key33": "qdaFRyUt3BSdFAB7qmAimrdcbBQM8Swos6q9qicWbkxfeTRgSEKTa7tnkjt8tGyRWhmA4U5FC9TLmSTCUhM2kQs",
  "key34": "4hBae2QD9697dRyrKkYYUHKLi8LEia83EBJGJT3gSLJbHb1X4nXMzsYqWuPyjLZCHGetfpg1SaQSe4vzSLjA377M",
  "key35": "2knHWTkju4oJCHo6JUbyzhBaRK6W7jykmkBAFbSR56fWQ7XWu3UyEgJg7wAiUdYMenpZeceYwNUJDrfpeuPB6Dam"
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
