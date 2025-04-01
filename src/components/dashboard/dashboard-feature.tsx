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
    "4YrBT38YXmHscWQbqmnhrCwPZFDPJuphQBBKwiU5RXrXtov8e8wju55HW8QXU64au1VzTUyV6MVi81PEBcpjmjyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZY32P5KALZMMDh1LXbYzgQtYALABzmsK3fXZgm47eekjc9wgFwszfYhRMYoTXaHxwRASsusr6nuR3JkmjvJPwE",
  "key1": "5PVgaWJmcKAKfGHioADvPsmMVwQdcXSRsXuLUhmLeNaXJpq2baWbCnKBWgFf3w1H5Jx52Wa1VM2jJrHCt3G5jfr7",
  "key2": "4bHdkD7EPoJU2CgEXJu71LXgmL6nnuVAdutE451UDENMWQ56sNdAmCLSvw4X7HmjVygBEsgKHtm5NfGQXzxtPfZv",
  "key3": "4GJ5FqFpEC5CUQYGWr1afhY9cwXvhAncbgPvtk6UE7ReWbzkLTZrYefw8oxRF3WKGjZ9WHyp5kgZvRgJUpsBArkX",
  "key4": "3JeZSW3U1BsNKeUpxUM4YzKsMLFjdWV6MDJMF2ko7tYv7r7jmqg5Ff9h8eeYkxni3Eq6Cs1TveUU6ajR9un9WLK2",
  "key5": "3fk32M2Rj3bpMhJSyAs4KRBVFg2nFveyGf3TQscmNshYaVGemEfDaiEidr2LP1nLdH4fF7zdBdTsvs8Yzj19oqTw",
  "key6": "2R864sFsKN2BxT6CdQMmo5X6WM2Q2k124FFFaH3bSoYHAFzUXEeLGxZFwVdJWTp4BB13JB2unxgnR71xqRFoWhep",
  "key7": "4kL5dMJRuWG32st8tMwCTJU2CV3UT2hFqp6cDfLWh73aYS5zRoAQFLToPxTEuvfzNui541TwrerMHXCKE6DupAH2",
  "key8": "4H48Z4oY99JrMqNh5ZRcwQQsjnqjFUCJMtS1RZ4imB7QCqdNHbV1JTkdGY1qparz8vEFY1Xg8PTo9iFcmZMctAdw",
  "key9": "636WvarEfxDNkAzwt7etLnyS32U5X8A8eYGBpsWJnt5N71JiNCM9TLGvbwgJ4xDQjqgn5Kpj2rye4vS4rvkoDKMX",
  "key10": "2NE3FsHTXhzKBXKSzV5nE6mpqk7H3Pzy8wyVq5sRDVoa3wk59UycmWitpEaF83ke67oXweR1iR7ws4f8iDmuPvPi",
  "key11": "5urbZGNRACtwnkCtNvrsgBMmH66EDt5VbPTs5MwyoBDEBb2WUsRuhCYbd75VFg9mnE6BnaQLiZHEnXUxKJk7mPKn",
  "key12": "3gA4ufP9X4BxocCQzCHWS2UNAc7FuKAXnkeWfR2wESGZneCoNy2EGV7XP5ZiQLxFGkdCjgPzqMY5y2tiPAP5WCQG",
  "key13": "4uSKveEDRBkWW8xRGy4CsPYjPAQaSy9CCq9R5Ugj6ow8kN3vQoC6MV2nt3jr8jbAhEtVjXnRgthwHgmC2vwSUKMh",
  "key14": "WMtfuBKJ57NSLJrVg4waDfHrsd5hsiVhqRzw8NeP3wHEWWNvkumW8gRVNaUch3dVozesdxHPLbR2XqoPkjbHM2S",
  "key15": "49dmfq6P94FZurzWvzLsAtLMadHCJcpd5AbGsjMMLxV7yyj5aUZFgmdKxoZDT2tENeExWheDNbjzDTZ9Yimdfh1h",
  "key16": "4VktGFVKtfkgALcMkVo2ehCZf89gRgo9KHMHneWXPDJp4oy1e3t2vmSSZ7a84jatjq23WCmniJnEwGgeR6v78YaF",
  "key17": "Kw657Prkt2JQi87CrutjCjDmQDvxSxP2su5x7DpVEmk4UpXkJ8DkqaED2pwBHV1XWtsTyVgzt9KCbzmerUw5jo7",
  "key18": "2RNRzPAmMtS5W1ZjChiRGBWNjSH7oNBcEpMYoJbmkPvycX3xj4wMzQGfLBpBPZcjDDzo7tYA28sXSuRmu6iFe3ke",
  "key19": "6dc48XCFYgmvotayLDW2JWDRjGoDKrrRDiE9oDjHEjvFZsfPCYgGan2aVKJ3LybP45gd51pDFKgX4yx3FU8XSmm",
  "key20": "5FgRzgpp73iCr5DSd3bf54kmi534bBHt2jesAyiD3xbftr85WSiPNUXgmpKSSCiQTxA7cWL2RkZDiP45XndK1wDp",
  "key21": "4Mp9cJwkUCbp9SbqRittpHV8kmwUEPYLoLfpc6WkaRyUm7K6Ux7cH7xkmRjyPx4LAQ4iGQnaYobmd56UUXfDvroA",
  "key22": "3NCy3UtEtDEPRqBwbLFskUXPfwfxp8ooZote12n8N17GRsQjhZbijgVfN7Y7LVkYo1PdNwMWvRRFtcco43SizgQ2",
  "key23": "5kBkEJf7HEXd5iqyMwQwwuwMsqpfdkCqkyJ9Q72ZbkJ4vgSMxijo6xJzVYXobgiEMfw6KtTWy8gzMYbGkZSEUHt5",
  "key24": "28A6ExQWYU8SGthcgq3m9ava417g4oehypzLYAkWE8bL4Zn12hVCJpVdVaTo3pS9pAvY1T3bS1Lqkh4oB7FMyLNL",
  "key25": "5sVpCPnRvX3PQyTJf4aDFQpVVf38a19a1y3rhTX9NuqjqWBVxnLZvNAiR4NohfXSi2VFuQkWmDjQCbH9eV4s61nX",
  "key26": "5JS8tdpjarPT3CKqgHcX57crWWLmwYwrVR345kFjvFPqhs42vLCftiSsGmPvhnt4CpCofpo9FN7eSVF6CkwkKtCD",
  "key27": "5UJSrdzzTJxYxeZTxCGH4RHxeonKMhbvoaCzBNVFj3nzNeR3zKDazDMeH311N3yoAhaLSrGj3J4jmo6EBft5MVpa",
  "key28": "2F5An4TebN8zDuyTheetT6HQFx2YLRZUmG4UkpTnYDdeqLB9Hm9iQbopEwMric5rHX8iYGKGa6QBp6vkoy8bR19W",
  "key29": "61nnMn1x3xRDHajbvWDzvn4UbA91SQxSDkC4dBtvqjinX7rqtMjvvo6q9vfw7pfPbtpfr2ffFsynjGcVgJqysfTt",
  "key30": "5sJZE6a7ecRTjAZQ3j4epa5UatXoKpwpDUV78f4MFaYch5DzBfun9aRmAprWFvWrYHXJqBNQ29KvrT8qGPiWVctp",
  "key31": "5AH48KiomJnsf3WhFYS3PMbMRLdhfeiszhBpe3NggqvibxmgYUewGvADPDLNYSBGqaoM3VjiRJAw9mtjNCxmtYNX",
  "key32": "4Z2CLfqtgQrE7JS1isCa5w9NQwqa7KXqCKuwUqZ6dZWNKRg4SzH4JdrLT5opRwnBoRn5PhTNnik7nhXofraqm6E4",
  "key33": "FNxwsJgLEdKFjFbg6Uxp1AzfeohArKCxqEgPBy75XDTYBDJg59PhA521VLVs4WXBNh3v4ajqEU56dcYKQzfudNi",
  "key34": "wigNCCdh8Zc1cad4BWEXrzzHhN5QtrAGa5oYeskcHsrF1Hvught8bZRP31F5iufKiPb3k5AB72c3DH4xHSta95V",
  "key35": "nmNzpDJnzadd61bXQVvD1zmbYW6fGLuBXGahHA51A2mVrtXVvzXgaQvHssiaJXxyTSREgF2Pm2ptcW1NU4RYvDe"
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
