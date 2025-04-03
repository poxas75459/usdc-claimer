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
    "4WgfGs6obyWECcpkztghDhCeqmpwwukN9v7d1Z9ojNMqv4rjymvQyRyFGBHfA5ZqHtQ8MT7qVJWtuLwXeMrBj9hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNXLUgZfkXZ3oGsPtopQrDMrtSYJV3cTkGWamrRycDRuQjtz5V2CD74evYLs9oAeLXf8fQtER7oS1HLb2rE7Nvc",
  "key1": "4asRfVV9MtbyLaMYs7FRb3RGWgWhftHoVz7cYv9eBA9NNUBCwQD1vhv7nbkw9HKLb4mRuyoS4Z6QKYUvGLyMcdg7",
  "key2": "KoiHQoakiH3tU57Ufb8wsCq4Uehk4a8U66WCUnWkP4A59JMBrmWQ1UtA4KqEA3u7Pf8HR1rdWjefD277v9PJWjy",
  "key3": "tbC8WJN5pJUJudaZ8KudkknqxNAGteyiifdN447b5Xh2SD8ucKG7GQnh9hWwJEWeA9pnZ85882hZkUDrsWDX5Ca",
  "key4": "5SyBMrhT5hiuQMKVhnrPW3BNoSVrjYNoxsbi4SNTUUDNjq9JeoQ6WsthdMe9iiW3sHKHi3TGHKWGDhdutKYHydti",
  "key5": "39rYk9Ytkq1CVCC7tsoXsepTtzhiL99vRi1a9zMqcDcWShgnTCeT7yN5rod9zF1TMky9ZMjtya5Ew8ZxwjYKctgF",
  "key6": "49ikuYX8fd21kyHJkQAtSkTHNHLc5jDicDYM2XLykHBMWzf6FvEgbinHhi7saCaoFqZv4rHfTsKCGxbWUo5tG92m",
  "key7": "4x8q6WNeZAAVhDR6dTP7DN1eUrL4RdCGhSDJcrSJg55AKyP3EqwJ8aZaXnFTrJULuCHUViuSDRP4oXbvGJW9TRnK",
  "key8": "2Hj1fK23dBmHqqN4QD9stjumFAR2MPHheQGson2zwevEL2ZX3vtr7rK8tAs44S5WhXLyHZ3aXQx1QRTz7XBpFDjx",
  "key9": "23VkcqqSQjYFe6e7Ud6NjtN5MdNCWbhWoRirjegvJXa6Xupk6gHN16W4DHbja1ouhXFQa88H3Lg7S1NXqztj5eVp",
  "key10": "66kRtf9wZyGmYPt5d2TAKyvpAABByMLnLsXc89viMbvfgsorZqKLjLhuMB2Dtv2EKM5DSgBjED6VMPFhqi6ZnfG2",
  "key11": "61FPcLeDxxyVkpdjjeXdU4XLzaJfnVNpSYgt9uXqdg1Vh68sPNerjqgpzU5UvoLmKbaZDvJ3A2Uafsj3AzuJGZzK",
  "key12": "nKB5G9Y4Fc3VpeWST7wGJZvcp9axV8HNk7EkGFGen1xQvQjWvpHAtCoVq17tnBPVc6bxok4wL2MZEoR6zG2ZmFJ",
  "key13": "2nit8ms5gASf8rMv9Vxu9RDYaKrpq5Xyw2Tyjz8Xd4XRePWJgw349RdpXEDjpdUHJcGnHAEmBZhPGhRQjqssesjq",
  "key14": "4FRVqstqEFoNDXU8b75qfkrXgXmYTv2ge1rGb9KGVubM5TRe9dSfdZYcZ8DeEjfcTvAcTWXK2rVxqgYuSme8Mnxj",
  "key15": "FnXX1iyw2XV66JUAAchxRW3o3b4uHb2iTUR9kPSLP2hriHu85Ze1RviAK4BATZUi1D4Dhvw5Lwf847S6howckKD",
  "key16": "5RGhsmzPkbutuGcWZWYyQ7iC9ErC9bkmFvSqyTrHEJhpEf5g76eZSneCAisi315uBW7DgwLuhazkWZrChrdd3gPU",
  "key17": "xb7mkyk5HzBH3fifMTcgaaWtN6S3dveySrZnu5sZBchF493PmLty3aGsefax8tr6RPUe6vYznWN63H7eXfj1DW2",
  "key18": "5ERM1ZNFJEAWXJNeoyjWTq5FXunbrbEosDauTv73mejE7zMBizKSQsVqvVrrNRjvFKrH5hZjYMocy4aZKQcUFYAc",
  "key19": "5sCv1TjtaofdCdFjqDXQeSn1CEE5ZyGUNFDVsRRZMtZsfCiGuv8fioxzgJxYRpxZMaPkdvCz5oWdPsZMAnjbBXzS",
  "key20": "3miZBQB3gF3Vab4Fu7z7UE9dVCg435SxZ2AbKjVGHUKBXmgH5TpxBHpjSEQHPeVBj6fHrMfyUu8RpvWz4Qvor13i",
  "key21": "4e1sf67WJrRMXo7bt6WY965RPzTPMRLgKw3TErBreHy5SfiMhxw1G1rePahsajCa7hBkRomkJvQnCwnJFag48Tcn",
  "key22": "f1E2ZsDKNrWo5wEcKuvWtdpaBCurQ2H8nNF7ge3G7zUBhBs6qZ8oPUc9ZkZHgeGiGczkCEVCzA6qW217i9T4zqC",
  "key23": "5Q9gVkEMnieXdc6CK9pAtzt1KmjJz61mJ9nwWjBX98tfqxv8yiu4ndUQJyyxmzvPwuicopVkyBUUe9T8y4nMWyXx",
  "key24": "42sd1TqDHKfEtEuUbSojatYTjW361s7dKarLb134ry83nokLRpHPGv5afACMY2yqMDcZqXgxEkNfeLZ6c1C8QVXG",
  "key25": "yNwsyZWNjVoLa25cecgsMnZCex8esBKBssEKLtna2gLceCiCP7RRaQpZurEpC7QsZVYz4JB5xJEiytnJodGS1br",
  "key26": "5Cua3ZUbeJQqkLAuNVK4LhVRvEiUrN2twuVsHbNmLRqdKoAW5nEyz6A6pKgYRkLJ4wBNB84xi77MMdXysB6YbwpT",
  "key27": "mCupoq5GNTHHFW1psxRrwT72wvt8gigU6z7hZhMQrMhd9GCMesE1Kytf4Dwn2fcMeYeHGN9JoNjtR4ceh8TBma2",
  "key28": "5bUHfn7p84y1UTWadewq7vhc4PieuTyMyQJDZjgmr9ukvuDi6tYvYx2zKzmYcQ7mA65UyfmZY9NNfa3GUq4Vgmzo",
  "key29": "5cbZgV47gHVh3qg9KipVoAztWaaXrqU5p4Da3JW5ZYf2XTaHk3hmGQkc6k6ngzJTXHNtguSr2XvqZm4k7LNDgSbZ",
  "key30": "5w2hSNvNsqGAKarYLWd5qBu2dmNLZr3BQYH5aWsF2NR8h8KS79Qwvvu1HSMZ9RobF2S9LA8Rh1Ve3xW55MyQJccn",
  "key31": "2N4Wii6ja7WEHrGyUEq62NsXGf5MPp2S8BngRFBUfZdurS7KkqRkjdVYyc86xmHhuECjpsNr3HU6hHSQiBMoJXP7",
  "key32": "mK66DWyxThRNsr6x7eL1Tysn1UhcPpjMaG5bEr1cXZ3W9aznQvBax8XEUeqE55qRb6N2KQHP5EsSWfiwPRPfQpw",
  "key33": "4LctMyrR7iCtg7h9g2QZFkUKr43ipMt2gDhNbxbvi3FjJnMR3586Aht8bnjjZVC2QsLzP13cgA7SUDiygo1mGZNH"
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
