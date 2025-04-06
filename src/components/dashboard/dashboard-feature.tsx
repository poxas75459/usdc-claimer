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
    "v468zYzGcgfHxeDovnhCYvoUZe6UmnL4XeVt9vxFqgEa6FiPBHB1wcsDfzWBTFThQGXX9YqoeSrxrsr74oAERxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVTzhy9uDqX6ti17V64KhznHNvHN9iQ69MYYMusGVtYT641q3C3nLUgkEx2JNN4bhCo4b322MhbFScWCJDCSjMJ",
  "key1": "4kM8wum4JRkAhf24H6fC5Vn4DZQeWJSAHWBsevvL4w31bty1BzBqoSnVgWrNS2dRABJpJzQSEupeKtJP1iHzu5Xf",
  "key2": "B8U6WGUZmejjHAYWdtjK19T38q89NQnSaXPuez64tGaqAbAHssqcz9yxiqxtAr8jaaKifZ26WDCRzHdAGVAqPoL",
  "key3": "56pWQ6nQdG5NgRSkm5rX7R6gSktPSyz9ULGzNyB14FvrtVgNo4ysJ6hqvKudBqCBfKvRJPyX62wWeShQYi3PSS2a",
  "key4": "tmrYXaDgjvpyUvTkN7KqjUaJdyDZub4EJZpff9zSXEJYWHiCoWnZKuKLhhz2xjQETmSjZCPbUdGozLQSaGfQ8Q8",
  "key5": "4M6izjjM7P1r6vhcUgnBdBSE7DRPLt3Hh25rDERwzGYqWX2vB6y99dJrnsVQEnpBhG8htcp8DJycEavRP1D5d1tW",
  "key6": "5aB9Q4nJj3QqcdNDaNo5SS84vRN1RVWn3A7CWK2A4ghyNJ1FAzGKjRtxcmKYyDK1FsUq6vh7qRPLgsBmx919ZWq8",
  "key7": "4mtk2hF1NicHg74taq6W39U3spyBoog4tb3qfyhJ6ytm3pB37KBfRuw8cdShntFa9tXnEcAemgm3w4UFB1CzUCew",
  "key8": "4AvaAkN2bvX4EiHHYnU9i1XvKvAFR6roHmZYTQXrUwHs33ph6yW3pmCZsZMT6LHqWsGTmnYaifBmwYz4LJFeQBU5",
  "key9": "3KWNLf985FuQt2K9vKiqsq4AcQt14R7kh5K4rwDTp1rcvaF4iFSFQfW3mPSQqGyAoeayKhu2Z6DNfmNCdPg2JfBh",
  "key10": "5RSqJ6L58eLaKqmyefE5oFHA8qwMHysY9ydZfgBQNRDpfP4c6Y5UDSX84yzyv6QYG1avFdHYWFd92Ra7U9w4bsg3",
  "key11": "5rGFdq191CUs4kQzUkW1sEJCrFDEi9mPGZc8N9ha3Z2e9j3rXXHdbdL9eTvqSYcGYDU4StiaQv7Z6x8QcpHnbRvT",
  "key12": "uvUHXVjzPmMFiMqeADLdV22PCavGPK4veNf7WrQXepNNWcfQqxviYKJzmpytHdpYVFzuSwef4rUy8sw8qJVa2TU",
  "key13": "gmysU31bLNx1pMvGkfBmY2p8P11mVUJUp6DEzGQMULNRn9szDkR7phJFYk8BsEwixZbDr5dapPhCKoA877NRVo3",
  "key14": "5D29KvQAwQQsvFweopddQdfARfkWfMmcdE2hu6wHfrU1jeDeoE4akEBsz8D8pCXiYQR1Y81v1ZPWSZ33d6ofU12b",
  "key15": "49LaywZm24n8a227TBrKRdaDs1N4i4nGqs2x8LUFQUc7LY7JsQYNxkvqd3mUFKi8E2sTjokjzk3xWSopvapirimK",
  "key16": "5zLBtVZHAuVcUrMSxkyHHY1saEhjE71wnsgAv7caLrYBB8Cm8wNB3SFbAP2TzFKC3RYizT4WoJAnaJaFwmfqY7k2",
  "key17": "33Mofua3zDn4Q7C5u2WBEAjwFUioZCUFk2hSBkH66Gc3rKWF2MQAgpsybySHHGoPBEK9iRDU9H6U3A2fQ93FsHmX",
  "key18": "2hqQwPRR29AYXcP7tLNi4ko9Bc3rgnDEZ84THMXnzxbmQdJ9mpPUyGyAA5PrpKZ9oRScGNED1Qr69HPjBjkGykdv",
  "key19": "BDg52YEPsUcQ6R1KXwJaFmEaYEaEQwp7BCEfgfLqzeteghZ7pQBFpMKF1AU6b7hptg6ohQXZAArkgH3PWB1c8v4",
  "key20": "5AxhauryRWJZC8JbbmmXJDXbi4LHX8UWFipxfnvjFYpjFQ1xTpTVfdqKARPzHWcewbDLsnhygGXr6s8Mh45oVsWJ",
  "key21": "3oer9UexQZyyXtVpB56VyegmHk8wzwz4ySm7cQCq8emUSEa4spedoJvjrn5dYjoovJz6wd9ETwmx9KhPfVUwfscV",
  "key22": "5TQbNcUgxv1YfLRgLfKjC7CW39zozwCQwFKa8JJr1F6vkBET5bSvNQLhxox5ZZtGNDxQ7SgdLdGCTUd61kJZT6JT",
  "key23": "pBBQf9V1XaCc9teBuxuoTCTP3vZrHbFPsqT4Zb3761WWdtKjbzKxPu2WgPrXgi3v85QB3pLmjohaC6LxPshZs8c",
  "key24": "5ih6b8B7sFfqQRm9nZMe85PtDcZg8tczAwvwK26T7Kv44ETrYDENZfgeksDnZRGhD7odkna17D4DVVfhd3RDk4D9",
  "key25": "5z21ktLLS5QFFXbNW3UZaDkb8WVx5pgpXtRdsjEtAzBdJ3g9HjWHcypExkBaTHD1m7YN9Ymdy4MVnfDLWzT873iD",
  "key26": "2dJggEQL6reKyo7i3FavGkBuATJz9pdTTRZDcWH4Ag1Ck94cytMHVaiWmTyLS5aezK2XAqdJBKEjnKJ4h1DhihXV",
  "key27": "4qns1XYqLMkjENQDax7Ctt9ByXsvwLSy7ip6jMCB4b7T13yBbGuprd5QH8qYL6eSZMwLn7yZEFuR8BBRg2jQxNmQ",
  "key28": "2Qxjum275uMuQA7551rAREeWbCdYUejN5Rvkr4aygN1sDT4a9irLjxX1sUYtyihKUHMz52D1uwEvwtMbKecwKzPU",
  "key29": "3QQSShJgTy2Fr7ePVTpzTkiEYEYatWY4cwjW1vi1nmJYtb3uj3fjBpcgHvKEuQLkBURjL3V13pViWMvALv69CDQn",
  "key30": "6151ccoWzbHZM2hMyv8RLBcpYSpXRQQxHjhrWUB4iqYRmc3FuFN5cuh6Yh1e58VDJv8Fdm1MWntjhRpdVBPR27C",
  "key31": "3dK9BaMrQq4CqbPhhtLejvQuKoc2a1GR8Fafvp7HUT73LCHUcquFNhARfU7fNvc7rMny72iYn4YaaLA4p57mgFea",
  "key32": "3SFeCiQafEtvUDKXWcR5VoLquxNxh9Tj2DVfvij2wwxzozbgATPn71Vsby6MFLiavLhcYGxXbrFEFAxmMixfQ9Da",
  "key33": "4SHALYq6CY2dhiWqZUHYhZFEFiabTjjXjbmHtpeizbQdfYBJaC7wQ3Z2BVQptcWDZhSCc2vuRtBB7HNebHBzEVbr",
  "key34": "2TVYs3e8KHnzxAPcLKotLGoZ8JZUa8HBcbkft17pasUY3kHrnMWCnpotsbGk5FBhkcQwQfGUBZR7m3GxWP8ZvGvD",
  "key35": "2mzHAR2vZPcrP7kazrQivseNgs3wzZZh1tc59T75DWnwuZ7FjaDomFJfd9fyQb1V9qDA66Va6B1hgTH2w6SbbrCA",
  "key36": "3tSe6CMZNBKTsrTQzt7sQ9iVizff7HV2vmpDxS9JEhzQAmRNBfiTHFBCg1yts9UKV84kTCZfoLRPhxRvz6P2AgyF",
  "key37": "2M2ahF9UPET1TDYt5S29TxDVFbApjx9wHY3AX1uJmm6X2AusascGGWJteLE7ma6unoCJh3bgq5SAZfGXwFSAdZJR",
  "key38": "4Y5qq73ZEo6UDDJPXoKo6TT2FJpY93X5zv6ST3VqkGuxY9L4cpHptctCEtgPyRp4MoHiMG7wZJycHnpuQDps2D5Y",
  "key39": "2pJFanjk4D8QLdRh46bGJQr2bRVjSdv5vywNyomv8fwdEdaGdxAdn8EN6Y4ykLtqw12wDA7zRvPF6jrXELL5qWvP",
  "key40": "5pWGe1jDC46pSmGubiPNYmNqN4nWvmd1UYJo167uAzKjZP5M2M5uSKjzCoCoNhw3MkxeSKhP3F9wvRPaftiUTcSu",
  "key41": "6eSnb5o3je6ZSwbgvwebyQhV4NSABtamgnZE8LjdQvQwstKLVT5YZkKBEnRb93gZKadUgwzFWWhKXDsagFuoVq5",
  "key42": "SQjVB3CxRhYP1SXfK9qFLojpyrjq4dJdNPjGmYht9GVvHcbZbhpjQLCTCK45CaGu1WGXv99oUNQep2PeuAmnqFa",
  "key43": "64GdaRy4buTpMRu5DBBSdVbw6nT6kaQxCN1BcmpPq7s8qCNA3okqNBFmX21C4GeoZ3ahogiedsX6qktmp1u3uSZG",
  "key44": "5iL2GbiQKxjCiwi5J49jDUKufGiNyrAW6XECekEM4Xoi4ScEM7Feg4EoPn3oaAiNGrQNU6oxe1261xJ5ai558LHQ",
  "key45": "282fDKZyMEDzEhnbgkAU31o7uApv1QdCJRArVxPSCF1qExeeijHeuxmERcbPV38vrLKGb5ZJiSpqsTf3Qu7fbTRK",
  "key46": "2T6zeT4MMvogXFP1rDjCcecTG7QD2aTZ6JpRKRpEZZMDNmSV1WNmyjtS67Z1zUAbYjE7jANPwVaMUdsy2TZiqfxb",
  "key47": "ep3n6ALQ91WVb7haR5WEhUAgKFML2ounKBkRWKcT8giMp6XJkajLQrmxHTKowWSLm7B1wpAnSLjP7myGcwQKb2U",
  "key48": "2jyz7a4frFHj5otNCnS8BeLNtuQG5okwB2QAbF6dSGDhHpLERnbu7N4pvQxNaoPjUMWNpCMipQ6DJmvg8SKag6PG",
  "key49": "TNZC7Y3jXcVCd2cDAvrZzyCZM7CL7ZHw14d7eEtg438abUTqq6Ag1oMvJFFPHDgpR5Q13i1XMYxwt3Z4r8pNVvr"
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
