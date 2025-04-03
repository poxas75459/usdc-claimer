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
    "5TkLem1skQmjpUssMrbZjsY1TUZo2HFdcLko2QUYDwH3RtWPNozRVUN2s55yHwVC4ZfY8QjAWVruN9GbsCkL4rdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joTHWnFUZ2e9D9eiDg7iK6UM1fRZE75NeFqwhVsdZYX4s2t2CaGZkyS2Zw7RzKJS47iaQmoxFxobbJ1F9z89SLL",
  "key1": "4ngXacaDNcK3zo2FM711ygzvUfiYLo62uKiW4ou3J691SGpj5DGT7wK7CBzYJr3mPeHVJd8cBkNcWKYV61kcTMK3",
  "key2": "67HhLUU67M9gRdbPmZ4UYjAmpx7zqhu5ywWWwfrd31QANJ7cxbvHXdJ9ajUTkutxzJb1wY2QRTP9ULQQ5EtKJKFV",
  "key3": "22de9cTNt7myvrkPjzAzXJXvjELSETaUvVS1DcRSQVnE493pM7GG9EgS1n1dDsSwqsrJAXw1xio2L7jo5mqg1nY6",
  "key4": "42eN1NTUGMFYBoD8HKoLyfDCLTzoVaqjkzWpiFESjVATPp7z8wQApf82DNYqu2Ek4imWuUUuexoBSQQkHg3WSQdj",
  "key5": "5iQMeHpUWcKWVrJgKNouBfkGNC4gEZseCdvyWEaP677pmyw74DBgPiKjMPoy7bQj7BwPJpJk9cGJjgGow2WEzn4e",
  "key6": "5UkjoAniNqSyH8SXqs5EKfn2KpQm5qToU3rk4QgUqUdxAFbKQXriAUKiuvko36fpmhYVUzESGihggutwRxtLYF3b",
  "key7": "KBLwJ4GzqARmBJ6QNbCZL6upjoG9GaRLzfMKcz7pPdJXfaFK1fifbYdnznfUk81p97gobbs9uzG9yDYFYrzagpX",
  "key8": "5EB15pdVKMvac4L5HSbf6bJky4USVWQg8yyRZ6FKZL9z7NdYjmuDPyVkkEfPrzTAqXPRpguEYRUXPgEVk5gZwAFy",
  "key9": "rrNyzrd4U1agpo1nsCUX5eyVN5awx1Mi86TgYq6NceSw6Cs1qgFAZ2MiH7SYuwt3QcZqLC9Z7dMfS9q5GqMNZKD",
  "key10": "34CdUmCncfbEiPkJdcZxykAPhUSeN2UCHhK2LnQxQkVXcdunju6Hj3yyN3ByacHeFBoinx9RtJ5ZDw8rCnnV9uuq",
  "key11": "2Q5uQcgkmwMinGdeRNLEL3gN7WeUnKpQ7jPQZYsDymikKwtivcANPWfu3B71iGN26GnTXoKMNFBuFTiadcLivyXL",
  "key12": "4xJ3S1ksChUA4deXN1SFHdKdTgnLr5GsZDVotA1qrSmiWouM3weXbKspNWee1diEBdQUJmJSsgNWRtcvmrLMUzxJ",
  "key13": "4nqZJZNWvWmCMiaXivc1JRxc9K9bovDkekNw1yqHbK6T2sUJXTUxWHmyeEsinnNFcvLA1vwLSdr4oYy61ig32KoX",
  "key14": "5H5NCNL7TrsqdSdD3SBBRUALEvzz91NTw6Cr2FfAuq84iF8DNoySmuT4KfeNs58wC1XvdheywpxzHJXP1FAvbiFQ",
  "key15": "4oeAgYQf9YNMSxYLwYeD1jNxAP9J9GiXjnjN9j6FAq1M1qDyUre8dBwJzBnNCWeLQdPV25xV4Cry796Ayq9z87wZ",
  "key16": "67nGtuywp6BdupUsM96bREpe6zySgosP6fEWYPFneWu1rk2BC7SfZbksvLhXWCxoy1wem4rRgyT6BgwSS6TeZsk2",
  "key17": "2EiKLHBszySRgJJa9wMxvpEQ6BrHuegsyirKcdgy38ziZNTayk1K8oraAwk7EnhmU4okiXiMFpDChkCHwtESp8eh",
  "key18": "3WnmYcBemD1z8ABrNtTMdbcGz91iQZ81Vm2mPBXEs6uuS6u24yoVNnC5wrDSWURPGaFDGuLLBgaqDBLi5gQs7nF5",
  "key19": "rE2RRQ8YSBtqXcFidW3oG3ZjyMeSMuugSH7R9PHjvXewzXv8VoQXGvpLYP5p5Kob2t3ddQyQHwBXYuDzkjgi9om",
  "key20": "3KhD8tSs3KHfmVtYCzarhkbvf3oFiYe8TErHEsxkcr4anNvtDDnWUawMFpZNpXF5pjZGGBukq58qi839v7bdTM5h",
  "key21": "2qAJPoeWdZuNFWwjaU93p4pjeYTS6ib86M4ynjDrperwXsYCsTjiTkvBCva5yy2TtNKVmC8LpDr3RvqNNnRTxV8M",
  "key22": "28DQMpeVobAVA32FaEy7tjb3Sft7L9x8oBP5Q4TVjNABWUWf2XDgZw9aUsaVXWpkT1qRoP75wtKuGWHyt4imxvfr",
  "key23": "PdSRa6VicydBgXP9GpGEzt4fz8FHjZr53jq2EwjHu9ESEpu6Bx4TY5DkEYUCXXBC3mKw9xMpokvsWmb6dtZSQy7",
  "key24": "5mRxfSQhPDt7Sq7y3uNCyeAjEuLpKcZz356njb3Vf3tR7Xkao4KMH5KGdA1ctgMuZ6HCHgw8h5YDKpeqw9My2jUt",
  "key25": "uF9tZKtxUfBwBcDxKRVFa5HmixLTL2TtUDD9EdjZLg4XSef3nbLDSBvPun9iYYkUSZTAbJjP8XiPZXQaxgJtemu",
  "key26": "4FviedqcAv72NeL6D5JhNWLj8P7aJnxQSz2PDS1cGeGBZLMBd7bNmHj8ysyuVyNs923pFHsa1XhwJWUMwi6dGz2N",
  "key27": "vuqCk452SXx7QvGpC21PDF5VPz7u3QDicpe8PL7XGE9fAgUv6iibvBytc1bfhYvprWQGJv2dccDEtv98fM1SHid",
  "key28": "2cnTzyqcvMBn1bTu9mE8R1JqAJGYorVhKHx3pqSzWYP3sajDVwhSkNdexsWsXxGKwDWxodp7nmoZ1crSwj73ZgUu",
  "key29": "3sxYihxqMiMT7ifSLiTAq8vqUfZ7aHwyhUsq1EVuD5Nh2dpVhFYvoR4WiKcsmiQPCWHupAVgvxs94jxw7qgST4Uy",
  "key30": "54KpyVMEAB1T7Gj8WhYQDhdzX6LP5ifrieqsEozKy7NvZ6nZrGmCP8DABRx3d7o1QGD2fuRYrSr7diTNC8NoMTN9",
  "key31": "4Rx3B6buuqhwggW1ev2FD3S3GzG6j7hCrfmb6TZpaD32giKLKpkKz8TETcGKNdbXeFCv6kkCxVb34C1C19sjHHLP",
  "key32": "22Kae5BBEfngMXK2VZPC5Teopmi1C43k5h7ZHWyszp2LwJkGeaMqZeA83GXMFthi1PoNUGz6rC1LsRcMZHCNpMpE",
  "key33": "3Nz1NoB1yEa7wfmzWKGVaijehuCKFAX7HDZCxfmeU68N2DacTYPZYTnTYzwuB8WEJYjaUUXAEAseMdKfKvWpQBe8",
  "key34": "2mR5NvsrphRWkVpWekAy4TPfWycRFD2dCRPPoNUvp7riSrWiVsKroezXkknfePhKARJqaZyQ7EjrF7AygEUsxRZK",
  "key35": "3gZ3GfMEznouo7eDqQtpf3E3bbHwm9xEUq8U9PHpGFSuUt5zbVTZjDbf65FhLokmGj9K3Jja7aHgULoEwnWmJr8q",
  "key36": "5wHbrMwGY9ve1d6a2vtNfqBp27vKMEApP6xw23aGtXNWiCBiahNNwrru7mPX4rgav31Wa5gWvFg24TdTgTaLJ61T",
  "key37": "4Ys2okHZpbv7VJt172Ay5U1jaUPzHk2qd9GbztRvmqA9Ac5DuxzBKWcr4ddAA6Eu84PDKvnJApzhXJ98xUdmyR2M",
  "key38": "44qTF9QkSRJi5nuKNDtNqkznQh3wYWaySvNdpG26AtRgUWsbawqfHomnedzSjW18L8wEh38PofV1o9am6SvqycaK",
  "key39": "5AZFzHmJYRy3Ge46RtGJEcNHMGyyvtj1U8wpZNBnWkyVo1MkhChT5mUHznMnoz7nkKF1R6rD6jZb1uizvwjvy7ow",
  "key40": "58JGbjGXQHrQz1AL28xwSpo72kCLbuMVPx9CdVstRRKakaeK3f15zyJ8DQBAqnWy7edJi5ium5tddcUur7Ncs5T2",
  "key41": "62aMS5r6M5a3PhVNngzbSBdQUppvJ3KNKZyvQikegNiqLVoyqwttmVL76hqeiYQSb7CkQEcoY4tSSa5EQ9RydzQT",
  "key42": "5jLK9itKaPSY5ADy3ZSHReA84DmfgvjLxfBpyrh4MDX4cUeobHZqrzXjJpcNozTVryX4sdfcM5RjyAsHQz1UmDaP",
  "key43": "5Q6G77EausAvudGvFpHpAqCizejR7ugJRmGSA8VZKGEFF685ec7ijW6FZCa5FrquesAQc4Q8JPUWEj2hW5SH5wXV",
  "key44": "2k2ZtmWWaN78yUi8zucRWAHrvPj5yFzUZjnXmtPoPRvD5JEGe5KnsDDNvHBicbs7xqu7qQNSVTsc4gi1Qbp9J9St",
  "key45": "3Kbvt8pzV6tUssFCTiknwhBEh1ZTe7NTck4ALCeYTubN6MazcrsXmZy8rKDWcJwyghJT4HN8mJGexbDrCLpvnQ9h",
  "key46": "3TWHuZtaJZkdxkXti6xNzACpMN7Jn6adMipk9ppkCXDhMUSgLvjqmWBuYLGiazZV3jxq3uk2Wb2YauG7ew12mmNb",
  "key47": "2MU5Ww4FUc2pZxdVVpT743sPxSSUMb1DbSNikqhMC2b15TeJvd9SzWuNGPJ6V8nCkxQWtuvex89fEJ8G3G2k2EPy",
  "key48": "26EAFh3SJveB1JofGokVqz3AKS13nF59dnTtjDHjGcYT1sJ1TuyvNszvZQdyNjudY98iV3ReCtDcmQgVUAPY2CCU"
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
