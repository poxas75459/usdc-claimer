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
    "4GKfscvwbfLqZQqEEfZ29o5LXyDSJnZa3LrnRMafUhisCKAskMYuuSHW28Rzd84KEqD3xk9wTKa8dUXBqGvA9yu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HC1qMu3ZUBSKcsV6hbroJQsUrCETLdDeepMps8VeudMsXH1Jde6hdeypfEtuVTWvcDwzuGACFh78WtQtn22tmH",
  "key1": "4JR32HUHEbRVA9qGeWb3bsRspmNBCxukSQx6qgAVPmXuXGYjBqFKH9pW3yNMihK45G4jMVUZveMB6u7obqzYfbLo",
  "key2": "4byJgy6tosq3tEkohd4ccDNwLhMDWCAiJ8aH57PD8WNiDoPtNDKYxwo726CcVJQ5bCzzJNpsqDUYG5pkBZhuejvP",
  "key3": "3jPkgZQxQjvsyAZYstLtzgwahYbQLM5TTNNhKLFnA8KsJaSsnKUG19QYAWgVs82jrfsLf6rJ2vtNoLojhuSuwdCH",
  "key4": "5CfTVheGVvxGy2JMAQJotdbAwCi62CnAU3co6bUd3NBE4CFUsW3mvFtvAaa9jDptGChXe36A41NHcV6x7QAHViEX",
  "key5": "2GV4ZB4FhDdU18uaFezEABQWbuQGUaq2CqHj6jnyw3exmvwovJ65H3dEpJkL9TwthVjmy8W889yttwQxrWT3UAgC",
  "key6": "4RZMVEcseFvfNWzXLcYiwAGcwJkVhWUQizLqqa9zKevcKh2iykLDTiQHKA6fJqC5VfDezzeQ8tXEBR3NcA77PrDn",
  "key7": "eut7o4kGVDkQX58drqz4z6bM7CZwhwezjurnv7ZXFzi2AMfGxFY3cH2M7kFT2Ao8FDH8Aro4BLRdFZJY13Z8rJN",
  "key8": "5RJ7tKqrcMAfc5T7yg8ixdgJXpkWQy4Xqe8c38UfyXtYC8vYowf4caY13JNkf3LE6WB2KGGMKx2nYwCm9VsVb8qs",
  "key9": "5dX3FSvE7xrNTwk2xaFzcbQB5pUmHkfgdAhtNytxizpq6g29Fp3m1iuxuehKMnF5moeaj2tzc3m943xTxn3twNwz",
  "key10": "26Xv5tS7PaxnTWb8yUnuLe7q36R72gZ5JxhwLMRx6FycPvksPdLCd7cx1zbnxU6b9irbwDrZht1BpP6sRMQbqou7",
  "key11": "ErQuEW8yMHqA9DA6QsnZgbTXeCKmUoAYpkjuJiNMUv2ukcRfYEqSnnoP8mH91cqR43xTXoXHCfnU7HZPvo76WGs",
  "key12": "4bkiGL6efVwwsjfPhNrTTiQ2nS5CAwJfpDwMnch6PzLfYX9L12g2Wyenc2jW5FhBUZ8M2tqVEw6g4AT74LE5vp2v",
  "key13": "4j5c63dK9Bi9nduQNKy5WytXLsZYWdWnQXgz72sXbqjy78GsHegQnZQKieZxGVPNh16T6FggbyoYEZuK8LdhXJnV",
  "key14": "4s9rzGLiHbGudx2booYN6MmsBXKohjep9nbQBtvExJv1Q88hktfmZqQeCUEM6maxxroG1Hq4iQAaTKcEha4DnRpb",
  "key15": "5rnG4PKkqPxqNGMhm5PB8pnbN9J1a8g3mBe42vroXjabYnTpfCMTH1oVnQYCS3Wy1XvmsN6FtezTUKyRG7e78FSB",
  "key16": "5R2pdo8bFZQLwEvb7QTWts7AikUYPP89baL8CEavvbfrcqAm99mBGy26wdkSKLiknzDGbw9CK8i9wPrvTJQ49gTb",
  "key17": "5vFV6iKzBaZSDrsKBteiXFbNCBQn5oTcXFUoVcjRKEPeGKRbXZoAtcRrHHEgNJC2L7gYPyxsA4ixKGWovMPVoryR",
  "key18": "2i1XYT6SrTEg8kBW918mw8r57cHg6q71918GWFh3oMZ1cAZx58tqvVCX2BD6Yc1WZeg5zztk58qWdhWW4DgiU2kp",
  "key19": "4vNaiN79xGAGF1tuRNBScL8zzFSNcqujhZxzExpVNY3bBE3WScTd3WtPyJY1713UQZTNK2c5rqpDb9PaxjoAMGrC",
  "key20": "3bFcE4m4kioFEpgScRmNEyj9L7mH5Eecn2YiYsGnxhph1wFQnbh3xwUuSKm1PQfeiu5tCSjaGXiL68use1qkQNsh",
  "key21": "N3omLxBDnjQJiKurkAsV3aJoVm8F7ux6yBnPLsxrFcWe8cvjTh5u4TpmpUFExtWqsms557Hs3vkQdZ9EhmgpEXv",
  "key22": "5t23Q9AhaXuZeZB9eeESfiEvNZQ5xDXmVWK1vgNcScJCwucpWWgE21NbejsQdF2NviUCNtn7Fjos5oj3rkgwLtVt",
  "key23": "23oF6TcXcX8xHkkMZhB7cLftsH6TL7eDPDeuATBQr6vfkpPCr3Cy9cn3AvCHMZpy4iCMz2fNicXnJiKKEYyTi8Ce",
  "key24": "3HpBtHUCe3By5tkgZ7Eqxs7GXMHcEs6VoWDQYuGT6ijsdwa8kbmUYjQjE89jdgbw6beu8M9YxhDKae8ctp8qPD8G",
  "key25": "3dUZMAviDD8Jer11RyX3oSUBHJnZQcr2uqHWPRfxMxqaATJ48ZKinY7TwQWfmbj6CUH5MonL9Y6EUtZ6UroeC9Up",
  "key26": "2R8rNmxTnAQXqqwqUohUbUFmcWUQdxjErhtu5TEfptBNCopHXWHkhr1cTkrouGiMVTuT5sZTohtaCutTwFNqBFaE",
  "key27": "5KycxQZp7atAeWdkZLaiUxcZpU9kb2tkjKQh5RP6JCB4LVpzU1bVSMPETyoAiVFcDTehWoTEqUJYJSTjazdK3t23",
  "key28": "4XpBuJhn9fq8UKY1h5UXR3ygNgoK3P8sF1LhHtWHkDtaPwZsmqHEwWYRjQtiJ7bgb5t9xtD3uPwXkggGKo3Djmiz",
  "key29": "nbgLV39PUZDjEA5mM9LENz5GVA2nq8eV2yFF5dX4d1LTz626YHg6qBFzbqo4SG1L5znkdFKqMdqAGodMqE4Yn1H"
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
