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
    "3yWG9w5NkNsHm7WiMkbT8J58hBgsmpetRpQm123USScJJZtPUvD7EMGZDDPicimVBbeg9aSxvdaRmJu3njVYdHwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44eaNaSHmRh65WXVvmG4PnMSPY5YnqUsqtFHSZzUCdpupRXBX5fBWxnACHn5WGyvBvYt8VsLejSjArQpZMbovtg6",
  "key1": "5P2dcETqTGMkeHM4VbMux8ThtR47N2QomQ8sxnqihzuEhWxvQRKZRGt2QiXkpCBHjXSrojHL4PMnP7KCdz9T2CR6",
  "key2": "4bJ327Ft36LMi7drdUKojLUyHr3bUpgWiMSqUxBv3NLgouPHoHsvfAWnmUZKoCKnQVcoYggbFRDxKubhdbfsKdT8",
  "key3": "4X9KHVvfUugHt91JG4EMtAph9F9WcUtLgB5fjshM5bt6pRsqZcskHiYgnWnbHa3qZJhgswQdnaRULPdMgce1N4j9",
  "key4": "3n7yaLaz5beUhvF3jby293eyUPUc6vrHVwo6NwwXec9R8xeUkBaRUvjy1wfyb2RdoaT4Akx7925GXu59TP4j1T1t",
  "key5": "4o3689C87BiNU7EJHhX37Vto4xD9ipjMcusxfD4Psndh2nKcpLMRgYTQH2SYLJSBxeDCFzxs65fKxULfuVCBT3Z7",
  "key6": "5gAEH5CWPjjGef83sLBTjJify2EAYpa9rbFSHF3VWKGeZcgR3KLoG3g9ZYmRaUGj4W1sxJK7Dr4aAnnFG1qKVyzv",
  "key7": "5qWqPKwb81d4SpJXBCCoAfz3kHACh71j5SnKDsf7KauYRfK95KJZdyhUG48Pd8Qh3mBipmPvtHfACbTtiEZaKdTC",
  "key8": "2B2z1joUJk7GdQm8PLN4ozb8ax2vgPQFKM9WtLdVCSioh9eJBUD1exX6HvqiULexKjL5HTRzT4xQRQFQ7MYdxtLD",
  "key9": "2uYGH6DQ5xUr1BFnEuBuzaWNxEUTSN6GJpRHTLxh35Cv3R1fLQ8GPmkwpAcnVz3jtZpTNpFUmA6BthZbyyRdsstt",
  "key10": "33BRuxNP1xWyFKgKg4eJgyE7cSmnGUULc4YUEZkL9RSraKyp9L1RFCJhYmQRVopat4EX59fcxSQcVUbKFPPPinHf",
  "key11": "2BkszYNQAHNaJQ2j9PEJbmFkxWL7cwnATxD2qdKNYVzQVbon7v2Ns3WLpeTGdAyQjKkHm6GRB9gEzdNMD6xpChpM",
  "key12": "4wzDhn2mMmK8mCn2mEFxtHH7gpgapZ2XdTxVPeYhwkFM6ECjRwmUFF6JJsFWqzJq47fZa8XiuDHEBezPwvFwQSEn",
  "key13": "4EJytHh3iPpFtwg6Z7MuAWsQoGHcPd6fo2z9DTVeE6LXRjwEbBsJztHceCtLtNErYaXmhrD4NSVpLhJPDJgu2N9M",
  "key14": "3TLMSnkYTEkdyEN8ptEZKWFbLTrmkpC5Cd7AeingmGGnCCnh2143SwaL3X9e8YBzX3n2Fxa2aztkPSssFVoXFvcP",
  "key15": "4PYopj81977o3zs1wocELBiQy7BpDfx2BHd8pe97nqohGFKuFDdmZzEvEBGUxGMUVhC1gRLKwDJpMmDJv8G6tZ5q",
  "key16": "3ixD12Tm7HLjpbLdTxgrTLk7PXZhe5zLyMGPesBZzctvm71Vr5JRtJ37pek2DsuHYvfk6ARniECaPEopYGjp5ySN",
  "key17": "4bxxCgSb6Y8tfQZgvh6cCbsLL7P4HQgzTMNLdBVA3WcNsrM6SSwesDcS97aounctC4bKodf3vgiv7RUkMUQWTaxp",
  "key18": "ygE5Ja8HScGBKsRhAt2pLkTy2euwrANjmFENUzCRaQYzRLCMyaBti9nAUStgvS4vDH6wijDXcrkuqLYfthcmRSp",
  "key19": "HhB3oajG27Xzp7zpateFDrbc9yRZjRoPuHfxociurrAyxaWpi3RfH4UvqVovtoJEK5FaFujsW6UQ9qyntDuGNyV",
  "key20": "5wzhrvxAhewUyMN9ZgyGWtW2gd4Aj7e9WGffvkUDcpJcmE9o8qAYPw9wr8RvBQoptmXhK5EEnB8UFrbcGELyMjgQ",
  "key21": "V9aR7e37otG6j9CUg8QrRPojmPTVmk1YB8nuKgTBeAYJzrgNKjwnNDbCeyXjj1PDKMtRMDPf7AfbnAuzJhJK4Cq",
  "key22": "4AJPBLGpni8k6ak2Va62wfU8Eoian8UaHVDxSme6iCGfSfrnSAnutAHBiMtY1ZHkLbNz4V6ctef5WsjKXXdxa8SC",
  "key23": "4dktCgdEsdxW295cD8hquATS9uKe3cyJ3nLCxepSwXAgXVrYj5nPMpMyhqNxJxWy8aMQMPY3KwmZbfDHe2o5PGMk",
  "key24": "2XBrAwPHTxe2vHWdHtQ45Jw3iaxGaKdfmnSch1f1GjAiewo4efvogeJGt9Yza8osajXGZgRdzYxow8HArLqq5nJm",
  "key25": "5A9xm67dNiitStuDVb1zYytHb4oDTuxnaAm8dSERjMJmeFqNY9BqqZhCLtfajSHDDDShAZiKRpLA9UBpniUL6Ydn",
  "key26": "4ys9P5qRa45bN3JPS4FGYyhtDpyh9kAX7im7EvpPC7P8ouPfMGcT2hze5HgyZDYwsQB6pLCSKwEYLsDPgyVxmcvS",
  "key27": "42vHcVPCroxbq9atgRtYddgMdC8epFPXoYo9QQRRsnh1dbLDtUr5b4yCcVjo5ohAiYMPSfRhzT2hmrKxGQB8yRfE",
  "key28": "3cHY8ce9UEnJfrTU728P4MUJ6Tbbg2aCuYy5KpDLnpg6ndm6VtYdPszKWnNcvNrxg8CHjjAEKvUGFkTrPhM9ukyW",
  "key29": "EGLvkqAzrMYBeqNPso6HBzMQXJswsP9ZNXKrQWXkmE7H1cAD7ziymhH5hvU4j4CE31T7SR4VE9uWkoqqESVps28",
  "key30": "MJfKkJCVHVJgoiF1JK89jDrjnhxYqMBn3PBLec1czzM56Q86qyoDQCrxZwdrKCi3Fd5g1KUzU9rdxVZfK87WViu",
  "key31": "4GoDQQXBnXZJvqLkKvyt8WZ8Fc8WQY5qSZ9H5QNPoivY1n1zJgUAT5ruSLP8DsstPDF6t7fFz8oVrAFtuRLhQc2S",
  "key32": "5YmbBSxycCJmgx9UjupV69LWZkYzwqPPGEwT1bvGU34V3U4Lf9qXyRhAYKJ5nGVvxLBEezjAqvjsQDd5GX2Ae5sK",
  "key33": "2eKCrxqWZ59udvkU42hFEViVGG6XpRMHBV6urytM2Y6zUFpXoNuJKqNLG6HuC2qao3dSbdL24537LJuRqMgwRCzt",
  "key34": "YMrvTGY4xEzditqMEBHmoJe3hBwNZ44yeW2fCKoRPT6zbaDm2igtJKGFZS1whJBrRsuEJLYSd51Ud1zFYUvMefn"
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
