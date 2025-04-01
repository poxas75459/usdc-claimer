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
    "28cJvRmjumEAVVGhdXPEGXXy2jcephVSFHzv2bxrDicopJnVSD16wZeNStYFpS9hiRYPX8aonVQPPXHrWrE5DFT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1TrL8E1HpR61EsWno1PNxk6pYWbnj4MzkQL9Kb4nUMomRCCjKZh7RWesLKUWtmtpuYiGU9XZHP2xnHzyu3EaWu",
  "key1": "4URnNGeCSNs5mBRmDYvQC9dvgqzTzFyyWyybUAF3QcMVpx14tsTZQJaYxTAcT8Y73TtxBqdduDmhtKbkE9abTDrp",
  "key2": "66DoUPxKF68aziBTDb15uaUEd35TSjrvXqm5Fow6MFw8bxEsDcJKMha3o15Y9mJweMkCt1hoCtwgn7ff4eJ7gP2e",
  "key3": "23FSR246vgfVTeUXMjGPUPKGFqn3Uszdcw8b1Q67SoEWg45BczNK3wkYzVJ5fyzVy6hFnJW4StVBpEuYEtiNH2XC",
  "key4": "5bUGsgCfXAtxpcgxoSvCxbaHYfmLpamCz1nyS61wwJPqGZvS8F1FzovKKcNHDpZhr7vkNcytfYXunYF6nKbmjdJ2",
  "key5": "35GUGu5KezBfYaevLiEY3WxC9Wspzgjq9dNkVURE1LTihcv63igRpCuqhMXavQu3rbKHmuKFQvCKNqLBKJ2kr73A",
  "key6": "3dwc5PXjxC84LQUmFcL5GySsfJkz2qph1AS5sfUQs9x2B2q7qe2XKxuJLAHoWVLRGENat7ZpNA4xGyRt1W95fUiy",
  "key7": "Yq2fEPtBSZc7v7FvsmrNrueuznfkcGPG8fAD6ZWqvm3xBKZ3ATR2xvxqUoLQB8WhBCNiT97baz85FeyKNimf3VN",
  "key8": "2wjBZB898XTKJRiaDpmyKtbTac7CRtXsQx2fw5SsTGSxAQVNPfFdyMFwsHEVTvRau1552Hxjj4fRF2SHyG9CKopV",
  "key9": "3g2ofiXFHbQDrdCHf3xYxneKdWGtw2WMnee9LfFvdTJBMaTqynqfnkP5SV23Cp14XeDy8kZWVcX8nYfrqcaqfzZV",
  "key10": "62GV9756gqYUbChS7haEBWS5BjQKvsnNGcPWbVqtygedRmPak8yu5pSebJmBX6me3u3exn5FsEcpRW2qwX5Nef1c",
  "key11": "5B8RgUzUBCNvYHwbMofvk3BzMKrHgDFq7SxLfMGHVMPYNNDXksvkqsvb8uBjGrpedVCuxqGE1Fsd5bfGknvSenAM",
  "key12": "63CrRf86HqmWtKdzn5H5iXZGdew7aFYXrxeW6XN7hLzBJAPAf34WXopfJbMD3LeGL78gqPt4jwsvTCMuyo9AVtCC",
  "key13": "14UL25GrFNJ9yhkqxmBs53K8kFNbbFwe8bN3XVfqLuvyj5sgnP2tA9pv8rJs4HsJgEWcw4hGXKLda5FBpJwpZRP",
  "key14": "2ivozb2PkX9Qgq7Z1tuYvqvwqoT4y7h2Y4PAnxogviWEBE4mdhYdhmNF2GatrvepeWxZXqUikDdbawxzU5VyMMXs",
  "key15": "Jyi3EhHA1eJuPKMjQgGD282Y8E7zyciUsRm6kRtN7GseB6HxnmuFcoU5SDo2QC4F5y8suGud7K7GAivUSBjGse8",
  "key16": "LzqTcQjTmP1dnNVhZuHcLtJxrKNCj3KwwKydBsUDAskA5PV5n7Gh4HvfGowq1w3ddAzchLFZpFb3SQqgei1ZBTg",
  "key17": "5WKq4GsCGcjRxbX7NLKqQXZwgvk445Qs1PkW17TUaVLiEmNTiz6x8m7bjdmZWUTHtx7KyxRae4SeEUDs3soL8Kru",
  "key18": "2G9gtp13jGsgZjCHJEFWeMMyFMunUD7gH9XXGwkM8inM1nwJyt5BUaQEDp3WMk6AKc7HJVkBVkBxMuSrv2pY3r6U",
  "key19": "5hPCF3uokTQY2ZZ11JN62WTzMciPG6zPhdAYxKSA2GrqDsnXvcnLvGePxEXtNt9svaXwPC8ob6sZJqoKrooG9jze",
  "key20": "zHwL9Aut2pjaYjoUKzbe6quA3t5xKrZMKbaebXfgBGwqSKYbHXBtzJ6XPPLEeLVd6Hy4ftkXjS78Djq9vZHsmvR",
  "key21": "5hXZVWQa8EbqXFoSmN2nWBfzT5snrX4976Rq4ZH9ANieGJ7DaVbgJXT8ooDvUCrthR4N6C2brmdHuEbwvys3GJgP",
  "key22": "5JJZHMFCnka3HDhsXHNE32hWc9MPV9kZB4HmzbmjSfvHdWUsgjwmj6dAhe7zimj7pqmFN5ugvn2LYSaQcY7Dz1M4",
  "key23": "rQDboKWh5gjpCpK2Jd2vCSz4s4r87y9tvyEimjjTeSFHsWbnB6yfgnyhv5qDh8qwGMEp4sdTF1hs4U1NJSch1ob",
  "key24": "3jeLkpGXaBXk581xGrqHEcrHzBQAMN2NixVvTKckSQutTHRRftcVecLoqZjtCmfrvHyiipQrF13Li6K22wKHftLX",
  "key25": "5L3fXA6DHRUvTFeR3UXsCPc3hsEeWMyCxyBih4iZmE4ws7ze9RLAcdtUcSuKtfpSePARkoCqRvyJ98ZPKCqhgfMw",
  "key26": "2deEXXoexH16CJQwvRLqrbhwNhZJH1ee1K9kwbvXgbZxb8JxEDGcPXsAwFCSQzRowCSN2ieMfudhPVdwW3QtV3XG",
  "key27": "4kYQ9bN2dWfSCZFj7p99QokEdY7LNg2dPA8Y6uNhRtXLuGn4XcW86W36QRsN8dfXwwv8uK3SU4WfDKqB7SnWtAVs",
  "key28": "3AJFWD4W8FWbkKDaB1LGAuusZWppp6iZrvjMFdK9uo3DTPCCD5pUubNFvghp8rc87FjqPo3P1RiToentR5S3sato"
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
