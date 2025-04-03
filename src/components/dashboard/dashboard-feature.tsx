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
    "5PR8DSCb7wgw6YwZ9omwQJDY7X7ZpRrLEzVD8xaSAnsrkkVJbD5s6XWLu8tgmGjr6sveAe5PtEcFnGE41FZYbcL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zPSzNjJxg7hZZxaXUsKzvdhAMsDDe3WpRdaMmTNPPY71tuSpwdqyVoi63ZDpqueHd7K9DJ23sTeEMWiDQpdSZq",
  "key1": "2nmd2DMe4V5bp5Dxmn4r48djpCQniyaF3Myf5DW7fFLa5Fua6BroPbLCXabhdNVChR7MZCRhKosSaFQM8VnUFCSD",
  "key2": "45awVAH492TTZEvA3XKAfzFSJYnn9WMXHSvfpbga8a1covVY9PewmEURrbqFJDEjjVpm4GPXnxwHwQJ1uEaWtxz",
  "key3": "5KSiGPgwPA7z6KGJqfDj5t8oWvgpC7yzMeyHT8Y79dst4sbULU37fZTvcPkxNq6L8GPw9GMeGPWvqgCoiVjMYcjC",
  "key4": "2LAjJ183nXYWTaT5STnM6u48hhUNc2BMJiVpnuhMpapXE9b5fu25vdAjMStKQxNg2cahDCFxJMmstmMNuCZ1sxDE",
  "key5": "4mfcmcpTPSCPiEPCfNAekw1w5g8w4H88MvmZu9PJNDQftC7p3E8BEyXgUZgH7XK8fDTUpU1cWgNQxPWWY98zmnTU",
  "key6": "222UfZsUUgQznBC4AXavZcp6vvAiUAzPwNCED4xm9b6S2myGMEXYfBNmpytyttDF8KcuKUeBSoz7fhQ2yfTbYKx9",
  "key7": "2rCUmF5w5bftkX3DX7foPYNVicLfS4N9qJWJRaQckrUA3T67PXndQdZU1YbMSGLvvTcQPAoSaF823svigT4EhAfq",
  "key8": "4ni5wHZfvWjoQEBwGoMNY68VRK1ga2PFsb2BMaEG1xAQD2CZEgE76JJmXyyU9YrYwzzH9kbrksbwDeka5bt2pNdC",
  "key9": "41PMpSsYja94ki96RpsYv1skhuutisd3Txy57Pi1KsrVWusfdtHSdMLTcJLtKyMZgiVz957Wngrtg9nzSLeDpC5E",
  "key10": "5UKKqcAidXtJGPB4JtwoDvt2fskeWrq9bJgFgtnjzGcZx6qJibYX3KVX1vLBpgsutyW66929K3zJA8B2Xz6ZzV1C",
  "key11": "51fYEZNX1q566q81ovi5NJdRepUJV7VDjCvdq4yYCKp6F5KNpRq6ihcYy71cHqUkf3P12doTAH9xdRKam1W81cNt",
  "key12": "2LGRsapDfTpPPVA9Y4LqDzaQ7oE4wxkNyyUHxB4PPqJok8h4b8eC6LqmY3sHE6maJh4Ko9k1ps5ZJq7Nz7ZTYUbk",
  "key13": "7N4fv8ircHTHkQwGZ9Zfgfj55NvzwaaXsXMSXVyM3oVD1HNnRBjcEDfr2tyyi3VKKvsY8xDkLro6HcP1kuB1dyB",
  "key14": "4yEKzdhJnnnMMeFme3HwbhtZVUBrxs9QPfNsnArs3XHippcBs1LFjRWy32DS3inUsiXMfu6TkKLKDMXH5ZrXLsF7",
  "key15": "x8xJEzL2yEo2EHbc9hT6rBN8gKYWx2cepzFsPhU4EouV2bKrEDKsxa1xhwUf5sWetBPxieBqpxMq6XihBbFDanR",
  "key16": "kJD6CFtXg5TbbsxcWgqtXYvVcbtBHwDY8p2u1byTvCd5gPW5GUugTJddvpyatBpoMgw7qcu6KLLkqMN1efQMCGY",
  "key17": "2UCeMV9ATx4UY8k3k4xBidbeLc6wB4MmsBnLfhEtvawMYjEDzL2dyjd4yaLRUrvmeob89ynxXnPsgmUrev91aD8D",
  "key18": "2fz94kG52Uf7mLzS7CqZ1NzePqXvCMyz4MYQ8h5MjURD1bWv8xEvtA3oX89Am1Q1NkwhnZ39soXSVBCDXWEvZYNm",
  "key19": "5zac27yJTwTvKD15TVCRrrCuAvxPhwJ1k5pQbZscor51RiSZi4CJuye8GKPYmuukTWUYucKhwHL8tCPv7gzPRUw5",
  "key20": "5u57dwmu5RLpff4HBFhDgLpqgzF5fgkQfpJGmVUVU1XkfJuZMegFGKbS3nXXEYGvXMy7F7vDDv8jhvpzqqzci46E",
  "key21": "2vKp9f7b1MxtB7x8MzTvkxkEpigh82yu8VfzCDNkNWULCHJBDY7tJG699Web6gJ94t6B7V1YseqHVxdQ35rPT45x",
  "key22": "FFss82jVJsKu6hvUGdjjvHyr8D1BVK8thzXERpwJoSLV4NCByVg9DQKg1EfDPmY5mQAEbvrmb7XDk65i4E1hNua",
  "key23": "3c8aXAq5SALa9CFgLxYtpWiGE5mYJoSDxjXcWAnT1fctKvTrZQW8dW8Pk5mMqpNsGwXpo7ugoQ3e1Cykcbg7Lm2w",
  "key24": "3mRUZ2eNWeu6jx3Z2ywVidmG9Nhawzin7WneyEG8GT61rCvZ8KegpZMfCZBkCg7upxufzVpcZCMyCZZVcQJDt9KG",
  "key25": "4EtQEQ9VoyzKd32aqW66rbHa6CSu2oXibChYX6v4sMbpuhtaELGq8sNhHcvxn1pGwjcFoXvi2GnzoycqNFncaNoR",
  "key26": "4nSeJtAyp8mPfenJ65gBuDp1zSkVg28LypJZT43KQxsxon4khEc2oBDxRoR2a6srRPFoCitzXXiRG7egg4pfxoFR",
  "key27": "urqYizXYsryzaK4u9vCzseN5qpeu4wbZqP5f3YXxZwCnrQ2qHWCHQZ1beXGURsXKdUQxkvHwERVFupQ1zaTfDG6",
  "key28": "GRtqRD5SDWVsDoqgLKkhgqW1kqRgjdmt9SRb9F8W6z3SESLSwvngVTUjFXhqE8eQQ5Uz39z3cYudsUiP2Y69ppa",
  "key29": "pKxtJT4X1TwXU75etT34hSNHjdZDWzzmKhnDVXtcUH3rwSWVqLMv8pPxZGXM7tiKwsDJa8xiReZn59i6cKFcE6f",
  "key30": "47TSVqAigKB8kuS5p4qyDsGFJ9xjVYdh3f3Ny8fwLQJ1akVngY7CWZMFH8sUFd8vgFnUKj6EnbrUFtkEcLJgW32z",
  "key31": "zoqnGgpQnfbs6HNPsNwbkCbCVjre9fgcSpikvesAsqwbqKQ5Dfv7ghQRN3JTSKr6CMG4MXuHpvqdBdnVfcAjPF1",
  "key32": "2Atf4HQxfQ8Cv3WHk7Jzz8TZaYMASYH4yuGHLuhJDnCvvJs4LyBWxmDRqNM9N9AUiVtM9MJgvbaybExViiwgwJHz",
  "key33": "85UykzXNDqW59Wzf2W3uMkNfiW8XzcAXJahmQb3h3uomE1zGuii7Cnp1mjhRiqaAKwH92C8zWAgUzE9fhGyCede",
  "key34": "4yZCzbd4k2H4CfkkoVbq8hAgYNTi66H278xaLPimHUvvYkMCnCsMLPBrW8Awujk8kTWKeTWLHmu1ZqXUL52Vp9nH",
  "key35": "3wsCKE1P1bNoHpGUdRUMLwvdqztdafQd2V6Wkkg1PygDaSQYMKbdGtU1RbzzsmaDERQg7Tc4amJTAqWHj1F3MAdU",
  "key36": "3eHX6s5p5zU1PMsQt3VKVWEsP2JVCssU1K8MGdMZDFaBabieyr8F2MfxTHv2sj5hRZ8ykYFhYiJCx1qG6ucm2iK5",
  "key37": "3W6g2L9wqa195mmKAB1mxxNp2b7gWoJzr68btdX9Ew1oxsh3XD7hpvNV9edHnSaN3WWYCtAShHRXee7oUiGqDF5a",
  "key38": "2kUfwD34eN1SEvZFik3nHrgdh1586dPxejjQxRio5kxwu3CPG4x1PXkx6mrcdtijYUbufGRJpSLusmxPNZr82gvS",
  "key39": "rvPWvYhydu94v7pMyf2bc4s67roz6qR1dEJzXKNAnAfbYnb56Uobu5gzjw4ME4ip21tcHrzTXm1BwvuGkRtRHbm",
  "key40": "2mvgCMN1moVcAMXmpqLb5HeSiJpoLpkK5sXXQE711Yz2un1n18wKDzQQeM4nxnkshYzJrBsxVYhWL8GfcjfWNdy3",
  "key41": "99VBTPVaHNAjdQKiUA662rRPNPyztSPagsgnvEJPpzwq43qW8ZNnebzfCvBMmxacnSFBzpB3MGSRoNrbcv9pso4",
  "key42": "4pGZaP9zeMLDfWtkKHz9QFbYC1LK9FTMvpFtdr3CGxBGXTnNRdgNoCRcmeMfbRwqn2mg83KnwrWkqNGhZrKjY24Z",
  "key43": "2EcnSWPDvSVQQgT1VJEeaqe8GqHHDdNbuXhhMGePGp4dwxA7uzTWg9gQifMJAQhSEpvcGqGA5AK41pN1jJpMRQ8v",
  "key44": "M4uQqU86DDdSHbVJuxHoXgrhcC3wsFE1t3Dmv2kfn4hUxacWiKtbLBqyspYvkgN5AxS37Yrbvg3qHP2cnANVR3c",
  "key45": "4qASRzQ2JhRuqyybapAgPk2JP5sob9FTucQ5bnVU7PQ2BcsvQGP2HXKwiGdofy6A4prpaV5CBFDarG3zp7FxaZsw",
  "key46": "47Es2TaSWWRGNBTazBX5J6prp435jMWnFitWmnP1Tq17AHnJUNyYZXSW3BabbgQe5XmTHPmThEamNXgWueLEocbd",
  "key47": "2fmt5SXnFzMTep5W4fNULg1UePgGd3Uns8LZoLcWZ1Y9YMBqKDgfhMSUBmy3cmPcZcoL8M5vNzijoNsXccjuc4hr",
  "key48": "3ToP21U98XzNb4e387ZqPgDVwkrEupgmGATRpEmJ9Lq1yiDrA2RKotRRPSbYbkdGR9hwokqzRiGTCUx9QkW5sDHt"
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
