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
    "t4sNjvrr8jSM1WeQY9rzec1K9HcfRswf4UbdoVFCfUTpktvoskRZEmfGfnWWKDtys7QUpX3GNMtD7SBE83bUebt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M31YcMkKti84cPwjM9tZZsk1rQkyz7YQh3P1vRwTnnkxKRudYgbERzX2Yuks61zBtpyD835BCEe5cYhv2S72RqB",
  "key1": "2BRvif3RpEiMz3mTU7Fjfqq4MQDFHvfAQa4HReeYiR5YWdpG3xKezfNSRDbT8K79N82cXX2MF4rfLoNW4eHT6SVB",
  "key2": "5XM5FKcFHL1kwGEz37ZYe5kt9XrTCaMDvAcfr9E657fCNcenW1wvUaguy5FcrZ1JLe3i4CHJE75hm6UtdyT2Gi4A",
  "key3": "4AsKFc4rC1eXizKhd1z1x8rGSWsUan4bYsUaoNAJribkcwdayEHqmLyeHCatrP6pxaikzxWhuRRNzLceK3d8K2Wu",
  "key4": "4qv3AheTpZJuBCBmbzGrpmBGAd3D8SmW2oTA8MMnum57p3gQ4oFikMG7nNr4Lzq4nxixXwtNLZ2pNxtouwumNnzP",
  "key5": "Dvp6NmN5tFgTEVXgC3VY8aKpUjqqUNAoNAexFq8qML1uieagK18qwDtH9FV9Q6Cr6mguiYZhjWfoNX4awZFe4Ep",
  "key6": "66JFd5rjN6vUKMr7pAuBnpoLaYi1tpN5DeqxxBucoMPzEyyJiBAz8mVxipMAfB5akcnVZMBDXbwz9raffsC158hP",
  "key7": "4nuvHkqYYG8XBomQjzPArXytkZd8TnMqRp1akcZAPrfMiyYe1og3CHoTzos8wZYRzhxnxikzgmgYysiTwNbeT3Y9",
  "key8": "34rChiv7cHcuPVFHuM55DmDDSnVcVPTwsFYq6HdMLgiPHjLv6gR9eCyWgXGM2njb97eaTAHYeRmhxR9AhewHipW5",
  "key9": "51o11VzvSEKN6gZ7Pqc3ERTnu8Dek2Bd3GZmneZDCH64Ktm56e2WLPXeMmMN2hW8foWEoXBkE2G4k51tKd3CQPb",
  "key10": "231yLnqXXfjw4AMu7M6TuiBdYg4s53J2Zctqcspp9HX36w3nMtMHd8qKD5jEBS27hH6d9g5DKNVwFaiJkrEz1WXP",
  "key11": "5jU9uvauT5JwmGadhTqYDAV9aqtJbSMnKjPFYL4zL8ANFP9Xbvwh3Lnwyzu8w4wLqKgTaoq74xkRCF9WkVr2YJ3k",
  "key12": "5bwuESG6L8Dtj1QRTfREZLGaW9z68QUsaEe8GbocBzd4MTtwFMy6mFMEw9kB2HFMs3z5rJooZaGBc3wYerBs1278",
  "key13": "4pgkwPNQgJUNoeroKyvSrvZrW1o836iAeQmmsNbGEiKNEZdq6tLLFr6Aaoh4xwpswtsqHtZ2WXgJN1Ynb4K6iT1g",
  "key14": "5ZfDZEkqFhyAcQmEhqtt4yBSSePHhBY1FTVe7vodMJXUWwogWTmrtaBF6WV44JeTKEvceRaQS55Sf5MEFPdeyA75",
  "key15": "5K9r5ieDC13zqupp7tGtiN8yN14hJQ5mp7gTqxeVhPxEDytWGsXwYhSqWp5pbvCw1YqCdpm9TarazpEjKFyfMG7B",
  "key16": "HPx558s5t8L6tyZvyFh61yHKG4ZcUP5z1zztL1fSC71AiZwfacyPGJWSqqeT1FEieN8QAPveEnx5WaCbDstotgw",
  "key17": "55RttrmG2To3i7qPCyTyUh9LqBrvttxE3qPfBpM4v7b1QWEc3BuaDZppcMDBYfWt5VTW5yw7KBnS2zo5CbfdW33T",
  "key18": "2T5wXmndciE3XKJXZZHr12vjQfE9EXckvsHe8s3qQoMkaxSdCuck7qBgJyxaU5asLassu5bETg96F7ub4dfMfsZL",
  "key19": "5V4mDNNtms8uKp7xtbWwCcDxtczdW79jMH2NjPrhJqSrEky5FK8buZceGKaZXhyhx4QiHea6hR9XMSqhAaE9G1AC",
  "key20": "4px8M5jYinXmyESdN7iiYM1qYyBhE6QWR8P448qJ9gPbAu7e5E7cEbkG8wGFkcS1vVCg7YqXMS73z9gnZV6Tw3wC",
  "key21": "5tCEWGHW3xbmwDu1WtdA99GP6Uj8jL63aMTurNe37kDoeE2waY4tbRzwYr4vqC6TJc4A18ug18pUyRXkrpJzEsCm",
  "key22": "56PpDHckBa6vp5RgWaoymGJPhhsZB6sBvReMLQdmBa9ySEN1YGLmiT2KdtGvj7XrREeCFLnAy9yRyyHBS7tcHGj3",
  "key23": "4hghPnaBbyF76thVgUSkb5y3UtnQpCR2bEiCvbwG6z5KJix9s1z1VoBNAySZR2gtkZTGEuBGbvbtKk7W8h41CfUC",
  "key24": "3uQRfPgbHkhsAiJNQhTqvme3NHMGVFVRLMr3meMNjgRuiPx5xaK37sYDEkPG9yFQMtaKhv23W7QCEzk2AatgGiA",
  "key25": "5yFmPdBL6AJbwFJRs3ZarMrhacC732fo5B1akTEJxmhLZHS2gCLexdYwVbc5JQfTcyTWnS2KH6THq12gai6anMao",
  "key26": "2qEJdsYFXmE7nbgBZS24awCrRRzEJVAMdRq1nWRZTm956bArdBy7dPxrhkuCqQVmo2xLGrJw9LnVJ5LJmkFfiKYw",
  "key27": "2tfkXFy2ZZpYQcqqhS1kqCJva3nubeJ9i19QUJj1JLtvJH2z3KMueh2i8tHLBNY8rMx1s8foUAiigLvdC5ixcbmo",
  "key28": "PJZfAyXPvBXxMs7skpwJTmbGXFLam6SNkixqE6ib6F1y438bQBV53m7zV7C75jGLTZeX6WBf9Xa26JBga7ANbef",
  "key29": "S7jRquGPvKStSHp8294Ej9siGUSumi2m3qZbBvmL3AMyS5WCZFSyf4eafavREjQ1zWX2rQUeRGBydSDzU9tQhhG",
  "key30": "5CuM5V22EhH3QE9uZzv1nUWaXHfyQVkWFf19XDquMuzXo98w2xw2zRciukD9EADCiZBDZFihEEV2tTKDJtoj5sms",
  "key31": "tWPAYV1ZrfFZ48PMscmF2qjhAJ4RM5mX5yLWBN6jP3FmAvvV3MqrtHcDKihcMebEFR37rm5vz8SCoP4zmJD6w4Q",
  "key32": "5FeCHZhQ5co6ypKDTDvGFmFMgKtzqM44PqPw4Xsz1GDtymHfo1xGWNLooJUcEFg54Gmb8uDWrbDDJHTvdahupdTF",
  "key33": "nA752yF6iq3nrsSTtP2raFKAhVigHaDDN6yNnYLuomPpW2BxAP5uqXp16g2cEKLqPak9E9tu6FP5mJPhg3tsk1W",
  "key34": "4coBjGT4pfsAqsngPEA3FnuYKzBqZDPJetNmjfxQxREBNttBNcKDgoXP1Rfgxa1tbnQckQU69QdBUGRn8bWALPm3",
  "key35": "439C7XfycXtzUGTNimeWyef3B4AZvxhi4a2S8PVumWn63uffsx9ZK6SgMNEP4nf7JF1CX4nUqCbxyJWjwpX4nMoN",
  "key36": "3ugy6GKrdnrp5xWtQERMzTpthFBF6EfC2sm2sxVRD5b2WFqUguPFAm5uPFV4J2rwX6mBD5D8yKsAKPaXPy1NaJtw",
  "key37": "hTZ12ZJSoZXRmoWZR6g2iN9Xkz7DU7UMaxsZHPDWZSFbPfzjFQU9op9UBeNBDTGZWvctA22xykqKmSPgpd5nvAn",
  "key38": "3LZC5TuNWjG1FAjvaD382CEULB98vpkv87dTG2qVQfPDqFWtWuhdezXUF3V2VxpKZcbmHy2q3ibBL7KrW6XGkRtB",
  "key39": "J2bQzXnTfnnLf4DJ2shZKo5Pg2AKhgU3txfHFw1acb7V7g3mPrNvCwRHCPoWN9jWh7V1mitLSnzYv3h9Wv3B8z1",
  "key40": "xN6R1vtKjw5waLsgVPrDi4tXzy73fdgzeSMNkrnTtzeYmiQdq8zWTtw4aZ9GZbfiTe4w3J6bqkum1TyDycXjwt2",
  "key41": "5NwNXjXbPB41PbyLw33c37mDFKE6zqMwGvE319UjytshPnLGjuwts1xWF7qqdMGvzjio2N5nKDBRqWWw1wD4AiMw"
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
