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
    "5g1KH96GSmoJa1aRp9VeRZfc5FcGaYENc76Spqmns5eAEfNUhYUuEBcJSTjSGTu1bt8qZBzGDTXwp71eCUQjTJ5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cGK55vDCh216z2kKyyL88E18DHW4UfXeMtSbhxbEY1AL4JgcgiHSn2u4mkPukRqC5EwVN8u5FKvUW9LfQd5E3J",
  "key1": "7hRSK2vt5NM4gcfsMVceyNwXbCk6SEXczAteHoey4i4dtKvRFznqu7xZVLN2KaKqZjGumHTqsnGhedxZnfo5w6s",
  "key2": "8fZPqgUWZL7R3FwAv1r1GFuqd29p3PjepS86MfJfBjRmcmusk99nzUdzxNPjMvZervhtAXvxZMwQK1CXaVscyw6",
  "key3": "4hxKDA3DU8rSJRNxCeoKme7NPYaj6LnjcZz9Sa3o9iNQySiLB2Anb34kdLZBVyU3z8ojrcTKC1s7C4BsfZZbjJBC",
  "key4": "8kJAeDSxwryGWipBwW4GAvdwRTRTDQHkhzb8LZc4jRsdqxD1V7StZVRstm1nu83iBVEcYRUvWVL2HDwYUWQCQUb",
  "key5": "4qnLAurip6qUrjyyvww5UowCTWcCwzW6uyQKD2rcMtXEYHaSSJBRHud7KvRSebSv9Af2ibX47LVE4qRkim1s8w6N",
  "key6": "4sH4vrXzwSbNN5JpZWZa3uygjLGHwnfwc2Xj9tZm8pXVLcygh7DYemThepYrGcLLmpghuwTRwnNZfenJCadVAsaB",
  "key7": "2NTY7yAg2s7Es1G27ZtopJ9FaPUBMF6BTX6Eh7wYARgfcZjjvTzrsVPGnfLVxPFWYaZTuW6pmFJXZLCKJsBPqvgE",
  "key8": "2Q9GQXZHSvfXY5vzVV7wveQnJKNC8i5b47BQt4gEp5bBD2sJ9uvqR8JJKz9eWJ5gUzw7adt53w3mKC7Tq9GtwMhf",
  "key9": "4RzvS1677KJBptXkpg3FTde5jwfmmG2pmuCuBc4QPtDtgFy2edQhowUFPwFQ7B52iKSHTrxcbZYJ6PmwMF7D9Fsf",
  "key10": "59bo5CxA6V58mqZkmRx8TsMdTJy3dkFrwx6b2yp6sj5JaawrhFc91sgcEHwkNS6Bd3LxyT1dkZFty1A6sBUgT1tF",
  "key11": "5U4ifJ2LcyY1rBSFNGRciaUNbW4X6YTPBUdNu66rTXQgBKDjrcTfpmYkufSkr3jAicmCo1kjADgX6b1UrLVbQo9v",
  "key12": "xU7GQLGr8zEtxevzp5nR8tgTskEw69W4nzQ8oUY2ipUPR6t1Ta8BabypCBNsui9mNZRtH2wKa5SmJzRadwipGV9",
  "key13": "VuxTpgLzfyUj2qYSUwV1cDwePd8Eq4ULrugUtnc5JRduKYn63Z9hDHyFZQ9F4cfSoMR9RXkvaZk41c6Tbnqag5M",
  "key14": "KWUyCGBdGYy3sxcDM95FGv58KYqavALXonHjtQnizYEeieuQRr8v1QUEzBea9nr8EgXhCCXAo6M19e4Me6bZ9zC",
  "key15": "5KcpkvJzL9gcEWbE5bzZpSgEz4H5JweJ7jZyhr5gHhxoprX4TVtpPzPRpwUgkVntwDuYYVZa7pH2ZoxSbtm1vwMA",
  "key16": "4bawAWCqfmQygXgm7rXe55FF87Y1vwvyFU4ZWrXdC1VSUuhe6yAYMzJqTcJKwGuJSMUVvhu9uVjiW2udfCApQPbT",
  "key17": "64NmuzUpE5ojnYtiPSFk2xtgXbYJJnumwwYMtaeFKAkxcjovhUGEc9ZsQg6T88Mgb7aAk6jKMRi51mFNzH6w36FK",
  "key18": "55xNPW5vvQV6m8qdrPsnyrHSNdm97Prj6sn1f4ForLozuoPkfAG5pRt25Pq7BkeLDSVfQvUWChAocuE6TrvJnZq7",
  "key19": "583NTu4Sgic1s3KX41tzEuDLgPmAjQsi8tbEqhQFw1Q66gbXjsTzVxUnUpLWuX8FpDCuD7mxqfETTd58d1qy3x75",
  "key20": "4QcGzUoZEtLyrYQxpU5Hju4491adfxb6117Vx2AMno95K9pNaT6pD2ohm384oG329Lke9UDJhTpuLhgMLmqxVjdo",
  "key21": "peRcX6LtdXYqDXW8HorQMMB9MPpmGFPBjGCh6HFMHdQ9Cpt24Xf62hLexxFjoSLUVt579jdWntXzCJpW4q93TCs",
  "key22": "2JxDnNR88McrkkiAc6Ghhc1J9Rif3XkiUM1gNiCUoga3puv6nQqLPMiUsJQToSXTjMhEfB6AcAa79fvcSRpCeXNp",
  "key23": "5jeE3HxKo6Mi9JptbNHKmZC4uPGQyM2knK3zQMMSGvC3aXngk5x81RCNWbjtrBssyf4xxEvzYjSdAizpJTbWh9Cj",
  "key24": "2gzPqwAFrx7YdowwMJcaoecXmQsr5v5LNo6VJspj3MVjeyofSSDBD1ojFTPvwG7Hsg59HwhX9La1QgAEvrEThUVS",
  "key25": "3gvkhmRB3wrgkn753NMA6Df9eAE4ZeEbCpUbFqF2EE33Hjojbdzzt5CouAom3bMaLccE4PsBFqPfxHVFiJ6bq9nF",
  "key26": "5v6azPB2DoGNfxEU4yAcLeZ7qQ45mcRWkCDFks1RDu5DHkYFLcZGM8JTXfGYtRkNiRhkfeXuWJLFyMSuCapSVjYa",
  "key27": "2c54Fbgs8H6KdNTyNkSffHSUtL3UHTU2boQbSAYHv8ikNcX1VLtCSXHkRQPxJD7QsV82skNnBJKyDFKupNxPMz2E",
  "key28": "4n9TnGegXfSTP9inAYUw2CTTV6okL3YvsHJ3sDto3EDQmfLFY25mkoN3Yvhcv8LFEbBuYEHA7DvdtRP34g5yYKNj",
  "key29": "4CsAn5qxwXeajSRrsKMvhRUcMDGkEi5KrTS8teuBEzdPxWX3DfjoNWXf9tzH3bBV5t5MTcCEBA8yHFQG5Cn4R4ir",
  "key30": "4LgG5c4qxTg3h6WApFBJc3G4wLMisJzjzhEi76mGRL5jRq4wQV8ZRaTrxFCLFMZc4KyV2zbDCPtWkBFqmpS1aR5y",
  "key31": "5Jbv6MLcp18sbNoLT8B8b8fKKbqFyyahcDXEHVSgLS5LPUiE9tjxfZhCFmCkToL4F9C3EvgPqwuLyKVQYnUGHAaA",
  "key32": "61pGqpDdUqQDFDi1xBDkVU83iyy7JZpatA5G6wdQCGVr9FDXjgezvzQEJjfjz2WMft6hhHuGKTPpo8CHALHNjrU5",
  "key33": "42mYbmT53obczNcrhBBsPZpmDgpb7js9YxCqEWEQZa4nQk8eN6EkJPgmtNhfemMdBPkh91WsCNwwcYLAQPgtXSge",
  "key34": "5CUFFwUYf7ATtxDSrvx3GuyMvS54TN92uMMLnPXowNm9trr8T64tV1ppJumfXLchbw3SGbkUEhBus465YwxZW3oT",
  "key35": "4HRpw7QHiV47dxWavyRSRhLs36Q34rYhCedDNnx9tAroXGwhNE2ZcvXoCK4GhgVcmMtiUE8ytN6djnvJaU7dbiXb",
  "key36": "5cNBR34QWy3zc6gmArqCtkv62B44qQdVcFm79kXzpa73WAuzisLiFpWvEEys5R1P43pSUKcCe4v4rfpm7XBVw4Pd"
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
