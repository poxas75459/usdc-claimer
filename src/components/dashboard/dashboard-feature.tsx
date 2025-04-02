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
    "uoD5AeAbSFbZPkSEH1s2XFATqxV82N7GhKSDKP177SN5KkguG6ZKjDbvQYxudxxiJk9giFu7kYniCbukw9ji2sS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpLsA8Z1ZKUXkUJwd3zMSQowAZjetV1FHGQ7qZFrnhiRyEET2jLatujrpscJpxwp6teK2qPZcdCVw4a89yQQuKa",
  "key1": "MhszhJ2nLReXsmVEsNsAvuWHJwshz4PsbGdxwMWWriXhLiscVvPcoWdYhCsZXb4gteWmZaBnHcKRBGPGP58ZwQa",
  "key2": "95hVf8ex92DuYsxnJ4ZLvV1bC8x53XiELubBdqTQh2WycJ3dck7xGvfj2P2AQLasMzLLt1i1bncSJmH5tZhe3U5",
  "key3": "4WawBPBVV1ShA5y4LVdXWrbHMngZhwa3ocAy8R56e43F1npvwGrrXFaC3xBJiPdvrC4ZAXkqkWkGTpkti4G1rVLa",
  "key4": "2Ngdtho6RmCaWFKSnBPWuqrfrcREXMWj3fLbiQYxCqe8pgnTtPJSC346bx34LdjvGsa2Qm6ASALXEJWgvVtoxfpj",
  "key5": "WC2CJPVN83V4rLsRS9XoUCFjpSCvnfGi3DSsn5dF2c6XEnP7VYso21Dtpw3ykLvuN4b5N32Sj6JozMUihB9bSVC",
  "key6": "3djtMLMLHscgRiGNVHRxEc1Dg4ervx5jG1BpbD5rVrWvZtrP2PfMy3argSY48k7y6iZqehGnqvCt5Rd4eP8XENE3",
  "key7": "65EjEe7cKs7DMoXCpWW67asjRt3srkdHBrYqWG43oS6Mvxhmg4auCdEzFgP1QYp5Hfu2Rauo6Xb5RWpx7tniJGAj",
  "key8": "4PAjxs2mSsjbrMPpRSAgJA3KndriA487E1rg8gGQy1TG6oHmisLLf31xcQfvq4naDkpmmSFY9nHwZ1E461eitntg",
  "key9": "2bM9XKCD6jh2kbenyrx1z7q7kBihtkviFsnh8rATF4wK2RaAYtzwr9p689gLawADVi7QKzepRWkUVYMobSx7PqHm",
  "key10": "oXjBYTShVcL2mMx4r56z5qYLEc1XYkWQs8CVUtZTY89cAHLexVtxxWvousLxWD8UKjT74Dnk3AEiCSXqe3TsSeV",
  "key11": "46w7mywZZhpdPo6gcNwvffsrzsZvBpZgjjJcdgjxBC6Ur7WDqQUUiz1DSKkkvfdNPrUbv9cKxj5nvpSPeyjpkngc",
  "key12": "671sduyo8MtTBc2F9PXgMhfPWw1mABujp2pE3p7p2fsSFyPEjUXoT5WjxRwd6PVp3dKLKTcU2n93dDTMn6SG2S1G",
  "key13": "fDBNAHaYP35qV6eFhNbgQWyb3ryDTpDBqkDKAMCSuopHK1pVemu5Q28YbDaQRCMz61NCacoM2vCNf1cnrqgCv4n",
  "key14": "2iztGHw54FbrjM72ChtG9jSSLCxE49HHsagqbWZVPwBMZhRN8P7icwdMmXmXvsKWJGs5v2ZC7uHXqgd2oNs1kEex",
  "key15": "3X1ZPVsg37nz1pkyUyFZWt4CnWuvi9HqECh7JPtMA4efn3F1zG2xi6m4GqY8QRoLKVvjs4bMU1b59pFzcrGjYXUy",
  "key16": "36o3r4rCMY6zsMBMuu2EGyaJRqhoxsFDTiYiENmbbP6z3BxzmoDY5286ULe3KKwi9mQXG5HwaCpHdjyUi8PUu8hM",
  "key17": "2hbSHAN3mtC8pWuPJUUYBABKYwhoZe2bP16tbH5E3CFJmKXaUCMrpcQ9kku7XZxGePgvXu4yvRRn5Z1ZRSFxjaSp",
  "key18": "umNwcG2oZfcuUQ6EadQ9YErMP8GJVxGYVJq7828Hg9kb8MMkr3QRiHzonCSyXA9pEDgvQRAnf8GD9Gj5AcwLxff",
  "key19": "4Ltv94w1G8J2eaRWv2CgrWgPL3qAvSomtnu8A7w59EzSEgkq2XtN6MMko87Fzxb7YpmckiBzsKHTCyRNsHuxLLYR",
  "key20": "5HgJz2crXCohXn8S8JvPVQdKNCnStqxiGtVPe444Fa6SyTRyA2NrW4U79hxaK8quRujZ1RcPD1KpsLLha7TMoUjf",
  "key21": "2iKHaD7H3KybuxvM6PpWQ59sf3QyqPdawX9eiFVc4fL9JgfbsGoRWwtQ3DZo8CFSnZhi1SGLZpuFB8dPcDoU3ndJ",
  "key22": "5DuxPi2UVKqDDJyDV2YWrQkdJgE79QfP6nS1QxSbALom978DCJVXHZxzRFLoT9dSEyxa68qPHLfTE8ghKWw3b8GL",
  "key23": "4PnqxXsT6e3MtK4Po2Qh4FNogn5eoNTy2NKPoHELSi4Xftso8JymdNnjesrW6QsrZsPmtECdeN8sEfbkEXvSXKUR",
  "key24": "25XQM7exfwQCXMAEPeMsZ6f3tNoSAqHGXce8yqjZUr9M72yJW9PT1sb6SJpnNasrEkqDHsPT6s221w23toeVSR9F",
  "key25": "3oUg4A5Y6K7LEKePVamQzbH6nYSi5uiFXdHNb7wdSioEeoquvKkLQUvKRsvPZ8uox8rgtNGV8LW19AD6AzXqtZQ3",
  "key26": "5idAqvcmGvSK1MsaVJ43mk9zsw2mi1YNm4wAjfwst1pS4M2d9fYm38q94pXrA8qEpLJ1vvWAuptA3d3tMAg3gyjW",
  "key27": "2nSEW27FzSLELzAqkdzezzhm16rQg1LtSNvF1KKh86VffEWiWd4mAfX8R2aY5fhtX4dGJsrMbwkk3wVZt1eFZNrV",
  "key28": "5Av7XVjvEvVY5pWnrojv29uLNZFUoqNZQdLcszLWXXbce9A1xkrPBrfT6k15Mb29gYdNuiLiFsarGDdMSpEnVtNm",
  "key29": "PPKYgic8t26SGHoLvUdEmbnoMKYjoPur1fZFTyfJnqvx3Bh7H76WwocthummXqu1BRT56w1XyvLwrjcVPxQNjue",
  "key30": "jpjMmV1ynqc8Nfu3ojgKgoifS6PEfiXKkdqsRZt7EozuWjLAJPyn5DzKJXt6t1UB1nceWPoJ8TTbHjz2ZFjb15P",
  "key31": "3Apnwi6kUKZznmdncUgsYHoLzBakkv8sT4NjLATyJCksGvLjJQNR8g5DXyoXxMWuCW69KHMpJ1aXtzyWfDnVSDa1",
  "key32": "WJBRZFc7DLhWdtUxeLSDhc5dtQA3cb6nrftqB4G4KFpgisFkJUtpCGpVDYYGTzBAAPtWY55i5aVWdcaPpjuhXk1",
  "key33": "5LNFJnqnReSqQhvTYkY3GhsdQ63nneDPF6wuhyJ1fYvWmciabHFpczgWhje5KqZWzx4XAL8DYKPyBLrvjpNuQfLn",
  "key34": "5xYLrobBcHe4zaXAVu39XPnY9pFvMp6yqQaQp3TMnx8itsNBnmi5j2sobhVBD7FWtEgqob4RwymkVH6akPMtPbny",
  "key35": "64QKvigSjKHzMMrbcHpbKHfCyoUPD4BcGPGJ9fbDBg8Y6aWmspoeMXhLVCfMrkQUy7CkWuxmvcfwCkcbwDHd4DXu",
  "key36": "3JNZjzxwBCQEd4M968Pdozid6KKyYUMcQXVke6vJP9uUZo4eqJaCdcjgGrubusK5fNi2hToufjuHDcLtVLkX1ySN",
  "key37": "58wzQ8RXtkUAUmJf6RuumNibqdXsMvq1zDNS7znrPANH7eXxvdhGfumFNVEu9cmgyhP3vuk4mf93jsxnJk8545zH"
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
