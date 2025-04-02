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
    "qhbdFAfjDwrAz4i2MFJiZC2WKJvnWceHm5gAtVsZ8iiqMJMA5efdMDiEBaioMWhiHTWSogwmioeJ1fYdrwPgH2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bx67JDAxqhZSvQ3yHch2T1cv7DYBq8E6GmiU7ZYnD3LEEudLE9rPtAoNC4fHzxW2oDgD63WdhHekV1hV2PEbETW",
  "key1": "3xCjYMLo6Hv811L8bCskBsWw6XXXkQnNWegH68djp1NcE8v7LoTkQ55dwimzMc1CnEkc6trpq8YFpQciTEHwaGU2",
  "key2": "4zrhbUvtUbVszhUpWcTUgowsbtLywSLZzq3nh3abmDAK7RwaYs5v7xwSviSG6J9yx7WUXUs6vJacHAToPBiSeMzH",
  "key3": "5VqeYzKXL4PxiAadKQhX7AUQKKPDKwVBiH2Fn8HkN5rB9Hy5n5KefgcZ6MqZTCxMqUfgvjWezVFd1jenKk9VAJXv",
  "key4": "4Qh3UfbtyTgQ6LytUiZkesQSQdKYoKYYnMcXQaAAjjuW7otpRGtK9MGEJb7JP75dpJBkDcqtKVidb9EPDMaLeGxJ",
  "key5": "3Zyn8Hce9CUt2hGBiFvZQYJeJkotP9394ogK2Pfq2AfEGLhoHW1RpATE2RsjLNU9817cMxVXm4tYEv8F3ut4Cefi",
  "key6": "3bWQ9y4Pcxmwfn7HdfTVR9Nu4N4dWaWNPyM71Ntc9Pqz6Qb2WyJqR5etzh8VCDZAnrKCXc8CjieQfczu9fx2v6Nj",
  "key7": "GbFAL5mSoHcrFNgLSxChD7NUYHgShPFsfcRqfiWJVeZGvY99D86A4BdF7Tnr7dtboYQPBiMWnXrmCU6hj1MSTaE",
  "key8": "4eu4KG1RW7zHcxWGyR6X7wAR2A5KTuyGimhvXUHejaHZbWzTrP52CHKgRk8NaaBRJkDfL8rkYocAoJXik8yuuJsk",
  "key9": "mt6qHDcJARkbswmj8LZ1dys8EfAJxkmNpLc64MMXiqt422S5b4Ms16jNxyBVjgjFQLg3qZcepakxX17j7CChzHj",
  "key10": "3pdUGSfD3p6UrjQ3h7r8C2dTeBFUK8wyaY5qvCZrdFMxhjzn73YYBMBFEtqE3KWqHo9w9vVzyQrPVeHEqVLt8TF5",
  "key11": "5HG7Ee8Q7wESuQtVorgx9horMcaRXftaegV7PLLp3V7TG7XmiJC9qqenBtqe9pjeMEbEMFH2HLnvkZVTratQ1nRi",
  "key12": "pvrvrMuHeVXqFhn2K5QLBg8dWeJDPwY2W1rsf1PTXjDsPafywEALF3rYvUUbcsW3XMZfU2yKCab89dhEwHM5aV7",
  "key13": "6xgEDRCLBdZuK7CPpvWcxiz3a6pXcTe3TqNN5UR45CiRCTk1apHQCn8Hu8fYxcZZ88dec4Ut4RPhQHHhH62Ku6S",
  "key14": "32CgMV91JJaY5Z11ardTZarYfkgJe7AH1WxucokrmRzboRzdFQJjJqydJCjvp9SDDAzMzjBkjJ3MkZzNLeM1rG2",
  "key15": "mJdtbFXv6GSECYzPtvRoAx6orFVZ7zrY1zh2jCKYC8Ccu1xMhMBXQPY5uNzxLohuBRSXW7EZr7FBvaoUYmPJ4ur",
  "key16": "3isizTpv7q3WJxxvTKiXYh6rZnCdTn4HyjnNHV9bpeAwA45HmxKQxpm2jC3mYU6yDPUU5P5GBtQXrv8aQqMQLVsZ",
  "key17": "2DtWPLweW8SZZRGngXddufViSaYbNcJJh5PiPv3MyEB7twPVkKs36BkZWdrDuGb38mGes9P2z3maBRdKB5pKkepk",
  "key18": "BmSTTVb8NsYMzb6ewArQLRXASWDZCJRHwbwK1KXXEV1PjAnistFSnGYneko8QQPkZvdaafLLWsgwcp3SW3wtbUz",
  "key19": "36PKcJqMwVqtHQ6iLpYXyvCt3uwMuiqfmcoRp8RBLkQVmfcGShMdG5XQmfDHURMuYTVKPvZSugxE734zQuv6uEGw",
  "key20": "21tQ28Y1h8sq8FB4caQmqSc9ZoUXjdsaHsC7GvyyEjpfwFmKrqQgvkYBu3WckiZ3JKtyEoiqZWoLjUtDbJ6ApQ9r",
  "key21": "2mHF8ax55yqGEkJ187dvYMCyGr8CCQfrp7FFVY8gP9qaEwkUbk64M6nFGAUvkpDueJBGQVbQwyQ3PAyA9YtjPgxA",
  "key22": "MYEB3vXdAx5VsL3CEii6cGxz4zccpYgMd6yM6XzLos1ssP9waAaxLC4m3Mnb4awm13BWfBceTH9kR86JuShcgo4",
  "key23": "3JZBraD9WTuPWNLpKNawtuiiKyEHuJRGehGst9zweUQGNHDd69DtZ9eEHyGrqvAZbHBVfFPwKUSjK2PAVXYeU8fZ",
  "key24": "2UGabhDNzynDGkzEnyRdEVE3CoisdAA3QdmVAGhnPV2n9g3qhmKJ8y9f4uTZofXHAZfMu6EPrBW4Z99uZbUXv99Z",
  "key25": "ZFykFWybEgGtgUb7uDeZKLhQHkZdab8keYNxW5SoV1tHckw44VetgKsnjPbTs46Qshp2JisyxLAWarAo8PTBv7S",
  "key26": "5E5tc2YovDKeZMWVwEqUZrzHAWKCkLaKMLiiXpUwRsxDP5eUabRftVgGjXHwnUQfx769viSUGAw1wJ1xmDCssAmW",
  "key27": "5jL124fuEHXR4gdgGtGHv2Ek7UbkvtVZYgKsVc5zMRfPbREwTrKcFEh9qkcd8CcRWAMUD2fssJJYwtKMgg2B7PeK",
  "key28": "hkyVRuEXdGfNg9dVuTyVPSMxHid5KrpbnwXNxvvMjj8NMfrcosT9NcpDM66bgvwtrhaVr1F3QwVPh6kzqWbEL3Y",
  "key29": "2snTNunqaUbyxvaLGGMhX3pYv1Ez6dL4bdJf8vDUhZEXoQuy9b3sQpHu5N4zvLtNo1AkE2ddLoxBeSKoXxE9EzmD",
  "key30": "4dMQnb1oCTAhRMFWScCgx9apwSXSUpAVSjf4cnrZbG4acwvySaBptNxrhTv6fNHQJrhxVz6sDj1PrPcefWAHRrWm",
  "key31": "5gtjfK9eyyFUvQ9FGzM6qGQCXKmijhaaa3k7fJsHiUV3wybpnNWxoUC3GrtMUfG9rTbdZCynEB7vukK1q4Bs4tUc",
  "key32": "2rUMYsRUXQ6EjhdC3CuQ6o8DQKWKuP2CmbGguXGbP94ebpCXKf4TdCb9A6hT5VG2yyB2ZDXDrd6aajU66hapuysN",
  "key33": "4CmhexSdB8pGwXPGLEABtvomtEWPqF4hLhRBibFwkdNSdq4pbBCgNGFevGxE9CyinFaxjMUbo8WK8HJWV5VtPbW2",
  "key34": "24eoPuFnWuE65d2rvZCHmDLGwm4bL6ajDE2zdgi6TGK6P4fjUGSMh8HVS7FyEj9QwYid1dbwqumfpertRVJC7atm",
  "key35": "5kSL1CdFZip9icTW4bcUywhiBmx6cW2KWR9VPmASpJr7CmAnDkgtGmuUqKE5Qk2yUBx8sqAebe8jUz7BcnHoPX1N",
  "key36": "2zWc6DJR3SXmk9T9AXUZHPyGB7pTgZpjwHDPstMj9JF3bwbm8ydcXdjQAsdEPD3hu8uoEs2KMvRz8AVhcAngp9H7",
  "key37": "6H8yo4yHQcMBCMKV2FG3AZ3C3MndJtsze9fFf9p5kqSNomzF2jijpgvNLUpEZZVB6Spzv5M82Rwrt2qxwRCW7RX",
  "key38": "2UqQ5z7GqoQDPiiZfgUo5vXt1DG3n6XUAqbP64om1kX6BPunaE8v1UKiNbmJMto1WmjBT1rPG5SvZxxdiiowVc2Z",
  "key39": "2CdgQPNX5qMDmr4XAV3SsEhs99XFDGqvo6yAXp28Yr7GRQH5S6VqZFM6Tk3FqAD8TWJKqr2zSjynfQD9Z4MpCSLn",
  "key40": "3ahY75LBVSQt6JKxgyuBR4PFpeJqsjPS1qFPZWff1dDoJKfqLaRAQmMBb27j5tSVjurLBexz3KZfQGiiyFBAFcyE",
  "key41": "5WQGDR6vmZoxU9gNBWiMmnAChEvyxTLNvfvQmXE1MhuhKgn5aK222GVZb4gFBXGxxNwiQu1Y6d8VyGDhrU1XhHvP",
  "key42": "2bHjaT7TcL5PN1G3vgiaZu7MuwhQwjN8DNmQCsudmfhU3ytWucTwvfFXQihtEVSDG7vRiWU4ag2qsQw7MW7kD2Hs",
  "key43": "WgRUSBj8rpws6jMU5UfsQ4GnjqEv9FJLYQQbJcKZXNdnBb8aMPVZbJG3MHwimcBufqPrNGrDfTHFuKT6hqPmuu4",
  "key44": "h6aMk84tWjtFKPrNFxYeweuRH9BYnr9uHv4wm8Xa3UDFXQTLBkYcyEVSGyH9Mpcs98toFkHVc6HiCZAT9e3qKNt",
  "key45": "4Jb3eqMcxkytD6mNNogqPiLzzqsZfw9DP6AhV2wpcUKb7TuZFMiDYCFU5oPPqaW6oddKsX9Ydn5q7nXZTMg4UZA6",
  "key46": "QNatrDZD4ufXuukNakJyJ5La1p5reeQJPMewLZUEfCs3ajsPEAMEqq3B8dkTXDvpq1E8BUjrVmEQebxZxdjdeqh",
  "key47": "3ppvpWYzoW4Vbrc6jWgMzNbLoSywYUScogQsTTLiPb7jgHXAytWAetSe7Jx4Np8RiqzrREHpJ3tYctBtfAJ4RqSc"
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
