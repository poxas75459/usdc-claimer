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
    "2zqnbkS4j4vibDnv7dncXtL6vNsjBKsJgEuS6aWeKYyHtS2yWYFj4h4x7Q5HmeXPSDh3T2KTygMgxbYCo97U7vCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pMXM6jy4Luqr2RFLThM1JkdDf35KmZ8HF8cZRoFR9SWcZKHJtRAKTV9e2nu6axqFBVj1F5DtWBH138Wib1Q9ntQ",
  "key1": "2ovKZYWrEgEdxZEPb44szrzfB71gn2PLPPDCctSLuCMTK3ZXnm2Wpu2REEyrZKUCJHTPemYZrh9WX2Uuz6zEMJyb",
  "key2": "2nr6h4k9wYH7ZRwjebuvCaTvkyn1nq3noHSh5bgxzPymG7g4rjc98XhYpAbRB4ieDEsUqVMo5dTchCVaCiMBsBuS",
  "key3": "5moN9ZHywCwqrqbZdSx2MMqfbZs62zASsKQiszzv3tUU6R1CuH5ZEAiwQFNZzvcAxMoG9K7U4ucVGSd1nBgkqx3R",
  "key4": "5V2WTXzbGDuobMVmpcxY4aHbmAW8f8nY7wBBsyahQgeBME7DVN9W67wZaGhi8cde7oh8q5wuL7FS7Fw51piG2N5d",
  "key5": "4ZY7Mj6WeppQT2TN3iXPToou5yCJVhaLwif1UUVnRj515VVpM1m3CXLFApgeg6UwGgemT4YdpWR3f6WN7tKtRaM3",
  "key6": "2MbWy6UBFrA3sXAuCP171ZvKYadioKwEvm3GV6ZFcFjtoMorrkr6MUcSsSAuQm4L3ivtqvc7Jd4XJzrAqaDwSWTn",
  "key7": "DLe6t8kTxjovLPZzLmmWPmv98AhV9MaSvpS4HAHtyLgGaLFA5sqkEPKaDk1YE3D7TmnniTmPyEk2gG6FrRGfEBo",
  "key8": "W21TtEVF54mK6sLs41aQhpYofLvV9G3rirY4chveiXmAzeRoXK3jgBaooSCcLsnQyztp5av5Jz6gTX9ZKEk1jiX",
  "key9": "44f4XiyDDrt4YT4rE6SmWVyCKrYagPoS74Lyt1exrb8kfu77SYPscQTGks27KBzEVLphcVbGnfzuc6UBygFEkWG",
  "key10": "4B1rN8VhKBhhAG5pQ4YKBkjijGd99BoWHvcPQUQDG1RDnH39tbMZSrLrpKT18ausjXCWUrVD1TBQqzhG9dHj8Yx7",
  "key11": "3QFbSZc7S5582bDfwJCv86hfwoLVQBfXSNBRY5oDg7PPqPriQ6LU88bmuNxEzx82H43qYPjUvXR1GR3RZc67xuvC",
  "key12": "4eWvxeoqC1GhGYRdRPjpRtqcyQmfPNrZia6yYtczzYxyjVPyL6s6y7fwtywWY7H39eXN9bWV1ouYNFg2nCaqbNSW",
  "key13": "5iJ4cePzxn2wVWMwg9Hv2kspgvE7jwAV22SHRovqQVxzZ38ZCAHn8pG3krkFh7xGgLLw62H1VKqS7tRhcu9FKLX4",
  "key14": "shvVdvPCGPCJ6e7CaAUkfzxdvYwZYyZGdPSqfRWRUDV3yLByrGibQLjHrEdL3copUMXKLxE7ndrfk5q1jvhxuJv",
  "key15": "5XURyn6fHfncFM1VnGDxm39E1NfaprXL4Q7eiV96fHnVrkyJ1HX6TrCppy1hRh2TvqaJ25NSqCzNKWLujaKZC3rv",
  "key16": "4K2T8LqZfQfUmrt1nBa733gWPZPgFX58HVge95W6K2BD1kkqbHSHeDLwa26pjUuThe5eMFZbZrbapBKwBTN1sauk",
  "key17": "2ZM8bT7mAbBEmudws8oP7R3jBT2oZmyREe4jEfK9tzbJ72MM6j4wNkFj48iSLiXJrzjJMexA3VC36KL1MNDYmeta",
  "key18": "5EsLcFDFT9H8c3xKzRC4eH5fPBpGRX4j9UxZdmF8gn41diS2Bj89aaGAYiQShKhKuovzPXFZ1wv6eBzAbpPSKXg5",
  "key19": "65P4HpnAq9ELw4rjbe8MAVrxgT2KVBpzXCjLwAR1v9AzZ5MSjTDMpyaAF8upXoMd6kmqeJtvAZpLnuL3b9qhqjf2",
  "key20": "4vTLTGg5bFvUg3vXBM9xRbW2fi2sCCthgHnYDsaML6n3L11qT4XLu7ZecBYS53ZKu6HTGNxKA5UNuwhpphpHRf5a",
  "key21": "4GVB51gXTFYvNKBxaGfFAggAofLWDCCN82Pm1kcEmWFcxXPqzUvvPLXA8gWcrX13JrHsLa9Gd385GMz6q26dx75T",
  "key22": "njRUz6rwbg4P2yU6k1Dgir6SBmRtoi1byDBPs8E1dHBQTNp2bEUQ7dR777RWhp8DUEToAAw5XbTwvUPHtVqKtby",
  "key23": "4FMkrmoBwEQDG6N2nVwWkj53MLuWGSV2CvL6jkY5NoBS9rFoMJykUfAHg9bTtYQiMfEnJ1pUWdBwYo4Vc1XFHRQ4",
  "key24": "VHnZ8FNTXkkDLz2DyhpGQx1htMHw13EftCBqsJfJe8AcFXkFTzcu3SNKVyi16BmaDb8PWwQJf8iSYjQ6K2G4pfN",
  "key25": "Pn4ShZAS1A5MxNiMGGLRJWK5qYahidKYhjbyX7LceWsxcumSVVqZFavdpp5HexHV2ro97q8LjFyyXS3vmBzqG56",
  "key26": "mtXc3h2MoeRJaqmYKvRtRogc3Bhn4czGvBNUeKdbFhhrvn2JHnvDLQEKGTDpfs6CSvesjTptxBotMGQjVxPZkfh",
  "key27": "4UyGV32RSLBVrzExUVqqADEuQ48ETCfQmcsocq84RnrjmfSkFTt37Y4JKrENyHRbnWHwBwdvM5EtsuMMHby1Kbnw",
  "key28": "nFX8L6Fi64LvtkT6B9GZARF4vn8gRmVrZJcuE54rS7tfSrCCGJK5oqSxCQfELLcZ6cdsXD8oXH3pQHa8CWPi4bs",
  "key29": "28s4X7ScjzcqgqU6XBkcnmtrWbKfVaHU9WJww9QP4GrDaxqTxnj6o6VzNY19CZ8NHgQ5x4zxvxxP1AVMjTT72wcu",
  "key30": "5pZFpM5yKRrFvzwmMrrXWSiRo6gPNQmScosKmbmFoq8m7hw4uKX2FcKSg4FnACqbsgbwM85yvBVgocjm2UYPbqYx",
  "key31": "4Zrfo7aTqjfLPLRRzG1qoZ6z1msTxi2nfTYtescc456BJBfrPsyRJwBcxNQksKiLoeBPYiQ6x6RpRNDYrw8DYdCU",
  "key32": "63tnWhRBqodFRsTcW8x7C4VwYeUzfUmFC3EHKkKvsSrCULGodaNxHWtYRcuvUpJAa1TohvTLCs9fFbp2UsE8Mm7Q",
  "key33": "4UkuzD6qD1xmeNcUfzdBAKEYzWdv5AURwfEFgfcHsCnk8HFGjbvBn6TAwr1B68KPjFrAXFDxz3YR5EDMap7xDpFF",
  "key34": "2HmvGjtFFUXXcajP6UsNKukXQo47Had81kJZmSHDXRZWM9fDAzKwUZ2mc3AcemcWA1P8UCwVo8EfGb4XwediFcRZ",
  "key35": "8VvmJS6RC2VLdAFpqWeUwTYeeaxoDdwkLFYkK4vJGRwXZez2MECD9UgtbBbJxLWo84AKbDHmWeXAq89u4m57uhz",
  "key36": "dqnu6ZeUt4jAUTfdVMKdZDrfStXSs4QrUuT3e2gRXnvoneDpTR74uJLc4d5zgggzsjzeZCe8HYoKbHqXtdMqGDD",
  "key37": "4qQwS8iHLYofbjToDheo1ZGrA1Zo6ZfoQuKbAuBpEMLEPnMC9SCarBDr3zCCipeFAhkdSVquBGqRN6tZSo2vTfqk",
  "key38": "DgLcDWXSPLpm2vYEyk2TGGGMaX5vQ2VESwSDG4DUtWF7ZpF7XvrSddKWkvnRz75SBsoSHrwAoqJaEBtLCWr245J",
  "key39": "3YpwsPMpkfFakV7hREhYD5HLEnXL29ioAbgiams1cH3nLWa3oifNiT4NeVDhJvRGQifhNy2E53jiX95bjZozp1d",
  "key40": "fath3WHm9Ukf6WPpruZirDC29KmFauzMvWonzJtNiWW4iF9MWkok9j2NH1BnRkFC1HJRTu9CrbCifhzkiGpsUXK",
  "key41": "65oebXx96iocz3hKggGTWZmxoLMKXFK4V3TL5g7esJoQBDGBSiwha1cbidfNeYDhiqJjV6U5RBvcA2DMG7R8Jw8q",
  "key42": "2deukMv4pnJgRoxcuFtGmMjykYvaU8CMhoX8WQmGYgyPV1C7rwS5haaGoNVZ2MAgrNmV6Bdvh8WKuzvjkfQj1CzJ",
  "key43": "31iNpjvXoz24DgDUXMCfmK3hhTiG29c5QErWfe2CbBck8d89mxzvSFyKAJyD8mUxU6ysaAcC2PRM6kD4bAnreWGU",
  "key44": "4sGqqTu4KLKw9zpSeudQcET37AQEpg7zDDzNN9YEuEPFdxtjprqRenXkvJRs6GDbhnnA5RqoKr9aC8N6cKGcbwJM",
  "key45": "2n1972EriEFf6CFTX7RpRFvT8Hh8EXsW8eZSbAMv32VnS7SGHKgYoAN5w9CYhv1uHrvddrXAjXFq3FFiQCXvUXpE"
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
