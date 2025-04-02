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
    "56SdBfemnD8SLj7jFVR54Pq6pR9864RPe5Bgh5DBeTCgcBbsawpv5w8cpXxtYUCup1Db8cfmFhNChdSUvmdF6c7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjMmMViEfPAfRDhUJcJvC4pN9CPYtmck3C94XS1WqrprZZ3aAnkRurqoLdU2Ni3QiRuouqmeGPKhmESsgbeKSWy",
  "key1": "2Q1J3mB1Q5a36ihchYfE81k1TtiUTRx7ZrGGs64jc9xqi6eDJLkXcUzFyTo3yYg2oHxC3Q4tKh3mo79FB9oZWZqP",
  "key2": "AP6NNxmLM8nsthejpvTQiFS6gZo2usown59WDvupmxpPYc53WMmocfoqr2gR9cZ2Mn2asY94QvpTtJhoTttpHky",
  "key3": "32PAqfNDxsEG2iRPSN2tv1DtAkvCRhzXwvMnhSMqDR8zAMhpYwnDFaiW3bVJ6sTW4gZu5A2XGD51hCPjjYtbfa64",
  "key4": "3KQCCaPWPYncQHv7MUpVJtop4KsfrnbM2PZ8QXzcoRj2s1EgmoRUofxoyPjGssTdfJqoZkyaGNU1WBoPUnUPioiM",
  "key5": "87RwcjxdM3QvBDZqxeyadocDs7ZUAogWVis9wB6Ux4fUXxxNnSpsK54atHc8mZHEPmyMifwDeUEA15it123wfh9",
  "key6": "orCSUQLmPMsGPAv7DVBjAmohh5pS9nACodMYfCgTV6EYM3F4eMpJqqbAxVybTRVFAzx5NPqnF5ksFaJvZ2jDFjM",
  "key7": "63EcBqLzggrsJzrFcUHZ1Vx2o45CUfMh54qwhx5jiG73DB9NRDUWWpLrAs4aTjYBe49nQonyrt1x7K1tMHnn95Cp",
  "key8": "4D5f2byukGn7hD8dbzZHU348cVXzkGH2f37BXTsrPMfbepVjDcP53g9H1rnEYgUuTyH4vF7Tyms8RpQkGTqAyxGo",
  "key9": "Qiyi2P6yM81RjoZmK25LANkzm334Psjhm8mfMtFzmk899EwXuMmvegX6iCwhnS8nWQyubhNooH279Mi7UKxt3fk",
  "key10": "2iFjzq2hqFHqDn222pQF8EN4zgFvCCBGfieznfmzCtxXmrjFrLGF1DxkBtvV45hfA4oCDvbuH6LMs8oezp1FxSTb",
  "key11": "EE6b7bdfqRGXHwS8HCvNHjRMcTwq65vPzrzags2iSMTad6BTByQXqM9imxGrVHJXzTt8p3mqkCmXgaccn7Nb3Jr",
  "key12": "5sU69PQDPkRa4reapEZLm5oqjCBacnXBsQGurMrqaCmP3x1CtG4AZry6fFuXA7bqNLFgeFanZ4WJNKeUD9BpgP1K",
  "key13": "43WxbDNjyCQZuyjiqUfDC1qWLLPxgLgCTUy3bTqkimpz4FuieAcrQJxFUetg99uqzyJ9YL3ubpXZEry9suDGWfNY",
  "key14": "BvknFomK8gzNQU6iqoUhmUQRSZQk7tKDtbkRnxrpnfVx2RWy3ZGKvbmLiVraxVGfsLaY82Z2yV2oMARMGtdgAuD",
  "key15": "67G7xR6oqEJsKSN62ocNNWTt9gR2uc7yHv6bjEUhyJbKydFBy3dY7ZuBmKTfR2iKehjHrRThvRriuE7unPb5HfAN",
  "key16": "4MPpZsAYitquz49or6rY1o9UGt5cgDvFAb1x9K9auWRVDC2SMEJVEFhuJeRY5QRsXEpdzvj2LckJNANiWekqCbMK",
  "key17": "5h4eKVHA5N1MS3VG8D33AcSwG2R7su7uSruoVPonTY7LgJ9SJnfrg8LJENR7Ntr9XTditPFfKxGTYY1QAGAP5Qmw",
  "key18": "3r5R8rD5K2DEtimN7bAMbjSvmW233y2tw7GyVrH4Qt7y6RVKErP7Rut25eoNA5rCfKMAAxE1YvSbH3EyauxrGBNv",
  "key19": "5hFR6S7Njvsdd6yVmvb89t3upVSx5kSgRQfnBv1XEcQ28jnwq2258JPjK9PKmnamhdXz3v91PcnGWZvEuEoKYkGH",
  "key20": "3LLkvZ2HfJzHQbhxiPzkHaMi9SFhWH4Qn9AMdRcm4vAwGCXjEoMwhAWZfvjZ3GVSth1f7StKF3AsFitpTQP79cVB",
  "key21": "5CkzPkyYFTzvnbdwNtFpWgJPdWd8yDLNrHQj5Ep1nD2YxnvN71M312ADx6dqcUeVZYe5k44m7VEnUszT7st3Wf9G",
  "key22": "35vGeaXPYZUaSpi7MAB4PPCPT3KDceaBkHZCub3svJRxsTmFnniPfQ3WATvg6TZbkJJwvC6oJjguwWkiPLYhm6CT",
  "key23": "2F7aqgXaNM1YZLE7MDX5KGWZVS7b8QEXeXwfoJtTngY5GUmJbWTzkHmjarFJ1uSzTpHmz4PtNEDGFwqWHH8iouZC",
  "key24": "yfyrjt4u58pRLuikizHLSQbroh1qj7kRPdKw9RP66EmvVTJeJfXpAuCCmXytTUCjXYyQbpXyWxqWWgbPFe2V3VQ",
  "key25": "63tUco4sHFRQURjyxb5gwDa7ShybkbbMCoPFpuR18Eimc74N6qo9wEDyVYtUpW5s8Ck1vkSo2Fe5R61UprfDdsJz",
  "key26": "2ESX1JvsGv51EiQAFmCz9ceL2h7XMGrL4wzne8V9ebzSyRVD33WSsJ4GLn725ZFGWAujfaGjXiPHxHKgkgs386n9",
  "key27": "643cTu4Fcaum3EfqHDce6eGrcovSjv5SJq6YW3oYfqvGzSFEUkpkFwmQw9JxpmtnoH1PXqgthETzxjGhrudyN3Gm",
  "key28": "9dYMjKnsC2s5zwfrMUHK8HLAjXGiyy46bSSQCA9qyzwJ1AeF7RNXY9DXDqh1S89y29K5VRRSMkANJF864KXqa7r",
  "key29": "P23oZT5LcwBeim3ptQdPo28RUAKvQDevRu3trnDxpZL5TMsdqXwoBwt8qA9fAxHkCer8TQNM2rHAkhDkpSndTgz",
  "key30": "57iidp5DfdiSt6Kpe4ih6TVQd8E3yF5ndwK727TsZQ2aWFwFZTd9Kwq1BMrAgYngKH75iMV7Wn5AfN7U3Tf7PXrd"
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
