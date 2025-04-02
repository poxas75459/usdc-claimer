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
    "5uPqgeNX5CFyTfDfJhEj5GCF4YpTFTdm9iurCzNL5CyuN92HPeGZUMAi2oDeWBo63wMYvF1EEzFMfgkpwGbVXukf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9jAScbHqgcj2eUFPdVKfD64GtrELU1adyynSnKpHmp3zfdJvvfHBzyC2UEZF5MHmkAZgTVcWhTmpqdLV1XjKUw",
  "key1": "4oJ7m1hyHGxUSAATsSWyVgqYtFxVUwT5G2WD3Whcuua8ZqWyV2cMdvZKFwH14dxavZKaT3qWD8TRcAHqiLV4mfSA",
  "key2": "2fbRJRJ21bS4CCnrSEBiKiGe46cAhykSPK4RvSUN5ZNDRbFWKem121ZYFyhvNvgwg378fJbnWbHioxaZqp9yhKEv",
  "key3": "KutA95vxkorowkXx5LUdzsXiMawHBHdRUVUdwUN49AJo69TfoH3RPLXn2bFUmNCwtjv5cQzpSPU4jzJW4YTS8Fo",
  "key4": "5HnGdgM3a18kHNkw5qyiMGCZGm1nz2bArY84J23M3hCtgX6Ar1koCs15L6TLfuKbbRsd2UTtcuFc4nostkmtWWeo",
  "key5": "GfKmq1YKmeQFyx8Nr7jroN34vRL4trQsFY63dLs6b9gJ7qAvCxsXTSbiVabzFjJqLByu1ew3VShzTY17z2z5ekP",
  "key6": "4rnjtFrrS74m9amZLtBpesFGNTGVfWr3HGYM4q31v5RgoESuMMY4eXLSsMvxzGkfjaLKsjhSHyJ8fGNrx4obBeZx",
  "key7": "3ZjAouQbTXJ2yAGu3G7dxRanT95Qcz29AoU6ZWrFdMcdeZYdm4M2vp1QBrVGUMZmX529Etw3PmLMJpwWj1fMJjWc",
  "key8": "5DvxPYo5Tfk9bxnYuDPR4fg9Wd3VW9pVnMXHCrRkjgwLHtkHscDve8p6KxFa7K6DUguofNoR5R4gnJzUhFxPEHKN",
  "key9": "2RDcV9ubNCC849zVW3ecV1VykcJMSyi4ZKMQd4rwvM4ip2cFvAtC3goxhr23NXwb8YFoGqwiL2E6BxhaP7wuQyDG",
  "key10": "4Z5aWWVUoEg6j6GzgKrNhe5ZS9nFav1MnxqiHQXReVLDK782G8GgSTcXhZXniddG1992PXVT5xuuBEga9m7Gmyea",
  "key11": "4Gn4Uq4gjYe6BsPYjcpUD4H1jd8cbBvRDaekM4sSqzFrCax31qA3Qr9EcACq183JCLsULFot63GSmMCMNWJV7RYq",
  "key12": "3TmfpDSjr1Kh42gb5SVzHvYs6k3Ur8nwV4dqEetyyxhCHpn2WS4Y9tMsFh9KFBf47ebggBHGNkHN9mU6feZitLSV",
  "key13": "Gyqwp78BD2iPw83BRZH6Ldv2KA1Yf3XPixRaae9W78JESoFkmwYyK9KwVnXiUB9C2TSTdAtun5xauPBCx8fyukv",
  "key14": "4vRSBs62pgrvqwR8SVhFSvX4bioSeHZSSYMbtL2p6fSBjcmipF29bLLhiD9M7Z8dbARA6sJvDSh4b4uBV27wfMSA",
  "key15": "5KydtFZUSPd4bjdx1QrXRrqGZdeCWYjUXJkLfo2snsWbMB1RGwPZvG8c3jPAA8dup69waKbf9wbie1dCFcPMnzhT",
  "key16": "2oWHCTSp5KU2yty9Wnq6FqDnwUcTLexSwirHJcLUDrjWGhaFgXVYa8chefht49mcyFqw3qhp1wqNFBxMJ57hXYek",
  "key17": "3akyuRCgvnCs26u3aCXuRayup8qqHsiV5AQqXqcRTK8cuPfKFfcpbvEswWApx3E9zRoG22SM8T1Rs7eRoNDU8CoD",
  "key18": "4cBRATuM5KqcWr5JE1JAebygt9xTG2ixwfahbbWKHnudHce2KQdSNmAiDvGNrwGWhnWenjmtBF5GWZXumqxPuN8S",
  "key19": "3AGtKiJxU6Pqqwvc6j4t4QTq566LQQBKfLs6kT2kLrY4R7qJWs1JTtG4WCHcQ8LokLHmpAANyfnHUhX8CNzrM7U7",
  "key20": "qqYdeN3PqbBWRGvs2cvCtojfFuugYABR7cLLsyjHjSic7i7pVA7cN7Mc1k1gV3ifno5TX1oMhWYUTmWfnJpXWw8",
  "key21": "3AwdkNnzQnUTiPWdthpSNq8EkDjmZF8ag6av2fNNPdQpGKLWwt1HwhoC69L54Xic9b6XPsfqB1x9aPC8S7USLzT1",
  "key22": "2KSjse1YpCbD2gYquG4xyz3ySXX3QcG2NWEZ7JrNq31xMuKTqWThupy9TjePpVMxf4rzwwzUR2jTiyDFP6q1EFnZ",
  "key23": "35NxpGuoKXNJguEPRXaTfCs3tazmW5mujisThmKvxAEA4BBn7HUb5bM37GeKGpLQtsmn3MzQQiTWYXL1ry3czYSi",
  "key24": "4JbD2widTKjuDaUmucyLXUyWBXVrQWzjmbTKatRbhtnzaiDPzT68ToWuRKRK7iALuQWNma2FCWc5GEW2gT8j2LcD",
  "key25": "45AkrWoGDX8pRozcKgivQDMGjSR42yJ2viVxuS4rbDdjdrkJx5YDoDWtQjxdj6kYBuFPiR4LnEychcbaBCCydre6",
  "key26": "2PsWSXofdP2kVM91oBKSWZo44FKCd1o7MHBfiRoN9aEFbV3sLiq2p9WogvMpEsQVxLLj6mq1xGWpSDGpTakUwaXE",
  "key27": "52BPJSqF9ueWVDVHrbkimGVpeEHy5gEnVw3Hqy3weh6LNfTU32cCCHW2p9anqbRJJXwABzvbNDv579FnvQvzFHYj",
  "key28": "5fyu1Xw92mmxPqxraneUoxDgGbs3jftqnEG8ucf5zyQYoJ2qNJc8rMJmRyrpStcmu913E4QQLAKYKgcMSCd8ztFg",
  "key29": "5zb4u9vX3dMjvJB7AzCixhCyHtNrAoTZnpWnEpFX7u11HqVsoRKYbDLBzry44DupXpMz9CDLYBTQFN7EEjoKdZqz",
  "key30": "3YGY9PPaaaN4VG6NsRZzpmcLqmykFso6kvouLZjjX6jkpjSBQwgFtedPumVSbDtbDYmUdhB4eoyQLxrJSwQgK7Gv",
  "key31": "YkgzDbx3raHfB5GJ5EsDTBzVRyGV2ei7k8hgDJgfJP5uGoMuVS79B1NMrhQsaaebQgoHtZuULgg17ccdq5nMb5s",
  "key32": "WsLm9pN2M4XF9ESYBzTnJ2EuozZbhBopojdGsZjACwGJYSBDxivAeWsxHk3WTR2q3X5qzYnXH1cHz2Fmm2GS11Z",
  "key33": "5zrtcVszHi9wfAY9ybEm7tBgEbgnJ2qxj5gS8P7KQJTjCTNGkp22KZTPpm4X2AiFBPdh1RG4qK9u1k7ygpvTLXgK",
  "key34": "2W7hnYYMXm3Mi1gNRcNcXs8eRPsZZJjPTkULPhEp9hsv2ct4B15FEyZfnqQ1hmemcJ9PX5uRCybs7Hq4ihFLoyF7",
  "key35": "2wfcbaD6uYp4EVujBmxcg2D2Mj1viVDSUPt4TAAcvn8oeRWpUzwQR4BRTKGFpamy75Ljf1R6s6BjdVtWD8nsVy9P",
  "key36": "w57zMR88aU7VdCay1udPda2LyrqKBuWEt5ivFA52cviVmBa7bGDd26zb4Mnz3m2fGhBGoRSW9tTsxH7PbWCCazE",
  "key37": "pu1vG8gHtu3LhBRosp4XcsdLg6fGEbxfwfmevLw2cQQCaTVCUt1oGvpJCHbMXw6ArczcvSdUBMBYRE6oNjLgrsZ",
  "key38": "3V3eJTo7anwj8TVnWfBUJhEzJc7w6p6RssNJqiZyuHcBEa8TzuqVYhQcudGDSjd2EHFgK2CfhUsek7mZWn8KXQH4",
  "key39": "ZfMTuM9Gtcw5jm5sQRKyTXXGccxxqLiA8KA6iAvAUGyfkVyHA7DWmvMbm3CP1ieKFBBSVPwzFgx9LU64U76WYSM",
  "key40": "2kP6eTx5X49r4JPu8vYwNHo1EhcBSWEB3oqjYx4pvykWUWzkyfcT95qDo3RQ5xNQJeUajxVmEauvZhVuu2P8DDos",
  "key41": "3JP4vFho9rwBZmeU3x5MzSkzU5sGEAoxmFuqFzZpWVx4uhNNXTCH7fH8a549iECjwhKecrsk6BsNgRr2V44gGY7a",
  "key42": "5mkKZF1sMzjVPT13JBpPPj1Zy5dJTaV3WJUJACCXNdBPQbbYQeKU5kuaC1DjDL4YXJGgYEduVbLRfdq7KLXHJxeL",
  "key43": "2fF68oSPXcTwvUsEke1kW7pmTvmfb7awqsTs7vQoc6x9sK1Vp1rhNDoCm2TEf8JabBL3AuNK9ucEVW8PpeTPRJK3"
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
