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
    "2iyiMJYu6KCKz1F3opsBjHLbJNG3ZuNko3uzW743H6RpPTn35HFfvwJizCjrZcpoGMz2hQo6jndxkc3ve6GUv6LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsVuTi8hU2ZrehhxXobZMkebyTMEnDT8uXra6XD7rxSWVi3a6VCroGGLdSfE1nmjwg8Bzt2w4EdMtcUKpQBVSXs",
  "key1": "52kHUoziaqTE9dc6751xM2TV6LRDwPiz3CSNW7q2xohLCAfHZzuFdCe3sEMwjKHHhp8f5cdheaT6R1uBWY4iGV4o",
  "key2": "UkxMZCyJYwKrkMRSYyssJipvZZsSPyXjaq3p5kvsyaUjiJR1aBJb1b19ZUu7w8wwq85ZhkJSavCZnG2uZ8hkZqw",
  "key3": "5g1YtVQNboG9tFUnw1usTBBek2QUDoRLZYPuKomgZuhCQ9rY1UaCdPFBNVKc4xxa9eiiEQQBKwdohwvbVk8tMy4R",
  "key4": "byBLh94zmf9Wj146DYGMGm4VedrYZQG5SfYb7jf3vWZusbHdfh6dGkxmcTVpup3gP3Mg9L5us1rC7qdF1NXjNsA",
  "key5": "5vMq4emwk33w4y35imR4SPfKBah5Qkvsi235Eu1eZZEt1x1eofypS51NjD8XAUcBS334cnbnWNga86Ywd6XdW3yg",
  "key6": "5sQRDT7UgSGnvsSTmwgGP4mFDTPT7eDzzyJc2sMXH2pH7Tght4Z8gsP3PetsGp64xeutcEwUa7m8LZHaNPNPvaXS",
  "key7": "KxQa2JR6ipbSwj33618bYpQZ1LCr6tEZojkwcWzux59Cc71fPJPLfKSSrGvvjpKcBWKXALX59J75FB37N89Laoy",
  "key8": "2NE8w1EPk3CtLrFy4oe3X6sKjQFV8e7Dm7RQsRNXdC2hnfKiKiB8wQHTzBxwt9gUkQNiQZ7x9YdMVYLsAdc8ascs",
  "key9": "4QswWVWC8hHzUoFTKkYekAjo3mTKGexeVVz1cs9f9fZf3Kanj7nKa1966oNbATjnTthWwpYuf3z2s7cT5BoRB1qQ",
  "key10": "o9iYLSKjv6N7vdF6bEmUdASBMcZLZJVejGrpKp1MBLEV32WJvtrYyvK2qm8mnBaVmMbUjHc4ta28a9Gkyy1giEx",
  "key11": "5vKWUcYJJDuFRf1ZZkU6SkiPqxgKTgobnokqTduvNAvwzYYrUmtt7XvCavDPmYgWXx5u9Q6P62rqE85eKvcxtQmd",
  "key12": "2uGBUU35b1pWdUGYVBFC6iR8tT39QKngkqyXywxERL6CPLh5yoh5tFehezfeWAPGJCNBdonQmoPHGT4F8dEnHVM3",
  "key13": "57kSbksJVNG7nzeBAFWSv3n5D8E1KKE4j1mxJYm5bf5PSq1rmXZ1TpgSTitw2fqArnfJo5aqe7owh9LBvW9v9LoA",
  "key14": "2rUSvE6WgDkYKpRUEeg9LSDEHYQv6ecdZ751ijjJnYnn3fGqo8wPX4oBJpgHM9R3yiYcw8VDgxaYEUu7FZarm2Vp",
  "key15": "56h1fPiobpvvLy9BEJKwzppquC1R4MmFHfwwVLZhaYyLsw5wWzowcJZMJP3WLnBEFjPBWVSggsVcpu8RVddY8jo4",
  "key16": "64uSCCBzEospfZN4N9HR9JLqRuGZ6r7PqFsjjqbdzLB86arcen3VaA43qCfo1HpgrBv8moFZWx4uUEDGsYd4akg6",
  "key17": "8WsukJnkp5NF6MqyyiHytEYAjS3qeo5SvZJJnVEJiBPxENzfhKskGP3JXwz4dA2Hp63kE4F8kjmUjVCQTQiLc6g",
  "key18": "39aucv2wvwsAS52BKmx4ysT4e4hBJbg9bS1auA7xYobFoVRfTDSoMxtdZgdAaJ4y3PKyRJ5odPTNVQ32VomFE92C",
  "key19": "BDVaMdoBio3HVV2sJhgF4NkbmwiEwfvcrMdNM4v7tB8EYKGRv1ZmfgaqLD9psdN4827u83yTCXmRJFUq4CNSn2z",
  "key20": "3mzFpHePZfDbyWuLcdQuuvetYihjSpzgXXUdEUw7YUNB1igCXebhqDmNqetrF3ZbYiFrxFps3bFPWi5vaiAKSQRM",
  "key21": "jR2Ws8VyX3tGU1kNY34fRW5PJVJkVke8bbKsgeS8KtFBdSnCU989hNk4HyA2mvJFa5Hp6kLFtaXnbBZvpdJ4CDi",
  "key22": "65bKJ5VUfPkvoXGNc2gmag7cnE8SvndgwSiqz9oK4Q6hUuwRkJ1gretMKWnH4yvrFButXZujeUFTfaencnv4JzeH",
  "key23": "3ZhwTzQyNHp8AhLTjYtiLcaBuYTUFcpZDPcTgWWQwAkxdLxEh3SHAEYejkLQKN2mL1pDig1KAMF8ecwbPFo1oSTc",
  "key24": "3fYNEC6xCGwHoLTeW6mBysAXqT24uxUHy15JAb9CqnsXQUAbgESNqd1cnMAKaE2Yo8nZFynaYhudzw9FWcbp7HqN",
  "key25": "4MRDEFwcqJUQRhfb7Mi3kFNcX9452z4WWT6Kb7CvMe7v6JfYbL5iponbh8FRs49MRPABAxMgcbFRE247ur1f81V8",
  "key26": "5d1gpCYPMUbbfnbFv2ELM32M1nG7yUW8fYsDBcsuaDXzrWRTEkWwY35ZPM7ZNVQeGxvycjUYGAaNpqxhwQgoe9Dr",
  "key27": "3JFJ2hBWRsFDCie2ZQzGybRQBEUc6Lv79VT8kRcG74Bg9aLVd77WBz8ty8fUwLfsVM6wUJQ53CwjfNoSpPGfu2EW",
  "key28": "4KnzhNDGNuBknrYThzjCyNDWn1v97cWMpSuLsowK9eERfnWtcrg3cmwkUvWoDvGJ1B8RKZu7DkZFQE2jTTWHTng",
  "key29": "2okq871FJwTxpKQwmTvsr6NGmhGtQSgFzH8ZBWJ2wShQbRb79ZBVWVEscrRmx3h1GGpyoXZo5oj1xa8VHyHaPyDu",
  "key30": "4HcrPLCaDa3q24PT7sV462zEKbaJWpNc84U5vZDyDG3gEA5wQVb2fA1opAmTayYkaQekkNy3nqP85GcQfiNfsrmi",
  "key31": "mqcynuntxWuzs88NtWE9cnszKJc5SNP6atSiHQ2EnxjLAWHKHP2xvAs1LuUrj7v61NBViVrvL18J9N8c1WF4WyJ",
  "key32": "3FrvzegjrjBicgyJ8MZAFzRpRfSU4Ct96EY9X5jXCidYKrBsGrMDVduFXyRjudybApMbgTa9De8c1QfRcrhVXrb8",
  "key33": "3mzoiVL64an9TmzsvfV8pcpKFtqnzM9Lki26qGSYpzB9oQjk6vmAviPEZbPnPAegvisQaoPNd1EpVce4oyb8hK4v",
  "key34": "gwpPADqMBzjGLsYU4bccAbguuqM4CPVZW5gdGVLBbFziZZnmAqnatHSVfmXNo9suegxbSyGUsGUKm5RWHfWgGVX",
  "key35": "3jmG6YZUJ4rEbw39FPeX8yeEj7ZwxbCQfFo4TYTMMyS3vNYrc7xTyqh8xbVHnkk5TrVpszcpQ1YnRfvyUUSMbcCk",
  "key36": "5Qn9a5gWBYAQVqe2D1FRRsGPddo6bPiuwUrMWB2mF2idseNtptg6M62UMCUg24yz657RbK3XyxbXxDjfxUfHDEg2",
  "key37": "2LmWVtHay9KddfKwhZVQmBNAxCk93J9ii1Msjp4BGEvjQE6s9s8ZK2KT64Jr7P65eoF62sB8Yt4ZUT56EtgNaXjY",
  "key38": "5VajqXHpjQZmMZKNU5nLcrCFjEzvZX3pBim3Thcpr2WrWALoxNj5W29q4q1edKpjAYRSs3nTgMXqUBWkAAJsuPC",
  "key39": "BgfCwNfkTfnGLcWtvrdNjc3MxhbBfjVWCKpcY22XgphX6YXbcCzvzA7a3KizVJuvRpuNSgPQ17QoZUai5ZRK4ax",
  "key40": "55JkcXfiofgvahj8DLKFf2xaPeoEm3meue444gibMzgLuJwDcLTr85AJW1jDX97GoRGYFaP2Tgs61z7xs5dksfjR",
  "key41": "4Fy3mNjE2VVrBaWZiN18PfGcEdBfNtgn7xhc9LcdaahTMULsqfFYCiUxGVD1fau26ncyxZqS3hE4ckzRy2eFFcBF",
  "key42": "4phs7TYoFPgm96oJjJGAXaiR6sPfqg3yXi3bktMNAKxQQ1oH4fC6FhFXjoKiWTTWedpP6FhM8kXusPc43ntgj6ab",
  "key43": "3ogLJwGwX92muj8BsprtytuKKptzZCGUAiNX3cybY7CHHPMCy8GZxcKzNqvjQZA826LfAMHB93f6fZjDtDH5jAA2",
  "key44": "3FRNuySjknyFgAA777CyzDTi2XMmHm8skjuxoY1VihvV5e6sFhNEWNqvk1cRqKPDQD2uKJ2Nqoim7xuvFzCfWpaR",
  "key45": "67XgebmWsG1QXNmz9TpZEPNg9FwXzGv6dM1wQJtYxmtwm2dixLi5Cymq7eAKEzYng9WvarKJZEJiVwYhUowQNbNP",
  "key46": "2npY1hv2nSBSozpcdGpkVaTRqzeSytVpSAmuBvT7UY4kws9iXQhd1DSmw4dh1FTDzzVJuQEirwAsHN8naqwUkCyz",
  "key47": "5VLyE9XJkpn8rLRrzZQ6N8VPP4zfvofbLCQVdyZuSi2ojytS2KPRqGPsLd94gJxFVRKXfBZPm6viBLW6kYXVgveC"
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
