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
    "64mLNGsp2nwKYeBpyGszM6anpJCZ1KEnG9UkRnZtLoK4GRgwRKicXhhkKy47L7mzShDhjovJFpox8dbHFpua9oxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GG8Kg84YWmsTPQ9YnSm52PCQdVuoUwsNExTiaaUD5wUTCVYZi15RoLt12kNjQqX7PrqF384oivejqCMTDW76Ht",
  "key1": "3wEKSiv7LjvabomULTE5CXqmyPqbPL1raESK5eJwvixKK8YQHfnMJQPogoWrRvju43Q5J9Nye5ydtFFqzSRnPESN",
  "key2": "4CdUMEMrrshED8ATjQ494Tc6vjrCLJAay9bP1rYGKVoQBoJjqdSrD2NpHJkNkJKmavYL8izfH7vu16BVFvKcGjLS",
  "key3": "3dsSVVxnqf8TevJwUUpeV1zjhxLbXYNRTeAVQhvmstKCiF8b9YJKLVE9WArTMtNMAHmMPWK6pdDSb97ny69EQQCt",
  "key4": "5kMrNvxDakrYQXy6svTX5Nt8NUnzyxkzXUx6qmioiLRvKcL92NBWYJyCQQb1WPj9D7HYzwZ6g1ApXHFEyzu3qe67",
  "key5": "5csY8wjatAoJPa7oY2CBewyNqeNjPn9tvM3eq1fvZTCWEZ3u8edjALNWACo1yeuLXt3utYgm8oBxKAKoJM4N97Ev",
  "key6": "3wwhXYw6So8yQDVsaPinbxhLLH7TZhrLbKCtrcak1ykZEepzRNLECggy2XZW8MSfr6mg1XMJfBwm9BmjaxzB5qsH",
  "key7": "4BfR9SFPAhA6xt2TchQfYojr1gWqquJtzW3hSsZLsaJBnEPGq84jeqG4gyc42weVURs6XexNjuVL5yRdEdyVzmJF",
  "key8": "2oYNtYYWtiJgyxejYcsbiyPohtRw31SGtBrW5qPDHsBNZcDNMBX3QiPCJMEsavHKmHvtHuxnvayZ6g6UpZVvtMqH",
  "key9": "5jjrfUAsLPA6Zrvq6SWmXVjMv9bPiqCNLvSVYoKThQW5oFnrJQiMshbrzc4KDzCpWtW92NzgMfKDEpSfJUB75x8y",
  "key10": "3hoB6ZGgXxCa1QMN7Y1BAoQqeRNMtHpVYmU7Y9AVkjYKJp9dqHCpUffa7omd596agVGdxgCqfqUZxQPSAiydxA8A",
  "key11": "31LJtywDeRXt6FNdHsHgk8TVs6iZPKYwrCxJ8StruSdJ8cwZQKU2JNKJPgTvZWH4zN1oFuqifHd8tN4y4BKhpysz",
  "key12": "5bJXj7pi5xLMeNChZeXwMKreSFA2u3d3ureCqks3itbGjeA4f65H47inHCRDEQ9sFmqS7YaMU3CxgGdo13YZmb9o",
  "key13": "349arTyu8P4E3hhvMKZ2jMUGB8WVb36THkQQeHsWFoDUURq61KXg2tuBZXoHxjXTz4rGpXWDYDpoVkFTrdbzCt3L",
  "key14": "5Wvn2dqUHqSyuns3yapndw9k9rLwW3Vh8om214MyMrniJeJ1LMBNbdnEWo7b1mfmXhGFuZzYEMscmkgF4dLAEFm4",
  "key15": "2XUf3KwNe5pesKA5q7h91Ts2yMqGJ9iUyWLoW2kQjTEQ8ykwSQ1kZKGBvfppmyXL1XEoLxw6UqLxEfggoB19Fq8U",
  "key16": "2yQsQeN68E7uvyTGiAah4wNcskbzR6AAwv5QL8co1R18MUXXvb48bvkdcasTLjQVTHUkhA697RSckGPEN7JMjYcQ",
  "key17": "w42B9meYjknWdgDN8wFDRRYT1HMoqtjNdJxbtf4yniAkdSmvgnVSfypYEJw65son5xRsA1Pq1qrzJXBJxAAN2hR",
  "key18": "2ekqoGfbc2TfgqqktTvcp26JsDmp2x7p3QS8yv4cnmPzhdPt4kyA5QJEqA8Kfz2LnhftdrChM5dTCf1pPiEG5oEU",
  "key19": "22bHoAYAm6Bpjv686xK6oAMfxf8YkWLpTgLyrthw9x8dQK6kdaF24R8FcRrySzcvU8nMgyTmWnvy33BUuRrY81MD",
  "key20": "46jLfryAbUdW31wsCkDYW6suc3LbXa6tcCEu8cpYKSxs7i9DkHYMSK3PRrjoBMjZgtpZ7rsg9QFjJ8z4Ex5i8brQ",
  "key21": "5c2qTE85yQw4D68mSike77C1P6ii51rMZm4xsSNydU52iLmPLErQoCKAwf6Ro1ucqMj1kLFieBSDkB1JmrrtgJ1L",
  "key22": "5CX7B8oS9B2HhdGd9pxLcNnsjEXZzMxm7avURpUWbvx3mR4XJFEg215uAHe22aQ8r2k5x7mgxsQ4hUFVX7jXuA3n",
  "key23": "4acSw3PaQBpWpgEq5RP4xaVBQzuA5RbPtXiJnN3X3wrgjj2gFrTukVLpYofDe1xve6DQxshXSimuKbA5JmxmtQJs",
  "key24": "5MQ28nvhPD8bw8ZY2MY9ek35TuyAxaxN5cvfw1PxMBkxcrmAVLfbL3rGFK86iASfc97hXo6XXbetgevrHuxRHd5c",
  "key25": "2KcBSPMtjZHJZvscWtKTgbDPt5dwuVfehsk7m2HrbQYBffUwWYqpH3HcuChpsT5V4zLs8EpUgTKFFegaGmxGHkYp",
  "key26": "5bkzka1cp4UispHQVvpjqGfS4MpZdF8dNnPRzpD23uwqnv8tr5amh6MEDJh8zJATy5zSdFL8Kn8kdFgkV7UiZ5iN",
  "key27": "3Nnf7J1qa8EMKEymkJ95QwEDvU8jPaCS1RiHX4sn5VdJtEuuHbciafzbEgP4KUzjWpxQPWUEMCLSKx9mEn4wCJn",
  "key28": "4DqQaMBojMG9YLqj5LUzHrjHfwGqQaN2ghJyS8FG885Ehj7WsVvTFvzAi2ZzL6kjoRX1AsMij4uTxhqGUP2X8VXj",
  "key29": "46MqJjmeiHmDafmRrHkw6obkaXWeUkCWsL4DsRNZsCLKJGux5k6aRBzE2pM4udRJvT8LRd6hsQvAAsCnKTDKRWZE"
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
