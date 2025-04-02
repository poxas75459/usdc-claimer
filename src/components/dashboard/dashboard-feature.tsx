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
    "1mhpLoAjTjsCZdCrwKdggUk3bVETyhVHRX5Fh6YhcjktGYtQFib4WFgebNvKwsgVKWFbiNjvsnn2HXzm6oUp1Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvncS2RM5v6mxJAExCNoRmH1Nx17BNKPDAJ52mMZwWFJ6Zm6RKvSg9UfjxKBXoGY8mcFiJTwMMfJv7rvjc2fjtq",
  "key1": "5KzWDSvM2mVicSgDXebbsaHJBQb9DgLq2hHzr41tvzwi8W7DTZ3PT4AdPzx2qS9Q1Se3jthc67gVqYeCJwtBXrPy",
  "key2": "4SuoRzpfFE9oi3ob5RsiUQYhMDWH7nNBBhst8G6vGdmbvNb1UXLtcgwtVd6gHdMm7NkP95kMTpyed77GJkEumgHt",
  "key3": "3nuoXVhYAtAbgdwnusb16uNDmcYDfKq12U6xXMphVwNaZwnQbkSw4axcxMvKSocMrgJ18wNFhsP9o2CiVS9JCnRV",
  "key4": "34Qot1xN67uLwsD3dVeMnf1jqeCvRiGFo1D2g6zHG27GZEmhdcxDefqS7jAezqD3XkPuapGTzTjELkeoWhipfiw6",
  "key5": "weky1Y8VCzNEAhSeCYxXE5Jx97hSMwUysJLikX95VmY8YmyCk4wumQctBVjU8gQyv29xzr6jn62jeUULuRhU32W",
  "key6": "q9KUwWFAocLH3U1V9LNDejT2qc5jY7WSkAQUH1QjB8zWJajtaiehS6SnKsYgySBdKMVMXuLfzHhQRSRfw6RLQAV",
  "key7": "4kYTceHjuvPAHr81UcCUtC76dRj9tHi4hwy2bhCWvSAmoBv8SsvJq28HwUtRj1ovioXG9EUPNUFULQcRKj5MoaBd",
  "key8": "2cQNRTP1uzJoUtYTaDtrzEiwrhSoSjuKtxXeTJukQiBFBr2kVfngHZ21aZur5FhCnnJgunA9J88YyX8HZBMNFwx2",
  "key9": "62w8K8DABx8kGmkFNx7CFbFmGybvvpVFDHsbkies2vEGcN3k5mdBCSTr6BzmA2rjAVyZgr9ptLsPFR1ZVNcrFh1x",
  "key10": "5XJC5FUFHjg4y8M5wPhQd8VyBsqYUD59XQh8eFYSYnCoA6a4qLw9zYVdU97WSLM31Y6191tVf7cVvwRYQk2VTuLS",
  "key11": "5vhT2vRAD6inGbFNWFwiCS2TKVi61imspDZdAmvu6KRxrD74pAZzBpsEjK84jJb1aBrWAaoah8XUPofe1aPZG8bi",
  "key12": "5tEWF9pK5FVNBMPBgDhemTEGM5XvL9s6aB48WLdN4oJh3yqQrCa1wVLx7ffcd27UiArf3nAGrxnh23RDQomP71U4",
  "key13": "2YiwqMVLPg3m2GbNG1m54s8JCPum6aqzj7vq2xWhXw6wqZ6R64Km5hpH2Tw4FFqSBmMf1eLMC1Uem6Y4uAWVf5Fk",
  "key14": "3y8K28p6fXWuANywrNu1zBwzhj9CK6C6MSk3qARS8YRAevT9sutvbeCy88CLMHyuRkiPbJUCfc9XWWbkMXDxJGMK",
  "key15": "5N5VNPx8HAEfaZQpbZxShUyTwUxu4P5CR3ZtoSk6et7vbMAJx2m49NWBQ3iEk6QdMbZkfCzCeEwZgz9eKPFqVwty",
  "key16": "4uHDN8CmXrjq2dhMDPJdoX8yUAcKMTtxdqwtV4mtnMcr3AZjKBna3SvNtHv5ceSmFPEZwS9etV2becM4ViKvKvJi",
  "key17": "3Fr95JPVENSdgYykRh5SnccHQQtwZz6EA5AsTESDX5VLG5WLHHwb5zkjFwQL91PfwLjMzJzX5pHjuYCtGzRftZkm",
  "key18": "4PT8pjovfEXCNGGnwwmXn2kCGzKJNbypjQRCDWWM9ZwoLmXPUhPvNgDvrfVQ9Da33NPNJUmCY8fzWbGsJV3iu6Kb",
  "key19": "7rHzHTjA3KE5HRsRLzJBHeHici3a4rQZ451egmTSpBdhNURDuRrUbhAfMXHhSnS3R7pb9NmPyfLVzNP7JpxgALV",
  "key20": "34N4pLeb1KcqC7mNecZDa2oRMQuBEYnRxYUaF6C8KzLwA3soL9aminrF3pSS61RSU3reHz1BEY9xuAtC2EYoFDy3",
  "key21": "3BmEXtwRr2KRbC4b1Q5iLzyisCVbAa7vbHddnnPkR8AaKqygm6QU9fjejxD9BVeNo16XGpFKuVgHYYdxeQaFs2Tb",
  "key22": "PE26tDMK95sW9oNfoDQkYAUMZhuJ89ogPRrrQjpnuwhoiV8WJ8ZGvMjTwZEUxicYcEBraKu2TUaZYXV4dVuHXPo",
  "key23": "5PMPZUXaVmsahjeFQBwovR2AbsZRnwkm59kSyggCwLhwoYw54AAYYU1mw9D4BrEG3V1Y3iWbRMEV9Cew7pScsjHe",
  "key24": "54UfXZk1i1muexuUQRcJVMgJ24CASdpcdN6SUCAAS1xcqrrFNNTkaab2t1DNtj2A4rWQLxa3wkXjuJRrCux8kBVN",
  "key25": "2UE7u8Ec7KwNEF6NR2gyVt6UcwZtphXT9iw32rjSQKPLpdTDy9FFwacSSrYLnqzGqSox9YQDDtshSHvJJiAa7Kf9",
  "key26": "3suiXtnvvXiAkKd5JjYp8evRem9aRY1GnnYHTtT8t47nfzNadJFhCY8VYmzqy5oxqwzNiVJzV4PNAYauk8erz8LP",
  "key27": "66MXPR9N9NcNkQ3HPCtrqYsktn33qo6e6asVeL8Sm6oEgkBAdZT2Kx2Hxu4QtPsxRR7dwn1VGmNeLJnctXwdvu2K",
  "key28": "3zehxsurwn4ovzxdGTtjYiv5r3C22ZdUNKF7nVRqBDfBA2HzyWtMh85beG7bVnFfVVnxMoUzCvdDgVgX67ELBBzy",
  "key29": "5uWSuP6AY4HB4uSGjeUHXVDAVn9AzGK7oVn6Z5pgYjUbvKPuP69n5ZU5HZfCpD84Do3evvdgvb6RoMShSxigyRi6"
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
