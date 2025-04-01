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
    "4wMJJzS7y3MVR2yw7di53tEm1CH52nr5ifWyi1HoYqkX9FoWSkdn7joUd69U8gNF4Fiv8VThPpmTkKe2cKE1rmP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c45xkxgf6LwHzhKvkbRjHU17nCnrXxscXVSUeASpEvMfRkR6GQyMaVA4UXjb6USmoRD5EYd4FajUJpikGpBoKKx",
  "key1": "5qHi6sJRu3oKHPFkkNuCAuxaDKpkFoxf5waEV7QMP3tSaYPBwCE8h92iwQXSaP9o2pNVKECPaNuW9aABVzCNBA1h",
  "key2": "27cZtbutf5ZjL1b33B11Pbgju6MTZPcg3s4NhYPRJjw9Lyh9W5r2nu54QnC9xzFsWgYGEt3x5qHnnMB61BnUitTn",
  "key3": "4cybze4L9PAHACyPm49y8utSXASHt2BuxZoFxEzzJYveD5usrJcfsMdUqdqT9SFsXYDvK8DaTZKsoMbNKLMxLRmb",
  "key4": "36b6R1JFj2u4SrBSaNWi2Qx78ZuYKJEJxtUfKh1GBDrA6UZJ6nUbD8EJsSdDYMzRhTuGwgDaamcytBHEAAqZCvZp",
  "key5": "9RPmY4fEmJEFCBD4TsdwMgYagXUnaNN3DTD6AVeBj6nHUTEBNJCSR2GmksyYfSXTG3AqSqkSbupo7KTKWsYgU8F",
  "key6": "2so7LNtWbPPMdE3jgAxmCvGdpEMEg8w1AztqMa4eq3VPWb5vWePcFwjK9WJ3AGsggCtAK9t5vB9Uyozfhmaw59o1",
  "key7": "3ewnpfAXMa2swsbFvPcENDUAEEnqZVbu2Px78x41XgMK4mkAnxnNhpsepmgTaXimYVy5ihWwg6Yn4Mgu927s4CQN",
  "key8": "63Z8MUAhGxjfRif26mQme9MTAMdGUJo5Pn6DBk9MyFgkGwqEriqdEjmkhhSJajT6r95EcMLT4WHJ2pLerxwnkVEx",
  "key9": "3cv4kc2dbDCSBhsFU3gYZVbBHZJudK8EMK9eL7sGuVhAukYC8aheL8YY7Hok4oTihGLbLkjAGSEFTWTgRAgxgCit",
  "key10": "UaujpPXM7yfE3YcTqfbSZtUfPzwD5y1VUYMmctADhovqYuRkDqf8FoazhtbqArbwhSq3E3R3ERDFbuQPN6FNibe",
  "key11": "3JVEcnNXu83T438Bn8U9MJ4jdsSCoQPSEc6JgSEJELMs6yWn2QapGNZb2KP21ubQHYjY22ka8Jq5J9z6MWBa6sb5",
  "key12": "2ezjecZhDfS78BkMghSWnA8XCuPeZd18PSfzNxQyus8Tqz5fxkTSwhGJa2ifnW8sh32icUS4dNJsnD8C2R4bFSpu",
  "key13": "2UJWvEXinj9coh2u2jWgriWSwXWisPmV3o7Jed99YQnCm6jHruGGxKvsoGBYnYFT8xXGAv1fWArHYJmrc2je3ncJ",
  "key14": "54nJqNb7JuNfTQwzCrCtsRCaGU9wEC5SbDZXXCnNnU3wN4DNKd5UbPsMeBwW7DDuhU6VKaVDr9J7JF4j8HiHmiLw",
  "key15": "gmJmcFhGihqAkmajNgPSbokpR7tMesoZbu1aEfmCrD7TCk7QxKWcjbDYxgXh6eBsnxDsXDsjH35jthRAJdRcvxM",
  "key16": "s1AbWBqYWCPsK9V5f91TwraSTJjuMMt2X4T1SNJeeyrstAVfD8p4DNrPQ4pmUQYBYmFA3BNfLUZhpe3pbWydV38",
  "key17": "4FHz6bi36DQapZbwbytD7H5BhfpUzFXfJKBGdsu6iwsRYXtP8G71q2qQFzmah8W9Cwa3qH7Zzx85DDp9FdSKRgsz",
  "key18": "4WaoARwFXoUSQM5VT2qzoWkNdNojfoLf6LTE1hnRkRRYZ1QTAeHxGfyJ2rvosAyaovdLmkxR3Xh3BxpPJ7N3Lf3Y",
  "key19": "ynz2FX9GfRtJNuGvZWP6nrDb8LeUapGpyBs4j4Ji5LvRrnNzS4zAKkC5VuFGyPFN5sGZejcPrg5GMDTSg41yarR",
  "key20": "5paEKSLs3ThtJ7Nsz9hwePEwA14AjFCzG4C23YmWEgoqy8gZZaqu5vzHLxkm2sdBEJLyHSxwJqvFnHfsZkB7Uz7s",
  "key21": "5jCCALw7ha2TCWmL2ASzQXoPsTzGx3wiVY2iwqLgGaAvEz9EdW4Y7NJe347n1rVFxRLeKmdTaCxaNUarA6o1sFNQ",
  "key22": "5H4p8t2wf2nJTtZpGhauZeq6BTZSwymWosYLCKrffPrbBfKPozTd4tCuAuG8rTchPazCCB3TdgkC1xqWF3Lr4n3A",
  "key23": "2TKL7Bk4prGbqomKiBgJLVCh97LcYarB7tBxNxS6oqMsBYJr7ijbJxHVvub5Y584yVuv4RpxVpkuwZQeQuNSZLdP",
  "key24": "2WQ68PXPqhKbDmXGcrLqApNh9ePtQNK1oJdFdGawT9j85cLoZDnS26LePUV4xXWzNG7yNC25vvgww3AdudWNEaFW",
  "key25": "ULoMKXZzScmvPpfUs3uqMZUx4isvDZQ7EkYTPZFCDM7NMkmEZqAM13HhTggJzKURncApym5ifh997gHrhmAACMM",
  "key26": "5pSFjvBhJCPd2yhVumKahMzpLkj1BaG1xM8YPMmYV25fii7n7T74uqhXZmZZ8bKKxppvxS9iqPv8DakCdG8qD3GQ",
  "key27": "2pRZPcbgJqtR1BeS9MuMSxkQ7aMQNzi3Dt5YDHztPdJHCyNtqHZFo2RkZru6fsa79HuWQhMhwKMNkQNnSa9SfhfJ",
  "key28": "5Zy9wfZsPmtwyMM4n49mDffiPJWehUktWgsb2VQAM6J2iToo8Z9jw7EPoSFpTTpSN8ZapHHCBVNsiEMGW7YVhPYB",
  "key29": "3dzf85EJFqNAy5FQF8GtqSWhEsYwoZiHjzJZmpHyfFwu1wVsDuDFDQSu5YHsbeV8xonq5Vx4yj5R5UJro7t4xQ4n",
  "key30": "4YvXLFEUPeUBQpVy2Z2UNLcmVbAmK6pR81A9TqD2SJr3qPBP3W4QCVkKVLwKzVNPJVXtF2fWHsfy8P9kkAxFipsr",
  "key31": "3UpsGCQX2fAn58BNfmvSRsoavsLVY6sWg7MXZm6sU4LkyfXdmzGi9hwpiT8MxsknUhovFqgUVRuMaH9NS9bHANHk",
  "key32": "5JKxEjLHbhAQX7NwtGUKhbxtnejhCamPncRwavALUdjTHGash7pVnmsLo3xbSnUDkqi4zFLdEL4zQwZ51Rz2rr4t",
  "key33": "2zeHUtRpeeJ6hHNW77gFq5jGqM6J3znEsLyLZFLRJHcW7aLuAyrXSXoB2yqK3B4k1di59LCTyjmxFoW4NfkvGrs9",
  "key34": "29xmSZ1MJsvgHoXAAbszGAkqpGXE2yh6XdS1ukYEFdiYR8qkjs1LkadJJSjQCHuvw1VPyympruE9ncXnUcZRA4Gv",
  "key35": "5EPXERrXL1NgADmL6JuUUt4wE3FH1FAeNAmtj6JxJWE8HxXE3zUsLuMD1EhxsuxNDLT4djuyuRMYVEkoXUnEmNBi",
  "key36": "BzfPVRoU15wWJnuYCR3Z9LmCtW63CBBtPnb2LV2GHEzooeoHd8Yzs7S7Bnuh1wZQvRmrZnprFsVRjqE52FREJpC",
  "key37": "2XSutoLRjRFnxTpKAHQZiVKhCs4YPcXs1SHd1kZYxMib3ob3ZnsdCLnhmAj3zwDubZ29w5SF4jFSWMeAGxNz81eh",
  "key38": "m92aVGG1Wrwp4BoLJgU9P6XHsm9m7WBkJcFs3PweJQCSMyjyT7kxr7JEm7fGqSCtnT1zJQMpHdkZLwjmtrhXJnD",
  "key39": "2tpV1SmR2peKszUNESMfynEaL2wPYjH7BndGQAqraQzWbdkFAuTm4G6r8m3WQ67xHLwWndUdo4Uqs7zPNVMFbB6S",
  "key40": "3wjxb8hyZ4SdGje34Dcj8QXJKMXSoB2jBqC53SPYic6BAuwxW41Rc2Bsj2ytdeKWx2BJTn8LhzLCsghhGNFGuy3W",
  "key41": "2J5YY1MtXLr7VLeU8BJBaEkfXPEks1EtGqx5irjwgBK8u88bxLj3bSkw6bFbvEdJ6ne5pNhdXsHA71KvhFHdceJF",
  "key42": "52WPo7oVbsu2CJKQPsMkYtmQ9kMu88ynH3zF7APLx9Yx572c2wmJpprNkrB1y2CEjTTnQRnkV4SjxPfhT2CraAJ4",
  "key43": "3qpk8FecfKwdk9J62kpLgQEFKMnGHFmhpYwGQxuJ4QS4vppuQCcUuXuEPDRUefgzjZb9bSpVBCcpm1tDNbYHpz7j",
  "key44": "tSaEemhTa5eMDYdwJLSNZmWxXSrXd2LNRidTgrYfGyzaaCdv3fC47M3mQQWzUcyMPLS1UzUeE5BVowhVd92BAjK",
  "key45": "2qy8N9c5svSSrbeQnmYVsqKGtsovdxUMYCEg3Gzm1bqa9RjFMojDi2nAV5VbEu7hm7of2UGUvjhmb49AkmFZXEte"
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
