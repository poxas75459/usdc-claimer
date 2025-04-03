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
    "2PLhcytPsDLDDogEKuw3ype6ggJAZQDj6zbqQQa56VDSrtDhJ6fkeGKL5JRucu1UNYwJaARhopok81SxuoEXx6ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uw3ASDuNrsif9gc2xDbHirEhxAS4HmPB7Qbsza74QYDdyHSJ6mmTra9SHckvzv6FdyCTMqq5uG7WxXT44hZXhns",
  "key1": "4WTbdT6WyoFXtPeFYAYcrma3g2wqv5FLfX9MWXDkNLDVjS8S1aZDAYuBgeGJQs1L8bA38wsJ7EmHigdEQxztdDxB",
  "key2": "2sTQYg16esqYEm4mZPs5YuekJdfKGhQZ6PfK3ntL4HfDrMMWwkrMGCHYxon7VzzapWmrAstE8kdCUD6MP1meqqUQ",
  "key3": "5F3pM7z7sBMupF7fLs2aWFxYuRQUbPCvutU4pHU3Ku99PgaTRnXQpvj1DyEV3aQo3ujybVzHjty9McQwn7t3TKJ6",
  "key4": "48ERsjY9kQSZSSbHhLCQxHdX7Hom6wokRjheC9gD1xsN63NkGq2oq8gHF61Gw86cZC1ZGjfVpjPACNkZGBbRSeyB",
  "key5": "AsHJ1aZj9HmUKpQx3opCEneGx7xtR8xx6Y4QPfjaYpFuRoqYTMWKfJCDAfyCXowx4Z2HTpwkcs1xru2CGs6R1Ms",
  "key6": "2WaA7vRtHjRNFiUV1GP45WxCYjaRcG6xXR5L9h4ivHQ1uQSnntWimudDj8Ha9acPceSDxgM1oH7q66zfVmLaMwJQ",
  "key7": "2Yqawvh9G2nj2zEbPe16hxLhmGToHPkHExMzK5oqP4NbU7wMEeHfdUajnZE3RoCKi7XXvtdiVLuwA5h7ZknJdvMt",
  "key8": "5JxAPYBqWM4qmSEM6XsHqi21HWuZ1VKoeNvN1J6TLEm8R4UB9u2ndx8tMdqmZoRSAaubmdtC61jCY5CkeRa7Avwj",
  "key9": "4bCrDdn3N4iN5mupUmxvQCrBCL4pVFkkggx62ttzW6rptAudWzBbXwzCPySzUUexSHr1p5sYhEK2yqLkKnN3GPrp",
  "key10": "41a7SqEbH5sZbaDFcgvQE2pNMt82Zx2BQmtjRm78Dk1t2tk1j1GWycGbdPXB8LzPjydAEKWhDqqfJ9qmMHeZU5LD",
  "key11": "3kV5xk2Vqay8o4snpg6cK4GEZPRugGMb8VMmL7DN6taBwBXXU3E4G6qeUnhtChD4th9SiyzC21dbcXnvc6nubuv4",
  "key12": "253pMZUR9zTytnRaMRfgevKMYw1uVyTi2E15ZXgXkNsuKNdb8yeUU4kgKv3eXjaFNNbsYm9zP8acCaB9JwkQc3V6",
  "key13": "47BMrM8Wr1n5hsYMdT6ZJGKcSAuWgXoen91nV5y44NhHhHXGF4KsLJiS1W8j1bndZNbAf4rCarU5PgZoyFRXkNzc",
  "key14": "aFL3tCd8zQVJnUc9WveEDWX6Whq9WNSqR3AZK5fBKKEewWDNCCSNWVAz6fVR4apeUGeLtuW14NoBX7aqyAg81gd",
  "key15": "2C2jED8M1UGMnG5mTktZWpe5S25jWMKR18PQRkE9nSMXzwHu1eX3f4DiBChbzbjhVwiFNbgByDjUxdt9DLRv2aJv",
  "key16": "4Xp9uP8einTGzdkkgqd57HmQDDYFtYcJwMt3wzwwVwy9uAyzswnVYcBPHc6BKRkUm5dzDsiy4TV8nemgerQcnUZ8",
  "key17": "4jqkP49PKSM44ghmT6gnD7RsmuTd7AWVZ5Tpp3himb1VbaDt7MvGnJViKUDFEJUpyNUsup63ohDnbW5ap1AoHjtC",
  "key18": "2TZWEA2mE9uSHP7BkrphjuTaYHmpxuJX2kNPeYARSkepw7UaD183bKMeCQaCiPfVwf17L13XBTPUrBHgRS5CExHq",
  "key19": "3sxks9vUDSU2ySFDqkLYwSAxhSsao82jxvPe1ngeDSEEt9uh1pgMRzNcGkNAMgUQpufaD8yGBxYoUTfzzvN1eLZZ",
  "key20": "5bgMmFRQfC7rdzwcLdrGAKoz9XXPDXiJNJNznshaSXCWJ2JJ9u9tF6hfFVyWSJbRYxWBDAYSDfpCwYrYWjgvmvSr",
  "key21": "2zNtjHwgH7CGZ15NzGrMBmZRtiuXCiu9EXbZZg3vq8VwjipxyqdsiUTCsinKpVuKrgoKydWgrPFfoEPwAkVsedpn",
  "key22": "5jChF5wauPP7kmcGLCzJbjyxrHVC9vbhjxbjn4zGmaDsxxW6Ljy9ZtySFWJKVitZJAJKSsvuTM6StrN48RHrWjk7",
  "key23": "5v2QrPyfdpWw8fyRhoVqKyihHnWPcjjpof2uAoQXkyfG4KZiZgYQ1GC1g1FLf5YDmntfgqVF64dBRF9Hk9gGng1",
  "key24": "3poJdaoGyw8skU5XY4F6PUB37X9vUX76U2qcoaS6fnSekcYHzjwXVrDEeMvaSDkyqM8MpSCc4WVe6TGgauZURuCm",
  "key25": "eiY2Uomdhfkk3R6p4baLUQwbPxfuwRbfVG5XLjtCJhkdE6Jr3YqnMriMNAFKHKb1ELSRbZLijTBuFGn793uwHvh",
  "key26": "38EjUD918QSaSxcxEiMKx2R7FBp9tp6zQKpUQaBvAbZxtiBsgQswQXgE1S5kxLuxrNeSD2Cx9en9AbYuoSYyWHqS",
  "key27": "3WwVpznvCRbqxe8R6Upk55Lgm9xzMFEgVEYvKD8UZpqtL11UnfWYbC5P59id9bgfFbtx1fPuAcGgPtF8K9mx1GCZ",
  "key28": "2ek35vwQK6iBfx3KxMcXhp8arCy9gLjAY169RXUdJqvjyXjaPUSkipQvPL1fe2wqYHZmP5YfEAi6187KXSxJZ1MV",
  "key29": "wSv9uSqAtLDk1eZb5SgzFMNALe8E9Mf2CK4xLCjePA7Z3awySBf4p8egBBk84F8oD2ETZe4o698gEzVyKZ3io7i",
  "key30": "2gW833NuKU9Xupb1Cb7H69tUURedHfrW2kNcWmhDs6hwwQAEjZqv8xL4AAMLTh6JVGz5BQsZ5MLeyzyXqbYpQizX",
  "key31": "uQsEeTNaRU3C8HEhfzncZmfHWbhGCVxTuRX6uNT1xqqVT8vrMmUnTcXCvLuv1HsLVR1UNcoBzoJaDjPNaSKsBNP",
  "key32": "58VXos5iHfHfYqboxe7fWF1V1iozpmzQSohL7oeUPgv3ydtVAuE8YHKwWsZjWrzmCR9E6oMsdtKbUcgBPgucgAQE",
  "key33": "UoyPiVvLJbk7gwGgCSVssM6KyRDb7CVuyZuRj4xTUfTm7aHJcRwNk28TQqmNDXYWJary1iDCk3fAUGGD7o5hFVe",
  "key34": "5gk13Q39YRknMCjVkz4feimucqJe12iouvrEWj6s14d9CFTUoj1GcKto6WkiDm5sbnyRZUxhY5vTLHW1QcnETbk2",
  "key35": "QryGbRHdoPDvSEUwLQEJFGcjxAtbmCnherEk9uggtLM2HwrRTste2gJC6oRv3pWE56T1bshfyThBmLx5uRiSSE4",
  "key36": "2sSQCgqRX7FEmEFuBycmaYi7YCjt4K3zw4gHSCkZs2zd9Fx2ptXQRAGETmwTF4aQrT6ndwiG5SR1Ya39L73PLR9U",
  "key37": "59vRbNQu4FMhMZaBDBT5NDsKCXL6MYPbgEF2FdwkkraDBFTbi7LHFAJWP8H3WHjHtjyhMtoHoHMhhP9WUX8UdfUX",
  "key38": "297Sjjxxnpp7oD66UM5rya7ZbhyxyJUT2WJVRE7aYJ117Uu6yvGjYhJFtgSPrHzK6h13uR1MCztqcVMbCfzowvbi",
  "key39": "58LtFaMVnTFtxBRA9p7vsTBdfnnbHjVqhDFTZLa1ee47qo1QxUzVnpD5EdnYBFjAz95VBWLD4JJutt3pWVL4Q9VD",
  "key40": "5z7FHUGfe2xhvmb2Em4HgBZFvKwhXoNjvN4cBSn2Xfh8ZAEBVm3wBKHyn8FTKawQka2fzuXnCt9zQPNEzrEzXxyH",
  "key41": "5t8Bc5C2EZRyFoNXMMft1muGPKmshg5fnPSwVSx8xd4emkHfeJekFHKWz8dq7uDDHUNhcmjiS5yh3WBRB2v4gHdL",
  "key42": "5sXAegqP7xWQvgu7UQkFKCoEYxZSRkh6QwdH7hsrKk8MDPgKzjCAM5JyhhQAY2s9ywAWXwWKxdjmCNrbhwRE5uNx"
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
