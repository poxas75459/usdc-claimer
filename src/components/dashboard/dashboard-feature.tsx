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
    "4puzhoB7oghLu5sRRDDTPwbViTcRHzaM5Qd7PAUvtromUaoADqrgkJLtBJdNdFysVS6twgD6PFffePuqANkn85zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vF2brVfYofWTXkcxuCW7YnDkMevwqsU72UXU4WErv7xJu7WYxwRqr6e2KJT6nh2ke8gtckfUGTihvRjS13MuDg6",
  "key1": "2UZbFe1oyDDJ79wArKMPjxwSt3qARfis3FKPoYmBpVVEZVPaMaRYib858UBXAAgQpuaiyj9nufHoELpdRxNqem29",
  "key2": "4VeCiaav3t4Q42hHEopNDMjPuZHYtqd7hD2gNWb3AecypmBTzGmL17eE1p26DXQvbdfT3MjjmARGXpfWLEkakDPq",
  "key3": "2bspJ3q2Q25QgU2bEcQHD4WbxPv6uMUiPNTPuFptFVZsnvoyb3b9gzw2Ln5cta68z6HzH5DatK9fuybNBJwEw9G7",
  "key4": "36Me2FWn5PqY393xep6nBgwUt8pSxcmiLnigTMoWsJi6ZqvFtsuhyiXSSfQ53DSpcEcMJ1K9y1b8MUdNngctevPB",
  "key5": "4xirzPvtkfBmtGMa6uYZhuUD3iqc5hcQ9q58TmKKmnWhq2a4kkukc8L3n5U4h1yPCJ8aqErVVUf1ygaogqh8s9WP",
  "key6": "3bPnJ58TTvBQ5kQp7pio5KsVccAMtNaNCxx62MphEoDbLxzZQVgiQyF4PaoVCozL6GAn9yKhHD92NfopVV7uatEt",
  "key7": "3ANH9qPgAUANo2dDVXeT8sD8hgw1NirtA4T2bkN2gQhELNtfzQNnsoeFPXFWKh5Ez6ojMaPZXzjKhcgqRGo23Ny6",
  "key8": "2dLHBWAP6aZviuhfLCGewB7ozbJ1p3NoEtM1DH8fNXK2cofguTvGX9sakGwFjFrTAqwR76Gs8wpAvQYkkRifPWha",
  "key9": "46hHiRA6snUmy6SyBCP8fEuGd1Wz2xHi7Af8oFZ9jMKsgaThMjQM9WszUfQcyNTaK3xBxhxRUe5qucHJkdrfrAYi",
  "key10": "5T9qiTPZVAirxFjs6YryibDo5ZwuGrJKnUUyabMKuJj2xYJkE9TkppeLXNgCeuFAdTt2u6hAbmG6LvTaY64wqAfc",
  "key11": "3J5LQkTY4q56nXE7EY5wTgHgwnh4PU2Mugn8qPWxWG2gH4iPV9eSjanjYcX2XtFqNLpYnfwuzoyiniKJ97TJLdqc",
  "key12": "25NmPPNy3u99LkoHrkvbb4avrxxV5soXPebwbQDxKw5LcBzknzq45ANFQzSygFowx4e3pUUcNDoJagDkVsJXhLqL",
  "key13": "Urvz5PrsBZhkEP3UkYZk3X8Qa5N8og9W4isbQTGTiBStpWwGH6migQRs2ufM1C84NyJCKJS1njkCBW21u4TLMes",
  "key14": "228rPmS6cNvrET9vPdHk8r1NhXZW93rV1EPbkenLQ2conk6scZejNAMhsceuT1B8xXy33L7EU86cQGUowuihciXi",
  "key15": "53f5V3HwJb7oFevr3UqpqPRci76Yd2CFbdRbQazewFDz1MxVcnpHdoNXiaYxXbAv8he7yJRVfocuAEFi5BqLRkdC",
  "key16": "4crzTnj8F4BXgMpNLJevJ3zWyNFZMQMrrFvajus7BTeCb613RfRXAyDdJAhWcmAFdr7UZPMhk9SXVi9Qk22WAy73",
  "key17": "ycv1TKB3HsvtLZyxtC6QBqfWqnifgE3GRdb6gsjXQcjTPWkwHTw7uGGR8iRAZeoeBQ4uqdk6FBidAr36YwCR2NF",
  "key18": "592xjKpamXrzKpXaHdB77ZhTX8BDBp72ubiiGf3Aq11eijkwz7tGP3bJFij3S7GD5GFLBQjhg8KDQjK4bJTjFD2",
  "key19": "5X4FUH9k4JM1qsdLJUVA29ffvaWj6fWTbvQMMR8XVtNMGXKhJ85XJkyGHFQyt8fWbC2nhZ2NSiuMfHHaZAYt4FH2",
  "key20": "4Bkd2eqx7Kr57tMikts1dx9TCQaGSDHZwt4ZYN16PRwkxuCezzsWweiAm9uadM7en4xQpWGGQaVccSZVsUPnUPkt",
  "key21": "2EFktLdkSkZiJAwbr8Qn9nTbZRywSf2GbZ6fpj6jA77xopGq5jiRCZJLvNF8UkjKnqMSZBpimaaEQ2CSmjVW4jvn",
  "key22": "BDHtNYWTJuGqGjUpdxaQVN9wYcDRCcnYe6QKrogjY7mXhtQ1bpaRFD8DcmRiKctV6bDsbdhPy66TTxdE3exUAkg",
  "key23": "3P859cj4Wk5onaa3pxaCcYjFNhhxb6KsJLfo87nTUTz2HUacTh3UHFadRkkhhnGuzTMK4VbXwJTwNxtNW2eLVd82",
  "key24": "4NReYmBy8D1qNw7KhXs753nQesJCnwVKxRmoJDiaLYR6H7Xfkv6KW6TaceXHUkXxZExbsPAokiwzzAVmZfebdaYS",
  "key25": "wSPz68eHhsGBV9zxkgCXLoCkdujLJRDrALLX9qkkQ11hfBtjbEkFXDF9GjnKcsCmifMmr1cjrDay4Jz8mNRZCRX"
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
