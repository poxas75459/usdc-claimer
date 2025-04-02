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
    "3uG9MRPn3Zqwtd8cxscLeELZDjZktCJPoW9BG5kyxSLE9h4dQ4RwFuDoyp7BTbYGgku5SLaBvjrcMswudLq1vRUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9pPx2NteMjovU7v8qtUBnw5yCq2FDTczsGm41XtcZZbZqDAsod5gyso3ubQtt3Rm6ou5fWJ4RqkdLpUAj8YpZk",
  "key1": "4KrxDnCxS7wnQknf348ZaCK3jdL1mtrWcwyHfBVJvMcDwAoitAtzgFkJi4bLyMiG87ddq5bMpm6rtDCxE6V6nSUc",
  "key2": "4D8TBPuP5sdEQHo2HYS8X9ineiXu4HnaCLSeVPcGz46pSVxtQkAdxWizxM9WpTNT489qFjUF2BdRekGr86VjPtwJ",
  "key3": "3U16fNF8SCqoDd5933AqQphTRJqYQXf55uF35RmGsvAARoAqfUcFKoR9coLGneYDYonPJM4896StT1jtsmwKRjBW",
  "key4": "beo5Qj8x6pnoGwwADPTzjHVLyWHPe8hisusysJ79HXtAfcV7Uxg9AH37S5uPiHBHu4WB5W6BRN1agLVyoM8JhUY",
  "key5": "2ZssB5WRYDiZAQEd6DoLdHeMNbZ9w1MZb24ttEAFdWBmTm7WfjhmCseaEd6NDCTfZ6eqWvMsTJ87UfdMQzJ1HvwC",
  "key6": "2sWSsExrWsJAWSo6NpYsyvb92QxxcuruciqRtJJdK7E8E8E42y5gc4N24LQUFVcXNrY5Yh1mwhYbbas4jaemV5mC",
  "key7": "FZtXbCXCZhxFo1rfnfNT2N34SySjxtMDFQcyyHPmj3iEPH1Rt1hEbosM5TA35d5jBJTUZaCLtFALWKrpVLHoX4y",
  "key8": "2uJcjVc2836nnfeh2XYsQYb548HQuXx6aafxxoiNpwwTebbjQDWnPHYk5mh464cp2PucHvkPpAvKKJeXNH7f2WF6",
  "key9": "4t1v83hsT1gZQ6xhxnDioW1fe9J4uTxz9AeFpcaJiyFotMo1gSgHg6Lq7Cp3JLRitgvpWiGKotVxqKNkRFV2Bo6J",
  "key10": "2g8xoBPberBQmBJYfP5n5YoeF7aAkhX6ArzZwcMmprf8WTo2soofRex9yBcUo2EGuWxAeq9X16a5dnzUnSZxbGkw",
  "key11": "2WUUvHVFnDHQUn5qG4fwRDgyVqu3jvfNdcJ96T125TPdQ84PFT8Tnk38zDZfoovVi9zHqTTmhkcYkLpzJXZgoSse",
  "key12": "5R5JtmEruBBWUwsPjnDpmBmJ8xcNEWfzyo1ph4Qo9xZFHdzVNpFN9byECAtn1CqWPGsi22VP4quH8nMPbpTsaaPZ",
  "key13": "5Pi1RB415pyR81RrbB1vd3fu6LoXSjrKzpftidGD7FPegzka7SudL87ZD9Z5GzfoRALfNWfmk81GwKjKktnvXDqu",
  "key14": "4jFmk2jMAG9NXncSnTFYtQUVADD6QjeYZBu7NQMGzkBRh6Hphg8DQ91qopvmmxopUteJ9HFVQu8FFiS2UkHG7cjQ",
  "key15": "tmNZZw3EiVRLxbCsJgX3HCViNenFfFuT36DWMVuPVtLbw32QDuR1x57cDcMZEJCtDiccKR2126xs8GzgY7cE6Ch",
  "key16": "5Qj238fVYqKtJfPe571EhKwjK4BzM1tBksjaHyeDRthmADE9aWd5vRToPwvLrssEiCDrstVvRF3c97XeTTCpYaAW",
  "key17": "u2nwQXQJc1UYniqSSN8kSchtwUkMWwHBGarDArQPTRxD4W1c2EmrLfBb3WaTsaMxrAjG1qHQDSkKXPm1HdJMwhz",
  "key18": "4V55BwW46WBcTEMLTrm7LzRjUkPpGSGSr16GRbs3WChMLeJhYHbQb4wBwuQ4fHZJFaNJz43sAgQutktF4Cc7Psim",
  "key19": "4opoSH9K7uVNSuU6w9ZXvb1V7WxBWVj7qRShq7FWE9w6StAFuNZEbQcKkvkpePZSabQsccZh2CeQ4cLpR1b6pzcv",
  "key20": "3nJEZdrSynkjHtJBe6p5cAuzB5sapG7JRt2qa9Up3fyqRxnhwHgWyEPDPxwtZKTHmHegn3M1rgocdMjDxNcrSAax",
  "key21": "2qFuZAELWHgBXAitKDA1wd8wz71SoBofpDjaRZq26uh21MdGSHnxoCShcWfvQsMcAKvpy6BaysoyBrNAonnXB9zL",
  "key22": "5U6gCCujAT57rXUwWLKB64qDLMUfV9WJJvXE2qhXV4g3JAh7hciYrF3Zx4nx2cV6hxzafDvy3FKDyk4yT4tedutZ",
  "key23": "3g7sfTkBRftHw7BKPZKrjLfttxWzAkJayASDTiPsHiYNGQFJTMzuQXgGDqKFijjfupVqozjDz4Y2T34pLh1Ae5Xn",
  "key24": "4bcnGNa1wFLDTunhdjSwCXHFERB3mVGraJMsdAgSybiscryV1uRPQNj1ywpWP5A4K5JHSTSjK72UEMuekUKTTraT",
  "key25": "USA1bXD8uLPNUYMDSBFWhgYVdMk83zjZwtk3vZifHBdxraegAbvS55WTumgLAWiiorR69chSJXX6BgXYCPhesdB",
  "key26": "4vKM6EwhYx8ZBGjVjKtAxRRaf2Fv58yeDr7VTgTo8sjzT7TCTVhXuv9mYBaMVsjQN53PwPVKvaYaphpv1y5bvg4w",
  "key27": "j8cjV8bk6c5kdWcFrjACLMXSK1m6fTguuLEixuTzxghonwDx1J5C8YNwX3DUHzHapFv6ry6SLg4iNBh7VGsN3Cw",
  "key28": "Af5feeqWmz1oA1wFCxWSURRqN7E5QGsnNZdx9npK7rgWLfeWD9c6hxkPiSjP3zfMkev6c6N7kR6Ezds5U5wg8Bj",
  "key29": "5gZyNwxX1zF7qf8bmDN9oQqwtqdmRAF99R7YmaH8V3qEMMBDCrXh3Za7Cm31VV62jSnyoFpX33aacMredS1JSj8r",
  "key30": "4SU9BVLFfFogZNnQpyTrVj3RgaSGeeCdH1qvu58YjEQRQdjN6qqY3zLkZgokiLptGxX8YPWX5BRfpdqfoKkEW1UE",
  "key31": "3q5T2SyhTdstJ6jxz4P8sMmDvo27X1tiuYCEN8pp1mqkgHHekwdRbmsJwugioLLdeiqegFfuDj8bZBSnUyYcHZXo",
  "key32": "2ixkb7jELZLzEr4eaWVW1YpQ9UVYtCeS2qSAaeqWTkfMVhUoPC9Zg8xZ3QeaveyPX1BKZiuy4ozPccQqpmsLa33S",
  "key33": "2XGCVtuuUTLSZF9zFJmvf2z9KeT9YoiKHHm1KRGhjQmsv3r6pZpqZa8E7wEv8Pv99XBEUB4Ni2gLhiYtkB4uT18N",
  "key34": "3gwYCgmrn8HX5iMT6Ws5Exr9e1C6faJBQwyeBJwdHVpdTsrWT95xorSzByUN53Tp12dcW44vNFN7LC7yKYEKrEWd",
  "key35": "UpVyChp5XUgZsipQjvnvPwf1py6rRDN47rZs3SV4gJPuZdRJ1wETtXqjsc7E5GE5Mp3X125Zb9PYPHBTVQ2sb2B",
  "key36": "3MYvr2nLjM6Jx8w5Hy99HPMHkCt85XBpyihXEBm4NuLqfqpwtKpDAPh4N7sgexh4Vf1zZtPLYXWMvk7JaxrD4x14",
  "key37": "4U81prtiPwH54i3CTk4YET6LovvdcWs7tNvTWCbpAAquFVEtLMxVPBjmvqTPM6QGyBTwG4HNutEhKwedjWU59CFa",
  "key38": "5McGRTG7ez4BLanZCKfTjgDKd9P3Vaaoqc7tmcM95dhHhoJ2op5rpecGtLmSb8ozqCTYonNFwGzcuwhFfdQtYXxc",
  "key39": "2is3z2SfGGENDDYWiZXUenmHMSzTXC1Wug2EiRMcjyKcYQb5xvZ7NEuqLqh7d5BWKDSpAg5Wr5oN21CdxvbnjsZu",
  "key40": "2ipcrkaHMoEmnf6nzqummKx7RmVHBP7T6wFr7EeDtYSPQ9SiDzm65duT65uSoAa5PvtMASxUGmogYHVLrPPPqDvn",
  "key41": "5z1vDA37JRo6AbHzipaBCex1VRVrZVRq1jiVdudB54yjoUcZkJ2j7jwRZ8CetZpuVTmTJdySYttRxRUwidFgvvWk",
  "key42": "31vvL5n4uJKXgRhGGMoHTXXdNymsZYzvP7ux57SfD5LvPTZjst4PU3XSs9XQ3KRUujSxJFz3hdGDm8FnLVu8Lmkn",
  "key43": "5A2A7W4vqzWWkrfqLiMo8Ld93Sgd6FjmD3qBYkWpet6ME7sZpqFktx37nAh47aJ1RD5YTy4kSFWv1WQdNVWzm9rW",
  "key44": "4511xSczyXty4wjSxtuyUPR8myYZ1HR44DhSDhN4cvMSq9fodCtfeipj8KpqWPKN8s5uUbXN6xPxMRAmfSY88H1P",
  "key45": "4AkmWkKUBefgxvbU4v6dEA1jRAs1XPyWBiwNtRgrnQuMXvboo9uBP8izWthc3pFGcKMqUuLHh8ijB4NcKdRPAeRV",
  "key46": "5zkqP63Cv1LLHhtRGuGqi3pMENEbt5DGqnGi3ETEd4dUqrx1GNfcVYRcL9fBwkpkX4L5zuuiD3wWR5YJAjU4UVmn",
  "key47": "5LJkEoXeR4SGeg7ahTUHgp6dezubFwRSG8kwq46r5dfy8jGuhkRS6kKvcxXYCQXLNKX7RwEa9myWZbeoi9t9vtuy"
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
