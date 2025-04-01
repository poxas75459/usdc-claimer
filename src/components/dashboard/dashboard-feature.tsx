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
    "4CQdJn3oMhKfxguTjx1P2k8nkBBwQGgoSRp19NdhRMxxavPKxwLHrUUtqhBTWNxu9AhgXPLoWQzPtTa6taT3EmM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275kqN6bQivVwcBzt24KWs5R8oETWTZRSTPq7GQrkNEQTzAzLiLy6WtdcXUgyyDSGhKmvnm8M7TS76tSMRmst3te",
  "key1": "2PaLMpeabHisDy6vBbKQTtw6fM5Zm8jp1pxnX1hLgawUAEbKv23JBPrrQaiQz93XF4LEtW8AoUUa2Zawg8SVDyzU",
  "key2": "LEMyyc7bM3sp6A1kyKDU3CLv4ewm36oi9cVWTeBWeEAKuadqPqFwx5Zi7YYRTZGDeDknJAnZubpaP7wZH3qbWBt",
  "key3": "445s9GMZzHNziRrFEVdqriurCdt7CCkJZ47dXT6acwUHYybomVxWVV6J9eTURQjyQhkRHVwGQaUVkPGPxvKeLdAF",
  "key4": "4LA2xYteLt1GZvecVCLWJca39YZ22mcCBCyxTWu4zuHsbNtKW74XRFQbytw4oR5VxcFrLjKyWvg4ymSf8EiuCRBe",
  "key5": "5qqYEuukT6HyR8eeaiY7iV5XPJejCGugo7cpMvmkuuExD48YDvxVjBHCYaWeoXwK2spK7jmQE86oJmztNL65Wfmt",
  "key6": "4UXdq4MK9aKyPEZkwKipLeF2Sepa8BTR4HTzMhPAyHaxyns5FofWhnxyjYE6nVBuXKk8myYAmT4Svyo2eesAHe1R",
  "key7": "4z5QBCCaqjRY8vpPyQKog39o5YyQtYsSsQoCwg9iMPp5EHfCRR7y7yvxZUjgxMw9hszdtzPTpEmWMYeUafEMHiZq",
  "key8": "5Kk2qf5Jfn1d6CRF1bJuMYE8ZWnk7Hi3Eg79GJjf1UD33xdNhG5jhntQTjNWTKVrMj1TXmbvM6wTV9g9AkBg134f",
  "key9": "4zkKBJkRdiRysQb6qGU8dHeWBzfh7hmvkUdgDfktXMJzdkSHpenX19jc46rhzgubtNwpCNsX4fofGiNayoBxL2Rg",
  "key10": "XP753yV7JCmjHvh56dARnTCF4bDTohkNwe9vUvd7FBMi9s4FTaRzrsq2cZWbFvXK68uQyxwB3Xnh8HMCVBxiTiN",
  "key11": "3efAMZVi1JfuL7sqzeWSWm2dm3RPeEmGH2CRFijXg8UxXEWkn2WD1GeqoRpzUWmK7L8V4gKDH92bEM4FewcE78s8",
  "key12": "4aLEVN91hfWtNtyU4NnSMnP1usap54r1mLSLfHjCPr7L9L51x94tKo1SHMhGpDV7MhZqwTVKzxG4CndjchrTTCzS",
  "key13": "3LDm4qxtdnUvWN6qwdJpArrwA9LsobwrzYU5UMcemRHHHEGQYYYNphxhAuhvSvrStiXikj9EsjMUz46ZWGUJVzci",
  "key14": "uv12tF8Zxa7YoG1aKS7PNXF8ZEykUz2xF9oJwWKKyAaHZHmcXc8WF58DLkKqZbGPKSUcYYEZJVUcdrg3tCccg5U",
  "key15": "622UZgq1k6xyt16tBQc49z1iEracdCLootEqXftrGcGddrRAPqUsgQaQWTwGXHUsdbzjj6Sfcm79ZuDV5LfFi6kZ",
  "key16": "3vrvKVUZSGsSwpsAaejVi8RsUvLbdDgo15b8N1djpHFqjHBrtXj5fxkVazaZJx4xPRbJUnbwWyzoG9pYnmmryf2X",
  "key17": "5RjX7qc49FfshZUPBB59FL1T8uVUjk3aX5MBPRZ6tk2pAGZqSFiwMwqw5MLWguCG8o3kcFgX8qFU7oWS7H2LSMmm",
  "key18": "4rN6n8auvQoMaEB1awTnZeoEmqyzM8A8fDHgq3eH2nSHFNbhKRuHXpfxE281UmGw3EfeE4LquHhXbU5ePji8uxx5",
  "key19": "4wLi9e4KXgyAm3MPbw7c5JXbwh7eydGBBC8sxTgLP7Ky2Zi5fHsvs7TpR6Xfofc1xag4AmpafMaR9haCjCBWUFrh",
  "key20": "3TKnzc3xfLowwWznSX29WboZMTcBDG3T38hhNQQAuCWNd253P3qRCK3caTuUrzcSTSTvrkByZGSA8NsQa5onyazz",
  "key21": "2xwhM9MiSFSV67D8oYHnVMwGLhxD3RbUe5CovojJ5QV9QVVxhhEeHEc2LunXUbgQwWcv5jM7uV82gr4LDxjnoV9K",
  "key22": "28DmzpMAa1jQdQxMYStAV6aBzxLkhCQS5v4hDb6WgDdfXkoG3KikCh5XoUBgQYt9NL7TddYKUPGYTY4hvezuW3r4",
  "key23": "4cUC9dLVR7PzM8HxsEurCqP3nh62MtmrvHt8ZGCBwQs4fsnjwERL2Y8xCBddVwFgJh1x9VwRwGAZ7aeeaXjwBqcy",
  "key24": "4EngsekYBgFVhZQ1j68JN9qG7sb9uqpxUurywVoAFPG18r5srDKYsaZqepPz8udpa8cuX5Kipqvfm4ysibCrKuCf",
  "key25": "2X4BJRgUNa6Nk3Rrtj3paBdXdedXMwfnqgiKj1tV4Rs9K3fvTDGdRrf6h89WgK5pf5j7r61EaxH3WocT4oWSJuSP",
  "key26": "5pUAaapwCoB2iuXoYkkhSt3LoWmxLa2gC2ceyZmEf9myehTpZrar2Muh9R4YmShdCYXpoHkmCB5Vmz4JTosm8nNC",
  "key27": "4EX3Rfc84NxFFQTwdV8WMbKdTZ9yEaB5k9PrnF2ne1hukrbLvK6Tk556SEpEDXyJokFwG2zom6VGD2TsiH8cBiwr",
  "key28": "nhFaPHxnhZdEWPMqhxzo2AFVHHh3CBeRve8zLTesRQpHZT8uSqr2G4ScpfdSJ3JVdYzyUF3QtDouZwqt231mfdA",
  "key29": "4JY4pYzUrgEqg7KcgiP4XPpBtg83zLnztbmFUuyYsMrZjYJUjmbxMeTHpxKyU8rQowxgm4WaZVzgYoXRxYYNVU1J",
  "key30": "4r6YXnck1hBcHSg6Pa2EsUZgESHvFpitHhHnYV5wqBgsMXW93bEP8cAjdgyp4X5E7udKws6VRvdXQ3Bd7VkuFSjv"
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
