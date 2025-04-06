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
    "53YcKLCaeTg8HBMDvsQbAvNARcxDP5RcZZUzyJp5nEtwMYg6ekZkdaodzoijSTP89ieNV22RqRDc8xC11smhi8UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6mXsrYx1LWYaF1i7j595CxwHkBTrUjKCut9DoqKvn7LV7jtCt4rrSUpvs68RNLmcSZ3Px3ev1n1qroLE8v8kQK",
  "key1": "2tVnGXRAdGipnLqj1upDWzQQfBwAsaRQt7FRo2VbfBBfq4NBVEuc9acSJxyrP7LXmayxWQMg85sXHNdQgoTd8Ye2",
  "key2": "uZor5ytyZ2ojHCr4jzKtNQ1CghyBbpsf4F7XAbkLVr5wyf2e1kzokUjqH13KZH77V32KTEJhHT5wnw2W2E6QwXP",
  "key3": "5T6HkiV54eeony9JxRnXMUG9zvfj1VojnS7CkTyP2MoStaBW1neysvE5mGe6Cv9Wyp9XhDqsBR8BUH3yxxa5qhEM",
  "key4": "31i8uuohySaxkX9eVLLaDwJZtFMf3dGonu8s3VET5KycNtTKH9VJWGfkMrFYWQMfe7epMfYvGb8oCfMCsk5PoBRV",
  "key5": "3b6vNgr9sdjfjm9xbzAoSp17vrDkhKGqFGuJmckAjbQZ18VURBu76t6ErMH72MQsWeveyjiysWLfA55ekWfMigQ8",
  "key6": "3kbcVDumoBqHeJ3rQGnPQWtsVZxL3ufaG6bmGqz7qJkD31QtVZPDBewP2Km7A75rv6fHLioyzquqU2HXRWr3LMtu",
  "key7": "4UoM8JkF7gyXHgwRx8EDgogGgjLZpahRXDcx8rhc4NzxkTKFDRPefn15ANDHBwWEwVNUJ7ZphxUJW3H8DxpTpfjT",
  "key8": "5x3mMd5Mi92E5AqgcRk5YwwzeJUDJ2HDwhj4ZeWefKBaaA8E7G2ypVkYU1yRtf9wD8PMCpJgfotPBDpr4cPfMz8Z",
  "key9": "4dWCsNwS7QbGqovHxr4cCNhgFc1nYTvza19tnFhmec4xrWp2pjozDFoUo1TDXV4yiLxc8FakT2MKNbBk8KC7vjnx",
  "key10": "3EWa3Ce2BE8RPF53a9B4EqAnx34mLaGSbSkJs7VXCWeryBW4xCFBsW7UwZYSuFAPLKjByd4avT12irx9j2uJ65Uu",
  "key11": "2JCXyTPiFJrmJotuKAbd2KCnhQ6k9696XmiZDegwsngBV3BBxMxMRLDwMtnXMAo77qXiLzXPTNGH54pRMYj6EztC",
  "key12": "65ddjM3cy4cCC6fL6E6AeoJX67yf1umg5fdoVuh6b116JDxA2Zk71PNyX7EWzHDqLL4YPKRy1MzYzsjEnMTd3rQR",
  "key13": "2zuH3aUUwiNt5h39x6RF7KTRtPtxoPxEeUAss4F1qxg4qHP7fjWhAQ7cGoEEYrVL9ru7vQwZhcj37TNG3Wk9y4fk",
  "key14": "38acf3eTnNPHbXYRhQYBgucU2xKGM77dzitRJuCofQRkNrhwvxL2NCwjTChbyrTRF65EDEaYSfJXSZuJMsbEUmbr",
  "key15": "5DtAxozB9ikaFDmVgGsGEcRgGSPZLACTMvb4WJSjLSCfLH216xfcCPfiPjgqMaLc42Y15KmhJrFosh6w8GkS7LaW",
  "key16": "mNDgf5ydCLYusFJAtzXbgyhF8qqJhuZivXdeL24XJGiKyq8SmLprJyuDKF2Azv72RDDLkBRXFREcVfqUH7Z2WfA",
  "key17": "3GhpTzkeUkyPNeccWuja9zzGwoKi3sZ2Q5LdzRvR5VV9XnuEAt9eqxypiLuzqcCjjCVEtyNjomB652Eot2ibbEyn",
  "key18": "4eaBXdoigKGCW5fgSByMQEmUyYdPH72yGRsVkG1JyafRDA9DtWmz56Qnknsqfbd2BtcsuNchnH826xjpaL9vVmTD",
  "key19": "5GPXZSkEgf9wz85vnDeJ5m842cHnGiny5wuBVZRtRzj1h8KmaxabsEKXGHwziDhzjVpBqAY7r4B5sDbGeVnVoGxv",
  "key20": "4pMyi5AqP2iDdzA9q8u53ZKYZAAqg4DtATGbpbkL2UYdKWtv2iWKm5L1CdNWobZqDPWgnVZ73ftdPxo1TxT3xRBw",
  "key21": "3nt8MYunnscsEWjY2CmwL1ovJioMSMCyVcPRETc4zCCB4hsm3kimfDfmQVoT8wQ8Y7SPWumqpH8M83WugVLsp1x4",
  "key22": "3Lox4ES2CCdGs4Z9e7dkuFdM2SB2kDMgTPoH5JNVzxZbfU5b2umynH3ChBJkhXCXqu8eknp9gSr9DteCBH6n4vB1",
  "key23": "dRbytHeWPa4vktVj5E3S2GL4b5yCGGeA38a5PvxDoPoykqYT4tzFnYU8sTjsXxNM9Y4PTMK4BrornU4mmcmjdbC",
  "key24": "5uaALqTDvGp8hW7gHB7vfShASK9rsVEyyKRq1J6QaECudyXWRp8K7jmaWAhwSV2YSPXW697Xr5fPSQqSnXgPmjgz",
  "key25": "4Nq7ZBBeDdKKKCpovvD17d5TJ7s6N2uJ9sLhKSR6KrDGRmum4565RYnJE4cuUy9b39gchv4gsBWDiXw15L4Eq6fm",
  "key26": "5vwSUqmR4JSLJcfy7mm8cdZgvjxWgEwEukdo5a4nvMVsb7ecQW5yJ6wcGtiB9KFXoETDj4h9ewnfbocCBxboakoZ",
  "key27": "2UWURjDS93VNun6UnLKmA5SwGPDZ211LvCsfp73NCXyeCfnxehrVmfoFueDWts9B4G1FsSnf8iS3xmaKS4m943zt",
  "key28": "2VyHhqfLZLannRVGxkkDRnn1LLL4f8Jhyegb6Di6Ee9onJimCUyixHdf287x6m3V6mt4h6VrezZKJAHr45Qyh8wN",
  "key29": "tdLTJATFjHDYSD7qv7CeLkrqhPbdyiFwyScZf5VRZe2SQPdC6FJJZhwsMiw7WSjHg38sYZ1Tcnsb9ud6UWq4vd7",
  "key30": "5xpEvrndKgm3T9V3utPQyxg89jHXi28Zx8EFnYh3NT4wqKz2AKNnaK6yE6zDt3tRnhxa2b7v1MmKpfNCZue974Dh",
  "key31": "3uvBBfUD23kAQLe4fCFXphpUAxddz3e5PfTGRr7C1dDmuVTCqNsR4CQJ3MGP3ZxqB94bmBLMocYLxjhJp4wu9qWe"
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
