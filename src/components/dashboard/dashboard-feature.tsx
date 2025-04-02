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
    "3eQPF5Aes39VL2w19AEi5YffDvyP3YYhpD6p8M1fw7AQ8HJDbZ9FXX5c2EsFJ4dERwrW8PbdeB1mUmP56BKSD5Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaRtayKZwircYRtkdxCXmRDM5exDsscs2YvLwTG69DJMpfrYcLdBnDUCrUegFwNugmDbm2ay6pztvGrHETrtRRv",
  "key1": "5taWoXHFJMiWHANYjDSjnNWzUvUDpB14XA8Xv1T5DJH8SLYAsMLCjYcGaBirYByjNQrGFSoyaUc3H8YAjBCzMNGT",
  "key2": "uC2ucdyPUCT5VuYHnhmnQQoygVetzkbmgxuwVdqdEfktEqeTRLtyE5kHiXhT8V9qGCT6WyKHiS9HaXa7xHL18rj",
  "key3": "1SrSpTvrsudQYpvH9rSMPDDZ4PZEkab4chYjByhJuSUSymdo5J5d6WkDRs89ooE5sr6hTA9EZEq6iesGr9CDJpA",
  "key4": "wkWFHCSUo5Td5n328Vc8RTFDcvZU5Sanng5183xd7db1HhcHnDzQbvQFxagWQ4xBmsyozNzukey7BJAWTFYcD2h",
  "key5": "3Bj3FcywjLxde9YAqZpQFC4yHwtPD9vdCgPum1js3SdbEFS6Cntw2xcHzpN1GiERffZobbdNMx9rou22TPLzVwc4",
  "key6": "gags13YEPkGbc7ezT75AoFw1izT5otasWzE27tnn1gks5SbxX2mpYi68zaKrbKEnqJqR1JJidwbd3BFT4L9XhjG",
  "key7": "5EbXUWBri6E34CCMGqtyP16Xz5THyn2mTFzPizf2JjFFZYYLYFC3oL2MrxVHWu1zvThbpemDXoHYmuNKSstyToWQ",
  "key8": "53r5vboGgmb5aPyS2TDtv847RppWMcy4WMX3x2smcdiXCmEsaQHA7R1QEgsZj5bNedEtNbrLa63hMTQXz1dGgTK4",
  "key9": "59TkfVxBCcJDyuCNf7ts6c9DayanD8uQiv2LR9Lyh9dKQMJocucvnUbxAht4PgYHsANrG7z3nEdwkPe92KRTghw1",
  "key10": "vttUsQ1AV4yi7N1gTxm5BmjBSpQuZDBxQWScaRB2Pr9J1EnwJTeyvJ2NpbKzphhPDoZTB6NdsNZgDDySSAUVDGm",
  "key11": "4uCw8BC2PZqcnFVTFKemrBztoxeWUaZztXbwWcTNizHjWfXDSbzEU974XnT1sxvXxnJuUpAkPYdTvdwBXzUmcDdC",
  "key12": "2APEcjpxTcJDU9PpfC7oCYEr3UzCzVYZBuC8GnzWMLXYa7h19pWXwuCzAiRXhsbYeZjpKmACGWj9yYBuPUCfhaLB",
  "key13": "5STYfZaYdZ94c85HiLpLgzecoVisa45xZY76S6xeQ3c2ffNcqbPD1Nep1CtGJ98nQPK2q69tak77AVG6Em2LLB2B",
  "key14": "4kkRsE7q1SvJgh3f6bLu9x3HoRXNaLoBJBj5dixpQR6G3ELYqXQEpddjUckGvAebBmX8Ag3vyYqNDj2a3AK8vvpP",
  "key15": "354vWVW8gYgVMMiiYd3tV42zoSnjP8twH2J1Yj7Db6eP8wZnPVoxaR877Wkba7r6VoPrsZhYgDeGwmhr8bw9zt5n",
  "key16": "5WJSTHjEghQJohZ7KcrYZu5w37L4siSrAATeC55taVmStQpwaQYgws5dM7fHywKvh639B88Cm2njQCg17QsXamxL",
  "key17": "3FV2Z1d93BLo7DERPcMfnMjAkewJhSmEe6vh3kf6GmMZZfaVodDzJfy2TTY1tqpTVktoTbQiWcSb33xWoUxTeUWo",
  "key18": "2viVcCVmdarWwT5GDReH4DBfivGRtrbxda9k9SXCo4oEFfMFZtPVjtzu8y2uCzD4czhZQnAYh5ydwSjgBWpd8FAc",
  "key19": "5qRdxur9NtUmMPiW5BCULnE62T77QH26uAMT1uPY2QtvxeVfVPSxEYf2GZsMqf2vc5QtD2uaghBsYjCyKxyRvwnA",
  "key20": "5pMdzGseE9gr1m4Jp5h2XcKeYvc8cwWpLY87bvVXEtYBMF76eX2M2FMT7J7s3aAVsgLHXk5HsrJR7A6eVJoi4Fpf",
  "key21": "3rWT86PQJiDZEAQC4jnmZShGEuY3RoD8rkR2RqfNS3JtiiWYss3rVVE8hPD9uDzQt7VaHcDsqdWamy7xMuc7qwY5",
  "key22": "AUM4w1NDQ7fueviL2JZKNkK2LbuRbtEwDoVozXYcAwHZWtqmgTT8U5KT5TYixbuam7yaPET1XKs3fPYsoj8MWCu",
  "key23": "5pgitEh1iYNF9MQMa4MkTWARKM7WTM2He2NnYhoWY7QvoLeU8C4qRwvDzsw6wx2h3cgSDtWE7WEtWG1kpDmV4qT4",
  "key24": "2jPgRdSwMAEufdi8fhTJaQUDL3ADfQnYN1Y72s9NE2r5gu5JUUzo25fkJLFFcoPvqvouXgL74Ln23zeW5299Kw3h",
  "key25": "4E7RTM3pk4VmHBc5EhFXvriczDx4NiJ6nVPoZpGsHqWJ44vMvYYAkW4Y2AVeuq3Z9WDyq24pwNMbS9RLZnMpnLPX",
  "key26": "4gG7iWrohNCMCThPeEhcEupocSc1AWZ8EBDAsfogX6MhJs1tq8tUcXqcXSQUdsMXuhgManXioUTAVHVbkzSdyGP9",
  "key27": "DsmJToUi687Gt9VSxkddpHPfpEWXSYo9SgmYPDEqF2xHJ3FUS8JyCaRZwCoBvcg9rDpz2Q5gTVhF4B7KnBeok4h",
  "key28": "ojYLJL2wYEooa7hSmdJAjyLQyL8qfueCBDBwrLVqwEKxJGeKgyLLXkfYG5XQtWeFLgk4fc1kgyvxtie8xAx8vjx",
  "key29": "3jNoMwNh4dGwbZ5jKc578VuR9Fi7DsNf8W67HdGgvSvm1QDJsvFTBmgcFajMJJ8T6yYpj8CKofp4k6wKFEofEvxZ"
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
