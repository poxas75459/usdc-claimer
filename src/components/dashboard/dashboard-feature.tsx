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
    "8tyUeUGHnGp3wi1MogZ8CnXeezevfY9345711JbY8GUtp3vcDtjK5xhZMN5kKAZTUbSn6w98LXFijLCBxhJDkvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URmEmGyLmxitdyrj9RCy8aG7rz67sFtT1voL9uG989R4CL12C41ERrGQ8tTVqADQDU4ikwY9TksXeFvXHDtRw9Z",
  "key1": "5JmRB9EEog5egWhtvzraWAvTLxBm84wocQhVhPQj4YAzcVPGtTbjWiRWpva8e6wxyBc2m5JkN1VVzz7sTqihPzCN",
  "key2": "2Prv8pe2W7vzpPYMbyxw8A2kKmGpVHCF5AvV17abLtQCLE8Sp4zCoYHRRpnTCZonq3EG95FwxeDVngpWjUFfAbSq",
  "key3": "4MA12vPXgU55mfzamoe8iAxRu4KLtq71DL1tMAMqP4fWc6vUHzH6PL47hRFhPz3gsZJfEUnkoFdV34DJE8XGdYLd",
  "key4": "3Dd3YLSjWdvSJgqZZN7BzFdVTHU5rYtRVGsCpXHCTX3qkDwSRaAsPRMSnWQvBZp31eTUNAPhM36HsHySdDg8xdwr",
  "key5": "3dudu2doqm3H2f34jLg9XfEtPsRSop1DvyaWN5nr89dirujsPz3b4XdetimV55ZjheSknEPqJHRjKdAZbvng1fjr",
  "key6": "515hqqsu2JtzcQDKCxbPoebY5wGWKxC4Ev5C4wxXz3fRS7nVS6KV5vE2rueF99iotZ1Z2A9JQyL9YgWSRpSLvXeE",
  "key7": "7trvhPo2BybkSVK8YFDY6kmEPM5qEWSA2kMpGuD5iHvuAwtNzMy1BTguGKAeg52iAay2t8AfDBN1qE58wNVfZHB",
  "key8": "2whrMvqm8UqFquFZWm8B9HcQrMPYwnctEkXeFJdBsw6tAxLQsRsTEqJwy8mUfmKMdoQoyWQwccNnoJ5MyXEDUD1n",
  "key9": "rMR8MkHYjBBHAAReo9dM6956fhW9CntcmajEXZAbLDDExjAH92qRX7FT86Aimevr9gAdvDYhJYMAEZeUh4zVP83",
  "key10": "4N4pbaUfivLkrXxUNU1jEoEmYpeZo7SM3k47wgSbSZrAkYue59jgsYYXWCJUgeuJxhHQZDu9k4JGdsVXrTsv7L7W",
  "key11": "4Qbqpsii6w68ayRSfg3zwWA1FnYbvkRXPWGKcXZv5uc6MEcrJZThWyR2g9JqST2KP5HeibsqVwNMRRuj2fnbTidR",
  "key12": "3NoshWfop8PotqNkZfzq5tAyEeE99fFdzV3QLAqbhZuwVAsSmSoDxEEY2iaUujNcrm8tNXczS9s7NCpq2XViuvvY",
  "key13": "5mpAVtHoY2Qh8qaRRF1upCU8D3hMXg8WH8wSGGjAdkffQ7naCe6KUdrU6dTE4YdAckKMVfZLaXoTQg7awKjxo6bq",
  "key14": "2iLuhnA2yDZUCY4Ri4nNhaXWQWvLLRxeNoZ4QRcqFhE8apSRyZhBVAqRvxhDxNYbqjgKW5NgQ9f9D2bGMapACmsb",
  "key15": "3TGvagt4tYvBGCgyDDeNYkf7XGn9vCyvJqv9G1vgUvnLRdjjwja3nNbMHzyZSCQPKN83pr2AAFx4Korpo7cvgF6E",
  "key16": "3P98stCwUzb83xCrm7Q2gzK8LbD2YheYcGNtEJVMVEPgHyBrkyB5Srx6uNrP5jMdhKHHLjLVAX61EubDxXaVzpby",
  "key17": "5xEyceDWoAC6gGCfhu7Did8RjcVNM7TNW6qVkMpVaRCxNkCEk9XCvSVTbpg2W4fMq7bBG4Cnfo5tLAQVy3Ev8dT7",
  "key18": "4yFb81ksv7bmZH5HpYwzt4M7ht9WNArpjNHgognVDmfGGtJ6YsPfCB2wz2a3Js6M7rPRjxGmBF85NrRYmHAWA4rS",
  "key19": "2NR4uZ8ELYum6CyEyKTtsEWLDPRjfaaRzCboKQ9n5FQJovaan5i5fmtXGe8WTZZUugixQMndRDT2mf1YBs2D9o18",
  "key20": "3aM6QLdp6fQi4eX9htaKPZrdQc6e5pimufK4pMfgZpZDzRVr3bSSq7UAsakwoL8YkmiB1PK3UvndnSskCVHuRJEE",
  "key21": "3Wbf1zLrSCStP1p3p1SV58Cq7uiX8CoafBozQgh27z5qYrQPrwz3bpBptUHU3yuQ2juaAenS4DDdYk2x9gbrUnUT",
  "key22": "FpcF2RszCikimZTDnYtWYnKCFbbei4Bpo15VmSrjwwghBKMLgt2mQa12aPDT65Rj3bbxig7gjdKuB7jsUUC4Q8e",
  "key23": "3PipQobcYQvwR8erZAm41yh8KqRab68yWToKRynWV3dhqcbHHs7rv7TbotGrgUongPsoGPCMPjRgMdsgkMphHKyW",
  "key24": "4GSUgYxDq6h7uV3j398oEQGbaB28QiJguhQtLAxiUyigFhb1o3iAbcoPhd7dVh7DwBrUzv9DKE4d2oWdKVhvbide",
  "key25": "3xsj9fiiVJGZPfTtHswHihXMFUcUCmjBLLXXmXFQMJsiFZeEa7YJ4pJTiHF1BCQfYVocq6A5TucoAby6kGsEiuxR",
  "key26": "5mxA93hPhNX5iUGeZaUQon4SsbjCeDNXyg52pzCgnd4FKZmC3dGnuFZ8S4iF93TjEhBHnj9Fz4PEvGv9W6sVQTAb",
  "key27": "2YfFXpNmgdsrfsSwnS66txjmXqiix3HSmG7d9gs7wcabbhVnVTGEF1CRMNoyCwXY8C4RtwF5gdYWGjoXAq2vnx6Z",
  "key28": "5S4tShZvrjnjnrBWTsoViKQ8sbvCzyvFJo6ZpDB7GHUC5JN861bSay9sfK79SAEUZC4b1DCTtF7RUyJg5y9aucDM",
  "key29": "ZiWcyVrVZw3GU7Hqe6tsADRpGB1n33vQZxCTtjgthupbdp4yzfFuJUKjZQNSPcd3vb6pMLLuAHL3XTVzXHDP8gf",
  "key30": "3DdHBx8SW2P2Z8dE7rGqBLtGSChdz988ukDxaw6Lw2JavV7vFwxLpGHc5aEMU7PoZ5jeyKnvsDMRDsCTRkXvXBXp",
  "key31": "H5SWi7nfNAayqhYaX75yT2PAyeDDLrggo28kfXvmazhRvLt2sqUsDAvzwpRkFsdpXLo2iujwBFq3owvZuedN538",
  "key32": "2JbVddcKEYX9K7LTxVJU11vGwQx52ci6qCUysQJT3S6Uc1Bv4Mbrdkk3KWX21aEqWhNYygFuLzM5FasaXk5R7vkY",
  "key33": "28RAYxVGnaAMTRLNQkR7trMaAEBj2BDrkFWCDgSd4qSrQMyQUwsnN7Fsdy1VtAwbiRvginSredjwaSK13SwoaPtW",
  "key34": "2ZX5qX5Fkue4vdbXtTjBoTqeMPT9vrkpG42QMVpp3eRSrzv8Y2hFN86LVMoiJaVNCYKWnsBb7zN4yLsEn53rB6MS",
  "key35": "2ApVK1YmD9ZdaiSjvNCH2mfNLNzmTQYUXZVmxKy4zykJnYvhbktj3jjw4yn3Kucr4rCpfyrKw8CbanmP56J8uE8N",
  "key36": "3suWsk1qh8zHjKuWrU6WrMPy5iQBR9LjrVMHa6TM3MFsxSSTKeYcbpGpLt8f5R2rV36kv9APmF6p32snSH1GYBLr",
  "key37": "Lzv2T1oyRA9Jx2y7W9N1vvpAe49udS9x5WPkgfE6ZTYXnvNbCPBiBZ1mCH94okg4pqQXAWfq9B6eH7sphkUnk47",
  "key38": "3yPBrP6Cy4UCxuUEj6zWFvTNR1i3cNjvoXg9XqPuS8gPcsyT9H35RGFuEuZnse7iJKLi4jXXd5sfsEA5uCDNTEZA",
  "key39": "BD2wAsyJVVS2W6an6NSznpirfXCzHF3mH3LnDLB7CWfu7zuerP7egCQiQu3rMjZp42g7s6CYQNDaauSKVBaTnNJ",
  "key40": "5vGYUL43qqG7yyKRLswtadeMQayqWWtjupeRe6YVXXbUhPEr7t4HMdsJ22spu8qwTJivbLKmxLfwMebH1yAZpdm8",
  "key41": "5z8tapkG5uCqX32FhQioQcPad8z29m8zvAYNS7EYrF2m8Uvmq3BFqr1Uciu6WxD2gdwbPADssi3P6z123VuP4UkL",
  "key42": "5xzWp6UfsWZgUNjcdFYGQirRiSWXEqvmTP4ppr8cczsA5y8v1tyqHCQ3ENnSPtNmL46RfYBZBmm1ZJYUBkgZ1PvY",
  "key43": "n549EsoG28sLujRccjoHSoPDEE9hnzUE2AAQYrX8NNaVPnLxWGgRrfjpX2aiUvwDyDAZf17SmjpYAL78kXUZnvL",
  "key44": "3SsEn8DzFotE4hYVE1F38XYpVmn8q5jmndRU9nnpmyfis23JE9hACxb7Sqw8FVRhuPUtQoCuWQzdFgSnz46txiiu"
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
