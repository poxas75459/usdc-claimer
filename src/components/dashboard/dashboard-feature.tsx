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
    "uzL9wXX8NmW8begVhCvAkSZksrLwSkyRGKiuB5FCdeT8nGGbn6FkdBnpLNTkC2nsCQgDDm4WdX7QY42XJbmoyph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dhu8a2PTeKLUF68LX9GFak7PBcMdQTZbCJW8tPHTccThFsY1WnumzUspLXVdeizBNCYM7zrq3ND9r6ZYa8surWX",
  "key1": "5npD3AoCvXcab26zwQP9ZbDsTp9Ev3DxtPCzRF8ntY7SR8Pu7M1HsGJccwfPB3JoFZLrgZwDevURoPbbXHho6HAk",
  "key2": "4YkoWhoFxnShraJ3Vja4sH94DgjujbRK17r9zg6Li5Dz3h7MgEen18mRvpVLQFRYPT3oXR9keNoNvg7fQyu7GULx",
  "key3": "4GCG3FqNnXrk2rvrY2jWoGGNo6uwYi2Vid4to8YAUtwkFcxfyHjysJNwsxzGsTDaZStZJNnUNGGW1KVMpvWPGhwJ",
  "key4": "2ZYh4XMwQK7ELCN5px1Ngp9Qqr5AKgx8LsZZxaQSY89dFy3Ac4aowh2A2Trzd1tKYvdE8fyTiKeKFimtTzhczqEC",
  "key5": "2ghUjbtAWD9NRH9wVYbj1qzFfHnReBR6zckr4bZNxG24Dj5PWj3xNyfwoz8BGK9TEFJmacV3psQWo2LSY7wNcZ3b",
  "key6": "35Mh28anbjP6torhCBeYA9ZNufUmJrojMNdCzotVkxdvJHtf2gFvFkZBvGVPhdiHZ26Nt3tmytvy6g9sFLJNbVNn",
  "key7": "3foxkHguBRGDvKxr69cEFMF5tMWHWJZX6gn2jmm6ck3C2oL2fccMctzdvdeQKRT5GMTAXvbtDKE4CzrCwNcWwFV7",
  "key8": "4GffPybEZhMtVJLYajdN7SNesHUCSkGBZTegXJes7yVGy7A9v2KUYouibre72G1pgE5nfDEXCzfzisuGU42oD4mq",
  "key9": "5km5bf3o4kHrmG38mY5hDUoh9DnhNQZv7Vhzt6TnsiYdeA32BHZCsYFNXYpi1Gz42xrRqVp6zmu7dcRajnSQJXYq",
  "key10": "4ReDPXdCx4MogdVkMDx6ZztjDLaFsXJX1TaN4NYcPS9xpDaVw2ZyL1uCuZALhzN8ogeVqnQfKbEP94A8T65Y4bZw",
  "key11": "5Us1oSyAQsvDYjFcG65MvkztKtq1wFe3dBuu7KBYRb77EMnJzHHJybtduKakC1q5xvxAscSYKtER8drwdhW9CAaG",
  "key12": "65eUZXLGnkq514DW8Xt1fgt4WArb5cScapESNZ4Bv74icbiLTwXtPRUskMdVX5BnpTTvU9bkg6iP8q2E7U26zRCx",
  "key13": "5Ks3x93obUrgtBkNzhkJgsWdq8XjnBfSzPEPguDFRR5KHkDbQRDxBZu9asJpA2N7esUGZ7EMsibEkPhRAjSBgaSV",
  "key14": "5vGNRXeLmwZBGcp96gM61Bz9grqyc8dqeQtgjX4abSStcA45YMaHLhvu9ivQeqwhvYAH6ZMjebQXkHTKpjVSWZQD",
  "key15": "2v9cEojNahUaPWguacnzLQjUtwfrW1KTLUgQHCvpn8NccLAHzYehNkvEfQPymqxqconJNLWdyVBjnkacuQRRPNRS",
  "key16": "47d3nvgnDMtFvfzJwENMHgtAkSo4v6x1UVCNd4WnMiPFJ2uaFaqx3eFtbfzW3QpEj2JCNUxSQ17PcKYamNRvD5sX",
  "key17": "2PBxazWfo1HSKwctorh3KAX9FFokmvCcMkfsQAJBber3RBaD9kaksmMA2UgXzf4eVipvpxkSaW9r5AZMoRhn3TP6",
  "key18": "24WRAAY2jxVpi6Hg2a791VjwzNmHuVahTVGJd74dyH1ztbo4tFyZUk179Ng6sUrwQV8NQHQEPLaAN7fBRRMYhB1f",
  "key19": "4u5DTPEQJz9RwQBnChACFESe2dZrEpmXUqXuS4cmb2sh5CoNCCXUBtddFVaHLXuhmEbCMZTqeKpLhNxaaZA1xUpj",
  "key20": "2qM7YoumKe2t4Yy6i1ASWns6Fs9z7zkCq4PfSjawNdaqfik8XHtBCwNUUS2oTffaVqJU12bh1RdLyLB44ceJ1c7q",
  "key21": "xHRCFEnRQzuf4hgeoMhDnJzTbGhKpuder1furptmZ6zXnJHYx4rkxshCBe42ie2chZRdrTNH7kKjYTzdSg6pSac",
  "key22": "3buyvFk4xr9iMqVJq39ikMCVBibLks25nc1RGahcWANECUxzkrRx7JBT1etBDaaZP8rmocpzEtPWrWkCTsqySjzK",
  "key23": "34hHubh3zkX91nyRqQkiiiFhpJhuBWaMsn9XacfA4d65SqkUzQ56WTqvWUR8oiTJpeY2korHwabBLLzXLPumgA9k",
  "key24": "2bsMWhynkHSHRuX6uub8aVUqPtjB5yQNjawTzZ131pi8cLDBUCCmgiC2XEgk3bhKkJxy85MjES3NC5w8dCP84kjL",
  "key25": "3ZuuvESr4ocE2wouf5LUNh1SJLrvUhCBW4uKkBbtPWTAXEnEyVBBXdyaiDY97pmGM1KnoZUvuPrj2H96DgwkTLR2",
  "key26": "2SzQpC1GxAgrxp7wxJiAa8byL3gHm8uYobV37ohnNnjbmaUM1FzQL73aSwhHA9UCeibtPYikeaJE21Vtb8rcYXVe",
  "key27": "TAoKq4E7W6EiQZdW4GRx1jQX51viBDSD5xsRY3GWiq74rhAwE6FAGT1584eRa3SJCoSR274x1yXb5QXMsFvG2Nc"
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
