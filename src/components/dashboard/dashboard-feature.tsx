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
    "fMRvDLp4SQSTHjFRdPoyuzLX4nfTMyhyPog68VNjdW5XaU26EMNCcv1VEMnZPA54pdcmpqXszapZsHJfbfNq3RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGS2soKJMkCxRXFzZy3eBnuN4oVaMZEuPHD6VPJf4EMvMvTK9RKtCCeqjHuLCABTRyiotmtU52m293dziuqC3Sz",
  "key1": "4SSM72gGHbCkWW763MSgWVSCEuRTYdgK5vV6socPtvbj2289U5ZiJUT7mCyC1G5kughoCkgxHHq1ArEkjoy2eCgf",
  "key2": "9V8uR3Hkm7UE2rw6LtmAEHzHFhBfMv87PCUofQznxh1tuVqdcht4aM6iizEhtdgLKqYCqJiz1uRXFZJ6HGt3pdx",
  "key3": "5HGrtiFppJntqSUk9aMGJkm88wxpcQP2KLKL1mFKPG38WTfCnocNCJpJtVCsiLsZMNaSyp6ksxrnCkjxcndwKmZ5",
  "key4": "4fuxHEoJMpV8u4SpGYaNjRe4D8NH3sjQBbuxkwdZJJPMrfRuxGqQ2qrkzsA2MAea5XxHy1ArJr3tdT4P7S2PTUZh",
  "key5": "2ya1vqACH77r8FhmHaPeYXhMDmpo6yN1hfcArwDeKrvZoKjw3bvLvssre5Pb83hJpuSDmLS5bEnfiHkmzqoek9Vg",
  "key6": "q6TZnLJm5f62sZwjA2HeqmFoZQeCv8nvYmM8qLxYg7W6B1pLPyJQCYaZgqJUwwLXRMA1njjHixCC1gWbiCKTe13",
  "key7": "3mADz3zgYnBsBsKDVrApeAvPg1e7rqn66qC8m2Z7MbRtzKBHyYHXxZjSot5hJHjfmXWwa49RZFn8VoQKBFXQXkDZ",
  "key8": "2hWbPmFjRJ98mQH2hchD7yJmNMyMHMhb6Kv5YCBjCqud2tSve6JtemztFV4uikjFZAJTG8XVexEnZ8c2BRZMJKN1",
  "key9": "3QGDXHTLwQ1C5uRWMyxYuU7Mz3bzgxavCKvamPAySjkxiAL1YJz6eA7QAp8YeYaCUthqUTu16SBDsq8chcvUCGfi",
  "key10": "3Ji5n1N3iU9qG7dXQUzQRaJ3idk6LzHdxrdQ9PCRQWUs1xoHGdxgHPeZoWffCwAg5zNTsyKL1GcsLx97274mfNH4",
  "key11": "2tKSPgur6U7gBa6s7cVVQkwcnJkseRCATD2ZunjY5jqVfWKVueQTE76Bbe1F6dGjwiVNvfKxZLZ8uK9x3haTQP9p",
  "key12": "3JepLsnkhCoyg23vQjndRtcB3VZMLTXF9jQJYqiTHyPtqibfkvGGb8d1yQgCxp1t5WK1a4RxEoyns2YRPmRqffcA",
  "key13": "zz5QfFpZC4Ys3sWDn2M6Pf5VhkDA8SvqxwWsJ8uUy7pfRBjmQVw1gaPBc3iGGAwcs2JgGgAQ8iuLBLmA39Jy6Dn",
  "key14": "2pzRWX8S6EXnDBH8fqSWjx7YghUKSv5NPFGUpQxAJNxnq6s2bwLmsNjXvY3839oEehu6YYHbt8xEMATJKdKe6k1T",
  "key15": "66GvNfCCzT18atNnMsb4Poor3ex7afJxSF9wN2Hw5ETJwW4srqKZkvQt5gNJyfygGYcz8ceU5WZgREVSVXCHZYWx",
  "key16": "5zmtNBfhxxP97YN6UujfFPUcbiEs14g8qzmdNk5sUhLzyUNFsmMSGwq4hRBB37BjMzVT6GRBk4M3JifeVfKKFNCM",
  "key17": "2rTNNzxTHMwKkri7inbNSHpXAfRpYJRbpyoK3USfRR3MWypusbvtqMvs85EWMPfKgdX6wPio26LLBbzsgxPv1dY7",
  "key18": "5w1asrfd41YHHJHp4xwoChxXg8K2RQRhUvU53FWyCjSGWaftvHvQADjwqYEX8UgUrzVCZCfzVDjbLJEfsyLVWLxN",
  "key19": "4DykwxGP3UFb84GXzhXaV7yuSr2davDgsBnNPnGTesDuhr6EFqmTcBWryVWakcc3oSH6Zuoc4n7ASDL66Q2p1ySc",
  "key20": "3M7SCPdGANRBpC1rBSPYJdUvzyn8oL7mBjongqBrgw832SKaR2PbbLRj4wFtuGhgoK5s3o5zJVLcdr5ttWm9SEUt",
  "key21": "5euDJomC6Bd1HuZQgHN8GqhVh3JQXRsZEhorkcBen1rLMocsT8gMFKGv15iZsobZLssYzcVgkxi1WWJv9EvY1oMC",
  "key22": "4FkF1qyfnWgdYFNENr5XWYZS1oW9gaK3wfE6vY1R6MVLVCmTnmfWUXM7k45yDzZC2GFp8H76XTEhejR32jVx5rNQ",
  "key23": "57Pikew3DayzWFjNY3aYRGfLmk1FPMF3SwVrGTQwPZQY1baWLXuNQbVVNZsbgqhHd6M4nyfeT7XpArSiuSRrnVTj",
  "key24": "2gAAYPoQpLPw9WUVUCVtoJwcGzW1PcXgXzsApXrr6ioTC2kduv628hNcsiv9ikx2JngngjpnAZTiXKM4PZgxz265",
  "key25": "ZfoNpiY5G6CCbLbJXXkVVsaCR6dEJB8VtJcB6QoJMcmAk1MqbAZBeU2sFP2spikg2iz1DifeSvPyx7B3bYa5SS3",
  "key26": "4wCVFkXkiZsdNA4qjsDS42BSSLLc9qsB4L1STS5k8h2JUFQeNrsA4zAJNsVGcTu2kzi2JXXEkw4MDLVVb671eJi5",
  "key27": "4mmgosuc76qNkt2Yjo5jbTpRXPpfhduVAkB9bWu53wRUPfFAgzjUni2mBcphindW8UX2k9mTtW8GmTpYKvs3jeoA",
  "key28": "23i5tVsEcb3iWTScTZF247ku9LrjZmRJXKEzMHanBUCevKunZq3Nzwm8JhdB8syH6v7JJLxjtsKfzCzbDFMeFftv",
  "key29": "51brxMthTrCx1SzA1aj3K7JaGXR6BBAN9Mwp6kkYWEFSi1ikx7xfLGPZ1by1EpMik9QMTVhovfswAUeCvuH2jB8S",
  "key30": "5hDdM6YdQCXorYB7HkCW3bSRBPqFjYqGysr73W5VRfwsTKdpDyiPXnjX8fU3iD7Ttna89EGEpnEXC46oXmKNm9jM",
  "key31": "2BBF8N1SYNSjR5cw8wdwiM3ckyKKSu2DKBMkY8ERGftpJsveUvK8HR1rzTsX765kkF5dkLMJYt3dpKAeEyNVM7vS",
  "key32": "4uLyDbtu2gfzTCVxfKrSFFnyRsLnm2nyFJxmN5LtkMHwRoxhJiuq5hvQo8beytCLcorL9DyTJkx5o3xKPLzYznHx",
  "key33": "5hbXB3QGHcjt24QJ6zEui8htDwRdt8wtDtpmAeEs5iwCqNUXfLpahnUG65hjKH5P4FV114DqQtbhD9T57wXuS1x1",
  "key34": "3ZzHF8rq1uSqaZoW2yP2CpPb7HmnZ26BHrixUW3rAmBMCQEnBoLTs1JXCRmSuC8T1bttJ1ork5KKBx3Wmm5TG1kL",
  "key35": "4f6iroRnZyz4gLHVCvJ5yaWmqDgrHjYyLX6hJuziWktkRzctjiSPH7fiscmz1vFSFED9TZDe9N57ZAHxMjk5jkSR",
  "key36": "CPpGqZEXtgZwsi6s8pM2eKPh2bgKuYgPiMH7WbbN1i4wUdWTVVBaoc5uSdGoMkQj9MRtidC2FknSdrPANqFwueB",
  "key37": "3JiiDeT8JoGcnuCwEbRmHistHdReodCubTr8fYBNQafSnRpXMXQXmzuRThXKuk3UBMU6keJvcgJnnveMHprBZ3y8",
  "key38": "3oHmnzMpgfMK2rnMYkSVfNUtVv2vuakkaPBzcdAwThBYtqhtU4vgpohB6WY989LyWpL5LXuXtRx94jL5SueT28hh",
  "key39": "38xU5DxQBcNiJFZR3Yo7ZWLkR8svszWZAABNK8LPjys7vrD9t6r3CGLuNZJ1qfpWhusnKBg4oQ7rWfLzk5bzknGJ",
  "key40": "QvixJKwc3qdErv5mPhuP1cQU4TE2LWZoMpkmDGWJqwfy8KNiyhK9SQ57s8cdg96FLtbNQ7Ruo2VYVFnRwzPfaPY",
  "key41": "2CbeYo8yv3LAB6yNeU5ACifbaMgHrV3CXW7mRtWC5VBqrwHkEKo9VxZtbvXvSTxpWMJcBMr7xrc3FuzQ76EebEtQ",
  "key42": "5uyziYHZ3DRsMc4UcY1tXyj5LgCpCkyU1Sda9B4pAeNx2UKdqGAz9aGnvZnUMwmG69h9kcbrZbeErXP5t5kdTHuN"
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
