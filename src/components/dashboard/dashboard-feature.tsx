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
    "4RkJW3FKYVse3GJDDhkRr4nGkEAujbZQ6L8Wwr4TwdnrJvBGTADwLn5Ja5qyA6vEb1owZSxijkYGTzbk6SYWXPSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yt3xd24NCkb2krAfr33hW6dpXaZBmWb54Gwqykty4Kh3PnUiUq89zddfKd5umgAg7zzocuSLxPGPTwbnw9xubQH",
  "key1": "4mj65QfBHFM4w9akiGM5stjNWeKdz64GpXyW3k3V5bg9CF5fEfuHZMzLLi8cBjBRNd5ikAdhMsejpBr4LrLam7cj",
  "key2": "3XE77563NsXW6bVxLHaXgyvwG4e6pTK5MZzju7f1Eb9g85L2gZBrK5AeskmGsJLzqc1L9e6stuPNy6W1YFQZEM9b",
  "key3": "ZiEB8wZzxdM7hpEgGWU4cV42X3a5byJzqJ8LRGLS3k7cxpTCvZKJCws77QDrtYn3u9ReEPz75p5XFwiM268YEvi",
  "key4": "4XzDLMGCCv4XLCJ3HvrgTTBo1aVPAgGKz27St1L8dnu9jmm1uJba7x3ZA5MJtkvdMk8sN3cJqwzGey1dRK2WHd29",
  "key5": "1pf5S2RHRvdzMtTkFtWApGXdT948BfTCoYSGdLVMjQzJLh7PdjUf2TAt6CqHME2vWBLobqNG9vfzRe8VnpH8Qmz",
  "key6": "4Kr2dz1JLbAm13D2GUEmzZc4zUeb6wy7d5YsK2fkKYPhyv6hcuhwecKfxRKB2s4e2kjECm8LVDPxoTWMQcv2uR7G",
  "key7": "zGkXmsmTGLUabsn4rNf5pjC5xvBQCf5KKHTQvbQkQkUM633xHMoiymmmDDpP1MYCkDL9WiG2SrqfPvWqXdokYAr",
  "key8": "3xonsyjeNv7nCSEaoKYzdDVur9gWaJA9Cye53Lv5hCPMcmmw6pCcojgKwe6rpsDfrZf2HUpKk9R5iBcBk7jQBG2G",
  "key9": "2m7seXYH4DNgtdamPmRD59aVMVYNLP8yzWHxJQS831g9hpLvV6QgCfzV3vD7mvve7QSsLuN2XGXJauN4URMUAqVk",
  "key10": "24VQ1nzQ6ksir42sM6ncnoQJu2y726MXcxq5xrzH4BD77gqAzVQecTJCtcQpULZtaUnMugjRr4mE3QtHDepnoRRQ",
  "key11": "3HsBbaaWtH9EQtFVSWXnwcyjEYj3pHYRLH414vCPKY9SzYK91NLYm7z1mXbx1HMTs3169Zv3zfTu4kvLjxGPAmD1",
  "key12": "2rkJsmbcegsJGo9mimeiTnueHfpnw27sBGYKfevzScUs6yCCPEnqS574B7JxJA2y49NgqQfSrR7hX1yH1Za2xTv7",
  "key13": "4etXaREQHWf2WMpZP289hqWwY6FJeBoFvdnMCjdKTRcg6yw68dYnpcFnh6fp6cTTRYbDdwTnuURAjQyEohgTgMbX",
  "key14": "3XWWUMCyQK8rsdkrRX7ygnbzFpMPcTdK83Qo4CbWbQjBmX54xxWqAztLNXRJ7Uuv2JmnztqWbJbJ42A9Cbg3xnt8",
  "key15": "5F3X6UrqEV55Sh3MziY5uu3b32hsFLTtFb7xvwR8wSbABFcUqGr5HUWU2RscV9BW8q1ieimp3LzodpZmSDMqoKs",
  "key16": "53Z1rSRCDeBXLcbXPueDyyT9FKN59VQrfQ4oRUpfpKvFKLdm6wD9iFjcHTaY54EnR9kFzamQ9pQpLHB2CbqkrUcq",
  "key17": "2ZTBoSdRhxh6MCpvhPxvUaiNKHEbNhAk6SAuhS5mXdF2aG5Nfpa52empJ8p2aS3W3D5yp81iPCCid5jfk1nB9Dfv",
  "key18": "4PFew4vZcfmtJXgG6b8XcQGMsV3WRt4TP2KXPx6qNiHX2EfAsaccbN9FLYrrAYx41Gh5RYvyi35SVnNvSpQoJxfz",
  "key19": "5neWiM9HgebcB7x8jgwjcWMLWPudzByUBWDKCYLLkaHeQbia36nxdCVSdd7wvayQGvmg3jJqQwohZkzKBeSRNqSE",
  "key20": "2ZewKrsFS6kGAWcCWbQGke7z7mZi4QV3BiZaReP8ZqfuuFZhcFy9NdHZYdh2iaohz2YYqARnLK7gQEzatfmsBioi",
  "key21": "3uuncomfaWSaQeZY1hVDdd3fiAKaV7Hkeaeza46GoxohfpUqBQRaDceuSPGHJbnhEvtFuHBfE7LaZuVqHpAvnTVT",
  "key22": "5ryGeRiHxCrPZewu8Q5VWY9xrjWyY3gSaJCxzE8wuSaErUXmWNv98oRGxWSBnH8TteP9g6nvZ4pPns2CnYg2h7Zc",
  "key23": "394fGoKzg726N2wLvWj8ZubwgZBJWWXLihmXj1QjrboWwtdyu7ssw3p9mr2H1GFfzpDjLED35imV8Z2fuPQxBwNB",
  "key24": "ViDdDqJufcCyhWwVsGHaaFoEsqTuR6Lvj6caqpNy5NshcncwkBMZxmTS9YPJSyRjPD2m16YjNMBzWnua91qqNRq",
  "key25": "2v8jkyMvSvwas7BgpRzDur4pSuzW9C7C7VCZ4bafuZ4jEVCisAXHHHCG3yqZDDtGL7FUwmcuPB1ENGHheFwxL4A1",
  "key26": "4oa26qkJoPA188GWJNTNfGNQcGYs316E3kZub3EsSv7FgbD8mGrjb1GXGeiVVfMbfBEff2ozaUfwF7ydVvvkLNCH",
  "key27": "35fLKCjUrpahh46jxGFU6uL1KoGdQtXmYmnJeiCsmndxFTb4srQUsD6UB53kCwNXhQPAfS2spR8iagM3QwqCajGR",
  "key28": "49MW8Mtu3HSMSu8jf3skT1AbT8RboseGtVq3o7LVhzA4HVCHQLgwhL1MoB1GxHSbznJzkDNgxL6wpsnxZdBapych",
  "key29": "3xzznBpsz5j6NyY2gV1ueCGrL9QvJxtDWm5xFUou81v2QtC6M2FYy2j4qyFEUMgAK652vbKmMA5wXXWmfCbT3ZZ7",
  "key30": "gsvTwSo6zKT8RxdBC6V4iDAFjmWVsqiAvkXLpFWVKXSdY1AdpX6VERLzYQ3WzMbrPDLhUx8ycXo41HuSG9ypboW",
  "key31": "3EeKdgrgSLpansvKTzTEYwLWU1s6VXuTKjjJqhg3snJXqQi39VvBwA5bFjr3nWb2xYjnZ56LCfbFz1iqMrHkhQ16",
  "key32": "57nKxjQttWAJETEawJsevdNWLoQMH6FNygyEDm1CzJqFKotEmHKp2A288LoKKRLPaJp7YriW9NWyoDwa4sKikKP8",
  "key33": "5YerNaw8FYTeifhZRuWs2HQuVmLyxRYjTJB44WMBNXodNMqZJvDPgA8jf1tfnTFDaFHS64CHCMGGYnFmK6LFw5fk",
  "key34": "4tjKVCdXapbJByu2P7BhMMJodhnuvw1qQZ3ovDKAwQt3ESAREhFMaxNM4xHAiQaQjUPYwPToESwt7US4LQiyAuUX",
  "key35": "3FQowL3N5cpkQ8zyoJrX3iesgeM4Rdt4JrHM5yvYmx1h8fZvEGFECFyqFWcea5dgsJSBiMpfA53V3tPhd9RqYrc1",
  "key36": "gqdt5tqZ1uHhi4CcqfU5oFUwjy33seKMQc7Vi1xq2ZkayQT3ZPkbKD9j29bKpX7TQuAGa3ETeERfGJo1P7Wdspb",
  "key37": "sEThSReRmqiSfMHBxqEKpap2Xb93ytY5MPcuhTfMiaZ4Gj4uzD6nu68RCmV8Cdy2NCNHLqmUASKpFeL2eyWmtzZ",
  "key38": "3cn9MLdbUv87S2bx43Cg1C5SBVF1tfT6ppVVCy6uwES8ZwSdWPm7Wz5jx5rHKNit1Z3MdMvr8xFCPDx5h4sJUzpv",
  "key39": "2vCKczpCJxSxFwWoUhD3TF2yjPyR1iER9YH3FroPswgbKyauZgLCuL9RvHtkcKza6CMpZqa4nHomuuEohHM6fJqY",
  "key40": "5VWuVhb1KGsCceog7bRTfrTwQC3uZphj2SoVwhrGBZTr4q6CCMQHJoZBMQZsV5ZaAtdrZUB2VK2kXjR8g7ow9tBV",
  "key41": "62NJXD9Y3MyJDBDCpSJkNB18qvwD7wgpurhfScJ4pHg2uoGEmNC5qFWtHp8DDuLo4CcRodhv7Ke6CnJzpUA5Mt5E"
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
