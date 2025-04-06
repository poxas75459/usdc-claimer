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
    "2KPvQSAfA7ybVJkoVxpcqz5sAxukFjWs3NvUd73tdrGejCFxz8heER56TXow5XgPm2uvDtgDkmzvUDj5RpPXebma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pdeD2J2keVMq1K1YbJqbViqbniXaCMhMSrhAoXXxDnx3CdzDm7b7SqBg9ss2BBHgbaHVq1C64FfrCvN6hgqUZCj",
  "key1": "4VeSeVbTyaR4HCJmJ1zfA48r6CZViTHCogvZbQmituoiWrGdQNJ4DDsAJgfdHKHWrWLVHf1idzdoTb7x5xFS7WyH",
  "key2": "ND4AqgYHzSyqkS2tzLXTJLMJgo1vJBvooZpWPacUNUrznEPJmRrLHpjqsjncCvBmgmdgV6qqdthVQ8hdRDReZQd",
  "key3": "29pSTZMhQtmxdXyecXJU6E9C72E44wvVkfJaCMjB2XrGwpgJM1xMw1sxLS1UVaLwzh2PwBCn6pF5XweSLmSi8jRT",
  "key4": "2bZnC5QUWemFJvQbYXAzhLUPvB2kRM7tENGGxVr27XEwCCDJ8nFUvNkTv76mRyqwzRKAgnj4UanGDsPyTBUTAB9p",
  "key5": "6Kq3CP68upyBURbmkEN5YoekxwSG9uxuS9xemgqwKceFvMiB84HceFRchQM1v3pkRDiaYFmYZjsak2FKLTRPTf4",
  "key6": "3RLyUE5VrHLk8cZijNB96iFjC76Ja7ZSJgHb7dcFduo1qR3JQyNbcyT1LHUzez91a1NpVn7YwVopp2uu6jn4sCmj",
  "key7": "5wrYjvL3WbqnJEv4R7bLTRUUeajGD1aGLnp8qjuQS9LBTubb2HQgynR9aP5KdQvcziGyc1h8dBzVyj69BQLioKF8",
  "key8": "2wLCRJjoJ1fUuin77NQvarz1QeTZyhfkjWtT5Xf6kMqnaFgad9SQdzN1zZDJst6pbxopC1L31szZx2FhfUj6JaZQ",
  "key9": "3WPVP2iH3D6hTGSY8RakbCKS85txVMGVDvYw39Fxv44dESLeQQfEiLatghTXRRHujKgcyAXYMuhVHrhM8ZzL1kdz",
  "key10": "52c3e6pxAmsRnRP1JPcgKsn24BGhrCu9HxGFtino6Vjo7M1nBrJtL8ZsCzoE7LFYRLuxCgDh9oUFgby89jxDaUGs",
  "key11": "2tRzGovX82EgMH1zfZXh9gqM5uDrbaQgzSfixADQDLk2pnPczhGiBeUt3Bcq6H3FFRScM8yJduL9Nuxkvhaq6yYW",
  "key12": "4kpmfWa6RiAXpqutpyf56R2e6gWwRwRXuLutRcWwem96oH1xG2wq7DbLN75ABBAB4JUXqTud9ekAm6tQTaguCo2o",
  "key13": "z6RVQTUdqZT6ULxCfiFoTcc5cHExgUUVitwJ9NJ2jpsYrQzNKo5jcAZkbf5UyHj55sDSeJsMoHfeLTabCtT1gWf",
  "key14": "5rShP9YdZgS7nbfiVXHHfURPx5T4V8vBLnyQ7U5KnMHPoB1Q8PnusAi3WjP54d8KSEqHAFchV6QkQQn3JCbrEySt",
  "key15": "5pyAAL49cqTmy21ERrhGSHUXSj9R7jFpHdmou7BgAt6VWtXiB3bNQXQpfHYzwj9moxW9hJC5FugV2RfQtvdptr2T",
  "key16": "5hSpTQm4qFZxCaVuxLdsJLsc1sqb2R1aFydVb6YsTranSicUoJEcfZoueaXguAvHrWTK5fxn4oJuMRyD3L7ECznb",
  "key17": "2fRvA2oSs9FGh6aPHn5vFnwqR12ai8ScyXhMbk4tPkTARA4tzY9ev5BSnviKxNLgiwWA9pSE4g2ZHu3AZqUzbaLo",
  "key18": "4vvr8iP3pm3ifMBgfWTykpjxvAS1ameuGnaDtxgKhTycWeBJrTfpqNUNf2v67qEyQfMH8smCHuTWV2xHAePqSXHx",
  "key19": "29op2nfMSKREgoz8162YzBt1vq3XYohL2QVVYoK7waSQYmXQa5dGp4LXjhyCxpzKUo91UJiJnfCDokkz8Lf9AemD",
  "key20": "4cmHVvJf5gM12QQTpx37RczsMasqTEixgUqEBSfrpiH5DZiVAd2gskEGJtuq1FWc7cPHZavNsthEEsWm8Mv6oUsM",
  "key21": "5Lpj7BKp8PaXh7Vt393bbReNfQPGt6Ub8RCGHmnqLp3sCiQoh922joKoWfZnu4RKrEpdK2oetUUh165ehF6MBAGg",
  "key22": "2XPY9XoKbZK6cQtxRmpXWtnJyR2QZko1VCRvnFzGJY7Jt8ATbUe2U1ja9bYD79A2SQ6co9jyfinvfonCYn3Fgy5V",
  "key23": "53CdL3siDApMiaCmRGiWvNckopgUiJNwedDfasU3ErtncsMkVBE6e8o5X2iaRMsiKn9xvftHevz78K8Ux6iQwwjn",
  "key24": "358Z7XLyJZRsn4HKTTuw2VuUt8MLQQaAHh4U45SRSzZ6Aw9H8d7mionxznZxvzzAMck8ofAyf5HpjLog7tdfCYcU",
  "key25": "Kk9xfSscoe2qWCfExNY9KAdA28izzWrLzHLG2izc6crc5Nvsda3qvMWSL9sCUQp3AyEUGKPwai2KUKS8eBsFhog",
  "key26": "3LRMuTwYDNa8SsnDwzhFncddHYrAAYv31aPbh4WMLAfBGtxDWgniXjhHP8D6c14fzpW7UWa4azyqZcRfP61yQCuC",
  "key27": "2neJsmVjYEHG9THynvAXFsy7py5Qn8CecxqHTyaBu4ojye8DijjzUGkEcQta77VrKNMxaafC6FnP3Nqigecqn3G",
  "key28": "2ND8FFTLNUXvZv7HMRcvDopCnB81YREsFvf4mNyTgVvtiXwRwBYALsF7FroRVRvBkm6VM5z9aKQ8Jqb9eV1pNj7f",
  "key29": "2Xzd1WFjPCNFLJ9K2MYcnZCGtkJJR5HLG8hn6x9eENPV4i48iAKVTaRDWgRShyxc3a2UyBqyVEBc9MXhQDoiCQqw",
  "key30": "5iCTmUYHBJJjVto9pTyjHMXNGNSfRKZbwyE9crPVaYYkGfXAUzY1j28a21wBSDKpACUggUELMMwN5atH3sWE8QmJ",
  "key31": "57TB6d7vHJfkpgHN8U1A7idV8VzmjymAqhwdRHjeFhHZXrWUpiyeUwj3a2aLFu2bxXwuRSiZuvxtDHPJHXKatzdX",
  "key32": "23mSuP9p9B6yfcQuUJ1xHTx4XCtHk5ANKkuoDZnM5S9iSjkXpssgXd1EiqLKvRpyZpaNJxGTnM7UB6ggHe3YkZdM",
  "key33": "399LKX1va2Q27nzU3wdDr3dPJXKsjnLjVNbCwvQN9rE82iV4uJ61GenTif4YDck16voYSJcWDGoM4RTFjX774o56",
  "key34": "bSyA1Kk3t2h5g46bw1yk26e21D9djjR1nTWP8WRA7xNmkvYSzE9WqdmVLvAE8DzvqRjAP9QD4UvTY812xbyYdQa",
  "key35": "2mxzVQKiwjRnUhXCCY8YjqiGQzri4zK8oVhC2CDcW55MDubEratk3ZfLZUCUbWfdQqmaYPaCyMWvsPHqVCgrH7NE",
  "key36": "KCnEnP8u8vGdksUU8tMjuYbinktFab4YJN811PF1vfC9rJGANo4ycuG7bicTRQFrNMWYf1CKqJS99Z8RBrDLTht",
  "key37": "2pGQ3m8CDwowmnBXyVmtRncBApVpYqrp8VFiLgcfjYuJpu4rpGqnjZtbisncZXBbG3catqVdj4rZzLQtcLLcyKas",
  "key38": "5bZtLJUX6PUbN2xkXHcHeHQf3TZMvyfwjK6h9Y7yvQhACDJ7PM6mYGV1N2awHAfnY8qrcEhRJ9EuzzaCkTWWVmDk",
  "key39": "53dTLA1AhSmakjG62m23MCifjJwq8LtyYevXibuwzJZn1h2PDdzcoZDFsn4Rtrb33CVSxE7m5J6Q7fEq9gi2A5dZ",
  "key40": "2VcfZJhzbx8xFnzPVw69xTDZjU45BbeX5U6rYLoJYRTVCeWwc4Gq2d4J1wjxwRyVFMAXsdaQWuUtMXS4JUhDa4VW",
  "key41": "P9EhdYqnrBfmvoUD7m3A65eDHz67D2MTWFoBxS5FhGeBDxzw7bxprvkgzDbHRsbidnJVxU1A7iLGkMFZgXd4wGB",
  "key42": "2zmirR7tfseQ8p56aXMFecQe8fHoqaAccC8FfPtcA5uxq5yyTo76Jit7D6NhdBYftiofv6QVEZjP18WB2fx6YzEC",
  "key43": "5tAcT72kfiaUV2JJBj67bR3Jx2rW4CzGsGtPULZj2KJHuGi2GuFBYAM6F2tNDR7AUiV1azPtVj7YeF9RCcStYgAG",
  "key44": "67qDj9JAbvECTsGRJvLV35r84isq2Y4rckHAxF2RFd3cKQPyeQFqrGuMom63aFyLcWe71C5CpePVYhaqggfdtbD3"
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
