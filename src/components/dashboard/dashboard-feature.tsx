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
    "4JapM2Jw5szTGsJpDSsVGD3dtYn27rJ8xtwUcFitjmUszKZuA81naoN2Gf8mGukqWzSRW7RUMqvJDgSFNftunz3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zD6st4uprxZWc5aEy65AUqBosAyxuMyWjgSeuToQptRRweXNRoQLiB9YA324Rz5ki8GT24oytktnVhkqtQnMUTc",
  "key1": "RhZ6GzKo3zUieJSujfkAa6cxqraH3hwfoxTTRbRyS8DbEe6EU2iCcoxGeE63u7RPwQcca9Wpnpj8j4UFjZ8XV5r",
  "key2": "3mAAZRQ6sjfqZQ6HCnL6cG9JEf9YwdWCfQPw92Wm4xLpeghErPDtUQVTsmGEWsDz8WgwQ2MZD51GMERpqpUCbnr8",
  "key3": "4pcgVw4PajGZWMKXKiXNrsh7bGTt5qoMSeXNuQ6osMSFDxfBz6KMB26aE6gAQiHnfRZMfBo3jvEH9cDyBmjMuM62",
  "key4": "sz3h46zQKNopNLJMhyDxmSVeLh6eB2cCtm18h9ckwhbzDbpTrPoUTvA38RtZk2459sKKeRFRFepER414jGHVwLn",
  "key5": "21JucT9paoSTpACDpKkTrazz2GEHrXpQuXhLuirwJhop75XCyNUsJp39mcMjh7ho5qi5ua94VDzzh1aygA75SPY2",
  "key6": "5acmgMx9MS6Xo1AffLMDXF3BHqdTjG8d7rBwmjgg9KeiJuroUuXJ9qiL2XF1dsTJUNugkHVznG4KWGdLKBZWs7SF",
  "key7": "AC6NgXJYiUS9GA8twUZomCpbvMPxNhgxhvc9CNgDyXWSyAZbcYo2s3gUhno3qF5je5AMGd9DtNo3xXCKDYQF2y6",
  "key8": "3G453AA9UkrEqBDbaVUUvoAPEM2mQHAB4v8eUBM6U5yPBevQXPxTg7SL1efEeLQnvFp6PUf2k8h3DpyQK9LP94ox",
  "key9": "2YbNQbpVRmPdVKQoB8HmHLSE3A6qw9YqMeFKw88c31etoaovDV7FdxhDx64b18M2pBHU2s8oM5mLhYrpzNRPRVEy",
  "key10": "5uBqQWKxMqTBJgeWj4R99vxpvL7Bw4DitLbno1hnHs24vUD3QVKhfayp1P7ysBpwujGyoXmBhaHhRFmkfDYT6FXb",
  "key11": "2Jst31jPKi8YawzGfnhVBRcAEV1ZKci1VXiZZXRU1FCmLNEbnQS7SxS6AKWsr8XdC2YKtBPn3we78zJtsLFhRWR7",
  "key12": "5EAsZvQSFWPiCJBAcar28b83aWTyEG24mwsWBufLrCxxn4r7KFZUCUGqxDEhzo6a9GRzZPo5WsXFD8TDqwNVNyd3",
  "key13": "bYP1hXYbxzndskwdgRXDkrNvyyCuaQcXtqbPCk2V7RZgJFoEGWACyuedsUfC6bY2yKUy3ejGSQhHPkbb6MjbTwC",
  "key14": "5X7qc8FZdtdphPfWzVQRnrMjicbEYwwrdTZVx4pSwWPrrLgSUdbZxmdYjW733mXES35DPYZaJzbff2KxyvJTp3Xp",
  "key15": "2VcF19CTjdgHt78KxKUhEC6YDPkFXkcZN7q16wBjcM4VbFpTRAaQPKhurcpdK8Fimhsu3Jw6TyCu1nTd5cijfUZ5",
  "key16": "4JayxDScnyZjXNNBjMzTniN6x4k3qn8egyvt5tnUJkVHZQvkQisfdRMskk1a6pqmGKmoNverd9q1qQay67eyJVoP",
  "key17": "3Z4Xr5GrhBJA2P8c1TyycNypQCyLSpbmfgKB2vw5KMd9FFMkNLHf1NASDRhm8EdZD12F5YxMF9zwPLofo9LviRLf",
  "key18": "22hcFBm1L6vGqx2RUgRiFAUni9whPBqiLHoDHaVcam4fULNtwRrq6pAq6pYdahvvVYfhZsZ7CcN6Bgsh7cndeHzA",
  "key19": "cbPzuGE3Kx7yWYa4yGKnqkpYFXmznokP4FhNn6eD5ptepq96aigSYj6yCwaPHQjPHPEfPWT6QsQ6RusE3MKsWfq",
  "key20": "55ZH7ZZSsGyACGrZ9XgAi2mfRBZVtKbnb61i1xGzQMcTUPDVapYennaHxwnmKP989JPoB388GBRTnPVMoNjygTRr",
  "key21": "5qwh97f3fYankZXyzbgGXqpBumyVa9sn8TNUdDii9U91X9LyY5315RASC2bv7SF9haGykBwWzMdYziL7utrZe1zH",
  "key22": "nCrYpFHqqaRLMBfzADkTatfZHN4pqee5Q4LdTtmuJaA2MgpZdf7bUauRrAPTAAk8a4xwaK7jRkBYhUMSEdcPV8o",
  "key23": "4EmGpGN1b4kiekZJmAAQfbUnNLDFjbAs1RtTCdUiCUqQtMft4Xu3GMJTWh9X4H1nuWH7VXBE9ZcDiwWkPea18HE4",
  "key24": "wk2fqUfgueSAcMGmrH2vsibPqwkGdvF4vFqjG9kNnt89CR5UR6PUvVff5s2s8P1Ux4ts1b92z4fu1FPHhRm3BJi",
  "key25": "4evwYWanwVBAfgTgcfjMBmS8SfsEpza9pAadWBkmoGsH8Zpet2kEcdhHAPhxr28Zw5bSK72C7F5akFy1RMNnPMwj",
  "key26": "3MffJa9T8qurzcwp9nNR7w7i2adESmaDeV7t4FWmEG4R4wkJ1G5vEKNmQ2HMjA6Pk3ZcWMa2rJLdhhtV4yDsoNPW",
  "key27": "58LUgrCxUZn9dUKTMtfW8GsMFnvrAmTqvpUZAowurdsXLUuVrRUgxMqJ23hJWtsQh4jcCbuvoXdgFuKThqdpChb6",
  "key28": "3H9foZXfejUN3h1VFSNZPge5W6EireBvwHSJLLzyfUqxGFttQRNVQfgHKbnZh8kSG5uAoCMorYfDCxgLzMuXrQdZ",
  "key29": "5oQmKvrhN9919M5bsmPGYgJivp65VZndMzMV4oWUDp7u5n1yKCS78gsdfNk5gW31caLydXWfxDE8KxMWBKxmbNfx",
  "key30": "5fUyCeVsP6wgDrv6iyFTpqCu68uM4WXoJGCFCUjyjJ49k8R2KzXMeJDVYUPuSoJ44SqNDJWSMSVuqEG3T7Tr8vsu",
  "key31": "59DMU5mN8MnEgfDcivbfU4c75o5ZB48xVgxNuMmVrDqvDGqHZaXLRt3R7DzvpNP2whwr5o7oemHjtNzgP9NScdi4",
  "key32": "5gnDmUodXmgbuXJWUxSZCwjJi7jNHPtuLAAaA33PZ1Ki1eXdTLCq5tg826vmbv379AnwMu4wNtL26by3PwuFgo2N",
  "key33": "2d719cy92LmDoEPzR8Cr5VVV11QVyYiF7MK2GzUSLHjtvZUK4WCNLn9iVKGTg8AfNtWZW8SaNpyednmM49B6hZUG",
  "key34": "5FxLw6GEobZqzmhJdcATx2RvCnQGdyuy8m3H8gUEJctuqBvV7quhY3ewTN5YgbkcGRaEcpUWfQN9herXxqPwvmqp",
  "key35": "5Q6BAzWMXYLvSbZnigs8AcDm46anvVBbTVtagKZrtAvLw1gMwNQhHaj6cjnj9FqTinGf4nNDFcngTEWuEZMUmQnn",
  "key36": "5JB2QEyXDGqspQzm7NT3sApuvUtF6kD8YHA2CJ5WC3Vfm9DivAHvUfR86768a2VoBVrfKcdyNuyvYL1UPEMkUC5L",
  "key37": "4bZo81rFKzCE5P5M5ZpinfzfLZZFnjt82PqdCroMtLfcBYHhKHMfTBXJahkhXCKHTdfUe7zYi3kEzweT5iMmd5rX",
  "key38": "5xURnorboDhR3As22kToTPtNFZoAARGmKsQ4PJTvgCqLcUCp4oKQrwPUDcCGvsNUWn3ffX8AUeUTfrvnHz7T3bUq",
  "key39": "5smiufgoLMhHLJzXqGgA9aTEpYYVKBTp7SU8foePQam4vL1TESdWKHknmP4jZwsfrUZtcwFTUFYUePeZLdSwZBpL"
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
