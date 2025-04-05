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
    "5nTVpJwj5GonR5LDN37d7MRuUgsnbVMmGTGRpbne5aCei2iF7kdWgrokDzCiNMMum8G3HYtVzgFTprgrZ4uSooDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sszPfdhu1kd8T5vt4SaM2rpFpD8wQ21UREyV9LnDHKYeeXRHqf1W8RnXLwBGxo1UZBuHvW5Em32TVBEYUo2Rr4J",
  "key1": "3ncCtkYaZd2N3uLCpFGPoosqJBEWm3bTEXVAz5AynmJXQvZZVv4awSbRbTL4PXCdSCJJRVE9CRN1FiijP37GyuBa",
  "key2": "2inDaLXh5vw99gFxzdQB889GKtS6NwaWoGZXnrBbwnKFEGUeNmpjMPsJShSQ3YSizHXVbWXkNomXxm5HKoNEMjEX",
  "key3": "2qNfcLQapsKqcTqm9mV7UzdXbKCYB2FyTT4A28ZpRSCHhd59mbfAdZC1nHfVpLrPgwxS4jTKt2ab8rY4CmYjeyrw",
  "key4": "4Hcp6dZRgS1zjT1AkX2aidgLsER22x213W3aQAZt2XwYQEsN6oXWZnh21X9WwuGAuCQS9bJPhLyCd53XM85GQ6Kx",
  "key5": "3CJ8FMp1nr5MKry7iX2JV1LZwXRsXuSumHcWat2oQhpFVBffi1ii6Cq6WPocAymLmY6m1gK5MJCejGVtnmDxQw82",
  "key6": "4iGkdoBP8kZruBBamUC16VSavMMaBXBx86WDMzAruP46xuwjwS2K9KBfGwYEYEN97PZpP6bX4T9TfmKi9B9QcYQ7",
  "key7": "3S2FTG2qF5B4WQkLN8X9SLSQYFn1bfQFdXtmU9fY2HhKtFN22R75uFBQpZehFpESiocbwHLS8egsubgue3bGm4J6",
  "key8": "3mJFimaFaAGBE24HYTRezEezphaK6mCFnQwxhQjqrYE5uEZdfD4UJZ2owhdGUbhLZCAwgRprbhv2Ruadi2kbqoMG",
  "key9": "DXeUgxHGr91mEeeiPqRFdL4ZM4B1p3LdcUFBEVEcPaujC1jG4anJ4NqC64eU2X3scioKsg2mVhw3zrWqXUsfHHM",
  "key10": "5b9ezW4Gr39pTuD6i8BC3o8mkfyvCpwSAuQMbiga6df9HHcE8mWeUhDvANk4JRefqULZVuyadugPvGUqGwf5yV26",
  "key11": "3swyqdZBMvz91wx1JWqkvwjFH5doeU1p6HeGo4oCCpoeMMVkJEwcuha9mov6FMRsENKqTLRNYGApV5wyya7Pa6VD",
  "key12": "5F93sh71UPc52f7se3kfjveiE8te2t1gCpBqMYov5bQNUfyVaHhxdkm18zHLoJabMWtbiLSgLABmwYuosiQnTfJ",
  "key13": "2dcVryBmk5o7DVBsBEirGu8yqizPHzw4NL1WHbXGYJMMsxsULD4vmxejaZ25EqXxvff7hJnQ64WLVyrgAYztCzNc",
  "key14": "34WJtnJErYHxSfGdycsfLnsu9GnQ6tLxeKGAmVdSXrD86tohULKQbE5wR5C6ZWMz55QxAMM5UQ35VN6ckGfNfuH2",
  "key15": "2G86KtPCNg3HamzSHe3sd9oohC9mViV23zKJ39CZa94i34q4QQCo73jwptYSEUBHJRbGRZabWYtNJcLpqooZL3ZD",
  "key16": "42rVJFfaMhMFKJwMfVYyUa2Y3g3E5an8vqbxcNACiTiLD4J697pyVa95pdaz94fmzP95eTVA4UXGimK77Znzi1VR",
  "key17": "2vAR2wKnHBrxamGW67C3ahCtnnoFTyU7ExMAZnDXRXvtbkDKBuRJrsEotMQUQZs93akUyp6YDARmK6TGH4bMu979",
  "key18": "5SLZwR8dtWHJbH8C6VxgXPPwSwjhkqV6oVdrL9TimAv7NKzhpheEjSd3XzRkHryp8MGzbcsHj1YsknJsYovgmEwD",
  "key19": "2CiYjsFDhXpwFJTjqWLMdq9AtfzGwkxX6PAGxumpBYE4mLkGiNDSonB5KExFqbSfA7cSXUpq4SvRcJb7ztxNBXk4",
  "key20": "4QFCWinSk5AMUuVzEEqS2qARZwZVisHKbwcdaXAa9MxGcoHgdqjo5pmA5oDQAgk1ZsmsA6RPMkBQfvmYNFrWbqBe",
  "key21": "27nnuJZRAgRJK426foSQxyLDDMHmhoJGfwTREiC34SiBG9GF2erX1UdtekE1qoMRXnbRv6DLCaqmkDign1GEd7gr",
  "key22": "2yW6WQvN6oVaNdMRscmYNPxTn8UTNJNUeeHhapVp6ckHqZxUqvGE42ibEhmPLsQ69kNWosz8LL9ZbDGs2hyWpG4L",
  "key23": "2MiLvA4Yn7C65WdD6DYcNwzwmveNDyVrFvhD5etkLjq27wJbGsHzm9cubfwazk1AkMte6ER4UGF2NSHzTXiEi8gi",
  "key24": "3nZau9ZegC7sY4F7xotrisuciVsVe3BQ9upRAkfSBhSJmhp2jaGFd3EURsa7JhbRyKBiKa23KWhnSLFcHPE8mBNB"
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
