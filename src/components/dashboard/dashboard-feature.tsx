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
    "49AcipRNVNoc6M33MWjdBgNcV4rjkwEm5fZvFdqAEtXoYm1RSuAwT1m1iRe5duD8qPSVcduxDUQtCBuf7189fJ3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aT4SzgVkk8VmN6fnakFst59zE2T1vvRaEMXbYqQ57J6BzZM7gyqm2Xjy5N5UR1cxAjJzPowK2wFrhCLmMKEKAmt",
  "key1": "2djsBQqAoSbHR183K1GjFMRjgqLoEmbPrdqQfyRQzskr9ihsYLMAPWVaSn25bWK8qaGhWobCaNYrgfrSHrqa5dS3",
  "key2": "ebmEzTimeeXCKmF9fD7tvqjUiryfi3isnMG7dbWvXpbAWgC7Tmmi4XtD4BC75sZMrWrP4VEs95aJT1RsqzzLJyX",
  "key3": "292h9y6nbhSdREUYZFasbJDraYkhtRrMP8AoqaQwTH8NS2LLgw7KA4o54Z8zN4Nvas9KCsyCfKj93uLfFRQaKXKs",
  "key4": "21NAiwBQKCfbQYxGct8aNz67VphkR2m2Eym71JTYugEaX93zZvtYcuZMuPRJz7ewi3ryLoSDx8P4W7pNDYjptczy",
  "key5": "46GFZf13RjyAawtdbFrmawCJRqGJZvQrX9to7ab5YrhFWxa562Ap3rFAvnoHK8npTtTY4BaBxCxXoge7GM4j76VC",
  "key6": "33JpgNuBZgMb3HQ7x4XQuSSq1QgknuJ4q6cyft1yEJP6kcVH5LjHaZymvVssoZvpzJxPnrmKTNL2suLzfzKWgyD8",
  "key7": "3JbC5z7CUGtTTW8kdDcktN9so1QK9zrsHir91w1LvA8X8Qjd2fbt87rLUibhNm8sJhGZVE1AA7C4YuExkWEC5uWX",
  "key8": "6556GpVZW9xKxdqeJ94XvSsj8z8JFRDLmJrz8BEDeKjzuLZTKQ8drnkg12M1GPV1nZQLcsnhD9nnSRJYswDU7qTX",
  "key9": "5wdL6W1vKbH9qyB1HGsZ7a5j96p3iSpXgQSRrgJqkw6hwYNDvDyQmS3GPniPRXaAKX9xR5xWVrneNniKm11pVuAh",
  "key10": "2d6o7dZN9PFyQZa3r6N2HUPhng99U5RqY2UBx7xACZ6JWXWHvwZj48WYiMKZb6JkhPyyuXEoDHHGY4bCXST61pkH",
  "key11": "5qgXX23Zr5EJh6jvQM1xVy7J9fnaeH4hAPuPnzt6J3BTDTbkTp8fK5cUXZLYbcWxo6z6Fmv8ZxiaTHMpb1MM5ep",
  "key12": "4kHpNp6yHxzT9tbHrwuUVJd13VFc2gpMVGuXaoEi3trRQKTJuvd4wQZthZnEPGcUpcFuNbXqgeAjTefx1qAZzPAX",
  "key13": "5y4iAnykLKXhHddm7BC4eSUe1di4EAH3fC22S9wWTDvReBoBhTjDo83sCnd6bSaDjQSrrn9wjq43PYeAgScK5pLC",
  "key14": "5MVJp777GNZaE44xG5NpiG4xSGdFyQCPwQVbdYF97JCSTJH8PQzpEkv9LyJy5FUKdmFtCSJSdA99drHyxUk9eeUT",
  "key15": "58Mx3FswTMRynazXxWZ4kvDRyPg5jznJn7y4x51vXeuBskz5P7B1ptnJ9JuXC1sFo4GA4vXhkVC74ZAXjnm9q2nK",
  "key16": "48Kfa1PbUGmHPHf7UwLpuUSUYHSohxfN2cvtKnbFd7FMfKrMe7gWuTkF542XmCMb2TbUFMJzCBRsmMTiFMCjrA5E",
  "key17": "2LVquimj3RKqQcZteNonCWmqr59DNUAEzSLMFStrMPeKhHDXFiTFHLBhJ1agqm1mhHF3T3XgzwnUkg3ies9G1KH5",
  "key18": "5L1Sm4k2yDVAJq1xAFSVQZLmo9xKXbw3RR6rSDoVLrAiBwHBhyFwTSbMcJpmHypcojgcADf14UCGDgPE9HZWQJKZ",
  "key19": "4V7oL32CC35d8MYP3NAQktdhUfLYCy5fQ4cKrSKoB5hjpJgExjfDDho9w6jkHZhV4bHZdmKhXssd1JSAiRZ7RJ92",
  "key20": "5YuVYiaaF75qwRzG9R5HK1qn534NTr2WVkSBUXr8fYVRs515os9BmZVDXXdtqqYgvHoyVhMvHMgMT4KYNQpehnzN",
  "key21": "2pASpwHi9jN5SnSQuoLxQjd7bUMduKrMJo8vTak1gCVUPmfmgQQiuTfm263v9qJkntvQbn8CvMkaSPv2EkURtkJW",
  "key22": "56UwVZidMdDGhV7oeAzrXjZYmrTS2GFAfiDVtwx3SSNpHd3XkmbDq8uBti1y413hRA4MUkaukendNuRRHpiMrFaA",
  "key23": "5FjYyVj5PoCG3HPEvNQCQrpL7SaoFR9USFCB4bSEqXhh6GtidNU4CLihBJGugr9CAY3uAapuKT7GFeAhqV2rE8kW",
  "key24": "2nLEvQN4buXtiuXZuExYbK8uSd7gs7xfU3sCH67UP8pYmF6knXjuVpEKLiGB5qtQ4tST7HNtV8EKMmPj5uheAZxx",
  "key25": "qxXg9cbVEzKmKfMGb18hy6kzPfWRyfjZXjhnEyauEfWLRYoVfbMU2HUiqwBFqaK1fqar1WeEB7WvZZhrQfyJC71",
  "key26": "2yUvZaXjMUoXLxaPYFAngB6AfgLysmVMcZ2ZST38VVhwMaqA7yaHdkXYAnM8X14Gv1crfPumS9aR5zMicuUbaaFD",
  "key27": "3Mb1xzQRwp1oe52vyjms3xBiNRTPCUjyVfAq1eXxTsd3xhHesARHdT4NZBcS5jihs9ibxSXeXEWrfDhp9imoGAyj",
  "key28": "2MfDL9e5bZAGyKxvrs47zCfprvUd1L4tTAdE9XP2Utbzg7Ghym6HtqAz8duUbvSS3LUunhLFQqQ4mk6BkbxjfF5d",
  "key29": "2uKo5v9NFd5Z2ko2whPQsfYEx6REAFXmCWAJhT389U3ooVbFwpt6B34MDmmbh2zSzrJXNAXkXw824XjqZdBwwSJw",
  "key30": "etGEEfJJjZ61JuEtTgobJEYWFzWnjbRaRJYmSoLgfDruPaarkrD8WnjdV52rV3gicUG83CLEzuxE1a2GLSKrqJv",
  "key31": "CYdQtfTQoEjP16q85MtUo3YbazfZecf2FhAP1wrXiR3eULwcAoTu8tfdso8NALPNfuEkQE9Pkqt1BVN5asjusBo",
  "key32": "46u5xpMovmJdJHRg1p98UDrwtvVfKGNjvixPiJ1PtZcBPtxThV1sd1ysaX9KDjC8QeELZsvyJKWrheX3gUZrm6Vw",
  "key33": "i3TzsaVfNTpd2WVbYqNt64kZ7b9HaQ9gAf2NUdLh7MLRNw2EsMJazQ27FUKGB7PVgHrtu8dWxCbkr7tWGz7PgtS"
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
