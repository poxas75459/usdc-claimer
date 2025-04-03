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
    "S8YikKhkDfXseDSu9qbsMzzqeFZCDNi35Pb1FiL3bh8A9V8H8mRCgoJx8X2sGi6HLRbLrA2eAeng1x9nXAnfMhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qcr2uDjwWxhbZfG2HKQtSJZyVLJUheXsB8ika7G8v3YHVVmzY3RNNiJZj1At8FXbqYz9xRVT4aDzSanYjhJwy8M",
  "key1": "21czpzUQCLvZeDR43PqErkY3Cuk5s128GEfCHFW1b56j2mbkESh6M6dUWAMmP4SB8znxdRNPWAuqf34D1BGQz7kg",
  "key2": "4CHtE7Gh4z5u3ZFdCAS8ptfkNdK2iYuiChJXyG3bEsif8wnNk4nAX4yzKSKwFRUfDQk3m9bo5phRCWArRvK1Zjv1",
  "key3": "3azh2DcYJqeYDFT6AFNecNP2aKrH4SEEvbUYyzEgHXmNrQ71B6r9fLW8HGD4trhnXmnVEpBezgWEcD7Sc44Kzv2C",
  "key4": "3BmHKL4bYD7wS6Yatrxxp2iexqscUUpR8vYTZTmEgmajyGjfcAeuXk9sc23Mrh6fxR7SU9cimE9DDXR32hxeoxJh",
  "key5": "3v6FDYdV5RtzHfXiR4RtzgMdQhghx2b3hSDeDvUDw8HwBEvPAffC4pRhsfpixuuufN93mmF6xuXczuNt3JFHMvc6",
  "key6": "36Tds8Hc6daPR45eJLuX2yY58hR8JrSsXpWDTNPW35hqUaTVgRtk7PLYDB7F166YqGWufJh3xH74jWhQezxzofAo",
  "key7": "5qphrJaN7XsDyWirGTTrXVV8QTbYJTjLU4tBgg1nFitxApdoC1oGKBQnJKeLVXgtnBMRkbyrDhDzsahD4JPukuAL",
  "key8": "2WYRjDp4773qz615L2TE7NUP2Gx5BvSGHMySAfyoKRvVEZff5vmzS98UA52G6sZy9GDUtAU8wuDgCEg2usE2FMf6",
  "key9": "4jhUNYuW6UQTbwPg9kJF9qxbnwC3VKc8YzGz6mDRUZDnkWHPxAJ51pd9nD3Gr93K288niaufrXWNeCcjGponbyhz",
  "key10": "4tTrCVQjfsBba5Nx7xTNWgS1zFSRtCjewp4avkuV7RD5ghC6Q8GyQgUHQhWhJp8YH5deCUadRpURPrmrhzcvQABQ",
  "key11": "Gk4A5Fu3ZHhYXy4x3fTFxkdZXgX1inhkQr33jDGmnfMzjrhnt3qPzoZjr8zoRCxycywUg8PxWiG6PuvTn9sjwgX",
  "key12": "28f87QGKoKE9D9rprBU6KJxJD2pzgVmyDMjLvrSz5jrAVpAN2eSRtdVwNg67DDwuGXDZrEyD8rYPtkFdwvTYCUFW",
  "key13": "65PtyCrQuhEJrCA1jvWfSGTToHu3g3yqsgNz3Rbb9xzUaNq1wxUvf3XBhZVRmV3uMQC9XN8dmMVGw1LpdasHzeaY",
  "key14": "3jwWSHXUzyYWSTNPxxh5z3DZMxvfK954NKUSSJ8cdptPn787MrwXrDXvPocipMWD1UmbuMN5oBknBtDfZvRqwDVi",
  "key15": "3BVznXQNUundpocRWDrzG1WTjUYWWCR3LztFcKExtrBHah4ygXC9TTxJKREA8wRqD9cAkhrp8vz1hXeucKpKV8az",
  "key16": "4gYseUivU9nQpUL8ZoayN7mvZbaBmxQLR5xgT3gSng5kgkSuTiKRdCYVggywVn1ZvkzMS7mcgARtyboLFx6SSKdv",
  "key17": "27DuQWGjRxd8MC9Gq6iCf1XvUk849E8bzuxs9dXwGXQBAxaPTAdRk4RCNvkN4kg7BdzzZV6kjQfvPUypJPbtNKN2",
  "key18": "4LvMVY7YsUu41m9uyHW1s7S3gMJC1cGDbaudxYYG7MKbA5Td4Y61c19jLPtGm3jX7E14p1wimALNtdj3Try4SiJT",
  "key19": "T8Szqpo6vAvA2SzMG97N9T3TZABCyWQiNLw1kQPX3iCussTAx2feML5FKJsp5ucjsD4Wv7C1ssWtYC7AshxzBdm",
  "key20": "35eLQL1DAypcBQKQgTDJByqKpKyRexDUiVo6UoTU2UsLpsAbRgVgDiPr4gYEdTawKPCLL5y3NvWJopJFhvJB7qHs",
  "key21": "5YY795EQCShdSK9XZc3tsmyh7ZMxEaW5zSNeYy8yWRNQvJV8KKzqtzr4RAunbJD3QtDsBHuPiQnEpQrsRm3UYvgF",
  "key22": "EJf5VhLrpbXVxFD3B8jy6u63vkWnBXUcrxaspA6vS1QRDGCFvxXBz4yhgcgVoUiuf19Ca6uA1gdXRtt3gC4eDy4",
  "key23": "3M7YzHkz6kMA15YYMYijW6nfgLvhpJo3qMFG3gVdxusBohoe3oVWeyDgKAxGzoLUG2DCHpjycQysG8y6yYYuZEmS",
  "key24": "btAf3azsnKdXbxqnzEqqkgPeJNKJEdQC4sEdo2iLwo7kCRjqAVivcqznm7tZq78T72KZPFHqYxyvknyRWSudrq2",
  "key25": "5F7HcETuUWcLZ1RDVaeRhHfWyeDpDgLKqkQMT9bJ4ymjsjBCLo2m2CJ63XSH1xtnqHLS73LX4rsbyBL5BefsoSJq",
  "key26": "3krib6KAL2s14UhS2YcU8BJjzoHRA2MijaZj8ux6T6XRanvyFzMpq5DxQFDatjNJed3rrLYvh3bkqojPvGvceWft",
  "key27": "2FDTpxpceqM6j86yEjtty4sfPZrAbpf8c8BxrPt5nmXPQP4HedqHqWnPpgG2qCF5qShkmUpuV2Uuczgq1Zy157dm",
  "key28": "TV2Zvs5VguDpdctwNaeb8Sk176KiZr3YS6Z61msPmkBRvKYvVsPPzbiEvfSUnhPHHDUdMAYne6Ngck1zmtcuAcS",
  "key29": "2ihobCA613AFBQDJqjp37qmsrfqb4PD7KxmNCMor8t6tuRrdzcHKP45FfGYu1ccVPW6xzcooEATB43yQzUBSZNhU",
  "key30": "5pgDTmDz67S22rXmaTtpk9WuVdFCuFsk91BGknJPW9kHzZSRSB4Du6Vt9QrfKQPizASfx4HchEJL2b6ZJwYFsu9q",
  "key31": "g9TvqQq6p2qTRQ5XwNwMsRHXAKjuLap9MttA8YvKetX4CkdeEGzhqZXawHWxbr3B6xh75v6S4GRL3wP3udZj7qe",
  "key32": "4pVrxwpkGt8HitKuDQPDuAhf9Kouz2WtzecsiPjJ2QA5V1uVfyQcu6kMN8DEH87LfPtmB4sWDWwMPCNZBu5Ya6AW",
  "key33": "4TbNfSn9TioUozYTQRMjaE2iyJw1iUzSNwaLTkUWZv5HNVPUyxLp6gxNpzNY4Hk2vRU3mLTnkiGFWUPEpVJjUuVs",
  "key34": "4gjZwDjosnq5Q8M3nsG3GLbTPuDkGgR1N1XXki5dDtFrA4VUVnaABNHMwL8zK59dwk2Eudz2KMEX7XmgCUdvSi84",
  "key35": "2tTWZ2XB1AZERBQuBEWnYxKAkxsjaT4ks96MnkqaCAt43rceDjziMX8vTxvLVAQys6cknSXkv9WpEXCfaxKPDqo4",
  "key36": "2pXkbHcgSqWUmwyhUbpSPm7w228CT8SdENE4UsvHinBqZSDYZh5Ssu15EDBHZWtBJv5RJRsy6QK62Wff8Q7LAfMB",
  "key37": "5tnZk8fABnMs1GHneFDg2Vm4w5MV4G965LX3MeoaEaFLMJFMStFLQABrJBkYujMZTLU57jtikSM6oiaYvQ7yphjt",
  "key38": "2o7ToqExghgyUSyfX9WPPpnbKiHt3qqgsEzLFsDZBXgGZ6JYnLT9g7gmFz4dPTNxC2TALLPdpEFHQabqz3DnecJ4",
  "key39": "5GeL6sSv8RiK6cgVvh1PBY3Buu6YwpegcUNe5KFwbuE453GhH7Dk4sDrG2hE9cBr5GCK1VTxreUR5W5xZt954CQR",
  "key40": "5vifoj4LXRzupbYrFbhUortBDSCXpw2zGfzymYes2F6SCnouVs98bbw7PAJz3sc97GRZ5ofyXRNeV4AMDgcz4gEN",
  "key41": "5S1BYped5KRFAnzHNm1Ajp3ym7jgj8UqckdQbqqZ75eAX13j8sbjP76wXyZGrQ3pgZburjCuNJNYfxa87fd75iWW"
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
