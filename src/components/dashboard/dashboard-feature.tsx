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
    "MG9WDnuaHVGc43g6T9mtkjboGP1DYyqN9vJ4a3At2YTefzfYkfMWKKoU9ZfQaPVUAiwkaC1EWQq225NgkTE2NWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPx7JjHYvJ7TwnaK5dZbYVkbrt3uM9AHYohY5q1KY8jDPdH4Z5UKxpkkSFzuLe31BMuxpfrtGrLz7eNmbypK8rJ",
  "key1": "2oMvP6HrfdqL67LUjWnf9haSQjJosuEzUpzfHhVpJyFcjZPi6UEJnZm7EQG9UoepPz7xGsxtNTLtAukhgqpDu3em",
  "key2": "c9FFSw8zmAutJPAnzf1jocGEKVkxoSzb3mmK1WEpBKrQ2VWSUEp5gqE4ajieP3gynATseW4WmAdJTYMhDedAsrV",
  "key3": "46B9aXnJC1RHtVQQWLXxDVda5sK31mWXBYkKyQfSFg6zmEYoyrNjj1qZ9bEuwefJGKQm4BXFhmb2tMHJzXZzsuz",
  "key4": "4oQmdrQWT9Q9NGrLRVtdmehGM26P3nv4zJ5pzMEhG5aPr2D3RCcNtfE1MUZH6dEhY1eLcwbkFEzbJAjr45Bi2osd",
  "key5": "5j5HDY2jjqMNV826TcqUoEdnaL7SiAAfWM3pdJj7BdfZFR7T1WjbYXKx95Av5oE3ZGHSNgFWt8PdnML66WK43Dro",
  "key6": "4sP6kSfMGApndNkUdPAS68zjxAzqyN8NB11MNaJ869qLFVdmS4XeJn1abnNdPcGK9mURfyJ4MnCGumx1g6MCzikM",
  "key7": "VfuxRzz3s1RoWNW151X9jNJjHFKtMsaN6Z1THJjBoXKi4chHweXepR4zwfQofhcZ5vgYyhAQu3eu3ofTeHYXQBZ",
  "key8": "5mwoxQZCN6J3VSXd2gAE7issGNbBhdMLndpP2bomj41jAMbz6d1aXYHmDSBzZ4E4PAqtsEbM5WvW9FLa1n7nKRAE",
  "key9": "4bdZ7dFPBeWAR26swEKd6pb7BYooVgDo1YKQGmZkwkPvvLJK4knubz1iHiw1YJLGg2Yi2hu1gHKvMMBJ3GginVem",
  "key10": "2ntcpZ2yMYJeLpqEZ6ekDHCNxrSkb2XPxdHgmMgd2ydeogYHcSyX5w8toD276f3qYRMoiiJRQYaKrQqqKvsxhTFW",
  "key11": "Agqz45TFYt1wTMnYxn3AvLWFB8RZsTZYZ8vp2nxoB3QcBNEjF3Y25PRRpY51TJnp3FL56ri5pWGDz1p4pc3AhRy",
  "key12": "4ngL8D6mQZekcpq4WaPtKBaZikzDbSQYpCdMpyd9CPT3ZZMw42UYXyDyiQdSpDsiEmW4pB8oJXmUfGMERvsMqX1X",
  "key13": "5tv3TKnkMu4Rvgear3RhHtuBYhuttg4ZPYzrqiXdCtSWRyqorkF5R9XHwQnusj1YatqXN2b7L3fBHsvz6BgqUXRy",
  "key14": "4a2de3uBccKwcUGyaEtqJcpohAzs8xZyGc4iMwx3BtAvtxBFYFYWSFZ5qccDQ5vSAzZQ2pfJchonKum6R9wszi8e",
  "key15": "2zdCy6KL1dLrYGh13Xw1Dvr59KM24UDVmeaW1pWN3QPRNkkspv8cGda22a3PLTKxC6UiAqrP2Gy8DRBLp2yW1DQ9",
  "key16": "4NZ69QbmM9ANdbVC4Ebosq2nc6T37744Henvz7GTDGkZm4PmuRtw2ys5DE2CuUAU5ybntVsvfifge2XpNv3RNh7e",
  "key17": "2pFEjEr946dcvxbrbnTRxiDPiy5MVSFSecmX8qYg9GFVV4RJLvEx8HCx1fRLDS2Uc944NQtph55Rm6xqAaxbrCJD",
  "key18": "4GuWhRH3WdQyg9amXHgzAe2baP5L7zyPVZQ6po8KFV1fYbybE6sTP4ffapHRzLzG4CnQWB1PokSB9d6VGmwTa4vx",
  "key19": "4LAy7dNQ4Q2iWiHGpPXXwXf5JvsssA91C1DgpnWnQsEjWHU4EjzAZJZqvpSGvKnAYANYHt8sTdj7wFwJSowfPekf",
  "key20": "5enCx31oX7hT5qCyuQc7sHVCfjDT3WLDnoh9h5BevSCLcCSMyARRX7NUYjKSSndgmSyoU9cbFb5pq8FZknjQq6nb",
  "key21": "3k16oDjruM33NQS8Jan7goYWtA2v7zmw1JmqtsRMH2B3eCHUUH8nNTvhmpR8HS3danTZWYFHuPwQexa8AY6npGvR",
  "key22": "UY7bjCftRfL9Aaqoo9EFbLxGdzy4AKxZsojWLWu2YhEy4wYfN5puEMfNkMD8gwJufZPxYcKiGWWXCF8gCa6xEcV",
  "key23": "3DRF9HFRshYFtTaFU1KWyaCb9hQ71BXmxyqSAzJ6yWj9VN8Axfg4SSMjWyGeAsvsKyYL7maqr2vbb1ThiRQxQPPr",
  "key24": "2T5afTxfxjZPxkLFeLnRzcF6WQLfEURTfvVYUBqpgAhMqqWcPRL5Bit2WcWFsrA33cqH1dsLWVqW6HdAHH5rfJqb"
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
