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
    "3xiaSBAPpC8iGK9RDwmNj5nBdkuJqx8twP7zi3hi1d55t2F3V8p2SmEtDCiCXSq3bXxntBJKFHT6XPtaivBzmyNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54iNN5cgg6akgQLG84Jkm9hdVfy4JrHGmtSmcWyQ6Ji3P9bWZnRwgx5wkonKkoEABMyP2XKSFjJypSCMU6fG9VQs",
  "key1": "54zirCQYHPxbAxBwa7GYFwNgRR5cn8WMHUynZSyKNUaNj5hHTaYvnpEsZbxJ8fkpvojtycgsG37z7LnyKMQpU3Cd",
  "key2": "65r5XDmF2Vq7vs2sshTX45guVDfrBN8hbaHC4gs65cr3FeUCXGJCh2cBMc2amHkjiaSWH1nCPuUPwBnuJPW2495f",
  "key3": "2BXAsVKProDvkFMDTgLg8jmJi68JahzfJmphZP4jiJTu2aG2TUjnCS3t253egrqj36aStycrd2Yfhe16URYKyRj3",
  "key4": "2R5BdBcH48xbSfSAudFMkbu88oJwJ3iF68Wueesm5nbp3GJk1mTjsVHJdFQKRS1vZoay7n86AYwzNpRJRKb54xpR",
  "key5": "3Q8JPD7xEu42GWVvFpkvvgVNmBwStWyRKnH9oHyqgEVqDgeDgyM8ApTM2Rw3UDTiRqu7s4m3DKBQ8FkUcF3FZXds",
  "key6": "3DVqoKf6jzT1hPhADXjf5jdeDjoPapnjffQkdUNGSZb495fGXdnBHSqArjXofoLLYXcvvEHd9VMjbCvBqPJ7XNKT",
  "key7": "435iphdDcRvZoBB72MVb7igSYiWnsCiDaVDtzntEqyiKMs9Xsohui7soMZkvaH2JVKu2venxEdjykqcYCRGxuw5K",
  "key8": "55WJBip29ha4opXGb9Xq3eZGvjJukAoSYuzX3etyqP8y2k5HzSgSqiLuDDdVB3RozP2MtNbudR9z1G3bret42sJ4",
  "key9": "2vn2pungXwBp3jYLzw9rbbSamNR1nFe1maoRmdjT3wTtJJgpD1TynZYr2dY1op7CGT8QKGVj92vUxeXy4sNad8An",
  "key10": "2cuPS3E9oj14ZpKXHJDim3Pw3RciKBLDEKx58QTHLkVZDisQd5Z13ntpKQFw5M3jns2CBaG2gsPM8kHzXz22wP1Y",
  "key11": "49Qv9oKTTXUuTCcoXP96wHiuVU4od3cTTndeoUneWzPoRYMg9gdsp3HgooWoerXobiq1eN18USzgp4NdoNubLBpo",
  "key12": "dKfGsNfCKgYsDW9kH57SwCHTJA2S8MyfTiardo8YPXBxqfJo6N6xTLLQrUviz8zKRezKX6SDkdpPFMyC1JvcmcT",
  "key13": "4Udm7tc4WzjpsNgi4mRkTEN7GNn7bfyGGH8Y7a46y77TQFG1qBco8EhTxrAw16w5Joj7RjfcKi3EjQQNSPa7zekg",
  "key14": "5uRKwKNFR3XvoY9ZX8NCZbWohTngnJTG4tev4ku4iqCkhjqkuX7WEFcpmPMVgVCzQT9sM7ktGeUiszuLEW9REHba",
  "key15": "4v5GepLJNvxpAKuuLH6kTHqJ2jyZJtTTG8egMMqMRmDnLPo9UjVqzF67BEq1yyVimptjGxdC2qmKj8mHScZTtGNZ",
  "key16": "2rEKjdAhxzisn4tPEt2eQBYTnzMjzt3XY3NVjSj7LHkwmp2bFEt1vmVNahP6RHgViC6kNJnd5NGKPW9u2kaP6CwU",
  "key17": "2JriqNrT1SE3Zjoe1RcDn7iPqQYgHoSeGHAfr1ZqpdaW2SHGMSteUrdXJe8nsNHhWDDUy8oneWtKAYqgNhEFuYS2",
  "key18": "3QUhRE7NEz97gWJ45n4abVEoqT2SoMHuuFNNSP6FFNnjmuvkD8xj2FZrGA13D4oYBjCh1Wm1MSXEv1QDKGeo6nY6",
  "key19": "UiNGe4EbGEreTvxEgTTafTEP8VkDUZ81t7qbCNf9bDRo9Ads4BgJfd731qtofzKEdkoLrim5oDdV4LTNpWSPRSn",
  "key20": "b7sXppvWLS7hN1y98GUELDVnknFexTNAApK4iiqKB8zQmc2WBaRYz6MeYhXM5StJWrEPdSYzcCPd8oyua1jKaSz",
  "key21": "4ym7ee8oYhLUuSdAnRFQ8nWow3JzdwCo3DqAmXEzBjoG6JuqKqSSRo5JPFxe97pdTRrMusfAsEEHxieeRoh41Lta",
  "key22": "2pUhkrETnaYZ1jx3YihGfcmCw4hSXMUy3tDLmuj7ygTxm7oQFtp8z6Xw7HZKQhVUBsTvmzsWnADB444sWf815RLW",
  "key23": "2ARRQNPgqs8Fwa5aEreUztH1R5yX7iKuUwqb2k6od6ZixWb1HsUab4Xq61coJi4geCBvk5qdD6bwJxej9Z61LnWX",
  "key24": "5iDcpwKWYpCV8u3oz7XbYgsK6Ys97G1FPtfduoHRCijUfvfabDRju1KTgc6ecdk6r5N4i9CkVXb4ZFrDygXe6EHM",
  "key25": "5nDC22zexYEZo6CN5D9n5NVjKE7xR9GPESewGXwT2xrftsr59SB7tLZT9RxNbpy8L8m6odCS6SfSg6fAppsH4pES",
  "key26": "5Yc9MQ5RxeCFeYHkBu191NM2YdmALsXCTQ1bCDJchAkCyxiw8LByTGG99VRnBFGDZnJ1ZkpTXjsKkBbrJct7c7k6",
  "key27": "2MoowTjpZDCA6FHi4SJv3x19X2NdkCLANibWSFxFUVZkzn1XUrr283z8a6r6yT2SobHp86Ysmb5UejfaR5oWWg4q",
  "key28": "pD6vzzrnAB7vpSRtJtxNGCm2JaK1gd3A1mD98kuDskyuHNUrFrnJ6eVm3uEJEn2TbDdLbpNcS1eU9C9uiA4CWfD",
  "key29": "4P2HK39T1DaRXiQqMNWXgnpKGykc1yCUGBFG7yqXXVCmGMf9JPqGT8D1JW3oS3pGE1DAZnqcKm1AzJtwEcGF5YrZ",
  "key30": "5xDopp3duG3YXX627BkGkvHEmqPxEbWHrgNBPYvYmeQJdWhpk6f6EPxhwpgyh6CDEbDVeoMCmsi7SvYDFgNbdYpP",
  "key31": "5vnS2orNucNxE2kJNPHCtWkdu4uXwqtG6R1Ch46ykcqJcQSjAD42HzRXgwmFQ3rygSMSxFjThVmuw2gLxPbj6cmw",
  "key32": "iu3LV4Qe8vGkwUhEN1U9J6Go4px6G6uTCGFQNEGzAib4guuqRe6JtDrMgso99MMqTkeb5sjMggasnT8GbAYjkGG",
  "key33": "5TVd2PgBgSvMzomHnH3rTH2tVbmN5pbgGSfzpLG7LdDnBrqYJukkUvDfjQdDrgnN8acmHExhHjBy42oG2NJBq5GK",
  "key34": "3HQFM9qNMUbLbDaFgKzS1deXkDurRzNpWCxo33cJokgZZjahQNBL1wbDBid9dQgWXk11DMJkCQawtEHvtmNaMuBw"
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
