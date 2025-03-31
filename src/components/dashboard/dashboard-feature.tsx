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
    "3Z8hkVKSHn24mhCTaATF41KCaHbHYAerp9WCS85kjf5YbTQtjQzKVmqG36kfKeJ7izmWSARN85Td2nx6tXB2cA5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZDQjDSCHrKqjDyYq27WnWweUxFDwhfirwmZRm4tJZAbroxw9D1aeRKLrDDxwnwaZWwcmCqE4Jvgqp2f3m5ffDc",
  "key1": "49dkXjPYhDHwNTH8WLyNEN9UJrjta1Vm578tPQRAcU6nKFAtvqVtJMLzREq9zEEEftbQJaggFWABWwPZedS3XHeb",
  "key2": "4tpJHJ4M6sSELMnHj15LmPoLTvg3qhFZJh3qk1USLC19F7HtJ4M9k39g8fy4jv2U6maqeut8hWh3R9n48TdM3XmB",
  "key3": "2EZvGTzNQQdo4aNe8Y2eKwVo3sDHMhsji2qVATPaSM3HcTyccP3h6XasTaTbEzHvkfL3zPBx7Zdbz4QLeQqJje1r",
  "key4": "4EaBaKSGGb44CGEcVGxKZ5apgGAL7KuMZzut9ezV3LLJBTCN9CpcYffZQHYa26yq6G8sTVeZLrzRwFSNEhg6NwPH",
  "key5": "5fGzQ1qfxptpGirnH9qVYuytUcEHkgpktYUdJkfAYp7Kd7jHTCfcivQCNZUMoBc7rmkophcZAYdSWwaqEvS1bXPh",
  "key6": "s3k4Kro1ghNJ1UYNNg2MCBQGhREpGiVEDTtwu1Jb6fZzzC8CpvmNu7s3xU6xmL3dnPjg5s3CgHLkSAWaoRciEWK",
  "key7": "43zez6ASjE2DVVeGKQHodyebRnQDkzkhjZb137ea9dETWV294VYezPzMXRQf5apDGrVtxc3nn2AjuZxDGuAbMv3K",
  "key8": "318Ur154BBp21TJYKtk3wK5MgqfgoBkZmXyipDhufBZFHCFpa2bUSAYMwANdzd8BcfJwkMBNFiEb6SMkcKoLgKVp",
  "key9": "2UreD7Bm4XeWYY2319rc9LGx9VhP956GEmpsC2QRoD3GFwzELGyHkyKL8cw8CJvMN1EypgRm7asvGX8R2hnKh3vb",
  "key10": "5WLxdg74SgFhNKumP9TanAEXjpLrDQ8t2RaeYwGRMG9Go678os2yNYodeUxztHc93EXuwCse9jkFaaQNTG1XgpDY",
  "key11": "5hATUFvhUPdtScMLYC3N5CJJMPgqMrqFx5FT2q97oontJu4k4vkJCB9gbVQbNgfPKp43jzwJuLJfyizaQhkwEw4B",
  "key12": "3oVb6b7xC7RUVaXPNArLwiAdtDKi36ckXYoY2guuTL8kPX3LJELdJ9K382WwRiTBLsqRVhaLuYD1Hdf6n62uE44p",
  "key13": "5BbbAMb2NeF3b5XPyUYP74mkTZAegd1FqEZFEk9mEXjx1BneKPtDVvaLHxmWbvSdBW1dYPz7Po2hse1UCZD6L7ik",
  "key14": "3jKaQNvPMDXzas4MVJV4tAivVDfcS53KiNxHBa9uNxacjh9mHpvvjRtQVp58jaQqA4zBaJHK6uYNxzEsxv7hHCLm",
  "key15": "5vaQ19AvQuFAZnvMPBLRzJKF5cPWfMxxuTXFoozBfwWNHQKbFxSaawffezUQ7PPwTxX8o5mjGBpCE9LLf27w5aM4",
  "key16": "2E8VmHXrqkbBLc6Gm1fyAQ76wL2DbnYbBRTu54TwB8Z7bn1mhXi8rvFPC2uL716MUMmdubxLj8X3snrmtug6qjr5",
  "key17": "2Wdf45pf9NidmQNQZLn2CACshFAM1S34BbZsN3NL4tvxspL5Sxmz2vBSBtZs8jQStNjoWhySP1qwoKKkAHAsXJLc",
  "key18": "2CoxSMV7j3zbUZa15pm7Yg5d2tjEviBYbAmeRE2mbN5BwRXQzghUXTK8tsbT8VMoCHsSedRUpZ18XBHXaXFv8mQ4",
  "key19": "3dJ3didZ6vRwzhqbQdBNyVWbRz3Nfnq8WKUeZFnc2q7G1Q6GpHH5nofisRkoi5uqXzzQCJY2Ejj6FWSSXrLbPRNj",
  "key20": "PDegmVPtmaY9CCu2VTgasiujVRDJhujVFTRhkXcgyHPYoD8QP7RLr1Wgu8PqHvTtm8ZdF4ebYZZVxbFh3eZfPUd",
  "key21": "2GYhjxipNTQFoeqTKuKSHsqUKj4rArLLErum4eK24Pe8A7nC75uqttekY6sY9tQgReteEDTVPGRYjCRbxRkqkPKV",
  "key22": "3CK3VX9vn2Wt7nEXtcZwwSaUz39q5q9Cs8mu3EHsxffkrNSWgPUMjNSb1ggAn68PeYBRkvfjmcyUzwaLjtJuWSGc",
  "key23": "4XhzLvri8tYc3DBsMj6o9QqhzLfeSyx9iAHdoFVZqXCtx3sDeaYBXruebiviWvSGMstFwfyja8kRaKyKpYovLnbN",
  "key24": "5suP1EYmCG7rjHW3tGNoeQ1sntQwdA53nY95H9bqQmJ85RQJGskZLWzQJ45nF7YYQ7SqMu9ZGZ64Nngz3JTAZnhb",
  "key25": "2Gh4kA1xZ2CEvi1vVrkiHmCqhhcUqPBWtFEtUA8wtTs6po8ioZSzayPEifDUJ5uPYiWhTC823MB28fVYdWQVCyp6",
  "key26": "1waSFSng8NxcfwgZrxJDV3PHcC9UtWQa2smakWjsuQPwjmf55gwUq5mQBxTVJzswkY9aVFJZjFwGZgbbrjgxvCc",
  "key27": "5NWXnGqNTG7qwqVJnHwQXXrNkv4hH6zcC5DddnwmsieKEXc27PbsPXUH6m8oAGdCK1p1vTFrSu9NoMh8vXbpUozh",
  "key28": "5BBs6jaCweLv1KYn9js8VcT9JyM3z9UFZxPDupuXW7WHkVKiYzBKvZM6GLijqvUhroSQ57CHRqj7VExVVzCv7yCs"
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
