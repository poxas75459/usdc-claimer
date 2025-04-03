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
    "2ZEL3WC8Mh9SYnatECkGkRKgjAZXVi3TewFQ9uD5kfQcjkvfhTLCe2T4qdNMLV7NW3H1DgexZoARp1BktEv4nmdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReLjzuoUVczRc51iDz9A4iApJKZS1xL7uZpgh32rvohmmgaVF4xhB9RG2wCHa5E3dBFZ8Yku2LJ8HPKT1wpdFho",
  "key1": "3j3gBvqXX2ye1AZbvx6RwZbc2YoY9XvNpGnkkN8ieGtXaCALhg2qjjqNZ4H6KxmpHbqPX6r2q9jSSa7gB4g9eFy7",
  "key2": "3W9t7VGem3PxCDdWReXvvnZvHV9CMFqd7ebVRdT5FSi6TZDXdZGsXFj3oGsENkBktyvx75c9uLRydb7L3N8phQDP",
  "key3": "4XsGxfbHKK8PPLE7gfXWWbJsGn5WgjG68RJrfUiW8MYfrkPvYn1wXMAWaAZvR3pKbVZpbUuizyVANXFdsrm6kuXi",
  "key4": "xvChCfysN8ChfqBUg3jRExRVgDoGuzYAE5Fso9Tst4LP15nDPT27bVpXWXEBDgPX5UEZBELHG3vnjKFSPAbcopX",
  "key5": "Dvoko3KDwL1bLV2sqJ4jYbekoLh4PXZpppoEurwSEhEVMW1dnZjhzH6rF4nJ3U7YxNE6aNnpRiK886FBRyk2mBc",
  "key6": "2nAv9XfAdaJKoEgYH2sG2amaKwn2pwtjNsWchc8F6B1Ac5iEZ9ycPHmRZqx7Sdy7h37c7j3b2xDHBBLW2XjYcm1m",
  "key7": "c8jMz9fMNqUWfmPU3EvRPdwcp1MNFgsyoAz7QdHVCydJUndpfojCuWDd82F1m4JG1GpUPwaM1C1HLWJFqRsR9v7",
  "key8": "4RmhQ7CmKPFjkrZi46UBuuNm9hSqUT2cRoNrr7NTxmn14R4zcESH3UF5pBxvSmU117py7fD6yzrSSJGY5XDg8FGH",
  "key9": "32am2v2u92KuzV4PhsTCLQfNdtCV4MQ1fx6MK17x3pgpCRhh19HoqsXsLvcHem51RTcCe4BPm2ruRwyeve4vNzdS",
  "key10": "4qDynxFjGQNmHvxaC2nukH7KpxMoTZzMegBRVQkfLVHu8CPXY5sZ9xFkLpFxUZUchF4VJcGcdrWHQx7uabBARqga",
  "key11": "2zB6XCVw1u7ZTRkobg93bd6uefg2JFcczN2KDejofEMHhenMepBm5uz2HvHAk5vjasnYmp6mifFjszppTsmVYu8T",
  "key12": "5CDNFBdtEzQmEDQwnhFstfHirXxeoLqxCzzJQBUXTvUU136BKiaXHNkZJdyo6E3hTZXeptLyMKLWWJcFUWaKPrNb",
  "key13": "49D3amN3mdk7nXv6UnBQ9CKZc9Rv7N8bCgwoJdvYGQJrKZHGHtReji83fxCH5YS9hRZd3Hrv7nEqhgon7edQJqRD",
  "key14": "4xUNBJ8yvizeKyjugu48Bp3H2FgTyspCNboT4dvb6kfPMt89GnwKP3CN65suKr4CDcDKYSdHSUFjY69qsNerpbkA",
  "key15": "2bxBeAQ4B9MeuoFFTEuD7n6oWmjJRSBezS6hWihZss78RzxwMrLKkzWvsYe7QSYkVqU2E25QscQTdZkapfihcN8q",
  "key16": "56qh9eo3jjkkjoUTYTP4GJLmeMvTfDAfceFrjYE5er8DBiDQfPtedDoZeWKdiR1PmLvq9wBS9HXVh5jMBFs5fWcr",
  "key17": "4zKf1p2vLgrPNWWcjQjuRe8rG4Y3rz7mpwuv2morw9Ytt4XS8F9y5hHHVwv8QZ6KE6zQ52jPfR52RqwxtjskCqew",
  "key18": "25FtYWvaeCcJj2TCouCNfpuHLKsGbNVETAaDCRNPWnoXbCm9TVZ1YsbQckc15CuUeegMUVpXALkkZXFzEndBdZKa",
  "key19": "mM6KMAiNzJ7588Wg5h5GFmUzBXogEp78XWqp4Ex6vZnfuHcftnzpfHYP35i8PpSRkPjXCANWkG3kuzwCdvgxTGg",
  "key20": "4BjEBNnZhu1jSdQdDP7TCNnhG9k7uMNLZzopvtC6ss3PwzoGgeusBAoMhWm2xFYYE2vSZQLJtfz2xYN2rp3dyCPJ",
  "key21": "58H5wjK9TVXA6hE6gUFQaZxe5EPQB2vMB8YB9qzgvpqHWCrp8ej5dMyzon3eSeUBkMuZyNh8a7NEsFhno7XeVuMN",
  "key22": "4Fh6NBhnpmh5zHGR7zxHQfDTacoDNJQDSXVvP21faB8YnWmcEn8FTj6xoF2DnEtj8382Yg3zxm9bm5wUZNshDoZe",
  "key23": "5ZcQ2wkbFzsTU7Zcm7hGw2pNJvkQNEK131kFGzqgJkjmx5Fd8Np8tyreGsbGTVhnBC17zM8sSWMj7L6hAP1t1FR7",
  "key24": "bzSyX1uPJGZBMjx3gU2q1SzisUK8j2G6mK6kfPpPU7n4ScQs8ugejk8RQDyouGcSdSM6VXoFivdt5Agbmk6EBEk"
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
