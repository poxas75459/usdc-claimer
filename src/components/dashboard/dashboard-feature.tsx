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
    "zkZQwmAct4VjVDBBNuRCzgXTKcfTSTk6gfpfcGrBNHnUap4WWxZQ12noqGHVpxuPd2coxqSmfquCnBS9iwNWfHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CnqaPRaKy6nfvodTetH7deKudi1aSS39chxDBbxnWsRhSjyqs2SEyNhzrgVcSAthNCo5Dp6Gr3E84L8QisFLXAQ",
  "key1": "23PYkEgL7rVGUVfehaTmLFWhSEffi3K8UfpBmGpqUnT1rhTz8tFcAV9kzdVQ2nqHYjmLtzCqWh2SuDdcf6qo1LSp",
  "key2": "5GvcBGYKBvXU7U3NgeJRcg1ToH1WB9aRgxjS6TKjs4y1uycada1Z31AE4VvQ1sQvHYcMSXSXWH424u8oKjH8tE3F",
  "key3": "3i3zARE76gPZcsMQg9KVNX6HFsW4DqtGYiSETJvv7SopqsztAT5jL5MfeD42Zj2XBdAC5r45ypgB8qMRtWdyZnCq",
  "key4": "22v7jz5WhtaHiUVJTNcvQqZKGiz4A9KQ5eR2Gdi5BGTVxVyHbeKcF1HLGnC4Q9umiTZ29p5uoJqNh4cooLT7f3FU",
  "key5": "5pRSamBFY3wsmjBndTzhQ7gYrjs7FwJg1jnBFHVRuxbWE37KMv8JywvCDEJbUPnXKbgky2fym93ktuzkhdzxXmLD",
  "key6": "ruKmgoPbbMK6GMKiLoFdB3AJdftphEA2fPwZzGjQ1RVGRgXPCWbkr9m1FmsdLWbHjTxEteK9e3ShJykXzYg3fRk",
  "key7": "K5sefhxYs5mZsJ7zoNA5oosaERcfrhqTD8qr9VhrCcuvDgLx7rbHCGz8LfJVxFfy6X2UuuyuRVkegueCHxTvtXB",
  "key8": "3kJbMQ9Bhjwi3nN2JHbU9PkLmEXYEj9Tj17eUYAtZpugisocKsoVYK4hCNTi4jfj6XmexY5McaJLjmr2Y58NgDt9",
  "key9": "5r7u42zpvkcCCUK6oE3KoUnCkqD3nq6m7gDGbfud9Fx9QW1k5yP9dMk1p5ZkSUDyQBxoqq9DMa8m6LWUo9qq9qjr",
  "key10": "4W4214cKFLqf3T2E6hWTo3hQUY3hTkEUq2nk5RVgv3XhP8MmfbEaU6KWatmTZnTceA3MUb7XF5a6Esg2pqXJBD7K",
  "key11": "QgVBte9nmK798vr24z31WwaXY28JFiz9bqzFtzppUk6mBZv4UyRJEvqLMaE9WqcNcVcDZEqyxnsMcwXvYvhoXA7",
  "key12": "2Cjp4k2BYuvkFJ8JQ3Lq5kZU1onjLXFJfQE7RigFhJ57wrzJUnaXU9fz8Bwac9BFpFT5JXYx44gxo2dEce55uGbE",
  "key13": "kHRxH7zywfdMMHrxRBkkitG64KuZL2NAW11NZXHLMoGdEhXtzfsqNGqeXqUaNj2aCiQmS7ALKtmF5QrC53jHMsR",
  "key14": "2bzn6WnjyjXDGbrnW3GxL7UGJ58kxPmj1phkBiCdLdigysqbZuEiZegePhyhhgjTHyQKh8BW8uVSpJwnbSXdwkpZ",
  "key15": "4CaCN8fi8tJzfS8pF32wK9n5x6aYqgjywEQW6kpPoHox6UmvhNoqRCtmUVBkQrM945G7ZFYNyL7UxA4Kyo1VfsNN",
  "key16": "piaJY1EJo6aukV7BnxnLCbmJwL6dSfHzZxwzMe3P8jfDDE9FwkgGkynXtU86jYrr3JxWAjtZPKqF4S2jG2XH6Ld",
  "key17": "2paYW93KnUU5RZJpYP29g547wc7o5utPfkdFWefg7kWnGUhuf3geYiQPZET2gUSQ2XjcJX6V5nvoDW6pz2iEiEVW",
  "key18": "5X82oA1s6j3wmrNk6bSWrx2EmYvVnXvi817pTjfGUuLF2SQxk72ywPBANQkkNbhUpdi6CrprWGGaRDaR26mxPjxe",
  "key19": "2PTbk1wPYrA4AEQuVE2ftEpXyUtS5SNNkVoShuDqt3sZXFDFmASL7guK2rRS6huPugZH7fVtAnXFGkZYjVJMknTF",
  "key20": "39sHjAG4Ctvf1cCzsjkXpLTEuHBu4tr9Mc6x3UofLbXuBDqBbmvqsLeAinCdxzzPHEqzEED1qaA3Q8brWUD5FT1D",
  "key21": "45jSghyDmFVJCvN1Y5bPsz9YVJDWL8RE5g35mtoSByTdcMdmfSWgzoyXfngq8fE45BCxRmbiEzSqYawH9Hk9iWVs",
  "key22": "4iEPz8a4WrubDqPXYZS61GWy9bDAec2MiKuS1NtWothr2Z5d7jitoaoBoSZVHTo9DWb4FHGjXqnfLDkbjLix3CYs",
  "key23": "4CjVuWN61B9VrWuaxqb8PQaLD53k4rHotB6udrMfanBMeMrfB3nNLPcEHeCE79dj4HSWyvdba7AUTomU15GpRdY2",
  "key24": "3MSWLKG3ffGb9L2yxdK8WVL5Qji31oAxcDs7NcWAEWXHGRWTBq4iHLgVPDsr7HLBe8dzWQm9skjuCfXePkKKuf62",
  "key25": "4gZwEeLvWH3Fkr9KGzPmX9boNx4VZVBYtvZAJcyztnxjmWLTK6AwEhQ5GTmeveVspH4YmuTQZGhZvH2eE6rftuPh",
  "key26": "4DgttqhH4NmhMrE7UvDiBYfgLyQeULv3iPQYiVAud8YV3dYYt7YQC8UaPdZLK4TYSAQg1Cw1PTXwyiZJvRDTEDTy",
  "key27": "3R9mXeCeP3GKPM1XwADBsu9CSPaqFw72bgC4jtjSi2v1hG1sNBYwyDKzjyEpj64aA1nPVZ53HY3rtxcZuHNvy7oi",
  "key28": "3ah1mHapCSWPHbkanXzCLtjjF9MkYpBKPyLfQh891MKX8qXBu9MUoCBSE72uH53BS28KULRiJnhH4JC8JKxbDGGK",
  "key29": "3EuT127Cr3fKLzhrhGaoEKxEYanpEdtaT43bwQdxgBZn7zhU4R8ttWA8nHcvvHfcxTh23344ZVCvGGrYYDZK2kNi",
  "key30": "XsVi5XGTnt8SMwBYikCypA6S8jBg4hEuGhhhVsSBQoHUmWW33nUpTxZjQ9R689di215ihJUvAgSFV2Ut8MnCjNa",
  "key31": "2i3Fanzb9uT972vcsjC2HfdFaLWWUMCk4TCEdQvbgyCbnSurJpXkPcWaH9nJGKUNAaDqgtBoEiqGAMn4BNJe7PYD",
  "key32": "4Hbiy4Rq5b62RKPPv7B7TnEa8BnNQpKHEQZBDxSM3ddhR9wzz6RpzxbSTw2k36siGpPiUynCnm9hSPquEu8LQAfy",
  "key33": "3hNTup6sqXJvjka9Za9CbTgE5xJc2NLn8eJ4PaUEJsaBUGnFpdNAeskeGUWxxtXiQ9Y4tsaZazNf9X6MPkrMYz4T",
  "key34": "4SniDk5VragqGZDpnJrcKnNABPLgcqZ7o6z4o5FC4dcW9bPAUZeZVpqbVAkNvhNtBeNkirrpLSUYfm1TU99sSVwv",
  "key35": "4UFDjiV6RxifXkVZ7CiMwoJ5Zrhvof7mxL8DMi3fTD5GgcR538w3YFmasfUL3yF9tKk4BcTc3DNyLzb97H4C4ms",
  "key36": "5G5sBioeVv24N1hKrNdnzRzCScQ1EAiGWgsxU7SsN4NFwoP5U99Hmz1UrVmbZaxd4q4HoMw9kwNUBL4aDrYeQ1yV",
  "key37": "4y8Qidv1kPjCSuzPJhbatGgt48MDqA2ktBGQ9nar6wNC2Ed4ntfpNM39qrPWPaWW2CEUFFydB3o38oHmVr4ZYZfB",
  "key38": "5EjWqsTnqg2zQn6VixW9fMbQwNxRNzTv4C7VNSd7bZ7QTnGitYsnKKmdaxhNJPPWv3UawX5rmKctRHGK4Lrweivt",
  "key39": "4PFWfusqH4VZ6e1erUGQJmxQuYXVwZ1Kd71SnnLAncCQmj4Udb2RMatRgARS7XDCGLqjDeMa6KUAW4SQ7UfddyTT",
  "key40": "348BXfBj7FBD3ytJuVap2oLqSRdyxURzB8bbaLTfwYwRduuM5uZ93sDZ3LBqhovBvzdB2FiNzusQvFLrSYNL47R",
  "key41": "4wJLqf4GYq71oneHuake2sRXxMuN8WiK4DFSayUYbZsHPazCRKepDH7fJJDFB2LNAXimypRtQSkRkPNPZxzjB7dD",
  "key42": "3N5iMjX6uv72cJsRSdSkvFVpnQoHs5MpVzWeYpYUXaUgaGJvpZNwsFRGuuPfrDbT3zefvnxKCoEWHVXPwh6raGwL"
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
