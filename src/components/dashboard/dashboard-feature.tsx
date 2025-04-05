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
    "2ztmrzkq9CE5tHrx7wSzo37CGd19Q9t3t41T32qsSFZCBzfd71mLQm28vX8FiRscKH8weuaiuy6Fab8xCd3KQVj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VC7kaazKeCDyoHQbvTcq4mfK9S4GWCZptkJvKvB5NJ6bZ1r5W14FdRCAc7tmXpxs8jh7DeDurd1rGgqR9rUQc1S",
  "key1": "Fw5S2fCAejABRpNRgMinhziV5H9xurNTc4PohgSbSQihQyNzfCH1TiiticfdDaS3HHPLmRpbdzG7RGnRNZwkuxy",
  "key2": "2FowaVmA9YZhGjXqcuUsjo9YaBy9wvLCfK5AMJ5WUNjCgrxFFh31RxbEMssWtg6XTin9zrysFF2JcuBvbwHJuDPV",
  "key3": "NqMVUjGiQ4DmoZa3JEs2swWVUZedDDHGwiazVfmULXPVe3cKfvvNn2nyQt6KtQSuyediAQti6k4ueZSJnr38phm",
  "key4": "yQMng5mcnYZhNm7GZWWCZZTVbkwcTXtN7knVvorEuqnUTyCMWYjQ8ncht7SVsE5EogGCwH8hP1YJN47hCpE7bb9",
  "key5": "5xUqqSNu1s396tNvC7FBxk42XCK9hH8oHKpULoakpZRAJfmtHLn36ZiaoZajQKrm16wTHuy17ATvNnQopU4HpQXF",
  "key6": "3ZveDe4PdYqWyAV6SFgKK9oynCDEP8LPtzgKTs1J5MGruZgsMkvvrQWQGGkdTUcBFUa82BzE1ERG11qd994N1nHB",
  "key7": "WbfomGK1EL6ZTNo5RXRNzeHgJUTavxBSTQk5So7F4LQ7VPPUwxSHMDAgd9caHauUNycXoMfAWxLczviZcuBseeL",
  "key8": "iPQeLPVVC3G9mU5HdySXVeD67694DTYLsF2cA76eVXwxQ7gv8FApWqTij9bK27T17dT33Rt4MyyTi79bCR7R3mk",
  "key9": "5bBg462cmt58aJ2SpkuhyyuoyUzRvNFZcDu4QFDEWZjZjiW8FnJb8jBnjn6eFNwQFiitKc2drfMFkrZuSg6DQ1kG",
  "key10": "5PxrXYJtfmQWvvxocRiugJcLxBxJFY6uMNQ81BpymnUrDN3dJADmjrQz4nLfhJibV9h25XHSeh9cYdevmA1QTfHw",
  "key11": "5WNe9Z16ApjyzxHT1LZZ1VZdPt8ZV9SUYWcsxXrNVZ3sHx8Pc4j2V9B9uYmUtXMxNVRhzkDfL473JWPGtvnGtGCi",
  "key12": "45UqPR8nUMzmuv9oUWHV2GiKaEUEwaLeyZDpscdoSxHhUjcDLmcdddJkkr1gEyuZ9TmjbmA3YxFKB1crXaZPcVRQ",
  "key13": "bW8cSa2nuLh2cdu1HFVAqgP7n6De3ybk8FZcbRRvhNLuSoRGmc7n3PdWX2fTuCo4XYRp3cLRpkhf9sD16j1ThJJ",
  "key14": "3yuErGwhtgRgdghtjoNC37n2N4vWMisba1X5qSyrx4vx7ngD1HgGJcxszHooeBxwFjnAoC86HUvXhQGY4zbgaMD4",
  "key15": "3eAkrbZSgfE2VVgp6TdDXntDtYb9yrDMgJ9ZbSqc7rk7ccmQrqpUb6V1o8kfVMcFy3TB1GwpmazBQHzLV91KjwoS",
  "key16": "3ATgQS7vBiPjepYkoqUJvNx8yngopwFuUNaM4pfLLSX1hf6x2pzKLyEyiZ7PMruwj69YYAQeyQtwASTtf1awrvya",
  "key17": "3Lr26LCdbAfSG2VjaoBzXEuWdH6SdTcDPbf28zHmKKD3hc6eVxM5t6BJ8smXsxwDe8mpRhsFdK8fcyX3Q51LBNyk",
  "key18": "4WToxzgkmVK42TtDhC4faNsVK9x62pNuLd833PDC42EnZyHBAbZ6XCdvzM7uKCENQrDnB12vjpd6Y1PDmS5eXY3c",
  "key19": "RurcC9yP3NGjPXgb66yxACLxWoEbSKSyGeZRF1AWWRb6eokn5Cjen3KBkaWisHdYRTgET7oEqX1UcMxNySwUQLZ",
  "key20": "4zgEX5rBZkgsWirpEjg99NyMf67JjjXmE3KWE6uuoSoPENWPAVhCCdgSNtJbGxbcw1q5jsHCoyrbZsMtmA2bY53G",
  "key21": "27x1zboLKctFvWFADuQpXADFd9DWWQWYV6Z79f92gvkMAWXSoWvpqR1M7Akp21GzGr45C4TNFYujmJj6UpakqVG7",
  "key22": "65j7sQZ1vkgbSbsa4NAy51ufLs9Jas1F9oZzC9q4nAvx3P3mWGUQHXwtgFDNUHYBd4eyrMiUAyAZowHfKNf1wSS8",
  "key23": "zKcGPejCw4sFEyMCxPPn5qeWXyP5auC2hdUERhdYJmz7TuSkCDm7afQx5uL2TTreGV5Gbh77MrjWfzHPMDTMsH3",
  "key24": "3NCZbZK6bSqV6Nx9J8JfnEodVA66ZxsvPDLHLvBw5A2oXVhcsSBa22XxV7H15HwNxvEAF836e92Vn3BHTcbX4ijP",
  "key25": "21e9M4T9wKESWVXbmavDrdiJ3GK6dPyaNWLQ8YWBUNiosmvqiwZaRqqyhSLVushgRCYqzAcDmzwFxhFYFWhcAVZ5",
  "key26": "44sSEJSpkppMBw91e5WabBasg2vdg6y91g2ctfpB9uhp8qFk9MzNuhdYpdnPuW7EwWV6KgB1a2siDCVWmA5nKFLs",
  "key27": "5H7ELy2QkmWZH2fJzu7zykZR8dLDyx3DzTfsAJZhj5TScFsMSCtTirf9sps3fZZEc81EMiSu5EneYfuh8UXdorcV",
  "key28": "5Y7eNp3mh9fCJ9J42AsTffStnd7rwjpBzZy5rkpGqGopYJhZrHKF7KnFsPwpVLe13Qv8Sat28AZQjW8mHNyHDAfj",
  "key29": "3TGzLG9cjjWkLqafN45sgezf3EogME1Bu2H4TFngeqbH7Jqj6nnCEZ5R83bLWZcgTQe7q89EqZQdecoanFSXKodL",
  "key30": "jHF4FNYEzs3mLBWcPv9FmY3CwpP7EGfFdGU7CZKa3HH13zvn29t51ZwXaHVEHBiAetp5yRtGcy1YBadBW6cspWQ"
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
