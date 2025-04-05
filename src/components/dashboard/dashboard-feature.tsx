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
    "4uqFsQP9kjHY4kNdVShfTnuAvCb7d6iq4rTeJhLyND3BAH1RKS12fHC1CQYRfX1kdY69nPqwXLkh8zu44An8e7yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gnXa4sSYgSPizSN9JVq2zQRhQcXK5DZzfn9iBXkNBv9N45bKL8pLNYV2kYbWzGWBnVQ7iFJYiBtrok9ff8fJLed",
  "key1": "4hkffwjzgoQ5isxVRt5si4ibcKCVfeZoEZogSZrLbEXKngng46smcFD1kSN6EndHNAwR6ENvuB1mHVH9SDrHjCE6",
  "key2": "2aArPqsJAGhuzYhCvuzQ6s9C2hM8sEhvffE8KRpEtE5aYAvBv26h7ViM7fvZ4ypa2nFkyGBroxcgLDJh3my7fRzZ",
  "key3": "wMHeyNNWy7HaFJ1TddANnisjkeVuozJYShbmPAcHjMsenqhcEtHf726NTa1zqphoZiJ57J8KZGyy9NH7UDnfMuA",
  "key4": "5mWyfWP9kSZKZT2UBGzoEe8wCkgik3de9zJKAK38wn4P8w9znM9PAzYNw3BMrLfenqqRFDPyL3UvGPoccj8o4BpH",
  "key5": "5zHbVsVyx74CjTP8i14Aopybii4nBxVWhuBNBuJBFjJu3W2Btu18XxVCMimrw8EXS6dCRY4aQeFbvHVqe1kBNWXB",
  "key6": "B6K7esuTDPrgKirUn61bBZZ7CL74JBtn4thJArzHVQmcekM6YMxhC2aQquXX5M53pM99ZZzmzgXbEWzwdxBdSC4",
  "key7": "2uHucosGjsQRAxN3sybMSe2vbAexWkoiWvFgc8mkvTQK96mrromD8WWvPSXJkwNkevTMy352Leq92o5eVD7nKusu",
  "key8": "5ekjeoVU5xsAzfuQc6HtNbGwFDscgKDZhGc8RKecAVAhEWmsXqppXvZn21fpax5Vh73pqVvV2DZdbLTzD3Ju9rUh",
  "key9": "2uLVK8VQcLPJ8dFyW84fTbH4EnUKsfskX82oAhMoAE2MnDj9yLvtMvW73hF7dfqQ8JjtfovA5JDAYjk8y1XjpAK6",
  "key10": "3VPoqGBaMhED6u1fTMjPisLHWMaN91h59haz965Ap1V2nXzMwdUj1tTWqu5hu2yeoEBDjRUCEqy7AN42zmAQhfEn",
  "key11": "2oPrSoqd9fz6aRYyzNCHm5mt599aMhfC5SZ5Vj3W6J2YWNecUmA11AThpQTuNmrTHfkdvLAdVQTr3RZTqP4P1hto",
  "key12": "2SZmvJWMK3hnyxFwTpB3Q6aLkiD2amurtuq5NGjrqu2CErxK9novB6djGmHuiA7o4oJUqaNhdVEJT85FgJxvgXH5",
  "key13": "4qXfnJWcHj9EWKgM9LiJy6jmy6zcK8ZTkRqs8sSToS1gidEdaSzuTpRYiWaXCKTytTQmyqc43TCNZCnJnW63fEGr",
  "key14": "5Zzf2pAtoG8QQGZNHojB5ZW7jWyrjX8ifSov9Y7fMHZiKWndYnxNvtDpfiGNkJfopcDHMP86KUpUrh6NBDCTFZf",
  "key15": "57uxUhoDJjwJ8SNyJb6dLwS9Ch6Q6FzLXAaGmeGHSKnUR2FNFYTzUD1Q8wxXU6ANaRbu3FkyCCJg2cGjYDdDbbqA",
  "key16": "2UnbrP8wCm1ajjeL5xHpJCB1uziSUeLv3tnpYNywCdRQ5NE9F8b8PUnPmDCa4PvBsThRJzyYceUmZuXTibwTiaQD",
  "key17": "4xmfHzoggEPV6TzSHuXVoyU1jbF1pLkj3M95pYUFimzGqidFBxuDTt8PuYGwfxVf3Snc9VqdqhDwCh5JMi1SM6Mm",
  "key18": "5hUjqLUUBgsjiKeYBtcCG3Zxc2aQbEBpQfKBFdxabNZ5EC3JFi8CABggyGmeSMJfXkuEDiv4KzvaWoeZxxcqU6Qc",
  "key19": "4G93ZPVNxJnanP4LbjAFWK9bAaMoXsDmNCdKyjKWvyvMaxSHmW9HnFU1YVa1zPjqMmJLqMvqV7CPDFMzfn2W8oU3",
  "key20": "5HRm1M8R2y8gRGEZVRZ97fuPhgMwQp6TxofSJAkuv5F8rEDPzHBBNmAokTaZzrQBVr8uoC8qmG6GyAKKr8CyqKub",
  "key21": "4xfnpr2RjJEmnNucNzU9AhnHbvJSWnZcEKiGnRxNvP8TmBvbfcKHQEt3RtxNSyMcpunE8y87CwTbUmqMoAmz77nT",
  "key22": "5eW6BXNFWS2M2LxvSqo7JcKZAChPzhHFdxzCevhfiM4oKJcsTBm7VYfg3ibbeiwgBRKTxc94H3stZdMNmB3AUuYF",
  "key23": "3skh9rurKFRaeC9XZhzhxJPDoKmkvx9aseeyKUxk6DimqZcVL1XyhB9N5oNcKbfhb4bUa2FVADgwDN5CM4nYtqzq",
  "key24": "2cx2TiT1ckEqqSxBUU7pcuduHm9w8QZ9od9c4wPGiwuyqrZ8u486a75FBtVfXG7TmeucDVCHD8cAy1gXVodRQeNc",
  "key25": "5BrLeyav2yFeavXJw9SZN5R33suAK3QLxENSgb6SyHE3TmmPPYQ6hRK4BxmiwmtF97DjGKdFoYgKXV3VZSpv2wbz",
  "key26": "5hQBJdwN4Thh2sAAqcTDzngb2bdFzX6ZRJVmXsiDt4A1KgPbX11BdUK9shVQGQGcVU2dtgu68FSp9K6QjFD4Z8qA",
  "key27": "DVDqycnRDJS2pF3Qd4BRYbAjWiNJkj1pPJwDV79awyvVNrUxtcXDLWhxX5EChEPqEzXY7UFe98eVeELBESC565Z",
  "key28": "4bzjfYa8AwfH9qDGNiPFMVeZCGmdFjrERFs89YELMPTpyR8JEjZHE7NZy9XFr6hLB8zvHFmr1FEFmFaqxKHTDgqj",
  "key29": "4pZGW726kzNybXzZLVf4BLrmtb6D11PEL31TpVry1vF24YFqYH4EHnNWtJ1Z1H4bf766afAemoh2YPVkQoFBZvV5",
  "key30": "64TjJQAh3Cq3y3Gfy76e4BF4KTcshgYYmDBg6cWcYxFsX8iTYFapcXwjFwdWUa9mc4yqMF7VqzZwSU5KxFkm4ZG",
  "key31": "3nWShhCSsuHxd8u7REpMT8dcQTNhvQCpbLGTeWR1j92XfESPZrNWXjot36p7KHE8hhFSxngpdTSgis4doxytEZSu",
  "key32": "3TxEsADfVhK4E1NXigjbxsCHmh6sXL5EPvzyMyuzzXpBowggrjJLzPpsBoekgdPd9c7dydiqAknDgwXonjfMu6oA",
  "key33": "5B3rH27HNsRQR8J6XWRMuJMmCsnQMW2qPxAT9p3TwnWBypphqB8aHdSeepeRstBCmRKgjT5baNHSrEXVixkCyuA1",
  "key34": "5ynhb9PbCE2YFx2DCC9p4jB7A6wJM3sQbuCX9c4ZG1u9aWrVNDXbtyPsqEXS5NQkhy87e5SpSui7rDZGt59HH7F8",
  "key35": "2FtNmomjYcLnaWLnsJ5md2rkWYTB3qYwNZuAQLYVgrRk8navDLiHwpTe532jTowSgCwzhw9X9sFQdWWcfQvmtP5",
  "key36": "5iefgRyuEb1ZgcH6W16vQwod3d9TNAGcbbnJxnxRAxxfxToeZyBXeS6AHVpoAjaEB5NiRr7wwje1KfMqnk4QcqNT",
  "key37": "5z4hEWsyFqpPEDF5N3rFjmmtmWhRnq4GMBZaSPLwFwcU7VbGS4LccUVTmfzcqEo3Pg5WkE9K4G5DbJg2wiLenKJm"
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
