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
    "FyQBeXj5keowohr1dvdJ7THBgXtAFp7Jw1iMyyZtPho3L5ZA6BdyWLbi4oxeKS5GLWzWbQyLQ5prCg9pKFBXFFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6Y38SZrPuRaLmhkn9ccqPRJd9GCF6hafumx4zf92jTkSx4ZcRpDMXyxSakVVgMtySE2YGnns6MPWqcTiiFwVSD",
  "key1": "3DpRL8b9VafM3xBBv2VvFgsm8bPvGE4o1czn61GuDv2s4HoJAWusthq1QG1eAouinwZR18qMM4VWaErnmY3ULzUx",
  "key2": "3uNwoeRkiuvxthZhom2oa81McdoPnUxqumuFgKYxYJNcbf87mQ8MfAmS3VxZibhbn2DGDXpR4kT2RjvQV4BcEnfF",
  "key3": "4a99tK5PcvZZQ1G4ss9eE5VvC9tJuhi72PQQpTVzkZpATVw7thUuj6eT7wMYMgMrLh8TgGBiaCcNxskELAVd9xg",
  "key4": "2W5rmPikqjqWL4Zbqdq41hXKaMMwedd4pdep3ZoAa2kfnP56duKYA3EgjjPAiYYJwJW6e5FKaGwkFdJAqgD2FEEK",
  "key5": "4xQSF6QDRGAhiYUsDZMjDbJkxFbrh9JypDhBkc6vYLjchmMRgANNKTRwS2wVmtXBVXgu2MfyCi5QGUgALAo5FPoU",
  "key6": "34ggoC4SrNJSQ42AhiMauSycBk4NBTt91dAti2tvYkKiw6jjYN8h7hf8g4LEa9AwYK4aC2fnG47G9h8FJY6wGnjr",
  "key7": "SBa9cycaSGKdsRPgJvYwnc2qxSaoxs33Fa5TV2XViz1iqfER3r3ikr4kttEMbQX65eXhLgHmFBSqmYmYPtE2NER",
  "key8": "3LZEQWLAiYPsPwbdzvZYtTQEVGBCbUCq1rW2VxYMZsjXei6ww9PxJTFQAeKoxhcktAvCouTWgbP4jx8YfJaGttp3",
  "key9": "3QfmCTDQ5UPyrXMPZw5T5sBSSmM3qPVvewdNVEuSeYLG2wsSjNyCioBdgihUGw3GmZFRgyX6B7kECc1tZQZetpZ3",
  "key10": "2pJNbNqXup6ywKMr55frJv25RWVR322Ao8vRYnaGtz1TDES8yPVjas4AhHGUAsaLnBpwk6H7vuSTPpbyoW1VWKT4",
  "key11": "2pW13UN1JZ9322ec8HgfzP2gKWYwhyoEMU7z7Wa1bmos8saKVnquHd39fAR8YmwNr9QF9ceogAchJdNwV8ZgkdZf",
  "key12": "52wsaUATwpL8ARmi1fQ4FGyjENFTd9h9NgeRFqPrdefocjRMuU1PRboicmhDNViAEh8pMSgRtBennABhebn2o61r",
  "key13": "mxqkxiCkeJFmViGuVTUwbwryseUxt7LzA1HPYWvx8FFvFFouwYdYmdqe1YestHcf9478uWCpizSVuyrG82Zvfcc",
  "key14": "3dSHxBQHLMsKdxrdpQjjvbtnSCrbYPhdJW53KrKbzvju8ttM98axZY4dvgoKjnrr4bgvutQsjnSVH2hjVbobECiv",
  "key15": "3VYga5cEJA3tHA16gE3xTXjAiuN2pWA5jEeBsgbqPeJVEmmraXfG4x4NhDZrtcSGc9YCSFc8kSxodx8i5rHKWPaT",
  "key16": "Dz37AAGzPxqYvxfLVUDfXkdn9nvadw5NY94LtsRmgV3MrtnAC8G5hikowLnw6RTNYQ6sb3yMg2sepHpcJsTTriC",
  "key17": "5aBpddJ18FhwmBJfz775W2WPMHWSzPnDd327SiCTyomKawpcxE2oas8N8aUvvvLSGWRTR8ETV9T5iqpcL41rz1uo",
  "key18": "5rCrP2NroFGTr6qgTe9dAnf9ztAmsBRhe4fS25yTzvr6U1FR4AD2UacVmjJvJ9fcGa8HgQmGsfZtdtU4YUP5vSFk",
  "key19": "iEGpo7fs4CT952Vw4xf1266pu9K8RPMAM2pDSkWwV8nMzSMvqqP8rbYsPDzowYJNbLZ9KEXTUygNfA8Gxkp3ot6",
  "key20": "2thJ2wzi34FRufteZmCAPPCRSRqwJMh7Qns4Xqschk276vEJMtunQ4Liamd9fYpVr2Kqo73vDHyUJBYjnWyrJoXa",
  "key21": "2G6q9yLybw4ZPPkdwx4ZcbveDPAbb5Uj2C7B9b7bLGtFxg5bL3Ap4QqZLrWnWxwTN6cT94YsfnmqofP4UxCMjHQ8",
  "key22": "2VrikSYTP22XVNZbz9XLRzg9EQXWi6GnaUaRMdEPNKbhm7nJtBRMMseGyQQARchYBoXLqJty9pRG3JogJ3vZFxT1",
  "key23": "4ea8WWh4nvtMAvsNY9rcvU8HVrd6HthZ6zpcGRsGygzBGAR2tteNTKLhheCp3C1AnXVWp3mW1ziSLboQQ7VadSCe",
  "key24": "51TiiGhocXfv4cZgKcUR18HjotfPRAD91tqBQzeCzcVKZjqrmMWrkrpuaXmEtc7zv6LVuKUVyyBSEDjXmass1oKY",
  "key25": "5PRAuGKeMSvR7VXcYHzf3Jt76HRS7dHK8RZYrc5oEFasSeRV2dm6hogL7togYQy6NyLLPUT9uMqUXsJ4K32CviiS",
  "key26": "TLgKMgYUTTG1uQFnJjhtUNDqMHtWWXf4xr6YfzoG6wWFo55PhiW9g6ryTsfRcAQvdqUrrWyUbm6AKWWvp9KqJmy",
  "key27": "4FPU48urwrCY31GTDZ5Y3tXpmi1Dx6BJ56U2xGh7jh18PfpaoiLPmQGq26TPzwFusUjX1MjWjydAqpzM3DQSdEnn",
  "key28": "65kj1ujNd2b1fVvvqXdyeUf5AdUr6gLZRWk2uiYbLZkqLjXQC4f5KoJrxRdLdA2Lpe9BN3H6i19N1zSBj5D1q45o",
  "key29": "4rwxgkbW6hTxazhxaU1FGQeUP1LUrv7jzaDP97rhL96F9HsXwMyBPb61aJ3mJemPUhqRQgzmEMji5ZwFe3ZReTzy",
  "key30": "375LiLkCNbXtXQsoRfXm5vNhgXZSS5zWVqoetBvxpNtEoCqeXfGZQuvdDKkWe1B3scR666oMNYMiH4qK4DBxFh4H",
  "key31": "3zsz2vWNyTcVSPM4jAdA4SJNkWFgkY5UYRrQiTB1M77ubkx4TPZRczAUrNGVoT6sKim3h3Q1BmnMYTpjdVncxYnu",
  "key32": "5h5yHmrgzoNokFurLFoNWCAsY8FKiRYyTbsDVoxkpzg2CTyhSJYKF7HhJUPGa3NcNi5T65dNk55z5FU6kKSgE4Db",
  "key33": "6WZUWjfgoMcgmSNGsLqA63vod8QDUQ5uJ2v2QZRzmqxGNnqpGVDKwDXsB4fb9XwexwGNir3r8ZCpzC11qGRAABW",
  "key34": "2bHzPrfudUQL4Y6eQMticTXXsAMD2mntDjTpJU98jqUWNsg3ezkjJWn9jvSqw2uFZkKSHYXjYtyF11CgCHqGAUPG",
  "key35": "5X8M7ufhLAWBFnJPa2bdZ7xyrEStSQUecsvHNTCiWMQLwZcbj861eMBGf6SZGsJGdb5VwYYPkWJCeP6JcuRgLH1z",
  "key36": "Cz2LpUvEAFkhZQjc4KgLsSbvPmLtcW9RXK9jJ1tEgqUboqA6EsbhUzuDbsTQQTrXmwLSr1MtrVDmqjAdzgc2btG",
  "key37": "4ZawN6UYQrL4h2SoicqtNQJKdLKzgVffkfN8rEc1EgyvZ9oYtkgvcqF8C1zhQ8KRM14Ybu5RfbMaZbBkDTLw4WyU",
  "key38": "4idE5AV9ntLDUAYEzEDbdqTdeoZgDeDFQDtjZStB38qkGHgN864HHrM5sDXNAiH6rS553wpXviyXkEwDZM8u1Dd1",
  "key39": "3HDyJ63Meq97ojd3qF1v6LnnS5WZWeLuZkRjUgnQgosJVexKUrPAXge24WQayFBaVsqdKyqTeL5HVroMoZELPB2m",
  "key40": "HkaM2QVcB9ygmV98qrcYPsP43vApokSCrr7rXRhkHGjy4VmTxXfe881A2AdkCqDE9x32d4fL9VkKusgWm3vaxGB",
  "key41": "3AefSSGqTPFZLiRoJYGUAg6C5fytVgbimZiAzQG4EVe2vub5kTG37wwowLJEoV6LRpSHNSR1whUhsRzMbee8xM8u",
  "key42": "53oTUnMuzgJcbwZhvmCQgFgZiwFrNt7zQYT2HZ2SKpGWnT5Z5JsChXXRZrmQVUz5ynAHuqnf9yBjKjss7srcYCzW",
  "key43": "4G8Ze84Jo5uLQmioNUruf9qZajzeJYktYyNZkAiXQMSC71izp3Ko9h28nfangmXY96w9CyaSCBvrhtWKn7hjwHEp",
  "key44": "4P8MTwc2nJEbqbEojhutsAqWaoD7UQYTToaynghwqnZjvBc5Dh4b75SLrKjiZ721XmikCHPNJ7AasZRPhsk7RaRw"
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
