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
    "WVVUA3aQUCcuiL965wvNdS4LYAg6vQJucVFsXDzXGoxafGSZZ1vSwmkmHe68tjv4KTGBCRDi2QEncyGbvWGvpDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivJcvDAS2DbBgUiDPvivuAkA6wh6Nd3Y1d3GNPamLssLYx9d95Uz1zwXNc3wbUAfdgKwqio6Q7WibiEZ3Mw8baR",
  "key1": "1S7GNRx274SHaywc71pHDHvmNRatg3yHohtGr39iefUz4uC1PA2GN77V6G5EzMMGD4Gs5XKgEUaAsP38wtVhe5i",
  "key2": "3CAz5wCR7LKvvFvrQ3gwhDfGbnpCGenniYDek5UGer3f2JyXpfbhBahv4pRhrofrGPuQgRQ8wacuoG2Sq4P8WnhX",
  "key3": "65hvzNLGrmkpNEN2T5AQdTmsyfm877fx6yQq42pwddYV67RbCBW2acZLiLfvJfsvUpVV8JsQPebx5ho1gjWz6DzF",
  "key4": "2Z672gqzGTefNHvw4DfRdcc6nMRDpjDMSvgF7s4VtUBmSEVGSBQT7dWHC25Yj24uuhxgxA5tKaM7oBNA5aeUZU7R",
  "key5": "GMtufnGFLf7KHSsBnRoSXhRsSqTqppUqVMGEY5jVNQujtk7197zdmvZJw2TVn6vywohdGD5U4prYd5vsFANRDaY",
  "key6": "4td4PX45gRAKCtH3jmHPQ8AGxfKGrBms4wDaMgUwjdbQokqrQ3EE61W8fXCSvSggJeUikL1CJ6X2k7zjA9wpTz6j",
  "key7": "5vBPnBB8NfBZooSXzARtYocAKyF8d1sBaFPyYRAWfLMXzLTi91bqqXXQezS5yBHRTqj5icEeSLLN1f9DZrYt2o4b",
  "key8": "44FmUeTppPbJioMkBwhud1tNExyujQdGk5D49WZ2zzuZH7qWKu9Wahbjt384v7BX6jfTYYVmZ8h1uSdoPXV1F8Yh",
  "key9": "3nyKTEFmaG9iCe7fuFjX9D99zqoXgEqBbdKpnTBX7qbEYjbwXFjvwhuYqDgAGnETC8DVi9k9hpunbQbUUahRkzbF",
  "key10": "4RE586UxC55MZtHec1vwHpkjVuXzRtSUhU6B6MGsG48pFe9ERLyms9mdnkMjTNpk6PJmAq5rYP7GPAr7Eq56vjF",
  "key11": "4KZtCgKab8mcCD9PPjPT9uQs9WDCZuH4NS7RFrZzboRvmydbGKfKtUHjARajkFQuRNwicpgfSFojJTSEJRYKdSs3",
  "key12": "3mMncwqbBLUgQmRbsH1oRCbZzzo4EucwCSB8EGNT1E6sR8rjyyYumgjqRNoDh51aiLDNY7NfuhQAPLj69tcvi5XG",
  "key13": "4pBf2T11Rytb8CrxLTFTHcK963a67VXsPaT6EMYxdjzhvhb14Z22AQ1xjzzqqSSxGfpzAbpN88gDdePCmHhDgsef",
  "key14": "4WEvx28E5ydMisnhKvLVBA7DgJTegVjz1u8ihfoeTjEiwmtYhHVNyiRtBT4pjaxBe7jGbunBssPmLiPGZDPbAvWa",
  "key15": "YmVz7Rd5W9EoUzpam5esjoYqh9dkv1NUK2LFQ4YLe4cBZFxLEfJ5N7GEsMP4b7QX3M9hcEUnGxVuzahG6csBNkU",
  "key16": "2TZdDxL7tUALbxHNmREey3bHQDaTgg8wNUfx5w4BUtB34YbUqim4GrBVazgTreqkHnZKKy43yxssjYeeCKGEUgai",
  "key17": "sDmJQQLbQhtvjyqFmjiMtok9VH6dfJjwgUZ4kiwFmMC7CWvyXZVuHyMi89usheHdpG1TuKxjrD4ZnfJSzfN9SQk",
  "key18": "9PtLxW3tvqdoEJos67Jx9sSiEPYoDDKg3WXVofpvTiA1EoPsZA7ex3D95HYLSePePH7XAokijSb6NKruNC53M2u",
  "key19": "4yhmUXVasBbpXx6numf83FG7KAaxJnfNiexowFy4PeJ8ZoSui8qDCXJrSM2iHPnmQLdNcdJ7AAmG6sVjrqeqdjJG",
  "key20": "4nimEjCNE5GZThNjhAAY8jtQTPHb2QXKXSfCVAtMrrqwWkyKNKK1oNX9GpTjE3kz9CUTm8FuwbvgCPg5WVp4snsY",
  "key21": "5g3oJiUrrB2MieUXVCfJG7yB1xn59dbrhpDATMGtvSmsX3t1azH7Sea8UQGod3Tk4CMdSCaT9o3hK9DxgG6btN31",
  "key22": "41PKJNuaHnb27ZppEXmbFPsD5QFQrGF5rDa1b7XiHhHS7cWLDNzNTBN6LAfGYMZPsb4DadmUbXmV8bU7wzhnaA3Y",
  "key23": "5y4rpy2mfRzKcukSCdcoudkGTMfD8gcfBrXrxMj5GWpKPq8ofeEQX5hyDGWvESTgMZ2Ziw3wTy52W6Axx3BA9XT6",
  "key24": "5giAvcNJwmEcwfP3GgYGw34Nmhxnmby6P7r65yRVx26MVXZwTyLvTYr4uxbqEJrMfoMvmyevCaKPVZhjFz2t1Bou",
  "key25": "5ohCvFn5sxXf2n2cb38AXcnhwBb35MfyMYXwz2Y8KhvY1aR7GuuULAHbsy8zQEqdD8vBDWVDN7YSwXsjTBk9mWaR",
  "key26": "3nKeJuPQvPYdY3TyCnq32G1gaXasRUyGn3Ep5oQ7nufhwbpkv56dVqTjgCNSd8qT85gvkSARwx17NzHeYP9k1sd8",
  "key27": "5F8yKdU3fRUQqtW3PVkEd3cnQLkGBvTBuv84QtRdfF6gmkorwsEhPLV1ho49BMskEhRyJkFA58jsvsCtHnxQrww5"
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
