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
    "JxyUZdkNTvL941PrcvGfnDgPXstnxg6sZAsDt9tBqRZaMzaQxLaHHMsntVAcHYbbMii78MJQzEYMoiYG37VQFmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siM534npsMq1cY2eTZsGQLVKptuoBbv7ouH3KjFfjsCuTzf5PD7Cmvn8C9xDTu6u2DpggogPpxow3GVhcWEjXTh",
  "key1": "3AQa8fVeUkFhSp3p3h5URcNVRszn6ttaTCZXeq7mCQN2kQRnLoK65tWD67NARhPmfKmUQePX8HjP2crcmP5gHjPp",
  "key2": "57hZMJPGCM3pRHvRdL4C8q3fFNFVyaGFez8N274FknUV23orL2ivhGwv1xwu8rRz6eKzQw8czyyThL3HL5hG1fJS",
  "key3": "28GxhMHHaaShyCDpDrvSoUuzjT9bnyJqyfd8XKEAMnynseMb8KVE6Wee2LNV1dh89h6E2RfgSy3VNmxZm84w5pxJ",
  "key4": "o8GLjcthsGVjzRo8SJ3gPhcZCSAbHSBwUVxahCFkNpgLndA3TTxbKoQkNMajg4qAXyk7KRJwGoMxT7ryx1LmRTn",
  "key5": "5UTssnNXMgq7VKsagK7jWCNKTWzvvkEdbWd644aoyGJhxThaEsAHtZPJXizv8g6gESNCsyKJBuNuEYhN6Ha92uNK",
  "key6": "5RzMvE5rScKzbZ4BLo3aVDhFx1NzDaoBQFn3PwypnSAGg1SjpkuoHvWaWYmJ9Gb48Mr9MwBkR8orgfVbbuMixAv8",
  "key7": "DwskTBubNQjWLMbByY2erniPjioHat8m2LAf2S6XoT8ssdsK7LT5HA8zHkaEANPSB2omTpdX22MuAESbqTgrnB3",
  "key8": "49Pnvhz8EwB3LryNc6hXFWdaxDLQumGiW7gfcsPd5ZFh8QBUySVi7PRtAuzruNYUvWPJToz2p3ZY732sfHBzxKgP",
  "key9": "RLK736kSKY1gMMVaFZwvqD5nvYQSDp6LjtNMM1zH8NwEfx5ua2cYmJnjsAgkYWVCbDxQcbBEz3Kk67WjNXWdrxN",
  "key10": "2yoKpqDpTAArJosDQkDs3fuF9LReXQeohEQJFt222uDd8MPCDNvBobPbT4hEcXZFHQGo6cdFX9Xnba46S9hw43Ng",
  "key11": "5L4WuNDqFhorT7Bd7ozKvCUwqcipkex78DFeNCL8gVmQfvJfUX3UX7EkJyQU4CmfPqmkzhDhtQcVhKWBF5v6BHsM",
  "key12": "Kf3oiJmMWGGEuiwsNDtFFyy4h5uUvLmmBs4LUUEkPj3FkhGiL6YGRtnVELJTb4o1w1EKN4R2sFgB23CL3RYo6DG",
  "key13": "2nePd5gV67dKQZPcXxvgfDY1KP1WK2BriXsxrsWTjCP5aSS1bycitCC5HRSzxzEjMd8G5tyJyTUQCm7hiCHcvdJF",
  "key14": "3xDTbCZ32UkhWF4QzqavHsURAnXNFYze81WmdQCvehQvRUegGig2sc5cW66xCR68DW7y8gZVa3yYjdJChzF2k59Q",
  "key15": "5HH67rjNWJ1eRPsPqkRTDx2hPTBgP95nGhpyjyhLa1hLBL1Z633qQNuXLWUTyqSWdLz2peQdtWwysPByhebDvp8n",
  "key16": "4qgbtoXNMXi8ceJRYdP36M9k9gACKjjqPgc7nrg1XfkgpTwLqexKujCGhpCXKZicRSvh43FqXEwm5WPJQkmqvWeu",
  "key17": "2G23PC8M8xzTaZrv8TCgBZmSsWCUX6smK4gYqUv56zxntrux9SMo2kRjs92ajouJM5J3gzfNdZ6tEja6Q2yohWTj",
  "key18": "wGspaCzrkVXg7JtkAV8TNuDLfiyMUVpr9oWyJEMCBPNaFcKXZ23a3Di7CRyW2cqHkcKnSPYy24YDDGA1m1Mxxf7",
  "key19": "3BMQq2McyF7iDcNtUNToEqvgWAEi6sJE86XTqWMsLWZH8kcZ35jPqYBzvGJT7m299akQkEH28HHWKMZD2tVpzofU",
  "key20": "58aFwHbTx7BfujyPjjJeHF4N7P57zvVK3TyUWQVvhvz4Rkr5w8VBzptptJ96uyYLpNVUFK6uCcabyTySCbGVjjTz",
  "key21": "2ys7eZdqN6Vr1TUFkEDa2Y9grNEb1w4M2oVxwF98Dq8BqvWTb4UUM2XP7xyfg8HwJkaRFVj8uQhfpnnDEVvtztt8",
  "key22": "2EgZc2xmPQ8dQNAd6PcHudazN1k85at1ciDRuBWQvuFDaVdZyCXHzBLo5wWNfjrtyLS8aH8eXQSmK7CtntdyYpWJ",
  "key23": "5cbH3wk3WbAof2GZnUnadpX7RpBm6o6Ace9fDdmov52h1tak7dYsFH2PJwnTZCNkUEmVEnJaqJfUCJ5mabX2JmnZ",
  "key24": "5vZENL45WEY78LWrhewMuB5BQMCM687mwFLeFnxhXke1oicdWzhQbtasQn7SLFjDe4vpPU6FBQLxnk4B4ShewTKS",
  "key25": "2ySTieEZihMQNaNPLJtYUiVbKkcNYEKxu2S8Ge3DrCEgMxdFPMpv71PUmMcfJEsJDUT5CFrn6A3WmK4dte8SvJ2j",
  "key26": "4TbaM9fHET5QKdEAzMUcRBCTJ9ocENqkfckKPvBX793FPc4aYhmTUpdSD7MUSvr5q1gi87gEv1hMBmxi4GJqQW2F",
  "key27": "vC4vNFg4s1gNvj4b9uz1qB9sNsVdNKMLXy48emKVPJajYaU3K6w6rXRZXHC348ghyGrv6PMTScxhvud2bVGz8h5",
  "key28": "SrBid9Z9kZq8XNH2DuK9Mvk79yq8cSCczdfxt1SqPRrACshMjxRh4ZPi2qbbCnbBkWKLqsS8XshJiacCqhbz7yP",
  "key29": "4i89Q4jSRoSvTwHRkb8gsPNBGvwV3i4zHWNcynxyCpMTTyswqRvmxJGRkZVdGm6JTdbKXLJ3KD4yZfDVFhG7HyMU",
  "key30": "p1eGTEANucoSybFHbGXVZCgWUfMgoTsekGrMM4bSxbhb2tLvhrT2tG3xRwMbr13itJqRKzTfU8S4FfKy2eNNwAG",
  "key31": "wzxpkxUhUXbamuMdVx52XauGR8cGVtKPcixLxFYNh8pQgPLrkU5sjCQXYENpen3Mbqsz86f1HvPhPsp4Aps5eNJ",
  "key32": "4GTpvaZP5zdVY66xpgMidkAXfWbhKifTSNfpagLktNczSpyffM8bmpJYzjZBSqLemf3Yw2eqzMrDuYtNeePq1VNq",
  "key33": "4UyHhDtRMGbfTDemDsN27My2QHGSZ6X3sukRGyP4SPRmu9p9RAkq3gQz6ZgpBMvRdGxAa12GAsPEp9TMxSsCK9BA",
  "key34": "39Dha8bYkTXViBBTA29XnN5bGSbFDzrrxAiAHsRShTLbWRf1FyFx7BugyZcJAfFrCg9vrE2Xy4VeJRDf24deba7D",
  "key35": "Fbe37RgXXKQXcsrmUc2i3R69aaGyJopTdNR3VPNs35MGmudG5gPx5ZnGRcqEEosDGPPzecE6eEx1LFiPQ9zBRb3"
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
