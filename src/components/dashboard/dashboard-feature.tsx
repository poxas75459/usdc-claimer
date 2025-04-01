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
    "2bauFHqeKyffCgHnfNdTsJQ8QysiWT12gWRFRS4PwGTgnrL2RzS9YuLwup1KfjyfGR82TUnhy8d8aMJMfThvHPRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbkkggyFjSbBVS6cp5vKrg6uLE9NPdMtTUY5LPR8kr3BduZ3K9ZMgo6CGy4CzFYfYV8g78Ew7HzJK11NBYWx7Gt",
  "key1": "5DpJ1Du9sB1k8uasm2PadWVsh6BECdW5z6mWq9SjJG1yH9NeFpbXde5PHVF1pu27pRx9d45qpxt8GNcnkWJoF226",
  "key2": "31pGaRwSRamfjzeD7Qdq9V54dbMkZQbh5kXGHziAhx53Jp35yapVYtHTF8754ee6vjq3nzu3MWdpZPSnE1vxdym5",
  "key3": "5fvpBhBB6ZRNezdakSoo669p2qTCEhb19t9SS3HTcJat9BVKt45ek3CDjEffEbGmp46mgWvpaeyCLDJVN77Ue1cC",
  "key4": "2ekp7BLdu9pFbbRumfcV2URWBGyhnwRafATzNZPpGs1VcMyWusvooDF6mvgRciCVZBfJcpwb48Pz7eKEDHGDSXjX",
  "key5": "5WNLbxjR48VcZrS26tDwCT3Hv669JPTCZsWqB7dGDTu9FtXm4gUMYTqXFHoN5wHfQGEkvp9373a8WVMhvpstAwSV",
  "key6": "5fnt1RRnLavHPvuNcPdUHV2tL16LZtpVL67ror8jSJnSsjqyzpUFZDXQUewaVKfpQnCFhmb2MACfPurYhF7Aqc14",
  "key7": "3yz57LqfA4EhVHC48zypzBHGvMmRaNT4FpjM7sJQcqCg6iSdLZuEo1mQ21ie5gW1tKKNXTkXcTTiaNUpuaxCWJrn",
  "key8": "3iJdeSKSBDTRzd7LbzyMWpR5mt5DJbGvSqtFjxApYVco1ysAdPGCWoF4fgaQFdpmLm571pTH7TUzGafWgoYiPoRM",
  "key9": "3jH9HZqcbpnU8W3M4U5HRXankYqdXZWu9ZdVgAcRDwPAtvYSVmKgiM4AQ6w6sS4AHAjiidV7QoMDCgphLb9sXXw8",
  "key10": "J8pWztpdQpP3T45mCtjRTvPYEppcTHrQbnPXhXsBj6BUmXnastrgAHt7Wb2eh1iYjSvSj4y8yDJZu8USWL9PVWx",
  "key11": "4jxt2nK8BX3ys6wBEceeJpVHw8YRX9CMGZyxnJbpvCPeQyouCYX4VC1FDu6aXDkmA7pxuVFYuuAE3k5r64nrCn3Q",
  "key12": "Avx3o7wDiPVP3hMvScny3vqWMPb7hHzQU7mnfMEivLLXyqQ3oLHhJAo6F5V7oEErVbVy6EopgJQpNcdprimVocs",
  "key13": "ehsHkrPdvGx9o8LbuB8vdJmkHc3eVYxkMkYsr9XPjcyhUaZi9Ud3u97Adrfq2LNyKN7P1fXQnzcH7D7ZMq5FPzU",
  "key14": "4FaHz4sJuB87NuG3bLZSPSVoEUe57bAwC5ihrrEyJhqyg9aQkjwHXGtuuTSw1tJm95hhX2k6APnAR6oknjB7UfV8",
  "key15": "2g27kN1643KaswBAdjrEYfDohGyDM9BR3dTsW6imJ2kfQytET7myBsjNL6X96t2ejEETdWxsL2TsyNvsfpLdek9",
  "key16": "3bDTjodqE1QhLHKDmL3nUnRJNS9KC5g6DCSgJraHEEinrRyDnRfcHpSD5hhwodr97mcoYZrKMxyGYHYm42nLaTyR",
  "key17": "5TKYp7eCuW16tCiJbqaL2W7RMBpzPxgsiJQdgsyq8Sp9H3GrZWEYUL7HSsNZgSqMBmJo9iiprzXYHAYgD8bKQg6L",
  "key18": "4dMVtq9AxKBGRjLrL2CioBQ53doArejWS2Txsxw4xf92WQW2rmjBkk7Q8mwESjvMKDmTEvJNWqFhKnxQEN8oDSAe",
  "key19": "FCQdgnpD5cPkzHSSVZ5YXxsQYD7qQdE7fEwCacAyhAvA7PpPvKm5qzhZQFnRSqLDK5HhY1UoqKREQ2QkcRHGAJS",
  "key20": "28ZUq4VNvcXTTCJTaZsc9QiALbe8vQLQ8TiEQyf41QxnJkZGd1aiEXj7XedAxqAwosDikjZsttbPAjHUx5i3NiJR",
  "key21": "3BTrfvxm65CBLLaFKbiDt8EwFTCQiJHNFQcrkrKDYWRK7f2M9edKjg3Qjj86HYss9ZBUEncY9HRbTLKVwfMCAME6",
  "key22": "cK14tqKnX3wboiKgorsAAUv64nxtB4YG5QZJhWWqJGcR8pJ125T9HHPq9FkhhpovvSt4avU1hwdKCanFqnr2ud1",
  "key23": "538rGSE64RuBnoH6uMctwSabVboXWMwrv9tABW3n6DC9BmuciBiqtESSHiNVJkVvJgxXMkSdXSxxQ5RqTzuRHJFc",
  "key24": "2YnsSpcGAfQ1fwX8WFrNKbGTbjhPub4KZzWM9HmK9BGyXn1q3qH7VkgaFYGFtofegpiBEz4A3ycZojT7LBmRCUXD",
  "key25": "3rdxcKMkMmNcVURnwftVf6oeqz3dG1pe723aX21AmJdCuyD1c8mTRvXcNQ2jXf7qE1NH39VPbvQXXXLVyZncVJse",
  "key26": "rXfdkPL26DWv7C6anebD5yuvkzYD16oQtY5m6zWrZygJHb32xX1a75zawHKDmvw4B6LnGyiMMMGx9d3cDiNh95m",
  "key27": "2jPzsjq3SoKHQVzWdVphzUeo5Sn3CJx2fsRd4jkuTaY8HheSMuDrUhNRzwhVzop5spkbC4Tgku4ZXGaPp69iHSPK",
  "key28": "5kUK6mGzS9YaLsCCSd7CwmVFymuG3GCVjuLtViaQajvHp9DQLqFAcUTpuuXKbJ7fvyFueobjhC7KEQX8A3Vgukk5",
  "key29": "4tBw8V5JjZzJw5grcySk7Ao2hJDRMV5hAtAZy8JcFuqcZNfPZVnieZ5jXYnN4GXFXBYdVMNaEvSdFH3ES2QWnFJC",
  "key30": "45obMCNiBQpzu7wpUSHsWzdW3jU3Aqr1VmZRETFhFzfs818pAZYYYr7kmPTgZgAAtqRPueZWEU2qQuWm6HDhFtTR",
  "key31": "5kcpJcZmQhtPqfu53dAek2gzqXQFryvgR2tE2KSkWCQokJeqqKEHpZqXR6MDNL5UX7g47tCg8kZjffdKCyChdoCk",
  "key32": "5RHeMM4FDCiBQX9m13Gyi4aAKHrWEFec9eSYxJj29LujjMMjZh4SGHAsko4BvYgemfMvRfer3prCQqFwaUqkH6mY",
  "key33": "pjHfTxJMm1sHe83oAr9n7abQaScLC9jr5rUBhWd7a9BWWy9v7edFn77Lbj6SwkUMzh4WdiicaC9NfZqbUZ1BjHj",
  "key34": "2hFQ4RcpJa2zonY92Kj3mLRU5rnigX2MHMucbHfV5rWMPYhKeH672Gk73dCgp9qPqW9Y2dJxnucJYv7XzCEZzxGa",
  "key35": "3SUskGfHgDRx8EecoC97GqEpBtqye1F4JKf3i77vSVBgDDGevEouuUEXREP5xqLefkiKP6Yaaxst85iV98j9RSAb",
  "key36": "4GY2mhaoq7FB4LTjpW11K3MhrLqTnTrTb3D4GuW9jg7MXKxKcDQMmWvXxG47bKZdFdm8kggLhaxrvvrSxWpx5ESe",
  "key37": "4WJK6rY7oBGrCV8SwNSkDLn9Ghfe8f9TnTwYiu5Z56muR7mQWTVQHyoKCb3CtoxBqqLzQVYhXzwCUi9mvy5azHoU",
  "key38": "555nktqM2ujuTY3Vm1GFpPCyZxi3chG8U7kZbNTLJD2Wm4u819mk6VXaYK6H9uQx1EYdDEJiJ9GFo8yR31d5PxBF",
  "key39": "NqND5dEFjDtXg9mSA6yoFGZ164tXwdihjwVuec37x3oxBJ9wYuwtEdu4RrJUQiVicr2381uAXjo34bVid3gQT7N",
  "key40": "4wsLVSsBX4SmNbdw2q6xWWhE4HQYrMgaiCsM9EkpYKtUQCdJt24AUCf4sbWNki1kV7BTesiVgdyWHWZqyDGKLWVr",
  "key41": "3YcVw1RwsquttNUgqiTpbEGgG1nzjcbP759VHwDDGGSG2J1yym3tCc4QSyWTgpVTc6CZVWsMJrfSKxPtnWiX9v3v",
  "key42": "7i4b1tv3dPg1kq1PLE5ZRm1pVydxMgzNzGD1WAVXwNXPNZzGZbyoAgZWY5Uf7gRLANq7KxAdZVd5hmpDdDp9GbE",
  "key43": "29mDXbZnnZET2Z3M7xfNzpsPwEBdEQvb92Tt7P8VPzHSi4Xu1JNbeFjfixKRu1XKfDdkrL4tHk4WVT8T34ixkPPL",
  "key44": "2eJ6w5WowLJtRykJcE3uH9tXiFAWBZSJptmeFzmNojmzw57Lop9RQw2D9qkHR8yo3fFjqyz5jssp3C968MYSnVTs",
  "key45": "53ag4bwjLgaGyRBTfQTPZzBm6igQjf6sjc3TXCFEmjozvKkv9iJiZdceMoNWuAsnGtj3RqhboKXpCdQVLLag5s6y"
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
