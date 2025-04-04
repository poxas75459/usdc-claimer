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
    "2QeW3MjxjMg4j53jNmmXSFc93mj3wp195ayhURS2Bdxk6Hpay1uxrTeKKA2g3iPpdn3wHPyjZviTMv8RWvjLdw7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyiv6LT4jYYEoowAixQVGKKCaEAiqsWJL8Eof6boMG2ck3z73omcV1KpeKPxDMi6AfRGQNS5te2M2xaZdNBtnki",
  "key1": "387ieazZPNJ3p3F73gZyHsNFMDva2Sz6Z2HuZbEYnEVFTTiFrncmQctyzyfYBCHKyoBArhd7EzdDDGtcXWygBB9V",
  "key2": "jS77zPh7MyWg8Aj7Gs3rXEQGzqo8pZaFCcj6Q7v6fz67LSG29SEsCmrqaQButTXwGoJy7oytyM8QJRwhdbr7VuB",
  "key3": "2fK4hz3A3TTNkEZHCz66MsNJvUNMaRYidJm6MEnvN49AaS2JnNNQVgMpQbufipHyXWxpdKL7tQDyLMejtCkuQRrM",
  "key4": "3rttqFk2xKqBpXWbXoZEkfTTV29xQS4PVeGt5WzYYQpPj7Tczvz19QyVPDmsYBV4PGg9e7Vb8nhBFeCYrwb7SJHN",
  "key5": "5aYYVDK2yfTSvj3dgmXfvfL92HkYKa7iMkviNyvzoiqXt6nA7bC6quVqP3i3F5ofv3mtU3u82v1w3WRjgyvghMQj",
  "key6": "557oJTYqyp6SNtf5gyNrSSLuZASse5kyddjFhV8AqKWyi59yCW4Q212pscUcuzVfJCwpjZJuqBxB2d9HbQXppyHk",
  "key7": "3a3Ga4W94GENGDPocAytFqYVBSpvfkGZw2dpzWz1okqkEDjfHuyZGvmif2d3Vycz8ULvkNxoosXCkUyxg3fPW4N7",
  "key8": "MaxnnJBQijxzEWo5tMm31LFj9iURvmka8phTKVNXGsc8sNnB2jMqFPnbfPWkYwrYTHmWqbwTtXifK9utqmWjJN4",
  "key9": "3kkHnLwabYSXPbrTBtaJHmMjW27GiXy4eQKDwU4QRxuJKpqVmTDyye268bZ3xy5RpchuqjZ1emF94AkbTU6xUJDY",
  "key10": "25Tpm3z1is4WLPWJsA77oitpGofQ7qscgbTjhfSw6Phke8sVYWkmhcg3hVvpHLomye3VFvXgGGL44urAKmaq7GMu",
  "key11": "5neazvS2Hi3y7VKkUqEnE9wamgi3CZ9CPY9MN9p1SeS1MnJVn2kKH3cLKWXoXLm3ej5MNMj3oEbAs168URXifUXV",
  "key12": "3d5wejiu93w9HdrADWgBdKoMa18m6PjsTbWioazXhSvyv2qP3JibJ1VnHY33gTjhSCq4FjJ8Jj6ucgBUqp6t3YbP",
  "key13": "3dPuVcWdDBSw3XnVQiubFUNvNUhqxVt3fNK67YNq58E5tfgdkiMHb6n1GRN3N7CKFwf6LS9VnuHA4YDCmxcNCKZe",
  "key14": "3PCw3koR4G5q1Lz9as36ydgFmf1MacLteywsnXLLnCSJxZ3zaMpeKf2wKBizzjPMNZVmLVbQkGHJ5dLwy8zciQqs",
  "key15": "Tf8cpiAArfP3RaUWTpKnpNyDRvSbtFSELMYSUKsrdFi7gQ9HsCbPpFReRoUJLs5Y5gpUmNPchcdLQoeknZ15Rrg",
  "key16": "5QzRXGJ8S1E8W2rviVKou1surKV95ueBLD7ieCavNEoFtmeHfuCM974pGTpggb63EVT34iSC1FoXNJSyxPjCm6tq",
  "key17": "5KbX1naxZaCscRrUnygewLTKNLHsdotNRzGdG686FP7cbTHm5RuhevAJSYpTYVsmR4u3BEqJqfRiTtckmUr86Qje",
  "key18": "62ajrF3827pMx4rE3Pxu19gdPdY3v5UwEfmCSDJWe73PZuu3EEYP4rUg8ZaXfvxmaCDiLrR9BZNtgCukWQgpWd7G",
  "key19": "4JSuhHZYxZWMtNNkDs5eD4kXbaoc6hMNBjYCqNkQCqcGkm7U5mEGm6kL3JYURrUBowpmcpFBcF85U6S4nt2rCGBx",
  "key20": "4Ajn8TS2mw7gcyxCSWan9BPmCYKDb8hKbTprcyDVtgsNGzoe98daNFyrbDKBG4gxggP2ZQ7qn1bBH4ZLhAfs8Vy",
  "key21": "2NBpMd6Vq6LJw6Uo3j3B298q9ymFXUqMvTBadtbuKABa8y7Ld4NkuceKuzFghGBwizrhmkteYNK4oCPUwcwFbMhy",
  "key22": "5GUYifHvYEbqhNdFJPuwzHz5UVo2PqGL8DVpoFMEG5TYV8jkgYZMJefd1Kx2iXixxHtSbPYvrGHn1hzMmLTKqbee",
  "key23": "5uH2WiKCYSMqu2BMyhqYip2GbFmax9hozYXsvDpQ1kdxphH3PzfVTv2LKQ489z76HxahoCMaM4SEi8BkKpSphhgs",
  "key24": "boiCdoY9ZMtUu6xS5G6W47DbWuV1BC1Ax7ba4cFzSiEbthoSJ1g9bHqPyQigmH9fRafnRYYCLhrb3oVde8XXsXn"
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
