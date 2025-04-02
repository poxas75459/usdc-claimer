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
    "fUXmkwEDBuoRKVYikuu3yDPaJ8ELfberqDyWfNHEW1w3i2oFhoQkvgTGhoFRjNXyLXJ3JDTRrQ52C7Ejz5UDnbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvCyaKkNpPbdidjrTgBCszomLMp657JV1xXmyqj21Exhfsx1scsBJhx9vD1HaeSVkmpo65gecZg91GcFffh92pu",
  "key1": "W9tLf5Vijc85tLMEqjXY2MRgSCNx9EEFEKawPw6LhwCTPynzDDdLYrVDVdPCc55S3g4pepkxobNuuMrJ9bqgY34",
  "key2": "MGbpda278iswu32GSFZCGypaAD6xEhTf2EWHBP7z5TyYmbyHtvCwYGLLvZzwvXxDKb1w4JEcWHjGCURNshE4DkY",
  "key3": "3n39CsHY8gn88z6BWGXGrQnvDrLsaD8iDtx8VpQJsqw23pL5pYfqZ3z1SwkBfQZnVK2VcJtiXPpdiCiobPwPe1FC",
  "key4": "ijngvcMYXfVKA4NZ5Cr5EDsLsAJ9ftw4bc4cfi2xGyMfHtKa7rxbrrNj6dewV5BgLnXw181JnZ4b44tXrWVhHJW",
  "key5": "r9PtwEpDsANRBivwNwQ6JWLGsAQDSQYpYhzMEMW7eENt2vMfXKM8Kxk6qLnUbQRA8EvGRo8de3JcbTj5fLmnn8E",
  "key6": "4qjZevK6pUPUqXTzkoRj7fh99NEBT8eEAYgwLoGJjBEhKmhztUHm5VTcWcUcNZCi4eqnB4Us8FXVeQRWh9dqdtpu",
  "key7": "2UiAnq8dC7bCA3UiRXAkc83fySD4cmf968T7s69p4ULg7RyLnerBP9yM9iCKuckMoeQBYHdQcuY1Pzups6MhcGn3",
  "key8": "3WRa5ivC1iKupqLqFPNuuEKMfKa4fmSrYBCoNrGPmn2YdwTrNRoaLd62jJZYzdRcbLqoidd7exUPKDmSKxcfopX9",
  "key9": "2BLjBYkPipfpF7fmW9vaJvcqcevNrdCHA2zqsaJzHSo64NkZ9383a4AMNY8qvXxsFk9uu6nFKTo8HEQDtyeLzp2o",
  "key10": "4nRxGq84LZS9v93hmpeYMpUeUnJZxayXQpb6Ua3TagPp95BoJH43hywo3dKPBwXACxhKDsMZMqB9ckqkMctnPcdt",
  "key11": "2nN5E1cz6NzxZEuoYF48W1kikAFJFR7ukyxmxeRx2Voqydbu5HpQ9KGMG1fEBRxZwYgnvLHF2vwdszz5t4bnEWfy",
  "key12": "4nfvhWn8HPaG11JxNrLC8Zr4n4BS1CsjvGrkT66VSkNrg4kqVJFzbPJkbxpn85JSqy7Fu7NZdBmaR9VPxiXCthrs",
  "key13": "3Mxi1vR8ro58bqZW98VuMEPrt1ykfFVwwVdQK55tKSbE8Gm2mG4N9j6NQAZCAJE2ob4iVD2oXmbzUdCdk4pbK7ds",
  "key14": "3TFweWCkE4VNcGhJ5Lo2YuMeMDwcMSycXkrssFtivB52S21esPPwnTb8FsQfRiXMY3iy6uF9TLPBMAEbsEq9MFfY",
  "key15": "38KNZrnx3AJ3Nf825TRbuTzYMhYmc8MzQypAEqrcHFLZGUzwqHnAwSQmQDcgBZRu15VATgAN9ZFTk2c3zjdcK1k8",
  "key16": "2bhJV2PWceVEW9oaByh6mpnkEqwtYR1gWrMn3eUGmDViubvSBimhJt2Xfkmz2QFXtDCbRdLYvT4dVcrBiPhDKMqQ",
  "key17": "erYyHrd34yfksbJMyzxiK1NdY5jcaBc1dydXPCcZoW4jMbJzc9HLefu3jqU3BWfpGXADvyGnttTjUhwMW4JDzQk",
  "key18": "3R1LXJL5cbKfhUzLQepBv5viwxfPL9yVH7pGEF9x4iufgyBKKXDWCxDxeMWmMcx9ujohLx2p5WcLT6WAAVWq1brd",
  "key19": "5CUAfrpW9dYcKnzkjGihS6kWc6a2zYho5DU6Kc3cXXvaUKiVMwPF9sTJEoRzgU8US4UnScN1LEVmEBKKFzBNmuxy",
  "key20": "3RZNKdv6F9oP9eLZjkxKMnww3BZKsr2G5UTnDTFiTdFxmZ9tHnMa15BcRCcQ95eZSugguYZsa9TcFUTX8v81J4q1",
  "key21": "648SnpLb9cWN2YtB3PBFXMhZLMS3KDvKYbHwsnkR8LUoJ5NfUGjohGfwqmUcaeduCFR6tvFxuf8ruGXzayGH8qwy",
  "key22": "3Axjtk9HcLZUBUbRDuFB7GebLU37qQjt67CkAk8B39HWD9BM9TdCACa4MWX3zjvckHkQ9SkqskLyC7nUugv3Cjfo",
  "key23": "4RAqgAQeq1jE7RZJD8XRv6w85SSSdf2eRDaCUHT57RUBqGeh9Kh99GcL3ANQf2aDibpzaKSuEnTwCoTtHRyqiERy",
  "key24": "4ktz4QcsFUtksL93huY7hgbkqfmzFjNheA99GDK93xgY9fCmSe81ykGZUB3Sz4YurEEEpJiFq2ahtqdTq8kanrxm",
  "key25": "37hxwcns6W7FCau988mfH3b6nPhQzr64oDdAKMWptJn8VjhipEhdmvXr9QeQHnADBD85HkSFQv4u447tFMUyGCcy",
  "key26": "2toUSKBhuBDMLTpfwukEwEcuRcoQCSFrThLUNHcserYyMRP5jPK3uVaJvUhySJVtnhMvQWpPjaApfWtZzTSKaJKm",
  "key27": "3xGnoes1wBoXG2Tu4vsTrw3eHZ1ttsmfjAyu22wf3foh397v5HZmFnHnrSY5gZcDLr4jb9fdtrnhbwbZmcKDv26t",
  "key28": "5zvtA67nHCspBKrAjHz7ez1SSbm51V6iQ9g8HngTY85YFpWvdqRFVE7XqdQporgrHH3RYTosSccTZT8myW6poLSD",
  "key29": "dob7eKV3u2U4tBGum3EiWkiPBSvSFwb5XmvTTjRyb3pi1kXAPBTrA9KuRFzXnFJ7xLcSaYF8b7LXoUJ29fFQJmW",
  "key30": "tQEzdEHT2Fwpz9QvoLFLN1fknnFR14pUkuAMsuurcyCo2TkQ5ocLkZwPDkUzsXLkjNZ8WhEaS2yxpyHKQLzGhwf",
  "key31": "voVKwQxDVPQawD4TZa7z8BKBWWGjCdNLGSQZ2W9caKyXC9eUSPfM9zEUvSPNig7DTnB1BLPwVuLNsWw3phm6E4n",
  "key32": "uBzsq1YetwrBuTqiTWEd82SwDbrSGNJ8RX2V3KuaMA1h48yGky64NYE4Ju6w1gJFxrp66uquLFnBBhFa4gyFCiw",
  "key33": "2dELuJNWdHseZaHhitcEnHzxRmnVNzqAfgyrtyWuXC9fV7HEm2rzDdFzWSTpnmvLoCvSruytXpWxKkMkrMwJW7ru",
  "key34": "5e67AeboZs9bXRMYUsUnAtZig8CaQAyARkgWSXNWSMYxra5PC3WzDrmuSfT9ZdpWDFg5WcTPvjqr4bnFJWXUKxAJ",
  "key35": "48Nh97qkQCEkNaJY3aQVEKz4DedKwRHwxTsEEdtuSi9C75JVcvkMJgGzVHzQcxTCAeTjbUbks59pwpZLKGKiqWnh",
  "key36": "5Y6V2EPB6yKvA3o3BsQ3oS1A2f8Gz2DzAqe5dGKHmtt92vhTa74pQ7BQzhxGRuTTBo76muEeX5hmKRDmac46TVBS",
  "key37": "4QQKRmwmmREM1LLUauQ7Z9QQS9hTdGPWHZcdCn33o6ScqkdRWUkieo7fddCH39uSQ9JjpU6LVxLUSXvLDBb5qABd",
  "key38": "3GHSiA2fLkSpJihvH7eyni9znH1okNzDnYRJaqNpLV7RSxgLds4MAqhDWGMTBZRUSAaRGv78PeWtzdN9SCib87Uz",
  "key39": "PWvPfTUAYzi512AYnUk2Y8d2oNbHKmQiDdUoDDNJnRfTJiQqbga4YxTSgQdJF8sLJzfJh4qXK4pmzMzTf3mAUYC",
  "key40": "PrvMCRamEisdaG7PQeGVqiiADTUfUcqu2s57AfmbaiWjx2dXH1GYSEpsUB4FxwuKat9LdDVgaizLXgsRQ34NkfA",
  "key41": "3okt3oH9P4FHL9LyPy99CJ8285qZbAEz1se459HrzyErs76UiDQyJ3pPKdjUa4S1bZVAySKHsRZFy1DkMEj5eJpp",
  "key42": "5Dhn5ribKpAxJ7tcu3S1pzHTXBG9VXN5Vym4X6gAa6YDRP54D45WLZZdutbKZDnBGfJAyrnsf8veVnewN6cS8ib7"
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
