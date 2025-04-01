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
    "2MV9VhsAf5JTbcyE4aG7ueBUiADoAm2VAxv4DfaA9BiCNVzRfpb2Q7XhnfoCDNmfGNU4NjGmW2vF9A2s6EDYumHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hysJBypdWhxVMoe7wP2ek3eJsKagRahBQGztQKN63Jp5bZ5Amyrn1387PZ4oQN95Rk2PFKs3VzjNdYDyoJaWFCE",
  "key1": "6U6yJJaQ3AFkKFB3Kh47bwKCkiRgsYGKqdL1wZHASa9yN7Knu4qhtKJ76U5NFiZaNrfiDEikZVuaZtHVuSxm3Vs",
  "key2": "4DqUaV9JLsQwm5f66fQPYAwR5bMLBgR51JiUPHaGK497CDYmJZL5kQAs5dvsS8cWtXaeJBXrZe8RJsEC6SLkG5TX",
  "key3": "2EghJHNH9RZvhRoBnuovp4sybbHMjQr99vVsCuPxvBnEZN4N4fGJXzFSPq19XX4FjCkEWxrB4mqNvADgpTwApC2X",
  "key4": "4t79zERz2Zf45avs3oTQRYHP6u1NcFhHL1Ux3nzm6oGKWSAExC8RqWkQmhknC6WfsGJ68koKHwCQ66EgW28LBDXn",
  "key5": "7jWkPcWNkgH1tnsyePvh4J1ctkWYxUD9SLXSZLQ9opkUUKUVzVsM5ddkfDnecfaMdTJna4TX7UG1tQntuP9tsMs",
  "key6": "3b1EKAqZCVp7BeYtjPzWq2KKfVcSpgVSS5E3QWTJiDxoWocbAwb1qKJ5cnSSCaJXr5NCGgKdw8Uk4e9VYdk4NFJh",
  "key7": "5PoArGkoAh3eQAepwmWPQvgHG9BvM2uvp1LmviCY5qas12SFhpAeNBiToGm7R76sWeakWnixJE4HwFBHJUU39aqu",
  "key8": "3WKWkX64DucJxzQHBmqW9z4ZYtgAz5KTcDQFAqru6755WyATAeB2uJ9P2tMgTyJ4bERwUVtWZYTgxBgoKhbr3UZF",
  "key9": "3beFhh5QEnfgcHew5uUXocMvvpWzNdzErRzLHqFasUKsAGvbocEaFz2LnVQR8sgJnkYESvtnrNxWbLX19jtAHKNa",
  "key10": "4E9LmmZrfbuFpbEyLHzh1rsJQrShJTpPLxaNqxCJWANW4N7x46SmnEmNnUuyV6XNrsB7oBHLAs3zSfKNXN5BdYbV",
  "key11": "3dBiDq9meEYtaW3yHDxvJuTqL9XXHV72AATpXPz3RA7SretUmRDdVwd1t3bajMKztpd4NfYKFyb3Ln3MfipxZMnk",
  "key12": "5MtRbwYYu14BnKr5gAcRNT3dW1afzeJZp55SChRZi2ZATGznPDMsPTbzGAcfMqhsA6fQF7HNJUW5fFfNR7cSKrQP",
  "key13": "5PkVo8GxJuDb3c84ezhherDoL6362qo84ohcEGB6vnnxr3cVuMP7Gsf3sZTYrp8P4SR4RXZdTRDNWBntKgqwUHwr",
  "key14": "3ARtHj77NpweKWbLBzkcThuHSvwHfvrpigCAHTU75oCVswDVLA1ia98Uu1efjYh8tcFUD7GnXRcgtTm4gH5Eh9Ah",
  "key15": "3F1Bko9ESewfyuCPpzLa4ppCgWtF3h3gUWPpzvR4sdnvXjS4Cgn1g3VLUYvGrGfk8qQNavnPJF5Gx4tpiKce6dVH",
  "key16": "3FfRzWXJqQs63PWZVVG7LBvdHSN6kjYigHm6Srf8P1C63uJT1Wgo9eKCqLHsoR6b2B2YvV2ngEhzN69h2ccAzEeF",
  "key17": "5eUamWpah2wTNNYoG29bKV7Rr4WgcDEtFia9sKaTNuPcDDAzn73tAM9HfKs5T5JBD8vLa1xH3hxt8a4t5ZBVuCP8",
  "key18": "2HfJMFUuLnR2LdnWzwFtkysoY2baNyfmHRRzPXWFpuvSgJApXdHxrpkHJLkGL9872wjgP14s9Rz8YpxXfWMaDG3p",
  "key19": "48KQRCmLqgk6xTjab48tuSurcTCKQEFDqEdB99HptzkF4uJ2k9wTQbjNY6s2DZjkbj4PKzMZCgVsNtrwgPKYCHMX",
  "key20": "2SWCMGi3ix2p8kE55xfxbPzv6uVvma35cU9ZGgCAZdkgHRW7wHj2tyctGxNZ68u4R9q7bZDC2HN3ARJ4RozQz9E5",
  "key21": "5awzDvLpefZnvvwRYCbMyupSi2CXSj3qSBq2wcqZzzTL9AFMpREKvooHWQkLseP4bTgmHWBCSB2g3geFecJXRFU5",
  "key22": "2yJqdng953K1cPr8gNbyhMyTUNptxgBvTRRWECbpgZe7oZPUAj9aUTnrgdncB3p9zLoBgFq2CqvLQvD5wvAfug1W",
  "key23": "ZjxEVv6A2uUUspLe5u3ZYyFnAnxjyRiK6AF4dk3oPmpsZ32WNvRx9dBeqBeNktEKNSUqFWZHcXNPsYYP2jDnZ3h",
  "key24": "2Tkv6aR2EyGrJKLta3erS1NtfdNkXNy7kGyghnLV4jUjviW1zSSJTnK2hQQu9jceiQccm8UTaUWfHmZnnAiwaDhh",
  "key25": "2qMFo43CmovBoVFAPqP6DFbSpLrt3ELHoSLEUYhPPXwNndinqeLM91g8dNpKxtmh5KAqWMubrGoeT7KKqR7Gvi9p",
  "key26": "5RyFjRNfSWVMfh1uFwzhTVAaWFUAkZYR9wKmjuUVZ5VB2LdXtB9XtQD3xWDyjA1NizCLWoBU5zJKcmnb33sG1LVd",
  "key27": "4q8dnBpQ5SVYAMEf8ZJo65shSkxGQwmy7e4qPbmeigSJXnXk37XucDpNyR9bpG6DuDk6qMiaPc5JX8azc1zqHLCs",
  "key28": "33tS5m5WmtoawbDKfaTiqFXRujN2wSZtXpMF3Wi5PJ2fwVWvsZ9nVa6gGEUNzqDkHdDNSb2tgd5MozHYRLRZuptv",
  "key29": "Tec8GtJsVhfjaxRsAMqg8fJfvVJmxSXrp6rvWQ7MbtJPunneX7bdGVMpRecEN6TCL252cgnHm9Ybo3FQEvZ332Z",
  "key30": "5yv5UMvkNSnzRgbJnFkGnq6rAxEtRR8EFpp9cTqidQLFEHFSkyLCofq8dCBLJicW8HXUZPC6YxLWF5E3FRm5L629",
  "key31": "4GBjzYo8ELwAxAkePxbx2NnYayrRtXDCyeTszv2r3sd77B5xdrP8j3z2kAm2Yp6wmPc4ZShcBV1yxqsthAUKLMAH",
  "key32": "2sc1g7a7SP7p1QM76Buxcnb6LLtkVwXzzaTcVNEjKTpq98m4Zi6hgQ9aZMJifu5xTdfB1aJLNRy5imxBxspqxCMr",
  "key33": "3G2g7NQKpxM9nVkwSamz92SAn3QFcRkiDRQRbyKQewXh6YK76d9gEHG5fNMcW71dZFefXpUz7XRPa5TMXwFogEkm",
  "key34": "5KbBZ5JEGPZjfWqzryBxLJ3MrYcHXxAbodbzwVZHaGfUsVCP3Ccxjd9VMnBgvPHH9fAQSpELyRG6zFCoYqBEXwqd"
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
