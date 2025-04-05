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
    "45aCVDDrMWQB9ciDxCL7VNDE8s6qiKj9VjpNygGGzaX2Tvg4bYN1hXzvXqsrLU8saimgJd8pDCKnLZ9ZjeUesyYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k9SV6xftb668gs5ToNHmSPmApaTww7kcFXUDpaF8QYXe1WD5gjPQMry88sRdUTyZ2cUAQqWLCbixLSAoaEDwB7K",
  "key1": "jSCsJz5NkW1SLNjwwp6eJwjXBVjiHRGE4smjiWMq8w3suNH2atqy99ZpWjoGUVV5c3Hdftef1ofAXNvU3BFtDP3",
  "key2": "4ki8ifgxyHfTvynz7zq84F5gZhvRvskBNcgQz1kvMaRW1Hvyg1wiieU14AhcspqfLJtbHnPsRtsoBpnBWUmSe985",
  "key3": "6k3C1NFVKuuSh92GM1FYURcSvb2E8SbW3f8AdhZmRhhgZfkzSaVbhhUkvQd3HeVFNGpBT8azhgMk3fzVgYtrSFu",
  "key4": "c8Zq81Jt9j2gnxbm1gPHmBEd1bt9KVz5GadMpLda9WmGMVrXRkEGy2XwnC5hUC6j1T7gRLVeUCwRpXxdtQ7ysL6",
  "key5": "63peoW69P9Rs77S3STE2nigU1HfYqh713sG6hCkrJWTquskogsga2Mpe1QLWFh48txh3paV7z9NJtdUeF1tN6sJU",
  "key6": "4pXJLwvK7t9GVcjPAcYycu5vCvQTAMafC2DimvkEP4ivxPpzFtzR8KGmHfCPDJa9GMYkdyoDFXYSEVijsinV9okz",
  "key7": "4v5zJWDATzFrZcoEYCe3bWAtUmAmDoN94UFpcMWAzr8N1toDbF66CWkFKBxh4jp9w8h1C9tiN8pNk9BAq8JG37fe",
  "key8": "GMeDX7rhXmVDibHJa3qa5R5yAvwLwc9zvCjx4wXtvhat4APcbe7ExnjK46KD3BghUWjbkoEkY72wWwbnMDCrU98",
  "key9": "5rBWc7NGu19qFq2dzSs36BPCTU4W4dTHR5arSYJEmeqFH2oxUD13K3q33GbHCfXU3iDKEeGx58mjrNasTmvQs8ud",
  "key10": "4jdFc1VEP7UnLmyG2Sm4SSQX2gcRWJ5di3PHjGpxBoYUPEteSvHSKyuuW5duX5Q9pLe2LZNETWjWecGAx5GsuvuD",
  "key11": "21yDAKVtKE163gzq25gFH3M6G9vcztwF1FmHJm1gDFdryDy2NcF7GPE3K1TgNKrHaTZSYm16SAgPj7TibCFSnYNy",
  "key12": "PGigSZpZwexNEXt6k5TutHqL4GibbBDjWUAmNnZgaCZZtCz7vMi5v4ki7kv54jN5PXDzYmwbEMZCiBeDA4m5qTb",
  "key13": "5TUzuN3qi8vVjupQBHPM37azgKtXRxTHwRjjwZt4Dj95RLP6cSqM97e2NNuJcxu9zMVoDgaeWPzCJtij29dC5PV6",
  "key14": "2rfuhrBeRTXQsxrD7YobHfD5fSaeXidqYXMu22AZVzPnJJeFWGLG1qhFccS4CfURP7YUGpPMzaKbWaZRUfZ4hKp9",
  "key15": "2kKJnKpXaTMC5bJDhUzgWcfRnPKTe373ozaHf7MSNgzAyjWAWygU4TBGory8TQCuWa4T3TzefpRhVe5ij3sxHSjq",
  "key16": "bTwsgpFTLVULBuyrq6dCKwFFpi6Wi8gzeHANtJ4hSQkQyEi7m7CB2aFudxdtgjFhUgb21V9u9ZeLUCf3gUw4Wbb",
  "key17": "53B2A4dznrt2GSSxtcU47q9KhRxH3rg7KpVMNLpTnffaqiNYizZiXMacWAdoq7gWo1gFLpuH99pKewEzD3BYW886",
  "key18": "3rMgKFy1hoLmFXfcoiDCh5KdncxCQ7MUPmEzFRLwL3dEpTAwucJo5chG2gorsFSfTaqSXYhzLGMWpgTTo71eXgC8",
  "key19": "3ka8QWmpis2X28u8ncdhLwdn1dPy79HbrJk8hx59xRxS1gkmU8xtxWNHg2Rg7VpzoWobM8HJEDM6z3WW1z1LRTZo",
  "key20": "2N6XwpsuuHjmRKPMDYjT7DmjHbJtVJ9LnyCZ9q5LLHMgHotPAo2pfNdiHUcXCceq1zHfisYfo5ydfekXpiuMrXRx",
  "key21": "3AzR84a5n8Me8aXFk5jbnNFmUSqwF5xgC2nsmA4SJPp97YCBkr3k1DXTMSgvMxPPLrXN4U7CqhXpqUkKZtRj8UkR",
  "key22": "3XK85VuG5VPnsGrr7tQ6VAVGKNDtECo58jnpBTYDYQcFKkUVcG5R1uW9DpWgfd37M1vfZ6XqoRqRQCr9etUjAyk4",
  "key23": "2svfPkEZbyGjDKerxvNtCnsqaWMz55MDo4xPXedj5LBKiHV75boiq8bX6mz6DCoAnwisYGMKNzzd3PDgwp6ATnxa",
  "key24": "38PLtfNHNVEu1Mdnu4az3nT615PDBJEzv6R9446XvdW5TEnNWVGFp4XpXTDZar9AdCyotwsh1mcyem3aAqTKBALR"
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
