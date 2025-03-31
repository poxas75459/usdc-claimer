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
    "4oKeZ5amihdwxNSWVUvKBw2qLn6zq6or9BmEEU4bvopjmtiNzaW6Dc3jvU66ti7zPVTUS7XXFjcWuzRdKjnpoV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQ4p1QbBN5kZTXGcczv6Kmr7CRgWeEXqUDgT3Mx2AgWzukRhywfNtwgvfdr93DnzUL9ZiBuTpw72RAdnTjX1e9q",
  "key1": "4a3QqJpSdD7ywVVYQ4vxo6itcTrQKKEDjN8WPPxDrdC93sDPSmc3ipYVY56jbyM8idv41SgUWeBDDcoHnoXg1rMZ",
  "key2": "61Kj93cPjYjA4fwsP9KWaJXn7PcxezdvH2DEY6QLieh2WgNdukhZhNqx9soqqyFGPVkM8t5uvkL8oxLvWgTrdUJQ",
  "key3": "2ezWFmH2Tx1bj6ZzPFkoDJgJb19iTHFLa77ZJVWLSdxwQ314LKWWVSeVPgMtKQRT2LxCPCgqdkGPAig6uVmKVFiw",
  "key4": "36pFgMdrdNt8sK7rK6TQrR988jgEcVjgs6ZvswjN7VV4x7rE4DWWYvYLEabsfRgRfTCcneG2JgAKbGc5re1FYwQk",
  "key5": "3ytcXv8oV2orFbHJPacTMUEBBZ8S5a6QKysGYFhc5vej9nGCwQnFDPQgbtGBZkA4arJmDqytNto5DxwRhD6VK1cY",
  "key6": "4eg5BPLDJ6dnoGY5B6GXderiZqBouaRvKXSoUe7A6iF8gH16Nyt8TH3KfJgU9fErJi2fZPbtUhHUGj749q3Brz5v",
  "key7": "5yEVUVvBQMpBLF87mr1MGwWz5th1jC2vdKxnUojRazsFmuQsb8KXiyXdVAtrsWQaXnEs8Y1CdJz83Uzh1fT9dd9c",
  "key8": "4UBgHD2tVYYNLgfawbyigkoxGKSZyVJtnsy6FjyinPYUtGdxjevqnJU8bCcSZDt4anJL6fe19McfBHHAGHYor83U",
  "key9": "DCrS2yeg4mAuKy4u5SB9SzwqWXEJoT8zhS2RuywhPZsDE2DLeiCtgJsSwGcagXwXL1vahmPztRBH4gPxkGciEUC",
  "key10": "3JekLuHtj66NNCzCVwCujdagfD6CoRwsy5SZLhDT3e9oDfHbtwfaVpimkCtVDQhoKjcQaQjecNpWCCKkzKib4uor",
  "key11": "4rqW9TaVtw9HoQhbBro6cPDw8abb9ZNeqTvpmPBdm9sk1Hxf97Fy5c7Ce2Jn3Ka6CHaxiSYWfjbN6FiQKh46k3cf",
  "key12": "2sSS7HmbJT3p3q5fpF3Gken7DXCvKk78bVRNGhwJ3mv8rWdk8ZB9UM2rzTEHuVzgfFv55us6WuLt4X6Jk89cJtf6",
  "key13": "5GFdYJebfUJzXwqgiLQ8iZYmHC5pAHhhYiExzJf87mz7xnv3hDUBG2NV6pYBHvJNp5AW4xqrcfjuYH6Sn7gEy1T1",
  "key14": "2cWc3LntUgJkdY6G3ie26ydFiFgy7RzK6T2pfxM3z1CtCv49TJPein8dZiqhdPb8DsDWzfoPLZv84wW9JGi2rjeA",
  "key15": "1Zk9tbshqW1hFJ7bPv9vexmMygrCasZxk9nPYmBheaTF47JZgFwjP86FpQgr5vyd43tE9m1jaxvNCZaNKKpPSpW",
  "key16": "4RwKfFhPfpTJrWviTGnkA8xr4WJGxqsCPbXvsbDeBt1XUNbDVzP1aHwxtUbGDKcwYms6LQWCuzQVDhfZpFS3GVM5",
  "key17": "4Q6eBDY9tbS1eLDhKBffPrpmg8RdiPoWtToUNqcuue7xYVdtn3cYmuGmwwwvbxMfR7L1y3LMGCJ8vea5NT1z3ike",
  "key18": "FRHwhdWGoyTWzfG5B7awZj8WuZggELFGTjMaJPdMrXLFWLsdgu8aQZ84gGS1RTxWLw2nn8C7Y1tEz7EJzrU7iUs",
  "key19": "5Wb1vm7x1SbxTNMwvn6As9DWFAw1g7wmr1J1FhFiRQzoRQbV9wsJ8ecoYmKK2NTWs9UGi3P9yUDvxSLRWGxGdvC3",
  "key20": "2ZhMfEvgC2n3GsXRxfTbp1teoHSo6aUvGvPpsNdCMAh2Ud7HUZKB3bUTYCNdY9vg1WRsvkQXK52ERcstfdMcvivu",
  "key21": "2sYAfUzB64u2oYGjqSCWDxerZXRdXMCp7EreM7485xexhmyVfyiEpjXpnquFMpABTcDCHHtdVeEMFzVUnmq8YJj2",
  "key22": "4MLiiRBMkW9NDzbChF4DD9wVQY7qRgQnJeAErtETCXiT1mcLKhMqiSV58RXd3feVJCQY9mEKfHcdvAqtxDb4L6U1",
  "key23": "2rFtPmBCUpG82MMQYhy1ZpHaEjbSLuyuSZ752AYuKX78xqhQgPEKFfGZYd3zXbn9jksBEdALGeLWRHeNx98JWp7b",
  "key24": "3BExiHpvQdwf6PJRnm18Fw8TbpuFapqubvW2rGwKHgcHSVkkszCuSgxh47QQfoU5p1HHuT2DPx8SpdVVNcbmtPdA",
  "key25": "23RGBLovdbKJ5woSwck6p4nvvDjCtWXerxPRNhrRLGtivGg8BTRQ9NMXpqA6crfX5XwG2xA6ZzLXorJwPLY4BFE5",
  "key26": "4NMVrmjFLA2W6LGMihzUdYPLx2ku6jwQCDA95CLeKYCLuBLFw5pTsT4R2opDSDG5c7fVBSWLPJ6qCfy6nNHE93K2",
  "key27": "QXfKY4pykJXZXi4ijKTZhQxFBnHeaBy3XjuMh761S4iaHutWTVzCHVQ3itQD5nNHQaGkPZLqVdrWtABNGcH3xpA",
  "key28": "2R3AUqjxBKj3bmuojtJmzKEwZCWJUH5Mw87XcBDShbyr3MYVPnPvaaMLv63sCF6mHkLSWajHroVjLP38bJYXU9Vn",
  "key29": "3KSp4w35pvS5riUJoXnKoN1mBt4D5wsFNQkwiEFBCTHt479bffdDeh4aA9jNbwjKx7qybe2nu9MhfHJFvNakDTKf",
  "key30": "2DvbsPshXcEGBhjY575HWfkXJKTEN4b3BpfdV7bMSZjbs3zFSD95zQvwWybtf2GAbM83EP6zyHbQCRrfRU7sosZ6",
  "key31": "JrEvM2jJ6LQtVXYgF2P58Pu1cSiDYrma21FoPFUaGM1NfMzfA7KoBiPpDkPZxwxGQDymeoo5BrC9mpjkXLeAVnu",
  "key32": "5Zv534nuMGfBLf6pEJnWTqWTfx6a9ie4RMsUU6GpXEa3Vu2HfnpL2vBuJrEAQXaLzDgZAsTDqD4kbKxTm6ihbp6N",
  "key33": "4czWZt9L1gfVXZUWCn2KPF1er8aYfrwt68CTLEhn91dL5Yu8uySr5ZqzShxoGGXGm7jHWLHDtCvdyB9rKCTmJYk8",
  "key34": "3MVDHQGKqYBxurG5NznChbJRufANY5SuSKYdhDdyAEtUuhnKpR7aixL9EqX82qkWq25de4NzDTGjtAeaXobZWPqD",
  "key35": "2PSHzHJmphn7jyEMw3ZPkN5qCkBxxLLmMx41XLp4KDtArXoW5mR4a2uEuzGrf5eRqwSQTiDkwH8aPdQGGmwdgPvK",
  "key36": "2qA3fPZPcNvVnNDL4yaSwivPvF1cuvQYknUwEt36bNuHoRsxJMP8DUZrHoFcagW9MF57jz2f1rZDsZ8Qv6sSctkR",
  "key37": "DVuA4QeNE88hQJGEU3XZCCXFC7pFru3L4uqwxgGJcpi4qBzHfAYdjTxxL4cnjfiDtbs5eDkay57izCsacNDAxGi",
  "key38": "3qh8DW37ggDd7HuLHmvfo26LnKUDR1cP2erjc3UfSTA6P5Hbwrsc37EVqVrMJeeMFLuSjjHRmNw5XXSLt5n5wmtD",
  "key39": "3SYJKwSdNa7Cou8yvoGiZG8zwLt4z8ASvRnSGy3kXxL1FbZD9XhzHKyVfWU7GX5NxX7MSgYEsLx21xnd1WVULzfJ",
  "key40": "554kUfyY4mHFxN1QSQAhBJe4qtDYF2xXG1ZpQHWn4PJgRqSYC4BZ8SsX7STb6NVcFxekkGjLoyuV5sT2ooVnx2jn",
  "key41": "2YRaip3r3sEdrQQkRwjmyL6z2ktTQU1c5AcYzQTXG2YJVrinEeAjPE76WwhhMRvnEsR9ZwcUFWBWTihYZKBy7Nu2",
  "key42": "2mxeSn3CvenvQiT8DQzaXj6qvkGxxUrCKPrvuX1E5wAWeXJhKExgZ9Sb1YjLyy4NGSB5mepgEMwQVTNxU74V6wgy",
  "key43": "dSt7jM2HPwrTK7ouMYHpimCNGHbjutxBD4DWo6d7yxMvcSdkYU6H2zxxKXEsYbNYj96KDCvYnqpERCdbrCWbELp",
  "key44": "5xtB71rhGqofZ6MqVVNT21pDaEcvoYusDpKhWZCr931w89sEwDiJch6FbDbQi2sdpUjyBn9CNgPBs8ZhM8xZLU4Z",
  "key45": "KMaDsMZ7f6JqtnCtLCKG8r4tLExhqoUkmgkCVQ763NcZ41x59CECuDxefcrSEyWToUphtY6m28k7acihfVFD9tf",
  "key46": "4J99hFszncYo4trLkVBoUdkzAdX7ypsHh4EdNTqP4JXBQXnQCD2CRXmDpnBmd4J97FkpMt7eW1XVGb5MX1pJtAEP",
  "key47": "svqskuK1kKrrRGEkSGAD8GUCytHUbct9knVJQ1hdjo9WojJzjkcWE78w7rNRDQv75bBLsEVdXRsrhcg9HXjosGn",
  "key48": "47GqFGkp29jEzvDZvAUijauoZ95Lkjscs7yPwJ9NB4dtdRq5tpXaVkJXZihRRXuap2sPVfzEvuPPi72KWDnv15CL",
  "key49": "2n9ymnnqKAxTmSxWBkLg6MDGPd84xBL1zpEvoB35WZnWsteCd1qLBjxGr4SgymN9B7Ehd47tRfEv7GLK72AycjbS"
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
