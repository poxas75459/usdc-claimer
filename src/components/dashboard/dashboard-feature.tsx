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
    "2B8qHFiTMhh7C5yFMKotgAHJhCSy5zaHpvjCC2ThmMwXHAn1MmC9HjAm894YEzUvqVPPj6oqfei3zQbrshkGQxR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeDmMi9Zz2SjQu3Xwrd2WSEFqsy2MzoEF8CTk8dwUSR9RB1ffkpZkJdnyqohXfjh3kuVP2JPTuGuqprSUMvJ7Jf",
  "key1": "3QE7QtAJJgakvMR2NLnyddbcxMp7tR19DDdPPG1FV91aocvQUmgySBC3rq8WWaug6WLddguGWPkc7e9FXJstZSpg",
  "key2": "655v5f29yQNTTFujt2oeNSZUMuVuEGUa1VSHir7niRgWKY4ySdMQRpRBMuBpMV7jDYA1y24ALLr8wtdWqLvsemwj",
  "key3": "4mngaTVHWznb9k8mE5jzWyFX2tJHWbPZ9vd4X86NW1eUvJXpdTz3UfkRYH5CAtP7QbGYEvhznVwAzKcUAmhLG7PZ",
  "key4": "3XoMFkBNYKGfKG5vGxLkbZ4C9UqUzuYPLEccChjTyS4C9UPyMWXB4EsbrFdoABvRMUgN4karTgQc9cSSEtTTjqsB",
  "key5": "w2NhFcYHL4r8QyVv7kQ4oDVnSxfNWKJGN5DTPTZokqUjHqqRcC2MesxvaG86mnrfhAJixVbb4qCUXFbaLvYj5YM",
  "key6": "UkRFZeWGPrwJJYeJUQAQHez9oQ3fE4afMpqetMyfkv8N8zfCEuoASDvwLoLB3CRQktaAMh76mL1sAJ2C3XSMoY1",
  "key7": "QJRJZpRhuC1MbfN87kYnSs5nUt7mrJGoxGHDckhvuDT5jFZz38LY7iyuhx2yi8FanjZy3dzesbuZymBbH6Tnx9P",
  "key8": "5oT6A8ZXoXjrK9hVf7gbVM3XcgZRvjbY4gQZT5wZnprcEC7Tbqsx1NXswSGm6fcm1XfNK3PWbx8csBeifeCLAMoi",
  "key9": "9HuqXU7dnCcyYwhYUeiVK7BBGygoCa3rWMuQyz3dvB124z2ERQAkVkD9N5ijw71cCg1dCjR2VwDB8xGbnSt3zvz",
  "key10": "XpE5TJpMJLa8SHK7rx31vEG4F92x35iq4rnQa13ikTZ8Vuz7Rkf3ENYtLbXQ5YfkhtVMvHVLEiZ6JdZjWs5KRuB",
  "key11": "63LRCjqtmWs8Ae7k9pJ3ko8UvQwZgzp451BG7TuTn6JSnbGFAGzYx7jN76i4e617h8XWWaV1Zi774jUo8UFFV6jM",
  "key12": "5YwyvDxRW9Lpkfa5YAVpgbTRpUbG196KuDeHGsC7THCFD3gnot3m1Non54tpAAYPBvDrt5nGukH5ssGtG2GwXqWN",
  "key13": "2r6Mf7tRPCBRftaSr1dB4hTL5zh13kkxzZTsXwQ78uYTJrUgE56Dam88Xffai1DpSddev7Pddw9TDrzp8LrUzDvi",
  "key14": "KtdmeANf5CnqLjd6c3WDhPEnN9Ce1wXMC78GuEKKpGGnR7SUirDnEAGtUXMqxwKb4CYPLSUn3BqKtweRA7w8gqg",
  "key15": "SYD9VrWCoRF3rEAnb4Bor77uBz1E3TWdnztQDxEo7cHwKCSUud7qk6hbHGJNKyugB2rWwbf2Psppuw5Ut7ATuBZ",
  "key16": "2x9oiNMx7Mbt3jEPwii7RV85Jm1szagC2XJ8TNdQW4o1d9vvqjsE92ERn2GQJ2p1kGQnvEBHJHUZZRrkMZBrKD3d",
  "key17": "4HF1mbAXy9ypuLStb5e6rQKUfgPuH4nsZNgU7Br1jPdopPwnaVJMyAQDMkve4mCbZ7r9GYQU7meFHUUDs4CnxSLi",
  "key18": "53sZ3RHZnTnaMjG6LqRqLBbixvWCjUCA4G9JzDh3p1NEYdz1RkgM2bvvunWc3XyVmHTMPeRYJnAc9mCGaeutQmYd",
  "key19": "e1d97qfgef2nugww3X6SHtbW5SbDq39eqssHWvzQ38MosCeEaTfWbNzsdn1aMSafWUscKRaGvSnbCrykRQ2f1Zr",
  "key20": "4WEdiaajuABhqeiZyDbH4q1ULMQaMtZXp32kfPbfwrv1xwHfcZWcKQ2JfS6CpcUEJ7v4ijcE1aLHaBEVsCRR4m3E",
  "key21": "7VVQeWGhYzwoq1PXaCdCryFAJbkKVekt2NX32devb4eDQ8PCvu7nSFzSTp9LfWRL815WnWiGq6hxaqXsTWWRTJe",
  "key22": "aNFs6YpocvN9xkR1ZMKzrqVqNutH2KhLGg3XJTwAzRpxgtuAAxuDpQoQHCqAbZCp4DTeYPr75gS3Fmh41MhqbpV",
  "key23": "5y5mmjjF2w2jxFaf9GqaFrQk28ZKmBxkLPZE6HoX9dofuuA8GvkJisZra77RsSd8gavbSUjUhJN1F8qdcEdWL1p3",
  "key24": "3tfPcKMrcLP89Hpf9QAPKhj4CGXx3bsFKKgd8YjowjTRp2xZQEfXhnK6GuP9iSVuVYdfYP7jAzLDazCzku1CFQ3j",
  "key25": "5y9hfphSczHm3ULZpwSzbTCAhM9PmHWKbxZhSQUpptQBmaBGn9TAq5t4WA1CbFNDprhyzrhBbY6rmNzJ7vbfUv47",
  "key26": "3wvCeDdH1qEYNbSZwUs75wucHn5RD6HcQGRCNJb57jTpEGpP3JKcYJPgkNqksQSsfPss4kYEYzqX26QEVt42e4na",
  "key27": "2jSFEw4L3RsHESebjf4T13MU8x8Bvt6Z6RheMfvnzhvRF531PBX7BAWbD8KeqU47DHLATM93n5Tk31Dfv8JyPB36",
  "key28": "rmDe16VMYsDCZHwxrR1GqdYMsH9FefcPSsqUyBngcjThyChUfhBq6zJjQJAtywyPsEVjH9fLUaPFg8QZda6AAGj",
  "key29": "5o5RhFKq8uSX6uZrXL6p1eRdK2A4DpQQGUGuWQKiEKAtfGBhMjMAoxQTJiq4Q8M6TZXet8Q68QsnGnTbgDZsswvY",
  "key30": "4ZUDXHeyARJUHJWLxbJjduir76zTNRaftoXPrrtn1UjwLSqxx8LGrmm7J5zQfCRctkajFQ8AiiVzdpKkzpnxMP7w",
  "key31": "7tB18z4Wdi3ezZSykH3u3EetKXvP9Mv7zBkoUo3ani5q17NNxSucuCb9SRKPYbmZthE8Tovqy9j9Bd1beG5WzJy",
  "key32": "2v97QwFKvpyPDLLKnk1nmp1RdZWmmwii3N1YSzEhZ2Pc4CygesTkGqcN64MscfFmSBCjkBeas7uAzBQnaRrTxysp",
  "key33": "WtMCYBoqS4p6UqNLQXBmQEEiDiChqb3GTtbZKinmnWxt7zf5rGpZpN1CDqgvPyvJXDAhUKXaFvc2vxSoPTHjgtw",
  "key34": "2GcNXdcx1EunTXRmwtuLF8nVhAKZm71Yh2ZNrmrTs5E5SyrDW9wQ3ukpWu4Q766CgwY2DgjDgQAeK1TppGyFBeE7",
  "key35": "pRbYeihsh9EpHHBkYN4gc5FTQvgaU89M21Hu8K2NnFHKv6m3DmiGZCzuDyUwnx8JS2xj4M8s3DJje95WFs6FB1Z",
  "key36": "5AyCrej7E1kaV3v1AGPCDgHcpfbarU3TnJxhC2WBeJYucNVM1bEFGCSF1WuTWRC9VP9UMvhCNpMpnZoVdUtvT1Pi",
  "key37": "5oWTcr5d3zxgETy5hzQNVC9Lktp14AGxnd7v8kJLfuBJ8miZkABadZFAMQopAEPy49qLXM3kRNkjp3Xnt5ZzZGhT",
  "key38": "2eUybYKrSiTBgDLH1Ep8gagXt1FsuMT3MminLdLdTNhUn91xsSkTBejNZCJ48KG9KaX2p96UxDVczSfeLHF6cRDg",
  "key39": "3bJjK63WRy8VKKLaPBGtNemuJ4sWe4zNiu1ycYGPFh5RUTnT5hgS7tWAN6eyZ99eVnHs1qmbF9orGk2jgBLigvKY",
  "key40": "5pKDvhT1k95G7ap6urqcp9vVDFfRN6MSJrrVsyRkZ7LuwSXBw1fYFx2vQJwHbcDQDZTEFY6gVf1Yq4fidF65J2NE",
  "key41": "nCHrL4GQkBsiZ1aJh7T4PXBruNy2Uzh1DXNL9Zck2mUvVyqu61Pd8eHPnAHeYaPjakQf3BkEFWMj7Z2ucvAtV9i",
  "key42": "4igCrSSL1K79MDVqS5yy1dVDttfnktXwcnicqaM5HetTCEvaZNPVx5ZWwZRDfqvqKiexrrgyDw1Jgi9QFRaXsTpQ",
  "key43": "o7VmhuQZBkbWc7fSC3c63iBruKHF6EzVYXeAGvCuqKnZ5BE7T5DuoJpH8BcMWcKzfJ8VnVvp6Gbgq5aA6uENN47",
  "key44": "5ov2xiAcDozjo2CuF9NzCphZNEoXnXXEPSEfgvAUGasD69UPHkuXfLSdE4pKBBvkMcZZdc5ypmqReBBPKoNcnWk7",
  "key45": "4sbfwgd265q7KDDgmJ2rGCRLtauuJ7pJq1QpSa4gKc1AJX1sfJ8RY2d2Am9eVdQporY46sLY8cfDNz9zxG5NUv5F",
  "key46": "nRGPyZAiopdZBeg3P7ivAYfGxHYuYarwCQRUgNeWcrWPRwxouFyWSKibsfPpbdJK2iSG6npD1mUoVzjcU5F8uYv",
  "key47": "2ufJ8bAfSCby7gS3CTSvhr57C19Hb2tQ6HSXkzeA7WaXUutgRU63xAvJw4JMMUVZwJTFc4mUUnbU9MSzaB46VdVd"
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
