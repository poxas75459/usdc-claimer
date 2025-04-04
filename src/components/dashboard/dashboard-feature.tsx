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
    "49W6xDmaBHudQfDtsi2TS9ikiVXEoaRfvGQh9FxdCFHz51fDfjy6hLA9uEhupG9YRxrHtWEytycJ9rH26WDumTFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMme7BuYBE4fXpdq5HnqApcmUAfCEoh2zd81dgoMWFSZqrVrRabxLBnQ7z64G9rq33R8Qj4opmqdZX4TnT7UmYx",
  "key1": "5gmTdjCyxMWQhoRbtQxJ4rtNbt1XyZWK1faKQw5CAjjJr1WtgSSpuJSeJUtTPKDQQed9zcFENLvtGK8RfWW3oVKd",
  "key2": "4xyHU19WKYRjz4NGYjkgQexNdck2ZakwLc9zSgzxCCoekbPEyUvbcZTAmMDLFZvbvAk484SSkptaQjUkEeNXr2VY",
  "key3": "jcDdBZSF2KAcgVsqWrxexzmS3SB8gjEcUoDea3ntS3SreBpaGaKMu9LM32Tv1QAWBKS4cWWtDnTyefEP5McgjvF",
  "key4": "47q3GpECjXHX8PRUPaaF2H9v2CDWFt7EwPuJkEVPdPUoZgrLqSsh4aETXCXUFhShqZJtkHR9VCZAJhmGsoQBRAHY",
  "key5": "4tjJ9b5PfCVoSjChdLwZs93yEV327RxGX8tD66NmS2aPNCanjWR6582cEsEtVdzgk6gQHttphKEN6phiaSEEQ23v",
  "key6": "3oJKEaLdHnMony7RTp3QzMHcSxYJrfSHTQZQ8iAdKDGB3useuSc2RWL5CftnX2Wr86TsNwkorK67iCb6pL4izyXK",
  "key7": "3QZCnPt1bZJs5yph3Zbnk8AX3KBZCJy78VSTYgN3Skct6Xmc1jBHMykChX2zvtuV8iTpmRjke6YNqbx4sWChmqBP",
  "key8": "3HZhbRW9S3Yv19tGmXGm8ivNiggy8f4SMn7YJGdzN8uiSpZbV7QcxH8eoVohBWw9kkojX5MavxyLb1Uk8YyCTJge",
  "key9": "2Aaa5qBqD75u7mqP5HujYN19gyFKV6qZJcUX2v23uxXJgA4Bp3frDLu66yFaMXbzSrm6BM9PjyNPktfmeYykLrB4",
  "key10": "3gZqamnbuzq5HcJVRnz7GFTLRF2U3MxJwomj42pBvhtVMLTR9ZdbWSbZk5hiYhYgCjf9CVV5HadcAMWfVxyQLdVL",
  "key11": "LK2iwbAwzHfTf2iEYU6bq3FKF63i5MF8jcKMQueSshBC8CNLQ8ju3F33Egj3sQBd29JkAebS1AyqCSDfAE7YSZF",
  "key12": "3tdax2SJR9B4xuQFEHYqGqFJafVEf4mNqadxVU6JDFFG6TtPBgerjDmqTBSFpY7s6HJeznJaACxCqvBTYxgYTPC6",
  "key13": "UT9CFL5c5dQFqUVP6VhHtxyHdiLRGYrin4ZdqXJWkq8mz8xfyJHjLWQpmkipEAHhB8GXDy2cJX5oWRu1wjJVK1q",
  "key14": "2wiW4mcWWCc6BtxRUwdRu4SM815rw828RoHdiysWLg8NbEia5qBroFKVtLQy6gHhd7ntne7NYE9cibvHqc5eQGMu",
  "key15": "2PCdwo69f15TFbSuJWpZ6bcn4H6hyjhHNR4q9Gctc9q5jhsxBpxEr5SDY7E4iKznFqt6S9rV3vb9FnmWeRQafB2Z",
  "key16": "3vy4kAChtFzYL3QpqKwbxoM9ctrEGjzZ3MBjFSq8CKKUsGfTkxLXUWKvSYhErAX8gPhm9HhWBSxdFJJYmBWDPtSB",
  "key17": "3DMe2me4rus8w7R3oppGgAX2D2cfRRdPUB7xXE7oALqGFcDKySVFuPdA3gJT9uNC67tSPMHKxdLoe9LnUN9LYN9w",
  "key18": "6XjLxsvSVB5PoLV7BCKMZrCmU2p3wUim1gHPg5BSWqxXmzckHs7wqe3CAdgfNMYfmvdwM6zJ1iC2BpBw261t8M7",
  "key19": "2Dm6iLk4HdKVk2xKdntvdeFwzUi3efW7UzKj67SYeX34SNPt61VLsJXxRH1LQ5ZdAaYm5Tc3VqCYebLZRQRf1gUZ",
  "key20": "5XZME3daAtNonBjmtbpJn2WUuJkk3sWGpZXcDTC4qzyt3ZAkvMYjzT1XWgmBhgvPSEX4ZTDxKpANtpPbfVQF7HB8",
  "key21": "4us9URYRa3fmXwk5SF3B5b27h26HeZAVNyKaJYGwKYQqpK95S4tryQTjWnqi8ArfgTeksUSUb9C9s9YcJxh6rgb4",
  "key22": "5EafkKhLqhxM7AdqDhGpch2bimSWzeR3AqnW4RZHh49g8jMoAjfMKYL6CKGCySXyyBe8d3Fq55mH4PnnMvM7rVCw",
  "key23": "5pt6WWFNzakrahWx5tzy9dsD37AZWMoAWGdAG9EysH8ZDuQ4j82uqFGsrM27dKRfbiNWDacaBeLQiRAJs97WKYDz",
  "key24": "3Kob3Cyz4wMgbfgGngvrX89SGi1mWUd8XQJcnhxPiqYZnuj8wQrVoZmrgFY9hJVV7xzf5YUXcnTBFCeXedhsipCD",
  "key25": "22gdRSTEpQMZ8bL3rCpSkpt9oLQV4Q6wzxT9B1da7Sp4z3gsq9nRLA3XCxNZAeijLYM1mTYgfg2zT44VH9bx3cDx",
  "key26": "wXp8zL431EHZZA1nHjbYv7fW5Mx1KEBbAkK26u3MpB5VdsYX51FzGhMnvt9AhAke1kTTk1R92ufiAZjgbtE7T3C",
  "key27": "25xXGYYD1M2CfNCHELVE4FSDvJNW4ktTkmhyX8TMiruvW9pUneBgfexddNL3X4YG1ERM5XrKZdLXyCVSCTWJeyHH",
  "key28": "61KAYDZRWKYZ2uXRCz5NsdX6fXKNwWAbaxktyaA59k2QGHL3hJXcjANbN2ktjftF4LZ7dfXxETbwd1fNt9iUB5ni",
  "key29": "4aM7UzHxjYfbm7LvuEbNnfMdzieWmeSSmscCE9E1mP8hdqUpnjbZJVRAG4qqmHWSqLFxkqZvNTgKq4Q1wxyckJh6",
  "key30": "4MHVVQDapATJgbojcUZ2UaFvsBSwtSJLpMXvMYXzK1rMtVP6Yp1it9oL45wgMiRf4x1iM23fLscsLkvnyHQ9SSq",
  "key31": "3mGNnMjwK2cWeymQjkJe2WHY4t3PgGBmFw9u4zxzbwDXwTSN3hcDy625HPy245Ykc1iLSyxwGcnYKWZDtYqLmt4y",
  "key32": "4V9GGYrC8TMzjLeBWBcDFvWXL1qNBdSLLZ5Vy45oGet9WoifVNkemfxr8N167fk7cJ6zBnVgp33gkAJo8qPrDbwe",
  "key33": "3WK5YcS8qoZb2QX34a7Wxsikx2SuVSszANKevQ5qLLM4CurvoEHwxYqpRCFLKxRakSUbPQQbYj2LDRrNfo4ZrCq5",
  "key34": "3RGvmW4Vkw7uCuTSEELbKALHJgW33LaiCgZ5mQnMS8QLuq2uWJemNJw13kdwyc1F535uz6GUjaUCcAb2pZp9MZYe",
  "key35": "jGvrh3rBEtbqvEXkXyEdVWi6Fkes1JQRKsqLu4kCmiDgPwHT7x8U5UBC3a4id54tiPFBQD3PhoHi7pM1BCCMfSR",
  "key36": "kx3QH8XowKB4u7i67E53epxDEX1jrgKjPzMoUTJ4xpWLqbK9Vb71WNwWu1eRLKxVnyXXyxdY9GgWxGv6ibrqQuo",
  "key37": "2P7mEi9Fv9gPaQnrvPkNXXuMgxp1F7q61oJwJhynLVXrpuhoxc5HHxnqum1bM5Wpp2v4vv8ZvzNkCsuAwSBGRKkY",
  "key38": "5TFpNW5taEv9ACBVWYdEkAg4ge6sFqiVmXgHrFQ5QA6a7GzyYWKs2tJNfo54W3QDdSHQKwe6bWmPeipJHnYHnbMM",
  "key39": "RhSkpQDoXEnu9enpv8BVyko71wU799m6gFpiMaP5tH1iSUwcGSyNrA3di7NxmMS5DAZdc5jhfGhTgLquJ1Chwm6",
  "key40": "5rdQJwcy2fJx4c7MENVrRo8pzEphf8GvDAV9ZVthXD4L8bTv6gAaLEs2G515aDCexE7njMByJrdv6LKk5QeQ7L5M"
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
