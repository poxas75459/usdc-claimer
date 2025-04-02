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
    "5KJdaSo6MQzfatXaDip1hWgzU9LBmPiEf8gsH8UsT5o4Troo8weT3pVYNghnZKhZWunBtf3YjwU5gmHrirYiiH71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6KPu6i6D2U5sLHFaypkRPzp21MUmWPPnu3kcbuDUzCMUfFjGG5aEy95CAvQAkV3hMHN3V51JTyFcsVxub75HZp",
  "key1": "LGTDWazduamE6URQgjaqhLavQsAnPW8fzjdTjqBazkcPS1ekRXfXKPeCTEm4taUMCer3pb3hmfChRfjPSW9uDZG",
  "key2": "61BzcRDPnkatymUAscFDy1vXJv5Lf2ZFHXhQBoQYXY5wEWbW1HbCcSizD1uW7jaUnSMqKoSnYf5s74SQPhBc4AyC",
  "key3": "2gVL1eLVUPyer5RaNZAgJ4pJXDBSLDDxoMU52mps7Cvnpwdd5suxxkC7MyhmLhryP9hgQKoCC2iv7gf6gWfda73i",
  "key4": "5u47TQ83eGuMCSRC7YSaSCHjgxizBgVU3tcGLZCuStsBWfGVteAZE1SnPqFLezvPiA66ZcAdviL4qDtqMLBjEpMH",
  "key5": "66oJf1r2NYZXmgwzESbMEsiKhuCEwZbjPgMJG3TRhZ5ey9xvSggpMZD8EmxLQA4HreGtHur96Ygrqb1MZSv7VP4M",
  "key6": "4gwkXst41jtHEMrsybjLwJEEkcnykvcTGXmQF8yVK2YRUC1GatQ7dBhtENoNZ5Sa1PoT5zN8CuXytBAcFbYGwJ7k",
  "key7": "4XRfm36xwm4UGtnDQFmCTSVCCvEWcLVuP9Xn5no2gFgzkWK46Sm3v9ztRiUDjyBcnXyTo7bEAjQwcLaNvz915NTr",
  "key8": "2M6BRwynXefkHNauAcZHyUTdzW5u8qLJtN8jXvLj95N5ASu3cdx7hcm2A4W3VXYhkouiUmBAi7FMU4JXusSuaoFY",
  "key9": "2AsFgc7ncvTugiAUhawMXCBuHu1mitizjZUY1Xz3gf6fHAiayFR4gLZeSuWCfdSp5E4yqmezonWVz1egVtoHZ1GE",
  "key10": "5Pa5x9LHrAVk85FctpjvtjdiCt4nCmZiXonTfwuq8e5xoJtoYno516j19ubJ2GKH1P7FFjyKYPu34mKvK4iznw5S",
  "key11": "46citduZxaRi28wFLLv1HtNmSGXBCd1Q2WG5nJqRPaJQRTDfw4C3wYbZd1sa3JhVg2x1Zze8rrjXoemdk3UAJ9Ve",
  "key12": "41kzYcgxJYnRSMKmpBTowMQA2jYkdGZiypBSA5TKrqdNEh3zBSV8ns3cHjYMQshnABxuGVx8fAVpHPDh4NEEEjqp",
  "key13": "2hUDDZvGmoiKkJzzVz1aPGUSsAMS2waGbtTzDhRz2pjPgL1VjoqkvM3k5APywQEuz7PJrVGstTDzNLZ9ncANafxo",
  "key14": "Sz6jwUooXeczLmKHZy7sdxUFQDgNpobGXufuAbteNtWBznuyEhGjbvAeV6U4hkQEnUMTbzCLkCj8reVkWSGydJ7",
  "key15": "48WLZiu4kqmyeVu3xR8oM8Y5TvyGuLeMLwxRPbTuMc84p5jr1eAvPyUh2fq9qSCq1C7GuPLMUorZ6wnN6T2waXBU",
  "key16": "4rd45gRVbPube71FwcHZGDsyqhFfPbR7s2nfKtA7nN5FFzpV1CfTRDnt6rY7DnS9PvWMVNyBQirLwezNQZ3s8rbZ",
  "key17": "A8cn35m68VUPwfPz2ryBAuHZCb1T6Npk28cZiteejQ7nqGDrKguqGTe2K8ZxbhFSbeLKxhfawBkvqTe8xa5iuVG",
  "key18": "3AT1bqEnFQzzpqJ9QBsWr6ZcikAoJFyhg1vRkwFRYpzz3EwRFqJWiY8jneMLMC3EaPjgpHhWMV4ZBGadCcUYDsME",
  "key19": "PProenPXMmYo8md98AH6BDB1u3eYZaYox7yL1GxHS4WtsYUmGPnUJVLBEhgw6gSQ7UrSu35fFDrYPsDha9cWNop",
  "key20": "4Z8NrdrriorzUVVUWr1mQGnJMcFhw9WDWZ3KbRpT33eukoiGxPAtpXzR1TdmnHWBWdsCtyBGoPQdpz6KYecN4PaT",
  "key21": "5xzDtjrBunrHnbH39SNgEPqyrcnTcUQocJ5ST7Yxj2ovtWTvQzhzvVc8Zx4N4wVjPk4dbp7wJavBwTUhaC9NxCX7",
  "key22": "35vpBJR4BFsuQfqnTf4ycdmYaFGSMsMtn2joTMJRnpYAFRsm1bwZu7YEgmy81GHHTq7MQDKzEaqirHNFNpexfwmd",
  "key23": "3pkc3omn2HoaVHGCQdHy6TDsbotY8AaTDtgg6X35T8vwwJHsUSbwTDu2pBxoSFAjPzAm652hf9UUGxyg2N6GLhiL",
  "key24": "2QyQvPnrTfEnxMk1X41fTxi3EZaEcbQQ9w8ZEGGJokcQcvBjkyFKME56drZUkgCg761jb7B7av3XTwSebpEd5xVL",
  "key25": "4rhveiK12htAYPxDdccxvYsd4MBwrereUXf3M6Ry8YUKR1uh8f8z1RzU3wb9fpyh8nyiVCGZ28LPWDpdhzmV3jvH",
  "key26": "2Ed7MYq4RQEx5fbHURfHYyfDZaQKbHPS4HZNMkg4BQfkG23PbWpivXuJ9bG51gqCbr17ULGP57RYSFvSoEGhunM1",
  "key27": "3TnoRRYLJMTJLKgT4baUS5GLpfNbkt6sTNB4qPt8BS6brop4nm9JjRfEynJtmvyD6AUg5uP4wtSsaGsJvv7pKRQ5"
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
