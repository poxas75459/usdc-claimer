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
    "23npKL3YR3wqzuip2kTvDiRHijNkA7rgeB46tAwwtDsJDr8sgpmfY2aGgSe6ohQhUPr5hhRiJaBbtHw8FVxFB7HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTWMQ1yR2iLYETWa8rLwdweVBQG6uoBtguaASQpJPaepfmq5Ut3NAJWMx1m8ronFRocx2b8QzxLH56qfkx4gpLh",
  "key1": "4aNnMRTWTZFa945f1YkirF9pNB56Q5vWNDhqhx7wC2pJYNaArLZqckEHWYwHA3G43oCEDV1ntesWPXRxoiFvx53B",
  "key2": "5eQvuyJeAz2G9Az9Hkg2KesnAtKcu2Ah9wWYf36pmCoCm5mQHJAzmCCxu4QoKsFRhUe9urjA62XiKcmZYBxNutc5",
  "key3": "wipi94Q5cUysy31bQHZZYvCJ56EBy9wQgkutGACHSBeFjbeatHDy8swBhT1imqGFnhrhUWqqejqSDZkeitRHv1J",
  "key4": "34MVRKbfDcDWBL2m1xUPt33qM1RUAuqMskdn63rAYMWWW5jBj4JJnVEBpbShG2YwfjDkYHVRrHGGNz3JxUvWCHvv",
  "key5": "3SdVWMRMXmy8Tac3KQHvfQnMbXYWCxMC1fvxJJH7ZmXLTaKUW4tTaGpiBMetxr1q6zZLQfsfrVHs9B1EGZhcjPFX",
  "key6": "5KcpiFUezD1UXKjrkJjquXcW3RqcFqUSPeV1aKjtPkRy5Bgpavd2iwxYAXKn64SXeZKW8vV9i2RBmqS7mPtAZuak",
  "key7": "gbcPAKmeEp4G4wQnLCwaeR8tFsuWA4Nw6SKAFEZugfqTRrWyGUQb8qzSn8qWNtYnFUfTsKjDAb1KmiQC31Mfwib",
  "key8": "5pSwEGaRcGiwpCoMcWivJQFL6Kj6T4oyeFnhZXr6L2zondFSMNWA5R5BwQZCAJo2vkTtSr9kQkwUwfEGUGntkBSf",
  "key9": "2HdPK1VK31mpXi2wtqqRm45JK2hgrbL57BhLBjGnUeqzpuVbUgc9Voz56eZ1GvgovNGAiw5AiU8NSQmKJRcWJ58J",
  "key10": "5BTQ4FRxbS3RNeSEeGjRFBUjAC4tX8GrFHvunAwZvqcX1sZ6Sew5n3FMbjD3pV6ni558w4wVi8F1C6DpZe2oUPZE",
  "key11": "34oj2y9Rfjv6E54dy3GaC6frZd92uVAzjPrFzBkmxXkLYzTpMkwmSdnNemtmJGX4NWG9h81RrpNH66kqyPVJ1ghd",
  "key12": "Ceh9WRHeR8ZZMog4ZCE7RB5W4ZApF2HrtGmAyU5hMTUSbjEXpWz64ytD81xtbhDmPWWcwEyWwP1wgviYHi9Vtmn",
  "key13": "3bPSABMp2Zk8QHeDNDDZp9GBiM38gUahZZ7hiLJvmxv7sMHrcddvxQjV7EEJ6mf3hduiSgSi14enW5ZQSgKtB4Ak",
  "key14": "Cv3qmnTAw5yaEXoszwzidPzYQVkocReA1MqJ6c8yu3FBCmiutSHxsn7qHoonmTiafRQPDAThcsxetaCHxn4vB2w",
  "key15": "2ZUdUEFJmjycdobe7ARdRK5BbvSwRsTYz1Eg5vCkRensKZYETBnMGhuB7DDU9bE2373j6oPpVYXqBwygWgCcm8yg",
  "key16": "RgFZ6eanPG6Ys847QCT8wSkdH2SkaVSJumy6LXLjuKZtQtQvgaBiJ2teKLngsKmypG8qmpPRGvJL6zjXEFdA5cu",
  "key17": "rWc9ngZMAX19dKT4RHhvZNmg4HFdmmt1axMQkNwTUNKjM6DeWhpi8i5fJpyKLqzQzVUHRSnVpoe34u618L1T271",
  "key18": "2kubYaLEnyjMGf9dJazWVgKCuEqZgNp6PpbSUktx5dCkGsYmNfK3SgynYGrKvhyi2GrvxA1u6puEZnMapmoJ5BZy",
  "key19": "21VaoMeRu7bD2mdN6cQqXKdyctMCkNCtS2P3SUrRkTqpHEd7TcUaJSvWZaLyBBK9N81vFHRhaHFQH28mXSHvdvkG",
  "key20": "2zfgQvh21YsFYG9VYgZ3oKmqf1LWfEvCgjy3dvuoyEw2bAL1mMgEVQrDYyf96oqZcMwiNQmzo4XjnYgmCZS8UpEb",
  "key21": "5pud97UbfXtx7VmjuCzRXiKe2QcZvCkMR4UoDav41htZLVHtpDF4vFzJNUJh8TSDK3PiBSpfDxJMjf2X65nXJNTy",
  "key22": "3ZNgqSp8aUVEH3BnhDQFnQpGpTBvnv3uRtULW2vZojiST5PfU4otKHa72mEsyjijAEjKfGpwGZ2TadUchQoFNW8X",
  "key23": "4qUPCWoy4akNgidHq9KWgxhbQdpfiTsxhcvYFtHFeuagjdcPDAVjBLm3RWMAvhZ1MsefqvvuxFTUXECew4yY1dRw",
  "key24": "4mCmoxr8SXvSbvxSg1zdstrfgZibsCXqqhxkY66k64Kd7KmMjZWJxDiJhwc7FVJ1MgRMp3nURNrgwxAYYy6kixEy",
  "key25": "5ti72XFgae7eHfpjdWmeXQa5fb6f4iwibzDRpuk4TmqLuoQNfmCsmhLTdCVjS2SmN2M1cVcXaCk63X1kKYYxZjAk",
  "key26": "5RxwvvyPBM2mzjmAzTAu3RUfkFa94pLqk4B1z47CU7igk939rDrqoifYQT4yxWSxmoeRkTjw9sroxvfjtezFLYGJ",
  "key27": "2NuWV7PANKMuyzpLhHLvmUcQ5AnPiUCwcETCGJ3ou8nNqwkTnSSnrWoh1aVuiaybScLwQM7F5rk1jaDidhLQhAvt",
  "key28": "3KBQBSwMHtTGsfaE2FxaY5pT8PRyeMfF3jVaeCSeXvg6NixZ3gR9vHh9MWMCqNDAT1zGhcuH8XYAf9Cq8ngzZMsq",
  "key29": "2gAu9U88E2F7RacRG2ZrirX3aipSSRuHbvytqq1vLa6mr87Eb7DZg7WM6ngsAot5YCaddJg8FTCXvXfRhAfPjAQ5",
  "key30": "b2L5puLZThvbrPRtyfes4M3vj2VgXFwzv2Qfp8rvLQxjLJE3QKTPLBFdVgCEUe2FoYkBQP58k3T3Cz47NZ3u9ab",
  "key31": "DJ9d44gX2NFDtc68a8WtwsmAoSuD225HHJApMp9Rt5JHjP3HBF4UcuihQSL4JDQD7BqSfLr3A4qCPREDG5XGnv3",
  "key32": "4zxw9hcht1dQBUFTpsjWcJNmJiHRMkETECHJGJaEcDJuqTbE5JuCiXkCFu94FaiHNfGApZAmN17DxTeb8kkVgsJG",
  "key33": "5jiS5HRAmnatCBCv2YBd2Pqiu69kzWpxtLVap88CjnMqJ7LBJfeQWB1knFoGVsJNRrzSYGU9UMAXQ7aGcP7RZaaQ",
  "key34": "3oiH4zGhNgmih2GstGLgKzpmFjvvocG5GChNmTGBit9uhRSRvBSwtUhGQGRM4sYbzHcR9qVWds64xAbSTH5E7Hif",
  "key35": "5WRBoVRGEr3D9f5ufmQJg6oUaLmXNYu2DLwjR1uV1sABcqJ5wGin7kWqGGnukfRRGHPDWVNNKZw4wpeH9XRUGNwF",
  "key36": "3PA1izoLi6ftgqwNSTsXDdwwm1sdKnMLJqaBa1ZWPJBomYoTr4sSdfjogxAmLWSTonrjJMDqdVm9pzbez6BQ1fDq",
  "key37": "9FrSJdG5xPRjLoyMRMdkrUtYhrG4KRvBzm9mot9nQ4Yv4CBtV4o5tsAzEtZhfP82iAvCfERFKMFsW3wsXsQN6zD",
  "key38": "5MjNdnG7xMZzUuqJkAhVsgJFqRdJgLfuVk1QAYW5vhfkfsXcLNeRB4cyD7pgG3BTAkSvhnBzo9mYQwAYDiiRZWrE",
  "key39": "2TzgKGp9VW6T1W3AR2nZuCXJarBidL2eS7jYFERtNKeYPGchV5RUbF3BmWh1tMYRqVo7S1fgsVdPS9vM8BUHB9CG",
  "key40": "5HgL3jM3KSTWEGio5uekGY8MdyXFEpATKNDM4YXq5CpBsVPevogsHg7nPDQB3nJu7iJYidWZ7x1hD7nL8fr6sAra"
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
