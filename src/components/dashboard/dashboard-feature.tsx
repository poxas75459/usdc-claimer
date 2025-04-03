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
    "3aKyqdB4BGEcJcnYuLLhY9rB2iMc8oz2JeGE73yoHmdb8NdCwDChesieK1tBmvacf8SS3dZyK4adfNyRNpY9WTuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wcmcmRJcXQwjyM9ANtn6KwMMR1y1sptaPfkHVFRpyqU3kkBiJgQXKqroYbQ2dfLkCogYTVnf2wBTy1YASbdDCMb",
  "key1": "4Qw7etuibENNVWchfjB4daNtJGFpH7XBH8TEsjkqciAMaNRCGFH6qXKhxu6yjMwo4ZTLbBbaQD18u5HubAYKXsLu",
  "key2": "5Ex6KtTNWws7gMP8Zqq6dcZgTXUqEsomj7FQY9BwsrzhxbfgRrTBD9oBZH2bkn2AvmmRW96PhepH1Zjav5TWUfXv",
  "key3": "65yvjbtrFQADemWq8gZBYodtCSq6qt1pxnTtVyPVA2gq4YTDoRC9tZ5YQPkERGRiT49Yc5XfJ1WArHeGwCYGaYxc",
  "key4": "joiArvobHAZfvMhTWz5a2iLGTuMDu8Koi91Nb6WfVhLp3gMXf7Er8LXdHnkvD14AQLonEaX33J6wKUvXuCq2WUC",
  "key5": "F3s2fcpSNjthNFMBpaKJ57C3SXv8CA9JuDEudjTYRLBuD1VHHr6FwLTGBQgmrLgZyB4LF4YWmVVL6t8RYNckvAP",
  "key6": "2N8Z6KX52C1aad2fYTnEPKYBZQFpYDMNJeVpcp4oupw178J6Uj9ALU1tTHyiEwf8KEyhAthW219qTmTNg3ZkwZXk",
  "key7": "5RH5KbMs96f1NiKeD8HZ6wPgguqBdK1Zo4Ct9HE6aunTJUHHZMgJVY2c5wcKUqG8dVTTtrNvTmQKPMg4SqDktMM1",
  "key8": "2K3TKpdgjTxuRpcq6kcp5TftCEaTgettHfDx8ofLm3T9y8XQVBzmJsNMARLfGimFKw1TE3wyehMUvoPShZA6AW1r",
  "key9": "2ajSxajLS1vj7Abd1GqUKBrDg4pxvyDXkAQPucn6tgFDzZNsJpf2u7bA4fAtPrfYNoY6PLXEf4SAaCbe3phATehH",
  "key10": "3D4Acgeyb26r74qTyqaHY1StbZxTkK5rNbzWeoBqjPk63imLgxGYk2andcEJ9FagebQ2bXGeW5EVV6yNUTvueU5Z",
  "key11": "4gCVxMunagCq5jVZaF2kLHMDRDNfa5VGAx1HFbCoiVV9h57tUmwsR5b4uUhriX7q9UdYk4FBapBPYusQRXUnE3H6",
  "key12": "3ve4UbzJBBhiqUH9wbusRM9ZYPR1x1gyS4v647m7c7xfa2VPwUV8kkXzAwYEvzn2peUaEdFPMnU3B8xNY95DhLUp",
  "key13": "2iwg9NrbDfvcFd2qP2gzpfS1Z1LdgByzhRWbFbuyE7o91TTBASJQ4fk3hjEbt7tCUucyCEfFVLqtbhJn8n6bVsKy",
  "key14": "4dQ3jtNoGvT86LFXYiV1Bzo8v9qtZVZaSxn1UgvjCpYrQKUgcgdEDRzqJQtSPKJcxMRNjt7eRdmrz6DnmqUN8RA5",
  "key15": "4DfPZ7fAmVnenXLsfVYvTspe1Z1vveq23H28RC3NmkbniA4rgG1CG7iJogb3F8aQ3FWXZDNLvF2gqgzUzGKQHHq4",
  "key16": "4tZAaHvECgmDUwaAEXHcvd7jYKPi7AqVx8ASbZWRspnn5xg3L8cad24dd17SfH3JGh1scb6aiXjsEUjVwjAGEGFF",
  "key17": "3ZvFtw3g7vdH3etZrWNsbT1LY1aduDJu5N3fKf5sEjQg7tjg1Ay1fKjbh5UmaqjFReUpUDKsN2yK6TSXcBGKJP62",
  "key18": "2PsqKSVTsKpm3rbQ6biYEeycNcxAtPtX66cK5nwfYmf9N74cQX6wfNmcnWgiDPzg2sk7PvoqDhf7n84chn9zWLTU",
  "key19": "3ENmLQazFL6cohzKnpjQdJy7eHppKtNcHfQ5FXF8gMpB6rCUrLo2zbhemCMuufBhcaivYzLSn6g2hdAkHUe3QRcw",
  "key20": "FqdoLbAQD5QgNAmZS9M1syj1vu9QxooFD76wm6L2NYCNV6NM7PiFo1MFeaBkjYPueaVvaneAYvgqKBDyxNDwBfm",
  "key21": "2wpefByc53W3LapE22AzdRg4AJeh5in4gPLYrcCXsJRU9MaqcsxLxDFedm9R7uFp4CW2Y3Ks953obgLz4wT1aeNw",
  "key22": "326CcZFvqGg7gT45PL246SqWG8gBjAdMiy8kboBsDbJTNoz6AC9j7rkbL64xwcsJ9qT34E6HC4rNqDT5AnZs4Aw2",
  "key23": "2TuvJ8WobHCazZwwA6CXsyo5ni27xuTgpsfi6gqjkhrxf9C2PqXRGgbsXXRpcDs9y98WtFtFYEGsRhtUmbQfyCjx",
  "key24": "3V3xHEKtY45wBdt7Ss2eWEH1kYpPYshpJVhpJHDSCbF7fPu6v5Bpg196CF7v7WQKaPRNMYGae5eXLbArHCmdxoaH",
  "key25": "41UhEY9LszZHdTawo5K4TDm1sjiWnkwki4LL2KeL2Fdc29HfF3ncGtQ253j1sfhzYNY9sj9HSX771QxY7k1ivxiU",
  "key26": "5b9qvLdwrNEXNrxJDy4RKrQnqHsojhHpAznwvmZDsy5JLr31ZoVEy539Z33fRtsK9Noq2qMyQuubVgi9QE8RL4KK",
  "key27": "2LL3rCChXWiYcJzge2tGhkuUGuasUGeMfENp5cribg85m4xbDz5z2UjU1mFmDibgNaXDFs5E3A1RccfuWNhDtqhX",
  "key28": "5RzVQq5gPtLSoH3UYtbzdqszqhfa6LSKbDMFmAoYDPKTp5647H4PjenQvETQANDZuxbBivbJoSwQw5YqPNAecFHs",
  "key29": "63HptXDyhAMMLA9EKSshsFUqqyVjj5hKycQTSZJxadCcucHYiCDkaWFVSaeyD4WNtXWzP2Jn6ugv3VkNzDbf1J2d",
  "key30": "5U68CQFhPPUF8gomCgXLv8jXikQVSVn8a9JmYwbGbbzsBgZAxkbmqmPmzVvAhxkk57js91RqDAtQZFvPcxkHJohf",
  "key31": "2AgtbcNjgrZNEz9ZM1SiE2UVuzqwDpxBfrQwfB12F64ACvhmU4La8XDMZf5VqaYmh9SiMw4Lm39KqdGyabYzLqU1",
  "key32": "33gt7A13VgeMN36hnSnj4jd38eNxRt6ct8dkcLFAbibaAmA72g8m8GPArQNzigtCxte1VnScnrTvtTNe99KrDGXG",
  "key33": "5C15QHMWtpQRLEm91uk1NhwEUjNR977N3TQeiGygd9KNoi4hDCr1TgonbzCWXRfCxrC2VdaYL5hnxyzojT8E7rZx",
  "key34": "2ZEbnrLDCLXLqSBiyvY6EFqY9XVv319xggb57RPinZoNEb8u4Zv6WMPDt8x8oXHpMPSjqAdrjPGTxnhhkny1Egnp",
  "key35": "4c2g164Cmu4AWnyGUXC6DUqkuCY9VB4sTgrEugzj1zpngDuPwYXQE9o39iXpVhTCb5QMfySdvLoLqdseH58GhzQE"
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
