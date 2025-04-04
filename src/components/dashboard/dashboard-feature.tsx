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
    "3h4wqNQ7RPtM7PS3eJMNJENLqEcJzogzz2JZPrYDmtnPj2zCkNYNiezVzpq4FGpbKEdwFNALUcTmoUTb77sJYMU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bc3vtHPo54fCFyLrMQ74gNUCdrefz2cSgzN6Y32SHvdvugUS83YEvgTGkZz7Ffxf3LJm3zcZbfjt9yW1Hwzewky",
  "key1": "3AY5kGG82TZAtAMQPRk7ztA44ZpNsF2u3bdT3DHzGwcE5edUtyyq18dDtT2Bh5j2E2m4LV21oDDrTMkqnDUGmGbC",
  "key2": "39AbDuaLvZZoxj1FTHDkEzEPA3ayKnZsuMdtLEtcCYwA8fFcMH9FF2ZhomSxZinQgcA97JqrXUUk8eqx48EqdRGG",
  "key3": "5gMUuaXEiZKFg7hBPrtNm8RKaavCzHKkvyjchYTnJem88h1Uh2yXMcru1rrJg7VcxaqQabVuh3FQCxW25j1re64i",
  "key4": "43uaVxLV1RSeCA976y28vWrpfgLiEQUXcqQ2fgmjtFMKVnpzp9TuAZrse1rmT68VTwyMxufBRVeWM7s2JQDaLcG",
  "key5": "4wZJPzHACsPTP1rLYRYmD5Qnd6c4GAbywcvo9hkbx2mCVzfZjxQrQEZk5hjbskyue9djowQgPuydZcQ8Np1Rxfq6",
  "key6": "3U5YPBSpmnm4Z8FJzPSshGqqNFqkKMpghMtkLC4c59h7RKvi1U5HtQ97DcvTNL1iZ88HvrdyjYyQEupFaNMhwibU",
  "key7": "Hv7dxukHd1qkrPzwfMgL767eTfpq9k9HMR8jADKEtdMcRthhriFUFP8JLTxraghMDHFtRxZ5DUWzU5YomtuTQgg",
  "key8": "43yXJJsZXeFsgW3PcLH2Ux8KALKqLzw3RMXc2SGY2uyoC3N2rmeTAGH3cmNwma6CojaFWegGN7VRwgya7fcJbzJG",
  "key9": "3iJUPwtgDdot25QnY9FD3sYbu3TWDQKpXWbqXV5apH8xa4HiYP9UpTk3cFJoLHBEkEF1VTD81wFhcx2s4cvpPkhh",
  "key10": "SJtrxH7mrKnYv5c43To3gWcsp3YbCuEwj5gBDiTuEcpkbXD198hBFmfvstAxHQcdYG7acbwwK9T2pRNTo9UAAeo",
  "key11": "5RphhP5UKraDFD2Vs4SdRBBPjAGww4BSLL7L5xuQfQSTgKnXc12EU1SURQHgwsEpMQ7baTKRBXxkMC9AumDQL8Bu",
  "key12": "3BWkMyUZU5miqiRfpjsYusPmRrXzREPoFdpn2vuiYYGUDrykiBxM6cSxuUpxesL6KNnAH2FDcBNRYMEH4NcZxXms",
  "key13": "rz2KPxJc4zuRBffL9o1WP9DPnEMUf1VWwvJucL9CQ1QyNHKbeRD5286CbEW46ZwWnFvD5ynVDKNUQ6tUjQmiX6z",
  "key14": "2LYL6HEdA4bRkwziKVzbnUPch4RQDpL5WSA8u9ZRT9uVzzwAfKT4ea5a3brEciGo1Vecpgpob6MCBUaxgcz7ong1",
  "key15": "1bdDpjWanTpsQyiv6D3YC48h2j1nDzXhcFeMZyyMNKC6mD6Ttcawna965mcc8teeGSPjmkF5uJLMYE3fnfDu7nV",
  "key16": "5CBJoQomDQPfPKb6yQVXHLHdGFxXbBjyaiMaQeif4UEVYsTGF1p2QgdhCfHYzmbKJmjft54gZiAX559pp4fPHzxi",
  "key17": "3sMuMtzgc5fUfhUbGeFvmYJL9FnEEge9CzTGorZVLgqnkMpcUeW4zz41uqUdmkSHCmwaYt3ifsERVF3UfHSsuZiR",
  "key18": "3xovL4ekvxpC5EMHtjXcb8HdCZgvsWcdFQPiMz188eMNjRmc9VsGtgy2uF3RsafQdeS73cWBnTQEA1TtGcnVfvPD",
  "key19": "5qSxt6WUhuLTJDJHKq3JLdpm9eX3jTtz8MUnx7xCb3KMLdBajeGAXU8GagknA4qoA7C3G4WKHfRmCkyTqEFpHSDa",
  "key20": "2zz56CqqL2EsrHyJLGSWS2MaTkWrD9HX7Yo5YgHMVjnoqrhd6BdAvo1cKZwzheYPku2pfZvmnLR6mHv7uDR9tis6",
  "key21": "5e2Re5L4jDidE7guykuDpNsyRfW3j3W68SvoabM6WT3pKS9EsCE4mXHWGycV4S5LCQ7zNRBfVNLEKksYGEpkDCPq",
  "key22": "4HXH8mXsfsJaPdqJm8RAMC3Z2qqEVVJR4EjmBh4E3DhZeLE9uti3g8ooc6whHbUZ63iyBcujRmCbGeBMmkHzKFJc",
  "key23": "3UQMoZriboVUL81pjUkCHi3ot5bwW4GsRHYzD9iPj6qeJjRnBMAWBCJ499Uy2Nra1uy42psagDP3QbxuhHUso7xq",
  "key24": "5adhhiCGqydVpXEo8zUVEhQ4bU5Rv766xhF9AuL9j74F9u7a5EXKJJxbDfwUkxUiYVa4ohQ65wCqTDCuQjU5kw1h",
  "key25": "k2KSSX7S7dWdrHWKLPYJxi2usWqakFPAgquTufK1YhHym2nn8XpKoXx8nSqfxcAp4skmoS9NDxvegaQUeiwe4SZ",
  "key26": "5QrSpL3DiYb2CM2bTryaoXrSqfPTePmP8QSnMUHQ8FbcMH8LnnGPiDfrfEge7ppTsrtN2dB5dkaMXbzjPX3sjkpC",
  "key27": "2a9BmBRTURjXLkx95T17NFehRFGVWwC9f8RNTuuwBNnQLVX3wqmqbAqTBzkEmkmhesKfyXFhuKp1B1KiA7XmfqST",
  "key28": "2MiwcNeqpRjSCXCKP4LacG4MPMhnphDCQjBYGv12fCqwwfBGnAdAquRyiN7FTLjcTWhtGzzw6ahE5Xftv86Wtxgr",
  "key29": "5AJNbLY4nkP6GZuecmi7tLvesS1Ra9Ji9NYQyiVhTJjGnPKc1tXhAeZfWUet3fxeAm66DMPwWdBMW73Da4J19rfs",
  "key30": "5pYCr5WsnDzrHW614mfMgdKpptni5as32qRijTokprdJwXWji42PWYosK4kQs1FihtgcWJswksSNRc4uLo57Q8Xy",
  "key31": "zdxPyps26beXPcgqj6Eu557bKmSQJX9np5Kyr73nrK6okCzKfGrq98tm2bWFk4Gj6tj5MsZmtQDR13jCnLs3Jwf",
  "key32": "34LHPCuCpCNZQPuVbk3xc4geaQ3bUGnz2VVg1UzsYVQgj7z9ZHJmVfExABWqZajr9hS1tgTxQpbswK4ZVe8zj6xA",
  "key33": "4kkk6P9wVpgDL7TiBUyWEKXLNu3hPoeJ6LdtEKNjcBBW3BFjD6C5jmxhAAgKW6tqLSSKxreW1RGj6gcs1dSrsrkE",
  "key34": "2oPvtvNFSWUMxWsgZweKgJKZFF9BdGTAZx38y2NmFR9UvCNE4CargdF6BtgjkVUBh5uMAtkTAfSj6jCU6P8ea1aa",
  "key35": "3uCngzmQhhF48aWEXY7MXQch2huMwDyYEWVHzRxwV8r9kSQ8G74tQcxdooWS4jgyPvb3Vsk4yiTK1ZhjSw33FwHk",
  "key36": "V2dDNuRbGFSsiT7tgK6rGkAvNVKN7WDftaSTmZXAdKoqUynsq4AL6XAfoyMVHuA6LZCxctBuKrbFXcD9yERGG1i",
  "key37": "65rHhzLSn7JZXkEzgRwrseXcQkVbkvpMtzaj29g5nzcrSAVTe5a3xTnAo9hSLPD2yQLJbPQ4PV1F5UKXXp82XKkx",
  "key38": "2oQKw1aQKF8NRd9hgf9CSmfobGLcomDYRheDQzMe5vCc6qNj1mZd4mdTcSE6NyM2ggg1EfM2WjB31b3g3bKzGhd7",
  "key39": "2tREeobNQ55yW7RfbmzBGLZsoyQS5vmynTW3ehAkEhtg8gGZdcze7NyvPuU4hmycRMS7n4dnL2bFWnMf1McxKESV",
  "key40": "4BerW4Jm9umeyLUFP2gZ2Bw8JESWGMhi7UYbgzyUPSjxbJydM5DukU7n1vr1exwgVprTBNNK8YFa3atBTzk3S8rA",
  "key41": "2YiYCoq8eZMsrJqQta2GL9QXqr8FzHfSVnDCBHt9hZijvgyu2y3b1qJWbX3gJTCskpcZ5JjQVJYPVYvpd9aWG7Mo",
  "key42": "4iJwDTicz7YputbkReHEd2b1ba4PHHzddWSxV7NYewZUWuxzseQgeDedUd3xMEsP9cK9Xcsec3bUWm9P6zWLWdU2",
  "key43": "3LP5uWuYZdBdBgNY8fGzCuVgp4U4sZ9EamBsR8qZji8ykRi7ZesGPQ2DSWSUkrEq3dK3999wUmtoAgcoCRChnF9p",
  "key44": "2SKa5Sk3yADcYaqnnXW4TAoUqP51JxGCB1X227MiVXuHF3KPds8uGiaHzTydfJ4ZtDro7ZtiSmXa5DjuUJSt8xiA",
  "key45": "27SbU6h6dANNeBaDJETWeggYgfRMwF6CNe3XLBJr5JWhbYHZQCVu3MxmtLkvBEz3T6v6pcAXYRXJo3dzwu4XQv6T",
  "key46": "2wmtDSQdsxAAcaYzPhusoNk39qAeWvc8AS3ysJzHexHi8SdmF2vohBHWTCC2rgjtVSbw2zceqGRdtxvhiRSynAMt",
  "key47": "41qadByPyDNRgjq4gEtcmjxFxNE8X7ZntnUg7Xf8ZYAZTkS7xB7kcuwvSMzKhTTNmeXbW9BLntGoEZ2AErxz255D",
  "key48": "4HJ6gDVp2Qn7F8EpsWFZsow38U5w1FuHZSGkQTcTMYdSMcSL2bDJJi91yJXuZySoWsPfEEUUobb1c4WTpkGtyw54"
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
