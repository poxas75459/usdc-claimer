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
    "2CG9ynTk35EEebHAvuRuoCe7VpQfyV1vCeWq5a4V7Cis2r3iZvVUxmwejFCuwXVQiy4ZTVMRa3998QmzC23jFCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AbxHNfbuhK8MZzwUJrhRyR4jKSmnQ8sjFtnjJ5d4HScerFiXLkSfipxK5EVbom3NSbBs6sYDPsUCSricU11K4m",
  "key1": "5uceDFSnL2RnhqcxX9yXCmhuPFMnNJSb1SDaocBou8eWhN47q25zjKzk6SAWDrpLyYFV42v5B7Kb3YsTMwDs56Ga",
  "key2": "5RjsCpwFympCKoJMF3C9TVWouUPqRVsRy664obBvpwpeHktGRwq8SLVdpxmM4GfTbXLtNHiDMZr4qo2SdBJT6CZh",
  "key3": "4HtNWfcL79Hu7rYXc2WYx8G3T8sVhvuvRYTUjMftyiEJVniM2x2fhnm8QminPzZ3opbwTZN27vuNLdXEAEvkd1kF",
  "key4": "LYAT2gx1yy6DaahB8U4u9u1qhU2tVq3Nf7e1ANZ3e56vX24SHECYUaQtsd1LCoaRVHfUru7V6p78yaBxBaH6eUw",
  "key5": "61bMVC4roKbQdpvBSTvFaAL3BvdZY4XCyZPdpuDua3EPHZHdo8ZFyDbLSovZVuTkE8GNWzkVLfp3mAVBTqqFMGrH",
  "key6": "2m7vcvQJvYcQkyU8M2AmnyeGM18CqRLdomtdVtL357yU1s5z9TqmfQ8sGa7mD98R6jaG5gm5uQsTu7PYjiQykWHE",
  "key7": "2y2TvrKWiGMrBVH5rDMGFBq54uQ8J4XA6p9DYL21q7o1safmbw6coXDonEQnhb3dqbuwu4PrpDQws6JBf758EpGY",
  "key8": "3Jr1BZoReKo6DDPxp1hb6ybrfLZAJw4bJW25UXde6NfgHC6Xpf76mAJf6ypapLY3UU2AiV8rM2mnYHiJSmdsRCcH",
  "key9": "2NuoSgyCvrM4hiaF7p54PgNPsAMyig5sANN9Lq4nyxQ9n8TkcVqGegCNHxKWCzsFCHb88nyCy5HPXdNeFQwCeR8j",
  "key10": "4stMAedczmwh6V6Q6hYGbDNAf9dCaQAFVu7L6GXZZ5mFWhMYL8qkSVkEzPeknoA2GRBReqrMiLNPfKjH2hJHmMYX",
  "key11": "BL4cm6nMtaF1JLwLLzDKHoXQei9mGR6taFCLkpGcuCfPN9KUgd1h7FdjcAZJ9NewUcwCeNVj1nfrkqtrZw4gyHq",
  "key12": "pQt5iSmgcvjfGRzPKxTRoUWwabvGd6utLbrVhU4R49Z6gSVsHXXLKT6rmoqWqdymgzxnjSaDGVjVeWtJfN9X428",
  "key13": "3WnS2kFBTdQZuqMKSdnisUunqHtvSVmrEpFBZiNNi1KJzzELgRE25t3vibYp6gTT5M4bN27bAMUKXouboX8ajuW",
  "key14": "4218Ap1j1dukgQ3HuiPDHS78jKugWZZc35TvVbuu3JXXFyZULCgsHYrioTut31uYjb59fM438tJnMFxzMF6QJtb1",
  "key15": "3Fru2EVu3WrAgSNLX1FzL1YmcSDDC9CrNrwzS5tccGsHgEHxPBZmG3rALyfVa3kXbX1yFNd3fJZehZyjHfaVkEEc",
  "key16": "3LFkhgyTeYLfL6WQEi8W7yXfzsDxagL58NRawYbYjiTADGFRHZWnidvTJKHjHu8HKEoLovzHBhEPBpNiCii5LCgD",
  "key17": "w8jaKEoSG8A2s84SMsHKwYPnFRW3E6gqT1kzrmLqE8J6AXPU5mgd71fuRLjKaT8H6CdntpibUSHBwBaGWrBgDPb",
  "key18": "5PcoAuvZgu2mrZh7J1Ta219STDFGEgbApqqZALCuo3zTEonYY7gEG38LpbEFc1VeEBt6BSxZBLiZCLpmsoKWg1aS",
  "key19": "3SatfTxMFxzF4wqygNBTPhCRjH7w8xooTvUaKQyhVjmSarsNFis2FsE12tmC7vgDxQ1fossRZ82gC8hSp3Zaheyb",
  "key20": "3A4VYuemqWpUGaKvSV192XSxG9QZ5pw1X2M9NYu1vQ4vLmnMtwqa4MbdPhizQt31n5hjUCmYuuLHqJU5px7MDTrA",
  "key21": "4C3XznYJ5xGoyMhuGifEuWgP3nGWcXi6Y8wbXSqJn8eiA9daQhFN9rWzoorHv1Qtc5z3Hr8ETFBxy14Rd5SDghaw",
  "key22": "fx7TYFSx9jbsT8a6MdJtQXntmiiVX7qrYwN6SM3aBkTgXNrxLA2aLQYyJmSGqAJzgdMo3pZc9DtKxdpER4sSVPh",
  "key23": "3RoFzsetXAM2ZS7reXDWZrq4r29ao6Mx6S3VZRmU5c96Cm146LwzcCYizaQyouGKHXhYaB5Gz9dLfkKGqExFqWGb",
  "key24": "36SSjx6Zngk7JjDLcUfz9qS6LjyQXFnxtWxT5AQJCeV95Xf1uaxFZqU6AovhBgh4qEVxjCvNpmr2YKTHdw4Nm8Fc",
  "key25": "55DebpZmAn1zsmLrqSPaX2PxmjXR8sAw3N7BWgfNmtnUa5Tji6x58Tmpyha1qKg751WQ7nbfuGT2DMDcAYY9pGPf",
  "key26": "4jP6MmatRsde1QLm4UXK89vndxPArDDt26NMCcppq5PVLwJtJZtmBKDfZSekjZv7Ts7sSA8ZpEPR147PiZRiMMMT",
  "key27": "4wj4aA9BHdApXULfUS95jZGT1dp6owU4ybsaMHTHMysa8fustgFUwB1YqY8ovqVysG9J7QxoaVijt3oSnBE8BUHs",
  "key28": "5cx3C1UfMKb9KTmVjtcZCNzAawqpkrHWpSKretBLTrcg4NJPaWDT4T1wER1d7cQEH1b99eTvDRUCtSFuoBndSeWJ",
  "key29": "27pMonymqLheRy6Yz1ogj8UJiWKfmheigcQGpdgB3WcC5EGoXNo5umxWScwTM3CkY1y9sbrLdAgsApgNKmfjx8aF",
  "key30": "gwTpwCe6PR76xWpn8EsyYz99oA78yMkwzy7kHmiFqGjWaJsHEyPWoCBX5KbHCjPg886dRL46HuSFE3dvKjUdUPQ",
  "key31": "4FDDhng4o6cS6EccUP7b2hT6MDwuqHcSyBajjPybBntBpg6C4s9jjzva8n5R9EkXZHGumzVFjCBGKi4GdK7u6SLS",
  "key32": "n7BFMcZTwXbPuB3YJzUt2nyw3aX6QNEAAtUUnSSsYKYCjU2p4vUHZBkWetJJRFmF4cdvb3qsNvwdYVsmzUgk5U8",
  "key33": "2zNbLDf1v8w5GLePFiyfbEvLBiurzEeKysaybGdtipQPGGF7FzPXAy7sMFhA7S6BhaCALFQN1vJBsB2x72KTgMwy",
  "key34": "4nq6jsrtwTCPCE4qGPTRWY7BwJ869kLVbSxusATDdz9rdfCaFwnC5jUhUpbTV6NgXvH6sfZrFLJqeKMdxFfRK3ex",
  "key35": "4PbSYAAq3SZdvsskziPNyHcyjbnZt8jkKNeeyc73wRXmZQxUL4FQJshm1ApsEmYtA2Ja4VbvjzTtG4gVTjrtc6Gr",
  "key36": "4LV2VZL36HDfm8cqvKGHpukdYAShiRNDqvT6hH1LrpTEzHnBrYJQtvGLhmGaYyCfDMvSjodKXqwT27DDgA8ZdQUT",
  "key37": "5iB98K9MWLchEeGtxwMW21ivuvrgExK4wFKJMo2PumHB7kHU1jg48SB6dAYrBtFJUJtmWwumegd9vA3zPBW6Givn",
  "key38": "2bK4394avoCgjGTFBnbuLEYU5qe8KAY3nsLHYqZmTMxmydn4uCMTNK5EGUvunbPUrT5gG8kCvS2ML7knHPHsm67T",
  "key39": "dPzo1QWyXJfPbXPc9PGsirAX2Jrvdf8cPSXDLE47HGn7rJwkD5nYkMCYBiCybDEkdeUWo6S6GjASvXaq47YBuRW",
  "key40": "weXsk8HTLT2yMfWP5DLvLrANwjkzimc1KFcGSCe7tKCS61BFkMmp3LUQW2chL3reYCyDimUDw3tjfYU1Eks8Yum",
  "key41": "2coRvjJKbGU9Ar6mXFEP4Q1VjcGrz7HnpLpTNFkJCcizBujzaanSsvtpVdpXAAzgpxKx14fY8xP2yQ1vhZYNQbSq",
  "key42": "CkLkVGx2tKbVsL8iAnLb7AG5vnqSH6f7JU5DTeCZ3fKpRopCtrWBa38TeiKJvGxsGcA9ZWqNpMUQF2teWRbKuo7",
  "key43": "4McFJu5FPkyay36hvjWMQ8aQEcMfRSCkF9kZkjFct68v8kkDYi1YW1sAjmhBWLPtqnuz3gyG1qJL4qvESY5o864k",
  "key44": "3PiSuhbCCYn1PnSVySKU1JDdg84vhY3NdtDp2jTyEhxr7L8HR35J8wMpdGwAyVyDFJH3r2rSUqGAZQrmS8uy2WFr",
  "key45": "2YhvUh3xJZjM6E5cadWQ7PsrM3jJjf5Ehcj5Rz9VKUrnxUfZ6AZ5qU7pbAvuBXZMPxa5kBMuwh24X1VVQwpcs6NP"
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
