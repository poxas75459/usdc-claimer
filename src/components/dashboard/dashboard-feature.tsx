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
    "3sGPeku5anYDHq7brNwQocvhoQMAdWgmwiLQJAfr7QUgEDQabA8Y9P2mnGd9FLMkq7hoyhdxFkBz3nF52pupiDAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvavS1apUh57RsCqeRxS1fEMQtaif1cBpKAiqnPS8iCpahu6WsHvabZFi2ycQnoCgY3ybqqXhaXmW6UvHFqeoYs",
  "key1": "2rYfo5wjTdZnaawHZUK1Pni3UG9Ji2iyLHetCPZcZJofLJuKV6ickFzGAgExoZSxcEpz85HLp9gZfkVpqwfv2KjN",
  "key2": "3MV2seLqqy88Mw9FRhxSweokqHT3t5qLhqst6Snew5RrpFQoBfZPUCdpe77k6azb5Go4WVc3QvZBgHbFTebfdBdc",
  "key3": "A1vVEvNRBKLTXHPLKGVETfkV9SGVBLmFUsUhbSNiT3de54e1prAaWMcTKZyKTxQ69QBtkWci1pihHXaiCedkySS",
  "key4": "2RCgBv6KVccSZg1HsbCPYGdFY4g2DTL12Cje9sua63uFqDc2PK8iP7wEP9TKYWLqZyou3SvwG9d6wBwwrWJ2q1oj",
  "key5": "5SdS4KZojRtrnCHMnQA8uUd7H1FzUJ3HiZrw3JbxMjApuHm859XLD33sY4QErySPbiuP2xGrRttsEartyPAxKPgv",
  "key6": "2WeKqfis6DAK1ZXXqWEbkJqVGcdhJGExDEU8YFTdbYqhkBnHC5d7aAnWz6kdkXtThc5u43ZMpJB6a6x2EbLpAjhh",
  "key7": "5Ae73yag3YCnyWFnuKGPBM1cVL3rYuPNcWscbKX9xxNMh1a1CjakB1pDbTfv15BCZYRmYhemyRoRy41C5Ufxzj2c",
  "key8": "4CtzwhPhGeqVmvionSf2ZGiK1xcR99vKeNEAEnsyWPEZ9duK1LMfwCxv2n6cs969hAv9oWEw1sQSf9ARpYoUGpYL",
  "key9": "3nFz9aLEvpqZpmc5Nne2Rvx4F8DfTEc9wxSLoqFDG7yGY5N5CosPsckLTCE6Mo4Cr1QvmXRhS28uhPbNZ7i6nHmp",
  "key10": "5MUPkTeVanW4nMWo2ZFavmA5xxo5YSS8aVm9powgtLSKzn9z93pJGr3zCp8z6YUFbbWoWuUH3Fuzegt8uLQszCc3",
  "key11": "452PEZBXR8TYNpryG7rf5bMgSi4sJzBXN4V7pxgd9PCYYmU4YbUEUxDcgZMNHM6yH8Rjj3Qz2Qnc3aG2HbujiGXm",
  "key12": "5U4U5JhNyVg24WgVvYbXoX5MeL69cK7RYVhXvbGHKZYahjQVh6utbrqpALsf27AMM3nJNCRUgequdQ4wu7jdwu5P",
  "key13": "MnMWHpuUiDTdonno77EPYUGgDHXAPwYRSFwjfDaqyAhJr3AMxiYxCaKTyHWVAzobStDvwRv8hfwkjsmV3rpard4",
  "key14": "28tcoq6yGW4xhUv9Kk6ZiTZv5geYYkKMiF7goVXxm3ksbXmARdXAe4WyTTcYZL1oMTYeTcfHQarBzvUfJLZvroSf",
  "key15": "46EYf1QuauvA7LbEiqdLphHGeH7Px8GwkURhSky1wKPZirL83Wtd4H6XMykKNbt7CMGFfNS7WjRS87HkrFEqGZ8p",
  "key16": "2ZbjVFL8NGjjM5SoBnmYFCmKjtGhkTSbNkppzfGw3miW7dpsRohP2WiJ1ru2FT8WcgfVywA3D2SW7z7fMmZkZea3",
  "key17": "5CPzyDC8e2FwzaAhJjK7Vs7cpSb84ThQhU3Qa9KNwKfaoZJcQxRoymCdxScAPUXQ5zhBDpRbyEyfge7zkj7kTBJo",
  "key18": "49BswxJXvEQSmHxPraaVKjYFKn3QUA6XEKeC9J27peiN9M4PCemS9ehX8g7oWaGTs8X8C9duq1rRnMMfUxYFkfW9",
  "key19": "3zwGf9NGkbds6KjYNJRRd9w7emKV2ssfqnEtUYJpM2K9ZXpnze9rdxu6R5NwDvKwNCwXmf5F7Xe74KVaiN7JdfqT",
  "key20": "35sHcrdjPuNC7ThFuEVY19rJLQEPY2tJzWzJNGSL3HnMxjAuFHC6PZ3BkAjjAebvmhP4QbUXYxtCFTegwEftx5U5",
  "key21": "3Vr55vsHZveoXTZNPhxDPYRmidjGxsaZMM18t94EfLMpwQ8nAgCaa1oSwnbMRFZ1oJSR4eTnrzLhd9ChgMLfrCD",
  "key22": "2ggPVrv92QcJzNBbwgPVCivzMgC3sJpbJnsmwdcPm3J57Pv3x2S2kfVhPBxwt9xXgnK1tpwncndTX4HMNZKPJmbc",
  "key23": "4KL3DGTtcmCRGXHSWX6zviseJDbkUfgHGjRaCX1u4Ph4r7YZ2qjsfziiTiJGAu7TVJjqarmZJ3Gs6w1DUVAKW6xq",
  "key24": "5sCE78x67HLqxTUYmNxFKSGmSnxByge7fatjTCQSucGqNaDu9pmZKCHPgMjC6fJDXF2aFaunktvsSUf5zwUe8F4C",
  "key25": "fgbKXeya2s5Dvrw8AimYPPxPwzmCZH2EkU9ieqhuWxFxkVNBp4ae3hUackjqy3EXuYEvXw8GxPx2bcMNp9pdqWk",
  "key26": "3B43hxPyTUHpVsBd2MbjWD4PaVSTVQrX7f6UTcohuR8rc1PQ7zxCkBDysp56q6ehD6sKqPUVHGBQDzh2awFZBffS",
  "key27": "3YtMN1cRRSDdekpMtZs7AFonSjg2ZkTYM24btZV7hy7Eekfwe37N5wUSmyo5K2nZ3eLNt8FDPbS8ndRuZzm5GpQS",
  "key28": "2QCn7z1XsKFckw1wHNeA8mpVkAse6CttJnQuQPXPrtjgTyM7G1QHorYn4ueANWVRdWKmRxiRZKKnQzNPgphdivux"
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
