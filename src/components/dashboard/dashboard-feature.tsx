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
    "WptUJFYxAfCRzKSWswb5tjG6pwx1aUGj7Ai9sqT4KXubPLUmQvEu3ofhZqynywkxjWZiAQiGo26dwGtw8iJsqqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fh4dFKRQUCXHZHxUyGTfi4QH3xDoDJMSHtiEXg8fyukSJtjyqbNAg6iHoJSon76y1sVDa6UDELgWAeaCEMQovbA",
  "key1": "4EvP97M1ehgYoKM7iA6nnUrav3hhXetChsHzBsUEc21umc8oBwAaYZ7xo9fGyJoTb58V4iDh4TyL6JmHgx31ZjB8",
  "key2": "ZioEiWbgAWNj6BEPjTLo3xMJScQyeoeoBjhd7PGwb9pKuK5vmXmX7otjppXatCit3yEgjDksWeHSftvsT74NK7C",
  "key3": "zJWEBcV6TK5Z69VbikvP6HbonohJbLMk67SufM6cDio7a3BSGNxijxGA9vF58BAsjcbPxgKKXQvFY9wB4bLza5n",
  "key4": "2TkXenWQkgAJTwgqcWfgMaiXncsmvuYL2yDovqVN53uHXTGTSAaBbhyQ3iSZWrrMHPdjHWuLLhdWB8LALgQMfk2r",
  "key5": "23C4ZkyTArJz4eP98U7wdGkNFwgoWawzDy4nMMBTxYiMBaZ11gMeWeswRzP45j4hbaRQeASQguiUy89EsNAmDbFk",
  "key6": "huTDrpkVT4Va9nKvQD9Jfsm5PcFv1yqAPNsCHkKAxKchTro7SgP52gQ89ergQttEp1Pv6Ajgag5KGm6jMZo4XnQ",
  "key7": "563wJ8UUg9jDFZrr8Z1cMxECtcEBQ3pxnBgW8vYpqJAAMtL3bG5mwkw6APQkZ3PamE21BaRA3tQopGgW7foo3WM6",
  "key8": "NrwMigi8wSQBVaWTwbySw5sQr72uZnhep1XZHw3GhVAZfj9MUexVCn5eTgejjfXw627uSzKZts5STCBF16oDXAT",
  "key9": "WgkUvC6Z9HBiQUGKHD5hNw62fHmTyg7595A9ovonMEXgvMVN2qvZswdgsZfqgbfs17Ms39tZkresTmkvySUdTYf",
  "key10": "5hcp9enmybDZJA6awabActNGUT5zG2ikek9VbGSE8nqqJ4CUDLfud2t4G9ESdZJGvze87stShVHYcEkcB2nsRRdu",
  "key11": "sSxaHzacqDBpqB7Pg2yhbckh2j6exJ6ruG5zmCJ6Wd3zonTGq9e3b1EXauYxHkan24fRu7YV4fgLvd5y4xqNeSP",
  "key12": "3W1GCMpVKWnnKKihwcCpv7V6AY81vHaEXKw3XdrR5rT3fnXyex79ZwyhhexsoBPMug8JKfR77MxHCQYAxseyL2HW",
  "key13": "6QTysbdzBrgvDfzQ35nEt3Y1FYV7Qvs31YnzR5ULvBFLGpEf5mmM1wUZYvJHxSWGPv9skYBgusKjud3fy6LNj2j",
  "key14": "2qHRM4dZxJkwcKUM4qgy6MM5eNJCU49crJSBR1p8kZcWzdMUnoX1okP1GdcxiJzkHpYTRTrCPoEYJya6GL7cGKxb",
  "key15": "AQBiiMEuzJNdJi3dsAtibkrJRNytZQiYJfSrDNxxU2m9uBXJ5MVhPvf2yuFwEMsNM1YicRsAndFVyebSwLK1Uwq",
  "key16": "3FEczxbF8eR6TH4hwTbAyQnoQa2FRi7HgrzuRvMqn532tGQPFeA4PbwJ35gN3bAavtdPqUFT1ezP92xY39jFsEyD",
  "key17": "3a8niG4QrNvBP5fvHYs283svJb3F342BTHbSKibFhBCDTdmJpvrou93S6R5tjpuSFpfGmmytfeoAeHHzU62zW4Lg",
  "key18": "3UaJwvztdbDLkHZhVYsQgETYvaasPseiEydWwt6k8XeJKAvi7Db9nv6G4hG4ZackuhzRQe2u54vptQQi1MfiuzCa",
  "key19": "21JVUGYhPuoK7RdW1M1qvWeB5p4UJjq5S1oAZmWm2XC58gxaar6LfyShrSbShyLRgHgL3SDYWYgcXJdMJ5VDoiGk",
  "key20": "5SaxWhyjZuaX1xDLWuqBBeN8zREnAqKu7e1KpugeZAHxwVKkpduhzdbxdwUBNtEFsduPwTN7xkNRB2YwqRh86KBR",
  "key21": "2aegA95NwfALgXKhRPewVviYbJ15pNkGejd8tYPoXMTf1v87qt8jkEmzbfrNiCWiSpyEhmFVcEjbfZSH5ifRpuJw",
  "key22": "2bcaaf2cMKG1LASBbJDNWyKsnfioG1eiy8aQgkBA3eapFQESDXqPyAe7q11T66eVkWLzA1sk822rLf2SEBTrZPZr",
  "key23": "3o2GpDa7j1pzQLZPFPkBtUx71urNZbpqi4DM7cgkZ3EU5Rm8PKDHPTAitm8aZwcAaZ3BWuzZCQt7hNQ4RS1HVpvx",
  "key24": "5jYqzJMsJLmvSmV7JLpFonrZC1E3RBRna33hp6R4uuB2ADL7jstoE4QYoLB4iwVQsVbn4DMqHjU2d5eDW4ZF3Gp9",
  "key25": "5fruRa1Zn3zpMCfFwPtGF8aKs69b7dHGofqCrbv3CD58QC7vJYXdvcQW6u4gTyDPwnAzxzvuAhNGwMwgNWzxydpN",
  "key26": "2s8JSWqFT6o3Q9pRMAfcvPjeVjz5DNtbXyG16em9PeFbZmk2Y3njZ25rtWPi2EEM3WRn9cMpG6RHT6XJdq9CpwNx",
  "key27": "2kttfwmBB4RhwiiHhLWXFPUeeDLAuyQvT6EMCHV8auLuphu9Ee8KtwTr9wezHju5H8ECUieEewUDpH5851ZmkCe4",
  "key28": "29fYcizZrT5ZvnzaD4VTRaSYUANFkoCfKLBtV9nEGoHJpCtGcJ34QJr7CtNnzachPHShVEdBkoBgBC231cB9Aqvo",
  "key29": "3oUbNHJSJamYHjxNnGxgsjybLotqsReSZLmPmAQqsDPGzQfcbPNTjycxjNaX7caVfaWtMxKPD66UsmUBL9eK6Gd5",
  "key30": "SeFP3U3sHV2rSidABUxjgJ8ewD9YuzZNzWJe3wHDRK11aE9n3eGJYavsqHCuaQVuw4LUjKEa5j3qjpXtVRyac8E",
  "key31": "4zEx9HnER8J89Zjaw3oKZzgyWhmjCMvVSH7WzHZJdzhCfyQ7rtJK4Lwvsv5Un4SBa643dmps7ef61fUex2CgYRq9",
  "key32": "HVk2nydi7dsGX2dk5pQdZruLttimhDR4UHTmEJb6Kq8chGr1qJtG99d4AwEhAB4BrCahDgDKqFzLjG2ewKd5186",
  "key33": "2UyPwrCsr92e99e5KnWWgxe6igwNVS5yYDAeSfPNqYXqn3m9x1M9d84Z6btCYHoYJesxfgNU4GbjYKFLCht5VoER",
  "key34": "5Rw4iYxa6o6oLznrMMj4nQ4PEXGquVLrYWjZNCUAxPsbzbwEkj7HLcLCQKUwpwHaqKgkwyACtDLDo3ZWEAifFoY7",
  "key35": "4gvHpQGqcDMLc5xcuRtnHoK5Njc1FneKhqAgqyCP8AvUT4ir5BWs28z66DgCFiGtsSQyvp6Q6r9BXfgTaMADpzNq",
  "key36": "3x2X1PEYoK8YBcRCjKt5rBvbQX8ASuyQF1ykjjvXicLFWquLvDURtufW3EqwfJKfETtRkJdm1XX21cAbXTj232sN",
  "key37": "57rg9qibixTLyny1Xe2JsviqvucW6kw81v8ERm1UVUGes1buDdg1vLHsngvxQzaHKP9TUGAEKWp4meGnprbPiFww",
  "key38": "5F2phgx4Anii8Abn615aJ4jjw4PLKew1trRmdz7JqWtx5KQ3U6VYc95NC6M4GPB2p8HBFs1YQQPoVRSuMzn3M1c7",
  "key39": "srj9R8LCCv7bgyNe2vS73tBrGSwepou6TEnK5duP7ZRG2CHqKvcDejpMkT4SLBX1BCyw8FCBfL5YNuXnxp4ttVN",
  "key40": "SjzTcJQrL1kkWkqNaKjFdrjYpjSBdQDubDbbUQWobxbPHGq7m1TPtZh7yXwr2QPdgSc4L5Abejfxi7s7gXhuUPP",
  "key41": "5NaQpWYGcjF4g4EA54hCXrzvti37jZhKJ4dSnmUCAqm7RaJAZmPtnfzBAizyWvtrz1vSrrGjmYS3M8MvbtZxt11V",
  "key42": "2nSdVCGfHjDboqMt6oXaW3zUHPnyhEB6puKEtfELPfRHkNecS5xvWkqRXGg8owXiEQVExiyse8kukWXT6J6f1zoQ",
  "key43": "GEJga8bwuV29WnbCMhZB9WjbyN3AR7QntyzAiHRT5HQd7aEo3JaYLQbPnvGqjhZksAvX2Q89QgC6SBpvEKQwXxo"
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
