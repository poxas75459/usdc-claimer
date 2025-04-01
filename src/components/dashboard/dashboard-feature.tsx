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
    "3CSNknLnX8umNfHeVNrTP7v8hzDYASZZdoNojuZEPYnfwX1QYAj1BJjEBWwwvkumqZnFX8AoQUkiAPTRFCePyQvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ah62z5DsQxmDyeWfSvFqquF8Bs24AH24RPmS1GrbyDbFvmU6KYQ2C15mPZzn2WheEmzp6rQUGREXBrF3wnguoi",
  "key1": "42nc384wRUCd3Ae2u9WHXUHCTZWoLyXWedUzRUfnHVT4j6XzxTUthEJqFMcyzgSYfyk1mLQdHqvHjVub2U28VWQb",
  "key2": "mRoWhzaKUQEcVtXs4eg161vy4CN5s7msPw2LVjCXaVKLfjdUgghBF5T8E8drLvBMA5tkwmWn9bD1bEy8tg1wRqK",
  "key3": "51iJ6mguzENTpkMjygFDVUXKLoMM3oDK74wbT8u69ZMpgxa67HFUC3MShLYGWsX77bm1jKM1G79ZTCBgARUDAEnz",
  "key4": "N6kwbTZ1L6GYFHpSDSq9NrmocNpRS2R2xjd7rAgvbsYRWJkcmJvppDZKWoTP626N2wbu1AgQZhG2mgnUx4EU4GQ",
  "key5": "4ftCFUXnq11GM2wzx7JN1WXpf4Fc1BeQCw3XbQbF3cozXLfDNtZA636zfBu3rJZnnqEVEL9q6CLX4anAV51jKwc1",
  "key6": "3bkGJmtaoSpqXXrsPifMxE9XVoHEnyc5NLHVD9wQNSmEr8iT2sCvuk74hENDDB7jcg67GAr63fs7dxVjL758EXLm",
  "key7": "2WopCzSKzat3GwNhUYRu4QXqBtoD3mrYjDHew4AHvM1q33ytV4EHF351KAmvEfrjYgghtsPGW3FrSdoubXsPVj7w",
  "key8": "2M3jCmMV8jXfTy3a4yETCam67ZRdMJPsPKz4CdpxiaZYFnNudXJ979ynpdWGCxmdXcZ9cbLfvrdV6eN4HJqLTS1D",
  "key9": "Qb4drTXJEPKvT85mT2LdjgYJiLvrGmgWyLN7ALmRpckhhqx4SPsT1FkN9kxheFg5VjeK7sS1z6DwZZ7xfKof78e",
  "key10": "64Fb7sZhtaDyKMsCrPGaFtiRPkguFFT2uY19KnowL6FJc6u5qR2VJMjR5m1Hf5BXyz6yWmGYQcq9xZVGTv1WVGS1",
  "key11": "pzCbKWN4CsNUfam4mRkkqDMtYV9st2m11B59WfXNzzHi6miKM7oyf55obCqYSFdtWhYfD1izmX2HndjR4N34RJK",
  "key12": "2E6q4JoxFJ4MLJSaWyuhhvm6Xn6nFHJ3P9GrjtCjUpdDfDaU1SRKrT89q7QoBMMkCWbpA8n7h61DwVxAVmDVk42x",
  "key13": "2qFtbAHumrtEChxWtxFaZpdDdw7YQwwj28frN8knqcz6tgJQDRAG5DWhX2Dzw5s69htCffgdeMSrfcnbUkAdiTwt",
  "key14": "kZSCbwBQUpWaFUAC4MmQceEokNWhRj7jxVBV2Ry3Kw6NaHyDy1vjBk6rUNLDrzkD38qTxzVhBVkVvsYMopp5RPn",
  "key15": "3BkjEyBJveib5VBGE4x1di4wbxgPw2U5nFKdeBairbsCSAimBtbHpMykApsx98XzbMSCnJJ2xMN9JV1YFVPLiXkz",
  "key16": "2naXkrNmQiAcfP3yeJ5ar4AMY2X5dxTYajGYGpK9EPKJr31rZrzbKHkR7gfswuoQe8VmB9aSdoMRMg3L4rs3X7g2",
  "key17": "3P9gwsejmkU7HpN4smHy8jAhLaQTW6cTmUwdWGojs1qQSbZp63p3F44NxMbbeNExCZsKw6th2EvoEcNJNg7U9ez9",
  "key18": "5zf7fPLJvSYGN1Q6CCu4XWKDjcZATHsFxPUeCaJBsWpen3JrhmULQKTFyKTa7zsDz7ykDQAXSSyPM1gnPJk2Yvgw",
  "key19": "4LSGsZVn41ajKBTY5PE4jtp43EzRwnDZgMSrXhvX1gVdDdP3Ai5zoFXTFN13EsUq87JjvFWr5rcMReHn31rWRG8c",
  "key20": "RY8pC1y8NStvoNRRfLS7wcYSPh1CRHegfBf592y7BmAeL8qpCCsk3tMQoHFitNwEi828MbZxb18b3mCJB78z74k",
  "key21": "4tv4UgsWMK8G8bZ8EGgaDjkw8XtLuYmNYa3Y5xF68Sa3FKMpHAiNpKQrtosqag8B8Noah2oyLzzj5NQwymrTaDcJ",
  "key22": "epGaYLpChyHdHovpJbnkEs9vUeVqaYkB3YADoQbfioDN9tKP2uPRSBPhHQRrPyuLAaqnnc1R3RRnA8YXpaR9U52",
  "key23": "KiHTLV9nKxKAQicgBvD5EfECnDyR763HA5paoExcdJaPxshAJhR4xr9TkYwAgYspCRXDAQJ7A9pduFBZSH7ngoA",
  "key24": "4MzBse1TphwRyaPcRFijpd2G9TZeHtF1bQkyquKXQrNqrDR1BpF5U8sbkFdHM15L8VG5mFDfZoUazhXUfLrFwGp9"
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
