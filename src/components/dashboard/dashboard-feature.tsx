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
    "3C2cYp6h3RTqQ9DwB94MtgyS868T7YcNJPFh72iGQTJJtc1ZXv7npvwsNg9UwrfBC3V46Qx9SXK9UXdH5WUi5FEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEXo3ug7mERUi7U2p9chw2rGRBxDGq3vw8f6U7gJQGdvyMy33o3sciny5ZEUsBCTGMjQyrdjksEpcdZ3HSKMXw5",
  "key1": "9MDc4vr6iEUjozJ4oAKAn2nCwqkTLkDnWqtTEnB5wMEMPUgbUiX7PqUmke7SjPf9kDdpdWn4EZHm6DtVuyzfCx1",
  "key2": "3VGELCShhBjTo637MsvWb2msnwLLfephSofKhoDtJmy9ZTERvK8ojMj4De46aZ7NX9we12owivJviWU1eCFakpM1",
  "key3": "1AvmrAELQJh9BBUpWABo4ba7giUjeesKy3xC2PFTLjdMgy6mDd6xvdcPooBj78YBMh71MuBx9uiAoW3gC92TEtX",
  "key4": "4SqKvdJ7d4NnpMeyUFyZ5JRA4R9JwSEJ7pE95yM7wEpQF7fX6ALJ9khB5MNhpMcwR3J1rLAyfgZg9Qv6YNSU5tVS",
  "key5": "dQXHiY5WHypiTnQsToarMb9DdSwkv85vTiXxL9Kj1RUivJdeYZQiAZrQdhjrrb99tnFQfooxfWZXZWLCQWuZEQU",
  "key6": "4pnZUcppgTiMxntRcbfSB4xmi1TfhPczUMGc7vbHjTAmx7juWSXFtvHuu2XH5SrfA6Tmd1P1uodiXm36yucTkufe",
  "key7": "3uyjurxbk7Fs5V3EcnTBhbXsqKQdZJsexmuzDL5gJzNnag1W2oauHe1kn7hanvpoxVk7EMa3MJUjKn543hL1S8FJ",
  "key8": "5S1ws2rUk6i7kDik4rJeasbuGdTJAZcWejFFTnoJ8Ga6ZckRF2g7uNAQEd53G5iBbRnwKwhKtG1VkrMKvfxkUvk3",
  "key9": "589BdcNqzcZsA73par2ScJJMbMiF5uahLvqm65sEXarUczkaJyCCmi1XWkdnsr42FiVFeFPjy1XF5ZdCE6b9t4mH",
  "key10": "3iN1vsJ871aQdMrM4iV7KTekfzAWzBKkKtKWHRQ1LAof262SsAH16Avw4Qc3NSt5hKKLzNKdcXknYzeSwqJSrLjP",
  "key11": "uoM1b6QK82jcEe4mVLkxctpy3VHEqShs8K9vdMG6o8McTdkXdYAifkWiz2E6pqu84xGno6UHby8cwrUNoBpCDUy",
  "key12": "5pSJ5xjgNRysWVWiB9KqXSgyCXM9VkEx3G6W63iPCB95msWpHbCLSGkirVgVPEnCM8LQ86z3aaYhRZK3T4Bjnc4B",
  "key13": "4tKEDyEs5mhMnVpxNRMQ5gBeG37tEMUXE8UWujzrzHM6b2h5NmKExqdZYkathy3m46ZHMFE4ZgNShdnYqbPE63U8",
  "key14": "chhSZeNCnc1ANNFnnAd9Sa9UCkpe6d6SnQc8MwSQyXTrRmaw7KgLmDS4vKJAzecz2uroVDYpdW1AtVhzMjFwC3y",
  "key15": "2HsASDufYHwz7bsxeQAcuTeHL9ArrReXPfb3Xapf7V4ZvC1MwZSDaVzGF9wzoszGsSYVaf9ZuEeBMRCP4xSUHJUq",
  "key16": "2n2K2hhD7sDSuKwQX7SvVi5EpCwatzBeQLx1KWvqUMX8pUScH5Srntz6SnSN2qswdS1oBgeGkDR9gAsJ2LUdumnb",
  "key17": "2upxyomZKq4LxwbsJqQLvTCPiJ4bLP4ufoSv5WGghDDqoGEjHj1zMZk2f5zWQnfc8cdApc36gkSEhf96ng5M2qq6",
  "key18": "3mV7vQezG3Pw7Vd9Z33nrNopL5ntYRLJ6k6F33YXFgAuPqA5Ba1UUCjPEsXaNMNt8Y2wLseqNgs3kPGmB13dbPJn",
  "key19": "4RuRzdk8TVk1DHFoAArBekbzx6kG6xukwM6eGcds3jxQbEbCtVBKM3CszefSWnGvizCGLoEmrWsp7fm9e52K5vAt",
  "key20": "zqSpUuCPNpgcnM9PSn7yQZenc6LsQisSX61ZwaF8a53KdNpTaGbvSrJtWLNuRMtMVwqgbtmDS68KZvBVzZP4bfP",
  "key21": "2VLzd6QsMBoVszzaVcPZ1tBYVu5FjDjX71pipRnk33UaKEWZyx1UzdyjGoBuuwZ4mZ4vMfXShuhjuS68dfbySrEZ",
  "key22": "5dKHbuFKe4Y9jJJu5yxt1mQjj7x43U8GpooyXdJpDDRKUWrBQeNuzfsDbXxk6fACQ7nve27QFtndUZnNQamA7uKa",
  "key23": "UFAwJqdpc777WgvhWsBWdNSUHoggVgz543QU3CF6wSoSyiwXpKWMt1KgHdk3NDJCgKLNBSVcSsQkwqRroQwniPd",
  "key24": "56yqot2Rq7BwPiiDnjzjf8NSRp1u2ispMUnF3vi2vPAJ5uWkKPzRCKoh65ZFfjD36WohkrJfMqgyVbtKJ2ezDTH",
  "key25": "5SLLagLu5YWjVDmWKgVtTqSYpgq4K9zwoKBsb9RZ81cZx7tNcRtdP7q51XwsLQvXZq7jDFKRP1cGxrMKu8VPX6Rw",
  "key26": "hPsnF7p9evN9XQVMaGE5N1vngFvJkSvgRdxdfg76UcRbtqGQrdfqqzTQVsCFPUtcdzeMPn24vpZYWnasN7kSBkp",
  "key27": "gseRrpqQhyTdDYrzobbKDs3kTf47pTuha8G39RXbjb8dhf82ESjnWb3gKUinQiTDeb2eKXv4heRcMsGxJXGnLos",
  "key28": "2k17E6cmbdQoKhiabVfPWUMrqFovbScXqHAq71UNENgKf4LDNargrNsAKf1Vmgknomh1sDbyeqQqkogotC5UoB8C",
  "key29": "3huU59RkPJbTJFizowbM76zB9BVhD8LrWp7gwhK4zxebBDg9fp2vA3yBTTENqzyCcGLTnoiUfi8DYoZ2fWe4n8Vs",
  "key30": "5cBsG3RzzZ6qok5nx1qDfCtLMGHvYnevhjpCC8kkQdHyaU7e7pp8iVskPEWQ1GDNpVUNoP7ViBJtx6PBMNorVQV2",
  "key31": "3dK4B6bGp335SPEqnp9grXTWBZeQ1VdksdzNxChgtzaDmpvNWPPJUeAHgsUKoderJavNhDfiLjC6snBfScqZUowg",
  "key32": "2Quk56rmmxuAdoW5aEmNUojknxEVBZ6M36c9afiR8vqQPD2gcWsBQyoFioWVvZbpqTVa75YuqyCo4MCoPRG9vQPD",
  "key33": "wgoAecEHbeBFuMmiDeeA568ixTW6NDVc9Gx6zGSkR7s9PcNkhg6CfXZTaDkd9EMugComdAoycfupvkLBQkrHwvy"
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
