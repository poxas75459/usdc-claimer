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
    "4Kgni5XKjtHZdE9eqcJ16m4ZaS5oXtuYwP6zmEj3uBXX8uUH7ZGuW82JYiu9MP5SFmLTt1MdFYNuaJFrsLhyPzb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aTU6hjau8pwa4922SxkWeDqqE5YAi4jN8bp54iQNHKBs2S8qY3jCmrQwrPYcZjTWbqg138D8Ztw2SsixQEhy3Y",
  "key1": "3HyNTmh93q7roBUevoN153g4XoRckWYwk9qAcLYYP5fvy79Dnitfesdg1ynCXqJrZJYxiE3jTkdPa2gfwUCgK1in",
  "key2": "4nF4qvyfSrqxLxjGeLghMuCV5HVGZm5xU6QSnYrnt8sGLPCr9ah7C4Sk2SESw4U5WiTLtmkbfspppZLMxt64oRN1",
  "key3": "2smVey1H261k2srFU36z3bjZQaoycGRtWSGfXYkWm5znD18wR4T2a1GmRsPLQVSb3vBZAbpv9sRVpfJCASSDKQ2H",
  "key4": "24GnUGisfcKmJmh1twTAUmyNRDgMm7bRbcTDwDA4QoymZwHJ2jRs9NtbdCGPdjYM7JrENK7cCVHvVCZHBF64bPVk",
  "key5": "25rdDoASFpPyXN7Bj294vSrARDMCaS2Dm1DuvdP3NaePvJa7TsBNWPWnbM2nGzaRtca2xkXtAQVYqy8etyKTnDu3",
  "key6": "4J95TyPgKfw8PqvdHKGdJtDAQFJYi5o9Zq8194gSnXPEXQ5WRnVLnNGFqyYDkMgiUDYweTQocTZR1Tf2FDeWz6WN",
  "key7": "xdhsLd1uuVYreib8Wx3ZKEgPQ65rR4kwnkB3GX3J534UtDyJjAm2sN8ogPFsKjjQKi44pBp2BBdzLbg8yTrqZj2",
  "key8": "5X29JeATHWoypQoWTqx9DwQi4rKMyyWH5hR8KVrDxwxxwCj9tW2HwgG755bUTKUHErQYuT7GUsRiK77mv9yxYfce",
  "key9": "4CrgpgpQ98U3XaansDY7TbpbQ24fRZ4FBRbpU363sEqsmi31FScfiyWNgYYkhkY43FEFXz1hXo5UsZ6iHVueq8Su",
  "key10": "3Zm5bxtpjUD4QexQdnvqufGTWgUYMrvqTsGKPAy9YHEPiiKat5Je12c7S22S1NSwWapNVoJJsU3F1wQKhjG4LGus",
  "key11": "4rr1Ytx7AuDVuFYqqhLShNKStZPcy1ZUjHXQQMXnyQZHqFVHvqKjF65ssvAFNsHyjGzsog5XPdZxmURPcSmwkc5",
  "key12": "9rqN4qRMkLBLEDbMoC62PFtsxycompnaWmWgCqqeGGb3c9FyFbV8nrTboDCGadbNK5gnw9HLuza6vbXXT7R2uAJ",
  "key13": "4Bk3MmqPYjUWjgUn7CLKfdimentJSuzNy26LQNPSDVaFL8H4v1SRv1VrnLaBib7kEFWaCJJPcX18Hu6iphBFjohk",
  "key14": "5TViRm1rfc1dTfNBdRHQQECXFmZZSa3vTE1C76mZqeFyG1QrVkVj5LgST4QhxiZ4RxakmtAuTPqBarpX3kDnifeK",
  "key15": "2d3RzswBnVTffhSUUCyp2BVTMUxfoTZsCros6BobUu5AoAGohNsb1Z2ukCe6DWsEjS9TxbHFsku4BDqJK5UehBPA",
  "key16": "3maUq7pVmqhvnpNBgvkAPHSPWxu2oT11Ncr7ZLSV6G8mD7gMbmwpPhVNGwMwe1t38VY3y6AZtmnCtxxPKn5Sr68a",
  "key17": "MShxSD9qBrUGEiFBULKKJizJysKBdVaNKGaB5aWcAbb3gf4UguHDbEZe1t6iRa88Dzj1tNejZ6HYffakQ7DEWAL",
  "key18": "27w5jGCXw3rPm7XmDXawA9z4TeKRkxAgUF4iacMF5aN2wRjf6ZcjBgAQZxdTE9PFcUhGMGSadxKcGpSDjP6kyVT1",
  "key19": "2hZ1y3KkattP6yz5Aa17ec9Bcujod6PMnXvEMZfvDDpnYC5mg1C9ce747xcWkgs9Lu5JcKmNtaLNohvD6UnTqMWo",
  "key20": "BsLwWdsZVXjbB9g2a3aYHXEeU7DaGYuMAzrNxs2w4PZz53st5HfASTYpYdGsSwyPE89PBhQaBM3YdLs6YcJ2jzH",
  "key21": "5GKCB9BvNmKkSe2u8TdqPZiNqbajDoKcBsK8fPsAaG18qwfN87Gix9Ke24K26fDAPUsCWzPnmbqLW76QAuKS1XmQ",
  "key22": "xbeiTPzxUkdEVnNE95QTLPyfAx5xouvkPKFdS7jRkn1K753Kv8NgCm4qCVahVnd7HbKRCiJQYiLYsGLofnTGPbE",
  "key23": "2pCJwg9ErtuR99n1MW4AsmBE77DJXD3FCEa5qGe4Bxsqcx1CS7RywTQtCxeH2pZyEZqAfYz4JoQ1gRB1vvvQRptq",
  "key24": "4MpobmLMMVUojcAc9qa4ZDqV6kbrmrD4iLNpp5RQ3TvTzWCKBz122i87kAfjPZhoiAzAHVTCZc9AzoL17NDvfeeM"
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
