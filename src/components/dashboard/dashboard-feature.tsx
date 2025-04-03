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
    "2qqgAfE8fJbRfALthhCARvA7V73wZuiRnrDdg3oWQSxVpftu2W1kzhE83vkCNqHaqC8fessDLkN3XxXEC1aNnXxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHCdzSei2K5MrpfrP88rEMpgM3sAKbWQo29UcBXScEsrMpgD1FK58XFiYFoqvXPdFCEdL5ToKmeEA4x7vZVghVk",
  "key1": "5rXdsJgaffHg5yTLnrF7LZdzAW11CHaaoDUFuo1Q4T4sbrFgMqHF7M426YFjkpAhNspLcCJM1xe4cHU2idNUFpZj",
  "key2": "65VaZkPjAcC84tWrGFQtDNsmagW8JJWbEXyShNGshkw5Lqxi5aRCY6qWX1DoMeAJyoxrHbpGiiQeB5cgwhaij7F",
  "key3": "4YzaEiJDS8a7yo16fjSQbPNHAPCLfxMXAUJ7NU3roiDE8oscxwbaos5NCH3M2UA91n5VRy8BykcVSeSAYMZEUdn1",
  "key4": "5gGyEpML1PkRKfTeAAvKyCBA35q8ZM5fc4V4vHzk7nE1JnRSj6tiSxRQ2GJ8RGVCPHs8hvQFvKuA93qXEiQ3wvwc",
  "key5": "4Bmb59GHbJTZ2CEqHHwLQszvoRWNvuMmtgkPbQV1Cua75zzYGK1KHmQvzidW5BS649dizdtmzQSwG8oCcQhuq2bv",
  "key6": "4RzcdbRhRQ3k8DpBoLmzHXnTCwwMwXP9mjjoqtA1CatYHDk5dgne3RR3rNx6XMMgmZf2vpyN9tcvR7FmQRkJFrw4",
  "key7": "4ZWKX377Y2P1T1ewerySK2RRUudpeN5UheijsHSFNm3ZShwNe2Mtpn7oKRuSf1suTSN3STqXp6outti2FusETUNS",
  "key8": "3dYv6sjH6wPHWefakMEznACsJ8QBR1hfxWA1UbbkbW6tzSDBdZZREiuyc6EdSaBTMipuznpz7NVri1XmmwM7gmu6",
  "key9": "HhtQwjRaXxnifc2JvaWYgSoAinspvJ1CdgxBNfrad4RXq2aK4RKDgAgFcxkXHoUkjsKc91qbBNdp459mGpbA9q5",
  "key10": "5Yk8wJUdh4ayJykLwyntBCiX7aiLtLZCKbC31fcztHEftyksG4B8Vm5M8zpUvujDH4zAM2zaSccnC77XDFBMg6Mr",
  "key11": "5cCTai5n6YUUvkShA2BXbQXqkSx36Ainofb14Vq3PmGZmRDJxXEmNMXVAJo8VmjdtXPweYxiTPqh2xWZfYTUpK6U",
  "key12": "447iRXoPwWfoHxFWob7sMC7L3MU4Fu88qH3AxDNtbc91cpsye5FD8fQzCYEWT6XcGtcRNvgsmAAbyq5dmmfcP8pE",
  "key13": "4fBBykBhyJkUYUcipeEs8oCY3kRxb5Byhr2c6XzPgH81XrW3gAbQRdVz17LzsBShpeXyp3RMntNCkKnPPN9Lmmue",
  "key14": "2fcGkzpfLUhZcbQ3eiaBQN1aMP5n23Pci6EEMLcu5GgvRfoVPRH49YR1pU7QinoABsPP6z49Cg451uwKax1qpwSk",
  "key15": "ymhxEuNufEEY8S9FnkwVYaPz53ac2ydvUXZacCtpSMaRLptRPWxpg6i2x7UZ2YH1nhQWZ62j29TGQD2WAa1YvHF",
  "key16": "5a9FGdPxq5NMDWV5WtctiNNgNDRnunwi7j6mMoSdTQgcucKJHfi9e5KkBLeetwxaduqfu28Z4HZ3fM5fmZjguuM1",
  "key17": "2mNZxuoyv1snf7CpRe6CkZuCB7AtVVGaMKWwtFuGVVyW6YLKH2U7deNZK5Aktz5u6YoNeL4RL7u5EyvChjLeBWyr",
  "key18": "2q67YfiYhRH6Yje5DJkp65RxrVB1GCQwpBh73V8B4EqzqiFnPvP2uFrPPTC5gUEVdeMYNpft3gpLKL3aP8T7q32",
  "key19": "2WHEPjyvvSunSvUkHh9iCKficKHEtUneVNhv6JsnM9XU7A3HHfaML72Amn3M3LZ8qujR3n1RALA2cZ86PfE38EQP",
  "key20": "4pcG12dtvtxLNnnsXsMdqAPcLksQiCyM4YA32EQizNjXmjvcwBBV4gvru9hQS9w31QuPcwMdijMKvtkKAMSA9Mkm",
  "key21": "4VEdwC14eqzdjBjWzktGzyzg6Xp7z7xRifPEF92Ay1kWoakmsHF5445PQ8FhYuw1fYBWPbozc3sXVgfwVBbJREgd",
  "key22": "2QPhkvPAni6pPgiKvyY3e1uhshtFyA2J83Lq4HxtY34fAHYL3CxZAzR2W9gY7QTvYdaKuTK3XKYtCsCmBsVBBQjx",
  "key23": "2YzaE8618Y5kNmuBHVChZ26GamUPJVx9jvuG34Wn2CRJPUEA8SuqM5igL3QyHvz35yFaAbQtAFKYhx1yuyTDGkSC",
  "key24": "3pbzpaVEJWMqE74MzUeh9gZqyTFkLsQZQRGDB6SXXCgFjVLDrAhYy69hYRTb7hrPB9ZEUhXcaBFyoo2Zy3zEQ2xc",
  "key25": "3ya8CHCsrsSGDs2fkreW1zFR9RpkXArJYX2tfK1vNp23ymmgSmFDnaVxM3iwnVu5VSfTb7Gv8HLpanvEcNE1rS8t",
  "key26": "4i7843KNrVkb2CdW5fPg2o4WGyMeV9nvwGwfPtknSusRimfhBT4GDNbj4VMrR4R6o91YYCBH12Vsh2rzNV8DTc3W",
  "key27": "4bpq8b6LQFY3pRSrSt6fpsw9qZhLgoKFpkLUYvLDYE5nPaN3YF61hZBL8jAcgAe7UzuvNjzpye2EDbnTy2WdzbKS",
  "key28": "3Q8toWS2v4NCwfGnCx9uU2EaExE9LCY2oazXCMzPqVEfrtpw1VDnuq1KaSVoe82aSNxJYzvRFtkomcYCNwXERARd",
  "key29": "2Mc5wmdqE4DePFKEWEcdAeBV1nXMqmy6bzx8n95HhBRrXTHzVyM1JLdXTPUWRE46awbz6G3o59HKVp3c1nuK66ns",
  "key30": "N2dGptGZKGojt9rTdgAz1CpFRtcJPccf71W2EMvUgWqgauqAYKAj1gCEVv8PUn2FpYzb6D7HHYqW5vcbnc5qHga",
  "key31": "4ZiK5jH3LNAjEsxyn79CeyEtQ2A1fB2FyFMta86MExBsSYRfvvJPerm66DcvoHPJWh8LoEVr1Ua2QSmxGp6MfpvU"
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
