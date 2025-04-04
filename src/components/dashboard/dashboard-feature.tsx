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
    "4MJpoXTWpDBrXNxgnbSJbRo6ju2De8CkEkR9Mnth1v9sYNBZW794X9iwcxfxnpXERwrZDqdtMCg4bD28M8jwySBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khTmpJmFsCPckfGXpxLL6ts9crgSo57YBVyp78MSCFFJJznC1XJED142U8TD3tuuhoqwmsgPsELYsRFj5i3zJmJ",
  "key1": "CsQtmbEwBn3hxa61kvG8f9hmM5dnSjfJsDRmmv6ePbTGeWhZCfkn3z87XLKg8ztoximtqxZV5YgjweQ9CvFjuCf",
  "key2": "4p2SBWmZ9wFh5y86K8tq5Q6smfYqbUnQuicAtP1H35waAPiHgiseixBrfjBvZPYCbU947Sp6ayMxP9HdkdUz3d6z",
  "key3": "38LaxtdpaC7Nnx4qwUtuvbPo7CXShVpRgqZNzeG3RqWvVoFqpf73RJXeiYRGrgoD7dR6s335CpyomNUCPWx2mFdJ",
  "key4": "5p5G43ZSivph2QdUD7sYb4TJQMmzGKLa3xfCDEsd5v8dT7VtZRBaS8ZgrducoSKF4YMpjmBK1F5p5Rjz1MqmkcCT",
  "key5": "3QHk6xX1cgSVQPSNHGrtRbT1oSQFaEqhPRm5iwaCmJF8ecb1gjKciEyqLo6XEw6TorJ3Mu9df6CrL4Pb5Uocit5o",
  "key6": "26wsffSgCM4iaBKtCiD1rCwiHBQLXNtukMTQUXYZ4D69P68gEqP4pkiD8Lq9V8wo4jSqHqYQ7sW5enaWPZYvYXik",
  "key7": "4sbv3DWuCoLDHxMH1yhcZCeCzkRYd69sBb8sVTz5jfcGjdrci2vZfXkJo4MPdBkY2T2KcpdZoeNqJmCt5rpNzSHi",
  "key8": "rXguoTt3RiR1ZQg7qM3m5J85VzMzCgPArGaPeTHnVdrVcXiCp4AwZpu3QyhBxnr5VMWYpBXuKxqqdap1fro258u",
  "key9": "4xsGkvcBmM3pdZ2yVmT4DpoeoiffDyZhpq5A7SvcjUvgFtNaGx2Vidb6atC1iMNndMVh4VjjRBYWyya3QsWFjW3f",
  "key10": "4xGHyYT6rBiUPRcNxJkdjBpdq8V64sVooVH5f3Rhn9QLinJZyMPGHvmZ8KcSiZxg4cfmMNDcpBK5pDmmszJtYpoE",
  "key11": "3YKfFD1zkSGtE4kUbYRY4EVrWJhVk1izoNez1eoG7v748JVLBnrfVjgLkbMFUDdWv7BprG14xPrFuzz8uvR1pGG6",
  "key12": "57aD9XZKKmKRxXKPUa5dKYctfokMKTExEhrm8z44iHkggDdH7HXJu4zXWNzrT6CtCuVQgyCtPQJhSBrQBJG31BE6",
  "key13": "2EonfmBaFd9U7yP16DKPFfegxWdauf1xELFUV2CqR4K1SjnA1N7zmgwCd9HztMnZ88Jjs1jifRQu9FG8dhjaTcGL",
  "key14": "5Y3Xq7T7NTYJfq6q48NDcuk9Nd27BNYuG9S2ZsZCEjaak4taXjyPrLJtWM4LR3aokb2GAfWGMAwnnQg6VC5usGAV",
  "key15": "5WdyjWyRSdnKFwJFPoQVGwsB6yWQob8j1uxkmherLhKU7ywpFhM1aw55GoYYCXZiYkMifXWTo5WHPR1v3shnom51",
  "key16": "39YwpAmsL9C2e58oeGygHsfqN2R7iHmY37LUnaS1qkjE5DB8yuPhUtbrJBrnx3iZcyRKvNWLWpfdspnQrUhPt1Pf",
  "key17": "3KuGQXuuX2EAsunnLNv6boT1e99bqcCV6uoyyWWjm8jDYZeaYe7iTQCQ2j5mvKRh63upfpx8hwoLfcQLJn679bhP",
  "key18": "2c4QFBQuHF6TPwgQhnWYLMaHry48Hsu6kQTD4Hx27n9BhpAZTD8FV29MsWGoPnSHu8nKe3L8ivfAa6LjQmfxoPFq",
  "key19": "k1VvRNUh7yAy3G4UHFX6zzUmtw418ySrcLFrxTkCjcAZMSMpjHPCttHrDnPTYCyKnMs36JvpeqFNtGaLKSERSUs",
  "key20": "2chXV3skwxDxBHHyr2Xf8yn49hTb9uhqtm4TzkuyWNtWgSnsqB5wKBzXW3ju6X7e8TVGuMBHGvR99ctEHieSDAmx",
  "key21": "4V11ge6pG521c2nLrK6sT6NwCZRpYmXCvh9qKveWU3yguMsCsGVPk5qrqd4NNN6komWKX3qa4D3A2sHCQcNuQ3Z9",
  "key22": "UzCrhztzRtLXgBuc8LVGLJPpN42R99A3aSm1KKUvk4a473Y924rUbAw5Ujo2hTvSC5jmS7arphSEJE9GhjTvw42",
  "key23": "29BNKtr4ZRJ9dAfqcY5x6PHk1qexm7Qg2MPLfosa6VNTxxR2PXhxVqXMYbkQuhrL4kM5qRWZ4E7AMWb8btSiSFhR",
  "key24": "MNitqBrczfVnkeMYAwxk41ejtzMxZWVi4NhYyTQvfnGVeMU6Jk2Hp9qAnPK813HJYu6o9KGa1JzfuGeBRfqNmWG",
  "key25": "2PqJHN1F8GvDs3Xbz7qVfH3dWa7sy5vKYeXsNJN9fHLVh75B6fg9Zvuxf3c3MWVhYi4XWooQD9dA2pdTkFCMUUJE",
  "key26": "5yL4E9GEG4jywohhU7V7TUw9i7WnteEdexjxN6DKrj7HSGcWGEj5DqcrFMwTAk9zq5FdaJVAjgW9z7AfnBh8DizY"
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
