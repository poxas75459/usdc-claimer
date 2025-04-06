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
    "5bYUcAXE4gQuRKYL2zgAp8joZjK9F23GDAf7kVQk2qRWtUPWW3GVWYBBEanSCaKMQMLgsYDfBDBNvsH35LmNStaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWhMetnr47ua7Em4xXDpXZsESWLYUvv5TGoDJZioQkzn9e6tY52hxhZsEjZwe8TugJTUqUduKQMVcZBPLkPFg4G",
  "key1": "25CU6mYb6E4Ct6S7CTU2mcycy5E3a94DLvELUmr29FNdzqD9HmBv3EgQ5JyGo6Piw8AqLVJxVcfoQRoTrAodtVCL",
  "key2": "4VZCoiVG94kTLcsEDWvgPVzG1qRM69YhEQh6QKbWwJpvWyRj99NjG6wduDfzRcfHxfoXSnnkEL5meTZ4Sokie8KS",
  "key3": "5FAVyGkj9Cs57WJjP9GNPx8TEo9PQqTtTYcBZcqs9HtuANCDP5zcezNAeoULZu1hXtKb5bD5wKWBWv5sXGjLvSE9",
  "key4": "4d4WrSfLH9xGHCuygi6gdQE8fKmRoArz9ViFJ9n9t39DH6YgZDsQ8eySKTRseJi6sadXF2RfKRbQg6NzvRu17sx7",
  "key5": "5gmEG3QaWmygD3kRadKatZafhVCEXPBpfYZQZQe9X3rStGs8oXRW3A8QkJNCbW2qD2D1V9TAG1rEmn5gmcAwHMHx",
  "key6": "3tZK3Cf7DZbL6696KbWPSsm982NAtFvpQ6VCAxvYvkiutqj6ZE8meDP7iGSnvmjy6wXFgsAYXCGq2rXpf3daR2qc",
  "key7": "4RJL76gP2SMYZT5FFvmwRdXGb8Kem6LNsaySRGLkD8TkyEHSDgqqi8nxjfgD3nYe5achqRzHydTsLzmPK4fZym3m",
  "key8": "4QidxB5qM4GL6WdzMWyBm8FZhe2oX73CRTVysURyT9iQD46BaQhyAap11MJ9PLKDYvGfZG65Z95gTpDbNc2ivSd3",
  "key9": "3cwfcGZRdQAPnSVqbY1FwTMiGRrrjSre3jXmuD2JN8GxhRJnXKzuAzkuSbwAEE3EQ19QVmQEYPGydgas5khtRpSD",
  "key10": "2y3267YfQTt2pMQRtFbcyLZk76imXnQSn5noDSbi765MDsvourkVD3uCMdNZqerNUgxq1Qb6TydTP5KU3yWWKpFi",
  "key11": "5QYtUVG7zjGAq29xDepkoN2hbPF9ypQjn2bZwqUguUgFzrdp16rWmRuP6wVcPRtVdE7jEjVKLhiLQREBcGTHjgZ6",
  "key12": "4qzheFWPnRWe3PMoTPNesLdpf1aSW8skiFCCDTZyJAZTg9xQcj3PhiKd46qBfe1iCwcHc1M16yMqdQezig8RuApJ",
  "key13": "5u24LDXr3DAHMuZB2SMgLDxHm3i7mZ8rAXuBUm83HXn6ex8ZJuN2ZqZ8jr9e4tWHa8wgrDqeB5eWyPuzDTHJ13gR",
  "key14": "4TsceEPsedrD7oC2pigu8nnD2WLkLhUKfVgtEMuuP6xqCoA99TLFpgUjh5r9iAsCvQoXURA3o15qLGKC8d7Cj1uE",
  "key15": "2xBw4bcYnnLJRHqqjnNuqVq4wT6BtiUuGzZv9djxKMKQ8qZC2V2r8fYWxARKzvCYMibEhVoD1N61NuP5V1VF5nrj",
  "key16": "4fek8chkVp1hDrvopXR2RYw8rpyth5EjsuKbt7SRWvtFY6f7DSBjoeSnQfGSVoDeFUPUaXmRv1Bisojj3LRW6BBF",
  "key17": "3AjtMMQK9wDgRvGioJPQ6L3B8fEPgp7JyGzc4bd6gaHQugRVSeFUQDZx6qk72785R8Jtv1dnQ9GT2wA712jcs62M",
  "key18": "5RTZ5k2PVGP8ToQyZ8hPBiq5xwVwdwGCFsZ4SVMZJcdPNhDPkSeAecaocC67EnQB5xPxbQPbfftRWMcZcLJqWeiJ",
  "key19": "5zgzKQ9d81RgjPbNhasupcipAr74LSFnNxNWFQiBr3N7HZpCDov4vNhJNcQBr6nSJfTRNq7tXeUf65J8Byhn1ijr",
  "key20": "4YVwP94acdrarr82UdhELPy9jPMAEEmBYxh3d5XsypmNiuf7tXsfLWq3mGdEyhh2iSGgL1y19Q4QCbs474w7mrzY",
  "key21": "4crAHGiXbmVbdqU32txJ36cf4DYo2AVEKUxD3XR5Snq1nxafCwnqxQ5QGXExL9a5R1aq7My8AvXv6HJAk8hF2d57",
  "key22": "4rFukNPaWBM8XGziHuFhZD2n7fjqwPHx56QfacfuuyAQC2Z1JCkwyMe2J2wRTL845e1DBpATMvsRUearLiKLH9e2",
  "key23": "4XgMfWVNV6d6Ts5ZCGyhqrHedqXKx6eQeAQrJEQqxgdcRigtfA9ocYnK8PMp6hk7utzbTdefh5eJMocV9NF8HqTS",
  "key24": "4p67mmbGxENbqXtyxxLid2fJ3SJuQoA4iuFMgHdoczqYLky2ALMEctMBCtvUfSH57QmCKiFLruyfCqexBK7cfTtU"
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
