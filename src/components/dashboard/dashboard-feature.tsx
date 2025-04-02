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
    "4EZqcxmPQna4ApUhB66NPyTBMZxNkd9kwM94hvqCnGfkL3L1aEtKrUzvENKMJWK3veC9xFfcyap38x5dobzK4krH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LGU75zHdDuRPUnXsS9sKRFVr7KQjBRGLD4B3daUvwkAKCwRcemjgCiESyk7mS4Vh5v7ZuXqX21wPDUUxqDmKbMZ",
  "key1": "3SPFZqGdvMf4xZcTctPdsrbc1LeVHsT5wWACYF1FviLXme5idVigArL8yLqWcg7Rhj6rB6EtoH5fbbWx9foTEMkq",
  "key2": "5M5LbtAYPQ6Fs6ZYSanbBR2XhhV9b5eWfZ8qjfDJvygNR4X7K11P2gCWwvB1DsmJHWv5AAjNFWPebXnz97R2frrW",
  "key3": "2ecKqDkxEVE8qrnp3tYV6aDHUzdg2v3aUWEupVXoHx6YE35gSLnVxb74ywmRpvqGFMzysPvtS3gNT9CK3j8ssDCy",
  "key4": "3UHmXs8dH6SZsjS2UfMTLDRgozrhNVkY9T269nBB43C1JtKaWG3jm9HHtCe3iN3jbkLLqPU5FqjyQ36RCCrrKLEf",
  "key5": "4seYnxpeeUDeKi4MtrkGBAFaMJV1pkfVjRXMXxXYNFvzV8g7a5eZVipP7jYZCVDQrEHuT2APfDrCBvKsFJtmVubc",
  "key6": "WVZavrvzdpSo4gr5zYvY2jciGuKmUBZ1mjdS3hPRSXy5BfGByMPnppXdjgHjyJQF2FNPTx9kTMGihfyCQuRsPKC",
  "key7": "5B7tobFdw79QBJjbfkTnvGxnpa6FgEFkeY61nPFz9okYekJQbjxNkWN8ea4oWmMzxckwe1j2orM4X2JiHKXsEzL8",
  "key8": "5YZT49ak5sY8kCrJuyqc312PFUW3WaKCYsK1Y19P5ScZUXFV4x3mfKphD9Uhq5ijB4kto5N4cQZ2bHqB1xb5vbRj",
  "key9": "37vW6PSUz22Sikz9n1R1QDcwWCLdL7eFHhSQnWg1XpHyrHq3TvKwjwhgUUqcWRCceDJ8KqVaUudYXGoDPnoNoa1v",
  "key10": "3DYd211FZYf2gdvWSJVzH13JyGMm3dc2yq1UMph5qWNCYutGGctBVbRmy59viB5TDsq8dwyCKLDHzFa13CVf3xH9",
  "key11": "3peFEvzLcUY1atfvnFFwLE5WwqoyiYqqdFW8j9bE9mLmYRZ7X9NQgyim2kVkjRF18rF1qtdvfAE38zSMuf1Wrs9r",
  "key12": "2TA9WMux3thgthziCx85hShZFkAAspBaGJnks6AsArwPjxX1aga2F1qmXhw7R2Jr9nck8f8QALmVzUHX8epkRdMq",
  "key13": "3WNDX4tWDGigWVBzD5ihxFhWWNupbArNmgESUHdVHEWnY4nMpQ9anYKLH1BodVqXyDyLe5EEJ5KCHR2kPEjb4efp",
  "key14": "3bwUD1xj2tw94NJP2qLzutNfwkyGN1DBNjv1td4UPpU362FFx1qSDLzEErx1hd9ghn6hwgcpY4aRGEsaWUcWxtAL",
  "key15": "2V2GswLK1pZAf493etSMWbjSDf8cP6rRiwaTkeC7yng7a499DXQz1WNixwU4g4mz2YEpewfr4dNEg1DC48F2kEpX",
  "key16": "5Qhs1Zrfy2nKL6zDy1eLHSUDjvGosc7ajHNRmJvNo2cZC5hoipiRR4tn2VdbPoZWNq7ebo91SUXiwqTHDwTop1yQ",
  "key17": "3cGx6o9eSswRm4kJ74jLYAeFp8Xwumwf82Rc573wuGEriD9B23TWR4XSJ8TELZuvTHUadAURJwfUU2amDVmkA9vF",
  "key18": "4DBqDbXReRuPTvcHHLmY2LG3uvANxC7KLPcZZBVkdPAcmNM5izULCkGNWo6CS5Cfn59dn7MMcUcXqDa7WiaDU6t9",
  "key19": "62tpeusZUjQY7ERhhn1YyoJ7Cn6VrDygTw2SHEUxHsJP5D46GyPwzBLo5mpVik4LqRbR5U3GqUnswkGRyVZrSnQj",
  "key20": "4B2mLjZVR5L9TktXSFXEbREc7yuYNcZaq6he8jG2wSNT4XUTamFSLpHDeabhdJMCfFQrugRHgwu8Vew5HzhQUqh3",
  "key21": "3DHZeyqfVEvFgsh72sjk6pP86JajK98iF32AgvfhyFgXSH8sR1Um1bMHyQcA1gLTpz3z2MWfUokWCQ7pAFQ3SSnG",
  "key22": "5LgvyenNfRcwqyDYaLS7AJ6YFVYuDjqd9XN5CkACMv6FdKMUCrk73WarAqQv2AbW9rmGwNgVuQnFrURiEv9oX72h",
  "key23": "bmcsPCwEMdy1P7FnrbTzMqRkCqyUCxPVbcPr7igXinhoasz4dWqAJAGNjPnLJo4wL2CZFmGenGNMHwCugmjqqAh",
  "key24": "4dciobTQy7y16Psb4Ftwjs3oDBJvUJ7bnt7GKbCHi7XqRDfKiM8AnSFdhRVgVvMbMcHfebhh6rQjbwpzWVMRuuhv",
  "key25": "2KxtY3cuqSdoU5YP3VPQnehDmYL8MkeKPBuLW5bDKV7jMzNujTJo8KJPJrZSF7dHSDSUjdxmQf61mKZYgSVs28t9",
  "key26": "65FesjCPeFH64brDEhQwRgAWLaKGwfhic6xKE22SMwtBiU1MRbcP6W23cszeTDpo8csqSVXC1mX8iUPRz7Q21cub",
  "key27": "3qLCuLLgfpMWV4qqWVWHCw31vk7dSX6sSv77M5vFF8bgeqjZ4bpQnCf9LoMECqKRPW4hGjkPiwHt6bukYyVWyK9a",
  "key28": "bL46ednAESCgGVcnwN8iE8fMFTqTs8coxErXCZDMyqoDKxTiUiUDuELHaP3FY7FChe1vEZuvhrAFGUmohfW9g4R",
  "key29": "7vAssJaVJ8VSnmx2TAANt2sJtd2MNQ1WEAoEVWzexYyy9NKXKw6X7gFxZSUuxHQdKnKJwuoX9Zt1TYJLQqePGJN",
  "key30": "P5cVyrebDNzzS4XwQF7BMe5pqd1KB5ZwonU95RJ2iJLgXRRZ4V6kxYQ8ksMpV2DtZtViNn4sdE2Y7kGH7tSi5zc",
  "key31": "3a3wk1TK4oR1CE653UWZAvvZ5z7L22zNdufXPagbySwJGieHVaHjnLs58Bi9yuCkTkrH1oXoCnJDRnfUzu2MmsF7",
  "key32": "CuRTYSPuUbFA4QXJHYEB2hpUN7Awnmecuhkc5LCVXxFWoeQQhKKbp68FKrQXnHG2ZimtZmyjTWf9iyjpA8u6nvb"
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
