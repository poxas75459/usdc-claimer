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
    "37sm7ttQtUasWEvQWoCM3bB4vymJaJptTRdNKtza9vxZRyXSJ5seB6NytkjRY4m3EFR8ey5tAuFzLhpMDaBiNVxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkYGBzfEMmhXJDGvxzpvWkwn8AViemtvUtw3Nxog2My9wdWE8HCddbX13bRxpx227noEiTa8wVLTobmHzBR6HpM",
  "key1": "52eo5JxZ1UjbMTrHAGmRNuY97zkyvKw4rchw3Qnig5dFnaU25fGbEu8YXZE672unQRjJhnEh2Rzxft5aS7NDBset",
  "key2": "5xUuP4dQuczH81283N6M82J67jxifsxctHgXbLaErTbg8FnvoXFQyyZWrsyhcse25PvvQ7g5A9ukxQt1GVRPwdNj",
  "key3": "NxJsSeUBnC2GurpQ6sSqe2T2thPSdRMzTQPtw1kHgXnyW13GebjNg922dn8BRQB4DkupCLk1mZiVsZdYYyQmeSS",
  "key4": "4AUTF5xPgNeJkomERZ4k9hq53Rcavi6gbnSDWWyxXpST6EcD4aqYvqjpAFjoh4HrjGiyNqVSx5p1CD9wFba4HpBn",
  "key5": "3Y8HDS9hER4cuyAufwtQeGk4Re3jAETNiVuzogw4BLVJdALmttmUD3APTQnFg1vEp6E8j1DcgZTYWPS4Ua8WsWQJ",
  "key6": "5KeQznaoVRFmueaf5nLi38HAHPE2Yu3RRK9KvnuRaNHVXYwUYEbHXMx2GQg4BUcJJfygQLQAw4E31PBGwaEahsSx",
  "key7": "4bERUE7B25wVxwXaSbHaHHdMaF17A99HshviNGJmoGepiynsghCCE4bWepArrWtW48QgN1M3dPAGoVosnXinbDuG",
  "key8": "35sFns72eugZFtBB22H37RzGqjUhUeGnukUMjM61QDmrMgDvwW6wUvxKJduUAFJLhqvakdBfuytSXY9opuucDHQq",
  "key9": "2Jzk4DUSLrwHC3LbLcsqEerWvsy28UTMAdeDmE4wDnfYf1SMrqEVV81MN6EtjS3Uk2UH9dEugCgQcZgbx6mvQ296",
  "key10": "24DbxY6aoJPZs2WYhopuutzbMvSzG4qKZ2CgsNXA7UJXx2FerBWEtkrpo2kgivjYsEekaMKxkxKtcVRWidrUpSi5",
  "key11": "3Y1x6dfSXQmqQviFVShjkcMjqSB8UR66ydeqCVshVNai9sB8MX3af9L26vVEmEts9a3iT4x5TM2hrBTrkvGszcRx",
  "key12": "3WFTeAgtGYwWMsFN8osQTSTY9ARGGx9XdDLJqnWTEeZ6pZigBPzP68rQF41ZQLVr9ka46aboCU97hFwaSXd3JLcy",
  "key13": "3Ty5Esd3jv8qvCcw8wTbqbzFS1vTCyAdhzo5qCST3kHHSeQKDrGcBR1hPC7kYNC2ENNubt8YFE5hh1mQNRF2sdq",
  "key14": "FPp26eFj9FmNHD6wCNrr3E8U6QHmyF5nD3vDNiKPu3sx3EETBSKhEqB9Y7njo7SjX4VSqFHR2YS7s4p3LuPWadN",
  "key15": "3XSqi8mFYbPjQycmBnWXhiJSAaFhNxWWaQFT3Uf1YRfYGXSAjvBqH1vFMqWcQXY1FZMZ2Psb6sHH5VqMGvCsHGo",
  "key16": "JUJacn4xPY2PTxZW1688P4q3AT67zPkEwRoivQKZh99mCSyEXQt6DPjfbZ359tsZgGeujQaGMoSxg1QrxTxwaSy",
  "key17": "3W4NRxAB5rKBasVgzk935VYxN6WHvodnM2SrVj3PiziTya5jgbZBUpMtJdQouC9wqWGV3PXzTLXpjYq5x4QS95PM",
  "key18": "5XZXJjtKfu2Ad2ofnHg8mt6ee9Fu8EWJtdRvGEx6BULgtycznDoFsB8j1ruK71KdyZgEiY71R91Av27mT7e4eBEa",
  "key19": "3CT5B12TfQ1ZRn1DfSZ1qvLuzcKfPpbbV4ozx2TTK6WNv8CvBZTtBfy3kR7ShyZ2uRs3VfjepMVpXaghVuHtnFCY",
  "key20": "4RKhwVwVye7TSNNWJ66qKh5joGXK9DZiGTpwZktkyhZRxkEvJWAM6MsLePsgiBc9RRVgb5AfH3wn2a1NMgkbPnHv",
  "key21": "9ddvc7fvpGhGBydyNJVoipg5hbPf3WU5sc5orAhK2zNYkKt9grnW2EGSCD7xxA7M5AGxgr2PkPkV8VTtjPrWqcZ",
  "key22": "2NU1G2U9zNYLqHVgc2KzCZxWs3oHTk1HXN8vreaKYpd2myBrCkMUnoe9kBeqTChTMZqn98n6tJQHYxy9JE9kacw2",
  "key23": "2nxdpY7heRTGVz7d6Z4Ve6V5rP4HQakKeM6cYghmRy6GKbjLjXcDpCqopnAXwCsBCHKS1w4xW3T9dmoAngD9qRKE",
  "key24": "LUvgoQEbnZmgbFtiaMEhFt6GAzbmEK8mFGzbCTaHxbt3NZUTP3bPoxL3eJCpnYVDUA3fGJNizihABoaxY41SA5Z",
  "key25": "2YQhHAj6rSyXaWujaqezkhEw3RNGYrJEpVhWYbstKCRejPvs3jJuHbcHTHc69P9f2R2QHaLk5PBaBvkDvKhj1iVr",
  "key26": "3Ndg8i3gUWB5Y8TJA45188kanuzaKAxY7haKZDgFXJNnevTvzuVZncZBwQsycfNLSvFn7DjnWXoekjgKtNMsFdVp",
  "key27": "4QdQH69mNaAN2kgAHNg6YRfXGQvBdPV85ivHgq5BnFL1bHyBvdmj81kwfStJbzDnTt6QiATHW7kg1MJMHCYYVH2y"
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
