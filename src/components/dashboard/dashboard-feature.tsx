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
    "S7VBJuqHBEPGAgz2nWhrk7DmSUWTyaT1MfA8933KNhS2hYdQuYtx3PurpHaRjUmhRqjZwifj2QgQjrDh1A1hhu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6N3voUDZq1GX9WqMfhkmR3cfqarvacWTdPPZfa7cMPTgBeCGGJrqjp99t3FNtFZxD5rnPDBNQxC2K9trYRQRC38",
  "key1": "3WggE19yhWHfURZEPPSaxvXnF8b8muxZVxGJFurAU6jUCXG2EYh8cFAcgVbNNidoSXx6pnUoVAB9dDX3YQBQw1E8",
  "key2": "22piixfkjVJ4yUHeM2XUpAP7EajiS8JuEBQd21qw1q839o1uyX4Qmdao6K4L3fVvFcgApHr65ZwVNmbBRJaTETdY",
  "key3": "58vtr8tF2THwNJfqQ6L69n2mnPoq42RHGMLQB6GmeK2D1fLKwM9NMUez8w7FZhzVeVsepGqsZAu26TraWAWDKZKo",
  "key4": "5uwx4X5xmUVYvD1uRnsu9VQSSsjEwXATR9WSx5aHGKWkgCzLbU9FC1YKj2sDjVWdyQ9cNf55dr3ebEYCydkKnQaa",
  "key5": "4hfTvCHP11j2ntr7K7cd8nCon9CnxHbKMNpVULDzkAVztu1x8X9c7kutLpQDGecwbjZ2tDRusAaeAvFzkwhfAyEi",
  "key6": "4532dFoj6BaDju2AWvC2Lik59FBEeTVk2eAAphkLwZ2FpUwZePtc1W8qw88A4Vr6xhxPa3kXuBXBWFnzDgKHg3fT",
  "key7": "57cGbr9Hm5aa2xuMMVA1wPJ4egyNUFPrBpjAHHCUz8zxgQxZt1fZbjBBgvw97n9m73YhMi2EFanFJQ2Fhi28FWZt",
  "key8": "3EDiAJNKThpT2KHfEvx7NduTk4Cpyx7YBjSmbrgUQcnpSnx8G3wnFjLyhaLpF6Vdc4svuojmKA9PEruXFrFkqQeW",
  "key9": "58XWjuvkerZr5QzPLUgYzPvgFXVThWBokhZCPFT5eGiRhQ22sSUDku2Lrpcqm81mAJhAuasAcBMStW2x1TZ28MM9",
  "key10": "3GVfdi6wMxnxpSPZEfw7E2YGF6jo65ghCEfZeDD7VrViGGFNahS2ZjN471m46Ev9KaN8vR5db8LxXL5JL9PJsjcL",
  "key11": "9oGmBcdmJ7LVdjM3k83UNEPnMM7oGc8CPaYTxbB4YbKweH8f9WnqwmWAkb2pYsk9NZiwGUjuFaRsoar6VysEkcw",
  "key12": "8kDLbQ9h8ztoEF28JWg4Eqj1AoD8uUycFAYHZEC4Hgdhm6xxgt3gxi8PVcoDbCprgKiJebpNzrHiFjnuhSJckgG",
  "key13": "5aMYS3UMwn1saYumpJoJQ5Ft9wF5cyyus336Exctdac3U5eFnEJQt5CDCJCxXwjodaT4tvDALeHTpXLNcxbryRWD",
  "key14": "3iqyRz45qvt7upWAtpxBFF2yosPajWPvzksJQhjoGdijxqRhHKGFLXLXgm6erRczL6PNcBqYEdkUwHed2rdamY3m",
  "key15": "3pk9msjyBtymbN81eqLj9vHqy8HUaokBSjVKn5iLuJ2UDJnG3wQZZvSjqMsNkAJdsdzkJxAEqPhh8cTPm2HEpwss",
  "key16": "33a1WYp1coTuHeEFgSt6Nhe259TmZe24iFRhARbb5uYPbSDpXuYsLYcbYxipDLwT58doeeA2hLXTkhLFwa8eU6NW",
  "key17": "6YijTLwz8cNx2i9xB9w8rFmwB7fbdnFn1w7X4WminwJ3wAc8gUY5W1ks3DtwWZYXf2j4obY5H7AQx86qEWyRpaN",
  "key18": "DLaD9fsgndacCYf82fG4F3n3zy3tLBSxmbWa91MYT6QRjVNrYfesancsaNzxwUJcYme4wtEE3ZYwFJXqT4z9rLt",
  "key19": "PqkHUnL8rkDTaxhV9G27SZePQBirgmZF1M9h83aAV4VuXmSkZiV4rCej7bjf8Tg7LqkHPGcGKrwkHSqWwkT2toG",
  "key20": "4AQxS8PNutE1wKJzcvmSGozSpBNZbUmiYyMm1VE8L3mFempxTaxC2GqJpeVtNyi4tjrG8LaV8oeVDG18uUoqgbyU",
  "key21": "3cNYAwxCPN2FkAYeTecj3UMJtE94pcS9ED9odxQ3NzEucF9PaibAVo4KUhuWcQd9k7KrL3AJSMdPix44JPR1txaF",
  "key22": "46QE8PuX3bYcVudE4dtFW8poWgyNZExZBjzf5HeXp8EntgLihoWpGwNcCzCcvZHrJtZaEknZ8euLrxgH92mi75EV",
  "key23": "3X12cEhGo5bZ865gBs3VfrYwKDWzSuAqYEujXQEvvMTPgrHmw5fJyxZf9mhNrzoUCMgRGnRZXwMcyATbwanTnUKd",
  "key24": "3yMgRsvde9FuM5byxiJaTF6UEWqtPfaQcdX7pc1fxMFZHVcCYfokC7MwVEPUknKoFXLmRQfsgDgC3suHgNeWHr3B",
  "key25": "4GqZ9NZDcxSbSaZGsoZc4BTSMbptFsZoHqQXDX2F7a437ByP72zQWD24PaLVRojwfm8GgoEQboY1VMvv8apaMSQg",
  "key26": "2rtNKQYAV5Ukgtu5iQMjw7zR3BZhFq3v8PpZXTezB7EC5SuFwhExAa7UDkBEq8ALSR1qDvM9NSSc2MFYaRL2gPVW",
  "key27": "3F6YDVqc3CJRpw9ShT9izyfFS7ZHq9UtuSYN7uMVDwm5rtVaZghzAZ4HZAP2nM4EzdehHy923GSsQoQhpCsCg2X5",
  "key28": "2zeuh2qUBE6VB9pbrFj59D2y52ZRoeoEuULyfApphWBNVBhKrP2aRwkNmtYoaADSKenfnwx7kPCfFcqrtVkmyPh7",
  "key29": "5qrUGeFSvr6TyDMipvkuskRrvc5HQqXdtBMbLzpDw8EGksYcXie2x9NcXp3Bq2mVCJw6TKk8YYozvJGg8qLF9WR3",
  "key30": "24jKmsrGbsQEobek5fs4gsbLeVKUBmWYSWYZX4Ho8XhfyopSzTAqMGchBYdhuVcAQvq995b28tXbdKnFNrhXQPtk",
  "key31": "2nVZWMtTieHZfyyW2nqt6DV3gojdDLXffDDRKsrcnfUCURZcyrwrvNmPcRe6fu1uCwJKaVf1Yni34gCEUjuqwVAf",
  "key32": "S9ZLkoSH5s8Ncz4Yodw6EXyVMo2HmLAaTVCWuyDcE7nLzCKkuAjMe7s5kBXLXypxK6iDemzK6iE73xytWZYNMjC",
  "key33": "ovQuySERGCPUapBuo4Wn6UieG8ZZZUKMH9jCXBNQ6xg1urAgvskJYBG6pfNysBaPgEjQef6hmEdLv6bY5FzXS5d",
  "key34": "2xzDQBWCmJ2KejUxBUxxaANNh2oAy5cqnewA2Y1ZcnnPbmf1z9fkzHNyjd3G5jNFuPwXPXjtjsNaMVSB6QLkqnHd",
  "key35": "MMpkEtTWLzpjtV1KXiYTnnJSL1MZkKUY5e4SRpgr6sNwVMjDj1WuLHzwcop19PxJxQqRvdj3s1oqJf4ff3SdVo8",
  "key36": "2Xn1rTBPMhcgg4stgXbgZJy6EmGJiAQHNCzGWbdoSLTpEQT5x4PZgYZaPsdYTMJBGH1sMNUxuxtZ1taraUpzbzR9",
  "key37": "7J8r9j7pz9NNuVJKuiqLRLcZuCyu4wJEwdVaD6EEobkhSEBHt5Pfbz3RXsRMBDgEiusWUaxtzrN3mZgofDv5Y2u",
  "key38": "mcE2aNafW93AGYrrjcAZ9s9FLfsLzYzQfoQCZ52pXWL6sfFYM4ER8tdcxDhSmC7p6k9kFiLNqznKaqKNDcqK2qC",
  "key39": "3stTUAtp2eNNayEo8mqMs28xS5CEvQKnPq8oNhyCs4MoDEcn61HZemP4QsWqqNFNEfdb7e19JRDtcFngjJ5YUUx9",
  "key40": "5Smf7Nj87uoCR5n65VyHcdNQzuGPwtxS9cvXcv4oWPc9quqJEcDrhRBf9MLq3i9z1jPpKS9dCVGJ6ApCFdBnRVEb",
  "key41": "DgDWemNmEuazoryGGUoimWZ7JP58o5bqtSqCETDuoqjNBAhxgDutDF1PhqhCVMhaQPoRNucMdPEBDho48GrmvLV",
  "key42": "5mDEYkaW77c2ragbYLey6AJSeUn3fCAAkkmM6zWnvhBxyUQ4Yh6oGqCyPHjmYp74uXf8KVzvmemQZFmrikku4kZa",
  "key43": "2FtDRGvFtvBW7hoYtGrxX4W12Ge9wKmAH1fCsnLBa4QEtmiywt9hvkHGo1dfQwpsRFxAMRubHKHUQVy6gjA4Y7Wd",
  "key44": "2zia9B5P7FW3DnKS6XUCFM539c6L3gWyqe6DhvNrYYwVnPW1gCid8snqfwTQhN8ucd1KDyHcZzio9tjHswirXPRQ",
  "key45": "5gbq9izfpfxXj6NpCVuZeA6oPcx8eznmoVqLYErZ9FCCCL41RpJTe4CMud3d8ix9JLhFAFaUbgWSdbJmqeZrnuzc",
  "key46": "Y6WrwJJXeBWMGkmeoiFQhNGdNXfbgBEAHKdhfKy7X2AHtm3NXY14eSasp49Y9iAxnizBfAmQx6XnK9H8UBcfvfP",
  "key47": "3xFvryFQZpudT7rDAmDxjCkftQRdSqpdS72y7h7NTXjGioSduhwADk3WELn7j6Cx7twjYBdiqR3hnZXqMKsAKro9",
  "key48": "HSrizPhgsz2UFYBKs9t6QdE4ZRzJ4spvwmw46jBzLs5U3AjmbdX6Xb7PUEkrj1ynPFDeAbYNV3E9QxYMQBpHfg3"
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
