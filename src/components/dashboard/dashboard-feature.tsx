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
    "24VC3GS1H5L1Z5fPnRp55RfcZYLugER1jawiGw4CgvV2bX5RdZkqSnc9ThLpX7Zvxgk6ncbuibRskLU9tWjTJsiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgERYnZcgMtqA4KYxMhjruaTEESegbbgmFcP5y3YswZf818DkmyjVtYMspLzBtP6CCoj4LYNszotWLDbm3zhRyj",
  "key1": "5Loj6NimsW4adEyV6D4HR7xSwkSuoYJGvEsJheRdS5FssirEbDuKpoWS9JGsp11yJNCarh2C5Jbh7hE4jakXgLd2",
  "key2": "5bMUZ8D7WF4iWXsakSaFaydJDQeafDnbeirSAFajaeUFiVyYrdew4BbBAQkswCXdiZhfisBPP5eWPsRmLH4VWADd",
  "key3": "3UXKmFbzwsfrouHeexY9VnrsPQ8pyAxfVCpjat1UBzD2vYxJp9XLYSXcceu4FsMyoYy3tUbQNL78cBwH4FC46FvY",
  "key4": "2eUBWVSekRX7WgdAKiQNWdzdFod5StaJR11av1Y3c9TTF2AFhD9nvd68uiRFU4SpvRky23SBdcimssMceVCnpoZ8",
  "key5": "oTbMeTzFk38AYKtQ1ScsMqXyYfji7tCRN4ka74CNoJbSJ4eFHvHwYZXUBYCqLF3QtRck6Cz9YAaQhabDfmcJyoZ",
  "key6": "21pC1GQ6kekzaaQ8nyRYvhJ1vUdJE26uH3ngkKZxC1ELEpgGDyEq66fzE71av1d7N6p5CsBaQ5nufqudFAektMGA",
  "key7": "4btijGbYASLVQHpP3vA2PNEMZf3uPGhiCD6zBXNV2Cy76HrXH9zPSrsZe5rU2mwjfNhz9LCnMGcwEPSd8UDVjGaZ",
  "key8": "3ChuZLd4avpWp4jsWPEtpRFKvwZH54UhP8csDhKxRfZYFmT24DojUzANRSdysuL4hAgeGS3LkEajgh4kPPjqDvtn",
  "key9": "5ecHniVYqioiqzczp9hNHpqWNowyDctwTWFQCmwPuy7b3jKaPSKexZrW1NFZJ4HWChHeUKhcrmHP5rHr1syWZsqD",
  "key10": "5pzhHfwwMH6Z4c2n3UJfKAoBxq9Ti3CAXGj9ZMrycyxmTfRrjnnrKs2pz4eizh2XvsZq6fb6bLFZ8BkXKS198JTt",
  "key11": "5DhMuDJeFdjvTMKFpSfS5Mr1ofnEH3jYCFtdkNRScoJZqjDBqsKXyv86YTtLSivu3SekJvCvNJemcpjP1WP17Qfg",
  "key12": "531KKUH4MdtkyJXACSqG9KPzFXKKhxR536qRSGxSiUhvWCMgDw2V8uTCrTbi88YR4NvPBJcK5MtJecjJPRcznEDd",
  "key13": "4kpNsMHsR5wK63Tsu4dvSqub8qfTVEAwePtQX58tmtpQMJ8e3kGCF6JYkX1xf8FBERg8UGV16dwFeY1NYPktPT29",
  "key14": "5wbcpZPweaAP1qaZiXHqkMtKMidLoHe3kbYrYHXkiQGKtxsXTeKH5YtKmLscKUJNgtmct9mdzZ631yJXsjGFfLR5",
  "key15": "4JKC6ux5ZKTdQ8M6bgHDZSDTHy8mnzWu61CAxr4eGUSiDJvapgLkgD5AXVfzQYg6quKNTYwp4S2zr8Yjo9YFZM7A",
  "key16": "57f2T4fAemhbEipbbZT51puAqksZ6oUkZus223S9J8TGL5fKqGL2CERVFeFcC8UG5oeYfdGXjyvj24uybbtAVq5r",
  "key17": "2LoMyH3LyMXXrbRg78zRKxjNzouNwRMfn8XMNVCWhpGPz1uZMqTPynenorp14URsS3QUfjzb6gwsYGSDc6jWB86k",
  "key18": "5EjmxYNQxkBKLyWtwmd8skwEVTaadcNmBKuhqG1jER1nZFHSRSvGwwnpbhkkgMT5HCT5utZSRRG6CgNmMYvj2g3S",
  "key19": "5Tw2acQ81pUocp9u4JFeWHEEmK9CtGKu4hmvKd1QkcdFFt4vSMfqwgGZruMgXABGYMinne6s7cqQFXx8TdDqjNbj",
  "key20": "5ri7Gif5QkVpXVCrgLyqSL2BXYqtREfYgAu1Yi9KFoK75WAjFRtJGnCSQj8yvuH4qBLZdqRGCQD3X8QPy2N9ntKr",
  "key21": "8uWaoZufGBp55okQcRzNJakQHSdNTAJeeC3FaMTj5zczmj7NMKTdLGinNNVJadZMNfry12sQAfLL3SiSa6F7fUy",
  "key22": "ive2cTpgdiQCUxtZNin6kbSH1wixXJnLEo7zGRensUmmGx5ZMmE76gHfg7LKZk45KXGFmhDQUpvgqASZPdf1d8z",
  "key23": "k4zLWK2cicjdEeZhv7sBCQhpvkPHjkzCLySg1Cm2vpV6BxWQt5MKjpVpQPjvZ1fAm57AbrLVxa8ZqvPXz4cG5st",
  "key24": "M8APWjxRB5BN3PYYdZijufLfENB4NiYRodYqnqrV1xStUhYCCNqNkqe6sBTRNn39gayVkWi144od8VmYXsBXRJQ",
  "key25": "4W4svufRGtCynntFjkxok3XPCBbFzA6kgJAP8f9w6Gcw7LrC6x58UB5qrB4Hyr4fAiKGHLVeM6heEg4AX6bAiiPd",
  "key26": "5RP2pyrCxDJz8NkNzT24Ufr2iSZhDzFBTBc8AKCGc4Uu9UyMwA9nTffzFcyd43ETidevWaVKoHt8ockxcs7U7xT4",
  "key27": "1NHqaDLp9k7dghe1ar72WVmigLJgBofCY1EGYCfDwKPUYvnZraro7he7pbWzhTanxTzPdGWUmR7oVAa67vQ8Efh",
  "key28": "2LorCYJocs3k6u3qPeQUJNgj62dqZSXNHoJrDTXL8JaRgSe7JZoBtv2MTm5tn6Z4prFRiWYdDiLQZ8u6JmejE49o",
  "key29": "3NhxLPQbJzwBSzuvuMdRhSRe7Qxoe9qjRRQercGAFWtJtQPVjfnHRbPqDRqPKaUZ818EkAQWyYSU8MK1cUbia3Um",
  "key30": "3qbaNEhStRdyW59X4k4kE7f9r9aCQLeTGcsoSmrujjp1Yz8HXy5K5T43gB8iw17iJYzGw1km1f2ias4gbJaXQ8Hb",
  "key31": "wntZ6WtWJWw41F3ZXSbiSsrU8GjicLWkTFe9ujvQCqJz81QF4WwQFwLp9bcCi4jEsAhpyEvxghUEhsVeJkVStK8",
  "key32": "45Mt9fetrxyWypSsMvomKNf8s4aHq1Su7SxGa3mv1UYVHB6cfjFYSwmEL4EAF6xo18Ta79wkhEjwpHkocTZ2MSRz",
  "key33": "5rw5T33McFtbcaDPoQSQ5ovrcfkU42scKcz1J4MtGw7YTK3ioK94aZ9Tvf3YBYmncgo6B7u5yjkJzzBK1u9tByjV",
  "key34": "34yKVtUg2Exwcd2gkueAaQWQVq3DzVCKaAtFr3m94CBHQdKNppX99CKJgmn3VJNu8yNjUnf3QFa3HMUeGpNPUaA2",
  "key35": "x3kZ59G28JuC2ARy71J3Hskyb6aGg3Y268pbxHk93so7AgVwh3cHiXTMTDmXT4iu874Kb6mdhofPRZpzXBWUoTP",
  "key36": "35jzu2Ddj3bYSBFw4fSpX37DB7L4SCbk3uQsX2pKaPjzi1qyLGRyRb51eoepTRDBUngYL6YJ8DvTz5LZ3TC9gKK1",
  "key37": "VUzVYXw4qoiDQ12em2HJWg2U9Z4UsBKH6UKEcs1B9KCveb5fFq8g3xRp32hsoQeaRFEGQCzHbqvBAcBz3pyeMFi",
  "key38": "5z6fZZDpfEDMWhLrqjEXp5BhGnjJajiUzMeXCjihXHQVxb3oPZtzFYfZkYTdaFAYunCskZNcwLNJyEwAgqPH2qVF",
  "key39": "564ZwVz1QU2XfF6spK9tt5vXJwA4WQytrLPZ2oGmFS62FXKrD8mLE755tFCHSSDTE3pG6nKvFhDYSqnwiaozV8G3",
  "key40": "5GoqzdsHMSyEv7rXroKFPNVW5JZNsfqL9EUtwEAsCqyyEv8YdQaR9D3SDLK2FXNPsjM3vks8728ZaWV5vnZztBV",
  "key41": "2A4puqwZShPg6uayyjjpCZy4RgovweFa9aaHeN4DMBm211fahcp6GgcsFwQVj6gQoKTti3dVKSXzj5nUZdiUcMbg",
  "key42": "sEwmLS7d9zN7QkyXqq8HdtVwgKPWF5xKaRFsrhCCL21hqzhZGU37C1MXvwzQieXMiyBikY3shqeGqrHc1fdVni3",
  "key43": "2jW7K57wZ9FiRoX3GPwMwEKJxyX3nfwnkzs7ko9U4YzECmYZhzDidtmNakuLuQ35jgkTiLqymifSDrkDWDBs9cHB",
  "key44": "4Bk4w9SCSSJRWwxcspZ8BFSxsMhACa174L4GUEDxBkd5oKK5dYiLnQUHVAp3kYUEoqNavjNm8ZX5jqf1nr6q3ieX",
  "key45": "3FMWb4oVpBPU9JxXYHNw6nuq8dYdmEfw5zrnWLVvid8omRWU1MV5AMEmz1sNzbxZ7aii8SbXbHoW7JjVcHgkJRuN",
  "key46": "2MzBCic2J2nLFw3poWgsJqL9fVqhSjAcGsp3YMSiwejdJKkME2ry9SMwEfZcsS8Ld31fJS4AN9sEeZqiUefrzHuV",
  "key47": "4KzUy2U6gV15SrpJe5S89BLFfUgoH8C5SUqcb9zJ5mg7TVKN2DzjrpyMC7gvZa5cp3vN4waUgCC3yhUK57RsWyVG",
  "key48": "2aMgJx73Zx6GguqyZ2Xz7c8ULrvdzk2Qrw9Ts1QxtUuwpsxLug1Cs5p5XgiWgjC5rGVPS6p2StGYqnPg9FGtwJCa",
  "key49": "2RUTJvtwpeR2R3yAptrmHYGoNdZp2Q95ZnXvyDhV9HTTk2hTM5ycuLocZtJdPCrD6msHmgJnqgbXd3ch517QQVYe"
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
