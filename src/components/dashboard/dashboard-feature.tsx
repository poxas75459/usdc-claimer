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
    "4J6nqEfJB28NcsPQkYAXEyERdb1aFG2KmKCJHc78PmdEbHfxwV66pU5RVxE4gVgfiZRvWvusW4FK7XwGniDE4x6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sg4AQ1ZM2AQc2U9EpB8V45S89ds6vci6fL9zugj8Gxx4qwYxS8f4biW3hfumsXUzHiGYDFPH1jUgeCRxvHt6igq",
  "key1": "3tRNWK6ZwNZRp4RfMc3UZZ8YqLhCqEbk24BJihfkDgVuup6bwhZ94FeTecsgqooSUAo4hcDKd3SMc9CtEsuHDH9V",
  "key2": "jCr4BjQ9GoyLRJqsjY8aDnNECkYtuieJkbLenzJu3pBp5af4wez3HCYgfKbzT7EXkduTuEmez9Zkcp6zpE6eAJ4",
  "key3": "5qxU6Y6HVG223fgtbTKQ7ULSw5qqqWkkTg4ZjEXCbsdstXicZLxqrcWYEXdbqzcFXZHRfLH78cRpGET9i8P6DxDS",
  "key4": "2aKFov2EQ7CsTkVaMohBmGK8UtSSGhAL8RCUoBpAWErbPkvCHB2Tq9MvEVNb4oZmkW8AbFHNEkatC5mEaxFBr8WA",
  "key5": "5E9h4YHV1SNuzWxh8ShG4qs1qVBWKdUgxc3yxv9iVP2ytCumSw6tsvEKBrut8hjVrychR5hUjKcYpcYS8PqagHzj",
  "key6": "4drn2HfzQhRV2JV4CLGcvoRBLUKTab1MmsH6VYfYMPGg1Rb8ErEtDzGnEo7p5v9YHMCPCwPe6a4hY7Nd4sxwuDEt",
  "key7": "5vf8ezhmvx7h8AEbwCXJf2nm2xdpzqCgmhfmb2rQNFPuN2gZ71wxER5E1C6yM4KT8zk3CNoJ11CWFjfiuTuJ5HHV",
  "key8": "44owW5Uiw3xb4steuXABkCeH5rqrMcvRV41U4Rp1mUUSjcqAMET8Z1TjmvjhwUrw3ygPXmzS2JFCAehuEFUoNBzG",
  "key9": "JmD6vERTmxiCuPwHDnLJBrX1uXJXknmK33wUaqMx412vZXZJ9sB5aC9gG38VjX7rEaEFsddXNYeWRrYDBk4Vsrc",
  "key10": "2JFy6LB38ivuYofW8H7uYakUrtHGpYWRgYNtbqEUZjU1KaCoJC9fJud2SbNmMfyoRK3NSPbqYSbUrdicx8BNeHE6",
  "key11": "3YGyNiCG6QNqPda5SNB23SKs5BUCg5i24HMX6LTZ3oNnsyWEWP6gVaCz1aGZnLTH5jrutRUVhxjfZXKodDhZakWb",
  "key12": "4FGXWSdWLQUeopAt3YjhoUQfrMvUuAMtKAZHmPve5y3UzNmyFK9G1aPySMeec2QMMjcsT6WsCy2q4xaCfxvY6ZcR",
  "key13": "5GhHnfLYhVkgX2xUqN3hFULv8fNxuTF7Yg3jgVfYCVmKB8TLPZwKGtzg2a3zPJWEFkU5YGNybmeEB8Ej8qxPAvRF",
  "key14": "5V38fBW6gWmE4pAh4UfNhgng2q7igSe5WbUJJQumQMQynkvc6ddaZP8UQAaa9WChpiYRGzG8DMkzCfA7HnXkcf3j",
  "key15": "3TnF5yr4civedLqSVs8vZ2cnJShrHrHUqJZTNPDgafKyBgMNiRyV2g6bkxuS4Wnqy1ccHg5ym4TaU531yxuG9Tjf",
  "key16": "3eDbwmcyVup78VsY5YV84WX5suzpi9jGDVB55LSY4DULrJzJemCFQJCvcTNfHLAbyvc1Ae5rnU336SrRHAWJGgmC",
  "key17": "2RiKRRr3xvv6s5oxLLiUBytad7Swfq2x9LfxLkHhEPCxwdESHrqdQgzjgXRMZVhrgi7jBHA8TuUhzZAZF7QY5GN1",
  "key18": "2f4AhNR8ajWcDGs9gUKYJPZwfiPkv9AVzJNRaQhx3v9UHnitsThZxXtbxPukXiBvCWUnhTRWWTqt73sb4Ryx5c1H",
  "key19": "5hE2cmfDPYubBc8tkhX7PN1c1L2qUHPyTpDUdyd7WorEyE63rpxp12d9K1fpnViM4uqa3xZhJnY3srB5KG4fvmCx",
  "key20": "4PvLkDygH3L7ZhQuoJggZzSURMTe6xbfLwk61kbBy5xeXaM3Fav6byBPMki3MHvYrHQz5eztBmN7jXX7QM16wM63",
  "key21": "sbtQ3L1c9G85KpWDo1JQxtksEBf3gJ47gbahU6A4prWDnEkqbEmTZFLAUn7zQ3UTercFSJ1WWmDv4W8Xo6EHqNB",
  "key22": "2BYBxcBRjJja3XGDSVxWLzyKKiuqSiNmmMmefpcBKwPPuWa6gond1xUHyCLy72fbvifuWJ498CTgCPhRPTGxyRAG",
  "key23": "2c2jLHkEfMQrkCCHo9nGioLEmQTXWZqijt4puwUNSjVJb7pXiAQYQuFnjRyi3fzAyS1iY9f2338HpfcetdaSMm1B",
  "key24": "5fVjnaLYoYEowdMv3h7xDXcZx7QrefTHN74NVddP1Vw65ZzTuNP5dbctijsBeKexd2M7EmntnSLo9SEEYmS99Pav",
  "key25": "2fSc43Cdq8jS4njX2Vo6f1keW3ZfFkU2fsJ15wB6bobJB2aGUbeHuJaMSfEM3W5L277d8HNAaBFxB8cCXwbmNMZZ",
  "key26": "sPHHbMbimWTxDNjq4iTrAGA7oUqM7BYtM8r7EwcX5mmqxPN9w4sSqAM4gvsRyGk5qSyc2gksxfACM35tK7moWHq",
  "key27": "5gZsBEbnPW7jp6AG8SWph6pgoT465twZtBrW8KkBEUdCAFq8EBHrStys28wDQDosgPukoXb2dDGfG6KjqC71Rw9L",
  "key28": "T8Lri5i3XD3TTEoFeTfX6fxxoDdoDaTxJQQ6BUzUUNANsnzmXMZNdXbfu6fZJrXsV7aBvkiJwAuvYMtZ6xhdDVh",
  "key29": "4yhH1Q1wbRkcaaBBThs6LypZDjH1A641Lfi1kETwM4CDXSaUuwDFfh3iy8jQVrVtwVR1WeHwGbRXB9edCKS9Ztqq",
  "key30": "4RrenHNUtYHU12ZwmZNpfSbbca9yfgrF8AbPk5zo3i33uGYxLc6nbQ5acGr4BxBcnHwBnuLEjcVqnsoT3H4CGxWy",
  "key31": "27p6VuR6SikkeEdrjzDKoGFM7Y8L3mZcmYN8gtxBchuPKLouEmJudXmJVkUHVRKtjVH5WYqh7bj3uBwfNHTtZpBm",
  "key32": "3bcAMSfPE5eBTk2EFizcVmBDDRRMrWx8voLJ9aQSaHVz8d4uRrxArp4YXhkoXtYHr2npj796cvZqkwPVGXkX1u44",
  "key33": "2PbWjcJwkLn4hr6JD17tQ9w3dvP8rkhEQkCWHAPdbAZ8ceB8Lz2gbd2QDWeW6YYfx3G9VtM5nHxKjE1Et3vHDVbK",
  "key34": "uXDpboGkCHVc84vibVze8DctRbDnbk85934yVyeVs93BSfHMFE3vuhk4zkAZYP1RbXUCbnDXHyeyqtHJdw9bxXU",
  "key35": "5cvL7XZPXLvHL6KpmUPLoBLQ2dJdKZLzFKfp166jSGF5JPbWGFqmzri3fs5Mf3HcxpgXV5YbUNC2Ba61Lay3cSX6",
  "key36": "Z4FGtqtYaueok4DDEZFTSn8s5nrJSR8jsVLmZCz7CKV2mRk8dwzbRPxq747r1p91qemMYuNDdRgfQJwvagcQEea",
  "key37": "ZDGymaUSyPEzPYdbaVuGcmXT8h21S3swy33vt33HzggGWtCKVFviXxhP6QoX4JeskBac1ZfnuketxLHvHQH2kLL",
  "key38": "jdtQinduAi1HddaPq6DDnyXK4qRxayEjiQnqGPGoiVNwKNtngfdsd3sMGoRthvjQ7HXVaMVJr8Ubp89paZNrbeV"
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
