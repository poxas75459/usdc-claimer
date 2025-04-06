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
    "2tzxFAi9UqvjXfQCD7QaEHMa7tX9aQvVh4PK9FfX33ECtTgLXch6ptMHE8uJRCPmJ3FoQGEJJ6XEkKkRAMQymN27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwTi61hAghLYdf5UkcN3dgMA8rRp6Re7hiHXWyCV9Mu4geffz9RQFkF2FozuyZ1QGFkmrF51HMiugK9d9MY1BvC",
  "key1": "4UxQTLypBkpVk9JnngW61PjDgmrXcNifWpKZvnCW1TERK7QhUuMExxHgXEV41a3hHJU4sgxHWyWKLuEdsSLuoKZA",
  "key2": "62CDXpeZM5swhcgNZ3rYzc3pLAgvZHGfh51eTNX1eKAsv51w5biG8eiTat8t4oQBoZcqWEBhaQfxXgVZ2YobQYpA",
  "key3": "3g2ULzQ9DNtwMaQHfTrKusotB2K1wBTvp26bnVJtjt5xn1F9egXdVaRopZ4fj5RtuPnVFjMXdNE29ubKPrEb4Kor",
  "key4": "23rzeoDwj6r6uZs1FmfwYaaiKp7S9sn7FytmBPJMDtEN2YfHVgJ4GBT2ieb985F4XN5UoHzSQj34ATNuuBH7qvWt",
  "key5": "3gLioRhqejToQukAJ4CYweDmovNsxCuvcuBFDXCXoNFnuh3cGGoD3usSNkaNq4A4DbdpRDGK7Uxq4Rw7TpW83j2t",
  "key6": "eqrd99nFenfe5fzVEkPEdr6G7uowLbnTgomjeiCgUU1CdchBnJgFDw9eggC8GUsr5jyoBzweSJpGSx8q1GiiuiE",
  "key7": "818iy2Scwa3aYHXfPrbqZptJWLfKy7xZazBVx3Una8H52Svn6VbTkLqHAkLxj68JC82KCQZLTkusQXKQPMh6fQV",
  "key8": "4DmbeaMexnUjNGZzC9a8qtgzJFmXnnSEt3kydra5aN33uritNGSDdMmid1op8PtYd2GWNjM71zZ66Ka7bV4FPCXd",
  "key9": "XFKx197gxGcFdSqoDfCCLPPszrQsk7brSXZdMBe135er6G75D8RFXPjeAzvKZQopgi6zteFysQrciUrUtq9S3ZS",
  "key10": "YtbkvbDrxe3SvyJgsVHzzQvdS3EXa6KFiAgsuPHRZBvx4eG1QeWdxeMyqzuPw7F73eJzoKFcuLGKKRnV7xd1qAA",
  "key11": "3ocYq6kg47yXGYSCKJ7dx9TrSRJNvGtMG5hrfyvUnYDHcUZeZXXteUHTyyCPArHdcB3Yea9pNd7fUudPienr5wo1",
  "key12": "3YBsaN76suJhmvbMXwBNS4KtUWNy7YyiVbhybapVbJYNfza4opGE7EouqnDCHQJ9YWWBK65EmK5HHimULWmKBUVL",
  "key13": "2o7ioxqodwU6ahY6Ltc92j2oNwh8giYH911w6cBfKixpp3avkVBpnn2KSB2ycqz4fpf17tnUhvhpuBi8EQadkogk",
  "key14": "4ktEBh39RvLKuxgQ7iMFoNyowG3w7JGuTUpfgVikym8uLjNwaDyJotHqqccspF9N2SfxcNzS9uWgQRQEfXZPP1K2",
  "key15": "44jMiDjBKfwS2hrcDxNEv1edB6D1DxyEqMQoYiVdKaARMzWi1ZAwWwcjkLCnu2NYRymr2VqoS7rvfRNnUaowuP6E",
  "key16": "3mDRokiQR8p2pGUjr9qpXeX9k8Jh84sN2t9XhLypzPNw12EMRkaHCTrsigPXDebfvKpZwPgYhkwaoUENmyUY74oR",
  "key17": "4y5zh3DgyVk9PHhGTXXpFPEMjSEjnsK8GCjSz85qjYmq7gmMjSfynHm6jqKghH2uchRcGjPAeZMjc884YYbMnfMe",
  "key18": "5f5Yoqrta442y2KoNT83XmQN9c8TtZgVas9Fw44PwadTxoR4X8R2D1E4zHmUtnvJ3XnvrLD97yQUGCn3snhNRFQH",
  "key19": "4naW16QefXs9sYeQLtLyg3iHoNbhTKsFSLmpJqLJb6N11FUuwxa2se7xD8YM8fjBiLjqCj2NtduXprPWcG281N27",
  "key20": "5fzLULQHL1bCPEceL18cD1LaxpaQgzcUgYWXXQ9zuP1Mus9d3Mjc1VXLTqyawwHMN5vhZY2BEFy9MzpLCxi64Dgc",
  "key21": "DFxkbMiFFHwfm7yRqig7pkdbcicjKSFT1ixGLZ7hCdeT8bvTgTxipKxvcQR3wzYapqfFgHZx5vZsqKZGnKWMmzb",
  "key22": "GUFRc9xMhPH4aL4hHaJEgaXgxxCBH2pjbqSMbxJSvjjDsBy8a3DxnZRfUQZ2UCFTaJGk9aV3ciUZDQFXeba5J5r",
  "key23": "J16ukCzxz3VhAxM4tECnSFJZA9fC3WyHVzcX2RQrdPwpaSDs9uL5kFjJCNbLADyaLFiXuH4ai94Sy7xxXebnrec",
  "key24": "2WokLUYxkUz7ESeWWq3Q9eihEAn5nMwPmx7kocFZg1wbnJRQKS5qE8ofbUTWWJoaz2xKwa7iJyVsQwLTg5PJj6vT",
  "key25": "5NcdzVgm5Tf5xGTVAcLy2YyWZaNNGDGHNjaFhnkM5FiuZBhmzXFnmhkGPpFsoS4xK5UP7jzrEjJowDsqJLMqmU5d",
  "key26": "5ZCgRcEtxcqLUdkMFHLzMeaiJWqJs9RAkGBNw2EsEofokdoQFVNTNwxENWwWm3aEyytUXBTz6Hsvck7De6e1nUia",
  "key27": "gzwUvuogYQRohVfPtDv5NSFLs7kmq8X9x1KKjHNPWgr5MoK1CDeV4J5B8VQsiXCze5YNEQVnBxR7ezJxjQWrG4B",
  "key28": "5S8QqN1W6HHY1wn6k1rxVUg5pYtbGcENVxVReWj5hr1pYqP6dEuAex7g7Qq1pVChNUaunijJE2vFTZRAMziNSB1Y",
  "key29": "4u1Zpn7PuT5voSVk5tPSUz1Jo92ppvPayJxVYN8xGzME774rCgNxZgHjzKJuZZmbj9qUXP14M3Q1HQqi1paxKGGb"
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
