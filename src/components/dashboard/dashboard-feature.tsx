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
    "42iViT1wmvEoJ6HR3xw4tfDyqCzHUMi1dt8pm4m6dhyZkPpo9jeXCub4ehRa9U8eq7nbkuK2WdXzdKG5yzMK3edD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFxBBquA6Dk7teBQzkwqFN3Bvw9kMEdQXcy44qnSqgezPs2fXiF1PMT2TWGgc2cfYJYx45TVJHGowzvjknh2R8S",
  "key1": "66mLiLvkqUGa1tGxJTkJaAc5F5fdn4JWPPKYN8PWDB14PxXsdN34t6k4mzKnMaVG6KUEW44tqYr97MNQWBFL63DE",
  "key2": "65MNCe8iRf9r4L94GLTN5sENxuijLD4F7yWaTJ6DbrwnwDM8U97wBcJZ6raTVxHNzakuEXkHNiPe6vmygXSLKy3y",
  "key3": "3srLZCwjFYbhV41G91VDkR5Vki5K37WG4DfXaeH2b4v2jq2HsDVDzNCFiHZnN7KqXTjAMt5srVsfW6VbXgszPGw6",
  "key4": "61Dh1oTwvtYLHcyYXGXEESba27XRFm4dMLkibtgTShD5SHQaBJEQqZfPG9QAGsEoQwNnkRzPnEaUAgaXb82jnufB",
  "key5": "PTFKt63CDoujkynUfgXK9M9Wi1Jsmid42m2o1rLHTGCAKHnrkWmbcyx3hmmaqcaH4oNbV4jmBJgJQBhJTRiFwPG",
  "key6": "29ydYANcRwT6Zecbvr3zKuo9ed5LBRA1wCReudK7A5oknu3Uk9mBDjisnZP5ZeEpLkhLAg4rmPe29GG9V1yJYCPi",
  "key7": "4gDbJbGa6e51T9qAoNdxCW11gnCKqW68YVHu94J7p4DrXtLx3zsUkfS8vJfboyN4vsoex2TfDgeVVZQufW4Z2JDL",
  "key8": "5chR15q5iFwGvjApuaTbucwgCRQJEUbUqpfitqcAs4E2UvcS6scdssorhwewRmPNMwoyM3ix6GC2YJywnmTUwS9c",
  "key9": "5GgxN1MEinkPnmLDnw4wdzber4e1J4qWzwAvrVqgtsK2W7CB3Qa3PfDuLxrzTezBai3tDho456RCSxkdRPLshzMy",
  "key10": "3qHR7zFnYAhHzEBMPWCwzNBgevrjCd6nu8PzJpmEmYzHUY3FzitCmXUjUEMXttDENu8oMSC2KRoiFpyAktad5P4x",
  "key11": "3CxBPdaY8gdskd9NfNwboS61qdXjYjz83d8Xy3u2snhujwWfnxBahzjnYcPj9Dago64xGCJz2iAX9Lqfx3pAK95m",
  "key12": "4kzVdr47gpvk25ou4mS3QCtiz2kJQAM1KRHTDKNmQrFohJzPkx9PPRatnH69kCSYUvspEq96VJGTbyuQdvvzF9U8",
  "key13": "4dp2qFC5coCcsgdViKKHBab59X7uWbmcZwZuYrVdPexoYpXWkT12XcHc6uHguE4QBD2rMxEJkbJjF1kc3eEfSMj",
  "key14": "2qG1AGTzY6rgqbCN9CDUsGzsjQMWvaUHo3skBidBmfD3kfSZn1MpJZwutXZTJM1BUYu1yLPX1grkUf43ZbUKfDP7",
  "key15": "3b226GaTnZypYH2GQQxrSs3Fao1uyZP1tiQinQuZ9rhri8fxWC7ho6YKNcsqQMEEcgPfRnezpGozBUPjPRhmNHdm",
  "key16": "5qcNjw3nfS7nXvvkbtLHUSMiTh3QgVDHiJ4ZpGKbSPifn3gGyHYz7MenGS42MX2JvMa4bywrwCVyhWZerpuGT1ve",
  "key17": "dG7L3aMX7b8UjM8fwEFzBQ3kt1McKRLZMHTc2jC9o4g4GPftvszWLZFCXArdc2bJ42fht6KWC9wYYQzVzML71G5",
  "key18": "5k4eCf9ZSHxXSwKVzq86mnFV3UXRkRvBYGK24hpRZKQSKAtsHVVjaoPEuv5FxCna7uc9PSiqUWmujymUQ4HmndX6",
  "key19": "4SBCyrgq1jdJRVBfCDCEsJ6zu2fHsfJagLQk2eV64ygzaq9T2UyGGMvbYmjFS5pEhFzFf8mbgpQmKipENGXKHMW5",
  "key20": "QJdVuavYiSUcfqeNSWWVq8ND9CY2obTnPY26ND9q9C2x7cyjK1ciFe26jifygCidZi3Jiw3LvZtABr4fFKfyNUi",
  "key21": "4QAS92S7ZKzadvZt6USxaX137XVrYgGKtBKBFy2d5YtuX8do49hyuYxFfN71dqNDiKqYsSYg7sWstZtjnC5SY3wH",
  "key22": "4squPHymiNQKGVtJ8mxa2iugNurDFg29wLpHR9R964PAkSttygXEpqaSCRJbEdiThPdArqKnwB4esGwvzdMPbGij",
  "key23": "5VLRpVpqi3KmsLFh63C2bM2msAqpdaJKzvt9xqkXQBJHXyCzrKWWHcBxCEtDKfdR63xERTfjqFLLowhsNdKptnow",
  "key24": "3MHgcHHWuZuf6FpedjFiTYqFZM6721bwfMsNWb3gUanW47w1CmU2eykeCPMRCAXxkrTtEYAt4B2cnMcdEwv7Gvm6",
  "key25": "3GcYxD8TGmSUz1YdQuoMz8rsj4QiyzPHzwAWNviHwcatgEHGhdedaGyST9N34XScmxYGvmCsYeiYGvXPifxz5PNu",
  "key26": "5prXsJ7uMQEM9Z94Zmocc2a5yckt1589EiD5gPzUhdKPaEC1cTePsrUyrhdttkJZT2Be9Ym3sSpRmAm8pfGxqyW3",
  "key27": "5rX6PNsNuaHkPE4RTcFzN4vE4d4SwtXTHHg64C5WpU1db4JjPg8NXZTKRChdqupiQceBTj6WTB4hL9jXSjPrNXaR",
  "key28": "4gVgwB6aiN12jXiZpAfDQNwK5CbSmZbudiWHpvtCYPp6Ki8w56cuzYBCik9AtiCwYzyvh1bj5DmYC6n5KbGw7wjj",
  "key29": "BFeh5t9hkY7UPM3XM6Jw6gb32VeRZyDTidUnpx5HXhAd2xxufvJ5LoHepdd2gmC9R6TNqKhqn7hFfg5U54Z6zQm"
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
