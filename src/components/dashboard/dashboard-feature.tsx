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
    "4QJxtHM5FnkkPyyvEzybmya8kakVjnyC25ZRpn1yP8zFYW8NfUWHdHxqwGXWgSHfKXmkCuhSagzoZVdgEsNvexpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZwsbGAPnW2DjAYjdxBtDKZXe3mp2BwD5TAte7iWFCb1wZQgx5NUdJCnALPhk8hxhdHb3RpBpesA5BuVbFv6kjt",
  "key1": "xkYDQ3gbFnRCUVFv3GQLcLXWbeQazv74PDb5YGSJEWpLbNu3tEHmGzRPzjrrdSqEnaHHXriGNuM3GriymHT436H",
  "key2": "5wcpMdX8fsm7HVk26vFAc1ReCSdGXoNrC5BCCqTTYMRCfawRSwfCG7yyzoPQEtH9Z8kJNYjWizf3adrAV5EyGqZP",
  "key3": "N5LnyAnYMXrXrwaYYmRXg8HYyWTjm7U7yd7LZUxD9Qk2oaZAVgLjfEV7PQkQ51Ar5waWBRADS6zsdwWnaGoHLiM",
  "key4": "3pz6hdb78bpf9QNihLCK3HvTtdeSEHTekcyFn6EkmizoF5HXNhGwFeJtwyXjnEzsJSB8Wztxok5JWG7Dmc7VjZdS",
  "key5": "ctagrUV7R2UuQMLBX4tSdTfEFbRgFixQ1uG1RfbztCjL1ifbYcFtUTxiMPaEPG9GSjFguq3xPhDF1Wt2EicmGeC",
  "key6": "4eNsTqF2qKZv39mZzCk6gpVyRAi9RZvYQutZJMEGMfMMHAmX3bmLnMFyuxegqs2cUDpXNpthRoDuC8JymJ5Gsn8y",
  "key7": "5iaMosHBeAQDwzFysbQB1i8GgTHXXassutQ1dQKH93iRRPzQ9pDNFp6oHQV2yCz8WZ8AtpWWnDFFdxZGDaXqRzFs",
  "key8": "5ZZWDYYrhgvmi34dL5i5hTjSWCLqZdjAmQ7Wdz7Qi89msYWheqgCtuPgahiDhsipejwDUiTRbGUZ5BzjzwReAdUh",
  "key9": "S4Krqv6Px9ZyALyvYV9nsL4uWXpBwbguYL5Do9TVyjiDRBBPaqAyPFYCoyJuNoLpWjGKkxpQR8JwNoztRdn2io5",
  "key10": "evShdV4beDxMnrQdSBkjv4JoBD9FXQYVioM1jrL7vMyiV9nz2xRxsaBVL7qGmYAXFVZ2AzNPwsLvkJkK9yjPXf2",
  "key11": "2LJuJDcP3KPmwdLq4LFmh6nvgGQJu9ZxEm3xuKFso5rr6tJPaF4dVddkBaFS1orUy7r3YjDjVydTa7kkD4uUWNyZ",
  "key12": "3s2M5XWj7dPBJHtv66Q68rBMdgQgijpBbUMqdy9WRykprXtFaTWfKfTPVqW5x4q3D1yfsKEwnaUrF6VhLYocQqNs",
  "key13": "5v15NeGq6pKfupHcRFFZzGexVA8ti2asXyfg2rfs1x331cfjePtgFRJos71LjEP1ekRvgvZ59U9rjR1xBzKC3QZ8",
  "key14": "4Y2jMGj3veLakpiuK1Fji3yNAS2kiniEx2tVyugUGCA7JAgMJxYCa4yRNC9oVQpZrKroi9DgWYybnw59nfW1PFPA",
  "key15": "DMFjvp8N1gPtFkdNWc8wAZryxRSzQbHBVahX4ENXYrAvZ85JitCF6WpDPTp73Q3vyUC4eHjhjafGgLQCPzqXKKQ",
  "key16": "3BuJUU55e8vuTGCv4jZiwccQKRnRgxHnCtSPtpW78QPNrVmj8FZmqjnoGJgdMV6fGPcq1hRiUa74YqCJSfSMqGrz",
  "key17": "1AwUhvZhzEhAqfYqtjCjJU2o9CW2nFcQSSJvzUMyzsyLKwdbaSNT6gcdSGGei7xvTSLNPH8hH2qspEmYNm5hpHM",
  "key18": "3w8P7WmzeMsZjurTpCr424YGRgKBBHmw46BhZ1sxYfdoT83z39TXUeB9mRMYwRfGJsZAoVzsEz1TkMgsMD8ePwpd",
  "key19": "WZzpxWkbCn8bpLv9seAaJ5fMXN5sZANW2eQE69MxtJDkzQpHygqz5SfSC2C1FmHcMcrweMo8Wr2SgbvZuAJBNBQ",
  "key20": "22Yi6nq9BJC79n7oJbXocPBueFBDDkgpbpddNeaFTpjLMADnRhxEvmUA71ch3E2peMCbT2pnit1DoeACLHWRMVtM",
  "key21": "5LFtx5Uq8BjsV2z27triTrAGJEz12dS7U3wUwo1sVDoU2qNj22D7Mf6sfxrMhPsqtHXD17P5HZcrhasdMi9AdyBn",
  "key22": "5Akf7MmLmRuUEThWs6dWtw6EmCjPoq4RSvBPwoPKJb2U1qef9AbKxePFvyod2degKdK36BAVhdjbZhLFhUR5SAtC",
  "key23": "67KvosepdpkmPs3ZNeHJ22yWnu2efoEeHMq3WZe6fFPL1i9oFhVtU5uMw1ZBkrrrhB6uuSPey4Um3beSsrPCAUaC",
  "key24": "37n7sRBaVpRkKjaGYnRMVPRWBTCimhmY5mKCsLa1uMgwt1D8dWqMHymU6jW2qJr6THNNbYWMWRPRu3BsQtVkKyo4",
  "key25": "44vudxxYHoWnienbcmvK7JHcZMezRrHW683NrKYBpeAUjkMMwcxraAvyW92mtp4DUCmtYFXke7wTMRNisN7H583P",
  "key26": "JocWUFHq7SSnKqvNFptjNPXv3kXHBSkiBUYooqwtAPZKSCLeMusoUfKsNKtahCPHt7tg3A2iP9WgJayCQ6K7mUW",
  "key27": "23HtinaxV5C5tvno9E8AoudTbyqep42whKhMcLDjjQZmbD6WjYeDBNVmKrDxFMWBXyVwp3NgNbG2QJFT4fDsBmEM",
  "key28": "2VsLUgjHoP8L6B8XwgA4Z8ZZ6knu4kZt1rdE5V5ra58bCUrWavvQiTvQj2p7bkERLt54gxGuZZ52hMdnEikcMmkT",
  "key29": "2riZFEbuPUPHLcEpa86N5kUxuVtVib7kb4rhQqfVaGf4DJcQ2DF3MXaffK6YuX88i82yiaL3jMohDoC7N1V5NrTk",
  "key30": "4SZNS4nuqo2vYHtLLvDE2b3frh4TijptdBMt7DCysdSmJtigyJoy1XCv1kmSWo888HGvZnFpaNyhHbTgFTpQkJLs",
  "key31": "49sodyoCQMiDhfTy8x1wPnNP8BLTmLzxdPnufDZv2b9UhgyAbdtgXi6qE3btvaXbXdX4sCP6HyvoKv9Bo1GnHi63",
  "key32": "4TMxwCt9HNLmsqj21NjjGzQLgphij3G7aLVfVLMArYPdZhy8UVMnhFrBFqTBf1U6TW4YjPSQx8zMDiNjQ18f2tCA",
  "key33": "2L6FeJLXMoYN7Ppb8vZ29ADqhwUmTW6sG63CMtsmHRADaBemGX9ewND3fSSzftaRodW9BoqdYU4x3FZeGSoYo1Pc",
  "key34": "3KAwWzcijZjfWmTs2eAmm3ArXVzaQYYLL9HkA68zi4QJNX3VLF1V6aRSgTGRzs734ecArZVbF7Vce9fA4NuLJPRR",
  "key35": "3grZPT8NECxZapiXS3iNqeRuH1nLD3P11vVejLs4tz9tfWohFuxp27gf1L6y1XF6a9T78a95xMUM2skXSSbhoE2R",
  "key36": "4GkDJ5VZEB76dYUp2HhtCSXz4Zg3adUZRiqhYUMvRZqxMshxt3rfouzrQaupaMjm1HWa9ofB7PZZHcCQRZjAp8gr",
  "key37": "2SM5Z9tYcbAtGLw34UHMZCydtWfibW6wHb9KGyRTgvhn6h1eTuJZR21e4D5LBafxR6pLShaWxWM9fesqgB8BvtLL",
  "key38": "3UQyf2EU9uW7LKRk94YBZ1VVx1iwcb9efzJb4GqRPWQ52RWG6cKAnyi3R4EgKNuXnUqPEhJneiBaB6jHtC7d6U6Z",
  "key39": "3vr4C2tK89MgDoggvHQhLt1nygJfK4foXKCHUydjJeAowi2pG4xpJpCrG8UepBKghs28KmhmtdGAp7eqwuvHhV1c",
  "key40": "23on2SVjUYtpCPZPbwqYtuKgpn3W8buaDK87ahdT9cqYVN5hVfACPv7527KFexMTcoeJh32DkgKf4YUnuzS3wd3M",
  "key41": "46iwsbU8D2mVcdnUV3yTKkGULHdM4NRjMfbr4azjMRp7zWWnTHqsbFmxsjNFeJ1PsYbuvC8A7FsTnqYRWh49ykWv",
  "key42": "4r5sdfHNie2x8EeGCuMaCN3GCP766DhQtWNE3YzsmEa3rthzXpsRrtmQ4XDcF98dum4E6AiKGwFqtFSRYj15E3bY",
  "key43": "JFB91mdRTupS7ag27KJA3iqYQx1XquhZoNZk93rZ8McP62cCteiiwUwzh24gg6BLLE6QRVD9tHSmp7nRLS3tzFU",
  "key44": "2ggxHkieDbprcKPdaELB8d5bACjMjm9xe8tyxGDAgFop4eouzsB8rYcMSVS59a9PT88ip9EXNqzPTesRARhTcAQv"
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
