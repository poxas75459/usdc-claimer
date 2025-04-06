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
    "26uQKHXdmyCBH4PVFrH3nBYEj7fgMtYQHjsTTUHEnLJEqd8uqBW5sL1gZTuNp4DUZitMyAee6jSd2WC2HpWwSZBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hudeMvpvs6Ajw9kdW7RrgiCSjNiY9bwpvaFCVuzaNnuBqZuyvQY7fsyH2WR11dAWBSDP4AmEfsovCkGvHDRpJGv",
  "key1": "4MbQdRNepSVX81yi51Vk8DBVQgSRPkz8QxNZHTj5y2TpSL8cL6yqD1cAApCf2BVV4F1caqidMZoarUZETdGg52C7",
  "key2": "4mFbAWbU6numQXCQxewxs6tdMpXdPgmHTqcWLCx13e7pPk2r2YsV3PJN2jYD7uCk5GJQ9hPXh8bhhkpqXKRR9pZ4",
  "key3": "5TegHF2g8jr11WThkQTwTG8PYjrHDA13WRKtyPr2fBkJZP4MfK9eFJY96PL8PijXbFuYFzcCzcafjZ39p9TMao46",
  "key4": "kcbmioPjzbtzzLZnvKeKwKRpT8nhhZCdfurgFdE6Gkkw1TZSkK5QUkw4oWJuHX68BBTSe6uid3ASYvHLDpRNc6h",
  "key5": "46q6o5TbM44yjubB8WomEGCGtQUNnR6ZsAY2WD3xpearjBa74iUQeBf8JznpeqLQBeHp7V7tp67QGXTJeJw6T8cV",
  "key6": "5grc7ZydqtjF3jErnTKmtjQoRzniU9uLp5U3Udzzy4VtHMNdo7hWYwX1H5sqALYFWdKjEhNLb5rzAJEyGPNzgTko",
  "key7": "2t6ZpPqGYh6fjQHPY1b9ow311iK6LUoV3Q9Q4UKTMQUeuDj8z8hQycwpVzfxQLZEsnLs52acxZHaCUu1Ghm26xrS",
  "key8": "jjerJ1SW3Mhrhfrjph45sWhwDWYxb5RuXZ8PcujzKd7oVQjg6ZLGCEZshdsqvxnCjUpGztCHiJsXG2fg4r4zFkg",
  "key9": "5ofH3cWM3Yu4BUZtvnzrH3uuuVrEDRUChDJqKNXkReNjm2M9knqHPfxGCBGGFfgJbMHdNrxHT7JxUh9AuFh8C7h9",
  "key10": "2FB4u86h6gN3UiFfHBC18ywavQHeL9F8CHwyVSj19w87xZv8xyYhxtpASzZsPcUVideV1qC4suHdCBSEf8WnZG5m",
  "key11": "5YqB8EJ7reffdGfYMUjP9oq9savGLHAbDa8Yy3P338g2R5N74jjFWUSKEZA6nxgXidcuriiJugrz6HuXAmfMDJv9",
  "key12": "2nBVjri4veC4KfvyecksdghbaZUDRPj1TaJ4oLj4AZ7t8pYP8q5fgEFXqCwMc1rRU5LA2tLW67hsPFAj2AYMKyn7",
  "key13": "2o4hWm29yiGujKjACkuU63ADfkN6Ss6B9WfERi4UhYvC6TwpMPhTcpynrWXS11ReJYDzrLt6YePBoBrfJEPnV81h",
  "key14": "1kDzWsC6CLUNxySY3AubJ4JAAWSjdkGJQ4yjugWydMwF8uRyiRvANnxp6UXEfkp623QYYM5fLJdK2wWdPPaoimu",
  "key15": "3NmrLR6ye9JU2N6tbmAKy8fMB7BN47rpXFbyoWBhqSDbLwaQNsWc4HRbYcenRgZRm5Uikdb1UUbRZiFgMKPKDgBj",
  "key16": "65yn6aWTyJGezfdjHLYtJe13CxNmBJjWz9mV33TsFnxkbApAb5gx4uWnk9pL6vMALjMHWqmmwmZ73WLvnd6FHS7x",
  "key17": "3go1XmGtkncvQLwZBbjbAfzLujjFTzXeHfmQ1VTA3e9vLttXds7VLwpbdRa8FMv1siPBbZV318CUDCDtBcjoskCo",
  "key18": "4AZ8g224VbY9wxR89EFguLGmmiknz5p3WuwDfQ5uqSnceU4N3o2bz4nh63SwKTngcXmBPwB7j358X1BncP9u8gEZ",
  "key19": "3JNMnR7A19L2bVKLELSaBkhapKM7J2ifnt6LGdbqGAj1i8dckgqgsvxRadgYUNKA5LKpcyK8dd8XgT3ZNSorJgyN",
  "key20": "2PGgAjv98zs6Gvnkmn3n3xupSY7cYZM3xeCp9MQf35wbUmEwHgu7pyNXvxm8enr3YepxfKraZXSQ4eG7DCe4oz38",
  "key21": "2S3zxi1Rdgziwvy4seqjuhxTYsuEFbePD2qvojwT8uWVzjGBLVLs6PrSGiRFdrqVKD7orEHyXs6guF84TLgXQAxp",
  "key22": "5LDJb5Yuww9q1raDGbEDbTGk24g16KfJ8rALAmyYvwhPiVPsZkaRjjNyG3RPDtaZdM6TnDeJTziZuchc1RGfbxe7",
  "key23": "2KdZ7v5jLWPYz5vyNiJ3PLVoDZGcdd4XL2xHVKw1n6gyHm2W6T3r1U9kczUz7QZsR9hJ9KqVLJfXPq5VCEyodKX2",
  "key24": "5rpC9SBnNKQGVzyLG6je1TqW3PMmBCkJuJHAwotpKVommGYgyKpP19dy5kzjG7rbVTwh5j2AayLpdr1yrt6skf6Q",
  "key25": "4uXrLrJrgQaPtRFfY4pKZN5sv62dKbxgs4hjhooBGFfx8jE8Cry8NgAAN14zhujmzNzNF63ThFBRG7K9UpqUeiGW",
  "key26": "5YxUEMxz63f58FWcr8eij5GWQnDZX1PfwgPz7L8A2YxiSbAiafySUddFnut7bBKMvW1AENgvtCf3EwRSEyKc3WD2",
  "key27": "5F65Nye4PkSuLvYyn2u6r66yBiNHLu9dzCnmLYA3GWjHYqkKxL2DEwv6ggsAoXPKTCCYse8p9hjupFdL8qFg178A",
  "key28": "4FPJFrxEX3CoZ9gE2T492qa3vgjseuzMREHoxHH9k6jQBJzg1DTo1ak5LhpXZwe2hbf3ZZQrk8ecdwayeeABoNyX",
  "key29": "4LbevCYWHaas2bigwo6ZJufKB1Wq7QGmvEkw1fqMW3AcjkfFZnRYnTL4YD5JjcuUbUuXWjPQdXLuqxLEomPMnw28",
  "key30": "JE8swNgzMbRKnosetMpYTdyMjEdzTLfbnTjY2Jd4UPjDRv4rNbGqy8cQSf4d1gTRgo1dBtB5o8mzkkVt8pAwFK3",
  "key31": "kusaw6TqhxpdC45DtvZGTWNh5Rd9SsTJtHRoA5LqZ47JG1gnrXXyb2LvNTAEg7G6986JWxHZ9eCHYiRq6VDzkbq",
  "key32": "3ZqHJAiCAGKoSToxVfgjUCbhvvqGWZfjXQymbE8uiufHMyW3mEHF4M35ZoyH7Ab7CdG8uzTggkqoe2KgYK1fEztp",
  "key33": "2JBYZWc5aUkPRD2CQrPwjjqsnBYzxLtVBPzs2diVRPrB8Law2VwLqSBxUiotVc8nHm6c85j276cApVgrMjz9RjEK",
  "key34": "7eR6p8TBL4E6pRYb5egA7DR5UsMndzXk564St2FnWpbui98mcrUiMnPZvqtzDDQgJ8TCnootbu7gsGVXKuMPerJ",
  "key35": "3ovyrWCAhLLAHWnQmwPQdcZaJktwURigSZorcKZ9B1WYijC6w8xbUvavz2ZiHCv4HW59LS5ehPyPYJ9FzLURFzBR",
  "key36": "2haQN3Qg74QVy5SoLjy8EMcNU8ki7te4suqTFiDbaBo433bfACmy8YjfY81r9ErZadfXtfsjYE8Sb7yXzfXNHoNR",
  "key37": "2GDpzQEEy8BCb9PvMuEr1U5h85TxnSr7sRjgn6Knnp8ESXhZkZXtEBCFouoKFZ8yVnmkxKNwZs6rQesK6u1CjYz7",
  "key38": "gEfmL1y1ZYfaDXYW4hQqwsUKm5NnchadVc9xRwZY4wkAurJVaW2QDC3k3UE8C8v3foFNRMbMDTzYgEvsaTmZu33",
  "key39": "26JibyHXe29mhZhC4nx6cULHZgows6MkU7x57gAgRnKEu3HukpcyUarBSFUC3so3jpXh6raYfd4gtnvLhXWsNXkR",
  "key40": "YUK4hciQMqheK44m36ANUv57mKLheTQwdzVCiqhFS6HV5ymusuJxiTkFVRNFwLcEYq6mEQgNudS7ijCpPdk6HAZ",
  "key41": "5tVygHwxhTQZy3KV3FHET7MFxm8iPjocZYnZ1RKs85KNttALPisgFpcMt8hjtW3pttYycVuonJ48aPPB51WuhyJ",
  "key42": "2Lz4PqgqW31pJBhZMcpHj9JTgQ4V4SrUTC4fAHfShEzty194sxE8QVSUcjufPvwry9EzXVw2ZjG5PQ1ek6zGJMnS",
  "key43": "5xi7vsbpmPcpQB2Y55t9t5EHrSnnai72D5zYT6QLjzmbhnnj2hCd43rGUnNZtNE4dgdKa3r8LevrbEiM9isBc4wn",
  "key44": "4NtNCQyfWwdNfXzmkqmGR3pk7VLNHMDJbL42zimrsJFZpittBy3HCUXPV84iuMwBa6AbX7aotkbURrfdL58ZoyjB",
  "key45": "4aD6fjUCaXYKhgqJwaAVhmt5AaDccMktbUW1FjtG8ZhYhTq7EkgSMio7NyBF3dYVwCnszb2ca5ereDCgduVch87w",
  "key46": "DXJ1JvCrEhw5NT2Jyc42q49aWrRnJco92WEkqMyJh6deghgM5GFDebMiGUER8GruuGbWzfaKEx2rjPL1eoHMtPZ",
  "key47": "5R9vwUQjLZKgaKoXCDoEkqizbmg7M4wznVRbQ8XvTAcDpGK7T2SmL2TJEHqw4Pf44buQwJbqiHdWFoo1QyssHNJN"
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
