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
    "3mHv7SqPmL7exW2GU9L8W5zqLc9wSSwDvNQxuEAyTxEPyNUYYnGE5w8fWxZnaGHg4fUfft2qhbeTqZ7oidWz5wdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9AkoALgdWUmdZRnGDoHHr1SKJc9xt6zfTg1sEBkHkxZyf56mpYf2kqREZnD7EBkxCKi3jcUfbnpfiMC7T2jWvWU",
  "key1": "33mbcxBAtpciE1gQYxMrW8HLMPMBdFeuFhrrhDnoxZwbnmXE9B1YHH4YwdhVBEHPrRvzLy8qWcbrgognMsL4qyFj",
  "key2": "4CgKR2Wxi4cdMK5KQedsuYtQ9ZFbogXQz1tsdRYrQuhaiG9xVBda2yo3TEZpDCgGpmLWQjRz6QWUxgkMzxHF4toZ",
  "key3": "2e4KJp8jzvTkQaynNgp4F8SiMcbjcke9xmwUoqk8dJXR2FPnktKFYL8ADaGB3isudU6h1Lacz2Khf7f6wEgZg9L8",
  "key4": "5JMJWn2NcqGb9BqwNT7DLuUagaJfJL51pLMVXRDEYZA9nR2L2FBjEAJXoY82RtYXwF8tqE17Z8otkrvkBpCRsWzv",
  "key5": "4szK2UXaxXxJBAwp4FcimjkmRK1M3NLxmrq27D9cx5w2RYhJenFqrM9aZud96zBbCvpA7TXqodZASKGNn5fkxVsn",
  "key6": "aHUqG1wQAZERMDDQGSDdgpXUVNdvKdHsLSWZDKBs2ZexDwruxSj2JJp4yG5KYgcmwUmYzAa3EAQUopBuprZurjj",
  "key7": "4ZZ8ajYcc9YRh5SvfRjVRnkfz1fwg4m4LA47Cu7fgZE9Zgn3ji2NcTAnrVAsw5gSfGwW9etbpADjNgp4JMgJ4Ez9",
  "key8": "5VvmoKfZBY6xgWz4iUaDNZQmRXpk95KMftxh1cbo1Q7enBmBCGhbnnLaAyzY6Xr9ofgCfV5HM3upgKLsqwy4Phuq",
  "key9": "4Frsp9gKCuXrQMheZKg48Eb1kXyocisgY1bcSSY8mwpx9NmFBkUxQU9RXqU6McXPZBp8D6oPKTo4HJAtnG2M95gs",
  "key10": "4nkVHVGbHjay7EybLZ98P3wcbxoPDSvVQLTuCfDc7eTTUSRK5wvSr5857xrReJas43fCqy3Vt8hWvv7M5AfAGtjH",
  "key11": "5rSvhW143YsUY9uoaL4q7at46fkBNSSSwHsWZKHceR7DC7JRv1f2gqLsgK2TgTizyPjmDoReDBGRvK2fTtQNBiyF",
  "key12": "3WT5Lh8qHL3WoQ4aMdPV2fctmj9QC6Bzf9Kdac8YztBcqoy1K7YyfU3s941nDRZYBXn9FacomEyTUzqKiMeyJqvt",
  "key13": "5VJmmPHgW1S4SbWGwpJjVoytSEDcAmAh8YWC9RNPWAevE6Thy947mahWeWLK22kBV3UoVK4xBiPXNMpQVjQmqpkg",
  "key14": "3nTBqsoACCt7fu3cd7JvcCHZXufxGjwqgi8HcMPFMY5mJmkFkdQTzHWQFTnrAExru8U7kNZqTZGiDt9JKCSHtyHq",
  "key15": "3zpEfPAou9qat5wTdTxDvPnrf8SSaqqb8MbecaWTCC5e7a6mD7nXZMCY1EoYW3h18BBoGpJRZjTfW3FGmJZSnnTq",
  "key16": "9Yhd9DUqXjMCBNHH9oYAp9qSkNetafdGsUdFnfL5MAoSPHcmeUsdMDmYmb9CL5QJCj1qPa9rh5fXQNBCxabcrph",
  "key17": "51m7jQgWKQ5kEYp4t4y2ELT72PofSCi6k2RHS2F4dh7eetKJhun7m1CojFnwtedHHd9RrYwv2CA9dYrCg87Qd7bv",
  "key18": "hwAhty4p6r6TNiHURGvvV4VWxmzYnAMNW82KbSyeBFQtsgYk2jgatP5ycptDNL6zpshNwWCGd6mdHchjpXURx4x",
  "key19": "3ENLHoSy7Lo2ot5JiZr7reyHqwkgZMGcYe7DB5AR1Jey8tgLX73VXRCLaEDGEme2mjPHvzbjqGW5hTg3QFrfqhGY",
  "key20": "2qdFctFJ7pkF8a4LwDDm7ruPsBqvH5GdrCrPG7a7Dg5QTRVwSEBqH3KPFVhntxdB31tc22NWp951KsUpGzNLAJgv",
  "key21": "3Rrpi5mhG6EK1QhoSbqWnotoPdENsQjrLcFqKMgNTY6B2KETqK6z1M7txdGbyD7zUnigN55rLLY8GmENmvD36ZJ7",
  "key22": "2L12getZrKGAaShrvgxaJKHH76UUxG6W1vNgXkNtK4U1f7t6idAJc87kD6W7XMAG8SbD17LMy37Mmdgm7vFnm9cb",
  "key23": "HkEuusVzwYnZwuqqkCDb5kQnt9pFNLEDBHgX1iGiQAZTxV7hBaagq8xnxAKE7pwiKTMLC2QKVJBF75MusvP1pZr",
  "key24": "27a8KfXGnhVMfVRjTdsLhKxaaLSAmJenChss4WYoTV8vf5g1HGx3t7b2zN38TtbfeDRZdeN3R6oQa3TpMbxe9aDS",
  "key25": "4ssChpbCNY7JAGgZkbjp4hLQ9PQm3tr73ys88wDenZertu7yxa91GQLW2F3Yy6mzTSsmNcGXqjcfsyn1QBUtuYsx",
  "key26": "4BGohmqa4M2ad6MMpnJGQjtZUwq6zaJtBWHyeXhq6NGkQEYEqbTmqsSzNZvHbVSdgdDSrDd5CdqAoUgTpxGYKsN9",
  "key27": "2zHXKPJGnxi55hRcQeqjFJuzDh7zmFrn8VPFux66dPjgSbvodw1v5AFtCQ3phZCjSosrAWqeHXR7MqLPd2f4AXwi",
  "key28": "2swYCVX2qrUirrHhjGyJ8B6GfMkM9wZmCNBWGUWTbBSbD9bR8cJ4bmBPbynfozMKM1HJ6aKSan5i35ecHjnUU84S",
  "key29": "4NSyszpRNMucNCu7ioDSHHvEtWco4TUsc65HGT765Gb7Mm31y1Fu9HR7D5SxSgCzf3rPo2f3Xhe6osH521U2J12C",
  "key30": "4PMQnAtegDPzDzi6TwwF3mWAnutx1DFQbtrMNexrLYLwLwtsfZf19aonqdpAerjc4gVsxasozCEbg7gYcgJECPW",
  "key31": "5t5veEH2Q8uq9oFMpHDn7tMn1MFGxzxZD3FHzMHwHM2j5y8w14zxysG785f1uVA642WHw9zHnkEV2t5j3P12qTYW",
  "key32": "2D1N3p19qY6D21JjbBmWgutnGZwYGfx2Qr8MuBmW8qsu2R8Jaegnc8NtKRYFraQV8DSYJe8Jy76fTp4Q7R7BUQEp",
  "key33": "4849ppiUs2ZJ6SgU2Ui9WYJaZYNGdgbzNk4A1WDFsxpNju71ieMZaJmfqM1T9YqvgTbxJfQ4GKvHEbJvqDg64TNW",
  "key34": "5KhS6dbfcJ4K8PgiiESJmiBP84oxJeSVyd1eYofFeGwoxrUJKmVQD9S1ckgsNUyMgLvycDNZGZEpiHEGkEgiTivW",
  "key35": "2fQcFFDgjYsUaimxvgdVs5LLdPHD6U9VBFMYZVBf38xGFvQhzga7JAtwSMw5ChZc9stDi7X1Dx5be5K8WC4xfZ6U",
  "key36": "2Y2WHn5qiRNYKHjPcQeKjQdART4wxPwkH5KefDSs7aJuDeK7SUaRV8HYj697mLnbCMvvq99pfs8duCciLgMNLnUB"
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
