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
    "3MPya1eAXtFqVS4SaqcRRfNKv4d4byCU6ZEy2X7bZW3b7hKnqCgQduTwDnNNqrZcatVVoi7qPmbcfunXJN1A1xy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUMdCebFnUVfs8yuK7QhZand78MNaVAu6vZYpNwM5xqa5tTBApY58dtqKLyUjENgtG4G1t97FtgtYx7ygBWHLXx",
  "key1": "4Xymk4ZC5qSCc3RgWq51Qfr8mRm5bL1KTxuk9fDSskoD45jzC4yaCbYaJkHn87mMrpiRyWRmFbQXkUkGvqC9bjTa",
  "key2": "4imW64Cm4Nf1ReVTNzrfEE4B7sc3XVaM9q7yFG2tXxfxvz9YYeCjdSXZoKHF82e5yox4dcRaN6y3omQCHCbtFv1P",
  "key3": "3WVmVbwk69yMMeWJDv8C9EHpiFU6ejeABLimtQvuyQh88wEA1N61WWreR3Hw6yMZgFCYngnU2oYZQnpWVE1HGYzT",
  "key4": "3y4paEYm5pKEFaR1oBxacoVm5r5KZNKYuV5hkuhfeJn1Cw9NoHoePwQWky69dgni7uXVVCxddKy8gy969paPeKG9",
  "key5": "62XnWJ24Xe3bdTPUgaovYjPL6JubMXNmz5bMa1512QTdcjk7QFG32KGcPKsv2gfMgb3Py3C3C29dfaqswCFSJ9zL",
  "key6": "61MWcDsEL8yVFZzJFaPXfHe7xH3d4KCBUb54dStpYUe9rBwKyemekjZjLBXLAbUdNyVcd4VF4RSMT1Ubhg9r3qgv",
  "key7": "3vEv9jXBPJSecyVTQUyUJTepgWbzUZc6DnafxkpzmExCaa5FcbTUfRB8eQf1P4NtxkxfYymwNR1S2jUpQSnm3RM4",
  "key8": "5MtGVYyXMuUGek49ixkrPCTNKF2ZxP4iSBTnmbmD8QUp2RJz7z8qaaBcvdgPMpQ6LoRHoEizxr12PQs6sXtJCV4h",
  "key9": "5uV6uVaMc1ayGSmSv2qqEoqpTndm5bXsVWuSCo37PjwJ1SjM8rNjCAhuYsYyi8YyK5xAzAE1v4DevVDuKxK4CAtH",
  "key10": "3JZGujGiXn6FwE4h8jRkuqD5dmd3kTBSgav6HtBxLAoSj3Dk9geTeNE2hvg9LeJqvGQVWXX2QJJCqRyPSAbRtSkc",
  "key11": "2nokUHVkWvhus96WJzuR713koApL4Ynsv2hVUrwzx3cWGbsLjN3kYGdu5Rb4EHSANZf4Zi42JVACCCqcFZodG6d5",
  "key12": "3gWJ6dZT6ig2Uf4kzE9nHGNwfXjhfz7dsGryad2yBVFun2rUdFp2EVFQFpgDeWTGzPcgYLascukJAV9h3MmQZeMa",
  "key13": "2cTv7A6WzaXnZYVu9KVWQ5CFrr94c5vDyZ6f7nCdf9REvNdQAVr2gAQmm8brvqD39Z5PTh9cspN9gin6rWRWyGT",
  "key14": "5YhCbSHkKZqsfDS1MPoe4Ny5QrBTdWjvvomT5eaUvSfxMWoysZae8wWE7Qrb3h1HtEC7LV3YHChu87XZQRcgHsKG",
  "key15": "3NDCp6BbTus52qjNZGEwcNgALUoXx4XkP8aqpNk6jHUAGaVGfKtfBZDVqFCouzPSRh6m4XVec9PHPcY9xLY6ncvs",
  "key16": "4Z4Vrt3kGDxfibhduVspRtxzMJr74c14EV8nAX2Ja45pK3379pqxfhkiLdUcW1Uu6Zuyt4yPjRXYECL7DHpJwuAz",
  "key17": "52VuyZPov7Ds6eabNLsp1Jktg2rcXRzMZLoXz7knE6ThjeJ9XCYWpYhFQXZVqCtr3ohvMmBup3iMLRAQS3YsheLa",
  "key18": "5knhwAzSxvMnhs1ATctzcwMgzgEpX4tL3HBo1EQR5qVPxhQbPwtEn1VWoN2mvhCCVTF9vDCWswn2Xr1J7RyMuE3B",
  "key19": "4TsskpRKqS6BtNhDuAaawnHWomJBcxvQi4eYzP6BwuV2ofxposgHPfi2FjwU8vmA67iRHEVY5HpSsevKudBiydYs",
  "key20": "5DHtBMYipfmKFhfgb38DJKghK5vF2h9AxLuY9RzG8F97YLfGi3fCwZqwKJsUgH8zPK1qeMGEb1pamy1knkRWyvjd",
  "key21": "5NUUghGpiTuRVH3VmR7PcedNR4CkJnvtsd2Yn3q12i4g3MYuSzLNPQc7ZtDnJoWLVAEybwkmu1XYyPFcsvi6n8G7",
  "key22": "2NKTtJJ6hEfbJkLJdpqkpjyu2DhGUAu5vSTdSt5kh641AHV7ax3MUnBRhBoB2WTtMuYCtsiwPnXh6bUuMZAWLXCf",
  "key23": "4ygjp8UQ6Q79AHFiDSW2eoTkeRJkCuybyZvM8AAYUYYeBhjK2DvoKjFJkMoRUo6MG73T4TC8X6447zSi9dUCpwQU",
  "key24": "3RZgR9AYzjNRcZXrTErB5mBXKibUYD8zaHWsGrabs2VAKZ8JEWxTMMweyVtJ4k78B3xcKoSyjw3xszYq4yS5sGQQ",
  "key25": "2YNcpFdsJoVCWykyzja9QRxMm1foWrYXtYX3L2N7jhcHwcW8D7zYfgRvkqBxC4m8xxbqfDExm8eU6pEiNJaDFSxa",
  "key26": "5WtuQh4gjii8MLaB4ZPvQ5rTf395TNpJqeSmX2pa3VZLuHvCZUPgh7TwRmQDaqrW5fvagdtrixE6aFrFAXGer1fF",
  "key27": "5eHGuiFtJRYzXjuqfa32pTd48TP167HgBWqpumuc4ds7FywazJnVUyx1JeqhNCuRRoXCKKr8KXJ38CUaxv6927Du",
  "key28": "4V4ZcrXL2P5FL2GbDVkqGzbijuKWVeR842EXiuhVL3doCSKicu3EqXBPY8XvuKfeECDqy2cV2J6hZRWaL3xP7wXW",
  "key29": "8bE6MXfNrBJXaTqgW2Kr71PMUkpYhACG4J3cuVHpSY1AUrprEEJten7fjXm36a2gpfS3m3tWcR3724q6gd8apVU",
  "key30": "4PDpfh9j6d3BQL2DAor1ci6nhpYT6EWK2SBGg6hqEb2yTFF4euDFMQihJrPM38qeVDAxFFQCedEpxivkeut1Yi2q",
  "key31": "33jnecyJeGsCVgzXGMucwCWTRTrHbmpPdmq1VtuhT2MqVkWCjke878APgwYhpS7UeUfD2dfYdquT7m5L4G3SVH2a",
  "key32": "3JLKtJsBDJk7pFopKomv5zbv6Wgqn7kFRv5fNvxPGjzXhoqYZRwDcBjqZseUgUAj6uTxa1owBzZ5T4FM4qVvyojH",
  "key33": "3UBPckDpceX2PNdNzhAqGqufiKobtAnp3Bw5c3ND53j6EGKLLj7QQpzGvTSrLrYxPQahwPzvFKSn5asDptrW89QP",
  "key34": "5VtpULsaXc9YWBfUVYfwfumc61TwU72WvKRETdUhZwpKVac55GqFb2miQyokuBPXiXsEUf7Qqvr4kjR4SseLRWH6",
  "key35": "2rPbMNENse39frQEggJYJmZGm9jtdh6ReYraepqWxLiVf36LXKCwX7H6B1szfd9nVFME6zagWRJ5AzJAe1wyw7Ns",
  "key36": "2qvRCRkeP3CL5TvSsXjKoEi1V3umgCWVKb2fo9EpuQgWv6mGbQyN5N8CZPRea9AuoeR2uh28VFAZuHWjB9ScofG1",
  "key37": "3cK3NHQDuSPqfSYSf2ejCxFvPREdufpcRyFnJ2XAvhsLiH6C58YitkQEEoB3nCTJQJnGdwC112aomk5Bea4xEktT",
  "key38": "4XcyeEj2mnGX12Z3djFJ94XB1xJaRfxXyr1vqbBTmWprn7UaERR7K8HyXAybprmuwZKHym2nCGgNUmFmDgeP3rYs",
  "key39": "5QShePHCBHH1a3toUtEsEHHjRrJjQ7znCVhXKAijseoRJxgR8UfnvyawPKJN1pt9D18nqDntdktaKXNyb8iGVBmp",
  "key40": "2aYVHJd6L7Js3KdWJ9mNKFnTXAmr5uWBignAxgzvPD6waiUVrBhgLPBLGYCF7WjEk5f6TQfAKNEZgNbjcnXGdLxD",
  "key41": "2LQa6M2fUdL5dxJ9CB6S7sL6d5R3yg7VymXtYnU4dGgGKUi3nDf7HTq8SZoVW2R1g1U5R1zvC6DtySJ8zAM9uasH"
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
