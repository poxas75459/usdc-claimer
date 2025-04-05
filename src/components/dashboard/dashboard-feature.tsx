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
    "sqEHNbsKufUujGDA9p28r8DFrsPJGZPvaJSJ2MDNCwryAXAaunKKpUfaZLjPPm4CifmKCZdFgK61V1UuGZv33sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiG7LJgNJw2T4durof9UM7t69ZvwFgHErGZ5L13qL5KLSBWWbsw9S8PHSrFitReta9CMW3LgAeVrTtBwWnD3FhE",
  "key1": "2KcRDXUbmAVqDdFVDMqu6nB8omBQ3k6mnHCZzRZi8GEBAUQFkiPvqwopZ38MGRBhTG7wHMWhRzGwdprC22XyPRAF",
  "key2": "3iL6N1Ahc4MZFqKmAu1GDFsB5VMHvtHWbaT8Krc7Fa4C8YmDVMxDaGL1dX82HQyhS2wgJ66JFQtqUgod24PGNZ3J",
  "key3": "3f21ENZG9VtYWcNYX6UPtFVcHdST9EQhxvWKxBWQTvYeweWGWiPfFTwwL8riD1Bo5TAERagQxGxUNUX8GLPhgUFs",
  "key4": "3Hh4PJyTBPq3SDYbeP8DgceQcdZKzwtpoAYRfsdwMBGdBZrucn4yAfwA8DteVvzeHzMwFMG5hegSiFm7ReXyy1Mu",
  "key5": "4nNXaFyQmmy7BTWN8mmrc88wBa6khVDJqG7VfbrdRDdzjiJNHPsJ54dyy1G2swBgadpa7QfVf1ccpEnWz15WpREg",
  "key6": "5NBBTCCYAWVxPiZP6xPUuao93DRrQHYdtzMYEes5K3oxVvesCPQuX6sdww9As3MxMsaneNRz4Xj8ZDFXnpub2ASM",
  "key7": "3ZEN1f7V9Fdmmrw8NcqAuZgsYNuKdtNNCJifCb6PBaFeZQv6fjfCjXttcAAwPuBt4jmnDJmvycotKXGakqc78RGW",
  "key8": "5JBBXrSosZ2s92kgJgxQrDQkQvRp1wDoaA9iEuo1aWJRyjxezW69VuH64fkkLapVHdV4VGaE1w6CUitpLJw95kw1",
  "key9": "2YDcXfy8zsj3HM1ZXNzQS4G4ikWvPmDnRrchfisHFzSeQiALD8GXrMtJw2du8hSiuhm6wvo5bye2pmUoUpRAuhzx",
  "key10": "3c3dCFowM5kwUknZNRyQDFu5zjFdv1pvwsRsX6s8bGWNhLHrzaCLwLk9SYcTwHrEQes3euWzPPQXcLM2ojyRdcp8",
  "key11": "3wFDDgywo4DhWKXwJCarFHAHeUTAygA49pRiWYJoZbFx8hBCZWiw5FfkaYKiid5rZDFCUYHWNNzgdm8rHWEk5JKM",
  "key12": "2BR4GuhU23Cir1xqmh1dYfTKFYiT1XkcHFWJA6i3AeXZDLshpkFwLRH8Ysw68PncKDjD4rGmTCVuneC1DdF3bnBA",
  "key13": "2mJGpc8578fp9J8VQbBjTfj9P6cza9CYmLccEtiTQnMVG37JfAXnpwbaQewfpdic3kNqMXZa9DFuZUWx6mmVebuy",
  "key14": "4Z11UsnQqHfUJCaFE1AuZYAr6NuVmuVgMZ4ee69CoDqAWb5hL3ayJVcqRdw5gyuni2zFm3agzXHMbyfLbH15ZL9m",
  "key15": "39bfSCowVExHFRcG3iRbqkAZegDgSKmQ9kAscnxTp1Qoj7vZvcqckG4Lo8ywEzWTVyu37yoCf1zF2jyBmRXzBWMa",
  "key16": "vpQm7XZbBKEEvrm2iXADzX8qAKZvdi9Ec5wWBK8iusAZj3BxXSqR41iySScN2zA19Nqzug3eSEGwpVpqzARXCvb",
  "key17": "52SRwbQyDNGCmvPiUe1GJ4XQCphW6cQSoDDX95tBCgZPNSHXUSPQWNpZMcdqyHoyzVPZG1SPW7ZNo6NqddeGSksm",
  "key18": "y9Uhiu596tne7c41meNwXSN4QtXQ3aqzzsQoB2h1mGP6d5YJAxHhwHMZmiZYghrCTkUAYa5TuJLxmdG1gSQRbL2",
  "key19": "2idPhLx3qDTgT79eJXFUncVMTut2zx3wGDzSuHR46v69phyEycM2APCcsMvoqYJv83QSWmamiJsYQk1NiP27vNPM",
  "key20": "3LVMWYBvSveUenFae8yUibWBPKuLs3NijempyyKqG4swHNDrjeeiw5s4dNa46tggayotjY4QqmkP6tedg3wP1R9o",
  "key21": "2ebGQbpCV79Rp44c3QYp6yS933AihAyFGuS4GR6wR7Dso54PyqP5cWayu3mhsyHzSnaxWBxKaNyrR4FtK1xpbnM7",
  "key22": "44o441HF1Z3u78KbCfZBV9uLoygeifw98Bg95BkEV1V1c91VhdQ7gCZPTmKFeKwbo4g45ucQ8Zdk9eaXjdmEDBAN",
  "key23": "4oirTsdMZe8YiWqT8fKLG2txFKdbL8fQba3cdP3m7phhvLnRRWQFew9gqnU18dF1FZhoYDRaNnmLnyrpsaqYFcyR",
  "key24": "YTY5VkcCAtejKuWw1yKEygci2zLkjBo6yPwBWVyRSiyUzHS9GuhFeA58Mb8d537i1dUHGZ9pwL6NfuPsBXvcDq2",
  "key25": "xWvpcWHNmMXB1EKtkijF4jMh37mgsCaQFyVpQVrdeAf55BopELMXxXGYPtiEbJbaTqqec6f48k4VyF8UMuMczDi",
  "key26": "3RFhD4vRvBdw6roWNKh3ErWrUyywZyqoFWGAJg7d2YzJWAUevLxB9U5nmeKePfSuY8f6Z3AVuKYvZ3MUePYKFR9Y",
  "key27": "5JShwkBzSxtyaLPGwtXQMtrU4eoP9sTR4KBY3RYF2XdNWg1CycTrd7vA2wCNjVtuC2Godikm1GLw9FVUrJuGh4cA",
  "key28": "2UBty7GX8fyS5bzfuTRWVQccAPUuv5k4ToqyR2SJeEVCgJ62Jz3hFQikRpgnJshncbUNM1YTtBQMj1Wz7cgLsDjD",
  "key29": "2PTZvtSf2Z49jP5AF9WmNPQE1ZeU8NyXpp7ZtbaPi9AA9uDfhBLvZUat2zphGXoAV9eLPbs7oQNy7socqdfBc8Ap",
  "key30": "5wxkmVdXcWgFqKTfSiGVqotYPxDLyxpaU3iEV5RKW73YPhBHD5qCYvmi1gMdC1Ggs3w37YXXoTLxEqKzprChEwfy",
  "key31": "48SWtNoNj3jtg5i5nBAgmrj2mg2GvCN61Pn2ytC7X4ewTyxYAMKed4WX8kU62fD4tMUYfqFo7xQ7fqGii1CKycJ4",
  "key32": "2kMThssp5kKvsJzGmKd3Eb55CdADQQiVPAi1oaqy5rBDkypoBwuoLVZfdY7JKG3m77ngmbcx9yoSAjwFqbVwUyGS",
  "key33": "4RVRjKrFprNNEYgSc5mKyYAKW9Q6ap8edzCZ7SDiSMPB3Fr9tZ2QwKnZrSwidPC8CbYLMJxYKdt7Pe8zQcryKPgV",
  "key34": "5Rd3Q69MGh3jQZVnZwDGJ9rghQ7ts4xV57nepbC92iswNGbwPXCCW96UdpjoY6pgT3CYhGvnEWNxFQ8Xt1sQXLKk",
  "key35": "4a6eH2GhEos3fRoQkPgJeHfDYit3QzYQBs4f8EDVtBgjNYaVkEgCfuNwWdqGYBz51ezsPhsFL2TgVpKNbVNGKmA3",
  "key36": "3QvHidGQqScrB9KLdcrMZrr47V8GhMGD4Z7fpQVWz6Xp8zyzMWVM9Nwtkr33MVzzcAgbmJiiqy3eK6WgETw7fzEa",
  "key37": "54nJJWSbCBtixgQsjD9Wij5hUc3sTnBBHMSWZosHY9wDiDVRsMM3mvoWfakTgFjCmAzWsrwm75NVJBtTdrAPrbL"
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
