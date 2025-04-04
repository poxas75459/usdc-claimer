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
    "4RZ93kDhbJThXQaTUYe2yDcGKLwKPzZ7mw1Tb3TTrmtTpsLMfEAZKsiU87RRZd1Ki5Em4izgsYzt6aLKSU1HGA1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvew8WQeJv6FUH1zJwugzNyst3tFXz4wrysx2cBiB4Mo5AeXVci8JKgcGCELEbNfK21z7D7uSzawxbXbQVC9bkw",
  "key1": "5UepfWCSuYyKYU8vgehtxqrt46GbDCNhYhbV8w6a7XgahCvDUgRM6Xz8KVZMi6eywxquaDDe22bJ56VQGivD3AhL",
  "key2": "NHGaNSpX7WCz9dxBYgPPUhm4n4C71WVh67PM7yHpEB35yU2v9LRjZLiJq5DNt1wX9PjkT4PBfJh7os3eXPwpswz",
  "key3": "wpKVz3fJWLGPtJvD781V8EiqxCk1VwmQdefxgYGffp9wyWydT9GvzHkx5rypDAkv5q5f3mjVbeNshEgbn4kthSM",
  "key4": "5LDPqrijusxj3HJGgiETp6UXNHCxcHR2p8BynFDAW5uWvtpQKNwJnv9ae1iGFx7cuC77Y9ZH3DmEm8e1cYa5QnNd",
  "key5": "2SZTvk49AuHxZo5Ak8W7nKjVeJn2T9y6Vr2nGQMYuvEJXLwDvHUcRTQ58bCn69314U92CP81VSLLYmMhBPwd5GwA",
  "key6": "3sPfM2NVPTCK596kighRYC8rGWuHp3W7zcMJrZB5JWcSGFEqdLeEEpJDtVWkcQgrXQRdy1a4YfkJ2seQJuoGBUFB",
  "key7": "QiFKz3cd1aWE1GpZd7jfrrwCL3313qGUZ4RGRqZqx3zfbKhoCrK1brUj7smHCERgzYq71JPvwxxmpVJHjicLNp3",
  "key8": "21jtkynpjRqMWWjDVi6bCh7HTYp469Egussv6LvgHENBGNi33BmhWNYLBaCrrpn175vFWDuGBTsTgaGoJecGtcKy",
  "key9": "46aE4dyGPMZkbLMW2ncPttLCxhEQQTAAB5SakC83kjDuVoApodLhwU48VmUEdpdrqa1ui72BFRVUzEGr2FGyZqCM",
  "key10": "wdkkbis6Ur2MWQqKw3HnFW5Z7LRG7cntibNhxL4EAHWQYyg1zmmPtZ4QtTgwqZPfzuNEXABc8wv4ybBSH8Bkagm",
  "key11": "4FRV7CKZd926acy7AxCKD2SVRrPoGR4tuDAXjnBQdJes389UGz7MjNLDPsCPJPzr1YtoyeAsDBo9cXLzKMamHkDA",
  "key12": "5wqqcx8Ja3D1sQcWKpHPd3VNaKwaYaB8RzwVdohtcjFTBihHiYJ9rDcvgT4Zw1KmrnbHdJ8wa4nERgx9eReJTeW",
  "key13": "3QXVDje1sGWAmT7rv5m9p2Hb4mcj7ZuTyYu6SqvmSGVTkZ2JBeCFZhCcGfTqFTCuxDvRCdLzqkkAyaF1kxmHs2Y1",
  "key14": "4VDRUZMhVyDAXnZtYV3ihc7VdGxd4VAwD3khAv1pf1JmfwnuS3NCViBAiYfRdxmhajiNZTi1r89axd9svxL3PN7p",
  "key15": "5qx44jeCePrQ8S9SQKUSZdUCj25M8DgRFEUHmtn5WfGk8ESW3LCU3QpyG91PzrczN3mu2eNWvTNnEB8WNGdJj6TM",
  "key16": "cLhfHGzvQ8vmMKBuB7bxPRMfKeHmaCsMnaEtJnLcsbpqqH1mwg78d8H4aXhDBTnRA9E2bv8yqcbExUxmrGuddUN",
  "key17": "4agEJzetVDJbz8gtGa8caFVHNN1Mbo3iWhh5WoNRtayVpKjTcdUjVf9B5Hr5dfJ5jFbRvhoxPPmoE7tneNs1ciPa",
  "key18": "2iGHV1m4BVgzBDDEXuRbdqS1q6Ra34PoABCwde9C2RaKfj1wcECndfEDJL62kegXJytmnrx3MqAqdUUfHPRbkUd9",
  "key19": "3MdHjnfmcPNnFzSgjJfTyxNW9xBsKQTFtAs1jS7EpTVZzwy4qALcaNLd5CLmP7u3ag4Fqh7EdEr8XrsCVbbfq72S",
  "key20": "4khCKYpkiMXvpJHEWJuXtGaAaXSYpH42GhprEfe5KxZsnxDqWrEsvJ5Sfmeey5SVoivJjbBNxSDrKFYCBcrP5APx",
  "key21": "3JFTLecNTLpAaoAby1Xp3P7o14onMDPLdGKKMMGdFxywGNqQNd8WnndSd1hA5Vo6Wwouv3wEEatqAJWvJADd4poA",
  "key22": "4eu1JEF3VNBs3MspcZ8ydSjAhxnMm42RB9J5doh52Hp9kJRZGHmb76ZkkBs4aUHNQhSEe29mNByGAK1HruUrXSMh",
  "key23": "5PHR1trQ9KDeELxFUWujZWGLNkFKC4jruwtYQUdyNBFYiZUPv5WCE5sfuoCcmSLZ3y5Kb7x3ExyUKv8Cx3UQdX5N",
  "key24": "4MpiC5yUHDf64vktekYKTEGjgfp9ygTtB3xN8t5QWvj1k9YRsinuhkiBArJy6yQKTksqRPHNXYoD3H1P6ig9Rnku",
  "key25": "2qJdov7KEt4f2ntDoyfdgEVQaZSDUrDEM3iRTutbWbHGQYuS4t48S7aAzoGeyjZq7WygB7jeJVP9sfH61dncbpop",
  "key26": "dbYWJ64doUpTPRM4f31hwFNP9iZx1kxvkWYQV6jQqckEwN9Lm2DPnXawsimF4KG4gsV6hhe9F9DLkMtXjAccECs",
  "key27": "zXPsKoDxMuf6PSQV7GWnNbnwPCE99Pqq1AvseGePpDqgBMgXm11wPR3Wki4wuQ99ntXTKrR28LwpW716HXHsH9J",
  "key28": "5hhRXCZXxPFCJ2vmE9iQAjKYAhoWHmnszphSQyAgUeNwGQSwpJ3pdKE5iDAi7CFqkvH2v1muYJaZVp4p1ri7M6hR",
  "key29": "LwAmZ78m8EoSDbJUv97HVLTtXAV9LG8Xx1hKSxiY69TQwVG6B4iW4EyvvpRF7MogtTqbhNY6XEqNRJZpUgqahVA"
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
