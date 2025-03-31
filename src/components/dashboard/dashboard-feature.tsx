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
    "22BWc7cQ474Q1dk9qQwmgByD1a2CiSinBihzBFrYY2MrrMRLHE6U5NZz73NrbmpkdDB9kjPiVsr5KhxjnJzzT4Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HH7zdaDTDGLMxRi26HgkiQ311G3EQcp13p5gmwVc7McRki1mhwc5LHydffBnuna5PGYdAqQbT94dNfx6zRkY1tn",
  "key1": "2pqfW8wGKnJj76d1bHvGfno5TZnPSCULeWxH5XqrjcKU2zYc2MAZYqM4YQUpfdaEoXNXMgyVBKM3HEcxieqBNitk",
  "key2": "3VVigQbT63gna8Do6VC7KjiaNrQ1K4Yguggapik7bqkUExLZopDmtYwXRmXvke752sF7mdr1TnyeUrCCdXHdQyUa",
  "key3": "3GN5msadTHuAaxXXDy9XfwQNjhCHG6cDVfg23fJ3Toj32Ej16qWesFwVc3rwJZJNKkga6DrG6uiJ7Sgh28WUGuBU",
  "key4": "d9o6NQFhG2eoekhKBT1GZ5AkEBz4PwLz9fJpGZNj9xQkThSW74oHTVTmYy6Pqu2gncTqLFgS2FF1DNzhRf1BSeQ",
  "key5": "2ERKKhNsdPoefPWd5PWCsdRdM8Y8figDRPjEQq91oE1p3rqqPQf4ri9uVtjPDHTXMAKzTBE9J9wfso6DVKzdpERh",
  "key6": "LdqWwmZvqhV7xhbx9zWz4e9vVq3tEEjh2K5UoTsNgSqx4zRGKcvgD7zAwxt73mhYXqfFjDifwvZSSqRVJX4dSKm",
  "key7": "67jxgsNs3DdJ1KPz3u65yD7B2FT5Gm5iFfdjkhgSqU4gDaKWpyPN1RocpgvnNF1njuEfvnvt5JSazZ6yEmp3qLjK",
  "key8": "bLs5RoY5Ufw4ndU5EK66MUewzRja6wxEY8tdpU4ZS5cGGr2tKBfKgmSVS7DmeLS9YJNUX9xXxn4t6zB8u5i3yRe",
  "key9": "3r82DTBvFhvEGfCqxrz7mxiVFPDHGZUgG6mAiR4MYv4YiuJfYNZMp5CZgAHiK4RjyNKgZA2MwzkHsmKPb7vJpvGB",
  "key10": "2PXzaQd8w2G4Mqf68Ze1c45F5Hg4ViFD4kfwTEQWKH7sE1FHZ5zHxCDWfYVn4j7CqHtwwW5SRKucka6M6Fx2cECJ",
  "key11": "FV4ESQe9wZxAETmnCiDRBsghG1MpRPWhMxDN6TA6Yprmp4aF3Qk3eNKm1W9dXiRWdQCnNWtjfcDybE4x2L98Bvg",
  "key12": "5jg6ownESqZELYC7aMStctVaYmcSKj97ziF5GFCeaDmL8S2srQ2SNqwL6rTHm8VWx7eqwDbpdV5mUZkwKJXbXBET",
  "key13": "4U9ao5iyoSw4GGvLcu24HaAMrCGAw2e8xSvV49rJFJVYkJ3NMzUuLXaJpnXeinS3fERNEeA2Y8LpL8Fhy2Fhn579",
  "key14": "4DTjUzAxSbwPbTJNYKQtttgFYtdWTWjyfhDVL5aZAWD9Vr71fwLgjuqvi6U93zuftNcbo9C2v9n5HvoUFzx1Bvmj",
  "key15": "2gcoi1V1dgwj95oD9gUVWxt84PiQZXGyjpzBKAGpF3uBVJ3at725hP2bCzWT9xX11rciHNmNpoN2KFWC8wZF1iaV",
  "key16": "54Lw5pVwzxJK25QKTvzoeUbtaejVFG8oSUhtH98vUaGV9eMk9KXCAM6SbJFipYsLSAey67BZAwnZbkFW5qak3TFJ",
  "key17": "4vtut9vkm2jjuEd4Ph9oKHJoyqQ7AsmEKPjeEW6jczupL9DQTf9kCbRAPgj7hLXPsdiY5UETbPDf3sE7AGRFd7Lj",
  "key18": "b7aPaA9BkqaFpiUe8Ci4kSk7JVehBYzunMaW9XruEmAooPtQZhrNhSjs9jEnWRx13wdT31TXAsmJxo1DdEw6Nqh",
  "key19": "5xkQp3i3GddFYPnm6cgrwh4w4beZ8FGxCoEEhfsce5UHVsgtEMi4f794q2SQcqpSiTMUzRHmuZEiz5p7uKSu4rkZ",
  "key20": "4CBPdGfDiSGtJHkcsPJ2iCmLVWS2Z8tjCYqdHdZzGcr5ryoB3C4zcupEUXFK72aqd1ryL7eFKauKUrPyyevtd5iw",
  "key21": "4GZXDZ5TGYw3nAqzDAiQCxveq9GE7UrpSvpVhvavSkupEhVJHrsRf3cbX2Pw1oc6bZwSTTLvBy5PXLPCkyYxt2gN",
  "key22": "5nZwb7yDxUCprZKBzzF5yWgiKafye3LhL242R3tTu8Nbhg3rrymBqGP5r6owniaW4L4RNHcciMBaAx95yCYTqfBq",
  "key23": "4WCPR4GGxz9FdGMfYDHr1jPDkkDxzg495c3jr5FH9dtJ3Fc1kWwtz31N8fYrv8KxaN4DVYAXWiQk8y9wmxg69Ff2",
  "key24": "4jgNykUjfLczQCFJZn38MbZQ2ZoPov2fbzS522N2taBEHjCSBVdnDqAjMPHTYX4ox6uzkrGdv8Mn8w6o1XaADhMD",
  "key25": "fBy6hyMzLcQnjCbPaNPyTxYPKTghpbC12hSEdWuknhQJFH8rXVm9KZ5SrrHYJxmdcRU2zMiu7VJM8VpSvxjxP6f",
  "key26": "ZXybrw1Ub3zSJ3AAxDZdf1xxa3ET3s1FvXq37waKm4csHigfdZ25poj4y9qSGJ2vznrMdTU17okzQmDTtHpCQ1k",
  "key27": "2WXMzBx6MiQqVBYwi6AefdfsKzogvQ72YLVaXtrDKa1ACc7cdVqTMx4FByRpzvFz7DE6HQpDF5YXoX88n1jprHyL",
  "key28": "zPdZSnpxo6XpLNku7QJg2DmEyTRq6hBH93gT8PWCvrHy5xjDW9RSwEA9CVpqnzvQnjFbgrSeS3sHM55D6yhjU6z",
  "key29": "2MU94ocZjjdcj2xae4JM7HKPvtECUPrWvMcSDnwwX8rpubwjemUst2kKNx3PzD5tSkzGRUyfML1W3iW133oXoDcs",
  "key30": "4kpdLgZvkfsPj6ZfEbno3pYKgsrFi7DGfyiiCpk5ApHy5ANGi45fo1pBkcVzxW9rkHaaiBujAFsci26B5J4SLL4d",
  "key31": "3EAppsdkwUKYid55zcxZoi8MpYDQmkScieYMsMeyh11GtFFvLPyWv3WUSAsqWtzabcXBEN6XW5i5Px994YZYLY96",
  "key32": "2hL4H8CmApP7JCvJkdz131a8cLTEm42JSFh3BvWVn78qianadsTciyjpn7JufCPkQZ2YsZFzJtTddEYRV42jcma",
  "key33": "2hw6RDPKQ53zzhcUGLE85Mz13UViqBt8MsUyUd636fXbJ5H8DwR5YnXehnvncswAPeFJg3qfzcwpw3m8n4KHo8sv",
  "key34": "5xmw2pTNrsd3tZ3yVp2T7bGcjNozS91cW9EV712vg348LoZ2Hydq5hAKXrm72C8JVhJq7fF3Jj3LPJj3jwBM9VBx",
  "key35": "59cewEL55qqhP9MrxUL8CYSGAg27524TWpTHUS1ctCYu8oQhGJADWomkHbresBpTS4Lku7tsqnmbihcPoWSWienw",
  "key36": "3mQqgjZ8vH1agnXiFuGeHj6EqiikNcEMeQ8yqbjeXfQ27aSAiAeZ12ofmSFJYQfocrG29DsAjXnmz5A3WKEe5YLA",
  "key37": "J1WAhyTb2KR7vTxyLP9BBm7HFLavfAEQtcbXterULYryyRyKiugeDtcGwVEWsDQHHKdPDyJ8BNxKAPB72n51XqW",
  "key38": "HfXAYtsFSAi2AcruRNE32qGEE1Mm3mrBW12CESjZDQyDBVeV1QZQcDqvzbjLKKpyKzoKd1KhCvRPpCLsWgJhqjV",
  "key39": "W8u3cGyk4utxXsWZXFhxt2krtKevaGZeYpLswH7HAp1sLz4Bw6Sf6P9QnoNoctuPzRESkwoJqHPZwzVgHZuNoF2"
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
