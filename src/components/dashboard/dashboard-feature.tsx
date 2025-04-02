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
    "3cFxv7ijXjMsQL6VWbEDPZ5UzQH1b39NhqYD1bcRNQqbgDMsDfahA1ELqEif3eNo3Mqc3qM9Qb16EtSjTrtB4yhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFc4PMoR6RqQmorygku1hjkSVsnSbmpe6pZzD7AS6AQ1wy8uoYzJAEg8WvZxykCewYWbXyuuxiBrEk2spDvtTNR",
  "key1": "2r9XuhUfXysDSkdh4A1ZmM9YbgEnJ69wYBrfrMv2pgsSRDbRMXmo4m621W3a4dVqweiBBTkJ3qpJukn7zZAfWsSp",
  "key2": "5B34yydeAcyZXV4V5UY16Y9xumvFjC4EiF4migWVjbipSfLHfX2p1u8F9pzzfTA1PVEm4X638T8N33M4siWGn2pH",
  "key3": "4WPMrnunbbYiCYtbBnHiyKneqo24p3QBEaCesN7PzRjd5f4ayFFqUzC2RxsgkwzXnFGC126YJmdaYbT2MJK3nbFb",
  "key4": "5ixcmbSo3WYBqfACQpZfhmjgt982iJRuRCfLxGYZyDLNwG4wXRJDGPeai41pNifUMVghjJp5LB6GXg9G5ARByuQH",
  "key5": "2DqxV7WfQx3TjuQA7sJYqHtQkhUGkBi2uL2aQnKnDP9Ao17vakBnHB9Fuuc1yQPjjBXZ3fsYR1afMyJeZ8o8enbX",
  "key6": "37rBF13ndNp9YXX2ZxA3LNwpWSLm122Div45ZfkZEthZkuvNr3CK8CLYpXDJsKadQf4pkRRfTAoQjBcMzjL8ayKu",
  "key7": "2tp6nsvUxLDEwm77c2mWNUaFyHEw4e2tLs1rAYbSRaUAKtNcfXKWmrHcvU1VW2GoW4TE4QZbnYyqLzLqkgSqWa9F",
  "key8": "NRzDjVJ3tk6DUb2i86VBkD4oL362XBbFgxgaoXvn8kz26JvbPToDAF1eUpA161i5E5GBpagyvAxjZ5hG18aPeYj",
  "key9": "4yPouCaDMVcEh9MQcRJu64tQJDo5THfPDhDbEVvfNf4SKMAmJgYgmH4gXRbRxGDJnDQ7MDx4Mmfkq8cVcpMvMj8s",
  "key10": "4HJoNL3uGMVwyPsSKiU1ivYN9Eq6RkDpTVqMyM5THGzXzsLotWFPa3q8tVcGUBZ5nzHdxMCJYfdiDsNBNPnF22NN",
  "key11": "5JSegpSdUngKUcbWdaQRfd3RA8LGxS9GP7FtwjuXMocXs11JyCB3uwFvXUNqLMFczF9gQ8LTPaDB43KBKFeTTEU3",
  "key12": "3fmvbvmFJetW7ebhr4qWMgyW4H4Ukkm6anRoGfmqnQCBYXtMcMtc9Bq6DASdr7v947uTjyLf4PLtg2iyYdhL1xPp",
  "key13": "4L6ajDb7YedecDfgBcvNd6X4n1zPEa4PBVYXgo28vMb82AKrfw4uc1npxaLYzJwFtjZRzyA7TrCUorANTXVX3Ufm",
  "key14": "ttyiLvJNApVxEQuGSbagNdxBThFE9gd9ywZq1xSRbGah2xVB4KrJBgQ2Lsbd59c1JNJqHeaA6BymgoRKPeyMx7V",
  "key15": "2HcT9qY7vf4fTxWAPtkTheAZw2971WrTLh2nwoZDEDcQC9ysEjAK1UeDQayAWiDc55nV59Thr5UPatr2fdup5F91",
  "key16": "39g5Gn4Cn1z8SM8vykXMkaNG9FCoCvcwLPNJjhTvNB985wWz9FvQpterRGDChkLt33YkyE3V1f9f7LYNQusKYg1d",
  "key17": "2gv2DGVkBu6vGXRxkG33vBR9UcV32WvXSE8FNk6ZGUWvJHatRkFT4YcdsbedrKNcR2w3UsqiY7vRoX5XJMceq4xD",
  "key18": "65HdXeQC89kV1FdhGciNfGuZfr7iok3AEXxuZGhThQGxL3FNzPNEjDCTUevURuZaHuggGHM18brmcLwyxMuroAAD",
  "key19": "5SjDcHaYXeZZx6bohDRK9pxq1McDTPUUFYmypAFQwuCk4PUHx5pi2UMfUBfiwvC2q7QSh6zzTFoVmRNHdMEwKT6E",
  "key20": "LhvPXLVsVM5nZ9ibEMgHAkDhjS74FTkK56FWkRWwhaMsdiRnBYJdrSQs5cLn2z8C4XDs9E6vY12sEiUaEpzGjAz",
  "key21": "61Vb6uJUa6XCEy9bg12rDLLKVVpiXbR6tBTzyxsq8DfPtHgrv8WJNoUTmxGXJ7sgSVqu6Pac5nPrQBv4MpL1W6dY",
  "key22": "4cHD175ECFVrZcsuU3WoSuYMbWUqSSvgp6Lz8PQjYxy1AVrrLpTnNDVLE2VkkJVAJdNg7X6juXP9q65bhsyDFJuV",
  "key23": "4WWba1ucxy3gtF3sXbX9mpvDMApeZQGSYZ838wADxoq3TXD14a1k52SE1X7x1E8tbpokrGmPEZDxtkDiGqE5FGKV",
  "key24": "3EKDSgqQwpejYmLsxFgpcW8prEVkErbugsGcMMX8ECXsRQctxzmThGAz7Rw4yLyrbrsrDF5JTVZDCgsvp5NP2Zbq",
  "key25": "62c79gbvxBACVFXXXxLNnYnU1VmHbM1MQ5iS5SSAThruaRekJAqajobq4Vony7THwCRjYDbMBQcEdeyUCFmvEkcQ",
  "key26": "36kakE3R6eMKMmQE96DiDrX9Dzxc5DJtKJCtt9USQSLGtskvvJTmB3SLCqymndsFAcahxhagKfekeRnYY3Wa1iPE",
  "key27": "5KsbavA7BjHysM88JfNVuFBdB132WqMoQqz6JNhT4r6WxwGkcXvBSSqZHArTWnYAGdh2tAZcA1hvT1AMWK3zpuUe",
  "key28": "4hm5nkJCtGc1uQnEzKGxnifuWVG1uJ34qfCvRza4kBnZzo5XHUs4bzvVauRULrLmFT8ehDnh2XC7gQz1p2qQ8PBV",
  "key29": "55ngg1eo3XJvsMEhwqzxkL88ouYu7yopKjoM9EjQNBdE2Lm1VbaRrxoGeTMS1HWGsJxxnSehxzezQ6cNr6CLiwX6",
  "key30": "25m4g4F6zdgj7gFxcLXFkiXhrvmWSwcfYbmuwy8mCHs6rYp3Wa9ZGW6wsPxNivsvQEVxotL284eDDJq9gDDCGrdA",
  "key31": "3te2PwWmfyHSdRfnAfH5qDtFMgfLmEpWqTDRHagTfCNVdWZqyZpjukwFUytcZX5RH1AGh2mTS49JaZymd9GhiELv",
  "key32": "5xBw1SxUJQgoj9fRdCoq1igTqqrobadPY9qkm11ukNDMcCaumqhXSZLKkuuBLAgvyQ5GD1KrC4FzxkDN4p6T19DE",
  "key33": "2LjLTXbyHdPccZK7iagopRzcA6MBhKhfuVfZuGJcTHLCPKTf42D4DCSZGUTNuZScuvzYJCjWARVkYeHLL9Q8XpmN",
  "key34": "3GWueAHHM8yVTk73p3DJbxFSYm1gq3rpZzhRNCqJJ3j5gd11avgiAtT47jfuMY9ZzEqXbPkKMzgSHFsgnWLVVTKh",
  "key35": "5f4oWkGA78vJktoMDkS8QeeenC1bi2oxTUvzT5zASLWgDfXH6rJ1d1fgKEqkr9ayGdHazKqUPRd3T4GAf9LkAvJ",
  "key36": "5gy7ywzb96ZpsKtU2eTh1E1ixP3cWsFNZuw4r69CyLNXmT577w6c9WoecFXswowkCj5YCngmUBqbxtaoHYADRHPY",
  "key37": "2Whoc4wpimFonDSMqEui3jgwCboYxwohW6MYw9fsy5QXnNvGAN1dcroLduZMCCNSsTr5X1oLeUDjrVupt9RR5FEv",
  "key38": "3pTaexH2FrMyggJtwggnVSTRk3eN2a4dxvK9V3hsPp44VQXdVxSBAPTHawJi4RAQyRJwdTDCRs8mGFpwmuPwSxM8",
  "key39": "66TZ8PxSfwxBfiqQyTRA1qZVfQafHSz6RPppaFmUbjnoiRnAQLKNDYLgf5EuHHmujYpUWXW4qJy3KgAEDLtHiTb6",
  "key40": "TXeX8oJy7PnBUa2fWaysH4JXvBEzFQb2xXksqyyx57wrXKLWSQ8pwfHvSCdNbMFXDV53mYUasiUewAiMRHBjUuH",
  "key41": "ezk3AJcsUbByHLBn6UN1gX8NBxgA9A34QTewJZb8qGYRvcCueWrt7s5UztpHjbsVv5y68aTsMPtNj4RR1FwSymZ",
  "key42": "3ujJmBez8pGbCLop4GkkRkweqtc1v33CdzzLgsSvYZDBsdRDssQcHLqEAtdkXSGnAJ9qepLsFoLEXyWE4YDhRDyY",
  "key43": "3JyaRPwoj4uPxq7fDEpThf3wj3im2tLri3ATMfyvQE6echENHA74LDSpDmTDzCSN2SR6YS8aSjijgsojNyj3ybwx",
  "key44": "3Z2T4Mpr2n2UhwREK9fWvh3PKwYjeqAx9FmUdA3HXAhkzt5k6Wo3ce6JuV2sjgxvp4EhCoNsvrp3ETtH814xtNAj",
  "key45": "23qweCZBTnd9JfP18rZUF4LSX76HFRnC5DdaEEM7wmqiGHrmQUZRzE8JqAofLzx4Lj1Jwn8KJeVms8YeGDKR3F1F"
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
