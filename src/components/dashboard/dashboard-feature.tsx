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
    "5m2pWJq6nZctM5zsKh3xBJZ6VMkebBvfg9dFLXQWy35nEiFfXKKbMtZB7XdAwkeT14Yyvc7Bictivdk9GKrYsibJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEPXLVKGHGBqBPrstNHPHC9kvj9eoMK6QsNbCYT2HJ7LDwCauWPZPHeU3xiVPpck72WmDqH8c8qGwJaYL1vnX1Q",
  "key1": "3zoSXmsu3yScGDtup9jkqr9Bwe9p5n3RjanZUfaerfSkGSk18oUyctCp45dDHBRFzhjBzRExFRgjz1KSWvnVZ3mT",
  "key2": "5EkVfbBuPz6gnHmRzsWSBdMWbjW3eUoDeNCM1TRKxBMJecKGWWPovoUxC4AGaBiwGZzwwCSHUcorGYnXQRAUfbB9",
  "key3": "58RKYnf8ivwhQXda3foJ88PKn9dAHy8945QJxD4nnYh1cYGy3MVSR7tUv2Y61YY1Lkty6DCgjTAbFvLwhRr4xJGq",
  "key4": "3JHdUBiyX2odn1gPW956kAohLhSB8aa9UHDGdcLEAoDpJBgop3we2CUhEQifyE7NvQngNYFz5thQ3fVo7Y67M9Rv",
  "key5": "4xbkxvFpDfE2noxjXtgguhNSatwdENiWbnzGgxPrxDn7zWbF5T9Ug3pfWf5PbN6pfpiD1VJbC79LztzguKyB3d1c",
  "key6": "4XqNdPTAMLmKJeMcHHKbNtZPTpx1XnZmeCgoCXbWP99eWHwG1Dsoe7Mc5nWRsUjpcQhFzvezTTNcBDEocKdtYUrZ",
  "key7": "4ChEY3SS7t9f5KzC9ZX7rsyPdWQE9bap1gKcXEUkvWCSZR5uZvrvCsF45wv32AuDyB4vEeJDAWXpm3KA7syXmh97",
  "key8": "2eXCJRsCA3xuZUSwY6okF3qMjKGgrN2KgF7gVXqWX7RKEoHqHFjjdch8QGhKpGmLs5TCvtxpXuskDUvtiJRVXfus",
  "key9": "4VAjhSbmfSxNjZiTaexRNtnYDe9W9nn1pERKGQDmGtoSvwon2SkJfFJf7WCXYxxXD8T1MdDNMqqjzZXUyAieEySe",
  "key10": "3A5T24La2fRATZRTP1AjCYVea9vZwLui5dwsPaSFnMCpqGABBinbCwZMceAaDuZ3VeWkSLVCnZaStaWjqRPxWde8",
  "key11": "rycx7DV96x3Lmdyy5ecuCBda2xMKHMn7Ln4Z4oPbroBhUULNDgiWKci1NE6nbCiX1RgvQHp4Lz9QoKATuxFeN4N",
  "key12": "4KmFgxvx9KEwWRsdNXAngthAcXKqn3dMr71662UWfxCNvCtq3bFwGRUXgkCRKZwLp7om19xUxqjYTjL6Vk1UZHVe",
  "key13": "2zy88Yp46wSMAgwnEjzahZ6b1abxb2mkncGo6C6iy1LGi9qVaSbxyv5jZFS2YMgjaWxsPg2UumyqYjCmUx2LWTC8",
  "key14": "29THQRzvtXFeXd3xacW5pp9J7wGjSoDyRbmT5R4MU8hZjshFnA4kAcUDCDBiBSjAN195h9Q7dvuHKHbFyTaL3FKa",
  "key15": "5C274hsxEkEPfYNRSHU9rh4mH37kwPRvwov4qHsm8kdsgtyRFUWig2u342eCba6BySZk63g5sLmRNHVZaREwuCLH",
  "key16": "57RYarocGdhuhxH15D5vKT9vsuCsxs8Uv2MTA6tCVUquvsLs3QVJmHFPdTB1vuyjG89ZcSyLeXgNBQcHn2vSbLAn",
  "key17": "453h8w5tsW1kNUz2ETp9J1h47e4z1BSq5QcAtAVzrGer4Qh1XpJHYBkeNzCpEGN1h5Zm37MX4DrmCU8Kvm7aNBxJ",
  "key18": "4jawoHL6kUo7DC5Hi9C3dTvmSNLCJoVxR2D8qpUXU6JTCH6n4HwN5455ccACoWVNrh3mkuCxcXZ6AweNXTADLkde",
  "key19": "E7TjPjGzR46N8QW5jiEvzxE45eqgmdSm7Pf1qJRPWx7fY6oXLsr413ukpRAjWFVJGSTscHzRx1qGtCsG5zGWTgv",
  "key20": "22Wgy3CS9NFtZUNDzXUUjJQHfzSySzztksunuSthnqbCMGtiMWYSRMNHmASNgZJyFfZfWdpxcmxaBmPTeNyhqvwS",
  "key21": "THeXCAbV3mLxZfp7gDMZAmv7nvsoFPgVSGXHbpwDFs26F79Vjdp2bv4t1ELd8cdmaAPKS33qYSQmJnQuiQFZyZ5",
  "key22": "2hFDho8vWi6mgQHpyghqdUABSEm9fRkadeU5ppcDe2XBWXdM8oK2EA2gMkvuF8bVquEJPy8d91oXcefiUVHfvFYj",
  "key23": "pGu4nVCJik7DYmT8nQ5FSDHStzPxCiRUvjerurPcZSsHvZYar4w8MFHLVVwYq5xzRf9o27kQKAfrvsa2ndhyhFW",
  "key24": "EkHPW7zNJKpfet2FqYCSdnjc6hrtSvAM4nYAWviRfh6UErWvrLUTfaatsYTdrpmvtoQatkJnZx3LjY316k2dNkd",
  "key25": "Pc19NNMaYkowBC7VBGnrZSjiYdiY8rAis73hMchExfY3tGRJjazM8dMMMD2o22RFetRZ2SfhFYgaiDdqHvbfSyi"
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
