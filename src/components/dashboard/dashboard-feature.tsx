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
    "ohu7SRswB4quPTxd2fPHHLUYmxJigaVL3y7LJHrR7ZpoXvWkx2vanCdiQhiHL4vBAdx7oeDYRUtErNeEyhVU2ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bi14RmEBVN5fLcKtXRWmHvadBLgCu8Q2zqqMjHXbYTG7mfBtq1E9DKT6TgzGmBQAfWL4PRCDQ1zwYquHAUPeGRK",
  "key1": "2iiU7V9irCHcAe6LJ7xLN28wy4ki5CoDLEyXLjVDPdPx6JitnivTDYYyHkJYwzB9vVjrhA1oNaQ1jU3iasrWCfeL",
  "key2": "2dnfAuXjH9itzLN4tAReHxGyFGgKnded4PtQMaLtGq5XCBGeejWTJa5mEep3m8J4zAdc8m62zbKxykcCio1D67zr",
  "key3": "2hABv51XKVpT68sy38HqNRxWxaAMc14eWcSdS4dE2s4QF7DUwfqDv66WMBpBRzq8QMpkphzhi6pEA6dfbrQmuBkk",
  "key4": "53nX8HYBqp5cqwrThqkeNS15d8KnM9greNKCiss1P7wyyd2TRcf3T4GqYqSHKb8c9jeSCL8pLH5RQ5u6A1cXkov1",
  "key5": "3jvXuHPYxWC2TcFShRqAoa5c5VPtJZubGN1AhB5EVdwe1Rji3odewGcr7xBzsXbMZ76fVyNaehcAm5t16T6R7Vbz",
  "key6": "2RM16sTjA7Y2EMhourwjedHRmKiMUygQ4zugCquorAQR3hx3K8mokTiRsaj3ZAMnnmqk3PY9PfAiJMSmpNR8ksQ6",
  "key7": "2QjUP4zaMijV1QVrHhWXWQsMUV7scTh5nE64Bk37GA1vHoYr2Fdnz1RfKRHVagY82oyFhcDVRfP48tAiyPCSo5ja",
  "key8": "2vdrRJKZLzNiBctjxSmFjAM8kiAvvGaw44hADpjtXg9hd5u2R2hKdTFbY3ESWe5tQbR2YNMpTAVSNeVXD6B86Bcg",
  "key9": "4VdruMLNBf2QjRCZKhBV7pTxdt4V5GgkiPdNSpbeAt2bLF7cVnPSdkJaiC5Rx9dUv2MaCsTUphqa4ur4faNGiVxz",
  "key10": "64RMC4uBUUuPcJGNfF5DDXfbDsj2VDryJRaKPPNKYpdKHADVbcDYRAqhsJifxS63d67XNcRDkA5Lrn6Ty6sd3ADG",
  "key11": "3WwfC5tsK4HfW5GEN9ppuhJPK7q4XoUNHQimRT6nupHPm5yegu3buXpQRp8AeXqQQHXvNhSVMuCwKU9RCnuwpmZ",
  "key12": "28BBPpFjbvrjT8eYeovjFgJC8sCtzN8v7abN6dYDuj1jhWvk3RrpuXYkWJuQRjVp9EcRevrKcDH658qeZQ44oGD2",
  "key13": "ZvznYfNEiMtey4XvfydXngNd5MzvZUygsJYGX8ofLAAW3bhfDn66Y1buQzNihacD1rFhdzprcS3vQEJhzph9Esg",
  "key14": "StbTbi5C8FARNTdwTjbCHit53eu6BRz5UFgC66C6PLzksjimFYpkzQjZ778vWqvGP65s43DSQE7n7k2tGNmr1XB",
  "key15": "3hxCxRwC2HmdpQyMiKBt3mVyCBY1HKe54ZRVXVHYjYkjFUJdmS8gwemiFnU2ZDWLWQEuk4Eea1odoeMwaqusiY3S",
  "key16": "5zZpFCmoMTo9cu5m6YH2Gpg37JLfdJ7nBmqk7K8vVqo2pyrWoLLUyWX373BiKWXSm3wXjeSr3FXNpr63Vp3hXzSS",
  "key17": "ha6TP2dVtak9KXPNw1Kz7dbGGNFgacB3Wn9Y4nhwjKzzRighstpCFtcqZX15z6BxLYskyHysFWkvDixPFvQeEYN",
  "key18": "Kqijo3S76TPGbqEj3MPNw5f3S7aAQZTEb2NfxmoCr7aQqnrt9c4i9jfwKkRoUvS1UWQ1iXaBTgkyQJaM3xUqBfC",
  "key19": "5Pz5E4FwTxTSRXUSkFfxAmqpzGr3wpPqgV9vq5r4chAeBcZXeQ1mwuu1FUwAdkhJUzaDB2KDiomKEaMmNCxbXw5q",
  "key20": "55g6itrDSzaBs9gNLksv7faYZxjRdPjcuaup76PuBd93NjdK11YzbGLCqXbECtYwXWuMsDv9uBp2sxsxPpmdUh2A",
  "key21": "3RAe2gGgThPjgz5FvRGTptTTinbc7mxWxpjdsDCZAvz6cHNp32cABiqfgnyHXfg4kGMBfiT1FCcGHosFgmdk3XQg",
  "key22": "4mbaV6mZ1vXu4pv5X3Tw6P5ncrouWfs6Njekr1RPSEcFruHp78BM5QD68V8t7AFm7xYXFHEpEv2R2EowNj8FBKNV",
  "key23": "4DFcxEBaHCL1PJy6H1GsH21hGqGgEqEwtUWwbrDU7BbGtUbyxUt39YBBJ65EDsKJs7Ybz2uJ9zfoaXTLyuHuoAwR",
  "key24": "5GwHt2R55hqoyzENuyVwfNYYoMazHB52eZjjWYkWBcyyycSxFVb2envD3dMypTy1PA4ZKudma7GZ3qKSXmYEVxRw",
  "key25": "3NKpBwNDaTa732DF8YfHea6gxghRanzugRp5YwN3QVMCKZL4caHLaRrGnZo1JYmso9SUYik3yo4vzQPcHPErjNRj",
  "key26": "jd6e7xumWUMHQWPw76mYGmmymAvvQ8ypgrqCMX6Nd2DqSNtWyC3QgTxJ9en9tKGcfoWfxYAardhdVJUDw45LXVw",
  "key27": "5nxGdgJvLPESPDsbVthXa2f8MGevSFmczGnbUiXAaJFeMeyWYdQD2NCAG1wfMUv5jXkbbE41NrozfuxsWop6qeFE",
  "key28": "367KDQCnhgKSbDxQijE1QA4dAAGGe7DceRgng47vAqKhpsVS7jR8KavRibhsKFfu7Hq4WA2Mb23gh6ogZd58cenu",
  "key29": "4D5t5qC2tH45NEeCRdNAUcDf9h1cd6rBcWtCEQbkNYZnbzDiyxzwUjZ3iz9di117iBDj9T9cCHE4f3TwbMsF1eE5",
  "key30": "54E1tdvheQ243oMG4qBxjggL9qFARaUDnjt8T8SHNYiESihqkRwYHaXu4EJy7VcUiqFcUEJ2nKyaveYBvDwi2VsE",
  "key31": "5SsG9TsyqXU8PyWRSRWm5eM9uiZUfFp4da4a8ibUjJ7dUP1R1jk4xDHzboN6UU1PkX26JradzQZGsaQvFytuhHJk"
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
