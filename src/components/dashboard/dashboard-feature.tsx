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
    "5iTNa3FDd9V79ajmrmRYJdCRwLkhCRF8ZPKVg3Ey6XDLdjSaRtGwYBAMEubGF84xdcGqJqFuxEhy9C4wm1rYmu52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27TLb9aKNZWjUhEd4s67pqNQsSJtcLTVpodB43bvYkjPJFuMLMyBSagDmFruiy7QV8MjcTP1o1BxbfzzuekoEgJu",
  "key1": "4No44tu79Bh3MrsxBYs7ibpvPvboCF4GWnneiZdoBiThKsN3RLRGYHoFsLr6Cub931v3UgeUdCkk98j4DFHfaG7f",
  "key2": "2RWo7vRZX93GoUq61UJ4iRwfErACD7UfeZf4gGPP6kZv5XgRJo4pzWieGmZR4qHv1n18fCRZyVEMJ9nrkTFeBCAK",
  "key3": "zqtPY56o1SMgQsz34PgxW1DdYze9fnij4oxM6979TaYXCuoXSLaupDefKYAu4MyFMfDzTripS695t6PkkAF6vcC",
  "key4": "3hkjFNJwSchMYpUxzewGsG9HLmosrZwEuy3ffr4U9cSfv8TnCxRvWd4EqDezEKazoQ5LABUcoog6cK1idcqqxmXj",
  "key5": "4XMYiBUxCCmRz8TxfAPn7ARf6QDtoyqjzf4TwK8G3PknXRLUwWp6SVPUd7PBwmjbWjsGaUazLhNtxmNFWfxFitcR",
  "key6": "5Z8YkZUFYH5Yx86jACqhWR2dHcfKdNp5tAA3Km7LPqkG8zCLfJCFV6gKDdMY7T7nj8R37Kwe3zZAuXKPm2tuZjET",
  "key7": "5HgN1rdASNFyp8R1Y7BHoroAdT1W3s8dZEs17BWKz8mPJ5nmtKtG9yRiF2V5xAdMDxF55Cf31LZESM6FNFwNL7s4",
  "key8": "4hEpjcabZoiWvKLsLYHJs459NmGrxxbEXt21iupk2CX3TMk4GNiqG9ekBEVBRYmxzAuvxn4XBUVyWLiTaoc5vAMu",
  "key9": "3xkvL2jX2Rk5TGwHostTvfoESWNB6pPg57MinGs8z7HDBope5VHuPz5Y6wLNG7Ngf4tBAnFSdpHSn6v4HLLi5mZs",
  "key10": "4w7Nknq2df8ScRQQVAjj6EauSYzDEeAkuEocnF6sqF53y8ab5LDTKzSpqSt9icuHZZeZZELMaHzJ4hUx61dmf1Na",
  "key11": "2EshKV6nxiMwiEx2Hz6fgwidNJXHyzgvU1zm31atsFgNgiTKPMtNYoavxsEGpgQGR9Z1PmHnkC2HFSR2vK4KEdhx",
  "key12": "47AdxZpRo9obUStox8S8JSr9mKi4Ah8sw3unfw4rZoiouyhQVuChDGHxPso4BPUk6pCEJLr8jjUvg5wfa9ta7goY",
  "key13": "4CBcpxCxApcn4xk8ABc737ZkQhRMXeTAEupZ5e2n86r5WYN7L9r7dF964evvmHdtcB11o4sUk8ka6AZqr3kAE3z6",
  "key14": "3V3Vabw9gpPXAg6b33e4ZUhkGYkAvz7NQjXsyaDtsXNMGt98boXsacLkhounTP9omZFFAfSA87ykcX6x3GQrSpe",
  "key15": "5wC5mSQKPxxoT2Wo9hTrd1f6vj5KVCMVbMN1TYPqzmMzaLCDs2uo197QcmteDcJ7sxUnybPMpuv6Vj9SLTLG9ZtX",
  "key16": "2YoXwGphn7i7eYLKG2otKk2dQcSTwtk98QyQVQVT7msHNaD2ACbHehWfUMsUYEd2egtodBxHZHs8deo9TRpktdAA",
  "key17": "4kimAqmhXTonBomGn1vpx9KMpEzz5izvjuDDUhBaRqiEAFwQuqgKgAXeT23PGcfKVrJYpH2XNf4bPAZEjPzfPi4P",
  "key18": "2UFRpxfBsw8H78uzW3xxuoZ8uPFh7d8Q4MZaSJxs71H5JT9Rk9sCTK3TwMeXidsa1v699wbxjgQCMQphZhWzyoP6",
  "key19": "3MWqC26vAAXeAEW3SmVSo8noCgvfsyFgpnoSQHWN4P7br1kxEez43vRxhFnHKKPeL7YYYyeaUFjsxxAgChk97R32",
  "key20": "c7SXfV464pgFR3w56rzUHF1TmoqcN2mb5hxkHLRD1W7HfpMDmfkwExdvjihDvKBFVqKohzdyTxVBgw57MXnZDMF",
  "key21": "4SAu1n8A1skkTubZ9x6EZERJYHmC9dMoGW3oTa5sxGW44guPPoXcC3pNvAZ97atPbTcBUf4qVAXEPJqLkGnTLw91",
  "key22": "5sg8LVp8oCYSwadJLjnw24KGZxt8FkXaKDyBfPCQnvcUMvQ5DuvzuDpLFfq9KnhXZ3RSssqYFBKPx9wk83Ruzskn",
  "key23": "4J7iVUMFK7uA7sMSaRDHcNd2q6nd8LEcWAs5RCS84KYj5VwmLuDTu3YKDBGCQuCUn4gYFC89JaxrWQ4Po9Vs94gR",
  "key24": "ddjMb54yKGRKknfJq8hpjGmXpvqwEwdMwjcL78s1khPkbsV77iz9Z5N2xYK5CsW7B337oFnzrJCg6GWgNPBe4Su",
  "key25": "5zvHwpNBChoqbonP7Y1Jjj57LL54F8o23sGJTB4LG6RJJGcTzqsP3SRAL6SJgtwZUhpTLvH5KVQoAJMXsB1JxV1i",
  "key26": "5qRa3B8Xreb5tdDD69C6beqLLmt2nCRxf1br8hknNXpCKMFwdohki835bxyvncMSoNcUL3HDEKQoZxQw6BVsWUe",
  "key27": "5s9Jsex5df1QyFPvTdqJ2DikMdQVxUdw4NYYddY1ePWLVivZPG5AczYpX8ATD4jSnxPXqcr8PadUUv253BGgz1hH",
  "key28": "2AzfZFVQEAiyQdjN4pvdHU8yYJWZCF7o2xBPytF4LPe42KLMK1BP7axV4GBXZz9PCFZnEbFW9F7Catub3NWQSUg9",
  "key29": "57bVjNyMfS9hGnLhJK15EoY41EGQMCHR3BHQkGigqz69fVkqvWQe3Np6SHDA1Z4cY2Mu6xLAXDTwDWaxMzgFoRgX",
  "key30": "2meUxGhUGS5J2myrk9UL745pDnLHHYiNygod3rbFMdhrG8TTWMg4CKABmQHJ5csFoMS9RH7vGrHiPt2ZpqrJJDwh",
  "key31": "3Y9tdPfc8tAsD5QDk53FFZ7KzrwRU7qj7wnc3HdjYfb3G3svtEZsTmcqeSbCfHmxDZ4ZpqSMozgeMaQrtBhhzU1h",
  "key32": "5XmJSGRG3gnJhUaY59qq7Ymq2TpNMAPMJvpDoZ6YiWpkDjXghsKghFXrt8Qt7UduFKgndpmuedXudhU47vmcrUDs",
  "key33": "3qnYc5XPoxDtEbAtcb1JUKo1zLPgdbnaQrCH34wVoQ8E9xgksFGTzz1Fi3KXxEZxwErEEQvG5u1GqYT8RgWtGBUk",
  "key34": "26MVWhN5tFzGMyWXBbXiaGwtprHqHMUMx6XdBJkpNTLm2HcaNWNYdqGagRwfGjYiN6gV2YrViT8HXyWGRC81JbwY",
  "key35": "Cp31PrjPxBYq69gLt8jydxDoDWsqjGuf68b22cbya2YcbQWn2XxjYDyRutpmgx837ezY42K7aoyJJ31EsbGqhUi",
  "key36": "49yeeHBc2qK3vokZswe5hQtU9Znmm3Qbo8ED4UPP19hV9RAQx3B7dgd5XwuAXfXVxXa3UiuUQB996ufUdHhGVZJd",
  "key37": "5JFsbMJqeHYTb28KcPgoiJKpBirehnQX1opic3Do2FdB766LtDVXgdpANeMkGEN8xYHQefcTC9qC9zPUXGZ1pJ9w",
  "key38": "3vMebgxnqwfZ5xyMFR8iC7weRb26SUhxaPULD82yuBHNoDDso9H1STSe16vjh4LDGSV2uynZ1V2392d75nx1e8Y8",
  "key39": "hWfcb2j7WxuvKnM8SSc8Yg88vBBUZFpr9U4E8Bef7qVY1urbrTraEJwZBhp9GYLXRDdXD1tvwY1duEvmzEgoJch",
  "key40": "5hMoKGsNhWKEPoBiheHgEWwwt6epM6KNGN1fQSCLSb7dfcYuseBLnsoEeMAW3XE62niKjW7BNh7a28E6JHF3tX8B",
  "key41": "7ht9Cu2WoJaXLXzSThojJvY3Gj6RPTBZE132iCyd4qzdXa4trGGa5khhRpvumQ8HCQZgZreqvezwgrbqs8jhpRm",
  "key42": "4u6VwB9MRgXm9rAa38kqKNLrx35ob49dwB3NntXSztSAThZonz3xSxb3z8Vf59Qmcb1YrhkWwGaRXGCsMw2ZsD3S",
  "key43": "J1m7CUDkgw6NMGuHFpyyoxWWCNV8SAuHU8wZNkG97Zi4KSCQDfugVR1q9Rxub8FBL6XZcYsawRvEN3wiAEXC5Ea",
  "key44": "4dFB2CFcL1vtkwoVt3QNxG2HYBoRUkCPFc3HjB1u2kPLYoPJpo5ahfqBfeHqpZ9dgcErb8cEaboB4KNkkKDkNEfj",
  "key45": "56gAVRPQt2vi2wTvArAXKdrzKzjiEHAN9o8ymVkFHkzD33f4HnjA838gf6pQ9juMLK2hrDYmAbzWJcXHjPNdRbrt"
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
