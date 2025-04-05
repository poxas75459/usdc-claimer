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
    "ArAzjyaNN3XkuzUtjXPkAJWv4CDqoApyXnE5rXTAX2QhnXc8TjhJT2rmeLY7dAMAep62xWcz9dQttTJwpGVjM8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMnZHvy1sHtce7KGpcXAvSVHDcHoM1xeqPjfqEy2xGqtBqQET2MvbZakjQtjrmZ1x4HsGGmuiEyAASKjEcm9UEy",
  "key1": "ThRnc2KD3DUKNcKeh9YjAEs4pAu96M229ox8MEgPiEXCfWxzZ7BHxBvnnp3pakE86Nhhk57PA2rDKipRUuHaEPm",
  "key2": "Nvw57YXrHrZYLXYVYfswk9av1g9k55Ki39MMy6NWQLBDcmvLYQn2w49hKiCh6UMvx5gg76aee6raL7AKECRhbNf",
  "key3": "662Z1QZDKk3EYswqQ4KcCAh51F7KQ7J8higV6RvU6C5cKzHjRrCU8uoXRcwMznTseEnyBCmEZWifdvZMKztNxk1V",
  "key4": "xdmZQMpcG2MoQEvR35prs1TRA9qv9E9DTLoTpu8EtQsA1YDV9V3dQKKCax19UpQoNA4MFz7fCX5RfeCdv1MdqiS",
  "key5": "4G1SgJXPCV9p7w2DN5gqgDCpCPgxzg6yAxqU8Y87YBN2VLLb8861KVCfM3PXqukoxoAcxmkrSzh4TSBW133KDfFC",
  "key6": "MukJ4Y2rGMb1s31QQvgTccz19BAeKfkW38nEvB7CcpYrsjrfsuPxxX8MVSZm6wa9aFhBL16AFLXAEb6bjw3a39x",
  "key7": "4UuDvfdtzKEv36SRFFAMi9eszzVT9BjVZsbdszUXQyrPjkjZTWFAV6fCxM3kZWGjVjG3aMnRWDwqjHiyxnufnP9v",
  "key8": "YSLewPF2CSY59abULJsyQVpgSpckGM6ca6HWMD3X5YJJx2metg7CFwd86cQQLcbYKUDu6qwZQAV3fyzWrEd6Kvr",
  "key9": "5wrmc5r6TbPiYDBkLBVhKq355gn8quxk1HwSK1tBjybq25t7EbGXCAWyTZqSTK94a5vxWZ4MjDi75c4CDQpJKD39",
  "key10": "5zLz1Mv7mDStTT9nQMfhgsGEqzh9TeL9LpXdUapqD15psZ6WT9FWfY3hd1b2enWbNsYKMfwdan4DgxebpFx1qrLm",
  "key11": "3WgwZXuXSkzbvSHaGizG5LSxAxazDuKVmL6hF9z4vcRnwHFTQpTUCJ6srKHaZq1gqXWFLmNCTd53hWKUYpehHxCi",
  "key12": "2sTzD6FwHov3G4S9ZT2s9LDEMH949NmnFeDuAGHcj3FiqFc5gR4jWQgzrfrhM6nzT4v8BdCa5TK7q8iRP8zfudrf",
  "key13": "4N4wDmFRnhsCNDPgowKkE5DxsULMCRnUQkpUeTbdbgf6evsujmZGxgY9d7NzNH2RKCWKvw4cAowowzK5jvBzWKoQ",
  "key14": "5kHHoAzVbNUsL2YYXLDGHCPBCcVstKVUGzhLHGQqWiEnkMEXj7foa9iGQh5G5JgmXQz8xrZfs2wqqCpFTETdZw9N",
  "key15": "3ExcpDtWe6MQDSo9RgYgTMP6b28tRE6XWqMca5uF2B2qFJiDyaHtWfvvWFDJTEw9DPuGyD2D2Gtb7t8k8ACs9fCj",
  "key16": "4Dme6LztajvCtL849MEAXZnJCnyiGfuAcyf2KBMEsdKaNiUDQBtmksqNXLpQDzetq6M6s2YRhp4Z23ELYZA4fZfq",
  "key17": "3g2xhAjjc2jDasLewSVaZvqFy8Mpjb6a5hcqSVRwRWfD6XqQXrXjBmYrCraT6LJrVoz3VC8T4aPspsFzerfP1Jvf",
  "key18": "4hya7qELojP7NBavPXmYuttNnjsbGgd57a74KRGnYN1C7Y8FZHkdLdB6GNW5f9uGsHHpQfKKXzqk4eNuxdifZgZK",
  "key19": "36sG8XT8WfgKzbmsFfkabZSa7ZDEGmRP8E44Gfddndv6GT2YNuHVMi6zCEazG7G6sRpnEf5Mp1zkMHkAdFFy8ZmA",
  "key20": "LnHDqKYLoowN6GVuJ856wTPr1FPLVF6tYpVDndCnjioDBRoUg6Sjd3L72HQ5TxVpNSRXaarNYWp85UywGPSWfRY",
  "key21": "4nN48CzPeCQugjFthnWXYKg7GkkCnZs8Qp7G87PfWPQWdBKGdGojxzdMFQiMHpvMRZ8Ufr3Epq8GRvWFoo8YFzov",
  "key22": "51pt51rheF3NXmiCd2crg4Umu9722cSfYXMW1oosVWn9UHiMhe9cmtoenLoxYuUye3MpEtb9kxZXtR69p7N6QuXW",
  "key23": "2DKwS26etPoqono98jmB9T7soBX4745d1z2sWoLf9FvidKHfXSRcNzPGjQASTMZ3A7RqwvUaK8GFd3tyksNomWTJ",
  "key24": "4XFa4adVqdSQk8mP4XZ611jnKxxEHLFTLqCi9swNcmEFeE22ATamhP49Uz8uWiqHURxjLWFwZLQ7m7ZMYzKxH5h7",
  "key25": "5dajTdSJfR3KsUm4g7kw2VQ5G9jqT4xVLV9UjxAn59akQNrdLBNiqjM7epnQcpH1XGnTwA7wHA4NmjkLCTUvHCpb",
  "key26": "tX7Pabr7NkBipoTWWyaXjsxFx5Mx5fjrt63wsNAPbHpin3yaBqQ24hksdK6wVLemszxYDSmUijM4M642TRFmZy4"
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
