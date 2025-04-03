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
    "2kh5i1DNzvkSHgWfyWzYoXCybYu4vUh3U93EMbbJgzT3keYG9ic4vXWMhd3V5eE58249vrjxgw8a5zxxwJyQwNA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzfNACdZHEmSqBrDaP4RRGEoniMztLhRmJQTNQ6wyDhodamty8vLN8JwuQMjypHLw9iny9PAJ1rYb64BKDHYX4H",
  "key1": "3uahVXZpP4e8zL4TwfsxUi6tnd1SULTccNZxU12h2HkZDXUHcVPbf9wna3GyxtvdoSo9Hi6TLsibxg1Xkhiyv9Yf",
  "key2": "Nj61TZzUWkiQAnzrqmRYTWWxkkFx5BP7yXNcHeXfktS3tWvybVMCcRhNGEra5PyHRKL6BAGwXk6rJxWTjvcKV8W",
  "key3": "5zPAg4o6a9hmZg1E9WB52Tnj1kZ4itVqyF6aGh2QtqG1jL9E726ndWp3KYiaSpVJ6PGUfeLYwQeoGFauf6cC5itz",
  "key4": "3YBv8BeNLK8oUk9rgPaXbgcwrkewejD2N2yaA4dYgXPXxhq3PdQBaXaHvNqLJmZVPUocxjhaJopgTsFZ6XEqTb4V",
  "key5": "3DTuV6HwsY247jvBhbFGJvrTZnDbouBhgYNJsrN9LCPm3xEzXxZHQNgRWrwTVCPw8moX42XvGMLKJFtHypz5T9do",
  "key6": "4NsUyhy8iLuVVCKJYuZWiWm9jaXDRAywLkW8DCJTKPw69yUM72yLoRLLyrEEmhj9qKiDxS7PsXcMvcF1yJvivP1n",
  "key7": "48HsgaT2TEqFxtqrjDK4hvMtRrwZSSWq9KhpYF7W2Wg3Wzt8ajRtsYSFdUv5A3mHXxFncsUXDaF9kQjAKLtQmBSL",
  "key8": "51mQUVogc1kE42d1hRwMCCJtBm9qjBqDksaR1sqgiGeqUsrirYt7qebNYNnRAoUYnLY6qCBmZJNo9kGTbBc4Laqo",
  "key9": "2GyNK5C1XJYHnjBHS4yoWv53bSQmGue6d9o2RYstKG4g8LvYyxqDwjaUm8DyaZcVJAQLqjJ8iAMMLNwEHh28dNDF",
  "key10": "66saRxePrnFZTP274SLN3RPiiSBY4MXVdfYDhDtUBSBTFXxGxwZXEan3rtmV1D8aXrqb2Ex3YnYnuHPWvQyNUkJd",
  "key11": "3wDX8UY1ZKPBRzbA5vkEQUDqcUhtiFFk5qqGQ4tcBocK6G6wahdB8QdtiGdNcqAhSnfY4oykRF5wTorq6aiiRMuq",
  "key12": "48yeMorAwv5gSMaMf39bGtfQybwMXz5goDsU23dP19ddmnBP8d87J52weGjbckh3q5QEW1bphcXeaD566UDUnUoU",
  "key13": "37H3L4NyHYLWsyhvWj6inCAjCSiHepohLJaWjyorphFgjAaxywizCmm9nETXJwopKmcqFSpduDUQVvxA9oGyVmXJ",
  "key14": "4UY7uQ4oZ2Zr2LfMMxsmixYy98Q46TNRFXkyUiewiHBUShH3M1GLh7fpXc1iBguj2z1sFb51SyjZYhoZTxGhdNj8",
  "key15": "3od5e48NoVPPASdaP9qYfe6BXVeZsybTwXQnEMXCf32gifg22SfAADs1k3uej4PQfNx5ViMKD555T4SFBeAVvtYB",
  "key16": "5PvjAvHHZ7xEoscmwLHrkQxeQvJZr2Mixs5VkUiFSDJum4YjsqmsSc9qVFckVm85uYjuAyLRbR6zWCcBsiu4hj27",
  "key17": "2B6nPiWhbqrW1g25ZJuJmqTu89fsRc3hec4Y67FNd7PKzPeFec6bdCPfUrUmc2z48YZv67JXLgHBjTc9vWPrhsUh",
  "key18": "4K4qhHytB9LSpmUmiF9JQhGAYLwUuDjcRRhuBpN1ffMANkaozZyEY1sR3mJVYLd2EGpUNJS9Gy8yjmMBdb7kHrr3",
  "key19": "61Ld6yV8zscUM52JF9jLMTDVi1eZ7aytciMHN8NTy9TKH7Y6ho9SrkNa4QYc2j2DBp1YeTGphEnEfwF2WSSdmWJY",
  "key20": "3SyCmZMTzPVsoMZXn4kRGjYQYVymYhARrpfxaVEAT7cCGuAkQiJwY7XQSbkAb7jmajpKZ3pbMqbyP7tGfaAkwUgJ",
  "key21": "3P71qGARuPzXNMaZq5Y9LQsToNsko9Tb3kgKmv4m4hkz5F6558MJgnJQ32JwuMQtNWGLkQRHQiXMxDSR34ZzQGoS",
  "key22": "4k95muVju4UDURmuDbX25ZCTkS1oP4bsm7vzHdkB57RbuWKZUSaX12hRpqeGfoEoSEy8DPKdZGAnkoVemckMELnn",
  "key23": "3RbK4neqcZaUp4TjwJuRV9EKsV6TFJpmry9eaTYHNz28SWQ8kQHKuVw1fGAJjMVmFpaSHd3jHT31FK45wFuo8Xkc",
  "key24": "2XHNeG183LDL7GEnDPgNSSsD85MfdXWEhs9dHCq7ycQFCdR9Mz8ThA5diV5Fd6zL7tqAib6nwkNTyYymeD9JCZiv",
  "key25": "5TmXXnpnqoWdqX12LN33WCaTKZUbBDm1u4NFxYhtBwRF4aAAmsGokhai3mSLRm4vcFtKHHCtKKiVWAbjfnJiG7Wt",
  "key26": "3R5pjGZNqA4VQLNnHVtJoPmufDhv3tPBiPquiANLNh5kdN3HwBHDhoikV2cs2ikCrNRx5mEf6aYLgQ7tbn1DTAWT",
  "key27": "AS5KnMwVtBsyCKfjT2kjYFPromikArzyHa4pErBmqFMN71Vprbi2dJ9PcT7QDZEPGs39BMJ8A1CyahE3KokFBeY",
  "key28": "4SA2VaNUskTkUkrHjVQEBjmjTocDdm7p435Epcx8gPrPoWjsWrg83fCLs1y9VwsLcw5ZBsKTUtZTnUQGvHbQt68U",
  "key29": "2KavvSLRNbLG2mPUGCx8Rr6hq6wjgsYJfq1TbrMa6mcCt1ZqtX8PV2WcpZ2B5mYGqVJFBEAswbc7yf4L1bFj4xcK",
  "key30": "3DYzBhuaHUhs36Mneqftnb3vfGWWY8erJ1h4MoxPfZz5yKo7cGoojngsKgyf4BcfAkXdkkmppMdNsdHisD8ma1Tc",
  "key31": "Mrhzy6sUWvoPudh7udx1e4haJstbbRoSrbMAUAS47QCGe7wDoKoYL4yqvT6FGPrAL74abQgKLknyWokb449NUnV",
  "key32": "2pkPRiNJTephL8QXzonGxg1Jj9fHEp8Xwh9hY9fTX6CAjp3e2Qj6hDq9CHddCzTLSUKcaPH3LXhY5HhdCrCxhq5A",
  "key33": "49zfiJcrs6Fyrb7fQyqJacUB3nQqdecB3KoHpFBvsfu9aJA543QWid7PdktsBdvVPtC537TZrMAdyWcRjk4qXFWf",
  "key34": "KmUdzZWmHzKgQFqViN1NbForjcLLmvr5yFrPipouzR1eJMU76sriW4rF5GnFnsWLTVvypkwgrfKCwyJMk6Y1heb",
  "key35": "21GJBecG8Ne7wFzUAQ2eyMeGePT5KzL4VGEFY5RW1EUwCCQhD9KV8GwimwMRRcC2sV5is2eouc4HRNGuFnJpGqMX"
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
