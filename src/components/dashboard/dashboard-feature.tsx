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
    "5gA8K8sUpDYz6pLTpYkzuLXjoUcHky7f1yBqswFGeCRCNSc1Md6wt6B2qbxRToxAKifXKey9EFZ3et8cEJz5zGXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cenECDa8ZPpoyFH57rsi28ekGKAqzuDezBfZ3a8iRCBk5wGwFj3iQfU6qfkoNMqvMTCfv1FUGEg2RA45xe6GPzG",
  "key1": "5bjFiTfwpy1nDT3xqKcS5TjLpghDwQ2b7UWTe7DJd2nviGhRrza9WyqbG67gKge9iBsjPN1NgYE1bMrJ1pVGQEuA",
  "key2": "22VQzqaUodMc1ndh3KYZpn4q4fbG9DbtFV7SJynxVZiP9hZUKGv3yAYQK5TvFH2F9Hr6SFddDWepM2GaHrfkDrxX",
  "key3": "4vEktxjvFAcPLHCSSvYEGPccmeTodvQCwCs8SVBsL4Pqtufu2p8CHXZQwPb95Fq8ZAUhHBYpdQdeCjRuBQiMv8Ke",
  "key4": "WnRVYkrohMDJoPoUj2SZxysPK5qwUUwaJvyt41Hv8VXAAYGXNSz5aspVrv45FudQGkARoszYPsRwJQLZ3n7c1Eq",
  "key5": "66zqJaurWNdfUqHasazSS4HV2RmGYEK2jyoC3EZ4x1ykgVYg7oiBTqgmefx6onocKatJNCWBuxgnQqYPVHifpPJh",
  "key6": "5rsNebqJNLbcqU7qkCofy6T84a16otYVWwcdQtfubaEJHKQWesxjwQ8HhbxzMYJ4BJPwNm3TyxqcKx8YgGKgtnBZ",
  "key7": "CCJRoTeSBmNuGghrAPjbhbJ8Tvox6kPiDiipQrG61CnMkPCWiSF1gck8iHyK31qdJtyc9roC1QtbErHMEoeM2GD",
  "key8": "4QnU54CTUjWpzwmPxF5w4N7kWhRnjqGWkHehdFJTAtWkVhzskGPA1WyVs9fbpEWPtYnb5L8p8bJ8ZF5KpEZ2kcC1",
  "key9": "3QBieBTdzD7nkik1Pf493Y5ThpvKTgka9ZmY1KDoNZRovpNjAeJ56wuwyTg6LddbK4nNnofJr8bPMdwoQrfPzqzW",
  "key10": "2WDVutqnGyPm7hZi3rEH6ND6p7uEZkTUWRTTT917nRPoAe713Wz5S8LXQm16CMGLVfsxkzbkEM6xLdX1wqVxYRas",
  "key11": "3BmipRRYCDSmnmUemwsG7hK5qvCgDWwMDLxpFJGktEKqaqcrfKMSwM672stc4uALib533C6hEj6s5naY7S1hG718",
  "key12": "4UYNCW8yB8Bp5x4RkzZVf2Qswsi1nR1vEAHv262E8ixKPguzNY9CwXpw9scBuG2pVJSPsqWhScUTLCHYzLgCTMXG",
  "key13": "2c36FvivQ2pV5GiLFhTobDb37HmZqD6it9qihg6Hg2d4yWSLfxqWu4Mq7Biq42V7t3XN5pdkjNt1deWKjY1EyBPm",
  "key14": "33gRyop76G3wCLrcr1WjrHWp2en5XfZxHJKTz9aZsFnKb98gdXtKrJydvVUTPi4EjjTJg3rQWuYNwEneierh7tHK",
  "key15": "5tMFRet5zK2eg2YiE5KXf4qB1p35CD5tPXyKrj2915u75doakE76G993Yh1DyFhVi56menU6c98enzJKwPmdRP92",
  "key16": "xfA9zHKwaX918FJFqRacEPratEDSbi4C4pSCCFUwr9HemERmc3w6fgQr2fSpBn1SK497B6W4TShM7rLGjP6qsUr",
  "key17": "2P94GkgK9ZS7t3Viem1fd4DYvEgF2oG6tepfS3uARYusEcQYqbKFiEb1suT8i7xXAwMAFiKLu5yKASHPk5VFgs1u",
  "key18": "65d3gfbbuedKMqV7inpHKrD287y92siucaZE63qcdY8RU3cZDphrSjkLq7iAxptR2NM6HmcyZghRFDyoQwokc3F8",
  "key19": "5SJ5Uyra3MGcnEjH2ik65C8iybTbozts8Fd2mgdpHvz69co3xMnAMrTifGoqjqo86qfdhc2pLb1immFLqRKrKywG",
  "key20": "4mQ1fef6w6fqDumhTB7zJoL363SgLTHM6r7e4KBCVhXPm1SqqCuG3XVqbXJqNuJNoyHxrDxXhPyhyuJFgMLyuqt5",
  "key21": "4984QjrBFuy9Fz4MBynbwLFgGMGaV8G7ijDbKR1ZduXaQMnxu3Nk89mu3dtY3t3qqwnuphFG5c3cpUPvhpFNn8kv",
  "key22": "4kPkQwCNLgc9HdzmP2jpCcCyYPGngoDPKPBxYY6JP9kyCAZ8ptDPdMWNYtuqE9Tsofg6KX5rKtgH1BeAGa3MjEw5",
  "key23": "3rr7YS1Q731Yu551Kr8DweqrgWf2gwmrSRncJx1eKy5iC448FN5F8UCbWZCMMmFoz8GG21ZHpYFJhxdVxxKaQCUU",
  "key24": "5fpeaaar6guZs91ym4kkV3PpBdUMy2UqNSkXDcbEFYZK387ETFrsoj1Z53LTd94ERBQtBYydZHRhfyAjFHAgzE3M",
  "key25": "2TGFQ86FMHytpzUKbWFkoLxKs4Shc7d5cVxUMGY1J1eYC4UknzMRXaGTkqZ4u1411HwQsckoZC4Mp2EV93c2AZ8a"
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
