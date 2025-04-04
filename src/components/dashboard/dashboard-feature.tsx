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
    "7fpuhf51J473a1qNarKkzviP2sURcU9Sd3CnVjayw3YdHLSFnyWtkGvjJMeroMhDmDmaubN4GwG1S4qcrMys9GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ATpJCY6p3BYSx2zWoUCJmvvTMMncxxiTDx5HZaMywrqy3DTXPMJM1WKndfFQRhjM42ySRg187AuTovX44gA25q",
  "key1": "2T6KF48VapMYoydcmHwSqGqsru3CWoKWbiPFyFakLruUBZMHTN1kaoGvDEB26jxPvTTHpAYFXVGk9L1X1RH68vBi",
  "key2": "51cFYGnr5uNSms89emREhmnMPVeeYNRJp44jGrycFjkgne9YzM597VCJGJZNwBXuJwKkzNBBv6kzmBr9gkeG9qWz",
  "key3": "2MVzBjoZviYTsY4bRqaGM6Y1LtMX65vX5RNpMTmuNQ88sLyFWBdPBcbfkoofgK6dgCCfeVeUzvyB2CftU5Mikwbf",
  "key4": "62S9JwH8qQRLkmAspSjcKsee9PBp4VtmBocekWTorNqzWtJ27AykcabEyaGdXAtuKZXSqBCmBZiuvk4pwtmE5vfZ",
  "key5": "3JP1NXjv85yR37vmGt9pdJ8YsP6FmEkfUeCU9tzqCdRTqnEDD1b1P5jNCiwwPZyWwjG8C1ebUgxgErgudeCYJwdq",
  "key6": "3jGGiCfqsApohSwxKsoQq5NHFywyEzSWnj1Yq49nhx3iYSSZ4RRXpeLWSogAcZ8bbQxAVY9Ln3p2Nbanthym9pM6",
  "key7": "5nMMEkE8rGmUeG4Z2DY2BXkeQrs6dBT9jw1gufutAffELwbgTLTUe6JPp582u3XjSRLRrg5A8djCK3u8Q61HZbdf",
  "key8": "2kgprzPuKLt7STguRzDooAH9Gveuc3TiLZ7xEqdFN2rKwEEX4fb8QfhqjA1UeBRFZMMjyeQwhHF6QU6abqraM7yc",
  "key9": "4Znc1gxkGs95ssbZdWqqg8tghmRCPr4YPsZU9u7ZMvpZFz6XjsjRTSqsXvNVmBnwhVQ95iLRgAzThT8w5KvLSZs6",
  "key10": "58FPg9iCSdY5VG6Fp2zfBaMc3MeAH2kDeYbifbsXHN2HiCnTqxXCkVdBuvnEWcdnRUMwBG32UEApv9KeE737HjRc",
  "key11": "4F7QkEGwDxkFZoquKhW5eSLYBnRA1syHBZMmj141k2HHrp7Mq1F2ibH3YE1irfL82QVzCdFQ6H7jn4FmxKSKsnXm",
  "key12": "576j5tRB7WNkrDS7CJWotXPxA7krUaRVdxDqqSFGxBsRC3gr8SFKyMwgrR1HRHheFfiHxGwj1UtD1Vor4uPrJV35",
  "key13": "2VdZhsyjtrkCUMqTK4UZj9id8tZSL4hidwZnG39JudKvri38LVncJdHs4J5ZAx5j1HiYkcUkKQdojfpEoPHpyZPn",
  "key14": "276A28VY7f5MmamAvNiPD5AqSpzaxVjBdRpRXDB3hbk5cvvfsDFXjKTik8oA6Kfqa9M76WNx3w1VzxzvrZFWkvNm",
  "key15": "DmT6ZX1jD5QwfpAeNX7T2LhdsZDZqW2v4Bzdu5EQjA9b7uFRVMokNTiPYW1QvtTLcUxJQWKFt9D2LPMq8Z5cWzP",
  "key16": "5mrZqRYnk8FKALUABnKV8QUEd5yd9rWKvNz62zWWKX2tqJEd6G4z1vP4rMMQKw3ppP8svzDTJgSkhifQJuj7ox3D",
  "key17": "3ZYgBDzAa2xxiB7EAd8JojFX53vv8fAHEFQtCVq4RcRh4iUCpYMPZjEQ1erM9zosedtRmcWo5xKVh8JzoqK4FsDz",
  "key18": "5wMV9DpG48H23JkdWPfhNxuyBEhmjWM4BKtKFa1DYwM3KiihbdyGjZf7R3Gu6rYeBKJMd1Ru7yyaoSV2F3UojpNS",
  "key19": "1CgxGJeGXT4obgEoU14238TwH4qpVfK33qhsJ2rFWTTKAFuMghmTNjNX7YfnudNcsY827keoNexfdFcmXVbd6Co",
  "key20": "3JGjaF2WyMy6pXxWETpkMvba6gyiVwiwhLJr9Uohh2yAACNFBVBpfqrh4pNeLmZsfkd8VxBi6LvPh2u6BciBw8A9",
  "key21": "5AEjmKmcSWfa4Jpg38vaBPfwK5dCVANynrHLHGKAhCntXUU41STKEgLYDfHqQzT8WPxo1WrbXThytydv2HFrUDkq",
  "key22": "5bGficzr7e58s6P6xsTwfFWq3Jj3XMC5feS1T5oPJQuhxX3TGGv3KyQu3QB9x24uGCDwkVjUxQDWfQFPi4B48bFu",
  "key23": "44YhpCYANSdVD66md31CDfbP7iZGFMkRgYihJReS5jNxp5ZAHNA7o1Yo1cVaZT8dU6ZwPT8qmMeLvV8Zxnwt1wcy",
  "key24": "f1kqA85Zx1NzqL7PUrnAqLSDD8hfinhq78Q5rJyZqPXSk9ZN83cZoYKiGxbSfQnSkRJTBFX9MxyPp1EyZmeA1pc",
  "key25": "3ao9j5zQ3eVYqp33jsKYWywhsKmgpZSbZ6onfKNF4p2yGRdyapfhtq7NxXpGoPtffNFnWiSDvHbtNpc7bAAanPJm",
  "key26": "3WC3DaPLLMMuGNtEmpfbd56iTw3MG1qzAPR58a9axQC96sPxttMJSMKJ7WGXZjQCBafdvCRz8KYxe5nt6D2JpT8h",
  "key27": "4VXEScwaJdzoFF8sKJMedmNUdnDkPtT4fF5gxHghxk3ssjKnizDMgPPSh9dJZDX3Mb2HujX7aAkihRzghtc4wqrq",
  "key28": "3jKZQfSpaGZjih1F9ohwLH44saduUe4ubXfSQRxQH696VdoLgq6VK2n92Fg2KvHfqKG18ai1aWWvfaWFTVo3563R",
  "key29": "3ur1ymePqUKepD4rKMRpXKX1htSFKjghzg6daV1bCi1XhCu5PFJ1qutxjEA7XnxBi6KyGyyJ2zRnbtwebQY1WtEa",
  "key30": "5Db1prA1VkK6m8ihWaUHgjG5RMWLo9qU4JUgepZcswAcPHAQcgXHEMDAp7Je7ZSzmgePUR9SUaGSpwzyH9tCKQ5u",
  "key31": "Uezek18pQyiTTbCgqaGiBPVjAiJdJW9GgALn4VVprF4prWL6ZZpVZepFxjryvx5ybmWJgXYAz1sQXbLgNmYQPpF",
  "key32": "3Fy2npNQFrE6g3wcDMRRWuSAVZJ9nTboDYLhSNa7VAuV7MM5cBHhSnVXUBkLfHFykRR9gxKRYz69x65mJZWpaJCT",
  "key33": "2v9DoGT5dQwqXTbWQiUX3aBvjHCePNfESfs3MhYeWU1WoxfaRfhdY6QHpst4EXmSDkqmrnAUYmMobqWaKodSwVDD",
  "key34": "3cRpna45wRixvPd2sMo8SGU2b1uTsQ9WS7MiD8Xjxw5nZyQkGQmQqxsgVHR2SJpn9FPqUZQYWF2LZuDhPbWfwC9G"
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
