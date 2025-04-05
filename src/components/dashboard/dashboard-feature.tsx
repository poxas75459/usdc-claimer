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
    "5Lb8SSGMpVDriwbuC1r3TY4BJ7WCV7KUM9YeWW1cvezpRxughrdjnwYpg21nhVnppc5QSKtS1ckKVkDZXeBUqF6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mUYAKiTSewXVPFyfvxT1Bb62XzjhRMBVANeKHG8jCxYhEbXotq2EWDw7umxsZepPN5TtjJhvZfqubhE74XsVybe",
  "key1": "3ZWkTkRnQ2RDMuoicXX9DGXDC4gRYoob2ewEq7SU22Qj5Dd4oVANYpQbiSG6pjwuF8iojM9kBKHG4ZruQdfUfmh7",
  "key2": "2Qj1axh4HWdq8p3j2HxjKCDUXQJTktPxeBKer2DPm2PuhftYDDwiKp7DTp716N15sZxYnfP1rho5GDg31c2X9kQB",
  "key3": "4qyZddyfo1obUBjUcbzT28zTfqJFnWtLekrFnL4p41JWWdKAjA1Pvui4fZZcXPQVAgeyt4j78gmcAdLjC2eeJp3U",
  "key4": "3ggwf9pXeYKsysSKipcGR8hT2WEgsG3ayeQLQP87BdfscW7XYcychggb44Vk8Yty5sG1rCH4yJxVtdnrKyCoeJtW",
  "key5": "wwNsatDsywgzPdp1hAeevYHNvABMHrMgLSVcJ2S2bxrzQQE7HcPwpPmCKSkoNqJarM3af5y98CbsvUoTmgM1qQ9",
  "key6": "2VKcyNVRr5YtkcD57FURXgWAP6bTecbmTS7P6A7htW1tVpeGQu1iEi9s7pi3WqbAiMoQqKZLj5YPwKvcruH81SC3",
  "key7": "TKi24ZhnhvgmeeHZf9EXpaZvZKGNaCKt7tMNDwE9xRBG25HUVQZnWJ4yaa3zJgq7iCRSpnpWmbbpVad8ZN4nkmV",
  "key8": "3j48ZGpHNdnSXo3g8zdSTngfphyRZvzjdxjMZ3Ku4RzRWR9sR6PX5NbqD8EukmLUoxayZjBnAnQnjt89mWCpigbQ",
  "key9": "63WBkmUt9MnLeiNcN88YXnc6VUGaUBDD1GZ3ApcG1WTHkTTwLmqZvhwvY5BrxmqMGzBWPp98bf6pvwHRNSvunZmu",
  "key10": "4MG4J83W3paJZR3tHLaJgBVsxgFkuRpoSqtRsDR1q2yvTZVtsBF4fS2DAvBqMFurPfFXTTUyz2YFDL7wv61mji2N",
  "key11": "cTT82QsayDU2d3sethgySBMTeAQ85a1Pcxaznnv4pEjkQM6JxQosWPmUVcCvRZ3YjE5438CAZG1wfpDPHNi8XvG",
  "key12": "3Xt9Gqe9jpUPxM2VGj1HBPuHRpY8Ap6GD79gyfQhntLxp6v1fqvgYLCexvA9Z2p7qmVXVVpBojCfjJvB6BHQLeF2",
  "key13": "2wPguzLNUiU75nyU6sVceQFNm5W96hJLax8JVu59ayGgkujM43Du6ofqqeMQEVouvbVsTBB4kuQTvuaWUufmvnDm",
  "key14": "3SxPVAk3xYMzBKjrXwJnwzzLgfQbV84Mep5yUcrrx6sFtcmaqAf2g2thuCtZHAvsDpGoPi5YddXUyV4xgsbuuwVV",
  "key15": "2s8cLYTygNynRoRdqjDb5jHwUK7XtcCKuSEVY1g4mf4XWcoMPcoLBqxS4usJAE8gqXiGuAXn5ikJEQPq6mpgRtCn",
  "key16": "2MJhVpYXvwfj5FinLR8qKZP8VLcEoBE2iieWPGqaEFwxNNGjExRnmGgx8DqqqVowERYpC5zraHKaQfcYbsVdUszu",
  "key17": "DPGxkzk8oukRBj6RLyYCR1ZS8CsBGvMpNkfxTJc7tbRn1ok7j7gPnuGC9FZFBApsrXTFRAnv6EYwrRZpaCkPeru",
  "key18": "DaUUV58KKwWN2Njxr1kcbExquuURejajJNoxndKGYdqYNjSkcHcpnMxxGpFFf2JHEbv3w2Mp6y4Jt9RRX49uoAG",
  "key19": "3aH4Sr3Y8YT9EdzKUsJ3tp6TGjyvQPBngafTmFtZZBz51R5zxtgVszyJXoDGn4Hk7sHcurPQeuTvEc17zBh7Wy4x",
  "key20": "4f9AHNq6Xe3qPUgHjf1zDF654KQNWiijcSoddfnFWWUhEjaQ1Qz5354JhJgkgzN1zRBqbE9Be5iJnCjWSPoadAiY",
  "key21": "2vziX6ty4Y7TRFDbStQjCAUtmecg8XpE87SFoPJpfo9obSBAwaTnueeqjQmsWcYUhie4Sfs262MJ5JUJjRKUYxrQ",
  "key22": "3RYJbELuMUxdHYKnKwJPhFsXKPurxpExD1TntVvx4b6eE3p9kxtmERrCSZF8zaXwx7CNL221Jj7WVfKWxMFapHM4",
  "key23": "2hnBwk5CwzcD19EoBfbpx511fcmopJqg37iDU989VB8zGBczUJXPHBWPQd1KQofdmA8onkpRbg4JLrs7yje1LpP3",
  "key24": "5WKW97HaqJkp6xGn8baZKckNA86Ti7VwYiWuZ9thvBhBd1nsdRVCGrCaGKz5ZAcWHrsHhmxRaBQ63KdV9DbsyHUs",
  "key25": "5q1XWUMgXc9JT9NSLFxqQpEMEJHZmPre1pQTN21Kgkw3tmWWdS349brQC1ZEAqJ8z4pibVnqEum71wzv7XBrMgn4"
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
