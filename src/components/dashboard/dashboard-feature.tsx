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
    "2pzLCbFN9AaDAENUdiyyaKUe4xu4EPSVrdBvTFbccu5sYKvpQjnG8nC8DsaMQsmLiF1sy8U3uMRED5bGXycjVzdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CtsvA8PWwx7hcyRcuKigAyPf8i1dJozdp7NogiQ7xaqnFW86W7yh3MuTTN4hZLQ4aDfmbv5TtT8xbDiU6f5tGT8",
  "key1": "5nb62iQkSyPxc3KRxxGyCbcJ3kzbobtW6QUVaWrQrzqA5sRY7TgF9cPp27WYkdZ5q5iHGRUcPuCx5NfcD61o6XkE",
  "key2": "3JMhLZurcPtZLenL9rtQUYyUPh4AUJb37P6DuJhSr3pYBvzPkpeSKhukufEKmiQNeAAnPVPPh6stCd5g2KZfchKm",
  "key3": "2wVtfFt6YgDT2ULu67AJkwCKwWaXLh9QVWuWqq4xqqkoeCd858jjAxNTqkW8TFsfeWhpwSsENeTvhbcAar2WbMcT",
  "key4": "4NDmoUnToi6zRE3qbqyFnVUji2hMFf7A3BsJ8bugDqkvuPoZtjPXWCFk8BSdmPfJthJF6DaPnhxy8H83boY6AJp8",
  "key5": "4ug17NAn1xwWsaGgctpYxcEVH2eoZUinpUV3ihLA386mN2ddmDJAiZndqDdg992QTZPRSHJ5PRU2wGSev2RYRLxa",
  "key6": "21LT817ZAugeBDr8g3CkoBqcHJSMymuoC8y5iqrwZMNSPT5PfujPbdSZ5a88dMHVumVWbjC86UEKHeLiXgLR4XbP",
  "key7": "31K5yHPw2H1vLbScUyP7aGf35RoaasGTxfJSpDBcDSDZ5qF9Lj8vasenD4AXFMrcCfwkGwWzfx3rZH3BWSFqqCqD",
  "key8": "3KYdhrFnHyYXrFhwXHDTHQ8y3D7TfSChLPaDpDt5CxXYqJKzCzwRNSLrNARUvi8gweNAqrQXLGMJRSCFKCxNWztr",
  "key9": "3ULkyoAqNtKBKGytAGedtRwfTw7Cujb9WMVDTqWsXbwNvCkQJc26WQbH6u2NihhzAjXnVey1VUgQu2R4HfNmn9De",
  "key10": "4vCbJovGxsjCNEp7NgyyPCENBr95n9zd9RGHJLZwbviruVbUV59GMJzwM65DMuSGCN5y7ARAWN7rTYcDN2ccnrYw",
  "key11": "4UCjqRShmRQyMypk9HNyz3PXBPhekrX27ixsKYDWJzGCsjcUEoYcCyxTn7K3yy7DorbVWNF3smvKXvanpjeQm47G",
  "key12": "58ZQEnJDxrbH6HUCpNojtZXsNfefwXurMXKQQsxFQ5QEHREhs3jMHovB2D5fyr7VejwaEh2VHNPwRtMor6y21VSZ",
  "key13": "5hcHAhWARLHGXmJuENbWL1m5bop73Uz2qm7kSFYTGuRi2AbSmWiwLzE2g5TcnqgzmNGMuvEpEeKgwT8P5WWz9EjY",
  "key14": "5EBkJXjxMFmJxetxGUmi8GPgrM74tkCWo8JRD2Ku9Qm7QyP7a6KmNpGDyJSLpeG5dHxbfauA2hNbhoDkaCBj1sF3",
  "key15": "5WYMfh6Sx7JHzGDRHVLKAFfew9joH3GedF8MTCxxX3cVCTyiGgWTWxXUaWnUtrShgGR19TaQxGZsDMM77AuTNqy7",
  "key16": "3TbfRt4Je6P1Sefuk5FvbTepVY8L9NngjScJFj48w6bv58ikVdbxdE9GLgYYJG8aR615b1RrtRQGZR8LzotdB3EG",
  "key17": "5Lpiv22G9kKQvd2hc78q3vd8DqRbAtRbVweX9kACBfdbhuC2obPuahpLc2itrfHVMmAcugYuYZJBU8fsaTCbEHG1",
  "key18": "3P5ekBBSWdfAGwwpjEibRQn2tPp2vdA1KRtBMdrygq1KMQdpKw1CKuW6uPBgXGvsYGi1BG7eG4sHvnd95wzd2PDX",
  "key19": "3QCpbtFzaFrY97BGaeatDXVikivBhaxk7cAxQSHLVbruProDueFpEVdMo7ecoUj1gWTScDHAGxvdNhepx49kHpad",
  "key20": "3Bk98boF13gFhX1SUToRvJdnWzBHcnLiRiuj4Diu8inum2ciHrmo4FVnDtfEwoLoxT4wEkk1S9VWr8uLTfVkcubL",
  "key21": "37SWbgWpBAUpH2J7mYGhfRE9KYrzqThVaKKFw9BxJHuDMoRrJ7pNiMj98cNfZm2kwUXoYhPaen1jLH26iJCiNFA6",
  "key22": "4csExnNYxLBmUHbwMmod6PnLP9Vs4iiADu9pW14pJrxMowZWQnbP2JQ8K6kKQZN6TRDcytyg2UjVZVbeQGLgXPjJ",
  "key23": "47mWHtUYVBCGWqiyYKB5Zv9vccaypeMvTrYupGRMiLhk38d7WTJdsn1L6CBvaH9KczesborMzzEhQ6nh1KoKq11c",
  "key24": "eUeCTxUvDjAEC5UrWUk5vNiyexF98mDHtHaj5oMU5d2uv1J4wm9uD5if3DWaBnsy2JTt4wwWubb67Ar9Qevqf1X",
  "key25": "5EyrY2TMddVxocEYD2HftuC8fDvNiDS1okgd3t2EUqeHeG4bMPL3iDvNCcJ4s9CPVBJC4u6BQF2zad9Rw82MSSxp",
  "key26": "2Q7JCsagKuocEMyjg3QobJUPMfkpyvrB3sjf7njxTWHkqtj87G3aTDqRsZNn92L4Hu685aRDX9hq4xRZVhWze6kT"
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
