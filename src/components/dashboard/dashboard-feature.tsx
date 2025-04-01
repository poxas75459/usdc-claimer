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
    "3zUxUnwe8tdXNnkpfgY54wDXDD2WccfadvnTYQ6Zyw6CVDyF8VpzWthrt3tEKKDPmd8EDYT5LjV839YKdwzeZ91Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p42cCVuQ1w6tkx2847JmkedMaCLWWKCCwhT7LnTYFDbCBPA2ecHuTaxgjVbzv2euWUEHPhPpRo1SNMVtuqCqaav",
  "key1": "54Rq6jXFdFJzheNZ13uPEjywENeyNW4HTi94qX2vok61aPrdpz2pRfjmKwi2MscW6PoondyxCHcrkbdwXDXQCPYq",
  "key2": "2jeiLr2dYEYqGsPHCPx5Hg6Qng2HGPVQru7qWfotY4BqRiYmMNkQSB6hubC6RCz2A95XjZtB2XzQ7VATERfegVxp",
  "key3": "3C1ib33GLobfF9BC2ZHwdDbGvcGiHKJGV65n82HMMkrNatN9VrEgEgYnHjvEB5ZCGTYnBF4z69uEuYwmZgirUYAi",
  "key4": "3QLS99jot853fe3aqG8FbLaUUkbXQeYzWntaERJtbSWGyDs5qyjsz9eY5Q6tyodfABXuzh9uNRQozThqzsDpmrAJ",
  "key5": "3HqfAxDkw2xwyXezBm6fHMJqUMscPbqy5rEeERHWxecLGagikDSMsLW9b3S7npEpMv8LYexhGn46M1uWHwBjNfCi",
  "key6": "EkXgBDK1GTj8XUz1kJprhAdkg97kXVk2XhRAMQpqX5B8ik69jSAALFjahsyQ1EPCSYtNByT6M2uWeDLkCpbnqSG",
  "key7": "5asDw4EuZesffVLtBtWgrcvd9wdN1qLNxsj4itz5rTm3TGoK3XKi8BTjCEGBwemmb3v4DZjNun6xJwvXb1VREWwK",
  "key8": "VxSmjNfugPUL7QdvcUT2wn9bkngYZrddXzWyWVCdnsa49G7G2DmwcxhHkRg64hrSt9QZfH89uRwkCPcrKysZhtJ",
  "key9": "453hUeuzteSyCWoUfpMzrxBMRTxartnj8FPkAZT1okrAokAFjxUFTj2u6SY8pmjHjSHzqpR69wnhWUiJojvXPCiK",
  "key10": "2RndyWLAUuc6GY5i7U1LyDjFEmFWdUq5CrK5DsM6tuHfna7WfBpBqrxTQ6k4GsQEEkDrkTnMqYMNjFg2C7PxjYpi",
  "key11": "5knoBvpowE7TYmMKga4Y6wdx1MoGPdVMU8zr3JdMwkPahDeZfEuYv2KaiDtY48y4CZUCCEZxRXX6tJQa4zuaeVrH",
  "key12": "5bcaLMaDpre4m8AzuqPNGtKQYkWNtFMYggc2qEmFJBeEyMj4DByACcrx2G5wo2GQQqE911n2o8QmZF2k8AuYknJ1",
  "key13": "3u636LHL9zxURiS7JSgWdyziX15cQ4ykbZrPcodL8LewwPAEzN1NeC7rt9t7XkFe3MofDvJ6x6aVoSshnV5Sgpnk",
  "key14": "5dbhWTKTeext5WuegWkvb531SXrt4aTYCowYpg4Q4zhWKRMY44ZZuzXsA1JoskFRtwWgPRCxUUzrJyQjXCbKRkHr",
  "key15": "2kqhgmnXeR8zYTKgL2aTvALNmXxcksuyQHNjmE7yqLtqLvdR2zmXdRqtevtyfWJ38UNU1rX7ofn55CeLkxjomheq",
  "key16": "3qp6Yp9ZayfkZpMkHn6vJ2V8EACwPzQn29vVmRYu7YTsjeC5N7AxQzzdTrVi15dzzNBKeD1ChN4XBVMdJXyJpGew",
  "key17": "3mRwFcyEvS6BunP4bkf6WUTnma33QvbnPdAVkgyjYZeMzDk6hEQFaK7NKgMziSq8tH4aibsSiw88rWWK1ZzMAcDq",
  "key18": "2n1FX8aQnA2N96rJbXEDKAgG4D1e3jNcV9UXe1TGEj6gtN7P6HJoVK5GqthqHSFQr4UzuwBYWtby9PBJ81CXYjnq",
  "key19": "GhMDkLR6c3kfxXuqKEAoNWDC5vWaB3mTGZm2jSKEwV7583T8uheRkPXvQ3Ed4GdTy8BFHB5hwivRyi64jjZ1fXt",
  "key20": "4nGb64745kLwPJeLW8Z3eE9xiqQnzqw95LWDrSUukhQ65m2iNftNurevqVLMS7Q5m7Tu9KnWpDNZuD5Z9K7QX47k",
  "key21": "64qUGSAuWgNpGZGa5EiqSj56ntSaLS3Fre88mrfzXbKuePHV6w16iBzfmPuRd8uQP97NUNnvFUgqoHbxto3P79PU",
  "key22": "3VPFWhSLTpdfReod6kuTYXjy82fC2x9QjcvRCqMwqmv6qPHG2VA85uZFKpDvq8f42Wtak8nouohp11ARACmg1PLv",
  "key23": "457FeKYwm3hnZLPbttR3GXCq73Bh1Lb9ARBZ8wco5iPwedgtMZZNZQSN3Aw5CVUmTM5UHZfZWMrwE1HEQqPsxKKZ",
  "key24": "4CJwMTyLvQQsPFcF3LM8zBSovQ7Sj7nrXGBZWxiW2UH12VgWya8yT6Bq66AxwA3S13jUGBunwMvABjdtgZs8vy4t",
  "key25": "2ouatQuDCeLdwmPtBadRevQn7Pf2osxo3dEg2bn2cyDJF5kdDmHBq5r1xBUHMVU9o2EY727kmqV2KSJF4q4uMTEQ",
  "key26": "5tNSQb9xu63FqjH4t7M2JSqxMVFcbRPSSxkXx5m1zxpAAFNxcLT9pLHUzMgpMh1ybgPcK4REvy7LUtikjhTXcTPG",
  "key27": "2guoFGtS6FShMjCoZbhSMr7WVCvJnPZNJLMtGZ9BFj4o5fgjhmTJnYMnKYy6QxEjuuHohQQFnBdPsmkYWrkgPpkU"
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
