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
    "5QWp5JSpzYr467DUDdMDQRzeB8nU9svM7aNLSG4XvG9d8vXGBZPWGCsREpHypNNmfQrFkVSDncd9MFySnsBghadQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fAnNidhGVkQi4pR8PUzuouJuvurebmn7Be4H1N7Aeh1uDgkmTUeh814cyqrZuTXyTLaYkUNinVfanHTk2ybbrXT",
  "key1": "SciFeFuaHGJ1Gdu5mwFj8dUnFxyzrcZR6iA6vSMHPg2wGf2zGj2z6qW4Kr2ZUF1Vsa5Eiu9JX1B7kYFZBx6kxHV",
  "key2": "2jvt7XfDZfnXzt97BfcH61VRxQ9KTmrwUCNkH1zxYGiUH3YPYrvx4R2aSid2di63xMwgdKcDfYaVSDPgHHGPZpkG",
  "key3": "4hsjpeYPe6LNmdPgohWy5Wddq7hDLnU54z4HpZkUnavucrd3fmsRD3GueKTLzvtz8qL3wmLTRH5dU5HTrWxdEkNL",
  "key4": "we2RpgKxxxc6epK5dhAuiy8Awuqyvv4cKkHiemoJWdaFW82b7nWtsEfQbGTu6ErmYTbU2uc7S999TWv5yKvkDJU",
  "key5": "5kVc4VTZfVn12AE56hXfNeYduDgedeS9CL1smwF4nbVvWYFzn3Sj5LY8EThQKhcmRhRm2Ddrc4mD2X6WL4mcjE3b",
  "key6": "3P3xk9ZD75f86MbKuPrQqVeRWoHjxZJqweBF2gJBueaH9yKKXuecAesBjHVGPGEN5gAqRqaHvTCRWa7fBGWBG4C",
  "key7": "4QcTX39PqnZDbXuuqFxjze5iucrHMTC2834f3ek2NSwahPSnoRsW7V2bFkc2BmAz2mXNxDzGAU3Zg956Cy7TNKam",
  "key8": "3mV8m1BC6tkkj9C8FLxCyitRj1xX2ejJMV5JYGjjrFUCBqsXPw24ZFyE75JKxFneMUQkQWLb5MU9DecGsE6Phjur",
  "key9": "2GtY2QfULN7t2kNBfV6ypkArHY9cVXHAnq1DHhSGeHdf9LBb7YVsL5fpKmJ5989MadsMpjaByyW4DbT338zSP5wh",
  "key10": "57QpgWMDcSDXbJz8UbdUfSxsrEeouta5F1XiVzkoxp7tcFTjXzk7HpMZmamEwKwQUL2r5S9AqpnAgyj3gkYkZT6",
  "key11": "2B8qbjBgPo5WeQeKrGMsrNCjuSbphHGUwUkHoiHJ3JWr1xc2ktxm64VomScpYHxByWWgKExjTWEoJFnhZ8Kze6vj",
  "key12": "6DcDfdmPfSZ81qoxtP8TVktLkrBWKZ6TtjghKAMmudz7Ghtz2SrJ5oeypckGhUgfbgTs4uZGnEojaQBYmjAWmqa",
  "key13": "352bWqpvkZ7T9dHo2K5eJ8BHF5urrAxkeZVTY6CcWhTQM4sGbW8cu9dtecgJQGeTqKJbakySK4LRQV7mY1yxKZ7s",
  "key14": "5U4eeR8T6KDjGKfe2VYWqUssbQQayrVJsghL7oVkhjo6zg2akFPecUsFCr5P44GjbnzjaFiUpGpeKcfKRTxvtyDJ",
  "key15": "3EcBTCMPFTFAhvttLejAFsZcE5BgsJ6WGDQpWKyu4ep3F4GpDb162JyGTM7LJdkS1C2WPJgbpTLmyLigNdshSeH7",
  "key16": "2PbLD3VWFEQVzt5Hkqb1szAuNJ56WxVB5KGEEzXHShVcYHY5EYvDoNd4EYTMBKy71uTQHa2F2a1YCCEqc8DwNtQK",
  "key17": "4kfR4oJGE6tEZqb9CgKhNk5ni9g1xKMv1hroaNuhrfMJXTA81mPJeVNSzS3Cget3yHVFhFdF4cdWE2AnGyTmzynM",
  "key18": "ZxkrjCxLC1HUbSRTN3zh5bjJs1zWoKRCkKq1omZc5GqApWPdrknVP6zdJdJR5QnKGivLkCtQ7bzvJceHqsw5hBq",
  "key19": "3rWHHqPVV9zfvVjkHUmsHhuhiDp1RstSMpZctjD7MW7NbaeahAzRmTakAzz4poGRWQwFWAyadeepuoHCw32quha1",
  "key20": "Y46rKa5syvLCQFG6YitcDemGpnguqCcnuBQcLceC92W8UwbuehDSCHejK6qpBReLjFkfYVRUB6GdisMVdyr2Z5K",
  "key21": "2ALTvYau4usnBNU9Wyq8yrUDTbeshDkX6YHYX6erv54TMc3Wk2fdiXQbdGjANRuDcwg9pbZQ78bwB3d3bKezndn1",
  "key22": "CP4Ca9VYX4HGCAPPoqDVvi9KLKACC59XdpjLqrY8PYjepW9zcBiRPDzbT3UZWMDSLVU898PBy6nN7uyHUdZG5RW",
  "key23": "66ahFZhqaasqVmDxydeDyvH9a9XhuXywkUPiE1iBaCVxLTy96pgZLGNoSuxPA5wsdU8vUiLLQGYBHxX4WMizyBr6",
  "key24": "2GNu2U4jspFnth56wgpBoj6mHH9Embg7HZ4Xc5RYBbrMtmt4Ejx7Jx19JyesrVifQt2eaJEcJC86HkR4wWA4JmM9",
  "key25": "62dobrsYAM4aE8DYZM7zwH9whWTYCRScutWky8Cv1xaYVQmJ8DmGVUmJN36hyRvmUk5JHNyAnAxEVeF4oGzdFTw",
  "key26": "YctWRDJzNNfgkfFbMgdAi3iXQTxW7J4QJwdhe65ZnoQhC9smwnyZSqURyFAv4ew4LpBTA34yDGo9VSuN92dmTcP",
  "key27": "gNFBzLJLx29PvSy6akFXzd18TZTZa1r1ZemJJpoUHWoL7jBz5MmmXcPcF9keXfpkz8X1i7uxipZmpDVuFSFobpM",
  "key28": "3bghfdjZDqC5yjS33PxEnBoyQabEKx2ZFQkRPgzrxbMCrC2uzWHtnJNe3ivTGYPsSQjpeTjj9JxL2R3cWMjVwtPF",
  "key29": "4CiWLv1dYeZh1Hr2BxPge6H8VweTxkR34LQ675X2UvRPrh13TtsEh5vSGY94AWbEAPZKrChuLZML5ddeczm4oaSF",
  "key30": "3khpC9UQAyDe88QUqyzdV9bZbW7AdfnPTGsw2LotSRiEzKMKpsPgNQ7LvTpvmXM3jWC7okyHt7trdpcPypXvLszV",
  "key31": "ZxKrL2P3EgEax8w9Wq74hjgnggESz7NDHP9yM3Xmyub8ytCdRFHZUCWKrHarkSqLwQQ4kfJj78SApsBs5yPGhN1",
  "key32": "3YpZh9YEeXQYmoej71JWJEuMQDUSeNB87p5NEgSu9FfRF6rsuaxGxPxsT7GoehwSepdrmstbKKwuFa9LDNEZg9EJ",
  "key33": "5oxH8Dufu8a2xuFTADRxhLGAiNadCKdfk7kvXGCzLLcQbuQhhSFR2U2Fj47X5nsytGntGQNVNSFt8KxQEUcGRFmZ",
  "key34": "4MS2KA5yA91ZNZYnEeneAGkVwKYNikLpA8UGemRjcszvsfvztw41wgx5G7x62S4T3k2B5rxSrF5qnuwqzffuNBvk",
  "key35": "5f7pEUZpYtY2LG75aBnZHQrcoBpMWTcyDT2mw7CjvhWZq5Cm89jo4n5Qeaf9AxGk8F9p112euRaB8TRxWTYeBB9",
  "key36": "4Yuf2714BaFPr81NNEotEYXWxUfxMNJ1W56bFcjYyqEP4ascgwo7PMCdW3ceXWyJKND1m6fz9fnt2aCxMcZs4PLz",
  "key37": "3QbTcS4uQ9BCPHi6aU6Bm2VSJPWF7V1bBoSrWCNwd2u3ax16M8pKWuwrUXs98mqjMVtYhajfrUt3F3ZDyEEGhTX6",
  "key38": "4s3TSF2QLnXVnFuiPPpu2VMFqFKGyJZ8cy1q4oQEHtZXEVvubztr6HHysW46EFMCZFqH4vXFWsHTSKRy4NSBVgJC",
  "key39": "3JTjYfPVXeHfHbSraDBepQd85N9LdzjFeDegBBXz4WGDVtZQNWxQXrD3sLtZABa8GnNmA8yrA9DN2ijdAwDkDuaj",
  "key40": "kE9bGTgXPiD2NsLDLm3HwXsSbFtY9iukDwi2QJiBki9fSYskGi9yfCv3GwLLSCSigw8pGsfSzgm9FXNbvnYRh3J",
  "key41": "g5s7pfzKjuaBYLbSiu6mRsLufoVnY8Nigv1ZyXZ9oYW1EoNdCBHBfoFUgi9QCFh7NyzGAVZBkdCqa8P5KbRCAV3",
  "key42": "5iSk7HiJHm4mxmPBseZbctJabvbGdU9V4n4TFKzM9GY27LZcBwbyWP3c2eLHqwFSaTRR4i2A9RTYg8RT7XYpsvJn",
  "key43": "5SKtxSvwgrBBuhJ3ZjLVEWLSkfFS9J7CrYfpL7qAPV6m9AUCJ3vZWv2f8h7dAArvZUaZLMk7TXGDC3wez3xcuJ5h",
  "key44": "2KUw89qmACnLNgmfuhHZcyXxN95BTLATbX5r2fNzRkMT5CVUw8gpC2GGg2ozXFaT9BmefLwCTiKcUUkqbASAJcBC",
  "key45": "s9hdSsZ47JzmuQ1SDJKwwytKf7LEXqthBKm9HBfU23FTYoqRfmdJiSawTZbW767E8yv4nAFysYYyauV1YaYfGvG"
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
