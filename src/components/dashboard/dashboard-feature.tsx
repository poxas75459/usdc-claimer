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
    "5zuK5fFWZPB1vSk8fNmcVDcKCBBCwMTVMuLJCNKBU3ShcgHCiwSnC96mREQqPAsqis1rTRXPpQBg4TvNfM3aPBLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dQzeqaUP9iuz36ruBZ4PQp8XWB5To1iVCDbEV9P5V8r3XiYVR2Fr3TzBkycvYHLMRqJJ3QhdTuPEJGx1SXVQRN8",
  "key1": "4gtMpz4j96rps4BdUCqBzUT8P9EptooRNaWmAphnAGavdd72aG2bMpmAs8U3itnqsicUQ4tkBPGnm3PwZvsaoYmv",
  "key2": "5w8gadxjpXdq6jUWzpLQXPKW9NDRSqpwBi3kkRtXSSqrDCJUJbh5cSx18ynHpYPxWH3SCwEthheJV74G8Pbaosv8",
  "key3": "FnEo6nYYqk8mGSoL9BsQeLvChLgBMyZufGxSMd7wRjqikmJStHU64k5Huz581iF9kYzvx6MD2JW7o2Hw4cifyYd",
  "key4": "72zkNr383myWzktD5GnywNfBoojJspSHjNCBbkDXsaZzqgiskbevhQWFhUwfyADL7L2gtzADbuu8c8nXakR3uqU",
  "key5": "4iMmzk2q4vqEakWockW2sXyarrFRBZNkyeP4ASH4zsoMwuCdYaD1t7s5pM7wzg2JdKMb6XtKZiKofujfBujSBPrq",
  "key6": "548B4R5Yh6FnYuirxyU5Gi33GKbKmAPcSXTWy52pwiDTVTrMJLmfTbPPZkETKN4BcWvxwybAMSGM74zzF5CsoRJ3",
  "key7": "2Z9UP9X9B1vq9HUeoDXMmUv7RSic4pQqQmSVujshMoLGATWtmGm2qTywr3J8QFSUo1oZewoJh5RrHvkbifH4eTJu",
  "key8": "2q3YWBUXQa6whEY7N4dV65XZuPrGMzou4W8Cz8gY9gLz4WbXGDpa51biQWRpZ1t3xTUy7ARbFEenAkqX2ofG7KSL",
  "key9": "4u7pW1SvmuFVQ3QKtkeLGPJtZUWe49fncdwXp9ZtBs16rzkBH2xrj2X8SDyCJ1bVbuo26ycbzQ3LBn2oo4fQhnyM",
  "key10": "49BC2MUSVCBT6XyYeoyVpWBeRM3sQfscDRJR4Yj9CyJSaPFvZa5V25uinQHn31wJ6a36UCKongouPbBxRCqHgkpk",
  "key11": "5vzKBZCNqmnRYRywNk3axZipm8SbemDbaf16oc3TQqUMUXzWQCjCneAk4dPvsv5XR91HTmNxiyZk9cC5rn5yabik",
  "key12": "4xAvYUEiMaGzUJNk8uPbJQhXpA4zHAPE2AL3qn3BSgWPfDWCy5NybeFTY7zHgNHDozqu3SgJ3m2ngZrmc4Dxkh6r",
  "key13": "5iD318aYmfDbH9WnB4fD3QGn63tgtDTCuDmNh8kKBuDPjfjJfW8QyYEMh14P8pVbQyBAEQXXp9nv8mpU7JAa6j7G",
  "key14": "2Rf52UmJ8pEtraRqExAhEWi3JPXoZueDAcPo6j2edeK8of7HZqeEMv1QPZERCbMxZP4iE9pTVahAvfEU32eiqwAa",
  "key15": "2LsWPn5MNykxKz8MNWcec1GEomVrdu2jYEmyrDmHUYTUwuaZPUmn716iX5FzSspvp1C7Re8igu92eCXFB2nakWE2",
  "key16": "3L5bSHbXU57RJcBU1JLGjkvo88UjegUUWWCKCi4wzxVckkgrwofW51AFigNUK7Fz9eqDLMXzuGKEj5ZByZCQEe45",
  "key17": "5ZrWPvo5mka6fydi8tuG6ASgwjANgqNg9As2dZ9RauXN2XE8ehFzinFbwKjCAyeZtHVzMUPG1FUBnt8HzHV38J9y",
  "key18": "2oPEyk8s91w9zapScGjqYCPm8FuxXf5Qj2SZsHQ63attpB5orwsg1vdYrX7X7cug9SizanawKxXRDc9yPnBboZjy",
  "key19": "5FS2mitBpD1SqgxUPoqioeFvZfVsgFg2NywxKKDRAbvPNzwgF3kHoiPFMbHnoQmqNaHhNFvHboYFRJkjHM5sjA2A",
  "key20": "wVv3LN81pvAhgSWPsapVdGiTVyjAEzEcxC2rshYqPWbkjD9gLJuc1N6dXNSebqkkgHSQLzofXqNVPTmoyFCZD3D",
  "key21": "2AJUJYL1TJZ2zSxajHiDXsRubPVrseXReGNX5A3tWn2YiEWWhNSEiMbSjEqZKqJ4qpM1LRBFXUdwcw1DSMan83ki",
  "key22": "3Pgwww2Txz7VMeUmP5UjSM5AQuueBQ2huXTs9jGsPG7rCnD6KusZ89v8bW1huMzNpaKBPgadYsrfpf3pK5QiTf7K",
  "key23": "358E7XZZ897kEANdTfTmtJx3fGjXkpkbLsdc9Tvu1Yor7SDwmnv2XvHCZiJY5TqXxXBKXeDFrCgL1Wwpb7LkbZEn",
  "key24": "gjQ5BKgz12fRiUXe9xZN7jhAdFQBi1DfSDTYqPhMXsZPYo4kvrq2Az4HVBjbUnkrSUx7n3PvwixySyJvTwwkuJP",
  "key25": "5pb3QJG3QCW4wtmoPWWinGCyX1Lnf9XqLKhXZXvJp6D94fMan8aJBKgVnfsDnXXnBqM9dLW7omKy1jfyZghbcunh",
  "key26": "3F73KizbsSNSxJSqZrxoVLauLeSaZh79Xb2ge5ZL2PjmgAQPF1Z8w5ZMDqcbvuR8MVno87vxTiB8FosmzKiXwAGL"
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
