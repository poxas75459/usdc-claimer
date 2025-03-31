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
    "5TE3T4Q2iTSo9oRCNJLtdDxrYtDCemcyYhsdjorXQz3L5vF4b8TcAE7ygsASBahxztCNfMeQjiBiUSna8K311Mid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FACD92HbA5z4A9uALBtzYzLTQhwfUcnnGEZwTPjLxkz4pWEz11cHTcdbbshZiDUpAcPcvajLBn5WqQKEtyVLcg5",
  "key1": "2yWCqFgi8NkjDf3DpkQrSuuzLFNS9xmit9VEzppdwaCdtGYwi8zu5nCSjtWrXd9C3Xh3maySPwgW4p58T6PERHye",
  "key2": "4nFfeYBcBxt4xtofFwJPWodxJy88o5FYt1GkpKfDXiJaFxPxGqbEUrTbpu3hcriVZDzSUZ7dkwRLkRejWjdwxn6F",
  "key3": "4e1fi922dsqFv8LnQWwZTMaNGWuCp2DXLQaMK97NzFgQJuJPG1ougZVfmHQRvNuWTjWgz3ayTy3o9NyJcG5RAjLb",
  "key4": "q1jEgCxNzW3opUE5swj2tqVgvqBt9KnVMH4rP8oc7b7eKgKS8jbeztrBMwjcUQWVPNfuRLEmLMzWLoSpPaBBdPk",
  "key5": "3rjLYnSa978rqGfGu7z39hUVeR8D7TmqRvM86BKYxmMbQeHrDry6qQ5mCi99MYMw8pLePFmjcQtVckPAZa5o7FkF",
  "key6": "tnAnxhhHJKsbog6pDh3snskuBGo69M2ry5oFS4f3Mz7czJq8E75LebunZBh6fKEMPinSQQ1ZTnqM8DNRHdgmvfL",
  "key7": "35Tj7Lnf2y8Wxk3vcLtCWivScRq7ELpSGPneKmjSmvymebAkQ8WBojskcxLiSu5CHvzgcUfbDnaZ8h17FwPVfWzk",
  "key8": "63P2rDcRNsVeSCTSMXBBfnTUWki9AkQ3R9mUARbsGWCNkiJ3WP2pV62RPMd86w9dC7cmVF9dqPHSzraNsxdVdC9W",
  "key9": "nMBFieex3xrU5wmVqprQUHWTJjV1mP35Vrb1HYyon4y9urNhtQRzdgEbQUnNk8uBLMEfsqcRXXYuhb7xT14teSR",
  "key10": "3hPsnCE2cmXMHJGoAuxXeG97MQqw8aNoo4cpoHV8z93qCVscjrXAkwgUbNNrXKvBKXR7Uy1VsQamdjBktXKi1ku3",
  "key11": "4uGTRyWUjEQCpDpjvXEisFnAMqYAph4Q76JXjHubkNYB41ygsN7gjYpij2qN5nppfB1G3t2w4WwAeqWm8Rz7Lddo",
  "key12": "46mzSAvBpsW5BG29mKETC62duC3ZKvvYuE4EbjDVQyUrxfkLZdZh8ZiTbSDn2mb7TXrmL5n1XtaSUdxvqWV95AqR",
  "key13": "65oN56do6gLdKua2rVtqC8szbbRZ5MPVX64LRqAMcXt6cCicnhdTVimBPE7TgvfYLcUKLmxt4WTubZ6wQ3y6VesK",
  "key14": "5R6Mq1foc6D8aDRZdnZWMkaQiGzmzAJLjEPhxSoCiMW9k6rF3GpowKHJD8FptohaZ88b5TdHhev4e5aLRaY1Qx6E",
  "key15": "5mD36GqYSQezfFz8sTryzK5ukeUwTwaKR88KJazjjCzwbNr8CXMoxo8dXcnK5neHoh3pA6kuSDyk8XGjGjGe5waF",
  "key16": "428Y3fHj12YGL9h8L7oJrKoeWfwFhCiXJuKnhJrWdnZbQEhZ92voDqQ8QKx5PFRpwDNbT9P8DYJxeTZJbKbyVeFQ",
  "key17": "4fFwFFWea6w86Cnth3yxdQPDvxnquLMCrufBvVeC1e67d1CkqJkaDTfWQguXw69r9EseSWArJo7cUBCGWLwDRvYe",
  "key18": "5uQVW5BYY4ANVb8crnKUZbXZXCpURRhHhuKcZMtM9jnDr9Jxye9esh4b1FSrVZQu4bGbcwJAQpDDUDXz1JdBkDwC",
  "key19": "4FVCdWNjb5MmZVDGVBW4v5WmPb11rBB2eW1HwUPn4DL8Yovg81ZGh9rtwbkendxAvaMuKRic54rXJ3eQPZp344kb",
  "key20": "3R6rVRQabD6NmipTVmAkhw7auorV3CKXAPfX1ZHHH2xB7VmJy6EiTKygst8wDJ3o5hmQYoeqU9mxc16WGivpJuU2",
  "key21": "3TATmgGGufbRbpTJRn7oYJ88JvoeXDArvqk9NShPwePaB3jSgHCooqUAKwqNaqNdp8ZwSen9Su4ffqLUDMgebFS4",
  "key22": "4nFyY5qMeeA8btm3CHWrQoULDUr8mt3K98RUuxZHbyJQFUsDWTP67V2xGoseov12KR9eLJbrNARDPzpDWhQd2ivh",
  "key23": "51J8F4C3e6cX2CtSjXLgoDf5FuvUFVEJBUq6Sj5nxoCxHNQttUYhWPwHKiNMZ8CuxJTkDiYxCbrRpiLazedcorct",
  "key24": "5Xx8djnnjKdLDhtc7fUUoUsFkWxF6FnpFRiGiBnekmiLDNCePKf2o6T6aihvHbfMPHbzGGW9vdy5po7ivPbJJHAx",
  "key25": "4VsEuspziwgNx3tgLHngnyeFBzz6az4Lw2QVucDGEq9rmLyVdmgXctcUKpGukJGDDLkrzMq8QJKaD57GDjpT5NCZ",
  "key26": "4diVBm9ryFUPDj3xmVC3n1oJvvBb9d4MQBP15tuBEWeVvcXEgvSn1ysQxmQkZfUP8eAyAEETg9uMoQfSq6o6QiDH",
  "key27": "4132m8ASzQKXzGKegdtWi1jEJPcpuqiEdNy1opbHuhRfdmEkxc7CmvvpK3YgyqCsKFSFqS1YALcxzm2HiU5DgwSW",
  "key28": "SNMibuL8kgfLwjbZ767DrY1jsrzUZ2X61nhLuYxzYjc8Q11ZzSw35SVBgfuycFvFC7LyZUt5HtWW8EAZdzbK6S9"
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
