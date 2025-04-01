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
    "dgBPrwCzjxv7wR8QvWpo3vfyRZ73MZhvxfMXnwM4uFKfXmAC2Q6tWFGSEhiCZ846SxrD1xj83Fr8R3zEmjTDxmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKHHoqj6zUXU2CAZuKHP1Dh1NT1kTiAdmsM9PzLDNbDVdZghrogdKybdDrBue1bvSoaatCcibshHTHBJ35QibNc",
  "key1": "2VHAYPjFbxgQ7WZHxFJBuLB3yBbYoHj27VzP4HWBSphk73f1joCWzaAkrWUQ55iJnwqTqXEBq4ZD4J7oeasBkPNa",
  "key2": "5zJ58rCffeo3ZYfeoWoQHD6F1dUDFDqVii5QTug1LKgocN1gMXLfo66NdkRZo8eVqyqnymnwXB8uVdUpdwFdrZnD",
  "key3": "5Xt3aDPtMguTQ5WDzhPQWG417oi6xwfCJbS9RgNAYfwtudYf6pGVxpVZcoydYTryWQn4WBwHg5eFd9BEcHKei7gS",
  "key4": "2zsRert6FXKpEatDHLb3EffYupWgDaHvYFjrdyaCyoHQ992BvdctzmoNs4xEde1tJe21J6xzwYxNDp79E9NNoaCr",
  "key5": "3NbtMfFp3tdm8N3UMsNbpacmQszCNhSKfkh1S3Und6n699HQxtt9kNkCHtoWC1g4rRK9Xc6zi83MHpRys1XUDYfA",
  "key6": "AFWgE9Zj3e8y1VcneDYcLbc6vCHEwtNkboMJkUaYxatimNAkVofbDGaMmYu5gDxAjFtzUpRi1Uv15wL97jYhk51",
  "key7": "g4AKWSUCGTAYJ3v82zD9V2KbsafBJDBwMJmxS9CLQWjigy3pcdjZVPTRA4acmHVMgdFB4RT7yvHmFiLAgJNCPgg",
  "key8": "4tjVpeNxzmWqrfA8apQ3fgjzbRuycEUeAEQhsK4EztG5xL8Vx5qEW2Q7DCa7FrYxhkvpcG6pBo8sL84uPqtsp3RY",
  "key9": "3kY3cPDtBqUuFoFzTQEyqeb6v11Txs3DrighA5if6peP8BYLGJGSrvNeWP7SkJzpzspYHqpTD95kDcuuwysj24Mp",
  "key10": "5AkvLVPAV9kYSyEAmFPToeHkZyDL39gSh1U2QX6j827Hh3LnLg8Tq8s7qmdbPMtW2MHRfGQCmJZDTokENyehahqD",
  "key11": "2XMGxQcPgNE1k7jCYjbLhX7AftUL88P17yak3oJtZqrju1faq1F6q1bcjfVUYfeJgvsTGv2JVfXP9UvfqRVSf8ec",
  "key12": "2acHvmNGaNdQhjqhj3jw68KV7d7t3GcMpBLsp6KkSVBbdH84qi4GYN1GkbPuZwzDEjM7jHrDnBgKviJ8p9Y9GsHH",
  "key13": "xPSGFuQT52fE6LjNDWFZ1pb1euqgPc3EyHhnv2R83WZqBsRgL8eASkG6WJjbzrJvWRoYQswdgPqnQjBe2P7EX21",
  "key14": "2jNShhVfDuBnDi5GymwEw8eZDsoQ2MKBNe4WiThzUXMvQMPUdXfiAaMFiMzQ3hFUWntkXXp5qwWipiVGBv4CzUyY",
  "key15": "JFgx5hSRtM1jMQRsSxBruAcGQs5nsT1biBPsKhWScVxWt9cqzSDnj4Xxz8sF7G6R9PR55NCS9NqbQcoEJ96xZ7k",
  "key16": "4E6m9cVG7RDdo7guHoojKmrpqnnpncXDy1ctanEwSGtp2LzxX9ytmjTdQ6CAaRYFELtFAsboeckFhNdEFmkwMHrK",
  "key17": "5fKrqXvj58ATrhws6fUcrEEpDkW8H4bqU9qRLE8ppU8D1X4MjftvF88avXFXbwjrRGUtFr1Uez4LnCK2CVsZi8FW",
  "key18": "4ZVz3w6ETEiyq83xT64HjaqmV67m2Sox7WJb5Y8PgMATMPC6rDigWpT6E8xdGL7QWxf3W5ZBbwrqrV97YskTwkSp",
  "key19": "hUyc9ki3xPPy7xrQsSN1y6WfXYyPjLXhWSS4g6dxej68ujTU2XrzCywSguifi9r4ax2eztzdxhuytnuiJaHfm7v",
  "key20": "tt8vQhf6mxk91u9HCSWSsw5eFTbN7YurVqr4XBR5h43Q5C1Fpe56chuxM4SyGgsiLoDAQ4kBpgupMvVwvxH3HtT",
  "key21": "MT5zZKs5houuS8NRhtLRrU3wF7XMgdb8ymq4pjjxQgUaaAbkXzgTb3z2snirTP5EAxd8xbSNYCjQCuDwCcfwZwH",
  "key22": "2nxb7GbcRW9L4iFV2EWfuhBzWw3PgszhGxsLPxNRodx1eTZJ6pptExwnKiAqkSxXGZhNnppFANFgxZk2pRbe877N",
  "key23": "4G2SxSBkNysodFLWw7LCfKvbaBubSUydv96se7WRqRuFAQqsDXShiPzcnjGGDDtrA891KFvMKvsRkuzm1Attadn3",
  "key24": "38i1UJUFVZxJwP9qyxAgVrAP2pebaKSD4QBNXX4Zc1JHupjomAqcy62rRRGhGnSRuY3NsVH1JFfNFngzBPiBWWwY",
  "key25": "563GaxqJcgc55v6nmiasw9r2334YzbsvTraarTiqZt3Byi7G82afTD1a33vp192YTUnfVUujLSZBq5ixVy6w5ns8",
  "key26": "2TbGHnUaN1J5Hyo1NkecxbZ56Tb2w67UDbTYWe1oQJuYF8t29x3V3aoVcKc8JDFGFBfpWV3RYFNyfyRpe7fUbobi",
  "key27": "Pvsjvc4tNrumefazbBSR7fSJiPK3BdENqgPEJ5JZCZFR3uSGstjcZ4mR8RGb17SKogVeP9AubAHchL15fKFinMh",
  "key28": "5pJCMBq9uxeHC4g3ZGPaHVvvHqeFfvZF1VLBXFn2dw4zDXdgAzosnDkRABDUwPQy8B7SRiJQPLSS8dxMZ1aJWS92"
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
