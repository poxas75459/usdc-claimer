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
    "4dsFsdyCfjXeJ3htP2dbsK8TJxaZkxSbJ1zzJ3WvaT7i4to6LETZCcVbBmW8RwjKQccspqEJQtYBTjoJeCFNtQA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2kgorq79YFLpX8z7vsiGDn9iXAr8D1HH3uVyhBgDHebYnYASncfMNBqd6VMcjFDkn5fM9DJ9J8TNzv9sCF9Cs8",
  "key1": "5bM8isD7ispQSw9hpKoPb24nDZ7A852SrqMniup6rot7EAt7X3566oTzysAppwS9PEcb92TtSgpA2xfx3GrzJmJt",
  "key2": "3wHbvDmV5zWqxvBDhhS6h8mLWYd4A625rQUkBKRMXYdJa234zXoZYjs72kd94uWURaDvLBFFykvPhL98DqGdyGrV",
  "key3": "47PwErkroEUVY9KbKzBWB638E9e9m3EYptDJrMyaXB45YdyzT4h29rxva7rVU8aupasExd8cGzHfBM7ziUdYZiZg",
  "key4": "45PRSTgJaT8zUekjfsgu9eFq46xrRhxr61m7UmeHL1B2VTGZ4H7iMJCfkMZDavfrsnwXTQbLtGMtWNqYdBp42Yf",
  "key5": "48tsByN5g5Kthc8MyiCRbMrFjURSWZS3AuzKi4nrKwutB43xTD6T2WEE9xiZtjfRYFUiAbUyL7U7mQDU8tRGBBSL",
  "key6": "4AedQZpqbbQoq4dhrJNUBUvj3hkGHsGkpUXuwYShpZjEAXPAV4AJU2pVvutcKYcWTb491mwwt54BuxUGDHNpNmc4",
  "key7": "4Zs6W8L7dxy1VeWHHqt9R14vKKnCL5ZHdPdbdYTu5gHpR2G5Y7fbkYgMtnNswUwLYCZVaSXhq117G1cnxRCMp5bj",
  "key8": "4aRKunkoTHdsJLVM8qqbteVAP6kptADmbPv39Tsz9T5h29dMdqjKJSUsMVS9hZHS1ZFTKCvWYtjrsuNdSgpeVFkJ",
  "key9": "2Dqfe2Hs4oeiK2BtYgQTxxB7qhtfJ3VA1zV8vSkWT1xEfJKKaz1eUzzbmBnsnr7MAxDaZuzcKNsafQSyjboNu1VE",
  "key10": "3aUid41BsaHAqVd5UGeBF9AaCsgdRJG1sTHZ5xxq8Nf5eSb579Ec1aWQ4B21PiyUeS8YhxWR2UbcwtB2RjZikEfG",
  "key11": "6q7e8jSN86zT4L1rfxSceRiuhCvcJZXD1Xt5dnRnDkrBBectbujHbFNiQ8RJBrWv2VNFCgnrD1Bz7CYnDbvtgiV",
  "key12": "4PsDyu5i1L8L6ZhogxL7zbUjicYXfGdy2wtgnwkSYXnZ63ofnnwYYxBuon3DUw83UN1GV2B13YE1re6PYQPyjGji",
  "key13": "NtZyrtVwymVJugNVJeKH49djrJFqDuW2k4EuT9grAbEcY9nPXc7XwFvZsi9mzanfoBBVKDsSoV44ZMECD1ZeFmF",
  "key14": "2YJLAgXvqRhovdjbAo3CQHWSVfk1J1rnt1DgPb6JC14gCF2qYGZdCh1451SNJQZawL3hCj8aaE5mPPzpF6NyqBkY",
  "key15": "44b1TvAeRHncpWrXBTcwgHyiyYReDaTjFRbioW3qhPdTtdYESHD3zgy59vZ3fDD7zEZVpwaKX57Lm74iRdY78nP8",
  "key16": "2E9MawvR3Ch1VkkSWW3g1Kjo2MonWjVsjeEny47ReinPE84wxXsZRVp6Q1kTPuP4cJL8g2pW6HXmYHGX92Fk7taa",
  "key17": "4rfozeCxguJTugXbZc9ii85Qjp8ozTarVCJDvrdxtB9HW2i5woM1Y65wdpW7z4cegTWUQGkGd5B2tXZh45sMJrkm",
  "key18": "47gADHXbUU7HZub6BxYjWrqCfawS2YwYkahmW1Ua9PcUsTfGWhdu2jG4SuTwChCiKNauDFeMDzsGm9Kw4e8ydktB",
  "key19": "4SrLxm1En3yWepkdszJRLNsAFze1dC7yd2gQDPe7S578ypcQGSkKKZbCBexUWXy34XHgEoqbZCXHyB5t8FGfsY81",
  "key20": "2EMz7nhqrLEHTb6ig8na6oTFpwbyu72FySp5178SLBVs7SrTGyS7vFewpqPGgosbz4tySQkKiXUT6uJjPEB7D5J3",
  "key21": "ZkqFLvhAqdB6M4JmG369CS3eCVtyyNqfFZMueRh7UmuK9P1KU5SbM4iMhYtcUJsen31AvoWkmdQ4Y94yEAhvB6c",
  "key22": "5JUmx8LPr2Tkiebhqh9hFJFL7ayBBWT4pesd74qK8dr6nq9WQGiAQ9qib9iQAHRBAVKkCJDrR9DanGCLG2ovfNB5",
  "key23": "3nNgFzf9JFAe1x6Chq1aM2fXX885iPA2EzH4L5X4Sw4BHaYaHpdHiVq3PBkRXvwbtHjjF3rdxvsU6y7rhdh9Q7w7",
  "key24": "4agUGp766KJ62SHHXiGequHgVJXreszegcCHiNfoQfu2DBW3hs8V84j3UtZyS82ko8f58hZ9TbP4hoMYvkuBJpP8",
  "key25": "h8NJchxWV58smSpF5jsQqq6omFAX5iPMxYmg9WdyTpqZZoCQpMxRqRa1xm1UxSep2pYZHG6NtEbZ2vQvUxkBrMa",
  "key26": "5nL7wxkYxaYs4kHHnGVDac4xfPW2iEedAEqE7fgRE2hrsnR3zUUcakokmnLn14BeTGxMbcPfTEuKbkNYoFnB4crk",
  "key27": "5y4q5owAycM1RUz3sQCdwiRz81gmerG7xBbUVZsw6MdR6Vsc3EcoZLHZWggQCUnjGEHPBnCYowN6CC4HpVHGgzr2",
  "key28": "ms9FFmAfvczSmyhW9SvD6tmZHxeMkLCPYBmpKmvzT8WYk2BbGKAiY6J9dEeQ46RJusfSrQETQCPsBkKhVbcVSa9",
  "key29": "2aQvZardtNusa7P6ssnjHj9c25q1DffsnAKvad12QU8mmamBiRiE6eWSMvG3qgoaGFP88vMtHs7zo5SrWJWCnt7H",
  "key30": "4XPGYbKBUGdVzTSCMxX8zdm2WG1ZEPkkvwJhHDnnFyLmKVv2QgpDjaXwqBMhAs7TEJN4YmEeZAjex7B1MRn8fCMP",
  "key31": "4Ck6pAAV9Ug15FJt1sagmmFtZZkvrmWekdRuYjJQPHY6LNnMbt6Q5Hgw3Who9V32ybpU1bX66tWa7ogSJnueccyz",
  "key32": "3bSEYsq7ugE337bzoBbqcxfTF1VscxHwF8aE9NVSiEMGvxxCWc7ZzTMkaVr3Rn4Q9BzpLrmnX6KphZBimiaun4mr",
  "key33": "4VSjBymNNpkvnkjuhYGwqH2tNymMgV3zqvkaPWbGgNUuuxjJPs5rkf5KjH7uGJktDWCSuvQh9GmCQFEc3U71cfG9",
  "key34": "hBkFkXcvrxshm3VCDP8QYmE2cod2q7eF4ewJKTGo3bJcKf9TMj8xtKR8aushE7U95zBc2hBQ9vt1yWjZeDVnk1m",
  "key35": "2VTk5Etk2EinRhDuDenAsojxpJfku7jxbyHgeHxZVGVKdXmcnKTKL4B5vSKy8SxEfy4YaTx4hZ4q7u8kz6kRDCis"
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
