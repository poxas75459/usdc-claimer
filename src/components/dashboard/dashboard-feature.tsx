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
    "5bwGuV1gPiY6bkcg7awQxk1VGspkyQFyXJxMhSBjVeEpVrxM2NL1m2XPQUu3BCP9RzLy4DyVhGzf7KdZbqCFCy4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPJoBrT8x62BqGxTwwqSvKbLuioK3JYqZriN89mPsw6qQ7Q9MM9LJXUxzmMkMXHf7mjTXA2WSFn4PwZxxDakFmw",
  "key1": "3sDRSvGnpngNXYgT4JRC9HBoQzeMmKjFxvQLicxsNA8GTnXD7i1c39TNDQWbw8tn9k4B7tUCEup8We2sgeWL15Q8",
  "key2": "3TwPoEr9JTTfpJ4rUSBXdznQiXbdmbmw2E1hTG17Rrvy2L21MrzBsDRvL6krbcdUAaREv41rehdjtEDmks1rPsrh",
  "key3": "4T5JqiZG6Rm2CznBZWJDriGJ1X2qJzByZqti2hSyoDcghscxxEjy8PoEnYaig8wLMroLrLwZbiUzW5RxCnjrPjEx",
  "key4": "4dF2cQtE8Gaug6qmBLuG7ou8D3HoQLRwf9Y4tL4YKeAdcHYP438R4e7pjJNkXyGfmGcejSa9eefaTSmWXLvoPX8u",
  "key5": "4iCkNdUhosBY6ZHxb9dM19ddVG5Z2ynmovPLhsEJdZQAmi8quoe8ynxyPRvX2eXx6ndq2fHoUxigYosyfCYP2mZE",
  "key6": "4BsNPKQUdRu8Gb2Qo9JYcDbgxU3qJGxPtTbovUMdCHoehbRLBXhD3nyrXeyXriYPAZRHTdWZ9EvDmsmhSjQHX1FY",
  "key7": "4yJ1bE9y9DN7aojykJ1ZNifKtQjfjCZaz2z4V5KpqveU5rud1bzMftm9EagqS8SC6fUFU5AF1Mj7eczTMZeeF1Ln",
  "key8": "62ybtD9RpefDJFBSC3dBoEWtnqRufavtwRZiuvbmdYLnw27UM9L24xjcMEmS68VJ2ToSkFPH1ZTi2UWKeRvsb5Ap",
  "key9": "5YE8qsxYjb5g4JWkKMzQxJEhJwEqAKDyNgypcUBU6Le3JekAVeuWud2PwDL93KmDby1B5Bpi5kis5mZEEJ7y5N8y",
  "key10": "2wc6E4aistEpUhDGrYCApsrwAzTrDpXRu2RqVZ9KwFGb3tPET6vDK3aJi7jhW4mwS9YiQPYZuj4bsvw18bzULGbQ",
  "key11": "3RsJR2yJbKV235HeZv53JGwVKSnWL1JP7hFqubL65urwm9hjW19dvKSJkBn76UYYXVCb8viNrgojovUFGZQZtED7",
  "key12": "55MBAQVUcX487ntUrr99T6u4RZ9oezcBrovEmbvjJvJktCgpAMqt5Rv7JvBzFzAYnKQyXynUr7SFksp2a79Mgi5d",
  "key13": "5n7y2jcm9DCJUBsigrEBfJd6MmEkVT1twXGskBcemjmp6ubPNsLDRT2z7pNtkACyvhzxoShKHwfvg3HvrpeYDy6m",
  "key14": "3QMGpaNHaoSvvejSvR7Wrqn6qtkEFBtA1vrzGLsXfMX2qZD4V1fARoWxTRvmCgqHs6RVbsUJqY2vRyc7mufKB6j2",
  "key15": "5qhUNh9mQARD8oZkP6MsPNAASSPPx7HpFiHHCBCPkueBAEsGqcUL1afGfzGjrL8bTGa8HBh8GTwYBv6BmKAbsvRS",
  "key16": "4BBfDuFLA57P7Ve8ivQ4B1v42j78kJEcfUKqooqSzJECjUf4yb75SSjXMmWFAopuJkJ4cdKXumqs8tEuTZciR4Z2",
  "key17": "2rj9LD4Ddeu4MF9LF874iwYowTEzPy6G7onpcAS64NJuY2ReVWv66H7pg8BtxK3bQriHhexnXbscdFQ3mMQ4vYD7",
  "key18": "3WiuaxMv6FqVbeKqkL3MHzamApqBgVjz5gPorPsQDg91xfriSL7GymJMPsRyE4oc1VNMSjDhuP8u7GpekQYTBHeN",
  "key19": "S5V9A6fDVtnqoqQDq8mxV11zR6PyjnF5ZhfqHXg3njFtxqGvKLWudKXPpUT1gVm9v6ADrJhD1KwSPBY6X9DkD6V",
  "key20": "4y1ZymxPdpNpXa9nbXJmrDY827x98tTKVjvdvndfbpnfYVBqc3Z4v5PzGnkPShS1D5sk4nvzE2mj6LA7KseGKAQx",
  "key21": "43tLmAd6YMNhRBiCVne8xaFZFpkeP68JnsrvqrysHE8VJzCTwxFkyRmNxDx2DnpK37b763ZF6kk9GowUe59KnfaJ",
  "key22": "sfJN37RdzzGE8ksShwYfCKM6WyYxrgqaLBfeFTuyzfLjJ3WKZMeTVsRLsf3mLc5f6NhYDd5nH9UKZhEp91yYEXB",
  "key23": "F9WxE47gvvviHXtzqhbd1RYuqRcdBPbBMrX9m8PGu5nqrp6dPpSskokw28fuXLog9T4AMpVzuk3XAqAf1YWu1uh",
  "key24": "2LVacZ68CaTMH84aQJTfqYTZmx4pT8FNSQspTj8UggunbrkhD6XGxEfZsM32ntjAwnHsrU3mAv2HkLJYB5MyhM7g",
  "key25": "2J4pcnZiCi9ccuBjnQRgxgRLau476kpoNp7qv6KeRS16TBjNFKZhjjPTUHKGnPD3Roc61UHXHJ8LPYoyi2ewdfY",
  "key26": "49u8W1HWTcjtQtp6RM7kPgqhVJBwReXhwJrXQbfkA52HZuSiALyFXS3i19CTdW388CU5TSmiJehKdsxDM3j64cz",
  "key27": "4PCrKuwPDjs4NA77STwJ49Akf6v4CS9CvbDjShb5g8mL9Nf7tnWuL9RJW7bYg8dYhkDiaVoyni2zKF2WFX8RBTB7",
  "key28": "3X9xTNCKYkXsGA91Za8DbxAxvtfUvvm6zsset85duN7XEdP17C2kFhpStoVNzZsU5X6S5gxHFGPnSFCTfZBvGEmc",
  "key29": "3BPsdw8GZ27UFVpeCrVwN7np1kmohwF49f1HymEZP38gr4ysbF1BrCVZxqED92tjNVcNCY45xkDsjMs3rnET7YoN",
  "key30": "4jJiH6CLm1gsncErfZ5AhBPZvUKDBuxbgrRFw1XUNRjmpJZUCWxhUcG7PP1VviLaMADJjQYvDnpQtasehFkv3Fx3",
  "key31": "Rc1qCHZrFC44XvSuDLTzbXifgBdUSaUBxkrg9eyMA9NxT1mqsaCMfryou9HDXiGa3cBcMrR5WgpN7riwCb8f5kN",
  "key32": "5JyCTKiMhGdAdu4pgqg3eXU6tA3vs1Xd48dJUUZh9oDEs9MFeaXuBrpBDJ1D6TqcLkGnrx6VrKwgZNZexioNed8D",
  "key33": "2iZ8GroCz2XpN3WECLGArTNGSgVWfE9f74aSYoSZaiQYutZw9aGjgA3SPPjKJxdmVm14nLWGDeuJfAyYLFkQEHLD",
  "key34": "4TRt3UCYzxMkrZ4umg3hfCquhsnrskyMWgLyLC7AFDBa6cpaf51DapMgMJjXqMZk4bDXhMKexvhuFKirDkqpax6H",
  "key35": "29HEnxaee8yYcRrpo6JjaVSomqCfDcrNFwWd6RKiNgLthFPGwtMH26y7wSvevArUVEemTdgDQUnCXJL6NK518hEV",
  "key36": "4enLPhwnMAmwySgxySTWjdAArLPw5KCa5zqQzCFHPjrPWnJPtSAQTZPWUKNXrjLmAPYiSqLVNPfkjLnBUzjMaEqH",
  "key37": "5GJQuAcK6x98mCeSFk3e9ei8KmwYeLeMcKeuXGtqzqi2pewAfU8hv4TgN5fUFKsgZg1S9kfX6LQxwK5neXQCz9yY",
  "key38": "2o2PCSe2Z49nnZZyoWEG5EWne3vaRTGGB7gRxHj8ZbVhBLEo2UVDBBMWZYjCJjRwkJb3vXMXgKMciKg5eL5vgfN4",
  "key39": "3HZDcQRayz1bDh1Z2kjLoyc1JmbiBTsugkENjfBVr2xZGPFtKBMpYQsuz3FirEbjd4HxhKcTXKzVBKptP3QuGetk",
  "key40": "3NH6rkG2jdv4hvao1t4ebcV9ep4aF7FnarHBq8FetUbEwTSNfFDkm4VL6j5Nz7LemiPiAd2bvcBLenMhrtCFJhyQ",
  "key41": "4rMEynHPew2Ac5MBh6hxtH2MvCDuTCpb3RK41LDpRjnJRJ71KXHXBoLSYbTANKKia4yyW8QgMoWjk3AXJQFz8rfP",
  "key42": "4GpYS9UByebE8hyRPo8fZqGMWK16SPy1f9P6PoVkm2gDAsMpaJx7aekXrSax9YoeTrKjzUiVMhQ24mTGMAw2jyUt",
  "key43": "3y7LuB4JidaFPr1KnQEgA2tXgp6KZD3uJnS14Kt8j9UpsGvSS8hm9mgcoFRUK8KgA6SbJAt7sgL7TT7cALLuv4Fr",
  "key44": "2N1LR4sidx2c6g4t1eq9PE6gt3oqE4Pyyq824eJmEDbMj18eceuYyf8i1PpXP3LdKtZbqqhZNamfXQf3Tpk97TN8",
  "key45": "32a6eWgQrCBTXD6otgCZ2ps7aq6TQ2qiWqqrR7oxQCJrnQnA58n4vWwfc4gyj4oQXWgJ4Acy4goExDuHoW2gouMj",
  "key46": "e5JCUo6C74rxUo9U6FeyDRQWGt6dGzyJqQko3wCBnA6vzDjsCBLfUY9Jvq2kFXxhkK7oADxPFcgQFW2EFXMRNH9"
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
