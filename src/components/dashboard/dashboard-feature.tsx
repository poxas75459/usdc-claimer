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
    "2aFMCMjWs2mU52mhyvUHsZCnmjQwM73qSwJTXDR8oZHGb3uXQ6AatMtRdC5baAjyHmG1XPeyuhXkg2zbL6kMDjmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAoNiJyB3NNLt697FiYYQy7xVpAWtHpmJ3hEfSmes4sxXVkapAF1rRW18cpq4aN36UUFCZkRvRVUoBL7aoHNvCp",
  "key1": "mHvkGyqfKgdSvBczp56nkqdeByy62DZPPz4DEoLtDs5CD6AjMWgYMPtABULY2PZG1WKz6UwtKa4X2oEtVkSLMZM",
  "key2": "3UrSW5bCkzVseKQX2L6sR9cqcGr75phEKMPo3BVLcxxJkV2bao8QFqk6McUmew5mUgjjW8Ui26tW9BmuX9Y6ECNF",
  "key3": "5noraSVafoL9md5MEdCzLSxic5VoHghZeYMhRXavauoySQRWM5cLQQC6vX5KguqfMM3sA6se8Ec3M1D8iscVfse6",
  "key4": "28hFYqbDaTWZxQMoycvXsw5METHs6h3vGvVARdkeGDxncWvgnCeLg67Xy2shJbx2tvr6o1d7hVgEMiBfVjZkk5WD",
  "key5": "5iZbtYw89dTQp8rZLc7esuB4MZxRw6rYP6isq49xm5aneUy8ScEZpCCwo4PEETc8EoSRoMez7p1AsKhHMKz5yGXb",
  "key6": "4ZeUpukaTNp6yGZuQ4XpHjSiQ94v9isWfNRbEttrxAKnuKAwvT2nsAaESejanQDKQLCUQHW3JPpxxdDb54sMQcnm",
  "key7": "5J226PBg1iM4cLvpzLcRDQihAke3YVzTrM1dTL1NTUoYi9BPyCfi7r458f39LwZbPzviDMcQEAYqWm9CwNT6FWzd",
  "key8": "G5g3y43pKWCUPjrLFtJLXcNAZP1k4sobbikCoN5EBvE98KcqNtwFWfw9u84TeXEEz1LqeRon9KKBxeuq6e5Herm",
  "key9": "xuuzPp9TbshAUF8fv1xAEDjCGfdmJ3Vn4aXiCqTqdywNuGSt46rrrdoPHLT6XY8PTNZaA5fCCSyTvHdnWsqWWfT",
  "key10": "5TejgKTrrm5oZ23LQwLSSChpa1C9xS7MvQZ2WXrJLNCWr6zbL9oC11WvoTno1xnb7SkuKCzq3Bt4J4kn74gwTubE",
  "key11": "4ofHwTYexB9s9TKJ3SyCHGCDcGoi8NdNoekb9pHZg9wSCx9iiAeGnUPNy32ytygyatNpe8YeLM6qUDg36eDK6F1V",
  "key12": "3gwhC1rcQiCCTJVdwjuz1vsq8JrpUc21yiRgapQ1Ab2U4x55oX1CqipwH64t73Bbga5pEFJajyV9uUZ4cXfSPUyK",
  "key13": "3Nr8uSqBT1ACBYuNeuDvJTaEjuuCq97DV2NkU2DeSv5Rs4JAHspYSWRcFmzJMyeNKQVuGZttYr9GQrpHSyjN5erZ",
  "key14": "3hFWZFPoBbF3CdVfZaA93PAJ3mbg7soGZHV9V9YD3s4L7r47odAfAowT5bKqzvf6QRDtko2RGFgPFUsJqvzdmHq6",
  "key15": "4nBufyJ3rphoeTdqA5bNXvPnE6FTY6YZEzGANJEQifezDV9QhLaZea4caUHTq9T1FdMfXiv9VFFBuaMSwVime6Z3",
  "key16": "5kYPDp1BwG9hVuF7MfMS21kX5rmfU8q5DoVMfR4kc2BpH3zybnUoGujxWei4ZT5sW52UyorSBFMgbjcEDDj8kx21",
  "key17": "4sCuZS5x8GUGNH7yotLsi5E4ng6LH7QSdyFH2ZqmEekZBHF4asSHfPZ9fBoAhxiKJmZmYwF7LWUHVf6hcqk7XsNM",
  "key18": "4XUdCqqkjunmwYDyvnREbD5LyTd71SEU2NykmhiDDkGrC3tQ5JjYzwMuEuDVG2NZ75xFbgZSCCwkrQ9HS7YDJVci",
  "key19": "2PMuqRTL9ujFphAunRdNc7a1yvhE1mDFt52geSN1wzM9NhhvgFDmm1ah52tHBi5KQ1hBQGQZNkW3Lpr4ME3WACCE",
  "key20": "2mHrek6JWVEN7hMjAxZPCMNBdaN8ggS9qzZavRbTdfkUPJe3A3PzpNA9ZK8G1Uzq9EvY5jNJmvPNpTbKMq73gPko",
  "key21": "isqDieCoHZ3dZH6NUtp2sCDkASWBXpfGxCjXvzrqYSdJKcxgh2chapUfGCTy4A4ePotxgiDxvtTVQWzXMHxCLyj",
  "key22": "ypRwJ2FdfoH6ThnS5XJgHTrVadxdWA4A71decUj8eYKEWv3SGytrtGdVvxKkSQbhPXpQg6NobdD57mU52tixxGg",
  "key23": "5KuS6nPmgNeozgp3uRaeoFopxWaBMx7x9mbXzppZ2pTmoZQkuTSeMvKSTNehfYDs5AgfePYn9DpHHxyqoqxeEGPf",
  "key24": "AeeMLcGcg3BHKh8gzoE4b2Ha2p2TTXj82BdN2wn15tr7Vf75LdDgQRRszRWgD5kNrFDvNd3NrZ2bw987M9aHZu6",
  "key25": "57nVa4JzqKBLY25uSMoxS41LNPaWS5aExnXSY7hUmf53QQ9fPRwPgRLqEE5yomf4fRPACB5Tt4vS8xXKo7pADBtK",
  "key26": "fD2WgGWB8PqqoHm3MRiU4GWFLzoAEjxDNoCqn1rejpa8JhQWZh3AifkYPpaZ4bA3y21yXKR2jcZsKpY2QPEx9LC",
  "key27": "5YVoMR7WzQrjeGLkCDENQZmtY8VKWKkao23ENYyKMezfvWgBGZUDGvTFBLDd1nSoT38TfpT7kGA1rYc9eNpm6z56",
  "key28": "2f9bXQDaczhVBAbQw5FF3HFtyc5Ch1PpprpxpSfpgknDTFJSBDScgHGKx1tYShcTAj4ABWuFREbiHsDwvZSp7qcs",
  "key29": "5ZJfoDqS2UDMYXTLfw1WdD86QFn8ZBDNHCxTtfxGyVaugcrLWaHh2YvTgYxMrAkmZMSdFqfmQdAUBmuCdFQqiPPs",
  "key30": "4aXccE3Skyxc5qjrqpVpEsbHvS3dnnJ7mzJiQnnWCj5zpw8vcnBgwqtmyyuWKbhydYg6i3v3vSooX6PoQTWw5AaL",
  "key31": "57454DkkooQtKvje64jB64vz7oRpA2vQcHNeoe8jKYpmoRs6mHRbFj9xcEcDov8PSNSXgMD3aNJy3VXAaQf3Zyed",
  "key32": "41BQmk3j89J6pDtRm3qQFhQ9kRPNJXQ29pQ2DB8HkQCczgwBoCPzuFuTrNCjpJFDyeAXKJYP2LbJNU3gBDK9q4Gk",
  "key33": "4qYqpk2X4YK31H4ZMKwLyB6sZBv8dLp4sBZbuuLxJVjJ9MubBjBg88mi9sTXZ2g6SGSXv5V2VYGy1aKK5ewW9ZMR",
  "key34": "3qFwCChiEa2pLdEVGs87RFQCFGmpQwVVFNyWrhzXyhULwZRz5S21GL9heX17y1sm61rVMgtSfhM5QQGadj5ZUWKd",
  "key35": "5Nq8aEmP2xGB6WeQHTEc8PWL7RGaPQwqCPBxyLfvTpGNCKP48hJUXJPTtQrpEKJUL47oy6Q1Jzo9ogLh8LDVKXEk",
  "key36": "5qthpFXnRJ44jY8SKt5CcM2U3kBiPcF6zweUVFTQVkQwPQPQjgdLnLVzW22TSBNPWoNwhSQGEzvMQScq6HW2Ckty",
  "key37": "3ZQQ5VBtpw8f3gX5TV2TEjKaSz6G8ADVcUSGZfyfgQxkrdx7FE9PzXhFUYgJbrZvdYC14r68X4iaXweSS1Pnj12Z",
  "key38": "4jqpusnKGWVcJaj6BR4XyZYp1f4cZ27aJ9jJHYsZhJG77KwHZUX3eh4UCWTmc2EA72Ahvagw8YfPCGr6BMQdDRWW",
  "key39": "2fTHVtLCYvuA6qaNZ1ex9J6Yoy84UWXKvRwuro5KBGq9Nj4SLkro9BrsBTnLXRyCNYBRUvqTSuNjjTAZYdoZXntH",
  "key40": "4EuceR24hwAChDaQPvWoywWJ58c1Nhp9k47d2PB39wbCZc9DZdNVJGjHceFJ4a5vEhw7LojKySGg8MoJUHTBuddw",
  "key41": "5iG2zXy1qZxiqWFeav1cuk5hm81isMkUkVh1T6GKYNpKNTbjxMroDE249AbRXJt7Ava2Z7MDfG4kh1QPiyYdEVj2",
  "key42": "5WLMXQ6Rwgg7vDNUCWhJYHZXPtRdN8QADNU6Du6JMhVaeEj5E16rmxyXKCCNSxFj1RjuK9K2esdmfEQHWp5WiwQG",
  "key43": "53zysQRPoptrntGfBud7p3XZ742pcGU2d1ctyjohDsAj5yvdMdEYhKxfKUtw9sQHT4AXen3Ct7eCmSLaYtX2kLyH",
  "key44": "2Jkx6D2RybvChd2D2SvczaWUUEeBGwQLS4iDJqZsdZdrLci1Ygkv5Kdrw4QQ8R81jyyQ64MocTZGgjoLg1aX8KNb",
  "key45": "45FSwNjLvhVQVwh94LjYiYotWzeFCXUjE4aoA96Xz6tUq1GDdZFtarmTS975rwpL3qN8dLXvAzQDez7is2aWrkdZ",
  "key46": "4dN6WrVnwb8gmmfY5XrdZpu7YgK9G5VNRaab8KQ8qzxPJo86Gb3L7sBBWFJF18GnYvwaaPc9DioYfNAD6yUQSRvx",
  "key47": "2Bkn5UuhJaGqXriXo8NFvZnxtDc4DkLCSn1rHfCrfb8MCHSkb4Bd4b4PsBoYxNHz6Fnv6Lap6MBs3KWagmUNrGhJ",
  "key48": "3r9KgriDN1X9fsxTbM6Z4Y2CmMU36P4XHzGkGRTT2V3xdPvYYcAFyUbpRKnwXGS1Hhsq4WkthkRVeDCUHuDd7YfP",
  "key49": "oSSSDnZACkfwgRKbUp5srxruYDiBsQoKLF9pvRmFZydeG1waHHTpnYBxQGFm8x4gydaiMVJ9kv8GMGmP2wH8WBw"
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
