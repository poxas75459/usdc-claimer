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
    "2VU6JvM8svtXmps29jQW4WMQZYsgxKxi5fDjNELugoYbMHryD5yjtCvYxc1U113SwcGtxxTjZFyzczh8fLjuyVf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwS7NgWnh3DFeMcR6b7VgW4HKkGzTjbdRpyeLi1wWsQMwHLqAycHbaqxYNdX1KYoAw15RydwZtXWTq9mjdDAC4d",
  "key1": "3i1qUvRfn8dy55Vugaj15QWouRCFpMAo5uTVoT7x3tHT91s4FtYGLQJMuvxGPL2EAHJjyFNWnrfQFUakn95r5RGJ",
  "key2": "KKwTgHA48V4Ki4qsUWpfFvVf4ge1hJZBC7ytsyvKCh353A7TGC23dVfC1J8ddjV4X5yGxRnbsXxeL3sZ1GF8KFD",
  "key3": "4PHyN5xstTVaT76LHDDzuoKVTji8dT81PCxDUAb7BGgnwit34vVnL95X2d7v3xhWYKUTrE1KfarqXAWULGA3doYb",
  "key4": "3acGFiarTCDxHC78sUe9yeV7NveJ97K5dZJatSQRa5jcU9eapriUVEDBVArZsfuMHzfJRntMaMuymoorysukehRr",
  "key5": "4J3ERiJej1fYnTXTsAw9HqCFyTVURVj57DgKdxPusRyNuFGHJVyN56FA7sHAu8EHZr9uKwYkjGbbzF5gjmePg4bL",
  "key6": "4Smv2ZATWUaRYQCLzasLU57rucDNqaxhfbnUqq7YwgCpjiLTYhXe7UMgPr5i4DNsteUMKNoKYfkWHijzK2kv9ppq",
  "key7": "4hiVVrDb1QSqtHZC3vV9azG5HHQoPgRNL9JzLi8Z5k4QNQXJuL2J55xXDt58wxud7g3Sisszph7L7KgUqQjeFfeq",
  "key8": "c695fa664Ni6qJSPwcutEoXmtkd8bME3bSPLwpS9nvFGTfHzckVZe7eia6G9vc9PHcYGPXQr5yM14Aqdg2oStCd",
  "key9": "cWBPQudd885zTxwWAUCfmHt48fciJTYR8xc355EibCZCwdwBB11SjkTdfM7HfzprxiDHpJvAC1Hd35Py8A5Nxkv",
  "key10": "5jS46g6MU3vwdcnFnCmWAaRYFy1CZ6gHKdko4Q62KhAwu54vRUftRr9VynukWjDFvNJnNH9rhY7yJPhVUFFcXajF",
  "key11": "53VWBDTrkcUacd3bjybUKL7WgQJNqLj979igEGHZgVzT5oF1goj2Rjsey8sgL8V2kRDAUXTi9qZcHpt7C2bEuufY",
  "key12": "5k3fjikCmAkgaDp7TggLrmL5JezQgRrb2Daio86vQ1uyFdUNcxJeyT3yZxaueE6gzZev6J2aEVvhnZMYoZ1GyazJ",
  "key13": "41r4NxShVaqYbAoiE3fpdo59aNnevxwLD2sqVCHnLRS6xVDLzwFXfejEswUADeWwyEaJTmexmVKh1eoKN7xLFWdE",
  "key14": "32DfKhjdcXi2XF4dRfSLWMy5HFYcbHStSuVZDpuWV6Q7b8dLgxoAFkB1PvqvVQN9yWFeYwMXd9rqoZhFve9nSpQb",
  "key15": "3s3EPHjsaAcDNbtQyCt6ZF6H88WewJGXqBU94qUhVMfxS6v1pi1Y8NZM86evznASqX55QJCjBsBma747DSJj85LE",
  "key16": "326MeZHYrnN2XuX35ucu2d1i9YBrs4tZ2jRMvQr4PUpkj42a4GBp6mGAunwYAK4cxD8HALyjNASSF6ZpEFmZVGhe",
  "key17": "127vVszdJ4oD3NYFug8VoEcLXxyYxuQHMig4rnxGtnLocrQi7ouySvg1GHuKxck5BuzTu1ASxob5gpawdbR9X3K6",
  "key18": "5ZXG37j4pYhLzL53F9ZG85j6FkSA6m32WiWNoUae18djEAutssSZ6vQpkM3aGCAMfjop8AGUSZGELGGhia9bpc4N",
  "key19": "29cxt57KEptHaeuAt8azAKQUVt2B49iTm1g216XXK6bsbKaarwgUAdGKLkvHTsbz8rgUVtMjH67Zws3z1hqfyYaY",
  "key20": "WS2Ac8YpmafuEii4hLTfQ4wtpdfKFvcYvgkccy3GT73XJVSXjBtZy49uB4CBvsTV6ZBgSzEBDNK8sMi1WgFj5FQ",
  "key21": "5KGhougLxeLhdbj8ZQoAhnXsnx1gFgQ4dGpQPZZW6xDzvwC8WcNYCsnqBtVsi6Z9kvAHo363kB6X2TuMzVkkgmn5",
  "key22": "4JZvWEeMWT8P62qv591HtnDdpLjswaKsjCyRjJrcvQqxCi6cpqCsLCZW35Y3zRBQf5X5m6Z5JMLobGQ2VE39vsEG",
  "key23": "4zdkVVi5ZLyL7i7Fpcqg2vpEt4neNNdKEp584kj2Tr2QTmQfEoVdpLe3boxT8mgKgeZdcsT19bb9nbL2QmAdm4CE",
  "key24": "2B5JeQ97YwkuTzJg5ggKeNPAkMwFBcprAf3TXxsAEqS8Qs3u6v6fqNhLtWbSHYdJD62pGsheaHAP2rJqi8wn9YwH",
  "key25": "4SampMurTZgmisd49sRGuequqPaXpaiLh8DMHo2SrHQxTi6p3zSvmJsk6QpYb9aJP2dxY16SCJpHnBd3yHxxZv9L",
  "key26": "5RuzgDCBFMH6LmkXxNFA2b6MHaxJiaUdWtdriTxAya95VrtiJ1Vf1YuBXQnjYwdJMUtCphQRJZ6iuNZbRrkkmpQd",
  "key27": "3HxQuiNmZEWzYG8pK6nvFpHMDAjg8gFcLQwVLWaSTBtJFjAaboS65uvwZkMzYZFf2qJovNM29NhadSFyprDApf5f",
  "key28": "HTzuf7mCBvjmWBi7vx4tEfEtdJHgaTgSmNxy4fkbrkiAGnzMHRLoryVc2KnCjh94Gaw9e5DKgQByhYrb7d52Vyt",
  "key29": "5zHc8facDmQKxzbKnrKUuLj783Db5eiGUXWpUJwQEa35utYH5wu7uXWmiYRD4trAdQMDv9473gxdyLfQkR4GwU7y",
  "key30": "466RBawrGYtc8WUgU6Daf8rTsLeFvkzKTbtDBQ1XCLo2eLPF8J7wYbNDfYwFcmdebCmnTFMyqDhGydJ2Nr7Kf5yC",
  "key31": "5ht2Da1JhHbmyCWGfdG6nafUbMbDoUWxoRE21pkF3QKrTPMY4EbK9cSZoq7QqeATKabCpniXsWKy1eu8a6dRDCBc",
  "key32": "2xtfVrZv5csLbnqWBAnmzFXy7jSwfxiaNNKrSKqKRFxUphwzCBaqvxtmXPqsv8jNyrzTLhVx4cjawxGqJQH6YsLH",
  "key33": "3beFe5E7ngFyHR3afFkdzGZDTGdRmcU929fvocHBchkSw6PChed72jBPQ9DBNcPpi3hsiTVv2nz2RmVqLcGmiwKW",
  "key34": "5sMtASQVkBFsnCetVKE4GrFpDHeYbH3QjnG94voYf3LbK4Qp1YAjk2hmCq4pVAhzRGskrYDkeBFXXHjYB6ZtJ78n",
  "key35": "53WPtW6dsDMJ5fuh7AXdmk5zHntoc3bM6xyJ9oK4xWCXgckKEVcgFymVHcDoFAWSiyFvUzceAfNAjFZjTbu35uzh",
  "key36": "3FtctWSZ9igZTowe8oBNcEtNPwZYZmYQfH1g3JNPHcuzULZ6SnYCTbUP3qDu8Ry8RKHBgZMJj5QvnxGyfJUY2tfa",
  "key37": "KyvzD73yYPWfPj9sLD7FrnDrXhLvnSjkjWE1YY8oEXQSTqyDVfa4HXaa2J1A3vCDenhE8FiQbnTdUx3phRroxZf",
  "key38": "39uYXppZZkof2GrAJT16T56io8p31v9s6U2NLQrmBYrywGBEkmuGRGsKmHPmG9Rtxuiendo9i3rauotkULaWeXoa",
  "key39": "4ya8PchyuChXQz5kJNdLQqUJHgo1TUpkk6EBbDYAt442SrnFWGA2w2sfTdn22Qb53A1mXCgSQmkUrYSA95WeKJ5e",
  "key40": "5GK8MjtRnp4s4K45qjGZQfzoWT8e8oE1AVj4EuGe2KyR6m4zfWwCdzbFqc5WnjDSfWgZw6xDedQzDRMxemQ575HM",
  "key41": "5j9Mxnu7T4NvRG5kjzV9J3d9EnVj4pahDMKBTFmuvaRybTAviZjmut7FSKoSengUxEsdLhXbqvttR97JSUzbCW2R",
  "key42": "3u4aahL7FakKm4k3P95cPLkNUMeLW5hS3xtmCX6ieAZfvmSQw1QE9RPBymAUVsWkmgYz51n3pRPvCcVvHgXe2E4C",
  "key43": "2FyTdiDpqEwNAAcz7d3foZBZ8mXU3H7dFXfgfc8CFXf9yMwNPf5MXRYHbQZECU4xgFeYQivQD8gnBHWpNW6HQ9eP",
  "key44": "5NHPtUw2zPL4BYM1T4tSAMxx1Fcu33DPUp4mas8jSr5L5eqcuMoUQnxsdR9UdZTTMETnpuaEwPpyJhUaEpy2TFAt",
  "key45": "5M87uNwHkM5KZYB8rF8bRtwjHyFMgR1nWrKLkA512NtSH1SmX57iwnW7yxXDc65WFDkLcTDjtw4dpH8oLre4M1oy",
  "key46": "4RdphtBRdjESpTy1rM21Bkw4tYHev2NbqbQxE9Xj2kJZg1HJPMtz2yagfnkt1ng3Z9WHtEaUBT7vXrq5pR57TjrV"
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
