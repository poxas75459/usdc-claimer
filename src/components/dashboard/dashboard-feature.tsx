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
    "jbPaR6mFrpW4EYT1svWGw4ZSt3pN83yezhpHQfsChmn35GyW77EWB5nyb8ajWwud9rJig6PqVtq9jU4hX5M4EeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538q65RyHyEk6L53e6Vpwtq9VwJmh9DrMEiUEeRR1C5TDhZLSAw6tZ1TmUnQsBT9RsR4KhEDiaBckmZCsb1wmfd2",
  "key1": "rDz2j6XfsfGaofRPd5F7iuxSZoVfMpHXtJwdJDsKv9erjVsKMmZCKCEgNbmC8ocTPym1u5TSskYGx1caw4QnkL9",
  "key2": "37ZWUjxb1DBYuEuHNnHgqmd97raGjWmSw5ixXbPakpHmktWRbtvgdH2NBSk7P9rJNkUjPWkFSoCbtDnnE3kPnJpm",
  "key3": "129D8J762GmxSSH68P4KDrUtr26e7unTZTwmY1GACCJAubdE4aqTQ9o3g1VGtWkCLkTT2qrx9LAFkvdgeGU2tjY1",
  "key4": "24KorqToQX5mHnzRuv8fY8Uh8xH9JgJxXoPsz3uHJ8LXUTx4XBHno7ceRnmib8uJnki5ePkCCouuCo7DX7nmrGPb",
  "key5": "2iZxjSLvqvyfhkyHbgKwSzwmpKuPm8uvfrbzGLEvhsu5pwevEKxmkiHAJaJU3MWUpqLL7o86M8gVLZSRv68JYZoL",
  "key6": "498bytg78cTc5wDzK9KAD9rhCqjkiskjFWgGzLUKbNnFX9pgHvmCnvmzGPygJn2nKg4RbCH9RwHT5DDDv8XpYUKW",
  "key7": "42a1mgMCARbxFdhefzdEtzJHStaH3CBvg5CBcUYECX6mPjfZ1dXDAmg8SspR2DvhJejb6NwG9k5CbS7uXGMLFGNJ",
  "key8": "bkkrHLKsLqo6CGq8tGc6aDF66cpxcDq5fT5h7akYsQNkdHd6YjfzDQg93fAJELnUbGv6rqY7fatFSpRXZAPRqKR",
  "key9": "2qrx1f6oBR94SuNHV3xmMsE2VBGpbPGew6z8eBLaJnLdYATgQXsCf8yfkbnWNUEV4ua3ieAxd9MM2RpsvBkuHwUL",
  "key10": "23RaYz1YJJoa3ozBdSyYUkktGQ4jggjbDSbgjFzxGBRUWnZJWpiJeApyGsCCyJDZnwc45jQD2NWZWXd832TNtF89",
  "key11": "5c6FSbV1xwCLYrCuYEaYH2UWt3ucQgH9TRWZjeg9CG1pkFdeCcys7p5EW5ScFDerrLJn9jtDGQvEujZR1impsQXV",
  "key12": "3JqhGtyPFS665WFKmACNh7VpVQa9yFJyWakLNuq3yPzbQGfT3zbsKdQhAm4sJUhELPxs2ruHsrbA35KSeiK8y7Uj",
  "key13": "4S7b6BEML8PaFMP3T1dgUwbX2cLQjZqto4HuRAzd5FZvJx45t3ZPxwj4Vbf9BS1zzLyHS7MvkHRdiG9uAVKHmL9C",
  "key14": "NPxbDdgHMVMnzXXwmPLYQDbMZp38nZR1cdNg3XEbwcvkwQp78bCTWr79Lc6xZkSNJEjoZG5vur84j5ysDTJYcgD",
  "key15": "Aud2Pan7N5hPpRJFWoZuh31sot2fQnebnM3yvEHoMtkRT8MDkRh7vQgjonjxeQST5bsmAni34ik4z2gDC3qKm85",
  "key16": "4KzTd75HkheJ8e5dD8ubp5XJMcQETKPrYfNHqbQL8fDhVakbgrUQTtEpkLy8hiXRW78iyPHKr2UY5trZmH2HYzxL",
  "key17": "5NhpNWZXzM2NPK9KNCnepyNxNriALcwSMYk7mAd2UenaRUG5CRJLckQ9u1AVXKPT2XQ1GqbuW1jBMTLbodhT58wt",
  "key18": "3RQSTVhtnX2oaBR7fC88T6hsEroZdxpGTR6rKyivfKipUqhUunFXweyqa9iQpkcyPu4oTxn2GiFJDwiqgo4uzrkX",
  "key19": "4oeTAPDgkgEBdECA9JBUEHM7rp3jcfzibqJNm3G1s7dpUyc6C3L3vQdB4rWuUJ76FZjHTpGypkL3UAXX2QjvPJ8P",
  "key20": "65biK7ctKESygS9q9SUqwWJUfPmPxTiSZcNGDBk7Kc5FNzhE8ps3g1toFEc2RonVyJRUmaVbVrMfyfhxe9DwjYN",
  "key21": "Jb8jwbwt4tbF8mPJhhURzbgWwSRYWr4QvYZk78MPmbwS1eB6THoE8sD1bt7zLg3BvtsfBepmgUWCYhG1sCpYgYU",
  "key22": "2gwTLePY3tJUcx7wk4apXi2Fp61oEakyVtawWSXLQeSTyeMi4iBBzziQxuM1tasoAg7yCXvhJpf3gijfakna6aHt",
  "key23": "4eGRXXj2yLMe2BA2WbhgYoWBg8G2N4zvsuQH9A8Lf5TE2mkTXTgmEnvaESqETJt9aKUL4xsyQXF3SWNfBFjMDyP4",
  "key24": "2BEr75J7FCFLiGUCP2fDpafJ2z4xKtCRVsDhXkSz3G8zXSfTs7mTeesRd8FDPhWXGdk5Sb4Kiwexmjted47KKRsn",
  "key25": "3HScjb81RTYu3ZDsoBKBEE1gMBtBrB7WD6SUKZUkLXgeT66ybtBYez33U11JZP5vpuy8RjdiBQ9BJhHhP4XAQKEz",
  "key26": "46wvggmNwQwKC2a4dXSa9faprWzjohMnHiQRy48XNPhpM8EgKXkXjp9x63qVhVTHTC2E7utFVbLKGojkrTFQQvou",
  "key27": "3uGtvBigjZBR39goUnt4nuoRHBh9oqn7A8p649dGEmLampXJdoTBFVkrT1HD5DGwyzp3qvcXDrv6zbrWv9RS4jnr",
  "key28": "4UcvYaycqmS5xRP8d8aqz9Hw6mEBTZUuXTm7Q6gz3bzaVd4MC43F8RttWcTKws6L9SdUt3aYb7BZuyy46ZpYzfhe",
  "key29": "2TZJ1DeGqLHsYGsyS3aopS6iGePjzi37gxiMm1298GxxJx1B9UfchZMYM1TH4T6vyHpGXZA5g4NXJK1ekWrNvNec",
  "key30": "2M81EzDE3jBMyB33M5czR6PWLj17cmGCAvnyub54SXQcCMgFru4vRpJcYqhsX8bBWXj7DpJuNygz4UrveLudTdSo",
  "key31": "3sJn8SeBf89ESR8CaDaVqKzTBgbH9qk1zbyua3BxrCMJACqHyBtak7rmmrwZevdYYF5jG4ifZzP4WRwB4Dzg9brD",
  "key32": "2BwE5v1L3TeCX8DZQi8z33BGG47GpoKCbuN5jjWVxz1w4mpS8cQPPSQN8enNG12iidHgdzTkw8NwLEo5ARrihTPn",
  "key33": "4ZyyLAzCjLqctaMcxVXxodSEmTnheXgFQjrFC4759R16Qd8TL96CgEhpo3EN53JFv6UcM6pBRwUv6inHSNzEMSNL",
  "key34": "5GScx43LpF9zuBZMRARSPD1MosonhQDQXKhc2oFZoQpMhXTwSCKYogbdhXV3Uj5i39QcYgPQYnK8dHohJdxSoMKx"
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
