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
    "4HZqMXM4fLELCQbnwUWfnjJn98U4rwuzsrtcvV6FrD94Lg1Q4yuHebH42HWsfJV2PYCWYTEyjyLfqa16Ds2bRr2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwaBgcspnD17WwUn4KDtKjD9S2FJQNLDkEKYsHDPvpzX9gZV9pHFcwVAY4jHsGHbtCvyyDDx8gmWqqKhwVmnWVu",
  "key1": "b4xg8ZBBgJPKjFrmKvMy7Csv6VxXjvtAfTSedifii3Tyre1GsKkipu4nketXvjr8D1M5NCJVGR8TwANcbLzRV1T",
  "key2": "2dHZw1hfVhbHB3YZbeaFKD7VJ4vyJUphmKW6cN3JsCNwrRxHJrb6vgkVA8ouYM4KvV7hZJcYbspTiE1JuBGBr9jd",
  "key3": "2ug784aQnToJDiToi2g1n15tq3ERPFucZU28gVEwQjrXoE73Pm2eqz9oBQSguj3UvXhD6EGiJUP9ZhahDMvS5Dou",
  "key4": "3zHPRCQsiwoU9XASWZn3zp4KxuMXynrAyF4d3mH4ooF6cNh8DtAdKgvVxeTiq4p5R2tutGvrsVy5raJsvvusgCPW",
  "key5": "MZR9AgyrCHqwaL2pccfxoKhx5WThaRVfELAYso69DwaMfaWSVQPHoZNvPKy3TUGBuHFmKZ1izciyMufqpVYTt2e",
  "key6": "5d288etHNeyjMfj6HJ9DUVxHgCt2upD99aqtiJz5KFHULGy9WKrrMLAVwRZRC78zwMpELYZzztoe4UXzJYw8V6Bz",
  "key7": "3gNJ9Q8tEUuBdRijhavEPLDWSPfQsKfMWS2wipYshK8ZwTev6i19w5LywMU9aL9rLkbtMDEamC7bLmXQGJWAeoWW",
  "key8": "5xCezfMqTeYJToKdNn1HThF66wRqZmHDgJrLCrpzJN6XCRd9wNXC1ic7hTDpbCFQXpbgNvxE9MRbnCdMUoP6vsvj",
  "key9": "nDQ9q5pSWZ9ofjA4TyfWPThYLZ4u8WgbNDWGWCNdpYKVB6268bqqgTqWEtEtVa1pH1Mw51qwQ2p4d4SuGbcAjne",
  "key10": "2hBwneSqY8Gzmqxofk4sE5hm15TSHY4PZxJeKJ1NwwtAanQ3RZgQcTvPxhdHUcSi6uwRAQuZJrVyEgpy5T6EBMcm",
  "key11": "2eDBbVEianK72PXGL5fyfVRDfnzJmEoeqq6RbMq7LeCJ3uVFo3rqYB4PqVkHd8K4fGGadcBmSW4rKGxyR8CwT4yX",
  "key12": "5LXiA7zP6k7fKaiWLtjyidR3JuvtS9SttBfrpXaqTEwp9na8kQfv9Nmc8qn85HvfmwkhGAVQf7Hoq7LsvgwbJqpJ",
  "key13": "4qKTqRqkT5oqa2eLNqEXEBgiC8Go3VZU9j2ep1FchPRvhJR5JSejmHPZt4UCjRPSdKUdo1FFpPDfPnx1sD27oPEj",
  "key14": "2A3G1MJSFeVKNBfPPHpJtsqmavMsQTcFg6ra86Q6JqFW9HNzuGYFoHTnrhirNqHvfJNwYMvd3fBZDYzYyJvpvzE9",
  "key15": "4kcd1f1TxZyQGbEtZK2k3Tddv3R463HAAN8ZXg4mkZ5KD69faxza23eiQUQh7yLaBjPoB3YKANwy9zNCWmjvpWeB",
  "key16": "2gbbiRbdfKYyLXGndD7Tag6c3WpdoHoqgeNo3dBFVP5HgX62BQCGDKpKBdRcWBNYG3D2TmMxB1BkULUMFZ7aa99F",
  "key17": "4FWpJCL2mQ89UUSwWfjJ2kQmM8Vw23UCdgBDC34bJctEsYLrnTZGQGYJuqVQi8fx7iYcv46EbgsucLsaCb3oyfT6",
  "key18": "4B4v4nxeJMZ3vukw6buFBCZWJXAuWoZFkJ8B8Geaps4WFxNueiMT346syip8LTSAEWuHfQxgNAsTAv4jR1ZJyK9d",
  "key19": "3vx7ZC2teWoanNwDJDZAvYxv8mgDonck2g4Nu3Nr2bRoFqewWeTFhcFRiNq9LSMvc4AuMRviMzoVNWmTrPPh2b8F",
  "key20": "4G6KzZhBoSvzPN44qmKNM7B6UZqQFVPe8qMcLGs3suuLLH82jCKLGUsfeo83yuC2PuCdsJmRx4JZQzGTDup5zBKT",
  "key21": "4xHQqvrsLkpZrda7D9MjroJGB1CC6FFEGQVj1S9Uv5mohSow7XyHURzTsvxHvzNdkfHRjtcTS74Sw9jnxKn6m2Cy",
  "key22": "4ev9WacCyat1GyBruFb83WfjmM7RM3U2eYdiSYGbJ58mp9t5NsU1aWxYA6vGtEAcDkZpVpHEa3toPUrPAsj7sNa5",
  "key23": "1Xdq4unidqEL8iJPqNpTcZNerAFrW4KKNM68mjG1BZsXogefQLGtBZu2aDe8HipEZaTciLvAqRbpNERbyE8cgvn",
  "key24": "5a8FUD3nP9fDRZYtQYBbn9EXaGHAz16XkSnhkSgtibeKHnc5Knn5GjTAMy3vhVVAnvDMp3vCnH2ZqFEBNhmJJjyB"
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
