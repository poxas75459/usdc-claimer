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
    "qpFpA6mCPVgsF3yHGkihBuiUvKyBqkjuU5UZKS1mkuGZbAKsq2tJo6vmv4ityaY2qpyic1NjbW5NMTZypeDgwA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ue3HstQF7BmB2P98ZDfpGc5js6Yhi5hGnsCmQf1sL2upXCMNRU4fqiChfxR2bh4SzgRJFkNcbTCPuykAkGZQ7hH",
  "key1": "4PFcye5mSUAEx7Zvg8p5uk1AQy4eTSzpv7XCEXVP69Ssxa3sxLQ7SvuVDnKQ9gCaXEx1M8Zh2tk1qJB5msYRAvoU",
  "key2": "67b4RGHmozDyrXiJkFugTvo6S2rph5CqgwKKzanCR1Y7tL6CQ7Xt1Zs3Np7CJf699gJxw7gsnxnrw1PrfS3gtvT6",
  "key3": "5k8Poa7vVuBnLe5HeFqXtSz6ksMgUv2TaVrVeHff1DeFhHheeneb7aqNuR1LpE6eYDmfm1V2y9NF7wcjcVcQXGoy",
  "key4": "218bbWtyDMkkwTd4eHGKns6VUcVEcBXTt9ciMfYU8mU1oTPK5pkkxEZBrSwSzmsnkKRVa8zb5R13SzKVmXEEZW62",
  "key5": "qeZ6HJej1Yta2tGRqezogKgPKH5qBwSEncsm8w24ntLm5jJpNTgeAmUfn492vk3y7FAPaQBnDAySb8by42xAbkc",
  "key6": "5NgGH9vpCTj19ibVe48XyLLWGyPEzK4KGGw4k6d9v89a9wNSWfY439jveabYnAAVL5FEsc5TZVLYsHZ3iif1tNCD",
  "key7": "4MBmtuYmCmdP8zHXzLKAf1Eq9sqCiTSw3sTnosE2Q4EBv5Buh6A8yJrrwiTdZ2czVFFNz3UeFEnb8wuJSsfWt5xp",
  "key8": "6ytdwq3NrJDwpuMwve8aiajBjcW4oqLLNVVe2NHAiDVtV9s4BFN8vQL4sF5rD3GN2XunKurvgaLdZGvPKRmFTbJ",
  "key9": "5DxAe1CfnLs77FaDWSWX5qESPPwdr7sB8iZw7BkGtBb7neKKrmk576oWbaChLGqV5eq29HF7NHJnQ6KdGn3Sj5M8",
  "key10": "45iety39snBHp9c9LrfJgk5ZwXYWr4pPjvdFWuQ4Cx3vFipJX5Ztm9htd8SLyYdGC1D25s7p4ZsmkVWCpeZiqvUF",
  "key11": "2KRRKu6auA7a64NKe5mix1fyoZyw2YnDdhPwwnC2bjeCMQuWs4dGhRkZFaqJ4mv9nYdZjhL9srAuTQkU7J9NmCrH",
  "key12": "qQKEVJdEgmmDhWru7CpkWMoCFRNdoT8FFLfXFQkgY4tDWBh8YFTPq3xJ9gvPmV28cAo7aZRzNnmKemo1dX4S9cv",
  "key13": "4APW9cYyrxvKER5b8hbvRu3coPkNuoDZ2c5iqXnCR7qjPKtoHvE335xz3DMnAQQiKna8K1pmEdSfnFhS8D8b57zM",
  "key14": "5Ni9SFeCa9DrJbLhg9hARk2mmmH8UuRKwHDzJGHZewzgEhSNaRDvffGDn7bPA6h6omm3fXwy4xNQEweKiwN3uszo",
  "key15": "X6pM5ihKR2XCmqPQAxX1vUY4urGE3NbmUPAyq5SKp7gZAo16oawFRkWUgeZFeDX2smnJB7StksvkbToBNq7YJVS",
  "key16": "2NkxgNGNdnsKnNXAnN5kxvHLvJ1voqPDQEbpppQErnG8BGwz4JwPtNXS6kFLmaRD9CKKBR7WxWogpDm9wEiFvXDt",
  "key17": "4K8euwxGjyPNkHiFECqHNzauRarVBF5knbmxFXuNmMMUJ1agz64Si8yvftjgWxvy7ut1VutByp7J8JNHYLhzSRbJ",
  "key18": "2bZd3WBAbM26fVuYLQvoVgnDwdXRUVR5QE99BEiWhmSR1euvNMHX3WqNhRc5gwn7n9hWt1uHXB79aLh2sYcjj9z7",
  "key19": "2jPpSbhv66gQKxrWmozfteRYLxst4fCpxGEKib7jLkzCZqPCqdw7esaazyfFdvkHmPQ3Zs1z7FSaq5dL54nnCsZR",
  "key20": "643BaxceYma5VsjwYBkoXB7dD6Lf4HAcNQdPRFAkBiWipvsotGzCneJgtX8SE1SqPuzV7zCX9dJmY8tA2mVETbox",
  "key21": "3mKLzV7aE2cdUcchzCcXxJTdF3yLRPrAePpGGMT9viZHuACgLNFAeazqiyfrbATGj45bXSqCn1V8Jhcf4dVoLKBz",
  "key22": "5pGbGsHTZ6Y5JNuxpPQY2N3prFsMSDKK5cXtXhEqBNfXWvSngXymJ5xQGpXVEhKgnmn1TdSTRvVo8hTwdzw5MkXB",
  "key23": "7h3Pjj8urLkuzKSiC8KodjBGbp9uxA3K3UrUZnLeq1CqZqjZhRXUhHvYXNu2TPwUE1kBTw2mFDnoU9T8cdZW6G1",
  "key24": "2SfkY6RTN9w3izgWVeXSkTBUqNag5zHLmWmi2oDjmXAwVpCCGb69UXXcYjEKCkr9JtDzfuYs5xmmnGrezfCTC7Cd",
  "key25": "ZUJRyhAo8SkgRHLsu1KpKZ98MueZoqqcZYHVMfmMk8Rzn25EHtoaRvYZthVoB5CSQyDPCfH2anUP3XApAPWkW75",
  "key26": "3ZhEHuUc9yCR4HMXCQ6HDwRPj58k3o5sLpHaxxUMig1grUpzaQMoLaq4SC8PA98PfbormSNC1HEbsJNuMJ2w6Eh4",
  "key27": "4G6Grt4nRSYwx4JbbcdbxRd4Utj5eMjH8bwBJLsPXXpZEjGcT9L6k95mGScMDirMZkH2Zja3rHrrJKAUvxoqetUF",
  "key28": "3TpychjFpjxTjgBE3MLLbuG7uMy3iNsgnP2PKMGqFRVwQokPBhebhBPLYJccbScKnHAxWqLCbfQvXUnGDBZC4DAZ",
  "key29": "tc4Cms6QyS7hSeqVGAiyQ3d9NayDjej8KAK6zzV6WERTxYUqYVCthoCMz5Ndfjo9YfEU8msis3MfGZNwNkEzKXQ",
  "key30": "2mfTxbEivDsc3UXhqkqHBUrk2fL8JTu8PeGJg9FCdwZXpAUuV8ZYwgjiyjy1FVx8HCHw8rEyW7we8p6tessd9jf6",
  "key31": "3CdjFweacmHRqYAnCZyHWonf2jdBuUHkoECWJ531sGNYfH974GCPJtsEtkKTE99ZWn2utgCwx8cC5Rh6kBkw4yPT",
  "key32": "5bnxg1Nz9aFRor8tHjEnvKVgkWTkCHH9z17pZEkugaA7JfFJvFXFuT4woR7D6qLnKb9TBfuyNYqCrcfnc83Dwvd4",
  "key33": "2XA43stP8yChzeTAWPXFvvwNwDBRPiNPXLTs4Z4iaU2tjpJZSvS2Emyrp6KFmU8pZX2qm9Rc1cTkGgbTmqjm2q3Y",
  "key34": "4Hp8fURL78Fn9GmkA4T4CsRkMWPi3bFwxQxT46ou3pfhT91i6GMX7aBERea6WBS96ua5QN3p4v6LJxoP7nRk6ybt",
  "key35": "2n1y92fXLDy3q5CKtnZGLStgkkDT29skA3Qi1po5Wnu91SmsEFJXFrMvbyP81HhHjczAcdrKJ8f9PC8rmwNJvBBP",
  "key36": "2MzFeirPmCEu1sjWQWfdhLaHc75SvVyBoPkKJNsH2CuutDwyyoQhYheAcK5Au7rQKaLb5TbWTjeZ2LuA1WQ429oY",
  "key37": "4YEwiGePjdjjVn59DPBzrJuWEt4XVeo6zstGcJhoqyAcmUWPVfHwyyA2mi6Hu3SG86iSPEfYrp8QxS3xKVWeosWo",
  "key38": "2YwLksFNfYndc3YexpBtPB2f8ACycz69GD4oWKPMHkpoiQC48vBv1tuf6JABid8gYTgFPUjR5gSxHiJUJyzXXkGM",
  "key39": "2wuadfJoxT6xrfqkAP5EGwwcrLTi9J9P5EgkHD3iDibj9HhRVKh9ZUrZEPqrvaxwpwz7FNgr26LdVtotr4CADKdr",
  "key40": "hyoKrrbAyUHiNXXNzaGvKmL4H9User6zhBux6xtwaBHEj8kiBMZZTCCWvnBsS8KNfmjB9A9uBFfWwCGTAyEjkSJ",
  "key41": "27nA4hXKVmuyHMyMau9cQu6mcQ4xbvraBYsPCNnwhJ97foRQLN1kCLk7SngeSSov2kCkKzoscbwbYquxZzu2Vdzx",
  "key42": "5VK8wkiKFrBaVM64xHaxu2ibGTLUptCKUJju7kzDqpZmPsKytC1cAudKvgeXKceRBrT62AhY2Ub2uUVnzwX7fyKA",
  "key43": "4sGdLJrjrNsPjWvQmfDvnaDGFVmuMwewTE1dkcKgZgeVVNq86Uz8aLLyvmJvdMJMYpWcaQUM8frsbQyBRSGRzBrk",
  "key44": "53fKAtQBJzs2Sv1ehYyZyEKxUo5vJLLnwzA9C2dRdCVixwnijefX4mc1uMkkaxxAEBXEcwqoLehs5xNg5J82fq1r",
  "key45": "FwpfjwzrGrqosCYvacWReKKyhe4Dkc5dgLyBrTbgkjXvh6Pyhn8Fq7eUhfNDJXNtPTLvupdLE7d5K1bVNtVRHSH",
  "key46": "3C7yA8w6mqJxeJC6ZZVwZTgwqnVx5c35287mv3MV953TwUXBH7JAMeBa1QwPA1WvGt2gB6Y5Fs9Kbs5pL6Hpeh1G"
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
