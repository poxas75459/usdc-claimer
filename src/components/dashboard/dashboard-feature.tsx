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
    "RaLf2yVWWisGLdeHNKbGc8RZYCqyZZPP9x9TU4so3g6Ev6tS8pv2vNrx2U9digN5VCStSYUHU4GqTaJJ1Ypt8yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RB6gcxkHxF7JumW2LX4RxseSo9h91CEPZPkE2xoHt237WyPnBkFZuRjB1ayXd1oH4m47rPJ6t2HmbbKnphyLoWr",
  "key1": "3D8bmLKiQ7KX27NgXZKpTgzXkkupvgoNt5W6B9K4hao6bpDFCmdMo1wAV9RPL9hV3dK9KtAj6ChQMNQ4G3EXAjYp",
  "key2": "2Y6L9kEVNferjLbKAvJRBRK8XZYbvVHHtLw3SuuAFcEAdiGFJKkbeKiwckga8JaxCBAsZCnZDv1tCCPXQguXaevZ",
  "key3": "4wtRH45uahKSJADs3qNLL5QoFNXo3DWJeFfHcW5mNEyxn6CpDM83KZnpz5zYuUVFTcLJiQLkvbsu5nwucYoEBorS",
  "key4": "LwuKx9FAHyxEPCHPoFhHtBeddSAgVs9SZrmo2ppspiLTgNVXAS1yoUBcmj4tQ7zB6PfcBY7V13WftN3Vv3RCQJu",
  "key5": "3GZBV5TRDfw1qZHHQ5Lpe5HHnFWfkG5UK9wxLKPaDkWNtSGFtBwj93fpCTMPn6C6UvCVy2x3wBCb73Qs5QbV6Pq7",
  "key6": "4abE6Sq2VtUBQqUu3nsTFzi7uYwhDJmMS8ccqq3Frn4TJdS4hQXPg9PrBm3sUP46czeedvuLSf5ty75NSCno9R4e",
  "key7": "2taDNSiHmNZVMYNr9GHxLk9zqCVJMN86j3KNbawCiN3ZUi2hwNfDuxFhqhJwAaiDfAToNFDQFWSPCoTDJ6irooiE",
  "key8": "54Shf4ywj7WLdw3QTPRZUpZB3kdABoezWAQ1yh9nwEhCJfjwVNxNHS33s8krf8PHC6apRGXgKqPhDAxsGuKdo3p8",
  "key9": "4iyRLTqbsbJnvFEoyLZLJqGQBSJSomAFtPM77q3h2gQruWhynzCSJYVtyX5zAFezHNnbcHE4pMJz7mCMDU4sM58e",
  "key10": "pGjMZ6jyM87XTnE2inrnR3nrHp2HCT9JyQD3piqEuLepmThnGCSN8QRaTPY2jAmpeAoDSdteUJwNJqSaCEQ2RFA",
  "key11": "4M6v5wverVHwQLgRifGpbMdMHsRxTFrYou4pVJs67ZeRkdcm47oaBWhdmUW4oAa8mCU4qCewzrsdX959TbwD7pr9",
  "key12": "AgZbhASs7FTL2LNBBg14JXU273s71jvyHN8bPvFRQvYagi9ECy9xagEiCiJWtKxDEK6UU41zhZt9ADvSZD5TCFt",
  "key13": "3RMXZjgSLJv1boeP71JPubDZR7NDAkkjvML79dX13MY2MooEDWv5fwPCWkEjiXyZR2MkfDJSmAk8BjN1kJF4Mf6C",
  "key14": "3sSQyasuZBbNA3ePJqAaFWMLmJD3YCF5bpwm2Ku2eyc4xDhn6d6P3BR9kfq9X15fSandXdkcijeA8feRP1UKLc9s",
  "key15": "3eXncZ3er2NuFSLV5vxBnUyjLbRxV5vPZjxrhNrvgbjy2KqfFE1P4DoqSpKSTY2ofX5Q66NRnrJzLm5QTsV4e7VD",
  "key16": "v9AGPCM4mSYuVL95EEN2H4T6qP9PXBsqntsDhyGQnhWzzxM7DiZ946U3QawTCJfTmAvt9xetWGmsvNYYDQXXgGU",
  "key17": "2QnihaREJY2b4891QQ5mmqU99evreq13uUL3WWYRkc4GLLT6yKr7uycCsXHxMK5G7hey1BVGEGG1xenTZiPFKsW7",
  "key18": "3SkhLMoGjMtFV7by1kJeHFE6RPq3nzkPXnUggAVcy6rGZkn9J7UvxVYpWDNqPoCdzZPEeZ6yfvq666KYLaXHCBVc",
  "key19": "4qhTmZ8fWTm7GAne7SWKHJMAvhopnVu1TLBUx1qSYUBb4pzTBVXtFPWDYBP7XMKv8MVaeP6pvokdNAtmUdsYCjgJ",
  "key20": "4H3zHsoVn2y1Q8LR826M6DnbeL1WfyqQfvG4UUqNeadSv3n18g9fvksZv1zxdzYwwdMX74yRP7gHHkHPpNg4cXRr",
  "key21": "4jpmBo1hgFmn8J5KXhXopzEDdBYo3UPxDva5U7wtz8xV2TAA2XqjEdCJEsQ8B48ihbPqVJ13u9Sg8uCmNhybgbeu",
  "key22": "EXpt8saVcCUS74wDpQDRNBtJ4cLSrg7gDTNhfgDfAatbiyHaSxWpjqB33LYABZ4Vr7q8MJu2ZvrgxgJiVnfQhxz",
  "key23": "3iQV5CS8SaYFqKKmpuZhLRTB7iDmutTQcPwPP8H4kyKq5PZA4jqt7mhkp72LRdp4ieXMJLiTuJ4AAqBFenVGyb2k",
  "key24": "66GVVKZ6C7ijvVYBHx1HBeFpneLceWR7KVbhQeGySxQnNfiR1dMaegYtLzyfysBGc7SkSDcHLCAxQZjxa6YuJ9SV",
  "key25": "2WBHY4hgLSzNJXAs1sSS3Xu8vt83VDWCkdHKbvDNwKt6phuTLsSXNscGtiYky1pLr2wS1epkG42fwUxb2rjcdZAY",
  "key26": "2h6z6nuF1QaSmXtwwDzGGWcNLo4gRrHFXxofsehTXqWZDVnCPHg4PYiUg1rSnUCYjriKWaassJztmFd49zcHVTsN",
  "key27": "42k6Ak55NJaB9ERruxfkBDFyXGQcXPPXF7oqhoTxtpGeYrAiTcHQHDrdryu7w7HYfEn7yrqRJVum8HEv6Su25pec",
  "key28": "53rVdfzAuh4VBTfDxrrRxPEVLenuRTjdRdURG3fnbrGWc3aAhtuimABrDvDxusVX6xVB5mQU3G6y8jXHho7tK2bB",
  "key29": "5zAsbAdFK5kEgdGVZDapR93GKsAcRaks5mGFJpFwckW8AnDv3XR6fgkfPkuzYdnciMcLEremavQTd5YgWBQUGGYi",
  "key30": "3WzPq5xRb4KECUS4dSDnoGTJTrF53MLRTKeijobFf7XCf2XqQjXsAXVCZnTNDbCeF6SCebqjX9BJ2HBYqSPM28EE",
  "key31": "4SzsCDhCkr9YyLgpNc1rJPjvitVmpZHwHUfsDJygTQpJVhdC7KosWGY7yMmdXf8pKXP3xf9k86aai7KyDD4c6GRJ",
  "key32": "2BLraB5DnF4gCY2zPACUZmqPJAqPzYSsmgYwbmpwB8oH87mwWhxsEYeTyNTCktjU68nr95d3HaBPxaPQ2znucE1Y",
  "key33": "2h4Ns3YzVkqRFK4t3Q7pSFHdGqt3n5V55Cr9axLdp7r9PuxoDvjNq9hYiSQpruNQCG4ASvyeijQvGoktrdNhD6Be",
  "key34": "2L87Gf73raP3996FqnjAW67pEUyyEHP4KegLFZAhdXfJrb4TkTiPmb32mXHWnwT6nJEgmvxcKRMMmwsChMPBgJSp",
  "key35": "5pNjr2bFrajZUCFQGHCcCmaFGiJnDv9GQGFyZnfm4xQsztYXs4NZ4UY7THfk9rLp2ciNWKD3TY4Jq64K7D8fWyY3",
  "key36": "cfGY9icr5s6Dhq5EL5WZTEMmWfGPaDfDvi7KmCM2vu7YiRCLXab64vSVCsnSth1TeiZf57WFvWbcPQYJdxpqHac",
  "key37": "4W8KDteotUDzwxprj1c5M9KbeFUZtfm849Wg8YojmvJuNKvJDL4rer6HkYtBaWEKUVP2AWhReECYFgzCaZWMbaDW",
  "key38": "3kBUaxSxGvrVvEQ8cZQZJpWTTTZWTmRkdTgCnPx7MgEPqYgf9AJgrEPJVTpATdV3AQMezdraBnM7Cmc4P28PFyjX"
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
