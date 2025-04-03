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
    "5oqHnY4rx1jCat9Lw4oEjZYSnfqSRZWfqQwoiSbVtvj6frFmYfjBRsjoWpkmS3Z6cTXSvScPoj8EGdmei3RpD95P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGYXwQ7q2hukPW1zVbYgcffVoTtLFs3pgVxmUwFEWqSgvuFeWUkUgnuSw1wjuNonF53AQddxuybqkRxwLXbscZz",
  "key1": "3g8Tsesfa8sDqdaL2M78DGhwcPqiPRZmpTzGvg9a9ogkfS2DJ6jP5vxDBp66r9RHFCSYJkNUvyTFhgYotMAy56jR",
  "key2": "VhTr5Tim5nkrzzKs9ug3p3odaJsD6u2Cw5F4Ys1fJZBUnqMB2QRUFh3h6Dw6kAdAWvR1mH1WevJBaR5s9E2ANax",
  "key3": "3eSGz4biTXyrM26kugCr5mRRPPrA5gr3jrTEL4PQfupPBifZDvfErtCPzzXV7DtxeHpRktwgAUAhHVFj8ewB9HyJ",
  "key4": "4TVoWbfNxM3jbHzXcBvV48aFkUnXptH8N91RQUWgPyC7fgUruu1dAhMF35DE4RvGVYFuVDM3bvbUcK9NEesTC8mB",
  "key5": "3FroCS36AHff29Wxc3GRQMv3kPki4QxSdmpsiNvZosb6ZSZEHbzoCgz3kfXqzmjQfRZRZzdiLXJCPRSnKEQvnHd7",
  "key6": "4ygEAiCSasMN6edSa8AZ6NM4AXof7gttivmbDcNuS4sUs1PVgmhdmH2cuwkRwCAcFER69oZi8YsypxKi4D5C8v6s",
  "key7": "3m2QJ9eaUB9HxpV9FXT1zijVUasRyiJQCSi3zqYMxKcKznaCnCPMdX5VVxuvbvDxUPpouVxAaFhbHRGpzbU5nPqM",
  "key8": "35Bg6mieuBKJyWzHge9wrQw1G41LK5oumYidJhYQaM8E3TuHBxxFgtyZZ8ePcUfRfvWQqS6AqaokQxGmpC3MbbTe",
  "key9": "4C2TJsnUrxG69WhajY2CaQUzxusJkvbVUEFS3z8aYL6LTUCFtPg1CaCnLsJnfZDmTrbcS8dVRgeMSPqs1u8MmFXH",
  "key10": "2Zfgysv7z5EDTLWuXvL9mMkBXazuHtPGUJGsYwkt33fDHqYBarFUcuvkDUK7W3QFXNGjhsCYv1NtVWBthi49Eity",
  "key11": "3QiDPDYCFWeLaWfCoMmjE3W1AMUBJ2weM7ezKKP2NBGQm6ZSKbmpaZyPtC72uuP76hGDXjAQ6UmQvByDm6hEwsXt",
  "key12": "43pNmCASkyDbDuWeHKPMfpMr4eCUDzFGwKc6nXNpJ6Q9AeNGMS8PppK3dgwvF62AwMVASvvP6A79sefMY1rvmtXC",
  "key13": "2V7fXe1kHABSVNJf5bnjUN8UckcRuKTzECPMvyVyFD1FZG4634tx8sG24XE3CUHNynrx6341vtHVNw9nZBU1swdb",
  "key14": "2PWXpGGvKVoPdwqoTzEaom5i1nQp3grmSK18tcV5ADc3W27rojcMVT1a8Cg83zScnmrsGeZ311c6TM6wZaGH1cEf",
  "key15": "SLNMa2HkFREFm5Nv8FNxbYQKtLrnLtmPfyNgxDjXAnY3bq5epBX8fo43NZX3bN4ZSXfE82sf37zKLwcbiuXRbSD",
  "key16": "5g8irRvYajPUJ7s8CtrC7SFFLR3ViHWEMSJfzSXHSbZE7yZZE6rzpfZQL4RNXTw67rKbcbpVG8NXKqVn3vsigp6Q",
  "key17": "2GC4RgeehmnQwx8EN2DLoT9fCEjpYELgkSSqXVpYCw4eCF2ihxhzRq2C9LdeaRrmTKKs6Q83MWuD27LXRKXDaHqE",
  "key18": "4sPk3BJUQQdMjaLbtYUn34ats4NQp5yrWhX8sMAG4JR93oX6jPKdCfPdbiEbsLsiM6QtJj3WNKTj9oZd1D4nTq23",
  "key19": "426U4YJtZKRNozL8acgTaNjh38BuH3xGfQcBHa6ShEqjTe3JYBs69HD6S8r2Tqy7AdLDFUAKQYixXhg2GdbmLxPv",
  "key20": "G5nURwq1iqi9uVqh29RBZX6KfRunkKgC8n55g2zUmkYHNbvoaaAcThxWfyavrq7yNPADu3ygTYEBzLiBWJs1bSi",
  "key21": "3tLert46FKEgA1ERwSheQohrDUEW96TtDvA4gT7gnQfnxLeR4ow9Jb4YxLb3QUe8ZDUTFi8SPtXzH8XFthB5PxS",
  "key22": "2FmewauQtiZg2vAbxc3Hkas1F3Xfzme8p9C4ex5QxncTLEYDxitik7cYNt1kLyEHgXp5zEi7Br11addcYVyvUXpd",
  "key23": "2igwLsucabZ711jeKE6zKQMNo8JYap26ukiSiaaQoHauLhga89HdNBLvJjzDmQzW2wwATtPp5ytagsX1E8FVLDJA",
  "key24": "LbK9XSQXtGeQuFUgX8TdfGzcih9Mqax1We5MRdsiYegfdu6ULGirXUueyqs9ZY4H6K2VFF2GyzMXfTeg6vvY2mV",
  "key25": "2EpJbmohRHCnPfzgSQMYbp9ma8sieFUJKmHb7Xo2vpUj4qb4jUk3rhiE7zRdzkfzqZE63H2xQTQFMheggZakdQtN",
  "key26": "5NNzMZwPaVJCYGWiLh4ZUbPaw63uqSSwxbNFSPbnHRa9WaWaCVgyp1S6ZPXbXQD2qQAodoQiTnutBP1uRrdVtjtY",
  "key27": "3Cb6RehvMauRqRrXszEPP6FBazpXPa8m15MjpPLoVcHj7gWM4raMcXzVtR3BKWxF82Fo81vMPadoeEjAcvgHZNit",
  "key28": "2zFx2u3NjWQgm7mNZ48Amxq1vQMw1tbk1Y2JYHYnKhkW9VXKKhicwQv3Yxv29uiWqHQBZ3h9uPSYHkCUBmPUKpJy",
  "key29": "2Pj4YsmakPPS33XnzCJJDgCf5ttXoCooeksjB3mSHqeYoPxv1rkTrj5eMU3nXUbcLpnazfFSsyvUk7Ens6BM1RBY",
  "key30": "3uFADQvXPge16ss9fQDVaFWXyK32nWzFRgMpziYx9HyLg3FAULdHyRbvTpUXSNyEA68U6cYJDW5ZMvgKWHNu7WHH",
  "key31": "4KZKFZenGMbFcbPeCzJUiWpPAuk2jmJi6bgVXAFFfS6aUnkg9dbCBT46vkoZqj4Vpx2q6myAhAz9cJ3FpLsFEbgX",
  "key32": "4kMtZVmD6HctA5zyrASW4c9RNBgdnXbmR9uNDFxYwWXPUKoBhxd1Cvex7TYQnHBHTLrMnFc5Jx1Zpg9RX1tifCJ7",
  "key33": "2aj4zwN9e534rH4kSrkUK5iTgKxMwNVApuT7HSgq7HpdJD2NLjaLXv8ntDj1kTqo7xCgid9qTcLCSU7WS2XLQaj8",
  "key34": "4ntMeHu18pRoZKM9s8cnqYvFB1w1gzhvAYmwJbHCwX8sZBZ73tXohcNBy99R2aFt3UNdgWSWExReA3MH4H4RmDFw",
  "key35": "drypNE5zoCnbWPbRKRU57HFE6H1h8iM67JjwBD4tZwrMfTQ7XAh1s46hRAqRF7EeKewFHcYJLfBBpWWEtoeEEho",
  "key36": "5swfjCyveAgeWjE2MK9iSoZtp5Q8Hrc3Q48kVALM7ddXtXdKqaWzcBrLDpVxBwDindR8bC8LCaSAfHKJB5nD3f25",
  "key37": "3URPnTgeVgTZELyWE45pRWqubmtffCoBAmtsnFyd89GMBmUiQU9The1i4GbGJa3EsCdnyE7zDqN4dbYF9jrcTBrH",
  "key38": "Cx6uhJwi32tqqWmEmKoFRC6ctfQYcEauqQgMA85bJepvpzycg98Pz5SVbLZLJz2SnTiyZPkbbuarU8EpbcmKtTu",
  "key39": "2EHX6HRfxMYuxSUMSkGkECyfc6X8GPBA8dDkm1h8G2xccZUA5TPum4EKtnJ1uR2RZZEeTJBdzf9rVg5H3EQbpjHh",
  "key40": "2s7t372BhMzNFCFN4sEbi3zn67Df6hbvf3ahZvtDEUWB9UZARMQ1T65RiVaRNcL8migSiJTgdr3uPuf186QYkQzt",
  "key41": "3RMEHSzxyjBWEkpmWe3wZdeyLTYUybY3eUaVFUWPq6u8YqK2t8MXRyRXvuRySNGyMMz6D76n9caycxakHdkeCS61",
  "key42": "5GNz53rtKAM9k2LawFsrfrapbuNGizcT2swxuUgFtjFJUJhEisuE3NHmgcZhhNtUEyUTsAYtHBw6hSDjx9rPS3vP",
  "key43": "CwrowE3q66qNnQfiyhFWCrsDMrW4xgfSHmJb99Wo9ULMB7fTB8nG7gJ2E2tiFmhSaq3UWbheXiYmq4M3Z12wmwf",
  "key44": "4Uzo7D8maeLU5RbTGGe5Kysp3z7tqSaUtaS7RAwnwpJXhktTvdYuJXKJzuzwsSp8Myw36txgRXj2fxZsdzuq8eSf",
  "key45": "4aW73muLzdZtG9Yn1B6rhPMHotXcAAU59iqKkSUJw4UReszjzBhsz4FiEVSU8eU88v3SCvTSf78c1AMJcbBDZ8bM",
  "key46": "5oXRn3p4nn9qDC7pv1Z4oB2uN93EZfEV1uA9DiihQvezoYVuzByAwL7cZi44rYEGP7D4m2LS2SPo9GkBMQ7xuVJL",
  "key47": "8MEHrTyqKDJBSpWgunnvbaqavmoA1iaGCdL2P54UofAih7vdwiFNiH19tGhV1WGenciJPJjPQY7AUvqGHTJkeoJ",
  "key48": "59ofD9dY5bvqLF7y7Bhewqh2tus3tboCPYYztDmFVVjLdU4eZuMPSR2EfCoPPpgePA4xVD1S1FT6YmY2cpRk6EeR",
  "key49": "3SpQsnguCqbc7aN87q9ckXfoNi3aeQRjj1xLp1gmDabT5HB1JBFrnuLT9WPr4ivECzctVWfoiLHZQZvFF7VdfPQw"
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
