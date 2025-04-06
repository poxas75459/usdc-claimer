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
    "4WMXseQWqbD5DZq4CQsnYphNkikhmfCPCgj4uxBS6pG2E2TBspkQDqDPjWcfYa41JEhma85maMv6VGoDQzbF6oGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FV5VrB1U8WzTWefoQVWattFV9PbzPQRTW3eAu9zcrLmbzVxYexyJUhasVAKhZMB6p3r9rJ7py3SgJerDZmBo5g",
  "key1": "52FMS7BHL4LYpgoWUNFTZDuHzkEN9t58VEppdtmerPYBi7v9smUevuqb6Lu8tsC6c1WrJDg3Tk8aF28TFPyo4W1k",
  "key2": "4q7dgEDVuoryk99dqE5YtfAP95hLdgHU1rgaCBR6iaQvy2BZ4PfXxaeNQU6cRsZXf15ztdq3B1RAXA239huypsqm",
  "key3": "5kJjeEdEN57DfjMG3McAfxN4SZeM7QMbsQkqGwteCfU35jecqaM8XpaVUKHheGUB4pA7r7FnD4V4Nkkt4TmXzYRT",
  "key4": "435L6h86gmHTRESMVtVGZTgvPBUL2YVKiiQDpDD5oWVmtki2o8LhAKALKG5TNbYyFRWe5LCrearzbqLqYYVgU6MQ",
  "key5": "2N5JxseW1wSs8oULLD7vEbiCMWCckykRDZJkboLmHQt57aQg8MXUcGiJbsHTwBDNtL5JYhVmFjtrMisbm4Aa6Gep",
  "key6": "2HEgRU3xx9G73XepitA9ZhWoRTT8b95bdty1VK6Hidg3vhKkmTuBrmbiXTHXWUxdLkquthgWZ2HH2uamk8FXSfvg",
  "key7": "3FXjZ4KArX7Ckd7rqZw12BY8QBzKjYhpmyChNWGWcPYF9EYFQXGiqC7dkxtTHi4jmspv6j7QA9497Gx7a9jKjitb",
  "key8": "5uE6MPEBx8bDCXfmpncsLtLBhRsHvjufFfLP67TtvDzQttzfxsUQbjwY5GMj8dfnZMniMjV6x2T245pRHyF4sgus",
  "key9": "5AvTWfhwPiiCXp8LGZM4NcCa3NT5qMxwT6Z9SAynQGKCBVSKoKTT3VBqcx5eAXV62u7d6iGyuYpwhD8rN6DCVcad",
  "key10": "3K3rCjLgDToWpmVKhoyAnM7i4gyggPFG6XUegZjsd64Z8Av9HMJ9vQZB5Vpk15sR98iwioAE6ee7BnyzZnm8bt11",
  "key11": "3KJc3TP9mfxKykd9prccLNGh2eDUjvuQh6PtPfmSteDwm3VaoYVutWNRyziH2LP9nVUv7GhpmYMYBB7NyN3MPTSR",
  "key12": "2qitVpNrEJHxU7vZoS4GiF3HCBBdoGAw4ZTsdAv4qX1aWCCnGZHGzNkSPXkLzi1fQLR1vM1A2Hiianww8MUGpThd",
  "key13": "8MYWZDGVozpj2j21BAMwMYZ6s28CSY1ceikjbhZepW4Xo5HUxEL2nJfXoqdQ7PntXeZ5nnvUHEMsd3GM7uhHTFc",
  "key14": "PDfp89HmbPTa379NJxiT4t4epMXsEEbi5cyJxh5n577MP8X98gAtVXZHRQ8jpG5V5eCBDNXPuSdkGbE54xVp7B5",
  "key15": "3qoH2NueCpnScYA2Dvv3nXnre48vVSKrhmmVsEyvzrmbgcv8MmCiZJtLnhjMBeGzvKzTxPGGCYXgW9Wajb2Lq6aH",
  "key16": "3XdZmpPrSJbx2kySGTbkPxm7iw5UPmbfGJBUySLJtNYJ3ANWLNofHt3f1iuM6iDdTYwVGsg4kEvQurDE97aeVzBT",
  "key17": "67r8a3ud6rZQut9fCafkrh8sQsfBXFthC5RjroDwmkcCjiqggbStecpNWBVFjD4bYKZfsorxWEBW3UJqPf4ck84K",
  "key18": "59My1NBRsWtTM6zniiqsBuMkjCiVvSg6oSVppWEWi6mVfH9v4PrgpnJUQKr3ifpFgMrpGjCXW1DRz4NDK6ydgYaP",
  "key19": "4ff49nk3UKDqF1nnWxK43nNcn2NGGTomT5GWH2CB9Fe5x5Bgbxfock8PGoyJgE9Xz6Z2gaCtqDSacC3LuCcohbSb",
  "key20": "61k5rNRgBqfgWppA4Evba6qTC6i3TYu4DotsXfb12AX9dAwYA6n12491HNWLrVprY52H8Bg1Shm5gF91GUNfLiqd",
  "key21": "4EVsbBaJRLZuG1Rwgku8RPmFdGkc9anvw3vysjekDbkx5MUeMko5v6szWXrBUho6di5z1zkxpkmnSaW8zTyjpdKw",
  "key22": "jfNqnTzeX52tmJWxSAoT2zkAtkFPerVsx7qCuv3hkL5Vj3LsPKT688QPu1zg2BUtGT2g4C8XKZPXHSbACgjXvfM",
  "key23": "2dfBY5XaJNdzpd28AwSyQoxwgyZSTtHvbwK6g69TSzrYfCqL8cPe8QqKHpHXxByjnBrv2e7A8A3i5qT3nvYjZ5uz",
  "key24": "42gttRExNySWqc5rxHx4kGYSaTLcjExhct8cgxEJQJunxzE65rvcGgxqsQhEAtBcw1KuJ8zGGFN7Hi7gUSTpisHm",
  "key25": "2c6p7DNyJP2DRr5kvhKZyjZnWJ6S4EHoigx4B6TPqYEAG7yjfpEXsv6DuGQYuKXCu47epdxTyzV9GE89jL2RBoz6",
  "key26": "33CEQ5seKAdKdA3BJ1iZ2ayK6En4qwbEXg9DGbcTKbkHHCbVxJVrai9SW2bFdTc9TRwgLpYdkrgWoaAddMqgLSYk",
  "key27": "3kR95RAzo5wf1U2PSSRMAUcBjdwnuAJrcp1g92hdXWmLVrgCnAJdHgVHZv5ZZ4ayJjStD1ZgDYqsNaZ2P5Yv2XGq",
  "key28": "2LUU6jKuEbZnTkEKv4APinTkFtq5JpJ7WxZYhE1LqY3wHmD4Qiki3Q8pWgpzQuAka2mhbafFiZkxwxFh1h7Vetp",
  "key29": "5k6Y27e127pehVPfU4KdwhqFsCrRB2GGgNTJAvbgbjigE6GDozTXvVPgjKbGWZ68HmbhkQ9TSnpAB1pXAxC6aZAX",
  "key30": "3LETM8FV6hDyrWMBwwbbJJzSMYZp7jfQVHQ7uoREJyPvQyNSqyNR3JJWcc4H9oD4ebZMngr3bpcs9rtDrrYMQn27",
  "key31": "5zgQeoLEsCCXTAZWjN64jJHLqrSR9DFhy9nxsu1EX5wPtGaF793GdBf5tZ2gZ4W5nKhGJSjNrTg4UzpPYXMpokRM",
  "key32": "4Lq6tz9wCMXC3p6f993CtXBS1q1NsWbujwKCXaQZABe3aN8nGzidjZBD7UfZwnksyEPeopEvnHUaCLfKBUfSBaVW",
  "key33": "48oDqJ31wSiQEszHX5tkdcQKxt8Zg7gLiKPxuKxGJcNCKPDnc1pNdgtvxRixtLRzqMcT3j4DY2HTTcGQwNZHfS1G",
  "key34": "46twbM4e1tasZpZAR67LB5WnQJAVVkKkBq2L71QVc1HEzxSn9XryHZHPXyQWedLJ6d35T8h4RgMHvZf9QoBnuQjB",
  "key35": "m7Rt9DpQDa5EBhJ4zUU53ABef6cJnRMB2BruDNmaQbteCG9ahuK4EZ3vZuRvBtHiJS6puEDgrCy8yFnBF3WhW5c",
  "key36": "V1cnikisau16octPe3Xujobyc1jjTqJi2hLzDQHpB1QqK5irKjxXf6MDWGNbknvPJ6sSpLMro7HSB7kVYjf8gWg",
  "key37": "2NTL7XN6gYdDafc4JThW537z28Xu7s8ZtJVUzFfyRKvnq2VXnDMNrRQWBGC1KqnXs7yG77zvw7gqb5rksX9c3Cwu",
  "key38": "X8R5aNQyzDmyr3pnrqM8q65gM25biNQnQ5sBTrNyEAHKh3L3WohwrTXxosiyp5RvZto1rotq8FKxxtHsFLodHsx",
  "key39": "5R4b4bCEB4yjVYp9DesjmAKjixdpdh1YxuDf9tGAZiksaQQVquTNWKSrz3LQTGf2HKq2Jo1YGNnnB9fSrRDKnreB",
  "key40": "ZgPtQ2ySwUtpPXKtKBzB59nDkNdWPs4VCdWpxNH8qhMhJ2vgWjuq3p8yohEYRmv6LHW2mu82aCMCmwxPruwBvTZ",
  "key41": "to5WV5ekv4QRAwDHGXVoftC7R2AD1gmEw4cnSTfuwstcEpJ4eJxVKqJJndayDdf2WiKvaWmZuEfG3FDiZbQjiUq",
  "key42": "33Px2AE3yEcoPb4pfjagUUuaFLXgrMzeGocrPhHYgGZj41gMWZoQRqDExpJZhv8EJVdPLMQPLpaCoZErQAZCzgf1",
  "key43": "5YMtCTef167YwRAxXrdNveGj5EcW7FSeKZjFgCWxa8drPUoUcEn4EBBWvWaL28DGiQxM5Ka1bERneRT4PUp3qk5q",
  "key44": "3MNdyD3Cvcb6se3aPMykNQRYHnVyjrdiV71uiBbUc8ES5yTYpDx3VsSTNaZxHqVGzn4jRJi3F3EWUwfnrQ5DAFsX",
  "key45": "5wtMtyAKxVwCCQxDCZNNKmS2cMwRKsWYVXQjSLg41qgetpVC6XZ6WLVDQxWSpyn9BgcCvUC1wDPkhbDKm8uCircU",
  "key46": "48BHZ1fmN5znC7Pm4GMoA1yGc9zBnEDaKnLZGQy9NvAKr8eL1RobTjYnapWoQTxXwW3eE3KGUVGjFYoxCsq2zZXn",
  "key47": "ek9FXrq34wgWF1ZDEGSuanWjGGfsjSiNWKNRYf1khCvLiY9Bh5YpURkNi1tT2nDxgNhrgDBcb4nXNtWCsiUtbQ6",
  "key48": "LzLwPrL8FgPxLec5t3ziR1Ki3kFSckRi6YnDmWSbaShtdtp8hvydXMADsfNXsdLLECu6F8J94PDNHVMRQDAQu7X",
  "key49": "4QjeyGxHo3ccm3bQiNN26jRQP1BtFCBGXL2GLojhJbegtg59DofvVkLAQmkC3NRaaxge66v2BT7Z9wCVhhkT4Yv1"
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
