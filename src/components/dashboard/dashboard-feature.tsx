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
    "5v4AqHrT4P434Ya3FKmXYSeR9WHxLohSD3gTNXAq5eJ5a4KaWoTFJTquUAZsith6P8oGPUsE7WUSwhfjkpH6XZjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnThTH4XdN2M1YpR1grqZk1tzqAZ2hUAZgz9gomCDfpTSQBqoFTTht6PVQhc8L6Aupen65cyPNYk1M9bQk2vjMg",
  "key1": "4zy7kNmjCHyVcJ4ycM9ZVjxJ1WzTwSsgebqSfWbXscjPvu8SHMa6VBqK5otioVBaKtaDi7KS2szBu7XbqaEjE171",
  "key2": "x5X3ro46BRVMem5PxuwSMCXMzHDVAY6Xq1ppuoZKAnnmNniN7NU1nMTCQtnH9CrLud6EC5Eg9Ce4npZtx2qQLq4",
  "key3": "wowVMLK1J59W5sK1u7tCwmW7gbXgunScfa2Taj2zTyaN9b5NvQmsZNw3WbQ3P6WocFccMRe9wKK6ra5Zt1EuN6C",
  "key4": "3jTM9MHJLG4kb53hHkL3BSMBV4FR1yiKuvgMVdkcK33Cownyi59LMqsdkNKHbTuoNXQUf7uppnvrzDixA1zcd6dN",
  "key5": "5RjyEYtnf7VqXcyAQrV75CFxgsbjRfnMXiKn582m9sArGcxMchKpH3pU3yPYTyomz4eLAzCky3WKwvNR3AzDYpWM",
  "key6": "2a7g2enRi3NuZAbtfBPk3pi7GZ2wJWQVnxsazB4omYBCoACQieBPVp6R6fYwbnFK97wMod79ZLm1Zi8j4DYb4Zs6",
  "key7": "67p8RRxRCuSoEwXRr1UUBLvDzrgVnH4RcoFq7jePMwMnHB6sxN9iDjjwCmp9Wp3VuWYV17bPq46WyfhLnpiChkm",
  "key8": "A5wThFwYcjtkUiBisAwdPXjBLM5FatSbh6Yo5Htcj5iq11Qbc24JhEmM8t8uAp4B94QDhJq4tXeJjEcQc5TL8Sp",
  "key9": "5YWfagk4kt5kZh7NFSAUx6q9qqqjjwwUnX9ui9TCKnFtechpQRYtsscaGWmPdN9BGpAGe7YaeeUoZD5U6bwa8jRJ",
  "key10": "2xZ7DYdjMBzwVESY5wfVGNi9jeohhmC8TJMXfWT4Dby6z2etjg8tJDgJ7S2h3sPcPRVZFKiLmGqqftHbhVNbo2Zt",
  "key11": "3ijECyyyQJRnHf4g5PS1Yawvm2G7w6Ec1kWKYrPX9aGD6w5vHmgimze2kULzPYzfqLZGry7Pe8jwBrZUbFUYzmkY",
  "key12": "5eA8pv39E7PEYEuhutseytGoeWDSVqDe41rQERDPzXAab9zeeYdGMME27qjkTivwzGWUt42Fg9nPgetSGDFxj8hg",
  "key13": "2cfJX4ftgADVcPAVnM9xQNiAzZKXRgMaWS67swF79gZwnT3mVDoNW7JHspeCPwUGNMzFNVesEBn7Hn2aseyZrbA6",
  "key14": "ttZygswrgeSpqJkK7MT7bmVr7d67hqBWbbZhn5qUe7WkiVEAVus48DoeU9vQiC9kgU76UJdUfF63AvhqgjA5FJE",
  "key15": "ZFKyUJFqdgrgLKBGzzfyFk2dgJnZZdJp2ToUzU3rNadyfqv2y3tWoXHWx2oQioKzY2aJAtmPLbrYSUHxpMoEe7t",
  "key16": "5u9psvAJVfRHzn9ShaqGnDBLBatZeFVupLMheaNLFwKzQ5gsUTBtmCKw3A1GKm1Nk7wcxpYBMfWMEGnd2At1Q9E1",
  "key17": "5AuALbwTRrShjiWsYj8F77Vu2xrW7s5SNeWCifVD2tq56iw8NJu9zAosLbgxFJyh9MqLhYEiWyHCQyfEubjR6RPD",
  "key18": "52XUitF3mQKAfdHEMTz1ssGSJqCHmrAfzit8XK7ZZn45LtRGm7m45jABF4XGgkbS4WwUJzxB3m5tU2vnStjAeNmZ",
  "key19": "3qarmwSXyAYb1UsQRiMjxJWxyXquPzHcEQKwjQ8tkU98qHgk1q359TP5x1rLBid3gvwMzXThosJts9f8WksngQQj",
  "key20": "4CcABXGDLfbaDmb6ST74LBmnaizGuahVkCwdb9b3vgpueJzkPP4Z7Gk2qQ2wVR7TSTXB5bKWSSn9marzUQ14m93L",
  "key21": "21983BGbEcRYfV2UfDQWLgaxwLw8FeaGK5rMkKUgts4N5LZ4XTeqqDxZGphDZdt2uPJB7F5doXVonsaE6G1Sgx36",
  "key22": "Ui81tx3vkU5BUSz6tmo2w43aFgpWbbF1VMFzzSTpZhVAfUG6kpaqEXgiwgJu2p877HfZA7h5L279k78dhArNymd",
  "key23": "3NSc2W4J5VVRHDmMKRQtxh9syYF8hw3JwPfUmbVGDDUD8eeWMbGywsSsk8tXN2uzS3pxqJNMXupxxZ6URPP2JGhd",
  "key24": "27V5WSYBRcD8HBwrQoiScmhXvY9vZjAwv9jF4Te4Ha9vWXGFL6b75jZ84qq7NR8AhXZzUjGzHUHfA2y9SkAGpULx",
  "key25": "j2jVmxhuXxScGGRfx1nZC1xiNcc9waX6aJKyWZhiy8rVUej2KYGT1eQFbU6McfnaZK26bL4SjtjEXo1ptTAFqtt",
  "key26": "5p5Fz7NSVKmJeZjbhgAmAWDdrNHULn64kNHzrxZSQCL6ns8caWonj1GCmpVJjVv7WMFWH1gXWd4wMeYPBquEDJGv",
  "key27": "o2px8UrJjJiR1zMdPHTvPRJ62BSd3AFDy1W9dNHEoAAKUEwvt1RLwEP2soLP6qXAigSDu5EwiNV9MvtwUmwL4FX",
  "key28": "36mSYQuxJRxxMJHRLLfL97ma8XRZaTVQL3U9UmjpNVM5dQyBowjQqQUJraDRtPcyCvTjygXsTYvb3YvdZEb9pox4",
  "key29": "2wzJmicLAWgBtKDeQVDGGRV9KVH1RxgdZFT1rajQBLxXcNJX8RvJYTM4GqNY28xtokzTakJJBHp5LUgF55TppQFC",
  "key30": "5vaR4JEaBt6Etf1so3XwqmAwgyeLrTYsP6A8Sdxnaf9CRDfYywnG9Mx5w4MceWMkpJSnzDKY487gpwgEf7u44E4b",
  "key31": "5e6fYk6y5DZ4SSMwCWKVj9h3ek7zqfGWstwiG7zACT24itu4zNr1twG2fiMeQFyHszGsS4MDvw9iU578tKns5pR4",
  "key32": "2KubYGBszQcFobYxbxG6htMtvjnA2fDkQ7oGrZxYh46zJNBXLkV2ytyVLbnjJ3WaNKX6YHiq6GxSJRm3Qn6Syg86",
  "key33": "58Y31Ezz9D9t1G8r9F1dc2DbKiAssC4MJCQaQDhens8AQudxiRNniVxyXVMqWRcNXM44BmAjHF1WB4K9KqUAKPZP",
  "key34": "nDd2AemeCiJmsoqMH42pbUvToK1YyRJwjD2Z1ZFNYLeC6tJEDNF4VnHPdT7en9ainrPYZTHXQJ7asRvZvpo2TA6",
  "key35": "szCHKDHRacfHER14Nxa2ztQy5X29cQqK4g9v8cndwBBWrdfSk9M5L9HSA6gaY5DPN3mg6hUKk3axXLkaWy6jR9W",
  "key36": "2JAahKLLKRoBdk8T6mJG6AoxBME8Wj37Li8xMDZR7kDcFzrWWmo2SpkH98bLmUtPg3xjWNs9XEHCeNPWdN7tLCW1",
  "key37": "62zWv8ZZUcDRL7AJMnAono1924obidS4tiBqedX9phUNB4rmVTbQtRJMgyQ9u3uYDsj9k19vdKxTNAmC8VL5fHaU",
  "key38": "4tJ9KoJGD4Y7EN7VJNW3paeEV6cAajnocyw2RfrCBxdNCb7AkyNf8odhVSztGLDqFwTMxLiHwDVaSvJftQCDHKN2",
  "key39": "27mj6XQmRZqrUFAVBUvGqHCCmwSRRTjbEBpZaP89RxqFLjsqTMnW6yzccbupFwKns3bavd8MPqNvDBi563hvvKsb",
  "key40": "4mia9R38muPQRmhHDtzDW1jQzNxtg14zPM1GwXYsiFVBqUFf9M1KbjBmeniErooZgSMHtFj91xisSkpyT66AzBGa",
  "key41": "3hxZ1Gw8DvHWfPZ4K6RvGuDQz5NKUyNVS86QY1L1eRoXBsXkeZDuKsNa4nrbPAoZ9TivYYsCAFKPAWKoQGjhP6ec",
  "key42": "4RYS9qyGCt19VEbFKEEbBWNZkQSMjn5XdSx6MWXcBHrgbVguwfhv8DFfr7YJh236o6vfq24MUXDKgF4ZfwMwRKZh",
  "key43": "4XP4BhEsK8rY4uLWgd9Vq7jGVwoBji9kjRVMegukNw6KHEbZAbxTJ22F3REW8z9X8EohK3WEMWSpZsvj6jf4Xaze",
  "key44": "4JuUN3y1nJyvYuwHUETEZZjKXKvbxKfCimSkHuP23V4w4xarsjRR11iSC6X2cXvXEJmet1Nzh1pB3oPLRnsvnpqt",
  "key45": "Amvz3s1XfSFPDCoH5Px6aWjbK6UxkzSFyAmwPDmoSerx7qR4kj6LuFWx1N1d3qfKuBFohvmHgQAkj8H3uEoqiBj",
  "key46": "2LDeae9GrviwWxCWQBn7d91DfDZcCFSWBge3c66sUeW2L9oQphMY7S3NciiAJMck7SKaHP8rXeZ2sggrS5SrphDR",
  "key47": "2sqhDwmz6fnqtinsJXMnhfkgekWZvJVKG5E744jtdUEma8bejDo3ETMc4bzByJS9nvxPxtniyRnbTq6fM86TgDoo",
  "key48": "3W6JxumnrpYcf8qByd59K3R5pAUheTv5NWAFVdqPhkvveMJhKpqLWhTCKALwB9impj65ZusBQexQirwquXdfTNRQ"
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
