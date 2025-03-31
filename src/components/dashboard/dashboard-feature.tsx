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
    "5VsxXbv4RhUL98AREvmVGxL7ytCS7c6xzeJiPZCLHds6KEJKBJqacZ7AibcqgvKhDZ4iqdH8sPUV2LDpFapwpqPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kg3of23g2yEjQp1Wvm1k4gB4ZA2yyHdY5zJcbimuK8BpYV9pH2GWSda4Uhu1vrLwiTEu6rwrAo47K9FPRY7xjm2",
  "key1": "5cpEncVbVJDa13HBmJua8VMmfNSXS2X5LQkQL6EWXCFA3k4SbjrDxfEa35Gdby9i5x8gdCF1otWjBYDb89F5Axvc",
  "key2": "62LuuTJYGXn3caetQ8YL4FvTZRp7PztSrJJTvpa8CzeMp4Y29BD3ProaVdZKDHJBeMwUGdmhnRmk1F6BL3EnKwMe",
  "key3": "cF29gvLTwkat7uzrd2x2sWDyNUxrsMypRxEWktePheV7zcfLFxdjwLSkrZ882M2yDV9skCvj7s3njAyFVWepmv3",
  "key4": "zXbGkSGy8S9VkeiDnAq85L2iHPWRwNhirVraCrc7ZkdaXELHE88zXFEuRqMUrvJNQ9ZAkEdDnkQ4d1Y1D3Yw4ag",
  "key5": "31rLt8wwHpemmHkTdGmyBDY1GZ3TBioPC5xJBUk2Pp554VTwVJ3Y79su9M5WgJTnV9KXqAFm4sqqDgVb6h6F5j6Z",
  "key6": "3mCuQ1kVRQUpL9cRKheq3EsLc8ASbuBotofyhsZQfN99RQYewfKPa36ATB1tLPk9wRjoqsAMHXXQ3s8rZRAGSivj",
  "key7": "F4k1cd5FcJZUEgTiamus1Nj9RwxrPPdGyTYbbcCCdUdC2q4qATdXfDSJFto3Mt2CHq5TaGBtz6JMMHZcnSrUA1q",
  "key8": "2JUKWiHqDB6fu7ukE2gHMV3cWDL2hY1wpvgNfT2ZTYD8N8muuS9wtxC3KLWFXd13M5NFUGzWAYCKi7xJ8o6tnx8B",
  "key9": "2BFzuJkwFEbQAS3yj5igikkR5HUR7ahkBDon5DLSzHJZLsHr2UWoC8AjWKnwdS7fX16sjdVsckMDrjudAD2Gv4T2",
  "key10": "56iT6SkhvVK9DqtJxTVhhHpGnAjS3XgCCpMBYyZ3an58KihJkB4xX9pJEhkrtPRLYSERPQrZVM5CWMma9E2FgqPg",
  "key11": "4m7vPhgudvjwWpuwiFQvFktr1DbzhDMbdx9UuW1Jc7ayC6sT8H4ojJ4ufCtfDmPnjZP7hHX8v19tPsWsT923yjzd",
  "key12": "5Vd8KBPubRETWrwB4EfgKT4Eg3DvwsiiepLvWbo5mCcW3LdH8Pg4xgpRVYFvoV2HbMwLqiZUmHPtSkKFpt84Gi5B",
  "key13": "2iVJoFuAbjEPnktSePF6dRSRa3SMRcBG31KUnBUrLkULVkhrvcMfMpwZAZ5JuboA2CL5jYPTy5doQYZCbkfD7czm",
  "key14": "43f6BeBf2eCFS4H3cSi2ZP4384n6QCwAZz3ve5jexQRLLt9khBQg4SvxAXoKu81xp1yoyENtEMn7PUxhgEsmvB5e",
  "key15": "uyPFpQcwkC8yoLAZLEGWVZ6cRc1sgMAGy12Ji1H5E7e9AmjDfNzcTqdVeho9oezKupuNt5ghf3ELFgCHYxzoM1a",
  "key16": "5vAEudr1qYkUWNDWmyBJTyv6UC2FRzt8UqnBXeEyyvYuD3AU67wB6muEswXsG22NaCLB8fiNCgCxYpUf98EntYq",
  "key17": "2e61jG1pePAJxApP81syPUgz9aMEhXoT6eyqbbKLYRMYfWakpJDmy19fb3GHtkNaR4VEUBddvhhGsmpmuZ4Kmwjx",
  "key18": "4SDJnQrH7RCcPitW7tRZCyBFjJLZPwxPTQwy47SFHgoH2ZWM95NaipvBWipuDQq4yFQiGRiMBhhWkiUfzSiCAxxq",
  "key19": "3N9kQ5vXkGbup3q3S2W7wVbtbzZsDEPNuy6qoue7QVk7yT6unQvehD11AsKvBoK6pA2unbqXtXQSfKiR1EhrToQh",
  "key20": "2DtcTuwYuZafn2aTc1iM1BoDERocCQ6tp4h79QmVixG9GcQxhGk7TFW2hgo3QYx1uqHiJX573kMjxjijWCuBfAXZ",
  "key21": "4zLmW2S76yJCCBzUkpp4y2qR1VGMgTootdKBMRBqq4h8PqZ35ZLSiZGv864dmFpLx4SiJeDuXL5YzrzUoKLho5zo",
  "key22": "rCuUudeELQ7njDEtty74v9KMrJBJHEfVWiiNxSMMMJj5kZp1zyH78mjkahinGDudxRsbgABPHJ2ZVvQe9FV9FPM",
  "key23": "2ZheaaxgByWUQis1jrJk4uJYw9K142siorYq5TkAoZzXvQEtQ665bBkGEtQ5WWxpvqgqeoAkhsGhS4bHHr3L8xqq",
  "key24": "5CP3WmUrMRKEw7pYtLDqxMjTHbVFzG3FLTHZzXWobagpigbVpgHnSbnL99oRP5srzC19t5x5zheNnYos17NWEz1o"
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
