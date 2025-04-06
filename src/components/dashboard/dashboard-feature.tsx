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
    "8w9WeLA4UmjFwQkFHgrRuJPAGCerPNdJ8KcT3xe1pkUvJWDznx7TwMEDYpaTAdapYQrCzfVAWp1XFMWZyzt7SvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NK1NRbynwbnQgR5ytnr3YQKdSvMfErwAZHanJx9hB6v6ESJ3VZwaKBWcW32WLmsoC4wjLsjWLpNPPwuxymfQ5eo",
  "key1": "j7aCtWvEx8Qmcak7MA5ng5zqYH4ENgA2iSLtiYm3BSgqu9kAAg2MVjpGDozjzfo3XiJSgxCEFuhQXoxPndgkjT2",
  "key2": "2PnZ7A7dSb8zQveGqwf1uAf9SRSBM4EciAxHbhVFnMRqkfLnPW15rWQvMXZ51bafEy5wL2JCXvM1yVgrJT51bEpB",
  "key3": "2ovgPRXuLj319b5zyj1Y5L5i6xaSveY8vpZh3uXFgYainYShtZ6dGiiXkJ3WFyUSyfzLFHyRZKJL3dpwbQshMHdd",
  "key4": "3vATt9PnskaJ1G68aeJ9Pdn9DRE2WKHuwYZo5674tkDU7dr7WE5asFEaKhKTR9N3CgqVUZnfKf2gps6JKsvMG6TH",
  "key5": "5isJnNnJC35dwVDe7FKiKyp8bCgUMRZxpFwUCQ6BDrRfJWw9tvTQ4B15aTwpvHmt75KrHFxGaaPGNP2vjeaTdMMu",
  "key6": "dTyyLeJnBcJyYVMGckkifa7poJK5cubKogpwrPJwZ3opsCGi3YipDYHt3Q5SRAjRSTUnjMc99BWAp29potnokoj",
  "key7": "4ZPyTwF5Bz8mauqKzkCdHWa7SvHrFqnPGPDVHEJyk95xHKDxDmjCnhudRu4eZPreSKZTSP6QvZt2HwJxEiS5DKCQ",
  "key8": "5VAzPfDoFVrT1iN83aXqLkeRD61ib1qUe9VWyBVEHZiyV8o4c3HLcL1oYTAjZbsA68sV5cox73FSJeGve1qSF2Mr",
  "key9": "tWRf2PyHvttW8CwpuQg1R296emg1u8tHoxfvGawzWMtvzB4R95sbsiEC36HabCp6g4XBfkNi2ZKkGJG73FzJpW6",
  "key10": "5KEgLbG6sV5r35n1cDZtcvTvLhoD5nFNVvw27MTN96c2V1kNp9cuzAzwo8roeamBJAtxroZRz6ouaRbv8yp8LhHY",
  "key11": "2ZjrnaUM413ELuf4AvWDqfc1vpzARhU9Vjv8DV5N4dStUMWWb8sMoxFz4jczXFsUxqLLZ71ycYRGgQtSvHRMstyJ",
  "key12": "5WUNHwvhTX8setJP5qtyKLTj7U2ULNwQJdSGhfJSSdYy7rT7Y29jvVJntAFtVn1owB8ygHn1EhoZkXRNeXAjnN51",
  "key13": "4PZntnbgW6QmXZYYiUFBkUoFTJU2oYUeicF8jmHpHkBE8EoxaYX5pnDv1dJxH9KYQPJwJw1zsYpDndm3m49X2Lym",
  "key14": "4EUDeSBMzxTY5Tf8BRCCNvaEtUGjYQbDekWxqLkB8zH7L1rMsKyDwpAsgmHzE6dgWZgeHE3wJDx8GZZA2t1Ghz1v",
  "key15": "36zxCRzUC94cn3SU3fBt4caC2iXYXbzf3caGo5sJHRz6uzeGaWUADgKF2MmLcQBc2rEY393YFuJi7VwMsG8SrxUQ",
  "key16": "SEtZy1pDW8FgBDeTXN59dH3rYzBGce5sqWRwJVgh6gfkfCux8NBpZ1qL3ixB12pfXpqGrjCPp4ZRiHHryggzd6L",
  "key17": "5nBMaikVSmLsz2nsy43oBQUnT16afjnMyU8Nm61F1FdsFFu8WR8vHfTa32HV21YcqoY8eMQ3NcjuZUYfwsL9tt5s",
  "key18": "4eutJkQv9Ue1CgMkptHUkFBVFx7cKnGyUW3eHaFUtBFzsHhaj5u44YTqDrVu4c8rAryy4sxWbqZyyMaWXmCj5n82",
  "key19": "6731SYbQmzbbYTLJe8QorkkN1kzNUtXBRuSvCYVMv3o9ay7oBLT8iqf2ADq6aMnkVoWKupSvkNTGCMdH9ZTgZpHV",
  "key20": "3kmfbkcqiyCcEbPBdmKBfnLw4pKekhHGat4AxhTG7tJTi9LZhPvDdv4zZrSouUAfk72E7TodyVHmSCvRBqy9iCQ9",
  "key21": "45pMZYko3Dcf6FAeWgmKM7jhSjoh1KaLdJXMkCK7FVhRj7anYNTkNQctDvEZG3gdz1AdKMFVv3QN2FWpXfUemu8a",
  "key22": "3yTq6A8xLeJ8rXCGhqEzNwTTRQedyZwMhWWXYYw8oe1H4LjNrRGySCaDCZ1VDy9M9HhRDKL8kLtUtam4GjHxU4ou",
  "key23": "ZqiaYonBMzc1RLZG8Trt6BKdcQ4xcL14U7RVfFhbmdfKzrXsGT4jCR6KkHrb2VqiaYQHc2TbdsFR7vSwwK1U4cY",
  "key24": "4ziEAMFZLMvfQor1NzMKCd25vYLkyP7L2f1885nxV51zTrBSW21ecmsSefm2r8wTqHtnmGmvdQ7G5BNcgh5Tnzmy",
  "key25": "57Vai42ZimJVRxgbBW8JAu45yDkStiuu6R4WkwXkf8wkncGpSTrq47QjdSJYKAxFLsTBaCkX191o1MtpdfWhYbax",
  "key26": "4VmKPUQLXkssye9MeQnnRE2eSHKJFbeTh1Jkx4nDmrfcTPPTYGsYbwr6RhryV3srKvA2wb3Lk2XpJWNypS5qHRgj",
  "key27": "5YK9ConHMtW54QdrkPvMbncBF5Yzino6o7cUzv1tioXuXGaZY8DaAwPRpiDg9Wcz1o3ejzb8vugMhfcnAQT5vAGJ",
  "key28": "2ZwTSbY1ErZCdatvRNq43GDAAmX7ac7K6nCAXhU34dNxuBqeXX9twff8ascjKXveeRcJi8ktdykwxofJrk1DhcbM",
  "key29": "23RZE2YN7no5FCtPntkxjkiJWnfFArxtboTExr5nwTKAt2vJoMBhM1d6gsdzr9YKkFUtYLHP9meqhqiZqNcP3b3a",
  "key30": "4dKZ1o6VxY5sm1EMwzUNkDeYeP8dxM4x5WqkHvkNCRRQddsLeAeVDVLCy87MnCrUjvdCbdR9XDEVSGeASmno71zr",
  "key31": "rFjrtctspDVmcSW1FTwSVEMF8YEwpNdub4TgWWymJuiy5jXXdH8xo6onohtxpJUfR68R2X1imrczXsQq7aLM11U",
  "key32": "4xFBn3r3CLc1CmCs6JftEt3Dq4drj9R14g2VYZQohyoz3SRACv1Y3MowhWf9ppzrkVzCGzFNuFCmAWCCCzVLErfN",
  "key33": "64HrHVEjuTkA5U8oSXMxd72xWTtgc1qohg7sCEVG7kYop7GRuiYJmtpXPNvieVYZoQ6qAX9akcAS7FhDs862CeCF",
  "key34": "57veLdVxPd7oh8WWrCwZHS4eziAcE7F96mXYok8derRqVBZHKuHFmMWB9Yz6vkniiunJ6jB2YLEuJVsmF27a2fvZ"
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
