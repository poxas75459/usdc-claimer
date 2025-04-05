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
    "2KG1ELwoe7Po6TaMNrkNCfNEwNbwMnPxa8RRAcsKm9HNUh9sPEGy3zCgBSMruqKVdAf4LGrFRYkUBqDdSNdDygr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYPfYkivL3ErQujfZzJHyjjCWPdYfVbGyURroXtEUr4tev3WiCwmzTZwKvqSMfTfxompn5jXG26bDnoxD9ujo3N",
  "key1": "2SmgK9GBDYwLGh8hrN6z7x7S5TwhM3C89R4sWyctDLEcQ9E8WSmGy4q8vvnrgNEb3i5Qci8GZyTiJqmWV4M2PiT7",
  "key2": "3HEfzJ49uC5oUNzp54jGkUkmeREztGm3d3Cbr3HZ1n8p8j7CkYiXKpGDgveFfUSEdj2YMAXzRZaiBzzSWdhyrTkZ",
  "key3": "5xqft1WJAXjzWyy8EXZhvFzM8iHsWZESfDvxE3Hj9eS5XD7VTvohkvSC4dvpYv9UDHZxVqZnpsfBxKRZg946GMZg",
  "key4": "3p9avEHzAiDVqHw8cteuMY9EyRFgAsKq5APect4aTghtBMdf3y9FxBi744d4q7bjWZnq1jdP8ZQqF4L3wR1ZaR2q",
  "key5": "5xNXc4LRpwyqvdpG1to37CPdHbgavdSc56dY9McrV1RrvUZhdhBBv1svZyXx7g8DTYJgdmgdWJLiCBxDXRCA4oBe",
  "key6": "3Ma5NfqVmmFAzszrhzbxdHzj8bditk5SjR8cvfJUcmu7KNZS5WCED4jW4A7bXWMUtfw9sU1exfdnNy9fK9SX32x9",
  "key7": "21MC6RhCEF1uBpsvtxvU2K87zqk1YhBvnB8QhKXPkJ24A2a88vQoTpx14cuXNx774VmeCjkBGkiqH7fMQgc3XCBh",
  "key8": "5Fkybbq8ncik6EopHcw5eLLLphwsdUM2g2UoJkxvMY2iuygRjjH8jjv1zSDWJtLRfKStJXmnwNDFNymMiNNBiX4K",
  "key9": "J5vwabdXXDHFEvJ1iu3TFBZaXewj7vV2o8J4XbzJECCqhjUCB4abbTZDnbm7p43Rc7VX7abFBonJzBcTjfvCc8t",
  "key10": "5hVMF3t9HstDz6eAFLHEuhvAbpFAFfen8h9gxEXZwvqXtGhYvaGqBWZ2S8BYYhcuV1qkq4f4bU33RxrYHy6DrE6F",
  "key11": "2pXZ76gyvCPDGzHbS8m8CpEM6AwfWbRap4JchSQ8oYMCobRoKPKxsZqteGFTMQb3u2zqwD8BpYKhZDo8EyQVEQ8i",
  "key12": "2AXURVQvGZCaUg9HBN2ZvyLxBSBxGdbAaHdP1mj5ET6eUop5EzsPZVKT27gSMU6rPmd9sJCL2sXNksRX375WWTQb",
  "key13": "4MtjPchF9vC5s96yhXWwayQkT7JovmRqEgZaMD64buCoWWRzKa4UNufJ6zjMxJmzgNfL19VJEwKFWNdDbk1GJ4Qo",
  "key14": "3egL6rqtnRaX5zirbeNH6gHpE8m1PBrL7yCEMXGwJPoAj6DqUXWsmnHRLKWyYNb4AfazaavWbwM5MVYNM88zga2r",
  "key15": "5tDWPH5XXYU7eYLwKpwqPX5JMphzvR3ga24UrpY9BBqc7LikaByyndUnwaj21y9erSmtmyhhxZHxd6s6V3GDQR7w",
  "key16": "5uuWRMe23qu7Yiu5CD5sMPHqCy8HEGdWM4ab91j7GHkrrj4X3kegiErpWd1xUT1ntRhHUYbjkk1h6d7A9uPMA9U7",
  "key17": "J8SKrCRGHTuP68yp83HuxJ1HNpFWyJAT7Ju16UzgYCB5dF72otpxApxrEDLpniEiXQyHDpH69HornpSEEFe99cE",
  "key18": "2L6N7BZDXEjidrey5zD4SQDkEuMMYETqv3BPAnxYaLSGfPcMt711zwyT1FpQAYn8PLebQ8VViaX5ykhAvNUvqkE7",
  "key19": "2Xwhnu9zskDtC2MXyoEtJh6sxXvmr2gqppV7EFUPYvCqiHahzyr2PgaEMxTsrKnyBAGKB7AoEN9eY8k8k9jJKbHX",
  "key20": "5b38fbacxfjo5VbzSWTmnJ3ptXAyvhyra7kWADyJZGNtPPnNSFR7uZU7mVVsyKKg4pkCtWu2u4Na6Y3tEiWTsx63",
  "key21": "2drgtR3PVfLSaBjTjmeK56mgmSLkWG38h6C227UB8F1wcjG11rT6JCerQ1awvr5WxX6LrKD3ufe2nSdepfh2AMQf",
  "key22": "2Fqj6BDhx5o9zLwERbzwU8Ut6pbAHp6b3NeB7RzBm9DCE4re17b38eSnBqZrVUjxMLdEJ29NcUxUVkcYRcywNty7",
  "key23": "mmmM9aRtQmQ8opxzx1SzFgWrhUhgZkQ8MRexeMjUzJmHMQnGA2wom9pQhKjhe7aQTjexqUt4k5drsHZV8pYLH8u",
  "key24": "5VTprsBj3QoxSPANyty1SrEjHXdtkUsNbiyAPcDigXLtxZrS52q4719ujyjgiM9L7B8KKsNbzqzvCzG7vFXicueA",
  "key25": "3Zx7Mj2arygXid7dogQ36UHfZy1GntgBAskN411ep62WCUb9AvaKz2F9b8xnVYfhoEey7WLKzww2SFLsNCzZZwy4",
  "key26": "3UL5Jk4cDEPpiPsc6NMXUEAfGz2ChhrtWM4rhq1fW7HJfqN3kvLzsrZcae7gpZ3h1Gt7eMgZSfmRJATdrW1Gg4zb",
  "key27": "3bAe9XynhTjhD7Xg4q69AcoK1F3FrrfEQNrWYLq19teKwNNTtBDS7EhBPzeQsdvSFTqZuowoam8w62TMzBMw7Jbf",
  "key28": "3dQ9BSK1ZvWZGmZhgdG1ymV1BTDab5tbjUsnMc2Jub1PNamcdXX3ZuqEAtgR1dLBs7AX7FdpprHGdSzH6hsasuww",
  "key29": "2ZyiiAHcSqjJK4HG8xPCEonP7verZtqqyTWz19jSMSYbFAXB9nYJySRngVxBRRQQmvK6HRYSQT1cTGkRiw7VSyES",
  "key30": "633sU6RMt9xRXsYHqhBkqpSXbeMs7s2owpVxU8nfeb8Se6QeuFbSnQkm7o2qsSo9BA8SHpq99b9rS7bfFo7Btxs3",
  "key31": "56dsL1nMW3t5PMKtaXguMXzVnSheQJuQcwUEGCK2gurRmb4X92qqV3YrshXZNfaLAoj6wCkU6kQuKdrbVKKi5igr",
  "key32": "5c4K7vUvDSmEprMYQHWYuX6Bd5fnAu86uGT9wfajAZAK3JNeujdzP4ms8bn5Ry3d7j7TciGZTBqx9ukGWhEY4GjC",
  "key33": "3QztBEN6YnSmBJuTpEcfBoCdG3tcZC7Ped2RmZHQ5pvhGysv3t94UJMaizgBTkBrPafAvqiYNYrV6QxTxJt3AXdv",
  "key34": "3gUFtsJbQ6gyWKx8xG7oexHuFRceCh67a2xJ2puXTzEmDTWvTfZYbDUFZZtGjcdoWSRypnU7FMHqmVYgztD2uBNE",
  "key35": "4yfTJH9DJ66saFtJRsDiKF2jC27Qd3YfrQv1JfqSey2snj5CUSDpRJF7qvNuUNUrp64gCHoQzv2cN3K83p6F9VVe",
  "key36": "63GcmfGJqeEqogNjAS1neSTMLQQSQDnoLLhy3sZ4z2q4TBKTn9PU3haevPzqJcQcuhVE2ULtiWXBSipjEiq5y2XB",
  "key37": "5sXdzLzEHv2hgK3Zs86m9BPDRm1rnmu2Sq1YyybeAFN6HF5mi3aczAvDm5ixe9e8dtT2baFsbJp1iSfJ8cGhdjqH",
  "key38": "437oa3RL2n4uNVd9MtWWF9bR3nRmiwpXXknhXXCscZtMH3affgzAtHYkg9598dRyE8umPSkXq4SAoiLezHU68Rkb",
  "key39": "2rtrebAV3eExtpoXEpj4bazuSbKKgLLDhp99QyXSdPgjRE3zn9RkhrF1sHjXrNuX26ZCFSSxt4xHYXVC5N1b1mXN",
  "key40": "XU6sX38hmzG9Qz2eT2pKrr6QVpuMNJbA5wkuqRWbu1b6giRNwBVPm7yAk5WqPBDCtNZ8qnxY5YBpnZBGskhBm3p",
  "key41": "RLDhe7hFwDaP7V3AN423qSvrYD9Wx3TpKARM9A3S4G1QnDtF2wwBZ5G69ZGKaTHhwyXdBfc6XoCn29iDV23nFsL",
  "key42": "3iaiN9qamapUtLUqxnT2oKRnmTx4VaSzLTSEetB4DeAXpLNumxDe8z8VD5pFZcvgcrnT47iFmG98nAMeSNJcSPb1",
  "key43": "3u13qiBppE4FvELWQtcNNPGTs9f2QrbdKTPKWYncpiEJ6uSquyYfUrBjPuFxigSxdfmVBbaq6Wt1JBegPemELFN1",
  "key44": "3L2cgDxgbz7hk6BpfGR6hgjETEcqEqatNtseyx6PRKzG3nXPGFJrCZKLfcDomqxPXp85Up35bNwYqR6JHadbT7g5"
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
