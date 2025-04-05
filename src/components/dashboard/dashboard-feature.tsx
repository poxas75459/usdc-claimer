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
    "4oYxQ97HfmXWvcmoTRgC8AnRaJz5vszJpHSVfZQL3cRF1ZomDZ1i3P8Jm49LQfxn3AVq8QE8RvwXjGCVPNksACgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cngDKdnkDNvAnk9cpyosL2tpZDnqZtf5Jeo7d99GLWxtobn7RM2a72yooMYz6ZgFS3dEyhhVmiXALSm26EsQ5qY",
  "key1": "3AXLzm3U2uududcZsT4cQAs7gtVaxEcGc9LH2RA64AVzkTZHdWTBb8F7AFVrDfMpPuEteQ8GY5rQ3A1EFVTv7stU",
  "key2": "53G8UtEvWVzYke7QahtWebGyyHdSLpAZYdFWWy51KkS3xmckoxJYHaGS29WKKBrtGLJkeB5sG6Jn5cKX8Zi29foD",
  "key3": "3wVDWBuHjHubJgoVCng5hq7yg35TpT5hT6uCkuMskT8qQGtPDTvXV7D55KaFvwBM6m1eyXMSiVzzHREqmPjPckGF",
  "key4": "4c4sNvAww9Qqpm4n2VCPzQaanszMtaDrZ9q5PwMyK5bBNHVYe4NME8ZdRLcxsoBLq2VKgscGVuMCGFPrPVuxgiF6",
  "key5": "LZXZm1W6PX7U4KeKNqGNsYWTtYnu47XagPKwtCPzAgDRxxfWTvBDmBDDPAcXiAxvcffxDPatpzTHujYjiFv1PcH",
  "key6": "ty62rLXF8YW5pDQs4R2hrPLMTzGH7sRMC8BvTUtAQGRbZZobvKTJbNTWcHHKQkV6J8ALuTjM5vYw9VmpQipt55p",
  "key7": "5c99ffYisZJx7T6azi3c4BXBhaDaGWerRbwPN3QaT8BWyDAJxB1r5wwf1FedjY69Ky9TxiW6yFtiKJ9M4nfd2tZD",
  "key8": "5GG3NKNpaRo7aXYH7EjPPmfCmDAXQX8bPqANFpufUERv4QLGT8Y6AC3PnH5CfgpwcW1B6A38cW4zFsixqSdxJCxt",
  "key9": "2pJ7kd3fhrgL9w7Jud2aCeAwmtvCSsvdNJ5UdBNkW5Wkt7yE5MutUtrs6KdLoCAb5rtTKE5yEotLys8qnFzQovDT",
  "key10": "3Ye5HqMuVquZdx9Kgg6SqJsyumaeB2ZH1aXFKLuaxHjgXt9yY8gFddSjMo2MzmhSoUjCC9v6w2JGuqNcF5cBeP6w",
  "key11": "2QT47wwiCwUUZBzwVv8687PVtzowi6LWRKsYiFA88M5a7tBT7H8qGCf6khVk9E2opPgsT3PuPypmVhwiZTjedkM7",
  "key12": "4PPzpKoHwKBvzNd4mQNZV6qSEpcfMF5BrL9t13pFQbwRPRAaDWj81PXGzEbX7ZavvnotN6WWeVFCpHbefFWio1XG",
  "key13": "2YrBJDwK78Fm9NEULXPphRb6H6ZbvYD7RdEAtg9VtkDNHFMMa5Pm63SqcPXQ4Ws9ZRb3mmS5QA16haVwmTZHSwfV",
  "key14": "5DLNCuMFSiByJ5XU39rQBYXShoepaAmnaCxNb9siKeiMg1qtJURt2W7YpJc2pANyzca1YN4p1EqdHUYdEqbe7nZR",
  "key15": "4uQxjtiiEdF7wgU2vFbHMPxvQBSFvYmhfN97NEqRLUz8kNa2r1H4FXDow4hddNPZBXYk3ebxn6sR3WY1k2ojWFSy",
  "key16": "3vgQf6XXh5DM1Cw4ahXSBi7j5TFP8MSxv7fMLHDUeENdHevXiEeew1fnXFbrUEtinvVhW7hu1NkdSngfDmhvuGkt",
  "key17": "2iiJZFjjZeDU9GmMqfxhGfUTx74jhoReFgt4YECxWtxAj9TRaEWpxRjxs5AskDVAPaTXiAYbcEMRUdfjprdinEzn",
  "key18": "35r1avkkJgDEfosFiTFTrqDZ68tyB9rNwK351JJgSfDEDYYTshXhp7PvnHkUZYNrdTud3EEvR61SrC2baSM36GcT",
  "key19": "5DtSPLXaqSWrCyF8qcHaxv1DeFHd1b5nohbVdeKuYpxdqqkv1Sh6ma3s9bYc6vVyLi8Q3ZnnKHpqXwGLj2y9Q79j",
  "key20": "5gc1dMHBnaMTNPXPTJnu3H6zM8MB35LwEKisrFG5NSXa464iA14wx9nQtDAHU4dEs5mZksvbrKeSUHsLJ4V6DyM1",
  "key21": "NNM36xfgcSHQMft8fTJEGRrZdFQMEZLwn3UzXezH1TUWGbN8guhpREyP33ob26gHtpSsPjVZNkZ49aJvYxbrcpP",
  "key22": "4GKPsajypYaiGGVwmPPUY2Kg93BVDtkmGsz9fMJ5TwcyFz3cy5TgihDz4qHFonNQ9gBi2tqrkdCnJH7Q14dxTuWX",
  "key23": "5286DKM63mVHR7XyZf7DyzEwM821izJAvVCF9iaFEQzWbXY7hK6ZBurytLaaKk9wT9e7q1nc66JTgic6XZgw33S7",
  "key24": "3GA8w2fYSxuoW49vMepcYpYWx2dTSDy7BHjYTQNb1wLBZWf33Z95u3MBujPUETfTY55ctozLcoJhQvxAj6SsyQq4",
  "key25": "5w2qTTc3rYmaD3jk3tLacqcr9pPJ34FvVLzPeQAsdKDsQj7GpWRxqrfmj87Mr3dx3xXVMVgNi2oqz1Xg1j2YJrVK",
  "key26": "2FhD3TyLMs479HdJfPXsFw1J555jXSSn3RNJZWvydM9aVDjrR4PdeAz86jcgPUziZxtjx1BCy1kzEikfdbwFSQcm",
  "key27": "2qpAiv8kMMTfCLCGdofwaC6WwsFyePzVciN2b4geKVzWFmTmbHxudTp1Xnsk8EUv52NeDGGQTacBFhK26PFaNNJA",
  "key28": "2Gq3JnDSddrp7DWPoQgrB2itsZSr4uWQv9honNcsm36hXmmd68FUh4GW3saPWy8LjBD13KyQc3wNVfbS7oeQPmR9",
  "key29": "3mw3Bjkpsega3bhwC5nD2ehc6meDZnF4ZhZmCiPafgBnoBMB6cqo16xeUVJebxeDo3GLe1gk9XALCUG5mf9Yw7A3",
  "key30": "59a4WJhfrwP3t1Mfqo9udKJQmzkSVWQyeX8gxstUBhjMNC8fgTn7ZcmTJ3iFnfA6R6yB5zhsxJFqBnVDq5kjvJNw",
  "key31": "5Y1MQDmcFeovW38tNHZoka7FZwLXn9iZQz8EMVQ2WfjUwumZjr6cjzNnBAjGjA4QDPpWhqtr2ZpzoeY3rw3kjJuA",
  "key32": "3EWRdRBKVcvS7i6f27oXbKHYnkTfnkLsjH4JpEwp8ohKnNi2WkAt4ZSBUrwJ7R9H7mNc3wjRe5MoVw2Tvq62YJBu"
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
