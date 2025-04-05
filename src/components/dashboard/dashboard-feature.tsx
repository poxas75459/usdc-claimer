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
    "5AtwpAtg73Hnt3raG4sxssr95zQwmZ9wo3573LhFP8J6NVRuiXUBv48PKRWZG4nA3dpAd31zuSaXxw8h9Pkw8mBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CP2xeYNaVb7dGupDwwk2AeZZ5wNGDgoLXyLxsqLy86iMr4BPkmEHjUiaUHY7xhBSpnC9SQMqaJBozmeLh8W74re",
  "key1": "2pZoU42aTfKb2hyu2yNaJFw1NPPmfYSGNf8grYinEipaK1L4rEym3nhjoDww2iPBHrPAdfhyKnLVHbTtPphk54fU",
  "key2": "kKaZZ4fdGLuh41bZFzqT87nd4rdPtFS8VdM7CdyGwT8PCHdmsce9ja7LBAs2e2AVq3fp7h8wD8MrbdB1skJj185",
  "key3": "5mpa3wRn87Mds4U7b2GowqbehMzVNsodQa73MfXQMXjuQHja2RYzs6QkDTGmnkYEsoo88ifCk9o2fnoutAbFSGzq",
  "key4": "3qp2vxkQXbHub4wHnzsJxQAUKixum4px1p83CgVGN8j4aqr3Wir4qohGV2FbBdmQkuGD1hs4ok3RC4cRYDddepzn",
  "key5": "2pe7t4zYGWhvCpwN3gt9ET7r8ahv3oogah11TTfCTH1S5QBkin2bMN6vk37AbToZyhqAkGSkvxamxyE5K7Ud4Jro",
  "key6": "6Pg69nGWYE8GoeMpoq2cCt3ZjGtgn4e8n3CPR9yjqmK4hE3JKM8ccDTmgD3ZViJUA7vBrba5H31hx17JqHs9NSH",
  "key7": "2MzFhHHtwgDubvYA85qgBUUjQKycTpRNopmx59Y1r34tQWaQDfLRXYxmNN7Xr5rfuMqNR5QHLvmbErxd3Z7pWb8T",
  "key8": "UVmk4TaT239j2wLJSNEDCCqCi65JTCZ4aDm95N9vm8hBiGhDubBBaB8Snprj8h7NRtNZjanRmcisLQQtXE3YRLQ",
  "key9": "2PdCMtFiyzLGYgMGoZSqmvgGodv376wsc61RCM7rrgcPf5s2FDKxeTMo8vZHvWYVCDZmA14r7X6ppuSs6efTELzC",
  "key10": "4eYfpb9PLfUo146xSfpTEUS9nzpxnBzSh9AyqiKv9JnWGU8AriHDUVYpZmEL1Lgh9DjxvBp1zsaMGnVdJBCdw27t",
  "key11": "3JTrZxhF1GcM28z7aqYkRz75T8RXufGMAzAiV3VFnMxUuyzkZ1J7Bc8Nv6jmv9DWtPFHkzkEgpSX1Th11wRrHh6B",
  "key12": "67M3RZYR2scMmGTNhB5jCQjYxpp2j6EK3fHyBk2Giv5mRbuLTcYsgbebgN8MddnCB4nZfv3D1yiFDjysuB8RugRP",
  "key13": "3wrQiSKkiBaC7XVqpc3pVCkGwX27Fnsz3x8Q3P7H6fkp8NEQVRMggVEqUxKME3tcyGK2iZSJejcqDPig6Pe4Vvx1",
  "key14": "vVdTdF3gxya6pWj86gF6MZtze7jb5HJvQD2CWhaEwhm7eKQpWVnhw5XKM2bqLkWPTGW4hAVtaiTnHiotYE1s4hs",
  "key15": "5HgeXutjC9drqfzp4yHVNQj5Rm8wZQDcFCEr1vLfeWXQfNDrTjENbqwvxDwnqWaLgerZfCF1f1E3f8TRD83mZXet",
  "key16": "671o3GTLxncViaTWeGGWZ8y4CnNNkpPEdm2GmdeAumcLibtTuMRbSfQ9WNHqeyPGgWyisa9kgZDx28UQUHLF4mvS",
  "key17": "U9h9xrM6kuKoe66QhJQi53MirFgATTmt59bgCcL2aqsFZQSNHYKhqj3LZdsEQ4owkhQS947aVs7KYLAq47GyeDC",
  "key18": "5r52p6n9BzRJKHt58WrMRM3zmUzveeEuoFpxBXzzfDepmr8x2Efw2kc6M4cinqGvPQrcqVUWappZb9kZXCyHsUMQ",
  "key19": "5ohd5gdB7ykxMB2aQh52esACJxvF8VKjuAAEVbfpgBHnELLm2LqQsVw5iyYa5xJXufF3Wd7nZhHmSLzBfGQrT9Ug",
  "key20": "2F8b6GzPcQQBwCVtphBXcoFjZvBzMmcMUgrGK2gyFktDpTQfbsY4QLNnkJHu19GhmLfDVyGM3dJUaiNcUB5w8Zkd",
  "key21": "D1XK9TsTWgxH8Z8aqVvJReVMJXTtzUHujsefg5HrvwWYi67385UYZfuQtuJQNLuEcGM4fRdbeSEp1G2enuaZz7y",
  "key22": "5NqGDMz6tF63BLgT5QNTSxRCyU4CU4SuqvioX53ESUTZmDP3PFFehgPPeaT2BXPW6v8HgdfK1Q7yBA7tUkLPEvUh",
  "key23": "3tGzJJfGpRjzPHz8qwP3LK3A1pENCoy91DNP2229xZXvwSFKxTgtRkJuSc3Aejqm1H1yPYJzxofJBy4v1GXgVFVc",
  "key24": "47T5Sf31iDfNRSdDMn5D37HszDZK3c2LLbB4KHSHhFyzgLZ9MoLvzuAbF9cDHemKreKdZY3iX7LoGv21GuBYUiVM",
  "key25": "5UrbnxzQ7YSSKiDXjLxge13iScJXiFtEj1CiPnbHkNezvbQrNrW8TkDPB3CgqAE1WYFpPn7PrYy2MrdFpsfJPFaX",
  "key26": "3p3speKN5dkiwWpBThcnUt45YT7fK2pP2WdEEGFsfYV8qZ2yrhnm3U36pLSoEqoU5PhWK5MVH1fSYYCjiEy5rqkx",
  "key27": "5u2E72YcQ6hMmzxctrMQEHv5uYMh9VgJDorY9WyybMN4aGBkEab2hXeWXPaED8BsyJUcHS9mNaUGuLqenRn1BAyn",
  "key28": "5pWBA7XZhbGiD1FPohmVFyjxi2ufNBw5q9SUUVUAiZTg4fpZPnLKnxaDQAFH3As2Ko6kD9G6g9oHz7mHz3hLBhQr",
  "key29": "49Xbubetn2AVVi38cgYJeXeNxYXrTGy4SvyMoiGLV3EDcqUVDXFxG5g1fLXc96vazn95JywGN2TYUPrqirYrP6Cc",
  "key30": "2aFg7xSCDLDmT8QV9AoYxHugB179DRxisBt7q5uKf8A32fK51owHf41FSjuxqN8Fxa48LiGCuoJs38vUoMnDz8vw",
  "key31": "kyUNXwNwRCbzJccYrB9v6DMR2DG4nss75rUnhpoZGXC8Ytqjp5z8SuuVE3uiTnNWYQDsFtgFXyTSg71aUTEQqXi",
  "key32": "2qSBzPCDYVyaDpgkUDBKxWh4puZm3qUPnNChpXgHzdYSikiijpknZW2P6FZsQxxARqWmNWPRMwrnwr8bZqLDRKzz",
  "key33": "3zUqFP52pkGdfyze45dMm8K3MtEiRbWrVb8jgbyPXw4RAJRryjvJ3pqat1DY2J1qyzJDe4UyrQV7FvGQEyhMxvH4",
  "key34": "3VxC26naAan1M8GQt2ZjdBiEak8ag53mV2KDGvo3zR8d7sHXhgAg7aV14PXDZNdnCQCjFGGXxpwYkuudF7byKdLV",
  "key35": "uNPhj96XTMPeNxM4vKnw8eg89Doqezwagm3QuqStHXtYn2fs6rVNr4ZvoFudJA7n94bEXDVghrSy8itg4jPLo6s"
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
