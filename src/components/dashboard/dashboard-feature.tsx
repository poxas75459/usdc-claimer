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
    "47C5ig5awT9b8LjKioCndfghKz1bSZtUbrUaTmKTYwQT3EWXQa8keaxHnsuXmcYHHp3Ad5CYJ33N7YiHYPNsESUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNtjsCkSsH13wwHFtWVJgnzvMjnzJN2tSGr367HwoERKCrxeqPRGwzwT1FBGWN57Sf9v2aRtBCgE5DZF2vhdC8u",
  "key1": "56Mtvw9r1MgeuhgapL3WhDfD2YnyMAiyuiCkp39VzvaRgomRWf5sSSdh9KgA3NWP93igvrC6knEYDbWQW41VroFb",
  "key2": "8smBjYxHdZeAkDDQQdnUaU6wrDxV8o2D7eZJVLupk6G1XQ4EEyB1xAMvPXAAwiYpSmjgTuWsCCn1Dv9SLdv5Zkr",
  "key3": "5dhTuj4zpQxixvfConxwmsRSykLPvmEaFZJbckJszQ7BTE5jQVaJYd5sfe9QrP5iSYD7xAnidztNqiBwaiGrHQ5U",
  "key4": "2ZMMHBg8B5NN74UK6Y5Dvog3qSKFBcR5BEprpfAcgS31Xy3XiJkoLyEJPzggvPTCS5LS2bwFcX4jfHr7A7k8ZZMn",
  "key5": "5VFyDGW5Hiiaonv9zYqSYbfjYghmqr8XgTu9QSoPdfjQV9V4uUriTGViZA5HmsmY3K98EoDMAUWFVpty7Xf4xtZZ",
  "key6": "4biHWsiBkEH5WPoorCab5w3vZZc3WF4x2XDL1AcSU3DTxrU5AtoZdQXXNbRY67GxkEgKefKq4A9Hze6LEsy7VSe2",
  "key7": "2nBeEFTVGR9BeY1mGNuQZN5W7GoTcBMp3jyp9EwB1NWMrcE6PYv5VR8qysYiQJuZAevAiYME27C6iD8pwzJJMgMS",
  "key8": "3joypmWfrv1fcVk648VK1GhzBxovzt8rYa8URmJ2vaQk3tH3odP2rcVdVnLwuhDMMrsiwCVzXMd417UMf4jeGMe3",
  "key9": "pxT7FcNknm7Ub7GxaUkbeSNSLXrxqeobCaA95Js6kKygaH5zkUfg6YjRHuSr29hzW7estm6wJAG8zCwR1FLMv3A",
  "key10": "4Pdnji5Zx8KhWojq3rYFXkkfesZv4cupe5NuVv1TxNfxdfXuCBjp6GYxB9xvRM2Jaa7AjRJt4EcsnWueLxrj5huF",
  "key11": "QjzBG6yp6PsysjwxL8V8Eytm5bXnHsZnqwMhV898NaBZ3U5JpPhkrjuivwruVmoc161uvCtpDGusBfvd8aVE3s2",
  "key12": "64wC1cPeSgvco2WhJwq9uDLJMKM9FRHiWiJ9mxygUKN9aBJhMwT4hmyggzdcBCC7N6bE1CYkiYAfqPPrJTPMruyE",
  "key13": "3A4u4DQ8FHadYipGroqAMMK6nJgczWTJLCJCHqx8PUY2Up7ACr6wD7quDxZgtxQBcvfrZtpbyWWJaSQZXpSiaCQ2",
  "key14": "4qHaR156aydbEinfSbpV3UJarXf9TnsecpD4b5hfRTWFctK4iJRiCVxkzHKKjjkAmDz2qHHFs7w6rmkrgy4UHLAf",
  "key15": "5tu723ztUCHaLfzzc7MVTmkScCKvcMJXqTjqVvSHzm2WtvdMsKnhEWx2mKDkAS2wpLQuwjwcydq1i24a3cCiTEaY",
  "key16": "643NAJK7E6r1UP6FZxKhicyTEYYX6Menfz7KP96PcN7gCvwyrrpSPD1SnmkCrZHbxq1RfjkTsWqxpbjuePn8wtsA",
  "key17": "7XBq4PocJQvrBvY51QRCc5JQaadaqgLEupbBrCU3iwzvmqf5zzDnss3oT34UVCmxWyzPGnT85NBPNZy1MJYR86a",
  "key18": "juAPR3YCyixmDQbQtsjgBDXQM3zY9PhSk8YmpqcakzUA47CEy15KCyBstV7Ah52XB8Emqf3F1J8eFd2dvnM1KP8",
  "key19": "5kAnw1kyZ9pKYsRjo4BDXZyYk4cw41DZWTGvtMbUDAmq68RKYKmKgaBtVNLR7qxZBei5NqzQgnCGEcY5Mt9AQY6c",
  "key20": "82KhA4BLkN7NSeZJM3gjHBhNXu13J9mN9BUmVn7PaQUveyjffijZ8WkvWDVtTGAsb1FmC4km214URHWipVNmrQN",
  "key21": "2HJLrpq4nBqBosL2cLJVwgxVFbEtc55pxrpT9cTgvCau6RuhHgTwaxQUkbCyLWq24Q2h3WpWH5JGP1gkDZg6Fr9o",
  "key22": "66Nforhox9PDcZkC3XtGWhJvcsV1Lvq4Rv9BcTZBo4hafH2KPpB2genbPqyRbSXHqTvaTSyGqEe3sxj2PEDhhPBG",
  "key23": "4zNWQKMwNqRtn1N6ShgFVcqfc7o2WC4ys3unSmhEH5tgA4uFXLNNXYVP5m5ELE9RbrTjAG93VWhPy1UUycQArBjr",
  "key24": "KE6jRncsp953GhzNYyXMcw8KC4LLj3dvYmwi7FzxnkZQbfgJUSvUvZxwm53LMv9kCSh7GQhgLjBmPwvSXogFPQP",
  "key25": "3ZTVjar9G6kd2R9WjtNNASTd1HFSNzk1vj7Cn1P9p329agRUBW3EhEPQZvSsbCBJhjafkKsefr9Xc63Eeykzjzk5",
  "key26": "2viHX2f4URZVCUgQ1648WeSCWtG4PCF7B5BK4cAcxcwNWx672s2HLnA1JVEgo2gBzRVJHnFFTF5LoDGiVE8p4ZCd",
  "key27": "2KpaNo76Te5hQiD3oyCwaVtmqBDXT4B5q226BDXUmqd5esUNBUaWFMqaWBp1sUwcT5tBXBeFSatxpSA1Z3GuCuE6",
  "key28": "peZQaZnAbEzHNFEkENkpM6xBWca387XghuQZ74VEhAfkQk8HuazeCtUGNWFLkKMfVyd9XRboPZ4rbKm6fUrv9Fi",
  "key29": "3srFD1k63FfWRBjBCFidZVT3bJaxzSmZmS4nM2jQctayqjuPdY2ZmZfA5CgAA8ithchbb8t1dkoHeAufsUCM75no",
  "key30": "4EjNrfxFRTNrLwB3a4zq6A71HsDHHzsgQ8k8o8xUHEhXUJ22ngZzwk5PvD8KPpkHpDG6EXaTUkKoKDBi2ziaG1dA",
  "key31": "3QLcmybSuBtWfc6ht3FSg9rgwaTy44FQDZrR5Ho229VFf6EkdS7FjDy52UXok1JK2Qq59eKneh8USWETb6kZWGyZ"
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
