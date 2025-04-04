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
    "5Vo2aPrE9LtVCFGPLYR5Lumr9vz9oZz8dH2eEfKckL51iDNqcrtR4kereR5WEqMxwdF8x3rEceCDvZ51WTF9PpWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4kh2WguqmHiEkAmecbVqAKXdJHZDmK5w4NAbyQpY7rLfpEx3LUQ92LHsduFYLGCiq8tKcsJ3PUFMY5jvmiRPwj",
  "key1": "57uQ7qcFRoHcK7hZA5KgKD3jNvSXEytDWBEM8E9QLMmHmKHA8fParGksrrwucpbivfnY3Gt8SCZqxF6yyctUeUQT",
  "key2": "4mHUbhaGm7hvti6P25KaTKD4fgppmmtmqb4tTQMaSuAHemc8ApyMjm4GUAMafLiDvZFT2erGnJEPGnRBagEwuG1N",
  "key3": "TwWmmjLxHEgrUXKaYsn4SUfGmdYPFvv5xB7bB9v2Apcyrg4YAuwqm26H15ghSRGtchkS8WesJtfT8AyuFNu7Eec",
  "key4": "38fjvaxPfZhLcf6rjy6gTmzJekLmUBtCGw6sdz7RPb87j67Tch8j5EkzXsn6TKohZ5BYLG89sTdZaGkygNv9KvKL",
  "key5": "5iwGpBj7FrDrPtRVGCTCuZsL45KGEzAbFjQ1dNZsQoieVzYWwo2jZazJL5Mr1harntRwV7bWVnbXTADGx5aaxmvk",
  "key6": "4t76LZ1H3KVW5ToyALgBS3UBJNBEEK29c2eS6cvPj4x2PQgRtoL261V1QtPBgyCmNu88JnEZxa9hcLTtE3ZXQMY7",
  "key7": "QryX1n788NnActbZHCyaH6jie1wJ4orgaH1HiPMcjyM59i2T5TFfUnwmH964NcK7GUvcZQBCAq72nxhVkbhwKAF",
  "key8": "2A6RagLUvTYY34yMAWhoKnWYSuZkWMEA5CaUoLjjpHmAacDCuuiGTmCsZd9BFsg3Z2psLeNsCgN297htT6xsboCY",
  "key9": "2PEQtacv7uv1Rdnw6PjTHMbA7VC9iyBr2ZqZzhjmVqdvES1N41aNe4ZxFC1UNrfXwGbmH21dC6TSsXETRaY1Cq6J",
  "key10": "MhLx41wMXGj7WMeC1gbBQqiGPfnn1yDvQ7uwFp3YJemGN7QsxDBHMvWVjVXv4PhcSDDecQjzLEDCn56supRddYf",
  "key11": "3u2wjNmvp7GzX6eLFdtcsW2YWcEEWgotzYNtgG33Ch9WUgW44Q4iXaKLqvBgZ8BitceWjMEGhsGEJPbwaesveMBL",
  "key12": "3RJLpmQt2C9x9YEBuV8piBWk8ckUwPArMHdTc3DTDtNF6Umx8ku7GQLffiwHauNR7Leu8fX1nLmFP3hZ5FLNL7Sq",
  "key13": "5UUuf5Ae6VFXRYMAQMm5V1vVEWSR44VfXdVLJkG8aBD7ScFyBG3hUHzMLc2WyQ7mngH2gq5fKM2xdVBYMSJFy9Yj",
  "key14": "5NQVBP7xT2Pdwu98Sa2MHE9hXHTF9ozwwX73AqiGK3eaw4pF2eQYZBcqy4r31oib2Tr7aS35C8ftkoBPQFVv1Gat",
  "key15": "2J5TP5JcjwCmY57tqxiM5x67w9SF5Ab4Ysa6CCtAyiFh73MJtwQLs8Kde99sdcVf71yEQaWb8XST19MXitq3QJGL",
  "key16": "5MZJQgjXdkdrLi4QxjefbaFKq5YU3rgtFj4RnEnrYdJKnJRSVWfbsHdwhHgXrxaZqLDCXSgCDW5czQmb6WH1btQ3",
  "key17": "2XMEEsCRJor18iZeurbxoQPvJzdetp8CLCjTpNx6ZteyVzkg3BGmRoNQeMcswPjZK29393h6j7Qmke2xTz5w7VN7",
  "key18": "4LL3JRStQ11sYeu7BUXv6pkrLdygDEmtYoMdirrKwKUDxNn2GEQjkEJom1VmZckscAK7BkskPEp9w4jarSH76Rvi",
  "key19": "4Y1Mnt9WAW6M1Wut1yBRMUvNNhALZvw9Euwx9Uoqy1CvHE8wBen3t8nCubGZujM6HDpvQJams9PhupK4TLLnZfCS",
  "key20": "3YzJ7s4TuarpUDtHEpG8MFefaZgQLi4Jk6cDyPFbR7GeRrSKAZffgUSqHUnCSjwnVhcXyJtAVnpnDxfwi5NigKnx",
  "key21": "b7RkAwGF34XFfBCsixA2nmqWfKb4GCihmxsvuG8V3xGxdtjTgLN4SiKWwRQYJ4uFqMJ67rWwJDcHYDBvAsziN7p",
  "key22": "3v6YL3V9kXHqPn1UG8h3GXTBdknsgnq8SjuP2RzkAB7TA9HZbkscxaSdPRBeyPS3PhEgTDH5Xqp6VKd5ZpBcPkTz",
  "key23": "8SCUzjZ3hu1shLY3Vnbjwt4gaK5PEcfDSNh215pfe1TuFrQyboDkDRdhm2guU3hsAEK5VNZDaF7yK7YQ62tNToX",
  "key24": "kTH4Kjg8t78s2CiuMsBBBNgpKnRf5ScKnbSYnfLsCoCGmvU3zFTqeNV3pFHZREJ5CeiaWrDz98jvyH6RWzxeuc2",
  "key25": "2bbbHqXJfUJRTjXZsmJooqpZ3MxAogYWrGRJKAXQ2zLKG5UKiEVXw4SvztP6o9dESzZjGSGsVG5gwVxQngqAHBqt",
  "key26": "2q2eQovHNbMckg6ir83diRb68eG3U7v5HNG8Jgy4aQu3PWXtci6PyP7NVhTSJHMsWywJCS9hMVZcxQnSgdehziWi",
  "key27": "5sGnwX3x3A3XfhcFkFeZS5jnCCwGoy6Lua7FL2cvqiSjt1fizriCTP5hQiNteippnA2JtntrhCzr2t5oMUPhjVXx",
  "key28": "4BJBJdkTMLVvZU6SWS5bN9Hua1FMfbGv9bvQRpbN7XJ78owYRjUEHER4YAeqPUZFNfj5AX728EbqJPBYwvhZVSET",
  "key29": "31MrgotYS8JcwBCo2wyRk739WExFAqFT9V2R9WJyeXurVhJkWC9jeAoNhtzV6jsa1q5ntboD3NbME7QHzmi7Hcn6"
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
