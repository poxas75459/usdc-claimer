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
    "4H2EN3kycmYoY4iuS27sKfn7fefGY8Vm6DNUMpMCaTWc3hzUo6MEgi3BDmAfr92GB4Tda8QhFSwyeEqEqsy7ij2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEf2DsVXmSpWgenBJFDs4Lb1fzi5ueckPaFSzshKWuvmSJXLiwAteZiLXVQkbPgxLMu1xDSFuZeRkaQ4Cy9e3B2",
  "key1": "WY22Quim6L46Yjk8ibnAfSZ6QsD2KCrTmoE19PRG9hke5L6aHyMNFcjFeF1v8pwa21cWfACJAjY25yJfHJJEZ9P",
  "key2": "4rQx7ARAyKvn3RUX3u5tcc2C99CmNGV5MZDfwZong3WVirzJ6Co2uZNA25s6RCZ3ausZxJbYv4J6stDsoasALFLQ",
  "key3": "xEG7ynmuHWyJHPzF2Kj5Qv9TEFxaJyeqs28xJ5rkU98L3FGPAPshST3mCS5Ydo2Y9p4EL3m1rHLDb8A43w5vMn8",
  "key4": "2uvzmTShHW2hzZGh55o7wbbfrm3WvrLb9xWLYjL2VGzyEV114kaMK6vMcMqLh4TsgXvkGdub4UwiQC1iRdMiDVDL",
  "key5": "3BYWGtFZ4SYy51Pmov8ALMjRTMR2eZfzxTEprtYkV3BEKtcPvAcwzrS84fVLJF9phpHEeHyaXATc7ffu8ruuF5QE",
  "key6": "3fZ4jWKFseP3oxpJRxL9WhVbh8Sm8zTo4Pd1MapmjUppZDs1x6gCye9FUfm1enJXEMLH76HwS29qm9H3BcxHjSB2",
  "key7": "WsJzQKWuNevNascrnR7LciZNNASS6nNxVbyqneys8W3XNKd7JPPNkj42Ed4A6e1ciEvVXY8o3jCjJvx46EmWWnE",
  "key8": "3H2659M3km19V2f1eMTgnd3GSQ3ewodPUJ2dtb52r8pvDCED5P1HGTK2U7eaqP9NEXvgmJsf7zWq9Q1L6bsc3s5z",
  "key9": "2BNTRvUHuY5bnHapuRJCzQYco3rdLEHwE8YMzECC53ibKyypXpLuhT5Hc4Ai7Hs7Lt9hAL9VVqFA3DbmULWzb7Ve",
  "key10": "3VwxF8EunAqQQMVYwt2McAfyc3oxiCjxFYsW6f655Yaycy2CVMsGySiJqE2jkbjSNTGQKxzYqZfez8jav5c7wtUn",
  "key11": "54FM9mj2bXCK46DAXz8GSqemXSmHscG6gbwHxqMBpDySySVDZxGYmUQxcntuKMuj4DnwcenotvAjZ6uoCxL5PMob",
  "key12": "3pCRhpY1ZnmC9AhUMQh6yBb6W4JLm4QLNXTyEJcx3SJVtj192WEAEMxbJHbMLA7oNBuB33LAcBgXPPdjmS76mH5S",
  "key13": "2ZuYaKENwWaqJ1qMcauhURkrdPN1sscdL3VR1JqsCh15HX5veMY1ombeaJv4yEDRmWESpAMX7MhoUpELCtZf6ULr",
  "key14": "3hw9xbBjmiFoXe3YFCgpLFDfXoYjWF2Bku6FfnDi7rvcbQZdgHXmbRx6fJoNMSBkUPCHLTX5Z8J9Q1W631RAjoJS",
  "key15": "4GDzETLkfXoGpcAsJvaQeBWKDiowSCTTw4rHgGe7eyKEdqe7KvXGqGNBV76L3ByrNRLf4DaZFy9DtaKLRMLajj45",
  "key16": "i7q64AWadBouV5vQ3fXP7nL9KVGJNnVqbDLwt2dy5iaz9PK4RJ9sSvoeNMe2qzkThjjprbTcefxaJMS7MpdrFNC",
  "key17": "2JmCKGvCDasswPQaMVy4wSsSBYXKTo2S6Fb4ZUTC7Qn841fVL5LpgVNhxMb8PRXzpqDZyphm5H42LjPEDZXXKfJF",
  "key18": "5xCvsF4ENMq6JCd6i26d1ppvTFhgmu3uZcTrHzU4JRQevjfyqqE1M7pVVKgDxQJ3ywLLku6rRgLqxS3n8xGR1HQB",
  "key19": "3uppfVM5f2sTmSVWUhDDsjWdKPr4zLpiAdszgBUUC78eZTFjCELPFiGv3hnzvTYcbW1rUFevRifrXoW7CG4T5XT8",
  "key20": "5XhMAuFyd7XZe6Ya8mCeLuAALoTjwcpnvC6hRQ51PQ6myAuZnHsHMQyhVgSKLYgBbi8cjfM266pDex1or9KzAM8r",
  "key21": "2GT7XcRQb5t5m6aKVH3TD6w4radD7umKZgUvm5nJsheThdARTQ4RV5XZwKfnRFTToUt17zEdmLZuMQoGvoSKDigB",
  "key22": "vE7mEN1Cakjh7DbVkfcRoehGg8iKZdVGdLFj2DCGD49hmW2mA68DiakziZ9pBRnvyCVMsAyQUZjLhmMd9ABq1VD",
  "key23": "3RhrFNGd6vUeU7N62WHzfiChXhgxSLYfDikVWefg3iMSTxoMrSgB7PvWUUas162vJj6bYhLe3hueMXQrZjueYpLU",
  "key24": "4zSNogmBtmv3ALNwwcDAB5QRwKkL3Ueb4kH8BAtnuKpmGR9k8Q326n8Jnmp8GfVwxfwdZ1vzLPydqDHBbvM41Bcx",
  "key25": "2ieCG8zUy3UsGqLkVRFWoYPwfXXuLrepAnusMqnEbksEV6Z9jNFRP25HHLyYUw83Qicq75ZFAuzeY2u6ZhNEP1Zi",
  "key26": "5yiycoRSUbTyuSJCJQiQmb6Cxe3wkhkxs9LxryNq3ZwLmNWDk8Yhr9fjM6eKAXmwoBTCFybZ71WbMmDirxZn8zDN",
  "key27": "5EGPnLR4osXfXTCSV74iTh3rBNTsVhPRqH7tFb7gAfMqgdJMp9zjoaoV3LaVJPkAuanoAsm4Rk7Ap9dfnVw4eaBh",
  "key28": "24v6ToJrXUhtu13RszW4sBtagMPLcKh4agf8CoxVtXfnzHvuLse1hF9WLhUYnA7z5nhY4Sp5Fi2Pb63SurRWsJHs",
  "key29": "c9Wypq6T3xGG2PKsvQK4NS6mkVt1am3x1KzcaCkLe3qyVvqsj264g9ckod5Ty32nprJbjt124DcCfX98c6Z7Ge5",
  "key30": "2KKN3JaVJDU9JihYze4xF5178ksK4G2XsiVogXDtPXzMfT784NVemurNpA7QMpdA846XBwhJZGfCAD33CNDcNspT",
  "key31": "2iUqtVM3BtVXjRW8ZqHYxs8CEd7Rjo1kDAbS2TMXrYaLpUdoYHc5rxxVncWLQEnZtk2A88R5PS7RGHMazWy5srnZ"
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
