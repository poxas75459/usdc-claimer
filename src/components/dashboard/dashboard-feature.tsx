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
    "3EepsCc2N36oqjY4cWHrCd3G1zdueqGab2zk9shtvbwXP18kQdTF5uNp8YTM46w71EMrkQ3MTpB5BYW7PuCCVBHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRP2hoee4avPBcFGMgTH5rJDD8pAezCNX6htNn8v3QZeHsNFS1kisbjFoXR2KhymkrAN6B46UrfnBis8uWqNPXM",
  "key1": "VTcFp87VVvx3V5YQbyaHJ3ZW5Aev9WG1DG8c9yZ4Z4XreEYfgYJHC7X3xsEgbMW6jL7Xcmj8RCGCybehTpXazQv",
  "key2": "61NrmiUYoMUTSnLE8bNxKeewUY8NkMwonb7rV2RMNRbTQmGWABW24Ecfb4bvxnUJsPadE9TU7gaZaBv8FF7yajeF",
  "key3": "34gUta6XKwizvGtYhS5u4JQFyFx6oKEeGjAPj14TcJ2chDE3fUXdJ9xMvgTeA4SDJv23ucBDDpkrvyroo9j2tA4e",
  "key4": "yXtzr4iTUacnGUiXwfGrns9NTG75AB5Tur2rb8GzmVSZhxa5VRUi8UrxbLUHuPcRo4GzTQrzo741UMb69UF8h1z",
  "key5": "2BftnqMabZwYr6VZeYEvMzKx6ETU2iXuXqLvQbidaref59S2wHgdabA6ySAMTn1GxuL869haSXiE1kKFExd9K7eh",
  "key6": "3XpoQ2c2wDYwAqHtqcwyfG6nDv3WXgZPqCRm6L9KupGoxjYPNRtBaQjXi3PRMGybDQCYvetYYdEcPEbo8YTs2Som",
  "key7": "LvM8Gbj91K1TtYdNZ3gszpc9PRicmwsVRjF8mXo8UqEVfAj7uxN4ZCGQJ42e6CJK63oA5CYV5GrG1ospDbtvRWe",
  "key8": "2uUUmHNi85w4aNLPm5rchJc62WP5FoPUYwaupCaic4Mfk9AU8Ckd8Rz4uNXaFofoCVLRzgSfpRnC4wigijCjc6F5",
  "key9": "5KhxpVQ2jELQjEFNGpxGwrUgVcksMN2iurtofqfLWXEmW3xVNAJSxh8Lnm4eZU9msFuzamudJwe34DLVn1Uck87Z",
  "key10": "E9mqKQb4UVZhfTiM7L4mPquMc4xMkQsYCD25Gj2FWozBrDxnURZrJAYwHAGih6Ega5GoFdYJUq83bNw4zexpDiN",
  "key11": "2pzgy7DUg8xWCTdbtVXqMa4BcxbNdhVxYJeq3wbZYNpgnzykrMnF8jzzny3ZnFAEJ5eLXMuv6AhbEzJ1MkM1YTzn",
  "key12": "5XcEhqoShXFTiAsMc3VAywoYz2cv9kWdfyr4PANDaJ1osuG8KJpg9ufSQaMs2hzvCCoLZWt6ZF8CmLoY2CXAwQSt",
  "key13": "nMTf3gC1W4xxagEUq3EWCVTB3YNJNdB6VRDBi5qCS9ZgBJTtVJYXzn6zRd8jjuFF9wbqvKeTVtGAwtkPbcBTzCu",
  "key14": "4ikTdvzcYgCGzkvZzAqPGaafazdWjbqUT2YX53JSpdeNxWsussgZVJyckMp2Vdpcr9Z4CGfddd8FXsaKadAMU4gD",
  "key15": "32vJ14VtDMs1ia2VNPk6HNBjpezP7JGy8pucPasx4QotfLPhcBpd3xXPgPWrDp8aP8RXzMyra2TopuHV9C9WoP18",
  "key16": "4jCy4xuaahvAzeNKr4SFr53hpKDBrm1uRZd8REtTuQV2paMMvuUm5WK8ocjQd9JkJa21jDY9ZMkFH7TSq4T4uLDN",
  "key17": "3ycynXqLm9JhAzfCaENtTu9STFBUAbyg6Vfh72REDHrRz2fd2map94vXPzYY3cFiU8An3Y3usEY3KqLS2XMes9Re",
  "key18": "2a4yCmwwqkcec1nkGWecL4JMd8FmbtJkRQ1SDN4kFefeT36V7RyszbkMDPCaQdqDrFbG6amAZxN9oYLKjrPgjy8M",
  "key19": "4Ro11And6UumvzTDzBfk8dXqDCz7x6pLYahz6qB3DBg6KNVKSehme2Ui2smMVJcN44RbZv4CuWC5S8sM1MgHm8Wt",
  "key20": "3LfUb2vNZ74FvkKStEC4v4EjeLCzVELTVs4anafHY62kHm2wxtvUZx3BDyDo1i7WBkF3XjUvGj6gfxvHvEoNpNE8",
  "key21": "4gsYJDpnJWUfoyYtSjcCby4dpfXwqeVAPc7PTYCyfzi87kZNsSRNuBwwEpauQ9npa6xHvtvNVjW5rxdgxXpxS6WT",
  "key22": "DUZVe189aEFrMc9bxUyhk2ywkTcsvGwMio4ZanVGogRVHDwdBm23ENPWaXmMjEB4m2A37pdxEwtHjHXFCmUe7bt",
  "key23": "4X9rBruF4TCacua9RVPbHqyATdFd81EHK64MSN1RX3ZK3XK8iG9Xi6QV7d7uGpvxSKrgYF7eRDu6bSRcHzMPnnup",
  "key24": "4zHdpxNuzqXWenWqB68QBt3VdXtgwEzzjSC9ezYpev9wnywkKhVfWZnfwAjhwfFzB28dfnfyky9ZjVyc9DG2Ct1m",
  "key25": "5JwLMM4pqd4XTPjn5ds6zzN1dihFTaM2t8W9uf24XhPf9UQENzmUGUaTiaV8mrrzV68yRZXhKPzcCv6RqW5SkBqJ",
  "key26": "36bdhNuLKDmRKgLzkUozNvekCVo5mp8hcwLbtWPnaEotKWuJndVUXp36K8qLidebmeEuRZ8uLDW3Q9gufJWe4wsz",
  "key27": "WxCU7y3GeNGfRqXDB2XFst9AtEgSXh1BzMK3Faf5M1a6ruwJvPXB5eUASz7mXZpdrAUih2x9UkXYjPwykb1amKw",
  "key28": "2d6L7Fpu6BA8Bp1LdbaaVyNkmYDM62mMLZML8xwSaH1SmhMGdirUJsH3wX2qV7eCGTisNB2t6XzAunRavkUEy9wW",
  "key29": "3qqTmjU5wwMnuQTsdaYvg8fNJMNsq2Yr5v9Z1oGmJFJBrArcQchKN622sGBGNaKynHa5xpPB2hDXT3pBdN3pRRUj",
  "key30": "21tNTuFWxrDLVsVxAtwPTuStVitnE2vudVkga5nVmwAhW9eTC6hobPou9UgMF8Xu7WNecvf9vX7LwNokqHK5Wtao",
  "key31": "4YAhWycdmNWcezj5EGEK8kbTdu7rHfA645iVLamaFk73xP2v1kBVLEnFk4PzZJYRrxXWoQ9Ej5ZQHxhTGu448Y7y",
  "key32": "3hiFn4fiB1w8ZaEaB7q9RXWXvgjrTVX9rpLua4UEmDVHV8JHq73zhoZmvmcZvMRLKKNGrdNw379RRJU1SSj9MTJz",
  "key33": "yvMTbXb7FigcS3MTT2NYdpi6VgzZfT7ixbH5nfHPpnfjqFn364vXs51Eiv9Levd3W5KgS78Y4bMctJrhhWGwpoG",
  "key34": "8Ab4jpP3GfiKDxEiEex71H1QU3EzhYAuHN56y3MfkJwDixA7BL19LcQAYS4jAHjkHpLHYk1tTvNbjrpcgeRE7yJ",
  "key35": "4tPJT2V847ufCeq1RrJdRqv6UmWPsThfiteXqTAgNqA4VVY9J87rpGqwShtWVpYwKFcj27XQ7fH9SwCLuKKMJVKC",
  "key36": "4KVHZUCysG7FAGHvbqsPKRTFByqNR4gr8hJ7udEAd5MGN4J4BLjHZSKZWCGxMAu5SP8jw6hSkW4HsBWN4XuRZqi9",
  "key37": "3oxcB6Rf62UJW9BdXT38VXmSdKm3oAxXhjnYi9mgw8fhBU7SRvTnDBJA2kUztbeyJf8XA1qxa73MU7JTYuryWRWN",
  "key38": "5ebpF93GKM5bymJMtPr22mCKF9fr6EZFToB5E6VW3ECC3TmofpCyZDHz7cwkJBisZ2QP9Rx1KSP7imdxM3fRCMtu",
  "key39": "5U4T5hEC9LKigJZmynQ8LT45ixaPjiV4gnRhTK7o3AAMA44ZphfvDeaNbS1v957NTCxnHKnWv6YnS6diopVmqbQQ",
  "key40": "t9DhQJGX4Eg67UAhcj9StLJmeqGpGMrfG5sqq3p7QzF9rZGHPqK7YM17qNraApV6XjxR33CDshuGReME8mcZYqc",
  "key41": "5MnMxWBu1C97X5vWawEtHUHWq76vfApdddEH8Qq72A6faksGbMs4VaFMUC77PoGWGz4N3f1rARPSvtXZFSZ1vtwv",
  "key42": "3fVdGg1qKH8U2WNev1qHBQHPjGMdNXeLB4bzNWPBBZTm7vb4rzg3omcWxjdZwosoTQtK7RwNSFSvc6xiToTJSa7q"
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
