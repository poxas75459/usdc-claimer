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
    "o2Ru34XpTQs2mAYRCB1LEzmBGYioTRBW3Bj56zm8twsYGXvePq959MJ9EAnzRoeAfC7TP51m8P2ndhbM7T42a3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHsWPvVF2639vMc5sbTEafAaa3whctBFCjUUgQDve3bA2NEwCFiVLVBuRk77MmBhpB9VJ41eUkUjkwBB64BJTPP",
  "key1": "uRoXbVr16pqgCza3JhPb9ynWWpBsh6kj43vRgSedMTR9ADR9JKF7oXXMQMqfDLuFcCGd4WXB87uHvAaG9MyUC2b",
  "key2": "4VeseJgAs68i6LomjKHVaifCycg5shhBeuRdnsF8d2R3qAJ9hgaXTeZ3edR1LR9T26ozoU6zQuVHvenHFusHEKLR",
  "key3": "4aVD37zZt1C9x5sFBvkPLMt2bkgUW3o3ivEzGHrZsD58wHCHXmawXpVSREmHSWm6hLhV1Uxw8NpSzCQjKLqqxffC",
  "key4": "4rwdd6pX3FN5UhJuwXYNdtL1M2U7FdcBvFjwCTrZxMvJA2NediYpHBfEDXv6ouqXjubzJ4EufT97arrPMM3cZYVJ",
  "key5": "2TRbesyb7pcEykHnJr6BuuM32pRLBMbXNwU6YQmA1iVYpy2ikgpouWsfU9DvcsLo6SDbZa79NChBGwXrGqbMUjKf",
  "key6": "2E3xtuSr7AL8Qzi76GBdc64TrK2X5scutzyahFPLmHzKEjHk5ZMtGkcRMi6pzUvZkyeiRdKm2GDcdCmMwshcTo3B",
  "key7": "3n1QttzRdViX1x5GkhF6qoZFGS5zvVp4MU7cQhwxnz7Fo73QcsUWAS1gvgrYqPkQvAodcFAnT12Ys2TXVWrnFyoA",
  "key8": "5hQicCpy1zYphjTWoycUCjQCi7GUUUvnfbQNYimr9726T4WbQHcqWc5KCGB6ynaGWFSZ2NBh9jMvhU8GD1xEZH5s",
  "key9": "3N3Mqyovb9ncVHtNHYr493GnrQwgWcwDttEVTxeewiwpkkktJtcb8TftbfJn1xpoLqTWAbLLmjUM3RhXFqQRfmRs",
  "key10": "dK1WezbFNXPMYQzmRSBT2M3cnhr8eqPi3J8GXRiab46qcgdJ3MGapnTvvneBv2Z66ZFdLnuWrrjugTrkrDHxjFi",
  "key11": "5MJ8opHVzT9U15G13orzooyUTfvtM84R9r4FqorrGa32mchrBq91mNNobsff1XicCM5oD6A6aFp8LYbjatRZHKGL",
  "key12": "5QJ2WH1tqfir48igdMDCdtdKr9AVEqMbkYZE1imC9N4FckFMH7NGpnTnnymscREMmP5htp7FsyXviUZwbmU5hD5w",
  "key13": "5depkNDGsTneihhYSdjmRoeknLrJPwrXCx5yBPK14jhSgWo668LDZ6qRCZUCKSV3V31SUaLDny6z6nz831CMd4Gr",
  "key14": "3dcqGTuimzwz6XRzMZGTQRCLLkDUtQycSn5ByyUVRYF7qhztQVZXXHfUjvV8gTt7vwu4i936yxpbXqGKBujBBvcg",
  "key15": "5ty1XRgFTFi5jWzDg7hqm8ZV3mDpCbCHqaB9cjM7KMCqEuC74pDEgQson5xbAjnCFPm3RnKZ4Ttx93JznkphbATX",
  "key16": "5tGkJ2YtNgJDCq1jHuLMEzVCaDvxgA7RErJ2W8HkeUaLwHpsZFMvbRVnJTHMaYVtA3t53LTMqsghGgPDjjDFjy5D",
  "key17": "2vi9uBv1JLVfSbrmNoEcofb6vn8GGSYdhpCXTticy6xTG9u5jRZW4eWxHEC45VZnnvhypBJtwjG28rpDzgiDt6cR",
  "key18": "3xoGZm2HhwedU26eMivCCqLM9amiKgk1dxXYctV6RoAx17M44jZ1KV8vnsKDtGbTowZYttCCzxCxZWU3s1HCFq8n",
  "key19": "3P2uxCTKyLXX5rFvHEEpAG3Qqs75W8mEjaBFycgkquJ9bP4CjVju3LiQ513neKKis21KwbG21shkvpeNJc75zK29",
  "key20": "5MDHL8hr6JboHcMtCgsEgZvSzs9bMge2hQRACoy77SvQo7uhYw5htNJ2mgpwREosN8KMrguBg8ExwmMVGZPp9hez",
  "key21": "wTYNbymupE2Zn1wtKKEf3YCmvpzWNcKy14T8JW5a5DcFWFZb3VGJzxZ45SNXQ6SyjZFwHnEDzpeRHH1ruNpMQNP",
  "key22": "ACcoi8C1CZaRvdy7kWqSdWacdwkAwU6dn1MAeAkA7iqi4JE4fTw3kdwq6S4x7jf9v2fqFqr8bVemWEHLCVHSBzQ",
  "key23": "2VxsdgKjRmCzYruNXVFX9QdPDvYQZJ4cnSPpHeYmZ8zKYWaHa7KMzHY2p48WruVRLkiWUr5vGkpRUTRBFkJ8CU1C",
  "key24": "4ruA2ozXdqcS5a7ZwNpVi5nc8S7iM4LQvhEzTwJ1UYQvpfAexRgEaFZVvZkFFarf8EGT4BwDJFxY9RHfzdxQTfvK",
  "key25": "5XCQo9gk4k3BgKsATvr9anTDR5XA8DpdnQq6RbXQfTt5URTry3XM7yd26hc6FNW7ZSCjGcKoDZyeJVuVjCf4RCSU",
  "key26": "49h1AuzEMSMb3EbESfWavWgTvBd2Ps9tsn3hC6J2HmdKZmvQ7fYdnBNiLz5RiwEGYvHSKbtAEqimENU8yYnhfdhZ",
  "key27": "4PhruhkE2dZzyfLyQWBwQZgmn2YrjtAsTGdwhbQqc4y3V8GncETzxRCansmNtGkXrvMhVnAV32pfauts6mHnDJUD",
  "key28": "5oNC6SfWgSJvADFtH8WUsrB7ouW1yhb7tS997oNMGefhy5FTumcP1SvQVKcLLuJoxyz6J4MPCFB2cdzjrfEGttv1",
  "key29": "4aPJufH3ZrMncdoXj7i1gyX5n49QgCuaT6q9UJWR3KK5q5ivuAgkJmwEao6DHKkaKS1D39GyqNcbY6QduvGVj5HW",
  "key30": "3cHGWxXPchpsm969rdGSDhAxfAU3sPHbATaejpSMkz3Cv6jjBtECn1GwBuTgm2bMNXgmMHEu7rCRe1vo5N1d9fos",
  "key31": "3oyAtKb7k2oS2uuUTnjMPgrZtYDuZzwP6bcSwAq2PKxaumqGnT48EgF3ijUruLaiRPoKqUmjd8tbneR3s3TRRP8G",
  "key32": "viZ5M2WCa3bieX21z9E1SusRN97rjQCa4MBZivW6REXPKjsGVynnnSumdkgKdzxsfLN7XSnrvy87ScucNLTQgEr",
  "key33": "33UR5RgEiypMVNkBcfaNiiQW5rNk2DKSXU1KmNwa4sZBdfjRgTzmnTwXizowzuFx3oLxJRMUunx7WLxmTNzL33HK",
  "key34": "3zrbjEQJdh1R6rTjDCyV4PEGhngz1XsUsiLYcvwqwTZMpy1dGwrSM4yNFng69pBsyRExpw999BEabmzDz9h4pzHw",
  "key35": "3eec8rEdodVkXtwkYd4DPb72gaHTnoNSgi9mmBAegZ8MNQtuV6oKRjphMCBN3PwXtHAEBsgQobMX1UYksWHXkmzp",
  "key36": "5BiJpa7uvbeQgmmy4nVnKqE4YPZJQX2ZrMVy1tQNbPYAfsperiE4mxAMe57jFfBBrTZqABHj72V4brUB9rHNEXas",
  "key37": "4x99ToMhpoXjoB1LEYPwiZQk7eBf7zdcNftunyFXFYiy47xgjwXn4pNQLmpbtZ6mQ9ibdbeF9gH1JkX1WVeHaNSq",
  "key38": "3PXUJktKdXhKJU7dJR9rgkeNKykzXakHU9nBQFFJRurSTmCTn6RsYpq7eJ2Rfn94jiJ8ZaJRPXtxEArBXqANm12G",
  "key39": "6tZJx4v9yJComG4X6satPLHeXbSF6cZCojQRrhoZQMYQ63J2Zj7up96QgkxtcLiwdvK5RjUJk23bxRd4g8U12Er",
  "key40": "4egbKqPAH8VxZdD6w9dmtEtsMb1c8Fbak7tWBL7KjV6VvosGC8UxDieZr5yWkcNKRnY89hGHJHXxqpessskYeqiJ",
  "key41": "9ABDeempgxLiC5Jqn7fLT86gGdV6XFPC1biY2kQULbDAf9PpLczWcP3VJ4MCmDfyg1hTMvN6S5HTW24ABQNeFdW",
  "key42": "2Qex2PdRXt3Yt916Qjqbi3BZqST2CmNHo6QHA3K5LimHuGckJWxZz3prfe1QTu8vUz1fnqBmzBsYEtomMaSmwvrb",
  "key43": "275jhHpjmAiU9Eq1iqSVU5BLBn63vo2u85ti9ygpRKB3nR18B8LwTfhqncHzsU4kQNRtD1u9DT53Xd6QBML64kHS",
  "key44": "5jjTFWtBr3QnQGzVbFhcSVgJZbQpE5jLSHJxxB626SU8nKWhEfcSQFZVKYV6fXmbfPnmqPKS7XvWm8oGutKbUCzw"
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
