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
    "2ypDBC6Kz52Q5cicQtZ9yUaPvrq4oBXBUL8QcDnKKJ9wfG3Ri5DyGEdPGb3xsN23NEVgSPQuzGFZLkcGc5g2F5UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r35bAXbWpE3MA9ykjeYs5WMSEjUvoGuC6NVgwUaM71braC3a5tUdQj2kaNjrkWwDG8suCubUcndcAxkiBCXr8Yz",
  "key1": "5oKwvtbSgRwcutnwU92mhVyqntVFyN28eDRG4btzLgMXnkgD1fdktb94WSSLxKRecdRCDfup4ijEN67wmpFXop9r",
  "key2": "4rbKZqkXWGFu1N6q1qRS4Z1KoQu8irjqZBqZjfPJgmWZvkHar8L3URg2Vhe3hQTYRqxcBepvkhM6VjnYRhsMmRmY",
  "key3": "3NTFRG4ehvAKkLHhbbJ6VERyEPsnuvxcpN1nd5PuSSoLAi631hkkUzggmZaYDFRrZmz735YcRgu4JoJdXJ8R43iJ",
  "key4": "ZjixkErfySwzFewA5NTY95apath1xqv6VAV9R8KjniCPSUvoTpNbJ7XzjSyfiRpaWdiDCQV71av3kbn9Ug3hwXN",
  "key5": "5XQGTd6LXR1zdYWxB47P6C9rcyryBiBhrZvNofGbm22cLKyxTjQjtzbkwEtVQJBnLLNRMbb9mp64gei9rNXYJwUq",
  "key6": "2rATFxG4k3GkdgGu7dGrnEmXTecjDqRRYxnZXFbrcYD59NzUDRd4GzF5dMmmFvFMVVJCm3GvuMHfkEaL1mrAnVYq",
  "key7": "4g3fDq98HRW23WHNwNYGBLxRhTgyDFiHkt9XMSStHxeZkVfdm8RB9TchJbsu8CWodFCsYS3PVYYs1ovkBFzbbY35",
  "key8": "4EWK9Avj4nSGeqiWX86hhKLpoPfPr1Bpfw5DFsuxsmo3BSm6pF6Ydt4KwsGQWaY9Z9ETvXCMTeVKRLbzfTd3pNM6",
  "key9": "2QJaKZ5yLCq1k751MjCgmYMDjMpxk7Nhfdh7CeNH9d8yorjLHBWngpSvDMG5RDG5osjWSTJSm7ErjiYCT8buiXrG",
  "key10": "2s8Q77o6wdjqsCyqdYGTUNq42AF3FT7RypFabZHhJpUfNkV89NZ4VCDM5sBDNLYbAupZU1couLMposnYW2RQPVBG",
  "key11": "441ogGGzZW4SBDbaJBmEgoaptaowqZwvFQ48TXj7cBStB256Tr4M8WLZZAzia6VGEAogayehtuxEsh5GmrWX5MUq",
  "key12": "3EZoNhBtWJENePnxZsf4SsLGVEbgFbGyRrE2A456opDfwX9x9RUeVVDi8vafLr92P51fPXyhg4wdgNRdh6QgQgB6",
  "key13": "3cestyKjGKuJ6PjAX3P7Z12RCtRw9NZ5wFHodx5MVGLjUQq47CVvdFWQUPUAGz1YrKU6uPkZGKtqhEQNkY1AEKaA",
  "key14": "3SAHePE9jpbB7rsE4MnkdXqg4Ye9pHaYUaS5jMqxS1FQCmzekZpbMdS4U7kB9eSbA9ZXsmhXR9aifCuRwBmhvn2D",
  "key15": "43CqFEaxJZsfAMRLv4G13rEK56TMngR7P4woDqTHByhH8jckykRqCxgrPutQej7V5N8T36TWa5uTfuoUviqQEMg5",
  "key16": "5VHVprcBpxAdvym6PYZqEdYhYC2zQP9kNLjpZFpQmgE8DDm4M8nCPCN1Ei77KZjwbCqdxiQFMKVr6SvJqwX2kGyo",
  "key17": "2MQTK1b4pxkKP3FFXXtBHanbA75vQmbGiZucHYHjxCTd4Wm4a1a5qjEGvtnyL6SZumykCsKonVZXsSk4QPa6hKZ4",
  "key18": "dqZDGin4yVutbK7wVsGAhKHitGGbWFbHirYafZPctrt4mKpaseQQcE2yRsTQyNAe46bnN1TZcvG8637n9CHkafV",
  "key19": "59AUmRVEKdvXRdLGufEYoCLpGdWfvwHFyknXTPXEyvnpZwKFJj18yuxn6CE9DvCMyBjp5fMuecJSinY1AzMP3FGw",
  "key20": "2Xs4UkXbkugZKPN9s6oCQXyMiV5CJyqdseTr5x5nxKbkTjquL3q5hEbz9BYViTcdUupyadDqdA65a3C3iqKqBkaK",
  "key21": "49YMDKUBwvDJJydqB4SQrxtm1oStwpU2ywhkFZwqDErE1PtxJ7S5P6gHYWqCZbyAoNJpKNkQpHKP4ihCpD7sQXWK",
  "key22": "3Uz2Zd5hc3bF3KMhyGdQQAWhzZnqpQvPhhrHSAVJVKuy1DLJFkvQWb6ivK5ayTiSNBdRqmVTTjdBnKUhx7qecoKd",
  "key23": "2ZRDAZ5CrwvHaaRyoxuUUoQF8hnNYuMzToVs8Tn8vmbL1TVqZSLSidcrVecz7NwDeSLB8NaGWMaEcEFqSGKp1wAj",
  "key24": "5G5PC4GEZbcCaSH3EVWp6qSSuLUSPxCP8bTrVxYbM9eWb5GrdPdE1cpRqmLr41ArnXpMpDJXutdRd54hHB9Rdc5p",
  "key25": "7Y42rzdH7J5GdxRPbDyYyGMztZUon4g4V2Kg2JHZTPsVnAuMQRLUmuxtHExyGwPCiRwAiM1W3hmhHZhgycFGCAr",
  "key26": "3KZPToTgRjpAj1Rba25WajaVd8JXm6SoPV8hx5wWNQdzpBRUpX9pjiJgnfnfT4XKFD2KkrRy7Xm54R8QNzLoa4o6",
  "key27": "5NgGm7zQnMHs7uXeVwmf1qv1rgmHVKm6PHPB93Gvi3AM82dMXeFmvmybMhtZ8fxn8Uj99SiErEmeyGuPuS3Pyaxn",
  "key28": "4DtL57eRLTXpZnUMKg43ozN6vQHANxuywuQNMbrWcmdsvDw4eawK5EyL5udvBRrCGBjgPktmiPvCtrtwvdXJzmMM"
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
