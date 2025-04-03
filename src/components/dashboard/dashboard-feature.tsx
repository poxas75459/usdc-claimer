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
    "DQwJEDmrLfvrp6WEk77om3fr86CDEpxRxyt8qpB5mYzrCkj6A25RsFyaRM6iMWjoVyTPeBjcLsUSfJQJ9q2kYPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CL86jeW43xwiFHu8KaQH5JDpiWxEsMiqztTz4BRMmwqzWCAXWhUaRhMF75JbLbnmtvUCtxcZ8bKsNSjtS3RzDMA",
  "key1": "5kNDbEbwEiDpzTa4RYdhKPddWS4NWwWx4cLBCPB7KuG4DdLxv71qFswbcuro889JBkg3DTMovkTSS58AvdABq4KU",
  "key2": "2fKx7quEHmMhYeqPXmrvPngnZWphgTQCYi4ZEN41AjBywTUUssbqfoXsphSKKboNjGfSXJNPbsDjn5wVjL6GZxm4",
  "key3": "33C5j3TWcSTy18atGkYi1pSAw8gBB2HRxYbU7AmiCWS4dBCvdQksEij3zHSdhtnN8Lrqpxu63t8jNkMhEGjpGMhf",
  "key4": "4TiT5LheQ9LzeyqXysmwPYWnG65nF1Ec65HkkdPDUFqrAPG7sXcojqmDVSbvu1brYskEurFXmxzeV6J6ktuvfb75",
  "key5": "3t4PvUfNcsdZ65EfCtLhtHzJ2ZRSSgxGkfjLxCn3f4hpLs7FJ7XaiYZHZrrBGkPuPdXDXQuYiwEQgh8bMWeJB6MB",
  "key6": "3cj3NVVXYAEgfSJyQJBKeD4qetbv5eoAgagn2eTcTtYVfDNpMvdkQM5YfSAawrRSVZbUHjqLQcNw75te3bxR6y4Z",
  "key7": "3CHGhV7d8bANLrDUABc43b1SBn3JQofZrdKcRkxNWMaskrwpfKYRVPB5pgJfxqxHxovBqtteuKGQHAFj35SuGRyw",
  "key8": "2dgyxk6HrRxgq9Fbi91cFtkFu3z1WAPM7qdecXQi4xCaf9CejiXeKvF2SPVk1i2NotUeq1Wt7SDpaXfz28dHS4W2",
  "key9": "4oa6w8yBuZTbXNzUzNYq6oV8FhGf7EGTJFcY6mxzE7hxw69dUZ527wmcsWg7MAhXeGLTbU1ZFTWKPNdpgUh2gjHj",
  "key10": "4Cg4LdEwRbeecAERSXRxXgy6Xnv1Nk7T219eQrJoNuHSNq5sX6KekULRJVoxg2W1WPCW63fmAfUsTa1SJzQQiRV2",
  "key11": "DLsLkVpNTZGNjvAtMowuUcEgxDZ8sicPFfkMW17FEorFagbbzE3cPq56XiTGhkLx5zWsinAUo8HAYbpk3qikov4",
  "key12": "QPtNEQQk6RZs8smzzKPgnLRSkNRjgoJdVKpQSmgd3eLZxWQ9nCqjiANjq7bdR7yPA9PvwLA7XayERfzaggtNjYh",
  "key13": "4ogPLHXEdg86CY9Ay35kAeAUS1hY4wUZ59k1HDBGvbAqVrguM3eAyoyvKsDAhpfgnT4acPMX1JVDwknqDod3Wzmo",
  "key14": "2ZVcmncgRLauU2LeDy5wpqF7tSYZL9iV6FTUHZ3jCt4uhcgai9byjTxZx2qH9PWz5Qm1WMViQNNhFA3PegoaH8Df",
  "key15": "3RaYV2RSBPa6bbxbmMsdMkyQ315CzZ47zR9C86NFj1KDpkntnWau9H4VFzU79GpyNT76u7J7yiHr41GqLQ8erNhX",
  "key16": "4Ehzs2JZPntNwRscSpQGMGubvabNacCPN4MpptJxWufcKxbG2SgdKqESLUWLfcmtxKycug85rhQ8fPtmpzW65JhM",
  "key17": "4tVeqNbfuUWFWDJfw478fRu7GmfWgroHMbLNACtyMr9aYLL9FS12CcX42E3wLUuV7S6zjAcJqieCTyRgUgy2j7o8",
  "key18": "4ZopMXPWbNxEADFvNPT5hneeMoAE2TTwjPTUeJ6tk359p8rXoyyNMC5vaRXgyjaVbQhQYLAp3Gqinw5xcaeuHyaE",
  "key19": "562KqiT52PixZ1gsnrW7nJZyXR3eahTnEwyEamf7WrbCCDZDCg45efyVP28iFuU4CZfo8bKtdEcuKsHeXnPrWLAz",
  "key20": "3uRiJZQrDZu6TghTM1fanq8ZSLzoAfd7wdWyKuvZev6BgNo5tYyXBk2mJUNc9QYuDp7W29XHKRNGSsQ5HoBGQYTL",
  "key21": "dNVsGEFRmWaeDm4rJn8a1c59dB5Z4Q4fAok9rbrk5N4KGFmW6fAoiu9xKyBnAu8fi11zdu41GU4uqhgwLr18kUU",
  "key22": "4fGRaxVuLDqJWzmsteVjAJeG1WZX4XBpqBxLEsBAB2ahXDVCyG1NvdyibKihtSGpFBrrmc1pNq77SvdRuJQnYcmn",
  "key23": "5rQjK9FVjNApJb9FPuVDFvAriMymqg3XniYF4oyWCFXG5atCtrocSURe2u4ixXMdBxzRQvsfER8zDWT3ySrnbfaY",
  "key24": "QoKH894K9Xxx4mmwAEXyAkwDFBdK5qC2ny6zPsMsY5JTgW9qXXuHZztn72tAZRW2TQJ3xRvfeL1mp2qNj9qyrGJ",
  "key25": "2vbahgsUzWcKF6XP6MS5MKxRrwZ4VAnefwBnWXWqLA9H4cbAP84wbgcrKyk9TixtEiuTkr2h9de5Ep7xtBeYHrE5",
  "key26": "5VB4xUjfgHVVb1HDw6P25FSnvSNi5gxcdVz5oE62DGPTSMmhg1auhPmpxLzGU1oBCytyjNmyE3EmbVZBQs3BZ2VY",
  "key27": "5CdVpXtf5gaH8i61HVvzWiEDpN2czNSUPqRaNVemxRqDX2UzC8WBZaNBuvaHozWT6y6i7sBZtB5TkVaCd9sR2skc",
  "key28": "4ZMnye9bcWo99kA9oe8cDFQZr7k56jaRbDru5R3m9enDd9P4ypvkBtp8rTMTqXHJmnTpTncA83Vw6aYW6stux3bs",
  "key29": "3yL348oxC5VWxfKZFRnKYrSaoHCA5FFHZncHRTAcF8DNjLLX9FRzR9qpxc5FsUtcgftMW4P9ZN7ru5Yfzh98nYei",
  "key30": "33Lh1CWXYoNZQz3ewp4zsMa4TrQAMpY2RNEWhZuBcekDsYPN4qfUrrhq7ZFpYYvfM7D3quzWaFKkLpcXjG9yUxW",
  "key31": "iXQHPeDRi7QJHtsBEg9uRWM1sRFtTE5Hg7jck2DrwrYsKGpSA3TUzE5hSa7xHVZRLJ2cPRTTSYbPyJ3oairCcMM",
  "key32": "532C6KpcnfiC74aEm3dMxnDwomtFfBi8NtjFdpQUeGGvBu2qwk1mSuFs8u6vTvaApXGKFJLL2sfVnf8YPDECRUwV",
  "key33": "42CoJ79sCQ6xdrcedXPeAGLEhJS1D3bhnQTS1JRxSY5nELY7rJTuSAvMMRTMWcRaZV2NgLZ1inxk4mN58C5T6XE5",
  "key34": "g4SYjEs6saqYV74a221YZe51rUtoYpth3rGGUG9HXza3xCxoh7ecRCroighKeDswwfcdRoefFPAx5g6pi4i9NKL",
  "key35": "5rh7yFBiiuVGUajW9zAg3p7HTGJtxqqfSzJQN42sMRJHsJzHjGwG3Mja4NrhjJ8KNq3EzKNpgC23pwdDtTYRePAK"
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
