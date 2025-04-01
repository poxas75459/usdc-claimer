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
    "5jrVUdjoDxjW72QqaxQvm2e4GaeZPKsMPXbqXpy2HzYjd6XZumvh1pC2y49862VZ1nfC7cusXdRbL4t2md8aLm5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjwAbbjdSRLeehCHLdefPCi1YYVWuNccT95e3o7AZBdNWsB1NUhMWA3CrP3ueFZAsiAM5b5DsF7nJoED1HH1wfc",
  "key1": "36mGgfkfyJFumvwqMvonb2C8BnjCMf29ss2WMEYSeW6mz23R8QVssmNkrwu5cbHbxc7r72cjfFhpZLPBN1iSmXro",
  "key2": "5hvTHeeKWBx94FBaFgQHqatpyrNvqm61nQmQkv7ECfRfr1chWvyLQoESDVNeJ3r8TwzEj1RCPd2fTuk4GG2tcCiE",
  "key3": "3yey6Jv7NMi56yQV26cz6pPTjvs8sjrdHDaPxwxkn9GCtXZf9MQxwwioyqBBYAHZMvtAjjHQdLL7Xc8hjHjUiLfT",
  "key4": "vx4W4kViZNJYTWugqAG3oMA2wtdV3VkNAk9gAK8WzUQpmUPnE4ny78cW3gKDB5e5eRvoHi9cqgmoxXcnJ3JyyUi",
  "key5": "5KRoQTydLbuqtT7XPCT5PEQERVNkQjCzW1JFZNLDjt9brfV7V4iEfc6yLReF4ARp4aSVeFUpstfRkGCLxkGaUMiv",
  "key6": "5B4TBD81ouVagNRnmhuxjPRnWtVHRhcsNFytMYSbMn37kMtnyezbBUw4aHsfCnueNgWtYWZUeSkC8TZxSziz72s6",
  "key7": "2qUCMfFT1qnaZZwi5sqKgd1jWjwer13xzKse4ZenHh4kMouknxPCZMRz9DZ3N2Diccfhz6MC6EQ7Y82zSXVhBhSu",
  "key8": "3omy4cQaHbrT3hhSaLn2D9pvv5EtCVSwJ9WS574an2KkDr3h3m8Xes9iXPiUVRMSFnxCkiMpykDTv6bNiY3DoLkk",
  "key9": "35esd4eMCt8FHbsetPEymwDipohoz4SqsWRVLr4zzyqmg2eebNhEQJz9xLn85rxFgAKMSLE2YZhhPxgHf7FJS9yX",
  "key10": "4GH7AxsryFAWix6Fav6HCCHiEm9qouzAx49U8vutG29fSEBjuEYFQ9VF8Mp99FaZpzMEzdTA9z1caAt7EwxqJtv8",
  "key11": "3pB58GhZVH7xV6u7HBo5NpwNsYufDgXoWpNwamjfW33sjsxBjaMJj59qH911vqisX5uU2Yht9ZkmDeHPN6kvh6WU",
  "key12": "5PfezR6DHiBSMkfgZLhtT3EabiX8h1QnDmZmfhgmzm6Za5mVZ2Ks2jfaaXEtQZV125UVM976XZMo28uEjenrQw7g",
  "key13": "2ijt5rWU666f7L4rcx5puHCQVnfBaf5eT37tHKVGHfTx4WXjvT2ZtZ3DYyVkEbq7PZwMo2s2NZez8NuZMs22LMQi",
  "key14": "2FRTnXEgXXwCx8WhFWEm2rxmTjmc616Sz9XtNtEpYbjH2ZD3KYCDZFUG1FEXbnABUZZTqvs2hFMKBeJQGX1zE9xS",
  "key15": "2h53nCeCuMYGEXpwZLfTnGNUba8RZWYi7psVFGVBkAd7fYUtSyFe6ccawU2CRL5zCYAdDjEC4mbpKq21sdDrSDGr",
  "key16": "2i21M1gS6UJr8CsULWh7QQGc7vc4WrXyNq9SiNsx2AKwq73U1C72h9iGpRWf2HUvDih9HVRK5H3pWYEsMot5AJoZ",
  "key17": "4dw36idKT24npBZumEE4YckckZUWDC5aRqaot73Ee922tsyaBYmdqmZpweZ3xL53ZrKk31BJqv1XbwhfhD1azQ5",
  "key18": "3uFMve7xNjGWjeVmWJ3uJxe58uCvdND2Gop9rr4Shya7XZRLQPdHHq1JZz2eAcME7XBLkNJKGm45AvFoGC5wYvgZ",
  "key19": "24rQDZWqwBiGGKL2ACmFWmU3pkerQufWxq8ijEG4G7aMJKN7d3FMXgu9jcsHFa6ChJKgRNEg2gzhdKXkKh6z23kk",
  "key20": "cYfnyLdLgWK6HP9C7EkXpDAQFT7B1CP3aRRDodtN2c42YSik6pUdpHbGgBMms5BB8fwRbu7nBekRem5uySn3x4g",
  "key21": "3NpJTitPkVuAKF4RZxdVnfBbp3ZJUgDEbyUZ5hhAJr3YEbU2aJLer3CjyeKQt12J8547zGCr2ZzwTJEUGKhWgwuq",
  "key22": "3zU4q2kwdgqHF1pjnggQLxahQRqCcGfEi6vSVM5P6V9QD61XGf9ExdemWiwudBXvv7KwQzEbJSF5LQUgMRKg8nsM",
  "key23": "3HR8rw4QXp4YyzhbXbgEBHGgFWm3WaRroULFbb8dTLHhXELYN3rxPtRXQkD2pfjzhMBNpGM4bZQMUdh9mNyY9rnq",
  "key24": "41C4xU1vdsBjZzpxxZpfA6eY7JDyouX1BBVBZeNH31wvNMAp4cnjkzpyP6Xxf54iD9YfZoR3LMhrdEPY1K9k9FiW",
  "key25": "5SEQ3Tg1tChxyTnPXXkmhbzB8EwpgvNEFAs7SZTE9Db1hsE4QxyY3Fv4YpxxPk9v6qsNqX7JzYwdLQn8fUrfiWJG",
  "key26": "259SyCE1GJ74iRbhjWuR949QBGSsZTH1QRNmAUWR5HPYqDQFvQZ7H141Qejty3iQCg7QksYKdzK7uLnWVs64kegr",
  "key27": "593c4CZUYTr34o6TUxwXERnqk2pjFLHuwRPgfEZmsGbghXnLZ5qW3uhYJcwgmPJa41zo21SGHoc3suzB2wxfcF4o",
  "key28": "5N1CY9hyQEDfnCuT5teLEtKGmt8HJp9ePqWAjB8CoAvt2G8rWV98ppL7qeYXUYqaujipWoyDC2dSMMLHp1NACdwM",
  "key29": "4bYu2T2c8E9qnTd1hvZd5KhhVVUHUrMj8dsgusZCDzMppoou4cttD97jXAgMUdBrqZUzuicGu9q6geZp52wsq9ut",
  "key30": "3f7F7TPMQBmyQfMwLvyug4XE5P9nzv2m2Pb5NUTi5XUyMhRg7x4cuwCocoM2n8zkMX8xZcp6nta2Zu1w5L5M2XdJ",
  "key31": "5jwY4CzFBAaEC27jHwXsafDyAatrWhaQ4zVA51PFHicGk89J5FdXGCoAwjFT78Q18K97sKeqie5ujGhtEA1F1N2A",
  "key32": "4VhYcq5u2ZGUq8yQXEmPp8xZmiNmmjmQ43HsEAa6W4owPWW6Z691gc2G27YsWRQuDdzG7XqaDCTK2WZPsozj27VT",
  "key33": "5fxbtBBqSCPS597puqhZskbTYpyEyf26G2JJMs4gR6gubJKLypve8EncEidSKQWqKyHRGPanxPQ7ACQ9AjaFSPt",
  "key34": "2xJmyCaLEs6p41q6BVyfsdthZvp2vZe65P8KDEJS6xA62m6W2PmfpgU3GhuD8Dz5zUkFTqSSArjkvQ5QxbD3ZRg",
  "key35": "5Bp7jfezQ8ifEYu8L4ccQv9ehXo8pWWMFfjVjwR27Dc1R7kCFYpoKfZR4dGUg76qd1SfCa8sSDFg4PF5ACqCB7dF",
  "key36": "3gyGmUzqkkhpLQcJoybnA4s2oBKovfF1DTxaVHBem68yX7Eroeytbyx193iRCpCMBptwWjRyLzm9CjSaGeBMJrDB",
  "key37": "X88NmET4YWjNZmvzkCPNmRDgB8FDxcocHLZLoKvwtg1Bicgga5nabM2vU7rvtMudp3y9EeANjtJGzNSgrLsZ5UT",
  "key38": "53Xc2xw78ogZmsnNwZb5iXqJdc7NyFBLL1DUnERHNpU1pmJnXq9c7AJqNuVdTbmSTRytjD43uY7sZ1uBPVxz4sxN",
  "key39": "qXub75esqjmxQnazxiTwzkNGQwZjYqLcWj7nypAeM9F8M5So8zPoFkadHZy1nZ5cx1mE3mPtcMWNq7HZRkJHzW3",
  "key40": "ztaVVnHVfjkyqtRYFbCFC5NzTGA6283ZKUuAK7A58Lp7akH2pNqcL5c7wpQnmrtWTWsCE55YkaQVdwJS5W537ME",
  "key41": "3fpSufqEMUYnUYnus2j5sDqc1pgc7pADPGkmAXQ9u71D4nnuYPcwmW7FAsH1qVkorargiZRGPY7k9nosY7rpL4DM",
  "key42": "58JX9XGWpvVLT1sYEJv3EYuUbovZi1bKQDtbCWbfipTQD6kfj7emn8P3oy3XtfkiuBpGjtApco9Lj4XmCB6wyoNm"
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
