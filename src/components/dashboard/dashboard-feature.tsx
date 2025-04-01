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
    "2xgQ7WxVDVeXeF91ywTcjpTdERKbki9Q88WNGXs1EZCgVwjUsPCZ34HHLCdHgFNwCLbejLo7SaQR8UajP7LDQ3WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFLqA6Cnm51EVtsU3ZEZ61sMEWhCFi1ieJkJGEr94zvwseF49y9MG1V1AweHWMi9Ksfty7pN28wivtHSMysXXPj",
  "key1": "MENxZkgeEr5yT3EnX3XnS48yVVnRRSffocuyEdu2237Xd7SzBAbqBJVssJHGb5P9wwePuhRDwJQV6ZVbvqBkorK",
  "key2": "3mm8CZfiPqKfTFJJ8DMXrrQNoqxbaXUatL2eF9KprYcUmVKBLYSEoiz1yaz1YDTGN1g3H953YqrGaPBpSEqyw8rd",
  "key3": "8yjNnYeiPLm69fgpgZMqvT86DGDvpLWCeh8mLdVkX1YZJkvPr3GG2gWGEZWfLGjvW6ns5LXy3NTBmw7WL6L9b9C",
  "key4": "3i8E7E7zHVXatguHwcnUQRV2MRV5x7fyPuQk3gQyBndbfVaVd4Xi7V6An411WQgvbq4p9rTQArtaFTQi24TSpYxn",
  "key5": "42Ytvf1ggVkdLuiPEiB8dyoPQC2CfiDELhxXYyxVg6MNBsbbEq8TMUxP1CeLf3qutJSR36z3w5n2oyHz3yzfNs2N",
  "key6": "38t7cRZFVv9z3XBAHodGtJUVAiUPXtZPSA7F5dfRpX7ZWUvWMv2b8TEBE2zpB9BACRQPnstNBQWcjfVusMHU2m4S",
  "key7": "S6Qf3QmR66QxkfwdmAexkedscfEzGWgHsxVHQba85PTbb1kJ7xGXFpkW4zKM4uiGBYPiCpmU37kx3h9Zv6kqtGe",
  "key8": "3awKkhzxA59YVoqbzg3hvMu1fVPMGr3rvZVwCWGqyn7JF89HuxrLpG3wdymJuHqroahHyjdDKNYE2vVsyhNmTKo4",
  "key9": "47U8F945MUKSFwX8FoHQ12CjheJ29KeDeNVg5VRgv1PsoUVur21ah3buEpGsgPgBZVaKHqMx2jpvw16xgbpYGVFD",
  "key10": "3LVzLcT3emJ7TnFA7DKF4yQuYGzVo3vFHEZGapJPzCZe2bHeZH2c1tUU2F9Y6Ca1WeFTKayrZRwZPLXhohQKshCE",
  "key11": "3LEQtyZGnsR8R2Gd6PJVqZUXrLYyWWcQB8PzLLQNdx5qEiNyjAxJNeAqwdw8k5gpHwqrrtitg8d7Az4Af1avpk8R",
  "key12": "12ZnRnGKcQUXVsk53ekf8jguJeGUxZJ2Xy5wZM3w7V2EMXmE4jjrMNgiQKN9NKJhcnb5vnWLjFS8g4vdg1Y85dZ",
  "key13": "4niVy6DvGLY9utF4S5f8sEcZc2VhW2Z7aXzB4WPBYkGJVxPr36JXJeBoqhnm8P8vHgS6mdEfcgzGiosqVbwYDtdq",
  "key14": "45BSHqczu64mhan1ERCeJM8Uf5yjeCX2UYEdGDKsg1m1ys9aDMbJaksqjZ7wTYpRkNsqqYDVBaCBcETcJGu8jdhe",
  "key15": "4B3CA25XPhKLGqeQhGuenhMfmY8SvX3W9HZc1PnpMDRrzevCCxujfRwrs1QnMH1bTA47jzPiWX2LMmLwKgVGwY2w",
  "key16": "4eLneYAFqYL235gE7TpVarr8uPjHcsTgJgd3YVZ2zbnC1bg7joLonTiWkrB98nGJ46JSPccvjcmJP4SmmrCwnMgS",
  "key17": "5pzV32XuQvf7WrmYANAFQCRBsPVDHkJ7LaCxSsZjyQptomMjzr3imNsCymMqGN5nXnDBNb9RSjPzFmdFjZnLqU6U",
  "key18": "65XQKQpzF6Y1k8msKXsVofGF7kxVbufcJundG3Hic3ACzaNY3PAVZq3Rip6KxChgzvBvK3FBUq3SP69XekqdnyL2",
  "key19": "z2vYnwiP379MoHzUVYJMpGgANXXSY7wF3CuyLS3t8zBid6bZPr4HHbRsbdvNdXp2jEHQR9NN5dcbJWyBgEaXcqW",
  "key20": "476vnEiuyh5PnEPS1cDpqLup8gJAYoMDbaCnjsmcUBr5pcyTuTFSvNEB8LUBETTonyu6GKgwwaE8WnZUBiV3Z4Nt",
  "key21": "ucsS1MnrcgNnfLooQqU9aqJnMJHdGhFqGVjsfuhE43hreA8J6sQv5QNuYKQ5dhD5UF3WLnnZydYFAaE1HaJ1fcD",
  "key22": "3a6vuMVFZruxZVikFRbKScyg6ygyGHeDgKwmpNawzz5YR9diPPd8YTnyZtmLTanHsDEynYkQGRuh8u5L8LcogRjg",
  "key23": "3pgeuNcyuhNLxN5c6f7edZM7sJgYnjU8tBbB7jVvR9GQQFysyNTto5fAN4bgLqS8v27DLaEndiqYfjgnacHsBiUR",
  "key24": "5B88DGUV1NVwFjdtssA7i5VVvj7FdEiEaMdGFX9SVUmej3wX5C3fUxFQ739GsmqQfAkbZxh8GX4JTRp6gN3y6Hur",
  "key25": "QP5TMHkqoHKagcVFhVyRydRia3TD7ZP9BtyUP5UWyirHf8oR5DxgGi9KpJGBpgCWzmEaCB97M6Zep63syWuD8on",
  "key26": "2KRa8fbAufV8L8irN21b3k6SdhJk7dhvbMPne9zJf6RCSdDUW6a1bxuxvt6J7u9nJmJtxW8WaQbBaD4vtCBqUhdR",
  "key27": "5fcNQ2n6QR2Sb9Hy455fW67RhyWhoLXSYV9jFakAVFBYjf3CkghBJPbLsQREZWf6RDWbHV8yyfAgAPjn1zmr3eVc",
  "key28": "4Fettcih495c575aKddPeHFUSCH7vd3KBNZ8ESZ13qCUWN6zZgaayxPJsbSfjQvCDG4ikBGXaWvBBDgAvB5La4Yq",
  "key29": "2Ch6yYp1T5Dntq34ynCCvaiQBX5MZ7B3627outfpsuTxN2ofQk1jxFvkEWDGX7Fdby9rULyMgkJrN4KnDGRjM3ZG",
  "key30": "3GFXuRgfyDFDX7yBK5W1YPEvvBmzu1QbUTViGPDGVuGJq5hCAxdEqCvJ4p9XhwyLok2uw1HzsKFZDRbx9B3hABqS",
  "key31": "2ngjjp5RuLRGCt8nM5WmUskU83uusLUtKXkYmajgtvNw7YJMKJSQn8HT8Qk2GzH7SkoatMDfuEkBd9tBZML1zrdL",
  "key32": "3QXpQPyofiGZ8HgyUo5KnfZum6haN5fUiywDjioFtGuksig3zGrp9d5vf2sSaKo8h3VqgYTEHq3G89U4RGXmADny",
  "key33": "3omEw9vvhEA9cg2XDTZ1pKdff5Jn2eGC8mryJYuQPXXEbmdwFW9JArTWtT6XyNXrns5dhcpbX4Qbop3kyKe14UcF",
  "key34": "4nygttKKydSGVbGNCEPCYqLt49hqNdYrAwYczzVLTiMBKThxC16hSz9nSQjXGKDqiZBgWxaJb3D3jdcHLv2z6iFB",
  "key35": "37zp4e66WH3ERDyxLSku1YSkmsQ3Yji4navsa8Q4nmBFXvYqqnfyXLQyJc59z5amEhrK5jhb6Kd7PTfbSp74HZ2R",
  "key36": "3xKnQUBrvWgqGbZLgrD2hRbyt3mH1bmn1crr8ezLZrNYabMn3C2TmD9Nt7H8zRNTTFuLgPX7jKQ5SBvdYeSbrr44",
  "key37": "8j6jJNgPXs8DhyKUK27FuSG13Gj3Ut6Fw6AyU9hAAt7r4rev5mfkvcZp7JKBMPYJ3PjmBWrgvjcjJVYE3KTo4Ru",
  "key38": "4QCGaiUk7R8u2nSBr5gXh6aUie9WcUwmPpPLBJ5rdvDmqm2ncJpdaSzzz3kxvTxJiUBCy4mmFoMRtoUb3vPzNZVt",
  "key39": "4eEG2r4vFYgvZrS2tP22ck9FwfqBEpsM24RKmATmzNjFU7y62kUUxLZojiX5Rr3KP9zDv9Ko411fYn2sTajaHoup",
  "key40": "5mfctZdQgC7WL13bpiKtBp75xsxdnfuzD3p7kkoABbupLDgEZT2M2zNmWZV434joU7bq7awKkAgggd97LE8PxXgV",
  "key41": "52GF4Df2f2ETMmM598dUx66QVXWNVyxQks9ikcAkojmKSHsfgB2JMCmfyFrRKnKX7wm8L3L7TggQggNp31ar5i9X",
  "key42": "J4DpuT3L5bTfaFQkLJfa1TAENHbNG4iEwLtWfoFECohR1m2GJH6UGSFPYE71jaQ1wnuwRwwDxud4EATWysR8jce",
  "key43": "2MTZNNLqqfin2XkfkcyiG5SD5KAZyw1DJ7zhsVbFg2wbkZ77GUBTyNsbMZgGqAxCE7tDRk8hAj2nwLr6ZP63keLE",
  "key44": "4RfnPs8FV8nnKt92hzd4Mwho87AXTRvTHVSvSsiERJTyq2a8KBGLFv13GdFtHoa7RhMWr4W82iY3uQ8edm4oN55f",
  "key45": "2vdgEE4MLp6hEuPrcmcGpRi2W83rfrnfVKhqzKfR9noFYDhYVaJGg4uA9mu46UL9jY2Pc14kb1CokdFtaP1pFwSV",
  "key46": "4NiQSVhB2sPuRYeRKtCekzPDDtwDsaCJUcgpzw8qkU1aiJgbBWk2VCuVByDq8fuKftSsLcBqBP3zAnbBNLyisuDE",
  "key47": "5Jwco6ZHdMD3a2p38pkHkT1uubF2nY38SqnBJbPfWj2TwN9pCjWv7qzCZEsRCkZ4Tujh5pAFZcRyDMxLQtRrkw3Z",
  "key48": "UpVhkATdEv3J2Sim2Zy5b26xi1HXaT97s77uVRkPFDdg3ChPRpLraGmCqLjTuiAsXQRkPmF8B5svFeqZ48jmv1G"
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
