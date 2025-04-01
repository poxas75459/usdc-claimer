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
    "2VCcf8wskLkDQojgxh9jAT5wsiJAGZyJq4NAK1TyqoLvtDqsi3PPqYoCzD8onfUYTDZ6PYByfuL5nVb9evtywvgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpybawsTsUa1LCe2pMSnfpcHP4TNJEKSAD6iuc1UXhCpjZ8JchJ7VPkTP9gtez6pzPFFPSrGXLp4Kawon4HS6HW",
  "key1": "3DjUsbwgqPJP2FwLji5ewXXz5ckus1MWZecuJePPdrsTbCKv94Zq78kH5EbunvMhzNmtnu8UAwmaDtUT98D2joJd",
  "key2": "63aNFfZYXF95kUNDSPaR11CnBr6Gtuq3QGwt1y5J9UQHhbDGWr9rVS26mogxbBGF5CTyrTeJ7CYWuLG6xTQSaofE",
  "key3": "5QAimQDQQaTJH4eqmLZKpzKmCJZVJQkReJujy4BqdytJ86MtssbKjbUpGdXJsqE7LgebnB7TRK5zP42wEsBCN4pV",
  "key4": "2Bt42xsAkpb5EpHeehKxSvXssDUd7q3VZ7RzXxkJYvWGCjiyrcsSsUDcvjNuzZEw2FwcnHYpykGiF7iRA6ZtkN2Y",
  "key5": "3qEDQe5Cpbi1VDEmYk5oBFquyCq66D2BGBFrYyTMC6Miw9oVS7M4qFL3S3P9xApgr1bS1gW7WK31KbB1rhXt4gTD",
  "key6": "5dTgaEhY8j71d7h5d8g4sBnW7ig9KduC8outozgLZog35huYrF41YjodMtfkdgHikZMpGWErDNuMgXGUPQPiyopp",
  "key7": "3nKa1vqtmytVjJyS5mSeNxuAyzyVAFX3UNuq5voHVw4GfMCn7n18DxfPjz4sjCvHRbHw53yBSFxNjyNe5sJpbMtq",
  "key8": "28odvwnsa5r8QUTmX9UmUUwSHskk8uaE5JgSE7c8JCrgziaNGBNXCpjU7w2CpED8cKE7Pht9cDDUCeLamuznt6hS",
  "key9": "2q3Prv24q3dPvbB9S4CXCHCXmsYoHX3HjN3mKtfRFVzz89Kw1Z6EQy6q2UDg7v578uwTA1vjCEJJpwQacRfh8wRB",
  "key10": "5iYVbQc4VUTGiYFwDobZyQGE1mWhuMxeb6UTWHJsTh2qh3JnGpW6zZL9MxWw4m1EitSKYm5GD48Keh79zz2FSzC",
  "key11": "2LhLXvvW8swh6mj894xEE2m6H5r58N4fdn5YYbnwxzWKbVHBeuV9pLv5JTABejMt81tvnzcPnzVyqV8DXwrufUf1",
  "key12": "2V7ddRXrFiQnkDc914aaFepFVAnAL7uVvXTdFYWCnbcYxB9S1bGHmYDpT1rQfcj2x3d7CaGxeJ35iV9qbEafEMFZ",
  "key13": "2odh8GCbkRepXsuuXxWpEjbCphqQSy83qV7NyDVA5iqLh5kF1tEDZxAhURip95gJLmtFTpz71Pn3qigvtYjw4nTz",
  "key14": "338sQroLdmELZsveL3akjMxAZFCh2oRmuLwFcSuhdMg5JSrZbFvJVf2H6GFy39V8sg17NjX24gfVeJ4idPhXHXu2",
  "key15": "4ryJMj1izF7zeqqjLrJQQm1zxaZB7SsMPFVHJsemyop3zrqU5JaDMzgooQeCYv2DVkif4VDeSctYvQpkwcAmEbLF",
  "key16": "2RbLmokFG2R65UgfsT7sewbCbwWP3Atc3VkE56CUyKRz3qfxcGU8JW56wvp3o5k8vMRHGQDbWEGaECdRAzJgJg7R",
  "key17": "47nJJ7W8opuUrNczVReXmqqhfsQtUP8ecRVJyW6w7ZFgwf9gRVGtf8RWSycChJ9Qw8yFLqPpptyt5rHU8srvM57E",
  "key18": "2i8geXTNxZ9dMexH9sKZVLdkYx3o4mYMWG5ZJqRE7W4N5SaK7Ezrhvjca5TCqBVeHSauxtJFMCeWnKqXEuu5TKk",
  "key19": "4fDDBJ2D3Uvp7Jt7ESPEs2i2WnseoR2aKZJ7VvsjPgv9Dm5DeyKNXTgihH1itFnD253UKHWigUR4weKfie29nNyG",
  "key20": "2sccR7PdmHoJTbYVdEqmtemkFMkXjJf3nmEWdxqFYTc6Vs39TFp2WJEgZUnjw3hZCH1s1oLVScY65muasCU5Zw3n",
  "key21": "3U6Cdw2gfUibKDwhZjwvTtgLnUg8oAuB36rQZoAbRbGDSMsSKLWAun6b1wo4PCGRWECK7NKr4w3JVY4iuPnz3xtN",
  "key22": "3mmgnm6xyDoPZAXLVUTsLtvT41Yxq9JXdFPGSE6QZBc16xFySv4RnUZ6pFwDvfmxmYo4n8TJL7cGVoDwLkwP5uek",
  "key23": "3V3Aso3WqkVZJeAPvjNgV1K7xxsnRFzXy5d65fw6QVHdmbc1R8N7HMdBa76wGiGX4Mko3VA7hFDSmShbDJSwREw2",
  "key24": "2jCnJEw3rL1Fgg9qAPFN7F9j6265KFMUHRFskz5a3ePCwKTKHj5EAoSfT1mqSrnym9CNPkTg3bUWxt2a4jgcwqK4",
  "key25": "4KqARKPPg2rFRi1vCaQPVP71JYAQt6JQcpDztunVPDz8gBbS4UQrRDboXD6Q58KRjrdvFYToQMZmoDtSawHNUzAs"
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
