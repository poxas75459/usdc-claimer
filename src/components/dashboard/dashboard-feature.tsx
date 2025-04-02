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
    "5EruYw2AekQNRx2rKRyJjjeS5rTkmh5utez9T4BxEFk43ERKsB231nafmPEZKsP7i2vaPtxhnwKvce6S2nWBLr6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfCoUHTwtHyW4wXLHAVD4Vjne8yfWwXbxjQxXoYkCvK2pbW9gHPn1XHRdtACcGaVTCGwPgPCW3KE1mLfn39cZbR",
  "key1": "3AbRzviyahud4EzW7ogbyTmWA5KT5e7ybXE4F4id9vFsxyhA6LEPfTkTHp6PdUSnVoiQ7ybpPgs3kTwHEGp4Q8FY",
  "key2": "BN2qfmJ7fwc8wmTBHDUSKAZwxQy3DgaryRudZ2Xhz6NwWZLTdU2b4vxEDvAsPNQqcp6KaAEDXnQmXQpKBgTbBeJ",
  "key3": "2YYLoXCGNdhCuvevyaxFsSaZQT31oFf8p1oXyAGY44veevDe3GUWv2zQJKFGFA73kdTrMGPbLqREryCARQewmTSW",
  "key4": "5P4eiywzoUMMpDwEXiMndgLxsBS6uGnzF6QL3qnwkcUZChdegoB1MRV2sCByd352CoQFN2gwRZZhv2fHJ5Ae2E26",
  "key5": "3E8xSkb13poc9EKpjMU9iH616gHhXFg5zyaExqy3wG6mw5tp9pn4d3qh6uvBhwtBXhcQGLj8maubxKNd8Rdnn6ZY",
  "key6": "58aUSN6EZrTaAH8wairPA79TUpcQNmwKaGE3yXpQr6fGBLLkuQ99VEiZ1Fth8Tb6Q5tFxK4TKFJkYkXuUCeD71fN",
  "key7": "5EzyBRaYFmtvrow3L5osoM4wWaxS1cmXUWtVJ99x2SRNpP98paA7APRfaFiPgs6wfWFAwPFVziFVdkgqi5KeheXa",
  "key8": "2dLVgLaG3sePURkRRkDSRkLcZbZ7YWJsV2uVQGotq3cLU6qfsNWBZeWKVDvhxbQTwc1VqHxe2yoBvX56srcaAGph",
  "key9": "qTBdJGAxTum6jCRsAs6zARiDtUFFQTvtzmJuT8G26NWaBMfPWLbUeamcwAJUx1j5UsBTGviFGdW2pBJQcvhiX1m",
  "key10": "4brZZN8ZxCWBucWF3TmEsmaH6qNHYRUZGbf6qt42tZG9MZ2Qe1RfMwqe8hLvbJtfabH3Fp1vrktRhW6A2Xrr22wx",
  "key11": "31XcyeAKjLhWvfLa3T7UMYRAGoptRNiCdDSWpSs5iFDCtsWsbDCpNAbsDbFfRoTdqx7UqKptLu35G1q3vmjYmWgZ",
  "key12": "2dAV2GSvTb83wBxc3vGjVwbuz55tiawiQsC5ebX8KDPgfx7Ybft8gyqTNAMeypSw3SZh5BQtEXjGRA8uVxzeu72b",
  "key13": "GdygsfJ1mTyziNwxUoquc1gcw1XCBTfYX2eZ6QBgS2uharW6X8JioR6hCLRPu27L8zmAYQfaMX32qdbcb8kAcnR",
  "key14": "3GsvR7DzyLaTPnMdk96jVnCzkcmNfdHnEndvbQAMcNhKSDGRQ17Ji1YXyTZBiHhzEYjpvg3cphzwL26F267WBncW",
  "key15": "2AU3FGierT39JA4z284Z3YZmD8QhAT4VQqXGy7DQPc1VPHQB3prNXuBEkbfs97db5mtLmydsX21fLfpPn9bmPeL8",
  "key16": "4VMXv8XqnCooemhLraWnoiKXvVeycXQbDdVCiYYnMdtJ8Ywt4mREY3WedeuJ6X9pdC6tEqqsUtCJGp888Zu4z7vP",
  "key17": "3ckTZCxQbDuDev2GVkBogECpvjJTGfqGLkvWZpU22Rf7j9MzL8niGo3JfPWiMfecKd3fwzR41z3JAyT1gWx6iSVe",
  "key18": "4q4BfiaRG3Zqnqh9T1hWqNfy7ps42Rnb4XeYb7Mi6ibiRdB2YeAwPyEGku3QbcqXNLsPu4cWAq4Q1wFdccAxGnGt",
  "key19": "2HRVd3zoM224xmuAiwAkgtQpqxAQqHtKHPmgvBiEVF8JguvgRwxHGvgXg93Bwa8g2w8Tx1m2p1CosCktVDyj3JzW",
  "key20": "2qpvQuPyDnJDaAxsnw4xLJ4NiWo5t7vb2x6zPNPU2ZTV6z2u5K3gtUyLgJWPnDNDZZa6QwnMXegRWq9cUikGBmR",
  "key21": "4tpmBP9QakSUnWxfd1aSBTCuiGtdkWXBdGquGxxDZ9Jn6z6n257UtdTEMWUqPJ3qGQcF4J9ivPUUAMhgxgV3NxeH",
  "key22": "BVj4tXhdm8Ka2S88uJnicMD42DGgG2D4XNbqXeYcXBTXdaTnVPwhstN92mPJ2XtLPkWzeHeprSF3ZpnFsitJ3Cs",
  "key23": "3Y55SQfMvF2y7v2evAcxqqLJFGZnYh2v1zbEPF7UqDJpAHTp1smj2RgYg4Pn19zzW7xFt4yY4VYDUKcTSNWZ5h47",
  "key24": "6YWVPEN7mransa2nrPKutyjryUfpVfzTCUTwmuYrQgphWvciDKqn3YQP3cLBkJJZmwb2cKnUiMNP5zjGSvucqha",
  "key25": "2Xbs2iMPCkggy6XKTGq44TaJjtgEJhqjnhYLw3Jivs8R5ziCxARF13kZiqyuoNVPubJwFPrkLCyAFMxckon1u4q",
  "key26": "9ojGa3CPx7Kgu4y4qHjjzWFAykoNJwUAH2CMKnGWT2phAwBDdFBLRQqJLgdBnw4vuuMVgzCEL2ZrZv5jhisgG7k",
  "key27": "3nAfyiQ2VPZaLtsMN5Yxpqk4kHRBC8LJYLWbrrh1z5ZuufXciBE4yq9DsPJP27zZ54rzcHE6LphNr5PP5wtoB6jN",
  "key28": "53pYoFxLLX7DtZJ1e2Bn9D2n3ThVYSqBB2tHyTvk6a51eciKji8GKEYinMNZo8PPppLMWDE7G86yMHLamijXSc8t"
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
