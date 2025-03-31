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
    "ebFB4NhfqY2oiRnRYEi1hTkNLRtfbhy5BCYdpxBHTALbDR3oHV2aFnVq47V5Dk2nmrz1iZC5fHKyzRtSbtB49Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31s7HCVtHhtsXn8eUrDGGiVehpQ1rrzjcQYS2DSknpszFkwD8tuoAFdozy2q1XzE19VYoML8hJG3fxmZQuXaYhhm",
  "key1": "5YRNV2MNrrWkZA8Uco9cTjDUgo7XPAS423mpCsVFB6gLi9muzUUr5CL4ChUUY2ka2rimzpkJhWC91aohE62Gby1L",
  "key2": "Cv4CRw8YMRqaREb1nCxs2r4DUMVH7QUgtAUM2rHPE35Z7ZES1mizMAa9yFUg9S5BLFoV9X53p3CnNNMQXFumeq1",
  "key3": "5ufxPjRdLcudmm959TENHLSci6ocp2PDdgsLmFSp85qht1J9NbCe8KATAh6wmmWGC72d4bZCbPMhh4SWxmv2CS8U",
  "key4": "38AqTajPVVB1DgisF8HCs7neRFtS9AwpzncQNKkef5fmhqCjK1pHnaTnEHY9LPWhhezjDbea2nQBTVzZHYRKr6Mg",
  "key5": "5k25LByKBLcFvLaNZL9ryRpCL3nzsvC5KPf3qXHGU45hNR5t77BjG5EJ9jU6XmrvG86F67RqzFzqhp84aU56D4c6",
  "key6": "2rthP7M8riBHW9oCcg5oXA5xM5JLCq9QfSZsM5aC4MMkH3eqkpxAvzBSyycx8fcofUe2PitXT5rA3Z4v7NipABJx",
  "key7": "5EWGh7pyjuEGR7C8a2cWpQiXcxCQy5NT9snwnzhAxFQuFFhpUNYQskcFwkEoGLLkTcequdYgEc3RLAQvWgu9vzdb",
  "key8": "2LM2n5jAddaQsJ8Cj2hpoCQjEtW2fJmSV9q87fwKQWZ2SD9M3HHw13V1M4pdtBLA1AscE2Umma28Goit4veSe3EY",
  "key9": "4rnix26mz2Y1qpb5EXGjWLY9u85uS8q73YJ53zJVjHym6W2VRvKbB2hKbDRM98fpo2WNiLFKnr7W1iaXnWWAa7FX",
  "key10": "3mqmUPN4WY3uPvUJUc4zTEVLn4HEzR8z9tZscKAcZvM5eu2yTTVdTSVy9Wmw9P2tkB1qVc5L5G9FqXSTL8x3FgLA",
  "key11": "3ETZBob3cLDXE4PaC2ZvFhYRNmy9tK1T22tKHDX8nv4VyGTNMo3cRiUFByPmurZviA8nX7VF6K4g9vzuD7BLSHVP",
  "key12": "5TsrdhLUaTn2PMpp81ZVxgLqoALtsFVgBaL4Ec3SLU785ahEVSiiy5aydKSayUBDCYFS4uG96gKHK4Ry9AgKDMsi",
  "key13": "4ewWYZk3i8X2jjNvYg6G2TAj8MG4iSifsvqmUU4LmPFgYH9GhdMKXjBHbuVnXtVGoD6y3JkVGFtrpWXLPy6mwU1x",
  "key14": "4P6bHGNoGp4ii9ywhwteCf4qmQaS1UJqEq1kdD78YrAbbBSvfP5cFD8UTi7YrWakdvNRcagP1Wk2pSouaPA5Jsg5",
  "key15": "Q7f4c6cG1gb3iKmE18TKnW97x1312o3cnfoHinkZnYv3EHfkTGYYKnGsc5FuMspfLT3c8Dnsm542KkQzPqrNBzz",
  "key16": "hRv1Tfgd9HTQd5cz6iWAuQD5gXignzz8HS8ezqHq9j5ux7mKkQhvx47w2sACtvgDPwz3mpWccw67pn5Mzpn869j",
  "key17": "2aKPEu2Cy196RrsQBLqWHNnDRcGjoYGY9rxWNk4dSuzJCXvjQd9XBmXeMVu4qjHq1zmxpTynhCNFQXbRiYdeGQcd",
  "key18": "5pgpd9fwaeXqD1BcPHyn57end62QZyYtGgHJ46o6MbDZ3gbNx8zjVgy4rw4LgcwxCj1H7gw1BJUDbswQiJcGN9ZR",
  "key19": "2ChStpuPYwzUAw3UE5jZ3HkaHHBsc4QW4vZyQVX7ocjGbMnpiCnRsmNxhmabnpXhDeo7E3gcQN1HfhZykGG5TDK3",
  "key20": "4fjYm1bGN2rsXse9LrPp8JnuZdZswfoauxxy13mQZVQ6EkEApiNZL5RhFpnY43cvbBWqRzMMA2mfzsfBRYt8B8V4",
  "key21": "5gS1ksLnAg7bTwdxjCBpKP35dc2pANhnNAckBWijBbwZ2Z49FDteKSXP5Mqmpqv7oBXNvkdzDvdPnGbjtCxDQG4N",
  "key22": "2rxSht1pTdCYk8EjZd9gEhRoztb9bYWE3ZG1pKBDtvUgWLgeUrUBzEPU3TFT4RaKTPa4n4xmpXXcsMQgSM2trNKr",
  "key23": "29yaK6QQdGgRoX7vTdeur7dTCLB755NSivUvvEzf8QTa7c2tBM3gydh35uwhXBQnQvj4YcT4wPB9Rgd5jftCxuYb",
  "key24": "5eT7ZrVNAKQ3EmPtDhpsG3FtyFTowahJDhxTqnEytd38GGwsqWb9uqiqiXmbVezacpmiCTVgm5MiE4zrPNg9G2vM",
  "key25": "4AP5Erdkr8wkAEktj6RVURjtBjtLdtzHjUX1FTojoVoDw39LN3RXFiRcD5HwknrZ9jMp5HBVSYwV5PwVqaLsnRnn",
  "key26": "4Vh9CV6h2zTZTSZTbdHD7S7R1UinLXQVu5aXskq3z6tWmpzNmrY9f3uQGxmaHCimk32JvkpQ1waT8WwkZkt6BbsT",
  "key27": "5FjciU74VM9LEjEC3gJZ7fFMxYcS9KgaERoruMbKzK421bJ6GcSi6fhBQsBVn7TwmN8ZJYgx45fghWytS7ZEEsVj",
  "key28": "3FnZAw8YzVzEo6pcZTah8o5Gdedi6LfY91KcUYUHrRwh61KLNs5SpXZqweWhw9eYvJmVeScgedXg4zzf7UHLAF7G",
  "key29": "5rCdHAq4srvyKSbrNdmRgzgFh5rRKxdqz6hns5fnsv5yttYJVArmdpRFtJoxSds9w4vzhakaHXhAUyyvjR1XPmo5",
  "key30": "48rm9ud3di3X817KUMYB5cYZts4t1TF3bxJZX3v61j91gJHekMdXREttvBwvGssBH6qcwxu1KsdN96GnrfDQfF2A",
  "key31": "2VHhWCRWEDnJshpzKSDxk8vSVTWaTMnGYXw7mvaP8bVLQmrdxhLaueXgSiM6E6DoDxC2EX1AFj5kW7EwZMZ8ytKB",
  "key32": "3bQYb5dmWS7hMSYPeo6ABgjKqGcREKYi42Nu9ADpugAkPAMVx1zhutwZ3uHp1XvCfMoczRsrFiPLHjZhZzZch3hK",
  "key33": "4te3sKjkxXHhefj7WM5bEj54QQPZKeC9AKc2zNrYtt5gUjMj62PQbzym3VK44d8pZe96nPYR6USYJVShR7aLQGzS",
  "key34": "4znQJASNcmjJAnMnGz22ovDbn4cQ8nkLE6fmjkykryLHdzUuvqyhxTCsRkcGJaEbuqZG6K6wJnnNCpi8C4Sn3Qc5",
  "key35": "5SmBtKZSJvvy5P4TnjbdQktVRdNxjzTztF4G5WV7H24fMarvW2oJRRhWvLvUKNKoNgFpDPd4hBcUxsLJvwNSWrR3",
  "key36": "2DeFtpj9XiPn2uDpUfjPEUZFVN4qEdYyrH6fFfkF3zmaefCvFH2GJcWrzKux7XvrMfrWCdvthSAnar9DNvEuf2rV",
  "key37": "4Qc73oCRJrTNdSMq69raLu7SDyoRKKPzbo5rYKqEzAbX39jVYiJdW9k2q79GFtKir7iAkUa8K6ND8rMUDBf9d5rm",
  "key38": "23tScvZ1kFKKWuwqByX9EZc7kgbNheTwABqvsBTWJHeTrzDfN7jL4dE5fXL9yQnETFhEhje9SkyVf6Yi2NSKYAMC",
  "key39": "4sPtQc4GMGyhFZ7ePjKz38kxtB17rCHVyrAZD2BobUyUDuxDrcmdrGTvpdA8mmwMwHLD6AmSYzn8oq5nSaHsfotc"
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
