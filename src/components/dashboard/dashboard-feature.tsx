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
    "4ii3gaXtPc39n3KLGEnoSKJANvpbncCWyUZ2UEZUEdoXm1hqmNnpbYJQ3r9uNDVckPQaB8BkexzCYGCob1yFjPDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWzQMhoviaDJEZpjs9zoysgwzydFyh5ga51wN7X2cmthZ7t7HGn1NS1Xece1nXNg4nYnQmuHEtC7KAwNHJ1Zy2Y",
  "key1": "4mY8Xex4fBtG3Vh1SXJgwQe52GxUCxcrY7MMN1D4LqZhJ8zPquqVZafXwjPUf95WjghKi2bibnqbZbyvWeWFhMkG",
  "key2": "2XwCsiiy9Y9tbhgqr7i4EekvSufFpu7aFzzk1swQUqPZWj3mDEsUKep7XUHCRQFD4Mebx4jtVqsXvjnMtGoZ2KUP",
  "key3": "zGNc18BMGcns5W3q7u5UBTnnBgcS8unyD9fxeBdbracNa4xrcp5w9VoWk372cRHBUzZuDXvAp3N3D9n3LdZoTZw",
  "key4": "2gAfy14uJqBz9aew1fT3j3MvSJH59BmoUe6tcVbKWsew5stjMEUWaoP6Sk7e398fP2jo4Y1Z8YwYvUBHWnuKjLyy",
  "key5": "Jh6xC2jnYFpRx8FPkN4Zf2cS1CQV3suxor2byy4Cxy6AMhVTjd426SUVGQgcfwjqaUTyiyLdjD2q88MET3VSr2L",
  "key6": "23c1bR5gF4M4BbeBtDXnkFNpehiDdE1TfPYbYaFDP1YfMXE9nMLLFSNuhj4V2aWBmogbR7d2YjWpd545VEd3ppMH",
  "key7": "3EBEG6SeLqRxZ6H5A9meuFxB43SkxMAScrPbmqibTDFNw8Da1boVNuGCRvKzSVCH9JjYA4i4FMMWExt32ueRHZj8",
  "key8": "5ScdyH79maQoBVbnPyoR4Rc4jYNZiZfiBxjfnTRECwBY1u4ontvza5q7DohACKRTtSV3mgs9U12SXrCSBidHWNwx",
  "key9": "KG3Rv1kGCPdy5YVHiwhpTBwubjaSpvgJUGGCxgNK4PTVPC98FRYVc1iXSMqXSbTYzfjrMaxhPhEfC15s2ikg65r",
  "key10": "3kHZYMcdhih4cb79ZRpQ5R5J8hKyG42ETQxpt7BrxbvZ7e51nWLLHRPcn6HvDPxW3F8Bf5AeTWd2AzC7GoZRckgW",
  "key11": "33MNrtKUr7FTgkZNVdVhYF2CEkjjj2g7fnGPPaPgHsWrj4ntJ5qj7ii3gzE8SxDSdGjQ3Rp2uFZWmH4vn8DoHzae",
  "key12": "4MQr41CvRcSJc2HFBGLU8gd5xyXg4WVT3R6QoEWezA29WoxLMnJyaGZqXn8qLScyzQ3tW3QxFENUxSzWr3abFYjW",
  "key13": "4rSj3tkjfPTsu3F1sBUaMFLhCfp5iGac2WwAEMtwQ9QuhvR7qGLiy3EKRqaTLJFQk8ijr9XSHxgPVJJpTVnmDiMr",
  "key14": "2u37ikUDuxWJ1cbrLH6tDg49LYKfqrfs7QEq9c5kMP7jWMexH7mhN3Cj5bSnDpnzBPWEak2HKX6pTedPFUeNNCNF",
  "key15": "2rwvjfUdVFH5SmGJZQRBUoRFGRHyGEfhddHrGVA7Dn57tWe61hoYcbNM4AUpVfP8vkuSj55xhnCa3WhrRDX4C9xr",
  "key16": "5tYCPs1PniCvPTG3YJoGMf9AJK98K8posAhGazphthC6gzHD75AuhzU1fMEcz2WptSGoEDBiN4TqepACFXipiBo5",
  "key17": "3dixqS8MiuLD9npJQZXdeuEeQNMegSPsXX9yNEjzdNSRneruigGSZu2t2NEwC8Zz5Rnnz9RYLNZWxnQ6mJBNsdcJ",
  "key18": "yjvm2TLwT5LX7NP2vtEewjWGp2vdC3KfNKNAYZMcKQdzj5RV57LV7tHV9mLGZsteBUTR6PavF6VFgShhhPedb8v",
  "key19": "C5Z6AzZKBxu3Ky2ckQAA3scaxQqqFamxVqRT4rvoQxLkhabPdHrJq9cHzkNALfLkaxUc9hBrwwEgEAM1MXo6do6",
  "key20": "54mZruD2hZxWMJCzEUixjmq6TsXqBQ6B2LvBc7pSsGENuKGfGpGJzKbw7Uwias9ZajbLCLino2jiGKyCeskXneWz",
  "key21": "bYAbTr2aMxKyPn93SESzVL4fn2yPsP3duygcqrudvnyCkSya5YgMXEuM7p6PB82YbsYLvZUiEVr4kvzxrmrEeu4",
  "key22": "4dtmXaUe3ZFdXjWCamg2tj4gG1DcweVXq9KnyofhAGsia7oC6XiLgW8zGFrqX5CjgVuJBGd6Rqam4AQbkCkNucZP",
  "key23": "31o92MWTrHZds21PcH2sVgpeCxSMmQyfMAyLTMEFX3gkwBKrygCVjm3PXQbdwgPEjq2S7sum6HWv6sGGV1BHecbG",
  "key24": "3y5iNFTHBw3u8LvUcbnyVCJXYSPaANC6qFznP3x7TCTjq9FQzWJT88T47QCHEG9PGnL8jDDcfwdvnR93f8mNQnY",
  "key25": "gHNBp6ZeNGuhk3UDrYawbjGZurvqXkaPMFAADbMAeMk7623Z9YwjSyARd4WsPsHJkZBnoJ63zd7gP68kJ6Tj1ZS",
  "key26": "JACureM3GFH1HpumznC7N1aHJK79VVZFg4nyWnkVpscazDRZ38Vg2buaYZGaW3bHJr227oXdQb1ohtMF7gCMnaR",
  "key27": "4u2oXzu8GyYR87RiZpwPz52bUjdVjzXHrauDWXZPN7HDjh8RKzJ37JUD7HTj6U98sWdnFXdVDaGeZ9vLMtH57mTk",
  "key28": "umvLuGkpg7GX1pdpY4JXokxRV9DcmnJWBNCEWDGENjgWWEaF4qywxnaW96r7uSUHEeHMJR5yjSb1aFnbznBkjN8",
  "key29": "5j47GMArrzhzoLfb54XTcVvQ1sdXpq6e2xFuHxwiJxcNFRPbxde5oTeWFinyijunMbHKY9yF9KUbCtsqeqAevKfS",
  "key30": "EBUbzdX44bkVTwpTv1cTkwLVa8GCL2Src8WypFHCD8CvhLJxM4zyvgLngrbu7JYsyBeMJz4F2a7KmFf8Xzoobv2",
  "key31": "3KLtudoAu6as3D7PVHKahb6kFrPE1UJkNQAvWXJJRDww4hHTH8tTvTqp1s94wBxDApNzXLKPS2MqchZmF8i7GwP1",
  "key32": "PTK1FhfaopgtHQnDFwwo95Ak3385z99XiT9RGCGHrpqLkN7L4T6uRPSVPSvAtfSUMu9LuDXppv6zQgerpCTpjp7",
  "key33": "5kBCMWiPG32T7ripbn2JX96AVqKcMUrWNo7JNMUfj3Au7cP6zBC9VMP1n9Ybo534yAsqENmAxXT9rNkzvYnCrsow",
  "key34": "4bGCLmKfpbvMdHNvKYXZFoNpXM8kfK24HEfRy2VGFD56ySZCVmmGJvBC4ixLxhDQfe9sE83REpYySJHV6fbMynyC"
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
