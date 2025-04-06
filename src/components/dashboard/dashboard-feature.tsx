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
    "5tD9c2tzsmPsmTneGXfokjMRZbW8APjtTahCMa6FZPmAVpPPRaENvdkS6kfbogSpddcS585DCek6LBA48Yxq33ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cMSuggk85kGWKYBJS49JEbCSgaCqgzN9t9JmnVZpm6sY5FfVm9W3Ngxs4hi7wqjicN9YXPGww8xZh5d7qvNYjV",
  "key1": "32eYYJAsZrezGYN6nNkz8varhPnBq3iNwF565UhB6RqxVq1tjbFjWEn8ZYcjSE99VUauninkMdR9EezDV4oYDdqy",
  "key2": "5gspYDQQktdfnNaor7kQuG3DdVcZVaxXTrkPGajhB87MiH42T6qzx4FWBZ95RQi1mRDDhhp9F51Acid4nxkJ3amR",
  "key3": "4raEWW8WiMStm1jBQgepUhn6qdZMhyR3sPZLSTJLTkeiEscvfeHF5KRNymR98TCYZQVrHj1kW6Wmv6fXa8JVYdgj",
  "key4": "3UqugYUTcvCqpDjXh825edPEqHUbB813rDk3ga2Fqj6uPycqoeujaAfPz1Pcs5tWovtM9XbaxguiGx7t32bpqSRc",
  "key5": "4gwGEgDD8FSsxArvqv8kj63po9gceBfdFCLZF9Vj2XnWHdofVku2o6KCGg38Kn1eGywWLMaWvePvXCWVAfYUX7fV",
  "key6": "VuE2WTcPjyuqa79VAhH5uj7HLHJfKkCvsLpTkTRifexV4ES2QbSK11MrW8SeVkDem28UdyMzv45d9xaLbJhmG2F",
  "key7": "gbKNde4P43HpTQmyKeZXcEwB865LC6KxeErQvrEAi2Pd4Qz9HpwVDXHCkfwerG3FbZGaM2nTHhN8oQ5abs9PyTP",
  "key8": "5CYQK5fTs2LTmRcHaKVNe2HL3bZ2NFWpSRoJTucgG2BdgjULXmP1w9RDEdZEKVh5y8LUKD6kmTLS9pnWRvMmf6ut",
  "key9": "5LfNiZHv1rZwJPe913Ko5RdueXqFMTeU6RbFBxqp6926w6RvMuqP5677ghSaGqUgsAfB99JkM59oN6cWSa2FoyG3",
  "key10": "4SF3HmAWRh4Js5U7PVxRBMsefiaUhfi1ML7N7enKnembhWriWDAdsmS2USzwYBVqm4FRFcZxzUvgWL5VBKgJV65a",
  "key11": "4TN3s1kFmWkYzbeJW8KMUPeDs856VH9XbDtcHbYNfkiSZBwo4mN1Qwco4RjTLDXN5k686uKHDqKej2ireSCaA3oY",
  "key12": "4o7TMVvcWUs1LEKuSDTbqRqkpfrpmKbXkcQBqZA9Apb75jQQwNaxgVqVdv4TLuSy8Zgn8BRJkMQcj2boQUKjqhad",
  "key13": "39gEsEhFwETLkCw1GuNADxEZTeWuEtGy73M1ohJddbybbNpDrF6Ao5Bp8mweUKfvPiQsPe9JvTRkuptUjuNbG8s7",
  "key14": "5Tr1GXoZjaW9qTAMx2kE1gJgEACN7b3ykcTGLN7aoL752S7xmFhuHAWdxBfxbVUseWZ352Z2GtpajAmxxWoPy8cg",
  "key15": "LsSEHp8KbavHQ1vTXZRXrtD5BPESURgCMGZSRm7seUMKPAhvL6yHtVG8EJSkBg4h864fcetRFxoEqvfgfUeftY9",
  "key16": "47sFYp848t6tXgyyikGmT8W1969JoukW8bhJoPcjh8fjRotDMjWyUaHSucoi2R7KeAiezxSq1uaVZ3E7gkCVRiB3",
  "key17": "27zVodAbcBW4SWqK2GyKuA1ytHQE7owoTuvKaUn1ybdMDuYYuNXp1NeJx5osqnW25E2Gq7M7gZ4MTX7qkV6vNmgK",
  "key18": "4MbmjEiE82VPexAi2fWzu7q33fScSkAnMUwcBjJqhTwyDKaNFgwMbcHAgczsLWLQnQ2gpua7RtXzmQ3gXdFxGmrr",
  "key19": "2WUqDFwnUtce6bCJoEwytg9wbtWsRBrxK4Y5hhQsALshKVas7nYhmkvJSBjs6aGVzde7pAm3FQVMUUsmka8osVxo",
  "key20": "D3ZsP9q9ACHo7Nf5mq1rMBtuxs6Mq4RcQmLr6hx64R2npYBRsNWZ2j85jKqMTLGFHBVx4kdgtTRYKjKJWv4U5HR",
  "key21": "4iuQVkU6kuqEVFN6hFXt9QD1e2TDHnpML1yCkWgceHgJaJfAUZhj44WZenBVBhwmXjeRizsgoHUtdXcFXHXJQjXS",
  "key22": "2NUf4tA7UC2Yr4zzuicUdCvUbF5e5k5tQDyLBeQEz9TvbBCcRV5gPRm9gSsqgNTV7DovYX8q65SLMNdgAXtwprNJ",
  "key23": "5HpPqg6PGRjoXxpozJKtE4hN1Dup8wNptdQwkfsT9DBQenW9TAPzEFLxGTgK2FxZnSxJNu3hRywZn4WsQmX8kG6z",
  "key24": "4nF7RJddshTc8bzH9peJ76dpkjHWo1UVcunEge8hM4bU1UPavnPYqXUD2zft32NJ7ZMNRkYSvT3KSsbXkNsTXcUz",
  "key25": "27iKA1H8K7BhB7BFfAhRMjYeZNKkw2kiXWRq4jg1eoZYArLUHYRjnYchVn4yUkSAQTHTSmqHULvKmv2n2DAENsr9"
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
