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
    "3EG7ygz8tkCSMXLuuxX6EzieEW3saLX7h8Z9h3tkZ3p6JKFLqmhXZu6u4ktjG3tBYgnqne33KnujzWQPTfi67cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVw7LC7BgjkhBhCrRzWdJ5onJVCWGpHY1ZeGjUtmbS7RREBthJBSEJxT5hBbiEGHE8y1ypXAyZVWcu4LD6U9MpL",
  "key1": "p5rHYDDZyhvcj2AktKnNUh2uN9Lme9qAozXSfvQhmx9aidNLYDBeaaEfLuaLFM8vvu3i5vSdo9628riQvgJ5QFw",
  "key2": "4Ho7KWN4Zdi7EHZhuXf1q78a47x43YbRQbDBLgEz4fde2gvoxNroZhyHLqmN99og6mJRyqRGg3d6ZYoiTTrvxQHP",
  "key3": "4Z6ghAnrQkvM8G9o9dXcYsX4tHRjNQS7PPvwiCSpGUrV9bsKkXoG8RsbpGiWNDi2RaTszFCWQK3Bv6UwdEM6sxk3",
  "key4": "2fifX9VmMbSzzu8pXFXUtafYNbQmKo8SQzDdYDmYTA7ujG9tZgjPgNSHvse8V41ZjWnbvycXQomvDVTHW9qv7QuD",
  "key5": "3r25gJH9Fy6xMUU51F3K8iakNocFgvcQQ62s1JYhnpbbcSb6eXuA3nLqGG1n6q2KbPHRJwgdDJHHkoB6ef6ZtaEp",
  "key6": "5jCGSkpxjEKNGzdcxpb5QFVWryPXmFErphSmFr4NM1GMfwvzpnXexqJJebQDHQgWx6ubsm8jiZZLLhVmMg1wAsyc",
  "key7": "5XRmes8fRDvFRVdeNn5qDtxw6ETk6vRrgVh9ATKcYeaac15W3UhhKfAsiDSdELTW1jth4oZaLxfxNf32f4zV9wGk",
  "key8": "5mcKtacMVfyusMGBQG6NGZp2zHY2i648ErZPmT9t5XuyTiecytvJbYghHLaNhUZkSQAusTS9YjxadvQH3VgYraHp",
  "key9": "ARY1CsHjPHg51p69s9oa2NGPY1gCWSB3VNtPbBG9GZbyNHh3W5ypdoLyojJcGuV2SYanoTryupLAuW7RswQ362B",
  "key10": "5pfu4XRzjhatc5Gvu9QtsxQN8ZQ19nLTQkFhaKqKagRFdSJurtsS9LCTrnfUzo1Cp1pgWKnmw1E9pnMuD8yLeExe",
  "key11": "2PhUJfmL3TtBxy4ryQ51EEBtwovfLdVgSaKLHycnpYP8NYDCrX1bFmPapjJGaJsBUsc1BBdBLatVrfqgM5Akp21P",
  "key12": "5v6gfJgRfTLmCCwM8qK5UTA4oeqbaXzSf21hP3CKn6EtL3Vw3SEfsU2fJBRBvHYp6AfLvd6B3PGLyiEFjcwiY978",
  "key13": "5Jzuw2AoLLDsjikoSZMMPwv5dFsbh2d47g46QGy16dnW3pRDg7bvMr23rmePoNogBYqGYNkzaSZTeFuodPKPqHuz",
  "key14": "2umQ5LpnbpgbT9qKLCX2NvkmaKdDtNS8di8sPdNEVSAMaRRA5NPhKrR8VZFNnwNgJsr6MUmvBNRYrLc6TF9Xubxt",
  "key15": "sJWbhfFzRcNAbaQeqcoVA4fejGAVmSbVUn6KQuMzxkQHTuoP5L2Cn6QEGuhLLFXgygGLGRiT1bsfQRvK1ugCx1C",
  "key16": "5TRQECqW2dpM24hZjEbEnMLEUVAmU27ajoMANYanYjFTvo2UtjMyMKXf3iSJxG79W69gibua2nuZqYsohicBBaSZ",
  "key17": "FmvPsRVxkangr3N4STyu1H3di3we2S1fZZZpfifvPb54t6GWFPGTeQgQPn2rYSNuhkfGBbPhy9pgd4a2uaAFm1J",
  "key18": "mdy6NGjLzDLJWFGEPMDWhuD1BQ3XSu8ZtM63X4NHYN5BwTNsswFyDJ1zr46N9VHJJzo6SwF5davnHSnRGvaE8yB",
  "key19": "5FCLehhe9n9F7y9Arkz7nDzfCFMCAGqEVeSBUxTsuyFE2zx8mwmrmhMLUAFiSGnwaYXjM1qZgc9KhkMktoJRK84k",
  "key20": "32qNCFX5H8M3nipKLEQw2yQbskm1cy35Wpu7mdrAGtHncV8Kdc2WCR5Rd8U2himHaRXUPALXtsEbwnMSuzD9XQiF",
  "key21": "4mTnwg3rM8jCDc3YA7vtc88f1TzFm75665qcmUceBDNX1sakmCCqmZRTd8guSEJ5YGpC9XBz4oBZn9mmfeiWmUvj",
  "key22": "3r4guEGW93PArGWfQAVH1oRLwn7TfwkPMyCL9jwFyxr3PXPpuoY1Wq4Qb22GLBPL2Joa8GA39uphJmBn8JjDyEaj",
  "key23": "5XiJfvLmkSUqrH8hwDcEJqP4567pS1tAbMhxxY7jeh6rGh5YaEjsFZMZzQTNzt2vnh3JDQppsG7t6Ha4xw7THTDk",
  "key24": "64yZGaMUhMsQJaAqu1jnrDH9PUCmcYQoZevzCxK1DcKpn87t8JFax9mtpw5qhr7mofb44buyPzsLBJrhpUy6Bz2H",
  "key25": "3bCdywD9Q2YYRyUuc27maLFLGSkD9Sao7JYWzbw4o5MA3Djbn5gb4y8GxscqXabeXWsPkzXRMQBTgp3LrrpYrCqk",
  "key26": "5mYsETB5GSzadEEn26cJEDzP9JbLE56tmSFYwGbM4ytFmR46GcZeCj4sDsC5rLGJ2fMdwXeMrFsmkmZEoctEA7Pu",
  "key27": "2FoVMbRRjYkkqLZriQSaqVUvJQUPoxSjxZfz9iWVAPktjp1mEQPzVpMXo5wrpWWh3K4V9xGc7aoRf1EBWyyqKkgx",
  "key28": "5BtkMReuwYQK71N6fdkCvuBCyzbsuyLumrEkbrdHgGcRP23JEcVL7ofgzvR4ABc4MBs23RosPrLfv93Hwe3jTRW2",
  "key29": "65FzaCoRFNr8CkpL5bHMyAMkWPiMkfnucQLc9GDamhXkLUyBrs1YRcJhRD1y4nUgwxNVzrqKHnENgy6RQvp68ARt",
  "key30": "2RVsbrKqwa4d7mcHFHjhAzySNitrWZcfxSDy96REn66d1gZUfJWTKigANzQrzpGJcdPn2ecDdTnTHZrqVBxDRzvE"
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
