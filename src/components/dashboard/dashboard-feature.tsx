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
    "4HS7CWyH8RgC7XiwbLs4qsuviEMnPmMT7C4yQQAtJuP1HdHmve6b7x8vLgRDRdMaTNx6U1dw53chtELK6UFsrApK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VRXZ3knotLkDfyvSiLDy8htz82ye9Qcc9xGAJHM14WdCUDrAJ1om1BsptXiYtixNEcGEJuzzaLyWuna2WHBoHn",
  "key1": "4Egdkjy2numkAg4B4fTJxWwxQ9kn7XNEf1fzSWxer7wprYaagmwn5E4XyWeMavrdbYroiyy3zCx7bDAfjtFxDSoJ",
  "key2": "pHykPQeJ1yraBcuAPDjGU3P5epbYDXbfFxTyHPda3BnH1NY13uxGjq2yQjtotcJjAThJjG68uNNT4Aij3i6JC7P",
  "key3": "4hzdRKkBDucxQMKYyiYpZToAoCd5Xiv6GGV4d5HVZinM3J9i1igoa6aD1YKW8PXR76YQwkVStdL1mC4pSF7wgwhS",
  "key4": "51xyHzpTfvmPXxAi4ig1pjb8EtZGU2FXPniZX1HcMAinfMWFBbdQqL7tn236RuiUkY6YMTtrV6FdMokq1fYrkFQD",
  "key5": "oDScEFyHaoqvzLUFUhgXio9CsfmmMU9CnccyVMepmvsiw98yRZMgr4tYhQGSpHxvqJYHKM9enqSyFRiwJHRAzbc",
  "key6": "WN6tunNPnTbGrfqLTpaRqzLK2tENCkSWvM7RMUSG65SbYLckRMHMs9sg9C8n8bnaLKWZnATtuX9NN66ywJRMB5s",
  "key7": "uc1t8vkGvWBEchYmgk5QCEKfzcJkozP1B9qM9hzEbUbEMauvXCBGLnSgsf1Ewd4oWiEWcJsNTs6JzQRLeeJ13J1",
  "key8": "3axz1hMiLEuRejnZqLzvATWFGp5hfjVK1k5RGpJ8TxoogTEBme9e9fNh8aCwKeRtwR7jwGBRgy6N7ZKcuePQNYp3",
  "key9": "5G9atJ9C6NsGQKy9KAeycLqF4zQrC9YBzvCJ7MzFc6CccnZFwKYViX18WZ2xu4cwDVCmcgLRtbm65hcz2LxunH38",
  "key10": "4GR5NuRpYKPPRcgTMELcd8fG2xMgLnDF9CJcBgvDFA9oy5HhkuXspUKrF3Fa3wgamYTfwaSwDKgAd5bC9wbm1P6M",
  "key11": "4k4rXbNLVBb1p7Nam3ATjiacPKmYQfYRTUjHdoA4YhowbF5nMQKPCEC7eRgZoPKFUEKYRoxDKTGfXNBcJt9yhPvc",
  "key12": "3qapdNqgfFeSa2i4hKas7Td1YstZ2epFc1qTdxeneTECS2Y61sbM4LUAHgj8BsJATLG9kwdcYAgh6KwkVriomzXT",
  "key13": "5AsfLTNxhsZ6N1FnwXqtib5N6CXtzch4VgtDx7r6MPx9bBUtf2FUKSm9pzWWL8JWGb6ZeefzJCtH2GjLFqh1KSbD",
  "key14": "234wK3id9tQ8Tca89CQJJog8R14Phn2beD69b5YbYsdPAyC7ybMzuqDevFi9fi4W1YM7AjzEdCMdKsG5dsa9XzL4",
  "key15": "58VPWBpspfjLFVFotGvPQ3RMy53qnYphoZzhtRc4t64ET5c7V9hof8QDP2e3BDSKDEQ5reZtN3PC6HRPNCgpeKZr",
  "key16": "4Qmui3bpyG1cThgi3Rr3chZA4YauvN829VKbYRfmNUCHiYRpxYgarkfsygNfjY76fwq9R13UfhQ4vTSnQUzARnE6",
  "key17": "3nA6DVxXZgXKYerCpacwYGZgTv9cGJsdvPEjV3461A9fTm4ArqUvDGPj5ZPfvMTTkqz1CDRVqG6Q1TzH75KNPbNk",
  "key18": "2h5SHfcuzr293qusVF2dH1YLD7GvbS9qgXEBaHWGWFaCkwnuATDNZqMFytWErKqzZXGD14Qfinc6j6qncVXuLcBe",
  "key19": "3KahUUA3hBmtLsRMFtuvL4gVqPRVs88h4UNBzyqNU1C5DVNeW7JmSov5Ai5zCTj83ExzzaxYXdyEmh5L1eoRxxHq",
  "key20": "2St2z8GgbKFdJHn8JMy3rVDy6m9gWjPpw3QpY8wS8dBuER59sDhu8yRppoqDmHMWmNTtGzvm3ZPnfaM1n5HUxHfP",
  "key21": "5TcNtArNuJoQCoCpVLKyNWQn1GF85JqBxAngWdM9tcmAF29rKGs2XTUqjRexF8URu6kfLbi73iqxrPRTSDDcFuYJ",
  "key22": "4uM9eXgMP5uUmrKHLEyLk3VufKUthyLtkYuNmQ7R5uYPkacUSEDuZ1ExCtExxppVRQQq7MwASDdSJZvwi28LcJAo",
  "key23": "2PE7RsHgqjhvYhhEFiQFXjG7x6M7XWE5eNuhYwDrgGhXmh1hsWDTpskoD2gWPLpwDDdwbBjsXBjXKU6rAc6Pmf6y",
  "key24": "2QXEYrvhgCgHuDRYUSEQk81RUwzZa2K3RqvXQgaFhkjCZoXoTGjuCfUpLL64FhmZA6JbMR7ww7f52wGZmFBUFrYZ",
  "key25": "2vKaioHRFKGxRvteCLYonkmHvDCGaJ7sY1f7titpRrB6uoXM6Cbc2mDYDkaeb6ToaviC1DnPZk4jmv4QGZrGSytQ",
  "key26": "3Faghay1MqHptKmbpmBCinzaVADmbhoo4mhtDPnhDJqQxZBtBxRiC84oqnYRhnZsCZLSVkHh27xUubDBb7ZgA99P",
  "key27": "rPWgM2vYrAtfcnemjZ65BjJ27icS9GcGpPUrde8txuF3fdaFXKtm487YhC4kWAqKb3ScPKFsDWpPi8ftrfafC5Q",
  "key28": "4ut6fVYK6dyg6fW2PGkh1bZWtv6dP7im9CtTe4kRPMwYGRcoq5dMFwVETgv1saup9LpkmwCer7Ez3fwqksJYxpqg",
  "key29": "4WhVXmJkNfmwhL7gLvYjqd96QPUTyvR34p3Ldbtbcg6NP1DDnEyfqHgCm5TcMzTvf8yq7QPJeKH14aDxc1PG1WM6",
  "key30": "ZYwhrn19G9S3aPFsf3C1Tt5H53XDsZNS13MVrTZkSCXB3XN8ax13zUs2rq8sLQ3h9do76V3MsnGVEPFANudYjsM"
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
