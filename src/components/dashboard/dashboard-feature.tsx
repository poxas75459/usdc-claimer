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
    "5VJLfRtkP2gYH4YuH9D6D93uqW64DZ39DaHGjiNuMEKPYBw4vC9sH9oVkQt3TqxzvAzG5VZp5h8SSAkG1qKeByPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ec1eyDSh2J7jLzxJEvN9vLwXYGA3XU1ncpsteYR3znVqkmYvJxN3Gwr7cywBiFi4C4J3J7iV9LBLZ7z72qKnJuK",
  "key1": "34PtuRj4TzqaBbjkmCQ2HLXetdovrH7WfwDaZQduQxdNFC17W7QffMmYgDfBfPoq6QVNMn5fFGpXVH2HPWDhNxr3",
  "key2": "39hBeGSMrSVeuZ5gg3ZzRm2xbfP84WJWxgawPSSAjN91XLqeQNAd3Xo1zhpP6zGoZEquwEXByMLdY9eEpJ5uc4Zd",
  "key3": "jihFWs7cZwFu9cpossN3CEagkBWEyFgeC8yWRoy5YW6G7nChGCmyZArouZf7jbWURD8j4vwP1d3yx3ygesobzVL",
  "key4": "VAN8SvX3jVTAErmkSwpRkCxPLXXRUMG8Tq2M7BbXXMfroB7omoj6HfALMpgqz2YUAnZcpBhNA2AQMJ7AXWFZYmN",
  "key5": "Yv3PiWzf8VktCnVFaJJDyWHLNc8RM2gC8bS2EMQYjwuSgBafqhF6H8DF2i9zRBzGieABAzwYFwXTgSWKqZLfiE5",
  "key6": "5Be7KSuzNaM2fzUiU7VggGsdVtbqiHHBdtx7yVZX3ZrRAEzoFHizPkoPpzpGryCb6q2vumY53aHpkYVqX6G1Xsr8",
  "key7": "3dmF66LkVuUjPDkGEtdS9upqLFKuwxiz3XuyEPnD1uhPZW4LVEownefs2PAJVYpUnALWR439ms4rCUss41a167fo",
  "key8": "de6UHV5Kxcp97kEaQEMtCNViTpzh9fr3VkzfuiD9Uc4BPiSepQ2c3UfuBXP4DN8SFaq7bfzTf8x6nr4mgDwETyM",
  "key9": "3f855bqZVig2uYKJ7xZv8rRuvZncNbD5VkJCRaP153X8SQK29Ej5bp7FVD9tJwetQjyg7aypcVVGbTkLPX6CTvVa",
  "key10": "4F3Fnsu752oTSjuc2Q7FV7soheDRXwcxYqbKxRVT2fuJXqa46Kbni6u3n9iEvspESQNiE6jBnTzecet5zXEdrcs4",
  "key11": "3jbrJUAJHWP92GLLwdSjqgh3ApG6s8oMtbVRURYZhZRaysmPr6m5sKGWTdY9kMZgXnfHM2pMKfjEei4pF1ZQVVk2",
  "key12": "GBX99zTX8x7AQqZdMV8qfmbGFmjgiAbY5nzqKuqh5zeJkAkoaY76zKfovagLUpPq1tQ7M6FruyXU5RfvbV8MDKQ",
  "key13": "3F6czU4A85BTY5jYVWB9oNZDyLaiVa3HUKeMdbht41w5FweAbfJpuNaW3GCaCzym8WQFiXk8XCRnYYf3Qv6XHbpQ",
  "key14": "5VKh6Bxnioz3nD92XVorB3iQy3u4eFBG1xcP65jNwz3thjWHiAUuvsNebbDUrwP485WxFqUBEtg43QVLTL1vCFmz",
  "key15": "52unutmHFXfgPvsJ4RY46GhCLkdCnUmcJVhZ317PCPCeBNJ3QsxGihvteQNUBg1uiaU8yKvC8iDR6QbopWhubzKx",
  "key16": "5vxgoFaDADh7dGdNynyexnbowEPDdFpkRQhmEh1bfqhw47cgYznsc6b7PAEQ6qwv4G8v3KC2uZVAxiZcQadFtWu9",
  "key17": "3aREhQTRFbHUXbJvJXmAASA4fbxTvij2VDTh41rTaMDLVtDULtfjqeWfCneeL5HdppPBh6pBZo3naBHY4GazA4K8",
  "key18": "nFa8Gjv1jyyo7LgsQG2BGYZMJEsp2Rhmv52vPwcqzyPJW7MaYVKnMxvrYtUrMGbX6gvPTUdUYNvkF6cse1X1Nov",
  "key19": "67My6QyQtSoKNTqMAeyiBhwe9pYE2sVGYNqM2eYMNwYdQ5scby6aQufP3A1b9jKqYmShtoJpsbjeb2SMqa8uMRu8",
  "key20": "4BfigAuhF4kXBbgs8Nc9Gi28pePnZE71xT9djj1M87wm3hHscu1vDz5oJUs8m8tCdvcdL3dhQctjx1pTD5qcN4ex",
  "key21": "maULfzeDk2tLNV3bYisC9hNfdhTaZ7UexV7khiGrkmBj9ffhzHW76MoJtSTv9gLQayM4rdC2G6fDV4RdpRXtByW",
  "key22": "5j4drQEKAgqiWnuXnC72ik9Hq3xEMkp7jEWkZDWXNwKyGZGgKnCUqUGNWUaRL8wsV2Shjh5zY7TcH8QyhZtWbQXk",
  "key23": "2VHV93gKdEcm7LC4fzBuw4sozj3uoBz2n8WCtgLvwTeVhyr7JrUMrfkiNtBN8ziBcyus6nj2yBsEFng7naSvXqsn",
  "key24": "4N1JrQCh1wyMjvA3hopdknZGMR7X8MgUeS5EWVbUgsyTSfTxi1VuQ3kDPMixeAsnA2WSAeDCi1b8Q6Qf3Hz87ngB",
  "key25": "4HtLmuEhw9YXWeaPNeAxwGFn63rSNjbf7myQPkrKFxZhoSg5zCe64Xnk6dCeZF2S6myL6ALVJdQJaSURJM46hXyf",
  "key26": "5pH5SP9Y3hbGbTkYZb6QuvJYXmjii6zAwNvpaa6kZgECuj73RmFNxNfFVvAZ78tcFEdff3c5fkrtAuxM9b8PyRZA",
  "key27": "3H2srmKVw6sz8ZxKdyPH2xg4e7VGhrbVttcPkNP6KmkfuuGCf369reVfksFLXanPF9NxJUP2pshQMq87z1U66hmA",
  "key28": "2wVHyqRRXdRZGTkvm9Hdh8y53CLY7GcYec2trz9aqphfMED6kNLvGEaJurz251ZZQiH1ToGiMDY8uNN21AZwydNs",
  "key29": "xqYY8cpqjWJCZHJ6rAguinaNiVVdgb85qmBx4e8AKbADuGUsArYLndDDsHZsKJp4px57CEAhaCSTssxY6JPhAS8",
  "key30": "2UMMiHXaw69kP5zpHhax2momJm7egn52saYM8sKDaqnVNanefPKi1fD8C3vzhy65RNAmBSnjth1PJV6TYK7z8ZaW",
  "key31": "2CCsywa3KDgNxaprXP4pSYPfV88HH6VnfkDJJiKFKrnDscPJ3DNuJmN9QYEaVy3bTmzCGBgxxvVXFcessRzE65VN",
  "key32": "2DbwSCfBLxqUmk1MvVA3WPLSJgSVGLkkHmLNohgfkNALusshVqKiWDsUdKD7FjQgNwF8yL1YNdXqonbDESPAProa",
  "key33": "5PSc9pSb3Nr7a6hj2TgYxb3R9HxvQuve3jcuUjwh2vCDnKPBW3du6J5dZVErqfYhKnpboZt2BnzXLnWmvhb24J6r",
  "key34": "2qLf4dD5EVAgJTBSuAqDsngHroEFR5uz7MZsA24ev1F4XrU6bfUxRkM1KSoPcrPDJaETX7nwGU6XC9RstdPdavh"
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
