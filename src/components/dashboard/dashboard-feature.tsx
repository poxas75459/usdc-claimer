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
    "AMfH9Jn5mwwEwePC7ocWAScyhEbswoXKR8JpNF1d4MVhECLkCc4heZ55jhp7utU3SKLG5sndSBqJ7vXH5tXx4o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGH74A7FnKy6b7JpyZRJEbnJyLxd2REZcwYb46c9zkVqSkphvac4WZ7KomTApEPjorBQwJue5Ev2KwRDf48acYs",
  "key1": "5UFepK4SgUPNBGLtKvFeyBSqJ4HWUm4k4GHizAmnuhS2N7kZxEGgwMCp411DC2fiSWDJBqeWhkZURSthy7o1syPm",
  "key2": "cx8pCnySMgnnDvJEyFphpq5SBwT1FDvNYPKkxAvuaPuCBqnBfHAsTYnHrP6fkg9cUcZaYG6yZApJckzNN4mQtoT",
  "key3": "2QNLrwuHHVhXweeowTYqnCHpDdg7ziQyYL4Tc8GTZR1MVVnzVnaFcdzGzTLFw1CVkisn2zV226EC8SawmCnh6f5X",
  "key4": "2c8BtSCbiNuSxuKd8TFbyJqnVfp5Nb8aRc2yUJmuYuzzLA9BtPFtV9kRnbpMs1Cm36j7uwZfU4PVAQUHT5uf3x3w",
  "key5": "3P1Pcmq8TpUbVoTFrAhKt7QUrsNAaP4ZVvhWuvXy6yALjb28fyFxUk2iR28tb18JpKiqhxzn6W43MdgKRg3FwEdu",
  "key6": "66aZjQmwZdJ2gaC5qYnDHKkdB3vruYGWw5RtJnsKHWwG7ugzJKUt7KthRsthV3UCzrMx2CjE9jyEvS5tdfvpCqeT",
  "key7": "4EgyyhtoWBxUmduSEBi4ZZGgdmYLHDv6Ab37tTsRk9gny7kBt3xtKb4bphvC7rjCfquC8oK2FSjQaXL76kk85qhw",
  "key8": "5Svjo56Li3SwUyyr8RpJRdBBeBXGzCGv5Dgg3ci5szK4Nv7Mh5uwrWPvyVw4bwGWyfa6QAYF2uLnCEk5qd9CkBgq",
  "key9": "34Z2W9mbnnxyHuahQELE26JyVFcicvMvR1xzBwo5ZiWmkawzoq1dcDagBccqijGyntSJHieXrAXaSqovuFXFBnJg",
  "key10": "4HLUzBLAAkUXNQS4zg1xSMRi71f7D6cqwJE3ENx13qL7PrzFUs2pGyJm3bB5rcAzhanEBEurmqnFMwuy6J8tvfDt",
  "key11": "5KARqSanxhCpD6HnyP2aL485YdQmvGWPPrBHP4cWkzzxvxpfVK4xE4z3EnHVFWP76EQQJ8yC2byWxdGyqRK5KAN4",
  "key12": "5PH3CVLLzkMcnowQSN59uaqPdHTqQxt1QNBGjrAgQLRER4ykgBzmax1kAaNGPMdd3b3KvqmZPiwo4XsD75wXKpW3",
  "key13": "61fq7GpwHLa2pFQCjVTqGkVCfFRGoUD1c44y3o1CaTTRSXdYXagyytcTDNbv7R8dFvezjVe6eZtWSuXAoXXxoteU",
  "key14": "2fqV1DQs6ofzMVtEibDQRWQd3CJJVJAMXdXaDw4UFn4r3GNM7We7utCYN8E8zhRs6ZPUWrjEH3NR6Rv1PZs8abgw",
  "key15": "3zo7a91YxmKupwK3ichNiCjSbNcdt7enuUyt87QAgX6QPX12pSQR5wuSfV1RxSejtnji6nfWNBYZ7iyG4ufG9pzL",
  "key16": "chm1byVFdpwPEajiLUzHzVnC9sYe5xkWNmFDSQyDQZpHirD3P3yLnNhtHhorKQkfTUsTArb9x2PgeMMnSonzFS5",
  "key17": "5scCtf37HPCX4UnyZKangcaQG1X3Rrud55zrbphYzvNbjPf3SAfHgJwRWvSyY4YSUdmY7gntDia5sPD4WjBpQAKA",
  "key18": "2441bLLhMgJKAUvqhr5QygEE3Hcwzq2MuWJwedFXT9bh222ow1efpce6gYYQrRG8WBcUzXC8t7GLYbpj5VMUdkTU",
  "key19": "3ZVo6AGMun7hoUpoAdA1563Zc6a2vgWsLGMpVY7qjWv9JfBsjinQ8BX6EGzZSVrxRjyMnu9gZzuDtVREUKV57rXN",
  "key20": "2JsqdEJouyYFVw8yrtBBuURhugutLkmUDr2nYi4KYtArYwmqMd4bJRfMg9Nvosxrgx8Z9DrjkPfYTUr6p1obkKj4",
  "key21": "2YcxxkJcoipcVqfvw1f2hgNvFzbMtvBmrJk67Eu6qMj6J1dvrD8GKDAm9PpaYadDWfGiWR6u74fjvUkhNFfGjkQE",
  "key22": "5Ep4RqT1gzxFkq2crqHMcfie665EJHJ8eTSsKHdeXMpuuEBf8GtSmrqp5411Y3a3yfHJuZ9aKpDbPdSxyVi9wkV5",
  "key23": "6y1MtCvKm5NiFtuXzPwf9jauVovvLZKXWQj49o7LRvenYhSnCr9ADvfoQCvkEMEPCxAbikMz6hwNyhPgUQ1F12n",
  "key24": "6775wDpVMxDdySRFwxdK4Vmazrq354dUc7jT91QNWgs31cgm9gf3yEqZ2tV7NXcyZ1VBa6BhN5yqDTvdum91Qb1P",
  "key25": "WdyFQVWfKW3t2XQp4ChRH3v5mFoPc4prP1UNSfnAYR6KGchg7UJ4H5mddMuBXdec2KSsvdG3HvvXVxZeVXpGN1u",
  "key26": "5JxKUQenKmQHtHehDfVnRF3mGK9evqhW7avnbJx1YFapHZzw2QfC3LhbkCTQ4xJkmFSCWRCJmqCKyUWGZRxLgnJs",
  "key27": "5GwXSjehWMjPmcn7jbGzjjwMKS5VgZdWpX6kHgSDhuiFTLPLx145PKgU1wAHAMz1uuJzgXfBjArgoXLgMUQJXRXm",
  "key28": "4ujvUnjWMij7ZCeAHWDsX9E8DuGyeRf4RR2nLhAUFCqc9vUyXRv9C8SCSPZiFjNnHDkqJmNGb8PnJzftL7Xfit8A",
  "key29": "3PE3RWBbq6ZhsUvjSkgf6BRHuKXpyp4rSkK6KVgBCwsCMWyGTfAYaBJGtzUBELioXUBCya7PKVvgzx6CJ65a2LSE",
  "key30": "akGNV7Mypp1prxx35offBqx3RHkzt5B5nqWSrFsB5GR373Uf9RZxfCnemx2VBA23aQv7NvjbPdC3qnA7DQ2VRCP",
  "key31": "42TfrGzNJ3s6BhDFyNb4yjsf1RefNiy4te9onSMnawepqr7cfNdHZM8dvT974LFnd3EMRwMp9Kpj4RSLPcZe6dJ3",
  "key32": "3do2kBD5kBisVH3o7Jt9bVzFtcGnJnvTNJeoMwoV1W7krxBdH6VaxfSmBGykDskWDw1iPPyr7YHgFzphskwuZPaK",
  "key33": "36inXGB4PUhz8jSN3i9cUpxS596JhkQsVhtK7hAxc48iS6WEqkGLWWwhcpPkcMeVXuiS7RwnDUrBP1PoSkFq65A9",
  "key34": "4uXKxj4xV19LpKYADy6x5hKnA9N66G1yxdhWbrzMCCNoZ1zotaaeS1ZajnBno76qUJHbjpMmfZckDH44NxX4jQDj",
  "key35": "4AgzWpib8hGyHVAgLFm9dydwmvTDdqYP2GukDCvdH8d3CXgDwc5M5JXVy6sp1onTokpicURRUzVMYeB8itSrG2Gb",
  "key36": "33pYEwtVznUB5SoEEAb77vs6zM6YCy5pmy7Ggkzup3Hdj1Yza9wa7Sc8itjRSaWWdhGBDX7MDLfvvaTy67Jp2UG",
  "key37": "4rGScZNm7NKahaheLLRNf8Fo4HmPNbm8ox8cJ1YEKU4K3nt67rGRtN1SSGbo1TbTrbHsUjAWYKMkh2hu8fTWPCcM",
  "key38": "xM76gvNetdwSYfw3V8pt1qZWhx3jqrioFW3rCPkxVybdPa7u4L8H8YNu1QSqSPNypoFnWCicb7p82sUidmVkExz",
  "key39": "5sgS1de8Qyz9tCfYf7UoTKoxUgjMN2r9KjPG85eUa7z3BYBnspEpZM3QAj7CtRi3LJb9RYrFLtGG87A8u1R7b8at",
  "key40": "5jkNy3XDCgk2W6DG8CJJQLRnGUUDmNuE5e6Q3iBdEjnS9fkz6BXczLXpfiEJzNeUdNap5pU1hQQsxuRerwvLPVJN",
  "key41": "5UVSagpHYhxuA3dbEnzDK4bkcymoUaC6m8RoVdr3XURGk5gTVvXTBrBpPB9y7vBFbKqyDqdD7dehitmebKkAATqX",
  "key42": "hwgXScMs88FSS6XrKfCtMP1kwxrf9Q3sxu9X6QruQ35w1bxy15kBxU5AHaQ2TaacHhxwnYbKPgaWPsXrzdwYPwq",
  "key43": "2uN5CspUHDSHTdTz6t9XxdPW8KrSDmu33FwTehZSARcvGgoDUZTh1mqw1AbZNxy1fBL7xqokZGwMgiNxJwuPrHzf",
  "key44": "41hgdLnbszTBofd9JTz3irbhrCvdCRDsJcJNV73Cc36vMSz5vrh6v6JdqdzeSc27SGadcjaRrXrXiHCjgpeeidnN",
  "key45": "3G7oZVooGsw988AMKJUDXfCZu6v4WhbEwGSdvfpuE2zCN31Eho2azQ9Wdm7bkVP5RmHJ6n7RqscBURjtWSgC8gKK",
  "key46": "5YX4qSQpYGptGE18TrrAhm9J2hGvoe4wNMftY7ZHxpuC1VVPpQM18v5AgYdH9rVooz7HQHCp2V9kjR8NRpaJMuE4",
  "key47": "4knGrVrwGNSStW3g7w9CTkjd4tEoKzDppFLEEXV8gy9pw1TqHhemxJiDhdFznT8R4HDisEa3Uudr5vuzBnfFkgup",
  "key48": "5DSvrPVpkNYkxR8CyqwypJys6ic5qxWX4p3w3sh9bMFiPYsmyFK6mL6A69jq2snDJtiLrs1PuCF15sbdYyBWBo74"
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
