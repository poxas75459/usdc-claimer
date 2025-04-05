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
    "3ssKSqG6ypUmQ9HBVCtkG4kXhmvbmaDdU67H3fbUj5jT1puMLL4RWeZgznKT4wyA1kPvhEDBSGWH4uiCjSnGgeHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmnHbjLQ9Fzns8dXJts2JM5uWxzWkXgKxsYGBxKSH9H6q9RiQ67DwXSsorLRW5EdYocJRrjraLw2kt3HD8jhfYR",
  "key1": "32x6PWdcNwQPRBUmfm5j9ZLFP6aAAct9TPFqUpA4rB4615r3T9A5s1QSuQvzFVxyD8ZaitNvC1Nf4CPwyzNmzG1n",
  "key2": "nLX4Wi9ypZ7bKg7GQTKpeXN6s7tyKdLHKVYCePgQfdQFfPHSqbqfq7rkwNcCRyqTBi1yJwAXdf8VaVZuTWavPu9",
  "key3": "34bmTNxgDEawXDBC1mvDa2kt48Z9aiUf8JQ1SDxGWYiGXUmda3qdTL7pMbv1mkqFKUcuZUo7ufPNM9gGtSSJoee5",
  "key4": "3HjUgxRtq2VZXafmRWTd2VnVcQojJEZ7iYvxBnTo9YTFmVMEGtUUgXdUNjzn9x9bxe3bw75PeoFba1ZfmwhHnKrH",
  "key5": "3FmbCUKT6idcWP9DpZkVG4rrFTPJsRKFv7mMgLcKXeGpoaie8DTxUsbEkguvNdfho6JYT88ttzZAk8zNEKJmSqM2",
  "key6": "3ymT9wJ2oAyK7Ygi88BeV35Ey549nmkd2MzZs1cu5WTKezjfvbnydeJRWsz7EByLqF4UNemF5dfs2axzgcfQ3E6t",
  "key7": "5eEARs9d3ujVQ3wnoGGssAuJ2JMRForDY5KHGWKjEsmH3ExYPtF36pEKThZVKqBf7YXc1sqck4n4FbGYwFrxxKgq",
  "key8": "2neUUHUpKpCDHpBFjC6qAQh6E2Lw95PeqziU11Wr8bSD2iCvJ4wWsTkVE9pjFV5DPNkhVbX3oaEqinKJ5sgHCiZK",
  "key9": "HPpbDyWp98eWwygqqMfSkb1NQQBcjm28NKnTcjruJhnbKRNorUN44rsGBPixS1hFnRAuuERTRVo3CkFv5jYZM97",
  "key10": "2Xv6mag7HMW79xMjiZawcjwcCRBetfodpomw1yxr49271NTidW4WxpyFrJP6Vk3P97v4A3veQ7V13YeUWnJyexxL",
  "key11": "xSLUWEXUb4WLmrbxnEiC6Bw75Y1RU1rPJedAXCffg8TQV6fLLBdfLDFe8zJDagpZdZPyruH2zSdpWYqtAmBqw3D",
  "key12": "bTyACvjLNKdyDyRosSafQzsVWZoB4BLZZh28TYZVSvuUw3AMREexjJkt5bZKB89GBJkbnZ3j2sXoQ93hD52KAXF",
  "key13": "NDbTAoEzKo6vM3N9Kc3Cayep462tnx43E4NnuBgdh21M4FztVsKsgpUotSHnpkCdvkpc7i8Lg7J6JFpb94QAkLS",
  "key14": "xbZzrY2bq9DHa5FJ8RuNARZaptJe2mBwbxPWnvutavq91heFMPJbJsWXso3ozpDTi7ETKv8kZC7X9kvRzQdTeAr",
  "key15": "hBSbR13BciAWyW6h3yYzqs1hj6vXDCt77cRbaNZqiopFSnX9xmvRg5qVUFNgyo4gEtPfC2RBF3S9uTata1NgmyD",
  "key16": "2CB6JdEezKzRj7AXEC93iPwRtwcnrra4Lm1uxUy55jm5kxqJAcBHgP54BAPnZrQdAhKgFzBRtxGtwXTxsWHZLNpS",
  "key17": "2MfGdASHC9GXK8Vw6x93TN6GiYzeoKdAjXEwnCyTg3aWdgF9oM8ShFtcu7mxknN171pVavgGoP9JHZTt6qCXgPwZ",
  "key18": "5ngg5FNwnrzCes8Q3QKDrAq7mnJRJRM32C2dpcYHngB8RhagcjCECWqVuDxufdU7QiDobCtHYasVQsFHTsy5HsYR",
  "key19": "2bA3sauGSUwZ9HGhLUHsJTYq3yyWxZKT8MMvKP8yNyTyG7kLxgqL9B6pUcPk6sK4hwcTVPxJP2BRwfqXZTuA6Dft",
  "key20": "5euC3FZMHYS6csvuiD7hzXPiD4AwzYUq1DRBRDjHEuJSYR9rEzmk3AwSMYRnZ154K7fKbTppBbtFJnnxKwEVUrd4",
  "key21": "5SnBeaxAgyjfQzJUMqEXcfGNN9ZtiPTH5k1xcfK1UM3zFxKDXiD4hKfX7treNuCb3E8zrDfRPhbASg1roubXuNQG",
  "key22": "yS586hKehTyZsjQdsYXpRFwqkxBjMR4LEytmAzK1Sb8UHDtu8dSaEtqEk6Q9DVkUzeYyU3MsHWooCGAXn38dp5N",
  "key23": "LMUoLxPa3nuDrihiM3i4t39BoHYHRDtbdnMmzwr7XNNBYLrvohymv5wzkyZpMXLUAfp2qPe9T7ndZEV9u4XBGs7",
  "key24": "5eyoFZBWwALMB3HJNRH3uNgjbxktyRfvujPCVmBh8MSSmLYzNXCBHCGoFHwRqJjdfi4MdWK9V7pMpoMyWjmtjw7E",
  "key25": "2s5RRJ4QempT4PoYBLzzHRxx2RuZyRnCh1z2R9J6ECwZB5gr3RRRVT9cg7vM9UnPmWYbfbSnzbksCChhYtpYwdKN",
  "key26": "PgqCyCPP1YN7UcLs6AXNQGUKK7gJJX6XhJ73nuFon6jTSMt8xU9eQbW3YA7ZUtQHxm13iDmrnWQdC8qSa81seJN",
  "key27": "4VPwbbBcTZv9Pt7QCF5TZGvvAkjqxvUMbfipw4TJUSGKVvCKph4RgCLFSGXTWMcUXpyBhCQUhkJ8G5VoYSnx2WJp",
  "key28": "5G7xFxVyWzidM2wqvyQs2tnCBqwLubRRoCgbRiEoFp5T8VP59atfgpiGVQXprMsBFo9gBdPkd51E9gzXV5DxTMaf",
  "key29": "324drsLvchMb8NbfUzUQiuLDxHVXfRMRJEBPjXJk4APRB4kuHBBMGVbWxtxSXrSDniWkaWHzL23R7wek2kvqFS1x",
  "key30": "3UyBD6oREm5ji16ii3ZHvDiX3DrE9ptbjUuMxGjgx9NnMm28jeRvUFGzRFszu9yKKU52LCAbfQVjbUEsh4nEL751",
  "key31": "5x9Z4PS7bStYR2cD4VupVv2iUgJ2i2RoVRKpxrTyW5AGgZhLDaGsK5nqn9aRfC3SDYHbKaepSPbSvhFgUiQ4EVch",
  "key32": "2kkx3p8ePRPJkyxErEW4gdoHPzpizf8qQvzXnZ8uZ9htNKAPBGpnvYfE3m7o4eumxzvuQPEkdc4ekt7nfFHDt8rr"
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
