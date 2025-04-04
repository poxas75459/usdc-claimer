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
    "32mdEHGYNBT8PQyokZoNAXmiBH6cwuueyZL8mkZ1Z4x7Wc8v8wVMUwXrQgAWqjWSNxyGdwsFBLBmnhPTn5SnrNiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dmb8qnqiQGeHPByMmCRTdS77mVmbqRTJotPgUWhRnxZW8KatLUhyXaPwVMSPYesPszfffnuTKrsGXukpjDwUVb",
  "key1": "3vsZYo5QKiEHFts2EBwoNNdVyP1t3U1a5WEJfw2fPyrhUXdk2vbR6hJkhf727xQgUhwjooEm1vnnsRSE7zWQjQjQ",
  "key2": "7LQEczPrUp9bXXdEppegPpAcb7hyMJb1Ks3YCAASXDzmF917mL6nZwmAyBwD55Farem3Ubu7fLKErxbF2kkXRhH",
  "key3": "rRuuAPji7dX1Tx3HFvFSuSUNodBVMHDkwzt2nath6u18yUZ9G13iPy2mZHBQCGKuEiaXCiWqFiBoDnHDsMBeUW5",
  "key4": "3y1S8bmwButmGahkDwvP6R49jGBJ1SMXHmZy8UZMDGRJ5UdpjXsGUL9N1EoAkH78VBSoR31NXTkbrzNyBFPu5TqR",
  "key5": "TZAbXNMxbaZVevjVhxQvsJmQqqBzjwfBruAMPF9CDJqvURRnmbBCbH1B5rND1NtPdxx16xctxXkXkQLyy4LGP7r",
  "key6": "5VbvTKCzjEadhCedVhZeLXfE1E2x8yz6rck5oDudAafFjVgzRy46CEEES775knixUGqSLwjsrHsZpeCzDrtKfZ6G",
  "key7": "K8varW9BoSMEMhshFUxk2jtP6kDaPKeSu7TBAD9nmxvAt5Q4pZ59Ah5GKDeg31vDf52GUzu8jBWUhFwZrTf2GmK",
  "key8": "2whbFeDubK9FiwRmpqMs2o9ysHoNmjMJuLWXnzUMoXDpn9j7EX4EJKnQXVAjpmTjLTXqKitrpeXXQXNQ6ScdhBmV",
  "key9": "4waLz5gzDCdxX6nyBAXKRTEpxxLsdifiwFSS6XLbpeqVfAwkFtvtEkoD3gEMUJajFC4HbdDiiBCXHzHNDkKHpYej",
  "key10": "21UZSbV4Cu5oNrBTDtUQarJzxPo8Neqw8KvhwXcaxwBiqPHSWn1RyZHHBfz9J1eQVVWjYqsbeF9L5CwCvVXby1JK",
  "key11": "eMNA7spTNb3mmKxSPVvGqerbmhzjV56g4ggwcoQTCN7awT3EHegKmyr45XTDPiBjP9Ucx7nzCAknKMuPSs19Ci7",
  "key12": "ykoSnHLg16aErdTN8w5yrzreBotNxj2MqJBe6JHfryCfrGUFCjgXhtvSgtySHcm9pdug1VJxuEEtfZmmLe1Eoup",
  "key13": "zZVUJFwFt6UUN6QzzJDNTC9zrZEWeXGcQNVR9pGVANdf3n8sFjcbtb8n5ge2q4Xj8ZbLxk7Mc9kPqu7VGR3C2oF",
  "key14": "5RiTaf29yF5AwC9Gh1sTECy4csgqU7d22rWF4pHeh8ZftrZACfGFfXM4JmcQcjXvrcMybCLSNfS9T4ozbdvJXqMR",
  "key15": "2wb9SpaHZWHePaUj8gvxt1aCSfTyiSK7Ndq4yfuPWBj6CmNpZNqyYVpTRKTQm4zR1K3jhSh9UjZjAuUiYkviFvDh",
  "key16": "57P6RW9Hdh2nxEif6X8UMniPhYBa7xnve2cre8fKtcU8RVg5JNc5rUsMmM7f4do4yjrq83wUHemSSaEX3soM4pzi",
  "key17": "3uHV7nRbbU5CJNizv7159p6ajDdL5KyEKqgdWW32p5ufWEbjTndBCLQHdcBfE1rNLmSSZcMNU77Hi3AD5ze2Axwg",
  "key18": "3TJtHUYkzBSk28FQCfxYbMy5Rn6tLMXG156wrvmVY9w2HV94EzyCVwmYCdGt8QKkL5DdYBAg9AoBV9ftg7Kc6AZ7",
  "key19": "449juPqL7tEBrdKUKXpKT6TuWwe6c9Aaq2vTmvrvta6tLvF9sHsHbJd3dzaQZmwXg5fgpkn8q71hJ3woDCWnytGp",
  "key20": "5pgyo92iVzbnjjVcQH1czZsPubRU8WrGjXVsjfjEvJDaW6gkky81FFqLr5crX8asPBmcpHZcpfwDboLVkAhurCHE",
  "key21": "3sheaGP5W9WZ2WHP5nDHiJxsAU3fTGL74duZZPzETS9Q9DNp6CuCHhArabJVuTnhTPUKLvZC7VEeydGxXQgtzXbd",
  "key22": "3uZCnqNaPB14S2CeRx6f14Ta1Lxe8daqprF2yGtFZeKzMx5uz1VKZKCPYv5H3pzCsJuRCUEGzAZ8az9zYLGeoZeu",
  "key23": "2pEXHHq2UD8fpJPjwgxCoipTMsBdN2Rd62cfUxv1T2N92YiLTNPyQ7VqfCCwER13pCzsMJDCcX5sEC68xTFBjeeo",
  "key24": "2pPNNpadtR2ywePYwxaMBgbGh5MKEWhkiyZVhJ31CvV9hXG861QwHNXEhf7TiHZTfhksiBCnCBDC8SPNRaq9KTAV",
  "key25": "XvnkABqaCkV9v3nr7HqMezNABMzgbY91QwHEELgyVegdbAiicwbGbXHB4Se7CsPBejJ7PwrGEaEmDuaMPtFrU69",
  "key26": "E5PLHXD89tUriEqr5DcZXq29exhCzfXL9uFvvMqUj1cy3PbPKMNzKWwgLvmFXxBhkxnpkXpsGQ3GqunSgLcsDQW",
  "key27": "3HRZL1ZLB55wTkXX65TXUv5qBmwy2KaUz8xBoizVsEgYvxnuPGRqZs11x8aJ7wCYu4FsHJyHbb929nRP3QCCwPjv",
  "key28": "5BXKeZEXTRVQGsaA8YrCHzzZqbPRxySwXuxVhTqkbyVRXB7CcxV1tJizAaZgiVUpXebK1fQfDAg78WYkUgVxVP5g",
  "key29": "2PDs7BS2MW7fgxuajQSCuMavvyTx8GspcpVn1PaGnL7Cur1GUa2MRpmoatub7JFgXKMpuiAjv4xczsoP5ueiSsbH",
  "key30": "5h3xWsg4qhcB2wBoRX69UqzX3jc9G7HVvRx8WdnwQocwNHaANKEZoFy6e8rBt8WJeGRpgyyETgp6J1xuZDQVFXPA",
  "key31": "uqjppsGNFfnrVB453VG9idGZUAqPnH5dFSmEHTLyCFTEV26PEfZKMVYwjqgvPpxGVwKQxLafRPzv8vDVPHaSjV4",
  "key32": "5c7hdANagkPFBLXQFaKEBZvadejmkJsig5oCBevnd8KyYUYEcvPmwLCoMeYvaxwYoaeaJZFUmZ57qkYb6FesbVoz",
  "key33": "4nQqJ34mJNGtK4GodJ3dCjVE5yzxNMoDfcyrQgozwWGbmiXDi2y4EYyMwEXq83wWc7ircR9Xon5CJvrtjVqYjAxv",
  "key34": "3xSmXACDretcFQQJ6JbH7JBStfWfcXWQh7i6SszNiCNSoieBbrRw5ffAFuH8sDzKJKbnvqGbqZGRytP4qGGDrsHE"
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
