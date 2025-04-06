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
    "29uepWrw8WD8Qku7CSB8FG8oUdCZfzW5VRSyNymuJjeGdL58PxPPCFsN4NrTigg3AVdXriuNn4fvRo5PVoMHSzVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1CmJXErbPiwsbjSy2u3SAPJ8tptuwCTdMpccSHcFBxQdx3FDxL4qMkWHE1w95fSWRvcVzRBPe9Fsa5Ct69zqLi",
  "key1": "iSVMJBvTpFcCruxS3iXah2sXUM6d2v9bmcB1qmexNJhMsGKUNC4nCE2LFvrVCtFggizNvDPRF2gb4VxszvZ9KJ3",
  "key2": "pZAAviEpNknhjwBeHo5rrhQ8hWdp9LHCvpom1yQHDnyec3kVTHxKeSYEAHxFS1Rp8g9u39iaHiuByg4YB5Y8PEP",
  "key3": "e6dNfvLa1rtEv9zs1ehQVhHfwYCpEUroHk3Ye3u159F6HjeP3KewwAdfDxGRgDpNTb27YntKnKm2ckELmJThd5B",
  "key4": "5zCo6X69rHrjds9uQFNvtAsJr3e8Ru1EHWq92L1dS6pgWWGS1YULSU9NgZgCQfZza9L8f5F57tvh9SMkABtDL6w1",
  "key5": "47rUYBDVbDY6HMTJ5zcYpPphDUwKZqK3MuzzXhBtn35MbLNuxbhLtM91kEEBTKfWz1BR28HydNSe8KRRAX4LoKaT",
  "key6": "2PhaMpoCjzrEq7E3NYTWWNG6ZJxiJ6LzB98oUHgihche4Z6N52gJaH4mCeJp84L8xGU3QEAENoy3igcpReSW33JH",
  "key7": "DVigNwYdntr9pyRzZDxWQEnA1uguXFFwVDBH28QeSf5AYzwx6hLMvVsZZxhaYaXASX7pfr9rQ29nS6BSSdWvDmr",
  "key8": "46SLgmbe8yV2yHn7Dcnmg6NsmSGHzKU3MwmYU99577RRRDuQsXi3D8eZjoNxgrCWAJGHGUEmELDQnmVLoAbHByro",
  "key9": "5gS1Vp9yRW2AMsnNDGpiTxzV5Nfxm8n1kYY4ekR4KS1pJFQnkdS7MX3AV8mNNVLDMyScsoJYnARmxrHJZM7bBfoc",
  "key10": "4kcE8kTCLcaPebmicgEeCYmFUwPG714dqWUQzSp6qPU9zxuMDpkzEDaPBBvenhczuN5kDeTEZxj31DfSYgq9qKTe",
  "key11": "rFxjawTrMNwqwZ87o28aGHGrWPmqLTfEu2mwUXwCnZQGfE3YaAsVh5eKjJJxyKYv1uzGYPeVFGAuTJAVmAkCPnK",
  "key12": "2ff6QoCVKiQDBQ28nxWTG6MChYaxpG9GYVMbxX7KQuwNVZjFfCULgKbX6RUPPLuz4vi6dBYYsDHybG6pEpHhuwRA",
  "key13": "4mndwR8a2vzabeFZVGFZhs7qVHwr9egfvDgico1muXk2DbzfXB6yNv8Vbtabu4j6Kbd8QStHdmksmprPbmPNWNyX",
  "key14": "2TYuBaoYj4PcZMvhYYtptqyFhedCut36r8nfi8p9ZN7bJxiomqYrFQUnNbCtqpiY99u9PWHDJUW5EmCXfccJbHf3",
  "key15": "3HomTJ6zDYFwWM9FwEQY8Fk6Zp4ptu5a8Ut85EEK7karuzdhpJnBtxubDaewnBRYkxtCYLYgwzgwReQHCBEv3xw9",
  "key16": "1c1dXGms9TbHbd2bK6MLYoJRTf43qbheG64AhTWtQ3TtjR1TFf7nAarb4zsfDjUmcbwWfTNaJyhSqCA2F7yULYh",
  "key17": "4CBNCD4psECj56h213C1eCejUW36QzBKY8ZCWtiQpmDjAfttEFnoxp9LrPwvXSsC1jqeJ9JEy48NZH8g8GPPT4Pa",
  "key18": "5kcdak4Q6tTVJGxTx6jPHB3fhyCkHEAFQjd2MHuz954k56NLtxLnp46LPY4iF8pccUYhYPSJRgYu3Zc7xtnTgVhL",
  "key19": "2w7XWLHtGxk46eswNcEZ1ai7ecwUyLuT75fjAYwLYtdKv5vPRVEAJFsW3EbBv3DQMd56beXimDaMmFUnYQPjwNLz",
  "key20": "4VgyM4fhu9PLYAUPwGAU82hWcurxaysEUExqhAVNKGjJtuDpm9R6vRMkH3d5PXukP35mWkLyqvCZ4Zy6zivcU1dK",
  "key21": "3Ggxhek9WBrc3jA53NiWM9x7Cgo788jM8WPCw5Zo7UJ81d5eZLp5ZcaC61wHFHbkk1nZTBqRrbo6b7zXAnPQ71xc",
  "key22": "65wHZpckV8wJ2jUbTTxX9gkmvDFEgMTyhYaB6qkyEscu949N5kc1trHH1wGM8CvtwbP6codcau9UUXQdWuDB39Pr",
  "key23": "31jg9KLJ77XsKuZYmQJr9qhkPpcqbLftg3jiZbVbZtR2cjqzffFGn1SR79H5du2eHkbTefFG7kNnh9sDnPxXD4ut",
  "key24": "52d5HPPeSw7gzo6RX2uXexethKpXXbZBMikDTNrcA15UB59yS1E4ARptkoqnDwbAjTatq2rzEMjSTUE8dVAqBSQr",
  "key25": "3HDRHLg4Lo1nTSfji2E9VhH8i7dY5doE7GbS7f5HL6342RLiVoXnE6EABqMPCdsm9m1uM64KS8ExrkJ2nG9cQ8dV"
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
