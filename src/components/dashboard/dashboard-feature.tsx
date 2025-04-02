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
    "4Jjz2KYMPRwAJN4VVNFmqyEB3mzdWh4SdWWbBx2CH7TbwPcuAT1fxDFv96QFRmgjbekX1HxdqVV5BFYYqQtnMEdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sXomGYP78TcJPokFFWuMBquok1AF7wRVQsC28u3cXxBey3Y1wiTEgiakYjBvNa1dCB4EHha6Tp9Q6EGQVyYAwt",
  "key1": "7c7dzqxBVKxDT5UEysVg8FZeJHYfofSMBX3ERrYmb76PFJwcuX792kFEVXN17WePKUvqpcVyeiYCEQkzR8f7q8D",
  "key2": "33FE39vCorJwF9xEy8RKXk5kBCPhBWB96A8vJW1NGkrwa9q6j673MbBTpcnPvy9DnYXdDu6SmLfBCf7PSFiCUZit",
  "key3": "2RKCJkj3uGGbxUJQTrAn4D26HVZRrbcu5n6kdbxwdaj6tiyaE3GojiyMEjQkERWofk2J4sytvuUxdkwGnn38anNM",
  "key4": "3EHfHxqiup6GXwdyTwjiwoxbi7dXojfsoqEFpVKWd4QBQS7c3bG3tX5qJ5MzrzTzBPmxLJtSN3o9KsYaEwp9wukp",
  "key5": "2j48WbRaarwcthc5Moxo6akTsChpzk2838gdJUoeSyzn93Sufc1e2dJNh1cTRUvc2iMgcVDxrixUopsexnKQ8tc2",
  "key6": "4z84Am49T5LGGN2gb64S59f3g3Qqky6epVMLHH2droSkc9HxzykYCqtwFedsfKvKSz62aqB88yVsjrFKUBE7CYqE",
  "key7": "FPGfo53f8JWfT5NvcGHsjrkEgNof6ewz88BxPeJVcLQitoxfPndSA8rA8PQ5eva5FPQAzS6fxmsqam7Uy9NmUCo",
  "key8": "4QzS7wVa7hgkeYFtKw3yFfTRUgDiTEWeqKNscGRmeQZXM2vYcgtTJBa2D1TSsFkhWav4JwVK2bdcgEgdcpA5Xf6x",
  "key9": "2JQVRvTMPee1wmJU3g9x4BEoNtphx55AaoRvTNuT2qYB9kV82eLH8f8wVv7p9PtQM7s5ooeToinrwcn5gNcZ58uL",
  "key10": "4MTSrkwpHyX8DVTuCrPwkgHMNqUj2ZbbmZFurpUNGjx8dfnv15ZcJPtXKhfHDbz3xLty7dh9fUxwEUKDX8wH5PB1",
  "key11": "3tRu3LrRoFffgXxbTR6QesayJPFd1WAB3Kc2SUEhHtgis9VUJMcdzB1e4y2SU1N7LhfvKNHcLUxxTzcGgJFBpfX2",
  "key12": "2wFLD33cTs7EmXW7C6RAyRZv9FbFyG1u3wneMiN8QNnFZUVAqZPWfjwQmE7zSBdJhA9VeNnz3NJ4NNBB6fUZqAQ5",
  "key13": "5osGiBckpg9AwbSH2Tireo8PE14CRXKJXD2Ag5vXAXCQijAuHYyuMSnKRFTtscEJhYB3A7zyPYBcSGJNVJdSf5g6",
  "key14": "5NzcJ7dBpTx2fSt4sW2BddbpCiuKyGqWfB2JttGCjrSkNjqiAsVAvDi7fbWdnjVZBrthaswcD58ujojgn93qLCVq",
  "key15": "vmXbzcQinHogiAGqkU2AScMWGpkFhxkJipsajAarhyyMnYiwxDEpGnCifpav5r4LpLxe6CgaJvFdw2H28ik6TP7",
  "key16": "ramSNctsCxtmcfLh3HKVgRifC74bspxhVrE62WLDBpJCWd3pF7JTG8U3JnidHYzoJm1HrrGtHuJTD3W88V2bLVj",
  "key17": "3Zufn4nYxTLWh9xQjdon2e5BUMKUiMf4mGc4PoNBtX6y4Gk4SmZhKftjhQzoHmfr2BFSnvWJzK45xb5L2XE2eWmt",
  "key18": "2DaeaCsBkpqop11Vh4WmUZutRQ91NvvSGdhjEZVCPqmSXYmTtKVgjajVbkvL2LM6yHPwP9ZdDDa2bFRLLqy7qKdp",
  "key19": "39za94eSLECzcvgHoVeWjHxeSe9yjdfRUjrG54YDkpMXoSGM9LAMmWH3nzZewiwbhLgxHkUH2LVM5eFdpCy81qpv",
  "key20": "33NvFk4SyvKNqfYTD2dgX1MeXXd8bdbvTcxbj5vDoKfNSYkBN7kZCywderaG3RJF4zN1H2D2QKbYvUmwRk7DFX1c",
  "key21": "51JnNT7DuUJPekKtnZZib9dM9s1NNEwrCcNxj543MjrygPt9mNSvvjH5jofvUfcxE3ke7SgYhvese95A7zwvNfcm",
  "key22": "Pe38kjoCXBbMjwVUvqa7VbhWqHnruz499JEQ2DusYLhC2vtxgLXuLKaUAeiounqs3Sv52oS1T5DnYG4JoowQLdE",
  "key23": "24fCoEy7SnXpT6cdy8WHuuZKYCXfkDwQD44cAVdqG8rxSwVk2Cyy1Ut3erWsDYLAJLHbX8yAVCpSTpRaJgfMDKRY",
  "key24": "4QP6QU686TyPwYapgbPxrJW9v6rFz1wh4TvvGbkk77u8oajjAY9VKvG7kw4FVgRiATE4wQCYinxZtwCP8vh86nZj",
  "key25": "47Bys99Gr6SKidSBQFywSPWbx5CCr1MoXLtFMfjg1A81n9nQ8j7zfkyooGEFbUiHFcUtRQw3JdZDr7Y5nTs6E81u",
  "key26": "3styxFWatC7d2WCZMDjK6KLhuFoR9TdYwRCgo2q6Uig9wEMXVRw6cS6s5UdEbpUULASHLTp7KEmLeSCR2G5CRXEN",
  "key27": "4AGc2S3VEj7c8aVsacYa24fFiQNHqdqLKTAksa2o6b9hyLtPiV9WcidE6RjTHNqBaZAp3U1xx6rh1kKgpWTVeH61",
  "key28": "5DkTVX54XafQMEt54NH4SiUeaenoM2K9jwxfNZUk6wnhZUq1oY4bEAasyiNWEcaeGq53UG69rSdqhnAg4kJ6obvX",
  "key29": "3qBwERmwJogkdiXA2hYjw7aMpoqwTp8azHiYedYXKfNqHH7a7PFELQohGiZHfEY91Y1Jp2cuubvnosyiWYYTm27p",
  "key30": "4BpmuwL3fEktLoawJj8wWYorxtRJ1gmvvn9J2ysyLRv8EKXjSh3zajanqJrA9CAdK5JoDb1CcS5Fi9KBRGp2b4VE",
  "key31": "2pbjNGzWrisWoXDWxXDSddxN9PkJGSVnUxP2t2hjPK3Z1c8Hh4X5WJBRdowr4yjWVBm2PN9pRu6N8B9w86N3krzg",
  "key32": "3UUNGmSJqo5E45ThKyWDxppVvfqo15fLfPAG1sHpyY7xeVNkv5BbZxvo37JViYgXrDBixxiCVBqpLCu2KXENxzha",
  "key33": "JWHPBv4bXTXVp4pzaoLeUgxTt3KvWybt1eApKPo7eAmxoW7AiEd6rwEwgCG47vANdSQydyX18zaKERguFUioDXp",
  "key34": "J4ugtAoxQf2bPm7qainACcaivtmhrMjHiR3cSeSndU8p9a9GjsmYmxZwukbo4ftj4BxXyPo9qvyKF6SthHL4N1J"
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
