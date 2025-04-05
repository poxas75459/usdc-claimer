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
    "58vw9vuZHCmoHPHrntTCJdb2mYPupoiMP94FwjMdxGeeH2AbuTGUreBqXSN7Ec5PkG2de5kmAZBd9tYUYwydGZN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25u59coY6PUA8JXvb58pWuyN3NEE8uomqDj75YGqsQvsHEXoFihku9x74jzHN8b6cKwiXWZ7gbiWQhofeKtzNPyY",
  "key1": "4nqtAtvDRRMMsT5njpUo5Zh5mGdw1hDjFyewHwMzvEDqwyu4XdDqPo2uSy8xR4VnUGxVsUFW32wYbgo9dNvz69vy",
  "key2": "2Ze6CdktU6KbBTESUhnWhN4kvmJmeRZ1FSgniewVcHj3MofNKoA5g7BTTvmiJcrzvZe6tdQdHEWnyF8FPdwDwuAr",
  "key3": "2vYVJW5epmyuuyef4jrh8a4Vh6azJNNHJaumRN5hHk75QVgrKfaVvmi12VCQWoE3C4nhGT7HVkhRrAhDJQan3Ro4",
  "key4": "2BMyvBRdc4k8qEuJsTUYtGGiZv871f8S63Xj8Ymr3h489BZkykE5oj6n11K8D9LbHqMxaisbQz4z9VLZjx7pSGaQ",
  "key5": "4peqfiSViKDQ8Fd1HWWrxCySUZMnn6sHUwMTzWsbDEtRJm95f5n5kdcrZg7xXbuRYvbc7WeAtrguf1hD9y6ZVRz9",
  "key6": "vXPga4eUKe5c2rkjBeEAWRbcU61TbD8CRdk3YcGfo1wDrKb79E7z7Lm4rPJWry3T6cyfy3EPr2roT1QD6tTCtCh",
  "key7": "51hkqDUCcHFNiQpsAVMPxNfurHhHTyXTRd54nAtbFZDAKewtKvQeGG6RewR31dHNcLrBVveVrFGnMyRhArLRYw4K",
  "key8": "48arSeraBhxixbqEkkGxSEN942bAhJQLU9Qgtz8bjcDTENsGEFZdjkTqGYGftnwo62321djzUj6bKDQYrxYDLxKC",
  "key9": "4vq24oTKAosbb5Vyf9vXQeTewZBZefUaxc69J8zQPLRi3fhpDg6CAtjEJBbyuWF1XdsNjkAnaztNJFCFjoykoDYt",
  "key10": "2LRmdqs44gv8vbJrtkHo3QE4qwokruVzr3MiksTSBMEsEWazew3nNj8bmdpXR7dvunkokutfP3WHjkRPLwr7uquk",
  "key11": "4aqNu96uNNZ3vgcVzaKFv2R4z6VH28c1XwavHar3QuTXi8zaL9QpKpHPbDcZLwNdV48r1HGBJCWbvTCJLod4yCKt",
  "key12": "3hsvyCAkEwaHEGByoxWjvyrEsXNojZqr56ifWfPVFQrevAof49CjKQHfcZnCee38dqPtuirygb8jXzxPXCLnP38m",
  "key13": "2ScztiP6ufESCidRERPhfmxgpZa9mE6vfpXtP2Vztag2KKda1D6grrJDoPxTMTL8m9y487ponCCUk5A9uE1qyHx6",
  "key14": "3vUF7S1y4RUd8Y46mhT58nRuBXnk1dANHntXxRZb4pqETvgaMh2qRuCfuLDiekTdr8X348hvhoUv4gSSkaPTdUHa",
  "key15": "5BU2Jvy1sdmW4pkDgqvpaFonXqaCuFym6yx4cTojkcH6VuP6DBYUtsRhRHzoriZa9SXaF3vLAvX83XaTYgzQ36CU",
  "key16": "4j8Q9Vz7fD5s2rh5Hb6DJfGmJKhTbezH3sp6Q7Jnn2YVqgv5HRrDL2v78QoXSH1eU4mUFww8HY5nQ2Pgh6AXcFVt",
  "key17": "ZeiNjYSF91jwtAuP14YW1WtQRJ1ds2UxdKYqsMFa5nG5pbPGuMV8Hj5eWRrSe2yRG7GPfftgtZZmD1XpFvPzuEb",
  "key18": "2i5zByGSAsWuzzb31fF9GAxVDe6WKxCMNw7wLwP7wF6K1EaiYK2emqyiT2c4mY8MMZRwRH6XDxmyE1DVtfySF6Xd",
  "key19": "5ofDbyVrnux6BX6fbC9KWZTJrzyrCyESFFF9CaWBVACJzNVYyWYwPVzLVvqgX2meGKxckgS5hzeG6wukKBoo9yMa",
  "key20": "48gmwqWQMVbqRMxiGFrPkiR1LcdbCXor512pyP4SA7ZhLh5LuDBqPw6gNjUqhXq4PGTcSZTj9kwn9yUcNdLRzPMH",
  "key21": "yR3nz6WpPnkTDUf9iH3vW7kzVbGp9Q4NjFfXKbB17Md1v2K9eT6hi2uJEhHJVz43xd27gVuMrQb8nwAAFu1q2QF",
  "key22": "259JPQfK4MepEEjr1wd52BbF51HL2ab7NkdSGH9FQMSn9iKjqLYExdF1s6dU6hToNUn3JqZ5AStzwS33rnfcGm11",
  "key23": "3REN5qqStNdxN2stzmCkJxaeBDnBRKeSFvpFxevwGUKQDL1CRNNF3SCSCeotta9h4d2TYiYaMR6wgXPR1scovbqa",
  "key24": "4FigQfS2m7HiU8qUEjgC5qgUT6c7Fs8Ghsy44jY45tPoF2YXqdDgwMqwodwz5agXKNxAXvVqUhU2MmMTh5KpnaY2",
  "key25": "63M7xmAyx2uwuop7Q5VBsZNwrwUAyWHojnPz5KGN9dFDaRrLSmzGSHkhH2gqADFnVrpqW7U4nLs4HhXdnxFCXT4t",
  "key26": "5cXbwFiWJYdmXPmZgeMsaYfjb3M3pjSv8AjkWFNnW4uveUofUGipwXqyYKH9zJVpzzgWZefdUK4hegQHSqXvKfao",
  "key27": "3SJFg4NdEvB4RJjNWwFrfRA7mb4G918bkq6ec3Rg6acYZ3zbSRwx2iPhsko5DbQb3TDeL7rh94gxA1BNbVLGy1ys",
  "key28": "3tug6gFq4zrT6SAn3bbbYKQeP9tszCBZoEYbiUS1Tnzun7tCaLu31jgEUvZWcpgUKYJFJroRzmB3tr8sDfxait8s"
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
