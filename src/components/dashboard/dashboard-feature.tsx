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
    "qbX7PfxPWKo4bBHSxNovUJPeaAU6cUtEeEVcM86Jmc6dzgcQ2xL33B2WpxixbDq7sep3GoEM114z8niFFnHWQT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jiGrTPqDzQZQLVtX9yEQ7NFWBCVmMRpSU3YHL4VfnGm2PTUvGauFsjyyQqfSffVA7DrsUu2FdLdejwi9Si39T6q",
  "key1": "4h1W97VB9w1pbH1iv3zdixLk1cfjrhSJ5EAiF4g9u5NH64fGz2oac5hpoM9cdHHvGxEBeURMm3EqTSjjZ644Tjcz",
  "key2": "wBhFScuRHyXMXzLYj7Ps6eAwSFvazY9oMsxMNrB9R8wiNTsAJaXJsd92qjUaMet7DfiZvkrytMdE74WbYSp7Dzp",
  "key3": "haSZUfUatmxWvYgp3i4iT58jMJZbj4qqjYFmWfsf4oshNumMdZPMoPYkGJVVCKY62empC1ykYcqrjPmvWvgJxh4",
  "key4": "3AcqYXN6jcWiVrfzvDQQobg4JLaWHuuohnt2MmU3JFFxEpgUSxgz92oTGgHkpZPDUrMFbhP62AehoH8wsr19vY8H",
  "key5": "2NVFBiiwsHSJvL9UuHBLKvFUFGyHCxx3N75G7fiCQcLbb5Ms2Z6TwBHQCZQfyX41kizyZaEL2nnCPpkzmdSw4QHj",
  "key6": "5g74zJKQPazf7NSYei1GtWV12pVS9HAMiBXU9ts9LeMZHEH2dAUuvo936ZLJVmdMrKAMN2ztaB49te1sgWAypc7z",
  "key7": "3ESAfPaGegp3tWjPqxi4XCrwWm4n62MXEYnwX1Ua1Bp1vqn1WdWqgQx1V6eZxF38Qwg2GyQkJB2QCKEJt17CVxxT",
  "key8": "5gAtC6YG76N1a7sBeQgoihtR8tXXzGhhGbscPahXLfZktreff2HjiwGp3iGfVuW2yafXh9cYbtBfo6YXQoRvBSTD",
  "key9": "4mWZsQr3Pi8N12mopUHGf2F4qBv5LVKvZQUrtRZFas1nK2dHGdtv6brFNFs5ZakXwkQU4PhzghZesKKPJeJoHtiE",
  "key10": "53AzBLCFkcfD5gRA4kPBBfCmY9yMrKspzwADXix1zrn61ds5aFP5xXWjZAMUhCEv4zUWMCAJKMKH4981poc3ALSn",
  "key11": "2Dj8urok1C3R4yaonFW9GwcCg5B84ipFUfm8QrPHsavVLmeKhWYTxzQ8vzbE3aZZ6Z8dFqCnBcrLVEDxcdewDxmK",
  "key12": "5Xm7gjVufsohnu2wW1VzUb6jAMqBrHEaspu3SoKvsyNs8DegnCUY9ZXpuL5cNXNc8xUSZr3FxPFxJniLQyoyKeFG",
  "key13": "3mwyzf38q8nAqL9FuoJs8qpcULPknTdsjFPvpMYxGcsgKN11vUULbxfNW3To16aw59MuMVHEvnvWdoC149Ezi3wr",
  "key14": "36HyeBenwJXUf45YBkhJ5xwoHGjU2g1DeNJ5xzLhpiaeYcJK1ckBsBNgXNqjcP5QyQiS84CKkFDVRCUg4wTR6dz6",
  "key15": "5npkMyfg8KSCbFEnUL8pG3P1XYGrwGbXMbXc9WJAAtgs784GzF6fYjkPJFDHCUSB65HRn7bkqzFUyKUAnQ8b8neJ",
  "key16": "4JyobyZDuxXERNohAnJM5xF3xSZVVWpkhzozWj4prm64ktzMFLFScs5wJqcwF2YLq5NgvozS6iAPQ4JJjeB6vLhB",
  "key17": "46zy3dZsAqz3bn87j3GMoC6SZsFY94NWyoN6ib2toL54nfa75AEjBGkvrbfEAWtknanK2Z8GSap6gMDtgnWg2zQG",
  "key18": "3prK8pzgjcXZ9ioH6Msw4xYm76csNkQoZbUDTcoUksejUSBu8tectoghhFAEg1kWULkJiCfVYiKtNYRRipdRKfXT",
  "key19": "5wNjujjNQDsuKykPFmWM37nFHA4KXQhyehCZj8cAVhn7f4Wh3tAFHKfFgGChu7tFKYu7pd3JRZ3kupJ1jCwAYu4e",
  "key20": "59ohDmCLwtkEdkbrS5WWyUiPwGku83SL5tUSCA3kgxr2Z3AJCCfvkTBcJdrZhZLs21QPJuEu4NXZG7gLtRuPSfMR",
  "key21": "3KUrLfgsANRskXG3TFeo6vDrrJk2VoXLVzzS46TZAJJUDynQ9rgLKzNUmhfJ6HrsZtgCXtPpfPp7wXN2dZzBrdn3",
  "key22": "2ERDWxM35Bbfrz436MPaFcqrhnRambDB4jfy5aRnJs4wstGfgVGvkbsjNfAucFqNoMkc5hCygvVdjuxDg21d1UvY",
  "key23": "5kJGa2T1yGJ2LowWJxVayqzfzeGDf4HmLeTt31y2QHy7wrTGfUAoQQKaVstoBRP5vtLPNKvZraumP5a8UeajF6ff",
  "key24": "2K4htDnjb2fcN3etckFPHLLYdBBXbn3UFNXhs1QGwqEep6S4SRkxpu28u6PiDmdmcZpnPTmTWP9V7ThmMBhueSMJ",
  "key25": "3RuA4Vvrx3ziQp74beaHGWpzJLEVXmmjZezQHjMdw8LmXReKZuWtabGt36oVqHPDgy9ZerV1AfP88R6uZ7Cw5g71",
  "key26": "mriZUoSXp3kereEbqNqwUBjDLQap2UhrCAbQLLjiuaqfSezagbrx4bwSFBPjNpRGNybefJ2Xj1FzU5sq5vYXtFg",
  "key27": "5zFfy9YuddkYBfMrnofx2FTw8J6vtUS4Hj4YarKhD1FmwuzAxb5NZhnbvNV7mbaDCTJ1xa48FKBKNXnbmY6MihVz",
  "key28": "4g7TLmwXs4QufBc2NdCPU6f93Uij2uVBtXRhVqBRGrQi632suKzXQF3oZ7oLU2YMXvsvff2yoZBTuUJ4vyXKzqTu",
  "key29": "mkGcJYgf4yLEJVWdWGTsyNiyMi7v9cZzyUUwd8CB4dCE1NtKCH4ec78VoQPN7ngTkpM2aw1wNkRwaXJKcxEDoR6",
  "key30": "3EWhgLt5r2TXvE7WWAHHeDVFVs6QGLip77nnJhkrdbui7WP6vHFpNukQhep7HCTDK2gMPX1WtQgz18Qpi1bBTqC9",
  "key31": "3qnHM4De3S31NogWWTsH227y3DVPxRfMx4C7zFQbeRpnT2FjejtgMdM6e4dpGu4eDHK9kZmJ7TDn9h8EfNUwEdDr",
  "key32": "4Xuq734AxZEzVEgjLSpseVjJmRkpVxpwx9Kbp717CPpDxumsdT68k7WDtNBSBAfrk5JnbyQHqPgt7V8cQHouby6w",
  "key33": "3CkCteFP1yz2mCRWdBfhaUBDTJjJy99UTayvAwhNorcsRMEKjrdyvRhPPELtzZggNSQXtreQE5rMGL28odzKo6zu",
  "key34": "67Ew6VJvLeWHk5keaYLd825CGsJH4qLAXFZwpQAk3zvTBroPbyW5W8VeqtMhDckBQbMedqxzJJLG5KAiM9FozqmR",
  "key35": "s11Chagqmq7D2XqWUEQCMKgDuG2kFEvTrcxKXyF8JVgKHmywEaGRXxpNStoazS2Zh6MTjraGbRAsGYDBbUMGSNq",
  "key36": "3B4b6qibo4yWt9KnzqmuooxhzfKmjHmDwa22h28MEwP5mS7VPt2mW4GbRvVTC7xhmTmbBY5cjo4mw75PJbbva8tV",
  "key37": "Pj8BBQb4bWaZPD2d1p45yan3AUeiLUxn8Yptf1SyjfS6hQqwiAkLKGHpGKgY5J95y34MozpxuSxUg6q7eX6L7oe",
  "key38": "cCQQh3ge7jUnTHpaGptjNWvPL57VXbwzpjeN1hBBJYhiRE3yMX8ZPShcH5741kuziMYmPL5VEMLYD5fW6XvarpG",
  "key39": "65HtgG3E1H3ZJWPmb77XU4HXUwmydGgS4Q2RMYp8zrnqUv2KiQ9qbio9oPhzrqLRM2ZGCEBYMgTxvkrydLQpif4S",
  "key40": "5xTevUEqy8NeH2xKxjZcfVhNMo8t4Z5G7EHgFADNURfXnfGCcJjZKVjuGjvFCqnvdvwbTyECYoxDSCwy9UwTSv9i",
  "key41": "2z4rBzqg3cKLirwd8BqPGu2PjcC7Hu5zFUk42gBf57E6ChGjXqqxPxztAWStVq3Gur56HLEy1qxqfRP4edEoZ3rQ"
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
