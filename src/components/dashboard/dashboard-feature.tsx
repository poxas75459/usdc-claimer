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
    "5NFNKU8ty5GzhNmpWkJWs4ELcWp7JyF4gyKg4JA8aDeYQb8DpZz7vt8CQ484TAzKBYx5rz7KVyzbFeRAZABm8wqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pm4ehmSMBzV75uCmnWW2pKhVWdGUxLxXevwJVgQmED6NNzBuKYapZLDubLyFH1Dmh1WRGCsCUKoKscH6NTU3s6x",
  "key1": "3UNgB9MtuuiQWem1fCXuh4tijF8zRWxBhBppdMrnAwCxiJCBS2SrbGkhehAhcBT4uRA75BD6CD35CjtMLEoKpFiS",
  "key2": "46W4X3L7Bjzmb2A99RGa6uStY5pz1BNPMnfxz1iaTBuNv454WNUU3QJgVkrvATCoQx3CYaTq2P61MFhW2LQ9ngzp",
  "key3": "2WWwdEQvk7hu4WEFUypgEYSu7AUT4ERmhsdzzgVrCeGk3wLu7GgJ8NahmdgoFDjae8JTWKP6nb1efnXvDNEZ36mL",
  "key4": "4693rszx8jzEUhqKrydLbkBGBTu8CshsqftM1oWmbdrs8yDGLZ2UpCD2CMR9rXwkWLDNwuAX5jUcDAp19UzxLmyw",
  "key5": "66Dz426AZ9XB6jweWBDBfyNYyd6v9PEwKA4EF4sA7Xv1zkdsHoYWQnRkg9YDPmfXWoy6AHZmsFRVMBW4Bt1WydYZ",
  "key6": "4KZmb4GE11JNQp5zPjDRTLVS8SGN31nfEe1sP6cG6tKR9evvAQGid6XSyD5ugxRchuLAL1JDCyM8WSRHs4h6SQ9S",
  "key7": "hX967XdBQzb4wtzWheKVAjPVgBkLinezXh7qTsHKsTftFCPyVGPLxZzpQxdLeVC68XYPpwCbN23iLyLLmHHBgM2",
  "key8": "4XaS9SrfJCV8K5kw3izvvXoGgZHaLgpPUQUhYzf24ceCpFAK7y78pFxxE5hpkGaav4doMjHmbnaHgQeGX9iBHJrL",
  "key9": "38UehrZpmUZXXbHS2RJVMrDPjGGZW1LJT8JyfNJjHKyYBE3X7atdr1FZxQ2LEoG1C1mJHoEeg6GK4KYQGMCJq8TJ",
  "key10": "51DFvBnzMG4oYCMtnohghj2KUnSzcMM8rWddYAQ4ZL5hhm79YX6HVhTXvwfR3gQ6opiSstbL8eudYDUaFVTrdw1B",
  "key11": "4ZD9qUP5A6XWwdSaKMju1Lkxz6FMDc1pkXxZi2mHMiGPQiB8U7hbi2PjYxCEkoSq1rp5xG5pQdssgDHCuVTwUHhH",
  "key12": "5RdLMYGhWZM2EA51LthCdipjcS1Xx2vrddWqsqggcrrGSBFnfwCAaHJQUi8LDvFTmg1QUczGeiXH9L3hDGRV2ecU",
  "key13": "3TS6hwQkMLdTFegFtS1k3RakUQ7xLzaAnYoYwQ1hmyn4eqwLYoQX9U15GenbVyFQ2zRh6P3Vzt5WxzEuiWDBYXsE",
  "key14": "5PpUTWePqeQWG6FjK5qmaQQbNZVAndQaYeqNNv2UNJ15D6i1DdKU3VVYxJ2tyZy6zvprWqaAY3qdJu1R9d5RECZ2",
  "key15": "oDwnKdWGYoHQXUM6xR1pkxqCeq3zsJgjw7CqGs3nSZC41rgm65pyMWW734VWg7fRiYCYTzVvYTsKjNSyFXJ2ZVD",
  "key16": "32gDki97JmzNwZN6zmU4Nx8LH8kLGMTmjafMQjbb3YhuitV1D6DhKYKqXi3EmeU7Mv6rEHqo7F8brAmQMUe1Bmaa",
  "key17": "ZRvhGLrCCnLXNBr5jMC6YHgvJHj2GV565q1w21bLntA2tRgBknNRMxzMryCkMKGTA95BcGcEsKcKDgZ1bdASwNQ",
  "key18": "4RB8R2mKhzWEsnYgQxFng4S4423y7h9H6p868PyDfZMTgbh7udicy6azRKJxDeGuY7YfGuF5CgqZ9JtMrFVBiq4s",
  "key19": "3VgBhh8gd6ZNvozx2Eqqc1BGD376yURuB4RFa6WA2pcrTXLtMgrJbLFF1azAo4rJeXhSvuo8nbreTZmEfJFqVRVV",
  "key20": "CwpN6roJr6ipyzgnWZhDAj1kuuDCL5xDSsaAzFRFX8qCDBcmyuJtG9GrtyThjb9gL3j66FN1NWDTdycy1TNGkTm",
  "key21": "2Aa3JSUrhBEhb7VfptycmzqQJUxxhMoYAhDBUHPRDPTbMjWdAm1G2soxEC7NdrpufDKdSUGoyA9QarcM6o6UyTXG",
  "key22": "4SpUC9FVze4LyzVTguGQtfSbZPxy8mYWfybHTS8NwQ5RFtWugnLnko7kMdmzqdGfx7ZVqiBVTcskRYARw3H5r5FH",
  "key23": "4dzc5ceNDfMy6QdcVWYsdCUUkBzVeiUqw4Er67LoXkX4kbQFHHjLa1VCnvwMfjRoztYhtR6SucjwCGHFHrcnciVj",
  "key24": "5ZcoEoY5PXHu5iGtk7uP76Gnz9GYLmcr86BUmc1QtB9pfL1TP4C1Lwpa1yGgCh8ULmfdSgLkGx6yCP17jADw3Vzu",
  "key25": "2aVjrwoR2CJZabAT4F7jJQrLUDNKwkVFRXAZvaPTSj6iSY5cDqSxZiHzmoZgKu8Apb28Ch9GtdQRixsNe1UQ4mt5",
  "key26": "4uv4au7rY1wiAbp7J9cwwnyjapkNud16hR63Jgif4tTpvoi2cxZMDkRh12VoTvLboa9i8oA7acH2B6Fm2U63tchC",
  "key27": "3xcqVW9UTSvvcNX4kat6ZPze2bUM7KU6FM5DtgmTGKfiFAcZUYbN9M8hvzXj7r5531LzZt1MPycPVEkUa341HuG8",
  "key28": "5irwczcsCpVgTyY9kVnKgGQ8tYq6jreEC3se6uhAJMhCeYshsgBRCsPCdfBpgi86MgevmJQeLPoDjwaxLNYipQFL",
  "key29": "2xAbq6gwgK9ashrgmt2twoJdMHNsh2ippwVFpfaALxmTej438uCAoq4xX6SNV27KKkgBXT5xsskYYw53uRZEHiBg",
  "key30": "2Ca9dTBp6k8W9X2zb861fzui1fqjAavKnARoHqgdV4p5XsVNpr7PAV8o8TQFLQKPEktytRJeYp7g9GktaZGNu4oX",
  "key31": "M7cxhjDZd2LvQQbHahPdaGXeS79QjrF9hH5DPYajJjnBP5edZZuMyE1B9KJMzS51uczfbeEFEQD7CsZoLYS3Jxi",
  "key32": "2T7r42xUHS5aZv1ZoBBDM2jwob6Q1DhCXgkSa6XALfimqtCezphAMHHoYQVxvJsXngFox2hceD96sZoZJx4cGmRk",
  "key33": "2GtePVXenZn93QWfMF6e974yoysQvupTFVLUXCtEUpJEf7iSyBY4aouYq9o4Kk6r2vzGpmJMukFG16ezE5xxajVx",
  "key34": "3eTzFmEKHQfBTw9TsRG5vx6oTLnAErV5tMrEVX9c9fykWs9pU3QgnmKyhZa8829Sg2N5EPsb897qm8gZisJwFVpx",
  "key35": "4LLvgbq9xd7vLDsjg7xnzFbxxDFCmoqAyMazRZihtKZ43QuXQ5jdhC8kDSQck6fvMtAszdybrwmA7GMT24df4EJ7",
  "key36": "212eKsWZXrAGFhcxJCYvpMWnyu6GDgQ83EE2S27Uwd62w7cNapgTwVwp6RhbNYbKDYH8n3wcCVnbcPMksd79Ni94",
  "key37": "3L2TteLQzJELo4EgMZruCW61stbLk8LhCUXVHJi7qzhqEZoWMG1CutrVAcxcD4p2ksz886CbfJksAyjWsBYZX2SY",
  "key38": "561BVEoohZxxW3KhhKRtapyYiB7tP65aPTHibomeG23ZyNCHNxXSpjVXTxzWqea4bp55235Qz7f6urZDZE83n7Fs",
  "key39": "5mXxiFx9Hh6jpKEJqZvnJq6yQn6PpkE3chV4RXAUKzwjqCrzL8VaHTCT2RJp3VPuuwV9HhiGuDVc9Bcm74KkA28P",
  "key40": "3yPQrteLD4bKwSC9gyJYiBFBXjJTXsXxTCwSx3HJN6Tf1jpY8kLBmuG8t8xBL2jCyW1ypcstLZKToC54f4FNoZYQ",
  "key41": "56VxMmHfzze7tHJxtAtgEuNhCzhwjf756yU6RBQt2FZESU9MVzXAMit2SiGZU4X7Z692t5Nx5wdy2zA4teTCF3pY",
  "key42": "4GRKxbTJgEtaHo2uhTqv6UpdjA5MC4gmEAgSE44y9NdMkzaqnNiHnoj7wevvQUurvC3smSNxZRmk6XW2bw9pHy65"
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
