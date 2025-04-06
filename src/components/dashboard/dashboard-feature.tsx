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
    "4aAE2KJBUZmwnSs5WpjvupZy3JkB2JTVQheu4U3QwkNUTRh9XdHCXn5WvcJ63K6Q2vAFgKsybqrwtUkMK6dFRvbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fB5Qm85F6YSKcvqwxZGKUF7JggeVvvMbw6gUZkYsovXuqFRfsCZ5p76H1CpcBomcX4EwD2cD1jWqhbuzjfPusV",
  "key1": "5mmbVkPHm7i25K66zfGFHJg8PxskLgva5YDWyATbfgouA967Za84FpiVX7vCjtFcAuo9UuJTbMe5tR6ciA7dffjv",
  "key2": "3fQSL3yzLqo49EvbfZVY86isBKxvta3hBjZTGW15YS1SJgDCT1arCmVuQYvbTZ4VyogSnMU2wHEMsRFMRRVpAiri",
  "key3": "28kTEF9ETxpFV2b3Cn1wp6MTWmCBUsshT8GPR4bUGTd2NoZBaExhwpWuQabh6pmK13BTKP7Y5CmKqAVbLBiaXdY2",
  "key4": "5FV3RBRZSoxbyjocrc5xr3YiD6MEvge1J48an9W7Uw4UwuhmPJyzb9T59JeRbNYvJFJcxLzoP1hXu6BB92aRjTzt",
  "key5": "4MsUV4izFjdu4jZ7wEnnmj2YN6TM9nNVKbPfwnjQKXEsWMMWq27zmSwfafSaaHuGihhEiiW1sb3EoPzesMBjaBrp",
  "key6": "5hcWbKjaTNtFJBwNgxJWcRhukJiGYhqNt7Cnvkk7Nzk5pzwtq9Hq4CeV54s12AcQQYLwDvcHirA3sSgYbx97PsL7",
  "key7": "2HxZZSLs7ZBy6VhrsmesKN8SwxFsu7z9yAZWTnraTbiL1KWJqobC4EHMoT2wEpChnCq7FWa8KVD3eTaF3xfz47c5",
  "key8": "5CzHajceVUFTUryNTvZTvqTFjoDBoHhaFqgVnsAq45Kyy3Mpvir7Ujg9EXCRTyFTaTrkxHcrVzth7Q2MxsGoG22H",
  "key9": "5whXXNmdm9HKRQL5UP76ymi4cJGJ72s3kWdca6jNYgVE2iWKxrcuJQAwNjPFYBVmFGK9YF2xeQjbwensfkkqymX7",
  "key10": "5DedXdFRkkBp6FN9Tk16zCp9whY29gxucuwtndJgs5ikPzt4rXC6YwJg1uibWp5Rggrc5MVcaY6u1pqbH4fHa3R5",
  "key11": "5kjmep2fbNxQstsS7fMPNk35hFazJDHGC1waKrbRs843kjPNsLA6vk3etksWe95pjzB9T9ttgghkz5kLnFaMNBbY",
  "key12": "4MXW9xa1WJ6hiEddork2ySGW4EgUG5XeUMpsaaWLr1dW1Max6ARLraHh49E4EuaEkaM6zqtQweGbYpXzdchH9zrj",
  "key13": "34rhq3Dqags8uh5MDEmkpPMGMnTXepN6vjTUrG4to6LDifnssFeFnoHp8kcBBy6mabrEKpBfzWRph7anRvhStBos",
  "key14": "r85R2rQADKbB5iuNeK6DKb5ZhxsAKNvszdJDYKMDbHYsJyhJgtCSmrXztK6e9u1rCrsoS28fzQzSfYjpwcxp8rN",
  "key15": "2QoMY5qm7mNTSmBJMro3E4RtxkHnRxDfgDXUheNLuqLtxpZyXFQcJ69CfJxjuSA8JHvXa5ksZxXSM7jZ2riLxmoN",
  "key16": "wiPNd8KPFM5g9VhVFQuWt8qcxp4e96aJ7CipsQVz5tmDnw1MbnDKqEFKEK7CaDDuNFsEqVPDjA11Nkf7yUdrzuB",
  "key17": "3iL78vFbAhjrNqwJ7RxuQ7Lm47Kp93aWiLyF2vyrgfkUYga3TpgmZ7PHEznN8d4xyuH8FUHJAJmtB99CgxhSLKGv",
  "key18": "4SCWp8Fg2gihxQhDoiCrYe6guGVFpMSunTYEy9bNEAJDq345SpzAMXWJDfnsNJFum7iB2XPawoSMYY8KcwnfZE8H",
  "key19": "596FkMCmDhiqpVmAqqqVFQKedbonidHfWpg7s8dTmb2YM9ZPRD7Jb7v9k1J9hUtjY5ZtT1LuE1dSp9E28WF7qqYV",
  "key20": "3EwndLp45b6xPatHCprDbWVDCyUE5QiWLbsraRprSBoo668fJ2ssb7iM1xTojip6ZdRaJo8pNbnqLvzKMZVBhHAy",
  "key21": "4RdswCxMAqhoDcvus4tdP82sJg1Hr8BMaADhQBcay9k6fbmfmygnZ4mpSzXCaccjGeYwxSb1WMxQj39nMuCvJfte",
  "key22": "63fGpzNCCjNKeiTTK1Uehv8AqN3A7xS6rAUVqoVuAvrszi7uqcWhPgssaainG3cxWWbvcENsnVjmpAAqxwm25Djk",
  "key23": "Up4rQNHkZAwMh7ozAAo2n6VSrnwNzEyjLVdAxkxHpoTQYa1CqvvePBrUFDJVyGHps7HXdWvLWZAMoxDWXW5szkp",
  "key24": "4JR6wfK9eMjVCbLmfUCTVDfuG5ohQmDCnyoanwNjbWFGzxACbGHpDvrgogu3u4YDJeTKvXkmf1oBowhfyY3BdHHr",
  "key25": "56UsbfPANtsxxjsQqqEDCGQmLw2UgF9uQ74Fv6U5zKDj6uJegyXG7YBdQ5tUzVRmTpX9wFh86bZpDhscGfyLX4WY",
  "key26": "3Cnr45CiFTYczAbtTgZkcvSjw1g7yMAAn2whoXJ23CxZR6PaCgMLug9eYANreL6m362Xiva64jQqiERvZzSAfKKb",
  "key27": "4gjbiwwkisnzpNZRv9nHxxANHiLTAf6unRi8Z8PDLi37uZEkmCJkKeTbhwhfeAzqeYNGdzMaCZTUj7mPjKJps8xX",
  "key28": "3SmyxqxTu2WGCUSswWFDP5pnnM9e6J5sphhqSUYjtJ2Dwi64M5fJP1hL3REafLL9NBhdsCmNVqcpFpvuuoK9yJBR",
  "key29": "4n5EZabJ8m1pLLisrCQ7eMbPoAwpMqVEcS94cULQj74grxeBta871nrnNhYbqFuGZyaZ52WsfzZpRjwMPnBCzE92",
  "key30": "4k8rfoRXLrkPvybTdcGeu7hzBXvZV34PaykDTouGb45WnL9dKNpmTCEKtbK7UHchtpWNcrQ1r4mkP89zXYZopXWb",
  "key31": "2zyHJDs2pRz8HFNQAuBhHV3DZkh4DaKrzH8ARF3cNUX6BjERPvRFrocnCjs17TJwSpmL5awVJWKXc5CMR7NYc6D",
  "key32": "3FpDZacGCC1sqbrPqW1eW3ZuGWbdMHCAV2eDB7V5gKvNy2juNoXzrhZVdR2vPB3jg795sneqio27fTTCuRt16zdR",
  "key33": "41dStZz1yEM5eNVeHrqh6gujwmfsG7USxFhGzJ9WjRzsRhwUzZ9qHwok9476NtApnV4xa3eZNeCiVo7CMPWwqNNV",
  "key34": "5EV2ynTvJrc6SL168HNbxSjvWzT1Qf35yRsa4tTQspcSckykP5NGMYHc6twDYU1u9UTpMg6EtjUhJEkXbXAT4611"
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
