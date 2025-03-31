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
    "uKGnSUNXCHd7pxKaJKGkHDpFLdTYRxvtZff5YGvnMP7uAA156bVdJpjsArpxw45n2GNVZJwuS3gHqAq3q2U5gQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbUeAvC1YxMDERZBhodv6rQ6yG3vYqhJ7ricPfo9Exuxo9XwRZcLk8T47U5qa1iZapk3ecgtzduhHssCcdDL2ej",
  "key1": "3LNspgF55Ka4JkF3uTEEEGnedgxSQPPk1A5Zv3yAp9PVh2WzaWqkPsbAqvz6cdSDq4jp73dkJg2ryaeHWdpDPNe1",
  "key2": "2NnnQYoGX5EixoADhiW1mAqKvdbzFGrnUipZqibRoS5uk9c7x1meFbdi1bCzTVyS9K5ojRFgEBsTbEkrhA54D3nb",
  "key3": "5R28a3er3xckC2HpyjqS9bVJWnBnZGaSjjkBSYKkekf2iixNW515AMfEEtUMiuaQKLHHBq1mGcMXW2cvUexzYowJ",
  "key4": "35Yct4qoyToZDdZxf69PVfhD1BmJApJAhQTHEfZRrrt6Pmp5yeaiDRgCi9T6nP2ZFEjZ1vmtmbGAkC14pRHZvgoQ",
  "key5": "4zjDGxSRFrpZh3eN7pMvoYv8wSeR8rwP4EKTstB5qwHFcPrFwZ3Csp8uSjt3nqGMMcWJwcKZKKemBJDoCvT8zr4u",
  "key6": "1qrWfUdxVPwBnXPL1nUc7CwAXuuLMJGissRA4PzqjjTtPANSvUJMxvVwJgibTWtA8u87jZa3FLxkCE86EWL34PN",
  "key7": "233Tc2rjCAtKzjUyUX4txFRzBWzxtJEtRPFojprZbJYUkvhxZQ8rLihdw5mpGquuT2og6Lf4VW8rka2D26yx9Lxo",
  "key8": "61Dy7SWEzG3hxTxyfhCn9S5EKNa44FSQNDW8N136hjdxCThy7VgfixmCnvT5VnaSjdcRKsxvePfRhiJ5m8HtSKx8",
  "key9": "3Mes6x2s8sQwCrx2AE1XLgays9S9w6WbPW66uHJS9p6LpjBeLCBgt2UYxK6SJC8H5MHjxWnNcXEBuyMVSFHKafuA",
  "key10": "5FGaooJoWKYRdVaXK7uqHMERd8bNVJZirvMpgRM3afCXA29xDKuRE1rB8Ge5qesb68Z2YLzUFeywVwRQi8He9JLR",
  "key11": "3tADmb5uRXwwJPT4gtcjKy7CUWB8hWdRrwrmbV2R37KHPPV5d2UaUcmY4FEgDwzc2iAqBPXYLEhLKya2GuZV4rAA",
  "key12": "iymM22us6tEhifZYyR143d4nehWvBGhW8fm4JJyCpc7FiWjFuig7iEiPXuFPsfPWoYkfVNZmyk1QmPrty1dfHY4",
  "key13": "2hmKYqDArAVD56rBGNk5hJfKhK2omHBrATfiCsTjS4ars3AyUscMCoBGA2faDVFwiAxXAgxMV7Hs1jKuaSF9QDak",
  "key14": "4ffnkxgBRSRHizx5BRJq6kASqjjuHXrYbRFhwmJLcfCY7C4w5KgW3yAveapAWKPNrZkwaysaaiUKxGNkT3rruegM",
  "key15": "32GiZF91GMkrMD1AY4DrXjuoXtyZgYDMuvKF1ckVMNbNramYRLvUwRfJLxkcyMAaWP613AGx3enEx5zUe667jpx2",
  "key16": "5tUAW5QzvvWCJ2EPT92r2t1eevoVejS5dH3KHMHQ4D13GqRS3EaAMgQQrox58KyvG61xh4Qkz8ss3LCCqjv78aWo",
  "key17": "4XCCjd1uZH4g8CXnHhbGPwVvBviw6ECNCActLmVJvuHrP4dvaH8Qr3ofK5kXoCd2jdB8fTQE2UvN79bCWYhtbUiW",
  "key18": "5dWqa7saRr7ieYzQyro2aDAN7AMUV4hFjzzq8j7u2Rn3SvoCpmkGuX26eoGC2t2RVVnHGE2SGtyB9i8Z25iN8BNm",
  "key19": "4yWtGWBexSCquFX5TGBBNitVt74gn97uT8UUin738NoUeNkNWhwDoYTUyZsG3Wrr2W3uo57zGyWCjdmTJEvbX3mL",
  "key20": "56gRqdBPtR918AGD5TnWjRya5sKyRLTNBVpzbYhYaQcFX8porWc8vaun1foGg6CVoW6WXjxkjfvVcVkLpZDvRjDB",
  "key21": "iRR4EaYbWj8yQdEf5btEPJ8cT11os3xpmWr9oTFQpSxaJp1yieLdXw2ANUqT7ten5ZPnr4bnfQuQv3K39cpFd8N",
  "key22": "2vPpW1jfHPmzJUvJzzgtcpYqUckosad1hpCLJKbjxL4QEfvsJFCToUfVRNofwSbi7ujKCPc64THVJBnheK8w3EYc",
  "key23": "5G9ffU2TpyEUPdrbXvMfcUc5w5fsmdCbKr8aXEB8R6sWApLvVm8HNKMbHA9wVYbWsr5T1fwA8i7kkNaPYkFLcWLP",
  "key24": "kPHe95wjFV7as86Zg9vWustN9vMrggKv1t8aourJJtp4B4Qb6vUQ3tNWWCq6cCTbfs8CgJJnXeZWBeYnsMGsxGt",
  "key25": "3HrF2wowkPDZ4q9SXdgGSwb4p8MuNzxqxt5swjuBuy45VRDqwPu2w8oFL63qqgGwu86M8pk55fcV73T4bzmuNgUt",
  "key26": "24uHEfpBDyp5HZKeh9uEMsnN7nNzLh9XXmqBPZrSHShqnsk7eTWnp2FCfu9DN24Lm2WRtALJ5DDBovS7JQgvs1ZP",
  "key27": "XuqNsa2RSmitoEf6SvNN5Kyh6f4BBp5EyaWozJCzX8YLjJYbRzQJUFePVrNKvTKiW4g9NssXmus5HR71yuZCJWA",
  "key28": "3igwyYKCxAt1DS2qGu1SBCLuidwPYauY5itLVnAEZtvJKTNLD2PhhyhQQVB1mvWziAHiht6xM5CXMciDULuhj59a",
  "key29": "5F5AxmtKpa6fk4tSAftcqNG6jESRAb7TfatyFC5Ab5Whx8txyWgrxUqxh8AbGrrfSKY9rME6UjqpWUvmKg4yHkRr",
  "key30": "5SswfvaAfuufZ4jnuEuhQFVFPmtRrFasfFyyAmmbj4DZEUSC4TsFtXCAgXghRNbfsdphjrdMamJZuBe7Tc82UdhE"
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
