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
    "2dNnBbhckkkQkFxtdp5iQxVbi1TFEtP9R2Pr7op9DK8gUHJ5QQzjYTocrQxd2yHcsFvEZVJYXLeAMmvBuimy23CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFhaCRxy7Eycg8Ph2Ep6CFH3kVQfEEDigMhZCznY5S8mBxqgixY1jjdFozh5NAGwgsAC1Nr9AcUKomwcBQHaQkn",
  "key1": "4uxAkT253BDB3TrHJ83mkvQEK2qw2CMXwB92JLN2MDBKGyBEiL48m7Si2AdMNByAFPFc9fuphtJcJmSv8E87X3F4",
  "key2": "5aeaFPnYELWnSqDQQhEeY6GZsrGHTQSppLDFTSGeShVvgeat8hmzPs5nmNLPNdvMQSRZrYmLokSHUPaDAEpPjh7b",
  "key3": "5ABupS5riPcQugXTGQ19dqUgjECerWXbAeWUX4xGzdoygHj3JTojxSwnmHJoqmshL8xvNUcJpBx2L8ahUoMgNK1n",
  "key4": "6mDBKNE8LLEyeqazhEokLoxstyuEPn3rHXq6GSi7mQyTB9GEphAypCUg94KbV2TSX1iLxLabpLecQ2t6BEuiyzN",
  "key5": "5VPg6RvJ9JDKBf6Jcs5VZFpeeZXZUDwuDmpgVg8nwtowEgjdu9Uqvep24ssShpmpB2G5Lkp2fopMrPWs2kaYAet3",
  "key6": "5PgtDgcHhNmtx6gJKfMFZTLVsjvQiptV2yxEaw7YKSYZXS8h1tkJSNSR8uXpcTx4fA6raSUKMBHqBiDUjbKf5mPc",
  "key7": "5q1a5QjiqJebkeaCSjJ9qLjcSfJY8oj7xeUdwtxeW6rDVKdTZWKXPnDyzDnkMVUQzsA9fpRP9t6oXpC6faMPP7pR",
  "key8": "26dHhHeJFNkd4pLXqZJBCBRK6gsSQE9DQCeRXgsYAnGD4fX3qV9ZFY58NDZEsdbjYqzEdcVQZ64VQxRsBziVA268",
  "key9": "rAC6iq5ZaxjWGXoXQpwPTQkzJcjxMA5ct6gNbzriuA24kMtcLouJho3K6ohWE3mZN4oUcHiGBCRosNJ9UkRbJw3",
  "key10": "3pUeQz9Fnx4PXAH7apSsSFwadxkSiFvA6VqxcMwWukLcq5aPrQPf3wtLopuogychpmbk4ZVxdQSctg9Nn8drpJB8",
  "key11": "3iGE6AwGPVCdsejTZPEwJc7jNtrgmr3psDt4zvZND34taDZ3wEpxnDbty5o7hNVKFGjfeyEYWeFULfp8p11e3C5H",
  "key12": "59QepRQuzH71R9qtetSNkgcwqtcFF38eV8AzeqbTFcSw47PnachbL8qGDnNu4FxDuzqeBHe4KrWo4RczFkeVwYZ",
  "key13": "4aXoV5My1drMufG6poqsJZGWZVVMa17g6tTp5prmfoLtkXZqKsTkdLt5GtJg93bMFENa7DrFYUp3noUXhvqGf2b7",
  "key14": "2a1hkxCV3uqd26wFVq3PoWYBNFRpEHdcyvgGnbYXAPFmGBpfRcJuMWBq611XFcNF3Gj2GsicHC2ES67NwTQ3dcjH",
  "key15": "3sHAuUPHCUSezdddHCRrgu2kQ5PtsT5hQBU1Sr6dfvgfiD7FQ1Wev155EfNe6zFb2Vny8ZS85VvCzWRAWiMLqf2w",
  "key16": "3Dvz3xiYzc8gGexQiZRcVo7GZkYSTjLecLuA8azBxWAAR9FfHoBRkuH8VfBBmsEKWSsEtSwQ2Bi3SSHjSjNr6ut5",
  "key17": "3TXnnQLmofDiv23jCoRVk4Ghi27BdnVwZKmbUVQsbu4spDk5UQKo8ug8d6y6ZiRpsEDkMn9oCnkoRkYssaZJJFx5",
  "key18": "5TiFnFoT4GNLjuiZZWZq9pQrXXnSVUqZT4JA5p8ux5nfB3BRFvrazZZeYP5T2v3xwc3RmVgpii7MpjsKbmYipxLJ",
  "key19": "3JppcU52ZThZpQjDmnQXZqCB3n6nsitDdUdcr3fQEjJdmqhyerXAg8Lyh91ATdbF7sA5WsidneHQJDrq65YGwC7y",
  "key20": "2R3oaEBDU1XuihZkkNbtb4iAucdX5HFBdfAvdLutCzfZkehHfwxZr4EAHcnRBqRWcFfLcsa71P8vLwVbAe1Exco6",
  "key21": "5ZAriGD1xuKa8xMbJ9Gpa8WMCcV7g4PyHHyYqLSpoj89FBk8nPNtLX5xUVkFnm955izdQNvkU4pBAc2XRd2AZufh",
  "key22": "5h5ZT4RQTErBzQwnB5Vz9oxSWSKyZVFfwKbPVuisHz1NwXkT1uPK1rqByZP93Y976V2qWvzLa1iCA2n5qM5S9v4T",
  "key23": "3KxEAeHJ3jUGDQsSuxncNzYXUVdzjSSVGgg4RvhZtmdVdMRkZuhd2yEXDjny7jgNDRVv1VoKr3xDuckATpkDFzgw",
  "key24": "4TCY5WSgHyJLHZEkQoXL2YitamPLbEGxHxR6arWeWVphBNHokrNpAxHgLSkujNR2TXL9ESkzFzbTFFi2utNMA5gG",
  "key25": "4Q8LHbndPtASgD9pzKBh4fGh5a9etQG1cqSogHP84QngRwB7BJn56AR7WvT1jpvUMCFHAubZGbKqgYiNqSiYuMBR",
  "key26": "65DXPKBm2xiXPojvFS1SapbJF58PHYJoWqebrsD9S6noYgN1Qceh6FuX77qdvBQ1WBwTqViaFMf46arbveJN6teE",
  "key27": "4pJrH4Qx4TTJv1R8hxQo9yc1mFdWeNZAJUyTxymLYtjxr64Xqi2dfsxNJHzjpaG37zPkQNjJzdkPA69eRdDgJE3y",
  "key28": "5rnDKZw6PungBpJwDkdhYvSycGi7FNSY795ssuid5bzbcADFEfMQ4SNn2uoiZDA21ZdUvsnNtkmvYBtf39bn6ghD"
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
