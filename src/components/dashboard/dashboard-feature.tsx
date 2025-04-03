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
    "4xw7ezb1LDo4h5CbMzDHD5aCfPyj1KPLzXvKCNWaY6vyLVJpv9pAkiVkGW8f6QJSJdoB4dH5w7MR2PcqMjSuLS3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRAXNhFdpJqeyyZnKe6w1CViHpuK6JRNXMxZadpvjvfwJSdftfi2QDn5TQUAS8pgcgXcN2zYVJZKchBmG4PESJr",
  "key1": "3uEsDGFnwq1VuY5CNv7CieNSCPv3My8hrhZMGQgFkWtt61TPuwomLHA9kWgBdnMAUXxduqtW8vi5yyjnPzUt3bdy",
  "key2": "3oX7tvyrrPFQ2gdy9FfKMMZXetobMGxepxNDUrtACUwqnuZNCXdw7Gbh7n66KHbCfGoTvU7aC3E2ZDuZy92kSGzr",
  "key3": "4SkwVVU6g3jYj4MYNaPyMNJ6GuwryUo99TwmokHj28cyxLJ41twtkmoFwQZLiBBtyeRW7LkQjAPG6pofMoDwqhKc",
  "key4": "Tcu5dQKwFQ7b6ahEod5woE97Emwz1qQ2CZ6q6rTWLqFcZtkgEuidbuozKvkiFWjvP9JRU89onxUuBPeeZ1zPPbm",
  "key5": "2dqguzToKRUz53u3dr6E9mT7sJXh6uS2QooEGzp29K1F6yCxUexdgBHzs81bnHwH3mGZp1MZ7tY5ietLqSUAoLB8",
  "key6": "3q5tgebiGKazqQcnKrhNtJUQpxveZemMecaKj3zwFA6sfXfKqX7EJjaaVRNo2EY1REzVqJ2tofg5f47ctM7DbDH2",
  "key7": "2rE1fYHVBjp5Euy8Wa762YRbFucjrhnNnZ72qZJzVFyqCJxqJktWgj4GD23ptBr6jzBDvmxeeYFVzY8Qxpwvspmz",
  "key8": "58GYi2CBycYDNboTCYUwyoL6TmtwoDRa3Gx1NsL9XokwTGBBHbE6tuj6dSF6fBVtnExMT7KNKqhLURB8WAZJymD4",
  "key9": "2iYRSterqZccoiYV2AXYQfc2qHvAdNoMnuUNMGshbxSSDwC6SVQ8fV78XhYQ27mr1QMSQubP49XcDoS7EcAVWZj4",
  "key10": "4BVeiMCzofyYRh5oNKeCywHZVUt49jEX71zFwGKrmJCaiZrazjXUSCbs6DduLfHDm9nauqkEhTreM1sim5j2C4wk",
  "key11": "8CPQoPsRfFJkKAQzEUPKAAXqk6qcccC2vb5QziEdgUDhAmL5VKBaA3FmseR5KSBrRboAQaC2kLvzubQRsiaXTvC",
  "key12": "3vEetwGVZLBDRQzAUpKKkZgPVLJ5f5mwKrLk7YnjiHe7Vok7xotUxudmtUJZyfyU1iEKXvKAN1mc7ZGmsVK5DMCi",
  "key13": "8CvG1JLLdJNCaxQff9QjLy69NMR1jyrrMaxKAfW4VEKcAZpLoGyTyWHZbfeT1FdpFMmVJxu4TEgwDxr1vZrH7Kg",
  "key14": "RT3nzMHQV9n33bGAVzY2HeeohoGv7WExDZcqLgLrqr9YJdtt3omQ1o6DuhEXFct3wYwVjA1JppcM1u1PF1eycmJ",
  "key15": "5Hhvnousd8XZJK7gxPYukQG1EUVRgsuXRpzTbuSBfHh5tNTASg6NVJFYbvgCvZAUckGXa5rtPs91EhCjbmsdoDBi",
  "key16": "5w7JLNDhq6i3mdof9cgtUKFTtqL8nffa27WdSW5pnKqovupqcHLuqtzmdx5aCfBCVDq9uppxh7S1svammT1G2TDg",
  "key17": "3fXJk1o55DcaYdRpboD8un4qhM1NjcnqKrf15hcA57VM7GzuJURtakuQQv8tY8JCvptcXMArb4aSU6pwgVYNL6AE",
  "key18": "4VD9MphambfVkMVyfxprtiDdKvfbrXFsVXJz3ggUVefXvviwR5hxJPniJX858icXhDdUqWGoA9hRE2AQwRw2EdWQ",
  "key19": "2cZH5MFupoW1vCCtXVYXxYhS7rKLEjGmDsWwTMuuBWXDZCTa316QEwRsxQJ2D7BY8axKY4DjVmZXyAMiRFfBMKzk",
  "key20": "5VruEbD8jorCzA544srznp1WPnSPD1FuGdySW34yTgqy2HwyJ7hibDqp5LwTXMacY36fVWEiJLCQ4MVbxxrZU8RY",
  "key21": "5R7TSuNCxMHSVHyQ3n4ZbLwPkz4xBeVKbjW3AJGEajJ5swWrtTGNHXn9Z7yJxuK9LmvGZQbJLWT5GNUnxbAcXVL8",
  "key22": "vUCdguaCUfuVjbhcspP5TzFwAoGcgyZ3pfxxZAVHE8wAmqqGiBxJhrKTHjZLVoYowKVQqEAaPvZHK4wd48i1Gjo",
  "key23": "3NvKUgagRvvrVwd6St7cjRgvVGytm4FwuUHU1njeke5fL3QRBAiuLyuTyCYsGz4GsgDdeEceXj8iRPu8ryra9BYb",
  "key24": "2m7ChnkUV7o7vLEAE4kx2HkPmBA3EdkHPkFmK55h3LHKhw3Xr6iG8HnoCy56p9MXKLrEVwTYUhGvBBoaoxd1soxt",
  "key25": "5xBzL3C4wkLwo9ev63n4rmBprwvtzGkHRcZsKwowkEoHMJUccJWLMrEBgDn3XvmQJuVbmEcMibcAxJrAfN5N7WiH",
  "key26": "61eKuXDghYYABYUsBfXtC4YYXxnKRpNyAv8H4gojzqAHdPoJgBKMmn5BAvzvbpi41v6WppMi2tvhzKkZo6SCwQhx",
  "key27": "uEU6A4FtmAaVrPEGGWEwkJRoRB1gL9wH1MZZFfjtzMJG5rtmXNWhgViKewno5HE4Fa7FComuSvkefijDqRtixTo",
  "key28": "2PUNk1Zy1Jug2VtXdEPjY3kHNRAyj2ZNf1VbVspa9FRd1WW39nCKJGzDV1svpuUzcG8iYL6NwiJaZ4e1texae5N",
  "key29": "2Ek5iLP11uf1EJKWfWGHti98VMr3ojMQbcsHewPaQ9QYkfcegfXMh9wHmuADXisd8C452FHFQx5HVQBgmLzw83hb",
  "key30": "3aVFAiNMiBjWV59bVJ8r1Mv8QSKti1gjUjwb6dfqRVW4cKKyVmCTNvk1WyEQV1UFGVmF3EgHH1h6DvY3yKfhg59a",
  "key31": "4vBx9nhqf3nWTrz6G1wiJcSexqZ48gwmwVH4X99GMASo2636QMuZj1WnQimFzUuBJ8JP8fzhAaTrcVkZo3offWWj",
  "key32": "3Uf5vSdJaatqQjgpcHbSvkgUXpEWC2nVGpcALYqRM3vRLME4Xg8kBRaGrtCKEreQnF94VqUH3rLpEodUfZaRa4N",
  "key33": "59XY58rE3KNhdQT1yLkmw5oGbUoPZEWNUQXCa32xsCoUy4rTakDasqUZEWwo7LpffL2WNJWA8qrGY53mTviqneP1",
  "key34": "3KgU9gmC3sXHBUQDCrzKyE7AoVF2gjvwS2fktkM2jqHTReXoGSz7yeitVKe5pNy5H5DoGTWmDNYYMuLVhjvFbYxH",
  "key35": "3RyzA5v2ckkg7yyVS8Pc2GwoHCKZN6HCGMVvFZxwFidMcYrCe24AXUuUEPEb9usDRBWybf3V5JUwgfAvvSCw7dva",
  "key36": "64hHB9vUnNvDHZxQjD8TWD22mYrYcrfAhYiAiuKnJbqfXZ98z1mqJpewKG8rgXawKqwpnXSAKoMyqQJpRwV9cBTQ",
  "key37": "45Kwm46s6z9FWStdHhj5WTBvmv8QT9uy8rTiKc91me9Rhwg7WwusXWCRwUj6K1YqH5Sg56FfKofPjY2WJy9AaiJR",
  "key38": "5R8Hqc27pu9dfWfn75AM8kAhnVoEHyzS5SkMjRGAP5bSoJoCEw1gXsxAPEi2g1dkNPHm2PYc8xjWzvANkuE4KRxL",
  "key39": "2ZGEtyDqRGGFTk8s6Je7qnMTQcE2QRQvaC3AMYkrYabov1LB9uwDbxGNAS56eKrTArE8TWaCH16h4rmChgQVckNM",
  "key40": "2PaAu2eGvBgqDJMy8LFiTv4CZBCR3f83i5yjCHAjKy6rB5f5fKWpSCKE7Tsw361fyhpKAYUdU6ELSSmTbJvp7Ut5",
  "key41": "4c5kvdiG8BQCoyhSMDYbAFg6Co1fBCubFmUu5zpo4MjYcN3oheFeEK1hBXkPKLjR8D43KNNww6aiZf2gcmBNBD8f",
  "key42": "w4nk3zhn922pgx9MhWFjxyRJu95oJCzXiRrXrtUm6APJx1JWW8fwtLPGhPVQ1F84C2FJp45XjdGHGVBUKLeusxX",
  "key43": "3fyx2kL4FPY2L3rQpDDm4uNZCzbchZFWAMmewwfwDMZpZBzusNsadLwm8cTHJjVAcx4HmJMz4PvDZhSq8nGWkBsZ",
  "key44": "5mctq7bxYkjgYbgrr2SvHAMYxwVg3J9WCPHSqNDcCbjF7NqTirCi3xyaGyZA89Z5QCZtmW4rkN32Sq7g7bkjM9Gn",
  "key45": "3vbuoyVR1Fn7mGVdcNyaSDVNkJgyTSU3D3nWqfciouDFyxhmKKFmV5fNd5icmtwbYNf45LdYkBgd5CzrdBSKJpmo",
  "key46": "2KatfvqQMFJ7eXHUpj2UJk2mUESBUWmBkdJ1BzX4UCgCk6broqzPipEnLuvdKj5ZANJ85dbyHvzbNnUiyktzAoyD",
  "key47": "26pdLx6K6q2Co5zRC7S1KvBrzBZ7zbAfudzYZwVcjgLFmxJ3XdZpF1g2FwYDM2ug1KhH9E22DDNdyVpG9JWc2U5L",
  "key48": "2oJNVSLyvzsGFA9goGAnGvsuWePpnBFNKWaDoBAbzKD9zNayDQyN35HsPzUqi8jg2es4cp9PuPvALvGBLmhxdELT"
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
