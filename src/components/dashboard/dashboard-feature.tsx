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
    "2fsgYv9M3cNwhTeMG4UqUgcUDcSgXU9yPvDC7urHtA4nyHvPSJhZB2Pd1BWcjGxnF3MyhW47eLDfmPTP5kVyaZo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25J6zHoFUZNCjZjDaonU4nVxhuCay3LGfaGBKdiDiZCksMyfxfKdxWQ2qxkoLmtThkdCDhKWBY3zs8n85j1LGX6T",
  "key1": "5fiRoSAKPou1HZviMuR3T4YpzRtxizuUWBckbbMApDJSG6RPAjqd1sDUCGSFte57H71wJDmHKwKBRKNAbSGC9iNi",
  "key2": "2XRptpHA7umchwuLPRSc5nxsxybGeJ6Ak6KkvpL7ef8MrfTutDbiXQfgFt88VkQKKYvMiafmYWzPPqswTuDRE5Dj",
  "key3": "4XRGw2Cb4Jyz1Q8VbZavve7gDC5f7Hqc4wFPP8Q63Ubhe8mWoY1UJvKrTth5CzVSudZ7Typas2zJmCxkrRoin5vd",
  "key4": "3gYJHjyct62fvAVEkugpZUbKv6zrSApSkBkmND5x6rBMfS5We5e43VKjYraoBJD2W2cayoyXRkJSs2YCrFWu5vvc",
  "key5": "4BVuQfbsx7ZiVxd78FNrzEbhGLpmrDJ3bcmNh8EBW61jpKKwwK4FhHcK5en3scDxoHg2Cc9eLQJE8mvUfGt9cdoM",
  "key6": "5xt4djEiCSMhFqkGtg2qD8KU9BZkk3pcAeYoqazvcv8z7qJCjVU8Px73cCbYjA2xJU4wjrHSLzxheD9Zj6ubSC2X",
  "key7": "4VWy7mWsCAYi6EjmHG7V4MbnoCmUibddAnYFCrhPfun32inPccZoQNhFMd6VvtdHs3TmJZzBwLnXXGLAW8uBdGen",
  "key8": "5gwpqJzwZ8sjwSvCZKCHnSWLyzSzcfTBMHAXuHn1HaAqSCDG2hSayavNstCjkiGF2kxYqbtqAfZz5wjKSLKCqgZ1",
  "key9": "4YnEoc8mi9zPBnWXb9EKkRufQNmvJt6KR5pCJWXmrWpGSRRRzVVm5PhRUuxpDGsPZQHptfu2cT3Bh6gSsVcivrra",
  "key10": "5niuHroADjxk7BmUMPUYRzFABZncoVaraRmCXrvQ3pYziNmg2xoMYrBGX32XvPu4Wahw3V2ABKUNqig77oQQT2XA",
  "key11": "4ykFDXLgza5SYYVGQok3nNBee6aZ4rEtBFVK8zHAXrFvfS5e4nqi9ZfKeHf7tyarrCUSLpMKuzKb1FKFieYwS726",
  "key12": "4cB2dPTGaV4iqRZgfoU99ir4qZPCqCw3VewHM9o7gVfmVJFHmeTBCpCicZeN33szX4nRiVKCmk9xUAuJhLiCGRCc",
  "key13": "PnrtpeW5ChVWbu94fCXYof5BsYGrASmnGho2RxSQUHZYLj4uRmxN7jUzEeNLV3kxdTgHTTVr4fEz19i1vkPgjQX",
  "key14": "LCJ3xB22jdkuayp2ZixxJKpBQWDeRyvacvn8Wqif3xnegd6sj16CeqwiR5GfowLPmNqkVSU5TeG3nuG53n7Mf6n",
  "key15": "6uF6Vmvi11u4dGSRF6JHnCsf3RPo8x5ZyS3Y8ZazkafeRuyxUmDeCiHA13jpzTcMdnTt7eHdR19JVNf6ZWy8GEy",
  "key16": "57TNocsReQpY5dEDeMW4Ya5UBdwYap9EyZQueo2NdEQuf11FzESFuzoXsUgEhuKggZt9uVmSVhiCjbVkXDz5BtPk",
  "key17": "RKdNxQvr6x6nXbpCUwSm4LXhz917KaDvWjf9aAmgSW8pspppCGJSEC5ac9Myw1qM8gAU6YYqoCnzSraPoDfBwoe",
  "key18": "4sAb4D2ysi3FG1C19qTQRhAVeM1UP91CoDeH7ECRa2xCRrosqsELaFThsorUne2GDBBuW4XrjC62jKgJgePAbJWk",
  "key19": "4LMg7hJouP6oQuuzBpE3SAwfzKfkw1f6LY79vGoN2Ct5Lie3QQZZNb4eQy7URuYAPdUHcExXku2YU8oii92yeteV",
  "key20": "2pXgrAJ5482xJAAxVJ6YPSvEjaMFsQw3WcJwwryGNtVcFBjdfPntzqE6FMgYazHvpWToEkN6d9wxt9xKiwF3Qvs9",
  "key21": "3L9U7NgTZLMR6ot9FzxsMUKACKEFnDC9gqVtJ9RSCG6cVjZcwNJPkcnnv9HDaWcCse9A6vsVNa1yCV9LttaXDbV7",
  "key22": "2VCP8ZwX47Ls6uTaX7vDFbeAxM1F7Ko9h5GzzqbZz7FCGLpKyNaJynKkMRsan97aTYgPfLiPtq9nNwaJhqyvweDF",
  "key23": "54WeW6QozsMaLhFtEn4YGhddi6vBvYFmVSwFCjNuaaxL3wa1hbVoX3aNjoL3ah6p4SY333Yu14nEH6zyuxPJkKvX",
  "key24": "2SMFrnoEViDacwCW9H931JDob3VgQk5NqJK5i27oqhEr5bzzpGMXBCqzxUKjFQCNdtvsPomK7gpMnU5bpuCufPii",
  "key25": "388EvE9znpoSrTkotpwBtxcqayh4hhE25rrASctcUY1SvifiSH5sEPY81LccnV4Js9EXPAAhkUYcTjaahuXkxrSN",
  "key26": "3Pu5JKn9ToNqxxrvWhPFnrFCCDdLt4bL8Mqvou2o1epNHKqdhBUM7wdPoEmwE1DmWPrVy2iM9eeni4fvFU8Yu15e",
  "key27": "g9jtV63c438MGyL2CfqLS2Jena6vS4szS29PMBmGrFq1yuVGf4cBbZUT8TidurgSjopN9Mj2W6WA5NJwJdWi8kn",
  "key28": "4dHftH66Js9voWfKgSu2LsAm7bbRB5uugSEvPDJ6TM6bHko1vFza1edC5CY1ivAr9FXg9Z5hgSxPD2nuh1TPCAbX",
  "key29": "2A62tv2MgTE57xrqk39mo2ZSJjn9UMiRFVjdPyB3Gw6eysAY38F3PtoNrv6ucaR5bwXd9NpTy2QfWHC6KCF7WCSf"
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
