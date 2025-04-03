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
    "3792m8frzjFhvmgTvPgrr9bZ4h6BHoz6i5DJ4y9gnKLxTdBgpHsgD4KUGNrFAn67oHMH8sH3dKgfmtSudxgzjBk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPBa1Vt4E2pWxmnPLmkgtDosG42XCUzUPucbG1NNeNqi49PBRxfcqprvysNyqX3LohFKtv6HwmUkMs1BYpjSgBR",
  "key1": "5snaY1A9pEa1XxqTp5MAeZxESW4yQfNbd3LTXRQcGwrD6QLg4MY7KFDxqKZXyQQdgnFnSfsDQkXDbJpxchffwg85",
  "key2": "57M3TCZy3GSwBd92gW2kz1eLJ3koGXvZkEcPShtjLkNntFJV8RsMuUPnzycjkRVWko7HVfDEZ888vGJa2T4M9rEp",
  "key3": "3XMwxt4VN5ZjWx2S2yZ5XsB7YEk9FwtYBLpPArVzGkiMCMEorVMcpF3rzH6ZKivRvzJH7KekHD98Z69s1HSYwy52",
  "key4": "2kuyqE6Mu5hh51pK4rxqETbUMgVR8db47Nw9yKGUKURydzcRJDpf9t2paX4KTR8LogPNCwYHskyVFEtE2Ciqwy3w",
  "key5": "5dsNXzM6DmXayJeQFV29L18SYBjWm2YTXEt1a26jfD2DYqaFxkZ6Dc6nTZjYToFeZg29as11LrpJACdrryvbVSQD",
  "key6": "yDYbADY2KkTmqYu3wPb3jigsCMaZrAHHnNPfs37PoRX946dYKure3gdrECU1vvvSVMqUkLnYBy4KQTFD3db21yc",
  "key7": "2ooHQ5QyHv17wnK3BcpayiqMoZvyiv4bBWEicdui4dRWcozdFd2YTAXod5TApbPHW7jGaNFkEFpKjrj4iVDgoCwU",
  "key8": "3mdYK5v9ccZX1qVSyFeL6pFwyGXtMN9nxA7nheuEGwKK7Q5b7owu9WykhLt7aN9ecvtaG61z7PhdGZ55KHRSyS9w",
  "key9": "3jym3NgaJqdQCq2aKhArdySx1CCRS9nXjEg1GMhG9StfBarwaTDv4cTNUoJTb77vb3uvgPQ2uMvtkQC6dwivEBW4",
  "key10": "5PWNH2jtpsJPuRwxYeCnSxoRrajy8RdXepUsY7PEgrURBzVuB5banuUX7va46LZNdTgeezuoZYMbhLJduiN4gp5h",
  "key11": "5Dt5zVJ5YJvv7ecRCRKtj3RG3fqDakV43ncyxk1ZGATX3qrqaACL5E3soCfZ7vejcqu35RPwyELVFf4bSzRutSkb",
  "key12": "6oFG6MeHigHqZ8zPMdJ89rx73oJV8z8uSrW8VPHFKcJjxqC33QUu7DzkpdSh9WewziqzKoPb1E89kk4VNzXjrMM",
  "key13": "5YAUDSp6EF8opgj7ybEU5bZcA4koJsiqzNV9E51iasPYk4w3gyjF6bp7GotybXAkQELURmWhty5VWG8QWaZEXcg6",
  "key14": "kQFNsgDoGZ5GVneuYP7bKrN7z36jgQpFxC6i6w3TK88cLX18y6Zgt63bvXuDJeP3SW2t2bijECAKyR1tXeLFpHD",
  "key15": "3F1UkXcZJ2ga8mag8BKqDwLwvRFJHBnfwUNHarAWSAaDvSEGkR3VCoRTAveL6T4h4xn6XGFmz7cCz5f5Pj726tRX",
  "key16": "2NBZp5YAhiyeNtGizhaNynzxCMrKoqMiG6GBmgJFUyvRNhnJQaPoE4XPvkVkbm2YkuEPA7BQvcMqtMBYq2RZWQEv",
  "key17": "2KiwYzosNi6bN7pew8AAR2VFGcuXSMH5QAeXaurTaxDsowdPzc2HAP2nWkRoVoTFq6AHUVGrphWQXGrtH9Req4Wf",
  "key18": "4vb2KaZeEJy6XF87SgGpVcAuPNoD4CAzes2rD5KvareDi8SF81rTLsJbiRPLUWfcNUYxo6da7FVELzMDLN1gBkC5",
  "key19": "5hGy1u9Lm6nz8rkrEJBzsWrxByrHPfKVPrvyU5dr5FyUTgCvKKERBJTTjWgPEjb2dFqyuKVQwzqjhQHQbYGYMdBu",
  "key20": "4vo3oanhynDnVgfrNCmfoiYhHai2qEDRYgvyKyEE96R8tSCgAnwkjBJkdWjzX7p4nD7z9DS4YsWpAB9FRKxYMtWx",
  "key21": "ZJVtv2KjAxcxBxwfRpdHXqZppDuHkepFGSh2F5xqkhnjBp6ptVagKjBzCTs5L23n5dehA3ijq9CbeGPrZoiGW19",
  "key22": "23wUEnUNpciYkUYEgCiKP9mhdAKa2rpTMrunuq1BDJEurGG2zTsVL13HybSzV6pZLiDQHXJv1AhoDPncXFEJxFLh",
  "key23": "2t7H6tzbu3XJMonhF4naKuueSDwsKAJ5W4q7mHokHhNXSukiedHJAPLSXMWDrpZV5YmUgy7zsDhaZ4SRbtVQWGza",
  "key24": "5KvuutDrvvskD13HFxLbxzgZR9RRKf1ZL3VcrHbAzfGXrq7RmkVhDGpjaqh2zeW7ge7mJ8kYNVQCFXJykkRu3bSa",
  "key25": "2Yux222hvpjiAZgddJT9gFKNMLN9SiyCZV3j47qTHtZJiR5pTURVzcqkxxb91J2PsnLwRvz6m94dFHv1K4f3o8M7",
  "key26": "25T3PJsjVAMVHns9oKXx9TzEUc9a9TU5YemjJPbWxpaQrS48pcbWVKva4y83u8F4zs7kco7EMefZKAfEvi4HCYT7",
  "key27": "Mh7YoaX9G8x9tRVWn1KnWSeoidrUxec5RrKfxhx6hAUipJBKitRCoEe4u5wBZAEsMoQLxL6uxtKcjPZJnqx6Xbo",
  "key28": "31aU1Eswk4Kzdi5V122Pia5yi75ivNaodHCsVp3hHUqKBezqQnNekbi3fW2GaSCUWVeEyR7wK3e1cNZm7vofcYqD",
  "key29": "4BAdZRanX1eWXmQmazvV5JdA8vvqsvAMxSmmoAbSCMqfAWysoE6J1WswPFuvff7E8EKhSNMpmymEjoTYgbAYc3ze",
  "key30": "XZKamFYwVG5UU6GyXwMtPoVS1rJS6mYYSjiPubxJuQDJWct778MWNfXXk8jkzoxNApXD7RpwfSHrnbnkvqNZN9C",
  "key31": "2xhbtKxKYRXoYxkHxUV68XRFuB9XS3xaQtS2WpiSMJjpGNgPjgfM4zp4aR2RadiJMHykvNFbCwwQHAGS1BWFdeTm"
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
