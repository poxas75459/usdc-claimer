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
    "gdZ1enUCg6APXFSCbczHkryNxacZR7nWjBj1BHzep5Ab7pGwDbLg5eAL3hEu6sMc7GApd124BnyepBLjF6WeC7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BchKWgUN4eD1V5q7CgrDK8uFkDtQYjbBcB7mVudu9fAKao2XZzWAvgHi4sYMvMxyFEThsLa9orU1NWXCgFm2jU",
  "key1": "NhLEwsEw9eJrTQE3YJPb8vrkxeHFTjohfm94ot3g8YaqWj6DPer794dm1d6v4mqRgp85BZCHrJKAK9spUiEEmw8",
  "key2": "3AwRFk7rMj8nYiBYajruSj1o6zgmuXaK795CTrShqMAM1YXxxxiWbUfiVDJaeEuHFL5pqXM6f131zCQ8ZMzcE7Si",
  "key3": "3nqUYzfrYGJ1AEMe4jzakpN2EzjntooDfSgEACvgL7nk2EEGfTwJtPBJgVUXZz3htnZAQm5XGhoSbJnpRud98Yp",
  "key4": "67KSVYfqpMYRoPNV3Xh9taUhoyRL2vDBQGUsLrLNT2MAZqu4ywt4bvYUbc6BgFfU1z89EdEzpnhJ7fDweFpskuDX",
  "key5": "64Prtt7vyDrvpV4PHo96NUXgSQDLC4oas9jUX9heUtTvoery3tqDYvu26L9wa4ScU13azKvJjqEWv7xpAYvWEWWp",
  "key6": "4P7vo6CAaMZdru1jkfU4JgV9rvQj5bcKZ9WYtbspdhTwQAEnnUAYcQL5QYi32ZiPRgfqBxmhn9bbcDnGeJmWScvQ",
  "key7": "4xYJCWBw8mr9MgCJUhVZP6dGQzHaav3yVdyiwBVag62WKoSHMLYcoa8eZZv1cTx4ayGpJUKX2xKjd8qz9UvMCrKb",
  "key8": "GgVkEafN4shf2ydBygo47RPdMfhPfh47qRFE7FPQEqgEPsoUCUWSUzTFZiHSQoWwqTuhua4K6nrs6Hcw6WhEma7",
  "key9": "2Pae5bu9Zbt7Gy8iTaP64BVDgAS8JLWcwCxdxLZRmFB8FSnXwoZPrSfKaTA829knc7gPR77GKmWVpMJtmB7nYAzd",
  "key10": "4tvdXjZCfjeZpsdwBKqLwoBu6Z6TrTM2jDM86g7r6sPswaSdDWnVjGohxUCCSqypqvqVR5ru8TtZgGPweRZbmPr4",
  "key11": "3CXP3r3KutQTDBP1zGrWjGDC82ag57DcBWu7rd5Re95u38Hzg5HTYJJAb1kKSUFcBAvD2AMbCNDXDzZksh3jCfX1",
  "key12": "vh9CMtNfHJkX9CJd9GZz8eEEdjJ99EFgZrhRHGqmKketEpiFCEiVcB53Wmy3ptvGgCpiEyWJ9F2nYJhDvZb8G7T",
  "key13": "31Ur2Bq4yM8SouesuVz5TTf6wUJx9Z5C5iBuaY8qvTwWMmrroCjTgmnbjVJfQbNbJaDbytvAJin3NC7wXAfgaT7L",
  "key14": "ucqiPeNSqAXDCt2cEuhHuKEQ9fdmyJvL2ZMbFDrpLwVWwfdWWPaWAJjA2RUBUeKdQqHAiz34aEokVX3iePWK5ok",
  "key15": "5cqJcNCieuM7TTXUs5cUjRpFyD3h2C34CCixesusajnYpvykhF3n6h472ArBrfinggRcPX4MdA8tjaKLpbs3ibjX",
  "key16": "3YrUqT3dkW9QMF5CxxMWbMsuqArvJUAHbg7XPD4XrbMTst6aHqL1awozZKTy4sJKCpdbz3MWz5JnBtYJvBZJYnmu",
  "key17": "gkkyfxtexL7M81JRgJG3jCLnhud7VpcXzGVz7ziBUFMyG2Rs7HPAf4U94SKaeW2HFYn3QbHYX4DHmAPCRA23J4C",
  "key18": "N4gHxqszfScNrLEMM42fFKNi3oZUw59hnfPbCNhvDMpuEbDgK3goo2fEmC22FtZ2wnh3eQN6QS4gycRXHMygCEq",
  "key19": "5k13pUXS7jVmDRGBg7xAUbzvRQfniYkunFLXPcPN1MBzWLch8hwgL14h6r5qeTs9gk9EArmkkUa71zLTSs9UhKRM",
  "key20": "64azzrXvFcna6Dr58kUEkodWpPvXt1AdKLSqB1kAdta6AEkRTV7jqF5c6AiYDmqfHcChncZFDWNw9hoTGCM65dtP",
  "key21": "3motrpcui8tDhWUtbMCQibwip7qpq5tyEZaLjBAUKdBX6CBLygacw2NGHohX2gvCWSfemsptwjzJ6rTMTybevd9r",
  "key22": "3MtKMiGpUkxszFws1Z69Ygz4c1mJbpaYxawH84LNPvCEXnCY6yrDhvKDX4TaUu9XBLwdeqoiee2PrFgmKAKWVimY",
  "key23": "4ftegrhru5WoYebikJv2Pmn2BomPkn62ahEvFHBJeVKBS48Ug9rDvpVEVNRez9Vg2vSo7ieKMQkB7fuaDLv7A4Y",
  "key24": "4dsTwRZvzEqymsGtYCfsq9X6E8hwPacg1XysSmHbLDzU3WKQGTafSqpzVRR1KaVFUuJBgx8XG3zj65fWHdkA4CjG",
  "key25": "1jwf8ptKrJxj2HZtmmGmRewiDcjgGQYnqXrvWgUBG3S99PVq2viytG1cgwiHTNG7T5dygn46nSpp44rYXAKbcsk",
  "key26": "3PFLX7tE4CsudqUa4PmgiwPu5VM2sGAs6iw7SkXzDzLYjGEQ5TVmyg4GGxmhW7Ttok5BdyUhriLK5otQSkq5Wxad",
  "key27": "XB3h217bVkvd4wNFUBsyLVwbqQeGnNA6xkXyK3StZFEPnortmoj5A2GSEY9yhCV74sptycfhkrAN4i1QtVGzygU",
  "key28": "6g3siwo5xyqb4Gr8xmCMcA6dDWQANpLmHiW2f4wemXRrEbWhrKYxegdXiYAzVjT43kA29vwEKS6tXnz5W5dSJyD",
  "key29": "3HoK49dnp9FNeBWgKXoG5yynVsftaKhrSroG5NYbXjC7fXmVkZpXJv3xCnxEhZUJv12C73BbpHPFrLQt3i8xacSD",
  "key30": "2WR1DqLwd2y6Dv1qX39ycCcq7uSETG4N4V71THiSGHKjYXbEZrLRbmKMmy8KWDGMTZjxEHFGYypxjcg4Nywg8dR",
  "key31": "5A25twXBpwotHUgKk4NbFSFYS8byCrHqxWGRGvgQ8wVRWxDq2DdToz6j6wEKarRpidWNr9UokSqSpHVLhURCA5Gr",
  "key32": "21358LH5Wid7rkBm1FWEcucyQ3MST6jQKCAXMpVsMmdbWQ6Ca1ucpJGwCamriBK5VXatVXCQjb4sKYaJW6fxBHfL",
  "key33": "4BSaFzVr2YjLk1dS1Xz3XmxagrumtZwPM2rR4QJ7QMfZ8MZWKemzMZVgTjLHrXtqMSEwbtXs9rewDnMX2k1UBbJP",
  "key34": "2bBYTvHint9AdFdmbbziVX84H4574y9iaEmcJUBaufJa7e3Ti5QtcVK5z7b2dRei27BVuGJbAfreNb56BFB5Mftb",
  "key35": "5XX96tkg75Q8TG8aZb1pZ4FE5MQEF13Z9f6vvUevY55kYkrvVNpkejL782dLMWk6ZMovhg9caG3PvRJCsqREwLcS",
  "key36": "3UsX7H45bWB4J1Ey9WWuaeXu1VxnwAnicsWSV93GbJYpuZZU9eheZnC9nGjM1G2A7a7X861nFCbr88WWoEkNbTPc",
  "key37": "5V5k87MUVax3WBU6Cg3fPeNBTXGNt4f4GeWpfnNN8DtyJpJCXW8XSNgGumAeQpLNEJNc8VYwv7H1iTv7nQHXWJqZ"
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
