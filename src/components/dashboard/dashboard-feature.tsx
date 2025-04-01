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
    "3ZyZFDkL8FXRU1HXFMHXsFJh7CPtmLpozFh81hYcqJFo8YU6KyAXsGm7emN8ZFLWcEiePTJQLstCCBuqoLaVQKV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55sxgrwztiWHXJBAWH3Y8WjzigLFXHK4dsnUh7Z8T9VwXZXhiDKbMx39bPhJJabrpG14PNCenFceEUVhuWWGQRqW",
  "key1": "2Bn2QhwQq2K39ccUhkXbBvgqxRD9N3o9DUHc5vP7Gyv29vkro3PfDBruGFmiDW9mTTtUiCstbhcr7Cimx9NcQf6g",
  "key2": "5s2eJiw9PXCUBqjMLgfiUEb12SvgCPnHbEMCNLdbHWrSoqn3bB68kKeHF956TkEmaZg3mourDiEnftYuLgj6rwjB",
  "key3": "4hqV76KZqNjE8bk7YoFuAaaiqRbBSBsidUYHz5ynsjKabybT14xXmttKekgo6ykMG8SGh5STwWRSaBz3UKQqwjmu",
  "key4": "4oodN41BenAzUnZeJbnkXmzfNndkB6BsRrrT8er7QgQ5NkLDMJy9LU5st4oij2Jz2MtvxFZaDdhXPW7cRKVv4gch",
  "key5": "29qw4AsG9tynddAqqfKrzw4dAsUfmthe3e48eDDs4orfHqpAxb3kGy1KHHetmR2caLJLj96cU4Qrjd1D7WXDpd9z",
  "key6": "5Tnt6KtC8y6Khe1ENW2pERyRNaPKyctr9a6uBFa6HnYYSpNCQXvxHx2SNyxQPL6mW2x3QdUAujsDBBfqVUfDJMwR",
  "key7": "5bKk4xhktevbMuiYu7ugsK7Yj9z5mwtvkTkCt2PKukLug9bbHgGbF151h7UHWWdP7hpdkvCDdNpnHmuA9cPiAyCW",
  "key8": "7z3BBwMi1yZhgHNDFmhxNt2X9ffsic441kGGCCd39FQBN9FWMgSUVAMfMBkoM9RyD4BW1jLtDE3Vmgw3mvD6NFr",
  "key9": "3KwoLWLHZBrdCdkyxANFYJmCyoqjDAQ6JAgjistogXmAGUoUZX76kLqr8dN13GK1haqe7LvbRZHUcj7qmrJJhZwq",
  "key10": "4F8FrmdQBXc6Pz98saq6uHEt3h4NyXiUnM6ceE1iGbk3H7DfRKt93VhroTR43zHAPkRQxriyScQQkJG4fLchN2hA",
  "key11": "4nC3apqfEcbFqbPVWNW8Q73NvxnVtk1PUHioqN6FvLZk7NP7mUTW7p4hrsgfQr2rrvhueG8ktmUnDAZE1FZneg7R",
  "key12": "xLwnNwVtxj1wpY4o6ubaEMXAwLjWg5wGgvk3AVqYJMH6fo9Nu2VjGyHbe8UNMcp9gKMDgL68nk2dm8Niz6VZDb5",
  "key13": "4JGXM6jydVTNo93wfy3Hm28FDD3JyKoJ1MFWa917bSFsaHFbPGersEKh5NwHJhHTxWYYWti5f4fCF74TmJJhNVMb",
  "key14": "5QpCAmbd7GwYVjR7bWY31s1wrMD8ckGTPG6K4dTN8RF3qcKNCfpyoiCiZ1bGridykeKgK5PFWwqsGZTLzo5Znjbx",
  "key15": "2dF3m4UZqGnBeUsopQZJHXX6EGrUvdUenY4tw6pfRJnxFSKYSx8gXTuQvM2YUJcjKWNKXY9EBSyc8wHYJpWo7qfL",
  "key16": "3mBC5u8fVGuvMS4VAvwYCeTsGVCpvBicWierbFakQQodgCWGuLPZZxkx11kuafVqvK2Q68HWpCwuMFcgFYWCsmNU",
  "key17": "3F6x8pUJ2CAmQcacaS7qdkttdRBEdzBgy2icJeGKnzunQXTMLQaZB85sjxTrHraPwA3EPh3e7hmRH52HkKzdUVuk",
  "key18": "5ne4vRaXGmYJogVTLYpT23NkjLmW83SYWgvD1ByfGsHkmadMfmfT7HjFGexo8AH2mZ8jCGM2sBKCVb6meWw5THVo",
  "key19": "26mrRctoSzYmV2hFAZzPGwuF3ACK3NrQ7Y3VA3HtN94oongJ76NdihWE7PAYktUX5kfV6C58k33BB6KPmitQovuQ",
  "key20": "4UYkFqndhFfA9yAgYE7LnK9sCvrgS5Ua1vgVPR6yG5wgTaMH6WwWwpsBCgKVYHR3QTbwckG4c8TJmx5PGNty8uox",
  "key21": "oE82wCE4P1uftshyxzXVag6gz4HhiYY4uNyd6UBWHHNwGnHsZqCKGZh6yX7TumFgHBSUAiZHMVSryCZ3BfqMaSC",
  "key22": "5b7t8doMs7TNQozsbwYDM53H5hMD6EDsC8o37JTfBtrCYgB19dq3QbkfnSEgVcSRGEb5EnFsx9PGpaUge9Gzu7Hg",
  "key23": "kZK8W25L79EVsMQvvnCFb1mY1LeVTSqT3nPjbMduERfxrwzJUDRC7ngdgNHjz85xQMPrvLr4o9JhMqdvuHVfeG5",
  "key24": "2ZP2ECteLCqsfP4nP254PUjAzY9U3KQAntd18iHYUZ2qxv4Uhs9a7GfCnGBjj4jhnzUdXNixbQk8mK3Wp7KeP8u5",
  "key25": "5SQSALsNwW15wpgwBFeBCXGjBgQxj5TBygHqQzjMRHHbWuizbL3zNh2Cyjs7UACp3bCca88j1Ro7QFAKKRztWQqa",
  "key26": "32428yi1rsMpUfaZ5DQzrCE8PT8dQGZAYPiqHBCgV8xouqFksojP1DuWSDd4acStqcTfBaP4r79HgjksWjdpmNub",
  "key27": "5bs14nEfFbv8NCRiBTEHBDYLUo6MBJHKm18cdSYkc4wAarRV87D1HWY8DJ9YdwEeTWaovA2FZuPUHVBGUhhRe8Hw",
  "key28": "4BqHMfLbgTVKPHE8rYoCvKCLkBqsCzjQiBxtnbtLucB98jfvA9KvSNhjqJjwtsYGb5qcm8bYAXm458UdNLfDFhzG",
  "key29": "4PZ9MR4SvSfrq6ZRML9QqYMFG29sgiZ5VMavj3SyUwBizwMv5zf1t5S2bwtmbM7k9UzDctLbESiQxTUUNdwJ2Xzp"
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
