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
    "23mDTYRJ58msv9SGBEsYKnFo4XscKJCmji16kww4pLRWavp9BoYNE4MWVJjKobdr1bfKNW1S7LvX8xuL1FFchbXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUhSuEc3bt2dsixqAA3oofALiHVL4LSGF3xferEVvMPV3oVuHHYhumypXqwZicgJnFqHmY4PEKUtmGzP8KcsqgW",
  "key1": "PQeR3pw6gUoR1bc2CWoaFHTkR5nDFZbUWSaiPmad3scZ43k1nTBvLEM7AFHm5wnMcUTZWx3iBYJMwP3xbh5rmts",
  "key2": "4fqS4LMXzYCAFQF67rEzCzE5WBPZNWcTtW8hRMHfpimsrxGhML2dz1igthj5qnwaMjAte7TcjT4dHueRw5ifksQq",
  "key3": "5x5aeby7bwUgPFPke8oyT67euEa5oy6MmoHddyL5odoGXaexZ1TRSgkqQ9DKo3o9TUhaXNxCNdn9TPrUQapjV3Z6",
  "key4": "4GdGhkSMDdVXBqz2vtRzuDdNhtP8hWgXSKLqhAPSdzS8gdXGjow8M5xE4vdrEdDDyGd8TdofRCSTRZ74KNreZyJb",
  "key5": "352hurVQAHCqsvqojMJ6HFLqi8MbUwbhKeuheyNz6vuwrRgk69SzBetNEwh9gmmLCRCZBEi6GweURj2T6PqAzVv3",
  "key6": "5D8SJEq8i4tX32pRxs6oNsvTXboMG8Dhx9H24TPFTKDj5kxvQLAmBEAQ7prPsda1FoAMT6XFs922C9CSQB1V5o58",
  "key7": "5mJr6XaXs75wmBde8byYbspNsPSwRSzCNi3xKikdGa7nah3x6iK5G4eLS6JjPMkBSpuiWsbpiggnjzzcrhi4Bttr",
  "key8": "5C9cy9pcMoscJbf3BaZZTFb48zCeHFFysFE669QnaFbS2HZYXPeSSZuDkyjZsbLAQoZN7R9sgzJjHv8w1nns9TRE",
  "key9": "65Xq2SsdRER3q725GYCCqZUc5deB1CXE7apSy1K2Q83pq4fGKn2J3Dd2GCfdwbSueNQCbaXn3JVTA9rQNJbN4DYG",
  "key10": "4EzSG27xxmj7eTMwiLJs15t2gCsrWKrZxRBR3d7QZpotMtKPsf4CrptSzcXLeV94qjRAfBU1oapmfPbfzkuiJGB5",
  "key11": "HpeiWBAbcrQQkXFVEQKieUYVDNLzDAmg6xZox8PBKSKLZ4Q5DH4FXDt3jSjHMve2ehaHEdELKNbryuLoyH52Rz7",
  "key12": "9FW1ystTB8Yv7RhkQeHGnYQq9LnBMVoNVpFyqjeUT283DpmQPLxzU7THzncBVHR8vD91fzqmk991XNNUrgr3Ruj",
  "key13": "3b4uBFNEQePk6ZfuNVCq2rch4Dbo5cxZNuCQzB6aHZx5J4NtejpbkT8xvyd6xGwKhhfp4CyxR35XY2jq8QdVsBq4",
  "key14": "1jF2biUhGSewpqYNWYDvGwB8rdhTcLStLcxVhtmEdA7RtVE4jsV1SXjYJPXHXUTEACC1ZxJ2hNJPzPCpPrBXHuS",
  "key15": "2hWBGPpqSbRT85UbaCzuiSPvEw7EtkyuMaxtReMudLSxZ9kaNW3fQiG5iCW5USQzNyvDfat7hFk1LKh46Lwkya15",
  "key16": "4FyM4C6VFZSRtn6VSeKvex61KJ9YsBL1FrA4t9Jo87w35MeJzYZN5fJvMQbyAm3MgEZTEAv3bYqF5PkTisLjFaeh",
  "key17": "4kRhj5nzBi9fv9ggSaaFSQ7FcFGR6fraZ9VdCK4g7nuR4keHAoEBRmQnWYGQZ4ZDxxgLH4ygEDXaLbrGQafrXpha",
  "key18": "5mXbQ25DKe2TPS1QgoPyR2q65G43ZzM2awR4zgPCiH55kHj3dvZCuZseEss2jVpCgPiTQtyjNaxJS6HKpCxmqS8d",
  "key19": "4dhJ3aEKwCNbyPVmv1QXFnYmFzEnNQQfggTqeVQoSPc5NTFJGsg3Pf5rzpb9H7wUTBHaJUJzYrrJsyYrHW4F3CmC",
  "key20": "2qGMUGAREPb4xRxsTGytmoCjhpjREDLLPRwQgixsh4dJFgCGsmbDUkDJrvD4rtKhrApjN57kQheedBV3SV6HmgRr",
  "key21": "2EGo2fng46UKhgst9qBix25LEgDAY3zEhFqKPRzvBLnhdTQUkL6eVjrAPnwa9pNTaM1NiPJGk6dSbMitQPFn4Mg6",
  "key22": "2xBfAE5CmZg95mH4Fkkc2pF4fXVt8rBi4XW9RU1KbgHNQcnWqpdJvzZK7rLXB4deu6wSApmPmYsdq6kPkcG4mGsA",
  "key23": "2o112xycQXpxhXA5GS63GaqmqYCuCQMbLHUkt1JUZF5chEi2pJi37ZmTsX5aLcHmA9VmHBfZuVuRcRPNNneXsa6w",
  "key24": "SiyjgTx2Ywph75gAmP8tciRzNHhbiFMdSp9GxQbzCUDFfBkbkQiUrpPqo5QYoa5sdajkLA21R2hwJzZxfbB1ajt",
  "key25": "Zw8WiZrLLkzvWzxvKAbx8nyiN7Gi4iUawUAjaHMLdwZ2oSwJyvmipdqcNN7Ex76mRLaVk65NUrCzQPvdp1o7j6C",
  "key26": "2LSKw8kpc3HopH6zuAUxPM3JDN52v7sE6CHUJAGM1AXDwzfebmpbYEaTMM6n9uQV1ienPVuHF9EvpQ66pWGdjpDr",
  "key27": "2VptcwMpzMz9w6sfSQ8hixiRXRYCBo7SgeamvDWfKby9AMSqpQJLcpeLhYzVNytmTeo6L1a6cVRgvXJyEFcQJFa4",
  "key28": "3GRqFX6mMYywkH1TyNxs9XpuTF7DZ8cpu2i9gTbwf86y7pWz8FzPhG8ZTxADUnyUTLKt2Hpfh7FmwZH2WWWqeEGv",
  "key29": "3416eio8B2kccXeTsPkMeuxmjjEUTF7onswthWSZ8j3JzZLZpShn8KR21hpSeW1PmPStAUZxQJGuKk43xFhmZqAA",
  "key30": "7eAqv933owMMmX3eCzhGUKPad2ge9pudfSWDd2LKT28xK4qfZrigRkRT1gkET5WzJg3y3Enk6zeKkTzjbycsdrT"
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
