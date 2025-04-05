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
    "5oXKSVjZiqsJrromdb1piE7UowSRuXp33dCKRQfkKDf4rxyYy33frXKcM3TDnMXdmYq6Bh8cR5w6xxuWaZzUnRxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qd9CGRrWmVVgZZwerZnwo5PStsaSQ2UL77gm7Ya2CQSCAbt6eE7XMEUqAXqtX1v2ZA5RfTcJg96AWgu1ic8ctoM",
  "key1": "51FW6pUoiZ7caNu6nVsQbi5NS1ivtL37HhApm3Pe7PoPzTcozMyGZgB4CNXXdZtKSrGFdCzt1mteQpyZY8mFJLzQ",
  "key2": "5dcmkNNtE7WYiCA1RdZdipyfEaYKSqZ24CdVHK7mHQszUpWYxVGxS9BmsgRfff1jJpKmz5JayRh8g56Qx4XAkA5Q",
  "key3": "4k4Tv1HchYUTaK5419C6q9271bWSJfo9KKxqw1RUW1uBLsYBHm4pYSqBcGwp757FJbDbMWHanxdcKTTDfaHxbEuX",
  "key4": "2EqcsYGYcJ6oDKjdL3omZtKfYPDtD9GtuQjoHgvQR5J4YrXy3fwf8mVe9Dxwb4GffaM4ZS6FuAME6duAoCbAex7j",
  "key5": "4igqqeVfnt2495fnqALWzh2naJ76VvGodgyUbL5WiNsHca1aV8JtxBnpvAfLmPvkKupGUd99XasMReqwihdLTepi",
  "key6": "2zGcCqMMbMhHoCmGAkaG7xexhvcx6v59NXfunA2Nnrdcw3ZSmRDF1YrRGG1fa6U9C8DmNoskkd3XcQWQcQX3c2RL",
  "key7": "2jFcNn5DTMd6jU7UDoK9fgLpMgyc5cETk4YaUxH3vDF6VVhbEcgDckEEsJHAcT6FvLMSYwhig1SXrYZnq8fLjtWn",
  "key8": "2KiYzRKsUnW9rka3XdEVeKg37qaTasHcLn4PWfFCVqTLG1Czgko4N9NkLB17dkLMsvdGF7byLRBdCo12PKS3kiFk",
  "key9": "3giUy4fp87gcbJxCx2DeR7YcGvdfTQhcvuaEVJXiCSaQo66YVxFuzgHCXzsFWT2tqUiDnd7W4svT8ghfEw2oBY9H",
  "key10": "47zeAaqZ8pTC6yCqRqXC2sp8tNtPLGrxbeEZm3f9S56BNH2BAMqRKQ62o7ZaXm7WY4CDK7UpLb3T8Pq3fVGjad7X",
  "key11": "23zrY34Ynrq5hV8smz95sxRdvmq8NvQc1RzxyAxzHF68gWTXvy6FZ1S2MXxrAQe8fhYFdPgjarfg91cSPVzTCWj3",
  "key12": "668iHih8V2zYuz37NAG5G1XqmZrpU3HssHGW1sPRjCkx8p1Pz6a9Km9QrkPoyuprsjENAeGyVWnQiR5rkEpMPX6W",
  "key13": "3aGe8cxmeMrzQADWE1xuRkPVwZ9RtakyrcJUqvNEYfMSx4dAEgmczyoUXBodjPs1qMhnv96ZT3nXA7nWGfbSJiPX",
  "key14": "139DqhmFpofDDcYGCSfPEvdoHtHg1gcGnh6fUHMQDgywxkU1A2SCnpi3NWsD5K9q2vnYSsTRpr172FanZEqjUCJ",
  "key15": "HXoGrcwTBSJsmNs7EGXs4ZhsW3uYeoyv5UpmNVFF9vY2gK72pHSNvxP28SLznUtsfvrKbohh5sST4q6YYqmnns2",
  "key16": "3mqG8Bn8nAVsKoZwcqtex36WfH4xNERKFvAD8xv1VnyFTg1T5GRF6tk8xaxn2pBxucc4UcK2QZtceC3azYcVxrKT",
  "key17": "4cPwf6hCoVjjzmLnY1P5Hagqv6GeTA2cbZjFF8EmNbHu4wtawRCKMKGjMv8ybq1eUTL8SsVp6oZ2EmHPWFEMjHcs",
  "key18": "2LdFgEwV3whgyrfrmrVd9nGTrBXoLgsPNDuWekPWbMdGqUUiRHn7KgYJsMKNEGj1kZoRWCJe6CB9iBVPegsuACVW",
  "key19": "3cQGXTJPFerj6d6hB34cbYMAVNbeSts3ggMoYCrpJbhzLJMPz8dB5DCF4AMQfTGkQSdtQXyTaBWfdPof1MV1VbVy",
  "key20": "5tV4uNVtihcaqXCHGbU1hVmxPLeJ7NfGpu6miqncqfkv2gbxdZpUaNUTLvRWGtjtWuXDwTcsQQv4hAH8UUtnbQ8u",
  "key21": "4rv7KuVBmhUZ6nJFCf1sM541jT3CFAJHZB3XAgLA6kJoHK4CrwMChQFWqb55aY9w9QXySxU7r4aMPf6X5zfM5eet",
  "key22": "NNbFGmDU38LYaHdyuSdV1jzt3XRn4xiToqLNNaCHMX15PiLU3fx3y55q7Xonq9Yw2NP4VpKKbF6CC5AxAJjNVtC",
  "key23": "5Cx9nwDCinXfkjiBpeDmD6cGVd9HciFVdvoRiNRT9iAz7pTQ5qFC2KCmT5CcebJTRMy9JhDE5ezRH1k7b7in5RRY",
  "key24": "5wusLj7aaUE4rNrZQhEfFBfHQovbeLsHEBMnvoHy6qR4Esn1SSLBjNoRpPcSxovV4NxDJ2XeMgZ3M4Mf3PShYp3p",
  "key25": "4ihjk6H4LjwCbazg3LKRfZWEKnZHTHGL13FKWCwxjurCyB5LcyMQFCGtLbsiga4VjSdxezDvPc6ZkEa1BW7iE432",
  "key26": "5RWQTMSgv9XmDYQs49u4Cwc8QdMQCPe35CpKKWPjj7zn3LbmbVYeyCYYzmkaCB8xEntawu4CcBfoCYJD5mQDFUKS",
  "key27": "43JUtstZeU5pPgKBFsjMiCHpPyf5ujgJDbqzTn7dk4yVZuB26Y5bqN9izPCDQkTt73D13d1VKcff9jd26BRMN1JW",
  "key28": "4LoxQ8fF47JpYF72TopEpWwTheLQX8buyViTXMpUZxZfSYUjYFinFtcGPxwYWRqGjDiEU6AByz7UmWgYjbiXCgjp"
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
