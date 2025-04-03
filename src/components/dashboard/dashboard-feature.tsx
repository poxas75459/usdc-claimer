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
    "3dvouW5uKcTDjnHNijX8Siek6xsXzBETTkddUBCjXvk2Kv6fcgsz1ZjR9rLkMTKicwJ68Ati1zk8ME6BFkei9A21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNPXjAJbaTTAdUzVUKqToiMLAgP3FMV5jno8XEfmxj6G3VWRvUdpHoioMPZsjKD2gH383gsNLsJThba8MBz8HAe",
  "key1": "2JCTYdCqT1Ro6SP86YSKw3YqyGQmE3x5uw8KHARq2dej1inREpJeeC76yMrwhk3M67nW2p2mwoDRdXPwLKKZtoD3",
  "key2": "57iYeiZLwKmTMp9zfZhQppqz2xfjFtU1m8ghMdDfUPHLZzgjhYp2988W4KNPtVdH2ntvQhoXGxJQHzjPScbAtFKb",
  "key3": "3WLazxiuhTJ2gS7qstPSR3LrCNYTTRjomFFfdETqi7vSVdM63Urb3fojWhRHSRdz21BSX7jzbfc2WJoUeiyduNpz",
  "key4": "5QWPy48e1SRpxKX1uM5kfpykeCadVX4w6jJCBYdpmriuSYtdRpw6AzTJKM3Wb5npbAhZmHYbGXTrVNS38ZJ7wg9p",
  "key5": "2RMpn9waU9sBCEpSngFFbVg8drD5Jmancs26cU5nFSiztU2KD6KbsAkRev622RnMLRv38U5yKvz17uh3Rfg66hUi",
  "key6": "6kKEwES8vUGRVdKWLv25c7817aagJNKKAt17sTt8QNDFHApqkTLWRjBPNG8oeP3GTTbhotjHXGNMUXaN8FJRWjN",
  "key7": "BAb8GY9cosX5iSzaT8ZGwcrTaFJqkFdsAmwGcShLsZ9ScVLeSxiYwwUpiT3wbg8FNK1oMsDMxjCT2ogwyeSBnjT",
  "key8": "3VUktvhotjFrwDS89c4nk4DFucZqWk6nE7AkHRCgftTXALrVQBQnCoLWfszX9T6JBaHxKbeaQcBcmkak6Ek1QrcQ",
  "key9": "LusZAsdwoYrgNEfuZZ4TLvcCdUthVo91co4vM2iYfU2f8Jq7ZhrTrUyNv4Zh23rZ9j3qDQW2Lw2crp3Z51Cnq2M",
  "key10": "ZhZtQzJXM4CCoEacKJKiexySzoR4WdAM1twXWcceXE8CKGvfLdUJgAhTKq449fbdrhFbKzVwNxGVhHgHZE8Rb3f",
  "key11": "5cG81aXt8Bbxz6mn76eVDydDt6uvixhnp5xzTXcwhyYWZquFDbEoXDjdNyT9DnEYBAuZVpGUpVwvNvWXvKnUqZpn",
  "key12": "3Jf9HKfJULpBVCcNZ8rUE4jnchfDAtyXAt6zJCAQpxQEYsVaA3sTYRTWXHLZvpzPSQke4rh6wZwxE4mHQZoJ1inD",
  "key13": "gNVRRrmK9F5FQA8vHTmBpKjztGXPwHzDmHAnzMa2NzofpipfWDLHpdEREvbKcTyHqiHxRsZYVLXiiZ878MMfz3v",
  "key14": "3e3jYdANFUf4quHgYisgjvpX444TpRr3c4MpY2Tcwpjkjsdgrx15ahQncMknWcWBXWxzTWknnhbSBwfNgNNLNuHh",
  "key15": "62ZAaprfBHdzWsSQ1g4GLKa6LKXTHvcHc2tDhP1sLha73GAA3Y1WZ6oWzQfjEnBLpFBSEpFJ6kXX9J7MAHy9Xomr",
  "key16": "2UJAgVbKy45h2u7umpeSzQE4ymWv4u9upJ34WJhWKoGNY6MtXxech1GwikjQT8z6GqRA96cidrs8P5fvrSc73mPe",
  "key17": "3vAEeNWysgxA2sfUov7W8astN1KRXSjRP6abhUB2Sv54CAPZHKBV6ZAYyJmFuvvszyMaFFevq3wFA3QLkpQS2Zh4",
  "key18": "3B1H1PFEnvxwGAyKxTUyrVMHfLomKSmTgMKMzBgmQ3bMfp79KHL8vDQaFxrbppAUnYsar6b1ewvRGuNeTZYdwPge",
  "key19": "3V5GEBDvT6uYikHmXjKWSryg4g67oULqEvJa7Z71o5xWRBUtU1gaYisoXHLfE5EsiFGMDyc1juyCsRMFvHRkkDLy",
  "key20": "2rb65xykyMvgVAuAACKvfTTiod8oWEr8f2z9VG9FLHnsxHLnPCeFed9qiuf6Uj2a4DehPkAovoUCDYTtJi7go4ps",
  "key21": "59LdgcwkXDgYv75kx51r3Q6WyRXrRGDcBpLq7GHeSk8xBRi8LnAwx1svWxe9YdfBfqnebjFCcVuw8Hk6HvDCePJc",
  "key22": "3TctY4aFKdjM3RLQGG1S3gavQLodW7MJRn7KXG8hz5d9QirAwxCMkj2xe6mrjQkinxePGt9VjsL7NqanJerKbtGQ",
  "key23": "mLucnz1GWkYJPMvozSY4omRPpVsQ1if5LwVWNDHnKuDNwwqCDEndb5WfzsVU76jRzoUvwKg47CiJ16tJbXXgxSU",
  "key24": "az3C9srsyXZRsvkqevFER8XVcWeKTqSCgdq27yFtnBBfAw9pXPUZW7giBhJ3VGFP7EjcjGwnk4yVN4pWYAwiFX1"
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
