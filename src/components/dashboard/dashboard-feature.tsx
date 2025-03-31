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
    "56ukNQHiBAYkGftKH3Z2b7MBGeCqtzZpVeKpuw16BjtPBPvxfi78U5HpSWzpoVgSsKwJZyWDy5gJieCSzcYeBfpw"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "56bwRZbn6Sv8yXijxZ9ijkjRVB991SHn9CPb8FSYBfy1yUeuAihdqEWb3iB7qBfdnQHGzNCXVMnHAo1zyXL6GYdH",
  "decoyKey1": "398dMeek3sWYkthUpewbxLBhExywtXrvAFJXor55WCcr1NLZCn4k9oUNDEzrCQ4oeQfdLfuZ7n3wLZdxfH32uTaa",
  "decoyKey2": "3AtWyfmyXcEHZasiSbqwvHNaSQbL7tt1rPUHrRNoX6TYKF2WUeUBKbSt8pWQU2MUrxyiG6beVFjsDpRLSuWVUKCU",
  "decoyKey3": "4FHgqG1QxvucphFTw18ejWacGedZVQPb7SGTYdczvc9G5ftzvXFYvBhmEhHKhnjNLZpLYNGinJf5U31iPGFD276A",
  "decoyKey4": "fo3KN6uK5W6GLDfqYsRvTXH76VubhRdRfbg2D8nKhgWVNcDEmhkJNuPa698eCiEs3KGoopradKyhroAWNE4yJ7c",
  "decoyKey5": "59bWQG8kCi99pTifWTizvBYP7oYgVDK8mrFQecZEkq8tRDvD8ZjwPyGwTiyQ69NFxCnrnKwXG4GyseW78U3PX1Cq",
  "decoyKey6": "2SBhycTnetqp3jMVcgfxetrerpERRjaFDKc4Qv5qfEMTto5vLVc58bRgUBVdGzp2Fs4ngvf4htQ6y3z4cF23Sk3p",
  "decoyKey7": "2x9dXoTBo5qN7enPrLUiHmBLrusN1Xu8N1rJ3nvrttgpCYhg1RJKQ5P7B966kU5x4XCrNha58qJcAe9cpPap9v3N",
  "decoyKey8": "5XiR9hG9v1UczqWSS4nz2MPUX1bd5cm5pfSfM6yqYxuc8UispRKq5AhhSLmH3jgGuxGpZUa5gAJNZSgY1Gm9cxzM",
  "decoyKey9": "64uvHsph37Cw1UpRV7MHFC9LuCTqQMWEmnwoYF3A92u2Joejvi1FG3QdwB8CSwtb76DqA4iGvBfdreVPAdqDWzwq",
  "decoyKey10": "5peqdjWhpKmZs4y5r2hWAV5sq2hVVRBcCQPv9vRRkHiW3eZ78pLzGXZtekuZZ9jM7XYxnQSN8cGJ6LAk7oPxZw6v",
  "decoyKey11": "3UMPdELtDWbnTFq9x7zWkv4GEwek61M5tsxQGZp9yaGng8bwv3LkJsg6wpHcRnSUJqRhnqFCga9A1CrDw5v81jLi",
  "decoyKey12": "22wJpVhuagq8KyhL3AwNKJrk6SG6U5jxPZ2hV4GvS9QxpwEsa85a2gT2Zho8UTzx6T1KDfX1TTTBW8D6tDkPhxco",
  "decoyKey13": "WGmsJ1Fff1cswqgY4GTw2qzUqnuYazDwJNGzkRDVTwLM9jhpTH7WZb2ZbVVfR4mL9i1odvCXp2VMebjkzzPYN3j",
  "decoyKey14": "37nusHcnhtmTQg5KdXaVdfQuqft8yhk7NEUbbtvF8FpXYz6AkagZcT4fFJ6nqXBa79bq6FQ4YGc8M2ntxm7MzrCN",
  "decoyKey15": "5X73wuYSZV7bHDYTPXiJBXaTijtj5ujc5bedNN5FwAmgVbP9Wz42VNZiRgfPQk5pA8u4NFFYhsHRpsn2sNqqQVes",
  "decoyKey16": "4yVrFP1QKZcnXnzvHndQ7rxKtMwxQgkUZV48nGh7cpRTUyuPeV8HYb1d7qub732QovHsSJy9JjwEhZ1Eh5yodc41",
  "decoyKey17": "5Uf8DJXzDmqrqeBRkHzJrudWxRy7wRpCqPvFLpucNmdyKFkTLFpa6fQEevnHR8VsDgWzAMeRhJJAoZqbqyLiPj29",
  "decoyKey18": "QRxpcS2X3YqCf84NmaYAG4aCKKUJ87pgiQZMu4yKuynorxgkWCxepQeSYMeiFNt7oaMsNYfbfqm8yDXPdUuTojq",
  "decoyKey19": "2qoUS4X3bi1PuC7c3fMCQfVqa6GJPwoH65F23TmrThW3Kdr2PzLvc4tiLhGBSv96UExCTTG76unZPzfz36MwmHNt",
  "decoyKey20": "rAiFXZEW6WC3T3McsuidffYb9rQCDns9ux3UbYqWwQd6JeiHc4yYr4bQsEVWw1UNoryqmgTP4LPaimvNMLPifT7",
  "decoyKey21": "5QaXAyRqHyRvkMSy4CtBuLTSvn6v8XoHdjp4Zk1Mx166pUpaMYVLRixja1P3D6acDS84BU5HWSwzJ3mcCrLSUF9w",
  "decoyKey22": "3BHggvcg6oxAP4mWkd9ThCJCz4My3LZSSTV6QPXZ2UtfFx1NDrxwxAJDrWtYGLkagyNn9kH5TABwgeoE9ypzzsgr",
  "decoyKey23": "672RY3dHkfW3DYBKHMevbxy1KVLa2NmW2Y24cu3ypbdCaREQuJSwzaTsMmLxpyYTJRjGWMwxG11TPeZBLhc5soct",
  "decoyKey24": "44iDQBYZKdFXv93yvTnEbH7r9uhKrgQxD7Z8m2T4dQCv8dVb2LQpBwYYAQjMNxhEmkD5C19LoiV9HwG2hYxMBNHX",
  "decoyKey25": "4Beu5DvYqgKQMGq6f8VmJVP58xhNCDf8RJC8xvgSUwKFt58Va9LaVEnkqHLRA8mpX1WP4ENx7cqkHKMdQpxKW4VP",
  "decoyKey26": "2CEsm3V95jtn87fyR6knieNGqTkuxfcQtkMSVGNPS9EnoZHfTAqF2b8jKAEz57Cpvya31fCZ9tptwnmeTgWreWmn",
  "decoyKey27": "L6UQzVynhtuW4ihkXfrEwBbqsJbaPAW1eZxiaTiovewdtv7bfT8DK1bBvjsnoGKCfBK19cARWeBRc48HYn61eM9",
  "decoyKey28": "rkrgHUsoLskVr1gYrBcLkxvG138Ga1JG2X6CecxeLajqLdexJZ2Wjoa9sws39iEj8rwA4Zm4J35QhNu4jkvyhjN",
  "decoyKey29": "3sYeDyURCgrZ99gErmGjjQP5rDn7a29hzZivzYCjN6AsR9qJas6BYrW5YDg97dUqAtg3Hwpd4VNEvdnKHChgUstk",
  "decoyKey30": "4DPG8MminNEhWmfH6FzdT6vVvUVHiv4XUGd8XAhjBEQi61FngdvP3nTvv66TmFEiSWmwtudo1Lybso8DEd8R3FYw",
  "decoyKey31": "25PG8pg6FFkEVXogEuQqeRn2dyEbrLZAhDYBCQGEy9LDtns9QZBUvK4AvwbSS8XZZdqjQyDtTCu6q9xV4jtRWyR3",
  "decoyKey32": "2jogehsHBzEodG3MTnuLS54JtZaXpnKzxB8RGSJzudaayGg8DRSbATiKgyMLKNndXTppy1uS1dwBzjfdwM39Ln3S",
  "decoyKey33": "2eo1UkNbrKtwq4Pz1HXHk5wAGkDmk83GkRGcMW6zHwJBx4kewKNdey8eJH4vpSDBC3qNPLwgrvRHJRfz9NPh3phY",
  "decoyKey34": "2oBdHztMGr9vPBF4dc58bQ6HpD9dzYWZk8CiTKhsaJ342go6nB5QstZaEgUcrSmzuc5Jxf4ERqLDxtv55WRNyEgt",
  "decoyKey35": "5UwLZqUZpxgNThu7R5jf3DPTDDYCKT52pzYCqnz3Q3MkhdgRmKMMoj8jgd9RBX3LBhnEnif353fXpaMqR1HgkpCu",
  "decoyKey36": "4dBwLSsRmJEKegzX5hRPTtiwdYbCfY6gQNMbjhK6vhVFrhG9YQ6HSFdV8dp8NQUZtuKPigog4VE6QacNrN5QXX2d",
  "decoyKey37": "33Lstp7MGcPshmp234cY8gwcZEPpnfDo5GSffopgWqr2vzxd6pRfJTrww1LDv7QdgjGSzWRoFiJHVkRgkUf971aT",
  "decoyKey38": "PeMrfbY3W7HiTH6hamXozmU2F1MjdgazUUDXjqrcbthQNWipfUSkDdVg5E2Ck4WguRGWgzjpbEeFiM8VjrFgwVy",
  "decoyKey39": "3xxaHLtUjdRVNzNqbuRN1jU5MZGFfBJmB4ThtHkEVYjQy5uhtT1bakc6zE2rUheRTR66ETWYzz4CstFnRHYSiAbo",
  "decoyKey40": "DgJm7ymUSK9CFPcc3YX8tkRCTfuav4w3vn2LdCKXNL4wDa5zV2UnHHeJVKDtxN7xuJV1gJMJDuFouiAFR3Xk3cc",
  "decoyKey41": "GcrGVuRqGSXXZbCh59pcFS5UapJgCzVzkeKzM7bZKEdemd2xj2P8hUGZXdJmxvrrwpAtVL1WVBgpY7qQPL9PTRb",
  "decoyKey42": "3WZCbVmU25fgVyY29fi9vt2YyUSs112EjD5YHEVB5PRYpj2ETKgfoW5Qajk7zYbLVfa9UeA47umgAJnSFBSujCie",
  "decoyKey43": "3zuUdVdiTxnsQeHu1MaVrnaomjtduH8e9QxbZ43vLwKVBvJagkGEoYb6hBcSx2SBBdx5YkrQmnRDfjGqJ9rcZ627",
  "decoyKey44": "msm3RGYks2yW7t3MyJ1is83ygRHaWPH8ZBFfWfGu31Xyp3JHJnx1BWQiZcc5Q5HYdGDXipabm9acVmzErsEh71N",
  "decoyKey45": "51L4tGe4ZSFEs7QzvaMt4jUPy9JQpyJTDZ7nB2h3ydKMT2vN8Vh44zy4FX9QjWmWPvcDphZRf3vbnTj5KVrGYbPq",
  "decoyKey46": "K2GjB8ii3EQo7bPdy3GGD6foTMSf3nwuzomE89te69yiy4KQUPAgvqBrc7tp8q9mXp7uyTw1NzftGt7hma1tDPM"
};
// DECOY_KEYS_END
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