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
    "a8PfF9EFA6fX4QmwssrToEpByRT64zPiPcDDDYRtWWRTohWAmftrzUAdvRv6wk8bYYGXTi3orRVFVpU1KhoKQ58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LznCsxksaaW5UaRL9QiArgfGeqNxpvpbYuEwYcQHCYRf8mHHqPk5hyrRDEaGNX8uyUEw8RV1TdPWbwqknsEccRB",
  "key1": "4Kjh8PYjRBGSZ6t8Jie3iyUX695Tq16gXo86MRi1VyDuizVhQH3RS2DLC7aAEhgG7gh7cVQujA8nBvifyEPks7Ty",
  "key2": "368visc1YkXpFDo3Fe4RHs8fo7CQ6si3Eg7xNzJqpQ2McPNzwH4bVhvTXpLzXTEqMzepJbVWnFN4ABeig1FEsX9C",
  "key3": "3PwFYgCKXfuXzY8cnE7pTsEqBawScL6hTaScsPaZSjUj4Fy9Xb6QTkUpUwdbpUiF5S21tWPkpTbaoen2DZkHrzTX",
  "key4": "37QRRY1ot2XtoCRkLBqR8myTMZs86TWGFQ1KKCgQ24CxKSntqTKs6ro9ctjNwJnGMEsZoCb7rpg7qpvvXAz4GYWV",
  "key5": "VWh2vkenQfFhr3fFvbnkSGu9sJk6F4Lhn48rAygVNi3MSTULk3eF7GSPABQDatRTHoYhMLgeeoAtFVMpbo1g9Ab",
  "key6": "iZ13xN8UHdi9jreumfZ8j6299YiqyRhGWdGJzXRhZMN3HHs6FKr5gFiYf2h8GdfkDq2RfUwAj34raeJu2ebjmoJ",
  "key7": "54fm9ugSszq2ZHR8TG1wkTURtNjPkZGkezFKQqMfaoPTF6sApN2hU6MqKaxX7cgdrXvcwubEMeZ1gYjokHv2uHD4",
  "key8": "2vNyJ7sBYujH2MNUfuz1Uodc6db5ZRJksUeb88YCtCBSyBzCzFehLuEpmiS5yQhDLGh3GU8FvcbgsSQ4BG5tbjiV",
  "key9": "2zVmZoqa67d75EYYJ97xEWDAdiEZi9EE4DoTnwTrcGWGk7Aj4nqG1CkqQTxWYgnhvf3Hm1MncbPnop49HCin2LKN",
  "key10": "8Q4Sik95iTENjX9MtuX1reiXUGpmY9icRwGe6YDBkUSgBnXQUmfKL5rdmp3AQm1Q4WY4Euta9YBPNEWDTcXRaKu",
  "key11": "4pa7QpQDEcXLHwhoE3bGQMn6dtGinMeAypDhbUBY1o2hPSQmRf8Q85P81TJHqT58mWbmif4BMqPiPkPHWD1YKx7K",
  "key12": "2VonUKz3vegiejdJzChKeog1rCuBGaDewRJLphqgEhFUY239nV79TseuWqw5jzRaCwMGfQ4FEt95okQRH1tnXb9q",
  "key13": "2tSXB8zrBiCtL2BaSqbQqiHzSTiKwj4zkR8SquaZ7J67anGmCmCwQRxAqad1rYP6bCXLu8b7i1DoPr33Rqo4rfDd",
  "key14": "3fTnKhfgVBoZ7UCev7JKT48bHS7VpXKuCgnxoMgdg3cp8z5o6S5uAjC7ccUMBvi8fEyoNQgVQw8ZQQ6pNxyTfeK6",
  "key15": "4tjheoG9RhHVScWs4dEytQV4ZmHoBmeBtaoXSQjfR7PKM7nfWVhWQYrpfSicKpajkmVpFT383Fiiw3eQ8L5jDv2e",
  "key16": "2ZB2nT5xXctc6yBV4vzDmytWh83h42usdQJyJ6bx9cvtm5E2p5DnWyHsCZcYcmY9v4WKeTpFDtv1MDbpYWsZ1yXU",
  "key17": "JyEvPC7QSDDWvcSJesPWK1MTUc8F8WJ2CcrEyfmJN3m21yWZptwvULA1Xwq9xfFHXH9KhVQHj14iUHtmz3v5V6j",
  "key18": "8R8Msh7QWm1mZiook8obbVEaAqFqcX17BMgmpw7UpJoixewcKnQJZ41Xsua2Bzd3rftB2bQhupSZn5cED3doS9p",
  "key19": "2HtpL5VZL8NLGjiBHBw5Lb97u4y8wZnBEeDztBjXMkTQQt8MBdPEr6tZzsfDnVboupDw3ymmJY2GG7SLpbpY5MfS",
  "key20": "3JBzeyaD5rChkL2brhQ53Cs1dh4pjTwWZjP1rEmvRaMY2fr8Fa9h1aRWuVafyEAFAkBAKgkjNqAMQftyHm85pBrr",
  "key21": "5QHRPspfxYdcoyCG11qpmCgP7tWKGGS85j6n87J9WmnQeWBqruqQ24RW5qhmsbGFfCdN1fprnwo6EzVu4wSiwUvc",
  "key22": "2sgSbgF3BR5SvY43jMKL35aLC2pTh2bW7xEZaoUp9uTQwZZACqTPBy9RMyUUrRc7uxzmue8rCj3HSqwLkmj6cdoj",
  "key23": "3HvicHFGhoMgRUJYXUe1GvfBxdhX8kmWC93ApfTT8PGkAWzPgYLz6G5KptM88ScAsydPXGJpVopTemU4LhT3vF5N",
  "key24": "47i4PuPHdgaKbJ5dQApyCKMf7dXMpkpPw63DouSCyyGPgq91q9UduSgQcyzSWNoCZQzVfqJK2FwRahbocxRsJue1",
  "key25": "3Vc81f5FTDcaWmLYSHfA65DShfTdqba8R3MZmYQXtJ2TLmGCBrdYRbj2KCPHcj43WWkszqmg8HC2wKNEiQEpRc8U",
  "key26": "313DQ8wQcqjz5C6LrPNtEkuTJ3aC5CM1rpAQJfTyUkpbjBwdTrrkVAgjpg1LUREDH2CnveL6chjss9CtN4GZVhnR",
  "key27": "3gcyEvqistjTbkULCXPPDxhJowVHAQ1xmMrJtSVq43PVwFQ8oUQtg3wVSxJfcYtXpt4XLJ5vai3ZLd7N1qStZmXc",
  "key28": "3Vv4U5eLV2chzTgGWRY1NsvDtQMwCKHXwCPL5DhYncKjbBKK1my3opZRv7wxsMfyFskn4qK48JJG7xzotFSKD4Vp",
  "key29": "4ybdE1uzyuWx4D4khLqzbDHTRMnkcmLw9vaGkU51DN86DQBByXtfTJdvLKPbCoMj1M2Xpv6uuhEh4VmMZu4kNsnj",
  "key30": "maAYUeYeXWxRNNtKvezbw8WkChgmcs12rxmAzkTEhQ3NRmKT1oJZx8uzNTD7sKgFtVc31ZLSFoFnBhHK4w5VSUm",
  "key31": "1nTGFCbZaC9ASdPZLiaUKbVgWYozChyCgDCN1rNMpkcW6TgSyd6mUQtrf7o8hTkNcSazNwhGitscdfnKnfHHJ82",
  "key32": "3TWcjeL2XAfwfyR2nrVYYtdQcQ5N2NQXQYUCqntT5HweVdbYVNM68C8zJyf22A6idwsT8DUgyhb3sWhcW8Xd18QC",
  "key33": "5KLF13XCBpySaEc3oPYPT1XFBbs9H96mpinqj5zKys78ZGZiQtFGPkbHwY9kL5nkVucuEG3iNJ7pW9exmZEbDWaF",
  "key34": "2JJEcW6cBT4LYV6Zu1nPboP6n7n3zrwkBuRPQA6UbC7zzwvw9LEVYTCTFzLpHELZMJAh7R33nPPKhU2To2BJHKQg",
  "key35": "56sT6UYHiT7tTUzczJv2fnMr6q1HgAcqRziTnoeyrgmYajDSxT9fzUmHVV3Nc3mMzosAbWuajuJNENCmy75pQ7XX",
  "key36": "37g5xjUPbPEtxZNEbnoVXbcRGYcSh6BwoBHwy4ttM5jtE8u2LYe1YccgbHAoNarRVahNNf5MDScEzDwoJxevuxLS",
  "key37": "5fsP4AK8jtM3b4oxaAaLXVpeRcuRtE66mMsrvMEhHXpYAZPtq44rAmKSzxii8sH5j18TdkivWD6cRvHLsxK9nSFC",
  "key38": "rpmZWrNX4DGk4Ehw3bM6nRUw4Sgdskv1SNtbyAkSe8ZGfCjTARPwsCR6suZP88Kx7xHwN4UZNCiWAMkjphiwbn3",
  "key39": "2mSawTbD2a2wSM2xtj1HAajPgP2go2XDGJcu9gHQRH3aALbqjwrS6pgwBJyq6gVo5MZ4jUSWRV9UrJcMeY1kZ8qb",
  "key40": "3ZEUwYdJC2XKc5Uo9wYrBqMyiYdZdDr5DTweT7B12vF2ARb1etNCKwr5oBtsRzdrUMC6UPN6z8bTqGWCsQkqhRQY",
  "key41": "2tRWur4CFRS7CbX82F5VjgL2dK8BSL8SxiPi7qFEmQZXUCzn8yxbrvZyR69ZKn6qVjLHdoTGVh7r3ZfKNo9VS3C5",
  "key42": "2EmY5EPWbMhdNVj8bQpqDDEsnZJsS4AUWoDmUpiRQsEWjau2as5F457UmQbm5kQyzmsbvFGMEyPU5Mvq57BihkiV",
  "key43": "TwG2NRfmX7Ne6SqHsVC7tCxiLYW1CL4BsRtyBaZLzc615SG9EevqARJsSfVYnz6KRyekWPbNbRggMbkuEa95krS",
  "key44": "4YZbdn354oPNEZ64CBH3NQJG9n328mg3fj8TN3wvaxJcUFWCVtp8BkhGE2ZK76Jh3osZa4orphkb57WzbCTNKQag"
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
