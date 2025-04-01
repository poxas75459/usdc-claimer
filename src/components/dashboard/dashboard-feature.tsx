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
    "4FH5BZcQz1hbfZZ8tSn7Eq6ScE7VjFDgWqsSMKJJ7z7jk1xRJgs6saMnbaCvzwYzjNMPh9UiZWzqoHSdLxXfkufd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43d4KsqE5bBwZw8FhdFPtH9kzxEFjdw3UG9oBPhmcN111RFGss7gg5uVE1MhB9VgWbxdPxxHXDmibgEzw1Lms3B3",
  "key1": "5jtb2qvR5nwnziV5FyvWSsctDcTNqqUuMK4AxdpBFeNrQMmtFWtoyu7s97jAvU4gJWtHhp1hDY9KNfn4AoXjGwu2",
  "key2": "4DyTW5KqqMQQw6xk4sBFpmEakmjVJWtCbRA6aPzF9AWC8im4WwN8kyQrEouGec9dckEGAE9Xe4DtHdM8WtEtbfFD",
  "key3": "62aQAnPGanBgDZkRywGNPRFbWoF1f5deKiB7PvPunBZ4wX87ZwhDFf4JyCiChTJykzxLewBfGLJMXvAKnTmXdNWc",
  "key4": "656X2AuvXcmQac6Z98f5CNELu9EGGsAEFL9kmbqtvRrWqJp5EnnAQd2VGib2vktawPuAx7cJCPg5spSn5J6p7v25",
  "key5": "2Hy5CNp45QVVrESbQGvMsyCQq7DuXYf5fsscLvqAD9R1NYvSbKZGR3jis1tUryuQgLWDs1gTnr81ASXShFGrgup3",
  "key6": "3rhyhJdfoWX6z6YALhXTbGqYq9YGmVog9vSchtcsiMxv2abdCCeHXTSRgyzzpXPg81jg9Zv5neoQN6bPhtnpUfCs",
  "key7": "5rojBrDUzbDYWv3FBoai1oWoqjZhEkoqdjq6ww8RngGB7b97JChsVvvxkoBDpf8DmAtLUYDy49vANKb7Yh5AC2Bw",
  "key8": "XmGHZ8NJ7othqZiSpWardbEzyYNgVkFs6BeUPpoxJn36cJtSmk2Uezi3TtBHGDzwvcjdSJJ4KQ2RsPWfaEnQ1Yd",
  "key9": "526rFbebdb6FETGxzPswBfG1E3S9NddCbVfFDiNMovitbks9HcAe7GRZFRNMavqDq4pwgCUUpSVmznFaJVcuYbUE",
  "key10": "eAs5CagXwcJnRpphURUkjoR4XNGfzarFzPXQVYp6nUpGwwSL1dLpF9fJRfbsuLrsAereJSmNEvSNLS13WmSAdWL",
  "key11": "HKZfSSAAnAzVgStiXsnynrTEHvNyM5sTcpiXHUCCZBzNNkSeH39ctM2P8wzGkD3vxphcXTnoPWvf7AhMuMecbm1",
  "key12": "eSKYJ3QX2MwKdJiauT3Jufsnqww1LF86YE7gVujTPySMvEuuSrLTr6VhrAVMkjNzTjro4PJd3GxiTd3J3W1crpm",
  "key13": "62ZyXGawxipLmiMXkFeBsvkFoJcNXF25YK1CND7qZ2BBH6Uow42WTmLQpA3pYQ2RMGvGNrQ7Zhm29x3ShuxJ5oSE",
  "key14": "5Fbeo14aR9gEX6rsLBKExqszCWEWP5VnYCfGonsGWFqqmFZ1wMiUK947ZHRT9BWdL9b4Uub5CTShxXavnrD3RH6F",
  "key15": "4Uu3j96kxPVVkp3N9eBPCLAni4GkMBmHkBCU1a27A8SHbtYL1zkQCtuxSajWhQR2jKAZ82dCwmiYP9jMjie4ERKb",
  "key16": "63W6Bb7XnC14hr35ShXWjhanRosGiKkzDZs7WBuqMnqn36VcN4H741EZTutPBFusvLE1M4W1V8aj7rWE3oXYSsCS",
  "key17": "5keNh9GVPAtkRwZ6jZhiePLPfyvwpDD5eZoCxwhGT2Kz7eyCS3YGqwi5YpY7eBgo8XQ6Z8FdUqGiS5qmohgNMn87",
  "key18": "4pg883Gg7XoFm694d6ztzfZ9ZXGLEJQ1ydb1cSdr9AvLVPEPptHsHwovFqRHrNQ45Z6ydzwrH8hWQTF9jYRJkjF9",
  "key19": "411ZAr63knwnm6DCzAeYXFxTHFsFF8hprEuD17ku5r4WJPZpv66uT5FgSdthr1J2rhNfoRBE8Ji6jUTzGLQynivu",
  "key20": "4mCXYadmDa2rqRCRT2wDnXfTWysNvCi9yDYcGLh5VoayGpWszziYn9cetwVYgPSHZSU7xhC4LowMtC6yagiSi38w",
  "key21": "DRMTMPfudZWFi8z7JoqMCrMxzPPrrH9xTVKGYzDrfhnCxFuWHgLd2CcD28gvp7KWvqdMAoFcyadyjPFku38fNf4",
  "key22": "4WjgkTLEKnWfWU63bPTGLvXwYZWoc1UYYRDkHBxsvKsT3rMkc1zMHCJq6kHp3htBFBajktkcEoPRaphUzWyDRCEc",
  "key23": "3ZUCpGjaBD4wSSTQgY2FG6ApmXU9gTGoD6mtGEcXjTtyThzkEFRAW5USGs7Yvo71gT2Cwp39Nk2hrcL6qNvmSJKx",
  "key24": "61yZoGUYHPBaqob1LU48Rf6FPYDk8oXWxdqLanHX99U6TQHkJqAQbtWYxJFRWubhNk2uRffV5FsHTT5yPgoVxcuG",
  "key25": "5pXgv2P8M2z1SiH8jDuY5fCJHD89W9DaVnJewjkDwCY7ArxYxBrF39NnDnB4jrENs7uSSHVZM1uABv7JLqdx87Fj",
  "key26": "3mGFkJuFWc3RaapHVLJCLPB28C5rir1tt7LegftburXMS79QKVtDzu6MA12EDJXMvKDQHkSLdjQtYCEwUD9k6CG1",
  "key27": "5YdEBmXBKGWfdx1dCiKJdGUjiQLXR9ZuDPpo9XEqBPmha9Qq1gB3X3pPZFNN2UEXyhGnkU3MUiVaxpXBG8D3DY2z",
  "key28": "b2Pj82VUD39LDu2skb9cgbs8FYGrFvomsAuUFHUHDD6iJZcQyszpJKSKGudjNEbFVNWsnhL11zdLfVR8Du2o5TZ"
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
