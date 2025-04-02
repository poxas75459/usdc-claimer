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
    "3KmKVBbok7tUJZFsqJnoRSefajw2LtbqxjYvDrPpwdcoyYibZJbn7uh63ZVwfpzeJsicNDjrWLaSbfXuz9Wy8vxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56qTH8xdPuCZwjqMMeV1f9CYPDfCZb8hVewNyiejfofEGmYCKWZ2iyJFAhQC44thn7x2LjUzP95uZfhERrizAHKR",
  "key1": "3VVvR849ZnKfLyNom6QEZfWeboyn91Fkaf8tuPja4RarAmJFDG8oYNgBZkvcY3BsxRkG4wpugpZHqNoiHNaLZV6h",
  "key2": "2ipsBCXzR3sEBF6svZwPkPFSmKb1fDR59DzaQUCLh5Ks5g5PMDp3frJ6VZQtmDBk3bJNpjmPgBBye42FJNAdPrxa",
  "key3": "YbfMLrTpdKnTjiBUjpwvHUSW6DvzM2UiEWZecQfWQUhyYN9wEumrqYeRpQaUL8ih9Y1FcKJKt7FEthbj51nFakf",
  "key4": "HQxBXGEVfiNc9NihUs52eNsgXs3cy37pBbkW8Sbc1ATnV3J77mgBqPQVXS6U81mrAMkerLbMCRo1XbFZk8p5Ceh",
  "key5": "SxFEsgoanxbV4hMpRQdH9xrTERjsVpTzwVkxgQmLiSV6mhomNHJi4ESDmT7Kx3NY3gdnMKyCzkk1VYekHhN7W1V",
  "key6": "5p8ZVygVEJuztFMM4w4Dr47RhUuDChUDrjgWBJZXRkAZVcibdrpuYcbkx42V7yha28tBpoJhJ62TNB1B5hJVGLMF",
  "key7": "2S155ismmaaxwfXkHCSQG4bYLXFX6QziziLN2gfZjsE2zzNbkQERb2HyQhFy7CgrDhNZzUQpmpohySr2gHauzTnF",
  "key8": "3wgL7SUT1mH4kiXUedxR8AYhGGZdU8eeYHeHXp9HhFi7q8tR9JGYcabUxc7W3azzw4uwbFtA1bKVuYcN5s3m2kKV",
  "key9": "45HqSJT9bbu8BFKcWhsastVsspN5JwSEsf1K3GdLJsCjtoLj5QBwfp4wD3Um1CPebo5QUo4cgaQu4bjpm7jKXVuY",
  "key10": "ZZbkbrtTe4cYDyu61Ls9X88cuS1J3RvqHq35cJemBDvyEzBatmRA6qVSsEfFXLJPsjMbTdWzgqTuKMaiGWRX7Km",
  "key11": "4pYpjL8iaueTytXYJuWEYvjd3hNMCV6bYn5xc5HUGTwd5BvWXP9HybT9sE2p7Xob4BzSnYC3zPY8a4EefebxYJko",
  "key12": "59uRW2m2yUxZn8JQBfgF5pf1Kc5qzWv5LnXimoWCawcfSaqWj8QU8b1E6WF4UUKwQa2FvXuUYe1bqdKPAMxiSsiE",
  "key13": "dBieFxiEDrgm7EmE56fw2L7r32fh34MDDNpyucfD1X5fGPaSP3tMjDkiiNimssLKpBcZZFXx5mETTZi7fh7VfRY",
  "key14": "3CYX8PFn5Cow467iVP7FVKLgy42Qv7skU4p9QHwF1CXqgvPKftrrhHsAkW9vSphs1FsvuxQ7XbZgruuXCiSiqB4M",
  "key15": "5gWiH7yw4rqrwwRs7LzKHtpKDKVWZBXJNTm3YH1JQfKq6YpCpE18HLtQi3LTwXfqejByfeSvfF2tCexfacDEVV7n",
  "key16": "5U6K6VUMhQvtApdvRqajBwbPgrKaUuwG5FVPALdVwUnGsDL9DF1d4VZBCbnkpCsayaaNyhcW5MWVXBCzj4ceCZ2n",
  "key17": "4X1QoXTHgkBruieFfdUp9vMtFa2aYHaPk2hwaYbVp6V5FA7h6WqTwRfw299pTTbgFCva1BS3cqfYwaFxN3HaCWrN",
  "key18": "4BE7sSaANA3HzQsGDomoQV5KVqjxAQkzjN8kCMCYn33uLVDmrSg5kdUy24awKsKm3E7nSNT3jJD4uFtZCTh65ENt",
  "key19": "3v43zvQPxDPwPtvgy1ZjdgW6PqmreFjBZEPpchM6pwdwPEYh8UVTT2w9EaW4bnfGnnspDt7DnYeKouq2CLJoiRMv",
  "key20": "4ranC54MTPDbpaanoDmspn4tgMU7D5QBCRgNe3WzgrTT8oMBiRagNCe7hcAsNZKzphuhZcH9zVNtbexf8Uab5qD1",
  "key21": "NgcNvwKywtj517LwHa1smephU8bgoxkohkjnYXyW3JRF5GynGbw2JqtYJZEbfhRagwVvSuNZJz16DBxRYPfLtcH",
  "key22": "5qS2V2wWqov5gZxoQxzSwSy1b2W35uK724VKZ2ZWQcAoknm3hWWYgyiUL6JTUM8reVFEopuYDNm1KRB3oE4xTakL",
  "key23": "85MvxbjwpphHMQwbULj3ULRjDb39BTMt62Kjt3THcLpfmWKwH3HmTbunsjwV8DNUZERaE94vS48dKpydRfYt99a",
  "key24": "3jzNCka8fYa8w5ipPFg3ATqVcyXsBL1LknUBZ7vZd8JhKSVF4Si3NcDNC1xERRf6a9uUJcnPao2LTrXFdDMoq8qc",
  "key25": "3Stp6TCRB9vtXr7KcQhr1MKv8etAsHdcoj99Swxb3RSLgykkQ9a6QRXmbtqNMBkzRV2fxVtCcXE4XgAMs6ePjryo",
  "key26": "5VuZHSvSkMXeugpEmVJBt46UHVkT1Ho7Y2h2XQw5awDoRoCa5rWXx5E1yaLhTxiGGJTZ5cWzYZGYKnscL6WhSP3Y",
  "key27": "59s12sbk46WGPymzQ5LRvuYj1VARDZASQDK1ZyCmyEK5mioQus8ek8PKxD5zZvxQ5sf73oUcScJreKdoisnS1Fip",
  "key28": "2nCwZjW5ghtJX4ZWs8dhMm3kvy93Xi3h6qUxTUH4gHaFY5QmAhhw1s4d2Qc253fX4q6UBKkvwypGuEhJVxt7XFaS",
  "key29": "5rNm1p4FNyp2QW4RPTygD2tRDZJcPzJuSKVbo5tahZz85ZJkMeHwMA2LLUpvi63KLceydrryJYNrAZCEg4w9BAdP",
  "key30": "5bWVwRWxM8dvF4JVKFnfbomMyttM9RFmp2Nk2NCT6wDnN2tvaP4NBqCDE81rgHVo837N9snQxaSrM6TH7zAPEWr",
  "key31": "3jWwo4m9Bmdugm8ZqGdjKYGF3zcReUr92cGKpU9Z9EjG9WCDodHfRM1rESTara3LJ4LR5pTEccBNecWNF2Lf14DB",
  "key32": "4de7pkY5AyeLJUGCQ49SadEL4W8Q2gqKuHQioFXS1fu3zSF8iA2qk4wZM9122fupijyRwGcrmPdMEARkPQLNcrD9",
  "key33": "4qiA1XhvPg3Vuh3NbkgdRvs1VwqahavRVsxsCo4GLMu3v9dAn5NNbR8wmPrCgpJKTJqmGhx3YXM1dencxd32JED",
  "key34": "5D81byvVrwUWoPXVBHALixkc8dL3RhpgCT1d692nezNFXaoCtciXnD9LrN3c5h4GV9wtugsqax9oDvDDVZZy1BDL"
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
