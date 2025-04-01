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
    "55qQ4Ydsyojhe3yeFpQQEjuYXpwmkmLpJFctFUM3ngcpskJbAcgMoioJb8zieCdXgRC6m4n31EyW8taqBxYohfPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPqidpweNXGh28K3SXNP8XAa17ZDCpmtZ75StEpDECktv1bKSnr3udZuvdMwZzhKkjbt4UGz2qqHR5iJLcWN2sN",
  "key1": "UEsyKSSA7znTWUfzGWw6x6u4oF86JjuNzpQ5Jeum7w6dBhyf1C6kUHgSvCNPPGQiwGwPPNZpXnoxjpaQTNeX2YY",
  "key2": "2bLihZ1NEpmhqSSDFS95K4988mG5pzXkU9dkxELRtsoGMGuoEfFqbBbqKGgnWUmez1wVX9KfXLR7gN3r2TaQj1pX",
  "key3": "2dQySujXa3WTfursy4sxhdLhQNpaeaimsmaN1xub5trtyQwqhwedc8hjeLTAXuuvMDQQpwqJKjmfGRnooDvnTPNp",
  "key4": "2gUV7XYoqDjac1dQFAYgcJuEvh1cMYjsKXYKifMFFryxL5LqPbjtQqJtGQTUfkkbakGxpiK7CwvZhL7X1mRdzTDz",
  "key5": "67PLaobRMhcxLfEyhp15izUbpU2hFjRQNwMbe3SYk8Zd4jve4nwB7fZpUGs16yFv52G6sAbvXrA5NiCVosdezULJ",
  "key6": "2RAqrjzjAG72QqddxaxiwyVCHnJrqYtLGCnZUBa9z36L2FjSP2G7VdPEDvs1frgGS5uTYPgEs2U8UK39H898SqGc",
  "key7": "27iqhBtPFEGA8TNe97eSRc5m3ELpk5b8pkEGvSTBHc2Db7yhNK83Cp3n7DwfLqiQ3UZvJqoAqgyo5HibXXmLss5c",
  "key8": "2mWeng6rAmEqyt3DRKxi9h9yppmVC95ACMYfQBnmygu4prEGdusePMN41pypFDr6FtBGstu1hBnCCo45YVPjHpC2",
  "key9": "4sMDuxFFJ4xwDLzw6oGvZ88kY8LjEeaZJizdPKLdiVoYMdp2xaPKpWF2Z8GbLw2Qm9zPspVfAi7eKuEA7qE7RbVG",
  "key10": "54QuJmeRidyWUXRSUPuFkfX3nEmDAaNGowTp7pvVPVqexYjC1w5Qx4nszyYaDRpPhAT9TWnK4P5NDGtZz6iMM5Q5",
  "key11": "436MYSSbM9DqUYYpJTXCS4Zny4C7VvtsHB86PtEBEVKD4yhAXjP2T61tScou8BQbEVsr64vWVK6Y5yvwcm8n35Lo",
  "key12": "5Lk39tMWPbc7WWLur7waVX2qbCL53J7YGm9AVNqkxv9BqEboDdi5V542z6xgWqvNezVAZNCocL98A8gsR393H7Pg",
  "key13": "3hFMVPCTdZAENnkQPNCZfF92RWiHg5TFvaVqcj27Vaf8CPP3xC4FHJ9u7wx5rWuh7vSgoJigfNQffKepiUgsNz3L",
  "key14": "5MY8VrUJEeBDYjBc3myf7Dx1V4sGka7N4bNYQaHCHvCrE4QJEQJ7mS2LUtQX9E7iSrbyQJsUeAhqcUQQfQ2hkXZQ",
  "key15": "2u9hVzoHGtykvekgAnqCChp78iHu1QfJ3CeyJQZkDtJDXazVYiEbi8JHJsTJ1fW1xuHRxtM5EjxxRCtGpMzoqLaD",
  "key16": "4TTBqdTgGT3G6uXpw75XXNLvRkpWc8eTN6SRBsbLJZy49W9TY5zjo7PW5DMA8AiuiLo9cK16yhSS79H6ESrfjqdL",
  "key17": "6158D8bufqQfoJEuhqiDRAqUh14E3XmXWBAnNwTsDhFg451NfixpNyKzTynZai3g8D7UpHnjgs3p2p8QLc2pm7Nx",
  "key18": "4yLorTECg9dXYt66ndjCXruSYYNuWj55FXFz2kPSApwsG4EAVx6v66CQXZTWTscJ7WepCRf3mFrRBFnEKMbap1xK",
  "key19": "29mQN4bVe8Tg4qAXS6TysRpkuEX39zj9PpXpZimSfVtk4Np6ijT1q2ZRLxGE8VVsNSUJCTdAS2MEuEF17unRSUts",
  "key20": "Xr4oBT5XiYFCN3jRXTXuRH4gWWMCSXf7xNDPP59h6yB5o3zM1Q3ducpTtZRW2XTf9Vcqm8VQghaDm8tn3ad87SH",
  "key21": "5kyqmYsnrBtCACay5daGxSTK3hgiH1m7bErMyFBqg1VWbwXDctowwrWXRahrxYx9VuZAq6SB2UDUzeu17Gr4c3QK",
  "key22": "3XH4FTGmqc8JZustYCAgQBqbK1vnTC7ZLaGUptv6nYxdFvegw4xDaS8VA5qxRuo24nnWysjJoFD7SKCihg3quQkE",
  "key23": "3im7w6dMVkh1P6TtNigTMgCxKvzojn75NAwcrbov1YESH55ux8B8ThvL6WcMRCkARasyYNLc84PUX7L94HcNdHRs",
  "key24": "2wf3VcdnsTmgapyBNxheaL9bDPbKCDsVFvyrVP5mkJA9TVbgt5avAB9cvNzfSTFSpjCvSrwtV8EVGRzC1sKUtHHz",
  "key25": "FNBUQ9x5VUGaJLqxnF35xRSHSTmqsH97W6hjKnDfTUK2pMB3xcZWKxcwVoUwTmk7qayuHSSBU81ZVJfEBPXedaU",
  "key26": "61uSponMUxpGcAHztYBtfAgjG6mDiecfrZr7uzweha3BLKAgBY8kWR5SqFTXHWQHvkJgUfD4ZNUqXRieys76GBLi",
  "key27": "3tovsTajBRYDftnFBUgzhsPQVjbAoAF4hwtbcX8YV66aprVqZWwFJMKfBU538LhKSpyzfega2g7cfNzf7YHoPCKp",
  "key28": "2SFzTNkxrmTToasJZfb2UPsYK6sCr733TVRa2p3Tnxm1zNgw1DX6j24v1P3sQPA415ivyAhZUJNWyzC1EEqRD861",
  "key29": "2feXTGvNVoMrynrKXoQGC7xku1NVf73sXSettxPHexFsSY3Z41WHQ6vDup7WyQYAya1Bks6MnsMQWfckHasuMQzH",
  "key30": "2MN9KGzXoL7brz73ScVikNFE8u2kuentVkt49LAyFjQUCPgMngYWBKoDiNoTDJoF7N9to8D3vXp84mF1Csf4FkM1",
  "key31": "5cZYDFFsWBhXySJB84pejZpS4Tb8tfFwNebkgko58xn2DntgTH4dC9r76CuxiUtDbRvxazW2iWkuPLF7bsy1pN6P",
  "key32": "DpH6C36NMzeXk1vY5qeBgVEPKDnfg4t2urbTEsF6CU1h2iSguJmcgSbryTaBrRaS9vnPgC6fr2u3dVJkAXPRnnJ",
  "key33": "eUjbRC5eFSriUM3eNEUNsWMw2MrnuCf5PBjeG1Yrhjw8mL3JCF72Q88giXeTwXqLnHKfXWtciMVknStio5wGZzC",
  "key34": "2wDuAwiSRq951NtStSER34TX7bVwMLjYDZXAtsdLmNwaRLeBRfihjxjq3uBwz45RjBsqmDgo5z6kYoeZ4rZ1DriY",
  "key35": "5LZAx7P1PWij3EnYgk67dwJAWkdR1P8UbB2EY7Qqxs4gd5VsPthmCJd8dyQvWRCgynSNSqDLXrbmTsyYaeqRGrNX",
  "key36": "4z25z1D1BG5xEf89SeDBQu5djqytEhKFruexgZb711w45KPbuEuuuZAXPRZLBxLwBzjW9rJWzETgrtiyorcqAp3W",
  "key37": "tdmewv5vkuLAxNtJ1tTmpeWcDbNzVFHXB56Jog8DQxeQDxzNTyoWtgpwAeYkBq2jWiTNEdPjswC3gcyAAfjuF6V",
  "key38": "2VKQebh8hbbMQ8gdVvzc3poZ9mQvfMq7q91y4ckTZkNwe8ofcT7qUoD67vbbxHvspX2y5QSnWhTDd9Ap6XYJ5TWW",
  "key39": "4wvV1aWRRiRqcuZyw7zTAvLPrgLRqGKWoHSv6AHU519Z5mCyUPK5tm4T97sK27LbftynPtwnMpBjEchp6ywPTHz8",
  "key40": "4dxN3y5iudLdzC4GDyseN681MBayf41exaWMfJ8rA2YXG5RM9NoQcWf1bogewgcXQEpJfPJyhBgYzf4qFrQJqsu8",
  "key41": "TnzNGXy8N9b2eJV122qA6MvdXgDMV5xM3P8cJsZxu8AnxwtQkEcERGXmN8Et9GL7uL9sTLseawz9x784rBVsEnj",
  "key42": "4sz2yavuMLAMBFUSfru42fd3PnNn5ojqHxuaMnzs31ZXpuMPDyNoY8TsDcUW7jCLfLKHWJit9G5kubRFzMtPN7U9",
  "key43": "2Z7kVmkwmF6Zq1oVnKeWSWGUb53XHHdx6ZXFNdYeRsNtrNgBtCtiNWSVRZd6wioSiRTEMN5j66Lfk4Pq55YXGkgd",
  "key44": "5JTcQxDAzYYsY6p73ZzLVcY19oMY8eGiS8n8F1639QjnUt4isRUBoVBwq3zbCnNaJhbe3cqLKC9JLEc6fXYbjmHR"
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
