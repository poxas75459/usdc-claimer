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
    "3WU2FKPniLMqUBUumRDeKf16YVRL2QSTUdgEaTq38KrbWr7pmnwtKN9dJBbDg2vcyiuBLmdYzneb7aiRsZHjQ28j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4nsaQadU3dbyjaj4mMJUczMencQWr7gJhE9zR6BoZwBzFjzqkBtvxZC8MuGP1zWvCZRKShV42ZU57j8wWpHBp6",
  "key1": "5butPbEmq5fvW4NjDder6KdpAs5H2hU379ru3APRBZKSfBCxxWeWk7AKPxaTfWxtNM98NR9UwNBUstk228uXsdpw",
  "key2": "3mGuf8DCGAxwfPwVCuoqjadmCc2ebzqrVzbjMdczf3gkb1NuoFt2LWvKDmWoQZd6cQofZNpUgoM7JNb8fYWKQC1P",
  "key3": "5pSZuL2NkzHLyEo7c2aFBDS5Lps7y1CzYj67rti7eDxavrW7K2TGv5HXvxEkiFfXTDLduyVjuyLVrjBHkkRfvnNL",
  "key4": "2zXgXox2cFMTfUEohuPSoTNeMY9YCKK1jucahyGpaT2smGY2ZBvbubP61nJymbhNLuASqSWNgmRVnfrZCdyeLgjB",
  "key5": "4SARh35iZRn5VugdLkJfsXuQp7yAmGbUcnWK7BCNsD5oMCmjPiTsqewhteZYDFYRXTKW8AtCRPBrpT1smx47y9yU",
  "key6": "38iWdGDEufhUXXB2cYQgoxNc6zixyG1WbEYYgjMXdLCoCzVaBpF5YD5bhzgKyq2PPPaU3ZgFAtv7XDGJbqyap2xK",
  "key7": "3xZ6HkmdRkyY9nvKzCn4xasg3HdRX94gPfC5coT8GmsaS2EoNBoy7qyQL9WDDhingeBaydkE2vuw6UAxt8YcuWMP",
  "key8": "3fijALFJYsbmGAuj16couNyiFiQnTBaXVS92GZa2V62aSpxPXC3Vc153p3djLxZgw1R1usBEVG8tcokNfRiECL22",
  "key9": "n36mN59KSHpumFngfLY55KoWjvsPMZ4sEvBQc7zNRx6yegDfHX7pbxQduzXxgM2WHsbEVfh2a9XKwum268uyNkv",
  "key10": "352yRDQ9qfaKUNmkEA5MyNQHktHnN4ZPgADCGsrzNCW6Y4HXQYGNyMXQ51BybBVXFGC6mhXR6cjMehKhbpXKJpgF",
  "key11": "4qAgZSLf9o1pSHSsJbEfmt5e1qZ4L8vhfDdX6ZRPvwyLA1j7Nr9iDgRBdxfSRtRmauXWdyMYKPREbdLe878j9xxQ",
  "key12": "4URziwuA9MsPEeoAivAaVTXfNumXiDo7kJfhHhRLJMfzPZTUDHWEVDk5ZPPe7K5XL18EKhPFnG5ZbUJH82hDC2ru",
  "key13": "2QH694A2GJKyjNt5CNJF1T2dDsxicxmYNrwjFC1QNi7JAvqfEmeBuGgqisnTBQYCNUs2hxLVbdwhgQgpM2DMxafX",
  "key14": "28Lhup7oJnPZ8u3JCB1Excz1FuUwq6J4yF5vsk62zke1A9QEywBqSjvwDmxZNvTde3Eibkqi4LVWiRMGEwk4v1zg",
  "key15": "5W958CNedq37HBK7nL4Hf5GxmRKqUTRm1zhhvStXHpGTfhFqPG2mUQjbDmg6tJmTGcXuq8omZqCrn2AfmDbPULMr",
  "key16": "4waPSrrxNNGxucFf7TzgCw6BH7AcnEGStwyEnNDXnGo1wDUNGVe2XwZ7naPZ7mpBSB37pmY9HnkfDtg3wJvoGkkD",
  "key17": "4VMayCe6RF1RpcdzNQJbR4dBCjCHqajB2jtNnZwhyPztdEQfKoUL8qyyuyrej3njQnkPUeokbKr7aU7qCvH5V62W",
  "key18": "4wU9fjQZq2o9LgQMaHE4FdKnV3pUhK9Sxjayaunv223aTsr6noUBGXErd3xBKeKPmKUkRnMwYdY17mXipftee1J",
  "key19": "5oDoGWJk25XJZnGNuEeyVNZpzNKqU8ocAF2HhDMDN3iiK5nztoy7CwVcD4tSG5CXLucuaM3oAtkTs1wJ4o9W1YnM",
  "key20": "fm7HFwqwFWiGWn5qua7AJBVscAX9rTn17uiJSWbxvbAb4PyfjWg3Vvcfx2uLJb47ReUTTTkoqsjTkcWnqrb8esv",
  "key21": "3yZD6M9U1UxND9cTmPf5EbxYypx2x3sPDD8V9FWJPuzpN5wDJV91GoLYN5uDQG7DhNK8c5iUHMtbeCQc2MTtJXzF",
  "key22": "5cfruukducEBjxbPqd2ftd8ww9r1c6X13ap8obzxL2qAYrZkymEAkGtfrhHAQJHibebqk4Dt9omuFiKubvQRnMhk",
  "key23": "4YiqX2j9cdERxV7GAG7JczMCBqoLQmTJrvSouxMor2iMUj3Bmx9iUmZKY2XJdLZu46cmNLUECyCLUoGm3mmdp8d6",
  "key24": "o8DEA5JsqBs2GVKpjVKcpznqiEZveLkoyQvie8LdBEepQTgKWophCh5Uk1v787o278722MQivLvAdW2G12TxN5J",
  "key25": "NJP5TsPk5E8meCrjC5u9Ts2ZEQFhZWYtiuhKPfXs3boZDFSdMtyqPfeJqKY9aXwET8LdArp4nNEyNAvUdjAeUd8",
  "key26": "4EKAKoR8ZLVz7X6ZkyLskBjp6KhieECW3M5dPuRg8KuG2owM838Fo9ZWqrYd6bTHp9tK2KEBYciMtmtFdCZYKeNR",
  "key27": "4kZCsT2QD6tPdksMrUCKKxzpfQDfxqN3jKSaDrrvtesUHNZBSsmfzXximcbPH4GmgcbFxgGJjRTLetGFRCRtoWMJ",
  "key28": "pfsJbakuDfZc1qU9W6ejFnMUPyWjQM9qYBwhUSpGQmdAyJXGdQrQXAiWe8zqmpwhYMwnThh4sykkRtzraVS8boM",
  "key29": "5p3ZYaqUe2RLphrWhSvM9d3ZTqovkRgQ85mjwMdnGUJG1W7MgoyyKRzGvJct8fRLwBsE2FZLL2HfoyDSbJ5n5e8N",
  "key30": "Dd5TvToHSbtdx394vftKvd9XBM8vHhX9Sj1Q7YUcS3wD9xuXH4RkB2qpq98esG8BtCVJRrqxiV2Nytsjr3WhV3J",
  "key31": "2nRfubsFSD3Bgjgkz6PT8jt4ejVyj8HDtRRdjyMpEW7cAWdAbffDRRCTG8AztZZGDoP3dq22u2ceQDputajwzdfL",
  "key32": "rK7G2mHDbDuFLGShg7njtmBtacyhNfuhDo5eRfmUXVFSUgB8q8bnaEcHjLjW3ioG2MuaaGorucr6apJZD7py1P6",
  "key33": "5UkWm8d8LbrhX9uK9EV5CK8B74iFh8jVCKaU6GB67kKAu6GqthyXbHHXdi71jj9FF29LYVNmo5qRkhL7qHARgwCX",
  "key34": "5kdDw7ckBRq8KNFUAp7HFZQ1Z22Mg2qkCMsuToY7sZyTV5xpakZ8Sfryz7zMNTkBXtJDmYV7wtNAiZSTbqJZMmHE",
  "key35": "4ZSXLsZ5RRpswB3GJ8LXvdLKj4SCg3nUwA8X7dcZbykxYL75JL9NtAsTxzMWs2Pv7nZncsP1sW6fGS7bRLcC4ZaD",
  "key36": "4phW27xbNHdfakYwvxXZHsdkwD1XLR65cK9HHHXbn332mikbQKrJzeGLRtQkYMJTHR7wTU6Ewx7avV2vgTLUBXHT",
  "key37": "4h3bjqz5CLVXveejGLAy5tjAAiStNCQ4khg7y5AvX3QjbkmmJcdcE9aRf1h1ww9drYdZJq4LqspcokxbVUwBYL77",
  "key38": "3t1xf7Z2HywHaKomjoSXzix5tvGhy9AzDQiniCSrmJAYdh2MDBntGQDNLcDs96kgcpBjsFzHWphic6HKjaJ2CSuj",
  "key39": "4yQXzgNRHUUY3zij7kMqbhDzVp4xJBpG6rRNb8jYmazEeeQGiGJfjpLiMP3gZYCyz7MMN4UabN3TceHbWSA2RcPd",
  "key40": "3Z33aGpFmxEjfEwPFESLzMpDfxT89S9vxVojEUqNRQKJDWBthJBgrDo5YFCiYes1Ei3MjX2BrSfg6KCCKhmtF6yq",
  "key41": "4wGKbG5J6tSQN9MTbxqdHSQ5Qy6EL7Gw8UpKto2hfpXFSJLnuvG9WqeyVhGvS2pGEPunyBnT3GvAhWE2AhbC1LuV",
  "key42": "4HWjpYEBFx5AdwU68GKyXAn9UN3F1LeRnMrFk9NjfAN3fQGJBaDtQdgqUvNzz7DQrxe1pj3VRA1UzNAFiNPttoL6",
  "key43": "52P1hBC2d5Wga4xBWmyqMgohgsU6VT6MvM2me2Rub5xUtgXhLxWERHiJuKr7o6wHJTaeBQELwBXFfwxicDeDB8pR",
  "key44": "3EVKkjadtBD1xvExEMna8gqvPKgyem7Eeap2NbT7XXYxvdrVHhmvzcb5DKQY6yP2nB3WD9pUHPT9si7HcL7bzAjs",
  "key45": "vU5eUXNUqWBxRgEuN8V4HpxhfKrK4i49wnLTSxc2HVDA3oJJRa4K8SUrjvTsALDWYPsap3MSF9s7K7Nfhsgu2Mi"
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
