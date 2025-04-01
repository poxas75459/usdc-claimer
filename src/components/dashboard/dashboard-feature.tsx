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
    "45EugXuN62kCWstjUr9jXQgDWEGdFQGvZ7o6X7nNrYABQoxcspRrtu1725fxxM54CyPiM3sk3GdMKJZwj3UYSHJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsBZU25LMAPqMxQF1Gbo4yZHrLWH5GB8TarZbfqSfj2FV1L91CJRKvX8pawdDe5u1ina4BfYHSK8MvfP8ZpfcrB",
  "key1": "2qZryUXZtzMgxL56q2dEZUEuw7rtTogNjZtnWWmLUasj6BAYHHd7ESESJora8qTx1pU5TUH9ocQdKayzdfiTxMPL",
  "key2": "4uT5mrdWw99jbB4Vmn45YVuec4te27jJCmVm298nzEsNxUMkMj3w6xS4K1Tvrw1rTnC2zGFmM6mYe4X7KRUj262g",
  "key3": "3DKYYZJmo7NcbzvZKy9xpAjkCNqvcNgfDQwcYHAVXe1ag5dWWn1jNCses3VjXJ7iTgN8ih9BKKxgCBkLKbkNDxtL",
  "key4": "4xHpWasqcUb9UADQcVV314GSH2d1UeWY4NrVMjyhY1KrtQFV3jZfdKLLW3MjgNEA8RbwWsGStiFvAvftXHPYGFVk",
  "key5": "3J7v919YPB8o4NaQjjZjGxVH7GqAN3gFgcddrNe2TxPg6sjo5PhVc4DMrGiSUTDjHoSc4PEtfo9r24MpRz9uFAsF",
  "key6": "3qcUzxKmFCzV5o2ifDhiUrYdM3uPN9cmcYERfHSpz57vhUYs3vUVdWxkrX7MeiJkWFkXxXu5hj5b8QhpB489EwvG",
  "key7": "3BPNvg2oBkELEKVQAwkNhHgMC5n5GTGibB1T6781eLSAFm4ufnLDAuzjzgo6NqaK4pkxXMayJrmPBPRpdngvbNby",
  "key8": "4MPdUaxtTA7EUjG39UA63g1RDsxfhUnbVvPtvM8VsiVmLV2yz35cuEmBxSMHsWZELGQzxdTsGRZf5CuYw6wdbwKg",
  "key9": "3BpfwbBHKB3TtQwSUSKz2R7iqi9nMBAanzygv3Fy8dAUhVBMtr5rRU8NXxoPhXGns2gnDYUtRSMNDVFzhv7C5kWY",
  "key10": "4Hkycc8PMFRHJ2UNeXMzL4Ur47DPuhaaL4RyypwNfK23KEpiqZd8doTD6eZ72iF6okof6fu48dDytE9TcDYceB11",
  "key11": "8LJB25BYDaCR3yWM5UiH9yDobkoGjFK6AaCeHez4Fx3ps48CMHUPVvp9N6sM2GP4pVYTRdq4Ewn3qqF4ZBhmYW8",
  "key12": "2Dazt5NygRZAQt1LvR83xZtUG5JAgRruinpmto61xZzNXaPnjg8EFbd5sF12qb4x59k2MbusNTYYZ6dkg8hqdzhs",
  "key13": "PscrRT3SXmkaNV7tWbbojCBfDx95CUcS3R7CNK5bJzjd45YjNC4mZdaFk3Sxu6RLZb12EY2e7PNM9xgDX2VkM3N",
  "key14": "XfD3h9Q2sFFwizVyXxpkXbpbmmCooNKq8FuLeSYerrwHYHdD6JUbWNP5irB7wLY6NKUhiDAJKS2NPwchUNaZd1B",
  "key15": "2QAc9rX7mH1nNFrqvP5tCZcW1zYASkAGK9gCN6e18R6AKYeNvbp3ja4YyKpJiyfUcLs9tieYKPcySwmAyYyA7C89",
  "key16": "254uqTDVXJsy1efBcPcQ8faptx1WPKuA8S16y724dJ4jhEmjkp4XZy8QYBvdcMDdBPxhsrvszr2TUBYuaKTV9NFg",
  "key17": "5gByN2o8Gm9VdAQ3tmGk861nC1MJuuFUcsaD5gCzNEh6UhaffJRdrSG4CUQ4qifsHwAkLS1fq49NCDHCgem69UE8",
  "key18": "DA7ZWVQa2JCDje5wqiBgp3h7TicUHRrGo3id4isCD4HDEmwHy7XbrrBFZ5qmxtJmLG5GEU6ryTMjihKb2mpuyr9",
  "key19": "2gTPbXzgbFgfGeZdKrMbFsiNFpuYZSxKZQ4HdZTY5fC7FdfopZoQ9aknGFP9SEH54f4frVkcowv3tRvdSqbXD71S",
  "key20": "2CFPg4ZhBBsNUGvREwawxiAjQE65JhczbiKo8SQBSRPCXoF4kszLDdCpZ7ZLkGHTc3RreKfKjY3ebaGXZNstAcHj",
  "key21": "379K2vYvFAnozqBBifVDbtQTkjXR2KZtPdx2ERzJMhdxDDPWUeCnGiHB834tz3HePLXAe2S6RHZtD3oM7JNyd5BQ",
  "key22": "BxSQ6cVnDx9XfQEaPR5ukzEBmLh9yUYbAaDeu9S6nTfiFJFo8hHndba9pNAaacbfvt2adYnYobjmZuwrWBvBKoX",
  "key23": "4AW1v4UAmnKvR2t5RHDqAoksJVRMBsfC15PxwiCPqQV7zQxDjx528gNcw6yZnqWKCqUYy5YtXZi1gqSUH8cMze8t",
  "key24": "EpA8DoQaxuCMXoV6v4GL4p28q8MhJjo9Lvasxr8KTEUXpJpNiZVDsHG5LnSwmQs1rNL9oUJUYEbbc5svGQq5Jdo"
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
