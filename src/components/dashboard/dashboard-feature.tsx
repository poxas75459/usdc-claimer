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
    "4cEY9812BTrWK9nRjAKrSXE2dX1Q4PZUKUPJfNt9LcQ4yWJ6X2MH1Ky3g2d8U8FLm9SmVcUysqZGxG2SAvFW5SUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBio8bSiHo54zBqsuDmQUjkMoWsUrBvpx1stdRENvgYn8fbh1EJLMPXFTRuCRuChYh4MZMPawMGLmvcWfdhrbbR",
  "key1": "2LWL6jv1WLPsJE9zBkrUdyqwX3jK3JeZfvHPQN4uFr4zSFRsHVsQnWxuNYwoGpQ2Efgymn7dtg6Wbedd9yNWTu4W",
  "key2": "598RxX94GJ4jmMjBSuM2DEs5w5VHYG7xZrN1bhhRZFUBVHbyruq3PePHw5g5jWEG94hT7aeJqFysAWxCVdxLw7ho",
  "key3": "4zfTBX54gpSsTpA4NL5GrmCUVGEdetwuCzN3Rf6azJpr6not1furHEd9ABpkBWQGZjwApGXH8CzxhSq2trn83p5A",
  "key4": "2XXawmjDAvJTrUn76kJ2rEXnMhGDS3WCYbmS5iEpbb4NCtZoczFQSnaRAJbk59iSb9rDCCYtKaMqhn1uKcWt6jnd",
  "key5": "3mi6vD7ouN8RNwVJHTihMV8bo8mQUhM2xJGr1cRVW3fjZsBZsQ2XKbJipBtfTE81uduqmZ8gsZKCFaaa2WX3CVXL",
  "key6": "9dtpGpfCRaJfwpWEwdo3AKsdAYKwEoKSnnZPTASc35hcxCsZYKFRo5qjeA7amr6U1UEvfyGhoWk93S19q7YAgRT",
  "key7": "4eCdVLu8kNiV6qsU3okwc7xp5A8LYAjFsC2pWnQUNMaN93yCFxfzJ3RLztfiJeLAF2eyPw85FL2CXUze2cq3UxdY",
  "key8": "452d7V8Yan6oRd1Ywcb988wpZuZhYU2HRGEnppX2e7ojq52mTuSkqgj9Pr7FSa1ZkSAZrLG4d3fF7919imxptHUP",
  "key9": "dLZDhDa4LSPz43Zqcixrx8ww6xvgvF7DJZBsgY5v4E4h35eU7xiLecNKsvm26v8Vgjt6v7LM5jceVAcSGHQjdZr",
  "key10": "2gfmwWao8Wsjv263YuwvoVgExvL2ArD2vbMyBdseqpm5gVXnou1zNAJ88yiZstTwoe2WZPo3vSfghMKdyigqNhtV",
  "key11": "5fu7TxV4zA7wUWkovbD1gALDMfFDW6tSWDHncMZzhLxidqdVMen8mSrayd39jMCJ53uaHg7VbrU3K7doEcFTbgQM",
  "key12": "5q32EybvSVaqkpK6vpt36XN4JcozUDmcwdYzRr8tKkndDdkNNtDFbmmVhVZicmCYdqj5aJLjNo3L9Wuzxdq6Mk86",
  "key13": "5GxVSPnqEThFeRRkBm7Mc5qsrUuHnJgePvqDucBNQPd5xJ1BxC6FEqmahiNBWjQamvrve9QtY7grQ1AthKBvUpPm",
  "key14": "4svFuDhrRpjGpzrsqy34phV1jBrh3bAE4Q6xRkLoUm3988V6htYUZ74yM8KwM8wVXFnd3UZpJzBjBzrKXK6UqJrV",
  "key15": "3nzRGbqxeRdGXoowDxEBiFzDXamm5yzgG7jo3ZBUQHTMLvjRPhGLND8krfYFhSm4WguLf5tgLu9cRvufwynXqnBV",
  "key16": "3neMWXyZenQh6FfZo64Ngqav6EMrKPbnajrpG7vaCpP5hMkQG5WiA9fU94rjHR99h4NadPnj7v2EkDGDkXCEofEj",
  "key17": "2SCrTm3qcLXM5YQEgZ2XCWLbXkHP1BWZyKZUPzRLQpmaBMWM78Z2K1FiwguoGUqD5qk5AjyaWoiEiD42D1Pmqh1Q",
  "key18": "4bC9kH8uJNUAW5HGFVbcYbH5d94jUxUos42LvGHN3cpR3tejWRuC42sWUymtq7HrdANtzMwcV37kfauHmEf2aWTM",
  "key19": "taEk58v4hE6B7zuHy2BVbeAV4EFVPe2CE1oZfnQrbRkaRD9HnvVcYhkL358dFYdQdKo3iPA1ZAaaAWmgX7tvrJ6",
  "key20": "2ioNRN58JkqYcMgg3kepTVfkqJvthufVvhSZqdLKBnXD15jPTvNAXZimm5oQEsPo813e8v6ijbVwGjMZru6mrVBQ",
  "key21": "kitr8e5AKqY3j1rUAReX3VsK9Yzv55zTf47pRnuyzhGonYQouPzpGXJB92es31gcQCNc4xQLuowBkCbzswZcXbr",
  "key22": "5qraC2GgbkXzq7XA2NqbJXj1iYUTnj5Rt2wShpTPnD3J87f4r4idi3ivdaPVBYAWPbYYeZgdUfZvH2nAyHTpQetg",
  "key23": "3aYyF2uLbZvDsBHaeiKC7QoSGjUANTxdHYfMzzjgRvTL6rzPVxWV7qET1gWPPZHmV3saibeNGxPbRoQzEzd7dyQc",
  "key24": "27TGTMRupS9oicZw89Ks94XCSQ487stVoLvRXSffmtJApwxL8Pc1PVF7UdEEqsyMgExDZJtV8ZoSF4hWX5Fv5v8Z",
  "key25": "3UPdxwc4HSkfnrVRhmtC9CwcUNHxVZa9KeooXR2P95G2EV1ppvYcX1xL9Nkv3Rby6YPMhLCojBMfFfEfKhqFFZyS",
  "key26": "3hQp88Z9KbYGwudrGhhFi1mb1ivzRt1TgrZRwDyJP1nStJLFdmQPn21d8sijf3ZHNv6yaLYEm3S6QtpE1qw4sQnh",
  "key27": "3DScY7KQ8kvWM6cbAMpgPtjKsCFGcQ1K92xYqPCPQCpMo9Y4J9VCdXy5SHJbv7aa41MQXfWhf6RSHzLWjxw61TCa",
  "key28": "4KcztWNbv6YatVegd2Ye1fVbUPxYHS2E2eQPDmfhAcxPkkS3XxTpJSTDo2vJFepiADf84xbGXkFhm8TE3VmAHcPw"
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
