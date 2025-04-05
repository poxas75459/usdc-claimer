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
    "4VbvdDZiy6SayjP8BJ3zFWFVQ3KsbsAxFYsP235LYDGvdrXMy8tTypM3YV6kNJmk6bHhFBg8XqMnPtmFaC3ccXni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEw6ocg1zM2rCNNMFDLjT7H1aAKX3G7N4CN5zf4EXPxt3taJn1VBUPN5qJVyniLPPpcnrpsfEXc7XqPwVFL6AeH",
  "key1": "3AJqPfCU8fCcLnDeWqVYhZgW5N1WrReJeW18zesFSZotN6i5XuSQ9vjaqPu9MU7eSy5zZn7GyqujehvL3f4edRvk",
  "key2": "4UpWaTYZ9m37kqXYfEyQydGphiAPMqi29ijFDWBB6rsJb1tWVoEmBJB5V743T61nyUtr56BK8PX4ycRuPC13dpiX",
  "key3": "3xmGx1kZpAi2R5sLpKHZBfKfWP6MBT8AMxEgWTcJZ9QHm5iUb82zrmwH3F9PX4ZweWzmVkq2tM8poGjNipcL6mpD",
  "key4": "3QeR1kA1CJGnitHK9JYqtbBpZcLT7aippEDeUG9nss3vMeP49cbAcy3K7KR6HAqEvnpbf82aMbQ9F12Wyy6yMJLV",
  "key5": "4TxnsnVcfPpAXz5FYFkcR9ip7bEr8zKgCBTxy21tDTj22B8EJVckssp5zowzPGeEFR9VSfQF2xGfLK6Ueih5hJnf",
  "key6": "5odye9nSyFstzuSLFR7gf9YZNAaS2NQbM3ezCqvmLpaRm4FwxmSqWohpR9kVrojyHZeNoXyBqn4jiJ1qMwXQUNpk",
  "key7": "3X9JwjRaCndmRuwQMZJoTNFr6TAzE8vZ7UBgeaHHt92QUQHRV1LkmaRp1e72S2CxsdQeaH59ptxBQVAT2yPvUidM",
  "key8": "4D7D5H1E794gU8Tpf7L7YEJohRQHbbQmFc2M3UF93FTsLRvqhYUvF72SPKVmKoCtrgg1xtWnWC5yUc1zx4m245kb",
  "key9": "3AsgLwgdDPhhXzsLb6DjvztQfmjqYAawaPuU7qjVSZtdxoTHNwKz6au3LLJ1DkeswUik4y7YenS6LsjsaaMT3Z91",
  "key10": "5HutpWcd56V4rnzyPbeDVfDLjWiSmVPjFJP9TF9rBGypamrrn9vi5WjtBasFerUY97v9Gnieo3mdqqVuWUVEktr6",
  "key11": "29P5wLKkkjuqqBEdDTEpUSr71zHtneKiPeAd7T5ksf8uRGXbQ7wCbc6Rz8w92VAH7xjHndRNNFn3BAhyUJf9CTjJ",
  "key12": "aPZ25kYZkspQD6gH3GNFqYGzjKrgRirYRNtHSb1TgHsfjDnW5BjRqBegLJQVrH2DDS8TXhMpLpBRVra9RNijKxU",
  "key13": "4gWSSAuDgpWv9SufFxrstSnPuEKdjVtaYv3WEzNCHQ53Z9hRvWUHfDpLBkibc57UhhbQsfNa1KW9ZWzfvAFJEm2Q",
  "key14": "4PEwQDYyuG1iZiqqzFw96hFmN4ZTuS6sHvqtKFNvtd5K37bKYGHJak6HmHgkEM8d25kafMa6MnnhX3AiP548UJwG",
  "key15": "3EreEvThxUNRMvYVShhhka3z85CpN8T2NFaEcKMbXphzRVzdT36WZmeAW1HeFtyYwxTzA5QW3Y93nKV6FGkyED72",
  "key16": "3dVqsuz1qjadbkPS5kBCCB5tpShmqBqS3Gxs5NCoFquxrpqvoXvtYwbDTq3tAwKPaLy18venzFxy6oeijEpABZ3P",
  "key17": "36GwwZ1D2kP2rmtmZGccTS6M2rzycoJsZqRYLNMPyeU8BdbUqZZUEE3mLoYuQb7XF5o71mLZLWcKxjtyD7Li6iTX",
  "key18": "3dGEVpbt7rJZknS6Jdt44AjERUGpgR5HiggP3cavV4V1NcfGH2CBMzzMPWwyTf5oD5UQSS18yJM3BkhojKa3Uvns",
  "key19": "5Q4popngzR4mv1WBr9NTtVMjwWG3TFpFM2S3Cw3WxjKoECGY49oevqLFoULUuFFtYAxCmSdm9TZQN4bSxp84zDRt",
  "key20": "4Ny44dueQcT9aApmbSf2CqLhw6RLSvR2M2R1suMPesoMRAZD1ibQopoB77jw36TYAFvwzPR1CEUxTgideu36Zhdx",
  "key21": "39H3xzAXQwvbhb1khSX1VS9dL1L7fbjKF1mQDDk2zQVXXiTii6T8Sq49YVwJXYFXRocp73NM85NjgpqiYiNrpiXR",
  "key22": "3StfbYAqqRi6XvMqvGDBsnLvPvQwkFBqFmB4tV3PNiNbqjDDNhpJUC1XFLT9p4UFmPeeBxMYz8828rhcH26Qbdz8",
  "key23": "312M2CxYUPt35soVWckTtsZXR22AKywyGwaYZUEQUiQEigCEC5nvCxWi63p21rj13RuTSBYe4iaXJK1AwDYP6ZbE",
  "key24": "5pVYiQAM6gZfF5h8k6YRnhUisenjLxJsNN3phU9qBC8fDEpV5W7id1hQX4Kn88Ujp1DYyZVM6oByneJnfk3JqJrK",
  "key25": "zAxThCxCQLipmsjyboDAX5gsJ27enhDrjZyWJQz1sRsnS5QLuDqUdUmfsmMBqGv45KXQDUTibR545CZvFo8roeb",
  "key26": "43DK6n99upiQpXWuoatyAaYbxW5QQrL2NApb2VDG6UnUYb65X8XxQWhAfzywiLNbpnNciJ4AKSqzuKME6jLXQeby",
  "key27": "4NtjSDxVzRqJYHMS77asF7PXAhRKVhRNqjHYXTHhPxqmBpbuWyDqSaBvPssLirzUesqNwuJF4Xw1imroSbPHiKEr"
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
