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
    "4ZrFNC5PKMQduqzMhn1bjk4otzvfNS3VcoFSgJ7XZBrigRKXQtgWJ3L7mQQFJjTMKzjAGTZSTwZ4oB1w24ii3okh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bkncf5z2cHkZtDrPpCV7BvzUZj8s5cvQL5qw9NfqvS15NERDG6NN9QGQYhKyohsq6sdYkzPBmhZhCFFiP6y3UM9",
  "key1": "5QoRm4nWr7FVXAwdyiqtTCJYcVsJQG9tTnha53KzrnpTDxvXHVjW7mVcR2r4HeEyBDaPSVHMkG2i8YXgzvqdMS2B",
  "key2": "4VSutx7LoHCTKa3nwGVfZwLKrkYjxT8BjGnq5fpdwoPQngdBzkrdfnvuppYKkGw3weK8d7sFPzrD2ZWRxySvtWP",
  "key3": "3fGqiif7cCqHRbQHM1NnhYEdTejNQzpukUiJyhE2NQVHtSG2Mk3ig8jUDGEZVYk2TnF4erBGgWkRsBxuHoSSbQSd",
  "key4": "sr3842yPzuZgVE1NovMX5Cu7eC5DmhQtfzKkincZh2e678pRaRv9EAVp7VsthrC5M87kmMceKpYQnESMSNnzoV5",
  "key5": "3883EM3evj5opnM2TtLqrQKU1MdCSMeVAMiecq3PzgYcW4TtbzzxcmDAK8aNqsZXqRkzi711J3AzuPnRESgT6Rq1",
  "key6": "4nRrJMhstQeZSTGLMaHM5DsP3Ht2gsmSxYhKryaJb4Y4VZdDCVbeLsxn9ticMGMa6RPFYWfUqqRgz2hvcqKCaLLJ",
  "key7": "8fYDWb3YNJ6TkJezNPVTw7qrzoZMzNxN2kcZnBwotYPizzK2aByh5wJzgfszHhTF4us3agFwQgimrXmZ78wr6NE",
  "key8": "5Y3PJWPuvLiFqfrrosTRnimh9tUVkVN6q4HHkTn1J1Kp7SWvkd387PMt63uWxiPqKG3CPU7Nq4YyzFvaLNwvGjtx",
  "key9": "2RsfxLqZuexW5gr8r28PHzDk6KBwBXNVwPFR19buEZnVWBsD6c6iWYRD283vL3vvb4fB15q2iMxm49h5FGHrVJDG",
  "key10": "63QibsuVvtSnVfUvwKeh91DJR47G6ZCzgLhiEGGoNySZcZ6j599N3oPzMa3XhBRaYdpVgXjBeAqP6Jrd21TWNHpF",
  "key11": "2m54iiZbDkvKGeA1vm3bGsib6ZPeR1tA3hfvLmKbf5WnPAWamsbV9McRUC3uvCatVB88fabLcfSticxZhUAUarDm",
  "key12": "wozUWzRF2HvJwwcwxW42Jt3eHduguoccK5EkQUHh59ZhiwHrN2Qrkwyz9UtFkpMXgpMx2KFxEDZt9oCmLdgquox",
  "key13": "398LetdScpYrkaLcqwduxRpjG3wPP6S4L2JNCDK9cNWXok1L42cgZeQLE8jXNjuk97ZHBUwtfni9cLy7i5PsLAiz",
  "key14": "34bRYsfuvoTS98AFyaGCRH2Bcn6L7ZQGPWtHp9PnQs3G5LnKScw9vHerPp76pZPGEskURutb4dgWHRtqqBgdxLmS",
  "key15": "jsnVxYP1iT63HJixYr8jRQkjPRb3f2vSKTFdzdxeSiEtvLjGQ8z74bnXzpbFjVGXiBQr8hAbjg9YmDDWWXz32CG",
  "key16": "iK2cZA6VttC4HztbEwrNxG39iBGevQ869BzuvMvm5T3ce2pGCrbmaiGRgWE25asBHVeKTfc4P5gerprHavVQJ3d",
  "key17": "5Q2o84GHA3kU5fraX9YgxiaytXo2GpxUnk3rDBRNbjcP3VA3L958TrxzuhpA8rbAwtAua7mzts9vAyvao4A4sRfC",
  "key18": "63epnqWir6Tpf7CvHLgCTcofWowAPhREiirgoz3hnhA5tTckuDWMQ6fdBeLHuz7f3PRXbjAiznzejkFScoChfiHW",
  "key19": "4EBwHkvU1yCy9waPh7vBdVCSH3afhCPfjdSToUscnZJKeBm7gCqut6SjaNVA2z4B3BMVHqyNUW3MyAKwEHifgQrE",
  "key20": "2qZ2cgQZM8JzytPaWaKfFNKZaPfJLpxcReFxds2Xr1NyQ29K7SfpCqtMb4R8EecMN9onnUyanrZkhoK2ZjtXveJz",
  "key21": "43rM5b57Gj8qF6qJ2BNFrgmj45eyuJ5kUP5L6cQFZDfVydK2Zjd7Y1ZgvkJNsnbKPY8QttULTykxMEhaFfjDk2Kx",
  "key22": "qwzM4saiKxb8Wm3hMakkatUuasuh23Cipc9NhBcygjsxY3s1HzCYCW9xaXnSDMXChr9gGpjxy6QCVGdE2Grf7WS",
  "key23": "89AxTr8od4nPTdveVhS1xLbnNAdavAjvQErhfD1NWzUJcAoeoDBXeyC3LpzZyJdzP8EVLVcRSCbZt9o7jwdEPmK",
  "key24": "2ZkinQs56fGE8UdvjBaLzei28447CdGGnwE6TnqPgvULStCJBt2A8cLRda4UJCN1K59i7JWvYS1HZQTY9XcgLy1X",
  "key25": "28VnhkwBE7vyqEiYC9UWe42ceA4pDQTVnUwP4fWS4xDaH4WeVSWRmu6RYcQ8uKHFFDSgUD9WaHEnV3Sg3CFwv9jX",
  "key26": "4JBeU3vaJ59v6xguRxHkviUKgunfB8zSaRnDRKtKi9jSFdk5L1N9dDfXLMmYpPsDvRHes7cRyWgiEdLv9cinz9jw",
  "key27": "5qMzu3sYu3dFChhdndPZZbYF1oPVJiyFrX55ByUP9MyiFArARnU7v2ssdX9z5bx77AuwmuQpvgNiDrvGD7duJg5o",
  "key28": "4222j4uhVVpWNSLvaDgoM8EAchsncgFSC2UoqABuHYbGQGD5KwVGPMz8qWk1rbbNyW3NRBBAeAfkZ8bGTTkgeZRb",
  "key29": "31aDFRPBTSnQU28xuQVCPJwGVujUf817J5yovFG9BKLgGKQmXWJjXtLtzQ1s15putkYyvhBYP2CpNhvsqu6Gtg56",
  "key30": "AJqHRr2Dyx6nPDd87nvnb7ft91vm2p8SC66zB8KHydUQuQCWdUzb4gWuZrzC86EYeAWwjLxTX1wc5GL3CSP9erz"
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
