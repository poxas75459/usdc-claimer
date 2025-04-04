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
    "31M82GARNsDpVZFnLNPgefrZcgpGnzEtRxQNJqXZQLWZmJsBV4GueFdNEg74m7ougkxCQGCH76oNmwgMCSnWSFgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLAQt1GRG7iheyUvk6JH1e7FYTRxkqkd8hfW7zakf5eANo85nQCS97KtoSjKLsxm8nEh7f8bQ7V8BEHPPiReL6z",
  "key1": "38SnMADw1ShPjopehakrymDeoWJX4S3H8Ujsa5MSrRearhaiLkWM81JdDiSfNk2e2n7zu2FXmXeUPnHemz9mGkcg",
  "key2": "sr3ysGuYQhCGEhn8HXdf3dLq8RKz2mj79RTZhCvi9KdfVHRw27sAJpcLuqGwz18mH1MN7WnGU25BC95WRdH2UwN",
  "key3": "51JwCE3tLmiLcvQ47KPUjsemfiB7UgqGKiDcDvNKD9oWg5cxaQf9DDyxCGAPLfRfdXK63yNNEF5TLU2X6pP3JM4N",
  "key4": "3syLcg36n65ADdVcMYaKyJRgeSLQVuRF3AD621SLsmh1GhuSjPy1dfEgQRgUBjaunAcCkcjTfHXiMmoxHgy3xKpG",
  "key5": "5aKv4WzMkRdKaj5F9FAW9qcDoEQFiPaqnSf9qp1AnrAYmsa28RX6LpwBY4qKJh8jEryJduLcTpAPkyi46qS1aqV2",
  "key6": "jThpYdcBCmbUR8HA8eaDGFgsWZNoRRZT9WrqDb23M5yCsyHTjy3FpGPXX28Hm87ifYf9Yb6F96BZc2nNftmP8dT",
  "key7": "4ATfuS8CDLCfnuo2EtRLF6TRd4NYLLdbfiPk4g37zom5HnSSTxu8QiwiGyisojYxscTQ77TAQBQtPZB5dbeXQb7u",
  "key8": "2dxFPCBgUnjNqR7vmQbMYyidUituMqeuXvW5JgQER63JAWwp57W9x1QDkGBGZBN9HF6p4LpjQQhQwos7towffSwG",
  "key9": "4tFc5qbdGFD3ZauxB6ANpahZ6vXoJPd3dLrrnnn5Up8KBCWwdUZ1Hb14RuEPaRvi1Fk3yGhRFWmHdm3SS9Yrfk5c",
  "key10": "5u4zQqGQLSJGX9qAvRNqPKwEsN8Rc7iAvFFSNkHGghXy9WdXextH5if1ZiDNXQdvp5cBrYp78M1E1GEd3hiKVrpP",
  "key11": "JnDbQ5eSXo3Qur2Fc3YdDzyPc6e8f2PVD7zpc5pdN1T8nCkMJmWhgptvdPiKjqUg5dHbhBsDof52BjMy8bRKC9s",
  "key12": "5YPUPLa2bwDVMpDVwD41ab8Wfzozgm6e49iA4k1KyhQgQ1vjyCKUaZQQustvBiqyt44b1QEZYXfR7Ev1NSFtY7hP",
  "key13": "5o3pUp4D1KbyPABBhuUTMmjPBw2qoVnXQziLRo6SiNzPzcFj9VJ7bkJUJLKASB3WHb3UuCExVshnr4PLGtHhxBv3",
  "key14": "2YXv72onFtNZuxagQg3TZtUygkwTnVV52atfhrkt8WXKbkkw6aHFzQXnsBVFxvtSSKzm2Zcmm8in9G2E5Mx779TA",
  "key15": "EHo61JWAL9BjTpVes2NuTA6ynHmfVuov55LEJMJQdT7FgvXhyVsftRTyUP6foT2mrGjbQsaiXZoGYkR9cK3fZgK",
  "key16": "3GYj4gPhKTRAmEFwgdJ8ofXNuiMeen3egPGBpYZB2LK8yJhebm7ehpM32f2GQUsXdmk43XYS73bejWbgeNRVb9Tm",
  "key17": "4QcQz1utk2SeVnTeQQyUX9sDqv2R5ndULkxabZbkZDSXqABK1PUkwfFjqmtjvWLE4o9dt7BomvGs9Y2E6RqA6Svb",
  "key18": "Q9M2b9DJ1E4c62NxJ1hZtmfBtRUTj2cs6U6QqKXtfb2kgfgc94JZapoRLZ8tM7DJArGYhRSVDoxMeYiMqzCSPgX",
  "key19": "5SPx7b82uEh3NRBW1HeHf28kswfKtsggSwfMCZDsmnt6EXGTmuneeF7YtbDyf9Y36KfHetAqGx5MJUV75qwf4cT",
  "key20": "2AwiCq96P3gmaMtLbGt1w9U9TyTA2BQ4jNZgdPK3TDBZdvHGK538dniMtJRD77x9oSTH1iUxfUQycdVLbKnWfbco",
  "key21": "wuDmEvt7XihXs85ma7vowdM7gKbpBsgUiRdLsAdBPFaa5vMFeFKgL39EzQ7q9BuzSsdfHMQUxF1zsh13CqiGxtX",
  "key22": "pP7a39RG7ywn2zFzmsD4pQ4rTsABUy2suitRZeZcbE7tvLkJP7RP8sCyiNNYYtmzBc5vPmRwfcWneGNVQCDTs2S",
  "key23": "2imVEGdQPNoyrnANJLkjGEHcaGYw7CvFMs8drQZcNpZpyvVQXccbYFKLySj3Wco9CQVni1S9BxyW4TBQpMPqiiXB",
  "key24": "2e4dGh3kwVsKBsSV338mvwd4MRZqikJFN1bAwe28G9WhhqN6f8aG7j6X6Q1PfdSLG9ws8WYUrub8krEMzXniJNAu",
  "key25": "4Pa7X7FjAGtyzr3D7jKGmu4stC9AxoB4cgj72ahQ8du2xaBGMmjwuFdgt9PPW1WDUUZivZNVsX243hoP7tsCqS1q"
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
