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
    "54aDhEZeXTG6kan3oGgs2eyHWFCTHdo4dAzouf1L5vs4cogw6caLQYRrRpujPgwdnqUKcmEhzG7VYEsjRP4Q2V5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mCYGLy3GvuGR3DpitLXnhA18aH4RGu9i1zoEa9XuELgiaErc2abn932ANWDRq6wZeqkPYRfyUX6XRv7QLdAFTZ",
  "key1": "x92pnVyo6Lp3KGyeadA5pdhahAPUez5vey4FrTzBTtHy88Ajk8acZN4zNimwo1H5AUvZbXJQg8Zt61J4XXnQnz5",
  "key2": "3Nt8D5Baek3Fy8AHHDpGtaM37uG1H98URnMDCohDB2C8qFHg2A57nzB4NVxY19NrBi1vDXME8tMoNTNJLYxnfzF8",
  "key3": "47MSCLEV9CYFDZU58jnPgcL9qTHZ4eTELPsqsHuuS2wBDbxq9tMGBnqtBHDjDVwHE1MGrM2shxpWxz6mi4ySFvGi",
  "key4": "55rbMP3pPTbnMsprgoM6pkCxe7b1pePiTHM2KKvnVYWLvEaYA8es2MHC8CGEdXDrH1WnNmkQiFNfYpaCFxHs9Wsv",
  "key5": "3G231hAUcJwUeDsyqQqPieKWda6oK8JSW8TAVQTAmUzoPgMB3ameLRm3i5L7EzTmGL2z4zUQqU3N6C3UCueJqUBy",
  "key6": "4b7WHy1Pg1EZ6DiE3YDNuYVbFrRGxzKJcNQavFdvErJ3wfCpvVoiMnPsCVgtWQSPjDk8cpSNJHw9peaWt5xpGAYq",
  "key7": "3zWeu9EankGiG2S2DhEjUr6CyTMf9DTWKhmo6P7TAeZj57J8HEEwU1UtvH87HEN1h99TcqvEvevBZA8iyEJLxA1A",
  "key8": "5JjARBW1FvRhEj247bMRt9oNEHQaCyBw6S6xg6ZP4gdXvY1fz4sSmhPj1jCpCDXGchP8VB5ht6fjcYLmFyvRcNtz",
  "key9": "42xLQJrXStRwUmDSQENJoTPohRtmkHsXBS7Mo79PT2r3T6Jo32Uyb3KV8sWxnQH1nrGcDyPFqRb7ud87cwse6vbq",
  "key10": "52rgUD6cyynvrun9hmQtHGakTL5VFE7JkRrF8Ss8kvuW5U52KC4gEuxn7Rnf8Qn1KZCPw4yDe1ZaG2Xr2b7Gg41o",
  "key11": "5wDVxdvJkn3Yrd6qExGCpW6zstEmkywtwfYCyHT6HLj83esXgV6dWg52zTFFtWxiYFWMf6kErtFsEFBp3FrGTehF",
  "key12": "EsoXsLZMfCz9WLhTui7XsMTsxfqS83u2HWmimToWsPnwh815hTxcgmJKnE2fT4m58Crk3JvBcDrw4pM41uZvkU3",
  "key13": "3jfmrHuW2rs2tmra3DDb2a6BpMD1M8LZsytHrFWUihh1e6PkALfQirNSXFkRUDAcgnLEbNWnz2whU91fyTdBxWqY",
  "key14": "5iVHdNT8NANekHUxi64SkgNw5Gba9pECrmQUFxgUkxAb83PLrqRsTp1G4D7puNfWufKYsRkjBUPu7Em9dwe8uaKW",
  "key15": "55rzyEZdcxssfMZ6bfFhpvp8EyzJrHmTrdjgYp7eME8J8sUzBWUdrDBfDPSLmsAc3joKX1r1srk3nZCDdhVK157k",
  "key16": "4fSdRiQ2Jro4wH87YXsbmy61YVwBV88auVsJpaNguCm7rpYSSTH4VyJHBso7HCEpn1NZzMeJQsVhpkXUSJm7WpuH",
  "key17": "5znVXfd19UnriSZsyG4crLzeEuwLZ4pDJaC38oViDyQb1FReFuUgoe7wJmeEhp5fMdGZanqxkfL2ZNE8JTiTCFDi",
  "key18": "64V844DhWT4wNRkJr93Lb9rS1NrLbhvGpTxwWFzDqovL2fTvixkL7JE97sDBCVBii1T2knfZsP2CZVYqZEM1VADb",
  "key19": "4xDbJaYZ3Vi4tabtmY5oxhqXkMfTDLvrFsDEhnmZDu4BFTSRTuN5HtM8tyfv3k1xva3jtWpAagcHLa5M4a6XNebo",
  "key20": "ZY5kHMM9ctEWnBmnJ1TQwGYkNA8dB7qX6VHw91RC6dTokN8mWbfq4HtYd87mVf9B6DoanPXuGowa1mMMwZavVDC",
  "key21": "5oLd8ZTRrfY5pNBeNnLDAhREmZ7LpHafjYZQKyn5qD7tVTSTvAZJ9gvLiEwa48CGgeGAfuzBM435w19s7njD7kCa",
  "key22": "3ujjRHpUh76RYcgjC1iQ92r4HktbnzQECXf9ZCuyb3NoFLPA8Mdh28nJLVCf8hUv2sxs1aX2nzgJrgmQM62hwVir",
  "key23": "2LCGvWhXfSVdqS3CaEvK9hoVoKrhGjiZQ4i3KaxEzsDBT93xEseHbzF46X7LGyFGB74ZGXMrVLUUaevUEvQKqMA1",
  "key24": "2ZyKLFDbkc7YjEQyGcVtGpPd2Uu6unmdBfQ2cZym8qyJoAfWjUbTLPpNM8xrngJKy9KZ7P8SKrRrHep544z5GSM4",
  "key25": "nrhkWaDyg8nMWM7inCsgNMW8r4JBBy3wbzZszQwUh5PSqHnZZWbJGgcmWqZAyxGAHjU2Dm3Rx12F8ikwLs1Dy63",
  "key26": "5nB838Vc1UQEhnSezbTf9X61WKU5AygxkDY2chzPvCNbTgjqooqjksVxped2SHEZFgncrgdUjAuu48YxojruuiKi",
  "key27": "3vhhu42weao362RuVVxGtE9ALQ1no36Dq3TnS4mKk7KmGY9UnXphEugbV2xwMqNB3hJn7Yyzxq3DodCrEXceSRy6",
  "key28": "22yrXez6XNW3byM9i3wfDjTXYji8pPqmhrgEeSG4fpcTAS8boipS9pNJr85FwaGRoJd44dag723QRe95TAStF7DT",
  "key29": "4tMJaV5iN3Jt9kJByrKmmkUPTyNPr4SmNCcZXbXNh9YtNe1fDbJ1TywzrrSy9pK2zEU6gXvvSVUBEXmGCgmzqbYe",
  "key30": "QJL4q6fiDYiXidiZxpWmcRQkFWZ8LcZgpY6RzKJmaJBinXt68ra1gX56kgPGAaJ3aKtVUkSzGd5tknaehh2iL2B",
  "key31": "22csBtsFVBDjHwsdWddz3599CGuaYtKFv6KT9wnocbEB75cfNfmtgGtF3JaA5bk1SBp8WjJhMa7euUDewFnjCTrV",
  "key32": "BCNsf32obbz4qKKVfeNk7JQcTAGcjaAXQSi9vEmqF8M6yJ5j7K4rtbZhWemwaczowoa5Vv6hMfxqkxKwx1wzrAx"
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
