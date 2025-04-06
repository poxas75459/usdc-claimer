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
    "5XKswwyEH61xorrDHCe3HikhP8WqfqKJg9RKgRdGo6Ty2XUueU4Lrwiz5GxccRvyU913qNBbP4hCMHWNBHdhusN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647vuiqr28ox66b8Z1CxZpAZkFbvaUP6wkrF5nfqnHpq5kYKWDuXLkna4YuAHkwyzUykUNr1EJnuXndJBFvptd1v",
  "key1": "zm4m2611FTXNs1RCZrKbwFZUbnbQ7nHY34kbzBFnX6e9WYHkRfSDqEwro4qbJ9AFPFr2zPSaGhgNWSi5ymbWbyw",
  "key2": "3XNX4RvsfBYJ8WxKdpBkb8wv67EzjmpgRiGYikErVU6izkPLb21ZqedXB96H43zJHGvhij11JNjPbUjXR5knWDg3",
  "key3": "2Adsbesvoz3azyum4i5TF4KpBXAYUd2heE33JnLsEEuxcP3PWj4qVrHKP7yKd8E9ANGKW3YKPutZeFdquRZiXtuS",
  "key4": "43kfTWH8MN43C2hVghudHCQFTKnDqAViLeccKHndhzbxmEaF6beGWKamYzbZnKjtUWh19UYZ36XUk562sDhBqXs1",
  "key5": "2xrgJVGDXJXsfJaB7sQw4s8xPqqBrsfyeHdgRkgd8FNaEjH2DmKydeDXs8eDKy2TNGzGVSf7Z4yKpdF8AJpZPJ1K",
  "key6": "4G3MceqMGWoT6FPytJ1nSq7AMKMKNDDH5okieTgYZpZtchFNUwKS5ccyYgge8spCcL5WqPXF7P4S2N7gNmd39hfF",
  "key7": "4GX2Yb2ZhRNiecTp8rUQUGjWn4DZdkWMnbMrP7SY3wLi66xtoKVfaboZ6zShyUZU65jtMSM9xBzQBRvfBrEatm9N",
  "key8": "4y4M4jh51MURM16vqVntiqYqSMLhdks2nUEcJsP2d5kpCZeiqLwyWdEGpFZMFFiQbPxhcTtgKryoCp7wiVTXENUk",
  "key9": "5tAke7wb426McpEDN7nikZaNGsPt4fYHspqn428XNrkMuqzRG7ZbwzpgrmzZE5MfmArZ2Wu5oyNeS8Aa3uWzfqBu",
  "key10": "5zdbCTJ1LxQPvPd6DQwj8gp1ZGdRS56A7D2tg78c5spZWPEQtSuao3eV1csxyptqni6uBsEbPx23pDT4xS4fUtrW",
  "key11": "2P1TX1Exy9rkjg7CanDoyW8TmxnRiynsNzeHZM128mVKf35KyANfCYwW1QFWSYonFaC8hc6XFeoVGcRemr2HCPUH",
  "key12": "54GpjT12CHo5YvLUCQciyKnpBWhx4YTNHVY3PtGpqQerf2KAHu8q365qQQFb8oAeVsaohQV5HcSS7ERb8AmtgAe8",
  "key13": "3UXNSeFTJCEkFK1HBhpoQZmgXJK1opZAGaqUcGNHXdvTqYV4z9A7jcKwTKqhS5i3MGdHpEhBt3G7DTk7AbfSPbgZ",
  "key14": "48VP1j5SekpEJn4gMpkuXHLC6ynEbzQKyNVvt22mMsM2CntHhBrAXBFe1FMqoLBRmDMabYivzedP3R5Hw7Hso6yU",
  "key15": "DrvoezScG2E8UoViyjHTm2X8PAmBD1WwWYz8aNpjBeg521hqsGPbXL8xoUvpX2d4gnDVfcGsCa71rTzbHn94bCR",
  "key16": "3sL7MuT69qU5Hze1oHMgL6zouNxQcHR72P5WHX3ZNe7XFx6D41kB2ZTMmqJrYuSTU3zqChbVUNs2vnVj84hpjPNP",
  "key17": "4z3KJZQBzt8rWCbBWjtYjGMJDEXMissx88jJidfxnpMDdK38osZX1qj2WHBLNLnt47kJ6MapUVyyunwCdGM8wh6W",
  "key18": "VFsV3VXZs11bjgMtsSqRLYvyn2qSU9MZMYLqNS6jrmQmrgY8QA3e3RxrrZ58Sn1YPAvfNZjKBBjLRqHYoz36CnU",
  "key19": "5Y6Xxyi4yjhSQ4LeVb3DUoDtHBuiv5oTfRoDdQNfTVrNcRmpSgjhiiGdxrvJXMFTxYC8jqY47787gZ5rHNxL7BLh",
  "key20": "5szJJzn6hBEPginsogTuPeZMZ5QbnRRDNhQGYYhqk1hpNRkwBgpCqLPgXD3kzTGBdq18piZGmmiXteY2Ge2jABTA",
  "key21": "2QhTCXbkFBDdCSSwtB5c4HkpHZv1GrcJMSYNexT3xSj5zuY22xHpXyQnN4Quk8apwPjzSJD1MymrhuuADWwiJzLr",
  "key22": "2a19ER21q6RhcAwRfbcM8Niy8qgVHBs6UwpjV9wkvpm6Y2RcMd7Tyb5cTAehCmcV8nbvyufQULKT9MJBXTZDpcqt",
  "key23": "MtqPqRvrMba4oFYPw99HpCAR7FXmmz2GPAHdKmZYUdXx5S12oCrZBs7tzFoiq3FZvAwZKpy5oseyf6SrmkxkZYs",
  "key24": "2NE4TPVk9TXgYRDjjvyRdNhr65BLk5KpLBjRwPPpzKGm8XSt3YbxhMyHBR9MNA2FeRzNANv2ivjQvfgAyZkgXqRg",
  "key25": "3h4z459Su5Ev1wAck8FunowsgccWaApFPGik6SBpigkEXdXcBR3WZ4m84PV7hB2opefB1Spe7QEAnWA9SevhkUw1",
  "key26": "2FqY9beAwcHcSmETyjF5efPWMzecvEoxrpc5omkcEEm2aCcv2A4EW1gnNPLDhAEWPP27ECbRZcUSh293Sn6bQ1o3",
  "key27": "5YnQabPepQocgS51FsKSMcqdezV55Md3wmiQ1RhU1XvabSRS7wKUpr9QUKkZoKk9c9EoTm7K4AgUWXqmXgheRWmi",
  "key28": "5Juriv8JvPVPwcwoKtZHLvp3zPjv6ZzpFGJkPd2LoSCGyKMwV51Qk6YUyMXRpM7W8K99EZKcuFG5nnHJDnWQ9qFJ",
  "key29": "5R4i4NYwFpcdQHVtYD2WB7iPsYwWDR8MQptoCvGqSobSjTj2Fh614ACRX6kQ2xPbdzS7QkPF97HjqM2eFQbjhtJq",
  "key30": "24tsiHGrvGJGMCnGw7K24S5E5FrToCDNMZR3WLvLDpTSa6LiSpngGWSvz4iivJGt7CLMpEiDRfwXbVWMXKAgvxx3",
  "key31": "4CGbJgwi2XZSxL13hjRe8rtW8PYzvFxTpedQiPgn9arDAdVuaVLKFW9MJTMdvbyx5bJ8SnY21m5yBE6UxFmE9gup",
  "key32": "2xikhWxw14aC8SGqE2YGjmnAAKysvPKxjanxitbqBz2t9dDZyb3u63yz1peHJwmZjaqjFarN2vq1pKVrTn7cUBh3",
  "key33": "PuP1SmVtimQTuzbQC232kvwxKowccPX9AFPY6tPUv5pxACrrYHBeREdfECTNnTS5v7Fo9ewg6w6pzc67VvLkikH",
  "key34": "5HNHZ6M1YJF15se6JtsfCcpeo7S14W1gok5dm3m9zqaKyqbJJjCmdhK1BTDWroLNkwuRoanTqDqdZyJwaJwfpWGT",
  "key35": "4XQgons2KnH4YfqkQAL9F422ww4zwFeGRJSmpW5nJTDF2NQbj8cUzEmkKMui15WQ4pNfJf7nbfgk4QBV7MBabakv",
  "key36": "hbQFessaHiSahnMY5hdUhcsJ6KMmpXdaCvhS8BFE1nygwRgY38KJgtD1YsnWKu4aueG4ebfYdgGkFaHQUpA5eBa",
  "key37": "58BLYs7doy7kdG9MmjJPdqDVXiC21CDzDp8FthuSBwUrSKpH6VjW8xMfxvcCudbV5yU9rcE1AatwC1CY1ZbDsbcy",
  "key38": "qV6Kmk8hAtVUhyRXPbRn5fGqUq69qYssM87qioQqd4JgoiNwLK3oXDa5yPSiZeFA4Q3rTGguwg1EmBxiv2Bm2DK",
  "key39": "ucgkQj1pBEYGwp95LgqDg91t1LPFqNyuLFLZdm6Zs7UCYQA56RQBLudcnNv44obcA1u2cnJxx9CkvkU8qiHcLkd",
  "key40": "5pxYtdUfUmmKCsKSFoLHp3sCvsVMC3Fvx4jPBvFRyv1qrdijASfTpbbTLaYmeiuRFUWtWoDVA8xgdxPF7GnSR3wL",
  "key41": "2xkfqwJW5gZRLGcADac8eZXQTvxzjNbd1ksiZDTpKKbqFh6ByA3v9TnZMNB83jvAjbbissvFBkd7R7qQV1UPdzXg",
  "key42": "3dLVi9Z9MkBvzA5fx9owDKbquN7vc9bsaWSQUZcnNXRBxP3vmfVbs3promXou4vbr4GqeeKxtFoHL4CfJYnvwfxC",
  "key43": "2opzicyo7Gkm6jRuVfn9bFPGPMxGbxzEPeJ82V5CG62KvuUE4x4KR5VwFApKcJS4PVK2XwtYgQdNNVXy45QpyofV",
  "key44": "3ttd6jd9gnRGW35WVS7WjAwRq1UxmezCBGMtWPL28HPNHUdX8NvykjSaw9qHF949rSLQua5DsJSWaa6KLikZ2Nqh",
  "key45": "2VpXd89gJNU2wLW57CBvT5rq3XXxKqjTDzkFdaJ7154cadPBoTJ7D72g1yq9zXn3rcx5iYYQ7Py2WS6SAaPRZTtP",
  "key46": "3NSz9yqfPpd7JzSexmuJgwnJiLC3YFqGAQ8F6KV9vZLMLAASthbSEhdsz3EnDzhrgsQ69dZVydZdG1osgHuPDPYx",
  "key47": "3aMRRRR4Qdn7SPQJb1sVW4iha87DLKMnijeV3Qc9fB9vGfMDDdAqC5wQtwTPuvMG1MRunq4QSwXhGFMbhUAJdapX",
  "key48": "pBQFdsLCgST2rG8QcKMjd9V9HF9LKgrVxrXAvHbEXpsqE6EzW3QzTK3mbHDNZT8ZdixsMVTGcekqCQ5X4EqrrAK"
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
