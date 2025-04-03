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
    "45ij8rFMqkKrXvV2KMPc2tZxekyi2smzJja1n4LVQ57XTT8Gg6CCWviYzEwrajj8fFnJJd242DgFjucaPkqxMiFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDbhDw6esq5GJ8E13Epwh4qRpmFHNrKyg27uL8VnFSBeytrD8sD9PvgvQhnzKejDeYfAfvs3iCBkngAwxkovbCf",
  "key1": "3Urpi2kfBh9qifJctkk9YNdMq3NswWjvuzjffyqKNs3MN1ZfBdzi2wiXjn9SsnJF3eFKmRsJpck4DqJrudTzbraW",
  "key2": "3QafRH86FysyPDDrhP2CckrLuiKreYviV5LQZY18VJogNtF6eu23ZmRjtsUc7v46tDtDLjh8oVj2SJiS42Vostyu",
  "key3": "iSNQtcTJmAG3aBrnFLTE5BdrUvtL8nFenWiq5TvaxwwLfC26BMzrGKjLK3UoBU5QU4BPKnd3A9UY5KzNBP39mVF",
  "key4": "5cfbH8zsaYzaNbhZHA79W5WwuRhhjAwpEx5RGfnyx1f86U6tE9uVgffocrhwEcvQii3sVDTUn6VriCTqJfZ1jTnB",
  "key5": "3Afjk8uSCcsJDv1rqaBZ2BHP7x4Fm4cB1BjGtLW9AiZwJA6bNbkYaQQfrZjaXdjS7GLsbP8P4X7gsUwLnChXNwEg",
  "key6": "5iDATFZN5cBVmakY2at8mNXKxL7vvHjssxnJfTGFByWvn8j9Y5Mp63ZDTe83hJwaZaE7uvmKighn8QLTpaetYQGN",
  "key7": "5rH1aKcPkCYzFEiC3RWTaWQv8nt5ak34qUaisfdjkrFoHkBfMY1zgt6M2FUGgprSokW9BMe8pYeAXJSTACUkmM9B",
  "key8": "pzNLfrocvqnajTRsK4nD6qEGPAS4hhSWHfga28w19NamvwSEcgATNtmoneqVPJLCR33L9hv5DYJ1k2KW9y6HZJb",
  "key9": "2G6N681Vwp5gbVdB9ZkkcD7L1Luo7P7uKWbYgfkdZjdrRarK7ouQcm523z4gp1P53Ah75Mphb5EmKTEWipifM4cq",
  "key10": "3oYpyCazxMekzPzKk1CwXdgamxtLPUvv649B8n4jywX3vvscAPG8q9bTDyA9xinRvvCFJdjDw7i1sJC2jsM9WPVV",
  "key11": "4FAE5fEojBbwnD8poD9YxtBrbyH9fuUmpfPVdcvVr2wx3gQ8Efk4qXEMNTJ8rfuN1grVhhH22BE1ZEeePrsUvtWR",
  "key12": "2hBH1rehaZrMcQeyuWwKZ8SKSzZhfAKP9dvbUH3LbcCmeUbngr4eicAwnE2ryfe8dUnGzLMxFAL2Y57reCMrvmCE",
  "key13": "5zYy4JgASkCh2xSnaRBBCU5jbHXDEQGqeqUBD3tb4JyDXtPMAQWubDWjuHHfyBd4WkWem8EJ86Nob5fHcKnUQq1a",
  "key14": "2Gxe99Fjo5EHq8LAJ63x9jK4Cosrae7uHsPueHrBsJxfaqYTg6bts62CwHzzpKRzT2gsG4zXZEWFxfvTEjBpYfUE",
  "key15": "4sP2sqGRsRE24xLEht3PKtuTPg6ZeygL3UWJFciaL52YJUrQsydBZjew2HTpbPCZF48GNvQdLJhCDrxNZvfkNRAu",
  "key16": "4DsTEQ4aMN4hoPwaQBZ9zMLiB8sPKp9aMnMRgbPBA7um4zaVrtUHyruqvkPqrFceZVxv3msuU9mKGBFiYT8AjpHN",
  "key17": "3DY3aJCeFfFY1qx4D2RXRuxKswAcZeH2ti8hLpYCmj39HSBVYwWYa9wLJpNxpmLtRkHjjDGQDc2asTFdGYsqny2h",
  "key18": "3vWPSxmB4EYTTf3zBRfhNBQnVE1emKfv6G9QXgoAfEMJ6U32RytJ5UZjq1GwxptkVLZP1ZmsWBktrhEYXU5vmbZB",
  "key19": "3eyqyF5FzjLt1Ezg8JMYGqbTQYtqMsUz7MvjNzaTXiqxdGyAwwTYXccqbjxyxb7D8jxE34N495B2hfGAbFY4ecre",
  "key20": "4cNdNrzmgTAdbPN4pZpKf142dvXFqxaeW4qxHMgmDRF1LRtMzMwr4ZXAougdnYAJ36XYNikLAMSyivZth9YCi5Az",
  "key21": "5rcgU12qEd5hbsfBAgfw9w4rJ2gVXUrthtjcVjMi9JwwzDKt98BN7ixjpCDNpoWyEQu4MNfLn7aQkJMnXiEYpqc4",
  "key22": "3y1FZXQMwVwxv46vCYNsAFCvrhWkBuXhxfSoQ6tpSqLRpfJnMhJXyfmkD8yWrieVDx2eookomMHTLixVcGa63DSp",
  "key23": "4zzXuzBTHzUJtcBMYkpmJk9ynjRFTTfFcZoN8rHz1rDdExHhZuaJLLezURVjbJDmNgXM5wPhwR6VFqCmAB117WFT",
  "key24": "2Y4HEfKDgU3VWH5tdDXwpSAQdcnvHXSEwNqBDX2v1MXU21KER55DUzPSGqvAXNrimZDnuaos7LJ1CducCaUBKdu1",
  "key25": "KgH2HGGgBUCx4akT2vcssUmg4HZa2ZPGa9qFfay2erBjPCVBZJyAiC3gPNSURvLAcobPpoZ3j18bfuSTeQTXSQG"
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
