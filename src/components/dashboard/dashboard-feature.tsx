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
    "3vTvBa5YpxedMGEQs4Vebzka7TNyYFDorzC1WJjMqaPD5ox7M3qubFt9PgMZdi7ZrvKizo4u5dEMeqb56pqgc181"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkhC6YmHAFeFdJRM7QzqCKAvbFGH9WBcBuZExHkCVMptTgFyitzE4NkRWsyjuKFpJxLkwH4tYzthK7U6GNqnewH",
  "key1": "3t8T9wQYsX6aHfeWoyu7SuqgEiL182UeNi8exXrmMzFAJR6CoY2ZAQshjvJNrnKjH5HywnDhRCWbFdymeHQzy26C",
  "key2": "ch86YdR8WC1RhKgAHHopMBiK7MSYbEDGMELQ6oTZUWEyiL9oNaNR2UGWFcd7stiQJwjw8kZpGPSkyUfSW9FFX1X",
  "key3": "GSYb4TPX3SGWaFCSLWXfhbQFtoggfbVGPv9kRygfd85ym3rSYoQc1PnJto1WPj6rVJy116UcNspYonTBm9RowFo",
  "key4": "4xnDPwzU34b6U2EjwCwmszoa61duSQZFCjsxxdmsSasbQJdUqTDGZyVa37FGxNSMQusrHNnM8moiBDqdfATQSpT4",
  "key5": "3gFykxNMHYZ9QQnBwiyC1xE7NykdQXPnV1XpnckHW7BDiAXPPAXWr4QMKHhYRik5WBK9CCHB4z4BYfobVDERbWAT",
  "key6": "49jAUhoQRtkCGDATNajVpaBcXgBePioJVvRGiGofT6Qrv5Qc5vro29wkynXgSugC22fox5nzmEtHFCj24Dk8fvpJ",
  "key7": "2f1CePPGAsuCDkinWfJASM5wdk67Cq23pkeniidrDirbRwaeBaiYdAZas7L6eM1rDmtnPiTjbghSzhtVtbAFBdg8",
  "key8": "bankuDGm1XNh3TBSuXo6JXhxsF569UD4KQTy6eYS2eZJn1Xn1WTZG7aG7UkHTti9ZrHXyNEMVNgn6TSNsP9pQXP",
  "key9": "2Ux4yZXtydcKq7tcSeGTNTUCPYLyRLDBYwmFCsLG2GCjrrcTjpGq1QPM36eeFbRxg98eEkf7KVAQn3vhcX9jnTfH",
  "key10": "58geF6967mmEo3J4YCbn7RhaqXTfnivf3XxD8hPeNLPyyRuG1DhknwvbGxq28uow52893aayNm4FRhGDPZQsfGjH",
  "key11": "5A9ntp9yFAVSjtNpGnA2nG2XcaMneyaTrZ27wPaTzwNxYYbcufBeYzHe9r83zw4PDQq5exXcMJGEyz4aBVW1HiFM",
  "key12": "djGBJHi1JbTeft4cV1c75U2EkiRRxaxi2Sht1FFkbJyXXKQJ8ZMoAeALcfWDEdaXm3zRFemfWJpdKQ2drfamLES",
  "key13": "4vzTRGkGJ2msvoNhY3FsRy86QDC3Bqs3h97A4so5EJvrK5s4Tk3iRDR1bwAjMuBH2NWHN1MHATbGUs1U57zdmLhN",
  "key14": "2kuxikCRP8989nVabmppBLK3FjDcMr6SL6cUeohYbxtx4p7BrvxDsgQZmXq9ErDF9Gtrfs2R7fudkr2gSVsTZLyg",
  "key15": "n8ijBSyxfZ6ou8KkG6cAXfmLJYBfoR5MrkiL8S4pfKESNu1hZRvocEwiADanRm8KqvnCtH81yLLHeedTqzHQxuR",
  "key16": "4tiYbiwGB6a4CbXRzECQedoCiYUALHsPZZAtoVUzKDRQtrUPtmgaL3ADydxtEdFF63tmdLYPceBRgN5jMgy92vx4",
  "key17": "65Gn8xqefxytq2ZuG3phthMoUxmU9FSBptZTe249FRNiekG5CuJwSXfSuPbsb7732UHm9tQyi8Kjrczdf7s13w1p",
  "key18": "5EDcFJNAkWLCUiL8v4WagoWAGxKw5x9ALo1WWGsYwUamQUsTmEnoRUz6dhuw7rvbPucEKgUCiR2qovhPahLGncmn",
  "key19": "3fzc4pR8yR48dja71wUPPdNPnUGjXJeSMCBD1mYoptgVEYJKxgp25HznYLjyjr21Y7kLKfb9Rd5raAgCKdKEtkHr",
  "key20": "6uuMsJsc2K8MN8BNnS9MbqfeNkGaSTX14MnxuKMW29duppXj3W7VDYPSMTGAMGT8DJjQ4WiPtcPGZ1wvYKu9mDX",
  "key21": "toVQQ6GhUbSuezRnozanprjqDRa3Y9veY8CbhEX8M5qgJZG3THGsYUBhoGnpTNcS6xm49h67tagKUqyPXCBDRWg",
  "key22": "2AxGjhQ2gyjatE5YGK7h7B9uq467LeSFTLmaBeYPZrdTUnuffPUjT9ww6EdKm1ADs4V2EmRNfEofc6Pb5Ut77woi",
  "key23": "4ArbSSifQXxofeRN3HVWNmUUdiCNhhpA15XWar4b8jR5yEbjytcXbWJ1xjkrF3WapRoEACzEQYeRnZT57rVJZ8h4",
  "key24": "2he9ZwVeZV7SZHApmZ4AtJ3pihGnayfFTypBvmES3NgbGhxyTnyN2jJVnVF5mjvCPAauaPQ4xus2oGt3DjGundbd",
  "key25": "5H8KJ3Hbw4t1oXNRr7CqQKuS6qrgkAnaACn7ueWh9Zt9JuqAg4oo42BiSWiKJmTWUKBcanA5Lgz73FzZfuJkfEha",
  "key26": "4ctZxHPc6uUTGFXVxWNu81mn4WJG9AjZQh8siknSHrZY9296yNET5wFXafjHJVadQcSXC7cenvUcwarENhVGJyUu",
  "key27": "3NhwrKDfc6cPnXKTsVfpw6Ht47Gk9D5hFBpdFsmKHD5YhHpkihfEXnMZZzHpaeVFFeyY5W1Cu7fMCsEiLiLemYNH",
  "key28": "3vE8wT3nphXx18PiW7A62aiiM2n14VimXgjUaWMZ3iyM8UVxLrYS4VG6iyrbdEkRjjKrS43grZpmx31aUpRkhk8v",
  "key29": "4KBdnK6W6bubn5HYA4frxwax45HUML2tp7pmLodko1NSrvKS9ECQcYyuuMUR3qX95QAQcnypseBKTV55wj3W3xCf",
  "key30": "66mbPyTtfYe58762c3wrgeto47qB5hSJwt4KT3CmJgFz5MuoBSmcYvTjTcenw5ryHv39gsFgXm5poZkwbAFn3t5W",
  "key31": "5b2Bnty5zHjs5aXqbfA5BmCWuvjxfckyKFAvKFjBJxsWTLrsLM4gwewNn1Feow1QFD2JQSSGZ2kDrznLTdGxXh4U",
  "key32": "4Kvw2dkH5LF7zzuRQcdbbG5BpWsyM9b9wCK8kPEm5f1LR2r4eRUy9DLJ3Now8WjzM5zPUAeBVBrTKsZnBX1AC5Sp",
  "key33": "2LSYhfFThkiX2VMH1EN1YMmgEWBwajcqkt1PK3KkptK77WCzcv1yAC5ay5uRVLWrd7fF9hkBd4Y7beAJpjfkd9px",
  "key34": "5L7uU6gBFd3zXMjesanUwM1fXbHEvbrzD6DaGtehaA9Cu1TbJFtP7FDwppgoYv8yuAr9pXjXVcDpLbvTHwMNBsEk",
  "key35": "27j1AVJuv3951QGcSGXn1FrB7TLsbyrRFrhv3iuKijQS6qBVEFwstevBf25D4EiGJkKbutW9vuxLqMEpYaedjZwL",
  "key36": "Z5FTRKqfrGyuPBTVtSa1YjNqNC4LqbWcE2SAxa1YJ58cKKtWh7kWpapgbSiichQATnRqdTU9LVhBKC1xcud3PCg",
  "key37": "2Twd3kuAE5FJUayZanymE5uFMczYAaZyDcyLWcjQA7GeZbGkQHgokfzTu8FMGdVgkCMkTyvwZ2qp14RoThfaAV8L",
  "key38": "2gow56F2xvKaPQf7kGc5LX8JgEC9QsLUwciYzRNVNNBQ2GCqrfyA9LaotDF4uJJecEvjgpXjfhqxRxUy2zsSpDGv",
  "key39": "ms4iJFZZ2BqvZp1UES8HShc6wBvS8CKSbGcKHD8AxnfE73ogupMWQtunpRTzr9WPH1E6ymqPdnPmcwTYXybedeD",
  "key40": "42CkJrUmGWgw17QDMskmDSMx3WPvYyKqkE4HGJKuPDtpqjeQpYPzhJdrYy4EsLhkdikmU8uzwXTHgd3iqM5S47jL",
  "key41": "5DJNc18XwD65gXDMHx6yerVTgEx7uVJwhwmnCkCLJKMYqG2dhwyEDrSvE5xbjLjD71KFKVEhD2MBc6TFWj29wFUJ",
  "key42": "5pjCRwV88D2XYwKwwDXazBE3gF1Gu9kJ4crsS1aSgsgcD5ui6zoeqXZNnC21xGCwnR6w6T1WzdiZWNASdawvPjj5",
  "key43": "2hbdTcLhgcLvWd5YYgi45CdoWdXeVEUudHMNxHmekwpd6QfFFX2NnB32p6cMN21v5HkGfC7tqKJW84uRebTQ8Z1r",
  "key44": "3CaqxuKHuX9Jdxma5MAa8XwHYTKFFBvbfdsuFuPz7PffLx661MNajSMdRYghzJJKwzaapNEHH7fzCEznKk5jyPYT"
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
