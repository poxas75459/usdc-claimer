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
    "93mt56ojgDcApQvWDBMHgyvv1LLPcPrbYAmxi8XFENNDJcfcMmxhKaFP1ywqvdTN4pUkCrRCSzhifYgCmYXy1vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fEC5U6HuWDea6sf3TzqSMkMHQmjrPUfgNNJZEnrTv3xuqd7rC6RY873dZKRvoTrFBvUmU7JMmn7A6zcN6GpBvy",
  "key1": "JoWMVAfuj8NJN5KDrkZADToTLLur7ZjgjsyTsrkeA7qWEnSrmWoyp2Q7tUMkGMh9j7ZiaL4U6E4ghNm27SBnCXA",
  "key2": "5LLa8thNu5NKftbq9xYPh7abjocYYGeog2Q2DxWcRh6YbkcqbEDiXyqD2YJmnqtA9RFKQfiYsuK78uvvJDCK7Mjt",
  "key3": "2YqA6DY1GJMKVYkTsmQVnh1kp9sXRm6ghc8pZeYwMM3gtKuY8rkDdePpU8b5sPof8XcL8N4dg2UnUMKLDQjZZzYm",
  "key4": "4MJMHtFGoziDrUv1ghv5NmdpxYrdP1aHA5HvaYfqWAWTHyBE1LjU8Dhr8uX1aAsTYSuhNzpjbZZUbGz38Y86FcjJ",
  "key5": "2KmBPC3ss7KkdEWUnxUDaG6rc7BrATGAMzoDL8mgPzKqFDJkhS8BhSDgiz2EUQTqUYY9xFqkJPJNUH8CrmnKZ43k",
  "key6": "2jTgk6ZJrkxeeqnUKXPEd41P31i23oWM6N5Z4kMm5o33XH27UcnBYDRMeFFAyGt2K4X7cWiEEjoxBu68YEyTG6nR",
  "key7": "2b1BAHdpR53XTdftcxBWf2oMYPEht5sSpUzNZ9Np8wZknmMsz9SHSyssFXRtN7W7fbzQ86TDYur47HHkb7DnvS74",
  "key8": "FE4ceh3WnFEUZtUU2MYw9wXGmmia2rbuTFG5ytMoi1zeABhYkfT3hu7Wa2KxU2N9zXKWDjoH4Tj2mMdySNcnnFj",
  "key9": "3cTj19FzQaLvMWektm7Fk1KxVDp1ts4PyFi49QcdZNB1tv1GYJ3jVDBz8Rvuft7H65hNJHYJKbu5L62my7UQCKEr",
  "key10": "5Af364Ld46zT4aNwPDVmhf7gPHZCBQQ2K6XMCCr1kPYjAMjGYfYsG2FuPobyydVrV7nQsi5mGrPxo12KAGmySqkV",
  "key11": "5sAdmovxXm2DcmBrzvPbXJ6Mwjg5Pzuqr4yXSD8NFmbBEkC2Ejk5uxxYmm3RASsYXkCeNZYPXe1GfpBVwyW5uMZ6",
  "key12": "4cLRWVDuHUMhpSUEZoHsmY8upTyzdC9B2upaFXXbBhtQ5QEvWZjY1BFmur3VTtUUdFoEbiUkXAHJGnf37bhPB5zr",
  "key13": "2DaD1HmuQqhYkobtrSTvL3yWz18CVZEsa9nuTg2HEd7N8k8MG1DQG7kxdKbcu6V46pUn2M4vs9cWG8qMmfXWtEGu",
  "key14": "4PG792WS3WSTaf6H9ybMQS71RpCETdopmCTKdihZWPWfCguPEPLeiv9FE8ewXXDDcFFhJRXMVEhjo9baN6kyXFMF",
  "key15": "3MvtPQNvPZ7wfasedZvNYRgALYY9CYaQrHDXUnV97HS3q9NpLKxiXVRbzAjzihhq2skuhVkRpxbsZ4n8TpZ5QJce",
  "key16": "3QTQsinQYTBkqpsk27fUMNSietxf7VCHs8jMM6fkLj2eNqrBfMZYjMoCC65mjK242oJrMjdJPRXST7sSHcQk6g2L",
  "key17": "4CsuSswWzFiA5S4mF65xnVMudcfcEDDuGSGLs1d2xFczmd8RHGbKUMkKSvEPYJNTpDzQCL4rZdgsuMyAf3ftaDMH",
  "key18": "4wdWYXDvvTCuFG9u48xEfzFzsk9SwZ4SLP4eWUQEXaEDpywBq5BMfa39difFWvAHFKmEGTkgYuZYsrhCgRKrD2Px",
  "key19": "2QxkRAFsTZ7DoNuiXFggHBhXUXNuWGM8kWuepnrjQXVLYhGnvTBpzZPAEv5QS8G6JC76rCdh222Ndvkr1JPJdmK4",
  "key20": "3MtGSU2Dsq2YsGaHuYciutZCVDo1SG56ZLRRre6rDjUNbH769XW95zYMdXZhnqzczdaNeerypYbGH3btyKnchRqi",
  "key21": "4QGg3pXEGXVJwLfTagmf4uYd4pHFLwQUVRkAfimAqN3bJbSpppGSQueG1qDnfh4SAfg8rDtnH7ai2AKmmCm2tUfU",
  "key22": "aEx1xSAEzCtPCbUgx6HEgpw42PxCEtfhjECPz9aFABGMNon4N5SE5gB54rRyDMwFyMkxu9gqqQSe2baFBc8jqZr",
  "key23": "3v5NMTg8XHssvXfpPSE5sHr65TyPX4vAWYpbs7Mg2ezZUosf2x1E13FFCWwDoQKuFEv5TfkrFm6iJp6eWRneyfHC",
  "key24": "FFmMg2XkoScPMbJZq5i6F92V6hiJ9Lw5SStywwKFrPRzAq7Ag73jPW4gNr5iaTaaAXEofQqQJzjgykuu5Uhe4rw",
  "key25": "2gEpx7SnYKrQc3BiFKNKNwaiBxKgSAkJERZZUbB7AisJAK3MUr2tvNF6t2doZQmGDZaVpnMhNUmXgS8EERp3YsbM",
  "key26": "4XuNNqPKZ1THEyp57hMfBtionF8wFcJRVQcTsNNBRWQDzGHEvHHXTzHzRqQkkPTDVW1bmJEqhz2Reqmx3mhWvfd4",
  "key27": "5WzLDzuT8F7P9jvkp69XUZUt5E4xuoFHZ8sa77Ns6ijjgHDxYkUnqJdxo8xUi5HrTzuoQnES2XmWu1774ig2Sxdu",
  "key28": "2Z3oVw1DMULQ2ZmT4ZUvtMHuXz8JtdeDkpUcGY9DieHSR8QZAMz5hcGmxiFXKH76Bta2YAAp9u7p6xDUFf9M5rjg",
  "key29": "EyuKE8MaPoWnRvSeM35zbWgKXTog8bxyAaHfjPyPPs4X55xayaxz8uhAC7eUPKVMzWQZssUNtmYBHrdKxrTRcPr"
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
