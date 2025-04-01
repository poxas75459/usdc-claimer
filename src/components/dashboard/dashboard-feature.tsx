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
    "3NKaT6hJ2sBSsK7WDWnvUXfXZXaGBU76DtUp6UxH7Uyc3UDkhHxmRd5nd1VpSALaKn8fA3rLwsrSEv76RxSjDwYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBAsowuNyfbvVophyBTxbyJd7Xhuh6tVaLuZq1T1RXirUr8YZWi9dGc5r9NnhZcv2Ek8eyfeDjGsHsiauZaA5Yt",
  "key1": "2xYSgarxr8AedY6ostxkkt7ebgA3nDSLs1Gkm7WsP4GEDAvJ78shdxXo6RSfom9b5owiriBWJUw6LHDysCfzdrkT",
  "key2": "65ExZCSQxQfcNtzfzdALJaUSDp8kQQLUegfBwzhkzC3Aemhc4bx4nSpVXjBkeou87hKe5CXwGJsdTQUwPu1DPc1p",
  "key3": "3RdJqdDNsgjx4UvUPqP6CmTdTDyEYo2mg7ASBE2z7t3hRXhjRWrr8zj5UAcYNxpdRrQiLhd8xPtJTmaF99nTQqHb",
  "key4": "2Ch9kHdduStmpx3yjXuYbQyeL9aiRqhBdLmhg3Y8uzyGLoHMEbMDum7RM2LkM2qJx4fyK1uy3pTCYnXdSnB3GbQ",
  "key5": "3vwTTNYFq45aConUNL9i9eyBYv5VrJEJTGepfacyjipYWHnrjCXHHBTKixFcfAHoYHHjVyPmJQKbCPKye9b34fDo",
  "key6": "5r1o1PGSAmrBA9PGqPmcPZ9VGnZCC9Z9iSe4m5keqcHV9DP2UXFmJh27cLq1PrWBTXiar6rY4xpFUVhpNT7QiFz5",
  "key7": "HKrHV437q65QNJKZHDqxzvuTP55opvQ6h1smM1sekbsnCiWsbNQAA7pZkqNoHK4RaoRAtTXxWxEKVKk1Ysgw2cy",
  "key8": "QBPkvPK3n57VmwkQZuSS44jBuhheDUhHyYbkUrtafzMqusBv5sBGoYyi2bEEeg65fJMdW4tFFxurWMyEawZZzkj",
  "key9": "5Njez41MDV1F8KoLPQULhK83ayx2NVQ7BvTcrNuzurf7tZuMhnURY1yTuVqhQLhCtbdttmpLK1nrtz6R3PV6Pbh1",
  "key10": "2K8YR2hX58jyUCYxRJJLoYQ8oMKGLJJeg34UorvUkQYVmv5v4vVRUhjbWTozUbcqcsHFRmJAkbZhjUcuhgDUVMTn",
  "key11": "zhjZE1gEVHvGvC5aGC6uvTzbK8fB1YF8wpybRkaHpE2ZxGVbkUeK62EipqCCmmEDrWtbmt8XcLRWzuJXpo4GMfB",
  "key12": "1B8RB9MZGBvEpvqtuezk9EhzYzdX4QhWDdiKbSVQHFogxLDSqzny5iwZaFpjzhjdNLbUjuXmHXu4ctFk3oMQ2pU",
  "key13": "5CHFt4otv2zqbcdeh4ordhryR4MN5dQzLCRFirSS4NA7VMKDVB4QLVR9QuozGZwgYw5aHxzvGEGkePEBFZ9J7wtr",
  "key14": "2bjeE1odUPtCfee2QiFfoJUSGfRZNtEyP7e6nAuPJdvrxvbZpXhhQeiUQpYCHseHur1bHKv8MdihnHbTordsrrnz",
  "key15": "3z6AqTNXqZEJpkK8LoW5DXUjM26Nx2AxS7BoVugXVzymukBFWqqzanLqmYp7cuFXNYZT4NfAbgan2u2ZYYVjLPHt",
  "key16": "5Yn7d6seuUpr8MfFSvyf7tYTWQkcZPwwCUrbqcbT1yXgvMqgct7oEpx12gwsCxLEeEjdnXjJ5ELZr2VgPWzRGr8F",
  "key17": "5Chus4cjwYccErvsfjEqLonULRSwwCSNzCgvDeovL6umdTQssHcq3nascTJKex4o2X8ZdJYvZy15yGJyPNcK2eCd",
  "key18": "3Ytnpc6y7iCEAsmK7r4jWXJR6DnGGFFNzq7KCoMtFPEk5dU8MURydCbb5X7ZDyM3CrfokBit9G8kPa9YaNh6Rom5",
  "key19": "3Jv4ccLU8cFdHP1F6RucVNj7gEeKhzRZAXrqSSdS7JxeXzgh36D9sbKniydymHueAbgu1SzhsJmuU4QAp81kpcYW",
  "key20": "3MhoAST6GT23mLkFkZY8KZW7VhYswTLnGumqg5ntAeisuYiRRaaaicEV1bStqUaME3HQXS49fnLZco4Nj3zrqct3",
  "key21": "4g1X4Q2n67h1D7pyJ51NJgXr2UM5nji9HBUhfpjTjYaJrNdpabNFDhqCGzgi6La4qd3Y8mVVjxaKj6kXjGx5KuTb",
  "key22": "4g2VDTQ1JqHyNd2MNHX737KXmCVti9CBCQffwPjdBrDsjMAaai76ZdMEAGgcn3Z57r7nQMMmA1VYhKDCYkeAigSc",
  "key23": "54CEgvNySB4X6j7PDnZjtkKNj5RqmkUJG1WGYYM72iezxiUS6fZoWMfAn4iyGSC9CCRTSoUe9YvYhuHzRzqmFZrM",
  "key24": "3Ka7XpWEj6Y3kZHoXmWb5L1Q5RcEHQbxVB3sJe68gJuuBtFTVQme1j8b9WPrRA22f9ik17Pc24p1uPLuCm29on9r",
  "key25": "481gKTenJu5X2PHndbu5cLB2JJ1HzhuGdMdXseKHhQbpcd65X4ezg7rYJ7utEAxUAoFaF5Wb2pS9ww3j42vBeLaA",
  "key26": "5LK7fTxNnQt5segUw9UwnZine2Y7QsCk9fijgUEPBTUAvWcXGqCrhUbB2krxKtdNeBZefwtwjo9twQS22o2FkyRo",
  "key27": "teSNnWy5WhtAMCNTTpvCLE3xdczGqeS8ckQMWReLLYFxxTXf5nukfm7vKU7jvS4tyromWHi7BhFFvUBqJfEnDXR",
  "key28": "DkK8Ek6KHQed7SC8oNKoPrBL1ZF2Hd17uewbEcJji4poBHiYrvBQfzLGVcRQ7hLu57DBVgsTuoVsouUZ9Km4N3U",
  "key29": "5vwhPCED4QNeLv1H2jSJejVn2wAVjhRwTb3MKX7Q9T4NFJrNyxEsoSUEdrtnw1oJUhYgwH1f2MXixN4WDQQtDqsu",
  "key30": "4EWeM1iY6rukKQtp7QdcdVbT9NXNkuttTzAp9BUut2mQTThD2Ee6RuHvjhLoqA1QrzxFGNEszBw1bb9ez4hSgZ2B",
  "key31": "T7orodZzdW38HV3UUmjVyamqiBqWUsN6iqAcvGcg9b7wk6sCktKod7eTU9gbqf5W3RPSXhyrKXRNEviy52EYJN1",
  "key32": "3nDLNq5QAnZxMQEtszDjdwNsRwSzJF7wXzykwLmCapvYuSxPLGWWmcPAwHUpd53UfWPGFuVPtUGn6K7wA4Su6MDc",
  "key33": "5q27ut1YdYjkySyV9YNT72JLYmBpbcPaMJZdUfUACzbh7Vi8CTSqgxjoNmcKnBxYDVMg8Kmxd6u3YokEbsM1mEtK",
  "key34": "3sxhEbHzh5uCerSotDtaWQg1GSQ4UUcX2L6eZA8ZhDyrfzjGyVCkxi9eqPLhZis6o6UtdcgQigV7tHAYo42tKGFW",
  "key35": "5Tu9jYkF5ArVMGJ82YsAVPCQSw3w3M1eB56cgK8YhFtd5iRrCuDYPCqTouMFFmded15Z35VUNUpXS4cKNas8A1EK",
  "key36": "3uncsdnndoXJanmHrhAsDkhTfjEkjHGs9rHCL6jQaxk1VjBEfg58u3sGfYrfDy65KpHP3LPLb6Ajm4UfjMDL9gkB",
  "key37": "HcpW5npFKoKpyUwpFydPtMrRVbgBSY6JXcYHAg7ofBAi6HzBk8aegyY89RPXmv6PYdi8H8Vb3Yktg1bUbBXnFdx",
  "key38": "5hXNSeHxq7FD2gdXXG3f5zF41ciKB9XsCZ3j3maMLoCKN2QKmbNXgnnUtaXwbd8cS5QGSAC1jne8abmKLeuqh48z",
  "key39": "4LKMUGNvxjsw8vPbPX2TPQ7ZNDfEw5GJ8Y4C6hoZLwD6YdUVTBFFi2KX7SFf2ZGHagCDdVQfPm62q897dHAn3ZjB",
  "key40": "3nGEmJQmGaHVj6oTDiWzpwcCs1AoMEd6shTmzGrBneUw9gVzJTfVTBgTaJZBr1dV2r4EHTE46o2kEtn3xYn9dYaG",
  "key41": "2wpTjeYpwQn7EYYKehDDEKmydxRjd8iUTNMoBhUJ9nSv7RqrVgVX9hJv3wnELfUjHdyb1KN8vam1VX2cR5JQbycn",
  "key42": "5P3eyDNuhwcBrGMQJpbotAYaNGxR2usk4Z9bN4Zhn1dnJs2A257B7M5Fj58MBeAyHSHSgojZqqJ7THRV4cVbMCFE",
  "key43": "3SFmEVDKYk1e6AaLAJtawDtTEBpgdnSi4yxEApVGysqAsfZkwiepWfW98TyBBMmjK99J619aDxdSmrJ9rLhgyNbd",
  "key44": "3wX5g26Wd1fDsYwoit2WyznUFupMMnwCPPh732AfjYcYyhXnZY68j64BaUF1sKtf9GytHPzBMJVimJ7sHmszCysq",
  "key45": "457sY9XZrSyniqzrA5CwJjHA8wzRLT7yf7t8LjsBy5Fx35L1wew1irAyDgeYvcd7yXzdhdAiD1oU1esVXfWjWno9",
  "key46": "3KRXpPsVpyUvxMumVRWoNfnYUbTiQyxZ9VvxJaS4sBgemnhRtZH4ki1XiScK17YerUsvS59cWxc5hqAPRkseu7zj",
  "key47": "2H6U6zvVDaA64T1TcNUEGLBp8W6WjvqDdf3KeTt4Y1AyeEX3QoYSTqyRjZj4B8SzYXtHSNL3iLniEPH5ekJ1WDdu",
  "key48": "5ouTrPZp5fqQXQfPAys5hMvwHbjcpvFC4RzmzeiwMcAvb3XyF2uSEYo2oGiedJZBTcZu8BW1PNMZ63eMiwwfndHd",
  "key49": "583BQ1eknKvvRAwayJx4Az46PXEgT1y9zCbtDuzEXUTD4a3wWdjSDrS98NjftXmyLrYKoAxd8eQofdXKCuSX6hy5"
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
