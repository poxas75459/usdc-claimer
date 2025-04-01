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
    "4V1HoKCdaH3WH4SEpbRw8m1BMVoARChojKrhBcGDk15w2epan2hF4BaCCpP4zGGHT2WrF7Li9yHGGyTqfNLXf4ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ACANZu81rqQi412ZhsQ962veKq737Mza32FBriNkPSF3EkzPsyTjzfS5Y1TnkFkK5afEzhoYj5zwdxVryW3AsS",
  "key1": "51ioP26na1fQqpisuwGLwUckK3i9P9CVqvVSh5UWfxQEAzm7Qp78jHhR4fxnQwXBg2uazfYAytexpxTGGgsdLNHP",
  "key2": "5XvE5cPuWXehmzy5mvobUmNaGboSGpuBybT7EF7FtnhZidJd6wtwtZZ9L4NyczJgvUvuoGzKQfbLpJYTnssSG5pS",
  "key3": "5asUNQVgMJckMxuVCgwF1mN31SXsx5rDqYgFXRqUESrcZJJPCqPpTLQW2Nb6AzA52uvvziH43gedgvHs28VsiFCg",
  "key4": "2f5113Qymka2u1ZeQLaSai6Yz1bHwCUrY9cox4aRhtUugG3Q5Ev6k1uAiWzvcM9E9awDsY6ktfcpc73hED1uRWhj",
  "key5": "uEjNGgxWcHgXWbBaRh2A2LDVNX6QTwK8UXg4SC4oNtpvCZBd9eAABVdgpBpoiGwkSDrWnpDJsWmNUV8FFmCX1hG",
  "key6": "3N5UeRzC5G5vkDASeM1MFgKETfCk7YvTHzUVfAjd9oM3svobbejxHiJVmbCCswoT8H6sSdYScmRAPEEHXEJ5WbZZ",
  "key7": "3QNskJq5vLrnV6xD6tuKHQXb2tkYNfKXbNHtovCX3WWg7SdJgMmu5zVZ5hrc1ceqa5AeRMP4GcDnUgmDYSjAMnGm",
  "key8": "3KJcfx22JjHxuw618fgSCNA6vMrK92fhzhQn7CGKpHWK6tpxSkAZdN7mE31vkDp1S2DywNk6BEzNwhr7jZsjK7LX",
  "key9": "5cqeK95X7JGmu7EHtFo9fvMXJy2NrwSvdbsCedZ5pF5FrxBJJx8BTnxxQVj3ANViANxe7MXa6HH7zFFZJ2FGr3cc",
  "key10": "56JDC22LEXNC21Newv5PohUcuakjpGAWMy4hYHY7PGbAYcecFGZ86ZS1UC4fmyLQVwnPoQtfZgaf6pHNAZhuCVt",
  "key11": "3BtoANMTg4G2D9YAezHexQiF7HuFPetEZ8M71tY2q1WpRjkPBv31XFu2saDdRi59wAQtMjH76b6LaPjgXxxDRk8Z",
  "key12": "5LRhwmvhbSpE4gUsgpJP5djSsGUi7MFjQgDe6QeENYYdGgRQyXMP5fHk67tPad7YQyGVBvJb1znkKywFwBpBXvUr",
  "key13": "4iLorkDSdchWW34nJuEyT8rJjn78WeZXkcBR5r8ViLDxoVU5o3p1cDdmy5L9CXnRpZMTpiesUvx9KtvbVuJxuTNB",
  "key14": "45ViA8KNgdDwWMQMAd6i2Lw6tQ4rChempwJYWNoeWwCdaLedt4hDZQB2EiaLUWxQz6qL59xzVffjWKFR3PLmvrJp",
  "key15": "4cS8R9kac5KMYuhVadb1j19sWJgbCCARUSqZ89ri2PbAjwRrXVgErTx8je6NCb4WJg3MKUzM7181FR6ULGQyjfNG",
  "key16": "4vcGhXywk5ngaXV5sf6Ba7L177EefMBEZyQHDqW9RYRF3GRpURaG8pbGSkrYqvu3oCMhXh4G5U2SPHH2JCeoxPGz",
  "key17": "2b2Fjv4ATKMfa3GQUmomw9DxzE3Womu8YrdNBV3Uau9BVubCpfZxb3BYxBxrk1UszSFuSLyxpfpr7ou26TNA2DG1",
  "key18": "5FoMoCmJLXKL5TvThNmDA92aonZGgXHbncAPh3XAwAZpsR9D8gCbQ5awJMcJY9dL2B5wRA91yhkAv2U1KFzfWn7D",
  "key19": "5WhNZMVsGrkydMnSH4mJHpjQarnAdmABJNamnnF6ihqq9hp5x8dmMBvxVsy62AFmq1YFqWvzHLGzWPLVVX26u2oN",
  "key20": "3FestHuuAMymdNUS5sdFWpHi6MH9Liym1PcxfgmkXeAiZe9TKTJkaEy1xB5cZEcUJUEHmkkXfxAupRV4V1Ne2KvP",
  "key21": "28GoLE2nn1uwgEieXtVHwgfL3ZYJhppxDzxj1oGKir169wsJtALuti32KVUMpxXwZ9vhf36VS4r3Uzq3vxBKWPtr",
  "key22": "46CdzmWta13Dus2VVYMn2BNXMnBvFmfZHe33JMFdM9gkEiw2AtKiSiP5AF958GkRWbT88LM1CSQTLL3UYQANnC4d",
  "key23": "WHpnnXt5ASCjDmr3C65gREwCk4zaMmr37QR68jb8eHu2fYuHuJkMtSwZyuQieXbFDNLeggQQXW8DWjR8qRCyVDd",
  "key24": "57yjpZy4Bh44vWtPbWwx9KKGbe7i2wbAjJeY1rY78vymB2yGYCBvMiK8jWFMHqiib68JFZzJk1tqqNJ9m7TrJo5b",
  "key25": "i7N7F3YjVv5KFQiRxSgrF15Aak821hKcZg29fWs2wPShPMBD1RtQLWTavgiCKkV5tDTiuat94UA1MPjpjMBG36D",
  "key26": "4rMbfzERd7PdoN9THbmT4aFKg2voQMkcRuALAD3Rz5QQMDXVo5joqFYMEwfMyYDe6fjPDZeN8NyxqKUKU97WNwSf",
  "key27": "56JjuFh6Xy6M38g6He1ZAskkw3oZi7v7L5tBYNJwUNB69FqpYeURCeER3oX8CJc3SECk65FzNAcDHkTuqaDwaRtZ",
  "key28": "55vJBR7DEcVj35vQsFbmHHtWWi5fogwM1opBUVBVQovXDpZc31fZJ3L2jzB5kvMg6b7fBHkZG5PqwwmbhqRNnRP8",
  "key29": "5Gd5j36AJYX5rzJDqcokKd2RsjpM5QHpYA5b8QZh7ivopTz1tf3yyVk7DHQSd5SRXCpFySn2fAPFQDRseHEuCGNY",
  "key30": "4zvBfZjiNwZhxJ8poXM5k5gmGQ4wGzXbbmqdS9V9nxheAxyaGBdws8EtLALFNPd9EnASHut826CCpRqwiZqoMz3n",
  "key31": "2EwR82gZJp2oB6QHqJVQG62LLiDEBbjfM7JD93K3C5o1xDfwgxKe64fMf7vwoYnQbAUxiLAdKbFmCDorXQYng1mu",
  "key32": "3peoNLVbQtAZ9U1qZ7bD1G7Kjwa1RbvTXjuNWLiuoMmA93r3H3DaDquhQPpNzxTrLS32RzSRZqJAp63a48sXbLTN",
  "key33": "2o3Yvi13EjXLv6wrbnLhG77PZ1P8ryUzGrtUars3YgoRyMsU6ZPGgkGNg1BJQv1zfxefiKE4F5KUCCwu9jETE9bv",
  "key34": "2XeKjQKbozftVeVCKEp6UqNc3sHvkYMNohC4RM2Ej7XerE3pfkuDK6kkjUrFzuwh2QhM57KR3JWhnEi79vM43hwZ",
  "key35": "zcMmGJHmsU9WzVno3LsE4giVWZLYpgHLgeLhBbjqGnwxiNSLsYSKdZHZFPGTGSBxnixspERdsmbnJEkjZ8Pqq56",
  "key36": "4x385ChvcFDhhDCGM2mUJYh8BWEVePMmZCX34nQePG2xKryFkPyTf6SGyFSAUJ7Yb2t7CUvL6c7GpNuX9e9BBY9J"
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
