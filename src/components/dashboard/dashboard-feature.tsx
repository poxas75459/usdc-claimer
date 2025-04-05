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
    "2hDnSzzCPLWcsVFCvCVKv1CedWpNz6yeUHdUwV5YgGyri6ib8BMU8WGk3fvD1iPiF8oL1pRSwCWaQ51g7EYJm4Kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556kGpMimh6z9NnWWLxU8TBVG5WSobFoJb5pDf3Y5UnVzawWtaL9nhFxi8CK4WVLikiNAHCQaK5okc9cgjPGUfkq",
  "key1": "sHWoX4FgABUK2ofcmLxZNRy78kGVv12J2SHJ29Yf3WcMducF2Ney2J6gjkaUPAaofjGvcRyVyK9wTDoPqi48Pvy",
  "key2": "5Ki6NsRKDwh3Jzd76gGY1Z86aB2Ddszghs81z4MF2Cbampkxg97AF5zjVui4cwTMcmy3v9gMJSERm463D48MSueL",
  "key3": "2TmGQDGuu5bQwox8XbrfGzTmxZVP4x3h3vWxWiTqcHtLDNLS62ABG2fe5Wpu8YtTvE9EcegnCuLpzH8bN21VR9HV",
  "key4": "4px2SRzmmBsktRK7YZfmPSFi4kZGVmAYprPNp1y8JaDxN8wPLs8BG1dj6sZ2d3GDtFFZYd4DVBGPSFSudXvHsmwU",
  "key5": "4pLx71c5Na68DdBn4YVAtDuGcVHo4UQC7DNxSz3L7JoRQKpTLRuQTs1rzfSTm4y6DgDxE2ra7FoH5gDjH2CMYa35",
  "key6": "5bKr3gkotxTs6UR4nngvUeczCBzok2RvRYCBhVyLD16TB6voQpoCpJPPy7CF9V9f8WB7UkWjMmeJ7bVaJrLFdzFr",
  "key7": "9dGJiACLEAzh8x1j9VPbvFVgD9U83ZjsjB5jQLjXDoGJTGv5R6VDQ5jujs9MMQMfHAD2rZTgKduNeQ8XYEnsf3H",
  "key8": "5PzQYrLTL8FMeeZNBMxYcjn8xBTmeDrXadwGEMQJiz45qwWjpPDB8kJSMPSp6dJe5BedKtpCwHLC4pJpWZiYd43o",
  "key9": "5HDTLDcVg5PDTAvkEuRZJtmkXty3La8ax4fAgVkd14vNdEkcRQSBam5QqcA975YAHv31DaQzqjmabnYeZWazHCNV",
  "key10": "oNmYX4xbmegDQ2GKFiSAyses9DfB7YsWe4zVLCqWJ37DZ2SAsuQB2hcRiyUxz7ndCZjEnCzmdnn1E9KdsyrxY7W",
  "key11": "5cE1cx4GdRUStnsGAcVfYXjUMdjJ6zJLpsm4BdsLgGeCGDzQM5m2yXGXJj13LQdmkM2E3qPDiv1c8s3cRDwhtXm5",
  "key12": "4mjgKGadmN1ovqmHbcVAFE2Q8sYJyHCvYcs9TmjsYhPrNunTfqa4SszUKqsdtCbh7E9omEe3mPPnRPzkLmdHCknz",
  "key13": "24nkCzpNsHfSyPcJ1Suv9Suv1Av6DSCTTmD9D3oqQSHhYky31abDN7AxqamBVgWyZMkUwHBfuBNdcGehHXVnvKu5",
  "key14": "3wNT5Pw1xMi7piaqPg2kNu9S98zwsPy8P43pBpmkTAbEoSpr6QY9kyHDBasqFCskmXrnWTpYxKc6hoo3mybG1oVV",
  "key15": "3x1sFtxJxzCntwyniUGKYAti3HNtzo4JmCrMszU58Wi4XaonPfUxKhgN7nKVMzkEStSeLyC1wwUDi9rUJEXGj1dX",
  "key16": "4A5AZQgcxLwQqdz4nTrXmijdsfZBVPXSnGAWXyozG7DJyXoUNbxmohSgueZDyHRfeyM4S1hQZ19VnPPhbGKSRQCy",
  "key17": "2oKkiLJfn9V1kv1PRYzkAk1B2TiZk7LiaxG2UkmVEy44HbdAXr9wesaNDgf43BqFATAVH4UYvxmq3ZigZHQnhUnk",
  "key18": "33ymYoP56UbwAx5tNhRH9m44i3ix33BzB2wJM6rs3STtBqyvKPwJtzvPFfP49SSgKhXxBgk2mRjSbKQ3fgFa2yxw",
  "key19": "5DstytkZsHyJvhhiro2EwX93Ta39Rvne4CTrwvcpp7V7MHEPx5zRGDXYgLe6Q3AA3pA8b6QKarWVT27PVh9wiLbL",
  "key20": "3SHvQNSV1Z6rvkFiP89Wsa7vk1nYSz2wzLNgAg8nPd45jV9fH8WvQb1MEWSHRW3gX4emBY5NxtrBdbgQeqNiGxBe",
  "key21": "53sjwLzNzaqGZgdAMSyfkRsBce7WdEQ5v3JnEY2GLd9mdGAcMvVenB5iG4bSxHVRWzwoKkrijNwE3BzUnUG2Arh5",
  "key22": "3hGvWV7zL6ahJLAUszn7QQ7QSNVh8awhBeG5XhFwAXep3WsayoUztSaUzzX6wN2L9SiJJsbmafaBhots8s9xvfrY",
  "key23": "5tNnCgX9roh6hQ96BnQoC4kCvABPBQFkqR1u6H7YpqayscGFx1GHwCaTf153W5wkqtYKefAzoe5CCTSZQiJuUSVc",
  "key24": "2BQ9qTcCLKHYMW2RpHWo9bSRMzK9aQ3kKAAK94ep3yH3drbQwRnakWBNuLRK4LGmoK6qvBGCwdqpTfiZkDuftupe",
  "key25": "2cxkC6euXQNYgm58JgeHbtFMELGeXwVV1nBTLQP4oERzL3M8g5cp5hKJycyaGW5ejyyYZLAtXTsT14RSjDeVC8e7",
  "key26": "3xDkQFtAzv8nBNRvkn1jQaoq6Ed5rnh2TGMyQFLJqVF8CFZHh2WCC53SQqgoh897YRyij2qCbWVkQHfazhs1eZnZ",
  "key27": "2P4CoX6Ws5sniSTgqgQGxdX7kWmm1om4ztBDjbUXAefEdwV9vJaVEJtbeWPK53o7H3c7PhnAdb8on6QMy5eZicrZ"
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
