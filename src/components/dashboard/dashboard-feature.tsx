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
    "22HC43z67st3uMnmD5mxquBNgQxEpw8a2ftTRQwhJgdKGeqP2FkSMr8YHk4A9ams6xUawtXWuctw3vbixBpTqJaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNUdXw4yiyQer73cXsntpp9D9WRxfNWLJgBBzbkKwmSfBgC9gd8aG2Ykby7mbyTrcKPmmSTHESGTxTEYry3nqoc",
  "key1": "663BWPkbMonqbnonnotMu7VsHSLryZkafJWUSfBGkZKVkoCJBUp4YLwNvyVQByb2JUSmk4A25GK5rcYXusoRUGNv",
  "key2": "4aDYkvQ4P4isR1D9Q9i9bb5UkF3NeZ1oHPvcXqJvz8F1ngaXQgNzX2gNnpBzuxze9Kme1wLG1N9Uohzk4EEqJg2q",
  "key3": "4KJKZhHGr8zqcqrcSQidPjjBpF2qipHJuKQ2Z5tZhoeM8kKs2gA6PHckQ8FAyACWN4AfoB1r6PZdWshtdQP321xr",
  "key4": "3kaNoyuDGKBTC5bGzkSjgs9Gu4psf5opph1fHkL2jdQc9PAnZ4q6d9UuFfkBt5UB2BbiPM2GkPdFqb44F1T4rYiu",
  "key5": "4LWSBDvrXQPgnGU4jzffyQWYV4y2hVs7xFPUwPQTa5XVKAaZXpdoGoKQ6ZgJs37JvpwT3qHQ9FLLJaiNWsMtdPcv",
  "key6": "4KuJYdr3una5ZYNiDrxUU7kpERd118NGULLaiv7eCWpAJov89mCtQTDBiQhsocWACgfDFyFUUvcgpFQwUsoSdQVZ",
  "key7": "f3DmV4yDkKZQUBHEsTq5Eqv3k4oUo85wcpkzDknhAq5kpER2CGEJkditspGRGr9waf7R1xwm5tCfWgL3mGbSSt6",
  "key8": "5eksUjVgbPH9mc1QfSdt385Jybsxqm71M6ijjFHiLHwNkdJboxDQGPyvc8nAQJfySBiiSdoAfLK3tXQB7vpoL491",
  "key9": "r1DJ819HhmuZBCAqdNgmLAymsLgEVavJHkub9QBr9rvAhSrH3JNvRKfArRSLHXDYs5L2ZT4Hy5wdWQmMqi5i6Xa",
  "key10": "2jFTcF4swsZh2s8pd9HZ4TuxPjMuHTcs1kn2iC4RfazatiVFwYf2QrU4CripPGPVRqHJpzVvqnDfxYajGH9HcMKk",
  "key11": "43fxf2cUmdj4LoTwhiSWEQCqf2e9Jgkxa4Fm2qVnSRk5rLUTb794TUNY3zXwQpXGueSGhhnPNPsqHSLYqicrStGa",
  "key12": "hL4V62APeoMHF8q16xiuefbB1hBNu3h8AvtDwtu1w62JvhdSZMNCzJJdp5eVHfN6i2NxZdfVT9xkP5dMMTvdZcx",
  "key13": "5U9EKtzmfZv8QcFWqXoBXq8RDSwwCqstyS1uvj92Fidf6ZVyH2WUpF2NrZ627eqGvuaNrfCGAFVoDM53m28WyPE6",
  "key14": "5DLcjjyt2ZwjMedaSPPuiTPS8wT28pVh5qp1pMbQgiWJ4sr8ajNknxWCSGV4dzz6fdp6tbAQLw8ufyP2GekX1quw",
  "key15": "4D8vtzk7nR1gA3hxTCJk6ThgCBjz7sBfExGxSE9vNDRgDmHrWX4uor5rjX8b9Nq28XwjBR33ypkEwVwgXRHoBHyE",
  "key16": "3yz2AwdSGPYpthnoFQNmy6fJvBG9P7Jb65Sbpw8tNkHU2rBAYGzXVEUfEaW6GX4yiQnEAC4He9N4LuqQhyPfoSEE",
  "key17": "3xArbBexrrAnZPAWxm9cqhyKQNDtz2C8CE5Yd1MfQ7XewN8RNiAqHnPk9fEicJPestQNjusK1XCkLcn6F6U9rm8X",
  "key18": "4ihfAdLtz7GPSbuUgF9TZLLekNNNvAUSCo4F65EBPdn8suxoo42aFhqYWQ4pmSsC8hFj2AwdivW7ydpRRsBaQvgg",
  "key19": "3qquoEGp1YcDXw6vfwqT7LtKTUmhLt9cWVULYoXxZ1b6n5B93a1hekpy237kXEceavEmcgGaeUS4amYQNjYq56Dj",
  "key20": "3RChm2cVmxu7MysGiuQkX81BckhYf2LpN1fjATbQjgGHRTA8S935Yep41M4FL9wwV19HyLsx5cdHBLF4cfSSBREW",
  "key21": "3Y2TN2dPfWGruwHCtuKjWAXmDfYpPoxHSgZoLqvLzuNNaTKPj8ty9QNJhaBJsBJkFyiKYuyyjVLCMDtFQWiDb5tx",
  "key22": "5QcDpBjMvCqiPPNuy5hnT2dx4GxggwgRJqbKJsj7NzjYtYzaFztKiN1LgEkUgV9gLwsiRjQtppUpwswtVafAjHVU",
  "key23": "34RrnuptfQmBh55NTPsePtFYz7RTEtJYpNJoaVcLwtijXp42hu5PMUaVfi1bmTUExqqqk7jVGwaTv4YYZcxxFicR",
  "key24": "2vrwZXzgtDmwmd9G4HdDYJJHPVQWALEqx93w3fn5rKRXJ4rQHpnRPu7ngJguTwmvg7JhpFx19Qc6amEH2q4RKajy",
  "key25": "4bVWe9b5zoX396oWWhZX1g58V2pCcYTk3CHCvwtvDskDjkzTyXBNcq8gCjpyxSGdQyA2xP2eFx1xZ6c9zxmredyW",
  "key26": "7ukdccnjr58SEXTMf5pcQPsPp5RvePiGg9kd1BVbAtZvkJCQ8utiYHT4D19dMPScQAAk27EEN2YmG2TaJpJ8edT",
  "key27": "2CceDEDUXbnj4PnWuBNQrhXbwLR31BJ2weUv4ZvFyf5CJzahx1QrEx8deR3ZKqBeCk8TibLxm4MMT9mVCuWePayx",
  "key28": "4BrE3HRkRKadnUzfme45vXvDpryhvpvn4UPMuPXctatFpmT6218SrEVmGo3ymSUuUJC6yuANeNnqUasYbx5ycYjr",
  "key29": "5AQsgryNoEko8JSKZp4CmHp5qTJNSjYMhWDGo87dNi48LZWPZCiAmVu6tHTW8ENBxihE3vtQvTq4Fe43vZqYLMLS",
  "key30": "5pTHQhEL3UoJsGuHdtgA4tFPAeWdzmcLsqvLKZN4kzFfxTGH9nnYfcm7sR66wDNfkGBsZc2gjvjnchoJ91xknyu5",
  "key31": "4LQY34e53op5dSSrhxtTYZwxU5P4t9E1JJ4EtS84WLDEizRsT4qqpuzYgY6C936oZ2c1hWr6WW5BLQCBxMd9APRk",
  "key32": "3bMDSDRRBeM4d3dkRRFWvVn1Z8T9hUY3sMd8C17zGMZdZgAGxHFJgv5VbrKPVhMUMuwRHCQq2G8DstxsQagoKg7y",
  "key33": "2qxXgSr8uioBsFNv5soZZDKJMrJsrLjEykggBKDCErgEHRQzMULbwxj98jnSsc8PBTF43UA6YwEeHwzoB5GkHCPJ",
  "key34": "3E84NyErRcQTMC2o9aLoLWhwhP1fmN2epgyaDaXexNdozHF9qQFziu1msoCJjcp8xG5Yo7xKr4PyGyxXVWzeQBKx",
  "key35": "3va5gCBVt7anXJaMMweMhYvjbFckvcpTBSmFTD6i8LAo92MbjQbFiJa3nDD69pFuXtJ9qkgD6tndTeSkD6bTY22R",
  "key36": "3zz6qgrFx1ZgstpQru1LvrzrXQcB5KHaMWMfmdhQhZCqZ4FxxUXL3jem3JiYgGzuAM9GsgdFJzSfXdsJtCVtsDYf",
  "key37": "4ToxZ1UQcnDWFgf9HEJkF6ifwD4Gz5sGV1fzHCxT3sU6EWgXedDSsEkdX3EJtskwdp7LSLA6tMfHZmmnAhN3d1DU",
  "key38": "2vLxe7A4jyiLGkMvKZ6m8yrRryp8mrxFnApa1rNVMq2FUv6e5TKPEZfmggzH7VaXSU6dRASNR9W2EeWDtipeywQQ",
  "key39": "2T7RcS4j7GcZmpBHBwvSdAmtevDinTdpgu3h5ij4sfdTowRGmHMac8PaTCPM173Ft51txpvEiQXox8uuB1U3hPHr",
  "key40": "2d5xo2S4F25MtpyaY4B7SywHjpGqj5tNHYpDE4Rayrvz3EkQF8TPjxgT66DU7NtBnJaQeeYxsCJo4CjaAkqxgsKa",
  "key41": "eTN7Ay9udBAtueACL4r4BXBUEFu6BAGvzg92cQAZMW4SwGzXop7NnaNAc64AdDc7AtnZrsbD1bHZehYhb1cuoXf",
  "key42": "2zwszmppqRYWgajxLQvnPXckgFoHDDuANsKhX1oJJw6jB2BmUjAdPXToRes1udFgfkCa5AdDAjQwVRyg9Q9Rr6rN",
  "key43": "4mpqfeQPqm7ruPmTBFwDeirn4K5axWbCfgRydY48eSXcyw3k1JF9p9aeYhbscpny68p2TxjnfqHx7dJNKKkVqEfv",
  "key44": "5VQzixtS3aUnpWzxByBsABg7tKW82XfdRFpxTDAc2PjYseH8CzB9uh17BeizP3JmG4QqfLiHQ9LxacffNRYuuaT4",
  "key45": "2uW6KoHNsVZtBMfnyCeBVqbJ7MWnB3aDerxT1agd3Hs5oS659sDxypHAJHLcNk3x8Cme3L4g9rRifSXnVnZuvd5x",
  "key46": "2mj71k7nL78ieR9LWEiWaao1BfJpQTxPRXQz6m8RnTsFNyUpRaH2Fgaio3sBkf248LMm6KnkfMgPStwejBwu8t6w",
  "key47": "2xycGYGy3KMMVHwLFfdSGAzGnr2GDicVQLesw74BSehVKUaoPd7vtYkiBNvcA3yDAvmjLtgrzvhdZRkwM4EpgwA9"
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
