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
    "5BV4g34UhzDFzHHDzME24SNQVpPEFVtZEnRPPhA8MFTU7LZxt4YLSmhunJ21EakTMpE91FUwGows8pBT2fXxPVC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epWSRY9poRfbjtNjZPzQBJ66ssmUXKfk95LRaP3Qg7pBKL3Gj4oHkdShwoDKCSNuCWW3VZGZBEnaBF6fBQ7i1vW",
  "key1": "2gJgPN5ZAh1TPsCzVkEgaH3tUZMJcRAMJncgspHmMk1kSCAiB1UK3yFhP9cq9RD8XAbRe9omXDNWnQ8UQykD57YR",
  "key2": "52RGAeVAgvKmwzoy6fef8ajEACvq6kBnMVJzErQ3n89Q8CqrK8ByrdoCQ1JCKNbvxzmcyErf8oQR75Wbigqcscw",
  "key3": "64bQkDV8TcDfAwR16rMTkDYZXwPgUHepjMqSq8s3CjrMt4jrjfSusrtTnXHfg4tmeniD2nqXNNbfbrxjbtkrGNCW",
  "key4": "5yD3tjD4Wps4FvAKzGYwjAudhUgh9sYW8YBUwkbxkWhYMg6nMq8FVcHQWMQQ3CqLCJ34XuTjCnVpQfcjCesREuw3",
  "key5": "5z91LLpkDvCnnebTR9vvTkPzwNJhuDnVv5eX5XCN9pBSLUqzJcjV7y6AUBb6tTUVVQz3evv54mhJSASSVYWihG8K",
  "key6": "39EAYQGzNEE6JexFKxCfcsADbwcDjpdMFLBwz6Hr663hh5SBKx8gRYf5Qxnzinb1R6Fep2KugYVihqfVACNg8X3D",
  "key7": "3qvsyFdoFuezEYJ7XY9jWFPTh6KcCimoNDxbqVVAtz8dCmp6p5xtDmjtVgvKRCr43Qbg4EQNS5h7wynmgE3fXddu",
  "key8": "5Jqtkt3eumBR51GzXsqLWmSETX34DA6NTeQ2kDjrcyrFG3VS3BEyZsv6twqsbaDEzvnWdtZzZX9JLY8TGghF3g4C",
  "key9": "2xXpTSJFxCZBcHQDnMRXpgHnWKvhARXrm8WMWUxzxdykuCYRBNKD3DKJZV1nPyMdgMNR4jZfg7VwzrVUYi2LtQ9a",
  "key10": "2UD4adQAF2z2PBSX6iwgHLoTQHfSHAF3pQRPdpVMqcB2sm5ZvuC18ipXdmDb8HdH9bTWzL9kCh81oiEtE8kKwwQr",
  "key11": "66NqTgBZeSTpxKPvAzzGWYGCfos5vm2Rz411FriaDae9dhY4oAcYK9TPaKtXmVnX7qRpvehehzYLCPDGfaNQBxJe",
  "key12": "PbkoFc1xbTtHK3xLDpuMxehWL77X4aejmgL3BWfJLeDi3wLS8Z2gkroGidgEfpwPGCpFeLo7NSYXFKesaUs1sGR",
  "key13": "4GwSciRSKoc6EaTD4wGtaRUZx5Fe64yUF9ptXYNShb7qtGEUfk8j8VjqjkpNy57aHofKEZU9dg34Hexs7XMX2d2S",
  "key14": "4FgeimJAxKVDS7b5mUnhcBRaLkGRgUnTZhi5xFaxdpKZyjhF3kQYCQHU1NJJqxZddLceyCFyf7hajJXvAHMdfjkN",
  "key15": "2uFS7aidx6nQRD1Dc34c5Kkc3owRFaN38eZyC2CCuyrq9PLt5BVeWZcNU7LN4J4ddHH6prCL1DpNb8JMSXQy51Ft",
  "key16": "5dpJR1M4bpFdLQLScHaW5ZwGmC4pLNHfjM29eKDdWLuMmLFZB7CXYYjgMxNnkQezUr8sHokbrfraaZYTfsAwXQ6v",
  "key17": "2WBZ7mefHXhZWr9eGPJeCaAWFHTgwocjHCb6QuJv7DD9uBs9LNeggU6fjVqQNASgcWcZRU4gQrv5XpgpUdQrH8A1",
  "key18": "wz8V7c2CvwJ4nWEvXdipvxW3GqUCNicjThCXAwrUtN1vn3bvVipTW2NqQPBzP9kk4ZvPz4o73iEgpmAGSghhr1f",
  "key19": "CeqXymnGjpVZ86Bn3MgdoTzpAZtcSRPEdY554xh8Y3RPFnDKfrSziDWHhch9tQPep5g9dAAshWmiyPj9kbPemH4",
  "key20": "4spStUfVSV4zd9WdJwobJJ41haMCUU6mK7NKtZbkKKMuTCLTkWmL5xebGMn2GZFvfqF59qBkRm4oNMSdunybAeJH",
  "key21": "5W24k2qcJpB715Cz2gfCokRY7BFS8mf53TNqer6Kb1xdfDZmJJEkovbsTK9ZLERpSb2R8uPGksPkdmYULL66WGm2",
  "key22": "63UvttnQSTPBCx12Rntbpa38nvAukiGt6UbvyC9DKURCe7hT3FjssKFjKXz4jQamzHProjcFZpPAMUmX1Y2brNxJ",
  "key23": "4CVp7YuvUh6aKykZT9Qg5eno5uamPJhMwd1eM1woedfp9xMzeXdXWqBCj31xRyEsAtMW6MeCvEHeX5N8JCpUJuok",
  "key24": "2AnbmGe5wYsoCwsMgFNEtKVHquLEmUKWCUFiDyReXaMpTLRiEi3x3ue3Xtzs5hv2NCi5NovyWZ8wZRWFuo4QocT2",
  "key25": "2DeynrDw4qA4buhCRQUHzhHu9fyZnNAXrcBKt6ZsMYzw4FEBkrYGN6x4ULXVY6xstNCSEPan8ToZ9fjeuDtToSYc",
  "key26": "4MdZpn45Pk4tU9PnNPZi69RYEnpJj9TZxoGS6hKWEKTTEEgSs3B2ZMzfFmxj34Px1a9oPYjmcFFPixuXcHs3YZpo",
  "key27": "3s98WqZVVYPC8norQR41HaEVpH1jKY9s1QWKNXK8C4b6QBEn1xWXGDakJDRUnnGjw3fbCXQpumZhaihG4M3xah5Z",
  "key28": "5PkoV5JMC4BdW94HPNvvwdEq3iDvTJvK1errhRx2qvSz527JgXp4Xot1LznEYLpQ2fSAoQgV3RApmEynv6hBZrko",
  "key29": "2FbAsZpaQtsz1tamb9FrgRzot9ZPvohwpM7MDH339ENW1N4C7R3BYn3Am4rd9Ajf5CaZYR2DxreDTJ7wrqYn7pSu",
  "key30": "3GWFm3ZvYQpnP1jjcxXkrNTTLBUySKack5dtxYwdxzDi5jx9jphh5mTGP3yxi6hzqL4a9EdLFzgFQnw5ADaJohce",
  "key31": "23CCJM4emPnaiV7ZsKaoYr8CsZ9Rz1dgUd32gJsy7mc6ESt5rBmiVPTZPpqMzBPraiCoK9V6MJUn3FUPjjeL79ic"
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
