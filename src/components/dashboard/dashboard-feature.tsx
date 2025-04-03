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
    "5qqqrCYahrTiQAJb9Qcmb3DwU1U8gojqtYyBjs7cFDs3qyh3VQ1MTvMAXd5TDNoLtD6x3hxvfEjUQBNExF1qHBax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieUf3dWXsSEQGMvvv7WDZmA6qMYZrgLUvvCdpYxS6KNoPHYzzVNEEwTbvCaCHp23rvKtWWq14XaudVxEMGdqs8i",
  "key1": "P7HhXzUeYL7uWbijT1teeDxZExUZM8b2ybGg1Dx8qm2HxRf459w7dLAfXjxzTKWGFL3NSshKRkFL8eg1VQHCz64",
  "key2": "4EFeDQUajfCu2u5ZsYYLy5WEA1ruqw2FXDv5vr16XjewX4hLC53n4u3BobjnGvwbgmvnNDnKcZFqs7q5essDwzkP",
  "key3": "63fTJRfwe8oN3AnU38Yov2KNpzHhkHd241UnmzfVYhp3k6xdV5t1kGibJdC6SxhwDMAPFyuboXVAD5fYo1GDQDAp",
  "key4": "5v62u9yv8k7CWrVd5HSjXJTYPNr4Ke5fSiGiPH43bQ893KwFvS2b6M95yZvUFYrgNZqgMAMUoZGtHRZLhmqooDji",
  "key5": "nHEV8sR1vkSvhLAcL47CHmZzjc2RRi6wsmDLeXjhQHj21aS2PvnzS4faeC85dT3adZZ17x7tHonVmRM27oNF55C",
  "key6": "2hTGVs5qNFks7JCjBGCc3TGPEKQPSUmssfSwbJLgnkjNc2remRWM8NuegZVNkPcqjB24H6DAgYbWGyqAsgbmtckA",
  "key7": "29TeU5vKVuUat5S4mHASHm7gqWgCveHvupA7xmn2qeJM5kB5TWYrEs1dpbBEQJBNyGiiWKzaqbQnkiTvNoGGdzxA",
  "key8": "2TRPzR7Kr6HBFXV5XyidvP66MUe4HBxM149kyAgfXHXNPzp1eRu9GKnhWqBQHox31W8MEBuCgVVSSq8wdiAisVA6",
  "key9": "3b9JcHJ6T2YcEpy5xTh1dTzgBEfshATKXCmCW1UU3ZTtxj2PM4ZSPRBrr4gdL3TX3iaTYqzvTGDG7A91BucB5gSa",
  "key10": "5LN7tfC8RdtwPqbHddM5v7AB6xzXXRC3UmVe7WHQCURXL6KJRRhdhCuZP9TFYNL9RMuX85MfujCoqPvmiJZ3zUAv",
  "key11": "5Mo64wpc4iEPoh9ULjQDZN9xn2hde6QGN5eXn6hN9KziT3c2vEyaB1CJiseE9xTr2goY7AxZbUvToG7XJuaSJmC8",
  "key12": "5iFNDCHZVa63YVE4nvWiuovkiipzY4gCzqMLQCA13zjp4kcSKPLoPMP6fALzefKkVkLx7XTatzHXowYQEgocUVec",
  "key13": "2NybfE8PRfmgq7NxKhdTwoDFrc9gQwb1iotZJWPgY8d3qZAkwDcELyZfx8m82m5Lq93MWm95q9V7d7WBgWJD3h1W",
  "key14": "4BsrzYHsrBfhuPpfdB6JybH37Wr4L6KNybv55e4uzrQjKgF7tCsgLEj9PoJn1X68RPE4acCr3vCYKrdWkRsMp21K",
  "key15": "2xikjb5iBNgJ5K6RdreUJc8zAgkzEdkMj51J7ynxpFLuJPvCinpUzTv112U4FvqtKAGa6GTRXRuSzBvkLMYNtXfM",
  "key16": "2UGVkdDwqX9mAaPasM5fdeqeUdp5A2XBwsBP73UCEkZCRrVxeXmSnLpyZ2i3LfQVmX3LyzwWJm98gr5AxQBUdeCi",
  "key17": "2HUKEgB6HMr3GHZZzJ1CiEiFWWo1EXvC8LSNZtc9GQwrNxq5jiJvefP2VkFHueF9QabJPPLfPM9p28BjifbmPe5Z",
  "key18": "2yQpEArX4PML33jatnWF7axHVKDx1Rtf1ZEUKGRAqm2ouV7nruyYwph4TbeqMMzTu3WbLR9Wkxc1VztpqwngqvU3",
  "key19": "2Ke4BtvDD15NyxD5BgShmBV6WWTJuDm3UL36cCb6Wk8KKGVtJBXNuk5oXVZQuL2BpVS36wqWTyeY7ndfZAkXLvYm",
  "key20": "4snt1kNoC4jtmPwji3p8gH9HQHPcmDLrvF4cMU24UYUgT57AnBBcTy9j4UUKuyti71B3wR4mMdfKwjFBsE3232Yn",
  "key21": "5hoUzbjVmEP1EfGJTiWVGrotfgr17oAUNKByrAby3XLn6uedyhwdt7SPkhseG564WkTcpiUPqR7dMepBnCpVruuj",
  "key22": "1R2h7cbF2goyY6YZ6C4wMo7ijMXzYMkXiafv2dqaXEW4ALiL3BGBaPn9AnMt5wTNGf6Qi2RybMjmGdJVDU8eFdk",
  "key23": "54VYFobjD3C1xtyRjcczck3mwDKq4teEn5bjtckRWPGgLbKQzBNtPDWoo9hRpeHKcrKvChq2zieEjov3SggsA1pR",
  "key24": "2FCx4EV2CeFLd69DdjLbGkeLahKtSmQcWFBRFkG6YfroQak4AxSNmVxnN4YkF4imzyrQpEj7jnhH3A1LVZxrbpuS",
  "key25": "fwsuT97iN2XTmNgVj8Tz5MYu4Btgk2UdmsQDJmBoqW3YhDmdP836E4UPLaXeba5EZqG5vcxGTftr5kDTfmuV4vh",
  "key26": "5VHMyeo2EhPLo7JyLGSJW866qHg7MP3jRfkFWtz4s8Rc8XHEtLoHD15xrwfMgRbLeuPXtExwCWENnwYacAoHkAxv",
  "key27": "3Vfh1HNgfgm1pLSAgrH4CiZBcQmBbwe2upimQzXY12mEsvmHLd6gChwsw7jBydUhjNnnRDAA3uGMyxAkBEn1VTaT",
  "key28": "5k2Zh47gKs2WWSVBHpaxaQn9i1xQ1P5Xmefa41K3wcWzqZ7SxUhVSXdusen5E8mnCroMf6U4YsaepserRciL6LFi",
  "key29": "5SeLCLRKc9436Qna2nkReMe2yXWHshvxYKDWGLFi1PRJa6A3i87zR4i41ZhYRshjqM2kfqkqNXzB2A6yFMFK1aYB",
  "key30": "4nLVwabyQH9KXQ8Jbqw3LEj1ir7KDSVfkaAN76P3tcfCSSygGGdp6GKurdh2wnZRqXdimY2kikGs2JaSyPrXbKvm",
  "key31": "53DSbTtT3HkBG3UxqWiibSDcrddQKgnxW2cbdUYZpVUR78uxoh8RP7W3dAyuJPjYG2pLYxmFZtBuyXWfHsgmhGGz",
  "key32": "7JSKSZLdv66Hk5WhZTLzzKjNYrHcytdEc61kV4CRiDSsfXFRhcUzM7nmmGeXa69fv1JGZtw5XKAjvUHKh9XgdBb",
  "key33": "5qbo3Ac7SFtfAPAGdZLfVbdaNGqSSj6auk4LP1xizSWYsdSndu1KjtxhJ322fsb4d75LugX1MvwtCkJj8ENRCFfw",
  "key34": "35yrfS32KMwScQnd52UmQT4iv2MZVDgU5aWL514vVFfr436zognsUav9T4EbGQih6Q5PoRL6WNMDTsJv2DzbAjhC"
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
