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
    "5cvvgCJ1jLcRAQPyJwpw37EjUapCfaEhC9ZVo24yqurWHCRyqMhfa8UbhkimMfMDTPz6byJxNLGUv8mnrmbZ7Hxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nFurAW4TzLLvMxuT1trNcox1V6eUmw2Q5VpyprV2q3q25rZXfaYN1WiaPPgbqLtbjr5AmTLEafxqRYJur9NuBpb",
  "key1": "5QSSNpAZCP9aEHeAgmGfr2rhuRavBnQNX3YEJVGaC6uPWM2rePs6amFiBkuLbAnQASnV7bdJnBtTURobAYSxFDYn",
  "key2": "3N7NoncTANeQoQqzGA7JLvc1RzwZBAYGQGX52F4nzfEM19UE3Tb9xRsvapB4zUaPnoeVM7rPfcV9xtNm1Krew7Up",
  "key3": "33PZti3m8sAZ5hWLRNMKBcsyyD5QfooXKRnvZhzZL3TjgrYi7qhThHuxNopjZF5znTLSiHZBdUQ4aqarwzJAqocR",
  "key4": "5ughAGw6FCTVmifWtYgsDqMvNCibQyQt1yoD81HtBRLUeCppafRY8Dxwq64JuiudbNYjNt4w8q6yBDAumDMT58qu",
  "key5": "2cbMFPS6EM5MQsEfGEpcoraP1SUDmCCRE7pRKNBf7tkpD9vfNWNvp4N3U75MMkYd1JuoVBsAztYJGQstVC9Yw5rz",
  "key6": "DyvcguoqkTrxd81dxV7Vuc26gf3DUbRKgU7sVRhPUvHL1We3sfqVjF7mYa2wnoRnALJRdBS7an9z3sdcpRAo3FP",
  "key7": "6brVC855a3hMCC3ekKvcmnmdxwRtrgQt1hpkY3zkkf3pgRpDbkWNFzB5wKXKYh9fKpDAu2UszRdQJDNZ9emvqLF",
  "key8": "4YKGSJcZjkWNQNokX5qefzvtgkz5jEHShSVMf8aj69nVxmP9fx5w2Ka9XJYGvMef3tZafChDnf3SWo3Xw23y89k6",
  "key9": "4Eqqb9RX9hTnVY3woAwqAAYQD1fTJjLdNqW5vPtU3iXwWDXoCut222LjfJNz4khg5M5NJMHvLJwCnY6iSkqBzb4W",
  "key10": "46jegnR7AXRDSuuH8q7s5jMBahU9572rFF1h4ZNLyxkWuX3wpBFr6VwmadfR56UnuGGmFuqrRAxZ94YQhwNMxLia",
  "key11": "4W153c4RuEUs4d4EYRKGNoMFWqEeZX7EmHuf2vaVKLe8E5sTYYbUAfxUcMim2rMzVPRT2oiWSUKv5VTZLmREN5MX",
  "key12": "3ENfrqWyX7hYaq4WRC31sCbge1jYozEEHQNFVpTqPgaWz5xiDze3rurAx9V6pwP95xztmR3EA9L5bbbt6nH5tEDG",
  "key13": "5aKzazN2txA3JJnjV6N1MSJJG6PZcXY1U7CJjsxoZZ8GpNFNxrL4ySrNkPW9MoQiwGsEEEhY6ACT4N8qkycs4HMj",
  "key14": "5AN9R4UEvkYBS5BqL2LkgWrKqPsYAGiyh1PedPtFfRvgmbJHqnoXrg2AXtE5x5BfFDtjzV8SQKkPjRFmXTs3Ugek",
  "key15": "28GEwtQ8Htxv7SDW69swdyWbxXupgadZrpmS1rbGFKxCz5d7g4Y79K6pDtPSPrp1oeHWTpTiiCFKtDA9agPYdutn",
  "key16": "2qGXmzRXxjAUrLPVo12cfxHoKSGXARts29QJRL1Pjwf6yBkjko3yWoh1xTuMNZLHw67xyRZb51NasKArfawWwtmZ",
  "key17": "5RzXY4Kjw9gXgZXadtY89Bmxp2cye7QmX9Yodou2fP9jF1AfqzmtoQmt1U6R8YffhSFNj4AQHLH481ujHA93yY1v",
  "key18": "2hf4hfg3Z9tWVamKcnr5bMv8hMJTPduASm5GCbNhrGgMhEmBs7jHm45UEMF64SNamrxbuq2cQWoXKmSaqDceQXtf",
  "key19": "3c5YpV2rqztbeP12rUr96AhcbkLTKyHrxAzoJKEEsqcqKUHZX8fXpKgg6idXayE9tWeAWfGCjEwUn5ZuUk34hPmn",
  "key20": "46x7aeWana87AZhEUiafjAMjwdiu6v9trQyiQyj6GDkShs95XFXLkweUSNTA3KYYGQVXDwd3Jt9sjtn9iUumPnzQ",
  "key21": "4oryqAi66VYEbr3QuZVPwgjkWwbJNuJ1Bbgh56gbCCfnHUgvijzzA85QeQyfR9xNZKUnAtW8QcMmcBHuxezVz6NA",
  "key22": "4Lx5Q3egJ5GJhqgTZAap47Cv4YLt6u3y19a31F8EBDhgegZ5tNTWXigPvUHtYizFFpyV2REtZqYkYvSScUbontGh",
  "key23": "DrwMyjMTUJ9PfrPS5HafbG2aRe6rCxenmdjYrUh9Ja9TVVFr64YwfN8DZmTLh7Eyv324wYxxBUWd1n3BEVf7YB9",
  "key24": "3eTszP2RU8FqNeHizUCtB4dyvLpasQ6121Udv5H77U83ouTsa7Fpqjr3rpkzGBtgkVfeZNK4ZbUm4opT2MFXB3mo",
  "key25": "36zuLZ662vMnZVLoJ674Egir2YVwrb51tnsr5A7rBYhegnBX4VT9HLMhTqMfBouLbxdDK4omnpV6a8C7q7uqanYa",
  "key26": "bst8Rgdq4KnupH5WhRWxcUM4mCUT7e4ny7Ltbs9HWGLRcpzYH3NSCWUoFrzdrujkzG9t99kqQpTKckbyYCrk5h9",
  "key27": "4uuKSE2fSircr1ziPokReBChD4GKSZCfCAwECHGUiCNtN6WGX4ZVqP6XQhd7L5GDHTi7bucuFPist8dm8zfMj5eb",
  "key28": "3QjpQqRJzsPvAddML9yjJEM9A7xFmthKoevNn25pGzqMRJ4K7ZqzZLMcb5k9nhdCxEWmz4jJFL6NyShfKrs5Q2Hh",
  "key29": "3zTph1NVFv2qkLEu2iVeHo3UQ5tYNT3JB4tuB7g9GQGY3STZ2bh2DpjLZmov7zueAvP6ByphHBu97GKi6FpQvC92",
  "key30": "3ADvGzHK47GqL3Vx2LzRqDX9QH8j94wQcYMBCtfuDsGXr6LMJ3NvzGmn9yjjQHY9PsVhPBocwvMgbSmGCgvBD8tu",
  "key31": "5kwmMvZH9cTgxmdT8XdeeLTJfEz36xGJnRTSJkjxNuJoUsfqqjKi6exxXk5T4fJzmr6KT8x5nnQrqWxVc8rxdP5A",
  "key32": "2ewk7Hn1Q7G7Jw44JbX7QNeM4FibAUjo9PUTg5UXb1x11kqeatMJUf1owEbe8Seu5E2sthsdVEApFg1aDbWETcV7",
  "key33": "4hV4fMFqAmuMm1rrKmH47yFUAVGLN4FiudEtKDw4EgXjYU22XnfbRppJJhMQED2Mgza6A2A51bRZrNj8a6VekDv9",
  "key34": "3xQNVyezsiJDeBUD2V661yt3REunoTRNF58y47xSPnuk9wXyxHz43zKSqeNpwVR6D22Awhsf5wKTuLQA2MXJ7ieW",
  "key35": "4uesuQ1Wn33jsqJENu9vyFRk5BwG87BSjij1uoqocMkMMDeR2W5ZZRFF7iRyrcUYTUY5qRW44X7WaaiKeY5LMJVq",
  "key36": "2pXwA2XtUx2YXPQTyUmZ2kcgxxMScE3nowiwzL3c26XSq5nafwVq962MtFRCcCFZUr9mAEqJs3zrXrVLPFgDRQqD",
  "key37": "2sPVMHSWn3Y1u3AhvEHAXmnRAV8uxuC49SgyW5uW9mgbYxn2xGzPegQMKKb63N8FL8TsSk3eQrzB2nNfaBt4GY6B",
  "key38": "3NFwvPMu7u9XuHDn8d4x39GNV7xkU1nC4duXtkPBwpJaBL2jajsvo1KRUni48qbdXT7pG8PeCHXAiLbrGBvpmRWH",
  "key39": "456VZSWDNo9M3fznJX44bD8U4VxwvFwA2Rf1am7FvRRs42CB8Ea2Eqt6PGB18ggjg8qEKZX5TnyQFumKzqBC1F8S",
  "key40": "3oP9eiUjbWqSFTKSPUupdRerDqBBCG9hcs4c1ysrL7dFD3amu2tQ8qdmtAfMeyXWtrqo3a9ksM2ErMxRqEafJEmM"
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
