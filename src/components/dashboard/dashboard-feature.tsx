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
    "5MxBjGKoL7xQsfeLj7VjFyF39MNqm641LnMumxx18xyQUzaQY6CkDnPUZ8uJySnLDFHzpFXCCtLijn3cNbYar1Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hDWbmzBvFDuKrug4cD5eZw8oVDDeLBarstM1KkZC1Z1Krz4JSF4ejLW1GyVVaz36r5YS6GQ9A8GpeuuCTQt9Wk",
  "key1": "2WDfZBTRw4Kw7evZdhdSd5CnmNq4XwGMXzAu72hr273tasazpAjc6zwVATz4VWibm6p9tYZHSwW6ocXXRFcbhe6A",
  "key2": "4CTi1dAfFXe5xGVmW8xLXBeXpeBFQrYVBtCTN3mXYp3XaM35ZtRyGsawzsNkFibyktWeWTC5XxCfeGGW63geMvrD",
  "key3": "RE9EeG9v61w54XZAFNRoVzdPYuJnKUr4Q99KztRTmmKZBtbXUvXHTgTY5Nsdtbc1X8x3H1STNzurcBM25wUDyMi",
  "key4": "m2yatmdGD9eqcreag2gaaL7zeV7Lef1AtHPhSq7ybZrnn4MWvLuLif5UvKWkAj6gcpEER1FWjUos1tdXoMeyUVi",
  "key5": "aFN8Cb6LTSoakTx74KuhstH14nwHrRVaWNShNor1KWrQHUCVT2ZumQBUDYwu5q1eX5HyZK2dWiXKDDJpU3Yn6gh",
  "key6": "4oF1JraVpT7gkGCS6p7HcooYbW9oN6JyYy3SGw5moQQNzgGg8cwxcf9vzioL2kGdz6jjnW1AhU59Z93n1rpHZAv8",
  "key7": "5SuX2uHDEKLVaHrUaFRed6JpBKipHxerZbtZrCvPNJANB6F9mnToRmJps68fmLeZirGdQrr9QFWXTCcuBJ6HSZqX",
  "key8": "411T2CyDx3jgeSKoXh2iXEuzncszCfEgkZuxyAsZdLF1B1WuebscGxPXJaU8nXCQBoJ2qKFziWSZSk6kxJ3Nqhgj",
  "key9": "5TPiKegUpwg1heA6NfgTGew9VkBRG2znBY9HeKDy7vpBWF3ewgsYLgf7oyirjhm64kJcDXWhBsNGW9Cs2VCVV9oz",
  "key10": "3jJQ4ntaXhDx4kd2XzF9dNL2XwL8nNBdPoxa1YisQFVwsNfJoM2NkeT7KAdunhfuAs5984NA8JwGfFxeB1jfyFEL",
  "key11": "5Kmb9YYJ9oVqciTDY2BA2CDkgVrWLc9gUiFeoFL1noGuob5JYYzEj59m1TGgPYsiX8Bp9H22Mq2LNEVNzyc9bSSQ",
  "key12": "4HDzFxSuwKHpfiWqzUsj7HhZT5Ti2vrWfHDeP36rUGjXkkCntHp9evfbz7kSfNjotM1Dy9DeYJMhk2R6vBrUruXL",
  "key13": "3yKcxM4rj4ASB6KV2iiVLa2ATSNipBpfZA9DyR2fJiVBg2EP7pKNR2KwBQxsQqbgyjUH7aFLdM7yWLYZnfvaVELo",
  "key14": "4BxuVSozjghUaYDd5GboeXMAoWa7VM7LnczhW5AHeiPGZNS1kG3Yyio3rhTGephmKPPHBT5og7WcJZVAeeXGStBg",
  "key15": "4ifYPRv6gNqKthArmafJZwPhiMjop51PUp3BHuyC8wXZcLc6gYc5q5gaGcKWbT5opFRXBkZgi3sVifi1agbpBBwY",
  "key16": "4jRkf6r6Hxo2jZRnh9hJHfGD3gkmpnSPHVpsDvus1Ad5jCNmW7Bb1BtTusJS6oeZhFeLDbV8Ggw8uzNN9aaqiuBQ",
  "key17": "3Re3KWmVoh87JfSqR222ZjShxw6QDuhfMaMCAopw29D6zFnBLd71TNtRtTmoCwLUKhcU12tfxvAhQAELcTctFxwK",
  "key18": "4BKg5WsaYcgE5PbkXFGZGobUcRyMgNr8Jdmy98Cs5aSPkdGpZ1WarEygEw8suGXozNZA3t2UyBSowjMTcT9CGbh8",
  "key19": "2nJUv6HAJrEckbUvmwj9h3THt5fYvr9bemmzPFbPd6BzBHC2sr1GfV4iErd8rDhZp7KdCEYrKqzRWeo8kXBqNgCN",
  "key20": "3nLVwz3FukbhgpPjYzyj4v9B8QNEXXixEo5c788mT9BW2ziXP9rGr4kRBCVVax5Rsg3va9iYPGnLse9K2ZE9NV5G",
  "key21": "5zyi2Q14rHCjCdctzrTSYy8mUMnHvpr11pAjapD9Xtg4iHNawcvDiU9M2yHYfmMdzBDnvkKAs4BqLF87hYgpQ5Fi",
  "key22": "4ZGNUfEXcEeURJksYzwxVqaLz9QXgKry4Mg7mMrT1nPxfyGCFbUmXT4gBCWgk1k1Q2YJwNqHkFB2kFkKsMRoPFcL",
  "key23": "M5reZZNZNmcszcnuxvy7egsNKUD5N2D1jtEgJmGjXYPzC2bjs921unvxZ265EiAZVdyMJxKH47gk6WcbAtUJ9Gc",
  "key24": "57aRySecQ68S6iYwSYnp8tBFnL7rUax4n4E9vLNvuhd58316ZhUYvL8tQSN1fUMN85D4pk1hwYPmz951mz5Cms6A",
  "key25": "joZyFoQUp14s175AptHPJKqaLKkcm2XbiKkyTVgpxHw8eDXnqBbadTZeoJp4tU9Nh3jYMmHQQHkbXD4BMeiZ6qT",
  "key26": "3qfuaKvg16FC3DERRQbayFHGgrgC7V72NELEiwD9VX1R5syhcVRLotS1NkcV2y8xDkAzWQNxzhJTpxQ5xfiwNm4o",
  "key27": "Mz5FLe9qiLdXebKsDFzrR5dVzAQvbkrubxgq4MCipq8JEmTvLvboPMpoqqdXo7m1N4TssqmYJhkAx5bS5NDWxAJ",
  "key28": "4mUHG1ZmqXQgsoHMgqHBtZhwU4PYXUUPTK1x2Kf2YPJE2uraFcQ52pQtgfTMZ11yeML3nRe1kFBKKB2EJDN7ouF5",
  "key29": "2vivKDGQht6haXRbrcj265JTCmg3aJhbr8i7HhurJa2bu2LttNpFoKqxikNxaqHrCDXR8buFzbj5zYGxorDeFdDA",
  "key30": "zaWbT1XKypJLk9eFzh4LPJirsjEyeNV2L65EMMG3DBS6pGsQBawUuqcHdnqc2vx7LKEFsG3GPT2E7z7z814sk3m",
  "key31": "5S53chmwMQic4wp8wBYW6wd3saMtGmKKy63WJv8dNmp2QMhDPmUrUB5fSybqByP6jNGbMY29V4Wx8ujti57GATEM",
  "key32": "2YC7uUuh5fc81SyA6dxffhiChayvjgsAd6qMCFMLWuC623x9XmhEyYFZTPpUk38xS1mrYwAQvhQVYksByjsX427e",
  "key33": "3kgZBW6J91BMbzhTGQ7VkBeNc3paJA4w3w8qEUQAxatqjfmbRuQ3ZETcyWLvtwsUbGtGAdgyaz83bvH5FcTsNYD7",
  "key34": "5CU1GjKGC7Nqu1Qw3yoPD7Pf7xAdrMHcpebtdXUZjxq43Z5mAuL7ZFx1p5gabbH1unhPAzBumonkHG1pJQqTSsQa",
  "key35": "4PTdp2XyfoMAyKse6zTTM7PAriJrT5P17eJAPQ9dAfGYFaAXDYtFZgYUJ1y6XzS71pUbPjx3PbAXxM466VtZd54s",
  "key36": "2g2NVDeipKNtAYfV77szmWoVRZVf9PefpmpF7FyXqd6cerXvRTq4XN7veo2hDG9ozkUgSdWvkyo7TLD9aTUMsPur",
  "key37": "nxeiPhRogoLSfi6uQxDrNh9TtnESgY9rNtoJQV3xBPBtWRvGLMkAvofq6hbX9XU45v1Ew9vAmDJ8dzzCrkjCv9j",
  "key38": "3zctLRNYWsvzkYKXDF7aSdxn8orwaDRSbJEjkvXT2s973oSwWmAgq4nqtUx9uRDJPDG14A8gZ2yyHFs5rMjHKjkt",
  "key39": "ypnzqLvzmx9c53cbnz1zu8SVPELjn3afVVMzTeMGMHBuWLnbeZGqabg5nUrdvwKUfCCxftPRUuwDwn54NJpLTWt",
  "key40": "uzGKPEzg5aGY4JqNMtjDrEsMBAvy9G35qhc177QahxbPuQGXgdu9nRzCrbsetpqt3dAUWRdYR94phbi6reLcE7B",
  "key41": "2qV1KfCK5LfFyaXK4YXoE7YJwj5xeZtsG1ny6C7Vjc2w28MeKKZsc2eJiY6QzwoqEqA9JBPr9NfreRd9BDA548fz",
  "key42": "64Ky8S54rdBjaw1WUDrhu1yGYZeYSMLdkE1HiGMYfgum9vRsiweWbsCQpwFbcqz9ex9hi7CsRwPC9NWNgi2qoxg8",
  "key43": "carVLsgJSYs6LAKS1co3G1F8sJq9sziWDWL3YAyrA5weqy4kx65ijhX7amGHtVhC3DEjxKZg3yovu8njuo3htx1",
  "key44": "3Wpt5uW8Uub5RC1XePkTRyt6Ab5D4xmBAJypouFjb2CJuNR5U4J6yxqEDQpp3SwZXdBZmY5Lown1Xf2RZKAxNjf2",
  "key45": "5hBGwP4D6q4nsmpJ7oN9JynANLUxBiQmr6DTWMvzU6Vay5BWpVsZQyXu1Db76qc4WE1WQNp8h2rxHzbzieFNwEDv",
  "key46": "eyR3N3df8hPXiH7dyv7A5UFtigWUz1paEspkqDbtXfhzfPNoiEtgS6Npnmubjg2vR6MtHCNCYAs2yux3DKC2ztG",
  "key47": "2zmT4y17nAY218ghcZ9u4CDMWaLtNT2isZRikmWoyP8hNJMJ7RpV5pNVqmVU4Uq5qSSHoMLarYuq4BuinbnKf4e7",
  "key48": "5HMmQDosYmNtHsE8bPzNcyXdcFzvRhJn4s7dQu7wjnVLVqWW2wJUq2nBQRHqva28haZbuDWCFbcG1GmspWyszDmM",
  "key49": "2p4yhmq7RxcojM5kBGMmgorzp9JzHh5kBbpySJs4xaJx6xqDodjaDfybXB2cyPitPmG1gdHYiQGiP2APtCptad18"
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
