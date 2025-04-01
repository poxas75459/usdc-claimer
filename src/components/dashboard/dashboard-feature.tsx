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
    "bZXXsrnb6sj9qGc4prTttSFkWcfME4CRMA6bpCmrsdCBP7WUYqnyJ1CVtmJ2UUKCvH2pSmcn4CeCUyyM5RdAjc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W5DvoifguedEB63WccAPDfg2PaVxjd2B9nwuQD2K4sH7ondZVntCN5HftSWrWqrd48N1iiwiSh8XtrsTdKKyHeE",
  "key1": "2UbRtZTBFTygsnQu9RBm3WxnUfAyz52Sduyy2WMcMsymsT21TQJ3uDiQbpqXofebmsrRipKTYhNvHhKTpLQft2V6",
  "key2": "45qFxi92SzdgAerEEFaJ2J78GLkt9gipVMTnZDniUm8DhHZfxgsvikCfD8Ks6V4JfsVKNPUAX2UWy3c4eryphs5i",
  "key3": "vmZoFFd3wm7bHG2bFNnRg2NhYx9KYtYgp2w26i4AUPZ5hDbVowNwCEcwMf6Qrs3dfYWDALWVNiNbzkYyWFPrmMt",
  "key4": "FM2No8xyBaNRqvu8A6tpzm8sxHepxL7uzkgdmRUd9erWvUBP3mXcBWEygHUsiiAbNmRWZTGJ6fwJJbCGoemXVgs",
  "key5": "5gMurBrBq52bKre3f5sohxbxRQkJWNaLPjvRZ291EPkNFZ9qTZnQmTxje1QssQL6M4GNj5AXc7XjXWqRqmCXkzwL",
  "key6": "5cePmssoTnv3d34U4JADWUCXm9ASNQ3Y8JAwb5oLh3TBeW2Ck4qfYQytdinhhwmyfYPPMfXUBz9q5rCj8E6i2aDE",
  "key7": "2uT1LeKWYYraajJCiR3oAZAuuxdSyUHHyxLYt2s715sz7RFrkXHFzhUE6UEBZsAEeT3iGUGnCPCxN6gxe7N7AVMD",
  "key8": "s3oXg249hZyzpTAaegKm59D5AiNbMQqPex7dafv4BGLSW9e4muuPJz7NacAVPvoGkpxx3YnVEQB2doAP4gqM5dS",
  "key9": "3HpLmJDsYKNKUed8dww5rY3i68CN2tq2a6krWN9ECtSKcHHNhC3qK49GzWzQZ4uRKEkEhXprmixEXLTUjVediGcU",
  "key10": "32C8ZKAV2DfsNzH5S767R47pHFQsW4DZAS3jVfYdQnP7mhWSK8SkSbY5WHz5TtYpo2i7HxQKLuLa29DV2REojMYn",
  "key11": "4ZPVtfeePPjZM1jSmBsow6gXkCN1xjmZVsV2vTrSm72n68KtCPTbmigqaxDzK1Qi3tByLu2cV8oyKwrTTVYqNJjP",
  "key12": "2kDV42iHbNV4m3aGFPv9atiFqQSYhv4ZYe7H57LPy7MLHAFEDhQqLdXWNJWesdAyGajmZrKHZKGb1FG3EdmGgMJo",
  "key13": "5AwKq5b8rEqAGJ6ygYEpmMzygDoJshPEymuC4poC8WoZstg5dLH9sPmg5oVUmnQgKS9p4Qfspt7ymn9aWRaPoYNw",
  "key14": "2QEPHBT5dCNH5tVzZWnNtAbyBbLwJP4PEBgm8DFU5tQdEjnMTMsLVgvNwSUwvpwW6bzzkjiomn81ef3Ei5TMYGRK",
  "key15": "2xAVWPHfSBYM5BhT1oLrtrdnvDgFfqtgDLhHRYuPEaoGhZNyBCJAeuth78ak4qwbv2DLwJdbvVMSDZ8uUPfdsqT9",
  "key16": "3azYWVxpTjGzKYTbUTN6qZPyTXBuFuRBcZBPS4xVQGRc2y6yVfrNM4YJEE5oZY4UV3A1cT9bYbM3uBUNgnjsCR3C",
  "key17": "4rM3DZdTbY7tuFZ1z8PK49Tbok13U8R12a9UAaFfxLAffUA9G5bEvWERQytLNJppHLQAy9dtD1ZzjQaCur4aRzLz",
  "key18": "kzXczE8v1LB8zyMD2qMPZ3B5sznRFiu42ZD6fT8LbESEgbM57CTFxpN5JX11NJyAvCh9Jxxa1s744G1t5PkN39v",
  "key19": "2N81ALJMrr6ACiBEx1BemcK5RX6Jj7wAPG8TjRMwcXAYGkMNUcnn4uit28C32NhA9mn9nBEGerH64jS4sMUNe3ZJ",
  "key20": "yL2AuJqaaqGMzNMjkxSZ1x8PZ4QVACCaEhQjHTgRD74w9Jnas9zrpuoQ7i4svqHd4sdze1rJcTdR8wcsxBHcwBF",
  "key21": "5ECAcdUU3Xb2unNNm4mFcprxt47c76AxKPejwDnSf7dGgXZUGNc3FTdbJN6ncY8GawdXjdLPXGceFJ3phLEhpBpZ",
  "key22": "fWRgPqF7V62xKfmovXZwqaj7iBWX4eeC5E512h6dJuDnsnxLScLvTqmd2rZWAiGYXE6v9hC5bqM9nWrHCGewYnN",
  "key23": "4GfTbysSUWYd5fudz9ncvTh2gc43YvPyuM7F8J3sTDuQ3AfX4sYBEQDAmaWBvPMm7gqTtNbnCExpdSpAhLyeQyj2",
  "key24": "371aYGUMQEge6G4bkDwy9G2mLKS2Xe1dXjSCw7GgATiRPvCrLZoTWDNidmTFq2edpio8zYfGFYFoRKfr9mSKZXnj",
  "key25": "d6sHXihC2Gx36HAouY1gXXvJdRrTPZHhRuidSXeZw54KVcTpG2XSxHQnEhd6fNvtZVWUdHdZVTrBam5FpXR28N1",
  "key26": "3wSm9fzJzADkBaYqinH4qaFgLvhjsZzJLhKgTNoa3fPGYsRqfW1H3SChwFPUrbT3zwHrSHUNFAroMW9zEmYbXBqw",
  "key27": "5Wi7k52Tt2HT1UEbbHCUWAwVFtrA4XsgSHix711oeM6d9uRiHNGGQDtTZ7zsbw5zgUqfqHuUt1ZwyrXmGULoTAkK",
  "key28": "4SghWPFhNYt7E3GCofYCVohFLaAGvphH8HdEwtmyKuo4o21ZaNmEkiHUq7cuiGwNWJgqKedxca8H6ZTTwL4opy4E",
  "key29": "3BhNeTAktuNwWpfFo4RPF3PLDM1maa5gcFEjKphNDzAvRbhmgoJhuagCiazYYgT54QrRY4T5W7iHM6cweRMWChCY",
  "key30": "2mq71sJ19pUaYfLJVn2AbkRxBCc7EAD6Rqo4Qng6U5yPJrf7Ld1kDYziGwS3xC1YYCiV4LXZhGnFPxLNoCRmZhQs",
  "key31": "iv57b56J9WtTywNLq12UH5iZRB5HmmSS7oxpd9fQJ2UX3EnsoJQqVVNYNP7ppdGxTecg58huZuHHZ62KUNCNHaU",
  "key32": "4oNzPP39TgkP635iibRvQnVwPWcgpUjgpC8JVyrbQSXUwNXpBfiuuamVgj38rpMMT3sGxHsUVs8UaDjViMnQNbHT",
  "key33": "5tUcM5sQ6zgECPDjeSJAzwJhpem2VAge9oxN4bCrnxGqtXtUs6rfUg8JzQLZmraCW4WvKHHwH77x2TWX6RgPKjvA",
  "key34": "3FSM14mPDfqeAY82xkxEB8DnEnrPvZGpJAEJmKkj67JDMTkNqawoPyEYDLfytjaLqswXeWTAfGe4dgumnRQEEnvT",
  "key35": "g9UhLtMZd9GL2D2DgQwydYqnkBYpKwRrqe1nmkLheqa8JUs24fBf7SxuUQHvLqEoo4qPkhpuJd6U4ywiGwABtk7",
  "key36": "3mpezJJjNHF44tuv6zdTLhWCB7ShtL1BmWPaFfux2X19N8y93Qb9ncokQFsJXLon4W84Qejm2YBV6tTrcGm6ia1m",
  "key37": "4Hgyqdu8bpEc24eYX6RVNcaV1iYKpMzZKSucGMNF99xT4VRoUR82FxyQjxQ8A365URKkhpqWkubsYXDUQhWEHvto",
  "key38": "5zGnfJbQYekRV6pgmUDyCH6nghKAu7UT9jEsVPq37LEEjGZ5xjcmrvFCE5HCGBgvDwM4hu5Kou1CNZX4YtpGhdJs",
  "key39": "2x8KoeLk4FU2Wn4PvsKQP8YnJWZ2iCm7YwQchh6rJFHimAZoa4YGPvPuaVaC9Z2KitE3BWJfbBxoJprQibdLwuzN",
  "key40": "3nbXtkL6DxrvnN6GxNrzuDs66LKAbDe7CjGFopmU5AtLpWcdTn3yedEWYApv2CcXVUSBDggN5HtxGfmjUyyKhQeD",
  "key41": "Fu1qrHReRxoSHjqqwECiHysj6wxdHRkvZKhN4AtBnu3yxg3G98E44fVKAzAvXUakQxxZZbv4mG29Sg53qsnWwS6",
  "key42": "2tEE5WvhbJ4TjFMoMKamrXfmYe4G2MY3bkpS3S3Ba4WsTABKQ5jxrHaBSmLFiQrzvuVPG9zAXVvUsbbF2hPUD21X",
  "key43": "5imqtTeqnCPWT1XgBsxzkJMk8JtPMhtzxNRfoLqTf55iH1fAtvWq8JKZVVTkd8ZXptsaVpWfV7wRyCpYXReU58iZ",
  "key44": "pmsF2ujoEV8UpwatEM9WaHY7VJ2ZC2RPCCsZAcVAVDMZ9xUuAWHFKDxsZfqyTRmxsJjBiTiYHWnDD3Mwa3nn4iY",
  "key45": "4aNUKPt8MMJVmsU1RP2bmbt5cV9ehBfmXMeCsUQbtiZAfEEbh4Rj1CNq1dh8q1Vm66otpy4M2WPHksYdph51Zsr9",
  "key46": "4UGWAa9So5LGsEMPLF5Sreiv853mXJF4G4ebTKQBCX2ZzuGMsL8jWJmLkU6rDHJeH7NhEgA92kQDN7M2HVtEkwhT",
  "key47": "4kxh6rHPB4d7DBTwxkTdf5ySuGcRnPiiizAxMaQGmAccLFbSgm1yX7n4PHAqfq4yDv9BKNw2Fuq7NDPCb4iUuf18"
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
