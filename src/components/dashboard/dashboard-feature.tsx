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
    "4dPShP8AjKTWVevMZfas2HyidVmgLuevy3S6LaRsQrA3Bw9G8q6nZp3HiJCH8ex7NKzmqscx7Zc6qaF7DCUEro2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RkcPuqHGrVVDf1fThGsQkxEZ7J3KHygF8cn4Yj4WCEDwcibFYxBXG6YwwJFUoKLcmcaX66FMF2DJQ8UkKkkSbq",
  "key1": "5Ez8QeCDRhXfq98gewaSrBgcv4Wuobi9ZaHnDEyJHENQz2Tcjfb3RXyK9Fnmuwr2cak3wyVVNKZaFLsvev6JvQYf",
  "key2": "4SviGLApsztmYJGCBP8w2SLnxKtmduFtKfHFeC1mf5xkM8HBzyM1rzyGMHfwhv9KRoW22ZobnWpFBz8oSMngsw7T",
  "key3": "5HWD5QECFAMShiQ2FDKECv6YCrydadvnvvFC9M39SHUBPat9AuEFTshB8sgbM832PoUjC2CTE7KZh4QHrdABszoa",
  "key4": "41oMGegSo9J78v9LmGjsbpNxBxRNi4aG46eJceRdMaBKDgXpohBpbnhvpPyGFsH48bJDxowCuTSoe7fHTLoko9T",
  "key5": "4VFr8esjwppt2LJVkpWuctv9HPphoDZ7FEssWbwQ7pbTD2de2kZpMjtVMzQpesvVP9UzgiuoTPM3YsDUgFeeJgrv",
  "key6": "646AemH96VezePwTihAoUVw4hyYphZK72nsjLenY5PF77pRmVS98LxZBwpSTkBHWa1dNdYVEj5C4dL7znPC6Dqfu",
  "key7": "5HfmSSWAYWYQvuXGaj2jURxGSHzAGhdbDWRUypF1VeG3wD4SwXM52T5A31U1HzBFfmKTiiijDCdmBHGmxRXWL96k",
  "key8": "4gLKcGcFjuWYrZsPWR1qzEQbJ4oxY3fT91gmfizSCaGUvDb6eQ1iqUGSU5fPCCuR3CtSgToedReM35xcAdG25dsE",
  "key9": "4FxitG5jW8EVaWpkgeKrRDZsK7kbTGeHMsj8uEiBEzPU6DFiWqvcfRMKWshQZESh87BF1YYDbfnbyTJGNgxUcjE2",
  "key10": "48CPBqY7rn6e4y9GfoL1JYhaPrAZDtFX6mjcapZCLdUFQ3ZfSWJGqEc4iwtsNqwz8o3wntPUgD3jV7eoj1EqbhzC",
  "key11": "5mifMqgkTvudgb1hYDHiLYNbVrQ179wyzgSybCQSy3dYhDW9eacwmKUtTohgyDGqJ9QyBhmrEkBjsuAUmsChXjEv",
  "key12": "o3EYkaR6ZM6VXSQ3URqkupbc7wCihE8R12ZYwSyceSbqvuSJJ6fsUn3omSfBC2LsDbmGKVFdVDcHRLhBmPftq5F",
  "key13": "QqXx2fjshAUxBGwKNmHNRHGPHK2vDLcRgPYrbfCL7uo2VS8D2JTEW72NzhQnBtwGfyv2eA6q4q7aZwqL3aB2V9s",
  "key14": "342zPU3PJCq7g5fNy9HV2n8RqR6ATHAnXWLrXDWAvV7CKCBrSX3vTAxzob7QXtD8pdewka7vBpwGtVTaNn6AGP2x",
  "key15": "3wE4fw4T3T3YatCBFC2aheKJs2NfVhzdwRCxeAHRDzCnMrRHhUdn5E3cLaQEmicz7tXaPED2FtmtR5QptyWcwkUi",
  "key16": "32QLfD6wARhiD1EWngYXoPoyyK7GfgZJEh7rSJxWjPeoRB1JJip69pSaVZDwqKz8Z5VG5WDU9dDqZToBXkLNwUH4",
  "key17": "3yvXf5WGvq97oh3vFXiNzoHUrXEzacUctCH9iHQ5k1tENhWsHccRRG1xZvinY7Vu9xDLSuo4sA3AXayZE75JGyFU",
  "key18": "37fHJwcJq3X2NouXBRkrWuJ6kCGZXqYLFGLScQ7cYaYqnMDRc4NpyxoCPtfkUe8AE2XQxJWkgeiwUDmpgE45Pzns",
  "key19": "3HHUb9qg2BeW1kG6BfJtourLr2YqiqCBFnfFKdUyvDUUGzT5SFbLhawhogM4mDChTbENj3qW7NPjm13LU9zQ3tTr",
  "key20": "3QrwqvGKur7XSgh6WMETRzFLDDB37LTBj3tKHeVbyafptLVqzUUyFPPSG4NLxjB1Z9j8yovdkBazvyGduxVkoERK",
  "key21": "4p9CoCWXaeVjFQtg22mLjo2GYbyKgXG1PL2zs47rFAV76Nz1gcBWddBJ54qhrPV4Pv313iEqMPGfFUPUL8Uxfwwx",
  "key22": "5M3rNnGQ6uzZRJXXpqXtYpSFZowPR6vpAZ3DW3kReBbD82K8WVktfAXKRw9AQYuEdZYzxgi6iokbkPV6coZqWdfL",
  "key23": "5cJMXJiGednemRhN6CptzZLt6MX9HKviCmhSakmA9iHWj6QKCkXjDtLEp3pUbTUpTXNhWmD9zzf2FuMDGEFqbRCk",
  "key24": "2ucgjkJpnCmJT8DLuBGi5fHHpk3sXgQdtykE7C69ZDZFYsmzCvCYQeske49jgtuDk8tUMeoMqMpvhjzqDkAPPzhS",
  "key25": "3jQmXjcD1DNEhyALUhTE8x37R4tDsanD45kMoEF2RRWX6xni9monvgkHPeMPh9r3BsfpieKH45mNLFg3Q69B84A4",
  "key26": "2CYyf2NXUC82gFmqqxr4sgHs4rzA1UZSecf6YzgEHNiRwqoaZohyJ43eDb8opYb4U6Zk9iVxKED4AyFC9KvrP7H3",
  "key27": "ficxyMwUzb1gYyz4rwu2j7WiSyofzAgM52pKLSqDay68TofHYD8kQDfHPnNiqoDNhWd8dnzFLMCEcNioKvVwPRR",
  "key28": "3o3WRrxxsxjcEjBV93mz1ED3pMvNhbaJdCbHFJUDmoqqgRqmhzw5y2nqmnRcRGdiodrwaoMDT3ZVdUUp3iPP2rpv",
  "key29": "4MQqUSbCQHTHRvH78eENCpaD3nRuXDQup4DKwda6wQb2pjswERgmWh8CMTMG7qw5xcqG3Ud99vpzJezYfURLMJNJ"
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
