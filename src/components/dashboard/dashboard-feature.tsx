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
    "275Dohb8CTqkRJ5YpCBsGZSWmFxyxSjPngnW2BBN7vdoNzCtws9usqktK2bRW1WpogcTrdNfBxDvhveKxnA9mnaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WM2MvEJGHsMcUMFJgnx46UaNicbv7Gn3BWybGovY5FYcx2bP2uUBRxjxb7PXTind1W4z2r6XdbUdAPyE3WUJF7Z",
  "key1": "5vc6eH42Kvcfg8HjFhbwcbLJLKncjrhazViykPQESrA22CTBuwMYw2qv31igNzAH9H5MbvcVh4ihGpDuyP1cybQY",
  "key2": "2MkZTqy2BWDVEFq4uf1xiwED1kjevdWPZNa1LrfFh4kNpkQ62CyShArYP5bcpJSs2TWgE3cJdFcu3uzQX3pWjEPr",
  "key3": "59mHbWzy9xoW6pQx8eUred8QDSVRaenxb4u99dr9jpoPNPLmUwFTaFQSNg8bstZXRaAgrBimWBLEWF6gtiQPNjKy",
  "key4": "WHbNfA7SvSt18aqecN7rWc5W5YuGKz6ij1rT1MDikTuy9dQJuUPe82P6owGo57jZhUBxvCP1fbvSNVoie9CGHT5",
  "key5": "66edCXBf1w7h5ZgtGAThFhCzWbQf89bQR5L5gMi5DN4GPqpeT2RmSwceJkJd8ajcHyr8Rc85pqjTwcQtVo38em9k",
  "key6": "C8uEUHWiA3u8veEr1cbHoReKELUm5GV3CiijZfUbVCVMNATcgJ2qPN78SzunEr7yHF1dA4g2FFQF7yrzEBA9Y4b",
  "key7": "3AWhrWKr6i1dafH8MuxHeik5jXpms4Poc4gQUeMmxePGxu3pjPYjor53hUfgaRmvnjuVqFf8oTFUHBxCCCoyAR5N",
  "key8": "fsyLXAABj3EcqktPF1LAXVS54ni9ira2uJQ4pqqaYfFD9uk8damSTXrhYthjNhAjuB4kFsnjDjskUwWMmqdHge9",
  "key9": "2rLqxuNhR59k9TzrWTq4Dv8SToPR1a5bsp9PHpU5xbP1KHJZ91nPr9mawg7dKWCAAQD79wCqqe6h9Koo2DiBAdDg",
  "key10": "3iFJdrKemWVXezJ1goAPxUAk2qdbGGS6WXMLQi4R8QzTWBjdJVyY7e8WDkQBEh266vnbQKWcZK8tbkJT7S96rBsF",
  "key11": "2vLdNiu6tFdoWrCJrubGiuy5TAK9ogzWp1ujk2YALu9EGvfBJvRpc2Mmjo4zFpP8gN9NLGi9s9NS8keXxkHoreRc",
  "key12": "MenY4x4QJwm5LgkKtFzyCwU4WAxAxnif5qSFpYHAHMmiAmyFvsPdT9nMHfst1PhC6VWeuGqee3wAy5WAYiwE82w",
  "key13": "3ad7rk5oUzPU2dvLpbBzaU6q14XnDygZB7oAhKhuHoLDznK7nABk2j8REdqeHQGJqiUCDgntG16X81HwCVUX5EzX",
  "key14": "5Cn44bGj8cdz9FHnpz9h7baLSnCwGJkcr8PVuu15ZEAdC1XCRtSYzDddAjW3YkHNCCP9nj4cyu1xKRUPFgCtEAX2",
  "key15": "5cvc4qpE2PtkXxThnCmnEnrEUVCPWJth1r5yVsV3J7SA7fNAB9sWiK3rk83UUKbbxt1Gbu96xA3Jh3DC69fnyS1s",
  "key16": "KzpHZ1ZuzzSpgrWyNQeW6LVqWgC9wgv2zLmKpdGyejmcxqZBnYF9QCf2rTpdrcsUx9qrBtdrxyGvv7LNVDz1bZD",
  "key17": "5CqwwU6yHHDidsd1H7aa7Wg9Dhkm7hdeAPH281R5WZHHK28uCXjGSWeg1eY79B3BHEiqHF2ALi1WzyP9LRNiVxzk",
  "key18": "Wv7K54nEmb19YTvUFdYKiuTTFDHHnc8ZRvAWuk75PiJAYb7tVfWtZguh9eAnH95g96gDX3Nks2YFVwosh6zW45F",
  "key19": "5haAzSnumhDCRUBivQz1JdqHKEcwkPLXTcxRHvNBFrSVgxtpp4qVHANfUUD9GJK1QWgbnW2rhx4VUtjYWiNdEJ9V",
  "key20": "2PjPnUyZAPojfWuJ3ZCiqLpd5DKGKet65G1soeusJhYvPAYNJpPQggQ1bfjhhx7SNeqmXL1B1hHJiEpXHPFgzoDv",
  "key21": "3wnDPNPssBqVF6G5yD5TcTTn4PDngzXsGqJKbCgEG2r8zVdeRdNtFZhnL2FcoPAJV8zJ5kjg5HtJofwNuTXmfW7C",
  "key22": "M944f7oSKLVw2XpPqTGT3FvmVYZvWJpGGhoT4Y4bPB7uB4VKgy2t5dpBNhnRNBvuFK1AZ5VHG4q47ccnpjc5K2e",
  "key23": "98Y1rqbZqmkNQTHJ9HvhRttV7woHUTub7qEWd4uqfHaPfAqRk1rgmV4iRfgvNFDKU8QxA1hm11JzsHnzBQPXEkV",
  "key24": "4rL4Xv7KGZqswszHfGG24ftB9SsP9M5FkzaAhMb8hy49MCrQqbKWawyeJnPae6mhZPwEbfNU7TeN2HGzUZ54F1WA",
  "key25": "5pBrD8VeprMtcK3WS4FFcovdsLPbMvZcTVCS9ZkY8cRzSwtXe3ZExiMxibxoV3iMRvCa1Wd6tbzX9iyABmcJLEF4",
  "key26": "4Di2ZHQ3P8iGgwcQgDccb2GzmSAZSFzXCuUTmE8CwDgLXmnoA33rRuMuEMHm54VwcqcLFmq6Qq3cmPgtjwWq6642",
  "key27": "2xQ9WX5CihLvkPSE3YpGsKXm5MjDv3ACALM5K1nR6NjZA6frhcdNjrPhzEjaQnsoaknWSDDfNoAoazoC8qKmwD2r",
  "key28": "4wz7NhphVgcGDSpP7kwykK4ExVptCRHsNVy25NEW1EjhkQVeX5UoM1Ep5p1kzyVqDT8fMpbiLDtoVeiNs59Q7K9p",
  "key29": "4tzrbeJwbszyu3imjrHLBrYg8suUXkagzPnFcSYSZyjBYs8YKompjfVD8swMrAVUGee6b6uC9dcdZLdiz4eQp52U",
  "key30": "viY3zNNRWoqaJEoS2GNB83zjc6WT97x6G29r8fPRUFW6CJTaFVyedBPUvHW5sH7USbgb7M2z4MoHV2gT5Xf5AM2",
  "key31": "B3Vw82P5NtoXgdc6TiEypXc7xAvCaGpYDvi8KEKzBHBChRLJS8WRVABRjFnDXmejXahsVpzHND294Pz4nb44N3C",
  "key32": "4E4vMFQi89VfM1ykSRgxhd9L9bp33VznNuYwnN2beGi3JinKMob7v42rTQkvYhnmU5wvkY1hNcuAtdFcafyAwJmC",
  "key33": "2Sk7YbxZLQXdfwkSbLZpxCajDJMrf2jKNCLYmV85WknHv1B1KG3EZVsFY8E4TUQ6nnxHvu3Ac9DRxKmqyJBek4FQ",
  "key34": "45MKdBCsmFZYov2yW44f9hkXUWYRq3w6tZtYQDn1TAgUfJus2x4sAK31TX98LAiptutwbm2wTzeEo5UZvgBAnQAY"
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
