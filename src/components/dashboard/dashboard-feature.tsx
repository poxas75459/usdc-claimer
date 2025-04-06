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
    "5XRusLB43LqEtjLoBkAXhuqfTvyUYSqUBZFFgToUtcZABzSbd8vnAHhC5ENVebWuMDHhypJCmaaggwbGnYwsp9RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWRswLhCnNCEoNC5mAnubkw8tkqU1Tzjp7gLCjjCbqpWcTe6pAY3DTpBWWXpGFBccfmbNeNarYdLwHpnES7jo93",
  "key1": "3vVieBF754kVgYArtNNSnY38oZrxfkHLUkTiJkhLUPQ1XNrjo8VwgSpYir4AWtzQEnRgFaU8dXNZfVvCJ72LU4GJ",
  "key2": "Rsg6DXHTGvZcvQtySV4PpxSgrxrHNuy3RnLiJJdRzGsPbtFiWWmLbLyGx3kFJdFbP9T5r2W4Yqu9naqbYwpXkYL",
  "key3": "5C8ZYa65shPu9Yum9mFq5VGRPd1PxXrGvvJb4RAhzkXcCxPKEH4Zn7ezNb2AZ6NXxB41xTUH7dpzbyWR1LEp2fDL",
  "key4": "2etg5MsXLPG1f6jJvbHwo4DUwjLynTy5CvFT8nnzhSQDB2G7tmtTQp9KtCSrEwCZAGVbT4HBYbtu5pE1N6u9zJCj",
  "key5": "vLzGd7NwaLfXkxPrg8ShWJYU6JAtvwVmVN1xQno9X7gthoVH9ggoCuAd1Svcy84AEFARjv6ta7YnmqBzYW61Eut",
  "key6": "2CfzEAga97A2LMae2N5KrxNoZ91Ah9J191Ad5EVSdSmButtHsTMsZAqzCnQxnb3KUnRKqUYEDJkeEX5K6sfWmXGd",
  "key7": "2KvDS6XC1u8jsQF4bCyFh44djsDe5Kk3ApWB3y47oizkr2Hg1fqJyLJjb1Y3Zkr7frwL75U38XrSSNeNwATpXfY1",
  "key8": "nvdjtnBpfBN2XJ59dTtwaeTGkwWHLxB4E47ZVXRsiPEMC3hDBN81kBHhhUb9xrMFv1wvETnGKThoxoqzipqhYSn",
  "key9": "HLCnXV9Y8LfmRgvkPnfHG3YvHGzA5oJys4qntY1q4MXA3RJUsXnCn8QQkCALCL1BEDNouijzZ3AwPAeukrQtFA1",
  "key10": "47DsXX9f5YEFfp9URAfQaCVLwDBtfoMgMmskbTE932aJnGRzozZPY9uBAktps3omd9bPs9tKf7apAS3BzbuxAvkb",
  "key11": "5y4sdQPtcLZo8xKjgKwPzNMZT47e8t4PeNG6wbLMpMdizmtuchpqLfoj1VYjfNWSFTA3SDJ743UCwbJGDj2gaiff",
  "key12": "98LLj7J8CuBfsPvnZRzFWz68t2WDQHLowFXHHRrJcgZZxjwS6sdxKowD4ABYYKkmzxAmz8VyocYJRViEcoqN9fd",
  "key13": "3S9htSccj9ByRrv2ViLBSkjGz7grauTSjutaN2BEwJYhXdqo9HYcDPNNsrc9dyuouv9GRLx1qnYr2NwgEc37SxRQ",
  "key14": "2UXwn6P6R4K6PApvBtvUyvXxrMmCyAGAFBPJT7Emc1x17yX6rSBG2BZSCm1J3oHnSLrFLaaZJNNdYJp6DMEsfAVp",
  "key15": "62tszGvquB9sHPN6DUkEWeJLMNc1F6nXf1QbPgDHmeE1DqBxoaVcVj4pW4CxHnBujHyhtUh26mDkpMQhUV8PYhmB",
  "key16": "2hedHjDrcZLop9fYEDr1cvHZ7wWoiNQCmxhajPwJ1MnBjDNmXhvhBbm1mfzJydRgEdhNdnDWZEyTygCwFqFd8iHK",
  "key17": "4wsKTWGBUnUx1arMaXGWajrvJ1fRpWHYpX5nThaXnxD6u9sS1cwgErtggTK1EGvJyyGNqnhrTZzCkrdtTrPKGynA",
  "key18": "4qNesP5wjq29P8PqPUFVrvFuhTHf6pWYrtVRVvhbbAoLZhvZ93sTQVZPbPf5otkSpU3juvzRnPdwjhBguNTzE1kG",
  "key19": "58dkMSTc4TZexWeh9XYAmTkFmwfsmD5QSZCiC8RtpnYrSakmRRsFqXsC4w5hv5U3QtkPqFD4FVek1S9srB8UtVGq",
  "key20": "4r7P6ioMoTWe5MewC6CBaW5KRxGWJjQDU3PyJ4TufXEfHv3zdLsjepdxd4vQc5r2dNakYkk4Ly2dTDWST2tA3WHs",
  "key21": "wAkG1QvwueNR9dX8xPfLT419sPP3jp28ZDgYLc2syiSzihfmtTMuNhEti25LX2t7VbxDMYqrgeudbr5kT48gkpj",
  "key22": "4PTbcGR1YZVHB4ZPnEa4fYGjdFfeZ8ohc7T53ar8dRoBwSu2TqovkUA8vgCZXuNaPb5MBYdpbNdXKEcjk83jNy3i",
  "key23": "3BCDLAYKrkncL3Y1shMuPWxUJfNijPxsTPCs3eMt8be8vxLr9EnZn99EfkmZEZdgHXycPUhzg7jDWeCqWmXoG7HT",
  "key24": "Cf5kscnhUfjrCyxXFUHMdVVzNa4CeZGu2wNvmgS7uJ3QLpN94cdZ4eKQpn1TkLP7V7vDUSM8z5eUXdQzHFzqn1o",
  "key25": "5h1xF9yevVFTeErv4q3SrMQvsjKKcCsoa6cEDYVFDLrKktfjkvX3jY6sdsFDbyArX6zfW768oypDMFMbM3EDoRkL",
  "key26": "2SqjqFtWQY37Ba32Q8Cw63i23qxi5nhiE6szLY5oSuuq8zHhgN1TpDFLSRkscZZPYrUSExB9nMsox48gqx1k9fb8",
  "key27": "SxHcz84viJDcfY49G5vvtoKEQieknqnPpBDiYXwsPJmZhGmnhetv8kyQKPfkHnEmdceQ5q9h5cFYmxD7ziAY2bS",
  "key28": "3L8eDonxcN4WBxK2R4dVEipSWE1qvLJ1Rh55VLaTdPofvqaVqseHmVRABkCdDRnh33wZV6nQVAFHArPfosTYNoM9",
  "key29": "4hjSS5cLCkMmpySY2WLXz1kgBsaRCLnnsQSL1pj4jJaEbwjAyT7s6xBqWqmtbiao1JB9JK3qb6F74vXWHB1G5BQz",
  "key30": "5U94m96T7rsbEoLNwrZ4mcb11j1hKxUTABNVgVVbjX1UmMXWE8981CKxfS7RvsGnURuCameRTdy52uJ5ZqNDFbaR",
  "key31": "3wY1xQxQttALG36jMUNXUB9WFhuvEQdyS4fhuAnNX7RWZjM2eFc8V75XKqbAp6QfTGSvrLUZa8zGPwFhsNFVzizm",
  "key32": "5HTMwXaEXp8eaWfHt8nS9DUmv5DpJFhY6RbSDdhEADjWKapyFQ31A7dZ2qbPf45NLSPCvDoWnwDPp2XnLRiyUFdT",
  "key33": "5mgg6hGCDnW7pbk451eDZ46Wf8d5N4o4uVGqH91zfbwdqrYBgUrxDSKzwemqx1f7r4MkchgcAQw9coV4ihncFzgh",
  "key34": "5De2mpmGpwLWSkLqiTr1iLK4rR3Bdua5xTvkJNio7xVJ9f1f37P9VrJ1N8vRcDPg6KiBVwLuBS6rm1jfUnyTpuVq",
  "key35": "3cJpFW8ddZN23gfhduJPtdpgx7jhwGGyH2v5QRNdnHmuFtGb5ZbpJo8Y2hz4jSxueGgbWFG2S52u4BZ4HGn5Kg8s",
  "key36": "2bqoRFTWNPU6YUVBcEfeswhbakk95qh3udsqA4155G8JhbpnCKzBsoo6jxRkUXieoGWhhMVTvJ8nuXVCr2h5hJRp",
  "key37": "4EDhhg5s7iZ9YsF3hS4LpTaYfKeEinFnn687LS5xS58RoT1VJqXCr7knxzX44UdgSfccXkJ8D9BvDWrA3BjcD3LW",
  "key38": "2x9Tw2fjdJyTtFZJfK9k3731SiX51bWCiJrrVqMS5VL7odqZPPDwrgx5W7uykWeagBTTjCZbVLjmAWZKvDNm6hZy"
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
