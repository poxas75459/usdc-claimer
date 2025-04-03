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
    "39ZdA9XZa5gqGS4XnbCKyHMXvPoyY9K2YB3XtgPeEbZ46zL4g3GjM9csU47aMJRV6vtW4wJJZeqQYPPsNUYCwNE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rYZQPjvZCnAV7ytG52JWN1DHWRQyVeAQmhS6VP4gKuQ7riLNPtiJTvmMPSzuvHnKu2PLKSUhcRToX8g5ZzrECLG",
  "key1": "2bTYZsfvQnUs325WFFSNf3oTsxfptfjb3yG1Aupu9pvDLEmnLR2cK6s8u47u9aFaRfNPPZVMAfqqVXZ8pbXVT2f9",
  "key2": "2PULdbzbE7HW4RHCSW1Z1v3casFLsMKJSRmJDMfqKmJcYGFHhiEUd88UnGuM6UAhP8dZY51ae8M6MxpnsiR7JxCv",
  "key3": "Vvd34iordw4FLafygVSFBvKJagv7nQGuueeRqsCWpQJ7e1zfkdgzDCMKKD6yAFU3CtU7DGXwYFqqksazZyRuwpH",
  "key4": "55CsMNS6zPh9VxxTYQDqQS1T2tm5qszdwR4Yhq4RUojJ2k2nsHyK2iANrEBYv2H9r9HNLyiFwBPAGWzzcgBMFgtG",
  "key5": "2LB8tJ6mgoPzuSVtMjbwwu7nWD2yDoKA27nmd8g1CCULLCwgfF3bdfiAwyqJJZqfVNYFch5MUUyKnGKJ9FjzXG9Q",
  "key6": "5my2qpGn7XCG2FS3QwDisLYhkkryGpyNhywPqBpc6tmTgmLszBtkvMt5SrqgCGkrvur8PrHkZJaZidDVaMbfBw21",
  "key7": "ZdACZjxvAZCFqVywz5BEqzP1YUvNWjmsT9WY4DWhaZeipDg264vGUivPVmzrKx4o5EGY8xuj3Ku1BViyyqvyZtE",
  "key8": "5ZdFsMqLRTMpR9gBBXhXEPotjg1njusLvamDT1tiYEQHhwpazpFQzXA9DZ2orksX8RHugmk5q6YmQJ86c9Ui8Sae",
  "key9": "2GT4v1bbyifDXKcR5wfERkiWQTiV8L3kFCKB5fXesL5j84BeRhwM5GFuz9xVWVpjDbqYvyTt8njT4GQMS8oBz71f",
  "key10": "RZFb29TLRQ3BpmYCev2BZZbbp689FAw1LgAApfZY3zZAb9s8gUoun5gAoJNQtydkFhmNFcdos9DHUffX4MRZucK",
  "key11": "3XJtMWLut7c8oPuPSMR7d7psxbRdCHLmjSdmfES9sKDJRTm8xdoSsHo3HoC43pTCij2sAqKgaSZy8oUesZ5LeVTx",
  "key12": "2JiJVKbAvGscZt4k3AnUcuqhfjKwca9uYxpkYeZhDbG93sFNN9266aGNdnw3YXpoh8wo25V3zV1bedFJorGqFQ5v",
  "key13": "37m2ecWpoHxw6cb3wrNEhY45fES1J1RYDBHQjKaGek2GGSJwp3XwJMj1T2bNoyN8vi44n76JzJVREds1pxtEVb8z",
  "key14": "2sdC2aee8oCHe229JTAcHf7ADRhNGVgzbAYSmGF4YURNzxUNRbKVj6TG3jLGmvf3cSNms29eGPSNMW5QVf8oWZX5",
  "key15": "65zRD195mUqdx8e9BndNdPjFjSXACaA4eJNMA1kYXY5fMwwrGsCZqhabrsDbModPQm5Wytk3FmMipHfU44nrUTX1",
  "key16": "2ewsHn7W3hARuSNAvjix7JSELxuh4TXmj17Qc3S3UWJgJYBnohYGew6XCpQc3ZKYeLowUo1SzMdjGNSCDMANJxvW",
  "key17": "gXD3DkeLaQ5kS37wNSW5nhXGJFKwVQnLPnbyyfzJJNjCZbnCbzmSmtNEd9toXXqNEHnYNXKpz897vUvhhgmoPWF",
  "key18": "WBAd1PNYFRQCyN8z6jJaEE8UaJDU6beZH8J5gvQnJdEAefGCaxTNBdS1cn2nDYbQCWLUoirssfAcNk8S1AE6t4d",
  "key19": "5ZQiiJHFiBDR2kGBPrWfsT9ZDh2XHQH8ttLb8HFezA1RCz8kuHWQBB8Rp8eLfdC1BURzFYs69uUMsksV8AvHkczV",
  "key20": "fYuo6sTziTt4A7k2d4iWSBZ2Y9xxucUPf61uJ6xgWz29w9gBEj9PDcs2M1sxw4e2F8bTedf9giWMrsZAcuooHiQ",
  "key21": "4ny8kd9Y1cvEP1FfN5t4RH658vVL9E3ATB7NJdYEXdJHdnx84fmgn7KARKvqgEecBMmZ6ArrtVUSLdMoi4QhZ6pY",
  "key22": "5gePRG13Wfu92E6JfxMvMSwZft8zozKHQ4UyWHTQofB9E74eWQdC5dxcJ7jnxXtiKkuSQpWjaKcWQ67sZC9xizC8",
  "key23": "3q6AP7zDGm4o2gZ3Hb3bFRsjVgvW6KzPgDcXmE9FdF5wWjV6dgNAP7cSj38QuQ1NbQCfi1ojYNqh7koFumZJgapW",
  "key24": "3Ufa9n6RPooskiRJg9MmgPPFP3zgUD7SXTb3Z5Syrehic5qWazSNzVnkKDpGYEkRVYVda1crKct9qUs4NqGZuiXx",
  "key25": "2hw3SwM6A89XMKDhTzEgcheLzbq5sVZVCwM7wZ3zViam1pP966PcAHEX7gGUtTvfpEM4QjcZwESTTv171jdg7Wep",
  "key26": "3qKkZU7YRfaqarPnvBBmAYoCvtKxrRsfNQH6xJWsrVcwrR28H65jQwoZYLy33kXzhfPq6fSLYGSix4pQ2Yb6vayP",
  "key27": "wWUV6uy3Vrn8o3tiNT88jSdnMPhHPAVnqc2WiZYU4jk4yxR9BsVrLjhZRY4SmCDNeRHQ31UaoMkU9qPRK8gm36T",
  "key28": "GwgYrJBycnUXBDMq5poLpVo9o9921tG6HKUtiCqLoJnbSyMh4Liusgvjv4TriCLVFdwRQgv27m9jF4qR7HpfWj1",
  "key29": "5QQKBiRe176UxprknH3KAFWtTRTmVKZ91dbWB8JdLcppPiddyqYPVpj3vhW4xxbf3z2Q7bRJsEWBFEdZkBB9y8UM"
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
