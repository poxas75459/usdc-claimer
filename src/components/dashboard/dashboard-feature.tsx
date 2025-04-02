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
    "5NPF6T8CNWHaq3R7gtCgZSb5ZDgZbEo8AnT1vgJNxwhRp7SYihXFgfzoaVVkFyoPvqjCb9L4JJ8miCaZDWmewyNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rZfgMSbqiPsjL4ehisDdnAgCTnJBkAQbY9pbanGDm25Cg98PKXwwSVcS2CBxyAsZBJ78VMdS8oPTBF78XDizR4a",
  "key1": "4KkKHL7Eq4zxqFdLZyknwmJFRjnJGo9JkCqywXwcjhv3igEggL8HbmfeynvqyVXkzt7KRj6t4dER6j5Mgh33jUpv",
  "key2": "5ehrtFtpiQUUnE53ZAAJ8h6aUCWMcA2NYJsmX7DBaWRxXN7MRkkMyRJvDpcCJA9CN4F8mP6egdG4jMUbrJU1ZRSx",
  "key3": "5QohxiCuSz1jkYA31VG8Gmx3Ph36G6HURxnjDtyms5c2MnXS3XKmzaERn63YEwtwDuLJ3CHbxvDzwH9nG29MdBfz",
  "key4": "4sWBukGvnjdg2bExw98v6igNy95wXSmor9DXErQ1EbrmBV9JUgxVk6t6piouff1iVAtome6dXJNLu4yHzzLnsBLV",
  "key5": "4ZrgwkHpqqoEK1tohfMq3mUf9tfsH9pKJ9hB3FQ8hiBvZxS7jz1SmK3Vf8r3EZdXozuMEm64kSv6qYyvfwZKFqS9",
  "key6": "335nY8QXmUsJdGLpr8GgcKwcruQsCpLZfnd5U6HgfMWZtBpPefoR9MqR42dBuM9oohZEwquX6mMi1j7hLb9PbEyB",
  "key7": "631wu8LfEmkRasERuvxhtYrRDpcQhmZBWjc6hKUNbyYSnpx1NxDkhGCaFigM23PNrMgRzffqdKCb9cVbpgki6YLQ",
  "key8": "4uq73apiqPh9i6JJkebzGcTLdojvV78AeCnJnXTMP2Ri4vEhSZAFoq951hCuNqugXSfK6khWaXKDQnK3XTiJbZyP",
  "key9": "2kyvGfmMkWuHovSBXkoh4Bwa2hrupzY99SpXrsbgAuMqKBrwFfAbNG7Ho6e15dX74CKJnA3pK8sirpp2HJVgCdEK",
  "key10": "447fnhGtjXLsUk6hieWNZs4i1SFPuxi7kZUbMhQQ72cs8J3Ss3KWPZrhDQQ7giUxqAs4HufBTHgqTmFUqfwfoWwe",
  "key11": "29K6d4weAPKDMF7kifseGwxAzgs5goNGovMVsjoFvZdBFt7h8UjmxqRo6UcfVmoN6TQvVmhGtqzSqEJqEcQLAPrQ",
  "key12": "3Yp9Qc35tR8CiAwTP5H1rB7kRtc9C347vfKxSHtvNc3j5fbNUjpCftVED7Uh266JDu7shubBHRXPeX7fnDk2ZCR9",
  "key13": "31gw3gV65PPYVpDSLMLwkYm3yL5EsMkfNT1EQrjXch7EwzJFfgSLrqzscecEBG9nWfRizabw7DXsztVUydw6SXfa",
  "key14": "51gwQXayE2rAW4ZoS9EkMc5XkuD3Lygm9fparzuhWwoADithahYKGboH1PhmS1oGTBXwVoZ17maBjs1hkq6mXwCm",
  "key15": "43WSXMPavbKyTWnm7sGKM47eX1zA5b5buVqmnEC6Nb3sg2z7ErW7E65hsXmWFocp5UUneEcE3aN8PbAryxpUu5k9",
  "key16": "2YJwzd38kXU86AGzirKvvCaEgpHo2mpukyk5teSSjfV2jfgbHXsKftFV1jddvDrZc8brsQnbD8oUd5ystzac29sN",
  "key17": "2mpaTCSK1mXX6zLq3MX2JQwBvvEKT9P3q7xH6yXjB1j73hE51pKYcfoc4hbc1XuE34MUBs7fiodXNBCvVDL9U1yf",
  "key18": "FFqMnwrLQjUn2fkm73j9jrbvxqLeQKGF23pjWPF7DUXTKPzprQBJg3RKMDD35ib5ZfCE1kMaCH5dfhKexUQkJyw",
  "key19": "4eAHnDRgNzwaZqEidwf2qauxc6Uvj2p2b92nHo5bKD7SkCxwzin1tWyKkVDsEc2pEQTyf1KxFa6PppFD7i4kJfCY",
  "key20": "AJB5UsSdtbLUcJEWtVgDz8ixkBhtV99aB2j2oCr37EhE79Fr8imf91jHmfTzvT4v2Y4QULrRqCHufzWi6YnwDwK",
  "key21": "3GsbYjAewgesZyKAN5LdN2tzQjSbLZ5WaRaxMNWBEoYKceAvTQ2kaRhQHnw9Dz7HtbxERHYZZWnmeWwyvYF4Mfju",
  "key22": "wM3jAdvKVNQFdfrYvrrUpZ72SJNgZAyxZnwy6yQS7uSZ61XfLM8HKdmwQ2V3cAgHx8SykQef2GstBWtKjSbPu38",
  "key23": "87mjkMwPDWoqfqcGdmzss7vBQMNMivqTnrvUdEYiyYZaFJ9Ya8PYxrWhiKtAzyRaXLfKn4TAn55Djr5crPkR2K2",
  "key24": "3DRrBp6NgMmKSpqdbtSWMkfBjpUix7MzZJpBsp9UxyyskEHiKn7NznVYX4sTHEDGw8Pqujym5fABz9wBbTMQtsUS",
  "key25": "3rHdLkWPyX8465rxTALM92WTHxivdefZrvL8pSfwnmvAUA8AAMkR4jjWRkdGMdj3NwiifR4QtgbG8LCWwTWFXmQy",
  "key26": "3DeJDhJ6Qdm5DSVMmjztt7HJHs9porUqZ2eLrKCfAdeSAV3STiujBL5MUK6bMX8L5GA1nZXpXYJa1NHDjV72NWDv",
  "key27": "4oqCxmqGabXryG1uTxkQu9cZ96RQzf3dPd8DYzRYraY7Z1KydV7hhpbMPq1vJdZuYTGr12oMS61AvL8wZn3HskGQ",
  "key28": "rVHBe1Mf9G92FmmAdmdgfgy2GYVmTF7w7kBxL8ymzxHWJGpsX7v9uo8EZdfwBVrNHB3WrGitVhcvVR7Qvn89xp9"
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
