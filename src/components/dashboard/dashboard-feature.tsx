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
    "ywgDpoA6Z58ax1dN6TV5nYBksjdJ94MSapQK5mAqoupUQAjqpg1n9hC3PAEZ3AdpuwkQrrjrCQ89GvPvVH8V1kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n3Gr4fWMFLsp5cyvYs1HC564MMR29264f2E5K9DEistriagwTuSH9nseWoQnPmcn7J5iHG26JvktJNGMUR6PgR",
  "key1": "2mQfvzCm1ox4YJNBtgFnpnZA1HwR3Dx5FDaY3b7w21TraVGqz7rM3RnA4vBL3ci9abwPTP7Z6scJ2Ge2ZTCMTCkn",
  "key2": "25hAqdUFJQwD8SfwpjtirRoE5EKVrcHccNTdCjzHiwARGZRdWDzy8uwWp2k9yosFj66PdGeqmixKpRvS7kZhrCHq",
  "key3": "2PcEHcfoeS1Sz8hd3FVWYRgU39WWyg4pwLneRqUSeQMm9FLEwo96SUGF91hBQ6QWkV1rGWa8BnxkhDm65YA6N1xv",
  "key4": "5iWeJvYvorjkQTvEkF4y8kEnu8C3qAcK7MhDacdXkcExUVU85GshUW4xZr97rv6Y9aAbaYKLJ8w16mZjaXUZmWp1",
  "key5": "S8gEzXmBHQpc744q1TmJ8KBSe3gvG9hhtx3Kp5ABKuYYBp3ZkMXhhNHKwFLmHgcgAAt5XzCDdtVmK8zvKvuX9Sb",
  "key6": "QFCvhKjM26L4yaPDjrzyFZEoTBSDRMiFsPhEDksaY6CUwGZqUm6QNfpATqzSrgH9XrSGgSCD5JW4LkivtTRtU6i",
  "key7": "4T5zS87BqNVJJHHVa5rcUKAL1PqQP2ayN9RhjW3nrCKBCKrhuVSNc9U11M9B2mv35cwLEs1EzwPvDizdWE1PyFHS",
  "key8": "4UR6zL8EHQoNstWQTbx8Rj59NbeLVuftiuanUr9SKcMw7fRv5D3LZiXX45nJJhiKszZTjuo3AQ6NEKnDXNA39pQA",
  "key9": "aXtA6MJT3rrgAqhRE4VKGuqeJBnP7vXGpbtDkdd9cMRoWbpNAnPLb5JCD5xvgc66eU5tEM53oH2HVcTUEx7Agdu",
  "key10": "5B9zhXcxiGbaKXeU5XMLf39JLv17LKjsJ72FHC2idVon5XqVbPwTuQ6h2E1Y2u6btvhRjgrGwbxuttTVPJC2eRBo",
  "key11": "2RkftuwZpGTurLSAjraLeEHh4MpF8y2NeW3ATeNC6q291S6YkgQFSr9XLVZ4JXbFEZen2LjevdrhrzA2jYHfdddk",
  "key12": "2ohmyfw1DjxYGN68XJPYESjFJgUbkVjY3fcuxx2e79aN3VyrYpy9XgdWLmtgUNMQokJfUZCkRrqPoxdGruZafTjb",
  "key13": "4KYM4iPfyvwo6cqbtMJHxHmquTXFNyY6QGQtmX86uC7UBq8P9BmUvKXi3DGncFDBGHtTjrUDyexAGZNQ2beEkiTP",
  "key14": "TpyKFtDWuy5DqrEHzje8AaM7jsL56hGqFf9zKhaxx7tYS6kuLj67pB8Tenp7VSJ7NgrUJTurQbqYg3QPtia73VS",
  "key15": "3FSe1Bb7ULDw844n8FdoaTUmyTFFr4Uk1vjp7vkf21wQiKGNHPTbQR4HtuuCigdX4zSXTk2Hu3GDUfFvdQna3n7n",
  "key16": "3V5gavDuvFc4wQUnmvRpnQLSfhmfQHVEakYRYi5ZBLUbiDTyTPiLU7pM1eoAZnBsRQdgGPe6way6uv4z7qMExs97",
  "key17": "2JSJ5nZ2AcbAy8nrsQHkRQcPueiFNXby4uUFnDTMxznU24rJN7Yuc1cH1wHtqdhecyuA1fLNAUbAk46aw1gsrvNJ",
  "key18": "5tHWAmBQk68y46QM6GqPFoXiPm8staF2A7AyQng9XXrVUMHJHqVAUCYryGRYsUJybNw4bTToojGzPZNwTJTZRa7o",
  "key19": "3fDZPVZj8dLYxu171A76KhgWjQwfaUEhsFSLNzuhCbsgRq3BBuCiyuK5D8a1rRKzBJtiYmDSZ9dq8RhsAVp6BsXw",
  "key20": "61SDNL9oYCSfcGbuvqU38j1gBHBedAcBaE8iFRCKb45yvZ3LG5rnbaXmgabakni7L4jn4YJD2uxp4FczeHEGMMtX",
  "key21": "5ypkhiFTNEk1zCpVZopGCSsCqSXYrmz82fHC9h4MrFcBz2RMgPXraBRg6APRNB2NvNZtXvojDwju6UZx46w84GBG",
  "key22": "47CxR6Azo4866vRJK54auHbtQKvECkngycqXLZ1b1AM9sAxAmLAY5tFGVhk4ZgZ3NT3rjPBxKpdD72jDE5hHVUU2",
  "key23": "5831taTFXEwUA3bWpjN6RZKSPnz72R6i12CpNiZkrxLGFzpowRUZZSk9KA4pqFmvaGrJC8gS827mPbcwDYZApAmw",
  "key24": "5sxxQhcMpGAvh6fyouCMtAoThdd1bk56B1qzWuFuiymiG7BeHmjHWo3P6MXsjsGi2TAjMjT3xi1AWu6QFBd48akw",
  "key25": "59F68kJ9tQYLFaHKHWnXfJPnw28VbyAshJwosL2Pe44XCDeWXbeBko8pwZ5uY57rUr1JTwWmE7acTb1ApPDeyiU3",
  "key26": "67UB887d9jgh6vz2bhiaG3nmKWohVyG8BLyTxbtrQVVp1Axty1Aw3KNLSbteWyEUngqb4t48XguYac2DisyUU76k",
  "key27": "2bu6N7nhsWwbTm6em1LteSwhiw6RRc7YueqspzMGmTPsunhS4iquqyUS8fvcCtz9YT8sdKPQediuonwcEsfjmNoS",
  "key28": "5EhSiT32eMV3meU4R35C15TckTkW7JoFP2Yf93szWe8hsWXFXgBV4rNSX9a9hnbwZJg43ND8LigPwAEQwgQrkKa",
  "key29": "2xvMRHqgcFb68ie978Yo7DmC7irV4bfXnxeUEpBeR2XT1pJQuEBdxeAEcqz2esgBakM6C9eVcQQFqEqFXjs4NtGG",
  "key30": "66bGLNKCR7q9BV9eBzWrAVjQt2apbg4rGw4sZKunBwVWVZBNq4ktUkiLAys8QjXhWNipp2f6cxt3MbSSnyaAnZae",
  "key31": "4NNtiFfrsFFkgzbaJeRZ6TsjMAooRBj3NeeBQgvNdyakBZoakUrYYkW5JA2aNaZWW2hRbD9XZomVAz2YgZQz7vDd",
  "key32": "5nNiK5qBB2Yy5kHfYUqdJwP1BieASm3mxkNtVhcpZMDtcsz6PXsymxzoR9PzvngBCKyNhuR4GoFAmTSaMEpFYQ2E",
  "key33": "22o9RqC29drygDGYRQsyvRKZVL6z75cNAkbCY32BjKYzgS7rySLnDhZNvur3hYepGVA4RZuFU5sWsSHXQ1byLmV7",
  "key34": "4bJjPfmPaW98LgekKEoyp4xrMcSkUh7RWyDt9jqMabrkmuNecsTie2xCoNwwdSz5wXvK4B1YbTS82T6WydFqLXzn",
  "key35": "2Xfu8Fk2sJpAcZTxAH5H7pnawzEH1hGfePK6GBYET9CGVtogwC2aJ4PfqoCdkc4MJkeZo3toHpf8wHm7xTuu5Zos",
  "key36": "g1AXTx74rHcWtnR2cRbgbovyMeAdkAfZBCN43xYeBFXoHy7XjnqEszgTQuBz49heJ3NnrpszcR1Tn48Ur8Pe9vC",
  "key37": "9qXXnSYzKmWKkeXB7agDzNCJGdtsDutkBFYhC4ep7gwTNST3oHK7nr4RjQWCniiVg8mmFBz73jq9sLQgpTDhzXR",
  "key38": "VXSNQGMSNDfsoNWR22hKyzPt66iUe63feSR2oEYgjnppjhGYvuBkYn9j6EY9M1nuCYfNxqa2gxTD4vQPqQ4SrXT",
  "key39": "2GdNbXGr8Ep7WUxczSQpUKRYWRpEMqGEeqwdUFspWTFQ3QLWrL8N45phPzFPGoaWUk4aAve8AwZ16veQcyNGneXq",
  "key40": "2zqwvmyqju6ihcuwb9gE26u2ULJfuhEzNqihLwmRGUnTDig9Jur2SxJRonK67dBD6vk5fc7MLg8zCFoEWPx2R12S",
  "key41": "5q5Gg9HqS8XUsULVkLDMGUoUijXH2EwmdHhrCvRZsyiH7zSw8av5YBbmehxdCa5SgXe4MELrmLKcdA662VjFqvYa",
  "key42": "3qm66XXiC96zo5VuoqhSFbce9bbtfXcr9FBvzaSP7kXsuB1sP1ND4d5ZMz1XjSsCArj1F61QniAiiAmeHp29kR9L",
  "key43": "43xDgBV4sxXwZZhTXQiDUGLghrTUyfDqhmfDn6YcxHgUyfTUWQUrFPnop6j2oQC4junwn6wJuXViMum4De5HAvVk",
  "key44": "2zwwU64zC6JWF5Pp3MJpx7pCuDt1XNaNbjVad4WHKjxBXe4CuaEQvPscZraQSMFasyJe2pM2yiCXUWhJRumfriUQ",
  "key45": "3WD97fxVo76uUnMp89mAWj6JGgfUsktqCFeGMaYY62dWko8fPwdChBeAy6Qtacz4Qn2s1LTFdnuQTF4hRe7PbuUB",
  "key46": "5wrKJab8Yg7vA4vjvbY32oBxm3iKU7xSXKDzoVzWgchX2Jfj1g3REJ2E1LM8cqLFZNVw1GgdBKUfRDwPBQJ26wYy",
  "key47": "5Qu86A62kE2pReSyv68wgLKANzXyYMvVDkD63CDnCh7qEsEVvYgKQWhtuJFQY2nqb82k9ez4DH2gB8iVL6ajVent"
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
