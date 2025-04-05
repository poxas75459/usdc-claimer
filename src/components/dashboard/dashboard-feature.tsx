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
    "3fiPZv8jg2P2bVWovnVzrzFZG8SJNL1zAARRVdE522doBjzzLD3naW92yXfnE9iEUxXTZz3hB1Y26SAxmUyNXk1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zz2kivPcaKXeA8GU2jMbXbVAcrxwaT7Dk1GJY6kkyF9PMpfjr6PAKqvgYZRVZs1mABJFWKwMyEaUhRMcamZTqcu",
  "key1": "5YvKUvErh3rh6ZfnXnNtVfZcGPXMbCmfXCEknT9ac3SRaxf4FwA52BJ7jCqpSkYNo8stGcusTUmS3nH798KUuzFn",
  "key2": "2igeev6Fk3ceC5rYVCbzUWmc5VH1jy1GUtizts9V73d1D6w432mZc3mMsCc9fcfcr8QLLqWwAYcQzES6MvMFDziC",
  "key3": "MTm6U6pTPk5XXke4PQYMQp8rwumHmjhCpH26uDMV8zpco1MUxNPapdy76CHd49D9HeAp7s7wus96BvTvMQtFgFi",
  "key4": "GJPeQS3ZwpgeqBZREu7ZEPwwjNZHj27ecjLdzpkVnKyXqrgdcokc7y4Jdu5R39iEDY63mrmG3K4EXf2VxZCM1mF",
  "key5": "xMDLyX1BfP1wCBrRjDvWgon2UFGQ6HpRy7rDjGGWpbJLJPW7idowfoGYpp53iS6MFq5oftpDPf6jWfaMtqYnioK",
  "key6": "KgHGRjgRSddhPASK24Xi9ECueZNTDc5Rhnhq8AiKQ8NQMjFo6gJ1WtpxTWmeVf2iqZmD2sDLJwYBsP18K878tHD",
  "key7": "2XsYn8zW9JCSzFJpCx3cHaMHceShpWbvmxdXECtdQwS5RaudTfH4S2XHt6vwaSFhJu3cAd4FHomEtkEzmrDrFgsg",
  "key8": "5dvopSgADTSi5wvv1pDMsJ7E63Nw2nZ5t1remYtoJ2pSDVitXrotjcvLf3DjqYoVYSxVY55ziU4gnu9zmVaMg7Ps",
  "key9": "3NEF52Wf4cHZBXcY7ajpY3sEpcwewWkvfsb6DnpdRSkhtRJ2uDsf1TeD2Cvgyif8Rau9HLbjRjTdXXhih5TEh6eE",
  "key10": "vygkKxwZRNVNEENbdnwMD8EHJZ4PLM4ib17zZWTXdC1f59A3ZdnZ6r2FXhTbkpb1mpZahmhd3eZHFEH1ZUH9fMC",
  "key11": "KnTjrS6G7VtLB218um7yjBh65ZvVd86wofBTC19paAvY9fJ3t87FbH3CLHc2vRW91cr7GivYZkVkg5x7yUXEwC7",
  "key12": "vGGvrcUPyf1fPPgfjWTnZHcL7yPEQxSwL4tfiemE4VSBxXU7LoxzcNFRRondbFDcFe4YC5yV8k3hrmDqu5uRgGb",
  "key13": "d4pvgK6WnGhF5oTSpZQh8yGSpEaVdVLPt5eiyZnoNJyKRM9o2T5NvQeByY1XvYxkhndfPUhh5Wx3EohAf4F4Kwh",
  "key14": "5eKvfiPj2dy1KJ2cf6eAZq598KrCihLVnyt6HvgaZM4oVWqYcpJPvDWdneY7WNkYYCBwuu7G7ZEULedxAgVYqp5b",
  "key15": "5MUgnimcBeZx2c7pH4erfNajJN6cquPBqUk7eNrmv5UPbaMhvE5p1HQpBVpSnug2FVgViSZ2iNFTFLawN8zFXqfK",
  "key16": "5vpPgLWfudkVtiq1Djs2h4iaWrn7EepsuVwC33LdNAk3HWqSR1JERrip2QWrSpZMLDMoEyAGiiKQdfAWiVUpbrDc",
  "key17": "2BJqqznE8qjUQDpNWjecJfm5ycqa1u3ogUJnzqU1TdZBSpUNozjuvNtPmmCswKuEDzVmiLCvYfEp1pqFg2UbQEgS",
  "key18": "vy6niEWLRgpTq2aYJ8sFpfxvKjRtXkWCVRSnr3DJW4vWQSDX94uBmmu8WauamJ4YdNi4JTUNUc75AbgMkNcRqJw",
  "key19": "2fDcXesBxDt8SBBVjiVbogeQ6Jsnnh6gJJmDD7zD7PujxnY6yaZ3QNPKEgahrPDt3DJuRmkk1KC92DbK2FLva6Gw",
  "key20": "65TrqbohSkkZqHhfoFtc68oQwPVFQdrTsq8WRPSDWc5UYGRSAHeSpDmSkp4SmoUdxBp8m8KTx6qxnG1JrBM1M3Tk",
  "key21": "P7LcHZGhCVbPPEo8YNM1nRZ7oMYGDY49sr7H26hSPbZTe773cpdEH11hYb6k6jwEdFFuEehKuoKcFButMdDwuHf",
  "key22": "4wLrPbiyRNk5kQQ52nQCb17F85YsAKGq5qrEbEkq45La8dmJRApajNMSMGFp1bzVKSw75PjymrnqwtxE2tnGjqjp",
  "key23": "5qSzKKqFhgnzsA7wxmbdhk8dNCZ9JbsVhtRWNUMNwAZNfkR4jE4eRXxPMAhFibBeUBCmbdtxGEGoixcBQf8T87B7",
  "key24": "kDr8w5fLsU88vbpEecBdBiNjpT93PGRa6g24yGHTKR4G5MHb3MTtXswqAhGsfdMiMRN4NzErZeBQcnzvCANCiW3",
  "key25": "6SgXjiZV9tLzoYPXReLHuLgBCyASPC98c4wK847XfZhbWzzchmi5oHnVgFLfTpQifpr5Hqcja11U84GYeDgAohB",
  "key26": "2KqJ2x29oWXdXvw7M3xUNhTDCFzm6rBFPkkcGeBNW4xADeCW7z4PiipuYYrdgETrVpRperWAYrKtwcRNJ9Ddecsa",
  "key27": "Zz7riesRo5VyRtfEnEdKX9Sx6zpWH6haAX61t7x9eKguwmf7LVtszQVmf29rWhcwC8TqCoNa7HVL8Y9a2Fp3qgr",
  "key28": "3Jnb7Qoyqi5Q5YXwjAa96vgAnrZf9R5ijmEscsarMTCufbRQjjSDEHmLUet49dD4GJ2iugKHsjkVSipP97DJF1Su",
  "key29": "2X6vMEaC9KTydmFeik8Va8rJ5MbpPqW9SyswHDq1Ro1FkfggDPGwGBg5vfU7gmaUwBCPXUSs1UvpoebW57AZc5FH",
  "key30": "4KWbwhj2R7pqSYAW5Ar99ewxD3eecPEnqQfFUQek96irJAVRRWadg6doFsSSdi5sEijbhHFmkVLs6Lgg5fGjJ8sg",
  "key31": "4tviGkXP8qrVjaYFCHu2V1Vqr3VmaiwSAEoYe13vHh8WyjkDo33gG24qudK16wQwtNojbFuvF4rmXhrMxrrhtHLR",
  "key32": "rENzDbx55pq6zkaiy3wDdW95yeZp1GeQ6UDshRBWwnvwCWj2BsDEyxg9thg5cWuWRWGH64SNrLyMdjBP6VaKCnN",
  "key33": "37Keqr8df2javjrCNhuy5fVPkkPasjUHsFFVfjqMtXL6SYWC6dxJfkZq34uxaBq3j3hDoBsy3wgZ4QtG5k6XX7FG",
  "key34": "5krJbRpBwEb9RxACZbN6kqpyucG78yBtfYpLx1A8qmYnwt5Xmjy6NS2tawTmqQsvJouuAHmSQ85DNZKpiHDUSwkT",
  "key35": "3gYPtwvbdB6tPUuJYNHAfXULMEwcFQCfyupfBAo1byz3KN5d1mKuNpQbJM3L5ZedDjQM6xjo9y6QbrHYWyTprBh5",
  "key36": "nZ73JembKuzAcxZNztpTCMANutDcGwrLHwM5YrXzGLbm2hmQuFCuDRiGXE36gHNWhZjHxPv5yGBwqcmc4pHdEEY",
  "key37": "BZ7Y7peEgZiJJTzX98GF1vKJfmiXEGTBQSrE6jkN5yvJhmij4vx2vMsf4EXBnDrUDcMegt5LChJUEqF77opN3vi",
  "key38": "4rrsiTFGtmrujBsZdivtejThFsMwFKj3iPoCdeQuEx8WxycwygJyKgEx9LmTxeQgnkrVN6Y5h6eMUhDWvDxVtGE8",
  "key39": "QPjKZfiZP9Q9L6R97wNw1Jn4yxj6WixD3hTv5jpgwwReZUdVAXvJ8wibUgdG9P4R8N1SHmqFa4NSjGzGL3kh5Ht",
  "key40": "63VZdUDKNvsJccqqBPFFghzfeS46NtRqiRoVe8J5C6B4kFE8NCRibxtEpS6NBQFWaP9fdj8t21h8dXrS4J68wLR",
  "key41": "58zJKy3MTHqwxPwk9TbSVmN35cn9FjWhfKkjc8DHHShidNrEnbCEkbi41DUA5NkFQGPFuTiiSGp4ZkR1e4DkWwD3",
  "key42": "b5RjHFPGZUEo1drwe1AWQQM7jjdq7u2qcUZZMgrytt8YDV5o1Q86oHQvK5uCgdgTntwk6yXKUDWanYfLN56Uqed",
  "key43": "5tZeLWxMQNyAN3RpcC8JKs5Fc9z87ZhvSuZpJHbpdvMNk1UWxXXU27H31g5jc2hz7zsuhqjY8gkJhjDWkjhKTMt1",
  "key44": "5qrtoxhgscHNPm86wwk5nbazpdfmNUMLLQaEQ1eyGSKJzNiEJnVdot6ZLyWBL17zma125YE2RQqAGQ4P6m9yHqmr",
  "key45": "5AtEazpjrMT93pdoFp4jJz2cwMvfYEttcLB3i7NaXuEbuW96RdDA14TwbrzXWkWoog1D9z82VNkegt11xcn1KA9X"
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
