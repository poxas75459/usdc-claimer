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
    "4YZzGhomutAfesw9BKb1PMHPVmtp2daujHQatdNEFxw2EwZHVGLnkV69m2934L4XQexcL7ZE2fHiPdA1nqR3mhn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUcidwvDazRMZ3xvryh5QBnMpiEieFG4uihDG4xuzgt3oHSQwEzVG7b68FosMGPc2F5EBX4o7GCmQgYTsjidMjP",
  "key1": "3tfddbggqALah3SboZq911W6mPT5dcofrqDEG5w1RjAwqvmCBx2G2fXE2jeU7azFQUfBhbyEqfdB2SXw61amnMPn",
  "key2": "mEN1nTEYMTEeurRCdgTzFR1XqF1mrNQnBES9otwjWcjMV7EtNfh1v3FvKF2PGDnZDJVV1ZGy5E6eYsab3Nmvuyd",
  "key3": "5kPwW1dM5pJLzGGrebupEBLF41PbJcXTGRCnQGxHsuMcXawZt2TvAcV2zP5mp6yrzvdrTjpATpvuYPrxhRoejPQH",
  "key4": "UANVorxDPSHTdNVBfWtZDN9cWgSX4suFCyXANENanwZtKuoDG45LTyLdfyXRhTYM16hRxrQj5yfUohJ3egGXAki",
  "key5": "2sMadf91yJd5G53gU41eRPa8FDFBHaHUoNEF4WGLQemG2iGay3NZaV8rngsoCVym6uL5MBjybgEx1yQ4Kt3WnB9c",
  "key6": "4oPhBzqMXELMNc3m4seWwi7RA3P7TFncjZrJCBpyqCNqSEdgnQWW3h6J9zChUVUbQFRmgUL6NzmyZTofavDLtqzf",
  "key7": "26uviVnMx2MMCrGK9R5zuZ57VkrrCDyaP3GBfDJBysHUVEAutZ74BmFPw7f8HUyGmU52em5dCqDVmREBDW1Xto9i",
  "key8": "QCW56XMRh8Y18MBJNDb1Zxn3QSt2df5TgbB6321yYSMtLth8dzFYqHxoKNansaFu1ViHt3AKgVqY2WPM5Es9AdK",
  "key9": "2B2MtBe2FGZWjJQ8n7tQezx6ZAyXHBAGKZGE2qzNVWPSwVVY1xBtErB8VuqZ9zot9xoDTtWSzW53t9D4PxwiGQx9",
  "key10": "8bwcsgES5Nm9errPdEi4rSuoQoAJze9MkiyHy7E7WEzRvc3FpPkqGxym6QrgjcJUw3DprawSXNRYfXhJpUAq3jL",
  "key11": "3jyS5AYJ7VjJ2hwoNMCZNUX42ikjxVZXDpbC4vGfEXK7jNEW4EwmpuVddyMHFmWemKxcmHdygukEkCHe3P25o66b",
  "key12": "cQjbAcELqh4jgaQRaAKVscZ9xigBRnN7huHmmRkvZfUgCujzBETCeLHtLBn9u7aDJEv3ehdB4sWgp4qKWxBHE3u",
  "key13": "4H2ZrufizTxmsMY7dcDreDRYSWw9qoEjW15UXHm6uvbiqgM1bUHyqeMGnWFWVwF3i4gaYVwX5uGF8gYBHJGMrM9B",
  "key14": "2cBdjjiJje4pfHoJjKDqZVi8JeUpLb2E5SegACj4u5JKop7H5fiYhVbf9fdQBGjp3MZakKc7Pw1qecZwNoVfNGBq",
  "key15": "4JuW36yoirxPUTRtbqbwyDC5FbxzKUgNPrK4AC7qdnpK1SJdxdohkvT1ntnFhidtWdcWzq1KNRFiA5Xrm9nNwMp2",
  "key16": "2a1hvR9V67GWWserQR3pEd7ZssJG6DstnurwFQ7LdsUDqJdidEobJSPyPwyiUFw698CmUDFZ33M2qEJMZRv4d29a",
  "key17": "5UaJxDCHRuotYTrQ8TBXyknP4dngcfiH5VFfcpwVaniZ6roT24CaKxBc83YJTZDk8tcjWSjUrm4y2W4eeNSDNask",
  "key18": "5BPqKgHqMVWuau8DjC3zDVhmW6XsmeGSQMQh8GqwmY7ugFo2kTTBWQaJVzSX84SDuAfmcFHhn1MYRZXUG54nGhvH",
  "key19": "4f3Wg93Z9ev3BjWUzPZfMojuPd1sSscFWhk9AcMe7nX2n6gjNerLdDq8AkPrrPMTukpLDTx9uGxszafC1YM2g73D",
  "key20": "35GbHCeANq7qVwMsgQPV7EbnjQyxcfenz1hRdnwkY5hMtGmXdz3E8XspzQLgm3C3cp26eFxe8UXz1grWii1J9QX6",
  "key21": "2ZNUnaKoWcxWZ7VcMqRwooPFAnZAXidmCp6DujGFy87DPVtz7AGD41NRX9cpzj9hAv1h5xLfrawfA36A3fm7oKkB",
  "key22": "4jiT2Yb94jz9irsrdDVFPR9vNpPhKAvUEXsZpSQCVRSt3tfvmgAv3aLRsT5uFk37Ymshctfo5RSi2BwvSc5nWUsY",
  "key23": "5CDw8WPbjXiZqgw368easEFavmk5btXhpbqAVFNnTbtHHBrjPbft78vkkvzB4QGX96a47wGrxdohoRqCmRTYJ6S2",
  "key24": "4H1TACgs982MRBeRQMtoadaE1iktYN5ZLp4pb2aiLzN2kWi6nqZ243WGMD2Hje9odz7MTDrUgu116jdMzqp8keKk",
  "key25": "5jsLSYT71YcdBA5aZe8rukMLuSrXXACCUwTKBRoqiQPMfMRe18pVYXyd4QHujSbQfsfGJLpHsvTu6jAWgGJQcXCy",
  "key26": "25GH3HjkNqqhRiGd9Xb87Z6ajDeF6hjotpfCNLWNoEQXDemEqSCPBahRFvYtuodNYvBrvbyhCq24zn95SUq4eVUE",
  "key27": "urmyZhWTXP6h9cXvLMywmpS3YVaBsK4Wo3SWyXYHDpDiXBV7hFdHgVHTerv8B63CuwWHzTde3dFPcvb3VQMRXMa",
  "key28": "4VEzvU6MNjgKqaw77WcwpiYopjTtuZ9PTEJoSEeY6jZC8cvLYzBzGE127mMBirsibdcWC1MR72cUVAG3cswzDCpu",
  "key29": "5bR7Gpg23mXMmiaHzvyZ26p4BuHRYJfC3ugY7taFCqRCbV6VPv58s3Uf2czT1tcy5654Ly1efk9NPrXvVzbp3cPV",
  "key30": "Ce6Ed6LReSQBRHKhF5NAJtfFfWMYmkAxdJ7xm9MWcNCrMgkmN2UMJLegVwmhjmD3AhvubQk7aBsna2juwgnhe4s",
  "key31": "3jnU5zoLPfvvjmuDxLTGZvyN8B2goVxQNce1TzYzSdTaMYhXFRc8su2U4FW5ydWvvLtFJLcFoEjxa5QkjLbMz2XF",
  "key32": "4sByGVtWcQWZ63VS9EE3bBDgJds5ogE8fJNJ6nBHAc6SiUGa4EXgaynThTqAvTdZvbCsTGG39cFE9TM2MbRRHvp9",
  "key33": "4qYmuW3dFdLpqSrbSLaNdyqyLacwWm2Es7PxaNQW4vBoMb3xkCNPKisfrs8YhudKgWFhh6JDgyCyQZJVBX55ZAH3",
  "key34": "HULgYUJMpWwjLZ7mCVkpUPjcxU2GEoqGYzzRS3tiVuWrNDp7sS2DnzJWU2icbZRgUb3dQoPgekjCfBsKJo83i6J",
  "key35": "3UwTdhi7U9Yit4BnRbkhAd8Jo9td6tUKADLv5NAYLE2xueL7sYB2rwWpcsXqTp8JYBZtFjrX3coREjqX3T81aBYU",
  "key36": "nmb3xPTZqFFmDAByicJgyJb4JiLeoxbTiy7KfGcKCFKn3DR5ffycQSaYFsH57H4XdbTmiqmvKsw9RWg7cu7ysh7",
  "key37": "2FptXGKDnqAbSbDQGoEszYJwpSzbyoWRLxfVxLDH7GrzjSnDxuuWVdeJV6xJTiahGSskguyJ3ZETE7MTb26yJszM",
  "key38": "3uKF2RDdzxFu2TZ9YdqjSA5k7VTVKhNGUJ3rWbSJ4kVE8eZBcyiyxFscs3UYL6w2xcC5n2sm1njUFZamvzJoM3AH",
  "key39": "562DzFydzs1hDABziG3T9xhyTgafCMBFgEXu3irx4UBrRSZHvE1AX9BY2qNwqy412GuGk4B6a7jwScv9YKhAne5P",
  "key40": "2xup7Qik3TCZkFrQKE1vZRJmJhnSFZ1vUg2UGSJCeCr9sxqdhENrMu6aZqRu75sWZ1GuyhWgK4s5Sv6NK1xmyiY2",
  "key41": "3HUvAN8uVKqEbYu9aRWqJhExP5ENmd9YEMo28tUndr72fRLchx9BzEvxAiGb4aJJSRKbU3Akgxj11chwdnhQZGZY",
  "key42": "3cCeWgNEKZfkWF1jxjT6RBwGU7MdTgDpnLNpTs9S1N2BLmN4mAhqU5Ais7oMjgL6Ztv4p3r9wxdmzbEej2apuGiu",
  "key43": "2VDxEwpXAnVthQiuYBWwMe6vnB7hyVf4qhiutWFuVqwgonAJkSEwaXNWrHvYRjsomQnNFUYhJzCGChC131VktK8z",
  "key44": "4N1HM5AauxcjwXq4hS2azWmqHjEQ8RPb25f9PJLkvirRMUoSAkijera1gQJfqfg2Li6vxqE7x4YKC7R1fFiVq5Bk",
  "key45": "42g2zvfBWyNWDZedguJnRHFB4Mj2xomV7hd68vN9QUS39JySBx5R7GB31eZvyWhALt6dXRekmMYdpLY8bjbdN4us",
  "key46": "3z9yeHjgBXiPsRGYBMTtwpEYY9DVZt5CMBciJkaRkDmnCzbbTANSCemJgcvBFQAsfCnaktL2cwATfQaj3wZkPwBM"
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
