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
    "5PHgcg6kzkEgryNNXsnTCaFtKumJayTTKcZXTQgBfgy58XfbUhoxTaVanVi3BRHKXX6JLZL3kQhsHCrWFxiuwLmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzsW4jx8xRRBrea5gnXv46hSQFphLuCeRhr9gTMJqUaMDGeDgbKUWhsqS9ajvYQLmkgQexNkXBUBdNCKHiwVP3J",
  "key1": "3Bojy2CaJUeEAZ1pUQeqcpKdMr11fWX9H4UGfH9an6bqX3Q96WGtZEKNpzrpvGd7z3igBCUK9b2BoaDvvTzMynq3",
  "key2": "2tZSQY8YY9vx1fPGyPPznRHZQeR9LsyBKPSMiXcdJULoTyxW2FGfgnuqn8Anqxyfz2XBe9zed23huFY5T5XjsHFm",
  "key3": "5VZJeudE78483beLK3yLiMd6656YhkQkSfqH743rDSi1neqhsFubqLvzs3pZnqD5h1xFoK6dp9qbsTQNN9eSEHG",
  "key4": "3eNcRfNC9R8sMy1UQCbAM9DMfgNbDrskXvUgj8VRMtPEcecLBGrs95PU4taifLek2pijppKtcX4jrEtwJ9nLNq6T",
  "key5": "3J2VKA57N37XRs61VxJpnX7w95yhCgmDNeE2mF7iQyhZwrx3KPwn64BVgGu9sjqoeWsn3Zf9DzZditBNrWXCNiUQ",
  "key6": "3qXsz9ZULE7dbHteWtRKKj8xLWuf3AKKHFG3isZGFbY5FXgmjtRcCKCzJCuvC8pqf8tDgL2x1D5JkkMisz225VJs",
  "key7": "5gASUTXE66M36LPUaC97ASwNfP5573a3qrGcxfzN9Pa18wCp3VP1AxDiUwbaPG2C39QkFXKUuCarMRyybUfgmFz4",
  "key8": "2gU2Nip56q8MXXpnE4DqL1XLgR52L3mSD3nz3KUWSBC2Nb3CvR5fXrMVkjBEW8JHehHRHEpJzbt1XouvK1SJ8Mrp",
  "key9": "5uyDYqvVTEYErbwyePsNsMqqbRrbmyVrnhrJ6AU8CUiEbX4NkxDjKEGmi37ZEH8L8X7XFAdbrKPXiqktArgUcmaH",
  "key10": "3QrvvzekBW6huyj2cRZXkFRRY7Qic6o3S3BXwy6nRBc64zxzn8g2GDY3eE19DsXvLh6E2mcpoH1aT9LhyVwaZEtc",
  "key11": "ESRXQgdmFVBgiQfTjQp17ezRw36UsgmV3JEw5dJ5CdJwhBij8vaL5cDk2MtaTTtkDYorKrGHxrLqZXtJAgQ6txX",
  "key12": "3visGLqCHCFf692o5Xj4z4CzKUjbePy7bRwW4wvVNsbaQb4KRZJXM4rJZsnzR7quQo3qfJnpXYc1CcmGu3k3advy",
  "key13": "5oN4Kc2MRZPdM6eauyYkT3RWfHFDZLZiMGHHEsogKXra26PjtxHksVnxZt8Gx3S1H3z18MhdNLFAyC3RgqVeNuUc",
  "key14": "SV5QWcUcXPpUcGTgMvWJjp8XKr5NSLbsoBnPMm5MiVDTyhnNWpQ7q7jZXsKif3xdwpBpjaRKAKRhC6Txrdkj6p2",
  "key15": "3UmEHmj2esFv7r4hFVXdhsMtcdcjw9xpdpM8jNqSkuPFbTvL8Ddu5rm682iiVW5b5R7khXdCjTXF7CaGDboEaZk2",
  "key16": "3AgFNE1tiZdxuxEq9ybK29GVxwWZ7EDeaMRRxpyvA4KVS5ia6NT7o1wPa2QsiTiBHJSJAA9Vecc4BCKJRAP3kNer",
  "key17": "4duBVQ3UKFDQYfWy782cHVbkGUfo3C6rbVyi97j3NNM95QjaDzTYJMcQfWrzdcinCWRYZFpNfHPFnBXCNumVZ9D3",
  "key18": "5ATSYFLTrFZgshmLELFSXGm18pqjqLzhBqdDN8mteSiKphdjXLiNFFg8e8Mb77J4AHR3pm7AR5twhvrgx5DZa7B",
  "key19": "oJw8czU7KiGZBTyJvyPJiFHEc9KpoV9xeyGnWSZew4SSDCxFDjsUmdKb9htsDrh8Wa1VAvNijVvuBZj1ajEWNnV",
  "key20": "4xkQhCgdidxUiwvN6Bgid7CqbZTKseUjfWzZZRRQh8CwD44NHTZMDUCaocgJUjFUCCAjoj5DKN1TJQ4o9yJQ5Esr",
  "key21": "3SDnc4pLYiL5UrZVATa9j2fAZt19YYpzVDQuFDPWK1aR6DGAEiU1VzM3C7zae5V3bDQPUF69PQ6XdVsFhkNJrXHa",
  "key22": "3hoTL8WQU7aVaNA8vJKns8hLGyowz7MurfFmoBSVASFF9a1v7kcR8X7oL6pHf8AUvMLsAniJhzzKhWVLYLxKAZWc",
  "key23": "4shdLPi2eie2U1GqnRciS86v7r5WrEbLLgfSPi47SaGBBmx52siQjebiwTNWHCxH7Nj1nCdL3Yq1uubDA6wjh2e4",
  "key24": "2EQnjLNX4AaxRnC13QzkWha1GKQN9FFnb9itd7aM1fFDsFqYmHeGSxTEYGVsH9W7qdnJjLSuuTtFLnoFEXDQJDLe",
  "key25": "5LdgQWZhnxxaNc7oXYKHbhiMY44xLGkhNFeohZDg3KJPpL29k7MWmVuLwfvGu6UM1fA5pbq1VXbj8DxF5qmdzBZv",
  "key26": "4VjQ6qh5EYTAUGJ5F9wRuU5YxivRcoaw7bevmAYJLdjc9wNHTB2aPzN1bKcP1Ahv7w86bftaB3te9cXBX6p6y6EW",
  "key27": "3ZymyvmJ5DF4Enq48KggCc4sFW55i1a8KrtMsbBeBdeo1PTaQY2tfE4hGE6QTa9f2Db9ouYowPqyC594PSt4Haas",
  "key28": "52ptWgGAeBL83cyWLFSv1rL84z1k9GCT6Rz3Tca2Thg5DJrX7FGSFvba7nYScDy91BPFBti16AcKkyFfBXV3RwDV",
  "key29": "4bGkVQLgWHZChhQT6NJCqQUrMsNvzc9gjvQbEfwmY85h4sfuTia1LR4gUthmFMnLk2QpHJymqdKzWAugyejzU2qm",
  "key30": "24btSSm5XGgPG1R3XWNHN9Ht9NsGUjhcHvFjBZwfoaGnXgwFa7nu3VXAHPCF8brVoSzTPBNprmiCp6Fxa4hz19Tp",
  "key31": "GLPfLMkiVRivF9BaeQt8BgSv3Jx454PFTHeXMvRazn4iwbpzAAsFERPRLV9UNRooboCP9NEZDpGsMusz4tBXGMK",
  "key32": "moB2k7ML6ZQiiJ4hjovkxh9NKTo6qU36QuKQ7M3zbUF1suBDfmQUxjRr2TpdYJc76hpT6Nppb54V4F5ZeVXcNZi",
  "key33": "2XNjsJ9ihRKnwfhh9AZKW8jLJBFGY8wMrsxxvP23Sbrn7KQKSU5MNmd7DZje7TNNr5VL1PGSuiNaLemEahBF8Bgi",
  "key34": "4ZgoByuyGzJKaSqHpc4iP3r5obZMiVipUT3TQ1wQRfwv8D9rpH1ZAwB5hUJptbte2kivmavXvmzBXTtXw6vcTBnm",
  "key35": "4fCZmGa4EhMwvJUvGqgCVDGn4qSeV6LuQ7dTNBDLkZEvd65t5EmpXi5i44JFBJYQo2iLQWft4r5TKAinyFjS4fEA",
  "key36": "QsuaFVaYcxS1oEL4JHfyA7AQr6UKHyq7uxCGtibgUWqBcmzFqtPsTWYmAapjSyTd8FiFFi8Nj7MpHmtSrcHhvNp",
  "key37": "3p8eYT2fMTpJAtMwQZq9NkXYHuAZzVEEGsPMqFHREfXGEmkYvM8MaaRTRytkU5piDGA3mGi3CSNLQ7WK2nbGqiWQ",
  "key38": "5H8Gz6eWnieocAMZiamUzZ4i17QE1rvumKkPQhfwFqY1EJ3eWKztvvtk2SNaR2fbWATNSkJFqeZeKgpT1bEWwpwK",
  "key39": "D8QTSjgnzT6P9FEYbj6o5mxMYUA13UCNnJ5h6wAYjKVN8QvW3MW49kBy6sMRpcU4dstGgJ84Po18EfZk6nV3Vrr",
  "key40": "4kSnYiuWcyrcxkjSvotReQpWY84SuRvMCZr78KNwizDZSvo733wcKrnWMjLM55YTJxis7iCEhEQg4fh3m9HMJ7K8",
  "key41": "51qiGqgfz99EsGCJjvAWHH62MFzR6NLyyQokJNbiebEB4YkyfEQAkRSg5gorYWAQdgDstycBcFS22fBgg3PoZJR4",
  "key42": "2ozB25ug6kU5jnTdsfS44DXkkKgrwgu3nSae3uPWgHjpn1sHFS8JJet6Gi2LGE6zwbddi6TKTbDZNY2kFZqbsLFP",
  "key43": "3UeAv55d2BS9KDz9DwhSvvd7dVvwNHHdFfXRSGdwzhsjK9AWbqQbCQ3wZ7gSNZVekTpLb6kk1JMgTz1AGbMSnYop",
  "key44": "rZs9qGkT1gRU3vdPgtteSbzRGagDHYThbBSFFdPhgGL3grm6TUqZ6uCm1RaroDXCGYnNF17i7LjFfihcRCjwamp",
  "key45": "wRERskx2Lih5VpBpPmpPh4p99iXksF3Q4P83AkJQ9gNBYZSNrcAhphHiz5GLtGDBpR9n6ixDWHtWLzwEghKx3pn",
  "key46": "51TbWV3dqnuomGhAVnPbCqqHnwL8v6pmru1oFfd46v78teGnVHdwD65QvdK2uQm3EebodnpcWooRNsGo3298j629",
  "key47": "2qxQe1TLQUdKoRn1kFWYdWAXad6ungSzssKw3XtFUZaqiV6VMS4wdWQWZWfdRYB7FGPb5Rzfs913zY4Q2CatCUAP"
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
