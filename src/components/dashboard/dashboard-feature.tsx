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
    "5GtJVVkg6eqKRY1uH3z1BMwQW477TXZkHFMQiEPdS347aPQ1DnrG3U5xwXzbJHKSc7pMDRQsSmYeWM5sKPKev81x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXTnGwi6zeeHS5PrWz6cn5cmTnwNwHHsgT7NdrmJwBrTme8tKt58jiAG9zsejXbhtb7tZgcVxYyLAYZ5y15khVp",
  "key1": "53aPiWTZJurym6tEtZ25GmUoJTy96YkZnSM38qwvkyWtsanoiXuKZVCWygbg6h1HP3ZTKJtuwm2e7UwdkeMjaH4h",
  "key2": "FNvWLUPos4fNqRdMEQDeyys9GBbX6rfdRBux9eWDWRTMPbwSQ7aje4ZX3g5LVXvB7AVm8ownv2yUbyKXUkcabJv",
  "key3": "5vE5RhiPYix6PKu29f3J31h6aaqjGjmrWKYMFQ4Y2i44JW8TAVcevuncCXMc3i24HNJcBmpqg1LDVQFkWgQ3Xo3A",
  "key4": "5CFZcvTLrRneqKMxVwvKiuMaXJ6x9b4oyHMZbpsRQvgGH8T1vQcQLXFXUvYNDNETSEB2KdoPch4dbEzodiUpjeKz",
  "key5": "3Rij1G1d4M3QJpZUxPr9MwPM23mkrWTBPmfPXPqdPpjMXDmVcYFkFZd1dhEC6GDHrJgXuTtsVC98pAn4QLDmAbm5",
  "key6": "41AYAaFNeqvE1jSq7rcVRAtq9ZXbGFCJJLJ9bSjb5s46B8sC6pdsSBT7nfjm7pbEoDUua6CzRaW9fv5GpSiXa3t2",
  "key7": "61UvZ6nQXaQXH44CDw3VqRjWkSCApaTxDMUpUA42r4ezMA9j8HnPHm6F6tX96D9zwW1P7xBtnGizTwzjg7VYh3t9",
  "key8": "4crGG4ZZ5LkuHm4mRWQNirj6tx9rAW3N2xzWgxwCsV4yz3HncqV8R6ZYfn4QELe77tCMEvpWdG7yvk1ay68ny9Um",
  "key9": "35DNVaRCkcP1jpffQ2aspqutUjXknURdxb1QPokcSZNn6NsavnhH2gBY2gTm9U67iywSndhUf9n4nhtZCPNH3bAL",
  "key10": "2fm35wdreyPn1o5ex5PzR2b8oUYExPJGtSLnvthoj769nQYvhUdEMSaNNZjbSpPSJ22MEXe55a2ACPNSDdf89W4G",
  "key11": "3KzeguwfrjSGEvBi9D17tgGczBEMJJySL9un3bG2mgH5SKfiopse1aLxpHSJFmj4LMDHojyp1hdRp9kgQaudGN5v",
  "key12": "5ReNAzHHfDshvSQsjGHBNURtVPzEk2SrSMTjYcPTUuEaj7cFxR91DhXBXJN7eWyjSpJs79h1U1EDVUAwNJHiNLKv",
  "key13": "4mqDeZ7S8L7MkxmL11bGRPr3YCLQj8iNcaERwvMVorrmGfc6N9U5Gy8KVybSY4obJKAmJA63d1DdUPNL8LbbHqYf",
  "key14": "5su3rPF8FqcgsuiWiqGDZCdNqkNZKFmWan76PqQ133yXeQFYGTXhsMULnJJdvSnw4NfvXKqY8LCxq9uLadFXLS5S",
  "key15": "4SRNPXqPKu6nW8S8mBEk95DrUpBAyad2xVyuEJvp8Ce8uHszwLWKdCe5rZamUDRpmv6aLC5JdXPBrAEdjYmWtTw",
  "key16": "23EfxM6kTQzUTRxT3fMmAEHiTfiuYrdrj5i5hzeC61GB1gTUA53P6Fwrt7iPCuRH7gnEpR3ZtxhgKBjGVy9yZ1X1",
  "key17": "2L6WLdh6gY6eVLmL9i7Fmqki52xeeWKnBNUhgAa6f28GakPj34uLb2XhiHc3tJdLdXXcj26PnhRu2D547KRHxU2W",
  "key18": "35EZSLSiyugTg6rYH4jp4Qer6QTBrF6QhBWXTjTx916fEgfCJUkMk5VoFwGbAzRh47z91XxnbM5Mvv8TqVVzfh28",
  "key19": "3Uj7veMU8FGhfwG6yByKRkW6Twc9i5dn5aAWAPf7aTmfCKBopFdqMUxygmkMjrs9RTSRdDcYatpjGbdtHqHkNZca",
  "key20": "5Tye694nyqdnZCm8S5pTiUF5NLN1F8Kab2KtabXHr2DDi3A6K5aE2BpVyv5cyCK5JKW43XYZDkNGKxTMdTHc6ce6",
  "key21": "27G8iMay75ZDRhurdSQxEZJek1H9khKkULCKu92U6ZaPp154f16gFEM6CVmGjXaS8JmG5xb9fXSJM5vc2V26pkAY",
  "key22": "soekgcdo66HTMcZSoarrE9VjbhniQ79HFekEWfMAmGWDhpckifdDYXTqZhGKp1UJrvEPMsaXvLK9cTa4neVmFCd",
  "key23": "5eMKjFp7wvrK186ZcoabmVysmGG1FgaLPRcoNkDCejoqHTKQ4rtR42t8oR73La9nVC4jeGpLzyjuRKs8GucWApu7",
  "key24": "2X2WrTC3KcjGDNYCTwtmsjmaEeyeTaWgg76TepGMNPk1aHoBLbUPz9G3wDb6h4W7pNVDayvcbC1E2MxJP9E5U2wd",
  "key25": "5QMjJgsMpdPEvCDY6BYEZCNXeHBdBRWqjctyz7GJzpaipn13nqhzNNkHqjc1ccufFQoDMPDG7bceVPGXH8dbDS79",
  "key26": "5HzFa1D52mZJBoZQVrnHGyn6puKMckcruWvKQ6QnQvHES4E7S5BzFysarXX1a3oNwGgRMsQZmRdnyyk21zyw3nKj",
  "key27": "3gdcQZ297b1DuyifusxqZ7phymfRQZHtoTNc2rftgYQxKsGeJYLDxdzSVhd1uUZYarfiaXKpu7TMTd2NJ2drtTo7",
  "key28": "3GR9yfHa91u51Ny3G8n5gNfRRkTuYTV6PQMWrvouiF7XK1NcKc5BGHrz1KZPnG7awFsWsf6YkDPo4BG4zLptMadP",
  "key29": "2UvQsVMVihttD9ZVZzcjttoTyRdMo9b7rJgBpuGKaYoDaE1rkCgFLmmZ7r35HTyhS9ruXLXQVpgMrGF32n9mAvN1",
  "key30": "no4KT4X8Q5zviA2eWcJ8voFXzDggW2koQfpRLzMHw9ZH7iQj35PG4P8FbogUswEcHnH11yJB91wb87wUprLHPer",
  "key31": "2inanemNhztB6GVxzugNgr51tuMttrrjNHD12JiqoXkoHN3t76TmQ5Tzjq6bwekiY93canbo6VFLrtsoqpuvG5ek",
  "key32": "5k4PExZd8t8SDi4GhNtEnSSeDHuQiYQqDKdzDsCTXF2iRFWg13Hszpy1NjHtGn8HYnn2oE2CioC5cj3CMcoRYsGx",
  "key33": "2Z9bjizmdY1MK7nGaqTwix6aLCK3CfxpdtqCikuQcQTiUy6yA38SvY5Zbq559tu8z3iNznjFKKZdWzeGEdH7SB7v",
  "key34": "b6too6WMYkK3skPoKb8jjfsXBeVzz6c8Jici2jrRKfSTC5QTC6fnkP21SpizUK8dp69BPRxtvnaQCUcsNDKKj7m",
  "key35": "rdoD1TByh26HKR2RoWHpkaLYkVN1t5r7cnMF4PYstLsEMRjZzc9frgRoN6Qp5SjiyXyYxY7Fi9ueKW3n1NFGKRr"
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
