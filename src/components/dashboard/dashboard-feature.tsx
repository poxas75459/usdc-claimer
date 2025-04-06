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
    "TizNqv2hLoxvJfzCPqzQAVEvw6gaL85ngP1QvKzSjDRARFspc8oczTmboS2e8yqHimMtEHzhHZdMasqKUCjfpjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hyjSRiwgpFxZLw7qPGaAKeqRNqifSutamEt68BaC7GFzZuc8pvmyPAsXiHcv7yWLy7pmmVC4t7Ctg3S3ZAgQhye",
  "key1": "364UGo6DjmPoyKjDQQSUyoADE2uohvDFp3SQk7X4ffPwhqhWgLXoKmEShw3QtxxfnaxV5JPyQGdDeZvVNQFnat5U",
  "key2": "4qm96AbDL4qBwjr8JjPxYoCHMr3dieqvRjHh1KmdU4dJMDohxc6Eue8L3Ah79X8Bk9V9R9dCXnyc5TAvviWVrD53",
  "key3": "2BrZkjDCayssub1LGrP4fPdaocdGkLdDU1MT4L81GG7sNuaVGp3zWu44xtGmv9unAWXrZgqt1e7UWU6UwVnZjcZM",
  "key4": "25aLMmzgZVZgrEzAaUDs6M2VqVhupp5v2rhQodSZ6zvTgNwrjhnyF8vK35oTJkiQ4mbTeTiCLgajq1mTSSG2gK7L",
  "key5": "4721vvV43vow9hpqhGjAaRRgR1mCWk3HE6JGqRFtdDJk71KqNv3YaCNHLfpDyKNtb2FMQgRDKtXqRnegefrmMNuw",
  "key6": "5upG8vVPm13QtWgWTidQUYEjDkhaw5HBL8WddgcM3kkSSFPs6THbrQxPnMwz7ToPPpSyGM8G5o8VggNMQXzxEMnC",
  "key7": "2pJcZrW5e5bJ153nedoLoPd3JpwzUUqFXEyTwP4rJaK7bzrJh2DD2Pisy7MrvjuVoJu8CavFLNJH8k7EADTxqFQN",
  "key8": "5CdEYzzBGakYwRcquSu7fDhrdzdmiZVVLepv8s4TvqnzMTkofsRKiHyQzdqgsLW2q9EERYN9tnc3ysfCg2TJss8S",
  "key9": "2U6U9hbji7xBh43it26H6CB2bTXRYFVBRPGanYZLPPbCk577hueU4Jsu5TD54YiYVAAVd88VKaZ8JyphgNN633tM",
  "key10": "27vMHMmLavfUZ7cPSo3T3wcf42xHD3EknX92eE236ih2QU1boYEVCJvTzaEffFJYmV88ovpvu4EHoT7Rgb7eQHSi",
  "key11": "3VAGqm4VuNNBm3QmWnXFEb7oARiwgMpP37kAxh1KRyyEzTeg7kGTPDDGj3df59aXL2PGmX8hPDeo8A4vUeV2q2jU",
  "key12": "31TyQ2szPgAv8VYipjKGaMnMgc6YtuD8mqYfoFkCuaVcbP3up3vFxMEsccKn6miaQXZKFCF8yXcBPYNxsnkBb42u",
  "key13": "2NXagpzwfZCKvbhc98HLdmA2Sn4f1rDpuPZmaMXLSrTYcpyJUKZR694WEfWbHJotJgLbCJ8LDRkU6ZASxeGR5N6G",
  "key14": "3coJZHzkyTseBF1ZHdhQno5Jt8oTgyMM7hNQC6YSjcitFVajS6e6uNVLUSncyn7STTUMLnu3mNVeyFW7np9jLDDU",
  "key15": "2X6C4gYbz3BSxMqfX2JTex4LABeh392gEAi7ry2JAYb9YA4R6BtMrosQUFjZYFUL1oLEFEG9A4amCB7etLBEYPUJ",
  "key16": "3EKFze8Ea46gUX6tyk4furq29Tvct6viNrcuUVwj9236mPngiShNcW7sVkh1f7P942SSEsUgt7eHiw5D9R23pgzy",
  "key17": "4YeexKvzubnngR9Hq1QW7iCAohLr6iDmuuXL4U9Az8qgAVAh5WjUMm4mYagx5h5xxReYLJwUw6yS7gW1HW4ipj8g",
  "key18": "2Uenv9GKH43o2ruR4x7P9Pb3j3qDi9z9TNBXfU4ijXPvwxjeL8YPw776ChhH5xJnPbPSb6F6BSJ9U54ZnEDxakVp",
  "key19": "5tNZEEbstyoLyKUn1My7bvQTht6J6VF8RouwmV1jaXPJ2dgx1Urkg1NUXmT3FKitSSnkW6AjpbTY5T7TWPe9MDsL",
  "key20": "61xxhbArtYCDYYq2tMHH2tXMMQUC31MbGQfiUd8Z1iEJfeHWWSxZGddMCR7L8i1FL8Q6u59trtU2CiaoJf7PsfiM",
  "key21": "2WCsQBL2tA8fkNLi9zEJ2i3WAA3n4eZzZrsdTrD8PoVqNQV5ZPoA7ZzbJwjBtF796JQuSJY7Sn9zWbU9msYwvDd2",
  "key22": "7rieAwSj2ULvQ5mGFSANhqJUaDDwiEgohh1PWM8kT5ex4Ats6zMjXBqo25bsQvC63txYs3qv7nYMhCzQswVH1Uw",
  "key23": "2jj9CdSbjZEMSt4pSY1nLCG3ekbwE4fzcaT3MpWoyVm6SoZpn1FbfJkUPE6K1Ps4TAsNp6ByqABm48sEeeRSBUWx",
  "key24": "5AFvcaSJLs2iD4s5gjB4BVFJTKNtofGjGAXgS73Gt8Gdr9ZMxVx9xontnv1mrnFWYXvvhfb3Ltvg4VRo8N2CNsGD",
  "key25": "52JtZG7iER2J9SkXqyhqqsb6XEdnbNgVKfVxPRSnoDVsxx4vLJMWS1zXuwxDGGbR7g56a8rZ8MMdfaW1Cb4qEQj9",
  "key26": "3vYWd7WB8SzLrFB6cX7ra71MpEJoweCAaPhQPuiQh1enB76cpNs1g7keVEk6uxZ1Q5qSF8QabkXXozCDnW3SfLmg",
  "key27": "3STBnAe2Ckx7HRrXPpeZcCdxA3dLzfdiqfNvmPPF7zps5GEFdExxngL2H6JEScbj3NtJE4nRkUGkJEa9BeLKuigk",
  "key28": "1mUBvvgvktQeVvZA6i7JpZMBGHiGtbopXujbqvHgDm6ZLSHMTZTvyyjHCJLnF7x2GJX1TpSAsLRRqyARSvLnYwr",
  "key29": "5uqEbA63J9UMJ9edf9CYPK5gAALP2pvt1XVRz2BzSd7C7ftoRKj46weHN456vgyAnEHQdueTeozY2KQAA55D3e66",
  "key30": "2HYNu3ji7s2KxQq6KCp5TMjGELpiRc3jhNSXVgrQRCmcZRRX9r3Ch8f7k5MwnTegxTVqsDQ7skeQYJDHASWwAzSu",
  "key31": "34rX8RrkXaTeN47BPM6tWSPme22cUeUAcgeRETX5WyWWcY4ixVGZnAKKexv1XiAYa7hh4u91EvEmgkcftSS4Tie6",
  "key32": "66euovA9DVBxnRyF43wtU3M2z4ewnP5vibdvcsQj7GSaPVc9prA2MPQkKFQKS7EPpkmnr3aLw96uRqSjsfc82pGU",
  "key33": "2YW7dWWENfqY89Fn9B9kGg4DVoP9dXaGkBGpL6GMcSMMd8XnnDbyu2hYV4G8tVML7irYS9KWoJNDcCnqa8EUY3nk",
  "key34": "3JLhysLMim6Bzr2gcdq73zjXK5xXH4NBeiYzEES2cnuXmyFGrQkvDWsXCb4iHFNnWWKf5FMWsDaCcwSJyocdKq6Q",
  "key35": "3peVzjcpHvh4vZvoGoGegxvetMdMPcMQm4WNuwycAvxzNUtWdNgs9fTnWBGZ7Qt82VjKNKY3vzSyhfxWPCmCa7Bh",
  "key36": "y4BrZrAxdyLEdHRyCBp7oe5BMDi2nB9mnuxFFnL2uFdVit4XYQg5Ssiuf2At294S92jSGrnvRPjLfikgXsgpJ6j",
  "key37": "AYRHciR7KmYHQqcPh4qj9Qi4x7zTpPU4SCyx6QpKsPPinLbUcMsVGAdsNkWFY6uc7RY7cXieSFLQtfvRMKYKRN5",
  "key38": "3MkmPxTxNe71kgMewexYXWXLyaGkjw6piEuqnvygw5dwteJwkmH53t3rixzQdXwVvnfw1i2uTS7ZbNycAU5CVgtE",
  "key39": "5wzW43SJezXs1MQPZbT8rtBDFaoTGaGLqXBZJ7F29TNv8wwLejG67gnwypPPXBQX1NNeZeyVyDAT7XS5tT7Zrdpr",
  "key40": "5aFhcpWYfRLmqmzauQ3PCFXfmAapnazN6uPVcCJtznCmCjVTHHjddLpkMy4FwRk27RJAuhew5GxYWgMY8qTDmaKy",
  "key41": "31dwA6URDXMC7advtJxAnXaJtVKwvR1dTAzGjWwiyhLAmc8U6oGwSWaGZ3EJm5nhimoKPqZxqokkUWp2uMEgQSFv",
  "key42": "49wvHFuRBCNwhG8Eih45fQDfCMvv2MCBm16bELWYiGpJkXZuyiZNnPPJ4ymXWsdyss6LxckFcNuWgwCWXsfEqKs",
  "key43": "4Ss5mhE1UfVL49ihU97QxRPWn1SfPeLVbN6xSfidkjixe8uHc9rRmD3jPKNFWtFjTT5LkDq9yH62MLLH6PBTwrHk",
  "key44": "3rppJSddo9cZqfRv1BYqbYnHNm5KZ4QWZ55ZnHbnXEdWnjdsshpmxhG2HcW9YGsobc2L5uHdq3BzeDo74CSBbFJU",
  "key45": "nSA4DeZzSURwC2Lk69wS4yVfF6EeoqxK6hPc5M4hKo7DaUKJvwfMBehv2T6XULjmyNAd2FE5WGiRXNNTqF3YLQh"
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
