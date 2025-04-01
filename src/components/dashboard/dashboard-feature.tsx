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
    "5bfbLPUPnnXUqjtEtrj3vnCcmHGBDVzxadyEwhVWLN1jmbiYN9dEXRazdaSXQB5k5pUH1SbUz76VfFePwfiCVGoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZE9RkpA3Z8gsrkmjow16poBx62vkTpnsuRQPjrPxgR8mvQ8g4FjSboC57iCdp8Weu22UC1NatLWKsgFVH6gHmp",
  "key1": "j1aN4eF4abipnRsv6JaiAZReAr3j7pPM9GXwFwHT3Xh9UMBhpdD4WVHqRvYaqi8cg6uFYrgakjTa6EZuEQQkaeV",
  "key2": "5k8tMrjQwrhJfU2PD65dNZGnAvjXFJEmzijYHzU5bCUQ2mmsZYb89gPmNQyzRMKqUM13QPAZftX5hejegr9jaLFp",
  "key3": "4SLPByTaYELgkhxeSUmjzatG8QiDXxbV6B7juLWkdfwvj4frW5mV2wFXcsoyiJtMhNifJa6sdL5a9gidvpQnZVkE",
  "key4": "4jMHv4D3ko54357Vw78EF9igxugpH3y3xt8mZxG7U3xejGsQLNJQE2XThfKxp4M2JJzVWTYHrL8gjm1cqq4sXQ52",
  "key5": "2rr1k3pHKJjazwSGdjmaUFdVHtLG7x8CSVL7xLR6Ayk7ko2GZFLbq5SrBDoy12LTQ4Cc7ovuXMZFp3s2tN9YESFY",
  "key6": "2AZAJdBYzkrV8tEkfcrYrxML1gmwu2ECQEy1r8b2GyRwJ3r8zXx2oYKhcYtguBBkcegYrEQMx81QayGvuYBCXco4",
  "key7": "7FJsE6NFc2YZFcmF5Kci2H33E5t7RNUfX4gnsdSUUCnxga5h4PGCAj7fzTcNb327VtdHnXswr4qnR6oQ37WJVvo",
  "key8": "4y9tCtHMhMNoaPQUGryaJtEiNA5kQajZTiPfNG3BYgkRBfFUBzT8DQ9JqmXdVmbuckaesG11ynEoyZg4xPHiTaB9",
  "key9": "3iVazt5MU2UmoPcstQt73HAQkiMVXSBGYNP7TnPtAvAqqTxTqTuamLDT8Rqbj8JmsKqF17dHeLjLJrqk6Rq8x1mS",
  "key10": "2C18FkbnbYnwqGf6mvr3yX3ipxtErNU4xLQwRtLtjAQBDiypBRJALftpRVq7CzEVDyUe2HNDDbJTarKre7y6GQy5",
  "key11": "ZhV2DB4NbUCC43r2sKYfdNRF1zJ2rR7kk9sP18ydLKXxyZrrobXaosNoKGzNSYe9DGPCMePWwpfRo6QYsJnipTo",
  "key12": "46mEdK3dfU8Q71X1R77fjZkaf6xA1b7munjfs2R7nstiGXKTM2s6ZgQJjcmiEsikMGh2VLcbtpBpv7cb6L3NtuFZ",
  "key13": "3jvxnVrXKgR9CQtyjnrpuzVmMM4jjR6vnr2RafJr3m5FLZvhXvqWpXAdWJZyHLv1mJ61vu3skHU9BW5N1oKuisr4",
  "key14": "3c9TzGX6C1VCztDTwkiQQXUP7mbJ4chVLKZczwvnSfxhgj53ReXsQYsXjCeHQvWGXTqKXYznmtLsF5reYuzerfVG",
  "key15": "3bagEpciduT4zVeKpcXqDfSq3QGFm6861iUbcucArMhPkdCTnTxaMS6xYvUS79fHpw8g1yvJ3fFLhTDVXPUoHLGK",
  "key16": "4ZLTAdJGsF6sGUPyeAYyXqoFx3zLNES8pF9KqKohS5dpdbx9pnnPELAQwMdGt91RL767sPa22AozgHoJgrbRphm6",
  "key17": "oQLC2AM91ePZUA4qeW5Zd8tykH5FBeD8MiToVg58tERWJ73WHTkBnnNzSrXQRVU2xKy3JVothFyzSpGYAQL77LG",
  "key18": "4YXFJdZqiiz1NSuG8ut3cPi8WExbsbzE2au2ur9FqNMSdpP7Syd1ahKLJZjtP9gGX9AsJngkjw73zVNdvSD9cKqA",
  "key19": "2cHaXUEyb5J9Gv8k8hkeBzRFVYDUyjQMZqQkCg7w9yUcHLeSw9yqPnMpXEowujvkeHhVWpNPNN5Gk3MN4Wofk7fd",
  "key20": "3hVvszDXB5vaJhHKh2FSjfAvQ1qeXKabxGroR88mxaJUjvTK8hV52PmzC78jHzT7nipfPxmD4mYhT76BxLfnvUBH",
  "key21": "5cFAFCfAedzdptYWzXMopzDEtiuqhnbJQEYGDxC8W5viM5iiKnj3iG1ZeRb5W3TaEERgQ73CRaT5imCE5LFoXnqE",
  "key22": "5bNbgVydhzTE8Ewftfw2yydmxuArViHBiH6NHKY1tUr8tDWxfheQvYvtpHBdiJ9TBQ64sUsHUJnaLMndWwMa4k9X",
  "key23": "5vUiY5CDci1pQMPb7tzaMPanoM4PyHLczWwT9SPqJt1bx6EBaQrcyqbKcU1iLQstGzb1FkMRr4YeNXrbQ2fmocwB",
  "key24": "3Zudazg7GevHZmeDL8YCVgFiz1FojiRKLH2yG1n6u8FXZcYoK9EtaeRySicD9pbycKTuMoJeeFJ99ke1C2hXcwJw",
  "key25": "3gyHDHAbWRNZsGDkEN6NPiNZWH5mFAGrMspMheeX4dpfWxbp5yQ3eKxVS56gNEYtP3pqUPgXQde7DJYZscTg8Tb",
  "key26": "34jtu6PLkjKbV4CvToh4JAton1npyzn5ra96rggdouAZTPrKBcE4bJ4Koc7HbjPydncVYAkoLJgbiaWFq7qN6Du9",
  "key27": "sM25N24vuRy3Nhdfd1eRj5ZXHaHX9PSQoJkyJp4mPRfDumuLHsZurydB9DEhH1p8cA5y6xoSXtKF77oqX5R1tDG",
  "key28": "416GHynJzx9CWDbV6J8SXL4S2EAv82Z5uauZ1Ryjufa2G2mp2YmvmghTgQEu2jea4H4bUWwzXuUUuXHN4iToVuDp",
  "key29": "23u8KetNJJFghCUfqa5hH4BRUxJLyLYuUGwUcecQUXxqtyFRCoQiy6MVXn88AvkD65kVXnf69sDBcSLvjHjUu7Lg",
  "key30": "4qE9AxNWHzSAYd6KNF7bVdFX2jcxJUdG841iXm3T2zNXA2qMi88Cu1ZxPc3LGs3wodpuQYpk7HG2QY5mjm8L5K26",
  "key31": "5owYppj23A429yBfV4Eg1uv1XfcPbAkTxPWJde7NJpvSRiUidwQJN9fxDcGJF36ZLUfaBQqT1uDeMDTHsVAasUxj",
  "key32": "3xUFC8x7A5gD8D9rom28morWzTgewrwrp41cBTcEswEMEkDf2Rc6SWosLX5En7pCZjXCrSLz16H7RP5JRfT6qpko",
  "key33": "5ND5KfXRGD3KKsM8KvrQBqBQjf3PJTGMVu9zQidRywJNvLHRyfA4dC7f6xgnafuUk3VGXkabADAQAxnSrbS6MPT3",
  "key34": "3XJ7RNpcK1j2wsZGb2d2UzKog2KBPaUZGb4okUUPME1iPLvk3LBrNUPNejsVma6baBNJESA34HBuiVh8G1Qkgvdf",
  "key35": "2VQk4ibNJm75YppsYwFVrdHaUo7wi5XZuMC9ENYv8Gfg9B29mDNMJT5B3hT7TbDBNdwuYQgNMbkkJvP3cKBb6VVA",
  "key36": "4FkCpAjP4Y8nkxk1KuHHyNYD28ZEY5U43WsGppSY5e6gCYxP6xXnWXNg3oZUZb8idXwSqb47cwGsw3dV4mb66b8S",
  "key37": "3WxgRLVBUTpbtJTdkQbjze2tKveCX1R3qVdt1w3GfSN3sGm1NgVECYs9xAiuigCe8W1VMqdAVT6gNNyhocCGUEpp",
  "key38": "TkbfBN1Cq39w6uF1cbTRf5SDYNGhWvRHupuURuvnt8HXWr2f4HxgPoYPBCCZg6bWS1K9BzLHvUoq3j28cSeaXrU",
  "key39": "UKbK9rGyBKhrXUziS55UU72sCHpdCMCnu2A55PwGNgEULMVBDPEFv5N9u6A1RpEqFMakQFhGxHHHMTMDXJUoc3L",
  "key40": "3NJ2AtqYdbgwK5MCsrDGExfaXhrJDvHkeRCymEH57rVhEPjzGn9CG9W45mSNQDDLQ8m7HWbH2APCBJwHvaLEwdPt",
  "key41": "4Pb4mARP2FwENhVqnrkAy2FbbhjXFZdwQc3FFpH1onb4W5mCDfsSU49aW8TUb7SJruHqMTRrJyXRZx2pB8CefS78",
  "key42": "4ZnSgZUUWYGBZNvUuB9fY62DdDKwSiXunYpiw5hfWf2TUvtAaKG6DFZkY8PtmaoCNrTLK2mouJRgdpTn2BgU9rEE",
  "key43": "3mgoDkvcPAewWKJ9YWVfqePFve9TLK8nzJLneC8SrPyX1QLT6LVRRT1Z51ydszZN8UUQAjfvzq4ih7ozpG2mSFN9",
  "key44": "4aqAm1ihnYDwxB8hvW1BWiRfBjMUd4owfMLkWFBgqUjw3UAtjm9Z96HdWaMe8ksL9ojrJkJUBPF6BBpQXmgkAa9v",
  "key45": "4vnDsKNmCmYSkiTA4GSscz925Q46T8dNtP5XvBRisVMzcuGMWpDXeQ1134ubrG4PT7WZKMXsBWNpV6mmMVFXq5qP"
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
