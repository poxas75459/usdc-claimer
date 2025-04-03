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
    "66pWMJFKfiX2wxmW2yNtpKV7wJycHEkEbTUcA48C3EsWbzqPhrWkpHdkuwBjcuCU9CX7pSAK85H9Zy6ZTkFFLPco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MQTHKYhDaic2JPtxoJYsEgg32k83HnVppcG8zCNziAHkghcc9cQNNbRd57Am7iBH5SR8HSzXuYcLjh9XmVyVeS",
  "key1": "65RynCpW1SEmsZxBf9kyrtaS6MxRkiErED9VPLkqormWoFAS4cAVq9RM3QaW49F9zedi4di8rbTty19D53aqchTb",
  "key2": "67dhjwB4kFe2Yh22mEXWEcwT29x5CEKuKPzr8hRm3zw6aPt58xEhnNKmDGXudSQj58R8GjvgrMVfsnqGr4XzHym9",
  "key3": "58AMmcbux59wL3GbxZ6DEdxJhGwk8Eb67kY7WH9TGG1wBAkacVwQR3WLHJTJawhswtwKNp5L5XjBtBNJSeBFqhiQ",
  "key4": "MncedgJ1M1UkJ3pXe6B67pMJnuMU1Rj8Bujf6G4ReuS3W215sx9TbogjQQf2BiL3CpZcXwGK1Ade1FTJCDgD7jH",
  "key5": "5usJu6Z9K4a7fnjF24Cpms2jXAFS6jzNQTytSLQLbiJ3SZsXumVKCFwYpPh3ZghDSJxsGskiqSwCLg9rEzXnUwx3",
  "key6": "5LXNRgogP9T19qF2B1pbT5GGo3qPsYn8dPwVhnLxPZ2NWLK8g9uSmYtkHjqNH6zLN4mRjiuLvVyUX43Akrw5SAc3",
  "key7": "4krVMHQqPivLsaMeoct74TDnPBhjFFcT5C7wVYVUPKitwMuTjysai5sj2FMrY3kGvA7ywiTeEN6UFG59woqcZSfQ",
  "key8": "4uqbfZSsWzUneLSgFUea1daLye1CkvtzYZLTHAPsCABGdoR8kNG2wu6qduocP96i7TPPoSH3c6FsLgXyKGjH1QSt",
  "key9": "3SCAQAPHM7rW2sgxLS59cKSQCZvcQs2wZqcLffbsVGz7o6fWfFG7xXVa9X7f8GfMrZXmnos6EFVHWQKSzZMiMUoL",
  "key10": "5jw135Dv1mWtZqG1gHXaCuA4KTD248n47G1fVKXaG5e6QGgohFAU5NTuk5H1gLccL53H5uX1SJwFrUCg593vT878",
  "key11": "cR3yRwu4mAPdPVizaFEavB5XUySPb2EJKS9CnZiYfRy7cV1fKvisVuE6XdYyCTdtzienLnNYrTAGaiFVcLM8qA7",
  "key12": "5BeZbqeXiBiQLgKUA4jgedqrK842wJvZaCmq3r6iedaiPJe5bUoyfYzkLCcZe2qdSPZogZNTmiUxe8kD2ToJRfae",
  "key13": "3pYmWwS9nw1LeCmjVwegxtrxeFA5tXzFhjVaa1dQgEJ2KMs4QiMwZUsEw2LrDXGP2eLEPidhtwrJsn8UH9MUERsi",
  "key14": "5BeeyZq5PeudEeSaYkDYnWizh4pZjhThV2JaCD5CWcKRRWGwDGTQF6uj37XWb8Z8xJSrKUGP51QfTEzXnZuLiw8G",
  "key15": "3BkgKBgE6F9g5UDTfuNxbsbQ29qK3doHNsxbzuB2qp5mMF5vAH6xoV852vVK7SaJXLAYvqZUSQYRrw4pQFJZuC1F",
  "key16": "2ASw5GRsTu6Dk3BdN3PWoRubsJ43aUaZTCPfYaQh1EnTfG23hULfRRWdf7d2U4JheBwKYARcMnJe62iwa1qFrXvZ",
  "key17": "2CtLJJcCtXFCyRsihP4WpLis2GhL2mzU4Tm4MYDQwkwD6o5ruPfR3RMEz3KJCgCZJX3NiNrzSBiFW5aGFHj1GB3H",
  "key18": "5inzCnZ26qpB94pvvDfQuSSV6MCEXXobpSnv5DFT3RmrUw8m61jmLt9p7Bn7LVrD4meKRPEFjEXpnYLopqSHjafe",
  "key19": "5sWPH8SmULkXRthepxpwTHezuHvLhRXYt65pDJXkgjzTg9PSEoS3LBinJeGzqe525DCdfiYbXuk1MRqMr8Vx2vcN",
  "key20": "2phEhuhefPW3AFfwZcRv9Wy7qQarkh8nURZA3erk7RsNrGhbysw9DQEQfqyG9Eg8R4PPb1XGkSEEeinLw8HcLmGJ",
  "key21": "2oRvAUCMi8M1iagrH7RYub6ZikG38khGqAztwchXnPQUUmCC4QJCpDcFAJh8m1BufUJXp1JNPXcrSXCE17TUTdNq",
  "key22": "HZ13SDHR6yodXSfufCjVXdqWxDsL5SxKbNuG793LRJztTQ29K2MquE1XVkyYErCiqHThZ9g1mk6fjSZ584nfeAq",
  "key23": "5QXcoP1hkswTh7Zy35pQf22kEEtKE2eHZbfPxtBDBoEGUPWNHwTH7Q5tGVBEBTdj4HxSezxYAbXRSEQkp49S3FkQ",
  "key24": "4quYsDuTpjgdiuM1UStMwPptE9AQ9U7BxDC8T1Q5r24AhDzUXbmuDbADZ1SXYovWdw2YFua4vAn6eLGmgx2Hnuiw",
  "key25": "5fFeiarA3D67eUNA1yw8DZWkMMyUByeucUYKM3xancJDYwnvVGjQHcDi3QM8Kg7zFDdDGUAPrSnpS8EnuTabpCf2",
  "key26": "5pz9bNG47vTdsz6durQ3RgjT44Ro1saAyZPiW9AeqphfhcKB2DAt3XMvPqSVNpbL8ADPE8bq9vp2ch8Pz4c7LuPV",
  "key27": "hQYhV1jZGSUMeN9DviN4UEH7u3fPG7dfzFvpaNk2i7gm7u8eFczDEPMhEFEKKSutDVpkPius2iG89q2UxfQ2KCL",
  "key28": "4oqRi2pYh9GvJdFNmds6KWE1wddiFFJwY2NraeCgn4LSwEiUT4fxHykfokRLWnwUUdXkbYhrKB1iXVQNv1j4LWou",
  "key29": "4mb7pSmT7jonMscS1SoJrxzLhS9Stu3MeTqAKEg3HXj1pn1ySJS6d6XQLx5DcpnZ46DXt6YgCmrT3UxCumKDmGFP",
  "key30": "2Z2HuTs3GrVwg5J1NST7X8tiDUnEn5StkbV3nJ442t3RiQQVJfdM6syXuyc9PmPycL2CVDuQtK1a6Nqnws5sHGtB",
  "key31": "222vPPwUL8wyXWJrcCwYJZQGqjBmQTT6RqSY2xkL7C8QKGUXycq9gGhzoEMppkdQ4NePdQw7GmZUXCeLph1Mg1Zj",
  "key32": "pWgAZErGJA1davwv2pcYs59u9uLUbQ2BwoX8hTJGKFbaFaBMczx4D6MTodJTTc5dfkgCTZWzuYzKpJEHShKXoqD",
  "key33": "533PufRNLupfDUeqzeydZhmyWB8CAkPgRNnfCBi2kAsp8JgD7UVFs6kHtV7AbpgCm8aFkUNMzJdUR4NaKkTSuDNS",
  "key34": "4VrHNBp2pe24qEof6vYWp86w5HZoJmHRiYU2fmXWyC8Rz5uxEQ28f3EEZtZ1x8cUxzF42vyZJMkzYc9NLyDzZbHh",
  "key35": "7zzYw6hL3Jsip5wAPDicgrwWU27vLYQpQFH3oewvRQ4mTgNAFXTyHq1SGMEmnentZSeKrnzXVgFKXss8UXuk7wn",
  "key36": "3P9FNhmo8vEkw5sPyQtPDB2ehxPNTrhhvyLKU6Zd1tQQhsdjNbaKzhN3tPd35ZvcqVrFNhTdo6Yb8CEfbqUncn7n",
  "key37": "5KN2ohEym9fgnmVPdXmX7XJ6cXh8gtSNSf6MY3LLy4UgF7uswFqL9mA9t5CimpNQX2SdYChompwvoxXDaH1dPbym",
  "key38": "4RTqEsQM8XBoBCPpWq4k54LHbNdtDsfS1K1iDEjNPUWoyQZZ6QYN1bZp3HAZMGEU39WCudVRWCr1TXecXBpYRjDE"
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
