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
    "29ibuJeoGoz8ZF22KKhNPKEpY1eZd2X7ACUSRb6HgPX92PwSvsMLDWDrUnM2aPNbcEYQv1MKLijTCkivbfL17oyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFL5CG38KTMqjTnqpGS7mj3vhdztWq5q9fA8dZ1GyYARzg5diMTUjheiBbEQrcTeu2t3Kc5Q8ypw41ExjEdEHPr",
  "key1": "3u9Lnc85rh36gtaJE8CRTbngMX1JFHNdxqVdqyhkDStDJgjJBpb1LwTbiyecwqgdmyubjR9D9tQNvRxt1Q2Qv6BL",
  "key2": "52R1iYvBWgJwmMcg5yw3PAzcDjH2QibCocfgzSrqHvifZN2eknwJKZaP4ouFMFSd4LFPMZC6FmpZN57CWYtPFrcc",
  "key3": "2Arr5GPju9ar5tAMUEkSq1B5WDTjAVJWyRvVCutyKyYWxL9A6B5PWModsZhdA3hm3je7ZLFRDvjRTWxspHHiCJt5",
  "key4": "3d2qXHLsPVrcqVxSXZsf2rR48y59NTgzb1AKdpiQZzn2qVJ8FwZSG8kQuwYdG97RdcfczYXvrmzFuoDE8NMt9wyN",
  "key5": "jtJJkzbBwLUbzU19CVxyEpM2tUkKSQMz9ajAgAFh9WaAFoQDbAu7GYGR93imGbGaUt5Z6mAk9cwYy5zvoeqojyJ",
  "key6": "65okWcEY3i7TveRYfnM5CvoFwuGQtDY1DyCL1VA1kpf53YathHifHQHbUeVPtCxxpHU8aYE9io5yD4jmE5kTZWmP",
  "key7": "2Gh8GDdeVcgSbFRhUrK2BsDPu3oB1mh3A9idbmvCJp7YdkXAz7X4oNvH5JzDXr63RAy1XXix9vYdRL3QUvnKRg81",
  "key8": "5XFVo6p563QuAP1C2kphuf2ZmNMVtW6qc5RiVNmXBnePzVL1NFCDkFHtVaBvYNNbnPNnEUsi3XhvxCKQ6NmbbmYp",
  "key9": "hpSUUsPDmmBKwsAAzRtcNeJdPfPYT5a6xHvkFaFnyZRsvGks9gymBp8w55fhJWQnTr5pbo5iXEcSy4QYiiAQMAz",
  "key10": "srt9NDRYyLAW85qP7YJjp1JVAjoWyDACVRcRzwmB4mn3NZNbdTvbeYc2gtkrNk9KQp32AEEpEW8CRjTAPgv3iGL",
  "key11": "mHABoAsCikCFSaiScfynoKFdSUtoMpAdnyiteSHa1SjLmhv4ewxnhTeVijAHvvJzjTmYjXrU6MQNz7vPFe5iCEg",
  "key12": "59Pav65xbij9DAqQk8FGJc4tg5wvXMsoxDz6YU6kiVZh1Z5BwteBCuetFpe8PEq9vhyNLgozhLsMeVJBtpMxEXkK",
  "key13": "5o4zyizaM8FefCPiSYp1hALrzujYpxuKa97kNR7uE1UkwkzHQiN25wfPujoLNG3myYZZsyJSxzMq5xpgN3HtBLek",
  "key14": "4n9gsH5pzpaAi4DVF3QVcxSvKyYTsxX5qRoG8JTZexMxzbqcgwSJHB3uWc5yXR2iUH9y3Q4gZpF4HMZwRYhyzwMM",
  "key15": "4VJCZLAKYkbtyS7rHtMZ2pcAHkwXcDxirAvvnZt69WLVBcsa3NueGBnpGt5Fh5g4Ah7p9S441ZBd88wtB13GUTGZ",
  "key16": "k6hVzoSsNHaNsQMuDQtytspNEnLXFkRCSNtEPuWTDgr9XyHCJVQimQvYhWQfqKmSrH23bBT6eHWDoxth5uV7g91",
  "key17": "qsd637bEPpEsRKyBEWQ472D5o2t4rSaCgwvNNpppWQsbzxVn4CWzrJ12wur6pD4HBdhjZz3smCYardsxDutaEmp",
  "key18": "Jb4hUVv9bAreQHdfJU6tJ2mso2YdqRrrmHTMb1j1Ms7STm7A3qXRwVGtmqnGyGbcWrDmk6qhqQKPVHdkPyquLhK",
  "key19": "5L5tKbkDY1sPHQW5D3eNmFzhFTP3A9AwqSJtZR8pP33BRU8CqacgCj1GXeJVyvSKksD7f3vAq8JE1wW1fmyQpNn6",
  "key20": "4duALbAi1fZrGkWzJwcV9XJycy8s4d21J8REMfLSy1kiCNA7QZK4pVeGSkvMEJBoU2Xw8BgGiadX7N2e2KGLS5Sf",
  "key21": "5dKRCCN6YFEhVBY6aXj6fg8DANYoRKnfJmnoHCtCvjrDzrbZXhBh5jVpVrSMQ2QZv44CABEx5gZ3KZLymTUF4vBr",
  "key22": "4f5DEmcvBbxPJ7AK1kBH2UUrDnEPiJV5ZduWsPprwzQLgvvcBafTaZtZZnBgN5Jsh5seJLmtQvHFsKSUQqH3vQyR",
  "key23": "4MrMsC8R81vimjXyhjRvcpKjk1ykK7Qrg5q9T3rQULSgLi5s7jB2QpnZGbKDvYLdHHcM9URi5nQrJ7By6pevcMjK",
  "key24": "yeY2s8j169ZfUiAE7Xwx2EinLK2gSsTqKGoZ5r6PygDHAxyoBTKLD1JzZg2JqC7bfzPShZstkQPffezzGLTFiHb",
  "key25": "Ah6ULLyDtkw38HKfGSs7CeFqn7CXS2ZBNwseavMfqKPpZ6gyy37k1CiQnBDHWLjt323L1UsR5nqhm78VtrsAAfG",
  "key26": "3SCZoWt8FNDTcNXJJsjuC1sChrnGwfdQL7mhuCZnbff7Ly2qsskBJdeYKmwNBDhetZMCLiot6iuDfjBQZ2g7gGoP",
  "key27": "mT2h9dHR6fuoo7xwqRi5BcGUsaWdHbwJUSKUVnH93aoMZuvamdX2j98bzVvH2EAk9CBGaazJbdSSpyXjFPR38vU",
  "key28": "MVmXB2EYTxDQB7B4zZnBRLMhidGZBmzb44bcRsYyv1BE6RDmrPDNsFBzchsidcMG5fsPpn8puCwcPaLtLZLVmAp",
  "key29": "4XWUfJf2nXBCV1Tf5MMGBxmDwmKN4HBbz17EzopNRD6htkrvaj2sWVdRh3tcg63eAXPfUewqed8SQgKXqaBKu5pw",
  "key30": "2kg8Sx3ZtB5NSxCQezRzbCxPBw3zvHAwkNfFds4pxmoNNXfe3dekwJKzgYGRywgWMe21igc6k2fZda8nvVgPyycM",
  "key31": "2vtfDgn8FZSpjAE6BrHzwG8HEc31Ff4ArBMkt2BpKqrkAZihtWbeXAzTw86JcVBqjaKr4pdgVS4n2CqEQaC9H4eo",
  "key32": "5XK59ntGSPG6vWnDAPSfbMmCodbvZvx8yfEMgVbCmEB7883EpYeM96yUAw8GMB9eJLc8d5E9RX62LXUqhMuJDgVQ",
  "key33": "5WJrPvfSQ4NqnErDaLEomN8jGbp3RonwcERdaqD9dLqEnfUHV6YXBKHGYvFQVh7JH6Mr3JowteFdvHcid821eXCZ",
  "key34": "3LYWN1AGZSsZATgvFnwHN1FmsyKVzWXZDB23V6SVXToayHGhiY6hxd34QAX9KswpRe37C9cnT2qkuHqjBZqpzzHH",
  "key35": "4tyu6a9v6kvFd2UxLmTWQFAc7BEXbZXb7BCjCSLs71sdF8Ff85mmxZMhJ8mrr6Z6EroQowUNUJ3scBXFQsDzWroW",
  "key36": "2vumvfvX3u5FLdcHUErjBvfURCD8gx4T6bEw5CtHAV6oJBNEYxpnfdLcn15LkLGqb1ynVo5HdV8rNE18fbKURiYi",
  "key37": "4siJ3hYY1jvkHhX5HygyKSHM7sxx8auaSXLoJtNwM43AFcpaWQxomYBtg9DQ5ccQkbMNYbLN7FAiWrUGxeMEA3Ao",
  "key38": "5h5SRcDqjrGXFrVYXjNzyyZufQCTZeS8uYiGUf7B7DDB5V9TURAdyzXbMpJbJ7AK77iKFKzPoPQZSwYvqtmeakZQ",
  "key39": "2W5fkdCsEZWuJHBoobM1reazhcM22STwcPhjttv35V6LyfwbKmm215WpL4KhfNUMV3vh2DvYPqXHoSATbYLEt38s",
  "key40": "3pYy7oeHYi4RkfUo75drSLnWS8tc88ZmcxiY87UTqbWMqSqJ6sfNK5sARGJaCkxREj43Hthi92SpsXVJuVt4GAk",
  "key41": "2TaoJrmpsrzwk75rgwDfYRrRmQXFn1MP2Gr3KDRxRBNKfvp8wdB7bwX5jhvvEBW4fqSnNXo4Mp1C6s4cuNyzNMKB"
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
