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
    "5ugBhSchbFbCLy3376RCqRBmyLxvSQJkqhzkJbUH2N2FAnenfhnPwZLMoE1yCJKyhExXK1EGoVGQMLyGgiNMGEhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UT46tqEQXKQTfStAoq3KWCrqDR9Fnp5CxhSiyieZ6R9mekGckv1X8qJ2ryEL9UAjWtbr2DAHmTDDKeLNw3RtW7K",
  "key1": "2KHWhE6VFhfRaJeRrsY58iJeZ44JL6UTJG84Std2PwgS4uLrS4zzAMXbp6iwmFepp2Xt91pHKX9yHYxtwbKZwXrh",
  "key2": "2e1dcatDCimQnTfPmYDXp5DFgPxGT3dAgYB1QSp8jTjAfmERouTvfr2JdjrHvwRbkGqWJiJFx2ridf7SuTsw2YHP",
  "key3": "5KsUt1Bdt6c6dKsvoyWx2VXv38EJGHEEDT7f3CxiHynv6tkYBVSZpjzEWGHgWGahrZ5UrfpxAHisn4L5HXbGNCdE",
  "key4": "42VSPsekhfJKwFhXPUd4rT6Dt6poEB4PXYeh2kSzjjYEiNfEHUvpjSVNropZyjscSh3UcVfgKkg8eWCN7NKa5dmK",
  "key5": "2L6CoTYKJSSzxDZEcST7yrbBLDtLPryp1vjprz736RbitNqC55V2hJkCRBZoA1W6fGSXayaczfvMJ4VeAuzL3yXZ",
  "key6": "2kGkVKJK3UWtMw8f7hQ2iFBRGhDppvzTu5fFCvzJkvvkUogdgV6zmuu195zPHjr4fKnckJ46MUgJzreAgu7jUwWv",
  "key7": "7E7txRiPf73U6z72eTYt1fDGoLMEdVn6GAtCwq4xd2Csj1WvRbN14YWF9AtHQdSB62er8tdcXBSCPLxZWFSL3xA",
  "key8": "5JCMahUnKM9d5pbT5o2WiQZsdNZSpPSKMH1KoFz3A88eXkGgM5LEDJpwMDxzudubTUsXD3KvJZypTyErLZUSC7sL",
  "key9": "178ZrmfWSDY7NKdEwvrT3GD9v2Nvtq9La7qzWxBH7rhBquuxGPwWVCxGprqFJYJr9ANDARy3gW4peUwbxsGHPV4",
  "key10": "4wnrb1GaHbjtEbwrydFDu3oBUVnMA7jYgDqJpaJfJJZTyR2agoDyDFFkCx4X7XVtk5meJxoF9DrYrSLE3BHfEnMw",
  "key11": "z3AkdADsUzngDWuvBtNRrYEM88F4eaguPTHSGq8JNxMQYnp1dyLbKikytC5DjC7NGWAdMKP1MJ4iPK61PnAb7BN",
  "key12": "3CSTkiDTJkuzrUXtnJLjUh9SwBWMrNwt5iF93bSUQxh95SFFQKYHM5ZrqZKz6xUBibxApHn7rdpc2fo4BP7kj3Sy",
  "key13": "NCPiTgs1Ga39h1vNxgG1qbCULjEfcB7dcXgsD7MjVnNcBLfDJinzFmSk9xKjaChG7C4xrSp9nNAyZZpnRywjR2B",
  "key14": "JE5kcMDQAf1uYPVui6WpmC6jXnnjryHDxyUXqfJttr9Cp7JuHYe8hycPvL8rHrVPU5uAbujDtx1aFw4hyu565sR",
  "key15": "yabkpbJu6EMnrqEGRTyo2p4P8W5tdHDmuSQaHCQpPEixF7Fx8T5N8RxSfLXjiKGoRTUQV4QyQMt9tD9QBRJEcie",
  "key16": "4utBy5rrHZBRg4US85DTmSXJuTKH6PS1y4NJSXZ1aziYbdVegwvSEKe3cwvENsUes9Xv3ACxgCyiTvVGafzajWV6",
  "key17": "4Df4c9WkTetWbyXYbP2GtopygB4rLjt9oMHsjpdbLvsEdujShEPcCHpYfYTCuUaZqtrzL6KsxMT7CeFpc9Fez6Pc",
  "key18": "4ULfZtpof6hjNn3yc4N1Y2nisue1J5sQyvqvxCwXQ9ukzWwNWAhBZMEmVezRb79Etome54xBjSym6gWTkkUfv8vL",
  "key19": "JwawwSXFyEQoj1K4rk7PQppEgBVPouypa2LyXKaQtejkSBdNc5rSzmZqEz8m4WFYeHUEZ2Kw2YT4gs1Tw5P6Wdz",
  "key20": "32ixd9UT7HKhTfmuuh37eotUn244CW4LnsioQ3WsoMEde4tKr3yGbH6Np43q7gvU251ofm2Byhnbjm6rR5XJf7Zc",
  "key21": "5tDRdQ8ry5HbJQ2PF85b4VPnx98hxX4m3iS5twjFfZfFjDGjAZgo46uYeo7o1zg2rAYX9NtNcfw4JjejEJBA31sf",
  "key22": "46GE7MMP17i21CEF1tn28AmRkRRkEuQViD3dPDsEPsmaQiVNKSz1yNDCULTc1mxZp4sy5rg3ks86Nt8u9RkcQGrT",
  "key23": "3reRvTJgo2TQGSBQgUZBh6EwnM9FUb8XS9desWB9HCbo7CMwYnwusP2t6hcf5EhygrmEFjAuFyyb7uvdct28unjL",
  "key24": "2FYWhKXHBFCLujWJWCHm3tkCRDTvzaKq7Teodg42RZgQCgwBJYLeEw8ypS4qmiYc1xtoXQfioAw7ivfhFfhAhuQz"
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
