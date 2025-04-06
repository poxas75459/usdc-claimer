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
    "63mU2jnYRHb3WMuStRbav2g4sZ1GEkgQ9Di88W5uWimu75gwznzDyBXA9spKk1HC6Qq7R1n6vcKhW57HwGbB27jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRpUDZDQVJWcS7iqCsRhit8NMFYR1pLmhJn1UBeZcUKPfC24ks82nHWCmDdRasBSn4au9ae56zzQAcFrLFa4fYP",
  "key1": "4YybViuj8AJkbz1DreDbQ7ud8myJ3y3nMsSUnXCot9fFKzxb94yMf4uE7Q1h2C8bQkkDFHxAxhhEPebTKG5esd5N",
  "key2": "3ubETokodDbcnrjS1ezYKPrtWYAijK98wQttCxrdAjEoBu3ik3APiE2Q6MGiZMkR1EzR89dfSTww8ezR4vSQz5Xo",
  "key3": "4ZgMhRAZwHjMefnRvxzMnN3tH85e9Mw2hFcdSdbfKCkUNoPG9nMXWMJpi7v12MLCXX5uUdpy9bkmzWgSgGwFBAuP",
  "key4": "4ksRN9vJdN49gWBKsXJHXK2EKubc4KbuBc8dCboPK3bRV6WBrh2yydnhMW9uR5EK2ujeqH4FULwpvcztGeNiN275",
  "key5": "bp3dveWhJskqZjwigZsGPcQ5pqYy5mNgfdDCmBLS5ty9XuxeMRN528UgXCNtu38p6V5GTSsepXYVXTkWCb7MvGE",
  "key6": "2DbR5acvDPrKHjRco4GzrXCdDZZQv8BGCeTCmbg9QFj2t45JvRxQCt6sLpWqzQ5e7CGPpLuC7oZwyoXbMP4PQyVp",
  "key7": "53pBtpEqikFft1k2WJwVJwbPLJ9jA1xdKFtzS53C3H68cQKQWvPpegBXQjmAoK6khyTqj8yBeapso93v2QWLAuCn",
  "key8": "3dmgxRLZDjo7qi7amx7coJMtNP619TdDK1KCUMGCod7rntECsv5DrHsTK6xZVMQsg1r9aKkRCXddgwc7XUPQofW1",
  "key9": "4HumuET7fFFWJ4XNWEqiuBmrHy3EUMdGhzdjW3KQCjN9e1BCAx1Go1n69JTk7ubrdPcBN4x6vfiS72pCLAeSGiGQ",
  "key10": "2DBr19seJRQitoDdZPWyinstvj42WBJ8UyM4FM5jc3A2XFPkC31F5FdEz73pME8wmGVuUSdJ8tFanjpqTVPRATxM",
  "key11": "Q8HsUc8dhACZXRxLW3DMmks7aMWBhGknNj12iUvspofGbDjjaUhjfL3knXAXVyMkjNVzvZJGzoKznHdWRxK2JWM",
  "key12": "3VzzxGAneuTMZca8T34pojDViR5QcWqH88CNpCd7qPYbwSZayHUUmUK4fq1GWdG5sQmesCS5YmJZWyaqwufmoDq4",
  "key13": "2zS1mv959FHK3UHYS5AzVNT1bJMcdP9u57YymXhZBWLmSmCAsNktdWLeF3tw78fFrpic3RGmUno4XCC5X7QAc9qv",
  "key14": "425ieUTWqWhVGMqk74M9vvjYvEBG3EPzpXNPKBL7UMed5UkByZYQeWzzqZZtGHSN7VsJPAS2saP7x2z68AUK6AjE",
  "key15": "4uP9aSJithPcoXL1Us8zvs6E5ACFWhboAoJ8qpmP5VF7zV2DuCLfnEzBddq49KhNn5cbR7Dr2gEsYmUiWee5idU6",
  "key16": "AZDxpTAUzvdTgKcfChjUXtGrSebVYw1CDJMBuNRXC6eXVhKmd92EFymT4N974XRvwY7MmbAZrq2hKQPF1gCXLEz",
  "key17": "5ASs6D9PNhg9jRE2Zrx3qEG4LAMuT51HAcwFGhVQRL5dtFqoFqRumWXcpgUvoyycA12veSoW8hTtQpz3HfuauE6V",
  "key18": "2rmzJe2J7Qu7ycqYZs7mZtY2yuCGZuXgGbHh14Euxu8PA1HkTj6UXaMGEx2C8r7Ksk9rgd28qkkWj1Bn2Nwur6qk",
  "key19": "5F5B9NWzZfjJrMcrBsgSLfSd1uwZRToCQJGMTDrR5rbPbz3oJXRPDUWKnhAeM5f59doYr85xkPbEKC67A688EdQb",
  "key20": "2VTCYbFqNfaRq6ihK6HPCAXMSxMJuhbRSeYbgr1xP8v49RpN7XfGzyAxyu8bwmNZGUt7mrjTP4M5DM2qSvqo9XH5",
  "key21": "5Aj3AdWn2mDZnMYcCyPniiWUpryM6J2c7jPu1Zo5oADJbq9ZE31Qvx1iCGYDopn9dbMmgTgRUEER2Mb4zXYq4wxf",
  "key22": "6zCcC8vaKHXb6y4fe8WvuXXBYFhwuqgK7HjCzh4ESSht2AcgP6dpbHTx4ywUV2hLMiT1zSC1CJg7MRYKXTEqzj1",
  "key23": "bTBRVdwsce9zhDDk4zYdZ8SczucSZHk5XPTAeA9yuhBfMa1oRg8zjTPFmL6zM73SX3jtPKyZiGVSJDfKP3o5Gta",
  "key24": "5D2BYZCpxdt2fAqzQtdRPs8dvpiouS7wuThbsBjqfb9uki1eCpg7N1LsPxvEkhU7M7WvZVHSxU6QCA9zmSNVkcEP",
  "key25": "4SDGndcG2NX8TDeHFL2wLUPUB7m7UnxcFGKapvedTjf6kHSMb2xWAjkaPQXAgxDBBvkUYJrLonZAcmKYw32dwtCe",
  "key26": "38z4dzrQcNxdAHWbGMT322njZZWyKdbU2Pn4Emk1MsJKvB3Wq8trE33c3Dq7pLTQ1GvZjHDtqZXpyC57p8ZFhneP",
  "key27": "5aDiVYdviCjRGAPSyfpQddZaX8juTnjEXH5Aq3o26awevDw7LykzfnUBD1iCoYGLhpAW1iaZ3KACe5NJvihcu9yv",
  "key28": "o1XQgDmBsnJvocq3TCVZ7fCr1udzgBFxXn7qNPtApqn86542NwKBN6NvGssfpyVXMtPr1drBNs1T7VMET636GxG",
  "key29": "2LMmDq7h3Ct4RsiREXu3igTVSNNX37eQot8we1Mzynbtpos1rHBgM539RiiqW7aV69GwX3BLEk5eqKfuz2WhpgrJ",
  "key30": "3RbYsm8H6Jo2JYSfhPPhpxYUJdYUZDN6gespJmAWii7ncJpzEDkvv8PgcepjfweescHPaFBVvvAkaSupgCPAczu4",
  "key31": "4yGK6Nd6XMWRUHX131nz6vG65Br1a7xjTcCZyiyiA54stW2taHi3JTNJb6teJRfRnnN5WA74e2LDszBknd7j8Lqz",
  "key32": "2EAFPrdRqqgMaPHkTr3em4ucUV2kSd36nR4q8JrxWF2dYZX7G18onFAn9BEeR7C9SR1MRaTwPFyxphGzn3WuVH2q",
  "key33": "2EiLe174vXfDHiPzWa6PPvRW9coP8YnYgrdJP7e7MRVuV657pumLfhqo9AjFnnvAo66bbXm9H1iws22KvsDAZK58",
  "key34": "2EtYqhsqRGtHpSsdm6odoseV2JXdZEc56n4p86SCRFrmQkZr41ozSzqCbEcuRoFbB4yebznkEXHevPqDUeeBhbW3",
  "key35": "2bMUhdhmmvijEhzzUdEcSfdnmkCbsUNk8GtMQ6sDghge4DZFTmCP6rjeYysJAQextTV8dTrjM64s9ZNqF22kjRnC",
  "key36": "2THLFA6NA4YdQiFPZaZ6P7kwLbZw35s353sFzHSKzY57rFX6RApimhJLCWXNcSnKTNjbDn9L5K4SYS38f7XNbCQy",
  "key37": "2mzGdnJFJmLu6N5ac9vqn9mitgFAYVubjk9LvgfHGHCFUuScy7DR3ed5xTrPZzSK1g2FMvU4QgBLtFj5BpnPi1A9",
  "key38": "5uVrcubMcdSQ34rbqot8SuPM5VnjnDVgRjfPr3CSpg1FXkvhJTsqCu3E5rH86pcokQVM7PFDTbSa1BGhDTs1RtMW",
  "key39": "5SRhxCuzmHAbC4Gu49nkN1QBAUck9PXat1TaeSGcoRUDzQh2gJPxG7PAcmJaerb4WtVcUeZUCKmBAPFBidmTVGhK",
  "key40": "4KazemaiHoP3EJcsFpBzJQbA5zVEFToAroAX7P8V6X14EBinAHNk4ci5mhpukHNstJyGzksyqjWa2sKLDFc6AaHY",
  "key41": "zDukGswdhkrZwD8Mkbjz9JApykL7TwKt4YHj6x2uctvuXsxbRSLTL5VWA8VpADC3Eg8JwV74gebT6T4nLweFYzR",
  "key42": "48eQM2SeYpRALLdz9ZFCb2tL3pVsGCE1NuRvzk9zZnJkSHRoswrsE9EXB7VG4FZJ7sDH1CrY7L2VLoYvYHUjXwTm",
  "key43": "3DUCGGcmsPq3gMeqicPtD5Widsm9zeNWGVF37YA1UenHiHuth3GQkL6sW8YcjVaqZCeG3DYFSEPnxW4DEGywyZW1",
  "key44": "5Wor1PCAh8JNW3bpypTjg3CpGj7gaywXEKCszbBYNw7YhidWbXoKz276RKv7mVaBexuw5zG9jARc3LJJjZw2gsRA",
  "key45": "peZgGPpoyzwmFqQ6b4hhm3o2F9SZCiJfwKt2U3FG6vP6NUVi6MGJWY3NXCBRNPbid79RbN8rvcwPvfHyV73A2BF",
  "key46": "4ECKcHrWuFuJUMWg9gtRqHnhHFk3PeN55QqtE6PUwB8tjWwNq3HifHngF6u4vfq8FD2ZUBEwL7Xmq3kGtvQQYTaD"
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
