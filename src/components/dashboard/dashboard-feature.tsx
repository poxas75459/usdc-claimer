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
    "4a6YDHCPAKu13gXntr7idvc3FNBAn2j72MwsmK2z1iEQbp8ZnCLSkxfteRuTzLUbQ7R9XEFMMAga6LvBvHywbeZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37opoXxy4MDhu6Vru6XMY8WvJfiTier9TCcJmxwd6NdW7mqqayXbdQgXBYpKHUtVBRa5nB6EeZkpDXp77byDb2ow",
  "key1": "5NRroWSHKgJmjwgG3HGMfbqeocCWNbH2MQCLyrfKL73F1NNHqNbVvdUHd2ab2w1FsacUVNpmcQCi1e6Sse54cqnw",
  "key2": "5puoqSTofYNyZ8Y3WFoUCA1Wk1VeKstPsuyGKXomn1f1PZ6jBWHgAKySEe32b5GSZVsGBBSLCHso2wsx61GWpeRV",
  "key3": "rN2vjrrwEW4mheymJ84ThJBXLavC2ooTZpYU2sT6VfxkA9fvPFCK9spX4hqBPjDCcEDoetZpt5d6TS1aEKowrUo",
  "key4": "3zqESJqnvYxbCs41LkaJU7d3F8PbLNGPxwNk1BjgEoXPeXNFRcCzZZDVdvfGuqddjb6ZooWL2GX7t8hZQoARv4SQ",
  "key5": "7aQJSc2F5oDByqDH4qDSJSJuG7bhD58ML9vCe2qr9LGu8od79Vhr5QokRBgjtavs1GGCwJXpUEJNL33FP33CzPJ",
  "key6": "4wVzxF7os7sNUdr3nWjmQtqdXgyqpm2sg4f4uqfkLR2uwnPHLH889Anr7FAnGDJdfKVDvFdj9cdZACyXbYfCMKeq",
  "key7": "3m49eqB3T69G7rEXsL5uDBriWjzrPViexfsfp1ugcCrCTLAGeggB9W8BxxJKbvBCa2mipCJDZkFGqPUsbb352VXt",
  "key8": "3eXzVFWNKrAa7TSMvmtnf4V7v5pbLtMQoqsCekxiT2RnPMnuQCdtoVuo3qF1XFYtkBMPqTyJpr12vFzwAq2Fq4L2",
  "key9": "27CSfNejhEdswHwFzvF7tKMTytgo1RtH5PfFaDDGWWNnFMFAeZPMLjyiLuMYGHa8gTaLqkt9AJKyr5bPt18Upgvg",
  "key10": "qk6wVW3HShhiCRq5rJHupzmo2MX8xue3cfjCLSitUQew8ZTh2QceWxSta1zs3WaqKxSioixaoD2zKHe5x7gBhpr",
  "key11": "4ieN68H9ybv3HXQ4Cm7TLCGzGYpv7JQuMDCD5nq3cYfoDMEWRVbwvgBjYgmn1vD4PNNyNEBP43V9MPbC5T1WRDVp",
  "key12": "5mFsjMKYEEbafatF3TQuqoT7HuHnDGQ88izp15qh8WnSZnQx1nEqQe9BQKHpk9Z45hFhRv77h5ahky9TzKXwA35J",
  "key13": "3CBz3d1voM7TGKVPQZ1vQGnGWdCo7U9dhoKpwCLVPhLwcKLAN3apot45Ca5RUVx7XyopcKGMrLR8TGaYCwR2aTFY",
  "key14": "516jaaCvTcQb5j6S3VjmsnT9S7weEnRjNY3w69jwsFGZG9aLvy8hPeiHskKfKGp9vSsgGmDrM1meMqnpUVLDfikJ",
  "key15": "5UYPLTjb5RJXQ6SYKxbtRdxpsXcHuDpwfyMouQCVEJoF5rwJ9xyBBZZzHuzwnabqYSsZcWrqahz2v64viDfYxRrv",
  "key16": "5gKFroMzJLhBZkMR2DMTMLygKjPsT7mAPm6GiZ1vDXW2ozxjEP2TXMzc8pU5s88WhBegRguHh98aTKGrse6aRTjk",
  "key17": "3Jt3rti3dkcdv6N6uJs1qaR9HXpWbJb9zmHmEnBZFSU5TexxH3MT5tAPGeFAoCZaAoC3xHriQsXWuD3Ckxw2L3Ka",
  "key18": "3PaEVA1k5XqAvkWyCFuR7gwA1FC8C2KdcFYMmDXE5Kd6MfXnspC9VTLy4FYte9LEN7iAJ2oRdLv5vWfitq1Gfk7W",
  "key19": "3b6pHJbnW2r9XBkofVeXSyMqnG5enC5imXv7mUDisfX6KxmBnWdKkYydfkNTr3NyS9zotYpsbKAAZq6p5nmBRHYp",
  "key20": "3orZgz3EPbMpRLBeC19KpiCy4Mdj4LM5fdMtNGT3St3ug3EvbeFz6wemPNcjKeqDN7HHaU5FKTt33rmeXXj95RoE",
  "key21": "3ocvPXtEUa1Ly7TtrL84DPvKEbMZrrUiEtYRc1thaPC9YUcpkP7L8oL6tjgWUjiFAtiM4GJiaiF9wCPLuL9FJJCD",
  "key22": "5Dx1sE9Z4yNVxc23ueaxFRAL38Qmwm9UkctJhM5J8rAU27ZEEBL9djRkVfA1NW5FHfKv68jsd1Y3uZNQja6iWQC3",
  "key23": "3XpxR2nbX9nQmuHNmdtY878BkaupsRMWaf2BvJ8n7icD4uwX96V316LdnLYb6HZ8iNSgEa6zy7oZyUVfEqdWP2nX",
  "key24": "5pnQEfsmtSoGPtHPiNF2pU8DcUpZwQb9BQiQKr5amJe1eJRTs24d2hJ4ZHW6jKscSXVsDLPsF1udE1VpxCwuRPte",
  "key25": "4XYENf1nVZ58Q7jmcM9BYb66FFKqEUAVwJLDr7XEkuc68b864Lso3M8vryP59A7EoXZK7HkKuRAZz6PEJZt9DDzD",
  "key26": "2SSoyL4Di7EmwapwCd5S43B6RWKkTKQDpmi5D2qzLa9JAhhstkdfhEMkE7y4mVCZcYhorAq7ZzouxH5HoJd9zav6",
  "key27": "4bw7MjU2gWau3n55RiFeTg61oFM2ngF53tXgN3oLMezR5pnJoUsSZ6vYK9ocL1tATEztWWz3FE3AgCSe43TjwASM",
  "key28": "292pKUTm615x73BxzPFfRU17Dz5Mbqzx45mk6oe5BfJjgmG9BRSuDGVGdGfQAewkL4kBqFNrgyZ74byrhXiesGqb"
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
