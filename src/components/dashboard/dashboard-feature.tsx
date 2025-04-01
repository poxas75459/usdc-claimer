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
    "4NaMhuezcaMC1W9tNEj8ew2tiMcvEEsJ4pXMsmdB1j1q4SJxo1JsATHqjBCT6w51ZhYD2LufqSeEjakM7pbecJ9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVJkE5Uq3knA1Y43StJogQhNGfdLqRCzmzToViALtvEhZzeC6PCRAeE8XrgtGJeZ2YSD8YQfmauCWF9zgUvpAsY",
  "key1": "NXcie9DAaudrztV26kLMLGQX8ggBAikjJ1p8MNvYNxTENMbDc6YmSsCGD6sUhuB5xncSuB5hvSgt5iyQMnBFdZm",
  "key2": "3rnhVapoXBnp5A6K6FsiexogRPSk2HUbXUmKpHv6X2dS4DgT6957dkAvTT2fUh2izUTzLohiQHArS1zCGciHwy56",
  "key3": "5CJG69NPyZ5LvB7h8Vn5sSdWA1WVgZB8tENkY5pEf4H5LwjsW9ChioFYp2oCZ4tMchDh4iTA7wUkYRvfAQLaPieX",
  "key4": "4Ap698cNYukNxcFT7GKTSNXBZVs99GHU8JZf8WFoVUh4Z7dHSzbn2a3AbDceLvEGqpiG4JFD4ZEMPWKWEhPH6dif",
  "key5": "2QMHvsuuS4R7PgVVL5YQ4nAsHtj3NfjDCZQQCudhAE8sBqny2QLPsXoM2Yv1TcmKzAB1DBtZu6jY69EBHLcxXiNU",
  "key6": "RsRLQu6Mgy74jBt3PFCfMqKFSWFCkZF5pXCwcMcJo9Mtqhrmpm1HzX2zL8xKx93B7GPwMUyo8jq3DYrd9tV5weK",
  "key7": "4agmebcvsc4zAtfGbtpjH7gnTv6rJdU6AUxWtE7ZLrJhMJATiwxNt9ekVCULWes2t2p8CKg2F7XgRk926ygUZSSE",
  "key8": "3Jbv2CaRVSVgRFRdomqNs3VisdHfF1zvBVuUBnXt2uGUy5NrH4DG1gQ8Njvpb436LxSp1srF3yhASjSWBr52zDrv",
  "key9": "4XpnBKtYKu8ToXqCEJcQ5CzR9gXAqj4e3R4zqRW63f27ssE2pV7npXnfKuXbaQHnjvHG4VK4PjHhGBgRVghQzDY4",
  "key10": "2jJrS1AXWjRbH3GoG7VrMqUU4v5Rfe8zRwkTGEmDbi9TPxsdgQCkCn1Wg5EoZxBwAdBZjQeiNX2ZRX52sZRKWejN",
  "key11": "5qbpsfAJ3914wbyavPL8uQQWqdLhpuME6TNBd7DTXCn9iULGY7Z5ZFZynnqk3CnBo4rgpzcYPhRT6XconqAFmdq8",
  "key12": "66Z8P2MATP7pvM1GwBuTwh2y93eFXiXcKpF5EcQ6Jx1sdorKuD9Do5n56XtGwUCStR7E4UcQnTNVG7Ro26ZMpxgh",
  "key13": "rayPvpHbamefGThJbyA7zAf7yUqXMtYnA7Hbsfa2a7pkCQKm5KxX78hXXENhaJhpTn7ymyY8tagxwXNH2bzgv1C",
  "key14": "3w4pkVmRtPi68MyaCNwkoPPj3AbEFxRoRXnrFXthvGhg4WMyPiijy3Yd8tqFUvpFPXL6gP22YtrD7xhLDLF3SoFp",
  "key15": "4kJjYeAt1dtJc3iBPXhb5e5bu3q8GebnEcpwYUmHDhF5oRa2UjJhkNCh9hiG2wtLqB9VeabuUJvkFa7TEjuRQWHy",
  "key16": "62zXLrLZ6aw4mMJKgask1fQyKZdWEFogC9FLUhou6K557B1md31xmgyt7kXyJGtPyPmZGhrZeqwChY7G1dYGXSDw",
  "key17": "zVDvKWnqihzYcXjco6NEU7fxWFJjQ3WKSrJa1wYKZapK3AtL3uRGuuXYkD9cF2HkH51iVwZwQ7D7rMcRXXTRVp6",
  "key18": "24Wzg5ZvRtEvHGdSXHhKai3Ap2DjDJnH725tvQ24K6TaaR5AK4K8LGGZQ68wf4RHb3bXifQkyPqT1SA1pZ3rAMnP",
  "key19": "46bSBRqY9MjkWjxPYec4qhoMHBXpmP4zCi6kDUNpJcA15wqQ3ghDEByF6EYm53K3Gk2RnHND1nEwD8r9J16pw2Vv",
  "key20": "VjetBNCWsKX7rMGqy83HqrMbDd9tvwdFFCwDcJF8yW87Gf4FSj89u27i1QD5gdLq5NJaxRnDfUVGhc7WsBiZEQL",
  "key21": "45G4TAPVJAW9wVYn9a7SCfMF63QgDnNFN33AUWJZmxtCoDui7ivKex99nXRbBM8jrVRN4y7jPuWYFcfSLRm3QzqB",
  "key22": "51jJm3eV6cUaqcMemmwWSYhy2A27RDHvM1g6KU5HP7CaeGjtKJfC2Qo2vxMcGszjX54x9nm8dHa7Vm5HFfzZzPqv",
  "key23": "3WxMHtcv3qE3tZ9zx793PJrwQ6iimaY3hvqezprjVAU5b9oQoYMc8GrAcfHto6ujhVd64mWawL1yrbAeZkjmadRv",
  "key24": "2mn29MRfzsoy1t7nibSGnVDXvvmRJVejLinXxsRNoFYSSmQzn9t4MKri8dDmYHMsJPYZBce1bTzJReB9hr5CN6HW",
  "key25": "3aHfVxvtzaEZBzCJ5U1xXyDb2eGBbMtq6v33Z5JrhWEUzi1h3JoDafvv82hxstxk1KKt4cX6ttFJNR3dRxyN36Kv",
  "key26": "2B5i6L8kPbUm7eTnYim7wf6mJEvtHxLH7gN8a4Nwc73bRmPLnMGFama87sbyDDwCYBfv6H4bDKH9zmzeNA8p3hhz",
  "key27": "3ZW1VKF7mLLxunBsVYMQeFiEjWuDRk2ykuCwBcP4Z3hSK32MuuV3YU6rfWiJLDbXqseMXyepG8B1W1Dmg3JXryWS",
  "key28": "29zoccsXKWHhh1RVYsNteZzzsguRGqibnZpLxFk2vPpNQau1f5ogBFJvMZ3C5yegx5HTp6AvqXuZMLMaqbUSwzyr",
  "key29": "4AUgw36eJNRMKhR3yG9JDDVLptoi3k4kaF9QzSFWxVFxMqyt5Ja1TNT34hCHMDyA8dMgRJ4jmsfw2zbXZ9VP1PX4",
  "key30": "3KmipDJ2DjcHKWDnibCXuNuz9CnVCiNbAmsCywNcyEiPgErcCMJ4QfvAyQ6LNRLvD17etGUpknHr2kMqFb6rEzCs",
  "key31": "4fEMSdaSySeqbwwDDorpze1bh1QtKCR7pYHVC9j6Br7sFVaf9E3ibsNAKE8DNw49aZKH2EzG9tFJe47Q5TtEKchn",
  "key32": "58HG27L81mG2K8eJficCwcS4HCMVHbSBh1PeApT4yPqtfKQDwyHege21vx5ZfFkxSPJbutG6nNJXBR5A9E9kt2od",
  "key33": "4PEt5n3o8ysQF73FVFqX94gWBsgSzPFXNpcX2QcT2XUENyvmn2KFXKescr8eEdKhFueW3pcsEUAqMNp56hfTM1fS",
  "key34": "WUztbAux4usyV8QoNT2vULyyPwbxwVUb3fGU8bCpkwXSxCox8ArzLZbHcWENLGANdtBsc4v43nmdqXtMxu67nJd",
  "key35": "2iU47qwS92Dh3DtA8baa2LRwxFcCBToYdxNEn36JXPYMQCvLNJEL1cA2HDZT8ygVyXcGqphkcJbbZ7TT3YPv1oKY",
  "key36": "4gCVXXjyVawrfNgkRjc7rvbWA1qDw7EqPKbSAjqRZPEwGeLkfpN5AADH3pMdGk9jfARtyQtoE4X8HmjLXK6FQ42a",
  "key37": "3eaTbfBst3BZd3QQeAqykCPj241wkdBCJwFQ2vSr6Mc6MYGmE9xWjtNrWDX9EM1eL7RGX44yVYrhXPF2xuZDEkBD",
  "key38": "2ivk44WiB31qUH61zvPTaUp1CEFbj2uLK3JsZK8FZEX7L1uWqQGHNCP6Tu2TnjpHCbmseAdgxHNcPTHSQ7T65n7e",
  "key39": "2HsyGtkvNtjLJisw2Uc9Rv4cKFPH3nN7p8Z5kot5ZYDrKZJjwcdUwgmf9rS29mGzpiNaSiFWNUJ9WyVv2ZGrdFK8"
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
