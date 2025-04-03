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
    "4HJr8dW5z9pB2esBPXNGcuEG8MRjVRmq74DJZXeeZtzjswGEbLFukHZcrVCBiumErLMUwzLKMpbDf4hm5Cnd3FCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcCynT7gqB74Td2tZWpqeaRKHbJEj7sMPd6FjwmiL4Hp3ogdFHZNZNKowbW5oZyEWBpdqnif7dkgpNqZeVZtYwV",
  "key1": "Zvz7WjwRzhie4DpJF5s33w1RdLAgWtQtqLMqZ886rCDPbTEPvngjQ8HgWc1BYmHF1tmhpR8VbXK9f1tWnxiqrnS",
  "key2": "3jFCf9hm4AzJ2oaYqHDzmcsqubfdDmzU3QundX2ZLkbwnVXoFwsAvwa36TGrBqT18moDAGTb6M4b6dvmhPXTRFhT",
  "key3": "5i1eKvMhEv7EBximWishXbsVsyhp3v1PbG81RuCAu9rvU1TnYqsUBYtnjWmseuuHxz7Gmjxe1wSUetA2e8pMxRhk",
  "key4": "3hwx7ppu227CCPA1JmUaarbDQok6nqDJEGKtFSh8eCio8nymqR4hbapy2XuJ3XFhAJGX87Tmkt1T2Fb2Diu3FkGA",
  "key5": "3DDSnBUJMhcADGNZVesDiqSWauLWjKUzCVehb1tTJ66mg2jAws47Hp4jKwABsxsS126JfkG6pyWEPKdkTo9Xg8EW",
  "key6": "3DAwbnirT7D8A3fBHpZqC44KwuLKvXFiRZbXWEvZ8536SGYd596TcwsKByfXbiKXz2GiHrw6xYFYdJJnXVMjttap",
  "key7": "5dyLZ174RZ3eK3bzgJgqKuKktjV4qSv2MeqN1zAL44w3y2dDX3pLQ5jGHHqAFxd2N4bM4f7cGNw7YZUjGM5bYuDp",
  "key8": "ekAFbdgYwS3fC5VHhU2xXNjAmmjWCT94z6d152Cf9JBNaiDooiUVVmXgozSD6uUdiXS7BwYRMGqYKqYN5sAAf2V",
  "key9": "39ugDtsKtRx7Rg8SspDyGMTiVxc84DM1q64wR31PDpBAs8993ieheJo2hbFpoCBp1FLVhKvvk87QPFyrKhGthWJM",
  "key10": "2xckMrtua54vee7iupEYBvSfSyo9aAj2TXdTBuSkbhmVvQEWgDchW9GDEbevb3Zv68Hn6hJm6wEuztQ2VUxQvvYA",
  "key11": "5FbpMB6UCGaug9iSQ25enhKaFprtR5mpFTCZ2ropnqDMVj2S5A5zPTDhq1ErVjA1B3n5FPP8bZ3B6H4j3eaGTxXL",
  "key12": "2CbjUMdhSHkfFJAgm188wTNWBTMnvC7o6Scnm3K5Tc4Uon7Eckn3WG4yMMaBVsSutakDEzdDKgonMwLA71gR1n9A",
  "key13": "4tXJoU8hQLKm2M69dpQYzLFRvdZb6kYk6dAAhUNmzPTJ3E8H3ekrtMoA9Hy81UMvHSLPPoUed4gqb7eTG8m8osja",
  "key14": "2GYezEHq6P77xNSAabxLTHdZa8rdrxYc28v57Q7Q66vK4cmmypyrjX3jW7rU5KTC8qLHCy8b67c7CHarcKBbyfjp",
  "key15": "5Nf3VijmyJTHzfB967b7ZreNxW4i7TB4ZNnArXKrivbjfs8c22Fnis3heAK3PDiujyQD5oBeMYcmSFqDQXiXw5k6",
  "key16": "29g8JZBdViUmCKvxmE2b9sVfrPL8yBihbCUF6gKqcjFeBs9MwN9tJbuvMJQ5TniS9LCS3tmkeCmcW4nEwYo5Z3oP",
  "key17": "52AGKnpCPJMx99xV7GEB7ahxiUKfndBwLpXJHo2qiBqzJvHYvQ9N6ywwvGcjyUz2kUWRF8K4iAsimJ1XxqgMgZXp",
  "key18": "33HvoSEBBLESDS5tPCeJZj2BHvj4fhp3wCm7vv4sq5NfEe6z7enTBEU1WV7GarFJbSdP3sGBd6xD8yqgoaJ4RV5n",
  "key19": "5MG2vnQQhQidmV4CRawL1TN5LYKBFznCvaVxBAnawk984Qt1jNXVFUV9bFjXcPZBio3y5r4MrVwup7eVgjUQJY7K",
  "key20": "52HQmfPkUNCyfutPEnHzU1nZisoGL7ytCPJXGYE8wmSBcrTV9Rxi7aqt5yqAKWn5aPABv2N658W5FeHGvZmPkNdU",
  "key21": "2JKf9K96sSp7LR9dw2YfHCFfuqgo7CD1UseK1CYZYKzb676bXFizRYArc5u9t2HJoXoDqZm9U3TKJPU32R1vfmvP",
  "key22": "3LJDhv3noVex4umnJxLQrBb9zt1oiM4aLunhp5HioS5PLurYa4qM5tfbLi6tSu76TwXn8EdcER6dsfKvWVfvyZCr",
  "key23": "523CLPyCEirJVmMuK53qNE2udhjaWdD67SMWSJFq1PQtCaJgGPRH2SLkDfBtaVya7fzzo5qhemfLvvgHNTbLJBQd",
  "key24": "4i7jaUHC29X2qJgqoFEu8dq7HJXvvfGUKnHnhM7YPK7a1N3SbYQdiuMbQk5ttKG8jdQdd8Bgv1zN7R1TKLpGr7Wr",
  "key25": "5pWqEqsFKRsj5oaMYrjUnSaVDnSykwhzJLtjCS7zyNGk4j9An2WPAE7xpQKWnwvAppJpk6Bwtej1Vzr2w6G1RuZJ",
  "key26": "54ojsk9Ny4WfeyqD9P5NzzJuf85384256Dbt7JJsgGx97uumj22Nut2tX5RH8C9JKkVBXT1Hb2mX4djeHZZV18zE",
  "key27": "T7PYG3vdQkqqhWxQPAHKXcrFq94vWHjKtqMqw4nWWMvAeDEgSZsfgb6keGUbQ73KNW9HX9f4hVV78YJyBpojavt",
  "key28": "zjMKQrL4W8eWNpKJyhizHCECodDmL7YE5Jsa5WwCSbazaQTh1izG2oTQHRiRw6Z1Ky7kL1tACmspHkuTKcJUggV",
  "key29": "CUudhhR6diNu8Ms2ELkzj9XpGniFZ6sJ66zEBCWRWfokX8stMuGdds2Jw6D35yYt7KXGV1VpnaRYEQE9M3vJC1C",
  "key30": "4X8FMdWBCDPyidfogYzLQrEPwW8e3msbBhFdCrzsiAC1GJuUXaFaPN3dh7NhqVfHRz1cKcCNZU34yHvFDM72EnE2",
  "key31": "3VfiWVyjuHrbuKuxG7QjVLNpCxbV5dkHTnMJmEpdy2vYka4XCJ2MgGAmPhaT9bS7GVPhSvus13yASx9YFrmUWVJR",
  "key32": "2iVRbHPhKDdGy9289K7adis2bGVvhRAtLe96mxzEii9MAgn24RkM1FMiy2rqenkM4WQ82FNCDNZBYG7fMwWNUhaq",
  "key33": "5ZrMnunns6pU9jurqDoXuPXYZ227XdmP61YZmKhLdasbKp6448CYrFwteKmBBNTqL4SnJ27LkXufKu7qbxpvVN9w",
  "key34": "3czUpsf1MhCRqB5vmNKd8Q67DtqiePKaChoukLz1qPueKvYDmHRrAgJmDjBPZ3VVdZfM76vbGrsmUFthdVTNbUtt",
  "key35": "5GihQZeQa2KpJ9aKLqmNbj1Z3kS1TmY7jb2Drkzy7yqw4PXwCvVqBDog23XYooP4vXMrx2WGrQSkitc1PAY6jb3V",
  "key36": "4ozv1ofpfkX8RLecwvZC96oNabx2vPNBRpqcQhad79X7zGTdZEgGcVEkRDGfZyGGH8D9W2gaqoewk73kpKNL4MrC",
  "key37": "58YYMqtWeE1wabjkECpiBkx8ZLQYv7L6u5d3kpdwjsPouVHiCw2sJC5hT1SAsmjnr2BfX8ksfbRFueABcqR4PSXf",
  "key38": "3xhvhd6t51XV4vnCBKNC9Z4zWDSM55aUKCwTjBDAo6c7UKM7Tg1cUksgscMUrmtKyrWB6vwLi8QXhkmiwy3Sjmr3",
  "key39": "4cmvR7v3yayJaDiy48QrDYiX6ioC8M3LCrkFSrmkpRH8ZknjbHQGnXzZWKe3Mk5gyNrQjLjQnBngAmubZ2TkM48P",
  "key40": "4wfRrK328UG2xiANTsKmBKhDrtrXK1HBX6gqCPi6xSYqzsohAUyQv2XbTrjBDen1xAkgtcqxvnEUMYurJXmfGk59",
  "key41": "CGiAS8PWUpWSqaABbyA4xaPPwW9DQ3Hup8LPYwe6PMq2dNyP8zsU8ZPas2iqxmgVhfN9PdaxEppRDBnp9gP6a5f",
  "key42": "TD7LiXVGrLXwZBf9s73kQiVkPtZUE87Fybqr5nrxUoYL2YvuYBbp3kQTukRgmCxJbF7xwuW47GCqENJd8myn57P",
  "key43": "3VwTPTk9ySN6mZcmQbwKEUWiDP95MeFdWWJqobaNk8gZGVfppoyNevwEAhhXkP13ypUskiCLot9fRwDUToNUwKLN",
  "key44": "5Zaiha8bMoF2mvMzdrR7KussEq9GfReQCDUv97tAK4RYHLUT3H9yjLwVSXDiJMuWYNN8nR3i1Vm1jg9eRLL3zgF3",
  "key45": "2Q6KagvsMk3UEFxq3FN2Hs3mLYMNYWURNva7ec8HGRnDBR7QhBURgsZVBwdwxjhuY61oYEqukHnE9KUgx4xg2RiN"
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
