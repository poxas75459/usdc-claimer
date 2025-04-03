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
    "5qAVfo5nAgAWNedUYovH3ooU2jMziKuFg3emEdrZabZtDY74jrfCa1vh6f11nWWpad6t8Lbdt7yvTk1Aqqe3DQhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eyfQtrZxqJCRqjzKFsXQNLhpdGsTzF9KenEncjAfs7AVX8K7pF3zjfDhSUh8URU1hSycMgxBVPDWHmy1G5RNAkb",
  "key1": "YsT8YNxYqxWd6paXxoPYaKeGeYf3FNZbr4xkAZi8RE4oVpgYy6BwcYcq9NtyAUAMqgQmw8M6wqrq1Ho6QzcoUXR",
  "key2": "5nfRCsuUX2HDP6V6ChHQXyeTuiV7zswsQa68zxzC5GKPXKC4ycC4j2dH3vaGnxv32QDLA8FhiTSCW3QUERKmPz1K",
  "key3": "46xUkxmqU5dzYYbo48xmAmVi81h78auXegB8C6CvuEwPPKi5jkBDi8mpKhmLrkDbWxccRSYS9TPkCyXiMGquHjE2",
  "key4": "eFNK1SB2GaNgAfeZxJCWDizisgcMuo9cQMYfujNA5tgCKtVWod7y2iNNpY5tEapcfFRPKqQsKFjG4paQ8H1Rxut",
  "key5": "57KiiFfWHkbH2VmZno7gmZigBzugG167vuVJR3uX4yhbhJvLcN9qj8UBD3qkaTdecZT2bEe1MUUdV7Hhy8Gw8vJ",
  "key6": "5rA1JPFZqXb49MZjP37qdPPBLcqf8AtrAAWjsHzSMVpn5xYBJcBKNw48xx2JkWhqYj4FVVbixJ15uu1GQzXy3sAA",
  "key7": "esoJtthEY1dL7AfmdPES2u8TUNgsPaFQ2cosKyy9oHfTwdLYHbY3LK8r5Y9dkN3wJMYhcsac4BUPWnotzpf26ti",
  "key8": "3pULV15m1J1RczZVqc9FQLQC3D3ViPGVJeQLC2zd2oGtM11cBtQCATcdtXEzurSwtW1fcNTD51X89LjsaMzgrEUh",
  "key9": "3ELumK5QSLkucWaz19jYx6Sduv3JLQQQDmvDqxRr24wTnD6z4ePkq6obhF7LQJYDLxSa6wmAFj1eAht4c72LTPZR",
  "key10": "5rExcjbQn4Bi95F9wCrfyP2AvAZEBnGMpdErmA2kpR2QydEBUCxq2dKok5vfkFF6J9CR2dexatmW5jVW2LxPgKyo",
  "key11": "2ZGo9LVDnJr5L7WqvkPS2HY4nntq1xSQyt25wM74UTJgmhQjDgLy8s9cAm6A6Ysqf8kj2zaGju3DqgPWaf3gVHeJ",
  "key12": "e5CatthtrPVp5sA48Xo3jGmWNEtnEvEBpqopy7T9VuX1q3L8eG3djixXoNfDSVAV9a82KR2mutaw4kDA1qg9fUn",
  "key13": "55w7TzBhKZ1z3tihTErxEtK6GzYDLb8xDWCpCvc9CUbHfeDvAKSCyk8TRHZvS1SkdzHNREMrgF8WNBq4Xmm27QiX",
  "key14": "5qWkkftEbkxvX15XuWndNwPYaKPeQ9PTNoaCfqizCzEK2SD4iHsA68DnEod9roh2dM3oAAboR9rJyZNFokQ9TotP",
  "key15": "4cif7nDUvdtYaMyjZwfPoRZH1LA28FKNHnt6Bxjnrn2FnWk46A4m5KkNgt82trHm6JFVVzgkGSuFg3i7QVnEE6Fa",
  "key16": "5b5B8x6Lf41Xz2idWjVBmAHab1KjgSS8qcMZAdSc7RJdkSzbRZym4kLaFMc8s8iK9GkDXff9zsq1nJrBt32nC1A6",
  "key17": "4vP9BcTjugsKuKe8xgERLiKkKs53sA2yapN6t9t8cb2Z5WtufPLgMehN47XRa98XXGbcaUuyYzKSd8rSmD91Ndgx",
  "key18": "42KUqcdYRqWRdKn4SxrJ3KkUTDCuWgAfP3Bwj5jRCq2KyWkD2RAw2P8jbZSUeTC8kdy7rqf8vw7EyZhi4jcvEBzp",
  "key19": "4SAHeUfAEczL9NA4oqKu2sJ1P8wHAJ1Tvfxw9PWUHxUrbG6ugJgYy9dxUJVKpajcZWmoWn5Ne4d3UpSv9hYuKATb",
  "key20": "5CwjURGg6uCrNftStZJDwfQoLCeF3i3FHHpL8XhRYqrGnARv9EYmyj3eAFy7j1wvi3PqHd8fgBi2bsNN2H57mwjW",
  "key21": "29hB7oRj557RdJF4pTMuBdh4pghBaWG6B6E3BvPdQB5r44HhYMVhHGPojfCU4yUyC7yCA7ThtwnDYjHF2esNGCm7",
  "key22": "4EBdU9mVQdYZVpuv8Tg1HF22JmjxGnoT8SRMr4bc7tGpDpD9W8zSoFeXkcAGfo7wNAYFdrwHGkm1ALu9ModVxEqq",
  "key23": "4rCB4BPNf1LvL3jK7wjodAjwAFq9c6AUZiyPRZKYQvnn4mS3gQBisMQp1SAx9zoNm2Sow1qPGZv7jWNS8TwnHdak",
  "key24": "5xHjvLme1nUirZA5nQT9hGFNtVEiJ6DdxMhdWr3GH8ytgTM6QyaFUVc6Wg11qjuhv6tcBTTWgoXU7Ed2Vtn9XWpo",
  "key25": "5nGuBJ7qmdEaQCE2SxuKyKbg15dZbpZCaZ2x41QHXwNAaQZo5i8YUqZfiSZWpnviFtig7HHFu6EtVZv64ciEZ9Lq",
  "key26": "4ozNuPVx4haQMEYvAEn31pnFwaZrpgWkbvftZLwNKuV8JBrRzJ2MLH4CaFzyekbPu59uf1wQr7zVkpY1SBAPbA9G",
  "key27": "2UZcRc8GNRPtcrBkgzyeQ3ZdQEecY2VK9b4U8WMxtHYTJJJGqfMvKMUSiJjdBpMxKw4292oFtJ8msCsgLQkubu5q",
  "key28": "4rqcGV5uDKhGcFPJVfZ3eZ1hAar9bf43uE9zFaU4baH4xa8oez1djzngSDuckaQxrG9mL3u1J89iJjEKqtMjK2Tn",
  "key29": "WLFdXH4VpuubbeNtJSc4etqne6ffDA15YKdWLsiGseZ1eMYbRrt8MVigGWDD9qT4wdTLgBnSyT22RRv9vYL2oFt",
  "key30": "4tpUrmcbuK5GHtiTTFeLByZdsC1VUAxo5yR623r85Y8HeH2p6a5zSNJWXusaKaAZaNqJ1AazWGTTYk1osnuY8v7C",
  "key31": "GSyFDAYfUp6X7is5asYjkBHZP5XBq2eRMr4Ri9dXWAEoJWPN3yWLiUEMKSFVfKbQ6WHhir1ivXRU9ByemjMeLZU",
  "key32": "2x59akUhd6jcGj6qVYqZPKT7H1tmoCx6q7aQWGPYzprWY3egpeXPvfWWazKGg5TbzUER3ufHTVizQuKiRtQmGuUX",
  "key33": "3hknLgugmynBxmp7vKPLqd2JM9ZAV8UUNrtbz4ukpQqcvMoZ5meewwyJcCzfcbZGJMK5MaWLvyHPeQ5zsYXV49DF",
  "key34": "4aTPDXVWw8XREGqqGMiuQxvXY4AqHS5Zf6Rob7iRKqn3WHwgpWFcgWjuBuo5NdhD4qFrDsi8Leya2mXmAkqTVvQK",
  "key35": "5J9o8Y5VSuM68tzmwsuqjTWqNzr2qHEncfb6yh1aWHMmdtc5xWJJA8QadgPfGQdGh4fFbsfyodEAZFt9yiM3YQmZ",
  "key36": "wP1M7UJY6i6TygWj2DHEYBWB9BmUQFLnRm4pDccNy6C8PMdPwTXvS33zcbPqpPUwcUec9iwW1sJWzQLcBjVa6Zq",
  "key37": "bjJ6FjoCoHbu4TMFXkhnkV2DXYN9pkCEshRXKoLH2XaiscsAiPdiTpofYxe54QYjHs4gLoYTz52UZUuNWeU37yD",
  "key38": "45SkurdGJcNWYVp1xQ3zG5GNSV9bpuN4upEpBEdKLZpUitFYQ3m4aKuDvr6WfS9YebKxAbUadD4cKmWcH6Czk7ys",
  "key39": "36tvrQVmpktUjFPdz75Gu9KRRSxkfsLNhsqSTYz9uQbtYgmLu7EXRUbjafmWdzmQGXtRhHCpLLjC28WDfcBcAcYY",
  "key40": "33KJV5Zr1ahKczjpgkeF2XiTzpgvbjgTbdvst5aUDVgwbkZZv36GbqLLTwvkV89qeznt8qeGhRPGAHWVGVXKhj8S",
  "key41": "25AoQhdiXLcS2hUbqG3ZfPCwwtbiGVP1yYwB5yZnAzuSqk6u4c16Cfnwhd5ADb3sG7SXoJyJS6MsTcG1VAigJjxB",
  "key42": "nXfEuQxxT97wQ8btxPm7A645SYzTU43Cqt9XMuXJPc4Mjcp71bk8v8LdKTA8njeuTdG1C5nZM7is8Mx8UhZsTc8"
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
