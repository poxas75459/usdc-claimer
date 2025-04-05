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
    "3YYNNv5wVxouPeuwWUpUz3dpbVH3hff8s9M3p8WD5bckyM5LyqhR8Loxhh6cUraU9F2UyHHYWV1FuHMQPRx9nLu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKaRNfiggKsHX3k7wqM4qVj2UKda7aYWLAacezHUijmTsMjYKrmmkRXsQhHWaFogAAZKZCVUvu3EzacVcjX2GSc",
  "key1": "2ERkmudomnmxkcjz9FmYpQwJGzwDbZiRTS89MiJeeD3YTkZc1jkXu8VW2ardy7rv5LVXXxKbF3TkgzFNXhVswb2E",
  "key2": "3SJov7CgyRaaFVLBGTz43g6uvvVyV6gMm1xtzSKEBkA4HE8jakXXKkYswJpTKqF3zSnMXPXYjc7CEs5A273UdMgW",
  "key3": "2dyZ7kUZbkRgUt2Jx2cgNo9xJva4Sdv5kLoei6ARE55q8EsxxwN2Rf2YqvtXSRxyBD4VeeFNDJkrnKRFk3wZECX",
  "key4": "2SX2EAie6HgmXKdR1SXnDEF5p6MkXsk6HE384WDigVEwBAoVk6DzZ8uVEjw3GRZxxx3bsVAPio26Xn78P3yj6E5i",
  "key5": "4X6pbunjHkX3iRgcx6Sa7zUMc3A8jrpmauPxDdBrRvw7Hmya5b94NWbAZTn52Qq6uYyHCD46sJmvwRX1ewGMkkMo",
  "key6": "4JtVj521Mo6hykhU2AaykY2rwidV2taGTsUHpDLeNw3pNF4AjBh6L9wWrjhwN8Qrw1YaFP1V5oLGsURi7BPzrE5J",
  "key7": "5qbUXCGLBdXCfbujba6m9gAwfd183tAQR5xUBMKPgrSW6b3qCMbi5uLkQJP9ZJdMr7jAziN5aqwe2aDj4iRfb8mo",
  "key8": "4ZBS6F8J9NywXjZagLo6vyi3c6hBfMxiwao72ryaRwCn6x7mA8LzGeAVEbntMGsF79C8rRRT9gpBbz2Ghf448uUv",
  "key9": "4EHLpNZLcJruDpC8Ax3heCTzM9sFLruAqR4K4jJmm1onVeNkaTTdPYsUhTzrM4XzcpZi33J2CzGLGHv1hmALKcFF",
  "key10": "2bRar5APHLYrXAyFwi4aHCZxrmK5m7NfAgZBKyTDBucMa5HFC5gjwRaQ8dBwXL8KTzDLFYaEdY1xkiwcrjc1NBtz",
  "key11": "3nwj5VwrZDMiCiiKVxJHJRfa7ewTnNhHxNSRS9XBuFHjWpM4SG1zezy5pMPHhkcdznw2XwGsgiWZwBdjVjDqyaCm",
  "key12": "53D3mPYLyevHvHVCkbu1fL3WBRQor5xb2CFFo8EpoPu3LGJPziYgCeSDeWnZq4DfhFgjnsFTBdwiemVZTtmJLYWP",
  "key13": "5LPPa7rP3wGtY7xARuW2iD3kP6LR2fx5WHNZkiLcEA17qEgGxrmtQVywyjsdA3wuZTAA3DxCzCxuzDs2hxgdsmsJ",
  "key14": "4d3M6KF7L9mvb4o5D9C9CN5NuBBzphAGWQ9pfkWyFHyV7aoC9HD3RZaaD4ScWvytYqWU2VMd6haKhLYTUidjYJag",
  "key15": "3KWULPCgdm45svPvYYmr3dkfGBx9uXmhp21QtGNcVwy2dN7SUkRGRyFrUa6dTNVVJRafbnjzcpL4kebz5H5Umw3q",
  "key16": "igUwQUZVbEqEkMfHApSrypSuLo6oSMpqfuK4ja9FG7ycKHzRXQ9F6jTVhcxscTfer2kVq2dij5x7uskcvzMgp9z",
  "key17": "5Ws5zkCxSMcwT5vCk6ZRDfkjXrQabqBQUaKFjiu3qzRgLsYVT4jn6WhkLf8YfeNwkZREzPeCxmFfjA4HPq7VnJWe",
  "key18": "4JM6KRedWPb4Kn8u2Ghb8M1HcYEx2xenjbUiBhfUrnXCDdRf5W1ZwLYnR1vnkCsvfnZjp1WrwehcKZ4gTwjhT9UL",
  "key19": "2z8n2pyo1yCzrVy3cGh7TvdwkntNaCqdgL3bK1w8Fe4m8PWoBKydJVXfkgEtZLQc8XeiDwpcpVacuPWxxQewcusF",
  "key20": "3Z61cNpNciWYZrmdy5AfMzCpK5L9kRzk36GaBLMnf1n84r3oq92LYcHvmyddYNFtGEQWGmRzAYRNoTjNbWtaG7Qy",
  "key21": "2nbcmYq6pbDxS6GjXRBW6bxjYnRuCsUNtcU8FvcV31SZpJkxn3dwvTAPPJgXLUkPEMqF8ef35uxmhcL2JDWajLkA",
  "key22": "2R5rDsx5TCxVvTxD2Z1FajjJ5Em1w3ZxeeCmgTnq1G3kVSBAcQr9QSioqA6oJRSD66SciS9deUJUW4BT1doXkU4W",
  "key23": "5Mefys4z9ar3bAxuyFcMkvu4XwPta3cvayKZjszHkPoahHdKFnQ2mt5KU438NUfBHyZFFhRHjAcNDGaV7CPL1Lwh",
  "key24": "3HkG3cwYQGDhWt1V2hroPVHumWfDxoKHM2o7KamtZeZ8bKdrzetyZywXJdefecxbEFfrigTzftmu8HUPWuahC48x",
  "key25": "2ibnsEkWKm62s6gi1hbc6qCNMij29wKMoUvkts4J2RtsVZac51n25uPWYBufVmiJCJpibFLYsobVVBWfTPvpkug",
  "key26": "4CzTXi4hPcjRGDCxd9JP98p1pdtRiuSPDdRfkJhWpGwKGL3UnToUBPccqN9ndF2gE7hJN1wJxsJqgh6NLv6HLMPm",
  "key27": "2KHGvDC1UtGT5EEo8dBPXroJGbEK9sUCzHzuoRUJ4FyA7vVBdvXw1U4xhxmwMS36zLGfkLjyR8VBPuJ6RpCC3TKM",
  "key28": "2CNR8zVbrQP9UxXJ2kAgwEjYfkoiwnguzomEHdATKt627mmWNNeFVcmUPJrmvPcvHX9WEkx5gZqAxcNToNGQJ8Mq",
  "key29": "2cSttW6yF342uWX4ghXYfJQd3A587GmJLHKVfnasNev9G3p9KZqLeNbN9RW4shSfxCuwA8UjKdrEz2AHmXLAStQH",
  "key30": "44M1uJYcHqu8aZiMR1Q2GLKhMHPovpU4JUcmnF1PmhpA5XLKaqf78rSmioRrvUTxs86cZixctRwNsUTk4duwHXZt",
  "key31": "22PvwTDUqLzc5u9F4Rttf2BtM7TEbR72QhKJp9UH29qEsYaNAB7FMpXGFxkoKUYdbd3CjfqiRV99Zq2D8YYiQMCN",
  "key32": "4NFkDFqaByH1qbmHN1ZLZxkKzYefUsKiAsVKhUEi8DVUR8FJisNvnTXEAUomeAyTaLcpJA8jHHQN38i4r1QcC8ZY",
  "key33": "272kj32L2Ei66NwyxzeAxXDCM7zu36tJziEHUh82czMqWRvSjZQT7todUWR65ZCzHPc1bcRXugodpRGq6pvmTNPn",
  "key34": "3fkpFUBUjSTfyFtfkQUAXVzL56uiAdRGfAd7ZXcUoYhNCH935yV6SxstbEyJNC5Ky5zE2yQ9CQGm58giYDzdbQZH",
  "key35": "5hhWGGudvLuvj9RKFC5m1AJNFqCYvJv8ggeBnJKwDcyEyU8Ltom6EsjPZPRMsdi9SHpNFaHD7vHWPZFMUQvwJyip",
  "key36": "3ocjmCugRhZ32jDhdYzQnxH8A9vyTsEdsReVWowvYw3evhfJ1rDDdvC8Kk7pfAac6pwx8mcfjExe4jVLQXfG19Jd",
  "key37": "3w5UzxhpagBp2JE6vqSypEmPunYyi9DA5hKkcGZkChtDU1yxCTKYFE1uKBtq8XKV8zfKkpgPKRKR6Qy5WfoXCURz",
  "key38": "25ia7r9UNbbLDnnLLJmwmBsBzwdpJWYfPFqLZqMCsP4pA4NfVUR4oKb3kKAPM6Ai7HYe93fRpkdFikHSSQ1fGJVq",
  "key39": "2NuZ1wAdjUqmpqebrUnAKeaunpvvuMJNJ6SxBvNuQzp1wrCJpQvGAohVNwgH3B3UWVqoWNYg2mbZFxE3RxR3uo9L",
  "key40": "2F374dFytgEXpYGuPkfrEZmvJ3PgRAWAyYkCT3F8JYywTmDaLHuYxd7LaixXFZisgHSZawagRfbJprytWSQHSiKe",
  "key41": "2RuCCErDAq66u6w1LQZYjWrQVzEmGYebKoqKE2XrpPhSx1vGc5VDtwPBMBR1WpCmzTCQGb5REmdTbdt71YENPQoB",
  "key42": "2egXPwnbKL9FdjvEHUZKWL1DHab242DKtbKLEMrc6tmjPZcUd8iLsG97FAZo621LhnNchySNPYMF7kQJHvVAbWaf",
  "key43": "E7XTJYqURZZt8A9iKGoUFAdTvH2BEpn2HbLLWgsdv3osQtiJabrMPM87mkbSchrJTz6Cufm9dL73SrFGV5ReiMA",
  "key44": "5Ed2ZVzK2rJjj5YQcnvnGj6oUawcXqiZNfkJQ1DUNCKmCz76MZBz513Vtqj6rFHYkCoPD9WpmzdAGNQ9wtMNJPoM",
  "key45": "4HhyDuiAfLAp5EsiRgPyTddo3hMrtCZnd8nSmJvpjXTpbnuuvdshCwcBiBGPipmxspHKoVzE6n3GmM5km4CXyAqF"
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
