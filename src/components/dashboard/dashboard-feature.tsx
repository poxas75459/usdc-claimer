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
    "2iLVRajLfMFXeEKjF2nE35Mgat8r2NNHJGaxE81LUWzQFZjjXpP5adazidVytV1xy99ySFL3xxYp1mCZb6DddoTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DG96vrDgjLjNpKPcvncqgN9qodj7taAfk1EM1xTGuf3UtYrAFEhN7yVknoPrq1tsvS7MeUSbx6cXscYX2skaq6Y",
  "key1": "3BMyZG1MLkzAHbA4dZaGMHCCvEXGY6JV4dGqxenvrsd6w3AHQ9h4h4whTWcRy7QRT8o5SpPo5cqNkQyyAkvE1ZFU",
  "key2": "hnu6bbZhSpfRdFT5THPPohixPH1zS1bdB38Y4wBoxfb6JE7hMjP69gfnyrWG2kANFKZNJdrKoCqah5YtnD2NScQ",
  "key3": "pBh43ws9jrpBSMRqQeUz43z95MZ1q6orZwqigUdUGbcBzHaeGsi5he9NVJCjp1wWvtSpud9fBGzCN2H4oFN3oTg",
  "key4": "4Xd58Xwqzdhkvs9wUUCJ2ZuDgYSTpNxWm8xdegQvwigK8WH3JxqXT5hNy3nUyiv57nogXqEHkt5nBh5VN4ZBqaxZ",
  "key5": "3LKXmzUjBchPkwuk6H7mjbqoDWqK8JxPNVL8scjc4HkzvUR6rydWzvReuuDzvQ257pQ9MMWHvppyfeiXFVaHcPzX",
  "key6": "GPNnVPzMrVizMNE9Nf1AH3woxtf7bR4nccugR5VVVDEFSUYxKWKp3bc3SuadrdNAuSYB4GRCkrE36H5g1sjTF9B",
  "key7": "jYrBDAdjTP1mnVDkDmVnB6BgrcRxDLMp6xAiBPAx8TcmDLtD7oouqFn4NFpgNgewokz889DUa98LFiWLxqBf9P3",
  "key8": "j2tzQsA5tmCoaUzzMB4pi29i5Qmke3vWsrj2akasaKbNfxzCsrMuBfqVzcz2dLaxKNkcuxkYW1yDR5YsveLBgJe",
  "key9": "4Mc2qxKXNU5s5UHftVRU7aHwd7HCFX6rXYW231iYCrFc78aUtnx4ACJt9C18PDx9cECcQ67X3stuLUqQzFcvtSQS",
  "key10": "4owV7rFD9HUxqoF1wrr7xngNnRyqHFumot4a9NyLjYWoiwG9tFj1iBodVxd9L9n6aoVyMVDgzAaKkWQKFhUUXWhS",
  "key11": "ijWC5mCoR5rBTPxsz8MfxLh2GgqZ3eEdMjxJYSvyjpFgvi9kcQfR2nAYriCiqanAc1hscneHLQmUQDHGXRBiZfH",
  "key12": "2cjCh1wZkV5sBrfHP669nLYkJNxv6E7R3Xmj8xBnZVxNzfm4GD3hqwArxAFNSnqQWy32MoUxNe8iVcZ7Bv1xsYsW",
  "key13": "dmXY3UoejZkJoBDCvmckiVLV5bsoE53dTLPg5wzsGNs6VVWMCp2uPfPvyBAB6VuJt8cyh1XcgaUFQUbsxWsyQhb",
  "key14": "3DLUsunFdkvnLZ1j1ssxGphZE3NgfPKT2oBHkDQygRwqiNkgmEKopzMfJLtuLECxYen2R3B7YHCxoY5FwmJcBZgq",
  "key15": "2zMpv4EeZHspcb2M3dJTEUG57UacBkRaneNPyu2KEbbHC4gZiCVNViAaDcJydRTQPqhL7KxmTACqiwWqAyQzHiVY",
  "key16": "5RApT9nByRRRiburXoxqFXdWqhcJmxCWicWYU58anoadSKLaatjAr4QQx1ST6j5JtjUeiNWMwoHmcDQJggxehxwK",
  "key17": "c9LRu3mTUS9EPrGEb7WMwdUY7uDRV42fjnEGHkswQo7bPA7WBVvN98iKEAHpNvzWzR7UduotRNgGF2mSyJZSekm",
  "key18": "hgkxagwKhUGqLxHaG8HiEHvMbu9KaXsWVUTpJ6DVq5MViEWfFHhgxmrNpLfVPCCQ8GRTd61i8FR4B6gGU7qZVM2",
  "key19": "2RghkzBeR1tXhr79v4PHU7PogTuPGMaMx6SzhfLwspCRcKbF16FaMAnobMJHctzz4vjSTEuSBCzLWv7YoGZfCuUB",
  "key20": "5CtnpNZg9FJZgUuMLn3Jjhz9MT5DhP42NnrPxGB5expiqwwdxKHXw6izUcTQgLYBKabqX1k5FhTvnw4ysAx5bjug",
  "key21": "4zkE55wf5wKfuuT8gP59QpEHvk9se6eHHrVG2EZFMAP2EM4r7zoDF2Y6e7FWP52m2dRPRkg7jZy5DXfoAmNSKFmo",
  "key22": "55w9BNRS1QkKtFpKovxkpmwv8TWBPowry3z8TuEztkB6Eq58M82k8gkXCMQhAmvmMvsSTFALyMpBzEbTGqhNXNjM",
  "key23": "vMUDsWBWShPtFkLUKcoZqn51RTewfpYk6zFRNXTP4o6mApaAeEfUQRAcVTZupAoqbRuBhDbjMC1kkgY4eKrxGaC",
  "key24": "36amUhFbHRK7ZM8bpMJMtvWGvsnSY15TdGw3yWUnrRqZmdpfj6V6RpjvxTXtPn43yYXM5T141UrhBPJMWWuGpqN8",
  "key25": "5kTeLQJJU3WruWedoxgucn6pQemvpKwiAhyXhao8s2nyoVBq9pxuFrtJmCRCyEJcKd9g4Ug1cegk3G5usjNTh2Ns",
  "key26": "1MWCWYeDuFgv35e686dPu5UTM8LJX34K4GmTmNADLL9KbnxkdVep7RshxL1YDePq7VLDuLBetWAPxC4hnpDxANC",
  "key27": "QUT7DMghRJ9jrYYeF2NfzFADRfHaJmLPvjR7wQLKjxi45bvvkkEyJo8FvdLtGxkBamPotYnzfxBXgJFUt1vcS9N",
  "key28": "2NePdWwZA37KSzFQBZ3M8XH7yr3mE1GtRoNTcDSikojVRVZBo6e7eV21YFTEpi5DfrDZtd1hEZ5EnYpzcNjpgba7",
  "key29": "4ZN459mhh3EDbW49GhJFnrooeDQp4t5GtccvBtPbeAKW3DnAQyUzytpPhJ4iVmB9xpRkxDDqvFoHXJvGytdkRx1a",
  "key30": "5bkardKPKuJ92EeUwCugDMRiMo9FFySjaTW1KBVgpTdZ5reW7yb5eJfHgwxJJcU9GgkdysqF5TctquPn6AVpmqy7",
  "key31": "2fERFjUJyeuVWQrP5hxbFMUw2QRTChVFTKxkzZmz3FLzpCDfiK7oJDQ9HCZpMyULLH2Af53PhoHmHoe2s7hm2ZSS",
  "key32": "5VJEV9e9gtmb8FKcJRWqcg1NozytoxWaTEo7hBVRxLEWCTjbLZCKyPEp8dk1fLkvxsacpvLTUxuJRoPHxoNAWiAn",
  "key33": "pbFBHa63HZ1qprYepmExnM8kpbjkJXY14bRjAHwdXrZmruLV5SY4asDGQcagLPssSscLBLcKTD1Zkd4x19Q4FCp",
  "key34": "2vs2neX8j6jJXdKv2oKHdRKgSzdPb5SxgLCaFhEJipUK3d5EQyvfq9HZ9ChWbDqAtHxSEwdgtQtN3fajwMwc1fR2"
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
