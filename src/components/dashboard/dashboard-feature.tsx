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
    "3omKUXbL2Z7UbAkjpuqVqdDtAEEoFzbhmvYXFG5Bzo44BJNbtukkLomaz9uUUUsRGa1Yb2KrrC7ixsKWmWButvKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZeeZTFJbsxwh5PTBU9sJDk3bCW1i8cyy8twDAuTVcH2fAcRVETiyRiJPBLAtaFySuu7QjH8aGq4MQ1pLok9a4s",
  "key1": "46sjyeuDF5nEbrXSKguvQUod8ZvcL1kHQaodxemEqGaHBQcehWJDBfU52CWfVS6YertFmgsLYYsqUtn6kotJCCie",
  "key2": "3ySSMudqBtLe519aAw4k89gR3f4RBWgeNNjqRhnpxbwB43R6HPNnf1ueNWJTA24u62xyNwscaUWCuXmgt9XpkrUZ",
  "key3": "M3n6HEzPZgtsiFg9ryYNxhuYCRHYP9Dx1vKPhFr5S9CeLWfv11FuCyrDfsU2bfXwggEXGLUaW4zsw4LWpqaGnvM",
  "key4": "6147DQUXfSxq1paauziKPco54YwbmW6fXHfRUpmTCfstE1XYwfi2tmmbBviZ69SXPH5tdx2Xw6APGCyMvwRw14EZ",
  "key5": "2ZYxVmzdCmE7fSb9aKnfFiBwG7LLbS3f5xxoMPfy9iPBGXms9CzCeV6tbHfoD3QZgNLG9p7JjGqAZJNF5xsHUcjb",
  "key6": "3gQijkpqtMvLyEgDu8fmQQSKjjekiDzE1vnB66mELMFDjjGE5bcSxd515wvJD4wEzNMDnVNqNTGf3MF3KdKxJEwc",
  "key7": "2q2R2JTw9Gv5pMnNGuk68ECniEsWcQsCqNxy6KhCgh1opECLy5nyhbDZc6xCsXEdS1zQ9KhX3eQkb9HrznyQeRyH",
  "key8": "3tKTd5vHD6B7yWQWzmJ8JXMyhLb7CMG95X7V9qzsjkGAxjjQy4u1L94XZQqwiUoXjsJivPZgVfYz2ivXLJBPhwVQ",
  "key9": "5iNNSZpc266tj8HA5Rvt7XDkAGCeaxdTS8c61wej7PGa4QRm1pw28M2DAvENUreZjv8qevxL3p2sDZTvNNW4GhHe",
  "key10": "5vRUZk3UPJVJyQQtKryb24DCausG7FN1fd1FTpZPAVVdWhnEkXJLUGmk46Ummkdqq3GzcZPTCzkvVKEsY8xeW88L",
  "key11": "56U6stwmJgaRN6wAPVURpou2deUFeBbMUWXeFTeRvaVfx9EqstQX7qUbeSTwmMbtMjE7mzT64peDoa58JMRLEzcH",
  "key12": "FCVaYVEFmQZictPn3Pfs3C2DZpnjrP3gYDkYbXs3oUb5BErqNzSgase9KVsux9jRQV1TS19X2ij8TxH1L1ZBD2u",
  "key13": "4Wf2t63b8W3yueUm4GbPgTcRHLkpuNFAWwh9ZAvR5EUoewnzFDVEjcQHt4J5dR4ZrDDAaA5beGB4eVZY8k3ejVQw",
  "key14": "3MJhNEFLb8JxetxYBRqp1JqUEDFZa6VsKrH9Q78zLicbZ2KknX23JtrohLR876avAvrPdp9yr4QfraksezhaAxtt",
  "key15": "5bpqpFkPkD5EFesoaFHtKd3URoe5YWysG1bHKKRbaRQeE9gRMEGMrQvARxcEB2tUJ8Y8Fx8JA2c1mPikEifSF4Zk",
  "key16": "2jsrLNccDcigwe6MPB2HC6ei87HkaWSW6iRk4yBN9Kv6spq7vBm4L5sDFki1oe9Bob9hKy9D1GqDajuMtkWKGVib",
  "key17": "4iDwvn9HDBrWbiUqQYDDTnBJQhWTfrRy2QYCPfWtMMNeYaZd6LqLBNuQDjAqSKMxakjr6NL3Rnnd1UjRT5eVbovn",
  "key18": "UNqWJxLYMpeEpvN39vW2HH2i9deL9WNWjfRH4tuZ9TcQW4AzQF2sqnueNSchgm2hnWDcysHynu7hLLwJnzRui6f",
  "key19": "4NCmd3fPYFnLxCbVY4PQnFGthawjG7Gz8jCozkrezCc2p4HdbzsFYBSxBXRXKWv2AENVBmFcLpHAchcSTuhGvvgZ",
  "key20": "4H1S7kbJNU4zBLA7DUFpBoTWFk1kR2bJhEsBgyb4sJbAotzRZLeGBmPKBx1ckE3a6JrXNxbeMXhkE6sT2ohxcMmq",
  "key21": "2b2pAzZniKS4XbHXMLmrYwkv5awHXzSa3Bzpq4NyZqx4APi1MuPXE5V1BpAqo1mEKAUnxc2LtP2AT9nmbA7bEmTs",
  "key22": "5Bjw9tL57TmiJ9DLGL6GermwhiLAwcKk377GSkh66nXZR2LHBAv3c6yMzUPUShZkCDHNB7yFXdmxeq8PX7ReoHLU",
  "key23": "2APFvSW7p5uQyCngQkS4KjbLbkPupSUoVXVHwM6siYZPKh95EExXeMXge4gKJvJdZAGAMARwrSfTigBDdU3EC5TT",
  "key24": "GmPgCmcoTVEKEJmG73eepxiy9VV5ajaWWs8BjCz812QypLfmwRuhEPRYK18dLm4WVEr97eLbfTEPZQi32kAZQUj",
  "key25": "5fwnkNXA783w13kadytRUvStL45jMV87gcehnK1BJUXsCRvSnYUidD9cjr6knioCLpQGhU2TX6x4iUCqSnX2UgrF",
  "key26": "2YVTsMgXExNyvNQX3YM1LGsk392iMzmYQV33YHtpBZH7RL8CV1j1BTQbPnLTudv3Lt99F3icRxHTs7udHwKB3RwU",
  "key27": "4tVWzAEZBPzb2PMWS7cHX7nfe7cTrE8KW9JC4eiZsYwxESb7czYrjeKAL8uUkztJMNfsCJCSkxPn5sEYjRVJ2FfH",
  "key28": "33Rze4duCCVVCPNTQ29DtNXnmriipcyXnmErT9MwtrnqoZ62xtvnWrRCZ3guE1PW6Ntj3Z5PUASRSpazsympFwhH",
  "key29": "4Tb5AYrPzLhpFRoexiU5bXCZh6pDZKYx1EP39R2gVBneWyqLkKooMB9SEfZ4PumSY5JLYFMPw9YFriGCTM1ap8Jb",
  "key30": "5R5fDubUGS32jcXv5yEfy5C1UuDEXnEYDBj3thSLD4byVRT7F7hz5ScxDXrBPLRfLG3XhweeaMaQSCHAqrz9orkE",
  "key31": "5UWoid6f8fLvgB52tAv3mHZcQZYKjtMXjQMHZRW1aaCxLb9hEi8XNS7oJBD7VfHsVrhUW4hjGye3UrCcrGmtHKpj",
  "key32": "E5gfxSQoxFgusLMfseeHNrq144g6sxx2w9JaJz7pVZAL3Ndgqe1pbyvgwWPd174FystrUJjaicKYfCxvfzQqCVv",
  "key33": "j7w24fT6xxkvQ46GNGpeqbGKTeUo8HSDPJoCYbU24nhzsEhTM6tUfnNpKVmbdm2xPssuZwtEa765u4Pm9AbQYVJ",
  "key34": "CidndsconEX7mSKmWV1ru2AZ7n1hoSqWVUium9ifheRJds6gQ3q1ApQV3zzAHJ2Lx9nrdUcJTMQfgQ6DMDLXQMr",
  "key35": "4jwJEPhWz8CdBD56PcfRjTmeSBaqV14fBLz5uNxocADYY3zCiWQyhSVc5nQpMa18wy7nHdztvRYCm2tkB7fdWs66",
  "key36": "yNYa73tXrD2qPVFZW2btss9nhX8PiBniLUfJGHwT4sZfK1zNa7d4gczBhCMXjKZ5KbuHc2YWA6SnHgfd4acxuV6",
  "key37": "4rUTb9NqcvV2yaFctuNoNYEDCDhtJswZVRpVnJEBCMGUiwCtzsDUBDfgvvXGTLbumyVtzoVwFLa4cHMSPRY6U8gf",
  "key38": "4PtC1hFtoLVG4WjXvN8oW2iGwhxAoizjHt2g2cZ1bqqPovtEN7VpL8eiKQzJtVdZBiVdrk8r3rspv7Ghf859s8bx",
  "key39": "2QafbTHhM6F8pLY5mzLJMw6rTByohpCQBjm4c1xQjdWaRPNH4dh3sUKftXPmusZrNv2y826T8cuSeSZTY2MvvTU6",
  "key40": "4H1Hs4T52LnJAwM9GEPMMKD5iKGvaA6WCeFvdJxYQVRFQf7zayjzpCZgoB866hFFF7MjdE3gtQKAZwdJsZAr8U3P",
  "key41": "3rA5tjTL23fcoPpLwvWc6BjeGdrw8HGBPysoppP11QDJFn2Q4oHTCBzTVmshNDBYUCTovyecEdG3CHtLkiG4YBhp"
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
