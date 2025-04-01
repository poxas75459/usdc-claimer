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
    "31zoPPZKkdUMUpDWemH6hKMZmB5XmrB6BL3b9cYrAxGfyLd6dvrZgqYR9eNZDLbeskgWqjbHdj4K79NReLxNB7kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Br5iV4WuwHjLwZt4BMXZhuFNgPjfCBLUXnjbhhUNCu8u6RP7sM2kYWvdgcV5xRTHh3AkTgg2sHnSAPKj4AY7tx",
  "key1": "4eEq1f6mia6QQEGxsWi8tCrewFTV6KLMXGhpe4rhFBBvVPVJZfHzX4dVemFkDmtQzAsGSNsFPoVASKuuDaYm7cnC",
  "key2": "36JsrKeMxwVivHyJX1nwn3Kukw66Fm6jwbvDbu1ww5U7y2RkHM7cTAdfquKFe1rjNbf9harHTxBfcxsP5ndaJ7Mz",
  "key3": "5iZBecx7esRwARCd3zxdewDAZSzbMhJJYsuYFJEvEkAqyArDmxrcnhnhNFRW9AMwpBLwNcHikx2cpiy86YL97Lg5",
  "key4": "22nia78DKNNiZBHRQssV3BkvQvsD6nhmGnpLpp9KRqaPu2Xd2etV7b3acM7oNpN1uQDtLaiPtV5oZ1ZNhW4RkHSB",
  "key5": "LoMKypUU43NqxUm3AsFE5UYUXDLERH8EajosoeH6RvnZDqUACiTTxPQhD5Ng2ME65esmGXbXnV6KnLMohnrkh5U",
  "key6": "2acexXBgxYSDfus3ywWdCAux1yiKMHLfSoAHjwEJwX6aJav7GQDA2irviSnYko6TuFhjvRd2SVRP86ZNNV5q3ewE",
  "key7": "4i8JN1cqZaPQjegUMWZKyTEhqLttDfdKsRo9Y7DkT7hJH7X6VwS1yQT4e1HMXfZ6jKE2AEtWAVpC54DsBNre63x2",
  "key8": "5oLApxhxJN6a4aF7Wa8WSgDn724mc7p7kqtPFZ6VEaxwfk8g9phoEecyPrTqkh8ZuKErW8HNiRhtRWaeKqVAY42Y",
  "key9": "Ar9QjPN7ts8RRL9Atw5WrihFhdz9QeV8dbQGo7XgHrHRa5PSNwomcYuGHbFABFsSEn1D8qDabUPBQYcx5UbWrSt",
  "key10": "3x8vz6AAh6Gj8Vx3Q7h7B4e9GqxB6jxhUPVbrVoJNKAeqi4zfqo5vvneZ35CXHJ4Uos4CN6LE1A5q8Fw36gVX5qA",
  "key11": "34j1VDoFpxRsca1jUPYubHxzqYLmkwyBsbpKNRzpcWc4QmNt8TkeB1RJguHM4VSih6URrE3ejaoTmkFYH4U6SVoA",
  "key12": "66cAQuJTC9RRaNotKTJ8cmw2vsvhDDcMSvRJgjwG8Mc9kXqMogDmLE918Q7uwiKSL1U819UzXPWYCPQgeMFcsAGn",
  "key13": "51QBwmYyf2hSioRC5PgSwTmCfrqdrwk61RMMNAdyWGzuj7vTA3mr9AiXH6mLrvvyNTvkcqgQrbPvBMNE6sY9cvWd",
  "key14": "2v1spEuSk8BvYCKTJx5rZQpeufzSy2REzDSEGSarAiTpzUkeCPhBGStiHoUveLdQfhcpSs9qje3EwyXc8v8vkfwZ",
  "key15": "4Vk3fusNfSAqjpuMPCqD8sqwBRxob2zWUf7i3SVrNo5KhU8rNEvfmT1pEKBtbATrYjaLhaTSwoNXxx5Hi3ZnH7Si",
  "key16": "ahr8GgWk6KsHfA57ACYeExa2XL24vCBoCcv71336R7tHhPpBmJxvCBbrFY6qErDvMLpbDdk32fF7zLoYQKssE1x",
  "key17": "31PgE8WddMFH7RfygULEsBJq8xu8X8yGDw9VqQmexwSXp71MVrBN2vNKers1hdj74t8VtLXeoFDkJEEVUHc9KJ89",
  "key18": "3z7XibqE4G2uZdLExEE9JrJ4SqLZx7jDxtgqGhKpfPV1BYSFLV9d7A3x6ymuRKtPrGkNyKR55tJWM8jTcpPTrgsk",
  "key19": "31CGi39fkD1Emj4LiPJg4EHovQKmWYmkLQZCYJssaxeLxhNdQJTWKFLt19Xg3YZpMHq9kvb7K4kZj9uSRYSt1NDD",
  "key20": "3jrG3YTF42L6W2bF8qrWYL5T4R2DXaY5xPVZsc8wPBf2VnrWENGoCafpw8ZeNsiFL4YbAAg4mBcUEK4VDydBukhK",
  "key21": "4YnUSbEtLgztVHqccs9fR59bGAwzQeqHDGtV1iXpntCGovARZLAGQgxMz27cD6LmofP153PBTp73tE6DZ35gafD",
  "key22": "3BgQWz3qdvC1Z3mqw2NmyAoDCN54jhT8z8cYkvojJeu4CQwinXp3fbhBnVttASbesK2k7WydkytcMZr9tk14qaoP",
  "key23": "2Qk55fMEQUbbE6n43MesBJY5QWQp3EygtrkqAp9ujjhFGs3DNjnMxcrqgiB1y6jYybyobuXhgo5VBXGHVAMdpU4S",
  "key24": "2vmE3PU6PPKDDAEEsewRyjUSgNENY2hMQkR3z7C1KfSsxEX7XqCe3kxMKFp1NRhpH5ttD7eYYHRPXdiKKMpfVNDJ",
  "key25": "j6yWcjNxVFyAhpNEt5Bsy1crKXhvpnH1psZoaD48eP3DbPEH8fdury1NSRt5WH11anLW1VajqbUJekbfmUiqry3",
  "key26": "2Uyw2JBLZu96y9k2tfZiRMLfLNYmmm8uMVi3MfsxtnbkJf2FsiWHiPfboJerBN6c39GW5CzADuBbar9gqwDuT6p2",
  "key27": "3a59rTfJP74gt3QariTZ4u8f6RJjffR6CJmYVAaMpZRSX2asYEHfK6SVbJHrxPUQNVfxfxzn3d3gEugS6AogGudK",
  "key28": "5iV15JrfympUYtcTKr4ytBnk2YEyaKyKrtX7wnXswjMmHxvRYrsNdTUFNYPEvjrwcfdsP15Vu6tmiCm4iqiGutzK",
  "key29": "412G6mQ38oX1xtb6KhDyiEvHGvje1fYrRZrXphSrvpe1M4c6VFwjF5UuAkMkDPY3Y8wNykHC8pRpqFVVnTkFct3i",
  "key30": "5953BGXD7xSzrCruVZHScxjsCo4qbo9CyH9WXySn96MJCjQdQ7fzVze2q9vmnU58vSXLpr5xL6Bd24ozJ1hamLge",
  "key31": "2qdNfYFcJvepYoY5mikpVuvToCrbAPAeU2W2TjVJaVqzXHop8uijkdkP6N8VjxWYRSiFuXpUGVXxtzJWGSTc8uTc",
  "key32": "3BVrA772Av8gvWJU5GqjpV3sWjr2dEnKr7cHyGXWf8mipk6A2s3LJyc8Zpr4Nxp9c4Ei2wKwoC7oVP2qwaMKPrRx"
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
