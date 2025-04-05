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
    "4NBoYgawNSUf1vBjKsxBeRtzrAbtuf9BdrrNqpqnWAcXtumjFSzjGiuVwY7oDD4gW46eaR1VQGSfxMhkd5maBmw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25WAkoSbbX7uyEj6RLUewZn4J8hA8x1A7q4btMMLTtMAiyJWnKYmuwWrMMTWUaKyquZFkniGtwBcdNySB7o9gvdm",
  "key1": "4Mb48oFcfyJtCnj3Ukb5u8ogSdp3TtPdmKJBZE1ttkGyWWoH79W15UQADC1tziFadBVhun16xy4uGXo1UFXb5hwY",
  "key2": "vWc4YTNkw8AAijoySog3HepjA7CkUZoNpuAmbxiWPehASrvb4wjg875ZLP4pM1ymcwJbyukhe7TM2VjS1WrstLE",
  "key3": "5JmgrRoMV2bsvMFooNbxDWhG2upwrKCX317TiewGWNe5ATEXTtypr9Et9FypdkZpuPPn5wieBw6zFru779LcQHsw",
  "key4": "2HmDyfG5aKPPzpZS2kHtWtionNyYZ5xS9fUZWXiSFWF8vw3ktWCT36KZ4TYbWoiiLP8Q56cQL7gLGKEyvPGCtYH5",
  "key5": "AnTxRnuAVSK5pFBv3U28s6jXnuY5Wtt9wJC4Prc2YEYt39qCdn3jPRvUUUfakETiCQ67gosQE197FrBxUmNG6vW",
  "key6": "5MEJAkBA23dFYVYdtiu1PAWTjqa4P2ZTF4UsZcNzBaUDXmjCvUmAEU8cqUGKPUsX9cLwLxeSHEqeisdfKyK35zTK",
  "key7": "3zE2p2itFc8reybDJqYuCxWEnJ4HLGz8udgjZczFLSpDPxjnbssQh6fCXAMUj42NRgRew6iiZpNWUR5E1qgzvCEB",
  "key8": "4f8jCDRyhpGvuJgBcjk5HnX8GRpb5kZnzHvqR9gZXqMzJioMLRvDsZsTjt8LLsNyasYSTB9JJthDXqzgR2jfJHu3",
  "key9": "3sE7P9fdHkxT8wkwFCHVxbqsMD7wz2yCaKSD1k488xtJLNFC2AM4W2poSCCWZjZ2aPJxCboW9SqKNoWaBFgKheEd",
  "key10": "TW6A2BSmuB7LscVb8TwZkEKN5Hs5obxwq9P3FEKP1tZfGaa75EdkF59YAZqCgipF8YkHpZ2eHM1pDm8RnuzEA9J",
  "key11": "5NT6huPiiBQfikgpjoJ6tpEqGhNUKW6kYZCHwepkQ4PcwfHrgEexqHCgKKm3ng93q4YemrPNHshtZSGHShfmK2Q",
  "key12": "jXX1myBWotNaFeJqtpRjKuq5zrqPsXa3qwm1dNa6NpVeN1Bn7VE6nj8pU5VLRErE5zMHPTrZzRWJLRBJPuEaVc1",
  "key13": "2zHJf6vmRfdZUS175FygUJTPANs9tWqSdooYcVeapLBdLVHHkBC2CVnwqGkUWcXYTKgygGeyLSd7rQxNFHjoZDej",
  "key14": "4R8ftoynDLNwmACxcfK93Kkee1Z8pVdePXbtQaBusGUu6Mn8zfsutnTR5GnYTKNBxjYzXgwjhndvmCEuRY275z8o",
  "key15": "3QND3yZhPK52fdbP3XWxNsWRsx4qVvgFKk9VCzfSKZTGXz5ueZhrvBUGY1iaMwP8nwvymf1AjTu6qLzJx3n1jkZS",
  "key16": "9sq4gT3dgcfmKQVeJzJWuE46Pyy6UoZhgNHNErCitriKUssZ5roP9kbdiQiKv5RfRHAedeHz3YWxHGMdUqFaYFy",
  "key17": "53o3g9UddLwk6sysmqksXWPsUS932Kdt3AuMu3dwrwBTf399kik43tP29dgeQk4vc224gmMhAcmh1x8KFRD8Q8Er",
  "key18": "xVRRSq2eZy99VSyC3RL44F3gne7gCfzP7J8LWcngH1URn2KymbhKDvyVoHQe3LSbmtz4FycjwdQu12LpugcoxTb",
  "key19": "62DJY5qeXL4FnP2aJqjqAMx6R6y9StNf5ndrto9fJgcgRLtKJdHSn9jR8SFMQEdYforxFthY9RVTbM43w3byVQ1n",
  "key20": "4vFu7SyRHfzxbHLThCefr5AQaNETyFY751nZg5BzNFPXFhatcqoSDBJ3BJDnyPwfoiY4b2qorrgbu8Ah5BCF5Mbd",
  "key21": "4ya5wBsu1HXk3tsBqHTS38UZrdcujMSd2aXda7adsRdh9GSJ3ESGprYNiY2bn7L8xi8HLEzDweSXeBCcArQbcPBV",
  "key22": "2TqFb3tN5TuvPgB1EtFieWQVJdEZ3au7Vcy3syCDCFwWNayZC4Fv3jRMv35rho1Lu7JQ3RyREZ2RVm5YcmVENBL5",
  "key23": "3mTRPx4Zq8ukzoAjijLEGuDAfPT75PSk7NyaDveFTmPGCg7UPw643HkyR7YBSq9okbZkeqdKFjtrmi8jrVDDSJho",
  "key24": "4D5cXjqEkVKrPFbZmEmM2YqcbxPRGDoZEpzHfmJ8rwJKfntMMvyhpFWRX3Te1quuPxWzrgeg7ZBY8uJ3ovkNQGmA",
  "key25": "4WtwMUPnSTW5PUTHBX4YNpUoxdZ2jZL7D4R7wYAB3oH4h1X1Y8GiAH74bwppHy6ZKgiLn6Z5un1Q6UJGYYqKCqLX",
  "key26": "2CuttPmQ2MLAfYkXkAKSdsoeL147mbCdTH4QzZArPXnisCBdn5UV8h1vwbAU66V3qCgVMKEfs9PfCkatTrgbgnou",
  "key27": "4ak8QdLURntmqKLk9GRLr8dJs6uKQiW8qVm95RJk8iVqUPSceKGUhxM6mkNYxkkroAZhhXEeyXsarX5WXC3g3KjW"
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
