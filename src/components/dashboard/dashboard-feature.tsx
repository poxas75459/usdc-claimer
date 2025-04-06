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
    "bSURQC47vbNBPpMNHA1Q3vTnpAP8sSWbujq92FasczkBtohm1XBAyPo13dxG65ZtMgsKszpUpZmbVGW34QQJ1DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMAtFYATFKq9Dm9Zd57SQap5JPMeuGKw5QAEUp8tdE7vbmaNAuhbQ3g7kTnm6A7oX362Fa5kGzTmP5XDk7Ug2fW",
  "key1": "2h71bNx3o5QCcWhwS8Lrf9uK6J5cHXvZ8LGZJACXiWpkQYjhoTCaCMxMDsNuy1sxEq6AxHVWZuSSRgkUFCoQj9C7",
  "key2": "3RxSu6XuVK1wXYcxWdY1oRNeWcD1LnZJcySkUjv5fb2QmhStSdYAq38vv9KroeM56F3DBac7wrdmvedKVMXSuxiT",
  "key3": "5fqncgrTC2ck3VSUCcCLVDoSUrBkNMLNQ2X9L4XVwcyRGHUzEiSKHdxBFEtCveKiJFqgq4oZW5HCqLXe1KmGhisi",
  "key4": "5KLDyLR3Lf2hxhvsDTZ3HrNcXgWUTuRwcEsmCAygHfEzkAgmeHSHtndsG5Y6f7ZPFb57uPXhTYKJcjMcAkREkkLH",
  "key5": "35yHh6m6HixfL5U5zFHuuGwF9KyyEMumM7eDNyHUXhkcnLLfddsWGDqDcqn3gRoWzjoqwv8vcLCTmAptmmyS6TwZ",
  "key6": "4oRd6BTMf6mg1av8xpfN38VHRC4XC44nisRb8Vizftm16g9m3SVXUreUcqv2eucq2K8YBCNshnGeXpHZDwDNUr7q",
  "key7": "2ftpSeyDHbrozMmDYhh3zaeWebVoeB7utYNtCcAU6n77KtJfrkEJzHgHx31eCMkgCAYjqCUZCzLotjZPWFk9WTfU",
  "key8": "62MRX3dLbgthN4b9GVkagyqz3ETekRiWfLnkYHKDxGPswQJ6yf1HvgMNqq4D4hbexB4HGBy8SQJErsFgQCmG7Az3",
  "key9": "TKB6xEka2uzNjomDSiFwxRYK6ws7Fs1vomkb7f4pGJrV5oocXE9AnoKWGCysdrTuxKEPTvKssfz7Loj4xKAME2L",
  "key10": "5fFLYmmPi4CNuuYn1W6wfxD5pgtN4C4qt4ssLPNujzzk4tC8Z25VCygCGGf6hG7T8rgg8gvHcLgRM9uVLaut8S6",
  "key11": "49WejrFLbxB81sqBdHnTkGakSNgLnFh8gnKuMnNrN7TRqzTrYzesWdxUSbucjqqpvqp17yMsLioYbgNB5nZv6tfX",
  "key12": "2Tjf5cJifDm6TH6D3oZeTZB82UMnmsstMUTmTR4DkVTZ8B9qifpHFD6droofMEkyEgthtG9SrJ14Rk4duYpoc4iH",
  "key13": "2wQfzJwGbBbTsg84gmPX6RiQD77smVanJickUUBYa1wutxSYNa5EwvsWYAhMp2i45j3FX5aErK2m9q1xoKzy6QR1",
  "key14": "5AhfaAgpQbrqZdSsa7Kxg7yrhC8Cmx4Tzabh9nPnD9XG4vPKJk59FewMGCR4fYXKrB4xFAuwNzQopuRVzYWoUGGW",
  "key15": "3Q2aDVcFk26Gw4JMTkw1tondPcBYBBM7uzwuU1QLLcAFwTrRFR6vZ5cz4shq9RqnzDBr15EY8XL7ecjcieitrGKL",
  "key16": "3y5LDJCNhEmGWT7bPqwETCGkGLJhwE4AtwbDFfpRmazpaUXqGofauVCBLKSsxhVbnxrvzoPXTw3hSrojWt775io8",
  "key17": "28SqQEvfyhcWA2wPbnNtZKNjPgQBrPWzuTLYt5JQBUByUdAQAdFK2cdctbBdsSFGUp4HhcbP2s3y9MHDqVRFYhNB",
  "key18": "3nE4bbUEJUN8nR8LJZ6jiQtLgrdkacwcfUfkrEjVZEXkSURSDvnQ7pEWuYRD5bpuAwZBKCsSP72oQkngDtf5Krnn",
  "key19": "2BWc3Wyc874CVR3Hhv817o6wxSQnmBQzyjAZFF9pcLisSdU34YiKBsE8kMMbbsAHY7rGBgxmNq2fwSUNbnrFnXhq",
  "key20": "2SBZpjdrUXBSYaK72fTanUtpNPBcE7b76P2oyHnVo8XDtKWdRYYokjLH6UtxvY91CnmgqV1mNMUwy1pFnUrmPqib",
  "key21": "5vmey14xyYpFzd4BfSWqA8munCamNN7S7QSWtpqH5t2Xn7hTunTNjNRNSXGyAeCL6T7Rk8XrewNMAX3JGguKw5y3",
  "key22": "3wujph2fsRjqLuGiuG5E4uq2m3Hz3EfWAR71EZt4q1jZqXDTGoXDsREdVH8jhnHkfGUHgwxJyjzQm6E2FbiomxCy",
  "key23": "4juznthp3wBREa7o6s8y9F7SynkpHrN9xBaqjcJB4oB8v2LTjGT1F8tUAXofxba463gJZLF1d63JME7hLrfuDd11",
  "key24": "4bphhYm5BBhsZqop89mAfYXXK6DLpawb2cs7YkDAoDCNaqQv26Nbb7rnbC19LSvJSFSVrdQkcPmRxCsDzZMd7Fog"
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
