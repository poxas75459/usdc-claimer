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
    "5jDsEW5FcvfsnYDNrsQd6soUSUzZAyGCQmszvzGUajVCLV2SMkiAkPNfaqPxm2pvEk9enDYkoGuVnkpTewdPGGV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uobCHrha145zEdDrZ9HzFHUjV2wTnqY1XtFGqVouWHAS8LNgyVcY8CPyoHbhsdUvBS4BbyAQUY1oqPq4WuDs2Tv",
  "key1": "5yuyoH76Nw5GwTEfgtvF6TGFc1KRHEiCGWCmLRMX1JKnBFv6ehd6X58AyacQniwkNZ6JH6ug6GMGcTbQ64NedGSU",
  "key2": "2iohmJWKqZy8ff35bHFiguYyrrnJD1ZRhxZhtGaw2w7EcKBxfD3rcAKjXhowXGR8Fwoi3V2CzQk1VdCe3Em2m5AX",
  "key3": "3AP8x7Uh5wcZngzUjsFbCF9ixRVKyAoBVDFRqBK3A25Vi5T2bRc9TstdgFnbuAkK5CR6peK9DkyoWbpia55wm5bH",
  "key4": "7R1Qqc4SuZuyCzTeBKhbeJur2dv3bD3JXC6smeBkRpcgDYWEGr8CHcPpfDhpPFE6zh859ABnM8zisPe6eypLTnY",
  "key5": "3Lvq3fSL3iT94aKRU55uzjXiQz3WjB312UAAoz3ZeX8SHeM8e7VAdQ5utivWJo4SEouF5TniUXsXFYeyUvYU7d1j",
  "key6": "cTHvbj6ZqJUxpXJhvexD6n315EP8d9uNFPh36rpMoZFtFZyz7s4XjaTgsszxE3DxYHrPAYkUtabmkv8Gz5pMdiF",
  "key7": "2E9APc7B2M4QUHK3VVXSfsofJzVgg54tkvjkqBDvgsdiwkwyKZM9cbTDjJqy6dGFC7rC9TkdpYEwfpzaqfN1ZmNt",
  "key8": "4mwhsjxy5N3KcUbSZwGya3kCDcbFXzMPz1Yze6TwoDd5yLem4uRUdDSmme2CYptXqFFrbTgSwjQxKPYPQrTMR7QX",
  "key9": "kVrtxv22pRqchAYLKX7dtAB8rajtsFbAvAtrCLQGEYr4JeSR3bABbqQaYenDYPjy7sdQReAoD1Jg3Vm47jqQt9U",
  "key10": "2F8yoLTgFmu1gC4XR88LY6UzxXiC7jZj4FsVrioYDggN74wYJRo7EEiusdkcbHtWozzE4gDkjxQTkPcqZJK8C4B",
  "key11": "2qDguhsoeNbwUMmNmhnys7jQomcpfGqA5Sdzxyz5BFxvpFQ6TcWg11SoFkh4Kwoc3zS6WjLsEwkFiU2bEoigaUwS",
  "key12": "62GKKXChBFNtwKWAH5GD51rpPCBWKYwsGHzJGj6XzgpEN5TjLeR1gk2psHpycYtKo1F4MMbGPENSPJuRLxcRet9H",
  "key13": "43pJLu5ajConuuyBvU2bhPKVVe9hSWd6FMB2NGGKvsyT3eUURdStTSTT4MZSSYphtpuBgUaN3miHqBo1kR1M3Jjg",
  "key14": "4QoRXiaWDbSDX7E4YhfSNrCsF71TAgABuNhJLWtag5DCJq4yadtaLuXvcF1cyoLGchb86U6xSwcCA6VQicSk7qMH",
  "key15": "2CzkH7sBbr3Hfg168TVnuvaH4kFrsqQhdtrEYuxpTqQUAweDHftPeU1Vr5jd6XCeKoNPbLYWDqkDYQMrGaFDjPQ",
  "key16": "3zy6dqaPy21juqJyxdxjeDuQs1yMwQtJuLcxZAVYugonym2TqupnyAzfhNap4P9zvp18EMLemfcK3WdQym8mKY7",
  "key17": "4W4eeWikLopuUALKN2EhJbDosmjYsuDmUgYfsP2yyWH4kfxg2nUvCzhLj6vzZcsAsDw3Dpr3g7vxJKxqMLf4WT52",
  "key18": "4bmXDtjtHDAGSyyichhjP2TiJsFLz2uzYFtB4QtdyppFQUj4mbQaH1RdHCHMGCzLbt7mR9p3Bf1oMqLMhfMtvpj5",
  "key19": "5P1Yqi7FKTzpQMye21WZ1aCxjmPAUjM2W3tgHErXdCg1XmtvGdDJ8uVnicsq1CXfXjNdKWGeLSZbAP2UCN2Vokxo",
  "key20": "GMB2TBZSzTEk2TdhkGBkYLsXjENfeWviGAhXodx6Dx3AjpKNpAe2wZ9Ji2EaJx4AN2vV522CZuTo5LjiBzZc4x2",
  "key21": "3nMHzHvqDuWUDZneayHEJL8ej6NKQRaF3pE8jLYiTw2QaYR3hmGiCJT2Z2cuoJpw5RKECqoPmizVc8XoU7vp61XH",
  "key22": "4VJgdLx21qrGMMiv96kaVRAqpcMSg1NCSzppogu84rxhiMEr5AQ6qyiZnpT1BVofS42zDrp2vYzF6Bmnet4MtaUn",
  "key23": "5BXfnvnnkU8dxdw8z18WMxi5XyTmMKBqZ5HFKXSfpySPChxmj14oELaTp7FRfGH8PZrHHL7VqwA2btC3X4Gciuo2",
  "key24": "4EKaYUvPYw3MxhTHibBcHHm7TyYDnN2nXffHuvbzpNKdLSTGvfyhGebMGgs1JLjFhu1eTuWCUzbatHu7zueGx3rD",
  "key25": "3aXBHQxm4f3mWn46vHzEdtSmAnorvobCXa8GJ1Pq2EsJ5Rpvrf8Y5xo32K1WDbRnsyosHU8UAm4o9PfRzaNswaDr",
  "key26": "5VupQrGLdSsRDEPH6H5t7xPxSMKoY3rbumxyVRyjB67WpkAzRhDM44Z8TcAYzd36Q8UrTZQGoHDxHV5wUMKqXvzQ",
  "key27": "gXgsWKP3MVnnyEfEWpGFnjfvpBbKeWv9WavUGd9J8bXiC2Lehzts6BW8HVBPjxWEabNekDp8gkGDRoCrw9GdPh4",
  "key28": "4pTdQ7nsp3AJjPZu9XVVr553UHbw9fyvvYm6brzaTkQbeQM2UJVs6WRP1zDS5LiJyh1iFD4JdzzBwFBo2YEnzBGN",
  "key29": "38PpyFFb8iXgUUzbGzWtMLzq2LccdmdJZdd1MEaUkjGWqhfKkDQpThPi8KgAW851kV3x3ukGztSPTa9zq2sukc4z",
  "key30": "3LYf6Pg4gMRef7gMGm1gLuAgmBNq2zRCpc5dPUVX2pUDBEGxgKZQ3hiLvJGTNmnxfxqNEpXmqBEQpP4doRcGc4EB",
  "key31": "5aqauivTwLf4mSyPZ6AE6H4RLAjEEXy7YXm4xCgSxkVUbtTe9krn2M7d8ZmD5hZfhjLb5jJ9PUmP5GYJrJvxqvSe",
  "key32": "5d8HTA8r5jfdQjmgGAK5a3Roz1HzJLKcDwY7Twd1VvAesjrkHMe6CACpqVzaQd7ZmBJqLfDy4Gznq2YSwjaqKU8z",
  "key33": "4UZjDx7LqiPN3tvWt1s8cPzbk4BRyTr1hepeL78B1YjcGXDtiQcneJfNj1MK43VRAZMikYm2h8VuWwCrBwqXqiVx",
  "key34": "4NrG9yH8hxdADGaZkWALvpCr6erHYUM9q5EUUT3RLCvnxo9NnVB3x4R41VRBQvJrFRwndyffWMLd5Tuoboq7Ho5H",
  "key35": "491kSiyS89PbAEZMExQADd49bFLmCgobCrQSPMMruKqzBtLR8pRs6EdZrfYo6svjHc4GZcHCpoawStj45UXtHjfL",
  "key36": "2scWKVUvSQhzGkHCx5RDzSLmaYdc9XPUqASgtoMn3CidHZo6saKV4CQtZqGah7sffp3dorj9BdsNJKD9Bwkav6th",
  "key37": "3sSiZMUEnfk5X44gkUSy459WPb6Z7WyyGwNr4a8aNuxH8xpa6WrVoMh6Jo6zfHLMGV6JqJVPj98stBKGZ4ZpkVY9",
  "key38": "Mf61Z2naHsP3yr4dYPhbg5h9EzmteS2cz35mkPiVKBwRRv5FNUz6t7xKBcmkqxQp1XBqvqp8W5YQWg2LE8xVaEY",
  "key39": "HszpiDd5gxJwud84EQy74xZQBrAtnEdh92sWWAEzSdJRjbVHKFXsaTjyuuB2n95eCB7CuCfW3BS8pCNeNzzaRut",
  "key40": "2JfxNydFWGtf2q7R84q9bGpeJdcRYGb3gsSupB7AjSf4knJDN4SLKY1a1hoZLUg3s8M4egwTABPkvLc5zE57eES6",
  "key41": "3PNvDdJtHkSg2nZqJZrDdZc1qjykep3dXQjSMYNnvsQa63thQdNxVHcemCDLJFTeE9TCGEXbdPHd3D1XBMnLsqYs",
  "key42": "wNw2xUAe2emkpCGNRNTX3KKk15xS6wpEgWsNB3gsjmquiQpuRarEf31hkbLGdHA8YMKZGKWfPmCbb42cRGrwuKB",
  "key43": "FFLE6nDEweY6pUyrkuqbmaM313eChbWcHN582r9hbs2P4Sz4KbjbDirEvrhdU6tT7TW9tECaRVuH7z4U4AfNXp8",
  "key44": "4NbmP44PSczkFs9qZUXGNzF7RGMgf2s3Q4cPMNi11GEaGaFpugxaFaMog8F3NLKoE8YFhahB7rqAcjzx6n5bV2mb"
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
