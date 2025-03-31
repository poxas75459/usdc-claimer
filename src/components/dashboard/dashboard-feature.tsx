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
    "4oNwFmo4RpfNPVF1EpkF7LZFrdiFuMwiJULTqJ5Gdaa8Lg8KQA1RTWVvEVQqnQ9gfFUMAjo4m7agM2TiqYr7mArQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ruqb3pvF3ewyLeQprk7Ap6MoPhpWABEEeH8yvTbDAzkvAys2CM1BKbER3Khz7YihFNbRg7Q4R2cifesXiBEeTgM",
  "key1": "5Ek8U5bBD5qzbNouSU8Nq27kNvhvimz8eFFFg4dmRNeD6wMK61Y1sy7ZBYaogviH7xwKFNzwzFj5rXo4VEryeJ57",
  "key2": "XG1AyoNUKsiiUfa2oLMSaLC3UuddFScwVposfBnZfpo5Tiab6dhY3xgntSSyKU3t8wcMwZjTbhRfDVyCSbQzMWU",
  "key3": "3x8WhcYU2Xcb99SJUCaT33zGqurQu7RdRYYj7fKbuAmmb3ZGcEQa2tzTeD5pEhG85HvMwvBtMnicfSxj9682yC4t",
  "key4": "4pE1gVAqbo34R6hXco51Jmz6EN4dRidMGQMujrCdQ2fkHn9QTSEqWinGHCiitrdjTYKmwibtqkMEqF114PsamHyV",
  "key5": "KhG2DqeZtbQ7jA9AAQeQbEnTQZgCZLNtmPw8wsnHddopq1kHCzQb8UZHyy1w76B5rXDL7mBaTB3sJgxaoFqqLLC",
  "key6": "YLkWQxkN9EQFwtNWDE1eRYHAuqAvFgQiuC9x5XV6X3XEUfeaRtwuNYW8SSMvhDgBE4XSi4LT3vahTp81adEshkQ",
  "key7": "4wVXBLDDk2ABsXGEyNaTu9q76tZY3MHNu3zZoCAXL1NExS5avnuGjjUPcqmanyVRrF5iDpiVW6eEkhkD5k44HtdG",
  "key8": "5gQZubwqPYmSqMJLRWEkcsCwhkT16dCKuqQC5NkTL9fs5sss3MaivCaysbprv1WNyJ5woMLKAzPN7Q5sX71LzPrE",
  "key9": "92Z3UgR8BRZzEJpVuviRSS2R2f6VVco9m4vKoJuaxwBQY69vqiWELQnopM8Yhi1kud9kM6ZBCjSBQpBhixbCDov",
  "key10": "9yZERGbJo5XwDxymGHKwoSekPeKRB8jEWLcXSY7GkE2gGrde7YV2p96cXARa9DgvynAL9KEiCSRsdfwBiei4kKt",
  "key11": "wzyATxr2m8XkudrryyZLRXABmcMoSaf9bQrBFr9dmgHggy33r7NypDGd63YGDKM3TBvNi9kQRBxexo3AKiLbyxD",
  "key12": "5uEA1rjSFhxNSAbTYkvQBh5WN75azMCV8kGTi9nbF3c5QtPDNY8XphiAtgJzYe1UkHdMNmsNawt79pcnKa7LnH46",
  "key13": "i5WXXg7MxWZLqixp4Hp3Z4SZ2J6pYyYPdLwrMJvQm99341iCPYYmEBAosAm55jnpF6hM4SGcuL36ZNu1wvtLZQH",
  "key14": "2bVGsA5j4LkpsCwzAd8qAuBmM6oKkX7sdWp8D7MmGqQwWmLiJwUp44CgnHug2AWgviUi5rph1i35HgPZSG1sq25G",
  "key15": "7S5nC2ajhek5hxpnymWoUqd6cKCMJDnVM31Wqbxscu2bycvWSDAJDaN5cNUidgqQobYQtZG7gEqHkXGSzagvPqK",
  "key16": "3WTwNsVLuEW6cJhZ8P43rR1uGMHrcNNwXaVnKsoCjf7S17UHP9mhH6vgjFdvoQWetP5VLCKkeAWBHMD5A7e3guYe",
  "key17": "2ZkEt3y2q1AXZqHpvNk8Gdk1xtVPyLBdgWLePCvssfTXGLKT8e8cVo5V626rV1e5rCv1MzgrLZVHKuSXgq7P1iJ7",
  "key18": "v2UibiFa9NV5avLDpXEnT7qz66Kczm8H79doZJsUYxwMhM6N312AFdusqA9Ldpa73ikNB3RYArutXqjgRe7NfAH",
  "key19": "117n5Ussad66WLRzKHcah9EG7oAGQjXfuYU8kYuBYpujhXLNbRXuYMQeSJ1JWs8VAQMzBUFJFU4csBNVcSpagk8",
  "key20": "p4DGwXxBh3PqoZ8cANYvVGP9RFHsRgEgmRkPoxtaFstrf159TeWw2GYUsrGNCaFmMAthJaghHfNQMeKBLrceTQX",
  "key21": "5mSqv2kw6hzqyY8vwVmyeGmBhyhMTnX5XsrkNkUBTyQrjYccu5b3dQCRt62Wz2GYyTv2mnRi4SUZKxqmbfoAbGXx",
  "key22": "YDFZzDeNaztQCg17EikcC6U4QnEPqR5JzXA9udB84u6sNSy28fJ8z6qLPGxBFnWPFFm8BBGybUn1BRwv81khbYg",
  "key23": "59RTwNEtgXfgqdAtFLt5tdtibhY3a5kobdAR1fLfxTVsWP2gBfc7n7XScY6PRj1cKTU81riKcuLnBZ9DJMeg6kUU",
  "key24": "3nWNVWyWN9X45qEDVfP3Fby32yBE8ieLrMmHGboy24QcVxUj3Bu4684ZDHocXtqAveKHr7cQ1qemYgebMSxjy5U",
  "key25": "4tvhNzVpS9DwsvjaV6nwd47gz3QqGNPgzJC4FGwKEeetznCNTbBbnGMsuz9FQw7ZgigsQMhGynYdpRr4auaA4q6v",
  "key26": "4VCdX2CtS5z5hFhrEdoHgKJ69a5AQDZgHQugoi4f3QyqRYU3EkE3ecSU13WsecSmMtsfVySy2Uve5KEzT5FUAExu",
  "key27": "4tALa8tJrjnWUGh1pjjAexLSLLX2yLiPs7WdAZqsU33q56JcSZ1k6z83MERNYVq1Ha2wYux68yuErbHBj1iAfRdW",
  "key28": "4VaSgh1QU7U3ctMWMpaVEutgCYuc9uiNMWSqopaBeq76bpWD3vMkE3aw2NtkpqYLMkYxmyQ5inBxHT7kyun9iybX",
  "key29": "2gbi6krMB91JXRYdDXHN8rE8w8ov2EEBkwyVnJoESt37oXoF1xQhBsZ1Jcn7xbeYynjqXGxnU2yZbXoqRpTvZQbc",
  "key30": "5GvdgzRRHjVjzQaX6Rd1iDRxEuYozEAEYaRHTyN6sECheVSW2Qigit876gya8yuzUhT19idgDyQJoUohsZD6PVdT",
  "key31": "62EMKUSydYj8UBJGB7uKg9whm85DFjmGXgj89WqKaAW83aHdeTxmoZYgVkURx5KKXF5t6XUc9gm5XfuQzMXrmeTx",
  "key32": "HtkBoFrBNsdcZ5hbbp7ojaKvetyy2yMaU31FsHDxMFxUeuPtyemEqnpK2MA79PcRbtBDL4yXe2NarVaaUdskPVu",
  "key33": "5LARVGDPipEPtG5wDftLxR5XuY7WuGjP6JTTaWUyYPpmw8bM48YiKc2BFBjobtfAxejxGLB2zwVb85eCfs4jUr4r",
  "key34": "5gg8Juhb9z13nfNoYnJEFBup3kVxmhaEfXa5d2yRUhvfRv378a75XpKrJXni9VJV7BPMSKnPNU8jUKaG41RBuqmu",
  "key35": "4HgeLwYjJFT1pAJuH2cSMt2hi3vDxkExER58BANb768WT8AwbBsfR4cTBopokMYojQxXdLPz9fLoA9L4jbTuuz6m",
  "key36": "32HqAh5tKBVEgxTvSJhHxzcoSam38eex8N8HxE9DaE6jwdj6qJXzg5nxHPg86dG6JWrsZndor9WPKxkg1yhcEXns",
  "key37": "WZsEVjC96Pdevxp5Q6bFQKGMx4XLZ6YTmVXPZiPtWak7bqRxtrzTzEr7ubHneth7E8tuAoS6vWUTcoAyyZ1auES",
  "key38": "S6vqaVC4Ffwk7guWyvMEyFadEqVsNuE6rTC27yrf8kub6NUkkVPrJaGnmdAfhweJ4TAY3XAdLpaoYNPTxZzEToM",
  "key39": "4guJtEPrXj2BSjqXD78JJNhyV7ymEv5BTHdkAc3kALvEbi3LrBsaY3KbiR3LZnqxXYkVGX4QLopZiTWBReq7L4cm",
  "key40": "51hegLU3Sk2VgMhVN93aTJT3GKQvphMqXS5wTz9EuhtBtS91NYPqSTMXoXuEzm1inkWS4oXPeqDu3YojuCj3NR7E",
  "key41": "2DdC27gGxw43A4Np34W1jxLpdKkT5RK5kteYwWyzbND91x7wRByNoXm4jXgktp1gvz3VhqnbkermVHftdscGZbc2",
  "key42": "fiMU9dneDvUrwaXas6ZtLcYcwH9quJp2CCsHangkLoeh7KhhdtLUsvdXQdG4EXXi39wZiX7uTeEc31CJ3mjsc9Z",
  "key43": "4rBgDgjJQA53cFiQtgQutokyU6AN4rjXVsuM4MFPnmspjxe9K7JHGoH8BLi8WL7a1BkjZS3Ud365mGt38voy1fQo",
  "key44": "5PZdbC7Wv4kMHdHFxJhAVyaeBdaB6k4oHCurs1k3DL5ARsPiARM7wi3PaffAzfeKjt9e6oEMcXfwy2xF62Mgw3gv",
  "key45": "5L15hefzpXovbkwcdDfWborZZy7kt4yMa1Lx9yiue5amRPthY8us1zZffYdmir9ijocKzGKAAVgSQ9fPbVsQwHHd"
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
