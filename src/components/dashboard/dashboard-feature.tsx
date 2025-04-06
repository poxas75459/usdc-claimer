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
    "2K8qawqREhvzjCJJucDX6ZvxvkMrr123x72yDGmH64ud9GYHJn8BN1huMKZAHXNjfvtMtDsebeAvtkxTS5rjUp4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9qRsCHBe6zY4wGwagbGQZPk8arrCXwX5rCb9eGEsJNkBdrzRdXAbj8bDTz1Ao5GgJSKTVb5F7S7UrndiVMptSg",
  "key1": "5xiAmWAyNofyH9CXzSM8L3dZdYatpMNnDuK2ykHNJYa84A2HYegAzAga1FTPWGVhnmwxQB8GXPN7cKCzMyLHF7g2",
  "key2": "3tT11eg68BuLxToEDg6oGrNoB7SDGY6bznmuUP2aT1wMXcAbxN7jUkXGDGt5PcDCn1mr8QXscC6Bp8y6U6Pa1VyL",
  "key3": "2xoP8kkkHZiStDcTmmwta8ddpKox4B5rA9pRWGaBzCQLoX6NXVoKik7ZSFPAAsauXxrJuvaTuQPcid8qXX9Ef3Cq",
  "key4": "2axgmXhJH5kSLsVjeJiAR4oAiZYGEGTFaF7h3gPcB359yg9nRb6LGd8icb7GdvhiVdJqf1Ne2hBgBr6Th2bwoCgP",
  "key5": "2wpPsef4xdAQvdSfkDD6gCRimMoQ5s2ENTkev3wqLtosuBHDu4rc11Wwuge1rMB1PMUgd46WJt8ViL7UTvfhGhqm",
  "key6": "46T62PdmSbtPZkRBHr1k3WmxKNn5wt9qBYR9PAkaWJVhwFqahofJkEjSSDtQNzzkhEoCgeq5EFZN2Zb9PHFEVNUK",
  "key7": "5fcwM5U5qNpsKTC5RFsxTDCy6YLC6d62VmfVQ7q6FHSxLGMfkMxZakhes7v9pM1M3bj2ft63tSTZJTcDVZ4KsqV4",
  "key8": "5fdsrB9UAk77dNEmGDXXggGgtMXcfFc2NRMJ1PQsCreew1M9nJYAiCku8AzHkhByNova49XzdUSKpZVMuTHky4G6",
  "key9": "28q61DUQZKmAQQ7kMK9Tzs6F2ab8zUDVbfMrocymmWL8Wb7iT6NpeykkBXdeRSZwXj2JKfuh21fgfRt5jWmsJ8C5",
  "key10": "3e9RaSX3W8Sn1emMP9BVHRrH52eZN7Y18zA1XZ1s53p8nhCJ3xr3KHdu3YpM2c7LnzMjhpDx7CowU22rBkbKdhY7",
  "key11": "3pzoadBDnmEXQUHTAQjcFXxLJktybX6cUt3kfmt4qsHAAf1KEw5hEaZZwchzNFF4BgzgxvWafSn4e18vD3Mk77cK",
  "key12": "4BGEod6BJriEzQS9KLiMLCuYYRxp8aS47XV9BTggW84AgzmySjLsYTexpEBLR9gTGCRPcxp29p53QHuo1qr5w3hz",
  "key13": "36CYvW1WCUd9o3bPST4wqCcDAAjckNaY842PvQ8D1DjJrUNNH1LbpoGKVg55zUA4yPgMaKaRf7VJxv5AnDhAAyEK",
  "key14": "55Ej1q8V2ctMbe17exHQa2PX9BBy3oFxbTENvKEHipt4Z6KJhMcitbCqfwTvQoDmnJtiFhKxofrhajnjijYJ21RV",
  "key15": "3Mj33TZ51KBBRWeSZyHRt8ZPNHXpZAyqnUmMQbPRrxpWs8CnLsVJ43qoJsR51ZsLF9wUrWE8Ejoayi8zGWGYkVbs",
  "key16": "4pR5vLDvb6cGjka7VwvMMUGT6eqH33t27vgyZ2iu2Z48AdzTuV3Ug3fqoEthhKYdPsTWo9b1o7JMuHQfUFbAarVt",
  "key17": "24MYnHzTrrHSEpqVSdKm7CMifhDFszztUyANAQCZYMR77VeMAiwk1qutV7FQbryxKV6B4ov7rChpwgGj2no526Ry",
  "key18": "4Q1UwhsVcZmmrx78aiqMYvxy6r91iwKVqhPabTkGCE8iGQ7vwHCCCneFAcgv32YBio3U2j7D98HpEtkyUVjWNw32",
  "key19": "vgpkXkkLC4mkPZJtZL3fTdy6zFp3LaWR4NdJzJhdETzoFHhK9T7E6QNk81VbntupjWM9YrHN9jfijtLnNDJmdEY",
  "key20": "548DMz5awkHBB1v1nXCgfAKiw14Cuvk5SnHCuqMckFLnMGya5QPGMnSgUneBdMJDQC73B1kYDkf15kU8rk1QF5vX",
  "key21": "4v7RAgvnTZQdH1fjQeE1J5iNiBBmT6rUNBfVy6uMgtE2LjNuuprT3Nw49RAADUD73JwEQTbm92uUdaiCHkZb881x",
  "key22": "GvFKJZX5k7nEDTJEESzNr9XUuKDXkqDnoFyaRPNLHveZTbvcmN9y2A1mqvLTRUqkW1gaq5G6QPcKyfrfmzpYE5J",
  "key23": "2ruwBS3TGpLtFkYk63azb6pvqtaQEtLDDQZwae9i8M1mUZCnQvp6gVYtbee6wgHiM7CGrrRb6qKWYEFdY4RoX8fn",
  "key24": "4uvgjpdSxWSn6JgsansocM5GSvpcyJL5PhQd7F5gazqK1LFqRScCFxXnzSNaKkS9AaLaq6pTTHAddunik7jxChX5",
  "key25": "4CzkSutAwQ6K7bn6eEERegiRpZiGkBqoac9qfjEHvwcytPoRce9xUY3QxLaDUBzZ8RgfMzzfhC6p7KZvZuuQ9tZY",
  "key26": "4tBophEXn4viUfMaBfAAf8Pb4gW7g9P8pUiYUf11k5fK2RDyTgBXZ5n2Q68WrVbp5MxPgisp6tFqiyYkngHGeL87",
  "key27": "fZyxzntBRF8iskdGivRQPPnCbAMaeF98g9Jrw8jtVis85eM4iYLXtGXRSkzkrYdSwHZUsHNMD8EkKuAgyLRe6LB",
  "key28": "5R4a9cjfFc44rWghkwaQsauiqfgCUUdSJQAbuvtrADttJhwqGK2NWEwucruXVzjJpD35jcYB4JYRZdgqGSXQrweu",
  "key29": "5wL3UBAJVb8yhkxvzsKd9iSMWTnUf8wCyKWyuH9p4KgQGB81YXN5W6EfHDPMYCwsZdqJA9FmGPgmo5kJwA8E2YTx",
  "key30": "45qBXD2Gsd8m9sN7VzZfLvVQQJ2mmArpkJs7ebPCUgbReEVMPYGwmdz8PWFMVzsqQ65PjyPboi1iAUcqYfqoeSiG",
  "key31": "2GU7zQFiqFudsUJSs2T8uWFtvY5yCWpD3zCyLQoq3aBLnjmrX98sMjwmDn2nqL6baFqS3AbUyZYTUfgMg1rbSFeu",
  "key32": "4vhxVKNc6ttK3Wa46s8MJ4fzgsojwxfJ3FvD9MTXNNUtpeH4qyLCXSHJiHeBqwW7yCJTejoFWEMUW9iaeSWGA5MP",
  "key33": "2G9kBczo8scGAkAeR8xjgSZuHhTm8RmrSW3GHPj1FSHoXvsZAr1kVnxTaN4tE7A6U5NK8FPARgg5cbmUiBHqNRvQ",
  "key34": "4QjXS2m1t9rTESUVtYbokK3JkdmyxjTHy3c7VWiGFggswHNHZf4kLgRSoyPaZhvaEYZHwnrYgtyquHZMNicyPGe3",
  "key35": "2zc5wy1nTASiXWJLoRVnLxsbdbpo4NjrHoAAaGM3HGSWsCWDTPzkK9P4cgRxR214ZWNXPuA7tJirsTbELryh83gZ",
  "key36": "oHE5qvrH8BFjPUghj8p7YLUfncne5WA9HRctd6fGEcbNJqQ3vpVx758kRm6MpgQ2hiKWWeRJuUi8UVConmrvj9o",
  "key37": "2izrRZzCCPvh7Ef35B7a9J7wXio1B91pz5BmtqKRHLNe6jcTgt3av9ocEPpnLf6GGoJNJcwQDg6Zt2919VLqgE7n",
  "key38": "4GvQU8n5GENh5RuLnpFvvswkLRMndc8Ses1YTXdkBVNihaqRVzyw65hZYyDxQGeyf5FKcRFMYUZq5VgYpFQTrStP",
  "key39": "3shKxFDeKMWE8EWRaETvCSRLbhGjs5PuVfrzVRY42Veb5XpZiwCZ2juMrEd238Atd5KGaWZF1DHT36tUX5Abm4h4",
  "key40": "5hgheBzhBSLW4qn1W4hL5JNgXmgxbpVicT3ZfTBzp2uW69UcWQktQt2kqVda6PBpNmUoP1wXnDccANEZS7STtiVk",
  "key41": "497dgBxPiu4axevMq8ofMKWMXKQY9BS2oca3C47YaBQro9EKh4YJp2xZyKZGVCMjU2HJw1WrpS5pWYnA2naBALzq",
  "key42": "4WYbnxdRydY9t2vkFrCJTRxDHhB11sE7oHRggAhCBPYG2F9PpsV89Vc73MHPTqvaZ5Aomz44vMvdsubZzPK2DHqD",
  "key43": "4P5yy6YorzfssRPYeEnNYCCSA5dWMf35WNS4TQAg2JSX3qL5N2yajwyXb7zeDDKNWhanLA8xjfA4RPgHHZTYXALV",
  "key44": "3psNPFrNGYY4acCnAjRuvyQ2dRQrWE4afgAeqHFmcaWkbtFa4vW1QhcydL2TFyg9yGrMm1UiTNJSH9WLTBfFC3yo",
  "key45": "4XRRKop5pNwbDNwaUA2ffhGB3jyg4vDqWzGpx7RSvqXhTkqMNqf8vf1iMzPFasP8S8jB5KdPSE73Gknn5qtK29hb",
  "key46": "Ge1s3uqWRFdPNCzpxBJ7PQvyCBiLDYU11ioN3WF3HbeUiyDJXuAnBjwynhphsymCL8b8Ya4XEya812S8BpU427T",
  "key47": "3fioYWdVc5UWSmgdCqNyn31sM63AuJUE1Jt72ZoWCwGRK8nfuQttupN3XVmnnKUrkrvzWjoGNwQDRSy9u1iN4HZR",
  "key48": "ietXnfgnfdStdYzq9MWu83F82d12AQGEYURycQDLiv2H4QiWZNBioR2DHBjnNLrhF7vafHUwtif3zsDSB95Gov6",
  "key49": "2Z2m7PjxF9PM1BTSc9kni4vxFTfqTknDAT3zD4QHFCyi7QUDdr6ZjQCZWfHyedA6PDrE3C8fZy21SXEeKnZuaYfb"
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
