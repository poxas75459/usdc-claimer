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
    "Tpq5TC4PA2APsHDXis6zX6UerJs7eXG25NqWqkosg1MD4wgzdPRF1XobiQYcXyVNE4gmiTBPPENMXaUP2BrKmx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Zc8dpevLfKR18zq6c4LMAtB95TeBMMvcSY2UXTsC7B2AFBMgMCJ8iLEaFXg4xRwnydLeEQo9rcGaYHkWe7QfBa",
  "key1": "5W4RPeT1Z8BxhmfseaL6oUiJruqUoRDsoStmnZEwQzneu4cgyJESihRBWDoiQRbizUwLVNbjAwYQ8PKE8hwdGtaC",
  "key2": "329M1WDzquRVpz8JzADLcprPZku2WtTRWGjX8RJa9eT1xJvxLWxx5pH1FJSySQzR82EMmjY5icwrp4qzi8Dqx7pV",
  "key3": "2vgL8z3LkzCLS4zNacYFdRSGnYsNMYWCH9b1PZMnecoKkK3x4bFyanEn3n6wG17gFmXcsUMQsfmnpVdf4WJinovz",
  "key4": "zYsQaTRH3Ezy14v5Yo5fT2WN5M6ZytQPHxaup3u3JJPutA2XjpAULUzGgnr9EWNx8xZR3hoJXmzLko8nUUn3doG",
  "key5": "jg5mFkkNSTykVMq7dFeBnemoGDNRmrqrkcyY7EHN6yiwsVjuVJPDJktxCefrD63Mi1KvxR96LYTFAs8p7DQDcJS",
  "key6": "3Jw2EAZr8xNkvPw9yGAU2FpeBiCyZ4aimnS4ZPoAL4VhdwTnx2NmDWFKJ9okGeVQth9iD9FwPTCfeqZso3DCRuqu",
  "key7": "2WCeEHgUv88x1ixFo564VTjv9PkP7NsL7sAk4X2jL7DEcRWgZ6iebgrxzVgNs5E2RJnraXw7WdZEAh64isnHv8RQ",
  "key8": "2Y6tMAHv5Z4VX1JumcrNNiAuuZpY377hmVZDBq1zyMGYBoWsRxTGpp2XHap7LweAzfURqsjZsY2Dz8FVE8Dp67fu",
  "key9": "5nKCSYKRN61VSEeXUAsapYV6yh3Ue72xJYNfzq48wKwdN1k9uC9DYaBvrQqcfaAEViGcCnhPKkozh41oqFZfMeHY",
  "key10": "5tb4vkFx85cLfBFu85wgNNVZHPtSANFK6kGX73ZrEAdVG2XYTn1BME3Tho6jkNr2gYHxTFPQsJ6fDgHUbLDVJGPC",
  "key11": "5BY58BN9dvyHqUnadwo4BzXyXEZDVeVH2ezqW477PWNN1VpTZ79vZVriKbkmEuGb72yyFYngh3P16EUbvq7xd92L",
  "key12": "5yF71zY6LHEPTswFX8jGtXfwfya72J3ZS71tDfq8g4G3EPZzudAPV2QwLNkuymK8dJug7ZvXYYbEvBxbxFaQnzek",
  "key13": "2J37C2CD61M6VvrPAwjPWje785uV5dsnrQhs1LWymCBua2PpYA847PyBnYjdQcoGeWJBNhiYqubZ16xkUsVoi329",
  "key14": "3Mvj5Nrqt8gA97AbPJ967H175geMXznt8yV5kDkwd26j8bhznBAxGmSKthnJ2nQyDL5AC6wHPj4MLheHvAKnu3P",
  "key15": "X4RLX2regiFYmfFLau7WjjpSkSzv8GLjTvX6LjmmdMiLVnPS9TPHqswyT7x2s2j9dZ5mDLkxpnkzDUBRZyxkkKc",
  "key16": "4Stmtat6JQEWHsS2XQtcDi7Ywk6fkvLZvGqWa7DGxCgiEsra1svDDzgARPyg6B3caQPit7amStkN4NgUnhMpgnSi",
  "key17": "4uhP2qx3nGbuuJ9PVZWAy8Q1z8q4EwnbsZYtJMxhHTjDePZAtbDyTXPjeZTRQf4bZ9nGh38UFTEJq762HW3raQxZ",
  "key18": "2r8dAuAb5YXA3v3JyEL9z7qHTdvsLKpDWxVwFj9JXXDdqE7gbooXWtkaLnerZbEZxUcUKtPFaCajPKNuStHi685Z",
  "key19": "4CMbnpinKakRBEjCoZJSzbLFYbYLEqbdN3N5CFBUqvKMo9nnL5DBnAazRHJGMQNDE2MDRPjM4Sg67iysTgWX75jk",
  "key20": "5KKrVjRm1NX9tUyHuThasvhVY46tgkuEoWxsMXmWaRjDEKfMuwPsAWuw3r2VkEGsh7QsD5NMoYScifRCyLPQnmPN",
  "key21": "44p2W84Nj22F3Xc3Vy7VHMsbJMC4FdBMVeVWp1pQkRrc3zPo8UQhX2pFsmKPc9TDMw2M4PARHp1W3TN5DcaR1q7X",
  "key22": "3QzZV4A3DJvyRvZuJjF8qY51Y67hL5tXFfV8XiYH9SEKA7brp1qgLzXwmkVWoVevbCtZ7QyxEspJtq6UVEFHPBwY",
  "key23": "2ZkTWibfJmgYgGLoxpAHnuopbUPugjiUxdFDBgJRYjxdN7HosWdZJPVvvXMgNCh4wqv768hefnP2fdGeFaPCGMKA",
  "key24": "2ytoqoPJDwAgUwErmtAe3HU6Pk1Jr8TVnJF3cH3Moiy6d4HUfv7F79Rhiik9nFC7EbA4cUYyysjKhRs7AxjHTSFQ",
  "key25": "591HBtNLtzyAALEyihCr7DrFbmgzunymaBFv41pk9zwKnV8qr6RBwjT2sAzLWf2Q7U14JNUqnbWfKFnGetThyxBN",
  "key26": "4peMEQHnWsunitWBmjHepyjGQqghT72e9tyti5vDgTad3VoY5j956GNBnHcD1HaPwun2WisffmHRDFGNr1822Ppn",
  "key27": "426SKBx3TBT93GGpdRH2m9mgqh6M2BtrTCimkiy4qm355c4u8NDMMH9qdToi5ZCf4FJRseMHB3FppP1Ei8x4aufz",
  "key28": "4bTFmPq6eJTxr1QHT38Ns3pbsv1cP9D2XZvv71vMxwHfMuVWamkxJrGT9rHconsAjuzfzEQUyT8bXkr8ZTiioLBm",
  "key29": "5xmPHLwSL2hczzmtnDBRySxhRPzAxUvTpzy2eFgSNDAJvrm8Pbxw5MFXc3VARcpidXZAuchKBdfPEXK3hHow5uqM",
  "key30": "XnXQ4zGCKL259mDZNsBbfgosUUV4rsPGCqbYVBDxYUDLbe4HZgrEDYxAp5TQoch2aQzq12HkQAw5XeEzvMvYu9R",
  "key31": "3a2tyCKCcoPkadyeyzKPG66HyWoZWCHnodEGXMBz8oXCfsyXnmDXJka3WMu5yBAyqZJnWEoMS2TGtDPdJLNV7kgB",
  "key32": "4i7CthkYjH1nCSxpZiEj4MHZhkeA4Pi2Yhw31cuDe98Rf3FB3wqshST2sStAs5i6iWLSzmQuiddkB9QJicee9hdD",
  "key33": "3BwQMXWCphhS6EVLf6c9iQ2N7aWa8z1RBWCvK4RU2A5coHrsnpxRy6txNED4dnwkN3E2Si5S4gAw6KgTZCpZ8f5V",
  "key34": "5fgqVGFNBNqG3QZ53M9dwBVJXRYocPKs5Vh3CnKBfgAcexDuSA8owKXfhUup19GukhfCToK5SEqfG1NmhjJ5yBsL",
  "key35": "4C54iRAQFQ6fhD4KtEoEymTosrVM1YrfoTCauRxL9Vurr2sCyxfyY6faakQ4ojLUpcnfU43SfNQuRm7EiwhDftFq",
  "key36": "T5mZx4MYPqK1DpZ3437JiNNgwJY14VqAYvDeerjnfCkKLBCVN7eowKHEtpLLmQrHpxpcf1i1sagGmnhabDJJ4L1",
  "key37": "2BYgX2c9jCAJfXr6mp6WmznEg5nG539cF8Bk3QPKbjV61job7mt1NtKnyRSx5nKKZuBjzNgBR85PHhgeZx3k15LB",
  "key38": "3xx8puuDi22db37Edh4v6PowruHhGhMCNXY5bD45Vw6UTurbirhJ98QBtSV1NLYD7ZtFEme9Sok7foZZ1cMh6yGp",
  "key39": "2ThPyCowKiuvoq2xJPTgf9FRNYdPFpE1GwENcX6wAD3YBLjpJb5pEhz8Qgv1uC7463RZ2Jaii1iwL9NxbHHUa73c",
  "key40": "Ydpd3D8ZK74hY21SPXbWwKiSgQoUR3UH8MC64RaRKUXHzKPpMZ4BvemvF2gqH4owcywxo3yrz7TaPLBsU2S34Bi",
  "key41": "3puxraL4pNsbh1XxhKc2gNFNXPw8jLKuNtjtcsKR9Dwya3XRbhSAn9328AGK5D67aeWEh32J8AhzcvKCi2PVi7yD",
  "key42": "UVsySnrB8CxHCQgYkM1ERe8fsLevVPd4MEmxC6H8ZEsd7ArEigHdnAhb4Q2CuLF1jqwDFuEQVgAmsfpGR3UgK8m",
  "key43": "yxHSRm2aR81CTwBAyDJLB7Z1y1j6DVrJcH1RTLPvwPpjtAkgXLmnHXjpig4oMxRwMReNwCjxtkxKggfYvF1LeNn",
  "key44": "4cDBaEisjAx7f9vkuiWXH8iXWMpN6SRHTDF9C5FNJ9xsuPXVtZWWNhj9jpgbjqFYiL4D4S6p9FSKkX43BuhEcRMF"
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
