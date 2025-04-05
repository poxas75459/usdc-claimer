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
    "5diPKLVPTiivcqtZnKpN9enYPauGb8GgXuZNPDgsrnbHpBjr3QwdAA3iFotuL3xG4kxJcNzqJcof5P71d7ZuD6i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2zN2rkgSCrL62CE6YfpXUUCFrG5jRYvr3qPTnn25vPPL6svJRFzxC1s2UTcf8TRmvjT7F6C83FG3eEC7fs2AdM",
  "key1": "2j6a6iCNtcE6rK7tCFZ3jeRgjDtbkazTZjzko5m1j1XaHRhaHPNrK2SnoReaFzT3epiV6ha6ZLt31u6TuJ2tTDaX",
  "key2": "4CBTktmVwk34uYNksD22PgB75hmqGNvXekCrJ6n3uqur2QMEoa4iJuQ1Dc1qwqTdCEbMx1mCV59qSGMJnbYFmLCx",
  "key3": "3mWTmAHei1jY7iB2SQDdqk1MEsTAXoVeSSW6sbF51gVok55BMJYivwF9UNX2ULHy89hM3xNWjT9GC31ET1BeSBTL",
  "key4": "2vonHFuzm72RGsSUAPTRhk4mt2z18z463svSJeBvuhDyd5aDFJkrEM9eyAnkULMuZuLitiWjx7Wmm8MEMiWDRuWe",
  "key5": "3kFP9NZB3zPTfZmn1uk9VYbx8t1wV59H5b1zz6B15GVwRHaHUfvkHMBggCsf5zxAwnnboKCYdHSoG189cPewckie",
  "key6": "58J78DzmSrPx4o5uSqwm6QKre2C6pXY8woM5zV7XxvNZKppF7smbcyLT4gmFWgn3Wxdz5oHmhYBYDB6Kd8FkhLSJ",
  "key7": "5DU6o8zRN69oA9zqHE8mbEjCBadW1hDfSB9VHW63AxqPDCzjEx1BL5H5bs4WfAWGnj7rQYi9NJ36ZSv857ecq39X",
  "key8": "2eNf295gzFgmU19XvuecbNoCBEKdgM8h8wbmuPf1nSPjVvTr2LXp7QM39DVTAfqdg2FgtTR9PquPGom2TPFEiSVZ",
  "key9": "2CKb93kpkwvKyn1Qh5qrLUSZiT9hjfqWNsFjQVtqFA2hk2TdDFU6KPvegHNsX97Caw4BZpy5YBwZ8RsB9bdi2CHg",
  "key10": "224Dcayv7HzYE64c3CUcYvr44xsh73PRtLF8LzQdeUpYf55dwF8y2pm9YmeLURU7VRanhNZW42FQR7w3jciwFjUy",
  "key11": "3xKFvrStAy3Z8fURTzQTg1WXjvbBGskwFyy8hfJGvk9QKBV8Vnb6dosADTmowLLv6mHRy2GhE394i2pSgBNj1Jkg",
  "key12": "4gXTGUBg5ZqnowAT5f3XEyrTmTLWPSqpUj15AKERf7QmtmaB4V68KNqKQ1s71P5UfxidLN4V8hsnHoxQj15Ad5Wb",
  "key13": "2vtZUU118VWSfH3W7nUySbE6iYwxbEbSDojAaB2b8nDBUKgzzuy7euCL39F6xXGJMyf2T7vTwfUQ9f48YBKT99c9",
  "key14": "35zzM4JmJH7sikocnUyBsHTBcpto2ZMeSk3i5YvtQB9ocdu5w141SgQf6WubuCGRj5gcBH1VmeEUMCpLstzE4iik",
  "key15": "4yFD42rottvu4gbwMWwLkNuKmHaWQVo61XNRj7HWUhKRdgEYJJ7DptKFzBiLHR1EGSzJf54w4T1N9oKaBD3vN5pP",
  "key16": "27A5ATN9u7wYF59gaYjso3dZAjdF2SQ4MBUvP9kuqPF1fcaMNEvYN5p72UrKsdHa1S1BvdqoN1E5YonhQP27tJdS",
  "key17": "5dgwVod2oeWmLD8ALUsrXtqj2iMFmNLYuqcao4s5CvY8BCb9QCGtSRXv97e4fmJyhSNs2k7PErVmAEnMFFnvMbrr",
  "key18": "3fFFNTdn8wtQLtJ1fBbWuXLzc8khuTVLULJQegjHCMdNqMePJi8goURVUKG5G2k5X5YKAT1J14tfe1bzr5q7YuLf",
  "key19": "5C3M6y6bcxr6LqER4cHp7YqN6gP8HeXZecyC6hkMvgFTfdoyDXU14uKgcruzBeicngJq7YfZwwuTxx3GzPUSD9Nh",
  "key20": "4hDSUMhRu9VxE2w4cWh2nSbMvQtj52sModVdc5M54ccYcbJguh9PErHFzJQz5oPi8i6E4v5mEaJvEiCBpCFGXQPG",
  "key21": "3gjhDLYpkp7Qen51PeghSitSgJvJhPyyqX2xLR5SmtEGaQAQW9azCcnTqyCxFWwiKPGz6Wua1LHyFgC9YqQyURFQ",
  "key22": "5H5mr7bh1NBRTkj69cZRHS3KwpAP77LUsP5tch34EJjZmtZvAtG131ngkJnwnD3E5cLo8Lk9CLyoWaRRS5AFHMmZ",
  "key23": "4FVw3cAmiQaNJPXExPVL3uXETFLoJ15iSGLJ2MMgYAEaH56batXEAxiKS8d62bPn13ZAeo3UMW6ncfZmtGwZkjm3",
  "key24": "3uM9AiD8TianK2gcWRaTZMstWzbaVwMy7NDB7B4RqUNQujRtDJgx3Wi6ouZFLyohH2iuDS9eCFCuqroxR9tdgBRB",
  "key25": "386XxDSeeuN6JzfVpmXkU4YfYozkTYNWU1YhtgvY9LMqLGVz9wDBpM8tEeXBMMf9nUzHbjx4rqsiuTFjm8FFeA5b",
  "key26": "29UV22o7MC1rjv453HUoi7ZA8hpE9QQhQP837j4TrCEzfpVWz1eP2i3N2rgvxAQzwRFhAV7sHdhevhZhVhMnvf2U",
  "key27": "3gS1QN4hF51APgjK8eZkwZbqkaibem7EkoAQhhFNhEsvx7QLkFikJLYJ6kvGTmQsmyPpMTXAWqurmXVERj3qXWaw",
  "key28": "3cz1Do5C5Cqb6ZrRz2ujHyJGgCSJfn24hYnbf8cGcvGunSqZ2uAKpJj5zv1B2ANHeYxrPC8AnFHiL6gjNwsFbvHx",
  "key29": "3Jfb5vBg9qjR5UDjVYHL3BamdGrAVvSkfLCDCcJBgt9wcgHY6gmKKmw1MJQ5Lw9VkkfVB9rQ7WDgrjSKYH7Q1d6o",
  "key30": "4FNKfMYmtMsyC9cJ6rhVGNeZBgkbmSJLoPnhEMPD4uScXzhrqQvoeNziZ4XvBzBK69cgwxbRMj5y8mSJ64V4RkUf",
  "key31": "4cDJ9UdNjBBV7hhUGXBh7apS2dK7EK2p1Y2g6QXJfbUHs5kW5m9GwRhmyrSrBEjZKVwqLFboAjPprdkpGw4FwHaf",
  "key32": "5CLkzKhFR9PrABmTVYwMfQKTvQ4ZiSwN4CADor7bX7qQyVg5rbG9PWC5Nzxn4iYeRHppHPwUbpfVHYYTHGFSJ448",
  "key33": "ikfnY1oPZTE7GXkhRrkpVtmKxaWwZRARoiXsAcAR9APKsMdGk6Gx8yiMiAktHwvAThNgYtqtfSNonJNuwuNwoNQ",
  "key34": "MaGHMrqS16tcwLXhiZAGjvD2LaxY5mJQD1mPJWY2o654A4H4ojrJuaapYUYkkpgpYVkrBybET9no8acrA6mdiqZ",
  "key35": "R3bubzJSCo6pC36Ezgbkvj7dYg4L24Q434Kg7NzU1uQrwkeZpJSjDzYGRJcQuSaHJ3nJzYGTXbuvUF8VA8SW1ya",
  "key36": "3zEocud1fuS6gTcS68UGoap2f2CFzD5Zu7dCcQgMDDnT7tpDGBbfQYZ3WY27HNkFhbGTtT6iqUpPgj4HK3zq43Es",
  "key37": "4Qp5uuyM5MZPH35BmBAPMnjRkxMpLyr5BSP4YvsiLDprh5AZSv79eSrzQuwydTpUwqokWz3oJoVoFv97oJRRLUT",
  "key38": "5Y4eSdLdKhwjAaEiBDogrZTJW4JmEQNkahUmPc9hJhrgpjR9Zr6teC48SGQkhH1pFvyxTPtYdgzKS7SrLYN44Qvr",
  "key39": "4ma583uJd21ns6vuMxFCcdXKVkbMdGd2fo1TRXh6PbVywAB3dpCSyPLScLhWtryXRi6HT2iqPB4CWT5nsJXk9NCC",
  "key40": "56gtuUrfYn59jD62RzK46vD7enLoCF3fQck78Pi7pQEYCt9KCdyqbVaRMRk7h3iVbcu3axZVwiZVPmMznktQTitT",
  "key41": "5oCggCnh8Enxx7dGE6FpHURm86HECB2XyGawn99jfgANDtur2dLoUkkFU7jiccnTXfyvtAznBWkMGrvnab23b98s",
  "key42": "iVfDyiNXgFZePieckLGtyfiyfSCWM4C1vq2Lo82rzjmWBtqoDuMShUzSsz1DV2thXwaYy6AhgRNX7HosDxJBaJ1"
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
