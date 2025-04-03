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
    "3gX1TnwqwkV4NnWEDERtNvf2pGjTt8CQbKcaFYDbzenxLvnxEq2TELV1si7r7sE19NJiqPoMWkLbkPTMMFrDqNaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4ok8wztMfunijizWpENiTdNxggurqryjWUkZFjKjSix9aupPdx8Kbt2Z5ezSUyeBSNtfnowLUgjudLKjRirKh7",
  "key1": "3z7yVeesXVfc2giyU5qVKT12qgJSCLDHdmru2ptdXR1gDwT1MiQxPc2DuNagy3zRRQbvRPcTSgnbivU5mRM4YjZ8",
  "key2": "2DYr2b41ehmxNSuFuyHA6cmHkJiWCHFUpVPiubhi56jKouHstEHb4yfVZxVSQb1A3Bm9RwSfLFNvhJMkekpwJfm",
  "key3": "5Tp61gy4xZbHGKHtjJ8csSC5DP3TF3t6RNg244VeASzzJjL7pK2Rm1yi5uJFBfLxo9QWM78PABtNAYWhW5eM73po",
  "key4": "37GkhiskJxALFSez434EFYH63wHu7Z16ML1RDPLn222XuD8WanLSVNW1oY7NHrE2jsP6Ew7f1uiRvjunzivKkgfo",
  "key5": "31CRsymczz9wJifgdXh9BjqbaxvKywKhijLLYHcxW4JCNFsNh3zxHBHTtrhUvvyG3uA7Xw2nYgUh6Xc45zCz3G8e",
  "key6": "3hhYbbhCHVimcswcf9rj1YwxfYHQEwmLzJtkoAEo4GaUh7Md7F46YBi8at3uZYXgiGa9bQwjjHoFsh5ASkUCEpQr",
  "key7": "2G2ZNxHXA9tr9UCHL5Px8CaDAAc2Vd8t1sSv9Rn7pEMxYs7z12hx3T1w6rVoxR2GbimbjwR2osT1ZiteeZtwSex4",
  "key8": "47thaydHTnGvMPYxLtQzAB4HBNTuR41HKCVLjy5mdjkEgiWKai9A2YRZYPNXNFE84o7tZuRqjrkK2HP2xvNi9oNb",
  "key9": "5HWfXvmBMR9rwrvWwy7w3FmWnuVDbykNMgpdHU4LD8km1iBjqmxpRFPvmQ99QfwoBZrXUtjEYaN8BACpYnvPhUMg",
  "key10": "m5aCLNXVaPLSNHMB2YrUYNev8Vx5xrY3RMACy5cDFq5LVkEBL6X1our9upHr7CjTbPWyJJMZPquv9N5qmjGDFMG",
  "key11": "x8fnPz7zQGzzQaLvs9xk7VoNTqrMCSpwpYmtgGBKaJ85LGq8x2HDvAYZpBUT4Lod3VbzNmdfZ25qMmJ1LSki1dy",
  "key12": "4wG6W3ZgYqgXrnJ8qscyKnjJAG2GEnWqcZBP8aDPJANo6dXswN7NysYq5LdHSUiDUZpRu1S1GXDPEsMtZf6kV3Er",
  "key13": "2ZHrfoHGqpXEQ1rMHzD5mnqyaxN4NkBwoBALg3ZWbTZH2p3yirAKpYAKbQ3GVuygwZjvMrT42SxWdt9CpnkZ8LxM",
  "key14": "5cv7qrCHR56SmjSRYqfJNypiqmc7WQWmzmmhpmPR5nj4qoYMuuKLDXsbs2LtEn9L4USvRSQkPDKAKkdgGUsHa7m9",
  "key15": "4juaNXfmnTbUrU1veJTPiuge5Q2SXa191mVVKiqqxHFcbcqHmMY6HmVkb44LZhU7oBL9upc8dLxvLKM2E2BpynUP",
  "key16": "3ns261TgxvMvvPbHNmyE4p6YTykyvH2mZvtYatPL1t6kfPYqXAeVoyzUqxz1aiWjBMSkSymz8SucWvcbMeCoUccP",
  "key17": "41kELvhkkQYLqfBWZxWeeTPnmxPkBtnxZiAurUhqpjk7YJaK6oBJC9aYpeLu6XubCvqJXT1zkLsYRxyGBh4SgdJq",
  "key18": "28NPxc8BRzdmhiEw44u9Wu5CEMLyqT83ZmZgwVnmshWBZscwQxUFHjuWxr92QiL8S6NGvZSQNHucps7cKm4zSk2E",
  "key19": "65FK8eT7Z1zFiz8JWdQaLexMV8MJohcwpbS9UozBDeekGfkpAHRVb1dU4ipUUW2kiSf8rexPwET9GTRu3aqfo4Gi",
  "key20": "4kEqmiZqd7zrmTsAQvRWGKeZ78uZggEGUytXUvt1PziguuDyPzcUMAE5yeGFJ2qeKw1fBe4HriSX9Wj2UuP4gXAE",
  "key21": "2GmjWAvpoEKSNfSwLZGQMJkuxK4jVQVLVPYEndqQfc6msBqhNck9qGZfzv128YZiqpretorYjcu8AtBFmoGPR9co",
  "key22": "WNjfcdU5rsK8GNjwS35ZtJMk8Z1tLobVBhEC4eR94ZKR5ZqWxiCfCMNUZ98xaupg1qGyz34HGvP1T3CAkrUEoWY",
  "key23": "3aVoWwVrULxFk8nL4yZoJZoqmndYaED4xT2uRyLqiT7yFAx63RjiVcsKfw9bSKARmNVSXaCyJQcoJx9futVjkErf",
  "key24": "r9GiBzRF9aqRM4zf4hztCkXCkyA3E2c7ykAWJS3V88UVX2sLUxiYY4mXukZWZah7QZCqTQTQcPLwARWr18fmiAs",
  "key25": "5BJQz3pLFyerNucMnzpQSiwMCzw28gW9jZxp1CE8ERWyVcRyut5y5rrkL5WPLeLxASBnhH7e9h6mAGkVCQWx2zDr",
  "key26": "29w7hdvQftVDjmgreyEaEpf47NFYNMdHSNSkTFPF8t74jdzL4CcgRqbUtgrYLHc72C6Ed6otpckweZgqRpzHsyhH",
  "key27": "5PMy6KBwTjh9LXFzcsESTviCpgB8A8eFncmmxpdsWdZ4pBtjVszaMaUCc3VJEgrmYEouAtxAjjX1vc1GjcvPbQ7R",
  "key28": "3t7xMBcRpQqoWGpPFv8p1u9V9iNCjf8QvQGNc58iNu1j55ATYAepNTF4dQ9HjEx3PvZK2UydeTdAmdskpaGhXJs6",
  "key29": "2YaidKsH4mkCj2isgnBxDXSXwzkzNF13BGtzhsb6yjL2vTab2hKfBLagN7Q8EtJcB7EPM8Nr1w6aGkTE1TTYkF6E",
  "key30": "61rzEWWSBLSxKSE113pwZoYTLJmz8cGh81uLdPPSH7dcUHbUHiCeE8cwzxaAjVKsb2kq2fjaaYGmc7dyQLdSn267",
  "key31": "BKeeKZZFcphXmi9kJJ7bn8mCbAHsvG7mMoboBaMA5e7iJwC2EkywDLQo9X1JVQZ8Pou3aT2Uub1qJ6g4LYwi8iY",
  "key32": "3gYFYZTiGRPuDUCqzN7co6NvaMdchrer4uVa12Qr7qTC3Ksj9MJGWHAJEUGFLDXRagdFemNUpL333psJXNxJDo4J"
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
