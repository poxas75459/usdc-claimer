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
    "DgCS4RP3YjkyMezRLghUjgYZnWXo8CsvuLJBdyuwHS54FAakYZevWbV97VZtgLXC5FhbYkNbsApQG6gk698NTG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZozxQsNoJPenSwPoupMULwiFsM86g1ofs9VZtcoxxiNRAveyeaYVoUMpBakFy2pF8CZCkShtQwsRnUwDDJctbD8",
  "key1": "651Dn9vzpncxPFbVwRQZYgiqt8RbWnL1Fxd6fWWMSETyXv4RukrLP22R776ptTo16Axe8Qjeyo9rX2tcye3sA8yR",
  "key2": "3FQuidV6hrzx46wxEFjJiTo3RmPWLJKuN7ugd84F7E8X3gKBo8oiykohvp4QozdCh7uV2LevPDw4JNxR8NR1eHeB",
  "key3": "7MB1LtpRnjR9yabzD4fjPMt9P2nR3zW2XKFud6SMKjKW9VrGXWQ2DNXJ5Hc36amdGPq3FMADxzw3sq5Ds9hBiB5",
  "key4": "2Dw9G95ugntgFBzrGHEjtn9TPKWr9dojmmvPN9LVh4LsJ1fv69JQNYsdvYjUkkairdxkjMnoaEYtJfTusTtARpop",
  "key5": "JdGoJrguY1kJtuJkyPEbgAseJ1mtY6XGLNLWzbFVcargx8yLwwkTEd2Sdi6H4TxRPzBGKHM5gJmihRhZiLeTQL7",
  "key6": "5D5cT37A9UpFs9swN3LVptYSHPHB1uBut8tmh9ByG9qUh1eyyvNWxm15a4JBnpJUNxDkT9yG3pScsBRUxAb81JSK",
  "key7": "e8BWeFTttBw4LBET3jvTvarZf4RPHtwaWi4eA8BqNyQw9yZoG8n8nLejtEHk9PtK55QxmuyH3LFC15o1mi9KrJE",
  "key8": "5Z95gBhAA3ZoiE8CUBVgi5GaH65RU585VnqM62a3i3ZZwH6d1WgTwGra7ykYtTZY4pNgC7RMK2m42eJRS2J9Ggpi",
  "key9": "2wzGsF4aG7F9WEBmfEbLKpu5orayQjPAEBEMYpKbE6csxQvE1Bgg2DKxLCYZwv8zHeuNFtVDEYW8GhhLDYB8Cx85",
  "key10": "5vvy8KfF7AsT3jnq7DsWPhihQNuiBoTeGuSvoWHNRoHV2w893SFaSCBgK3AB34g8HSjhRessvJkT9ra7gAWMJDWk",
  "key11": "LaUT22eXJtWA5wE8jw561zZzu2VW5cUGxpEAhHgMtrHJhyhQ3zVcsV42CDAUuP6HammvqenyaiPGYmGgKv4UgTL",
  "key12": "5B9DSzoPrbDxWCaiup4YwzLFP7ZFh6jEs84vxUVbysrQLUyJrGXaeT4cQ7V7CHymKA6nRRFdQCrJncRpVEyxanRF",
  "key13": "3ahpfTaD2PXWLKrYrtDXZAcyEKekiHHwGH6MLG14xYTGHmM6Vah8LZqjkxYui4hqLZWLQwnRjpQ8WV4ME1Hos8qE",
  "key14": "cT5HkfgimGK4umBPRFcFY3FkMR7ca1oDNsSos3yoDwuMJiv31w3DMQ8wqytdUZiJqDHCkB8GEnzXKZtKpauj6pr",
  "key15": "2umTbPVhasZ96H4caB6FzHjpSYMejDyxQrBNtUod766DLBWdgXyLhcoMf7otaSxgVDBMEoQBi8iDLBa2cxrGSo7",
  "key16": "MEscZEmRZJ1rVsT1AD8NadpmJy8eavML3ReLxsprYYa5xDfRE6QwLABhiqZS9eVRrhyNJ9LN6i5ki8ToWqgb4JH",
  "key17": "63uJwaGQPuNrnvrNTqtH55mnjmrrMiMxsLfEtdziod327G6EWnkpJa8ctmXpNjdVpHFME86dV7PVXtBavktCHWcW",
  "key18": "hgid4mmRBBHcatgmGRtj2FU5E7s7gyLZyyHVLNU2rwnzzPp69Rg3wh41bWkt1YVSzE8Pakp6saC9foXCCyVemZc",
  "key19": "2LGL7fxKEcHkNwXKnU62TnLitxVW876xqRnWRwPw51AAqQkMhwRFPkhf9CFKRb34HvjRD8CdwyWKsvP26btXJay7",
  "key20": "2et6Y84ZT4bAUFAzCYmrYD4R1FSC946mJqVWit2BgL8FEym5yyA5Ka7dDEcNmGVCNxu8zz8QFcEbBZtSpNSAXvKu",
  "key21": "7956rmF4zkVToTEmexmnNE6nKtkSojCCTovu4BEZPMvrBfGNHcQ8zavfvaX5Tx8Ldb4C7AnYUCKVk5NEshJdwvX",
  "key22": "4dfbMJqizScDQhUXbjsKQQhtQDHYmFA8iqvw8zoJvEs3fve7XnyobCMEuiyYWN95zGWpqyJ6KsiUQpYwkbya7sdy",
  "key23": "57vyLra8zVmHHa229qCwBUfwUeKK8fHSTJLk1tWPmSXodKaWXMSi8YKFubNAuhB8atDF811sjNEaTQMC9Kc7jiWg",
  "key24": "3RiBiJmyH7WTWFEa21QoWZAv5gkPm878oRutbdMohWYR2gGgrS8CQMPFwkZRP1sVHrV4W59H2KcfsbokkRnapsLP",
  "key25": "28ebzS7mhweP2cW3KG18Kdq1KYEGx5iN3wvJP3FCMBTwghPPnjeweFY2gBWUvRRkbdrHVj97jpfuqsigAxbeuBFW",
  "key26": "3EVqiArQzPYwUsKsFSiyLVQtR7WAsgBWjtM6JFAEcJUzs6xzF8YbCkwWEft8pejRdW1Q372h2sYG9ekpezSY7oLz",
  "key27": "4bLFadYuUCzxCvKz1TynzrsVMvEvqwMsAXAp7yWgnokSK8FPag6Z168VAqBSVPSV4w3ALURFddwvRxyCL4nxDzKd",
  "key28": "3CQppneVi65erMeYZ6gnZ2gLUA7ZXGK2xXyuYAfptYowZkyzG5sFc2amzvvMiAxSpDxxHA2UCtsiMVpN7yEBPZwz",
  "key29": "41i9vh7FXkKWkyTU4HYdwyyccSSxHCJKrkvSQW1mUsM4yRhSTQaztgff3dotMw8gPDaT4ZHAi9N9Btuok8x9dLpU",
  "key30": "2XNuU1Ge4GQ9PzVkiPX4a2Sdv9WwyLyYVHec4rmyRzc8DN5phnPBi47nFcXEhiGmmB2RL3CkkbsKyYqA3CCq2c6p",
  "key31": "3Ku2rKvKjT8ZvX1TYrCibTfGPcr8LXQMiTEbstjPfWtJdBW62QGLwz2MHSgeXKzKta19HJXZBK1K1mK97y1L1jsd",
  "key32": "3Ha7E668eeBfXzngHV7Xap7govsN1xaE6LucEvPwx7nc5HitwL2WzoEFrH2Ujo5Ped9pRqrDna2eThycnk7viMi2"
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
