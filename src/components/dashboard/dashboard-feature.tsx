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
    "QqP4CcwDYjUrktbpnPoh5CBVBkrP2Gu6XSMuvwUoQSsxs53rsGcfW4Cn6CYGZqtkShwTw71FhmHJu74C2cTCmj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2au8fR4N766b7AUonvqyLrFJ9cTJdacNAzoUSZ5d3f7D8suKdofUru5fRR8faBvdfPgbFeVC781hDyfpuLLX2NgQ",
  "key1": "2yKU5ZcR8RB3FtusV6tMhEwmKzkwDvJKPrXVh1b4aRnGyAjm9P69QKpR9kjtn2Gdp7shK24hbhM6ADfzn5NSjbXK",
  "key2": "4UV5b8XMin8AYz1fN1aKHnn5gkkSJ6r2pGEheqUyQCq4GnaRLVrobJ2bAp31fVfeycE9ASLTjZL68YWVpj1gf67g",
  "key3": "3KMNw1Tko76q7cswhRQd1g2XsiVeqTDhoHbjZB1gGJcL9iH5FvhVnBN1NqTjFGDoFbccaXt2Nu6XdH4fuksAGDM8",
  "key4": "HXwvwpvPAePwm4pGrHTqh2i2Ae1ripMQR22vttTbnat1dZiFDwswUN9NYU3rtDTtPcKBJRmM2iHShBFeY5GX45P",
  "key5": "3Rt2QHHBjxTwqGDp3UcEDkXrrwq2xcbfTjHHnKSmxq9R6wxeaCcMHfnWZL8eSu52jSbMuUpDaqM2VdER4Hajn9xK",
  "key6": "7C8m7W5ChMzxuRcPGb8kXkrvFwtH7FtNshyRAmA7rikx4cc7hYHVRKcXjvMhiTzU1XSpxv7qNCL2r2C3HuhQQ4P",
  "key7": "2TisvZVtFEiaTcZ8Qqm8Z2mMJgskXftAGHqdfz1HAD8jhfdi8tvE8duoiiw6Wq2QDCos7i9WMP4Mwe1LZPGc3WtZ",
  "key8": "5NsAsXwBYYX7S4euvZZ6vV8kiZ9ETTeGsHHieBwjhueFymmmHSomqyj31P6oTxzZJ9zYFD8kQAmbBKe525UsxS97",
  "key9": "46twqDSXJujPERqQ1dEm1suQquB9eJGojrAm2ViqVJJ7t2M58BwGrFuEemNFdut9eCB5BToCKdzev9TuuEva1L8q",
  "key10": "4j2SQjAun7QuKAD5p1ga6DNr9G7RCF8jtvcZ4ASzLpaPGh8TX95Ss2vr8Tkbayax4SVTt19RjTRJwCUWFSotBLM6",
  "key11": "3GpLMqY1jSYKmCuEz4ZfnE13PzCuBGFMyudPfEwnbZSQjVhS53BDZN2amVL7hKZkWvb3yzeaVGZCy68iLN73Mdke",
  "key12": "5gSPuJ5FzBixGDRVLPemeAzoyBLoV8v1WjjytFTCF7dVAUbmGkTJNsXqTpcAB7g2yktPZGRuhq2yApdQ88QvhMc7",
  "key13": "4UoQLWAB7Qv6mEcxsKbm58u27Zp1dMFA1JVncAC1Z7hrETnVed9QK4BGm3hp1jDYFkoamU7rSrxTuPQvYt6VKBMN",
  "key14": "3vsVPzHUk7AYBCfLrYnyeq4scT6CggijqcAxCAFbqeRc2taSq4Eajy5J511CWE1ju7zDfPgFWk73EagbanmL68fS",
  "key15": "3Ti3yFBZT9oHnJBJc5Rz5YXD3miryEq3nMyFE8xa6JtrPwQWKJ9b7dHe5Div96ZxJmswa69R3L1seakuykY2z1Vq",
  "key16": "2LrHfZzrQneKLaHUv4YanrLWTq6q4EE1HbTXCshFJZmUDNj8FjdkqNc54SKTTngy7yEinLfmwEHikWJTDhy45RiA",
  "key17": "28YTqqP3GjC1guZE1Q247ew4iaCUWd2UeoWUcjV8oPaJp6WmkgUxNjWD2egar8J5D5s2ejKUYSUDCX8cBuTt6fdK",
  "key18": "5vBiSSmwThSuj3dgLJuxBKDfNWBZY4z3iV9nvvg4rpmZRypJx1efH5hZCQFiQgee3cSnXZzxEVi5XZuo9MXo8vNa",
  "key19": "5jXqi6MgvLx4bX9Xmcj67FjsTqYm93UhZiHb4fLc7tznhyVck9MQGWdjkHiJGz6fqgbexZSnRsjZ7Vx9sTsTEw53",
  "key20": "3j47zzjB3Eswo4JCcPDYKEmNrvMr1EbSAZhwXrfgJB7HRTNsmEiQod6MLxFjFqTFSPR1YTz5jq7NUvmGkU77eywY",
  "key21": "3zaNswn5dMgEHuqif4wKYT8vnPwErvAHLhMFSEk7YSBbhHUA1VyFAEWfPB8EokjETLnCFb8AFCCMqGJ7cXK2upGM",
  "key22": "4ZfzLxi9SBgNN6iyht5R9xxArtziZNim88QGVwQT9VC2g2KJySKXcX8BFWqKvYWg3nwFK8EorKwCEVuPuJumBfVz",
  "key23": "iiurXquXwxckZQQHLwCys5Df4eErFRoLhdHnb6A4MKUb8oKNVpzXndTXkxtTkNeyXRr1sLY1yASmwxwYkYZLtgB",
  "key24": "4WxYqof2xEbmm5imDupwKjKDqHG6cJJiRag2T41UZD3ftk9u5Ttz9sQo9bRR1Gq6eXVqgVRX3Dr1ekeRhCyjBcCv",
  "key25": "84Vy95ZFAXbkWsukDeBPqWrt264HuXhwHMVsRT1K5mF9JvQmg6jdxJfWTY73kvNMsBsiKSkDSgqJWxewBYxS6iM",
  "key26": "5UkvFm2BD8LFe5J7kuqDh6EA11bd1Kfy7ox1zvN43PVbYrJBorkmfw2FE3UnThFaw1D5dPAKffCvDwdyEsQp1QjB",
  "key27": "5RifDRSE6394iB3TK3M7WdwYutttgCoNmKRBi7Zh2gCbdvAzMa2Q6df4pTdXz1XvdXvs8fVAKGdW3U7CgxWozxAm",
  "key28": "4swBdvGxd4BcQicYrPdhD6S4ccyUSjwgAG1cGYzAh6e4QTZZkeo3GBcDny46QzfP9n87EFWFmkxTPEzayggmsRHu",
  "key29": "25ks3mE59poJYnR4YAVwrdnjbd7nxTahZDdHZSgcgSTn1Lxpu32xP6T2qLm9P7ueYd36ZUK8yoi9C7YgvQXYPZux",
  "key30": "41abgUkG9bAip3nuzLMNnEBA9BygSRH3QNBNKbPiWNyMVNvRUeLFEnBZJCoVTazCuYAooUvycgGjpDCNezp61ueC",
  "key31": "22EJduV8FzgX1zePzs36iciw5fYjiZ6CrpD2bvhnTK84ixmtfE4TJhHLEPRKVuEtsCVjwxmh7BiWXHUmh2QEsv7p",
  "key32": "31taH6EH6Afe92jeja5AmidQs5hBvptHbt1d48HKz9kFKdHbQoxzXWKLsPQxvXdhDsMpfPXGVAkxYpxiKhStdkTS",
  "key33": "XsAdE9GQSgMsVyoEuCrAy674nTQ8MfSV7hhzVifSq6rHTx7RPhWnRMbZrRhq1bUoXe2zvYDXtBqjUC5tVmLxxdB",
  "key34": "4yqNpFf9JxAa3uR8giwuupVJ3sTMcr9SLxpZpUYKodyHZymZ2uBrq7CCjFEb7KnDoq5dskrcJZLJWUN7jcWX13rJ",
  "key35": "39h6e1wXCgtgTeejXaGQihL8bLdg1eP7ykcds3pWUaj42RNxdKcvksuZWMQGVgDDspvccAUy6QNviQMuQXdfR2af",
  "key36": "3dCscSPotbSXb2gH36jnWXXeB1j2svpfjw63n21xPU6EZaMwVVk85crDfoaEXE3ZPrHavjULvCj6fnRnqbYMGMsQ",
  "key37": "5cUxPLYEjk3FwEoAUmbgTTkdj4A31rqGxc55DsrXsgEATMzN7p2CHfGR4bvhT6PpnUAzsrqsKxs7ccHwQwgxu9Pd",
  "key38": "PujHsQwmAqn1qN4fchLurMh89t1mi8pFCRsKQJJiNVvPPs46sXoT5xx5dJqxQw3tQo3WrKFrDLHEZFXnZ8nuZ9y",
  "key39": "38wK8YepcVrst8iLNufWAMV88QWFnf6Wy2nQDN2QHs2aFvNf8DNVkV2v5YfkFnscVT6pdzWUuX24Bj9MTUWMaYYf",
  "key40": "5GLfLJad865cmiQqcAxvB1yzZuHpie2ZqwPEyiPs1fQFdvbgEefuSWeEPBTi3siKw6SsZn4AX4B1xCRD24yydvjG",
  "key41": "2yoW82srTDayspUpUCpU99DMXVXUC6YrSuivasQoZLcphtYviN8SANDCAniFXCigq76AhMVPDpCwWGDSVQFGqYfq",
  "key42": "5J2HtsbnqtXAwTPdiSLsLqj1AzT4rvaW39toCxrTgw3j4pXJxzkmfxCC3NixAcRRPiGAWb2Exa4LJiYiYFS2Njts"
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
