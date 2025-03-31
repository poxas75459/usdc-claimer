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
    "rUb1LjAVaiiwnfucDmPNHB5Rg4g9TZJzzcBURy7FonV3KknyWihCAudio7ccqEF9JoA5a5hqbinvSCqPemKwGCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oM9NDPRaUsgPZL7789ekQdeCVAacjaGvtu6QVn1DrThDUXEWhugbFVUr3zG3nJbLX4Xtd3rPiBKoNSanM2Bf9yi",
  "key1": "Hci36L7wMXXnJdwpiDrKPjU5RnKyKHsNV1oW5doPyhWhf6uxzvBaTRg9C5DNjPY6tohcXMfNYzD5zQyMhiyHe5x",
  "key2": "3phRXqvqyqBn7PuWuFRRcpg6eF5coMcZc11zr542XGAn2wMguYjeUBf5LUtGGvNBf1xhJ2ArxHodn1NFMPXGd2Xi",
  "key3": "8mGLdPRNMuudBtjHLHFEuiY9gsyU6uBXRwtznvTrcbU4qQBzjXNCo9KLmdtvsFZy7utfZrZs8xPCen9duzL6Xkc",
  "key4": "EA3kN7rZauyzPFsUeRL5V2eaACYNdveZhNDA5CdsExMKVeJg3hMePgfAuPu1MQ5HVPh5YEhX3ALqSTYzEWS1RnU",
  "key5": "2rT5jE5Pm3YdY29mRQRSraTbMYiT7e99bgUahW9SczxiJit5A6rZrPgNijB2X18BqAUYNX7yNzBCaavsEcmHjeCe",
  "key6": "Fohm8zpMB44ovpYNFJ4Z7ngWGa7QTi7jrFKTAYRu9d5yeGLHKVEr859ADeUQkCusd7PD9gLzuJ847J8zdAVHy2u",
  "key7": "2MKuRz6YnX2qBHQKy42GDKzx2XFDsp1Y8mui7ivVXbETuVW45H3Pp7pYzuviCdEQ9c2bmqstee85f2g8gZZ9cSLy",
  "key8": "4MFZqnTw6BLsM5tuWi1KG6t7juhEQE977RKKNosyPugra3xa2tic8gv6odBguC5QHUawA71WirHHrViCzayqyqo2",
  "key9": "4BqRuyeEGK1FSz2UQuCYho7pLZzinA5cyyXRe1mPh9q4K4AF2c3EVJJw46VQHF1JRyoWdNW6Eg4E69Q3BzbwDoF2",
  "key10": "A3oDgPF8CXpBtPSYFpqbCcrC5eV17KJYFDoig9ofEiSUdjPe6HLmVy5Tqxy68rtgA1kzHRfRwxUYgQdS3KKh95M",
  "key11": "2V8r6BwuJZcUve1k6aqRsLqqiKLbb9PKpmrE48jXWcBkZ7yNHBycLFd4UEaBcXTW76hgudceh1Ckp43HqYKjindf",
  "key12": "3ZUebdmNN55MQXYCcWuJsFnhkU49NACV42B3xbozFKKExujvS1xT8hAwmwJWYHEXKwAs5E1Hkm3rEshFf3zj3nWv",
  "key13": "4UTNTpxQj1pSfy9Vjo8RTWmG3KyZTKNYuqnPeu9MawukBYiPqdczXZBHyzFv1rVzzLsAhyKusJ2WjXy1fFY4n2vd",
  "key14": "53yEhXq1N4HtZLbrSnAT9uafHM3VZNMYH7QqwRd4oFncWmamrvVcFHwFLCgzNx3GGfRYdoqBjVLUxx4W6uW4upi9",
  "key15": "42SAkF9UkwBbkR35PDGLevjT5Cp7JGBSK9htkXfax6GDgd3ELfx1p3tY2Qs2Q5LcoDCarRMtQs5uXb2SVXRLAT3a",
  "key16": "3MfJGFWFeMYukbeG2ngUQaXY5JpxkDtELwzQSznBouYeuNFANfxJ42K3LhbyLcF7LssEb76GEtbfMTD5EFNhfHaB",
  "key17": "3DVrM7yKP9fbaB9PMhhxBexQsM666afGikg1VZSn58V4XrGC8wMok922vUDmTyRG2MeoPqc8AKG6iQRHAhus6EdC",
  "key18": "owzwF92PDLHV8od5AJTeCPGv7RRj84qmdcVy9ea9EW9TDsmky8a6LN52vscg6NccBq8dKkBN5LRASZyrRcqamBQ",
  "key19": "4X1TV1TRw7HTnNMQiz9Xf84HCmRtG9ZLX7BPL9UcwTvmD3EhaSqFT44v3vWfsPM3aWhGXYysAwK1qDHFHiJvfHgn",
  "key20": "26doAX4hg4a5HFbtCEVogPXkKsYHe4XEPoUR7RbrLcwLQXo5LbsZS7BTXHo912dsG3VApiMi9Ls5m8bo2jCZJUTx",
  "key21": "5jgWyaadz8uTvTL1GM341bmnfoM4EmxF1fiTJxxYL7LF14dDmha5Q4RmXXEpMNy1D1BknwuJQ1wE44CGgHcbRBYX",
  "key22": "4as4ohEMPSfYHLPNR87KyeJUn46vAtL3Xq3Cdgq14UTorujRtqFBM2wy1QMUp4Bofu6UrLsEEH6fJwUqG1LqvU5L",
  "key23": "4pX5eDMqAoRQFKVK5D4tFdkCCtJJ8RA6CsJd2bp3n7LJYQ1qb6F7W7MV8VYPtkHMKi4uAiaWThreg6qsNNnySkow",
  "key24": "5KpxzzCQ1qtBRfx1TDub1FHrFQYtiwnkxqM14eyBYmWM5kYMbVJFq3LVBieidpnMi8KcAzeojKvcZaytvDSGk2Rd",
  "key25": "3An37ikFSfTNdLy4CZL3KaC3ESUZ3cmFN46N3qVNW2VoRVQA6uEt57DU87QQqbs5cArN7TkVdHVJKTUTCyyfnDU7",
  "key26": "2QMPdq4cYCRpyugYRTgKPbw2PPhLqCM4D3eozwWuff7UT4v47aF2xgZPYH1nnWzot2zqm47ABhSNAVo6z6yzxuNL"
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
