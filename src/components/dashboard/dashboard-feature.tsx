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
    "5oeyQ27a95ojLSDP8vfxu5HyWUkZr2ocb1huu1PKhygXDBKMaxFxLTfAwtAde2WQuA4rs6QrZCfDHTH6q5dwyjr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUgHnqvfKVdrhLFpTHxcjgg2c8dVe7FH2yKLbdgpAcHaWVmXMx5nQHJpEPggEarLYCfc6HN2zYuN6m2mXBhVrrv",
  "key1": "4teS8PEuVMyumuxAr2Ug1TUyqK4Qvod7Q9qGDrgMEDg3tyMWGs4nAozQpSTCAhyNg4qEezjLGshKbAkJ9yAGieev",
  "key2": "4Taje2apKJEnBnrBdiU4S9j1gcXABi38e8iQKNfu77rnhDi3XsPKDkhRMXE8KK2VNsBMLW24MemVw6MMgHRCoKS2",
  "key3": "3FmejjEfXXTD1oCAcGYMX2bFBFafdCR7zQruuSwhknsqN94ED2XQSLBL62CGqaLeX6yMTGdVcToygPpeCcEMckyk",
  "key4": "MvJ8HVDBsWbEPTrUW4FsrYcZPKP1YEPw1xkfyaEbvbQAfkwZhrMUHQXgYJCY2BZSjkX3CsbrUu4c7B44cxxYdBK",
  "key5": "fKxqkbo3xGEMsAB429QtwY2ravk8VQjqASmUfcyz18CWfoChnugdaoG28cZbbGX8QCeiS9CCMuomhN3sfbMwc4Z",
  "key6": "4BZV868QXPVKUK1nHbDKPgrnWp5JN1NFkXZHL3x3XVBweJykcBny1mEJauKmKBH2fDc4xvzMrN2ygtuzoHW8PCAE",
  "key7": "48Nq6z73yV4k1FPDugbQRA5piEgf1rsU4UGBzHnfNsEheF4mMfUfp76uoDLs3nAPrThZGhVRpt9FUVh3TpmjiHjn",
  "key8": "25tnb5njLys9r8FdcK1aiyovG6Mr1m9z1dEUEtvp678Qy4kggdT2XbYd7tj23JFGXUw4LzJADgnFj2ph4RyX8cTh",
  "key9": "2uKvzdUfTy3Bp2NPKbhuEVkrvUHFNkD5cjELCep6axY91wgtFUkGhK1jTfGf1j6reXxmmJyKrQDwdr2oAqhoXbMf",
  "key10": "2jQnJnwDvUuerrfaUE5XFHoU4wCAWB8uvrxYMZWWK8qsge1cgRCLEghYEwpZWCRAoaTPqzACs7iCscVYc7nLc41w",
  "key11": "3SrdcAPcThnbf4j5zCRSYUZSSLntkg3cP78vE6fAj1jjX5B8TTqEHYMSjkECQPy3oRgw6se9cHoQiFQSeA2zqu7N",
  "key12": "5w6PkHpspBqoJZFm4VNBEmhyjYGfeEuf8NGRCSQmQMKarv9GZKh8jHAvNL9Du68AK5E2gpbJCjvS2yb6MiMwUKED",
  "key13": "3icYdY8nRGpzY6nEb699GaAfNWjXmxUdcrC8SJqDhxMgpJRPToG4vPbB1vf9Kx5hp832pLdXsm72bBRHGirF9kzE",
  "key14": "3VDAjpDkBKv9cavgRp8xD1zQ2C1hpLQx21iH1F9UaMeYfJTd2CqtK3Ri87Hzg8NxHBY3PGscu2TRZETxeaq8Z5s4",
  "key15": "dCijREjx6aDCs7fxg6eZCJsavbZCNstDweDG35KEBjeKLwUuyyWGVFYKQ6qxctb1KtJUBudgGJqT8CFefdnP1rH",
  "key16": "4RVSGHZuLcehcxERGod7wuEECkBSM177GDBRWFe26dfCijZMUcRzDWbbSHxV4T3TaaUm35sTUoVDKZHYNqTNUGiR",
  "key17": "wo5tL4DxHestqxceu9m1Z8KhA89MT4sfFy5pg1VuJ1QQpkL7acrv4wVSwRaGpcn987sA1e5W1jRx8fGYWEXwixT",
  "key18": "2UCF7N4cV8q8sbXtNjsRDZKiJ7zf148o3bF4PEMAGhYEqmX8ynTuFGJphJQThQZAsSQFSXkX8KFXmZ8PW4Zohmsy",
  "key19": "5YAeCGUhB7nHRHrimytBdf7LogX45dETuUfA4h2ciDpDRFXYCaDomT9q5rpFU8YqDHMEwGFT5Xt7cP8w76ULg3Ma",
  "key20": "2X42GYK6Z1Jc8hxTpAeiBdZm3RvZmLrutfmtFc7TpFK8ehVL4XdYE5PVdUQ9AnYRrraHEL4QJufEHDNj4pMcF8sU",
  "key21": "cworWyqsaZbLDe423HpJqLKuZ8oi3wUF2yvkPx7EeN3ysBFT8cWrnkwM5YHUNAeLoGV3En7eeywqkHZG3RVf42M",
  "key22": "5CfjmxaYC8p8ZmbvcbstdL4hphiV2BQ82WHS9jBfJJsLvpNz2XFfaf1mkw73LCV1quFvqYDezvn96qaAQmcX4rdF",
  "key23": "3UES9EZ3L67Ku2Whiq16fG3DfYQZN5oJiec9ap8QGxiVRAeXUF5ZJ2wdWG2H9HDwpkymDj5C6KwpB6SoPMdgABnN",
  "key24": "4zKC57rWJDjAEosCaMdfbfXGFa8Nn1unRFSAZwVAXfzTtYxeQyDrR29brzs2kJMj8djyHhgW9z8KAjfYKsTgKGGF",
  "key25": "3B3XM7QuXxcgFuAbnjLQnMsh1ZwAHDeDi7R1z5U7fsKd7EnYn7Mo5V1Nyn12Nf5GmS8HdC39QCiA37wVoL457J9w",
  "key26": "4J7MsT7cWg5jH2UYCDzUbRaSkAR2KcyBwm59uv1Lsr5QqHkztFzPogANQ1Gn9crBU8UB1SporDLiXBFxvKcpWMM4",
  "key27": "3wRQLv97aDbcwgCmJZ9nKzXjiTGbMmjpWqDhpuyX9zxLcGr5Q16CxjCzzc1vhx6ovNrmeMgxixQTvEuqHSBg4FSo"
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
