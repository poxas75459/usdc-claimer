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
    "3V7HNSSXGyun7znS3G4E82EYLz3iDfrZz7vt1CLT2gU3GE8vGQzQRWsoYi9j8FtAtRMGHV4tQbmcCLD4CGrqa4d4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vNHRw1L1U1jRiMxeNVZJBqdrH6NZy8iizYM9DXWdDSwErdBw7HUGvb59wS81DXT8hj4Y1kdqaEN6xLj7fyfUfA",
  "key1": "WduBWBahY9ZPPjGYvLD4PmCfmbEtWHecybwu96QYk7tNtAXg6nGYewuJ7DwCqLcwZokvTDvdfLwKQ9xS2Bpo391",
  "key2": "4Km9iTwatu65SECa6WoRnz8LqjoaSVrrvxgQ3j9qSibzgMAkTN9YE9ytt8UUczQcocnca7XDUHzcWe6vK5iyCJsp",
  "key3": "5cqFZ1xdi4VEdBq6VHz4WdZg7zWV5HraTzfPhJnq3dvhRFtsojzeWexG9jBWCCZNkwogzKa1nxt9DW5j5wdP58Pi",
  "key4": "48Ptt3de56C3jsXA6rmjT84S8FNneaj8wFbkoghtwRbkqqjR3LD1iEwYq69FSuuaM45KtFr3KFVxMyAMiBXFXDRb",
  "key5": "5b93NSrEUHjhWeDChYVHeHswemRaKAuPk19smLSgeTPYh2UcnVerDWGxzBkofexMK8UbdyYoLRcPQdt5t4f9mbid",
  "key6": "5Dm9CPNRg5FnWc6NyF15SvWB9h8A3nxTG5LFJ4CREmjPCmX5BVw3cf6FYfq7adWrAh4Pu6trJsASsMspdyK1hcSF",
  "key7": "3j7tuZHx7CD6uVfeyCBoYodZZwktUTrNHRNkTvWgU6BYscYz3k9ZZgSLhfp9YMZT8Z6YAQr3xdjC22QZG3MkbeKC",
  "key8": "njdZnvmGg9aqkc26QyuGE5MqKrWoLY2UTMygQvJZWgedie8We1JTvyCXMzgAVNvktyUqPPvTYbXzPq14WZ5FS6M",
  "key9": "3iPjsefM9NVwNkkFLMdN7vC89dgGUK4zXF6CsSrbrRqbuTu2uoxFsctCTgr3p8ABjBL1Toc8dfnJPoPJcWNv8PVX",
  "key10": "2UJMw8yeMQeiwzSNf7jJikkLKSqtfEPNzcrvVwQUs7XDhi1N4Eu5Ho9J9ZVFy44f7iaV2ybduLHshVpqVA66mKgi",
  "key11": "2f7ewL5oBWYn88mZiXSQxH5WfZ3WJ61A3YGEHKd8mq6635yfCnReNgfZoeKzKzay5dVZ9TJae8UuxjPqGhiCYpi3",
  "key12": "B8RpeMTtQ8pXiKrvhSshb7x8kgmYrgby841gaz92yFcU6JLDFZVYHSUSqSy18jHz8kGjySXNmxahNpcTQCzugh8",
  "key13": "35VHm555zrcPpbigB95Mgua1VUd5CzRNm2XNLgH7kAs4Rf147EDwq1kSmMhTKjvWuEH9tfX4cBHmFC96JTr1WtjM",
  "key14": "3qK1HUxJNFh4qeFUhuqpcsq3CP5CVU1rikxYNNFuG4mB4pCD1UWSAHwixafbTmRkXmRv4hAoq4msN31LVquoamHH",
  "key15": "H3te4zXBrmfvmDZisMbgMr3FKeviEHJomcua6P4cyZkoUmmjzJtoQJsWv5BoCaAb3RzHwhHW9bzCcijnDyFXrDW",
  "key16": "3sMx6jHzGTRSxbeizeMdrMxdX3MJnoKZ2RWSHyjRx2vQphMoecvouNv9y4Rgj37SN5QMDgR9BZXtvRfAQz18iPJx",
  "key17": "4fHNFCjvwpNfoaK1j6rHbVbSjQEobKmnDehRAeiFtunLydpUb5u4GSMcPcUMNWwY66rqSBHjKTCHCS8rqnyv86a3",
  "key18": "2daRsqVy3oyPun7ZkEykhHRzhcVWRdWWA7DFnY3qwZ279JMTJac71RCpvfMkrr37YXAXz6oj6JAwCAPq6Z8MimBX",
  "key19": "bDMs3GR8VZtEUHdFWdGMqN3cFTFkAHbgtwSqvR3Rv5Q6W7S8vkqHxqKFFq2aEhiBd6kb2skdqQByuMTv5nM58db",
  "key20": "4XNRvEDmnAYmsCqJd2vPRHFppDKPq6BPQpzjZ5shzNecMvMceimdk9f2Se9xdeESur662L9RDgtHyGPViWynFA7A",
  "key21": "4DJLZ5wxLcigMFk7C49V1e7GfXRcH8UMmr7cMZuxQtuEJ5QbKjAp22Si9W74hYtP7oEnczoPPLGveBLz8cxGc8sG",
  "key22": "67RYEV4SRQTkKQeYrqK6y6g1Rk55EVwRJEFQ9JYx8UsYoM6q41Gfm3REW9Enpqs7myfxWLq7sjDygcsVvN262V93",
  "key23": "pDTS9ys7euubR5YxhGxrUx7tz5maDyLXziFawgykHEcwejbeSiSFtzEL4CWZ9ATaAXQm4HBCA6LbjV2ZkBFegDu",
  "key24": "67pqjZsDCE1S6yPH3jBpqvvhyjTg1LehZDhpHtHpP5cH1fP6DZLvFrMp4yNUz8KQyh7xSCas4d77DwRKogG3nVs3",
  "key25": "3x1zSFT27GhrZcidefNK2u8zq8eeUrXPkQRVHyrK91S4vMuHRCHUxwtreibLy7ndkuWxcgRQaZRZDJyaCgSJq1mu",
  "key26": "34kv4Gns9fUqMzRCUavHP2AJV2VXQEEJjG9fXBQ5WHzm5LVam4baTDQKuQzCiCgpFhhenh4sJoDzUgJjJjHMKNhJ",
  "key27": "3C6vuUhsqr9ybF92b1zSKraDre6YZQR4qbpLYpZFa7Qp2eywXpQr8KQGc6VmtEuaAaTLmrL33wmNnyQVregQ7EZW"
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
