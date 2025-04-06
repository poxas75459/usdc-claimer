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
    "5ZjWjyrRDGsgyBrMC7DDhuEwiSL1L3ngutFZgw28HXtmhpbJ8b8EF8NtqcERsarMAy8G388iVoiKRYbBRKZWGo3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGeHJrWSYVBMYADaYzebHPWrentm9i1AC4dqYvo2mGw9qzzDcf9ZF2KaokQS26xHCEdPGAqztiQUvhb2sgRxxK2",
  "key1": "3vmpWzJjci2MfvjzkFrDzrwHUW1gQoXqh9G5Bo2D9UNDYXxu6zCJv1fta3H3urrVxzhaz42v323hcdPKMm36ukGu",
  "key2": "51XMgpiAVWsxiGPNpPM7imTY26mJMEaAzwyiAbRv3RZ8bR99KzXozYntdbN3LHF7JKqf4DZgcLgSV5Z1qJQr8fPQ",
  "key3": "jwyMQ6dtfT6GVoCPPcBcyJmSGerLro2gxqerwZpPHxUNYB6rgk2GXkBSgvq2iMKyBXMox7d65NGKa1cRVLD77SN",
  "key4": "4XMtbVhhdonD6Yiqmh2MN1u6WXomMKqg1FnkrkAFySXuqiY6tyr9p8ZYkcZiG76BYqyyiBn3qRnd7Cdy7DCVFKrR",
  "key5": "33ziJqZZ5UXTiKyigcWSHPSepA1opbgpvgti2kjroxbFom98FYBSruKPxKbVYAeVnpzmfCHyZh2ZmPZrA6qXJ9Dw",
  "key6": "5zNCTwxbA7DTjPDxyoX4FoHKHQbpEaoD8V33SzFRLKpUNLP6jnKEzDAPeRgRVsot8kCgx4pjeQ1ZAFXh1k2oWSFT",
  "key7": "YtgDnWehmU4pLGPiHfcveQd9UHwUd1qG686uE5PHv38LFngiwn1pKRFPZeUTmUDMb6gY6jC9xvPFyRQ7X8RLYBj",
  "key8": "3gocdBsUB1YVJ6cJT4G7SuW1JKzn5kKdPwMYzWJ6GS5eNnLTXnxc6eub6faDUceuaw5Dixc2ZMbNPjxwYJpcPzKM",
  "key9": "2u3uuY4AfwGzmAPLdJmjfeQXgQqu9GsSDXDLdijsyWTxM8MA2BjzWku23vxuE5WNFr1uYw1Dt5FqvjEzSCZYmg5B",
  "key10": "2WLdcjpbc6NrrUMdvEmPYBfXWmn3nfzg3AxxwbdtL4fsuLEyPQBPhwi2WFFT8mMPDj6nYmdSKtA8snz3mw7QBgXH",
  "key11": "2z6LDg5mvpS7KVnqt3MjsmS7ko1XocFcwpkXBZjHwVi2APc71ymwbRBznV7PbX2UgWdMSKW6E6V2gJkghkpc6JpR",
  "key12": "xmEv9Wh5yWWPaecPwMmf7Rpv2wTmWdvhcZjBA2X1FSCvFBYydTP8YE3pxWrTBn6c7Jof2XJZipkEFvhp6chGdMv",
  "key13": "5MhjZfLwXqgK8WeUdVm6reZvKcwcm96uiaWjDfk5Q4BRUezb4q7ZCnysvJ8f1LAB12tMQRi1sqT3R5ABcJ55bDeZ",
  "key14": "BEjSNjLnC2NFrdBnikMnYbTmqaJeo4dBYE9Czt8wgVXFq9ByM67yQB8qnJzDSdthAZrJaDrqCcsY1jtEi4hWEE4",
  "key15": "35QnUZgavXmLzDghAyABS7WXCSEi8nKnLuDZa5hCGedidWBdYHwH7EeDtzXdQ4tqbE6R9q4tagPyiGdLbiyBJpcg",
  "key16": "5yhSF7vPpFBFNVVTQk3Qv4iN4JbSLdcBJ1sVVBFEvaBzk8FW5Vh7WK3gDwz9jGTAS8UtKFH7Sd5LVA5SpRj99Zy7",
  "key17": "2dWND9wF5rhuLEKkU1KgbXuQDae5KhdzTA16BpCqtEGFeqK8m6vi9g9hhzN1EG2PKcUgR7MUBMRa2FrkEJ3NL6y4",
  "key18": "3fEaisZkMTpsek5iAsV3qTVkgfpuAiipPcsnUuBfdrjhNRxaTRvxxM9n4D9eV7CasSLVMuBKJrYMNKJTr7RZ43VC",
  "key19": "tn4jFxC1JDwbgujsLyozBA4GZVnz2sSJCoP35TTWuWfWPzh3n6b1JjWMP26TkeB25L9jiwSXuaUK94wKd2arqST",
  "key20": "3vz8Szg6YDK5W4LpWKKxqAESri98kNYrs1yniHb13hr8WkfAkFgWVa6iXELhDiBN2Qj24Sp1mRJfAdQeRMQm3Vxz",
  "key21": "4cEcNg13Y5npnt1akfyZuAvPm8Zw3D3dg5NenrM69coRsLZqu2Txz8fDkQuMpNYYqh8vssC8btNSmniy1ULFeudg",
  "key22": "4nD2AffKUEqLLfvDJ7hNnoS6yVuMLTMbC2bwvB8jrZrep1CVjF1pd4E2TCrNLhJZ42q9pR68a4PaRPTNwbcGx7wX",
  "key23": "5kBAFtUzAAAzsWMvxyj8tB9CFVAbtcMZmeUWiHtS7TyhwPRJCgwek4UtR533Njafewoc6kHuwr9Ld7uk7h7tLxD5",
  "key24": "5Cv9e7VDEKmdJcb14xtTNJ52mgF4L76VoKABNQpE7RmYcc7LgSkNqDYHVZDWMi4XiK6F9Ta6vFW71xAT7AonAYGn",
  "key25": "5A8X5hu3m1w7sHuLFdsrBbgK2iQPH1wRCbLDDmc1wjCE6G9XTFbvgfnF81DuE71qZwLfaVxwyZPc1ZmniB1ZuGJR"
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
