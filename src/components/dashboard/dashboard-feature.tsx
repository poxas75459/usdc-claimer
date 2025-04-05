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
    "3y6uuF4SYMJjevG5K3tnxPGrwzNgxp3cjs5BbhwSpM6Sz4vsweNEQJxFwi7sQ7s5qhtcrJ3LnUsUYWzeFeczUcua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5JSmKShcAXmeLsCXTV6SchWFKbtHQs9C9rri5BqxKK38n4a4FjqWYxXDy8JnAFxvEjSkKSxojh4Q3PLT4hPH2T",
  "key1": "4r3meiBkPEMBBVRmaW5uz8eJnYYrBzHusdK54v4L7qjuCKZvdUG7SXAoGND9LXgtAKKqWMbMD9LJsUMSf7BonLdE",
  "key2": "3TbUYSWBMzticiUHPRhZXe2HRTiPFhdfBn4VF1onFK63ZrKVhq7Ntmhvpp6nDcskxd26nofFtePx6pW3196pLEB9",
  "key3": "4SWciw6DX7VW2SYFNowuURdKSZxPxMdQfFpLtVuTnMxnjs54rJ46p2YUNfvfNAuqLrsfGjSpxq7ed95nuDqrAkHn",
  "key4": "4bkPPG2zTnex8S6LeXG91WHw9ecZLLbQ4aJgXLh617rah5o4t8VBsnkznbw4P9LXjbzdQjHhPNLBzMQreyW8Z8L4",
  "key5": "4ZLFNFZRS5tfdGRzH3NWD1tvyjMfCBtYdvi4U1PtedNNFFJJU8geM6V6dB7jMjamNhJGm5Kn2N6KUKmNpRcehavE",
  "key6": "36oa24hveqqnpFsveoR1CQbndrpfZFtKVGeHuTqPU8iXvminP7gTfm89zgKQ1ibpqaKFVmCNkjFuGVSjaVYGddyp",
  "key7": "5SsBLU41vVCaq9pffsAggsmRmfZYtFwPBtqVLrnE1Fwq67dWZAuApNLDpDy7hFh5S6mNouEriF5rkoiTSCoYXmqm",
  "key8": "Gpsv9kdFz68zpkTDBGTFpauC8h7VJ7EnWRGScwYwbK8RGXgGftHm6t5FE7GRCtQkwJD62kimn3Mjkuu4G81Szpk",
  "key9": "2ukwMpTSiJeNe63DRBPfPJYGhB66e8yM9hWA3FfNnwSwfS5jHKoiRSCAMPVJLU3ac1pshP2Q7dmD3iNchh7VeCeW",
  "key10": "25gs3uBUU4wxMY5QMfFfXKrUGmzuZsdyLVhWxnXohJJGVfWzP4xNobZ6ZTLSydBTuVBhB9JpZDFhW5bxgi49ht1b",
  "key11": "4oe9PWAUzYs2gZ44xVoR5XLQJ1TM91GuQPVcx6pucqMew6GjxjYQw3PsJfXhmPVqD9jyLXLhwwmxH9FAT9F4CZCC",
  "key12": "3yG4hhMP1abaye6tDZzSg65onbRM4jXW6ZNjziUbP6NN79oaHNFuv9jJgr5eHe7Rw1BEx1Vy6hB8Bs8PF6CEJHhd",
  "key13": "4tkre4Gav7UMswNi5xTaDda34HhkSJ9D7awiMLr5W9qid4GQ64VjcvrJ8NTteuEv4UgYxdByPeM2B43C69eCHCaY",
  "key14": "443sZM42u9812ReLwhYVoqsrt2JdLfuLLzDc3rUdTXnSf6ypQLc6kAeKYwrWKhoGvaJcBCrZHjPxqG7bxQhGc3hH",
  "key15": "3DjNEE34eAtEZtW1HiVnmaz53ypbXEWqp2a6neLwJjdyYYGut7cu17r4jMcxyaWbu84R8y1bcq5ELwfL4VkjSz1x",
  "key16": "U6rm2kMVp5gWqHVBGo8xkHSjtCkZ3poMXKLoUJAaFvyi2iyqzoESnzrNBkqhHTtRjWPBepjxrivuKh1LuMxNieD",
  "key17": "3tkUFM2Y3MKmgTuerNaeyd9swkGxVawSefxMa8ZPEEsmnJPDHiYNQa9DccrNup1Qz1D8Tucd4yku8XVYYAEKpvQ9",
  "key18": "5GbvcihPXss2B3U1HXbb99WkSADtkbdDAsRrftAwiieimWy2UeirchFnfPPmmaR27t9eeNNhFaodRtb3wVcw4MPw",
  "key19": "4ofQvaRhFcuqHK5EBMGdmrbo3yn8CwbSsu7ksVz1NvYbdgSnxgQnQMhKfrG9c9mVcJqtemJCi2REZnJAwyqcm5Gb",
  "key20": "364VpSViriU9Ug28wDDoJkXTeA4hreRnwLFwAA5X3Zg7C7tAjwCLjUw51hhfVzMtbxtLWioisEwcUKHScPsEbquL",
  "key21": "qiDyQFwrwZx3QBsn9JTG4ozPTZVR917ZHgrmR1keqWGED4Cx5w1jvZaEofrc58u1LvS6KaG7bUdW8Hd8tLfqgL1",
  "key22": "4uPkuhP8YWHgPQwjewdr8AP6PLseFKoZWx2WuaCYGcsbVLt8iWv9TWRKFbZc3Uo3NKkkPBB3eLqgrKULjqtMfzBL",
  "key23": "3VHJiEqZ6REh89M1V5mk3F83sM6P7XfJqnZBMZtZYRrh8w2AhauXe5Ma92gkdMYW9oUq9bKcp2qbuyJGGpgMeo7u",
  "key24": "2yaN5fBCjgi5Tk54cdH1RXhRdVnu7UwwNK21htaVc261dHhP6RYeTkkg2s1EfmXXfpNiMYqEccBVGhaGCXwhsC53",
  "key25": "3H97JcWP2d7Uoeb8BRY9rqAXTYvzuZJN7Tr5yQMgSkNTqXyLmGmYDBTyPU2dLgnERGZroUYDMiHsoaqYFdw1qZsH",
  "key26": "38Zbptwu4Sa8oAdgvPbcypgXE7YyGcZUSLXPB5zzZtW3PTDfxWKikXftPsph4G7Hm2nJy3b9jbSxivvkWU8BTfTz",
  "key27": "5M1XVfckCh75bok9nJZqKLu7WKnvkfnsPurTQbGmoFqrZWMAqMkDe8HsYJakyLECHDAEw2pGsiqtsWCui869Fj3j",
  "key28": "5mD2fHF2G8XoNtGbwdgxCu3fxVKm9cez8RWHS97ZwW5pc9Qeqsd7WzYQKzKS23xz1wrQF7oDsuCzWgCuGK76NKVJ",
  "key29": "4rHwesTpLFpzx19wQaQNcceCk5Wfk8GWY2DHBRkKW1fV88xcduANJwtm33e1qxP4ify4E45Edi5pGtrFCFHCo7km",
  "key30": "i5Wbm3LFS7u3PdJkzPhR2ZVCWfTNdX5eFwV6ZhXynZkmu3q1WZHn5QxWJs1HGCi9SrfrABQmhTnmtX4PxSigPYH",
  "key31": "2cszrBPrc2HByk4kZQLgyvsCSDF8YMx4YWxiW3NhiHCKwhJGGFCS2iVMXQSKEfHrSUj4PAFV6vzmPXagTJxFPjFA",
  "key32": "uPAfWufL3zwgfFkyLTXSG6ekKyLU61XEvzd8FBDswNMzD7ZanTYyAAToACfRwQk8v7xpLV4mVft4HpfYo8HNdZi",
  "key33": "4McEk7vBJhFwdFJewMEy2MPSrp5bYuaH2DxWAoCAXxxbzsBHFqgR6GYxg3pCZ7fkgeQfyDPiZ2TBB3vwxNW2ACw5",
  "key34": "3qcs6YrHzN6rKnefm6omzNBWczCYmetiYmh1KWLu29mr2CicR6AGWbChiNpyMkxt4GmMU874aCN6Me7N8CJdgin8",
  "key35": "2KGkmEDCoJhfCP4NZ6EnkrXTDtSmGgiChHhDgw5jCXy7eFVuW7MduiSMyBeTspbQJDnmRgse4mrV4D3iEh4djXXo",
  "key36": "4YCNFGtqULrCY4HCJ3KHfTaWjzpTmaTte2v6BCycwsgr9E8aTrUk4PPhEWWoMBonnH2Y7dTwrPTNWLsyf9ezJd8D",
  "key37": "4U32e77vKYL17bs6XvtgGCvSMoXtrBKCFtStRfZyK1ATVKXQr3T9x18zYYwxKsgRzjgf3yVpZCJdbKLpTPqiSxgW",
  "key38": "xn45xXhp1yq5gEDPtijet5EnuxQWJBRfzAJSq7AMRecFPdABJC5ACmTq3c22DzosT2xbWYfXef7oZFu6zhFzPLL",
  "key39": "4YSPTvEF4tDKLzw9TKp9QLbbydSR7H8vWtrxsCe1fnRM4btFrNnDtyYGH5TZPwS4dFXHf6wLH4Zx3ZaRKjrPtzFg",
  "key40": "52hPki9jtTcrzUZBBVSzE215kZmtfuEtdZYiFDcY7FAhLEzFnAGErmaZM5EQBqhyM7japDJcHwjychnrvEstDESA",
  "key41": "2h4Kt1V4XdizwBstgm9mB6pW7Z2CsG2vRMwSwwXsVz41CBERsfWKC39KRhKnbVYCNUCbEWmrRRzxFw4kAMsu264e"
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
