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
    "3Dx9HBncXPvctN75wV5ak4uuAmaK8prtnD5qCJoZBYMEcgrPzBjRdD6B6kxjnGwCddZFy5Cf5bwr8y5yM4LRiL4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMFx6nkqSB2AW9YVVZfHQadeqqEcCA6KieMuQYSBCLw8taJ5niKDWob3j1QzubeGaHi7PFLQKE3duJGRzZ6mhqR",
  "key1": "oqprq5hv3wTxmYJKB1RPibRP2Tw3MrAz61Q1syQPrTE6i8rAmDP21j6gPqcXHE7eV4fVtxvTMV1zYZA7ed6eh4n",
  "key2": "5m1M3qHmo6xPiJJiNAwdmHFpVn2EZUC4rSQmD21N99eeyShpvw8eotperexWBiwNreg5r2rqmt9K8qKgBqXnyzwG",
  "key3": "3PXrZu5CF7wjoNPsFwofp4nRPtAa62m8FECDuvP75YxzXNpAaL1ZMPVFGyJYAjV85MUirTKVdMnDiVzYb7KDRyBZ",
  "key4": "64FPjiVs8kt7rqJdSrsJyZG3pEK4qQ4xnXev1BMmH6CGn3k4xBPoWbBZx28MLnH9KNQzNctKg8CXa8Qbem4FGRmQ",
  "key5": "4fjBe24m6DL7zLiEpoMosFmf4fZCdSaSTM4SLQUDPt3KNQT5e9LnkQxuAp48bcBMLQvdqxT2GFzBM3rxdsNiCzW3",
  "key6": "4Y1cquKpdcXYBPhcF8YNkrCfb3uXGMjKE3pX1FH33frCMszsFnbw52n8hr6SWuBRHrpWSvoDyc1QZMg8FNtt8tBX",
  "key7": "ymFAMnA9dXJ1DkBrnarEene7sCQ4HT7z1DuVihbgE2aKkAxWqVSGnoYncA3TDPtTpMER7dxiMgsrjVN3ZA5KdPG",
  "key8": "oa5r8AWXoyVvhLubuyKtdW6wZd1ERFNHK4dJxvYZMixzCEEh2xHZ1Qd4ca3wY61SZG2HVv7cy44W9CANxEncJDW",
  "key9": "675U1KNg9jPEMvhCpL8Jti1PNK6WeCA81EbFbsicgjNaUaDCuVkAZX48Xr38CtVffEyvfYfzwdZmDBaVfXxekYeH",
  "key10": "xKSM3aSZm1FCnfFLZZZCTS9NXVH2NFzokCuJyNJJoDN4nJwY6aJvMqR1etw4qfGrs3ZEdDwR9xxqYcw4oBZE9Q2",
  "key11": "51nkEkbdkSpmjod2YtNDf5AJh2GCjrKwCvBisZEbZjCmRvMauf4Erm1ypYaFjtp4KEwmq8ZbuguNsHBgmDoiWNB8",
  "key12": "4tYEWyurfD2zxSVEwVkwfeSuAWozF1YvGXbSGx6qXNoy2YFVfS6jqY3Rv3rWmtuE6BcrsNRRS4rknyCyNjdCdLDt",
  "key13": "3CJNoYrn2aDrBMVS3PoGB7Y3pfHCDJp3RQKEpxU2kHbUftmWb7Mdy77wLZR63sZZiZkVNG3zSiwyFogHZrWyNCqa",
  "key14": "4tGZwC9s7WUjtNw9TUa535gpaL5k8uCXrDqqFa6ajoT1qFmLS2b1enR7gQXpdN9kwyue45UjCuxGyvLhTAEZpY4J",
  "key15": "wFP4Si2ipQHzYtTskBH2sHVi91EsYsGAEtTRWxqTnTTXnjy9fcQ3ovoVmCxyHuT2RFvnAa4FLnyts9J8C5UJqhN",
  "key16": "4DjFLbjthRu6V17pBGGpRvJhrM4GXcC2TNDJUtmGQWnp74R9ELYzfEwPQPj36Esf9BMHU7PPVs8szUTL8ynNTWV6",
  "key17": "5Q4fG7cUbbsxyBzvjPFEtx9MvhkTabzubgRHPzcwhpfkZbFvjrkM3SZUNoPDrs4WaQhbMikKpG59nt4YEBcr4aQp",
  "key18": "2nqfU8f6KDmeEpdLfiUKUJtHoRpkqiJZHwMis2VVCK7GpPsnUgzQxwsMfEEkKCMyoz6scKa51EHCoQNWUPmpqPdT",
  "key19": "3EMVERHmdXUADNNRm5d9MrHccD2rAV2eikbGh3sk68dekWvvnYdwX3x1DHuXbCJshHkogw9hnCNtidcPnrK1tXQU",
  "key20": "3zCtMXkNpVqzRiJMvMoLt8YLvRRaYxBcik9zfjP3qMBPU5ULWdjLH55yAmP1SAaAuNjiu8yL9Eprm3bJFnFJmZJA",
  "key21": "LY7g5gjgPJ4djfo1BTwfVTz52W6iTwqdqNZjViWcaCGaWbGHif3ZF8ezv9sjtkiP92zTgMSshPysuS21G43RvcD",
  "key22": "5rYJc9rxdxXmWZpqtrsqBeppbuvyxCHJYkA919Qk7rzHM19WMXTn4XgzAcbeVJou8FgLWbnPpLL8afd26qTHSfkF",
  "key23": "ZbdjkjE9sYV7ZsXwDDXY8UKGaNEKpYRG1ovAfAxpTYDrp5VWHrbJSYsTuAc2BaT8tJgTJfjoc8jiErez2YKR7Y2",
  "key24": "2PQHBABekRLFcyVLBXzomCojcWHHBQH8gEfNTP2LRAgoYBDbEKmspfKUc4hoewJpGyJbmv2XkU17GoZgYKFtsZFJ",
  "key25": "4fcvCABqVLTYJYU6WfWdwkujQtNgjXsy3Bqi65Ukg13dLWF73aX5yBRsMa8i1H3UebEk3QZznYZDpC66HYiGCxpm",
  "key26": "3JznoXbpph3xM6e5C28gCFCnyG23yiUBJqfiNuKeKQc7yx5b6kQm7Kv4EQTHpiM7qNFiVPiG4uFpZEYLLXQonYY8",
  "key27": "3jyin3daSFe8uxbpA9LH75GidwNwcaznJhWLkzRwXFAVWivVXEYwhTrzgqHNN83YnD2vM68uZEAs8k4vEqUBggH3",
  "key28": "5u7xwNceVkNVJJ7kgJoxr3PryJBm86UaqFG95ZCo8ZHq52sUCM6J5sLbEMcJtL3HG8GxgbSGgTLuyb7ZvYQD89eV",
  "key29": "5DeSJccotijGEa38coqwpzzf24jiwmUPPV7WNvNSxzu6hJGgu67RmR5HLHxg9631jBy7X2EFbc3AttgHo5oMPDfk",
  "key30": "3sMGQpeqkVJ5JeV57DporsbcMNvcJqfNm95fLV9LKN9jBVZ5SsK2fugrotP8xvFpPArtcdD7gaW7hvst6QDXW5kz",
  "key31": "2ULXMibdceEKf2pBEQzxqU1ZXcJ5jSu2oM8pWetBsifimFCmGeVxiQuhzpePEfZAMEmm8rtJ6dJPXfb9Jgwf6oeh",
  "key32": "4sLGMuQBRqYn3CSTKt54wyx4FSW2mXaujruERkkWdUmd6SiQgN36TpwDwvJEcyjGMDTp593GkEHdpn7xfiPaKZvg",
  "key33": "3GjZQoPoPg9zfNkqRe6BsBSGLh7hjsjhbVz2FRLYmJ9R8D85gpiVG6ovczbbQvgoWpNSuqizHpsqXCbzq837t1bz",
  "key34": "2PrrWm2NxFtkSyDYr31c1Q8maPNXnSFqQWWHSY7ptwEZt76vAaN4dB5cb6WiiDUZmGE4yEzmuoYDiHABzCMK2nQo",
  "key35": "DuFRrFU5jHRvf2J93uc84nzHxwMzXCN2DZUvL7fwSK6hbdvsBKwzfVWsp2XSZiusD3P8btb32aariccmHzUjyoj",
  "key36": "GFYGQKNtp4FqAVNcHp7hs64LB67mJrft4hHV92cQdhLE7JJwRENkdVkiow9B8oChDRuVdpQ9zoNrkdhgGGRyDjx",
  "key37": "47c18Ln7TnYnFXziSiGpwGu11vpEeJ9ExC8y4EgWjVtQcdXtkyWXLzri4ZjiCW1J5WzLo1fEC43u41ZesFvCiXCM",
  "key38": "4qf4aasjbpNK654hJ6WA2yAPXKLTf3t5FHQFzFT1TmXxpuBqLyVQdGXKQnNny6EPkkNBey1f5HK4FTZqJ9KFSN1Z",
  "key39": "52Q951oZbwEjE8SVeTdRxqCtT7VuH18dUWQhtq7pTGssKYHRrZH6SjJSGRMydmEjezMmz2sZYMU2VwVcVSNgrpJT",
  "key40": "4xG8L3a4vyALjkRCMvS69kAwWcbtarRBpDMy7mtKZqZwGWuJTDVMCiw82JhuoSVLBaRw2zWpqazVmyppp7xyPJVK",
  "key41": "oJbYnTwLvnSR7nw1Zjuy6ZEHiTjfi1AWYXGHQyhS7B8SUutL4TpHx1gVxRLm6MRb6soYYMoopap4r9ygy4BUNEd",
  "key42": "eURPpvgFjy1Wn5ekkPis7seNrqLKmuBqBome2YkXqKSnBhEo4fVvYoajT1SngS716NHHHGtcqVdQptxYkpX9cTd",
  "key43": "G5uAAur4kcQd5pGFkjpaw5U774bdNPew1Cm4PYBfr9DbJZ5932h6XwLpGzUA7dzRCUd8dc2D3ACszCMSceW5dy8",
  "key44": "f2H6cZSRUZzzgw1hxQDRZrEYRJB3DMrHfJzNtpWyfKo6n68z4P4jj9pk4Af2SheRSWeNQKisp8aWKLgTpdMGi1U",
  "key45": "5fWrkRBUVmpaCL3PgzPUaHeXQAi3SVpMJNuMyAKwYBpy29kxMNEJC5YV1rovhNnYtswSVjgbXK6GGCZXmDppxqdw",
  "key46": "SXhY1vFsB27q15zzdnbdaRHkGYFaRLNJVHcrCKNVbtvkuVUw46JuBy4MRaTCFawuubGAszZPX8ZnUMCLTHnqoYW",
  "key47": "4U3nGU9CbizoByjRe7DwbPDkfFziTp1NzAWW3cFGKfRsBBV4tsENPMJ1yQhBRnW7tfxAQT3jth2bEyTjVvNZL6K9",
  "key48": "4THryiCTHRr4T1gG4KT3rQ7Mjvt8XBH1pEQJkeJVT3ov1X4MWhbUmcU8LPm4z7QNmE7oMsaKXkEtVuZds5tarE3D"
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
