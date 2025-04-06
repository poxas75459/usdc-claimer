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
    "3yjfT6v9N6PfcNUBc8p8LEmQwbA3YWpxffYbDR4ZbtGq5nWkUBc3v9xht6NhFz8n6CJgRMgoPoA54XEdnKgEotD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfYCUSp1n1iVBv6HErTRFGan1uw3Xud8KECHpmpBHSUfVfqA5ACqGLshEbBo3ekyriKGcZdXHedzH9JiGethqY8",
  "key1": "2eLVBsvJHo3RTgP5j7Q6qxLceNUUJsca5He4LMbuYiYMf9hdh5v2Mc8jv482Nqw6jcVwvpfeyRcmG2CZhWjFLf2a",
  "key2": "3jeEE6w3w2jhccVimUB8w1RrL8HiUL2Us3DZmwsP7CMkmfFRdgq4nRPqFjXGVZSPGh4vzKXhHcJuAchfPSpTt5wa",
  "key3": "vrTBC6y5dTQXQ9VBa567m2F96x9EsZna1haH2fTxQWzU1nmhmAZi5XLfsxzgWAm8a4uN5QWJHLYj29cgDxAY68a",
  "key4": "39tKnd1MeNFL7fkBZpD7Wer2TZGo6Y71FJioKs4AnsPpsDPCAdpQwujMTcGBbVHnek2LrjUfAChPiZym2AGkatC",
  "key5": "5eLeTv9CHZp4cnj8rdbpLy6115soQm5dCxfz17thuSuQ96T6eVqNk7tWkdMUxzhVSNNe9185gNS4fefMKzLfrxcr",
  "key6": "45DRU6WWbC8MxtxAMX34uK1p7RQ98ULzfvZJ5QmhuL3RwzkiQCWGA3tCbmaYkaixZDbPHGVNqYxXiXwkwVRPeFq2",
  "key7": "21vGzfWdLRBmtfyGWCitWvqFVbi9aMoKiRgYprSgFK9cjgnrmbhbMkbrGQoLMJppYSFkj9JLC1PnqWja1eFXEJ6R",
  "key8": "5cdnqyRUdNAVYP3ixwuBA8qDKSbK8EDoLd3Qvhiiju4VMAMQVNE2cd3phjVx3aP1GDJux1RRzNE8X3hHqda8pi5d",
  "key9": "3CHkEv233sdHC5cRUmzPyuftMxxbc2PgHT5ai7rT6piKgbTqNKJYKejwsiWjBnoRSugKiwjbh3SWtX8MLwKH3RTw",
  "key10": "5QdNNittBNrtbw8hcQ5G96xSuiQQmTzcuXFBzVearR3s1wv8LFFU1JM66vSuXLtZqt6NwD9B2KkeK8kv4pmWfRTX",
  "key11": "5EGCxWuMB5TwGmjtgdqWefrUNoh33q2bcMuXnu82KAq8hgPaWVV9viCZKxooeNXcCPq3hHVTDPjemZKgjMccXqt8",
  "key12": "4NtaArY2cpWuGsGtevh2cr81ZWqrYwXaSzvca8kUngLRVmGUbQbYCR8SuK19tk1Bn3xQCpe9ztMpHeE25zkfcVnp",
  "key13": "whyBUrpaRuFJxSovB8bJVkHEN6yW7H8xq8Vw45iHruQKDsNftKXVFcSoNT2RMvTf233V5bKadzV1BRiNyCJuSXY",
  "key14": "27GH4RmJypeEMnYie4VmcULmxb98abTyznmjMrnDL8oAPaggxvCwqyxDeRZzJN2uCaD9raKMgdaKD3BHu3jPhvpz",
  "key15": "z3ZJdHKpS7nxZwX1VCvCAFAFtw3ivRCaRC61todaMouovXTLhSDiU2fFm886ABp6DjP4siYJfFhnR2j5KVZ3iNV",
  "key16": "KhoeCTpnfaKV64repaTXCk2C3VseNkwTSan1MkLHSfv11B4qvf9WhaaesrfXsHaSqyXpLHRiUqqVTPyCAWyXFGw",
  "key17": "iy7rF4RbdsGiCtW9MuEDVzEHA3Bi9LFuDykdvxW46uuyjGQLLZ5ZcpvrY3H5PmLgvh1rCeyu7YraSeL3FSK9Fj2",
  "key18": "3fgnzVhKgzbyxVDchT69mof73SmdcqciDEViVhdfAwzXcyz5gvEgC96TpaWbYwJ4TtcV3JhadX3df2A7u3t4RJ54",
  "key19": "2xd62xAPrjZR6TPJ6mKh5i29vbZRfJLeZyoQ1DTog4h7zdHDL9iJ4wSinJKSNd1Ui2P5soPT1yzjcswuF8tAdvbu",
  "key20": "5xpgkcKeN7j5YCU9MGmWYrn4i7hZEAsUaY6bMrxSwvjnwvKS1NAJYFZBxmGTLRg5apEg11V7t1sv8Bic5LoTozev",
  "key21": "btMfLJUGxgWMa8D8Ng9NZdvKF7wngQxTx9toHZmgQnbAFYLgsNqvWSPaUveJ7x17rGzZe8A6jGmZQVivkWjVJiT",
  "key22": "5zCBFQqcgRvn1y57MV8X1LR4b7i55rBjomgkN5C1LPN1ajhRcUsTdmSvHr3v8XjEmuqWAvyFWsYikQuuphHsFC9b",
  "key23": "2sx8ttXQY68JRvpz4BchKGewqMs92CBgbTL35r25fvhC33icJG7TWtsRGLfK6kaAAJhXhcsGPxw2aYC9caegaHct",
  "key24": "u9rD1jEkhbQAciUTkUSP65smEQ9FX9Bzr8SUyyHnjchqmo98mSnjpDA1unQhjdb62eDw595vLX6EVskzJHRBRHh",
  "key25": "3jxHsetwJGLZvhcQUP3jJYNTkCwTTmm1owr8aPrNRbz9fy7xS9gGfwVtyf5SqwYYdS5H5fQ1M7JVdxw9pjYUTa4d"
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
