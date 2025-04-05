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
    "2rbbXbfAov5gphnYPDUqdwAay2Nnvws6zfX4qki3hUNacaj2FrHKJaCDXJPnfM2CAQYmjkYXeSR9B956E4BepTj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aY9uxCAT3WyhC9yqTAYGVbYntteMwX9WmT5WF3Uc26DiGcoPgWZ2YdhZs1Wb9EoB9JA3iV6ThokV2jS92BizA4n",
  "key1": "wbh4QCPp7itoXrKTo79gZ81Zi16tAyFQPmj9Wn1SPcc519RvGA7uYVAsFVeNr3omhxJmZqc6aT9NY8VSe98CXVB",
  "key2": "29KJcVK7w95gFu1uSQiVxQ9MhFkqNZwN8ToJn1Kku5r3yz6CbJZtjEJnjvQhtRjhMW6bNzf8KX8B3sBgW2erEArc",
  "key3": "5dEEJN4YqVvN38KuEY26KT5gkq5pG9UDwsfwKozerhz2jeTSWFPeb8X4WWDAugLd49TtyH9UGMdXX7dTC4WwQunu",
  "key4": "4hTectrbKL6uL113QZRuBGSub6TpJnnh9dcEeH6TkhPSYY7aZhFSwkomNHv2JNDcExsMgUiCbfgGdFuuDb2paTF4",
  "key5": "2cw7bdrYfuMQ7RKgoRP8jXxWazDpmjDavLQ1VT9d5gSZpGiweQJMR5kAGiFg8im3Ffd7spi5ZxSwmC2p3jcbkR3R",
  "key6": "32NqEeNJYMTfbkqXe6gPwZBwU17zNehSegDkPmAfsGaU1LB3ZczezJZQA7FnRBM25UNH3JfGexDynNvXHE8KARzE",
  "key7": "5f9dYiGTNPUMDxZFjw2HYgRcHyAWUwVC8NiHXfE4LSYo8toMdCo2VvCoH7fX5JKn1J71vVgEa4CpoTP8nVzsK4Ki",
  "key8": "4G9RKGzfsnSuySVdXocz8tFW2UiZUoFMa25krnqF3diSDy9jMYb9Mqb2jnoLaPZwrMLuf1LT5VZxJzGtmTyNHN7Q",
  "key9": "2C6eSGokjLqrN7cu2BLujuzK1qKvkNoqXxWHAmU213ZWiPCH7UwHNBdr4RU2rdyRgX7VSVExRhre3DF8sESrVtPR",
  "key10": "2YVcJLyrnZRDUD5pZLbaBUsJJTvAVfirqUr81wyxBauxmgRTJjCjoJbnsUrueS6uBmBaJdLE2oFxCh2fNtv1xLa8",
  "key11": "5XspsQDorPVRrPKL5HVoW5xcPhnE1zBcmygtmzYrYcfzRD3kwbg2MHqWR3GciYhHpvE42rkbdExkCFQLPYHfYHSW",
  "key12": "5QZ5DRtKW3SgumzSJGKDmtuVxp4uuNTCDn5uDQJhJFbTXN19SRYRFxxFRFVnz1dfUzMHJqVR3ky863ix54wVNgUz",
  "key13": "51RByPT5oE6r8ENPUXhwAtq8ZnPSuKrxUviAyct3DxmHtu4K15RwZ7rVLf7b8zVCwyaQgf7nCobEBseM2ecj5qYN",
  "key14": "3BmK72cJtiiVRpM9F8CnsRNagv4cduXqeeYYYcdcDEdaQ2e1r5t6pZHqZuG4dzfwsCj58mdg66vQ7VbJ2xcfLKAF",
  "key15": "NqFdW7rBoGGGhZqYmdj9KZhbb58gyeAh5svZuLCZ7hYPf7Qx9TgArugSav8vkr8sdxUuA65nruxHV5VXkjURY6p",
  "key16": "5zdQehcv3zbAVrS3TjuBoLdhEiEMVxA9Uu9iKvaYK4BgyRPgTVFkFPSEHScFMhS1g4tyrmjgbDQT2uz1iJ2PcJ3S",
  "key17": "4zhd8Kh8SnNNPUEEpvAphKrL3CPSdR57TV1tAhpoURwdk4HEC3KXndzcCuySsgBeyMjkkT1WEF15aWvSK4hU8Kj6",
  "key18": "yKqpdVsGv3TSYsW253wrckdtBJNrGuCuQMemXVXEbx8jZHL2y46SCjboRwZJ9jgZc9JAgkD24Gnmk9Mi6hxgwkH",
  "key19": "jempmYdaPbgTY5dnkDaiCrWLzTWrZXtK39NEE56svfURSKUJiTgtQLmTtECMNeP4MFTitsLQnZttDn4AigZvdPg",
  "key20": "5zjLJUrTED2tQz9bmaE1jmGfQ3cqW2REjSNSyDG91WTehcGAfYVML5DDnXesNS5uaSbnCTiyYru3s6JVxrunUAPB",
  "key21": "2vMqYp5v2m2PARZgBPGchzWc27x4g3HME1J56cDbUynPiAtV253kHdqxdrFHi4brg7pcub9RdZLVHM6nJortooig",
  "key22": "2kPMi4pRqFGEsZoVG8AFAWYD19Rom98M72Pa2EnsuBcjEfd3Y82kmowL4KwDp3JYCvA7wDPuc79RZUmHudTfez29",
  "key23": "5rhJTh4v54WTqJS9PwHze2LeXjyH8ZhboVcrKxxqwSseWE1XJza8Fu5beQPAt5tHBgtJqcRdiwyKEMf1D6Gf7YXd",
  "key24": "3SxF9tVdtaQhu5Uy69X5r9rbTgWqtgm2PHcpdqKvpC3pmnzc86or2abL9faj7wLS6xbGEzgENxpq5ycjXmmQ4hS7",
  "key25": "596e9QaRnqGBseGeVFw2SXxdPiorQJzXKEwywSTv6qv4d5Va4BzC9iZK96vQELZdweiCPRwbuK7FfXHTHFg2FSEZ",
  "key26": "4aSVTbHKhfWbqnARR1Q6FHRJiKBq7ucbVwsGBrSUsdBXcA8vzvH1XTrifue9FLuzrxfeXXmAECpniTxYB5Fx6TGt",
  "key27": "YxJgE1t4JQejjz8Z3tCpehqJH1v4aupj6hXPA96PK2acfbcB4V91TnKPcYo3yZLMjy24uzentgyxNbn6zvEkj12",
  "key28": "4VvPbqgec8WRe3qveHqmiK1itE3Ufzc1rkBu2wNfvGrttiMYfty78fN6xb4yZftMDcbnHTR8mb2Q6F3VHXAQT1Sj",
  "key29": "4jKhwYM1NAhYY27aRDbL7tMUnMMDZGqyQqYEWJhfGg6FHFnDrSHGZp4LrBcBYNHp5TnvxRRABCEKZatnR7dgBvyk",
  "key30": "JQ6cuoEWtqFe4AeT8W7ZbrdKTgv72xja5xBLvVmj9JToivFvfGXb1cL8bLmG6wanCSjyv5Lnc6zWpVUohbcmGVA",
  "key31": "3ZYzAxocDuKfM4CRLrYffMqWPtfj1T3eoJKLj4ythCscTrtTj5KneqsubiJkvBSf1jvo3uok6cKE9QNDjPS7gXmk",
  "key32": "3gm4c8i2bAab5DkhSuUm4TXci3c6ABbXVAwBsieQb48Q9HN9zzJUFrYLfP9b2y51k2haaXmFNvpU93LkoNih6pRU",
  "key33": "3rh48gHW2YaFjfWygTE3iLTrdy76obrzf2TR6txyLSHLne3Hcj5Zk2oZd1xXeCqzeZRZuQTjaGc4tB3T9VrhjWRd",
  "key34": "4AXGfYKVUEfEnMKMdqwHFDXmUgHg4igVGsoMFdK9axgqjuiocSvLyTdTjfN2gTRrvnR4GRnZGB4ZMju7mjyjK2j1",
  "key35": "2nS6YkmBJvHdj9PJZ45djrPQ7Z8FRJSyyBJoCgtyj9gTTszuVDhyE6CrnpcUohv4kF2dxDFavChZRm6MJNXHQzL1",
  "key36": "24SjPFXZDEnH6Rqf1DUjBYwNp2kpWSGteLgGjF1ntWK7A97FQL3iQxaMqQngFGB6CfWNNesX9C9k2tB6Ryy6Vpur",
  "key37": "2JnLhRAwJuRhbRL3vK1J3TYUMAx498DhumoXNYVxZvirkz2914mPW77FMihkKR1N1new9gXxnPCgSptPQrpHt433",
  "key38": "2Pvd5buCrjvrwxoHbJJQ47DRXXGEZArGiv4kW8cAqneFTmx97R2cT5eosL2E7dKLjyMQ3XamYcSxJg1AL3PyGtfz",
  "key39": "mA9TXgBKS2fnj71a5TKrAr23gYYoDeiS1DukNdz87FBLiKPpnzT7DYDMmM6bg2BHQbPQfo7jcpGW6Lr3Q9SLJzE",
  "key40": "hu6XTkzq37LYeYrWVLymhmyWuJGbzhniTmec7FJrsiPwUeivesX4KGbgvuKHiBBp3DtuD9t1UBkQx7PRhMffmqT",
  "key41": "3SSiUVt8WHK7F73Yhzybv9NvdyDYMTZq4shYdSVQWi6hTfDKh3QCcJzrmEZ7ZH9FBAKBd3hM2SDD2h3DD2LfTpRY",
  "key42": "2JBuZSF4Rr522UKUfJGu5Rm1xRodpY9rgcKrP6nZkFVx1U3UZ6dCPufXLUrwStPf61C7WMUr6qFztZSqm5k3rEHH",
  "key43": "2qrYDTHrvWs2uacJDkRzANbueHfBA8bHM8UuZDfrS4SPbpoNZARBYgRFbuXYCpyRfUNCbZc1ThvjqzzVi2KJnoFs",
  "key44": "5nJoF5tYdnd6r3LyEMuAcffVsRFqgCRurhD9RpLhYcuvetfjNHnf1taZN8ipH9R2T792DM7s8i2Kkzx51CzpG4rT",
  "key45": "4xvWP6iFDVoVo92rTKWe8mvYVFpdLCd2qvFuRvQnjjonTt9GcME3hFf3XkobBhwuh1iipgmTxnKYWzWaY4UJt37n"
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
