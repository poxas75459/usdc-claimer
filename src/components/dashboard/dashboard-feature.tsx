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
    "5JDDfXyWbFMRkdMJNzc5281VL5WCvWAeVrhJZpz2oQSvPZvKh4ENiWL7EfFoJbdkcCjAp9YtKniBVzpyjsTCcLAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpSFmHnwdLFs5H9CamtzzLGSdzu3Te7e7Q3vcc2sPLyEoVSmQNkkGGJ2nSYT5KfwZwVYW1pjxKt82rueGdaatf8",
  "key1": "FKonpQU7VCDxk4fSYYciRYR5MeS22ypGRnUSzoPbxzCC8QQNrFYL7RAUoKsDuqmCw9gZqEGUYQUdTBDdRueL2aG",
  "key2": "3AZnxM1eAZCKfYyeUhXMXCugKpGc5ojextsfgfUA2ds3BbjWZxR5QXPQpkjxPd2q3J2a1ueK9w33jBDNpaPQxSae",
  "key3": "2nSrQHngE7br39YywwshxddxqmDiNdS7VkPRCKwPmbAgjaRZJijscw6nTDF285RguyGhvNDY1usW6x3YDQLvC2Cm",
  "key4": "3i7FDRBL3y7d6ops2PZoWtPKzs6mhShJqbwScxPXSq6X1UGdDX5YFNJG5wKU2JDxcYKDZr72BfrE9nvhcULwufQk",
  "key5": "3hfKDfAx9kYVidPZ42vktjSPD3qdniR8enLW8FxA8umn9qLLMUdszgQNakudsAoLW6XHL2brT1hoUBSFUrufRX99",
  "key6": "3srcPV9fnpKvYHMCyZM32oQXtai4fqbBwgFcYK372ZXStevYXD23siJdkqsgNtkMXDh2FSJ6MidmAoRoarKpCD4t",
  "key7": "2CxoGmi8iJcFuLGXsmLeHWkELEZyjCAiYmWxQXdfUCfxf4Amu6qfUVMWKM2qSofAYdZ4KPtH5LQrjRapsSEJxTx7",
  "key8": "4z5yDV6YKNAYGs6H2Uga892r1n72XuuRH2dTPJijiQoiYZ6gXR5eQ4SVrYQ5MHAe57XfZsaqsbqMsPR9mQ6tNMCJ",
  "key9": "xNmw3gY5RKMkkcL8V1oLxHVn9JwL2StzedxQaQyUrNLoRDFVt6UDezJif8tAgVgJq49a8WpW7V4N9eXBrK2kmPF",
  "key10": "2vorNdSSBy2HD4EtTg1pcuDgjCkuuFqYxBCt7tivYXmnVJMcfnHTwYRPMjV4FCbUycArMHNjFiphrdm3RTyBkoAa",
  "key11": "F7akAhaFaqGN4weCC1CWDqxaY7q8XG1afbSnzKa2RYBQG9XGaPkYbmzMQTMrQjrUNTQ2fRL8RebAdxzfy7rKPgL",
  "key12": "ajZxbbsxLG9cx7LJ9KAfENeJXbtq7dCWdtjafBevv7avDZMEtTGKNVqYg53Hi2N58zQsxgasYsj6Sp5XfjHjk7r",
  "key13": "2vyTdr3aVxq5JPrmKGQGMHK9NzQSLczaS9y45rd8suXpyay8KN5CBmrvEMRYvQKAuK1DfUceaUf52G1bgEdw1sWL",
  "key14": "4BU7tVpwoicLKLUWfQh4nV5sekVBP6MNniBhGsQjvbts29bAdCW96PXXuKmyJRj3TxVB3L6MDz2ip61TbwM5vSjN",
  "key15": "5B8qtWrKVjLcS7cC1u8YNS4YQn45NWmozbbCBTEFTvuyYyd8pkwCsP5esJnW6DqqqshJE6rfmKGbt7z2FdfWmsJ4",
  "key16": "rHhSv3yB77wKGhz3aoXMJrH9dbbWWkZob39US6g1WyGAhFVE9vuYP2asxi1jLhq3ETAwVQiESQXm8V7TM6vfFKF",
  "key17": "2KGcEzzKzfjJN5sU2jEh3bx3qia44TpxgGYvXCJk6N5UpnXxwYSbJRhN5vXd5XMHNuhD3EcckRiE3og2dw7bktXh",
  "key18": "3viuZ5EqMiZhnRQn8Eghkj9JtW33pvkjne5B6bZ64MaCPLgkiWe3HizmcVGCvWmKTxSG2qua4X1vk1WC22PMrqQ2",
  "key19": "418tU5k7fSvcXBEtpK2xefLHD4zVgb65LT7yda3hGDk6h8Y7Z6TXLhxLKnDtL8REhke5KKwKdwLGaGdgEMKKqvZ2",
  "key20": "3h7Y4idEBGTfMLct1EFBTkH7HxKBhGtd211VynuPEAEp1VbTT6HTw8YfQT8PhGMWhMqPbNLMDt3AUNSSH1TyTcEr",
  "key21": "Z1sGSu5pnUAMgvtSRag7SZKxVyGyyWkhEP7ChVPUshKxUgYiGfujpCCdZMvoLf9DLF34WuuLsqRqL5hp48jp3vj",
  "key22": "3Rq4G47rugan6X4bjMJrzK5yP53JZww9F9cbfBuK8SoD8SYeBK4VQb9pRRya7iGgHGftRLProtGV3CHC3LiFFDPx",
  "key23": "4eJJf5gE63YCo8g7zwC8bijss2WYX5CBCCptFNyJkiNZfRsGz7EabXwsGxdfL3y48UkCGpQRsv7BNPDs743MDmjh",
  "key24": "3ofNpg2dupn76QrQmqXipLCYNU9pBoMsvRHqFfcLEpqyEtK6sjNmegtnN9fopzavh9J76LrmEmkdjCJi1DYoNtQR",
  "key25": "5EBhb7MqddbK34dwGztuh9t4TYJpH4Tb2Pw7b8nWu1E9e7MKdiDquS5Dc9RvEkvVLW2bDjvKjBqghqUz75XB4NQ7",
  "key26": "fm9xrt8hC9pEJaWX1arLWmtGZ6yrdXfyRzyKh1EoxppuXNpPQc7uyW3oq6G5iAEaM3V3abrLofWamYLE9Gka7np",
  "key27": "3pWut8HUf1pTangZqHGZkFzk1stpidA6FXqHWGdju3XyG1XLt8xJyadagVpTWfKJVxKvnDjcbtRPaABKEhsfkDnA",
  "key28": "ANWZsdbykrB6RLFKfWFvzDxMw27jH6mQGBmuVTHzJifrubLvftkmuwpwQHzJCspSxQQCGeHNEfVvpWjoE8a4ePr",
  "key29": "37aLNyrdFn4eE7fBx3qmnNzS8A13ikVMo693kVaXHHRPcFyJz4krrQ94jUjc7wE9XoXxqHzAuABKnyjKEXcxgo3N",
  "key30": "Q3iXagbjd3gFjYXiijqSbLnYdk6MgPRfY3SPCD19db1sUfwRFQbYChEXhwaw2qyMmNqHzr8rH91FEZoKscboUen",
  "key31": "34PncrHqw3XBNT7B9VApNZ17CTirqMeKCwiT9ZrTfZDWBiNDgeSgkfr1x8dYZJJvhUuLcaGsTJuASXYCCoEgVUCY",
  "key32": "22ThWXZgeKvAV3SHUzoxjhWJueqwWiozYBZdM3FLYeATWqAATvv14dBGedJDgk5BYM1YoAY1pdGqxHXspzrvtw6m",
  "key33": "5kd2K125MfhTMUfY9jbupgeuNPWhSWqGGXpadpoyq2aJdyetn4YLpmdxFaeYnXNsL7xbZbyCTpVEFuCiNiVNSt75",
  "key34": "ixcpiKYSPdTuXsjmccdpFP8WEX8Xm8Xjn8fwtEiYRwGhUJDvEKcAM614aVPZmTtc368YnNWsaGXJ1abiorWJGCZ",
  "key35": "4KWf1E6LTtBwEFaz4mbCjN5G8JQM7Y2C5K9m6zcUX8xk7pHgayxXqmZyeEdjax7ChQQe8roLDu1SWhbmcN5DpycF",
  "key36": "5AAMka3dQkFeKRNpAWhyubTFj48efkPdChBL7tp5DyDSfkAXKk8bGJL7qMjqJJ3DyJk84AuTY6uggmN4zrs8Xc4X"
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
