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
    "ZH1JJHQhv3LoWnQP5ffnsmgM1CHHWZCo4PNJC2hJVHrVgP3coiRBiinUYY3n9w5RAWqv9FYnJPsQRyJLV4gvrAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gEpV8Rv5npyUaSGTBdARAKYhMDhoRPbcRZwK89iNBpwaMZw3NdMFR9Bnzz8rZ9vpSHhDDy1v4wGs6wcZfesQu4",
  "key1": "wgCSqEci8rphuScTSkUAbfJtoQjybkHTHCiGsNoWuGUpRyAq7rJBo3QQgFMrScvMkfFh8mmfkTPTUv8JFAjgrPr",
  "key2": "srJ2EbyY6oZrNnknQj7zjbqXbcc3K9hz6FH6DgZELRcHMShQ4s2nL5X9eD82h9Mt1Vr6vWR3E26xHfKdzMNZWrE",
  "key3": "4LC4DPq7EhgXvs1iw9J3bRUJKDLmsYRQGDGGiGxVWsULjtHa4nMPppDZEWfvKEhKHfTAUWsjU9kdnfXqBzLNSQvP",
  "key4": "31AzqMNK3oJgWnxbMz1XJUpPbVMhjDL7qnZeciw2q4ssw1s9zs3VufWmMuZMq1VHst3GrAZ5f2cLvtkjh37xS8er",
  "key5": "VtTeRh9oFQM7DNKtbj8K2hRjtsEDCCLLMy6oTvJvNTb9Fya5k8ocN7mieu4X54gsmYse4jRZNRuQRJis1atX3ea",
  "key6": "3SzhAWMrAjcRNGm5QLU5DE9zkKBP44uxxSJDRgg8a31vwf2FWYZV7frFjfJgskcN28rKw7PapYCtKxnVzbkgqmSt",
  "key7": "3tZLTscChiGX7qUAbxan1ZfmFqxErYmQRcq9X9DsExQn3T2nmsHEhEFNjTjxddtTGj8vNThKWLWgQGRMAzUZjZfd",
  "key8": "4nzM6bQgJrMw7zZG2eRF1AH7Qh4fbW9mq4HDptQ5haUSE9nGXq4uzQEe1q1mcgoHmynFSUsKw1ABpA3Lb9gvqL2X",
  "key9": "3E1dTDUPVMLR6VFz7B21T66LxTD56LcJuL7oufuceMrpJWfAKfCXVMT6aF3WSHVWoxYW44ZaRGwwmHX1jCf5cnFE",
  "key10": "5wpjmC3WHz1Jvgu6q3Rsai1MV56dhunEuViKPHj53e8M2Y3JV6d8S7pZd38ddG7SXmegRwQdSUc9o6Y9GW8Bo5hC",
  "key11": "2J73MyKHWJWup7qwrbe46D5iMq2TBMPLswkaVfh6Sitf8mpYPtqLFS5dknSftJhgcnCY2xAgTFbNM9mQwYaiFr4e",
  "key12": "2Pr5DGKghpkBQbsWEPtzNwHCsAHDpA2vAoKayqgCqPNGkVNfBW2qhMX6K1L1W29Wp6ZbAUgXC6qMJwHSE4d3WjPc",
  "key13": "eAn1xyRVV61n71YQ3euBL2HwnTWeWN4oqM3YeuRvC9FcfUwUNGxqrfm5gnvJoFYpB1xjRdQWqYH3GMSL6rSBjJe",
  "key14": "3vLmXKmABjKtnoEeuNhZnK4PdPdVA9dJYM8WFz2SGVaBWWfT8kBQDzVdGTrpm8WmNyTNQf468JpM1PczXd9yZku8",
  "key15": "52hXdqA4KmFViuCQauUDSA4gPj1XiqVBZHwhFbhDojWY59hhyGXa47qX9FEba754G1Dw23dCvxD3N8BkCds2Y3ud",
  "key16": "5SvSb17zhhKVAXHbZp7hF19xFApwDpHSvn4q6XTVoT8MDwSMXbtJsCsKFiebqT51iFjgJWe9dsZG5qMDrXZFrFN6",
  "key17": "2Q663TrVH9cvvutYa4uFSVcE2oLnogoccS2CrBwQRZXvdBCU8oT6CuWbYGxb6pfsdtUQw49hFyp3rquQApVtzTkG",
  "key18": "3u2X7Gae3dztFwCVxGD3YwoRHNa5M7jEaJk1mZgx3MYUEZrjEqbZGJkAFeuyEB1PMN7D1F1xnHePsiJpj8MP5i9E",
  "key19": "4CwtDkYbZWmV7qRhzmE6HXDaeb8nzwfWr9jr7w2usyU2snhqpcB4KFg25jsmkLLBHBYyVnXrins7M7otF6HR2D6G",
  "key20": "3N9v4PNKSNeURMXMZGhShnf39boWV7kHf8ufpSkDU6fjq29M6kfJ9PNBxrHmKadXtJv2cpAomB761wMRaUTadD9a",
  "key21": "URsT9mfxmogW93nNyTb5cmLbogPULSPagujBRXfB1QYogy3xHB9D5TPt5tVtSZSRg7tquyeNubh6DxEfoxTbv9d",
  "key22": "3HmwBLDb7Y58uQPW8vuEuFcK78Dw5S9h2WpqtEbp1j3qPind7n2ERZ4nm9f8W81ux6ESMUqMvocxS7wxbfgmjwnb",
  "key23": "39QPzayto2Ka29maSYU8jA1ibSzhYfxrPpWEZY3NdGfFKamThDqZSxiDHPbqoqobTpptvR6MzcnSoYQMZbG7NAre",
  "key24": "3NRX1eT73T4RfavunbcWzbbcMgatXe4cKxaTXj8eqzH2GSV5T5U1qfRXuEzAY5MQ3vtLtq2FRq57hxKUhxnQ2FJV"
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
