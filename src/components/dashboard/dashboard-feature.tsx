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
    "82JcxJ7JTa7rQU83Jr2zzk7sKufbYdxQgkWV2ifUdcJf8BMwBc1TpSYUgeL8dm7gpMGtNKjvJY7GBcB75txnfNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xd6ca6xL2xrn1sBHE6NJE9V847syA7phiuNB5QCZ8kA7t5uqD7kec11R6dirnDRwBABoqrciouyHYZnea1w3qB2",
  "key1": "K341wWKkSFDoFmGo5negvaVexn7WF6PmKFsmUnyLBVtqeyJY1UDdB1SAQmCivv3JkDWgGnD2SRng7WUJmebAgq8",
  "key2": "3t4ZhZQkQaR8wBfFuQe2rzd7o67X9jHm3VBoJ69ZDJ6qaGjepoS4ftSWTqTd5xGUWZFP6EYWU51FEGoExotJ4eMZ",
  "key3": "3w72UiYf72aGJ21ZyZt5HJFcewQBGs38MjKi76SnQHAyjU7cWcdpfxdVNB2kAPHdMs6WqVkQSiYPrF1Tgzpfn2C4",
  "key4": "5eUDAgPuPAkgzMx7S4xTieERmNezaoJXvvCmNqUtwLtAq8HTgirySF9VgrGdH5D6zw8U42zJjQ5guAargcKVB6Si",
  "key5": "5FmvESEQ6Zjmr2J8uB4jGkxkELoxCdGS6XsavzxsUuqe2HbJ8KqpMXBNyxcz6SewYdU6sxfQ9GUU82A3QC5sJwrS",
  "key6": "8sq7CtH6ds8L1Rrqbwv9eDN75mbdZd2Lb3v1sQYFECovcV2Qi6ab4cXHhn6pkewp2pQQr8K8bHQqNux65cUmbVn",
  "key7": "42inewkZTrcRyoiYhaNBF8LJLR2rDdLvwWrupoaSsG1Hm8RmmyccABuow4HEtEUwFkMSYXa5Q7VQckk7P6DhQwY",
  "key8": "4sUiruvZeA1s3biLVyv82cuxphmZUWg2CPwUqRDPBxXzCwGuFynLcH3Y8ecQzsXR6n9ppYBnyyWJjDoond7tzM7Q",
  "key9": "3hjtfT2QrsRtzBNJgdMUd7ZQiHBvvH5jMmPCZxMzoa57fw3bpUyou5ziNhUVzfwjwDrWMTRrPCeeaPpSL6XsGo3E",
  "key10": "5iH7HBXbMwG39TpuSP7WUCZRjXATWPU6RTPHSD3LnZmwZHWAqc2TLfH2wPXkSadyB1TZoMM7xNspmK1zaoMuAgPK",
  "key11": "2U5yviuHMYGNuT7eLrKAysQtUSQnZvSNkeymfP9wE7zEUm9DQMMVfvqxiHxDAnJ5gpaWgccvUTtCGFqA8V1iirDp",
  "key12": "3bWzt3C2gGAsQiBgmY5brzdYaQD577BgJvX7jcr7M8RjiVBzvPkAWwNnMFqFeXS1cgLDbBc9SC9RwwweNbBsDGAC",
  "key13": "sb4LP2DAXRCXYhM4ZfpWCyrASBQYu9YkDGt4ehvqkjtm6y3mxMqiNGveALdwsivav78LbsQyFqFoyj5UPFW5NJr",
  "key14": "Lq1UwfSpNmyxSYfJmSZS1op4hPXqS5s7UEvCnusVXXatrs8DM6mamN8wa6kzpu8yBBmAJ6gVwfSc56sug16nNg2",
  "key15": "5YFdM3NvkeZ5Rp6zScUkfofAGmMH4fivPJaTC8o3Uqy9uQf57u5ySd9CVB113tMk9Mc6HiLvqB3m7iUYPdhdUvHU",
  "key16": "2Gj5RzjTtQdJhBLF3BQWqr2nJhZhBzd7Pcm8BYuDP1GSBhWJxF7ad7aeuToW7PdA2Z3tS9fehA9s2VzWCL6YzMsw",
  "key17": "2fhmNDDTQ5ErLxH6TYq4dKvHSQXoBbYC9fi2zQnmwwEYUDTNjb5vqYxeJaTPEfnE55hovyo7c9gfg2TvbHRSvsmm",
  "key18": "64AH5JFL6x2zcmrtG6HK7mSKBFjZ1tuY9eN84TFzfZcYq98KiE3kLGimLFysq8Rf72tVLM5LfkMLwchXwanmNhg3",
  "key19": "jZYA5FHANmjUSSHtSm2BRiLm1nzrWFRpXPC4QtBv45PeS7Ggdw53BaEbipLcDtgygse6XdCdnF7y6mFcPgRg9Zc",
  "key20": "23kaUKVHMyXf6xVD99yBLYfsn3hwywirqor3VtBDLhzX9WcCqv1jaA8A6iX7DQCazJpzaVS5AtnWdGdtrYWbAMEX",
  "key21": "4Lb8M2ux5D1RNBfoJpxGQjmbKvt3Mbfc6bvmfJpqZcXAGmpwGQkBFNYJhDyHSsAnYtuFaCEF7ivEWUqjGmMRvou8",
  "key22": "2EKwgV75jL2Hbv1YQhJTkvUfacwyhSUq2Zdhy5PU8VNm9uavsa8oadQKr6U8Mst87Nw2XBzVP6kwvHKAPK4iBD1U",
  "key23": "3n8UeW9bcjdb77U5NfmuxzzfVAzUeSR1GgMyV5ghoGAjTTwb9vFuDGYpr9WxqFAGrvQ1bnm2cusX78FEkEF4N1Jj",
  "key24": "5xbnEaSBceqBEkXU1oEejmfcbDwYD8weoFCoUa4UznYcUgxcfz4N9MH8E8U7SfNeb1vsfvgLdkfz65WeS8QY62Vq",
  "key25": "2nyjk9zAZagRq3tqXHXeAkvE8CLxdUsnjomzNU9ZvhzR6bWH1ZJsMhGDvodxq5CKfm9S9Lz2Tysh5EwHKPEEPUej",
  "key26": "CWDTFkSMgPrNaaSYoeDZgjt9qv4M2x6woyv86DTBMLSfW1NnDSiJrZB3ZwC6Rms5D9ANMDPJhBRaSJdm8g3ocy1",
  "key27": "5XRpmfMguJJGXbViXQWwWtdFsdgmJx3ETSqp27jS2CCJCUwb2ZN2L6HgLdcLwimB1WCYnWuioeR4ZQaYTfWaDk7B"
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
