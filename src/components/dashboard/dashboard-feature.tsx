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
    "2rareYtFzyvsYn1gqt9hcqx2xrAGkBwX99wZ8xa7NLM8buuV27p3kwQnJkTwFhajNudjftGBSUKturF4kh61vJ3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s4vR5MBveMJgFbqEMXYsPqVZHfMdh685SJnpzbF6RKhSYa8MpoRHSWuoJdeX5kRAqHvadetE1TATjiMTTbqhoJM",
  "key1": "2HMLQWrNT1fTpuWBduZvBi5t2ZvYbfNkjMcJApYbPE43QnxtUVa7zgbhjbQLfbpU76kdELniLARBwTAVavWpyFzq",
  "key2": "4ymKKoxGUbfRNyz7fpq8y6PcmKEnPbwejB82Nq2LQPPRqnMGEKuWN5jdLHbJvMbcYi1ezsSv4TgH78LV7M1nr7xe",
  "key3": "4TBByVLXreArNQJtNjRByudcuoN5cE3L2mfZLYR3JBUVTbRJce1xiq4gHidGu5ZidUF3dmi7ErGTyTHqYd31QScU",
  "key4": "2D4rrfVDXiJnxga3GXKAsanWmKcHzcCdEriVGbRNv2UEpkcPWmTRbd2MNyaGKgibx6bCoHTY9keUghjKXD2CY4v5",
  "key5": "5VMe6Pi1pFBsTnYUAWq8tQqWrpLioBLuzAdczJeDkr5U469zzpeTY8BphFA54WQrfNCMiKCkLCRnxzjSkn3pBUNo",
  "key6": "5A7uv6weLwFHDdVYkjmuswgEnUEDwXNyaU8t8wLYbPnDHVQky7ffmABGUvczuY2bpDU76bbB3nJcFESTRnwi6TBL",
  "key7": "dHEhrhRDgSzdNxWAGPjbhxPXrJFTpY4bUdJQDtrmQUQBYfVUpTzqSxzMGWobrxxyuSqxZXPjRK43XyfwnQKbhPi",
  "key8": "4G28ojzQD34YchPgmYQGB7Hu3ooJEDyPMEDzSbNkidLgrhx8yQhr345c7Rp3W6WRzhejms76Nj2u6LBqQ1CXmYyA",
  "key9": "RDgYemmijmaZcMMUQPZyXbGXQnP9Rc3ghUnsi5zTciyAiAYcz5jQMeWhGVJ25bdami3iWBtoGBYfPAXguzCH4gc",
  "key10": "dr1DBMbkbp1NsCUT8V3mtvBs5AkUqzzWVQGfPWeP6ia2WQbrTgJSwEk2Uo1MLEt6bZxzEzEQzoSqmjit8LyvDJy",
  "key11": "4LffUyfwsyHjwLNES6kSZD4uKaymvATfANtR2K3myhN2DSg36rdgNAg29SU6PnttWzmWaaRFF4BpSCh4DsDNgieC",
  "key12": "3AGustbWwz29yHJwUZ4JRJSafRMsJaz9x9WKQH4Zi6dxRpc4ddtLxuFY6r96a27dqZ1VqM1hAn8jaWQrkde7aYf8",
  "key13": "32wFhjHis9ZSbU3cHB24PFY3uLtJfr3rrzJ2jLrYjiwdqQPX5tJvNoMEobXNaLX6Qwxcn75Zax6ikw1mjPPFGchb",
  "key14": "3SXm4nLHaaexC1h2R17yHCeaCnq2xCoq4kifByaa9etRytqviZi4b2a3jvNynZE4whuqM3SQALuXZqaAEH7oUwsg",
  "key15": "PQeSztWCGXDL5zpSdoSF1bB27KrbQJrNGdpW925hM8DDepPdTkozPEr5xycmM4t3eLWpRLwjw7tmD8kX8AesHAj",
  "key16": "3Qjso9UUwYjmHVYRXvsJzwjaYD1VVnwVrSdtRVJ3kQxHU6MjtxdSVnQCXehDwcj9cQ1Qc5HA4bxUVaQ6koZnnwzP",
  "key17": "2p657RWW5fMLEyZgT3wB4HLpCptPJXF647SMKNpx3DfNNtrAt673rqLdPPqJLGi3697LBnLKfiv6iQ2whkTWp4fM",
  "key18": "5L12i4ZWcf38n41cDHDbx8L4zoMd5eTWRS3UF5i6NqUpjYaeDS7PfyF1BWR37rCXMsAzth4dNJigQa5szwSGez2k",
  "key19": "3DUSEAYyocWdKchQhugMxSGvPhdKuMBK6NQVt67HCAv8pmaGMU7628D6x9Yd2zGs2Wr5ne1fEZkfv5wrp8mxep7q",
  "key20": "38xMwdh3KCUZVVR23ogr54bF6hbedLNnVzy9hDWKTYFhNReyCt2x8RsVpSSvZHjYJj7ceGYYPqetvcTgeaBkfCdE",
  "key21": "i2aWgK1k2Bn2F2jmnoV1ZkxxxQDtuvva7YKru42AQ3xJtUVUT9Zzhm8Z22gPtaoVgq6HLNSKBDRML1TbHsZ92mG",
  "key22": "34Vh9MbKRhPDHSgkXpHLx88GzwwyWn1HEAVcPFA2BtCyRjVUc85g1mFEFQWBnyn6tzYforNsGEX28mQsV2RqJ2Ka",
  "key23": "4zx8psfmEZd3Mif9mFd9sncCudgeK8PoftmV4vSv5MYhEgQWf7Qdr9JZ3SwKcGr9PTqhKaewrmRhvfharyUd2BW8",
  "key24": "56A1y9xFAiEUZvGBDEPxeXCFzWLHPpa8CCePzvSWMbZYi811h4TLuvo4DsdoExpor9L3aVyJ5gKTELog2Y84VZZ6",
  "key25": "5ChW5LLUjDAvE9P2RKCBMSBaTFtu29BFnPQTRRWy1Gt5sKgWSKjDKGfYw9NzqaKndNuHoW2QHkJJKE3qKbSovHCh",
  "key26": "2TDcv2KVxPZ7WLuQWoVHkwxr8vboL4Cxu7jTK6hVgz7d2QKs5W7X4h64UkQshKpcxkbMN3xyyTYJJQjkGgg7ZmCA",
  "key27": "27PdUqC5GoZwXcdfv6rNYA9mdRD4tDK7XMrKni85Tn58G2q5hkibtBDqdSsaJpjjgySUGEN52cHHAu28hQdbQ6t9"
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
