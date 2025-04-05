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
    "55wV3RAdFVbxhEvaAaddTaEiioJh9LFwzjiEusHgw1ErG2VBXpN3AJp64EKJKxJVCJQZSUB8fGhXvpwRM35iintK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mC3ZBKaRtF57REjmmCAp9Sr1CFWcW9vDAhkrRytpzUwEDmpBa5CFzdtqU9XVSQJ1GrG8QCtvBcLcrnjhBBhwnH",
  "key1": "PebYCs7hnQqcfVj47BjrGPkhsZiR2djDyf3VDYwmSkYXghZRtPFnm7BU8eAR6jHAk3gxEoMKFy6pE9MAZH8JFGv",
  "key2": "59XTCY3XV9AHfmk7uKKcrJoE6fmGgfgc9teGkKAA7YsJre4yRcg76u143pGTu9aJSWudth73sufjSV1Nps6CP1Sv",
  "key3": "3vXRKKmjm9gBYJAAnajdVgGznQFoyV4iqX6NEueN7gasp1uSucWqVx4enaRG7hGQPuBu2TjL6Jo85QCnaGJGDvNM",
  "key4": "4XgNrvqeMW2joj2n4sfG7Qhx93r5KWhARjtQNuW7ZmkghrHFQP2CT44hFW7ULMCdUnSYP9QiqHry2HQopLwwqkQu",
  "key5": "npK7XGvUqcWss8LpcBt1M9fuH1dETX4cJr2jRxugvijpqoYmg5piQ7SreA3fzf7w2kDRjAoiuWNa1oJyQRoCUXN",
  "key6": "G8Y6Z2gs8d8cSqJM3CPtS1RXR1v1jwA2vmzYYcyg2c7d7HE7EbVyuR9BNMzgxZDHosoMheauj7fmgju7zhba8zm",
  "key7": "5cDwbuNoSsuBEyWfaX8MhdfXBw3xmsR6qsSPVkLK5twXKtt5Pnmky8rGAzqftb6MtP1Z8RLv1GamxbPUeegNiy28",
  "key8": "43NEQRYuSVJ58QpDXsKQYTKP4Wtgfwr2h8c53zGWKF2Ym3yHM4sRJaF4TCa1oC4qMUw9Sz5V7Nsy5VWGvtNEPB9u",
  "key9": "64h7jfySEXsKiYYJDTHuNZLgGQ4WHbyxYx8zubahw3yn1UScxzTExSHFrbYcbt43FusjLriTumZXsh8t95Pm6ERW",
  "key10": "2gfpo5kF5YtpnCgXKZvPHAoYf2Dm75BwXQ523GCAZ6fNkrNRLphA76SHTkWtVVgqvpSQjzm7BR46tRHHCrNtwZyD",
  "key11": "RPrjqwHBhMfA1bRXzfyoToQaUxX8V4L2YcRVQEmg5mVPxZ6CtDpmUptm6PL6LMR8DDHBFx7v3sPASv37DsLRM44",
  "key12": "YfaVayTvT3qLF272KZRb9ZjFk2aY9aACYh8pSJGAQYpB2KqPTDsrHYqLraKXiVGoikd3N2wD35HK4Nis5dR5Fv6",
  "key13": "5wjF98vknY1SLtLqoxfjrpiX4ehTGzPGPspxydgPAeB1ePz2h4bLJXVQ63kEF9LszE3wDWzpzt6fQfbJwmixrUDS",
  "key14": "XYEgJ7taJV5mVEzMgwmF5JfaEJyffXLkYnt1J9kkckStbnhB6VcsYxREHTh8g1ahWMEMH3L5J75ut26ctX3Qx9F",
  "key15": "5ZbK8M5N1FWik5dXBpBGh5ogQdvBbtexDSovM3TAHLNMYhMts2MqiAq4Rz6ja61kdzshCe4CSjrQ8U6TN4vpE1HM",
  "key16": "3RPF2FqY5MiGzh5XzgAjg6iTWzyFvQgPgBZZhAH9bq13HK6xV1neaSacFCuoU2viNLZW4Dh46mAdGtFwpD8i7TMd",
  "key17": "4PAMCrNvuLTgv3toPFXHWfhQh16H6PvSG6UzZ3EKK4M6TtsTLRsRPjFS4bPFUb7t5fspVWsMY5KiyH2Mbz7W9v8L",
  "key18": "62f2ngnCZnHyfQwADebWGTNKpLzmxvpNHmMbgCW7bJxrK5zfiYTbQZcrFq7F5z6AiJyhdpLBaorHDhkuxvevwn2i",
  "key19": "2jpeB32NX675pcKEuWbTFcHSvLCe1GKnbch358w12xWBjyRzRdunS4vabtiier3s72ME5FG17MLGyPoi6Zr3om5X",
  "key20": "thexiC6MzeasqV1Hz64CRX6HxHFqdtmUhosbeJNaxrBG8SbpoVW4MZiJDJfPBvDW4gBF1VGmTVaGiSHQZFeePkc",
  "key21": "3fqswHkEv5nUq4R5PTuvpqKfPpoL2Smeq5hwEBEv6VkkY3zhmMLiCFuaEqSoJLbtvnxZjyk9hoGjoucZ7eGeNjdH",
  "key22": "5GhkUWZ3GWdcm4vCsejMzrcdjZMpMDhirEjPWEgMXjQHmXX3AobiX47vquzu8DzRrwYks7pgWopGqzTggsiC27L",
  "key23": "RF419A3HFd5N5J72LjmLLMs2jncjZsLbtDPUMhyuQfDNSYEXQo61wu4SMAHB9TB6paSdV3YsUTexPXHNm5NpFBU",
  "key24": "wnyHgTfoN4EYur6stbQyE6YvCwt9tu2AXRm2TPRzXc8sjGBEPPwL2atkUYaxr4kPJ5qLSfbE2id81hJgJis4snX",
  "key25": "4q2pZaEpXBvgi7d8WxgKdpg5mHBLmZydVB6Xi9M28iHBb59JNiUCufsz9t7N5JmYbRFVHMyoMgPt9PhotM67vx3Q",
  "key26": "5zq5xJSiV5VG7SSCTGgt6BMYzNGeQTCxwM4hrhGRQsUN6YJQSBo4j3y92uJPZA2PEshxptJYZGLU8FbwSRzZvV7K",
  "key27": "5JemaWTfbzi5gLyFrqfEHSzRzxEaN6LhuaXemJP9gDaE8oLCFhFfSXpsQVhek7xUiW3B3SdEeKcLjwEgQW5yV6qy"
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
