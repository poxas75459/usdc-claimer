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
    "ck5v5hu9ozCZPrYSZQtYMGNf8hJTZHeEARCHRxMg3QTk6bmWt2vFXhGF922x2xtm81nxgXvHXgvsSNoDC3yv2QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "419vLtdQ8SMGXAPkPinLss4Ynz7j7496Wdk1Zg5F4LmSuzE9vj8SUgYwQmhwpyVAL3dXS6tJ4ZHyjksVHZXsnpeu",
  "key1": "3v1WaDSJ3LSobwWQjaPBL4To7Kc7KuVu4XkuTQ5qAQstCWt6Q2JHDSVEcSSZBfg7pKzE35HsChYKRP8CLzhhGAJF",
  "key2": "3UyR9zh5k1xgrDoLfiCbwGyL9jmk9LSDoTRhZ14AXwJDQ7jVCaHVLWaPWNyL5cY3Ct9VPKU29WJtD2DvsYfPwoPS",
  "key3": "5apxWKqMCCCxnf2XTJCU65LYEfD4GrxWxb7Q3NHfDKcWe2GfmfBnaXB9hi6fURi6QgcnbdEBc7kijyMqMbXpcJwi",
  "key4": "3dAfnfNeE8MZwWaNn9qeKfyEenWg2WrmCxRnrv3dDUdtj6aNJLWgbJmfdVBwejXBCn3vZ2VJRWcW73QtSnx9i63G",
  "key5": "xWQGAr6j8ryh9E4wiHWLE8vmyvXE9Z6Vcr9EPCMoLvhnYnUTKu8sxWW3JBrGEfrsFcARQqi9hqV2zrcN4HyUbft",
  "key6": "2aGejEXsPLqSzxNRRcRhBVmrTXoVsWnSm3tzEjBtjtBDLrV8nPcfrrYHSUAzyRaeTpeV5M8SiKPKy3n2VqPGDhF1",
  "key7": "5vSwT9PERQkfS5phoWtuYcFLYZqNnPAio5d8Zs61LvyVdD364VfqJ2zkz7yiommEkrXz99a6FNLbyNUNcBnBwjNX",
  "key8": "4GweAvmjhyAcb5v8KLfRj1p5PNphgJG34dUj5uak4NAFfPCd3YmGcyuwV47dVxhpehTcRJSsAfNTxJWHYpcHffpm",
  "key9": "65qBB3Ddc6B19mUcEYc9At8uh5NvSvKzRFqxnPuo7N4nuDtQyyUEHCfipzWd1Ho8EgZDpY2Ud73oPbKWVLPh5SPB",
  "key10": "4YQBCGtDRTf7BAbcxvPoVorbAGgG6SJKprVEprf9ZDTwZkbMsDZpu75xZi8JhDHGG1G1CMhDYXMK4nhiNsYXNNgD",
  "key11": "4nRP56WADHLr9aUodoVNsrgp4snMpeay1Wii3r82iYKN3Uuhfv3iRdzJXLPVFnozV6MruhgbirPPfpqLStSAZuw6",
  "key12": "3cfXd2mnKeUSy9Aad7JpHgMToMXNMs3n1ah1G3PLEExNiyKVfScyEvTExg2VDaSBhiWGVEPVAGUmHXSjCUP6x4mR",
  "key13": "5iWghVYknkNdp8MhM3oYZij2GcBC59byVPqPBexgFiYrYU9Y82idvETUPeUmPpMGrSERBem1kALFKHtRdP8WWGTe",
  "key14": "3gDAffzk4vy4ngRum2bcD3FWmSCn5X1NGpmsMHyD9etDZuSptgeVsz7XHzW5sn3WqGtrcaHtwbVYmNE4obXT7riF",
  "key15": "2YkTPQ282HgbMb4419Ug8eTrD3XsKfK8qQU3JsxJfYwtiSXw92Mw9iWdMZYoAsYzJgjvPWCEgj83LaTisvzp9kyY",
  "key16": "kmtB8egrfvng3KssFNesLbgjjTmnDT9CgvHBViVu4BkHL19kG2kmXvgxknm8UBSJua358ACK8oZUaxtia7bWwHd",
  "key17": "5yN1Ky1sTyZA7zVMwMR2WHcRiSYHXYwdTejXxQaDam6dvzSdsMczB1GpkVhTvJZsQFBWbCwwchBSyqmDb44WtUrW",
  "key18": "izmm6goDVaytyzuoovwh8nJ3ds4WgL7WwQcwxBAch7qiPQNXqWcWSXYV54bs8mB6NmaKqwbKPZVoGbbf9JmnDot",
  "key19": "2t7TJR7adqgd5u2MNtQvHyZo2P11jvMza2j6kZMczrfdxEgzDiEoKbQa7jCWZXF7kAJgFZWQw2ekdaUcpeEbygAf",
  "key20": "QKwKzD5G1bzRuYP14Sa7SuubkKm3VAud6E2YLdtCouBuPEkJZgmqqX6gs31rHsi8HaZaiN1JUWBwPzNWeBgGncA",
  "key21": "4DzrQJZfaPxCH7mZN82ZjE5xo1ykhrzEUdmsmBdRUoV34Yrse4ZxFVAZzbF87YAirt177Ych7VH7BhFwjbCxXtw4",
  "key22": "4tfsSRaS1DcbU5RZZEUpKFmRkVQy5hxi37PQhLahyz9zSoNBHQSQMRSAV36PPoEf78mGA9QyVphw5vA2EfVSZgsF",
  "key23": "4ThXq652Vrr7VanY8ppgBgxpCgj4RbQZw3cjVDx3qfAfoULLcvRE8YyQ1W8uNe77aQ8A8PEmTBSEUx5RSa6RZm1y",
  "key24": "4XHY3eE4djipUcvcdoPasduZZynRPvfjfk6eCpHEfj8TPYfKQTfVWdNFhGmTepnbcS8asVNtewtndZzqPtnjkAwa",
  "key25": "3g8FFnCoHfGbHXu4MKvcjU4YFZX5cCYyoVz9h7BuhEsum4K2MrySzFT9tWG3uTVmDLujcS2cmrmMMywchek86Jq5",
  "key26": "4gNx98gaJqFpoGJoYXANLB2vmwsCEXeiSgcjqvMbY7UFVie3Xm2hfr2SgnmQ19mnGDmTtpggFXasx99wKvU5oSao",
  "key27": "Y8Hav9N34WFqgtZV113M8o5yuGga7WZEh7iWPkun4nBaphroNMpAcN4aQcWakM2Rsrs8RVPCkL9Xztoa6w2mxTN"
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
