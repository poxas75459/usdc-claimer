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
    "2fJVLWpjpUq6o2YmapF22sRn5QSK6QBw4KtnnjQffpX7D7UyrmRjkPWoyE4wZWQLiwDQWqPPiq5RHqiFdisgLRmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFMVGiFU2dvbriKqbTvFRmHH9s8PTNNUa73URn1DYesqyfnNwofZu6CxxebeaE96xVFKZKrNxn5K9ByJ8cZo2MH",
  "key1": "41dQqdEmXZ3bGbVbaSntGSLHbfk8XMC1iKxXe7PkL4HoG7ziX4GjVbapL7uMd8mfeAnwmiLqbWbzQc9Bm5hTqDgw",
  "key2": "2yfFPrZhXD8zmt4jzxzwsEnf65nxWfSJE6gxVeraL6wvF5Rfv4FUGe34NMa69dkQbMoqkhnws58jTo8ZN3hPWF3J",
  "key3": "22scoygeVaLBNxdEWtTgxxX5V9fcugU1XuLatqWpn7vun6d14RtM7c3Mjgr5wbStNtDv1pFzjZmXJ9fetPmfhBex",
  "key4": "4Uv2eRjpMZborRfEBfJNi8uQMs6TVyuoii5nYNHw57NtSHa1RfKhKPgsvG7uydmMo39fMmfT9dLQensmz2WW77ga",
  "key5": "3mCtPoPbZLmJUeEosyyqf2gG7Ux2PQPXirnnzEaqsn9HEEcco7583Zx8wbB2CYmJG545dSc5g8E42sGgsPrbX68R",
  "key6": "3L3FEzvSgNKLTp5QSfqNT8v6ZnZWwE851pd7rLZhtAYmCtiQNBUuWbmD2XfBdsJsiZbqfZap9mtezF6SBvzNhYV7",
  "key7": "3F7mHN69JmDtJ8Q7TNLvviYr6UHoC33vobNMkE9HSNf9rhiw2nERkd12sWiV7QE36Wbds3cdYREtVCe7YBuQsBk4",
  "key8": "5ukkasoMqHxcLdB5QNS89v3nofGSaWSeEXcq1hmqXhFXMXrJEigFrHEjcjdr9VuLv8KtUc3Br58GDVFpMQpSvhvX",
  "key9": "K96B77y3mzVPkefSwbSfHuAi8H7Nh91bbShJnn5Herh2gie39WRYyKFBg9dboE9V8tRMdphHh6iUproMvP8WFk9",
  "key10": "eRbPr1bi2fz5D8rRVoitjAKM8gFEgAbc4Y6eXyWLgpdqmMjLkyDeacV2dQsK3NdcbD1ZEAoQNqVcx3PowSPbzLA",
  "key11": "5yiHo2uLXAVvwU7GSE4BDnfPAsGJsZCbjehLENQki5h4dcYJBGqWMef9WWKBzr2ubK1VhPWKpW7Euu7X6kf5ghvP",
  "key12": "Vrd7eQeY7wRLLPsjQkZaLK4ZaJ6wSpLC9qLmbyJ6hqrVgn7JDfjTNUj8ghKwpBuBee5f8QoioYYkVJaAoSD7T77",
  "key13": "X5wzRiQvG59RU396b2Ed273L3egRUBwbiYFP9Qj5PiL1fbz9EWgNwkrf7kmnwLSg1394Yn5DkEQo6UUUY139y6f",
  "key14": "38WSqLrVLEWq2K1bVBCr3Yxcjr3q7r8Tozqvh2GktKwjTE2KoJ2FpzwYHaUZtWd7kowpjTT1GfbsDvXvpdVEvkM3",
  "key15": "2NeGQUodbpKwrW1T2UHDkvN2F2r2KZT68ubc11GV5pbyJow57XT9BSo1873ci6uEx7y7eWyM4tSMwsQWdaLAYyH9",
  "key16": "5Agv1bGS1ZLpUb5rkuHskukHhpQvQqu7eC2smXUpKCC5zp7wr6op6mY76KzZfh91HcnUbSkYJR77dYVfkq8MCeVg",
  "key17": "5FapLvnUot9CRQuzh5eaNDxA992QVV5xW2zdNr9fiL5biKxmSJfLLerseeHtpum11xwzsjwvAxyY5P2UjifS7Xfu",
  "key18": "3LakwfVKEvs7MpwxUkGStmV4pbvpGYRWzyw6TFkpTs5odoae6jpiMRzLuc44h5ALA4VPG6Uus2qb2cJ8EPFgypNj",
  "key19": "4UYfoKTSQ442Yu5gi7pGszswxTT2brbSVQTirGqVqdbGB9H2PoefS7PYTHjrDnEMhL4qpbh4tTDhkgAGJmJgjvSc",
  "key20": "3a2UdjQFcjYz1nQypxxzpbeaHywSXpZGHmrFJvZcMaamJfSg9Aop1ThLS72djFCoT3C8hak7yt6Jzr9pQAnD3QB3",
  "key21": "5yLfX7j93R9QkdB1RXsof2mMJdH3oY6Ye1j3TMidN4xVntssWGj7BHojVgNcXVMpan3NijmbMq9ffoFRd7DArBAw",
  "key22": "5NFmAkgtH4XV3KV9KWTFnsB2ruFhe7h7YA6qgWs2d4zt4QcXn1VQAwjxrnVCyxWssjcBQGHZW8FUsgqgUE8Fuqj1",
  "key23": "wq3CZfHWo1DBNMs8NhSVVLDiCuxKLwecmpuDt48GH5xjQVRn8exNAg6x7AKvU4hB2gLH3Fj6qQpnM1i4guio4hc",
  "key24": "hijSevarWENn7k5aNCfs4W7arb4bP19quguu69e37ZF2psLjaLEii2T4VX3if5XD2RnUKDYu2q1E1hWySRBcXVF",
  "key25": "3xVEbg5xSyqXLGHi8rg161K3K6wHKRM5QPEBE2cTPtrmJUU8cNxJFxq1qMc4QEkqnvDrFpUZtbtDkv1PnStaj3KD",
  "key26": "2aU48B61gnZsgYguDgUmQoDsSNzPHfChkwFPfmWKXfL19vnCGHfmLc2cLnvHcvs7NDg51J1Hr3UMnb4ZsSjzAQxt",
  "key27": "5sUBjmV3thSh4MHSV6LJVMabX64T1bQn2zeeeeyb5EB8vSn1y1C92Cnn7dauVyVeshWpXpDKQgNE9SV4SmHpRN4A",
  "key28": "24szzXhxb7ptVmnWG3w1LtGenT1S4Ry1hDESikVr1rdmXRpryiMQ1Q67odVs973emumbePJgEFSi3XRWLeRn4DnS",
  "key29": "3mqdPTJ9SuzQ6w3Y8hVhBB8Rr97Un2uV4oESwmYzqCtu1NKDp5JmYe7Cd4iGbghnvsmQNY5LH1jRb8jeQBWajJfA"
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
