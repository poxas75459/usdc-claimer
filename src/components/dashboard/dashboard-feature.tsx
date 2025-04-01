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
    "92eF5n7L8freEUrMpVcNiTmoU4yXiPZcd31Uj2wmcyMba1gVM2oBnKWMqP4hhjG65spNFKYEeqnKvJSMX6t5zBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DDJy4Wg7fip1eM6G3KWEuBB4ftetWSPqBswLvVhkLs1xD1tXksPFPyLQGkqiJfS9jJbuE9jczzDpkzNEWVXvwo",
  "key1": "3NHFJsPnK9JcBux8q7f4199MacQE3jKMf4vmDWeS3zDNaWukudmCJUWDeM7gGstNms1ExWAsy3acsPYhogDnMqsT",
  "key2": "LbbruFZibL6JUUKZcb4j9LyfbrCx1MD3edCiyrzy8Zj4jz2ZfmnrsBvx8HoxSmotG5pMiFmPGRvfCFpk2YbMWGK",
  "key3": "2pqqTKnQagY3xhjYww3fgydZanwkBGTgiXau72Cgw6TdA2dvfBs9tnDo3ebeh2PyNq2Bz2EGg7raJyKUWqffPSvy",
  "key4": "om9DAXatdUdxoyanqwPSqsH54TUnDuVcejafESaGPHJsqe1uPWfq3ywvPN7YoimhsMJTVo6xiU8bSX8BuJxWNeW",
  "key5": "23ZgDiuYzYiMHyvErK3bnvC8h7hq86xsVfPtNEn53h6AaGk164dSw1p1f3woQbkEwPxgwusMqXRG7PJKKhi4wieY",
  "key6": "fS8RaEroihWZmH6fKn2LMLAgEZ7QGMcv4KnPrpYiRqyMaXiDwQTjHueQTrQGx6iaweTSwo3nfB8am7RG4trjzQR",
  "key7": "35MBvAoEeQ59DZ62VKbcj3ZZXx4TS96oeSTdj8AbVjsQiP1UNiUpwYC9KMmtsyQHKPmTpiUjNF7iL7chqrZJuK2s",
  "key8": "LPpCQbbfkGWxoeeNEbLuSDu3ARr1t8VfNKFaprYg6mwrnUFNzK79R84L54Mp4vgxUrUHjmyyyjDxMcq46ScEYEW",
  "key9": "2JAWmwKeudrF9L3XGjatVW3AybyJbghVqwk21Y11SaPA4EkENnkf5c5Uyosnq2kk4mRRSRCsrkJAXjTvLvaE7Hkx",
  "key10": "4ppBuSVVeehxmg2dcfwYsj9Sx7hyf8f4Kci21LLYphVvCqwsbx9PNeFhGNWMNPndSVLZnqTrJVK5bBobEdAhUvTE",
  "key11": "44ZBUFpMynzcrPdjHrakde6fN1dUgVndWS63NV8n4pFQAn8NzbXUDQWvum8TTjhmLobEDcYM98X6MQhQmYaWFKk9",
  "key12": "5zR1AHvgqK7ucVsLYpRktzebagDMKQxF1PH5hc1DTYEv7ufa1PTEtLvmyBXvvZ9nGDhuUhTnZf25vLfWo5Rrn1zP",
  "key13": "3vH2AfDS2ct3WDREkQ16fwjTCULbRa1xXf8dWiaSdb2Wbz97p6TvLWdQeqdwn6vgjCubZqu4zN4m1MkJ8yYkVQEK",
  "key14": "5pg7VHVEe1U4MzcgZwuMVv5Ya2QcBM6aLVYQMxyNFZQnVViK8bVFf6FZKVX9fTuWNveBrSuYpCs4ZEj55ATEsJV6",
  "key15": "4E72PzocV4uRt8h2ns6RStG7pDiBAGLA4TGbgUSQ1vYGB1KGQysaPK4iz7RweD4qAwXTeRiqWgewSzAC7ncN2ckF",
  "key16": "7MmAutTM8YXF28ZLuv3Tnu3cZH5HtN9eAm9P1cZYwhmM9YcC79VP1MisMyzi6bKruvPd4N5Hjua2x6R4EXucbyJ",
  "key17": "3YHhykEq2zSpV93eSJ7pmEMCLYfaoMNyaxNgR2xwyvhnKRRYFSueYtCzikcPnqKLTMydGLmPnrf5kdgPg57L1DXh",
  "key18": "5FrTqRYoXavEQQV5tXDucwP5xMJnFwQTB3RfP6BdpH4XHE8BackXfa4yW7eKTGLBk6kiveQXaHSCQJ3UQmwQfw59",
  "key19": "2FEaEoGuzK5BBvbmTuxucgbZLhkxpTKT2pG8fatQvZthksTPTzhML8Y9BpovtW8SsR9FHsxQZMYyHSAvrbTCniFC",
  "key20": "3f7YzHbmabuD49Xwc38Mgu2oZt3bLaGprtqcAALNMwZQvF31La1TvUUHkixyn4oJWNCHYkVpsCQgXtp3RP2SaTE9",
  "key21": "5YaeP4BuVGT7YQza9pkSM3uwhiJTbrLKcd3xhpnSBjVybRSyLG8F2pwW11Pc9vTx5RTdWRKdKeik5df68VoykR3U",
  "key22": "3FdLAeqVwZ1BDTJ3XoKyhanGRqrP8uBJAKiSfYJk1UEXKw1XnkL9U55tDP3GPqRWKRu7Pm3i4AspimBksoWqEXV6",
  "key23": "CYvJP55vsiwvfidS9b3sik9GL4EXzGF4Qvvn9ghGSqAYVJ2gUb2Be3VTZf2duhzkVt2bpNAdk8JkNb56exABjKo",
  "key24": "3FuLXjeGotrB31EX81EV6wMQBVEYy1RfwvMRweds4geqige63u8TX4sDhdq3PJxePxcHKMAkoaorP74Jfrk3frMe",
  "key25": "5fFeUwp4n7zJ6esTRJK7vQ1XsnK3t5fHaJkRyTzRAAX7PCf3S9AT9pXcWgEirrkHi1TD1s4x3Ww9JJg8yBspvGAU",
  "key26": "2oc9tRoTPzyVDwLNsqCVFrPELrUsjcs8UzPZZWzCjCYiNcq9qzmHKk88AzjsNgf9qzgqLmDZVqi37gPh8zuFWYdj",
  "key27": "5R1EPxVbpdj395N8phqW5tmCnRtk4BhjnKqTAEFUHYEZYboish8Z3wpqPPjSBrHQogsZgHJFFsNcFdV3sgJwnNbH",
  "key28": "61jRevCvvCsLixzzdyrMGENShrEAnYWsR2mY3ou2YoeYvNsnriiJ9N69E8jHMe7gkrt9FY4QEsp7DmrjWH2gSqvu",
  "key29": "63Ysd6H46gwJd9SehqWXqRWhwwxJuJTrgGxhBeNtMyfeR1Lay2HjVQc7mPWLxG4SeGNqsVDdA1WKqSGdvmsqLYef",
  "key30": "4W8wWiKGqRG2ib1Koh7RFAceFP7qJoetzwFSm5xNRS1sz8vC6sN8JGWUaSup4fJCzS4dzs3cW41rixV2n5ygVjtd",
  "key31": "5vRfzH3gPNyb5m1JQDiKHEh1GZ7PsYkTyWbFvGwNuVm7V6kszfHDwnMujAKW7JmzsUjKuTFg4ma48KsHHHPzpE3X"
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
