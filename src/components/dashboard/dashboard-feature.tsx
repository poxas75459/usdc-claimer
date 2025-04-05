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
    "3ttvtUCFLTHiRQ7AR3Co5WsCRcM8m1D4ALRtctPHL4EJzYygZaGnwecbvMVaJQHs6hG2BwneJkJ3qXC3zXZqFbdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDSYkP93scN3Bg9VNq7d9LT1BqpgBE7i9jEuyKhA2F4tAc1DfNQM1ep66bHJptkAJEnUwoyKFH3pnEHCsq1TfxM",
  "key1": "WqVG9HPRJ6Fdyo6zK7GXF4EnSkHs6JU7ovz3VMatEkLaRPasU51nTAGqEfD1oKqbBFLTf7FauYXYcBmLAJBpDpp",
  "key2": "5SR4ayjKLeJBePsus5dcEHMV2oh4Fow6k96Ba1N1MoYTt2yKwV9qtSRx8EY9UL3jNX57py81XnBpzU5bpXXMwxYh",
  "key3": "4zXv8dD2eLgwYugv7Y1xLfq3YrrBU8x52XBuvmz9mVhdNnncsZ5jeg4oUCZj7ZDT7BJR1i2wK9CBZL1bS72EAf1i",
  "key4": "63jC96HFY1aaK9zFq6m8XC8diG2p3o3ZZgRMnAWs9e767ctJWysjmjweZrAW4RNuY2JZBmNi7dtmRgYTJd15CJHk",
  "key5": "2cCRgLYPUZ38e6XzVhV3C7ZUR2zAdKSzFTdMkgtRPG7pGW2o7bRzoZExDkEL3herK1Wn2HgCJh3pAbsoRvCrJXfq",
  "key6": "Rc3PKWVLPGiEFp3NUtUWy9TuykS1Yvnv5w1gLBrQd2FssbZrwsj6Tg4JZpZXDNDUzi4DEF2bhpnx8wJmGH9Yqk4",
  "key7": "59boahukfEd5siH5RDRCuqihctpnz4q1FHvKhQBu6e9n1v939JYyFWMYs2cp2Hqrfake69EonGTZMEymu7Q4Cbsk",
  "key8": "47oHc7CHXsQmMcPDS2ZWVSDgRECr9WznyXXvzrTsUUqcu8FZrt9USPdDiyfTz6jiz48AjHKQfqdPhStCoLrnxLWW",
  "key9": "crfwVcsrevmJ1K4VgCjLdrycFc4Pf4oJwAAB64PxtZRnBWkzRgjm717pnUGSd2DLt4gp7auCwaFWFdKjYsH6drk",
  "key10": "325ahwg9ED9qZj7YufAsPHLn5NaLrwgwdW2uQvp4hxXCGir1rT2aK74hjSjU9DQAxHKjNeUEtaYkpygmfFfNjZxs",
  "key11": "51sAMThST71Fe4V7cvtfTjgPFxAgaLEhPxmfDDYLMqYoqgwPbJfG3Qrc3tezoKb9BP7tBfKWTdi5s8TFJ9nHcJrS",
  "key12": "2XB6XWMfZwB7FkwanBv82HnDJWugPKRpz4TaDDCmougT3f6RP7gPsouoxAd2mPHj3rmA1FdeKFtPkMJz37TcFyp6",
  "key13": "5Jd263M1GJQhB2C1wo9ubVLgQa16YhYboyfg3ABEafe3vfSfAspVo44fXZmnc5mqfp64AR9cA1z48CgNJyVujeqV",
  "key14": "5GxodpRKLdniXPEfksqRsdsjhEtzS1HxCAEdxvj5MmmRUjDRu57UymGWoagZ4BkUxqet7VQHkjARE4U6zCwmLPii",
  "key15": "5agiaUjjhcD7orYLpuAZxiZXR4ZDX912RHb3ytChNgURg5xr1RpXswDiPuotAMUgRGqkDQWKTmLXxVEEEXzgF1dY",
  "key16": "d1CYApBkw7CukEaZ8JtK4d3JWdNebYXbDvWdLYFvsqxTJE9BsBGvqhjocSyXA7Upf6RQhmhBg4hSzF3E1QWsvLx",
  "key17": "xP4fmdsjxEYSrJCoA99QVCRQi4WKU4mRAtRrAZ5hbzJPpxyw5qkcZX2h9GPbFqyXf3eHpwrrL3SGa2YS2bU9ehg",
  "key18": "LY4QACqyRq3zFQBKgyMrobPcdSm2DA46Fjo4Dt6cbCJiWZ8UiYrPUJgNFjjfyAJb3nzyXSQaiMcq7ZKJS1ZdpSE",
  "key19": "4PVRvMnqo8N1cT8bZwk2u2NbqvX1AhYK8JkqXZTgWpPzMkmsKzW8hLoFgji3oJMcRVA422BxQeatfkPDPNf5hNnk",
  "key20": "34o7r6f6a51JHtKEcY8t729wHwYv7ZBN9dSmZksqgDPhg4uMfPhZfWdctEqwC3rELLhsVatqrriyWZ7tUR1cAUV4",
  "key21": "hKBNfJgg63tqGU1bcPN9Auq5xH7beNsPATGiVAEbEc2xd4KETe6D32suYzusXpnP6yz43cJ128ztY92gBu6iD6w",
  "key22": "2rJJwpejjExjmPauQmqMpZ9KxyumtrmfAT7qqhwFLa559GwwZ1cbLPhcPNZ31mYEUipjx6eEXgjBSXmuz591QNQW",
  "key23": "3yEhw9hpjZkzW4dENJUHbhKSfjBx6zLDYTPc19pERGM93aDYZ3mTg5ziqaaJHC6gkbRHvkVwVMcUsymTfjSraHbK",
  "key24": "R3DXJWo2vxy8TpCLGhvF3ezbvDjUWKj9bDSU4LSpeR6USBhNnhLch9m4VDR7PtTGjyKbUopPXLsefigWnPMuTa8"
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
