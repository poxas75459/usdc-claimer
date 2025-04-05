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
    "5sLbWFMKZynPqDEQgsa4pHgraRwedptnYxy2xJbf9sjUzuR9zb6Y2Z2C34XKcSh556NycFE5RakcQcorFkDL9j5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38varLR8TdpeNJJfz1iivzvpJtjUpwgAqZoyy4TAwcXsDZ11jkMkyQj8TEUvZBVKioUgVjQNX1DrzZ2UazCg9dJm",
  "key1": "5x4uJGxQatkJjHjLsxzGfnQJEewDwE9hTmAsbx4zrxiDZDgUEAGjSi962fZpgBdgVG5Cnwmx5tqSrerRQhUFXPRy",
  "key2": "2dgqDPtpQufBAg26dyJVrCmV9VCCatr9EGnm32ybfZrpejtyUvNn9obXs4NtEo73yMnoqXGe4DXtzkAvEnYTjfhG",
  "key3": "5V7R2zSMasSCZnW7u38FcquCDZRPkWSHyFdVEcJzvvdNSH9ik1Tinnh8HT2jEoUnBZS1r1bwoy2EsHya8WxibppB",
  "key4": "2wt7TAU54DdvuWhfEjUUQ3TzvovpGnJFECgxSFuG9ny9Vj6zAyNqvdFhbtcjUZZzwbrPcAQpKbfncdBf5wXqX6Mw",
  "key5": "4YF1nPBcRGvsDZvwtVrWGtaJ2iJrQUm567UqQWhLSKRbk2o9TroUajcm5ZsUMfVu9eeMc68xvWjEyxfTFociUYW7",
  "key6": "33xMrFStuxRwJqDS1ZurRa9ZRX136TCZgwnhk2yXd2qMjntzQPs723T3wZeA1WN94gkDqGKXjULtzNrWqaVNNQ27",
  "key7": "2BfwKbGKBH6FPAXHdnjNH19iZxQm9oYE7z6qUzSF3XNodjjeLHZYQcHfXbu5qYk1NhEJUXm4P4UqDayfHZHKy18r",
  "key8": "2kVvkcETCuT7KcoHmcwSJiPSxZDCZvX3Ck8crZJuRhJrmSoD8BWYVntLbau6wDdgDJz1jjNAAUbWpUVT2bUmXhns",
  "key9": "2RPJt2cq89TZ7knjFKqHvJCKBUU5pZTE9xqEtNgV2647ML1AnVqKaMk8dEWog8Cw6kyUM9itu6N6CuWoeTkc5o5q",
  "key10": "ugBNKgdhxBSq5PSVCYEzewsh6Gt9cZpmQneQHrzo46A24CnganG7wBe9MqRAn7LdFVJ7d2XtxyqBhUJPkYNveWN",
  "key11": "45fHiUuPiQdudeC1V8MHxKYaPpp89dws8XxmTs9XmaUajgGHfhW62Vby21reNtNNwZf4JWon51ZPEDi25r43BuD4",
  "key12": "2LBUCvBky85S1eeK9fQi6bUQhGiavWd1X7XWWSCnWaAj9UQkfCTK5oYVm1DmbMT4LwMwPkuQW5u8WW66Ff1yTqYJ",
  "key13": "5WoLpCNyzXbK48ed2puSvFqRizAhQ95is2FjevgjviQVHWLGx9Asm1EQEEZfFbfVNrG4ZFsgyymwrUbr2FEjGgKV",
  "key14": "4ZDpohKadjcydZCc8iKjadpmuh3q31WQAVC5XH5xDJWBZcEvUP2DR1mfZWHBz5aA41uedU738RbpgfGnB7eszYWW",
  "key15": "2ST9h6vTbfSKmSAwL6cYuF6XV2XQPEfcQUPUw5iZixFHbn4cwhbSkgwdJMoymDVrMYbuLRfqjB4bYjLLSvBzrCw5",
  "key16": "9Ayoix2Qvu1g477JjuPMkbTuJyMgHxNzAB1MnNS6q4ZHvQJK3neAdJZuVugFvKUHV5PtseWA8Gf74Ph8ZJqbtFV",
  "key17": "4WtJc2aGgtP5vGHZBf55RQLteEc9drZesQiVFYN4Zmci6pNPLPqmCqH4WPrQr5vrbyoGFzKvQNvrfHbWR6dJXk3U",
  "key18": "5JQU85Yg2vepJBrGYE6qmJwFvhxnpRGmYMciR7HkNSyT9NbWZd1psqbRruKiV9uVGoZHNxx3N9fHo2V64t54j99q",
  "key19": "hGXxBRScQkq23useQ28bWiPxYG6AyLUkknQcdELKsKr5FgA2DLuBush7bdkJXpCaLDsbcpAibU4pD3JPwEc64Fw",
  "key20": "CdAXiuMiWhJR6kjsBSZiR5rkoBsKiigbiVoUvJ85Tv5R6DemZovcv9BBpdxNqCr86xxQst8nf4yRksDgG2NFjUF",
  "key21": "4QNnRWfRdtXFDqAXg5aFWKh1Siv9EeUuB1Zypyw51Rn41WatKaUmTkndxGgPgKZqVMpQK54AVCdQJojRYfmRUTxT",
  "key22": "2omYWSEETakA4tJ35c7q7NNq3mYrz69zjH79heBzS2ecTT9WTDVmHeDLC7HT7vHyYUH4eEvHYimQ31E9f8Squ3r4",
  "key23": "3QcbUCuP9UTkfDyaqWfJx6ihdw7VwkNBCjfH1ifboac6cwnYGSc8YL32Cq9Ckw5Lrm3RQfyY9zFaYuN2oXAYdndY",
  "key24": "4JodeMXhxB6rfr41iZAvXDkceQnSXph1Srj5R9ybG1wEonnfbc4aHxpLCpEgpAXMxJjY2DUNvwmbDEAmUi7ZyjhR",
  "key25": "5XCCjNgtLCSdVebGF1u1B5a2Hrac3kcuCBHmk5KzovUxXkH7HsS1BALLcE1oVrWJ2YWmhpYWsHndfjdatbtSVceb",
  "key26": "4et18YGH7EaUX93MavaeDFmSNqYAv3FdVpenscLds97gmoN4VwXVxN4nE4hiQWqZMxisGNXPPJ2disjkSWKoXnrd",
  "key27": "28N7cLiDyqG3KTPX3Y1LhappVBKmaFuRMeCFhb2W9CKgURND49LYYDeupV2KeYSuBi9GHigtwFAKGNDbxsSu5WHb",
  "key28": "3eD8f17SJrNSeNeEtzkKNcWi9TJK39RCD1m31PNkbzHNjr4NBo7E1esW5PqviDUBR3fTwXG5MwtNCnDipRDdDMci",
  "key29": "4gZreWeqZAc9nGLK3HQBzqStqMijQDSdK1pvayTsz9VaskSbc9yzwEnm6yLQDNnZe4KD8tkHJdb1MJkLj4MWsbYU",
  "key30": "4YJcJwdx161tLTZX1hs15WABKXcruPHxcaLyGtwQW8eqTWLhGXNtnTfwMhQV1Ba6h6DUmNJqcCjxbuYndTXzPebm",
  "key31": "5wE17EZ3UfzJUprVNzLM74NypBc13saLACe2QJrNbSBJuixnnqcWTrLjVhoj3rGfKqPdgWygUHUaPZ6H4mz1HJGX"
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
