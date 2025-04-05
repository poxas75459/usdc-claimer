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
    "BZCSAkNFBjtug86jD9pSauPd7isfaaMQ4W2HDrEzok2FmupVyBUZHzJPydUqLPKmM7hVvjNtxzw3XRBG1haUZY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPvSq12wqiq2JewukeMvCtnMAJmzqtUcQUSPppvYDYY5xhhjbmQRi4sK3MJ9Vs4GfhopfV1zHFwpXo5vZoxECjY",
  "key1": "4mv4nV6DoNoJ1YRNQP36UHVwEUywnVeGH2q53CRmPk8GiqHJyk665VGZnir5os7SoLXBuvHZhnaPQKNz1wRXdbnF",
  "key2": "4RaPu53tjgNdifBPyoSi9iK5d6cCnrWKAfwfJun95aXHD2GF13GC5rEtfkTYuLo1vfbCwuUKaGyhvKV5s5Kb1ywS",
  "key3": "6WKchGjj9SEXH5MNnek6fgEWL2pWzZAiPmtTKCQR5A6Hg32y19s7JDaf74mdXzetXhiLcz9XNzuaUVgqtgCKVw9",
  "key4": "5sxq1pKuCJWjvRrzz5o9e71wJRi8iAy64mXWV3U3BU2jzPkhvdVW2HCVJBYEfKqEDRdkG2kwwfg8SxVEQi7irTc5",
  "key5": "4ufJy9XmrysbFEVcwJEDs3oyaxDqSSKA3G1MvQRysYHZxK7jezkMx9yPC8J7PHewdcWrNGz4dKLDu8piCV7sje7j",
  "key6": "4fGAvccore6LvrQiTGtTGcuociavMHBgeDP9cih5biEDVQYFgeWHzubngzK5cMANpk3iNW6rLQnyMZXVEaBHKrh1",
  "key7": "45fZNQ38bchSN18Di48kpp9Ja5pkaByaSt2cBFmady2avridrVg1v9GtNpcFPJt4NY2dok173ruVmnBN2RK1ePLi",
  "key8": "4rbFwPYFP3yC5gCeyW79gUFvWXouxLELoXeVeuuvW7C6xuLrbswkqYS6P2m8xCiftBiZFiD26k3yDhNVDpevSDPo",
  "key9": "52MqusWFamUw4wa9S1SMppf1UZFzbzmhLhMWj93to2B4BpAPV395LtQXYoRbm7mAovpYjtDtMAM3RvoFzvXMoAWh",
  "key10": "3xfmL5gX7nMFMQMuakwsggrUYmUpQgefYmudm95a5aUL1Ptoh1xyRgJABRP8PYu8sBqHG15hKRARL3PrzJzCHh5j",
  "key11": "4gKBDXhgcpY7t4RhgwfnR7ms6HJ1hZkReDXpPaZHqLvhtTFW8EzHYknkzGY1oACJp1MuEkLmv5TVTz23ArQkk9kU",
  "key12": "XzESUEBpXginaTtWE1Mz6EtX9WDBNwExhzhzzQtBFRt88nPrmFepqGDnYY3EmG49UL8g5EWQrntmTc3Vnv8cMZM",
  "key13": "2zZDTjd3Y1XzkfPm4KgwTEEtoYFK73ffY4DweyV8MsCR6i4WM4sHZRVYtvR3MbjXu8emuwQN8ptvi4wLBeqH7S5s",
  "key14": "3FhbYH7mwEhdrY8PjcSUcyYMYsR7A8jCCgbPyUCJQTf9bQiXoN8hDh8MraWFuG3x8XvAyhkMyHr4HzBtqENFfGoD",
  "key15": "bgwTZi2SzdNSFc1m7vidYvhwt4ww7KbY2M2FB2fa651JJ1BgHCRZXepM4h193hCygbGqkrQyAfNVQFZiqVMi2Hx",
  "key16": "AX1ptDNNNWwJrR1vNWy785VySdGSegWs9fAX6PPZ9RdmTKEBiNrvcZsgq8547Yp31C2m4K54kDCERWZWrJZYYBV",
  "key17": "z44UzPSXuBYuJpR1RnAVQhQCr3wV32md1dRzZWjaGpQQeRb6f1HQqyu5U16G5NxGvWqizrdGhi2oK4rHG9ZtJGz",
  "key18": "3pV4qzzrjoTErYbEPA2ZL6hM7BZbBDxjKthNMyB3YFNf4WyVGNo3t51jKXg5E7GzWwdYeaXYFWwDfwkkzKZky3uw",
  "key19": "5EXu8BNddbiPtSFsMiSi4j9a4z7PwreBGiq1WiuE2MBRCbHuXgCaXcAxgfsAhzr4yoJZRX42xw1Zbf11tFdE1agV",
  "key20": "4JZGy4QMFVq6kFw5UuSgPdLEENACm7nzZ1CwhCtgnuk42cjxAkmdedD5jJg9yMvryMmLaEtjG2NMoMBxhUNA4Uz2",
  "key21": "4xHoicaku1ekjJn45q4UKR1t6g2j41P5jdXzZSUgUMumNgKVvJRCRaUZnitq2yKzQVSgRnyf2nvhi2NKkNF5VbUN",
  "key22": "3H7JoXYqX1MzCKEXuCVfxTywZqncjeT4AMqCge9nTn6iMtYWm6cThtvTNYtmq2mRxzgoEWKEQWLrYyDBybZq7my6",
  "key23": "3NX6HV9Hkf8h1uQeAkXJ5NxzkfHW63Z4tjSsnizYFK3mRf66GHFeJtERyw4j7eUES7cb3qDqbifboWp5zrWKYUAq",
  "key24": "5GzCaMoGQy5XSmxwtbJJ4ZhcYNCCvEqNxWNdkzytjyyzn42C9TXePJXQ8ptokw9Xu7TQHby2dv9Z59sbV1TEzh2n",
  "key25": "3eQaL5V7ioquhgYCj1JLNimoZvMZdPWRZK4FPQT2hZqKZSqzpK2HkfjChWVUBF7zTtBmuYzyduF3sinSFLXeKZsy",
  "key26": "66kc2yzQs812qgBsj1RdyTmiv3F44MFjnZzSbrK298ygsfyjhFGrocDJauWhFv1GDcT1bWKhgDyFo2Pq7zYgA7ZD",
  "key27": "fDkjb2QdT48JUW9qLi7pHZnYgbDdG5mfqGtmAWgH5ayTzRhc3VrTgBQHAjkpCZLKG4SJgp9jhffiaGc3jCjSMDD",
  "key28": "B6425Wz4kFdPVG7b1shCBVgMAFNqm8Bik1bgv71gY1z5m73RZdapPR5Lj2M6wD5E2ZJDLtrap9GXa1JkudUzyf5",
  "key29": "3UxZCKzkc7pkcwcKLh5wBwPQLEoemtD5LQCshY6q9FWHJhvqi857ESPBVQj8CG39P8J62nHSKh4JDxQN4v1Jcfse",
  "key30": "2GHowakdywpR31pkczN1oxcmHwNYAxByp1LJKjy45DcTZCpjWgdBGhbREYPHv4X2gxWn3zKPu6Xu91hqJxWgfB8N",
  "key31": "29UkaEMGz7yzF3h7rBizP4rPUpRUvU6nYdrFivhbv36U9BNahUp7MdxuKjuyDKFcv81CXn2nhkPZ3XbBMDJxvN8x",
  "key32": "5vvEY6ZEQ8zd2jSpxfftRxFny2tixwyi4yUn7d7SDDv6CPaaXn2WgznLoDREQoKp55EzFCG84iHqTq4r2S8T1hLh",
  "key33": "2sBRsaciHdfruLtbyxkLk21hSYjksHpdyoYwuSB4pP3HaziaHQFkqpHEZt23Eh935AAN8SMyQ6etwa1S3dwYM9eX",
  "key34": "5oR2BYavckMJBFeg87mKQGtmjSFAqqXpNsSmoUaJVLHbGS1sz5WVhyhQfN4QEnTpcV7wHnsMaDwFMDRgsRR8mZQ5",
  "key35": "3zesNryYk6dWBEk2kcfhJbgKU5G3tRWQ1dxq3RgPshyoLdTZvYvw2xTQvSP14FAUHj73C85tPGtfDJjFjapaDGez",
  "key36": "2B8HEfBVpBYAsHCtUkYNATMeycMR6urDxozdvsdC3n4ixcykQt6uzghejFFtTriyHLQGEQrBtBiQE2GE3QtQNRGs",
  "key37": "FcrKppyG9KiTra5vhbB2TpggtZ88nSsMVUA578KJbqbhiC42veckxiHjPnNt4MkmLfXmoAiJ8LyRGJSL2XkdW5S",
  "key38": "5P4hzxtnZ4LocXHkfhbEkrGM6oVURQrgwzCPGg3owfuctUJTY8qopzn4GKPmvBuA8qt8jBcjBPsw8Au5aagW5rTp",
  "key39": "2q13bQfUNnCUbvZAp28je3agXm476hkmpa9o4Lwd3QcTHa52h5dnApAaAZJnGFhCgrqebap6VGjYHpz14xk7WWy",
  "key40": "xuZNQL7g1So3yAVL49V6U7RzJkUQHAeeFdpEXcQHZ7nFU4i4vV74joeCNqCe3yUtV7xJrWf9W3sQGbDUfCjTkoW",
  "key41": "2KCkLBZDVJVL9APqFPkUCmy6spUQcjFgnoZsAkj3wCRsYqkcf6MEoFchgdzJNb5z1xKxZbJbcLCABiDZ8HZkh8GW",
  "key42": "2UQPkjhCVi9VJ3REhBgYTT52doXR96Q4cyGi6weQsKuTdVjfwRCkBUdYuhayu6Ji7M6BS7pzg68kE5zBJQDCVj4C",
  "key43": "4PbR6cBKkP3snRZEtPxY6JCrU8bRyiuGjvppTH9UUgTxgoos3Q6K9ZPqdxCLK3jh9n7EoUZ5nWpojUzHweMsiLKd",
  "key44": "3WVxqm37QZxDt5tgabsnMRqGTUhPyMk5rG4DRb57kCCbc1FWNj92F5CUSwvqdXALaZY6E8CeiKboEY5KdnFFXqFu",
  "key45": "34Xtmtv7nkicRrfjr5vKqF5WrAwAHcKDHERufifUGpFNxMgi9P2HfYweUmkFPkDjgATEq3U8cm3f1rgUprRT3VwF",
  "key46": "3NTWKQA675bt3EogvhtQw2tP25YxQ4V7gGGrobgwcfRaQKoMDeoZmYuSFDm5ihu7PPL2u1N49eKJctXop7S2afD1",
  "key47": "3XTYWw1H6FSnr9rzJMG4gidJRPpiXRkXLWda82Y3bW4G3u9PXpHFLXN9S9Vrs79FAivKn5nsKuDnUQzahVmGFgg4",
  "key48": "5tJvXJLp1ZioBSnAboJW3SNcTBCVWhsh23P26cbwZbCdn2FFCBTPsUFLewrUTnhq9KzGDn4GXvNTEWtzFg1KkZSD"
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
