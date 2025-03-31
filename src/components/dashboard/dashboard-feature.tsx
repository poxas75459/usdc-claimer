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
    "3a9t3Buxknow5x4kbgMuNbBE2yBCNS8ZribBgSc3RLR2jna9GzcbS1V9fTtyPXqzXPmZQwdsuifC1npdd8dssUhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JnaBAgYPTssdytZ1aDQ4cr18561M5TdBNxTH15UpETYMRHNpC9JMZeTQqEbJgUjW8SLZLXboZRbyjNpxEyXhLkV",
  "key1": "2A1jGm6nwqw3UbDMF65RtFV5G8uQTCZ3M9qN5adpHhKnyYvsSxkjAsoaGbfCJn2XQ8kphBzrX5MhVAAQBT8AA75a",
  "key2": "4YoNc166APgsGMYGoWYk2vzMXctVxhyVwFfBsVCiiRT3fgoN4RqPxaJJHdTF6yS9Bcipi1VPQgwQVVtqkud5Wa42",
  "key3": "dAzDvHTY9ejhvYVuYUFWi6tzYGrrt8bd8J2ucnxgcaVCUQ9DyJUFxCnkhtJmtkYg6zN25U6cdmUoKnefNcQzv2N",
  "key4": "2YHkvYx5SZsxMm1nWzj8riYxyP3ZGGH6j6RNWUCWM1VhoNyQgCL4zUaJc9qGFpdtWncPepe5tYr5LUwTKnAFJQQo",
  "key5": "4r4NXUNZBgmRphVA9htJ2zJMECvxKfMbXu1WHRDQEx7ACaPXpdniRh2z16UomCZRy36gPFpKA3YLdtSuWf2tLMFW",
  "key6": "64aRL1u7rRmDCikWqRbquFvzasMCZtw3fVe8kGtumqWDcsHcY5Un3SVwv4ev47toMeU9jCc4ZXdx3zmKTKT8Azyn",
  "key7": "3nkujTY9mJ1Z6fbP85sEM5ajjRdnbNnqvU4LNWHRDwoRsMfQTgcnEv7aN23qAjF4feeUXQjjRp3njL4ufnjEBLV8",
  "key8": "46geDhpZSgmjqrd7sMG5NnRZaPMPbyiZ1CPRoxxWj5VcYmZBhCQ76daejUNcL5BnjNNgeNWK4M5BD4pZsJxKeXhj",
  "key9": "2o4hQ28fRDdrDPWSVZJKX278L7gykomwzjmgp9Z5zCrfVJUDiU6WqFacAed3wPhCRQvykSGkvAhGSg1uGQoAhVeL",
  "key10": "ZQPTRcuaEksqeZfX3FU3Lm2jDhPCeMgw7YtEqqtimKQ8H1MGwLuAXaWJaPp34u3FDoTHrswEKXHynhU8q5WDU3X",
  "key11": "65zsNQ8N8VuRDLDwj93HSVjxA8zgTL89xzUansiMaHc3FX4cBYF88rvsciCJWYrYiR3pWo65Q7997TESSpr1S73q",
  "key12": "3ggsGfqyf985pMFNZohwyNvoameb7kGKU45Z5eywtkbyjiAL5daeYqVLruARS5fdESFR86Q49f7mLXret5ttPrUv",
  "key13": "4FFvjMLkvamEEFjfxqouD1nditKpacME1dPsuZ4NSrf79ZbxUzp1wdNMh9N9oqEREK6oFX2D8i5y1jaqNJDLfh5f",
  "key14": "4ML5eUmbJMkuSjCGTGdif3mc5nAY4q1dohmopVx4VCjVifLSaFgQ7uwjG1gFoteC6FhXkCMXvS1KSM43PLBPq4T5",
  "key15": "4QL8LZW8DQXFekWJLUovhz6ZFmfPQHAQKjWm5yHdJn98RutQjE8PjiNk6J3B3E8YYwv6wtswhXckZxZaLLC33ycC",
  "key16": "2v7kyhFQjmYVfFq83iszQ1Lpikdqucmeca4HpoBsLvWfAvvoyRmYLs5tUE3Rj8bUathnacY4ST2ELJ5NrC7y2jNn",
  "key17": "3UTQdfTVrxipnur22CA32mVVdrB2aUafnnzWU4XannAzR8TqmwpNWeS86U7XQUYKZUWgbPToFTdTmMYA5Wj1u8R6",
  "key18": "3vMqZBDvemXWDr5J5YGPPEnSGZjXh9EZ3AwGUCQzehq7Dv7ogfR5D2ra3MopWCA2HRCjmuvWGhpA9zaNXK6gAVDw",
  "key19": "1sVFArnBV77WcTyRxKjDogLfLQ3u6cpmSRsSJkoPtUNki3syjfEEXudqNp2rzkUq3NLBLgDY94DcRHsAMmhLfGN",
  "key20": "5w38JiWNNmKSJAw2CuLuvKdW9jzphuEEGDPHZR3qtkTFoPDug2bB2DyxkKF2ibDoLUYHRG3ocXPDz4SxbyUL8Sft",
  "key21": "5edD1huVMEDgGSAMHG3AHUTqMsVEpq5KNzy5tnJmp7aZ77aS3R61dLA9CisiZgb2LVmmiHxpUdwazNxEbsQwt3Tu",
  "key22": "2azhKfhhoziamRRBtRWP6QgjR2mfyFu5GsqbLEDNe2NbNxf3vNKhCrHDdkp2MDD7hhd2Y7w3ZFiXf6pkH8kSoUon",
  "key23": "3eYoRKdCMjFgkjVpTh7pREojqAzV5EMNMpVkxuVgKfwnftcTwssS3XgTShvC36L2FffG5WviTxZgaMKvcUEUBpyu",
  "key24": "294EoRSdde5aEssTwziMrHU8fVpBpLicaGmSkT8gjswyUpq2oPsMc4jiT67DdoSnook7myA7PPydtLhkJmrcn6qz",
  "key25": "2L72HKwUSGnGyit8o9mcrkWEXdfjjSK6YCDFyAgxbcGpkb4SoQKUfTY1imDDx446Jd7u9fUnRa39de8RrQciqvma",
  "key26": "43ULr1ZCkaKqQyVZZx8igpBxPsvvGf7M2a1B2MhPgsnf3cPoz4SGbMA6ePHLmHmzEj87WDdkDnEr1F9TxpSm6to4",
  "key27": "dAnnpPWTsX1PjoKa35jaYLsHQF9HnzoF8DV7uoQA77ZJAHaB4s2U3A3aLxBH8fSB6vckaYPufAXpoWxKRKEDTbS",
  "key28": "4bNRtA84iC5V1ZsnjJCecCncaBavYLBArKQUeV5bfvgfYM6sMdhtYho1W66naqmNaNaR4jL29QRg8ZAyRwv4JGqo",
  "key29": "5NqWMbHVw8hLojcv81oiKCP1tzBVBnQdMQwJTZWDxtG7nxmetnahyX7gjq6eCBUQpnSNW4W3iSbxhtZz3Xtt2X3h",
  "key30": "3KjJbfYwsekDnSmzJKqB7jMpiTEresoHBFpNxBpxTWdrCS7ZPeQoK1QPEZWcKiw56KKeRPaFygHBwPAxEk2FsCDb",
  "key31": "5u7zwXKQPjhQRmHDEPDqtTYoGzu48e4fmaiuXMWbjqxbMqWzT1SyUQAvDcKrXTNazQwFFLXBBjRB9xMkwBx9cZ93",
  "key32": "5sjsDCk5ApcyaebCFs3tJbpPYZPE21NG8DT5RCPg1BZPKifnRifWgqPTKR5eBui5PM9nfjGUVaYo5JDFGW15uPhQ",
  "key33": "3deqbKrB8S2m35rBGQVuZZnu3N9Jf4RnCwRU3DpW7aAMaq6ehDLrJBzrtSKPsgJPcibgy5hxLTBx27XRYWJQE8PM",
  "key34": "ifynPev5JBqkHj1esoKQJBXFMmohAd8a6XYHQ6yxGMXEBVbRh89b72FYrqV2AkccQHbBNubmr1FaZBBx8TFv3kH",
  "key35": "5EHw4gFe84MrxpV2qpdbLCGaVwRNvbo2bgWJpMp9b3Mrd9nt1M9TaKnci7JDTsTgApiTAQq63jfGjWFe1DA1ueZx",
  "key36": "5YbMXEfJfjbtEPBUQe9WRx9zf2EK4T82tDtWMeRgbPs3w8k1NDE4He1inZ7VUfRTdfyMrLypePRcaQmtV6PRHmpY"
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
