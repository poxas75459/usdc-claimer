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
    "3pLXuuDMFvcx3RDK737mgEDmq9uEWdo1Aiy9YKCfCq6T61hEAUrX7abkYrvsTuwQRzrCgjhCAEUFCahR9EfzaZmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLeFbTbGBCvjewHjhcgaDhNCWj9CgUTotyyXFc2LeVs1apxTgvw8gFNFCak8YfWDzv5vGgjD3vh2paBoi7uHHbJ",
  "key1": "5BeqaVS1DL9vYcyrGSCqLTDSQ7Ns87NWBREhpuV5RXX7jwKGuGzbuXtZvtjCDped8NNu1N8PB7ngufvJwasTUWFA",
  "key2": "2g4qRbATyrWoLxtnicc3AzALJhg4Jy3QW8jioETkcNQB6okEd3xgXcQZ9zbYq3e3cAJsj2f7MQr77efpTxx5mZzR",
  "key3": "CrBVqP6wbqkbnmkPWX6bb5Nt5576cWptBYdzfzb14G24vNot9TWaVAMLXr1GZwmAxKd37ckQ85od66qmfpBecwE",
  "key4": "65agv4rk8KHXkT9a4fwpyoUXe2g3TrVR4NRP9vGndGzg1HkHCFTk4BgFjnSETWPL8ByMm1xiqKKPrLTg6QUo41iz",
  "key5": "3xnKBNeR91YuzfJaZ32nmHir5528rM7ph5iwuNcmRDPemvg3gLmv2qEkR8AYdtJH8pTVxdmzJSjRjiSL32zV5Dei",
  "key6": "3GaH1Em6b7wHFYm6MtKYhp5MQRCKWfLd95a8UqbawyQ8AyxuhjNHx9V4BDKVUfm1Xkfe19XKKd2NYxbSUULuuc1B",
  "key7": "4XXrEcxvH8NFkWEpc2EnFRRuBGoo6KaWMbMtsUffHgjWwbGunqqT7zdfK3crvvx1epaCbEJeRKx5XjUHYFq78hHJ",
  "key8": "3wnXwnydFmBygZRrvpp6qXMnwZPr46yKSU7Y3NASaiB8wULugNL5t5Se1tQq4N7EfW3moKb2TUYHTW29rkJEQfA",
  "key9": "2zf1nrg2tczc2AatF9Hr1W8Q8WKE75H8UpJ322APypKqdikjeqKpnW7UUvVrC1XRSW5CPKgjrLhu6iz9UKDbqov2",
  "key10": "4me3i5Stj4fJqVSfwFYWGQgTdFjT4ZCNQbpt21XG6gyKHNPVDUbf9TUiDM8ztc5Fhr4F8LeHxK4uTDvKmt219TQW",
  "key11": "jWVssDvEpqeRqmvPMiakh8Cz3ybaxByp1kQuXjT6Pp4p45bXnQt3HvA7G5WtVWjdfu8U32r976EsZuriD69sfXf",
  "key12": "2i7r6GBh7kt4JcF6cKrCcqG9kUoDPfvLy98AYP3RvZT4UDxrNsroExbkGJzB2XfH6BUjTvmTQbtBZ67xz4Vq2qZS",
  "key13": "5kuejV2nWgFHhZDUXr2WCgfx7Yp6mL3RWjchetDx2NW8iTLCDw68Y7qRAHcytJFtwDDSVqZW7Rs1UYydLwyBMmDU",
  "key14": "3H1mCrXZZn6stsJMMDA4AEVHr5Y12jtDwm3KEoGnAsEt7N3SLKoBAGDPRsnYBPrSKJzckLiPGY8nJJ4TV31Um1FC",
  "key15": "4Ew2rmgVsiN5KgKK4boToBq5c7d1nmKEB6BRYmeoBRSsuRd88KMioAEjNjz1BbMAhxCpL5TLoAAKcLCytbX9NaHm",
  "key16": "22jg112QATfapSKiYbjkRhZmxg1USAjzYmLUmyP5BqwGZP5HaCN5mJVXerV5bLnQdX61WMeYdT7a4a3XCzdpdUnw",
  "key17": "urRcu85koS64Hm1R86TkyEBhTtVpax8GwnRovFyXH6DaBdUrWUB6CsXfFit3PiYayokYCb9eqmUworcoWY2Xinu",
  "key18": "2numcSNEEpuCX5FfcRip8EayGpMb6BRRktxG7BoXumzcyKogAs8TqWngFQYew4SsjBjghzFvsyjt4p4yrW1iNe2M",
  "key19": "e8uHuzsCLov6AR57ihuYZWRCmS9vkF2YmkDHNSVRUjYPQf8wP8KcrqjUK43KBMGLMu4beeqxvRYnwTp7RbcSReB",
  "key20": "3yH8gq8Zug1t2QYkqbktRuc8XDdCMDNasUpEijce4pnTJCs5BLLaHEyDNKLZRSZmBgfSqXefeZSrpxgrfKACCWYC",
  "key21": "4j4Ae89tqULKN9cNs96BtvHJw99fjGeg841YoxujH3tFVs5aQE7Q85fbeqnC74KZX1wTaKV4g26MPraLvfMvP74x",
  "key22": "3E58bwHKGy3hB6EuPeXJw1DtAzBaCS2WAwJDFTn5aYeyKRf7H6uebxugScwyLvoitad4MD46VFbmz5wPpLWek6GF",
  "key23": "2ZLQXR9nsr4iFu22rrrPkcuLz2kWbFeNoMfcoBaKPQ18Uvabfrcws5SGNGsu1wLHWiM4nHxv5Jz91eLu8tmF3eWw",
  "key24": "2eiiEJcrXJmdn7tbCyAejdA63owJaAFaedzcXvy96VxhaRg49DppwuR9CBK558uxUxT2J9dWnXqzoK4fFjKHGzaP",
  "key25": "65soTBRzZqu1G66CvwNkj6uz7iaFSNdi8DNhHepryb8pj66JDY8uK6NPRzTuSGbdEYJrawaNML2Q8LZyAC8BMJ7o",
  "key26": "5CPytLbAv7ry5LHunQjQLusgt7r3B3Ecr9qMW9GtyqLprU4rHzvSKTDi4NiMovhM3GRMvQHHahLBCURCoxL7VbxX",
  "key27": "5g3pJdd5PWsq9zg6167U3YSLa16zyg8HY8apDJhStDwgVBcx1dTBp4HZNVYbXDk96gkyk68kVyMCMYNQsDj3cqAH",
  "key28": "gogbQiZAHaEzojqx4Ew6HxnqB8zsMpU9Qz8DbYUacac76BkAML4hj1aymwzP9yqH5GuCPpLR6wtLpQ9LCGyUsLR",
  "key29": "3MoY67Yk67mvbQqo46RyMC9jvYnC8WTtiYwhvJJfeESccQoTninihQepVxVD4T596kuwba1aC5msUsrZfe6xcASm",
  "key30": "2kD9BXtoTS4iLoboRjjXGvSAoTnZUdEbmRthWRen2cCD6BRBNg8d47P4FQmaEg8fXUaw7VeddthFWdesipAhgYVM"
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
