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
    "2qBLNySCfAmRw6GCGbuyn3fRP9FFfdYRnr9Bk55ZNkD2rTdMw97pxYYiJhD1JAzZA8ptdrU9MdXp4KtYcXF976sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BmTD3HxVHv6nSDcahC1HBw9q8iUXhoma6VEUJj4bqYwFcgkaB74BW1dEP4ZLpsTDKGBWbphb8CzQe8g8gEJyHi",
  "key1": "5dVoPBTB6HYbeLFZbErbRCLgyZrdJ9r4qZv8t8ninrTX1CNoxqoJ4QmWKafo2nFBhvZKHJkmLWCEbVNPGc6QcjrH",
  "key2": "5N7A6CRUhw4a7a9enKbooxCXFkfLKx8wXLCRvHu1t6fQ4z1bb2LvpQcd9MPtYRGrLVDwi5NyqiSm2RmZRNfAnJpE",
  "key3": "2qSmPF353zMuiFTRvDLP7vJS8ZDMCuLna6c32aQkGhbNL1gAuZBSkGtdnyzQD74k2QsvUf7LrtViq38NaVjdJ9ab",
  "key4": "3ZASVpHEdWomU39kJvKwH8kxwVfr8ooiJiSCdtzYVzK6KPVnDESo1s6t5AeTTAytA2M33eKWhksq1NGzG4S1sAgd",
  "key5": "3hRuhnJioh3eL5h6kgNQYR7q7razcAfZXsTSK8gM99GeKB8gsSvUpHhpGL2ME2dqLVVAtPCfKnYF1z1Pw8MLwq2P",
  "key6": "Vm85nKqDqjszwffziq73id6d66Si4FHSQX9XP7qc9iD3dwspKUtM68FxP6oDzBkdGgRb6MP986yFgrerKw7iCN5",
  "key7": "QxnTPxS3F6q14phw5qDVfJMhQmBzBnL46YJvuJJ8aT9ab1Ygdyj3sH14D8bTWwmsS9WYXJmSgLYQJozpg9x3rgc",
  "key8": "Fnf8PtQymhf39JA1EzaJceiG7i4ZTjHv7inNJVk11VokTaq11Ssy88Z373RVHzh2vmQd72XbF1c2Sv4KygtdjTC",
  "key9": "5q6S21rizVBa2DueDL5kZEuDJRfEtSvXwMtQEPRiVJgayycMP81NX3uc2LuoMgPThBTJKw38KkdWF1oxFZd9Ydo3",
  "key10": "4pFnyC6N9zYRfnb7WypcUpD3wDJ6Ni39ZKQgGUxLNVvWQQNP3xpDFku9a4ej5UALP7FQXYT1mt6UpsEtdfE9jnJr",
  "key11": "EJHVWhY7rrNKHza6SHxREcFczarEwonPuPh35JbogykvCjvf1ZnbHdEKAMB38tGqVvhqUNRY1R6XJPhaPMENowr",
  "key12": "5yFCE37cHDkgX7bNvyPqNksrV914BdkEx5GjB5t8t3zEygVg7DCsZDqbb2LEsGth47DKtCy2PZxqA69MnEzWVy1j",
  "key13": "5z6gqp4zK5Mh7evtjqvaz2PTPoBeQjWbkAbLhux8yfRaogn7saaBYoMUz9JvnUgVzDD2D3p69E9Z454LngCkvG6M",
  "key14": "3rhr5mnzDYV4nEjs9FGahHYZs88jFo79kEQjmf5JcbXRXTVCiwhe3nfNVeWg4vC2FvSyftRrGB85XVTVp36eZ8rc",
  "key15": "2fdHLpppS2Jx7AFi23DRgNKiBoyGMymzAR8fviEWKaUsPJBC5ewVkyPd5LZFs43zLBjHWuQh716RYLaXuDZGomtV",
  "key16": "33kaz4k1bNyZ3CrZGZYHknhurfz8f983woYkzXUGsBDoyGAuzz7Tu9ZZrtp3hrKeNyWxVpcMRBv2NPUehKGXUcjT",
  "key17": "53jAvmC7BuQWqqvRzSo4nqKj6veKXi8mSptKhe641rt55ETS5wKwzPy9wPMpnyRnzLRwTgBXuB1Z9WJjkD8rm1jG",
  "key18": "2r9XKaZGLZ8URXp7FP62dJknJY1yFDmiK8TtGwZAG6Sg7w3hdM2b6Li3cjsABmPAHsPxtd1f8NEtiEAsTqRmdWrB",
  "key19": "5VjkyC8GQXBxQ2RGMS7XPp31q1dZs5JrLMHQSnN13BqVjZPFxdwa5rCMQALQR8gN7JEH6LJ6TVLKiUej1jGeRitk",
  "key20": "3V3NN7TJU44qUNb6WzNYZW5c8vhqP4mb2xaDJD7f91ygGMaU9m69FZ4tz1zohN5cVrH9kfWr8XspFkCz1z28BuFH",
  "key21": "5smLVrQWbPRqrCpciRVqJtFkTs41L3y7E7AV9AC4vExBYnmSmQsYxU6GD2anvNjaHJ1dDVvwnyB2SFhS1r7VyKwF",
  "key22": "65mYBS3xBrGoxy8eRExSsApMNhJNSLtcYGAQHLXGhHu7MEk8wBJvHv7Wb8eBSSULkw5ok99XKPGYQPY764Uk75Te",
  "key23": "3dF3H5JJ1UERHHedpThhPcteGcWjzghcovDJx126xR5AXxhesdx1LxkBxuNaUX7amDBVs2cdJZBNvGc7yS32jpoN",
  "key24": "2FY2288WcykK2vYgucKC4QQd8DMtz7GCaKfwkGUNLsXTHsLJhDbD5mooKKa9Sv4Tb5WVMVXX56DJEjYy7LJeMtdq",
  "key25": "4vYQYxfow6sRoNCB3KrSePjz2U4chGUsp7g5BvL4JWykdMXW4ra1GW18GZHw17WLWCJ2z4pRNQstZ5GaVL2GSBuo",
  "key26": "5EcycyCdZ41G1dvo3sbonrekrYdsB2shxkKdZLsw221cxfLGaDe7hir1ayBhstts4Xgp3Dhis9hA82ptD9sJngcC",
  "key27": "YX61QmHFnJnoLwUCcpwgUmu3DurNEbp1p72UH4Q88fyfMTZwoPicpx5hg3ftFABvEU2J9euEzegW6CnWv8aDVgi",
  "key28": "GdeeNBDdbjJn4xKa26Bt6c7AnH5Qrjuqi4xhTc3kL56e6tnhZRsS6rDaGeDpcc5jd7zHnvPFzQ7S3mEzKcVBEFx",
  "key29": "KBPYsEpdxEgNbW7YXtCFZ7QhpGDVk8Hz9xrKC7dTX4mYckr5qkHReyJGdhVbzM2zUWNtmDdDYu19XHUyZd8gfhY",
  "key30": "2AKbwUzAjHp2qw2dgW6NnV72kMqQY87UCCxB3PPs8ZcuHWmHQVeXpbePuSxKwEFc5C9RaTWQjDQkqu9pbXVAZQMk",
  "key31": "5tMxhT46BWYHF5sCUz4b9mY2MT1ZMEWPoFrEkFAfaJKgJRRPf5Mr82HbLLt99Uh72VC9K4xMmXnmM4SuAyKwsgoU",
  "key32": "5CMDk1fdgy8H3tDLjraoiJ6gomtRBNBFyHXfvow27KnDkyieckLbfSwyVFQ11K2vh6Pc1DB9dFqfFrV55f5AKFfG",
  "key33": "VDTpbT8DBQUXMaZULPuXkuPgts19PYHacJptLq6x13c5epateMKjTSPZj1uJTCnugU2siCiXKFozdjU4ET5BGti",
  "key34": "34yLfGb7QsW14xEhNSwCSDzuuWqiRkqfFajnTFc4iD7xk9tK3XGRXc56VXL3fUju2LmAKprANLxPQKTMAFsaARU"
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
