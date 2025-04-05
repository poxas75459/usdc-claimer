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
    "5WRyKxypC9ew1v3ubPCG2NZaQn3rWFXSFrVC5dvMVjKDka9fzYPx2TjbrP8SwH2D6DonfD19Zb8Badr4MG71dejK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAa5XUEXtnyhqRo85xTtUWENeQRAwXZvHqhtYaeKvCVpbwqNzzEExm4aMnGgYMBQ8paM3RexayREnvLLrBN6ijQ",
  "key1": "57DiYPmjtn2aAofYKxDZZRJ7euBffUqTVTyvrZFkZM9AdjGgf7LdaUnpP824bz4uiFucMaJg7EFvwhwDhQnVggLH",
  "key2": "2J3aYfKtppMZiQia8WP7wdhGAs79iWubNrjQWq7tdeK4QsNaNaZWvPEMmmtqoDEyN7wS4T5JK47eNUXqJfSS15Z9",
  "key3": "WYPPhivfnydGFzGaGsturrAkWocVHEML5fMG5mVPaJpV5cbsEdvA8qjitsroAT9Hq4kGMoHZvCmHDQnxwo4Vi7k",
  "key4": "2qrzFTShtYNAu3gbK9YotUnasfzMLRfV2LcWUsz2VMx2R83FBKYAKryyxN6UvqFL42SsrmAivSTJJmeNJmmLBjU2",
  "key5": "io6jEDsPtmANFJetsdkXmAU7JcK6cMixM3xLmvDRyEsD3C5Z91g3NKru7EAqtqRJGdJqacwmBpmmKMrqZ6RBL4U",
  "key6": "kSHoSK7PXKUPDdU7ucQ17TbgZWouCoNJ9Lee8HaPRfbGe8cLHv72y8Nu7cJS4GNHkNJtYADGgkXoZPsyUU6f9mL",
  "key7": "3R87vJSwWw2YaMWNd6s1fYtv4dPur5JtskVzBD2hFseZ5RKJk6Zp7afVJsWyfzycs6X1JrsCpjknYiDpZKa7Rikm",
  "key8": "2FMo542Wh6ixq3nwjJgqD3hboG5Tk3B6ZbS3w685W7LmG9FKwxc6j2Rs7NbPzbHZPNGwcWLXXRtL74YeRZkGDBWA",
  "key9": "3dFjtGsgE3FeyCckKq6HuKW6o9iwMaHS7kfpJJR5zNzAmhEJXCa8MEPJZUmc1bHAN6VidD5YSkXP72rnTXwyVsKf",
  "key10": "4zVXkTRb4x8yMaw8gShS3gCzBE5yVnjMdX7TphUZc8Azg4yqmv1K2gGPpMBKtzskAt4KSLbZe4QtkHTDrFdPbDER",
  "key11": "5dnoMLPASUf5Jy9N86TUwLPi259S28fcfUa4q47eP9oHryuN7hk1Da68FUpBvjxQYY1q5tbQ3MVi9DggvTuVkDJR",
  "key12": "28k72HbBaz8QcMy4wiXTRYrjb7ViNkRoQkkSWWzzzif7gFvhstBmA3wU9GrrBfyNBwU7NvZ4MZbqfCCp4wETixJU",
  "key13": "2KQFeaMcNFbhxy15QgfAWqPwP71Ab8QhzsVtJVTeocQK9cbzPEem3G9kz42rvy9T1gUhxvs9KAJVRNc5EDYu9PzE",
  "key14": "25JWxgknY7UMzRHSmSjoYjYxxjxKC4UvRgMD3czEHGpgVnBoe2Gn4ZKarKifx6mJH2hpLhJ1h5wr7cV6zYFw7Qc8",
  "key15": "4mjMTFf1WBiVqcqgv2wT5q5VRBEZS4uwe2VXetVkFJjrwmgnx26DU1ig6EWkXYUJdNEYkrgvKKgyLzRhUZjNjRpu",
  "key16": "5o7hXggf82xKgamgFKDp6BRPy9j2AFiHLT6PCB7N36FmnTz2jwzBHGSF7hP9SfGC4QpaKVaPxM3jMBVKjBKYbe9g",
  "key17": "3s55K8P9S8mc57TMLuRxb4WM98RGBg35SoZcsUBPb7oWSAQSj7UKPXiFV3de5f237urifXPQCZwgxbKZ7EBWL9KF",
  "key18": "ZHMXKdCD1kSC3RB2wFQZpcp5XzVBXXk4H8Mj35ipvviGviqipYXPXUQg6bP9KbwUzWUE93wpegUNMrDavKFsgUg",
  "key19": "4jaJ4tjnWHNkH29YCV9TfyMDPjRfi8u99wwUfKeBAuGHrTRyJ2ziL1E7SwVeZcnWa6vEKswcRjmLga2o47taAADB",
  "key20": "3hgjjj1rgSEhH1qXZzpbJih4jvToEVfkZjiKU6SyfzwnUzhbj6HwHBj6Fh1ahaNgohgBocG5PKBuEqFkQhdT8GKJ",
  "key21": "5CXpQftXL9DAnKY5wWawT69TQcJz6VSYt8vNbjwzCJ9bKiXUC6VgeNoiuaxtgT711yb8maMza1y9WBZkqGzmbsG3",
  "key22": "2Fc14kuDoBSKk6dbaXhykgkmBLLbm38wM2Na6xGjfhCpbh4VPFVF3vYjQ6RU1gWk5wxrzrek4Kw1kgYwmECkD38h",
  "key23": "5wjqRrBDwUindCT27ASC2ygZpsKB79b7rCP1k2LJ7RNwbbmZPD7dwdzF7FPeLCdhGkeFoJsr8Xj5LPZiz1X4Jkub",
  "key24": "bAaW2Rhbs16RHC2FqCDRNxQGHQC3YW2CuDDjUHbCGkHHykgXsq7Ldm5gGCderKPU5oDk16LtGwaT5qaqx8Uakan",
  "key25": "25k2ikRTHTfX1D7Tgog7Ly5Ao1w3mxNEpygUZ5YifJ8e5FejcsKiJxpMV8HGCJh7hvUWEw4k7377E2V1DvKrgSm9",
  "key26": "4ECniizZKWiVvaQFp6ZvAakt5G25Dtcik4i269xydHtZ3F37Tsx4h8WcP132j5PMedsoS5n3eCm94VbcXS7Spp4s",
  "key27": "2dvagMv4ymq4jUZrHHs3MHNEMsUqoGsuwMFYa3bjoByi5XHzVAjtYtreQDhg4Q8BfqFQLQajck6NhprTdBkbsQJt",
  "key28": "3SYK5ddY94Cj2NERkziyziikPcV9gkWdRuKDprGvDGysJ5vW96XYgsNdhjHAWTYFpEVNmxm24VHgfHFuRAis2aJV",
  "key29": "xSwBoCtXUqtLcqe6TqqxGvpuF6c8CEiEx4twQ5Y1xiuCeXWEES3HjK15Khzu6HcGWeneneKkfVoC1BariFT4nZy",
  "key30": "3YBDMiVFYgz7EWfeGi7XB3YWzTkoost1Wdk37a51mJW24TdiVpMNsZgPMUwQQGfecova3jp4FHfckUuP8WZP71Xj",
  "key31": "247yYHGxxBXKrNgNcwdcGDcu1CCiAvWNgNsn1QLfCg8NDJkrPP5YDMUsZKqpisd8cdMmoZLcadzDNSvgbPBJJqN9",
  "key32": "2TyufR2opV8hDDiWxmvRyEkcjoB1YTixJRmvBoo9zgqZbiLFKUJqZ11CNXgLtmvRdNybwPM1hhyzxEwbPWUoTLJg",
  "key33": "t2uHQtVxNBhjabcHNZxiJDtYvN6mQtU4sVrgzfkiYpk27JmriQPhgMt1STrKvMySj5BPwRVZSmLu1cXzbkYqUJE"
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
