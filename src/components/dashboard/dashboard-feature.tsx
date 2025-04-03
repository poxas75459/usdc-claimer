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
    "4pgqZwVWVFe1fp7E6PNJ4TH6yhDtU2s9jdy3Djw7B6gDmhmmzQQxbuEwpak7bEQFufrZhhPDdqw1eNoTDzjXyUfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTKNjwKscvd6799AnMoef2p1h5BDMguz1EwsZaR28kdAnhoNrUJTGC5PPAvVHVS6eDjk4ks8hAQDSg8zBAS4E51",
  "key1": "GUUHFVjSQUzQjjKkJedLcs6JYpQ7Dr4jxNHgez5Dfq8ZBVw5FfmQQxh9bvWBLtMowQPbShAzsWY9XmT1WbCouyp",
  "key2": "4BxJUZY5cAMiWqjn3kxPB49mduB1n9ejNrfww6jLZfjd1XwF4YZo1G4RoP3mJR2pHWe8bqDuJenP1uNxCRpb8v37",
  "key3": "273Bf2iGLvZM1sTLPncpLWXgMG1NsTSsbc9N7cEMoeNpbN9pMikQKCpsLS6DzNjonTGB6yViRGxJXP79BzT6qaDq",
  "key4": "4xxDmQQbMpxzwRZ5sL5bahEziNYGbedxTTTgJmb4TVZwfgH5L9LWc1F4XBTCqpvKnxECbZBUdvSM2uFwNXjfeBEB",
  "key5": "2C4n2tkTZEXKN7KFuNSncemx4r9LZBRmPvMpeJTAgUBpLkPDq2a6jzyAjDuXr7sFZSNeQpoAv8oeqAPAeGVyz8P4",
  "key6": "2qsbTUrZoLEjyM1ineAUyqsUHK9FMgpdY22fRuUFhggLs4tSLS45Vam2qCbYjqkQDMcpTzrrqEA2ufGkwHcH5Cyr",
  "key7": "3uAhQP2Y1z5G4nJ9NQu2ErW6eZcyejHZGBcKsuwmnYkqRzHdnDJaZLAz6cdY88mbp82pqfGaUFx7yWsf8YkFMXob",
  "key8": "PoNDy4wpxYZbqi9fxrBRtAQzys8EST4nqU5nEjdJJuC8CfJrsLkuwDEmrSEm9Eis3R9ozaNtW62ArBktmwNAHKM",
  "key9": "5g8T4dSA246CvNL94v46a6kwMS3QdkzJY96Y3tEA1PxNNrNEuwD1cvz4rh7RRr8ZvbsupSnZ29pMWaZ6RrASDkGY",
  "key10": "4img3QC8wKEYRC6YxAcRrUXZX2qNpNcJad8oA9UhYGu24MrL2QqN8bNxt18Rsoobei1NvUfmBDp6vCSoswTqdUki",
  "key11": "Fmo9X8LyMi63sqiRkpf4nDMNCjCq9yy5mvxnXT8xU7jRxRXN9vZe3BC1kxtaBeQVet4bVoKupFBrYThhNzNDVBF",
  "key12": "3BLhE1hcABHvh8ZEkh5VDqvzPhW8uDWSmPkrDzjgcm626nAQ5PypDdkYV3EUQmy2hKttizzJve6WjYmSXGKDpfB1",
  "key13": "4jCoy5AkRyxPau77LJBnFWVtodAzVZhyGcAVrZv73L81NDt8j1Ghvd69fJxJfFNUDT5XhHUd91dRaHSduPfbxjPk",
  "key14": "22YAj3dCF4AZfwv8zq1e7dzgdGNrcMg8YBE77c5anQkhiQZGCkiJXTXYMj2KTvyV26D1kFJ8LiQPyu9SCKLW6U5S",
  "key15": "3UDBEBsvY7qgiot8A4UtdxqVMKdUjtVYTpcp3zDZMi8qhGE8vxBf1mjawrwRQuRDhfi4xoeh14Z4tkHcNJM5b9Jq",
  "key16": "5HsWSUMsF3MevE2rW35FzwgPf4pWf3yb3eLeQfttMsGLKrQgd13wnNpePiVxxtuLmmZVtLsLVY3YjTqJUJcZJy3",
  "key17": "4Sbmdyg9J6yqEYiqGYpAEykYVstcbSJYMKmLsYifEJ6hqggcLDVvWnx9UJRicEQd6RTyJqBxSCa6QGoHYrNC4gX7",
  "key18": "4zU33vhRrA81LVyebharGJyYipUiBMvpZivUEViTKjwyAs4MN9bW9hqcUfqHyYLs5fcf3DdBdoBkFCX5ZDyFQzra",
  "key19": "3ZQ1Kp8x9NmxsU3PWhBSSZ37grzT58TjinqpTqpwMYxFr8NcoU5xuvfWLan6DMRX3ChjLapPEGUSMVrJGrdLmm4v",
  "key20": "65aCQNmXowsYWJoGYRGADFQMyv369mDawKSDXewbyX9JKSBTgjpovvSzPnu3Dc3nfXr6uXzsTRCAsgyFFSxDpurh",
  "key21": "3eL8gmDYdVQps2owTSyb8zhmUHWs3KadNJMJCnePXrwG6EkBG83KbLZbMCM9yDXMbpqta1PFAruDsErc7im8uCh4",
  "key22": "2Psn5Pg6w5ztPCY8j4EiEK7UbwD1acG1ysSAsxjdwbXUAAc7d8m71BCZvkfnWUfZuD9TdcRmvXcyAWayfbxMSnjZ",
  "key23": "2pWYKN1DbBPiWbSppucdBAE9kBU8Pst6cypcxCRMYVdfeWKom34RdPDhSBhR2nbxU7TxEoDj5Y4xBU2N68HWcaNx",
  "key24": "3KBDUPDDiFp7BtxvtHF3JuKKp4tn2WN9JpZ6nqU8cHDDD37mii2kAcerbqd4Ju9LrfjSVjZgMGB8yUoBsvaDGRzC",
  "key25": "3gfrqEvWbMq2j9J2MwsKwbeu6wrcTLgcpn8pyJSwBi4dAhHe7GwuATvmkc2uquepeZkVwpu8TS5HpxccDqGiZSzk"
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
