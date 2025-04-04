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
    "2117oygwNXxfpM3RuWL2PgjmASoiYUprF65MiGTwpumizNygQJA7h3Etf21f8Lq1uinPoGRCJxoxXQmWomqebgff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBnCBDR5z8fSKm4aNJT8TG7fXghionAszSSiPpaX132SBhqZVVeWPsyYg6xKZ1NNabdNFeLeoNCkdevaMDjtFFi",
  "key1": "59XMiucujisgzbSbE7o812oBQRVcwGPuoGuK5qeHMwWsRrGCoE8wd1J2t26GwrdSPmZ6QMkgqvpjjpYvs6zRNgyS",
  "key2": "3LKWzNf5c4qQPHXvz5wnTsEfMtZMfbcEJg7jqFyMshvD8DBumXgp1ik6HcyUCScjScHiRp29aJWVqQtAzQ3US7Ww",
  "key3": "66Fw5L6CsMmvxziGgXJhF675zKiV5QPkfgUa3N72Q8uvNcK4RFiwNCNwffggQg5yBiVRufKMQN9inumNdfxPNHPi",
  "key4": "5VLtm3pWE5tXZq5PTDMZZDx54QreC8QuCVhhQ8b7kKYLycRZxLXuwr3VbT4TcmCd4ELGKS88KVskceXB5brGoVc6",
  "key5": "3YUJZPMdvaNuEJPthhLFVHvZfZnmeh7q8ddtgoRJqoj6dyem3uGxSaJATnj7y7V57wR1WM7ATtVmcTWLJP8ZYnH3",
  "key6": "44uZpUrExqRb1aC3dgzXtMjXmFmTWZ4vZonUFMK68k5SKguMb6dhPAPxdd2orYgRV7avZPY9w3TwrTjfoRnKpM4r",
  "key7": "3ghAv8zgHEG3TAFZGkXbwXsidCagX7FCzrURLDfia3QucqFxRji4XkA8mNrNk4E65Tyi9pMqdoKe3qgqHtTpfafS",
  "key8": "HzvpNGHUHPdx4fqVKrz7vgzZARV6skwcUD7g4Hcj8fCgc5i9GyX31qMBQGmXgDYoDi2zojAMKdWSNSWFfr2gkU8",
  "key9": "5wmCmARsT3kkw7erHwfWf5QpdcnPgbz3P62xZ1oQhqQ5VnMfgZ6KNFiZsnbMoVrSpLBb7Qm9zjSS1xLiReGs2DfE",
  "key10": "3H5hxuCio5nHEBt8zG1MxNEAzyKmJ5Vv3Ew4mnFEiFCNGHF5XGQZXTFFpX3TmgN3AG4NcZySdP76jo5XubwtJRNG",
  "key11": "5nNoQXwY2QSCQ2RBoJwApp3GeHZy9APyXJChqcTCFmATJNaG6ns4jLGzofzFRBGdNs1a6uypTEcMvjLkb52hry4X",
  "key12": "sY1MWJuFqR6MWN2JTnBpZZBHFU7i3ovW62Mh8VjaAP3qrsj6aX9WPnHyFKPk3EtQsqVfdmNGtb1uACMd26pKcNk",
  "key13": "2DC6bMyJvV33R7CCeWbWvsMfUnVu4FWgq1vEPuDHYukw5hBPiJuP3afCD4HVeFpVsyXEFysqtnUqDYvCaV9aax3w",
  "key14": "3YSWDp2PKkqwtkKmwmu7N3AwUA13m5Gbi64XGWww1w31rJhjeu7YMAzihzVXRTkjubvUnggsqDjRG4wN5qPwZk69",
  "key15": "2mzWDsLc127otGNsmgbzwHebQvP6m6uydJbMt8QXyo1i4VkAVZUi6iRFFUFGmjejgtJT4QoNZD4Rz1cGaM8Q4UeM",
  "key16": "62R1FoBZJPxGpXBi2JFFjWoJ692XwNu4is2eHVeK8VQoooHmUNvqV4XH6tNGm3LU5a41Q31vMvkVm2Zi8AGj4QPX",
  "key17": "fFiKGhm2oVy2vSCvWFU7DCyWshu4J5PzRQxbzhvePk7MgPWgnCYEfF1rGa11Qea55ixX6fiC4byjGzgCMi5P4Xk",
  "key18": "FZgSsDhkzGjdyEPEgThDqQdsbsjR4RNng7eKhuceFxLxe5ETx8oRg2h1qtp1oAQBmkji67rYePumqCWCBjkUn7q",
  "key19": "3C1rS1Xayd1T9Sjx7zekTfY6XuFnP6QK8DTEnZqcU9oGWKdgBw3HNkDGEumJNbCthTfb4S7qGAFp4udug2ePznM2",
  "key20": "331WhEAyKMR9ppNbjE385tjFKa6myNtL1ukk4vkP6rkGSDwyjKceuPzJft3PP4zg5Xa32pMpibaYZFjqhGgiK96w",
  "key21": "5Y5JDuMQ5dYqirrrdVj4kkyFo8NskdybcnwVtaCB1ERjo3YkotpP4J5urarUBCn2tn1C3cmK5KAg2WcR3dQWcqdV",
  "key22": "3JPt1Du5rou3xNF7YXi4RAVdGGNQyRyNcMBrZ8TsWnSuoprHk1VE7xhp5Q1fjQAyp6rJGwrnWutoTEerAWJ4nMkh",
  "key23": "5omCKsu9eTL2FuusWJG8TcYeRBWXm62S2sAUYshWiqTj7z9v2H9YV2rNgJcEjGiNmzwa7ZW619bQ3P13MLSKeHgX",
  "key24": "3xf51CyYUb2TUdSswL6XzeCj1beniDzNHtokBFKfCNh44X9XGArwcwk6WkVdEjSNLByy8XQtqwBhWbhUngyeyRqm",
  "key25": "4xo7Na7ooTxju2KXBtHgVsNTreQ9Q1jwESFzdsGNgn4VkMGvigyCGHTmWiESxgjRtvaupX62N6F67GB2mMJX2m15",
  "key26": "5Uug7NBet28ptuu9wPnXekjXUb6QhAzVSEShiAp5BkvBhX9DyjPAD9v2LyrBQMpqTG9vyVLACQ4nn7TV83FErH9d",
  "key27": "BM2quUHycWpSbm4iSsHQTvuJPqmgZQzVmKp1DKMDArc1jQ4PpXrurDZsheBhrEXvmMWkryMuidGVu6e6JYKfWMi",
  "key28": "5oNqbB37Wh6rUPP5tJXjZQuUaMU4ddkZYkrp2hPQciH6Gtvt1gqpRRV2Zev3hgUc1zFBDTtkfqQxaC3yRsLfGaA2",
  "key29": "xHQzcytKQCeatVwzEhcaefn5sceYHXp4bYte5WL4opJAZ5xQVYB153v7U3jhRNd1DQXjnMks3bzBCSgEYidaAsi",
  "key30": "4wVQ76yn8YMGDK4LyJHRon2pyr4tnauQk474xQCnaWnELKX8QqLixYs8yBn75BPiWVpCN4YPkrSvyZe88qvHd2hc",
  "key31": "3jVhrCipDcJ7pZzcJY7NmBWCFd7DkrEXQnnTi8TtiUk9EZELAHGYfcB9oZCf8CjXD8Cs6dGWhQYJWahtDLAnuSBB",
  "key32": "59ABXc4iaX21D3BuRYi6AKT3cpG9p8mbRw51QdFBTecbxpMMiN3nkGuZ7aDgLddCDNhjDYe3rLKxVFG7Gd9tEfXC",
  "key33": "4uDCp14ewQqGNp2iQfTdNsQzbVa8ckDXJAXstuEjwRkPvL87R4f8J4C5Ne8n5PjT3sniahMhUnNJAH6Tigt2JNT5",
  "key34": "zx5bAm8MyzNgRNJqeRJUvXBLkFEMmUYdixPsgvhXbrUCW2tbFJSLUZBLUgnTmngeFMRYwHukXexBBhxYiJZqAJx",
  "key35": "37wwsEpjLs2P6bLoqwEDRcA6tomQ31TKf7UVaC6sgizJPFEmaAsRNG5MMZah4JGzx3o9UFsnUrAgeVB2rtqRWdbZ",
  "key36": "oPEL15HU3SaPW8Nbm3xQ6hXs4yHwLHBZ6QC7gurJnrz3F9Ez6di3NNNAH33f8bN3Xc1j92p2RBdv7v8TA6iHuiQ"
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
