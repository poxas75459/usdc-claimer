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
    "2sLJWFk6yVXd9wMYpHcAsULKhS4wDSdtZRALXurt1XZV6emQT4iVddNLcFUZpdcxXTdMrjGYo2Dj9Wvf5ZH8dpN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ym9gkEFnArxW468pF3ixBp5bL7WTHJpnJHAN6CMXAVbhsxsoPJDdMyLx3rGuPsacR7tffpcKgN4Qxo8tne8HsaQ",
  "key1": "5CCXUb8GtJDgaGHKwHsjD1shBrRydu64NRNKA2VJP2Z2VCLtvaaARd3XvPqu5VLLJkHTuGnRNhkhona1dfNkHyZb",
  "key2": "2YhgWbvLuCHpN59tcA1RznF6fpG4W2XCWYGRAtjNsFBZqX5uo98GjdosYMXbPfasUKvLNGoQM2cjM4Vkizy2KzJZ",
  "key3": "j5PuejFBRTdoCNL8bPxR3FoD1BgJFJ8i8bTmvS81LK9LnzQM41mSzi4oLXT3i4Rk9mefCMrpocYwUGTEgRPXwPR",
  "key4": "3U6cpGfxLbkFy5VqMZ14UgQ73oZLSjN7cseaRE6Z5awYPufZdtaGSzrh4v5o62ytwPo7tV9uAemiZnEWwdA1JMKe",
  "key5": "5LCHZnyLJ7jgXdxzaTTC3849PTEe14yj7iErs5HTgJ6Hhok82qqygkSRXpAx8Xh23GLhcBGvL3YLy4rrRvETi3VU",
  "key6": "2KiWykxrf5HrCcJD4s57Vnmgisd921QXyN2VwPefM8auptLu8r23xy6o9An51ahYpB8X7pFGkVqem4o89grkUjrC",
  "key7": "2a2UXC7h98VoeUnp1Kpd2wkTGnHPQEwLhsWLPqqYVpHq5JpcdnomtkSpVJ7Lan1nwsG9HMzZv2H3nVcufxTNtVMB",
  "key8": "2agHZZdLchXebKBujgVPzu5MPHP6qGaTGUEV99AXMEU4XSxsewHg7QKyVKLGQMRwhz3synpdQkPTFatxAbYQFV4R",
  "key9": "4BKQ6Y5KuxhFhJAuSVAKveVQcZo7sVyQ5v6of5rnu3uNikL1fAAq6nsPag488cZdvr2gTikW59h4BnoDP3hH3esD",
  "key10": "43MQSZK7ogNPdqua8WFdDDpc4YAkc617ws4BgUcS6PTbk9Fguo53gjNgsWSbeXPEYENDfNNkRYoTmVd7dMDmhKZb",
  "key11": "C4tt2DUmnqKt1tt46h52DLxvCaWTSLavYJ7b4dKCVDp6D54iXzMg1DP8RbojYVpbk3LHr5JfTWwZyQCTEvJiBFH",
  "key12": "3RCimtHw86BucD5G1ZTEVMWAmSEA4WnSvPNDznEmKoYuVbF76PSXUsQcsTqdwmtrzBGHvXVfDvjH1rDmvX11D9WH",
  "key13": "4JVkMLNi4NTmB2ucUmoeREFZUFkYWrEHciCCDsx2AG1scTHGduKteexon33bHQVFfcboSPP7fbCnsm7M9zLuq7d5",
  "key14": "2qGfPahUgDaTvjTTmxhbeiDu5pPJqgk3LQTq2xavHtaMsyAuntE9cdY1H8yfS5v44WiPkDCKvkKajDzThnq7V2Tu",
  "key15": "4CixWyUAZmACn3KP6e8mhB8LBUgp246zBXEUA7AshcfLgGbVKj5ub3uyHQym1FB6fygkNskH4wZCegWYZddzsxjV",
  "key16": "nHvaotNAPUEoHKfkEJL5MHYHkKJFeCSNYW3XX6MPUBoMr8AZE8B8EGacC5Z5S3QJdNARvhnjENCqfT23x8jJ8SK",
  "key17": "c5XagxsBCRHnSxtH63p2Kvv1Z6fzAgaAn9D4TeBqXctYWf3poT3GDxdPV945cZR57fvFE3KoFRP282Je5nj5zRA",
  "key18": "48yX2nB1H7AKisQLAEsdBRkzbnRkqnDmPyc48NeKrXMhdUwoJzyQDce2f1Fd4P4sctbyAuSr1fbx9p4hEw2eVF77",
  "key19": "3yJvZsjJ6aUyche5tZcqiDrXxvVvTqRb28QotLtncZcX6b7bksF8Bqe8GGcVNmQNpQ2ZNRu5NK57UyCDE1ezWyDq",
  "key20": "5HXKBERGwozyvq1CDP6VQh2n4WT4v4hrmByjwsomGYccNqqN4AemfCPCq6HNfBBAX5kvmsUNWcpMx7w3FaGj4sTo",
  "key21": "3fJ7J6nkzDBDrqTwKqBJoPBD67w2ixgv1vhVCCADbXJ3LpFhrU8vPg9biHiG8kAh91tQhrAjE8MxeN8uTmJzD887",
  "key22": "vxy62QBYzr7HVosWrdnM9JBYYp2eBKTRz4uD27QA8hFjw6nprZuHfgHp7Ag1hHFzM69DsWn9mK8bhKvWpkKXuqh",
  "key23": "5dVhhiHS5cBSGXVRGC3w974gzoN13VfaAEyKwHpKfbHeCe1eFQacARPLD129EABViChLVD3RDryJVHpoWXpcNFaW",
  "key24": "4kknBRR7tzoS5Luv3EY5rWqvVP4nJGMXgUbfKv4EAY2rmfACgVmLWfnU9Ueb9571nt7V1VMs5soHBQ6fz6WVHjHd",
  "key25": "EqMJ9P29HNtmSmd8RmsQNcYgeQTKVqfehBM1z2fWLFXdWxdiALaUczodPyAi5rdb9hHtfdJkAQueXrc7gqwUTEc",
  "key26": "rVBMPDXt4uDUQWq6VTbb9EBVEjABZzerbho9n6MWLeQdgR92urKhpJF4otWXh1w1ejeBh1sPeKCPKfy5ccmtQpY",
  "key27": "3WRdJCpKSUp9epteJSM8W5Kj8GmjaBcSjE2FrHGmf379Trp1RZQAkKsssFhksJrCiTnkug7tkMZruf4t4P3krY9y",
  "key28": "2y4hzbt5vD2Zxz1uWULkseJR9a9v2MLTqDFwmmLYgtWDp7wTb5x6J5AZ5Tx27CWeCgL3o52M6XTt73nu5AQS2TeE",
  "key29": "5VfAA1RDYmPYynAYsTqyFoKCbi6ZcucnYWj3mQfMcfgotmQb8DRgfu6pr1Ns58yPPsBGQLucuJBMCqLnLiCf82f2",
  "key30": "ZjQ32dz1Ux9ASjiNw9sn14aquRMK7bvCLMs6k2nyuxxcLC9MWxPDhnEH8JM8AUHJtG2z7Eg6dtbmQWW4hPs1YiC",
  "key31": "37zUa497SsaNidZJmqPgBZQkos2K9TE1NvMUm1CyY8ykGTBQbBEwiBjTj21pn4LrPYNnKxqMoSGJ8LyhVgPg8iYV",
  "key32": "5PuHPJfvoTMxrw688LUADZQm61QmXdaA3cgj3EzFjmPzTh6GDQUHQF3nVP5ExGJVksrYkVjvTUT3ECd5F1cNgCVv",
  "key33": "5qqMeJetYanZbgPSyNfVSfbbw4ijVHHKYMAcbS6qhKaSRxE2HrdSz4hwwbjEXtsgVE1WrcG3B4sf15a3qkh2wyw",
  "key34": "UzrN2f93c3Av6TmAWVQNLGJg5azAMTZsMWFCyRaqxzWjN3fvLQVBiWCEonx7pCFV9cCfB5vPcBSCMRLZu2CJtj1",
  "key35": "2i63MTVFV2CuBTnkGHZEfy1uT4eY1oSiLDGVszHkGAmzC2D6NH1tGaduADXJjfLBWN4dV2KsV4GP5UZaLD7y7Cvv",
  "key36": "4N6opZSPwTYFxEMJiGtcHhZh9ok7R3YU4ijPFNTF5ZWTQxABsyuFq9M7ZW8p3rmndCRTvA18pgy8bEoaNRUczZAc",
  "key37": "5FQpDSsNJ8kAR57bVe6v2D9LXLb5UYwMSgJusuopTFTK279qpDUTMjJVKFdEi3tKgU9Cd2TgyF4gcSg8dhpxDYW8",
  "key38": "2uV83SjUHnv1vqzwRZwcQRxA4YpZa9aH4paQF7cLYV5Gu3catgaY3fdc5TGtAsVe39aX4YoyrADbbyLhnCMSmKph"
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
