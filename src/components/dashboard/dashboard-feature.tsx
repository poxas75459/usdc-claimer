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
    "3zSVDRPB8GBGfDV1uZNWeCh4u8w4ozBdegiudj9tv4PRBD8kKGvJU6No6RgBN28TgkPhUg7xqtsV7MzETCrD4CHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URUvzfJm3kCe7658a5oNJ1ijeKa9VYdg7jsQy3SgnVB3ZMLeMC9tF4JFWxCyG6Xv6GxxTuge3xb2K195fFQpAdJ",
  "key1": "NBBcoQWxZ47trioR7Xxgh1pT156q9ohJ81PikWgbKDppzcHf5FCj74aXRqVp6jGvWUn3qWNDTCW2fqGZC6WoZy7",
  "key2": "iSjMj7dQodHNBAFsdojWoxEuqPPfeuFtnVJuTUvmdHuHv4WtLUfkXXC8phtRgJnbg2XzAn58NAXaVPhsVT3ZZCa",
  "key3": "3cTVRdMS9VgyfBuGfsAPmAiRBtHnEab4tS4Hb2wmQgaV9ZQuLzS5UNKzmg1JEE2SpEicn6LRpDcZJEDK85UMjRkE",
  "key4": "2tyJSrubUcqimLkiuq4ERtvPppziibifdLEW6pi5bKtuevrvABunemwRXUnadTuiX5ardkdseWEJwdJdmhUuE5eZ",
  "key5": "2AMdHdzKr2CxZ1FJDwNgPU26yRyxgKja1EZFozg2WuSDqq13URJupsKVccbA6sGAGm254xYGJj9DNuyKq3HGVqcG",
  "key6": "54dPSyFGa4iffArv4Sbzh9C9mj69dmwvrzrBJEqo6nrKWdjPswAGmupCXApjjDHtsoHURABE2sDkCP8v7k2a3kBA",
  "key7": "2JtxZy265CyM89bzmBrS6E5Q3aXDDJX6L4gwAzENVXfu29ApxZRR5UoAcoxASuh4KfBJMdwhFjKrTrjUQeP7h3gs",
  "key8": "3AKx9TniwT4VA4UxKJt1Cdcnq6EAEj4ZQqwfFV1BUsB9aVqMGs65Uja8hF1traoyzDP2MASc1Dj2iSYZXNS2bb4D",
  "key9": "3goKoP2MteGAxxybc7unBix6dvy481XBzkiy7JykWQkW4UVxxBFpN25afcJtAgJMwReA9ucmKY1ZEjNMe154dEyG",
  "key10": "5pchjMMMrrp1ZJfhgZv85Q6H6W3bxKqsU3ejWiGfTuR9jan51QLKsJGv6wKvFk9feQQ9V7pXJUT1nwrjLQ9RNrNT",
  "key11": "5Na5XwtJUUryhXmuKienRsytDYszRWzKNGyBz1sVUSJCRqCzSmsPq11VwPebM4iWm6PpBNDvKNcX6zRYSiZNzjXB",
  "key12": "3h7PT2qc6SnePZ1WUsLgHonb2zwq88D2qiP8L2dJtHf3LZFT6U62ksST5DAmyYJRUR37K4YBjvMKbEoS69Psf12k",
  "key13": "Ed3XX8v16jC6qG3K8e8G1zWJtHGm9f8v8jjYBQW69fdyiC8CQM2Z5kKRcURfoHrKrCxWNnRneDFMuyMyA22mibS",
  "key14": "24itZZDK2z1hijqBr5SUxSA4kfPj39KCAVXcKXNWZVoiVXabby6ZLGLWh8ebRxwdPAjYwdfEoRSQSuSp87U8dkLQ",
  "key15": "2oQdzkVG8degS51fDWGWa5EMyBpoUuLs9rH4W32a5nguXb9crk2UB8zHASDFZUfNefuV2MgA7dhE98C3oXVPHceT",
  "key16": "2M1Dr2eUGvXGfuHw3YAk7qr8r2GQr3KzZTDbCWkkrcSg878ECU8iQmHtUiG6fbhCqDtLRQNeJThsFAvNQGzgPAxn",
  "key17": "42ZrSRukMH8H2WC3AfQXiRW77NstbwgPpx4G3xDVghuV5tVKrgzu6ztjqd7z33A6XYBDvNP25PtWT3kqxoRTAJfu",
  "key18": "5Sr4QkETiis8dEkW4hTUUt9MrtR5a4kxJWDJPSbvfzSew3s8bmugkoyuuV4TusGZv2EdDzrnbm85NpC5SRwzvfd6",
  "key19": "5Zs64AMtS4GUXHEkcZSiTEY263k5S1qWJge93efxiWVfRcSirt4rW9LFvSRkJiKbjaqmLsLnaXJVeYcB2YHWSL5B",
  "key20": "3Hh4nyMrt5pbomr9AKiKWGW1JTgRjysugeXjpe2C4gb1t3B9hcsC6CF6jc6LoyvmAn6Go2hG7ymL5hXk7Ps8DQ1Y",
  "key21": "3sT2Hfu8WZ2hwcKGaGLNQG6Y1yf9T7C2iPnHRfLE8HEvih3prJQGWdrP4RmukYM59CebSbDSHQf9Rs1hHW2NP6Ck",
  "key22": "UBEqgw7MZnfDr892BSMVfG1YX82vQruxcM7ENPfADottwF6q5QKFCrL7WxdYBRSeV381CP4qDAZhciZh5HqczNU",
  "key23": "2QmEapyyf3kP6SpEACuzzhGQcipRBVG1ZtFKR3KXQW4r4qd3Yx6XY83becQg3hbecN7bNepA4E5gQV8HxJ4rLN7h",
  "key24": "57u8LY41MSEQHbvMYJVzufEHrdS8WxdqnwFBKJmnLk65JPPVwNw6h4ZbD3Td79v1K9bvd1B52i7NtbaBeswdLGA3",
  "key25": "26C9U3nugzK7JzYBnwL1YN2eTHe6uqhHurgFtrwfnPRtq63G4oxcN7fP3M2dFJDxVfBTTiENm2btiufrUVWqq2N9"
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
