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
    "4R2AMU4WmwUB9LkbTEcpA324c7x72TdFeZ8mL9adxonfgtqCDZ4iTnNFWWFm3KC5TUCYv9jQLwSewzRJSrzhG8qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzWxEvHT6JvC6eCuv4VbLVsixkaDkHmX8tDzKZFuncf6Wk9yLbrMLWscMxbpZui6ddpdkLHJQvdtpxKxZ6XJesq",
  "key1": "2m6jyxnMeevmRbNkEpxXkxov1RUnGF3GGmierA2sCSSzhpEtwjUNNbtUFMntSvkgEfK8wYkFmwgSApn4jXhcQf9D",
  "key2": "4CVvUNpfwynmue1tkMJuzhudew8xRZtt1jAdEKZLRNrVw9mctbUC3WfznBLs185N2pqZrVZjbp2665FrNm1NL87W",
  "key3": "3hqwu7kLtkJhGe5hvTe5xHCQke7GfoyR15QAt2XAtFo9tTmy7LBtd6f2syQCHj6ByKEbtMoYZFc3Ak5kEFLsAuGy",
  "key4": "2mUYWVjDEV18m5mQQ3Dj4ty7crTMwZ5ry6GDkU5UdkrUu84raHg8nKVANoM6RQEZBP3XiW1SRazUSZvNVzqqVDd5",
  "key5": "4Dfn3xaRWqduhh9vavu7Sn1fUBmvAhnMLthaepQyFAz73wxhgdvqmKYnjWX6NSaZZg5iJoYyR8ZXeA5UAQUeDdPh",
  "key6": "3cuVjzWTi637DjTSvHyvhUMAqRzv6kZHSwuJMHN7oWdELCYkw4Ws9SYH2HB1CQshLL4QQhprCmEBddjJM7k8Cj7L",
  "key7": "5ULaQb2EkpNSApFXPMTpryLPBQEBpFoZd5gZHcPnYg5PF55BBivQrvBGWTjrhdDEHDhyHWJyCUU672DRkv9sQBKg",
  "key8": "29zTrku1vTZqH1pdjH8q5NvzUje8H4g6f7bHJCX9yZBER7YCySFgrmNqu6iutL6p1FFGJPM5EQW7G4DrZiN9Z6Yj",
  "key9": "5rJHYLnz3T8gAa2hFDxcY1hGVSF7mFRNNXBt3PZF1QGhf4m4zpPV6JsRqa52x1QF7UsW8j2tFWEMy4CPLaj7Dp2a",
  "key10": "2RpGKpbHvwJ85zBDeQBbiNSUPnAU3uPU2iBJFZytbLLPJY4s7Ttye1xCUaMRgmaudKYiJSptwWW3bTDrqNX1ZDXy",
  "key11": "3UbT9Xx36885gsV3Ws84CWhHdLkWDis6DtYS1X1UuuMr5CPB2xx1LeXFqSqUJkrgqQtxsLoUicC2fvedFbwNTMJf",
  "key12": "5YNrLNoCPkmCH2cD6htDmpqaFHgvBkyYTVyx2YoTJfYLZvMHucgzAHmDGFNTTQGvZcrWkpe2ws6XgLx6Y9gasLPL",
  "key13": "55ZQ8PqHsf8AKFFimXpAVdZPa99mXNzARTTaCGB9XKQgekrTKhV9PMheZMqzaL8NLHnQX1VWXqmDK2Phtv1WgW5c",
  "key14": "4N1LBmwwSjrg1swFPWrqSKwC4TphYJpkoPPLYY5bbg1mjeB43uxYxeTFu8UnGwo7h7L9oN9QzcHCQiAuyPovhzv",
  "key15": "4y9GvMPdfuS71beRcNDX2Qc4qUsCaUfF7fvogJ3E3KnW656GgSMb1GUWT3vaD7sG5tBDXpStPE1v9cjPDAn8yT5w",
  "key16": "63PgvctWpxmYpSqzc3Hsj6EM7xbfMU6TBB7HCzhd5M5XibK5c3eRhW3bhDLPvqLGVCsQ48HU72raKi4tHHQYbgAm",
  "key17": "5XqboVyUyeSZQpMNnb6svRd1cHWWyuJtmfyV13b22thPdWJC1u88RUshFgXhgJhBaFHURTvrFTgXgcRxf8gFEGBM",
  "key18": "2bwVDuE52NrBQSPzbrpqXq6aT4YwhGobgRgHp2Z2j76Nsanh6Uc4pc4gnFreoE8sZAoPPBEsHtzkeLNBSnaMTR8k",
  "key19": "2KV3TAbMTW8NaCxfGGt72ocsgPMnBbZJLq6GR7TDKwY9JjpmCWU58i913pFFBALyyhnrTsHVq5LyWXRgCfPTcVSC",
  "key20": "5YgHTR8LGyveueGBSRTJsuSiAg9tyZgMKM2RrYxmQVsGt94M2s976yhxkNL3SifV2hdhVjkYa2NhtvfaDiWCRVFp",
  "key21": "rmQDuASJqSc1mK5RfChtkFA7mRQ3gkqybYwB4DC6ykfDJPDMi5GWsPF6XUr7bmKkJkB5zmrtZNMKown33Tj3XVo",
  "key22": "5qnLGX1zKVvx4eWq37Uf4Hxe43oSPe6TNM2Joag5pyK28EKyT9RM2edwmZTG8vxNfT3pwQQHyMh6E1UY9arp1NJc",
  "key23": "zDRAW9UK4XSvUJfCtA5UkYo3aFSnR78biWU3oxZpCHiDJfxAbsUwPw6Vo1D1Hupdd8Uch3BYYxt5UhF3QYAxYns",
  "key24": "4WVuchkChMVSGWmraazRLaW7yn2uxBaCvHvuLALJdDRVoyGRD8DZoDL5ViD1NDDBZanwkKB59Fo8SZzJXjdgUgL1",
  "key25": "5SEeKgmtgyiW26nHTG9r4Lob3vKQ9HUjfzczQwLyzrZrwUmdVcCEnhQd7MwTTjdTNja7jnAgARBmFPaF3aktvMj1",
  "key26": "5rZmwyFg39ENMLsbPBvangQm6DZ83ksRdojPKcm2eoRrK4Z1HoyEYZD44sT6TzsT9X55qxP7XhkHVjr9VwY5vR1f",
  "key27": "4HLuLggC6dN4ScXtebmj8nqTQYmKoBSMUHLTqgwrFnVGryU1c3QrTGz2Cuq83Ey9xEmtKQcLX5bvW9CDkemGAKSY",
  "key28": "bLNPyrknot7SHS4L49oZDU6u3wJuYAKSZc6AA8qGzYvjeryz6PDBwL7eSySxXqPmFzagBtQrmCwBG3m4Sm2aLPZ",
  "key29": "4f6Wfwh9iCgg2M1t9VYgozKLVY81c5dvmtuWGySgfZ6ZZyBgFs8eY4RXkDTkbuFi1uwTg5Pftuaisg532nbiXZoE",
  "key30": "ZrcphPx9X51MXMFAtn8DUCjDke2vJE7g1TyJWSBq9kN3max5Vt36CAf7TSfmSHeUFWZ4Q9Xfk7z7bjwYLQBGLd8",
  "key31": "4GbBNAAzTVZKqMGDmoLnNjGKBshbyM2yFRHvRsogdsAjUrjJ4DYb8DbeXf5cLh9XazGiyT24i1fUUjPHU3dbZZmX",
  "key32": "5L5pYi8JuyowmM77BShCJ9tTnhP7uVgcryAiSEhEwcPHPwprDnmcUKuC5hS8FPkn9z4VqkYJFPW2U9GZf1CjGYmD",
  "key33": "5FEiFp227CGK9oFej7A3w3qXSL7cBr8LHXiGYEPgjBCZrqLZ7mxeFN76Dqf3ziyYG2WqZFJeVzFAnw7rtKuuPZYD",
  "key34": "JJe9ydBboPnHF8GzThmbJck3y9VDNMu9V2K5zUwFD783v48kQzaBMz4AiyZy6D5y8RiaWSPZYcEdoUkgLqUgSvv",
  "key35": "49nWbw1PsoPt44Q5v15Rz77zaRkZB5uEF8wBZ12y65Y2zNEtRnf8g87Lks2f8ZwBevSHLJbjwMuJfDuyk7ca7E2s",
  "key36": "2Xz5XuMSRUgyPsYns8dtNEGJWvp4GVF4mCVobQ76UcchPkCPms619ZRpgp5eoGFm9CYc5rwqx92P1FFz8GRBBPbD",
  "key37": "2KAiiWwFkxbjUk44G7g1kgtEREKzsyiWHTAajyz9GHwy9PQEb3WiHudZRZuRxpjxCn23MtmQjsX4Pi5GvZM6xoLC",
  "key38": "55urGEo2Xzrgks6vuMuVNvJF4ASw39JTmjVj4KyMyUi4MQfjUDLUPby77jAhyQRPw32dnJDMhKxCHybfdUyVdziH",
  "key39": "EAhFydQD3KfPvDguXSyPWdWT1F31CGXC1Mqn9nVcRn22Gba952uvDc65pkiy8BFpNsPYdFsCrCMd2rP7gPhQut3",
  "key40": "vz5PQZxw4pJeaWDiUcnBsvwMoyL3MhmjpzUS7MoJkkHWWmEounuVjEmEMyD2rVaGrPF8o3ytnjuLDP2oqn8Uy3p",
  "key41": "4eF94w1jzXeKRvGq4FYeT3cHvvjKzQzXyNAT82stR6p2UrWS6dtLXXsodCaCryYNcc5FFJuk2B6hu4JkFU5gEWu4",
  "key42": "3pmp1Bpt3rNjK9ZqJG5o2nnfKb9xzmuSZLJgCxbZMm2ooUVfvDkpicmwHkQzPvsi1LDiNZpuraHfAv5iyUwWLAwq",
  "key43": "hbZ8vP6fpBJvPW6jticaxqzcs4NmrWu5RFvX4WsviMkCeQoZBtpi3u8LgXonKU5cUSAJFzdFCiavHMwTrTKKC6X",
  "key44": "3pk11rcx9DfxAGGMNTrr4VNNBeUfWCcPU7wTgnZobamsjEuZwfcbz4XxsEw1UdBKWpsY1gSumUJeN6pghRBvQENe",
  "key45": "a77jhyL91Bhcno2xg1b4r84MB92r62Svhit9jyi5Nh1a2h9ukCevkxYJzZNQBGLYPbME7gSqgpBPv86bJpzqSfX",
  "key46": "4pCVHtfwJ8C77kq4gRe9fGr1bhpUKbujJ6kucZqEDZWNmLi2VB6D1FCnfBYABTqEcX8nLSAJDAChr8nv8nT8HnhL",
  "key47": "5YJ81C7dUa3EiLnMg2ogq8W3fw6dJzPN63DPAU4p1zZ3YF4nQH5GmZpsSgRpgSiqmtpEacDdysJATauggK5oguaY",
  "key48": "48obB48c5383FUcbnRsWiud5smV25ttW2JMtheZygbuovTtXs6951BpTrWq2sQXe4rm1ZXXyjhjD6iVQ4kTEDCcz"
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
