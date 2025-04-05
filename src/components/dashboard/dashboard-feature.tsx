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
    "3XjPTVQn96y9m4XKkafrx8EZ9esAmKRw5G3e9ndmVVsE6ui5QRiwouAmckqBAZHrafCcKd8VykTvien1btemRBph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufvSGz51pMRoc8gd2XA1GRwLLjEMs7ZVAaaUQJBWcsEJit8YDpNPfRkuZYH8WhfX3CzAaWjSKWCY5wA95J7hPmu",
  "key1": "56gYPWFJFkH2ymyNAg4bEeMZ7qRifBoq6NzYEZJVKyGgR3Ym4X16TALm4AHmgpgeeNcsAjD2YkpBSWiba46CohYW",
  "key2": "mQDMZqXiBv8Yk5UbE6oQmGkfU68s7Zbf3udWT2zCwjxCietzVsoRnvrsAi6f72soA22qWQUk6FuubHAvwCVBcVv",
  "key3": "2amD23ixaYGMX67TjRJ7rE7z9asBQL6QC2oGbbtXJw2nEjpnPKgxwsi6gePXs2HkLGex8amhMYLW2wZ4cEGrw3jY",
  "key4": "2atPqj8n31jeaYfnFa2d2Q38K22o6DBmSYc9G4uCvSUmUKQ2m7gfquoHKksCtj1ssDULKk3y96op6hv6QGqwudfT",
  "key5": "aQG84T9a8VVwZtiSkDt8jMRD2SUHVkgcc7MuwStdjKHrwrnKbbCh5PDKxFozQEYAgdUzuzqGHUiwSR6BYyZ7PkD",
  "key6": "28MkjKRmxnTb3XcBCe5VicaMVe8AjbSGKrWod8GV74FZXdegiwNH9ggU5uJwpG7FTZN2SxktCU2DVkf8d3mUQjqi",
  "key7": "iwT54M5SAaDbVB7fLwBoWrwqZacbQFTaaCzqU2veekJhV6936y276Kn7H4rF2egpZ5Gtx8AMJLWVfvY1bpJWB22",
  "key8": "3GYbxdL5miJWxmKgyas21VoaRJ8TLPPJNah64TbcXYGGSMmBBcSXgMq1vTVndqj2MKkvLwp39gdbG4x9dGyfSSqA",
  "key9": "uP9s3FpkxE1i3g4XQFdi3phdJZwZ9PWLzRB3H35N3N1mM8iQ6fyWRdzJt3EdFBfe3wQm8Fzhrv6X2a7gMGx4nH3",
  "key10": "XchR8S723mKML3Se3og52Q9RgEedXouxVFMbnA4PDjKfHiPSTC1N7AS7F2qKnL186DyDSUw1AvFqETPqnx7Sahc",
  "key11": "5CoMW1indYPvqcn6mEoPVVkgQKyVLDY6A1YWnHQTHY4zCJefg5jhjsCPyGRWZTTmMh2HA9EZaH8xwTNxneSFmgMB",
  "key12": "MZuRW6fLmKguRALZ8sQbssqKVVEypsTg2DrQJYG8JqA9s44ARVt53x3Ce5sxUmEuwzwqnct3BfDvc9LnYG6bDJ6",
  "key13": "gaEwkqapWYPRnztTYBBVjcKfoftrdfgeongcnH2FrerHKtjXHUVDiqzu18BP1B9wjBSeDecxnGEEPu65u52m2QK",
  "key14": "2RnZ1SBKLYJZ4yUGKaw5XDCDJgFAQ9sqH6gmDTr647jNNUUFSsosXffnV5CffsmUoNPTh2Yc2uKA8xmTykT23TBr",
  "key15": "4KvsgYfXFV4WoXdbhcf7nJ94q3pVx8d4rP5bFvGErN3so3bihw88t511jeucTP5pvkZFMSuccAz9sPg2Gi8tAfuJ",
  "key16": "5N8DuvUSdCbFUavWiwy4GEoMadmnAS2tDJaiC3eavdX68y6srz6eZFg7Lx5LcArkq2KDHmgxcRxDXRiqFPhv7gro",
  "key17": "4rYdPpYKabwLfZbQSMkWMqnNqb8JfSUpbd5jByayFHVwVZSxrNbPPZW3JSMHaiUU1YpubA2fMEsuYnmVGWA3zNDa",
  "key18": "2zWHqYipR2xaZF1seW8Bs8RXnU6Zc7GQmYAZYWy19hEdp5kpgAHAc3nH66MskKbDTavrzaDW1nvGkjd4SGnZnsMo",
  "key19": "4f2W9R5gKkfmgAwuMNm8WXLiDbqp5dkRNHNC2ag8UvPrmTbkECoKUYRn38WTeiJMDwWaJ1kzzPEP8ULzn21UzHuC",
  "key20": "65CkGujPy2SXtSwkWBNcR5cQM3REPxMG4ZEjpf4bn9imtBho7u574YoC6PKe8UEuCMnA2HHdekUJKF67cG9FF91D",
  "key21": "9yxTnYGTThs4D7v8Haymm46RD2cb7VRuPYZCKa6fzkPgcH3uVzUxD2sijs8ievsQB3jq1EpJs1S813SJVuoMw46",
  "key22": "1CTM35C1Ea1smbFucnZwEmPuhk3EKAdqqtdsxA4ziXVVfu6oDMbt2W4EAguJCNscMGrbdjQQignfnjK9LH48xgY",
  "key23": "rXU9ZbFb4vb86uubSYhAFpZ1uWynpnMchCLdnQtwoyc2u8Wh3Z9zPkTPe5Q15UyQpbHd3yoV8jotwNXCJ6Z5bjb",
  "key24": "5GoHSBswxB26KCWSUr6f9rQsYBSML44PDyAtebZE4vWwkNECB6QL3Ev1m4EYzwvJhMnDaLC5GfdPLLE8ctNAr1Lz",
  "key25": "5Vqqt6TJbWagUEqPqy9TL2DjMiUDnnRtWbnoGT9dnEYu9p3dr6ChiWyA2fpXycqYLrBt8gzQnowZ4TnmwKUUuF8n",
  "key26": "2wj6hJ4C1ZXtjjsvHcJPQHMsDy3QshNkezSX7Ujz61T3wmJDitkvWcVgMBvEpdiu1MJbKCs6Ltt5CB4wGdJYZnoH",
  "key27": "4xRJrfE3Yj7jEK3WdyYdSSsVrx6oktvFUTEuGvPLLGsezndBFxkmWDYvZcdBhCHyWYr7tVpVPJkQt1uT4gYdgNUq",
  "key28": "2gtqEEAUHt9co8fm3RzPuJBiKm1YCdDRq7owhKXFreZiErjDx7d1nuefP1BQ7TYejoktQwudFNaro3r4j3yC9w2s",
  "key29": "5TDFQCeJ257g2TwsL2J6SwUZKeD6EuhBsvVVt4E8qJM6X9EwerqxC5VhqWw4bxxswoe45XYs9nuXGWw3h6JVZstY",
  "key30": "4Nr1RjBq9UbN3fqRefMK1dcKGMJ8FUeMj2H7VtB362cBTFTvaYyrM7KJXY2gf8G79KgJWpk25j39AE7oXsuxoCoq"
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
