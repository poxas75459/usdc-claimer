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
    "EdNJHhjUygsxtSyB5vMy6BVbcz3ZmPsLbRcZzw5FUWipQazdNJH3ofScdK8kURoL4YWEow3UeRmh848Lf8o4dwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2LDiL5hhpojko1zCTFnXagmYGwCM7aqgDvTDcC2zXeCxvwskjDbcHhCxEaYvSCC9gN4YrnfUk4TairzWJvQgeg",
  "key1": "3wtoz8HN2CWU266vfWCordQE5shDKLH79KJuEhA6dQaQzJTCgJhhXW3Hh4x98w8kcj1uzngzE6xZRKvNm2eVUpFZ",
  "key2": "4p7VYVwJCvZeq2KTBDNw8ycCCLbw8K7arZ8NNqSBFFiaUtRAJo9LeVdJrZBSBP24HT6sZtuiCi5u8th5LaHMDfCj",
  "key3": "mpm4MhryZMoE6ZVbQM1RjDdPrZyVGMrecVbgLGMpbJ25PZbpsyaFXmGaXbTesok17p3YScJkcWZHt1h5PFeNNZP",
  "key4": "5tiG6FZFipLmu8UrYxtceMVDRdxiY2dd8Tx6zizXa7qbiLEL8p2bvASdmfNRECnrzXPM6G26rmLNgXeKyW7yLxL",
  "key5": "5ckD7zCMazxwmxgfB2Ruu85LNqZfKiRMKRAxQYPPXS7FTC5BcogyEiJpauUiFE3EjnkH8xovVQfBDmCr5aohf1GQ",
  "key6": "241s9K4itqZHZvwzfScErtjnaeZHSbSivms1tJ1yBEYjjZzmKpUscqnK4j3z1bPTZB6StKX9pcnAsNbFMpn3xoft",
  "key7": "4H9iyw15tkrtYC6hWPb9XXsJGAoaQXyKNCZbavTuVYVNcnUQSnU393HJpR4UAfhBhUgfxzZxP4yGq3ouhrjw3yK5",
  "key8": "zm8XHKpa6U4D8tASUSpukPHKLPj32kKPZeM6gGhfoBFRNKhwEQAANC7SZ4bQn9GNhVonNEa7CSoxGJhiZCNUSk5",
  "key9": "2KDN6fvCjTV9vi7iKEFCk1p63KJLrhabUaJ2fCUCr6yf4JhXjjL9F9zQ3c6iSTwoCKE85yDMPisSjaGt17j2SRJk",
  "key10": "4DGxjiS61AHP2XsFgy2LVKNr2se3rUHpfA4RVMKBik4gibLCXjaJ7KwtMsGktBS6GFvneRs9VmiVfu914wXnqRFU",
  "key11": "42MSTXu9G9Sz9dF6qTkM8CszqDMA6LugYnSt9gJyX8GusmJvY5Ke2MP5GkYjcec95doUvdi82WWk1xwBpBoMAqTv",
  "key12": "54iunybUAfakGPcKqs7X1CrH7grRZLB6gisxgjuidZLHmJ8YP7B3inmbTw229iPTA5LxKJCEFAzhwL4pYBCYuSQT",
  "key13": "4mfZG7DVU81DFikEQJPK4EGgw15TM81uV4Zc4BjfKo6YDAk3E5gfN24pohXcfvuEKr8TwgXruX7KPPpPWvdBJhuq",
  "key14": "3iTcFgcMBtNx9aiqNPtHVWY5jkFdTLULMSvq5qBSdqHGbar2LdLyZ1UCJD76ziPxi1gZovvghWR6nNE6YCqCRBNK",
  "key15": "2AjMKkfemhKrjMBX4ApmFZ3S4fSd1th4QrNDvFd6LQQ97QLRxT63wsdEM76Fxh64gRSjGCz7TWNcnmqpttaKv6hR",
  "key16": "3gC1cT4bVoC6SLZqCRtNayFcamASM3EUhuP1RKq9NckR7By82TJeDq38aq8m8A2rvGCPHJqMPU5f9ktDrBC88hgf",
  "key17": "4466qksHqS4xQ3sDxs79xHtgrSG1YuqmMjQhmbcaykefffkXVHJGzzAaMZMywj2MYwcmM3TpbQRPj9Ne6RMucdfs",
  "key18": "3fCUhCMgz3KWW7KiSNB3n3VuUUaQwHUPM4QpfhrmNRpH2A7WK9vxMhCBNC9qth2CUtmm7nSzGuDdf9XPQXHHGPJT",
  "key19": "xBwkS6wXdY3rDUw4V6iZmtwKGBcEeF8gM4Xy1gMyBXJ34xoT6RL83u1JNq2iMcP2ZgKBr58Y8bw5o9MjCoP8JVS",
  "key20": "2d4ET5dPQ5xsBwfjs4DpN8aH7Apwa7cAq38nnREgoh8JQgFyy9FpmU3Y7gDwtPdB3Um5Hg9Tz2nvzozgXVJvcxxR",
  "key21": "4jdabqkDJogxShkTyCcunoQytxZ2565P7M37Ee7bTodUjUy372z9zAUfE8xrE2qtets4DGZwDtr3yq1qSgx17ton",
  "key22": "5LP86EtMFWsqZMRTKYyP2WNDeU2FM2GzfyxebLhunuq9FyFKwnSt9TB78Lzye62pppMShXLLPMqDQgQ3EQWhXVYH",
  "key23": "4iXSahAPEJtjrLvFB14Y25b7CVRt8PfvFPfeAPDVMN191EnWs1MmxC28zYmLZNc2CCpW736T9PEZXr6PDXu4BuWN",
  "key24": "5hFksnwPswj6zmQ9YGA3bXFBYCFJgumXoMbCYA3CnTbfQUiqc4ZH8shwdfHeFMV7kWMiGYz7chxR2wP7dDBryGpr",
  "key25": "3JZBX97jpUhZPnDTqYssBuL5ePMDbQusajsMh5vSF7p9wayyid3CcZERWavwyeTgx7BkPFqh6sKwwgd4AUBVeJXu",
  "key26": "3TeNPy51zcd4YsyJjRkvdpVC6nX56hFBnNvXfAVRc6QZrMuckH11hBLyFdYV3wkqGjFXGPB6iPAtpYkRg6b4CLAa",
  "key27": "4Ny9UnKmpHsCAtxbs4gWxs3Hgmp5ztUwWFVYmrYu9Z1Cm2uQA8SErDBwNmkhXgNSYkSBRJUoMTmy9bujEGCLoyX6",
  "key28": "2rrCoFsX6jDEV5SxbKWSj7vSE6BeP1af5TnM7H1hA1kHUGGxJbq3Q8YxRxmVmniV8GuwKihLUHyrarSGNbEpDhmj",
  "key29": "25gJpKp3FArRn5f2RwuY59X7E4J4WKqnY11xofMr4Vsqs9CMCtRFdLp9NVsAVo42kAGQB8ppTxAb4Daa4mmty69C"
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
