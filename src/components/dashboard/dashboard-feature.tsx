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
    "2suU1TxkVx1kZ1xWuiyBs84ym7PmdQU6RxHdr7oA4pzSCRijAobxRSXF3xuTVejJuaoVp3CQADbJURjSkWwevn9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eoSv5phrDWkwofHMMHk44g3X33qTFhykKEepVEntPdP3aPwzRv5E7xQWF73wBBK9KvDwNvmrX1nRe5SYKeqkUt",
  "key1": "434RBc5m9GXtgSWQatVtmzJeZjSmZiYFCBfLppee6QbCAYvL9hyGKqtVTP6XBfRujkUiT5MFvWF4QqcyWvif1D6H",
  "key2": "3sZqEYAHXj5ex86WiFCMwZtAEwp8x69CLp7PYmvvrjMgt6QN4JDE7HtfUKk2BxThwVmzYmAzJPdMspoo9WP9C5Vj",
  "key3": "3W8JTVdBtM2wTEqsSRBvbNsm4cNCPv1QR6B5icxRQqBzZp1CM83i6XmjsoUC21sdSjb32Vyyu5HXX6X3wQdJFKLz",
  "key4": "59eWSFAPQzAWoih7Q5r34oiKaL9nYXTn16Bc47n4cFwGeqdgj94uXBhZmxXi8DqWSzqqQEDiuXtyuYRqWibyLTi1",
  "key5": "7MqJvwB9zE3d2LRnUjKk8okyJAQixzQAyJjJJwE2MTUECtCtvkxoTqFqM9x4WYAW8sMnu9Y3wm6SHNpzNsuSBDC",
  "key6": "pmP9HhAMDY7etHkXQrMNenh2YVWqpaUXsncr1NhybVLJzTdCbtkKWu37W2JSHGoA68NPDisFFNKuU6jiqu8SnHp",
  "key7": "2vw3pqogYTXXNY24JdUdE9TsE9M5uH37KGo2dvzMHFmsHqDhXjaX47Dd1bqBidTdPB7Ya9WCkwUAdmcqxyU3UqL",
  "key8": "431B9k1Qsq5gzohVvNomdVot4PioPqLp4hLqQLpRfWqsSfonmVeGErXavVfBb3uCWZAHSxS1YNrwMsxvhDF2ERCN",
  "key9": "486VtS2N93KanbLuVSvVPUarFVff9FpbgN3KU6vXnn7rNc1C7kc4TMNNyn2LSjEsWEcJeiQD1JhmcagB6RaXvGhz",
  "key10": "2Hg88u7oVkuKmXfA4wsiZGie9GJe1LxHmuEDbcfjojD6DPfVpYqR1NUqE4EbuhetcAejTEwEVSGDScPrKDj9iFRq",
  "key11": "2VuefDemM3FHHcXq5RWu6ED29A8FsPvZZx1Z68FYC7w1JfWuQGJ5nuysMZdGG46xFjHHZSXnzi5mYoF76Waeuj1b",
  "key12": "4Fw2qquKyM37kj14SWAJijQfYPfy2V4qezrBb9ji1X2RBrukNMRS8B3Rb8n6FqLwrY1qjn7xek2LnpnNghbmMLpN",
  "key13": "37RjaiatTSYi16xUNGvvBCiqR39cdgheoZ2qU4gHcja1EuKJxiFmu2t8UMdhxQd25PEZnKAG8gkCcisaRV2oaqA9",
  "key14": "58YDFUHrUBAb31R8ZiJoR6qqrVDXZDVw9Qa8XdmsSdy5zwtBtLsawCYNEJjTSWkKb2V2K9EVkdm4bDNwTRHyZst2",
  "key15": "28cMU5UmCxEsqLfuYHt1ajTcVMxCUtdDFR9n9QC3YH8GUGJ4L6ANV7sr9jjeJ8SBM2paUJE1V9wx6xqV2B7opTwn",
  "key16": "Qtbh1nZMjkkMBA1pp4CXH9v8Y4eyAN3oj1AtnhKNaEQzfWL4jMzTAYdhKTGLCk6FdeoQtkum3jMRz2AMWMBnSTY",
  "key17": "5SLHPjb45Q87Hjjs3Bf3PezRz1U7k8gaVn97B4atSRSGKwetqqnsCp9kvBRWDFxRxhF6v8T7Kv1smtTR4c16ZLpf",
  "key18": "55tyvvXQPJWhQNTeUKmHZG8qb1GXoNzDfWhj8bV6tMHp2KuNpAkm7ad5kqVaFMsnymLiLBL5rG3wnwrEetuixQJL",
  "key19": "5WRtvtJzCwedekj1iFPXKvXhx8qebATiZtfQPaAkYpjJvCEkAsEc2BTY9umKL9znb9xH21YhHdDG5WUpoZikvJdb",
  "key20": "3Uw1VLJdKscuDqiGwSJpkEsTccuJV6WRnCZqp4PASy19bLGDLRMyyLSsqRdjACfSQTpzpAvMn9XLXxAjUDVwpZ7y",
  "key21": "3vwaSgo1R9GdW1Hy3qaktURYM48VdBjETvB95YfAsP39g1dLdWcATwiYsgAPZi5fW5rwbBxVjmU2KAgqw6Drwbov",
  "key22": "rHY8p9KQ8MY1RWYPANRLL9wMPuU3WSCEzustvJoGnVLPHQbtX7EtghbyWdU5wZiG6WQ6GTi4BKkbf1kdb1bvVoh",
  "key23": "2XZSUSDvcHRM489wQQE7txeMzUKuEx26uJbiXEXwX9gz5LaQSSEmkWriRcUcBc3Fkt7KgDbvyMa1HADp2PZiYHS8",
  "key24": "2Kv16ZLCoWWhRfdUvWikm1YyCA88aqTokc7ggvfrLwNTLbUHQfWmymh1rgPeRnrvjdecqr5eZP5KRRRUw4GvxeLE",
  "key25": "45e9wihZ3qAG7NWyx1suKxU1ueKAnh24gQbQAUZoxb9Vbvr2zwMP81CdpNcJ5jQmzAF8bpUUm2PuFMsex6bB18PR",
  "key26": "5GuPrZD56TuR7oYrAGBC6w9KUcVUqoYb3f1ExHDQV2kHh2rz7SwuAGJerWDCeFrzcb8YWmSe58LFFLqTPAfyzm2K",
  "key27": "2rv4drJ1mh2Sf7aKZHponVxJqWwpUrnbmpRxNYetfAHSiNH3MptEGjqx9VHCdDB5LAZaULCymFQNUXMxqtbMup6J",
  "key28": "7QjXpDEwVjSrD3pb8UgucpMRRyArYGyXK7gEj9m3ErsYakxhW9mZVW2jsmjeYW7equNSUdcBDnB9KQmPY2TY5Ch",
  "key29": "57rAi3DauXe6YWh6zhvfWZjVHg8C3nnCcW1MEVUZEukSsBYhHRYc1MM4DHAzP47SqAfJUEp3WJJeCGvr6snYUUzi",
  "key30": "2TCsEy5HNCsu5wzwyvwGWsu8PmUurdTZfCYSSxPPx7LjfLjwz5GqXccCPVk1jDZY18TD7Rc4tA5NFcCrYyqiZn6c",
  "key31": "51Q81KvhcHCWVdjMncHw8azm7QfwzhMeCxT6jeKAuJtLBbPK9rb8TixxBdiH3QCoLfJByBNM6wxL1xn6axvDACi",
  "key32": "2fWU2YeKJRbHWcZscGz8Lgi9C9XEq9UrEreg4NQiRAFR8cqfCJdXtjnh315d23FoDM2MG9dwdA2iXzZunFyv274D",
  "key33": "5nHEmPocsSY4DaU5wRgCfcphswGYWdu9nzKPRshE1fToWar5rePQSqcF34e1Kamn2Bk6AYQTQH953Y9mKmNYTjEF",
  "key34": "5GwZgZBmK2hHahov2VBPSrLvRPr4VdMsPuFsTo2SSjeJ8mDibun77X8KGsxwa9HbBYZJDWA55CyzKW8BZfLiAu48",
  "key35": "4mcg34Va6eNqHqQvwuSpun9qmSyDZARWtf2568T7zTp2ZNoEBpYPiWaPkqnNnrD65hxBczUL4j3KQhosHbbmtS9Z",
  "key36": "4X2dz3Amp4TWoBHbiVtHBj1ys4ZHQu7fuvihP5hyXZrFpzVgihYPy4dw1M2LuDEPcry4i6msMMaDnGqFecgFaJCJ",
  "key37": "3obCRLYCnc4ArnyC4VZHdKpFY8ZSfBcTADLyR3VNTRJEte4oj6xAoYc1d9WBaYisbXqoquSM4BQkSS85xTLj2zBR",
  "key38": "38zVw95QxKYVWKDym8iraK2WJNR5Fd55L1JAnwxDCZSg8BP1GJQnP8aq45Zi3AZqZ66PrMPcouMbxvaPeqbQdzi4",
  "key39": "2jpmSg2msTFrD6TVJnpEv67MXExXVeBsu2h2vM8TME1d8YKPw4bKWjCRp7eTj3mhfYZytQucafE6C2w6ytLMoPRj",
  "key40": "9ENaq4tPdDAm51fMPbETZbFN1ntiix68bTwK1xT4CiQpaSidvSqvwYnAyK8TSCo4LgFSHjUHJ9dgHqKgaJXTnRN",
  "key41": "5BvHxiatBaduJocfmMzDAuU89WGr9fZoHRF26xipfFdQj7mPgfgdrYNsoGPjh9EMoU7n6H7fh1y1fqVuF5L8Rg8N",
  "key42": "3TtGQ1HpvBn234Y5qMXijZsVaXjwmDZchLGDQgQNMXxrGLBt1YrqzKCstjwMj4iVhD1V8exeLgV93jdTCAMWCTiF",
  "key43": "ntZcsMivPMU66zTBwj4V9qa5JxTtivpNmNDurfsVDQWYepjM23ebJuTSsDdnynxLKnhPaQX9LP5cNb62mAxKYXZ",
  "key44": "4j2APW1rUZ9sqCbFEDUHdG8k8D6rgiGG7EH1eoqf1swcKQ4kWGSdePxh8M9Bqi1yj82AqHmYHHLJj6f41e7M14qk",
  "key45": "3GpwqTqSCtiayRjyThAeBuS8nDnaJhoFkoq8EbepUqobzG1RxV3bsWW8Ls3oSsjYXUP2xWr73LTdE2PeKe4AXjfB"
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
