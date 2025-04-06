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
    "2ihtCEMFBa3hUx95Ag8uyTw27C47LfAiihiLgohtTPgjzP1bVmgWwhEA1G6c3jRtJBgvV4zG1ytTuCP8ares34AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WqC8W6j6TqpDeSFDxi21P9THVeb3hJwVwvX94yJNFTBWRKNhFtsfPrhxwJryVKXydoZtpsKbqp3zQ1ATNdHNow",
  "key1": "2Fzj2t4gKRM9VuDQYvYLf8uEPhaTe5x3PEoRJqZSxDmFhWXEMCaERBTpbzFLsASvBL9sb1TCEqsusNjyrzq5BSZy",
  "key2": "phirqTYQfQbtZvybwZWLHGLN3P2fL5BK3wpumDHZPjed4Xni21xTQAfjDGye4qW3rarxCVrGpUKhH9UYxmTSrhn",
  "key3": "2QScq6AMcjMYKoBaERBBukUivXZRpKQe69nxjbqoDqDjBP81vVR4SxbQvbET4UXeEx3zwFd8qkwBsTWoM9rxKDMC",
  "key4": "4tQZeuQCsFkTDngSvfRgfPkVfbd8Ru8FzfNbvYgch3YbPss5CtQPpLT94HasoNHYgbfqRWVjqxKAsdqHWwUzSDQ4",
  "key5": "3XLqW7oDiVjQv3E8pc6MLWDkLNwnnyWf8tHdRMoZgtRDx95VKgQfHjcoQVXBB8ad3y46Rz9bsSG85y56TDsvcmyT",
  "key6": "X6BTi7yqL4pcKnxVYteF16VETmGRHWUyG3twZs1k2nhUbg7EjifRtWQ91VecTGt7dawZWrierE7PJYgq1s6ii1y",
  "key7": "4VPpWEtbBisUDgvBB5N9kxCGBHgVKXVHYBWLMxrcugu2Q5ASDrg6rvfTxYgQQwTWv9Ztngb4SLKeVCG9X8RV2Rz7",
  "key8": "225iyVUQujbzzpZwknz8VCQvgBFhSssuFTnqoDVWHx4CfjsjKW69oaU7zamNQFknDsSzSthTtXu8eNsbiEuKqWEN",
  "key9": "sSAFj6t3EUQkXpdyzoumZKRi6CdXcmx6NDh8CMguhRjxQk3m19krayFo4VR8KjFsZLZBCJu5Qvb2LRdtfVy9GbS",
  "key10": "2eXfozgUgpBWv1qaHEc7mHnhDxD35RSNQUCR5SSSftziGKBE3TUqv82WhYxFx3X29fsFBw9x5cTEsveaGxRiSPvM",
  "key11": "7p8pCe2c2zAdNDsjTTy6PQnYbmZS8ZrhUTCbuLtA4NRvwgbiE5gYtrv6y9zaemshXJTd7FTL9H3AVhLNENdbmjd",
  "key12": "4aJRzrh4LPCBUVcUE78EZALAJx7zggoiubjMqreutuacpk1Ann71emNX8hKHwG772yqrqQMUngdBHW9vWJEmrKqc",
  "key13": "5gHhRthirEpgCiYTEhqPWseSV16b2BqUyB96xcmhKeuRypzzncXmC8SWfZPXQBsrvvWRC8JK9rKZcGY9HovNCBiW",
  "key14": "8soxJpFrhqpS3GutZhAse36gLd6iqs3VbuKW5DzTxkoRBrTLEiyzp4G6YFf8xuGV2dMwkdiUYUb71FvewzEWRux",
  "key15": "3DGm5D3GfBzNf7SMdV6buoCz2i12JVDTReb1kYyAPSwhXFMPv8fDgAK5FpkdDuV8rPcPbuw89t36W4GZapy9V1zp",
  "key16": "4THxsqUnNtNun7NnvRceD4E9jhxGKnVGUDqbJFRRmp4jCixQWouH4TuHsC6QGRDi6sZZKSEv6vQxRYRV94i1JKw4",
  "key17": "4JvzvKa87wNvZYVQkDB6Ph2jEvwxjFAJTRNNpXgrp9Fqxfc145icrcvmeepqAszJasGJTYfrosvXqv7vdQ2y5Pya",
  "key18": "5JseSEUi9onnxDvwCiXVBXi42Jq2czGUntJBzJz5NAS7uK2sQkGnE84qjS7BQkK1DTYshmLW84WibVaQ974PTVN4",
  "key19": "5mnWdJjpxZ1ESePFAFPcZKFKYano2GkW13YRSVRHnuagrGgNLpbUQhRNTcfsXRcAh11ERGfq4r9QidKpuFi8MRhu",
  "key20": "41qQG5gAYCxjrgxw32dV9NR7LhdZTuxmVME9RSvAXybJTscGQYKz3eAuFJC8e6Sqza5vvz91tbHtmhVm28sDd3ie",
  "key21": "3Pv8d8AxLFM1efuPK9V2qpzBSA7MLGUNDhUDRA6wgJgdN8A6zxpSvng3ABPCdKFPbriE4KWAGjwrUWKtNn3gG3DP",
  "key22": "3qVdYgYUdAWoAbNzhGnaWzkyb3jQKfn3LYQ2dejg4ZUuLN45ZsRFfeCbzkLudUZnJqmCDHPVj9Ubc4WHHUWRJ8MK",
  "key23": "eZHD6m3UJN8t2Wih7dnviSDyG2KcRDSUAEYDsQpJ9PDX2LHfBWgcDAuFKymUZ9VfRSPrrH2HAV7KRGxAZkDx8Zv",
  "key24": "2hpSbY52A8rBuJsuujBMojc4E9rksoeDjpbHCtXDjMfamcjhQw9h3uor6H6wqwwEkPwCojUEx2A5NV51ovjb6aeE",
  "key25": "rVHYSvzgEpjofEeFjm6H5LhzughaiSqKTH85LhccZas1c4DTAhvZoxaq7HEo5zECbgnX9g6gaSzx5s4xWaQC4TF",
  "key26": "9NZyNmZQhNgyxo6Qz13z53iREjWXrpwmSQPhJU6CAeMFwUU96dHVr76FKiDfeSDMHnfxZs2UChm9JrJLS57vE6i",
  "key27": "2YATVEvFT6Ga5osZxx3vcEPNTPbvsmtt4BU9Mmo9Da46yroqdJn3VreiCHNABRQaoPe72bH7hLMBBwMyYkKaB7aW",
  "key28": "3Lrm5Xwwbzz7Gvyjqt6yfZuSmgDnfot7cmJrTJ4HY11gTEX7beEx1Uxy5HvfVGjXmoM45xobfY1wA3XaAYod4Dkd",
  "key29": "hfTojRdzcSJQLvSqJWtasNbkCGXgXbRupb3Xt5ZgitTMcbQbPHZKjQZ6RNhFs3FF15AsAyB9qWRJLZNe7enkhci",
  "key30": "5niqnmhM8SA5AGRBVVLFnK1dj2PGr2eyWB9rSG9LofeTX9Ad2fNdysixXEJdCEpz2LDAttsAw8HVCUYJL25e3Mit",
  "key31": "5AKLjbRN1mm1X7hX7HqcX3e2zm45wPCwU3sFZ7ADDc9BNWG4f3KUfaDGAYF29Bzor81bxr3YeTu3CkkfEnPof5tK"
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
