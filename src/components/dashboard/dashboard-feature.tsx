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
    "2WC2KL9A1a7pfS9JXC6V3KNd4JEuSthh3VdUddeT2MJBdZgCSwEhHXvcNNK698YNsxKCeSMzNkFKis5jQdnKwKV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QS9xoEtNMDK72619MCNhZ4g3tJNSwx7U7Ga6Qf41aHJ4YysziB1MKomDc24VYyM3Ym8duqw5hozHsgJS2PQWqkV",
  "key1": "iP3KnLvkp4hZ4KGb99BMG3qXZdigGtiz2oAEUBPmjAUTkiHMRBA5v5N5iyo5M4L6ZMoM5yf55MMa49y1NaPLf1V",
  "key2": "3JAe26YoUjNae1y3jfc9wyfdRiev2ZmkZta9h2qaaDyAz6wLpqeDfjAYCxx6Gey9EyuQxYBroBNBnGsUi8zDD2Xc",
  "key3": "4rUvEmxzqqd9XZc5qKFbxELRg7DZpcE2psKTCLKi2g5ubdB8nb55T1FXtv24MLtxV8Vgg8P4Zvqj7EithXvJGHfA",
  "key4": "xdyskEScpTgmGqMmhckapKZYooGyhAsonYDWJorMEWpFfvdEeyG6sPwBbi6MCzJb9yjBKxivMMCW8VR4K8NGcLp",
  "key5": "3QUKves6zpxsBojfCkXiXoD1K53pDubi17Gwr8PgcTSfAqt7KJZRvPufhE6CNX6ekS8qohBGhimJm6S7PrEyqx66",
  "key6": "5RP2H9ojpgSC3YjdFxdmhp92GiM6G5MXUwiJsL5zPLsaJRczv3Bf1wvFMamyyeBa4navDVY4LGwWdmRcAYwdWj5K",
  "key7": "5u2deq99qQbndSHoWbFWSACUCmZsj6T6EMNdFu5JyYhia6MUHQErvvpC1EEdy9ezU79KyPpzzS3WrDFfA9fNruDq",
  "key8": "31yza77B3iSjUPKDRoXtvQqjEA7UZGfAX6jFhjpuPwcLeyCTGk6xQjjBqxL7QYYXUdMWBCFVcESaY3NjccgKPWN4",
  "key9": "44kocEtqq8YhKHWxY4kEneC4GCaWT4QBobhRRPwV18nZchNXYkbS8n21V3hhDm8onPwQLdhLCx7CvjzEhH4xTZZ2",
  "key10": "2TNEN8qwYd1hDEZSVPD1jLq2VAB21r9KFrzzU7NQYtZ2tsjv3gS1ScEnWgxJqcsmKRksZYTnoedMpqpoH95Vv3eG",
  "key11": "2KtAw51B91wqfhFeFitupGi6EuynVNJVNewZ8NHdbybFA7q5CNEUtF6NxpsDB2cFyQx5eng1188f79M3f2bHrqDz",
  "key12": "5QezZrG1agbSZyfCRkWsYYfpyGjiBJjq6Gk2PDWx6eWii3hEPoN3xpZ4mz77zAM9rNp9qnweGDiM4b1bs8VUUEpa",
  "key13": "5TswHf6J7zoKaFp3u9UCrVJxrHF6r3dcwrSXPKBt8Kxm5HeReTmCD9bjfSpht6QyhFGQ8whFY5bjisqtTBoD7TxR",
  "key14": "DnxYUq8TFAg69xdgHP4FPEf817dnLy71yc2RzYwJz54rSha5Z7dHWBcDjvXqMpyHaBvu5WcRYtLxe5RfUh6b7NC",
  "key15": "62QQKtHvv2e9mdSEU93krQKBifHMnu33UPodQKMU2EoFiYQh72K4zLiRYgcx6RfbzD2v3ZR8xQ6nWQcuy3WXmwx7",
  "key16": "4xygYbV9JweSAiRciFCjcwymysB6VY9G7k7h7ZazCDQr5BTryBcg1hrKC3gczHTGr4egUL1toXEC2YQT3xVkc61M",
  "key17": "5HbbAM7QzQhmhhNpmAnJTWCghx1j6gLutfu1g9wzKLMid8pe79Vs1jT2vbAmy6ydKus74PhT5qAP7T7p7VPPQ3ia",
  "key18": "64RqJMxxeG83HB1DeBBeS3iTzsgUesrCNgJNAkYx8CgMciGTrmHNCea1Un4bdzDQnuJjxibdpQxwGV3Qhz6oE9Bz",
  "key19": "3fJfbScaKQ8zvFmJPZwc45WBKojo7nbKUQmXdBrJX3tWFh88m4JtwzeWsTWngXve6XG4dfmSLVG5iY4P7gw73yWL",
  "key20": "3gNkEyfMtPfv61HPxiwZYdjCopDhbHLSzvuFTsAR165iXo8GKGyDycp6Zg6bLertKFMYWV24ysNd9xKJS2uTF7RY",
  "key21": "2Xy6eDw8rnp3S4LgpQR7jEoKaPE9K26b3ggQRWQw9XdJehZjdYpP9jUbyn9zL44Pojqk1cEzdGC8YtLTNfqx3zvE",
  "key22": "ofQK9HSf2vJuCvPgKhfteMoUcMiKrgcNQaqSMtXheBruLUMeyY5454ftD6bxMV1d4hCQixVgNpnBTXEvgGdJTM7",
  "key23": "5Xcw7FbbU1HgGM1ewZ3pvDBHR7D8Ks7kCaVfWG2GNhubuVsZeoJP74sUc3WFDkYgWn31W7QjP9jGyPq2jKHMnNw4",
  "key24": "2oy2vtjuQTraqjpALW6WbB3CpAmPLiACdUYcWsrqZxmh3V3sVCX2CeQubcqFcGHJZog1WM4GujbPfkbc83Htaxpc",
  "key25": "2aYXGYNxw1nfH6jbbU19HgpqG5xX9rhuNAWJyxs6hZWHXvCEEX92knXadqpPaXkf6GEjP8cXuapX5uJ7MdhqfWLG",
  "key26": "5s2YaVjnp3CAZFqo2bDhVYfHMjaP1GX9dh4CyHbbqaBsX8W9CGwju4hog2JahNXFMAfSMRjGqqd7msHyTabifsBL",
  "key27": "4mtGPM9W6VUoWUTNpgse8yjPZ2tym7EHMW8cBrQEBZZedNNxxUHWgddoLKdsp16qQaGV9jjcd5oYzxtqZ174cyd6",
  "key28": "3GhxEaEFAodvipLb9RRcjgLp1MsY931R8dvcNreAc1fgCMZvYamJBjdgMX6axcX1mM5ywgsSK5mN8dww7HLneWzB",
  "key29": "3SYsC5zvPePVQETnnPHUe4uNsUg1mVjbks7ojbb5p2aG6L7T2rSU8iWx7biocWEEiCHxU5XnTRmqKzMhGnunYSq2",
  "key30": "4UGTiErTwu1iCd3Hm22gC5SkiGk1HwVo1txXRwsTHcBRKnpGmHc5e6vhAjoAxt3uctxWQhHAusgN9tvEgfZTUTsv",
  "key31": "2vsqwDM5aafamoH7aiKKRMXYxB9a5JJGXdcQxdmSY7fq6tCUAznMBd8F4EZkT9nGhiaMEfJaxsXwtodqhPEd7Tyi",
  "key32": "27nQ4SsTCStatpXj5RkGPfd5GzYZKkQx3sqcHh2PfcgFzxDe595JPeKE4vaMpeJyLK5BgRk7T4mgyYTxFQWWywA5",
  "key33": "28uqxFaRUbG1UWdQVgtE4TYALqee6t3C1vGTuoLFuHUoAevMdeSUJPLtLDJc7ptYUpLnkGyetNAgVPvNyNoHAA9H",
  "key34": "TPjv3UXsKfQaJHVqQarnMGegQ6R6ppUAp8ZGxoMsh1kieUae29JbqJmogJTiC6TM6WXNeZQuUALZgXDsF8sFRLj",
  "key35": "3XVz3rP2QXVt7SMB6x4BByhUyMHgRp92G8S6Yi81RAP5AWc6Cc9PxerLjbVumvJQZpvrj5c7Yyxb1eaVRHjZkKBs",
  "key36": "38cwcv19Ve1XpDtHSmJVVcJZA93xJotWYgHWxk3wu9rrLbGUoE6jutVzi4zWZNMiknz4goznAjdQyr4aUGjuvt3F"
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
