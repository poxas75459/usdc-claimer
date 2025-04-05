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
    "3rWKKVYR9uQANj2kkHzrXzsuQwMNQczsuMKJtpZRzxiPXkWfj9dSgxP9jG3ZdPpWqyNpJHYEB4xTd4sS6xZ8ja7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFCgwUhAWATmuHSGw8mAJPRkXrEqJiM9CBAuKw4NaCrxtBTFXEWx2caPGQYprQiNJ7kFvpXuEAHNoq1DsEtvUwT",
  "key1": "2L4mZuw2Lt6XX5JKXKsfaAuToJUD56bSQiSLYSbjMrFAe4ZtG7CYRoUmAKnGoNMYBdjKrdYaqLs5f9P5EZF6iVfb",
  "key2": "3AmyF9sNP7matr7gbv6QUgHKuV2Aqj5u6Yigznxs5WvpShKXnuDdF8gsdr2E7AN67ZSoDGG4nURo91gfWmG3xRPf",
  "key3": "4jfd4QYzEYt4NwQgntPXTBKomrK3dQsFpBCN2wec6tFi2zpJViGiSf9f9cY57GJ9P4ijG53UPXQA7zrGizxa1mtH",
  "key4": "4iGPhjvck9KaA2BXaWHqv5fTi7GFRfonGAFXpstY3kTNRDNPWF7RiBvyj1f5QVG1dznzMYS7rgza4gZ3oE8Ga6zP",
  "key5": "42XQL3rmhT42NDPdRSotqzKb8wFGxPQ8nEK5MMdRDhiXF4GJWdNm9Mxe99BKh3B3iv4MpafHaW96u5VLAcsdBnxy",
  "key6": "5amjxJeCEi3kERQV5BJP5rsyXjZm3idYvvZMh288ByhMvrZS7UTmxtq6szsn5yBZwa38Q2VkvyKD9o6qsNivXzTR",
  "key7": "5Br2LPHsXTwH2oQmuLP5Lum7twSYS86w4QEz5VEgEpCchaNZVRyK25FtbARuFN9iQwSw89enQz3UQxfZCLNg8wqL",
  "key8": "2UKQPoDWYTHpjThoczjWNvSZVybTngfL8WweaUfHGb4CofiK6wG5bcx4rfixBwRjarvEPuX7BZMy1L55ciMS3qtg",
  "key9": "dEmCV2fZAfvEH5u1CSkctZtsxWkRBup8Kj6iUayrQcgAjmicmRNV2cyGzRb1dSVwV2JpxXMQh1x7wdSuzQztSwJ",
  "key10": "3S2YJFNL13FuNBChZdseAVyvZev3SYT8UnwMqUehxZNadU4KqiTVRqrNu6E5hKhYXKCiUZNwSUHU8n7SBeq2TyL4",
  "key11": "4yQCqqtgrsMdeGzXUcNmY72ZawQ26zhtouw7jWHHrwQi7XFHGxiTN6U85JaFdUcpC81qBugUDYfgvnebGG9rRAs",
  "key12": "2unL8EP2x18qWp9xffTQfeudV4MAuEBSzJ43CKb4S6qzMkoUkCNZgyhGUwNohnLmijWVXsjnnzocF7fWXwMC9Fc",
  "key13": "51hhZJYMzRxmDe5dDagc5iUR9gJ8zvZZYfdYs6Kbs1g7udvqXf2TKdmF71LDsZKaXh75SAu6aqTbvANbiTnxXkFx",
  "key14": "3WJ7qbdzjRGAMN6iYDSZYQj4Dv8tLL78rRtXHxoXGYci2q9rxoDDZSu3UotgKZTGS8xBJJrY3FMEho6j4G219YvL",
  "key15": "5KqqebM4hcNFi1N6GMf2KmDBMz98aXhdcVxx3EhkaW2EFbR2nC19KfMtFWAiQZJkr9AJZf8YnPQyUGiFc4ZCYxF4",
  "key16": "4rPfr9RSsnbz1DUqF2ySZvP5zZwgGaL3cdYm8NswwAR8vLztD1L8tC9LGgsqpTLmqhkz6YSXgqij7fKkpkrgRBUd",
  "key17": "36gUa3nXxt2Ewa56wdL3EACLJH4734gZRWcTQi2D67jD6TaWHVxFVMT3UFAcjvyEAg66MeqLBxZPYmuZqh8VMYYY",
  "key18": "2w3vEe3JgSnuYoXFDXncrbVXPcRuTePeVLAnDk3btT6ryheuqgZMRiv9g7ysnXLww5QqgkwtERTgUoX2uoR8Vt5q",
  "key19": "5nrfYmozEft8hoFzjQL4VuRpF4nhtMCDwSze6wHQNv81xRiQF2jVE8niZFrL4vBLFVBsZgX59fo5B1suvQinb44A",
  "key20": "2h9cDda814Hn7qchrPogd7nCcKzft7YJ7BsG5CczgaLVtiMj7uB7421xKNL3eW1m1Yaapd6zRkKP3UeBmuTV9Nae",
  "key21": "2vZTPNDkbgfT25pqZHr7BiT6tBZPHzdfqEfFVJXxPmuB659Yqo7V1K8svwGZ4L5acd4Rqft5yJAKGyoNR28G1t1p",
  "key22": "Pp9qbhdVUmsUKDNhM3Jdw663eXgKYuHkiYzq8J92eywY1V2w1SUNq9gyJ61TF3iM71weYwn5hsGSee7iHpTWUMP",
  "key23": "Kf6nvpBTb4wmHkfbaR3N783PuatwpQbLJFWUXjWeG7ucHJhuF2HPT2SdSuxxgmycDGdvSXyvvNBuGwZgDZvCY8z",
  "key24": "5cYP9VKKr5LRtbCkDzeip5TzpKeZD2vDTNKeLLZ8iQkYMnf2HGjR2fczJPP7v6YyctcRwsByujMhJCigdX5a45mN",
  "key25": "5KKxvB8uQBx492YcX2PjR6bfddbvsCfx5ZxMgoqjGmKXPEPJBnjbvSDw87bhosyAmEG2Eick2wS62MHBxqdUVyh9",
  "key26": "2mm4T2DkiZ8t9DcJhz7HpHkanZ1Rqu2hCGbk52pxYfCFmREBtVgR4xEUNGptUkCDzFnRRPbWbcdtmwvg5Xo2CYQx",
  "key27": "gTn8ESw9tfVWfnKR4BanSLSfkstFdb9nqHcymZHMSSbr6akt5kTgXnUnf9KRJnJiE3FwTTB2tAbzcTp2ox15dLR",
  "key28": "dRCMdY22gwo9Wg1Bx4BQ8tDddP39uz7PDwwjYknsZTdGXJoenfmtYgeSHv5Hr11bn57Kpf9E6MFoSawfdwqkKV4"
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
