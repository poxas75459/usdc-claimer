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
    "cv1LK49AP5zD47HeDxqnDoX96LvQRNqDtnNr9Us87CDosKb8rJXppARefbrg3ANDg8fP3TSMoznWpCRGrWmZ6fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgR2ZrQaxYGWxCK3a8q2otKFMmzWQE1mv73Y1DGrgwhuafmHDiLoJHHbZkoRkeCQtgSiByjtsAoR9Urvpq9J2xD",
  "key1": "H6hU5fVUGt4Z6z1dSFPQ23wpZEp5G1m5Ze8FddhqtCWMbCY6miEbgdqujfrTMiA1XVhNK3CvJyTD1YLoDX5ncdN",
  "key2": "3KhYKbWdxKTyP1FRcy6rHNHe3UAk9GQn1XhFrgwAzUEXsfazp3PQ8cHsZkv4A5dhretv3wsSipdqv7LfkhF2KArp",
  "key3": "51WNHm3jD9AcNt1Vi1w5BCqW1WferUnXDRnTGF4yHzT9uQ36BMn6JiYG2dqkRCQAfbwg8HqTUmAKZLVPHAm5uiLj",
  "key4": "5vp9r1R5QZmjVDmrCiuV3DFB9LJRC1CwPuNgHoGdsWYpk7L5udNzrpDtmWNH2L7yKz9XL6nNxNqc7YQ33PiPfu16",
  "key5": "34H1ewDqB9vPvQ75R8smwVypEmrtRr2JVuNam7HJTBsTaGEHdW4sUtUp18JEuLoxhXTPigmFM5DPyjbgBnDP5UXb",
  "key6": "4JtRDp1S1w5ndLLEZSA7SAMHdmHAx7GojojbPhpEk4WWGSc2nssHFLai9SiiatfyhypPtQyfeoBsPCxbYmPy3KvM",
  "key7": "2zpcecSFnFYqcLox7TBNPvrggLt5vF3mDQFPYstu1vUYopJzkXFKVe16dgFGc7P3AUfgAywMFC3BdEgXW4hCPbZt",
  "key8": "5Fp4RLyvibUsiDgxnoYnefSXPxFavv4AjbBSsdfDAKyAq7M6iJHTeMUSRvzKzF2cUpEaSdfTuxMekEFXxWC9588y",
  "key9": "3TnsqhNbJJ3DNEdxCfS7VZQqbXQ4dFyAgjR5oX9UbcZENhzUWigsqDxeAbw4i8MX7fWyCL6m6pw8pbvbHaRsqn4e",
  "key10": "2ZGg17vWJGsoUUy1nn2Kwy242ndt7oQeZRyjMR2wefgbLRVZSmjPRiCxGJkndp68pzxzhsqsgcPcXQNRhQaTvvGK",
  "key11": "5SLqjwwx3SRofPmF5CGzwmmqEY4VsezJUibiZ1HxE9CE1Wtg4jxsJgEQsrLQuSzGmC1CAGyLccPXn1Vdi1PdRRBy",
  "key12": "BiANTdF1X92J5wvyapj9D355HXcYutfhJwAMuYTsYKCsTAvu9gkUMw8TmzawmmxiFeEQKR3WJB3Ecn95JrQoveM",
  "key13": "2NNuPkCc89tQZrfSCTu6f3ohZpWUMqpyJJYVHwN8xUfnq7bR1X5TRSgax59mzBN6HZSUUC7APK3qYquKoc2CMZrs",
  "key14": "23oxX12y6YV7VrXxGsH7BDeRp5W3yeCqqVVyS1tVzWXRXccCNWnRj17csqAMQKPCcJq1XfZcExmgFc5XjmtqCmzD",
  "key15": "FjEMhPQ9rAmAnwRcaXy4pNQM8uLqWzijjnsiq7RhTaassXtLXLjUTQRvT28YhrdLPonVHjs81rFFmoAMQWTVoPe",
  "key16": "3jKyBrexXVgqWrJqMZiGvY17QtKvfhe287BgXrXW6s7pi7Pih1Nhxq4YvGfN6qiFGvTQRaSoFgvyshHZaZ6u1KDv",
  "key17": "5GpNaTtjN3ta2VfraUgxGNT7oeDDrZ1aynYXQzMe4qy7rw8g1EFSYwAQAZBWb1PiZdownLxaoMW8ZCu1S1fkMtpC",
  "key18": "4LPNfFeAaVAkXkaouMDxemMXKrdhy7BXnx6v1uyBfRieVY4Z7UE4SSwnq7FrT7dAAREfKEHaKWqYTfH2z8yetUh4",
  "key19": "4EZAdCPagEcZ9xm739opyxUHnss4hDNK14qk7FDcdhtAkPiTgSaRswBQRjzRaAtBRPv7Wda6xxFydJCSvGhZRn6T",
  "key20": "51bStY5tJRNow9pUGppc3o5C5zSUxD35duutgvE7LD1t5226M9PjEGorVh4rJXskYDg9XGAjZA7ukpKtm6Zf1M1G",
  "key21": "2DUpwcSwoE4xu5VhU5ht1deYiKjy7CKuSLScynKVwQZvhoBPyt4QB9Vowyix2AEowQwA1q3YJZzTjampuKCS7im6",
  "key22": "5VhhRvXA8hPkcrbx5sYs3nMeWJ5pBP1umiqeksFuZWa8NjzJjSsyFf426KD7AgzPTrXWWMUjyiniB43yyecTynyk",
  "key23": "4T2VSDWEKLUfdsbzNLNQ9HtnF286BsGB1yoFqb4j7QAaNMBL6yZt8bUB6S9NzrDgTwydrUrNiXv3JCpMb7ftZZhV",
  "key24": "48rRgCQAgnu79Bw9qk45AfJGjtanFna9bottNkSDaaHsVnKeeHGq8yRi8XYTQLKoGUfTrgFzJTLNcboH1W37baiw",
  "key25": "3pTqdhxuK4B3MCiq76aRcXzYA11oCgqiHARzFHprekvYtiGn5myZ4SM8rDWegrjGB778uHwb6mgZvw8grToj6yZn",
  "key26": "28v3tcNx7gLP9rcMfq3Hr7FLbYsd5RcsJsZWSMrsiNP4GXjDgXLfVvpwMZP8VctcoNbcMRoxyP5YfofraRqZ9H78",
  "key27": "4QTQxLs3iWnCwLKgehXpxFgnMdoKn4qiLGDG77wtvWBp5tEXyuhRhAUEtfX87htr44MPa5JqAk7QSpqrFYGzMzhK",
  "key28": "4sXktBL3HYviAe5Xh4sxG8EMQzm2fsmnBcoisCb3jQw76u7z8gETbL5whY9MS1GcanAFR94yMEuJkvoZX2haHw6E",
  "key29": "4QNDH6c3oUAvTF8B9Jx7LTDSj7HqV4MfjGGefUpj8GGXGrGmYfNAamjiPzjy4diBnMzdumSBU2ZocPUhoTsWwJkH",
  "key30": "4pLTXgJxYF2HjUeupK1h56sQt7Ttu8VeE77C3PVPpdrSxQa2WiJxQBdZPiZwbX9wJBQT64deLN4w7PY2KVicrVXq",
  "key31": "e4XMHWVXM1RS3ZanzqfqyxZWNayRx1UmvaAeRcCHuSKZftUinCpHuuoQeRWDVVeVYN9ZzFG2oVx5R9mYJXBRrEh",
  "key32": "5CgLBewCradRnmKmLqh3NMNLSy3fy5nm9FbxyUdMMaRLH8UtvV7nDAa68mMQArkCNCdhPnKxi4qJqGPLqxEeUt95",
  "key33": "4YSm1cgVnCPVGHZK9MMSF34EYXFSY35fKxKW1jc22S3FTYHu8nN9NugkyQeZRQ1CV3jQUTQXuUxS9DCrBCVhxSsc",
  "key34": "5tp8Vf3heVpaGNNvzcMJVb3XUrnLgcYwyesyPiyHCdPCXRcF9gKqdjhZRaLZGwGrEwbwiQUefTphRMri1ub1QcWg",
  "key35": "3BQRX83n9mZGkbaiX1pUxmUWumGiW5viF7YDjJ4E1wM43UQo7RVjKpWkNYjrFfHrcyfr6PTrwn5xCYCrUSDXM2XQ"
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
