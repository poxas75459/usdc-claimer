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
    "3B5QiEhXz1ufxDr1KAZZZnbha4MmczMAFMnDthbnSK6AsBR4DFVpN6o2r3SpsnuDrQ7KZi8JfVKBaBqnem4zX3BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxDK7Vu6wQki3dEyJCffnFNHSGdmVbAXsHFsCBDYxNbZpy8KUN2wBXf8eRKT1fxsCeizYRBo1zSqAzxp8KF4mPG",
  "key1": "xHaEWmRippNxYR9hazqvsaHHoAGEXh9o29WhEiRsTpewUeAUUDRrwzgVJqFq8dWNMT3P7xXhau8o5zbq98iS6hp",
  "key2": "3mgAbomvS3nU3BBTEB6dC1yA9C6UE2xA7X8bdoAMdrsYZF5bAWTVD6YrUm9pvn3w2kFQvQpxqcYGo9mPPvSyVTi2",
  "key3": "cDVay8rEqRiRSCwsXVYrEFpM5P1yAwzWzGDMSHkwurCUhBV2L2Thz3i1pRCBu2ndHjm4fUWBUnC7ZxVwWDfDN3P",
  "key4": "4N5tQ8JypHdrbYRNfoPMKrA4haAQ29PN8T6t4SMcfMzfWuiUhwkjwuj8z8zmMsUntgbN5bjmMSfkiSfGpnARnms9",
  "key5": "3nEXXsAaAj3vYhYWJhkMxu6aAe6A6TjGmA2jAkejoH1uTNdmaWqCn36b7JHyXFKAFtAt5Z1z49zejSQxdXSSEose",
  "key6": "4Ao9aqPXP6hrH8MTU2DdANrHUSPQPs7qpXU1rwzGsuP9krSvrsABijuF2cbvPALY1YpMjHV52AkKanExR25ZYvby",
  "key7": "25kMD8h9RXbLJKf8f6vjGjk94m6CtmSLjNfwdNmMt2JNB4GHFXQSgiV1vRNTRxXySpqpW6sdmahGEwBcEzRrdJkW",
  "key8": "4GBTmxF3KCVf3Li4tfmtiT52SHzjhNXF8gtwRUyyWPvCXfa192K1ko3Une2kamcNu8dDH4Y6DGdySuKpbdhbqbDz",
  "key9": "3V7mLPhr8jCEtBM3E1pYkGSjF9Ted4H2cvQrjfJhpoTXaTMTEt5HoathEHziSKzUMRrDjUyLLdZszhcyf5wLQpCG",
  "key10": "2cw97CfxvLzw2bRm27n9zR3WwELkptdgxSUFZWGvN5omXKV7weKn4AuApoeMhnXR5Hz7SoAafLUfPnNqwea4HhqN",
  "key11": "3cTEnMn8DbrouYoW5WZiCYULp32vktyMyPLA5EVGjKp6ooDctTRgTMnQ88sPAT2xLmHih4GZpeXZeF5mwz9cmmQ9",
  "key12": "2q7mTppjBDqssutGquvabs6mpHV4jTNyk32RaF4hv5JGd2imySV3KCJqhuou7FQKWqKPSUTMei9t9TvFtJ6QioYT",
  "key13": "MwEdB4fgZMLP3JBdMeYSTT7ManwbQqYy56JJN4kryf73cqx611VxYUG17VVAAiagPEgznQfaQg1dQ2GJNaqvSqA",
  "key14": "pwSkn9qFD4jf3QXAVKXgMSMT7itM1w6urWJqEFKGJUWDjrHaQcGkjwcYQsyKzeRR388i32WTnAHraqdwVbAiZBQ",
  "key15": "ZnnLauUoejKomne8fWo56nYT6Sx9P5E9ed6KZfk9ze9uUafRjCnVEUvCDf8s6bfJdKoYfYFnh6oJ1sGSE99eSMf",
  "key16": "bs3aNPbLiPjXabjPztg8bzAzbxDs3kqPqTAGQ6CoECB2si31WBHHgqgtJemD2oitPufir2pMBF8c55xfnf9qAfo",
  "key17": "3imE3gC3qvBSZa46H2yWUAuv5MXTQ44xYJBomrAPvSvaJd6MNwwe1hHx4ZhgJyz4tJR1F1KFgqZtyV3NsWLzcn3x",
  "key18": "3twccwZV6SAvWSoRLgkxWL8qpBTVHWxkVLibwr48JxyPxk34G2DVHinNqLVG4xkj7jF6YNbsr5HJw699tuJv2RjJ",
  "key19": "4kq8o826SWxRqCziBC16e1inVVhz745wuUv2aMufq7j7K2J8G1Hw4M29mJ4rVc4y6fp317wAzYKURxyx1KFPpFiH",
  "key20": "35aFcbESWYRQ2oAN1YinZ88duucViEs9rWTKkWsd1mYJ2tBBFQJhdM9q1fZxVBbGd8GBEUh2WL8fKhSN3teDPzhh",
  "key21": "5kT7YyweVRyV1wpy13dpTsQ8Z5ovGuexLnAVaxps51LY9y12JjZVarz5RaQVNqY5Ek4vRe6kFeS5rzoy311VugWn",
  "key22": "5onxBP5vM141q6RLy2o4k9Xv5EiSTpvY7PzCCDEBsTdTjQEEi1chL1iDGiwvCAyNp5xRV2FYxiwqbnSi3J5vhCne",
  "key23": "74V1fiQ4KhKaAocQMLNY58GYqZJ5G84XCXZMmXP4enfru7yAecxUv7zmSmnqybEeGRwxRm4G3CGCAMM2NpYLwKy",
  "key24": "4LEprzEMtmxvvabaErEqHktKkZBeTVPNP62E5HfoWrxKN9KjcJqwJ76rZCzE5HJCbxFWamDMaunGo77j52hsmwHb",
  "key25": "3y9oQgg2hNvu21CZzavKjfCKh6VNpqFizahFywCCwGyPtAkMnPbM5Ku6CeV19DU7ByVr3CWG1byWaQiowBjMTBFS",
  "key26": "5BZGJZC3QCPbcR6cxHnyXcew2vsH4qmNdwBBDDaq3KpW3TDZ5nVDtSHgkfd9RNaXjgdEhuCAgWEpT4hKVtAzf1CT",
  "key27": "4V76xBfgeEXtMzGBxZb68ZTJyvPLa3rd1ZA5i4nEFhvHo5JxEULG347kbH6C81PCu6Jdu2VY5bDA4bCiVZEBYuEW"
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
