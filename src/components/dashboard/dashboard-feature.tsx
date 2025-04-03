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
    "2DekP7YQyvut6Q54NGh6kDS9XVm9mmLU1uSb9vFJMtx3gNbP2wq2VvXMN2DsDqueFEU62UfTz9kbunfgzY5HLySt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NZ2wjQxesBhYQnPrGcG56mfxaYNSk3rKC6ENjjHUbC4bWi2UaYNG66sahknA3A93viy1amtM7UPsov8n2YC6Sz",
  "key1": "2xmZHgC3gTzMpedQYJjWz2GHsktBrxXEf2BDLarZFfzK6HxkxdZxcLuVboFTEwYxx4rX8NhEjn91m78vZ7keA2Fk",
  "key2": "3DEdW4kFA1MsD7nhSMrSPTcmNjK51nYrbtJpTKgFLwcRF3VSLvUr4kmBstS11W89LdYXHQgB1Zs8mzSpSak89cKf",
  "key3": "7mXhvuoiDPVEeVr3595WPrcQPV5JQgc71naREC2rPGtyUCHuxHY3gT54hXYeufUshfNPWQFALc3ZNU8RMKKiPGd",
  "key4": "tbRkvYiT5eEEzBy44JJL537ndKBBh5L7TmAzx2cawCMv59UgvL23CbPTZeZo7Hn2BPk6ZDQPmQQ2BrrXeMbaugH",
  "key5": "3tKokDAjTisQsoheofc6P4b2BUJQJWB7nWk9WnqB2fgefxseXSt4R7gq64DHjLn5C8krmpRvo4wRpuN9psfv6fA9",
  "key6": "BY3KWSMCC1MsLDzw3jxYMGcPoHn6ZHUohc2X3nGZSzBwpFShWWUGBVzMdp3QPDKjdswwQK7tNzjDqHi68HmagNi",
  "key7": "5TuNUcT2QiMN98smhWWxYaXnuGHbMvt3ySUP2y649UZ9SvUhs7vi5ryMvr3Yp1fqirNVoZgBTK68X7Ao9aJb8zKw",
  "key8": "3x6KB6o9Xjpiu9Rc7PJRC2LRj8LCUEUHopCmCcKkAb39ver3XeWph4qbhobHj3FDWkxm8nuoKSrmqFNSV9j2EZY9",
  "key9": "2gXsMyjHGacdYoMZch6EQ1XpbMDiUBx8df9Csw4sdTjMMXmfLJLCjKwrEafrZuwiu2i72pztF7p4Fuq9q9RPPP1U",
  "key10": "4NwphbRebdaLFuRiiXjRE8KUBhsZfUCWBSjpdmJ8p99gAeK1j1LDbZhSXECpCCXWV5BpkJ1WL7ERUTW82xWSRL16",
  "key11": "UCgSuJKNcyCvGwUp8zR6G5ks15Sbam7Fg2T94DbdgdgaEnCQiC4zv2LjQLbDvpwhTR3Z3QfzQh1ZA9grTz2C7Sh",
  "key12": "5N8Fpv9GvUBpiakKWz5K7cwgevENRpipu1kQK5rg31mt1hPCe5zpnempkofB3S2RDdcS7XCPUEt8yaBpvZ48arZJ",
  "key13": "5b8xpMxmxdEiZSkXhtTwN4ARf9CSCpgfERxeDpBQZzWFLcd4g54mfZvpecrhsinfVA9EC6zsBZATHFZH9P1LKUr6",
  "key14": "S2Kqve45nuDjQ7PofLXamWU6MqArHHzziAQcacXcujY2UNr29uDKhViBLEn6mtExXpLAe4MynyekS4sQG6FiJo9",
  "key15": "ZW81C26t1SKTD5WzUJn7EK91WVmzCfc31dtR7LLv2Qwrku5qvDdYVfWfrcHLR16gdJtucTGxkkGVnnTw8qv22xQ",
  "key16": "2EfVgAaWrpRZ5kbkHJSDGVWwGHXrByWMajq7xtQkm83T7jY8ASB2dyvHLRAaqYTsNKsRpvqujnEz8AebhSSNnJ72",
  "key17": "38EApkLTevBrg5P4UvaTBZC1WyRUswkSV4mn7Wc5Hwb2eAJBrTAx2BRQLEAMgTMCAxsDbfnhkytgXt1DnTY6iLfB",
  "key18": "64ZDCaTLVtZA2k8CeeQdTayAMftpwYz3DARNMuSPpCVucT3USXUyW6dyuYt7Fr2YCV4FWBhRuj8rwthmUoAv3byb",
  "key19": "3djVje47tTpZ3GJTBpv2BQ3gCG5ah2CfkkHnpYMxQFRMFF93y631LZGwnr6Ypu5bgUmLkFEgx4r3evBaqJxPasEn",
  "key20": "3RB4SdVvQ9QSM7Fc8wgGBG79Sc6fKouz8HLF1pXyXBGibJm1ER8oEGECXPDRUGCXhh1qHnFfsRi3LMRHmPhjdoeJ",
  "key21": "3EqNjuUwxRWqSeou8vye2twtYAQUALBi5mmb25MQ7wna6E6hPvPkfCYwBxTsyggwmv1RiCyhTwxLi6XFGkpALM8T",
  "key22": "dNvqpV2a8PcRnE5zyWF2ux4w221zcpwZKYbhrStqn3BU1Evi5uMAuHnaJ7KehGVTMVz5Hgwq4q466fvNQeUuNv8",
  "key23": "5t2WBqtD6F73RnGV8Q8Zqgp2UmzrmXFUgq2S1rcvRQnja9XPWYEYdGRpR9bRqbMU9Ez3g737NEFZaxYuSSzpPkhe",
  "key24": "4rw1i4iFLu9BaiXpNRrQ1DujaS7G1BZvhcmxJzhmMYVKJYUA5wQvtVTjJDi71YapVg3h6pU46F3NowKo29rAXha6",
  "key25": "5fHemsm1jWVijL6VAzWrfaJ6jYXroZtZe9xerwzsvy1JkccaFbgVRA52P7jcJh7s9fyuyQnPkV2m3K7qsQkRnDzg",
  "key26": "3hTUXydHHdVV4fubKDhahtFQophjYcjSLqSN4NdTafxBfeikj1GC4yhNXwYqrbymX3Htgjhk83gj7Q5rXqFdjwvw",
  "key27": "2RWR3RSPbfjfnvmrH3cyX8NyGTtuFXuNyT71pQgXh5MYXTMKHdYKM4KPpSTv5euQDGhnmCiLPRPtvrwn4r2yHam",
  "key28": "cXAh3vG1VppUKpRCRWYkNAJsMKwazSb36qS274ug2cqiFbLnFUkmE9b2SAMUzGyxWQnTXhzWxTqWqbPqrph5o4L",
  "key29": "2m7t4eQyAB5cQfJtotLA2ZE8DbLFh8eYF19WAYtSmTUz7Y8fvPKQuqwPZD8mrneGQkMGUD4Euy8HDAuGeZ8viVHr",
  "key30": "yZF5mosy6EE9B1khzn4KR3azGdAxDkK1jmJfGdRSAAzVms78ra9khikjf4DzEutaW7uy5eZyCzh7uZUWQyNmzo4",
  "key31": "3vuhhqck4gwdX4uqmuqoZqFE9nG25tatCVXxc3ke6dVS9ezsTXBFHhQbt5vdev9cD2vKbjTjBrnfSeoKmiHqwGBA",
  "key32": "4xE97uHDPfpqo4SPzfWDfkvqUJzEruJ4oEA6pK8cjKo8pKqi1jYPZAwuxJpTSdmJDmZEusCRYNELojhJF89tBGUM",
  "key33": "3NC2Jr8i1mSPaSsn6BvyjHeg8ZNY9tJKF3CAguJfs5W7XLXZACqLrwzY1AFwDTpUcZpmU69jbTczTZbNMvtfsJBD",
  "key34": "4KunNEyqU6UuaibuZBret3kqsaSgAbxjs2zT9h9h8eEjr13o2rU83sST5imfs69fGjmx8qhDzDhweW6myBz31aLh",
  "key35": "tyMZh8HLH1QNMhooD2k1BwgXQPJzbWuiGL5krdB5FFGxrUQ3843BhwzpoeLkXQXp1fyexUAMVGpmo43tx6vhqBs",
  "key36": "2eP7rB2nnGsFKtvZcveg9UBw4FvQPVERrdXERgAWoFkP81SmevDvR5L5tUKd3B4op5LuFAg9JVR32qakr9NzDaQr",
  "key37": "4KwKiLpTTaS7iir9PLpWSzDKGmoQAs4rVbGdGSKoJkd3BLLgUGLEAqCcKxqN94ZfPzN6XPSKevFtR1T76xWmEU6a",
  "key38": "2kmjHrUyTULN9KkPwQMyyb5iKWNg7v7ySVJvpw1cvNDUJRcYjvLB6MrP78ABxBeqdqyZTvXKHXUukbatf9pEjJX2",
  "key39": "4XAaghpgMHEUXyGyoF6JQgEnzrHTjamEmp29MwaiXGUzwuUM6txZjrHJUbMwYGftweYnbx4K9hgpsPwJgZJoLJ9p",
  "key40": "2gbyvHtkJ4YQLuHxfaJVTYVTyfbA17rSS2KgK7Mzo3MMeCAHnUmHgfZX6miVvU9HgA731oYVBGVqwuNzL87x9NTx",
  "key41": "scPq5HaHDxnd31HhAFcsAWNcb2m43vqVD12ebGy9aNKA76hiHCiDm55Bm4B1SM5DGGiMotkdQHaMd4kt2ZM4ReM",
  "key42": "CXHSkWYoF5FYvi26dLmcceq1TWow36xcYKCdA9Z1fxjdEh1tdePAJ2gRF6amYF8edAXUR17ha2GDjCA8pSXbF1y",
  "key43": "4uk5hEDGgcBqXXy2hQWZWtZMfCxP2QFazvmwP8EU2nWYC2RwDpAfW2BdTAyNxefLDT4uPwqfRGbSALcuHViMaikh",
  "key44": "4XzM21FGfg4qJYNuVKXAFmdf5i7RgXMLwSTLiQoseNTWednYzkrCRD5dxsrzA4SXKn1Hs1x6pWvTrKoCnpM4HgnL",
  "key45": "3s8Ysi6gkfFA7EBnT4yoAkFRgcV99WLAu7pftbi4RJm4cTi27uGa7P3ZuPaCfMX2jiDb58Cq2KzosDJ1ohoUsKZJ",
  "key46": "3N4vxYLA1PmDvWEL1BfZYnrsWjW9maYqdXXeeboxNDUxbrXRaeqwtdEVm36wxDe5NLhF9fXAm5KjoRYRHcyqrF34"
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
