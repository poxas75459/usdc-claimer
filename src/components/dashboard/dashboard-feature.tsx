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
    "3KTnYbEaK37UKN6SEYHBSb7T1Mg1mb93mthfgBkk4GQKeGikqeroRpXUc7kTY4JCSLEma5XhvobmUsFLUYhfVknp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UTXfseNMqaqaaJFgikrxFeAYkx3z1zWwnmEzHdbapAJjZbiUzh4F1Q58uhP61cjupbh4s5VNxkCtbkPFUvn78w",
  "key1": "633jkpfEsXB9N89Zd1sniks5vyCpbNvSznoxrkqNfn8bWi8otRuFG3rJNi6ZVTZ16VEr6TTU2jZRdUpBmLEVhDhE",
  "key2": "4nn49shZN76rvmoMeomxEKCBRmFER47VRpG9xFR8g5ZghocCAfXK52CCC9V1o5nLMdv3RENT2D7aAQ7xnyQv6jJo",
  "key3": "52P1tg5Mzo4udvKSesS9AGgGd23CEYsC7ZVPGJzYGyqCvBeBSpt1oNFCuUhN8Um9AUc7FbRd1Ytrjc7XTJHBWh6E",
  "key4": "67KTiaLHiGu7yAzaW5r4bymjpZN7qVEd2rEm25VQQbXJEXbkqdyPeTZK2WKFqtCWS2o5VXDU4iyWuVyZPkpf8C1L",
  "key5": "3vRjYGjzCX5SwyyytkKVNjD648y4rvxQR9VtYy3CUnnVW87vFLL6mfpyph75QhU2cnk3SxaLZVfNsdzr6DSvrR1v",
  "key6": "5yUW8XSHF6bpNVHxpZCNPPpVosungdMku6AipGPn2cH9Xuy3isgm6K7fnZtsSqGDtqCQLqv2kAwFpvt9dsYmYraW",
  "key7": "3AaGsTaF5P4dxUVCuKhd7TKmFBzqr2DTsAaoz2FW9hFhAdqCJt8uquay9MCE2J7VPq9gU5zfw3wiap4ghyRKGALd",
  "key8": "4WJDKgCa1e47CvUoLtxdTf6pkcPFAajxpn63c8Hh6pLhmpgsjxgYnrtkCq6fnabu6jxqhAqssNcJfCgZSP74wt5F",
  "key9": "5BzaxoBnUybwqtusH1WoVfHYYc1swZGeTtXdcnJDUV57HdzACvmzbyZEsqZSv4vA6Ht9fnJiJq1fx7DLtp6KotSi",
  "key10": "5gvAw36szd1ptCppWjAhq9Mh2HtdAAvU232owni3DeXzuoLXG3SAuvpxcCgAymEgHsxxVmSrsCx2CNh4YDCe8Amx",
  "key11": "5VVASDMDTT8mWc28q1TV7ksTCp1iaS4WYLf5wBXtrQCbNoDAgeDbL8a3E4AqcDC5D21aN8SKuQr9qydbWNFqtdZp",
  "key12": "V7sveGs55SoHxkqbAY11eToGB1kYF9XUj2CCPt2paj8GCyBNWkJPZmbr3YNkiuUYbC2MfvP4RHvJxBgwGhCmdmg",
  "key13": "5dYeHjrC8YJ2BbUoGLnNdn3aGRhQeQT347XuU36WvQYf8uif5n4RAfXJ9hU9ZdvQzeEqBaw62GQ9msWDTrTUgsUB",
  "key14": "5B3QKZ8V6s8b8UtXXa2ouB3dFFmJkzWFmddRnHPYzuKSgm4mt6DqAkLU1zzneRDCZidPikmpJwRkEozebmFKgJdt",
  "key15": "5RKeui6LvbcL78i8eHSJZSRG6sNCFWtmmQAf7Ybu2V4HMmqnR917NU29aq15giBWmcpAyMeg4uom1j3iV1y4kapi",
  "key16": "3CqzqJ9e9MejU1UV94g4C2mzsVPyZ49ZSVSF1uTWBSnDASkgD2jDji6i8cMyM2XHJ6LB42dKsGpZnnyrzh3CYwVd",
  "key17": "2Mpo51nZ197Qa6ym69mvR3UcMmtXBGimhbmQ3UipD3nnrbnx9xpY1S976gkpJgtTL5gunUtgoL9k9QndBE1s71wy",
  "key18": "3fNiAxBunaVkWDFWgP8DefBQiceAwgU3cj9fYhknWj9YeCpGbLwLu5NuJTXJ7jVSDAvPqsHgWnGHA11EbBRJkpPz",
  "key19": "k6CRipoiXgbqSjfhd1ny4jnHLyaCtywSoTsKBk5xRfETpSHpscS78JvDJX5W6wSgCNK2KEB2v42MZMCjBMHENPs",
  "key20": "4moZ69LiijqC6nxbWAKcpfTVRPCqJFvrsGhK7qnx52WEWjTiNcr38k2c3xjnS5Wco76GvvMUBTVExxmz88sZiiwh",
  "key21": "4WPfzAb6kUGhY2AS1tJasiirX2hivN5f6igS4pkRCQvs6w4TgQtLsi4SfnT2yTiRpFxyHxZtS2XNpZmGWbkGPUua",
  "key22": "5hirF2sqqcH3YjvVbToh1N1LnMWMJ3jbxKgY3zMn72d4SqZuSVeX62x2kSMN5nm9tfJpRt3pTrzAi2kx9Li14UQV",
  "key23": "3feSHQr4ob85W75jW6ivK5oov6cqYVTMPMV1ABu5uSYnMpNF3SbUJkfNWHTfD2NnE8ZXpJmKqb3xNfTjHme765Vy",
  "key24": "ap9SJ8muJ9kG9bvNENTUsUTQ6n2nxdewNDL4bkyCGB7dbRvjVruTeiXyX21ARz7gNfX6Vve2Cc3rnpq9aQULCF9",
  "key25": "gH8JMpTdPCTuFPBuMAD4oL6pPLzFkHarDEE6ZvKSuRRh5iqztCqTDeTn6bKetye5tkAt6FKS3RViB4ArcSNrMke",
  "key26": "3p9TFARsvmaFdcNLWganCc2DXd2CnzgS5TmkLdjobRZMFjdDCgpAM7VfV1pJ2AoXfznY3g6RLmVZgckbLdHEFZ9Z",
  "key27": "3GHThMaZtnzA7cyD8q1iMFdSZS4vsoc94XN7PYVos4B8E1PbNCTZf7sdis29S8EbvL7D49fk54PqRMipTfhBJvRM",
  "key28": "28oANerVj4qcGgYfmhCQVZrVR7ZPQ6uvSr8uMtnPSfQMnB2n7kZJVAHRrQxxhFmR5k1o9efAX1aZZMpZCR7L6TsS"
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
