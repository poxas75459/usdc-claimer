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
    "2us9FtSSxsbMsMybjSMiS1BRhrX355fTyzKH94CBTbTNpurPUa3joBzpyEk8Lwx4V3YMofhVFv7cce6RYjs2SUeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsnnDBqPvmbZNErFgwtko2o429Y3eQTob1HR2ZgoNG3jjSH9rYAXZG8CPDkPW48EKnszmUBN9FnTwA5MbVJB51r",
  "key1": "5BWvLWx2SPjAbYrFVKsjWPsmzKc5oUFwmsLK9m2Ny3VDYEtKHFjGcrrdTtzc5SXppw6Bx1xp4tqTu9Si2WgkiHBi",
  "key2": "mdGkbB33R2k2cGzCPVcihMWkz8xMYDftV1H5dDEci6wRAjjq8kXsfD7r4EbDX3ydr3krLhdJYSPLaRfGQgTFJ6H",
  "key3": "3ECXcKKbVbu1Efejk9Bj8ZXN4XrfuW5ETsZ6hquXmAcvkzbgf7oKSSrwJbmx2JCb4qVjFgTxugbTuTd6BVu3QYw4",
  "key4": "jhHnJuciBqo89DAgQeYGbLPgZsczHyongn8E747LSfPbKA5gvY6myfRQYdnfkxN9bngVTSRNQNcSbb5uzisPKqm",
  "key5": "5YyAMibX29UKmiYK24kbduqQCrM67wiKhBAspbJx52wD15y7vicB11hdTuLEkfzLidXGv2tHo5Gue6o8ZFfnU8D3",
  "key6": "5qjLBdfQPDjAGrkbGteG3avzDgcpN4c3SeyjaDLYJqGrA7rEGCoUpsSCGk3g5cV6cTdA3j5ZNDUmZaPGLM681bUj",
  "key7": "5MpnQXsUaVp2wqmCPSvtKCUeD5SP9SWBFZueiQ3f4q6a1EZtkN7jNyD9wuVngSC9x7sBx988krDGJho74jNP3UR8",
  "key8": "471bS6cnMHpyTE6Amm6ZdDZrttrdrnxfQW2GtW2wxHGUTBae2362KimRozT1WBiyi9Ai9HXyJK8meCWDrJ9bz9Mv",
  "key9": "291J2uLux26zNBUy1FFpAfdPrUmizjG9n7TxBRt66EwBd8hJKHC94XQgpSCcQ94xM2CfTmob68LiSgnjj2sKvQwr",
  "key10": "5RMHESY9nExmzsVaYVfrFSs5PsH1iaNK63wrKw4C1RrwjPSaTm7psHGzpG1YGZBhWde3CXgcw5hdFVqbrqeuzQee",
  "key11": "2cjAkyY8epcqwsF2Suc8rqCfh8RWur9cKn1CoWdqfiRXbqWMAvNqxu8Jmib2H7sz7mM23UMSbCrWDc5whcu4ijFE",
  "key12": "5zcQhTj2pC52qAQ4VGZDuS8qQNLWyGhRpXBdWvSbaLPYhsHy1ZVCxd7rdFjcnsSMFB4y8gJiR25wxWyHkMxg7wXh",
  "key13": "2CidhriEicVF8xrovUGmZDMnRMrFN4StEJsfbHGoYV7EH1RS3TQCMq9c4onjZDKHG4dXhBwpYpqfPSR5LYzKt9J7",
  "key14": "dmxPTqEgwjCE3hWpQwP3Pca7qRiYmqbk7uUBkNdpGwvwsPYJkF75Uxof4A6NNq6PofwrPfJC67VxAQbgqfy5ki8",
  "key15": "2gBzzJdiK6RBufTL4huvyW4rsEjLA3CQyZN455joVUnQ6ytA6iv52iwukLNKVqB1hbgKBB8y7LLvvhRpbE5AjCcf",
  "key16": "4YgVyY15AwaPCLdntTwCmhokjzvYPHonZ7qYDhNKkG9Zwrs5fWDgeAfpThZCLohLDGgwvgdE9gVNiLiNpEnRnMAP",
  "key17": "31pw7ADBPGxCq61Yfd97YmGZvuR7hSXPLnstBCmMxHa7cV2bfdVHfwMDvZkRAJpbJY28JCXy8woSsLW83QTrr9V2",
  "key18": "3YF4b5faiwH9RpBNeWKgyq5W3UHjEUwPjm5HDotV64NJvnHkGhxTA9XJWmBKyK1MsbwEsRuAuGDY1ZMaJtYJ3Ffx",
  "key19": "3pfHu6g9bhyTSjfCRoM4UjbXY77LLopU87N2GLXurv9aTjfs3vS2zg48VspopBm2WrqczBn1k9K8V2KnxnGaSUys",
  "key20": "3KSNszmKdxtk7xC6ThF5JaoMwrSV4shB2pV5S5sXrgfyMQqy6YSrJzc9gn4J3e47wBTcnkDXz4wmUVt94mqqEXM4",
  "key21": "2NkzWb8BRnfybM9bsj88asfLH8YHMD5pBZ2wpCt61pqRgX39drvPdnmTyHEMdMMJixm32RZ1hF5JHcc43E5zFsAc",
  "key22": "2QHiVpRxHqE1RiwynGbYm5EzNRcSpUhzpgr64hKE5VULVkQ7osxFrT4EFE2q6Euqdh891kZH4cGMdf2JZCSYMQpN",
  "key23": "2wP4UdMTZ7NoYha1U2R57rhgwJ6VcjgYd8QAvjeF4xTboCRDidDpPLDMQVyheJ2yrEWAQVGZFddNqumQFW16F6pS",
  "key24": "574BPx4AVgSYiZj9QJoPDymtbArzG1xgCxhi2vSoAEZtwEc3EMAxwFQnEPrcepFP2qGH56dJNw6wMnUHBgcMhHAQ",
  "key25": "sn9azT2ZgRRTuy2vyjTySNdvY2UqxVVnqkkKQmDfFjkeKha4WH5KsCjLW315wSHTMuK3iCZ4nh7tazTup4S7FvX"
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
