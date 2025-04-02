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
    "5HZPELCDaBzQGrSBivsUEgp5FZRZjLBBZKaTTDDJh7cUxG7tqRhJATeu3X7Np49aTnoQY451bhHZEAD6TqsSFGvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62PhpzMsavTGeykYyQ4yLak7KHd1Zz2qf598TsaZWR8ug4XYLd9APyZ8UV1omxty1fo5QL8Xz75McnGMk1i6arYe",
  "key1": "44wCc15s9yD6PafLT5PmxLY3x1AaTmCazk2pdrj4Phb1MyHH2hia3FqbRpEr1w4fahE98bYPZpAkhL5GYdSs2EWF",
  "key2": "5dxh2tUTsgeqeT9UvD1mMBb1UsZSkxZc6oCguwrMM5GLJ6Eq4MZX6M19CAZEbjbm2eF5op7EoSq2K7SDkYDKkVDj",
  "key3": "2gcgoALiTvtxFPDzaNbz1cPpbrSZTRu5NNzfxsC1USWcq7SyGvv5vcmctd1nWmfRjNdS7DB6vLGGSVT16UPYurb9",
  "key4": "5JfGVQehLuRTQwTPdwamcN2QDC7sxGZ1V7yY8TMnJcRWc9StBZYxkBwWs84YhAXY3h4t7gTCvv6GRqY5evR8snNo",
  "key5": "5DszJujCJHftFw5zTZzkm6HTejuRzGLV1oQYzBEtf1XmuG789WQrA1RN7exNvEoM2NXC3p34846guXopBz3tB8de",
  "key6": "4QJqzk2oDNHcezgRrbnhFYy4VNsn5hGRh6oG1wwQwyGH26YPX4qGYXnRvu5EgAW75pWazo5f51nEsNmoSp8iubW1",
  "key7": "41HWWQ4Jv8y5XLt4QPYwRs4oSrEYE2LqkfPAyN2RKRX5EP226bNH7WL6Pt59HLRG9mycRg2hesBKu4DwFEw1WpZa",
  "key8": "5hugyV58qbYwyDw41GvVi5TZAv5hApN6nmkAJ2TgqeqasBfrNfpLYHfSQAsq6M2AfGUE4zrmAr6Rvb2hoXDY3Uvk",
  "key9": "4bwQmwQRg2ypu2gRDK8ZoRnNYxFJnFQM3Yo4F299ooCAF5JkvtgUAEQKzE7ZELFst8XW6rv4NJUmPjcDYPnQdPnk",
  "key10": "2AWXQ6F61bemCgK3gDtS9CFAMCyT9Vq5n6WqN1kNUMBUazCei2PHJgD9txWHdneq4cP8ZZXYxrm9ootyUDuPx8fj",
  "key11": "2mmee56wdbJFXfunSPtskp9BXvvp7xWjvtDdooppYEH3y4wKyTcxTzBZU276XfFqkhBDsz53Kh1oHYm8S63EfNBf",
  "key12": "5yG12yr9EsoHsHB1V2N1mqL6kZpa8EgGZAs3NPYQtpvvcPkSfxqzychpnAEZN6PF2SSuPAFWkcn2dY897fb8saki",
  "key13": "45yPVWKjYPC7mPF5ZGFKAaBfDar5vFn2TCHiET1RrFaDqDdNfWpHGyJ1dZeTifCGDHB3U2kGjnAMQqh4U63eZiDh",
  "key14": "2eCabk25u43YfhZ8YZzbJMXayDyVhBtbcNFF8G3nKwcwAyq6NhLxX9foxpRob92pqH7vru7nqmD7WnwM5tG1aakg",
  "key15": "2PmHRSJKbgYteBXSWbVy2dk4ysUXScA8Hd6oWEp49q1jsMbuc9fdkCQBQ1JTWFmsmGZWm2ZvNHyZkF2aBWi79BoY",
  "key16": "2jHjgiWhYovgQvVgeG4kBwVnzktQEfMVW5b3J4Yaq5K9FFwhh4iXamM2kfy6yJzax2kUaHHWXseVi9G3YXPsxkx2",
  "key17": "umQqxPfERM39FVfJqBdvmao4BZndzdPqV9G2zS43uWgLUMRnRbxUN5fDSQMBHXwdtNVcstcewBZVmivVN5f7stF",
  "key18": "4sDWADdNjEBJYEs4oDCNkumCDR4Rsm1hXpSuAonfEQ35nwsBskH65w8Tria4okrwktHvLFnUKaZjafQQQ8qtq3SX",
  "key19": "5ReN9fBGnDG2F9rtUxass34JAA8hUFdNjEa9rhuyGKNzLbpdDJraxwoEHZ294sqEi7fT3RnvqU1fbqBqRgRtUG3n",
  "key20": "5N3grBtL6R7QLAURAZpjXf1xxufxkaJrsn6W4Z4fLy9TiwatTreNiBozmkPUU6A1Vm89v8N4E8dDUB263KdeFvpq",
  "key21": "5KyxEXtxuvBQNqojYbowDdmr8EWGXUrJt3kWQJsLoWPT2yRXSfRNjaorNsM8KiSuzxA82Jeid3ybXX2BiCs13XBa",
  "key22": "Hqjwz9Ta5mAJxA83XabDRfd4LRSJ6mdnpx9QBwbYjcYfsrpe4jrFNdUjJofMtFCgaVFqqm5fr2UGo9xSK2a5TtZ",
  "key23": "2dAqM6qJf7BFPE5YHVrcGRVDKTKt4ojM3D5VGxkheJmF6F1TW4KaNkPFs9QoVmRCsNyw9gj5RHi7yK2XPfcR3rdm",
  "key24": "34aJN4CXpTTD9LrMKmzrDNBQyEghc9QYhz49SgbPPwebx5cM9nvzLjkW3pPD9X8wy4rbkCdpFGnp9mFHWswHUsq5",
  "key25": "3BZVioGfpATYF6wuNCpE8PLQ94DCDersLfE8SLmYEFVjzKQ1E7w5gxHmg4bzMhyJkZXzdFuS4Xo6Fmu8NLJy77Av",
  "key26": "3RcZ2i6ZVqm6uwWC9iexPeQbrGt8uA1ZyPjV3E8JsK29ZW75AqXrUuiVgR5G8cax7cuP6P4dHim8ETNh4wTfgog1",
  "key27": "5X3wjJyDKY8o19ppFAuL3W8Z3zT1TiPKEnN6Z1BgwTX2MduofhaZtnyYs7TcfqbgtSJcGeRYDV5jWazX2CTBrvmf",
  "key28": "2PegpGjwZhYZscW7St5U5qcwSHNx6sFSWGmDwghVuS2JZ5RmtU28wQnzfCnK8Z9zoSEc4q7mUsndNW1qsNUgkwT2",
  "key29": "Jn9t1NYzoDb3uaHESkUuL9GDdcmrKpgxjcJXriPHmZjiUJjCdQbjxg3jxYkGqhRkHmY4eT33JVkSFB4s8P6iPh4"
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
