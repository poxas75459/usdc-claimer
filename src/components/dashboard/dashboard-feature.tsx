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
    "5UYcXCjvhZKd5w9qbkRcCGTUTRGVRkkP352vwaPvfV9Q93uvPEDoFMq7rAopQSnj6HBWosVxEyGcpUswjTv3RVoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5X35TKTkY1CN62kdkBKKzsP1tcCCnqvTuLqJCt35D8bYqnZkmXbem7RQUGjFPebm5GcfGDLExr28sW8XYaE2kM",
  "key1": "ZFc57dzRDU8n2EDc2eHKou8wLuTKkRUevsSsNtwMRBiApQkdFupxxqQFSGVvFaHj5hVDLKjk7TTDG7EFEnevxZT",
  "key2": "WwdrCEsaE7x83fN4MXwF3BnADwQjivm7xK6q35T7oUs2TBvuuc3bXS7bFa5cS3cLAbgKs8y6NCRibX8mkCCnHQD",
  "key3": "2Gv98QtL1dDP9PJ6ULMwXiyaMxoKNMf3pjSQdW4ZntyyAsMtoFWPb2vH97RZRPJh5yWLC8xEzK4NNBXtVJqQAFmQ",
  "key4": "3724PoMJyKwTJV4kRbh7rHpxBfaAuuWVxeibznKWKSBRwpRE8GFH6rGjvg9wDssqcfAVrBkZZHEjGYn1KwxQ619f",
  "key5": "bvRur9H2vAfcnFC9qXv6d1tcGnhSxf814nGpHTq73djm39MDVKt9WzKxrB3pERqgRDKAAykTeeyuKuew2QATwLK",
  "key6": "LJ2dRzm4qBh9Z8HtJBtmz5sNKdxzCXE6TwpvGew149HUHbRB7zFBaDoiqFJ5Asbfx5edZVFk3SRdbadwR4KuD2q",
  "key7": "3fBjrB8Cj9vUHZ3rFKRtFk4eEGidPn87nZ9LFkuGuY45NVgZiF7KcV5gCVvhHAvrrYd8nrvyvBh29eUd1tieoi9J",
  "key8": "4fZSsLEhER2cDkrheQvsoQwmbg4vdY7PHeZLy9LB8mMziJ1hWoKY4TcWhCwi1bKLnKPDdb2LAStCRyGVA4repraz",
  "key9": "4unFvjcoWEs6JnaN9yBePP24fBGbr3osAW5rhZLjWF2xTyhCTLU6jjppSut2DSPGa2X2uSiEEKkbn5ZtqFWzkkBG",
  "key10": "57KEoHxVtuNhnmBec6wrWAEfw6UfnQ4M2maFaQqfTY7qihYaWuCPHFZ8h86VWkNf5Xxt5ygqYDSkq9qWd5DtKH9v",
  "key11": "rnzEL7MqP8Dk8sPB1YTMKFiTBmzNWiBW7fGh1BgfZrEnGciatrWGa7xoP9DaNYa5YMmD6h16eRWrrF9GmguWn9s",
  "key12": "25Wg4Qkbz7AmQYexFWRbbfRB8yaenJPpFBdfocb4Sg23GmiXhnipw8CU2Reg41gqHs2xsqMxECheh2cEXrMPmsC4",
  "key13": "2csyTWtXvEkMnHdGCD9Sm49CM5S571K6c7mG1CzJ77qJD6xewf9wZQnGkbPzRnDyMfET7nztsDyFEjB4teSZMaWP",
  "key14": "4AEEzVPXnd3BqkUe3PvjgWNQzofi9WTh6tCk1phC3oPTMGZBJUmXNvR7odzgPDZF5PvNppUh6BULwfkYiXnomEXh",
  "key15": "3ZzEcQc1xPqNV1gAJa6p56itRAZN73ZcV7GEPMnFZ5Zn6N4nXtJPh9uEukPSeBwtrfNpW31PknyUoYEkyHbn5xzT",
  "key16": "4FprtEBuuvYZmDBZ8YVbfvCqJ6Abe9pTQ8dbsqBNcX8nz2uwbv1J97biFSXLqsNg9VWG1ZaqNQV26nLEShqgnQ2n",
  "key17": "5zuotgXuMmGrNMQHws1hRBLddeMfiVQ2QncgaYk4kCcqPw3EbBHybKZzA9UXXuyLdAe9sgAxmXDnDqRCb8NDLppj",
  "key18": "2gvtvvWFgLXeqNAd2iTg7TiFfkY5MmqFHnFCAHDEqEPQyv9eheDs3xKAqGxkmb5UrCKVS5VmuWQT1CdkqewFLUUq",
  "key19": "P45w3MCqtbWypVxzjJ7zT3zj539fNn3t5f4a4JArBQxcRaY5SG94JQ61yCSaqbAYWqerv52ee57HGjHxrP1iLyR",
  "key20": "4bcqJ3kuBdGbtXTYEtPr6LBQk8iDwsQLNjzog8xRakVYN9avEv5Vg7CanofpKddmBDtNMhkz7BALeK3chcUR6TkL",
  "key21": "4Zvv6vWA3JLbncMJ36bWybg78bGAfDRDmoqhfd51WoC6WyUgBAh1f9WBWQBR3VCNGQp8qwc3ge3ZTz3XB1naWhyv",
  "key22": "4RMHyTCXP6vZGPyJZH3NHiCAwHiuEWbwnZ8kbBocVnZ8AiDYAUnX15U8irtiJmCnum8ah31F3AzomEvny5yDBxMj",
  "key23": "3Z2KtMYS7eQUoYGYUZC3qGbfUk4S8mFWF5gdC5p3aNeiG9FCosySq2Zo1YC64tZWqqeMn81HauHLJ38C4zPVC32z",
  "key24": "4TDPLx9LMkq625gVShdizt2B7K3oW8zPkm5nYBffF2cH7xxF6qVrDvTD7F7nUYWiZWNVfJxn7L3SRZc35LHE6TAq",
  "key25": "1vMgaaE2z2iz5hvZ5hGixT169knv5qBk9USRdGH2tt7947JVMFxhvYGrrdzqdVtgh5toFKB2BUVTbRh51G8T8YT",
  "key26": "3AA9Kpqvm7HViBsfPuRBVVTNdzindHTY4YefV1pTJcrPT5rngU5WjmLVXQpJpvbkWUgxkfU6ZjTmQsRimVRqD1wG",
  "key27": "25Bs9HL7QHsvZzvr8YY823oneCSTwzFQYbogNpaPgiQG7AdKXvohotGRKSdwrjVA8CURedDqyNfuKZNSm4PhDTL5",
  "key28": "59tdZP65YxYYFsKLeuWHcMVjUnbKtCViYgJmqyo8fe2JQu5pFqMmSj4PjkS2sZx5Vj5cxB7GRdv6KUfMsGgD6xao",
  "key29": "67AqXaj7dCaHMmTUE6fpasqSXTuWCa5DnhgE7zvNbzH9oLQKNtquJKiPs6doHtEgWecAsag7cvQs5SogR72Bu9VE",
  "key30": "9an3FWBa6n4KjnwWRX9tKkh162zg8d1cx4orZZpvDLGEJPJzemr2SWAWT4LjnZ3oinyA7GaZfCnB8KbnfDxi5Ld",
  "key31": "287wdaMry1MTxytiCoV9qTH16h1EZJgxfRY9Jmbbs3FjbTJYXSTKwCdarnWmSynnp7DTLtX7VoqMBEeezknsTarb",
  "key32": "2pC6BDLurfT2zYj6EgwsexnnmN6DVgB2mvTxhwQ14pT6p5uaexnf4ue93SGoxqSi8XZXUSA8sz242RzpahdHHXEq",
  "key33": "67Hx6EoDC3mDyfsmAhVzBcUPqXZwA88xpfMommUv7SkDCvAfgXN6GAg6wYdQaTKn4bkG51a82xMpGtX6QFykg6uB",
  "key34": "5d12zJMp3TCvKgmf5UQcFj71tWNLmdK4GRwSwqUki8F8JwsdcnoLyDYSCRMV8AVip9o51zHVdTsY6tzzpXSzN9ZL",
  "key35": "SM4XxhQk3YEq1sYajFa5QSnFt2BSoN1S24s3bDQe8YS6Mza6yuSPfJWeRs19ey1LTQtoLTJACBAAX24KQRSva56",
  "key36": "2iQWLLTBnpoJ6yBnymvHXmbDJvXno66WedF9UTs1iKtiphoSQQhM3QsHbohs3zpX1rFDZxP5W2sDmxdML9aQEB26",
  "key37": "4GZxGL3HngYBwvVgMewsBSeSUmt2dMNdt7XPAKpfCwWRvehCp6Z9ChvAhMGF2x8TQi7wmfFEk6XrtvY1F119C7zz",
  "key38": "2u3QBoiMjurHKJHDhPDjbVYLvxpUFQ1H2qWFTJHGRpqtYvYuM59btqg5aZbqncVsSNkSStxgrEVwgKfrLeU3PBq4",
  "key39": "3dcfTUzMUAZoyMyurYWVxAd3ddiEbQht9oyAZ6T7PJAUYnEAyLfi4oj1ij9rqUXHS5bRtHKyDebWpAo37W1H1JrS",
  "key40": "3WFRDYdPJCJhZFMg57VtNSKTqci2ZEAKvM1uP8FtAfixMkYJLW6A8YGx7Mr5X3rmCBUDp3HnMu4wCeL3Hp9YgNFt",
  "key41": "4nqdwFQ4Q6cT7uiZtuS4JjyWVaT8kydMjSbBH2uua4PPuW71ZC7V7Dj2s14uzqMTwCdCabjYRFpAZTrjfPeqUFpt",
  "key42": "e4cctgAEEJ8kyY4hn7dEMpNEy9YSMru8UNt1jZBC5fvDbAKwqvUPbdPk9HDFaUPzVjrrEmoffF6dcnPNBTi39Rk",
  "key43": "a4P2h8pUBnVRth8WxbdT8aGTyAAUtvkqpYEpzgohNk96d5jeuJhYJLd8ySWiUxE48i65fc6ktW9JSQ8bgaaHMMe",
  "key44": "SpGyUtRoo2jfjY4rTo7YGfJ28uY2SZSA14Y6a5JuXZMt8iPRxTz7522JD7Gr6NapDwN1GJkhByU9bkusxMFu2uc",
  "key45": "Knry14egS8LZm6VB3ku6wUUn1BF1GuYDY4R3Ly7NoFTdbWZfyf9QFEwcdxrcLGrxMMgvXTg4KRKG9nnXxbrKzU1"
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
