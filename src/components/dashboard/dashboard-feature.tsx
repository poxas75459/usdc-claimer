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
    "4NYX6t6xT72VDKMG3PM2VkakbxqMk19vwmip41xurKjeYEupknvPn5Ro9cVCC74hd8u96TPRhjNmvCSMMiqarxDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJs8iV5abcRG8uSyFT51RCWcwuPy8kA8ACehuKi3SM7ndJAmb12XT5ZoJ4H6Jv868yBTaJp24RJNcsQF5gxs2Zy",
  "key1": "2e1raCqoqrD8NFk83AG3KgbQnLKpm8uQJDsmK3Zf6va9gJQrxPKuZuP2BYExfRMHpt2Cdwuo5kCUca8i3zLpWvJa",
  "key2": "Q21YaJoWUFXQxocB48eKCKHyYiv9oK517TbE6cGPtcfpnGeT41KDhmm5hQyUSP4a4UWGW7dppZPDgaVaSB1iXrE",
  "key3": "2F3Zv4WRuMgCM44pYTucorNf82T2ahwphhq8WvtNUYfo5QN6aVvKFNZtnmqKM2oc8fheEHGbaYAiFMz9xNTGi4gN",
  "key4": "5aPbkK5s1TWsxeBwWzg32iYsm1YwQgw5Yv5PrJuE8zCWYpX9H8Pdzm6itRnFG7AEFuKLRZ11ZKL5he9e4xfV61Po",
  "key5": "3rVMeT4wg4g9qE1b3Wwq3jSxuCq6VsrJs9JX7mXVSRKNisVukPvZAzG9eJH4vmQg2hro3V1WTSMCrrHn5VaQzq8K",
  "key6": "a7o2rKGE64WjnuXoWmDUhrrT33yraAR1DhpcGh1Kd32UwnaXHAAG34iBRhRf7egMweW7JPRXXbZu3s6tk4WT65G",
  "key7": "5isS3CH73Tnv95sA5P5QCAMsRSixcYMXwL7P13zRNPRD36y8kdqDh3gz7n9TP5TYGGvcrip9ZJMgPgKmvdZHCzNg",
  "key8": "YybR2zdPy8PJitfCLZePzAbnDK1VU2WRVmJDEXWVnLGFK7CQwEnhcvse3FHruKZo3LzivjEs6wTmtPhkNXBeKq8",
  "key9": "3DcPcnmWUXyGjEt1gsE9CRHrGUySVyM7fXunphEAbEtWjwZhzq93jhJdt7EnbkS8wnEqg25EPYThwGwipLm4dMfi",
  "key10": "3SzTstdqWetkyp3HhQ7hw7QBhwoN867F8FzieCnpef7YoCjcBNHeFSink1G9DBrWtMtMiDYsMHesWwJ2Am11NEXz",
  "key11": "5ht3GZxc3Y1LqjyVfm73sGoeYq9AaVJq4nRiZAqhegfXgnUERSgLp1tY39DofcUYYHzuiS6iMEK39hqpiPwAG33Q",
  "key12": "3SemTYioM4Ek1Pc7ZSfZtu7CgVLFQPzGnWrdhxyBY32KMEoaQEutVnswip3tGB2TWF4AjG6YciyhuZ3QT8GhxtTa",
  "key13": "561K5WeWmjUuce4mqECbHmHCTNUyvL7Ksun5S2jbdySwmLBBiCiFPPAneXrkrGT9s7FF8S5N3yJffJYCNd5dqYBL",
  "key14": "u4fr6RctwBpkRsrrPVq223fFc5P7GoXfRoRFSSM7TtB4FAmuJJgm7obsL9rBKS3m53N4RgNSf2MY9VFVRZy61vk",
  "key15": "4nYZSHUtQLrkSPPuAQAJ71ucYrjXkH9WRpJYNpuXve4WdeFCQp1eWUEnWU2eQwSSBcaLKPQ28gwFah24GftZfzTY",
  "key16": "4voWbzoN7q5wkvUHzwUxXfhW18zH5L1pTQebsQavpDHEEEmfRBDCCJXTFkjYcYqJt5LkqkzGLx1bD3BcKJSchGvd",
  "key17": "2uZVHEZQSc8mLjoavcXi4dQ47SdrM8EixzVRBevqr1EANws2Pe1uGKCDoEw5U1EfuqxoYT5meiwcWbqUjFZ699Tb",
  "key18": "2wqXcfPz4fjA1tunGbvBhbo8LzkeRbf2GnXS4k5K9WsQp6tYhoD2E46iz18Nt16MMKa3rAKbBRoGXXJxuvNCegiG",
  "key19": "55NREjEJxsi5AsbbazLHqdzsBbZdpHrQpF2mmpmtjDStEb6zgNMfgUMCVx4ewubsswoTMiKecdcnqBFt2nhiZxe2",
  "key20": "3sJDrwPeKGjUeTngvPXgzmqoE8EKc5TSrBXVf3dXQY9sQYMvqDu2euLPXgXdjNSpHSHaqcNih2xTG5h9XVS1S23s",
  "key21": "2SH5G9z7UnXedjyekqX7hKVeYNTfgstGCusHe8rWdBQVKsVG15rhKsmzcGY1Mv3AGfm6n9PuUBWKzSGsSeWUjpU2",
  "key22": "5oJwsLeizajaHDKzMP2KeLpuaATnf2NdaWvHCzzExYwYHYCSMvvgHxRGPDDhurwZSyjadrg96ZrpEhihL3GTkpiG",
  "key23": "3L4pWiLjQ5GYSZ6hrTweR5K7u2xaGRXpM23Qze4qNyxiQW3RNcxLeoF11dWn3z5YenE2FR9RvKGDHQV9wcRgNJVU",
  "key24": "Ak5k38sXoYZf8EJopoC24Y2UEjv1WzJjVAaxBKNjcwXrdwiyywQ1na7jwo9jiCPtYgEzqyKyC4usUGhoCbPXY4Z",
  "key25": "4jUgn96M9HAD61ASnSrV2N7CV2DA54sU7uVdiTwGjQtaCyL9tX6aa7CfKKMGPUFRbYTpdsZD497vT6X33ifSxWVX",
  "key26": "475vqTTAfcW6R4TKdAD4NTJXL8cnR5g2yQLpw5FfUTiNKYCsVqaVX1pJkbFXrpmt9b8S5kVPKnFQVFhKJuAcsbDg",
  "key27": "LN9MWi3X3Ecvj1J4zfuj583xrtJpMkDFgmMzHvDL2oWoAaobrPoJyHDZoQpXsC3ADiEffU8EUnhh184H5VcsHcT",
  "key28": "58PuUMAsDqN7mJXPf9SqjJ2bKZBYAm2FzykGXQCXuWi4Duonp6Sb75u4gXRE2xcsfyJ9aNZkVpCwDsxHUALEfLkQ",
  "key29": "2irC6sNxZauNEeWN2QL5VDK8VAg6o9sNNoMDM7KXf7QTsWW3bfG2cqnch5PLLiUTzxfbkZgEebtxDczRU2VYAWhc",
  "key30": "2F6ZZm4WZmhCLaAgdp4QU6QL9eCibtzkn2tcSEobHmZZxJUqNytkQ82QRX7CFK1C1YTzM8iCFc2B8kDhjwsvpNkL",
  "key31": "aDAnho1WWgjVhp2yJKqJt3NgpSquxuoFGWtvyQ65LU5GoW8hRBtFFoL1gPKULxpVZV7Ui7uaPaQw4p8T7LKwg9C",
  "key32": "3kuhYpY5VGPQmYza15X7YEUftaD8e1sCtUWi7c9i2Yod4c2unLa3jmEdCzAAKZhHNjAv4H4WFSyB9nKx5z4oqbUf",
  "key33": "te7VR6ER5aTqKLytPfUH3fGzjGRU1ZyRKjCf3f7JCq6nYzjpZUpEkCE58biorZzyhdn2CRQ8fxNXCqBjUi7vyx5",
  "key34": "4GXG9okwyWJuRiKdCyQxzYRUFkSFXPc8jKuYVwJhmb9y8RBhreUcd1W9TxMUn5xLKVZC7Ap6xsdh9YXEybFD2R1z",
  "key35": "2Y5pD5tuYYXWKtjn9AmidZvi2MpNiZHND4gXgbbSYdEhrq1hxvgUEd2K4LqHcCLbzPZ45BMsR3fja64MAkmz5gMK",
  "key36": "3a4pAMFEmPhWHfEFnDgbF76UnebfNtXkBHv9USsrPpemYK5SHkissu9Bykk1gcKBTxR2C74i1orc4h2UENJ5oWnR",
  "key37": "5m1zUiBSTyF7Aut2oWQTsBjcVX8TuFE7R9qSPxmeZ5DhxFq5o1zPvvDhpcFRfjEXgVNGnqJb9UTx766yyJyNkxnB",
  "key38": "45ZWaQXrg8x74P5DKdyhuKGY7TkDDBTY7yc41uNCu6aGTWY7GrnhEjtk7xyUx5SCgELxd9ZBMER3UgHXRRZpDevj",
  "key39": "3pfYK2HtoRAYk732hsdogbhDLWT3V1et1Fnymir1yquf2emfUXNEAUz4bKsDCvsyLbzNcRGUi1RT3tExoUiNSddY",
  "key40": "4PzPVaxWEtLcaJxy1oFK4TcyJ5hQs8uCkezHRXbMnV9Xvzj6dj4aRYeuKanB8q6vp8GDiWo8qmbhRqwNVj4mrMVf",
  "key41": "3X3C3H5wCjpn6b5SxQh7GWtmouzXKABP6J1EkPXPMLw69pfSNVN1KjVoAj9d7Sxtm8RTPENs77MS8syEmRx6V8zt",
  "key42": "3cnarhmZZwLSjbcz9yzUxNLHp5gDDSN6v878D1DNsjaoDb75achwR8LrkrW8DGAeKzYMjDBJx2tFaMSNZrsCq9Yx",
  "key43": "3LyttRh4x4Sxun9PtmFgVz9HNGVNFQxMBSMPdo4cDbQTtkjQsMzpYPGFsaphZRZ39gciWii92B1uaSwGkk6Y7MM",
  "key44": "3W8if67fJKDJ8pD1FnLcvGZQmC5ZsonYeN5sEUuokLYMPK88w79yoyEwTFtX4H7BuCw1uL5dynPHv2ZywmY5nwUM",
  "key45": "YeKJc3xP1qCiEm9JCWzk9FqwA4WxVawpgHmphkTGNY1WWW2EFefoJKRisMV8oq224UxbGZdApRA3H8HNKjbaD3j",
  "key46": "5zLaEBANYZM1Tf5Ye4QPyiHxreFjemEhuBbJTRw7yYTgisa993pUu7WpMHqJaeJjG2ksPfK6WVcrbLurjBq7W8xj",
  "key47": "2a7ZcAX8NKvQRJJ27HAhbm294zWRN2rUYWuKFk9quApnxrkWJUXiWuKumtfB1BXM7KeXUUwQ6rrjo9kF9yY7rEVA"
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
