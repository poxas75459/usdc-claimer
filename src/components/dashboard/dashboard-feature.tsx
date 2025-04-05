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
    "2kGt9Ftjmt66hwTX5PHqR7qyrQRusDD3kMxkvqS51dqV6r14px14kVMBXaPS7T2faCoaJsn7YTPswB1RkYRhHDSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZSsz7TvwkYoVrTKfPX2nukqFejcGbTqCMw6YJxvtU8wUkQgixjeyjdV4Kstw66Xta7iirhFZBFH6ySPnJesX3QN",
  "key1": "3EmDt7Tw5wr3Ke8HEXSJ6dDcFGwY7Y72TgdqaNnPtSTB5gqonabeFetgBu4FizDayEx5XQdZYLB5K9wuCm3wzJd4",
  "key2": "64FVec4gxtnEMLDb6FUh969J2C4ADkWmJm2M6DCsR7SLQDZqFLzthHYcN4dvv6Lja5qYD8NiZKsBMuYeZXqasLAY",
  "key3": "2AF6SZHrNr27bEUTLbHtsAfRPsbZy5N4HdsUCeoNTy1rZsYApg9FCiScrkH9J2VKPWgao4A8iGVfyGpJ937qP6qt",
  "key4": "4ewmhXnyMaJ58WQrMR9sveTAXAUZhU1AkQHLacVkFsc39o378cZNDsYhUA8CGxkj5f2okPabqAvfenb7xr5uvptA",
  "key5": "4Qb2nqqWGgKmrBVpMfEXTBPVtGWxSGm1NXncgWL9Xz6zphbyZxRZpoNuTJVEjSGM4XWDnHwuudjXbHkTDi3qJK7S",
  "key6": "5nurEScDMxkVSmAicugY2ja9VBFy91VAc36eoSRMnNt8C1BCTBH6s8kgkeSUPfuhMkTvErNnEKDhMS5MgugLBvbg",
  "key7": "3yn96q1wCVxm1CoPUAas4qncfriKrd7siXGpn48FVP1oQzn35YuVkzfPBW2HPnbQvHs4QvKuBdtsTPZ6xKnUAa7e",
  "key8": "59itFvu9zhCZmK2nbUQQT5s8vvk4pDSiqoGN6RpfUCpwKeHnhbHKVJWZUGMx6Way1czhS3DNKyAfCsxAvUdjdzKx",
  "key9": "4Z1tfrgCawGUiGUff2pr4k3u7m1otYRgKMusbzXXDAbeBVEHyeANBVPtrDjFBgFCrL8Er7pUDRjMpxMEJKwgdyTa",
  "key10": "KftfuvzfZbHjE8jo6uCEwCNn2GjKYtwKQc4UGQmcDDWcrDxo8CWxF4ZHMV613WEE6dsamAqwC1qJj1o9HwcaYFY",
  "key11": "2FzaLztRc4LJoZnkrSpnQ53qUKZTmD4NHDLgoUAf9i3q3LoFg6YBrroxT8z5MMdrFtGaYm3kuMKcpwmriX37D2gQ",
  "key12": "5qXGn8ZePEW1zVRAbft9zLZ35ckWv5hC3F2ox7DuXZBN7P4Bx9jsACyposzwEenEqiLiAhZPjn5Tetucn5Paxa8z",
  "key13": "2ZoAz6BQmMF5G3Y8NtNCxtka4W8GAtMtkMSFkTNhj348g8AY3nRo3YpsvpMcH5kv98QfSqvuvpwkSZYyhjq69Q1U",
  "key14": "3muoQBu8EfzKwBnsS5gnrU3twvu3YL7R5MucZwKi81Gz346YKAdo7w21NUW6t7Q4q21mRVZ3LtDQAEjKmHCUESma",
  "key15": "5SFx4sUhF1L8KAQssPHmKvJi3jy19XzgPWrn3C481ie6BnBn1vF7c9k7ZcLus4pfRn5DDYNdPbqxhzHGqqH8Zk1W",
  "key16": "5rvPpYVEDkCUgzDoy9iHqSAPeCoeN3uJ7QVUUZDcTi1SAd5k74YeRJB5szRSxMNG292Tfd3EcLZDNH6JGJbbYHAb",
  "key17": "3Gkt1uq59QMwYaYGT4GZrgbbpUoNN1KDE2Sf5JAFtqmomttCgbyGWYrEjAn64uxCiEHiTDqZ1wt7qpkLY9NeNmWR",
  "key18": "4au235PMPdnkVMHoiDWa9f3V7HDKCeoFtsqLT8Z4YLXFNYL3a23cB5KYCMHz7EEgeAUwtrvox6kaPoHoszCjwcd8",
  "key19": "62USzD9vcXYHLzJJDdjPXxKiLuNnP87iCmCWUR5pum6dyEmhZMAqtk6CgqGWo573hWSc6BXv5fX4LiHu7SrftsJu",
  "key20": "vsbVufPESqz9HiAF1ie9zGSaBXnQectCxnbrYSbkQZ8QpCQnJzWVFW342MhvyDCjVUMoYRr6qEwY2YF4SLqayEv",
  "key21": "289frHpPAzohEW26EC4MeqxHvpRpRpwY2jcSmiDFEAY1y89AmHJK3v7nvTcPLNboj64sbdauSSsTjKstFtBhs3YG",
  "key22": "52gr7DL9XM1pWj43ZQfCe36gbFjLdw9SzirL3jZCmSrAQjzTKsbm7xYFv7GAebjJNWQaA9NRWaFRSCVmyfk3aUaN",
  "key23": "VEkvre2sigjE5ZkgwMxodDWwHKFs3ZpT2SLBPx9pWmFNdTovWyLBhkHv7WACPku3RrMjYhFp4KYTMuhYJsKqWB8",
  "key24": "4ySWVQxZGWArAPGSzda3GwCBvDU1MgJDwVCUU1TxJ6A2tTsSpH9PrXcvVB94xW3RMhA9uYuNzKLARNhqLPYv3sSj",
  "key25": "2FTqqfQjZzxvHErW1byKSdVekCv7mCi1eiVSfQGLsyJWW71XzDKVB6V2XkVyoScXKtVm2N1xL7iCEU3mquZ75zM9"
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
