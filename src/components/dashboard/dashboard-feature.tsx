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
    "3VKH9eX7R5ABnU2wcQPfT4ZDSJJ2z3cs6A4qQY1ZbuhiewGycY5CSJamkUvym8kkKvTspbyoQRxEz8CR4Z3QKU4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gA1qjU9xGEXWMEjAqNNvmzcmgsdXN1LfoNiaJWC8x9SSPcBT8bdragyArG9Jw6Fkb812r5JUFffLCyn6TWWPbfg",
  "key1": "46wzpHfADVdaR7ZVAjbubPfpFSFfFWjJAbvrJAmkQUPRgAQnXE8pMNWEDtnd3rfyv2d9MtSp3f2PLBhCXFz1WkEA",
  "key2": "4A51HHg6TJ6ek8ToEYSr55rRbYEbNsUw311fA5mB1WWmPquTgqizEoudzgtZnYtgRSd8WaEN5hMUh1aJFKeBpMZB",
  "key3": "4BU55MasUffeAfcq583Rw2J6j6QxMeoVDYtbvBY1uGc2JsMXu9A3YimYC2cKA8HiLPnYDt8UcpKNT4D9oPUw6meY",
  "key4": "GCdX2pUshw6wLrVZvomRhWLXEV28BePs18E9YVYfquF5VFkrpHntm9ioFSDUH7D8tBhYa2Xm4NkAbRgeEc9jDSG",
  "key5": "4rp1Cdbx2XmEV9tQ4NZ5hYV4MnpBWXg46V5fvMpcYpUYXD44VocoZHpcnyPUNWQsh95zTgEoakALS3s5pd9DHuAF",
  "key6": "5tNetgXyeFvsZczUprLmiavdYJ9QmQH4wWuMXE8gzEYiNuJ6tqFYjDXignTqDXUYV9tT2E5ni3ihgxBHvJHuzDzj",
  "key7": "5PoAoJf7xE5JMhPNirEvXrWMREnNYvv4NvgiANwgn4r2KgyjvHatCFCDoiafs95Cvy6BTM7vRnJ8bmRA2x72SRgw",
  "key8": "2MreF5HZsoZR4NNziQemUyoBxrqoYpSAuc1KNtGW9dZzD7hDR7qTpgFMFTiGW1oUpmsV8gq1tSEJK366HyBx6ALy",
  "key9": "5z7NCfKRFhNVMrEftpyJrDkPNnAGAk3uBZd9NQCtnLbqVTCUGPZCC4mGcdAU49QwNBvBZX6tBigoPPSxTLfW1oBD",
  "key10": "7Q8Swhkbe5akMV6dqtFiqMxghqu8CNRRg77wCRoCRN5oAmfvsQSHVY9ppjgUKKd6PjGnG7PwsUYk2Wr523EDPZV",
  "key11": "4u17SZuScvsrSsDJJukmYYL54BHi2pdSeHbBKm4m1DqiKYotzkJFjJn6RmocJQjsBvmXCd1iJnPSJsK5xDgWYnSN",
  "key12": "2kgN75VbU9ZrZrLtSSt4VghKdCVBFcVzmWtRL8mkqv9x1aa6xRAGdT1Z3qtwajyqUpFyTFUa7zHhYh6DnCjuBV5f",
  "key13": "zuktZ6wXAbkMJWgnt5k6xrZternsGWytC4LHbwPi3XZE4eRHW9UCUuvro5aSkscMNimMJQVekGSX2dJrYHHGcoM",
  "key14": "4bATDhKwZbrwT9u2cgCUndfc7c5W6U2MgzVzYJWmkYYsVVH15KKHpFC5tTf3ykvGRFTBtCVB2ZjY1S6FSg43WaJA",
  "key15": "3dLLRdhz5x1V4B6z8EgYmYG5xYvVf2uXo5FNkjkDnxrC7MBRdx93TRwH8UPDinKZSh2J34DwYC2Waqdm33fHb9Hv",
  "key16": "2F7sYQaDoaat6PrzrqzjHp8k59H5A7M6DWEAHuy4KHf67DFkypsj8VPg4GvmTLNmo1trXbu6wupCQmGvathou9hi",
  "key17": "2dhU8NQLkNL16nWwUv9FfgzrZ4WcYXy1G89badhSLftYUZcFktEtajmTsA9wA7mMuGUg8FirhrBVm3bpRWpgQ61H",
  "key18": "2oPdmDHdxRaGDedLZVZcCpDY3gJozTvmvhyQWLS72bxjhw8KjFVF1FLUnpG1aK7XHcfKxDxvS17c8t49Mpw785eN",
  "key19": "37E7jbTqxEVCvqqSufKrehEHhAwn2xjoZX32CmNw7ccUnN2rYwVKYWhjm8FnFckbGrjyUR96akPmXn8Fbf5WcS2r",
  "key20": "45bScPeobYmVxXhS5RR2c7NxZGceEVm3kZ9W5MkhhdwBGBzw8zhEUVTC3msBg6VSrbjvZcm6XhHWBtzEYEQwYGCh",
  "key21": "SsGHCCtjAzNNrNn7YPwBUVUgJ1tCJ1vC8LzNxsqmHNHJBZuRY21kmgzVTeR3WZLramweBiM8XvQZrcdbWmWr4tQ",
  "key22": "63irBh1n95bk1YhLmgPQSrpYuoYwvw5st1pBio7mrmofFFSGtmXjjtcqiNe9Y1pUVQibLzMhYUzeuF6GosuMPxKD",
  "key23": "21YDGLqDjXYFS1CsMtJAqRVXuV4RQWySGhnn9yqwNS2Vrqx2bocyW74nYyv3SmYNmscXPVYhguuC7M5qdGjdG6E9",
  "key24": "2PYAmT6Tctv2LysciguiQ63PM1SHRrkrqiDwHui1saazpe1ymXXhYi2wqgnT5sFs8JUDUxLvUCw8N2MCeoQN768b",
  "key25": "2imJxT5Wai4z3L6HoCivSyXQh8EXWL7jFNBJzYd3YCK43eH2KCrtbjv5ofAouFc1yLPrYEhAwo1TTTFBEFmMCfyT",
  "key26": "3oMnBX8poG9VfW3UQGGVh6jGenLzXktXFjuZkAziGycyddcF2mKj2Mfege7ZYSFryFCVMhgAgmCijJFNQCLe3Ajg",
  "key27": "4d1FqcVwYJ9Lc21FaMnkKFCHEmKsrzUWLoYWsyUshq96M7Zt6ChfVYNHfhwZsxkjyjjvii5TegXM7MFiv8ge6Gui",
  "key28": "4gxPwaCYMAMu8T2FxqbWuztbPVT5h35SR1xuhTi9DRF8rXUKnMqW1TkSubnCiXNiVwp8ZBNTJ7E7gkvPXTQBzzmv",
  "key29": "fsizEg9ry5nEgDPk26dxyNMoQRYX7hVyHA4AG42QxzzQsHP51h4tzQsUUFPcYZC6m6dQYsU5rDxHtv8Km2nQxYh",
  "key30": "2VP385XB1UkUVWA76FfwwL9TCxMBXuXsicpMe7cYnJBhymtf2pLxyJsR4eZ7AhCxRrJufFZofiQ68o6mVbXPoopZ",
  "key31": "2QiMFc4xmW3pdouPLgFDAR4g9SWqdu4vcdecWVLZEPokJYtv69UbhcGgRBa5gVbWpgsWAcxJJwc9ruwn4bfCqc5Q",
  "key32": "jCPn1dZPJAaPzPyMnT1JLxuBg16UfdzZd2sifythBM1aUVad5ARzTguvSwwKP6G2oRJAyHUqBGLbBshJoucottQ",
  "key33": "4mCnhHTvroArFr5T3YaJK6aHcxGKf45qfsupmd6NyvhBCq6WDHjLuki2gGLYYizgAeRtkc2z8FDohmWn7JnbFPNL",
  "key34": "5pdP5pnbpKn2fBuWpqHdTT8hiTWaK6MBSe2JgVApUC6QJqKN1p2vn5RANAiRnHKHHYeD6cpeUtkxfFyMmgyREAs4",
  "key35": "27i1tmoyAYocSxhw9djYaQbfetyGqY2353nF7z4py729X4gw1JAvQNTnsCpfmx2RSNsXczETRJWG8fWPpqZ1DZe7",
  "key36": "622WQUCbkm7JQtnSg8icEtvaMYFnTJaMxahvXwymt6NC48MQaJnKnmoBuy22LdGWZope9YQQNymfqht8DiD2gERr",
  "key37": "YqU2N6dDBPwdsfzQRugQd1nVrMZ1G1TgUCnH23qBLkk6jdboDQjHUCmQaJe7Hf1Vmz1ho3NJV7iyWQnApytuoZ5",
  "key38": "3RVJeWPo7GXCMvtKU9idCt6Wv4WRSXPGfRPr3ZkxjrHaZjTsmKnZNfwGamqkoUKKSCBfKvunerGvhdXETMt9gsYn",
  "key39": "38LCscivZ92xQjfb6z6SWZBNbv4HpxazGrWnVtmhcCfezvu5R49y9RiGB6XP8Ukq4r4Se4WwRVGd3CyKfx7aAnpB",
  "key40": "2AiJ9iZfyiQKt12z3zd5sk8WYaAqdfhKhmb8F1en8hnpFYv6ub4WHR7yETXVRmN6a6hAjJKz6o6Gx1WRhMmJGnUV"
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
