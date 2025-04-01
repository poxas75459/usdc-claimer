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
    "uCjuBdFc3aK6LBbvduxS7CfnHaQUfvVcsCifYiM4wrTyD4RRizRa4fNFx4UGqEjxTt7VN8foLpwTTTvPVtVKANB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dx86wXdVW4UcFMzpaBrd4SS7Sp1VJnAWCfv8L98C3YBQWbeGsFpvBmHuZndzikS3cc4nPRwdAGAMjT8BPXdmLz5",
  "key1": "5TLFhFnz5HeuQ8Lq5XrUkQvSybAkBhJdfv6SH3F78fu9sLx5BybhRWRzPB4NYbpLkQ5KoSeAisjwg3fYGZne2DJr",
  "key2": "LxCfxvZ8jpoi8khDCiPT53CRfmDScVzHPYVfYsy3cjVWpcgPLKc9QSUg8dSJTx2dShwQCVBZ3rzEfHKQGCnu4jR",
  "key3": "2FiNP7GfB5xLBet1ibcL2DGSXsd5yDds8tDurGQToVPtZXmnghtx18g7nSnpDu3N5jJuzZbbskj9PWcFxuanaoN3",
  "key4": "5dLucYvVFbk34BA7FQHEukfsdz54EeQ2U2HC3ooVJZEwfYW5oYrCKYNasuaCnsHyYnMmH5aZz7hfxSmcx2rDZWUn",
  "key5": "4eWUucymtyFn9m8tAMRMqJYxLtnZcnGZmFBEFfayyyxAtJVWQXYZ3UFDpz5jRXS3Cu8wHFXAeMoAzsbTHefy8SLv",
  "key6": "5Zuy8i9Um8QH3rhsvrqtsNpjkYTxMWqURHzBxE9KhfLXXCGiRYGqgqQis47NDeWjjoD3CNka4z5oS18PqKdQkdPr",
  "key7": "yRvtYoN7TNsxZk4SAvgrS6dArjVsxBcDBB6c514SKcHsVEKG4mo4GL5MpMdo2VZRTSRH5PHS1vSQ4USu4Xn8nnW",
  "key8": "sbaEVKmFiNWqnLQXYV4kkTWTktczWB7PumJyDb4S6vLpbNLLn7np5CUPB6bHTCBPoSdNKNGGVq8JKdNyWaviXCS",
  "key9": "24r1M8iteD4QC5vG3G2xTKAwbZK2wE2RVAbHgQ7k2PvSfUfyVEAgggnJXY6goSad2A7Mx5NxTby4zFMZWiDG7kay",
  "key10": "2t6ZhB2qmMLC6YNMUhDYuCEKnWZV2ybr4eCGKYB91xXy2A6GWmYoo8roVp3vvzkPkZsZJYJ5FH89EvUFo15SJ8j8",
  "key11": "haymgNaXdAca3k51EnE1Q9ibL8wvp18am3P8uQSvZJs2XBxtDwsxSy7Na4yvgAvmXxfKxZBbKThJW3fWNpETD8v",
  "key12": "Cs1S2Fobccaz9y1bBRFwfMXFQDFP1WzzrngiU5j4JAS1UvyBMpDFV7CPxmY2XvJyhQnNL8obKiuxdj5GJWWq7i3",
  "key13": "JZ6DsymLnMvLJs9P6c7n6LhsvncGHdcgwWaQxfrUFFpxQu5oAL3MwAPXvLHFEhZdNuooePGiyjWxnigR5Hs6DNT",
  "key14": "3o2SCw2tDz1ASMYCeJaKNEw1sD4bT6kQxKq5EAtZVJ9H4Ug1sE36RfgAUKPA4f7KK7ZazEP6xwKV7RPH4EtxASPG",
  "key15": "WiUQRPXorXFGiSFLvzahZkmNAy8avgK6ixojom6cA2iYVH2rrefVn8NKfyhgdyp9S6mUAdeizNR3eDfae364qrq",
  "key16": "5jnVDdGH76suEy8yr7ke4VWc5bgE1CtVcm1wTE8CYQgv6AemHhhmAxhRMp4ee9CawGKJPmPPYMTUgth9aDxyFKNC",
  "key17": "3qb4EyeoNt9sK8SaRVhHB27mD73rtj2mCQSweB7TvHEYhMNAy6KRaMhvMkATB6umpWPMGUCb7b394xVhfF65KXKb",
  "key18": "JUxGyWDWv3jmDfYvhxig2B8RCUt3it5RRYS8aUNvLFVMS3TY7kF3T72vuydriGthcp7DT2VqdpZ5fKLVv3kTPyG",
  "key19": "2ELGr7LPL2TcwxGHqtj1tziE9s3nrQAtiV7gxofkUGwaVeKGd1LHyuCsM2wPtvGQjB5i81PtaFERCpYXcCyBKqAV",
  "key20": "5b1zCWBi4tY2odDPgaNAFvr3p4khm7wuATFGMCEYdNfR2sWk3hLPsh2BtYzjTwhnWTmqCETLmpdaaY2hncu1kMs3",
  "key21": "3i8dJFqpP3yGeq5Tg7UAo5MCvJtduFuKEJmzUEHtkh2o6FtXJtkX1yBfnEL8N7V5dBYMTfQMQg3S6t46EgWsHNb1",
  "key22": "4buTh5WiRww9XJZetHtvb4y6sRA5xpVKdAbmRwFnoZANodCF49dDLaAS1vNhJUuc9WoHSWP21sEB1QcnCKeVpJkH",
  "key23": "FPrLDZR4MUqiZ76y9vj3dXjv72xmSF2ie2FBP8aqaUpC1JTELkZzzpwPzp4LcuMX9A8UG3AEhb36hM5EgW2nsDr",
  "key24": "2zQvwdPjnZtrJJBYhg8papaFLEZk1vygm31yDppuN9ptg6w2fvEAT8eGDXws2bPgpZTHwrEuM6yKgXSSNXB4bFdD",
  "key25": "7EHEFjBeW9xDWbBY89ni9fywyUg1MMs6XpWMCQAUedysFzwarTxXRwUc8zigAYfwho7NphUQACoz2k2d3zpwVjR",
  "key26": "b1afnor8FPgoTewtcK6wwGkECtejyCH4azsQKbntHEXbxbZ7VLLfBZocywsvBGaf7GyZZ2jRXpHDgvzkcmc7ecY",
  "key27": "4BiqNDtDNCtcCgW2QZnpVEsnkqtmrC3p8ifM3ZymQUrQDHHrhYodYPTHQVZSdyaTBUjFjFFkwTNakgXK2VbN883k",
  "key28": "G4YyUkb2yaXa9J57wLGLsp7ScFb1TFxZmNJGUhjs55XpxPRFj9LsqW4AMbiBWDx6uExpzsRmhzxFKKCtP1RuK1p",
  "key29": "5UMvpPLyeTi9XBLyeLhDUkqE9EiYxno1KUPpG7CxuSgYckeV1cDFwTWjmsQJDb5UKuEDJAeDDuVaNaBcTx895ajj",
  "key30": "vWRHAewtTcijLTovsNoETU66PdnBm6SaKrC54Pz297zh61HFHFtyZY7MELrb2aUYX1gvzCh6wM9cMNFwvZwdhCZ",
  "key31": "52oFjoH7R1fqZ9dqfNch75rK5SVJ1povDdyRNibQ3DmosR9Sm2CykMEFZ8jqETgP6eT136HpyVBx9KubPKWmUPm8",
  "key32": "4rtFVtJmk5W4MGPPBeBLp97YJTbPpyNQTvB3MSHLR2x4ExFagG4DP7hGQrykd6w82PWWN3sr7n5i8fMdDLWs7Svp",
  "key33": "3zSbd6eQNVe2NhYjFgU5Kd5GxyVoXc3zZ1iq7mDARmKjmnjYS5ghVFtrPfTHVpH488kE7vb4CcYSSEY7MtVL2i6J",
  "key34": "3ATGX2XajZCtk6Sgg2BiqPEdAqstExpBY3snHPyTpaiVc3m43HR7LWzXuKJ5j75eyAWwoFBYmgdo15gU51R2NH9s",
  "key35": "28xPYsp1kmudXYSagPYuuv88oe7MNUXuMrW3VEQ2U9VRVmLSE4S3PtaSnJR32URcqjxEFjWCuRsSyc1mS129XJsx",
  "key36": "32ThAywEkdeTxuZWdRFHdYFx4ytNtZ2cdr1ajKc4sx3XBVsipWAZkyQfKZ2PNTci3idxSabnP2vU1fuSKPx1nh3s",
  "key37": "dDAtnL9KQr4CaMN1EpZwot3QBQcZQQ91zV1xqtUvn8E5D2Q1TaQx41PoXCZMkgkRTDLDR2wtkiHJrb8RyeREf5q",
  "key38": "4cdJ43262uPPgMSJfeGUC2gZw2sXD3HWyzfNHjfZ6Qa5gSn5ArqQjnVu8z4y2kxgsTFes4NNnTkyjrUWHRirkvH5",
  "key39": "XU19gxFNg14jtQiVKP3gwxEzjMFUR1kkVXV3j6bWxENuHeZYbKb8fUmomyPPnZkUDnw9gxCt3UXg9zd5VzJJRvP",
  "key40": "X1WWLfEyuepMjzP7CZqEikgxzy7qmY16vPwwn1p1vsrMFoJFgCj2QxFCdRV7zhgFZkqBCikjXsNM8bjRXQLhBGc",
  "key41": "2X51nh24HkAaM7zo33SYERQ4aap8Xgi4MhCx17ggJvqSCk4EvEjdKA9TavfCzmuqB4rDNia5XfK476gBDb2umFhJ",
  "key42": "DtbrWqeqsNHzrwXwG5y6qQPc7LN77W5qFL2y9v6E82uTqZS6PLg4jSkzpCaoXSCddssNr4M1jzg2t9dSRRaBFnU",
  "key43": "3Veajh1ycYvdxKDSUTZnE55VnpsGv8PycRwDxdQC6whLhQ3956wUkdKriP22bWGjendxsSbwGdHNShFSB1zKSwSm"
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
