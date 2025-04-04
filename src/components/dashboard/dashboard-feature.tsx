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
    "2v3WayPhqkvGj514tK6b23x1bRQ7YwMbCQ53KtXJvPasYVQGSGbjywYPEmp1uf3rhZ7cefL3jL7vy24pbBfNv4u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pgeghXcGuYEZrhovRazY3AJmLCuNtZ2yo8d6KyC19VVAsKZcE3EvhaioHLfBzh5ntcPDGUz53CW6opg1K5QhRs",
  "key1": "4PvTUoWzDLPNnevLLsvXpZ9JyHRebTmsgjoiRx5Nags2hpYMpDKPvMk4tgyMoEwzucw5EdvRnEjZYnHW8FxiL5fF",
  "key2": "5DZHrtdeUKaXSvRJkcVaQ1Gg9mqxYuivDpznzrASX2p92vq3b9XycJdc1KtpadKzYRrFZLMYZXSQf4rR95TU1bsU",
  "key3": "2y3jWTzdWwgM92ZW6XBoSSfy54Vdt7EFv7XcogG4Yhrs6EMws2NLumVHjnu36ToNtx4kaduC6uHRea82waJLPX2D",
  "key4": "5947ARZs6u9eNfzi9R1vgUVBCcbftpKDtgs6VySgMt3mwe2Pz8Kx1WkgZw2yzXJB6aZ7yd2vRXXU6P9Ez4TUGF2d",
  "key5": "518SsVRiJ7XmwJKibii7hJHgJyff6n5jBuh1CcBM2XjnTjeyo9XvPjS4wdGNZdsEFK7iMxMdqtrh7fz2srwG7F1u",
  "key6": "5dH9LafFa2Yhpkq535EBDy4kT9N7ugEt9KLDaa53VThxs2H7i2M9MJejoq5NEFYBhaQgfHL2wj5bByz25KxZiTrt",
  "key7": "3CBE1ydozfxX1xKwZGm3aewBayS6xta5EoNsYRxCTmLYfqYKBcVYJLm9fUnS86VgtEkLU5KPSDFruoYMxXbJHJ82",
  "key8": "sKcGoMFYthShhumA2dHCSpYvfKSnfN7RF1mLCFDq7vgM3BgpU99wCZiYc2wS2TfMM6DucHVngbJbUpVcBcmTa23",
  "key9": "QizJeFBkjZWiLVtDCbv3PmVU7MzyX6TGsm9eaEEH59q6KgQdGPWwB2pYzmiNdzpGBzN3aWtKk4XhhuQ4nxktWHU",
  "key10": "eq5Gsxm1T8bPvc1mLmWzpzh7SHC1A7YBdSG8pc9nk1Mvc6pqdp5MGoXhGpmtECW97BCZ839NNBCSgkCBDgDcS6n",
  "key11": "5ZQMrMwkndEE3ETZtiTWkELXa8zGiQTcBqhJmkWbd3UaJzvRqxs9ZX4oMeR1bRWVvEYPswvkSHNEkmzNVYrcapnx",
  "key12": "3A7pugoRWjyBHMZEL1WhCnotqsjKaWkPGR2YnYHJbdktgUp5FzpPEfA6tYFrvWzV3q6pyRgVUzrxRs16Sbeb4Skr",
  "key13": "W9EzjvNQ5ZRwXaUjQvD57u6XhMvrJKVRa3cm9CZNgch58nWbtqFfpGZU2Z3C8nRsRfmXwQX4yaCiH9ekgBofvSF",
  "key14": "vh6KtXbGRjk8fYhAnV7VMfVWfX97kmNqPXXtGGUEhFbFfENsgWQFLP4NrTuej3RcjwBKy2vjPSfBKdh9LvT9vBm",
  "key15": "5spURjVt2hdPLraWzNUaTsuu9auZ6qT8qcFLPV6PcvB9WGDb6FwbWzE6pZo4rbz7g1hisDyKaELw23efxDEUGj15",
  "key16": "3PARLTahaCUH7iMqfSnz7NE1LJnFhXNE3FY5z6drigNDEHX6ciNjLTmTVG6CEdfw16t5wGT96gqwyafwYbS1zufm",
  "key17": "WF5Fnm6NjgGD9BjGPzXHayLQKYoQ2sKKjACz3cJ5ekbyuw4magKaRUreGFFJucignx2YkjW6TXe5rodfKrwTiii",
  "key18": "2CRtM9LD7ScT4f7qPttVW7WddreDKkiTmZYXBiyTwqgkuBjfhRuC3ssWxR7g3Lgpp4hiew4KUBa5kQ47negySUFD",
  "key19": "K46X26a8fA2vcvCbw5vXHZUKqUk14eHjK2iHCjW1T81CN5LKPGrAAeeHUuvp2xnxUD1WR5nmtUD4zeBYTfjtYJM",
  "key20": "3JqJsxDDf7fgBmAttMv1dmVvYswnFfWGQws4G9QkQRaRFmvHYSbRnZVMUBFFE63nSWjzctHLZkHgr7R8bVYsxqru",
  "key21": "2ye7KypiNCH75LmUNpftRxwdHZugKbmJw9LNAXqFXExpoWa9CDqHHVNYNPfkHRc7M9R4LYScPFR1Y8oEEH51vpTA",
  "key22": "2K8en36bm4C8YLGw9AwA359fWMGLojxAv6uvMFB2BfogWd6pxzUr1w9poM9Zyx1Mrj7tVmcC4jXVtPHNuKAUSTdN",
  "key23": "3KvuNcxUG4eJfiWzFm3vEf5WUpR4AWgD43dBcS1QdRTcy4EM7D7bhsBEH2qp648VByi8QtiLzGuYoFR4XxMKbcJh",
  "key24": "5WCGBKwJwaDch9RjtsQhKH4Eq4EG3DVA2npdAPaLiAPqgBAT2HKzyRSF5143waLCjW3NGfHPNvXSxuGqB7cXbRfE",
  "key25": "4poS3KsnY5jf8FYKYWKf737XU4SBh6LxqUHnQtaTNUS6idRLxiKhQhSeSnHK8D547SRoVah76djR9weUD8Lpaftk",
  "key26": "4Hm5Qvrn9a25G6SdfsYfkp8v8ymnadcXfuogUwP7vyoR6Zt7J66WaRnBmYWz874rJEoAsbxyfzYeR45J2oSU5KSy",
  "key27": "o53fC1kxyCS4ppst9DGBZx1SewS7x7BKXszetximhAn63gRD2W8AThEGkT3pqAMu9a7FqSCYrEKB7BmshJJDkSF",
  "key28": "5CGgByyZNRw6AQBYRsuFV4H4xzzZmhEynrcu873JYcp7DZ89iKgvBq8ZNo551eo7FcwD5M32Kb5QuHqjkQG7F2p4",
  "key29": "5eU11k78GQu7LsMMpsT9pw4SfYo7Pns4a5GqoxbLysCbqpauaT5RtRtZR51ZpXvP454oH2rHd3bbffbZnzedsXBd",
  "key30": "44iEsyF8UG1Fkmx7GsTe1Axp9K1sCZwCzZyLq1U39xvJRFjeTFrpFSV8AQVmeTCXXTmaWBLEU33Y6ddCXKHouyQz",
  "key31": "3Y66zpCMkFJH42XttRAUPrJ7oB1ome4cJY9UCLcSSzQ3mT2MYHkaf6y3ru6EuH1YRgjMKZV8tSLQku3YxUFofi3",
  "key32": "5L8rLrLrKTADpx47XtVCuBEy9j3YA1eqqLka4D7G1tgo4QyrvaZUyN9evFEnVPxSEjZhJ6gcfKrEm5B2sdgqHi1K",
  "key33": "2392HYyMA7KiwPzDUcPF1HH2p1k2k2QVmAEZPnSmEiXRoC1hHPKXnxRPYtfFwJWGuzFe6Q7ijmSzj5RFH2ZNW5Se"
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
