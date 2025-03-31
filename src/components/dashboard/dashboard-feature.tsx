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
    "4sSMqby6hiDdTSgjDUY3qVcoR3gWWGoNWVSNehrDTYk1SrsDYjGzUNP5hu1n8x3Fp4z3NzTMLYVeosmmd2hR3S8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UV6DfLZbzUfKobNAGjjiFUpna5VkLzVaMHiDs1LicbQsdfW4rw18jGPMQRTnUAuiL5n43i9k4qAAZjNhoQLKGiY",
  "key1": "3RXQxs2HZdkUbZLp1UQB2eHGVpYP7Vrd2GezDets7UjDUHPoP2WHQHE36BV7z8CPaVjrRa9KpuDW1obGHo2Q9VGL",
  "key2": "26thHeGyWwViENLi9LBKCDeCxeB5ToLLfRPzXtMJgNFAWyk989hekeVdBcNK52bvx4GmXu5TDMr7tmmDFT8VZjvQ",
  "key3": "45DJmaHUVSfHvdrwz14jRJMnLFRqT4paNPSp6hGkyorUukPxv42uttHmy4HuMb2txt86TVzYPrDXasv6htJMoZFi",
  "key4": "2VpT1HpEGekUmTfWB73xoBuHLRtNUgwbV9qao9sNTpm9ykPxjG14c9e18SdUf8KyGrPphFAotG6F7NfuJKqaUf8b",
  "key5": "3oCeBb9cYT4snzPYtWryC2EZ1tHB2tvrEm5rwziPbpb3kWYe1AGcWeFav7B2kFr7cGqfC5Ym2nXFTZtrJmv5XZL3",
  "key6": "41zphCY9W4maxANA2KpboRQddTLuQiSnXNioAq5y6N5voTfe2BMLKJhPBLUg8Pxsnvpmf51Lz6ePwpuAvHcwSJ7F",
  "key7": "4pXZUxysfnJdBsdk131egSzEW3uUruj35vbnCCNb7zpefqXAfaBx5ra2kZFna2fwkSXEjfNTg8ZqHqtJuvv2ims3",
  "key8": "5rbB69A3q55FoSqke9g8E9kvpzKj4AzF6n5FaPRX8tYpMVERkkwcQfPd7vUq85RN8aWSPbJBbEmrCa7DHSC1jyx7",
  "key9": "4ZCeymsWRi5NuVSBbpJaZve9V8VeLeqHRC6xKzYn3CwmorVVqCGxppqDVaLL7D75B8qwfwtxtt2QFQLoXUXUEZs3",
  "key10": "513zsNEU2NwSNfNPt7Fd8xhBDHgaFcd2GD1XmZtRgFxopaVt8Rkjzf29KQviTHvrjKbthkiBvZdnKG9Qn89b7B7w",
  "key11": "4AiEjgnN5tBfNfncMbazdF52b7tqPdXMH1CGkHjepgZgj6JRSDZsxJbSr6vHg9xQNRvBcf8uRVNCE6VdpYjw6EYR",
  "key12": "4iyyW82JEQoApDroJxV8zASuAqEa2fTYqB71x2UY67AYBNsAK8wDxtqzMFgFb9KCcWTPZgAH4iDS6ucouhbxHqyu",
  "key13": "5dZ7NTwvWpyXRZwt91Ybje25t4AicJEA1TNtQZWMXRfup6E79aX2rKDipauJwNYvkGAgeoN8Rs6F6zRDuZxtzByy",
  "key14": "4U3o7uUoGJfnvAanSnstPG9vyWj6yDACkEvay22MBuJTB93FD8M1YuFdTgzcncHhF4pqmmVbJRzJjCgBgWCCraxV",
  "key15": "2YmJmz3ef7QiQJYHyQLf8m72TirqtP2F9yGQFjssJVaasAUKYWGxqCNzhLTSr6zu4wuuGq62GF6hWrQhofGv3vWy",
  "key16": "nPTcFS234NBjLTZCwGVA8pDdoumDxpkvobNjgcvJzA1FURLdPQ9xxYwvBU85jCdLWmnBcUAgdsZWPrJ2Kk9wdSQ",
  "key17": "46Gk1MqntKJJrdrqPjVztJSdDcyvkwz91tUNaD3YZuS13zFbU7xeZe6kb7KScuLCVr1BRswq6UDGSSKFQhA7LrK",
  "key18": "4it7PQ8YZ4DCrhND5ZPBLHnoVBg1Civ2CiGrftQxNAD1yVQEXhuWZbDJNzmXWLz1219fwPuDJL5D8eHGkLNupUDU",
  "key19": "36JLVfwkoSX5sddMLug1suwEUUwdfiwZsuMVSuhe77RmpbMUERzBxBUxf598FeXJ8G38zY4MTdzUe2VMR2URZN7q",
  "key20": "5nEXZDQJ88kmKx2kJwsAfQyth6Zp7y8WjasFiGkV57SBQZFTuA92oamJEtEfcZyTBGbqrAKpw8xjycyXojcr3MUe",
  "key21": "2bwD6d8BtzWXigg58mf3ZYp7tPeYHs5kdr1sduhxPaUKVu2WrJJWd953qekASUcB84FUiRMk4g5Gvg3TSsQ5PSrG",
  "key22": "4rvYmspDGJbFyffTWCpZc4DCoX2Wjft86tixhLRSnD6Xb9BFv6dD4ZtzpxMPdzFRtc6Pw2yfdMMsy6GuMVt9Y3km",
  "key23": "jVsmG9qu5V1EKJXE2f9ff9MSoyFq7RFDhhaR9e8natwtZgwiQ9c6Sr2u8XLJUpcRC27nsQBmq2PQGMjBKwJ2RAx",
  "key24": "5NsYMw52rNoBAfskjAGp5xsC8aJssm3o8WE2sbxZXVVVZCVj1CTrvjrFb93RrFDRXnH4rHqRQfpNiybLg6NxM6Ym",
  "key25": "2NMAsKpPLZySqAV4noTLdum9AKQ7m9fxLBJUMB4DMW7ct24psjxKgrDet2QzmrsuDtCq2WzijZZoYUiDhKjaFw21",
  "key26": "3BUMjq682f34v78FAT8gmNfiUwrLwgUtyVZGPAjdqmZbkRYSNJxxzBMjjnH3YFhCLhfc9Zx5db33oPRS9yfCYwFw",
  "key27": "28kMpGMu6CumRFSEMxufPMKJcmwV1yKxJbLGMWFuPrg6trpLRwqYscAwt5CkP3uZjWVxkcQYDf7w5tk87BbBE8Aa",
  "key28": "4wv4tRL82PkYZi8y6T7V5AXfGi5iDvtvK5Lc2r5NcRCBpR5wtAPdbProA81wpxCSiVvDQRh3ZBbPc3fPQLLPh9iZ",
  "key29": "5fUraBAMmcc2Y4GGWG7s2e7dH9aAZw8tSxZyf1FnuhaELR3hcLsxnDBkDjtpLDABZeLh1wc2X5xqxWehFSf1Lfjm",
  "key30": "3pdMuCSxDJraw2p2T4mRV2C26uoEBJm2iQFqj2SzAzpkGmUnrhjsEDED4aXecmFPeqiEC8NiMdphU6zi3TXgLF9z",
  "key31": "5bT19Hb82rUVW6SxhrVBSdfd6r38yT4UqEk4Zyv7A8MUUxC4NsVou44hUEtRUV59VhbozobXF9TdYHQeyVFxmCi",
  "key32": "3DyEzyTNHCXY9mHeP87W7YFxA3eUsSMawWJL2RjqTCz4NCGkqCvFKiuawriyNoKXQnJpiyLmHfHCbVRirqTkdy7B",
  "key33": "51HGWNo9g45HBw4juiPn7J53HFVEZR5BhVhwB5DakjfRFHmEhKA4e5FRM7xBQfg4mu6HJEQj3xBRTWmDxpfMyMnM",
  "key34": "63CLqqj1NTLs35986ba89ifHFobih2PX6ALVa2HE54YJ5Qo1j8Qw7XgpdhQmCD4ftX8vRQQj7cfJGaksbWgoJTPu",
  "key35": "2MmPefUv6WBiKtdWy7BrJzVD2pvQpaeSswV8iboe1rggusxaWqWyiR5PJr1rqWx4jWCvraPDdmie7u648zUPwwxb",
  "key36": "4JqLoRE2eEmqnPUDHxdvAEVvp4eNn1ZpWvzG96w54DdCVUUuwahLtRLq6xp2DNz1p9bBe7iCDD12EPwwKd85QzTA",
  "key37": "2PEKYeJ9sos1WxW4AdV2d6qtUAnC6bYWyEkguyG6i6k3NLFBsbh2b94aoUcTPYMNSRZ453YDC1dnomUtU2RyAqB5",
  "key38": "pktuU98EAjuzV8qQGLnF628AGsp25ZGW6yEMFX11kvt1NGLfLdFRbbvLVTKwQwJwGt4DRYxgDeYZWcDDttM7ocD",
  "key39": "2G57RN4ATuN8ex8jQm51bkUHP4jye3n4jU64kd3AdzZAiDZgVpWoPLCDyTo9cRt22SDYVyztB3LVU3bQwicxazZa",
  "key40": "5oCvdUHHNGSaGE6HfL5qC9D1khfP9RJY3M6tPssVwYeaoEo96gd3zohRqYjVqKf5ipUtLih5ZFGGt3XL1UbbR4Td",
  "key41": "25N3ENB2MPtGVbtd1Kp4gkXHvZwGqPT984w8zib78KdesiqoG3fP19XGLXcpEW2VJsk6VJiKqbQjYst6oeJZxp9N",
  "key42": "4BStp5Hbt3mSGYsVUQ3d7rRam4UaFpBcPpSG4Fze3QAZg7YecuVqa4JeHZizYqv5b37nzAre2PfxEosmUDBg31Xw",
  "key43": "5tNC6PTdCaCM1QCRRaKKqxdYbbASULkSMvFtu81KBmMtp3HPMDRJMsxeBV9dEusXWsumxawCAwVwUG6KMVmgHtCG",
  "key44": "vhajpQGW8z1KnGbQ6EgHWLi9H5dhR8KM8JBJ8pW9xbJbx3ZMWbbjHNWL7DPHXFyQQAQesFYzECAZAWQ2EbiCsWD",
  "key45": "4NrK2N6QNeivcey3Sn9zVF6N8QWhMBExuH5u6PuArxz81Fo2VGvJuzp5Z1MTWXrFMEnzfqCYzCD81BmTk96i5k4k",
  "key46": "4HaTDFSiv5j74UjLE2NaaiX2jcKG5wkTpbXKeNXdgJg8AUwGxsmcaG2GGQLK3TVwYodDXZLzbUS3TvXn1hJXS4H2"
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
