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
    "5CDZGfkXvwRtii2xGxM2pyBBCLVAUmPrUL5MK6KiLuV5UHkv9tt2M1ywRT9VrDvmdGKB9dGUyzgbjPxdZzVdazFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJuKKgmXh4LRmjuafbvHsJ55E12LEuBEK38giwPiVEhdioZWY7K8HtaEixUJ4oEYynrqtdVBgTynpkP5Bd5jYU",
  "key1": "3U5VNpR1UiXKws4iC168FxV1F3f6w1jfN1HDcgRj9VHtqrMpKSmeoRbbsRqGuAwzZ6yMrXz8h4xgLR2gutkhzLsf",
  "key2": "5oG6xichjdScuabLRLvyTXPBtcT4scMt5Z8CzaX5mUZ156gNWJpszSoQvpzbELRScVwUUMEpVSHAeXYf5QbYYpm3",
  "key3": "4yM7JZ1oMouMF5k9tdPYKT8fvrFmQDTRXErftbfsQcuxzgTtvSqwG2zouWcZXbvvAeHzbJ3eTVBDqUCQEkBMFHnG",
  "key4": "34aXagY65yKrSyZf74iQd5HFMsjBsD2ZeUnFobc6ASiGj6yZ1FafX22Qb4oSjGxhcBd2BjrfVwCwDfGYmq2sjmPY",
  "key5": "4gwobwUPP1RF7BjYeuGu8zLB7y2sFvKTSQU7Z31AAKCq1wkfD6ZSmESmfddMUByFeAp5yg9frCh7CyR5MkDasiUv",
  "key6": "5XAffo8gmEymHeeBdXC2HLs8Dsw3umUVb8vafaUAjJZnV5bVdWNuoTzS4913Wfnbgohdp64CgzcBiFN5u7hh5JvX",
  "key7": "3D3A9xSDR7QzfMkMH38eC7vjbmYkXdza5t3mK32saLzQKNUEW2VmVeb5ihkZvc7AxsGFX4KHubGayoraGvmaiqFo",
  "key8": "PxsnGLm4ohM3mqkzerbiNYtjDXFzKEUxd1R3kwZ2CxBfMGgkmvrdG9m9WuH1rJAcJtDQiSx9MpvUeZGnYksdyMH",
  "key9": "4muKnpmKqPAq5kWupGSiMBXFXCf5j6Nj19rXkE1i1aGc7HkeXZRSstrxcbLfYoJ5cMfbg1aUCYBghWP4Q77QN6t7",
  "key10": "XpC4FayYruDtWn6QZfvG4xbqDUawZ8m5WqXuoHo2fR3EH9erJCfGzc7hN7vFnyNJQ42oVJD5wL9Azay3wohnFw4",
  "key11": "3oj9XYiZvupi9VJDkfJkNiKAGFE6bVUquxKE7vNeTLkNvr1NF3tPsZbo2FuNCNLJgZsSeBsnDaUadYj9zCnwKVSi",
  "key12": "1PR7CW54Xnq9mshyKv3PA5oKsATmEBUqA5z3vYXaDjhWZPUTinU1H61ocmX18UaHKTqheE3BCuNBbGXGyd8CGyH",
  "key13": "4c4mg5AGMBwTVAp6BQsXnKarecNrsG272uDftoNjQGcZmrUgK8QfatbAkFLyc2a2NU6zV61XiT1Koh8oAuCfVEdG",
  "key14": "5HyHZV9VJ46YufQ7aWJtHdUSyP8SUaSk5aWhEQh52FPF8XJXnC9saxsGHDGUeX9RiN9Mpm63rftjahDfgw6ZRmYf",
  "key15": "BwCamo9KtQMLUd2XQke1ruwpukQAnB582qbxVW7DALBEiwTbhCYdEjGSn6t2dktzTMxKtsoTsfZCJ4v99JWKSnT",
  "key16": "3tyqhY38gND8EgCxUdrdd1ioDG8t3YKm1tCUUWsRsFiHidFqXXBwFAX4stZECHzJ5BjkEVNwn35dCt4JYFx6eD5i",
  "key17": "4GmiCHnpAikfAzn5UDwVvhCxpr2Ju6RHCMmDXTyc2aZvU76EiDs977HoAq3dNt9uVaBWqCJVYB3iLoVCCuTsLQC5",
  "key18": "2pfPYSpNPdNjoAAF8e38zLodW7o6xhALfJsMGVJT5BRHNafCZjkKBwFburfabJvvJXgJFhXifd5E7ciLfhCqsyXf",
  "key19": "Kknfe7EiLgtmjKViHugGamW3dQrwHwYy8yEQuwXkZEeBJvA8XefDPMSoYJkPXQvy7fTBre4pec199gQJJsLw6rP",
  "key20": "NNW9okomWEq2TsSwhjwSmPkxJ3HoPWmKvbqu9Zt8bXuByXLqR2GCWJvuvEQZAXFTmC3G7xviEge2jkVL4n53yRb",
  "key21": "5YzcAY3hUV1UAYnc2bBXQwWfnkpqvxAnHrznfEexzamUCby5oWbfxUi5dLK72NnBfTgkSwq2HKwGSDPYigYoH9Gc",
  "key22": "RX2orhw5cTYdXeVjU2iaiHu17LS3ACxnpEcfh9pp63QPbMeaeaTuwsPnywYWGov4YLThtpN4H8br7EkYnmnYmSZ",
  "key23": "JLMRmi9MBr44eKjCT8G9F4aUC2VimgJ2WsfeVAmU5NHDrSrK3KdNoNhjEPudWn9EZ9qELqFtki5eaAAKwBj6JFe",
  "key24": "4qPJju9QpBFx2c491K57hR9zJy5mwjeCVpFthDTmWqMP54ckP6Yr7Rf6p6EdwgKAKv44srAhY2CMikudeSdR5hPR",
  "key25": "4HfvBTJeuZjWLdtRRP64fFUF3pFYMUJsZRvdkJRgRULt1TQAazmiMYngPVxYCr2Zs61w5L7BMZR61VgaQ47SMr3J",
  "key26": "3jUC7U6wB5BbzKXVS9o8z1GNqQn45H9ZJqWVEV25q53yoSwJf6kY2S9TuqJsWRJjnV6BFh6Ryp4S4PsATya2S7bL",
  "key27": "2bpwuktWSsuBMUNe6Z66d7L7aTTM1NsbXFATvtR9DgehNxnkAuBgujBnMZbFUmGAukpiLTSea8kAWDu2NV69iTnR",
  "key28": "45VUtCqhJ8bVDmF1HA8Ve79S7KRCveZJbviH7dZQ1qDs8MX4fG4daqaEeX8rDJW6jPyE6G7RqL5U4Uq68nN95P6A",
  "key29": "4MgadP5ZyuYXoFmhF5vPhEJfLsThmaxrc3JYfC3mbqMeeANYY9sh64g1CnuJANfVJ6pCSBqrpvSMmYqJhqm2ENjb",
  "key30": "4tBNCSAhzLXmnvNNhPUrkxrE47HzX6D7tP9qze4pNANJyX5fxJi4S21JVZx2Taw6QcpyC6ao8cLbQFdN1QsRcBdG"
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
