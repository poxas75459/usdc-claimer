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
    "4UTfLYCs2fHwF4W8SwHfWsjHvfCH4WBbLNb6nktTbMrbFxTGEHNg5q6JRuZB55RKcBh69yFkt2d1hBqLTktaENJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRrWwrxs58bKqERCKAXUbRL2NReb3LCTce7gnA6qQgfoB3GmmiDBG2BvrYmsC6H7qfX4fC2z9XZYM2AYsr3tzj5",
  "key1": "2SfFHHheJ5EjQUPti9aHZqnK24fmRebALiJHaofxo1qq3uJeiwTvnXuoSpxwthSDmY2WQckfSUceq4h32nCnTWiF",
  "key2": "4UJnRh7obhUpqhJC6UZbnSLaiJEifZV7KpaNUm6ZdpS9q3khmkNFDCL5tGhmHSvykvAwfZT9v77WxbnehDbc9Y9r",
  "key3": "4uakmQG6hAHR6cYoEDf22DV9FNs8YBqfF7XYJYZZkGDd6RkXEEKBN2uEGbF9z71cZLjYrX6aJDXqwYLQDxuHU4Au",
  "key4": "3iaFFi7NTWZPn1QRhtbXhuJ9WSNfiJki1w8BJ7vmwYPqCTqpqKysiBr91pyLSAgAgFwBtr2Ka6azVcvrL7qQNrE6",
  "key5": "ksJCRSRE2TFePstmuKycPTLbvQybbdsWpPLGnD3cjWMSW8YZF2xXLh3onKAKRFmDHa6gCFEntTym72B5r9CGnpp",
  "key6": "2N42G7CoHM1cnJjyFwaCB4JGS6gbZrkkAyuXeRA68svmE9jM2vLjyxuSu5YSZUWzFj62R5AXabodEhhLxcEbqCzq",
  "key7": "2Z1DKHNwj3LdYNStH5MZvk2T8UU3CK5qed4ErZ1fM85bqdtEBJmoj23TnhEfxEXdZjpGYAhLm8g3PHQHXx99VKdD",
  "key8": "2oyTucBZuvK4v5YnDZRBPotS53q8xheyNFqTxALmVqPX6Wf36j8b3THtb5bLaZXjGKpDeqJb69LapPKq9T87fyJD",
  "key9": "5T8DwbNzUxdCTivK73JLKCZaJUoJEMBr4ss8eJGjaUq8we1vPKQD8iqwbnWCG999xRjjekYVwAaV189dFgUfB1Ue",
  "key10": "4q4sWuMjJd7b5y5S2XDKUzLNVG5SnBxmzYg2LPCMKcHZkB4N5JjJ5JFdkvLjYDn2jqMh6erVkLtLzv3hcnZTTAD9",
  "key11": "2iqkdBipvpGkr7Dd2a7dZV4WidiMeaSXMeErYYpUTxLo6bht8Unh4kceo2i5PCrEa84bQ2god8pM6mdu565p6fLi",
  "key12": "3u7DrL1CfrXBeaW3cwouR4PaEh6p5t7HdDvJ9hdRLLb8na9osQHFkXvyF2ciFAzdLnEKb1yUJ5YQ3ut4ta6fcsLj",
  "key13": "2ba9wCi9jTP3s9VyizsJ46QvDwehgY2oo9QGvuzLjT3KfbTTbr1rHtp7RyrtmyqTfGpvY1g78rxUgmWDAdSpV1GZ",
  "key14": "62xUcqfHbzttwcuuEhP7BxJpkcdC6E7K9V3Kwn1Fhiy4Hm8iaB6aSQu3fJxWAP4Q2vf4gNgZwRCcRsHPxWsKTLho",
  "key15": "5yJqQMwnMXESHbrWk9gfH86jxh89njssbHvSn3cAhqry2LnNAameATUNanoLXPgMd3bXnYHqnbXTUyo9ecFtsQKe",
  "key16": "4Go66LUXYwHH6CeQnZz6anNY4YVyPSyTJdiSDPQ8Jc2jARMfhFyoJixx6tc1bZBQEfFj4iMugbTY95Ab8rv7nYTL",
  "key17": "4hToBEtjWr3C4tpJCtsJpGeQpaMWLgf2CoKkFVcR5sYazx5jVNEqhkzGG9PWvtrAV1CzKWBaWJy5nMPq4Gw7QZu2",
  "key18": "2MuQKHpZRnzwnNoycTpJx3etP6Ga4RjdSPkvvhUn3gPy6S76zkVAA8GneRBAsUxMS91Y1FXWb7dFm8Z8r8bzDG1L",
  "key19": "5cW4hbUmnFVqwmCCbA9ptadU9QkyxcSYooBEucv7VkFAHSEkfz1X1jkqs8eRZQEeS8PDa4AAThSFb43bw25JZ3A6",
  "key20": "5zZ2r5i4o4N5AtujFHFihiZ4jHW5Htix2SZQvDhx6ZCJ9nWFgu5nxiT3oDkyYi7QUEjqoQ9JjwkkSoHoT4oyudDQ",
  "key21": "5F4n6Kiwoea53zbdN4ZbyEeyy1zc7phEVM1sMpQoRbAhJjizhpivtHf4hbnvExTbKa4dTxyxHHHjMHsqBrUbxtzh",
  "key22": "4aHgGo5nMpsHuaHfrDuWiPdwe8fV25fC17muHMQcYDD9pyb9UUTBcUryQgFBooEB29cxXRRdXHxR1wJWXtz1Cww9",
  "key23": "4FyXYioAp2gohrBigrbijJtp2iRXshCUTWqSzhGBSaX5e3AgcQPDLEuN9QxTQ93WrqDiAbxQ8VMSScPBVYogtw8k",
  "key24": "4c8Xdp4NJHYsySXLFWQwitFYxDpc3fboxDgae34nMMna38G1cEThuTvjPeTbiFM9GeLSBg4xFtGQRBQCqHzRhkKW",
  "key25": "2DJzGkuEqUsG8yXzi3UumBrJV2HEAJGKGVWc7QAoFat992ydkPv6ayGxDLQkan8kZqSTs7pw2kx6rBJsFAj1zqaZ",
  "key26": "2DFE1BYVo6Xia3wMK2KagcMQ7ScFFMUsXHNvqy7YgAFnJPYTz7fBEtL5Nrf48JZizwtDgQhWRGKeMpxVMCdbFtJk",
  "key27": "26VDqAVSTWNzrLeHwQvVKhr4LjLeJ46CEsGqQVkFaspsNCCkLjGPukaaHa8pXynWCbX7x8Kc6cEKbbe1nrJX9ic1",
  "key28": "4F3qTxm2pj7KzFdseiudsZYzGcZJKq6ZFi7TZ5UjZEqu1RS3816Nxmhxog1fjYS2quBMFUnFxoBe3Uk1EJmcWer5",
  "key29": "4ywSVY59TeQvQLfca3gWmZD2kALCEN1XbroMwJgjDxXGQSRUMibwr5wzxHiggeuFoXLVXLVG91rPqoSDc4Mv9pbD",
  "key30": "5gjTdZWAgbaR83fZ3ahh3rCv2EaWhgVFiZuvLxSkrTMcrEqnz52EbdyUc7qRA2F47a3nbMRRLbGQh51VU21q9HsL",
  "key31": "3PwNEndSEj1pEJs2cZ7SqJFsvzxFHuQHY6qFc73sFdQALHt3keCf4oBkL7FCee36aKV9iSxDbtutxpFpSQysCx19",
  "key32": "2Qiq9AfjSeQo2gtjH7ANsBCHQHH1Wu5AuMkKGThHAFpoCupPkqrBu4ZQU6dk8hGuWX1SP8uuZLUVz3U5v6WTmBJh",
  "key33": "4Kt6HX2qbjveqoggNwpXzFXPFU83VcfWAJ11rr4T73NzvCC9fmv437EVem7RxCrqdpUUqZfV1myz5fYsLchc4128",
  "key34": "4pUBvULaPjkGPU7G75zwwmsq3mLUng4inbBVCA9Bx81tPAtqZQoBCL8HfqxgmK45cVYadcBFPL4BocZCRBYrf6GQ",
  "key35": "2sHxCVRsLy69W6YsjJBeThn3jNmGkaATjaaQ9GVur9hd8bRfafjrWSt93m7u5kJMKAfJH6WJKkbhJbgCp42tGXbE",
  "key36": "3puqi8BamqfjCYzLhzNKvtCtSXC6UnZ9QWorfv9Ci2KewZRTS635BCpXoRywTjwaLwaExiFmZiw2bBzg4mBmu7Ft",
  "key37": "5zxgTkVTM1msUU6fF4uk5jVgEyiPb1Yqk2fS8pfCj2b8nyimsJVir1nwTqCkWqpjensTtFWoisZcM4rKURSvA6FD",
  "key38": "2LRKPxVbHKZ7EL9jDwZxheFcDDa1z3ddw8RFHmBC3iSeZhV6S7XYWEKHMUVYSxz9FrCmZjv4JRn7ELajL2ka2kkM"
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
