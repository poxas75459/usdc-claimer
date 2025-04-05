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
    "EzDTNHT3DptfJRVEUadEsfKP4xyknyT8pwNbFo2MXP9caip9XNWVxSzsDMGQKMTxPPaE3tzn3j7d7Cej5LqRCnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DB8K7KLtcoLt7hu6m3R5ckQBKoCZ8s6EYkfCthoK8ShCcx97aS28JqQndW5mnJEnJaKNYgfND4kouCSFXnQFtvM",
  "key1": "2XM8XXEnRSa7txbG5u7CgoFsZMT5debX1tLbqhBdRQVQTJuM8kCbNfWkEBhkYxkQPRPinGTGyGmmnVpduaUySZop",
  "key2": "61DikBRBzVcaHUGQRRnwVJCTn17rXAFPcYGymp549N8WEYqTdpGNhvnK21KCUrnUJW4QwN7hiXR1o7t5sZiy8Y9m",
  "key3": "tPhkGHqMcTHkCma9MCVSCiVycYBz7P8ZURkGuSwJxGQqdyfQh1YCJb6SJ13nJoL93iyvh6bP8z13c5ksNGPhZRJ",
  "key4": "mij7isjLrcv74dUDekwR3wU6aDZUpDoTVxfLain6gUVfNte4hFApP3aLYwznZ5ivbKwo4esMfumGCxa8WywpdLM",
  "key5": "2VDQ7ayFNkhEpabg9B7dJt124X3sNYbweFsjHD8FjK9F8BRbvgEk8UCsDhb96xeUsqrt4fEFTYg2PumF26hj7oRw",
  "key6": "2uENohzkFVv9iis9CWCW2r9JiCHP47fhGW8CiQycdJBEAvL5LiH1do5qpLYo2EDpXRNMWsMLDzTwytQE5CUZUCWH",
  "key7": "29gYrzmVGnyccgDbA74i7M8Jen2825n2EnF3teKcAkpz6sfVfGY6uHy9xk1AFTqknFy6xaBa5tXem2KGUavaSuwW",
  "key8": "62iZd9tbxir3BEf58JQetp6cUSjZDyyLmYYVF5hjKyYRruY52opSotkmmx3Ct4K3vNu7f7PXw9X4jf9g1vr1VDTF",
  "key9": "5XMf5V9XEfYGz5o5cCH3WHVcVdddGPNHdpzteAU8SGEGJHG6smQtbCWLBXPFmQPiiuEH8yVCEKbBHoZMJc2cYjAx",
  "key10": "4HJAqq2XcdJPeydxkcNhiSyFtfR5gjJvNZvfKrYTLFVWmn3brZ2mHVNaWerLSPUen39f8RWacDBxyErBsaW35WgW",
  "key11": "3Eiaqhd2aDw9Qcxx2uU4ABP4HHUCtqJifag19xQN7sWX8cMm35begjGc8TJDdcC2SoKp8q8D5FdcyeCSnDDTuYxP",
  "key12": "Lw45aBWhrXt2WCLaKGV6xgar3SJK3fRTVibA2mhX6dVn2KbYnjGeJ3ATA9o7Rhn2e9ugm5L8bGkVXoQAvPcELru",
  "key13": "4Pwr8EaxvF5Wr2TVuc1KnjNiNhBrGihHTJ6mphngaRsojyBvXbhkcrYhcPZyepW47RY3rwtgQjpYETtvHKXcnSmX",
  "key14": "5qU54TEhWKyWLDWUNezTANakMpKXAorMu4RGNpaYVDUZPySapbWWt8A2rDRLUHxA5jGMoEWyZuNxfn1cPvWe5hCz",
  "key15": "rLNuLe6AY9gfNMfymX1gUWyqqTu2tPwj3hau28x66n2rcFfHtXjANpTrkFxEVvmLAqC1J6AqSMUGCPKzu5EEfk3",
  "key16": "4rCFPXtrx9VvHkTSs13QcAcwzksjPeEeGJZRQUTCRhQsiWbrTC9aatyradAC6zpeXQM8hZp1Bs1GwaW7fuxUZueH",
  "key17": "5LLLu42pCMpZhcA6fyteLBRJxU1XcNBy7xGN6iy4Ued6xBP52jr1SCcQqshGDfb7xqor1wAKJyFxpxek6iNKi53i",
  "key18": "2sbc4GyXdjtya93PxJsze3ZXHTPF5aMNpa1o5NyibdqxoJGw71eQ7LoEgw2k7gq63Loe1hSieEqF5RVZuYNepKEA",
  "key19": "2zTQe5WZm3CKG8mrdizcPAhgPfNSir8WuGXGknkxT9Lf1ujeXqYTbfw8wttRFqL4WqFXBixQk96T1myvpKWjvdgW",
  "key20": "zWyrM6kRswu6R3ZWrZ9t5VuyqqCmLLjUUVzZuHGpsgrdgcxqdhSArCGat6fJ14W8w5cTPnr6dNGNiMNMwGrdPaX",
  "key21": "3cEqsgYv3tQ91SNhJPpBv5B7nS8sPUhcYwf8wqyuFfTdCLi7Fet9wF9n8u2otCMvD3292crbYx4pu5ai93cthV5P",
  "key22": "2LaAh64tcdQUCU6918sMVBBJvqe2QGyk6AiyspD5CzAv5FWvFck4WJxkY4QgDhDmrnaytvzALueC9CQEWQTDFy4Q",
  "key23": "4wway8s7E7999j3LH1jLgTkQxBPYnYVW3zWk9aeYsxdbWFjY9SHQKJtL5WdvxW8Vf8Q8F5P4iaJcHLBDX7Uyf6c9",
  "key24": "58p21o7DqWWhMss2wgfWEVkSurKegcMjowjQpCEre42WgiCZZrzdg3NNq3Md1D8B3QB4qC69us8jVqGXiShoEjJz",
  "key25": "5HTXTm2858UsXxGEAPbXayfVPUATM62A63gismcrj5nPJmb9Py89TGC1zzXv4LCGv3ZZBmuA2tXxTURDBntLphPF"
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
