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
    "59pKTEY81wWfcnQ79tWvZ6MJyPmP7Ec7LRRMbXzdPLwwRMyTC6z5ZH83yT8Jtd9TG6HpvJFjoHX4yDohYSVg5xV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Th5gpjWWqLChLbUFU2HfnR56qeAtSzdnJEDhxEYWzB5BkEi6yn1S3QaApTKZXERYgHLpDfC1pQqzwjLt61E7bDW",
  "key1": "2q5xQdZJqN5AkjDzeus48h4j9zpKWri1bL4gNjn7pRvLVh2S8B8wdzG31uhuCxrhzYeVNRn41vfmqiUe4hDV4bn2",
  "key2": "3UMJ8E2wNKkYvQroXY56xwYiwGUAQBsVkHrGjFHpgow1HTt8yTXqBFg8Te12pzmcyuFvsagVyj3TzoHv1TB3hiuQ",
  "key3": "66BVBwuAVjuBfKcLaYmhEtAQyhccvJwwqXAUMKy7UfFMRxTB2d9EvpWczYrgfhjE9a7N65Wfr1PUekbpoiGHJP9J",
  "key4": "2SUhiJEqRSamuhYJBjvTfzz3GbeecDwJGin1spiFpzh18KazFfsLkZxfCYm6mVF15nk6qAuEtyyK3WmVjMGaNNQX",
  "key5": "3BmHrmFtbR3N2u79UThHVVdVKYPPnsoh8qoAMNMyedNMSWEzgfeLuQrwvqvFug87D7bFazKt1m3hdTCvamh6rZ4w",
  "key6": "4qukmAU9Sja1Y37Av5jncX8FD5iN7MhoPAPsv3yfndnMdegAv35SKEqfpxD4MSrp4bRz2bU754fWUcCbFdSfwRA3",
  "key7": "2WASHtmDgsQwadvUewyACRK4hND17sBp7oyCqj6BNnVva7o66dt1Po9xwCDWp9BrMbRkEbkZeutr9YDhLaE6NQWM",
  "key8": "5hxZ4nE3BDE8pARzQ7GwBGQNBGn1UyvuAMHxKV3VgeyJSvbFiHqyFxBTfcWdJrYtntHCdNpc8jgkakEh1oPLaDKG",
  "key9": "4jm4vEa567xcrAYUeGtBeksiGXa5ghZBud97XLPEKfVwnLCt4jyAcRXffzENCfs4HZg16Xe5ypiaYVEnEzbqyZtk",
  "key10": "2GQeq5XPWzjm9K9F34TSnwDFMiEVzzmS61m1pqSqSmm9bS73AYciy3NnWYaDBVF2oc7WTFs9LfLbuQyL41c3KQuw",
  "key11": "3Kx7QDqwCGEbHb71LFfNxdZmyKhdMd92k3P59CjCzT9q7xhEeGqXAEW3rxWtMzqBYJZVuH45pGgv3H3w97U3Xvzh",
  "key12": "26LmYaVnNQV3iZYrATeBoU64yFiQMVoGK2NaawmcHMWsLJXHLzmTbmRoLnQyrkxqU2bAusr3WBxsKtnvpmCdb5yn",
  "key13": "yGp3ALo4bFpVGC38zRybxGAyKRz5X9GcJbCB5gcy3Q7r14rVKi2Bft6SWRs31Pg9ZgBCyGrG3DaP7dowmvpyS3Q",
  "key14": "4gyfDN8kVbqiMWAFf5PAja89cDm6s6hCPw6xVVB8TFuac7awAXya2ysAapNYQCfNMgt5VMSAzh7R8cNixroV6ePo",
  "key15": "5gsdZGS21CcegBjfqkPGh4MiAktPiFqFcU2qrcMehzCLJ5CMv9rDJEm5Lz3mTAdVJwgNV2pBE9HBzP79hXD4pL3t",
  "key16": "5kEDz1xmLhzpJxqs3f9biGpoQUMfYoHD5P4VZLqyDtDy55zpBBwq8payEtzNSCdz3i6CxAuuMPMsMHX6htCLwAPd",
  "key17": "46AzvH7hHqUXtritWoPpPkEczpjvmKZ2WXUGgGrASW3w92opv9WvcPRZD9bkr1rjn9R2f56TnNKBykpGDpezqKxX",
  "key18": "dYyQZSM2GNXgb9Uxxff8qmVuZpQtGQBrTujQG4Q3hCgSPvDB3RWioiFAdVT6ndhoeX8M3ZXDcinjdeDrAd2jwMy",
  "key19": "2Zu7DLefWBquPmqdjzhL9MFSRpGKKJJpu89bWC1JEx225PyUAKpYqdcGMZ2SP4zwAcHSPw6sYVBfhXvqX3uWswi6",
  "key20": "3gvZVwgiZdXAiRVBPAbttefE1KQeaihmuQY1VRjfWzbmm128QQVoBgFVkez5eHkrbVu2kN6zs1kcb1WDofxeo2h6",
  "key21": "2qrkPiqbjmnf8W3FytZXzZcJhSVD1skYcW7v7pTVcbefu79UmSWWfxEFDk3Ps3r7w1bA7Lzw4gtcCrVUX77MrMFS",
  "key22": "39MtdvBijE48RdWYeYm7Gmx1EojMPQY2adLtPbTY8bxkFQGcxCzDDCRrPiB8BLnR97Nph28igqLL9oAgPy5qQwtA",
  "key23": "2kZvpuYYD8W6t1p5d9ZbhjwLDBEibvcZkbQpSJqLC4G79gbSceiqbSTFVh3ycBm5qbMpU9sbPq7FC9Ta1sBbTydu",
  "key24": "5oZBetMqa8DsYgRNdEBPUL5vY3bn4M56y1eD3jqeyHM2MNR6Rm94nhKBv89vdUaxMC8vjmZGfw9XcRg15HrwDoGo",
  "key25": "3izdCn2soLgwnJxqddAUuAN1q43srnAtQsThyXsYJeVP8hXpbxn7VRNniRCi3x5qfEL1F7RqDyd2L5hsWqCYzoK7",
  "key26": "3Y19FxDnq3Z5QgRmVQqVbjXRwGxXWh1QsqXbWCTWaeRpjFPwgdUkpWac7E6d4YfSz3Tmem5dxf3c1bHLFKgEBN5R",
  "key27": "2myXVG2aJ382UPdfHtLkYWeZWnzx6WbfJSBUCND928r8LxP4z4dJLfWzpSc5WFXNJMS6bos46oej4moeB52dMAFL",
  "key28": "F7zetF3Pq5ZE7VfUAhWwy7fH4useF3xLqDuHSs1cXedJJjafA7u3QY29y6dhaECGwz1L6HtSRCJ3feRWVGcC6no",
  "key29": "35PD8hPiD2wDwa7FiosnATskGMrXJ9dVV3gNAqwdhfZcSEGskqTcsG7s33NeKW62PB5uxXQrD3htDjpQAqrzcdzz",
  "key30": "3oio755nVLJmQq3KqVoCLbKx622mgdmYpvBjPEZBucq7hwmsCDR7pq3vSgwWg29n38J6upLq5KQ84QWubf19mnZy",
  "key31": "6h2BVC6QH879jjeu7R5GQ1kWyLoMZJq9cmuiG4vkPj2rzDtsHsh81SvitNcqiDN91G4kGVcXzb5CJ9znyVvYr9s",
  "key32": "31snoegHtT2wwXGhyZmaxozSxDLiCrBJjGmCj7uKdgHzFgJFraZmHFHJa1hT36muL5kTM8h5RTdVxwZShcbMuyfx",
  "key33": "56LWNtLksKQeWwTSCd6nCb6NQQN1sVtffLzzcV4b7XdqexJ5vGiZj9tgHAiKsxV2byXE6pG4vNxG6qxwUKUsY36W",
  "key34": "3eGs9C2JAWb3NMLQR4PGbCib7KYtqKkRHVSAagKoA44hav5V3D7BPwxGb3zq9dBgoq5J32991DQB3om24EtHhdgG",
  "key35": "2hvKThKU12ha9hMXzrHKVasivTho331hv97QXZPKLxuEoKaCFhP3GTNxVeQToZTtYpYn9aVhm1gHRzRnEyzotXjk",
  "key36": "3MWygPvjyrW9Szn1HabeGjeVMewT75wQJ5HA5SWSCcTWjhFJbikVABKzgYEZXHX9tXm8h7FNFhfYrdGKyEL9tJyW",
  "key37": "2yeU7KX3p22ray5HFx1mcr7LkTnfT3qSRgACkbF8y1BKxc2SRUUNWaJs2sKxH5Bn6CHv9VWEkNn3Q3rrwnooyXQs",
  "key38": "2o2yvwvkKKxUHTgE3RRfgTLBTM9bE33aLUphH2du1GBqFHNPa5w9uNsA9ZNBJ5urfc7F6WYEvEr2gs7HRwwQYHBA",
  "key39": "2PA352WgWrL7YxRapgkTFGEzgZnW6BVGzpa2GAsgQhGph1f4jSJEvu6bKj9C4X34ZLvpKKUDYBBVBQauRqS2CvyA",
  "key40": "2VMdovm6x9wjt47fSnfTbLTjw4A1wE71rPtXZxFyCcASg8MzWXBFYAzVi6e6XL7e1ZKockB69KyN7jqFcJBobUkP",
  "key41": "2GHaLccCcj4hLvfLpG6iJeEzaTeyvVzSEWPhdbMHQA1BLqfLJsFYmqv8MCTrVRHNFgRtQTUQc68ADsnYLV5DdNsi"
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
