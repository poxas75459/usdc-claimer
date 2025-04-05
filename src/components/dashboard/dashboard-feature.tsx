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
    "rZ19SXzRPQMQL1cebDWYtMC6qdHe6gsjQiANCaM91dxFPCgzUPrG8tX5QrKEVgyukRtmBdDuWt8PCeCNPJ13bEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgBtzmRF2GvV1Bi8Gn6eqqskbQwkVXiodgcKGiZeaw2yzh5NwrqTwaXRySZ1HpTE3HNEn9xvh7jMEc4g8oaW2oB",
  "key1": "3oXa3kT1jWSBKpSgSE1QMcMY2GCWB9itwDoYxtrA1mjYRXM3DHTsRdAbBnD3oB69c9ByzzGAe5fTm9eQ8UEoBnTf",
  "key2": "62kFVnfhsbWx82AWSaqCJvBFXcXnwWBN6CRW7tZwVUsM4C3FGyCLnRhoSVpg1eVji86rwk4mvTTjkzaPRtKEgQfS",
  "key3": "44QY7ADagD79aPjySLBwEoT7ty2ooLVYBnsbXkphsN33qU6wp2E7CPZmYo8HTfCQTNbKthBCWUDz1xZ8da92Tkwy",
  "key4": "36K1qBgpvrFpHLGfbVPof9cxynH8VYtf63bJWRJJAgL6kBopAcfMYabc1g3j2FVQAo1Gv8sMDFWLYYs6Mjog1o6G",
  "key5": "9cCMwSqM296DMbze7GxqeYe2FFof22PMXTjRG89u9vjdX2epwmE5LRVdNZAZjwEPXrGWPz8B1Urc3Y6qK4wYmmD",
  "key6": "3axKAgX98z6KJmQZhkrzGdfBP5gtmshgJDxixKmRnsx3hnHmsuxBvU9ct2Uk83DzBHVMMQQY54hpAJDjwsrtohsJ",
  "key7": "vZVXH7TNbQM69YDCaeCdEy3gHzCYi8c7mfJpZvRBpDSUYBvotB3vHEgrFPQxMGf5Qhj5fvZHErDNii9AaMXFWhj",
  "key8": "3Hu7qkwixMeL4a7y9LQYJjkXLnWyCFNUKe7eoEX4tmhudxjxf2AnRrdeKmQ62kVnmLZ24UL9tyR1qHKEJ2BFjTjW",
  "key9": "3s7zLUZNnRi7Pst12Axg28wfpArVbc1uMw9yeJU9VC3Fr2V9jkELVnE4QGZFQ1RkG11MwwWb28vrFpBQkG1Lctp7",
  "key10": "2awM93rZQGPm547bJYqxkR3UWuaSRhUCVsGgdqFWvZ1TEjkKbinwEmqVPsCoYNbzK1qL6Ltsry5GLEJDQaxjrtCc",
  "key11": "57NUS7AA4gUJenA1EyGNnTVY8LS21Rmue7X3pcVVoNrq7zD9QmWW59Q5jKUe7pampDft5rEdhQwY2GknYndekcAS",
  "key12": "5PBjLC66xWcrz9KUfrYVCDB9Eij19hr9wpBCnVTcxPjpYB9VcRcTCk4dmW6XfezVmRcod6JYBrTV4s8dWj6L1uF4",
  "key13": "46JmbpzioupgqMqJC9HrDet3rGehwbAjjxWj8FU5ZcWKwC5tt4wuM7conk3Jgj9NQf1eXn7Nb1kP3YtgxBFAHYZP",
  "key14": "5sPnX4uKtw3aVi6RVgLh2GDNQqt2jrVEJffC1PVEg8SF8wuqjKz5jHNtzpKFeyF859yCsH4s7VP8GjJmcxbaCfpj",
  "key15": "4z9nVYvtjHrHeWkvs48Qbzwx9qid6Gdqozm2fUMcKP5nbdaYn4yyBAuXa3j5M8GJQN6ZK9je8NWwd5ZVxSynufJx",
  "key16": "546iqftaB5vKPh12TJ21iTVwYnnbpiKbN1dpankhLynmVFJC3ZTYVztH9QN9nJzWTs3TJvZVWbxxosp6AYjs64Vv",
  "key17": "2TCe4k1a13yjjNCp8mQSSHuLMmf2Ro6GUrVUHvgPM5JbdMheZvcQBJeok1ubEuXbGRoZtEjouSx4WShMJyYGXVBu",
  "key18": "5MJq8Tzu1uqctRV3oiCCbVtiUT2vzuKcL5RnMY1kDoqx8iHVdEeVUbGMNauHTreccU2bEZtm49N8xRH8dys92ebA",
  "key19": "gSz6Kk36Beqt1RFZB5wESSNFUD4uaHHVunfrSpCJajpyQuPki8j7yXCqT6aogVfe1FQf2R36uEHxE5Trwxr8GdJ",
  "key20": "4B8vPD6XmiAHFUpbsmi6ryyTpamCtnUDe2Ze1cXrdf4cuqJa7c9tk8NLGk3t42DsmbCszxkPFLoyVUioMLbhVQrw",
  "key21": "565zf4MAENXvqPZWvuGxo3E977t2DVyFrpX1S5sr2eVyYpRkXBxmtFFAWjpnSXhpx2iGFkPjyTLJoREpRMhjqF2h",
  "key22": "2cEzaXmFpQUw3NzghAyx3tp21guGwxfdh5uM21JPzDq5VpZcWzuwgsSY1sExUVAvsxuNPCG6AC5mFn1cUnfnnfQi",
  "key23": "2X3XTr2QZkbgqweUR1So2JuVUhcdrn6Busgw52nNnaooogMjGN3ZoCGfyQx2qG3XrHJ27maRp128eAfzEZaHNvUi",
  "key24": "5KoKLLv6q2NjhRzz65dAyr9dffwhTshKMMyi81zc74gTMJ2sEZovQn5uZ3hC9KKR7bZeBz8tGwfMtXPuJFhVJmVR",
  "key25": "5nSgVgF821ZqKgDEPogBhU2CD35DttDHBKKsbCqTvtgAEnPXh2kYegKtyY9dh6jWbbKeSMbDtqbL7eekgEr6tKyf",
  "key26": "53zQxuBk2j9nZLkdoAm9cfhKQXV7BSkAh4i36pcsTuLnQZyDYwkTAxP8NbpnTupqZfyvphyYssXjgitKbiRYH6LL",
  "key27": "jcM2cvQYgKaggsMfVw34HCD1ToJSjYQDUxgkDt8Nt3amvaR5kbmNgLKiMtauFo2Avy7iPnqR3EHaguBLWTKVbG6",
  "key28": "RhcSSAAqWywqTj2gfb82QGDW6pYvpLLnoQx71kQKo4ndXUf5w25SyDojaYeg59SyM2mpWWC2gXjUq7i7TF3wgPt",
  "key29": "3S4tp7h5uj8Dq3ppCZxSVRZK7RpXw814i9eNB2u2W6deociWSdVj88rHM1VMyxwaCrUFP3DpHG96BDmHfE5BVjxN",
  "key30": "3B9PLH9xiVXwS9VSbyNQhfirEfEsDKc9JDVggTeCVRYd6cft8n1eTkoKH2ZFn56r6Rc6qE37kpVdVkr8FJAQLSXD",
  "key31": "4G5Wrwajt2zScMcpCLcp9wwnDBXDVCGfWCeGcYpJkMEEqjHsqizn1phSYntsBXERP2TE1ASeb6yLjBZWWApLPUow",
  "key32": "5VHd2Sevc4tTnqFU6GSx1i5mEdetj7TH9sYbwm6XU7sKahsBo9wik2CHVz2KGJjKm43JALPUXrXHaqoevbcba6U5",
  "key33": "v5fSEEVocBjQKScksNcz6ytWPHvs7nUqya9tjtpV6WS9BMznYqWNYo3dWZx6aDVNESS4cUdwEEbqK8mffcAqLok",
  "key34": "37ZxrSSECVfkZyeJ1FNqjYfUGpw2DxPpeVbvhQ4GjfxnQQxGPLuZt5LDKyejZDmVWVnpo55R2WXCqotg5EZeG841",
  "key35": "4GVxQ1yvpSimUWJtmzWucYRjEwNiWT1PbzQuax1acQhpYW8SCPVLBLs5DRDcMkHteKu84DMm9jgn7jAF18tw9o37",
  "key36": "4osznJYjhjyCfkU5xhyHgcPiUeWD3bh12ZaTgqBMUP8LLzyEoFeR1YzGixMXsLxD5Mbsf4rADQcTLWgeinDMA3Uh",
  "key37": "QMrJF5XLwVUk5HZHZuDF78BAXpkDk43bgb3SeiSUMwUQU7ssebFzK8UigNKuJ29uRrs9b5MNUxqw7SmK2ZF7Vf7",
  "key38": "2FK7VomfQgjAdHxPW6EtP6W8RHVw2bjXgLfaKv9h5vBrd3m577mgkWciyYsKTwEPoD3uxuX2XDRUhaDD3co6r2qY",
  "key39": "4xeNGHZixqjvFkTjMVC7ySihAzz38dC6hQgaAvSEsXJPdpSvTyU6QrQSP2ueww9gVX99jz3CqtpVMX5e643Wdx5Y",
  "key40": "4CgMSGxCbQAq61XyWqRekF6hatcamcVmPVHr1CSwZv7P4V1mHiXRG52oLxsS9DBfFQQwMt9ynG3VApDTX7Xo2Jk6",
  "key41": "4FtUfNhuXBD53ZQ59d3Dxxmo2uuP8rv35sGHHSBqS283rdHNaC1BFmuMDGt4HcDYjVyVJgo5hfxDP8hLarkgg2X9",
  "key42": "2p2VaNwMWHe4RCoG3mmpkSEpUkqAHamSYe6GZDDcDAieD2yA7s7PeCo6utcrC7DJp7tS6VRWHpH4z52dexRcoGym"
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
