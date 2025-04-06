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
    "WggDfNR5DnJu2Li3mCPUEiPMYjwPbFdxA62HU89aqD6nML3PsQ2jVFTAVFXuTxpF6HRLgjrqd8zYq9QTQvJxnKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "684MGMTEGQJ4jnrqd1t64CxfTudF86tSqU6Ym3gnDiGqxMhtNBiCt37QFujY24z8emoKa7aAAedDPG7QeYnz4uB",
  "key1": "2dwXiBM5ChmRPRd45Nki4nxiQH9BFVsG5yGyKS7MnV1Uuvch6hzSJDD517PUcRyx9MPwwXvMjxFJZqdSStQ4ex9b",
  "key2": "FqSuKzgKjo43dArFRmM88UwftHB7m4YwyAvGh1cQexQUKRUKJB68Y3M5jjQQNzDW7oWtt6S8hdycacxiGLjdL3C",
  "key3": "3PsBLPBH4bQ66dxLhrqdRFMp1p81wMypcUbP13m75ny8V5WRgEANRn3NdrhtQofM5opdGxJSNkLicqv88Gq6vo43",
  "key4": "bjKxHziPMk279iE2mipTLzXdSzKCkHwZU4MAkdq9X5wRienTStZPosv6zakWabaRvPXi9w9BS3RB4j9twZJ3via",
  "key5": "kFSwWnwmAd6tF5RMSe4nN4gqWFWXTwX8KL85XQaKAGghVTLb6Sde7CDieHVYvsT1rYmPGDV8HskEysn4xYFsjaT",
  "key6": "5EzqCGQCKnPdVSwTV5TX74n6gSBGoCBcpoRxjNDehUt5S6vTwWZhCHVCjnJXQEg9DiN8qVs9D7fJUZswbbM9QrUh",
  "key7": "37UxQP9zwXB8YzoDnGeqg98Wp5VmP9VDX2QtbNfnZ9MrhM56yMew3KX4aSDZFk8XUNQxLPo13n5oNZc9oGyRi2vS",
  "key8": "mA8zdrvNahRad4swfn8YP7qoJLs7gb1Qk619gszdmeo7hrSBNH65sGuqB4wLLZyHy9PHJPvgipaaFvmSYzd1PpU",
  "key9": "t3LPhu8cDEYHbJN9zoTKyYQeSfw4CYmWVxkmiqXoZWjzH1EERSkmuWoyEsDYA4TBLRiZGGKbwzgSsMQDFVeNxGz",
  "key10": "3v7jWzCkNsr2GbwRPLw183XQH4ckhL8VgAfi8ERJP3zvmfM1JCqEFXBKwyooGj7NkCymy6Fw8WsZWBFUBhxD3zs5",
  "key11": "24VzgWdpqxyBhBba7L7EgJ4Ad1vA3yGkttYs437VmBikQUHMgo8LCZ69YEWZQux9LS16Av6HEtxarcJQMnvnisLs",
  "key12": "4wEC7vBDmGoeyfGUcKuwMpmt8pkUGcdMsZTERuM5zX3uXV6CRfFPfqBviT3aykDRW1e1TyYKc4W1tt6m6dj8HuFW",
  "key13": "4KxuXn89HZBMGZwDWh8Ns18ExrKqcJYiv6dyXxmoc4yrmFZqZzBbWGuGTMXAMEFNu7Ycm8jCKGZwKaxExNZh8i2b",
  "key14": "5v5VmtPGPjxjdyC1CCYzc2GqRfFLtSWjCtEYKVSxPaDi3fZjdBk4RagR7VvtsqYWzuQeAUNe6gGpbhxiUkuq6Nb7",
  "key15": "2xF89J32BKFUPXqAK4vsmhuSsNdejSYmz2F6XS1kTPxD3ATxHHt7pMjuAzwCtmk3qKJCuQtcjMDEF1duc8WtaqhQ",
  "key16": "FKUwRnrvDEE1vmeXHHotrPNBUMXjVMXqc7HhwrWkXissXTtX6SmwAAexwdaU8kR1R1c3csEzZfYBwCvUcUfnHAY",
  "key17": "2D7tL8rPzR9MCs7VC9jepwcZxtc82opyH15ycwNBCd13CtLspr1ven3nDZxJ9Wckh69U8EJ95BwZVfp7y4S728EX",
  "key18": "34KZrKDnPeRa7UAn7FbJuXih4rm1NJLvSTyu98KcXA6wZ6YFtx4WazVCLXt2BRDsKVXFASpfT97inGJGjbv82Zth",
  "key19": "iz5jPWv9pwFocyG3Y2BJFQcEkWjFuFFK2nmyV2tQMgjDgSipg4fUbVm2zuLS9ammTSncQ9XhYdtoa47fh3dBHsY",
  "key20": "hHRtjjwvVwd25hLtmoMUE8TbgVbHnyD6jGVYY49PdNu23aEcwHrwJM7ywbddJLrg37s8daijbEFMwdgVZstgk6b",
  "key21": "4RfhaUogz8vmsX1mbDpLqPAkDZ874qfA66aD1SXLdTeuc3GXRMoGqvstbo4pYakmpvJ7KpNzQfYrNXWBNpgoDaZe",
  "key22": "4MoPtSivUfWKDqAgKRbWAtCZufBPN3jTqaV3GihaWvREx2zSM9HWmeNgfgJCS9LT66ow1TMtYRAJTHYMf24jVKMu",
  "key23": "64PpnNybGJt4Fm3kbPgt3A6kPJXUpaGj7XmTCkN4UjLWKycTbyoGNCRoxPuF7LBJp4fw6JcWeLKWpKGR2xQ8Nzw5",
  "key24": "eEvZdS4U3Sw1zP9pmSWPNx7sGA9yJ4LmiptNHkmjPWvm34RK9RiftCY9QZCAbejF3bC4WW7VPdd9235ULPheyM6",
  "key25": "4B4JkSBT2tzzC5uVZCXaYjLe6pQKWFDyzSkq9oLnNt5zWAa8sLQHjrudD3yKbfNAZ13mWRnaKGJQt611AzfXgQwX",
  "key26": "4vLwkuneHfu3QNPw5C3BKxQr7KXKRYoiqk5K3W9aHJ3UFZ17DCWH7F4BvQcLPnEhNewbuPmNX9evVtsStPSBdoc9",
  "key27": "35Na8iUbdKntNirVnVxNiZjycjiZFNiQi1QsLoC7fDEwVwWa9CGAzgyrXqFADB59WYY3pp34MKxZugyVhasDSd6m",
  "key28": "5ohRxHgd3i7XndMPnACBvu8WnUjFfU1BeiX3cURfqnrGo5qDSoSSbG4fmL1K64pk7hAYvrepjXQyG8S2vhpt7Vwo",
  "key29": "3cc9wtXQJbAhvoiQ4LYdZfuUa35V5QFJdhXr2mjoNyrRd9Gq4azJpP9ttdhiysxaKWvGfAdaNQZYpXtUirNYLq5g",
  "key30": "62fnMwMLBgxec9tpK7u8EcC6s9wAHSGP455GhJ72Yu5gBgkBAhFWkom3mJN8YgHDg8vavSe4QPbtiygz4u8p2LYe",
  "key31": "3b9jPQtzFYF4bsepVPUJpZw7GQUvpsra8rNiQ98dkZrqFsLDePcyG4rpJG8SXdW9nE79geLEqQyYHj2KbjbDPWfX",
  "key32": "3ihbVyseLzSEXwNF8ePeNkhJfBzy9fcRXXab9CBZh9b5n4VyrFQWBJU76SpTqup9ejP6pyaxbztH9VKoQcopseoG",
  "key33": "yosD9t5eZsqXLLna53k8UAGhwdE4g8mbsPd9vMfFE1HBTv8Ptac7KSkBkuvznLMG6JAV7xesDnyreJubSsvY1mq",
  "key34": "2WmVshEHKMx9cmtbs9jnHv3aMP8AifuLaEtVZ6vNspmcvwC93peD9szCWpQwThE47cTUQkdZQCSvc83quY6Vw9Nw",
  "key35": "3UoXtmqSkebgTjQwBWcWPLhLcY2hxEHbNdNphEoLJVvP9Ku1LZhMiu43mEBaUsnJ857DLhY6PK2wBJM5MWzbpK2P",
  "key36": "5YchANjttMcfPNidtUPX5xQrPi17s42gh4drZxByzyuC6R3BiSMrKESMpd4v9CAr5njohgw1NQXcH7evMCXER6fz",
  "key37": "pQT6JEd5MTRSXXB2Yfkvmdpp3WSCteCcVzPrA1S4xjSuP94ww1c9VD1RZPAHGa6w39Fyd2tjLUDCQwDEurc3tqk",
  "key38": "5LWPHKTKZPzPe92uVvYRK1WUa3JJ7HQTiipXpGyLe7Q9NP3RjBD72YVcq8xoBYGrCTzVgWSxadrLzpoad49FEPZa",
  "key39": "2ftWf4RNPTR1mRLnYASUh3CoEikTrFvtQwh87Q1Dzdj8bKpBQZcjG6qoZfBwxTDa75vXYswNi3Fj8bkHbLsssqC",
  "key40": "3oUpAzv5YpKSFWVoBqqkGm8Yue4EuU4P8ab8ufAbu17wACSu13HPuSrtH32tqrezFw33uUMtxbnquYS5E3k9ia8Y",
  "key41": "3L8Y8HHbWKv8te9K9K6R8GGwNdbekkoVFWukd2DYNtsUDBG8LWQfTWuWcH6orWwJVsT5pVqsRNBZnebb6bcVi1uP",
  "key42": "UbeuAN4ZpwcGf7QnTripecXEmguif6nXcSFVMRaBeStHGzAHuChtfC7ztk4ft7BQEZF79p6Jy5To2hx3y9h8K4Q",
  "key43": "2AwGAtkKVYzd1ciw2SMJXh4fv8am4qNiRqTZ3Kye8AXnhCwSUn57vbgtWn9kAuqeVGSb8Nmjvy2LMUw71UQtgWBh",
  "key44": "3fGr3xSGrjv6wodZwwwTr4NXNB1ZgXYzCoRz83TyBGUPimzH375Xj8vBrYmKTrnDzMhqGie996ZdajiSpg7BxKYZ",
  "key45": "9F9QP6WuhB6Zq22KGbysqMzBHaVkTAXab6foQvmKBaJ5BDnetw3aZ9hYAacrSiT6S3cv8YYUpfzUywWMLzDcHGw",
  "key46": "2e2Ctn7RFBcx5bKao6mp7EjYaxou7UyFugShZzVQUiNAtt7hA7garwmYbPPMGZnAoXzxya2473jeWxG9nP1UP5h3",
  "key47": "3tRfTKD6sQubMNScaRa3VqJLCVt8N6fbvwDTVpcBYHbx5DB5gjSLpDpfR2nFahNazpg8ZPtqyCsznL6m6Wyz3PBv",
  "key48": "56kXpdUyZhbp1ofMULCr2gezDbCDZ9yDKyd7pcNXSdzyGvyvQsyrKyLpXY87ubLsWcXAi3Ntw2kWwhP1t7TY9Wpq",
  "key49": "2eFB4bY9d8jpzxRogeGQ9N4b1Aj9fdnwhLnR6ZuRDEa3swcFYzrtuXW5jhDTaoGMuWNFHQNpiZUvUci3d2rXoQ5g"
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
