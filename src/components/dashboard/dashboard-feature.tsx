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
    "38BZgKWEn2wC4Q6GjX5fFkmx8UsEPWr9iuwyqCiSQWua1nNwHvpah3tVvF6NjXp2BCFCBZS1X1UsWFCK8Ttc2brz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PELPMYCYDGJVLWeFtiACihUCfRqh52BP2MtJZNfheZ8DFa2yQxBqNTjEvi6gYGjsL1KV3x13SYvffXoo4uwdyBd",
  "key1": "2cZZC8r3aFp1rgjTT3CP3dPDECEGLiz4fLbBwgaCi7xscFrNhNSBaeiHZoqfLi9ZVMduBjjbQCesuB5HHknHfoh1",
  "key2": "4n8s4tA33dhfWcvXAFNhfNDSywLEFVwkcaP5EBX8jH8KRERv9bC3NF39bSCULwzCHPXSQJHoK6eA8fB5iSJRwXPr",
  "key3": "4jhSbaoxUzJRxLRs1Bc2qymgo3CZcCghoCTkpLhL3ue5YqPSTpdquzyreyZyxgyocmcEPNxgtbnzgKmA9WS8uANX",
  "key4": "47gM5E39HUsMJuEUiSeJFN6j45j1drCAxi4BTHLirHaxLzbLEUHyhyt6BBP9krJjGgQWj2xtqRmjwzTtVTpmTEpB",
  "key5": "2zvgCZ3cZhqiHybqeTPbDznW679Zq7krwBrBkzcrTN8PM2pHnEQk1aBga55yg64YfiQUjZ5S9WKPU34JH7EvK6Ct",
  "key6": "5j17K3ytfjbGYais9vrw7JirqZtMN88KDFeyXwrsT9hyh7DgHdt7ZURWAtZGtPY1DWPrVSjbQgQtN4yUSq2GMte",
  "key7": "3eqd1eGqSwzk8UhnTuwP4sPNAZBSTHKtRT3DyoNNGRnGtantqXoBDFPEwBTgNbXKVP3nHqm7qCfkrFTh7bygEMj2",
  "key8": "2aRo19WJ9xaTM6qGjtmD9Bw1Hh2DLoembutu7ZWTraZs362FaRRFBu3WEuTPrQpVWPoRZ6Kk97Akc6ktmqof1aH9",
  "key9": "3WynRw8ZJYejaZrrC9CP5iT3aT7kSUJGF4634LoSWEUd9ktQU7y1Cowgr9o3D31uc6CyguAJYu9QSTMqRL5DrgDT",
  "key10": "27zdDTbUmfxFXvuktgGR96SeuxWCJkApP8UZPxT4qwqRPkBWDRL9Y2EHpsGsd8aLYtvz18PSBcaZaZoi7tFeuMVG",
  "key11": "5FJVb9T9M46b2bspEmtkYRnzr1LxgjHLQUAhtu4gieQQkWngFzuiNqcrSsgo27JGvhj5RgxDfMrUPYxXhW3sHgUM",
  "key12": "5dh3Cahdk9PCYS6MEKiHkMddpcbBBKnk3jt36JwD1M2mgaDTeegGn4EKhkpgpBkPmnWqDMWk8UqyHDng23jFhorS",
  "key13": "5Xrb279GAtJr2ZyxnktLZaGsGdYFzfVyHfCsGcXoNnb6aZYXTsEkbXJT7dwKobB1cYdrX8wCwFGUZnv9yYLZK3xS",
  "key14": "4SsNpu6r3dT61WDhi5UMRxVemuLm5gNneaTpycDdFDcwxvGkjSjQuxU7RzzFswvkU4eG9WrdjUzwMEp3D8rKz3n4",
  "key15": "5S1EYvqhJP3HaSgzv4Y33m4JwiZh1vH1N4vrNL1JHg2HJgBwZuAwRFKFMsuBDq82Zhaxk8Ng8GLTMoWoWzkidtqh",
  "key16": "UggUR87rXXkSUrt32JXKTQQVficg9JuLt2jWYMKjmN5SwhMiRQsZvVn2gNPP6hBLAGqvUDJ5mDqV5wfbnH8R1tx",
  "key17": "2CmBVbaXU5bMuDeDHnDvfinGmUymS75PtGyvhZZbkNvTgCaLDLrm8xDMrT9gZ6kKvWmZjuKZGxxudoqE2zt5o8Lk",
  "key18": "49RT1x5yjaWsmJEtqNg89muhfoypVpXt1F2cqP6Le7isbRanGxJNwJnpFzB469V5mEJkiVXQpa8g7tVEhrgio9Nk",
  "key19": "437GX2WEEnpRMLn3qSpU7sWLf4DNzDD4aW8Y7STcasBz5DuDyA1TxvE1gk86A6XpHimKg8dpfErsEae7MRKB8fBr",
  "key20": "o2tJDXSHeeY7o29TWJaLiW6rqeuXK4863MTUMkv34k2yGm25ScSJuDqihavvmoGzsdkbDhsUPgxDTKYDSLTXAGn",
  "key21": "dN5UkbzMKo9BvA5qxeEaSDahppfEkmxX13E4xXV2nBkxYPjbbGTrvdNBZYWZ8jRLiHckfERZupxBK7TFKV4YQVq",
  "key22": "24v1tfASR1ynhUTa9eLvWtGJaXT2gMVVzpShQpU8XGEevNwQ7xvHQraqdbJ2zLYJ5aKDyi1cjRCez8gpxmNFcsoQ",
  "key23": "w7ZfD5RjvdHnnHwGYTrgqg6YbDMLyQkfLG41yydziK3aoeX2iB7Rs6NkvEKA1tJZnDx6pvBrTc6DcY7FM15Xekr",
  "key24": "3MMmJBPn3nAT7A48LA1fmtsA9czCkzcT8tHpbQw5ZcnTShxaGtRja1pn7oBujidyyFXsK8NUdwc79oWWwT1csXJu",
  "key25": "2nXJeu9KXQB4tZ48LUh3r7N2MReX8FP4LoLa4d7GLRDBZJ5DXiTV7Cbf7J5nm42KpEMF5mG1SxsdEAhTZvn9msbQ"
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
