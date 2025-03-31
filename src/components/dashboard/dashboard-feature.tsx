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
    "wfX5ekMeGrqJD9DFcPA3xbYRzJ9NZz5ESAYSk6fKraM8Mt4Kz9jLJpMsbscWsJqtGfwyMBuEYmbJzy4VBzFF6yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EX2E7dqtqNSCoBL9Rce5TfSPJaNWmu7zYPh8c87JUodaL32aiWuiE6Watu9emTdhRsyeXQ353DRGm9XEUMAwf8",
  "key1": "5QZvXgVTUepLh9gsLyPsq86ezcJTTHo1a8qa6Ym1s5trqUnmU1XwEohDAwbeiamKmPfR4YVwk9uPUVyAVHeHda2d",
  "key2": "LrzFFDG7b9ZmWP3NuU82XbxEwNFWeHoh7pfDaTZ5S3e7FnhDmDJSDX4DcK1W5UP9Xw7ckZ6zQCNc3sPBPfr4snr",
  "key3": "4UZtXTMs542zyUi7BJ9C8rUtpKKE7NaikrnHyLsTi5YymTsAXVfrrse6a8AUpRYkcpobScQ59JrwFoK2JMKi7kJa",
  "key4": "S1Loy3zn4U2xuKqGJiRVDZx1GssQcnQ9De6DvSXkuG1n5m3wVrSAZbTrnTtyATJrf5Sg4skHk7mTRxZi6E2vkUc",
  "key5": "64pq4wCc9CM2MtWK6vpymeReN2gh3sdgQFSzUuSnrH6GN4d4tUeTkjqsupm6oBuFEhn8dmFJDiFFv4xY3v2usLFZ",
  "key6": "hPWWKgW5Ukazxm8Gs6cCEa9ecKLZQ3afwCjGXcn9MVbHoNeaixowyUEaufpNgJGUMiAbYk4Je5ahMZTKH6R2KKg",
  "key7": "3hYZX3u7SUWQ2jaQWzE9Abm7hV3Cjz2EosbVJofGQ1G19u9fBDAjRyxXuaPaA1uHApv4RBioA9radYUPPh9DYXWg",
  "key8": "4gmrLpBACN3FqFWgqg1ZKoifeYN5FCXdHaHeCohjGLheLhCB1AjNdouLuBrD9n52ejHHnrQsbsFsFmqAaywnvD41",
  "key9": "5RJVfYguYjriozZoDt81tmkzLM6GnqqwGRHAUebkREz7JFtbqAUbQUYtGq1AWPrKxbAgokSWwRChHkdLe8Gu7XMm",
  "key10": "5b3795ysypHoKhGzk7RFA3A5h5GXqw51R4ziAx4dv15tZC6qBwEnmVxhfeYeyAq4rJCcumgZsPvPNyBMDJkGhZu4",
  "key11": "24ag7jB1ug21JYhuMF1aQS4F3BBYJQVypmbee8X38Su5xwsBTuPGdXFnWuqZziaRgGvuojvdfyc7j8sAA4m7yS3J",
  "key12": "19YdEBEBTrPZXkm8rmNnqNkbuv1bAGWWQYeseFyK3om5smMnGmU2zTbCg4RaspBG78Sdw1dc2QhAyDxvmDfjc76",
  "key13": "53BmQJPoishEgp1nZmB2YjCV7FAMaHZungy6h6NXWkUF4SwLwkzgVchmaacPGiqquVQbrxJNKfvZwGtmCqrC7oxH",
  "key14": "2kFKvTBnDLsGSa1phRC7mqy1eSyf6TDfLnYHdS9XZhHjCiCtRetJ6KPjGnLDtFwVdYBqpRG1ibPLUNVXpA96rKZB",
  "key15": "4WPSPJhjDADy7YGDfk2JtcDxQfJoigk6XWcPEbSxooACS5PCFA6REwGu9t3R3TobAeSgtpWGESdPoy1tqNq6B5LP",
  "key16": "2RGwty2EbwXdF7RphFQ4uithej1131vCdHKxaKvKjsfdap5LbnZtaj2dh3sJ2ShNLrnNdS9UTppcTpFjN21oixvX",
  "key17": "2yqZ5NSvCTj9LGdmaieNhYJJahsbEkbyDBDEL11Ves5nM8LdEiSNR3EN4aXUG2RgT1bQbyK51gGUR9r4jGAnfXLa",
  "key18": "44Q9AF384uJeqtV2oALPKiLJczwxYZyrtn5i9rJJKe5UtvMNQWwMs8BtnB1C68BvwnnwXUHxRWBcTv322NojTRBR",
  "key19": "35tf9ST6nRvQgT9QCQENM7JqWxKjmA2WquLmHyguisq8mCCwmNFsgsus6Pn638cDoZ6F88f4BsKctheHjXHX9h8D",
  "key20": "LsHpi1V79dTUK5D8FB9VTiNKbmEkqFQzVGz2ZZGdpfoUkuPyefTBZV8z5uwf8HjNopZ7C6DRAc7Qu9bpNaQcUPT",
  "key21": "fwdDPQwkc3miLDCdMrvsAXgenFoDjeXoZnxnfhnauak8W2CV1DQJUVWuYkwWcX83fKrzrWsLK8oMP2hK1gUHGMA",
  "key22": "4b3Tjk4g1SSQWM4Kdivzt4EBXymRSk17SVQZA5t5a7pENYT3Xa18Eg698eToCk1rm2hiDSNEh4CVeqY9wT1MEV2f",
  "key23": "39AqmrSQ2sgiRJNAD8X1vavZhCikiJ3YSuQviD3famVGuM3HaNt6RzDinmxi42KrUScvcGJjAoyKdAKXHciuJhc8",
  "key24": "xfkEhGY594bzzc3V1AUjVhQyu5iPWpu2Ed8JimvAZHCAVLws3uQL886SpXn4ngFtn2uh3L5f3SK5iwx2jwdKF5g",
  "key25": "244c3NXipUey8StytK88Y7x9mxPPV9rLQRELXGq4wk2vBYfHuT1Mu6eBvUibVDWkLiQ2Ly6zGSdFPeBqAZXu3dRv",
  "key26": "5LeATXUwmeCzG4qc14qhtWBpM6cMKP39QvAQFQqLsyQLqLY82bxx1YU26QSd4VXEERaT6NeizdzgWDbMgZ52ovD5",
  "key27": "5BuUwA62MA3sUZBUUEqTD1mWfpwNiQ6bdtKZHJjAWMoTqSjofFqrEYvZaTm5F7frLKppdzeocQkYbTWfdF5WxSXX",
  "key28": "Qs3yrTM96BWQ92zoiKMaDfsjSPL9oFRkSVgTqH6rm83FKBTnH2mL8ff3jUSsZVqCGNZV9nKaD8ATTD3BE8HejQA",
  "key29": "3p6HK5kzuCgNXfHKLLKeXku3JzrjqkBWgLoF2h5XPBKnL71EbqXBnkkqUNn2V1kBdfmCCp8V2fua6AruTTexgPPM",
  "key30": "65xgW443KrJzUTgtGwaJ3aC7hBHUv6KHbBA8SqwRNmg3ZrXFs89Qw6EsBqjg7UJRYJJdipTDpx5zjeyWpJKwpLvD",
  "key31": "5QKuRUENsGwMAuh6C7WoPvuAe37rwdXTxSJc5AsVEiA3pKr4uDB5ycVQX43QCKX5bTVN1YdzQFNF8GmKPmGvootF",
  "key32": "3GSttjiqqXNh7i5u1yG4U9rgSAnvVvytXzwDfxkan75c6oAWjghqf8CLFNMD2EgW2piEpLf3MjK9jLxPDKhjCDoX",
  "key33": "4xFDihyVP5VsAK6jTHFvn4xoRBhbwC2erLWCsoMYY1RpV1f8q8b5V1RqQueReK4v5iR73xdjSxFPDf48ziZTVEg9",
  "key34": "2ZTK3w6pBrnaj1kiLnkKeRQyaoUkB5ENJJyf1HfW9Eyfp6mC42K22C78wNQy7XTxqsyVaWk1XgQYDuf7eyzxayce",
  "key35": "5Ba69onsJH2UinJUHbu7dmmprEU2yeWMfQhrDHp3oqxibyBtBFmn6Wxv2CNigW5koGNjZFBCVs9zyKNEQDwex52L",
  "key36": "4pQs3g6bsZPPzxdF1qJJNZeMij1ZTqHPSPgdNgASHFE9hjtpxXAwXhTVwHRWAE4CTsR687WX1yuKuxx2HVXUAYLz",
  "key37": "2vT5XdUKkggGXbxf67d7EWZL4gAijhdpAdk1SVY7fbDmyGPDiBeT1rh6YLx7uoR6NmQwxwZctcfek91m6HHc8UFh",
  "key38": "5VDqjWqBtSzg9XeSzagVgFPxXHdR1L5V6mmWFMLbWPk7Nop27AygaFoEJpvgFE5UTjFP7gip3Nbdy2twwFFkQrM8",
  "key39": "4uuzt8B7ihDejaukJ7eitgGxdMh6B6qZGzTQgV3VdKh7wi8ouruCRLdVk33Bs83TyR1Jn9Cm6zehL2G79TjBgkw9",
  "key40": "2efjQnFTe5wAf1JqVfpJnJgFqnVGDfN77bCV6DC54qcfcbREz9pzZCkkWd5Vd5aBEoZVtXzTyJzio591FtGVoEV",
  "key41": "MA1DsW62c2LZXDkczhqSi4wM7gTX93q5NfCut8DwvwE2Yh15z7QXmQhkHpY2eG3os9fpGSpeKgYgaPoWGSmxjq3",
  "key42": "2szMxPwasz53j8Mb7X95S8mrGVpzvajrfeq1TAmRdeVXYoiCNaA8xe514aPASpBM9arhtXq4YQBsbN9z8E7ciSeQ"
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
