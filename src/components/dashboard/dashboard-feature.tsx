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
    "2RsnVa2w5va8JzNyXtFHXjGog58LpQfRCrXymoCGCbcrT1NbuyJiQF9A3qppAFC44Y8eHL3T6V1XtjQwje17Zpi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MG3UPuaSCmJh44aWSkRURZXggjCM3GzdV9SgJegmsLvn6J1tM7dfLoBCL4EkH7Xky5uTqH77fNPzJaW9iWY7LBz",
  "key1": "4Zu1BMH8FU16eFK72Y36SoJW6qSjbgnsMk1ofzaKkhWZLMFm5jyoPZSGfybdUeQbFtLZFvMEPHUET6ENJEgdnDwp",
  "key2": "51PNiE9nzUuJEhrSerjYJGvaWZavTiAxkPZKex2K58c8CLsfBV6Kfya4hitksuS87AR1UpbMWmJ3ysLxg5D7XcpR",
  "key3": "3HDSq1GUPCaFWQBiqyS9c8q1f48mex4nzXz45vaw9Ap9XjMgXkXKy5CCCUdVdcekmDKyfwy5cz4ZsYiKAxsq5K2P",
  "key4": "5BuyKCf9TiBmoPyWzGn1HtFjgiTAGyrLc5ivaWtR25iarzogM7T61t1MZdovx6mGjEqYt39oJi7A4YYqM876WAmG",
  "key5": "5NEQZrCAVfQWwiPjmjMB9AxeFb8gat2Jm55NMEb6Z1c5DHCscaiwYiJbnduUKg3qVMeEdzw4ZwFiG8D7X5i48JRz",
  "key6": "3y451rd5pfiSTPuk7V4C435vDoZyCvt6eq3anWDKjWy8xFoG7PCMT41f5ZNW9H9adRm5EmRqf3HfQmkUCcAtNuBb",
  "key7": "67ec7GyMNctxgHfy5tsTKSZUUAWhZZcoje83KzuEb4dhVxkJWZaVdtHaNLB3vfxjevyPD5LRrfdcNnkcYWJr6dwG",
  "key8": "3KEBdGZyo4SQnzUJ2mQkuhSP2g5wUiKJSaGR3pq5ZnEHmHqpDgZkq7VZDYd81TcDavJBDdc3ZTjemfUEFeFWscvX",
  "key9": "qMD8aDxARuLkhQX5MDLbH1xteTJLRfSjob5qP7DktK5sVdg5uiK94tngjroorzjP81Jng6nSUz9Koudcb8Gj6Dn",
  "key10": "4WugDH8HrRb21qdStgJphcCgwE73bJkrAfw7c4VWopPRs1UCor1GZw6bUvF7CsjLHpPeAb8d1nhhKL71qzqoZXYy",
  "key11": "39qiy2zpDYNhYEzU4DpbKmG8a5XACWYLVTRgBJQp4PLJWxukms4jb2yJuBbe86SyPmoJT1SxsJk5krDZBrsKEmVS",
  "key12": "55vzQ1C2aEi1CN9Zrbaz65aE7K9sXCkn4ur2XTRbXHMCXaG4dYgN8NBKBejd4rcNeDw9ViVhPPbW9jXdYjqqJDi2",
  "key13": "WDF1XAMDFz1rvtPJ6W1QhbnM47t71RFXKhR8f57RdHCWnEM8hdQnikzwYtoBfkET5H2mx4ct2MZ2UMmkgJTzb4W",
  "key14": "4hLQyKBkroBbkpb2zMHHEMRjzjsN6TMQcvC3Bzt8cpRtcj9RA6huLJYLh5FpJeqb17WBTQZT5UecApdGtR5Vheoz",
  "key15": "29dB1ucRn9FJNuCDA64SsmrdUB9ueECgj7ftUoNR3b3k1DAB64wTLPeM5WRcY77Frrnt6hiMiA4APTB23nT4FHDx",
  "key16": "EiRHh6e4MZz1TYcCk52gM45YdwkRDnmp6rS9fvnk8uNGnsh6pKfpDGx1sM2Cj38e1aiMffPs4hiWSwsW4cfED8Q",
  "key17": "5dzX1SLNjh3hpJW8g6gUJUd63fSm3KwTshfKY9MXZyV11YfGz7jZbkMU7Uvb6iGmND4CHxLAb8vk5D6oAf1BJE6v",
  "key18": "5vDgYopSeN5FfTVDXmdoubPtQvuEkygH3eKp1gpKAEMuEdKb1YWMvLiecWehy5vavXGDaPWR7VcqomXEKokNBV5M",
  "key19": "U4CvZBafiRT3S1wGjkoq5WEMzXMP1TVK4NsZjKFkAytdb4PvGqKjVRW5tgkTQffAbNcaQ43PY25jG7mMC9ZCC7p",
  "key20": "WQNxzwjb9aBfVU6LcSUg9tpPiFRhQ4xxqPGqx4NPseomNW16pDiWanCBweRrGDHsCxGtAdeHBEU5FyQ28tKjGac",
  "key21": "4pHQnmPXCge9kknoxUkAmVTTnwSTz4W21Vv5qUPhufRfMu9BFzKk8zQ3z4kXjVQyWujzDEZGRpNAPT1oXoDgpQVk",
  "key22": "5KSzr1d1CnpvpD2jjQJYWvmKWfmZsk3KF47NuX2uJXdo2cT6rWhaVotKcwJGhhnSpbzfQiu1aQQDkP8qrrUaxfsJ",
  "key23": "Lh4eLJxr9oMs6QN35bpts26AHD4PDaTF5vrDrHSv7p7UHed2Le8L6qU7ZYwkAfB7RSfvrtz49VXZyhACyXjFY8r",
  "key24": "3FZfeurJzPvVvfjFCsVVoWLfLGurWtLRnUk7yv4kjDSwuJLTZ36w7B7GpauepV3mg2Ci2h1P9uyKk2jRusT4xk2u",
  "key25": "5wJ6tw6tnftWHyHULwhsLfseoLRV6956jf23KW7BLFdx5ndVkKGLhveXenFP5jxsRCabaeh3Hov4Hekz78fatatz",
  "key26": "jNYN41Cbrtzgpzniya3UfPyLmq5kGHp44N8J1ea2chwEWodKTHpTuowNs8RbeGYF2DVo2LRyk8D6Utb6Y1ESvEc",
  "key27": "3c1jqwg2gySXikbaDKvfhyn9Cw8QoffVsy3BqTViETNJtnDaobBgWr3i8cyuEKQf5NSJNCfMTrcgQyC6AqvA3fHt",
  "key28": "25YATtKUfLGVtJappBo47HV1qHL468GqMALPoybJ9Ah2RHygmo1zm24H1hTRUtpvYc7BRakv1jqjHzYHUPMDgMNP",
  "key29": "3kiTqNYSnxGdQ2MTg1zUSMGxRXG7AFpmo6xnLPMdGiMcYaRf1tshFie4k1qAzZ7kGKtubmBx7RWemdE4EuBKygaG",
  "key30": "5hBy9wfMsPWJEg5eKUG8cHPCuFBRWAeXV3jtBiVaBzmPCwFYPKfgt8egT22gpPGm7mT88vizADBuuWY1pQu9DNuV",
  "key31": "nW1ELt3jwuK9A1on6GcLPCL6fzAXaBpr393ovH5Yw5roXWJbrCxZusPRj7Be3sECbRmsBFqhQ666dFM1bypFKwe",
  "key32": "2Loj2EnWoo5swCcFpSecGqQzBQgytcoTV9YuBj1fzHQ9g5pyZvEwqHy3V2gQTVfdrXtBqBVAGkVFgdu6uR2Gkugi"
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
