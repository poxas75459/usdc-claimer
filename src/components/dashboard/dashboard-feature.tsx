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
    "CUwYyzYcBUJNEEMwnh3u6e7DEHNXLCDm9yq44izjYVckqrWswT894mD9Etqq3aKq6MrnfK3Q5BgantoJT2mUDJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sj7wF8cdkAit67MUJYR8cM4BZ35UH6dmKtnHDBcwmQGhXjSnn8Dc9aDbqvazn43HSZVNKVDPAvQfRKTHfPJmEJU",
  "key1": "5TGnehu1qvSAaEN44tX1TfZoRXWhBKkY5ZSCE1sK32Y1yw2TMaj9U2H4YPLmaqpPPqHSYkYbeMR9DhZNogAxwVNZ",
  "key2": "4d6yb3mEMRjSpaRRs6bAj7Mo9d1haNvLqXzGG7kygWNjxdNQ7W3AYm9ZcnXt9YmwKPQ2N2UfoGadNpczQfng5Yn2",
  "key3": "5heL51TMeHbParUyUmjCczB6VtBJ7Cs2L9CjP6EYwVMM7DtkpAmJdHUHRgrKytJAhyKPHsW1YchQC6yBhfKCj1MS",
  "key4": "2Z2jAFHnF9gvY4gjZwEmU3xeGM9nicCko3ojoTm1N6zGwjMFAUyaEEaWkihaC2jVD8w64AvujUbnR5uqWVSdtryj",
  "key5": "3Bd7fQgVTaJH94gaGMwGhMkBK4SVQPBCFEgQgkcUMgDYkKKkXqNjukkS15AKAneHkez5KSFMCMeK51GJoRMSBzKe",
  "key6": "4sf9SAjrfd8qfKR6GoTar5mURk1VDRyJqVsDbQqkrLBaR58JZXfaYCds3NPykvDLaZn5vW67wN18Cnj43jZTxpje",
  "key7": "LcWLUHT14fxWcHoC813xZ4MCu2wCNtp2NAGrq4tSAyzYpnkyGuFVZQEqFdws6VR6uipmfkiEbsorWVryba7SetR",
  "key8": "4TfVyo1n5Vdtp7UpJGS1Rn2XsbCboeCgTvStENTruFe6nYGuRu23rogpJ8YqwbhL8HPfXEkxHwXUbyDCpAYVyAkQ",
  "key9": "3reoXLN71ypNKowi1VSfK8D8neEF1KCnF9DGmLXQ1TiVBEDYUJx2PZ5AcEiXP44W6nhxvVM6aUhrdZowaZZBs3a2",
  "key10": "wLaPZ3DG4HVt4R4pe2xtCoyZsdDNEWk3afoYaQYLj1mQd1JQvAXox3GADpFLgp6NtMYHVA1KYD8NJtZWvFH1dAs",
  "key11": "5mMeGm8cTeRiwqjtYGomzrvpYR1jsSbCDeC8KqBzJP8Lz739ui65wKCcerJLNQ2u9DVwa5iD1To9TWujaoKTAdZS",
  "key12": "32UuBEB3ZhFHCBwPtufUL89X5uM3DjQkjJDE2MAk8sbZoMkvpErTjwmb4jPGbGAmboMDRLK2EbJuRVVXAd38CmFB",
  "key13": "3vDGXHK1VXbybN2P5YhoLMRXN9AJ7hsrH61nVZ39dAMgDGAiuckj1dsDsb6CTbMsT1wtWthup2VPBRuRsQC1DoaU",
  "key14": "4KqL4Eyrx4BzoTk5D1oWACeC2yqorFTuFmihS969DAeBqsTSqtoW6RvBECt7MjMbaM6WsFQbRKEDeQuJt2bRHbeW",
  "key15": "5Q5cN8WV6jEcPEURi7Qpr6dyyAx3kcGGbQboKgtsrWdhKMuZjvw5GMWyQrYjGYf3WW2ZcuPtKo1Di3CmHJRb2s96",
  "key16": "2bkwbQRSCEXMKqUNU3M7ngKAqTjVgmCGPWCwRFDudZg352yE1LaH58amy3WyyhTVxmwF1PaGBeqapKpjWoHkTNxX",
  "key17": "4ECj2UWt5TFPVYpB2kSfNSaocG8ZCWWyPZ6bf6jfUSGvp6fXnUDYHDXbDeBZqULdaDsznat8Uo5YEoHKAMimJ7ou",
  "key18": "hmiVzRzfuKHsFN5xwUwvG7BTQCF3drJnJipurdoXWWNzZKZ5tTn426vaFgUDRYvHVQMFK7vfmPrxwGuWpX56jsG",
  "key19": "4YrjeCeKVqA6p28cxxvuTKVvwuinmEuHTWaHr8ksakRwVFXhEr8iWCW1Pc8mfWb75EDSyGaidL4rdjAXbZ7CMXV7",
  "key20": "4ydmpVx4qyZgadinB71uJeXU96iiyD4wTBneUHBAgjZzbVhhs6okdDK6WtopBRAntByues5wfR1WWAppSKUKyBUx",
  "key21": "2wubZNCGsFcX6tyGwyaUkuXeKkk73i48B1hGFmvG6rNxhsofbSBZbbuc74mQyoLTEDKGgHgcezfygdXuCrbukxfX",
  "key22": "PKEyXjTU921YMxkBZtFaB271GEecWn1NiB9Wy4FpJV7a2BzrfpPUT4h1w9cejud57qvmfou4VjGRnjArQqDLf84",
  "key23": "2X6XD7eV1ZDbiTCbP8SKk4rLQEBWLCznFoLXVALfN4vxczuk5NgveeWCg64kPckjRqBjhz3YVMMzmx6sTXVAda5J",
  "key24": "26rqDp1NzNXxrxvY3c3YeZXLKWFBXKELo67in9jwouNbhHNeQB8cZpeXfNYNkpDdYTGNsdwvU98i4MYhrciXGmMG",
  "key25": "2pUYWBMDrBMmzNkHP68ejj9eanQWqqbDSqwLr3tnEm4sFr6oDDZQCgcN6fXb6kns43paLbm48MGSRu3y29p25HSZ",
  "key26": "32qbnipMdTfvqjqsgPnSPiC7id1uADZ6P5CLtwgLsdpCGFgDeBvyC7juHJcXFtCwxRsycisZNP2XAjPWeq1u9rdk"
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
