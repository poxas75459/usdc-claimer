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
    "2ooQ6ZTRE6e7XK6SsAavRCHWWdnDqDhTUXFyBowdGBRwBnkwGdt4M4q6FSoqMMRbmXgzaU6hmzHiXDdpQqCquMn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7jjJYoUgJUCFH6ynEMLXPVxtizs9mQMVuxMBSbWXhe8iTRh4G2ZnUpEymceWDpBCnHb1oF7AaMbXcNQ1fVS57e",
  "key1": "5bNM9vR7tjC68FunzpLh6cmXWuAsQJCVFtEiUqzomdic5hzsXBWmbgegGrRZKkGkRMVS3EN5sGWkyMXhR14bpGYX",
  "key2": "345CMbpXK7jsvYLsLFTogP3GkLUkf8SCNQEFFoKebKVV7JQ2ncqF5a1JHc8eZkUt2hkFKrCPVbipgBD2BwDb5NAG",
  "key3": "3jmzo5ebRGMwoEoxWbW9vDL6WymtBqwGueQECq2YyN1uNn4Ur6LFPnVHGP4SwtVFJYF7mLK5CyiLjhNvBTkoEm1S",
  "key4": "CnUTCnfG3bgX59wQsCaer8YZXErqGeu73RDGvfcwtZQZZL3PoR4zAp5nyJazrPbbVm71HDV14bjnPUzKzgf25FT",
  "key5": "1fuK9qoqK6rcXbTnig5BucC2oJwj56ynoNNVUnhuUqTusz1vX9nmRoaSy6TeSZXci3s2dEtpHDLD5JcgdWJ1KBT",
  "key6": "46Xen9EutTadF15tjbahC66TQG1zc5QrchsKoHFALY3bzjuJuM1BaEq2dtDcT4u2MMLvSodPMpg7xQhx2vBAmiKp",
  "key7": "2YnfdqrL3uWrFSZ1bJ9cND6rbg3t3zSM8a4drgySLpEt5PYfrAzF61ycQty4H4oLpDGQkpoBFBiABo9LYHhFkvtd",
  "key8": "44aMGAELUDsLGFRfv9kven4QbgUsv8HLrLrHZDxxbWrKRvJ1x4FNN4VsZ5ja2WVQV3JySouXzFJUU1ZWmWqwXbqf",
  "key9": "5NrmT5RbMAUgc6hbMvMWmgkJvT3bxpvCjkgrBxScmxoz6xnaSw2nKbkTs7AYFFX8KXtUTgpuc8sQ5xY3tBUnNKXd",
  "key10": "2bV1nZ7ftPzZa5pSyi3qo6e4aR7GibJQe9sVSFpprg6HtET8XszatxC6SRWeNyM28NDt2QynQeWCEtnFCVsNfJGu",
  "key11": "4HFh2WYvc2pYv9J43tCHNmP5WHST3oUewpbWidJ4X1UBN19gNY9jbrtLQ2SpMRB1e9Siwsa9EeDuzV8NpdjoMPx9",
  "key12": "2tyfjK6rtUWnDazjVgNPyYqFYanNypbJif97HxPBCRDbTgtKtS1hKivEZ559KXg2kTMmKkoNpFj33GT7UPwgF2m9",
  "key13": "5En99XiyZNwr9NaErhCYqLNUgUkVivAEVFn6266noE3tuvsu4iBy29Nf82jgnSaQZ7qi8epuD7xWX1NEhf4mAuW6",
  "key14": "4ZAbdd6PZ7tp9LSDtAHdpJVUh7vQBEnfbDrD9ZqzGQ9T6XAyR96rU16ZUYS3SFspm2gm2Ehue84GicBDcEXQxgbG",
  "key15": "3PP6ZpTeVh9PNMUxNS58xbFUCHzCddMWBkVbrZNPCuWEq4KyrEhKPXQF57L7cTwsSBx6vgi4CUfhFaSDuvn35VnN",
  "key16": "5r5ffDmfAD5edydaHbrsSkYhL2WrLSHuXgLtrGRQM6Z1b5FL5qBAbDyqE8Wrat1V1PeamWtzWmNbaNSSGbZaaSVX",
  "key17": "3p3LpMw6o5H4TJTNSy34ZaRmu4ha1BAdR9hn5fGDqh7TbDbzoxH5VHeoC5zYtF9kiuEc1YkXZL4PUtir3xdg1cVq",
  "key18": "9UzFjH4gf39WnMDuZ2ciamnDeRvoDwBtJNDFzRNi63J7zWCcqTbgd9UptjRq1pL2zHg76RZwPt4D6CMPag3eW3D",
  "key19": "3nykRqVQZTGtoZGuHqLHMrgCiud3n6qGDbLuMr8ALiYDJwkeyLCr1V6QdX7DLgfW22DUksyzW73EUFocg1NZ1h9F",
  "key20": "PWNtMcp4Lq4KKBqshnhmH7qCV9NRorYbVwQ26kMZdeB3P66jhq73bbuZ69dTtLjTbHBa54fqYdZMocc9kwpWyHc",
  "key21": "YtXRAdNTWWXJvbwq5cxjmtqpJRc5haHFMfjA8zNqXjYhoPsQrD26cH7fVkKGDRjsxGzGjwZLZrDpwXBiVCbY9h5",
  "key22": "3chrgsrupfob2PFw57MFAv292hcwacr1GNv9REYNQHDueaZckC3VHLiPSGPSDP3oiky45JQ7QqdbncRT3FvSdDrQ",
  "key23": "kdMS2v5waXVzrcgWztvFSVaGnyZpXd8DqSUvwHdGCaxfubxn3rR5mio1WDn8PQYuyiks9AiNLvKPsdxfv1FMvdC",
  "key24": "3cUFM2bpnhMJY9daS2AGy7wjUANnnAgXdmWft3KjYKqEnq78TrUfsP5SyZZhEbca6Py8Fdhmc7XV1jVfKWMV7KtG",
  "key25": "7awkiHgczdH8vFpYj8C8yMAokLNG8vGKkmog68LXabXBKRTsMKdZ9qgfQ1KjJZ2jegcEfmL5FwUap47t5dxLKgh",
  "key26": "4RtiSwpB2gbpnc8ewHd5vwNz9guGvkpQaJRA86sqdve1LqcYVwtTfLLE9CA5EKF677Tr4uTMvJFd9U27sT2UMP5o",
  "key27": "2WC4Y49vKgdTXoiDx4v3oMest8nGeYqqvSWLWzgL91GLnfZeZcQ11fJDFcKQbSp8k4xwhQLaKjkMymKmkaASJdXt",
  "key28": "3DU5bjpjyEK715JgFUkaGTYSPLXg6kiBhM6FmqTCuVDWicvCxheNvgHPVjzxXAMARmaeLaT7qDmAeexKtWm7qCHJ",
  "key29": "54KZ6pF5d4j2XS7mPnoX8pAzLPaAFoteyMUobSoL69cE4KdYvNEZPBco5jWrkMNCQ6QVkFJnwNJrKEWzHvrdTymr",
  "key30": "4uHfBjwjzExNWDH255c8hAZkJuH1SW4fSREkYGffXz9pvUFmQ12QJzuuTYyTc7AB5qAsA4gBQ9nK6hCvTCgLJ8PL",
  "key31": "5Gvg6jKLqJtYmpqqr8gDRBA7eSPsQu9zu1SFWwyG8szzFKkPnn9vGGNFAwr6FKhNB9XXid5vJwf7EemK5rnDV9xQ",
  "key32": "3Gh2codHJg7uMsNBBgvERJMX4rbMRNLbZQoFAfyXEdPzZbaubRgrWE47FZH9pkq453UPGaV2MDg18WaqurCUDQj6",
  "key33": "3g2EuPYBJ6xFnMQT5Jkj6fk7Xu9ZMdC1bjxLDDSRyov7ksBefY9yQ68DaPjyAiet2XPStsCUSNTLADraBH8eVLWW",
  "key34": "2sMYdZXpL11GB7deYSqiW4UriL5uX433EeaTQjrgxFVN8cAzHWQsCUXv65z2SpdkiaT6oZC5i82CvTPvCFu8XSqm",
  "key35": "2DBRz7LnTRUKnyoENmEHHk4jRxw2TSPj6zSQFUFC73Jgw6zkwZW9fnY7KUF9FrMixqCYZs2qDMt8WeJG3RqzfiTg",
  "key36": "5F33SxtfPJdcsDHc5mwrgjeaw8UBo3K6PKo6tfPQ1wkF9qLkY8Z69hqLwG1asx7Dzf5oULVTyJLjxHqpG5nNBG4Y",
  "key37": "3FSCXCgbysMgJhvvYgLgyMUido5kqmQb8QhhYZmmj7fhH5TLxFqTELN6FA5gG61u1GZKsHwiAfpEVYDCCv549UrQ",
  "key38": "2TDDE2SXZTGuguU4Y9GVfxZeMNFSv5gsCc7RyjL17ZMwvPM7MhwRk33YJ7ZhjLbdyf5MiifdQoJrWfFL9iUEeDT6"
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
