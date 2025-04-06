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
    "2oiQQuaP9pGyVoYzmnvgDtG6nhkQ5TEtZqLwzwpeqcT61R56e2gyLfu2MFbj28jsdbZmiSdeWpWiH5Mn26UoKsgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QesMYKfRQa21kums3RDtx3q5qcHZEVwjtfmKXQGccGHqPfuQXy2snH4zuNG2iuwi1DLfx1wr4D85WvBzH1Ssss",
  "key1": "2LjvFJLuV6mQ1ySeYkCUjBvLvKmp8hzVCHMTAMDsEWwrZMikieedTEApmpVRHvnVkanj7HFwzE6tWxo2btSkQW9U",
  "key2": "519qvrjScqs3r14FnJkyAmUnjdsPyAT3bi9kpotHAVMmGwJ5bnq5k8LGtYM1YaZh7rZsSiL7NumXaMSZNXfKJmL",
  "key3": "4Kf8Jbz8Cd3eozRDtR6RGipoG7yVFK4MYX4CkRp7T66zM4v3Sq995GaZ6EMiLgVkvmvMpPpzzpYiRTFj6qXyUSYy",
  "key4": "4PX24hAnijPNowrckeFiXkA6hqgLoWPSFsXJ6XACq3mq1Tyd2kFkYZbBiVrcaWAX7fvxzsMwqswqb4uzqpuozWkL",
  "key5": "2gmh1NC2dQgy75ZdshPSPbjFEHrvJYPtcmuxt72d8uZj5c544ZKcmAJZBwBfp9oqvWfwUu5Wb1RrRZKvzmSez1WJ",
  "key6": "3XZ3jsaj92ob9DJdSG3PhpdB7E7WkeBvhpYsk18TuZLum8j889sQMHuGeHoibXYbq4NCvAuPBmf3NVFCc9xHhAY6",
  "key7": "587VGwBciq8JFnGDdErrdbmKhDSonAUwkNW9J3eQZ9rAz7LzyBQuqYQXf5YHE3C3SNDKBA7JV1QAGUEexVip8Kv6",
  "key8": "MmNNM6CVd2RHcQAmvhrDDKbfTH7iezEMsLjRj9iHNDBJrmCwj7ALejB4PJyQUwHwZJWf9akQrtfDCsGK9xxsDL8",
  "key9": "36NAYLMpkQA87eL8dyxQRha3RWP9VXK7DUbw32MiHZhL9KGyNaC11zNwGeqdKRgNrfqFagd6PzLTaKPY4nmU8wGW",
  "key10": "zz81hU9nnnyiMWfRRwaGczxEyej44q5a3xzjuK6dG49s1WBJgXVTN3a2Bknfh1ezGYr1F11qEAmTtdPDKbSm99C",
  "key11": "pWN4FavEbvGZCexi2jgae6go5yazz6w8iKyHmbKekkQZ27fWwfNvpAAEunnu8GB4NRXm57dm1FCpPLTAeYi5gPZ",
  "key12": "2hNyUemxtkzxcfJVhiXuthdCkiwrPsLGmyEL2pYXvKbfXPzvGmCWsaajEwabAxdGkThsP4WHBf22ZtnraSVSG4YX",
  "key13": "5b6mYfJ9nn9zoXYwNr52zEHY1qPTtjnVqB24x84nerQp84kT3Zeo5qdMP6V22BsrX5Ycp6XVKwcWyhqHAvo1vB6",
  "key14": "3krABP5SbUArjR5JLmGLUPrULzTLRYynwS7zrcoVdFtLgQEBpjL2FNfmksV6VBDTnpvFusXmuZhY2auhdDZY2Gax",
  "key15": "ynLkZtYpC1rVGqyf2NdgGDT93yofaDLkntj941Tvxc2hXsDwurY17o6xcMAiaBvRd6r5HiCBvvXGCTiDKfMJYAR",
  "key16": "5vXxFh7NaZqQKTtns5bChV24HKjGpUjU6Hb7c3SkQPYijRBgSQPjgXDywvizw56fxfXNF1xN3km29kCXFT3kAFe9",
  "key17": "4189oA5jXGtMqDwBbsVaKbgwo7oRZxgUK6LfvSDu6CJhyQgV1Tqw6cXgUSN6iEkjSMWB15snHp2exV16xY11PXq8",
  "key18": "3XLVCiX9niwJhW4DTpoxAqHx3EFXbt8oxvkKLanpJX8hj7YPdUMMruxhUVWaytuDtAqiKzKnkyWvd3Fz7UvSz2Bk",
  "key19": "L2a4f9VCgeGd3UEpNjvUTT2UGxhS4njGW3Stj3WgD4RiXgyu4dMu9rprdGcWv9Bm45h7RQbbbPRqvgUh8q7eCVS",
  "key20": "5R9byf9MPjjQFNC1MGBNWwpBHK9EDmS74kX4vNrg2RtxrtrHx9oSnN3w2NnSHtbN5NpzWdJ8xKdjwZmNYRqq4G3N",
  "key21": "4BCa3PuM7HrrJvfDTsgkjMuzmfGjtMBPFFQW4Jjgkqqtvm6CY9D6PgVauhke85Cs8d5FdQ8kd1aLhciYYgbbNqCp",
  "key22": "22bnZ6ypzLmoeZnht5VzsEPdNqSsx6ZUNxgUefkxdR8fgpcdDDjLxo7Ss1aHgUqRKFvdUJTgN12YYSz8ZwinqAnG",
  "key23": "5pvGRAGpDCpXDXgWh6vVda2Aq4FTMSVRMxuYLNvAVoYnHs5RD7n8X9RaCy7p4tJuyTeEcxxTyNUBnLPSWkqQDmr3",
  "key24": "kKo8noPEcQnkzseiwzMDN1MMpjMQryPhhJujvrCzj94xigKCxATWXAkLgdwcsiYh9zKoLZrPajEahLzf7Q4t9kF",
  "key25": "2HkmSu9aPz5podxw94CGEwaJ2FmKJVF7GSN4wT4rv5JaBoHUCvEwJBkSZFurDP8Tzu6u1CSm8RHX3XsGQz18inxy",
  "key26": "2jChshF9XEU8dbbKPwKVTzACci1KPdZqE3pJWUeWS925CtyernBiA3txfxNaQLqWtKgEcuPjh5mRNqBhUhyxfaUp",
  "key27": "3dW61i9G4TRFQcQPNsEx13Y6pCF8kPHide659nt6NoDNtHQ1FAMAxByk4b2DTGJx1fyyNrAqpBAe5gfGaQpzy1Wp"
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
