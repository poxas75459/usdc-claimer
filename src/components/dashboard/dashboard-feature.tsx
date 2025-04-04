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
    "4srxdAdENkpR373mRc9zo5N9j7dNoxwaN6PtDXXMtcuZcQsR5jmjZQyTRtSJgtCo3cQCn3XX64n8i1227UpzeB3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L11dUgKDr5LR5RKjRhob8UjT62o9SdteJhcS5YbEhbUZ31qZqevmSDmwXMt7KdQU9qk7ojHrqKnRoFsH4MQ6hL1",
  "key1": "25vmNvUrvo4o1XLWVLH75G3YZiLwhssBwtP2QTj471jqmfmxJS9jyXspcs2kjgK2m7VYQ2j3BEBy9HHFEvYV24P7",
  "key2": "QDxXuGXpeEbvKYSA9aVXXhmpb3PPoqovy2JJkJ9DQWTK44nVgky87pgU9hwEdqgZGf1d7t9xWZmYUFsSWT3cXpa",
  "key3": "5gA9vGT3X5SEYNcCf23jjBr2m88Q6McsLE41BURL5KCLdqR8efX5th1Cejf21XtHpQMY48CrkzXcthKnD1WAR7kA",
  "key4": "8SeBofwnttqGorSgtczRkRkJxqQXh2DXWxTryizhuMQKvXkHUKB7Gug8uv4Dbk24rof4SrCu5vX9idHhxHFN73m",
  "key5": "28PzcTdULdmEL5A8rk4xYzaEBihLh9HpSjhpryr7DinonmY57y8nkbrm8MEUJoPXjtA1fzTVRwNFkGebiVd9Q5MM",
  "key6": "ZMXM8AFYUqodz9aSoeEy4Sj3xD6ResCSen6KxWd5LWFqos1N3oLv3jGaY6Hr9P1549qi9ZwcowJUTgSDhu8YZt9",
  "key7": "5Hm5Dc9CETvWC8XdQrJS3EFRVw1SWzbBPo8eqW3NdU4L8Cvta3FpZqkmEdPpsFuBXXiV6UwQFQfft9Rfg4jdnLJb",
  "key8": "3PkiZfqAadc54FPZd7GX9H8nnPUhhPScmRuouybXkosuDPc1kHqcb2jHkFFZdhBCLsyk1kemxm9WqDC9JYyCdFfy",
  "key9": "5uvKSkJMqxgy8HcKyfVnDdy5pJTnVUoSc5De6sRyHj27DfJTccCUDTpfn1FMc5irs2Rd6G2hnwBPYRWEVbpBjgLe",
  "key10": "2PAGVGFVfDTUpKunkrsZMAz7w99xnfsyRivrtHCUGCAaCetEJtxjR7HzgsaYbTJJ1EQS6WKgqsRg19bdYoYohKu3",
  "key11": "2fif5o6iWUW5PiWrgvdfgTFGUgxsHczEWUFm478Yt5EBNfuiMAdNaHDaf5qLpzLrNoPrXtRqYs2NaYbTStGoRhiZ",
  "key12": "617puw9bb2zSc1A6akj3Fjjz5bVJxtWXQq8CJ6AVVuWZkFF2RFeUr1D8RYn6N5bat6jBn8PqNdCU6JUTSRYGMqM1",
  "key13": "2ETVem6Q8kwc127Ab4g3gKKtC7urpjX6SLVsLEPq13soUcsf8KqYuJQiuYfra5imAhbe9ibec1BMWeRsBbnuvd5M",
  "key14": "2rYDZecRDYKJcSetDLkxhcyfMnLbWEhHPhtUeCSDJGfXCtuJpnQ7E22SR3pvLr5AgVndVkGGBbAexzhRRSAHPgii",
  "key15": "2Lc9vW7suev8RsWaRr841pEjSDWSrjsKTgcz7FPmYtYy2CDc3KPXYyeF27geVmKLeYAPSciR49deN31vTGFhe1HX",
  "key16": "4jCmkL8vt7LBVB6HhTMqTMErzny7BuU2qozv1wopBdRqqX2LL1RbEuEoiQBTePMieRnHLXFMnRFXufWHqom99ihx",
  "key17": "4j9FWTnXGQTSHLKuZodx8k7oQYrxsQkEuJKPyp2gGQVQMpr3N4mJ9px4ATspg1hN8ZoEhUS9MzGV7oERAw26BKoS",
  "key18": "2byJdZuwzHZwkvfaFXAFkxBRmAr8s4gCGExPoYDeoLXmpUU3HkW79rkNhKYrEv9o31rQEzd1kRQPbgG14ShPnHqc",
  "key19": "3u3WSgpVkczxAzcd4Hj1DYMZM1s9kh7QSeKVZ158SEL6TspXic3b8sYFnG6pM515qN2nVHwGNbQrbSRHergnpipT",
  "key20": "XiLU3LqLohEvCDs7g7U1FDhkpa2kHZsQKbdNr4GXZjk32HJrob6q1yL9cNjRttnFf93pfULwhfGVogFCBymPrsh",
  "key21": "4zBFXJek3DQkWymGJu3qqzba5iBwULViHwsdR35ZVJB9guX5F8axcS5fhj3FFATXi3PwauAzWBwSgXDsi2yvA6Vi",
  "key22": "4wzMWfqH7HcAvHXrjZRcegALkBDbsFkS9vZL5JA6Y1snNSk2UB6STCdV1eCffzRRpDcMKuXrG3vxidDKEo2Dmnsb",
  "key23": "4ogntD5xc2gGRmC775GJeUKBH8oc7HBK4RRz3m8QJcV3aSyNzvDeTQEWf7maNhxpQKDY7eiiNbmnjZaPchgFkP7P",
  "key24": "8K8AU1wKYmUN3CVLB8qzHQf6VocV3JUNEejdL3kEJsSWiEyjt8UQH7FsYTXKXmfAmvpENHuzNuyPniCRGe7Sqwk",
  "key25": "2REbuxost5ECANucKFU8nqhE2Muoz969Xm2WfSsT1rDvdjhmreTu5nse1SspmAT1EhdYGkQbhgdZYKXV2DUuJGEe",
  "key26": "Fqf99vhfwa7WAVRH1S1AHWSGMF1vAWktTwsyu7R4tDgdwwhTKT122WaEEfxRbcD2a6GvrwzrgdoaFw4zmEdv2z6",
  "key27": "3mFe3AfvixPJ27PeAL7QK6QbMjJEVpLUdUdqRupNYUiUKg7GGmjsKgewFwHkBGNEmVx5WKwacA9NWFRiKeP3tmM"
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
