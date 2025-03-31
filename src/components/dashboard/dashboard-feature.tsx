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
    "3VMXJmtzALWAWTsuwysCNjKLJmMAxH8J9dmgpT9eEomkc6YXt8NDvLZQmeeHXEBSDxt9BMfpRE3DuzZx98HN7jVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRsvc9wagv88um7kpyz579Y5p51u7zyBj2ypo9rFYa2eLuu1GhPmPzTwKErmM9psUkWTwqxqmBYtCskVg7qpPqM",
  "key1": "2Mt5VbvyAGSX4LuLQaayGAQEbkgbLnd5QVqspb27iogQbrkQMQ27RVZ9vJNbEQXPktvoEoBZjF9nnb68qMmNCUNV",
  "key2": "pLPmAoQYMemBDQe6x89PwT11f9rBino5Fx94mFRTCvqGfv9Gvy1amy891P44Cn473xAFiS3E2VVMMyg5DBgqNYW",
  "key3": "66Ms89mnYnugzMu3S1LWwcF1Z46Vn9kRT2DFbn3he2gQ3wA2bFbc5S2P6pssTgFjXhWJZbGRM8zvdxfYXa8sAS3Y",
  "key4": "5hXQDjju8Zcruv31xMTD67CSj1AVo21XSLWUwKwEtmkntjHgZ7yNVskcdRAy98fZbQtbPvtJuHM45LX1TdLiYhhc",
  "key5": "4wBnCSvq5KQtgpWgCG1A4QYs1vAxWnPAFhm7R8ZP4qQqfxcST8qVNZ2F6PpM6ESUtNYw51KzT75EQJrLy1EmEGYz",
  "key6": "3pbjpBw6DK7A7gKkXPTwcGQ1TYRWgVrmoEAnchLUyWJr6AmHTdFuGS12xPEH4hyGDvXxhoi2UtWYnFwp2eGFsY4V",
  "key7": "5jzm5PZNyj4fkaHgdoHPTZM2UjWcBm295XenMS3p72t9F75sWATiqhdMoFmnVaATJbUmLiShz4gLE7C9D5bWvNwk",
  "key8": "2CGMGd2FTTvs1FUUQMDsrj2FZz1VemAoixJHn7KrfKa6KEAbJLpnvX8b5H5LsvJnwZnDbQkXUwNnK4VhznEBUfwL",
  "key9": "9yZVScJZyAumKonTqC5YtizSMTbbqQwsCQdRDHBDP7EkyWZc9gcipouJpz4MCPoKezdeTUj53zEaqvgcW3UAFKw",
  "key10": "5bG1Jpujs6qpNtAYng2YcSQ79tHs1LxTxC8KgLTX9FhzVi6CtzWWM2KmJJT3WZMSWbDcDHJraHLUDi813wdNFFJ4",
  "key11": "VZiDTKC7ioDwbnpFKjFG1YfNVVwd3TevbetDiJ6MNxhvdDbv3LFmt82ZE9Vao6JWXPvpRDHVnG1JinDNY41Q4Go",
  "key12": "3uyQgfZJKyoLcPD2wazVaUANH2TaXppZJ2gh9Rzui4J4uKkJvkdQTxKsNWV3wUQR3w6JZBxov77Mu2pVjgHHcf6P",
  "key13": "5kKuLEdKrsFUphzo4Y6iPcTo7fa2dontdpbmum1UccWhf9rjaEW7Ebh7yKMfULa6KXoCWvaCPr6ryaAVkd7jX4c6",
  "key14": "3gg88tVpwBjDrveVPxquS16EtbZ2Dph8YvdPKmjNTX1T7owde6S27gZe5KBgji1ouXUTzHQr9KP9pR5YPkQ5QQ8B",
  "key15": "46NHwP93hem9n1EuysfJkxSLe346crkMbT5K7yRqBaELTH6PevDQVDcqJHwEgxwHxftkYdAZeYyoNAzxWQvquhML",
  "key16": "TcJWmP9HSZuBCzA3rMJHqjmvHoyALVhaSvahujTJGHXdvy4ZB6QkcCo98g2ERZEUsVZ7SAsXxkwj24mPiJNLRrm",
  "key17": "3ZagR27YwMv4RTyJ3S21Ppq3p3A4vk73XsTHygvJ6ob6CM4oq9efMMbujPzTs7mYoMBYYm6diapupDfdeZyA6Znv",
  "key18": "55YuxDrFxoNTbsCE2akZTGqNfcKnXTtitX9tDdPiv7kpRfJCSTUbrPL3SyEbQvCYiH4QrtpQ4RedWo2CMyDqMBnz",
  "key19": "5snHft1JpJ1GG8aRjNUimeGphaU9Sht7g8pwvgXopf4GyCPV7MM7NM2UzZtjGx6yABuQuPxsEYh4YHFDZTgpjqRN",
  "key20": "UgNLV6qFpHaXdffgDCMkfCDvYAfiW6ZBBQKoT9w8zRGjiHgUuSq8NNj9eeQFiaLMfvsnbVwBt6SW4877VAuQPsv",
  "key21": "3vem4CuuU4hkGrz24pBRjqLN6BoZyErVfEaRmBxdjLYuoUGASHZ3ysP2L5Dhy1R2ddTXtKFCe1WJEPUqAyiEPBfd",
  "key22": "2jDpRSNovtFRjV6DZ1hkYy6fkoTH51recEfAXftMwEGdpaA1whwTxrEFTxeo9XZNAvFqTDXJxNfg4ZSXhdSsvZ9U",
  "key23": "YFfxidmwhq4GPDHo9H2Ho74iXL8dCe3PT9msUbLXFHiGwaBg4Est8xff7Dq6hvFtRNbYfDZdnuffxkFj3oeR6ZW",
  "key24": "7wReSREsH6DZR9GsXPfhyPxbBKxDeue4EsAvcvYFTuweiZXzJCyxcMZudNy4tpcNufRtVV8aQCBU2bjrVrzW3Bt",
  "key25": "5rTcnE13gCTdGdgxmx8R7Gqy2y27AYGDkGuMHwbkBXugHcKQC74rFBK7aG1hSUb7T8orJDvhaqM3RNKABdT2DrSy"
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
