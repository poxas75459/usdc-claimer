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
    "2nx7PnR7o9xH8sETBCzVxXgAWJQwZGagchUh6k1xfVw17hx9XVvshFcSRKCg3cC397URfiGSak1YLAkYKnvpv8Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmvcsFiQmmyxwsCwr9NHKrg3VNsiE9oEkdc1j5m4aCC1YdzSSvgb6zJq3YX3vRgWBE5csV3m1TTYyynExxRR8HQ",
  "key1": "BEMEyM6t6ujkxN1BwEk2QGYQWisdhoryRVaEFgespzSVekoDbQVuRXpZN5EikznDRab1JTDEhowUa8va8jFop4Z",
  "key2": "qPTxMdFdkQWqvrXr1iKzkgcDNupFeQ73r3f1hjyjc4tqibiAprJHHx9fUtxHHyB9rkSrJ2DM54TUkwruAuPkhFr",
  "key3": "4Ej4d5XxSwZyBeFpkrWF8UHSjgSP4Q7YAN5JEXrkj3R9ASUvDHNmaEXMqMmLCExJswDRuhLARhpJKc5RScEVZnGJ",
  "key4": "3DCDahf4L9A5BbpRCJnSiG5t5P3xUauomG5hQSSw8SyCtqk4hT8xJNweVSCCvGMRigVXT8NAr8yiYSLL89Gbh97a",
  "key5": "5mgipdVpqYZhEdo9hm5V7Lcg9xS7jHhGVC1i9xciRsMK9BiwAqoHdNZPr4Djesqn3GjZanzayGXs5ri1Lxha6Ckv",
  "key6": "5pSgGq6kmvcc91Hb4AToZZMdSWsPcVMBTnhQ76Yacwv647DBPREN7n5QnY6zASJyMbjHvLcfUJoAaTdoKmDyLZYz",
  "key7": "tZsawbZ1mtBz1AkL4vdzEGFd6NxPXN9xpQjGEzxXbJhHUrZjfNS7qvpSw1todhrCLhofpK4zefQbkcnSxpRX7Pm",
  "key8": "5F6iahz9m7oDvAFSJbummzHhvGUauhBAZCYgGNN5xfv3VcFuPkeyQGfmbuuBcxUXtAVp5R4qng48RAXM5ndxGYfd",
  "key9": "4DqQzxhTHs7Pn1U81RoSojcN5gG6RzumxgmaBR8ZXwHMXoSwJyXR834Gxy3vswHmLeb19QF1dNnAXgY8N9zTmLXb",
  "key10": "5YxA9aiHMRzxewhWTWsBZ67RbVZbwXLqMyvUfaNLYRQDC7mEp9iozJJX8Heg3FRqjxUe44MwctiWzp3B9Vwk5aJJ",
  "key11": "Cga6TcLa2oDHWswrF5F7uPVWzvNe28f2Eyenc9manu7DRXYRJfT792dLKhUqBqPBD9bG7KvkchC5jUBDpCz3JS8",
  "key12": "2Kgt5JxTmv1RhcE9i5kFrBhUiFesg71m4Y7fx9FZwhjr8ZE1G143Znv7qxWJUe6tdaijfabUBnFZsyhhYaRiFQnP",
  "key13": "4muTGe7zbezJ3GvmHf98UmsRFzjXg1NEMxsMZgqkcT1N5mcuY181wVj88MPDe3PVdR8k2JYtQ3bywdqMguyerpiE",
  "key14": "2F1F9KcSKPVuSxth5VWRwCGDiP9X2nopgqFM4S4RLZ9oHky45JoAEtMk4KreX4V2kBWNxiRiNpDQnCwZ6HVwrcDg",
  "key15": "4SHhReoSq5AJZGf5bjPx2C35HYwYofz1z7XPSBknoK3jnV5m95DnvCnHpuQQrzE47ZaNdnmhCjDJSfhp9SHRCQqs",
  "key16": "27HgkL6YfdfiHdTLedjAn1H5WBZNg7Cme8SoMDhp1VJjnw2SMkqqSKAivs1wGDhogXw7nvvy6SKQmiqPmQAiZkh1",
  "key17": "2WndjQsDC5BiXfe1yMFtv4mj9nt9HMDx7BEMh5rATC8Z7JJtrcs6wASasckyfyQLKEpxF2ojdgvcUxSbKMNu6U3s",
  "key18": "3qPd56ZXEQ24Xqnp3Dggw1RhBmSAXzSrsNfMEqcUckWMxokRp852AC2eWuj992ZjeqFPP2pSkRpSwf71W9iGvcLv",
  "key19": "3mS8pEyX8ut4N7y9vMw1C2nRFnxAPVm9RBMkmQ6PwPrBm9EDianDVyWvXXgEDdCEsxBecbCVcBhEyaenggPdbFNp",
  "key20": "Whohh8BLgAfTWMKFgYJUQ3UKG4GfVmXAPXRz1JpNuz8s4mv2guo2Gya3WzMJa6AN8tFGbSM2tga7niL3wcoTEd2",
  "key21": "51wbv5RQCUexYnxUm51LpX9xrPZ7HLdbBqVUY22Uy8QmErnovAhxtyPTdSx1wKg3oJLoMyoejksB8NJg5tYegBQw",
  "key22": "5vJ5mQnmoqaDg63L5F3WGGb7cB8SaJqhpxQNQVYh22AuQrLQcR82iHHPaZfCCCr1NFyrN2hEDCCsAvPamyvMUhg",
  "key23": "7W5ujr82bCQBr6uNjp5DBnRxvnAyBTQb9j5LAxEt6XCJJ5kkptSujA8GY4VP3wTxGJNBPW8XcCg7GaEFTQPEzwn",
  "key24": "4Cn9evEbzKDjg2tfy5p3ubKnrXjpqkJMnaMyeqF783XU9K1Qi5TCRrcR8F8axS9WAEGn3WsG5hQVJFPe32GZFMET",
  "key25": "5wWtA5JCsq2L8WgnFCcrEbzezAw5UELoBGC76WtJdc2wW5Ldzc6EuXS3LqmzrRiE4TzXyS9jKsuvCLkVuJnz7zCP",
  "key26": "4uHLZBaN3kRfNMrdx47aZkwHwsfsou6w1fAPikm2aoRjZt6qZNrtnJbXu4ku1g7asCLoKtEjuoyiFtCZhUnaz9hD",
  "key27": "1zw4sFTt9zr8PYuWuuPDpFs35Nn67xpPmvTy68nzXuVZyJgUm39Nyc2VQS1bY7R8ue3Zwt3k8puCEGNFkyeenm8",
  "key28": "4oKYGtNmxsK5rSxBZ2kgrmbshHr49EqYqhn7YTXNJitm12Udjov1cYvK8xBu2hFzd5Qhgu5PbXThZvSzFadKLZd2",
  "key29": "3mYf5RsTA9gQCKdsi3buHELAmK4KkJDNCsNKYwcN5VHa19gXYQvnFR7PRZf2i74dNwJR7ex2jZWG4uWGodnCL8aS"
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
