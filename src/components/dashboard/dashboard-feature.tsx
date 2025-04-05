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
    "3dtFtcd37gFnp1ASwkD6Lu1Vf8HKXbvAb4rRhegtk1Sp6siPZ5qcGzYSKep2JXBAjHuspgyKoYUqZcAweY23f9oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GK1sdAadFXDpKRQdQdwjbtHqoYpKeP7ELksfNEwTFD8KrhY1dnhjMqo3kVy8NZRDNPdN81WPDwjH6qerK4kcfah",
  "key1": "3DdmRFg8hjDtcwmdfb49bnmr3jn8XVmmbM1SrkpJd6vkR9XZp14mHoGb3Ysb9XgRRNTp88r7yMBWdLPTrMF5N385",
  "key2": "2vHBk6ZXwn7mVmWzqcpiyqqu7uUYR4YfGAspcdMtYcxxdycruxTCjMccPEnagDEjcYhzro9r9568QEmdcdsTbuoR",
  "key3": "5qkyMEDea8dZww4PctZeWpudpPvoi5HFFYn8LnNzbGJ7XKaiXxKhykYqVrUZRSCYQibLCcfgTfqnGn7e6WtNHNjG",
  "key4": "6MVHimZFUZTHRqnUUJ5ah7Vxm7qPyUMKa4T8BW5Rnb7FGxG6LLLsQGf7xR3D3FDpgknuSnjEH4znL6DHAzWdmJB",
  "key5": "2VckkAFzSiS5LTvceKYnZtywik4psbD9w6ZMuKeJ1YWSuzhyS2g8bixwc9yfUaHqoXYhLUZcnYjXA2cGzc8HHkn",
  "key6": "5S9SXSJPBhnj2Ght5dAs6grYppEyDonTZ5KV4dmYRUP2gi1EHqmyFTCH7jV2fZE7DFH3be7oXScmuiqa2gdZYdBz",
  "key7": "53QyckMwQcKr1WL6QWKfmcdG1zKz8M9115HivvSrAkzYPwrQEXtjMoXXgxAgamim9GS9JQuWPPz5Wy5PBwF7Yq7r",
  "key8": "5jaBeYzrc9fJxnTRtHJ5M3RaaSKTUQi7JhcJAHMLnJ6AjDRJxzFwrQUNJY2qanf9kiUFtfAnssBWiHtCHqdxyXpF",
  "key9": "5kGyrPomkfTPVtXDy3FZiMLMHgAsGAckxRi5yPyftyKhZ96AvQQRxKYcrryAWJi5iHLzfv8obS5j4omRzKUqh8nf",
  "key10": "JboCVjnVmhedRHNJkQCC2Nbuxxr1y95AY1txM2ogZnFcgKsLLKd7SJYQ7cjB9RRZQ2347DWBZyxxecccmi6kKtA",
  "key11": "tdfD9ZFGi3MhDSd5zD74mdGmgKVt5P7tXuPNiYbmxgVehCMjpSKo4U8iXgbTYNMyryMqJs6ZpvcQsx4zE96sxbi",
  "key12": "2PqB8R6jcrrjraFD4qWUoUuNptochmmMpkkbgZh3f163p7P2iXrdMZkmv7nGt9PCwhLoshtqbsfbagKdmmCbD1Ej",
  "key13": "SH4Po7Hz6KATwa6zugobQWQE5LF73Z17FgY8nkT5b21PprGXUbPwt5aXMBKZcmwwJG7uQXmPFLwhtRrvAYZqGg7",
  "key14": "4NWMtnftKyTG3aTTgKMGJqKMdLb3KJxbpAsTcYFcQAMJTz3UNekG2UGKzaoZLLhPoSpxMoq8iSf7kYaY37JDvFTU",
  "key15": "2Y3EGZxpRi3ypoEo58K6F8yXBbtpvTQP6FMGhQ898NsfbkSpD7U2ALYUHwiAu88RVAed7MgKAnVjJroyKkKqMuby",
  "key16": "Sm1fiCD8FmWBHscWn8G7CNTcTazYHdKo6o9o18uXfQve4RerZw6g9QdPEi3w8Scomf6AmAvrrVab1KVmRh47qFf",
  "key17": "4AmugVdEdpTiAeGzZx8vWgX63csAt5XkM2ZUvKMpUs9NqHWMzZMn9THML5SJXkn9AHfFuRtnDFtDZro7uWurv56q",
  "key18": "4EUFeK11wAQ5Pp4gQ3iozXxSktbSHuTKHyFWVY56wxgghVgjnyxsztYxLdqtrqh8JemXJRRaaXJzkepz3ABiRxgi",
  "key19": "3zd5hmRTPfQXCtMLWSGG8bkcNVz5upNDBkPyTTG3iBurzX1AkV29tf31rLFbje3XoKWQmEjeZ3SJM4SeJJeA6fsD",
  "key20": "4VMccYiDoahULvt7nXNPggEBA6v3AzFfdShG37wJQCsDDkfgqNCrwjBuPAyZaLk358gXXkJqpCT5zKNn2upwSv44",
  "key21": "31zUKuR2SFotPXSYvEXUvb7nNBY1YPs7Vm55y8qBkHsaqehVqdcnc4uw6BQeAAiDVGkgdPcgrcZAdfUAMjoSMkpv",
  "key22": "4VumkEXA7qduipMMMcn5bYHBeychgeCiTuXJmML5ELgw343yLRvvM2P9xwAPEK5Tok8NjgF9G27jLoscFW6AezPU",
  "key23": "486XCHmiDooUM1evxsK97edyyezrWWyRBuw8Ty6zpD3JZJkfQyADycA8fuvPPdLEcuSUPSF2J83M6gxW2oT3H1sW",
  "key24": "4j6tuvebYreZcA5PDmnoAtEy2Fd8xLswqKmzvrHja5P6CxVsk1KjyanwYkAbLGVzWJtMNgpVErk1UYF9AchpLkdy",
  "key25": "3JBx5rEdYscSsgFmAoBSgpeVJum9vRAcKurkeCVD4NMsNNnKY5Bj9MZmk1udFgrNbMJSF3p9LMucbyLyqQbzUQu1",
  "key26": "4a8n4sAAdxj1x6w1XzXWPMzERCdEVGF93nrWWZ6tzEmaaSegdcVM7tW8PSiGArJHJz2Kx7UiYY3tG3BJHJMHiLKv",
  "key27": "47z2gxUUhu4ntKe9NXWUfpJEUpQFLxb2k3dZEXPapu222Pu8xwJMdGWcNM196eV834AtwtqhTFWnbx2DYcaHRDJE",
  "key28": "5nzhUah11KhzyaqmxymVdVsKCSRpHF277bDZTrxkhpRVMw242sLuexinnKeFRpWD3SvXXMgF69Mbovh2aNkQtPs1",
  "key29": "4jZ8B2XSPXJYfyBkQg7gub5qTogzzGbne214kXMi3LehYdXvaPdNb8G6D4buFiXD6C2y7svA9D6xmhNCmKueyY6g",
  "key30": "TkzME5vDYtSWR4Zg5gwQgq349FY4wRZsGfDiayAgZz4BPjLcQaHZZGiuJsKacNQUMGSPjLZWxYMweDmK8GSDAUA",
  "key31": "XMv7dSSHNJR3rAtn4jXgfeMhNx1pcvsMezfw9JJB9mzESA5RmBMbJFj64qLADMHjL36rPzLyPZfFR4S6jt5Xcvw",
  "key32": "3KCwbyr9eumY6wceEb5UZ7RQQdrxBHAcd93S2n4zvcFuLgfx4jnTtMNjxEk4pVm9f8Fh3cSdFJNdcnmrNWwx7Rd",
  "key33": "5sucdxCyx68ErkFsfEb4dCtbJePWubfdYS8VN6NTCvcwjpseDpnd4KTsNp5dPXDCMJ4vGBceX4cWu4adJT773PCj",
  "key34": "ksHFH2jemS8r922B2NcugTZnm6xDNSBvFtGArg7tckDPNtTsoZ4yykYMBTdCNAxkfPgJjDYL5cX4QfuD2BuEzPs",
  "key35": "5bfZAsBGu9axk1HYQUNBUCyMRDHpY8ho3qX7FHfxckwFWSx3jhG8KRTD2vFy6XoP7AAWE3FCLo8cFcJ4ibBT95hB",
  "key36": "5PaMGHsQXX3ifufjk4qBGtq6JY8eLgX83KgcwFT6wMG411xLW84JhVaUskRZPFoC1KfsxK83xKnRp19MFPGBYjhL",
  "key37": "5qWheuitUjMveJFTr6KAJgKxQDqC4LS1TawMVTMCD7PSFo7VsdZLcobv92siwJn6PvRhZv7nMQRk1nUSkJv9pLZR",
  "key38": "3oZBNpadsXLSJdMDptjYHzpLsgRKYWNaFNJVsdsfSnzz5vpzFeQF5TkrgRWyMysWAkXKDw4L1b56CeQJQ52EdjDv",
  "key39": "5teRqat8iHyjAbRJkJhVXBaTAYrW3w6m7UdAWXV711i8jzUp3gJcdEiGwJD9Md5sKxNj1GwCGmQLz4HV9UhZtZhn"
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
