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
    "3gxBNLUxUis9b3tJR74nuvQpfzyE9BerQwnijCGj9fjMQvZTFwfjnjNLWbXv9oAouhY9yZkr1fV44cSJXri34EM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53d5QxRN4rAEo2dzryULARA7w4EYJpdpSMxrTDvtJx5ttD7APoHmukDt1VDnE9fBcB8o8AT5G1KsfBHpoekYCFWY",
  "key1": "2S1m9q6PB2tNu9HkEmMgS5GSydCdZQx2fL6e3iRfsWqoUE5idD2u6QLsh6m3LK9GJd2gb6LeGmFdXRgeDLxKhCnj",
  "key2": "366uU5XjstADx77zjnXwE7RWJ8WRevv85YwQTMxvpBo5chEti1GJKfPXZoAiRsJVfMpLzaDNhhqc6FNXvTGVnoDV",
  "key3": "4gpevsF1faWfQ6YPDqTrbZE7SFWG9zACBHERTMBDgHPgVWo68kedGYgBvMoFuKqh6BrnVDMzEzvpv5HjEvjyYRpR",
  "key4": "4kpgakgncK1zbkGbj2ujHR1n7rx3TqSadEZZaarXUWu5CPaxqBL1D33dY4LSGJbgpy3Gmn9Fah7nT1gPxGeKmJjM",
  "key5": "2tLY1AoJ6yCdquyiQWEjh848mkTEw9JnULfVz237oBN6yCFi48NP8zCEeJqUbAK4evzeYF9HT5sJif9CBwDQy4ov",
  "key6": "yXSaE9MVBgHvksbTo4aube7uT7anpPStDy8NSPCQkHumcRqaHtksvpKjqSpyvmaTjsJZJiEiafLzPETSrQ3FtbZ",
  "key7": "61sKvfNxwuMK1beh9CikaeAoirJv4LcgydVCvWJoJCadKrCwjXdc3hJq58ctKRFVLt5QnqVdVKYAcfhrBQ2BWeaW",
  "key8": "2BPkrxA6y8BFaugCh5UBjv4UmXUjaygh6Sw36E64rdjUfxg1AN5Fy11ErHT5T17uZ6TJpEDTpsdCEFFccmYpqtXL",
  "key9": "3X3NDrBUNWFVfZut9cSqonodSvKWLRLMiZYesiYoVCndqdPiWtXvVTFsbvQtBK4Kzk8vHcJu2j24MGsHb9vm6e4p",
  "key10": "3qRkwaokxwNTfbWPXu4c1jxfySWZ2mA8TxXX2cn4t9gftGdgSQwi2YKQJcF5F1mpmc8R3qVTR5ghRwutG14edBFf",
  "key11": "5BVDuVfT3iEi5GUfJ6K9bQzY64LswxenYYjoCq9U8uLJQ7Q3jm59TicNdSZ7z8MqCrGwGJ8VaqykgHHsLfmEPnWh",
  "key12": "4YKzTmwZpQGSS8AuNhkWqt3JF8vG3kmgswkdgdRrwhu7J8bYcjQvcVzVZrHsraM4SQBWj3Q2BDhU9Mbqn7wHF9Ce",
  "key13": "2hKjyfmz2YKEqyoMRLoBYZn5BF8ocDvP3nxPQYsiReyXWb1jdj5kyPop4J7pQTM6MYouWGCcEqE6wHeg82FBgQQS",
  "key14": "4qDonJ24a8mGoUEYaNqh1DcKbTjbrC2FkpNu9XsFiuBaeAbEJVCq8pgr4y7zaw5sgXQKZZPWsiLaFsBkcfJotGRX",
  "key15": "25aZQmVjRAj5HaHYxp7EAyqk3AgMurMBcsazQKwUArLZwa8BYt55hN48teBJCSmxrfRTyd6nhngfq2GsyU67WAve",
  "key16": "5nmK7gtGHbAGaWgkmxczZTigr3uR53pcipSNrHuUnGwD4iCjZYJ6RQ4dXxLSzw85T97ZkZSnT9ChJnKMfYdwFtQB",
  "key17": "3TABu53n3vuT1iaD39KL2Sn4viJNBbBbdGuaLqYHfoXHP5ECYo7WmVhkybB6oS7rUGkzhyRvBxiQcZpBFybsV7ZQ",
  "key18": "5fvSYSfdUHRquXnsQY9AQmCmKW9ewRPJVhom7Xfv44gtJ1Bkhwni71dnrXdtE3AgCHduxALcVr5rNs8ibkMSLM2F",
  "key19": "1noJvuufCkeHLZ37S5Puji3UoSACA9hvBUaeDd8zFg7K5xQwgC9GqRPSTZYYLfQbY2fmkQMUnkamxauEXKVWsmL",
  "key20": "2XehUNLw2R57qA1boNH5Du3HMMAwUz2dKN4psfUT3zaUgvFP8Q3gLTuULEi3sj5A15ZrMx9gec8Qhy6fZDuH4eTN",
  "key21": "62MUniVJTzWTifvua5Kk3Mq3tDAJRHBp6BqkuVgPANTVPLp5G46aCy83QB6MsUDu1CEnPsS4SrR48LCrkAGUxYa5",
  "key22": "4imivwxsXxsxUqtphFnuLhEnMqeS4KgYWUA6SxaJfBth4Mx4wFwrTTRsnRxmXr32Lcq9VpDj84yuDmkWTCeUTXNJ",
  "key23": "5yQRmbpfNsQrZSEGPDLad74vwshws3VEG9Xb92iYwya2uVB6fjSJeufubbo8usVoYmZfD2RziBtMQq1kGKCNc24p",
  "key24": "VzmVumuPnpHDK1JVcKYVBTdnvHJHfTg84K49iWwdDRMoQSRv9UP7xWGarzJtHPsQ5eTEmLXF1Y1DGr2HToDxbWh",
  "key25": "2SyMZ4wokq5HfauFCRvD6RzPd5RzwpruHfJYMQaxNxU1VP2gMpg6s7kSfqks5ErHAAhfYEQq5E6Q324uBsu7HjyA",
  "key26": "5enSNVXfd36jBtK1RZzCibQBD7xGtMzt7qht3ayatJkdUV72ceCwwnnkP7Qk9w2Pnb34WCngWMaWLa3HJ6aKU1JE",
  "key27": "4Kdbp2TUhmt7Yi9K8PcfK9HjoFAnVKuGSEdzetUHiJXqrNPticAgWAKxVjbxxQHooz6ydoQoKCYkbF7sjyXXHLLT",
  "key28": "ZHAaBe3n5E12vdStBVN6qy8GgGgM1rjG15dTmHtAN2iEZb28EGLeJ39Ut3pPFhaghyF2cfg2sTFJJj3aCtFcMZW",
  "key29": "4BUq8UFutvoGWryjo6RiMq8sW4mnefWXdFfv5S4y7FMBesri8dZ8BViVNkYUKuHauMFtvWpJDoCmAXMjaWLPVxwY",
  "key30": "4Lqbzv7sYwRKAvKgTKxx9PeV3YvR6DxM2XvVYhFbqh6bLYBWZJ8Mg7ZmKQqj7DD8Eiy3dAKspLcmpXeQ8cXE6KXi",
  "key31": "yYAXqvQeAXe2XXPPVHyXm729wSjGe3Bk8aEfPdcJrCtNUKdg1wcX7PLmuj8PDY6vxbcK6AdyhSuSLEDyneZRGeC",
  "key32": "59zuAa8s6XgkoWeR6ELteKjCLHJUAvgsGe1nvFyWsA6imLLq7fyLBPryMyKqTGzHiKNoga66iAQh9hS4SKLhPpXp",
  "key33": "5dG9njj4WkGbtVLw3jXquxLJGX5tQXt8yFEBBpBDJ8pd2gBPZdagwsx54UQC9LdSA49yN9evbd5GKbk2ZFCzhACW",
  "key34": "3S4YKZQgkxg3joMPewE2T8ANKJ2UmbBfLXf4ZWgsFAwKeEjkRkovhHesA64xjHiJ2JCzC24N1mbqmCtCC5V6Nugj",
  "key35": "3AN8ezjYyB5WXA4bk7vhyLhjcr96ZWFVbjbaXxLMsuykZHUCJNqQH2hAiM9PFj3y7eY44DRFQSFL6CA6DwjNsQVh",
  "key36": "2Z67sN5YzG47dw3jp3zDYFpsqHycCPdUfVkTuXNd6A5qey3bPNf5zUpczL3YPw8XSEZmcwFC1syU4TrrPq7YsTyh",
  "key37": "2oj6GDTZvnDV8NAfVg4J4JL59caEqxET6Dv1Zv8BZzL5HE9NXRWDY9XiDzPJMK23M5Xw9RF4pU3DkUeoyYCKJGpS",
  "key38": "4NgNV6zCrB2UCh7JMoveLSYmr5QPgjzZzw25Be7u9kvBJLs5RjHHuwvRp8jUmPKvEbwQ7Bvqxx7qmMoTc6kTsB8N",
  "key39": "4DaWrboZ71sMH7r4bwNbJP8VVNNDkof7Df7y7TXpVQ341EywdvgvC7igC62vdcWWMx3sqcPnBVq8XJsWC7RuoZT3",
  "key40": "2MJtH4YLq6LZLMGtUfTdkSD6aTE2teRcoCyr5QAqxmZZhrUDvtg1ee2CjkY1UTaW4xpmxuxvkDDGuxGHisWZ4snG",
  "key41": "2bjCCLUdh7wfLRes9qdZymj93c9JhrhRhXCgLSUFsmybkSiFqSjSQoWYEqLtbjLRkPB3dsrzwueq1fPcRRBhbuGQ",
  "key42": "5Q7bPUSYgoBtAWUp3Xspr8uP4UwLveLyivnmg9jSznnpWKehB51mvKLESHsYKk3izWvMQiH6YPAA7jFw18VsxjYM",
  "key43": "dRieCS5knzdiHJHp3CrDDsiv7WDGyUmbQncWL8tA8MfcG6TrTRsVgATJ753ZdKskp85TXajZNZTJcW43YNNmCwv",
  "key44": "4Kf5JccekLMMSXzpi159UfGbMmMGiD5Y14K3UfmLWeJeJgra7ZryymLfhX2e3JgkQceAdcBP2JsqTnG3FKSFmwxD",
  "key45": "cVuDZqQ7LjqraH1nGSgmCyBDRnisDM9bLerArinBZPRCLUUCXWXQqvy2arLgAmpcZ8QnT12oWrYKwjeE9MudeUM",
  "key46": "2Ho4YzDjboFMu5LW6SZomVvKAAfx4wcvsLeRzGuJg9frzh35vDX5mbXVGALfiZk7wQ3GMUr77o7Zv2TYmHAhaL2K"
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
