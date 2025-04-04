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
    "56DSqU2712taZXLqUXWpkTXeaNo8K6m6FZjEaLgJbwsL6jMKugiNNvFuifSU3hDzZEcApfhAcrk1ZjJdTnn1ss1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjLHSyzSW5uo3fQxf2J56WT6tL3JBq3aV6VSAvdCXzVzNPeMsAmAA4s1BA3Q9kA1SEMoPZa4kGsDSiK8xesQq8u",
  "key1": "m2gTzjwboEpaocrsJxvQmvesXrF8HPuA5N8e1R7CnkNCmKLoTMCHVuRcyP7DX1EyMhyueKaueo1WEBTgmiKbipL",
  "key2": "2La9ts1Ti5JEsoQKWeUZaotj1X7QRyTNq9YcYRyzKvJSEs6RmphnJphRqz4D3NY87ybenC3HwVDaFG35KDcsunn2",
  "key3": "2ihK9LwDX252kztwxHnoUuqvkGZfzJB6eWcVPjpQkqszorL6LD1or3wRNdRhBRGFxrC7PSBtkCjtQfaHeQ2UVhxd",
  "key4": "TRCh8gaBYiAvE9ud4URpY26E3wMHZs5sh1TuzHid3X4FnjyV9GJV4cWgwZTRmoDz85wr8TqeHB5pRLaiy8jkcos",
  "key5": "2mARRPoLqUr3x77e2LbwazzBkXCiLBArPgqmUrrrVDr1uJjLcbxSS1V9Wa9nxxWvEDncwzks7fgqT8wedybuwszg",
  "key6": "3uGmGNsj6yFUHtsRK3T74rtDGaWgLWnxb3SZk289JF6xdPypUdSiatSofdBxVt5TB2ddiUcNZTmjYd4k3TsWFa7n",
  "key7": "4QUnowu8E9CbiHEEPNeSYQxYTinskH7szwLbjCxc9GwP6fTYSYv5HwmZZ5f1ugd7NuYZPKHpwtdCjrGG2QeaT6Nr",
  "key8": "2ngDjLr39hX8gmxkCaweiKehDv6jFQzQCA1yyFe2Mdy8Xm6JZz12VH3aBAguBMKS9jqifgkzXFhdRdu4Ln8S93eM",
  "key9": "4Q6LZ4Wvx78FjZp9bAC74zDyCv85iiYvgTa9HFKt7MPF9EGBu3kPwqt8dh26iYRbojVAW2trgVEhcWgzrKAcLNBA",
  "key10": "DPmA4N35KoMhvCe6NmF61frbZSY9KBNHqLkwLoozWHDimVm3XegkgeAydU1dp9UKrue4jDZKfVQRKscXEm57pzN",
  "key11": "3p4ZxYPjuvXC6x9bVGRsJ1sjUp648BJ9YZK4irtdV5r7uw2f5JbtBot892aP3Zic8k2k9VXur1sxqYD2peWjqWyT",
  "key12": "29XsLMq1UrRJnrmNQam2fbVoop1F6oDwuq89aYH9gh6Qt3iL7NNdToxYApMtggyDuagUQvhGYKNxByiZcdPtfzYm",
  "key13": "4gJf1RyTxnF5FPdcukNynRKBWzdrMKe1JKxyjB9XbrdGYoJNGhoAmoTNTGSgJhM3XYZStMERfsaAe21D3nVA9YhH",
  "key14": "5tvmGVwhUNDn8NidHapgp3CSn1CwNkdEaVKenskaDMeETuGKeKYV4jjnuY6ekou2rfcGjQNKGjqU1gC8d91aAmMu",
  "key15": "4GQHUyzu96ek5L3yguQFCMme1rZFJwU6he47oPaj6SnGWnfVzBtz67EbtGsW7TbjxRAGGjg5mzYitwqNmjRqcK53",
  "key16": "5txRzRZ7kQrX1mqxTQKcAomz2mEf2WuFGHDsVzyC7Yz412g2KUWHGThaR61nMfMEhdjDjfkhvFzSRFZqhjnMmk9W",
  "key17": "2JPw5UVjTwEFNCxNtavrABMTTfCCHRNhra42dVSEZjkMeFuSAsem941ZJHuz9HA8QYpJwmbQx4CmvrBrmWFLfzjX",
  "key18": "4XKzEQUAcTEGiNEdPMDx3xaWYgfezHSpLdDqYQamY1m8pN2Z3YVjmT2CM71ftsyw9hxKAkA3sMyeUWzvN7SzNZ8e",
  "key19": "4VnJvgJjKTfARKBodV2LrikJ3fJfQ6UATzzFE99bb1qdbhV2YThvxtwW5w9FqXXg8MQ64Bsj5WbEBXXW7GShF4vm",
  "key20": "4V9Fm6zU3nMoPWZfGmEAp4bbdXbRkduUezsNwdh38JnDwfwE9ywj8ezNuF4GcmL7qxDGeYf9ft9NGd9zs13zptPk",
  "key21": "4P5qAnxFarUqCuwUMbAw4TGGe29m47Eh5fk74HU1Bb5gSNG6stVfaSvs8kZ3gvi2e3HPGGDtXatxSAEeuP6NhXSs",
  "key22": "CdxpdWr2iPes3diCSjrg6tWgwN4VnfnKU69CcS7zDW2fxpVLQR9y7i4vmtLgxArzRibn5TLLQEskDxyMknJCo9s",
  "key23": "z4YtEjs1o92JBAkpUc2CRBuw69FewbP6ReSJSUJ1FWBnzkcV6cSu63xK61nr4KMzwXmKWegLfn8hNYKpAu8S26W",
  "key24": "kyuLcU8nC1G2Euwkv53gSnFVALt5Fvjo7GqwkUGBJqaw9Mv7e52AZ2J8T8rmp2AECYmSfF6uH5XRcGargXUYdLw",
  "key25": "qCow4iLyT8EmdcMVRARHfbVoqamUJwZSfKAURrSeR64RdsYUyfMsjUmNfRQUphuBX9MDryfTYitn6v3hNqihzhN",
  "key26": "bwPwjNRYqXhzaV5zACYgT8eqQm6vqj9SwMfdCdPCWKrqCQVgqfqC8px5AuHTEzAkKRs34MPbBDZsxXwFA11egBA",
  "key27": "3fhNzGiXNKSXHmr1Tw9Qf8KYXxHRodzw5Tpqua2P5DNQaBnDUnXdFXPinMU5AZeQ8q3aooBLFpfWU2tPWqejFkKZ",
  "key28": "46YwNuVuwTYeJyLrzxvxo1Pcy4bcMH8kZsGeVBJ24xQcyLxnQNJhAksGAzcmMZ3wnsaomziYCJGHeHyvuo6kEAkW",
  "key29": "2SnADzcFbLDkm8QVWSt1MWVuMduUKG6bk2783ERRFyghCtUBop3X1k2mg53vGZBmcVBCm6nVW8KDbdrewn9T2JD3",
  "key30": "3bx6TogsdJoWHaDjmcbjaZqwryLkZEg9VR6TMXReDsE29FD9eDAELojfKmCBwoA44XH599UYCm8E45cTGu3S4qQq",
  "key31": "2DDyV1iJfcUPMVQBe5NkdqEiPU9ec16WvnQ4F6kcix96M3gfqhJzKgutuCrbVL1pEQoFxEk7NkBKXkfZw61ZSmkU",
  "key32": "4ZpPivzTYgzVbDzTs4Sy6qeuyjQfKmKFtYkzP1gW5Hq8B2Tc1UtxzsQbqAByLPQ2DY5yxbxaqSNJo4nhzHrw6Z3C",
  "key33": "35sC9AvY2eENmMY3c4mJVkSYAZF9pJrz3Qou6Nq9Fd9hi7KEwwMQhMdUCJ65HKJvMk26QdUZGCpBd33AmNtxWn79",
  "key34": "3Fubf8LB3HwF5Njxu9CgZgbskxQmSpNSnLJVYQLwouUnKj3zhdgzSbuLuaKYWQTaSftgz7QsrEnJjzW6aCfPx372"
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
