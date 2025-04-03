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
    "5gkmEPi1t8ujkUNyqn6c3SV83PcX759tbCVmbhxddFWDLMgPpv54rurh4tmRj6aU8ifxfuBCTarFhsXr6kdAnifV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4se3ZrggcLRbDiu8P85GPou83Mg7Jz3dooMnJPy5V7oVWLPX9m1QJeAeHAVX5L4igjvQvbA7LeFke8XoQ1Gs5cUi",
  "key1": "3Lzpyx1ArXHWcpXBbpoFbcqAgm3nwEUJReJqqZBhyJf9rEgoRJF91jCXXnuLL2EQ7BVyC83r7DgnSYxN2Qn5dqUV",
  "key2": "3PBA6hF4LwkUBMZCwCLpF8bPaMqnEeDNRyGouDctKS21NaUGshony4TxX8iYAMHu5W1DUZmYZzY51md4qobxN4Xj",
  "key3": "4oC8dVFY9ibTNy4xCw7kKN133rS2XMnKTECvVHT96dZ4xQe9UPVcA21j6AmQWFWji5mTi1VcDbdsAH6vmWpAuZdh",
  "key4": "RVd6xaBMqSf8rThwkwQTkZGpQFPeVxq3KvuUo7yUcMNKiFFMW5nqpBgYUgMRBV32AsHAVz7RnMGNTjERwWYue35",
  "key5": "4nCFZFFV3LLqwyzTc7W5QfzziSrwKCW1H7p3iYQMB5FsScj2ci6dDxKE6ttoQGRn8qo1Y7AoTQvC54pWacvb81PZ",
  "key6": "54QfXVNFUovGYNyakhMMmCT2HawMMfpnyvNc6LUTZ2L3aWrjqJbSr1K3xtJuNj6jtbToybznN5dJo2syS5qfJUqV",
  "key7": "3RwW3pDZg1Ge6U4dab58zapXGLVuHjS2VR4kYZjUxt7AWjD55oQF51JZ7XuqisuXpiRrjexz2Ktd3n6z7ddu4s68",
  "key8": "hi1uTjB7tWyKzp353H9T7Jy1JD7BqGLKM83eMQbun5UKejnXtBHVWk2SotU4nWvuUuH6jV4MaPoLoqJyFDkPsYt",
  "key9": "5hrtj3sS4orLoycqyDmdhVGUrRiXjcH7PSw8PxoZ5HN2qeiA9QZ4gRkDkvfmiGSjRVntaCGgvQmjQ7SxDLenL3bc",
  "key10": "4z9mz53EZQNpWtVnMUQ7fmixTYeUcZDXYnPB9eixvx59Lv3fyUrANKxqNPdbL67V2NsovhAR2XfgNifbK4uZJhWs",
  "key11": "5hrRkHCTsBSAZWrfN7wsEu4EyiBTrWmEA3UwkqVdU6KFbwoBsXNed7US8fYYvdbqUWzYUA15seeAnKoCSQYEMd4G",
  "key12": "3zEfBYNxLNv8KJdajYRgDAFUEDJtsktodiUiM3xUTQctguGRcDQxogtAWrry9HWkVyzELE1Zvh77AJ7frzBbJ8H6",
  "key13": "42uwh2yu3FAEqpNuzsmu6EGkH34XsFEw4dLUy6sGWnybKuLpPFaa1mUUWTW2XUCvZKRciNc5WUpKzGwvtfpjq6Nw",
  "key14": "k7GHNKDGL5V1xNeT8AMASsaScxMkZc3hh8We4YsPErth5g2kXo82FeQsZTH2QBd2ARZi2sfiQken9ieUqm19ANB",
  "key15": "52SdjvqiMKMAXEUENScp7zs3yYUQ9RTPhKEsMC2RXRb8e2i1jiDVx4fS3zcpuXDhLnLRQxYiGT2iWuHyaBsr6hf1",
  "key16": "3G6YCVbLoAzUkPukzKGErH7oJ5DAnsdRzcfSsG2M4VsSdvN6BacmkUYYeFSNqShb3L8zskuGivt73j4y96A5h8x8",
  "key17": "2Yr6ZBsxG3Nbznact6BsH11xenUmWUipohuSXTwT5ZXyAzgHucmx468wExtixLsQoJSBL2pN5yxGid2eLuSUZBRb",
  "key18": "5iFgqw6PNV8SYPWRQrsVFUQzrHjRuotMNsG1aCoozPbmwEPHdZeVtvqCbcV9c72AydgMpwTeJDHsuqviy5okbQi6",
  "key19": "27pvmfHSN2B51Cux2tg2fER4oPeqmKcaWiefxFxEjwvfqeVfVbMP72EMFfPbR7FxAFb47AKFChCxo6DwpZXwr3sU",
  "key20": "2owFRtrUYouDrRGGuLot43dLBBhmJNfgagWtpN28sy6HCWWs8qC1iWY7Rp4iwuaD3S1cmdZxsotSsQBf8vxXsYCx",
  "key21": "eo7SJ58C2pjJoZL6xU3JBhDoCzUnyZ36FRAbYjPAbWsonL66GDxPavbaF34GapxHcDa2ngqnfF3EfbVomB3wZrD",
  "key22": "3PMgkaFrdJBcj83cvHdbKcnCavBinTfx7TUCTEuXmuxJ8haWpczeM5CkvgGeSRu7iNkrSMXQt5rdbcgBsigcWCx7",
  "key23": "3vUYjhu1yghpvVw9f5ooYz9Gi5E7eNU9vbk1KiNpdsvkkEYRJqpJKUf9BMUiiLrsYfiRCa7gZeBvbGDWoZXLt93w",
  "key24": "34Bsm5eMhEps6jqriiJRNAzosFNMk1X5hT49zbQVKJuVNf9Ki1UB2rXHE6JPEHPagUivmERzqf42p6rBhi1epg3C",
  "key25": "47HednoY799eebnm8FUzoVumroMiesZHWZVWJk1rUwkhiwkKUJxYziPtCFZeEHD4rNYEku3VPAefe1NWaJ9VEBwG",
  "key26": "9QDx4vhH43G9Q2nLkuozV3suMJDpRv3USmyGympu1ctbXjJ5QbxGSfxbd5PUvK4pYFoiGE9dZQqnVnS8jQgmqry",
  "key27": "2G5nZph6AvGuQYgrNBi7HWVKamDUNo3d5KhnR4K4D6SbuMBdvLgKtYjAN1g2XYQfV4KaGTTZQ3P55h2maDyaCpm",
  "key28": "4tHntoTtJTfxnFyoguXBCQRXwk6FLgD5r9Hpz1dETqMj2pKnEhUmKhi4wBHNHc982RogjyMSn7kDEkvbzfLtXeCg",
  "key29": "4rwbZS3ZvDEHkjEa5cvLEewwynHfhJq9FrfKQtdVJ32xfvEYSitiHUktJyzevkvQhUSfS1mzSjLVxLEtiZjKiLNh",
  "key30": "3A7SgztqCR6329faKqn3ycxvtQ5RV1matQZBVZ4snw6SFMFTb3uGj8MLA1SWTaYrmHoXMyN95DTqxYjcvN8G6xLX",
  "key31": "64HoTnX2PEb9uw5nCbWtA5jqUBTGK7dqXaKPjsCZpkv239E4RMifCSJnHZQ6SWBfcjUkedtwAVG8ZGZDPhYksQzP",
  "key32": "aM6NGx1Q4mrTftwRqt7z8R4nu8ppW3R2fsPghzrYeTiUuw6dbsRnqJdkx559UgdMhSMUxPbMMwdwDZC62CekF46",
  "key33": "562be6qmkPB73DnstGSMwg4tYHC8jLv67onokQH5CRq2mdRebSCoaGd9uL1QLmwCui73BED48tAMC4f9RqQdFGiv",
  "key34": "4wfXXdtQN3Fp3HUKq3bsLEU71J2w3CtZVwVabcubcMkfxdrvWeLDFdwtaVQbyAM8pJXsobUnC6JUWsxJCXB6Yt8t",
  "key35": "5P5aty1SV6uvGDVbEJ78c6bKKd5aD5tqDXMaLbh6R2ubxkaoYHnnowVNMFVmGWG6dafeoPUL2nAxkQsRAGf8sJ4W",
  "key36": "5G6SiNdhzxx7w5MXMTZA4x1VR9uqY578MMJwqAqjxuYXydpWZPVNnqZtG2ysinkqvj12Zs8FPxt3kbJAPb1k6So7",
  "key37": "5D7RRZxSLnSmVFgASHGqphn6PYg6VjXbqyhWV8ZP2TsKWTT1ijcNaoNBtFmR1EGYXFbcNWCXrMPJ4crdRQYBN8eV",
  "key38": "26HUNhqfAQN4RyhBrb7a2m2iegCaVnDsUBPuWZtPyFTQ4eqB6PW4wQuK89g48hE7PLVo1Cu4pJ2Ky37JhpxWR6GJ"
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
