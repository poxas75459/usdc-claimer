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
    "49A9SZwfXCMTLeBALVf4Y9CvFvWeQ2rALvXJDey5kDQKzjcFpiGXyec9vUUeewRybNuWMjTVGXBKnDkELJ5B5D7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSnKTFJbXJjcEKUa6yMmsiyLo4RrPKYd8mqv6KWGNLvMkG4bxM8dfid4QbBAwKCq4KZ51NnsiSkWVAV7ShD9FfQ",
  "key1": "2WhntrjZc5Vu5MX9FNyA7bGMaXQCKtVnrJvABrcF7fy3dan41Mti6QeUg4QCkHkWhZzuJptqtrnyURSCpcwtgd8k",
  "key2": "5XPhnvp1WSq33sKpRs1YLQE6cHCowh2PhYLRZFfMWcvSjWeyD2HiSo6M2yAKvP8u3g3jPKhsyCb741XqEoQZo3e6",
  "key3": "4VPdUdQfBx47AmUAQPt78UAsv4gwEcnpDJ4KgEhuzF21mETBRc4q4DiFMcQKPjyhg9o2A9zCEb3NaSq1VYoW3ZB9",
  "key4": "Ns9DrGuZevYni1jCYMfoR343yPE57NW3ZWfdXMG7xPECe1eWuCENSDMNXiWaMayMGG3wDbzujP4fzLDU7HmiRPM",
  "key5": "eCLWC4Cg82nMG4u149tpGBDT9qjNrVDLUh5sBx4EX59oj1mWke9FU3JfxzgMbfk3UxaaaQ3E8wHvN7dJeS2G6aS",
  "key6": "2nfbABtd1mUemDGCuhWnnXAuziMZ1CAZQaGDBXpchrxvWStP3jq9idiwTcM5sFGNcfZLDmPXJHesjsLo9mfHMwep",
  "key7": "2uTS66VAfjUJy6UFQny2TwPA4Cqw4n9tfQUM4v3ymdA8bkxm4dA3Pj9Ux53cG6vdECmcNLyyFBSBHWt9CCGz6jqS",
  "key8": "2PNeZ3CsNXGiQoE9JHTkFuvH2SSfFWxBpPLUftm6XFTHs1C6gtKRzj8R7VXBMJwCodfiNJQ43hvocyuxx9GhnN2j",
  "key9": "2HAy1NRAd941cDa8P5yN3qBgYdsWXEFk5GoaX41yD1dg5ypbHMzWk8aedsUTXSkzPtNezrapbvggorCHJJ4Nz4hX",
  "key10": "34HBUGvDEaaHNaosEd66Cpo5JJKnC3HFSU6X68FNKFEVHExEVi6HBETeUhyjhVq7pobZe2vvufNuTPbsLUU6R8rC",
  "key11": "4ciY2bfaUFyumdZvw8yZj8GocqnD6Y5WCHdVuowsSREpNsGcHE2T7y5pFWquunPEp7KdCfBQHZdS38WAQGgqxXvh",
  "key12": "tfwYNWBZA1MmVCtyPJNR8xqsmPEt5tdR9GDaydp6F5bhZfrgyhtkpHefLFWukqQLiWUNxFLHk2ot77yU2QsMJnR",
  "key13": "VtFY5BYLMiGAY9gZ1KiQTUajqhH3NkmWAzvFD2mv5RH3BNDb5UU6XSXr8jMWzFpK6udBLH2MggNLnvfXgPuRJQY",
  "key14": "4TGAiExZrAbrHbwykybquiqnxKZ2S48AiAAjgJzxQDdysFjMwHc43WhbRyunbCWGVpceApgtcGTSKJLr1HMW2JND",
  "key15": "39z62Ehxx6SBVDxjYDpUPT4cbZBSnxjU5C4xvazHDb18GjV7fs588W1Yyv6wpVW18yWQnStpqjfEXUj2zaDxMPGA",
  "key16": "zffNVcuToroKFdm2HvYodzuCZYu7Jzqg13j8bQNrWeJgE3qdiZTYqmKhYqaGCm9exrwhnbSB6PPBcu7EL9zhnUT",
  "key17": "2U7WaxJPugv2GwgLdKjig5uGGQZxTgTbguSJri4NUzeJ5Y6LgRbBeeNtVXRqiS9d7YDpqtn4M6WqqnpX5gegVhQD",
  "key18": "3iXz5PdU2fMB6baMCPRNwRNapAtCH2RztWFtUpdJ5y7B8w7n8fzhWyibLeoj6N4SgSosbwQacqpCQR36hs7ZmfA9",
  "key19": "57e7NCcq6ByKKDn9L2B3fGuC4X6YQibUCKwBm9YjuEoGgCtTqq3hWDp8wfnvRq4cQHk7ifyENasZ4tohDbZyyu64",
  "key20": "2p8x9Y1zbpmy85Q78xXJS5zYifsiMm9RtVw6sKDUQtxfDNbgCdkPRQFScthKFiJCqW3aPvUrvQADdwuXrG564VFS",
  "key21": "2AgcDg5jqntBQACywPkKMkbPLZphCNQBR8ADiQoWK2xmXh9H6VRGVdGeHfCGNyazfTPgMzc4fgRSA78VmFSjt2XL",
  "key22": "4bpvKosB4FAzJnbCVqTgqwo8arZFZ13x2mqqBvLzd5DDK3wfWkXffALJZskYsJnZe3X91NTeLavNpTxZ9U2KGoP4",
  "key23": "2PZ6oacuoZh8cb1xJ1SVfickQbRKGnQ51UN2t3EQMYQmLBHUCdMvYNw7XR3V9sLGNFSDpeZtVfxV2v8hxVAjsJMt",
  "key24": "R884LQVftzEFv2mxVNuKTgcjsTHTbfr9dUdeAYiGRkm1s7PR5dG878MsuFzMJrkSGhnPgedXno2Ls62FBj9SBQh",
  "key25": "3VfHsMUdhHmXACYRhVNJ7w3NMGoYbeNLEwsKyfezpLsLTB5EzyJgF3ctZzJdr3uZ5LGmt4iG9petnmiqwBeApMJg",
  "key26": "W1YNpJoVyp2PRfXDHqdFmsAauzm2jwAaYCAumGTxmHX82Arrgc79S2d5oNwak8gpJQWYgwvBWsdmK1u54LscPen",
  "key27": "3Wd16cXkQjLvbfYjUFT78mgHkDCcyrd8sXuqbStsrrbs717Zruk9atwJY7KEEzGJpSgqmw8aqU3usknEZAf3KWbX",
  "key28": "4JzPQHN8QHaM1QsPxskBLsXc71DhhdJoGDCMtH5paXKgUFET6CvWx514AdgTFCTgMdL1y4StFVK7SksG5UReyitk",
  "key29": "4GuSgARkbop2wR8uYWDZkheXH65btxc73oGVR9boGdk1PtssYBGeXNgQjqYDqBUDQ8NKQ5AgazvpQU3bSyp4ppAL",
  "key30": "48H8zA9JVpnjaKmLQjCXcuiNVWt1n5jkVuyoe83h1HYz28hFYaTjRt5MTHPUSBuUBzGdFf4MmzbKx8eRdhveuDYA",
  "key31": "3XQ3SoAM7nA3N2qnCTqQhTBwNFJtV4EABastRUhxpXcog4i6ULZH3JnwJQ6WKDW3YqrXPD3GphKwB7i66U5fXvZc",
  "key32": "7gqiHxV3cY2TZN5MurjrShzJen6Uy2ceohfUxouorNFCzb9JQmNRQBeHk9oes4rKSscMi57nLbbjYHXTqZx9bEq",
  "key33": "ACRM2fCFZLnvt8oPPH9xXhvX2Qf3WPKRfYShJAxX2ZmgY9A3icEZULLyPJ6nZxQUTpSq9rRpp831J7pLrJcd7MQ",
  "key34": "2wZJnCvsqpKp2rn7dXJhdSyiqNUDteDvVk79RgpsQohQuiDkva8k425ad5sAKzYrQRHTnrV5iP54tQUGEvfSX1xV",
  "key35": "2C3EXBGQcUdgHR39iQQZ9io6Bz81VaSBCJeDoexbv5tFXLHGSmzeZp3XhcTowfqe38rAdp87U73y22QwdPUj4joG",
  "key36": "5rYGmPhWtf2Q7EuJiWZ3xhHhwjaoTTYtwTJrggQaiRMBDCbJahcZQMpPp2m5EGQETiJrvhQa313qwnEaKGgqYneg",
  "key37": "47DvX8sQE2rSHe2KE7RosJruScpii2Mcwnmgo7LomTRS2HJ7SpmpJYfmQCASBskkuFJcSYjNanXcmNnDJ4yVTZTj",
  "key38": "5wXQCLPpVDhmpyLsqD9qX7frNa5cYAUj6SeHLPT1LTynhbj1geZoTVPgbje5czmnz8byySCV6eaMLzX1Wn4EYQnD",
  "key39": "uWgKikTrQvbGfneagRm6dGE79YxeLc52HC9FrnaJnRgzTkG8pquRYw35YUzJFZ9FUoASkcbfRm7wRsL4yQN8rkw",
  "key40": "4d9PSBvkYnTTCqFB9k4dxdztADLQoG9qUa9u99Sen7DxswUasvT6bizyS5QmZS6ASpzq4PpSN54tvs5wLPi79MPe",
  "key41": "37kDBAqg1hGW9dDz3jCtXmy2nBMemp1ribo8P4sLKFU3W7rQrrK3qZ6jL3wPMovzHaj8JTC4NiWiGUvah4JaXXtc",
  "key42": "3BwMzuiTnnUYShoDuTtQhB6qQxobUieFKtQwav4NVs6C2anFD9HNzqRjnexUKoJX3ouwxc1vu4kc2SiNDqzhCz8Z",
  "key43": "Jw61pnHSrTAgEwA9DQBk17xUMjgVNqtYGu2JiL3PxVQsPYUkaUxr3ghkwKXrrrZVV1GTHJ3VcUW5Yr7rqKT4bPP",
  "key44": "61Rk1pnVCTM2e8pfWZACrxoDonfuwLCaksmY8de4UYuaPBPKkAPq8J66fXQXzLeXuVfm3krYMHsNCMvhkSFLTg9x",
  "key45": "344WNXUya2DsGqiow31b2DGsTZkXLSHiNUKmkwTprk7a9u8LGtYmz6xgoBYKtUhFiT7oBhKvdPsQz45nMJLpnXZM",
  "key46": "59cXM9ZaRppsTybpbuDw7t4JRYEJXW1EETAjSPb1cMmyP4fUAPBuEo1nLgh31aKfG84iEbJeHwuE8QpkH3KpvPMf",
  "key47": "2yqjZppxri78GGX7XPKoDvrkz1ndJhV7D4LnEDMg1fq6smYGktdborq4QToZdctiAKz6NsqejGLekDGcziWooJpp",
  "key48": "3wktG1AjG5sToD9YGfDrGSF5vqu5KWWSte1t4MAWfLfVSvo6ka5Li8fNmJWYDYQUM9mMbTV6uwTWZ5QuQzVFyXEq"
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
