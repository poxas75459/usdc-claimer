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
    "5Q3q4JRbSMvjrxEydLmDY1Co2QnZ7391xVb7ssbdYkaczsVXPQX4zbxu12JTVc2MttYmeKkUF7uqzBPfVpci9PuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzhgyKDgeUFAYZDq6FPqvsRsAZrYgYPUobpgM9Vak3vqUeG1m3iz51foxZ2j3Ru2uY1F9rDRt3ggqasqPmjnEHb",
  "key1": "62thUnSxxTJLrTKif91n3i2f8svZ575apxWYPtDja2HtfCj7ZxR7ZABudUmkur8XgpnArBXamNBMvkhJ1qpJscry",
  "key2": "rFLCtGCZbE54roAWFAZmQJqJCzsXWDCWif6q92TZ6pPYbz8A88sM3ctsqbVfQJagCYGKC8e4x315TQ4M8LzsKrS",
  "key3": "54Uh1f5EHWu3pnTMV4iwS74MSbrJJhzPtvVK9ZN38N2cKrVeZidLXMxxkuFn37TKKThXeavidiRyayCGgSSnkqBP",
  "key4": "2qVRs3yN7o1SibA2FBE5BZbJPDDDhntHRaraPX8dVM6WnPApD1xAHWYNbpvfR2CVHWEpTofchPtpL1haqDLpNxTB",
  "key5": "2eFxE2kt9iJ51u2xK52UgLvfkW2FuxzkXZewW9WHiuQZJD33FQcmm1t1Txmz7A5NeEDdBubQ2qm8M1YDNL86df3u",
  "key6": "2cZwLcHFnWNZ3jsagFDnko34WGXuGKnD4WpzfzckRmdeQH46sUwN79bhNzPJtfPrecBBkWAH63Pd4HW92f1rd1A7",
  "key7": "4ugUzYUgPnvRRAj3ws454dDBAzJUH2dDk34ku3zmwo6FCQmmkxxEGSysPKKZCQxfnyjP6hZUKJ3pHAe8Z49xuyi",
  "key8": "ZmppZw5Bdi4hyMXgC7bdB1EbnrT3Fz83Wv5FLzwWT4UAraVfNMiBKah6XAN7sTrF7Gzi7fhGsFRH9DebBSAMvzs",
  "key9": "3jG9JfAqaqyrw4cpQ16uD2UCzXrvaM5m44N1u9ZxTc7eFM1eByU7vcirg1KFTauVTVjKkbCRhqvijWponEHkFRj5",
  "key10": "3mz8P1D6Z5YB1guyc6fFyLPnnKN29rRmP2omYHpAFdaxFbAR8xQ2RD9aopNJwdG73ogr9J9kW9UkRAqgS8pqSB19",
  "key11": "2DKNZLn3rt7M9yJV81MUVTS9BGd1EFqVd5uXvwteRokqjoYymGXYiEs2DRjmeHNcKG8a3bn9ALs3UyNhZoY6VjLB",
  "key12": "52ApUfUnAutu8Z9CojXf8kmLbzbVbHFB8Wzo1WwcL9MhVAdVGPeCtN48TZgLTs9NQq57E2RtYiS8P7ptJhmXP9rx",
  "key13": "3jLwwbyKwhjKUp8FBKzqgaCysTWJ313uk2dyMMadnbf4FLXcdm5XQ8RAJ1VvR7FGo9kGxU3u8PGyDr5RYHW8TxH8",
  "key14": "3qGJVv2dDQLDZQsMQu6x9jzdMpKv2b2AmDAQx3a2kem8m5sCWdETayHsftPHX4vvSCxbrdioeoh5P65drJymCCMB",
  "key15": "2ZXQWx5jj6jmeVcwLNsDWQyeAB2QHGAABtfQioPZoJhgPFmbYBi9AkwGPCtNTzbfJenrJGe4qj4ZQY1FMM4XotwS",
  "key16": "5V2TNb5LZ2oouPUR7ebgnTn8pJ8rVjzbAeCbtG3PUNpz1yr5jo7J7bWvU7N43x8or6yaZdKkQ81wXGdNCDwpRnu1",
  "key17": "5uKQYfyrkMcWfCGbTj8VXFirsvPRqa3PnePFUXmHSqbPQcbTJoHpMFimMVvpGpCsqmpxtd6JEAYd6yNWAQqHnn4h",
  "key18": "siR4uTjJznPacCFkstk6LwZTaHFRpp2YUc6RGj51dstkjLw9Y7oxgD9MsWXDG6M75pdKHzEdWmV79oRqJJgyq4A",
  "key19": "2x9UvQtdy6nHj6aJnRtCh5PjSDCQGPxASH7asaQjrQiFrAbv3UXTpQCF2PbUduLnj2zwuVuWoaANTMeyHnNNNyfi",
  "key20": "jQn3uvDSrgrhbFS9EkExbakcWNeDRUmk4tSNd34ZsHLnsuVGQJe46fvUmyLP57dXy4jLACJxDbnuuccowwBHLiw",
  "key21": "NywEU5QKvcURFq7kswPrnioS4kFGfFMtWEZY4rn3WbfKFJDymqaN7cmyjhMG7D3MCpZNue6intJgnV47qXWCM5j",
  "key22": "2Wm41P5hTvYMVq6YittBhftUZ1ueWtv33BxXK4oTATCmyiUskYKbXigAWMufZXTLpnv8AX9uA2atDawDa66bipm3",
  "key23": "37ZQmEDgYQgy4ZXJmPp1N7UcwX3CyC5NdTuzrb9KTG7VYA5uXmbFuHVmwo2ttV1CLxRn6fNcJ9V18hhV2PoYk844",
  "key24": "5dEb9DWKchYF2s8V64BAqdHykkcLh2SMFEFwjRjnQmVZaH98FEfi1qZrSKUwMhfKY6jf8bg6Nt291d7nBTmSyjfr",
  "key25": "2KohdYrfoG1PmpsckQTeQVaZh93Bn5YNPgyZUETGCrjLZetPNc1yXVDkfeQ9qhVmn9FDAATvSgsH2Y3XNV7YkAPq",
  "key26": "2qcsXhAuUEVAkLwFC1nxTsReNWtgA35L4FjYFevsZaxPxUT2rgwziJWbvjHwXHgQHKGsP1vPL68YbZYJtpVxEcWu",
  "key27": "dks2oMKPQo8QWJ8RGFfAzSfCaXpXfMdZwiL8Zd99fmkZ9jBSymsjPizRGZqo5ZY5TXT2vp5euJx9wgXJiVNfb68",
  "key28": "4Nomg1QMuurzutmAzu91gWHyp5Nu6pNRzuAhcs194ajbTTkEvdQPUZNJzPfMcfaWCe56EPSArodU8RxB9c2jUTwU",
  "key29": "2Wx5ZjkvQr8q4NWmys3L3uQtxErEEQwmDuJm2hGzDowX9y5gLwPKqLSG1BLHyjMkm2Bx4qKQA8o7WqTLEesYRwQZ",
  "key30": "2i27t4KfeMKdHjTQHB8fWnqpLCdtvthjUVDEDLFW8wyyb5iYgMsDQ2G3AbAx6YSQW2rNa4scnqMdib9rTabqYxb4",
  "key31": "3jqSHreexzks29MVeMhZprUdrkHjkvWp7rMg5ybm6KWASejbM85DBjhMRiJg44XDvjdYrD9Gj8LBQgvUkLv42CPR",
  "key32": "26eGDSP7wjVrgJU8Jgy5dpP7qgjAgxjKAoV5bZLHxfGB6WYVbYNadHL8qC7FQ3fjdvSittWK9joEfVPEY7LSMGDT",
  "key33": "21doXRtaEhYL6QBGyfjsASk8hkbuJLfuGpQM7PVQdXLMdkZezxspywSEkbc13wXKQMjmgRzLjAd3QeLuTPCj13SP"
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
