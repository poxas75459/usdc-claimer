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
    "4bumuJTa6vdw6BmJqXmndBXdh8nRLfy6MB3G5iKjYhh8nhzYe6GZzPEZiXnKQKEGbSPUmsJqXDtSNt8eMC7jd1Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUc6c7bhx8tugJ8NZrtRVfvGoeRW2vkBghpPvNBPN1eU4yKai2271fMipobZEYVdMSiCpxQy7Pwnhf66hHMU7t5",
  "key1": "5uGhGnYZR8aRY7x7m1Qha1BSo1aTnh2YfK14Uea3PzKM4R99P68iZtWqhyHgbznrM1PJf7Z5bHveB6NscDo3eVNW",
  "key2": "59ySg4gzmpnD6Jhog4R5R7Yf6PkV7cTmyWbUHd8RX5s1pcBEFjYWD4v3mLrJmRSh9i176a5oDWvgyhyiHR52BNiV",
  "key3": "3xfsfxqjMgujugcuz4E33egDg2bQBYsYLjqZb8zAAnSNGPksCv6EHs2zY8c66bUAeqCEuwucCUmohLGknVNrpKZy",
  "key4": "5r7VsshxwzZTLRexkPAExP9LRYqwyLZCjYaXCmxWiyaD7Dt6hUFFqLUd9ZBhzxYZcTh3t8Ff9V313QoTv2a1SBFe",
  "key5": "3yJ3MTc4zxJfFAegU6pPaoZSkjCvUJF91HwiUNtua9UrbHbryeGWva8DgpGsnRzgxBNC7RQWN5Kt9Gk1a6mCMbNG",
  "key6": "2d45d15d3qGYLjiXWGPDqkGLtGPuhVEwpo6v14RiX7ZaTz7UJMoEXNxk2iMNUya5AqoKVvSWXBHzU5aNCri2de5e",
  "key7": "7Dbc4RR1qrJ5DG7vpHeA7A1prC5V92sDrvMSNJHzWRKnqsi1r5WUzbQcCVDSS5X7bp8D9XWGQBvpnHiGFGqADde",
  "key8": "2CSBz8g4ZRRwgc4ZUCSZ31yVL46xBkD8f643vRkx1jXkgYa3fB6psBAoBp1gKDGqanLqeaYEB9uytyE1yzWNMEFP",
  "key9": "3GCgdFrFF1Akuww72gGGgzVFPbiz7tb1uENk8TrxWvwN111nYA3MDh7YcbpMafEZC3gzkD3UTsRkDXtuA1gVxt3V",
  "key10": "4LRjDV5pCdNJF6PmkEKodwazoP4s56zzwR5JpZcocG3WXqQdCHH1yeWP1uDdkdhhuc7VVSxECzYF4Fd3rBCgq9ZW",
  "key11": "5PLp2aL3aG8qdB6yK4syVrr97BLdySY4qoZo7Bbpxf19i53dHJ9vJihyUiUpgNj5GonkJTV2jwQYRGrhfbars8F6",
  "key12": "67dPvk22RiserfjwFhqzAvLoHjCo4khBfbSpuTvjHv3FRZVbqtJWj4z3JrDd6Tekca1joYG2C8Ja5iqt1WgHi8Pp",
  "key13": "vG593CoSVg2ksjjMu9EmYKGE9Q2pVm4LFYupWPR5hzS3w9P3W9D6o2AJHXHTqMvtUzAvw4gw9VabgpqV3xGP9kB",
  "key14": "3EF8nKBeT65W6aL7TtaZjEuAqhNr9ncWbu5pFZ9UXNmsyH358DYYZFQ65js5MYxysn6kiQiWNmehBcth2HHLE5ET",
  "key15": "5ptNavrb4ELhBrSEn3Md3PJg94vyJVjRtFR5uSSrKXYbuYtLCmppMh8ERyxbWtx4pBXiaXd8AG4eY6BZcL5dTdrE",
  "key16": "5yzRYRe2sP9vBeBBGbqJehHZMe1jGJXcgrv7tw8LDuAAj9HPpPnZeVLbvuEr4jXGAyNLATLVtfZCGNwxSKBnsD58",
  "key17": "41DpzfyzrYGLQrbkhpKdvJHtYxLbLK6CQeLjXcc49HoX2CL4WUat25oNTp6gTjyFpy75WCpMUoc8adsHw8Yy1sie",
  "key18": "5u1JgXvNz96U69g5GX5tEsUZ6Z8xSxmkMit3HAvNyh4rGg7NzFZuUA5TE7DRVLgJiQysgLoJ19J3VTtdAsvxxAkZ",
  "key19": "2mSe72hKTWYkfj2hymgBLBGMxSLjN1UnH8cHqwGX2xRL2uMvv6W8BX6tdYVD2rkiKbKqPEjtet75NF7E5G5PspYh",
  "key20": "v2VsWBeTXfFiy2VpNuidJsfNKWANADW2J55YzhFx7UZ792vZfrr9jfGuTbsQxqc8wkvnKfG4uKUY6iot8JBPhZx",
  "key21": "nw8u2VoHL8bxxkeYGTVmuhwCxJjDJuBDetiP3mNE3N8NssPMD5sLH8DmvMcMLpFWTdPJ66ouLToDfoorSytQteQ",
  "key22": "5NwxbpERZWtTJafvzx1XFqmexFRnqT2nzVPaCtz4eMGHDDpaAkQpjcS1o9JjaN2vjsMLgNJfhWGovPj1W7dXfp2N",
  "key23": "4kqSEnpUBV2TV8LJECqCaHTxEXQjjyDZz6mtuM3zBVdSMyuHYjxCYEdKCuZtoENKYYnoKBL6c2Q2E55yBJUqr8ZM",
  "key24": "3227S7ppSa3hCoGBVz1oNaAnkB5ybZ43CpRmhjJ4pjbd4gZpbFHvimFnkRE6iM2Xqswho9s6LAHUuCTdZZRvC93A",
  "key25": "nVMnovmdkRy5RAkmToGH3ChDbBNhxacHyAbYyyFfSENxrCxX8mbCu2Heopc1HHRsSEmH2P6diGGXRFUoHphKx72",
  "key26": "24hiHkTrA6LZpk6RADuqrp1RHjthMjbDCUbR8HAPAqv6YwmWgirLdWriDNktjF9fQmmY93DnF5YYN8vmYtk1YMRb",
  "key27": "kxyump1wAs9JH88zAYXZ8atha9KPpK4Qe6AaWpcxG7SBXqeNcpBWUdMetQPKboUExteedca4JKLVtdkmVM36GTd",
  "key28": "2WW6nSmuEcWFvQLLBH2GQAcJpN1THSwdjDmz2BkZFLJjnVbkFBD3j7aBfG7ATzyeU8f8Yqaszh68R7bVuj5KyyhP",
  "key29": "62DybEexYZRvVXeMRJtR4cF6GrKmiCKo5bNqnXXvmd85muYYyH4sabBhvdsYwmyuotTLsAk2eHpQfb9dChr4RTyn",
  "key30": "dSnXjbNbqnzsEZY1gysGQPfcW7UouopJAmo2FcH3Z7mw76qnJHfsj7NcYaVm5fYYZe1yEoKTp7vEXWYRt4TmxSy",
  "key31": "BpT132sPxLvyzaFzFUNQ42DwNGgq9SAWuad5GzoTNqF5WQNsJu2HG9mnQb7C3uYo2wtpY3SViuJBknVzTDhC9SH",
  "key32": "5rMqbcPyzJEnpvP8ZbMFKMpBVbSYqv4xDQM7zUkENWmcmL52Vg2ZRaSEHX2x5HYBWGpacj7Ru1SjCTiopqEtvmyR",
  "key33": "4Pfe1Ss1cuayKeQktDEH8gcSNv6cQMBwMqSNBGfEPxUZwR3S2Qsr1XkG9BY6gBpTB9LYyWFjDzZJAVcfET73butn",
  "key34": "4xgiaNTpkDJJzP2jim494NzzamCoU5jJHwVKpHk6n6dhxuM1ufKH5E3mUE7DQB25mNosiZBB8g7scmVE6CMxmRdg",
  "key35": "3oY74NfVv5N3cnccVzzyRBkseUdadFbpt29URJNmvjC7KQC9MmxdWnuNd3wDVbmRxLHB8icMSyt3tDmKMqoReYaV",
  "key36": "NXPL7t77pj67TrBY4wCDmkvfN2KPTXv3u3VsEMAHvYsSmzZCY9iHHDhbvy2skzPdjHDLV3jce2UqZntyBCaMT8j",
  "key37": "3DKP8Zxf9hAR1gJSx9GKhRPFSaQkSCYSceAMCFKQFg3DJwUZE76a6En4mjyo8Eiy3vw1JFmobgdAgF2JK9bJfswA",
  "key38": "4r2iBUc71VwMALECiYvryTWWQrm7AGhr4N7FZDLaieMFq8FEGLLoRS4DJGWfygmAo8wy61rqwzYdeVFJ6yzJtdWb",
  "key39": "3eRyMP88AwjbivVTKTfJcUHCAEsSwfNn934RAEjoyvrN33HZPX9FNGt42sjusVeMnFCPwhDY1ZGEBLD3rmakUvUg",
  "key40": "4PbxZ2hVi6zqqERd2rYESN6wwumupWcM6giZp8KATQTiRDceEDxBjVahHE2VjzYQFVdQPZvdYPwQN2Pm4F7QDvC9",
  "key41": "5fpxs1z8XHPeFFu26RYQF6JrshViFhwwaCmxJJZoHJP8zdWQ2YCdnkuJbdG1iQqdup2MpgSc1rsmgzhmfhSxvesT",
  "key42": "41rrhrRznAEXMGxnUAf28rZi4mTXbKRgbLk5mwzEufRTuo9K5B89uPrrt6WFXWyASZHTuNFRtivTdqcPvWALGUWJ",
  "key43": "26ExqSaF7LqM7h1hqt8NAFfSwXnjy7xos2qXwRCMEVnU8AH8Asqosm2CY9B7D5ft8N8LYT8y8U4E9M9bjSTR6iDA",
  "key44": "2a5W78Lgo8ayJ6TeiH272JLcK4BYPqJUAqcKnndvoaQsuAm5g5cx1FiYaeHj33toJsgEDRjevmncPK7YPpcBannn",
  "key45": "Uu3b1A9zCdU8XHgZLKsquCeVFi5zFFajUDr1k4K7fNjyjSP2cgkVsigJSaeBq7HKXkXD4kM17wfkybkoTyMriUy",
  "key46": "y8PoRCDhsZ5LZdozuW4vo97sGeLbep5pbh9shYcJGQNw5KLTzpsCG15kLS81wAT6J7S2tdxccfjksyYMw557gvE",
  "key47": "4DrR2WwSvhBdSZU2pirRzsQ4vQaK5bnu8xkie3Tv3ZrDyhHEANEjMe99TqofSWvQaQnnNsQDdPTTm819X3ScM2RV",
  "key48": "tJ2ornhcP8rQMTNsVdjAKm71c1Qn3Zokmg2ALM2H3w8FVnTuFoA7oDAvMWG92aSGF2G3EAM2z4rPo5cagoa74yK"
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
