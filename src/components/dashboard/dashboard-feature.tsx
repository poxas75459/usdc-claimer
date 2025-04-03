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
    "uavMjSYbyaVELTTrW7gMPfheaArxnNs2A6YPhU1d8V5GpkRHVRVmkH9oLPdkmQvkxN91bSyoA1eoBzfBhTpKo8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ANJrhN4erHZzuDXmjDqNwijX1cQvNZnC2HvnLkMvvxXskrvj7XPvjTow8mp2eVebL9uSeBLobHj364ZyLf1No9",
  "key1": "5Sd7ue47iqWsfuDkmN6VkZBByDZ8qn5qbJ7oDKSSBJovHo71WeuXBivVenHr7bAFT9HcN7B7gge5tH7GRcd11yMb",
  "key2": "y1uzg8E2mWHhtZ6entPQtcGHB9yr61t52wgJPZDG3U6zGW1nqxpgNAvSpMJbmeJuHeCEGQnawYbBHDESAnE749f",
  "key3": "32AqytetsUL4pxR6gFSYSbWDkUVVAh2o4DehZF7WajfEcwmJLrUdGMwANuouWjj7vrDn8eNahNcWxwmidNCMoj7p",
  "key4": "4M7gjYAidWbszdcJbJnWr2ddK2H5zKfE8d88JPPsGCSviPrRmASUw7vMJJU7GbP88uvZcUzSmkosyw52j1QbRHXp",
  "key5": "5STpfSXpZc9HNrFKVe9JUXfuYrUZcJPsDgsmfnEgrGuKQ52WRisSLKQ5Na53BGp7PXUoTVah6y1K46wo3EtetoB",
  "key6": "29jAdm4izjSo2zaCUoKaskgTpJnQcsGYM3JpZ1jiwRmHhmNHZcEf5qarg4JnmGBcXtHU8S4kygL7NW7UNoRrDKTs",
  "key7": "2dMEWRAyRcnjBkkwMhxuFcxcsTsf5mR6t66PdhidWJ99A3UDQYvdBfE58P7X57qrScQCRxTrtk8WPmHdH3RJApET",
  "key8": "2c2aUeguNtef48X5VaGV9WnAAdkFuCKhEsnCTF38rvL8ZjmYqitEni419jgYgcNfGLp8PRPpoQwvZe8xY57u9Ex3",
  "key9": "2h8noPNXQN9B1JRVgaMFEnMxXqw535aZH38MXFj4aUXyXCbXPBepEDZbLJ7DmN5bWQBU77b1Daqo42VVMDA4H5V",
  "key10": "5HXf7uXvM3wYN5XZ18oLoyjGCuWmeH61Qfn3fXh22a3uaazzmB979zRLY4yGWk7kEWWby3G74C587h1E6AKAUee7",
  "key11": "35mWAzFDdvWRgdRHJJcVcewegZxoMmsnvvcxtfrNePk3D4uUnT9KRvP3egNcmCUzqEzCqdNj9XD9fGFtDPSHWFxF",
  "key12": "21eunHFESmimVjMBUaKFmxZ14Cou5GBo3HwRMj5bES7dH8ohEt5aK64BqX11V4tZGzzVqGQD6oE23SRWMNDatXsP",
  "key13": "41KJ11W7nZ5iTb3FfSKp2SdcrTqrL1qu7piEDb2cw2QkoEv5YPJHzhWG1hxSRVK4xpGWhzw1sh4uogPtAWdYwvt4",
  "key14": "5wHmE1WzWdzGvagWq1zqjBmbiK29pCxF6w3iGBR3FSrRc9R4USMpbJpQ6xHYwuhJ4vrdTJjpwtoQMrMQhYh7KkLV",
  "key15": "27iFiHXaQEc1XCpcYLz8T3XGufMP7pc9bZXesiS7RUUe1UWAP8ULApbsKfWFYcfsAPW15F7K9nVjkzFo89ANNdBM",
  "key16": "28a6FQVka2wGKFUZwmstJefDuw7EBskdxbCyGpaDge22ReXUUsBv8a5xYTs1VJnHhY93qumA7xJWX1LudVfnEirZ",
  "key17": "2nxNMGMrvsoDD3KHbKmo8GhgaV6dPjscvF1pMxrwjwNrNjtkTTMUgHhvBcqxKxdrWjtMrPLYT9wC4n4AxomrDdag",
  "key18": "3wbH4o9riYizyudoxoRd62FXEWGjQe1YxkXYgCJVv4ME8DDaV3SbzsqEvZch67eAe98Dvy5286qNLyPcdPHG9cRS",
  "key19": "3vtsCdU94GKvNCFoaaWqSyA9x4vVJ3FCLUvTkC2ZhArKYcYq4PZg3HXMXuYFRdiHrERa1euYYnfuZyzsG7DZt6ru",
  "key20": "5tuDf6zUmzB2CGV2xiyQxydfNLNSemm36PFzwTYaqJauhVtY5kCaps3FPDaVCdjW1BedPuqnneozMQagvB9BiKqZ",
  "key21": "36TcAqerHgGQ73tFeMmf81hqUw3bRw48kxAwUHdjEYvkSJk5Luft4SCsZUmDSxf7mtmkZU447qb11rJgiJVUf2Rg",
  "key22": "41Ji7owhzmGNJfLgjhCjqJYqKWQGKAGrzgX4vrMJF8cC9YcQDFmXcFAskx9gpqZYQFrEWhv3M5Nz9f6y3Dg6TaQA",
  "key23": "5w164rWrsqu55e4v9dpNNNubZd55h9Y87kcgJwdjCfJ5MyFPCQq3ftta4vQpC9AahjuW2ssL6CufamFVbHv1gu56",
  "key24": "5zegiZ6MRGiPXeAgA1oobJ4FmbFU4EGn9wLj2SKPX194MX1PXeKe55kRUvjZxkoffhnx2hgybxmEyMSpWbZoV6yR",
  "key25": "2Zyebr3bHHuhYX4onkAxTPf1vjP5BFLArCBU5R4cJuhrwRnjGEuhqYo388rDqqPEoD6SHrGYKQN4HfqpaLwrxdwi",
  "key26": "4MAjpy5WfQ1ysmH77u77z9Y6N4MKBrQt1SHK8GDsg1VhhRfoYttTnNVeQutLXqAHakyJTtfsi8JD66CRi49rrfeC",
  "key27": "3XbckaqJ9a7b5wAL7cYdA4JbeXgrYe81f2kUg8nrCyBoFAev4znP1jE4wL7t9jdNG5cQ9maX1Sj8yH8nbqATfe9F",
  "key28": "5QdyUHD4HBrRg3qrY1cfByUKM9Jyhbdg1sWL8qf3kk3xHBWqodhq5x96UxECed4X95kAecxZ3K6SC2jbPCNe96E1",
  "key29": "62ri8vxHJJBUbuQuLphhLoDHW6GB9ev4dsThNhMm9qU1qyHwBPb7XtFDs6b2vLQYT4yLzTZDvST8MyixCvEQPM9z",
  "key30": "4ZxhHP7h3qipopFdyBkA3cR7yHcBw4heFzYNysMTNVQFAY3PbwCpR1DZkQooeQhm19Yjr3gcpwGGszD24SDPqHNj",
  "key31": "2mQ8JF8wUuaZtuZVzWQPaLBEBJ8oHHHuBtNs17v9bsKZWagqr4hVsF7hXqWJDCobcQXnTxzFdddGjVL9Kn32UFFS",
  "key32": "4n38FMVHafeH4c8UPgpBJ1MZFX8WPovpZwjkjFcrMk3zKbC5NZAhDmhjAbCddP9qkhPjkL56rMY9JywMi7Y6KhS3",
  "key33": "3r4c3EWfFcCPLWAeCjNfYvHPDnjHVqfrBvYK4DbunQsXDcuLi5HWNfRc2qK1QWCRSGmb1BAypC5tZUvn3aXHqVs8",
  "key34": "4RFgp33cvTALnxvRKuUapVy7UQAMQVEcwC5r19MLrcPG8uG1xcf66BF2BmPW47trc9GGfNKZjTkYTvqbSvDLEAfX",
  "key35": "5RsjWW2g9qYYkN3HNv7ejHvuezZ5QYxwJeSD1csphNsMDTznWd6aRCyziSzGJd3vCzuK6rtnUYstRmvrhWJM7d6f",
  "key36": "52LLiX16JW4fLLHWSH9KwekXC5Jr1xEoyFBgDi1n4cGXMjB9EfpLEh32ZkZAX72d8dJG8YojR16yoYosZ1r5K5x9",
  "key37": "4mZv2W8QceWQBnVUiWjdfJE5h1DqZMxK8J2FsfKQ3STJa7fNkfW1C9cWFDpSgkCqUKf7ArJQE6JdJ4hLytvydeQw",
  "key38": "3qe15H96ffaDFdqzqqbaEyYhKGo6Msys2Zi2m9ELfUby7AGECBHL4rvfB2iVg39woMthPRHNn9GHporgV7wco5Kn",
  "key39": "3FLmsPucCsVma88PE7d96wgab4hF7gkGzdK8GMMLhsFT8JamJxPE2kUaMGw4yJpMU7k29hi351bQZ8BkMJ9jaC4t",
  "key40": "4rvaCRsmGb5xAh8AwqWC1tCBAbbo3yrqAcF2V2syNSoMRSKqXyoq81BbJ5XaCwczadQgNheCnU5GLUkP9TT2j8G7",
  "key41": "2RJuSMeFz8y6R7JMKurGTBCV3jUUf9F7Ay8k7Acoi4Zdj94PmriEHbPaeqWMPJN8xHKj5yuGcBCAoyiFXQw3x68H",
  "key42": "5WnwdPGnWBEFJv6ReV2Qz8ghzAVoSEPSsys9uDAvAo7C3UyqnoJjZJf2xa77ypU5vowUoQjPEHFXpzYkY6hjVieh",
  "key43": "5gAQwYhWnjEhD8krkGi4iWn1CUSrqtJcfGGfkD797G4rh24VGEN5JRS6AXTv3eiNthEPD66Y74mBLiDneBPu9nN7",
  "key44": "2n8wW9TwuFgpB2wnSYxbvyS53GY2Yujeft7XwY6x1mAHgC2ueZ9qJsesRrFQv6sG37tB8ZPsAhn6SBU5XFaBdJqL",
  "key45": "4z4Efijmq8dMXggYocgBjEcjVGWNZZaeZbckVh1zotViXkxAXxAsSuxxYJaczZqsSWiNn97ykbz44gSiVLQpSTv4",
  "key46": "4JQQNKXXecDFTVR5zCtz9DiKfBEGz4p9YoNYsnDZFQaVRYVVmV6P4s6yBJFcStUp1vCAKbbav1XGYU99sng66q2g",
  "key47": "Bpak62kPpqVRsDU7DYc7KjXyLPCnuJDvHTu2DpSe83Qeoo8bCqvMNXhTH7Y9UBNgDvPRbhKef7fFcrUEB71k3Ky"
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
