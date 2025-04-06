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
    "5AymxPipbSLiwuCecnf4Nj2uMSS6jbnL8DCseAWAENzthCdqSrNYAg931jKbzG6CnrAxuTcr5VYgAgeESKEYMZ9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLRJMFF5Ya86Javhx4KtZqEntYSVFjofymwB8eB7RoEzy4TUARqygQBmr8pdGko2SyAEbfxREKwJkUAS1AAiFUJ",
  "key1": "2W7orsBxJp6ENJBBPbiwoTZHC9hEyycHEzLNjxLaS94d7bgHiarLUJFV9LUcvkDsPzTkBt8S4Sxk5Y5BBSFknMvo",
  "key2": "3qiXUuAPwkbAaqrcnMjZzmv9qD9eaqwzvgu1ABQihqNa2cfrU8UN3Ht5f2sgxk5nRNvTCQfNooEbaHYfsMkYZXwT",
  "key3": "3PUcburPQHqGUDTURi9BQTztYLA2fB9TQhq5PEG7oaDLMTvXFEk8PwfKRvA82LNgBjRssUEWUggGEsyMak1AaFtE",
  "key4": "2GqWNoAaqo3QBwdwFuDXQbeeXZQkZzLoN5DVjNH8RiLA8NzeyddZgA2g5JjPojax92MJkKczN98FUxVytVBj2pzY",
  "key5": "mzfQiNYhRF3USCehNbrNrks3bzqvH1sDCLtonPtL1BhwcKXLg3Bvg43vpA7bump4cudtNsk4tNhTQpFKvVFhQCM",
  "key6": "4rbM1fDDDX9FsjexihBfXx3ycuxTJwR3Xx6KyFiWbw8HMQgZAhnTXxPB1QtJRYKMiBWxbN4dmvYPEvXt4zqdb1ow",
  "key7": "fNRqzS2D2Fi2svLa1fvCFx5PXifjQ3LSq8CeR6V4ToMN78KPsC9koReHWTskje3E2UAu3k3AAC5ojWCUWm2ZVr2",
  "key8": "4Mugvb6GstxgTY3EQSnkFu8bBf6F2Nmy7Wyrg8soxXPdvyrRNznHC1berU12vSHz3opkM1Je4Dxoj747UbPq36ch",
  "key9": "A1y4PKVAecFxwpmeY15XcdzkkU48p5pQ9JbLWEyVZnTZt57suSrd5jLRc3xB4phmutvy3YJTC55Uh67Ueyp3aqR",
  "key10": "678tWTHrR2fUwhjZjBi6QEiqEH1PMyMBoxaDWqcYry6GT9xrXGs7noS86n1vGkc9jjfKW7ZVvo2CzsRSYPkGP5pW",
  "key11": "G8dsH1tpHaZyssQeM4u2AtkKKTzpCRxj7EqoMzTNRAieFR6vewCpAn23ojAkyDpMt9vmZqaAjVPsm5vbuZWRueY",
  "key12": "2qjQ4faG9D5n7DL3bpYSx2ygtHF8yE2EHCSp57HqTfoFQvFLNjV1vcoUFyE7vMqGd6FGQaSQE1cFbuMmeQHHRokC",
  "key13": "5EewKnTb7sV9y7XZTn3N8zkWiYcTwLGLfHqNDfjEisqfe5bNu39NmGAkr8nLqzV3556LL3zJ6UBVdLbAVYeddHx5",
  "key14": "61ovxK6ssysFiM8ftzfjb3qsobKqtZnnTzJ7FJogg8FnH5xUFuBAp6oezLNydJYbBiuZqHjztbQgZ3cQCW96WAAF",
  "key15": "5iccfDx6Q7QJbGDHQCKVocsxYew2ztvcHwCCvaGiqgoxHFnH9xVbA292NfoXBSZtnS8iAbjj3TkgSD4LUQVActev",
  "key16": "2STBrn8Ksy9QSYiw6CsCEWo2orxe7kjYyRTBvA1judqFXnf8VgorhBrRL2ixd3UoQH16ZBiCqSeyUiyaqY2UD9q9",
  "key17": "4QuTmtyG1PBwXVjqiiAYjDBJY5CsU87qBGPZdFXnRHpnUNNhcQh3LQUDKgDZs8JDH4Xyefc6LeZ233k2GbkAmKK",
  "key18": "5DL248vHNqo5z38UooNptUHSWHZFjDX7p2pjL8ivd1BsVQy3S9Ss5g1zWuHMMTix5ExUT9W5hj68bzmiTF4bSNuS",
  "key19": "25gFxjVaGddkr63WAqjA5FNLemBv4VaLZDo9Ah5M8bCvL5pEpx5bYt6o2ZKzGAnrUJCLe6EWr3nLtCTYerm8Mz8T",
  "key20": "5RWvQHyg6CoQTqp81c1uJfJPRbrT5VPyk9KRxbyHDdnuDQcpY6HT2Fiouqw6rj18WSAbAtfUUt3yt1b1d6zkfxtu",
  "key21": "56HNeHXjV535M71s83Y62rNcfrmhVM1oBo1oKvb5H6D9rrgA7WZiV9p54t7MALT8F8PxK2GAhcNS5unh2oUQS4mo",
  "key22": "LLnaXkUrVF8N4AYjTGi7pgSXsmVAtezECrmY5UQDitG5GNriN7UiSXw9t7j3Ty1c5uHohYV4pGTY9Z2YbCh73dC",
  "key23": "4t9fEw3oS3UqL3fT46FiG7R6nd6haShhWyN5kpFQnqU9hnb6Tn8gPV51cw21YGuHxBfWxrmBuMnkoxeAjS65Nqhz",
  "key24": "iSDHjrdWPNMg4g52evetgoQikBCHeVQWS7LgaATbrMyaVmQApEVaBCPvVcd7fcbrTjfrgx2dgJrFy3u59tdoXz5",
  "key25": "4dVMtv9fPfNE3XQsUuRL7CriKneaSXbNhq3Xc9je5HqdSn2AjYSs3qnx87NHkUKtEWJ7Ec7LNXpjJkNPs2d4eXNQ",
  "key26": "4cCBmEEhJvTTBB4YMRFi5mYs1BaWhXfw45vBQxFaDrcdVgvLpsg5osmtxomx9oXQZt8M18EiAv455ovPSxjcF9re",
  "key27": "34BTrzqDsdVyrpbs3YTfvNqzLQu7e9mj2hCqmvFNCjvX1u4ULEGhzVTL7hJU4NorA5m2dvciUk4fMG7QMkgwQs8x",
  "key28": "jU7K8SkutQpZKCCF58y9wZVc9kiVTGkjRKGp6kxFzYAEw218JbQNRgyqM9MpLh1EMjQ4BBrmbmhdSYSFA2KGTu5"
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
