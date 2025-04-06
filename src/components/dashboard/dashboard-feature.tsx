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
    "2hmfMiWseJdMQKoUbMqWPfMrt1XKV851g9DoNCDQT4XFZ3vcPXhKWxJnXsodvx6Qx2SVS8BWFijdibBt6SnvCAoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357dMn43mv3yMH7SD7eUhvTnknzS8Em8rpcLXxDgdQgdkZjR7ED64km9R8aTmP9Vhy2A6gZ8kRQUm85VRKjLnzEn",
  "key1": "eD2C7KNfKFYWxq3RFd3Rn2AVRj6bsoFSpF8nzVwJLwnDPf4dRULCewf5FcMQCT3Gx11g1HRGm36Kraoxd94YCYC",
  "key2": "36iuCKxmbWbcziUVAunENiWR3xemoAbv5NJWe3aeu4R1M13kZdriJ1KuUs6JGS7ECw6TZFQk34scvURAFU6e3zwH",
  "key3": "4rqSnuU3q1zSerbFurjig4mN6BjtjTpG3f5TST2pSuCEYbQdpcXV3tmSEc4bPBTRaa1CrpGqSH3MM6Hq7XK8jaFN",
  "key4": "d5MKjcXcy3QyjjVw8rD6PTBfNx1aEnCBSWXD8bGyGoCDmB3TGzUVz68sGcv9gHTrmnsgaANL3rLtftABrdRa6Ej",
  "key5": "4zfdFs8yaHiKwhHYiEixGsLpN4tvRbdUhJAUYdjEFjbCpWhhHAhrb4kmSadRugHkHQSKDjeoCbQuSB1PMWHRx8JQ",
  "key6": "2aJgpv2k2gh6ipke3zY8JCMyqhXTYT55ah9xXW7ieS42vBN4UHWoQ1KnzvVBb6sH7VKQ75hnK1haUPPDCwoRJt6y",
  "key7": "5UP9qBaVEt8ZBijUzMxmXanovyieUhZgQ51f745Hzbxeh5KWzi59FfN2UUBGEqqsbjjHiMQWctsiyRYpeySLv1RR",
  "key8": "YmZTbb7Hg2HCsc7ptoDEpp5bfumYnpWwRLQsiHy9ML1xdi15Bc7jS4JSmX7eSDwPKcT8EJ9AATMsfJjUkh88MsH",
  "key9": "2dMGiorA96JCtKBMw418Ku4opJeebxBV3xyrBR6fcH4a53ey24MfsLAYVNrkFne1atMPJp3PdHiicRJvqvRJpZDy",
  "key10": "NtMyPbkAzqbpkUnJQWrAMwCyLbsR6BkTpVS5emXhWE1e1qMMVnwzaw4Vo7Z2K74YWi2Vu8bZKAksZuvoRfW1st5",
  "key11": "3Pi62LmpkuJUfaCWLrLCUfZA3wiRXYuWaxxtdQMoYBi5dhGCsdxvyuRm523PoVxX1NM1o3TnWw5PBqSDicJSn8VS",
  "key12": "3bYjuxTBynsrceykjuhJ1fSTjDisc9GvnU2wq29Lf31VDmTTZbasmtQBuXGHNtQoA2S9gNha69rcJEG8AJ9bsN1X",
  "key13": "34db5fLBFGh3bGLAVFpf17RaCp6KVRRvLMd5P7ZDkPpDGkXrfePsDW628d5vb2cUNbrVNp5ycsXFjnEU6MmhUoBt",
  "key14": "2rzVTicPAvtK3ZvsdvazNprq99g57sJm7oh3Ccipzz3nH4uH9SkYCoxbdtZC2AAgMTqgjEpvKRWF27uoxUXpMFGs",
  "key15": "3PCiRY2CRafKXeMwAYvXVQBm9AXnoxf6X8jce8AWGDeayueuddG5cTS7aSRaEYVGfhHFhS3z3S8RphcNgrus4CvE",
  "key16": "YWT67SZCd1Cks5ymY4BfVwmjivCgfWP7aeqTTy29MQbc2vGjTY28iHvcLuRBXNt6YHfHFNycDEZLVaSbU1Jrc5n",
  "key17": "4ycBPHSnCsTXRf6GjQqeJi1sjdUuNNwFQE4U6xQrLCpMhri2kPkUPnNYQhgTCmW5vt2UP3wH43zUKgemLXh29AjU",
  "key18": "hy7mWGaZ3Kw1QcLNL6usjCULet42wvY6yc7GiC1dZCdb5p2YwDpz3szAeagUUv9vPkBZxNvqJ2hW4CSRMMu8feM",
  "key19": "4MKdBZNHWv9pk3oAqPDdd7x6v8fb2fsUXcEJViX42dMVosE6BG2BMTDjEZEL8q8nwBqaLwM5bAxNMcgGAkX4D7ym",
  "key20": "5vnZ4WbPwVbvSzJf7NyPgwFQoR8UoXh2rjQ1cFJN4veR3Dot4JLcV8HzB7RMZ51D7rCHDq28hLjmEoHE4ojxPTJD",
  "key21": "4aHjDhysbZY7k3xeBySBTqJtKTELsEbShoPMc1ZniqNRbRrzWdqT9QL5D2JmGut1kwDGLjGdYwZU79h5z9cTJRK2",
  "key22": "3hwxzoHrtXbffqyZdojbCU3ZYCyixx7CVStr593Fb1XCGoYeM7SXFRdzk8pFuwfmKZ7eTinGj5wabdhVHGrYkGQY",
  "key23": "4ymtnSATBqB8G4QQSmUm9UzBNd623vCvenKxYxFsbqyeN8widNUf4Ywvzt7UHkUtiHiEKptmdoogC87kCPv5oN1J",
  "key24": "36CZxWH8K4sfaaDh6TYyYGdHurmzPX3srhJ1XTd1FDL8UYPM5MSreB2tWEjgpsEfocUK12y49ucfEJzie3f3ctMf",
  "key25": "2Wa37FvDgWAuQqVqfqYQwiy9PhGaYW6EhJxGQLZKFurswmgR3PTbLWazMC2pYS2yJ4CsrTA1XcbgvvxueMspTmF9",
  "key26": "21fWPYNRm7NgbDL1zYY9MYMpdFfQcfgMpZzX5auPAeeuKm5ssdKaBsVmwmstX31JiJWKFu6weTci1NtveXat5er7",
  "key27": "2RZzMomaTdKvLVWMax6mHZbVeJyc5V9jJsBgSypLVSgm7dbzNd7uEScENiLi4kTCWjSWAtNZAf8gRV5vgqpiuziD",
  "key28": "55KmK7tQGNMxkPw9WXavf1bVZm4e6V8RQKFnRQgoyiZJFCwcBsSeGw9vYhJg5ugkjxqrad8tgVJ2tHQZ5TwqT8Jp",
  "key29": "2pi9sobUPDW36iihfKjzZYkMa8BNoGtvje4BbC8Mig8bsvwYYCShPpPMjFaCdystTB3eRTjVoaWFCDj53x9yhTpc",
  "key30": "62muiqVFf44BSPx4eS3ezWfGo61yBcJZ1Z9tWK2m7VE44PUTiYUJ4X8EC3LGCFb73CrGmeDhy1VxZaF1Yc6idAYX",
  "key31": "5nLdTZw7xAx9d7eZ9X8WGE6p8n6VE88vRgCrHJmjLj8ygk3HpMYEji3pyEg4HRJWa9LrkHB5BY4EXkx9WC9TpWVc",
  "key32": "2fAC7coGSGkA4Um1MZoGCdYnMNqff5xiYfKxRDJSaPe8MWHWPde8f2YohmEmSiqPnWJbHgqy4aF1CaHGqdnS6CS1"
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
