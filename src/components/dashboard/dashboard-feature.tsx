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
    "49EC4A7db5u2mcZdw3PHsnxCsFguMvexSELYQNtcp6Hka9HP9e9Mps9i9VqkjwmfhG85MuxsvW49kvECGq8bKBSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pTX2EsLUceF1v6yQSP1fdvKq3sEFe71vYw7VPUMCQbU6QoD9P2uMT2AUCrwpMpoCzKaPo3irA6FV1HX4Ro4P6b",
  "key1": "YHS2F3Ck7F4qEVP6ZmTop4X2qsHLAU2UXQxfcXokgxPRhXP3BN86xR7YVk4mhSp9PwdAsnDFsRZafJPs69cRfGS",
  "key2": "3obrYtqFqrBDYxPpp6wGkcMKSeoH9VJA1Vn5Hgg27tAmseEuQYLHqALMVP7pMiwC1CAux6s631NhtLdaHEFsozSx",
  "key3": "2me6Ynb5wjxCCxoYmoQTHttK7EU4KL88nCty5ikiF8HX3mASdqsfu6uV1XJCrMNMYg6yzBADiBgicR5URUx8TMbx",
  "key4": "jotMEYvN3vEfDpatY7MN25uKxB4L2KBX6yJaAHhdY16RU5qtdRDxPGyayQEz7kVdsJwRNqjTqLAHjJb6QHz7c5h",
  "key5": "2FCNkzFfVEakjoK2NYuKQh4abuPpHdnLGehomh25WdjaEPbqb1AjJ6XX5GfW2g2aUibStQxutqPhnksLjvqizLFd",
  "key6": "4ojBwv6WU1727iUrMAbrxMsW7bAczCqsepUuKm7CvMNPUoZzu5b4w9HXJXuw3G2JeEM31XeSpsDXBw6QWC9asJ2P",
  "key7": "3LBsHxWkA9kaXfyiaHbPURFGMPx5uFPcnhp7w1v5U3HTGpSvhnTJCTkpHfxpwV1E3BXMrvJekZHbDKUo1xmeytMQ",
  "key8": "2GWDUoJDsms7fVqvTBKGLQK7aJWxK6u957ZocNsR2nHTyPPQzByjKhgWZp5CnvGumu4RUHMHE7sA27op71cBh5UR",
  "key9": "3hMN7TavdrWrXYvjxvnWnNLmpJx4eQFkFTwrCXsrJQSt9gWqpYdDp7CWhqNU3jeL7LULU5FZTR7m5mGmFiwT2hBM",
  "key10": "XFyFL8FB3GXGbeXFBmhUSK31cQaBp9ry1WNLgjcfDhkyawPWrPgXnsvZm5TVqgS38YCTUDnKiJC42NtGQfaYXCw",
  "key11": "2Symh4HVTHk7KeHGbxZUhN4QzxGaEjaA9ipyzW6rVq7J6179RX7JCKAGTcrZru14Eb4dyC69AHoLkK9RrDnhPrhW",
  "key12": "XGxDMWNX8gqFTRPRUEB7wfPT6KKMNJwUfFdeVrTGwq7atUN1ZVnDxkT93ePgS5kViTG76qiX4MGsccqc2b3rVyf",
  "key13": "3dCFsxyALYwM8nyyqjT5ZN4XERvoJsi4KaeJ3sDeoYgeGsv1gs18MCfKYKqFUvq6xxaY134w5oCPKPwHz3t8TZhz",
  "key14": "22RwKT8wJNvoQFgQQdUqqwwk3Th2aaXSPRbtqKMGzDnuzUDeRrHjHQZeLh2c4rfQ2T3ixkW45y9uZaiZ371nRV8D",
  "key15": "cXuvzhmDMHpNEza8JNupssjyrMUwWwyRfNxJurpcHE9KGUAUC3CqRX3gq33NCo5K9Sgdvxy2He1ZQmwhYam57L8",
  "key16": "4trd9PfNaujRz9NckRDtmihoAhzXVBgN4wGMZsMQTM8KGoKse43wSStH1s1Sr9btEZpsDQhy3LAXWEyY7goDEcFn",
  "key17": "5HBsUfcdvAP79r6uLG1QwTq9R4N6BP8eUYzvdTinedve4oHsMbViZ7k57hSb8iT6uKXcrPK89LhYQmGmnyium8te",
  "key18": "34hTwAamhmyok6RyEqUwJNWvFmrWcmbvmzwAV9HAFZRdZVvfsGQDEnPwxbAYWtH5crBcRab8x1aXJx6W6GYiUjVk",
  "key19": "4mHLn1SteBR1hrqncXVrFEdbw5xWbYrdA3WTatdpdfFtqZ9pif8vLARzbFJ2CkmVA3hNc4mfwbRdS842KsrJMep1",
  "key20": "4FDd1UTWiUExA1kv7osZjRRHp4FD41MXZG1QR4TPHxxUYPsE88bvBop6yxgh3hqztMrKr9QRWe2z9NqirFAhhGNk",
  "key21": "51A23ZBwP1kkRetiRGhLoL2zxqMX5fENJhyATsu93diNZrZbdXn2HryBdyxt7PTU3XKk6NCpYHYPPHUWacNeyZpV",
  "key22": "263HXKrbeRvG9zRnggZQigWrgjsmUUWL1L3RgJSVWxZ5zgCZgXFDhgHc5atVPfzuv39F4KpRNGKVjMViZHv3x7NA",
  "key23": "5jJvMcDgFm3dQypSLM7rFFgkX82D67NF3vcDXRhiU4rcZpc475qdvnam8XzedWkebeeR5G2Djcd5KWCbirq589w5",
  "key24": "3ws2QNXGcZvhP7z7VTYtMXCmpyUNwtwmgDMW5WEgG9EhkYVZLuNit4LXxUr4iiAAyzfTpKEHDL1UAZuNsq9oaGFa",
  "key25": "5mEQHYaoQdMfARdQWyujMramHxaznQ4UoDdmjtWcpimqAFeooqA3seBuUB6Q8Xfpdq2puyty23CE8jSiuBVnFx8J",
  "key26": "4f7hUM8RwvBnJd9BrPWZug4S4Ve9ZokQjcPh7CmRXZ9jbqXsMtLc6xNemJG5GHmM8N2PAtQUA7vA9mUYYkzBKs8J",
  "key27": "4gA28xbKYKgkS16YQtUJqAYbMEGJkYfE9zp7Hotc2EMQbPz4eM8Xu5SoAstpnaPtYufPaqvWQipu5j5WwYRxsqN7",
  "key28": "3vHRgXHoMXRAvSj5Sf2oqRJtA3T7WYxVB4DHrocG2xFW3Qs5iLavWCTdQpdah4wnTx7WYD1Qn5ipPBp9DobhuVyV",
  "key29": "4HDJLHthkmRq9FTFZSgk3tV3rmd5M7KheEboLu7aU5TRMVQsQ7TR1tViS82Um2RNVwH4AxYCSfcaddQuaJeQakiT",
  "key30": "16Hz8oH83v8ccznmZSw2Wao63nraM6JQZdoPk9CuQeDMwmPNLVmzRmYo3dWug2GYjYnooHCaghadx1uhDrmwfab",
  "key31": "5yNCm64aPRLJ5iAFeSWad71iJSwkRzfudRWhvH5sHAztoWhx4uHphQGAC6YQzqgyosuLHANsDpX6UtoadHcWYB2y",
  "key32": "2WAqdJVqUMyTTKSotkfMvd1SaaTkKLMjxQU1rTEfeKeKCTFHC3SfSZtF6SRdCteZuk3Qsp79AJQr9BTxaouRGT2x",
  "key33": "58rayfUSu34F6mVGktWDJs2MCb74SJ3XgyZuwYfAtUmDtFS9J9QYFyPuEpiKAx78XXHpLkHAesjbtXprhzzcs5rh",
  "key34": "La7SdRkKR5rq9GQCtCUTeDLdfDtqfwXwDsDWyfieoUPbzEjpGzY3rheLoq8afGn8gud5r5SYgzwbC18U39fnMcP",
  "key35": "4Vu3SXp4m5jEyfiqGPE1C2TT7SQfDwLANjP84WEm8L96cAHMW9RiKpy1VJg9v1TteAqK1FJw8LX8iiEyXwTmD2qm",
  "key36": "27wZdp82nAyowQmzqcq4j4nCFYcQESR38YNFjfG6vk9cMJG5frdZkBpxgT3RpXJtmAmbNGeUnnJVV7UMZh6e11JE",
  "key37": "66EWEBr9HUDWC386jUL1XCBizvteRgkYahsgpux4SaEXTWoUKSf6HkYrWtiZ2ukf6JZCAokXATeeG6NAoSGWB6Gz",
  "key38": "4ZR6BVcdETw4u311tyW8kcyLv3CJPSHeXMcekwemTSEWwNKnoumqKtrEsoSRSC3EVV6PcgF5vGU6ML1jiDEvru3W",
  "key39": "R7fP94BDmgpnDdwGYcvVB2NHPVW3KuiGvx1ZPMEoarHmYihgJyuA5tcjVME2tXNqFYEfoRJ1AGdeZXHPNg1AWJh"
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
