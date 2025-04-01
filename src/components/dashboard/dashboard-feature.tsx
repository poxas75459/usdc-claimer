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
    "3hQdhbzKXAjTgwCqzJmMigcCUB86KLETtFwjXcwBQU6UKgmAGteuzWALCtdByf27mPMm7M94pKwrAZbwKnZJdLAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LivGfPx7D9EChrfnsxg6DSGqAWRkyeekbcMHShdRhTSkDxCshigpkd5Y5aLAGvpyBgRizVxyGbAEs5WnsXbJzZ3",
  "key1": "zTmQWdb4CShQLbvbMQnAYZScMsCyesRDpUuKcP4YErKSQUpzZKqxunYq984JCVxdgfsqYLD1LjAjE6jJ3QjzPWp",
  "key2": "4ihufMZ8eeWswtaK7Kupkb5FKScqTmrBs1WzoPYDLeBYsdofVqZHEVZLLewmuLwQSsczbwnzroe2RPnCtxE9yzjw",
  "key3": "QTHp4qMGJrbGdbrhpv1bpr8wEtrEQm7zxmL8jxyzsSV4dUvw7bJFMviMrT94JWCUE6gvR1MNHDCGXXXthTy3zae",
  "key4": "4YBFQ5sbpa459CVF5DaEATaPJLPU6wBaoL7LuhMmrfjrgr8ZYHug6DCQeBs3njnCXp376PFN4BNwwEqQGASPHEEg",
  "key5": "46eonmWoQbk8xHkKigsLqvQFLpBdyoCEF8DzeQ4aUyxoUrxixbRcK4jAD67G3gt9RzoSshDumxBBgbMtdLuf2nhu",
  "key6": "32ArCuRbuDnFyvqvPtyEsZQHcTJ7bcxeNPzsu8g3k6Lep7662CovsARQ2V5zGC1VqhoF1oSNLbbaT9CnmVSaP957",
  "key7": "2ZykG5btkco6wVWskNkfJYbkfPPeKan5vY16ne1ZaACtzN4KR4cJActFo2swXYYNQnrG37Yjq7LYgiAB795CWnBS",
  "key8": "4whWLej3N4aUJ9EqT8kou4FcM74MyjAdFyJrT8fUgM94FbNnUGrA9Cwkpm3NRMgwxNAGke9SwgWfYS7u6dL2vkYb",
  "key9": "4bBd5E35okzSrCDekm32g21BiWuh3NiyExGQHmFkKcxoGesyuWxWr217uAWBDNb75w98L5QnyqZfYyzrvmRzrCgT",
  "key10": "2dXMNqHuJXVFhBVrxRvLKEYaVQQpgAMaF9YJyYV3abeSyQHVUgeSB1xKRyvF57McrS5Pwx3A4tXCh9ZYZkdq4i3a",
  "key11": "5nt92TSWuwTQTMkvs1pt3jt7FBEXHX8SLQVF2SEZxNdaiqhrFKWfSBas9G8X3ZuKXfTVA1TCcLhsR8AMJV2AfNEp",
  "key12": "53DMxZVN2t8VZ5BFx9dhqru1dh6NJmQ5CfvyjuFaDvmZmheVnrxk8aqnTcYzxagJwGZ4uTdv2df3WT5xjWTYtaRo",
  "key13": "52ZSc6ZT5s3j3n6XRaVrTzP95ZHcfvBWxpD8THR2vwipxUTmPNGe4uYCNbsi5URqWuEFg6Dh45v7oYsyGe7dbPUm",
  "key14": "66fheuBMpGYUmdTNnFEv6fTFQaa3WxXuqQVpufjZmjRzEDiMqE6J2rh5gLoBTKQiQMUbtXR1X3VmRWq54RHyHYEF",
  "key15": "22myPTK7xYMPfpj2MndmLdKuWkGdWHWCZFGy2qQ6CzsPxPRg8M7m2WhYmgZ5QKNxQBzaaKxSSSH3RaA3db7F4tSn",
  "key16": "2kKAyahGERXKAjYrFkHZn1a65EgfEHcGGe1YUeq28SzYmXbsMwRe1MrTisKB8XLMSSqqwrLyYXJEGH5UnizVU72w",
  "key17": "44epoqHsyDudYtYftLJkwYyuGFyXmRPVPnvwg3cwVxA2B8uKPKbazvT7rFsnZWayhXR1ha5SRTz4kS6h6b6U97pN",
  "key18": "3Mq3dCyPiDqzDy3YHvxGhTd73Mmzjh6M4TKxLbVY3FNTd6JFqtsCPGQerF7pJvaPa5DpWsSQYpGJX7Gf59dPh78x",
  "key19": "5zzA6dHnuq2LK7AAcczQAiyiGP8gCeniLDAZ9p1XKRmA6iN3r9Wchi9ufVURKbkZ3GmSMpXsnzVckZqGyMdACZZA",
  "key20": "mb7Zrwi5vdx3N9LRyTSs8v3Qxv5K4bksGr3rhGsGwPWkStXMBDb7FgiiE4nGYc5mrGgmQXJ9Fbj14zyYXnsXCx8",
  "key21": "2bvSDZP1qHTnTsqApuFoQ4hfy1P2rzdhqNhH3GQUm15W8ecyFBmBnxJzVv37GgUZQMyjJuJpvoQQjJaRaG68wFKN",
  "key22": "2Wepwt9ABCB4vdWYy7YCBNFamNY7iERLW5jRwat6rzf3WPPDsGAo6fbVkeJ8ZQri7p4ehHjNKL6BAxyDMiUvCMGN",
  "key23": "5Gfq5jc3ZstYCqgAst3Zdt4CAXcPaWsYSApqLHsj7VBYg4YfRsmdvA4WDuhGwZQ91q92oNzNYmpysyDVHKkTg72f",
  "key24": "hLFYJVAcBv2FJBZRGA166JbzfDaKAR3nLTrdWCJ17VDQjnCJqa8DySxUkiF7NG3KZpJVKWyDxjkdPADnPANS2ug",
  "key25": "5pXVUHuEgcMrHhLv4VJUYdiSYRZ42H5R21x9N1Azwjivhngehg2KMjYcWC35Pk2sJ8m5yAshwGbCpSQ6DEWeUuU7"
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
