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
    "5wENE65KumeRDMCVnNKPZ9xfPDpVbXa9AYCL9dUk8z3yNcanMa6CDmm8MtcgR6xqDZFicS6TWyrzAQibtkUqqmir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTRytWHztvN1aoJKon3cCmwMBAGEATqZGTSU4drv4LePAHPFNdkqMjRBtS5ByCi5gF2ZphWYkPFn5ms2pRifFgX",
  "key1": "4uSyLhacx49vnExgUVxvJVkiz7j2AtWCMUWMMvTRhkqJC3eFzvz5NqD3PSbi2c94uddTV3LV1NjaRpvitnRowssY",
  "key2": "5Z231vGdD7jpz2KoPAXpfyqrwKeR5k5eDyqQnFsPpSoZTR7NBbcxtAjtqkav5DwFDziTg2akJ7TH8iGfJxLVcNKt",
  "key3": "T7rABnVmt116merWvDbKASpc2YcMjJgnXKcS3i1QGrqVwxVZqXGjPNoDEUfp2b1A3nt7G8qLTtvLE3FP5K8bf2t",
  "key4": "zfyABrHpy89FKmxNGjtWyth7phyvfsuJFzBWNv7FJPNZNweV4fb61tUKBAH2sK6XAmAwxGpy5boMQZaUpezmcLa",
  "key5": "47gN45FEpWVanPwotYVLwfGJVrev49YNAJjHjZu3FkPzDSDyKc5aJGihXnnFJ5D3HR5N4YgtGjnLXqAViku1NzoM",
  "key6": "gs51UcwrHpRMzN9rngPPxz79eE7Dadj8iQmPEgMD2iEZbHaE57HqeKxGEhTnb7jbSjcL2TsYsu9AkCGGAziEKt7",
  "key7": "UB24xD2ZzvbQZTn2mbpSR7Q9e4rVCpQ5KFSjWMPVZQrjE44TcdJbEJnm8JVbjbj5qodus9bQMtUV6BGdW78Yusa",
  "key8": "3KcTBGafyqSSBUSU6AZBGu9S5EDDcyDjcVhTVkaL7MQYasTnZ3ciwqVpXRnkvZpL3W8ZwRYibHtB1gehQ1CXLA6P",
  "key9": "3UZqqWRrZYWfgSx8zZWaoCFH5jfVty9FNBGSe2gm5fnFA1iVDPZ3mZWtdhdgekT7iNPdodDMPvLC71x5MboNfayb",
  "key10": "38qnYFsvok7wDxRzkfv4RXVjYSwRWwF8wRRgzvL5zCFQq6yLBFNupCZcrUPUTFRMxs8E8V7PoHm23jytFb5u5P7J",
  "key11": "2QLLCZTkm2TmrB9VpVcmhc6SnSyxbAQdMiDEqqrHUzkXVKcgELtu8Dnn1Aa5qJ31yUdzNTgfjZmWniLDpRgpgYGf",
  "key12": "2jM3GKM1UGypp334qAupGe8UwjLdRCHhwi894eD8GkkG9P9K5xqNvtfrBS1GRJxikEVQfKEvMWQ9aPrE7RBfbUiH",
  "key13": "5kHiAdNiAr49ihbkYSA9fpWES3S61ojTD4cgE6Xc5CckHApMgzYFX8ru7QHcLKYy3NU16uJQBayMnTjH2u2y8XpL",
  "key14": "SaBiH7njj7rSYxGjyCudZoBgJoomtvgdfi3r83tJ8uxXTrzVJ8aVJh1vf7TQTPi52N9WeUaJNzFRje1Yrucqrc6",
  "key15": "32K2bd8DKR7PuaM4jh27u2JLMhWpjaTP5pcYD86WYxHKk7JL3XbbEi4aLJAzFvPgwu7VX1mvZyCW4EHBq1q79wx1",
  "key16": "5MTY1G5toDkWfNw2QjaBwpMVEBAUc7uGvoxT4pStThpJYtjWc4aUuK3n5VUeN5BSeFeeef3Vkgn1UH3eJf8TARYC",
  "key17": "2y1i848JRdkbyXetRQX4ZFPNukEcTNVpFcXvd7FPxvKSQwNF5eEcXSQ2ydhcfANZd8A85gdQyboL9c1dxMaJFPih",
  "key18": "RKddvJAdkCheiYqaRdQNiVNYz5ZZnXVyzmU8BTfYXfhaoTGW7inYnWdzFGqRv5yqnzRhqCFh2v2DmgsRXtndCS9",
  "key19": "5YFjbP2VYWzp13RGSjo1pWy13vZAWmqwf5YDyc3gG1NePY1xq5W1oMeZYj753ar4UNmUSC4JZMuB6CgzhNKe14fo",
  "key20": "4NW2swsLJPjXH9wp7qNVQuz5kdQPPu6PVyZeoCEixeVZYskdRWk2f5iqwa7FHzhMRPYjSfZbMrtsjKEEUDHErcdw",
  "key21": "xJt6ztH8wt1LpXtYLN3JuGfxAQqSqWvXA27AsMadLWMrpWW1ENhm9PpQkDLCBKMgh9REstNHs4QVuj13z3PmVrh",
  "key22": "5ZZv5kAtB2JTuUR4AewXA4cjYRSp4PFA5ubBKwEbZaMTEa6p3gwvp8gpHPNiH1am7KbzAn5Kxsm8yJcBnt6sF1wg",
  "key23": "pQhAqZK9hYdfhya5M6KrVZHrYwGznwMFw6GCLPGKbVz3jzid8JomyzoA7MjEu4sgbi3yXEkvbSBphLUBf8nYj9h",
  "key24": "5UYzmR7xKXyt4YhCSY9x7AzjcSRRppws1F52DtC3BMUHGYm3Hsx6PS9XpNcZMXvkt8a4wTy92zRW8tQ1mWhJLL7r",
  "key25": "k6n5ihJa1aN96kXCgodVCyHmrNsJbaQ5xmXxBrfsr6SLpByfWLkMDbknps68fweh5wCuiK7tG3teztNgwFqv8JU",
  "key26": "441L1NC1EM9Kuv8GJG7oVpkaLomgVq1T4DcfaLWFA6Qzs3sadkYv5RgZWayLsjNUPPr8bZbMoqCBFZiUPvScC5KS"
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
