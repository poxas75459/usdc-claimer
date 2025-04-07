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
    "5276gDFaQDkTGktPD9pBYvpf8xAPRTnTspuZ3tE5whFQnbrarqGxLhCGwNg3AAqhH7h44kJeWkmHNaTUcM5pngxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnJASjeyknLYnfxkEh4p1KA4c9iGZ4v799qJ88vA6tzY1GbFWJGvK1exHj1DHoCKTrL244xGadb3yjSfc2EPAFk",
  "key1": "4RfAXjZqsYuFtuLoKNgiPPhFt2DAKhqfV6oG6LTo1LJiAueBcb2ZQNTQ5XvNZZAJjiHK1yfhnw1AAaifMMkUhNk5",
  "key2": "4QPm3FrAHDgwcVZCFnNoYAY2Zv6EV6LhNGSTA469nkxS8Jozscf11jwNGQiws4JuUgFa3cd81EunuyqqhEXpET5F",
  "key3": "5v9sPAmiz9vw9FXRViCX6RXXJ3sPaYCPZFCsWABL2cxa1L8qHLzBbTxE1gcmPcmFyZdig6HhP8ExC5P615TAynKq",
  "key4": "57m4CWmx3q9HzEksHvq7Y3ntYTtGS3tRK8t1wChNYi8CpDBQjsGieuHwKSv6w2uqb3wZLx5pV7z8GVZLvm1X67AB",
  "key5": "3zGta6tPSbhZTh4qAYPd36zskShPtF3ENbY1CZvG1bjrVLUEzP5b1fzwJWejN9zoWUt1tad9YuppsnBg5nECACdS",
  "key6": "2YiogC6cjziTbe4DnVgYEXRsn7bG8A3rFyWDULDvgmYeiyTqgNJ2eAmrxZH9vRD36wZuPUqnnmQKnKZmf2j64f27",
  "key7": "3LbYciB5tPKNbXkNxHbJHuZxpHKKaPpvN3RFNAoYj9rW68jEVQbsSS3rUy7fGNcuVGo5N4EsmZn3SDVX8R96hqRF",
  "key8": "5j8WN3Po4gfBandEDUxcpJAYM1hd6vf6WbHyeHqCJB4BsAmPsxuxzYz4pr1e2g6BycuAXcSZ3FVZtXiUnR5qGDEd",
  "key9": "2jPuLADMeNBpcGGE1RWWhN4gLXLiAZ9RwnZ2dWvr4NRUku9tYASsWZqwzHopDZrntQ7iqsh8DAs6uvd7Ehm5QpH3",
  "key10": "27txed6XTtsTNm8Jk4DzAsW3TcmdyAjZKFhPBYyZNBywvQiuwwYdBiRefgTyoZLDBGxfEDhQBdTuQBLitFfvGRnX",
  "key11": "NDy3Y8mneHXLro5434VszA9zP25Y5NxNxuh6zAqmhnyJ9LyHqvGdZCdLfEhUcexVCJmndsancuuT3m55iR9DDFb",
  "key12": "QJx4q4smaz1WCYpeMj5LXekWV6NHqk3c1RJkoWaGTHrLERmALbTHh7KJHMtEYW18qP8u2N6sraHqpjMCxddJoFL",
  "key13": "2WoVj1M6R37iDDmdb6trDqqStRdRsLLR1cCC7fdFzmCx4iB4LgzbALTb1SZFio6m5GHp9VhCNguFp3xdAtYHdqRF",
  "key14": "FFLEQRXcFsPUw4cCQ68hHX3X44uTAxx5wfKYRjhciAiYcNFHcLSMXc7ErddKpksBjq4BeVA6pANue6nCe4cuXMU",
  "key15": "374Epu53R2Na1pvx1VUrMUFBPb1XEGkWa8fTCdLkm49mKCYGPEoDwp9LK918EsQbRtDGp7gG8E8fWFMrHCGeMWTo",
  "key16": "3TkVucpyzuhqfvLRSEubrrNzwRLeNTqreCeqpAUL1Ph6i8eyEwaz8q7dK9aCbd97mLrULsmXW4gVM2xJpH1Vwrh4",
  "key17": "3ivAuwubydfoqdpAXRB9XwxxNRSdrLhiLvh8QtXN14w28jZu6mTHKvTk2fteh4BpaNBo5FdyWoZTZXcrykvDWkyK",
  "key18": "ZHFGCV2w4w4gv4ys1kGRQY5Ln7iR9FspZCtarNJ333dytANoBorSoqVtk155zzBkiC194qXd8nkxrzgaSP9KJjP",
  "key19": "2nRdqXGAHNLWh3BLqMVBYrY89PLgfTQb7g4mo7XVNi7BYx3VT5VmMLG3fEcSJnDZJbenmvKuKP3y2zo9MtZzzYZP",
  "key20": "2ysEPLrE4hY8wiZaqbeUiuP2vskRZXiuPq7QWAYzZs4NJQDamzp4B2bd37f9gjGAdkZfVPUKQMGdJUKkzgJuFctt",
  "key21": "4FPzzL7yUHXuaZK4h4b2FUoykbLvTJZogxLXzDncfG6HNRVF14hFhxFF2KrJgKjTvn8mrJqjdJMvWx33qSsdnhFX",
  "key22": "2WxHz9utFbaxADiy1dZthxgDWxe2arEDgvQ3sWiTj4pViu7wjt2sYFTCny734Q5BAYzw8wLLY9HngSJzTRTaxQfU",
  "key23": "5fSS5aqMeA26PwwzT3AudmKTibDcm9wvG8AqVwbMzMfriiaMJAnpzupeKNXKftFUQJsUzdfid5s5WeqvDTyfpTRt",
  "key24": "31SsXRyn6zTf3zGiLgJoX3Pa42NgTmpBWfzciWpgMigvCJFHVtW6YBgp22a8qzmYCzLtD6xepNv9kd47ejdk2YxU",
  "key25": "4m6bBAHspbFVvg8jo7tGReXHJJJAnW7iTP3RSg4352rsVdkhZsLstwzYaEvnxqC3BpqFJEzkKXWWgV9t1ya294h7",
  "key26": "4Vas6AF7oKd9LzzAKsVBDyD6CDdst41PSKf5tX39VFqJNiTiMyuwKfztPWoMDm2PT7apK2WkdNNLVTMzadEjZLXC",
  "key27": "2no3hpTi3S5n2H2EREbzV1pjtwS5fwpe4ro3UteVpZYLm6dz9Et5WK7iCTQ9YwZaTgKd6i44fNorbCkozfuMwDPh",
  "key28": "ifyezJXJF7sVoJY1Yj4gHi2YpQSJrX2MDJwzBPKhGUrxZgr5kJej5AKQ4LkPfWNLwENyPsgK6fdCXBz3uxH2taB",
  "key29": "2FTiiF2dANcT4bWDhp6WZxBTbjgQaoyyMMqX2PN6eos4JTyR7mjqqok7Gv4UbXA5G5sW6YA5KK1Bvfffd3nVcKRM",
  "key30": "ukVX3TYRrvABnrAtn79eooW6zKqmGPcNRb3Re3X3z9miCbguGimYRyRGLp2Na95CVpqu6Xwc7rENtPxG7Qz9ydj",
  "key31": "4dvHfvH232npbnatpuYjpTBDpfq9Cx7cnRXFUV9pgg5w4C2nvVByDHZacG4gjtFXe15xWwZCdg5HNpSaJbYfeJwU",
  "key32": "39GR6AXnhyraaoyFKWQmX4xctjL6nLex6JVMeG559gqMb82Q3mcYgKV9Zv1JvZYVF1xZHvioczyTCeQzD6mcrFaR",
  "key33": "3EBE17eYK7p858vqCLjSgUZrvLQ8etuAm61mgxhi6AWSwQZsC8kjYunbJHNexUnnTLnN3JHfWELStXCvmP7NtS6s",
  "key34": "3Cguh8F28YBKfvAJHsSzYs6ggZ3mfQhtexx26FpBMf6EEn5E5eBkSAnwJjDEKoFJ9E9wkhoQ6ypmT5k7gWu9UEEe",
  "key35": "3nrZADENm26DB653J6LmfFCyMfaLnXHgsBLe549NfLNESFWXk3hbXwjVULerKjbbFaKHNuQgQ5EpNbZWTaZ8Gebn"
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
