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
    "4LJNqCstAFuyY1gdRvpSbJoUbcdLLg3Np9MAp4eCsEjpCxrYkAcMawFUqc5HcxEBFZCW9khfhfFCMU5YzZdDnaG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAb8EvDUGYqdKXqHxWvLytNmwLLQATohD3WP985yiBJeaCpbSiW3w7Yw6wAvW7UB1evEHMSaZa7DzVsrDxyretV",
  "key1": "4iihpVNHs4XTg7hPMBZzcxjHsXoVTXVUCY4BHEChjt6ZQvNr6gGUFqUnrp8UsTPL1NRQ6QG4SiKweSqC3K636dK1",
  "key2": "32FHPzMd7umGSGpEZaSnVXUVaExzhVKxXbgUxxskQceDmBwajP5CrhjTW5k76bmt1Pt9xvbt4wBWhsC6ZjP9CDCV",
  "key3": "3tbYBYcTbPSyqxRNvgK7ze3vCHkgHsx8UXwZVMCkwkB6SDrr4U7HrxrvZymZWeKBoT8xPyKdGGYbXondaSUXtru4",
  "key4": "5uRVhhC3hybGaqTnekya7u8bt39iz5RAEBq7FUCvGKH5ozL9fcsrqWGEbv8uTsBoeao8LNzjukDqSENUMpf83nue",
  "key5": "4sZboySomGY2GFsFjjY6PxCfpbFzGtGNXVezK9fY6pwceWKcM8wpHUG155HBsLN8tmD5mrtiyedZzixhmyvxLGz6",
  "key6": "2gaxocbbznpPPRtAm3qLWt4eAbrpXjQvzqPK8jvqLgqSmkyxD3YwBPf7yHAfLAGmBzBkvWsRijzCMSdvWZpybxiR",
  "key7": "3L3FSoAqcxAHdHjejukossEKysdtKRW2LmkSNgJUTfdwAzLBFbkhpwKUTzSg5ZEF3GTQfrgDwymwR1H4prvk6wnQ",
  "key8": "39p4ANUteGxPbentqtwcsuSdcamjdSbzXU2RWJzKJFcYgVxSacmxNTgmMTacta8wJG3LHeUTvUtTCA6ZpADSy8gw",
  "key9": "5Wgm2V37mxEzVuDZXC2s2eoFiRQnw8MGSRKrPmiRCB9ziU1D6ebTxPSfVR11hdX4EKiiqAiZHXgJG2kj7gzk5dzr",
  "key10": "2NkuXxGEhjGiFDnwsztgAceFPFtxA2EZur1mYkhCF9zZVmz38cFZwxEuSiHULbNYXLuob7HoYxkckQfHdRjztZM1",
  "key11": "4xX11czH8ePMTbYach9B33tsieUxMrWaiQFtZ9zspDutaQRAfTaytLKpaNmAda8rCQDJn7pRzmCbiEC96bFcdksR",
  "key12": "5E5L2vuy6AdNATJDwkqrqBmmwAe6VqN5YxQJffjUEQU5yWPpzJfdMDN6e6Qwkws6p2XMsi7wpx4q84hhabF18Diw",
  "key13": "2dvwedhCatma1xy2RWy11NHXK2NUgK5gZnwkrUVAbdKP3Sx41nyTQCW7YK9kw513Xouy1gN8uNUwdArjBb3rDGy5",
  "key14": "4Fboo5ZXN59TDpi4thEQs4Ncq9fJPwN9iBD7H9ny5NJnPJTcJkGNYDeRVFZU2bvyDmSdj7p6VE1TFYaDMGSmyMP1",
  "key15": "nHkowm4dk61Nwb9YjpTZrYau5YwURGov5skHzuhDTpffSGgah5tFSFVDSgyKsMtUPdREmxiBnXUnLw62djNHPs6",
  "key16": "2nfJizSCzfEYyWNJBhHXXSVH7yYiWPJ7yzXhD3LGpdD2axyjMWdQk3R8bGYHt4rdcN4bXFKhE9uVf74dxW9LMETp",
  "key17": "5nAnjUoxH6BVut4FF8C8eWDKtfAEW7mf9UTdrQ7ZxHKLwhdZcbdV1ugABsRRmHFk2qNYWPSpi4m4wf8kojo5Go5h",
  "key18": "4XRgbEeisxczBcrELpMRnA3Vra9F9JH6NFqir9NFoK8GqGLkvUZsfQQ3FXsPjhBr6zMhmxyhVZJYpRaR8gMrASpq",
  "key19": "pDL5d91vFKDwJvm32uurDmCexbM7SCehFwH9zTmoNWfG8PpgxrmtebR78jNnp4jiDGw8yrU1aASMDi8JMpQbJgy",
  "key20": "4ttbp917yFEecShbWzPmxMYsTQEhPVma6iSw7WorLYoxJN2dUKyg6gyGAThBbW8CK3bpFSUdD6ghmYk1thU5sS3x",
  "key21": "4M8a12VY3Pm4vPM4L14zadnDmnrzMQwrjpHPXyJZjg7owdTN8awDSL8sPjMpBwgesFchcbAki33A3znXznYuJbi1",
  "key22": "764rXege95TN67tFz9YNn9ncQi7AeXogVPAE2E7xmoec6WJ81v3EwsbWYNjSBvbqBDLhPz6tVnQfKQRyeKTq9NY",
  "key23": "3nsv1Vx1h3n5cqZpVp79ZGsy9nPw83FomuJnKCnAJPvAEomohB4ghaXhSL9AavmtfC6UVx76t76maxq4JG4nVn5X",
  "key24": "3aYhNiXS1sQVRqonXRPgsGG6BPuhJoARSUkyTqoue1RHTBviCNmYFKeD3qp4ZpJ8KmBPRdTCJ5xbueTCke6hQSLs",
  "key25": "5uzNZCKzRVYYMEpUUXSa6aYxbCyjBvM2TrE614QZfdBVLMxWViHeTfuZLeaxRYZxGvCNZ49C9J7cJYwB4RkMb7ug",
  "key26": "2X8DxzhwNbHGEavxK1qGLjYGe3QT1WcQt65s5UeTyhqcZQkVBPyYpBLdgRKwX3UufgWu8akRvKkSGrmcywaFSkrg",
  "key27": "3QF2qJEBe4F9XMa8Snd7R3GeiQ6gm3MEqZWdotqCE88npct6gp7oAn5FM51a9mgzyXBAy6Rqg4LmF2FWzj1SwtFX",
  "key28": "39DHJdjahV5efiLgTAbC2VHuP5WgKhJaNxHZpdNRX2MDK9ouQt3mBJ1Cywx4YiM7oU7p1CmgAo2kJw6paXeCzWHz",
  "key29": "3ZPwdEW3SLMoEPWTYZWJnCp7inr25JAx2tnx3QKg3mXGU3DCJCTMRYfX8UhSC5S8KvTWa8crP7RRJbT96nFcwpdM",
  "key30": "2ioGRAoExv4sSAUG9xRSjucQ9CgkyQkkNCUSXfg9Qhw1FUSVgS92T1U3kxr2e2BE1vKLxsM85sga3GjvftS3d8gr",
  "key31": "5o1UpSWeEk1m2TAX4aHbogtRiiJxhKsYRyFvvXQFsdRv2ypmmBmiRGEzng79hdCX3FixKKEKcGKinQwoCMT2HdjY",
  "key32": "5Hhqg9YQ6mm7ssZeYzW3izHgUhDZMVZ4CpStkBEYAd8LkDaNfqafcMQREoWQUzmGK9vp9MuFN2PoQBQRvGNv6fYg",
  "key33": "5pPQ4Lc39y7dDzobMFE9rRuNTSg354GCMdxzMsizCtqd7cwvzgJenAFh3UpTkPwUb345A483rufwBXYckHkkMGPi",
  "key34": "5EPARJVgPinUSmpauj3tD4HCTut7bJMhyZscSNRLMsvbuLR8XubriVkdR9MrLRUFarMKpj3dzCYxtic52a75DPXi",
  "key35": "3xexPB3bPirRj1M5yUFccfp6TVftrhruffdpTWkGKF7XH46UindxX3tsXC6RjEwqRaM5N4rpKVLMJE5oXy26gifs",
  "key36": "qMrTHzqiNm5bjD2o7ieA9UnqWhaoZipZ5QCGUvmgsVFpKjUg4Czt3F9PRReUCGboJrbNLRYZftrytZJPjJZs7Rd",
  "key37": "Zi498XkYsr6CLZEnqPhcnoePuRsGxcPxyyxWs395bwVsG8iE7H1EUinzq69iUxLFKHeWYaaXErhBg33T5ZGyuuq",
  "key38": "4oCFhBkz7LQzcbYY55YRfnQ16oLDPEvtbMZZUG2E4kKyAeCWUXkMEf4TFDSyRmfMy3HpCid35ZeeQxMKBHnPqZ9u",
  "key39": "2WZsQvhWeoEm63vZtregumoyQMDbZ5SQL5WjFLCCLCSmWGXWve9UCGUqsSaWZGcGHFLab1ohXhidmF25PGDRLr8C",
  "key40": "ECmckgP3R8oPSKFdJav4wMzYZuM9mCF4LX55wywFVmgvTg1TaBSRHeWwTn6QSfVF5MP2oBSGRH6tqUuJw4BVkVY"
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
