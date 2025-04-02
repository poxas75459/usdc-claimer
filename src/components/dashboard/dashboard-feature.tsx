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
    "67K5dBXuWEuvpEzK92AhQZCWSwoEM924djqQ5Z6cwxNPidpwrPXDHmesABS4nYQkjJUBuGU8dkLtkYGuA369oTRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39i3ZfRS7XEYD4qkL3VyUyRACssTQC2EAMuVvNJRV68ZHg1qVQRDPqhb7YQYS4yVgZy6nuB1cVe65273pJ9wU3Gb",
  "key1": "5Zu1vA42dFdRt3CLN59vxmy2obXJbCJdrxaeTfvUidp4WWfZdk2qKo8mSgZaB3x8he1oGBWWp6StFW1tc5YSPhCV",
  "key2": "56x6bitQFxWsnB7cdbsepNRGMwtR2EAawwTWpmD1vzuTQddpeCbb6pwjGFn6P9uEUQWtdnZvBdw7qLx6qU7sdsCN",
  "key3": "AFWaeDCTvb8dn98MopxCcyU23AF7qNNACGdqZouHf7zSucims6EyvXneJVdgfvv83mpshTcB1NcwjCub9rhLJcv",
  "key4": "4JLjqeXtWr4tTXASDaW3YT2JwkWvxHUNipSQDUM2t6i8urg9NEShnz8in7ehPegUg3svgvzXmqXyhFExnhYH4yfC",
  "key5": "2RHTYV24Rij5DQoPAt1WxsTitvwWGDgdicKcf3Z5fjFguXjo6yM4VswhYJTShj4TJeHPWmU5uiEjVHNev1eFJd6F",
  "key6": "4eascV1wEVzKNpEZz1Xw6DpqF15W5U5fPwo6TEnVm79TrC198Wkdex8XSUJTbtCGPPeqsAMeGeKWjb8D5kbnXgee",
  "key7": "4PihsQqPZexLx5wRtXCkmz6XLdC28y8zCBWSfA78WiNANGPddXUht9JVyzgKzXYyYiC5oqJ8vyk5kM9WdZHvz4Gc",
  "key8": "3brZGY5efJEu4ZgrcgDjh6FC7ZYYSNNwbMdpeEstZakSqbTYp39HwC44YFhxqa5rgX9VPZwmLUYqn2SmNkMsu8oP",
  "key9": "3X1hZcQEJiERUAURXymDod7gs7veNystqfVnu5VuCysewqGePbZGsFhr6YrZSNSv7C5KfdJwbmUZEHsXCTq8Ymgb",
  "key10": "41dZU5hg8Asgdn4UNb9o7JKZEaFkWV5zbaDZ1Bp1STKRrK9y9pbXrFhz3ixZ6LfYd54pDCCaxe353dLfNSpc5PTM",
  "key11": "5N8kJDCo9UUXrih13CttYdLmH8BCVcU2Jth29NzmCZNHjMpXrpnV4a2k74mEZBsGEVZReV4P2RiWdhK9NjujCCTa",
  "key12": "weq8wUXBBudZbw85zbABPi4otgdiU1ojXte5Pb6ocoRwjKv4Eex5sTVsw6ZqqJdwagHp5NHxUNE2NweYGY72km8",
  "key13": "KqNUACDdGK58sLcZik4mDNTxFiUCBjzzKuDkVjDxAqAL3CjBzvFccCeAW3sLydcibRvAXzpHx7eHbVgmR5PmUY5",
  "key14": "4zr5JY4PdJThzHuotvdx3xw4UrLPowUtcm5xT57uKQ6rFaPNFVczhKaXp2pMBGzj3WxaqY86ZAbLdoKKJg8QvWpe",
  "key15": "5QGoypimRB3bfrRmMjV6igqUHYHSGA8vrmionmD1Pf4goDU5q1c69ocvDchZdCgDDkASBHPezD4K2egt1GRXV6mS",
  "key16": "2TkUZwpyJftq21k9qsEJxHKre9YgDAni7sxbWE9pybXewG2bbYqytDMr3eh8ifYHJkEKXwyY5DVMY1BiigdibjWe",
  "key17": "37J6JHr77FGQ8hHkiwQ8S1ybUn1crZugpmVR9A3SfnGerujTvhSPSMdK6RUZ6EphF1Yzn4VnvpowRZ46P5HwTfno",
  "key18": "2kbVmqY444VwQNC6LPeDqEx5wseBocEKZCTzeKtvED2wkHHFJCCs6ZKiRbj6cHBrbkLMx99bSFxo2s3HFR4ByrKj",
  "key19": "2afTdDHCyFUQgk2fdf24FAUMxLYGAQ3hexRWc7bHsiyRdKayszKj41ZoezX89CNJQvmwUp8qw9Xab28Z4nXJfYgD",
  "key20": "baiftL4nNxc1rjm8p8CxLRM5VX1BV8uMe9xNw4UkHZcTzZ8mfHXZgZg8nVJmLq6DCD2MxHPZJggS9GUivcEUDF6",
  "key21": "4tfptZAuwTQ4EpJhf1of6viBdvz9icjFAsBH589N2JiF3DiTJ1N8kzffSTPvnHgc79SQAnF8GDGbSsR3v5Vsci6u",
  "key22": "2x44jKuatw1NCmQ3nPzpLD75SjrobaMrtkQYN7wucbmXcni9cD6fiayCid4YkKs6ii4Chjq67zRHcwYvXFMMsGt5",
  "key23": "5t7yZBWiwpFWXHirSGBJ48kVz1fgYNGxiqGje4taTRqsiRnU4Hni4WkTcsbWHgCzp1WCwZpMkttxAod5E9K8ndyE",
  "key24": "2m2PPUfEYXvbt69P3wNkoLFZZxEGCvM6hpqPSRKZ9oRYu2NGUcv89bPoKazmCbEwVnKxVDhdMCdS2QaadthUgRGR",
  "key25": "5JneTf12FEPS7VvNYEtXGKZbAbVnZPGWpfUjATgpodoCNyRNW4bcSyaZpLsfgFXA3tFqVSMmutZ3f2BsTTtFs15Z",
  "key26": "jfx8PF2wFfLTSiPZ4658jXhsJjq7jNxczzdusmTUYNHWmHxGAxNCLwbufgYQoZtwkSrNtapmE4YTSmE5FR8MQn2",
  "key27": "2V2DJkG9UxhKuN7womSPZneATJhJBATRZjntuWZJNvjoxMRFRK27G4ZMcR3SC3QMHidJYHFJbbDffrwpVsAniaCs",
  "key28": "2Btc89UfoYfgpNiYPVJZZUGuzVtSfjfYtTjWgTWvx4o6uYFUkp2wdb8ztfvr2mMtgLsoqjREhg4uGTLmAkfUmy24",
  "key29": "2gSQ6mMctwVhZbsFfvoqqBkYC4WnDdzMJmuApvkFz2UjZVFJakJUKJq19Vt43rhh75T6HdngoWDADgevBUJ1b2oo",
  "key30": "Qk3gi5zbZNJgpcKXvLGiqU7ag4CJtRXr4GkbHsHBWDWJoiY5eQvpxRiNJgXGrkPCZTD7uF6opu2MvYxm4z3zYbj",
  "key31": "4qe9z4t6jfTA3J2npmVrFqEV2iKE66iPAkMjagtkcg1sz3YTvGNbNLoJn3crXZ6KPLenFMPmJBz5kqA1umhXkFAR",
  "key32": "4o9YHmEbXuQ8hYN2nZmxH55Y9i44xQ2zZyVh7Beq7zvwk7qAn3QrmJ5HDCorDwYkeZJGMmrJXz2J6LkpPVrB9HUx",
  "key33": "4FQNXZ6eLzi1AwiqLyB3tJaD8zzCA9ffKDDYcaADHQk8Pd4Yk4SDZGvLmHUNnaSWJyJLHkK2P1EAqAxcfo312L6P",
  "key34": "2jwXk5HQgvT8TxhgJiKLQPFSREmjohRbkKu3BfwkgPvRgLcGVgQRPxHBPSEQ1zMaHaHmbxzV9yuBDP2BFFe4n6wY",
  "key35": "3JnUWcNXFZWfLqN5EjRVNNZjRXs3iA9N9SUMTwuAHnBRyKy7GNkRrXknVwV9yo7nuYDX3XUN3RksTjdWqavu6WtN",
  "key36": "4L3iMkNbogJ64NvbZ3dKibWz7UL8h99b2m9v2oLhPqUHSto5t6Ji2UtdDHcQWdZ6zkMXUfkk4MVn5ZJ1H27WqkrZ",
  "key37": "5qNMd96MDoFsoJCB2ru46KQzAib6gZNvWu7fwvY4tEPW5M9E3Ez8jZqQ83U8cA9VsFGn98e6NRsw2KxfknTnHNGp",
  "key38": "4JpUWbg3Nh9jBcCtimxCjifTFDG7tsAyydKaS36L464bNYAAcYbZKcQfid4SvK3w5CzmUzZjQfbRtzSY7bd8yPqZ",
  "key39": "215dF5GoErRdEnfhS8M4Gwsy9Gye6T7Y6AG7vTdfLcN4sTJ5f3w6M1tt48YVcUPaP6k2uhB1eg5QLuqcxENmpqxC"
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
