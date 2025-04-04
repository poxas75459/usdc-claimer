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
    "GkHBf3FibwkbSNSGogxz5dtbaCXnWh9knchttGk5fjpmzaXhFXGD4qQcYwhrnXkZjat3VAWrNT4hhYRYyjuJcPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNkK8dZGY58e5MaWmhsW2fowoWtuhnx2Z8gMwkNmUHiwyjNDkWK4TiHdH1vtiEi2Km2V3eCot2oBYqyswJoKRyr",
  "key1": "3KWa7kHEzuRRjWcSXGUL93LsEPKmSax7DvLHm8XrjU6ENmYjk1tApUeFAJGJGCYMbWsGfBn5JbJwvvHq9ymSkWza",
  "key2": "5Rg4NMnLKxKTbTgZUNa9Lu3EAkKB6HYSpr1FfPGSuddFeFpbARp8kjZg1UPvSwTYWuEgf9Mk34GmZURCfjaXmUh7",
  "key3": "5v1jXC6uNyviomhptfigLd3JaGEjWR44Vt4HhVkFCCHNPmZDiPSFCSprN48TbPGUPcLhM4WS29B4PzHdFDG6Yk9A",
  "key4": "5MEef5n1fbHw8oroCtWV1g1dd2EUjj3QxFW62zMJZ5KcwSwWqx77dqEtjUAHxuHT7UVeP6ZgyEgAtCp97hSGXdSw",
  "key5": "514jc5y4MVTvFHpaW6hJy8ZmCHVDkZmW1sMUZD8jinqWRuBG4dqug7q1MbJCHQw4pKWiHymPTrYZSphTps6e9uiX",
  "key6": "3yMYV2ZrH5U7Qjn9xbqM8eEVBwcrXp25nC4HjhSfYs5pAroc8aHGA6v76TfM14qwyX3kLtMwDUeBaTinE6TThc5Y",
  "key7": "4emNqxuXhGLbAUCarHPkGidWZkPQXuKKahe9PS31okJ7eZyuCmmXQoQU6T47xmzkf3a32r1M2nL3ub8tsV93rJgP",
  "key8": "3KwwJvTKcj7kDtEvQPWZajwcgKK7WbBC3WK1owRrcg6MHEGFQx94G5NVMiiRriqYzJs3ppmLodyMSo41xVDECKfm",
  "key9": "4WzQ9MzUQnjaHoJaP4aX6TieuHpFAsto55c7djg6BiqmTmB68PRGhY3ofZEPv3qaPCYWvy3S7W421AG2wZ2AsBDG",
  "key10": "3EXpD6c49brs4zrwygLxnuGQRFkaN1zLTBsFyv8LYf7nL9tRzcduSKYtJ65AnGLhknHu4ja1hVVUKin8g75h6WpB",
  "key11": "5s8YNbRHhNLfG796AEgoGmQhWTXbSeUKFs9qMTcQ8wzzg3iQWRvzbPCAkavv2vNvoujE5Xf96Wd4ANrxxFWi2C8F",
  "key12": "4ViX77TjoL61KRiyzKgvtBXrPShRbGMoy6ruM1zCBirweu627QksXod8Tokv8UyiBZHAMV81c4V15NhN1WGuHBAd",
  "key13": "5dSZTrKr5ov2nCu6pxoqtMGnoMJoin1CTxLyevmB84CCEo3bGTaq2q1CCpAp7Ka7NeUu6Ew9asc4G7p7ErjV24zA",
  "key14": "4kuircg44dsQqytcEXobEZMPtseSgoewiJNSUXLu6XDgZkjWstwLCY9owPKVZ6Wn4vzqCjPzswz6jzUrSxJSNEZv",
  "key15": "4QLsao6Y9gLupqp8eeDX7C6azRyhprRWnjbWoKPuin3sn5DR8Neno2168A6mXA8FzYdG8t6KvTV2qfnVQ8b18WCA",
  "key16": "5SAqPh8qcfdkThvJ1yYJFk3GLwwn8d3Li5QNGmQmkDULN9gopm53ZuUv2Pnu2noYFDuefCbpDjNpBxsfeFXT2N1T",
  "key17": "4YoMxeNUJspfxDpCpVE5ecg9VWzDhTTavNkkcpccENE4QmR4QLYzYrK342qiZR1Zxfh36NKnWmZbnpg5MCjT5xtS",
  "key18": "JNdayPF4hVPuTfxoJFuYE93q6gi66vCPYB4AkK5XbknRn93zYdkcqJeGSSMWhCWm9GUsMfgLVNuWSXGZ6gMdWF5",
  "key19": "61QVcVvzRU14vUCdnxSguvF5XU7dQ4V2SXHy6ZUYr7M7DBpkbiY5WtZmp6vsvCwcJeTocgz1XJqTaScuWUM5Rtos",
  "key20": "5UwDbpFamYq5GVs6QRYsxtkdcYaid1VZmyXE3wuDXuuhDDoJ7DnGFME8QWzdR5JXLR8MrpwcZBRJiDH7cExEvP8C",
  "key21": "3idh4qpim4JuBZUQ1aYAEf3DLvjn4V5GLKqsd3fw1py8iXYqBqqs5voFCRH2ycoVbTS7kC2gpXa1ZrbBqbGcH6yp",
  "key22": "5MdsKCpqXRHHC8GKFzhApBdwSoDhpD1mae9oao4Hz5BZgsCvgY8t7BLgPWcV1iYT2Qwose4vTA2n3NpbHh1oRjNj",
  "key23": "41F7fnuoDiiiLep5V6D6coo9gvBEFpFrvueUFgXyVGugSTatUsNqr3tgZSvwm5MCcTze6zU8DJ8aPJhwsipv9pqJ",
  "key24": "kX9RDZp967gR1i2Sz74Lji8UFUJJ1EiQp5djJnyQx17XeNBdKW898CLmqHkyFZVJdPEK3vEW4zPxCiK2YyvDSve",
  "key25": "5DZt526CgnVcoyGciRALLBc7bJAdQC3RpkymCANrUQo6n3ob6gWPFn9EzxSBqZVgzedS6F42gbwj2niacGPRaPGf",
  "key26": "crM1TfB8xNMwAvpsycbqSEB7tEa3Z64Q2K51eYQ3GDoeaH6MVvbpuLDszh9jYse1PCm4GSst5V3a9eQr8Tq5hQL",
  "key27": "4ySTaEqNKfrvH2B58Kh96dtuCRSMJbgurQKcsYVkWXhCGpKDJMHZ7hbvTAoe1Svb793VKM23uMhoz9GBVtDjjNeP"
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
