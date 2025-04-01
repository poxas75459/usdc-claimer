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
    "3g9p22cSPmbuS6hK2ot1vUf7TP2PnbNhn4h4fChXQgaVi5LaX4CtQvMfthNuz9jipu7uw9MeFzzs4EUPF7A8UoQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKC9PJVB9VzZHiak7eGhektEPXhL2vAK6d9mEwhgEPMA24JhvdwKhtLeex5hTtbm2dfJNoaWck7yF8HgE42ivZu",
  "key1": "G4xrEmoVkcFutVdne1yGs3Ty6v9XvDpfdT1rDWJvnPBFWTS5X8yjpWsGN1Q6W3AyEt7fN7brGqBSXNWzPcaP8sh",
  "key2": "2tH3foP2Pi1LHaREUjnQHi7GGxBPwYEmjirAuMUfcjmSxHm1qe5kQiggDBFVuhQ6VvQ42iNenZYXPrS2oJafwLBS",
  "key3": "2RdK8Qm17n7sn9uUeHK9dsjd2ymiGX9tkJQQPjhnzBi8K51aM3T4gu5FuYb3gnvwsxJtYVoiC8HZfEdyfzitif22",
  "key4": "2bjZMZd3xo2ru8d6qu3UEgkHb1g3wHsydyY5AxQDtPdv4arGtmZgCUn2rK5X9oHAsRqKtS73mcJCEAjdxpTprPQH",
  "key5": "4SjK8jJ9bFe7DtMdfEWdZgQDCXJ4kiTwKy1Yk8JaLdg1iRcQdqTdJdZaDdzEaYb1WZ5muUAmpGjVjj69yA6AJeRj",
  "key6": "4cR3USDeTJbmXdhrVdRKrGg2WDKgZ92Y7nvTte5z6ZdHVD1BugWGycrYCuBA6jpeKfsrddeGVPiCnafo7RGJ5XYa",
  "key7": "4VBoEq5kWw5NxsPL6YL5PgkVdjAsZZDroaxehnMJgv3z64VkxRPeeaxxUn5sTSQfpBzh3jrHnZi66QgR7JhsMmqw",
  "key8": "3jVA9YQsdsn2D16vsssgTQRswLFp3Zojr55JchZoyfqT2TuHyZUEqubvEcuwJ9t5gw5MRwYAnBZBXzNyfhzdjakU",
  "key9": "2TwUFj1WxZvpBjeF56qkFqY9z8S8r49yHVzknwE7QWWXvtW4vujsyPKqLPYz3EzzxCLW18sP3VeQj7MBYwnQ7joc",
  "key10": "61ofKVTMX1PamBLoH9kWqjUfhas5LWBbm7dQeJ32Emb4cLRhPGmzFWYnL5KViY2w9UsvWvMzTDDNJ1AY4V63TN4N",
  "key11": "2cJ8ZCAu9zBRP3iPh2tMZfdskH5tS3tvdP5KkCi1R6HbrMJudFVjffFQC1DM8DmRJ1Mxi9NY6KUdMEhdVqmVEDtb",
  "key12": "54EGgwtxu4idFhE1DTPW1KP1fseMLxhxwn39sdjzvRwmTXiYKbPaAunbNJa7bKfnEiorcKABRNRhMvGh16oRBxMC",
  "key13": "3zYQsFgNvpNREqbfi5C4FB9kNyV9RT62UeTWSFxMKZnB3DbkWok7Z4hXV7aAqjgkAuH5dMNN93EhcRvusH8b4cPy",
  "key14": "2PZfJcECLRSq3Tm6jqj64P1GpGuHN1kCsJ37vU2cC6PYKr5oZ7WvPd1qX51YFCgBY9fM3ZhwGMUwHPsy3A9QWtLr",
  "key15": "3ZgQn3PbLyLgrdMwNgWT4n56dYBsX5w5Hn1v36QhVjAouUTviSkikewEXm6mWqQoxGbMNTzsA81PrDQrSTrEt8Yu",
  "key16": "67HRKSZmnfyt8x9cXmChVRXJr4uwKpMUFEwt9vPwDrFfP39bgXQQg5YTqkvw2RKu3bUSazzH7Sk8cYmjLBoRx7jh",
  "key17": "3MwtxNtdXPx8sXYsZEM4NLaLKbejVSRKwEhoz7DJdJvqscjTeCnaJrdE69NJXukszV6gV3Z8YnPKpkqbTnRvjggs",
  "key18": "2gZNG77hu3g6iQp7n3FSjtPTCHzCwkg2tYwsrL6nDw7mEdgHGfemyFsudwD8F369n8n4kQ4K1emuJYo2JFGw7NCM",
  "key19": "2DgqoD7sBC9VYKccWFD7Hao97EwPgPaxhSFUiRfp9JTdHYEtySxeRwau9nRHaeYrnQ9LvxSDyQjZvVM8xazQRhB2",
  "key20": "3YcwfkL5zeBgLVsiJpj9LMCcbbJZJUR8VUiZpL7BYbTJ5oPhrMqx2riVB6L3K1yGRhL5YKCMKbJ1VU7GsykJjdsH",
  "key21": "duGKkMmBi6ZTwa3ZTfjt5jBq6cgsayoJCz1QYvGD2dDqwhJgdqLPSPxv9QDYx2Zo8rAvfDkAVcoKvQDDFSwxjaA",
  "key22": "4H5eFXeFf4MQ1hVCEKyARnWowRyNZBPhEaXVMcZvxVkPz1fd8iz7TXJM8oByA3cVh6AorcVPUW8HDRuxiDcd7VT2",
  "key23": "4NkMke97a9wVtBjGs1jKJKw7x4NCnXYoxwQeiqeYed849ftEeV1Nv2LtL7Md3tCi1nzn9wgSj7kMnVEGePif4erX",
  "key24": "2s1nPa8jsA8mWkkb9PXPZoEUxNd1Qq9PsBpvSFEDLLuD2M9pp9m9zXYSaoSMQWGrWGXm5XfobtC5YzzWPasikUi4",
  "key25": "2xQ6NaVtfaTi7SSNY2nawLJtoc4e7KUiWxuZWA7U7LUADfpbWASYQNaeSgFK8jaiTgZtC8ooukQApP6cYHSJyb66",
  "key26": "2CJGJ4wEiRMvJXutsrgDZ3zm5fnW5LU8xxiiWvEvmwoyvFWG8Rha8fjNQw8o9mnD2wdfCDLKoMeWRMviF6AWpce7",
  "key27": "446s9jx9WuG8RB9FvgY7EagqNyv2dDajx1pqMV4WzsSgJyDBuJGgz23Lh6iKPR52aUFAhSNqQjHdYoeutWK64cuR",
  "key28": "4c2dhuuL92PHWEpfpY3a8aMUf8x6C7vaDEthjNvVCxfsvVUHn6K2eWkUNFZFkBiAYLz5PQexhEuU1kovHnx5Cz1s",
  "key29": "4L67uUMu1owGrQZj8juLvrBnFmvPuKNehwozxNVDPgamru9mSv26uvDytLF9pNrKXiZoyhnFAvxenBq1zac8snf6",
  "key30": "5NevZFnopC4T8nHRKeR7VW79Lwk4sNiGjdvZPWSkxujrGzqeMBVi3PmLyCsPsw4frW8znuKtrTGUpLdiSLP8Et1L",
  "key31": "3SHP3ezDv88YTUhe8kqtGFTX6Ci1uX9TZBcP8bhXHbsCrYdGdmim76uHiSegpuLZCi9JK1Wvqzo1oYe1BxnKVhpS",
  "key32": "2FdLGWxniHZkoeXn1xn5KyfKkVoaSGGaJ1yCj1bLYbeZSUrYrHtaFqj6MEizTPeEKLLTaesTuyAja8oGLhEEvhyB",
  "key33": "5TFA8rr5mEdCzUDw2N2jiPQ1DqzZsjSqRt7JgLnEiniBB3xw7mtRKhnUAyqcDNoumTayfkxqP2t4BR7BMS8BAUtP",
  "key34": "pCKBU57LnXf6X3MqFd54xf5spxjuneyeaoazSPsjh6ugmm8qU6SwapjKzeAH3982ZnytiUTGNDcz5SyUcqFLH6T"
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
