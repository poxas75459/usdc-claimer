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
    "RMXpVVqQCunqhgqDCbLBLtcKV23SfCV7xBBakTBzvnrr8xU28AbBetokvQbGwTzNhFg6672UUPuP1b4jeaHB5yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpuBj98yisBjGSQKXtxqUBMwVixj7KXw1ADuBYDdMZKUMveJscaB58nnWRc678D3zQ5YbdJXzLgxDGvJezcG2HM",
  "key1": "3GAUfujgwDckcCWVupPFahr9LHhFV5pWVeSebhZhT49qMufbEsz976nBS5YxpaLYUvExCaPSfeCvWZ53QZnpRhjX",
  "key2": "2WDtCoZtpW52CnsRbPJkXMuSVhx5vK36tzsSHaHrZQChZqSEMLWvPNDQFWwxEoVXV6BwfMNrgk6H7QpT2pKDaXS6",
  "key3": "2jgviaarg8M5FybVzKTiv9ubwUBEf75oWx5GZVcpcXsRNp1Rc2sEcaVLNDePUETf8NdihHw2zNQAWzbbZaiEJPyk",
  "key4": "2MMJQ1ummQvanmLvGF5WJ2Z4Ce1LQVEfH4JVomStRLcxfYkobzub8VrPLuFW1n1v7AN5M1jhzrGQAVZ7EFyEnxPK",
  "key5": "3Vori1oE3cv77XhveFjQ53RF43MKWMxxvpNrZyPpV9bMbpUSNiJCGjDmxYEnGnrYpY5rPQcZFg1AbNzavpjEUdrs",
  "key6": "2evA9W2APLBu6cnAHQGjT6uujVpRuyTmRQtsHPsBNmd5Uci5YcHfgPDqrak4iPJUVeQXoGHK1foGiQPw98w7k8Ct",
  "key7": "WchjmkuPF6CoGenemDJkA3BrnoPkmhubKwDiqc7H8TjeYgGwte53oKTP6TsKyEk5UozRY91ZNZBxBuLMU5GRd56",
  "key8": "4C1ctA6XCHvr4sW5Yxawxfdh7eBBNju4caafLwyd42FE2N2JeM1L5GZxXioFMhcTEWHcGdBdoHFqEH2rbwZMBrc8",
  "key9": "5i9GtbAecyoi5SYZAHsRXresCHyNyNT54u9NbKTHG5LwQBfj9kud4Yin5fMPYTCJs7PJaE8wWCg937GRdZwEMfZw",
  "key10": "5Vr2z35vcfU3MamEAdJUxReihBm5fnfpH7LSCkjxMb3QqYRTeiyR2vmoqv2HHoFiis6ESfNsbuNcgzQUsWinoMHx",
  "key11": "ZjNteGCGGnRrtbRzAecVuW43td7kTYK33e6wh2ZPg28oNQbFz6FdPvokuzJkWe2UbfhoxA22WsZci7BvbcpN6Fa",
  "key12": "zmUwrq7NjPEcoL2Y59G71b1zrkHW8rVkHDTYZYSQuhSF7ttT4JvfsbjvVd8pWAPNbyxMGyPc4KEWUQnn22v5Er1",
  "key13": "4PyGW61569V2cECm2XcqPFQLPzpFLeDoPU7V5JXFoFvDzXYp1CGTswxE7p73Xdakh7MMRrcg6NqiUvV9oTmAzk4i",
  "key14": "4C4icDyVxjh5EHozyKo3NrdPR1rsXbBPnTZFNMAekiALwa526j9imyNAmXBaFpVwJ946VeRzmbeNZSPze56VhfqT",
  "key15": "4dJ9giPLtJbUsyi4d5bSa2WBoYUJpqFAXiPoFLjw4LHDwvuNwNTYMrpWsQ4tRQxR6yayaYh7fRZoANxSo88KBzkF",
  "key16": "3BaynHkM8AYHkSKN4TmU4WyqL1Gpfqm2PiRddfmsPL12PbwyK1RrXo1sX1NCEFhjEGuMwVhFJSFF8Sai2NDLuT1Y",
  "key17": "418GcM7gaeYb4Femodm8XS389k9WSTiGVrgvTxCsctdkP1rHfUGQQ2t1cTT7nGGLRNnbayra4B5EMo4XTWvRyDiz",
  "key18": "63Wyh51otVsggRFQAbyRL9UnJnNQZcTdNVr8gVHX3cKsZxuZLbL3nXBsj9rm5psVbuPvx4X3YhwPzhoMdkfgpPV8",
  "key19": "4u1PyS9pcWZJxmT9uMAioLPVcH5Km4HzWcnCJxdbuam89qNZX4boMa6wFm9SSufRCsk484xT9o7gukb5m5fyb4Jp",
  "key20": "4z9QVg7ECSLVebwdr2ZkKhGWox2Q5N83eYvLq5rzHnaAL1ykmMXkC97o3qMqu1npKq8gasimRdwuTBtVFv5Ch4L9",
  "key21": "3wRsc664NtF6FzLeKrGERAL5xrZj3iTfoL3oDoSw8nZEgSVms1Q2H1jthX6qZekqeX2TaVEKyQmbYagqZADnHxP8",
  "key22": "5pPT1R1XGBPH68x7gjaCPm2Y3RJsTbtK8E1V4Hk5RnJEAvRtV4EnQwjHj7zZnYihxoPwPbf26uQbgeWofJp6B7ZJ",
  "key23": "5vxT8ESAeFNoGnGKCmZ3c4ik8reU8zYVyYcGxB9bBa7Ay3yeRqEywPn8v1qQZ3AgaSdUM8LLVjaFHJXKhuxkDZ6W",
  "key24": "3thSDdkXN7dp6L5JPBG6bnff1h47dDkzcboBBrzmZ8Mz5r3BvmgVWm9YMfFpQLG7QsYb4ZUWaXmYEokamDMA8e1J",
  "key25": "4NptJqJt2Vvzzzpr6p7pxVLBHHPdyH4JPZdQ595mqucjTnVFd7AimjV54S9QLoYCsJyQ2mMY3pxrYXktW9cnEEtu",
  "key26": "3Foy5TZURoi7J3WVVmjfLb7tz6BNMgU1EjE7BZhH4Rw15ABarDqXYron9ghnFiWVEJjG3vBr5A9i6aDzsh2KZNhj",
  "key27": "4HN1bHddYySRFeAKDTN68bq2PVFPcHeigALhHM8XGZYgP18qHpfSNYPvwo9o2Tu5YJ3Q6RFYPWFtmgapddGTx148",
  "key28": "3yVtssarfbbAi3RUAxwRH8zyCFHwrRUA2qBU5zebDTdFgUs6qwY734UJuCZxYY9mJFa8efUdoqyiUKnXu25XKyWP",
  "key29": "2M3Ld3moHZNt8X2q5tfMPu4nJc3uMJntfuELWak9A7H2wsg9xqzPuEKUcFfkWSMu5WtMgXPKwbnb4J7NsyTyyDC1",
  "key30": "szo6jMG5pDnro67ea2PMBQyBtpar6Lo8TduW2aBfsrdiCjkbk3SFhyxbwfJnnXy4FKYPhZ3keMxDRR6pKGTQGcy"
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
