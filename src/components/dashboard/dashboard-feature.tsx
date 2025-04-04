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
    "3y8ZSV1sk295Uxjifk9LWAQwEuJjDZHZf7eGmdrKT2qpxxnCMvrJqag8R6CmBC5HCGpPPmFn15FrKvUw8e3c74Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FF7XPYhSwiZhEo2cLSNVbDJYy2m3oBsbpmqP5z5hHjQhwGqKbpfzdKAkFvC2b5TE9VV6iAHvKrDnHQNJzS8JMp8",
  "key1": "4owzt1SBcRmuQeCsDDVbvqbCDHhwR1piXSnpcmAZdf4Xf7VueBX9AxviDEMpxfaYCkMKGpEQVde5xad2xSkCTS2e",
  "key2": "47E7dUXWM9uXj48nvcgpTUTz6xLrwdMWyGgeK1ximwSQy2gS4vAuCDfbkwSqb8Yseb8nnDpT3YTQxQH9L3s6BTrD",
  "key3": "4uSZRFQNHN5Be8HLDAKst7wK8E95XkWgFWKYEy3Y9BApxJbxUo5iReTooSDoEjG71yExP8dKZeF8iNvDyA38TY7e",
  "key4": "L6GRbZkqCtGVyLRfAMQEqPsKjG9Gy6bwQ7QBow4zU3Ts6rSC6VdnzXDBN8Wn9Yc21qrvVeCqPSqBpW3VfD2hgQp",
  "key5": "5sDUXehrSqg9oHbYSwBVMaoRGym8cvYi7czv6WmMVdZeTZDyDpPGwPsrzXFAfgGtdG2wmsdFdr52d85Y133thc2B",
  "key6": "hrsQRL5T9N5DFBBsLZvNE4WseDskjCEXBsxP9PkFRVLX5iftrWveAVMAzDYtZ5YqTNwyKp1ADLE2jVVBPvYTbkp",
  "key7": "3UrYWwoX9EMRNCbXNTVHND8LvK1466sbfC7A1r4qZyyNZz95r7ETjdgq5CVvgV4sUnG2mYszEcQ61Mou9yMtkLEc",
  "key8": "6N5XRR29tLZHT2DZassetrbCbnNvG2D2PR9S8sSt9UdHQK57UhVepDJf1ju6tbKyapQYf2pKsEEL8eFdYphmFuP",
  "key9": "3Zx4Ki11rNcMtYbnCgsWi1iyevURRQ8aaDswG58MrXkXUNoBXoMiGRFN4uKY2ErCM9ZidpQAZsKqGfGdWFrSpHt",
  "key10": "4QhehfmeVGrnsbUR6TbavYeRfSUumc8VzQdAzVSr1EEVykssHsHN6NuZ3ckNznpLos7Tfn6kg8YzWFsGrD3dsHcu",
  "key11": "59QbdjWSyqcNx1Jto2NJaFUR9J6gpSHQLoe9bXiG7QfUb6wjHumJ5MReWEi1YQEd5V6ncP24cJdoHzCwHDpv6okY",
  "key12": "4N6CsxmUCQjxYzvPE4oaFaR87C3G7UdyKmpkBvsABfAx3mq8Su6Mcy7UK2gv6bZZCmDK1zaymVUpUMAPw61enFRQ",
  "key13": "2QisV6GGySZWHbatLk2Qi4BuMTAgQoFTJGDMmMrS4BfEwi9awTCPqjkpjhhqgBZmxBs2nSWXptHeto3pM8xRk1Wy",
  "key14": "uBQJz4jg4n4LpW5zPJqCA68GPtUWtCopYxiet4Mz4hTZypqwori87Aj1ntHhoW8ADeja637agS4eQTxXUqQA9nr",
  "key15": "3LkamxeXGWNc9p8tUKqXaYm3Z7MpVQBALWt8pjZQJUS3YLQzJsEXFxSbDv3a8sfAK4Lb9eo6nyhZ9ss6NHfmB3QM",
  "key16": "vdjxCREEsx7oYJAtn6p1iWk2wt21omsYDVmmxm4PMKxe4Kw5tBpoxzZA8yHuK5n324md2jpYDANTTNmdtWqZAUm",
  "key17": "YLv2NUDeYXq6UwsnJ27x1sYDKFkxNWpHHnHhtsje2ZGHqWho8aR7PAoHg4wSyjcPiGKyxuagwzUN3QrErkbMBUh",
  "key18": "5L8tA5cygoYR3d44zCUuXed2pppDMHJo61Ssj5xKXF6zGkWDEpSnigBnsBq3Ew3ZhEyy8eNuAnEcnziQvUsh9F2X",
  "key19": "33tBVcWZQ11z41rc44AtoBxVCbM9dJM6mf3ijkxqaM3rEmqC4JtEuAWo24Rq1Z7Cas6foZ4vHQxLsWyMgER9US4N",
  "key20": "4JEYSCbcRphyPUBya1KZnyHuL9Rg1v9sAiDkVGJbeY6uPCzB5Q9EjHoG4ASzWEYs6shFkes8JQnFZwp9cwMG26fw",
  "key21": "2QJdJGNFYhhopfa4Aa3QzrB8oVaMof4Re3BXKS4fDPYKDESBeAMCZHKib5AzBqoitvwsb5ZKn2BiNbhEg6C1WpMd",
  "key22": "4B56uRo7swQaNqTs2XmAX6SadMDWy2Furjnhz36EuMjuYmnxUYqwenzePBmbSBYfRyFt8XBK28qVXbFouBi6uTqC",
  "key23": "4wHXRKgdi4fcn4mmAutQQvxd3yxFBRaB1xkKRcaFZPwwnKsenxEMSatyoeqGCZ91XZiyZEutFfm3Fd749LPbPtRH",
  "key24": "2MQEdGjfhwMhCZaNnX18BdW9CQeayFQcfEpDaA4Lae1Uq97LTKMxxD7MZUtSfShRfSr4CNKpF9mHJ5knhLGPyJjg",
  "key25": "2JY63JtSSGSXykUe6kN8YVqMGbNta1Vh8QEGf2mU2hLvUrS2kPBqxaZJS55DwuBxFCkvYbQvpYazbvxyPi8ZonaT",
  "key26": "2r4z7S22BpA5dkCAH7QoGzhs41DzyB1xQUJNkurtJsF8iua8xBT34c3kfvyEv8QE2tdiezP3vjzeKLrPBtfqxJx1",
  "key27": "522pVNadirBTM294jZY7asC7T6Lc3o3iQDXpHX6UQ3EP1UCmQdjeCH9Nqh7mE2gimuVs9mfpCMJgZ67hQExXeKw",
  "key28": "5tmfZZegpGG6f287CH3nD8cror4mbXqCGV2esVxYTvKD9V3aKY3EBEvKkXM8bzt87giW3aK8ivmqw8YqoBYSUACT",
  "key29": "3Yipyu8DtgYpFMBJ5bGEceByStxUQtkgaPTrWo2p91fLmSXyF9VKS5mn9ZWD1m7cZ2JzEPrcBhZpYWMRMsQaqpjv",
  "key30": "64cyQdrUYqrhbFe5ipxy3x1JCwWBRDM5PiJYLgfKb2qbq1iNfeXW6sk2RsdLB2LjuDbY2Gxx1SGQdbqEjxEWk2Es",
  "key31": "2Nb5DcsKs1HF7Bj1X3mEKKnVX2k6DibMwmeWrpSNntcWboNGCDNGVq83Pr1L2wUqHKW7UhKXf2hdhtPHJWhVUYVg",
  "key32": "8p9xiVHAozfWp5yiiWLyUvrS1J5Uhfqeb1X6KL2C45WBGZizqdYFddCSFWBT1LwhEZzCFw1E8AiFQ5ZgS7W4Jh1",
  "key33": "5D9m1mMkvu4AGJHvm8XY9TyRRggHkMuNmX1NaS4Yrf69Au1Lgy2phXUiDEmjRazEFyxD9ufKeTGSnVybEV19s8zx",
  "key34": "xQrEPCkSKmgF8wqUtWrdnu4UXyH6xTtKzbwyERkFRbX8ULWaYQLeyfZ4q13V8bHHsEf3LT7PTfLNsUs7Ps5y6GS"
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
