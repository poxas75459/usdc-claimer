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
    "RNqS8gtQG83LDMqDeuaH6QGKtrKDxkSzC31BH2GGNTeZU5QAThUZekFS7erqVLWZDttfzaehYueaK5yjfm37D5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZMPG93tQdPpRVPp2RQrzyzfsaRU1twWtR9KwyNWwuZA3DfR2TMqXg5L14WDfdGHMMFnsCGHfxzsXHDFCB87J8o",
  "key1": "5pvmnmhjt8z1ZZiHEG7r4kNJMm2Kc51upW1S6mkSAVg15hzUagbbBxR4QLJQfxU6vV2gtFoVp2MdtzXHAV8KUrvD",
  "key2": "5EZ8tMWtHh9FYuBm68rze4pocMjvdxJo385sjvFoHHnaHNoHzwhQitbVQQW8NGudWGKpEtyBzbY1uGRrrmkyagtr",
  "key3": "uvg8A4Ay653hZqRK1YLmJ5U4dDsZmqvRNLkS45FUhNWvr3Gfpi3CruTdqJ6j9UJjKygWaQApXYg2fzSwjidABLz",
  "key4": "3aDJte6iyHYDPuu7oi6m4zjTaGKqPkGxLTLuYDNjgbUDTPjbVy3i8U5xcdYHSsAS832Pwe9gQJKfhddL7gC4X5CW",
  "key5": "3H62bfme8etGSi8hRmNyQb3iUB4rgJ8Qj92RXytXvv6A5vHhwChd5oZNPHVCtLa3mm9RnVbhCY8tnTjr5XcHLF6K",
  "key6": "Z3VMDTX8EogRNbFQZ3CSmU2DPSqDek1Jv8YPE8zSXBs6im6uS9Ack4CsGLw4hauPijvRQLyQw7UG8PbAsABo65i",
  "key7": "5jEKijSpynk7EfyPV1duAVV2AdHxApoY2FH5tib6LYyW5wPQuEwtah7PL2BZ31VTRJNpYaeYyNH4M1vpAXuTQpce",
  "key8": "3zbmAnUj1tjeawgmr51rJJtbAwX27dDy7n9GqVuy4ckTPJehizccxpyxopKRm41s51CR89U2xXiAgacHEzjFSNhB",
  "key9": "39KrVj1t314BqhpsSAPgNNUhoAPE4gswfqB8Y1ZbMh3RvSw2nEqiYarDb5LscTLKAuukrUfujMxuCxhekhSzYCh6",
  "key10": "5GnkMPpMsK1Fu63TDC7WAHB2z7WFiqnKSxYTYsvmy8mwZMeJwUWsGgD35P5dobtibPZAMiCp58aSFRTp5zuJYVCR",
  "key11": "5DcUAyTjGXTCd9pq2tWjzfFBNfaK1V9YtBiYp8GhmNNyrERf4BEhohTQpcbpzkpxEnZq5joSQS8bn5H6Dktd8tkL",
  "key12": "2bGAsz5xisPqtCQcpfcjufmGmTGh6ajP2ZzJQ9VcpzQyug5UxVwhHke1xFE2CvETwqwTr6wHLBA49aRY76NXozJu",
  "key13": "4XnEjySw8L5p9QaFs83iN5uxJn4TzKmv4APMgqh6fCzPCiAQKhodJfj9GRkpfHpV842kuaRwQrcT3rm1AiA8PNqC",
  "key14": "1g9LcB4meWeFvU2iALZ6qK4C1wniAxtVR4wtN9vjVSomPtsrHZtWnXmpfYH3bibusLWLpnZFDH1N6hHBWpxZQ17",
  "key15": "TsLZzpb1yutygjGgt73AGq3kj7f5c8bnYQvPMBQ44ytAqiVMJvmi8Zf5i65QjD9QUr1SVMQR5NFUJu1bZSy1eus",
  "key16": "3SbQgVAVDhTKBEJVSbszA3fCQHw8pKoPwCdGFH8DFEKXqzKcEFFNQgQStmZYS12eFxYEvYBTAjfhsRKp4CLBX8EW",
  "key17": "58vfegyPgiN3V8S75ZfRfc8X6t2X5qsjiq83RDPMs2hAgCy9L5nCbFs3t1ULGfgqPt5nzgoNHDWTE8ySJXCYT6r3",
  "key18": "c321H4itpvZq1dgrtoPV2FtdswfHEYy4vTSUAtUAixbVAkoXDgStzRZhYmbKkRq2cMKFKhcPuLFjp7xSdowCfxM",
  "key19": "2Ryok7VjjRvS9tgMFaizFfq1vQsaRfnJ4TE5zR4FH7XsiWh2ovJM1JzErB6J96RuUpfEYkJduaUtMAna2Dz5jvdu",
  "key20": "2ZH1LivGeCucK8bZzWH8MSvnSfTGmfkBjeevXvPbvkQ2GoxpjUSuS55NZ8KCPyjGWq8U1tUyr7bCxqjhdartS3qm",
  "key21": "3RZWuGazBS7rLnuqXsBQZih2DemULKQaTrQbXmc7A1HgBwxWnYL53MpHtFw1qgtBRkB5NUKXfaL8knK7iprQd25A",
  "key22": "3JBH7PubxxDKTGe8C7Y785TvprohtFqJJrV8uBoxU2bu6Fo4xsrLgj445vLtZoABMebRfShtdNgC1dK2Wgw66hji",
  "key23": "2sdAjLMhFsaYQgJkgkqscZCsuFvL2QWVJZMSdQTP8PLQqN9xyi5U9wmwyHNQHFFBiK7GS6FXaGr2qwDDu7P1t2JX",
  "key24": "5UEPALv5DNjPM8VN5EYH43qSwT3vsxynVeEENiN3LGh37pDf8xA1Xrdgcjp9iCJ3jfr6Z1N8f6uEQaMj6WUfcQqL",
  "key25": "4d3xF6PBF92N3pErzz8CndLvNWXSnrzqv5EGa6ojVM3B7AKQk7daRTrH3FTdSFKnnvx8CnX1FpTGamKagU1LqFiD",
  "key26": "Fwp8P98FEjM4PvCs77uy32H6S94FjkneEsHJDkk4k3md63DJUfJ9exVNNa9XVevbK6yP4gsf85zXWnMtno4Lvzu",
  "key27": "DUeoW3mr3Jkqrm4mFBowKVS7SbfMQLrtEDQ29pJkX1BNwaa9oeZ2QqBNdxtS4ttxaySeoKqC8rC2zAxeQPQisWf",
  "key28": "4ZxPg3SbBwok9sHvhwZFfzDQLQvZdq1yUpdGYp4xcAXeaSVgn4hGGSr5KuS4sPQNArBhjCMVJ9fi5VkFSeTT6Znp",
  "key29": "66Ly63aPbBw1uv4sfcfGcm1Ho661Q2UQhFakuyvzva3jNvTrowghFB6XHx9W76j81u2qkhrbxnQ27CHFZ248p1f7",
  "key30": "awzSNC7GEXJ5xX4yiupByi8dDLWSNGuTavQcfp5GeXzQ2vcp7NqabyNsdi6tFmo3M4hkiMS97PVgkzmgvXBKSYJ",
  "key31": "2cX5mWuYdVuGXJwm3jQk7ccmwTUznMxu4i5PNvLrJZe5MQk7FDRaEaLwXWReN3UXFATAvjKc2JP5MYCcKzL6azfF",
  "key32": "9SE34x6WjgRsnoVWArcHKDPeUFcm3KffxMYTyeLcKz4cvcDYWo4ob4zLJFUBLpbZPiYaSfZWKFMpbf4HeY3NH6y",
  "key33": "5oGxbXy9PKwtcS9C1Ykua6upTQwkQm1HSTrJVZQpd6sVubpsjXpwvA9Hc6vMiuy4M6ZZV1vYZ4CefJvLE5jR548X"
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
