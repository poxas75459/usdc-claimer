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
    "2uVj1XxeGuANYzsLpPgeTNJq8NLAcVZRDuFREvyQ23bemF9im8VEk1YZxpa1ScbwbwqMhcjQg2G6V7pzCeitRobQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rvQe7x3JY23FKRuXNtbtGZVk4zFTuXLiJXg6w5oSemiiwxNVxsi8Sfb37y5fYSRkc1jtXq36UgDBzVdtUv3fpj",
  "key1": "4cUQ5Rr21DDT8Mc9ddcgykXKPNk1cLCTJDbJZcnk2pHKiouRnxA8vQ4Mq73fM8E9QCwNYfhWBeJrDbq9rGvXTZ2b",
  "key2": "5uX9PB14LfLbG2QmC4vvZf79k7tUnKdbMqRXfD3SeQQPfL6b6kMK8ZeEhhmzkqPcj4aGo7BR54m3ikb3NUnCApzC",
  "key3": "4TnoMAiSG4VqqR6AEJ1fJpCBxWbz1Jr7MGsT6pTnMK3hDJZT8DajQrgFzNsfg7Wtg8XAmYP1yEmTGTeNrw39ZPk7",
  "key4": "3QSfjie4D3wubxvo2j3aifZqgoTXv6DRHhrsYXfvwkqSqbLyEigKq8eFfRwGQoFxsBc8dtcQsFeJSnd1gpFcq8wR",
  "key5": "5zqsGEZPy6oShCdWsJov56FZbY3ufgocqJ9hV2sq4KvdDa1VqXmXnhsS5zdHr4jHGXJsDTs2uCgg3gCYZdaNtyiY",
  "key6": "2yaxeRFfQmx6xNUULxB42WUhoe4Uz8p9b9HnweWKykyad1LgeCitS3yJ5UuweRCEFg4tED66orPaNoXzAGwMTBYt",
  "key7": "5sW5gN6PuQ8f7sXBhpWySU2HXTvJErkZaWNqVnmiNK5ktp55ssPFpgRxYbSQxWa7khitH1PUdjmGcFH7B6ytZDwn",
  "key8": "gphw1LZ5M68vN4WarV857QEWpJjTV1z1EthzMmcrSAbEiuzCzfhSn3D9jjWEpzeCcaUpMXh1sPcj8G7HMyWbVub",
  "key9": "UaZMwhjVUpQNhhChF4rXhp2fWuPgQJtRuaDzAT2tE1PbkuGNYSHmBNc9sRkRr1FpGXgTA16axgVBUmWnaPmVmJH",
  "key10": "pzoEqPryBM84K8M7NMB7mQuo2VheZjV2ea3KGXny8fzgUb9tMCg3VcNvpfy2JtM2PauHw8oihaWwGSuV1y6Vm2m",
  "key11": "5LUXSuTWZoPJp1xnmWkjn5bH7udQyyhHRkaiHcdiKHPBEB39A9JX8K7gf1WTbh8KK26k2KagFNY9UfAAncYPWDxK",
  "key12": "2HmpRzn7TKkShpBxdzL8VcgMpyQ2TgBRoYKnmuNvvxTVGGPWkoGUQ1GfGbuQPWPsZtvUX63aZvHF6bByicTirmaF",
  "key13": "Ai2vqLkLyQkC9x3fVWw2kQEBUtW7NRt7V2rxWYxWwL2cadk7MmcC7qSjw2aonhC9TbByvaANpkBqHhJ2GUfLZHT",
  "key14": "4MjYXLDyTFvLFJsnw9HVWg5F1GvGBi87HAPV6gXfgm1btNR9bqF1eSUZCd1FV56wH6ca411ahd3451VMURRLu2St",
  "key15": "5Wx6FZ4Hfy241dkUE9mP43E9M52bRWsJ5DD6fs6oVT1mW6sssW97zxuTGiSYgkAueiBCvQUN5Pq1CrU1GZWdfhPy",
  "key16": "5DBaZtNXsMzQWpCy2RaVvXnJegMuBJdbXf111ErH5VzWbjLjjq1NcVKeu81c6ymUj2gw7jP92BnFA5g6rhuRiu54",
  "key17": "2HtYJkuSi6RCrgBWEtZDYwAF84aKP619BEURqU8VnwYMCJu1x1dHspxcmpxL63Rvo8VeSfEWpi78XeKZE7aoE2oh",
  "key18": "41AJ4FPpH3jRovShUGx3LHdiHn8nTFwaV15iNUitFm5XySu4mhpaFb5FYTuXjLsSwfkw7sou6LcVrvbHhX659K3m",
  "key19": "2nDsLz8YoAYYWypcmgs1yC8BaFVZNztdWPpqNdDJa3SkKuvaqBP1HEv9LXnV9cpusrgDYvJiuFdXFMahVQhhTDAA",
  "key20": "3sDo7Dyys7nCdWWDFbm6E3pBW55PpyUYFEYuFixNS1fRBrNGNrebEf81ziUBt9Ujm89xuKPYWhVFgxjemCdPJYNc",
  "key21": "4Syahyfv9DphrXmr5PkqkTriLmfw8AXkUXBwU1SbrvHY6NWvQGuNbU4mX17aZt93tnEc4nfgWHKSuHHqLseKiHUJ",
  "key22": "4PFL7mGDm2oBYSDM1NH14qex9syETKNARHUy122XkVLorQDC7YtN9Sxh26x9UGGnni2Ha9X8SRyZLiL6qSRdYZBh",
  "key23": "2MGDmUYPq5crkcgRXDd4cfsm3Z1YQZfqJ2oor2WRFB3a7NqfpU3aymCtb12cNJp6LCb5FknyepQX1qsvB4N6WYcK",
  "key24": "4TwxBz532isHQ57A8zeTfqQSR1SoAWzynhDt7nDbCQdt4pY2L4bb4UYTtLJ6AkLogrqQqxEXb11gVzDQjSdkWWSQ",
  "key25": "p8diaqhqySZGggtT3jrki2CqgQe9fSdHzq8tHsR2quBjyNctmsutL7aMtQDwZp8nZCYG3KqmEoQTEVSxYZob1hD",
  "key26": "3eBw1RfwjcQqpY7qwY9WdTCDHdBNTmjYPeGk5jWbeR5iyuGqdCebRm58XZwG4VXn9UgwhZMF9jvmKk2UgQyHrjdz",
  "key27": "4ZZLWvLqfr36prUJ74fei48MpmaPFCD3rRvBp59vE1LBTceBn4QttqHjrN4gRXST4WDknspn7pQ5ApokeZpgtHPs",
  "key28": "5TruLvFo7a5izEwL2WPCGKkiZ3cgdo1jtPXqzbrxvqR3VhXoRsjiaSe5mXQTJZoEUnyVbXzE2J3qxHzUqWeTBEeJ",
  "key29": "2u8rGwtLoQRaqkLKoijt7B2yvqwDbeFknaLpQpcopxmoMJ1zRCH1kS9Rp42TBPr9b2ZQcW4r53fkSPhL93vq4iJi",
  "key30": "yRpKsEg3wUJ5Ays1rDEnKPEdvvbou8Szpm1fUrnMSLPYGQUepcavFWENBvtxAk7o7KkqjFYmMtYrnzZg5Nps5Mu",
  "key31": "2Uw828rA4B4wyYF2AydwmRGxXzRDoyVKAsUkC8Gn7b1dn5mb2f1yCVDH1GiZ91ybcT5so8f6FHjGGY3r6f8ecRvB",
  "key32": "5kjXkgMaGmDVsGjoXmzQgTQL2jguftNT9w4UtXBPB89gthfmHmwjggTJCeCataM6foBrr1uZb8Z66wvVxE7CRbTt"
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
