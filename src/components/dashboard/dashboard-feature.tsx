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
    "4HAhuZjiKjRBTwLysGum4bFpFKZk8RQTF3ZiDUFxWJBQ8kZU468LcweM9qpozFTbbnZ458EHxxEesCRPUSM7cba3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhpVVfeDiybormtvKXLRDXYLWMyKexSg7ydHT6pqqgmH9Wy2UWPSKUcpZ9vcs9xmcrg59ifaADJNHuLCLEVKD2t",
  "key1": "5xqdDNyuzbcYFWZL4ufoXBG33S1S1jhrcauENJZW7zR9vwQ3RUn8RQ41BD1euUgpRois4WSCiBTK2LewZybqoM8x",
  "key2": "2pjAr19hckx6wTho7FWKTkmMj7vpREUYqA7Rp3rMfWgNFHfbtYvk5AwbixTmcGAaLUxCooqG9bj311xefcRgHonq",
  "key3": "3LxUPWEY1gDLdctpJdBtmmY3FML3ztXABWd96h8gmpipNPRfk77B1BZSF33rAkit4z1Kew7dkATdVmSmWmWJdTnu",
  "key4": "A5Rqm9RAMVkw7ykcxgg7ERXYhth1VZFuT9ZCvWXJ46PLMRsXSpPunYo6YyWixNanF7sGmVf2rreMRcmrKLmEREd",
  "key5": "4ZNg6CSXVgGAhSaivuiw9rwby5QLc5XGr6Aw1ZgXXa4YJ4Jfjn2XD335hxHNRd3VpHe8aGScrwsKRqKwDnkjREcL",
  "key6": "TcDu3d5NVqkYMDKyG6pysuBJVX6pptGxpjeHdczSpDWAVaByRQkuHSdqggSrAiG3gHSyHPS9su7fTMcDxUx4mMQ",
  "key7": "3vKfuUyJ11bEacVk635EdXcaiymHADS67ZhkWXMc9UScn7CyZDxtCcaYvR74ZrJw9F76nvXFwiSCzNmebb4D1iWQ",
  "key8": "5hSq1GGkX8s197KhbNzxeyRD9ae8L8SAhM9vJhuDRX53FcHAjAbnnVdX3KVhLVYfdS1n8Ayo1G1NcTYaHDJsJRbb",
  "key9": "xZbkwz4dm7kU6Nb2L7UKbDmyZVsuJufDkDHFwfLxR6SvRtiAkd2Kx3BRd3w2MvVoWhADANE2qXTHPHxV583Jd2j",
  "key10": "44vBRvPLms1eufrAcmAKr2QBHX55qjNmYuaoX3d1Ho5hXwzZMNAq5SpRtuifW8PWEVyTR6eHyuaUS7LmtAEjUXyE",
  "key11": "UrbSoaB8dBzX7BjThdcfKB7Tf5vssPGmY7NTF9CSZ1Qu29iJbi7xRrhmtej9TEjMNsdDfyxU2fxTAfn3fnhZe2e",
  "key12": "323Z4dfXGCrzk3CBAvqwoFvPXWHfiz4M45GwBmutUKY39MhS6L9UFtTKqJm9qh8F4TRwjGFmzB9cnfK9aA3yFDsS",
  "key13": "5tCvoMNkYnA6P4m9mNBDYgCp1FQ58MzQuGT7scM8MbjAKfiKuGFGBD66NkEjfWr1ZLvY3wue7sNW4GVn9yVLd6cZ",
  "key14": "kcNbWZtfX7HT3pjTDB3KoM4GwJgGR7A5AH1u2P5KmYGXAmmb1JmcfhFXDybVJyFewUYjAuM6weeSEZYQBqJN7aX",
  "key15": "5hgH3wTqgXm1Gh3MsTKesGR7VT6bibtHzLby6CEs12YvpoTmQNoJ5D5qupfiabiWS5res6ZzEoqxRntFCEivfGQQ",
  "key16": "di7yP1zk49usozt5B6ZxQpe6kcV76ugtBEeZ68rtmiJoxLktuLkxtf3GrNNzm4n3CZ3Fae8RKZfPWBkqmppf4Fn",
  "key17": "52K6sHDpiEL87FDcLMT1Yn6yq6fSMTTjRs3twTgtzRANnE9xmGSzHWztvSUvufQpBmoxWyEKVGNRL1oh6R16hhf6",
  "key18": "3YRWDWHzxGJoBLHRHSwxCgvteEitVQV1cWDc49ih9DvGGwpVghsRSqhyrLbiuFF1GmMDBpPUdRNewCocVQpU6USW",
  "key19": "5uUtpmXDBSrQwGM7CpCr8enezS1j6FrfbJTTJr9xK1BMQHBAeAy3KRhz5D8BvbVDLUWckTaTjGmRajqrT7X7cTjo",
  "key20": "6EKsnoTF2zj2tWSeZBsdkV75iSNwTKsSSYsnqCYYUNWsegbaFp8vdupWX8LFa1w6Bt6bpdEE7FXoHjbMDqRbpqY",
  "key21": "2HhPPcPvtRs7ydvhuUbkoAWw8EWtihgNi1x4oo9BPbdWJX7Jm2UBccuDCovXWkL6MnQs351qWYvnaLj7hP3v4Mt7",
  "key22": "3JYkw5ZEvGGF5CazsFQj8jYEYUhHqWDeu2QfYEVrNfRg49nuiCRPfGcUU7KmqJmz2MFPAn2AuWYbvuMexYQ2sXLh",
  "key23": "4Z4FWpyZcfYVUoHCJk4LmpAiFZ9CR6L9jRmWjYktJvgoMPpdrvNX6bFUVvyu73Cn1GnBrZScadTkZVJSaPD1GYCL",
  "key24": "3mDdifnCoxNZUidGa21jL6fJCvdDtPvNXyFSdUuEWyE76srhbpktC66wVCR5cy3XdZZu2exik8rzb4NiTBVxay7N",
  "key25": "5j7pKQACrn2JQucmVwaZ13hrf9mjegAh22HX9qdssMsJRbzggM5xpVAYN4qLnardvrMeyDW4G68c4behufrcV1AD",
  "key26": "2GrH6Vv5z7YbeQLGyzjhGPvePQMvEX3371XQK5mnP4gVDvbxUXGnh7j5nQ98YG2r9JvmAH1YwHaUAdpodBM3n9Gr",
  "key27": "4hQT8v1SUe8t24ha1GPWs1vYfF9vPhKiRu9nLKJfh2CsXxsSRD4ACxbp5KbmYbHSeeiYefk494FiJxFfDyBqV1k7",
  "key28": "5hTzq8pFP3XvEZRLSZ3ajhnGstHLcYR1FKPpLcw63t5na2BzSRaxMou2DPfYHuLVdpEyg2R6fBuQYKHCVekK9e4v",
  "key29": "3ZGdQqnrTQsifawgw9b2KDXY2RZWXt58Mu44DEpfyuPLXgjD7tFDiRMmxDs1hjoXHsc1f9q9hdigdw7ngg4GyHpZ",
  "key30": "223NV3qhWHucjdaDXyEjArWLuBz8npLR29MpdpqfQiiDKCKgviZ4VGv2JSKS6Taq2A8eR7a8EKXCh5quE1RMbcdA",
  "key31": "gpvmocZbpzzA5Va3z2DZkLd64iXji4ScdohgqNUZjHqH5TP9gyfF6sYgqWufQntfGQKSMvd81i9TViWouKKg1Db",
  "key32": "4dovTGqANdp2AMRh2nzRtWqMWPcQuKMJQUHsWSQkKo6LxtTavL93UQydrjeD1fwcyD1X1cjt2tHpnyE1j8hkpNi6",
  "key33": "4MZSz2NEAnUWxWQ89H9q2AtSxDaHTSLHi9bkiT2r5TRsodNUC3rVXQQ77mk4niELkEzoPUfyn27VVSvnCvDi5NpH",
  "key34": "2ycZbPi1z6PTRZFx9VKnbuP2vF5A4DQwZvh3TAtVNb8HaQb1RKGsACpJRGpksa6TkFBZeMU4YgF6SsvPXUkqPAMp",
  "key35": "2zGb3mNVPfVqcNfMmMyu62nraMNbRjSKRUZk8q3VsJuFHHw8XsLxBCRBwjVfxnzCdgTNoegqzTxg7seaxkYDiro6",
  "key36": "2BY56Y5wDjPfmnPYe4ZNGD9cagksTKHhPPZNuVLkAiDGNvx81JvcezZSTfXnigkFWhiSJtZYsezf96xjseVvp1QJ",
  "key37": "3L7J3Pn2dfp53K7pnUj5k1s7Q8eXj9jKn7z4JrpqVdQWpFHHC6V7tzk1kVfyJwm5bTBuXYnH1L6YUKTZoFtmYpaT",
  "key38": "v1wA7piGVf9bmy9Ren5zR7sLW4YWMNHHM1nT4ewLiwR438SuXuyoJmy1yHrTu8swQU2fJ5S5YeeJr9GEhLau2A8",
  "key39": "2m1k3wZE6Cr2VdXrxQp9kMAfUZgrj1Bn3tHmLvYb7ioaTSfKe414wsqUYPSE6sRYDn7pkEvwHCEHgbwPQprZWCQc",
  "key40": "4cpt327EFcmAPaCt17WGdP8yuycLTH8WHXwVNLgc1XR7cN5DogaDv8ResirQfWGUm9SLVCsqL7mkwJ5ZvqsS6nHf",
  "key41": "5dpYmhwwjKFqNyu9FJ39Ve7udhYysou1TXTjWbCme7DstSoLk2GFjvTfDm5aEHem11gnbNRjvrDa6yVxKenQWj8w",
  "key42": "2E45dMgmgSjVvVZw8CenLHAD3ZmmkxFMjZK6d9ZRduLjXzjz9cQby2gA8CUZsSSVHcJSWszUNb24KmgdLx27vg88",
  "key43": "5pvug7W393mUDvymLJ4N1fjpCbjYpZj8gFZSbjke81J6rebYMpohYwnK7KFoCscWAer1ZaAe6F2KWFQby93vzyVj"
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
