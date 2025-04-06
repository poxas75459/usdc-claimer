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
    "3HGfJirLkrpCANBHsPkJHdykVtkzoFDoVBBu4NW9rnbrwXwKhrWJdYP3hkdftfBNYQun96VXA3WgYAr3BmQk2ywQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Gw4FRDeKRgdGkNF2rAEC33HqjfTbqhQF4UMW53XXHHqyDv132HiEQgG7CK79RsXpxaEwK9up7bXCjrd6RaswFs",
  "key1": "62Fy1VgEWvfBawjNvuhK97yiMVvB7cfQbebygeKSiqZBbHQhLqMU7T12Y4z5eBwJBDeDsntyZQ5EAfvef7bN5jqf",
  "key2": "2fVpwsBa77CUVXdJZMNspVTHo52vZrvqUCPEXYYw5e7GD7CFBGcUbnf13dHVPGm7BRDDUsH2pxJvvJRMfooSRhcD",
  "key3": "aniCKvc2vnQKKkciT7GL9Sfpc9ep91qf1KUUkXBiJVKtS6uVH36oZZUiToRi7phBDgQn8oCp67EtStomgh9ud5Q",
  "key4": "2JDWaNNiwdqfmNJA43Pu6pw8TJD7qzGeJcks1k9qS6uHkEbEeVPkwjHHkfYxVoRm5V94aLrtjVy3V8SmndVLbvpf",
  "key5": "2uqQSpLdShhMbytaaakfpD1BDLfa1qMvLzp5hFLZPkbCNMWzERrQaxo6TcZSHyHQuYtgHV4GaTtZ7VkBBQkDJxHQ",
  "key6": "4y6fq1uopM1p2DKgkohGrCzpSoHVc8VBA27xQdiLEDcNZN6g1itCshjEi38WvqTLC6VtHB1sN4kaMnhwq3tHKkWr",
  "key7": "4Jaek2Edd5RW2C5ypQ9FftwbnEYwv6gv8SpdEc1ZbjcP2Br3QaijT9qsi5Vs3n7LyVLyF7E6ctHWiAzXG1foHmDo",
  "key8": "3tkC7ehy2PBkx3U4CpCpTuJ7cG4qQR42fFkRVHbN84nyUmCTLjJDCkwzG1q5ZRXp54533TXJkgqauiDfsgiBx4vE",
  "key9": "4AMU9mVRz95YqkQtcVaZLCQrdni6sSU834jnt3M78MVHCEH4R287qoNmvuZgYZdWRb91AQ3UdRRVq2Y3aMdHXXyw",
  "key10": "61HnLMR1ZheCm53j5gxTCGBHrevcCRptWm47RS12qEXoSYUoUpKck7wipaCGhTz9gm6th99sckZzq6pWMH2XTS41",
  "key11": "5vyb3L6f7PEDjpMtb83UK8Pzi7NzCJyFC6ACTTaDXk8e8ejuvLySH98hudWU478QLh8AZh4yD9vH33aZEA275LNq",
  "key12": "Smf3QSE51SEPnYAx3bmD1bKJeR8PQRvqd1uXeyPF39KgER8XYv2sgx1tzyEMT8tbCaCW8Hxo62WARu8FqFassJt",
  "key13": "4HH5ASvzDRNd5rfT9pGW1nEuQFsoSnfBqmAj8671tE2UbPNRN9KQyLBzdYrhbs9EoirToG79BdyrhpKwxfWzsJmD",
  "key14": "5xjP3D7YFxaoXujpqUi5VAwPZXCXQmfGC5yQRZ3usniLnoVZWA8CAchfaJugq2R9JtJg6wpmiXM673qxWh5Gb45B",
  "key15": "5go2whVNz2K1n7udSLQRgR1e2aJtBPJ72fp67smQrhjskEYPBL53MwsoBEuf3eHyWjS15UmHCzXYf4NSvaU99Yxv",
  "key16": "36wTtiF8n6VT374PJhTkH2Qhci92Qn91NLFbjkeqdJFYTD79qk3HZu2BYLvyVPmNRJLTiuQH2MjxM2wT57xSBHNU",
  "key17": "3faMQtu4PsLiKNw46x8gRZP6n844eLjeW1KbJUPy9erN3BZYLpBCovomGAspiYkmrVeHJhgVnxPocso5z83sk7NL",
  "key18": "4FxGDQRR5pwwTpCRW5ciriJQEAfFLQvwDmUfDXVskyMJKGAijgyt7BBDCnWWQb4NnXqnE3nfxCFEPwWzAX5XS8dH",
  "key19": "381MjSxkAJdAoGtgpfCtxAYU68yULy2FmdEAKnsfoX9TWkYrgHXE62LukDh3ATAXGjHaQJFT8ThH9hxzoDuJn23b",
  "key20": "5msNE3D8nMgSbUmzWJhJtuL9z8ZrSuybCaF42h8JWdy8E3fg65RZYegeNwYqf27NRNbpBzrRuf3ZXiTF28LeUFpD",
  "key21": "38eaDydEhhXufE6JkZzAX4PGshDm3LG2ZNoN9ctJb9dyAnjdZcDL66RqzG6QMi3DUshzhTQdJDTmSXmHd5UJUC6f",
  "key22": "hH1LNZAjChZRfVA8m4HZN2RB4L3AmoS2d6vStkutH7KGkK5zHQuwNXgRdDJGgD8mHNPZThEjSMfbKCRfAoE9LMc",
  "key23": "63KWaGgH6u1CG7rvG9CXyZ31ew9sAQQehwksx2FTwHgq3vUFZcpoWBv7nj4mWxaGYrTRFT88aS5hxeo1KaBjrF2p",
  "key24": "4UToh1QxcuLPFMYS2FoSLvk7g5s24axNnLu7c8e9cttDJcdjFo2RuKZtbspD2YGa3yU62W5u98kzuLxn2yoeXyNA",
  "key25": "4D7LJZLVSfe7oueG3RGU7uiR3Jv8disvoZMfnwVMMoZdiYnpaRvtsdVJQrDzEMRE9SuzqYtaWUoWJHVmp42Szzuy",
  "key26": "2MM1FbDgq7UUBgtaECzv7DbRkiMTifXdi6opSggpjxTsMSV25bXDeGhSr3rDtpwTG8EB36gPCYMyLADZojvbp2Nq",
  "key27": "2cRMaXRpRRaPfoKVox9MhAnxwZTCuwxEYeVgpRLiuRdgWeyb9oeUp3NQwFUe6U4NCovUqjqFkJoWs6d63HBcLyA9",
  "key28": "3UyUZUYFn5o1PTnrskcFNf9fzBzMvnXC9HsJEn7WSSK1RBaPbanpUXBrbLxnnBAenENdx91sSugzvBNaviHdorf8",
  "key29": "zCdyrhniYdvPmJSMAbHiAX1ZvZonmHSMSTRLevHNgJuCBf2mveoXU71XRRDUHeWFTnVeNg3S3wZa8DTj5EmeuAw",
  "key30": "4oP9LcKbbN9bVxh4XAvuGowsNqr8WfABP6Y8aVDwTdPRHpSTKCjst39iAZQoGPbq1Viypp24qwkKB2SgEuooGZZY",
  "key31": "EeTaoBBnfx4cwRhYk233ZqRJTb7woJAjswt6GwsJ48aDfBLJz1orQQ5quT7uXzFAkfTcVbmMgjs3YWjoXoRKRcm",
  "key32": "4Qd5LAdqp59hCqFFLGJr5vrMtXef45Xk2E2gubdZUy1D7dhgVpucD6DNXBjB2eqpXq8uGyw7suiBhGAXk1jZVB39",
  "key33": "4stqBRs9Sfh9KX8JSYFEde6govRad2PfbnXxDQgJas3QF1HDm6kFjoBdWbWjwwyjEXFsNTxHvnk6wdeZvfsVBNKo",
  "key34": "4KmTj96N9Jzk4xT4YmYJzH56MKPtcBPgvgiDAdgWpK2rXaHkc7wjPXcw7YKUyc6PRNjGFUo8u5UmGhoxvc9B9h5Z",
  "key35": "sVAXr9WCQJAH1iMkRRKHih218DsX24KaXnFJm6ipzcBARXBo25KE8DmecuB6m4igkoYoMAus1E2AaWMErNiYgTF",
  "key36": "xQvpK5TW2M6HD9daAwBhvTT8ij78SP7dCWjgchYhyuupu1dHbw4H9SuYXdKMDYm2VH7zoWDijb42Gs6QkAaXtcs",
  "key37": "883fXGJq3mwENTUjU8LfGB2KPhxfvRuLdVwBrwr6rSpxzCDjvvVWBfsd9TpbMXhsnq4ojzw2TPAFumcfPYmpg4J",
  "key38": "2amx4QPoghtFR9u1Hy2sZVotdv3YWfB6uVCQWKV2VDVJ9YgNBxMuANMFXzX7GWTBfHhVJFHoMAhxdWG13tfCTxci",
  "key39": "3zbjhWsMFfkXF9mB654B5NVA6daGjW1Eh4pfLjmzhcbYisVsFE2d8XfqB8rtwuK6gSERPft1oyMuedPL4RnYJoFg",
  "key40": "4ktQAMeWbsJR6NueniJUHo6k6X21H3MbPohoqS3y7vvdgn5RsPM2hvruGwwgDBskjhAxBTEzr7gVR6ttSwXe88YX",
  "key41": "41H4abPH1pMujrxhGbba9Da2PpTiW1gSGDc6RXbBBkRM7yCdHaphxzxdMdFZZCrFrQysFpNs9bzqwC3GQFNEEmLC",
  "key42": "59NxcbCAHPnFf7tBjfaqbGxMRpFBqzEBK8AHPWG9Fvq1gPfHx9DAmcSsAaZk3mCnL4icEY4SRqiEJjXWWQhgtfzA",
  "key43": "4gDPmGpeW4VJmDRNLwZF3H3WSbLBJdHVaidHTTPqhCtMJwp5oyVGTFYoAUty7211VQoCC32MmHhZSQaQRWPxTLe9"
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
