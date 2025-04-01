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
    "5LAWLCRxbhURa9iFBpAh8QayhA7vFPiCi7PzUWrVMzACWzVW75kW6cu8EJvNNBJdz6wRtc1WJ1pwfFWENHDT3y7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxHiSEgo9HyjjThwiKkreJL9iBjkFzEjAx9iuTom7MafwPscjwUaP3XMib9rReiwUgkJN4XouqaTS2KV7aRseeQ",
  "key1": "519opTTb2aPgxSTDPTyEp77f71rSKxqp9sgE6GWkmcdBQwhhhro39ERBSPzncMYkDDuNJ4KkoFkdyTZhY2d32GbL",
  "key2": "2e5XJRwAsSM1hbb8RmQ6wqhCqznZ4Mojpv5cb5Hzn5TDa3zdyokyRKVZrUQzUnKN79S2qihNHX6ERMpE7WSHLt9L",
  "key3": "4YEjM6mAd3UeqgBUWpn1vN5DXf1dwD1geU64QEGvH4Vs1893Mgjj7tZxQhmUiGZmdnaQLcbemeo5AAy7PJnaBQBS",
  "key4": "aHgXdVWa9DpuEmdggyoxnVzeZC9fdvW6UXDQBpw1VMCTxrHqXZsvMYpemvavTiZExEjgY29Co36gUV5BSwjcrtM",
  "key5": "2LgzPbQKwTMuisdHE2pS8dK23UGy1n9343htnH682hod6jCH6JX5HEpHFLKdACw4CmFbrRgkHNrvtgqhKmr6FETW",
  "key6": "3uHtaAA9MpNxdgXaiT1jxyYXeBjCPgmtwCG3bGLUomZ9USZLRJxmjZ2ksL68wnMj28yHo2JbcV4x8KxSoy8aUvR2",
  "key7": "b6S15KLn8tLiE93hWHX6a8e8Q4Vw8XmMQy4EFbrLXFMCfehrcJGCaR84p9hsZzLM1jjpnpcBFGP5ZHQ18w4kvbF",
  "key8": "3hcpHUAqigSqeXuZ1vSrv11uWkesUEPqVo9mopn8FdBNVtTMbqovM897DxB5n9aSEzJpW3rL3x41WNLaCfiWMzvT",
  "key9": "5xb3eE71Fj32kDRGPW9sx6Eb9ZnRfTFhdLy4uqAtULTjCiGFp7gLajabqXia4WRRL5E78JCqjCzYMHbe7CemoJo",
  "key10": "4GMaDL4BENnnY5WQ8V1XCVLhp9UbTiFsh7AHB6GVCyF9Y52mSQGXfjBfdoBJX3Pt8YzLn5N6KYDZyKpXX7U6g1N3",
  "key11": "Wa9JWVEXRxmwtH76A8SG25nMFdicMeE629sxhZJysgBxwZBhJACqKjgrXhaSQgLffBaZPuVzk6XNbpp5twzCWsG",
  "key12": "5gYcmjMEqoLgwB71cXKdsu9JeKNdJx8XGSC99xLNxv55XShYsHUjECY3XLe3uLipCWk4qQF2BWAQef9i5z81M1gS",
  "key13": "3ei6aspPDWGBFR27WmzJP4CrZTLdqGC86oAov8j28Xq4m7EHYfFoWdt9CdepVKCTmduda3vK4nojLgihPoF3fgfG",
  "key14": "49XuDVAQfuhpMiLzm2HxBMC5NmQxverk2mgsT55uYkysZzeTSMWQUy2jY4EC3phHe4c1FwPMEM7bTEzs6qM8kgjr",
  "key15": "2yiMJFP6kTxFuVsx8NQQX51HmWrjfvb82qts4w6rqnUgg43nxNX5MDSCtYVMHTHSn2w6XTsLoXtccbv2tv6JTPwo",
  "key16": "4Bbfm28rUYTTsrLLGQ2Zr9kdug8qeoPPpn56XhzLtmcBUv17F95Vt9htxJj6estQEyq3nmGk5cm71ZGDraagyU4A",
  "key17": "58FPGKoAC3Vt9cRrbXMWZhgaZUgVZTXBnBrQUH6m4YokP2ZtK1rxR7kwakZxSCKBeCEcuWiafv5skBYpfB4p1PrY",
  "key18": "3o7DD9a9dAJ2iLj8dCTCPF9ejNHypoowYmy5HbC5sHTTQMiXUo9uWom58WWMuotyBuJHax3Nm5xjnrc9uDkUe7e3",
  "key19": "4wtdx6LggJJbXs7GgPdbwW14DsoVmrYfbrjMRYt59bdU8DCSz8iX6DzsMpRV3pHkMT1vDxsFwTMrTM2cgeeXM8UL",
  "key20": "1PUnSDff1EbRasVPHUALCQMXowshgRyEAPajyRfBHeb2tdJeMPXtpqmY1DYfw2e2dZ31BJ8VjP8eef1qAsJM5kV",
  "key21": "4BLy4WKSBrFyppCs3sJnq7A17QuzMJturevbjWNh2fXBHj1Lfjen2MHjfhs8fDkeaxupgxS7SCZKuFu5BkyFuZsp",
  "key22": "5rycnMu2v34GnZKEoahi8us882uMvcar2GVYTEJaNLpoYssoNW8hUktBzmv5RQhFn6qoKZZ9ZRR8axfRsC3AzsFv",
  "key23": "ss6EnkrSfX21zrGzFCciJq2YMAz1uk9bKAJtVKsGV8TArSHb8uE9vvs58axsCMq8vA4SLVMMFB9j5pN2QYfrMkj",
  "key24": "5TpSeKVybqA2SKp3FohHhpFvs8ss86EuNcwuhKXLEr8f2ZMgwUDurnwT9FhUXJoTGVoCHUhyvYYbTPHCUumBvxb7",
  "key25": "2W5iqZx3BETr3xf26FjaTc5ctVHP2jysxphaqPw5EvKqouH8PyG2s3SjmeCd8JT1peA7nFBxVpXv7HgbgYsqws7Y",
  "key26": "312txaC4mxjH5Ct3fh9jTuWzuuBHt84mbWacKH3GJLrzPfvn4okfMmnYRaxn4XmJjyPxr5rPZMUz1fXZ3QEQEPpU",
  "key27": "jjSqig5cFJ1bvx8fMw9qJbkkL5RT5hZNTsJVn7yQEk9K49HMYMw6vMzu48knjCQ69krfDkv4JcEjgrZq6wbLK5F",
  "key28": "62992mGuAh9ofiT5K5R5BH4SQsEt8pKWPEu84nwFVgYyFt5USWYrdPu51niy3QKyKjRyKrwNXuiDX49noEVXo6LZ",
  "key29": "P9eBeFGrphztShrxMLuZwnMc3s41xSoNewqCm77RFTehZRxvaeek6wU8X5vDiViLj65UeH5snbD993NTyo944XY",
  "key30": "5HG9LXnRKVmc7DhnpLHquhzPzSBfcw4dDoj4uRNpkGdgVeuYvTDBkrso6e5AhDLDT73z9dt5c3kUn5t3nksmeJX6",
  "key31": "ZyLc4JKj3bhLtXk9Jugd6F58fg1ZxVSbJRrnqir5nVLTuEewtF74jGRyuDki9EQEvn1sKxm4Ky1yVrjqFEuyGim",
  "key32": "2rheKwxV332p1cU26uwYfW2vuKopVG7K81cNZyc53kd9fC6Z7LGFY7XgcaFefskdbAAJeytFzM2joLKPFD849m2a",
  "key33": "49QK3FvFt77QsjPAM25jCAB258Vpy932Xx5o3MxJqk5pjDKCFgPqCdoaKU161wPvagtBgFgiCnvxJ5wnitvm67Ad",
  "key34": "2YBef8Qn77ggWaQ6MfbFN9CCkcT9mykJTCqBsq6ksWnTPG1vDWyP8ELfe6LbcZ1hsLCVkXR1sDesbxVMN6Dxupp2",
  "key35": "5NupwviCNxLH15LQDE11A9XVYexCv8wwgeFDGqaJbDadQj8eQVTqwRpzfKyshyrGsQHAfeH6KKt2otUhJqn8UH8W",
  "key36": "23MpVdbJx9U1RFkwrzBYU3CpQiKtGiPfxUAKWME5XDhxRfYxjaY4wsU2EhCDDTPzHDDMGdV3JkQtdGiiob2222TD",
  "key37": "4ND7Z12eApCpzEjRxavcodP5dTuu1eRAR4jxtfRj3HGyGeyAupNRNf35Rk6XinQ4MMhL5KigbHj9Ft26MobAKHkc",
  "key38": "qw4QAd8nJvjZ5ruyrKZxvJAL1o682a9EyHoWR75W8qBQpxBGGXsz1BV6cG4aDrfzRBVC63wpJ7VtavDszwyGEsP",
  "key39": "3LcnEmHrNU9kpGQtMphRfEjukWrjzqtp3H5HmrgVNVwrXgbCU5a7foCrDGXdPLbVZZovwnp65Nbb1ttKK2AMFwcs",
  "key40": "3WR4mDsgvyJwj9vLCF5WuSL2Bw6sbDz9qhTys6Yi9DUZkrQPVpMu1ifBBQdzNpEsK9izGTqaNjgyBPEvarN5XEqk",
  "key41": "29ZTBYaw9peNYtrHbSjkp2kox27ED2uGZwVHggBbGHyrNMXckEUJi4KVYq8m7JZ8rmbLZ1SmSdJXs45DVBFFAVrT",
  "key42": "2xQWpoU3o49urqSQ4nAbd5jha6QjPrNBdpxzCrooMGxvAG1946G66GYtZ8jkQ7RFC2HVRxZLNre8FxFFS43ctaeH",
  "key43": "21KHnHfJd19FHKNXaXdQVG1U68MzAT3NdoAUTNtBTGihxrS56C5Avk7WxPd7eSDxhvjp14mdfjPDucsUg65VqoSG",
  "key44": "2QkV22my7twE12V5d6S9zhUF34ZjB9cRewGh9neYV5QXJbebqTpcveffQvKZXx2p5NdLBwUXG7f7q8usMVCzr8ME"
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
