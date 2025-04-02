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
    "5Z3JBpmERV1JpzAUCtrSzUavU6p9UhdYz9ZpfJjFsbA99SFRZduZmofm2rxEcUsfWzJEnvpiHs32Q42TwCsSWBB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTXALfJytjdpyx5rspMoFQifK5zrPotM7SUX3S5atV5dHVazsGS3rEXXYVev2oGGkqwGEy3a5eLA4XeJ6dZKXq6",
  "key1": "23XkNxMCSH7AcATtHFhk3wwrwzFJbB28D4KLhybojwMgtjVFJ46ks49THLAcC4A7BssmrW9kJpc5YuKVtx1jLeQY",
  "key2": "67fqp1td7DKgRoeJaJP7z54bdemL2YtX3XVUSURNQSGyDVgBj24RRpBo1ccMQ8HDk6mxjvqtyLipD5CioQGjR388",
  "key3": "31YcuJaBZ87UG4VYAoVAqmsMBfBpUofDKCXyQx6RoAFVhygwUYDpifMj4Fj6XjCQYTGrWJRQQSk8AXzeSD797J3a",
  "key4": "2h7nk2khxfKgbDiK3cASyjXWzuRSPPj6iETTtW19YwxgNppYKz91Et9ua8z6SJNnPQvm6qUk5TC4aQsS8a9jpxm3",
  "key5": "5CEpwu37MArWAh5qR6gF8oejGJ9T6SfHjpMscvDEDZW8xq3vWSKSezCgyeyPjDr2ZdeGC7DgCfc9kkg1SFMuQqwX",
  "key6": "3iB77dCNXqpH4UdczdjCWZNcFVyD7CdmnByr3DzV2R8oqviXrwv95g4JHtKXfFVsBQsV1dPWX6gBCxi7ujycJ6qn",
  "key7": "czNvTUtXSmi2Ggziiy1C1K3bzvrwaqXVHSuo6E2yXZUzRpcX2ojZh146yGKWAuy946irrTVrKC7A7FpkHRLD7vZ",
  "key8": "nriZn3RHD2saZUnBQ7FeNvqQtJ3wgpQ8co2gH2BSvMkt9nNrGKkd6w1j1cxxvQFHwyQnRCqFxnotSNQM9DgJi7t",
  "key9": "3y1VqLaZL5CPvbP5aPGZ9xj2tS1gia65zx5bxgBY9xwC2hpzztcghGMMsZ3SyYz12ZD1AKg6xuoEDVG6S7YVLmCz",
  "key10": "5RMahbGuDFbUAVFCcMBrdeCLoomisntPCcCepPGQ6w4pVqmoXxUGfnQjJtZX75SGe8MmgQq4FnQ2UZH6JjooAHGT",
  "key11": "5g3LT4MNw9jauSHEd3MQ5zxdHygRR43zMZoisEPYbVZTDQBKMdKkBr1hoGs4koUus8HxN3NTCBbeLFRacPz6JUp7",
  "key12": "5zZiLNZcDRYArhwNccun4qTvaGj5vi1nDDX4CNwvhzknLj9TLpwShQ4AMrEoQff8nvKWrYK5NCrUmPiRUhj1ZSm2",
  "key13": "4qMULb7zSy1Xe46vJEhgF8WWr9ZbTdj54RVHRSSjxLD4Rxvrc4PhiHn4vMHSsptuVk62cTy1ucBihyZ3YqTtmXP7",
  "key14": "3HDJdf4wMC6AzQyetXrNheEnWULL1iaiS7xds1ALQEeDCTqwnUXtGGBtV32wDg9V44QP774TCkAZN8yUrGN9ACKw",
  "key15": "4JsAhhXpCunRVW6Td6LLty6LcSyGGmXoMabtqWJbbetSKwDNDsyBTFFZRbDajiKrtnfducRgY42hdGZsbQEoEWFk",
  "key16": "4hjQjNUkepBKq7fyAnq7VweuGym4jhnHxX5oJYpXRLyVwuJNKSVdhjZW4sFvubMgiNpb1yE1Qv2GBFVDPkGufzaU",
  "key17": "3SoQL2x7sZ3h7vi54oaeBjj2ALhEbiwFJuk72aADRyfZyHh79x46beeRuJ6fzSRmPLjR7y5FkarA6NQpw7BSMLH4",
  "key18": "4ab8zmBYZYm9MbdJe8FjtPxT3Ks6dbGR5SyFMq1t3zMkPmCRi2yThJC788KExPYapFAQpUy8KbUubXbkanpfNtck",
  "key19": "3oUvXhcdL6pYC2Dvs9L2Bsh2F8Hq6Y2D6dr5RY17W47zjJptMsfE6b8PKesgT5EG2gVJzvDDJgvPhhsx61kyyQBK",
  "key20": "d7xUEkUYoasoeoDPK2ux2P37UmyF9xKvz3a41JT6CT6vq3BrZMePPNtDqhNvhBNgBVMArJJRToxbCxMTxr5ruNQ",
  "key21": "29uEAdh4GVCfccu44A7dvcUtuECCgUpREb5JpAe3z4qiy9vptTo6PNepKLeoTsuQQGDRkQa7mUsao9N2ULB2oURv",
  "key22": "2KVbRhoHRs2cxzDRihhoPMzvFMRF4dg27wdko1X4svfNCdaGA5mCbQYWfHwXEB8BTgyuhFUZpKRY3ECr47mL2J13",
  "key23": "5yeXuRnA1Cb2sXSKDHE5nkhNsnLtr7TCk4BraiuUdjUnY5NUKEexgYVqVUTuvTHxS4NJiGEUN7M3RV89E2UMzN6w",
  "key24": "2PVey67rnfHChKzmmUEi1ys5hYUZt4vLBocQtiQZaCkE5zBUCPtwaBNq5ciBCQauo7iX9m81FovZ9BJmgVGFv6vm",
  "key25": "exKjUrhGn3m5XCSt1k9DG5F3VoDdNQ3Vin9R2D7WG6nbshHKMaUwt5neQsVcLNiYP39NP3w6yFeP3GfFri1euzV",
  "key26": "o8T4UvYfvQrmvnh4NQm1VAJd7FzZNVbAkL8yoUyjaeNAxPBgrbYrvtCWQ9LYTcdF6HHrahseCAH2nknzYnQYFz8",
  "key27": "5PSvX8sgsBR7Fc1wJXzGhFa3AX7QNqZPfdbvJU4QLhqUn2jaaWULvXPomtxS3sQCpjmF2KcpxMFSFXK2FZobjkbC"
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
