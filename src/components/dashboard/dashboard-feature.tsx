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
    "4qKLg3GbsybzSFjDJk4NL1graHPudPvbtCC1SSnNRcWPUygxHdFETcxzH6qH66hhkyfVGJyTzC5h31dY5aEmzyt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hiVdhq4QnwCrwkBvRZCavwhQ8VJHSXN8hsViyEiyn2t2o8DpTRhqhwCazHWh3KiqFGsoxGm6EiAzegfzttL3a9g",
  "key1": "41vZYrxrY8QYd8oDYj5Lg4ZxE8sk4bDirAYmqzx5Cd7hGCAbJ1BZgvv23p2Tz2KrrBLjvURS7AHhTec2Hts9qM1j",
  "key2": "2VK4P8n4pRwbmosST1CNEmMS6fDURDB85Ngreg1vt9WQv7zdZrunzJxQH3TDmFWQ4c3E6tQcYqvorY2gwfuQyYr9",
  "key3": "2xYovnk4MPzwGnJuhPPvLSaW5hXWXHraZDLmHYPAkifj3Ex4yd7XjLD9KXpzqEbD6N6Z6PztbDVjeRs167SL27gc",
  "key4": "5NekbDNM3LRQ4pjeHhQG6CoQu8NGACeWd7JFxqLgFJYvpRvKPZRA52RzeLTU3r2QBFNV14xNfSAoMWkQ8opX5ptH",
  "key5": "4NTEbRyQFCzBgwWsjCahn7P4fBkbXfJ6whTnk5Mti99rrPWUW3cdNWYhQCiD1FuyBVAx9W8vke7tKGMAw5XRmQ65",
  "key6": "TrWFxV5iyYBUKTAbuwjEqYwGHkgmHqvPN15LaFdWpmX2npud2fP7hqtTSqbSZpaWAvUB9maiSAspvEN8KYC2XhL",
  "key7": "27C7PsQLZkhJgswPjeZCR82aHNis1BzVRAmxzUPmdpHnegQxaCpggbqtnFaDK3FD418S1PzEkjfprNeAqdywJXoV",
  "key8": "4PhTbKKfwBDHNq6U8aUCaza5kViBvwD1QcWxY3rvUUe3YgDRxdnE7ziYqBLxjfqdyop7wKHcBY9ZGNUvPgDoDnW4",
  "key9": "4pcRYtt3YthXMpLfx5m3AR1c1tJFZv7Uj7U2RD4gfqZ6gDaFC9j6gvXKq4ojMZfhtKBZ14aQ6zXHMpuvBJhFicM6",
  "key10": "5spE41G4cDVgm2BsBgyPL7zw6aGC8PQFagaBSezPXmFVVDMYot3viwPgfB23wZenoZscfT5QP8gui8SnVpQR5iDD",
  "key11": "53iiSK2qJcfK1gwExCVVX7UQnV6GiSBQhuXH3FRozE8eEMFvHu6ZUQQomGzVFvfwEwKzMjiDK6WF2jhDmBGNiC6g",
  "key12": "4ZZELdSMirkq68fw4rCZg5z6hG8wQ1siHExeVKEJKiSjfemDENLtgmqZcnNrpzHgyX6vw3gqUNSSWeFRPEaD64Sc",
  "key13": "2beKwpqkt3kDNuB5Qz7Fe35d3GikN26uD1uyf1wQab1THqxndBXUF7RKAM2yKS93QepciAX1TxgN54ML2VVMZ6oJ",
  "key14": "2YwsDsguN8FGJC71Lr8tuPW4udSiGvY8EU7H23mVdtPy65yJKZT49fYjXX3d3i2YhGGAKrunqmTMUaCYAtqAeoT3",
  "key15": "4sG8v29VDHvU4boFjiJMCkASLZ9WCpstvczoG46q2nga5biWHaSiRHFXABWMwHpagoxYCuf2xEbACxgwnMhMWFQL",
  "key16": "52J8R2VgvppjvW14UVFPpLdbqAuTvGY3eRquVhfmAKHQeokK3a3uDKkE7HYJyob23He8GEar7UAVEVex5Bxbiuyi",
  "key17": "5BmLy7B8pfcNpGTv8yfeGBHjj48g6dvonUQ7iDbwJzBX8htNMio1bya7VxrJHirH9RWp7X5jp6qjk8pYveGmpnFa",
  "key18": "3hRUAUcwnHVtUTW9UQQybipoqZpQxFuKKQbt5ptVukeCAT8rCmDAzp4x9jFGTdvzg4yaPqvvNcETU2MMon5k5NDh",
  "key19": "35FiQXDeVzeoWNd1CwbbYKZeDhNhw2q69AAM71Gq9XDqBdLHhYfFspT6WEZZ6ThVa7U4ApqNQfABoJhpqXbSVB6",
  "key20": "44TZTijWqinMamjA5PQiv6RVhpQqzfRorWec3DKTDSaVFcchy9ZT7UfPMST4XqZo8cV2pokQ4BzUvjqUJpLkqKy1",
  "key21": "4MSzq3rJz4h91dXyWggoNverQXrKNjWcZ4CjpzmnGEmWjum2dQKNeb6FvaKD1YSUfk2XGrqjT5sWqHdrL1ygCoXb",
  "key22": "4YTFh4ZNtpRKwFn9rg11CQiHvbJ9CXPXfvxKyc43J89qu3UZY9mxUWU3zTCCwV7HXdELNYVftUxmTJchQQwQJAib",
  "key23": "3ozwwq1L4da7ZyopC3vRVPqFWv5yTmTSepme6zMTJAhotroZe4k54cUWuuwQxUNjKCPjCgHeWBRXCw69oiqfQ823",
  "key24": "4jd9aa41cXzvacS9FGyu661a5KQr8GgPkd7GJ1UWtLT5m3Xygpumb6awYsNUzjUNTaYzKtatiti7ZqeBV2EtCTfg",
  "key25": "31fGKrQ4BMfYBdXNQNGZQNinxfVzrtVJtHFZo8WRJKURwJY4LDjbcdLWCoQZEwCai6q7SR5zsbtC48JFgUhrJmNr",
  "key26": "4Nom9eARoqxTt2sutxqNndLV1hrD24SoUsqQc4MmsEzKwmHuwAD7WK5YY5RfXisJCMLCWaNr4AUeY9mps4J9pgno",
  "key27": "46iUWju3hZptKT7y2PyG7TZMM8tsZe29yJem3r1iEiPwkvzdRLKRzTsuT9MLnNfs3S5LEorvGUkiYmXHXXcWETPV",
  "key28": "2cFuUqBeFJF8yRysFVVMRbjtKBAkND2UP939PYDuqwgBbpEvqCq2R7fGZQwBpmJMJU5wGiU5Pk5LbePF814G7W25",
  "key29": "3uFnitW15q5SsHYgJGWh91664Rp1uqwG53v9QjhZnEzRvAsZiKANrADkGW1bRvZPPLn3Q8xC9kAbYTnK2kHes2yd",
  "key30": "3C1mSJnTsQuBhXqDQRf8ShagtQqeoPF59Nq8w5k4xZo1wduLgwtz9TxtiQVAtPN5a8LAjpifdJuuhRU4iudAKLzq",
  "key31": "KUpKvhQDeX5cnQZrSa3mD8Lj4yPDGPi7CDi988BA4E3NP7Vxasp739zCSQ2zXi5BMMNtM23eApHAxnpqPiZZMJ1",
  "key32": "586pLzCJmfKdgYbbSwXtZN3kz6QX9T4yXC34jG4kLfiACnmY2BLdVCDRhXi8jSuCNaxaLp8awu5CLzLtfBErqYRy",
  "key33": "4L6i4bYkrgUQiQVzbDyjB9G4GhuqMKHXuPoSFW4eJiKmZthY6wnqM2AzKFnTBLMipkJpqRkfrqYokmT1VAS9JRuZ",
  "key34": "zyvfnFd2XfsmzwR6DFQQ2s9qJ52vQJLWoTDz54CX9RF32AtjtWSZFEy7vKQJvtdgRdU2h41HbmksbLxzWJBKNQf",
  "key35": "jfAyLuQaqRo8QdM241Jm1kUZjsFGc1HovubqdMWytJNMkmDH2RBDnxPAL4gtx8AfyQX2BByGAzJjLPmvgCE9Mi7",
  "key36": "5QuxvBizoyVCgsBJMT1LjdPkSGdCTCFMVMo4KsW1zjoMdDL9KhxvQyw9McvdGbtrd7toehKS8vHaSTwdKhwTGWuv",
  "key37": "4BSjRmeixRC7ThNkL1SzduF3c2DpYCnu9gZAdQd1SHbCaK2PphZx2URWm9tUiz1wZAJXtSZTD9EQkFG6AiBhBUQ1",
  "key38": "qzj5cRFJ1rJ2hHGkHHqvmgEdYAP5p11MuzYd74NP9BkSRHzDhy7kAvyoacsCBzAVXqy9jsjagSTGohKYdmQwJ6d",
  "key39": "3WqGgz3Lc2DvwP1t1wwPuj3Dr5iBqWF5YjEmdKVdVYyEbixHNiaRsPZRNaKo3nPJFF5AV2XimtyegULyp6bo1zRE",
  "key40": "5df6evX1udH5zQTRXcBWFLXmET6NvzTLjAKw1Jhb9jg5TCh2UWJNc1xDCGjYapwy7Ag9qDZ9pNUhjaUTKbebKn3D",
  "key41": "jSNxShbNCWxDGnEYBBH6mE8Wxsj4HfF2WJwz1vRUyeHscvxFSxDMA6S2LBhA3QabJ3s7DEQE8WLzG18y3romBGz",
  "key42": "5mZU6GvDDLC8N3aRE7qyB1WyPoMoB2uzyRN9pNjNcEfJrjcZo9LQ3QtwbC1peY3p8SZyL983bhkNZXqD4ZDW2x1Q",
  "key43": "gwM7jWAdUgEc5s66s3wEdouPw7d3NNJJv8LJRabpsxwRsxRAMbj4H7gPtSHLMUTNLwzrenX9o4fcYBsnFDnC9ji",
  "key44": "CiHiq5u3sJTg7tXUTMfTEVECNabbKJKXx9WAoquKY3WfWGGnG5qhLsSGcVQQ86K69YW7QKDmDZ98eH4m8CyJkNs",
  "key45": "Bmp8RuudftVCHcXFZZqD9D8WMVwVrjUX8RdtZ3eTih6dJcfPQ3BH28TL7jaVFAsrfX7ywhjcYgx98FmRs6QKLfn",
  "key46": "3hhvkdsnY5Yq8cTtMzPaVd5XM7LMgsxUpzumyPdUnR3hv31B1nnokouFp8yKasbrKFgR5b4QqeJc3dYZaS4V8hy5"
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
