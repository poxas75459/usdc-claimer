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
    "2rkDgGRzxdhcRPCLJ2P78b1cSABUpn6ve8cJdvhKikmwAZKXfd6xkqAKrZsBnvafr582MgzGkS5VQhoymxmJmi8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThQaA77FtEt8R2vQQd6dadtPvaFA5Sgwdph6hiYioqMYVWfLhDQjR6ADcfQNh8P1mba6JEWDpU3SkHXD3x6xNLH",
  "key1": "v4zXuYvvFidxz5PkPgib2ofTr99pSnBHaXLZdoZQyaMEMz9TJ7njTv1kTgQnST8sSyTjfAwwqn18UWqgdMsUgB3",
  "key2": "4ZV6BKT3H5GGVUNPvNvvMQnnNtuLMPBTcH4pf5NPgtujXcLeMSpKJu3kmmaanr4vFGhNZi8DVGDdtw5kqKRhW46t",
  "key3": "5B1KujizUYMmzqSiB5NnoqEdYfXrpU8PP3eZvZVWLKot1S7WwGFDFCDngMbJbXDyPuF7tb1hogHSkcBfZeFLNGB",
  "key4": "51U6ew3Bx81s6yks5wY3XVn9zMQR82umLnNMxjA5Z1biG149mbuwxM49mk4S6PjrugWRbUyABQYT1YHbdRaReZMw",
  "key5": "2TWAPWQbUwrFcK5veVQBZV3P3SwU5ac7vzaPv2MnntVsTrCChhtezTJQNqx8mi5xuB1BFLsFQxvUZKPBwYMTnfQb",
  "key6": "3XUH4BHFSJgKg82kq8Ax14QnQ5zRTneTA7XG5wpJDNjRHtbPHCcKdDnkopgVTm4RrUctkz3o3hLxvRS7m1XA8Hh2",
  "key7": "sL1jzQumEhunkayQFsDb1snhGTvn374fsDZNEZwm182wD3Wku3uZyD8bGNCscxxnBfsUtjDiADyoC2aP3ZZaAwG",
  "key8": "3rowE9zr2SrJ7YhRwNsqvDHrMcW6SGAombVPdhLoDX8m3ncXZtky9hVsqzXZFhg2WSSXct52Zoc52TJCpDJUY8UX",
  "key9": "64cfq524fBVN94zEnu7151drMJ4sH3qX6m8n1LSPF7wfbPR8KJRewchAVyrnDpZi1uNuDqtEYCvXVwdUAUiMYFYy",
  "key10": "2nUrANMmySJDYPc27chJn3ZZ9BU7LFWsACRCuZUQAonW4U9WTUQ2A6MJ8UKd9hi5eTucpoYmGhxfc2TNQZ9UGYkH",
  "key11": "5oGZZeguHv7DYhagBusGEw5FcF37uHsz1EFYmWhJB9RZTAqeVUKSMgdtodAiwbCp5VBc5SKNftcA2FG5F7A2AjVw",
  "key12": "4ZwJU43V1twXmiamJtWxPibmehCq5Pe4yz5HDZ3MpwYAYASrCiauxPqUJU4niPEjpeD3TmruNr43g9h2kgZsDGpC",
  "key13": "2hzZgTvvsAB5EbYzGuMYmmMsLmQ3NAeiTyvpznRh3NQiJoNuaBJKbHXz9Z1VPtNsVVnb11RTfeYrZUsabmnBi9Sn",
  "key14": "4vBeecZAGUjqJP9dPxK7iZh2DnbjajdzgDRPLzWqRmjUSL9uVyHMjmpC9NmnvJVoPAaAB3or9J3p3wzXBcpX8mrd",
  "key15": "5qQevYqkmpjCdMj8R2V78JwfW9UxRNG2tNVwT3nMUkXxaiagBkBH2uiCoMDRyVBpqVWabBTjJRu3gtKWbZZTnnpd",
  "key16": "77S5atzVbEEqWrqaVE4qoTqiwScyJhPgvvz1dyoYkBZhv6Pdxgx8buSapF68XW58CMW81SaKkf6iEN36BWymWtE",
  "key17": "35UGqWLLgcyeqh2nz9ppoA6WFj1F6kfsccDpe36WMZ76KsS8ZEN7vgxKuxW24VunWVKwS1KGqbL7joAx5EH1jSds",
  "key18": "5Hn4VRJBe373giumDtgJhCLnHgnyCExwqBguXTjTLT3iuPk3f93erarvpwJQScT78nsoW6cdoef9o6LEyTxLGrVV",
  "key19": "3B8tphpsqoWM3QSWzofgbDMsaiD23cQGeFqS2YZihke4FCczzsenCLy1XPVuZ4LYk975fQ7CLYArnD6rMDzCrgDQ",
  "key20": "3wyErHNXthUpVZjg9kS5cJ3KG4g2vSJDg1YBveFhWGC7kWoprwJ5DEr1KGLpVJWfjBAVNjT4BXRDbKSuvz9kPbmS",
  "key21": "3sEGaEz1jhtxBHHbnvTQD4yjBf2rjcPH6X2os172n79xi5UZjb7WK4ynD53CVfGhU2QDYonaE74oXpZmYhjG625x",
  "key22": "5fJcrutM7tVzySoamioxbWqhxMuKWwFaJmKWAbWAA9SUHQ3x8C1m7kzrDNzNDrdmgMWnDHzTsHUJwXVAvmAaBqpQ",
  "key23": "p6MenEyLsnXAE7NPrwmvuxiM3bmqfaUbGuLBFgrPDKhJTcWcY7EQPv7erNmDapK8NJw4Q7s7jmKEzz3is3Z35gG",
  "key24": "4MWZWZFe738F38WByCEwekvekY5Yk2DPLTizXmyXhGc9g8uCtbMiXsasuWyyFuaga79uG4b8YaQVhUyJTuxrwwTx",
  "key25": "5crDaR1QXjCtTbuUDYDZrbtex2fLJm3Gza55sucMb6eURFjZeomc4S4qNEMy9LjUArUoSNqx3a2ynG9gMzE8ibMu",
  "key26": "56dtbmSjJW5WWnAJ4wqtonsUYRnZ3eMxZRytX8nMNPWHVnsNnzjx4khvSbFskkmf61pBu6r7529MVyjUS2Sn6wEq",
  "key27": "Jkr6Xk9K3VqeCgQ71sBVscGnQECVcYUeqXhVhm7YxafvcnSy5N99PZGdnyj3ggg4DpYySkEm5zRUBmdDzjnA1jV",
  "key28": "njM8zfgfHme3iXepR8tQvM3wKj5kz9UVawgiwobq8Xr2PtLNQQSjrY7bygjZARW2L3KbU76uaJR5zHBd38azbdb",
  "key29": "21Dj7WKiVPzkSZEnFcyaCu5ndCuwQ1fFe5DYUG33DMgxmcyobohMiGzAHKpgZTTnkYXPMLviKoT4DFRmVvSieZVw",
  "key30": "3FF5RjUpuALnYiU8BVJAUQM5DQuMSv8FnwMB7mS93T9jpXt5ptKetKzFNP8FNyqBC5X62usSXi4ed38UEftZNZnC",
  "key31": "5WWkCwyqxeDT98yRbTobD6urBMXZnpUaGSnAiobbfEXwdywzMpZvy9ArRsiaFGKzW4v3qeNAaoqfE6BKL8TQv5F7",
  "key32": "2Ke6DwrD41rvpURzXiEyBe1HEskd8PKqvq63bjrYXH9rP9FPecJ4H4hSAXe9pQCfApYGV8YvsUF7xaFp7xLvC76a",
  "key33": "5qZrfRSw1XyinqPkzFmoCvUX4wueLKd5H2xhN187tdnQuRJ1t3MU2KfGGR5Ge5Rg9iWD6e91CsZhznfgMYhfbjCT",
  "key34": "4AjCDZf997YicjMATmD9c3NZBMW27hRAmyZbni88qX9ek726BCD5Ln4sCAqvj6bzwAu5nU6cZwgLZCMtrEXAs6V",
  "key35": "RaGQwz8yndH43gKz2dJvsNTRfYG7ZTewe7Koe8yGytWJ5WpCapFZbAymMY8QeAA2hUkCpCZZsiXwk8ijFLKryZA",
  "key36": "4NG3HM58THvxxzf3V764cEVLHuooDSxvwGWSiLX3TFdqHgYS6ePFhA6Cz5HAbrtVVkTSMvg9mFayEkvVh95GkKyr",
  "key37": "7yCSJRGbThy6U4fzm6Z4De5XJvL9qThZK3c5HZcJobG4Ux9Bx8u6D14CJXPR2HW4hTSzY7KL5ckoWmKzEtW9ydr",
  "key38": "2p7eU5j6Umomfhh9QCPKeSB1VhnkPk19PWDXryUxfQGbSy6xq2XA7nVbq5QjiawcscC3181T2Szs54rJgd5ZeSoq",
  "key39": "3tEZ3x6ToMVt2UJfV24pvgsoNmJ1AzVfcHjhayNQqE7qy1D2ZQPUKRxiW5rzZDuJnpxoG3SnPahNwycb2MkNPhmH",
  "key40": "2e7dtMPA6Y2evdT58ctgsrRsnE3jTvXmD9AsSrSr9EFYohZeWgZCzGgXDMEBsmdbeUGRC7JXRaZjbZU2Qj4QLjwe",
  "key41": "2u4ySLzcTqhxERqZSFetSSuuizNEVwrNr8cjHYw6c6oQXKjS1fpCG1jvECDoiGYXDpZNwTQSZXbpT55XCLwpepK3",
  "key42": "4uY82i3ZEobkdpVC6N2p1TszsccWDSt6Wp8eiHki42JBYjR74rpmDyt75qjtcihxw9EUFeeFXviKXh6Vs8Uj3cye"
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
