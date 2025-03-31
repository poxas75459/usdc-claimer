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
    "5ptJyg4Fwz7aXTiN1iU7PhiN5K5nz6H2KC1fBQVBJj76U5QeNKJGrxHVQ6oXAqQP8dLcYDfxLwdVkhwm9s6S1EcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nceGnmx1o9a9Tj3f2Azikq35sbqFgu3gGyCRxUsUKFKP83LT5iWb9Nm8jdXnhk8gTvxtTinw3cmF8YVDjT2e9r",
  "key1": "5BEYQAKpvJuHqMUshN2qK5XWjdqXZhPit7xfrwMNMTbtuBRFr6JPaCaDsSi12wCF5jPopr3BMcZ2a4XgdkCWNhU9",
  "key2": "5LK5g6xmxgNfBC3ok6ANbYcUS8r3NUbLMoaXpxgEZTxUM3RLf56GEJFmnQQGzEaxKcZva7rV2X83bjtPFSc2KP6x",
  "key3": "gQMYMz967t813QkRwj6fkwtp3bMhkdH44qUnSQiGuJABPZjgNm7LV5k9XLXiNfL7z1mNWWw119xMSjKhdrF4dvN",
  "key4": "3uUNtwxgfvZ9MYbvPNgUBDhaQJ2iuPXept78XqFWyZMVUsiP4Ddg7zXKKAwfi9eUTcGJLjpBrugBFQQz9j3HKKiE",
  "key5": "3DVS7JCmCjPqN5CqkE4qSfzjq6tguGqmTwuwgq89bvNKLnJSX7FWECQKCQ2VLyc49Uhdhzo2xAKB52gaQ2Cb8mhM",
  "key6": "5k9TAP6CfZfBTdcMEE9dgVVMKooUmxDKF2yzSrGW2BJcpHiRCC6VLS5bZe5ZH21djqGFEBmLG4vLea7HqCEhqDL5",
  "key7": "5BwcQBST6VhnhmLbBKxqxxa1atPvk3FMCzyVV6b5hRUgRsGt6PNPB3vGtZXqTjX6qd7N76kpLkEkmPFfCqV6d4Ng",
  "key8": "aw6Uv1dhcviz5dYrUMLW66dQhCps4bc2K3Xumj7ryY4BF4groNuN4mZqmmYEHo8pJtsbSc1Nn4pQ7BU9uhtg9Gg",
  "key9": "2iEthBNUfMtNvCU7EVSK718p1vfxRBssGuxETEj3zWYVZHFVbfgooqc5CWdFYUF7KpoppyummMxk9KJc9dNxVxQo",
  "key10": "5nm9iXub9SJ9a45NoDbkiLCkESd3Xugwwk8scdxCaRj4cGMtxo8PFA5xxbAVD5u1duQSy8TGiS5zGFGYPsqayM5J",
  "key11": "3TrBdHcoz5SpVVTPbeDBhmXsL51QJPqVSLDkNBCYLnRxh75poHjG9Try3WJ2c3tTeNTnZTeJmoKXEiwGNdpSpgTc",
  "key12": "gmqKCKiRiUQWGEf9Kw4n3gAGKqGwRxe8vxWi3xP1tq6Mk6ZQFFQdxMXMT5xzwA7C83DRbbX3i2LhVjDGC21N7pg",
  "key13": "41WrwB9GScBXTLZ3My4Dc9e8h7HFZxNZ89Hu15vZHKJJ14qDjZFa8z9rQpmSZsCiA34XRVJaD2qjAZSYtzND3suN",
  "key14": "3LBXodPBkRd3s2UfqHYCwwsR6sKWz2EbARuDcrxcXTM6GjTsARfyjxW9QFJr7ydT5UMDwBbTAJFfoyoQa193A9Rt",
  "key15": "5RcniCAKUPgJQHZSN7LUZhyEsK4eK16Zy2cgwQwjk8SoMR3DgwzZtgsVadx6YWmpr8aPpsbJxBT99mape7ZM3qg",
  "key16": "4gzZoiHZgXWKks8E83HE2sSfX1mhCA8MSBxd3TVxYN6eM6X1WwRXg38cxq4aKND8eDahMDppQkkGUMyMZkqziswD",
  "key17": "2X3m3BbZxbvjWZxqUBCymvfXhFXzgxt3QFWa5DGx97RG7tsa5PycL7eB1QwJnLUFfKokygP4WFeWeQiem1MqSzgc",
  "key18": "4rpmFv2uTa6Am1Pwyvxi5K65NRxkaxFvxrTnLWxcgwNTNh4WRPppcAgFLEMDTVHuBj6vGv7ok2N8vkJHgwT3Shcd",
  "key19": "413WCnJjDYeSh3ra9BPwUUtFSL5keN4hXXLhQcXUbJDvxRMUaWd5e17FT1oki5hqkGm9a29XVknayp8pku46b8qD",
  "key20": "2Y4j4S2cSKuQkG1f4QyPkKiCSiccFUHjKNZYgiTwyQvxCLA7GKo4tgh5MU2AKKcWmmDd9zTV3HLvJBjjqwiV2SDc",
  "key21": "e8V7i7qBZ1PPYuZdGRSNCnMipobhzKdRs7r4PbRk8iK6dpPsBAdV6RRssHCLhS5aup6WXP2VDu3wSYPNT6Wk1Si",
  "key22": "3VNkxgDd9cbioB38sgFM1aVkmcUzDbJoTZHG8w1fz3v44JHYiaC1S7k6ws6VVrRzTPsL9cSSE89M8HBMris17jTG",
  "key23": "5xDoFuCu72uPEPccaet2zAwqexYuQN3MgLLtLfbVWnSzBgFcHtNbEfVG3PdQt73AUfEZyDUhXH4F95NkKkFwK31q",
  "key24": "4WkK8q6htoWc8H2Aov4efiodindzB6fDvseSS9LcpSLBbGgrHLyRiMhCTZNcYCmXanjEbdeUjnTxuGKgizNNN9Lt",
  "key25": "2LssL7jybbptd39fU8wG4hRqB9buqynGwoMwbjvxirCDGWAdWYQEeW9ggjTyaUPEQWRsRNzWhtugb6vKs6itvTJS",
  "key26": "1szTEZmfS3qRv2jsPyXwuj9JU9SzvwP2xHzXaefDdzPkktQ4KtnYXgwmx4TyG4JgR89rcCMSjejuYQ1s9K2jf97",
  "key27": "5J7ur5MyxnURmeumYPbSMtDRVV4caEucL5jTPEKqKdf6KZmBb7brwwEQ6qrpvjGz352b7YMdneFpwFeYufqh2JKA",
  "key28": "2EYLC4ByEAcYtRTSh5vcD3VDnYVkKwrS2zqCqJ3Rrv6MSedRpsYVNE8DLVPPREfzJiQpsBN6W3MV38tZaHMa9PAe",
  "key29": "2eNhbuv3vo63kr1f3srk1ap51td7wS8HJ8zrFHS3djoU6y79wZ2Msg3JNTVMLnXfkVrkBED2VWTzrPpTAoBoicNU",
  "key30": "3g5sXwLq2BG9L7FMjd2QL7vpWXvL7nEPY9iGeUKzejKqHckK27uKHgMXYQDAN2sBiwWQoPvJH75N6ASEc9BWUKBP",
  "key31": "5Vt59tBKwJw7D9mSV4c9wXXehFuWgG8RAzay9BXxQamkeZMjtNsAhvfDC1z1daJiDCpKMcSSTbV59VrZiSLoV7jN"
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
