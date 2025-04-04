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
    "4G2DfEgeKKYp8EyxHj14JCXo8iGgLjaSGueyiSompnCrMuwGy11bXXPsDqWvd55YFWxt4sdmY9rCHaFtfn5Me11n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QN6vKFdzL6EWGDBn4g7YwxTQVWRRyLiw3GpnJBzgaJ6uQ3n8aPhZ7jVEQi8BLHwXEYY4eiPFDwstkHmwhu3otJz",
  "key1": "8ZMzW7d7mLJmtK2CJYmUWKkyY2sjbLtmq3RTtK8SerY1MxH4yHeNm4WC9x3zsgUwuyJkuM1LfPYUGSxKKN7PXQX",
  "key2": "2ZxKBNZfTH45phiBak3ATVQmamrGKpaVDoaCCYv2PPeBjJJZJZqXzPmcn5FsvdHu9uBhcaqSFQpPswqtyZTcedJS",
  "key3": "4YLXou4dLAh2YVGm5efF5oWkuEYNccQyn45J9PFt3fBxWuGTQNPo5ewpYo4KJXid32nhVuqrhawpJ1EsN7nyvy49",
  "key4": "2kw7dJNsJvXWqNu6ibCuXfEGDbVc4F62aHxcabT18Mq6nfpomcyAqmgPENGB77NFJwRYZQF6gr2RU3dZWbYtMwmc",
  "key5": "2jBrKnuAm2866MxcKJi64rw1hkhBqyREVux3x2hmX9XDu1U2Xj3YWcDmCv623rmvoyZZnaAiggZC2jGLb1xnYXLb",
  "key6": "2ezw8Qjw3N75DpFnuocZZTF9X3ck9phqP3cNSnCyJcpMZKzzcasL74qxcptBXRUGDLfMHUUEYar7Kn1MuxeUteWm",
  "key7": "41FfJsfeWwrdqJfHVH9DB5tVC3cfrSRoiA7EHfsqcS9artoRfczW8moKNwcKi8jst5EeAbAT6ZJCP5zUwaZGhrf",
  "key8": "4MBi7NLYduS11ZgSYPH7rsZVQyYj3NdT3enH5K5etU1NBDrNjDLfoHXx4SErcxWE2fwVe557D6mm88JxdKyThDqP",
  "key9": "5agcck7HSMKQje1HZSnaG2z3yPbGCeGm5bMYouK6X7YLnRnewDgwubxANMhJaGHGaNQcB2nLerDri7tkNvBTk9zv",
  "key10": "2aqZPpTienRf4GmFLUwroypYbZHd7nDQnxYd1NFkjLe5BZ3crpdVN6dvMQApUcH1tZRaCJtMQzrc9Dg4N8NY5NnB",
  "key11": "264e4FeRmptaaZWFrDpLTLzhr2SMGF3VxGbmX6uK5HQVhHAd6GWCXtWBX1QJfrMRnQN3WP8FV6z8tKr1smeixbmo",
  "key12": "K4JnbNgksUR2sGfKTuHAzAQRbst8H2fsrivx5k4eUXwxHPoY8gJbryPL9QNq86LtU5sPzrjb1reyHAKnJCJwzQh",
  "key13": "4CpBULRfy6QP9ZKBhkV9fFCCpq2evArtX2VnAQfE4dVvyjbadN29fP6uWF6bbLFhqTyrHJCFotgZYxN2RMxHcqX6",
  "key14": "4XQHqir6ifB4AGbGbs6ghAFiCL4nGpCwi9yWtSGrK8HZFUW3Hcme2zYF2mEoFZaVrnj3ypCe7oHz9wVUdXNj891o",
  "key15": "4iWSgqERzW3TFaUAat7NfU2k8LsU9JfkvXouGoN1XgSGFNFDC6Kufbjthcu3g1pEsTcDdkVocyHxboZUs2a7Jwfp",
  "key16": "5mFKfVTNuWX39jCt3mnFp9Ps6oBGAVFStrMtf6Q44BfbqRuSqLaHTzEdyZW4KCMWfiMSuFS8PMS29adTEJdEqofC",
  "key17": "2zYa7zrXMNGMc8JrFmzYDQvWnAb5xBFTpzWZRGfmcboEigdjQtrn8husoAdbGNRn1hWvdw2UQug4LycTXJsfZ2Gc",
  "key18": "3ztLVaqA9ceHytZ7jDuC7m5tpVkpcDT37KZyMzkvV7BTVc2hXXhiwpdkJ8FfuyBsz2qTYa8KsFzhPK9FSCmxojgz",
  "key19": "3kNSm2E7BNbYP1B44USn8j6KqhduQthq22esU1C3eFXfpiWvtJxKoXweKEgjCGWqPsnJptk2hQ7EiAbQcCGHwCgg",
  "key20": "5D79AyDVJGMkpNTr4VGrfvZ6niCQKizPxHjuKipiqJwhV9feH1DswDENKQMbnDvr64fK71SndaBahFo4oFWjDZTZ",
  "key21": "hfKVoBxBQyRceE3K8B4EQ7azGA3G9qsLg5KaXS6vUWm81SsQyS2EdjFyXD5tGs6kG4BViMdwq3duVScxWqmtMZy",
  "key22": "4hAfde65pgrDWNrgFzVNACw8KPRV66X4hj57FR8xsnnspLn9EWX9BZ8c6xXPKQ6KfgfbHoiCFzXqzpyX3cWhhCrd",
  "key23": "52HsyK7Fe6F2gktUtMedyaKydjSDkLJvipdVvtuYLKeAgKuciGYj1iw6GPGh3xutcP9J1TAriForCFcVVzDK3z2L",
  "key24": "2Qg1jwZ1bm6wP1JK1u2G4JwdQQKrFuGts8H6yfrKfDuoz3iCyq5c3hZv4p9v44YymdjFcoHRZJynXx8Jew5Xb8HK",
  "key25": "3TbcJKQn8eXwCJVZxz8bCUrJw39poWuAmuJpt77pgb1eyzMZqhirkQr8Pm8ZLC7BuPE2gAt9u6V9MM9g8XBp61z1",
  "key26": "5dsU6RcAWvKtHM7dZh1TUPDrVWiGNfCYdH4v5LKuvbgxthgWkYAHe65bji1UX2bmzA2muyvLWjyWAJzWrVAU21GP",
  "key27": "4s2htD7ZBtymxJ2oHzUhke28Na3FfU7B6X7NWGPGkyJ96pZSr5nNzLCxvup3cPrLtodStQtYuTxc5v7K1p17znMc",
  "key28": "3BD1qBzPQP5Na4joJSvtog4jadUtGbJ9KoY2j5ggMsYyeD2KNC69BkemvGo7F3baRLxu3ZCQYe3Zfy3HuajQXDFF",
  "key29": "cAkePN7z9tGf6YzGosSR1qBvV9StQrFVEu572JyAK9y9ixttXzXGQWoNSUiKemnoPoKkFxKVQ3JUskkapZHJ8RK",
  "key30": "5utD6fYU4zUPoYDj8SPvofBgoE7NJoYpNqcXPJJ5ixkDGDGkyPqcnT22E7PaUNodkfpivFzeEfp5FuC8fGEizANB",
  "key31": "3yp9BiARHjQWwRhUnEdujV4WQ2KDg8iXqn4E5jKhhUCQ4JNqVZsZDj9TCW9G9YuHS7v36nAchqnYVZKxygmFtckA",
  "key32": "3CV2QHiNhpQppBykS53NUJZKmWM8kF1VEXQBzoZXp1LGZgdawwCNTnUXCm6aSNHLh2XtRExrhtLSA2s8pMGV8f1A",
  "key33": "2m5fk87K1znfhV6EoQmD8kbZGjQNFeT53rKcndhvrjUMUnA7rTVdnfKVGJTKQFXbz1rMXY7QQVvGMCyEqDbRee4d",
  "key34": "WaU4PikmhAmy7pzNjUTUUurLH3KjS6TqYPVkyEaP6W1Ex5LfPyMtFfaDyZyGAdt3RQVVd4KHQEB7mhYgHpyWMon",
  "key35": "pAkw4hYTzQDx4JvZpygE712xuJKYZE7XjxqcaaR7fttHonDyn2psJnREMratxAysgF6XvLNM6pAfVY175xCFyvg",
  "key36": "3Kdj76ZfAXNGoDr734bR6f7PX1qn7aSFb6F2Da8sx6X9V5UX6dDcv4HQYVLVgMqR3xpQw54F3qg2NtzNKN1LfHo9",
  "key37": "3WM6TEe9cuL4L4EYrMLeEPSLmQLTFejCZ3BJm3oxNkoz699qXUv5hJAVe7YyUDqY25QfZb3bXCtUdW49kTFmiKfU",
  "key38": "5d4oMm78Jb6Ecaq6DTZ5ZREtd4ZzXBtG452tHd1dLdBt9r1u1rHHYTakzamVWBAPYHgEcDtgF9pGauLCmPFVPA74",
  "key39": "3VUCMTyxmhdopr7St9CQmJrp42K1krkuBGwTnxqWBYPKJmU3rHP5RaV1LqptpodQaXZ45q4n7BzL7DQfKtJL6Cab",
  "key40": "Yvdsign3b1NyFEprpcrn9YYuLtxAmcCrktXEQcmzUrTfGQbCBqXmMt12EzmkMMqaMtsuDB8j9gcKKuBwq2q3zDj",
  "key41": "28n1x39y4a4bFj6JzqxNAKsZ612694cPNhYxDXhVhYNPvEsUefmPdV9VDTjETZ8cUE38ZP16qnsNAB887P4EtT85",
  "key42": "2ibvshT87kvNqhQP5oK24ajdmXYSwT1owQLBUSaFeXZjrZhWZm1ok3xerX7wea4CAEXfcK5WDHHVRtJZjCMLdtnG",
  "key43": "2euCDZyegf9sALgnh4cHBviwm1X92rvTsLifbaMHMK1weMfR1vB4CK9ZADPrqG1ft9UmvjQh6qZmy1xG1PgAyKyS",
  "key44": "2TvWWbcA7PgeRaF8LEasrJ1TsDZJjU8bmYYKtGaMcf853Ac2CXfVKwDV8yHDPyzdyyWBR83eoSCDG1e8p1xVbSAq",
  "key45": "fHYbUPKx23bPXhsTqn9P1ncBQTHAgceivAaenQm8ENdvWRJyfJc1iz9T5dE9BAP2uexPazAVjE2yu4KxQpQvcir",
  "key46": "3tjQL968LARpEb1otzgcNpmDMoxvvtU9haLCmqjxBCp6c6g6XhakJQsYjvBye8RkDWG6Me5nQcQyQXKd1HN6cqyz",
  "key47": "VejSLfMVnvJ81hjQqvit4PBUc7T8Wnkr27Y994CMweB2YHJH8HXWjY84hfds9nqSk8RgBxoNbwsYjLUESEneCCL",
  "key48": "3CXfvoNiZ8ieLmQTqjiaGTtyg7gYWhH92QgomJifxwMmL5cciHoVaB4LGxHrJP1EQJfZUN5A1bR6mvCPVUygZJfE",
  "key49": "ySFvLuuviWd6seg4ffKqNQJUJshokJv2fdjKzb7fXsNj8teLVsGCpNQo9jd3EEPCtptZ2MorfyFDGz1PF5wwbBL"
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
