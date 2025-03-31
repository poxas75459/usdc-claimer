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
    "2nHGe2hk96peG3krr7QynCmR7C7DT4fneApjLm33SQJrDgov8cmALQgvzaMBVFjhdfrQNGbGQmx4db6sMPa7oCno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEN5LSHvAXADnMZgXXEPBt8drDxxsvqNnaRE8ugrnHGe5Dnt5cjEpFNLHS4mcW2MvuMhGQxj26Bym6SQiwdU58a",
  "key1": "3ZTuDW4QQ1oxrK69iTuEq5raZTsNRmxcuW71yDBqWK55rN256XwphUEvLz9btkV5pQj4XyKroQ8xxGidaurBSvLo",
  "key2": "3qcX6YSfiWyoh2CpQoBWZ2Y8GDAjA2SAMhMqDv9kyPizztuvncV7uSfDwZFqSmZZkuFXJCSn25vh3K6icBv7Bjo3",
  "key3": "5X2cA2a6j413BPoY346MEsDrMsfMFrSAJ869VTgkgwgDo2CrcJNXh94jMGwr3669GAgWnxbjDV51qeNefgxeTXAi",
  "key4": "2KXaKgwJLYTok1GLFi7imD41qUpu1VyQduSBmsoH46xrUaMTPn4H5VBHMdBJScx1yK2qSAHpaFrWRgujZUR1ZmGu",
  "key5": "2qmQ5fbLtZyHu2Wm4r2BC7Vww9Wzbc8PZ5D2RagdFnweiqC54UqDsJf7f3jzNLxCjtQCd5HTzHgkKZQ5FTiVF3XB",
  "key6": "2NLjj6Ha9jGzNdCzZJ4riun3HRgfPoZuRVmCTwbysJqa79BHtkQJR3qeVGWACcLURppyZjgFr1aHkNBaRxpFXAi",
  "key7": "2vfB7imzwnpVjtbhy79qSXBjeU4y5mp3KK7KaWUsMLPMMTweQ6JRPcEPd6XZqjtB8iwPutUGMSgZ92AD8sDrjEbT",
  "key8": "YXS1JbCBLNK72pWTVDBZmrcjqDWaDgEjrBrdSuwu41hPSUVAtPZWmjDZqPfTU3ru77KNRooAzA5sNcAPNLrDmcQ",
  "key9": "3NzbRPbBi3JjimjWLwSZ8Yj4M7ig457jxdu8caWE1XvskwVUT1PMMKPY6aTQuGqjy7U7QGmPDsxKx8QqueNjfBCv",
  "key10": "2Zb2CAghEmxAhmoaqL99ZKvfvToMPjWM5DusDYueLgfpKCeK4z2EN5gnNJBwQHrzWgHGi3HB5oiyGvHLVXoGfCeN",
  "key11": "5Hz4RtfcMEyTtwKhnqGR93aGArQfzMHsZmQWR14Q8sCAiALn6EXPLUSxwUcvib5jUB4x8ScmbTE4btJ3iXBZ3fEs",
  "key12": "3kKRNf4jd1sGzamWGDcHRLx2TTMR92rMoihdaUXUd2MSvwS4Hd1zcYnZbKtXm7u8LFEFs6JVvcheh8PM6farRbXx",
  "key13": "4amZ48xFwa7cnjzLqzcJj3KNQUTzvWxSUWhLdknMUC8Zh2DTuUZKzVDkeYVq8rTMKE5oPmhVHAa2QmTwd8obD8Zb",
  "key14": "5WFoo93er6EPy5pUxpqqhV3bKzm4QWJ55P595piPZCB8cMqWRChW2XncL2UR6JcTxpdfJUgK5HzvksZcVURhahBA",
  "key15": "3Xpg6PgB3Ym9qsoEjevhPWoX1m3qZpZcjWdhZonbmzuLNpitTLJN7kyi2K7marMTVxFveX77WETueCxxQbnoWwkZ",
  "key16": "HZBJYy9NEzddHY6vk1HszYkjxSVAJqcmiVRMR9dcNpKuVjye9j2nissA4haSRf2ZmUfmHTDNDsei34UyX8RSqqw",
  "key17": "ynmcynm6wHZjzkSDFwDFARnETazHpJy2BjyhzpSdbhV2uPtKeAPbUivcMw7UzjY3q1x29WXzGWz3LoVstmnQXCh",
  "key18": "vyrMy9SwXsPVHT1TZeyusYWQ5otZ4g6gppVMeHLjDNC7kGUstG1gXuBsZurkEPStqLVPpEyuQRYCRhhG31B9BpS",
  "key19": "22uxTHDbCST8QbM8WffqtPELDP1hGuLRw3Y2uUUCwK2cjruRLLiA5U9sCMCPbi6RVDu55MHnLNwzfrL5rou5TMua",
  "key20": "JRvbhUn226oZagtuLqXS7LRoSbzP44Giq85rPRGVQsbP4hwYvcsoE5FtjXhZdsbUYAWBTGhxUTMKW1BwrxAWPau",
  "key21": "313Y4EpCH5hsgxJuvuQDRJxw6CmuD7hAT3RrHdaBFsT5LJddBuoW4yJMJrGVBeahuFrKa6eAycK95RkqJyeKP3R8",
  "key22": "5LTnRbLNsSx3FExLc1NNzSJK6E9oXKcqtNmVHJV19vHNKkJo18X8rXD1Avma1SeRKz3NbkJ9h2gHYFHHgAEyuuMk",
  "key23": "4xg82YL29r9VbLft28eUTh7epn7JfoJs7Ym4BCkB5cFiDqmTR9GgjNGqVGCVPoSkzFqmvxtQAizFjnUYDZhdw3t",
  "key24": "36jWFDhfU9djaNqrm1EVXT7Db6RyfYxtxptwWAdsTWvYy1oPBqFi27rPGqECkqQMtNq9PwBt3aaVqseg4RHTe1Ew",
  "key25": "25Zg64tuy654kKehh1snBEqYgaoee9rKMRygDvdJnySg8aEC6awakQWgqfnKiLA9DMtPa7xAaDFMr6nWeXtNnati",
  "key26": "VtBqqmSsChWmydRMNFeDvsLB4wK2WzXmoN65RBxxF35wX4wNjYoekyQhHSQC1nacf2uBkMQrBzo1aY1uSCe8MBp",
  "key27": "556TG1pKxnYrgPCswq2BkYuiYwoinrmqFo8DAxcmyYcwzmqNnXEfnLwGZT7aptRy4kM5kXQCsPgFodhMqfuYWv7Z",
  "key28": "3ZExPbqdLgyTek2en3Eos7QxLaeHJVr89QFmc1F9xkaRgf3Fq5yNQZ1q62du9rzw8cUe5k1bP5iNCfXb3viRkYuy",
  "key29": "4nUjJ17e9Qs1r6aPSb53h91yGtuJtyJfxpYTY7PT7aB2dTtu6F2kyUBfQckZWFi1UJSi2oJ6n9AiV7KJC8GaDFhR",
  "key30": "DTxXEnVpz9MkCJaYQUH1LXP88gTej91GJG7sosWp893yh69MM83j4QaSYHkGZepiMvTxQfgDqPZK6tnZqSCDAEb",
  "key31": "2aUFmsZCeocwv95amyBy9ZyNBX4hNNemZ4tr8TSdikQo8LWMgMdEXNxZe9pu5fESFyoA2Y8783nS2vgVtdW5GL2i",
  "key32": "2gXwzz84gooThEcDXDhS96ssfZKM96WihwMfdVfqgxVP1euG7SwHyHDTAnW5WvtaiSZQwv9HNGFMCQXdguQa4wvf",
  "key33": "5L3BSmozPcVHsrXDMaj32XVWVcRcodeLAAxqSFsw1VaQ2FG5zy38z1AMbn5Udm1dEwmfUo8kaQeN73tHuu2Q3kuY",
  "key34": "3zQEYRBADghYEvkcAQvqqxPveLKr5A6rPM46QahqjhW1d8rCcoUuo6aTMdqXBf6T4jjqVB8PTZzkZWv4PFbjCS1m",
  "key35": "3KtGfoFFGLjTfm4qgYvcCc7xwticf4U56tFfcUoA23Q47Wur1SZe4SL4cHr8yrvSv71pvVt8KYspvTCcvmCWJ7eB",
  "key36": "m4uzVm6R58AgffnGP8FtcQGMQDPTg7oNbaa96LS4nFqKZYrwtbHLRrco1m8qc5BMp69DavJKp4snbf7YVxzrUGM"
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
