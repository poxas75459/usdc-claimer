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
    "3vcNUjeLifJyNYUoABeXkmf8GDRh3vMC6FeDJXkJcTgrUNwpzLdG2GPHAmKspdphzMVuFEUuowFQVkR3sed4JZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hDaqKmrMsUW7wCxVcJhXvn3CwkaqFvhJDQZxh7Wssx4LrjwQSP1RxYFNLeqVXSeH3QeJ6Y5F7h4mPx54BYbapZE",
  "key1": "5YsTR99dey1i4gSvGMQ8VPEcPLWeLEQMbJ4Rrb6Bo4E8SY6tKLpijp6VCVgcz9JHFXtmHm7huTZRJPGaZjnoSskf",
  "key2": "xoWngp7pBVRRerkDbjpmV7AeDnJzKNZ982odggkHacbGsS3aMcyeKHq9kEG5mhxginHLavGD5hmjRyELoW2xfjq",
  "key3": "oKn1xRH6snBpB624gRhtkjKShkz2QkNJLsn2TZ2nubNFd1Ac8Xe1YVF6U85KVpsorXyrQd3Fp36Y4FWCiBteect",
  "key4": "5AsH3BapjPgKozQjWnswhWKn6Auh74Y1pKkLYpxZQPfJqe33JNjtGoiVPAXT62ht98fSpoG4GeLs3Yn6H1QEbPJ6",
  "key5": "4u6efr6sCc24GVZH8v19gXhcPfHWtwqFEWrG1X2K1fv5Xh8cnTFVURUL4d3nxqYe3qNDfWxzc1yKzPqrVXoNTLwQ",
  "key6": "56N2HmWCSH4Zyz1ZmqNCgzk4n7UqkJTBvgCsJCDRDS3hz98Zwt79yFNPopndFSdJfhwuZ3YKCL2P34oBTnbgdf2a",
  "key7": "4BgTckqPw6eL6Z1ZCJ4fAFUmG3jBPkrS1YrPPy4H2JTTSBpVx5zeFdPKE98CPQvsgnB7MMqutCPXDeJxpQnQwebb",
  "key8": "5rr1HMqicRkxAvhPNCG7bo9rxXK6WR184pSv546i59n7JBGPBozUAD8fxYhjQYBSyLukTSfRC73HFH5vnUybu3df",
  "key9": "2MruPXuA4hKm3dCJpePgMnCPwhHJ3uvE8Sj6ExPCiAhpjpb3Svi5JeXVFoqsQiA98g9xbFWbiZbdSvouVu8eLDk7",
  "key10": "4yiYHRy5Cyv8iVtCVfxvq7CPqghReKWKk6iaznBxaMd1W4Vx7KXNQ98ia7Rioz4MSpPU1NHjKCrWDsT8V5SkwMHx",
  "key11": "4wG94UDdgdXaUFZfCtXvi4c6JipJmhPVNAapqJJJquC7e8mz2UF49WPCdjiVrEzN3YV3XdNyEVPBx3YLuwf1SEKP",
  "key12": "JtMBA2da4Pg1g1kkQHu5gGXicfx6q7k9o81fX1N11ZekqfEapmgdT4S4SicA6PAxNcPF16WqqSm7HHkKMEhvabb",
  "key13": "2oiaRznyJKLmF1pacjYH7NPJ6oeYNSAiye3eQbbFES58S7XgdyfxgSkhAAg2LPw2NodKbA91rJmawa1FHbkNw6WQ",
  "key14": "2tWBqgPw3Bge4mkf8XLYKYqsxSpBk5qbmnibTY9cYVVnLsr2RhW5AovYoCH5UAzdGSGKCHcqhLXameM1gah6WtWn",
  "key15": "2NPzNGyEzgp2McNCFTMK5GkZpZpjprnWFhKJtLxxJ4yfFNqmFnLpULns1pJqsZZDApWK924ebz99pxek6A8WE2U2",
  "key16": "Gx3JDnh2i12iqZQiCE1fJNBTPt3R49Qe9sX4oy2jE2Xe515yjhBhxCHNmd3Bvdn8M1Azo4qR9uPL6X62xmEA6jq",
  "key17": "5cxgcdgaswFDwCcNu7zWiLXw6NhQZSLt4g1SMG5JsaS7GvrmdvKX2mJJUTveaE1B9xmpJsoMpQQx45t5Jsm6o8Yn",
  "key18": "3web5Pbz35BCG4hvEP7LjtL3aSnFPsDYgchSvGB2dpR5zRHERVuBSKWrkLKcrbLZZESXiBPQFibYPteQf7hFAcb4",
  "key19": "3xvEatutCj1iT4UXcicTU81in8uFCtfArvVg2UzhUESHAzVDzpvXST4GTHXpc7WitysWtw2v7cE6jqiSEvzguRjo",
  "key20": "5NTKxFxNHVY7x4s7jTNSUG7ef9YP2MrpD7mXvCsqW6mJ88z18AFwrpfd8gbivvoEHeMWwhcVpn7qDmtL45FS4Uwd",
  "key21": "3TMqcRM23CvUQvSNC8mcaxNQ6QkWVz7ETGaKQ4wAUXypqLxof8KoBKy6WZ8QfNEiHtaKUq7H9UFezTARDCXEK5hn",
  "key22": "5jj5YCutRofxxWe489WzW7hmH1PvHLXY9g8GQyDmFP1v9hZfoqbHHFSXHjuzs8QZHWnga3ee2xx1bfYULYTDoUPi",
  "key23": "t9yj1LP6Ffx9Rc4mKPuyBKyx7tLVn29HG4LzMrQgLxU9QPkz7NWojK3xQiqMCNW9KjoxaDeki7NxR2yUM4XKuFr",
  "key24": "5s3pXw7HYdBp1YixBgche98HPdpQtAopxSSEoEbj7tsbhDdVCjEhRgH9NukkJKTLQwWgzELzj29LpZmKnbj9R4GL",
  "key25": "3Xwpq9uffjxmqfCEtNyKuwdAgQPusi6xJNDw1BuwB6Y2kV73StbJr5iwk9ye6pR1WEPPFAP4G7kRQWoaFv7npnY6",
  "key26": "5D2yvq282R1s1KcqCiD8YNeWbAWY3cK4tyyxg1gA6vx7LZN9ww9Z8RM3jF434RhUM5heesjgneGkpTp74CosLVZJ",
  "key27": "4J53gU5838jszS2Y7dZphWDC2o8kwcn7vNQ3p1cGceJCFQfbAL6ogkfuegj1UmR2wAzTUHszEBhDT3t8sVpW3yaM",
  "key28": "5dR649dRc3mTipv6ebCEGYMDfPrg3DDaW6sNRqbzcC6J1q1GmX6oufpnL3W6YfVxWBfBi8MiqzYCcJmPhQEb1M94",
  "key29": "2SyNhf7xKcv5AFWTULiXB4TYroL1YwVHSASZzxWhELuN4FG7DaViQM8KhWVxjyBY9eDnmqgaAaUxPP2MwX85m7Hn",
  "key30": "4yWpkZz97w3MJsRUGGRh64Y8ANqtrsT19humaGBKJyJKtKLjzNQNrVCLJ5iwuCf7obQNqJYu9ihUnQJBfZbXnepi",
  "key31": "2A5K1NKhkJwVmkqzyZqvCVT8RtT1e9xmtkxz6KTnUuy3FbeTSBwCUvNvnVcjMPxP5Ehvn7aktpFi4qZ2ZSWb88o3",
  "key32": "348PfgDWDAVeeHFxk4YYjFHFSxhGaZCwMWtV7KELWgzZADKCmQwZccNC5Jh4CfAb6HFUFzJ4VFPpDcEZJeGMwddp",
  "key33": "4ELaeu1MP3SusryCG2B7AgymLG4Q7TpWiH75ZNuXKnPqvz5t9Y1PKkjv8uCtotfTCyyU8iWiwg3ED9qWa8RDWrgh",
  "key34": "M36iBQZwiJFVFn8MivLCv5nAYtYoqJquWrKPFLTditKH6K4satpsGSG4q82m24MgXa8h2TpEr3bgheobbyusKTx",
  "key35": "2g6UDMseiTNqUKPSJK3EgAQdHTejjvWjrcP9uRnZvgQDRp6aBLJJneyUgZDb4Nnv3sjCruiBAWk98gjqYKbCFhd6",
  "key36": "5jyVmyQCmJEwZP5eBhnownf113VqkGycEnKTDdYABUPhwTDMRJTj1P5cgKVWnPGDmnvJanNrPXcUJW5CSqFvo8nh",
  "key37": "5FTs1PkPrLZUk5uCnF876s4SwCvMVAcwQJqsR5f7mZ5bvFxnp1bzSLp3GPwbVAfiJ14suFW5eteoYLu1DqA5Ta6t",
  "key38": "2WdUNhgYYF5EmfGCQKdFfboiu71R4uZXPDUiy2zjPsn14S8QdZKyWkSf9P14ujgZDRJ8Zzvvit7hg13Vd9mHsLgm",
  "key39": "7SCqgRFMYSvxBN6XRkKWtTsDi7UjGPhPoHNS2r7LqmD9htE7vuccx3PsfufHkokYZjoo491Hks1Gde9UeXMZ2z7",
  "key40": "5MjB7skNvNDzXKRjfDV4Q3CfBgzecTWuGZFQV5xcRz9CXh8MwQxvB1QGyNm9bUVZvEezs8t9Xh1HoxF37Kx3yvZJ",
  "key41": "31zpnyqcLCi6iTZGoqpcWErMYmud97t8YJ8FA6KucTtiYBWGzv4F1wdysHwZk1Rn8KvvitBhnuARrDvi38gGdwXC",
  "key42": "3GbCCDs3d3JKaqjqQquHJu2dbzCwgAC4GTYzBpoqdoynVFU38KxHEmc7YU4YgGyGmBAsTEevBEijdgGNqNvAN8ot",
  "key43": "4coAXanep87yr1pAK1o4n7dGqEpX4Aa5MLggnKPPKSXrNjvNBKfs5c9224NaQAEhRbba2ZuGthzFLjSiYsdnQ1uu",
  "key44": "4TbQby7pYPeyh2HR9pbNxn6LeccBM1XjUVFGRARh45bnDh5JXcRKxN6UBR8QC4y2HKJyo5jnoq9UioKYLy2fk9NX",
  "key45": "3266tCvkCD27kDFxKqaGigoRg8dBpAoi2BEgAjgGitszuKUj3TMVaefWtwKradvwAzRbeZThvnBfa2bnE5hi8wkY",
  "key46": "24t57joBFTWBP2jT9q34m3uLhqr7aoME1uDTmiKdqyR2XEBHm6p2XKSrMQyM51a9f91TQxLERZz3oh6yhM3AU959"
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
