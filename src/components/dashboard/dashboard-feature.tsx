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
    "3uNaxFoC13Qur8eWXPZq998Yjx3iBM6Bh1hk687oRjqP5zptHkKMcKbypXvgsspcSxhcbVz65WVuwWEMu1iUuisZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PEbxDBUioWURhrb7RiXycg4gaTg2uo1BvrGTc7itDQdp5UHh2hFCzUqqLkmxo7bHHfXbzubj9fctbh7RToMi83",
  "key1": "5J969WQVJ7vjabVAdQ3qh3A1Ah8YaXdWi8YhcMdn1GRYWBuYoVm79AWLSX3wnj4ckmZp132xHJEmdLVcpF3j2s5n",
  "key2": "21hKejL9XUUGeNvrG4BrsdhBR18ST2HC4PWc8ZT7PAY4gDuYJJuoP1gfEacmuBNZkT3XzieJpRbBJgbwDe4ZtjWn",
  "key3": "5VE2qoqLPCJciDnCbztodkcVB7QEVvz55eNemX2SuBkvGPykgJGsWQenLdaYFQakMn7gDRcn3DiT1ompyHAZW3DT",
  "key4": "4pCcwPCcVx1edTJQ7ghja4wVpUHtcuUKrs1MmRzA89WrMehUL6GUAJu7Sq81BtTDDvTKfyBuDTrYB9qzCbYUq2hT",
  "key5": "3j1m4PfTPnLBeiduNtHUFwmJQjdU82iuKEoPxwtJTusE5wgke5wikhBAXygiHC2enUVCFuQTP6nb5k7pee2iwKXy",
  "key6": "3PSkeYaaCUHuretP8eZHr7WyJn66PbnUbPWhxHw6AnrMqTErWNCxX4we6uch5Lx5cuKL9z67MoEyGFN3nm2TWZED",
  "key7": "5Q6PY9vRerCaQrHU9wHpjJK46dAvqNvxbLT5gNooW9P7i1YbJtjrEQP1sAvU7wcCyMrcFCXtWd7VvRgEjaRdSn7d",
  "key8": "2iKbm7eCmPxqc6yoVarodyFBynwz42p4qMXyNCjkvR8aYYHiqR5TCdwyAkA6G6MZMUnrRqaVDoETsTqB7VNUtyDy",
  "key9": "2m7WAT3gb56cAC311UnPL5EeuPgcnrUCWJJzLML3Gregrd6gwMmim5Pckg7TbecF1Vdjinh9jykRD9cyaa6Zjbfj",
  "key10": "cDzutmCGsEe3f3VjZytwDYR1sBwEhuMMarzLAPMNYEKtSDWuVS4FJtMCEip5Y2azHxUUVtwapG1idWb6tvd2jUH",
  "key11": "4EzWmy5RHjLgTfPs3egrra9nNKSPraDVosvW7eSYzpq8AqBtyxxRNtZCpcn5DxN854uDupj6CQW13kKEg5RK2Udt",
  "key12": "5ue99CmJQiUF3kDrVxcTrwcGCaQvTUUZVwXPsTCoG4P8d4cTbQGxSuMzzzy4XcmE1nceniZtPnN6L7GsnnQnSnKW",
  "key13": "3DHex5QyfR3w4MGxkNL3UqaJxfypgiBpfDwSpRDhRkNhsn3C3McZ7Qe1kiiJGAPfhA22hJq8zqrxPEnQoEvyn5uo",
  "key14": "3nTptt5kQruPisS9mxjdjfDuKvPh7dGGFPGD13bqNmPhee5AHmjMNGtHhnatQFSTW5MLMD35pHeXyUu3RNa54USF",
  "key15": "3APPATrTyiPMcy9n7zkEemSYMMpXtZL9ggTLMm2kyEEWcxvQZRsYgxSgiPfgHhBmNuM2WPPXY4XsjD3HTx3YVjgB",
  "key16": "22NFJwwS3bR3tNhwJcJqjYSeiwiAY5y75GuqD96CHb9czBCTtqxen65k9dXM4ig9DB2RRwVodFzGBEAPKpzguLv3",
  "key17": "2okijAor3YoL2HRvUJ9oXkMNQYauj95iQeRZPy2mSkVjJwgejSMr4Bq4QxBKCNsB5kGLiCBtf7zY1KAELi57BBQd",
  "key18": "4aDW4fx9gQAAEhGp3bXytThC8t8Pk6ZBoiqVhaRX37KExEeuLC4jW2ZBKj9xTtfX3ScnBqiVLTZ6e23AhVJZ8nB1",
  "key19": "43LooxVzJf1Hk75VBd4YEnuKL7gj2df6PoshLpAqx6Wurzq76BxGMTe6e2PXXbrLWVSayhrdK9BMHH9eMkkWVcXj",
  "key20": "54RsavbekDQNcBLkj33dXBQuNdQTerz9Wu9fpUkK5wthYPzpcqs9j6TdE8UtW79ZkWNHrvWnJRzgqMxDoPZnsAjK",
  "key21": "5k2GMyStMi3cTrL7SaWeCgZ4GCaojJ7N1voDz1FpriA8LgVeamBxRhUTmq1kJqaqaTDS9Cnq4yh7YF1GN96DVScL",
  "key22": "2ukiTKtPGvTL8ozbUQ4T2dDkz57gbseamo62SHfcTM64FAaX7cLfEMXFrAwbE5PNiazaK88MZgYynHidvcDuGb27",
  "key23": "48Sz3PGXpHRRK8BTAhU8uGHHabMvJUgyu9SB8b3kMZ16Qng6NAhieYiga4R9kzAeT5WtwYjAYQ57DwmbJttqFgmw",
  "key24": "26WMUrYk2iynnYKomDWPQWuHg6xX9CHBs41zqp5FZLq6tfWj3rPvnJ2C2hvQpw2E3BsYBMDj1eG426Tv443e33U7"
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
