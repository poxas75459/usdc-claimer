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
    "4QkiAgpgtjD6TAdeP64xTJ1BMmaAQqt1MhaRsJrdEwzKbz73eafZLcoEdZsaNgFFd25JXiV9nANsJjDSbj1X8DLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUFdzAtm1N4WY1N67hMQTzVWPv8cz7SWX3NWKjGwAuRdau3hbdB3F7fjcP9GbjaYnS3L3gZxzEyAWagTiwF4qam",
  "key1": "2WWJAxC9XGYK2Yox7cXa6A5L1wFb5g1Z9tetTD5WcfaKNo9fw3XXGHLBxUAHpNdQqK9oegjFx9MSuBt3m9vywFC7",
  "key2": "567STST8jq7XTS55raUFHFp3d1bRvy3QQi3a7Nh2LoRZUduMtq1AM5QioneixfqLRoibCPChzudrD3fQSz4WezAo",
  "key3": "3xxGqDfnrtUXWvB6Sqzt7srue8HrZf1NgNy3oS5PB1B3a3SgKV6Q9mygiNBSzy6Qx4RL6svpTpfEZhtpWppaDzin",
  "key4": "4JHpyUjUkopYBERAQ9PkFPozaSxVMnLKYyS68mnswHYPQ9Wu4ka4sGsCt2j1q3nnXvPpaHBozudhRk3TKhAMstvU",
  "key5": "2KXJT6vQbJ1DRNdiV2gbkKNtqefLBY53HLwmxhDYpbnxTLUYB2W8uMepbzJzq198if4AEGynU9o1xqdUTqxUqBgY",
  "key6": "3xBLp97S82JBQL8XkucqZuPqE5CaVdDAMgZgSkJdGsEvh2XamR2vh2nr8emSaTbCuexkXfePzC7UNnsbT5ijmwyV",
  "key7": "3ahu8thSsrP7LqQKY3tbuix4zRvC3aEboZ2x3sj4jHrY18j6XpiKadHJkExywNh9xiPJeuTVEhyjvYGkuQ3bYVGg",
  "key8": "4oSRqjjkMMtPC3SEBPiJEmebtJ1x9DH61dndpwFaVuDyhicgqdTnxtoPeWfbXLzn1vAGwciMBq14LCGGrt4E8oP1",
  "key9": "4Ms8bmf2WNptQRyK1CDc1crwZnpqNdmhAC6dcMLQjd27TZxd7BRgoMcCrTUMvjSJpzudvpxzm6W5mFnjcucGpr57",
  "key10": "57nn7uCuQo5EEUjGdYb5GuCUND9SJLNp9qWETCrPns1i5wUta3tYSzJ8hR8KNnkijC3Myr6gHUViCHJxYbJLw6Z",
  "key11": "21MhZwC9QxH8evR6GFuCfuUrpZJ67rZ2z7ZEfiT34m1muMi7T8bhyyaDnSXjov1gwdKySVznDbqA5w8eWdGf6opG",
  "key12": "4yPNSFkGDmMoY3Dbabv8YaBECT8E5ZgcN6fSdxuiVKKrrvbU68u4TPs5jEj1m7G7mb2fhZEK66Ejee8iMdrGaV4L",
  "key13": "3xYsNtUV4nUY5DGfdP2dH45YFVrUX7AZywziMpj38UGbQkcaEizmAaUNaUGvrcVjA6hr4LYpw1FPTQBwsPAiYSok",
  "key14": "37RKxPc4QrgM9aHMNSBgZHmJ5Ri39Uz4YKSDVo9yxUgJ8DFovPpfx1Cu1q5xPpfZ1Zs4ob4hd8ZWVEUoCiswJuJE",
  "key15": "p2D6C1966V3NfrmK5bN1JYax9dVwXxmbRjWFtFNJ1p2yDL2WXuWdTNNK8KgfoX66ZfKeajoUcbGsxt8bwuGoWBm",
  "key16": "2oiaJxduVaHRD2zUNLhozcf5YDa4LBQbmCnaxb2MTVx9ksYG3CqzF4sJyfA4NBsj3v6WaNjvortg2UvmhEev6Sek",
  "key17": "3w4zsvU1YU8HBUmJqLjAEHTuq2VcAE7jVacysGipu3jY1eMgAjEEramCaErHiD5bHuGV9r6m9YwbZBUWgebBpyrj",
  "key18": "2vkFGG2r6iHnSwm3nnC5WywvDgtKzDb3c3G7vUm7bA7mTu1Et1EDLdHMLSCi6XxtjpTaXz49sYBypVb3VYYCfKdi",
  "key19": "5zH9n5Y51RhnPgm49gUxMf8qoCLvenRjducjrhMa6Dc4N851EemX9LcqCeDR46hqJYieDqBDjSAAbcGGWFTvVDMQ",
  "key20": "3mxDca3u9crLb7wqHYx2GefXTyY6DmZaMHWdSNSoeRPV5qrj1D6Xy4CgeMHWMtv7qT4E3Er4tjPy6CmcLnBD94jo",
  "key21": "3CidsYpxABZ3EP3gerzhvCrAgweeTGx5wMjdVeuZRpYrdH3k8fC9Ywb87AoSNzQ6G44qf9hrYb7BxnJETrstSZ5N",
  "key22": "iGtsjZuGm14WujehBdFsEGHzccJessH2TMMq5kB96YyQkdM8tDpqDJVU6973BgZ5qcLwZiD8Nvegs7zd3LEscqi",
  "key23": "6fMd8tCH4V3HRJP7RV3xN962wFB3KpEGHu3DxvrQxg3bVWq1aFDtxg5bAR3ca9mDrcf1qPYTkyzuHedtpWhc5DG",
  "key24": "7ssdv52YjCxECiMTqT39Rn2SLT393nxYpjBNxUVdn5CPHyC1XzuaLgbj64wSc8LPuPtxSxbC83CknCMWkbjqCL6",
  "key25": "3zSkBswMSYygaDGPi2Uvjvm5rG8hd3GmMQgMhAxqgqFWyetkuDttJjtApa6ftwdEFRiETLS4XvHLyoYXeoCq9xJf",
  "key26": "29DFpHbG9fopeX5z2zXgZxEvVuMLy4LWZp1y9Eg76mnq2U4dgqcz1sCX828feAwRHV9WbMAo4p41YUwNA7P2XZCt",
  "key27": "47XdPkQnEMFafHxushjgjB1C5WGMUakNBGTsBCokAbXFBrVUxqoNDyxrMDc38bQ992FWf8Jfm12nrFx6URE6AZBk",
  "key28": "4k7SE52iUEsme1EuWKDkQJTwTYUo221sYVhCiPr3eT8xnrB21dcSRRsXyUPKi8SSe6iHbGTBs4WfFyAM7Zxso7eZ",
  "key29": "5NNyH4vk8ojGszRMcvxv4Z5RkvHiJ26rEGGrywuLrhWd3tjZSZgdtVqN2xUebwp9Gt2FopteigKL2LKmK1zBFh3h",
  "key30": "1ftBmjQexpMuA5KVs9CpPHqkqbMUsR7iqRqnDCEpYPD3gXf2a81Ae69nQNBJUX3yj1wFrmtzuoPtBSsfSZfeZS3",
  "key31": "5NeJ84HEmVtn35PDMcAnXb1krNZTgjgcp99151mei37mWRwwm2NSePzdzps1ciin7kajfSBcdzYby88oBxeUmR4T",
  "key32": "2G296sfU2euQEwv7bCmQHGBjMAZtM9Xdip1eEuCUrbxyN6Pw1DosYiVND68NpdK34PAD5mfwdU8FFyR1ajqMmjDH",
  "key33": "4G29tJtRNR8DddVsWv2Hcw3xXpzGK8HsRePDUhaGYRnBGj4Gb2tC8SLWcZuEz3UAiKspXuMSZuEqKyjCt8zW5bTx",
  "key34": "3tiH3uGEhPFpseDExhfdqkE3tfM7AJR1wmm6BpJxfuuAJqVM3qRKcQXmA755oUa9nuq63jgXzxSyKa8zAPuHMG39",
  "key35": "1ZRGYGtCpdzQecnZbYgxH7MXsfDfaWxGSi41CE2PjjbrETVPcu4xgvRH6uj1CD2245MkaszrnjX2uVVLBWxbwFK",
  "key36": "3aX9xiNu8LhXxAcDDHt4dtMWqdxSsftxtrT46zNxApLt75VwkMJLCaMTHnJfgqKGnFLjVWcKbmmmkyDRQpFr74iQ",
  "key37": "3KRAFMZVEh4k8zKBqnQdGLTofYLDCYqUPYzrkFvmcKkSGVMrdRUJBKwMN7x3qBur4DbWVds9LDvGUyDY94Pc1cVF",
  "key38": "4MAERr1Yb9qCG5wSKJw1DV5L2GMjsK39t8GACVRWKTVwmeNBiTEmjNPRQM98mEUi5qGpf7NtvrM2iKPwtS3DrXQi",
  "key39": "uPtxWTgKKPPXCpixaf1xCJEgW8Y4i2eR7Ck692QEHpbMseSaE7Tto6y8q4sWvsfbkBevPvoA8AjgEsRRqR2qxaj",
  "key40": "5i9BeTShvbzk9hLnvQ6wrtEXt6do2BxXM15iYRGQCgSW78nAqUqqGQs5STCNHNFSQn41yFZh4KAF4XsgR8CXcnah"
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
