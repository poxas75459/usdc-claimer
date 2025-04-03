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
    "4YzwEuBv5WsM6sU6EHjXz2jhJUzctSJ9BGmaNRiRgGtE7atHi3dVLJyHyMTmsC4hTYoASv9VnA5LyQYLshpAWzXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDSsw8P9BHyFd2zMmVrajTCDN1t3Wd6EJKmMCBRMm1HZW6kpBALCnjFVYQEFKkGL6diLRhExWwn3A3cwTMp98QP",
  "key1": "67eLUicgP488SCVgojjDBicsJ8Qoa8XoYgaYdNJLLBRPZ8G37cTA1jxZy8BpTjsJEB53rNjTZhC4LfFfpftGFSPh",
  "key2": "3uitUWaBocmHKkxPXHTfxsGzd5oF9JQLAXGi6Csx9qV8cuDqJwHzn44anwko7mqZyLM95hn4kdvP87VeNGMB8hb6",
  "key3": "5pkkLbPopMWijfGa7rPMyGVaPiYHZRvknRbGoqD5bWfhUjLVaaQk6fZnxN6KCRAf2SXPP1sjvJpNtkKuYghGd7ZB",
  "key4": "3fDPtSh8Ug2AxF2YkqaiFmkA3HvFcLr3mJEsNFVeKbXZYi1d4fKwpcCFNpEzvsyRMqaXAWWmviCJcejDc6HHZe55",
  "key5": "32zxWfhJJ9GD7YuAtgLQHanQrq72gvq1jZ5Duze5WJp1P8JvDcDXSD1L5D8aJSYtETGarYjbcBQ5YQEwtrtT4uSj",
  "key6": "2FC1nEhKEyEivdxNdynswwZvJunNF1kY8y5gCQ8462CMS6uyb9WzCAKdsWTFhfCvNrhKjgxQf8goJdBnWqK4WDv6",
  "key7": "3oPUXSuywhTQ4zoupahqFXRcADd3hLd68n5qDmM4Rc2bnFpL8wZRjWAtRwAPbLkMJQEYfu9unesd8HjVxgqm4peP",
  "key8": "4rHCfm47vuo43npoBn6WxHWfFaVaqnSwmrT8Cksq9dbo9u6SZenQyKR8RcuswEkjFgKhfT1wSbn711SFMNH9sHnM",
  "key9": "SYBjH6iyuihMqAENbMHfUYSWrPtpLahFcRV4HE1tLvSjNHJKBVLfYp6NHEGrwt42s6LyvDReN6JakwZL8fBUVLn",
  "key10": "2RgnJH5JGpKzoKJcYMSbSFh2264CFQsC5hUoD2kxRUWw675RzrPuaUvKuQLb1eXCvaLra4zUwcDg9j222gwHQPGx",
  "key11": "2KB7W322Gqx7BLAdeMLMRpuMuU4GgZLJ92noTaK6UhG6CT6mU7XQdmLD3xXJzppD4mec9sB7uzKq3uC5yEwaknQB",
  "key12": "mTswVBbamxta9uTQcJ6Vz4KzBhk6q1NrX2yLzQxY2dvXkHWmFxVSavqoNePZRSRDYiLcavbKHcs8RokLTbBmD8L",
  "key13": "2URecCT1yBPK8ptgThAPu8bK8oBpWhwQ9PYnECEHgi3edYZwgqvTWXHHyzqLpsWnoDEmYhSWEfQ6JnZjo2RhCjSF",
  "key14": "3e9DvpcaMtCbQvQX6vboNBD9ZzWhvcevq4nJD2rmLGq9Qwv9FXPke4VUpiusinzbSLzjisYV1aQitBA82WJXtznx",
  "key15": "5kb9ov5n5h2Qt3LyCuxtMwN6Ne5rRTNWFfNgqAgDrv2keVZpFjeHCdR69YSseBAuPn7gVoRXfeazPiB5tatPvvDV",
  "key16": "mjJHPEaxaH2LAqz8RpPM8pBLwPcdykDuDFZx4xC2DqiZoMPv1oyJz2EZ7ft9k9RSgjeuEvaDs7ymcP7pJomjxJs",
  "key17": "55cbydSHBYgGZDCUDFNTaFmJMCqGaF4YBX1byuRi3Q2sTxbFiHpszF5bGicVhseX6ZUEvCdttedFDV8nSKTqH5X1",
  "key18": "54ZnDZcRf9B3c4AAkUECEMnM5DS875K32LZQkZENgDoMtzc5gzdst8KuX6g38EdKEVKydALg4sowC3PrDhHPJqXR",
  "key19": "2VreypU6XB75a7iUZiUxcMZHaJDpE7TxXNZYkChXBm7qQk34x5EnmrY8m6ZBWxH7TpGkN3K5Hnyr2GoCgwuwo9sr",
  "key20": "4wgCZMwVfPtftP4eLE3Dkxw1YeQRhYmP3D5Exev2uUtB1ViqevRwZZZcPoEaBqCyGc34u2Avutp1Qeoy1jH8YPMB",
  "key21": "3ay4p9cRiBecaa1TXjySr4tMMcdJvFomsGeqPFKB85Je9DPLCjN2tTV7SXegex2P2pRbomKqJaxWE6HgCFbJEziA",
  "key22": "3cGdgP5YDpjBA41CJtSaG22rgt6TyQBW1NCe5eve1ngiJGkp79HA6CBcyqowLDGsSFczz8weDDwBhXwHsPuBVsUa",
  "key23": "5J4ihwSsSe3RVWmzmqGK4rvqxtPcmKVvBntHtVvCSRDuwEShQUiVE6ovyEzo9vbjgrXvdPhCvU5bXEYVJt4NtjdC",
  "key24": "3imKtVzMyDAAx6CMrqE654H1m6AmUL2uEV5yd8YZGHrgpwkM8KxHHzc5n62B5Lmx3axhxDtQzn2VxPme1H5tWTZP",
  "key25": "4h1MRWAaJv2afFjcW2QZsuaEo1HvFuD3tqZaafnXD4ZEDNwLBn9ruvaGqZe7d4mzzfT5XR7UEnNKQjT7GFTbSBWQ",
  "key26": "2Hj6wPHaqFF1UhWeMWiRzXEJ4wT1Jovj57KrGqk14LCZMv9oMNHTNHo2y4K1Z6GQ7tijgiWCMtsbdUFJ6AK9h6qJ",
  "key27": "Dui2BZzkMJhScNZ85akB3WVTP2HGCatv3yEUPgUpwFjYftCHsKKbbYvDuMyArV1xMzs6bcQe8eif5T6RmEbBcWk",
  "key28": "3yEWXEU3hazmRonmWDHYVc3drW7YQxgxZadsgWQAVzNi1eSTS9zv1R6jqAZ2LWt5jEvWh435txUc9TsqymHwJdtK",
  "key29": "59uNQc1LXtsWUg21TKvnp1hhz8GhkpFo6TKj8FjgKXfufwVPBeKRQCC61tGfRjFV3KWa6dhkb2UrNjdQxvYLddYp",
  "key30": "zi1DcqbHaWioqp9vL3LhD6EvQMAknANRAMbrAxSJMZk19GcybgYPg9MFunV6HXbYNXsb5DdRvqRssYAmMLKAfA3",
  "key31": "2VArSar5nrLpekqqbRPjRHTgoUbDnS44WVnV5NmzX3iNSvkqDpgHsJbb1TqrdrioyosJWTBAPx3KmeGYbrTAycVV",
  "key32": "kbY1xrQdUQepzrSrUViry932azsvEtwS5PsafSoSqq4vEZ8GdykXPFCzzXiSH9xXMdg3nDUaDPUaxmzkwYkqfFE",
  "key33": "vF76QARs9rethyP194V7j1Bc5a87L7NWGCjvEHjidPmXJw55cHaYJmMK2u8mUvyoieGqRJ6LWK83GUKYyKYZUBR",
  "key34": "4dQfhrw9ZLjRycTDyiMdARR3RMPYAPDDVDgSyq52fx7QPdjc2Xi4PRXqLQ6czJHZeyoBPxeRm6TNm9V8LS3veSPd",
  "key35": "2GJLLvL1KioSuwr6V2C4YAY4bhXyuFnhRtWV2a1RZpJib2ggCsvVTTKfV7brQ5siJQyFrnNW62RadHbFXqdUTUJ5",
  "key36": "4dJmEgAYhh7SuozN3YQkFXnJzmMy1WVFAgueuaMDdWhEtT4EgczGxwdkkszCDRHRxk8W8ZTJpayqxhKCZVRfWweK",
  "key37": "4uPycT8X6Pgsh1tRTQfah2t23X8utYTq6htoL1JYkZcEV4hXLkq7wvvgnUZiWmhh1aZY8ks9hcx797ro5CPPkzms"
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
