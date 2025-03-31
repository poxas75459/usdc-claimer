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
    "2ZKBR1j1vAXRG3hFqFbneppQ2V1kxrdtK6C2B1hQqvYSTTuGJgNhptEYN8wxGb64zBtCLS4uKywEHjeo4EqNHgCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UVZ3QA8y5FTjo1J2j9KWWdpar6VGzx9orfhLsL57FhudTV3Xus7a1JRZ5VxzypevBDxvkv5B512hGKP62W8RSF",
  "key1": "8uXuL2or9ydBCXz3uFX3ZBDhrP4KY8EHPNF7LzxkH5RwtVhmK5uUD1TMWHxXbvnJHpWVbpxZFQTraQGg4C4CQN6",
  "key2": "4ULgQDRjCscJGLyskY3zagf7GV2gdeVTXhGkfY3HZLUfBiMd3w9uXcnNmkjbQSeKgfya5n9H1P4XRWZeASFd26ST",
  "key3": "2pPvg6cSkHyczL9KrNYPr1ozHWjqMsQmcsoc3rv6ufqsLW1Ph8kr6FTDF775gFZVrkTG4wZa3vi4F8Z4UyqFdCJA",
  "key4": "3uHKz1M6Yker4vh5wioDBBJw7QCM2u75VfHmp29wTV6y2AJXt4PuvxVWW6StprV6uSSbDrvdkbrVuUdLYRrnzuEE",
  "key5": "4Piqvt9aQ1mGdt7G3xcYkMeJZWA1bsJU33hYYEuQqzMceadZ3a4QFSxm4ynveA4s1Xzs1jp6e8FKHCBswrnzpzxX",
  "key6": "zcWD5RCzAktvuAQDV719GHTF1mCtXR5xyFYxk1KiPQSWXDxDFV5MVsXHqjppUQqyjN9aZLenMZ9TU6NHpcbLkSU",
  "key7": "4dM4SyHB3yHH8jPY7zUPKNaEVdwt4cxZEJwcGoHuuTxbhBx4ucHkzYSRhg8rxNMXvRBirPyvhSBZHHkSJ3HZS4K8",
  "key8": "PxtSgqpyHin6m5BCcMnXywZWM4pdKQpKveNEYk5CbzBCy4BDti4GkTzzT1GEanLk3WiNTKqq85bH725wdS86sFr",
  "key9": "4G3dduD1Y5pCBAPabj7gRHe9SUvt6fpq2NnbSFkvpa4dU4GFkATSGexHYyLRkFGGdwwTkge5ETDKqp7Wa7UzmLBL",
  "key10": "356cPyaZa1SjSSCX1vvBWmAkvyW9ze5x9UXFHiHBQ4uca4dcbeqdkfhA5d7RWEc8q2DHCBevDfzRYaF9yhoiCEVU",
  "key11": "3CNhRugY3MvTwm8ZggStfVwKpkTJBmrsmhowTeWMM6VuMvFNXYtsViC9E936aBGHBJm4hEoKkvAy5zHqTxZMjxKm",
  "key12": "4v9v9HcnWoV9E3DsQuLire9eDP3F6NTpZhBHoaxdtnusmiKTEHDbKJ1Bt4erxCG4ZVK5brKVUSgJBC1KQbkDRVuK",
  "key13": "123Nxj4C1mneyUsY6FZEhPGFKnZJweuX6XdsP4DgqiGTeDATWgWtnAvpBnnMdn74nrenjKRwQKzu1S4nUKDZRo8",
  "key14": "2oufNic3LvWxPBgV5rrj6YpdEn1xv33DnGsKJmLEGwWCumg8RE7qidyDdHBpXBTNRU2Ncas3R8puHEF9Nm84Eaiw",
  "key15": "3GoNiG2g9XGyE6tbZFzW9KbQiFD3EX9ggAFk8gJcbyzWAk6BeCPczrtFsyPws4aJpmXgJ9PRv9yhXT5ZeN2DwhBH",
  "key16": "nM19BwXx4TczHEXxuksoNhg5P8BdeYC271LeUSr2PYvsTFH8eT711Q1B4SdooY2dXgQyo2er6mTGDhkAQkJc53g",
  "key17": "3zqTdYuZMP8YEL1EpuPRr6pQyD8NLrF5BmsmiW3Rx6mkwd8GHZyoMiF8r9T6FPmHfWfZx3t79LhV3MPPwLfQ5xzE",
  "key18": "2FKWUx1oHa9crkg9KWjbVyb8RuTiq5eMkTDNwFHmpXrZAyK3dKYxeWCUj9Rtn5AeUDZHfAgUjg2PiXh6AarfdncK",
  "key19": "4TGyyL8c33pzbAcZdQ58DLfutViQDhvRx8r3DoT6kAXBWDSECmL2hrm4NZG7hkouN7KCa5CNsLHEXyZhPJ2Pu4Z9",
  "key20": "49sSwLCx8YqJCnHQvrWQe1pGP7Hb28aiEXUoAsqbEjXL3v4WKSW2nTw1fpuDupKsen3CMMqMFtA6kMNxnTcXdjUm",
  "key21": "2JW6CR1oMrNbHjzpuUZWSdBfoWAYwxx7TkohhJ8C8HPZiQAnGLLjkxZB3LirYc1ER97FvsGUjjmN4sFY56hv5nZh",
  "key22": "37UiKAA4svv6Byca2ZxrtBkRgP6QrbMsCmSNXP6ZdiJkHPYgq5JV42sH5Zjqx7ZuMjWGc6swx3jqFCV8e3NwZq4z",
  "key23": "327rXC77P6Ejxf4CK3Cxsf6nEdxTwEJ4H3fvJLDYqPTks6TFEiiCNxwWdUkFq5ruPjyZZsGPzjqfT44PQkg5gnHc",
  "key24": "TtEkEabsV66opPdnHWK67AADcAqWAurgPuAW68WbfDPW1yiUhyCg8RBF8YURUtfbHnNPQ9sij9sd9TWgbKRZYNE",
  "key25": "4Q5tscfxiPqpdX2L3teh3q2akzPSTpGoe2wwARcTmV6xiLxJXYobQWG1xNVuUnpiGEVmQg8AN2zH588HesLjETqK",
  "key26": "44JWN7XRbb6HwDDjVdZ6D3E7o4Vzi38tcB6LYjQbqqu6hzgpf6MKWchtX25LPtkEJ3G6ymKf31BTGfmZZKubYE7M",
  "key27": "3PYer9dWqL3LbFHPi3GH7wRzJgZjdxrNF4R8Ly1BiZ2hhMUESL6a2ns5UcMX21fh8zqoLVMw9mKEfqZao9X9hxcE",
  "key28": "4nvNwPU569kKVKphxJ26pbHK2y4eTLPvqJYiTFtwzC59vSYyFUBaycxGr83wEVu8DL5oh4uwSxkGJohe18zjTFt2",
  "key29": "48gm4dJDvGT1W8VxPSgBi4dW3ahDWnigAUigTCA2c198NHxVz18BkMgx7mvNwwgZYLxKuKiizKCkXrQ1RsJqcvz5",
  "key30": "5km6RroRpYZBqD87uGCovNNuyQHAncZQGyqymRPcf37b89LMUoLsEg9sA9UZgzhg8uhbwwfk2GDrjPTvs7RFBWnA",
  "key31": "2eM7zEuCaduBjB3wEg7DgU58ETwp4juPvGxGtGXNaRmiVCvqDbLk3bAbKxAqS2t7MjdEauJpsm3njBEyeovR7axw",
  "key32": "2QpGPvftvuEq2ETu1qKXDuwKvZsH4EQfgYZ6mvmG4M1Zzobug9jn9vCv2ke9wEBHusGXNmTJ9kv5vFgtqG2Wfee2",
  "key33": "GFL8MdZ6D4fyQbMacMhfBaByZUhfvBf9T4aTdk146cwsbKFLCgF7h7DLMjRS563DpgU1PVt6Q6FmhWxaLgXMxv8",
  "key34": "3t9osSZnJuQMt2FCyshjxGn6sb1zqfKdffUA84N7dPN8iw8MMTwYbFybHfds3Fngroje8WwG1rLr4h9E8gkC3JGK",
  "key35": "5GRSjdBNoUQkwT9A1sVkvWAdvLnh4oFVGhypzGLYwAbCSKgWbmuyj5kVzcb878MZsy4MamcKDVfAtfZfwZGSn22p",
  "key36": "7aXraEfVaWXmQm7zF3Qzv5qC47MxxmJdRoCC4JPEFJbqhiHiG7JbfRTGAthY4tdveBtv4T9qpXvoFjqtKmscstp",
  "key37": "kU4KfRjNrMwDCT59M2WGGoznFJsjXMorMVD6Dhegu17GbNcVPLHSitk4f2GgrNTmysRFykfJEDKqxYUgFEgXwny",
  "key38": "2YXDWDNhEKir458uJw89FmYmapjDZQNvacpdEKd2t6HoNpasgaBb57SMPm7LxjrDhuV2F2AmgN7NtsV7mwB2GPYg",
  "key39": "ENcKBBJWeqbxdt9jKLTLDYygitA55JbokyKNg1USAWQem5Lv3pHoYWcHHiEZDc9bsCJ8195motXrbRrTMpFMRkv",
  "key40": "4e18Xh3Lcp87hym9ZozyVoR1vV6B5nLm4jzHUkgca6JnyTzwRJFoY6kbQJEBY1DMAxYN2aCrXP5FMSpNFV5tCGsV",
  "key41": "545DxNhipQqHSNVeSzBSfXoYByiUAJS6xaynRZXtCFtaRvJE4AHyuXoGW7mzpVHVqzDgbcYgxxGEtmS4p49iiwQp",
  "key42": "3u17AXi2DJGwkrV8KHo23bx3sqsTvhjvvYMMUVFpmqDfcxgSQnvwc8T6zqZoXELu9kwDfz6S8Hyrj7FgDpZ1cVCc",
  "key43": "3VuBUJdbd4UkPZzbpsMxvxB4RRwEKm8LbgdnL3Ao6cw7vVSHkVjKxq6eMRx1BwhqafR12o7yEPkm4tNvBfxPEhbJ",
  "key44": "owwLampqZAgn5wcSrgRZaFidTuC5cUosBsnvSyVHPm2Hpe7aWWJXM9xxXHUt6CUK36DSDzkr8QcU6tgtst2SksG",
  "key45": "2mUfL1eYvs7vcf1QPM5zbaXixNQ4qK5EaF5zCrGM4E7wrdSXz7ZzhsNQLUpS61apqBC749wAFn99QnBUMutJDzXk",
  "key46": "44Y7SdfVNVsEcqqLfydtPLSLe4GR8UnY48kTCptKANiFnwXk7dgwaLPwTqaYpaCGRBqQpznEYxa9L4KzZ8wdeSCT",
  "key47": "k7yUYpCHeThhAi4ErKK24kMPAbDNHmkkAgwNdB9UKFTdZzL7STrTHD26tD5H7eZTfsvFg3QoCcivqts4pt1LW6S"
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
