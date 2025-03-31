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
    "5y6uuub7Fe3kdrAi6Bw8zS7BThLujMne1iCURa4eE3ESo1AXFYCsZZCbHSS9TXc8AVXPAEbF8qmRFTfed3DF7eKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLJD3arS2seHqWU2QuYoRxEkcgU6TGdy7Ap1hKScigCYW9NyqHzPi2LNJM9WMkJY5YhvXjC7uQjLtrZpXCRigdv",
  "key1": "3KC6ZMdJirSWHaYCQGHndRCFz8JW51VgabSpas4TymA8FBiPYRUHZyxTb3KPCY19MhedyVwKUyjV2TXYpLAgdXbq",
  "key2": "29aLzVQz35LL4BQu7EHtEg6mAAZ59UnmsEC4SoFRrzX8kjRQUgtqJtE9mP6q5MjbpEqjSQaYS8rgF2SerL5qDtUn",
  "key3": "mrL4ALjGNogMHXY57vMTohTz1tXGfYiWN7qy2aYnf6Ea5bgRkHjDerY4KDMeiQZzXyRQ13TpxagyyYRDakGyUxU",
  "key4": "4LQypXh2p6ht5qHeL1jhTncxo1VK69CJ333BFntZiE5xgE1tiHq9i45BryR3TDG46XWG1TpPt4mMSioDxjfE2Ug9",
  "key5": "2gpoBiQ1LrdzKCUyt6ccQyASHmt81FPUWdPJ8m6ghANYc73i2heQD9FeLCwBmFuk6569J9L72rgcwXN38TB3DkkL",
  "key6": "4yxh5qkrkSR4G7ccL96STttzVh6gArh5QhKzY1NjNWHgNpryukVGyX2m4FDQB6Yc4ygNM8MLkmL4Twdtx3n5yUPP",
  "key7": "48q243Bnh68uMo1GKNfey2yyhwSPmnWPKUDataxwP3pdCYJMSmpjPCZaXKktqyekuJujWjEtXk7jMbfVeaGNdhGy",
  "key8": "2hQKrSFvnTMpg5RPJPFf5GWER3z2GHLBmYei3p2KekB7tVypPkAay8w14bW8Z8hgw5Lvmm8oSbiZHkDLgVtUaS52",
  "key9": "4tSnFQhaJnFCVyxNvG6DGayGp9z91hCRBtxkA3XSoFymkwKAkXW4r3ejT4oDZ8jKGLCkZ8wav9EYEwdrHq3xSL52",
  "key10": "4mSSHszS9ibNCgxLwFwbHhRiqQCk8hR8efcwTSaee1a8G4HNv2Gpj1ru7WjoEM9DCQg8ACmGsmbPqKw3FsDEqb32",
  "key11": "X93hyU9vTj4rVFeASrv9qRaDdSvvr9r3zJTzpby5aW4F2Jeo3qVVbUuEFLMYSvxNkcucGCiHGSVmyTdZ7FUhevK",
  "key12": "5okiuSzbqc4n4AGYQJ8yx2ZHL475WCeEjfQ3PK44eUPrr8cUAuSU62yBoz7VSsVgKCVQr2cakRbJweUgriutnseF",
  "key13": "4bfE8cpGX1Esmz1T5SAWmA4gxNCB6a9p548kcEeGDFExmnYms39AdojYebz3TVA7x75ztJYGgZ4UeZiwPNsrLwAN",
  "key14": "5BoW24A5iMhzxG3uNzS8UdiDJF7jVCpnNAJMSAAksFDCNvVR7V2qG5MgitVhycvTdRFLu57MSivXTAs3LU62KkS3",
  "key15": "4carzmDMsoKx4upCqamXTN9fdVeb1aQs5cED5F7vW2NR2PnLCLZyakGfn7tMdEGGTbxRprM2aDeyjsAy9oFpDNMn",
  "key16": "VYHi51Cy3NBuiLFcJEWGrpzmsLjckeCzbwcDejqPqUxDfCyk7mDZZcgtkRRGf2iW9PWexkVFk6aUtRyfeq6ASZC",
  "key17": "xpxbZDe8CUoseDTfSRB49vFECYiNvsn6weYPrmytipSxh6VzkupyxSVM2RN7NAgaZeTjeCx7mHZtWhfiHu9315W",
  "key18": "5E8ZQPDJz7xtXSn1gU3c4gc1hBJduVgNN7rDFacb997WX2itHC37BxPCLYPAbN1pybMoyr4NRGoH2VwgPm3VroSV",
  "key19": "2QhNPHCwMZbbMsW4vDq9wp9nD3UCdqFFdvHs6igXKX3A2mUmPhx9RRzcxbV4TGahkU57dBGUQwdZQFRVQrDTNsX",
  "key20": "49qNoeniRe9rEGPmZXYtFQF9vSBcNC1Ku6qpQffxc78wcQX8ZmSrtZxL1iU3dtK53YaDvaxkaPYYPzB7Zb4RRvUF",
  "key21": "5AusfGWuRHyhm9Kn8bWhbfVk4EiP1i2pvqFcHzUwz7GqCx1fChgJyGe437cT7hnNDtRjxFE7ySAgtNVyzHY9vhjr",
  "key22": "5v2NkowtDXeoikm3ERXVstuPbfe3R82KXDdzSYQWWeD7sDAgypCHSd1vMqqg4SXKQpgVmmTrGYi54Ej9SzMq49v",
  "key23": "2aWDak9Cwbn674T6WD19KtuJGPZ34qCQb7mMhaceWJ51Pvzq8iVqXAxS1dxUYiAjVHze7NJTfjUhvLGuxPGZwxNQ",
  "key24": "5kSsTVxw7r6SeGUqWSN2Fj6Po6bsGSxrushg9ZKUxYVXSWwpH8DGc1E5vEhQHndJXeB833b2dshxR4M9mBW8ESah",
  "key25": "5LtH4gd8qqghfwwUKF7HV1vTJxJYHAFR4ZasgXcLx4Aas3uhFaRC14c4V6g2DgiNenqYTyMYj5d9B4gz48EBGk9p",
  "key26": "52xeFXyNRW4ZkhwQgbTnAGHX2nfs5sAQeKrGPWcXAW1samGFReDt4gDBbH2X4aBmRnJuYe1BNzdGrCiYerXzEXvF",
  "key27": "29MkUMzMX1Sptg9oqjvXxqoHztK8UEspBrDbhYJGgBteaBiYTvKiyZMbAiAGv4QC25AFDMUL6hdmoekJXptgfNXy",
  "key28": "3rUz8if5TM9GbW7N9bYw45y2373m2mtVteQzgUL6HLNAmLFLA7KWeoTTWYAP5Gzg3odKuoYM6LbJKGGjXMmJsRh",
  "key29": "2cJgrWrkdk9tekD4bhUmUzdhYP5vavSxr4HtTBpbLBdrhq6CVfUTZsgHjHqhMsZthYJjT8viLpSk6mwPcVipD1GW",
  "key30": "2Pqc8Asepg8bDkN5qDyEmp7qN1Bj52Ef99nRneEb8Wg2UmDwxq8rLzjsuScEdzavjNkm3cjepoareguod7vN4zCP",
  "key31": "4EQ9VzzLMz9QnsSAw1DmDM2Y8NcUEFb7nTj6o1YhnZEsT6YQ8pePeDTxwiaEhhK8Avb7HvtNUuj7XZGj8dhwGXVc",
  "key32": "5GK61z4Ec5fVaw2DA7NveCdiGnV9DMiMV1q6taN9hRHiMEBWWapvgZxgEqzQfEbhDEhFF2REVmAWMftKVQT9s8Cp",
  "key33": "3zSBUXnSRwMsqiCMqoRVYQGebMDbXmkV9UvCZnVAypEeooEptZnNFVJaFtF6CRJXQfDBLQKx2FQuCGwFUj8fjKJT",
  "key34": "2v1VXZBr7cfBVRtseoahmmTi7D7RRBVRc24pSyePdVi8JV6YYtFStHzhE6LXWDzyBm2QUrygAtspKNQGi3VeLD7j",
  "key35": "3u2GbhZoFJdPZXNFZrWmQxuNJ65QjNJnSha5YtXJQDpC7JgtFHWDqs8E7HtaLxXp7Fsk5mohh9crfm7dPdJJ2ZBG",
  "key36": "2G7zVJYUSpW2uzQg7EHravVaTW5ip88yKMvaKP2SCGiKaSdRL6WYM5qmJkCUxsebTcvk6JC9rScUokWbXhk14FqZ",
  "key37": "sFPQ8KwGkg7cb9gKjWRJ2PA2qE9Z6AQMsn1LCc71k8cLx9q4RTvTYHWiPzGQvwjEoPm2gsxD54GptKUcdmLJ9Rz",
  "key38": "5fjSXzch6ekBF8eyYizNqpAyg7MTVcjnTMBP3d9iibLeUot3Nr4Gs5DAqhhTvny1sVXdkTGxVE2DX7xdC5yXApXF",
  "key39": "QmkYyzSBYxq2fp7uEsbp9LDd4pnaxDrmyYbLEmgHfnCwMdpsLCk9MzRhxGjuB8j9kTwxhzFgq7pJneKCyV2Wti7",
  "key40": "5G4htfFEbhmfqohFd9zzAnPbDLsZcEVyhp18iPc9E72AQjYzAZNdgGEMLUeTsRyDZLxKKQrVadeGWub9XsFda7UQ",
  "key41": "2sAX3r6qZmWYw9xeWZRRhk6P8zDbhYaa42pT8So6GruPSp3J1XgMWKR8nCjHxQZnr9La2Sf7Wfab2m8qRKGKt9JV",
  "key42": "nTFLExqbha1av5DpQ3oyVJ5DGgW4EqvKstWXffiiZdrgeBJPuoqo2NEDSBcGraDxUguD8kaogZzhdaZ3Q4VzHsp",
  "key43": "5nbbhoqZQbBdLjEA1JUcMXEaK7MYdqoBQHSuttfkvFzoy4ZDHW8NNuo2QeKWAMFremotY6WmjjoweWmEE75M1wNv",
  "key44": "34cyWBwbozfkkhQvu5PXMUH3Q1QmdobZszXLHqEwCLpvnR5h4UsNMJEVZthn5cU8BaWmZaVF4A6ZQs64hATUtC5b",
  "key45": "gyWFcpxM5ggteCxnj1zzGakQV4BZx1ReibMg8YFk557iEiyLQVX3xRRhqJ3c7kKWRe7yPjYR89Dy5SV6fzfm8Uk",
  "key46": "3pkehrvojkwQsASrvA99WXUaaYFsXxLBxhqokG9BtZhUuAEe5kCYQucL5CeADrtoBoWkCsat66EDpJAP4hY3zLjz"
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
