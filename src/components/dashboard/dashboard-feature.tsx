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
    "4jvBhqa9T9CKH98RX93j7nUr2CrsTmzqMpRMBM65EGZcD5WQgt3iuo19S5Nxnd3isEhMH7icpszsduhRQ6G81Rnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WEKhmG6imwRyCqAxaPR36EXNyE47tg7qRGtH8UVyBzEr2V5fjbEH64JokXiS8MxbPHsaLXtgsmVEmmKyQF5rmP4",
  "key1": "4nDYsV4E9WEKKVuQYMjhF957uma5rZQyBvtxVmJTuJkBFuMw2gSKvTxk2XER47EMuTPDFmH2A3PrbdZjUE89ACJA",
  "key2": "4LSUXHivENQe9SLLfedshezKn4u6FEe9BHbFwwsj1YqurLMF5YJSvFnJbukwyZT8rRFxwUVQBZLrDNcQBfJM6YiD",
  "key3": "2qSjXZchEZcEg5qT2QdB5JJKaF4xBczxCjwqpXs2SZxn8YGnTKpe7MLw5RJWnuz7jpwZUJW9amJcr4sy7kcdKYix",
  "key4": "BiEBhZvEsRhYR5H7PRfLVhj7Ut9xuXsEqjYauVZVxiubZENK5zXbiRsnauRKfoSLM8qVDaNgP9vvwzPVBHjWpeB",
  "key5": "5riy14ENZ2ufKWHcL3Djp8rB3g6Cr6nshUK7UeKNpC8dACKZExuX14xbKVp4Lak8t5RjWUgcyh1DgCgksVVQEaYT",
  "key6": "2qyZ9oVwb1mq77pdj9ouoAh2Dn1pqrhJs1sjRSfwBD2LeSkMFY4vVceQcFwSRak2enJkAh4xFHtSy7KpesMTLGgG",
  "key7": "JFXUiM1NdkEaH48k5FqGKhLefdc1x3SxA5WPUisQU78TczYkymq7PrRoJgJZoGnZuKK3yiZbJmx4gboq1xaE4QC",
  "key8": "35oN79f9wHwphvZQRL4Q5bv7qLru1fyvgtbWK4iwEqxKyrjinR15hNKhuCVqpF65D3KWpAWW8CvjYsFgLbsuw9uv",
  "key9": "k17LLNZrnB5BK5gm7JGup7oKEKvV7gDbVBAAoC2m2715qhCQMbJskxwzSc3KCfXbtYBGXPdbi2Axg3aXucCgxQu",
  "key10": "49DTTkg9CuUAT1ZH3c1Mpkqmre9XEqfgzR4ywCYWxLg9ZnYQHj8DpoLRK74DQ7UmT9CRZABe2d7tiBZUnBryPXgU",
  "key11": "5T1nceF7V17uqZ1n2kgBgn1Sg7Qj9YXPsZaPyhzgEAv3bkwKNZLKaZDsjfxAzdTAUxwZQgy1FrubGfyTGCeoR4gT",
  "key12": "3ynkvDH5XB3Mi2fYELGLBG7Z6isueemhdqT2TvhgQiuZdKnWcja7jdtWGMd32yXFFtDz3dHdgCebxK9ULqrQirZr",
  "key13": "39FxGA9BsyyCZoVtuh1wZ8SrAA3ucuC1cWagpxpr1MgEbxfECaJi18GsHHVqams4qcMUKtBih66hYF9vchksEUTC",
  "key14": "41YcNSq7pYCCVJmQ4kBaSxbJ9pHrCgmnu11gyPas6R7RN5YRMof7ZK6fekf5Gk2CjwW4dLhm3sbS2jwTVjKz5xDF",
  "key15": "52BE9feiUmXwmbCrSk7vCE2voCAWzEwLBSaYKokBXZjaG5YYEd1qPs6DBBCBjE3pDmc9fYKiNX2Y1cu4bCSe2p8T",
  "key16": "54KzugMk5ckczx8H1SfhbmHbb2QqHQUPmTxnbjnAyJeAE3emu8ZZsve25F4KqJtAAt7V42rmLZRnRxsn7SfDmfuA",
  "key17": "4M1eNS31wYjHBbXTDQMGzmKVMSD2jwyh3Ps5pxfpBqgsyFXBKkSr4rdG3FsDw5LBMthcYG6j4SXFsJ2Ra5Bxykm8",
  "key18": "HbpsbwwpAwMZUCzfos8TpNhnu1Wbx3UnBARA2NFETJaBjryLpCFV6oqSpaapKeV8PsRqFY8SVsKfx7XBU6yjdxL",
  "key19": "5bJkH5Qe4JYvJDUXkQj5DQPMQ1CpmaJojhYGDHkqGd4RsDQPCUmc1EH6vkyKmMfVQfE8eqjNz5KvK2wc68gs87nw",
  "key20": "NQu64BkbVHT1MB8BXy43HU9DDKvQQ3QmujbwpbYF9ERDitVqy52iF6BEFjhLki1a5Spp8rmbrMjroaqLEUC3VtS",
  "key21": "ejGpdmRoftbihfmn6FtPUBE5LxhAkoBHqR44nYLpLG83gdkV2FoBRLjXkXCtUwREwiiAQUUGrW5riybGYPcmbWs",
  "key22": "5xyWgpo8UqvojTbybex3gsmtUvVaFUhW1EC6q4LBarVZF2fBGNB7k6TVnTfC9rMGXyomvjYiJg6G32A4rjriCXQB",
  "key23": "54iPDBppHoy6vu9aPKCi47nC3At3WVUaNg9b49Vv5Mvyh5xX3kCJgC8aRqJsqeiVRbgNsfoZ4rm5N5n866xvfFSt",
  "key24": "5xSAaXtpzReEzNC2XFQKb574wkXPaE8krGjxgjME38SCtGA5RtqV7cGR1QuCLgmpUTEub1c27T9GX42sfCQopGZK",
  "key25": "2KSxfhQLkdeSLdvsrMeFLifE6CDjJzViQnHB3FKoQpECWRb7WFHuTFVZwhwJCD5qzWjFmyjmXt41DaiDReiWS5Mq"
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
