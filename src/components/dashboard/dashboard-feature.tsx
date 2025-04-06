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
    "2TLEX42E7cjkPhwBnoGXUYQizHPQ2euyZzFv8TpktBCafQrQtXdr1qxRTWhfiu2PnS1kS2j5QsSph9EmFVTWeUMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvYzNiB92tbcwHGQuzSmu9Fuys6gKggrABqNCVdzouy2oX1n2uLSYCfymGdEQ9yDvVwu6P4EpiKqUfcxZP7hEQ6",
  "key1": "2nT4CHFawW3ZM1ZQBGAoqhnuvEVESq2orSK9vCmDW3cGJNiQjRwvUtN7aLhcCXQKUGzFtkr2mKbNZaA7RoSdmhtY",
  "key2": "4NpcP1a2xXKLQ64xBSh1JvGqP963yYHQ4yNX5sY6Hs4RazBbVk5qqAm1heygQgifJKU5f2ohrLkux6ZuX9FD2GA7",
  "key3": "2xbA1nZqivLnia499x5fNKdXD86QkPkWpBAV53v4Ba7F6fooVGPChYLHZF5GXgVeiHighVWnTeofsKoATEYEkdzS",
  "key4": "3rk9xiMr9N1nArtEwBVnXn7NE1mmKxjmLw1gbVeeaNCnCK6dxe8psZrw6rppGFPUpTFpMxfXMJ67oBnDFjH62Lys",
  "key5": "2iLSnPLbXJQzjvzoRAWAhui8BDYZDp7weAeJMYQMiFLiXNHeukBt9BL1Xndt7aq9hendc7J7WsnZbfUFoM1DA58u",
  "key6": "4tBGipAwXMbWBja2XjVCPo1J1uPG5fW462hbBxTjypR5MBQoM4m1uhVG7yqbLrUF9dUkPvBxFU4kDhns3mBGrgLG",
  "key7": "59Gv3c5GiVWNFsApgiVJC9HzWmV4rZZFxzaWRcxKfyFXFVihgYkXV3P9695dNDmNQi6X2xhsAHaq1qqf3sTYE3xU",
  "key8": "4Bzc28rRGpBZ3kTJCbPLTMUrKKPvDG3Xpf8r7Vt8RPhHEVxxfJrqK8wWtu19Wtg2GXBKRZ3L3zQJ6pHQnJg7d7NJ",
  "key9": "Xb9BqvU2S8Q4sqNNWRjmjgjo1orfjz5gwf2xgQmDZzgB9jkHpuCtGbLNkvSSXncPGhx7cErWqyJu37DYiM2S8SW",
  "key10": "3kUsci8Do5si1KqRjSPwLNLBfZLAfptLvzfgi9ieHnsFWNUZrEmrD3iTUSWv3jiwoiKuTfeYdYXongFu8ADPrbNs",
  "key11": "3Bc51vvZPyYFz1M7AvqUKJig4FZLESp3wGK5bqosBCXnBhY14t8JQfV9NgYSHX7d2rbnia723AxWHnumfUtKgfoR",
  "key12": "4jiuezDkEiTbhHe8RNUCSfRRFoC4QmmHLsiv8xm3W5GXgC5qi6YigFdruVaNCrQmzroxLV53VzdgP85JDqXZsNWt",
  "key13": "5QVxLssQJnjrVYLLokR5wEM3AqK9QCoAzVsgoBdkR5pkJuNcmgzyektVy2QWRTNszysBtyyDLxpyCerJEaiDSAnz",
  "key14": "34PdVPovUX8PLsnRAQ3oAyyeQ6u8Gw1KzqFUokgyY6BZyqGR1qmZG53yjLuzubsSLqVzXTdLhgRbBH1hvWF2fCkE",
  "key15": "D4o9v8e8M6h5JRkyF7fyoeZVBZuDAivcRjjNeVshGYM2Yhh9U6Pz54ZVJ8vSaezmPSMPUJjs94etFzXWKFR258F",
  "key16": "48NWwXYTPJLZ7TxgFetpiQCYczYiW1ZTuMEYcjWmVqwAf8MZdMXQPYu6sTbrKUu8QtubbSvECY9MBP5g9VLBVDtG",
  "key17": "5ERNRF75je7oEDsmZa3jMW1NPpdhhMM94u9ZZqyoaBT7zb9WSnKFnKaEJvUwBPiF4sVjiQcWeU96Xvioz8FpJHs",
  "key18": "2PmVZbiW2sToKLtMQFAMwVEe2VLvorrEawtrDPFhfmCUf7VKjMQZ1tpsFTG9nMgXiwUTixjt9wBUDSeH2XFf3aww",
  "key19": "237eE9Zy8Grv7UV43SJ8uVEpBe4XLzLLEy5a5p7LXSh8Emt9exodsGkth7mN3vJBHLx1SQpWyq4DrXdu9g4cE2P2",
  "key20": "Lne8M7ZPrX4xTpYBGbwKZwGHxAbsLgeYC2oFBiXQuc3tkJx4kHi2Gxo9CNbtc1vdQEYfXowc4qf2V28mW8gwJ7T",
  "key21": "4F5VQHicG6BAXpThZ7dvhCnkBevFMvHTRaASHxeQJwUANVV59imimuhL7ocu8T5MWQ9N79KRW6gLjoM1TtELH2jD",
  "key22": "31QnPYpPRRnoi9UNXt9yBmuKGN87nqA1YYJNhC7oc4bNfweY7Au6rhgoaKvcXZaUPoySfZ2NoXqP6SbWq93EvtQY",
  "key23": "3Uri7XUp5FoufBF6KqqkBxWoMubsdjhjS1hPrubEwad3PwWyLhR8DboCL1LcYkH2guSRmGGmotNBZnx1NGURyaMK",
  "key24": "P6k68SdyrftExH6AonAMmUQmzEBHiYYP51UxK2LB33CQacHSKUS7eP43twpba8VZbN5g5jkbm4UGixYASX6xUfZ",
  "key25": "4WCtrxH8waZesDygzgdgLftFLcCkEFv4ZqeENvWue6kE4rwJzjkhwr2xebNsmtwkPoqzjiYfDdWo9BDqCpbkykEn",
  "key26": "4zUjyAait1Kr7tpFtQpqKyoVJtZqCG4w1HsKQ83kTCFDuXVyNRJR8xEBzaBJqtpvFmqwAyA5epBk7V6Xr8wbYcay",
  "key27": "4RDaddBNhXEXD2XPBUjPo3UpATT5YSo8gXx8WZJz1FcAt7iFTSsueW7Kk4uELsDB4g4SEHX6o8ZxxFX5cdi5uN1H",
  "key28": "3FhryLS18SyZYALCG52fseKuYpTsEd3u9Y1zyyu81oQkaPuXCRu2qQcydEUtA7xyxSKRNfaz58sCvqTf4jRNrFUr",
  "key29": "4Ezw3UY4zgzD2A83M6XUT97jUGieHYCnFWmUWzrg28JqPyAGft26zaU87Uxa9LSoRrqRAnFrrnU95hctoZHF34uW",
  "key30": "4cwQMAzGGhvHyFn7cmQkSp8JUgphAhcRsfbXCxNK4JHtmYuEkS2SN9ao5WM6pdu7swYmvGiFVNyjGPefgowtUquv",
  "key31": "4dGfUEEVw9QupcaQwvpMq9g79zWVKkByCiqBkB45bjksGi8qiSiQ7ap3eMH8t6rW2YciTQaJ4uB9whsqXpqpSNSx",
  "key32": "5KnZFEzjs6SkittVcCATKgCBxgtsKVGy4hSZmiVVcqRTKy7sdUa7Q1La8xbqH43AjQJ8oSv9GTpYs6esXNph3fPN",
  "key33": "3hMvB1w6nnPrRtdT5Mic7u34EfceQz32BgBcW7ihPB2d9G623ZHn6MTdL6DPcGrGELCTP9G4ApSRZ6Uqsy1MKHpu",
  "key34": "og5SzRfgo8PJvkKEu8LjM4dsPSZRCu2XmDoN3SiPh8Td7ZD17k68rqtoY48Kv4VJjEmG4SJyhZHMEd1tGqFt8EH"
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
