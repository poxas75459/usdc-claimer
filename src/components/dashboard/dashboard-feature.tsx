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
    "bm1oUPU8HSCXjqfxqBc5harWX1V1xACAPCtpyNSP5JQ11cZuLV6jSiPfRFWprN6LConngYnLrPoKxrqi5uLdZcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmjD4BfxUygsavrebJN8xJA4CqaxCSCX78CGJ5SX4S5zTBV4msxxvcPC91AprphetqgG8cwxMsAAzWqsPuVZBK8",
  "key1": "5QwZjfMPsMxK2c5cGJ1tCGAUyqN5jtjrgoChXeZEjP9xJxHZybVNhzUDVFWBg588Q7DtNx4S5XionhTFEdtRhELp",
  "key2": "516R97ZGdaLYWiUDj9BAaptqUo66TnELGww2zyjuQ6841V1xJnjY9RT6PSVuADEcaMquyyqUNJPLefsc9pwFDQq6",
  "key3": "xVwxcyD1HuZai2MKDtL8QB3vZN7Cd2tbJRDSmqrSLSTLXjj9TvGurxcpytH76kNK5Rqicnz2UhL7C2B1oNFobgB",
  "key4": "5UbvTTMV55im2P5abyin1Kammv74eQoYvygpJq6wGiN9SnMENb7jTjn8uCkBFSgmGJKJdsJYaGXA36NUUfPt7HmK",
  "key5": "3ThnvC33AHN4XLWXBQ7LK6BwYkMDq6sr1uzss3ya4tQm4gSGUcv1vxd3nPNebrQdyssyB95Ym3TH9xNjuYYrzdYA",
  "key6": "YiZfWVrzx9AGUWZyb17BqM9kzRcxLKAEz7iTergVMQchtKZGMQPFoy5rTxHxN3dTMtgAnBx9yzHJkLDY27XYhQ4",
  "key7": "4Aa3VBniubxHcCxrtRXjBb1Jo6ndGsB3zYLro6isEfguGF49QQwTnR3Safm3vuZxufuNBWF384UM2eKTCCgrUNn1",
  "key8": "5BLdoejyuWJoovKSRnyk1cV3HXRnpoYpB2T9afornsWPb24KcVzUm2hMVnvzLsQau2xB2kRbDYefp4ZBijts8KWg",
  "key9": "3SpTbGfkv3Vk7Umkm9dzFJhhGRTqUg2V7Ern3gg2nFXE61huXPSmCkanpYZ9CzEyxyqEvhtSsJY9hsFjBcbnnr5a",
  "key10": "484zxGHoCYPYB7sBGYjeHVQjrsitZSQ9g8F7BxcAEg8pEvJiztVia91dh54wdZL6FScfyteDQL9iyEkHGRMCJp2o",
  "key11": "4WFtAcQaRGkuSMFarNU2PsztivjX2ZDZMFrJnfpib1DsJKBVsLCWHcXG1rHpLyoWj5v4RCq8Ar15ZgdpVDDJVc2W",
  "key12": "5Y1VX1wwfz1XsGCwLNh6xMjDK9NRAeY88SSTpzidA4RM2RsmYvLWbG9VibiGpNcFQvucjPwC7ysqgQirCjzHmhK9",
  "key13": "44u9BWBN2q3Bd6iJjZupPdh5a4gAHGbEfAYMpx3GN5RdH1Ji3b3kTajbFwTetpMBFu1y6g1YHmozKuGi32nDTuDy",
  "key14": "2sCD2Kzx6KTwZvzURSJ4dR82RX82QkQhN6ogJ5KtSCRLZJLs5z9pvRBRuXgkZZp5M7nxJHWR9UqFcVqyY34cTXuR",
  "key15": "5bq9wZYiV2GCZte7sLuEqWGyJiVwTFndH36QYuZVZwDdDTjr8qMsKMSAJ9ASAX3pF23crFV8FX6bfPrz1FLzgwHf",
  "key16": "DN2wr4Y8nbLpohbU2xZqZsx1d8Gyat6djpMdYnNsCyC1ngrXQjCVLW44r1pBxV2vV4XnTK7SpvFaJBkYGT9knFg",
  "key17": "4C9BkT2SEVGCWC6kUowToaCF639XSPb7ZrLAnHkdcpmQ7pNQaFE2PReJAKPLVPwqezDeGuQpjkR6GHLihgBztGZy",
  "key18": "4zAgDRiWvBdFK6HNdJBSFQnTUTc5rfs3gSJd4t8zNMjeBMQXfPs4vDPRLRW8NG1BHwrUNR2eJ7pAXSX4J2CfFskf",
  "key19": "3ZRx1FV2obEVGToEvJb8hpyUXTddSdQwRLxcqqpr6PGFNXPhHkastTxwv7WqMm8rsYssG4pqGQYVQ1ou379BLefR",
  "key20": "44rHqj7S2FJH64JHSYQCiWQJxvmgdZGHjKJdWi5DbrysiaQWep6x1V977oN8cYmA3WbQC76uU1gHZwM6GJpGUk3F",
  "key21": "5DMjWopjaSBhfg4qtrjeELnGEwLy3UHipJKXHN1qECEvpV7GAcRnX8hS44BFbPC2DhyzUYoxnsfJJC4TzozsN2jf",
  "key22": "3ttgAhY5ttuwN5ydxvSesqAHR5rSXWkDS2cwDQjuBW7k5Pz84g7PG2djz39pVWJbSfXxcu3KAPYqKGLT4d84XXDR",
  "key23": "5JrtnsNqv1NceHzqMvAikiRrVotLYkYHsDsgjCjsDXGzowovbkwcCcxL1X15HHowfShMa29yGXmvy4jmvRyTifS1",
  "key24": "5QLZsNYrEQSXz245yVZauXW1dn63b26g5Cy66rRM8wYR5gqbJW8Xp8tM4HbHwzLRigXLPzgn6Wwn1yvXezRwLDZH",
  "key25": "3H7CEMVLwZupj91WAHTeqkpDFkDrBLLNNxE5fLcbXgBLjLxmxP8HdPz3zYKDv9RdnyjFWyNKF5LFekHDWKM2aHdF",
  "key26": "2C71HvWj3rTJxWn6sxyLeXXM3aB26ZFn3yjYbBaTN2WoJ444514BLGjjsyB9F824Z7BEGxPrtJjwjHDhTtn6xy3P",
  "key27": "Fyf5ZvCyDkeNjbHNtrjCt8mqAAcMUUn3VC2gsAoH5PdSyw2aYs6m9rgLrWTURPAPMCoyTAtoetCxe87sTuGUU6Z",
  "key28": "2WQT3wD7GGd694BCa18YLrLzyoBgUGVkDL4sLX84N3Q6Qn3TDCehbN1zvMmudEXsfsRGLHi6RAsShMqzu1Aq3ToX",
  "key29": "42yiKnmpn18Po3gchhFDRaGjSP2qiENipKrMX7PD7ZgRtAViUVWiXmKtETR8TCQB3Gm5ihFQXuWgdMRtzaTcTNkZ",
  "key30": "4MvRPMR7CiLBNGXzr2iQiXnWuZx464ffkhKVUeTxNpDLnNY9ahVkRTrkEvLSDdMm8MDhbwdLHcnzpoXRi5HPHBJs",
  "key31": "55Yh88kRjca6V5BXViDPR5ajLmyREtMuc5rUQBbjpR9thq44doZ2sCv9rNnvHcyUrs1cGKuwbjSG5sD8aWF7Qn6g",
  "key32": "5y88fNgUAashDWZ1eCmprya5EartKj9RWWRZz3TwNupXhfhF486EEU8RXnLasMLQrzA2CkfN1zhTbCXKaDN8bFp5",
  "key33": "385JFU1f6AkThGy4x3HCCNerF3za9hg4EH4vTMrfTKoMmXPjDqSFkeDTzcYQ9oNLuiEtwmCsVUgssdQ38pNgJe8y",
  "key34": "38UaRpEa4Gr1RNQjsYet1ybr5tKHwBdN5qXPgBpv9FXXMstGGiqdbktdmxoxLJeMxtk3AL3vV44eyG7vxfRS7ss8",
  "key35": "4Uzbw29WvdSnMRMm1aD3tygKwvCo6qyNNxTuRZLyShBf5JkXQxSstST9oSNMZZWzALvHLqywf2TW1GjAMr3mMAAq"
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
