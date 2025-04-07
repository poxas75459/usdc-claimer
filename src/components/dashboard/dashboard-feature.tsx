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
    "mmNr9dPWxRFzYRx4agvqenFeTQ9WHsPoLYv1BeerXywy54UtXv5QVoij4ixgbZV29v8DFgVbfdcDAr2Voj9N9Ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waSqPfYA7rR415v7icR9w6j5dZrFB48vSFXqcdBUv933nqU9qGTgshrnwmFi32Xc737vPWrAVyrRWpdrpM5zzTc",
  "key1": "owMknYKrcJiWzAJTWwgaGnYtUFJqZXHdowrgmuN1wHU8DKrK2STT45RwUmGCNYqhUcMwkVtpYVaSMHKQ2pciyZJ",
  "key2": "2EcifkTdFzhdEnPMFNLjJSMto2BvHxJY7XWNRED4Prh9nLL18GMFy8cxNd6uVnW8zqijUvUM4YwZEFivBuBN57Cu",
  "key3": "5zjL894se6vMXFAdPmUxznwxBTYiEWc2up2sqPoBYNPUDzuRCj2b9xJWKjyCgtkB9M3FGgryY9o8ohzAqnDHmbpb",
  "key4": "5EVL1i4PCA3UiDfuHniAwWQ7GyJRE2n5oKPgsKyoCjUJVQ7y7RgFHhDhrYDsNYog1y1VHZg9xfk9Kh4LN5t8t1to",
  "key5": "54bbTfxX6D4XyDJffXSTpuxgoyeFzxvmThDJzcKGjeJvrowkWM5MoxtcVi7wds7zRSoTZfx4UxbWcnsGASYpHQH",
  "key6": "4QK5jLJb37ZZzj7ECKgEDUoKzYEsHs5NrXrQ53HDaQo6PLfV9cdhuSP7HLY1kDq5Le3DwrzaL1wi3vKXxECrMJiD",
  "key7": "55D3icL5cDUmTeDFs6oGvCohGmoZk85ps2rzqdqgsoufrszUDmpBX7jEQN1kbG48ai4dgrTBm2Sj9HuguLvUPZ9f",
  "key8": "24m7besekoMutscKJhTfDjS9EQ422EEmBVutCkcgdEf3UsGwRRkXq1A66ojKZV3RsZ1AqDqpDiZNkCe9begNHPUK",
  "key9": "KVC8DybQHc7T8U8CYgC4mBKHHeboHhXL2yHVvf7Vd5HfenvCBvsvWj8Hyfg22wXn6EjmdfeKZN8EJMLxTtRjBen",
  "key10": "2iigCCCZcqxN2dVtiZzi1r1XJhP2ksah17FuPB2crRTFTnXJExphYGkyz6N8TGctAb6f4UuuA6VZvDN6PihV8yao",
  "key11": "so96xTjziLiDUgVbzW4TFxmgkHfg51wNwQ1a26Ys4PBnXC9XAdKySFVPrXcP9Q2jBrwWmzYDHvrdUZ1bBDSfynD",
  "key12": "4kzRRbGqicBFGGM1iarEPzEVqFC2PffAmLeB2kJnFmUP9VE1dDkDyP6wJrCS7rUoL2J74k1q6zvLnvX5LVdTfc46",
  "key13": "5ntxDRBi1YrxqkS9B2kDJiSB6dFKRQkCGJZ8afZgdGuqRhztMZb3MHC99hSHVbhBDzzUN89nEJhRibsM2bJVfKkd",
  "key14": "67LmopS3VSeQhT5xADQ9BkDGU5LQphZJtjUFuNaCmv7irucXt6wBgHV7BWQ5HPmcfxjQ917VYdBCR5eNqMwR1m5A",
  "key15": "5eP43vEHSC9X8DgyParsMAJXjKX3BAnwRhzTiPvF6Ho3xrPxBt4cM6MY6Zte69BLnfTXMz4vpRyrneotCebR7zSe",
  "key16": "2CU9rxLXdcRF7nZiuhUVNsS8uNanFTESyM5eRV1FerjUcvD7AVCqmX3U8tSKvuehvXZTaUxqBihfj8eiiUg7x1PS",
  "key17": "2NB3Xm7shZVhnMkyCfgQFEZLxnXg8QgdCp6KknaPvP4sc53HPKWTmRXBJMQfMijcbAXWLD3XASLCLMiPY8ctifXj",
  "key18": "2Ba98zfUASPEfgQDodw3tC43uXYXD8Dff5F4byMDqLZ2qiD5AYUhgSP9tknfQ8C5dz1fWwooW5Xm1fvuzfmMbaTt",
  "key19": "5GfDDNxMJczMtEG7V6Cp8AwVLwxtcKz8qjvU9vMQxPZAhTXgmhusZonYWodU4gPtKaXfunr2v1C59sKPZ26uNiJm",
  "key20": "3MxtpheWeCKUGt7DpsLhPny249RSse73duUmNzPG9xrb4B1HJmzSeXoDJdMD4J3qvdEZ8jZnBMNXxvDhZWddyv3r",
  "key21": "inxzEopGnUNVctRywvrZuUuJEczqZsukN8hXRuUYW58XBzu4Csynz2fNM3tDMg83b8whP4FvoEF1dX7G5YvPCGp",
  "key22": "2DUCR5Qhs1rG9x7jeBryvc3th43Szn5kcc6FtC3ADLdFX5yYTL8pH6y8qoeRcxeehoFL7sDpCHyesm3SF2QmSohh",
  "key23": "5Hck7eShEnsR5iEXVihqmPaNyTMsLkKA4fxYFoPEKA5nvtYFuWY4QZeucBUtCektoouruQzr7y2ZnXtRhf6GKATz",
  "key24": "4wEh8Tx5qXQtZMW6q3wi67SBvGZRTRjpM6kgbdGpXmy3Cb4UwjziXza9QySYTmux9TFQXtykJgopcTprnCs7vHkc",
  "key25": "5LJSoJQJriMBrgBpWBwGVyqXQj6ksf2529hfPpnRdJywzwy3sp1rX2PhiXCZLnF5GtLkGtijzy2hrYmFfa3nfPkX",
  "key26": "33fXUb8e6AtPwZv9B19v6iL34Pb1FNYyGA4xS6m1ZdxHmeGVvyDB6ercVjLd3998wTvtyNDKbsQaC1cSoZdBo4Wa",
  "key27": "25VQJh5sK3E1PSFxGuzHjA2qjML7N3cXs82oWeYgE9DzadXv1MJ4xQQsStyz1hLxcxMh7Fch1JavKxXCGmhiQWJK",
  "key28": "46FiJa9LsmgXDmkjF85CYBPVmwWh2Ppqmys19ERzbHaeoYg844DQaQow8rtSCpQf9SkrBYsXZqnC4Fi4qTsEpNhS",
  "key29": "4U9Gs9RbXxzQBsFXqu8Bsf6jYiaHNhMYXq3Ujo2zKcH8RrjmoEx5QoX4ySmenfsAjcJWkMcjSnA8LLymtrsx2GU8",
  "key30": "66jkbofhB9wS64Yp41vEtt69phPNexkYdysyh4GbA8iTwYCX4WqfkGwvJ2BiQxUUphgCQqzUpFWtZWV9zSCcs43X",
  "key31": "2YKi99a6Yg7rEAJCATsX7tNeHiyVbZKjXk9vXZysRLd9KkFsgQVhSggthzVdKbZHZZnMd5vi5PGFwHAi1i4T1uZk",
  "key32": "48PUNFgAeQMA9G313HkMAw5nW42M8NRHhLCrzwy2WU6x8mVnTnF27wKQQjRqpT3Gief7JquXfMNQuPpkE6W83xPn",
  "key33": "3crUDRnJPWt8TyLg1Q1287YuwihkX2vC5wJfAMvypSR71ptJdz5Tuzi181e4AkK1EGCrKLgqFoa4iehLUZq69hp1",
  "key34": "mcGn6eatgGuk6UirAHyYuoGd9jeyKy7YG1z6HkcF5nKiNDPS719fugHE9PGaeXm2RPfj4s8AjmxEWMnTb6JcPZr",
  "key35": "5eDhhiLeEv6ZRn8CC7MSFKKyeNeABkTVg59r7mLFrGMxbfZj1zVVRy9uZJS6WGYE1798fmyWC46njCBBC6w5xynw",
  "key36": "332o3ug5HwKcmnxhk7zR23CKc5SfmeBaigpauniSRLurWWknGupJLLWpQv2pbgFnAgL3ujXPCZAJrbwdhjGJfLWu",
  "key37": "4m2WQJ6EHUovxRAE1roiCzNfvFJQmXTSA5Z5PQEUBrQFhGFzqDMDbSFNpg6cgLJB2o7FUQrQGCMnSXw2DFWmzWHw",
  "key38": "4MfzUEiyZBi6fpx7CRudBSAgBf8NvC5Qm39RscftFcLNWv3p9mEvDffR4DzoqtUUfj6LDyZddyt8ymGrWJF1936q",
  "key39": "27FmPVWpY54wDXC4fw7Fsf8HS3kR7py2GR46BZEFg3MipGwkRNQDADeFJeAKfU57gbXEkAkV3V8psB2wfpQ8srVq",
  "key40": "XtECdCS8ehLHbthDjcekFWdkHqTGtkkGE4KFWXXYTEmafziQRykLU5BYigFtXenmCnY1NnPyppxhiWzcvSUP5XN"
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
