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
    "5m3BUu9yYZn5YmUjSnqnpGbkpdPk2sw6AFGDDqaWbN9K9cpTviNhuKMooU3QVpbAkx2pABeFCdsDo6k8Z2NaoDue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4gg4aHLWWkMnLCQccAuga9xieatHzJFWA6ppL7h1YcWE9srEN4D2CP11W3JfL6VBvNgCGesWN9H8ppp9hqVGWf",
  "key1": "t4aAaEq336fM7cn7LjGviAbm1cgVNnDc6yc1hpUSYhVcuWxGcAU61DJ4bK9qL2bbzrvFo4gvskvcu12YE2zWcqm",
  "key2": "3QQDtoh38ZWL7bBQE56wwSonqfmwXCiPdixcpqTDXspnQoaR7K5FibVKJsnBQDyn9pqta6BNh7CHUxnftRJ8AEFu",
  "key3": "5K12vVbqdsYNVgjpD85Lq4UzdsKU9pByPjGW5v3jWJhxPmihpvb6fDXLbBQWYqHpbP1SEknhjJQs6V45Lri7yt8E",
  "key4": "4FWSFNqzy8X16DmuuxZadKUwSUcTkA7hJn5nZejDctdN54n7D6a55YgxDkekJ1fKnVqcnananmjZeodhHTEtUozr",
  "key5": "2CJYQxqk5VU6YuZujRMg1m92AMsbvzReQm3mN7fZwsYZat1djZXtXEZofyuHhdsfn6LDtty6gZxqUvjneWBdskbf",
  "key6": "ViJd3vgBnfmvop4wTC1ogZnVFYfSZGxGiZb6iAiQXdZKbfMKFSZHVxoCjTV3SyGEkrLj5oCuPDc5J9vBoXnMYs3",
  "key7": "4HKk2WeeDVKd69CcGZzoUagRi5YvJt2UXzGRJnhJXv6SAnR6knqPGDyf7upjYHVzcGW1HFo9K4rZQ78rpJjw8ufC",
  "key8": "Ms5CY9uzK7TvWo4JzzTHauex4yrfS99QAtCGuwvS1Sm3xwG32dygUUurLdqrn2uCYxx8dm12dwLbwSasamuNXAh",
  "key9": "5WjbZRffpwzDUoHQkfN8pdsPnWNxBwVN3xyCmHkEK1Xai4gohRUPy5fP7PjSSSVoWeinMekvPzX3y6XiNJeUf6UD",
  "key10": "4rNesK7guZwXXSS8GciWmz2cnAzoyNtvY7BbLmgC96tvqdE9EKGw81bcpn7xBzNQLwFWJHnSJEAHQUPbYv2XLPZo",
  "key11": "5ybSwPPK57Uv7QuPwYDcJN9RnhtHPL7t2A7Us4cJsuDgxpQKtznteNm489qQWwdPTLpypbsJtBaUwDAgQYokFyP8",
  "key12": "2cApu8CHdsuSm5797gvpQvoGtQDwpujWJCVgBp1xXcwerBBDKHpHMRGWRkiq1x1ctfbEALY6ptc6gPY55n9xZqaz",
  "key13": "5nCstarrvfSpLrXccTe426iqnKAh8MQ24bLHGreg4jwVz2rzH24NPrvtwiQhu8dGE1iuNZxHNNHUcajxcRA8poaK",
  "key14": "5edkLfFLyFfDPDwPPxKVDhdLuVvxePSHwqpYmZK9hhKANKUWZZ2kw5F6soSDRB6apH5GPMrd2ZSX83pZsjT9ai1J",
  "key15": "3fqN2PsrHTJys7dUpMCWos2JygrQHgjBmRmta5rVmAcXb8oNKfYZfqqJc7WCDUhav7uD2CJzBz2oFJYd45TfV117",
  "key16": "2gdz29cnE2HjjoEUcKH9zsrf5zM6xHa7hoBAQbyWwd8bd1A6tUSkoNg3XsAPWinpaUWoAUhpLdiCYPCBcvmuQtq1",
  "key17": "37nooQW5LNnBqwFA1CE4TzhBRGxSf83jAY4YU9WhYeBFv2yHXcGRhdXShhTpU324gZSd2paMhoe8hgWQbvVrz2QX",
  "key18": "4djr1JKjxigcphy3K5HSWCmPYvE3k9A19StHPG2khhDyQ1bY8vbSHLATaMMT866gVDKPwFN3WKTe65ZoNMTZENvq",
  "key19": "5yCqibWDhJpuaRX3cCf6iWze9yNfFe7XTZCASM5mUAvkQJTKXJWtYKatnFz3d1U4h8nxQCTB4Bs8Kk2n7BXQG9yE",
  "key20": "2F3sA9zseLo3Gxj9iUen5YKmWZ6rTfPWjLRG3tAfP919LRyw4HV4xp1rfNsgNisU8dFD5rvoUnXEMa4U11PQDJBB",
  "key21": "2wbj9kkkNKTe8bD4MwkzzMFJw6ip5WtPs2xURZ9offppfkAbprTsot5wVEyx1WeREmxcsaUzNiiTWisam1YEasYU",
  "key22": "61TGxZnT8QjMvLEKEBwQ2CyyALrwzs4jsz4fKfWx8u3VwkTNkHWKTYehPdEUr4EtcNZDSDYz3b8sYwGXxaECR3FG",
  "key23": "3zs55bRCRwzZHsMcVbi6ByAdUku9DJGmc4iRmiGRoCKf5kaMvXDqfwPTVzLVru71r5Rx4Ncdh6tg5o2xZTmQACYR",
  "key24": "5Hw4W7uiAc1nt323D3cWA9RTQQXPNCxdXH827ty4yE8riS2UgXyFoujscAuC3iDGYVTdY47cQFYbDr55zJU8q8zb",
  "key25": "35xweSEACxBv8XGvR3zcPPtRF3jQZWynYDewKs7o7fjfCPQLCWgt9F9UZxuUK7ThVaKdkx23pem8VDKfHwaCyiKN",
  "key26": "5HEdR8vHLcyn64KTrrT7dxs6ZPux5p5izh7uw58Q6yANUouEF4yTRQYEaz9K7ucdVsxtyb37HdbY8zGuaExLCiwG",
  "key27": "7tPfCrdx4iq8M7EXA479RiAxSUBf48qHUmqvCq3WThVKVU3tcbujTZernCBPcM5LzBUQKSbR1ahRVtZAj6RRZq8",
  "key28": "3hQwyPwiRwhy9M75M4tVcrKsMCzMv9NssdQS6AVcqGaFPiqdK54xhbmJHDTwqW1d2QA4AXRVK5wkELqhaK7LCdXi",
  "key29": "5fUibtWYcy7NKgztMvAuwaX2q3YB9RJEyiidcAsw4FGefSPwC9BAdaGRvQSoY9Y9DRWTaBoU67hRLtahse3kdAf9",
  "key30": "24SowirpAU4guKxiTsNdEAeoqufgVrw6ioxETEDww4EpFMR1eUBkTDfUJKSFWguxpcScxkYARQGWCJgddvZa8suw"
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
