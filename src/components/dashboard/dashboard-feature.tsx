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
    "2dhPYCgLAn9yoqNfBjk1ELsxxxP5pS8byx1EPAdxPaHnKBqK7UEQyovSB39VGNx2cBf3m8gjtQMgXuBtNhRtX3wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ph9Ab1ma3nn5xFeVma44YqRgEkDLaTpbU3JbdZAH6G6mHn7tJJuvTywV7kmo5ZvWWy9PVns6JLoJb3S352f1fho",
  "key1": "226hMUm3wtLmiTDq5V5gxaMqgDMJRCFyTweFFP3SkUmR6XtvxUQN5sc15hfmMuceFJqSDon6TQJZwhx65b9x1vJQ",
  "key2": "2paWgitk4UMi5VyyKdBjFgNdznzKseUFbHZcuCWbkyEF3Dr5PAnnTn5bB2wKsxDFmUUvK2oqmTmMMArA8ztm5BdJ",
  "key3": "L8DjtfkBYd9Zg22yiVD6vyi6edQskMgsFyBhCic41m3Pj3mDP9E6F1HQSkvhh6Wsnj8t83oEaUN4exn3vqgViTX",
  "key4": "4WwQCM4YkT6cdYCB5Scn1ZjPNuYAMzZ3nRMoSpGazvcsiA47CLudF5C7BmvAwRDXHpS8twHcYAXbG9ktptpMBJtR",
  "key5": "4zyZPYBzo7SL9RuHm6D4f2693eMMj2CuLGJqCzWrgXijoEapaDEQYALmTKmyBJdcqYVVMZZ7MN7PoWhFsGMQqQ3G",
  "key6": "5DDeEQkVANeHoUSEzTWetire3miW3DM3W9LcA7g77VHaSzeDgUyZcGPNF2Lz85zTBp9p8X7v6MRofk2dunJkqUsK",
  "key7": "2RkhBpoReY1CWmpYWZ3HTXF9RNxdbRFdBvXmhso28mZzGvoF8XS41YtEUSxjCzLbmaCLZ1xcQJAuTQRjfhJ989g6",
  "key8": "5Tg8UD3HkGF8Tkt4Fv6jLg8KcMsdPrWKzRFLeSDeA3TFX4gzdrr3Rfg8oiABvrLhDEouUAEkUAEsQhu4pzUY733p",
  "key9": "UejURwaw9sDBzK8pfnA6915WPrLXPSgh7NZo2hB4pmGHxi9upcT3B3pQsnt8hk8eG1qTfZPdJ7qTDgEmq4wFnkf",
  "key10": "hTUejuWB1739mtH9JEkNtbiscQL68JLRSftHttqE2NsXFHrnU19B9P8c9jcc8d9gJiD8u9QXMPy4FfaRyqS1wPo",
  "key11": "5Vf8pmCH3K5q2CnmuCMopPoAdDKYFnWcFf7qB4uDdnCecGgzRnP3UzX6MoPEVvnkkrpUtAwj2gomyqVr9HUXCYez",
  "key12": "5N2Uk11mwPGZjP9pDdESqudj54ioSm4wdDZ8sYNwU5PeLAejeMjiBXe7S1PtuoU3ct7gswdbEMV6oeTNh9MJY95c",
  "key13": "2RSmYMsguCYjJ6eHwFGwF6gtAkxcsFKv4b6RJLxHsvhmkx4eUtdgaLun3d3v8fz7bZ4TdPESnE4XbWvWYwkHSPCD",
  "key14": "5mrgxZwmttSQZm28WqERyyX7dHTYrzbqGWB8K1fyV2LNVLjkAev2UqtwHKH6qPti9NNQ6FLQDdGTFjvbk8LfbDQ6",
  "key15": "4aSp3tkecZbqGkQQ4zzsZKWivNoQyY9VnF1ekasLBxjwXXZf2rt3bNPpAFLeXtZ2VfrfCFT5nAWkzk45FspveYEc",
  "key16": "2FhJC17GdZnv14EPYfN1ANAxyoCst6eudnmpZqcB2hLKJcckuuJszdvQJvqeaJT8Cnkyem13mrWQQYQ1bG72iz5",
  "key17": "YAhMAADcWa1DPssNqs9BghgJAX9bLgDyEvTcWAxWYxdztsGXcrcAibs1DpNednYwK5CS2gTFnWQcSn7wiUKoJzA",
  "key18": "5TANz2qPLRW9zcCmunQXKh2wELSjJwrmCSeY992Yy5THVqon3sTdZNzS73X5bGvr5p6upSkCnaWhnQjV8vPaKQYT",
  "key19": "5Jf58u12QZPbeAPoLnbyQfXLofoNgXAyvxTZUdoVgqvRFfb66hvWcUWnpfMNEtUuuak1Qyetaa4EmmKAttp5Bx7b",
  "key20": "5iCSN44Sq4EZH5AVgiVwqPbzoQj6XLpvsWgVyDvrf72LRAFtVoyG4q21zRQ5J4A1Se2xrjmNJfotKJ6HTt4xWfm6",
  "key21": "2YhH6yWvBAm6sYd3yWvTzixThDxwoUWePsA2xcu2BKNcyec8Pzca2htUVYZKqYvQwWH26dJPaeeXP2Nh6iq8PGtU",
  "key22": "24dpbAeaQck6GPwJLp1VfTXeDruUoDSXP1Nx4i3CD8kujSsc8J7gtef22u466CeR6DjQu6UMo1FxkC84GP3UTRhV",
  "key23": "3ycHHdmm7LhPaJxisPgs3CqBtpohpQtzPSTU1JXu4M6X89j7RSZHtfm6vZdQ3PPCu8NEGNtt9p1zjW16kkAey45G",
  "key24": "2HyLc15wV62ZDnNuDBoNQSBV9gdn6X38FgPgPch6JdkhD8GBfEARXujPyBbLYMCRUhTuN2frzsQhBmqzBEDAnKxo",
  "key25": "cGnAkCBbV5ARcC4skRDMjUT8DGyz93KK7gEYxyxXGLP9gkLtmVoqMfVRT6HoZz3GAA7tEkEu5ez9p93apZdVdCH",
  "key26": "4etx5xVx9nzi2uxZTejfu7g8KBcYXvjcsn2RUNd8oNMwF29uxSscXqRq5BKf3SSt5TjrTFLLmUCzCZE5L2wwL75A",
  "key27": "2kCkxjsUwZ7MzrqK7jYKLiFADH8SDSXCXyCAr6rzxPioh6u3DUfJScmJmRZmtTh4JoHvM4rpCMtV8xKbnC7xxvUa",
  "key28": "3oaLpdpeHZ7HGEjJ1Ncej3KUaznaBauzhnDy9BXLYsALZmVCCWr1XpDyeMozUY5D8dwuymJ896mwRDy26As1e96X",
  "key29": "3HAuhk6spJ7fSbEbHrgmEKyoZCzR1uod3R3eNrVJrhnNfwvTkxZ9qFu2KaAxCdqzebirc5LCPnVdNd7DPiWHrgJq",
  "key30": "38ywT5wzi7ntucMUTzW57ZM37y48J3oZpbdSNhWpQHksu6w1p9h4AnLac9yJ2RwtE5w7RgqknqwQmBXp6LQBaRo3",
  "key31": "KZjY6JKSPiBrZTRgUkmVTnUyE2qhByiay8KeBPdg1C1ExJKt1ssV1zc2Xsjs8k8DQ327rFYH7TBDDwfqW4cQkwB",
  "key32": "5Bh1NoYDQZcUXbVeDxYndzi5BSrJUD2qtoLxj3svTvVNW67HZCdgB1PhQC7TzM4HbGiam4Xa5hzfgWDRwZEwwTeo",
  "key33": "5rWcAmnYxFYdVQXrmytCiw3rZpnYSHxBUuGn9VZX8DSVSfep8t1bM5WWXEHUQPsaAwYnDtC8CfXcaUUXkbjnVZgq",
  "key34": "2wL7KYNF3BJKanHXvDiDgEQ37piTgxuwYJJP2bLnMUdMdzYRLzeeyq6hqsm3MYePHkTdF9nGiUthxMCPJvEhkQAY",
  "key35": "56Y5ER9eZ9PTdqi62SQrnZUybATXwYxi4SnYJuL2XTx5SnaYpfLEZS981t2N8796TfmW7qPrB6W69VUQNbMxfkDP",
  "key36": "5r9XhERX54mjr1RjAhi1HEwLiuaGxFgYxGdZ2bZjehKhgE35z4hUL1h49eLQdm5wZc3Jy6edd1uxPKptvFfLk27U",
  "key37": "2WjDWjWLHzgizGLVFbR9Xamo4VSbHE92JQknYxFhNBfhA8fXAgWkkfAQZJGiRy6b2Yfu34ZBkP6MN3ZrzdwxiLyQ",
  "key38": "LQSufPtTiJTJPYhWXS6NWwETRnm2MLXiHzCufp797zxHEoKvwsr7a43m1LbjjA4Sh2YAutgFmibFoVzpJe8yT7X",
  "key39": "5rxbtmoUcRrq5mEQqdErBhXJtbsyjckaFGwujYAx4sCLSZztrauKBk2Pe4kk7MwbqoQuWVnQJJHFpYwYYcNTmPwF",
  "key40": "pX9uvKiuLxyeVzQ1mxkZMLA9QGLeGyxVfK6KZGSm8cudFg58KfAShPUpbrgcKTsRrEkuCapsFcoJ7o13cKZBrQB",
  "key41": "5DD3qTyishgKD7grUGaatK1ocmG6SbHXD4kXajWUdiJCnCCP6jR9UXp1XDACaBgmxHo73FU4Ex2SHsFD9H3dhFAv",
  "key42": "VqqDtmtCS5nerCZSq4yXb5jKWUm6jdNaA2jGAHRWySkLFbKR1b28d7eA35BECU754f1c5UJXKzBWow2AS46MKSo",
  "key43": "pvtJLua1VnJq4Vk93yqeeqDP8fQiMWL1BrfcEdjp4mxWKdyveqjCnw8eR8g3DD2ANDUv3qkCQe4V3UBHftFSLaT",
  "key44": "4LGzuYrmrj8aR4jsL2MeX5o2Q6Ten9LQkgtVfp3oYP5xc7pud8Pzs5ETshz4AwongMZZQTYyxBiuXKBRydFcvZ8c"
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
