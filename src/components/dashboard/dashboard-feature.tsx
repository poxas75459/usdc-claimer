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
    "4r68vUfWrNDh1TRgGCuakMmwY6gXT5DphAkY3bBz6MtZjEczGF1pUi2eZrNgrKarzJShmK3rbMxhTknYQX8SmRL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59BGqrFmCrFYUYVutBNy7FjPeu5iCcF6dYePNnMxy62eKcjnDJZ9ZHYvwPnM3LGFd5twAhB9SDyVMrWuFjsCUNyf",
  "key1": "5vADNNQ5QutYnpJvhTCaKCqtXY4ToQNeXLbMwvy6PfvV4au9iH6QT4hRcgLmDPcZmDdDLmJaoTgeip4TnkSEQBg3",
  "key2": "3X1thuXSYUS8wWRFg6bkFuzg58UP9TXsgM1LW1hpB5cf8w1MQ19oV8vWQuTCNpwBV4shEEi54k193U3S2gVFPr2X",
  "key3": "5Eg6DHdxexeb4cBHetGa92vxgceVJ53Fx1bMsHQQeVSFZRhDmLEbBybP92EobMVYGd5DG1yGGxYkwbmnQ4Wp2KBF",
  "key4": "3tdUyRXSYoiYSuHPUqZvVqESJnBhgustdSrqsNg3bnvAm6cX3XAkbR5Wk9rKW3DXWTo9TM4mqjQ5dPPMAFUtAhJL",
  "key5": "4GJXbKrS9a2SAHGVrgGhnfbMa9a4T2XqFMxBLyoH51hQziYppSxY8Fq8C65AzpzGkJ7fCJhKjvyAUDfJpD5EhWtc",
  "key6": "pd2mgzgcgYC8aBvN29t6j51zhkbyr3cpzghLwVgKGHQWtd3t2myn2uMVYfG12FUvVNUpDpsNctUKXNU6fG3ZSDM",
  "key7": "yASCsu61MBR6uZvuo2L9T1fvuhpMKLcrLb5wjVhKRKHp94sKfFi1oQrufSFyT2TBkL1KUWkw6ye7Zb9mAy2oRXJ",
  "key8": "4R22m5oScVUVC79EfEu9ix8FVNXboHENE5kP99QpNuAETryFnouQuz2eTW3P1fgD5uFz65vM313jmubHVNtr7jcT",
  "key9": "2ykS5RssTiTgZWJpbya9Vts1E86FPNmWRzajGCnuB1srmt1ZCrcdwRYXCwdeRFBPJui9BJBzGbmAjqV2NZpwuzkg",
  "key10": "44ik9gavHUfcNXsPznfA5y2kGwupWQUWcrJJneN2b2eqU5uZRo3zuffUYpRZwLGapDCngxXsieuXziBTck1mx8Sf",
  "key11": "4nd1jzyMpur6CMQ3fkF3UX42LeFeeFVHhqCbwdV5bmPfKzxoRH87ZcqGJoJvharPy8zwkrurkJu4p7ScDJsEGJ7G",
  "key12": "3ZRZ1e2tccMobAEUbmQ2RYYxGxTcgGsiuhN6kU3WtQhjgxxHn3oyvGgeZbKX1ow3W5rtDEG7TRVgUJybhee5eUPY",
  "key13": "66n3vjVasZnSauxMQrA1a9kwNcpzbB1YioKmstaUSRhsiwntZoGLMG3se8A9j2E9Dze8sq8EYEj1F37JcwBjBmas",
  "key14": "2Mq8J9rTRV9hRez8Gbrk1tW1iivwyFX6xTmrwhKK65XHR47HufAp6677ZXeZjRbyX7b8TuouDdK5yteBigcVsLcK",
  "key15": "5d14P88pFcmhjVWoAzrLeVXrvLoXaM1uo7xXQzNghkqoKpBLeyzjsMw4HmJasDqEZ52p5Ys7mDkQ22xnj45s2bc4",
  "key16": "33DjWQ5etA6qEtQbBZUhr2szNALM9JzoaL3VTmRwiwqVmTTDZhNxTHyhbXwVpBurmteQt8d67y9ewPTHHQsYihDZ",
  "key17": "XvKK3yhVAvW9StxuLV2HMxYePkPKz5o5L2Kv93mmWDvsmwVxt8deatuhHXp8uwJxKMJcxXBzmdanPjBSnzDj53B",
  "key18": "2ZdR4a2ZpJ1G8zAzmtGjgL9xYBhPxghegidHgGvFesZY2hckGrnrySdA1guupiAa3w86B4UdRGxkAPAwPFmu9qJK",
  "key19": "2cwWa65pqgdhDVQWFnRfkyY79o7H53XAtEKYB4q29gqCFL4DwENLHnp2q7tVpD9ciHx1XnfjuuXr5zxBDyPt233F",
  "key20": "5xYTFpPC8nKZf2LBw9zRQ6s15VNvWZ8PFQBGHGyuCFjrZEXymm2TFMZVLbSY6SfPASjeTZgm6PfYwy5MELASfNbd",
  "key21": "4QqqSmE4yKgKiwYFk61HmFAMtLKTRNdJoavdEbJTLTwHhzbVJELgoQrWaYHyekuRGam5SUWxaf2vMFcyNmMZwwLX",
  "key22": "3wuomtLc1yBoHiCuBWwwKGB2XuvACyJGVJVeM62D553KhTdJDiLVPwsLmR1dhPLADRLBHA2mPbcKuzSEoYWFMPd1",
  "key23": "3JsK1SppiF2ivjrHyoy61koDWFHPdpHimNKmUcAWdMrjvA9h15vdbfRNaFg5aQVczexumuq65HpvRVhkFh1ghY6x",
  "key24": "bLRmRwBLtteBN1g2HyKjD26qJqx946kexTFEyGzG9jJBAHKjBH2fvScEeTC1Z51vt1w4ZkXufLU6N5BRNiQxfg1",
  "key25": "49Sv5c5hsrL2gY3Cwxd1v2gNrDd3K8mYR8a33182bGkfCHLfmNeNCJhR9WZo4bseynLY4aTKak6S9D9kCJVKxu57",
  "key26": "5triytoEqpEcarviqhU81DFTVcWBkpvSfy3CexdAvFWeSxqkMkXgqvS4Zg7KdnjcUE8yTKTtzRkjjAXwRHcXz1SN",
  "key27": "51FVnFjwvjVyrYUtZBZmYuKD6GWRqrWpyVkG9mPPCFwuxubE5ahKQvGPtFt5qdtmTow8NVcBieVZ64z25GBrFoCR",
  "key28": "2ei4cyVu7ihxSo1R8WquKXExmXpU8C2EeU4jamUoWDzA5xeosj53g9aC22mcjxMibq3sGXAYaHu6nDPKVcrMnZTN",
  "key29": "3gKT7gwBDhEvV3kW25fALQHQ5EJCCpYp8sSVZJhYtowg399ufiJePyMyPVLj15wRcxxUVfKLfAUv987wpwUUeDYK",
  "key30": "2aNjxmLn6Q6q4tFX2cK18fV5DuxM7MBYKkaBdrshPAcutM9LhmoKPFXwnPgB89nhx848KX2h778y7ryTNZrLvVVF",
  "key31": "4EPDKD5q4xtRzhBKWZng14rQuFbnJQaAS3p887NGEJXTDtRLWsNLmbwCFX1xxfa1DZAhntunFsikEgSjDrTUUmZo",
  "key32": "33XfuEe3EuL557ZPkNTm785XNVKobwVdrRq3GGtvvsp5jqMg3QHoeot9rXi6RNbkbfYsRJQL6YL7qdJAdcavx1W9",
  "key33": "jzdS8m6SJLUciZgLZ98dQWCzguXcwZxNSV9YnZ3iNFP92vd8iRfWUpj5s9kBYj3ZrHgm2NM9iVbpD5oDqozjbpi",
  "key34": "5XWRpteLgLcCubix9YeJj7ufJzUcJVbqAKXvtXGmUqczHNxzxSw6Meud9X2P4D8MU72atjDaaJvCkbcVfCKC7JU9",
  "key35": "3JBmqUBVfjJrjfN5TqEucfHfgdGaWFGDssnHPGcGGQrnxDtar64EXBjUJGSudN1ssFNMVSYZw6RSPHfW58tLMFH1",
  "key36": "365cT8Ei5YsPtewhNRgHdn3eoKTy97W6qvGJPv7xtGdTrZas9NFMWaP5QEt7pnkejoFXdqZ7ZUxxoGgSHHCjUmpt",
  "key37": "5GXoPGvPCfxRXayCQBQatJC8HJkucK5jzQ12ixexYifye5nPAHzQ8sNQneWmAD6BQXZwJw14LCXHu21QHMiq1dfx",
  "key38": "2yc8vk4LPq71j74aqf2rMSgeUsmjn6mLhxRvnjfagZGLaK2hJUw4yxAMhVaW2fFe9A1nPM3JrY8q1BnoAGpqEWTu",
  "key39": "2kAeh3sQYuSqrAKAb7FZYxkxw7ZKSQvTowVxmnLDq6D2NMaBiojrkVUAwpe7Z2jWx1BfxvTHpMhKXTqodBi4Tny6",
  "key40": "3TJPG2S5Ae4YYMYTUf5Veo9oRY8LiSk59Sayt6dZUBpjgXBroiRXRjXakruYXL7hp57S1zbWwXaCVdmcjbxnXXfR"
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
