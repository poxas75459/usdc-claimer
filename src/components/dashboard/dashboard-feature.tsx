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
    "5iac3wiVMFseZRQVJncqqoikiJA3tiws3ZrhNnEH5r3Btp4BXcXaVGoxAuYY2416qP63gE25WRVzfrWUKzwHUNHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFYqHHD1gVnCqFvtdaTXcg6WqE24CdwfAe5UeLVBnvWY4LGNDY4D5ceqLQXthNALU7uBZJMf27qJCMCisaeZXRp",
  "key1": "2QRCKkY8Cet7XTLRTBGjWkg6x1Vwn4B2hwsfXfn2sWLuKLvohR8GqvptpCpP72dzMDPfEND4R8rK7ssHYCEkgx5u",
  "key2": "2BHGKKQXcteaxf5Fz5ew52uzSeKdGSGXz4mexysyzsMXC5whsunUr9jnpqhRbuB7oC3qmgxvTuFTmyV5JpuCV2nS",
  "key3": "MpL1U6iVcdFz6ro89MPVgFyPwYPSB1yZwAf5EpXoPDJBvc3VwwMT3c9WT8LbQ8CYg2vVATKx6QEin1EqPVoQKaL",
  "key4": "rGtTQKLL941krWboTRh4Z4gUXBKYeTrwjbKMGpejEApu5uEaBFVCDzFH4Mu3zVFtwx2vLzRTKcUu3RBdhjZDQkg",
  "key5": "3Dgh7wz1GhrvfwpFEBwsZbY8XNpstekiEjba7EyeDo6yYmVpY46DxkRyXaehcntFkMXW53HpD1qZLpsAWxUTzF72",
  "key6": "3ZGJD3JVSym2Jx6LRoD1t7mgTsN34QpCm9GsxFjb4J3FNHU7fgkbUhieNER7zTW2H9U5mgGcFuiNfQTCgRuaTmXN",
  "key7": "2KiiqBErFqu1byeAe4Hx9AgX4HNmYP4QPZB1eXFMV91DFVTw4jzaTTNQT8858kAyZjHNsufPw8RHHYNjdZseq2Bu",
  "key8": "2jD5MAJjXexifnhwg8ztZa18i6aN3QmngzzkVg9S7QJxENVvJ3ShW6u9uSmYyHUanm3emAEjpHV66RQxEyjUWYw9",
  "key9": "2bTTYjU51MmEtph4uAM5DQ58Z9nPnzBzo31Ev2UJMVxuygJxj4vyzUGuCxQ5zYgcJghAYejf42zVWG4JKX4MSGvN",
  "key10": "2JDuc3Zcn3HDwiPyQTK6GgSHDBeM1CKfK1cRX2oY8Jk3wGHAGoozVs3W2j2YeWCTucempE5e4Xtzy6Ac337B3f7z",
  "key11": "v8fkzpKRm5Rbs1YJoC4TNopJW6LnwQkwGH5MiR9bA42oG3J1pqk1p8jqqtVrg6z7NYWQkszjDkv4Ak8xab4LqJ3",
  "key12": "5dSvaCqcUWRrXApHtLNeiAaPN4rZETwd6u3bZpeA9K5gJFrpqWSjvRzbDB9EBh7ESuPkLRPbVrE7Ny8ru3awd31H",
  "key13": "3sVBCmq8dEozRvj19WtnVmK4JZydY9hhMEESi7FgYW71PLc2exah75eU8s5XZUvn4LMkeamcyCuzTdk8HzNbLggX",
  "key14": "4DQhqcXPBdYiSzRYt9HWTk2MwSJAPvo1tLo8PSV3XeFb6dnSsVf8cfPh28RLPoogmW4QAY4JeuVhPyeZJ7y8TUCk",
  "key15": "2xZBtdfuZwHnC5yncT1wkXcz9ghm942UPfKFwGQitJgX4wfpHk7PhdJk59KVztLuqhfVXW4sc4K78rbKqvezsGYS",
  "key16": "3zqLadfoavDzjqHTv4Je8D8L6UZDqTcEgSAw6gVkgTqg7RtrFHub9ReH2TwVzDQqerJ3jkX69hpnZBeU67dhrRU",
  "key17": "3rYMZFwg5RVjWANDkoFMiBFXwd1Z7Re729HBQ7jUPQjzTHRE8bzYviuRyMGfxR3GT9B9Tw4ZRcTDUcHdX1jDuAaq",
  "key18": "PGoKKbc1vBKXujWPfLAyPaqK8tRkKNQmpY7hwBpRj1AYicvyFxK84nCTWcnvUSXtS9CQ4nFcUFkvVJLg97ugXFn",
  "key19": "Y1bg2h9xSFtWPekqB1tpkFQjQrwXs7AjEkjgNvdyzV1hCtgehycfgVV69dohr1KQwkAETa1CQgwxJVTaNzMqN9j",
  "key20": "3s5HhLncXAYLPJRknvVzaqTRZdFRn7YhjJULLbnzcfQAdXLoBUGJ4XzwYwaS2vYBvM3hitEbkzSg6SNkUR7hU2Kp",
  "key21": "23LUB1Y5c21zftb8xHes4Q9ddhMVzQBKecwfNbGvNaKnwrugiQTMz9HgvbnBzmPMt9PT3Kq8ZiFhdrXhkAQCzi7B",
  "key22": "4SDpMNSSThUbj3ow3k5WsXF56rXd8Gp4nxhnt4ydKupnnpEwQvVHSEX4uqStgMNdZkM6FDHLU3EyR7KVfAh56LvG",
  "key23": "4VJoSiq2mwzpRyWzixh1xnsTszen3LykXMFpHG8DAu15VoFF1oDFTyKXD3F1fkBZgyaqSF1oQohCS8F3MX9aCmF2",
  "key24": "7fRYZyCY3N8TgD91SnpQ5Byj2VioR61WiT6i7VJT8eo9mZvTJ7mmzBgXLmeGbK1gx63TQoUttNrsgbH1cLUeyR5",
  "key25": "4y8Jjo1nY9E6C7tC41G7QLUfPxtBL5hP8KWh6BwZTbCoeWQHWghmYq4pmfbJdjDp8aa6R5KrKq5gU6tYMFprZkAd",
  "key26": "5itG9JZJ8hPsi6EYdWAURugA7HevDajziQpfRitxbefwwak4HLApVeTcw3rWi3XiBSWxaDZZnC1i4JaJsAGxjP1G",
  "key27": "fWhGAXndqojyFtLTa8Dkbp35dYmaxPVMavCLhgjNkYv6U8N1H1Lcs19VSvtRmfFaq2oBJSVVwTGFkrQ7a9fCgBo",
  "key28": "3apA68V85Ck8s9KZxSqb8kedAdQyneMFswzFERs973R25ijxRyTEey6Y5ULWffW3tTALyABc4bdz1BHK1RJhYgkT",
  "key29": "668QLpd8Z3HHtyxEsdFCu86MBX8dvfUXwnyAuGjpQcujJNEXn3FEMMDcdxvdco41qfHc82114r7UVt91EukKPzdQ",
  "key30": "KQUTyGCzvn81yZZySzGbqpM8B7amPY5eQSxFFgADMHSrmUCt5knKsoH5uifbvZXeHvWczhuiPu3AoU1x9PCERoR"
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
