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
    "3QgEcKKJQFXApfnEfnE9u6LoHnmSta9L4ufeBs45cPkjzpJLDYLGXQRVCAfR2RAYsywgLsAafJ1cB2oBoh8zBUdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ZikZcunEynGu7n1UvjmWcqwayT7QmFtyxmpsKUKf36VF3qQBJMtR4trsT7uLPYYjbgzwoWqZkNiDvU1VCBmcaD",
  "key1": "J2rHz53mbx9xcwyvindjBMknYbzWMkzj7bZaMpi3RX1xLCWzfeXpAA3fsLZXUnnojjvus9f1rTNNatcqYeGNZ6Z",
  "key2": "4Ta6wskBMgsWxJT4efNuxQ4sTa44QWnpL6mvA1SHfBHVMncukZDmxF9yNFSxmeqpZic7uKjASHxPYkFMacBq3z4F",
  "key3": "5iQ5Z56131u1JPVTobQAsrvXrJB1j9p1op1JRMnNsYyJciL3RkGyG3sxNhutMSe2fiRmzYWNnU3UNbcrSCvKJwav",
  "key4": "3n4db2JVyi5oGckS6MPssAB1BZznkgq4rjsrBzNhmY2moZdGnZ8nDPeKGzEroinuGUmTKzsc4sDGgHm83Sq8WRtg",
  "key5": "2T6nToXPs7dKaK2kBf3PgWqsVei6EneVQsuYHr2ZB1QremcaU7bjMnZu6dUBqzBwXyh5RpEwo3MZBY1YxqacJm1v",
  "key6": "58W2fen2jpspEyEvD3XMzR5tKU5kN1FphnTAhgiDJLPyxgYjDr3czdF8mipGVfpTiL5FqfL7iuU6aTHdE9HWzJv9",
  "key7": "5WRJQYpnLq5MEj6nmVeNkWVkZQukF99xu8T2egN9oSd5HD4W2dtMWzbUxJB3oivnMpDY14gXxN7c3gpTWGKeQBbb",
  "key8": "5HrAnFYmUtNjGQFMfnZbZBG86pGNRPNoXLu1EVCv6gQHKNAqDpD8Ed888kwXuTicuqpvJStdjWTTXar2cGWmiCSw",
  "key9": "26YgdYyLq29c6XU3AkPBp4qJPphQuvTVzSwiAESLbDvJywHtzAbX6AQBrBZcvBnquSeTpT9akrf2S68gfN8JVfXG",
  "key10": "2if34C2eVk1PgygrCZdMxhgQMqnZfnuzAbQRUiHED8BUMF48JoYaZw5E4dk35YP2VAjNA5ov5DSxfRNcdE9HckpN",
  "key11": "2EBKMkUSWZqnxBWLu8f8ZNcp8X8w3K8uKiqPBCxtUhDSYhep5LhbdTPLrTWzo6FZuPPvmy29HiLAFj6zDPnsscbu",
  "key12": "5uk6t4yk2p75fxgBAJhnT3B51yziLaV2XmBXvZwPNYSyMnG8gG2gVmVTSsa1y57ATPcoAACdZJwyqeYgkytvRPKH",
  "key13": "5s6Kiq2vL4GvaSZ3JxTJMvwDCFdhwRLwZKDpGJuDhEcaXV1rYpakkj7Uc7Jb4SCqBsJVAtWJhwkbhD8zsNp7oeUE",
  "key14": "4BAW2T2PXTYjjX53QMypqVnac8FpL3vd7gWZJ2KAM8uLCUWaHHB8N4Sy1hychaZBdVRhTDwaN1jqKudDrGg9dfk",
  "key15": "3kvsPLPodk4cfNwTsjVm4CXMF9VycH1C4VJjEDfQRtxSCC5Bf2nJwNz2m1aXcptsf3UJqA3fCrG8tuRLVZCmHVuN",
  "key16": "5TnL9BoN8RYpAut5fzkFD6V1xn2UMbY2svmArQbrNauaFasQH6yjEpM2MGr7iUYe9y5A2kSDv3VUfqVJfY1VrZdY",
  "key17": "2fCPvpaF1N8Ewz3oedUW9ExvMeVvwj8p9X6viT3Ln8AG12sCBEdFCGJG9ZXjCMp8rgcNSvUhVYdWSnD4bRbRnDiz",
  "key18": "2jaaGMLeAuD1DfKSq3LuF843p95oooMtgYycVxtVweefXoWEwQYmMZyXNC1pfFzwuoD3sHCeWLkMnguXZ1ygFVfJ",
  "key19": "4RRKrmdyp1C4mQJZdF5Xqka4QHFkdhVuKWQ6SMsNDRcwVDxuzrHhwJsmnn6Adx36km8fvfZqLe8sqhwkA8sSniep",
  "key20": "2Bj4Nio6tUyTNzfGAhzg99Cq4MEXyKJvGf1QMHEg7bwAdd6dfTCdwFyoiZj6sJQNbpyAGi29B4UH4pEcBc3URGdH",
  "key21": "4PABSKLdHmBEaYqE91Ba1F23D9NBMnwc3FaiLevqeVea6poj6QXcdhpo3HHWrCszLBhUQVGgaVfuG2LW8ncacn5b",
  "key22": "5XKv5Ki2ME63XwPrcDYKa87UHLovDtQRxSr8VXRuJu2icWTvckQLcdXqfua4CtLipvGQUQfgHpRnFSpsG4GVkd7W",
  "key23": "3CHwHGZnxE8UbCeovyjzaYH3AjVtfFnPeZMFKvGjSnMHBdeijvzB4qUMAhAKq8ivUVSfvx3rrFEiwypbZnPGpwq1",
  "key24": "b1PWjtiHkjUZbB5CrHqT7vyxx14jYDtBGM8RRbYZ2eLuhSHJxBBPR5u2Z3i5VT6WFDoDU58ANmVF5RmQgupHRo5",
  "key25": "5GudVzcoVaNMVp9fEtbFyFfSvDkCG5Lmiw9SvM2EQ9cbMpf1Skvxidb1WD59wdVBQQk8YJW6FTNkUSadMLiS3YBP",
  "key26": "3JXKZzFAfkuvUtufLvDpT8S6tejUkiLMHJ7QgHqBTZCP2Vn6jXnMscqTfcbsJ9HkvHQ43e3DDCbZJLACvDFSGznW"
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
