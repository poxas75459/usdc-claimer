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
    "2uJXb2rCwpKEo6igqXmXasQPkUfdY7JoQ9T9x96N2Ai23a3oG4PbjNE6DoJRAymQ9odDaHogRMBE8FvHRqcTLKsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdCo7FGMGyPk2BPnjjtbbCRhBRDafztJZn2FX5ekJMTCPRANB4vYcMEyiF7vpBWasLjpQAecB1tX27G2T4gjZLF",
  "key1": "33fuKNsZHsqkHrxTr8YrAey9XuPNG2YHyF9HFfAF3xPL8czfk7KsUuoq7pC6RAmyX9FCQK3t4scxCbhN1r1tWArg",
  "key2": "2KWKcUQkLMMZf23NvcuApjX7ueezsmH3PhTHk7Cd3LZ4RoSFV4MgShqm5BZJtgtCsyrMZXorVzmJHHDnG1eZWCdn",
  "key3": "oYDu4hwt8s2s61X8aDBVKk4NMWV8BezMGjCAxQSKDtSJ4aU1DK8pe3shyj8yWBchjZxdzyVd4VN7ojJutPwbnR4",
  "key4": "4r7AjJCeddJTieqgq4Vn1fwR5ZxjvKXH6ao8MmEgYWT4BdLq26eYN6bsQZ79Ev5YzN66gy57jnbs1yKDJp61cLES",
  "key5": "ezhk2tFq8RKU94H3uc7JmGf8FamFo8osxDfEJsCYkLz8YqaGdDjZbNcev1toCaxA2FFznLFfHVe9jwck8yCbG54",
  "key6": "5c7jtFCEFA3ucTAU781uVSPpPocgseDbncwQSbPg3H48zDmtpq5yH3pbgh151BHkH8otTX2c5LJfxAYdXKktv9Hv",
  "key7": "32YQnZPLi1sLErAqC6jrEq6cs6XSnHZGB6odz112aDKhxrZcEf3joDvABTxgy7zjebLbCFZTAGyc6GXNkZYP3yAk",
  "key8": "3qepSN1AoUUxYvDkbPGTtCaEFSBbSV8q8c43PspqG2Tb7y1NTVb3RXkFWQPTqNo7ySq6YM72aNyXANBLZWrx5ZNE",
  "key9": "5FCvmSz6WKdornvymVYFyP1HKkQ1LorVUzMsobeSFbxswcG9pjDL2MN37Nc3rzXweVcBGt6DtZhGmeqPqz8f3RPX",
  "key10": "3cXFBvmA4SGCnFzi3bzhEzGAZfJrAAu3D2vEoUGg6U57bHXaExkM5EabzEs7huGXu1GVXyRgMwGjgAFXkkLv8jYN",
  "key11": "5hFcFRWMVyUceXCu1a8robUU9MgrnuFcqYSX4UDe88eKij1V29cs396k1eQ9RiLMeKzoEaiXnT5P73V2tyvPqJDP",
  "key12": "535QDJNHXzHvkSnRSXgMEyJfJHRUwhYEB1tB8AVK1KKmBFbX8uTSKDpguc1VHavY2HENcjiCp1vB4RS38YACsvjB",
  "key13": "2MyfAieNVYLisBAaekimRyGQvj4AeLwjr1FNSW1ZHEkffbiKJk7h2r555efi1AkdixdYHFaTn2qj1uAhj8Aruw4U",
  "key14": "WCwUNdZLPmFsHXBFDmHAQkAtKc96J6cs79EN7dBtvg1Fa5wMxEr4iEsfCKGk15Sh9btd6Z9KZUR8cHXWHdU6x3K",
  "key15": "5TpdKKLG2oWJkUUoTLsT6HNraz9gJLww5JFCXF6WyToYGRko2NjgKo4xgCHr3kNKrS2xQ8mdJ2eZntihTpxz2BQp",
  "key16": "3TZjSDTnBU59V1MeBEcWLRhdeSdzm9zYqYPFgA923DxFC4FygE5KaKf1Jn31pZpY5WJY2fH553xLzTErTXSYM7FT",
  "key17": "4VKw1PiVrAVM5VJxTebJCRkFkHH5Nu4SDaU78JrcG3emHUzzCA67iNsfEcCcPKBHk7jfr6UTDSQjm4VQHDs9Xwe4",
  "key18": "3K3eWcE8BRCCDz2JWZ17TJ4EVujVBHmVhH4TiD8Yd3RjsHJxtAEt46foVJaB7ktXgrKFxuxKv6v7MC5oAT7tSXpx",
  "key19": "2AiuxUXbCAizhZDseZEpw6nGb5QdjMCzXioPxRfSU2JN8zXkfvfFMA9Si4woERmTbMzkq1RKECecyDTPVj1P6aoA",
  "key20": "5YtN6i2US7do6AENXWFDNDVtu4rB8fYZJY8Hdp1Nfar3euer7KuDKASPMBeqNUpb5ioifh7TQDSKKFNC5zenKkte",
  "key21": "4oNuR4HFdzJTfjQfCp4DwQ39ptkcMezDqvu4c4SrwnfknhRgzYnCsjmFk1pSwz1uoPS9Tm15sMeR4wC2fFVALRYz",
  "key22": "5PNepycCn9JfAfZz2wDbYx4JouAqT37DWtrQcXdrdXxjhdP7PAiz2ygPSULwMqMpSFF4sMNDnaQi115iQyWwdJ4j",
  "key23": "3APdYb4rxUiAbwCAH1eYCYzGfZ1VP4fVr1wKoDGbmz3BjpXLJbFWBpcLHt1Jt2X6oQC1x7JGwdbVLHU2iiJR7QVs",
  "key24": "3V48dchsn7KMnV8CVcgJWvr227M52yxFCFeaF3JQxfKd36Lp8yAu1yZVtWTNQAf6n17ADXoexdyJMBzrRDtFLzDx"
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
