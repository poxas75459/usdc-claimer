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
    "5nWmEhrzQEKqS7v5gtK3QAMp9sZ2yriwzpCcAhe3rVCTfNvPLzSagToSqBeem6Sn7DPSk2eAkZBkiPBMhN7sAuHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WD5MEKMmafA9oY7cqqH5B9L99Led27YeqAfVjwnmEauhSbxEVFXTTTijpCAELyHMyEg5ySzJC8yisDGM8zEEnYF",
  "key1": "26Rugu6G7B5hQXS5B98LNvyvTuFVCMSXFvqH85YwxfVpckAShFNZLXK7uXmchipaMsqRvaw1L6qT24yXhednv79G",
  "key2": "pPxNovTEMmQepXSmT2P3c5rXdUGwHZ8rqeM4k7KtUyF3x3z6Bwj89ehX2cp61b7cPpz4Es3xwfKQCkfxyUwanQ5",
  "key3": "JqM8v8pKyxNFtXaqSjUoWHqqpdCzwJmCVPZzDGjpk7p69PgWgkaMJRSdXwnrjmakhqoZTpPZZn6dxBduqPoRmj2",
  "key4": "3wrB88a6QJaxudLpChcnWt2pY1dwXeFq6fWxukAWNUFwJnrby8JeZWYeFh2Z3XdTtU292h18EoqQh9MSP3H4HpgN",
  "key5": "5UT9NakkhsaonRb2miQj8SLYL25feKgW5UDqdwATDAeUk4ATvUwsZtv7JcY66xF4FaPzaTaDgwhRvx4QUHtBJmy5",
  "key6": "4LF9wkvPLJx1WZboDoHp4nKUUSQMArKJEgwK6KQeuy1qMfWoBxCJp9mYZsDGCukFWJdB6UcsoM94kqZRVLGdk5fe",
  "key7": "61j9NBANgGboAHdZber7JzJDdcoKgM3Mef6nmtVr1gZ6o5dxggHX2z39P5uGNmhRuMSCov5WaFeuYvBqwnx2XSB6",
  "key8": "zYX6r8Hz7aK8BkwBBibs6ufJgyyEVS2LBbBX8BRZbQcFNLVpQxBMB7daV7S3AavvPT2aSKVAUdMCtLH5apErtsc",
  "key9": "5Jk13EcJtGtmgqRy2Vcqu2NTaQ6U9PjCo9H5j5pLQmsK4p8axuMGiqvpU15piNGuQCfdZ3m1GznToDp67dBSkRNG",
  "key10": "2EuCS92mbijNKJGfCazmWx5mkJjEcvV8kNYULAyeEbh9boKaen5NnawPS9Q6aVHx4tiCbXhA8kD5YP26cMHrYecj",
  "key11": "2oQfQZgeVkq3KkrVRi6PfvYoRfnHWm8BBNMdGWsA4UZkUyNKNSLMXXWaUHYhjgCRoCDMms1E3aYx55tXLamjhQ9c",
  "key12": "3JMjxadBRS2ZnGuPH9A1hd87D9bGfMTtFcrn6vEt7w7PKedsniMY3tsy8pYz8tdUfrrHUqrsUt6PHpsQxGxYS7Mw",
  "key13": "4gCGxNB5ggviSMiC1Fdnz4JpazMrEMpZesgWymutpCR8yiogFXQ5fY6NdQtakAr4CWES2oWhwUy1gcEKrZm7geQa",
  "key14": "3AicXdnhk9cBMY6f8JPGkjCxk7Q9YSAELZe3MjcUtqMDnhHDc98rvq7hftaYxbNf3xsnznzZr3MYWFm93Nu2gSX1",
  "key15": "3hgA5pXtQwumvmHgqnKHGyWoQz7LUJh3pSZ6GNpJDNqi1ye53aXi9PyibdUKWEQ1brpmBqvNfxvqHfQb3f9V8j7j",
  "key16": "2oMNWEWwZA9LNFy4zEEsVj7a2qxD7aRJmb9H9dpaLtKV6fPWot3v9KT9LSjCcLwnhtQUZxq6UTQqMEtLmae78AhA",
  "key17": "4N5iXgE15UsoHJ7WEJsLtx4nnwLQXMgV5NS17KtyrRHxLRhiFMLMC2tq991Gi7KRbdbfAxf4nnGSPVAn2YXFYvjZ",
  "key18": "3Xb1mGgqt5TVDNrS1rThrFLB4s36LcWgiGg3EHg3PhWTgz2dFmcQiBAdDGKrBjZvPMJju1nP8Uow67eXEFxfGoBX",
  "key19": "5eD3ohvmHL1XzDDaVrPP1vNZQR8QKfdED68wx5RfLYQVCdU3UXYB2rpLVr7YsYgMfFNfZ1wqc7LS2MoFrKiFUwKR",
  "key20": "7LfzmUEii1VwwyiSYGCBV8EDVvRKk3YbSKgip3X1tbju5HaSrRvSm469dCggu4pSN5B4CST3KcBTXXycCXHxLmR",
  "key21": "43ndKBseZu2QMoPhN5NFuUQRfkYJ8vTGxxJnmi1vWYtVucZgBDoXFnbUi7Mxor8wn2WhkRUrXgPNZ2ALFiLqxeKT",
  "key22": "3DwiJdEt7rhd4QF2kFEeBHxPAkupKEwtd4NXExSe4rRhqcy1HM866ay2VmyTcqApAAxrupGDy3sc2jtSJ2Aq55yT",
  "key23": "2aSHTN1R7xNrk35c2kfh14buy3dwKUpt7YApZBrKfMNH1p5TeSxCJkDyHNWwHCuNw2KV1bQxA9SJ65chdJeFmy5W",
  "key24": "4EFUod2rkAmb5z3wdECK7WyjnkyAF3meCUKyDBJenpcuBuYfGZmavjACu3w6QnF1HDJ48t7rrGBXNPx8bVDXuNFG",
  "key25": "48JEqbLnFBSULXmnV7QwsRctajKx8E6mX6khQBx1vZ16LZSZh1PABYSx4iLJwdGJUohP9Qf68SxDkhBVoFQyHoLb",
  "key26": "5NhduNA7S2ZByYLBCBmerukZWuwUCEYVJ6TqkkjRNNMi5poCdjMfor1PGbxTfGvrfdGN6B4DWogUvoAvB1waPx6M",
  "key27": "231tAu7zWAB4DrPBrqmrkee8dPED9rjyJPZgUddPxWivJoS8RCa6CRnztSmgdAdWzygjWVNSBEZzRRP3T3ouzz9K",
  "key28": "2i7Xt5iRDiEMvnjG78bzh8iMTx3bKgTEEZQb3xpYrmrSFj7sCTXntHsuK3hDsE6G7D11XYcuVrnstmnbiQi6RQBo",
  "key29": "hoANpLoqa54CwSaDgW7HXwkL41ezCH2Agz8bvqcskvjJBhcz3UBhhA4e5xatFZKt4q7tekRJ3FttSmoE6ubGD6W",
  "key30": "32mzyFrvGqrrZzisdg3aBRDW2d53VEAxCM9fANy4nznN6RuFadim7p29apv5R79ggym3zp9RjYYUempzeKVFxkad",
  "key31": "5xMDrWJZaavq2bWBMMx1L83xeKxpAy6i1GNmft6KAx4LzH1TkPzmMndMBecvy5daF3oP84iJJV4QkWTmCambLxCt",
  "key32": "5DRtiFkyCPTFz32u352VPEtQQMtcn8PGjT9dtC1EJP1mhwKusgqzydCg5cD7BR95HFs4SHuixy4NyFVEwq61qPie",
  "key33": "em6m7hi2b4tQdrGS8ykP8v7FnV2a6rGMpezzQvxSAuUUiWRDH3BrU8JKuAZ6yarPq3f6rvG8dp3ETfNwd7RrC5j",
  "key34": "5A2BGb8vecNTMxuZ2rPuJUtfrSQU7YFxQRtzw7SnixgZ8kpT7bZM9p3m7789up2rvWbbaU6sVq8AeCvuDLcKT4Pt",
  "key35": "3nRaFTVHHTKaLpVALBep5aRbfHK1BXo77b9P7xKg1K4LYg2HcqNmfTBG52Nd2D7BEdzYhHRxeL7qArsfVzJVJEeY",
  "key36": "2TVD5oUkw7cq6UY8DE673GXyYyJyVZQ879oiqYk6exvD4HKQMVQzQbE3DguBD4pm3TArypGiX5WR1ftix79u7TTz",
  "key37": "58vGUFkYLDZUegmstFYt2tsmC8dZ3L4T8ZkvkYNaSgYkG9kZRVP9QNQ5uBqwY8Hop5UiHdZZnecWMWXp8WZKdohQ",
  "key38": "JFMJ4ZibzyLrP7nJicSCx9BEqRDk7Qk6AEuy7cL8p3PMhUAyj1JW3r8rTTzCLQiZqt6m17qPUm9ruYKuEwLnkh7",
  "key39": "521rodpvaiNaqLFzgxZwowi7o3eNGBR4SATkfpDDYwMeKR35RLUPxXvsY5oiPthZeGi5WFU1ib25P4cCUULucJd9"
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
