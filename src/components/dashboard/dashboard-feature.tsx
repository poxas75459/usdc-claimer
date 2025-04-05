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
    "LmRKiXks2VH2pbYYp3KQBAYvFSwT78yBECQWcBiojSndHwWmnL1kB1oRJ1s7E3FYroezu5zzwpb3mFGAwG721X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dUGKeNqyYFgQaHUwPPSyxNnD3au3eakgXF5EJYVJ6UPw9siyB6BDgmrEPU1tRa9WA9ay8GAFHmrf6MfXjrGF1R",
  "key1": "2R9wM8zw6DCgTfjGKCKLc7mSmVcicEMoQqRV2g6Z3eokaHZWSGH1s1nTM5kPe6b3utPzrTarsq6tpaFtojsCvJXV",
  "key2": "4H2eknf8VrKcnQM6o7RhTMBJZmnij8z8D5Mtvw7SGtyBnWDcvhpWWtfeZtpKcnAcEjUm6SuE5j6ueiLQb1bQQpue",
  "key3": "4HcZtdu6vVKxFGfwHi2yYjYj94Nw7aNbX3R21HyBWHmHeBH9vo1QMn8S7i8pwRv15ryW8B9Pn48edrkSeyMYcx1F",
  "key4": "5HbFPEW61ZN8FJ1rnLd3zNeDWTLypVSEyKmQtbq2uVFVyKpWRasfU18AVEZYsaNRg7NL3TJENmF2U4jrDyNzPxbx",
  "key5": "5vpfYq4vPGRmENisjcpvXxtXU4XsiM9dwPazb2A4EbRBmLYcW1rsrmwmkdn8pw3JiZ9LW8u1XQVnAPPbeWGPhr15",
  "key6": "2HW9MCnFnGFa33D1WfX4WDE1zUpmmBNDdgQwREVwkWVYGR48ioaRNgDz878P4AgxCrCkLcvaCBrvsZBWV5F12n8L",
  "key7": "4Nw4e4tahBsLuqvEXzrjnD4HdWxv745dD2RLaRnXERt1nWdZun4hUBNgN6qeVGwJwfPAiq9unFGA3AEr9fZ33tyP",
  "key8": "3qBmmc49a4i77bsHv4QAcML8VyywnkBLGbmdGWrH2TkQmPpDxfhcLFHWgC9oqUaHFYw5TMnNksE6g8BrkfX6qqrX",
  "key9": "2d7m9hNR9ZajMnz3YjGK8Vv6uWHbEtoZNpbnnAMSsMCDJx4vqVLevy3Zri2dD5s57SxqNNP51g3Y3to8rJgsNd7R",
  "key10": "5NVbkxKSzEYSgcHmWEywmbSjV6V1f54xTYqgbB8M3hQ2WvYeSDd7BJRmLPrBMf1BYTktwM8A3myn2FQFHBsmFfSi",
  "key11": "54du1wDTA6MWQCHXVgyAS34RkQFw3Yd26oSPVEk1ShfDsJcfJ1CdAZFgPRfnTEyj8MXKGDvNrcEQnJeVXjjMcDhh",
  "key12": "4GKGCdpna3tpBMtdVGhRmZkncCKmt1eUNRFsP22d6R1FWEe2TuaBiPWkpte3S4udd2M6HNyHugnh9vrDZjAWJebp",
  "key13": "EM9K1LEj4vkxSDJ8D8EuaHQLgMWJFxcenh489D2yrnbnY6zeArACViKV1jgA1Kbu1TmpCykCKTDdc7i5KaAEggz",
  "key14": "3AGRPAdysCmY9AbR7arh6oHpifPHB1SfJtqzQBwHKbtcXqR8o5GDn1UBqz5E7x3F9R45EUVw1k9f5sPYVzMm7Dzo",
  "key15": "5YGpq7sNgC7Gkt4N91Ru8KXGJ8gzBCEBdCQgVxmebmQdqbND8hQv4UeiX1TzKCyAmLezuWprtpEMiYZ6Msj8py4R",
  "key16": "PsutNrBQfU2brGxKSTSKVfNFDbPx52ReT2RDJNkyitXPWc8dsDv93RPrJsMkgo75p8PnqWAMJnEUHUZapvURhiK",
  "key17": "4Tgbq8vgABprPokoQdsjXj4NWsbeNPA4rjNaJ69LYyM2LjpayXuXeEkUFn44ZKdtXv6s6WrzdTYKrtpFhxorPnc8",
  "key18": "3fKhn4pakFMSFngmZ1cDkJPnBmnwaJANw348A4JZ3qSL6g9EDedcJd9jpuxf1o59KvmV4N2bXsoZUo896dmcGm3H",
  "key19": "2RLaUceiM9carnhMJwKZoyaZjFt6jsdgk6adQsdPX2sVWFYP3ypheBgotki31X4Ym2egUjT4RpJKMx9NrpoWcWGY",
  "key20": "4kF956eXgNnNK31uMmyZyca62Qd3LQUmJo8wxGdx6oktkqFo3hiUddzUSJHotQfEQ3ndaYmWzuSNLkVXQjh54whT",
  "key21": "4SNDa185jrW8FHpkWZoREg7stUPrixxAKryfUTRy7TRgaCG6bmVCNbgJshzVQWxyn45ScNgMrE5JmZxxN2sYvxsj",
  "key22": "ouscubabDvs3Zg1KBftsHEQyicfDV9qwSjQzkSV7hij1aK4TEuwnhknHLfg7zzqriq9W2qmBvfZxg1AYbgErv5m",
  "key23": "2GDvJyVD9iiv8rtjYMaboVriT1zqcjfdNa8NGnosCbpaE3YsoYtnNyYGzHCYyqAfdnWDmebgu6pfGb4jRNgNJDFx",
  "key24": "3GrX4HGaNTRDf9X5qY1dppunfhwZVwo4tkamySG4gnhV5mERzAXzP9AGLgUwzbZTSnrUnNM3uWiqHARsfje6XJvs",
  "key25": "5mqVKpstEpC5YXxvXNKQUysDE67tJDCvSxebaxZnbtcMbPjVYPK5Hf7o9dFGntEVATkFtNUv7Go2y3sEfkAQVaS",
  "key26": "4YWN3BYJggNeLMYheLAq171yERkorpUpTJw6mg9oCDaPKj24jfyPGCtg7Ts8gvbRq1KMPtvig2yJNu8CMHn4QBS6",
  "key27": "5KJzLQtcbrxhL1Qgjc9G6oHcqPXneii8kHZ73yA33KZwEys55zYSgurCrHBqDrHUXP62u4TEP5heiFr48fS5oMhb",
  "key28": "3394dA5PgwQJq8WV5HhGGi61uVys9o1q3P2QnR7KEcZQDurMDqkZbVoTUmxVsYgtpQcb3NbUg7v9VRQEhdqzUakT",
  "key29": "AybTxibDxqXPiXJepzFJ1CseExLVqyoTuXXe6PTb1eEr3bsgPvFuaccjYZzNzNbFtc6YK1bXUhKCx5B9pM2a66m",
  "key30": "28qVwSix8GRtEUn5cYBMP9sTkEC1Lt9ogvPodLLQHi9XTW829dSykpkoPV8EXx39xA5WM1baRwnAycqcVvDKHzAd",
  "key31": "5uLuf3qMPeHnZhM11PnzBFLU98bHGnj4wueg5fpjPj7rst7dbMyJ9DvVacKN3t9Tv4iy3mHpnngu9192DpmnexEj",
  "key32": "3CMd1Vppdra2i2G1doMeCQ9v1AS4B1Rm1eMudfAg4cm3kgrEPNrG9xYWKp7ZQsCQRf3tto7ExsS4BUym6RxsAsHr",
  "key33": "2mapurU6hi3PZ3dTeey72qW88Uz7mdmsHWWg9CF7NsK13mgdgVV1xkH2XyqjNb6WGegvuVr3URA1v77jeaco86uf",
  "key34": "5GgXUeHdHjLi9V1PwQjCmSiJu9AjDLdFxDgc4EqgKsi5nYSdmQMS4Jb1A7FBCJPsASbj4adSrS6S44YT8tgUdtwW",
  "key35": "9p4bbPn2LFRbJnf6z4BWU4uv6c7nPxC1chpeVmoPG1YdPAEGQpZKDeNHyM3ZA3bK5eiEGQZDMYg3oY6gHbpXELw",
  "key36": "42YioCtCqnM9CozMe8wkXj1c17AkXVfAT3QXCauWMrRf8afpDoVYSGgGLsEdw6ED5bendLokqQFXvUWM8ra3gcTF",
  "key37": "5KKWFHi6uQEAm5ER5ZrLs1uNrDUiqhEnqv7M4kM4uon5LfsRhDsHxtvoRrhi2eC45SAHfFASeNmbQDvBv2HvdLZu",
  "key38": "4MShbaE4thupFpKkbp8xxdKxaxDnaDxUGGDCH4DfdTgz3PFEFZaJnAZx3rBswjv9wNUUwb4d6oi1v7GnuncxFYVV",
  "key39": "5EhhSMnYtJq5oUMxDT9HhyKTevBmXLgVtHesDc4hGSbG3UjajxY3T7RxKZrD6TErF9UzvVjH8VdRSKfAhFDFYZBS",
  "key40": "2BaU2bE7ysRQnviSVQuHCt4MHXjrLqZZvKbEagh6XZ4DGNSChB8fPDjboiMe8VyTe4g4AmxyKvBTeKgEfHiJgvqe"
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
