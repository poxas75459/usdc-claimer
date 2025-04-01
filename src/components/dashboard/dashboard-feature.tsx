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
    "2pDSrpWDANySm5uG6vZ58eiQBNyaEXgz54kSA5EkLmnxsvjHqethBfMYDyYLosZPXidGoNKKHatwuop7vgGL54SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22axy4MqL1MdVaxR6RGbViBZBQRBY7kkjkvz3JKTvbxZuFKEnZ465md9xdvDkLS6BU8ZNa353juQd7VviAcXHUHd",
  "key1": "4shphXgBz9PGynBPiAQ9bbmGdqyLqeV6NDVUYs1N237sLAQT8KYrPD9AmK1kppmBvmHwgYeqwrtsUziTKhjkoZKK",
  "key2": "3dTJ33FCcMZtMZirUzT5VGTATMBnGjKGk9dkJAwwizEcfozS1S2hCwYrsUqbM3mg2GEL1VjdUk8PFiqWeHSEPyiS",
  "key3": "4K4umMV7vRMjMUViiUoq6WcJHACxDfSC8Y91N8D9nYeYx3DdXhpzFQ1pFq6C4zqNbPBGMkfaHyrumSHZJLLZFvVR",
  "key4": "4RJ6yRocgvepXKXbBHxZhDcVtacVWrir23jT76NzSLmjMYx61A9AxqKfG6EgD8nmuyAaEYYgB9cLV41d5nQPhsCX",
  "key5": "2ZzXLPEUdynxTEAaCrFqEbYoEVAwFeeRP2fp8JCMfhc6VM7idN2bX6KAgEM3MLDr5f57Zq6incpcWm6fUJ2h7bq4",
  "key6": "2z1bk5nsvtStqpVpny1js8zqHJY164mWrCRMrhTxB1qqDTMYRvGyK2w27LztDjx1kfgdtEKMLBgrqdKUnoVydesd",
  "key7": "5htAgdDC5U8y4kppNUp5cXbdH8jP8bxKG7QQp3gd8WCCvoTRGBqCcRydJoGuDqx3QTgXgVropKLQKRgx4XZt6iXa",
  "key8": "5r6Mi2KT2ewWD31HAZBTDzoFAKEK4PLxeoaeCTWbT7kYW1NbTEw1VT41mBHwc8Yqvio5mhMivjpHzb4LFxRKqTJU",
  "key9": "37mCL26oZVvzf8fcQtiN64jro2kNjXhzZb5ueFr58eKvyJPx8p6dUHVuXxrQwvRStjCSDUhSAvgWJgDqMPoQBq1X",
  "key10": "3v8DBzpy67BELRGEsAjXRQfHGTCQDRzBzHGCNaa1EXcSfva7cdZuEqYQUQsQhYSgwZs5NjwaMSi7mFUtdcmSDkYW",
  "key11": "5TVSQ6M7CMfdpZEUNf2s7HRgReAwub1u15fR6R77CpRss3PqQUpqAmdxsUtRDkufWwbxt1XbSUmbRHfPjUXC9Thx",
  "key12": "3RsFheYDYVHAjHuK7eji7sm5tfLscTkTG18dXfQWq1E4NxvivLuhBRwZthmy5FGN1oFtT44bxiTGGFbiVMiQoVfU",
  "key13": "tiBSxp838PHeojMK6htKUhzJh5p3YxrNYsBXx6RmsprU61xa2pueVoyXtsegqn1iq9HBGrbtQpsZFZXMg4J1xye",
  "key14": "5AbGtQLUhuPBW1AqJrctaiPgbR3cSG5ek8mkvZk3JJJckpZ8KpErCWSjieAkTzbD3fBPEB7WcQ73thEdcxbiyjyA",
  "key15": "42Chd1oMKkFPrJgJ1JD7zuigq2wr6AgmamkkDRdJ7SyQtjiFZj2gzbhAiV9wDyom2KufURewKdStLDApzroGJoQH",
  "key16": "2bUVfpG8kEc1MYka8FPtkxfJ9QjhHmpAueqW3imL63sXbQS4wisCvkuJgnhU3URtFw8AqH1Rzs5cSXgWhXK1anxQ",
  "key17": "5U4coteReCMWnMAuawJkveJNEPcXosewGK7GSvV6CAHid7ouvP8dTBvnUEVpPDV2gSCSJSUBLDJ93dKtoD9r3N3B",
  "key18": "4gKgTX23spHtJMLDGjazDk59A7CkNtWxnbeqBz4ZTEZ4pz4LqcemqeScFbqbpXkj3zRtj9nYZLj1d9cKYztqwmyn",
  "key19": "3AuQS72dpwnZte8tswR4e54pjL9NFrpFa6SbPzTjKsB4guwqWUo2u2xk8XvrcB8WXQNdq7jDX1JcotV1pyazTZe1",
  "key20": "5jcJqfAKc2nfok1qqbxY9Dk4F6DWJHj6BkRr9BLyEwrMLZT5SyjVhm2pJspr32TozHdWQL8EooHan8Z5Njt54Cye",
  "key21": "4iN1aWExZxcaKHXZao31C98rHwTqzPfwTUBkYgvTeB1iSs8QhpWFv1rxyyuQt1875GnCknE3BrUSUtPg9bTbfntf",
  "key22": "3e3ASE9QdaFqw2nK3FwgjtujV5cu7pivDXxqvNoLYZihZhEw4Hak2gYuqYXmzB9jp3cXsEapDixGUoQus5AfvzcT",
  "key23": "3YH2KgRXJVyb3Agnnc9sPbU8hAKcZpfLZxaSKfNAYg54DthT3zUD7gdx8UGseaEK6bwEAfmaiDF2k8rp6rKee3g5",
  "key24": "58ysQwYSTRPLuMSEfPgono6NUNE9dA7uxFSgVuTcaaeodkQm51os57xQKW6EXddgneAvHNeDcVASXFj9eyQBsYWU",
  "key25": "59BVYAQw3pCHeizDQrWDr1aEhDuu3MnuNpTGNeT1Hk5qRA3y8X7pSdTGytcs82rcyvUJnx65aqdsVcdHeAxepzHR",
  "key26": "2nFf3gePnSfCjhbr7frQaKUp1MNqh4txqwg63TCR5p4Dhxr25Hb8PMRPsgkfswA18M94nGSNTs3GwwysztZdfUmf",
  "key27": "5ACwUveeVQtJaDivVAA2vDLLsNNyb95icjZjWgLUsSGnkLSozvEnqguNPwLuw4NJxZza6gTxEucb1bx7kDQ8yP3e"
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
