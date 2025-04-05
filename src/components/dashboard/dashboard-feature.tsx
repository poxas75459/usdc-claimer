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
    "8fy2Z75XUBLyoTWGeXU8d6DGPEAsj4naPL2AVm7dhsQknwui8u1wJ3J98yutTTdN171eGfsw9aQxXuZ4hoAiCq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJTXiTNj6jEKxZS7sFT7CokgYUy6wM1sK9fvTuYQmkSgED4QPrxFJvJCGxNB6wGAeCbDUTyYkKH3CJKTpBpA6v9",
  "key1": "17LJP5hSB9AAKisjDFNv3bWGXA7EhVusaQBtk9fMAGgBt3ki7Bqm3TPJZHR5NVYyfhdJ89JosUUt4yzzJvQoeZ4",
  "key2": "5TF2gmbzhAkYxpLH1GUqzBp8zFCoirirGn339zUdWpbHfRLEZ1fAYsMZLhruyxTi5GKph5k1PfaEcDJSJkFHVDCw",
  "key3": "4W1cbfeNednR2pRorn9kkvvqb6A1dTj5kUkjLiZGbnvN7hiWtcWQr9oMuhkEeRNkvxrqWQYXpn15aZZAH6JYSYr3",
  "key4": "255Yffc9DnNpEukRgwSYC5Q4by9KEnSmnUNmXXThrSVAQUyQ76nFPEobk7isxy65L1hUQtYLKeR2rNpEajUYmf83",
  "key5": "EZGASBx5BkHGESRZD8on8josvbtCKTkEBdzHvsuuAEFG3bZnAS3kChh4U7EEK757Vd4iWyisbj3YJDewUYmLT51",
  "key6": "sJivjChxTvzL7mYgkLkh9LLVcrMNmRfe1bJMWLhEmBiHBVBAVaEDaGpvkSM2T21VSBCqwj2ALtXbxNMywzbhs9v",
  "key7": "3wqvoHYfGne6miZB8ESKk3vfFghBYUQjNB93zgALJZNBmGK5S3frvrbmQbv1ZfiJ3wzbG9LNqjd88Pb2Ya7FHX2V",
  "key8": "3CTN8GRfkwgXrbkfEyUvmX41hPKbJkeTtphYsgGfEwHDWUxExHz7krLzy55b3XqaRj5KkYeEUNenoWT2MyLEdEB3",
  "key9": "5abLvjRxkesvYmLDa1Lp2byuWk6FpF7BFbaCNiJqord2rjfaMPESMeSLgagrhfpfSv22DiagmUXd6FDo5jYCGyhb",
  "key10": "5kHyWriFXeTnY7eHWpxQu8cXqyfd65cgSkUT5RravpCR8tSmgfQXp3AUFnxqRoBZ5JXhMH6iS94f9XypbTQpzZXy",
  "key11": "26hAcz7JMWjU2P99bKPtiXzP3G7cm6MYWeJfzKp5aUCgJ9SWuQPQrm3cKkpMjDV4ev1ggNzJWJ9MpyyH5ZHvDjwW",
  "key12": "jDLoJMxoPer19dR5uBFDzUH1ytyyhkLLMWVc5XUcvEQcYfmFyPui1F5sTv3o8zDmNUE3NbVwGaUqca8JS1zvkfB",
  "key13": "e3r57yZ3zKtfFwcH9TLbNQqsyozgvzZ5ouA5K9rSUjU9uMukZYfYFC8zCmsHChtLUNfSEy5CEwqkPUhVum9kfzf",
  "key14": "8JHbGbCyfUxDzXX4s8jf4QBfdjqwCSE8PBjTCM3osi4Pfe772RT4wt23mzKfHJU5t47a1FUYdJX3Y1byoS5h1wC",
  "key15": "4sAUst3DC2WM4qvEfHMv3uPgQU15xXo2qsSJrmTZWFHAZCg3Yy382qT3WyvEDvdsrzc5ZbTPBGefwYvSMJLNZuwq",
  "key16": "5GdRSiJtBBYXVJ5Q6hkmgG4HhpK1ZC76ZTqE3X1EbTibgdYPB9qYsKP925fFYsNJ25xHi3bWw7Kn5p5rdCoQyfFq",
  "key17": "WxkrBhyqfjgpfDRZku6RiKFX6jzzVneTySWqpxhfA4z7387L94q5QqRAqnhTeK1SJtNdKtzDwX1kha9uUZhhY6i",
  "key18": "2aS4ysToNo8QKRnx9HQfSnzrbb197yU1qN3anZQqJD9C3ivCtcAJ6jL6ND1HdGBwgSJLdSF4NjU4MVrgekGC24S5",
  "key19": "3Bmt3buuyaxkwH1qpsqp8Ws4UrEo2foAmCVXubhvLdyM4U773yNsfAcoDfQnFuLtPZtGok6tDxDpAL9tKCRyyH1G",
  "key20": "31BwYLUw8PtSoyaZtzy5hrU3JV3UTRfxWYp46hZhto1XosugGBKyn6uAxvQokxaqDcpHNNsC9uojXDRc2Ux1YBkH",
  "key21": "3Pbiovc49iXNhnnjiKGjBmYAqzAkfPrHt7wcsGSzGXVkqBwLhnTBJ9AwX7ZdN4uXGwmgzY5kEbAmW6Nwh1snMXX8",
  "key22": "5DwE44EiVK9ihHUSkF84QqUBdMG4fK9p4dMPzt1ouSTyogcVS8cYH4VLx6ASk9udpRPv6jy9TVPbESShwsb4ii17",
  "key23": "w2nzenVywKoWincYtLaMzU7eWsUsxPW28axcKxLJdpgzihRCKLLFKkuMygjLRpySbxFoyM1459k8PJebAXoxewk",
  "key24": "3prXVBdj9FZdWVPKwLR1LpQ6FtuXxtzqGPPkzJ82fDV4KpTQEX6ryQVmSbXPVFws72XNUuKzJwVk9U3N82snSVPe",
  "key25": "4SXbVWcBcQDKp8Fq4mcPTUfXGAkhgGLAEPh8LBCe1PoPLB5zAiSFG3bJRizLog9w3JAx34oRwcRreYgmqPQTEjRs",
  "key26": "4SYm41m1w8sFpn7kkv2Y6ViyTuTDJf9Fb9q3Ybk3XFHpKYtv8kqcn3B316c277MTWzkAZYRFMF2E4Sogqs8vQMDy",
  "key27": "2A2QfHLinkNFqpVDf69dUG7MUg52uf3ZSwMe7f4pomiMYbhwzKWgXka1tFh2uRJNJktLdbdwk6UrTnxE6o7seuaW",
  "key28": "5ngnAjoWS4LY8EoF7djwz3WY3Fx9bkwb4aAmDMFZeMo5BbFXRrjPxrboZMYEHUm6zb1Q3MG8VtrLCg2W3ufBkUka",
  "key29": "LVP5PyvNRbRwTWeJi2ffpTKsQPwXkmZGZB9uZ5DB6mkqnacsv4CiDbs9gT2bdtNRFdHxtRKRjWVyPWALacHS6zM",
  "key30": "21VBM2yjQygDQ5VDSMfaPmJLpt9RoA3wCBWSR5HwuHZqJTV1rmrT4d789YwDYLHjrtERSpAosTs1Zpz8NeymxWoG",
  "key31": "5ozST8ZCj1T5umang9XS4CseTf7V2JXMmBVxK5WSTc1uHWQkXqcHH2CkuTj8NLzo8gtrw5rFdY65NswQ4ndsCMoj",
  "key32": "3Uvm2Niyy9h5h5ZrdpNhXKLTbFmfE5maNzNXZzMnauZ3WXhq4UMAKLBkTyXK5TmLBzr1vyfjDsyj5gnp2kzXwA1y",
  "key33": "uqfzUh64GKqokzKmWA9cgnhbcAFUVfphEBCdbJhPhc2uc7yXQpFu8ZvzEzUqWhCnDC6cxavPRiv4JwsRD3ATkPA",
  "key34": "tHnJsLrzqVRgPfSSeiRB4o4N5kHhTPPGAynzfedo8a8pdh2sgyBUY3BLgYHnJtRzcN44mRQBgrzLUr2tmaZCMAG",
  "key35": "5EyG13WEhUyhvNnquzhmiAMbFyuhsJsduPoiKJDCK7vpbii7hruxfATFZ6fkEHrofyNaYNS9AZURqYxh5uhGYYWV",
  "key36": "5iTyPSJHiK455rsqKDHW7ABa8e9EvB7DPAKJRwYxNJsZxCjyw9RN8zU1WekrwtE1fwus2ZjjoMA2AzV6g7AxQ1Cj"
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
