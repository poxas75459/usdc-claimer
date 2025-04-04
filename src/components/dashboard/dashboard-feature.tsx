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
    "4Gt9NiMWoeLhTRf7AfrHRGKDUpD1ViZxJ5jnH2ESy2bQYpgJLDGKqsy252zS2sjmgGDUqtdE1nvX4QtkFgqSaA1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWm5SsHW2w1gmNfuwRbMhuCSBUminNs83VCgSkMKtD797fNwQ5H4aHY6EHVT8SwiAFEZSLLBCBiNb6nHe77DvBe",
  "key1": "4Qqap54zJRfgJJRbrhRaBU2eCQiUZZayX4eyzBNynBdpr4c8ziF3oA96o8QjDWHpdUASC7TcsM9owkoL4M4ZTVmi",
  "key2": "5RYMv7YXcchDxwQ8qDuv2NDfgY28QwRNJwfpiGXSPuaiz1u6pwufm1NGYMQs9a4hfb3oswKPu9ggwKNPY2q8oBVY",
  "key3": "5DykDynBrzmh6CFpnQS3GYdA98S4xfrUQBzw4Vr1NTrDbYzSam9PhD6FMPueewTvW93azx3v8s1eL8zXYmcAXN1F",
  "key4": "56HoDzEJoyzvz4tobuv7R8p7UYRdwfF5D2FU8Kd9KAehd9jaTi5m87JXpZLc5Y5evn5PsjJKQ2PWNxP7z6exyvFK",
  "key5": "3eUp7DYWAz98mVjBGDTiBow2AYWU9sSHC5pGrkMBSmQjVRt8zKMrDSCpkj2kvcQ76wJCFP6Q7N9mDbe6ZMUmeG5G",
  "key6": "5eHTddHPKZCPpQkeaDvBzPHKjFcYqTYmN1ghtuzx6HoZZqo2ENiR4PBL8yTckz9XmARodq3a8omiVHCtrXk4nxjm",
  "key7": "3ajCgihJKyLFrcLxDpgGYCwdXRxMtvagKa9Kt59igCwmrbBModsqc8Zjxj4dKE7pg17Dt8tszacupkeLn4FnVoVz",
  "key8": "3FGqGU8gn9S981WnAohNQxMtqZM8RcdbGKgU4ioqheX9PJd8xQFYTsZBXPcHK4G9DBdn4z2AnvyFKhec9mqw8KSb",
  "key9": "5Y3mQLMaTZDTCoA2LBXJnH7j7Qnh2ARyyLzYT3xmLZjNnTeLtpqReMABxpQvXRXJCXyGfEYPVYWdQD2sB5eB4F4n",
  "key10": "45Nwfk5VAhYCMGeUT8qe5VvSYh43jWnu96jLiaSHUX6MXprRkVzkkiwdX41x6ParLGRkSaGRAMJgUvQQdS1GKoto",
  "key11": "zGvxTcwq3BpEnKMXUfC5bhCmnTGyjAEWs6DikQ1M9fouX6PwR88noj31YyU9yY1WGiB6bcLWMrnkdNRB9RurzML",
  "key12": "294j8hNqz8VP4ZH9JQdKWwCVzxAQrSG7dzDZB4raxxjGVk2a3pabggNNc8CsMzUkS6BhxK8Qq5s7xsv5tpfF2m2S",
  "key13": "4yFpJuMfPeAtPrUPJVyQNExy7NSKYiahsqroH5Q1WNFufbrxMLu5FVcuHJKGxzzRmJ6ydeNaq9PogGFCatisvNTA",
  "key14": "26NQZwv6y3q5CvXjQ92nEV9sgLx39oKxETLApzmGRKUGJ9YkVDFJEDb5MSq4B7GPpVaaWdev29nkp486NWGiNyJJ",
  "key15": "2aCrDC1jeeLWX6tQw9FWKAHa5mirax3oNVkas5KqsSoR7cGQbYSDnnfUMvps4eGdDyLyLiLp5qQmAYiCG3Zw5jJT",
  "key16": "4JbmzusLKApSkorGvuYTTnAkMnvj7G6SvFmacgHTCcFd67trFxTwVz78XVQMdYNZBN2vs9o1taw4BkCFk4SF8teY",
  "key17": "vioEFP7mj5GgNYVB4Su7acKPWRvVeNDqyySn4U3ht2kigJ6ncYinYgdT3xtoEZyocUfeeR5uqQiNw5gWmPbZu6W",
  "key18": "3k37jjfMvXa8B7AfxPcm3Maxat86dChJQEd5LMcMRhRABbofbJhzSSrUTcgwyXyXbihCwQCE8Rd8mBHXXFjirPh3",
  "key19": "3PwL1UG2PgJyjbYQXoUqZMRQyDULUXexRhu9aESiiPG45HZ37WhWvTBNxUZA6ds6b7ecCYo7Ym5r5pDmnsMqP44D",
  "key20": "3NqLwnpnK7tVrMxV5aAJBMhZq9q9Zcvof8Sfsz8PZyrHGyuVtWxQAyRJxEqrDu1rvgByakcwdzK3tZjX5MNwzLUG",
  "key21": "2BdyJgbNu7wzmTVrnstRDaXN9wxsafN23ki1YaJJ8Yu1qmojRiqeAuzBA19aezJ3vMEqf7opFP8u2wne1BrwMhap",
  "key22": "3BM4gr5frpon336tZZjnMzj4NFMpCmmkDM9bCxrucn67jLqmT7tQRnARjeSstN4xVpkpCwfKAN7jp88iUaduu2W",
  "key23": "44EXDNKubAD9ks5s85GDJcy5zEkR6XU2hot66sFtQCZCy9ZZbAHswMifun3TXh1fMJGoYQ91tiSrdu8a9Jw5sKMo",
  "key24": "61rxJDCRbPffRRQn9ANwZuR3SqnTe3DKpi4F2hvoGJudSz55cCzZpbBa8dBWJqPuwg6Avk5ReyeCotCZm6dkpNCb",
  "key25": "8n9BJ4VXUZ3ZgEHu3MucxWcgtRtsbU9nRMt9sEwBC8iQUmb7XBD7ZR6dJi35vhuHxx1Z9dTzZcUJC4YE4N5pqHB",
  "key26": "2RMBjCAqiffLbfCNyz4srjb5CK3mBKuX6Por3Gn23UKrVGgJDAcy1TEvPEMQYupeEP6MmArF4zJSL321B3JdE3xf",
  "key27": "3T4gjWPUyAXP6hRQwfVLJAcpPUGodA4EeWVfUHUnoZwSdSoVdVCudk58b4oKXEjRgDr3kvCMNLPv8CwU8AzA6WJ9",
  "key28": "vP896XzyrrZeJaQJVvFnQ5uwC2s3BKnQ9gxNgM1j1YQavCygHhhzxsEM65RuiCZkTtTtsNjY8dMiiuPvYJoyuK8",
  "key29": "CPgzcWTairpB9PBHYWfWCqLC1CYtMc9MyrnbmjxXrDeYWWRVYMeFuNA4eWft9BTMV15wNaQS1m16DsWE5KWBrzE",
  "key30": "5qaZMoHPV8nEnzWs32QXzHdPnQZpjZW6Hbnh8qrbvLtqjkEkWK51WdpciDq1NFBE92Y57Uv4cRyQ9Vzeau2LvGHA",
  "key31": "41oosKHSc6abLKeriQSbkqL1KcuUnZivQAQmVqS7UuQRJAUvCcrqmEh3VZNtUxLugUqmYzb6jeoRFK9Fd2uP74C",
  "key32": "5mn5xX4JMYSgXiTVS1WVuavoRRVLsaGYnS4zQpLG3kG7tAoJrecS7ocKwj1f8EQLPSkGhUQFQmzfqXq8CgShmaPT",
  "key33": "umRSV8ctTbe1MHQm5NjTsaJRsodNFBWykRtSfgsVHPnxAhEARsFrqDEmRRKp35jHYQGQZrbZXL4hNZCQRnyfnhM",
  "key34": "QFkUM7jmZLPUbRDBy4nwRZpMBLrpXmy6ZZm4gkNU2Gx1bcGJcEyxndyHRST3a5Hn5upLxxbQ7eb8HQE3KhYdn29",
  "key35": "3N4Dd8E5aghiSrqh2JH248ty2R5usU7BMygrfW97CREVH7jdSZGtGyCAfqt5M9idoL5TSibakedZEpcr46KKJtA8",
  "key36": "3aiVSa4osFPBzmN3JjGmj3Xuo65uDXvsmwERVGUYL9PHykLkK1RnAi65vZiWFndM1X2qG1uJAzp9wamw8snQpugH",
  "key37": "V3fkSnwVHLbB1VcR4oPaV6sYDH97tAbC5Ww3zY7XegRAaSkWhViBv1AWMWMBgNb8Xdm8hAzCsgN7rRGxsbApzhZ"
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
