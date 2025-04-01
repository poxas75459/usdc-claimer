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
    "5QgP1FnoHeJZJFfrnQHpb82BRmQH4SUDfbZW69KQmamAQPrp3WFC5TfwMRxaBqJ4MPDnzS9obBeuqJatJun95NFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLqmZUJnTiVUKfZ4t1jZ2MHrBxBNTjasN531wd7UFcpTkywVYYd5EkwAJtfhJ2rYZxJvY6kgmpMfEWmLGQUVUKK",
  "key1": "4Es4tLuCEDhBcaoyW9KfRiiR6CBWQT6fYMCjPMiSBuTG2Li2DWJqccpyePcJpdz96gPoLxBcRkLegNCfeuYhcyaM",
  "key2": "2Ugq12zW3jgi2piCwFus3fpbc2PozV8ZyVB52Er9oUR9pRjkqG3tykwp74GKVLaDB2tHuANJgHReQPuNZdDMr4V2",
  "key3": "3dcRsJnp1RJiQT89iuQQzqvJuacZ8Tzsv4ddPCpRn7EhDcdtshmch9T3qxZXczobWwY7vQiNz3wqP5bXcEFhgE3F",
  "key4": "48ZnddmhBWJJQniyQf4bmuUv5gKP2NPRDbeodf8TvPzzeQZ1fBP4MWuBN2yESe2RJBXeng6LvnkvKLasWBeivRSX",
  "key5": "rWV6CJJtRQe1dkmp5B5cCptkk1nFzK8GxwT2QHT13Pn2dS8ooZz6m7N6GdS1nGTNR7RptZrnNtZfczWa19TebCS",
  "key6": "66Y2p4QhCf3LhAxp2SXAJ1v9YdoEGakAGVJ6Kf1qqGj9N2ZUktLEK2H7KfWDFaF2AGFd1indYX3XLqMeCDGDoCUm",
  "key7": "4EECSnCS853rJbbhb5siKUrKRuGpCjxKiJofgwpn311cUKDUY4bjUVBPzTceMod8ztNf5UTpncZsqMhD5ccT5HFM",
  "key8": "4aSgqNZm3ao4w111MQXGXGs1e8KCbP9LFDE3RP9v82uQmYj4qRXSDi2eb5n6ce7YMYBPGWcNAytRhUuw86K1x4Bx",
  "key9": "5KNP3Br1T4hzsAVLQRkbd1X9jqv5dchXNC24PQMzVfg4XuFqRf5fc8YpLXKWAoo7aFTKgkw5HWEJfgqjfsN9xM3w",
  "key10": "2szx4eqPbrB3Fk8Zksi3nnAkHpTxVujPCsh79EYCFiCwRdGotrxRP3qoLNnBjpVWovtuv61bBCRfm8jSqtJ3ZK9s",
  "key11": "35aFPrZKV4Uw4Z5kGbzYDR5aUgb2sGA3qmUhN44Su5zqt788QDiwCmJFLhNJQBzBJdcieKuAEHDvR2eA8EExeMgN",
  "key12": "5RLH1AAFBXYNwCH8S4uY1efCYxQ2gTgG4UwAieZNFWzh7ArsJbWywhfVvZB4aCfaeHrdsubfnKr9w4LCkhmU9QRb",
  "key13": "1KV7wPu15hvPH4JGhnfKVNWtqKz9ymsbPiwY9capBScq38KCo1hjxrqbaG72rF1nL77YTh11SBKd6wDyYYDLALC",
  "key14": "4wMYB9e4LsoBycgPFQhwh77euTpzFMvubf31dqcvcmBvvFFyTQ1PJDMHJMeAbG73ufdWKdEbWh4zuq52WRznW6jS",
  "key15": "2fHuavKJGhSw9eea1bN1YDK3WQtnKddSjivBqQGDbWJZQrkdP6FsPxa9hKSwmfv7m7XMVajr9Zcr6f61cRFErJMR",
  "key16": "2oyh8xtVFHfRCVGPUdttQDxZLLDus6kR7VvGYFseki7rp4bTKGqPYvsrFjRrrX1aiyPdHHwxutr5p14v6djeaaQn",
  "key17": "5WoAf8PjGcq6Axew2Td55fpFFzi4nz12vv4PWKY7yeSpmKWunuccCD1K3oqx7H2STN8xCpY3EzcALRANHkeCkxzR",
  "key18": "3om5ZaoyjiwsLvyKzMH41tNW8WS9JnfL3dFvmAyvPZwEqRkS3V8We79sBvwvcJ5vco6z3Z7Kf1Zynx3bfGEpQHBD",
  "key19": "2XvBdi4fSyfhEDb3xBo7tLSzTB1cg8mvTJF3dAeWcVxRhnPX3kugzF5XiLgd2tDLubXdrLPgUrkbdwutShvfxEu7",
  "key20": "39aXzR3cXsVAuTxnPZfbpTt2EnxJz9Hy2bnddF1LurSza5GJT53wRArxPWXfcBU49uuSNgGmgS5mkkL4XWKX1QH3",
  "key21": "5NuiA5U3HadNSNc24K5sYoH5a27Tm7hoLUGETNx4HVgPpqGitKKoPWPSNrJjvPSMQtMWVsSJTeLQWX1hQRTsE4aS",
  "key22": "t3CFrZbtXxKLjfgC7iTZnRH5AyNxYpFzmPX3uqfrhMEWE9W5G6dYh8BmgWugjHz3PPuxdinHSeA9ywxc38dW5vY",
  "key23": "5nKyUH7uTxCZuaGKt9HtW8s5xahqJzJyEg8nYt2rCW7YEtfyZnfPbWkb1ofpiaCEFCZwE1DeYFjEzrPAKDRt4Mcd",
  "key24": "2NdguAMGrx2d82tbxeeMwKBh79mPcBTSnCA1DBC6awAEkGKwARUZADWbV9Hv51nX3nkddHEd4Sytm3TVMf4PGvg4",
  "key25": "63ZL94X7FmZcenb11EHiWHDizyryxYkhoHYhC75vUpnYXagW5rZqdHf7X2K8mGRRjde6HEeDtkxgFh3Vc8eqxhgG",
  "key26": "4BkjRvSPy8roc4Yfg5cpfLCsdvbd6CJCDZtTBrxCFc76Azb4E6FbD6HB7y7JmqbfeEXr8c5PHQnPC1ieDgwbJs2o",
  "key27": "5R2s4bEywLCuZUeiibMKJ4AcduECwZTz8faAkDqCb1PcBpqhEGeeQ4DtDMYiiDrnFn4FpwmG4x65jmZvH2QvjAuW",
  "key28": "4eKzht9qzHMMsg2Cbv3cf7JdGvswezASEwrJWQDKqcpRQMomKne1ZNRPi6VvpeR2yt2dxYfucnw8EUiixqTEb8Hm",
  "key29": "3tB7mcSK7regwcsCjYTKeHSqusjeG1ngoRSnoz2QgP8JwLiAgEprPr64anaT2XjKSbTP5Qm79WMDqs9iqmL4ezGm",
  "key30": "4YqD8e5vhzteWEGfnnFUJdzjTWQYqdgPYQQDcWjELmnbiaBGdXmK894KFL26bPEnoJdYQwupj4JioNMGgh7msrgV",
  "key31": "3AmS2ueMLNeaYwVpsGsbp84BRDWiabkapysMUGTZnmkxRaTWFJ6Lh79bLRGKWa1Pgz9hKw7tprFDfapUwJYb934m",
  "key32": "1m9AeRHFRFoZESJNKBBdYMUK3gXxsPk32MnWMzcKWPrtVFduQkqawirFWeKDivMFNq726MQdBZCcyDk8Fk7RJ7d",
  "key33": "2TwTQoKTAV5LEVvgiu77S2XmGwAzqUPgcSztmpa9M5rVBidhUu5Ro8MzzQsLtvVv5B2ibeB1vpXq2TSMs3n89hru",
  "key34": "2Sp3ps2WL1VnDqwQyB8UtZ81QDP1GskRUcGzQuwj1vofMRpTHgq4ySuqhxEse28foufqqP6egzTW3EWu1UqkZwxb",
  "key35": "5X1SZBTKrNAHXskARW6xpibN8hiAdgfAuJVv3pvyhkfNPRmc4hBVSJM9WPdu2jjQp392ZwwCPLdDDkZhsqq7cCTE",
  "key36": "5iwWSYkEHVp4LoV33mPLRdSHVC6W4X28GaRkupsxW3bprwD8YHPsbYi5xi1WonT2T3NaT2HPgMaQRwvbUgVEUtSq",
  "key37": "3LJuGf6Cdn7QygYQ34kxtTn73XnnBZTWuNQhcsRpzDfm1u3qwo71oZhhCyAh7DnJB5xvbhSA3KwzkAMwtvLTPCCP",
  "key38": "f6ME6R6VmtYRGnCWdts7MaZY5nbTLDZcxgP3N6dYgLKK3mR8QPDERv7uQ1px7X6QWKJNg4qEuFoUJdngzMgFjAY",
  "key39": "2U5xGpQCVBXL77A44HC2omvBpLTfX6B3BYfVFT7g7wxGfNd64szCreq2yKHHkF7MmsRLkCz1fAKruP5ccxhJhK5c",
  "key40": "2ykqABLt8sTyv7fs9suxEYMj3mvzG4BWVwr8VUMMpwfgVL2rJu6vvM2ZRZuwuES1tHUVGA6xSwVUxMV1KcbNxXns",
  "key41": "4cU57J5sFtW48zFmg6XdLr8RTfHustqcoU87qyTD5r1B2yEV9kx3oS4LidrYAfSYXHFmqp2JiDjhw89uz9oxMKXC",
  "key42": "4aJA7gLPbsnB4mfGcMxpa1k7UeHNQ373dPZuPann8okw3ho2p286i46g1dnREmEj7bRXyx84fkra8igfZUQUkQNJ",
  "key43": "3yr2JC8EAfYgAHfF3JUrsN5bY3staJiVqBbWdH4ApvAuNHj71NLqVmKtJDjRpHcWiM6uthfVfqxSULXoTuDSSdSc",
  "key44": "pzRbh68VCYzuzF8PBRcoyYpG6spQEeoR6yr6j1h24dcVEuvRbCiRkevFTaYznwEx1JLHBQQwr8ES1p4oGJBhpUm",
  "key45": "3Az155R5qnMyQwrifGPi5FtV5wMUR4bN8cDxC4bwGn3QfdTTJC7pZrLsTEoqjaw3gWWNXUSLAENX5PjLWkwfUPvx",
  "key46": "5qXL7Sh6Z9pjk8SZ97JseZ9EkYgmzEK269RcZ3qCdb3BLF7NQQuCtZihgBWUhkuFdxwNvLfiSUBJ5CHKMKWHaVEW",
  "key47": "5uVWLQqu9aoKkxbymSCjCE6fo6sTX2pacA3DWR7ufjMi8vpMacV4S3gadbUKuvKUdwiH5pJkuQu2XG54DRMTh9a"
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
