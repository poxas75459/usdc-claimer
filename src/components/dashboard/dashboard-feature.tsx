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
    "4xeMrLUrMAVpQfRvhrnYQY25FYssS3WrJTmKjEBJUQkYPprfQo1E7zGcXiZwLQKBvjett2nUogmxkGmp6iyCStfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x44gTzEjjtrJmGU8kHL7xmR93pe6giD34Ffj4CUeAKf3gx8hzGw8w1DLpY1EwquH3MehU1JHUZoX4txhrfBVaZi",
  "key1": "4gsDv4VaXBxxPjzGe2X4HTu8WXjNuxQFWpu6moVuaHbk2cGEn44Fkq4eCXKaRyvPYibznhLTret7Ac3H1VP6xmRA",
  "key2": "3imED3BzbXkte7uMAiCfxjntdWbbq3dtucuUGuUjx1SbuYTa2bheiEr6EBz9vYpehid4BVhghwUGwfETC7Lmrgeb",
  "key3": "5diZ4GfqnYaSyDPQcsLBT3NydcejQD5eYuuS3W8qAiQ9pfvPWg6ebNpehcNa4eXtvcuZpbDzVekvDHTZGohVXbGJ",
  "key4": "3buBdYRseRBUyfyGyc1qPo7TCTjH7uFGgmF7XP9vdY2Ur2rc96eoMMbyR5kurj2a5FrV4eSLpM11CdKDcFAi7vLg",
  "key5": "5asNmRAeGRJwVrKnKn5DUxbzPRgF4q5F3abWtaL2FbGA4fBwZg6xRkJAPrknVKjy312JB6iDdRGAvV3GvmqVT8nc",
  "key6": "2N3dJFRActmQWt9DgWFeoGNAdFW82MrjJjnSaS5Hk6shEQgvD6mjyzbakDNSSzvhhfRUZHbbdrj72K7v7RFxGBbM",
  "key7": "4f5Hky1MhApU6bdV3dP76wgUZEPae513VvWjfggmA2APL2zBcWT29LHpwSGawDZcudz3tpXbtN1Cihx8iEU5Bxzz",
  "key8": "619xLHrzGinBMn61ysYJbpvVvypx7WH1hgvXJayFJ8oBnFAznkF9AmoVvHM7gNx1WswkJL4TGR4Q6GUPJDfxzcyT",
  "key9": "5RTPzwfzSK7mGLSHtZqGHFbbz3KLFkNBVKFVMvthbXwatQ3SLqod6sUtoJDyLYWjq42gbf3RMvDSVGS2NaT2fB5r",
  "key10": "e8H2aygFRoAQGyBURwnJFuDhkpdr9vTzKAZ44dQde9Ud3jniv8XAtkb1zRMeby5VViCYqFtCxrB1Tpd9yihDk8j",
  "key11": "2CjvY1ndmQav9Hcb1GEUkapjf7aZWfZk45D3sKBxRzq6v7w7AjsZvzMR81ED71Akd7SEximh3hmzi4Aj9vqwED4C",
  "key12": "2X4x3dRDxLE3M5gmaEyhYQxfMeK2ygcY8TnwjS4hJcFtBsoCMusWULDbjo1aMYWV5K49kZpmNuQouJSPJeTsuAwG",
  "key13": "4Csuj3ECRtVi6ntTTWWjg343MP4Q37QhVeF6ch3PLYQB4fcfwiM5puKKEPwTSx91n4hm26cxDda8koN7mMLrrsqM",
  "key14": "5g8vNK42xeZtVnUeikUe5kvr98rSuwKv2TWNHcS5mE2QC7Zs3fLDPa8YnDJyTkKCRKs6o2SvEB6GVGm4kwCqdZeT",
  "key15": "3wwRK2RKb9BR4xe3qMeZPUNYuCnXd1dBXvdmZ8giS2tAA1JnkMueWKF47GNxH3TXjSwoh8s8JxsR6QH5yeDSFnex",
  "key16": "FpqiAuBZA8wFmTU7n9o1d2xNPacEaHq7de5rpY7emCLcp4MJYCj4oRWooCQ4WYE1qwmyeyMo8SefaZ5VFRW6gYd",
  "key17": "2YVBuWm4S5v1fWPn89JwHjfymz5e4zvjjfnr9qsMFhzZQgYovwKfogxrLUgiDJkRc4zNu1SfxWx5nQ63Q5BjSRnM",
  "key18": "jpt8aGqtcjHPtRq3V2p9wwzybRJmtsroNCk4m42ctFTpeV8SbdDmKmv6nXqVSEfyVNT4BtmLZkXx8YAAmdxbinG",
  "key19": "62Zfp8UP8CQQ1BFAyyW1CnuaJcDmcj2ygAsiRyM1XYWrp44Z5sSypreLnM86bjArdHZYTzo9S23poTPuT8novjQs",
  "key20": "65YSfq4eAhfj8VE9StavEP6tpEHinzdejjJHKKPWaoUou4T2ACy3zV8LFsdvAqDLcMmJC6PJcLrqRiY3XFNnKWmU",
  "key21": "LBiabEPES6x7H1uaxdS6CaQpnreomjv67eBProR6o8RoUTKydQQW44Dt5nBTtiaFhnw9kfk88UEKaf2xGkafc9U",
  "key22": "48oqHhBwjbxzcckfCvvm9zUEMtogafrj35gBnJcMuj7CgiBSUZMCcCoocBTKsJ46fHFAfa47FLwpMe9PSiTXGATF",
  "key23": "122VXKVrySWFEFA3kMLXiK6zwiNxCUhob97dB6zKP1MuRAX2HKHJWsGfesDFDMiYzaHXRV8kKYBQwogcxdyYzGGs",
  "key24": "5iLnQyLbbh5Y8N5HXMEhvqBB5gsMrawCKeZNizCjMFYhXkdQaZCyMMWxuP22Tpdaj6Zug68D8zT2ah9ZVG8nTaYQ",
  "key25": "8ka5VkbXw2VDJ4SCYPtCeyXEHqmWiV3aV1VbqcauXsPJSF1fvmQ7RAZd68SFucCrK2qC7WsVatJrx44w4EpwKn8",
  "key26": "4d5x8fqETR76p3gJFKuJnUwNznkWD5roH2QNhXa9nKcWLXHxoU6PXYgaSu57dCscCg7m5Ygho1ygKXnqqmBCuoqQ",
  "key27": "3i7MPHqM6g9HMNEZExgE9UfDuJag1QsjMgsRMYuaUpb56uCD4Luh19LSPpgEQE62UgmhozmTj5QZzttTVNkL5EHF",
  "key28": "26GYB36KL3GDFdUYNxebqY7SVzCpVDKz3piukUMhYEUf51jYtALj9p5dHiPxxTQWcgGv1DxnQYi3CA5U3KuN17eY",
  "key29": "2zYEiw18GVakauhckY78NArx3EKbgwt2pugNtyvDcb5MywrRRFfMLCUchYNSo633kBtQfXEi7L5n1pQPps4MK4ed",
  "key30": "3X7eyTpGUPAWzcdbz9um1nikmZqLM9Y5oS55LB9ihQX4vzkXUia7YWABjStEXHy64D8wUixwcNQMmDVics96Kngy",
  "key31": "3qc8sSu2GpGAoaiA3LtFenFYF9TWaMTkNAZCA6qoR74kNBBi6MSVyqqjG7w49Jqk1w9oLJpDekwz3LE22rEjNMR6",
  "key32": "5J3P4PUKTU43PPR1BfsySfbpHe414a8MJu6mo6EwZnPtVbncGKg6xCaeoSw81mqVsB6AdCW1wwpJbVXMenV1Wp81",
  "key33": "3dKLXsE4Hm1Kc7JgyMTT8smUfMwhhV4P9xLgRAPmzVTkoviRWeSpa5KAs4Z2eB1PGHPGZpuzArcUp2r6a5s2gCyf",
  "key34": "3NF8RJa7NvycPaWWStvMsawRfNuVTqYB3TxKqBf599sY1vtSWqp8JV8mZ4LGGPnK4o6SHsySt64u5sh6cwAQjz2T",
  "key35": "3oEth1UE9YzLowLj6TQyddfSxZNfyitaeHyAkqHCtDX3Gn4vputzJPuySVVtA4LNXBzdyjcU8pcEtEeDe634v1C7",
  "key36": "52Fwvyk1frxux4PEtHvKXuW5MiPwEXTitqDXBs3ss6Kw5iW9kgeCJPVdW6kEt7p6etPsXnqqL3NnZ9zATCEQTfbF",
  "key37": "2RJAEZC1Lf5sSXEzYPPidjFAcbvbjk21JHSdbs6NvtP65NzmSDcdK5ahmF9ZRdsnJXvhY6hDVk7kt9ESnENpuMcg"
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
