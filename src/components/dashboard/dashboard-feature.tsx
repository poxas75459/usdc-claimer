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
    "wMryV6TN6w82hWpN4JhXj2Wx7FPTxfoP9oAnPpcJVWL7VQrGmf8wH4QzFpA3hESytc4mKFgqZrXUcnZjD2V7a1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "di3uMAFP8MLWnghKcq6K8aAodGmn3UXGiHRAKXsDDU9tV4YjzfWKTDHJYsxYpKdYcW4UPgeZxXGDx8JpkWDzo88",
  "key1": "2ejmw7hHUrHdiDareMxsTMVksJUL11jAn2rE1dALDPEw957jzogepKv8DmRQ1vCkwkDSmekTRnSEttFnWMtJFze8",
  "key2": "2jARNsU5QsFh2hP9vLcAjS5YBvceHymJGgX6sL5LTxtmchxvyQYytA4P9aKtq3PiGdhsiLo5RStTSPymy3g3NtMu",
  "key3": "3mNtpACwYFb1aWJmTQRVgE92uHEbmffvL86M6PSpGTM3qQRdazAymzQ6UWNyXjtM2X3PnVzBk16AHK3cvLESwtsW",
  "key4": "4F5u83vHAsiNEDKGRtEDdTuWY3en47ahb1NecCFpM2hPaC5jU5PvHqoBJiYyFxDHshbtZLPfG73x7rgVNBBV7orC",
  "key5": "5hWwVMwsCidPYbQ3s4raDxb2944BYkcKBrqBeoHhpv27k1KukDEDAsBUDmmjTrQPMCAHk9pgxgTLf6Xa8STWWnH1",
  "key6": "3TFKNoNX4mhRpBPR6tRivDm99GNfyPNtZmTWSQz3Yq9c8cS9zmwtgi8TGJ4mU7S6US4V1cALKEi9m8UwspgpdNXT",
  "key7": "4aTsnPnUVToDXiuCaXeRtqLDBZDhDgV29VAVnePuprYSTpNgDZJurGqqR38pzKQSYdn4tyrA9gdp3ip1eBpJo5By",
  "key8": "3ywQQNof8djr39oj7BK7XS6NnLzyyMJL4g6shvjoaAutZGzUwGTXZeiV9ZyGsP7ToNN6j2syNjADYU5QtsMDZZD3",
  "key9": "5W7AgFYogzByMVosD5WX8B5wWdYRv1h3jowtBamDTC2GqjZdtDNhHx48G1MX91LLfQZcMEyGNDSJjJJnmCHFtNfq",
  "key10": "2M1T32HEVwS2yqGAYyxVLexsPkB3fpLyRQPHxjYPLnrQ173L59HsE7NodM5MJwVRepoVJt4xnyPxesRmDLxHndv",
  "key11": "2SfcqMEnwFqxQTJWCZpBBhQChnhBKhpGtvuMWrwnYidRBg8KVuCTEtpnxz2ZEXTGsEWWN3wLEHkLTcyLDUi8NMq4",
  "key12": "3Uu5rukQS7Zwg8GWdqtAw1CUJciQp2Yx5Ds2beEtrni9SiE4oA2TV9Rsz454iEmWW5jnFX1WEAeT4sB5czkHRp1W",
  "key13": "Ye31Hyo4UzuMZmu5223hPcPgoPzKxupj69gBqTEeKc56TbpfcF4AuoLxgBo9m8wsyWZrYVp5fX1uMSmFWEwKP6Z",
  "key14": "5ZjFvSq1JFFxxvR6wqfxx2WX5hBxQH9jWqAePDmkemw1KzBjgKpJsvwaA2hTPmycVDU8i86AhHbSi4RfT5kgTdJZ",
  "key15": "3wnPw4QvMkJ7Lq26gSZmkK5BjSrL8D6Ev671vssc8G5c1NVyNZfLSk2m3qbrK1DJaswJcmF7B1cbPLdEVxSXRLqK",
  "key16": "3oCgdLfpjbHkj2QPCEJiwiv2iZTtt3xgisjAgs9A4gaxv3AKhr9nwdjFU3UfFx5akDUXYUYVtczMKnUt44WKTzV3",
  "key17": "F7X61itjziZtnrjVEFzGuRHEGaEBtoKh2bXwJUW7nd2cYeypjQNfH3q6ikBfW76rxFtPk6sd8HWafAUWomYXCMY",
  "key18": "MxtnSBWhzDSmgMt7j5e25j5p6kRRC7pYSuh41kPz3vS3Tp4cubDxrUcSfyMhdEWBHx2iBAYF6pxpn1GJ22vF24F",
  "key19": "66hpPXqQxYDvNyAw2N1gYaRz87qrL4xhsnSUaVgWnRWK4HqCTj1ZX87SBfg1wDzxLN9EZ4hxfYVBNaQTxXQzPVyL",
  "key20": "36aYFysSW5vHgxmAqtX2R8GKQ1Yhx2gTZqDaeVg9JC9CGMVUfnuFHWiaukD9DRD3VBTMGDDpJGvfcwBkUAKSTr5W",
  "key21": "4XZa6gg5mKTLRHPrPDjq4o4tawXAp6ZLvNZehgoR1AgX9Pt94CsHhRBBHxch64N9HhHzEFULifYcLzBmfK559XvZ",
  "key22": "3QzeJhtvmU1YPKc9BdxAW7xF2JR5x17VWfvK5RZuK2hiRzxxjUjt13akA8r9XN3zxC5nyYnhfFFFWx7CYZneYydd",
  "key23": "2GNUN8XFAvmXUcBnptp9ET251HLoGJC59xwzqkKa8Lyq3fAtQnWZhnnFU7ydVLZAn4LaTX6LJuh5S7EM3mmQYkJo",
  "key24": "DDTkPXXfmeexb1pKdheP6PtUujRfuqgDF83N6fVN4gy5qWLpxdqvRz7ojqx6qqJ4DrMcKLVBUQjeU2X9fEejvWf"
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
