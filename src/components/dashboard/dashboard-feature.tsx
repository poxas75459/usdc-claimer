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
    "3qXi1D3zA7aTheDp4jXQhdZtmkmTKHWNWfUDVkPoRtR8aPu3VFH6xUu7s2kn1pNvRL7f2a6rr3FjUh5yi7MVscv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQRXZnnUZJZF6C821xZ5LgNG4AaW3QDRxCyH3hrvx3qyUtbh4QmtpyQYLtLw2qgX4PdUFo9SgcXH4RJeH1yT7dm",
  "key1": "4UCmtsbTuYh5RWRbRSTsWeAtsPqBbYYWrVBM1ppYWRUfUpDbJci9N1BWFiSkAJfhHRSENR8sbTmL1HNaPzmL62Yt",
  "key2": "39Z6tNGkGyJtreFtzMf2GYxbLLR2Yp8tzdhSxVcKDKT3SQhdEozM4hob6acjotcqzUWmnhX1bPY5XRdVdwc1BW9C",
  "key3": "4n1kK9wvwZvUdiT3Fmu75MZxwfpS15Ubbzt8VBM9QMPvdJX5qgkSe1KphW2Qv7WmxeJh9YQyy8Q8ALjU4ttMTWWT",
  "key4": "4kD8EAqaPuWWi3SZaLibf39zYkyM9fTDxg57ncbo46CojFqvjhESRE3bhVRtWVUNFLjqPuHMzeTTFELJwgvU1dk7",
  "key5": "4Vm9DKqqhYEdoWVh5devANGGrRGdLUxtVgDUKW7pLK1ic19JGRvS3YqYX1ThEomUx9jdcymARNfEfVSMGYDtbdHW",
  "key6": "zcy4NGZW5u1bwZUPFhBo3zCLZjKcFAktPCVnrPgnjvX9sLF4v5cKu4E65ZtTC93p6TJ1hsEzgjSvVRrqco8Yo9r",
  "key7": "54714XUCf1daNBx6PviDB487i9gbeDRbH7f2CXm2vofba5B9mGFYNi7Ayc3sLHg5JTpJvLbUDJjPxjCAUAEMjEvD",
  "key8": "3tNZciRuGpqJr7n3MhSxQ38ve4qL4Q5U4shkZrfBm3dxAN9LFEBBU8xQi1izzwZBZacg6EAapny1tprGDgnnprQP",
  "key9": "28qurNGFkY3tUiSmgZTmX6WcPbi78773ofvXaThxF3oJum3b72jyMcQeAw3nbDG5y8Y47mog31CGSJ6DdqQ2xuZi",
  "key10": "29JUt4E41oFEabnFjsPQ3ouxVbSYCzQnahQBnWkry8Lh8wYEjx6zqrLacLimBrzJdrpgKoBM1qXmxGyXknvB5Jt2",
  "key11": "5DceukyMjzYcHBJU5PX6iaYbBs7sEfQmp7eWYoroR2XwwrDT5GgRjhHqQj3WovPMtcJK46zFv3VRsN1hwajjMCSg",
  "key12": "51JqrfHKsX6HKNXLuQ36q5WzJfaAuxu94DzZnjMVwm8M1GGRe6AwzDHL3XVcAFKDt9UbhkRbFueMfCgtBAyZzwnZ",
  "key13": "9bb5pBPAQC5HQYGRo2FPxjQ8oKDKKvf7acXS85bQB4turj5ZAsszwPUbSZF3H5FYoWd3NUMQMe3khWU97HwMyfT",
  "key14": "2Ao7ArTgujoFQPViDSt1dTB29bwwpD1SGuViF5nA8C3Mif4No1i3wutYtnmZEi6wUW6aDdVReAwS1Trc7yq8r5ez",
  "key15": "2Vo32uSj1fwpj4xjPCwnhKkXRFeAn4cpHosgLWWoixYx2PDWHXijjhj9LvPFCqmKcZXHTusnsCVpPYb9b6V7rqCh",
  "key16": "5tGWhigfUDFrkg3RNgrTqYmrwurnqQtC1PrQq7cH1c98Hvi9pGZ26fEfmrjq8ypaztrpWZArs1N1d6cTTuknnUVL",
  "key17": "4SF1wMdYn6Wz95aytHYyUaDsvDWPtkpds5qtZS8F4fYR5WabKQivvMBihcAKgPYf57Ac2BEwnMnWYvDtC9xZMZj9",
  "key18": "2gMCz1oyEKTYWAa5vMA5dpfidgYebGbbE3zXmWe5JbRXBCFYe8tiCApeQyve198QD4NT77WQXQDsrVWjyhuSP7PB",
  "key19": "c1yCL9Sgqm5UBGkZR2TuMhQ8qL2hnb8VwShNYnNyPhkBbAZEudKhhxcZcbxzUEhb5ADKkH5bKbeL7qPAQkVG7MJ",
  "key20": "5RWGJpCwwWC5A2oTMG22r6ZTTs1WJfvxM8JL1JGmVegrkeKfc6339xhNgD7BaVMibJiP2oMWuUMAmBa4nACgkVtx",
  "key21": "2GkUcCyr72rPfKucMHUPM7JxUSfvrT3kMGYd82RdhCtkHxpvNi9yFKdahwSWCo6Siuq9xfZTtaSVSNKW6XGYmb2h",
  "key22": "5h9jkgWoun97AFs9Lv2j19E8cxzjnu5owcsaoP1jZmZMW3CU5s2p2r3LFzDH5iAftdsaHpfKKk9JbHz1UqJJ81Fd",
  "key23": "49KqmjxkgVNiCzLMrBRr2PkDfTdxwFMZ1QUXaLXd16QVMyT6aaY3eLUzXMqM7bkLdTrJcAsgnrFYehMut4vTfa9e",
  "key24": "ocMnkLgqjimbyRseaDJDokPyqV8LK5WTueKE82d4NGdRXSTs6VbgZQKYoeNSSKHL8eTRR4yJgTtFEEELme453AV",
  "key25": "6FEG3CZZHZm8wKChR7TuHkg7PorDAuE5NHKJRArVJthgsHAkP98tyMvg959KMg57mTLWwxy1vPHaDdFzHz6Ht22",
  "key26": "2Pg8N61JbJv26qvoAqJtQ1RQEzhBYhN3Q4WUBpBe8vVZqtT6n3UPYsHf7f1QsCdXmsxypBqUf9586ySMNS8bWnZX",
  "key27": "3RG7DyJQpLioyp4sS6DCqnDmpsPD3HD6JQL6AkxkUG83EZzF7AQnWQqtDpe4SSP97QnT8UoAsi1fgGquvUByjKwZ",
  "key28": "5UdLkrJA6UMEJUJmpLs4pikeXxDxLrpSt6v2VJ1AdwyeaeLsXVywEGqEYw9DkwcAVeJzbwFnf9FZeSpasv8s7Fag",
  "key29": "4R5cUmDer1HqZhpqTJ5uvEa8D8YQSrEAHoEkzcZQsNibi7SdVepN6XFzqHzLaQTveSfbXjLkKMrxTKjKE4DWN1LJ",
  "key30": "3tzkuFFUvomNWhiQk5YQS3zQ3748fxDcwrckAnguxN2HVwzp2hj3C84DFMjbqv2jJqgwdbSMXNuuCB62npWQG2Q3",
  "key31": "45kVYkmaLpwugwcwFvKDknz3j6hxhQe8UEbELpHKv8AC2khsqqdEzvemBXCH6h1G8GHGDrxNVALHvWzM9jUEj38w",
  "key32": "n69xDSdTbWxCvxcMLqDQyUkQExxr4mcT3jQNnzbftQC2M6DSyzqummHkg4ULE511KFHo4Ehn4hPYxD9pYbpkdog",
  "key33": "4GjbnQwGoUk2Kj39NJXKHbs64p7kWu28HLqXru4fhppCHeeY435LSC5giozgrWtfkGwh6mCApQrcXuN9zptP8Fhx",
  "key34": "3Nq5ey2UhnAzQZRPbE8SsFEc2MkvGuoqjXHDgWyRPhmuJcFVNgbwqxTcQ6P1Vqat31XbWU4CVerBMs8LQT8e2bC8",
  "key35": "4sqFcbTPPLghMMe39u9eQFsKhbnNjuphq36fWAoKYGiQagJx2ViLoevVFQyYercgkWqmWFWUoBiBc1BCL7sgTB32",
  "key36": "4UTMC3xfZTJUifnnpBmBGLxbU1VQZDpvR6BGnLzfo3wNEYShGk51SVR4dNzuTiWKAhxcXEnDrosm7TSEF68oZWN6",
  "key37": "5kczeJerRg9tYcDzAFrkqWmTizA7tLMPvePGvhAN5i9jjV91tF9ewiAYBszJVEn85DUr2t1uA5HXJ8d6Rq4yhk9Y",
  "key38": "2mp3ZiL8Rk3bNnE5BsKfsFy1iJMSaPWCfJJewqRRJjAUFtpzo8KoxSTw49oLkZcWqY1BTNMaJV4iANHsgKNb4Va",
  "key39": "2iJSkJEBb4ZFnDWFXguz4dDEeQ7Q33aSkbApY1DUDdrTraQuFD9sSy447AiKjHFsn4VodMwA5PAJ1Zwcqej73U76",
  "key40": "4QAwLA6giYt519s31j7y3v1cv8kcvG5qJokgjKzwuBFo7QLMe3bTDB6ghh9CjH1D7HdfT3wnBKiU6ydu6rcybLBT"
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
