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
    "5rmUMoT4bekcX1gwun2U92vFgMapV6SBpgDJVh3iR6ATD2PQ9Nw52vpQRZrkFFCA4aa8c3w4C2sGWqgq6HxxFajB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gpf5CN8ekXdtsimSzc1dcGEaiJbicXhyt4SDGGrR1oLApDkJ4X5de9rq5CpTZGyCpxajF3AYgkQVyDfz3fCigr8",
  "key1": "5qR5poARjxdri9ahQZ4pQjoVYryetWXhVXsDH8W586UDJJGQjS1sKk1j6TD9iAzsjSXNuyykWWnWkPdhvjf8gi78",
  "key2": "4PwK1qjcg2n4RVkqDmSuSkt6nvGfyc3Vmkvro62kePTyJfabMbSc1C9LWPmxV1LLsWy6wtyPwnGyRPYE3yDBEQfj",
  "key3": "4MoA8G9vhKJUtFLYE68zLXsBGaDqeg1RshEbH4pVxQbwN1YMUPHVze4na9cU2ViYpsi4Zit9vtssoBKWHC7yP6NJ",
  "key4": "4a1WAkdKVtpbPfgZuBUDH73S4g6ZiNWSJRETJUDTkbUtP9ueZ7Z2RSGxFzczsud4VarZC8CtidGoE5DVdoiqSb1N",
  "key5": "2zBcjsbBaVDXxyKeFxR3cMXTJwWD4NWEBuyefAr9qaLct9VV2ZKf9pfw23JxqcRemcNF5CwDAxL7ZnFWRvrYWMKp",
  "key6": "5W9mwSuyT766eiobVvMp3uVmqjF2jDWTtC2xFsLKf57u6Sut6ZBfgkXdWkf491e6kcvhwRiF4kHcPPZD1xejQRi3",
  "key7": "5b5tLGNZLJByRbEwaAucXBAYLdjqM6KvbuSyncfCnHiAgRXdnzpnUr8dLB28QRRFWaB1WeMGVUFhroJpLvMrw2uu",
  "key8": "26aXwvpMoNqYVSqT6bYGh1DBJbBSfmtwajSS1ebpPfiMLgVUGNbNc48b8nF5Sbq6SZPzPh5C8Lw26CWTJcd3eM5S",
  "key9": "3hPZiURS5YHR6ef4eNQbe2huY5ZD2PUp2F2VdqQ1Yj9yf1f7SbB4Hr4uDcxiEKhYvRucD7cyyLeVp4ZyPtgmGnqp",
  "key10": "khYshx96NntgckCZJA4ekFGgb65UM9RsJK8F4UQmWP9YZzCq6vVdte35kP9qXD6Q42DPVUWYfKcP5BHAproytF4",
  "key11": "4aRQEf7e1B35icTibNvTh8MUUp6piNFzB4N1F2TGBXQeTgAzC3PcuCcY9UdGqmAdW6M3WwUDJFpd9352ZWH4WkZS",
  "key12": "4mjjSq6vuY4XtFW6JyFEM8ZUW6YowiAjiWX9Bwhb7FxkhPB584nf5stD7gGSfZGoefdKxKv3rR9J5VZTQnZs9iqd",
  "key13": "3CmPMC3vz7rRXrmCL7LRC8jpNuDLqd63MwWy6kfC7Vvn4cu7iGxQBsho34xwh3ugqy88pv7Ya3BF7SogpBswENGh",
  "key14": "2zrmpzcUU5QVT31jxcNbiSPyhpZ9YBx5Yq15vv4UkXmwgrCvHCRAwk1MKapXhS932th3RWMAR68vMfSMjD2Dicve",
  "key15": "5XavwU7PBLn9cPxAhM3ninH1YWvkXZMgbPJoJM8whq9jzkvcDgj5patoFSsYvDnd8dMn5STEM9NSDoPAqmNHQ27b",
  "key16": "4siYin4hBJn4ubkZz3BJ2vXjszDb5cpGS8n36ga58otu9tjDQAuMhYep5zRG6mZLADi2ijKgL4KYAxecn1PNZKjp",
  "key17": "ooZgf4jMegg7ASMnNvFurCZAxskxwpt9EiQUuWm3yU8aPr6o4VWVBgUQNkpcrTLWNCShiPSLLFMCh7RRyHJQnF3",
  "key18": "4KnK9g3ZtTqSyVPimhLFq5YF3gvZaS9TAGMjrCbCvtXbJfLH43Hx9xWyYkQrG7LSBmBrzBGxRJZzh9xi6N3EbLqJ",
  "key19": "3NLj6GtkrdQX6AZ9PFD67Q12TWcoS5bueBa1JsSg7fN9bbPNQE1a3i1CVxpa7tJfSi7h4QxZ3QvP9ZzCdb1nxK67",
  "key20": "5RNBM4RTJF3pNck7rPdnmYVbUQVMP7kLvyMpb1nYWZ1Pb5KuPp4LLNv328MtxySPWedNLNXDZG9RGhvYxrUcoxfo",
  "key21": "5KdCsmDU46AvgqKWGdjJBe8virwWviKNWHfwzts4B5KjuXSiBUwF2JCTUTKX4uo2vLNPs53Pzyte3KxYnUCbRLvm",
  "key22": "4zVPKiuEoswaF6LMBnZRBvx1GjoLopLxFYHoJm2vFWYYjf4GFh6Wawvc61SWTh1yzxtzu84fCA8Y1RdvzNExhMWE",
  "key23": "3QQk8ATS4CEmrsJPX3Tjx3wB19LRSYB9ArQiTTJgLAcxjNbnETmRCoRxHZWhPkW6X8brWGzqHaaPBq87XyEavsvC",
  "key24": "qiXBL5hStPQ2nb2md1zYf3zRLAPZzsQ3RiHKjsrkktdRFwWaY1nSTzXTPFyJrCXBfyitrxqG3jHvgNEajamHMgs",
  "key25": "48iBTzVK3Y1oq8fhvmAAYgbDViWwpze8Wci41wcyQuDEvPEr7zg3Rqb5oJxjxRrmmsN6ejtzsbvJF2cyscxLFrEn",
  "key26": "5KzeJJ6ydq4X9ZA8JarBseKRKtDYkzR6Ae3w2PUrRNzBxqGTrtYGyHAYiRwRvXM1arbS6hDGXYoe95fBtA1AoX6K",
  "key27": "3PpKL5oAZVwQFuchFh4ujyNZEan9twm6xNcKwXfj5U6iF5qrRSEc84sM25ynXsz9BQMKqe2aXAEDar4JM48CbTqk",
  "key28": "yMH3pgXBoptkc7peWRbz1GqAgaChouA4ZFkwkMD69KroNuiSKckRYTWmdpVJw6HZtmfcTULa2ekoaFY7MkKuKLw",
  "key29": "3dbxuhgDMtsezTRczDoAeSFYpNTx2GvHXAXA9ZRcvAzEHZvK3FWxMjYatiEgvstETVDogrC2pqLXmpDUJbYeHCDP",
  "key30": "Pgisb2RGv7xh3gygk4cJeUQ1YAuQZummrY1CBiv2Pe5A2CY3VQaosKM1qZpcgUK3n7THk5iBdDHpQ9DQhBRthEm",
  "key31": "W72qYeaVxgJng5QLN9ds1H2Ac8S9Kv61mQy3VjANhDpPrqUvU8F5LegUdDarZB4hvUQCEDaRNbMghSAq91sejnj"
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
