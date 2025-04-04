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
    "2YCpGk8ZyMeQCGtZNk7Jmm8BWgLSaKbyTC6hNMmYUTST6Ah1RBUQPxkxmTpZ71zaVywPm1U9bVE6azC72dUMMghH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEvDhFfoSXMTijDSC5Lw97hLD3GZShaztTWkAiBdZ1aeEEy44aoQ9xRwS2xbUbSSjfCKxqR3tgPGv7jmjLKzo5N",
  "key1": "5ueqkPj7yiKtvEZQmAts7UkzJPyXpwAiVW1hj14T6mqhx3d2HbHKeSUXSYeDF6AJ1akHT35Rgd658no1HfVybz8j",
  "key2": "5YnCYkVecrnpaeZC1zy75mHomjsQoSMW7WGFErzGQxfwgzEZVK21yYpGECMdTXWYngyWtJDaj8dkLEqbRwKVrkg7",
  "key3": "5WnCixWM78Q1UbAQTk8ketVey2cy3pKHrBtanxWFE2pm4E3epspB8UyXgoPHQZG7DuFKPefbz4RkNU4QntDTUSV6",
  "key4": "2VwoLkzmKLg3MuGdnxbkgy4dSJBRxbfEQuTxCYqFYZT2dAiwwwraW31fCqUEFdvKf8jvTDejFQ38KWuiykUe9vDB",
  "key5": "oeYWkyx4azjFrybEoWT7Er8NX4osPj33M5NnoeaWb4ffZGL9N3CyNL9nzsdXhQVejr4vuC4LzxFfWdPHnonpcbz",
  "key6": "SjT2jeHzBpQdBMbDMCAPokrFpjhg57NatXA1uu5za2UBLzcnsDLksLhFX1KTrfyfGho6Bme5iqMV2YPNQMb2gEa",
  "key7": "3UAMpesZoaUbHFqh8BmTVmQQWSTyzqQ7ESUKqURryuEJcGGeHwonf2o7WdhAKbikiGGbeSXWzHQZYm4TJiXg8D3Q",
  "key8": "2yVMfqsdbhnqTmxrDpcSeZqT7XTiMnXehFSYqJbXaUKiRCaYXUaJNS6zEG59TGTodopeJXMN7DsURmvpAaitnXtw",
  "key9": "5E6bEwR3yRKKmSUH3MNJSdZSoEDoT186qNyjwMwxdX9tTFpDUbiQqNrCKpxjCyhLUKH8TBoTfTG9yFwMMZY7WZe9",
  "key10": "2JxbrE6faGhkchdGptG6c6oE2zMULxXE7X4r3BHJLBkEH3uYTZ4EPDdjczmm9KEM2QbNGnUHE2CW1tQeZfLSDR4m",
  "key11": "3uMHBkSx1fNab1Nxu3uU21EVyLQWtrQwJTbm1SZFpxLq76UH1LL8yrarpgmbzEjykqFGRxnt2sufnxBYM8cnbxXw",
  "key12": "2F4jVqPfr5YJU2cKNTpAAMSKXVr6cQdZgMxGSKJkmfv98tAbXdcXPDRbhcRostmVJggP4kGA9hTJWCUZYqkzruhD",
  "key13": "2kH1e1MkH9CuTquC1NPFCfFmNjiockcMZo1Yz1sUMEiZ2qAUgFGHmiJ82EFGwsH94ULur8aaqKm4haSQmpTS9DcP",
  "key14": "jHXGsC7KWz3SQLtmXFmXXaf3NXSP4eVHy1ZtHwitqnSuGk5TQiypzSUKs8jv7nPMzgL4SqmseHBs6GaEznrgULw",
  "key15": "4ZfKx8Fr86jQ4P65Y94CbZAnMf8SvPkCgDSVDt9PiQXw4aJ75xr1nm8gTcAfqbgTTQwmEfaozbNQAWfpvNFs5AEk",
  "key16": "3dqTTc3SHpd1pkaDzbnC5yt1YwaUftV7aAud5WKBD4tfvACL2kAKb3Y3iMeUb8xT4JrzyDZpAk1rHKyMNBj9Pt44",
  "key17": "5X4TjwCdxLXXE3TZqi8zLFc8DcSRGtFnunoYtGoiEc9QCDiyumXoC7TSvzJ2i2pJaaj3ss54Qgt9usyA44BzVN1B",
  "key18": "D958B64MouC6vnuVTj3gnnEk4NbatX2SVnnhkkJnCQLC8cdZiDEZwLYyjio8rN3fhB5UQVo5RUGHfB5VFnHbLbb",
  "key19": "34VQNCDRBNA9hCRKQhcTToeZCYPEp7qF6cqiz7pQD3uwfFNinqvN1nPvk2BdTMrHaSFuFzR7XGiM8igmTujDBfZZ",
  "key20": "NAub5nKLZARWXhCXkmaYPp3Fpk2SMvUT5ra5DaVN18CvFy7PqhvDQpZa2PuvaRSdLpDQTCYM4sRb9SLrMsM3gMB",
  "key21": "CYyiVb6hwQn9odmHwrGGcXGYEEMpZXbyecuLxxyqvNf2ByKeUCdmNKijxUBycKER3aa1EYJyqd8vMafkixpXfwh",
  "key22": "2WGJmf8Lh8JYUkvPueXm3q4TMs7S7DvMiy22LT48ZxrubW7m2L2G1ubPGXNJLRYAARXxuofDpPvMyiLx98peR8Ef",
  "key23": "4L2aoyRz8MEAetM3vXx315p4Thd32QNnRvQPiB7X2i8dGXz11Ju161ypHVF9imeZKzJDkrUk317NdvZEM9iQ3Jf6",
  "key24": "sQcCCaf29SURc2wz4WiLxidH5vmsxxWF5bv1FTrTcn1VRwiCmZmkqS4aN2u85CGTCw9UV2vD9P4QGuyc8mY6eYV",
  "key25": "2AkzM25z37CpDkJM8tqeWQNCU4dTo7u7HXpGCAtt9tSz8555s53GGftDQv1hiuVAoEE7dftryESS46kLg7uB7wD9",
  "key26": "2bo4wr6koYLnJf4fi7N6NGMMYyxA4gcHzk6Yw5emerEnYrw6zJeCQA8qULZabXJbBGzyiDL6k28mSF8JJDfwGaem",
  "key27": "4rHcsmdL1P14w38hB3mEcqgx99PcivNHCZSw8oKzMpfvPLxetMXrF1rUiFh3M9Mh8uSjyXHt5rEtB8W3PmYgwxYb",
  "key28": "56xpXZFimPEA1sAXcsidFaWqbyBRHkpwJNN1gV9tBLxGhdcp8QDUpJD4BqVwvTAjjL9KraczGx8LdqGXuWgA2vgT",
  "key29": "NDzbJQbu48YtskbjqUiisXk6Vh7sj9foqzBcwez643vSWMLLTKCXudSdgsBke7grE9bXombn4WVoHb1tVAVP3x3",
  "key30": "5WfVJtBJX6eJH97e2gQpJh6Mz9MjZVeESkFN37AnLBVXSyafc6NJBfJnT2JWY7veayeeCnkUoLZarKunz4WLCdzy",
  "key31": "3xzVikjKWunNhJNquwHgh1HEQWWscB2H73D2EZJ4MHTLTbDP5feQs8am6yWbKKNtzw6hag5WsQLKoDDzLFnt8QqE"
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
