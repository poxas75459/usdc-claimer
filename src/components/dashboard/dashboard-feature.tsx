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
    "4eAMfoZWHLAC1Uaofgu9wthgoqyWgA2dDU3B3mKr3SLRX598NXgtTxzguTsCeWJWAqW5JCjTiqdCiGp9Ld9pj9vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydd9jNgMqkg68xUE2aA98uaUz8hxj8sWxP41z34p5DzZZ1qRwbzKVJHwk8e749ByfUfpP6R6STR6MAnVTSFGUjQ",
  "key1": "GDUdS92XNjctRAZTHuCGW9QQ6kqV42rD8JveT1f98chaY2v9ZYHNeiREAh2FVLfWLwRqKv3kJukncj15Togmwn2",
  "key2": "2xqxLiAqGNk58bM7LmLrBtwETJHPaaNYh31PzA1x9vZiztfVRGa8dS3JjT5Eoza7SszeR6J3kSxkVuwiycnVTwPx",
  "key3": "gSybqxsF66hurVqihwr82fGkrB1dNm2fMCfAwHunKkPB6vfuymgNvaPhNn1Z5SaotiU2p6pN2dcK4y6tk3pfd5u",
  "key4": "2bdNnJowCb34c21u2QvY29VnTMYcpn1zVugQr5EkRp1W3BnbNE5WzDr9RXYxd4Su2gVCSf6FWyZMDmSxCUK4hMYi",
  "key5": "41YWzGe2MEK3MhBzZ3zw43auQo7KUzoCAPcJ2FAwCBTfmP2mFRZ9wTj3grRs3iJRZDB3dP67pnKFQY2ai6KLMkfv",
  "key6": "2DiR7J8Ney8Rz7U76u98CgoBtUtUfFmRAVVweqt9QXEQtyaxGb7GyH1dmHw1VTbGXoJc5hyCjcDMquURPK6crYqc",
  "key7": "5VgW9UzR5jiXAbCMQ7TqCXJsH3rhCyZGnq3bx7LGvdDezXRZcvRdBW6FcHDAimwBhMxjrbt9eHnrFH1iZNAtCGCB",
  "key8": "26Y4rBxhMAzmq8ajByoip5D8VezVAJyeiBB6wMpY1PrZusUJwqEzsAa9eY4HUnFSf1noLiMozAcjStPsXXP4d5Wf",
  "key9": "hEA1KbP45qq6BYpzxg45ir8zzrWHZBZhVtAa4Ve9LeEKQeqycvinrYTsAkvg9AznKkqfAFQxSxnAY4ruMANy6tH",
  "key10": "5WWPR2HWiMpdbGaGw6fi7fFh4YAitwhxx3XFwUqV6ZJznrTGLM5ofFZ1gBHCWABwW963Ld2jSqsn3Aqxod7FbBat",
  "key11": "633YYFjjwhYFtS23nDNefvVCx3uA26jEmP9a5rzHZ1wQ93bmoVFRkAd7Nguv26Z8gPiN3gZX6qc9nPZ63CfG7onz",
  "key12": "2ZSWw4roNHq3vWhJMcoATArc59X8yBeW4V9fwbefQJS8pkwjpUtjqDMSnqgfjDAzWSGnidANfkxfW1cYg6NJCk2Z",
  "key13": "5WAic5LcXFk4aWuRyhENsyLYq713fuw4XzybjtFwgy3C7ZZBsTRarfr1dRsCbbFfSu9G6YWy2R7fKu5GQsiWHzXc",
  "key14": "5NKQj9scJV3P6MDv86sFwSGp7hF43zu7B77ZPYjBMKK23TMvm6REoUakh4PNgvLwpoxBShaa1YiAqDRpQnFRWiZs",
  "key15": "65RcotaV6w4mTbuy2sBj93BPHNZXbzvb1SeprLsSPuMivTZfPbogUn766iudrtN7eB6wskc9vaR8WemgMMQpWby2",
  "key16": "5NFW1AtqBxahEvhAQg6TRCRTaEEuzYRtzNG66HeztpidJx5BVuaiibYnVPteVKWGStSaM9f1yfbdhgaKjPCGqQME",
  "key17": "3MQ9AkexBggJnYr3tzsrdohwiEQogF8GHJthkMMie41NGiJHJp1RXzoPLwM7wPuDnD9EQZZceEqtPMRXqhrHxZi5",
  "key18": "5AXxJt8eAo1X6C2uqaxM6wvQ7MEmzUBxCRXbUyDJL8vAYHUeQ4EzzgMZv6DFvnptgqd9SaKSFVZzBNNKWcAmrVCD",
  "key19": "3DY4omVAFDC159d8ZxWFHYVkTFH8RNx2CAM7Asb6iAp4EzF5XbBB19UF5kv3WxVkGFVYd48AMTqi4dAr4x2CYCpR",
  "key20": "4msGxXypfJn1Xj2FpYHLZoECK5XrxfKiiscM9d7hG1t7iRL3Cjr3j2hcZuExJRj1gFHirHu6hPpX8MYu9KTXLf2z",
  "key21": "3ht5ftNVy2j1mbJVJgz1h2xpLJeQVhEmJn4jMHurLWGZ3EhCvrmM5NWaePp2SrMo7TSof1xRs9VSJ2GSJZQ2p6rW",
  "key22": "3QRSuoEX4hMLwigUQgvP2a2RbfvP5SuAuzsThpbkUddEf3CTv4WhnxVG2ZYHB9hkdnS1GC5qhPijNKNyAwensikN",
  "key23": "4nTc3TjVmuaamXsESHbhKc4W4kiziHd3aMrPzdopchdqpykaN4ryEVF3t4imsvkpMDBjXkrHXK97os8NDAZYgUs8",
  "key24": "2B8tBChDV3NjzSde4Ukcw9zQhqWbjFm12YX1ut5ZbqakQyt2droENfA82sHyDGTcX7xrgx5Hz1EsGVjzrDw5jqNV",
  "key25": "VvMd8PtsvS2cg4hf8EBbxhdTo9EQW8sStCKELNRYA7F2hZBvJvSyA6ef167pTDXZLRMoyReAVZ4jqj47kketSwp"
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
