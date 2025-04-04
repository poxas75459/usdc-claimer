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
    "3kvtKzxzfQU8Ber1ki3sgAnRin1buCWtDJLegMNWwdGguiPFEqMYJAZeWKzkRdhXcddUQD59FDZV2LSPXHmHSsnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hc7k8BF5qbd62VbLqxBB86McXSNvnpFU8waJGUj8wHbyQiGSTaDYt6nPSGRcJ9nuqPnj6RXBfjLcFxi8SZU2xqk",
  "key1": "5mEgjLHQrSBSftY1MzGnfv8JNyrhP9VLeJXzVNn3S8LLYeFPfFGVRiAstDfwu8UGatKgj3MTW4Zv88P1Rz3MNBhH",
  "key2": "4fgukBY4hERfWdCABpQMzXJaBDNnv5KhDrrFW1FKwdzwrPbm5oskQUdm9ChwhcUCQHk7BU1jUvBRjK8NKhhhtaKY",
  "key3": "3WFZGLkDsij9VLNkaDB6uSztEeh7ZSpDEk1q1CxQkeSwoqKx6Ns9xPNGTNVjHixHR1Wwn28k3zUa4XQtqXmAecZQ",
  "key4": "5N3TivmqSQQ6E7UXH3XzJ5XafBJ9A7BADTYxkt4MCij4LMsFX4MmGDSdRAyTuoaWkNh1X6ECYbcSZj47GGt5g9z9",
  "key5": "4kdAfqnQcb1Ce6zvZHwNDfdLXBJ3BHQwjLLWu1c7biArzTMSu1JaELMqoHPddnhDh6j1XFt2f9BVAfoPmohjSeFB",
  "key6": "3HDafP5VwHQKY9JxNLKkrdvyNxsuVo5DDJBhVSkC5bzbS78YmQvd8gezLFVyGJG22H8gGCQyNcrBhREbQX3unmou",
  "key7": "3Ltavb3GPWwf5BJdqKFLEFL9WUCW8Y5rpwt59CcoiM16d8ytWfdS8dPfrHohmo689ShtTpSCMpXJ6UNWLbW6E3DM",
  "key8": "5SSv4aWgeVZwD8CmdRZs67UwqJpiiSeTpgckk4FWA8Pi1hzcGWQHyNsBwGwSTqrXewPhK4otnKY4drn2RJ2QfTR4",
  "key9": "MNEhAeMsi6wMhuzzg3nNuiw4MVjdu9Ux423hNVR25rF3PygKiZ4UohV8ikJnyZWrRqZ2vtd4i3AP1b4ctjYFC2Q",
  "key10": "5ooeAEtL9xSqiNpMyACFjcaeLj6VMqsVHcKKGjnVSTaJeYbKYcYHCz7h1rat14SmaF6hVEDgtWsZwyWH1Eo2fhDw",
  "key11": "4v3hFjFst7cWFmxwSZQ9QJ75a49iZnKWdSDFtPeoZnpdFndF6AJxfo7yGLSKnStnvRE6sSrJeeBb5VzMUrjX4NYx",
  "key12": "4aUatrMzbazMkVjLD4j6Si8CWfvQmTC5VmxnZNZSLyqzr7KigJxF26JTXapM6ahYmr9LpsDAA9jZbijrAmCo5CX3",
  "key13": "5Cvhfa1UivETERdnJg9v4xf1cArNRNvvokR3kfaUJCvNq4DkLKUnvcCU3FH9gJ9jUHMibHijqmT1yDBkNPvwGTs6",
  "key14": "6xKWyFEjYBgcM8tZ59WD7zdi89vHh561JV8YKqryhBoBqqznuj1yfKhPh6hiqgto7wwytYEeuRgobE3p4kKwC76",
  "key15": "48MnGFZVBRchCxCiCH5H9wHjaXtKmhfi5UwnRgNaJC57A9ZdSyJC3jLT9XJW5czhvrNxm9poonjaXv2kW41D4NSt",
  "key16": "e7mYyVMgkQb4v18CCuAJCCDk5DMFnA6Mjo3BszcNr8F62yHs9eXRcQX18NaknwVnXSuG2Bwno1uQDaYNFumqRFa",
  "key17": "3ndws8LjW15gGucE9Fx5CEm6Z9AXBoGFCNZPvHyiFGjnoHSCVjetgWk6hKwzkEmaNsswZCjepJnj1wGbUJHHYQqR",
  "key18": "27oufLii3kEKj9PP79AWFiextRad1HyPeHs1PrQ5J2FhV5ANbHHVVfAnK6EKN4nNfhrRAxpGsBLszPKekRoVXWGY",
  "key19": "VQ6cKEXzATBi19EoFHmNCcc8nAhicj8c5ec9yYeoZiKn7HQU32YemCEXk1wqJoKXwfSWEPAbsPd9RRCgQx2uTVj",
  "key20": "2Ty7LBAKFUmTCDMB5Qy1EdM5N2HHmTGrAf6wVVPabEenN8YcywMb73phhxPd5tkJJySLPWNM8yBh9U8zVMv2P9bB",
  "key21": "5x5g4BbEX4dGjgeE5rtpCudBfs4XvppzeBV37nJn2NXAPuQ7QJsc5hJMHy5ifoEfdqFNajfnCCC42cBQsM1idBYR",
  "key22": "4fgoWzWyUAtfDNsUwhBBWda18Wixe1cxQwGUZX9VHnNeGC2CNVzVaaKHvsRaASPC87Ur9jWXSQeB1Gvgh7SneovA",
  "key23": "5ztEcNr2FhP8YpB4RgtHsyXgehvTV9rcKnng6xaDSLimMtrwM5HYSndmCgcn9qAyw6Q55iSonrmNpUj3aR2Vg67v",
  "key24": "4ro2KHVhiMu69rgpPYTdB5rKBzZYesTGyLw2APs8eXyXAAYpnhEB1CeM4ACvC3YACLmiLw3HRjKxexa1hfWdXSy7",
  "key25": "4jNrj2m45v9mAC2NEYNWRuSGqb3ZjnVYo5QD7jNQHobX6zx2yrssSuX4nLKKSBLUaJff5xNShPCqJfAd6RnnAKhx",
  "key26": "2S7GFzE7ZsEx2PUmBpkUvtPuh5WQbKv1sLQ4QsUCShc6VM4jTf75xGpYMPeSwaSyiBXux8cAGcbVtbC8qaXtJ1j9",
  "key27": "4Pc1AqCQswXHys4nsCTBUSEQLCwcNShirhJ1Cn15Be6X6q1WU7ZsgDbynXWxGnLQshhLjzbxHGDUM5qWRmpmU5io",
  "key28": "9xNwnruaNpW5pbezsDS3Xaca85NqEJyBx8kYNGTqvqXUjuQy1T2mYQxcpWPGstw4sdrC7Xw2c9bLJygCS92TJfr",
  "key29": "4j6R7P63nfg81WuNBn2rJumHPSurcqqgaGGUkgirc4HESS1ZBdmcNXin9nBeCFCih8SEmP7rHxoAfntviS7rHSDd",
  "key30": "5ngyWnURpsBdy4ujzJEvqWNqPnBVhYNg19hMBh9NVnSy4cABKbEt87oXWxBSpYXqgNzRrHAZ2BCt6XucP5fXzHzC",
  "key31": "5HGZBzD7FAS6E1D1yvFbw2ozLQhf5nyXSM33BmLnr6skfhRJS3JoK5pXi8sUS6wMHjEmv34JbVZ19iRXupu23mv8",
  "key32": "5cvi6NEs2P97PpbR8RqVEWAKUY5ki7pFfouGMxrqwupVfXkR3pzhkv3JScwRHaokkeJ5GCK5ZyBisQ1sVtaXe6EL",
  "key33": "3RdvcQ3dJYV5bAF6FtRSqgzB5Vd5cemjk97d9FrmN3d7jxqjZ71cj7JjEhb6sg1uoRCh4sgunEtENmsr8Rz2N2sk",
  "key34": "5QSgevrWWBh5TeTbJRrgcPr4be43VDFfZXSNJJd4BSEcFAXxCSmcKgbzDmeyUiFJ9e8HG5bWejh7jWDsnZrQff6v"
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
