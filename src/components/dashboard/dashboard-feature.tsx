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
    "34Htny8h5WzokEm1D3gc3ULaeCqf4UDYXzTng6K6oyxq3bnZvrhVbwJ8NTBPFkSDyB3MGavPGFuZcKfKn7jzaLRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TzZ7dNfgF6hcyAbQKCEFhL9nxgaD78RkBFr7a7jgKZU783TYgz8W4eSrcBHjsvnU1JKdFPXTnG2NqvN14qBvpf",
  "key1": "2tfFcSp8VpV2D58DdtgQ1B1n1PtSXpR3aeT5WgYHR6RP85tM3y8Kbo13dVnwW4Bm9qG5m3S6miCg9iCiojr6bZEJ",
  "key2": "2xGc5X86ByfoARswRiauW1R2mDB9mANK5Bd11jk8XTtR8Ad2EG9T5dSV5FEK98xd3B2jk5DtXEjJLSmUAHBsyVhu",
  "key3": "QVHjQu8jYHDuFeofPSBKq9dc8gX2KKKx7R53aNkd5ph1XbkCajWbKXPpHgkTPCXZbTsVQytsHZV7evyALgzRfmx",
  "key4": "31AVQXYh9qfsrg7Tkq3yLgV6nxqgzSsHKqU5TnvW6WUDqLE4Cas5CWnYdvN1HUv9ZaGoBQHaP6ygpD7MMJSsihWg",
  "key5": "29CmF7qBsDhKcfLCAXbgSvNxfsxVqpEZZrtHXnwZwmAq4ifrUJ14KVi1HX9DQAezHe7aHNFicNVzX4PcK9nNtNVg",
  "key6": "25sNQdndYPMy7vL23s7eoLBPgCqmFzuhU9BAUxu7VLRojpfSmtJDDZWAuK6ekKhJ83qqfkw4zCR9WU91HtbhuBZE",
  "key7": "57QiHVWVttGy8HFanYZLnJ8isLBz3HpGR1YTGwps6Kv5ez2538DsxYnDW2wNjfDE2FehbXRkD4fPauRSxQaza7c9",
  "key8": "Qkuf1J33wDLGDV2xCKqFFmmG1H2K5KoCiaisTbf2AnKj2sLkx4GghkUNoAB44NgP6s2agpQzHAq1R5YXkR48EPx",
  "key9": "5UreGWFWY4NarFaHMZ67GLxZvfoFys6w4zwdiFtRWCQBmvUnHGnkmPh5MSihgc9fcvdpnjp9KPUHc5LeLoEMg8a6",
  "key10": "3Tf3hC42z7ha1t7v6UZLNXH2MhYcVefgmJ4FyX2k8Yo79JyeuwhPcCwB17AcPpQMaoKe8zrAuQi9FJqATrtGFZNn",
  "key11": "2SBsMG1VNbnWxxmbJTRWzPuLoALavykbqguudbwyWSjSU3YFVwYFkERfqsKyyE2oGo18mcCuzxocWfoyDa6dc3qn",
  "key12": "5ZjWNkeb9h7ukbKk1bzF67CE99bKSfn4TyvWQ212E3hHuPLmZNppWa3CgFYnz7MdKJgRwbcV3LsEvMkWSnSm71rm",
  "key13": "3T6eqogcxqDookVh22U62EjpmBt9ESmBR7ESjrfxuUWSCYH7V6u22mM3cREBseFmaFwmTx8avUAJ4uvj2qA2j5zn",
  "key14": "3nbZyBP9c1YA4X63MHCY6yYQbsZpQkRF5B4fTpknGEa9Vgd4hvCDdDnjXotdh6wVMrLVJeaUgva2SYGrHZezYW4W",
  "key15": "3iyLKMxwgDTrFTu36qhHvunU2G3zuBottf7vZUMkNZZ6vEEnqSVpcJNopuVFo5RQX4y7isYGDkFtAA3mgJp16VDR",
  "key16": "3bSfQ3zhbpseMRzC76M85dgNPnn4VwoYb5mqYztBmpN54rC3pDUJg3E65f8MBba1o9Uc5TVogoBKhrfyuVocomwE",
  "key17": "EaThqv6q7mD1yfKLXR9myZfXTUjq3eJVZwn6WJdJuJFDNM1RUsJuM5Nq6Tafth5HcQF2r9J2MznUpUjDuCHutQ7",
  "key18": "5rYuc2aNzXaqHCjbHSCQrdtnwg5xPo1U6vvKYP359uQasajMxsZJGSQFHVQ6yUcsNZMVGCThhpHfVGsVDUfq6Cac",
  "key19": "654dSDHK7ENz56duqr6qS9dSmYNgG7cDkMx2BipBt9Bw16S2FDw2zbSUwu7zfM5buPgEVYgE9R4eJYghx1nMod3Y",
  "key20": "RGtTNq4qxdeDC4BRn5ttJaAX74d51iozhay4AZeQUFg4yT91tvJnogfrA5s1Uc38XgWeDxRa8QppcaZxZ7R1Uwy",
  "key21": "4mHzrGnwy6J3MLJJyKtyuAN672YhUFnxrdvfRfbzi4NwQskr5e2aaQAx5knh55Yy2h2XeroJAoYmmBfU9NAGP63M",
  "key22": "57ZW1swaaqNp9kvot3zsLb8mZwSjjXCoTLS4WNFJU77rBx4EvBxcFVeq84Et1p83Wa9nPcFqRNHZ6vD65TjDGMCR",
  "key23": "4qhyu38f9NZ5A3egTE34uQqFGUapoPNeXo6KxSxAstzkY3UJJ8FJKeRRKU3kjW5X9qNM3uJBLsQQREwBeiMyKht",
  "key24": "62ngNWEdLiqYX5XHCuiSqF8t4jeQZYjZMbpj86rWR7fAkxEya1jq8N5W68sxSGJASZvjP5zYMBbAgw2tjAMP4ZXv"
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
