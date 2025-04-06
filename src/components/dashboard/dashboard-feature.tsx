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
    "5no7aBLthPgM8u8V3swdAa7CbxgBaGkPKYcHrhFLg9YQy77Nw1Y5VsbShjvWtkHFinUvfkbHePuB8MyDEsiuKRX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rL5GKkc4dEvy7LPcEucrKRyAs2PjaC1Rz5N9GezeZezavcnmjvErvQbdhXVSRWDqEWBiU7DjstN1K6s2QyBjKcN",
  "key1": "w67q54w38J322ECYjgcXvcqz4BPZHsvjEGTfmLaVb5HN9gcVYz1wjXBBXSRnj8BZ7JasDNCPjigRogsxR9Vh4UA",
  "key2": "32Xvyc4AGRb9J46L4VJrxpshuoJz7rM6Ed2UTwR4yU3eVa62gGQZaNuUXvrySatuG6iQrj2AXCfTy6hUjENVn6pG",
  "key3": "UNB86EA4aDvFu8eaonut7QuFVYbEaRz4GRWDCBS2SYLqGALMNrxmftSBrjEU6JGrmhYXsRQ8v28VLFHAvMGZSUz",
  "key4": "3pCXAPhJgavd5mz2vYqAiixMHTxUQnEqwpVFW9NecCCGNXS3RaBaG4bTrv6nRTujBh7SkEvX7BkSUJKNNqyaa6e5",
  "key5": "3PmgYj1bJzwbv48U7tJt4dLaGCwaJ3qJ7q9pJPBYPErc2hWWbjZoN9LuDPt9fVive2fXJbLFgFa6vg1Ckj4wC4Nf",
  "key6": "4yVKYo4LCcFHdSJScYWEpR77gciCxGT2GZPDUDCo4zQmUFEwLRBaotYDrPfdjGHyhVaCVHmY1c8mJ6XyHgjQoA7Q",
  "key7": "5iEfhneLkm7jPXa98pWwzLZfeFqkqsQHvPwfwXpr3xZAsnGNYayQPQCTVDgbzjApuHAvaeAmG6uaM16gV82zDWE9",
  "key8": "4gHq87r3SYXhGpRztE6kK4J52UCqNzGdMSWdoFyu93fE8nHf5qAH4LsLFSWj13mayYqdvVQENh6g9n38HZ1i6woV",
  "key9": "3T6qv7qSxdeEgLM5J4V7MiE6mD4JMc5tV3fwVpqhAhtsoikVaLM6TEkzbkLm5vhcnFNnUmyvWgCDgBfMfzw2cKPY",
  "key10": "bQFCjrMYUs9f3hgHbVHeqZHY3Tdp5gt7RNJvT8oDvzbdizLXfET3rrNQinFF77nijtGkJW44VH7DvCQ3HCzjWeh",
  "key11": "2aEXerv2ZmU69wB69YNWXrSWZ5itZbnmsHBBbtQmGyCpYqo8CeLVzcCJXQKgnkytGd7TXEzUj9wT3jTfwsQqEBsd",
  "key12": "eAP5pVHg4GKwtRqMn23eRVi4jQx18XofNDsTLmVxfwWzp1kAR8mynk45gdYAakMksfHpCmRkAEoK6aKR4QjpGss",
  "key13": "4H4xmb5Yujy8979iEfoVoyGq2fWzLEqmXotdez59XrgrNfSZjooa9ar9Z5eUb1xQX9xBnvCgRh9dwZnmkAATSKGD",
  "key14": "2E7bqiLaezesTAX7CzjPafQDAB5AuZLdz1MUTssmfTHv98FGsPqYvr7r13R3vj5oct76DpymirFTE96FjVoeCZPx",
  "key15": "5og5hebGGLfF7sAF1vLxLD4yVER9fG2oN3no9mjHd1hamw3XKWrqhsi8wLrvu9t3s67S2kRYhf25yNYrThcGDEj9",
  "key16": "5LPMpEmBxioaZddzs45FaDJJs8TqUP6riQYf6vMrvk6fCTaM4LjhWwNjzv49mfJKMbYFe3nZGUt5TGPntrSPqqp3",
  "key17": "3tjkEpFagzfqKVoCTrpCT1Bu2B6KBENvweYgiFkw6QcQM5CWN8vsPbV63kp4vde12Q9smAmyDysaXvWVkd1Cr1W6",
  "key18": "2cEWyn6AR92MnpSSeFPeR68f5RdjJJGA7wNvUcj18qRKLL7zF99VcKyZfMDVkxdnBye1L8BaQnrigwveD9SGUUsb",
  "key19": "2gPpaMVB9JnZkBPFnCo6zGpqAfgptLDGBMp2JMaUgmdS7SXUcJkQX3RRsNrNSTcFT6pVywC36ejFs2g3iB93HtKR",
  "key20": "CHc8TsLAMP7jm9rw7gbmwXfnwXsbGZZ32Gj42gjLTZKfAs8SNRk2HTp4QKs5t5sY6Xb2sEpYi7dz41RWvQRUkTW",
  "key21": "2UMaT3ZqYEZskwhx3nGbPj2jNkcsTBcZJNkUHURseyNs8MJkxmajJdLexG2QyP7X9MnH184VtSiYQNXpxXLTdmtC",
  "key22": "46rtMaguPM132s5qZnuupuQEvahDyTtjUNe5zWyric7nrrj12tG7GSSbRi5t616xrmuv2GVmv7HFbg3DgDC1DNDr",
  "key23": "5rRP6kSixC3NCrd8NcXH9y5jVTjrZkeU3nkKR3e8DDD3yfAZnvZybbBSNniVdLgSZAbALNDdiRLmNzzji8dwuKYu",
  "key24": "44JSCBEFofqJ47jewq5pwfbvgd3DEvxGbb5muTQjBhqNEaPGCnaP4LiTdgtp86AzGaQUrqPrquJVVv8CuwqXjw9k",
  "key25": "3ZeJy2WGP9vAhzVddmn81KForspRhsB9SCyiJyZFKxBouUZ1227QkkoBnDESainrJV2zQzr9DiGkwSwCDZm1K8Yp",
  "key26": "mHCN774uwRGFuy9wvx6aBNr74MPrw3jV2cQmRwD9a3uXz9SGFLRyxJbHcxHC7kdSPQ5yLKiEou3BpMPV3HgLy5J",
  "key27": "28uk4tEQBVJuK5s2jceAHiZru19fqQqadCn6XoaXNaQBEd3k44xmDWBRjWYg2GPgbTb167m4PTvibc4MJdYNED4c",
  "key28": "2L2TxtsEEZMTzijaRwDXCgh9dC6cJ2qPdPqddJ4T2EAPXraXSusocZqaKwQrKRdJ7nLKpikRDJKr4jpcJL4coBhT",
  "key29": "RPmQu8GEHZqgojredVVwpsQhjRj6M76cERaCpazJ4omBDVhUtb1L17UAyUTUXW4Lneb6NmxgHie4mdGnDzS6qXv",
  "key30": "2TFeS948Lua7ASY3yKQGHyCZ2gTYW3R8DP89uwAqH5HAVTbFqdSvJrpZH9HtzDajENdrSrosi1LCefG21SsaUKcL",
  "key31": "3sarjtCKXkAKE2m2SmK8HViHiuC1tCBRocJBW7WWfEU35rQZhfcpVsa9eaqSJHSwydaL3jj6NTS53p9DnQaksVNA",
  "key32": "izqExMzLdiMZcpfKvKo9GUwb7tF5abEp1VunnEyjWU6swHFWosiHWB1ZJUcGe3js4zjTsya9k7L8HBgvYSicHPH",
  "key33": "4iZdZG8kcm2czZb9wyAWgK1Zf1NKq1JQV1MQNZZGVLFHaArUz59vBuFFbF5zk5h1SBKGhzHuS2d9EVgdRoJdDvdJ",
  "key34": "52uhF92pawp4dmgCN81q34WC5Kqfk4jiiUMwFF5Vt2fi6SvgCS1rdBUKziGCHeXY7ZKQe3pJDVn95iZoDxZUrqgm",
  "key35": "2LiEgtmuU4Nzd9a1xJpZ5j16MnT6re8PW81kfctA67CpPdSipfXXkcnYnpYXuvLCMcFAKAe76uzo2rWJuumqEsHU",
  "key36": "5gZnFAKC7igphKutKFv4PkxPsJaGPYY2Uvnoea7fn2MDKMMSe2nMbRLPRmhxvDh2g3U38W44sYB5VB4NuNzpB7dX",
  "key37": "3F69gRQ412Vp9PpquPjf43SwZkqg8FhZXDG9qjL1skKczgwbveoFge8yRQJX8wa6PLTkx5RTfwuZGRoQCUHXUS6u",
  "key38": "r7TfNuV6jV8mRvCSPr8MM2aWUkufo7P6fsSsK4s7A9uHP9faBTCdY7ksX7XaVYckVWqj9Yei29prCkjhUDrxNzw",
  "key39": "3ioTAnPrGQ1vY5CGanuWQh8qFyBNhCTYaH8RRWps8kfvppknGbuRgTdTfSwVgWzEykBvQaccp7NBUcwKNzhZfpNg",
  "key40": "2XrFzqfKfcEfhbAV6EVw7ftyCrN5tsVZ9W8HeGzyeECZwCyYZGe8pBU923xYJK7YqqCLXjMvqRdrc8DagNuuvdhp",
  "key41": "4d59qAJpQ6Z8XFYn3bmunJAh1YA4TVC6BT21U9K4yAFycPdGqKFLy9NMzhcphk3AAm8e1db56nYNdJ3p72TBXww1"
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
