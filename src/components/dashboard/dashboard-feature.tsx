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
    "5VLxDBYnDE29i6sAohjAQ1H5MCvYU8RAnMoVCkdg8cFmk7ixXQ9sv3uiRaEp2pe9owcDgWQDBiDpH5myApiMTxeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYcHau1dKhYdezx2sRXLdfWqVVgzoK17q79ZH5xirtyVFvf77RE7tLYLvYh6rCv27UwXYD9Hw2xHznAiKjGhTHZ",
  "key1": "3DiMz9ZgjbWP1e6979TGqZ8kn1pkZLEYVXSfn938iSGHvkCFoisEvAW8BbruQdCtT6qaz6eAQNG7aHpNj5jErhMg",
  "key2": "259gE9Mu9WuEAXWnJkdVUx97vjH3aCbKgXR4Kia4xKBNLJ4hwetwFyrHwKWzXZ637nfwJr2EyVgnLPJze2KvbgHs",
  "key3": "32fcMeZDonq1xbsTXgLqbL9RiHb5VcZ66G4R83BqiYVFk3F1HSNfBi3Ckn4woCPSiRBuQc4jc3fpkumxkj1u9DsM",
  "key4": "3GXGmbE9BQVNvmCnAxSeWN71D7YFSDjWjdm4JMVMjDdc1Men95ty9efd9QEGbj79PKwwp2cNvo8rXh2bm3miBfAT",
  "key5": "2ACFqSmMzKuW8oma7GCuRnUybpD9Qb6NPWM3eGde2Pt4rSJmafc1N3LQKAZNnLzTGWc8WN2Au3f7kj9W56od5SCP",
  "key6": "4eJqzbSiBuz1xHMXpAr7sSafZG5NJSnSPLowrwuoaWxJFRT5APQwn7EmdeLUFm6nsz4B76pyxT8KEL4xobnJfAFn",
  "key7": "G8RF6iwbpXKsKYUKdTr8odbtbPHt1vU9XoX4iUGTn1diYV4AHCQGTvBKxTRoxP1CQ67Svyo9g2AokqBXjLZkJTP",
  "key8": "4mNVtocrC4WQsqS2M2USoEFKtDw6fZxxeEdzhVUrgJ9E9nmbsFcDf4cDvRcuwapvU11wUHX3od6ic48s5M9ayS14",
  "key9": "258VrHc2CFncJVDXoPKkSNx6eD8LyR81Ks2dSZ3Fxq2b1M9Qy4KvadQvJ8RJrAFqG3tsdXD9UwT59BRzVH1M2pyp",
  "key10": "2xgCgaAGxegRq3QaZ14deFoHJkbLzyJmuymviYNFrbAYtVKtw16EbLzSD4htNWMVxYgzG6vSMb46DoE57j7EwiAx",
  "key11": "2cWsm36gcpbDAA4tCT8HCVPf63vZfjgQuXKLgRu7NC8xKyxkFgQtC6wg5iiwuxd2ThFCSrpCVeuLrRBuipZBkLn7",
  "key12": "35muLXcLspXJvnZCSj9Zwd21XqSPJyJ743dQE31TM7YALayRsbaRCjK2YbLT4UtinbB7nB85Rwu5zq6Ugppu2p7T",
  "key13": "5aPbeERrVHL4jc7oyG21ZDHtfUZxQw8G4BhpE4Z1iJJ8b99Us7kDgswaxLWVpFVdfUgNifaVfY8fUEsGZ3ubF3SV",
  "key14": "tjLPTCcUkrzpaVihWPbpRhZKScXTytVm4QXa86LzXGnRWJpg4hTeER4PG1dKXJ2FDAmUrXKKe2zuxnu7MMgVXuv",
  "key15": "3Jo5ReNHSgBdfyiSF1tZ4yGmXpTqYPdoc3Xwhhv9AsEw8jFmEgpEji7rtyccSGm9RbaKZcgGn2S83rcGFBR2Qun5",
  "key16": "3RDwgFqwb28oQ7DfQRexfhe8Td9EyQ5nb7PXJQtGmdR4ubkgh7nQAMRVUEu1psg6AoDBGn7ApstU4LvvSiEbV8sJ",
  "key17": "2dEdjMGtffow4pcktJMHccCdQHWiudbbXr1LvkxGnuScSVUQT8F5UrvmgJ4mm3CjbEPVkyTVywcuwGF3PwSynJ7M",
  "key18": "KB8m9CzP4gXBE6A2jZYXmwctVdWxziM1Kyss6V41DUozaff5Ei6rWrwzuVGjBt7fJDfg7Uf2PrWqiEjCDRfS7hs",
  "key19": "UKoFLbuzUPa4EkgHdHKVw9GjnPc6pdFuoFNnERGBUFr5pxY93KrPD1ccfhGMUf2KVmWbgWV5AEEHsoEWW3MtmfE",
  "key20": "2vBKmcUVgw52ZLioXHtPuTDvEgDH6qvDjnvE31xkSkAY8iEqt6SpiZRkCg25YSJqjkHRvfZQwTyB5PZTWLTwy3CK",
  "key21": "37GhKPbnV4XhcRSDZRAWwrZMjcKmT6aNDdHfRYjhVsEVdPKSzEGLXAdbxZabNP1pmrYhBi5RKzNDFbH38LGWjVDq",
  "key22": "4FM1BN3WRyohdQERy8yL4mniuWEkAkMecNpmz1nCaVEq6nJXeD3oChg5bVkB2bMVpxrBtGe8vM1S3fgoMzJPKFit",
  "key23": "676WuJhHw8WQAnYYbaXmk3LgHSM58dt5pBbeD9BfpPMUi292k9CYaLGwoJHbkfhLJhaKsM4TGBdnXQfpQdYpaHbH",
  "key24": "4V8N2Xy1rFLxg4NvoLVfUxhMZZz8h9mFyMkxEiVzchEGrtoEH2SwzzefeC7aKtn55MjESYX4wf8UwyCYx9vog7J6",
  "key25": "4D6x7NTvfhe9P3isXDQ928japGHTxvuoXSFb7esh349Yw83PAcm7xp9ofFLhgXEepKWfwDw4eheQACuRSyxG2nYE",
  "key26": "3Wcg9J1HiV6xGrV7nr4V7qLsdy9HSha45Xn78a9VM1D6jgifFtNn1AZcKTbF8pLyByNqbs6PY719eZaYN5Crz2g7"
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
