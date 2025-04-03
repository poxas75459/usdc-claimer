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
    "2RXNjDz9MLWctEH13JhpgBQDwcbrjYT3bbuX2BB6DgzJtQBZk16nyvFErRVauHVsgoeTjmfi2EQFXnC7BK4hhUpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Co45wWQdHxn4263JNswkZfs2R5HPe6wikvTzVfZdAu38whpxTAMa7YT8HDPmqtr3hK5ctH323VkBi8GYcpz1Z3",
  "key1": "yw8fVaxhibrGV1jUhnNd5kW89J696woa22uu9sLbUjiWDNN173vsQEBmFguysGXCWn91DTQnbc8XQUxyggcwUJo",
  "key2": "35Qg21VQ37badXcKqdHD558CBevNQ82S5D8Gh93t1j7zg1GEV1PWgXxBqszgQpoDQsY57qsuEQsMvgYG3ifM28Uk",
  "key3": "5cSEoJXJVKfnRkjHNBiRbrHzgmRc7aJkUL1w1mj5ZwJB4E1Z53yYZDW7mCWTcmXUPmBLEcecsJjM1ZsYfox4FF7j",
  "key4": "3igub3xAsQAzSZ88ezkJvC2uJE4oGshCkpx2vsCNDMAYbjWeuV1MhinNCRXeGSU3tKpJfi3h2RXceppWY77AKGFA",
  "key5": "2KrAv3LwMVVNADmAjx3zLNk6TDwNz5FbMN2Z9MV8ZtAkYPFwFeQ3WYTh6wAjhKmgdou318hrmVnBWRaEta7Hyjiv",
  "key6": "3f83xQUJaQZf4A4HrWLVp3zRwEHDCtXtZcvmXe7Rxnwhc6WzHdn4yWSCHmishcyB1rxLTcWeE9NxUixt6vy2qJsU",
  "key7": "4wQcNyTs4FhBKB1jsqfzumKoefgyCtUBQiYpetSBeXRSNYNUxC9mCRfRRx6myL8qzCjdqprmdbQzWps54Q9ajtad",
  "key8": "4XGVYBAUwaVDudbopLCBqtACDiXbVzc6R3qGd95XySvLH16HhFhxRQuuWqMvFtTsNYeXo5tSpZDmVVU4MMREFccf",
  "key9": "2cu45qNDwcRknAEvbRFvd3ftogeksvnCtdEugSVHspmjYJvZjv4wm414ufaks3srvZtQLe5k13QZEEbDbFqWoQFZ",
  "key10": "5ZvqC7BPGMU7nQJt7LSwMy28sXRe3nACz4J6HhQXAs4C4XKCoRvPuMcRHMdhSmZ55WSWVvZvAFaYxb6nP9vrS55j",
  "key11": "4bZrvxrLt2ZkZgKFhcWjg7JEJTjrmF8sogVS8SJqXCp24SsZk9ARtyW7B6gQVBUyfRenm9bFvJM5z1UjzgenuLzE",
  "key12": "5Enp8proP6QdK3GGU5vFCzfrxofvVBfzkx4p6y4Uj81uZVV9uexcpuHZzyJG6spPXDat44u5rZAawiw81broLn6G",
  "key13": "3HQJc5wmSVJsW9xxuXvyswpb8vga7ocTkZN8fy89pXverUeRxY7oiSxNtyYyF25dV9jTaFGMjYkj129Z9Ph9JQtN",
  "key14": "WgTCcTwqy9UeoLZXHTDyH6sh3uzEqC4j156CBuLwtDniedvNbkrfTwnosKDfsoYoFGY9sbdH7th7EDEHeSEbD7k",
  "key15": "NthU23oxUhnFfGdtjjwn84vNJfMh7sq1FwmsDCchMAg5VEf1S6vSDGSLzbi81bT7hnqaRevvsBz3ZvV9rKSkudP",
  "key16": "3hBXjmvdD9gihgLXADCX9bmMnCotTaLGLEMYctFVd4gc6Jg1h2zvtJCf8SEPZ32SEXzkfWZ8vkfg85Q74qJb4Psc",
  "key17": "424gtwpdjwHDdQE1Ku7CUwZjNfytt73mA9tWrLdNWd5yFr2WcUPUv1PkXuhpsi5HDfUDfgocFffmTShbtyVNXVja",
  "key18": "2CZT97dAX7Kqenv6AFaSpqwhcLRpynrLU7uSY2oxCfdcoTtGmeF7wQgtRgqNsBR8RRQ9nBBzwVaWqa3LTwcwmSMq",
  "key19": "33BrYJS3CuTQCekGtxcoWEw5YLugbnhMoyYEFxhGDBR2z7citTubDL7tzGph2eAcemEGVYwvptvrJr7s73GgKoov",
  "key20": "41595CaGW3MAgrBLQmhAreeHHnLJAbyfxMRJcCHcTnttHnvnD1M6skKLVb5fUT7NbhTtZP2h2S3459Lb9aSKMWpX",
  "key21": "4Qs1L5dLzMsSrLRQFkE8tCj4fMWvLhu6QGgVhoaHp6YbotAkXmpGN4RTRnxDQZWC4e2r6Byf27Qf1KWmVENMw4B4",
  "key22": "Kmi78tppiPE586E6Cw9hSkbawQ4SkPjCBxGGwuMTDuRZRG5qKyabqB55e4ivwwvzVX7ctibp7me9q5ppcjXDKeF",
  "key23": "4yyJkKYVUtZt7n36XBgAC6dZoxXAY5rHeC9r5eW2DaR3BQEVP39EfLHHaUxRWGcihMbdHdciAZVkZ7zCikKT2Dpe",
  "key24": "3DYoykzAq64frKCPv7irWwiE4EzUB5NELtLRx8pskRS6MJikadR7MfPPB5cEPKzE65oRLgf6jaEL36d3DxaumECH",
  "key25": "5YZgudeGx2G1RsjLRQjVcJCdPfcuC7qut1eXjskYSUqCaqGRfGbVYKMRJqtJdMKMRhtMUTGcQfn5RpHsiXA3ZyKp",
  "key26": "5hqeA73sadXGUZHeRibB1mPQjzPGzkUMfnphM7YL49FraSYtDfXmWikc1orj5PievStVQoyxxQYu9aiy5kaRHGBj",
  "key27": "2qt4vcoPhdEMyBHa2FzoCs4eyaZh787mfVvyhRcnBfMHMUdZNEyUoFZ4SaoFrM9HitMUMnCcwRJPTjjCzUUF93a1",
  "key28": "38ZK1ToDEtNR8kkttqePufNdEdEcEmWSBBx9sqm4hPcu3igb4FaSyBpKdzwvyZtMrAWnhZTF8CmDsdSjwhdE6TZb",
  "key29": "yXLhQSbPG2K2QUxX4t2YfznkAhXb3aMtHLaXJCAmFLkdTDsExS1b6FKJY92XTiHgDQZUtsczFb3sYFC9jRt7TVX",
  "key30": "5ya61dzCD9XArZR18RyptfrHzGvr9YmUTakbJ81sARtzJVdcRzVUNtDNBdwpPk6S657bZmGM4dcyzYa8oHSEqw5o",
  "key31": "c5C9dVFdMwzTFsZ4CZAQnnC4QsQ7TZFFFPcioKi5fRLL324KQC77trsGWoSKw52y74AphJD2QPsDwhYmCnftZtM",
  "key32": "3RigBd7CtGpZ5CkL7835Xz1cVATweEiG6mphYKem5CXKy49mVDcp1zka5KcvyN7jnLnFGGikUNBQwuspETADnfk6",
  "key33": "4ZZumhH3yTXmQN9gLJtvKH6wzvGQBdLMX23FmbNzvyrF84iWwkDJ3KKai63ksdG9x4nbGUVMpEk1cr2t5nsvmDu",
  "key34": "2M9GC256eqdb91jrMQ6BXMQDzGg2uvQVKU93hJjVqyh9isy3a49uKYPXNiZnDWXE4GL3styyXXHLF3UqXVMgTKk1",
  "key35": "3RkeMSQT74QH63iHga8cMZvcgt681FXu5jsQqAijGsuQpsDgiA8vGRikaK5tNmm7PKQ3HXgvRbz9MiRDAZPpxCa8"
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
