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
    "5VNtFXA7XdUzmzW61rqu9k1G5imr82GhKJ45Zz34doRuonGaijRbaoJpjekgSuYKtGUjcjN3adaPqXSd9tpdkt4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5abjvKen4pANFVmsxJVB73dLbdxCr1YDNYG9XPdVBkAmk1XuofzbuSano87DgTizBjk9ZSB5YHGs2ftmbFA48J",
  "key1": "3qc5rwTcrXoE6YgeTcxYswYV5ofZgnW6ZcP8Gi4HHwQEfkSiYr6cFWLjkAuSKLusYiuiBmBj29apFCfec7aqzcX1",
  "key2": "4ktqF4pKFrbWmJUHCz2QA3AFdQ3QsGkdUUiSrkugZmNPtsrJsShzJXHDpXuGPj1vtKk9QcRyHvVeD9NW6mL2CYNb",
  "key3": "ATgACPx98re2g3633yExxoGoM3HvnkqfccHkdVevmQeN9d3LSTxnDtJxmZSuMAFTrpKF7fxYHpxPXtQrpYkh4Sf",
  "key4": "2WzqcsMyJE7nFB8YY8YawUhJoTDdbWe8cyYeV1gr2xCcsV9jjxSG4cXGrhLyE8S9j84m9rdvfjE9CSdFzdbEbsWV",
  "key5": "2Nq4j72939C72ASSLrZstQwTFj2KniyceYVL3otwhebxeA39abJrkSsXSFzeia2314Q2eW8ou3SkaqqHvu1ifsDr",
  "key6": "4Lw5bathCxZqTonnWwD7pQJw1QwXCJ88bji93rC7VzeBnymqJX7dKHpA8HFfzBQKQBahsQC75HkRVQPtKP9RMmio",
  "key7": "MDjWHrH57qtfr86FNGKN3BxdSTTwQYyHMEs6mBCQiRghsVeM7Pe6ZKe49X5kdFXDUCxMvji4Fk9WBq3hkDnM79p",
  "key8": "DtBQxN9N6KRD8AQ5x4QaCKEfFtPwDaLttMm24UqrdZd8tcG1vfJgDkJ3rKstWkRWi7yjN88UDJKELaAM6bzAPNz",
  "key9": "5Cdk9YfU7DSznV8buaLfpf4mK3fy8s8jzoWrJYrwFQjVS2KPwwrELwWq2AzbbgLjurhbkCaSXES7XWBmxb4gWx1B",
  "key10": "5kfF1sW1c1eNPhkNMT8s4oNrAHzvZpDEVFTsj4FpRpnVMoTFrcH3jchf9sh3Jkr3GArV74Ztqd4K2WVuCrmGbrjK",
  "key11": "2DkkePNbXEatzDojEuy82FiU821R218tRLTeHC2LyczMNrZqvz9RXoHE3YJMdJHfTJm6PzWTVoPHwqgVSyXJvdn2",
  "key12": "4LxawAkV1ciKgYszdfn6upbaHBgqJLyKjQB2HypBNPtZWhYhRUEMBPEunAhaJftL1S1YhDQdooRob52gETd7QVev",
  "key13": "2BeVVGTyXPEJTSVtZA1GpFa4BWFaRgwBmq67TmTbxGjs1ExYiY2EY2RiF32QoutHZtD5S8SNuppfaQ5v9icmpxtN",
  "key14": "5sPrGGp7HP6a5LJqa4hnfsL8p9nrp5UMWjvRKqRSxsX5kVU6z9JwTprqT6wrEgiCGizgJBz9J2nEVSoQeAhshkUn",
  "key15": "2bFkzpFsrtnEziwDcVvhheRmzVTugRwvZHVMDC7Lj4pwYPDPX4TqKfk1qnRoXupZXa4CAzdYSDD6KCfv1CUpHevy",
  "key16": "57kUEtF9PRpp4KjxxGcUkBJ6WzDUpZ1sy5FCRyAGLMNzfRjYUJfAVEtY6qJhmfwdeevsymoB5NwYuG3yHxD7s5wX",
  "key17": "b32uyR5in7kqLkjZh9YoXj54T3TtCvYmEf8YE5gq7wpHMgggrgKfbHQEgcZjSQai5Djscf7wqogdzS3hqBbv8sN",
  "key18": "rRFxrQ8CqF2cXia2xsPxXeE19Xf8n5aBj8f3X4RbkNSf7pomVj1MVvmJw8ibr74A7W8XxeLngRWyAh9fVaKw6Hh",
  "key19": "5r7wMaZmgu75iS5D5wSbNBTrN1H1XyLRjhDVTRJsZN19NVzC6N4QsjEjR5HyCQg1ms439fCfgJUaV61kZ5s5nyte",
  "key20": "4JgzvfSdewHkjVqeAqPNUXfvHJYmXeFMmQAUE2VJxkfgjeFMXy88ZxmtEbVuL4X3j3D8NxNpUbid9dHJd6FwEfac",
  "key21": "Q341iTZZ5KYU3LG2urHMBhvgptQaF9rpykgQ48AbtdX1dpdjurJHZn1Ks7qXxmkNMirDUC3n97aRnyZxj17qeWg",
  "key22": "5LvjWFr8MtC6LTVgE5DgeDH1cREFfj6yPwdHgjTQd4xsogtM2UVTNvpTeKZMtxSJjhnkTozF5MWjRPDnTpqTmYCM",
  "key23": "5zi5D5MVR7igpub19AAPas36FD9dmCwbP2cEQPbqHR6qdYyAx3DSRcdzRHSdhqEkzRyNVpB75D6idksVrQNDTC7Y",
  "key24": "4hvTivP97sF13LNSL71z87AivLnGPw15CxVYo98zN45gfW2JM2bWwQP85t1Vyj1cDtsGBBPnBifwSpC69pCis8xZ",
  "key25": "3CKux2JoQDcmtjJCLSZqJd23yt9eRACrk629ULTy9DKBh7t9mXvCFbpDjWZ2Y6PKy6HGrGdJUFYTBZHo3ZpE4rJ6"
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
