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
    "2UaFZCsFJe2auy7zX9dgQtz9UAmutQKVt69CQn2pNz5cCkLx9QuYmHD7akDvmuRQcyaToPKTz7WDC3T4iY6BsuA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXvNbyGCfttPcK8SU27LyLxAtDijYHiwQo8zkHGsN8fYRv6ftU6uRDLcZNaKuqKSChTDADJ2CrecSjUZdtvNqRX",
  "key1": "2X2pgsUMJQ8dXSnA13aKMvBBY2GwVbBtSPGcyAQAKRYVASUjBM71LQvhVWaP2X81kKVXc1QDUUmdPT2f2Jircjq5",
  "key2": "4ho7GAhuk6WygwStkefi9ZfLXAA4afahCyiEoWEeEm1657hciW1V89w1vp8WMxLHzxqbmMTLLqRnQD6pUemqWWhR",
  "key3": "41ZoXVFirbZB2qcYy37bKV1PtBGH6hnY2GFum1hEADHm4qq8z3AnP3KunVofjFXB178DPEKo7FHpfpcajbo4Lzqk",
  "key4": "63ZWf5TmKFw9NaNfbCG5oM8mtYA3ahYdmwKPoKMxQd8gqC3sNdhfQojzFS8qcuXMRZhXhRrz86nR6WkqmgCfaCaz",
  "key5": "3ow7Bhd11dZS8yikPYsdWuKVnkuKVPSg3SBQnTJgcPD1CV44AYZUroaWUx9QXoCoS34ru2S6NN2Wj36Gbn22YsnE",
  "key6": "3kVdKCfxGFCVtaZ3YViZUgG1L7K8AnC8fFN8KBZGGBdS5LxfFZWgrRthHBc6a3bCRFssEcNyEPhPcvpDNQhHw5Bx",
  "key7": "3Er4LoouYChVqqoRQkWUrG6qVuSgNJ3FyYdb8fg6EyAyGWtcHa5Nc2fJrteHVtDDKNdgfo9maD6vcDu6avkmTBt8",
  "key8": "3jRHpxYUVSJuFPvKY7eAjniG3zPdbrfPBD3KNbAnZys6J9bW73ibaGq3F4gCspnvauHhJjBT4mYrUpUuCgKYNGoa",
  "key9": "4ud5tMzd7RtuovNwWxXvxUzkKhhLFSV12gYa4g7WqfH2KFqtnz17Rw2Ems1tMshiN4vrNzVug39qnPQtptDDdw2o",
  "key10": "3JEaoaM4UrMRZCXcP2iashkpq1Nx5SNyH7rhKFsa2SVUppzLVyfm9nkybwqXEgEwAQuqUrPaeqooS8F91X15z5vV",
  "key11": "5hKJeVQUq3jhMnJ8biCtousKeyjWaW6ChkAdf72novsto2kP9vCiQo1o9Ypmxc2ADzvMRGvpZvqUC7erXVPC3isp",
  "key12": "41JUV1s1f8tZSqWV3mNYGUv3xTSf5PzwEG3kmUnubsJJ8erzxZX3qCh4qLSQHqAiM7SY9rZwG8W3RiyEBR5bGHFc",
  "key13": "5fXJduoLucUJGAsamRZUGnHPfgfAcZbwh8QW1baEoctfjFfgkvc7dUvgxQsfxuq5CyF2N1LZb5vUAD1ucebBFMCR",
  "key14": "ThjPC1X6eVUN1oB3usjxe1Akxmf4idaYNUmjE1BpGUDW6raC6g4mG9NZ6m2rSKX5G4s8xhkyHBWFg8pLJU5dfzC",
  "key15": "571hreSBHBSMReLW9TUYySvCnrQGbTFJFLH9AYyCF26PJMgJZqjPgzVAp8ZUziAjbVKa8ijFwi2zs72WgDZYnD6i",
  "key16": "4LVM2rvv2Qi4yvCmP2zLRpzQQtTDWxwcdrAuUtGSHo1fTgfZshedGMx87u3UEmVNanN7x6Tj2hpczz5p2gozCeHx",
  "key17": "2Se4fcz99WkE6Mq751UxBrHAeAyrdHe21ZhZvMWtSiFoShu7LyaDVehwiAxMKhvYfUzjdJi1hN8jESsFk9R8z1ND",
  "key18": "2eoFhrngnzRdjsCngxZjHusJGHeWmivovjTWp2AM15EXaakLyZoSGTtB9d8i3MQ4ctxy6JCTneG2HYmzxN9c78Nv",
  "key19": "DLKDkxw8YokzS1frbqdHiUGpe3HAQKphDRuWJgVLsfjVjQ3BJ9dxbv8mX4VsnwmZgK119t9kspozQfagE6RGnwR",
  "key20": "5LGXuQ7Y593soFN6siasFSmAMzLa8it36QtBzmPBAvUvxK9pffFT9csCEgYtjzWB67k2bFLrePCDrHT2UpXjPLn2",
  "key21": "5dQhvffnL7Fptfdya7Gi2jXqjgzHRtFbdTiE4DFDEP42DtqkvtyKG6zxPcRkgAr9d6mUb12AGy2NQzjXEQKLTxa1",
  "key22": "YdAg4Gtkc5t3j3JEQ8E4HWyjzgXNGuLr3zYsXGnpUX5EhwPmfdxkNSytXBoRxFQa1cHbVvGostAfy24TxyjgtkR",
  "key23": "3eMQMd68v3Dw4VDgLiyJtNPfYFcKKozT3Zn3a5k6FSqWjgPkH2cC94ppnPYeoki7sUwqiF9Ye8Ng3VD7i1P61dDM",
  "key24": "3SE1R5sVszNy4XrasYUUvBUG1mbvQMVXVnHPmSzvsGtmx1BYJL7Hs5BDtNRyVzMgpJXQ2X3ZJpLKsnQDbCdjQzfZ",
  "key25": "4oQyNyJfeWZcsaL1ubboKDdguAXL1wpZpEqu3VPgDr4bkcGqFJuWNSCpB5N5bQVDDghCm26M5y5TMBspAwo2jahR",
  "key26": "3XQQjyd8Fjz5f54fNdvUdRFUEE2LEifFwUnAavpS9NLAx2fgTXipJJeqfL211kC6FP4NWoSrfN1r7zEnTZsQZDJF",
  "key27": "4Y28bGoy9ukt5m89sTmF7SrfpLxroaXiBY8HuwYrwDFveNy49Ucoa8DWcBFfCUDse7bTGPmUDhLY1dUhAhubdyWH",
  "key28": "2yrJUCCJRP3VeZAXYHdhpW7WZ9vXeTJZKaEiojA2Mp5GatkZD4XmYXt95rP1TeXtyaqbHz9Zi74tjENYzNV77BMM",
  "key29": "5J24yAQeujiPbQ775dzRGerLmeS3a3DG73vDhHJLemvPJCsJg611iRAEBfpappxaNdX1At8qnqwXPrpp1Lz48q2i",
  "key30": "GXWNjqN3pbUmMoPU1uQyT7CXpAExuoPPxyQ2yPwJ51CfYi3EWqVsB1ACUtN5dUroHfoaLTGcdWTm27D8RHLMbBD",
  "key31": "3BUnorK5TCtGEYzPu917R1SB8uS4u3mUvcWwVBGSVQBFd2kzz4iqxe3qTyTjErYPoTeppuDrm7QPKetuVPrhtpRL",
  "key32": "2Ee862zikQDzAB4bD5X8UF8DPWYYRy7rcPyTVWDYa9VRNBTpTkn8cS7Xhbou93XQtnz1JgAKGh13ijECP4XYwobB",
  "key33": "3EGr6UGLajYuWLc9NCSzLyvSt81SJPLkhToWpEnjLrudQ2Q9U7eVG8nLf2Xc2PFSHuqnBDujMcVQGct6dpGYG9oe",
  "key34": "3qPjvKkedZfjteJN1hu7G9W8YUUBdC8wGdmivgtDCcPsWZrE1FbV4MX6wEZtbEr4a4cjadTqZeLjGXayus6QEDwB",
  "key35": "33AhVC6qtheReNDnh1DJMFwiH7GMD6qR4h6ynYS2ZhSs3sg5m52PbsEk8TqdReWoCkTp4XxLAd1VkZgSQ1M5N9Bq",
  "key36": "5Px5W1b7KkFwMDt9vYezDVQqN2HwwiR1satTKd2dnGkhaXjpKKtWL5cLg5VS5uQtqx77F13ZYBBY59gKJJqPw3RL",
  "key37": "41KeuSkK447NjZDRCmMbWfxa6dj8w2xbL9WJwZeoRgn18XnEm8m4i2o4dNFLUw3Rwgdf71W63QYwXjVTXZkTSP4C",
  "key38": "4uBFq63eVAn4rtBmA8xyEGyRFRmtVAMPxWsK19BhmFS64fFc9VCQaPdqmtJ6rMeuPp9c59UfDFZ4UPLDM5dhMkFU",
  "key39": "NcZCUiUJpHosohWNEfM4V8EQZ6w9b4BrZoxxPjVtQBuetZgeAZqmPBF2WMUmnBnXhtngosDuFpEUd5yJaKRxMNi",
  "key40": "ekyEiwcUv5kwEaGLTs6zYsEbRaorJSrD8XEWCrZ6wuyahGHyU8EZvypeHsjD5NP59JKjYQkJpAa6xa4DiDamALY",
  "key41": "3wxLQPxHadRFFJF1PiviYmTM8DBTcQiNsYcKsBzySZc7SbhD18Uc4eV1idNiHnPuSbDcTD7ukjndxFMoqysgRnnx",
  "key42": "4tCaRM5iaNAmizazQ8JrcKd7p9HxogU4pbuUPrP6exHXyh8QhHXUXpRySjGebGA8Zmskk41f5o7kxtstBJJJUoyJ",
  "key43": "4J7kDmz9FWWTVHT9MNHK69iMMbthnj14wq7Zqzg8wK53zcMDNqEGsJ77R1w2Y2a1Rfuoda8pxoKzv1DP7n7r8du2",
  "key44": "4ZvtET3ySt9urhVSW7xbSzDgHPUfxamUL9wEFsRvbuNdca7DW7MbWuxkT5U4uVonWoi9Bv6MuBngt4uA3G9KdCz"
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
