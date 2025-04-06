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
    "2Qn3dg7Pni3RAF45iSBtVpf4dtsQD1bvReBmru8bu78Fk9on3but619EiSTanJViz45rD46Uxjf2hQQwqswbDnRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAmFT6zB1W1WTSCa7Z2JUpr8kX4MNKWzmx69EU5sGcnQ4HPeRcxovZt5W86FJTwcNzYrsS9zbVYTTeKTEgek3Xg",
  "key1": "4nJ782TbSebeEhwMpHoaXuKZWqL9XNRvMeKBDtbTLwuDco4KtH2Ap37ATh3S1d8Wc6rvBzUBL7bTT5FAf83efSCi",
  "key2": "43zqMy45N1zxWmmpiPrDrK8TC11yZUmYtd56uRSYPGkq7S41Eu7Z3mudPReSPuKxcNjxMqgcKqqUjVBYQBJwV2gF",
  "key3": "54cmZVbbv4zk8m8qR6xwUJ993sAjRHGsCE1pEUFo8c7jc6Ksh4CyL8Tvf8uLA3vCDj7gwdcyMQhePMugZ4owJ7gw",
  "key4": "2VKqaNYvDmdh7jtgZ2boPeTwxiVLsyv5N8JyCcNHamRJKR3zjxvv21kkW5vNHxNb3FAMwjxfShCroYXyHgH78uC1",
  "key5": "55zDw7kNe1tSdtXz2Eao8oJeQeSVHqKsM7VuBkM79L2pQKjWotvXpz22PvyABaDZkja8yaiJ1UjRysMBxdPUrJYu",
  "key6": "fcHGhVXpnEexJkyfvH1uNyG42RNvB8aDTB2fSUS5P1iKEJ6q7ycfqUhXDEDVFBzG2hm6QNm63tcEZKjNWXsGZ9z",
  "key7": "29rmLbdHmDVp6oskk3axVFZU7sNdbaZfrmxnvqasQdn4ceyTxd12mbEuBCSQqtfmytQBtAD79UcNYx6JXpz1QbQ8",
  "key8": "3LVAUZDtsZL37n1HhXSPuYubw5Qzi1DfEzn3Ke3KqeyHDrucrXsmMAjs2gjJFw4VtT8tsL4M25LEAgTbmw9CFiKN",
  "key9": "4Djsz1y3thba7Exp8px6skDA8xa6MnDc6qp4zfG35VkgNjzeNGwyHEUC3Yj1s1zFXXvzYmkybWVquYLTyvS2H27A",
  "key10": "58AcFGDMaJsuSke9s2Zk3Re6sgLzaPiHhLW8V8FpSbVbFQVRoecv8VPU1d4HY8zRaq6BDWn9zVSFJFhh8grHu8Xa",
  "key11": "3YvuaiTX3wbho9xp597b6Mz471BuTio73QwBhG7YMCUHY6CGPiHAiPPF8j6oTtBDMVC4YubPuDKX5n4ksWSCFxBX",
  "key12": "45cw3N6X7FBVxmsDzP9BGUyf2DGzQ9vGApBFSmUeBzNp45dtaQa3TCHnmKkutWKPEW5vcUv7967sHzbv9iTJXMd5",
  "key13": "3NiAyfjs6CaxrYYw3ReGXhuqm3K3jGaxe3V6ZAjXXUwmsBcc9BqS4vwbUAh3mH3Q21zgtXm17JHEH5neKARgWWKo",
  "key14": "3abx6CumiGkSwFUGCjNUsirxw2XPhYfDhhfqaU75JuigqWFvihC5d6FqmTcqugCS9hRFDBkhmCpGdBD5EKxNTk47",
  "key15": "3sVarnrhKwdT1JWcbStgU9yopqkQ8797zNcrZnCVnD9LFb1FxNrS96doUpmjocXESySzGonJFW8KJtgJ46SyBGYm",
  "key16": "QK9pDs4neW61P3kM3BQatT9YbqQwotJDN2KaABJd9mcWp8h7VkjBW1EMAiDujrBX9jy2BSrzMuG65E6ir2pZrfv",
  "key17": "2DJ7C2QNCXYGzcNYPzLA1g38vTZCJUreydTArSz2XQpfbUfpAc47sdpGHN1z3AH51eUSQdXpMZmy57xXDyTfbnYL",
  "key18": "4nC3oqi63u22Gqj6mN3mGFtGdAKj1P49LVuZmyR8msnhNb4vcMkwUnSxs4Zst7ZbMMqxya36YjgAqrcvYJD3KNvL",
  "key19": "127FPt5i3aRvMYXS2pj9eGDf5qLHna4c4Nq8EUfqD849zGeip3xW4g6KMQWuu6EuT33Sfej5bBJmbCMpPu4RLtMv",
  "key20": "3fuxcBCbvZvuPFaAbgz2KzLf4dCEMro4z3LJxdAvYy2vA4PLVG243HcYJ83JhKsTvVks9ECJvm92ovhGQj147i4n",
  "key21": "2dLQd5bvJfGv81c7YYRCoW5VdEJY53Bj3aMxHTXm61EsD7EXNyvV5Dc9GK3kkH2eL3thEEKKHBCLAVKbpgSJ8dcx",
  "key22": "3WqjF9uLUBF1VJZrL8VNkZEjYkBPuv2yA5CWmvmk2eHboUx94dZUExXdQ2BYxTbtqFXHG2fTBMjiH9iUEmTn3QmG",
  "key23": "2mKjtGjBkVxkvmyva3CKgCbU8umPiLat7nrycC5FtVi4LQ31tnoiaBDdzZudML7zcpBdTZEsTpoZ4iBp4NFDRaBP",
  "key24": "zcgzXigL9aNak6RtnDp2pmcMcaZ1YHjsKxRSrSZA7hCCemWfhwWXhwXtsLjR4phXhhR8CXzqALa5n9hBsnJezei",
  "key25": "129CZchZMxoYd2SuGv4fz3ZHCTBP8rhf9abYLYq8KbCK1UCfa5UCBoeJeJSehn28Tzj9SqZnCy9pPLK4Phv7b15n",
  "key26": "58vNdm9mjPjAtVHzoPv7a4gp4td4kDHRwkGNqbbyyA5LfV49D8qrefCGutnJFoturbJrbgLn8cdZEz3BKWBj3SVv",
  "key27": "4hyMo6qrMm9ADRCAU6Uek7c6QJX4Uc951488DxJWbAECuSuuxaG3gKmXXASurdd695nPafXCZMJx7VCg27APj4PX",
  "key28": "4qGFo58FATEY5LVK6fMBgdbBcZQqBurjuX6y3KSQZzX5GFWaRhdEZktggaoWrpg1U8o81vWrckkTTzabdZju6beD",
  "key29": "2ypF2PJmM6mTYAvdSgiZJRmNH6XwK7RHWtv5mwFh5AfAuaWcPiPBWvnocT1hG1Es2BPFPuAzQxsuF7kQRk9oBRVy",
  "key30": "851QVc882NMcMwwP8yuTBKg8zXQ7GVCUZTBUj9bE73gmS9eW9baqzj9eveKWZrvveNSoDr5tYdCozDNBtPmG4ED",
  "key31": "5bTpqcw4jVxzeAcqC9878joL1kL3dM4UNCnQEdGLz1YX3qzqZXtzjdSQj8CBvAriJhFtLCw2WLoUMVk3edqcwrU4",
  "key32": "5h6ta6TwsMPQcfvnoXRhX7Z1oAHBu9wvkAnqep1pUq52e93EcJ3r3U7UC4o3YYYcGbmK4sSyYv26Zde1NfNDqRcJ",
  "key33": "3qbhsdSDxogSrifaCdoTHcPmG61D4fLaeg5QZUAZHxTYjBZAWyon4VAnv9cUdpqUYrbHkXvYzJUp6wZyc8Xz9ba6",
  "key34": "3b8X93rY6hhgSixXx1wDNTuuSSU3v1zbsKjcxpCr3AydnRDzJSmKeRiKP9t94u5PQPX7m7kvYX6KXh7Mb6kmu6bP",
  "key35": "3q14kgJiXBrhqcSNRDNPgxVEGWhQ8PXL4khvbu2NVc3vhdQCVXPDdECqTEBU5eXrtpPbwNfj77uzp3fJdVvnpKA",
  "key36": "5zEBsiis4wbRGhH8Szjgwq83xpwa4aYxX3c92Hrenofb82VredQFcPT6k9UvYnyDaQ81HGDpNFBtRb8Sy4Q163ci",
  "key37": "4jEC35KZyJWWxKpCRiKc1dn72vYFWBPogRjcocbE8g9YFtDYTzY4Qua8he1RcTsqZozepiZ4jvaZVdJC6wVKGyFv",
  "key38": "3DgwajZF6zEmE8n7RHNC95wuP82qZCZPpvV7J5QsgahtokgQUoWgDqWEpydLbSpbH6vyqWFZkJ456zA5fMWGbbsi",
  "key39": "5D4owA9qdcv2Qek753yASHBkiY7s5nEnDG4kuDym7ESv9abLWeQg966y4jNPwhkvpgZupCqhYszjqB8Uc4cXgJbu",
  "key40": "2iFCDS9BeaiLks7z1JwGEXvPaGHZxBJa5Y9YzuYCxVjGDyNgWTFBLe6nbFPrfCKcJVtUCaSvAk9PfMw32YjSwdYT",
  "key41": "bEFFb9QiXN4NoXk14p4HtcpUEC3u9VgXesQLXg3Uk7cJ2dyH6psAapW3pJ5exh9gc4xnTtV6yF2fZEdvG3f5ix1",
  "key42": "4h2UDG7rxCdmyzvniYpam7Zd8wBib2iAYnqbZN78xuXEMtXRQtxfSw7n8dzhBGK7zDMojR3taZnpCECDw3XBsWnc",
  "key43": "3EDpNgSZYVFUtmr5L6TJZbXLA5uUawgMMwwT75oZh2VJqXDTE3kyzeKXDh5adPSTBQSYFJpHj12gtPAFoAx1MnmL",
  "key44": "4FHSw5CpfCemFWwkKED7PWjb8ffLtyA29AQzMbWxcMqDAqG3nDtFPcMxEXU2Yx8tk3TE3EhqCLok8Zg11VgyEa4N",
  "key45": "44U85Pih22xP5EhEHF5QQAEmHDNAaJfNzAnf4cJHjMj8MBhLpwBAQcUBbYg4MaKR2oAQvF5C3yqwWNbas18AeiUw",
  "key46": "1DdhrWasYHaJb5HfWLJAPWVer3tNPubUEhZdwhoeinKuoAgZ8LtAzThvQotWxFct3DeS7M57Z8MjqLwtN9AKZ1x"
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
