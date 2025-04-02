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
    "3r4yPGCrMbJXCTW339tnuffSqdx2EwbGb3dXsumJGCwfXxNUbQ6Phtv7MPhTafdVCdycoNZ5x9qYzYmzaWDbGQxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zqB6g1RPPTeaDqaGAweFCdukt3dKnxN5gKWfProy6VStTQjXP6kfThH4fbRUyUgsypBPPZtaPh3NprdRppDad34",
  "key1": "3uhV76fMFAAqpnbGMCsYXB6PL8DwNukM5dZDAqGvAdbKSPhDErryFUG6dgJXk8QqPHNrGKLVhoQ91Lnz5xA45ATP",
  "key2": "5BswLmbKdqgv1crFjCyDKjBdWdP8EX5a6E4fLFEXUgAb1BiZpCaf7fbU88Lr4wT4HMcPeWrReSJfLsDr76RHTnj",
  "key3": "47FZvazTDhACC9LNy3KkWSMTvCE8QFi8Zex4Tv7fZVXBHQaE4whGxHQH81q1ALDQtM7MFgLarGPks5LkJ5iPuywU",
  "key4": "7JpP14GMdxaXcbd37kuYiLTzFe5CzUbGFcbtq3Rg1NLqJTPLdHSaQp4MH383PH9sg49Gm56EJWi9YdPsHpUMpM1",
  "key5": "3LeDqv87tSb8wS65NUer62WKYv8HSi84A28ZxRf35kCc4v9C7EzRXzJ7eLnk7yxDPQG42eHBETuRobHtuUZHsv7o",
  "key6": "56E2TpF47kfxog9YyDRSda4PfhQqw7Vmp82BUEZxZapMRzzQbQbZww21s7FPK8LNnr8c5cxkCuzhtAhLFo9u5YKM",
  "key7": "57URBVLk9EfDwyhEyUPtauSiCJa8MaKj6VsEWKtbG1MDu6dMFnz4gtjATjF5eKFdF471TLRpCzwUosCJdPchumoh",
  "key8": "3a3afoRwqohCSgiyyF4jw6aqrAXi4zpSYTFBepi9SCUoHtj1rYYHkVPyBYoWSRdZSe8fUna9nckeRyX1dN4phWWe",
  "key9": "25RtUnNoesaJeSf7qYhDSPBD4b9SjZQ7EB6GKX78ca8fBifNeKYKFya2oJi2N4ZyVxEQGFbVFgyibjpACZUcHW5q",
  "key10": "2JwodQue1s132VEx46F765hxkWTVsekZ4udLLsSEam2PT5RuYaLxEkF8PQDhKuEgELJHv7HFLbArvb7scUua6grK",
  "key11": "4XMqT1ocG6PX8vizwHFNe2soafQU31MHfgSBBYbdWpG4VEhasWDzGJcvhYf2zoJvfYCE7SweqBqMHFanbHFJitSP",
  "key12": "3Z2DC9oZgNtRHoxUp5iFc8u5GCWAv4Z2R79dZhfMh8HMBVmwnSBaCsww2A33NXVgF4eqbXvHEzbw4KHHy9rRdC5z",
  "key13": "ZZu8zrw7ktnneqGrdfJRGkrC2xbCXyXqDdttRhnr7xjyniCmHii5kdqNED4FNAFsZh25yniHK2uuzVgv3LdboVE",
  "key14": "vBR8mBBspxBJsrkCxtwX1kmPHqmGkXYjpnB2PpjmJxy1oKU56GQ6uqhpbTh7wDfg9F3Mtmmv4j3eUmDHGaUgTQC",
  "key15": "3J3oHRGyZmq9v4vzjfstYPK9JAdMpfkdSEufxD86bo3iiQX3VXbRzF6zJJhbCzzgaR7MCZhLm8wFDR6Y7yfGNnj2",
  "key16": "5NytCWVpWF8q19ee8MUCWZzF2f8SEg6veeUnbzjcJurwX2ZnHaJ5qhPL4YXsRWyQonBzPV9Kg7nLx6k66frUQZYd",
  "key17": "4TAW896AodKUnq2weYaVVt9fEmiSA4hcA3Rdu9Nu8B4PpYZ163vn3M874NtbotqNToYu2xca9AyexGJntx3YiG8B",
  "key18": "3wcYorEgPCWiyUmbHTySoTr3SjTKiyt5DzKEGmNHgtWxTCgXHVMiYEwxY7QvPZqjdAxPmEXkd7FwMWV6HhHyCeNG",
  "key19": "hpC3YTn7ayJYfx1A5xCZQ3wLVzFZppVpwbXVmqRhs6tn8ckfGJZZnS3dy7izT68NyVwNeDbqrRCmsYtBRS4aWX4",
  "key20": "2iqX1cWcRvqPBVgeFRSnp3NsE71NMrmn7DasBz8o83xhmFmVEdwFKqTDuV9zPMeuVVBLhYmHEVdSU522MzZtWj4V",
  "key21": "maunhW87TxDhXfkkapP92ZWATGK1jRJ8KKHrP6CxRyumAgpeU8e3C1UmWcPQenzKtSeB8wNUEouB8FQyGmR72cm",
  "key22": "4QfWj82R6Z8TPQynJ4jhZqBPGuJa8U4p4AAPD2qAjbFwgVBzFrkcJJxcKRvBv34sX764XuMRELfHNCiTX7fBNisJ",
  "key23": "2m9o6D5fkn95QGRSUpuakV4msz6bKReLNb1pLa7gZs93ua5r4nkSbH3KoRXg4fydwh2AQ4WJqRrQgCcRXcuGVUW4",
  "key24": "LgZTZJytgrUzywH1VHLhB9F5vM3DNzLMRf7qVWRRYrrV7S6FNvzSTrdM4PEYWxLwtFDbn22p8cjsTfMMFvEf99j",
  "key25": "5mkUrzEoMG3dKgqT9Nu5db9HVkXDUCq1iHv8Da96c76Cvrn9akCRuS9jSSp8fpxYPm64T9Vvq3LwSL1hV8Wrynd4"
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
