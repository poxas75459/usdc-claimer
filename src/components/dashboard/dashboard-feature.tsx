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
    "54X4F6i19ohrRA4D1ZFMRg4DTFyCGveCFNYSXYjRBr3graX22VBWStJ1Vfq4gybrnVtCYUCmd1xSYYWg9Fbixw74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xKbgzVZvEhUptKEm9yKSR6cGaYomXjqKidjrWRm4zjdu2DqHbX6c5bDtkPK9nx3RhfNk9u3E5pHLi5h6r7psL7Q",
  "key1": "59ksrqR27pb7qHruzeQr5Bpt54kxNSdeQon29GUFTWT9wrJKKHXsrZGCiVhbVZvCjyzLVTwfsSmKuWEtpvGPt2LY",
  "key2": "bCdSGztvzbdLTyQbZbQwNEiZm492m2YxgEhiEUEQ694jzgQ4DKw85XBueC2UaBWxitTvCrKVq9WfyebaLViZ9vv",
  "key3": "4e5ua1ACUz9p9QAvV1UUwTQLZF84UW3NqWMQD36XubEs4wUj5YEtDNLtQX1NpWoGHoQt4fDkEraqow8Cp1avEJYt",
  "key4": "2hUvGW8ohQAG8aKGBq5uQCNpPUQxdZHTFbEky1U1d9Y1jYrfmbd8vVd4ts2DgammzobXwzFSRZad14hdS2Ewsmnh",
  "key5": "2eNAsLAc65f2TG8Vp8vTXyihVj3Rfw7KmdigC3HYi2y84KbRFsg7xxGZu9YjgjTXY3Dkav191kWoiWLbpJtNCwoG",
  "key6": "AmMMDidCdiTcj5TqjYbuvyo8Aji59BR6insBaMxbJJskqCSaZwG7y4fehwsQQNHRfgwCkARC4buWyUKj7rURybm",
  "key7": "4S8U3rqE3gkgAPTRpHNJyyshqp2fHAPkTJKd95BWViNqsJEdgQEx5vuioqmkiT1UUjyjf1CjrSyEy3x14jUqBheG",
  "key8": "3jMGFuzMm96CC3y7ypyLgAoSgRdq99fzswxYWWASjPRZXJvYnLncWQ8ZKVfHUz4383UtHf3p2nnad21fTKcM4Ckg",
  "key9": "UipbzzhDNAhcC4muMyQvXg2KVqc7CgGPTWzhXwidwsnDvjDyc1qirPs3UgSCk6bRez9cEFrGcF9WskY6n4cMFXy",
  "key10": "4fdLqhqfmV4GPHvtSFs5ngYX1MkC2iLP7EbkKbKR5nDeont7gV6AaGskRnQtuFyPQEhJxVKU2mwvsVjnwdHfmji1",
  "key11": "5GcBo1jKgZ1Vktg6Hip6FR1CEKAqDVSjkoEFMQ5yENbqMG8vLbvPQmv8Tj8u3dPWs7zfSt4PhnWfKGZCmjeAtTwC",
  "key12": "2znuozpEn77Rcf3j2Nb6aYYvDrfZfkSBiSfaedVDw2oQcSid1WiPWjAogt84Mt3pe7HRJpZR63Q5fJ1gJgGYXrtg",
  "key13": "43AcWvGXtHJYqthes9GbPXmEW6iFABGcgaF49zNLsJuxmtE8zARxaz18JW6Qr8p8GnoBTrpgHWA1GNeg4w4XGVah",
  "key14": "5BgH6qV9tT5qAFGJVpmMJQqbHcsWCzjYxvtjsxXFXfogiTd6of8cSv9R4tuiLaUTnMUCoWmb1MT4fbwaUpM7c7Z8",
  "key15": "4jxB531y1PNorQks2FFEfJCcAvfhKUxCJRzpTmvmt2fzh1vaeFapraZk6MGgAmTiQADWdsypacnzkvo3CpAdP1nM",
  "key16": "5ECN1qbsxm53Hwx3upFovcn7kyWt4zw8BnjBMnBiPmqYDGbi8Da3ay1io7cgebCZr59JnBEJH9ANTpnghB7VTq6v",
  "key17": "5LQVQRJ34KHVrVGi5aiTJ1UMzsy6Z7xyS5CNhhAS3rEmV5cAunCJ3q5zKYg8iqaqjWJaNABsPDAMwTpynn4rzuV7",
  "key18": "Dv57EkizqStMV3DfY96xRkWj1t96ZYYM8Z2MG3jnPTKjFB7RCPok4Uwd8hr2NuAEa4tevxjZM5XskfqCQD2asgG",
  "key19": "H5dtHn3tmEkP37Ljk67cHGrurCsbs5siRnHBegq6ZTKcu4fBSNaeYcKNCPrExMYm3LHwd2KYf17HGRkvTvardYv",
  "key20": "5K1PzHgWrEEt5uECQSSwaZTLjxcS5jHFCSydFUVob5JwxMKyKrC7gvdMQgKFHk633rXLqKM38PJpsnVqSaLBMnTP",
  "key21": "3JbrpurhMCigrFQe9epfg13QAMX5dGEMjseFgW4W8nUkSyxWLNDkXxVbMrYPupJjh9jxfazZF6kDXaMnBPGkwNYk",
  "key22": "327rFsrDk77si38n9utRxDWdaAQJnL2DbDkaEPSZmx5Hyj2DbbmUnDVmdxL3Tx7X12DfiFRAno4r7C7pEvK869mM",
  "key23": "3bZHhgH9i2c54ZZhC1s9ZrZqp2XcADwhmH1hcHe1bQNZRq1TtgXbagDsF5X4VWPqMqhT68oA9bds1EeidLjw4r4H",
  "key24": "n2R5aCdRebHrkSBvGTzo98ASTnwcEVKbxGjoUrdXa5FtxV2Gac1gsPetDPkG5NAYgoD5bCzzKZ89NpH2jrorUcP"
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
