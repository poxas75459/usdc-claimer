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
    "5TntfPZbfG3CTsz1NeQd8ec9Ha8Qoi9uiHtQAQ6J9uJGjcTcFt8d4gVq2wotku3vqzPH4CGHzp3n6savBMR2AmcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x57ryNYjw9fHfWhXFC81KvJnaUzZgF5TQJorxZoeqmBPYch34RN1YzVXkK6HZCGWZTAH9wePkb7Y2r2Z2efuVXn",
  "key1": "3EuVYQNjqkTCSxNDvsb2q9N7M7KwgjRgG1Xyp3wtDqkDnkVThZtVu11dVavQysYig9CpiyyNuWLxUw7xiedhqRbQ",
  "key2": "4nUrifx14GJpsCJWtzXT86QZGYoZD7QLc3Wjjz3fjQEDifibe7SftF7UYCJsxxbEtpBQvShcrQy5Rbc5YNnaEZug",
  "key3": "d728GDU7PAprbdr7jP4pwb2EoPusQrF7tyeSFC7WDHs1tKvT41LWDZpYNbWAq1CGzno55CdPTiPDxssUDtUcvge",
  "key4": "3c6hi5ke9Afc4KQvWh4dTL8SCpSj1tY1fjWdiFpytiYPwgN5W4j16MQTNDBvwSMHspTscvhqqDjsFqWEos26fSJ1",
  "key5": "5RJMVjxGcvgzwfjGvgfwxq4U3Qi5zod6DHqrzS1vxhY9nHhSu5ZURQXfJ9djN14YpCM4mykuZg2hRZnucBeuKmAk",
  "key6": "5hUn3akY4jQsGBoHMtHUcjnFXMcyoASdMHHa9pyweTDLnXogLzgSUUDAvLpGBTWwJpdgf4BMvn7NoPLEGcurYBTC",
  "key7": "5Gx9jaPiqJMai88guVawWdgwrQkWaD34Tvct84RfXriYjJ9iVhKpLpwP8ohuPaV3eJJuc6hDGouPGfZbEpJrnRtY",
  "key8": "2qFrLFxQrRfecpEMoEcia53bnDfCuYH57vzmkoZF2F1HkVrQZqZXtNyrPALLsZ5mLZXjDjABeK17VDdg9T2fTaRX",
  "key9": "3BrJs6a3zRkv4bLExYuVBSQ4dE3gh6E4GgWzo2CZFpH9ZRh7TPLRNxxUxVcSB9U5BeTnFXMGKvAPYqQRkBHQvj3j",
  "key10": "Pqp25ZS89FfEa3HaYhqNnggYDpvXJm6qdnwZgxLDvXQ2gMvGW9qnMDPt7nMaDz7SUKTYLEvKLQ1SzDrdNYBTxje",
  "key11": "57fqRHteLeRicTg2UiiXLPbXwvwRJosoWtDP1tyjWzeVpiAbDMniHWqjzKvWkjaBo9wrZLP8dtxNNzsLbWijQNQZ",
  "key12": "X9EpmnV3Lxii9A7YCWLRNHCR6w8kX86SoBAE5gqwC41erqAoVppAhRUxvLHhNFBRcwpdotBVuYdinWdXukRQbkk",
  "key13": "Nfvq1rPdkJSf2c7yUBJDS7wpn3pfQoi8xjSs5CuBERq5MWNMwq7CTsquvM1BXvcwpwso8QcJQvJvVTeGbuCpJmS",
  "key14": "2vJPRCnor3H1T1JAT4sqj1K5trivRKmFu5PtuXoJoPqMd51SojSEzJ5JtpuD2jbnuk9qNXQVJjgvsjEwknWzK5jj",
  "key15": "XtJeqQgFbFiZioW6HvAam2Z5SKJzr5wDAzueHaNGdyhbFSnYcH9D3DM8xVtDWRaTmkS5sJ2UA9RkmpXsxFhcKPu",
  "key16": "5khjkCG8Kbttvetyfdr8YKZeN6Nt7s8Zp7ndVcHPQSq7anYZfEqxXUaUdM2PfxfG1FzUf9rn4mYbQXtrKfCi6twG",
  "key17": "2QYhrfW8pm7RSuwZE2stgapgAShHbvtFsHrcvzniQoRpFVBqmPsh1t1xezkFdWpXg2ZPuw2Kf3rcZeUcQ2fnUEQJ",
  "key18": "4v9hsaXUjD3qtsJxDtkaAYMnayg8tzu96mSez17e5aM67wxrLmT9QHbfp4B5uK24dcqhxEgEErLb8hCW1JS467Aw",
  "key19": "236hPn8YozSYQiu1eJvfcPxWB2e4jwogSrPeq1ckbro9MEHwPKw4f8RWVjoUfL3HtRetJb9qky3nQ6awyCNGcfrE",
  "key20": "37KJVCJhc3yX8iyLAzZC3oxkMCKHbKnLUzi4gmBF2gMgvCc1k19kvyG7iLV2b27YaGyTiKDhNeKBNpkovZ8yXxLf",
  "key21": "R7B9yKsArE9Y14caS5xP8CEjM29zfngUpqFaeZgRiNNQ8DR2or7CDZMVLC4k5dN9GkoL9fodfDWxYEoUR4538Qq",
  "key22": "4bS7Q7ZsKEUzSewwi1jePtFA3YcNjqUJ4YajfcyRBCT3akHSx9zCUsrBEd811yfjm4aUGtfRxYXY3MAuj4nXhXno",
  "key23": "4ytSxSKyQdcGAAAeGgwxgfT8XaUs4qckUy3B1KunQ3QMVwenvVN79UU9MXEzgAvCHPuydpbjQk46zRKWFYJGxbBP",
  "key24": "23QJRnsV2Hn32qKzhuZ17xGrxd2YZanN3iHhE5Qs3rcW7bxZA4Txg1DJaedDiYzoyAEYtX8xWkuMX4PqMvVMxju1",
  "key25": "5bY48EN5kPd84RqMYhVKV88VyKM1s3azAJWEgKzqdKkPmgJFXkV3a4DmRrEVntzXinNxMMDyeaudJFsVcE4Gw1NQ",
  "key26": "3sBPJAiuxdmyAofc14YMLSm4sVUC5DesexZCtJFTusyzfZBHsguyD2ZFtZEuUDDD2YLbEX7HY8mMcnSnepokGTL7",
  "key27": "5rzH9EWuX3UQWWZjRq6kPuJbx63yJoFuLR5YZBx5nHa2XxuHzq5JdpnGeHEHmvVDWtEdoKrnZnxM6XyfseWUSQDw",
  "key28": "217tGMXptsr391tTtZZuu8HPeJJbtMMgufV7vSSoP2DJGbjUu3PSZGE92YYU2PemUhJuhtfeB1cNeZWqvpKt8zhf",
  "key29": "FKZmkqnSLsSGBDsr13npjJ1B4qko68voVFTFpBojAWxPAMAUACo4DVDYrpq5vZefn8bRQRst8yb2Av6jzoek46N",
  "key30": "jVF3bk8nvyhi8aLkdHZF7Vr1reVbmk8ax5FMsFXtuZSzDagXjuJDwKbcJ4hpaShca9mCYoji8QKZ1WFNZbtgLUz",
  "key31": "1wW8MqiXzHPLnmk3EPoJEx9P8qoNAz8QEXeY1Xp3582wMWRysubTUtZmWHYQti7JyQ6qKDyh6wzur9vHek87QN9",
  "key32": "5fAttstuJqrAHut2G3VuBa27QP97SQMotSxdLeZxaNUREjsbp3v5jrkFunGGE8jNhEavfpvq6RY8B2KMGcLfVYi",
  "key33": "zgtGz9B1tffByjPKnX5EiNL9yCCreTPXMGN1UbYBtLmDBqhNgeQ7GSbrEcZVXTcT8RaveZSQkyEHk6Y7eePiEdZ",
  "key34": "2V4bq3aT8aBSeJKY4kUU9Qzz42EYcPrLBqxafCURGBDpRpmaKepggJm8L1J3LLFm7VETc9i68ABBmjJ5dEbesPjA",
  "key35": "5bhSGWi8zERs8WhTLx3SfWPbpnCEF1EJfQqUMjLdcbms3mkhTbyoFPfmq3qSudQKh5dfVHpLKHTqjY43bD98xbEm",
  "key36": "4rTDLKf47CzWZkdACqgaqbijzdjGyrf59skfBMHjTDYiPaCVjbAPtibA1oc6GLmT8i4dmEnvciqaRXNPYTQ83iCB"
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
