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
    "5UMUK3xuwties8hiYDs4pQVV23S99Fa1jL3ZTmwA7JEhDZQa5Nhh1eNwUwi52nmpH5PYtRnHJirB4vJRVpwBz2vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZa74ekm6X5KtjfNaeHhDSvopVFqZnRYgokZ7WFQNQHADNTKK4C1sAxhT9dDoukmHxxNnP7S8uJipNiWPoAeUoi",
  "key1": "5Vizjye65UywwMHinJr7D6zXtxnDvdowwyTBTRVNXRSoGmiX5HVHqLCs6N3TkBHiVJjfmeYdoLiwUXAvyN2payRY",
  "key2": "5cP7msfN5P3fY7eNSCKvBVowo971v4w2c8Tu2rbT8BkRhrvXi6N3aU3jn9MWdBrRdywPNa9sQcoCNZHsBHCBKJbh",
  "key3": "2LtZRYYgD95WYRBpUykEq4byUjH26CpohqkVP8yW1rbfStWyQAxZEdr67E9Jfi2oq74uwNwDjjy142GNZaer62bP",
  "key4": "3GF9guRJ6CcHGEJKy7rWxwY4aBJxVCxUfwgcWJsYrtYUpmf5RE1CqFYEmQqKJtr1LLyA1fHDnWmKTaVGDWgpo5To",
  "key5": "4c6DGes25XvHH4A8iMMbu3jW45sDz2r2YMPetj3et2kD42uz8vYS3fmaG6dYDN9d47gsgcYaoHQxME15mii3gbbo",
  "key6": "5waCpMLYUFZe44rVVTp6FnMPkpkNLy4f4WY54H9QaUPPrHZHXrHML7kQmSDWUCpHgTJSUongAVcYTJicvayDrNws",
  "key7": "SRdUaDEmvkhcQ8BvmoG3ghmEHPK5AcThMpHvjXs8JAQz5vruayWVifvpuQSf2hFwR6GYj35TyGaEteMvYpfDEZr",
  "key8": "WCJeEPHev3adkkqxpCbPteZkypCGzZoQfTyGcxkYwk6gjXtctkeYA8NgShibb71YxYCf3PGKDJvDMwUxffMcEiv",
  "key9": "4EXBWAamFX4eub4Q2fTYqJz5aPayH8hu45ZmDKT6GXcLhSDVS5idsc3MFFKBjoVRXzvkeXTKvto2xE29ZF1M7Cuu",
  "key10": "5Pv7oXzbRvsp14UDWnyQWmUsqffQxs5xwpAtubcs4MdgLdgJpDZ6syRP8Cd1ENdpVVf6rKhak2ejpMFRANfDB2NN",
  "key11": "3pBxjuCsj27cJKNb7bctuCMYoKR1uSRpLvqb7KbUJECvGNaCFnsP5CYtyymPbsxcrei1rZTMAtF6tcKfbgx1vBqu",
  "key12": "26KjnU5HDeDTJX8MRW2yJZV8HkQxq4QhwXnCjDMUV5KU5gkyHD9EoRioQFdiiA1fT3rBtHpBBkorvQmY9nW3LsxQ",
  "key13": "2NQXYshrVPZdq9bALSFV9bCzy2GyVRGShv3nCgDzwawdegQEfzi8dVE7h4EssXqNV6mUwoMPbx7q4tmktzJBiwge",
  "key14": "3Rwjr1oQ1uTUsTWMV3sM42oDyhDZ8XhqJxzf3HEQdtV9yatQRdQ8z3hmUf2zsMdujPYRRTkCkRYiuUN915Pa3Fhh",
  "key15": "dQAy97yjuPK4bV3Y1qt398xVJG7ZTe89PUWLCgBH1DVhFbUJHwwRMt9HvPagJkChhuTEsBwz68KHa7nbEqLEEwa",
  "key16": "pajLc9MEvrhJtvYC1pMnXb8xabFN53XivZ9HWD1cJiV9GmRB4Hbqzcjsd6iDt3xjrNftN57qX8GrvSnzbpZNZ4C",
  "key17": "3cPKyPikgRRDH3DUrW9QxRoBhFxfjfsepDnrHi36A5PVSN3B7bsewqynL2Pq5yBvXwLLp4b38vXp5p2z3EJcT6vv",
  "key18": "243sQtfdYTM841QbhTU8FSUTKfTgidsS8CZTeSFRN6d3eiqVszDms8To6xnuGgEVE4TZXc7PZEEMtj4jzsQaPj3L",
  "key19": "Nw7cjaQZ7zRZXgXNB2eW22xvBMpHB35HmmEKPLoMAfmwjrbzCS3y23isdLx3U9TJiKvc9HKrUZtXdnoCncZCD8M",
  "key20": "5tsRsmhkr9spDj9kwwEUTvNVCYrgFAdc7pw4GoCjS8qLZhQi56Q7tReRACqGEUN92x41qXeP4kVxPkDyU8FXWWJ7",
  "key21": "6WfzdnWSar942p3NcVxxzVGCgxByFYWdfmR6dqDQAjGDcr6X2d9eRcC2kf2gThFCSpayNjFmzk5kMNgK7qHo4hz",
  "key22": "2D65BLeKQsBp3kQmDdEa4hmz2ckuofE1eprt6kdXHqKcbBrC2xY5euvMv8iBs86kZSk8o8h3JXUpbxDKfoLojSnF",
  "key23": "3d8w8j6NgimVXoaniasMBXA1dB437bVy1wVnej4J5C4eo56vkHEuXXQ8hqsV1fTP7Rcgc64r4k9jxq698QeW42F1",
  "key24": "3iramzDcb2ivNV6NaAKvaNLfHNbAwpp96xF67EMyso2iimgbEegFkrz8z3fbUVhLtSo46dWCW9hDqz91PwuLLu8P",
  "key25": "3vbpHGwswm1WqstEVMvQqr46sxL6LhNov9YogbxG44oSyooh2jpkqiXisjy3gomVwH79knbibDNjj3d52z9vrq4f",
  "key26": "dRwFfAkHzBnPWfHH7SdqeAQT8VX3L7bC1xUtFFfNeznZoafC1bE6vVDKJX7AnGYmfzssD4WwUrfyB44NGYuzQaX",
  "key27": "3EMDLXCRwUJoWnTmsVsaC2qfn3FxV5Mf4QELoSE7kfhEY6gCEEqrFe3VjX8Z2LNb3hef2GqX6ettNLt6xPNCGAyW",
  "key28": "3djcEGv8ByAzagh9E1M5dp7FuAFaLteFj872q2ixxa4dY7FaRPgRqPhsFbnzfFPaxsiwofTPjMUHL9fo5Z459ip9",
  "key29": "2WEFy4vBLNF8ZVMEe5iYozXERFX3jKMACng1gHrusMhfubpAdDXwoLDKEwbtwz7yoHXWpVH52zNWWgzEvR1gDnDr",
  "key30": "3VLkdFACkvn3k5if5o3aQgVbiczEbw8fHuQsC15J9aGcs1yLGRT71DoUvUDa6KiZ6ukRUicKZG2hDEioVv36q3bJ",
  "key31": "2VUgAfnESsvcwfziVgboUSwPYQDjpa2Dy5A4hpsCH3M1UXYtYBfB5w1v4PnTHKWoRivusTyFGecwigXwjo9zq2gS",
  "key32": "4tJonRCh9cqdgnuvsocRJkE9XdfAvNihdWAit2i1mL9KHBsFoLjzYyH4jr2sS1XQyPNJJsAjXHzxuP79diG3Nnoh",
  "key33": "FCivZqMPgxBuQCdesb8RX6o38VHdPzpSwk6wpBxRvo1vHUoA3n8UxczR2QNrNXYxFEoSenzHbywTAsrvxGUbmQG",
  "key34": "4dfkigQpwwCkLM4ohNCaomRXAALS8iHA7GyQRRYW44LHwrw1aWa6noXNPm84gCLLcyNdeWXVA1VMBj1ik4rFM2DL",
  "key35": "4FS1qzRqAdycsoboNag4s6LyjfyWqd4VrHGzsGMXQdj5BMVPdNixXgrjkVypkH4kfAWw52NWgYSf8VeJeCgoKYt3",
  "key36": "5YXhLVSXRnzEuNMSycbxfPkzErUt58hHpp7GPz6kRBUKy1rf8fqbN4ou6LyZ9uycitbMqbJT1eRUDdVa2LJwVTag",
  "key37": "3vutbGE6fhH7JAhvRraZ6NyWJMWU2sEQ6SmuU3vDhZPBtgmdekuF4c2sLDeJTY5xhwcyyh77zDZn4tue7HVmF67T",
  "key38": "2VP5qkKEqqBTQDGFmVezfYbCiaGjHcCfPo6EiihAVaQ76xAvFkoEiRbfMUP2ddwH2SZf1A41AfSgv5iKBeCQq9qp",
  "key39": "5wrwPS34bvMgcZZDDwkJTa4WucbvHTWnB9QQmgHwX5qca9VE1LgdCGwNFjJyzjJoiyn1YmJcBafbb9iZne2eYZXx",
  "key40": "5ydC4EHSBwDy1DxNDJHbvSav4b1gxJr4ULF2Jmx6FY3V5qCJjEKku13XMdxqd8d5RMYnLTBkwaAgNgBebFbppUm5",
  "key41": "4PXG4DerwTQmqDujp7mTnmFFCWnmpRp6SmRxukhC47gscDjdYapQF2bVHkjTeWiuS7BzjwXetWmWZyNaeDMWnG9a",
  "key42": "bqbcbvx2UbanvcNMRoaqCwP7QJXxYRMhgZAbjZ1LT3qKXLYihZiEAgk3WQrtkcPxRaKNoTxxEXKBTsAdq7K5woN",
  "key43": "5EM13fGom7cDrrrJCTAFNvESfBnrwWe9R11uzRNT8q2J5ro5CY6K6m2kPKzFse13tGaio4ocDYhLZy6FN66EPEQF",
  "key44": "4oLEdY48kzsKRwpL9er4kW1HE4Zw1VvCwK5d4B7bm6Nh3yWFoY4iSVEjggamZAKGRoaktHZH1GLj5equwF5AaWF8",
  "key45": "v8dm8EU1PwkTbXgyjpV28rnG1b3McStCfrbmg6VkhUkpckcgBiyVRbhJjNk69WjxDnEZ6PnEm9GTxPW4HnecX5H",
  "key46": "w3U1ARgGxvowmvG5rYZxckWqShajQY5sGVqrSQuTkwAjdAiBMfKEurMYwwqDWTuLs2WidQrqGARYJCnhCLYpVTn",
  "key47": "5eecwQYj5t9NLwM2ebaHuvUvhdSMA2u4DA3dZ8cW1zu4D6ABVRmQu5ayeEW4qTnJsG2CFPGqxSHs4VypdkujCYFx",
  "key48": "2ynja5yBRqt6go8mEFDenw7izp5LG9eyr7qm9t95rD5cggqe7esQ8sAA4qx6ycbhy6y23utxRKsAstdL33MYqDwa"
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
