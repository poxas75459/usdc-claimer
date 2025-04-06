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
    "32o8P7PiSTkvK1m8BGB1nHxS4YQ4zTsAPxDVyY9zbpJ7M3YNRvkHYwfPXMp2RKxXbBCwg9hXUkrPtwqPBFUUoUsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZdPABmVdTqzeBXtr2ShaGgSpFSXfHGm82omUSshArXSCCVLEpA1twRmHe5BHjLgfqK6FUwhjw2zVUuSkiDS4Z8",
  "key1": "2YYh3vowuvwBumPRv9zPTgNGQHME1LyKGj7D1mpN1nowiDdgFuZQsQjeNNUZ5x698wd43PKsSAMAopdsWFdjSk7g",
  "key2": "3s9kaGYzaWtwqtjQEDih2pEJxChAxwGoFRZGDqYaMLXvahnm7abNbSYXHhFo1JUij9W59aANe977ewYtyxTpW35J",
  "key3": "4oF5XczgMw6gcoTrn1bB6gRnXokctcQ5S6NnWXY6Q9BFC5yRTmMGo29C6ekMiwK2vkUrFC4h43ma5MGhHpk4r9fU",
  "key4": "CVBnqSz7zcvDBTr9swbCqrMRZUzoDZDHU9EnSFUpQGw4X27uywf7udJoiiKkFBifapypBuBTT5GZs26bW6szAJz",
  "key5": "3TMujq3GyJ9dRHSYUYHkPMh9uwHByYK3D2viu2CKkpb1SbpHxx6WLHW4mvekcGebHM4kWcgCgwdJ5nQTpv84V9qU",
  "key6": "2BcftjxPKkyruSMrKRkyY6a4v6hkGk8BhJakJJRvdWDGrJfZKfNdYAWR8Mcrutnhk5QK57HinY3NFsw3o8CkahMc",
  "key7": "3n6A44ea7jQ91hcFqW1AkBpyToBYTuxwioTrVNA7ujTQpVA7kHrbP1t9FWtukxsdDBk91sYz5eaBJiTjgWokn8WE",
  "key8": "2ScvHxLD6bG8KzN8XojScWXXoLtABonnPuYDkmcsZgGmoiQG1LdMyKY7Nap8pmQHePJP7hq7La8MtTZF2yg8oUsx",
  "key9": "61ahZXsUtYQ86ZBbBtCSeppddVUp93KBL5zmPcouaKaX5kBdEa8AWFtGGUJeBGawgLY7Ha81KtgFnfvy5PCoEKMN",
  "key10": "u3piNG97m42coq9JaegMnLqTJq8GUmA1UyQGNMUEp91zQ5UwjHHVqG8w1Pca3tVjWHU3afBPvfkCc6EJs2nZaTF",
  "key11": "2kjbhVvFgk8NyDiAc93fKCGep2GEy614nZHN7dYeEiXduUDtJdQGQbHvWz5VrKCCSmuoXDYhQpGFZ5AV8E84A4Ma",
  "key12": "3sxLw6U1ks7hdMkSQvkHXrNYb6twyPxPD4gJPrwhZZ9TjThYqFMD4nkEArFKYWeDK4jYFyg7jiNqw8JgQqVwMRxd",
  "key13": "KfNPWPBNYVEoqocZG5Aofc3JarhL9TbsGNSx6sLjytCQ3YW5dVFnenKnyQokP1CrTJcpSJLWk3UEtXPynMheX5E",
  "key14": "4q6wt7eaK2zrWySaV4fmZFbF6nGAXCxTHUgUBe4Htsjaifnru9QE5tWqcRkhwVm5R1VFm4bZPh1xmcF75ohLrzhF",
  "key15": "CVqqKcZ3U7EDsY7tUdSuMuc8KvU2TmW8JE99sQJtrM2PE72qj6kNYqqjs6Zioko4XXByNJoAftXzPKJZGAqfLtZ",
  "key16": "28DQhvSD3C41cAEWw431MotxURtdWiQXsD6MD6sSjjVFprEv1zvz7F5WrFFWXvWVPKc5fTubpNDXPRSgPfPqGY5v",
  "key17": "3Dx9P5HcWc14weh8QjsuHy388wKHj6BUgbAEWwuZSxiqWhnBc4h7ef6f98j6z5Azh76HTWwg8h5XNRGKQF8nBzaV",
  "key18": "3D9xqEMR638UniWL7w51QjJS7Zdg5zgY2zjpd6nRXzAz6MZebiKkmy7ddqHbwEsnKnbay6S5cC6o4cpC4YG46QnJ",
  "key19": "2sXdFr2ZDCMeM6PrS9zN4FHArC5unyHF41iJrf5bnPccirEengSmRjYopNyDCBrQxuebbTFirRFtzdq55mGqhxkk",
  "key20": "4YcU85DHEr4oH74H9LwxztmnDSJ4Q9Nf1h542coUvBgUUZd9U2cmENAwj6MVdHWBR4iND3K2EiKVNRFS9CqP56nG",
  "key21": "65512eMAuVPcG8uLXxkAmYSiLc6J29bNVaTmithShSxMVinhYVM3Sing5BjNDBGDCaYQupMcvtkN59imQpqLXjdo",
  "key22": "mvr7Qvp8LzrkJogUBqVzMDfMvzZz2XjzHaxfVZ8GCNN8vwVh5vBRYKzKRYU5gNdFZJMQMB4nPWiBBKhwPaghzTe",
  "key23": "5Ucwyo1QiPGduxNHBKQVyvZSvBsTtBXqmk6PucDHKs7VKUd7e4c8NQADeZrXYhg3sj8qwrstNnCEvqThskVjHp8F",
  "key24": "3bV4dYeDCo3RmZgpNULesUJq4dc59wbEtKZWrRVzK4RGXChKWVsdumokUBY9eAseVcwTj5dGc1XSH5LwXLyZKxsm",
  "key25": "3px9o8z7BuLpGC42c2ehkEQfZk9xRTnhWvefMJ4cQvndQ9zLyxrCLMEovdWnRKqSXMi6ffnLRQCZtx4k9qpRwAij",
  "key26": "3Mez4iT64A4XeGF5vPwHgbZjE8Y7sJqs4pEgYZjiqieJEHkXj1T75jod3dZf2P4HPWSgeoDtnA2TGHrhR6imtUQj",
  "key27": "2Xkxar7iBqe33SrAVwumULsPoxduWBNYWtHGVw4BiowYwaY5Wbtihku52U4eNTaid9WhJZDmUpi1v2qVvrtHcrJs",
  "key28": "4bGe7LkbkKXban1qgwmo9NjwN66cHUxJD5Sje8PDPFnFbomVtc52VapXDeg2Fvbz8ihbBhN5Jc5QnaCfEywXVyra",
  "key29": "2tCY7dm8YJrCJHXU8aMikbF2h3GohLP9Sypi34ZoQ1nc5Js1Js3zCN9xPxQ5P516eKvbginRcQ1P8NFM8W8QbC9G",
  "key30": "2iumzG4w8vB2HGwNF6ra1p5xYCw1HkobJQe6eNkzQh3qxpq13hDULvdpcgavhAnpjY1SWsbvE5wbez6Hn5a2Bmai",
  "key31": "5DJww3URFQ9f33U24jdvRyXf1A2Y6obHmkVt7b5xCnN25Shq7j843Wo7hPKYWA1phgFB5doAC2U6W5b519QBVfv4",
  "key32": "3ZJD8n5sesjeUoKygvShAqbHpU3qDq2GT55i1GZ2WZ2eRJvJCmg54cgM4GinsmWBpEs87GyuiL4Yp6Sa6JEh18pn",
  "key33": "WjL7FQns1MfvaXSEz3Zwjb5qRPUmDiEhFX8n7gKNti8geCPBkTPaPgLbQBJYQWRJ3Xc39MyEfFDfdRH3e9j58Ez",
  "key34": "44Tiq5CuaSf971jB5gPG8yJvzDrsDiYAqPJ1NtDoPAJURSjJvNm7mc5WZ887kcKtrBZzdAGdDGkvTrNYb1ALaAJD",
  "key35": "2UDMxGHuaGHZhDa3ntV7BRc4CVR4ed7Ft8LtJ55A6DLANGkw7XyzYa3hLRUKyKsN4TjM1W2CkitFZYNeBBE3sekT"
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
