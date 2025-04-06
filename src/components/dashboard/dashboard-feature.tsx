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
    "GdEZVwTbGE8DFoBhR1X6j5VjydzSRgzEfjcHNKgVqfrYGkhatL5nZT5xynUdJtwnV1o6GgpP9P4njL1i5DqtWuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqPQgkB4dB5i4oEwSbdER7nHLkpNG7dwHAdijhdWyzCje8p8kExaf7tqBLKxCboJVtwr1k1kDW1ciG38ZEjWMsD",
  "key1": "2vm8iMzX5uTTn8bTSRi3ovkGYjYUTSCmQXcKA2GdWGgxaWcwCT9zV2KSf4rH4CQvJC6ybrKWevnAzEWMFUT7zG9y",
  "key2": "3k4pHzcKhrXxt65Z9PdkA2RgNG2gPVaSVsuHY1LzfyyGUBPvEpT8yyvfBHs2zESbnRreG64KDQG8XJrqkCxDe9QS",
  "key3": "2M4TdK9KhxNXDN6r2PRjjhuUASQTkyAjdV1T77hZfy5jueqm8dNwcuq1tvCo3JTbpwZtCap1n8izjfKwYD7GoxWE",
  "key4": "K1nKZKimxWRZjwfWAUuD8mRM4Xxs6LxSBv91Jx3YYxSz96PdfGKBJG2fDAsj5QM1Nxqy5UpB19FufRrL9rbjqGd",
  "key5": "2cDXfmevLqppZPN9syYkWpxBAoFeCDqAjsyAiXo6mZoUm7RCztJ1yQg82yfSMktSf2AC3DUZqtt5RAuH4ma36Cp9",
  "key6": "2EJMukcUDqGt7QXyaAJptf7NCtxrmKqbhv3rPgKYWv43tQYpajoxdg7j5xmTYn9W673aSjD4HJ2Sj8k8PmCW3oLw",
  "key7": "pjXKdAZ7HbmX2mT2y1DGAs1YP8HDPCrh3VfDvhQMzNdvAwMkF3w4UWyVVNPjXiuGTcpG4rWQtY4sRmLfdt98oVY",
  "key8": "3SMBCRCt6j9ie9nUDants7CGHSoTeRjRY5tfoQGGNYwN4kfumqKirCq6RTNpSJe9cRqgMYbtFHZTt3bSqqK8bREG",
  "key9": "5GZZKS4SrfiVKiVKz9nqtxgG1LM6fpJLHQWR7R2P1h4d6zfCXTT95Chq1cCgqoMX7fwhxSsPzGNSho7gxJBso4HJ",
  "key10": "3EpJkhDbfug9i7PM2ADMBobstVpT8gBbyATS1GihR42m9UNhviNNLXZQQqa3mwx2mGbzySYzmEnzxxqVqDTFBwyS",
  "key11": "bGt4ycFkXKABXjAv7szN15SMdvtdLsG3aY2vebgGLX3WMAWnUsHbkJGSfYiBn3AY1B2DKz9Q57EvzpMg7bgdNfQ",
  "key12": "DghWxsMw5Wu5cnsgG8ZKiVJd5jx9nTeGnc2sMtA1Y3o4YsCmMZDGWyDwHJRBCQeG1rYHJUN3CxqQqTAtNoVkxPG",
  "key13": "2itSH3dzexCnMuJjAKTykzzrYh1ePqFVonHjZaZorYYtzBy6av6rz2zLEXfoRhqhkU61KLAMWM8ySfSqMyFHwtXH",
  "key14": "4q1GVS6ifPThFDtv3Hkr7F7tmzvEwbzDGz2ebSxuuAsrpis1XC85BrnKwh4AQXZ5XyxoAiiDCs8QwaiehPHpDk2Y",
  "key15": "5dQJ1GSgYEsEJcXE8LBuEDmWLh8sETaHutsRUrgR3YwuvERSGaA96cAX8fxAqH6m7qGPaE2qAApLsFTbiSbMY3ov",
  "key16": "WnhsYeM1jfcqQHMNtfK1uVRKPgjYgDbhHoL7jF4B17DaktPTkv3zAczgmbFit6fXWw9oBdYXVTJ4v9dx7BuyyMx",
  "key17": "5NuD3UUFoLh5CU3c4szXW74UvAWmyu6uoYLp2i6JeRRuGS9cvRhVgDmBZH7jJ7Cq6orKHroR8Mirz9XkuLvRUYW",
  "key18": "WJLKRZuV9f18YXQfkXwMmYAX3VmNGq4Ci4zjmbb2sxNUXfohaBw3SEEZMxBGg8zHvHYqMeDrBkf6JWsSmAw8WQx",
  "key19": "3KssoijUhn4oiEcv1ADVKFmmmLPVb83hMAbctahXk5rdVBMuTQYYUeBSrWKkUDj3VFM4r9R66gWhQXSpP1Cw9rkP",
  "key20": "3ttqfzGvEiVcPZDHHkomT42XQVuv8zJH74tMPWuZrpH7DVxKNJ2hH7ZfgxQGYFQGYymZLWJ239dGEUbcgGBKa8aN",
  "key21": "5KLSUM8gmbfgPPr1HY4DSPL4UNZL9waT21zUAKfUdmkSu9UiMKoyAPCQG4CzqyXYyV18wSgwJUrnc1cyArFWoCHy",
  "key22": "3Hq4mCyCmikF8ETrTQ35RmzA1fsVtTeQ84E1Rs8xX9mspKQQraS6GzQss5UdCfxBCJxGG2DSutKwvYfhxM19vTYv",
  "key23": "36cQy46xwwacwryPEuPrCuq1vDdLgYN5jyZj7fDVYjERa9ARUXGkXnWxmqw81TVGSvtvSHLGZBJmAdbjoe6nLvXg",
  "key24": "2YxuZ18RK2woutombQG519LRSMxV5Xu264byo74jDFH9CLTJvMSZfHAmSMgfaGZVgxkexciKK1kQytGnXgHUDfSX",
  "key25": "2bsy69FPRSytKzYN9QHi3sykVND2gx61LGsCuDXWXkqzEa62UhMtQZcEBLbTNu5VW5b1ZxPtvh6NqcqUWuerPx1b",
  "key26": "2hTyHWtZbEcNwG5xJ59xVrPeXCKuH9SCsvdiT2hcWss9L3z4pr5cHpenGxJHqTg8eAvWV7qos7mVEhXyHxHnWuvw",
  "key27": "58jNJLGEZQUj9W13C2Mn6VugYBxYDyC7Pp3EwaGUYnJbGb23YMJb7geHzHYzBfZ3C4TX4TNncTGAv6p2TybqK3sy",
  "key28": "2c8F4yMjpV8RMCPuoR1ouBP7eMVGXWBvvtVffaE88pZb5qBEpTdNR3MQcuBmyaCBKTGMrbU6PShXP7HWNmjcmpT4",
  "key29": "432wM7wjPGrtenfCfgXGqihoF7yXqY9CRe3s1spoKFQbEFdTzULVQaw7axmZYsVwBT9WJJTNqSFUt6Xn5RbUSpL6",
  "key30": "31UrBudRJCiLox6mdTbuvVNRD6N2GevY92wiNnQ3hcPD54ioXtCpNTK38ZQfAicf5WNQ4bPPD3c97JgZFVfyuZg3",
  "key31": "2av4FLhx2Th4x49TdS2izY8a5xS9QBN5WG9kvrUefi5pLTYRVrW6xNw4Kr8Ua7i4z1vPLMMCCMAtM23JCuZmJm1f",
  "key32": "4sV1MxXyYn9n5bB4Mn5RMptsDdK8jQmpNzbs54NegJUoJXqruKCCJo91jDMuEoSjK4yNMY3jZKjHt911EUYDBeLP",
  "key33": "b2RynuuJDNNfEcZrvMm11wXGBH88idcmfp7zw7GVPRXrW8pSE7a9vd6nanLHiKEnzgqHYigkheYNbZMPPMqDb4i",
  "key34": "xis55xbs1BdxTdN8orb7WMyY6FNNKRVPpUFiknZySfT47dEn7ZNinFtBm61ts3Ed87miA9HqQicY8swH5owVctz",
  "key35": "S6A1m3qyLNd5W5tVpgK59q5t4R18TzpdP2xcQumBoUB9BcWib8ZawDT1NonRekGqMZimd7jeudz9Rdnkz9nmMED"
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
