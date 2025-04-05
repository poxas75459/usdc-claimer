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
    "2e6ZMzRpGJkKW9zKXGUNiquRnMBjp7eqYzKCtaafmqU5DcVhX6t5qDtBLrTioosNBrkSq69VfFP8pxM9sAudaP54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srphdrrsqNMBXzY2L3AozcMhsFypcuz86evsp9iTqh7244SMAakQASJBWpXJnrYrKGJbs5UbnCTRxXEGqGRGExm",
  "key1": "37KVmYwyyc3pinRW4fwHNrg6uBgtbpnq5as2xCCgfjpk6Yw4skxpQny3Z843jB1a3fwPFoP7kUuPwusk9XXTVduT",
  "key2": "5qF2JByxH6grNwYkHf38gHmJN8sUsTy4imGLnB59w99LD4kjSXfUH98F4p2UPeSMSJCVacFmK49ebHyKh9fTUUmw",
  "key3": "5KTZvFLE5qFsvJkrLYc86ajcEWRzKwJgT76czzFrKkxnxVrEh8ufn1TQLCuvBBse2hyiGVAdBNEwEv2pT8V3LEae",
  "key4": "5dj5HCXwDT25rETKNyEVeP6QT6DgG6DvDJZfU1B8qq7ZHsi7QJfGeWPqq1BpH3UGKPgbTpcepjEvdDPEjWudUbDS",
  "key5": "3bkxVCvn746zGevBdVad2uuSZNH16geYiPEKvBcgC5t4nkSzBJFCscmmrRFz62E8C1QANwF7v9yv7maDYKbRNNiu",
  "key6": "23NifPDCTY2jfY2HNGqugh1EfE8zZRa3FPoe2rNF1cEXKkz2uqFi5S56TbxRfuSungw87bivxxHDhiXHJYcPrZhz",
  "key7": "3TW3npdaPWreza8qAfNwRWLToNQAohWPNMfJGd78Uzixob2LpCEZqFPupVoHPo7qnPxrgebMj5TqQPRgNrYkguX6",
  "key8": "36TgJGeCMY8vPWo2UVs1Y6NPSrDngmK9mqR4HshP7oBuAbcrnxbR1BQkWNuZV7U6RUuLaYvqkveE2embgJbWD2QQ",
  "key9": "2CiB2vzXd9bkBc3bi8f9Prr7YCXahLCWr72WKp5fdgsYLSm5tUSHVpPY3Lht4K1FRcaAV3gNVdsmpuaWKYvRMtu",
  "key10": "2TnM5VhwXpdqvVase7LXiHJzQtwbi33XTAGFsLtJtjLSnzRi87sShnf5CLayNfC3whkE1x3wMfKinZRe9XZKU8w8",
  "key11": "3naWLjV2BeMsvUNFxdDZ8Pu6gkTVr6EZz6sVqeuZmpT6sHgkhFbDFG8X49yb4FHVVXEbmfP7mq3K46jbSshfSevW",
  "key12": "4aZpynWDVM9Po8iqcEefktoAjDGCgf3FyCmNfffh3ARheMPQ592FQ5aGeTSP4CYks22gQyJgSmGbn6RAcMz8BerT",
  "key13": "58FZ2JEcDvBzUiXVzSxwfYZbtghNEZqwWghKxozvs64ZRVSfuQ4RpJZiv98wYRYpaDJ2JFqzDpTWMfzuk3qfNqjs",
  "key14": "57DrHonet6QUK69haq6d4EaXb8cMEVsgGUoQMvgEQQ8KVgQ9VoYxQ9bykjXRBxAot9RfDpN34vBPU5MLoC1LBjKN",
  "key15": "4zwitytFnorZMQrmCksxYVGq6hFLkHCViZj6en6KXvcoeTNRMFQc3jnzu7qKSrfthj9mAbjSQ3WX9mFnwa4S2Q25",
  "key16": "4N24aDstxNFww57St8Fen78Tv3MsRG8hcuNZedHXAkJNVZbJgD2iUxeeazXvCmsXf1RBQz4zLSQcUUoLVssTBb5t",
  "key17": "3iwxCLxG3L5psfwBSAZeQFBV3CybPKBH4KLABDeKqkt869fV4kjCyiNVWRxUUDLLGcgR9vk4NUgxrynBKJJemaBh",
  "key18": "4DEhtVTwc14F6CG5ETheKAhDoRondAv7x5HhCiR7dMbcJNS6bZNw51Yxa2mzFVyuCMB4UYcAtaRAHG3WyBZzv1yX",
  "key19": "3z6cP8161wfpvxNNLL3C8kBCNozQRMd6fMRLy448AiS6f4TrmhtY7bvEvV42jmUmoa7QCwr4KnonjwqntgsMH3zX",
  "key20": "2soH5Dg7P3zT6dnHr1eDBnAUk46PhD2Dhs1kVuehcXNUvtCkDbFqFQAtWLV8Kx9eDWWnZTkbgjGd6GdxyrZEd758",
  "key21": "3UED5M2rpP6kkd9bL5wjFwSc3Wtqyorp9Gtjw9StLyhPC7tcsEwG2aNHpfPiKtq9wNAkbE5Vjyadr65mh7bERpdn",
  "key22": "8qS7cWKW9M96QLgnYDe1Bh85jctM8YpFuvuxWa9Ho624NnzeYun9RCbevqK793p83ExGbobagX75YA1aku1YyU4",
  "key23": "46bTpFWTxgL7koGhxZmDXi7tsqTQaSpZTMBas7F6E7KhGwgGwRqYFKUDiJB9xWdVFV57jb2XiEvaHQmVeZdAR79h",
  "key24": "2wxv4P8HpEcCi4RVm7nf634MDjhVFimTtXHLVYWdebjd2GXsZsWKyGi4AtamLBkDsW6SmZD8KpGQmdfaRhnGxUKJ"
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
