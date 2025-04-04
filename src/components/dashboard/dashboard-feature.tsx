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
    "2ohCDZU5Yu1kmYMUQCtz51vgkYzJzXJVSiFp9wrxeD1i6UQtjk2jiHWVccwLaJK7WrgQGb83GAggpR4EbN9j8N4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxkL4XcktxPT5FsZ6dcyDY6eBwQik2SSeC7E7mfpM9WamnRFRMj6YGZCb2QK1FUUWFkC6HjWzjWP1CaVEHSUfvm",
  "key1": "67qcMTCnRNAPDSMukRfLANbwdeuvEqaD2SrWAFjEH1vrPduNRQJ6KaY9HuyBUZecKYERZbaF5YpVieuzJK9HzByE",
  "key2": "4zDudUGymdqxmnywCxTMJeGYz94HACKHNKQFRX9rXsJhzfxMmgHhyCwspaCcMzEqJFhsquRJNgAAJx7EVUMUJd3X",
  "key3": "pd4JdnTj1YSgEmLgZUjuVAERZi1uUzYXdFMGt2uALKmBX6UiMy4iSVCspArSVcxLEYiLSMCydzDdJVPYzj7KBz9",
  "key4": "SCS77NCvKqa6iKnfSi7PYFaURQdb7pExrskziWU8uxvUd5fn8C7N9i19AYHWycjojWCx3Sv7GnnyLSqAZjZddsA",
  "key5": "5HLuMz33Ny8DRssdfV9dHFCPyAhkwgRRd7Q3qUXVBWwAMRX54Hn13URcXrbrTnqs4LS2tkVLChtCjKJQLR6EGw9d",
  "key6": "3MK2XvqxkZourraKm1NnjsPCNxdPQNPvpRtf7jtjYsDi1gBzcZQdpEyrTLEvj8Hj3H9a7AmcKCAbizJn8zFVH6FD",
  "key7": "4CXaTEiQdu8EyRSKQhQQiFshoMK68D3FXLVvHnhwfGGb4xLiMh9mLzyeoC3WnmEtytnU99zLQPwCCnnjj8ba17vj",
  "key8": "3oT9PnFrKQm4ZXFX5kNvGn7p8A3b419uZsUbsb7evAzP3nhzEaZdmvraNhujFFWwX84QQFLRFyifRqiuuBX5HbCV",
  "key9": "4HswQ6uG5kjk9LSm5mfG8mYbW1dKhaKREFztCgWGHUiQuRoV96z9p4ppMpW7HHd2fgQviT3egrhYdF3FhocQCi2z",
  "key10": "4N7amVywxFBFuPCiVNNLsY1pSPNiTaABxseAyifqjsp3FVfgsH4GRUyaHhnB5rPoxzTcfDmyBWGrt8KRCUNN8tU7",
  "key11": "2m8VadMUuVYnbWAWnG2artZnznmCUMcaeN2WL2zQTn5nPYa2eEp9ViC54Pk79uFf5tQfxQeEAtnveep7AzdwcgTR",
  "key12": "2seGodWf84yi9vxP5Fn3X6K1m7vnNJoWEz69XEF3VvmFVXPL5zZDtRwo2rpZkoYBGCYiskjqtb3JYy6j79qmMpo",
  "key13": "4jpEiQ44ZKA8xbMuWjom2TDtEZitVH3xbEMyCoFWzt57ZLFEECeXenvGzacYT2k1PQqEDUh6qCvFegpk4cDb3YWC",
  "key14": "oPpJixstXib4kVXYXHkRLovTDgoJfN5gUk3dYFjZhcYcsVp3tPfQGPdX412Uw29F4xXH1a3jfh2XSD7CcGELNS8",
  "key15": "2QdZDXztj1TBx4ffjjPjiUhP8cPjuzLhBoVNPEJbToBDW4e5kr64zTEQUWaKBNcxfpVjnJ9hjxKVknwXE8cFNr4s",
  "key16": "3tNZ9Rtb7JtpSJmodva916o6Usu2LPRNDsqHqsSoqsDg8Dqk6rV1K6BuxpL3Mi9NFBXgMhbcuZpVHLDiEyyF1Ljq",
  "key17": "4EgAiFQ2wybWuPUsuGAUAYcdmgaZ7fB3e1c6zXJ7Lqtgy5BbqTdkq16FJWt6D6HrZz14Rao5cGmXmwLKHeYNBmo5",
  "key18": "5QFJV6gA7aNCsUjD3uKeo36cgKN8qQNLsqjX1E5BMBgfMfnWo6HJhuWs9d9dWRBXXrFcfYjDWoFDTeooQMQ3aG6h",
  "key19": "4NrdoWGmgxokZobeueu7Fvz9fb3gK5Lmx92hCDPD9JtjErvEDekSney4mX9nBimgenA49UjfyvawG7BPpMGPhLfG",
  "key20": "3oix1CZvSE7hw8BdYFtR37JEwo4TWN1SfME12MLgvsHh5XsFZTigyYFg6RXqgBM6VBvjEQ7G1g1T3n9hm9N4xpec",
  "key21": "47kkz6RJHLxnaLMUpw6rKd6CbxtCutkRLmhPAqeHRYopFnkxYUYtv4Ej143bKWsBgTUgWY4StTnSnXC6YX5C3xFw",
  "key22": "5RB3BUvWYBQwEXhLYSsoEzRwqPQtRk2fdjnigfnhzJfEQBuV99LF8vuk1Wz615ih8mEaGwvTYZLcutjugdrUugiA",
  "key23": "5s2KXougXQyxpWRpZgKBa7TXDktQ2Hz9PAXuZbyCu66hortrVaGkGgX2VSMGQVMSbfP8ramkRBUVkaa26n6cuwvM",
  "key24": "2i87xXXYCGYJTDk6VPhET3EEgJPQ6sQTJEZFsebhSTXNp9S8V3c37Qby6eVjJi6bvWuy1heDU2kf3Bm6ap2DZZFN",
  "key25": "3DahyuBCH7Y9dDYVyZsRsQRfdgZfJtkrNA5oSULT6HH1nNrTjFZsKybUc5WTsvq8uQCMTPdzuA2kismJZae1bUvF",
  "key26": "5ndKA2eECAuRHnULnKEQonjA8oqc88zeebQkESvi2kzJvXDb69sp7nwL5HLDnhT5EwkdTerskStYzkFfwbVbXk96",
  "key27": "cdaZZkzJVc3myaMAjt8VrThgcYnccQEwGUSJ8FmATLUPTRrHEg4tbziMrM9Cz9tEiXxG18BMoaHSiQHvhLGJLx8",
  "key28": "2n6vXnysnqRj9kwSMSGuzrF6vSQwnnAb2LcgstkL51yfrPXEjwApgnuZruorkytbjjNhau5uVnkBCnBjFnxsrXQf",
  "key29": "2oQC9ScEZxGnCJZh88vMuRzbmWMp6R8V7SpvGWtc5ftDun7HooC4zRAaDhwrX3yre3jeH6UXd4Wjw938fGC7Bs1F",
  "key30": "2Sj3CSyjDvXxVRamG72pCrWxkPSMwM4eAu7vBqiKD2F3m5qAVyopuRj2QJvgxdBTDsNN2Gs9xj1FBFdj57t9C6Hx",
  "key31": "nqBhARurmAtWgGheCUoPURaaXCFAuvfDqqE4L5HwckzKPHzn8HSyUKoGe6Lo6GGj2xfGcYWJeaygHmPJbL15aHa"
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
