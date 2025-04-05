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
    "4EqTYFfy5FVGtf58oo662YNg3HZBkMNqdY48PUJMD8YPNLvjaRRCfnPHXtqraYamkjJwknr6R9PTsnrLuiudbWiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnwrrokBJXPic9H4FXC29ehGShepDZ2iVE2Jyxyw2qbpvv7xJj6W2FF43PHkVSpaSbK3PPBFDdcY1FMfB8VUnjC",
  "key1": "3eKbEarHX1NdHgEUdQoxHT8HvtGd8DMa7pjbumqenno3pVpKt2G2Q636DmNpQpUBUgWr1RZJiczYEZZAc1yQoY2S",
  "key2": "4tgwWyruvzoCWnmUhyeQJTS8vyokKerxLJYQYWnQfAEXC4UE37aZbre2cNm3U4A8PzsTric9ALLzHTooPjPYmMKw",
  "key3": "2ENf3mCpAhDfYQRZ4g3uTgV7dLjiBctc6bSmz48pi9B4wmpJYz3z6yxVQ2PB5GAiWrXBeSQnGGGWLqTqg2DKLBrP",
  "key4": "4ttiTDijfposLCK22dR2t1okUE6w4iSTNuNk5FdH92yiHwdAQFZzvBvpQdsj1GcqmDaH4m9xKE7sHNVbyRhDnLeN",
  "key5": "2ayyQ1F5zZB4BRb4DnzfJ3pNZSyFSLRsN3nRC1V3Nr6CKPq53BVpHUAFSmLv4CRGqz63A49Rc63KBn7PS1CTVsJj",
  "key6": "5X1VTXWJua8J7vsRYhqHy2GopwxfH1nw92rE5rbkgf3CG3a2fhZh1dNAipVXh9Lu6WZbgUm1MbUBoK7RBSyZWSnt",
  "key7": "4Bkovk7XP7BR8VUfENQCY6R88YebeJM4dCBqufvoKW2EdGnD1W5emFsVQTGpiFo97RVqLZEYAp9qC7XeMA399z9Y",
  "key8": "4PxYCuuc5LgCCZdeApc34BQ1G4DbtKhTxRyEbqndByw5t2BzFPbQRENi1E7w7WJbZJXakpaKB4GdBZ9NFyL2SVj7",
  "key9": "q6DvMqKA2K2KEi4rEpEwaev7SNAQR61xAaUcNUqAVpcJAiSae4SgyMSktHaq1cn2KNuf64M9TEFaw2MBkXrJdEp",
  "key10": "5wj99A31Mm2xgKEF8WoaND4TYDT9iFaSFK738J5iVewUQW8saVStdD8C6iEBihZEh3UWL7zcBchTREg4gearwo5X",
  "key11": "5RBhgsmUPteJViCvpghVdS8tvFmk9VAfqyCKkbyWArZ23vn5dsKdWPm4BRP81PRrnLdPkLLAJhcDXE2dTxvYr8yA",
  "key12": "4wKj7msta5oWdEy2VNJGVxLqL9TmArMY2gGRY8JhbYRJth3fPvBbEw1PmMqv5uxCgoDzveRLTaGyQWkn9GiaWCYs",
  "key13": "4ab9vdnRnfVWKYd1Vm93Qp5g5ggN8JJRx2sUuLwmEe2ESkV52ZpAR9C51V8pmSwY4x9igyxRWG5zaJpmRVjUJQRF",
  "key14": "gPBZmH6rMrR1yycoxVUFXe3MbcPFxjrs89ayWsX5oK6eyzPjuiUpAGm756MdzpthXE3RqzduLSPAuFbXfc3b2Ak",
  "key15": "4hPkcBuNMF6vsURwT2TjLmF4kRN6177QvALW8XdG2miVuCvVvToUbQU9njorvzGuydcwUK9VRpuMoJLREdSsf7CE",
  "key16": "21ZLiaAc9qBuP6BWKi91HPz4ZxJiYkFmdhhYbmxpGP3bZKMpPHLmiBNhPSpHRjuwv2D1qwqCRvPLPFiED4uS7jed",
  "key17": "TbjUsqxpUUxuymvEjbDppwHhnw3WQUdL3nQEuLnbUbeYDJcU3A79Cac7W9nD8ovrCPsujYTsZ6Z69YCBwkpnts2",
  "key18": "2qeXhaJKqensXjbgJqtVqEgWoXNx8t8ponobXhHKNLU8fGs12KNzQLT8oMqhfwppGSxK1sjmGuiF82DYMo2Y9BWG",
  "key19": "55EBCegsj2NFHavt737EABmb7TQrcCz7EqxJiu52pfyRzaYHW4EExmorMmwQEntSGUdkkpVTjfTiGj7YW9Lqw2q9",
  "key20": "5qutLSoNLcNwXfHUsWV5dkqGAF2LkVdiGMvMb6CRD2oL7f3cbcN91gM2XktX19v3ZiovuG5CP1otawVPz8vmsrsL",
  "key21": "411S8Ra5JNoKTxygdfL4e7hdLNGjGB6aoNuNDqxGAMxGYJ1gL6211L6fX6R8pUUbuwhdXvskDzKLzBJVC1rAtTdK",
  "key22": "3t3yL8WMnJJWHL1fpcD3qHHfR2kWEpEVqjJRmYVTXHAq3nVRuyE9hht382fwwYLkqrH89q4taG4gupqtu7X7gZ16",
  "key23": "29SmFAvBWPeGhviwb5V4fHUdD42bR2i1X8nfrK2bAnp16eveyFVYE7jFzhBGV7F37NEQiBjLfQuB4ghgiVWjv775",
  "key24": "xBgzLvwXWFJd7ug7DbKbUr3J19dZAcLgyriDRAEk85UGMdoAX42yUDvg2hzqVbeHBfKeTZQXJiuAB2LyJMGiRMr",
  "key25": "55YuTHYBMmFBvEA94cPCDJ9TqnVqvcnmaDvZiAShK78VdEPodNj3Sd8hZ2JckHsJmVE68PSyNxPGJYvw5TBgmcCJ",
  "key26": "45ZQ8MPUPx1fjhwrdgLXVfEvzrx4odupRxpbNkBGH3Apes5AtFBf4Yhm3agNp9oTPbfDxgEMYdwSLh6WXFLfKn3A",
  "key27": "3P8PGgpNUnRk7K5TqCgVedKzgCAG9QTVVAAi9BBE57LksTmtV7NZmozSECAF36tuxhqZ2Fi9Ms54WzKvigQVRRmB",
  "key28": "25aScajXJ56QG2Kpppv83ohYKWyA3TMRunV7TiWw74gYHNeKEsr7vPDynNyrzqUvZ8HRTXM9eEznq7rqfdTdb8Aj",
  "key29": "2kpEtEeJZr7iipMwZ3ux8QH4w5o1odvELtriXfm1v275AcsZ8BgveJMed4VPuQ6pMP4c5myYcn7A58QHjYH72gRT",
  "key30": "5E5BPBtnbaAkEWjX9AtPsxmCPNDeaTusxRb2uFHB8Mu7N9io8YxrAhymGxrTiew7NJihgDuVY88e7cQnj32ERXaV",
  "key31": "2KAnNcjcoks76TMJnYgvSbvZjfCZeVG4KMrtCYNKo6LSAkPmYVbHuMgtHvNzxuP1aBSXeE8MqX56W9sQ3fF8EkXh",
  "key32": "3nFBAErSgeeHxXQmWTBwxrvK2sgarS7mbLijBByGAXnRBRciACn9c3GaksLrN455bRUnH9PgXDaEUaM2WAycbQj6",
  "key33": "2aZEU7xM2R514YVJHMAGc5Qg8yMpLgNUE1VC67cxygQkSqMqMvrufAEY83oNXwQAtpMmugDLW1i6umHCFGiYs81e",
  "key34": "3spxWykk54zQGAcoodH1GuwosAgYsZZxf5jFukuMvxeXwNK9krMykmqoGxRebw9u9suhxF8cjfn2n7EyTns2UB8i",
  "key35": "29rCTPr6EVgFTTCeJp6t4yEDU1wbpmwF1sH3qDTYrCBajDsLfiqjm7Au7Uka4eRWmhwVCdjt3uwT2nTDPdYzBUPu",
  "key36": "2dkxMn7SV2eGHLz2sdm8VA3vyAnZckG6UTVwjuY6N6aeg9do2HMPFxm865QimumG8fX3d9AdmjoMazvNRjeL9u6t"
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
