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
    "4VL137emsptLRxHzNxNBnRneGYLNfPi36No3LD7H1ZQM6LGTZTyi6XRDBLEX95wypZxLMDxWVd1RY2ZanKicbw65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5xcob1dQC7RFwX9Ccp1znE4X6Uq9GD8wYX7NfxRxzuuk9DMVXNmTNt6PC2NHYprNCiHoqLV45vU2g2LAbvVVVj",
  "key1": "3hpawqXjNhhCz6wEdxwsRHw7xrg7D5PS76uNXToRnJaYBwAMw3h6JYz4QBTeDpCZnEWBtQVudjRsgnTrLPGG3wwk",
  "key2": "36npm7m5nCqDQph9kuEs5hY3bqDws3QadpkeT4gr4zK7VdzKCGFbAvmQ6BqmQ8MwNj6jhYgHE8mppMh8vU1aPkRo",
  "key3": "Z8JpQTERizfJkShp4cmQEbJRkV7ynzYt3ZDfgETVkycrWNU2QH4Sf9o1m3ui11sqj6sMEAvam636NFNBq2gzbsD",
  "key4": "54JZaMQTyqs9FNgRcv6r9q6NiyheDgwFVbBV79qUEnjAS9S5BxKgGYPWk7rqWMoBCYzG6R4tUaVPLyuSHLKYKx91",
  "key5": "2ZyHzbDTb6JmbvmWCcfQLVdGrPgFHU8qJ7cYK93Atj1zfVDHdBTzpu7YjJMqWDqee42VsvXBFni1aCv2gBTBsFzZ",
  "key6": "319tgvV1ZN3yF3UnttqNBq3xDQEhMcEqfpmBuJMXzqmRUrWcd1RhcbW73DpSBAc6J6GLU9qbCiWwBUifcYdTaRvx",
  "key7": "AwnskbGnF2jjp34mj3h4DFBK17MWfYH1rGvsujpfEwbRQhPFJLH1FJx2RUfCvmu45RN9whkNeervS5zL8CjpAo9",
  "key8": "4fRXUsUq6zY532Q4oNixy3DmukaFXQLAghM4dxN7sEEpKDi1e9xdn5soy3Ajdc7wgnzu1nG2ztcqu3FRpJKKCKKC",
  "key9": "5K8b23n9SXuCA2XwJmrbBogNnKa3EoyHxztuGrqcrzFKpZjHTZ2sh7yAyHx4RcgyGDxuFFN7ND8VpSg4nx3Sabgg",
  "key10": "YxMBAdUtNqSkfUM7grNeWQk66tSBCGFJ118tib1hSjNqXwVHiW4Eax6rPgTn4wx81wXPU5zXZqFENcKmWhFGtNA",
  "key11": "2hS177rRXJoBdKtQ29LZQYCDcAYAUGJyvnEV5snyZ16NJyZKwi65cCMK2jRYpqtcdU8tHMdq4RUBM92Mowme12f2",
  "key12": "3JbF26V8nJhtmrJVECXkN88EHy7d5NmUtr3oE87EgN8DoBZbqr3cRq5EY28i7RtWvhmFMKXdER6FM12GPYZ1N5vL",
  "key13": "5BGUxoCRtL6tCActv6WiVYYotzTZDBgPjuT7zCTvgGM1N1hvZ5TeM7KK9Jkcph7B4AoQiFL3WouWCh5rRzVM6qj1",
  "key14": "5dG2zx8wAL6fJK771GAHy6tss3ao4oXaZacsw79sR7K5iVMhaswd2UZ4SwDtw6Xwg6TvYAMGfAV33zKhbv4BUaKc",
  "key15": "4VSyDJSWZwn9yryGSRf1dWcGoT99zvTo26yYoN8AwajUY2TnAeX4BMk9dxirHocjbBjL6vSkt8wf1KrPLKQDPeVX",
  "key16": "5EV6PxQYfRxv1bhZXH7S4SbbnNUyhgNo1GZ96nCKjj7eNDNiZrKY5RzQypdfkjJsfi3eVmi2PbJdh8UUj9Busyyq",
  "key17": "fkGHwZnwy3cZqRH3wFdv3zFBYg1zfVcyB8AGHhN7oHTR2oZGpm13ramMaDba4SkJXBRWWV6sDmrujNiwwYQsVqd",
  "key18": "3U1KWbViTyvt74gmaPL3R8jaPEyYKr2Z53iTyw8iSpthK4GrBXDis6sexLwDHggRKCWZUg6TejTAFumFuuqpXcfc",
  "key19": "chGmTPonz5qWZrMe9efscKuiK18VHYzSXanYNhZtoVioXfEKYWKZBRqTWpRxb5Hf3jhqK6ER4RtzUE8UFmPVedi",
  "key20": "5spTNRZXGkyX9A7kJsZV7HT8CNofMYBR683eqjFcoTZ7ZsewtEezeLZyzEfmvsM926VH1pcRCpYMY898Hcu9dfy4",
  "key21": "5voCeNCxejmKin5kZLUZMGjzPbrPEGsP4zJWjqQ3NRba26wDNp6BRnvoERttNrCkrE6BcTGH8xpGhrqFH8UndKuL",
  "key22": "4hD2qQdp9kia6nDe7KxeLryVJMGuKuLzgnL2GNQAY9uat3tsmMCYWe29KvLfN3ktQjKekBq89Ehn1mqqyvrwMewt",
  "key23": "nK71SBfjgoW6Ns39fygprEuioJd2pXJvxEtP1G1cMqDzpVzeTNpoEu5K8D9NngATDRtrJyT48JmBb3VcBWnURFW",
  "key24": "5pDPzgigQSFHnKiPXQVkWgUTgj4M2GAtRCNo89MKo8AXPxVroDEEGecp6bfmxvLTT7m7ynUuRZ6yrazbBKRkEurr",
  "key25": "5iFYSQwwCrbchRWtQ9xGk9XGRy77GPQtnVdmvxVg3ChqrkeP4A9dHrpibzn61qJrJU2k8Grk56dP3TEQK9WKmfeP",
  "key26": "4dWJbLfBmVBu7btUxtB3xPK8YiFbMXw75mV5dr198cfY8zumYDkgHAP6pQJbnRL1LssP1qY1oKKqBzZhnJfKz1ni"
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
