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
    "2Ri36cud7Lq7T3sAVbf7qZGWU7LZ8eq9rcBUXateRZ8aqJuqq3EDVpNwmFa35GEpLHrbG1xH7zAUwJv876BMRExo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWH6LBZY59mCVd9SVDpfSxBkYtoMn9GXCSSwztQScN7UnoybNQRNwWjyc4KU5q1MdkDvtaRmjCfu9NvTnxd51qV",
  "key1": "56UVqqoJfpmJSgtmgosyr5muAuRUV8soaqGMApTRLbNeXZ7EmBBZY6zvqu8gMahARE9hYiiMSv8k99fx3B4Evmrv",
  "key2": "4uZsFpVD1cgYDtFsj8saRcpuKRY3tw82grcwAp4ssU8BNSzbZnZRaQTET6itmshaxevBnV5aAtu4dgaD9e4x1SND",
  "key3": "46xULxHx6VDQYAUBBNob7AHnVY7VRES3W8V4a2dXzQ371dSJxSxb9m9JHs48Dk6pBrkJT4tjQ89gdiy9UUbEskXv",
  "key4": "3HGgwmXSPNNLXrWVqCQmYjyuP3Mr8uwVbxWvAVfPVfnYCUxWtNBSetmrz7ZTr5UbbnNbQGpv8YGZSqTgfHeo6zyr",
  "key5": "ZnCB4Fgago1rmH3hyQcrLSLsR8YBmrYQ51rQ5DfK5rfBaXyykuQbh45kZqxRM3gDxMUZ9qkjph3LQSzwaqxCgu8",
  "key6": "5eo19Tzgf8k6BHNsuJ5MdTyQYB8Mu3mCLWdBkuM4TKyksRznUCRTDGuhCga1GJ3SU1uKYzSCLA7q6sGXMip3fEk5",
  "key7": "3BhkFDjHaU7K5tTD2dzbeXiCzDJTKynw27VY3GcdQtR9GAJYCdfWLBJJ4p4L1VV6muuXK6ne6orxvdTo47ZqjMM2",
  "key8": "Erzy483hCMwbFjyM2q2PMHfrieMmpfS3ewd57LSQ2Y4w7bjbk93LpgB4Mrf6uWHAfAci3zC95UeoxygwLNNxrzE",
  "key9": "3T8nnnc8fECxUi3kZjzKvBmNonWNMnxz74MzydXLd3cHUaadDbPHaCaNshVMK23xSKfe7Qin8BN62bvo77dmjmGF",
  "key10": "2cK45rap1c9Jhiz7rpve6GRyvVG5w8yC2Ri9aMsKyePoymamrnpNGTrief7CbhuPdKdLtVRwaFuiqNpt3WoA244S",
  "key11": "2QsRUSCKCShcjW5Xa8y5rLNYZeEVzgsjwkKpfAPKoT6eBWzoKCfQdoSfnTp4zvdzQs5B6gs2rPepVPu6Lvf1Uvm7",
  "key12": "J3qDLRhjoJZPuQpf2QkNA9WhpdiBcuAw9m1gUrxKcxJLxVdk6DWvGMTDV56xA6wPteHCcLfNmry2upb83MYawTD",
  "key13": "2HwHCkiPA3VTtpbyVQjDeHB3RxzoWAbLESeeDzGYFUKVD8PPVKsUEURCzomzLDou2RbAGumoxWKiioHV4PkcpmDX",
  "key14": "2MfcgWCz1PufzU9U8Z8tUxDZQRLPzngvT5AjANzMLmXT3bCraN6nccWfSReo4ZjcAVSxmH1NLgienhgs7CokwvAc",
  "key15": "44CZssGtvu5ctUhD5c3gCdnVMDHr6NUqiQcXXB3MMzrgFD5JLDbNLeBVpb5ZFLirZng4gAUyg2EuPutaPKT1GGs8",
  "key16": "55cS8KCk5Krgszfh6X1E3cyUHkefZkuVeHPMHoDbTVNGVLQcZV7uSTueprCot38GNpjds6dCFibH6fJVdu2CKRuR",
  "key17": "3eSTC4Am5PPzA5xe9jqPe1b7W9SqPyY63dGzarL3K3QRcABqiVHb6AZ6B6bXKpwpU2p28WBLsZRRKMX6RthWtW5J",
  "key18": "61RtQVWCWb7HfaE4ax5tZfabTGdF6E7yR4kDJyBSgdSFNf9KnSGyXXRhD1UEz5btGgEbdg52mECR7YumUGg1f8zz",
  "key19": "3gj7dEnqDEzwNRyXi2AKrwNf5dfqod6XYTtgqThVkrg83W8xhAMVCmMXGsDQSDxuPWheN6esUujF94hpAeobRMhB",
  "key20": "3gSLkqadqVoa7ozhMgmqSSQRBjqoqhFMWvKHMTY7tXH5B8Qvsqv3jEAmuarTb7tofTtGD9rHTxDtGsaWzZMQgCop",
  "key21": "5CpkapgZff2bhTzLs1HfjX8HoAxqTtttKDdxKjaya5jq9ST9KWyLNyYsk3WNr4H2BFQ5qPgQHr6Hfx9XSGCzTywS",
  "key22": "4jkRp8AgckfdVvSgFbmdgUMXobixqN87QTeUJq1tjyaciS3PGRuJEvh5GRArUc2xmsPZVWeT5ix6U3uadSsVF67C",
  "key23": "5rz4aSt42V9VfMZzGSXyiagbsYZhtAqHM8ZNPL5CbY61SA3sW5ELWh8SkHDuNitXdUByHAnzbXyMB1Etv6siLw3M",
  "key24": "5myg8L6m18eK9MJ1ENaTeMSMbPL7JS66UG3JoFwqho1rkbmSXPN8U6sQEzzKaxveFauYZYKS5edxUKtSBdfmqTj7",
  "key25": "4wJD21CehATjmQg85nbhdAZaA4QDp1taT4PTu69dR8qZeHHfL6E7njuVEPwC1ofv8RVAUEXKbWXvUdT5gSYF4JBx",
  "key26": "2e72oJyUAP6uhmLeu283HaApzug9w7oq8zfq4iDJtcVtuzWpmCANRpGyGPqBNt3YPyXSrTTVFTumPzSVLQh43ncs"
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
