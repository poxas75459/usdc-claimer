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
    "3S2SbSNYR9dJXxqd8Lq9i3HJKpYtSW89ZwqYvktuwHADjjLei8VPVCBiRHs6mkhCDrJbHVceuusvdwVpmyG3gNCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cxkfk2pZjirXsS5p9eeFviYxLqHMaLcZpAJFjzGNHq7Ka6WhPFM5rvfs3wJBHQHiHQzmMynw8kGPJRMB4zJtwa5",
  "key1": "1FWEMVWrZGTgaYZkrwRmF7umDn9SrnZn1ju9r1CG6ZqxfdEF7uM71v4gBDC3sN5vQBBh1eRTJFWEDDw6amTFWnX",
  "key2": "5BRr5M8HmMtQGea9fp9QNawqqRJP1vxFwGc3euPFzMxW8Km3M2WW3aAFAaUqcjVgjoC9qKVR3makqstKdhAXb4Jw",
  "key3": "55SavNjNjSK9m24JEb8EAs3Ti5BUmH3qVq9giZtvAeacCTvr1GMEbsexMSzTrfLJZ3aE9zapwSKhpwcsAPYMKAxp",
  "key4": "36iczmQAgrvgpbubVUF87GrVsJFuwbAVQgKPDj7h8eciq8aaBsjYSjJV1FiYa5RpFAQvmdjiPpsNWKNGdtxjtvnr",
  "key5": "qFzGR9xv43ucVjRP24sHrhusQG282LqTK1YWQwDbtofbMtU2LApPGH8WRQTodnkYpCTeJix4ucwqKDeZHDcVDny",
  "key6": "87TfYz2JxuGc4scq7T6fwDm16LhsvnvR3YgMZWrdZCQoz55wxaaZHqNGe5Z7EB31wpYBuqNjt3X23GGdny18ueN",
  "key7": "BVoPDgf2ti4b7EvoDEm1MtkZJBA2dPyCQsqw9nXQLxK4X3wFmhDEw6zr2mBTX9imbfUr46jwm22JcmTSjTwtB5z",
  "key8": "5XV23vJ3WkGHuURQTXdEZimPGSv9KPhriGDSK2Qzdpa54L2Z6ed7JD7vUaghBcZqEGCA4svXuJSgHHJXkwSbZg8s",
  "key9": "5AxEHpp2dqw5C1LfT4DXDRRYYPKWwP1UZwrggbo1C4CgwNvYEumk5uSVB1uuXKRgXtH4wWDxQUFNShTjtgA9VKnX",
  "key10": "xx966jCZQg438YkhwwGJ6qX3BDNwVQ1L1ZVLwG8QDPpunm9SHoCxZvENW7Mn4bjcEczHdn3W42nyypZsejpUVm2",
  "key11": "4tG8kic4vszpuz7zwXrsHfBAv6wEaenWCNQyudNieAUDj6G9En1PPA6Ne6MNMeeUe5iVcPTkvTbreSiib9o8WBHR",
  "key12": "5gsmJFoMfrbtpDaWjK7c1VpqkUG6cC58yGgreWm46qKFqHSVPpySHCnETzjcAPfbhLQArpSejNsWUCr6zD7BAaUe",
  "key13": "5uLWDv66jhHPKof4WfbXcArN52Cd9ttbBUhFREua7vbDhpfhkgGydQrvDWKK367gWSz17ziFvGmT4TBey2pxaAMA",
  "key14": "3KSRvc4HVPx8ermtBrEyG8jECLgkvm8AK2FaLzTN3eDdruuDM5yQnhsiyRBWLqVM4r2P6LqtvCkp2XZm63T2yRV2",
  "key15": "4HAwB53ZmWoiJwbH8sanVMzjoZVHtjnzXQWpakTirJtNua6aCu8krWRZP2uCjJQdejNZZFQNT2vvdTkTdzeb9SYZ",
  "key16": "3BZpKJq1nbdTHayWhVdkhtJiqjQkN7CUVhjZZHJw6CCmiPTVaftQTmC2udruZ2WnzeDdsUGTWoWa97RZdHDsWU9c",
  "key17": "26T483PrVVBMKiEwUokGCQuhzygbLKQ8ZvgD554muArgTo644827s7LjZ6P1V9bo22wQpfdAbk5DCdoioX4yVXxS",
  "key18": "5KqjswQsM9huFtbadTerWrgDxJox6BTxg58tCE3ZqYCVZ1uGmpUWEocdLdPEu1UyPuvFFSA4gJ35N5U1D8J2HomX",
  "key19": "5duExhJGVpV81Cf9vJJRUYUS4YXwsLwXvf19SxWn8mWb7nk3psAf15eaagE6VHz7DYSxHiQ5mEMtxb79zBDwH7GD",
  "key20": "4x4uxARdDwypLucimJdDFgyvhRF5gSRsUpCVYiXwtCsGgZ1B9gQjrq9ApywWV2tnuJwAxYFKnKSZzqLobJ6m6cX3",
  "key21": "3FkD4ycvdcZHxgC4yp4NhsHpL4YjBT48FeDHFGL2SsedCmVnBo1ibS7fPBZB3F71QhQEQxe5HJLHRCHbvk3i8QYB",
  "key22": "wFvw5iLqL6JRU9TyaZ5qdvowMyExekvd7ibzMYMztydxNjpgwYAR6mvEjPQGkm4FG7CmV8XDRGq4EAM2PqSonrJ",
  "key23": "2VNmjQDbAuMFtUVj7kBnD6YEeKY89kYrMsz39tMbEdBjFogC2gtuqNN9Rs3GiWuwAeVyge4RFEe2i97x5V9FNHey",
  "key24": "4CciWx8vH3iNvhu9CkJkio1zJoQm6xD8fxFWkGLSWsDgSV3LAYUCrkw7CEBjGcXzeTkag9eZyuqWrrsYnDEPWU2n",
  "key25": "46jA96ejWJwSWriGzUDPjpQfJFLNg6s4v5WJJcdDqtP2NFj3uE4p7EP4nBL8MFYPiMfLiYqf2CpqA3dWBUWHoEWc",
  "key26": "2KhFgToq2LY9uQv3J375PaZ1VerLXzk7hLEgvqgByq4YXVLBoWE8J9KAfZCoUG3Wz8UH6GCWd3Bt4Uj1SwAdHnH1",
  "key27": "58XaJXY2sHokmqm8ByjEbjvnr1d6d3VkJiW9mcvsgn1h7grmNn4RzkJnxVKCkFUA1656dLRgMRrBEmFDPXvATUkk",
  "key28": "8fjvrjoz1vaJ43KSQasF52F94QJ9Ha7dbMqYmLWst6D7Zb2mzTSaMCPBPXKcutaPcuFdcE9axY1vGWg9zRvuJyM",
  "key29": "5fN7hjMHyv6AxbYqxsfivNfUXy3ewM34sgZfwF4NV7n2NirkuVTq134FVwtvPjHxUhBMyDfGCK253YiDomgQ2DVy",
  "key30": "2M1XSybnNd9yYyABYL1FhCkgVEEtAs99LyMU3fZcjNuorg1HFZWPMFvdYhNqmp4fjdZv2D6ZbWTzxoyRgdavSoXJ",
  "key31": "39dCJLvFTPxG3TTXTB1eg7oGyHSba5DUFQUWBJHU1ednA3bhcn3p6x1u8h6bFy9SPZTw4iGGSW9iraBZDjXbYpUa",
  "key32": "64QCqmJEEaE9Krpc2spkr8Lgwx8gQTFLE6bkUWx1AFRxCGTiwaJoS4PYrJcBcuwuNjuQrUfTfPxAMYYFGERaZSqT",
  "key33": "nQ4GmVUSJm6fFLZwm2NxdqHwj8wxnMB8d6GrqnhERwo5iEAMMYjdDzhgJkVQR3KRtDVv8YAxFMABC3z6U5R9SWN",
  "key34": "45jWn1bQd3S7HMXKR9MGxQJo3PXaAb2DVCt1ZexRy9ZMiCrnHWWmGzgZMmL5ecMmH7696bRFoMPVRE9tNcXoReSM",
  "key35": "vqW7sYQyJfvBD7qxQ71C88DemA7czGJCuJwkfiadrAsCAkaohzoGxT7K1We2H92QXVfuHfrGiDLxaFboSTLF6V1",
  "key36": "5Jkt2TWGgtqNx88xxh2tdKC5VquCyYGL4PXoQmATAfbcdsXiJtmmfeSyQJ3tgthya8siQs4A75CDCct8wqGXkag6",
  "key37": "2ZMNuth3kvAg3MVSKMuwuqnULUbLWMVV23sLtMbkbrfpLKp33Ai3vZ2WY2VPVKQyeAcgFBciF2jVHitPR8Tcowr5",
  "key38": "4QJUr65zjWpxWh7kTWAyUwi6os2kCdEEWAtnwXVYQcQqUEaYsN3rmV6TY9finLhDBcjfMaixACasfB4jW8gDjKU7",
  "key39": "51JriBXedrUS4DQuuvSpVCESwNcVBKfj37wCDybEiDVE1PgFFLV6FanwYXHi85xdBNUnbyqo93FMX3BPTJtY1iK5",
  "key40": "4KcmM7uTSZVukmhX1PqnPiL4e83vnBrzuVk32nsk5WCzUakM79xSpxT4erfgH9jxd9aXcRTJjSvsHYSn5CLSiygJ",
  "key41": "4VKv8JSZ9x1WCuvwdfFEpHVBaAKLdTvw1zxKdrcRP37igzRysJUc1NhErnKtmGQfwJa7aPquuKkc8yM2CbWHQmnw",
  "key42": "3WXm3qh7nuz9ij8nuXjVK1i7qV33t5GNraaBsX7DgP1UeqG7aYzw6WBHpMBbuQCiUE5ZKjB71cFJGPKCXt2ttbsu",
  "key43": "3Ldo3TVxuCfL1urKX8YEh3JCM3hQC5sj36T6r585A2NAULgCMwt1dTWvJwgnt2B4KtrrprJ9NwZ6tumrfizCYGYy",
  "key44": "2DKPGPUU7bYbHkx8EtGKBgSGWMR9rFwTLkyM5gTDw7U97P6cXojEszERgfxG4fpGS85t9AJcj6oLxh34zMudgLPc",
  "key45": "5iUMb4tPoxDT7gWNCWEnvr1kYgxt9RngQXE4Qve9zQrsm7uW6gRsqaHf37vSzqfNg2bRyQp5TkXWYuwybpWcZXJE",
  "key46": "4k9qNFGqFt3KhtSgQVS6dv2JA22fJsydKeruNvu2j9Z6MJ22a8QvAQnzBWxs8VtwN51GkUeJVAp96qi3RWBLwmQc",
  "key47": "2CPNPQtZfXEWaB6fhBcC63zFRJSzF4d3Y9VEDRPCYhUQuB8GS8jSFHunrbZKzdk2uEXGA6eK6XZ61vGZPK9UrMyu",
  "key48": "guLsWuVnUsxe44pPmL62dCynDsUELpgnzUKrrFR2K5E5driHKAuTgadNZmJTDCagzAzrc1UacLM5GawYXsp9bo2"
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
