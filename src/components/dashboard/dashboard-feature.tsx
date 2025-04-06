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
    "4vhpsTpS953EwPrJjphnNFaC9L22VVqJoPKWhHL6QBjTBRicZmRf5wnrSKA5HFm52m7sVvpvcnSVXzMFfPPeahkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vGrQdrGLvpHiB4HvSK9QLdMPKTySzUncmj4Mmah2s2woqcKggjACZmZixcxBdCccSjSpqX6gsKL6mNxVkYiFcg",
  "key1": "4yECcKrSGoDFQ7Jk78exCS8wGyxG5mj9WqJd8fkKn67aFBMfXgUvHTd2uuGFaTtDP94gZgLidS34JFzqnewjRqVM",
  "key2": "JzGUfg1fSnnqCv8oX2aDhNsxFLporAGHetYLCiZHthX8s9qtqGLhjUC4npadNiDFT6tKzzMQ3furZyCY1ahoiua",
  "key3": "hS6FnuMXDx2tdquxU2UEC2EgNPGdxB9RwxTbut9ougJ5g8ZxjrbLNFY6fWMvtFq71zUwx1tt4nXn4gGeHMXcLc4",
  "key4": "5maHknAGUMsf84a5DDh2nTri8MSorKG5eteqqfb27wL7padhAWEvmQDVAagRLYrTAjprY9VNc5hMEBnbGFk8mnD6",
  "key5": "3JoA5AJdmzzMp9a9xjkoAx2yQkW86waqQ5vxsrSbJKRHa5ijvF5LTM3eUFwh2YGHEEQRSNH99UMJS5ywQd8pQ3JK",
  "key6": "2kXRCpUCtx51TSL1ftjRyyPKYiKA3PAijRiBiszWx5CEhqKsQsMTyE7xAx4FVhMEhXJMGAquYaxc76URCmMXN5WW",
  "key7": "44bnDrJDZuvixoVzpC3azUmM9mRKKjru9YaE8zYJpCDeH2txhosAzo5ah1K4qdFf7TM6S7GSB97BbRiRqbgsVnbR",
  "key8": "5f6WHrHJXDP5tEGTnLBMLSSGACiFxQmc8DFfeQawM5g5L7hg5y7gXQzJPfPNthemgiQ78GNhQ22o18H19fbAZf8e",
  "key9": "24KiMQnSD4HM9CoczsFUn7DT7zXQ5gVrkfyQkrpucpQxFFZ4zUxMcfLBLNRW4NKMwxFmw1ya6oVB2eeTpxzRcF8R",
  "key10": "35ZytypPwwojxm729RCeyTvAjaYTeaxM6xn6kVUkUzn3nTK5QE4jRFjDu8zAAcHR1iDRkk8cprmares8k3GZQ6KN",
  "key11": "4trjdhwEFkz5tBJBqaWTU4iuiLhgYgpCwJnRBeeVAwZqM8844Wgcv9oXEVpFzkTwRYVs1ouUHFLZE3D8yGyXNDwi",
  "key12": "gdyowBFHmbeiXjs1Tm8MzjWef9URLoqxWwC7oEoheYTdir2rCUWHiiq4XD8zo6N2pKRPENmHLNGVm9YsAL4XcNu",
  "key13": "4jdryYrwRiZMeZoRkUHNDbmucbETHngDdxoz7Zrr3e3xTYrhScJpKApRik6tBg6ZaoriFZJoy9GoyvL92qNJcvwG",
  "key14": "3QYRDxG5UuArgtC16mNNyXp7iWLKwmCC42WuxYaPSq7ADa29RbWstResSgK68t2cmxQ8mEunvmAkEgFA5XsgHBT5",
  "key15": "4QMmxrmPZ3dfCdLLLVFrFpgXyjrrGz64AYJEG6bCpXH7yFRYZomFp6kAuxJrHWTng8Rb1fYLf7x3DnDB54vg7Bce",
  "key16": "4p3RV5Fs9Fw2dCs5vsbwdeN7UEM1P1he8iSdcrbZfpDJD1WWe4SFBXyNopSLJWB6fhmgruyZmZZgwtmZkSv7P6mu",
  "key17": "3Qbh8jctuivjBjY8FZgYKLwMqffvMkPUt9Tq7d3NdHRkUUnUEM2wKBkXtMBfvayBeYf3YBE6wJXuZ7R1L9MT57Tk",
  "key18": "236bJwNp2JF8u3ipsFJFM1XLUp6x9hJwFE5jN2KyRxAH7Svxov6h3fykePcHCRNoh4CAXyDDrh5FW8WFMGEB53Da",
  "key19": "5bHqpkV2ixrFTxPsEP1fzNExFCdWS9ydH8U7Fb5S8y5eufQzhdrNv13ANJX9f8TDGWxobjc7UYyJ7nj2fwUCVeTJ",
  "key20": "k9WGFissbwfnMoJyn3z9w54AKQwVYYqdeh89AQeC4GmwTNRKTuDMw4ck4ia2vrceMGWNhyzdi5SSt1SW2oVn65y",
  "key21": "279DeqhkiwprXbcrCECWSmFHjbNJ2huiBZ3R3nBPMAvP4LntAzf6RpuKkEj6SiGAoH5hERCuicxU8zchj2LTS9Js",
  "key22": "31TNjAaTFQQYbw3rAbAYTSWTCPESHn3QkYiiRt1CLYcbbsEAuesPTUvuGyXQwcSPqm2XqvSTz8rCzKSq5K5gv8qE",
  "key23": "2pv9UD2Dh6T8Z9A6JShQR3j3BuJFVGt44BCeJ4ZiNTQb3bdNfdnTTdDpAcbv2chVDptEDkrJBrKVVUxYij7k4S86",
  "key24": "2Jy4pYoRjJtvBuG7ovdpv6L3cfb3waE8uatXGR79PrNWEkU4VFoQZEny4hoasunp8whgJ1jW3cpWtmgtki4EeG4S",
  "key25": "32Au2W6D9Q1mVKkYSXogsSfPcFYUhD94uWR6QvEGLnc1STrcdFiFUnETyxULmrBPWVpJpr1nWirnypLHaWo6TDaw",
  "key26": "3g86ryrRLPLsjEzB6HTbxDg2uwwdobGUCeeEKVUyCs1biR26WiGB4iMSo8GbJvi2mPfRJt83kFqa8fTfvtBzamYQ",
  "key27": "4t47QGKjiWhWKVLv4sGLcpxhKhEn9Kt85UnjKzQ19DVktdejoJkv6ym1LkJmJPinV1iKNngFU4BiiErio9zxXGGh",
  "key28": "4eKHtfztBD2654AX4G6MJr9c1LBWGbZUs7GRzQ3MT4qsjcf6QmdxAYfBENDgBZD7UPzbyTSa17aywRNcLf5UNapq",
  "key29": "6165G2zeMF38j2z7WqqqAsUpY3KxckwV831RUBsAND6ZEWk8E5CJ1wndraQJ5umEfAxaZM6wsuyVHVKFCGQknu3b",
  "key30": "2ZG7m8L8hhkkQ1i5z1gDPdJQumw6vbDP7MtHzTgMBovrZF516vdhbgo5aorAVFF4aPmzUzSpFGUZ37Nop3WRHfVA",
  "key31": "58Z5h7mE7nKgDhdR5fYi9YS8sa6Yk9ZXokVzEdzYESbVJZ7YVp7i67ZFXPGiChCrXeCDcxtgVtNUVJtQHRTKnZQ4",
  "key32": "5rgNVruhJpehwYu4Yye2WxdkSh5GvpAoDKHyGgCVTmYXUntoH3DGmi6Egsnh3nm5nss21ctR1xyqeYv4ig9obHkS",
  "key33": "QVB3WaGF98Nx4AUE7A7bxpGSybMTWd3naKWLhQ8os47nkZvQeFoRtHRjZQN2m9chFHwX1SWVwtJbGFr5rpCxciJ",
  "key34": "4PspqCdau5DAP2dS1RH5BATzX1ZgdxZscdB3SiPxmvJiRMYaRFjxRoqojGzvVnjv9FTt1anU8GCQqjLNkeT9yzmW",
  "key35": "25u3PAAAYNw8Agybss4NbjdRcyjbcgkGrAqpdL41eUPNvrd22xYBNFWU5fQBJWJkLg61EndapcAZNenC2EjkjybH",
  "key36": "61g1VA9KyGgACNtfmVjJzwaVcuRDQQR4w27dNEi8khLcrSMq5EuXu8fFVXxHENKqTQakDhJLmAnis8caWh65L6ms",
  "key37": "52r4yBAEWgpxvUg8gyBNpFCcX4q45P9vBqq44nci3CeK3JydboFYVYJA6qgJzf215F1J9NQX7YVnXnAowrNV4uqY",
  "key38": "2RxMGyjSo6nJkc71eF1J7tQrs5111GPrfAWRwnF9zsbJr3Z8RxojbkJWAEA74QxbJWaarHKmhkDHXLaCBz4uHMvN",
  "key39": "34i5acD8to9ur4VWgEhhSkMe6deHAWPc7EW6ENpHZbU2zK1G3878Dk727H7CyDxc7EPS1t4qpkymwJZazVzw1hnc",
  "key40": "2dbANtdhkUk8KunNhLDVaKgp6WLpFFfN27i6FugCkA7vHqNx4kBiNxaWWFWYqugLUMSgoSPjX3s7WFycuAwR4kts"
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
