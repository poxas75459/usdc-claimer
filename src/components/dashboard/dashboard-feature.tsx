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
    "5wgx8ofC2prtUn3J1xUzuLG27BRzxZwvT86ipTE1Abm5hTRjuKUjGCUZsNuyG5VZgpW26tyxPNBmomiNT7dJt5Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6qWipLZaTu9JvSyghK4VQ6feU8Tqk4SgXsmCwLVVE44rAeGxssCG4guR5VKbwYHTkGBvE71Zf7GtXyVBNnkUgu",
  "key1": "RsRek67QpJ987daaLEWBjf5FSkvn9yK82cqXUb825LvStx2DmwNPE5nTMQZsQDSodznmhYJxvmVuVoFfkZ5nfY4",
  "key2": "3eQv689yydSFt7R9SyTyUph5RQtXisEMjohDbiEyrg3o9uRvYGP1EubhTqrPW1UgKAXLxn93jM9dkytcakwKTXPq",
  "key3": "2TcmDayB7fy17MM9QwxZ5h7iLRJkGE5W9y6mmhPAp4pabiYSiGvsfUhPQhbfjm9ugJcoa6nRPQgLs5dP73XVGiJ",
  "key4": "SCs9a3T7MKtKZe9CamZKtT5gq1Z2MJpUiLMTt6aqEu46gEURAWFZFqPJB8PKZwsbZGCNM4fDJKCBZ813cHmRFYL",
  "key5": "5SnQThkTHpV4K2VUqMLLe38SkjF1qJcSdpXznTfZEh37qQgenkYhXHwRw3pe4vBeqaanAWiZP2bEPGt2pawTZyra",
  "key6": "UWUpLPdgqgvy434bf3FjcP1X4he1tv3q9vFToomhb1sgw5LEjNTqDTHeGNVEVErnvWdhLM38C73ybjLkbzSbn99",
  "key7": "4XrvtDTJ3xsDbk2kcvowXb9UW9KuqnmcDDNH3xcS8Xk6SLrdvPu2e5Sk3SbMByziJLMv69dg6QMgdiR82rWQJS8M",
  "key8": "4Cq1bB3cwbSaMzUACVEJTciqQ5ZR4roXQevv4Aou8u3disqhjGLZAEmTy2Vyh4Ei2qoxjGTrR5cXHR9wQngRvgzx",
  "key9": "59hyK3DF8YeudJSpAqeEkrczdmtY7LGmCbYhRM48raY2HAnMwvQ8b42EFhwRioz72uY8kqaXrjncBrH6ucwsTYuk",
  "key10": "DJ5u9teFN7YZ6Lqq9KyPTkwYCLjbtnxTF39Qnm3jZHUTgzKptw6BStbzgUmYqXNBp5SwHCuVP7mBbVMXEJ6QEmK",
  "key11": "4UiGsic782gxEnuDLyMjovroALMqjzs7BSB59PGPH6zpxu7sahZeXyCd67SSF5D3yRBFHFv1QTrVCEezeDsaZLW1",
  "key12": "Y7Beciu6hTaAmoYWn4a2KUxerSmS5qxds4tQhgFWMK1r6KLHeeraRpDDqhU9LWM6yr89giz8WT7qXeDc6tcE2u5",
  "key13": "3wCcN1pL9P9WoVHVZavoAxWjczsiVxU6BWL21jVhDYCzeVJ3VtRiGmL2rpBC2zVqB6UFHNnbRiWKqurKD4qTS8WH",
  "key14": "4MTALaZ8NBAtXnPes2JMAijL5LVLUBguxU5jFqvqA1GM2N2AMGws6KVyDcNnDjfdnHZ2rWiz5hMAExoQsT3rtpc1",
  "key15": "4qyDfQdq3teNT1uixdjSSyR4ZZunAy9tXbYJ41N3fagkC5wikS3HXoSDXWpHmGTuBw8pJAsWomTJ3diwXRVYo9oD",
  "key16": "2vngwHxdMepNT4jfHYhfPExZrj4zbvjuxowWxy49t8NYHifahKnnoi17YffrtQCoJdMmH5aw47eqHD9j2Nc1P7jb",
  "key17": "5CBMvDXMpaas7LAkBe1TbFfLy65JaCnm63CLmiLYHUx46jKdUB18DcpoSvRyFatpvCKm4kwvLiABmf2ezcSUtDct",
  "key18": "SupRHmfwmc7Xcwkdrh7H7m9eiLkQ9jtnL5AGqWVgMC1xNPxQ7Ni5dPvkHq2hS9STiQwURaQHUZRshdHASJkS4rG",
  "key19": "2ZcdjdQSMMmuSDeUUbAiCahbqHbCDsBroBZmtSyVrznPNBXd6yGumLxppuNGvmmMa3AuzKgXEcSGoP2ErrTQrLHL",
  "key20": "2wPhkLT9JN2vWEH4FhTuUcmiMpaqTYmmT4Tvb8y4PsGqRT5Cu5tNh5jM4SdyfKtmt3bXbxqyn5q1yGs9ktfzZLSK",
  "key21": "3TUQ5ET3PfWQpkYSPGLBnwDyns37fWEUo5cQXV6h74BsR7LetnEvytGSJ5Fm3WWwsjf4dc8sk8i7p86WWAiV3LBu",
  "key22": "2X1qvFCVAfyERpyTixGf93fo6BrQNtCbL4Sft8K7hBrJnSKZLe5TEwnY5sxC7ZDTsqRuDq2dmKLZSQcfrL4rDYwR",
  "key23": "2hWHM4PgWjFDdu1daLoiKDZEHhdLbQAxcqoeKfaNZtRb3RCvns1coJjAKxUgFTok3Y3upnL8Z5qj1VVtVBELowoH",
  "key24": "4scTJqE1ZnJr77pDcZdTYnyfbYiF87xv6zzGgy2rBasDfU6CqwHgjC4U2TJ8WM1YueakpPpRCktMosvwdFNrLvoV",
  "key25": "3rmWVAz5x4McxzFspAstvRLb4deaDpwqnBAk3gNPgHa4bWufxvZpCvpqSXhmt7eKCDmT3bqhdE9FrzkWswwmX69G",
  "key26": "29w5CpsxG84y4vkiqyFrq5ZPD6uMMxc9JWJMWkYpRoeHWEnPL9CZK7UPdvSmSGEDKGanb63qXd3NXCZPyE72aFEw",
  "key27": "2ouLehUP379mZEA2EcqQYZxoqU5eV65nVwaYwCCxds9Xf8M67xgffGCzYHb4riY9FHdnLt1LS3PGWzp6ehjSzB2q",
  "key28": "28sRQHyEV5D2sREwDgpNVuRu1mFUrqvCVZJH9uuBXn4UBFTyxZi5m7rXKEjnqHfX995t4e6i3f8SqRqoPZtt8KCr",
  "key29": "65BZxsfomtsRUZAXbVJtHDQDBgD2GU9Ld7uiuL7zZL4ERnWoNUBT2DGBDc8JB4Vx6hsQvnMZAGCmAFPain7cwYmV",
  "key30": "5hXCf6cnyQq11LvZBLxfKLgqx76LLmSTN7kWWBUVfXTBo92dNY7Po53W3akavymjzkBMdX4BC9DJSXWt8o6cHEX4",
  "key31": "iqeb3fPPBqX1haXzMu9kwMVLVJV31F8R355eg8Z4zKP8n7txdnNCVkNcPeY4KNXShaoeMYnfwytT88HbnMZQyeK",
  "key32": "37gJWmxAnDhDW4An3wPY2WKZPztJqHFUB1LXScxqFZ2aqHfu38YoLvgBmQajHse5iNe6RQCDvTL73MUvLLLowUXx",
  "key33": "aBXkT79PvdnkyZ5DuvNviPCTyQu5mEUNp491QdgHgc8UrFru8oLn4fWgWHgox1BGSncSrDZySKbTy7H9td4Ci2R",
  "key34": "5HZFNJmEG8SVdHdfED6bWFFQkCQcpnp6nwmCqbwH9hREMa7JMUd35iV72DsXCqYcSbBYR8GrMqNqRNbVbAe51sS6",
  "key35": "5dFF7TX6bBtucPMzFC6BgqwJWmPZQ1KjUir64NoGwe9tFyTSwthAC8s166CsoXak343Yn3B4L8E71NS6sKAGYK3H",
  "key36": "42TGnDDyNxtquPFhCJ4EH7iGzosmUZDz3oafVVRJJ17hZ8XDRiRhYR5Mv6v6mwrA8CsDNzANnHbyufjqxuPKkMpU",
  "key37": "S3fLoh3MCsmijSKjJNzhSSX3mzfxjhjRHCBAPpupvr97SGjuZxty7vb98DWr8sEdFwmktAUGGEYpzoJTgPmAdJS"
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
