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
    "2LCbvi5HwkbuA47CGwu7p1xovDpcQCNAichnA5KtRaRJANDEukertDnLSz8nyf58qarXKQA6MTwFEwfFN8F5PbU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zhLDUfNiqp292NXHcctDoUAgymGU5tvDuh3EkATM8vFkKTjXpzYiojYcwL3JPgZmGNxS2usYfVD1phZSka11qNH",
  "key1": "4gsJfykTbPVLvFTBQkZ6XgcKHiMdmrPC4GseGc25SzLXJK5f4Q5oMSzw9VXvFE3q6vQYrzA7Ptrf3HZ5Qk9KH3QJ",
  "key2": "2hQYXW2HbjnVrQSVW3QoM1799RzjqPKPtZ9aYxzAA1AabDDvUdBKw5J3GcGnjyQkbbbfUrxXYKcmt9KRXmbK2NGW",
  "key3": "B2mxA7YWtaAxxh3q9Bnftem4MUmovChU9vSKEhzEriS6RZ7kZJNEXdiKeysvHvZTjxr3Pzvmi322HN8zGyVpnxR",
  "key4": "3pwAYhDeWV7jMpDwFWBycioNuEf8vzpa2LGV4rGLgJAJg8AUgPnc1ifY3wuMNSRXXLrz5f1oLxtgz9GBs1DWk1wG",
  "key5": "4U9CZuh1DNq5pBTk5GWbtEG3jqGXEtCRdpiKctz1gHoZTS6aASkuwVPiRJtLb4xro7QHV8i2kMA1ACYGxq6R9zAg",
  "key6": "65FqUvdvC3Mait5DxHB8sd7t5GUmHdMS1udCsx13DN1eUenGKZJK99KfJzv1gpPH3dTQnjRgnKg46hfyRXUWGhmv",
  "key7": "33kS4gSvQXfuUStZ48kpF7hARnz3vD89VqQhtUghSKXEZQqibD2Xr2yQNK6RZgnpFLyv7ckX2niJoeWeytet7F6K",
  "key8": "56pDf1GEjWK1zfTXCZd14poqwXTwdEy9iZ7LncCShbHN59HytH9qDrj6y8dUTNpcLTHMkJgkUSa2Rw7sBQ1qhK6B",
  "key9": "2dPd6HNTaXj7dGk9M2KsoHu4JmfjkK8LonS27bo6M7cdr746u8Bco7utaAMEWKFfm76zqTZMXwg728b2yJE8e1v5",
  "key10": "5CqQA1H912VGvWyus2WTMGbHuwoeUKqr6L6vWyDj8fF15UGxMcKDiXYs3jyNAtAmE9FcxKy1bhxm4X6N6mvG4pqd",
  "key11": "5AjRpHdDwp9vDbEMxov6CmGYpDaTKE4hg28apFhdF323pAjiKZRvDWFrwCzWN62gctBFpfccLt4Z7KtWNpMK8b6C",
  "key12": "2yiZtmodJA6V6kzAKgoWXm2JZfewKNMUpg5u3ss6hQB45SsKUkwYT5sQUhv49cC2nL9dU1vdJtpUbUihabVs2asn",
  "key13": "42mnm9dun4Q1yPED25uPKUcJBCS6CLSzhDqdsdXKjpMvGEtiBd8toA4yYuwAqaLt5ssrC335KpP4rAL6T9tNVnqQ",
  "key14": "2YMXWeVzds9ZDK8VfUHQB5iA2qNihD9ZqjaGWejjWKxBckzyvzogNMDRgiSaG5AchhzjXdwG3gpxto528sMmpubN",
  "key15": "4a9A1dX14KF4M2AacRM4DvqfeJd2yR8JHYwvVxRiRpR4Vjj55rakpVqF4PHdXorHrQsrzeTRCDHYpGoJcsSdnDET",
  "key16": "43VsQTv1MFKZDnctSBJBk5LVCZXT8tA2RWwaPnD85hcD85AeX1BPMjNARDYTTwDk4XHxpzERD1hJagrqvvAyoZsy",
  "key17": "2QMtvzHFv8iaAkUy7s2mFKnt446cTCERW6FoWnsAohMGQqQwgEjZkQYurLZRQCqwBjmGJgSzsknFmCo4NHxavj6u",
  "key18": "3CYwDSkeG6V5WigvrTpfpwMGDt6EM42HTipMDmxhh3mx2pqtMMAG1GYe7VuPvVuesix7HStnNhFxgpgVuZau3aaN",
  "key19": "5X38nH47LmRbqL5oyPgEBHwLZ2ykvx8TDbdr3MuuS5CoMJkFb1LwBYSb9ZJ5BidPfmvR95my32DpJUReXZeLwHvx",
  "key20": "3y2BoWePbP8YERdLAPcnWB2xunherktZ39RPfvReKiiiBqhfdo5urH1hVyPGBShcwLPheKKcvvqEF22vYJKdG7MD",
  "key21": "gfiLhQLozY7Ffbf4FTWCyS1uacyK1X4TeZWe3cqzm6wPr4RShKGgWcdpWEsiUFyjuL3WfFFwYVyabG9jRi4gXjE",
  "key22": "59w4niCXS67CSGF6ZwHDm7APWBjFKdayEr8R7kFwwLbt3ZxWepeSSfMAUAoQwa8Zj57ory558YPzUS7ZZGGnEacP",
  "key23": "rCqs8KxPTSYiPhX6urNP28bmvpnTpKG5UGHdTKxnWFFrecZze1VMP9SU93LK9A7RTWvbTfPxEK7yRwXLoSrpiMy",
  "key24": "QQrkabkQjjwzE1wQ8eW6Z4vpmD14MTrByrhzF1XErvLMYEnmu9RCjbkLTFsB8zvKNisEbnAZKLjq7JcF3iaMwTf",
  "key25": "52Ag52nzJDirpxf2GjchA9FnVURrbpvX8YZai9T4XWqqUhfSKvfCWU9Jg5T2FxsuYLpJGfBPvDCc4MVSQ4U7UhGo",
  "key26": "2iDbU8CBpaHyC58ZSPryBeVACtZXuzQFFebQLn6EJc6FvXbps8qsXayzZ2DGrVWcXxqcEWfyv9CkJCpeXYAknx4F",
  "key27": "1cokSkytRWd9ZDN2ZtKzgcRg9AE8x82SRzEARTLpzFETttNxAkuGYTcmUu3P2qHMyCFC53GBHrnKP4tvyQ573gv",
  "key28": "5mQ3ZVrpzTChp6u4Ku8Xy3dyQsWm7AU3P1zeQRaVAndDy3KG93Y8TkgsN2S9xDUt5VTmRsYqSK6WWrWgssj9JVi9",
  "key29": "GQ4p1HkdYXe1d1GYUTf4qrNXGSSUNCZ4aWHoqCaCbuF2oeRU5RR35qagvN82vfnGyqEQE24fY7tyWTCauHznHYG",
  "key30": "5SHyDioyR3KKJyuws1pP1RqCeEc7MqyS37mENog93cpeFLtuqSmS3smuNsy5KnspdzVV18mwz6FjThYwXfVwp17d",
  "key31": "tjSWGtiZS37PxDdcQ8PaBV73gUWX1XWX1GaEXD2JuLd7v5THWXQHpYE6YnVfMVVwuig88PhdVYDuy7j4c16KU5r",
  "key32": "5md8KhXw6Jjqrpw9r5RJgaJrQLZqvuNZesTqSEMsHpiVudmwzYRBqwC2d3L4TUKKBW5rbTE38TXrQQGib1afQ2aG",
  "key33": "26pwjFF2e7DSUsw2dAcTdAVqDaTYTNFxPCzmxszGAVyR6TwoDXRPyiidjtjyKVdSRznqofXL2HpZR1BEWk4V8fT8",
  "key34": "3EviCyw84Qs2vcXkkxxZ82jVwj5muwXdzApdncNHbxfNvz1C7GQnUetj7kFBWXTai2EDVhQsRdaAcAd9MUnxVVk6",
  "key35": "5HdrQHiiH7SiYc7Kb7pus7zMPjKj49txFwmwJGfmJ58aJLE4agHvNWATktRcU1tuRz9xbFJALu6zJH9Ve9xF6o7z",
  "key36": "4393CWuhiePDgqBsbPG1Z65VpxFrRkekcSqWtJvEa1TBXbi9ra5qpu6KPBBwKgBi6ysju2fBT6zXnDJcqmCCQBgJ",
  "key37": "4v6hHoM3wnxRVhRETmH3s4uSSJSNBzdMW7uM57MDVgqjumT4ZtKkf2p2inSkx8SRj24MiiYE9svk6hbbP4H2iskz",
  "key38": "5KEvU8wLcCLBqDGXdApdXPYMem1wLQTgmDenXUjr7rbvH31YSrEriysbEnfPCTcVGRmS6V8sCaADjbzZWJyAkZcX",
  "key39": "4jeBVK13GhEagtLrNWgVCXBtMX2hitewqCnGgaJ4VwvdY4BBkaVgK6YEDnYthCf4tq6ya51MejoJdaTjZNRehLo3",
  "key40": "4ge3yUZXS9Vx9pewKMmrsBvd6EX1sdKfqce5qT65LmAaY56Wsm5FoBiwMLDKNtwneXU56qikTcczLVzYUoRgY5po",
  "key41": "3MUhuGywBsbz9PMY2L7Psr1Dwy3zBTRFg36ZrsrReWRB6Zks1M12T6tiAYZMeiTybyesq9jv2HbmNrfvczMbui12",
  "key42": "4gsdSXDpQyGayZN3oExZ7GdiVc4CFoSKSskV4F5xyoQh2jyLESwhAZhQk3k9eeabofiGa8xrnVhCR9HQKwXD6eVg",
  "key43": "52zFj3yWfstBAWpPCKNL6BkBFe8FRwDkvavcBdxVywctca1KjFXS41i81BmA1DR5gCEbJQiYp4BRPzkUiSu1eS6K",
  "key44": "4EQXG55HiDsSefRzhfhM7Mi1pYNmuy2niJin1QHTXAUvuCDXsFQ9LqW4MjTJSjgat6Pstx8gi2AS3xY1h9bbPkyh",
  "key45": "5mZKCiBjNA9UZSuTLm1bcNBcAHzKeKRobGm27a4zT1HnHGfPUsocBrSAprvmTkUyTwitouRbjCeDYtwiEt3nKWx5",
  "key46": "2UkenAvWzMUNtKTKChEkg44EX2agM5mE3YzRUf9HfR1XUCpcdPqMrcG1DLLzJabNUsgY9uAkTPiA28wCPGh25jJw",
  "key47": "3ogDVVE8Vmh5U3WpFohRVN35XnYyZ4AfTDVoMk3mWvbuzFV2pv41i3n7vZG44UubY8u64jCK248cAekQQ4LDXC5K",
  "key48": "WNM68z9HJC9cRjnmZrWPNK92Rry8CdqekPTrAL22MJbV2Jbk6BQBhFsCdFS8Lgy9faWcRQhitBKFpnKYGU7LnAA",
  "key49": "5Dnp8b1NCamFNHfXb63jGxXjfAPize87wgs4c89KUZcmWwjfpimKu1c7wpYz4JJ8Xb6frnpCFuw26wS5VDGcBex6"
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
