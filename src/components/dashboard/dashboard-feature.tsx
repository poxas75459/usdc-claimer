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
    "2BvTFfxWGbQ4jSjp5q8F4LMUkojni6QuJiPQ6dqQAHDdsA5wNY5gtpea3rCYu1598iAodwoZ3bEjZGziGQf1uZt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454ijrPLYrCCVR3xigP1evuwshz3yu3NkT8KDqFGj5de3D5QRHbncYrNUoXZokxT1qJixLy9muuaLAsaUns5DNv7",
  "key1": "5JfbMSE66zZCU8fooPtz3gbFZhXyUgwmXUhvyvbH2Q561foY6CDzquUiacxnU3YfE9zFkQmP8WwHsPzB1Xhxu7HK",
  "key2": "4QcbnuUcJvs2HyvAw5wPtCbVJ4vgZJcCKDRbuabUCQqGGk7mBupc8LqLBhSSzTZhKYnCpy8wP2mwezgA2HbeXwti",
  "key3": "67ACtFm87TSooAHCwSZg5AtbnCjLeYnu92Su9v7mShDiPpaEjEPR5eXDyzi7FFhTDgRyqd4FKB4ekPWGVbDCm39K",
  "key4": "eMsbPo3yNaeKZ3pYLhpqeeKbHBusWSQztFLcPLH7vtt7cnUBzM91UXPL134RQUYWJsgRXPs9R8HstyMcWkf9ofW",
  "key5": "36j7DWvLzTUupr67Fn2vCb2BwgHf1Ygfo6aCRQYtBSn1DsvQ41nHsXCDwwioX5QJM425qqHQwsG2LqZwqceYgSyA",
  "key6": "1VN4nMA1yG7YP9EqD9AAW7VHwnUwK3DHTSo2tgYpBjz4JCh7KKApBcedYhmCAg7V7YNppoD96JNUjn1WDQwYzJH",
  "key7": "4nJrEMnUfudcGTPfU7VCEd3NhN5LhAR1zKET6fSCK3Y72TYRwFdANAfFzsiPzhr5HCBDCHuMNLM1cnbxvNfJyxnG",
  "key8": "BQ4aegJU4QLT1AqsSrLo4nurYoHhZTfJiL1c1VYfB4TmfRX8D3UF55BrMs398AbvaZvy9DdegYeNx9hTSXW4s7k",
  "key9": "5UB5qFjQJ5CSGChVHHF7RHeYjGV4CiCvmwmXjFskUHzyNTced4YgcwF348QJ8B3uvhjDDD4Dq2HvbLdjTJ5hcWoL",
  "key10": "baDsZbrpmMTae7BZLT4e5wY4zFCEd7ujdcKVdNEvz1Hx371iGED3wszRW8oBKQBxhwbSzPQ9bHrQkdUxutNowkL",
  "key11": "5ynKsSz7sTNygDPqqEGgpPYkgXTLdG9uM2ezX8daRVC3xC9ZsJwGdro8uQs6oPkcDq9xmd4pCdx5uGEZ5ptfYrqt",
  "key12": "5E4xfBF278MSrA1E41ganxtrDRHkmDD2cSQQ8nak46vzqLygcQnWyRyPTMfaVboqoN1eJUXiEgDH7rg3fDDA3kNy",
  "key13": "5RDoMWN8eg6UjBqdxFei53JVLmbdVo9w6gRfLhhVKPgsiNQT1LvPnBPNz5Jh79GMkcNvS2Z9T78PqdiyCMJs2NLs",
  "key14": "2kyeSJe25YhwfJt2KaPbXYEnnVtVsM7VkXjd7LbfYnH7VkoDZhAQbDBKWRg8S4ZUiSzpKu68dRarZ2xM3rkXmyqu",
  "key15": "23ycZ31Wq5R1M6HLTEWvmHQTtBoHs5hvQZLzVo7SpcHenCz1npKbwT1ajPQeZs2zZQhFbPjr7KHwsfLZuzNFekH4",
  "key16": "5Ef5zy5kbZTw3ob35yYWthQqky19p5wMQytVzM8w4HJFP1ZKWYweDfJgziErVPSoFyVWpdLXJdM4Ag6NZ1z6EhxG",
  "key17": "29TmrSB9Bb8tQYgubfeqpBjfTzZ1TdXyyj54ZpSRmePSnYAr2LjNPPt5q2pszsJNtDWQ2J1bLEcmpUwSo7PgnCkM",
  "key18": "3BGqrkaAmjwUfiTDWUNy2AmgFBUoFp9V2onycvMcL6zxvJsBw6wHGoNdKbZMboPQJ2547QNqovtGwHDvv74Eipzf",
  "key19": "7dXoQcEuA1Bda7oTSAHNu7TpuUzBtdd8k8rphNkgp5LoB7cbxz3Qgo474nMMe9gjjPVf1XC1SVjLKiKuiZhgMZy",
  "key20": "4oDeBLKurvekULtXNXmhTAYVL8YDj1bQQuurr6nZ6Cb6CeGSj1McFwirvAvNJYLCJ13VdR1YtDXttcrfdvvaXXbi",
  "key21": "31GrnYNCd6zqEjwdgJhfQ5yMTvUDvSr4rXj7aSCSSbQmwtskfBaHqhs62fBZv85Qt2LtgMqAXA3a1bJoXgyYxGkR",
  "key22": "4s56TtdVY1W2TKWEBv3x6eEiDJC2nAEaMnsNXtHvjGYhi1AqptEwEznmHoXeZyNFKuiL3aGVNiTng2fhLZesxH2w",
  "key23": "39d9NXgwLo94tHg9sghoCWFVWGx8nChwgXh5ayHfMkhtX1MDywX5JXH8TqDTtBVmZMTChS6ZBXEjTmLN6ivvTRYp",
  "key24": "45zHQQRNA55R5ouxMv2hzHYiVfkYdMQA2oDPfKWm2uwEC2FkSZaLh1YsmAHAcvPxsg4PRyzECXSg1t8n42xXMHEe",
  "key25": "2V58HCfL5erHYLapXcZ1t7RiYv5yXeBa7fBjqDsoz5CUx3G23u9SUprVHDHYZkpGXk2toJR3e7gibTUBwNgMBdrr",
  "key26": "3xwPBT8JxWCQ9N7f9wjav6bCdVFPRwmBVzQzVe5B6anpiGTdwkGzCizEWG2EkxqATtjCkFuR3CZJJM3k34tmCxCd",
  "key27": "3ohqHY3KqsRWaU3VEf5SUGu3K9cBax9ASHYHecyyRirG9B3CCRBs3y3oD1RtVAr53mzxLvT1BtuNVat3NMeXzwzR",
  "key28": "5h7djLY1E3cUpVd9nSB4WrYVH7im7g4XnRvTDBhmtkf6zspH2XECb2v9S7jafSiFVnR8L1gMU7WLAbnrhC7hFSe8",
  "key29": "4z49uKiJ4vQ6WhPCPtgCGuxRnKMrP56hWBLUa1vp1ZZEzgi6JLvqaLYieEWVSxfizg9NPm6SVfWJvscwaxKyW9LU",
  "key30": "czqTCtxc28qdvXGwpMjFD76TeTKC6sH5xYJSaToR3p58Xa4rSTxAUbgdpkrHcPz4tgxjJBb6JpfLCJsqvVrh8d7",
  "key31": "4q6Ub3uTSvDfw9Pp76Ch4KbmuEmSrGuJpTZ32zPt1RVRduS7pwR7CGDEN2f7zfxXfANCG2JebBNXPtucv5g4Gu1D",
  "key32": "24dVrGjNVMF5WfafZMaEDhxrR1XTCipymSL5iXWPnC2cbVMgg1aw6tuC21TAfKgya735j4WzsRVXn59u6vWfzuSX",
  "key33": "4vDgG4wT4kCn8d1KW2K64MWLHTuegtYCEoUTstsoJTamAky1QErfWnErZLzbFM94w5Xw2kHnky9naoSDkWVpkvhg",
  "key34": "3bExZatQTFHTZ98BjL1ZioBqSuxctWGQE9fjCMHMp1XE4hjRAagHMBEVVrP4huBWvtpGHJ6cE7WokmNj9NzJBYcQ",
  "key35": "2cnzyGM9a9GfBAxFXTH6A4idpcAqdok2v4LPAhFPUHQVLhzu4vKh9dfSjFK6fTPfEEuXNaj3GRFfxvdUyrmAGLPu",
  "key36": "5xGNZhmtpdCQz2oTgCMC5CSVvWFZh6sBdEkDpiRjfSQGeryJg72U3tDoPZHBiky179mg9zyXmQunGLCn7LPwjFLY",
  "key37": "3rdDqNWRRx1X5peNWNfWJzJmoKyzg7t5SvuT8yeaqXvcyEK5csq44Z6bB8ZGHsbTzSYsUZNWPiZbDJ3kwnry9hUt",
  "key38": "5a5cVZLFaZ74si9DgUNn8EM5ARUweYvfoTSEtgGbmMbKoShfh9C4jHV2QmhG1JwQsDQoRZ9cfzeJeG4heEm2eVX8",
  "key39": "67kQ48rpze7zjFWw9NwYn1Nj5b8U8sJNfwNe4D6SkFtxay6H3Anf8hp1YddUhgcZvMuFCwRKbHBdrnqquEuGLhZy"
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
