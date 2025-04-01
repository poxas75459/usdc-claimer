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
    "3SdMG1iCKFgjXDA5iW9g1Cg8DPgj8ccJs1VRyVuQ8hLKz7LRJQSxRuiG9UKeP25A5N895cJtX1tZpUUmMCXB2prf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dk8gtBMuuCjbUh4bUCGiKkm1q4N7eAHmTKMYdVAiKVjEiFyRNB3PLi6964q2a2ppzdBHM5Bnf19xQmuw5NsKomf",
  "key1": "4hns9JHWQbiWMQH76YegPEEeaMQyc6NL9nkBEV1WthmhhhKEcnCW6kwVusjMqodegSefRZwzR51vvWPFZbMJzyxs",
  "key2": "2JKGANzse5mKGn3E3pgyjBKaks5EBSrUoj3tE6eLVnXBYiCrgrfh8CTrh42uJnEuXG9nseAPDXmV2ktX1E45ZwSA",
  "key3": "mYfJc2PiaxGEN2XdjK7mnFEnNFetwQ9uLQB62y5Az3gefchzkUsBBaaBUSddHypCH3ezZGKtZLPBoy9mAVoRRRV",
  "key4": "23SeKd3RmzL2iQx6E9qCRH29QkuT4kuHtjbuk78U3JQ174mYLAw6dr3ifUKbKpoCvNNn5mUaLanDmWRRJ6dcrnch",
  "key5": "4yBs2vNYFQiG3zkNsBguY6k3yRAXXLc81yW6BUSuD55Y8v1YqfrVu1s6LzS3z1r2UPh8FQPE9tSaStyY6b62Aevg",
  "key6": "2dKzQ2BpRFWvrXqast544BkHjqNtLfUscBMbysESWUp4tjoREfp3XDh6T8V2FUbDcLkUvZpNB2kT5sCxgFDyDxKz",
  "key7": "2DcRnv3VjrAYZtaFLgfXC6nVVtYhnvtVsS7FfME6EXkygh1eCaZcG68M1mLC7UMLnxDpp9n5EciKsQJaqwmopbMC",
  "key8": "hkzpK8pwqf6pruWg33xJjK8RzqGdfqGe9cED5LXbFX6eKHwT2Cw3L7F9wuNhA29bWu7LsAZsEjW3U8769cgPT46",
  "key9": "2GPtuzoUdH4MvFKBNVhAHUdy4fdDp2oJPtcZWPbzqd4eaqZSx4SLoSRga59LT5RmBnTybmSANmWB98ksmjJ6Trrw",
  "key10": "3iAQup8BLTDnvw8QPdFsGdZxx1NppCVT8b9yTKt8t49mV2fwKNj753AgQVZJeFWrZV1B3P2rCKsWZ3zdedouPms7",
  "key11": "3p19dt21ddZsLfHLoGumEUJQzidUs1GxYxNg3xkHaQnxy9V7SMxKdyxN374ZF5afd4woqdq3iZ74TgSD8nhMuA14",
  "key12": "59kpQWSdjRuqVoURRoMVwpg5oyZ37ss1UfxVCYM7ZCikFAoSf74Zot9zbiED5TYQQa6s1iRYLBHqmcKj8jMKb6eX",
  "key13": "5qNTXb9tQj2CppgBwwe6b2YV3CvkkzfN1t7ZidRLtVR6wG6ZYBnzYSUnk3x8zeXGVvgRES6XCKhYZfH7ATnQ5Cou",
  "key14": "2m493Gac6d4JA2asHGJFtjwjK19pqyKYd52XS8EjZGdD25b9KSd3j2AyESvhHbewaVKqwkPgZbow6WfRuhWwy8qW",
  "key15": "2yExU2esd4Gs2caAW3nY4orX2V5Qsyfhj4jHPpgVeL4guL21h3gUfY6iEBe51PXP7Sx5hxrkyG66uaH83XzbChUV",
  "key16": "3LhZ53YW3v6FyiAKQW3SvRskGJE8D8Mm26kJce2cs9esr4nehNZKvH9Mu6gE1BG8AuqqdzrzSi3Wc1fVmno3mLdf",
  "key17": "27jcu7R9SgfT5DQDTjVGEFjp4XHHpZr1QdyEgdmPe1MHu7SL89s7xCQEN6baFT5maVS821o5QVKrawfRCnUS781o",
  "key18": "4k8aW3zqRHRtX1b9HD2EfTNezozVpEnfByKwXTdQK3fPbgzqND1F5LTGqdMsfBAJAJsMMTgrToXfGHmiYXbG4Ufq",
  "key19": "2GXfmvrv8MKAhAcRCTL5MwaqyFSjQw3JVKCupZQ8DXDyFceDy2UQd4xY1UGfwdu3yExMxBtP22F3yQhLJt3zeZzd",
  "key20": "3f9FhBjkCnu8S4gEnEtrpsyKr2VR8hmVZ8qqDppfffjZSW4RhtqQmD5H54ZqtDhwbk6nf3foA9ysToEsUYHrTkvr",
  "key21": "VfczM65tTJHuukMZJP6SvZYWt719jj7aNQb12KBf3GbESJ6JzVjmANs6ZEVmp9i1Er4cR3jW6sbHTf15SfTbJpY",
  "key22": "4YC6NvMzpq7EdoGsxLtATZqJKtSQ1sBXbysY9tKqGYcoFU4yyavd9XhebE2jC2EW2uee3uGK6tjQac8KrU9wVQiy",
  "key23": "rGWp5bGuL7GL9W7ZFxKDCrv8vCKAi2KA47m1kdbHFaVxtdmJfim8AJaWpmYoHpFUCupm1md6bQDXktRL2RUZ9zk",
  "key24": "4XTPKucTfDGoZnPy7dPSvxZFZp7htvazgfcxY7YjkLJMdnj9ppcQpfd5YwmGp7AH5SNrzx1cyPB4CKTAJQmtVtfi",
  "key25": "4p6t4VeGdNCSobHi23h3UdEju7B2B7gynh8CyNxcmgPQkp4rKrDHQ2Vpje2n3b55cvzDPdt2GFeiWUMKaFheLh96",
  "key26": "3Ggn73nbte9o14ncQCv3S63GCqwvAWwXjJYbpmFj22Wt2HdEvKpTJLuPjsNKPCpzYHBQzwmB5fUkUCdRrCGLsCWx",
  "key27": "5ce7ZY6PHMJf3TSG7byKdSEwttdzcghQdWtKYxkH91sAMMC5zLVdiMtBZ1QPV6TLfAkLp3HK994znNfa4AgQfMby",
  "key28": "tCRZqK94ujNqN5aXVNF47hnjq9zsiy59NeEBTJcVS8Hwxdejtp9tsKfnAZwdzDjGyoGizQkUSa6Yypr8yAk3HQH",
  "key29": "42vorjoh1UNLHVkQGQP4iKfo7vf3Gvb9rpYrLGC3bXYbMkyuVsvkLCgVs2rQwzscRyZAvY8ZcrrHqWzTCqMFEqYa",
  "key30": "4LKUkhmwbxntQzbDYBz7qoYvL4MSFi5aoeMdLHDMnQfkRJBSZmxrS31ZVRqJeQ8hKY2pdXgpCmwKiEU6Ai9xNHb4",
  "key31": "66kLjEEd2xvV87wTcWDquc4vcfm3zWHnAzUhQH33ybXrsNTcUTQhL8SgmL3vNJbQ7VeasDgGkEDm49BrJhHhbSuk",
  "key32": "qD3JeoN8j3vtHAwxE9kRRKaZKgd9w6tVhFsVWiuE4PJaBZBSTUip3VLHaFk6n8NVTfaDk55Z5Nb4gL8Myb3aMEs",
  "key33": "65vZk6bcaU4idG1wAXmK7g6xjaE8xatna8kNz3ohCFM6ftWzLDvDfjy9Y7sD3Eba47JRbCKNg3L24CrpA9KXrNwo",
  "key34": "4gUrnE7NWA4g9HQGhtKTUVHCgyToHoKdx2wyBr9TKCAu5RNVwo1CxmUWewZV9sUwgh24ybPbkh4S3npXFFvPoBWM",
  "key35": "6174a1ZL7oGJqDyUKQ1WADZGpEYFQ51jdA2NjBsRWGE2ed3YGiwTRHEedzKFZCukQtUfdCejvwcYNdqQ1Qa2HjxN",
  "key36": "2FBgmtgY8f6xZEAb2wbkrKxLQFpvdE67AL3KAoEjYrVRezBMjbGubvG2yZvoQA9BgQ9BnhsSKCcnXY1hexdPA5JS",
  "key37": "5P9TXmy4yV89A6JHpgAG7ef6GNnPcB8aAafTixozfrh9L6p7suugugiuXsb2EYQqfdgAAzjdRUbzZUrkSbJSYNw",
  "key38": "3oHXcG4ztVvPhX8XJRkPEWDjgye9uX1LgdFDsrY5J9BXP2j4UnGCvQ6LitmsuoEqpnp1dKDxm5zYSBZ83NMgErrk",
  "key39": "4CPDq6Rup8FTs4BatN6RVpMfgiFhTMeXCNmXUe6dF6pHZ8hniyrdkjdobRzj8SwHw3UfGtqYy76LwZ84J1oRPtXa",
  "key40": "4Pz9ebcGDke33ga4krNZvL4FV6hQLKYshFUXrvZMxN9kuj9rVbNx6NM9HDFTJQHBsWCbFhCcBGBCXZ2GJBtqZBP6",
  "key41": "21NkfFDMvnWExm6D1GuB8CLSx1Yy8Ku7V5VfYPirjnBdN4VY3Ni73jnwcrkjUxCixyJpNmhT9tkGMn9YugCTjcDY",
  "key42": "2PmueeERHdKyH4uh79Ngn3FXex3ScMAZBpKBWPg7MtKXbX1kHCFXoSAdDW9TedP2rRLNjqoHagu9bFnUuyJuEvoD",
  "key43": "2Ayi1uRezKj6KpWtRVrx4xHPU4dwykw4vKL7f4Sg9PWJAregCjCuKzisiU8HMk456p3hpTUzLq1fSkshbo3e7p4Z",
  "key44": "dYPVZ1RjqitFC5b2ZrfrQn8Q8bA9cEVuSm4i2YEWeU2aTBxxAUrHJ2YjBGg78CdKxEfKynCpEZT5ML4dDA96yFz",
  "key45": "5FWFKZAH3udTXod9aYCsVVLmXfDJezSAMkSRroPsPNEyKttXpbkqrjUM7mQLR3amqSTQZzkwK1kgFqsAXNorpwZX",
  "key46": "64SorkGW2NXrLYUMrTXHhuVxMP71aGafVeZdrLRv2MNEBDr8dqapSs4iXWxksbFi1DU2C3NEheSE2J2KWqzbL3ru",
  "key47": "4DkdZzoJEnFXWLkaByoEzKuCbwp3VFHWoBE9yURAgzRbd6qq2tBTXLSwmN9EtXyqgnB2fLzAV5xvmnjU1sYZ8wjK"
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
