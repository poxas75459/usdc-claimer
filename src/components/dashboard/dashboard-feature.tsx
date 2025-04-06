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
    "5RGL4qLjwi2T9ndZBZBFPUQf9hdpYgzvt1rbe9m4sPe1CKEAvKTcMGXqUWbspjocDXjWauDp9ViFyXwP8bLP94Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHMu9H6xZBB8jXmV9AhMPY4Aae4ZtgZ8ovSRiKUye9bddpxivSHmtM7YPaqpknZYD6TABHaVdu467kgoQMjviEJ",
  "key1": "4tXG58wWJn4bhgygigWJydJeLBzU3G5uxPEZeQEPpYpimh2ScN8DWJSAGCEzGwD1FB4WtKSypfXc2jp61TP68B4M",
  "key2": "2EkPS1YycJvi4E6Lr2uc7eCLgkyEyFV29bcBnZgMUArcMhKsxr81cbTyweZCPcaHo4d5eG3odMY8p3bQsrjUUzpT",
  "key3": "39FJhiYUMbVrdR46xaxKT9VikCTbEt9xCLMyqWn625hjJWaP27qHgpaySuz7gH2cSXLzhFwrF6iA2EDuiSBUpXdo",
  "key4": "4Y8dxeQ8caEY3h4Qou1oJH5Rs9CjFS5wfzgqKhby8WyLzriTUgGVeVY2W9kbMHN84EvQheBvkTFtZpzHJeRKrEon",
  "key5": "5xr6quCh7Lp3ngbQDUEH7jetjNgVn2HqeDmszhbjPJCqYFVNHPHUQxcFPhHjD7d7cXPDodaKxhWmy4p158shpanA",
  "key6": "9Cs9Qmt8yEx9kNKoDZYnepFZja24GFAKzXLZ7ViP8uRYRsjCgthjwb4chq3NaNFSxmZBBAx1vLQTRUoPYrQjbqm",
  "key7": "3F9jg52m7pShaXshFNfdV8bvPQkfjNmqjW6FCkAcRJZVH22TVqjWo6xGyEzvg9GoRUPhmi4Td5iBEnZtAZ2AZXH4",
  "key8": "48L59zFCAWaqCjxoLCgnaAYpC6zcPsdJeXJksGmNwpKzku3dJoucpWqs5B78bHZcTiD3aLtbLBaCw72QHd4fbWr6",
  "key9": "NMyNA1F398x8WUVTYfFXvPHyjLSU5CBYaE6DawzT6KSj6jw2cXe73EmJ3Q6n72JqQDoRtXZYWV2NPfmSS2sAxwc",
  "key10": "32cDVq5GzU25Zn7FtFBYJ45NL6RSgmQXdxFKM6AWSUas8veqUhAvLpHxEMapyDVA5hGKF7vSgCzxfWdPhhXKFSUa",
  "key11": "2WuM8zJEZUxXUXVb7UrhdymmfptAJaWL8nVq3PCi8oiDt8JEE1uNH3uYYKs5kMGvU482TAUcd212FFYV5kJUuYUQ",
  "key12": "4QSdHiP2dPgQrqcQ6hZBeMmYmgBT9Tu4Gjmnpz8imejHvnbWNHBnJ4qQNw6oR4Nxaw9UMzTup1UVhy3X4ciZU7fe",
  "key13": "4V8sjDXTD4d5jH5L2K49mpx8mV4pgcERf4rPgN3mLMUbXNH6H3cf8zpnYdfVzeTS9NVSNPZhsTp6VXi67MVcqsbQ",
  "key14": "N4R3oEz6T8BUbVoKp7Bq8C5ZfR8xgKWWtQWyiH2sUNh4EQi77C75UgJeH8sm9FCWnGL2e4XcpCDUuHA5Vm4Fqzm",
  "key15": "2qXLRaiqdppbGQt4DDa6R2niHmxnx1isPdrBqT41muZX7zRgimoD4Mf4hJ8NFEq3kwaVpcirqdpHMq95uvq22UBp",
  "key16": "3u5twf6FYWVZACsMpUpHJ4Vh9P6E2etjDM8PaUBvtoJYPw9ckBVbFmwMUbRPEk6ZNw1tMac6e2o14rCX6yz4axBd",
  "key17": "3qvvgAQpkFwKHKwJwQHgss9Vttgfecs3PWgw8vYqM9NfZWn4Q7J29Gj6aw25oAKu127v12cbv5WcJB8pFen7KfPd",
  "key18": "2qdXWW2BpJkvMi3NAupKgEcr2AnRF5DE6fAggDYSPBCvXhVmheafXmZVYzM3NtuTguBeTaJTas3DQdM5M1agB5FM",
  "key19": "TEbCCnfZik9HfBEhJnbjJqZkFxr8WGUz3HMHxxaJdVMknu3LAVCXsVPEUBNMjkCVeYaQxJbZzoz5fagysiRhfbV",
  "key20": "2T3zkgnvVXAftHnbkRVYnP93bjJ9kHYW8cV48ap2qPQBM22J7JLAzabaFYghpGZRgTePqPXdEP7Zk8T2YusHbHMp",
  "key21": "555HAF24oRAopX3jkDVS8erkQt81ih6AnXgqvEeLN6PefzoQw34Gx81zst3e5ANRknUTSiD2BQcUxBPKvJ9hyoh7",
  "key22": "3bMDC57EfiteMKMBBQ9EEMuybuG1xpCExGQmcZfZhQ6uiFN6UQgsXqM98hi9RU4UBiHHGFU3P147ZMCuQJxreDpM",
  "key23": "3WUrHuxFTSMiDZeuhQCsJaHo5KJnvp9X8BekvmabGvYyEntCb6ofFEQDGWszm2v9XMjwzgsZJSRapETaf1hcji3f",
  "key24": "2nEdwzsapgw2UgQ8PSnDwmqwQQT7mKJonW3AowPNfUjx8qaneCjYjJyp2WcdBAwZq2UfS4hEhByaDuieFdicovR8",
  "key25": "5jSLxruHiEQR6gfVqM9UgSeLHB6x5a9vJ1BbPghg73Y2DobRMJhiWd9JtW7VSDxJk2ZqmQcyzYDPSec3n5BVbZbq",
  "key26": "4KsPgUtF6fjPq49kJE8tmN6PoZFhzP6uTmoAvxgvvyZLXHCV9DJs7taRp5pg7isPvxiECvZB1irBQRoPvYFvdBHY",
  "key27": "3yEUNogZGqRK52ZFa8QNPtW6vbKJXvhFBGq5wRDRHfxxpqfy3qG4cw7SupazUHfTouydp1pjrbbo95xsxmztoPti",
  "key28": "2ZsYk1DMBiSnsiMYLsZZpJEzjJs6MvWe1cK78E3AnEWFeRJKsBd2yZRRTtBGKZYbmj5YxjNBH3pwezFusFroxow6",
  "key29": "32CoUN6UosRRNZJeYzcN61xhNJ4wXm9cBKCpMBuDizsuTUpAUqPdJKKtUyZkg3EFjyXqBtC1XhUvJ6jit9oVMZMd"
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
