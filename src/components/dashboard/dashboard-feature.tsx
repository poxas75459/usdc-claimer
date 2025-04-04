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
    "3a4VbYgVSefyUagUVwBTPycSdQGHNRZ84FYrTkuFt9mveEyzjKYDPp1oP9saDyJGBP6BSu69NUs6wdbzpJvcpZsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjQbvMWg1q95Vgk5xiyQksKbyAPqRC7LBjN12wWNaW1iEt4LZispyF9aUtZqE3RCTcqVsmgVuS3NEhyHErtJWS4",
  "key1": "5UFbCxDhKDGEzWJurnXuibvWVPccmCCiv9uoqYkaZsf3UtMrirRZ5ofgoFFjCkkPxwnJyACTN6ryRvMZWHmES87V",
  "key2": "4ZALGgAs31ULwnsTwg1wYuMgmjTeLPQBYcNvYc2GvG7hqVpntKCDHikN2gxEGyh318QtR9x1BXTmQzD68v1tCPEz",
  "key3": "5dKPsJ1gvPvwdKmHK9qenrk6WEDKcTx745hRnQCXpXztXGBrzWEJY8dBVmzFF6xxHbYRhu8jUKKP9BEtQuh2zvPE",
  "key4": "2eqRPKfMw8ehHX8EXEBSHqKtZKT9Q4e4mP8RkwJD69kSLqpir5xC4drw6mbk23sxidFYtfvYZAZSAGDBZcQNKkQ7",
  "key5": "MDGp7LvfxZGLoWn3emTVjMVy2KKpqfMpJ52ZXwX7KuQskxZnPGPWWCH96wTe5dXLe8Ra7HjjEV8WunJL4W4FTEa",
  "key6": "5YjCYCXjCTNbPLjntqDkgpKvtQR42Gj5drbN8RzfXRf161FZWu1nQqpvyX29uNQ3Tik25G7XjLBGadYVq7xvhzci",
  "key7": "49KTAqhN2YcsdJ6VED8NJeL1gWPDkGnBAhk5Ne6XRiW1XFpS7KkUK3JF6bkfn4txZYDhLuh6CLDFhMCT8JQCsjjK",
  "key8": "PaAcjpe7yeNcq91CHBgtEWP6BWvTivsLbcM7jNxaLMtkRpWAYRwtb1g7kiAGoNxu1hXEDQHfTB6T8e2LfHzJeDa",
  "key9": "2w1LGutg9YgeLKAjrQtgwTxQ4xPBU1NABc98i6dHkZQQj8j3iG7NZc2D9n5t84oSSntNhergCKyrbzm5vS5uGEej",
  "key10": "3uupgDDgdR8LttXQBTjmt1J9WoT5Je2mnuvK9n1DG6uipgFafvcN8pVh5pLBpreRMzMDeFkAfUoSxRWCPUxfPJ5m",
  "key11": "3rLB1SbvWWBHNfTJaKgA6spfGyxBDSpKVhJd4YbXaBk65Ab4x8cBEjMENoSLyF1tjBHjKAkWpbFWvA28qUqgnMwo",
  "key12": "5obXizQQCURnmduL2DMyTUTuANt2FdLUjPC5NpMkD7gDWeTKivHcJoBqmeBn7XX1YnGjphtT2SfNPZHovFWAKC2p",
  "key13": "5TQ2EbF4rSftJ8zxHMDvQqsaMNGxrzA4mSMeR7jguhzJdxN6ViuBsPdDgC3kqW1aJR4N4GSUxMJQpNM3sLStnB9Z",
  "key14": "2LnTnmCv5wPamJtjqe54ez4wtVPtSfQipYu5G69nfnTfC6MzMLpWWTx54xwcHkU5ZY5gi5b2DUArsxwFcH2ZhTMT",
  "key15": "zccd2gfLzv5D9NJZractbSmUCwM9Ya3BY95Eg7hMjp2Ltz4ukSa8Ei4dywbQuXHvFqULVGgTZPFpCk1w64LHSTZ",
  "key16": "EQMCckmJBnJwyhxj58yTWgF2YRoEjBmEZC4knVP6hL8Kedom4pcjKMT2rczSw1hCLYjuGNqtQJQhGZ22E1WovFP",
  "key17": "5HYobLSBGYewVzzV7aeoPccPi6Jc5aeGd4LvP6BNkxNTLqyMYo4D9TWnpbZTbimXNuWiqaDBgNUGB45rwyFXhh5o",
  "key18": "5jmAqpVMN9dWuS35GDDNU55P3zzUwXFZc7VozMDnYqw21NuRc7MDqJKuLhfPx5sKoStW7M8AgGokEBzjSV4tcQQP",
  "key19": "3GErsK3s4kJ4QAMRRps8X3ANq2MExo6RwZqNptBLWtFPZPCB1151zt9dsKbWtKzactx4xa5Egi7ZJwUkbWdgNifG",
  "key20": "53cL8Xra9C156i56rDefeapHHWUZK8hnRJZXQfep8eTnE4ibPv532Q4TfuKDubkSv57MXpZesW28uZDp4jeEFr9P",
  "key21": "5Aqydmc16iNZX6mzEJkvjiNVm5vxEBeEKNnNPFqN3MJ5mtgapw3P2PjjMpuEr6EnFpddLVkweu4gzzj6DQX9rKos",
  "key22": "4PN7hDkPC8K5STLtFPGNG65UNmUo4nNSRPGzFqDoPL7F5uYJu796sQmDbsNTBn2pXgQHEh428MFpo5hinCyjaGy4",
  "key23": "3c6gMxzzi8GNZTNYv8E7NfnYqpXNbUqv3J6cH3c52GWYSWoGpTk1fX2G1DokrWVKfdoTWf6Wd5t6jzTZNs5B8hiG",
  "key24": "29D8GkpjFxgyeLteBpVMuvmfSh7fYULKq4DkF3BjfX8uDtfJQfX61SRs98WfLpr8Yg6ZtzVXT3CsNHBUrph4Byoo",
  "key25": "EzydZKhf81izDibVbFSUVgGUmtG56YJe4HUaf1aFRFeKdVqxRUhRxLoxDFXxLt3V78W4uwZCqquE81SMywHfN9i",
  "key26": "3x2a8Smvbm2EqY8urZ1MNPVYm1apLoqHCU9JaytoRewRuHZEn8dHES13gtcbZaJ2h9F2TicWsAF25eEQJuKTFfEW",
  "key27": "2yu3xdcHeDvbQ99DNmM7P2qDPZ6wSiQ8KE3xTYEYjNDoLrKAvFm1UezGi9xtERnKg97bL2PGm5RaFkZBfxkLRogj",
  "key28": "QXvHEuQaPpgWqVwfbGKTLz5QKjzGXWpWQvGHdUtDWKC9gxXpR3zb43eSHSP7yjBCL24oBxmCt5KDbqKGMrUC5AZ",
  "key29": "RzQwFd4Gjzq9e9qrHGwXLXkSLZqGXyg4G5DkfwpyLEGAX2GAn4zkayMBtyxzgmfqykGNWaTs3MywEMK8aWJRnV9",
  "key30": "dxn13M5DzpZkU1g8zFTCTh5hGv4QYfPyMAHz5tyLqtgH7vVh1ikzTUzey7iiun7DVCpkGog16BjSLB89jCKhXZ2",
  "key31": "4h16XiL2P6z7UFE6Up7WVjWyqgko2KhUpmBdah7ctqorUfMV5CQWsYdVHGJ3wccnUubdVu4z8MmYrsenpJv65MpG",
  "key32": "DiRwVLVMKv9fm2QbNxmhamMCoAk6tpEYKL9Bg3LfUUUiCiY2bSizTCTPjsXKLx5KKqew1EWVC9pj1VUsJDwqjw4",
  "key33": "4oTEGqMrncuDPSgRLcGe1iuqdKT2zcfdPHLgt65sRLw9qS6m4Hz9Q2dcESH3FpLmdvtsz61wYtfbyW6b6wEfC4vE",
  "key34": "4UoQpkMbpAFGNCQ1d5whraNDfSqiipAijZNyEeAf5wRCwHujrvnKotV2344hnktgKwTj12H3hVkz9e69QAN3daz4",
  "key35": "5FsUuNRoPEL7kPbcayTbFu5zJL6XCF1ywgMGx4asVyfVdTwwNdKjJ3fm7FVdrk8oNMaYRLd4XRvWHgSU1MWknVph",
  "key36": "4rnUNZ8R54dSNUAHksjr4Hzs2PVpwGvr3rmjNfci6ZCDK1NVyQF8nERJRuscdnz8MGceiNmoPXSkpJyuZCqDXjSm",
  "key37": "25xD6ZXdpMc86zVqQ5AcRFnBueQc2qBSAuAeeDnSJV6ZaqouiJVeDhp2LChpj72We7qE5ovnF4A4Yir7H4tqF88H",
  "key38": "4J9ktwEDgoxBKwskDCAXt1BP5a5RktoZowbac6ACP5D8CkyDpy5NTEJr2Eij4YYRgaUk4skCVBzLfHuAeArsfvnu",
  "key39": "3sUM4LiiYdDjS4Hbuh9M4dM6GHPFD2Fpqdp5r5QkC2yv5ufqb3G7fFmvKMyfaX7F5csAkJvDZBCkmuK4K2q5eBMy",
  "key40": "CkhpMa94pYWez6XSA55TKv3qkGXZHiNt1SuymGiiVfcrrkVus1Vi3tJTDTZkDbe9TCkZmBuDZHFXSQLj34d657Z",
  "key41": "3BbNeQzXtawB4UkNCXdQptRC95mcPxhTo9wR38uQd4m5BRKwVKiRGudMJcHWZtbEYU5fFQSC12KjGsW2iF5nFF5b",
  "key42": "4u5QMUwur3PCmgAQ2qTXcss3WyRdLTcsDMEjbwLvjmBfzUuBkRaQfaNzHTR6QUmD4N3M55Jx15TpEzDJok9gDVmU",
  "key43": "4N2WRbQK1MMEtv57Jdb41r4G2Nxux9Wd6nqg3Xrchx2ATV7gXgJmfTujd528PzHtehZ4GohV5gHNhnzrVpAFoM2S",
  "key44": "3aezeuTDyGh663y449pXYAq7cAHMdgSGGhKkQ2sThRLCFAYnN1bxV2Y73dECko4ZJU6DTjtXx9KHqryppGSfQZxz",
  "key45": "3X2eNVHk6djLB4VCBc7WF8hSVarM7BBpF9JxVkgqfkuc3D5pPK6aprpCoxfBAEw6uCgPYDRhFcJHLqfB9t94QfZi"
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
