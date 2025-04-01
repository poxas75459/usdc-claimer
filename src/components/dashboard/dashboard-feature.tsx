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
    "4yq4JeYw5n8nrjNFCYe3fweb15GAzp3ogAQ1rhVaZvdEKxzS1NiMaCmUTUCLweoXhpCZDEA5wvSKLi168VNJZUex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3PMvNsQgHcLotMFrwrRHthzAfeAMZUQ4i1VmA6Yj8T9q9G6q7UzTjM5K7bVJKiUzXXSsoK33Rrd3BujH4bhyEN",
  "key1": "r43FYXMRSKdiwbqTjv62yU5JWpmuZtiPtsL6ZCje3ffDLtnHVVFnxnwyi7EwaqF4WPoCdUe6n8oWvpXZnu8YwmT",
  "key2": "GcqRpCJwMmpRXFs38cyy1ekvp2iA2SffvF6hmBzhxV1UmxskkgxQzwvatdMb6GTWzTdVoHaDD77AUSGKQBnY981",
  "key3": "4ZfsoeRV4uHwg5N3HDK9rTfK7w3cqivXPwbHs1vJ9Fk6RL3Dfx8PF2R21S4F6jfbhMGmxNVrK8sJ7ipYKpU7HTWE",
  "key4": "5jCtsRqDfZVVBNhwr3sV4ZpZxL7ZZzgEWezuw9hvhZtjTCs7ukiwKnTmueWpdemtgs6QtxNBSZtHMEgxhgMCaECT",
  "key5": "41ZkoCwRfJN9LUng37YPWjmwf4kgRKSzX4Xui4Ehv3UqV76wyphzmnpeXPbnf2cfbSWxcNo7ajaEn8BrvGgdWVX1",
  "key6": "TNW9Zk225zgXNaMUVw65WXPfCPuWZAyHArWTMKn4pF9iVozuGspG1bjaLavwgJYPeCYLNAfE6pRM4LYgK9FMouA",
  "key7": "5i19swkzgxUm6jbqfq1QuvkFGETiNPEt3AjhWzAUsciWwjBp2jo9w9c39Bbz4ZVdiSE218eWbhczbKiRyPWwH1WN",
  "key8": "2EtnaukiZGYsk7S9t2FqN2kdLP7cEzKDWVY5FWVBwZ3DMEXHgaM64fK3WofQvW2Z94YLFAFDb3Qn4Zx1Bv88TH9d",
  "key9": "2j2FekeJwNSZ9mSxvft7UxKKvpi4KKZDewP4U5kgbnAck5EKG47AFpKaqrJdSiZioDnj1miaAGFq6e5Ews6UEAEA",
  "key10": "5d7sUhC63V6nGoWHKNG5gcw8qBUX5R9sNHPZu697gBirhAZeJ4DBTfiLg5sfWP8FEh2XFYBwDCj63cZJDHX8A6UP",
  "key11": "2LNeRCYok9AXUnPrEeMnYZMzCZm7CgYJWHZbmzFxwitZxxLWYf1Csb7Tes1U2CeSFySeeppgxfcDiamSaNfrDrRT",
  "key12": "4PVPaWgzrepKo11WJXirW1iff87B844o2W3Kwko2QCJ426fYzS4xZTWn6YR69o2A659ZMqTC1rnuRSeFveBtmaPn",
  "key13": "aiincxSJJACwn3nAefwyxJvNCuwVeWqywzoMkC9ukmjNRRGEkkKnprqHT6DC39KSCj4WpaMBN7iq8L7Ao6fDoNr",
  "key14": "5e46eukHLz7ZX2sp4Pm2VLV9WrWsVp47PaHBbwiQxnWphZp7fPZ9oxNy8rq8ZjcUYhhVmrCT51zER3x1YkkLsEEt",
  "key15": "2ZoJg9WY9v5KT8ShsVUoVCvtRysXBD6mYo7LVky232CGNkafmnZ1qubQRBNUe9FHok5TmkpiQaUi7pmoXz9wuuSB",
  "key16": "CyAzjdM3bWGV9Qw2z2A8DAz5G4FyCYBu9MW8UngmrAAzMtnQVnJ9Z4UftHbNCLcpB4QCLBHi3KUHZfeM1aGkbGx",
  "key17": "3rmcnnmL5dEYAbxe6PsMjC4xp79NUK9wynJESZqjovmw2aLEVtenLKVsrtRLTjRTgypwzikLp1iHr67ThoJ44Sz7",
  "key18": "mbQvXqFGmXGygbLe2CCcLur3SZC2GS9x25ry5uduRVeupSmxkUhHBC7nmbxgpw1KTg2QbdrCD1mPZGDyzBM7s4G",
  "key19": "4ZSNmc5cb1bosryPE8LDk4u7m9VShs4nqNbpZ4E2BjM7L9iXJtcuxWYcZnxvFopFaBJDFpfJK4aC7yAqGLRTQG5a",
  "key20": "38dGz7kn6jVrSy4wRLDiSvn4Dy86YSvzViSu3YKvByyPRCVSkbXbvYtsA1wP6zCzXKxQsorkSFamd6Q98U2FPxAL",
  "key21": "Ue6mTmN3FGv9X8At3karDoHmDgQ2bG3gskzoytvqC13yAHqicx4yA7BZ6qhEMJepiXmUhvYxs6uuvbABNU7YbZ4",
  "key22": "55MGvoEycceXfYXieuGV4fK9pJzkNSceprSBgEukkobssngAUAejdf39jsW9Cdq9JHC8282Tv7bSqWiBRb1QAa5L",
  "key23": "5bMBF4BCdTQicfFCVhXhTUpRhDaoEn18bm4mfEAqHW396W3rc5jYL9Jqi3et3AWqw3urgSs4RoFD52N5c7XzN3mv",
  "key24": "4Na7LXqmfn77ofgnJeA9KA1XuU9zNJtWiwN7NPyfpqANUnaA8t2SLW7VEo4x32e4QXTXkQZKMQzXnwoQMAyvqxLD",
  "key25": "5zDxvPUH9rE3aioVFi16EprQFQN4pSASQeW187YYLVdsjq6g3Xfv2quyP7nNHWrUJ9MduQxMLa4UjV7xrr9q7oDx",
  "key26": "3yghuPf5NxL8BdipGKAWxu1J5jxJ62ULXmNR7UUcTEqaRE57eADEiHfGYpXnRHLby5tCqGiTiNv3iZEV7X7kJSWz",
  "key27": "npMa2HZyNsvvuQrW2iUFnN7M4MAnkQKqzarzStSjedrX3hprknR9WhTZebSgUL97hoKuqbJMJVjxkBpcydDQhVd",
  "key28": "bev6xnkf1BRU4euwnbxaTsK7XY5pDEz99SBcXaAgkgX5QAbFNz7hGuNU5jJn8MRHKKLurnJkc1FLMATUxmscz45",
  "key29": "3MA4JVBRPy7Sih7bYMHZCsrz45VSWjUgp196XDnAidsi8MLyKhJ9poZotNA3e3vAULb6uXe516gaj8QSfeGYXXDy",
  "key30": "2fHBGkXvjamgZJE2KLEQA3tm9hAba57kePRant1xFwkUaxvWCXmvy7XbW5T28VDFscSGtXGuh516838jg4uz4fds",
  "key31": "2LpK2siHHTCCQLhgrGycV8kpfFv19DNfoSbxj38T5fKHNtNTRaikxDogmeVcvN2y5jwjrU7HMvvch72LnbrEkE69",
  "key32": "4wtB1po8uVyxXdN57wmGm7775B8AHTpj1KyEmzbmJsTMCLtPNrNKWFNsnPqV59DjmyetB5iHQTne5ADx4gXihLDa",
  "key33": "2MoJMPwCkN7ni5TMytDwpP3QzVZY1jFkujt4bCf5YtUkuJ9FzPo9UXiN3caVexeN7fZji9hEYxoGEsXmWkbahMTc",
  "key34": "36MnK6MJkz17yJvpzXRXzTUZSnFiwf9t1vqS8T2FDfS68dvuryGhXYeY9QqznGcBfKG3pcsWGXh73Y5WrdBygJnQ",
  "key35": "56jiHie9tepHtggrVC1txxiTYFo4jqrJm7JxZJfUiUYvmwu4XJwoKXmzFrYPBGpSWYSX3VU6fhJRUYFENXvtPXuQ",
  "key36": "2Wef1U3wYtEMVqCdTHFii1wvLkwWpfSTUvBAKaT4RG5oxaAjBtRnrNL3yHPmidQSSxxKND2zenEEj9GsUfToBCc5",
  "key37": "4c4yi2F7TH2rwJ8B9vLU81zk2zeYA4Seax3qRM5cvWqJ7HJHU6LoMHNMjChvhxvSDQMJdtphfXgAKiYeAjeZubbu",
  "key38": "4Xvu4Th5UFGihbzZVXrHT49izHwVg3WZ4MyiAtz3twsGngJWNNXwDpRmaUdTtRTo8UPozML1fbZ2pJt1DLFS7a7b"
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
