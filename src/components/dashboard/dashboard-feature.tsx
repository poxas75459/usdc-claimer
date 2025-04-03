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
    "3y8RBjNG9GToY8EVGtGGoJjVYqk25pP7dY1b8yvLiuQzqSCjVCWywkxHJksAXo8hZUwdfmwKviffWJwE888GcMin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GasmSXYkct4qLXSiXHwcNjeBD1BhsVm9frTpMgno2gX4MGEwanMyK8BhSi4ULYtQ3nNG2avgfuYscy8iFH7qjMj",
  "key1": "2KCvS5A8UzKdbEnQ1iVyTuUwyZZVdDF5X4Hr251dzFh3CGGoJsPEXzQAMZMuks3ckTgKW1nWi8NmmBNkCd5a6uGF",
  "key2": "Yi81UNuPDPthCApH5ZWGBLBqhTSzU8XLtfxAGGT4PpH68wvMg71X7B5AMzc6xcNm748q6mmxGyDgXDJtPk1yFAd",
  "key3": "MtzMkLCDJZ6j7ZvAeBAC6gzZU29REpWrd848eb38TeKDgWphtF7dbYQcujkcBPDMJEZogGF8uLzBiXX6ajFuXW4",
  "key4": "124JjBcd2SLQ6z7jG4qshbXU22HXdLh3Ho1rQeNCbFtqgPTk9TG7hmzS1N2eWKh4ytbTAzzgHjRJ3Xn9yHbu9Si2",
  "key5": "5d6PBvPF4ztqBgPBGJGNGn3H4q74KCbvyt7pdUfKSBzipgDcguJaN7oXsFfi7twebZqmjMXyDp5GLgaDd56WC2k1",
  "key6": "3wFJsXc2SDzau35ywkF8br3yzCnWrg8BpqWk6cEgkHARra5XJW7riQpqtfg3dAv54ikGj1aCZe5NRrgcQUR3rqUt",
  "key7": "23f7VY5kqzuDiVpMv3wkM43skCd8sy5DcZrJ8FEP8jmgSxvcDTZYx7f3ShsnFLQGdXF8gZDguAWPrNfDBeEYcZMU",
  "key8": "46wVPvfzjx59mtyLH9e73Q8cYE4ucWw9F8T2a1RSFH5JHSwom8XZD5gV6pLp3YshGrBbfZpKknsFLUT7uBZpQ4Je",
  "key9": "4xmoMLNUWDmE7ZqmSVoqWBGkpqVMN7JF65SY66GcZRMqwefaAzcLSCsh6WVYCGEJqP2jzbrruebXV897aFNQxVbM",
  "key10": "G4Gb7WGCSaTLpdgr9isP2D8mMHUtNdMH2kyQXatYS24969XhzieeM4cjYnLzRYUQnrWHJhigN2bQxC4DusaegB8",
  "key11": "2jemQFZa1fcvAx26qpri1EbLgphMMTunyZR8EfX18zHmeD4qzTGiefTmhewGtKLigXXJoBtzBLdrrMzEjBbd9R95",
  "key12": "2vAzWy4qvj7oLDddS3rU9yPzudaGP2Xo7mtaP4hhDakDruUwrb51fp9kSdYaye68L1ptDPwi1cNM2vzV8SQ4J9y6",
  "key13": "595HpJT7kvfRbAuQwvDcAHP4rQpUwNfd2TU2NCupworAU9UJqG6eR42aHdrtd8Avd8PGkeTQHCsCyCrNuAAmp4rE",
  "key14": "n9tuiuyyjhA2LRTMF7jeFMGKLzKjpUhPmtXf66dMoYsABXPAEqUkzhCimXjrHpE9z6r8pZY7FmqnAL9H8onXT2G",
  "key15": "5zqT9PuAqUzAVppXM5Qm8ZgKpJvU48q1Mf5Mbz5WvtnoA13fK7hgREjyub4xC5CfnPsk9WVxT33tFGYDwHTspi9D",
  "key16": "4Lp53Xqh6AVKrsBRq4rE8h6rKHRPBvSAzishkMrRRFmhwmNM37bc6Wiia6jUm1H1p1YRg3RcQ8eVZ4M6aKTXDos8",
  "key17": "43x3Pk3LsvWWY4ncQqXDkbGaEEs8nMzQ9VNnqDvSvVicDMJvXtPUE8shRwy8gHoUjc69FEy7eFVnnvrz71tQmvfx",
  "key18": "4u5LcyUaVBgYJAvf2davrquUMQ89bWFYKBdH1ZY4nprQcD72oL9eKF6bFmTnvZbD53Pu2GMCRvU5LdvWidBxCEcf",
  "key19": "25xpvD75Zc7PCqrYJkrSazqTLZVkAZukZ5Sg7VFbTL3QP1AkPkvzdkpmkvbsuq4djcC2qDeAsp2J2vSXEPBArexw",
  "key20": "3Su9oTzsxENyupPfFdm1buqJxRXfYDWFdZLVuRXLrD2eKFsS577hkknZwuAAYx85E4RbF9jygaxcSPCAqdTdJRWZ",
  "key21": "3U3fJ8xbgnSLDeXn1v1zZu1D2FEwbBXuoWfBs5Mi4kaH5PLN18hRVAHyKV1XanByVMdks6HVbJRkLC9W78aUafhw",
  "key22": "33mQqA8cMGminpPP63f1oQadTRPSDiPL6pyVASFhMYzcQMoXGLBzN4pJ9kkEB8XeHCAF7tteYt6u43NssRSYJws4",
  "key23": "skQ7YNzVdwY55wmxr8L3iaJkrh2addSEkxGQg3LfN2TcU6V8PN2LD6ktBfNtHmisxU7wXy2QGWS8Zfaf4JhkWWE",
  "key24": "58qShb1JZLG9SuSmnXBDoBM5FApELzBA5JTFjkKwSX29EUffStLjMopF39o3phfpbtZcsCkNhhnPtq8NaMgGMJi9",
  "key25": "4dMkuhyEmaJHd5N8kxWXVA5Cs7UJqM1ggPbNowHdiy8ufn5YoDrDhmcPz6p6dHfF6GarnRq8n9rmdDGjmsrbB7EP",
  "key26": "2MgRnrDoQhgwxkJRupjDmSNwBRh6BZqGaBLhxR5yXvXjdNX3CXDJfk947NAsw7WdfsdtcrdH1E3rhEJ2SBA8RgEG",
  "key27": "M3VeqmSgD7qU6NHvLL3E9A3FzjcAo63GWAYfUUDYaqw3tfda269XT6q6Nady4cwxgMEFbGQkUdtBJHqqQ61DRYx",
  "key28": "3FkF841gt5QhiSEg8LMLq4YZGgz5f9EyqZNrWBHcMA5AdW2JQPwyEDuyQGMNRj5Q7TL4czuH2MfjLosG4fzKHhCY",
  "key29": "2NHUCcxH1S6FYvhViQDmS2iycwLrDDxf9wjBmGABTptARREbif3R13D6v965YHKLrudD87vUCYYrNy4EkJomsz1T",
  "key30": "qsTc8s598UkZ9hKeKpnff3icxG49PvrwE9ViKx4tJnBB8Gkc5vhvwwMbyyV9pQNdHfeKgwMNni3oeexVjmE23nM",
  "key31": "5SreMkAhyZ15uoVcDdfT14TK9SYZUZriLMjDocNPyTrm4o2az99KJWAJxmnuhBbdahwuFzx3kGNWbQZtQseQyr1q"
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
