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
    "5KSt9oksd3MEBb2WJqSS5nYMhkL4bQKqW9GboMZG6CckP36E6i3j1QWduMtJnzydnjKZNS4j5CVnSon1KwxsuKEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddF6DNnuhUbr7biTMDKUThzhQCvB2iszMBWjDCYpFyiuYyivJdoZB5p9G3yzcE2n8fAWVZgzs412EJDkpqCmhQZ",
  "key1": "MCEEQJJ3pKFQAMRsMF7ZBw1oEib7PL55vf1Fsu4yE5Sw75ke2pT46gczDu2eqJF5xsUXFHM3LcN37ZbN3QMXB2b",
  "key2": "51QGoC7h5FF68fLhVpNz5khfRB8g7xu5MhnsSX8X4c824cq6X8mLDdyzEz3Z1r1Tj8EjGvLd69eXgbXPSywxkH2W",
  "key3": "59bAxEyJzvrcbUt969ZoES7pAaAduHj9g1BkuK8tQYa3zsLeRPX29rSCS73k1JkSYknjWvJX5hcp8WtZoNKez2Jw",
  "key4": "2fA5xPeNyLUjowFWw8eburuJJFTAK1iGTiM6rQtNkpPzqZWie4viushp9CfnDDbM8G71PSaTYJTBs5FKU826UwNh",
  "key5": "4L11caE7Sfm67iwoJMuKC7nfDPGyQhKe33GqVvKbuzjrYiZGWZeuvcYgdQ9RwPGzSS8rr7z73bEfzfkS9UWTDDL5",
  "key6": "34mmvKwyN7EFy3HpWFxC8CPh5YrmSX9dkM1KTGmnNF9dAcDPP6Etbbv4tkuMFaVHKgw3xNkjZwjRC7G6QUeydLc4",
  "key7": "5LbwYDBYUpddua2rF7WD4rWmm5YqiSoUVGtJbVg2xLpbsRQwnKaEDZuDaNjTMocsZ3JzprY8jL7cQH2ZDrL4fSWA",
  "key8": "3fjrZTecpRqtcwtNpRFsDv7Nj2rSZ3p2M48hGt9T2hvokEx9XtmE9LEX4ckyrDUrZUnjaG57Hq1sWcajxaY59CdU",
  "key9": "C4QvrJKp318me8xymHpNR57Y2nsb9L9pkZf7BNFq9mEYGwDnZnA25f8FRuHHV4khmnwgVRVqdqvswp3nnECd7wk",
  "key10": "4t2xHFy2kMyU3LkePhZocQYbk1TqtNCkmtrvrB2cXSc2ystmkGLffsstPDNk6nLo696YMMcCNH9rSFhJxjuJgpG1",
  "key11": "3217sDwWiwMFWJmKwXHNrHtsfzzU1Cd3nthEEcVBybiZQWCk1Snz4kxLKiu51p1bbfhx3j3A44gsDwSvxwym7wUW",
  "key12": "5tL6JHp9UXWRgBqVJABe8iziB2HC5M8ofLj74ewF1PCLLvPPv1qTz7e5K2G1CW3pLZ1A73Q6XYPzBMMJJcxkcmR2",
  "key13": "4swHVoZuChRRYqJoeiCFRoM2g1AMhAftdEXg5fnH6SfJQn1Rznjtv6SXwzuYgupM9SEJWqxZvigqMdWBiEsXhsa4",
  "key14": "5uMBzpnoaLMPuuU7rARv126V5YDnzREoxP6PqwV4j655hwg2rUGzJSeTSGLzsXPDS92nonjuQsren7yiAntZ6Ry9",
  "key15": "x3fu8kaqaoiGUyUiBhRbmZr7nARWqRSYXBMbZBHCbXQopzvQB47jHBFf3Ky41pej4BrHT82Hsex2VQhHKsxFNdw",
  "key16": "4JbtX9wsMivsNaZJe97dA5Z5ppWh96qL2bKg2Aw6UzofVjRaGWLkmNGqthwRH5cPQnS4oK2VaZP7PF77jp4ghgvY",
  "key17": "3WqpeSPnNkLAYYaD9bpeDT9bt4YSsypghck5WyPjsvjoriaj67Ri2wdwuW4qajpdghQcrUK1xXQL7sWVw3sKyrtW",
  "key18": "2vKogymBrQq14yUwpw9KqguRHNRD4GpoqQmk313iNVwQJTs2jGhkeFcwDQkztWw2trTdqyT314zpeSeMctYSH32o",
  "key19": "sN6wacxU5K7Q6FjQo3Yt7RZ3aQwUbUZrY49pVmPUqwF3aozqjiWgCf1uC2excVjiJ1dPua7RDWopBBduRB13JQQ",
  "key20": "3ezhRv4vFB8YpaBVk5iZg3TsM2Z2uXbryLxZ77jqpHNf3x3CYLSgaSohAvKGayUJVp2D7cYBuZu2WYKYp75eEyjM",
  "key21": "592uq5k9Dy1q98PxpQfwTXNfL6VHgduYkzQMe6znhjcHFKQabkTRRwC6ry9fVg8yrzcQmpZcZx5oibevazBquTnn",
  "key22": "3bg7SGedjS5xrHJudCDVv343BMThrLSFi7eg4uTP4pCrZ6Ju32z9gW9pSKDyYSESAVphdCHoGSyDemjmpfMCbXGq",
  "key23": "4gid5re5Q37rjAGgbMc8StHh3b78fh7EJcszYmeQrLPChRDBtomoaVXjjNjnrLhvBeysBb7QH93ULKHskbNft8Dw",
  "key24": "21MFKna9Q2mbJ2DMyHVMXcWTFdt44m7cgVmhz2sznUPnQ2TMA7AEGWydGovJ7JNXcrt7CECK52ygZUg7cZNz1TCb",
  "key25": "2XF92vNFUN43utmgXCxtmjR7GRwrzmZrmpddCqn3MWA4nBi2HnGZ91qnc5QDRTn1NJJGr4rETqhbA7RXe7CDG48z"
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
