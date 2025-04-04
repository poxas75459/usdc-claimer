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
    "MUijzmGeUxztZvZQoVnNkk8LWrphYrdKyPpzLbUE8RuJXrbuRX6K7dg2zcLaC8zPLcFs5Yqxwvwk5MhQ4z3FjYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4VGK8BCaiunCnVnZ6hkjNVj5dPmwoHCW1RyrCQoefZfkTPBfqxLVou1FS33tf1PWpNcfk5qBAPe4gCdS4Bwmya",
  "key1": "fPwgJdowamK6sZRPGCUfKmciCyFxRrgx5tt9y3ryYVmKKxwGNmfhCNP64pn6ZEtfiBRRYMqfZ5GDoDGr7D3CmwD",
  "key2": "5Gb3ACaZWFmud3wu5XViR2EZSWTDCErJVZPVcCXxCUwijL9YhZq6ruB9tSxK1ZVGsfAZ9RLhCdzdgTgxZYxrw8ar",
  "key3": "4cUmaDgGMAZKLaz3rFP2Vm2kZsGcS12pXVUpjVeARnfcehE85eqokiCerFY2rqwwE4Z8hhQnWrrVwkEhjbdrZ5ss",
  "key4": "5jiahjX8rWkTBXTepxF6mcE1ZZrtHo7V5N1VdPauZ8T5BCvGZqcCfgU7dwbiPTNCqdNBS8jzxASPAx6meB7XUWf8",
  "key5": "Ge2zPAmWAUYBuAkNSEpLQ1SAp1VTeztn8mcNriASmwwkv8tAWgAqotq3PVR6ANDoa3hbxKbHKjCvYs9jsJQAi3V",
  "key6": "ozm3mvVttxZsPMUyE7SP6Xc3ekwQoFNKTByv3MmiQxyTDACPh2NVLNpsAjxQEGuLySyedsrMXDkeL3C2tLNqRsH",
  "key7": "3SWNNjTj2kJ5qAZrCHdUfs9QJRNwim3L9JeUETLjeJdH7ti2JWu5bBuiNKpefNpGBNJtMT57Hg69KJAV2ryfkokf",
  "key8": "2UMzuhNQ1b1h9tQLS2r4zBYy96jjuxLrXYVEs25kpPojwsRFpRsM4Zk6TjcYLoNHhAYEjB2CBSawWkab6jc7nK52",
  "key9": "5tn8Ak7eMU7qSziP5i61Dh5yyEs5xRLLu7tCWwSympioCG8t59tCzFcausL82r5xLc2B2ygin5r9CNmVNLifZ2Yv",
  "key10": "5qoBTimFmW58LThKHYNYe1oSPiwTdk3cSmPTS2tZPmiQTZbYkho8oeV5MNCWVmNJAvmv16JJFCeenPEGQKyvmeg2",
  "key11": "3jwFvfAayHzuBN392vVL3orsS6hMTG5kCZFeTtfJm7G9syp4wK218Cd6bvaipj7u5Bh6Gq1qgQx3HDLvQ5D4fCqk",
  "key12": "64dphAxpx3YUTK2o32gygN91ucjNHivoApEgcZFvnHUCJqzgzvo8xNZUpZgYJHYsfeZMyMjKT2cNL2uqSii3hFRh",
  "key13": "2K2uSKFR6vc95E68cYfvFb8CYnx23EZ68KShhEbJhSCXM698vyMsEGqjqiqd2Syi4nsUVEPVvtZCF1xwtaxK9rC",
  "key14": "2ce3K7HStxgd175xwMKyMoCqkthvVYrnmxbZgSpusMVChEejSmaynkiTZjQh2gDx3MYzsWHoi4vZyA3ettzbqvqP",
  "key15": "u2Z3Jq6KsjEBFF8LuiTj4QtAqEYLChd26LeLuvj4w4B5FbdnDV96SAD2dJMJR1osAAPbaWcJtYoTHMMxDcBdtmL",
  "key16": "2Jw8LTgMEfZdZtVArTpuKtxasyqDy9nHRZeNsTdtY14pXiqSTDft7kDirYb5rSuoxv66ZoJu6DeRTknvXRWkDuq8",
  "key17": "4FGo3ZNHbPor1c8E4BgpCWsSyV23B9N3Jj5RnByJm36G8HTuuywp2RznTbZSAWKwCX7NR4pQodQC1UiW2vJ6EGWf",
  "key18": "3JrVf64hpfEBzxADcqwnUfx4mMmb3qw2nAbq5JtgHYmoKd4UtpUZ62hKKTgqhtixqFrCBFxPUU2PehANE64RaMbS",
  "key19": "51ajp88sj7rDaXxv6F9fzEVB7pbr4ynS2WADj7u86BS61VZmFYp4QyVkoCQ2RgRD8mNwhac3roqFyXKpzg1pjjYW",
  "key20": "5SaahyXcjmqYEDSVk4HfRUXKn371G4QQkbvSG6BQyMRwJRMoW9iA4Y9fpGVH5qLXU6JjoSFeSeh9U1GzJtRD69uL",
  "key21": "4BWFcbz7caV7aCiZXCxSAReEwPhWKtLMJiRYayuBCa6tmwMzFbSvB5zRJmpLdnMuNszoAf87XhoL38qnYScmL6TS",
  "key22": "2ZEBWCXfYaj6JPVRDQ3pLygEkPSjVJ8fA9teBzRdRb3mY6Qg6ocUMvAr5CV7dezwUnDg9qsF3cjLLgAJz87wR14v",
  "key23": "tBLjmVLTjciYozLjuHyVNV7LTaMtDpjWiTVDfPt4ga9j955TWxWnSr175geHAiPiWTSKUWvfqaszBYaRzEYGBML",
  "key24": "5aeBopVGDkAeC9rgheuxPbCztP4BTQUEDQEXXNrDiCNgTNp1hm7BjwL8ZS3e5KF7rPNWqWsMnyjEJh23Rw5VEq39",
  "key25": "5wBh55jnqN8gP9h8b4GCudRxw8BaV5kUyrAEQyoGoPAKMTTYcVFqyYDwn1c2xEbcfqkcvD9QQRv1ZxbrHHfGFzQs",
  "key26": "2cwKWtTU3NeWwyy6SReqfa5gTWv2Mt5GkEYEYwfC72V5jJr4RbuxZJVLkJBxGaTvAuNSyTCTwqFRmALqaNhCekwh",
  "key27": "4sa7oRt7B5DR18ffn3rXsbgC5Dsie4y5N4kUTimfFY82vSEXUiL4fyi7MrtkwC9NmHVD2SjbnYNPdFikvGmw8doV",
  "key28": "4MfrUZ8tLnDMEtCShKSELY1FLzgwJV2tsGfh1ep6e6d8nKJop1VviUN6iP56Nkxi6RkCnxJ3wTDW2u1QPbPFL52U",
  "key29": "2PwUAu1GAC9JRvijGvg8Jt6sDE4BW3ZdrtmUZS93b5uMempAtVxaFkwcEpLCj2KLRDZyEpzryW4x7zmRK2UNBpcu",
  "key30": "2u1WG34b8NzhpztwLbHodFQbMvJiL4PzBxkvVMmDWnBWsvj7esaw8H81pwTuRzHbYbm9t8QJRLCdbs5DNtBwt95x",
  "key31": "56GaUDZVhowLGzGdixaewdWchT3pC2XcaZto2a1A9ppZ27nCXCNdVELkdgp7yUFQetpPx7bavG3ooPRAQ53YSH4i",
  "key32": "3jpXVDuzJxx8iA7FjigyqJ3h7dFFEvH6ixLJSyZHKzRqzjFNghXGqx5PEmHYVGSqXUYCxTLUgfbTK8amSQxSH8F6",
  "key33": "y1xcpgqmu1NTWnXHeUsZEvxDrosUMXeqLpTGt5N4sfqTpheRU7ajupobh48QUmRf18GW2knJmQdoNBvZABNaYk8",
  "key34": "5XdmAZHSvcfTEvTf1xs4jZiQE9AdkmrPzWWkTsaTcG8ivxbNPTXvJYyYKZL2XJ5rpS3NmZntxgneXZSdY5e2wn6Z",
  "key35": "2PteQvZVeu7sWTVQ4XqB2gYxn2RTo9zJUWcqvs4yQzWaPh3jtT3xiSxZCgfGEyN6ocahhZ6qcAw4W8eJoSi6jPyT",
  "key36": "66scrGv8vhkywzsFXfSq2VtNrkm5fPdncsjt4PrJTHJUqJbyec6ttL2jSVhBKVWg45jszNub1Z9zALQzkikD2TMs",
  "key37": "38ku6ruUbv5ccKtFrSoHwmu32wKiBNWr4ufVpDx95pcapsFQ87V2zXEX7tZoYX4wbnM4CUW6uJCzsDZydQ6CC7Bo",
  "key38": "1M3CvQRsLtqjkaMxWferXo6vNkSLo8J9XG9HuwYYLC5Kb4QudJAtdzEGfR8sfUJQaGaT7gnZSUCTa4fVfMmdS6q",
  "key39": "463QTejxued52nBm939FBQkUPUbC4d4z94ME7V7XryWsyQF69PMVttEL36caGj5iPxYDeFnEskRnKMUbZyZVLPmU",
  "key40": "5SjhyWGB34xmbdqtb4i2UNXcqfvBEEHHqq8mLcnGpYnmbv7MJFn95u4KaGH7P2c46iY8oegekGpZNAwgHv2UYyas",
  "key41": "QwSBAv961WJvbJJ5ZYVThNKLKLWV4DhqDTpKsrr229VSVMQJEDzqAYFUvzKcCmwvoGAWJ3mUUcDD77NcUMDXpC5",
  "key42": "2uEFE5oNMFjApU8w5V3bqsSQ4Aop1mnD3iwSPEktfsowZLviy19WU8urY3RWkF9eKhJ2JdR1qDUo78N8kr4YUJBt",
  "key43": "31oTTq7S8HxVYByeTvZZ4Rk1s2NovnsGpMVCuruuUArdW5Smf67LJaHdr4nnfwUjg6qzuQ9Svewikfsm3xCJg3Ax"
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
