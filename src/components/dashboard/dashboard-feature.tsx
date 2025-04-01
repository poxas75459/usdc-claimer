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
    "2pRVuFPt8UG1oX3zgjsrVc3Q995XaBvkuib6GLMFvATiCsujoGSi1R7syE7cpMBNEudRTHonvskGBhiN9Z6gks91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pM2QkRUunYnFGkEHubHj6VZ6TjULHzdbpTXdEJKgQD91NBqLmmNAmkzFeBYVfyjkRNwkVZfBYtv8X9ZYvX8k74w",
  "key1": "R9yEEapnRkri2yUe4UZmADoozaJS6TjRyJLL7Ji8cxupJoo1XPEhyxjZTuBrzUYFVGcHWo4tUB1tnanSEM6UjV7",
  "key2": "54N9jjfhkC3YJ9ZyufMByiLBpwww92PHET7jAgvuPD3xwCLitjycsKvpgf9yXS8cB7pzH9aemX7pbEqw5KTAcpDj",
  "key3": "5uph5wtrXvft283MkRthGYrMWgFZjdyVaaJp7hkrQmKF6FP9xkGQR5gRN77JdgfxVJJcy6GeiHN5mJzNdbeTk9X2",
  "key4": "2mUqZgKpVKiZP1wgSevfxq35GgRPLZjADRf27vSg81AkcstS4ao3yUEcARFx4ExmER5sqVDKJGBdLf6q1PAz51NE",
  "key5": "StTN8R1okFtrLUAyj8AXR2xiZrGNha2VVB77bymVReG8G6zUKNXTks2nMHExtvgsE49yUJsPE68KVkz2FppoARb",
  "key6": "4wXTohtkFzfK2WWzG1g71Q6oA7NBivXXyMp6kzNYDQ9xdJcgjE7Pqa9bLpLvDw3ajZ9NKRP4fsAGEkLXTxM6YnVM",
  "key7": "3rHQSpqzxtqrgBrLtPqKpLNx8VUDBcVcdY1gZekkruEKVwF2jhQdJ54x2hiAMmXCikN6uoHvjckiRmPZ9iUn7Mak",
  "key8": "4FjXT5awyVQRihVGihPoXzE7nY44N3xRFHvL5LdfmmK6jgzVUUJuopUA5tk2oUxdgWTTDia2jmBZZW2onjycBUCC",
  "key9": "36BcpbrEXxCh33VLbV7cCx6FvKHdUUpUNH5hJ2ZurrC3xWAasMSDa9dV67b6QFL3x9wW2HF36uxgMjjpeCxT95Fo",
  "key10": "2f9GHdkJ5P96xkAyJGYNYcPxZnjCmuBQ8Ed9m3B3rDaa3PcyVeWRwjjGPWwaC2A7ahenjCfURNYaHW2RAEVEq8jm",
  "key11": "4wheXBGk4ok9XtYDWryhxeSJxMno9JLX2v7rpYHp4nbMznx7K68MiE1imoppEAQT9m7Yh3Tc4iXjymQMBrQwyR5F",
  "key12": "3PChTNv85TaUB6iTCymyBrBhqaK64fjrgvXMR2KDwJ9kN21tmnhKxkBGpw4tUaT5bGPBm9znoSGpeSXtuQ85CFmw",
  "key13": "5UcqaYxFJPJZhbxgW6jDmvzwTVpjX8BhxiewoatY2HZfiqSc4RtxWPrv7ZrztsMDRBGRmMwGWGeQGtzismQ5amvj",
  "key14": "5G1tYHWpt2UwKzbKhd2fPEcMr5PDEuoV7uqj7peg681ZKhAK6neda69dbPEAcfLNSm8cgu8HjbwhDC8Euyzidinc",
  "key15": "3iZDLx9Jw9vFQyB5pcjaQWe9Fk7pUWxiCqDBzUMCYc42whSH1MPqBryDkKY3uhutEVCcXCqGyT4CkG7pt854wAEf",
  "key16": "52ineXEHfhLiZKjZM1Mo1xWLbKPkZqwu1myenMiG6BRiabqj1Ymfc1cqcnLZfCY65VBS5MNzct7eG7VZLYa9S17c",
  "key17": "1XJRMC4FBq3a7vzz2zvFAm3m6vDwdE9Bqsz58gZ7piwhg4RT9fVLrUWct6iZoJKUPaVrFus9k6kAgEeyEADprK",
  "key18": "2cN5gEdEw6v3ZDhyTigD144722An9EDVpGECT1yKRKN1gAxBeB8G4rmaCiczaejN2GPp6yzvstBBJKc91TkFnWKr",
  "key19": "3XDQGSZnD1iMWr7uofVurncNCyMCGsZQWvrb6FSpx1ZxroivJ69WGK2FMLcMtm6QgCB4yuTn9cGJkxTXmUg2aqS2",
  "key20": "2GApdwYWLDXYL7hbnMzsgz3gqUwVhUiHw1emMPDYqdDPiqBm8M7XJcssSQwKkRYnUfxEjbX9G9V5cCXdy4A1R5xp",
  "key21": "2LLUXdpZheLh2Kizv1kPvayNjPtrRGupN1xt4EyDXrEZGuC9hAXMLtnm2asg6u2v4DjwQrgrr2b8ao6uhmSQJPUA",
  "key22": "3GPpi8KC7jwxKJ7oXQudET5vDzQjSf6rMfGREN6M762b49xHJTgqrjsaN7gBUCtn5KuCwhTrd7w68YggAuUrk9bv",
  "key23": "25ES2qUYaKWD5tySGtNeAbnKpoLVh76zNng2XC9B63amSmkbNEcAXnZS9bFK48NfLTECE4RvWZmS86QH6wu8oZUL",
  "key24": "3z4y9aA1UMDTtPAeu2MGGqMDefgGsgJPdT95HcvBAy7HGhQNuFH31nFKm78fAr2U8tPqnoAMq7J3LaMNhygUbJKN",
  "key25": "3sbWYwtX3gBoB1H8QDnJ4ADJBvKkYXEj9m33fNpuDWmLe7XNBvdGN3N1FmBn2Av3TpqNJ8TnAYXNQkKWG5UEG7Fu",
  "key26": "z3JTqS73gpQgBXhdt5wjzcvNYRTWq9KH3mQirPCNEcNJn9UHEvM9p8PWy9PX9AYBuBhK2GQmSfbsr94ucWdjXgL",
  "key27": "2oBG1PMragf4mKyX1PXhw22TZmHpz9yK2wcvd4k7zUxQbpoVoEwZyUwoULHBbopcxLrXwpgo9AFrQ8JZHMi2TdsC",
  "key28": "2LJWQv6SG7r7SfjdWhRjCg5vN7egb2ov6hKubA5fZG6cQpNrWUTwDVsaWoL5UdimK4xH22PsYSsbNgtpE7tMcK5g"
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
