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
    "eucXB7RwbiwabBAvz8MvfLzsmzx3iA9hd8HkKrMMxrU77NPnvkpmtedATbQysXx2uff3qr5gtq5xX2Uy8HDcdRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKJpAUE117kG4CASQrH7RAB5jLxtfDUmt1kVWYnww9nEmXSP1DnAYKLN1sYbxRk62wWb49KpnbJrrJkv5QkufyS",
  "key1": "26MHHkyRKiB6MeiLDE16VhdxRz3nB7DcEByP3bEzqyXfGRj4V1obmA7E6h5MwEwVesM7UxKcwLkUDiyNn9dXMUr1",
  "key2": "2pA46c71WkfRZKFajDTRPiQzJoTC3qV5jJ77PXowTqjFntrpugob3hW6Yr9i24GhJhJjayxDw1ZboaUbdSM7rGST",
  "key3": "2N72hvmxPzmQt9TV5Mn9UuSjKprBn1Vi53YGczuSAr5coinBHSJJwRNPeaeSnFDB79HEK5viSjJkNNGBrzqk3aez",
  "key4": "5bnJ7Qhfx85FCZms7V8dzUT3dxL5gDfWfEdDWSSv588Q8DbFSzeMWpsmwVyezEfRahNUtf61nH95gv9SGNHMyRHr",
  "key5": "3iR3WzDRexizzNfNcC8xMY79f2is4fSpTKnybABykJkZw24brW1wKiHoQLr6bvdNWhTyEPtqdVraU5jsqEB3KWYF",
  "key6": "52KLwgvU8NXoyjv8XXPB4ZCFGF64BGpaYTB6ULvCuxZVDyiNK1kyoycwZUHRHrvgaBePmEmJhmV9N5rQoASTy5aV",
  "key7": "4SjX7L1GQNiQz5Q7Ap4XhY6GQhduvNpoBzocPgQGdnGYeAeBJ1EkNMGVqaBFh9U4X5s9Sbo3wgUcTSpMaNqQ3Bwr",
  "key8": "4knrFE5orHeKRBGdRgyDinmQ6WqXowLNUu2bF4uCuXUjJaoEkgo6axf6deQN4UTwRYGVrdH1RQ5W8K7jk7DKZRsY",
  "key9": "3PmCK553JyLgrmBscakQp6KPAkKnAimgjittaWsyHkuZtPXZzqwBeuArhWW6eeuXpPctixYo8UA5Hn8S4jDr3m4U",
  "key10": "xaneJ8AqBDoMqKWoQjgQrdqjLxcTdpSWf5heDXLjsWhbYiLN7x8KdKgciP2SkC1YLYr4aEsXmX23obmoKoiXH5m",
  "key11": "3z4FhUHn3FdRqGtW2RWcvmrPuiM2ek5BiatG9AVas4LW3bNNgS3rQTPFdtEtRKKxGYkg1MtqAeuSYHLsm2SLTZ3h",
  "key12": "4osASrYZE3qnbE9HDcx8SJ4RALAcWR6XSzFNmGDa4Pmpsm3FEiBuT24V5W6uAtrR2V4Fb5K5H654RsrnKMGTZGHf",
  "key13": "3HzMTdgteKEKevPZDq942z78iXZtPL4CzbWxB5KfUid4enmNhQyh7BoAFjqV5V5J7R9G9zRi5frNZ2JmtqCeBBVU",
  "key14": "KgBmFEAZefURhGLzbZK1bKWjg9g9wi8x7AYWVsqGV5fEucHGWJzgG4Pk6zDayp37f3LLNF4MELnJ5t3NDqAuujx",
  "key15": "52AkBNFNis3nhUvSeDe7XawnWfH2CAX98t4QJF4Cbs8wcS6QtCoGXjvETRghGQxEF3wSthen8APm6g4hQoo5bqPQ",
  "key16": "47n37h6hugaooWGHex4EWighPzLzLC1TaWo9k693HPoem6HDcjdut3pAHz96ELdnPFpbQKSYKNJjpU21XXtJMzN3",
  "key17": "3BSyeKUJwTejYV47saCf3gL7iTi2pJHugT1KYCZ1RBUoNhRBhTGGK4AgXqvxeUgTiGwcc4APG567LhGqoA5AomuP",
  "key18": "3o8DvSCd1LYuYe1DP1ZkpSjroGgNnCCgiqERniUArUbCgizH65UuTXSWrTjGRPHz1uf59B3tuXFEvhs7CJSJqeXp",
  "key19": "5QyUL5XMuXWJFNMVVc97ySApzvzPWmfhQShGSdPyQXf2PwzbmqXzQZtmbJYVY4Ee47SfBvdbGkgQqH7gPX9FuiiN",
  "key20": "P5pwzAohZ3MqEqRVYGCX998ttL6qCMSAffyC1Zu2CJKRd4M57ywcSLS41YPSFQXsb5jxSwEqfiKo91RUu4p1CAt",
  "key21": "4PRByPKMCKtm4Memycg6UWD7iQNjVDyrPD98tTApYdCzYo647rDZsDVbtiSgQAuw43fiyqgmPND2oAwZ9SdVL7NM",
  "key22": "4KEeSC6TfFxwVE9bQSZcZhSKaUJAraCs4MLtJCYBBG31Yu8jwaeQWF4WNoB4tx7SKmpDKkwH6gw3Xan5HkT76VxC",
  "key23": "Rrv3NKxU96Rzt4QMTuQPgzCMc3STLwr3f854tAod3DxwsWGJvecusLQQpEpp9Tvx3Rfx39iJDztv8xFHNMBVaFu",
  "key24": "5yUtKuZUTtoBL3vgrrHpKvDJtwHG6znryYHw7LVeMNLUEubeyQoTJSaE9uQnvxDekfpAJdZrkcADgWmxjG8zXooS",
  "key25": "43yYFmbGM6jbrpw5Xbe6b7ChNw5WdJro5BJYgNE7BGCDaoo2BbG5YU7Wr7UNHEQheWuw3j9T9rPE6c4fnzsWTGBJ",
  "key26": "2Zmno3efbEi5AUq5LFYbmyhB2rd5bZjeaF99qSu29nwRxFJasuUN9iGF3nvhqmdoVik9xUUvGTLhAPQDMd14P6QA",
  "key27": "3fpLumrBNytaEgZUdUXkjAcdywE3CDVpiurChjb778KWozFfLaEsuKUgMEDyPG8JX8ciwH4m7KP6tiySuiGnspMW",
  "key28": "2tPeLUkYFUobL3Fcqq8WisusrnHamq6MWJGNsuyaHCZTsA4ZDVuTzEmjrdCpoE12RmFbMFhCphGJKc86hoAPkEu5",
  "key29": "2grbGmKbQigscYtFqUWH7EqzrczwicS9yvF8WH4CAYuVweN5vF3TTSQbH7uuH6S9NGRZENMvB9Q4qSBSNRf6YB51",
  "key30": "4JqnTozCJxWevGrohfdvL6ESdxarHVpa1vHK6t47hLRVYR7tSgVqGGzxTS2MZzMT84h293FmyLtWFMABx34ZQwGe",
  "key31": "38FXpWB9K9c2roPMTqkokPqtzXppqn5zUwApRMVsd1eUJVai3279fqK9PCPfhqE3ZnMpXPWTtBTwSkuwKQS9494T",
  "key32": "wjcyeBw7aSohrt9k82aTHWVNxbBPD2nVgpbEnDSVnpfGjK8VxPphWmuB7Cj7v68tbb25pnoawVDRtYHzakfUBYq",
  "key33": "5uPqyftE8ibzCTmaNk7YYhca6tnYExy8mJ7z1Q9NZarmaBw5dtNqkS7f7jzzhCdhqDFgWFevJGYzGaYLMhL4p498",
  "key34": "2BA8P3iZiw7Ra7BE6RHzy3LHjqh7b7pXditCB76WXfCMivkxPUvaYrkTX61HZAYUbHZkdXH7MznNL6p7dd4kCxCH",
  "key35": "3SayEgiKR3SG3KE4JaRiJMoQQrMmx4JMBBcVHR3tXzk9k5tVRnZap7qpVtMmwXrK3yiT1ZZYBE1gqyvt6DnMezTQ",
  "key36": "4dRG4u16bJhEmUwfyaaHQbbLLK6TNHcvVHe6kr7n8q7vAK2JTy9U3ZfkgQGauGaN8D7tkYGCz8UEhDP1f6fnZMQm",
  "key37": "dWmYkPxu7kVQRMUcNdCpDCeGK1BBwWEP9wUPicfWh8eEWK3Pqeafjafkv2gh5afmh7DLemKjE35bQcAfDzs1oii",
  "key38": "3CTkaRWjdbkrCQDZH4sHewJfJbfsKrg9ewL7iyf3rsiFRV8HiX6knRR9GmEZeY54ZcV7my69dMMpnf5kBGNFbSEn",
  "key39": "3yVGZu9qb1K1VTa1KM9ZzqvnwghVpLbPY5vWRLMuZMmJN7q5YuejxykBJg1Vr6QvbRBDFWV6z1KTYiK4CsCbDWJV",
  "key40": "32iYX46iAgrJrRELAfLeggD7jCUr75Pf4NexKVUQpgZxtXyeJV4UUTgSiAsgXSoU62AMxA5yUC7x3HxRcFLoJSUw",
  "key41": "4EAneumibe8UNHNwXKzJKsYFG76Sj2Fe23CdmWuizi1LhX2zTKFrmB7g7pahyxBeZV7e9agUPxDcz7UD3vjFkp9Y"
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
