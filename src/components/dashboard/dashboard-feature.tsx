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
    "5qnJc1c1y6XLu3zaFdRg16CERavTsRKYtKoDdzXBepRTKBVxBejXrDtvP6K94nEdSa54VTYPwSwPwkqkFCo4pb58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ah3nG42PnSX9HCvgu6nbcNrEbsFXfjqJ78B1JNZU5KypGXPVaiHhHRBG8MUpkcWDSBj33qvT6Ha42xzXiFbXjVN",
  "key1": "5mtjQ634pgoutBxyCjyvsTG3A7QAENG4tCB6wpA4sfkgQ1yHPDbSNebY6XVbgJjgqkUs6HzVT9RGJpcArzvAvgFE",
  "key2": "fvwt5k9F2wKM238gYSaWhkNRedh8S6ihvVSxpNDEGncJDX1evHdEh5YbydkfoTxccwjyXD19eczpWCncMGajfsW",
  "key3": "2HF6bTnVncnia43y1mHeuTPgH1EzdW5phU8LDYnUTBsycomKfoe2jnDu2mHNwHY8SFLkCHWVrmzDPosndJVZc1Fq",
  "key4": "2UtHZ9cc1fMWDD1eUwtSqyRzSytAU1TxAfegXvyan8XqPvPngWVJEsrsYq4USaorEmxwFrhLWm3CA1C3YEJk7mgH",
  "key5": "4JQqXhYuptUv2QciXTuRd7ZKsmB8MQZyw27YKXdoLpZfrtuouHn7wmDLZwb4q1Y8XMwTYzYX1JjHVAYcLZNwdxNQ",
  "key6": "4aXBh7XbVde6dnDcxr4y9Ff4CbsGHpjakGZ9UykwskvL7QB9UKicfFx44726cBUFtEyXznDeszXUibymsLLMZuHD",
  "key7": "5DwybUoTSraKLfWyggPrzhHXJWaxU413P3e9HJNWGL6gGjXu95xZ6qQKBWtXi3tt8gCuJBr7SAWZUNtSsMAmNxnt",
  "key8": "3U8kSbk9z7L9T8p3nF6RnXpxKRZNwzauW32yBzE168U6XsGV9srZRoiqW5wUNcVo7YpLMqZ8K9eqssCVaZgspLMr",
  "key9": "45Y8mQASwrZGMQ1jJAz7Pd674Bvf45hJGbKZGhafedxzX32oucdi6DcvyBSbaMiAe1AQNcJtdndPbEL2iB5Thihh",
  "key10": "2Yr4GWnHcafrY3x5oCgkBtaviv5VjAxub6s5LuRsWrC3gkJLGLevVcTM4PfFHdVDj8tivNG29aHV8zzfyYYDgrcu",
  "key11": "515G9G92Gp7y5hChyYsDSu874R7TBxhisnL7j8vFLd1UxfZfv5mvAe6t3x1EQGEfz56D25yx5KbXV4sj9Kn9JpEy",
  "key12": "r5owZErgottGtgqmmrF36SAoKCwqNJoZ1CAwiJjRoNnRsdpBFaYyNaEbkaQHzaTxKkKGHAcxrVKkBexGaB5hAS7",
  "key13": "2mYiE7cGZjx5oS7mEvkarNx652BfFjnRW1kMcpKjPyQZ8CYBcrW2YVqE6VKTD11aTjkj3haMB4bygTQ7b4Zv73Ki",
  "key14": "2VhbptmdC3nL87UjH5B3VHPUXGkK5cDKYQaem4so6JmUYHY1NKFpoe4H5Kki1ZCN2TthSrEJqX7XkLFRRZsE4F7w",
  "key15": "E4fGhE9ooVADbHTSfxGX73tSf6ut1j24koVaneuDcD1KWLRoH31YcKck2nK7SqC2ZJvhY23Tszr3FMzJCnvK8i1",
  "key16": "2sXddA4FhUXyPkAoFXPC6G6U2HWpmZpUGmTWbSKzkjRBHZ724x1QrXk62QqAWcmNa6QCVHA8sByHMSx2jtfrfK5p",
  "key17": "2itmaMpS81euyfkmS7oYiDh2Rt9nUZBsspN2cNGF39Fdi8hHait5fbyhfbCqhSKAZPrYJTLngA8EYPoWuarWeoq7",
  "key18": "2Nta5YMg8rxmjx1fmY4a2cGetiWSGfd4bvikasPLLbQ5oRbQsXactH3yFGjPBRCY3jvAYyyrMCM1hQmFkwwi3a72",
  "key19": "DKnp6hjCaTE53WhYetYi4EtbPW6Uq6VxEwBx7BPQMAHcQSNKQ8ZZWee3KpZFcJbgaRJSutLpqcov2Mx8LnzyAqH",
  "key20": "2ufLHUaj88CsHy4Eq95qGfc8R9wJAZiXEqecWBUu61t4yWNzw9RqivqUwFB74YZ41ppudphdzJxVwMuz8e9y3pkR",
  "key21": "u73JuvcC22H2TypSLCydkdQVCabS3P8QvXMiLueFhbwF4WFZTLDtrprJ35xpfyZfL8hNvUFWNGbQFutS1FRpjfd",
  "key22": "SnYbsXEgacuJT1LvAXJGtEu3ertDnnu8RAVwNm7gLDs1isUjVkAFnqqrqzr3Qgzuj6RfTVqMJ92zep82zSCHAnF",
  "key23": "5VQxcRmhHdT3C9xBdC9ihVuciazLMeBPzmBhBqpjPErYDcy3TnpRryDbxc8P6aTHV29GvoEWL9aM68DQoj3XEmwS",
  "key24": "3L3zuWuUreVYDnkZfbhthASwTZiFCyKQoDd38xiWweKKYK6KNgfNpDVbD9UX8r722CFyyTR8YEMo7ow4AL3VDhLc",
  "key25": "3cZ9s2AEWfArZqcwbyLnuKSVnpLh3gyF3Z831ycBKvijvttLSKE9pnRZ6JzLskdVW4uE5ahDE696isWkHhitrqi",
  "key26": "5SrBh3kBx3z2N7o6H4FCGuDLNjkipzSHiQQ8k9jKi4bM2TEFMWPqN1aj66aq2LtoidXYC6cFYdoGV5VZR7bnLCc7",
  "key27": "2GiN4eSCRAeZmSzdtX6FF4e5cBL7y6Vc8bQHVjxxA7jPebhK5s8wxt1rnRztr3gJTu39o9UZj2Kpr4RTQmtdcXdW",
  "key28": "4AVvHzMMYHZm2ug4jX6jiPmHsmqocrpH3a1Py7oPeh18Wxq1mWSefxuB9SY6gCfK5FHKGGvX8KnqsZBe5CV3RXMV",
  "key29": "4KFbMEsckA95nL5REc8vYUY3vAJj4u3wXc5ZXMxTKTg9CDRgvz5bmc9iC1111JzcmPQvx3UfpFpVYsRBmQv4rXUd",
  "key30": "3Mj7aiAc1hhGyBdSMoAjJPZYmSKd8DSaWoFnMfBQozNKXTG46a1CDnnBqKe17NJanqvWFZ832T82gXgt7sVNPeJh",
  "key31": "2khNdgEk6n8E8Xxvaz53th7gE2k8RYxvNLsY8LVgmptgtYnYTUrHXmLvfX8M3JP7y8r5Qv5sqNRNQ3nJu4guDDHx"
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
