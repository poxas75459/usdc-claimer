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
    "5pg8L8P71Qt31GHNQpA1ods4gcYVx3vmYs9G3cbBf4Ag1cHyHQowsms1DEpHH62XSf5vrNU2qUcbRMWQQFtrtrFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4WTkcHHNgammos9AA8gXp1szD1gztfg21JgtSeN26iy1mRKmPYAFCx2BTgtZ7EUdBvWeDxSxrgrQsk8CPGo51k",
  "key1": "4zLabdcDk1Re3fpNSTCqjBZ6CNXcfNnDWgRWnVJZXY3ZuMirgLDZku69j4EP4XFSUCeE6bexfwnBA11fUh9vPxma",
  "key2": "2LSdEpUa41gHpQnrAVTGuT3XyVKnHVtHKAVkhAb2S5gNptnRFARBsLsvuXcv5199xMtBdnyLD89CKzTPLgPviU6G",
  "key3": "2ZocuMQKSuwGrMys2RJZWxVYmrzNUAK5FcmUbUyUfNE3GZWT2Riy6gVREDQUaYjAr5ZLUHafsKggNJdhMpYidfcg",
  "key4": "39PiAHsmKtnrneQo56fe5c7TqNtFhpk7W3PhMSGaHoshg5rHo7SrscvHRJw7ZdWVdR6ThED2mqTmSiCqpTVDWb5z",
  "key5": "mttH6xAHUQrW3be8thCm6BVjZAi3psDWTG1Wf4rt4QzykEBuwbm4xXSi99bwEgoUhSp7iyZnNhen9pq3ZpP87yz",
  "key6": "2bjnQUVgsYF5F3kQCXXUe1FL6mh7X53XnVBQ6qwoX8fgJTcUXryjohsHEYeZxmKGuwq1Uk44LPE7CrLTyonuJZ9y",
  "key7": "3dpuofNM41RZxvxpbCBteiwCpHe3jTBxU9vgMAPKAu2DQUiGwYPkgyWArEXht47SSVPNV4bD9ZjCz7AHvTg7v2tU",
  "key8": "MQTdrCTCwxZY7uombjCHTe7ExkbpdBjm1xhxjCRvc1fNC1DpdyhbnS1EMMsugwenpJfdXQvmoNKkZxLqj1jt6Wh",
  "key9": "57RqWMbGFJnaeFQ9DyNci6xHCGq1cbFNEkzpviPBmxXpGH46nVbubcfmZ36WSNkwqe8T4T523C5ZLhhnK9pJ72iN",
  "key10": "48QNQ4xUuXNnU57ZvqCE1xR6H6UT2FhmuXC2vbjUwrZeyqLLEMcPR46BvSYHvwsRiVfUBuiQjrMWf7NacBShhGQo",
  "key11": "ED75Kh1DvbrY4q5ppQXrwU1iHNH9tgXcUempCdXoTxA1E5Z3W88jJY3Rwi3KfUzUiUG5nZf2Ttoc45BzKEvuymt",
  "key12": "2mQc5rFk4BqXqcwnvJ7mJJZ9G2zFdyE32ryDABSEw95KRZZkxvEX2No85HVV4R97UrsVqk34dFCcxwPCaMLdmy8H",
  "key13": "4qasELApEyoanSLBugUpNhdvny5Uyi4BdmkrkQQ8ktadg971yFWRQzJJgPq8LnJqvj1iw8t4nkARfXTgcksLRiQ1",
  "key14": "4ggF5WdeiDMEQcQz6mHprsFd562zw6uSuznzeAXcZ8WEWQ4EKKKywHt2N2cnCzr1kJ1fBzgR1vTrcjrfCfnPYsB9",
  "key15": "4Xdkytd3uKEvbpXHt7R8ELA6mAmGE4nzKyGbbmCVULK4LS6G2uDTqN37qTmP4fUYzhdBQNGpLLzF91qBGS91trdo",
  "key16": "31cRofJ6rRYW6JzS9xCvVNmhLsfJ7JpKxwWhKgLmhyDDDfHD9tSsCJDioyNwQz7bsJ8zpjFmbYSqeckTVR1RDsbP",
  "key17": "2UE2txd7ZBo8CNzE97UQGPb3GxNBetMRPLWGMBpc9zxUoJ93ZBfNTeTbmgGRrXcjKJH8mgthjs9K9voqFP99QEPo",
  "key18": "HAc44KD5vHx6XbGoaV4GGh2CbGKK19n1G8iNVcto1YGkuQ6UboLh91i3SWPiYtoFtsq27Z9mHCseVhf3zcNbGz6",
  "key19": "2Nm849RtfVx65uHqb6NToqw7smkaFsfanp8tSigX2H87eXiwZx2CJgGdHa5rx7QEVMUh61XzhGoWLXNjJbRZLM49",
  "key20": "3hkzcTFxh4n3QcBmBa8Eu2wynsGcZvpQcQ2i6F3Y6Meawv4dTw8Mrb3fayjVncKwoWyp5urwtC22vKPuM96XXjox",
  "key21": "2fdLqSvxW2gDkNa7amGuTzDK6pHXqFeR6EzGjcDAXmFx6QYuvwoxez7xtnteyuU6YsJvdiRBiohnYLKPFmZAgbgR",
  "key22": "3W4G6mvdyJ1AnfJUHJ6V7VVKhCLg6GuaSMg5mPgesvf9kgRaP9Yh6Wsz1cqt72Tifj9UnkuBR1oX16TJiknDc1RQ",
  "key23": "4rpbKFVvpsYVUWMgFjsRLRGd679yaxLxHEFmfg8JJF3CPwLzeZHRrytQmF8nYkezN3qgZjSccpRUQf6FDRfcGNBz",
  "key24": "3hunkLFM2LA14M5N8qMzSUBXxfpfBW3Xx58LTVyXBVRrauChZwa2rVayAKA278zSginSA2WaRp4hdMySnzXjZVkQ",
  "key25": "2Ab279Us9uS3cuCANo7aewJDF889jTJgKkwYE2NuayCQBwX5XDJL4z72goVpAwVEUTjAoZnU2FmZPUT8oNFAuYZV",
  "key26": "XELG6dqcnRBqeYQjSuecEi4gNRCzYfFBEFMjjEC6YsBq9ZqnfcwEFAx3xM1xSyeavqg1dBayvm28fVmR3eTqTK6"
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
