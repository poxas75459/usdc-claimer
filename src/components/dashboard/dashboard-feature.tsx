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
    "5qx8aFTLVx9RsQ2cnrLMAMU6jbbEwQFYuGQ5qHfX2r3BTVncVEUC9g4khoudvR5PLbxDqxDGtRd2SyNsixp9G4Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GG9qaS9SmJSiFqGWqV6j839B9M7mMv1Y1vMvWhUSjRQbJUkRVDKCdBCSLvdCFFbhLqPTJ23v4HTZ3i9GavwFNUF",
  "key1": "Dv7gPxduf6Vi4xuRx3qZokU5gsngA3gzi5QxmZwC5sZ39uszydA1RD5BU5unuo1YeTTHTEVPcnT9WCfKmwVJ8XC",
  "key2": "HQwNnQJdSXEiUU6C6ez1jVnHaADZ3RQK1ekRZTzrS2EZEtA7xjFqxqSfKpTwZLWTdEvhAkK5MvmTC9mHrspqgqQ",
  "key3": "5argFRDTHdqYA4Angv3MkovHVs64UmcP5bKNAPurc9Vu7rGBK3xqfP8v4KkcvKzQtq4T8XadksQBNN79XuKEiHYk",
  "key4": "3pbR3ScbWHRbQt4mVqzUdXuz2htLRKAZniBckZYxr7qb9umNR9TxwwqwC5qx3jHLhy76rvcNmrFeusrV1oDDixCc",
  "key5": "5kLQ8US629dcey2G36A1TaZnpjvgGbM58rTbtu2Va221YLLcFhBjBeTVsSAEdpS7Tcn6bhMyGY7hrA4WT2kwQLpz",
  "key6": "42nQsHdaCbMKrZtrjyQsnUNHCZjbahPdLfXb9c6YXfTk7QN4jMawkapJUZE3bmv9sPDfq8w5uGucPGrcU9CaPwBG",
  "key7": "5CML7jEpbpxXRAXExSxBzzRZBfmGEyFjqgptc6bARwxbaFpepdSokQV5cEAuQmGbsWa96uzrhyNjfDxhwh7wcaYD",
  "key8": "3Q7qkdwd7trgqAtsxn7UwG3SH5Q2DXHHZX8ssxLRmoRghQaejimRwgq4RtqYDVm4sNxxJ46p56t6FN8vyZm9o3L6",
  "key9": "5aWj19byHD1c4kai3q2wNAHGudXokWitx4QBfM8A9jSt4swTjD1zKNPSPEfFrrfjeNvzJU3Kq1ZV9PRqKjgoB144",
  "key10": "4gbsboaL6LEH65EfdSfCNpEYuRmanbDqQiGZvGU1MLRNiGCn8ki3X3Ky9WAte3mUY4cKRkkPbrem5oDNNhh3NDcr",
  "key11": "3Vv6FTuzNzxxEY9pnCK9J93b5KFj6oE1TUAaFr25JdTGepe7ShAQ3mwbQA7ZA5w7SDU4D7HpHm4BcRWyCf4PA7Zm",
  "key12": "2yh7qYdTkg2NpmXZYZmyR2uo3gj9qcwXBDvyCwpVLf6FeGo6AD6echYaefNKC6c3boGb9DCEykt8MHh7ZexU6hs",
  "key13": "2e2HHvZNtGQpvet7ajcFz9bDAAsejAaqjqGAofuFXrpZYADhkYPbczfarv9WvSc5pxod3th71pCyC4wNznDUZVeW",
  "key14": "37xujume1EPDc7w5YwoMAmpNhmfKLW3gZqGdUdmvqQskNiXF728XPTQhsN29si49sghZa5HeNDi1xdrg7M2wm4Ln",
  "key15": "2LctHohgH23xueoFhvmNSp2o5LR4dFVfR77SCsmpeE3Yt4mkC6f9dN56eiLm6qQWNk6Nx9yRHgtUWtrAMdfWnnfv",
  "key16": "RWdbsXggwyUctPPk9dcSAakrXEKca5Nvn7QhBZKiYVusdw3u1qi2CfgqBXM7oXWbCZ3NHDERDtHqBUnehoXFKL2",
  "key17": "35NPoEGqMfbai7ZFFAeTvKG6ZgGX3ddudE4ergChPfpP4vS4DErbQ1eyxT29MPSD59FhZm1ybX9GbDrWLEX6w8dz",
  "key18": "3s9vPz1kJmJDkfkQ2q5n7ao3JkpLU2uBYxoawD1piPvZuC3CXfnX7arT5SSJiMQGd3uJDdg8HV4JwA45Ct6u5yrc",
  "key19": "2SejsJzLvteR7mp2uNPjThMZuFfMDMuKRsGbB5vHwfuXBtxNC1mPAcoSjFDM7seHU3jJ3wHmx9TJpTfj8Xfz1uSA",
  "key20": "4494UgfFmax3yRtHoRJwCdc8HpXVUNYESXgVRLdZKeLHUwkD5QF21wiLPi4M5vx12dsQRrZRpGJ3CKJqBPYachhk",
  "key21": "26mSSVoTDyQFGXU56vXd1S2SCuDjdAMaVJKa8T3gMyYDFy5ue5QfQXdw7LMVjEWkvKtkkMha24FrNvVqwbnQkvVD",
  "key22": "5e8FfZqsQ9Npg1WbVKC68jsjvDomeqL1dingpZv6erTaPejD6f7canRwDt4C9QHhBbfNNj6GWxyhBds1ouuFcDmb",
  "key23": "5CGgJtxQT2LccsA5DQvp12MaAbGgVQFkUXhr82KmDfmjSyyvZdCs6S2Y4fKxCBqVRvsXUdeyYpdpDhb78LizmwV4",
  "key24": "5tHT2naiiwKLEtEmyV6jrbxa5Bsvq18xNXrFhF4Bpfx7Mp4nfPU8daQ4BbfL85guLfsCAE1sDFqsi9n3SyVpds52"
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
