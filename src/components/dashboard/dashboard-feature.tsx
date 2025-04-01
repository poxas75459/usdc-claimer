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
    "3f3xCCKppvKauLpc1cWQmJcqN5dqgftAby1GFaGyqjioSeqVrMP4GEBJh2EpppPNRPgbwXL6f5SesunoTMomixZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnVtBiiwMqwEEmcbMVK2WSoXPN7b3t1yS7Nf86hq9NMK32Btm5kvGirgf8kYLXobGrPSmXszALtx3RJW9cgPNtA",
  "key1": "diPgkoNjb1ucLtdjT7Zbz4msFfekKjGvFp4YxTGzcSML1k2ota5rzehY8UgvBzgUppWDG8L3tSEaBhQbo2ujSiw",
  "key2": "2g6mHtvLTjYb3XEtFXkubcZ1Xm9oxBNp9ajdtf42DpRnF4NUAouH6fCCc98yRBharfZecbky3Hip99VXjnubssBA",
  "key3": "476VH9vHUda9CNmHajRi4CMjL7x76JSutziVE1MNuKXaWUnC8UwmTjXzmwH2yGaYBd2VKRDWfx5m9iujUJ8uKqef",
  "key4": "2tcFjne4EqJ8wo1QwYKKvbankvoGqvrQCLNt16ktDt9ZxKTKTUiddLCHNY1pbTZqBVMab67TeyDD5umxdAHEnVne",
  "key5": "3SKW8qa5tn7u2x19Q5YQN5vho8sBA39BMmDack218JJv3ymz4CoMKcgMR71UzYvoFZJQe7QmhB6NeB2frHXjss7T",
  "key6": "2jJUKTHTBpg4EMf1FrkK4CQ4CDixKBPi5isVfQgK8r1yVc4E3ZAtMkbj5M7XDbQaGUtELFruM4qE3RLHrT9tChQf",
  "key7": "4ZsdaKmgPhvv1Q1U7erdBYfbYUkjDnasSGWeRVg9n24Ff7s9SzwkXzfzYehFmAybBJSZKW3cNPQTW71hWDWv4Ncf",
  "key8": "3gSyEswwYWLjUqtUN5fmNjEG6EeEwC5PFMuuQj37899yn7QhJRwLZGegfD1b3qUb6x89ov1SdfjyKiH3vqi9F4vY",
  "key9": "2KssjwSdCYpRfHMv6XY53woKgT66HASCnHpcbo24h2dBQsv5gWNaziJU9dqmDTTEqLCpDxRDgLK1HJwN8RahGWQm",
  "key10": "epA6o79qga7czivpqBraj9KAU4xkFbQFGFv6zFhEGvQquz3HovJ1mLUynT8fsmtDRmz7BPW95ebDH3UUt6nZctL",
  "key11": "2UbgJpyWp54XTch1G6uZUVoN559F269X6jGSggKPZ8JD5VqwqYVa3yxsU6bWBMMaSEDzL1r5QgbxfRGT5PgmtUDh",
  "key12": "4Us7gwHEaihhHSfkuHqUwZDLUHUbnLeVpfGL5sWQzJFLLCUEXDzzhicjBStvKtSko7hXSJpixCXXDXSLGK2hUc7X",
  "key13": "5rTAxi6M1vLcH6R4RZZVH6Q753dNMkiLCeip7n6G5fM3uspRBKcSXKHvLibiGiShH87GMC6Pi7WAKX46fG8d5xFZ",
  "key14": "5BXgAsUoCxzNDibKhbueBYBsbhRjQwqmDXZfZQTVRWMEoEs3hjftZv8wjYCjEcZnCxLmhmevVeQAXAdHMUyMc5uB",
  "key15": "2Rv6dcEK72z5VVo8FYpUULTJJQnjCdNfp3WuHqHR6dkvdDmVJ8PNrHSq96ZJv72mZj92i9nEeSBYdv7fPaKw56ch",
  "key16": "3XoyaSsQEDbqqYyzyj7RV2hL7vy7hVTTKaxyh2AkVqLvhgtJKatAKrr4U6CfhRUMp2GGwhjLMjtjZqn5hZCBGnKM",
  "key17": "4oUSWsceE2EFvgDvL3uadaMv28Ams8hk19oNyyUpHC43bF2UPwkizV4FEmYBsgMVUQoTcjQfMwPsroLaYWsLqaPr",
  "key18": "5Ca4zfX8QJkKj9AF5KbKE479sqse4kUg9wGnR7TagPF51srrh7Y8oQLsgZnFWRmJSqUYc89svosnMWiqGoMYFTMa",
  "key19": "eAZSQMryrpe23n8zZVtP1BWQN9z5pT7AGdvE3XjuxW3Vkbe2g1YPykyYszSpq7k67dfTSX1B75HEZBANmveHuhM",
  "key20": "4qLZmEs2FR4bgcpfKah6TZtPWkErbuT46eboYAo4Ghtp1FGg8tTCBYkxv5Zs2SRd99r8ertn914hg8FLx9t3Jis4",
  "key21": "oSFoan6woY6etAgN3Pt3ssKFpHoGBXmgmQJwQ8FDP32pj42qQBAvxRd93AMsQUPQWBsCZ8L3dTYSj4iyvYEva6H",
  "key22": "2ydnJpiaLB2xqDSsNpV6sAwvd57Sx7WcaT3u51ccwZmDsMuFH1H138hiCYWECEc6XoQNecZx8cMoFMYNm5tyKRuy",
  "key23": "5DH5MAJWoSFERDD5PVtUmAVGH27rtpaCf2jcWNV381qTLDf5q9cC94bFqMytzH28gnSNd5bdhwSKzhB2TtWAiHqu",
  "key24": "64TdQpdPMPjG1P19u2HMCXsCf2W7mfRJRhwcvPnFr6pyghtnZ7FtW75tqEk5PjQPDyvyJkadwwNYA8V6tG82hM1i",
  "key25": "4pLv34dLpm5qBK7AJBSN7vhErtwRQ1irEbm25fQ1eqKe2FqaytfADFsegwmmXy17ZTSyf37ikXpdEYqdKb8yUnLZ",
  "key26": "4BRtLyPS6vSvsKofh2uAH8u9aeXAqSmLQ43GShtihgjCuqQM6kvYjjBx3BzzC8znTxMrD27NCxeV7qoEFiW465gb"
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
