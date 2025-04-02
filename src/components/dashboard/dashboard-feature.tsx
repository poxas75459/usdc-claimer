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
    "nzmsZtNt8gZ4A4Rd2WrUiubY353G3k36ueRYY5KoSYUPWSoKWXSFcgZTQ7sPrSALcsjDJXphkgE6f8qjw2PmM9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CMNkU8zbziKCyD8DpGMwgS6EmWv5aMaF2xwNt9D3sRU9uF22JC1KBvNnZG7Uuq5hV9FWuNmw6oFeU5v3Jv2Htdn",
  "key1": "hknxH6BeCuohWZDJotmXcpFkPDEsjENcDh7vByCLQG3qeXPvt6F3Ge9oWZbppgFS6TnPpR1eMPPyrwPJboLCcmo",
  "key2": "2Rk3sL1TKoYe6VmuJya9EetWu8mAVJCyZ53DM2TctNFQwB2b1qimEFsPAHBPmqvDF1irNZuzTGMFKgUxDzpbV2jX",
  "key3": "5diEk8ifhJYjk6MG7c6PsU2Rqk4AswBhuBeavQZ11Vci9tCzg4r4VzLUWnYaR7s9zoh1pKZ1mD4nUMS4Afc4QWjB",
  "key4": "5RoFuDd5Xfxxwvs5cCwV9yL4x5EMqYYLVS9EQj7UPyy5g1jVhf8oTckZ9jkxDH8P41FbPiAjRdtVxwSPU4iBKkfn",
  "key5": "4u7DyvDx7tBUnAdFht25RGy82ZUStBQKjvCzYkFKVy8iY2REAufH2Xbru5ZBcJanrbxjoxpXxonF3F6iJ8Wjp2NY",
  "key6": "3bpSzcXtr9VocrjLV4ghwbGsFTN3KhzQrfKPwZwkqc27S4qaGD9mYzfXgGTG9GPYakGNRXQzaghoZX6o4YU9p4BD",
  "key7": "3LuPCfS8NhxuQWySjmxfKzto9SwoFKnz5B61BfinnBEjDoWAxp8pjp6eGPdrqfUvKM7c1hvM5KPPg647Wuo6uq6U",
  "key8": "Qxy9tRKFRuy32JZfsPi8FJvbpreynG3cWtXLAv1bZBjypt2GsdZZxseAES3PwfRf7A5LMdosRJu7P7T6V9QsoEp",
  "key9": "4KAHewThAhb9hshh9zFuaHJt7Unxf22ktrVMNP1ghaSnjmzne8tuAzqoZ85tnuneyAQXTjU4KRrQ8ZSBVrjVQJ55",
  "key10": "3XFB1EUqF1yJu3EtfQ7yyuS1fB6YX89793siCdBhH57pegwpr22R9mJazQ4oQ2jhhjprxBuUHoHNso2dpR8iqqqF",
  "key11": "2WQozkERQSJzRdwaVdmGqvDhnPjiM8nUGtD6aZkGXTivNbySHNfCfGQLYMAVxxf5bHDXoNujQJt6dshMb1cpCxii",
  "key12": "4pkjCR8NPRvdSjQZULxWFaMXbNcEsToQFFPMykgvz1T82dBuh9T92AxE8DZg4whBDVer2Sx1J9xTMMP7CVVFJKyw",
  "key13": "2DWQYQ8Utpt3B9BaqqG1otvvKfWDfAKss99mgUwkKtasPoHfU6Wp8PUJDpyPtHsHrM9v5ob8opvLgjx1786kc7JV",
  "key14": "4cifv7x9uWNTXrYD1HTsEMuN9xJZZzvCAawywsZb3oL9yhnoZF5NWQXTe4sPt3mxkTPmxxwRDur4EVfu2tbrqpv7",
  "key15": "2YDHjd5g3jgxoAffDkRePmjGHYaPn5626qroygJs8uYeXyR3bvzHeo2zNAbnJ35P5pV5V7vTAZKWFWLMReRfCQmZ",
  "key16": "D1UhUqR7X5RzqfpXM8eiuQBu3ECpWiZVpHbqBb52oQyosHnJgR8nd5poPVSk2BbFYdEjViS7DtjpEgxcgzKmxea",
  "key17": "5jqhBn3nRq93kN3NLhYvQKQqeEJXABjpGdDyyFwtMSsSnUJRopTiKqTSvgDLdvXATZ64GS2ASiBDE1h3Co3ActNy",
  "key18": "3SoW5AwmESypXv1t5LaZPo9Khti7e4aMN3zzUfzrf1ZYZkQs899aJ38ztMnkX16MDvV4evxT6sa4uZi5MLZpvu92",
  "key19": "5s96QxsKB9Pu62BHoeqvufTvxBPyNNZnrmSdsC1PqDqYqWTDBFwnggz1C213RmYn7UvAf7pSaboR2PnMGiZdZuHR",
  "key20": "3nAgHsVXJebeaStZspurNGEKErzAx1mgaHcPCzUJGZMaVswmYvYwG4vcrtPY4Ciy36NUgeSzs9d1FMv9zf9fo8Eq",
  "key21": "jWuGW39TuNC4TfQJg44fUNW3DGh2G5SmSX33BeFVzQXrGYucaQHnVwmitSW21Ks1XvQ2FC4Je6WxJuiBgH2c7ip",
  "key22": "3wHxSrUdvSpuxQMX63oRfhtkUvXiCE3sM4ft8YHd8WzzZ4uyoYCR5iJZJ4CAvEYJjDeZGZJ5gktvTshgfeeWTQLa",
  "key23": "2RZpqHmWH2FXDNRnFPP4HdwHPFwmy17FUDH1hWiYqUMjc6V6AbSLcfWmd3ZnEqXvWsJpPhCUGUao36LUtLYAQZXB",
  "key24": "2qZMWrhFFA1VZnZpRCkFRP1fPXvBDQqVktHsah8onMzmPzU8aaHNku23mcBDnr3ZTRRTiFzgYfgrxUgnkCbzZxFg",
  "key25": "5Q4jSUkS8fTGa7uCvLW4eoVy6kiqa527rKaojXEHxTWsHDEda9vyPdD4KfA23t3FMDqaXnK843z6xWdA3AFn96uc",
  "key26": "4rKobfw2WaP2iYimqWySefmofHHLf7HUCeRCpsZvnaCK1TSMhXaahtLTzi4xEYFUfHAfrveAx2XZbZMqgDGGJpYS",
  "key27": "XGee1xcjAw81gMWafGQwtD5dDCNSm9paQRUZEF9k5kVrut8M39XhaGLykhuVAwUi4v6JET99j56oLkGBKrjdCdw",
  "key28": "2T8Q345ZFoa9STwEsDDVKwHYP5v6KCZ4zWmZxRLCDrVXpL9CdQpA3hsdRKkyvudNEepFTaiPYLVoQagyZCZGvmDG"
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
