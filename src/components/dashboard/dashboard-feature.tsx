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
    "5rcnjCqTMXJ37G8XRScguUPcppaFrfjZvVim9Tt27JiUL2YWJv8XGQVkx58dxrkg71AXdPhNdjxMMmNxbSaavNHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApKee4QzCaogo2qe1PUDtHM4af3kSrvfUbxHL27HKq8atVh3nNDipi4N3ndJkqTktwn1J8oRxhvuhaEuxiSTbAQ",
  "key1": "4thu9J64cesy9iyYXt6bXatp3Mgy7RXheATLyAZZ7iRHPJMx2MjT7ph7e4r3C5joi8rHTbLQBwd6eHoAu4VxG2Wd",
  "key2": "4zeJwG3D1mkGb1wVm4RkYm8JFsEoYbRcRvNLXeMqmcwimSXmEjSo1b6uCK3VNjsk5dsszJkvR5vNaYYnTdccnP1Z",
  "key3": "4rSw9w31igwgXnmZs7BYHLc6P2i8HLVRyT99Q4hg6mspuxc9LUZ5A2Ge6tY937XZaszRH8CjedXoopWB3rVtbnhQ",
  "key4": "32WncGERDz1WH2SJNLhtrz5q2aujfk6ae7iZSwL6uZoNnH2ss51oTZrREFnPniG2M8mntoRiXXwN1zf1CqawPST7",
  "key5": "iCaorqvF2C4LCRaThSKrSRYFomdgmLjzBv2LRMtbBcFuXJbn2go4Mu5nBQgXTtUhChkkrR6zRK2sg7RYBz9HPq1",
  "key6": "3e2Y4B8w7h3G9ga6fYoqAMwZLizULF9VspTTfuzy3H5qn4K1KU7TJTHFVRjCEqVGTTujJZgshckSJf8uPcombhRa",
  "key7": "5VsnDF91CBf8BcF59A6yAfwNqxX1QvqTKdoMMq4NxhQka3vqsMWHPY8Mmy38MwZcfPW4PVYrsC3EVbdDMBhGvN5M",
  "key8": "d8x8zCCynZN58nyNmLYfVx1tPh5PsN3x9NGgYQpiW9BACNMR5utgSnrdXZpBsX6qddH4XT5dg4caKSdWFBazRyr",
  "key9": "Z7ssa95UTpWtjfF4uzGLxiRNEzbSVWg7rm1fokFj6aqFDBE5R3X8kVDLPn8c2GHTQ51PtuPzmjQe1gLVBgjcAPQ",
  "key10": "5cYPgB1pk9BGv6pZeewNuWvQQ3BLJ5v5GSCvpndVWdRKBMsjSifNuZTteBkMA1NGgmVPLuWJVUZkHj7PV3f2XErS",
  "key11": "3xNgcQ4fund4o4EVT4gYP4E382QGCttPn8zywEU5EJ3y6zwrCGWPkXnzFWAR3dbSHTz3pZqmvDpwibXvhfP5Nz7k",
  "key12": "WjYGD3itmJYNar4Z2UnEeKzBomAyFM2V8rf5ZNdNZ71sj7PKEZTj8nxu5FisjEUwccib7owPFkhBxs1zP1xvSWo",
  "key13": "2BEY3gGb8Kf4wxNQnBaGJYTimnmEBDw73TGNcZyzCfSEoeKLU5oLkTqz5B3QvMmGoPjfUJzDKaWgKC8KnyANHDo8",
  "key14": "27aauL7FfPSMVwBFUod8L1Fapy9d1oVEQDP2kdammiZZGanyQYPVn7z6RMZJX2AwMJydKaHkFHZNDU3zSX5io6A8",
  "key15": "52y6yPo3gs4rHcupxBKzNCGsG2pp7wcZsZaaNf7KpeCP8T4gBLG444LsvMMBDdnTSHJUDKd78dmqCCncE3VqPS4Z",
  "key16": "5VxTB58LW9VDYMFKGvjMJ3GJHmKUFzGH9Db1y8KPqxuxLevDymjMBa1ov7Pk6U1FjodBWz8Vj5S93V4aU3uV3nCp",
  "key17": "5uFu8xe5aAQN4W9u7YcC4TwP94CVtqoUyT4MReJe3YFMFALnHP75YkKYJ2q9DXeWArhA9KAQAHkYjRc2K6SRYYZk",
  "key18": "qe989KkbVAezPj1JMYHQKp453WAH2aonZsCbq3Lukiyg5crFwk1Y6EmtzUciouXimUV8qFTGXLeSTyaaoXrSqJn",
  "key19": "zAwNdvg1Ly84wt3YP9Hcjc2W5d2yxFF7o62aBqs8mSk1zwH9rbXx13Y3gPmsqGgSXjaWAdF2jdALPZCy2E3M9Zn",
  "key20": "2jgMBkW1iHii49D4VCR9kNEc263tffXqBj1Az2zJYTtcEcubdJnwJ6nW7xt53UdY7mNUyMXEEYKRtr86TMU8eWiV",
  "key21": "5R3fZJpZ89cnbE35PX3zXdPpZo2kZxbGmRFesV4AXEyi5ptPpmVp95ic1REwqeJuggyyFxdQzzqryJ1TCNy6K8k6",
  "key22": "2qDyGjm5FNUNRW5sMXXGWTvFUfLqaLXSPETuX5VTuMvpjQcZEs8kkbegqABzYx3Cp5vvppXyuUdo9Jp2hnfJeZRe",
  "key23": "2HEFNypoNowe5yFTYtJeYKEeTippEMy3U6HvMJ6YLwzcuAkenP9nJcs6aCBhcwoaCZpGehDz4kPkWk5WNmHPVpvr",
  "key24": "5aACFNV9dWEZP5Ya1vc8jTYtMkByrNGnJT4HZX5vznyUKF5KyZDWjo62MbXDboLQT2Tx2XmFunYtKV1GTMfTobev",
  "key25": "2XV8jztG5EF8USmugRXRNaJEz8frR8G3Naw1G2ZVuaTfc9325wkMM1zNEbD8D9kyUq4FRhNMozJfL3fWJ9WrfJ4j",
  "key26": "5A4FRtjRT2MtZHSmoLUzWhxnLEzjqWB8VCAbHGwmMbDjLWH5uCACAZXE2pxweDhfCeP1PZUZn65KnYtia3TCJgEG",
  "key27": "3UqpP1sh7gW8LxXwSsofjSqJ5eWoxiLfX6BtYWC27JoT8ujop3mzB5KZbf6kqSQLoqSN7iVTYBs7bhRBocPxm913",
  "key28": "VjoPUhhogi4AAaPJhnTp539Y74HEDVpF4EdXkFgst87N6uQaZch9icQPKFn6iSrVPXKSeEMYyfdqzLoQueTYLQJ",
  "key29": "2psLFU3pudJ1qCvHG5J9udEqPxTQnfqa6udY8qK5TGwachoJRyCydFkEQDU3pZPLn8LgQStfrpX9wQADMmKUU9Ti",
  "key30": "2TDy8h3zHiTMTfv3eqvCiwJ97gLYA46PuR5cyLB9VUyqXQXna2mMz4d1g2PApP6fSgxyjByPsvSzqt7UR6b4ocsj",
  "key31": "4XfAfhaUiPJS3HqGXod7i82rhu7YyBVDB6XWWt8QGME9bcyCRSjiaREFiYrywdYXiswwCdSiyY8A3NXaG5vx2V92",
  "key32": "54guxGiRh1qvZXtjXidYB7CyUm4jcqq6auhMBpzZywKWYeEf52yvnt57qLzkL4STrrpsiatupVvLQJiVvm3vGP9W"
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
