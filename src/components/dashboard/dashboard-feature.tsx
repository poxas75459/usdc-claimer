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
    "3LJFwJ1pTEs2xCHwVpMSdxCKY8Gf37uWjsRU2w9sLMTAdpHzADZyCRmP6MS8sNbG27xoXqRpo4uanhr8Yhq8xYiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLEUbwtFheUDHFAr32J9s364VRe1RTN2jXBKrAQM61pqfvQ9E4VLciLeQBJdibMsK5VhQJgfwopZoKCCV1iXSuw",
  "key1": "63ZapDsuqcG48ne7rzTMaY7PJo9pRk26mHyin8PhfVm9G6jJtxt9WGHsJjiCYND5jNtaTgaEwKM6iwnBVChwZagC",
  "key2": "2eEt8cNUXL5MSkVAX3vBhYYfn3n6DKxmbUeXFz2GAxrz6rZLPdHUWxf1acq4YJR6oeCgRkiYgiCc2UK8KAWo7God",
  "key3": "4vKnaGf6KB9qusMxSfAK4E1ePUi1iRtbkgKKZ4D5RpANxbe1mM2148TZfqMWk8dA4bk6UjknWUUy6MVCq7HnieaF",
  "key4": "4Py1GEgMX8u6y9F58WLoCBG7JML9JkmnQeUPSSk7NrMtrnLuViRumAQVigAz72hHrxyA2b1pCc1qqYwJSe6EgHTy",
  "key5": "bQGCcCqWHxZkUcpPwX195Z2KoMv97YGhyV1kV6q8pFm2pvdX1tGeFQFT4s1Q13QUAqxzdZhouVXUGTNmzTYqhhr",
  "key6": "wmBgAoDTh451Nq65TbFruSZ23WxN7Dd8e1pTQHq5TymoJxee22YqjHX4pnhvu2oNHyCoiiNFsTsmdcknjBgjXHF",
  "key7": "4f2FcPwiWek53YmNhmmQuUjfLpW6ASTrT37NcPkJzjqEdRDmr2voEqQLzkUWsZ96wDTtaAguCsoNYUjDf7xQmQ1K",
  "key8": "qhZMBxCd6oBUcVyVBKAwGzsbqLBVkWigwztMxJGK3bhTxihVTdRWAKho1NsksmoPmEMtQHP7bwNhssyEH4W8FL6",
  "key9": "4ZuNkc3FksbfZjCXqSDDz8NNw65UoKAqoxHL7WHs6DKUvsDGaAAMSWUbwNRLYx49hGu7PRLt4Hb7eCKUfmbQ8AzX",
  "key10": "2Ew4ncde52rGustCzXKJLnYfAuY7iVaMgm6CU1zQV7yXGonhk3rhwh729tndPxNNM6TFbXnKjVosxtDdu9vLDkUG",
  "key11": "3gWbWxoxxSFTfaR54f2boWou6ehDHRFQWG8ZQLsWZsr3uPf9KUZH1VicgJfUwZSyhfTfMrnixDPfah8Fmag6p17B",
  "key12": "2F4hyHQbAVrQsNyYMprqBbxAChUj7c51t9MR4k7HjVUTXhg4QBrbP8coQvaKb9g2J2Y6nmhBWGkXdzYj2zscNGYu",
  "key13": "4tXFyw4nA27w1SWeoDQHg17KZ8yrFYDo1QFPex6jW14whiJWmsZ2upPtmNBvJ1McVDtfAPCpA84yw7DZsG79mDqy",
  "key14": "e6Y2ihgeEqpnwwWMc1J3vNSC797PREV89XeUSVtzA9MYPtkttLgHpGLfGe3Vq4u6JDrEkgbW6m1yfJypKRWpnjv",
  "key15": "4rwnAZhZrqurrTFczvMAJDj8NGDDeyupeCFSPMmkCY5ZQE4Qh7RaRCWDV3cASLmQ14vkCeQBX2EzdR27Q1MFm7eo",
  "key16": "23SXk6sZdLZZoE4dXQKXjQjqrY8sZMbPAcpP2ms1wD4G6YdeqUspxirYxhCjsuTR5VXz2AnbqbFyaC6Rj6R4KNrj",
  "key17": "2UUUUqaWTzkbve8uP84FSRrdkS4nTr7jZGH2bBXC8qAyR54TmkwyrU81JKvcq54Mem1yXxP9z6oUWmHFpEBZgKkL",
  "key18": "2pY2cYSepMNd7afysHKSLtwneQC2f7t676v9mGZ9J71o5Foc8qPxeWQFNQbKH1YihAvoWCGeLEKS8HecRbFekRvG",
  "key19": "4Qa6q42a3HYR6BrmJ3geSAjwc7kcvofSPXZK2AV3LcBW98EVoLw13ffH41D3H2aYNWiGMjGHQe5rUw5L6s3RWjRf",
  "key20": "2U1dvGCVz4zKSwmYutxSRdrJdj9e7qnMpC9sAXQ58UMz19GSZ4fMDu1UD9Ar2ga6abikFjqTw5FjJmTieHfMoRC6",
  "key21": "DTeUkwp6swXT8UTkhPawhEoKJDTCzfkCKkc8WfDuRJuhvT2vzBUoYhAxzK6bM72UW3Cow5cZ5k1ZEUKSXLkDi2D",
  "key22": "2pBaRceiYsRcCH3LfC98ixdbEHPJpTgZ1KzsLN1L1kY5gAGcUoa7hbTm9L7smWYuyDrh12tVP3cf4AUSfbTsFcPL",
  "key23": "2vBUR3nbJXR5ifwPKUYkcw23DKPymzUGjcSSNsRVesb5o7KCetumPX3kMXzFMrpZy6m8hVvN11AK6VeAuHVw4KFZ",
  "key24": "2UHMY6zunmntLsLHAFdrrUULiDquAWFApzaBbQYzrmb2GGoDbxgovHVMG6LCb4M7X58F1btRkbgsr38cUxroKaJJ",
  "key25": "fsvyckCD3RWAphg93tJNiNxidzU6UXPARX4EYDA1dwxGrXi8iaFy1hUJKmH2XGwhK6eXxoi9uFafRSPrGHrWiA1",
  "key26": "PCDTF6jMsvFipnEP7WMWLhLBFw3oBpbapGhte5MZPg18mexhpaBPcCUCUDZ1avSMGc1jLE3oREQrBAz8iizXC19"
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
