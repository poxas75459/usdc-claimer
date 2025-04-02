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
    "3gePU8HDs6BuaJVhxXtdEeNyUcrWbZXmn3bowbwZ6Ji9kPGpoHCKrQMu2X4v6kdjPcFFfXJGkPf2w9CN2AKavu2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hj5u3gQRbAX1v343jmbUbPydw6sAj2UBJ19U3XiZBBEPnADhDzQ4uDKEZstbyy7KoWewN58Xoi8JNsSkP7Ru4AC",
  "key1": "51GhpHQeda1e7xtU1RcStpy1tFX7hUHydHE8yeEbXcm8ExBKkfU2fiEos77dmDWEiUhmA6Ba9ZdVe2MTBS5Rue2P",
  "key2": "5dhRUaWmnkqnrvVUrsBsk187uVxnQrNrpm8CFhQhhLxuN12dwAdRqf6Ty4GXPrPjkWTE7MVkbDV7b6EA1kB19LhG",
  "key3": "5rpfychujcG5djNSvMrBmAhxkXsPdeP7gS8HCjuzH2uEYnJji6vdxzciE59pyRzsC1TSEUPGCRG1Snas4GMzc6e4",
  "key4": "2DtgkZHHJ1b36WQJNjcxgN62S7dwZKSV18eMjVMFJz32GnPGrfRYpVGhR1At1pyTC3y5FG78RH2iKvvpqXuLHm6B",
  "key5": "47wLux4uwWJHAcnwtYTE6mo1cr7iHSZJU3R4sQiepFnSNXW5sUXjqFjFo3zVYThKG6roTzvuzHr4uok7sY8MzGsX",
  "key6": "x3x7q6pra9LyCtxRuygKmRB71ZeWse1ZykvVEUP7od9rP61F3pVzyVibu9gkSdFijBJMNgnJTZm168QvHyGpme1",
  "key7": "33PYGf34nJTcgYUgJCRiZEon6y1wSPJxWfpgRfAsESVZDpdC6MaWifppiVUcAWh5BMkuV9B8w7SsU5echoZSnsA6",
  "key8": "4Vhkgy4N5WiCver2BsU99rDEBTkL6hfd6JvTNvyBBaFqKvpB3CCwA5SgCq1BG63CtDWj6Hzn45rfUbaicTLoi6AN",
  "key9": "4Uk3YmBdDeaeb1h4zzvvYV7x1cBN61GSAuKZN2i4gX6D1NJoxVEM9JJj731e1qxy3pydxkA92A6kDTnp7SJ4vGTz",
  "key10": "45zTP3m57bSA2FZR3tmWRCGs12dpnQNE2naA3GjNFTdoZDokQBRribZWwSSwsjtWxFhu9xNgzyNdGKhPU6RcLdK2",
  "key11": "bTUFK9VrssMEyY8NWPPziRxEuUfb1KHt2E9jviNJ2tYv4Yc4xPkumJ92bQuT67pGfqLq3xhaxvKCKY7buWUpBBi",
  "key12": "4VVmno2cQhRQyCcF6hpGRCT7kVMsA57ng9qpQh6SLbuXGiLyPbuqTy8Gyn9JDKkTvM2Ksn1dWZACrRCUbHiR7yJn",
  "key13": "4rU8P2HDhjXWqxbUS1h1NRhSxtA2oZ5str5xp4Ubm4LUphRMoq9WH7xggWdKSDSKxsWbwpr3esNxSRfNwWUnYPNu",
  "key14": "3H3WiBtDGrxe1hrHBdVwxoxMkxP8eDNu69RzaoauLckgW1KzhkkuaWBsvKsBXCFoJBwyfKE7bW8YQZ7Y6HNgcPGJ",
  "key15": "DMXoAr1xj6r2BoeQQY6qDJR1Y8JSmRXrnJdj1onGvqXeZwN1z675ncrsgEdyCorRgDjCJD2uHEvinW1cPRW4yWq",
  "key16": "3R2prC9BtRFVG1w5mz9v5D6TdUK7TD39M4gNFAy8ffh9KDWSb9KzaS2uMa67fTzhZsiFhjfAWHojdFhbnxMJ8Kzw",
  "key17": "4rKtAtvpadNDHZzChVq18pYuxcPmqRD5rS4V1gmCEKR437ezbyAEDJHxJxv4HEYaiw15DKumS3BshrZTqL6oy2Ax",
  "key18": "4hFo6cyPWByXpfHbNhzcKHzEzDKoMhRaZhkL7Epz1bZLsEz8m17moPchPbc4ozYtsZtDUS5AZutJeuR7q9EtLMqf",
  "key19": "3vHUiorsrLVUVdKDZaZbaSgdcLbAMeYQF4d8iDvo23ySMYPbqGP46tqqNpNeAAfyfnyc3qDqK4n2VzrqudYTyX8u",
  "key20": "5gQaporzfoXedibWZew9uaHeZk4AvvjWz9AFrazfGLLYeDhieAxfGYh7EiHEAWXEzXNrbp1Lx7vghdzN3RaeZrih",
  "key21": "4nufvw8pSHb4Kf1m1QcYM3p3Wbpdb9dFDJuC5cBcj5a3mTVHw4wytX2snkgxrkXfbvQDtYyqKADtu93dP7GDauUF",
  "key22": "y1U82r9E3uDRJUfRxyDHEchkTKk4WBtwThPrLb2NL8denKBLBgC8mEtneZ5KtHc2Kd7bYxLXfTKH43qrtaz2QLw",
  "key23": "33ecRRKFUckonMu5u1RvBfNteqb8BFPR57DvDEAxVU7J5xJhce662RkxX3e9ujBNnLshxrWMkrpqfNkmgr7KVb8v",
  "key24": "2k2K9T9o6r4NLkjBvaAaUMSSDLWNc82FTBAj8phf6C6CC7SoRC97etddhTcn9paAUtwRtXBEeXNZFRuUxrFzHWGZ",
  "key25": "5TSicJ5v9LPGQ9Zr1LqnQe7xiPvKm6xUigA3HmJ7cw4rDQFwxstHiHjesfqZjr9szbdgAc5gcrQg9JhaaUczTGyt",
  "key26": "678g4GKgqBeNMSzrRoowiVRVVRk29ADZ7TteTXMCJTxE8Y4WbEUNdCKZ4XiSss3eGZaNVs12nW7QvUyTzGk78jGa",
  "key27": "5NvdpX4cVKgk5Sc62W2emmDaFqYqTtaHoBGe3HFndBSWqqKJTxpyhk5FYqeoUootumrQAmrxah1pG2RX46zVrUan",
  "key28": "2Aj6VSuymJvKnHmAUBa83VoittanA51Z8NaU5SKCj1hn7hE9gDLTjGUzzTy9oXuvKkM11VMxZWGx1UsaZoQJBX1S",
  "key29": "4xHyPj4fpURYtSd7FTLrD1k6DJNojymYwm7ZEb8XzKagMGjSUGgMooM93vHPd8cYLvKjwNJpvrsqvzUGQMqz8p6W"
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
