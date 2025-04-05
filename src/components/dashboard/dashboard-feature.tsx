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
    "3sA7DvRxtsTP9Pn2gSpmqQ3QfyiMbEnAWDoRZo4hNrrctgGyWBZfU8vmAcYKvhCTxWcSHe94wUTzXtdqBdfNeXuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TegTTbetxojTEKJuaZEEtEZfuecsVfsQ5G6HJ7xEqggmzhaAAzXnFbQYitokuuUJ1SYQawutdGYesSz6rWDahtz",
  "key1": "jRxwn81Wxc4NeByitjDBHD3awhgon3vYQiYHHjWGxXRw42c23DMZtSq82cQVXm8M6HFr7SfnDyCnCr5VyxgqayP",
  "key2": "4BzdiyCUevjnwiXUSa7Xj9jrFMmYKxCMrREGugA76oNCymgkc7QCTKLxLiuUsnsHYQaUFh8tAaTBSvsJkXTfkgyi",
  "key3": "2yxBQiFRXEitA58E241yBUqDo8PRBUU1Gur5RCyTqwCVGhYHDvy5FXdj8fnBGKjALhEjW8rrjLdnV8j3NKxe65hn",
  "key4": "PwKSY3iaRSfHBhdQRTwJ8UPy3EkwTK1fDkR2m49GnF14ncxm9fFpFMnMz9gqZsWpvqznnRxtbA4RjFS6ETetWY4",
  "key5": "4cs51moTF39JFpfVEw5QMdLo5dGuDYBKoQ4QXJAMHJyYDdN9SJ1r2LBWPeRj1bToRNYGCY6oosXE3LorH9cLT9jC",
  "key6": "5hnaGog4Kw5uzoCrk6SbdQSCmhYEXmeREF3Cn4RNQEsYtYJmct1VA9aX9gDFzDw3aFU6gavk4oNnMMYqnQjKHqQM",
  "key7": "27RJLDpUE7PQ4TUeqiEtdcfxpBE3tXw9AjvVQQUYh33DhrrMQkLfcAiuv5EDiCgKzgHadqmvq1oB5UNuj46occjn",
  "key8": "5panzCJQNrdqmERP2PGTVBuXpGfb8ztDV79kwCxDD9nThPEHcvB1P9U6RGotxjJ8Sc5VqauynE2GoXXmsAY3S7rJ",
  "key9": "42PeHLX2uCd2jDycovkyZSBLCAJMQW6UQ5spoV4EthP5NAqYqH5YFQwJoU9KN14CCFNSP9JyfQxAg35ZWRyFPA5K",
  "key10": "5LDtTHq3XkF6dwucjF5fTE5vDCoueQtzRsucUnRYsqaLq7Nst8R3K5VW7G6ivQ3hsWpSx9J8CoAFMnSwqtwPF2W",
  "key11": "4mg2FPn1qkoEYhPamquA38qr4BxWbvo6cnctNRPyP7pB2T9rLk6GgJdKA4iFDbKhJjWnHZga9W1KnwtVUU9fMLGm",
  "key12": "4jaHF4ZVXUdes1CRmY4PCJy6jBoS6DFx9BzcZgHDN7fzb2puSGt7CDXX4KVS9LKDiTrTb9hpHFTcN4q34uAos3Pm",
  "key13": "35WJ2VR2onGjY16DDzdLdyQqJ4h5E1origv4KrYgVJM94RUVmxU9MPmmj477EefD7cgJjD27YaxVwifZQbCo7zv",
  "key14": "2eKTLNSwGwxoQaXzgThg8Ex8bu8WyB7irMqzivSpJsKQ55EVp2QNQACJXdoyVb2TmHJ6A7V3pUfFE7i2utzi5u2Y",
  "key15": "tiYi969UdPBe8zKTYgMnc1QMVSCSpRHcudUocSRBBDaznAGPqxTWo2QCLDN5D6kuWtZFCWGFooQKrvkTEvZGBR9",
  "key16": "sjdyPDKk4BZopamozaKKrG2jsnhfxjn7oPACnWEm3Bj397j9t5oYFiMZ8DJk13ZsY2koghuiaNvuMEurooaTiYm",
  "key17": "4os3ZmreVVjMaq8PyZkTShZ3QPdRGAAdmu8Udqr1n8ohG5gbcBtn2XRaL9Edkun2HFQALkYd8HMHFsbA4AjYMv6J",
  "key18": "35gLFLtcPuGqmrkArQMHXMdL5SucCHrUSbt9t8FoTbzd11krqsuePg6othcwSEhVV85enCMWWaDzoAifpQqucv3s",
  "key19": "2UjuUuqhnyedciaXgk5Jxf6Y5RaazVUX5igzjqGa5x67ByUtaTa7e1fNy3uGsien6biFKFcBnfS2TK1F811W6uF6",
  "key20": "2krhpF883St8Dvid2fPMi7jd9dZEV7gt4qBrQN5TBb6H794Hx59doDUZL6fBtDRXKjfjqvcXVbH36wjP8DrV2gVJ",
  "key21": "3AFzZLMZPzaNJDkckms1E12iaQfr4Uzt4TuK69sfsg1DDqkjiNLWqzNtptcfCNV3TUC8rgy95Fa96hPw6kAXtRL5",
  "key22": "GGCZbJ3mmgBJnMFBnQqVfLTYYXnH9znST4RyR3iDq7icZjAR9XVJwj5TgMGL97BdXNGSWNBSesCEv1uMLyi1Yu9",
  "key23": "4RVfdCv483kLyhG4bPz5T8CgLupzfTgPL8nEXCPV5sKJ8KVNMfdyZg7K8cw6qtdqPmBShQweS4YTHTh6y7sRf64r",
  "key24": "4otYbEmJRBEFiA3j4dBruQC8wQqASN8vkBDMTcBJ5ze6ZsMcihFgBJHsFFQ6W9NMX68jVXgpUdVHbMxKaJhaGamQ",
  "key25": "5zCFuyf4Vyv4wMFY3k9F4wWMqays4qNBUzL7oUQwn5f1Y8wVdPpRLPuW1o6KoZbjX71aitT66h4hVzUPjCviu3q8",
  "key26": "5zdqNEBbkDtNzT4c767HrDWAEPdV2cqcG2cPVvcEEUkMwZPfsFEyVKBoMKJ1T3HA97pyhNAibhHF5pc5SBVuPpYy",
  "key27": "635XMoVpqJpn4UxsbQg5xHtU7KcWSHSoUwgCK8LyHz3GQDzn1HB95MWHSHqASpghdzq8M3VsCP7Evf626aoewbKX",
  "key28": "4fkpZpi5Z1FUY9XSB5Xa6qyM2QeoZxVzzpmV2CALzMBr3po5tqThMZ9S7hjZnCuq2Tdb9p44cv359zsGkWsNcQWi",
  "key29": "3ZYbQgjgweLM62XLEXN1yA14uGFivQyxiY73rGHMQn1UFJUn2uEviZzcFt86FVJL1j47VfRpTcAXmk3J1iTst8W5",
  "key30": "2dBShwy2tVv3PZzLKnTHVADheASxe1JXqn2cU6sYbj8dvVmhk7QJA3g1MkZFzJ6NSpR7bY3C17YVDtkUKceX5gt6",
  "key31": "48sMTmfehg7VppLKbpnaRqvfP754MrWq6K9e8qy9XgkvdLKnrd1JWzEtuqCVhpv86bUkeCJWh8eRvztCAVU8zESj",
  "key32": "3BcNSQoetxkVkroNyHQH2WhqSBs9q95f3tfcfTkU1e2xpbUm4f6Pcsq78ofyX3gpr2fBck3ypGYE69TV9eGuyqMc",
  "key33": "KAj84JpKgnt8DNB7Wq6CyyzyZiHWYZTUTXoApZC7DZ8jmM71E1SeRf58vU3L4snDkwuprxW4gro62ghTRpcAdyR",
  "key34": "5oJMQvKgt4SxZGStYnivwTQFiEmJ7duUWg6rRecL2Nfqho3YTyRTfFeuYfT44tevTZSkyv4YLdZpEMtEVNCFmQj1",
  "key35": "3b8xe61X9k3cJwmDnKAVU13vxb9Cyqzp7JSDLSB1W8DhvQ8BYQNQkhoSoH9hYAFZwAbpVrFjeP889WyQjEviUfm6",
  "key36": "rVrSpoAY9DgKqR3y5KRqd3p3v8UuFbE9XatZikXprc7CyM66zCsLuYFJSSney8ZGL9EUAXG6XmauJNhTUfbLhZs",
  "key37": "5QT8VrXbcAskqL5QVKii7Wuzj2vLqtm5sHyB2cRdWcUZqh9NGQuViSMUgUigGQdGJE8D9SmMR4jgtRGrVpyYSYGh",
  "key38": "3hfi7xojTTK85kRo1ND48oABkCbHPcTbhXN7xRRzp9srQwvtcQf7vk1YzsShudqaVgM9qthYUoDt2jeXUQJk5dr5"
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
