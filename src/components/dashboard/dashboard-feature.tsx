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
    "59wxVnm5NgaT848szj7QvVB9GLfCt8XrF9vExrrqz25nFSKdTvBG5R3fbKPPdCkmdsU6xFiJs2RoPVVzxkqNEFgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBZd4MuJfBuckztGWBURg5eDg3Bo3ayZ939JE6hvJVH6mhBX4uqWjzP3PfznNK3L5mR6iYwVWRhTj8tsKkSDmvL",
  "key1": "JnVi7n5maftE3Z2qHpqSxFLHQMLk3hPR5a4BVGURMdwek4VnnPKBaN6YmcPq7Vu7bTGCESshQH4FutBd38mpMvL",
  "key2": "5gA4RaxqDDb16DgcqRnfs5NQbURR89PUa8miuN7xTZsNRvq4J7qckLXMqVTPy8Ev6cJf7hWiTH9rAFpTkX4A3akL",
  "key3": "22Ssm12CLd5yFGYfiJxJEgjrSSP65wQPGg3mZJbb2u8CdnRQYKwG2a1N5xU1hEvnGmQNoN8FoicRxPSPZGGyyh1f",
  "key4": "2LqkzKwyFvJ8TouG4dkfMoGT3G4ApPpvkW5ZnqRRQ4LUkszuPys6SZcBZGmuo7SvYUkcrgrEXBJ5b1ktE8diHvGG",
  "key5": "YcGs4sisjB9fguxu89v95CsDEHK2BKTETGz2XFL8cM6NZQ9GQdRZZNyjjYbJYTTZ6Q8UAenvruykQVW1MR2j4o6",
  "key6": "5WZe6yGYVoMFCVPseDshvHUtVQwbq5wfHvr6HyrZgSTpKwavTw4cotmgCjsCDhdgsgq6b2QVJoEqHD9xPNq4dPfq",
  "key7": "49EcmZ7Um5A9x73Bghf1RqXDSff7DmwHgCiT5ritQqqcWMWbJXWY9iYxgUydXajswRd6whm9c7LMk3qshp9sfhkh",
  "key8": "5pQcufiu5g4sRsgx7SRgE4aSCvCLWijBpDsJe4wieV3sTBCL68SHuSuNx8WKpY68aK7snzdVp47oeVTSPp6dn13N",
  "key9": "K5etjRa7CxceQfGbpGEQeVDFAhjXRgnBKaYVdRyuMMaUhHpk5hgPf7mAX1yAYojV9EWNABL7sAW1uoNbAKnWFsX",
  "key10": "63rk8sRKhg929LtvjNT7MPWmndTbW3voDhetsqcpBjqAUwNmshKWCCeF3mtSJn48LBNUuoXQrkJo2tPX86pNDSe3",
  "key11": "29iNReH6NSTxXcBCdyUhQuNvKB7ZU3RKZmqL3wcgLNkEhCYy1yfp2rWu46NEXPwPLnShJXpwPTALBg1kxm2wU5Hz",
  "key12": "3Gv3oRoquAdE2VbnhSyS8FQXu5UBxV2UrYm1ZNhnFZ4Hnrvw1fPQLa5mnPTQ9XVk8GLUpA6DKbeExkBvHfUNjGcb",
  "key13": "2iByRSRkVRjdsnDwjVbDkLAZ6D4B5yxYKyA5KBJ16F3VcRvbeYApBHrFwaCAFLZvomrWa2A4iwzUEY9tK7phq9ct",
  "key14": "47T1NrEQ97ze6exrbzxtvnjqECr84EHgQLmC3cowwcsuiXvnzN2mjcwYVyUfJqbtT2x6xLo7GG7z1CvMZo3T6MmT",
  "key15": "4gSpN4wMHZbrzhMwic4NzRdPJMRMaQpTQojkZxNY9edqR84zb2Veeg2sbhao3NVBL4qAGFbMtAYznWME5CUXNg1Q",
  "key16": "66C2T1APMKcEAmACgTtcy3jzzsQfF8tU5STEQJT23nMNKGSDQyVxb28Spe9q43dtndNVMWmtHwmTbhVeZ4rWQzKg",
  "key17": "58nGEyY63TLLpt8eEQ1BzgJL5RMopbRxBB5PK57M1ELkBzAoep1gxx33ps4VWyrQazhFjtm6dr96K2VcQd4nkJwh",
  "key18": "4Y5cXaryuSQyJMuQzAKDruXJB9r3zfd62dvtGzdXNhj7UW6zrqsqVYNovVXVhsshH8gdFbrJWtDFaQV3oDsmf2qf",
  "key19": "29pipppksJWreivbEVvzLTxn2P4Dew5kds3KoerZGdayBDxKcMrhawVH3GvfDPMQH7uHkV1j4BzWiq1JpedCZPnT",
  "key20": "4ag4vwkhCe5tXKyvNM1u8Lnny5HvkUxXfAA4ConfrBSbRYgScnwJuYvsqF2Y7ad5YLCqBezaGvr3CdP5L5mwvcTP",
  "key21": "3WpmiHViGMHdnJ34kxKUGigtVhuenp5LbtpzFY1jbpc6nnGXwWumEXs1UFzeYUJEB3vm63gPoZYN19k5uX2YrZwx",
  "key22": "4QQYmbZN5rJVGdh5eU82Pfii2uKdzjfF7GqSRwgXgRARMKacRqmFxbJa3qdy8RzQ8dExh4iKXTe2dQZa4vUd9RyL",
  "key23": "27Du7j4pBqhko9NgNi1aGwJMznMAvTreNaUh9xFub8ALd9wKw6YB3Wi19hAenwenctLBrtiqwia6EUzYmY3s2M1X",
  "key24": "2jgDCmc8mHy5zAFFSLFokL4ZRuxdVh6hnpaW3e6EAm4d6oqoJZfVTJZiGR4FeVXzRuTmqkCAjNzczqkCRAeHauaJ",
  "key25": "4xaUuVkGA71VdLCFfyck3J9mLPpQVi7sepY8Pw53KsoTHyzWuzhBaVYW5GgdiGrf4WybEoRT9bXu9hyCfmpAmEfs",
  "key26": "5Ee63PtG5nxwqDNnsVybQok348h4JPUAb4eWUv6yr3ZYPQAkZP8N7nxhVndWCQhc7s4ZEASoEyBBhXNY5M3T8yjF",
  "key27": "4yRPJUtaMp23RCBQuMMZiqpcGuPy6zqn2ZADv22QWQAAHsew5oiqcRigwh61S6kaj6zXL8XeeGumbYkFVUNp75sZ",
  "key28": "43e3BtGJK2e5TXoXP2UqzLsZ8GbNbaQQoAkDkswXcwhdtSRsqpYFUhbLhGbSkTKUk7BiziX5aCcJfbXWSrGLiZg5",
  "key29": "3QGePJZyTtfhTptytqZLNPmn1ppCdazYs5gJoCUGTBMCKjBSTYyfkPUC3YdbwpEkKM3vBkXcryXdjUCAKM9WBYHr",
  "key30": "ihx1yrnVDhQkb24s1GdoMCppEeP8ue1HxyB4zxTWdz7c8JpXXHZJ7JsunYTbdXoHjB5jZQAGjAc6p3oWinvbvM4",
  "key31": "4yHstVahJF2eGgZp7p3fmGofvNxrcYpfoQVdkb4W88QD1ktz532PCP8Rq9ce2KRwQiLbnHLVebkQEpKBAiRaFdr7",
  "key32": "4iqAzysaqkTgk8jnEB1JmxYUvb2r5eyWVgBoPQdmp9ioX6Bcp7jC9cjf8wo2RHuTyDzSeJs4cr9PrZu4NgGga3Qv"
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
