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
    "2TYMQ53EV1tHM3MdD4SBpnSZLCLsEk3ZUksTkRW4auarc5UttCFbhCYbN6EJkVS3Ks4YjaYSBJ4s6HDrm6JMoA9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SFVJA35f8xRNhk8ZzL3BDeiPgPknF7yXVwERNkyLDC2p1qNBBhagqDnrUaWr3JQ7B3yYM5NSYaKby6y1LTumvY",
  "key1": "4baEgAKgUtkGkC57jP6o5z86mcaLXjFS1wA8F5bDPQt5a4VYx6yvapE68gbL6jxoeFceoU49PG1xw1W3YUCNX8KJ",
  "key2": "gYNkdm9Azr9PbxnvQfzF2DwxfNvh7T6UWZo2sfVZdhpj2BDjhNU6hEA4m2koLvvtVNYJ4HXwQue8wfFhSNdctxy",
  "key3": "4tkS72L3HVkGVs14rF5uTTDZ9h1bA25LtLVDu29guii17k6hqzxuaD1LjxBJBVRGL1saAtRVLYcpfAGyG35rrtLz",
  "key4": "5UX6nGX4UFvM5WjwVRaxuHeEYjvFrAYs7kEUs7TWaH9Tu8TNebihfQyQFsXpvBBFkMjph5uSL2rNYR67j5cor9wa",
  "key5": "5zEUkZjYFPUFEbWnkw7UuoK3GTEC4BwzCutTQwfehnJaLYbHnHq8G2M9whSeRGxN7noNieY2i6sSatN4CPT1dSge",
  "key6": "59EMtBQVRT84VScnTG9hDutoPcAsiyguYh31SUemkdGt3ZfAkeS1ChQ1UEwDXu5ifwZ3rVw4yJthmXQ14U47Fz4C",
  "key7": "dBGNZ76fi5QxdbsnWGCJqyS8mbuLzNZrk2B9hbMmdNZ2hZjuLfGKPyfwWswVyNCbavM3NZVuzHQFh4jYeLKiXHw",
  "key8": "2Tfg6mvAq448zJjNXXFQG5Yr8F7hQzLPCZMq3U5TWigbfDfMbyoQTpeVuPkwnvGfpyZ112YVdSuquvJBXuCYFVuC",
  "key9": "LeeLHwSgSKqK9BK6NjFvBd7PTmFQ9kAdw3oFezHG7rPX6saVewGmmD5zSa2FWNr2rLWKM9e8ozun8sr892SzbFY",
  "key10": "5bg8FfmScgbM44CbS8Q1rgaA2HQuM1NZV2rV5xwbJbQxS8t2GK59A8RohCGm4M31RWcQCMCorfACaZGGNrwk4196",
  "key11": "U86Q6BB6kPTpBsHmE4C7mfGGasSYwiYbK6k7hUxqdqQf9mfhT3r7c2kTjHD7c7NH3KL824NcU4njqvxGenK6Tzd",
  "key12": "32fL9vE8nXC7N7xCxeEYc7h5HZJNSfGyAQpwiazvcczXLoUzNMwu2bxcy6s7QUDHHdw7CmMsMjPQPms4sxK5D9oK",
  "key13": "31Tm4j1fYE82pTRcDiy6XX7hzuzepqWhk3d2SfPrrMczGxY98DPvp26eoM6X4mpghM27BiRThy7JLQwSbNXZuq5s",
  "key14": "38gSrMQVndJjdn9oPsbd6cDPUNujSyksUbRYN6BXDwf9zLjN4Y9UjFL3SSDAh4t5pS59rQNRSZ5Rq5wPNPSBzjCC",
  "key15": "4iySqMQjsPmyENWaqYq5Pyeb8LPu7j8DorWPZb9ZEyrBPw7ATsp4SXqRLmszLtfqCLNjePubBgTbxW7M6vpSPJ9g",
  "key16": "5sGv9uQvkBG29Lh6CqgTbne884WXnFZi2G25iUsRkbyd2SdYXSeVhfVaY6YkLr3dnTLJusjK1MC8Sp4qmyEqZaTr",
  "key17": "4YW1bpG4RjiKWySWKEJpo3ueguYV8ad6vuZ8iMV939rVRxNSNAtx2Rmpw5ArZ7gXpgKUYEsy29dkPW8gnrNzX3aK",
  "key18": "4cYPstpLvUy36rp8dEY7PY7HYUfQDqWrD59X3B1AR92ZxZzLUUB72q9tyPvfzUdWRiwePd52eZDQomP2bPesS2EZ",
  "key19": "3cbRE99JZvT4Utfmd3v3wE1SV92da8cNSwdS5jdFuc57MtrMWRu2dVAmU6TfToqm6eV8uyaytCnY2RbE79vLEZ1R",
  "key20": "5MtGqisvSU8Gr21zCocMFQe27Pz534S4GkuLCCAjASq27hUy9kpHYyB8S5Mvdz3PKKv8ZCgdFuvLkR4pTRvBFJLN",
  "key21": "4Kzcke84VCcNqaBhquiu9WaNVdauTMyhSbB7EWBpAPCGmZqT3qM2C4faytwpKrYSDCLzNtiK9vs5RoHGGAiWo3g1",
  "key22": "3KWhmgjSwSULErmi4qKroSoS3Tj7nKfzHRkK3U2L8KXXkSdzPWa3nRwsjU9KGw84PAVAb6eghjbFpUSoPycVYroi",
  "key23": "4ePi6LF1tAtkFZsDnP3NMJ8PY4pidaThLh7Jsw458oAER2CUcC9Q94ry4cL8SSjezE5U42w8Xh8FZAUreG3uFbLo",
  "key24": "5zpB17ZTejsoX4ZiknSkgMkGu9nYDs48ozA1HgdbnncAk8Mb16fL2dfcwuSqJrFAcpMyX5nL1LRUQSMhzvHVuy4G",
  "key25": "3VjLrZ619PiND48rJZHZXxPzRNY2JSsMf5419xoLpXrxCvcVxHBG2HQJ9H6ipTeheVrFsbiYsf6E3S7cYQjXZmXD",
  "key26": "2GW7bvHc5i3BAiAjuQtbPhYJyBpLD8ExYdLGCtFpkhxd8MvTG29nmwpuXCmeCP6YRnyd9Vz7Jrk6XHVJY89aTgw1",
  "key27": "5857ZUsvW5JuukB6wQVkedXf95bkrT8zGU11id39xaQsvuCVn5CPQzyPVF5xu3wWZm9mkFg2ANAhYZZoKpYX7LL3",
  "key28": "gtumCFbeQ2tUnHV6JQ7i3y33eAZANNz7AshNwhE1qyXq6JRKD6SNbG6sPrkbi7sd6CiF3uyg9SvVDAnvGHRjLYE",
  "key29": "2Hv9av5czAgXpiteBERH9tv5EyWovaFZSaz64hAR8AVNPovMFS8s9GdgiRNXnMSfJMe8H585rb61p64RwrwcqyYe",
  "key30": "2c3hwgsZrNDtbmdWnw83Z5F5fBKsFbMVu2qgji4gQhKjfvRZWWr3gQvN6wdmAr75iojA2hTLuPyyrNxYGt8ymNpP",
  "key31": "25Sh9qnK1DZzsAJkkt9eGwzoNdYTrqaboED3mwVbqi8BmPx6oDSyk85kKnkmiBryEpJCgfijupLF1UHttdZzsRV5",
  "key32": "4EKPtNzscnjEdGrKnidSYs45UcsSYaMcZ8CGnEC2QNnJ97aHp8BsauMT2iQ5KQD2y9qWk4R2pSwGrXowRXZMZscD",
  "key33": "FEZNiYkFgTMWMmHAtrAxZeUpvnNnG6czECV8ysgaD6fnNiZmKwKsH1MJ26yXQvELCRUe7xN6c1j7BfL3s9nkEbp",
  "key34": "3JVsfrnuapHFhNF1nr3HSbuRsfoFoUrmVkFPy915kPeR2vop8Cs6DA6s7ej8fdwxxu2ieGMcgH7e4rLJ9Mfg8MNt",
  "key35": "PCUVtc28DdWD4b7Bjjtt3X5ZjL66Ci4Q9Uj88sDUjdZiqtpYL8ST1QzVY3uN9Fkm3yNCFHHQ5YwUhXN9EUkHNRB",
  "key36": "2Q5qTjdQes7vHBVqfAzHJx3pZs9Re3oVA4TGND3DsZWL9U3fJn6xJUKqACrTgoht28o8VmD5zKDaSz4dYhSrtndd",
  "key37": "2RFHPupyAQe92aJoNMrenNrXSJrGJQKA5PkhEz1FhihV6JkmDk4L16XnoXLBs5Qsh3Lg2ENn6eSjD3ZqCM848tHW",
  "key38": "64nR5bkPmk4MDS77iztCSWkwFyLB3f5AJxkqMgCzyhZJm7iMvkWqutQNJELQqNTyvxsaC7JKhYTVNyGrzvRWrqUt",
  "key39": "5EacgdvADmdfy2HX26XumLRVWozjF6NQdq4HSmeLkmWVMmg1MMC22Nzypq4E2aK3azdaSKbgGiN44uFo9iGWsdQN",
  "key40": "VJXUUVKczXYvEXzHvvFsY5kRBU84oHjg9yvVKqNJcVocH5xyQK39VkdZVCvvzo961QzXYcFHk6fDNV2iUUS7dnK",
  "key41": "3E2uXAHDuR3eH4rDN1pqk2wBsmxpP3xbnjZ2P9dZBo9bDC3QnPKsS6EiY9FQuToVm9sPG6y6hCdW5NxNQwkQJQJf",
  "key42": "5jX7ErUNLP5JayGA7GdNyRJkiWapeYXBfVSA5CGbTTJXm1XBJPLKRj7oGkfvZ4G97FTvBXUP5YsBnQQwK1vvNJxa",
  "key43": "3sUae7iCM7EqKg8RnZMsz5XjfSH8f2qerLCXtB4aKmHMgAbZ2Cz5W9xu9brDLAkCHDZy3oEupjewoQxqQjE4CBug",
  "key44": "Q5CFqZVSD6YBNadUUXGGQZ7dVh6Bc9d4WEJzwv74NtHimB5jdDQ6NKbqDrfgo1qSTcJapFUxVfaoVy7QsVwJwAc",
  "key45": "4qUzi8sMviRZCrBTj9sB8JUzWHTL24eMPpJ6HNukgArqe5VSwJ6AUwM8k5wJRR1SsgThpjAZdkWPm2vKtHGsvf8U",
  "key46": "3KNg1qzaS27ETbhJRidWRMjf6MkwraAgrFFmGNF8xsL31N7E5sTSF7cV2QqqhjMf85dhWXaoBUcvaazGJdzxLixS"
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
