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
    "4Hsq2aASu3ysaDD7Dfjt3imRRffmRVvEGb8Yro5ZJD53ri29BaQA8uZi9tnnukhBHuZuKGVj3Ujx3tNiKBK3BeNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q818XCyTkEMPYaWEoyHGFne9sqWDKu32n2GK6W7tg5GAjAPMBrR2ZLquPXhKKXaHufRtojepDN7vArMPjnZtBPS",
  "key1": "4KPZatzt8fYu1CmXkEBkC3jdUK25PfEKH5AQeccrkLwdNEurK5zVMNRh1sr39uUmRsmsCBnB8YavFLLnErGLiJps",
  "key2": "3cCov4KRDieq5LSTb2wFScYG86BtEFDJP3ezXnaZUWF7xEHbM9TZzN7fLKeWCYQmDcbsKCuj1d9NrsM2w9WkQotA",
  "key3": "w6Vv5qtJDSnzdfjuktGNLfR48APXfM2TEmea58EpG4EbvJCUwteL3H4rUb3nHTVATv1yZ8VLc1iWkcGFsbkZBW1",
  "key4": "4VrQTvQ3GptStBCbzdmkZhaygdKkbKbaRNJPdoWBC3keQ1TFcjQXVxkCLyEH7Y3iw8bWxMoy5ffwvZJB6M3dX5Vz",
  "key5": "4LxvPN8UuhpKZPVGn48jMXHDZ2kEL8ma5u7bQcjaBUMHaPvv9W94XWstn6tD7jZB2Y6dj3sNGdzXqZNZvm9mKMAe",
  "key6": "4CLhem8SNydjdW8dvD6y9b41wJHEZzF9Nn1uw9Db6CgdGWNt4GssATe1Dfo3fJRwAJCqr4PoeQNfovU432BSMTxf",
  "key7": "4zVPu1h4z7wFgjJvLfNQU97y8Hc5mvftMmHpyRVh85t2Qzouh5imfjgmW3TRJS4HqvguKyBJHZZZAag4wcJYL21y",
  "key8": "2vMSwgCGo6amyxqiwJGHPSHgq1kQmkeL4z3nb89Td1PyUPXXv9KfB1UB7wy26Uu9nrCtRUx9c4e6tKP7EhvrEV2A",
  "key9": "31bwGBFymm7B9c5Kwx9ThQxteER5ZjJMscTxbYSMGAagWGW1bHMYyuxNXggqsNEXKNbXKAh1afj1eFvTfkmeZrJk",
  "key10": "3YwPvDebYBBYheMB98WteRhjyETp3kn8FHCoL48YD1DBwBrXC34yn3k5JJMdG3eQ9mUjEiHjqXGN2TZw4cufuPfM",
  "key11": "2ankSZZh67FPWpqxED9XhqHE8PUiQ1DXCbGgSvpkP8TNiJ5ep1LqVqCYHE4GtWTLmwRr6DsdV16j72QCnMEYDPqx",
  "key12": "4XDomq9KLpXE9z3Av3ayTMVpxxUqDQUA9MUFDwfcAbFzaBLTmppQSDLrJUYU8fVwQoduKHVaYiUdYKUiiNfyE6sk",
  "key13": "261t2qdWXzfGxsGcTpw7WzM2ufq7XU3mNmYonRMtS485gdaB9mayib1B3YHfEQQRjrUUrr6VhtBxBVr7gjouM3oH",
  "key14": "4F4rma7Svcw4sxELtSWTyq89ofWfV6kbBhrUzNAKR5UsDzAKdno8F1cMThpa3hsDi1PACmJF8kSgAmhDsb2WZaXh",
  "key15": "5HN4PQ9HWGxkfoSpLromn6JsEsgu9feTiaHpZ74ZH7x4qZ1qFqXDBtkNEQTsYP5dNMJfoQ38fETwSmp5pcCqBaR",
  "key16": "4nj8b1NRMN1T3M7vuDqEFFV8T3uA4S5di8oTL2EkVcAbM6eu6SwY5wUjuqGaR2MGjhqQNXjGZNxMnjd3jRKd4xgr",
  "key17": "5CY9yW9MwbCN7rJGn9ZUvh1Jketw2PuFRKPuUeZmMQYAssVbGYBUA1NkjM4ZWK9jMmqypj4NHCJNbWaRr8NFVLs3",
  "key18": "2FAmtbe3Gfe9y3QDTe2S1LuJfKLR2tBXYVosXrSu4LM4XgtB6aUYeL6VKFkzxSYwr9Y12es5f3H2UjzswHCSeu4S",
  "key19": "2KnQuQo72RT59YYLn2JN64M2whtiVXVuvM3e5gbgxZ9TfXjP7C1JL1yujk8oFke8oKDoYMBbNjLVdvScsLKNft97",
  "key20": "3e42xQrsDDiTwEFxNDJzRbK9SCnShkCg2HdMoS623eqxcz2eQhMhbghWVwe1wedqfAVPatHbwp5usut6pnKD5SQv",
  "key21": "3t42AgfT2bTxbC5Ksoif21CH6NebqDPFy8T9yUa9YFxuEZonhKyv4iHB9jyqpDxh3t6ybb36Xw3WsWvDKYLXNvv1",
  "key22": "tvXY4AP7sAYLt8vj8AhfmYDZzGEsK9uESJZJmZKo82s9zJ72U5bPDyZMZPe8J82DjedvvLmpm6YP9apC77CcVrx",
  "key23": "LWB2eRetTzyidF3ToPbtrEw53Wm7Lz1aLNUhgidfxWzKocQFhTQU1JM1zfjEsZzgWMjDp1TEJBFQec2eMftHDtf",
  "key24": "3UjNDmyj5svN2ppkYqxLT64mJHEvsaSPLXxiDYrsu7PKWKN8qqU9ucwjE5nUqxPKhbtoBcL9UXaUK2ebbjgZpirk",
  "key25": "4DaZSxgwkx9WvHtAsWasHrTh2fk3PDGmJdsQwi77WT1FX5snX6noW8BdabMQcvonm4EEubazZsavG4DumN9t4jH2",
  "key26": "2QJeUczEeABj9UMxUkrDDREJyupq8SQdyZUHVbmXc599eUnchp46zXvpGDyXYU44zBUGJQfAR6pUgT1srFqxXgdt",
  "key27": "3NAJV2jmuGgp1YdypLHk1xxmCXZJ58CqaJbhqx8xxNcS9Ksy1aZnWgirtKoSqAsdzYR9bAhgA5phHURvMLDXqbmF",
  "key28": "4nh7MLimw9szjiTDNmB7Qikfibk7w4gs4XBeawQP7fdjf9s7K3LPpWtxr8SNe2x3tqLBuZo4BD8Ai1pdQHsJzo5L",
  "key29": "2ar6epwNTC2XpywhoLJ38bDn8KEbW3EG1dfF9Q3EtVeGCCSsangqbkH1gCu67p7AVYNg17avxwsKoWBb8L1hjK6d",
  "key30": "24j9uiFMQk9ZDDpgBw8abDkqQFZrJ42H1hQv7rhiHcCM4in3hVEzsdPnZatVV46EZU4RicspeUMPch8DmPGoU6vk",
  "key31": "2gj1Eb1ivrxhjfBssSDYG9bzJFiQmDqFiQieKkonQ7He7oYq682frLLkZt7BYyDFXrcXpfCVgCmfLP4SmGvd6oi2",
  "key32": "4tDfmP4W6RRw5Av53FzBLc4H9jinAt7ttfRrQ9k6j2nv9beZT3EU4aYjUjAMtjAhies88y1VoWyvkq76Nwc6yGdy",
  "key33": "2XDEU8TW2TiyQSXNz8AffjhfmBVvA2xvEJpmEow3k13XrciWNm1CMaLETeiKCi1kK2mArhvg9m2cZ5WbukmcrE8d",
  "key34": "2d9nixrujmjw6aE4K5rWmD5cEJrZvLqX6oc5QPaGK3ao7JdT9uXA8CZtHyKn2saJoCPBV6kdE3xEH5MX6DrV53xn",
  "key35": "435QF2vwPPC2hzC4vEdHhNQo7NmV3CUy2BHYMneGviuHa7MU4SP1Cyz4EZMeBqFfLncKTGbDz5nbLQZC858Yqja",
  "key36": "3bjspvatB1e9KB7igTmoswtSmnepsGEGCTT8WLhm1Nr2hB5tCZzkF8wK7DBEsjndrUuuY5LxpTLGgrTjoiPcrazs",
  "key37": "XiC7SFVyAoyHDzfa1nqkt9Kkqbc7hwCakn9rBqmQVuW1DgWG1AmWqw5appKcr2UdQweThD9HaNepUDkbBBwPjAo",
  "key38": "2DXgSSs4WTnE5Vto24LLcpdBNh3jftvrcRpoC5gy1J5NqtDP19CsLBikAKYaWpZHtc5Sp4ND4xwKGAMaqYTvoS7K",
  "key39": "2BDMw5PzzGy9v19f3T71y4F4UR4sAJdsGYsQDsQEecmxkjxo5rw6x3hrmx9UHf5PWvr48htQnXJg7Qdzc8ypZb7A",
  "key40": "2bZQNGPWo4wKTHeqv71JvXpaigvT1QLfjNNmzGLuf9gZjbUoDDNbLKqJcRbcw1BhBTxmHvfatAYcEunkbFvAchZ9",
  "key41": "LWzU7PCNrkpUn4zxRCjwMfssQ7rLMS5CsfsQfkrrqmoiUpjn3BM8hBoVmUACHdP8NDnV73vEYj8XqfrbwaRnajJ",
  "key42": "43QQ1S9m2u9Asw2dyY1pFKc61X2qzcpi79UR2qR67t8pDZaimB96ZBNx6KvrJwizbbHE5o6FHwVicwhQAD7NgK4D",
  "key43": "2ZpT6R6PaqGqSx4LnbFnwQ2rcLRiLgg92ug1GSRGqVygjWs7XwAhuuC8JnAWsuh5qxAdckqGsMqFJH2rfqTPhwGM"
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
