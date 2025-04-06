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
    "aSRZ1fWboBnfyDiijuedm6RaJnu13Ufh8KitRMpR8feiR8ggFLVTRBhjxom2V7T6ZYCDUVuoL88RtkopYrrNeS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpEg9JBBZyvy9VMnn8oitbme5wxSEUPe85FCNsGTjhpcbneJSBw6mhDaDrUd6MiVgKPZhGgFegm9cyupcvJDnkN",
  "key1": "2ip3SzhhUgmvxX58G7JUansgr3VHzGuRPYSkhALdqye6PLAAHXsXrPFFuHUv2DGmaV3tYKdqyh8CqDUS74CLc5AA",
  "key2": "THEnCh8dqnVq2K6Nsruahh2cvQQ9tEf7NrDrhbo2WeBSfjK29CQrboTZ9YDh7kZRntHy7dpnoM8vznpXQERXvGw",
  "key3": "L72hYANQDS4o7e2G2Zz5YYDvDeKmKJuuKGpgV9Nj6uueq5ehuk15BPoZwSuEaBV5gB8Ga665ZfWXxLrXLTa5Wwh",
  "key4": "9HgV14L6RV5D2S8o1GVfJP43F3aky2DdR5JfYqnkXr2kky9sHmqNRSvQZpNc3DoPrVDXAbbZRfgPan8ikmWP6vM",
  "key5": "4vwDeQq1cmz5BeDaszNBovskctEzxZZkfuyw2PWmzsW2yLDfbFK1jG1Z2WucRgTiuGEJrzU7Zr9kJZhpHaQK4J97",
  "key6": "65XAxYAY9GbUupJXzkCdMj95rJsNbgRPhysabqZWTFwxf9mKP6GSwrxhTt4tiY7GdBV8KmeKmUMhCfRHbHCEJBa2",
  "key7": "4sMqNaooTnSQZEjjy4p3Dmqkwe1y65ScT6TxqhWYFKbSvjSYujsej1wEmL5Tb3AMKKzn7CtbPLRM1jPkgGzGAoKv",
  "key8": "61y7TSe2xZn9Y8qtFXaYo8W56xEg7vVFTz69KDrW98vcC3SuukVJohUCQ4FKYdehdEYTemrXHfh2B7DU2Z958wUL",
  "key9": "2PBivtH9UTEuwmVfGQ2mj79rGbqQSoJtj9zAiV3mHSSwKUZ6fEAp3Bar7uzsyCrrijcH9Lw7bhhCEBm5auF6XFx4",
  "key10": "36uLZmzjwHg1BnEGWgmZVB1NACe4VhnVQ8HJWLt4W9EEavuZvS1igYJu9EUb6iBgnGbVt4PkK9F1Wv7er2kAX72q",
  "key11": "2R27RHryUdpEzxEQW1LSwq7DoVTJUt27CYSuHUCAFhgzNxcKQtRpsTCAqft1JLtFwEuUFimDmpqwV8ZJTYxdT2RN",
  "key12": "piHeXG8uQ3eJWq7ZSd4TJuDBP7cG3wA6vzR8GbM5WSxds4wrYQt7qrwqUHJ5trtDu9sAc8CY4fKuqzDLtsAxn6y",
  "key13": "2SKRS1qS3HWwNt72znkZzGCapwbXP8x8mWwBPN8wtN3cDBA9pEhsVK9CyR9DkES6u7YS4VaXcYbWqBNcmcYCPEmA",
  "key14": "23Bdt5k83yKEprgTguKbEX9yGj8iAyttVSsURLPSgtM2rKv6ByTwmCtn3WUTDRGKpQ73VGQmdj8YP9FU7NceCezY",
  "key15": "3fqPmyaopP52yg9ZB1CDH9BCuGVZc78Et4Ubn9BemGPzo21dXebzN2eQothYrFSkNfQc9ofD4LQrePezJqgeX87E",
  "key16": "Wz2ZPorXj3DMLDiAe5y6V1azpLA9TyAwYMydJ9xEvY8J3WiDBdsvVH4tmuUWK7XRJCTbag9WLiEmH7aXmuC22j3",
  "key17": "4yrTLGR14yBYmBsVEHfio6go2cPsSY4pBH2feQgBap9U6x6MTjejJknn8BBLiUFvWw2CRug4haZcaonSL6MDnsus",
  "key18": "2EdSQmrAcaDAgPbENhGqKjBHAuGKzTYqsmExhMnLuQ6RnE2fg4NbUM5qvg4PpAYirVNBaiChVENp1kaSUomF3Jad",
  "key19": "AnK4mkKW9XoQ6boQdygaQo7hA3eG3AsmoGUEG7jJcsjUaLANxmNzULETK91sxqVUKGDGbUn3m3fD6UApxmXvnFE",
  "key20": "5H8Ssbam8KW9eNTw7JCtrZDBspi621JWKaNZWUwZ5dZX5yhRVu96skJJ6maW3sgrgagjSk59CFMniU11UDHMQM21",
  "key21": "4F6qibgi8541pf6SkZWbHZFEt5cKmAmh4xeNhNFzcfrZMSuaXVe2z3LSnGg49AxdmRKfF5B7jT3GEpbhFMTPVSj5",
  "key22": "sBRb6USGfQPDRhzZuYEnQdQzVgHLeBdf1uQZATAvT8bvJjgQQGmSpFXwSHnGSAGVUu3WeRhiNr1MC6LmN7nPkSE",
  "key23": "5FGLPd13JKEDhFWgfPAdxJ5tMaheQRz4Yu3cHwWoMMbqW8Es5x1hZs1i3ra3RQwiz62QtjoHbNP5zoEQUqKyzibA",
  "key24": "nmHXHi2eiGu54bLHHdPJALSRugjSRrQPgEBNm4nPe8sNTDKBdhPQacAE44wisHTorRDNZnaSEsjXRX7KkfJbccT",
  "key25": "3o1ZwXqJ6AMNS5tc3sqaUQgrkizW2d6MMWcYH9m1afmVTRXxbS1RnfgWLqb6yURbWGQ77rDfPAAnXtb9KsQ45iR8",
  "key26": "2Z8EEi1Cys3JYFyNq51mwJqAdm2ARyC88Fp8qTB2DyVD7EmcVNS2DcPmDEP3jdKFvaRYLcRHxJw12BZEN6NJweHL",
  "key27": "5rPttxdBueJi8xzjAEqty7zzV4sz8j32hPTsDdH3L3nEo4GA5sSPhs5yhaiNLhynvb36NBm3AuET2paoWtd6wMYu",
  "key28": "APfeFosSbE7S65wysyFaqbNPutrPmdvDp1xGdgCWFXJ68G5cNF3D2oZPCcLh8WCSc4c27Yeh1YkLhYLwLrEXve3",
  "key29": "2zAa25RHjn6xwvgehG51HS6RnyKxtYgcHKzTsjttnGUTw99b481Csu48pQX4QVMQRjfQdmTenSFg7dEv1T1kyZxY",
  "key30": "3wgcEymWuNsdUmUR5ayp8SrSAUcUDRzVQNmhc1JMaJrmTsdKnpDGbUpzrioYkSFvKK66XNseuC63PSiqGqbutf38",
  "key31": "471U85VNkzMrwR4zerodycVEvenwNLLb4kwHBxZtoxJ1Gxo1wSXp1Fxy97c7tVEHzuxBJeG8aiBu3LJX4DipqPpk",
  "key32": "3XVNptTohVRW4KbfQegbjjoLwSezi5gPBTwmgkqpVcSM848g7goujhr4XE8vmAbdzRjRoB7n9vsJooS5unE6i7mj"
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
