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
    "5h5V5BX7SVQomMaVZB6o9DAwaggU7C7YnJ77XfdyR8oVycEd1Ui3Er1RnyCSBRrAn1PxVLnGFSVGp3WhcnkAdqys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gASrVGnjw9vXpwaoh17Jj3n6rstSWa47yZ5YU6SiMNuVzGs7atnB8azJ4kq8Lp9qteZBkvhn1Y6DymxdRwxCGqu",
  "key1": "2XvX63BSkGvE4kwWSb35gPtqH4AtCgFGhsyV8sBviV83Xfq6DvUnd8FE5pfJs7ysFieYHxXQsTwZizbBuc4raZVs",
  "key2": "zoymQkL7pJ7fN9WBVmyPP5WoxT7HkBmNnoBYcD4Vy3RoMC68kmaQdwF6UQ25YvMX6RUj8sjWvQZhftPUZxUGmQM",
  "key3": "38MMiARa4HStqEdE3ftsjk9iJ9d2wKrvMCesNizCY8WUTrPzfsxitTVZ5kaYhH9aogabph5nciJzykN25TsGCsA2",
  "key4": "3ApGmyVKYMGiLHLEwjtBkhJBR5aJozLXjVGN1ZjP3bEk4FrAa9dyjPoC1oBpZ95WHEWRW3t7YYYDTCxpZRxXUCpG",
  "key5": "7TKcaCGdSVfURgcCZvvzZ9A9o5anmYfKUMkYiMQJ7mSP7xrGMyzdH5mrxU3aa7XNFXi7zdu743aF9dgaJJdWg6N",
  "key6": "2ZmLDTsZa2d5WopfAqkc9chRVHsZmXApMH6PHXiaAv3AZoFhkKwRre89MvBuuMLwvqE6ucWnxsKmcxBaLWoZeKjF",
  "key7": "45hzgEe6kSnkeMVq2ssEvZ1gfrGQ3ZtrkPxgHRmX8Jmuf6hwX2QzF9tLbxUqLKerB9rvGdpwPR2jK3zhGGj64URR",
  "key8": "5x2oWvud8UCijxadstr25NRs6Vo6wQNSwWUijFZ7jt6EtxnyEQUHNNReAHYepgP2xtYEyYBRbsZ43AmLqRjNrZFb",
  "key9": "26bT4AmTqJuHpDZxR1kbZmZFUphn4aguApJT21Zo6KGNW8ifNNFW74de4tEPpc2oN2X9FdT1H9QMat4SLHhtQJVn",
  "key10": "56qYbFdG7jeBqs4t2UUMUu61HHVPuaxgkfudvpDQWcX9Bg8eCVGMNyYhkjPpi84hgtWvS8aBRzZa7mFbH6DM6khq",
  "key11": "3UAjh19PnLvEFbvmGtmk3kstB95MK6AtUTLJwLqifDTWHs3ZfY5nYDFr1UWgbLLDS9FZ9X29AMQu5bWCjCA9ofqa",
  "key12": "5TJQ6pxVFhcWm2iJGvhCy9CuCDTGmVw35HQprTv1nAVp9fCeWobtBnaJnRk8XuXxa1nHmnHHRMmgo6WvwmTDzDEF",
  "key13": "5DoUXMQRf6QgTB6CN82tiDnFdLcL5QeWVn3atZqmDv5xfjzyEzx1cae83CGKEhJowKG59URam4ra9knsXGBXGyR8",
  "key14": "4wyUT9M1Ar13HytqiY8C9b1gxsAEwsdsYuFaPcQovkkfXR6jAn7NHBo24Z9hsvj7oziNdcAiGU4c2jYZfkUehNt6",
  "key15": "2bZHdQLcx9VELRekXLUbf3Map4bPQDdpZ1Tx3q1siLc8gqTvQ2bqpY4mLV9pfXxxLv3xyDqRVaFvUjAp2fd1eEAm",
  "key16": "4xYCWhbXxhDgbMswSPokgdMjMjmPjYrirLUR8CzgNS4Zp9q6U1RB5CeVAzHm3wo4NiCm4cLDLzksEwkCWUqFGszP",
  "key17": "Dr5Su2BGw5ChpSb9tyPRW24UBJynkVx6y2Qw71Xs4j6XJp3cu5CQeY15vFk893Fo39bbui9oxGyEmXEeahfcbGs",
  "key18": "3yaDN6XZ1Vz1PxguRjM6LqwgAkYG4Jv54WYvVye4izAmCATwZdsTGbziZJ7McKv6s43C8fqdHvCPyAqk1VYNcCpY",
  "key19": "41jd7oCNYQVgwiHWZpAUjDY8S6FqGuxAWHCLf6f5RavAKGbwW8cbv8haHGf4jGtEtwa9sviP8HTNvBCAUx58raav",
  "key20": "33NCDetGGCtjsuJzq1SSMV8noZao9ZJ8xnGpGVartSUv6wKFrw2cbCzh4f7r6CgMYUYAz8jmWSHjnazZ7XmNxMUc",
  "key21": "5tQgKrkGMeinGR6TPvLhotSgk4DmGN1RxiyPyJZTLzZBp413pqywaePfWbVhFvorNGttArewCKAztse6xusdvf9g",
  "key22": "2vt9TreNUbipgw7ttL7hETVKgJseKYvwRJTQ24kp6ooJG6RuBv5bLm929t1QaLMoyfN9ch85covZnSpX2noLi4no",
  "key23": "4m6tzTYJmM3c7wpe4sPYZAjsNZ2DGbx2TPDAFJwfhTB9Gt6MXahVzKwaZZz5VwBQfkBgavYbE2sW7cK1kMHdNowx",
  "key24": "49ma3ZW6J5D3vmFKYj9oiT1qMrQ9qyoFv2CyScX135UxTw6HvyZjBT76wE1VD1rZ56Xjo2ucDdDWGfWsP1n2T49s",
  "key25": "2yeuPA7REEw9GUEUuXw63LaCsG985Wgu4Ch8HUhokPHNTXeGWCtvS36PGKYFEj2hvYyhatuS94pqB9xg4qiLURQD",
  "key26": "2Dzx3X86Qrdeq92QDA8GJnKwux5ky8rRAZJcTchnSLbBNp32bh4ciztFZt2jKS1z2JPQYaBE9ffBibT47wpbX6qd",
  "key27": "5vzv2pc4H3gy68owvvxNXhsttqyCvtKXuYVXX2XSN9gWCXzYNJBGGLH9aAz9rSqmqziCYEQRaGLCPNUXCYsgZ9Z4",
  "key28": "38EKELYvF4r6kDmuK2414pCFvGKU6PZcExhsmNQ6xbuiXgDTzhAoHckJZiaAjCuvAokdj6rLrvBydMfgLWxXE3o8",
  "key29": "4pnHZzLwYQ54yfGvW5ET3rfC28gxDo3UaC1H4t3Pg8MzBBjTFEy7XvKrsBDyXHmsahn4LtAzf9tBHc2X54P7hEYN",
  "key30": "5HWUH7NVSZniGK2f3sNMQxbM8ydJzAvp7JdJLP9REw93STSWpugs3MG237HwhRfRAnrzbNwQDZAbzZFBNZ37xXxy",
  "key31": "cvTatUbM6DWv1TRm9crk7dDfoVjEfHgrKCsmSnrD1NBKwQUArfoUD1Gquk3iBLmTejHmi8VpL8tsEstW9RJ3J5s",
  "key32": "WJedHfLBB3fkRbjhymyFfkCdg14SUQQfWaRCipMt4GoSexyqF9MdTEe1sSzrayWnCs95ur23aofoKx8rxMfoT4V",
  "key33": "4if7KdMmiH1KHJyuDL7fur621REbpWoFhmfYVrdnHfaTbksh2GTDZfBEkgtCrmALG87LzJScpTKYddZ8R3f9QdHB",
  "key34": "25DvwV3UswMYxq872SysL3HbADHJpYx8VYeJB4LR3VyqZ3J9MQ5g6gpCFrczV1VTi2xhnjENhNcbpSjb11SDDq3E",
  "key35": "2vj6SKTv3g3SESDX5iLbsEDrkSNDt1tb59uecEV8MnByjN2qqVBpJE6hef4d5d5oFvDgqkWeCgEyi9zcrYJw7dq",
  "key36": "Brro4yJd8SVVKhZ2NdWHQEDTyK7G1f9JJWF69pQauMkzqK1dHnTxheKohJRFrQ9s5k65TV7nKsSm9BtZViTSKHi",
  "key37": "5FrX67WhZcYCFshsjUNGo6LxeRtNGxy2XYp3brsivYt5chV7yGpymZxVvyittW3BiVV58n3j9B8mGwgfLkV8CEra",
  "key38": "EqT6ixGRiuSPpXHYSEphn2RSVyVBKmLJT6Ps25kBYH9RjwRh1u4Pkhsr2Z2yG4UrArUicrXzyJoGgJ6bvHzYpGm",
  "key39": "td1eXPyMmnrUskhyWVPvMBpUw6dFNmJK3y3qRh4BVxLTqt75ccC7igYzha6ewpSXjZt1mSWNEwQQTWmS4TsFLXi",
  "key40": "5mFCgupuD8RKry13vqW77S1jwyrRzUGWaSQfw95HAHgJmqi8Kza3oUFZdQXL4GJN1dpHwD5Crr4QFtT7QrPxiCSA",
  "key41": "23yrNyept7fNNpnpebMbXc5gj5bxgM6yZAKRJvBA3pL8h6eJm4A5rjqQU7jwwXiCVY7nFN7KiRJ6rmefPQN5MW2X",
  "key42": "4VVgZSeuu31MNMpn1q13knWpFXEGQ5niyhDRKtPjhie8dq1tnCFWeebkdXnWJJxNz6zMmrX3tjLcF2zpZoekSwkR",
  "key43": "4GtYDC9hFP9UbAQZVF9ZpyqJu2Uouu1brKdpmWYa6X31Kj3pCFF9FWGgfPaQzcMmaoKExDPxukHuqYBbF9QcdE3N",
  "key44": "4Cv21eYEqVFgZE5GbFYmyxqdTMXFP2EAE8iCYfhPoRKCrgWh8iy7xMBVi7gwgjNP94gzRfdW3ZXSTDsaiwto6xFT",
  "key45": "39vfF6jxYxtjZ3jdp1AynB1SvRsGFRinZY9WTQ4wA9dsKmCjcsk4L9gCxxtaEKnQ7DDYoGE6LyF37V99taswiWA",
  "key46": "2xcRU7KNe4XDoVJwr47kMaAFn3BVRepr4mi9Dm2eceMy4b6ZoQrqoaC7DYeEWveZ7Mwynx4E1KJkbGBZKbfsMyK9",
  "key47": "oWZ67PoqMbAHkcAmcfaWC275GMUH5Nt1u3bLu44o9VCWAk1WCAobzQturqsrkcNG3Dxa4KPhXYjYkHigbjdiBCM",
  "key48": "fAwcKofqeUZzVmfUmvEje5FvGazi4XQGdqZPVU9wjuiVvVHbTpnnhEBfkKgxhtiVo879sJwBGoc2AdWvsiaZKQc",
  "key49": "61qnqV5YysK6QGSgNuNfdtm6npt6FCmTszSWJhJimzeksdQ4SGNCoDLTcaPAGsLyuoekMe1m626DsMr185mw36tA"
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
