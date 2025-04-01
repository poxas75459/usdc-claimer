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
    "3FDmTd3aGwaVgkZs6UgamdCTj2Kn4VDvHn9csyCDVug1AAsDRBpisuCZDExGQRG4T9xHzkWoVAJP7Xt2S4FJVAxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APwEXn2QTLj2LXoSF5nNpDd8eefGUL7LvwG2Et1D2FLBecPdR2ywN1jqubS3XjB4bxP5vbDdsi2Cm4ZvkYmAhBA",
  "key1": "STjvqEkuGXi5mE2J3s7QpN6VbuNNLBMojAFax13BBXZaTRVbDsdNNwpSX6o7kwVZHAQotd4AohykAKcvDeaozbY",
  "key2": "2wsbL34uEwNMYyzA1m4V6tix8Y5avnNb9bhCgSb4NUDzpTxps4nWjLDFTmVTBc5Tg4AxZ8N3Vs9UgyzxcRfZyM7a",
  "key3": "59cxeTMJ9cggSoGgZ9QLqH86uFs3yy9jo5cQDivxE6XiPC8Eb3PmhDeoqEPAHENUYP3ZsqAgzXE9dYJC5eAvgFR2",
  "key4": "5ezqg61K2pb1wLGTYwHeLazn7azYxbSZQAYQSvebS7gdJP4oYCiwAvNdZMtx2bSjupjx7GoUqmYqX7uGyprnJKCs",
  "key5": "2Axa5vbSrQhTUdtPuM1ruPpyR4k2WfcUQ1QsUA19ysh64LG7Hd84ZpDg8DVdxFxTLyZ38LAdQ4SoaRpcsQm5h2rm",
  "key6": "4m326qFCfziETKm5NQPmgf6153tUY8GQcSpDKrwux2hFfdZVWZspfQ6fRCzediSJWh3UrzfMZHnQpWk4e7Ms7Bof",
  "key7": "2J4YgG1d2YaCAMcAd7LpAcFY2KRtCjKW6SSSJyxbYiFPu1EpkyBa5TuxXxiAHpbBvLPG4TxYbx5ZDtJ56Qr2DWCp",
  "key8": "2Aqy41NNCHNCcwEBqLQFFdiUgF4ZUNsMnEd8BgBq1gn1wqJrHeAnjxuPeCSR5fAQGA2tBBJwAaFUS4erRQ6pehVn",
  "key9": "4stWJtDzwUxhpJCQCwRvF8TVtxWe4pgJr4hGq5gVZhrZKRkCWEc91KX7pu8fD8w7pQJfFms8xbfZfkn6u8tnPnW7",
  "key10": "ba3ELmNDBQ5zXtnoHPQjy7PyFDetJkdNudwJoCJ4pzwtM1C3srQxY7asGa57eNv9RDPP1KdjwgMnf2ifHX6oZgz",
  "key11": "33XAD1BoAMCjPsoYpbnfCgiAbAzpppyEvgk7acHDu1QtTcZ1tcWTrXGGcNVmD35QodgiaDN7WrJapZfrCQCn7BLM",
  "key12": "4skKN2PcDTuQsaZNS6PrPftPQ6A6jUXRXM9HZRWnbty5g6DHevPeyjfUvqTHzMdASGrUqUPjPnuGGmXd4dqUcCQV",
  "key13": "4Swucym3yKDjNLueL3CmrMBRmNgJyrtUfH2urWAxnvBo6rgFgPfomCTvBqFBH1d9pGstxGcsQLD3nwaHQgPqZaUq",
  "key14": "2QzB2ZFYFiNdnApVqUMuZWSKT1YUyTANfPCueFW8wEdEfGuaDHXTbw1tDzNBNTzFLQfmL8Xu5pVZZVy7fQftsqXG",
  "key15": "GTa4hnMewbR147K4j3TEhuaqWait6op8VfUNjdjCDtZgYyQb5Kj5VX4ZPXNeU6nzBQTaZQgRwbBcXzk8dHufbp4",
  "key16": "4i7ukgkf2jU9htpa7AQR1Ljxw9QBLzBugEP3qPsHGd5e8tJPcCvncurc4hzGZxoqMz439AyZAQF9Fppjuw3R5gFt",
  "key17": "59FQbdNvKKzyXGpZxHAiPRMYjZFAuwYQGYPSKiKBH3ZsNZ8GRF7RvFpy1W8sPdY5sqNXJim1cZvzyHbE41yJPGBy",
  "key18": "4LNfKi3Ak4dykCZct62xy4ZyfH9vd7mZgKDizNCe5DC9iJZSoRiJff6nkmsupMQ2EVXdFCQYE1rCSazZtjGWGhNp",
  "key19": "5E4s2V8BDxnKEhACo1Hw3ZyP5K4Qz216reFazQ2qRN3p2jUK72bzdRk78Yukq6QTDgwpdQu4RheantrLQvHNit72",
  "key20": "5JXqqs4opG9sqwwit46wK9i1qXwQxbVNPA1qqgKECmcbnG5YaFVCj1PUwzeMJjKYMeXGkQaJyKq5BZ62dTiwcfkK",
  "key21": "3KFN3QdBqEkJLGN2PY85S19SvtuyEVZmsk6enDMJtkiCP17bS4nwDsRUCyiYVcW46AyUnGztDVUkxyNgv3MHkzKV",
  "key22": "5WhJQixMXKhi2cVFKQkHpeUUvajCWWQAdR29uvjxichixzgiprUSpfjoH35oJA9q6v6sTattPGCEs6CM2yznNSWi",
  "key23": "3eLJ3T8uV3s7HxXUfkUBPqnzqxLFBUmeCyRZP9oY4yYM411bJKUqbVSMZyuTaUGLFd8VPxka4qVB5PU7p7MtPUDh",
  "key24": "qWWfPB3guKn9Gq2PtfetDszGJQXknf7HPtZCq5uNh9PV5bGLHmN9kE5DNiAJJLMihtLGLWmgGY83Rjnst6a3zaa",
  "key25": "56XoMosB3xVhASvHvQTTLr7kP3o7E2RPuCNvLHN23TDe4cE4H643S3L5PFY7iWSTZ7S24UdFs23C2bauRZtE68aN",
  "key26": "2qsvK9aPicLUgjBQN75EcLZDzQtUWqSu5g88dhsMDHdS5XDa3vxtsfTkMqm6Hd78Ym9e2qfiiiuZTfWASDEjA3cR",
  "key27": "2dCf2BPkD3JSauntTDtrYGbMnyNR3jA5d5T6BLjKd6UBDNsFi9mQJAFyG4p2ysRgjdnz58wzotn6Abp3KEHspAwE"
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
