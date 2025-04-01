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
    "3cDhFdt8FgLLK7GhTbtPy9HcwU87fTFD4iR2z1waGtu87hQTa2U8dUC67dwfSfTtnFyR3brBg1Vaby4MReRoraf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nm3dKXfh1pj9sWswBmSdWaL5bgUm3GkPQ1nuxnR45NfSyWLn1GJ9612GQ7JYF2oWsMSQkqD2eFNiQUBYG2k2t1j",
  "key1": "NUJ2nBisCXrwonjWLxnesHi2ovekoAbcCAGZZWYEKCW7CVjpGhL6Juy5u8V9q9FNZ1JSwGtr7iQZTkAKg45RDrA",
  "key2": "2fr9k5A3bq8nSx2wK3HyE4fuMMerqQhkWy6t8iavUiXGbG3Rv1kmb3MhScq5i5fBLwBYgxtyRNYstwRc1eAZ2svd",
  "key3": "4KXbUfjLMUV7Lsw9KKAQgizQFpFbjXGNSw5ApMspPsepKqzqghS83R1UuFpuggc3WZsW4rbF1FTBv2Lfp8r7pfX8",
  "key4": "Ur1ySBQWiECagen1RB8gAo9FJxKzBXmSjrKPKWKhG1DRNCkgLL8Xcgv93ym1qT6k6wkozxLnxfbTYQzKU52msZ6",
  "key5": "5NHoCE1t1toCiRVT5XarAVqAcTBYsepHfpvhPSwc5wvHzK4AxbgfQWnWVkDctLaGKds7H1gPRdjJndHCBacxHjKZ",
  "key6": "5t1qsth5LaUSpSwAJRLPJt3oWG7XckwXD7LMZp4ZN97nUpwN78NPysT9zXPc2Twb4pfzdXu7uyEkxXefEP8Fiq67",
  "key7": "wdtmN7EbPSkMZrMCHe8aNT5KhMcy6oGoTgq8r1svVo98Scpu4jyqFYZ4gtLG6dCiEfUAP8FCstnvL1zA6hgZDL4",
  "key8": "3XfEWpuzJZc2cpLeFbYEoFnYC9SXe9UXzdma6axXfdKUyJevSR1YgjmhCTqbauW337ryVG87yVVPkU9KMtFCrWF3",
  "key9": "JkqdPk5wHCBr5yTvqcNZTck9PJKiymaoxW4oFKwLHvZNVbcDhxSDJZS9vZuxkZCh8JHirGz6FaLXiP6qyZGgXFw",
  "key10": "63VCJZHjLkrgFMu2NiQgDVCpGJ4iV23d46udybcWHwWHhnTErd4npxa4nG1MdsGJapKuLtPfPUoLGWxfuhbLU9yJ",
  "key11": "335qc5D9u6e9eSHctfKP1ADhytJcFE2pMEMqCoSHxSE5RKLwhFyf5ugAnfzkZFDieNp3L4TLLuLrgrBw7aErLYGX",
  "key12": "4FyAKNMYLtSAZr35rFqkjjS611C1vN5RckSM2WwXWp6tCDu3SjotXkmofvLa8D9nr7QV3obLwHVCpTcb9y7U43Lj",
  "key13": "5MzqTr85mgWbhDWrDQEVkTEPvkfBP2o37tkErUDLV6LuLWJyAgXW2NnFWzyyTSYmP3UCmQJhu5jXxVEGqUibM5Xk",
  "key14": "mkcMnS5ea58WWG9LbhqE7LxDiFDjRtm19GrUrcf7SekKJ2tgTXZKzzcouLDd2PTcpaF9A3X1MuCfLZhBcQMJ8iw",
  "key15": "UjiYLVdwcMs8F1ZPYpRkSUBda184LNEBuhRcafFbMBr9h7og8EJUp7FbcRutkuXZJPPmE3Z1goVHhE739W5YMWG",
  "key16": "3nKpyhPQgGrgnDXddZJB2EE7gwJaLCavdbiZyam7KBXZz6uo6CaDMWeZ261jec5Md6fwTWg3AB2zadW7Ma2gyjVZ",
  "key17": "6veMrABT4UUhcNdFFuuHWGfVvnZeEa6wYfj13u8g5BKviyz5P9v7EHUkhFyBM1gjjRELi5mN5ped8bB7M2RLFg2",
  "key18": "4ynxc2zTCmaNe6EN7Ux1RDpSpaqX7xFnjmzba2JDmPkoA6wMs4NJuRkkRezdzzC7T67myt5Jmype8t15Jw1AG2JL",
  "key19": "28BnrHNVfWGF4RmyCwMzuaupTosMtmMeyT7ePx7BVib1tesKN2ai13Uf1tThCQgFmEfCHnX58FGWo3aLuZ93STvB",
  "key20": "F6tEEAfTzFjEEH3Z1iXxn6bwL7z5FBD1nqMpv377fpNCWdwp6dm4s99JKrduwRLv7u8qDm8gr22DNehhE4NHHDx",
  "key21": "3jcDu833koEkt3jgPvo599qAxnkcPQD5W4GxiD1KAgYRVYSZe8PbH856sD3KBPYLgTfw9WWhPojRTVqkPSvW3ju3",
  "key22": "4vWjuXZpvttGhwDqaNcDAbq6ZoNfbam3nLBBqehzBD8QMKYWx9Vpzw1U3Svu4FYLhRUsdyUcV3XiescHPDP6Pynu",
  "key23": "4bEwTbMarUmHq6LQPbVUuv3Z5TwRuVxmE6qrkpfrgAwwE7wTkkxaynCk2aicNeSGvomkCBj2vMxtATC8UinBPti1",
  "key24": "aoGNJd8JXD49Jynx6i5WueKGmSWxQSeAET9rQGNtcezhCWkbFic6YHaQkx4gmziDvv4c8Q8MJzrtDu1CP2y7J41",
  "key25": "3Yvb8NKn3SxjpR2kDPA13tae48T2cKS1TS6Cgd92DxRbZgJobnnfySD2asFs2FuujSr77Lw6vFFCBesqLjnsZ2Wb",
  "key26": "2roki7s5ZzvqDsFa96vAjfFnwJ2esx5bptzMxB6iVZucdz1HV4Q11r3SysM3ndfip7GYU8M5gdttxyzSTEgxZHGk",
  "key27": "bYBmvssXhr3qxSoDjvDtHAD8gMwsDsS4EhVoo1FjdFq6fPzHdqHHCvYEagSQJmjEbbwv5F7meWfgZ8tjLW4C4ha",
  "key28": "2CSvNwmuqCiZ1TRGxSrC1qjBo62STQCVfe6whqd5Nv8NoiSyJU4RT1BR6zfR3xFN9AD45yGpPhyNsNU1Mr7UKacS",
  "key29": "43tqfZrFRX7ekFFcjFQgdfUfSGH4zfj2Ukq9q6jCn8zzSyyStuNnx3rcq2XU8N1aMW6jzJnfprJtkQTwPy3cEfGo"
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
