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
    "48HppbbmMZ86jNQsDysY8FeGch8vYWgmmKa2F17a2na7ddQQBvkhoovdr9eJ1xDHtuv83YZeffkyvCzSRx9zNQmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9sc5jNpo4dZNsojUtPuwvrkAF5CyLiXJNr1tJktfvKTZTh2bXQ1zNysbBxNSaaskJTAQjUuBoA9JEfJfQ5HVyw",
  "key1": "cumP94cLYzxhCpKrcaEfm8RCjjiRUSgmjdjD8EUrKBoH4CQJcXcTusBurnc3aBs5BHtVzA6JyAB1zRMu7fAfhmW",
  "key2": "5XrkPoKrazmdzDj8hCfGxne4ai5fCkdc1hWagm4iXXZaQtVgEJsqovvvNgQ9ByU8NpUiiAg4GoVVCGUv4t3tCs3o",
  "key3": "5aZLrCjhbrNJkK42WtrQcFg47eTwSshE9gbXrcubtHxFrvYoWDMvQZyGNrBK3pnBXKtMk7DEnde5uEFDKpLXAxui",
  "key4": "4WALzR2GMyQmPmY4jGfsmYueCww1M8HkVVPWVmmUCcGkxaxJ3cAUXKUBU7sdvFz3Ge9UKiqePdWhZpWDiWP71EaQ",
  "key5": "2e6BPFdcNguS2Xf9pNNMduuTJwa5NgMSCCtLhdLYzVbofe4ZE4tMptUgZJbPVcW2kbY2hNqnTWWahH2S6ig3HBmA",
  "key6": "61NkPTkd6ci1Zcnsj8twvHEoHM4WRj6LN3arEM3agTq5QX1CS1LVBAUqJAxuveUzcrxznryF81gqUWoWC8rdrdhg",
  "key7": "UgcH4TWLs4cXDPrencwMW95HMbQydg1M2U32S8sAM8KvR4TQ25Uxq8YgpUZ8ciEmdJmKvBWzd9TdgypQic2MK6p",
  "key8": "3s7KK5E3PqVA7NujbGARx2HtMSEaus5nY5bv4TkAjNpU3yv7QbeH9Kab4njKb4kJWnuosdPViHsSpEC6YjsGfsSe",
  "key9": "LAa6aiuA7uaDJPsA6JVAsoPNC59Ythc1XHHNRB36oEsU8aRZz6mwUAP36rzzW1zy8jMGmyLryUSpysGoscWs4q9",
  "key10": "5urqFGSzqJ6avqGodpwTpWGH1amASv9uHWAB8nms2DJij5VwmdTp3rA447e4CPRP5PbchwQwwuXKUJEj4NBaBoE6",
  "key11": "4D29JDr5H49AdAT7zu45PhKK5HrxW7dft1mmyZchRHAfjt3EKkfPqH1LRvnXRfE4og5vPkiPgPKkAfM78peHP6D4",
  "key12": "4oDkFkp8nNV44WMVpMUeuro8Ld1rv51gJmouN7Djy1RLjWj54QuWYjJMe6vE7qwpgfAcTDz4sLWArpgnUi9dp69s",
  "key13": "5unGgCY73A3Zb1AgLMG3GRk4mLZpQLACA6U3MNx7vRnKX7XeHYukTBEs4q7FFS3WpRN9trXcCCHwbxTExotfMUWJ",
  "key14": "5JMRHVKSc8peoBSRVZVGm3MeprynN6JhTAU1L7HCPrHyy5M5MqZf5Nora2Q14kSp9T4oL5F191izNcT8rdf67vGe",
  "key15": "5QMd9Qr17ec5TLjpmEzm72PxNk8PepuhJ4pPLiaSuPphMEUiHmJhHE8xqz51p8yafBceKH3cDihURYWitWvsxxZW",
  "key16": "2YPVMzmPpikMASqYswfnNFmezUWQFVnkj2em2ycqB6eHNpnxagFTHSjFLRtZdfyAveDFGdHfdJxghrH2SYLKhRyj",
  "key17": "2a76D7ZrvxyqTG6PFKKD2a4Uxb26hZYc8sRhks8q7gS6ieMABAUrtq2oSZkdhgn1Zxuejfz81nVJcozGgiRFacz3",
  "key18": "4CnhvjaToLFK7oNR7Q3VmdnJjcvLu1vFLFeeoT6WHwioHHT5wyPhMNavGgKKXunPqVjLa8Yv1RvpgyKwMZZSRSth",
  "key19": "5CgYgUFL8AR1RmhjadQLueAvQrdVLhAve9i1AsKaRT6Hf4A4VBVMnuQRF1ZgxqAii7KUhBLNx6KfAeQ7JRkHE8f",
  "key20": "23ECa9gjtfCxLRwq7dm6qCrr4CyP7x7PL2PEAmB5PfkBF9yemKnSe37TrPkszjGWt7aXTMypJAbxzfoytJWcTtvu",
  "key21": "3wP4ChKLxKNYDvcYsHGq2CBxk87QyMMTFHXq2nDf2fqmhp6BVEPVYy1P4vWeSQAxMRxtk8fsEkxPXSyCvnPpSA5x",
  "key22": "5yTZq2zaDz7NL9ZuKKdYqVoWPANuuCFXdj6TmmSEJ37gp6DxKhcQ1dFhEDVCm7MHG9aN5YHTiyQtz3fK9aHUGJaU",
  "key23": "21CaAcne2YsTLrxSx6oU6ewgasjkYsJBfvc2cfy2nnoacdR4meFzXs1rcEjB82qJpe8ndGNQrS22P5nJ7gjsDJd9",
  "key24": "3XenHArszwvXa197ubp8bNB6bPNSfvEoLAfqsj8WgQdvpnkwD6G8WX7QB4uQTxj3mxephkUTtoQuPoQyDGNEth5N",
  "key25": "2ox51WncrZYPzcXRzhH6BbpbqXooKw3NqRdShRzEfadG8gVuY6bHQ8LtAks6NkoKpcwEy9iaBwC76DFHZDyUgFkR",
  "key26": "5B1MHDqmmpPNtNktDpZ5hyWKBy3Tn3zgsjvAxgZ8piYFvQ6UPK8tWNUiGXxS2P7GQeWaSfhb3VBCWBR2FwAzfZNv",
  "key27": "co8yzYdezJPHzTbU6jkyAJtBGVqUzgQomKYeX1xWcQ8dwmv9WzJh2JXmpiTsUvLjdufHid1koPPbaAs9yTvXYMH",
  "key28": "5xHzFnfowbvYr1qPkpL6FLrHAFS1m8r2iUVDQptc8Hz4eP4zSvtwFvXseWBgc6xsMZE7gSuxCoZmcLJCbmZcNrE3",
  "key29": "4igtmCo6kPbgYPFJ6E2Crc8jpYnCxBTahzviP7Qs6JPRSUSwr5K7tZsEb56DEGyCbLRyVNk8atSCnyfzeCtV5NJW",
  "key30": "2ChgeTYZDGufLmpcBY4YJNtnzpryM3c8ZM2VG74Wwd1691oVe8LEozdFEK9PA7P5ZKaJ3ij3LRq3kqCK2kk9UTK2",
  "key31": "52G7hAQjCBQ9EPFs8rK9i1duuJKtQxNppLydt6cmLW2RGQRkFfrUqfEmENWE5f6myyweN38vytj3Kss2bSYz4tJF",
  "key32": "5RT5mnczqVg1YV9W5t5wSgC7XMkCXoydtsiagPM25TwwcPgk1NFweXfVXLN5vtjK89SUzsG7kjrFdnBMZH3FFpop",
  "key33": "4avH39MLoj9AiGD518MhsX5LcGda2eUKzNgqKbDXq3QNwWazMNjm1Jz75jcw4fNKNJpuCkcuDkaTrPRTZxWg1s7k",
  "key34": "3tnZhAFvuycPdsGCzkp7UDaSkme2Ui4Z75hVYgxHCJ698hNXQMaG2iqUEFt1KXq65qVGz5oGCjqeqTx1NqsBjnQ5",
  "key35": "4hXZTxLwm2tbZ73E4aezrmQzx7R8d2UZCsJjxbwfBPmvEbChuuuz9HaSVzyaBE1WyuGjkeyhpyokknNBGh1a4gW1",
  "key36": "2mtSiPhhzcY5VWQXS2mK6XMvXToQAmMfCYZosy699fRJWRKZ2XYfyP2BYFincNPtcTayMN3jvv8vr9vX7eJuaJUY"
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
