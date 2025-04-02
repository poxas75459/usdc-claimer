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
    "2pYNLbB2nb2NkqifLbtmWb8iiNN9xPnrFMvSTUECoj34LR5mvVmEEK5iQKdjX4asNRMmApCXgvugudAK5D4kq8kA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gLM9QhnJFvkYrdhY21B9dXDrR5DkdFLW9sjwR3Yh6KAPpSqBkP671nv83vLK4ksuq7YQMYXWPs3cKAdMYyCxMrS",
  "key1": "5aZUZB7HPCpHiN29PgYkc5bbNdEaJbGTXwQCG8mDZGJtqy6BFbZw5QKuqk8NgeVuQeLhSArxz4N8KFQxPhPZMK8G",
  "key2": "5bLyVFtWq1jLknF7bDxjAgFELLJ68V442Bfsqufpf4N2pvUXtzMPVpudeawECMGB1F4joGtqXu1wEnuqNb2icNH",
  "key3": "47iHrco9Qg46eHi8wF8sEbyBTfzorEiLHicwaDYcK4DeKbdxgTtbHjC97rpGrhQBUhABdhyiDCad3wy5k8LGugt8",
  "key4": "4tckURZ5Kj4HBdvEAodN6j1TQe2psEpG6mYQabBa15jLTjPj1EQXu6qmDkE3eoECGxXYfT1PADyAGotYhjfSyw9g",
  "key5": "5m1o6FtZpHzzDEvSzAyhfvUwr7wKXJDDCtAQ7kDKqiTE6hfYEhyCpGaH4ZxCf62rN7fwj3Q4dG8vf39ZsnHmsnkD",
  "key6": "5kjV5m9xfqWhPUJiHK1MMDzsBSUgmhmHjAZj68zFC7XhaEPMyU69Nk7ofsM7299XVKjbNGSdKJcQZUHVcFeF1Pit",
  "key7": "4z3B8PABBXHWT7FHXvhXB7EYJGPDdG5SX2u1fcW4QZ2HSYqjxpH3jKEFJd7fp65hyrU2y5ve7GSVBrCEeXFrxNgt",
  "key8": "2zPwyu3FMVvJ1AttMTchXanWGi9Nhv6rYna2GgiKZiCKR3d3K9y9xrtaVi2NRmmqY7u7sTouactxh1RMv5uZ5Dbu",
  "key9": "SwEybnSWSsZMzWxBh6edsPGLWemftvoVgNZWVPvFbiuphWwVf9TyqjaC9maFoWUABnu6T9S7fHLUVNoeiA3hBtb",
  "key10": "rVsjArwZJKUsBc3YVueS5MMKgvm5DbzCQ8B2MrCmo9QpRu5gPJwiSyYEzCYSxXoV6HbdmBPa66S6thqpKDonjmg",
  "key11": "24dTZsVjA2Y9fsSg49VUQmXbEUzwbs9jvf9p24NFAuivdGDqbehbiDAcGUDLr9tqjQHtm4KrepYitpwCEnDSw8wW",
  "key12": "54gBWuVm9XsYzECeqJB5ZkwU8HCE9g8rbDSkzLy52BMtLKmf3zqWuxsF6Nozeb6WqQPsVfh2q61dhxhfaCmdLdzZ",
  "key13": "5UfNYfG3nBJMeyT77SuJumaVdAPqNEoJ1rqfXwbW1oUyG2Wy4UPydghnP3DH1SsGJw544D54U9E7GYimssEorE2X",
  "key14": "5ECERCX2L4ZmQhUzNHZr91hRDRiB4Wjwep9udJKAVyhLXnJG9ATcpwv4AQfY4tiwxzvmcs1Mr2SZrGHezsmF1hf6",
  "key15": "3y5i76xVc9FkPLfsUY2PDXjdiyjB3J5SwLWeP6eAVodxjrx6wNKvvPYGPRA416ZJQB3bRTvuNPEz9w7AoPwwqLgy",
  "key16": "3cJeRv8RZAdzng9LZMWRg4gThqnabUeo3NKgnb2jeGzh2uxa6UerLNdTEjS7v8CLgGv9Dm8vAxWiU66UvUXdnBuc",
  "key17": "2u4FXtGaFs13MCwpoiFAAcpTcox7sBbatXWkT3iPCKY3uhRN9p4SRfH4tPBQtTD6rZS4sA3FxoJxfhuJjySoUWYX",
  "key18": "5vaYnmq4kvRog7AQY6x4xakgv5jn6hSMoVaLnXzFC7as9KyPA39om8EbHZj65s1GWqxxE9ZRqQ2GpCXX5pdZgEj6",
  "key19": "3v8eY8aQGe9Jm9aKiyEaryYgmdcDozf4CSE7Lb29L8pNefKTHnVjRmbEh5JVFoWZmbPSWLW3cqXoPfXqx1mp9DqJ",
  "key20": "2jZp9GzmgGZusbPQ1sFxmjaDcov2A4rYBGE6RCmV6wLxfRzEEiwL3Uwbw32dxxrYkkEMkGUH9w2kKGnPzvwjPtoK",
  "key21": "ng6a1iQvM6Fm87DrmNxgpYd65TiaSwd22xSNYTiEp1EhMD8aEVaybL1FN7j8icZ6Yf9QtTFHHGWSyokyDyLbFAm",
  "key22": "4XVLpPj8TxDm6avHCvP6jFgUKQRYHPwtZnFsdLasG6s6wMc9dCB7dSsn79LdRCUqW4Xq6NXjF3TNwownD1zZBtt3",
  "key23": "4iafVFBKS2y46QX4NYx4MYFpVW6gdgxsBtQCEiPPyzh6nGPpYrFD81Ez9BstGtZZCZYiE6Gimos3REPcjrCq6vcn",
  "key24": "3QBp6xXw3xuaugTYyZ8rW5FhUVD4NJ8m6VafkNmwk8zsRPJMDCx9CpZTa3vYydXXBeSZhQVfMs5RDKZLRmsmGx3W",
  "key25": "5QSHNJmMkY7V8edJjSzZBsoxG6r1b7wtQWfMRCF494E7jHbsMQQk89c8A9VUmasLmREQe1VUMXb6tcwr5sNd8F8g",
  "key26": "4nBnyfQwSgfaXVDN9dYWCrZwJw8gVj7xDV7BcMxD1E1gCoTpFpQy8iD9Qo9A6ruDdLhJaMunD3hChL4SJTnL2FxY",
  "key27": "5ejoTJxbbcfDG8GQxEwTD7cyof5RH6Sq834DppXYALxXGkDPhd2GPPQkrj6MsV2BaWGPvMgjSEbtD3UHLbw7RUy3",
  "key28": "2J28ZLjCzX4fJnrQ7rrY3tJyNm1cmR81HEKqWMg5Pzx14Mq7FmiCCXz8Me1kkXas7akuUASGEsPoi9MouFoAXWZ3",
  "key29": "4BeaEGWQbekqjMVQ71D7cqWNYkUtqjN7ChYtgw66VdXrtucSnDWyEsUZP7uqcfJTu4kMbg3vECffoGSrUwr8dUyG",
  "key30": "4swuswta2Xick831uE2y3ApWATt63BXdJnsBpchk5c4jTrGhAoUM4JQsGT5oB1veeQWXV82YSjkKhLHdEdFyh1Mo",
  "key31": "3hxa6muj98St9YtX8KoiCkmrA6BHmcmW8iJg4vFFZ5CE1syszw4XiciNV6zbhJSBXxmFmEUCXvYPuZmzV8TQdzpD"
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
