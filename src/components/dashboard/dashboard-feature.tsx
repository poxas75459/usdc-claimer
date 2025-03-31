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
    "2wt4Re4pdUeLSsna68DsNHjEkAuN9YKkTpXEPgD4tW3bkgZAMuqUv3imJrHC9syGDpUvY1BvXd9NXtdJQ4oz1N3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8QP65yn4GXtyxggA12AVj6qc6cGAuc1wxgeY2uy2JUYCHmmW5iKPGqG5MVNpUQxkVDxdN7CEKsnzYB47eqeYZu",
  "key1": "fwLKhbaoRieWjPxoMxkb2EgcAdq6sZZ6ogfeeZTouYf6yLmwCDyTm3iaTSPtkfRYTUCEorhA1Azbt7fxUeFq4Vr",
  "key2": "5PHrgKHKMoR7pKNyjYw9SEVShCkWcgXX9QEm9a4Pr2idTBEQH8dRUxkYK3cJiQfwifvE3qcmYcvcQ3T2aHdSMsyQ",
  "key3": "2p2e31LmWzDrqWeqmWMS2WgiJHepio3UQExwSF4KzqCigJipVbdqonezLhQyf2Kfnr3sswm47NZKhAAW568CAD3x",
  "key4": "4jR9o7LZtuqXNCr2BbuugMPe8kjdkbHMN6nNnwF2UEmZWCYYghdigja7bFTnByNBcp7wWvK9pvZCJBKxpxqKKZ7L",
  "key5": "4NQYmoCjfyWPJtt74mHifShnzNmKroXKoLM928vwTPdFfQBZysvJnJ2BtVF6R9hpit2kDWhYQYkPYt9pZdsCrTx3",
  "key6": "p2iCgNpDRozZdctirsfPn1NwTkuTzkRmeNQvgva5ZC16P8CNDL8mDHPz8KhxUPB1R6C3NfrdNyc5tFBZytxDBQZ",
  "key7": "RQoZeuf6osJf8pvYsthEWgCx6Qvq7pdowXNtoChMJxEg47imzzaitVGzX4C4jP5YNMAsPNRx3oGnU4wQ53oJe1r",
  "key8": "3NZCppZnKkZSY6AoaoCDhgVnNoQmXzGbThPARVk7rHdFdZRtJKs5kz5S6ToM5gUJrjWEunA9NuhnvXDtwvC2JP8h",
  "key9": "5vpreEawdPCE2DJmXmzSFGFmqqjR5NXrAE2W4CynKwQBdG67Sh5Ec3XZYkSeQGFineKgyTspjo722yxDWcCKkzYy",
  "key10": "5b4pwzYGdKPG9LgZz1AcHNdK7LAuFCty9hkjfsuTWJpdioHxykWReVSvtoFtE7SCV38EoPeC7vBmaciUDay5G2Zf",
  "key11": "aVJjXDbz53EDQs7CWtv8sN7jrbvKPeGBfyuDG9TeJ34JVv6VkC2ucurrsyzZPNkKWKTxVQZ6FkdUAVkx4QHwrm3",
  "key12": "3vxUQq2qh1Ba7o4fJSTe5FNyjcLZ8t37JxXMcgo6ukK2sMRgrhWfjiM8jfDfiC2z7T8w2aVMuMYkRvjU489efpbK",
  "key13": "4PWTryiDvkHv43TPwvY9cwkNE53RjP3WngcueUXAiggv83kAsRvPNyY94UzZ45eLTjC7w3kYDAhviJuNxknn2itM",
  "key14": "2ap8a8ZK1MPQK6Ye9fBJjPtc7NzJpQkqPBjvSTE4SoEThbPBycUFGFgTBVw6yTfQENocScH49Xo9kH5XHbd6NPAf",
  "key15": "NTUFN6cp19NNeJsnTTq17eT5TabaXPV1wyL9NSUw8Tmpb48tBEDzVncpTFaBKQojpJHG7sVmzDPxR9QSy7zL9Wn",
  "key16": "5s7cg3nnPdMstCrKRqV8ogKKkHQ8fd7bEua3hjRtE15szEriANcZMyort1ipawVqWquAbv7t7nAJXXmm3a4q7cBo",
  "key17": "42ZzC8twojkRmPeSb7RVkabfJ2zTE3oHfhMbYbjfheogrBE52RqmDxrREjGuwVLDY9CAWK67h6xgoG4B123EYgDH",
  "key18": "5BmcgBQqgjGtZF7N5TvQpxaqaVskYVQDSrQM5MqSDmar66Vv3oZRJFBawggp9cL6RieAc6fesh4AFEBEnyY9sd7v",
  "key19": "2xVnmTzkTszAbya9sNRNL9jV6o3oKg9y6BkShwmFox4G2XwQBeo1MPSb33Y2h38XcjALR4NVT55VDUpTFTJBN36N",
  "key20": "5Qzk5qondTCfXs68BRupdj5CLQnYJEfVR7RAFNAryYSmYTUBqai8Lcf5MfyuqdafQDsJ9d3iuTkGw2utc47VKnZS",
  "key21": "28vMRWQPDTAKKtPy6JqsPaPynQ4NeNQqWNGfK7Z6u7dWkqV8tLmKRfiEkE1dSBsLDaaA9q2Wfzy2aqQwM7L7aSvh",
  "key22": "5R5NShj6ux9YjodddY2qp7eVn3h9A7hmBh7bFADwQykqFRdgEVJVciVYLHiYAfnqkE6o7k4vAMVhuxyj7ciRpxEz",
  "key23": "57G2JXFAvMAWLjfHW58DJR9toktNhbtWyRwu8tQFnw9rxtXKkCLAWWeufmMT9htViZaad1zuybvbPWxUw1R11ghq",
  "key24": "5UP96r6UmJ7mP1TAkgSRoHvNGbApenidKDwMgWvxDdennowbQuw5ZywFA7Hfr6DiAoFUt8mjEpuCK4fgnp6aNfF6",
  "key25": "4q8VAemDjiEqbAURJHCYJVzApgraYsUFR3czdcftreYsYLaX7sF7yFGakq7AYonzx1aRA3GmnGX8Wygcv22srvjr",
  "key26": "2m6hTFgqSePQUDMi4Xn2qJcQsA4jKux79X4o1Uq3WuK3BuwUK5cFNBADCC5gaKR2e7x9Hm5XKmerjdJTnyACNBWw",
  "key27": "22VmzWCp5Gia5nfjHd1G2fxtZhyWxxvzZBE9b8SU5cMFENErEW3tHAAisvk4khjfvG6VKHNNP2wSkQQNNXySXY8v",
  "key28": "4HWD2ajpWUkE3KZNLhpyMW5G5vcgUjjYQo7NJHcb1mxpAqqkVhAqk9XPfmweq566M1cJ9eirZNpVHMywYGkZQzj2",
  "key29": "2ymLWBzHrget4eHZyzPDdNm9vNPmh7vBGzYb8gj7c9vaueEFZ51GFXKpeCLVB26XYe6DHg8HNK62Cswt5pajH6T7",
  "key30": "3CLaPCRMmM7yXa8CRLwJNbVvBD8ubNCo4HK6XJp1V42Se17xhpRtYk9ARGEcMELJQF7LWpCAVVkYWtMHZEb2xWpu",
  "key31": "X7SxT323nRiBcLikaJgd7RhVDFNoKKLmKJVQ5p1HVGiY7r2ydewin5WyAnJvXzVJncddemks74eGq3VukmJ9pn1",
  "key32": "28yPZLwHVEsV3U1gJCPPydcqSsyFRp489hNqJNupDxpArvCDxK1Y148MVgg3G5qTpRDEi6S24vbd6npaNtUth3GL",
  "key33": "4g3XhtBTievXUvTSg6Xj5PoGFQefdgR8WMZ6SVMXLxZ6DTRZ7cwd6eZuFF4HY6Sbr2HZEoBxLSAzRRfjh4X27CKU",
  "key34": "5cD17isaVznFdtDWcNuG2SiTuHs6Y2mqCJKfBpoUnGf4rMp5HKwnSWPr1WDkgCzcee9b9i9LWpKQNmyKV71mfLS6",
  "key35": "mb1wneA2PG4p6ByGMyUEAx8Mg7W7pMLggsEd9qxntb8i2MzUv41qwiAVuNFz3E4KGhEYEVnrDxjUJknBNktf3Md",
  "key36": "2QMNxawwTsrNDCVxmituzav51H3oLct9U85xmi9TKrpxZjBd74poPKFmuJEKX7UBeovXLnKmBMsb5fG9U1qKRTLA",
  "key37": "3oaBgTekJLw1woJ5NTpngVvD9UiGaEKpU5iDFn55ZjLP9FajFmJjrzgkQrYS6HcaVCkfu8V8wuLpHw3PWmbE8nod",
  "key38": "5PLY5dUk7v1S4gUiti5kLM51V5pY5s4W7DAnH5aApwh62QKmT6kdrXSmeiLLj6nGCx2ot5oro71E8M5dUemvPFvt",
  "key39": "5uMS9GfWSfAsnG4kXvdmrfGwdzuTANwh88A8WcUxMwYj9FHGq8yYhrJiQi1Q8ZtTgt8874yT5PqWhWe45r5Cuw8f",
  "key40": "3U5tXcutTQXEMkNuKZ6cyWBu3PE53F72CTtQuLXsgT9aakZgXTVzVH1mftjVrhpt9asVnBcqSwFToUYFVthPpSZ6"
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
