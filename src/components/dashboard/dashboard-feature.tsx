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
    "5hNTJkzb8uYWquRwakA8xzPvV9pT1Xpzq1eDzRsTumzA9xru8acPboJ5eZMMA9BdZk5KQxiCjGU8xE2uQuGJQM7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCGiTVA9Gt3ZHHN6CbyLQct9XDmQq7J29Fr8cs5yHdj4U1xwG1jNXhwkWWvzVcJjR8WkKXnMxyMjUDsgpwSar3S",
  "key1": "2ByLxotborpShoNUgmzNahiwYSnJHn5zB4q7JPKBrDjHm1mCfGeUtKGTgHm89SkE1LvhDxYS5tqqsu9EKAdfYQVm",
  "key2": "4gD9DoymbVVHh8tc5sUPTFFuiZE3JoYsSgsDpCtyjoaHTG36xzeh3RCgLTm8yYEAa9mmcHrvzb3pCsLsKES2QpT8",
  "key3": "43swJVb6xKxkdQ4MWFAfLzGXWowJjdCwsB3PWFXZoNLuPy2Ey1jZPRRSfMeXzQhxa83XTpycYsJRQkaY2juN2Krg",
  "key4": "NsSHw7qx2ZgfZpzfME3955Xgay7kJa1EPkDoJAtPzY5d861C7DViRzP9X7kTanCEPHPXyx2vrnkp6bv3oY6gj6i",
  "key5": "38woxE9srmSuzeT7MzGF9x6UTvH9EaxWro3vjD2xBkPTLySoienG5w4XeKsxc3zV9Kke9yX2xHLbCeUQN3pLL5kU",
  "key6": "4UGjWmFZ8SUwRi21uzvGXFny1yFprtDjdxtgkUMMN6GMiemSHieKwfUgmeZ2PmKJ7c4QT7piCgDTqcWfqNSFS8wx",
  "key7": "4i93ppALSTkXcbRSDuhNu26FvMoCia3cjtiCtR4JHTmgKGcedXPsvZtsooyzjHEDQT2H2brwuTpmS72aRifdUF4u",
  "key8": "Tc2DZWGdXJJaedCBnVTzck2Bsa5Fk3UQzKUAsGS1NjgTgQq3zMkZ6mQMgsAdgBJCLeq9NyTuc5xVGz8TadhyAGm",
  "key9": "23Ahaip7tooi725Fax6Ls9scjW2JzQY2WeJFwhSVHcASyGA7qJpL9cA6KpLQLaoCVAh8E6HopdwnTFQwxFXxU5Zb",
  "key10": "5XQfNCSGr8WALtoGJNPG2AXkgXkshCA8M81eZU5K9m1CXLFNMLmQeLh7uyqX8suq7yhmyajUorTNgtZ6B6GkT57S",
  "key11": "55ZFCmfT2FSpXmpJFmg9kmnswXyoQYyzyAYm4GsxyQXsRBT1M2YhujT7QpUpxneJ4nNq47bwqHTXwEjMfkmWsw2v",
  "key12": "5uamMjvofRJaJZoz9L5tciD6V2tE9Xz8NhWJ1e2AoTPxRBg4iZ39tNaFzyLSrK7d4zSJKsuygqMV8X9Ft8Xff6ko",
  "key13": "3izVGUVtrUYx93Ewd6FV7zKHGzwVUmkCqGdqBrTH8k9AVoK73vZ8QvMun8mEsiFpNMgUhcC6WwqpzU57aybVVfHz",
  "key14": "5Qet7YrDUDxZzftYqiUbHrK7N6mRApMGCrRDqWuSEwPUVR7k6orMjH3NVKNoLmtTvQLDNNRQunBojKkXY2x496HE",
  "key15": "3absgh68TEHJDsjup9WC26D6HSoo14gAtLGPcwDha28jX1EwVZSyCPnjSWSs3iScKxBneHJpY6UrrhKopQrFx91r",
  "key16": "2Cw34XYM16W3RFzxs1xfKcj9XFqNUjkE42owjFoAezBcn6ANfTNTM3t7Eg7Q5PbYGb8KXopV6KqyAwA8KNBk8WvW",
  "key17": "2hUrZLNaB7b4UYWMBujDDVduS1PxQvnPxZ9BBxQinXiM2FmvGcCkGJRoRjfP58pFPx4ULMGHSibYVvCC1Pj8h26X",
  "key18": "5PzSBhjh6ABDCe3pBSq5v26UgBCN2dg3KBTaNh1es8Dnu5ZRTvjZLSDYATGgqCqKfk7QdMK9JWAA1xbfEhL5efbu",
  "key19": "m6BNRKnsQQyZyhADCBji8j4fHBNaEGgmUQfiptEUgGMcZ5TKsSetaSUuhbgK5JYC74YxVtwpZooD9jKg1d1souS",
  "key20": "3Ss2oqiia7KGAtRAMj9pTybRA4LkEKuHorDQdVmF6VLiTk1FVv5Ed6iuggv9KNpFiRrq5gDNGSEdP8kto8JsCyX3",
  "key21": "3rm7JZNc19FigLbHfCtXS8ymbnXsUFhcbWefUa98rhDRYywYsAB29MX9ChrJbVBNy3gCA7a6gWArsLrvLKK9HytA",
  "key22": "EsRKc5Ah8ayFRwTz8zPCESxaaE7F9S1MLcrWUH6eDY5FedXSgaaSGkmmY58TeKrjTPvCMWA1roHe3XhK9hJAYck",
  "key23": "3fXxa2sHHxqbKWSLgTAg9AdFJfoCKRH17hNc6H2pkgzeXD5QJb83kiPLNk3dnax1HvdQcdvA1EEg9tywKxcHL7v",
  "key24": "qqMCLfULpbbBu3X3cHqaVn9yEucZFQsEFroPnQQQugib5xANbaAxVbJxhuctZx7n5cdQyFkfrYWLUQDhhvcnBgv",
  "key25": "3dgKkZiyhufyHtPKkae5ZhLnDxLYDaE2iJHkutD8cqPLitAvAR7aiTvjrrVHBvQ2Hwyyig3MMLYnpg5HYLRyGhLs",
  "key26": "3nVxfQpBMfEKKv1w6MVw41Yuta2Q28Qit6WXBYY9NSjyoxjPFrwTvg25SRjFPaWFcgpM4YBZa4z5bcD55BUWcrZi",
  "key27": "Qw1FEesotg1nggcKfXy9xJk4HZH2Jm5UTXYRPH8k1MGmH9Rc8qtPcPGEgsgMaW3iLq8173AgDhuzJWoVeqY26BR",
  "key28": "518LvzSFz6UNbzB1VVqMh6cyWHxHinXDN1dLtid5ZbbqCrPM2Gfff6XLbn5eXSweEEpHWGegx6j9jRP4BPR6zTgU",
  "key29": "2KvEz7scpkxuLi8detTS8rHE5QLadzeP7AXc55pqYGS8VNtrMcbhBR7JPrzmVRMwWMqAoPqELScXnFnHG84jzbDN",
  "key30": "5XwPV3tYdp24acQvFRd3H3Y5T4thN2jH1JQKLYA1tNHzL1Xfzu4CUiHnQJvgingdtfDqn4MFezspRenvF64wVDLi",
  "key31": "wEQD9yBQAWM556fQDFpmZFALCuU9LHnLgyE2J5gQrdKaKw2XFSgVYWRzvA2ZefqC1uBBBKENhQvGD5PpJQSg644",
  "key32": "4DXUVxYEgGrD4JW6BNFGrdCaUSaPbkDBab7FpMv2xp4dxZGNUqCbSjtUtbmPGYEPUMraDRC8eW3Nx2SVWFusCq1Z",
  "key33": "5c3zvF7eiRoc97UHQmv3Tu7vCRAUnejxQRchNVt6LriQMnWJeivd9FQV5Uqt8JwraardNUNHGGnD6A6cXi9CvApg",
  "key34": "2keaq7GDKECTMRVwyRUXkAwTrfKaut6dYabh8FcRhEvXLck9aJzTmNM6U3JKCxvaXVuDG45YUAeaoWf7TdrNBETk",
  "key35": "2eVwsN9vNPSLvHy4DWkuCFUoKo7bpgqjowMTPL8jctDBbvz6GxAUat44ufRaRDTQNw8CyM1GWD1yT9uKmPK7UfLM",
  "key36": "3mBg5DN9u2zZn366WezXQ5Kwh5jU6WLpkg4ZtVUVmXuBPmfyeJf5GiLu2zbvpuVX5MzQfYEQWqrJJbnhcaXXbB5z",
  "key37": "2X35XiPbGtJKLSLiHsjRs2hohudxjkusJ7AsVLAJacFbHooUwwTr3TGuuEpaTK73ho6dHTn1kfVRZ3mXZ1iq56J7",
  "key38": "4CyfhSXEgirtW3knF9ctuAZ712FFKc4E7Mjae9uxtSdSCfj2X7iic4tfwM85hPDAhrXGAZXrjT29irrvNjz6ZHWK",
  "key39": "pctLDgjeHqqY8FaFjtCXnejdYsX1DJFwhcHMeWi3A6tYD4g41x7YgfrBwHHHYdrgmri4Qp1kEhr9dFK7Ntg5wPc",
  "key40": "493M33t8NX4swqNHqTma2gT9H2c5kqcRUr8cpWacjEXJxpNb2hEtJN1ChbF5gfYBN1pueUvVdxetd3yYy9AP8iz1",
  "key41": "5C9iUfnwcoRsZHPfWnVgGFQk6zK7TmY2ERTn2ZUrN6E4K8cfpLf4HxjNBFJ7uu4WuLHqRWKhtX1yGu4jqVykyJmm",
  "key42": "4fegH1emdCswoxQG5dvww43G8GumwktSvtNaMbq8Jykjvy1BxatZ9eF3nHcr1DHsxWjCj1AQi57qAJe8vuLpC9mJ",
  "key43": "YWRTG4XYNL9EzzBU6UbwvFBmCsKDTdCy6sXPmKSqg5Zq32MdY7BDTGxjc48icroE4L4s2CfStZLLeUAMocVeBVW",
  "key44": "WX3bciRymG9E8RHLJn3BGGw6VHvWqJjkkeQwAVMKuCMR3QoQC6MrWnXPActG66YEh6YneMTi2bCHJZu9WZW7WoH"
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
