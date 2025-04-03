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
    "5bTbpZmnxiMXLY84CeWa8Kk2Fb8CHaYcwhFT4bKcSH17kVcjVvFLsaLzXKY6FaVFVeDxBbi7Bp6yguKUas47yz8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P97AAtsXuarPs936s19zNKFBsFvWMaYGkgz2cNPy8Vdvv6iCNBiaGHbnurmiTCVMFfY9Xdry2LEXmkWhZvWeF46",
  "key1": "2AGQtYuDdhkGL2srih2ZfcJPPrc7mZYzTboifJjTLcLwaWJ1YuHSpmxiXFbJns8RwGrjjy27GXXduX5m3DmU2VZK",
  "key2": "3HnZwYq5hGCZxwLqGo7GKxqbSMoaXvr2ho7nE7yi4wNE8XtJLPnQo3MjoLMLTeCBF5jg53GwGzcHYFUd4ewLDBk",
  "key3": "5g63P2ChayzMM6Aos536XGnW1kKMi5u6DmjcLrdQw8vqJk3nw7XMK3RPrZFSe81uLBKYUzNpZUHwJq5zbmm8Y8q7",
  "key4": "5hE8eXpAdTaf8Hi6DfHchUtumHijfZSoQHLg1jpodLX8yBTGpxPgy4CSpHCfcwm4rvbPY4GrHLn1UfQeFQoLUxDn",
  "key5": "EccFQavVn6Ng8Ta8MG7dzeVWD5o3yi1pa9CnCtEsv95HH4FDjkQBrPVYJqZ1Yd4VwyqURT4Xd92sUqohM5FAHhD",
  "key6": "2VYdPuQkuspMitx9RKe3q1mDkjqJM57TrhULr2Hnyg8jNnbWspKFnn1K82fUPZNPw4GNNb2epERYPponiEZw4ZC3",
  "key7": "222mapaHexm56QcX9a9HNqbcMKUt2wALKeLDDXLzabYh8o9qRjf3VZviv8qJnvxyENsmyYUMc4teXcEgxrLuyFu6",
  "key8": "4QxjBGHsQXfisQBoiWWkS15VnsLirY2KN2jFEKNNPDWuxGrwRi5kqRQ7XQhyYyy4MbaTg34bu17qPhZP5vSzbDu9",
  "key9": "4DQdiMzJv1ALMq4pMrHvNspBmm6cGmPbTToKxQpxJWfx2wRk1f4M6BTpybENKx5T9PP1XXHMt4hdKnmCFFyiuSPG",
  "key10": "24BazQGTC77seavDaizeYRynYCw8e72vaijHdibPE6H2pz6UaqeczChLeShGjhS9nEVyxk43Mak6hD4sdSZZ9f1E",
  "key11": "EjHsyd8uWRjo97cqyVdpwBDg24qVXCDueTmp7gWQ3rYxhVGq2FC1mmr7D9NpNfgnL2WjzxD5NFQ9CshKxybdBUA",
  "key12": "5jMUxXHr1xXH2hUftYBvwMjEdMTHbAjPBd3TW1pLTzarcSvQDm9TWV7a99MbxahVETrDk2XiKXkns377bkmLkVKJ",
  "key13": "3jZj7M5kPUNbNmB67jB43Qjp5EJQqtxgQ926AMuex49ALztDarW4A8Ryf6ntujMbc7EfvJgU3BLCKF2Kk91rdEXD",
  "key14": "5eCkinxGH65FYbYxLEcwG162zx91oTisXnY78LAL3BjbAVCpT1hwNeAd38QLwqbwcqPWaEVtfbdXSj7yArRnCU3e",
  "key15": "DfyPNx5r7viiSLHo3P5bnETNzbENBRcsCNRsjRcT8ATbhG3ML1mLvsR1JncBNepUYCPgZbjey53fr8fvPCi7XRy",
  "key16": "3QiPPheYdNSpRLZi5wdu946ykcwpbu4tB7dwQNyht2X6wUo5UsB2bqRQGytRqTns1on9ERyyLStPf4s7JJH7t4KC",
  "key17": "m3oRk3iZGMPjHM71vyNt9CwHZyzabSQ4QaoLgGq3yaJ2DAAuJji819zaAS7KS2AEJa8w35FceqBGGu5JHriC6m1",
  "key18": "2MQBM3u9LJPPULUdcmRdSLJzsDBBWNMfYbjt4NqW2Kf7GdEvYmTQV9UHPD9vS36tKVG768evfaoC3r62GDM1Rv3g",
  "key19": "3EpMEJPZfq2LQYuFE7zGrsVkc3hPXVi3ZAU1SeLKWWcWt6hZikH4EQKc56Q93oi2SUF9WPkML2aNY6VG7hDvTxvi",
  "key20": "63HbzDaedhnMh78iN3vXhfTDDyPsACGDGErnWQ661iPQVNx9PZuGLpYcSWFVPz9Tgcn9miafXycm4UidssgcAejQ",
  "key21": "58ST53TqgF8RPtDfEFuTcjdvZCvEfYEMbAY5hZwceQQJo5Sf7UZwGTk9EN7tMNLZNSAyZsC55ymvJb8RCd46mDN9",
  "key22": "3dm7jXbfmTSzyrR1rY92x6Fgqk3ncE2iYZ8ExuaqcB9Ky3m7paUqxQBdHQr5KUUA9ivYpWKrxWHmtXBhR9TPT3Ek",
  "key23": "5vE3GvJcwoHpR7XeTvH8oj1ydsPtQERWgExE1cuf5sMBYBgFJ8F9PsK5VnhjWY8g4gTzvCS1a6AYhU61x4vNPN9s",
  "key24": "5gCKi93Dhf7PzptoUhpR9uVgMax3dYbqjXmBDAyR68ubVf3dfDaANJwFm88zvfsJzVCawLKtzxG7VfXSqgvtacZU",
  "key25": "52sq48i63v6h7CzJpvxYA2gEfftwHw6PEHAWauAkrBrb1SpECkAbeZ9YA58cDgo5fqgjsDTnfNoDbU7JSgf2HLMr"
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
