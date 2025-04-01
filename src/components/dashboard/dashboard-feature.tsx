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
    "4BaCUKVJKTHZmtsm4h91e4NeZsXfMcc4hnMtRogmXYm9UecEvxuFT29cghZGWREpmVZH6Li2YpVKqiAJ3NDcq8s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vb55Fxe5kfpvuHwjQYxkFqyTvWPfSsbzyC5xojJoKg3j55GUzvzx9Zzuqo6TrhBdid83jp3YG5QhYyXZFDPZ9sE",
  "key1": "515Zq6KcsrYYaeAdveyjQytwV3DU9rKWCAo55s2ctKkTrnnAWcbhYCbVGjYEqR2VEVk7DxYAqac2bhiwhWPRxCeq",
  "key2": "5d8Cjo7zWLDQThyVjoTTTzEWuytQ1bGJPm4t8xu98MZKjBEv8t58xjHdzeSBPNxuNejXcugA1TzEY1SUENHSp3WA",
  "key3": "3dpZXhgV2iY9vf3i4Q74Y5LtVJCqJvbTvbdZub5WmHWTXhTSTngDfGykbi16QgxxM3JLupyzwEPPMrmctVch9njP",
  "key4": "3A65p9FVUYVzLLtJDUD5d2dFLukUFvxHvfWTRBdsBBP2mk5KEjBi3aBexdKqykU7Es1J55u5xpEHHQC81GqhTbCg",
  "key5": "4QXaZ1BVwKVR18W6oj6Nd4yMZ7HDRdHPgYJbUGZNWAcPsF2whZdetrqjs1pFTmBnB5L2z84hGCG5ayx1sNELGiWa",
  "key6": "3oQxzArY6Cow9212KeKNbCoeefFpvTvSQLNy2yyER23RuVCKuDEGLFMAAaj5LdZe3fDc7hqbigHJjhpEkki7GtFx",
  "key7": "4WDyAuw5Yp1fpwJghBBRhMgjW76ynT4niyZCLQhGXvNEMHM6unoE5kKnvYquQdBHjkBtDjEc5rHgu1vVnYRnE3Uw",
  "key8": "54WTSh7DLYmEajhZuiay3du4trhWYHgUCRbozyqZukCR4vHBPpZaHiZFaGZW4omNT6tAgtQyz2WzLHVFpRmiRg6q",
  "key9": "e8h7JSct4BQ4LcpHSvoz4pk7JPyhM5MbghydYNMEHuYjfmfBN2N1nLCKR86M6KE4ryddCsysJJ84YcRsfZu5Uoe",
  "key10": "3ikULdwu56j26xGzpRHv1JcPP7aZGqZ5F9yTH6XqeFBEejKDcpcB5cyU3SfTHLJHbyFnBtCQqejd8DPTgLNLuJ64",
  "key11": "36dhV6Li7poUYGPATTXTjs82ZKFt4U1XD1kCQ2AhgPCmihyjeFbbtwMREYMeCEDnNB1bCX6KCSnDLdftKhTYSr5D",
  "key12": "5QqjsBjqwKzLBszzQjNVxFmPdbgNcGCq48i4cyAbdSaeVzRGGxEc2FC7t1BiSjNzkt95QkktMBxqqDwzMbkBb94y",
  "key13": "5kqjuLrSQJADhoijKgDEupjLcBpvbGVUrN6EEaX3CkRtEbGEpSg4mSMipVcniL3smCfugscTf7Rzi8qdgGcZr6gi",
  "key14": "5agJLMAt4fUsr5cwLsbVRsMUdn1nHcHLmhLxYBkiBN9Sye76ZMKTovEWx1mtwTTRBoj4TQk1ZSLpPnKtq5fdV5JD",
  "key15": "YJycr5Stxx3xMDsToRebffYe3yRqiVaUAKNeToLvbS25yRCR5NPAtWLG5YBmxSYiBmAei7pAMAXHimajf1m1xJV",
  "key16": "2aRsP5DR4qtesxkiE7CXoWstgpQzHLn2RyzrgspAMCNthE2wm9kTMafiAr8hD3mVJRfodWjS5zGyiZZdT78AYxNT",
  "key17": "4bxc6hM3B5MydGY52PJN8gBX79RJ11sdBmskWR3gyJ62LKRHQTpW5cFNSxXEyNgL2syQUtw9YwnoVTttDkqqqbpC",
  "key18": "2fnCbn3nLasFLPq3XYNfteXKk95kpZMuysHzZpqpKno5teyqYkVYJdG9dfo2tksPujY2TXSsr7PM1S9KuEBVX4ZM",
  "key19": "669tRd9qcKdk3UHR8ZWwN3Su1YCtXp2L6V4emNnQQHbxcoCHdJFsWrwSyspGdceD81DRcPKKztJfLcLaN33553X8",
  "key20": "3mbA8RBKuFGqc3W6ZHHTY53faSvyRfQCH1G66yutGPC88iL7QeqPbkcwN4EZ5FeZKAgUZuX57GDagj2RvwWQWeiy",
  "key21": "2po9c8H5stDL4kVCJX8H68BUQkk2nV7Vazf9Kcd8C3Kr23Fnq84nhPQBYGFHNcgknqS9udiaa4Bs9NoHgrh5gyXv",
  "key22": "4Bcv7QQf9hudrwctx4u5SHqxtfhZb2B11n7METz8Z8uztYTeVfst3JfBWHY2MbhwyTRG25RswrKpDqGSDq35Mxw1",
  "key23": "4ME3g3zanag1aVLmVGWuH5EvGqn8GfsXpDPtW5LPJRkBHMkzLK6YHMr7vJZrFpuNF3JX6JG8eDK1u4UAiGmMxVBQ",
  "key24": "3yDuFJdbANEcebb5YqN3em5AV6Hy2qrstAZpbULXY4FmmGvUX5XhvtvkgYj6qw4b8eSngDhw2Kb4pKhAZRSTZzLy",
  "key25": "5HFEeMo7S3es2s8egaDvcHSsq62RbDfrM98kmSB7U8Rn21wdNUewod2qKgmJDrs3HNZiwMSXk3bE5ebbdBYdPcKm",
  "key26": "VvzXHiGUJx3ff4YtUmHKLjnMEhRHUUSwRdt9zZKYWPSWXXVRpqekdL1FQWyRgLpRFMKyx61YqdPvnCyBKDrjWon",
  "key27": "2xYTfNMrzrqeszoXXVCcmEEbw1KBFB9rQJZtoS7kVdYfPH9b4ShH1AMMqFGVyMRAjnqXoANZqwgCfTWBFjVbJ2pT",
  "key28": "2kuDacq2CT2GS24r7EXZM83wiLZwn8k68KL8hhaMDxbULnFHLwovsVqBBveQud79pSpELKQPRVHb7E7T8DmuTPvL",
  "key29": "55f7Mp62P4D7qeatH4CsEo9mnmiPgZqRNAVxFcfHUx6GhNwKNTdGiddny7bzEydqLGerG56a3WcAReBQ74BnybbW",
  "key30": "4nvt3CLJyXrLnfriNitPFwrtBJHp7k7G663xprmFR1MXJvR2Dan8Q5zS3DYjvAqPrkHtmN9ceq9gzf4TXQDNsuKc",
  "key31": "21qdYRVvNLbyzYRngq2rNxtbmpYyzYp2K3TW2VNXAA8U18TEhX6HRq81uiiGcKp12jKUsqQW62BiA7iiYdxcM5td"
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
