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
    "3UEMDdYxsuV7xBzSDMVcXBMDiGgRu33Cv6LSsKHDNph4KaaVYraijXqaTGDtmyazp4hcXDxp48UpuD1YL7YVRorG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKZCCKSZKG5KmcjsaHVoPCbiXSMLC3USc9Ptv3rY7EVxLgvjuXznUe6YBzdDb8Up1WWHPe521kgc7gDnNkkdtnT",
  "key1": "4Vmcab8FCd6oid2Qg5Cy7eMhQtrrGCVBGtTCTit1qacZZ7yigvbvcus33muk25H9ginxe1wNtHHU1qGeB44VTtr8",
  "key2": "5R5J3p9qoNbwevvUdHewe7LAciXBzbpdsr9qmRqHagFTBroHkDMeYxDcJzpcvGxYt9HdyGZHDtnxTSSgw1kCvHWJ",
  "key3": "B49bGmWx816q4h8ABMrVa5qweiZYqxWWXuy5rKtKowaTT1dB3HyNm8HNggQBq6ainLjxmpEHgGjKApUEwZhiyvz",
  "key4": "GcMjvjZ1X6UxKpTffLLxyZaueQzrj4bgpxD7RDBYsxqy54nb4zWprDRwdp2u5Xt2ANmoefHKnxCaMzhBY6SrTnK",
  "key5": "4CAPCDPPfENi4dbqYWEXnpyzcF61XRz7t3YvWZurUrf81u4pahsGr55cBbfrwCv3NjbH6wY9CPELvcCfp5mVHoKg",
  "key6": "cAhADu8pT9xy3vw2AQq27NX3XzVPidEU24bt2oxUg91sDFdYKeQyWBJF7VXaVRnVtn8DQNBvUMYp5x6n72vaY6F",
  "key7": "2J96EMLGCSxgExiZcV7haBxqD8PnRcvPS2Y6oxErRWcB7diexdiJh6sMexay4EjM6En4RrfBVwuHayg2b9gbZ8rL",
  "key8": "2GHzKnYcRUieycJNdRvwxCBZmUc5RHJWx9crs5Y8u8XTJvY3tdpJodFBMeJHMRSeN1vHJUC9v9XSUbHXj9mAPc1F",
  "key9": "2Bt22sW9QrqkCFjTYvqZUwhJFoJz3zigwz72XF5kePhq9W3W38xcjLfAMytKW42845RpW9ELHf3uGJLbPGr6u8tW",
  "key10": "5y5J7DDzcipQ65ANYVAt2WqmFzmANCesjpc62QL42vkEtspHhnrnnRPZ6HecMkUQAvJU9oy5vR9Zue21K1aw9Z3W",
  "key11": "2iJPmxY2B28t2VGNxFoB9cF7a7ek9fFE5hpHLgWDzFfEUV1f6q5mDHX2RByT9vVhhzMB1PAchRwWNJRgPWbuKSDY",
  "key12": "3mqewWqh2yY35NKdofZ3Nqkfv1ginjynDkvXA5YU5No1cteqizfrHD7Q9xDECpTZX19pdb4g8mkFmEdgvEbxtRDd",
  "key13": "2q8McSzr8DU91owQ6kHwXFWEyidAMFuAK5pWVk9vJNjNSWUGeH839zhpxGhLdPEb2iiqTNhQr93TjLhk1G4o2hEN",
  "key14": "3nduCc7pr4izNU2An6xhVc1mvneUi5XwZHm3TqTZJzQX48LQdFj5CemrzHZTBrap2zCqhqBEaYhiZTo9z2teGHXH",
  "key15": "3tk8CnLUdqw4pJxDWYdnoh8ZueLz5MSWeB3ri8uqniQ8HB573LoXJ55ib1W3X7NwvrEC1bA18SmDGhuXSr3ffBDf",
  "key16": "AsBKzpwMwCtYxzS3jgpDcaY7exFfQumeFSYVx2jC7YpVggxPTtSPDi9VWPWLCrEDrbWMTRuphjKZr8trmkKzKsj",
  "key17": "62CPM5hnQuezJduZLJdng81ESz9Niqe93uThQeqBMjn2gT59Z5tfQosA4WR7E8WSMTtf9Tp1eB2gMCr74E5wAsAG",
  "key18": "3uuhQzNXam2kzgeFF42WHiv3tn49ZL7uApkU3Sjbuwvjx6uvd1VAwdQWcLgbCKbVCMJDKEXvWZWUcMrg5is1ezGc",
  "key19": "5AYhQZYpBeM5NKt1yKb7mTxtuEgyyGYaYpB1XaLqHXN6fTXDCCqkvGZQeeCajGiTrE7PKpSeSRXx7JAzRpMRaXLn",
  "key20": "4eVXaDH14yDYy9nSoJsHFVpgvRGSMe6Vx1A8rRDeWmCyFjge1bnyJzvAp9YuFdyrJsWbb87FyQZg3yFnyt9mXkC8",
  "key21": "3vxVaRDR9N78o1HVinN9Axd31p84nryPkTnt2Asn6E6EnrQezWKWmSGvjc8pfgzpugWHNm1Yjiwz1F7wkeeehCpT",
  "key22": "XYxek7mJsiMayAGnzuK7itvpd6521ZcL5E7SjmYJiUxVnwTqJigBfEeJpegq4Q4tNNkfK94aCKqTe6eZKE3fcr6",
  "key23": "B8xD5fmkZGgqUcPtPnW4QRuo4Zq4KRBPcDoFsappctTMNjTp4RkTDBbjeUErehWiTPR5b4AVP2GDMUFVZfWs51G",
  "key24": "32XzW94kJaUYxYb8ysDvExBnYAAMnfyR4ZiKg5PScbGtKwaV4HyabFBndvJbqd7wb5dpoBPkw56wAT7N1366bbed"
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
