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
    "5d3mNjNm37Ai78k9W5APUh9wopodUZSnMPEpzhTjq6gpc8xiv2kQ9sLCeX7dZP469CehAmvFrRGydxNoLU97ip84"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3bdG2EZwUUGnMVSiZXE6ofkDdpqV9KWGwgzUnyLDjdCCH6dzRiML6Q8JPbonNCRB13V5ZsvACBW6oDzrfrDnntsc",
  "decoyKey1": "nqBKqK5TDBzRQBcVLiweyKqy9cfcYz32HjHq6YBU1qfF5pSkbEWQswJyoZEoGWf2NMss3iDdUxtShK3icBo3roA",
  "decoyKey2": "3dP7Heo8TmMosTMqpq6E1bnfmb3GCts3o2jeWGCTg7JmW9k4YJQcPzczoQykRdSvadFyJ34tRLy3bXbkzQja2gbe",
  "decoyKey3": "LrZaHwioyehiaWPWpcSs3cVtBdycPgRrALvB55DmtRm9PijAKox6KUFzqD3sK7mNpT1b3ssLoNPS3KzrxjgdMUL",
  "decoyKey4": "3wg9ucPW58n8PmMTc47fHaAkTSeCb79ykiTygp45ydyNSGHe8jbe9niAsJbKVXSirVrgK2eLcAXfxggnEULtdndG",
  "decoyKey5": "T3DocvfjqUrDuWBL16x3yheAagJcicDYVbiq9bvLFXJEZMwBAvvkTMj1CztdkSqbiqt9g1avfM1ev8FB4CdxRC4",
  "decoyKey6": "44uXi9RUZYVnipkaXyNYwUjXpqGpCEC7c8wvACpZTtGgthhd4eUNJA2c6uttCSauFfrtNkXkPeJY6iYKS11shZj4",
  "decoyKey7": "2hqdfz6ijsooCbsQSXyYVLmzW1C8QA9NDGLSP7SfvMRbUbLcxgmNM7ZJZhB8CvHTY7tp3pnUUnSprcz3P4iABuR5",
  "decoyKey8": "Df626AzU7DcNFinoLZDQf9DNAV7oAWkU2eEwEsEiepDUhwauKSqhqXt7EQUFmsCCwwU9Mj5oyy9YTK96BzuMHXm",
  "decoyKey9": "4Jn7CAZZveFRiarREZJySoaUZnJfEAZxrqLN7LYiBwVu7M7j7xpYmhWkeuSezXBUura74Lej2sFZ8oKbjxWQq5Pu",
  "decoyKey10": "44KwWceRWcjwYFjMcx18uCpRK8NvgWtnKin4SK9XQHoRCcHdxxcpNTuScKkRNfK41WcVuaebWUA4VvTGPxLr4T8b",
  "decoyKey11": "63Ys8rsPv3fzPcZASnr7udGWowp2EiU62zpUXy7wej3xXVnMwwjKs5QwXeeQe8Vi4c7762r3moybAx4WcqdtUqY3",
  "decoyKey12": "43n7oCwFaG8cRHeGzbNvoTF3LjJJbSCVHdBSy28tTPbaN1Nm2cgrZU7rYam8gm8t1rc8i2cVAoUt4Zvviq8eiySa",
  "decoyKey13": "v1gSD8ZcT67yCGwCn7xphcsWKLj4t5bLNCKKGqDhm1naPxWDXWeVozavBMSQ4iUw6smAB2jZMNBY4EDGkDQfN6Z",
  "decoyKey14": "5SAjo6SFHhFqrQqp17rkcEiZv1F5Z1sJ3sSEpt4uBN2PAjsKS3ZWinAfCrpviAw8EtYpZxiqzhSnAMb9MdnJM8ka",
  "decoyKey15": "Wx63znD5AWQ4Zh6NaR3oHNF94eokKNkbK36fvt3YdeNCwQDnutwh2WTtmZf2TEF5xRh12GNJ5PXon199U7n9G2L",
  "decoyKey16": "4E3TvNruf921vdteyfjkW7ErG5vQMC29JEvEcS9K6NYctLWiMvpeyiHJNApQFzgMoE3jrUvxuRGhqq5Naj8R45Ji",
  "decoyKey17": "5RFXxxKcLFJx3DqSt75j3MwGHL5xv4qMKeujD2Kb23DAdeTzzRtDEB2twy8EG9ndiVtW7afu2AAUYSvyPX8kJ4jQ",
  "decoyKey18": "4XKrHhCqQtX41L9jjiWqRHRxgMNae4TLPau6haWhq1zfaJkrfhaJS5cF1k58wHmXLRirwzFoUkCx9dPoX7S28hYV",
  "decoyKey19": "49gpNSwHq6V3nWsqwyszmArTH2Qfzwcg6wvGWt8QMoMGUE6URJWPEeA1q8nwH4CJuL3Sa9EwEJCGsXbBU4bMdUQ8",
  "decoyKey20": "3vy1VxFjv6Lb54rj181kpmjsXvmbtPGmWyqLdCDqscVKRJ2hPX58zjVcdv16HRMRpQtskB8fWpAUN1hRhfUi7KM2",
  "decoyKey21": "2byLRNw2pSjJxA7dDB4uUN9H8gArYmV4vBLGjyTiT69Kk93TiBZmWfZNk6nJf8hiSUTx9B2jCG2ZkJvUd7pGZNMJ",
  "decoyKey22": "5cavtEFZzAkZDwdzcatjAhuALruMoN7YrPFbSwEg9EppyZU4AwNpnP3muuLrEpTqkzSZp3gavnDP6YnjS6EUZboS",
  "decoyKey23": "5c9wiJpsRjUb6hFucMSoid6buqad8FtS8MFRu4ANWcmgqcRkDSPgK2eHGBLv9pQqdHArrK2X2X64FkmPfqY5GD3L",
  "decoyKey24": "5294pXeZ4ETR6HqRnuKJne8xaCr9tYfyJgG765iAxtAtUGcHjH7PpTexXp9j5W7NdfMToFbb54GaErUaqtk5WBMh",
  "decoyKey25": "24RC9HCyAWqayEdp8xzty265wX9kzmSTCG4Fv6VA7zxLGdykoNSyyeDR6cE5UxiADVroMEu2YkKSZnUPWH7X1nkv",
  "decoyKey26": "4dzZ2vfg5F49fXSgtUd8dCJmbrhUwQBaX9SvupgxqUPQfiCp4u82C7reLWYH9wLrrQk4bjnXMUkyMZaSR4CPXX7g",
  "decoyKey27": "5qLvBB9rKQRAAfHqk1Kqkoqe8jusDhGA3o9uszSoEvkxzsZtgLjt6TfRvxiQWEAjox4pNwp7v4upeJxHamcDi5Li",
  "decoyKey28": "Q9fKthrVy5nmUHYJ2hkBzqWjUYsxBaEhaQMQdoeCZTmu7qyDoBCqVFNSsp4SSwecPKsxqYWv6PEoTwxP4Fpzcud",
  "decoyKey29": "2YGMDjtWgypZrujeb6iRxQkYRNeeasddW8cwWVVKadPav3ersEKn95UfeKrvFXDWzSa678SH6Tct5ZGyiBad8gFs"
};
// DECOY_KEYS_END
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