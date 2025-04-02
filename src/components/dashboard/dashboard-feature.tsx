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
    "3TdSt19dvFowMJdFU2ntxbtuAqddk1QDqhJSGvAgkDUa2TZJLP1XBgbNXqWCG61dcPN4WanygpkivBanponFzQ5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bM4XvJZtzoFYgpsKYNDaifg2wwV5mqqyozE8JTZfdif2sFGpC5Tf8V3UHPXgwVg6CfSqA1refEo5KNTj1zekiR",
  "key1": "5pLaZoRhSLkbZcAJVBFDaoX7uzi4wkD1ua6ZcoVwGZ7WmhEkqs61vMYLauQ6GKGWESS39YFUy4c7jdgV6aXyUoNL",
  "key2": "5VA7Ca6Sm7wVzRA3fHsG4GQNUETE7M5dscHFxDri27Dz1qXwA2VtJh58Xs92qAV2tfBz7SEF3pgDD3c9PZMGvgWS",
  "key3": "5iEysSopVFwJckTuUCsTa5uaPPPiACJsS4aRei5DFbiMzcGhWDfPM3V6ZwbbHDy3CprKkSmsPoVoRtY9nhdRvLWS",
  "key4": "4uigoMW8zUCkPNkH4RsnAhgNpctkbrDVL5iAeJQctYfRg2EDKDQR9AsDCqbQV33AWNcniv8YWXHxasgTZRUiTmJZ",
  "key5": "4SE7YgwbWetiNAksh7G8gd628FqFTRK9PujQPKWpHr2PP1ZFb3JANy9pWxGLXowjQ7eAwdWcV2xNyGjSVyUY24Td",
  "key6": "331tYvPCvrrgdXfn1mkEuXQoT7eM5PH8tLRep5ifUBFdPao5UFmYpk5eXWZaUpLGPCr2H4wGg2Mky1ocE9kxe8xL",
  "key7": "L84ioXzLyDE6nXyzC6iG9cTWCHbdrskKxFcfVME1fFt1nWdJyqrt48hVVXqF5ASUn1Lj2WbsGNEewQYucT4YDjX",
  "key8": "549w7nBTGzgTD6R6a98gKSFKTz8cUs8qzzKykJuEnkUTgxMw6BBbuEUp2mDkiRpz1XN2JJXxWSRvqUogErUyVSPN",
  "key9": "2tL4bhg7hJdGCPfZGb1hxCpvQ7R3ssj8HrTCvwFzgcQgfBnmSVEohoZtsoJN1K5TvdzqR2QD2CrCNbxw2hC4dcxx",
  "key10": "5FbNeXBXp6KwxncZdaXAqCtpPt8mb3nuhWXqudT5yqtGyg8kqNeib6ipMBZwPBmgDs5f5WuG8GJy9iktWuX7p7kg",
  "key11": "Ma8aH34j7u38FnqtYYXoqLS6TaQ8iG1qcJguo8if4nYdA7ZRq7idUFviQitF5RUD1oL7CkUdtcHXwqWTTe6FC9R",
  "key12": "tmiSUkjgkKGJtcECLUr3K6bxK6U1co66whxfiB5rkYkkmSpTxbWdRbfRj4riMDV9a25cMcQvoj3bXGKGTVFVmcU",
  "key13": "2ERaRaDis24GCAU6QCTvf1A557WxVgSHXXGBTK5DUJkQTu1w79U4H1Np7vf15V1mcrEW49vxgQHKDxkXpA975VyC",
  "key14": "5eqg3QsHhb2CZp2WAxQwdHFsRJFL3NCqrPs6CtcBZnVC9JA7d3ASNvY6XfjGZMxGTwJWzS2ac6yocxU7NBAcRbdE",
  "key15": "2QdsRD9AyUB1E86S2fmHbutZ9QFirSLSXNo394ajvbRQXSPsGP4tbGkpZH2NgA7sh9oyrD7Ko9xArwvf3iGu5oua",
  "key16": "46WAeA8t5t9U1WZkBzhGy8Kto6BSpEZ8k5f85L1S31sdgjKyRpRV13WVZrLdJSiXQKpaceGgA4ay7kWCn7xJhRcq",
  "key17": "xyuxS6Nc9ZscZt4rPWjEyG4Q2DSCrNqdqcKRFPJYJWkYYG6QLzFh3SRPNSr2D2TLNkywkJwozB3sv5dE5s84KDu",
  "key18": "4UZibFEqwmqQNkGs5bLvMFqdi4gRe61QsTXvNTjJzLhHPfPwTnrAdDtxDdV2YsZj5K8snUQ82eJGGzgFv6r3bRhD",
  "key19": "4BsNxkCTHgBe22eH8n4ELJDbpWsagaqo13fpF6jTar2BiN9qJR6d93Po5F7WrYkoTXXJ63NNupnUnqs1u3YzzDZg",
  "key20": "2wRpdpcVypNR1VjcbKwTpmH9MWkpjmb3jqgzC2gRiNLxTECRbHKq9yE2A2xHTrjc58e1FbBVTcuRkN4Ah7JUzpWf",
  "key21": "2473XZDdxKL25Drqjnyv592VWmct6L1ygVyVAH5jEaovwqJHG1DApEZrZy8rTRqHUoNMTaTQ2nwCwEqV64Pb9JSx",
  "key22": "2uS9Z7C4HLhA6SPEfsouxHzrv1qshcJkmnwyG6UWF7cKH9gUZGCBFZsn7he1js7J24DYVFWWZHuVYPMJ1FN3ttkS",
  "key23": "5n29QDuRTT1g3bs471CAmodTRa8p8KdHSNWzYSn7iE6A9my45fF5DbcjjWhpHypxPJPNGG4m6CYUANFkg6gEN5YP",
  "key24": "4uWD2mj9hcCxSz79KxKqZtXvrDDNT52GqJGGzyzMRrnbFY7Ks3qRupAZwxPznpyMA317Uc3NqVMtL2FPmcxNfD1i",
  "key25": "39dSPQA35rFdPpaRhX18ctZmKrh2abuhKAxUPwF2Fq8ZK83AhXA6FZ4yWXHg2fxv3dQqWggZkH2reZZGWnBCMtjL",
  "key26": "2DBFvFzgybSEAuzar5jHuZQvNAL9jpvj3NFwKHaBS8dzsxdAVqkQBu6tbhfx2hvRotDsCFHSYLdWzw86g6zmdVMx",
  "key27": "KWmvbPS8CswWM897fj5WPncyyGLFRRnSYfySi98CkAGKTT4nr7FZJji5WJHs3x1A2GTFBiEx35MRVVYrSM3XmzC",
  "key28": "2b3oN1nJE91i35d99roNADZ5rHuJwioRknzdUnj2itUgEDVPhtWpxKfjXKTATp4W8jyjAAZwmCGYp6rX4odipC9C",
  "key29": "PyBncJ7L78wdTCnFVo93S4zL4s4QUSStzZMCFjBqtxDM7sZDmUv1ewhPx2R8gzmY23dmcEpUXDyMWCUymNKw9by",
  "key30": "4DzCkdqgY89ZeTT9tkcLYTCg5VBoHi8CmLJmGKdJdjtQrykmW3cPK4KBzKFvPG3B83Dm67Hz1hUHUZc5iuoKBLF3",
  "key31": "4hMTNTXsms9b5TV1NMSXfWrX5Thf7zQJLmaDzpftgV9VjB7X39t2acgsdhQNgNLCJfomRdftbXsy1XHKsijBMf4k",
  "key32": "3oSjakrNR6UKy3oMhJ1jCi22hh3ntmJAk7bcXLhzsQVY6CGo7gFkhbTATpie4VZj7fnbDcQ8Lh8ispnD7ugqPaNW",
  "key33": "5pTV7HAs8ARCjmB7aMM3V1rwW85fbgW7oJYfcW8xiNTDW3Wj6zP6FBosEHxSBk39pbbjKPwZeKzwdMBXnCSUxxua",
  "key34": "262CCBJ93h44P9HsRU9rmMg65nbbbUYN29VzY8TzrSnoDzVJWdN72tr3y5gY9oW57vDNMZVMHynwRudL5h4RNMp2",
  "key35": "47RajdSNWpHJq44GcTXo9v9p7ycezqBdDsjkY8AWhGpsi3f8ZouC9ob6Qrtft7soH9VMxbBnoN4ingavFRQS3JcV",
  "key36": "2vQ7muGS5XyL8MP5xtaqf44jnHbesvx1tK1oMwTAeTMooANSftT7ZWNFpKjd1vc3uXu1Me2PfDqrxKMRVDbfCGjd",
  "key37": "51GeJwwaPpsknsFFUaSt1UDmKvTXzXvgbyk46N6iL52cVwA5XKYioH6DzxZ7ymLdJjZZaVfoPwpBhyUvg98SrzzU",
  "key38": "94oDrjFp7DwT5ZfZ1dXnU7oacsbLEDwtS38b32qHJnvBi44Hxopgb6mfJ6rQx1MAQBKW3rL6UWBYY5xMzaAfpDr",
  "key39": "2vKu7dYTPVcN2bLU1SNLxLBwP5SWLM7oAefNiiJ4afwbjiwVcJmu6tAmtDHvoCe66cVcMieQz3cWN8Ez9113DCZC",
  "key40": "4qTQtJxWFUP3W27EZRiWzeXuCAVDtW2watjzxkqmaa1oe2D5bYWkN9cK9HfN6rp7eziXZc5DenmpGCCd6fW1Mn1s"
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
