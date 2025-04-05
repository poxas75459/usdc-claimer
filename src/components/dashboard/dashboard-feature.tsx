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
    "53UefAvkkF8gedDxNGGTKXFeTKrJqugkL9Qfyne2mjj4GeEmBVLwJ1pG49PBPbhYuNLG8wK8HKdbWsb2yXkwcKBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9cBH7phaUfaCr22K3GW5kKBCK9ND3uGRK2dSqEWg7P4aG1TeczZRrMxfaoWtenWuEfHZB5uzivSJAwAyj9nYV2",
  "key1": "4CkrrCsYkCT6KAdAZBhvvC6LTEMAm9t3q67jUi6SiZvAdBq7Ch3Jkr1SW3VZttnK2odH8w8wAzNCAABmg6t3psns",
  "key2": "YLGsH2iMhuh1kQieP7UxTCf82VcM1XFHDnge7gRJNomW6GBJNjV1XYdWxgbzGxfKoAMFygvz7vYPAiZcqZGbVPd",
  "key3": "66gASzx1XTun74pG9CtLdpgJuoWYKotvcRCQ74KXD3wAdKSYjBnhsi9z9kRyuU3KiYyXgnUCk2YrNFdbxWLvNj3S",
  "key4": "38DMtjKwdRnTbbPLBwQSQmtXhe9Dn9HCfFANaPYTvVrgJafbaqQinPh6DqxjSuUq2VUGproJyAZXUWDogsTiCjd8",
  "key5": "Y4rqoxUgX5GC9pQnoYWqXFYk8kGrAhzpXFtiEQRVaYy6GdCGx7BqsTLfVYMLnYEc5kkPyWZ8Y3cXKreKfn7txYw",
  "key6": "5G7R8anGzvrbyJshn3z2Qwh2U9g87UQNaEw6BcvUX6mfq73f9c1AL1y5r53kQUnzdUDG3gNoYt8E9t5zJEvwyKiy",
  "key7": "sDnaHoJ9PZv8apJMavnbodqCuKVmzw2skSvcNS3SbWc2Yu1vKyo8XXjPV9GtukXzXE6pZADNRRERK6nE6UXsz1e",
  "key8": "3tpjJ39mjoLERxWMAL5qZYB6TKv9HbgLa7CSUX7Rn8ngqVgbKM1zZ9CfWzZ3foymgwTUHPND3w4cgia7QmT3FG75",
  "key9": "5AcsMFXqR8YbPVr2PDCSX4h1kZyTZ2GdD4ZGF8rA4Qjr7CaLGXYgyQXAHM9tA2yeSAjgEKRA9M3NzhTX6EqHvTcf",
  "key10": "2NuVoKhUHbusorCHwaSTz7VV8WvL4MM68tWkr4c1P6h1YXEHjTr9LxNtWGveg1B1CjAdG1d1Qf4nqxk76iYtATLo",
  "key11": "2Ybf9dhZy31KpUE73QzeVTbzcS3ibLC1jfSkBAjRvFjZ8R3kyLpCf7MTPeN6TKmeEpWE5AtndjnUzq7LcyHixe9f",
  "key12": "4J7JHkJdTbHhm7tmJYiPcErjJM6erPe2oGyqF9DCgABDBSn1rja6uw3H78K7oP17F3JBUjcpCgwSeQRuPRYMNmg5",
  "key13": "5aBhcFVfbScGnJ42Cw6En1SabkBqnRfyhdZBDkbjfMQhEtJKDBq3zdCHN3m6e5654QFqX5exJPLGao29KVXJEpGZ",
  "key14": "3UR3aSHmZKKWzxy4rbFRmXC6XqbNFoSe5zjDEuy6q8fuxrLnUcWybBfZ2K8LbWosTtjMK4yNXyEVukj4Bw4Ww2zJ",
  "key15": "3PonBqU7L4e1Nu57XzVRGhmEXi26tPf5qW3nPDYZEimuqM11dugnLkRb26D18Jr7uG9QU3epgCQViea699jPLbFC",
  "key16": "3szJpzrtzdWXHfjnAVoP6wC4zHn4778MNQo9GWAp4RToYhXCwJ9XteeJxyWfuNrntt1uFigqdtLNZxqkYQdtWr8v",
  "key17": "tFLPPQTuUe8yjaw6KXBku94VwRyrQseGKBbPGZTL8QwaB2z8Ug8npkTVLFjicx83MT62zhqPdQs4yGPg2N98wGV",
  "key18": "2k72UPEvepgPqmT2QXJpFzYmpvug7fPPucfyo4KGkVqrnBDgK9MZ1iLnUbkqwTFFTBW1mb12SuzE3NdNE5TWdMXT",
  "key19": "4ataudWUcDwcuzRwm8NaeFbBK8Ajr5c2asT7mRQKPRJKkjmxxvvbocmmxvCmWRYBmouqgbDyAXyP3riGgrryYsCE",
  "key20": "5BqTdSFR3Z4wpM1uawBC7B4QYLavwzpuXZcrjMQbGM59oEPBrwNWqKaB8T6PWXjzyecgXE8mhU556pJipvNqYfpq",
  "key21": "3kk1fFqfphFU4aFvKdcE6aetD9XcWi2LD7RoccaVQ62Gwo6RE5VNc4q42KLigtKm53U1KEJxYohPEHKxjBJxPaMD",
  "key22": "63g8KD9d6LeEFckBy4xmEUuzZwL7RThS2DMFQ6i8yXsxUxw18bWYMct2StSkCcj8z67ZGFUMAQwFYRxmvc4uRKVw",
  "key23": "31VgHntvKNFUWonLUZbsKAhP4zqBc6QnNT9wdQaMzMSDnYnW8tDsr1nZxipj7n3T8GYMNnR4Z697HSWzbhik676S",
  "key24": "5Qk1d3W3nXT94G8qiyFxU9FB1BoRyNUKXwLVsMGToRuwHag8TcA4i2EsXkp8x8Z4YCG7J4Egnrunqt3ujHJV1FmJ",
  "key25": "3GN2JzPZ6oHgVZ3WJqASUA9AjBXed9mTBLUYz7imUMkM2VQPQ2Toxgyd9vYdyCpNjVYUmdhR6oxK4kziVxzN4o8M",
  "key26": "632CxVWa99fbKhjFjmApbWPFMFesovrma9bZ9tygtNH4TbNWyyCvHYTecgUDS4raFUAD6EWoenfR3CXBiPhBfNL4",
  "key27": "2ttUAjG86nKr88APpCicgJ9Zxm7njqA6mCrxDpAoi8K3zqSDWRCxgVL6tRMcAcoCnwYzXBrCK1YAKeu12b9ukKYz",
  "key28": "4qzyHdxn75gkztJ31DMPcQxymMCxrSZx9FdkmYc4wFBQCjcVvEbPQuWp54JYyXZ1aFtP1SAgNnmEDbcL2awJy5n4",
  "key29": "2yRtNuSJ4e9qASKWQmdw2xuVBUHFbfkj72YkpcLARqPLRyYZ4UyNYb13q8VzQaR76RSW9wEgjjXQ5sf5oRZZx9H2",
  "key30": "4zVJtwFoGVntuboxksh6Nwjbv5QixsAn7pyLbXYXi4cZ2SfzjCdrR9DeQszBThLDmvsjJj24GyYq1p1u1KcKT9te",
  "key31": "NCS1Sey8Tr2yZTDWB7bw4J96VehAbZAj9FJzuQ6PUfJJTo9WW7oXvdujDynZsg9wZHCqbsqc5pcKuZ1Ut2cy2Gq",
  "key32": "3hKaqrhNVDErxCG6xcjzCJYzX5W1w5R19BvfRrz19tvv1jGPVQUXqZ7GFMSA9ZF3EhjiFduGGiEFaPKjHFUZErPY",
  "key33": "5wW9V6vGGXsKfYzV15chzSBVAxdLRnCg9CZqedti9CYPWwZaLKL43Bjn5LGEhgkVeZNeo2C8gsso24bybFjeCAuF",
  "key34": "4RcAhstmDXycE6jSZhmkBQW97Gg7W1dLJHHpWfmrU7r6YGMXfr2SkegDraC2Z8sCWhkwB2EoBJxbhXvGiAbiYaVy",
  "key35": "5ZF2FZKrxWtFD5fxAEvhoxFBbZwrHDubCFMfP1zv2yQQnPp4xFo7XW9CcsVdRC9BT9P5vBdxE7s9XewE8s9GM6gq",
  "key36": "z1A5hHyojrLkgRmBTR42nx3jtWmvnU452zrPqBxFP67N3o36SCYjrH4Ds5y8ttySwUW38NbWZmhsdf99G28Z6NY",
  "key37": "rMsqha33TpNun8VpyWmJbh4MannPhqn8DJkMexwUqg6kW2C2nwAdhmrDCTixXCTJe1h6AkUPqgjUMtPfja9vk6k",
  "key38": "3VtP8AsBFVLfDkMZpXYjrmQSxBVVyidjKgNm8ZDSEuFkmWGFVzQu8m2dpbNwoL81tDCHqECFUXyuZ53huKC1NZUo",
  "key39": "4RdUgGXEMEc1hgCAgWKJA7gLofCDZ1hGg2YXTrKfjUpMLAAdnhtX5gC6LsUb68CEsTGHoyZQP5Z7dWSqa2Urziq8",
  "key40": "42DY8DZaXhPibrMhKdfwhoG75uSKpxBaq8vqC2vng6g1LQhVGRthrrSfMgWsUaE2CvRyYoXB5qa7near1cTf38tf",
  "key41": "4HMPWWX9XZJvGsn8YedEorGkWLshDZZ1NQ96supUaHf6woCtZoh8PhdC92Yj5kVDb9Q3btza2WzKrezZszXViV2w",
  "key42": "33W78uxQ8unhCZKvBDWVzV8qqvTeZZxZmSyFz3dQfChotCG53ng7Ji6CSwx9mzGzQAcCLu8zm39bt2sWrDYDx7Qn",
  "key43": "3fGwxzuVSMhScrq4BsRyqVJbckNcFqLNJuzJZunfk4BBfsnBe6kw4jYtVSP2ZTfH5T69DtUPwooB4128nUhi74Mq",
  "key44": "4ssPpcX2du4DxfqeXb21WeXVHfM4NAByzp8HqHb9AwNuBdSruDsxGTVCpM1HunsBah9AecHacNWJVMWLbgeSLamu",
  "key45": "2M7RRgJagrjo4D9AFjx2M9my7iLqm8NDotLGL76Ai2iLppVyBpQjACqrNjTZ8MxZ6yebTZyefW9KRkUs45t2SN81",
  "key46": "598MyZetzA5Ej8WnrfAFB3PV74QmcCFU1Ud3rSNp86mGFiudDMCuSf41rCSCVTASvnFxtCd1Yyfon2RE1S6uXvcF",
  "key47": "4a4N8BhNFE4fggoofFnRnjuBJh36T1rjC8DYLTtrSZo5aedBDHNqDLFKXdPgLKMfGrbNqbafD8NcjpXbARbYiwvF",
  "key48": "5yJEecZGMbzWkzfqxrJDRX4m5GikvBNTiPPPQKRYZzQWs4VDheZDKCYLRdRX2G4Q6E2zfrk3RQVScZc5wLYg9gwZ"
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
