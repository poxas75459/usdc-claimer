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
    "5X96Vkf1eqnZgE6mz2Wj1xgWMqvtPJZuk8GKqajpk6d2C92XxaB5aW9jNkB32hFPXr5XSs2MxAJLcS1qEne5LTY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCgsn7Q3Bu4c7WtrL8hTX3ErZiJgW61yzXH6Mz5B3eTH8pnCpRkg81jSQpQMXqaSpRdNYgfkw1JdQRvuVGyhUiF",
  "key1": "2CX9ohWX2yqoJUkhPxdKTChvL8yAQVKLVC2xdRdrwcrTfpHPqSs1Zt1MvakSoFDrQ54fSzgA2PjGBcLwrUePzFoE",
  "key2": "4GAfQebMtBtsP98MPoiJnZpjAw7JrLEUachXoZ8Dws4sEir6ice8nD5Hqvk6uonamb21Y1qKCRvD1KH9kWmC3vua",
  "key3": "xDmD1Q8TgApo3hDqZeNozFDMTybP3cDGGqWprMXqLRksr9AUmyajNqq2pxSCm8B8J1a87ZUMMmTf8oCd1bBscbt",
  "key4": "5AxSm3eV3YQdxeCaSYBKybq8ot7FU9erqvqgkuSjRuSxhD5b1vvkN89gBhRjT5GzgfNtEghjStaea1xgEKypptqj",
  "key5": "5QT9e6GEbY9Bnb1Tk5aYLVbaVwg3C4cVjWS6d4aF9nGDgG23f462QdpmGzSsZZj9rXFKmy6qGQCparcc7nZkqwJk",
  "key6": "qxKntreFSioAXLVjGjdqo7B2CUNdEiAHP6Py3gTaMMVPA33USAgmJQCPumhVvjpgx6HwzJdszKW7otXE8FEKX9V",
  "key7": "46tmjhUS2gFkcaFN9YDBDexK3uyqLPhpdKxojzAzJ9DQRat92gY7v9SAre6JDoH6VM8nkzdTzLVnCkdot1JSWVNj",
  "key8": "4bGw869z6zVLmsJRsQQfjskW9ujeKoxSRo8eNeuYreSdMKbigVpvCeuAqcbyMTTE9AVSixXjMYWXM2q1LMtu4nco",
  "key9": "41uePvJDFvn4eHxUTLDWq9BTsNhLpPCxHUB3Xmdvk1iDajxQP1UWRQbe7pr1XmCwGfZ2fQ3u8x368wrn1iN5Znz4",
  "key10": "3KvNSaqnp7mvqzZVkwzCP7uWUrcc19qwemHFqCaivBL8wThe1kPXbHT5ZuLoL8f1m1VNgd4xXzS7sZiQVgy4VDTY",
  "key11": "285XSZX75BPwy7k9h5zPSgp8aZktMoVodSFxuuC7FUAudfrukyu7VtLh1FvMunNQRyp4YPxHEg4UjtZ2o4JakCnp",
  "key12": "5tWEcihXKy45Tz1qPn52VNEocMFZnRtDgMBsbWmhsqeUHBBZWqQBi14r3Ygx4NGR4KNf6nBKgbZzt5n27zyUs7Hh",
  "key13": "2nWTJyGjwsHGEhoQCPsLUypFPcjFbrdu7a6EkjuhyLG2R1Bn7iKErHKsA2QPT27SM7LrGURFA2L67KXtn8A1ebmn",
  "key14": "5QpUQkkL3cUc6ghLhguLzm9fAJhXPauhufQoVQ7kiGw8sJCD6CoiKMKLDuAcfxDbYZznJvspF2n1zK3aBejUJEzz",
  "key15": "342uryXGNUrzrFPjo7LHXpzFbMua5UXy6SpHw4C6KfhJE8VYjzDnHWSTL6KNzL3p5AjmsPRuyJMnTUFT4pz2vk7x",
  "key16": "3J4PB2rU5NNEXpt4Pz9NtftmeGPG1tCvBgeoMoXdwgfk3tsY42377oBfGL5BMD3gHpV9yXF3yFQXEquQzPccxVGc",
  "key17": "5am7iisX4bWmveWUxgytamuUPBkcfKcL47vxC6B41R2RPX5t17tLa2NxAtuWg68xNynDWwrBPfLwYFkv8rGy7j8x",
  "key18": "2GkaKJhhLDmrM4XqXjV29uJbGYcZ52hbZP7t5VnBiqqSL4E88DuByti8LhSbAYvcWXoqjZL1n8EdPfUK6aCEr87F",
  "key19": "5JR4UHfB9wpAx2Fcj6G9eVbTfSyNyAor595qcrYrTw3i2DRFJKqVfNMym951foupkJucDqFSUEaDdm3rskBm4eML",
  "key20": "5THnf6UBLqCxKcfUZXjEm1bBkudRHJAqQSKqwi3TLUPQt6Djbjxy7cPkTR7eKwg5kif5HaJmaSv1DBX2Jn6TtnYE",
  "key21": "4Wbu6cCpMTj18J7o91L9woK6aydpVDgRwho5aPnvEWeGLeC9y6AuKQLZeke8YoyAiBQouQmqronVcn2331cpXDw8",
  "key22": "LrFwzQBjAqmPqvUu4kdHp4SiBbAVivbTLwgcjzQzvkxtcab8dqtz8DzF3k9RLzXf2En7uDcoG1BdrC2gZ3t5VSJ",
  "key23": "67pXMD3ejPsNwY9VgExU88rAihS7AzHY8aJu7eXRwq9eTk9XywpUSoUpPX2S3Uxqp6VqADptjepDB5SB2K3KJMmU",
  "key24": "4j2ehD9oQCs3iDsTRjs8oxoemKQHd7Lnhkiukt9BuT6dqwKoWD7JLVp7ZwrSiRPr4tk4RKyyRPJFTGAmjbRhnHPU",
  "key25": "3WZsAQY1jXpUVLZUQagvPNdLwf2sgK8YEfxmnZGq77CcySTDn4GknHeHyfNQ3jkESTzzMZG63BYUBV3V6B8hxZ4v",
  "key26": "4KxPSRWB3PeFbDzpHMsP3qPLaQaSRNBxQruqFrcYFbed5Rd64GjSGh2RUs7CTndSrt24BhAeAA6nNZ1f8WeL9uQe",
  "key27": "3mfCubQJfwAWUgJsMJoEcovyiwGsc8kka6M2q58GrYFYqMjapsx8x6Kt9C2QDV3cq1t7q9YeBZDmfmaWHY6zgkmh",
  "key28": "2FShWvkv9uzFpCNX6uwGMpZL2yi76fdXX5RCvJBLLs8kBXDhFetqLC2dD1ohPwiYymbCYAcbq9J9rkyTD7bv8BF4",
  "key29": "4pjBm5XLZ56y2L1UBoFCGzJWq1784wVDogmuH6XmmTSf6zmHCeq9Perv1CKKvkCAZp8vqHS5EygdtD6sed2xYPxd",
  "key30": "2e9nPSuA7GH2kVyAgXgFaCMA5cSa9zmhjRr2irhifJANPSnVT65tRfug6N7Ug8ngvH9MMKAzbgan1bqBd8NhfmJh",
  "key31": "5HLFsjSfTbCB3NVWc2qsuto3c6SpD453d5n4oA6SfWZYVLs19Vbj9H7dYwMy2erX2bNG1LpbuGjjT6okCFaffYGh",
  "key32": "2BVePfT9VW6a13mzhDto8V3ET2DmhRyKVwRMCTHAD276Rf8gD6XDpNgJwy9gwmF8zmBye3nrM7kQc2deywv1UiQX"
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
