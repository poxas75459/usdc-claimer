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
    "4SPtaHGjaSQX7k7FGg9tkeoeHKqax8zqtiBcxAgzn44CUUgfUAFYPdg9o185AF3pYy7Z6EN2hQzwt4A9Rnw9XNC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFw9n3Sm9nRHmYxmeJCreZr5dJUfw5pQXSbPqPjWUjkb3BX1KJDZHWMMWcyQzqYEnrPbzjrAV9qDQ3TWFuazDde",
  "key1": "61ZwHa67qduhvioEUnCygTTD8kZGDVes1sZVYtPtAZeYmZxfoy9tVmkXM1UzStSg2kUyXNkF3mPt1H1SAZhV8otT",
  "key2": "QmwsQkbAY5MdmBmeA1omcjSWx4ddousFvW6nrwm8X9i4h7ESEvCbgw15u9aX1qKg78MEMkPNqgjjmh8uQjtWsgu",
  "key3": "MZhcopTMaRhP96afzryxn1GzaAYVW3u7L3KqDkVkJiNhxMhAXajTRSuv6rHhAMLUWXiqzcr432vt45xog1SXFsX",
  "key4": "55eptHeKmuF6d4FFMiVUf4fcKLks28f6p4LnniVRhtjmG5BFK9YR3H1eTpqAtKtGHRWag6LCvKKhjDoEY199xuua",
  "key5": "31WHUDC9AcA6FUTYZmUMocoxiDZYDWR2N68GYAKdm5x64GRiACor8d9LPM63bNjRyF2fkocCCpfEgx76NRLts8Xm",
  "key6": "2PUeZ8mndAY7oLCsXDMAXwJPh4qejfYXv2H4nmpsqem99v4QqPs1nmPvca5WqA34JxZqi16uUpYcz1nZEVFwrRHS",
  "key7": "2CJABbhnnHxSPd6yAUKYFRE6bcF4NjT6YwF3viZYCkqgQwg4ctbHVQSz6dUFvA9TbxibFfTfg9bNeSv1Pcm2zREc",
  "key8": "TGeQ52c3zyE2pDPwEsJuyySQvyAszHukV3RMaWh9DnsaPfbYpJ9ZJeSsL6xMcMAdWtdat186PC9GVSTokuhcEvw",
  "key9": "e2WMrqb4qLNm5Ynk91PrtV5hJmSJo8VRwE7H33PRjMhTniaVCi9a2L2Fm7tsuWFSrWLnw47m74aTyazYSujNcdi",
  "key10": "3yto2ZEq2uZzjSaK6aXJGUYajuaqDeiwfrRuxc2h79sH4xbtZVLtzYREswVV1u7GybY2eg4n4eayQ2NbWiisZQu",
  "key11": "Ux9qKZ9SUESWXJWieG6BWEdtK4kPjxpaYfQyyce9RTUZfBX6ErGqdqWeZyyoh3LaZusZuzVqF7vrDsN2WkfuQHV",
  "key12": "2s8qqxKYhDpYSt8acaqXLHRJG6gXD54qMemnJpKCmrSDmTagxsFtFUJXpf7tNVy6fjtwp2dx1G9k8FSaeJiqwfAS",
  "key13": "35MZnkhFbw2VW9j8yS8vLUanm5VrvoPVNLVoiTbLABi5YtJGCoF3ft2SVDwKutSJxg62vuSJ9oG6QirsEGCaNTD8",
  "key14": "3zco9ZU7rKs3KhiWfrx4TiiVCdRjSJpm9FxUzLLnSk3RfAKUAqpLhTKEbFGUAWLGWrYXjB7M9gphrMWYw4Tw6fGy",
  "key15": "4TGZQ7zMVLm8W57pvPzJyVCRQP11ihihdhnQVtnkMQZgN4pfDAGyRozbvcsMdspqTdYb5hH2HZSKhmGQ5TbCQnqC",
  "key16": "2YE7Ton4VR1YjoEikUKbu6RnBmGSSvUkYMT24o2n9W1dBquz3QQXRCeet4d4xQURvYqr55kEnAFTm5tsfxPs7osu",
  "key17": "4jDiYJRE3Dr7DyE7aa7QcY5vovqfUQPLKVhWQYY5ATfouinmszrJZ1JiWnYi796R4SKWKNeELwthefXX2PZT8VuB",
  "key18": "61CwQqaeh3N5FQ7qK9wCxCz4twWSmN38nB4sTfK4cUJxjFN4ioKrwXPt5g12qigE5P4d6hHBsvQZ3e8G374fyNME",
  "key19": "5zTyL6iJ1fbLr2jc9AYPWDeGqj7b6nv2mU4ZfckPZxD7NH5Fyr1zvkwqeD9ZKvbeyxEJj4jYVuz8ShL4XSMJ83Hx",
  "key20": "38Dv2PbZCjhYXnj4Xt7vr9gsTsGpkvDbVH648uBkDmBQg6Scidyxbih3PFrbjXxefs5W3uVxUeAhqX9N4XUBgthp",
  "key21": "CpwRfADw4SV79ULvmRSkRKjhwtR1uJjc7NG2cpd7Q7Mmboy1mURNToW8cQKWH7cNNKnviULee4EKpQDyMKi92tc",
  "key22": "5EVwYfrNZC1uuhH2JnWV25Vomg23VC3LNdei2GSx5FVKEniBwqsgF8eHQSZWRzkcD4eBN4u87VHAN7PFuT842MeU",
  "key23": "4NSMhWHdk3hxcPkorqEB2Ker53U6kQyefjoF6DKBupJpYUAiQjFyBcJ6QNVFrYdtWtKhzEf3TEoAp8pbo1Q3zsBX",
  "key24": "5amBDZ6CrG82SRb8NxQdjzDQ4LnwG1kUdXC7cSkAYXv5zMUCZQfCRHPykJ65AFVJE5a4UAkEr5134aM4QEn5Douy",
  "key25": "3DruuVsc2bq3oyCgJ3tqqZmqRPj9vEGWV3PpBSZThbUPS8NH8EjFihUhgM2r1gsCGGZtUEryVjFcuycq1oYLcpbZ",
  "key26": "3uAigQAan1uqRvY6wpyQXdDZSNBfV5Lv5ZF6t7x5YLpYP7iWXGsbhdn88eWAihrLoqGtrWsg2i99f2iSALojEu1W",
  "key27": "4exTYsoD8YpnFnJE22RP7PFTYU5N1bRfd194ztMNScfqv7qCefbBpLDNFkhSgonc9eRCVC2q4ygtMbGEG7sheRn4",
  "key28": "E4g6aFR5KEFnb4t1AYiFr5JGCkEfQCrEphKD19aL7xUTfJs58a83vS1U7njzxmWxYzwWJGjfCZWmZn9jHLQ7rUf"
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
