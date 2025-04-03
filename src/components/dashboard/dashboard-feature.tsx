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
    "wDLkuU5DaHMgUusKTX4a9cKT8NQhHtnW8QYzXDydg1Lbk4nhfVoqtqoKRKhMJbM5Jg8Fvwpeq9TKGd7W5F9Hmmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xpjysfjKvqvqpUmPJQQqPgZXACxQ1haPRiLRLvSYDCz4AVTMaWiYmRTRc62ZvtamkDBzC1VLdTaE5B9Rfid9KC",
  "key1": "3JCfAwe1D11MyhdLuSDTmN6xSnrWpZrd1uWsLHdBE4cwYZbisRgwZT3JwaMjZ5npk6T48ujHg4cECVU7JJdgtEgm",
  "key2": "4KPjX1VCuzNemZvkTgRdn5qsq7sqDqBFg7SMyjRJgwZHXCmWnSYa3NBZJVuDvPxUVVcPhzi8wBkpFgs9bLjk5CGV",
  "key3": "4thfpM4syimHyhNwTD6KGsskVNiV2Svtv1agNVpPaeyVy8XPZJdtAPCQmfuz51sh4mLDbWTVEycYd2ao1rxfCuRn",
  "key4": "3CzBvbkqYUF3sCc2a1GWuECfGhZPFHDsQPrhsz5KXpJzEP26LkRS6v7GxpNpmxDS2DZoJqxHcUFhvduQS4ZtQZJP",
  "key5": "Ri9RCACNCUe7dhYDntvtVwyTaNNsDwePXUbZTxTjXTAJZtRyRgfEAKqrGeSPY7RKze3x2aa89EZcjCMCoJNiKuS",
  "key6": "3dP6jGL3zEVKLgJu2vFMgxoaMHXzXAx3BTec43KD6C21AaPy2U9uPmfnU2CfA4d48uoiDyefmcYLNt95daZT4E1W",
  "key7": "22JA8SG8tw3YdmUcEQyihAXTKrY1mSs2hHTMVdmQ1gRkA7WJCmcMTCfoR9pJZ52J2kYJR2PrkSSYMYz7GNqH7HPt",
  "key8": "yrpDtpT7pRRgtVcBdfGAMDAQqrcgHDyp9Z1CXbLQqnEVtetd7nyZRd5DoWKPLFq6TudvdgtmH1Kf1qXAgLCY4ez",
  "key9": "2g2hUjAovJxjqSbjDQmfogM4y4SQ6MTc7uf9UPQbnLottdYbyGE2E7wdozMYJoaZcLfq3cchLBmkckFNGjTcqAVp",
  "key10": "2dmti9k6v9WAas4aF9VzzUcsQNkKJhfnyBmbW6ch2km8hbC21rY3LM3a1sGjvaZ9J2kstDoVsp4tm2srzz6PoVmN",
  "key11": "121N5pF3aWds9AFeCfUyoxCjoXdpxqBA4ZAcc7Bm1HghYQMRZvGin5RMJAYeYQBsCMh71MSZ4dSwa2wG3dFnRgec",
  "key12": "G7MVSyktbakLuXrx8V7tMPWev7AWfHqGFmEg31gt5F35wPuTeG6CnZEePtdS1ZYRofMVUqQN7hm1USsNtGrdy9g",
  "key13": "46Xo2uVywW7d8uGzAhuW7MsY2oCvVb3pekLrhnysus7qLVnZriVgDQ4qnDTbsRjrQpTLLCHx8phcjWogZ5dCN4w1",
  "key14": "2YET9ERBhxuzdWMzzoEsUviTzcvCkAEFvwcGDNy4n6XMB1XgEtDi96XQtLknPmDCErTmvoX78F3G3nzAJ6NvDcSj",
  "key15": "3Ur2CAYhmzvfVjaqnpkkiVYaVBdEtLeb52TSWxq9S5dDFLzBPb2VtCwZfzrpyThZsJRySie7JxR7eL3wVNamyz88",
  "key16": "3D5V6YaF8yyofPmvwWbsBLkafjEaCJAvMa3tMcsbnqxa9z8CUoJk8sYw1EGZrBiHw4nR4kwZnjkKLqqh3BHesXrW",
  "key17": "2HeXsF7VbQTUgQzH7QWwauPwmvaWNm4ic8D4cza7L6jHN3VcTHPewULkLsLyrab8GuFMLrus3vWwnM8iuh91UrRL",
  "key18": "5g4VRiJLkGB6GhUVh89JDbu6BE6pvYcoYQZhN7N2LneF4ZyH9mU4kSkj43eM6A82odf6nNrLzbWYFWNhQjcyxDoZ",
  "key19": "5k9PtRtZF7usEBaz9vTXowYUZ83iwrpuppUqiVexSrfH44TiWifes4UYkAqNdH293dQkyGGr1DNLNkiBCythfg75",
  "key20": "5uU2K175rXvr4BjVVLtUoT8ina2vLpqUDqDgV5SBapPhubjhg2qRH8HyV7CyT183CSPYjP8scmyG4ZeNDdf4X2rZ",
  "key21": "3fTYTrc9tHHNrtC1JwzSzBg5fbuKdiAcypj9DmbtUAxovio3bQFvYsYsxivJm26njnzFAj7j3gt32q4Ui6QM8rYf",
  "key22": "3eJVdnUJddk3LZetRgbyJdTamLUNo4V7ynbEevrJBAcsjNznNsSn6YhUM5NKo5RTqdSkFLdnCQrm44pZXhtHhmd6",
  "key23": "5UAcSe6K5gUEjQmzyU7e8pzhuUsjT2usxfPFise4qLaHBmHTexpZeLcxVP5shyth9921rZstBiU6KKsp6fDJMh6B",
  "key24": "1PAQnS7TLG8GMEFdaSp3Cy5LXvPJxW6bYgw1RAXmCdGZtfwphVt55qH8RjAwpJZJTma2yrPp1YsUS3FcNjYA7BC",
  "key25": "63gqngJdcKeMKoCzpHfG5ikxTn2EaBduQkGhbBopHrMjBUEFc4WZ933Tdh2b5d8xqDEJ9zXn88zSSfXSttkc6nyh",
  "key26": "EFgyiW67VFVSMy7H6NAJnBTJuUUZ1sanytFj78XN4Z5NWce7gR6V3iXKip7XYxdZB1Nx1WZxEcJCuCkeNjqZ1zz",
  "key27": "3Xd3vocEEGN6ZTTsVjiH5TRKWhJENrReeBwbp2E2k192DJuasDsq2wKMSupha6mXaRozcFj1FWFgETg4oJkzcEWD",
  "key28": "hiUAAcEohor5grEtwuTDd3mSjdKJnPA3W9btgkT4yJBVY9ete4LTeWriFXQjGj1GnZMXY7tPid6metyDL7JsJuy",
  "key29": "9Mh9wBeYASNyxGndrhowCimfSxLsFeG3ECzzhG7ZtYUNkzNxGEtpbZqJERoUKy5sVjyXS4jrmbP5X2nA3NWyaXN",
  "key30": "A8qTDbr71vH2fsDBVzGbMFcX4yeafREtwNjhHdD7zMd8zWZiawxegvyjheW6gMxWai4Hh2ZCYzigh6dTyYCErx4",
  "key31": "21eWN7KaVACCsk5AhWp3BUy7kGYBkPbify9DmqwgMyLnKhh9Q7Re7zEVofWUkefzu81apJPANZgcUA9KQdLB67uu",
  "key32": "4bBQ9Eh6pS7rHXgYAMpc8Uqx7WhGv4tQsyFfqX7rwhRGjGQvJV1cEcaF88SxsxZBZL66Z6iH28rvVENBui4sZWqR",
  "key33": "545Nhb79zMLR8m2ELAMkf486dG3Z49Fu8ExFV2kNvRx4dVhQj2NDDjUmSEzvSgcaR46yTiSuArCVGA1WrYSrQ5mK",
  "key34": "5TPPRxNYJSCpuqZM4TeW7cfkTNhjcGogfJpfDMgByJtTmfgfLracvLkg33zeCmLhVAeKg3wYdtNmqNw7ytmpz6qM",
  "key35": "48UydvWH5HZcndePCxqybQ7g6ezNqUCDT8HCbp1uXSh5g9aiqmas4QdXrBDstZxPDKmo3PymQGPnw5JH3zQaFKgx",
  "key36": "4nPeeFBYvvADYjEEwVXCBAtN9PKLPbqdoheme5fcfTGiNyZkEpPDXaJn9NFRBrXJpX8gCnk8EJ5U2zTMrGYDXBWy"
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
