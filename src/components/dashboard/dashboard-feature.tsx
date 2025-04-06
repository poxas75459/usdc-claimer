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
    "5377jzktqoyHmyjxwP1rJQVrzFmBMuRSmGS3SqZNQ5tT8nvsTKaLpxejSL7M9raAQazrjoBW1xD5BPTHChGhAbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1v2bHu39pf1m7dW8vqv6twGUmpSnzHH3Pg6H1AgEA3PTdGSsjEcuPfEZ8aLY83ewTFZgAiTb9iamgMM27qwfNY",
  "key1": "2nvfLCwFUrshn93PBgXyf2qDPMBgnrs3tFdhJuBRpjBqqgkwcoqi7w3pdsxdg5FU5xX3XVHBRBQBrTjDSrZ597zk",
  "key2": "5jJTr3GYKeW5RRPGvwREqzchAZjJ9p8r2JqtnKt7zLeCLUiXDqEJbbLGoFh1hs64ojNwkHXmqhx6SWKEv8Usrehu",
  "key3": "4TebqhsuybV9jcXfR63hsCAjRrqp671qxQprmHjugsxc4PMTuvWimoywhwtZiUM2kY2bhMzy6yVdo4HGr4uNLnkU",
  "key4": "2Zxeso3qiotQBkwHzC2nJwXUChNNfmTX48GKsMjUkw1Y7A3UXydiatwP2wM4CmPKLFdbFezaVuJZcYqxSdS9A7um",
  "key5": "535kgDLDPGdf3CVT75iekx7jxCrKZ8WCQaS99uVW1LGBihkrtEBRNayqoKcPuq5mz3MrsLPSXBqF1Z7Lk89okhwV",
  "key6": "3inGi5c9RyBaBxuV9NSdnX27miDmfbYAi8w4T3DkURzNZwYXusxGWuSnaQzMNAp6f55QaUcU1vMcgC1jtJp8eJwf",
  "key7": "51Yc5Ls95CdxbTAzrJPZKLGW3A46fNU3nZimxFLfVatdw62HeV76yu4GXmxwUGznR1mE7LMSiXqS7XUZ66PfPHVP",
  "key8": "4f3SCYnz5WV4nhBrTC1miP4QndJJhvwNqmy3YyH1oh72BWtsRJcDq7DZ4aAabAJheyZEtH8Zm7hApCihbJGukxRD",
  "key9": "4wPPB2ddvbwVXJZJ2Ui8vUZKsBaqza6QHS7d99EKWvUbhZn28sCWoeksX6GQ6VFKx9yLDgYa4iTAMzYYUmTWDfLp",
  "key10": "3pi2nCiAeHKLMyB1KnFcECkCNs33vyqy3hVoEtbiGgWeUXAXkh7VNw29Zcd7KZJuTBh3BHSjNSjZR6eNTkUbgdpb",
  "key11": "4Z1wgWeDjYk6aMkJGAufdmH2mmMoQTEmBDtV2rnFUVRWPjumaV3XzsiWuLPM5ZHv2ZHUXNRQVwL4PZRqGpQeq11w",
  "key12": "3MGhosPpaTk49VzfoiPPgVUvmyyCzMGJZZSN7CewsYCQpP7JFRQComddHULjNqriP1yW6tg3mjpxLpWBpngkMcXU",
  "key13": "3cXZrAqJE9sk6U9pjJFBD8tvQpMby3K3aUDTo221AqaLeg8YGEfHfqqR6q11nbKcyEArh59ZNR37ujsmFGMPVVfn",
  "key14": "3mg64FbaeoLtsoheqQqeoUEfPwsqKKZCyvkZ62dg41Xh7ZCcjjZPiwFUkPHnDVGJqPoRg9r2yr4vXN74cV4Bw38e",
  "key15": "v9rRPL1PCfqDKTRsBd6wSzX4UH8tHq5ShcyiF61TnfcoMGJ2aru3AZQviKRjRCyugVizCtYEUyreNv41tq1mCn2",
  "key16": "3ds9Ng4kdr1eqoQR3Ni8mvr4fzBuefkejKogzk5VFVxdn5561hMv64d5iJ8Nx3vWfjPabZHWeqsqSGwcjYfAYke9",
  "key17": "ZLFdz6uADJx9DmGjb2EYZzWLMve12EtKBpZWZCTNY5Nbnkz6HCQSwFaE2c6Tfw7QqjsS55quxzjPUyi16gTiaCm",
  "key18": "4gmWRwhvYYMzUhPTYm9WPsD3fEAyGwzNmS34aLuudQvbb5J68YfhJGZ1W8Wvi4TjxCiBc2cWr68vsV382aKuq4Dq",
  "key19": "2CL7irbHj4wbAkQGoCHFzAc4KnYtj1wsvT83gy2Fw1z22wjUTH6ck2gVaHccJTEFCqSUgFdP5k9BD2xHCk5ecomV",
  "key20": "4SobWRRKewNQ22PxZQ2Fjh4fjjSLBVu2o9KugW6ZibgiJMUha9RYaz3ND4QpBSsznqMQQAbkwzwG9gizFhtpjUNa",
  "key21": "5pw3PN24rXXcTYu2BdU4ibj4s1YjUtjKgrozdkbXB28EvjXHTXbL1Tmp14dAMfczWez64yc6iUbJnmkiUPR4Hx7f",
  "key22": "27r1zXMhqFjeupL7hiRpgSsaxAd38QmBt6pPDSeJcXLnbCen8rSUCBCD11NTCffiDb7rGr8DLp3TgHWwrFJGVmZ8",
  "key23": "2UCtt76zskHGKUWXaaUrYUjxV8eBRLizmB8JzpkKXPkVU4g4Y2KxderXDfCwieXvi1SVfg2jX4VZEjbEqm3P2F3e",
  "key24": "2nnujhkneRTwhicE2nNNA7TkyGikLPpR8U8BPyCQ7y2kjPQjxbttT85PLLKrbWj6A9LW8oUC68at1pPWdaU4PzgF",
  "key25": "5xLkBVfJU6HSAM69Lxhv8wedoYPZsiQihLvBP47qD4Xh8MhUmHvVjKYDDMeMBAS9GcU2h8KTvDjD3LP7NiNm4CU3",
  "key26": "576FZmihqmwVqZsQATutirgNcTReggoEbTbieUWpZk9oNAgjFNZ3mu4GXhU4GR9n8rG6GhMvXYiqjeZE7aEAWVnW",
  "key27": "4RiFDWZDv2uk2VgdaWB3yLHnscW4n93xRen6hkHndftPbXbE2gP9SEBLD5CQAS3rVYqSBJXL8suPuHfErdyYBBxX",
  "key28": "4DquSFL3wQ1twS2oRtoQSNF3EiuWzN9tncNtmeVxa1Snj4xKrWCvrjjFARLWf7ZvhvcnaMYDepMSAcw1oVoT5xSD"
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
