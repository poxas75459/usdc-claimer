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
    "4K2Z3E2wRCxqgyNLHwe6GNrxXpcjUkAmb7qnV53yxSJyuhbisHz8c5AW3CDTb3BTASCb4tdjob3tnvDYMna2mWK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJuKEXorz7NshHsbbhrCh4ANrAx3DqF634cnuYK2TtTTzxV15A8ak2KtBGs7w11dGrP26Zs99sYfqtcfQc5QKR1",
  "key1": "2Lhi4HbaGkUQLQVpTeTrJFMANuUaGMJQ4Eyh9a5LiT4qLZ9B6WvsLwcwKbYGUrpnkXDqfbmL8nMhscPakQzQGysG",
  "key2": "5tsbv8MGYQdxpMt4pW34v9eTB1NpnJDYWkeJhHbzPNkavwsQutjiG5StGm59p9Fx7cJnhHJFmL6ETrejHTp6rxYN",
  "key3": "GS9dGTXAbwg1aA29ka3vkuj1cVZ5XBKVP8cABSu2Lo7jmB1U5EK8xvFEosEkXzpFahiPpnUXQQxZuRqgeVkQvgT",
  "key4": "4tnSQ3fMXZ7jK1LQ5pLx7pL2AonYwrj2LpQNitTteUVSd3wvUZMRshSLyoUPiZNzjKfhZXMEfjX59CouzqmLRuYi",
  "key5": "cJ58nxziRFqYo1XAm1tsx2m3aJx6TKx5GVs2GUehkG8i4qTZ5SyEph6EhrWQjYaxSe8B3sLwPF9TbhrUvzgYw97",
  "key6": "5KvMdZNSCdFgd6434qfekeZ3rDjDCepwgcXihgGCSoLUNnPJfVxBEyxy9GjYBjMdcv6dkep2BKQAK4y4vE5AS5ha",
  "key7": "5WWGGWa4J6zQwRzNzGdRcE9HHqJmLTP6ECtQcgcqwgbm71cWJcLNXiKFpagPFTJQ6gkgYGCssgWrNEkYxzx5pWqQ",
  "key8": "B7qJkUszx1aUCnJxHBoHUic6vavXT2gJ2eyjCiihpMYzEs2ntqZX8NiBv7gFdYpbiWTPTM95r9wMa47LYR191ja",
  "key9": "NqVYHyJZFJniNPRpYhMyF7jphoxehZXu1vxNQA8EMNqVn2kXwxHCrNAMdbtt6jRindp1miegpo6b9USv2LdwLzu",
  "key10": "38GHHZoq5TnSEq8Yn8xjSw5yjoSo4zj7QBdShtQpJXjVwqSmVg2YWGAn8WTFvwPPetaUH7d3xmftdjSU7d54v7VW",
  "key11": "4g45Y5K8MZSKEYEWfgxYnA2vSQod6MrTvi1e4U9YvUGXLX51i7z6u6oLVNhhXofz2pS9h3Cb3fojQUCNuKnzL7Nv",
  "key12": "3nbikjq3NP6CSuq8wfVmNfMsdRj3A5L3isEYthJ6coMJ53SH7w1EvoRQUrQycZku6R7pbz5pPPKivsSpvyYcekUd",
  "key13": "329Jh1WYRCVbSnUMZaJq3KxjkVzTdNzheE9rYKEBeX1YQuMRNvzP3ZnPyVCLX4CjVHLEW7f9MZm7AoZxMYrfaEbV",
  "key14": "3M81oadpfS5tGJ24AByZeBSRBXJdb9RqbLa3f4HntZAFacxzZuTvuH4kZu5g2bZqFVihu6k2p4rMYY4PF7Nzgiiy",
  "key15": "4oeVgDGaY8UYaigup4e3KYSNVzWjG5auHnU9JpoBV6GK7N7wfFsm3PmTWMTKF6paTWEDze5tbdvKhsBnXbdGTT2R",
  "key16": "2jJGHxhVvi9HqeaK63kL9s7vptb8gySMS5sacCWRJy8M2na63fAozn4QgYujojh5EGRsGwhUM4aXTbtteALrLKbo",
  "key17": "5HgtK9uDCPeA4N8VKUF2yUw28zRi6apRV13yAaKfUmAwk7VZpNLcdxMatoVxqcxo79VCiz8Z3NeKrfNrKVdr8A5w",
  "key18": "YtWzNcyYiujXHZZUPR4vZ3sC6wgYVtqwH4KkzdLqDFYaBJjCCxdrPFYP7YbZReQkKPsuNcCvzoo6wRhzXGCFeod",
  "key19": "3CC22Ps8aSAs8WuomgeMAwDQt7wtaSnHbzpAXGihqkDVRMh1vzqymnoEFHPhfz4AcByzLj4veNNHhLi5SYYQmK4A",
  "key20": "5pYXD7ca2SttQD3jLp8tzANUTPsNHGYTLgbFSoa2B3WzP6n141zqj9vCTUmuicAJXTLWmdef886yuA3Ept5GzGHG",
  "key21": "2Ndp1dqbt48RDfhj5Fanbjv5KhqqzB5JdkWsZuKGS8y11r2PbBpQRGrKVFeM5rHqWVazK8Kj5hnsv55NUuXmrbYj",
  "key22": "mFuoKreB7D4Aq6JA93JTRsCsrASQQMSRZaxH4v5ZbtuQB71roKNMHmdmy7n9w7VSTUnWTuQjehkgyT4yrbGDHzA",
  "key23": "t4G82hv7T2UACSdU72eeMeWRmdZfVMnSgs55GWdi4deUcfTJePTUdfdeR4xmJTVfRVcKFtKBchT1SjRG5xXLmtT",
  "key24": "TQMpoZ8PrPunYsnamLfNSbZcwQNcrb4Z4rMcgLABnogY7CkebEmxdYWdMrEMnXpeD7GNp4VvmyVgauTY2rozhKx"
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
