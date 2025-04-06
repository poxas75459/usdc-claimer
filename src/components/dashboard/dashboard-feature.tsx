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
    "2DV5AftyBLyuS5EMDYZU6ozxPEeFevRsgkp4spFR8WVZrAKtdiCkUNci6GM3cx8X8xiNvvQpf9QFPonwcDkQNUj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmYov3aXoy8EAQkzjxa1J7Eh3g8P9fieDr8223zaKAUBe6kdYgrkvzMboNknVa5osCFXCtnd17YsWVfjFaw5doU",
  "key1": "5nXwRuSdxHGNP2p7npzwkFK6BkdPn7QFDxy9AkrGcVbRYSYuF1GjxtFpQ2Rha8Q1nGHrnF7Ro2pKKDDrGRug4jRY",
  "key2": "5wLgCEHMryfJpLZ4Ya8ipbFSzhTENz3D34X8vL85guSrQR8DjSndixokFuqfBS5QoNRv8ZHLnjdW3SJutHJPjSvb",
  "key3": "3axn1cfHYcWUsZ8EYZohhfbnZgKpk5ohDajxL7SiTG5AzxGjL84Xy8osgZDaqdnB1zwi9BnaHeT6agy3w8xYRZfF",
  "key4": "3LeMmqVGsxrjt3Keae4KZcc33GUtEPF67zViJ6aGHsw8SJwpL2qER4crgwoSKy5aA1SjGHf8Sz4havcxMXHJL7mK",
  "key5": "5U4RW8ooH59mohWcofDY3DN8FJShsiZdqp7YPWmWwZi6V4QCjsnb1eh52JF8isQXUjQqUA6GDggNxbHvsrp7nq51",
  "key6": "3yE2AkkpqT2cr3Ydh13o4idNRz1GBKNbQ9EmnB3dH99wcsXDjN6mLPAX6MNAbRheiTJ4SG1zRRjn8psTHU4obLji",
  "key7": "5UjLqQiciNkHe5N6oqEwSVY8YU8YebyMYZ1W92Ck7uQRj1At94pGWDzMZGhreS4c7miJgrH86ESnYhFNHVzwx4FV",
  "key8": "cFoxvqmeEM5eFZhzSC79M41DFd5KG94Fi3Peck8bUo4srCMBqubZfsF1vmQaN4WCqFRM3PqkeaXw4MeLzeBTVfA",
  "key9": "YWSF6mczrbUfLemoqmS8WBDcitg2XFUaVL7DcYumZ5Ys6gCTP2mqr5hHHL8JNu65tgENa5kBLF3fWy2pUDSJYqG",
  "key10": "dY9UEJ23CHQMgSjpV6DCeriocyp4EU3A34s4xppxyACTYSaD646oQS6ffwUmxAKgLLxC3oJdRFR7KkCpRfUnFso",
  "key11": "649RjMDGxfeoDX8aoLpmqsr1FHYRSvDRLerTX1sXRPocZjYn369oXEJCoYS6sfQpqiFZbjNEdwZvKcZEwgCuGLf6",
  "key12": "2qzEg2yTHEr5h9zpNGDaxJgj5yHrQwehrx5xFxxVeN1Q7uoMYDJNnet2ZgdiUi7fxXoqY4C8RXp8huyD137MepRC",
  "key13": "5x7ZxY47uDLZW3c7CvuAPkMBja1L5ecFCJoR8gFpcsPoQGRWt3tH4NvdbBQjZR73CGBcBzKKPdBE7rLK6otrnfEW",
  "key14": "F3WNmxRzYu1oBhri7pKEXLYjRrAqRVwTTFKFXhj79L8DXHqg5xzno6b9dhAMCFTtMu599EwYV2fQLv1mAFkGuVj",
  "key15": "4MGt6iWmz22qrwqQzmB3CCcV7sqeE8QahRBaUxBzRW4ddmjcmcS8CzWCKaAfa7o9iWiqt3FbavH924PgbQJJNJqW",
  "key16": "67JATJpnKyLYd22TVEGE7Ux36MEvnrcfWNojvGm4eG14sWgVXbmtgjpMfMpNh3G4V8qfQJUCSM2LFZuBUBene8jP",
  "key17": "2KejWM8txJKHumeTf7QTrLSRpPyVoLBZ3A1bEwaZVJPuyZK6Vo1RM6tWor72ESrwQCVQ1yULgfgnPoLezNmgbPUu",
  "key18": "2LqnP53CZxJ9QkWXz948sHKimfh7ueEJ5suhmXNjp8beGPcyXeZRXZU1yoQLS386U6gTeuWwY291QRxP13Y3MGFr",
  "key19": "2kYN5Dcb5LhPGmJqFN3VpjmGp7EyZWMnFtcVF21NZ8vkySHtYvE6PaqNuNA4AJj9ZdxgEZXVVNjm6EJ8cDYjfJ6D",
  "key20": "5uJrEhsqtJUQpVerUV6q9vK9yaDBGANwMpj52qiR4vw6JPcPA5DmD85Hy3VN8DiLGy5jQcaC3U2oKEWx4BpZQsG6",
  "key21": "2aG2H4jc1CUdZ8qkqLhTnBKy5YWYPnzbq8djQmCXRQHy8dCme3s9QN488YtEQ9zM5AcccvPWRCRruagJhkLx9Jm6",
  "key22": "5s2H1VoJQTnUb3eMDEXN4RTAdMDvnR7T5kHJdrf7MeMzVVHGrWh8VkCJA4XqkEZfsohXRvzr8q2KVjZZQRqfdhc1",
  "key23": "5rPQx8kisU8AriBWDdB9yEAjsdb2nayEC6FG6W4Jwo8fmAxA4XPxnCQZqFtrBfwDCxhyvwvamxEWnUpMPyJjKubu",
  "key24": "4awcKx3schEf135pXwmTBzJ73WsMoWg9RVdgAR7X9UEUzkJKsboXxyZHHk4t7364uZvHY8ayFDcYZjkW62TLUWop",
  "key25": "iNWoUF4wk13HhhY3jTAXdpMePskZeL3JizZQHGiuoh9CneVCiKeFa1iusxJsczt1KCoYfGJecDY1LPZXdD9PxKV",
  "key26": "4WjUSNcr1MbyAT3ichCoRd8GN3YRuwEEEjXYwBrWvUhjMQrEog71zM4CmDARBinUvQnSQ3HszNBQhApirnGZ4vJq",
  "key27": "5R1GVamXPpDXHg55xRWYMUBPcEe4KJp2T77oSiVNAop9V9Scmqek97DsLm7B1i5sUnUib4PhLsnBJmAHCJXyD8iN",
  "key28": "5hT5CniLTGpuX6tHN5r8ijZ4JJ6yrszjSenPbUNRvWowcrmhtTbHDUjASLgvMYtKbzo8q5B94W9QTnesYNadSGXs",
  "key29": "2ewwn21zf1Fngqha763TU89h1WTgH5Ec659o7Nr11W8UW1jxz7NZzF12S4cTXf8r3hRPP3RrmQh2ePuUvxoaZjWV",
  "key30": "467nfu1tc36PA7mVxUtfrveUR4Y7ATc6G3sRU9tT2hARQB5qKxqiT4YSJmPFtMPSJHzMxr94Sp4BWxtF62rcHCJz",
  "key31": "3KV4N6dhAZuzaSWZ3SaSzotvb8T8mkxp9UtcyQxepiLipN7ZKt3jSgGemfTac8jwdjKnPUCogqY3QDRbJYA9reEb",
  "key32": "5tKjRCCg9ou2TSXMtF1XNLqvtjiR6rsxKrisczoBggqLwF5yAXYgnoktvWGs2dJW75TN1VxAfg8sjpMjy5tQ529H",
  "key33": "2EUiJfQHL2RgR3Nxw6mihnXY2wxZmxYWgWUMuKyNVaCzqsw7sPHFBCSqKV72tkdhQNAK1MmFYjY4DKTEHTfmBzet",
  "key34": "2DmB4HbkrwpsoXWysHnD4EaxqjoeWGSUCLMeE5xVK6iC5UNEDA7BbaMUfdz1pyobZNk4d1kLZiXJ9pu6xT4Rp2aR"
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
