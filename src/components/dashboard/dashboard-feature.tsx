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
    "3RyiYwNZ7E2qM6HCRgpb5EbxZxcaCRRrNGT4eDMt5HHrkjW9KYtLrc5DkzrcZJWR3S29Gx6hcLDGNft9GWiBFzKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uA2bs22584PswAMCnpZDer3p1kofLUSoGhRXELZwyRoUJLMisSS1ToRYoGSoWgUzXHHLuX6R3Nr7RuxchXh6c5G",
  "key1": "4mAASUxCRLSqg4mehAozsa7EEeUrAtVQCJjJFMMWF8XBori1vx7kQL6b5anPts4hrJ17aB9pzjMQbNmJBhqMtgd",
  "key2": "2vxxTK8qXqBcwBJCWAvXs6VddV6DoYVKxwkEK7AdsVFXaADjQ4qwPSrSyZn6nWK1S4v68ZzhggkJJXdns9LQxVdi",
  "key3": "Fk8uUPnWkaEY7PA6MRVXUD7fkaUA4ynyR3R3p5CJZcCqrSXoNx55Z2KakwEaHPwXoUYTtvLkZwTYTnnaSK6PHEV",
  "key4": "5ucjsWh2H4GUx3vhjN7X6rDS6XMkmHAbqugvAcjygjMRBcVX1DG3oeeknJyi6aFHxwuw4z8US8QZveirjFUJLA5k",
  "key5": "5u1VPfsG1V9iMsrNTa4FnEs37mjB93ppxbsRSAVLhk61wctX2FxdmEqYTZJeD7uYZAKwZXfQrJVS8jibaRXhVMNe",
  "key6": "2XEWtdtdPunCMFxJ3KkipP94hQxyYRC4uBnoFiv1HE8FYuUdTj7ecVS2rh67b8eUoRZ3brKPWCbrJxxUCFHbwcsn",
  "key7": "3GYmNNaGAhU9KkVaaY7bfWeJZAxLcN7BHp6wvS9EsGGYvpDJWRN25ExUHMyP3TXY8fCbCJUAhgi6zpQ2C4BsFoYX",
  "key8": "2nD7QWvxbAUN3BB673zPWgEWdKQHmpg6vfL2x23nLviJUjndBSvQ97iMYhg1PC5XPcdGoNPsH78QNeaB6xtgU74i",
  "key9": "aoAAGegw5UebzKYzFAFALvsmrvR5tma7daUagvRnyf4KPzCH2F74N8FP1Xs1dgHTkJXWLLBFRYpBAJoeL2PSatM",
  "key10": "3T4EVYVQ2xSYjhu6VNFr13QKCWwKDGj6aAumxWk12E17foH7YzqerZ4uFww5TEdZqCDHK8o2bt1Qp5btU2SzLuwf",
  "key11": "2vDQRDGupvmCAdpkNUqVHuv4UwDsQdSajnyRB1Yn7sW36CgW21kEemvG5oKvG2CmL81Fw9iLb1zpSEngyGjCfDuJ",
  "key12": "2MvqettP4cMgXgdg7hjs6XWYwJ4qVhee6z1Y2acfUCh7otozRbLrZgFCb8XTFRgdY4JJukJjDE3ABPXeCfXD5URh",
  "key13": "4q5zLU1ZeXvLkgfMYhZaoWrmGNrSnXmqsR9pX5UvZFgvsaL7gWCrCcoomPKwChRPVqP4WdjVsZTLz6f2EzSUKFiY",
  "key14": "JZBKKzR1tE2tvoa4ycxtPxEkeHDvcenH1JkfQmGa8YgnWCeFREgpHGkUQ4P8TzHV38T6QD61hm7HNy3tG8d6ZxA",
  "key15": "37qaUy7vQ85HLDrWNvsxTYGETXLu5dDzfQm1n3y28yEzswSys8LVxrj1gbwKfZk45sjuiqFvreq776AZNooW5ftV",
  "key16": "2zfRx8iC1FWQMmugE8da4RH5WYevoxEWkCtwh5y5P5p6AQ9fTGMbdKQECaowq4sRsFUmvUbfpqSBtwNP2kfodvYH",
  "key17": "w5tyLt3R3GvgNFExaryW4t3ZAZHD7qPa2oh2V6b5PvAFzWWSs9NiGVoiT58BDwZWQxjTqgZXAxwFt8vbchVEcAR",
  "key18": "2Rh6vsNHEFpR1deAHHxJaEGmvUyyDZoZ6XQ2H6dWT7Ct2DgRyoZGG6BDNBJoo1QUzpUhV7bG7fWoPhdjSuL1MXKs",
  "key19": "3FN2QqSJypsRZab5vstgjdoSmToTMRTS8vECQnskjk72hCs5ZKm75Kt8YEd2AmvkJcjnKU4wruf3s575wNjDuD87",
  "key20": "JC9ohceZghBEE1EtbT5m92nFbepijV5vkRV9rEp7v4FJbuJbLJfTFj6fAfR7PhafKQKFv7fRi1UPoVqPQLQpchQ",
  "key21": "5vvZL3ssyHDj2UmiCbEuv6iUHXxhZCjec2bbYaPYRqXGqqnNyWhsxWVWnpSa1jQCmAobkZacspBnzKqpnaaTTbmF",
  "key22": "4fEcMzDC5bVeXrhjMQrPTq5ECdJDzHw2gCZf92Z5SvxLjAeQVVTyRdaG8vKSGrxsfCNXTWs8jn7ondVxxma5iyhp",
  "key23": "2f5Fa9xfRfZ8jF4mW5cQWpJuoYnPU2HEwzBgdqty39e3RkgeCgdvmhEpDyTciJZvHZ2zruzQeqsAzN4L72wBPCD6",
  "key24": "ZpWdq64hwK6BzpfrbsvJoJPVtPknr5d621ayHGLDVvzZeefYDVuDjEifYGNKuPw69pKKHfDGcMhnY6kbRrtS7p5",
  "key25": "5ZDGiu5KAAM1EHzYX417izZ7Y4zP7Nr3UBf7DVeHYSAaNT4TVCYGvVoFXqu53mJ8EhUL9cm78Vd6SVtRW5TNGJz4",
  "key26": "65wAth6FsR7NupDGVejXE8mm4yC9Mrzhf64SL4hYBa6pXAMkfnibqoFwh46iRENEZsd3LKptjFm565VddLBESRHV",
  "key27": "29U5jyuiUwDfMhJDGeDDt7vXTKPPkm2QAR59hyz7vDcKQMoWZLXfeES5oQL3rnDcW3wGzAwKySM7mocgEyQRwzcH",
  "key28": "4bqzvF2tBi86TwXKsQ4KrxoW1c5r1KRDWtWL52XP3kX6mBK5MhyaKzvp9qm9FxJZXoVaiVY6znL8q3QJahaENinW",
  "key29": "3eBNqT4LmiCpFTevEX5gkL3U6M3VWm7YktjoDMkkwHuMWvxwtEfeEVBC7xNndAfnBGJoPd1ivCdKhR4VWEfVsh7Y",
  "key30": "5WreUb2uJAZmn1rVU7uGLqKbLgrV7Y8sTtZML5w9XkopZS8TseGKgWeXBSR7MuiNPoZNuKpifawfSfnRFrHdjuoV",
  "key31": "4LDXZfcn4ozd6Jee2hwf4acmwdHojacDL9JinyWdz5tHeTiPjNSkiPUYRUjjaFzP5JGBBW1pUzpkm6ie9JEEqYdZ",
  "key32": "63njJE4XVtHZwCn9szqagdFaQEeAYpAYVZgZ7soRHrA1ZgDVeUqzL9zHmEsFWQviQsWD9dWwRooGurWEWnUe6vLX",
  "key33": "XH2wfC7t5WTYKBXSxkkqdD9qNFDgTUhzDyKrcDurG9r3ctTqr1S1v8EQnUMqsnLLJTNgM5WnmD4Ls8zWkHY16Hf",
  "key34": "V41DGnb2Qbexie9mt6fWoZF4y55ixBeU7w39SVydeng1uYBigRekG4xGFFECR8nZtoAoaL6AZzvk8zh54w5bD75",
  "key35": "4CbGDaJzZiPMaMJxkFHtKdaANToVVQq1VnPh2MLuvXPQL16PsLN3ueejgp5hfnCsnWhhErcrvGWUUBq8dFyZGUc1",
  "key36": "5ug9j4AYWi9Cw3YvzrMS8WbUxkWW3zzV58MGj6UafX1jmYbzpF54L8viWAQk27FjQwcdXpAtiCUe8GbbzzhYf9qG",
  "key37": "59gpiaihZYBF3D8ScdLoe4W3rbwAXgAhhfj2xk3CaDcZen2hpcAHod7EHwcUgspqbKU6vt4xPRXYo8n9u9evWLiN",
  "key38": "vqoBLbGwSBV6CMv4wsimdiybSmdKafHWaxW5HXqi2FsBnDcEvESRSedMxSFTDDYxdRPbFtTd8GUx67DG5n7NgM6"
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
