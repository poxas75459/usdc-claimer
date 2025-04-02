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
    "9QMGABunMvQ1kMVSjmQPnypGDHtr17bx3ppcZSYuFjU7Z8o2ekc9CqQyLz2Gw6ZQMaim8YWQLTLLmpQEjAMNET9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b58CxtHCeG8RBsWkzS7bZS5jyoKp63K48xFsyeUN9WjRj46qnttpKTdbKiDK4PnqnbsRBS7QZDxr5B1VRzxPZsB",
  "key1": "WptgKLaWpjMb1WnNhkwhiQCmpoVnQDg72yiBrXcFxCYoMyEvHNM1PcmhxnGB7hiWQRKyGubHpKyhwsTVS1sriNR",
  "key2": "WhCacFcUA5wU96V5UmLND8ox8xYwQ42AuCApVnArhS7a8jwCHHQWpYZbytwquVEe8ey3qxtNWSartAi5Tt8WTvf",
  "key3": "2AN1zJQi3ePAAsBAmggxaLNAqQGUsh2NFn9u5WBrzzUt9Tph3EibKVcX5XgL5XVbMinFZdqfCAnCYxx6ZYKBgs4i",
  "key4": "4ybJTXUcWnetNoARvyMWoD6sFGrPz2cLE1gCATU4zuZFKwt1jUGa3RXg4sivE8Sk9AvX4JAcWUCxvcxXEZ3icvWx",
  "key5": "sBkYfM83TpFBiz6V4cXQdp2XvVP2kTecLtgUFFbSUZQRYFdz2JGHpwVcgozBiriVFwMX6bCsFsYY7N3srz8ux5q",
  "key6": "3vL6SfojzAx6uGcDn6FPsrpvwRG6naCW6GpCBN7Ub2vhxN6ywDynk4NZTTHzDEbjhgQkPtBBFAtNqH5bpkXCDaPr",
  "key7": "5yfZcbbNRFWzaH916S6j5uATvzi9qeCxAttMv5ATKtycJFm9RKGmAZRqTwgbMdBpZyidQeWYGVdNoiZeFyTwnCyu",
  "key8": "kEwMpSvcRrcuWmMKV4qkXP1kjhDRfoCBwYBSk6D8BXm7vwD3VCbJ6ecKpz9VhjQPDqVNT9rSfyUAn3QmSSpQaLx",
  "key9": "55ruptjviXfQcQXQd5ExtzbyJ37ZPeHMv59jXZG4mMLbrDdijzpfeLaxzraRCbR1rCTCgpVVmbU1AH6tDd2do6Z5",
  "key10": "3dNJzNwYmqZZ3zAWdqvDTfLrhbx5HBGdh8fyNQJuiRc4cEMwT3FdckyvgYwjXvAyz93uc2YEsSYgmeccDdSj13dW",
  "key11": "Kgc9hXrN5tjV7ybdCaYKfSwbyX53TDYjFQj7XVsahcHbEQibTU3Af3y6H3rUuMsS9nsm224KXxXUmotbo3GV7BV",
  "key12": "dzRAXuRzgypeBDvAgrMFwjRayX5xQVzgrEw2946G4uJN2fWSEmUQTeY3MdG2x58UA1VF6xk4Pm1G7AaQDvY1dA5",
  "key13": "5dLWnuMnMgff3qjKdzHd4KCVTCXWomLQ2Kn7r2Hr1YakemmxCaR2ZycfHkVkviR6Hi13aKKifZDsxr8jPXRPZmGt",
  "key14": "7CyMaAoTPCvrDv4q2t8KAGM2iRxY5daKYEBrSgApdEcLjvnHuLNRiA6CDXd7VwvRRxrzNSsZGmvM1uE7p1TWTsu",
  "key15": "63W31J1GaD7VtBijP8wRKK5BNGGLBfo5HvCRNGfU4d93ieiXn5pKsNSm2n2WbxgDXpzDbhKPqZm6La5tN8GiwJDf",
  "key16": "4oJUz5pxm6pVNMkPsP5iVKn7gHQHATFvGr4pZBT7j2mgLRH77b9RTRFtV2pF3WfQFT4hc4xrAEdCVqpQSjxxMoGF",
  "key17": "579FfPStBMEsf8LFve9cit1GzC8ztp7SwRmJvVTJTyHquMsHcwGJxGXPwX9ex4tAAvvcumHoPa7XkFUi8pomRnKz",
  "key18": "65KivDfcFx58eMda76Vct4rNXhxLbreoKpdibAh81ixR1eMcQLBfeije6UkeqSoMB6dNjwJroDdocUjVYxKsGSRg",
  "key19": "3FabWz48VwTk3mbVijgagbBrBvNPQYxeoR6YV78FLaWQV3gQ3WS23ALMCijHzecWiSwbZx2DNwHeda85LJpBz7ub",
  "key20": "3wP3rngv7QxBCgNSF7Xqv7d2Pv9tyFuvXsVQE2HUVGweAyXkFACT6xEs3AAyywwp6YVkjLjTaWmerbKjas6h91Wy",
  "key21": "2LUsXiytpADfXXR4rquFqVm8FiXEP8FMEr3YWD2NDCdb9xNgaTTkrb8Guxe4NuYneT3JcXYPv1RUVRLGJk9Fegau",
  "key22": "2XbjXGXevh38o71zG2UYPDjCZ74YxTFwVoMa4yEjzcqB9GkvAV8pQSKoBpQCUuW9PTsSbcZi9qF5BoZPGwRP9cA3",
  "key23": "4wJwVPLtRqe4FoC6EkDTXs6XhRGckfd3DrEG6T1ZpLG3DXF5HY9RrgQhscxSsELVQLbvwh7e3uMNM46xMeoGrWTX",
  "key24": "s8qvdpenjoQZFa4Ub3Nm966664xcjdnEiWFkQHP3pcc4w3PPq35yPR9682wCS7Hjyf14qD26LG7wXuyCQGabHJd",
  "key25": "3G36AvHhDu3UrotMq9jXbukrRaH5jhzQwXEUux9LrXgWcDeEwtaPQkgB9eiWoDi5xg1NVw3tT4WnynGSekcxindR",
  "key26": "2eQJs9NzHBGNhgaHoxCPvsgAompfFSWXJp2tH43AVXCVuABheP5T3uGHNqmDcxxT4fTJZrcBAmFdjxUqBFUP5edh",
  "key27": "3NUvKKx1T8n98yR3os3ygSDpR8zA8q3wJLcgEcDcShgGYNx8iJcJTBo8e56Kjm8HD3hTUVSCQoTp3MXrh2KwrA9e",
  "key28": "nH2iCj4c13tjup9q3whgNeHxBq1yNZzTZjEnmpaExQP34UKsmhdqZHJgNvCxD5kYVqhPLDTvDRR6d3LJmSSZd3X",
  "key29": "2Vn6pwcgUJmd51EVRy7Fti4h3cuDCARw3jm73ptpNUY2XV2Ri6JYaYrxpGnahVk1ibbkv8PfWXWRYqbSzPA2FZ7X",
  "key30": "4C3j4LsaSzLJXmtqDu9XbD1XpXTvEvwF9J4Nuen27UmHi3RSnAcMsnyEnzf2HucjyVayrKEJ7nmoDcPuzrUK3gTi",
  "key31": "gwUEjpysamT3SCsfpK9Vwfp2nWduqR137hZHzEnqNt7Tv3bV2XfxMMTvD4scJjCwDSkQ4vWsoKse8WHorW4uAjD",
  "key32": "4BN3e7jvkzMJEDREQv7mtetw6RfYqt5bGLLh5ykmbEoXcYsX6wKxzJVy4C2mYjadXeVEeTEEvToj4S8gzfLBohjr",
  "key33": "455JRphctRx5saNM4SJweri3WuWv1VdkTCx5Fm94cJxX8ksaEotXr8Cx6wMAfzNuwhkNZFeY5LYNohv6bo2Z2joB",
  "key34": "4a7bkBxehqnq7whJnJQAyY3iUxBfTtcb9b8ypvco2L9gA8sAskugSRWg6Mbj3L3yMos4STptiKo44b3NwbDwwb1p",
  "key35": "3xfzC3CMxjLDUbeTdbj61VPBdbGbwSWhj7vbateFW1ohw3R4kKqQLmiUggy5g81qgyePYc5QNsis4RgNiDCzfZkd",
  "key36": "mnvwPrWavJumSD5KQjp2hQMPEJDk3wws4jwmeUvVxYkY23fYffRioHBmhmCU9LoH95DrWUXZ6DJxxtTSxn3ac2G",
  "key37": "CuCy5X2kGatnNCg8xj3w28KpKpGyMrQTADXHbCytAnwjHfyxvboE4HFHqWnxaLqj62G2AW731ocww35utNDDfiv",
  "key38": "2oDRL4KNcxJdozva8jBYXYnawSN7JoYCY6SwT9jB1miJCxiFX1vCEdE5cTRSrt2QHvzXh5mjLptjq9MiwDtzMcio",
  "key39": "5WweLuBv9hrnVxKKP9vNSsAYzYFMXmrrtkeNrLXZkU5Z5HsVdkcF5PdzN28WPmB4EbAsVwVvGZMiYz67cXSVuhc9",
  "key40": "4utztUWtD84J3aWcMfFvEkALnmBYoysQr9z17ueHBwvtaWhUpLmD6frNndyMESRggqMX4EjevHAbejrsvPnFodwa",
  "key41": "kZnmks3y61VVTQar6hrgR4U6nRQjAAL8vmQeT69j7598JE3pVxDojBwHT82R21ADTfBbSzDywjfKeQRUWKYgCop",
  "key42": "26pQeyS2LdSayTENwcCkLER75WC1o6g7YGtrDhMvDsVwADT8BposkDZTJ6ZoN7a3NW1D9REvwUiddUf8RQxKPNxq",
  "key43": "Wfow5LJXUPbDoTYpjr1vNu924iqqsE6wjD1uqDK55PFxJ5AGnhFoLLSCmKQn629GuL3eRNGG7dSoTg5LzTKUzqd",
  "key44": "3VHWd6Vpk3BzpxMP6rZumqyxsKUJevSC7VxCSWu1Uhm5GKV4mNuYJ7ywn2qAGMhjRYhoBHuALnQBJypGc69g1nBd",
  "key45": "2st3CDfB8umJPHwUEiwF37yfxukzzmr2xXgprDiRbuJHDAveGsZaJKETkQHRKA5Dy9qh3uTMHPWnREtVkPpubEAZ",
  "key46": "2s7rNz5vEdS9P6BGu18pNC8TvZ3PBLSbQdYocGkVjuFQ8AV3YLuei45DCE4NtD5c25i5wg6q9waY21hWAdvoxm4E",
  "key47": "2NskBY8rDeNPBPSFcwZCR8Y3pbSYwrH7BftMotCPFxbeGQ8xcEsguK43fsriLPR6wpXuZUhx8yYSCu5HT12BpNmH"
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
