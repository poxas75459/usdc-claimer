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
    "GiZapyDqtyen9nqECEH8wbqz64g7zfUVLD6zkraKh32HqAtJK4oQtC45tPnpUyMSDwf1huApajhZMXvNbjuMHx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpsXKzKFQJCLXkW9upiKizNHbhZTrUVuEGcuPdGGekMFQkMJjvQSGkWbZCyyWec4hZ7v6JzYvUGqc83WcWZnFsA",
  "key1": "mMU2QGVumnbGCjhWcPLJ292in1AVtqHmrUUpXrqFJaJz1gZ52G5ZivgZnJyEFwnkw1c8NbKsxxUjF5mdsYtuAiw",
  "key2": "5X3gFX4ezF4kdKUUj5sRyxU5TQMRzDErwZuMTGoZGddZZAF8vsLMZbV2tRXiVD4MgabpVneqSPjYR5SaLntW8SxS",
  "key3": "4Kpv1U3eKxhUBiZpQxXQyUuYpGPDw29z5xdSMGTCBkAcmKhrAaXxetRxzZgeX63ut3LGUAsgSui7gnt6ndZU4x7e",
  "key4": "mzW61LnQJpzrEUvA6KjiVd3xuWcgpsN3Min7AdBaPYka51gn8x5vDHD8vEC9HqfAwKt3662vs68CSJUw97HL9HZ",
  "key5": "kBMQvcumMi5qrye6zFUf1PzpgmPr76MDEsYi9LA4oo4HEcdyqkXP151m7Sgdx98vHJpbHuXotW67k1PLJAekzpK",
  "key6": "4KFzH1agr17aJz2uAvxG6xpzXfH2wzd6BvPULDsAvJHEJbvUFQPambirXmKdPcdtx3eY3gbJtwYfi2qKmvs2ia8Y",
  "key7": "3BvS3uv2ZJgmXjysN8icYPfsTAcfvr7YErF8Tkq1iZKP8iSF5WRmR2JEbGd8WJXSrZvsPD35tCpMsVxbJahuXGqS",
  "key8": "5Xqvt9VsDyhKTTuQBbR4hjAfJZqc3hMpScNoiR1R6GkKiumduN9PprcLHpezaRrHdxD62Lg3p1xWJxFQ5PAubdoS",
  "key9": "3og7bMo2CWgF9Uz3HwnZhXjMRfYbmj1vAS9xdH1RxwthxoKSsbqquMYUyDXDi5k89S3AGYz35AL57mqcRq6YwwwA",
  "key10": "3Bx2zKzPET8BrRvapjhZkaQgYBF1FbXAqopkQMfygEDUCqyza6UN1zEz9F1m7BokFMkk5eRXSZL9RpPyGFDzi9WQ",
  "key11": "2P6nLg9TrCX14eEQwLkhQuzZszdP2UCqGizdAznPs7szWMwr13Fybipe3aAJgDtvysC3YSjPofK2Xn6WHF2RrcJq",
  "key12": "3W7k8eZ84Su4o1NpryYW5jGyULgaqxFwDA1wJaN8JQyhx81xsXTWaBxWWrnPgtVjtSL9N7EoVvNFFy11fZb9WJJL",
  "key13": "qz4iXpsCnejChCvftTEUFuiCc8EYW2H1mnCSHBYFUDEok6LgQbkw42dZnmw7Hya7iU9mvBAyaP3bPSc24tYVpLV",
  "key14": "2dBroHLUrJXByHDJWUZtSGDVknU4Z99VquJsXD3rpFSCTw6tSMsPAD6962ykofTh5vwqVLGYASvq95iihtxMnfG9",
  "key15": "46jigqkzPgZrBLUEdgEZfkoRPzbGv8bk5jByQudk4oNeXgu4ToqFwcRrZprWFDvbsCR8p4bPsGtxGXZjd2br2wxC",
  "key16": "46uTFzraPgehxiVPyqcnTn969S7AvPVcp2uL6nzxqXAae2ev8PTCyiQgYNX9dnhT3FLKnKbuo7i6dmijyVA7mAmH",
  "key17": "2q3Qtdxkwez9MHZkN73tTfKBWQWHAG7w8csvuHksoTvU8acaxJgh3BXJDAxS5bgJ9wr1sGM3Ad8k3KQFAa4CHAbx",
  "key18": "VZK2zjHi21njkAQdX6rSEo7kSXFnYS783RQWmHPMDUh2xUZ2aZy1gVriw8k7qsnSM3ZQh4z63oeGEnn5Uh6yMkR",
  "key19": "63qhtKWvCRCci9ArNQSmNvn48ihAvHV2tMPR3YaFrivSHrnr3ubt2yusqCYQLKgXsPs6Z3dNzDAvoTFFA9JM5YmC",
  "key20": "5tKyY3n13JofKGCppfZpSm72hFVE5QvrjYu31fnWdGDUreenqoEVtMo91fVWUMwVxQb6y54WMLDGLctdwXbWMcDV",
  "key21": "DSoHFthXm8DRVmF6XBWGrYg4Au39krF4eqoQu9zky95gbUzCZN3z8CYkFTKqbvJKzGjXYiyEXv1KxNHCEDRegf5",
  "key22": "4zBP3LetYeG2pyhNSzGerPQF9iMdingDDrugq6ZvhmBowa1su1MZkYmpBv6dtWNSVLsRZZdT97Va4zExVFfFpLKJ",
  "key23": "2Uu2Fbee3SPF7wYsKQYbo8PpZAFKdUSXa3RB6vDTK7B5m9iz5r1dfDC7QcrQEFphkoHqSNPE5z8uzWYrJk1iXhQb",
  "key24": "49JwjcWc5segsBVuSMi3jK8u2LroAG87Hzdsx8FgGbQQt8ysctCvF9yN8jFLfGcWrVfAqZQYXL8b6mUBKKPEdQQK",
  "key25": "4rFVaSeFAi1tHFzWv7KDiuM5TkGDVq3UyZTYS5RZf16dXx9gT2ueN4yreKckupBFYH43wKh5mgRCYtDAiE1BC8r5",
  "key26": "5cLTxs38zZXNABpqRbiNDEUDsmEdwwkqrsdW4zLAzJ9zZDdzW4ppJDXGaampbfinC8G4mQi8XYibWyJyXDnnUY9r",
  "key27": "4jg8hUqhkhsTvoxJT8UKAtA1g7FQBjwqqd6Ep5Dcffa2zseUgvc9HYMnyFmYxRzWumH5nCG3Wv3bMrw6Mz5Hy8Zn",
  "key28": "2PY67fwAMG3cSifRnUsVoRhEsevaQWYrKyfCaLiTCHesqWTb1nDmufVnKEKJVraPMGPGAJHhTh1sDgRbd4Zezjpf",
  "key29": "2NM38VctL2zNRYAsTqBffAPZnJ8swMGpqXbvydsQvurpGfvBqaeunRZJFVfe7fD1SVfu5oFR7YAEFVMoJj2re7Nd",
  "key30": "42FK9k3sEN6uoxynnK1sZueEobLr5THhueMj4iEswSQW84PvUqVsa27DCNJfDrvHs4rfRGkNfqT3oV9cBtSPr1Gc",
  "key31": "PF2Cxg4dxpkDj6WsTPMp3fNei5somHAssJ8GszTKYAaFVmrmN2B1wVRxPcxJapN7xBY8AcDd6nuzP6W76UdZ8mz",
  "key32": "5MoRRCgb3xp7QcM7jaFxhzCiiuqTqZySMqjGffYVMBEZyGcUWCzoe6SpDG1rGdQ1q1T4gzwuV1w9gh8NCmoHb7Ya",
  "key33": "59u2LJpX4fnncpoHyKCRAcHqWBUypqwGqUCPQAFJTJn9f6FAz6ocxf4WHgaW6h9bjhQabDZX9vrtvh7J7JpfYg2x",
  "key34": "2ujFYQBMcZFUuNNQ3R8rWFCP2mKWBEmTrqntzrgtHvGx4MvQChUgrx6qzoBVyq6Z3WtPSVT2THx1xcoLFd6iVWXy",
  "key35": "B5d8zXfMnmGxtYVytWWT479dyddhPQvjprVTkMtWSTidPFRpx6LCreWLX49Cfcp9YGmLHNsaBczhw3Sa8vavtEe",
  "key36": "2VLNDi9Hq2nF73NkFj3Q7maRu7JVf4QPGexLzXeiq61D57BzcquSip3ALQQXaBxeYwXbuPyKCkBDJZ2ga3gzMQHb",
  "key37": "33o1FPE43YUK1f9DTX8fqXxCfNVhe2je1p3NAvG24wr8Yzc2hLu8YGbbKhJmH8jVpCLzwKCBnTuHs9chMTUNdzfG",
  "key38": "5AxfjUTujdBYUbZPdSN4iJMN84yUtzjiUpQz4APjR4bcWg3V6is1TNAhJ9S1idBBP9wwWXeQfUwANaAoyTT27NaU",
  "key39": "5PYRMYy6FT4FScQVd6uANmhfAtqp2HbYCZFTbQ3H9gNKBo3yFTWY2fTF1brP1kv6W8r3ySdFWLJzzy1NM5w33mzX",
  "key40": "4JL3rtWUzWRZ2M892XNzXni4eDx9i7saend6Pw2bH3qUdGgW727nr9ux2iBuVueaGXug8aP9kCLk6ycFZ8W6Ua1v"
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
