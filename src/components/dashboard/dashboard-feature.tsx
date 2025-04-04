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
    "5ETVtYWscE25yvDVbQv2gL4qdmgjpDazAgSx1hRwPpeuntAFaCJpkSrr1SeHTdGoT3fWtSrWLn8XJAyprhzW45Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QA9uJkKFFH6Bhu6zTxnt7Wx1nGDTobWAxgtUmEjK7ysJuBTbqjwSjEYEYCJMfSyauc6XYbn3Y86Wvdh3LrGVVkf",
  "key1": "4qLkocpVKD7tHjWeVhsTy6i7kxbUm8jb8UJVx3o63c8DjWDKYiPx9JFm98LWwL5HzMzMXy9H3Bayf4WDsA1YED4p",
  "key2": "4U7Mp3voMJQucU7fKhWB49ADnetWGZwM4xm5W58o8YCkwFvpBnbAmHT1vZQK8RQTa4VaqfER6UftTpQeSk2xPxku",
  "key3": "2sdncUvXYNGqrqv94iDTdXqEcoBcC5geDsiHr74LKnbL3vkF5PBbDVVKbjjap1LSLPAKe4nrZvaEWuqic9NsNDnR",
  "key4": "3soWzwnkhuS8ThvgFvRBQ3HnqYFi9ct63ipFw7HLvrpHobVXc1PtNbfK4SMspgLehYZrsF7cJJFxnX2AbDHX2Hq5",
  "key5": "4XN3Xw8fnYWZKDQcdzZjqp4ZM3DS2xx8GVCHwfedVBehCE5fVqMUps5o5zWZV1AUtNNxkrBwSV6T823cgtyd6oSc",
  "key6": "3i2aJMeFC1gHbaPdbXupu9HgrbjvaKk8dt3BNLYm8yiUPYdsEtGGic5ryiZ3Tsxo6H9pP8aodNk2cvGXj7BSsmUN",
  "key7": "2KPR2SXeANo74e61MktsHpF8nbnPuYnkSxZP1oFVTLRk7tJ5FcsMdq6B9L5K8LYdsdY9FqsUCTWhsUFJCXmovBam",
  "key8": "3GbcwST4CEmFKGz62sA11c9tTHqwQqXJY6aCBbAHkMsfnyqShC6iU4bNkeagKJoSVfEsHRuyUbZgBzVd5dvsbczZ",
  "key9": "38WDnFzumFrSG14y1m9fTHHsu4CPX1xmnopSesEPNbJxURbURfcTNK84jSDQxEDkGabEnEsou4S39AiUn1tGALyM",
  "key10": "46yX5FJzJj7KsrpTD9n7RZLbZdPqyCx53jHbCpg47R9oyujt1Kt8iqw1p2c1BzEEvYrucbZFPLfMtVk31zfaqitG",
  "key11": "4oWJkUJHQ2EC6LHC1y2sqJuHsTKYdeRHvSMtnxNngfCdSP4iTaRoFpW98LWeywgeQhvfXkEdGidgFb9FPv45jB3v",
  "key12": "qziMMu2LDn4Bp2rPgpRNmmMViSDt7b5fitj6hq5xBifjMGmLpaGH71wTcEQdykQogTr7gGkhC2qhNvrP6xjd2e8",
  "key13": "tc3TMFjTUjppocHHQC97TYvJh6Gom4vWUTyKJ8ihKdzfWdMrJUG6a7uwEyLc7HiEdYgmhrzW3zrv1jp2hQdncC9",
  "key14": "4k68KQBsfe9gtgU5i3tB7oDU5k7oDjpgSboaHBcMiQ9LgCE5pnmaiAgbcTypZJqkM73yoJmAU9WkWCR2WmC3cHUp",
  "key15": "422LvFciUTk9hXYLMyxr8mJrCvKRTQmVPNgrtwk8YHuYm7PZBNAH1kRiSJ8Wu9zTcjzaZ6XnnHhttYZXiWQFjdUi",
  "key16": "2efTGn7m15zQcnzVfCW8wXGbBVzFwJqyQk1LEu4of7QKQW4TZWVH6vrQCw5vGJYfgM5zMD24dgAKCDYrt9Kp2V2p",
  "key17": "zYKTb1BAXZdLZb9f96kpfvWbEtJ95fWBNrK4deAxevXhjVY1us3WGFBMXabrSJTfWwNmLDmLR89RENgEz3BV5Qr",
  "key18": "4njBwM7wk52ohMHVA5qLQXgFHSgsTR48totGz5wehYhdQnvS3e6ymbwMD2YbP3zW6iaCfThqE6bExGJKJzGbAVWU",
  "key19": "3XaY89zijBBTb6Pb6Z8X4FZ1jAJZ2eiLuKraUvDFah3bCcB6nkrj8MWodA2vYVNSHjBbTGXNAmaZCx3J5utfXzXT",
  "key20": "EV481zccXQr3h8MpgH8Y9zhkcAYyAoBedNFyYtTnTVmgSmptkkxpW3ZfusKuC1yt2iqfT7fNqQMTYepjbfGS4Uq",
  "key21": "3XSt2h7NoxLVhSQXTLhjraS2LmRtHUwi24t2kVfZGEXWTAKUwaNB4VychdqndquGFzB6M1z4taeS73qLVbdRFzXH",
  "key22": "GAyABTppLCCsKzpbDoP2FWzW4qv3EDkBeoH2XasMpnJmssuPQuSCm4dB6kKiAqPePxK7kbQLRHbP9ebwNbMUS5U",
  "key23": "3uZHhxv2UK79wrPm9ZCD9ubhutijWfezM84hqWFdaHbTkFJzqzAQ6jhgqXxv7w13MdjULkiiKYcbqYrgsDVnEf64",
  "key24": "5SDXWsgMaAg6bfSE9bQv12ZKgdUEjx1seruiv7BQXum9k4WiJWuAfKHcyDwSgU4mb7RapHqWy2MQ9TNeiPsi6ewZ",
  "key25": "2iQSe54DtnyDAZeibmeVzEZqLHW3RazSDRbf4eYXQy25nvrxmLY72UQrrJKhtB6uAvbp3FwhHPvhcVBGvDtujHrU",
  "key26": "3SXsnhEJPwezM5MyxXKbspe33NiCAc2DH5HKWwXzkzD3GSyc3b7zLCNQvsT1dD3P9ggepPza13e1GKdpZZziocZm",
  "key27": "PaVLfDx6u2C7BLH9PUeiVAcBEUcWeu9ziHVaq6emT7vpw2cc7epDj1pKL8Di6z9K92V3dVgDcbFXFMsaCQ2wQdD",
  "key28": "3APvUK4bCFVZuGKsYk1xPK3QDzCeKYXuM8EXk1p6eEbGtSBCTK8KLo28etuu6XDBSoA4xVAeQ7rFg3AtMrp1hfnX",
  "key29": "48qypbWNUqyjDqfAadSv38UZyRow7p4ZXePFRfwkSg7zxJHyCu31fKoh4Fx4dybVbujDYATUHVQFSEQ4AssPk628",
  "key30": "dQhqdATVoiYQoPzXqSmfYahMfio3XG6bYXp6fBWxBhPLBx35vrkHQNSL7qXTh6eBJqZcKKsL39YosvnuazWx8Vb",
  "key31": "ThinUMgjLDP7GWM4AtNi1XDxA3sVAP8eUuYZaf2n5trvvPUXAB87DgZ9kMJpcrV4VxQb34KXtLUhj9PVAXow3Lt"
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
