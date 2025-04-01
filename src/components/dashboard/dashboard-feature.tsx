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
    "4Ab2kKcmvJbTVgVYPr9aBL8wCprS2B31686vkPAiPs6ijJhKsUa9wzhVu95Z9ax65DndHYqSBEbENjLXZg1dChB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcRRFcs13R2gb4QU9T3vCaDzcLohVQZF8YvUhVHdBySTEJMga7ENVzcYuacVZsrhBnnh2UQ7o644KGZCpaYstt3",
  "key1": "SQgN3RuNk1pXmBiqUWQbzQjFWqYarJ1sgZwVthsRjA9y2S431efE9WaF2CrvcYxh3eVGrQfMPvvA3A4te16Lsym",
  "key2": "2zogxqCdNy8AqUk1Fq8sNtwLfJb48ZDvko8ptz4ugiP8Q8KgAciaZiQEmvvukmZ3qX4JrEXidVtgvdh5YAHg4BnH",
  "key3": "2CiwTrPWT7FrHiKfVGcrU28BsXVjZZ99o27cP8xPsU1kwsEhf4cy9nzLefw54wFm9TaziTDwZzyyvTaiH1fQN1Zn",
  "key4": "4pCJ6L1Z7CBLs2SXeaD9NqCJPYDVKk2M216XpSkrtoELDaVasN1G8jxRA7zNMkx4psk5DvK5YTH2bLsz145CAi62",
  "key5": "3CV3B9Pa4AfrSLonrx5gQL53BxXZzN2qfCuMno1cku26ywi59kecW4gveKdLcA8QK8CCiM8hfdxWp5NqXCLVnXQ2",
  "key6": "24NBquojWb8znN9eBgKAFs32ZqN6Pe7eqzTGMsDDMU8G6DE7AnfGHseLea48JXVqYFcrsNkZbP3dxx5WvtcgZCqn",
  "key7": "XJrYAuVMLUZgQ5hehHUq97KAoVh3DAwfuH3kxDe1BHmgp4pSRAS7tWm9mikrHcf3XhpTrRS4BGEyh4dLRrnapph",
  "key8": "649fPZHpSSck2DaaX4PVPb2cirLySoE1HmPFSoFw19NMQ6HUg2MFMefy183kKMVEfQ3SLx42u1MFzduui8yiCG4j",
  "key9": "3zNKYseJJ788zn49iMmF65cgni3NnUrnuuQeA5z6fJLokdnSxQo1QnRijvWcqgAPiDRg5n5ZaRmCQ4i34ADLgQ3W",
  "key10": "4E58ddo3pjZBMn5CnNBng5xbSUfYNkzriEF7ztfjSeRFTjb7z6d9qpbeA1nmLdNtrpDsw2M9W1hBrMo3r9Cyi4D8",
  "key11": "3yqwQrUNYSyKN5zQjHGJcTpY7PF4AyJHmgwzigHz3yaiSViSpVF1BV6yPLZiuMbFEotzZDm43pYzaxMCBDF7yRUE",
  "key12": "5KJ9U9zv6PBWj18BVtdDANTwVEkdNYaquYtnKUiugiHZXZcSeoVriPMeJ36fLnLPFGHzcwYmM19KZBXR4T8HRKBK",
  "key13": "WoCTiUbHJdAZqwC5yUHK1P2EWJz7fMMTmzZ4BLCJTwxwNPo3z9yH1rrrBxQDtv3aPjHkJkRDrNXdAd9vgYkA1Rz",
  "key14": "jYUAft7QW5RBp9a96YNEC6hV3b3rttx9n4CsZED1jNe5E5zdThTGampf2CpEQno2BhpstWsEn99GDzPieUARj6W",
  "key15": "31QzJdgq8jb4wQgxe4jEAcgqKJkM9yBsUFuypRaXR2V51QgKdVDH5ZeGmo7C3Dxw5cx3gZjeJmKrjKhLzj8nmRRe",
  "key16": "2tvoR4Rn9qMp8AmuYRHjHu11RxBpRXxBvXR5sBfRdLjZWUVMSdhTkR2xZYK4781vzigBQkAwJ5ncPX8xTWo8Zatx",
  "key17": "4f8ZAZxetRyeA15wJtKBto5jm1wxV2Bgs3h2oxxmWk1hqmCC8jC1BTboBabutKimvow9PSuSc4gZ1kjtQ2WzibQX",
  "key18": "2iQ1Kc8841YpcsbkPLa5BLdTcKyryfEgDJk532WniEX1whY5F5CL6DGA4yyXMAxLfWFHtV3eUC87Bmf2YXiTocio",
  "key19": "5va5vKP2d1AkykN7s6ECyM3y4rc6XyXBUqtK25dfm1RLTyxXwDVkWdZ7492zCwQ1Wu8qRYwTLuP8McqD7cpeRr44",
  "key20": "2WtEahUU45LCTvzKz25nrZp7GwtckrYGErDzwAb4Tt3j4HvjaFPtwiryt6VoFGY7VekhxtDk37TvxcsqdKZJuMh4",
  "key21": "ZaPTUJPFPtPeJGLeZqpMLv4R7zdE9UuqYahkV2yAkKqBv6wwHw4ezNUQNUq9FkZQmRNCEveCKUNYP2Ln6XJAcDc",
  "key22": "3PS3GPRWbE3kJAGjmEBMw2WBQSCreFkfKWEDc9S4ms5pec2T2EPgvricbpe1DzKuXDttmZw5HkkvcJ95NCQ9fTM",
  "key23": "2p1kZmD6aY4kRvH4bod5gLP9yVMiGJF3E4LibxYXZp93FudD7LFe99WFCqiTL8LNthebczLmsBGM1j5YGEBoEXsD",
  "key24": "2n6c5GhJLHA9S1oABU1zUw4A8jiurZuKU37tczP2xuGsrfM2bYDprcAcVgzRoPsPyRoyZ9fQYgvxUSH7eVeWwmGm",
  "key25": "5dmRjzXesfKyLmoCubaxmJAFc1bAf1rzk5NEvMwniVSffqx89MVoiWHTKzpB1Jvby81cVdF9jm1sDNrEVFFMELFW",
  "key26": "2KZ8mMPJy2qDsB3YryRrYuppRE9t258AUnEk4P2JMoDcdVoBXKdx7CBjBERyKuVvX4c2uU9BvqKaPGwqe71D7epE",
  "key27": "2ZPP4LuVGQUsehXBYk1UmP7RQBTYdJWHtfsFnQXS5BDLZ2yM92XhT9mHYr15a4CxLtUUKfxRWYxC1H2e5sYeeETR",
  "key28": "3Y1t14vPJkuHZECD8xkjYUPENAjQcfxUcUUT34u4orR4fJTHwWx9WpaG4pC9oTro12jUMoFRk63t76K46KEnhLSw",
  "key29": "36x63K3Ab7KTmz6UrYmTKfs12ytduSfBbqj3gHs6rTboMGCt2X9sE6vEgwsGrDY7C465TqGLJZmMeFuYzitbhVK5",
  "key30": "3KtnBc4ugH84dmtnJrwzvaCEjaeWmfR3uqz27Mtfe1WJmLpihDkRjWUPJqqCuqc3u82vFi1xmsZXAdkzBQoZvm8k"
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
