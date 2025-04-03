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
    "5YdPHPcn2cWK7REeetLNgj2i2aRdmfiTBcGV45XEYubU6g8m25aFtAyBVVzmaXcVkHPhoGVyMe678UkRk1BTFdbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZF9dxLf9M5BGxxxdJubiqVsQpLdQDYsdHEcYenbw3QdRkRsW3pKkoEvwCqEQgxVvcKNd2v8XjJckPJDpfbomPC",
  "key1": "54mvzZFDfLjmmaRDn27zH1WxbjHdPqoxzFa4WXwAHciQz1A7LZTzSUxeM8mPcAn7bk3jtkvbYv7CGMrRhfxacqcQ",
  "key2": "5QdW1G2X7b32M3Vqyjnb7XhF6kSwdz4P5G944wVataWQTtD6ikUrnMbtwQe7njxxLVzt7GM8GJ1Mq7oEbbUxavtE",
  "key3": "4yi1CBnP7EvS4cJmfRrgUHz5r2t22hw37nai1oJmfLF9z6Zkq2ApGR8qVZ6WDbTvPe7WTZCwqzbotk82nCsnhgJx",
  "key4": "61DMjAsR61aHofBoYGAxoK8viqp4vkixFGcFA3w1Hzwii857fcTdBuKDvPcWdMuBJKbfixdUnFU2WEpfZUxoyvTm",
  "key5": "4T5v3wef1PXVE9aMcq9VHSPfEg1zGMmWyhSf7n89TH3HzhRJd1ush1Gu1Lu2xJkruqkkpcBJQHnby3PkshuVJKog",
  "key6": "5fkJTUnp7pCsPs4xkfABCyM2m1oUKU7HEG7oVktJxqGbadMnx59avAKPB3Qjw7HmjzsrnVLNWeT828SpeAtVrDPr",
  "key7": "22e8Jn2NTyQJBAWT6vGuPWVMJwFeFdGDAPUU4vBP1B889bKyeapVwakWrXMAtsNoNJLrRdMY4dWQKqMN8GnMZhyC",
  "key8": "4MEbiJcPCtgJ3tZQpNemd13w2e4sPug6gGNZJfdiG7xHfsRXNmCZDWjS33Z1RrBj5ue7u3pg7JGUQ9Laenk2xNxG",
  "key9": "2ycbdAmidVuJq8FBtcduobFkdFsrUA4UYVBsaZcjashfoPHPkc1varQYFaozpViiExycVJwCnffgXJufWp1eTrNk",
  "key10": "5p19Aupd1h8ab8KaH5zfY2UGR8odkzfayimePjeopMRdsJMBy4zQcdP1heDGyNSZ3VkBTsQUziqQQvNM9oTG4bmD",
  "key11": "4NveFBoWWzHdWsDdDhZJVCbEocWh4tduXkmbwZLSQFpDL4QNFNudDCUwVVBKmFaRSb2TEWgP3Bz8J4Cc55X8mHqN",
  "key12": "tfgZtf3cRP4CHoERmr4xBRGDST1aUT8uzfvn6GZuSBgXE7DfppQAvN2UrxMGzrsi78tHakGP1igGDkcSmXHUKhe",
  "key13": "5nNHBNwf6fATtpguoUgtDu68kHcZMxqtsuYxgBgWXCvP6ifjnWee7Vn1xNzHJ5pAq5Yv2qdmyrvqRP3fdKn64v9v",
  "key14": "4QTdyg5EhAZkrQxnXjX3em1DgVjDb89vuvHQtUyEpBjrXpvGQaVSMBpJ1hjfepzNLHKiXX98Ro7F4TVS8hKSc7Es",
  "key15": "MRe4UnQqj7ueE4UJPwQTjUQLg5ahvchu72hyppqFuqoQyvaH8oWPJyb6ybZNrxoBHDvPJNTeXi887eSqaTf2G1e",
  "key16": "BmQ26U1eHGkDuU1dKxAAgMqMP1CqiZasK4TpUKaX4RP9FpK1EegRgCniLJxFNcaqBndVfLk1DtZ4cmLfMrdYeG6",
  "key17": "cE6JyNH7XGB6dbcdaURAsuiUDJ1uzo3uFzFfJsicPLoCpuTEmi1vji9S1g96zmwLW34H1nLv3aGRSwTaQYLq8En",
  "key18": "5P8vh4B7osHjHa3XgaVh9NKx1kKWNuze5a1FcSwMyZ3cAEjJAG1CLEk2mGN58tSGN6MFar9CR7CpndEw8oMq5GmA",
  "key19": "4SVw2C3Bwwm1MPUq8aVQNZxAsZE9z2zohpCLBqzWnM7USz5THgvmeGP2pzBS6oV3W99Lj9Y8SqX8eaxA5iq3wMvZ",
  "key20": "5WNWsvtE9tPNP12hWJUSQeExwVioZKAHvaKT3Qcom8q8PBkWLcPzfSGmBPebd3mvyTqjhnM4Z7BcMy9pvbEYcciU",
  "key21": "2GZ4ssbwRWQC4CKxRFjRagN6xUKmvMnmeet9e8uv8pNgdAZTWsp8RNd1FAjqJhHYfUWFP87FimwjfSHmHNWFadEg",
  "key22": "Sn1fAQTbRFJZVS5DWgeKpwTuJQP8t7TjR1DCDQfkyBrhwN24xowBZr9PzAP3PvkCcpPfuG3BYD86Btz1Qc51qg1",
  "key23": "3AyFBegpXcJYMb3fw5Cxx1CiRK4gcc4c5uWQeFg2aNbbR4CPr7exMWLKkTneBcWaK5Bn2Ayvn6zjocNgkHzjTgkH",
  "key24": "MHwri6dku16QJaCJJPwCBYMixx8KKh4zMapFaWuoxpFiEDwZdfq6UnLRyiyXCrs2aihqm4fX3MZWJXUPHpC4emP",
  "key25": "4v1X1c7P7yeGQjM2T5ZUiKeR3Y7VvcU2k6DxMCoR9qaGNb36Psw3D1AbejF8ESbTgLKJUytuM2yNNgxWVXDZoP4k",
  "key26": "5cH9SABuN6pYemN3sNfv3EsHH7wgJUhP7AKVR26M1ABtqWNvUyxbh9yKaAMo5BN3TPxTz2LzjjpRaehr12d3QnLx"
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
