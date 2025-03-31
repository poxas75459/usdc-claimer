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
    "2a9Dh5HaN6gvP34biMnEBNEb13kKRZ5ZNWEV2JNmviaw1DbKn2imdDVYyfeBphgvytft6vroSA2dzxm5hmKSwm3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mfuC8FjL5KJX3SYXysjXk6k8JDJiG2ggwWBZGsdD77n9BBW4RpSiXi4swBbxqYf5Sbf93iJHfnG6XrhNSLnEm8c",
  "key1": "SGEGgG7RXhmB5m8YzbEoEHLv2jHtVMyzvzU4LEM7qxruQXCxFHhWc61xRbegdnRvmxUv54NbtP1y9PjWwRFVbgK",
  "key2": "tdkotHtWGsDwQYc6cghpu2NFSN3RXDXCNh75EdRNLotD52j8PTB1tgw82E7UrPHKV2qN7D1arL4oVdJfFAb1v7q",
  "key3": "596Fqc4wtRPdNd8AggMGJaMNEcdXrHSyEyFa6NmYN49ziBr8wGNiZPzHpnbVsX6UJ3N7EwcsT6nx5jgrmc2bq9LD",
  "key4": "3fz6P3p4RTs5szQk6Jt94hcB6B2S6uFZu314p82vVJhyWkAPD3YJuWn6T9BZui232tyyJXhkhzb8JJqC5K6b8hPD",
  "key5": "2BBUQqTNiJTdJcV8cU722PpZ5KcRUXLaaPGSP99x63mCTLKt5RFVhVuirMyjAUqj7CD89esinuD9KG3zQCj4rGvB",
  "key6": "32DciaoN1Tw9s6wqKeiGAVo2wTJocxykALoLUNiKCEdivqUBBaC9iQtd5taSptrDHA3cqL8AoF7suWABK9QbyB5S",
  "key7": "5aXz5FD2JLp6AWsmQHSLD9gvyYBtQPDAZdmw1kEVjcx43a5AaL5xbytt1Q3yNkLPV4DdM55APE2md9V1RYW3Eyz6",
  "key8": "51YjzK38TQsgrzj3ftKRr4tUJUvvPes29uJ4bS2sBzyVbxcMiRPh7gQz4fBMH82GuyakU96AiAxK1V9PAyBF4Tvb",
  "key9": "2j9uMWeDECdeqdLYGS5bzifGBpiW5M2wPTwKKkuyBMcZfUkTkDxXREYiNyHroGEq7FqFLPaQxAXSoqSgfMZCH3Fb",
  "key10": "437oSYSQTG6xN2uLEwqeNdteDCLzZq1q3jS4XX1KURnw6CTkJvZKDDpwVRTz4Mdbn62jxCym1L45WHHmYeyjy6Cf",
  "key11": "guME6qRA94Zv89EjzqX5GoBx1jqNqaHwemDkGhzKNKJH59xXsKwGz33HAQ5JPBWU1dX2rWWfA97cbxZ5ks92Nnt",
  "key12": "5si1BbXmAy5nRr1BTe7FY7h2QmmRvvCSeaQJb9cmWhxeJ69DYUXWHpUp15zpaDFJmYrpYme9DDnx772LR3aWzrJz",
  "key13": "62nMehUj3TPP62yg9nreZCfhvNGDZTmgUoTKtQMgYw6b2Gte8cuTcUK9xKkQUZ5xAtK7iSV3pw83KNnvmX8SQQhS",
  "key14": "6CUsa7tbis2d4av2grM1HP4GrMW3GkyUg3tADE3SsDXyKf6uBD5Qd9AHPubu6v7umce6jAb9mDkeQ22MigKirxt",
  "key15": "3BUmyrtDCJ1WWngf7nEmbfmRYovY19Y2dkDiK8bs3KZ6JnZXqRvVFpsmQpkiHWGDq1cyiZAFJnUDwfGpgoHRkgqR",
  "key16": "3GrQ94hLxrFfDCuw4hs4EsDTPZYFT2uAMc2ecByvBCaJmWZd7kUsVjJzBcvyjCYHC1HP2Aa5uNfirHQw8S17KaRw",
  "key17": "5BtZ8ucp9WcfPZySnvAoH3i9Lci6JCaQYa6mH2AWb88ZjyuDSJkVvEdJep79Y63XNmPMMjefPB3zg43J1uysSxij",
  "key18": "49bagem6QbVHDworqmANCsb5DVvnEVbhGwwK2wufGuTLWAJboZ1dEkn2PHFDS7cHWouz66nAeMnoX6s1jQ882Pf3",
  "key19": "KiYmbuy4n5BvX1iWCrhzCe6bRWPciYiZt7zxUXU3kauTAPJ7Vkj9Zb5UsgQPdiqZKVr58ojuGZTDfctfqmCgWSg",
  "key20": "mJM2dG5ziNgW8hCo8t59Ya8eFAEFmk28fQjCGUWeb7VwtJcPmdPJ42rKuZ3m8Fwo2ym437taVsAZ1fkxmhA3Yhr",
  "key21": "3bVHyPk5ysYBLHFdMRF84HMzrjY9gHquxTmRJ8WrH5S39FTNmKs7YW5zSNwVwPC492ycz5royXdN9VgueY6WJ2oz",
  "key22": "4tPYSFpLdF4gewLyQjbTevwZDbFjNAVcoSpACQKxRCa44gicDnGntWJkjKFhjracRYBBRoG6TvnUDqSPwgdnjp11",
  "key23": "4BXyqsZ8VCiGGJLo4tsmvJ8JcUrokY1yeELN6h6ESsREecYSU871CFAmyzdvCmzgbHNKDHtyCyEqrrGAM8VCjNZn",
  "key24": "2NC39eFzU5NKXj7FDQr9PXF3mkRhXeud45NoUtEvkTPXRYRh5hnZK3T2TJDWFU6hjtApNT6msi1eQtaFsc7a1ZgZ",
  "key25": "58GDdoyRpezXqWqnVkPmYbG9x6YpuNKawgBepTdsNhf2RfRHucMZo6ZimXhYQnHxGffqu5KkD1aNbmktRXPHXyrE",
  "key26": "2MdKYXCu5tiknU8cKW7bquN8gJhPg5S2f9DxjCH4k9eSVbPocfsscTtLVKAU5DTsd2EVPrjoLXTUdMFU9eozk1o8",
  "key27": "3jBb41gyGt1JCGSRe6zo3CAAyJL4TAZUrpCee3xtjsa7WmZZpPh2VTpDxJbpzLHstn2jGBRpLABoJaUm2ti7THC1",
  "key28": "4CyGQsZRwh3QQyrFfXVYubWPGogCUtzMcFAMydPcHbeQH3vWcLbCyufRH5nMmD4AoKEmj3eN4dSjEDTyncdGyKgj",
  "key29": "2FW1D16TsBGZcWe4c6RMkrAMJysCk2u38eTYpuHFTuRq7jk5cCe6CaJHDKM6hs5pxYMia4b4PvJheRxG29GfuNs9",
  "key30": "4QJ2Ki3udX8jTmhq3uteSAnpPSkGUfxPhz8LbnDiabvjRWXiR7VxJWBi7pGEAmQg7RdNv4Snc9tutS5DxXVZxZEq",
  "key31": "4TT6UMqFsL4W1MYTGdLekS3DxaohU3tZL2PD8AxMehDf6rMnSL794SC35vHMXdrL9FEC4J1ANUJdzVxg7DcQ4m5P",
  "key32": "662VbLvjZwo2dQowQRdrg3zeUHhE7Q7djo1EqPRzondhr9KCBG7XPvcGQUqWFu5t2AuZXYH7wQSviesL5b2stQMC",
  "key33": "63kqybuENmz7LtuHF9BgF6s8MSEBNDECoGj3Kx9qgf14KVhETT9TQgbDhDarjnbtwdAt7KqEryZAz4XLfsCrTGpS",
  "key34": "HsQXFr2hxojUn1WyDdTsebzPU5tQTqx42J6R915R2C2wHxyG4G2t8jaSKSUn3291M6Ub1L1mMSXHaBcNmCtByXG",
  "key35": "3SPCLZ1cwSSj2mHNjAWRNM5aDTQsJ8RRFGfU8PhBr3rP8Q2wFnQcuYDMvhN2xVJqHXFBPggZP4Knm8reSbRhhSrf"
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
