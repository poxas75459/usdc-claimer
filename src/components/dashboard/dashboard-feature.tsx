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
    "2YQEDVnKTp4oRdLqxLekMHXGaZVkgDRoeVaDrrApkc7xDRA2XBWZCST8vyxXYqgLh6DiaWYu17eH6aGKPEKkgyce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSw858hhsGpYK9EGLjL1w71Tj26MwTC3XY29cJvikaxNyRH6MUTKSz1JhHQrMybi1f7LCsarddAZgFqBi6je4Jw",
  "key1": "5JerFoJmWb4996wpDU9pzG5cRno9yUZ9nfmwtbBgu9zM43wNYJjaX1uSDoDDqFzeApEok3dkXNdHgepeBrovXraY",
  "key2": "pCgZA7CCHp3p5Y6pRaHeXpzQB7zpBQgWkMcP4aXs7kh6dhu4FQ8Y2qC5j4sVPD88Vv5KvyLZDroJnjhAbWC8PbP",
  "key3": "42fzZUBXPXhJLQiQ3RanN5PtKPvgRXtEYYpaueZpewiusWRWmWZrENQkcTdWZgQ5EDxbrGGervt22VrUbVa5EfkX",
  "key4": "3Yh2JgUqKQGDBF1U1bpaYjhe7BZgrQMyFVDQhz9XgBRtBgwtRF8n6VQ7qPziyUWFuAef91HkyX4s8s1vHo1z5Ggc",
  "key5": "5gWh9hLsNgdLP9XUxFUfaqwtAttoeFJbopngcjFphE5NcSyCstsRHYPRKwCEqT3EJuj7iDFiFintthDTvkNB8nSQ",
  "key6": "5ju5HaAzpcnPAKsA4E7CJ6iieW74SUAmdZSkCf9yBNJfNJxJYAURPwVSQgGFfP3WTw1HRtZFSwKyewRyR6fHbsL9",
  "key7": "aDQfkWxhPCaA3v43nL7enNJy6qZnV62DKUW1wXSBrPMnFBrn6QDdaAF4inX5xYyrxAs53coYbz8mtvv9EXqcmB4",
  "key8": "usLML93A33FDsGkdRs9jzFjG6JxYg7zLgcUEqNxcLYRJULUUV1cyL77SZarm5f5ivJt2a9tKScTe9kLJmbCkPTu",
  "key9": "2ZanKGtfutArmEHcxkQgDfcneC8Tuz4rfCCvd8Aojjk3sjm5gwrPY5fq9CFxx17oyHtM4bFKRyaNnZ3ZcmurTGU",
  "key10": "3B2HbFfXL27aSoU8ZgGMQvNhiPmSy9J2n7oi8chFG3Lte4MvrzT96aGjN3ScSVEpBpLE9k1iJKqehCic6bjoxGUp",
  "key11": "57KGRX9WGZXH4SfF75xcFwwpjxSjYJ2iWCWgCxvueJ9vJ6RShZYy9Vie1t7kyYMgNfgGjTzB7JvY9wrUg7ee13cG",
  "key12": "U54FYmbuf3PGsVyqVGiWGcANiBkPoD2a3qUKDTWUJNSnF8nGQWUHXCDZokjTg4nwGgjtsQoDyiPUfRYtomjQBNL",
  "key13": "2C8zmLx4EcJzpuPMtGSoUXeZukpa5y69WAQinrGdhxvHgXzvGXPinZVvhBTa5ysLD1i3opi7f1DM2yt6B6zd9hyx",
  "key14": "5zQdxPkKYVEemVcYSA4nMPefqGuVykc5rNrkt4BKG1ZUtdbeXyMvtxJYQ7i3ZpinY3zpLF3RuWHPEeQzuTcCiSTa",
  "key15": "kkVfADy2D7y46JT1DhCPEY9WjBCyycJE7wXm4HjisCMU1GuQ2dscWBEsBCiYkAqBmtXtmr2tvTwFLqLne9Biu7X",
  "key16": "5X4T82ZectqJbDs1KNdNhP9zhYBsvyJ7QuG2cCXv8NXUkyjwFUfEzEeCKz3jxyNkCiEyvdbKY4jKkQsHQpEWEcBB",
  "key17": "23YktEw6B9REBbuQ9GiTJ7BiFytSxQroG5nqLkQSR4viVNtBTtsFEBDdqmK2Mw713GcB8YMxWcgn5yPVR7tYkNTd",
  "key18": "BRUJ6VxAhkGXMaZB6HPjyiz4LvBtz8fHyT58ePvZNd5t4AuteQeEAVtyCP5XQr5G9WwQHTtq9w1m5i1NkXhREb7",
  "key19": "661UQEcim3gAe58sS3ziQs43ETEQ72eByT86LP1Sefe9AxNWk86jRTnEKaVCSY5iujBs2fParTEs7Y8j4qRS6mXd",
  "key20": "5EYq38sTSfaTLCZ6Sbv3PezMrM9mcWD4KF1qE1ZxpQHsGuJYiyCrya8PxXS76pRfg3KYD1vyLr68CZTzKRdz6sjz",
  "key21": "4HJ7e3ejqeZ1fkAjKJCDVcJtfF4M9XfdFnA4RZ3tqp6XuiEzt22iHTLtekYNhNSm5oqpYPCqsKNXFdsCGp2RtCeQ",
  "key22": "3PQcZkVmugu6cNiKNJihZi13z2bJPZ5NTYzpj942qhKXuRDDRMQP7mkD3MowTnsBbCS8Sdt5x9zmarajNYSdLor5",
  "key23": "2vVbLek68MoP6JgGa6EceExmuatvc6SnHjD6ZL9ycnVp6gktB2JvC2seCmibRws9DpzWuU8kk7q2aHckSsZGtG7x",
  "key24": "5gTXBVboVJyDvb3UP2sE21mzStcKCtbsf27eydLro6sigqyBqn3jrEPzBx7xzqHgiro5etSPgU6mDSLgVWQz9mXv",
  "key25": "66kYTRb2fUFCWMrsZUjQkX8PFrinGwBY16ERW9zFQicHLdCKKtmUA23ybNFx4rSvY6Mmsa6c5TBN5m22yko99oh9",
  "key26": "3XQf1YRTsyHiNnMYnfAkjKQnxFSNZgPgAWddL4485abCinrVQaPdHUDwpnrPkeDXD6somzacLe774Ur1dHdf6w3D",
  "key27": "3xC9XDy5KvMH4DdM2UP7TZQhNmMsk8SxV8ZNpMBSLnXEknhZkkExY3BpKP49Rw3B5k3ugZyNgZuhL9JL3YMsTcZd",
  "key28": "2bnToweLw4tpZrYBk194rPAvb63Jv1MWsZz99W5H19oVKGghWtckXm7ytegmP2H2pm2fp4VHE2PUVvCwpZ2pUktk",
  "key29": "3dCW68p8rzq4j6uQ6REinvJwtmD6Dnu5opm6VfX4LfHmAaRtHgo7sezdCNZpQNWzmQ1wPda1fF49xyidjWLCJHA3",
  "key30": "4uPyr5GktStiyBbodV3EcoaPaAybF5NxtUnNYCS6MkrtYyKDRgJj5ADx8Ygu1wu3QSq63K4LSbaZrWVCGmFMH78t",
  "key31": "5qwMbokaRtKikcvkWGTgeMM5pzDzLJAfoV7Zrq9T4KFgtNMz6ySFqaVaG7ykSh8J5bUxey3EFWcU5MpCCmg5tznM",
  "key32": "2fTyNPYToi9wvt5P4dAjU1DsoZxzNMLJS7Dkv1UoF4aup4RYCb8LEsgw2rC4MTay1PPYu6FMN77NZJLYHTkChvoa",
  "key33": "4QW9LjFwFpQFGpW2HkLu7PALqrY8qBg6ZCN4MCZHujb1XWYCSxdBtEn3KvM5EYpeCdBggTG855o5qZFXKKFzpNkX",
  "key34": "36n4MURsMwArMg3aBECuv1kfDn2qgGWcPnBvDjtowUCKVbxEJnvrEJTG34PAhJHiztXuFznGVNauzDWnz6QkW3ZL",
  "key35": "2UioZAebFWsooyjwqw4y7kdELtHz1kEFGBUpEk9aNsK3Q6u9m2GGNKK3DztoWYyayg6dMGLUSdYF14HUQqftQ2wu",
  "key36": "3PJ2bT4vcmveNeeVR34khnAsmr9Ni3bE7G4RuVAY1V8RfNqeZ8EdaenU4A37TmEZ6pthz2pVw48twF54pCabM9Xz",
  "key37": "677vEfpXizjyW9oVbhjva43v4mc3uhQvWwLdvXSFE7SanpnB9ufSQqBoUrrkvjTPYPxWeivYB3y9oqj6T5WSvhUj",
  "key38": "3eAiLxonJtFA8CDjfe4UFd1adJoLFU4VFEcedKU3hfFhsGbos4pTW752Lwn4RhsrjxAW9DtuNAFL4FtKXy8R3FdE",
  "key39": "9owmKqxFfwwgJ2UxaR7warFG4eyKhJ8hCisLuKTHeDtXWBuxgXZter31wuEBCujdk3QMn4uPDRFqeJAXKub9yBN"
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
