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
    "3YcbJweWHWPCBJhoU59hg2VJWzn3L9tj6h2jxHUBE7x5HWBwRmeU3KByN9EjFvfdaY4LVrCWFJQjANmQ22e6E3Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jDz5XwZN3SE5bNxcMSRHx3111fQvi4s7zucXbLLwwkUFfLamgQA2Q55PbfpPACGeYsjEkVeEu8fWRTfmojegvJ",
  "key1": "2fqU6VKTJZXu2ZqtBGkhzhTCTJYxfLtjnRMp3bb1MQmNcwuo2j1cU2T4mRYEBGmWRxT41YG2gD6RHRabrMrMmwGb",
  "key2": "4EUaTNiMnS8gAfR6K9HoAnPvSKTVUoASmoNRWSwWQYR9pNi7wmaQyeai9d8NNSa7dh8F3k39dvJ9uiRwaNpFbP4E",
  "key3": "wrMq476dBT47XcCbZAorDvWxe7EdN3h8bV58ys9as9SAffKSfhP5Lp2QpnmSszfk9aq4hzohJjiWcy1BHz2D23a",
  "key4": "3NXnrSzUdKVKY1tjyrr7zzvBQJRT7Qc69JEHiZp3cwr1BCyYFkPAj2GqY78a7kHKnUPTE2pEfQj3RYbfQBdRp8rQ",
  "key5": "b8fq9aLSSfQoz4wy5AbSmK1uAKdbxhzPmuGaNgwMuRqSXBFoat8WSUd53Tyzbr4ApJC9oaCUQwFBa27oRtjNJUs",
  "key6": "4iW9hssVTZPRDDYgjYGFxUKhc6kdceMUd5Gog5ceUueLbECs5wJdkinKKsz96qYLp2pYD82GWFonitsysuWppnNE",
  "key7": "4Fd6rkxa2AyjucoaHv9HTwigi3V8UzfoSCricmQEaPYj7pxp7LTuPnJHwQ685rCQZAQo5fpeXusNQUVDe9cpyzyB",
  "key8": "CGKLoL2XThay4NttjFqJFJZ67RBD4p4xCVqi678mY6rpLt8W8dcjkQ6XDNCG1uGq2RZVWKjgyyxw6Aq6LKChcbs",
  "key9": "5kL3dW2QSiyoLkT9GBD9aKt9rM81qic4rRufn9ePuFFYj2F9w6AbXUkjfeSiFPA2n6DPDdhm2ssr8kE2mxE3yRnz",
  "key10": "4Q2zSQxAC19JmnQbQSrevBHQpxqpPHyrqwv2AcFErASmBoz1V38c24GW1BCieJyGVSuNvQj6XfPCa9RBPfeGHBr8",
  "key11": "2ihQzJ4ifda6H6BGkG1ywQFhS15QgeYstRhLScMib4fqCy4QG1UeBpKxTZm6Dd9Eh8LZaPrFGXJQSWYH5hTJyBRb",
  "key12": "z5uro58nsapYjBo8CLhqP9Njpe2Jz2TgobHk21YLpPBxQ5bcbaaNWa37GnBR8FnSR2qv1KWTfTfWqhZuagfpyRf",
  "key13": "MMRJ3s5U3kwYE9cW4zGgZ7Pdr1H78giZSwqmAzPsLcvhUogkxxt5UmAEeiP98EBUx7vUCSsq9pixN3Kk3V3zMs1",
  "key14": "54E8hxMZWyDSoX3fW1mDpisrC9aXZiGCELABAhAoLxXuCxWXunkWHx3nQ57MnuvT4xFQmN7o3dQsLsTeqCce4C2V",
  "key15": "e9ueWB8K6eWwW7mSExruYULc1N4LYpx2jva7oZyusfiaiWTcTofxkeRxpZueeLmwoagZFBQskxiMMNqPt17Q7vA",
  "key16": "47BQKdmY8c3po4oHKFUHPu8CcaziKkjjEKJiCbjhHch9eQcnmnAo284XPJBjrpeZupk4cyXaauf2xiRW4J9asD1W",
  "key17": "4kTosvwjxAz7eSUwMc6CgLqrNkcuKKmdGHYGY3WqtmdehRds2B7hSb6xUMUDpuGYta7HwVsoPahETyzwQRVAfFj6",
  "key18": "348R4RtckvRxXxezknUYdrAyzHY3Jx6PXz6AekaSv9bZ1LF2A6GJd8SVJMPoRMBqDRGW54WrFqJLCwR8YZQJQ65f",
  "key19": "4r4a2daqPyTS1oLftDZ3jiKZXtibfNHXWjFZ6jZjwND7jEcX4cJZHAmN6irNWi5P6Bzq7hvYC43ykjdHaGgQuzRV",
  "key20": "5GWJek8ZZRC5MxLyf3fiArB6KZ62wfDRAHqFkandp1gXjvSVeLhZakXoXSkgLBDEqWRpX3tinMRcTxEEMwXVfWhq",
  "key21": "CUhWA2q86tqpEat1SBpn8Zgz7MSVUXLcW2c1V5YkedMzYdZpPywzNSE1kCTxoHQf57D1orDZtUBWrXj5CPxC19j",
  "key22": "523kaKRSyHcUqDEJkJqGbkRYy5aMWKMfU7ShHecmcvPqCEKPFxzZy4vzuNvzn1tFE1aBTCCEiRK1eBVTUGA5F38y",
  "key23": "2re1YYGdAXNRLHi6NztZMPw5TTe6NdAsebskt3TUNUhQqsLDvY9LQZKJ9Ma29HP8sehDEzLiwbeZsfGa41ySLrVC",
  "key24": "2HA97UcK1aitqWqnKxjZFKJHD1JaXEdWxLGceXDkGd6tPytqcNcwGu1i3FNGSog1j6tMpwey6Ds7US3byTt7Su6F",
  "key25": "5iNRoUGPygtyNncm3hffF6GQUyn7mfaz9cdZuEDxDqfuZYpfBneq3MFGBhfz4aV595cCkXvauonfQVmDikFNh1bz",
  "key26": "2VnAX9r8eLLR4hvLnPngxD6M6GgeJmMVbr8qx2i6UJyEvBWdNV399WNo2pgeuCe2pngBWpJsGqSfHhntha15UvYe",
  "key27": "2gMh2WrYMkEYbETiaqHG5SmJQSyG7h7bCzQmkAEifdLuF2Acxu9rHcqFyNUCv1kgFBtaSRNgYNtsu5krPvULjwuF",
  "key28": "3o23gtjFqJp5H9jKu4Usk3RJmATWFt4xjh6WcHMo9tqMpiyMGECs3HWR6LCj6Sb7kg6sX7UX592yGRSbsZrh36Yb",
  "key29": "4YFgdcNZWTzUSbJNYjjhgk1xP3mnjiYpW39rYAuAocCH7j2F5AzHoiF3KHhf1dN2VvGG6fq7XLLQw2F4p4uTdvUC",
  "key30": "423y1hHyJk21iqt2jaJ5nzrxT5n1st74uVLuCx3jyH6tQtvkDq39WrxXqv3D76X2ykKpu1heihy45Dt9fLAoLnyp",
  "key31": "34USXwUj2YPt1TToxpUcBmFKJBg1NPJEA3CHUevxYRvjPHz8e3BgnE2X23AxRVQaTDwfECHkR79uZ75R43TXj322",
  "key32": "4nP8XYQcCyoxGWQ9fHwSdrh2qQAjRVjwTEeAnzhavdEjm34zxBHpAGF1s1Z9jfh4hxZkJEA6YtwHRH69wPy4rUtP",
  "key33": "5hnw2C73ntutBTz5PL5mBwUcRZTiWN746DNEaX4gAzhviqtxCDCJm5hmrBds3U8LuDcbMzPr4aQaXdNTkMZ9nQDq",
  "key34": "2q9tLwk5TDR7ZUd1ZVwTq4rRoBgcNuGdWnRifBxTarZyzyPbzaxDECEsjNdx2kuQr2MxEUCfKfNK9dtv9ab9wsxG",
  "key35": "5JWzoU6mfV1UaMdRntv82EjfqLXadYgGdxK5L8TxjDgHzdLRxJTqS1LperoFb7Yt4KkcivsgcR58ckY5dTvvTqcQ",
  "key36": "5YhfcmzSSwBovoGUUvoRJsV6WURkmAAYaaU5MFXdayuLcv3C1wDADs92nhU7wMe98T8rLW14x4oBBebur269iAnt",
  "key37": "5SjkFgqcZm2ih4BKh4Hx5kQZVraELmJLBt6KHn7EKVA6A9st72YnVxGpUedobHeXGtcy9a3sM71NB9tV919W4SE1",
  "key38": "Z1H9zue7aDNWKxjR3S2hTbHenQ7tkomSX33KkvrFAzab9WG9jsKdAJttrZLMyDvhk6CQnG3HHQgL5ohqKAbufxx",
  "key39": "2MEUXyNd3rvApEB9W6yavswqVd4S4SwMcajAPZ5kFmxaLJUcF2i1tWm1htRVSZ8RcTcWCWWhSicMemAJvchvZuVa",
  "key40": "26sfSXxDYWvcTNNWNdvurR2f4dG56xD7TSKXajEqKRh7e9paYcc7sbFkX9iFXnuCwRqm5o9pfsc4pKcrM3vK79TJ",
  "key41": "5QgQ9BjRijNWSMAXyVzM5oMZ9NKGMKak4djXmgjwYZDWQTGaLQryngPdDwxJo2q3tziPJTmjwcTMp3JbSa8wvakK",
  "key42": "oC9fcqi1hGKuBNJQMi2fQJAhp77HqdVRLqXn2mQhEGozULHCgKRbMv6okzTpKuDmGJX8WcLSXsyozfGVfzcTjEU",
  "key43": "5DPv6XHqow3noUbHN2L3JhPeM5rHj5QuGYP8Pq5DpSj3VNDdMJJUdxxvobzUxsjXzc5SGygweKCSAreSRxjNL71F"
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
