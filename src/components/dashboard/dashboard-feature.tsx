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
    "4aX258W37JPkwbyRVHEQ4bExUsaRJnnQAratZnuyAR8kgciomKE9rLXBCg1M2kfES5vhvqF44opULjKSMJDWu4u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SmbxtLQx1aLuZ9fJ7tYJRXagmLXAYVRjpf4HmuGJL13uPYVqcABjFaqzCnn8z4SDhxCfvCrJYXVCxMo6rap9X8i",
  "key1": "43sd769iGEqNGVESdbUJsjs5F3faNFXYi1hUikcy94LYyzpyQF35wqcwZTffDjrgfU2LjJUGg7pABzefRmrS9CbW",
  "key2": "1nhkk1Pa5RxxqagofEa1W9v4GDvZ6VjsFHJBZgx6YAs8td4NJo6k5jMTLXw4KAEnPjimauBcQUyBaYjByVXPB3x",
  "key3": "39RDh2fd9f71rrGNMQrCwmdxbSwcEcGUFsyQnm5Ju8xtHMGEubyc2iofXRtuFDHDbUcA3eBEQSe7SdiBZRN33Jzd",
  "key4": "UftStbzg7mZKeBScT1JgZwEsnnEq2hoK8mxRagJm7imgwZtrWnbMoNTccuNsg7Pt63iNdWGeWKnCkTqqrkWzUbb",
  "key5": "r4BdATry2ZQcMh12MFzHn5X41qoCRo4Mzsi4e3FreRdhPK5u1Men42oEvXp2j95fhijBe7SyqVZH7KWXnBXA5N2",
  "key6": "2gD5mMJiRPvgW6qQzKMDPU9ZdGjgc6GhR9qeQHXU6kNN8WgBJfdx7H6AoKZynukQUbM5jFAUBdLL3TQzoWjQeRRC",
  "key7": "2tkekP13wPXgDgMXkj1RXjp17NNeCq8y18jMQtrfjCEQ9pFZ1qtdCjb3R1C5EixbdC7HbpwYLLYZovX5obq7t54C",
  "key8": "5seHUUnwMFdySbydDZPncqjjtDSacmHj6ab1u18bkGVPcVgKTCGHAYzAbPeT7abXqJBS5tHfJNYfvnmgAmACBtrK",
  "key9": "2p1izz3QVmpMQBXuJcSG1Gha7pxN6hxj7N3YkNqxmAN2QD9MwSDSB7wd24Yubq3eeJKzPddjCWfV2bdTBu2SHR4S",
  "key10": "4bwmNf8VD87zNY9HRS6wyoxfD23V13LijGQJHuyL9kmyNBP4JsPqXcNSGFcR11ycdfJeX3zAAsK6gN1CcgDyojL9",
  "key11": "3ohS5vEr2cDzrAhomCvRfnWFQfgGwsY1BxDNfNLYRsENJzTNAXh459jDKYLaXcr778yF7HZ35xCUJ6Ge7gKmQrj1",
  "key12": "351te261nccSYrcbkk1a2LiciDwGzt9pxX3vLgAnacNypufGTBW4D2HLD9Bxn8ZESkRhAXA8Qjanisz7TJif75nJ",
  "key13": "2RxJj9R5UePXR6f4KNeyXQdHL9NFu3mwCGwAxTRBBeBczYPD7mYoD5HLcWWj8FfRWktcGBtDrEFuhnzLme5ZrLk3",
  "key14": "BbdYCURuf2sxbtPZ1x3K6kLbS6frv3nHpppfAioqHTuwPd5kBMUwxrmFEhJbV5vcAzdHPmR8Kcu6rJ9Yf3VvznS",
  "key15": "2R55BXE7xccxMLfaneoeCQrgJThNHSgZeFMQX5zzHYnGm9BBbmWLsKyucYu1Kh5yTvo3hbHWaKB869CzRaEh45i5",
  "key16": "4NQVJ4gmZvV3G6XimwQKPSRzxfbUvpfh4GzZMVcMGRr2vvFVsarM75HLFwkVcKL5TunL9kJmDN35BWLJDj2nhDon",
  "key17": "3sEFnz712R6NpcD4iL1Y9Uu9gU1btqR6mq652yvAtzwFkk4g7xN215kfzwdtbP33baHTvuYKKj9mb9is6BaCGdXa",
  "key18": "4jwGjWGmXSQ4eELPuYAoMid76Kaj9qnAjGuuTTYrHUzFn7X2FZkZvhQk7yPRF5mqzscKNxDFn5vz16ANLCHAbkpE",
  "key19": "45aMictdszeym3iU4GeniwxyWVTavv1yauyamF3L52njLufdEG5J4XuNuP8nEtLaQ6KW4xtjfxmKKNUv9ZJBTJy8",
  "key20": "4QgPLYWZMAe4xB5qiwt4qKtaPeERCZkdC66kvzD6mapefDVgs9uHooyDENwJJijzCeNtio2kJVMPQQMTLNgMvQXX",
  "key21": "nWiWheZTMFoAK2wCN2caxVHE7M8ChG45XNs93iXyaFjpnXa2eyCqpn2tJvCqkvbFeDxKs413jWXZ9sSTu6zwot8",
  "key22": "6429MED1Teucb8LHT1b1eHVVzUh9zKPjJTzvwP92vBpimghUyYGsMKecm3WJMfrd8Chk9d9pHF6dajjekzZjycSM",
  "key23": "2gnCWiEAqop9h5ZoLueZezMp7r3e4dAbdYwbrYcTn5CqodyQVDLS1AG1WJkf4qWE7LPuA4z9wemVkzS1eXoXfCmd",
  "key24": "44akhtzVCtRxFDc1UzAYb1vEcJCzGQ8joiDh6tCqeJVwnf7kaw42hMoYy1x73fbSwfk6UnKLwhSaV1XqpsH2xpdV",
  "key25": "VdxaemZYK2GkKCgowEX9PGCD3bpUM4ft4KY9d7C9RshSCxPQg7gk52wEbXPU4fGSa9zm2R2ABAwBcc1RXWNJoHR",
  "key26": "4scnaBx2r6WpwHLg59WUQwV557EW5SoJBQt59DJ7mQ51aAmnTSD9ManPxXtdxQmGn97KwrjgZdqKe2ouZuDCuuc2",
  "key27": "5izX3RmVx43pRQYsiwqrUDHjxoL4Uszta1cjbeb7oUXYptVaLXGREL7ucQ3iKVWrHnweubkKEDMevrohG7uyCohk",
  "key28": "4yoGsAvnkwMMDt9ZGZTuSup7RANYasjdimkRLYUctV3vcEjM6boNhkLcM7V1CL844XaxRbHFarxgT3qfDfz5A9qz",
  "key29": "2AJ9Ld3R9UTTtRgYjVwLHZMnNj3YwAunfxWLtTbevCWRozJPSMoE9voAL4pnXxXfgkmPTZVW2VirZacJGhZJos4i",
  "key30": "dZfXLKp6fU2Q8MhJvPv1KeB8VHg5YZQXw2kzZjtaf3kSPsScudJFSJ7u1CrDNtEj3Sh8kgo8xHNKjxT2XE5urzk"
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
