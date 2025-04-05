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
    "52RDQVoanLqKCBFQq5eh7PSZLyDbNfo3GMicDXXNwMhhifTARuPJW9Tjqia72uUnuLh8GxRtWT21XRTrBsA8eRz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBFiDVew1VZX4q5EjXgtEagFFrQ3hQTeBzCTqYJiXi2QPLsbe4XFH9Z8JQKtDjD2m3Bzercy3z4wuw2e36khpwn",
  "key1": "5YyV7A9JH6rxW4cGVbAJFaZMYXp6HekigvuvWgwygJdUwPM1dkLHnRgzeuXEkpnhK1ovmSqKf3pukMCWCoK8gqwJ",
  "key2": "3vaHKpgcMtk55tHmcHgtZsaa8J3nfAzQKHiKbv6zMCVbvFPxNM2TKdNgsayMFirdt28hV9FTGpfbaKG3iAkPa6Dy",
  "key3": "3jewTRBVZZHTUvhhYCKUgFP23tQJSgJxN3TUPSA7LELZqhSwsXvUi1UXZchdZf5Gzit1ZUBQuktKMjtH4tSC9R7E",
  "key4": "DmmEkKtzzTUuMAabePsDLCEcwNnqrrXPWkoLr3d6ibX2nyyZU7ugfCkfkbm4U4xTefqcxFjQaWN6jLYx82B8BC8",
  "key5": "U8GDBmzLUAetMCXnZWa9MmRifGm8dvcYYTBo49G1zpsD9BVNmqeD8Sa45znvk5gTbpx71SmDHWWHV2NQqwc4s6k",
  "key6": "5K4T6kimCMsnpfvcZrUA2B7bN5SYGfdsvgihsEmPkQBMqmVxDyNnWL8yFc3SN1dPK6zkzAEDFSZyfBpckKEGNUmQ",
  "key7": "4R1oiWzWjp6tNyjgPoDwejWt5pU99Gk7jhL1Jr6DgiRYqnavAPLasDZQzs5gbcbyVF6euVKLwJnQGFtj85JRCe6Z",
  "key8": "3GqiyyL9qXBYWutrb41SFZTZFa7LsQT9tWLkyhwhc1ZwWkpkuTjzayJEuz8J4zdSR29JSnZheL3hwDACimtZ6w8m",
  "key9": "3dr2NRvRJewZuhnbBii5iSw32yq7rh23hzb4U6MTcQyW5FeGywcV6MG1RiogYnsQtN4zvu172fCU5vf8trj4Ghqp",
  "key10": "4bF3fxoXZkXzYqT1p3Wi5P77dkK35r5TEtzv1nwBpfc3xCqT2P8o2txfzqq4xSGb8Q2WkN9jfZFavcJy8ajGNQAz",
  "key11": "4WmKqdXs6j6YHc3uxyztYiExfsd2oqYSPv3eQqn4Z8hfTxVpr7KTciDSUkxi9tNPoaWDU5BoHeD29NPDsrf8E1UM",
  "key12": "248ugQQkYsrc3tX3YRPd74QmYVRDzF1eZFXLWL6EHyWPHNj2kkE9QupQDm4tPMq8N9SUfcmi5TUapfJs1pd5CRju",
  "key13": "53xEmSieacZ8fC5vnZk5fC85UshZT8b7W4uXrYat3gx8R7PwfaW727mvw6FopHqKW7MVjaPGxZrdFx5Ds6HEu5XA",
  "key14": "KYdYku7Tbs6GPFM5Kkaqx62ixD1wjpskaQdiVMpVyxMuuNnRqbU8JN7b4jFXvv9yq4CA4pg3BkipbDUjJQxyAq7",
  "key15": "4BN3tveSvuQt4mMAqmJLYBd9Uknbj3eTWasrPdto4ywHQH2ApqLqhx8Bqp6e61nCeXygcptaPEH9XEVncEGPQjg",
  "key16": "5eforCJ6mCEQ9eHk1fmHbaDQjdYWs2RtzzVY7NBFSTTkWVVV6jGfyTDPh3oXhpott8A4Kfjb76So6pGxk91Le7AF",
  "key17": "8oSPrtJu7QEf6Ggaz9RUTAG5ArmXb1y2tk62gdHXkQABQTHaTYHML9RJweu9X9garVnDYaaeaikHRxuVZnx4JKf",
  "key18": "3R8BjMpnKKSKU18Yo8Jpwx3Lk6orU6KG4CJMQTkcEvr2AWVTK6oAm7jEQrhLwRvxjbtDDjwTAHyQ6HpVR85jiwqB",
  "key19": "4MmiCgzSdhHwhe9UVSnALifvdbeijmS7DxMbUfYKo47fA4vzmw34V1XRpgMtj9CzErj3NCYm99Jy2X9ktdkT21js",
  "key20": "3gQWSv2UtEhqbhmVUUG7KNT42WrvGpaypBaBzpahtMxdGLdTDUZ6yC7cNrkSDttES26e7QUecBWBrWRyGbS1cEHu",
  "key21": "S9GucH1h8eV1Nb4KH8uEnZpXM6siVNvZJ9LiHobyD8mTQW57uuPtPJ1pZW7DvP2uCtTqMuxrbTDRCdDEKUiRuCa",
  "key22": "4r13suU8nF5w19tdXCWjng7YhiMvaK8iurpDiPJVhrjaN5NdvDKbofPHdqB7hYGYcRGMcvZqXL79hPyuGaz1JkV",
  "key23": "5aovmUezdECXnSuZyZWu3EkVaoAipcWpp2C46dbVqAzMKaxSo3XsrMLBWrdnmWfSymPMJJZ44gf8fvSM2qMQUZay",
  "key24": "4aUQQcZZEa1RVswYHXJkQKz7Hx5uya5Z9fkJrCDkjf3x6gaG9ri1PTA2ox2zPYAhRJfo5M1hZbiFAHdwXuEn2T1q",
  "key25": "2tj9gjkGHsJ21MXe3MBRarQMqrAcjgdQTdsB8S9PCjw8SQpVsaQysB88Z7vSYh7Ye2jSEd8ZUCUwi7dmCJWb8Qrj",
  "key26": "2N6ApiG1o7EDSJbEpsUy2BSkMqNjsBKLTZspXnyFNEJFTVzddw7UpATpnw6szAcpet7NXcKQU4uwvyPGrnrepesA"
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
