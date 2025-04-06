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
    "4Bo1TzRGMckmoXjaNetY7snRgKTsmTBBnGqyScZFYqesyJyMrALT2pQqZpFC3oLs3D881PbFQ3TBjQ1N1m8ktKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LD8ZB1tfJx3PSpkJDP4jSKFmtSE1h1YeiL2vu84aezd5qV8a7GkQ9PgdmNgq79wySEN8KLVsZ6xKfwZkS49z7Cp",
  "key1": "2prQ99sCNWQnAdTVQMyVaMbnU8wSLPShJh9tNKGAMADiPmMU1JLbKm4AGyi68tBj3QmuTKV1FWWrszhL8ShN2sEz",
  "key2": "4NCrXE8ELchxrm9sBpLMtrio7bJh6fTJTbdz2HziKBna5onoDfmBXHGXbZvLKCH4dopqZfx8riCJR3ZPuSekr2Y3",
  "key3": "WHSHMsPhjGiCKCBeY7TZWU59QWd3vQ7NBQCFnvUR4z1rRrxJ49gSVsmrGtKtSHZtmKkXX1RJbif1WHU4ejiut8L",
  "key4": "4DsDS79VmTsoBqEL5ZigXawrGRxbLDYzhafHp1esNXahqyDGhrEHe5ZpcqcmgUcKkMDoCSGRLNFD3FAns3bp5jQG",
  "key5": "Sn3KeyLiE8LvjSs7xTgB2j5vsvxPyJaR26veLBEr98PdmL6W7xeUATP9nGBqXGUmfznkskQHk7pVWbj5wJHTHj7",
  "key6": "3KVLk4EwzPxCPyKS4oT7A48Q3jNFXUiVM78imGaC1LnUyHXeytJhtgjEsn8b2PX4NSmnNrnhMW6QjoTwxJDrxWhs",
  "key7": "5iWs1SK9zqnq5RZKYiqfVVEB9cRTR3mBHZW9Rp5WNkAH85Gyzu4oA39cBysBdPmn5gjVZ96mS5bTTpr9YN2MFhZJ",
  "key8": "4K95ofBCbV4gM3APGgDV4cWkXNxYuJMoHDdcUwTCFPcgQqgSDsSZmi6UzxXNfGM6uWaX62oG9zfhSUPTAvLJKq3D",
  "key9": "5vBqxubi5XpAwvPyJrVM7xzruPo6gHjfokfYpkhsNPL1CAGuJayLha5ksDCHZEVrNRrhUB1wybMpdwDViuZi9QkZ",
  "key10": "u9wppXdzhUwC4mtmddBTcC2BpagtH2e3c5cqhZ9htopQLRYyEZFRQuydM9wqfiShvGbetp7CNSMp8DYmbZaf5BM",
  "key11": "uME1syxhjk2BC2VTvpZHzR3pXVn5UiAR5eqiCybNXVeHfnQgYYJTwppZ6kX5LGig8JJpnmN96B1Z9bJeWNNcwnf",
  "key12": "3ss6NeswUac5YVQsECtBLA5YMdUMTF1st5oEdK6v6Ufe35EWSERbL5Z5vWfXTY5qUf8gsqCsbHHXpJ4YqhxCXLjy",
  "key13": "5v41xtEp6BB71VrpmbYKcWbTcc214uNQu4LNrMkLvdWxqj5hFyrxP1pfAC94yag6iEV5GyTGAoVnBQLaQKR3axVy",
  "key14": "3W7urjYawqQiAcZSXK1zmfn8TUT4XJFPXT46nDjbnhbm4ZkyLd5mkKSvsMJZYZQntwfQs5ZEC4SzLc6K6nHzmSvj",
  "key15": "pnJp9wyxctdAvmeKgEVps8t4ChNAM7iPsxCvqUfYyYvREKPrGihR5QvHTbPi5atidCZsV5QDTrDXjd839mZiMUi",
  "key16": "xxWrJixYjkwj2MMv57XTSSpx2nEBND9F6Bcr8Fb7SzrbHrBCqXT7Vt23JGSXzy4dJbb23bCCWJQ1rxpeuJceStu",
  "key17": "5XZKVkFKN2Mh9PCjR5hQwcRAozZfa9Jf62iJ8D18xFfxQuTGg3JQeYwoNMdQaFAyLTJc3TpmqYRjoKddJc9k6e7j",
  "key18": "28GNZtABMbZacBxbRKiWb6pjxSvMJrYLPcmyKXgf1ujvrz15C2s6kCJkyLLFM8tkzSgG6seCmnQRXy1mmBYT3Ttc",
  "key19": "4dzDvgDZzBGxmKsMLqibJDZqprVFpu6CvsAJCWoQ2eTiNf34GWZPYrHRspdXzMMjFbmwNUAtTC3hAmY3PR8nyFD9",
  "key20": "3RJyJYT8187To4RJ1UEUUvy9A3xnFjMBG2UaniwTGXzHUqNv2u5d8V1HAWyQsZy9bCQtDD2iZTaBeZkSvrnZ9WAj",
  "key21": "3gMzK45BRkzWjSwScz7eJcKzwErj2cEgUU3M3QSQ7SpaMYY4C18Y1C31qU32x6ZAxTJZUVd4PFiofPnpF7L9ewt7",
  "key22": "66t1A7urbeDJzrjFkJW7k9kEhfVPqVbjstRtVp4Hvme8Ct6zR3yKHLFTbgnaWBBNwF5zyPVrubC6Lc4usPsQYdn",
  "key23": "42ofwgJu4VzTHuNWh8ZSkv8Jjn7ousEwDGBBS9aBH7sosWJ5bFGnz2fPHkZD7LhhqMtRrvjxTqZtzaxCUMPqNwkZ",
  "key24": "2RaeFxmHp6rW4DNxbNTXx8FmU12w79tVmuRx5WQMdBgFdffP2x3uq8tAiAiq6da1W9KBU5qHTHnzpGdxJBorxkbN",
  "key25": "2a5m67suNbEYL9k7Md42zxxcq1Hw45fvqjdAjFsh1hL2YXM7oaPsfJgsj1kTuG5BmhvPubnG4Ddm9naGR9mmhC9k",
  "key26": "4LtygB6siQzYZhJHCmdtdF1wMB8eoMhHogeFHqcbbfB8rvmYTsCzbTdN8PfaGkQCARV3PqQLYgHtaPj5eMvLf9yh",
  "key27": "4EijSQrxbUJh3Ab78LWHRJPT6S764VoGZWAtyFWJK4hER3QVw4L96dbqzBzEDjDfBgy4rZt8Mm4BgERoacvftYce",
  "key28": "29XzE2Cy8rXQHhWN86eJMNgvKeyvGhVfgV968UHM3qBiGgPfJJCtPkCnPjCebXcaxNQF1a7N4EWzMsaSf3Rq8kpF"
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
