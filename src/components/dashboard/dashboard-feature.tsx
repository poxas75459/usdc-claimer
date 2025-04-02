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
    "4QNmYByDWFtaMwZBqQtarwUg2DFPFXioacatq8vXDxiqL8ceTzjp4qLjP1Vswta2abMkArwhCUwknS5vzqK29fa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yqo7aNcMcNGs5siW8ZygL3Ed2ggvhx4wWmbvP4DsusdFbDccnq5cF94FX1uazQXU1gHbt9MTvqJbYkH4Z9cT8ak",
  "key1": "3FpZUB2mpzh1Xb6uJeSDdaeNzb4RoH4qrFPa9WqX8wSWALp1JdVX2Piv8QYeiQhE1PCUfNKCNoFGnz8kTH5nzpu3",
  "key2": "5Cr2qcW8znY8eCHpbMaag7vjdCStxeK24sopdhyf9RyHCAea6oyrWCNShTqkTiTfHbF7ZmkXFc35S6xBMCAhBE9F",
  "key3": "JE9LkKLqkR4kUNA9SWtnW5CXoDJTzf1rc52H6AubqF3V14Eua6LZjX8R4LLuoV5i559FjJAvsY9TtebV9E2ut1C",
  "key4": "3w9DEdti3eoQgysk9at6uz5QsPkRFTZG1Eh8tESXzs68KkSf3nsjAsQNDEGydZPUAoDviqYFeCQb1zh5WAWHaBSj",
  "key5": "62jSfV7CGEfnHqaJbRZaggbJbaPy6gJMGToxjMijhAcsqYQT496c3Sxyj57Hv12hWVEVREn7Za1MzD84Y2b3KcGk",
  "key6": "32LsF62aXf4UDemG4RhLnRE94m6xiE3i7gaG8Ggq4usyYRGpP2PagXvM7HQSx2eGtSXxV58BT6tMTSEDeCmWbh3P",
  "key7": "4h1JmggAiUMR6QryPerPWQKdow8wW8NHsJAyL2ZokimwKYhsg7e8SCpg5Z91vwnu2kMxZLFZFPe7RfuCaZmNymng",
  "key8": "564KumvAQdbKMcoUF6X1Dft6yPzKt4Yn2U9vcEpNbgRC3CwvHZqURBUFanwT6hpejY2LcPA5EWh57ifiaSZgWG8r",
  "key9": "4rkRrsi3APLsnjz2fS4CNWeFVo6EZi62qUJWi4tarEi99qPNDRgVLv81YZERjxfMLhVdvPvicrjEFiE5d4w6oeoR",
  "key10": "5vVYRwQUGfnbBDkWyTXFYvE6bkxsyb4PYJzNFjpTGy3D8uZmvJc7W2yxU45eiaHXUGoD7PZyFTmJthGthCGh2Ler",
  "key11": "5piHtR4oP3ZDkAyu6UtFpYHJWzcrEsLEdVKmDZ3AC8NM2f4en1WGeuWuDyp22pWLL2pzmWjGWyuUM1wtTYhhtfP3",
  "key12": "5Nsr9rgAn248gYZLKqHXujfmRqn5CpwSqkhBZJqS6SvFXv7K82gguQkEJSVSXCeR3YZ8inEWML7XY6piPT8XFcvg",
  "key13": "zena7FP5QZpXVYwTvp87Z5h5azuvUV2hswdWHMnZoYNfQCx7mRmQdFZWzYvLCEHBJfW2EGcgvXxAiN5fVkycLiL",
  "key14": "5GEdH6DtgJ8FJ4hmBJDM2oQxUDKd5qgzDN9n4qtpXNVgHcqBPcJNMgFdmtAAHtY3z8QCz8evFvAWW3GcBUKFPamz",
  "key15": "5qMKhjySXRRfqQnSuwdkSY19FuaLCvgt7X2G8ja8CopTfizGpLjUcTteQxr2tHPD86UNj3mcQoAPidRvieNk1XfG",
  "key16": "5HoNBaVEwSSfRKYpydYM4HMiPPRNmARoYXxeto9L8gBAy2qheUxtA1gBbuWVddXLrtEojJUXjNyjYTYARBsPqaz1",
  "key17": "4xQiXqdF5dUZFXojgVgA1YDbcSJD9jJpcChmkU3jKUAE2TV46WMVdJ2EJo7AtP6xjt5Cmg2spEAPS5bQmmQ4vCNv",
  "key18": "5MVNu6pp1dMdBFJUP6jEmiLgMoonwfdD3owuBxyo7kWCKFGk8Hdi1TiwHvsvSMSK4mXFjZxbWh74eDrQug3rcwas",
  "key19": "5eAYVPqV6S4PiX63vRrr6EHnCiHY3hjf7LjuiXnZNkb4YewyFiGfDAMeNGbK284xDHCRuc6NUWhmTmWNER63kfx1",
  "key20": "uoJZzNjzS49zyqA7DbuG44mmcoN3XJuDMyqUG3HUnTKqLBzikrBo8fY5dVQWyfPyD1H7Njp2JNaw7UKZ8bcyWwz",
  "key21": "5uRcp67j5jc7YFu9wvCgm95uQY4ZSffmDYx8fbBF9tZi4FSNGMNUt4tncHwR5xaZ7AgDdWkSWe6g2eb39rGCSkZY",
  "key22": "3EVZB5uNDgNo2p5P2bs9a3eGWAMUCbDX6xVqoPM63KS3uUWCt4qxFVNtqcZKDASYWE6eytMN8isYrYmaVTvxEnxB",
  "key23": "24XBsS4yGZA3NA2odQqpufxYW5UfdBGdzvJhptUwYjjJx384Wrf9xK1bhzvmG1XDeHhNqFwdQZjR8ykSCxJ7BvnS",
  "key24": "3B2ms3Gs2KPddjfjCNcq5GFaZN33Ji5J7gPy9SwcNTwSp9B3g8LUpkepnYAB2pQrtn7W4kQd7UZ9BcZ2mRmHSxXd",
  "key25": "iZBCoeorCygZ9fYxcDZQrfZFQEH1yCAevUSfvj3mJYrkAGPLAT5V5xbpE3n4qML71ydGmXDSsfSMoZQsKeDN7s8",
  "key26": "5SxgSnPSb2mForCHTJFX8a6v8YwEGToBZVCXL4ZMxx6WeW4vntZBbZVvwXoWs1rcNVMhUANh2bxBnuzpQS932LTE",
  "key27": "4oz3wkmtZEG5qfVgkixDihMvYLapQXRPNzHiHyabVafDvXwbiJaby68Lcwin71zFgWyTARoW3sTab3TmrQNz1vkz",
  "key28": "4PkaDm28xnoMYeAfpEHGPHyjr7FxFiDGnmMoHeHzKR45Xr2b831z2gFUYvY7TeY7bJnXESSMZV7bWP9YbL3rWxH5",
  "key29": "RZ4L1YmXRjHaTnZ8c2NECgSp7N6hJTCFxQ2e6oNhbGd7Z57SRWyULy2iEfYSvCMHLHUgcEykSSq8fQSxdeABymE",
  "key30": "aMjA8q8p2oCjRGApmUdoytCTGgNJPXRCJAJVnzrt7Jkisx2hTzMpqY2E3jz3E1KWyEzGw4TQ6hjEFSf2KRnrFBs",
  "key31": "TS4fvgnLqr8ew8Lcg1TzYJnCW26mND8NeTNRu7wKNbkcHFTJq7LgfMjccyHdvZ6dqvpmDWANugQitRZcnEPBUTx",
  "key32": "388DyQ7x2LqgaVyoFKtzbJMf4KhNFS3dbRkabjkn8oaWeXCZ2kxHhBU5scJDNeghTXavdYMJsaMoV99XhLCL8A9j",
  "key33": "4NqQp5xg44nzMcB5eVzRMJWvhtCDsEWCRusw4JLPS51LE7nsqJfwjgeJizVRys6fTQpWtfBKfKHqMPh8VAqts97V",
  "key34": "4L7iPD361APeeCJz1YiPtzTGp51DgHkHTPFYYLLa6DPUjF29QJkoXT4aoK9yEFQATYRgTHB3iGp4pSwZoAbXEcBn",
  "key35": "4qRdmF3m2P5YuzZ5PA7MY56ctNrPmZKaqQgPyaXB4W1svECiJmpbDwsc6jnZN8YVRA5ndnoZKeRMLzfqL8Xgi4EH",
  "key36": "2aF2zb5NNiqk39YX3RnR9rJtYU2byL99fYYNxHyYygx2u97JRuhbLAtrvh2rXuheULMEFaTsiEiD3zh1M7zs64h6",
  "key37": "2eTTjSbJ4hzd1zR1iwXctYkcDzV5AxbuYyj6GFAaivsGsa8NJAE5ZBPM9Ry6YuLtHqBu86XVkHAmygzXqRshA6ff",
  "key38": "529UDp6rNfrgdXaHWZKybhT73wAmbrLd8HhA9BFc7WuANqUJrrKcHYBqvescqF99kGynjjBUJHohn6FN351kEnYo",
  "key39": "5Y3d9aLdp15fF66dC1txWwoNJyXpXexZwJeKhJYzsKjM8R9mFcJPSUCjhKDGEDCP6rjxpmCHdEarKNbFsVM16nhw",
  "key40": "3T4AHYXm7yftNhDVCuQ1bxxe3i5sgffudp56fKiPFyYn19dzPsEsKDRpmRGV7HBtymztJqFpCJpwUDrfr3Dgq84H"
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
