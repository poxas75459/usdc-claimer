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
    "4N826E2LGQVUbYydQmpCfGmQtnjDJVMqkf72qbT1pruyGNhGie5Zvc438fY3B6S5TvBknwXxn3DvBu36ZxUS7Esy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWNo2VufR5AKgaARjeyfcax8NrJfojBuLqUapzrBPduRTbsBaqiUvJy6oujutoV5rvec1JuLVTTGec5ZzTSSkZ4",
  "key1": "2N1h1Ux3596wRtudQLB6M6r1MMNRB6XzdWMTK9AWgWodX3GPmdLnfEB1M7zjFyH22ZYUFwfECvzd77nYacTqRB4t",
  "key2": "3TQfAmgJoVsGKrGg8Lfmn3by7V3MkfjBMB4XUHApnXSzACZyfyRCCkR1hiSKC17yuUt7b85MdHyzucYaRDmodSBE",
  "key3": "2JFdq89cELihsFKz6Rpyane4ehpLKpZgax1tss7XKsBf6thYWkEDV2nhRyLP5RA4fqDRorsebbxXeUksNaQWTHje",
  "key4": "5TUUZba8iwpFzxxU6KufMVzQjSBcoS7C5SEFS5zCEUSfyfj3rTFhE2ebnPrz4vD5VLMM7B4QVwQ4zStdoD3QycrZ",
  "key5": "4jutA3mhde1XaZi6cvL93tftKxYerkWbeb1dA8XB6qvajKaEw5ydmCdrvedfAWBDtjuvfxXGTeDXrgHczsLzJr1E",
  "key6": "35p1L4sWy3RLMubtzCPaX2KfVUWFGaaboVnM4ZfjNFFFKVRqVcmnanCKypLDXmdgByzkNBmfYCHtT2tSTBGBih7v",
  "key7": "7kggWo4GG3p7Dr5Xykyx9qdGNUKL5ibFtG4xm27aS1BcA3QfVdvLQ5mLkvAsnvNMt3yPzXumZmtPviqF6B2xkmu",
  "key8": "3icJUT73TrKiFZ1GfVGdf6Vv23pysMjWxLdxP3WCoBBviRw8LrCozovgvU8VDYs9C3wdTAToLHPRN3DWbBtKxer",
  "key9": "5mm5RM62LUvy7kjXF6HMuqySbT1YzZeDn2eypZxW18FnWiPHdV3EPCvxnz7H9PQS7CbYrkyJDRm7nQV54PCcnnCy",
  "key10": "VQxvPTJn9uePtCA3Hw3yf6CdAeGkgjR2ZwjisyPFUcni7rwH3YY7UuuATfE4Rt5XKpXQdVrZ1mgyYA3ibvztrUf",
  "key11": "2hSo3HhDkadbHofxkDDU2cg7Rb7SLZ2KSgghAisgESQzsYvzuWLKMr2wfR5JF7eNgJeh8zGaW8y7jAYdWVagRrWt",
  "key12": "4dAScKEzwAHxwjftK8HbYXZxWivREJeuvcT6jLKpHJbMg7d74H6XWdr9rjKgAAsZZJchGQRvM6KSK2NkndwMxVAt",
  "key13": "3AiQA5Xvd8yiK38n2gDJYkULYkVyarKXBjuz1XvhEDwDmx4igPGdtgQ37Gne2tV8PPgesR7TVcN2NsvfyXGuCzu4",
  "key14": "5NuU6xNp7CrtU9W1YM2usYKYu1d6vviDBF23HM8Hyh8585M7piBQgssx6kfRpedFhj6VFBfQLo5SMT8RTAUM5RA3",
  "key15": "4U1QwCcdQmMmVTbPnvhBVwAtn2da2SB62Wmcj9daanmv8aJA7qjgQggEYUZye4KJdmyvJ4VTnuPBxaX1UumHMc4K",
  "key16": "thYbaH4bpivoqR4rdFKfmnas9yoqetD57UWpGqV6Tt22D6v6UBm5PXL3tJmsfP1DxKi5MLZYGEUJkfGKUsWyPtS",
  "key17": "4ZsjQdQn8eSngV2s6L5d9pGe3qjQzGB17uFPvkbrSJswq6C9vxTErQBmm2CRXvFsJCf6JBSiC7WQ7TPoceBZ78gh",
  "key18": "2hnSciyTjJ5V9vjhgoTbRKHcdDb9mjaQnfntqK8k931Qzi4p6EyRj5e1nDJMcycHXtsf8VdHECE4TiuuGmTBf1Zf",
  "key19": "3Fd7RUvdTRLpz8cutptd6o2fyNEpSwADd6K2bK1drWX9Spx4126kffPb5uBRounaTpaCmEGHAjD4XxzhuKZgFuwM",
  "key20": "59ixNKQuPeDTwW9N5baUGRSqRAnv1qrtqeddkK8pz8C1HQmfezsRfs8JG8iwuuwS8rT2DAD6UdVACx1SdRURXa81",
  "key21": "r4E8D4JbJEgpFwU2CLTF33ZPCscDkJorLCUUeQjF739VkGF39SCW54vPxy1kesSrYHLf3XWEBGwWoKpbeqfBmEb",
  "key22": "d47gdcqeCvd1gpJ2rwgR2mFrRJkt7eCmpUgYtbTqGjZch5tc6eNooVEfnG43dVomGwHeLPZchGeiq7movshbeaQ",
  "key23": "2Yn7wM21mXN7LTEq5Yg5fCNbPEZy6sKepKLVMiEpZ9YuRog1hcazyZCvVuqKkXQh9eWP8atTAPjExcXm7PadRdcZ",
  "key24": "59rLnaqKuG9tsmtDWkFbiqJt2vAYmG5eYgWw7t3Y6XAZsAWKkKoAUs4ZP1Rax2BSX6sGTnbJqtxKMhYFv2ds5FXs",
  "key25": "29t1yyKXLoyjWp3pq9iqQvEW6HswrDgT1mYWLkgYA15EGPPr2z8VGgEgUnHmc8GQKkr4mhU47sQkLJBCqMFoCise",
  "key26": "63za1ShBXWZCtF63J6DEprRbsgDJgNe1adHtCiCuETgZM1maP5d7gp4jRT1yvkkEHngboxV5YHKx2UNu2xHQmHy2",
  "key27": "LfHVdr8eUUaVG55hS37ajTN7UGfWGZAWKQBisgT4S54teA5u3McLEJyujYR3GtNzztPqTBPgv2bY8fgLbyp9WsP",
  "key28": "4fSFVmqwVavwMt8sTmp3tqaoESd1rCBviDkJUzpcLamFxSbFo6RZYDrbdEbFXTZdQCM4RKGJ36badzXvJMakjcJR"
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
