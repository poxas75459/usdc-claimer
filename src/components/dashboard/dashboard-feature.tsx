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
    "5xxqJFBfRLULhHGehQhHoxZFQinwEAq8KfgByRyPNLt867wdXB649vLpiqhBdAnRy7UdGJmsEmUmUkDipfEFdrsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjwyWDS93VPkKJ53eCToKDPCqUXRgbiKLGR9SMDLVDpjCLHJgrAoDSLSfC8rmzWxA9fohFEZYhZ5WEpbNNyZqp",
  "key1": "5o1DLTZ46y28KYjGkRxd8f36vYnfsxGeXTHgTdi7Gjmo1bLWSZLRzy7KBZZ9pLVopDXp74dGKpMFu6obKSTpyeQj",
  "key2": "3ViWByfVSdhEv9LstmWVCUUkp1DM2CsGc5fQ8F9Cp5sivJjbzg6qYf7JR1kNmDaAmX1XF5oGJktP8TPEf81j34w8",
  "key3": "5VFNxVCJkLmsn5K5hQa2CrNsHGbo9XtsKj97YAu6KypktTvL7bHhNtEg8jbqKCo8omfkVme5yFG4pxYmsP9hNPCm",
  "key4": "3DFyhRkUUvqg5gQ1NVerS1voJsyhXK9VrYQ8biGPbBqdrH7Q5amcMJV3BYtiuz1BtmFsAasRzRUEkc7Z3ABLn36i",
  "key5": "C8HCaC9xLsnSVAZFWPWUxBoPEv4N6jTcfQbv9XC83ADgykUg8UYJyUh6tRcdeuBgria2aqTG7YTJAtuEq8Ws19s",
  "key6": "MtGEH56u8ypoQCPqVYmscSR5viLrdmPCGVnLtHr6idMckdGYNwUGeUanGoSUdyngkeGa4mva1V6ugSExGijXLqP",
  "key7": "43M2ezMJP3wnwhhdR9jTr6dhGhs7PoSNQTLDmeHRETHtcMiWcBow6yFT6ZEGz53gEWj83CHgjKxzSaK89hTEy1JG",
  "key8": "3TLSFHE9HMSoULGHj1ediyHH3YGTHSoGaQcgz8436RwacvxMrUAFJg5GhUZvnDn5oRmCycaT6qtjB8rGM3ZqzCGG",
  "key9": "2R2HSLXQ6kQKjZxzUM3iS2Mk19zZcNh8sG7EvCrhouN7Ga2tfw827iUSqqkEAegjKSTXoWexSgMn5HtDYQWzXW8d",
  "key10": "4tYi8MxmAgZZip1Y3JEpu5coyx113Jo47s58kD34eibw13TECbRXr1G3AeUxnEWhSGLBSU9S51b6v1Kuc75zaK6o",
  "key11": "2vPz3Aw4SJE7mjYGMcsQomT1svn81WKmdUN2wfJvsK7sPAmNdyrikPFL5rVQmQ3eBzRknseazcP83oHxxohbBVSE",
  "key12": "5DPV1U7PdGmz4P2vpgXg6C3N7rqgi76qYd7yUCgPLKyq2spsXFbTmfPqRb8kEWaoNRnxzpFh8MjiNZfsRcHYwmaG",
  "key13": "2fekcNzUfhXHSF8eodBkARuP1N6csMocnFfb8dNpM8zT2NM6cvpshxwBQNapQKce4JSvi63u19vB1DJiY5yjkG8z",
  "key14": "555XCaU1suqFPmxPWDCZKxkUSTsxeq1yhEtfB2k7vubiwHNp5sYAUt4mQzCeCVhCfAApxPCtwYmMhS42fBvaESPH",
  "key15": "YDzEzfS23jL39CLQSX32wXgkgrVtJusP7yTT1U2HvGBMhTv9tbJHXBAbnJEPhTYyAk3LiEP6mAsAXZ6G5PqTfNb",
  "key16": "4xz3MdkKft5voLN4warXCwr9rdBR6jMRs4Pys1Cwb8kth8vVWWE7kStXJK137usieAftoksLqwyxfKCbwdmcMDcC",
  "key17": "cZv6yH29vXRsJsecU89GeqhrD1ACTkTrVKVBv6chJ7PBFYURGfamUrTyePMn5HKTStw3GLAz4EnSSDmiWP4Kk9N",
  "key18": "42HhEyJrKEWiQXm97QKZiYFXqpJ5Q8uE2gyVRKovnAZsssWhgJWFfrd3yt1MBaxCo4rsgFfA4GdrMFV7Legzngss",
  "key19": "BGxDw768NXPw9qUUN4fjZrowYqQcM3LwsWBPKa779e4iJstY4QePsmbQVVvdkA6AZLPcuWCvTh6QK4qkBwNLVaT",
  "key20": "EpobocembLbHGXFcQ7aC6ywad4RXB5bQZGHCvMc7C5ZNxJHmysHEcky6RnRVvoup2AFmmiqArwFvehq5fE1zY7K",
  "key21": "2iYHWTHsvn7A4yb54ArAErcBXQhDKw4WCpDUuvUZw1ytZCK1ywRrW8onHBGYyEcpzPgGXzsghvYd8jK5Y8gCmbtP",
  "key22": "fTybFaBveVKGVwkTZCB6uE271DaQs5nLEYh48pACTbU2Pcysb6nwhQJTAmuKsDQsT3wQVjDB4hDC1of88KjRczX",
  "key23": "4tLWkmtiHfjdYydAJwkCjMg85M2Ex9xzwRDvgwf3wy6xnaoNHCdz6GxRwhGin3qEFvia7xS9iNt8cKLejpi8Ua9i",
  "key24": "Kfzh29xqVtRG4gku95R7VHTYx7LefvAbGmJ2wLi8ya1xNEyZbusv2v51iUoN6Y2dDCoAsVwvuo9NEFupw61Socp",
  "key25": "25G6VaG1eHEbNAmFbfEgkikRSeb1C3J2bbHRtWphydmt25X5VnvmWz72socz6NhCXKtiuNXPtZBd24DNdZoz5La4",
  "key26": "2TnssgZ8jWjQCBudW5B2vU8639W6RvAXbuiqsH1wzbBP9jwSa3zCLg2t9WVP3DMKa48gFoGw2pVpjwE6uP4A6Kjv"
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
