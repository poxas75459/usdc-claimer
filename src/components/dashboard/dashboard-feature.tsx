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
    "3wfmprRBF7REaNvEjN44MfUYSDhrDNw1xwt4wDA75sLnUU6b3dYr8gbqGSP84xx8Auxc9s4nFgK7uc3KLfJpaRiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPXEdyZfVCTyuAkihKUTLtLzjsLV5NU4Ci6y6qoK5epYBiZShHSgymtDKgCqEGFVYdc4xvBtfAUakkpp2kJ3ZVA",
  "key1": "2gc4njBJGYsPpXhXB8yrc9MwUTSmY24wTLmhGwXdY7G1NSL6oWcdt1tVtTHicmkv8CMNKsgkf7YVggbcHX33oTbU",
  "key2": "5kWNJTLDg6CQfDbeYTKBE1dY3eEuVnWX7ny11dtkgfcshqeQshYihF9y9KbrF64GV7Fty2x6gReCymLcm6ewii38",
  "key3": "51YXzyWmHLDwvoaipuG1yuGPgfirrkAWnRtPhHAcfUWMtkAZD4bZhmAdsep9PpriGGKoD84MMkUmGC7b9iSo96pH",
  "key4": "3haJgxXwK4sEguswovvb5AUYeTptZcrCfia83Va8mgtgVtoAqN2odP76jUJu2SqRVdURQEKCXG5BLm6zqez7bLWz",
  "key5": "53WWojcsshMPrYAADehHu79erBjNDkoExzJj2pkB9FYjLZVERbANMtphdzxMohZzqgXg6eR9URaBoYkJC3kturs8",
  "key6": "6iiYtRW274amroxRVwnm2xZ86i4VJfNxyPMK8tSRwSpBRfCw6cB9vBn93RsLxTo2odUqdSM3gU3ziQUX7NHgBwv",
  "key7": "52qcVLSHQ63EcwDnHEhNhVEjte5fuKqV3Y14BiEmGp4nuwEuHMQpj1EayQDtfNzMKcD4v8WNhU2snTxdRw3X6TuE",
  "key8": "5aRTdLrSSHRuQmBPmguLMzXeZxcffPPa1yDtn3TAthb34h4D7ayEgPLSpBnPathNZyb62hj17TAwV1pdHNmyYuiw",
  "key9": "4VhyyiwEfVDxmheXWp6FBUNiz8iV3xsy92jNx96n6X1gNY7osMttzpMW5SM8tDPA2CC38xkBhRshjmKd9vcJC9VB",
  "key10": "2o97FjAPv8tPMjSXMx82F4CLmxXTUtfuCLDtT2ec8f11kcyVP3Z34EsaYtT8BBZzZ7c1PPCnXvy8sZ2jrd8hy5rR",
  "key11": "5snVMetY3PJJAt5sC5y1sdTNfXcEHiggLAkJSEdN6g2NXzadHmMQa2w4uwCdXgo7JLpAkf1RaZCguUNXwkXuWc5g",
  "key12": "27aUdDmwcMYBAftTmUTccC5Kco3Hrq3cXQgZiDCg17yRYK2bUGuDm4aQ2PpP2HU28V7yjpaEc6vWfhHnrpxDAdPV",
  "key13": "3i4Mm9cnXAkgiSQiUzR6k3m5scUHZKBbtj5SMGwyT1kjKa5ijdYzoBzishPxPxqSK67C7L6FqUhBUpYXryqRAcEa",
  "key14": "5r8soSRNVUgeGYHu9uUBuTnPJcp26pKytR5kUR9qScZc9MuNVfYFiH1vpRcTGciLzsUYk4QBM9zD3tpCVnZNXqdF",
  "key15": "8n97cyVMZTX61FACjE47VvGpAVQodgxMeTiAqct3dHTFtMALQRWB85WWrMhGoaXaWxjNhwyo5iv14QibaBs2yCQ",
  "key16": "5p4R4h1ewRH4auGuQ6fTMbozLjCsGTk33amdzzgo4asc6M5vUAxTYU5dkj5Lf3riFxNiL7mCjSQv7vq5YhspDWSw",
  "key17": "2v1RQauuyyLRX6d3dhDsZengoWs1n9GQD1cYy9yo7Yha4KqfVczfTRiGrWWdrCCHkFD5vgxgBBB1EJ1sqE5rJ53s",
  "key18": "MZu434ZAutd99LXTJLPmoU9Nn6bowdjs17uZuZ8k39ixtrgzUCakVxpjQz6ZC38QBWwB1ELyye455KTryS5mnVh",
  "key19": "4M9tTUkvoizurZvAuKrM59oKo59zMZfAqgnn8HBBuUSfNVEdJ5XatmJ1hv2kPFhe6sppkqvNm2UERM8T4EjG8gdp",
  "key20": "4mjyVCWHqqiRRVGgzTvhse2TWztSan27mpac51nmMi5n2RxqZ7earWrHrdhAxUppWk8wuEMs38rzzmo7MoaMqm79",
  "key21": "4hZpT4nxMN3ALBez4uXQMjdHp2WzrnKVYtedWGq3qSq6tKna2kwH942GPkt5dwxvfc5GjucTetWFyezapsZHFgtZ",
  "key22": "25tBUM2Mmfdh6q2xPJurZxHS1B114ap4rSqfZDzXQBtKo3zNRgtsXncx1yRGm5kZQ9ZMicJe6sDLaxKgs4Y2KZX3",
  "key23": "43GEiUkByQHMoS6qsypKZZGatDQjPoMrEqms1BY367mqeS3vLJX2bcm3L7Eg7B3ndGpud6EuNusFYDuJyHZ9BWom",
  "key24": "2Un8Q3ca7vnugmhahpcNY9igiEek1XTQ28xZKnpujV2DaRX1GkkJ8paifUJHiECx8oTjBJucVwwtAUNrf8cYvgxh",
  "key25": "2tgiko4ogefwZwGjrQfupPBc29tvdXexnsrBSfHUkfXVtV2DjUtG9R3det4szsBd2TeTV6Vt3vBV3L2suXkMEqQs",
  "key26": "4aHPu1dzaXCnD16SidoXpEeEso76PiwSjCA8XxfYHW1u9zQ1jnC8sm6U4yxzbBDTiRfgDWSWHfqpKnAvzXCMdnzA",
  "key27": "2Tjq51YYx5bu6i9b21fomV563tC5i6n8WLakc1Z9oPBhT2XV5A5s7VDRAfqdCV2asb3X7Freu49Wdjbfz73skeWT",
  "key28": "5zDDfE4YLC2ZbkKRSFV6vkDs17fdtA4yDnxRcW14KGXcTggpZStg7NtXbMr96rDsTB2BeySE3XqiHosasNYAeZsP"
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
