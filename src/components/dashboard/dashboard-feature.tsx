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
    "4XgALFQp89JEy3WH7DSYjLvoaFmd2EHXrAzNmuapxpKP8G3o8w4Ch723isEnciS2a7CR5eNBU9GcyCLg6kFWRsQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2myEibmw63dot6kTAz5D1YbtA7WsoYSagS5QLoZYG3W6x7xkYpciJy1AgEsDFY2p7kf5EwdSXnVxphZCaoBwsQ",
  "key1": "2eemitAnRhsyHHVpzBa6HpRqVgG68vVCFYepM6frY7e3zytKCQoN9xMcPD2SLxdotV3z1tXweriDDc7NMsE9fP6s",
  "key2": "3CHqGuU8Vt4jdpDPwnY35ZT6zCyJrRCFocVn1o4Qx7aGNth7NuFbS73T8E4Vj87ExEP1kieTVRs9AYUb8BcyNRy2",
  "key3": "2RtNw76kMfi11xQepVeWtf7Mdem3T4Nrank42rFK3w1mvUegRyLt9pkN3u7LAe966qCKhMZg18kxZxUPP5WY3ZS5",
  "key4": "3LuGXeykqaVXnMmThe2T4gEj8ZYnQTxpFZj9o2z9rdu3M8X7Kt43Yd378rQGfWgYS6BBHjEvqxxAkhQrVXYvkEwF",
  "key5": "3B1UkhwS81jKPzMr3ApunW8F17QrUTWKhXMqCzxaotcA3U5zpgCejqKbhg83EmdHQiKtQ8jCw4KSfBU7hP3rQhPP",
  "key6": "JabGy5t8kL6QSm3cpFQAfkrTgc3YkGufu9pGvEgtJhTducPmdVchhxKW8qnVY3ogyZShKhGnNFHupunwxrDq6vT",
  "key7": "2vZDyF3aXFUP9o3i5ytUYaL5XdXQKqP3arbQbxWRkW3zbJQeVe66aJ4NBEVUEp7j7mujsQD6373PwoaiVAe33UML",
  "key8": "XVjaqMsQrJHRKJAf49GiSn9tJ1ppCEfhkKm43g2DGdoVvatZGhYfAYSLtyqrcCU186wxceJbPqGaAhPunwgGwEn",
  "key9": "3ZL3A9Vs2Czo2ye9n2FmdWRye5Ly6jcwXYXLPrgyTJrgwPRmzXVQdfME72xJZ3NKo2ZRh3RJVKAwBHkUcgeyENBF",
  "key10": "JrSP23NUquEu9t34r3qUZ9tGzoNBHUDEnd8RpJ8MD2UmayqFjp49JD7h6zJm68End91VF32SBrFjjuDAPL7S2CC",
  "key11": "4TUzCgwdzVU1w7kdtHQLPSMeHoyV5rnmSG1ufwhLGC6EEP6WxvCV8Vd4SahpgwvPNTzWM3uDXHTrHJYimn9xwRS7",
  "key12": "3gPphxhd6RS6mgtWmz5fwF9Qwj9YYe9KwkCG6MWXUAgwTH2AA3Qn9jGYULSTEyYZiv1JsgQf5EjrJhbg39MvDgXP",
  "key13": "2G3SVgw15d2TUjYqTCQ1vNzCxPoKr27b74j8mp2qc3isa1HE23VJ1yrbceLb6Hfxx97L2GRsJFnDJuht5KhKazM9",
  "key14": "3BCRERWKG8WL19RyPbuCkXdJEVZd1163vZWoeeFw2si13pXGbfDCpxuTrjufo7YKmmkYL1YQtHMWeJrKgvvoQp2P",
  "key15": "2WFVs5euzjyqviN6huxVrD8QXYJceUZNHRBcqw5u56Fa864ME2bHGYMXeLJ4r33PEbAmC1jXpJnqKVrAG5gyp5KE",
  "key16": "3M4bsFMQHHh4ibgYUGWSWyEgHwr1WXVWEgCrD2pUBUQedJKBt69MHUAf6u2Lw5su72sgqdUzaJ4MjFp5NYWFMioV",
  "key17": "3ryKz6ePJtRfcGhz1dBAmB9yfxg9yPgQD5xyfPZQzrK3esFikmkTQYFQPJH3kvTSEfXC6UJD1FHF43XjbVADa412",
  "key18": "4caAEZ1HGDpbgwx6U3WFcAoGLYNGnvRpyS7YzZhNBtFQxn9rBPRVQDC3Rgsh5YCTojLaXPcC4rmGHBHdXgyZkFSo",
  "key19": "yYLw9kTYbwtXQB9AfGk3vrU1yegct4FgwuefAbwkhcUpXizbWCbF4M76XwopcUFd8EhTvm3BfmRkBh5LcXb6HFc",
  "key20": "2wgkEY7hpf6nceWHqifrmNvDsXJ9c4wU7XFtBv8ZuZC4hjgiKaWJw2QGBvYrSEWXNh9qzjwVDJxjBXq3cJ78UPaj",
  "key21": "5SM4PeK45utfCcpjdPf534VFMAyBbcgCKY5Mf82ppSbFsJ8tu6i1wmUo2C9CA62UfJ3tJrJWRF93rReAWWjovftu",
  "key22": "27DZB9e6VuzUob6H2r2f5owfzfbaFbEyNgeMDjxGx8D1YN7i1WbHA3mvLNLdpPxiYfqZFyXCMovYjmCnkXVe72wx",
  "key23": "2ox5MPNLHLc28gZN6xMLvcNk739peVmDdbZAKHddXQPDa5MYYNAKvsZW76HS64i1vBEHtdbdavSpTkgWGTQ52kmQ",
  "key24": "2JK2JmMtTphW8g295zgGhLMnHURebzjAs37xjiJCMVMMtXJ9ieh9GKFUw6M9HWopQhjRDCyyPEKQg2PHevPq5kqo",
  "key25": "4g5jkRyTWBBqDbyyEVrQ2qpquDdoHox99eZ1n6fA5onrfNUJmWNKpvfuXGaRkSYBpqvKvVdogT2hXC9QKV4MnnpZ",
  "key26": "5x5AtrH1LsrMDUdA4dyhKhiRaH5NvxFEgWnbLGeJY2C8a5K19EL8JwGGQ52g5ykN9AXp1sUpR6qhjpqGyoSZ6hcv",
  "key27": "4TgHV7n2MdeyuhfmNopukrxC366nqNDk6ZDYpPCp3mURSwpx2YDnnhCwPT4mA13kDzeptMARGuZ5X6t4GnbYJD2b",
  "key28": "2GW9ca1L3V7i1PARA7WwYTDkbuUyT3siupxFUaY54SvGVb1myBXnCLKnka8kX2dtUatQdftTZwtXC2BSy4ipyRcf",
  "key29": "2NFscqoV31xNe9GwDSjGtDECUoJ16CZo38DRkKwG1Nprtkrf4fcpGbZc55i9fcgmLUBzVY956qhDpsbwyj8yDmBC",
  "key30": "4xGB3oqA7xphb1kfkJrAY8eNThMYPik5M4UTpHhVnVuzmvkZRzdJN1fMDjSM299CKmN8djHhq1kmkHQJeAcaJEzN",
  "key31": "5jN3FZitZAF74if8Bs4WBAQW3VZQkohZh4rG9R3M66umwiFHFFH8D7ix2mKBzWuxfW69AkqcZhc2tRQmMZGoWDrj",
  "key32": "2qGPR2ukFckAhfEtKWsqnUvQd9dijef5dFJwb9jsAg4oHPPXmnf47vq1no8u4SNGJnm6m5YvsdqZ6Ki4it4xZbKe",
  "key33": "53oGMcAGjuhraz1ckJ8h41VJ94DhmFyJWjWtqtkEHpzXCr1CaUrcu26BvPFCAjaPTYTaDTg4nw2yng7zorLdokie",
  "key34": "4fms2uVZYVyNQhSkKpGyEA2NV2W9tZMsPgQohP79N9jUmySCGcKjzz83SypG7AcaHB8BphiM3RGEBhKWsnZrDyNB",
  "key35": "2CxQxCjPHqcqaMnEYZUReeJ9Xqz8eL7k8ZfgoomSG8QuxNihe1vPbsufmuxV3vaC1cu6bLWaVTZ6BS8X1AHzXkM9",
  "key36": "5nNZuF6VFLTDfccpYMWj9VheGNyUpuM1goi1gjRrFLZ9Ws9dicvAZyepdh75LG2Tj2RV2JaFf1wC89X4SLGqbx2d",
  "key37": "2YhRrinEpQq9FgnA5d2JMzpTTWBhrXD1fzbvSxt9sXGCZweFD7WXfS9ieu4xREvgmvR8mf7QtzgJHZUC3yoch8yk",
  "key38": "5TgdACF2eugjpqVVU186wsQMzeapE2ZEMzhXqXRYRaQttq41BQLHKLqYrziChmNKSFpv9N1QXFryjy3etYk8TeD2",
  "key39": "32FmYNxmToBcwYvnBdMpj26s5k2nSxHWBBeRzhG7vWfQ4k48iYaRwfbxTQy8Wtk2S6VEZvu8o2zt2dH33FTw7ewW",
  "key40": "4VY11cGPhS6t8nUceh8szHgvVweopm2RtXzKs59yVnhFYSVgp7eiZD5qCAxPJQokfxDSWknjQsBJB7CWseYNVEcX"
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
