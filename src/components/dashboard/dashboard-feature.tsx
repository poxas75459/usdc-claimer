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
    "3zDDXV5uJrJppVe7nRMAr2N52eFCp1PNhBVztKtPyrJ8wMNof7mZLCr3oMSgFRSusEEnaFuwcy7y4RfPtJXKCM3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DNTc4smRFxRv7Yxhk5bmGXpqH6cv3KqZAVhUWWrHN3gHRrsosFVHsNE3Jq1GeeRFf9WrhUU3R9e3X62PstTXgg",
  "key1": "5asqCQrWoLa7byS2KWHHiKAB8CZAKfsc8gTCsPmYa1zVi7cS43cWuBLhcyKRnvi8Yx4rf11Rq82hrPEGF8fW7cVK",
  "key2": "31Fu4CJMsY3SAveGXEqajsQvxUPeN5YfHKaaVw6VNdF19ZKm3R1BcBV8vtXwyiRSsHvcmsfRzbj42GE2QqRY1a4b",
  "key3": "La5vqQpNVbBDpELDAadDT3dnFBD9TTuwhfiioMK5bRhXXRyboGzQBc8kdt5UkwXv43j2ugWSVedz3KyQ6ci99AY",
  "key4": "4Sz8XbSteK5aTgLqcxfyaarUaQyBpcj3hsGe9Kw578rkt1GtXXMnLuoEoMVahU6zZQq999oAhD2mDw2Jg5zL25SS",
  "key5": "4TiGx9owWjF1jsY1j4HHS5qhpU1EJPSX5WDemyQRn2jqWDcwQHjZ5t4nKb6fyJt45HhUc3Aedz4tmgF8dd7ietHm",
  "key6": "AEnCPKEnX6UUkGx8itMNmnisA5fCGaGtpy6wUS7s9tw8YdG9FxX691cYb7m1LBNivNs5BuZTHaxwjjSj3BMiLUm",
  "key7": "XijRKqxtpWSd6dsLXHmgHPQeq4GWFKQc8nVt4L2kzoUgJrmftEGAcnLqpsHEBWPemsEM627dWT9J95UwQL52dcF",
  "key8": "3CuLkj1YnJBgDZMW7qxHQyuorM8EEy7BbLSr4hEKVx59AnRBNLgjLHnE1obfivaX8eWKoWyks3a8BYNhkN9wskxv",
  "key9": "bhKpDuPUEeLAVbJbSB3r2iKuhiN7Y3ATbztvAPH8Bw6wYU3BEbeweJvCAhW2JgMGLnuRt64nHesxxNn5JQE3mwS",
  "key10": "55tgHk1hdA7LYxZuNTTwMEPFe8Zwc411VrG2Yo7XvxDxWy1V49X2WtUkuRH3qH3CKndpKjYoJ8ULQmbwwNWRkSoH",
  "key11": "2gC5D1SEDG1ukQhAp7qmz4BKojErpQwmvdnyJX8WA5wDw4McPMgCGkFsTxHYH9sw3yW9ZF3bcD58FPWenfcERfwk",
  "key12": "3c5SuchRGk9GizBuDQemHGRrUio87XPpttEJC4utdMRqxWEXE4KLs6C2jq2SgmxEjMePRimh5ctvzyEUf8vTZbRb",
  "key13": "4hHUV9X5mvC3Av2szCngixHUfH58bJ3N8nJ8SJWpxjCdRW1SNs3ckFQ9SxjWruKM5K1Ahv2y9i5qPaVT6YsRpL1v",
  "key14": "XmqeEoep3agsJsbZhCy99M7NbXWpDW3LMpyJ1cSnHP5gS39gNAFGs2hPcYMnvW4sMynSzrsG5K3G4oagtc1S8go",
  "key15": "nvRpMQbN7xh2B7w78BPdCPqScJsSdoRBci7GqLRrC9VjQyEnL64wxeqN3w7dBBAL54xcWPjSLBazKvhYhjFbWaP",
  "key16": "495Z8vauvteaEzwfY8QmVzCuGA9A4C5B5kC7bbR5RKaJfGgWEubZwt4LPbkLe8VSX3ioZzwBidPfx3v912CSQFK3",
  "key17": "2cq3uNumX5sVVeo5R8kRhLzZ8cgL9Ui7jh9z2G8jA2jbvyNNmLwxff6s21ZLnFiNTiKacdPYNFaAPR69UQzvemJu",
  "key18": "4KEdAStS9aefNADvzh7WWbHqD8vfkYa3TgbXR8JSuRczV4iGggotXyxgFz3wYPrBtMJqjRcRPMQpaEHwy5MGgegr",
  "key19": "3Pr5EHJ2nTgoBKtSZ2efLTjPUnKKdTWybKfUUiM4uBsQFsYa2Ws5p3hkfZxuoS9kAFKecLA5rR9B3DVFabmZJzYP",
  "key20": "3b5LYMbWJZtL8qYLR7gFgVMiTxyznppP1GjKYkmTcHQnzTK5kwxBbBfxsM3eR52A6XuctT7j4ftorfAvumcUkqRF",
  "key21": "2igX9q8YdCJB1P87EJgm77bpjki2myDHUfUxnxqsP39ouWGk91e2bywsfX7eYav31RadNLHUaKtxAxAgdP41xZw4",
  "key22": "62JJKXkK1DZW9SG2Kfas9cFDUE8F6pdx7mohrR6Rw7xBQuofey3tPHHFKnGyiCsZhT47Lc7ckQk79RBNUrLFNCPf",
  "key23": "2nkqfuoEgSsEMwVxRU9m2ybnt6pT1kc6iuCGNuM6EpFZD3BF8W2tsZ1xGXpsvWh1FzWiAxycsiB2kKZ1wRzL734",
  "key24": "547xryUtt636Wxd9TsJG3Egfo3mdHybr2dc4qHMsysPn6n3tcg2NV1Amstw5Wp3LjYkECudfprfUHy2m1S4RUtjZ",
  "key25": "4Xnj36AGBHbwDrHXkhQJqPT7XWK844RWgnourM5LoJuAc26hSq3QhAaMWPkur5mBgFC165shUMW8voNX6hgARmR1",
  "key26": "2mjAQXBjNxqPWuXyQBqFejmZqVr9utdmgdd6weVTEpcDkvjuKnU1ENpFm6NEoLMET1DDkDvDr2Fd2pti25Py2QQo",
  "key27": "5hw4xDJH7hDxfmzr17u8PABPF87rUoSRmhENTDPbaBLxXE4ow9BFDu24yQFXe6ogqLbZUm37hfUJLuRSHQ8nTuH2",
  "key28": "5rSFbFtQQVrS8wHuci3Lvypoq4t8c3uVoDqLw4swmpJ2PQ6DoyWTjbaWi4eJnKK4ndi6dMtiDdaEjTqvaZjpkzVd",
  "key29": "KPfDnHfMbgAHXDm8Kija9fq5kwfnJtSTqa9suK3qfEmFwm1YodDLpRH4ZjCJ5Difc2ZF8K8bt1gUtBphxpkBvcQ",
  "key30": "4dTcJ3ymwjUGpWLmp4v8zEh4euqDyttQJbLeuZyxb8WfLGerW9zAnZHjRycgo3xeAEhuMRcwXyT593mxBdsyzSf9",
  "key31": "3XND3aHkQwKBtZBL5jiryAamcTxB9f875oCahsqpuW8CPuNdWw5nQbsNgzgJJ8PLjPkPaMDCcxdxfU9a5mE4kth7"
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
