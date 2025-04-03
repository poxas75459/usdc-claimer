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
    "3KSn8kJwDjiyssZ8Tj7EqM5VuXLoE7XypknLoP1RDCoeHYC53Nc2j3p7af3NDAsnHrroZ9xyLWKEknyVjAQRiib9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUyVoCBRneig2cFX8tnNRx5jdG9AYTAzzjZNbPLRsb8uL4goci3VhgknAMvxsezxN9grUiK5Gxdcr95UDJ7Wt9g",
  "key1": "5L7EWYFtLejnWrCDqszw7x1PGxYhtbXUzccJ2UmCw4uTyvNLDeiYdAGR4k63amJcU35RLHvTz1pUzw69mxAFpgn2",
  "key2": "2ZBMzaU1n3WH9hvpacASRipTrMLjyfsdY6ojo74s6BAtmovzxsEPYNRmEJXL1KNiD5cfrn7TCTdnsCfnGwABfiRu",
  "key3": "5X5y6jCQUtph5cjthF2SdREHwUrZDrAwoam18ifXrMJxFwKZApkzKz2k3YbM82EuSvohHuvkuWJGjFTxfRYGQ6Ng",
  "key4": "3t768QJDjNnVqfXjXk5GdtT7opMX9EgPEXZLqsFFdTmAPD9q2fDfWGnCdAtMhrL2ipe6w1SrsSYjtMUk19YQUFE6",
  "key5": "2ekHUesE8Ec21wATXQ1hhrTSgrmMz7cMBsGN73HDsMZULNdgayD4mWGhz2HhZfP59xwRoktaowmXJ6T6omSyqe6m",
  "key6": "4ByJ5rb5buASPFj6CgHegLn1BzX8B8mAF1eA4nbZvwnGJ49KX6oLKvfqWDLWgTCXoUEo1AmcdWEx5sTj5nQna585",
  "key7": "3w11KyknxB2h4TPPUY2Y5MTG9UszWTwCTLEpje5xrMzM3fqhSJb8PbuPrckyD2atEsPZv7jcvL2PoqghekeMT5Lw",
  "key8": "8y3M3sGcP5BQf26KP44YJziMyuQFyS5m2S8hAGYegvemu4Pm7vn8Yscw1sxKaaMDojuLkj7xQBeWPi4H8cKb2uu",
  "key9": "3EGcSRtWng9mjsEanXQifKnasaL7drHaKh5Jd8BaeamwCJYRx2qdfg8eGDRzz633Yv9HH5qF5M7K47C3n9EjuRn7",
  "key10": "2GvMHFyCQx9jqBryL4TxfkN2t4ACktqus7bsMLZcsYnYKXyty3h9KiHGEvEoatcughxzaVQinszuBRwFkMJ7nqSC",
  "key11": "6rGknULzUciKym1bcofbqD1LjLq9FUaEYF7TgdKsuL8DpVFGzBYdLmpbBP7rKoMM3omyPxGYrPCVLKKeFczEwPu",
  "key12": "496DNTmF96W3DbkZSw6cTyNXqNnr7c1WzWE5zjU7oC2ztTyyAEBUcUdvioT7t4ieGsodMdkwY1QLdqYhS25kRrfz",
  "key13": "wZUsHHE6vh8r7zRBqFmL5hW8RDcPikvCN1etNYbq5H5d92PVo4agPSbPnUjCoQQBRQDJJj6s27mq7BcuiCNazc9",
  "key14": "4Wi1r1ktDGiNHwDwLWDA449wNLqkLnETRe5GDHGiNFNU83EiDrcbTs8ZjhmMA9GbzVVHyjnyyNBnh5xsq5HUW1ir",
  "key15": "5evsRwcwQW64g6uPavzVu88BCGP4p1g5XFFq741Vq6PPuhzzDNm8hSvEmCynXGe42V8TYTjn9eHFv6dxXtmVvzSU",
  "key16": "3LpHSPPBLg1vR97XuzJhG6YcJivt1GaSbfBVARoTk4gwtmWM3uHqTPPWeZW6KQ5RNFCEtX4m63Pv8bLE84m9d1Ng",
  "key17": "5VzpvYE8zERtc67BApckLWBfzvfHduEXvkbBbMdpRUoQ13AikavknsaJeCft956tLqqMyX3FXt1ck8B1eBNyyBod",
  "key18": "4ZYvBbXLU6sDAZQCUQY78LQk7yqzPz7GVjmu4ADXndscM5dt53sNsapERHrT67oAQikHhGpDSDhkjSCab3rkayYN",
  "key19": "4K89N6f5KgWBLjT6dPTKA18XHARWycoz9P3MQvnJFTZAssDMk79DPeE2i9Sb6CJzY6sEYDDm2S1VHn22KvK79MXb",
  "key20": "w2nAZVqyUfU3p17Bvmq5nNqsf2kGtwNbDnyLQyzLr1W15sDZ1YBUhyGbSzzKpgogGCMCRe7gP9jd8o9AUHdavQ3",
  "key21": "4u2CJigFn6pr3GebroSWXpgArUUzpdM46zCEtzq52PVnKqkLYXJ3TicfkZSYR2qPMB7p3ZV9gmQpvQ9s9sa1Eer8",
  "key22": "4ngDCBKCNFm8gFURZRbdNgQfN2nTFDhLphiV2rVHBaMGskSjpywwvKPcV1nPoJHUkoBxqeG9VKinMRmS7yqyh5FR",
  "key23": "4p1eQ3bY58V7c46CJDWfXMiLRCQB4t2U8xfabL1kWB9s1NJ2xbBVh92fRhvDE9XfttDpu14HTMnQ4mtA2idSgvS6",
  "key24": "3pYczet7k35wncA1SCXHak1mDKoNA6epVSuDUvZRASLPcGQKdQMKACediP1MByQNcBqpxo83SVx5XetyWGQCxFmf",
  "key25": "2UfntRAVA2YvrV1paPokMkQNXGh13RHog4CuwHi9V4u32rpPUEEMGbBuhrnXN6AL9JCx76RWQwEQc1dZbfLnpkfe",
  "key26": "36DryVn2ZN2Yuen7ZWY6HigCqTysZGRf7gtS83viQn2u1itqhxaYtUXkhkhdP4BiWPdYeZMC9gUn42prsAscphHj",
  "key27": "3QzAXtjRajA61PLZFTMkkmJXAgJ7w4bdZ352QrQ5eyZQziStBcHJrtf2zETmms39oTRZyrWxpmJ7chkFBbFPcVnA",
  "key28": "44BB4CwwZwfkPbadn9gLU523aQaabUbRdFxF1xETDnGvBLf3YkyHHUQR8qBGN41qmMSxPCJqdud9YGXgLz6gqof8",
  "key29": "4AnRYny6MCaK6tKE3MMeMkEaZuaAK4KR51GLG1prMRuAzh2rg1QyFAc6VNNn1s5Ueh69wCL9nThaaAoRPNhtobrN",
  "key30": "49hxwv2rdv1HA4iWDsC8GcuhnxNrEkqCwu4nhHpA5tdXHGUfbxYwzdtd12QRthRVpcnwTZqVEBAQKcTafoiqUhSP",
  "key31": "4sAaWZjCbvNanm4xATtNf8qVNGRphQhR3Ti6rNbVcK3srahz2bR7MEqZGx6dNHSic4BtpDcpWoFkaStcdcyqJq2y"
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
