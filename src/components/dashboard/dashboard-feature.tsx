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
    "3bKpAWDNEBpMtJpZjYY7GF5r8eRFyo3wSs4sPV9guQYcyjbQe1i4mLyEmHDM7WtZrCQcdA9GRfLeSs8Ep5V2K9Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nrvkct8wbox1eUvUPvb8hriBTWQkjwMYsdDYqJC7AjVXf26Pjfywo7UGrujqAJyyrkLq4VRuTq7BE5qtNvdLut",
  "key1": "2cUqx8hbNxBbCNhWXZpsWcbKFUFMegabVyNzo9xvd4VBeaNQ6dKnDb2vzDUUfG8oGw3RrD3XoeBNfchrTwSEfHHT",
  "key2": "VF1bYYWQKjWLtX4yytt32GzALAWFsiWu2AZX874gBuWrpy1nvorLFroFa6Q5Tx7FQfvv1GuqCpWZJQnwrN7A1Bz",
  "key3": "661kUm8JT3WUfnLFospYkHyRrJ1UsayCHqVJVjeQ4wFsjBuYBf8R3RrWcrRcKreBX4MB7QHZT1wNCMLPC1EnpwAU",
  "key4": "4ZcvAnSb8tfZZzH3hkXV1NDPp21WshSFfexm481VNMJ6AY1heR729TFqizhyMJsufaksoababVPgjTPHCqRpsMbg",
  "key5": "615XpNjq76U3yd6Lo7hvTYEX127TaScHGNhVdZpnmyfbpuoLeXABXrhbGXUb1QdVnoBqzdLyGR3NWdAt85q7KxSp",
  "key6": "VPF64p6yhoH6GdDR5KW3QRE9uJ76amEihsTFNgXz4o9o5S4kmbYf9Zt4B2qbddbXBzi4C6HCvhaaGwZQtQkYTN1",
  "key7": "5DNhPaukqTz4Pp9hV5SWjSjk8H45kKu8jhDprewKSzrxr1uEyvdpL8NALZMq35U4K3kkE3KpBLLBzzVZx7VNvnwN",
  "key8": "4EsEywoHFRXHupG8J6F422AMpetPxXtRaq27d4ZfB9s68rWpibpiuHPTSHjFVSNdMbDiTPJ8dawm3LA4bKHbDoTj",
  "key9": "sGoxsVaGdDqN4BXjvq85ecBfEi6CJXK6o73iQeEn3Cq95f8AkMMnjHtMCf7LBeDtiFjMdG239mm6njyWfEbtufn",
  "key10": "5mtEjq6WP9d3wska7EX1u5oiNz1rBSGQaN3m9o5ndD41bYMizb7NqLvCrpjBHRedSx8eKdP3UbtK5GQ5o88TJXj3",
  "key11": "3oh6gt3EjmA8yGbSPeJFhRnkEdAbQw5z7mZMXv61xvB48KfVFMTd56tgB6N7pV6mueaHnaofVabbNGugH46cnmEY",
  "key12": "475aCYarCLfgkSzQqTuzs5PyDdanEi6opxoeGWmLisJMhtQm2apS56oJFnCSdfEnikJy2MnrubqnhNZyHNimPa8S",
  "key13": "5XawzMVgSauX8b1hcPh9VyeM3wAS2S5pA2p85BXdZZcUE8iZNBJHfPKf6WYn41toZb8AwuZG9FyRQQDTa57gdht5",
  "key14": "4uzBLmHFtKrVDKbe3CQQQrz4ZfQ9YKtqQNGupHEnYrhugfiv2onJcpzMnomGBpRNpz47QkViHtRJ5JSXLnWgfNcJ",
  "key15": "3CjQgTXUV7xQmu1KVVLPzPdGV7LSv5VfLAf1yW9M46FLJccsSMdWaEyMUqtzmZZprhXZB9mwLBDHTeKLUCLVTwz2",
  "key16": "4s5Xc8vjcHzYnaeeWQuLJmeJqHmJqNja4LiY9x7DjvDmi4eMuXBbwEvmK2Ky2nU12owV1vWBDHgK1M6UgRm3gM9c",
  "key17": "tD8Ddjoxc9tSv6ceWACHbhZXqZDvFbphWopjgCVTbnqvxQr72eiHcTrxTprZxb5ex1cyqTw65murR47pUAaN52t",
  "key18": "3XfdJbvW3FfiQ7X1DWPBJjGetb89PrmBYx7CFYhYJLLUxcmKJvP52Z2Cue24veocXQiD6jbEQEQSfjZEbiQRhiix",
  "key19": "4QcyG4fUwVLTeqdMF1sC3hZf4s41HzsGrLm3uxxZvk73i9M3aRk45LUEC3QLnYdRLj46T43HhiEZ7b8EJ8Tv2Fkh",
  "key20": "5bhaQpGrrsvdTAyY8iPgw2Tc5NvtpBzgB3wuAEVioRmXY2zPcG4RbGXkmxCQ1hQyuVFJVNcNbkFaAjij2GGrfmr4",
  "key21": "5nD2cdQ7FYDW2xoRZ6H2uCU1BGaXocdWNLzJDB2KJfPEuFiqtBuZgVwAexvqgGougp4rBcppXotXgYarZk12RALP",
  "key22": "3QQnnUR1GDYRBCsKjEoqwwoXcE4XudW7jYKuJUXv2oV4n5zTU4feFNbKZffEXjJvLQH7FHF2PcMwWpMRFp2i1wpB",
  "key23": "56stGEeJh859166ecEWREABTamvXLVZ3PNT8DgPLMhms6hXkwWu92Ui1ABZ4Xon8ySvY9K9MZLJoaq8LNjCXWs9D",
  "key24": "5NGwx9iLvzovC9daRbc4Y96bpQEBRVou5AqkfwydEMPifukP6SWyyMQ8ppdn5Stti4oTjQXksVAz2NbdbuERrJWs",
  "key25": "65M4JNFQnDpxNoMEnbkrCBvgCmf1GrgNTKsuTpgWA1bok95CnR7DyBmsXwh2DpwBr2KPDyFwWJXgCVHWtpGgC5JY",
  "key26": "4G521KgnJbDxvacbqr7bRKhUno62YRRp7KCwHzYVJTBFULjTMqCqG4czh4BaQynXpnS9fa2omFbY4nGuWuynB8yR",
  "key27": "2RGH2mx9LNfuZGNBYKJWXfgQk2qhMZg2HWaDkpWT7p3onntFpFAWWhetTfoaAtft8f47sWuPPnWvPUicy3YrBVAx",
  "key28": "3dtp5nVb2hgNWxgstDgnmDpRzwSeBd8PmU8E3x3DityEZw5VsM9QQ5cj5AhsMGqevVvfDxjew3LamiJ6BU4AamwR",
  "key29": "o6jknnX6yHxei1jMCd8SFXWmYaUDcB84UN1g8aYqkUaBH7XEy27HeEYtywAdAoSRw9J4Rbux4ZnpRme7LT16FoN",
  "key30": "4x2bw3soX8uu22jd3SSUXTjhjXg6eiuFqbgdp2wkqsW6WyGW4JqBwyEq2Etd6Sr6Wz2WjvzaDbGYuqWAiBqkfzeM",
  "key31": "2UTVZo4pjggcmwBfhzQkBWC5TaXwt1Vs39Xy8LkXTSUsx2dQAFfpgrsimxnvetL11gFZeZPbrufsRaYxoqxvwrde",
  "key32": "4i6BR3K31uZaUyz4qmGuyT5RhwoPvdxr3Pm9RFMzEKsKPWnHG2Vw8q8wXuNPWstn6c6MC3f1zEqfhW6FpVDuRw4d",
  "key33": "4KJnouzV3UqJivMLsXESsE2yDpehuX4Py9ZXC11af3Cu27N52uRWmoJang3ZuYHwMqKy6ppFT5SQLhp2SxYCeoTi",
  "key34": "4qY5YZf8rjQAXokWYTSMNHRSzkFC8udmxpx889qXAfQ85aAW7xva497wLwAR5QFvBu1L3NYJbmhYUfCebiTzHAHB",
  "key35": "1gSQyQagpw3Nv7CpphhRpvSyJpYtQmhWjhLkfoyk9yDag8JuhqBAUxuWSNqjfCv3WwYdA7eQLRFfa8aeMq3n2AP",
  "key36": "4TdPm8xawznhkU1QEPBRSHpGh4RHEcAmhkTFNT1JsRDYnArqoRwfcvjfaLeViY9SKrvUmVA3WueRjWsWun39rbkB",
  "key37": "5BR2fkKaYwy9S4iHV2C9dMgxJJUinera86G7G2L9VehU3wdLue1tjtCKLL5bvmcGKyaXsYXAgzP8jU5x1Xq8dTxy",
  "key38": "38GhHMRzRYLFrcYJ3k2VJPDQWmVC4N4QxdTy1bcJrhuZzemJbEexqLEoGoX3wLqF4RAW2oYj3nmriAvznP41YCWF",
  "key39": "5SvdRgt28VG67CGdncp4cYEpft3dku3R7Xg12D67P1Es2cJU8QjZqj1B7YdDh2jiR6ACBoWU7hDDe5N53CRZc8Kh",
  "key40": "46i776V6r9Yfx5m2pLykkT7y9BECh38t7LLk66E8Vb8DBM6SaZPufSysTuTtu7hFSCx4Qf5zPU9Tx7cfrQnvjkmh",
  "key41": "4NXCoWhhBXsRKNvU3iBrJqdYKA5D8Cy7b875Y9xgkTQ8WzkQqTbYc6DnPPbtXv7ArqQKNXPEzRyD1kSPfh5HuG9v",
  "key42": "62eL5dk29tzYPpmjkWSV1tvfGPzhdKfG2DGijaBY9QfLhadYFSvnVttKBupt596FAyGDfryaHLiYgwniz5Q2yGoS",
  "key43": "2DRyA7Bz2iDYdJx6D6jGkGsihbypuEEcUzxTUWxtVAgXwALqjYgZFmkzq4Anj67FWkrn1sqR48PdSvQModXhQMMJ",
  "key44": "5dEt4HxsdfuSek3P1Xzzr8upjZh3rax1urvAmGsXGAEWorT57RSyi2ZTjdWwP9Sog9vxVXjHn56RXEi71U2QL1fi",
  "key45": "2RXwn76o6FagWqWDPjuzRP2fniu4iUA3ni7iaj83k3MHJ7UXEEfsZua2QbafvY5sos5gFsHva1LHxFWDwQjBW1A4"
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
