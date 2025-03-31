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
    "3j6mnFJUvauXwRqNgL9FrNg7LzoZwgmNs71QZcPViiDUEBNHPd4g2yp7kDV14VGYApnrQJQr5HSzsuZ27vkR67wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbFstigsQGnnPRRRWNVwVinQj7m5tZRGQZfSDhVowx4RaVeLsdc2KToEi3B2Ah8GKVG9mrBgDqqiWp1bC3CSgy4",
  "key1": "53a4CiqUHfQc5aqSyGL4WP7Zm2ZDiyuPmuxM3uQ5DNBMSStGsgY5ZuT8KaGJj2bgPLtruBgmGBNmkA6t97rbqGwZ",
  "key2": "2EUeAGGCH2tjFdbHB3fjuhkByoMrVMDfnEYP5nai7abgcjnpcCPrjQWNFXZpXN9gZQA7vgczyc3xgGoptgQ6kAc8",
  "key3": "5DYb75ciVFeJdLLKg8GDyzxpXoEhzjnHLUPxMECyJFT4VphkbR9otKLaep69uNAqhrxK1raiPuAPZU9h23y1Kz5E",
  "key4": "27r5Fi8bbxjBB29a7LKs5LwLtjzf81Gdi4i9ctAik2d8UUbBFirFNdahrv2UDUyP2yz2eMcSXc1KXQxtVWkWoGXj",
  "key5": "Tp95ggwweS7XemJ2CFsAqy2Av1Bd4GJFSE4v3aRRTRQHvVVsJ1ag9E53R73vnuz8pFyDMi5A8pFXVBzUZMkU7Uj",
  "key6": "FZcELknmWbjSrDq1wbaRbdHwK16JLbzzDo5FEfKeu2iNxbFezdMC9bEtw5tcGWm3xZVHad62rH7USCgjwx9DRzL",
  "key7": "3fneswpzbQ9bfmjYo3mPmMi8hdYG89TNZoLxGUN7oSXRMC5ZLS2ozgBsrThDHkFRvDr1iDMWTfxkfLniUG35kacH",
  "key8": "5dk2eANWjZ4YEEPcrQ9kN8MpoxFcJC32NeCsuHaWTr38DoC6VuLvByzEcxDRFZZ5X3Aa8baxFKeLRgbV1oFPteAN",
  "key9": "gCgPeNrJKdZk88LAuEprdvjPf63SyU99BdBJBVjEThBSmFTNBP4kSRosp5R2LEMSEDn8Pu2svFSs71gTwLCyb6q",
  "key10": "33WJS8ygFtgd69UDYSapthTY4RcSgjPuFuzxw7XosedNMrFPec4DDPtsCsmsbKojhksydHtCpZvZBi9eq2GMgTdD",
  "key11": "3Z9Sr2kvKTTFELhBukNeDpkEnUbHvFoDL1545MXHx49zido32rS5wWcwzJTXeJP9P7M32mkvFvqnMMNHyjpZ9Tkr",
  "key12": "5sMsy2SzTfgGUCHLRDJBkDioJgmnScN5pDZQMeAo6nCbxxYafstNT5WyXGjQ6N4aLREywJ7YqovTSoSH5rjWGyxr",
  "key13": "zgRNwfy7xdY3BMT3KgZh9wjGJozbs7GBn9kuDdaDuWn8wmGpzmHZX2bAKRArAHhXcH8ua7nNQeVsJYsNZNAYYuu",
  "key14": "5gmBCRy8jrak5XeszKhNFTTzFMrneYNLSnWNEE1uS7oxJbXSAnrv19FuN1jbVLTPfnmFczFMozzCeXPVCv8urQay",
  "key15": "3mLocfAV14FN9CbVg9Z91briv2SY9PwjaoFvanF5wSCzmn8uigoP5t5fDgPLUAorCXq3z2ptKSCA4c9jJxKiExES",
  "key16": "p3ptzHDFNS58mykKQ2nKHN2qYNoUFakecZyKTDdTBorugTjZBJaZRpnC8E6AceGNHbCTfMSrMhhyrW8to2iRVFL",
  "key17": "5SJg3pQQNsqtSswS8x6NToXvptjukEd58min1bj8Q5XmSfAjMPavF2LDegKMac5QGun8LFPa9FenJdnTHdHpduRX",
  "key18": "4SSwwbMV26kZME1EdMzChMVcREroqHdASoDXcUaV4MFdSvsHNnheFoL7a1GAbheWaDuzZrBxUKS338WEgiuuWdZZ",
  "key19": "3mh2s8pWitBh8G82QMxf3XUFKds4uV7hzJsyqYRefVqjWEX1veSA9F8Mzju4pJqBmLW91CsmxkcgP8QL4aFGpWwo",
  "key20": "3n7nMc9rBBtrkHHofDNZhyWDL33A4ge5n52fv6FJJQpjs5cXHL4nBp3WLRtS7wWwfHPxoCGkdLxCkGb2M6adGfCo",
  "key21": "j2ozFuvQnW1QB6SNwVPw82d58HdyyBPqVz3nLoyi2VenBq9CwwofJeC65AbF8DKZxjrfePUtkdevxx4JzfpxeHK",
  "key22": "uHa6semNCYTuD5j8SdvviPe1ejwG6yFdJEsUKQiBcyhK5JtjFQ8EWb9zaTxe49KrYsw3vE8FqbsxmgRnbbUS15U",
  "key23": "3BJ4nFN1PkbhJmzgtQZ4mkpQ3RVR67x9q6GkXobRRMNUhyiKDxVbp1ckkFWykNgvDqzC5EpsSjjs3eU8zZKniNUQ",
  "key24": "37r1MKFrFhZ8zbJN3fiYVYYon8sMTyqZrjvhJxhUZ1DqDWbmcgi8Rer1auN2iuCuh2z9hd8JGiS2dxm2EBVNYniF",
  "key25": "2ASUE3BFHdHqNSerAs4Eti4RGqbddGKt7tTQEDJ72ngupxBsrfrCn7FXBK1etgT3pKpfKH5UkkDLTKRJ9BvJVMR4",
  "key26": "4yQZM5gJthN7Ps1JYTJtgmufvTPJ4LS9sou21FVV4vJQQmk9nvTx4afK96ARQmsp7arq4Zrb2Czbvz7Co4j1i16X",
  "key27": "2aUUV7v3ovqPh3FvqaQk3bTRWYgMjm27bJjvH3M598hRXScKoXtbqbSQuZEDvEBVu9KoUen9YoFu4P3Nn9YWeBxV",
  "key28": "4xbRwadEnijZPTW6Bp5MVmFUedqREpM18BNxnpcghuUtVpwoeCTcSTHprTMoNGv1TJxezbUvz4Pz2MJsvw1yDrcr",
  "key29": "4SNp5g3DZ1Pohk1qyWFxVYbTXDTMm7gJG3cvA3Qk5bjJm7ywiQSWY7ZZh5ehawzqyKG8t9sNFiNStwFHHDTPiMoU",
  "key30": "5ab5d7LTCKrfkYYAnFveF2guM81z42tSWcYMePBE6RHu93kDMDRXaXV8eVSiFcvjTxHCNS4HTgydoScB6dJm93Yu",
  "key31": "4Bk13gLXjNx8HBnAwdcPe1VNnMYRz2h6kh11sSCUbwQfrPZ1BHXfRkGR22gmwSNBUg4DwEaCPe8fJee2FL9AUrg5",
  "key32": "3o6LYZsrCq9svz3C2Winv99hqV62TuEJTbNyGinaJzZu5wgtAecbLmXDffnXhbEwMntCU1mfbtSsd6fgDdaxs4d5",
  "key33": "2L5zEbtRWgmYKK9W2qnDbDWo5ZXFxGD8B4HeyzZenWofNmLH2tdwCtQxWKMeeFS7k8PRz2xTpCBfyBY59KostAwX",
  "key34": "paVJUAevzPZEKRpoqmC2KizaLzQfZAxmrCRqiCWr6YLDtijQN4VFymDx575AfaZwQgdfSrjCApPU9dWFSrx3vTx",
  "key35": "2gykE8xkg8LnaUp5mRxdFw7Xs5VdN8SQyroPCwrSJKoXdeEE85F3hJXavNUaaRuZqidzQGptaCYYJiudjbts4vqD",
  "key36": "478YzpiMhQ216pPtHZoseM2wg5tMCek5qE2n79NXDTGXrrihJSeFZ22VZ14EnKG2MhAiKCL6Wfs47aTEsp2dhJzy",
  "key37": "vfNNdkKzDR5bGxdWueveU5ihE6rpeeKZ3ppKRaDi3XUjtbpjYqyepiDhKfnAhKVDr1i2bTFm6ZQ5r3eYreLfJFF",
  "key38": "x1R6HV6jycvFWxWFZN3ZGcScbMP1ztvyG93Q6B9Xiybzv3N94uxmUBsEZL22tTzTNs3B3NwB3riXZqYXWeWJ9qM"
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
