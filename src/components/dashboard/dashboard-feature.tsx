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
    "5icK4ncHKPbBbvQoHB5R3ChEEiybQSBHRGbiZm34ZcZVis6WFXgy6mq6Z9qgfFYk1sxsveJbuJm5Z5PkCNMXATit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7T3qfxy4vyk9JfA7K2qgcUxTnoarDtyWgXfxCrGGqrKQbzM9Hyp69d9d18cpHFv7ictnrSjenf74Ckskk5tHEbe",
  "key1": "TYDDh4ZZoCPRThLmAwmjkg8Lg71HdKft2oQyuGsMoAu8NtyrWZswMz8hVcn6AjrSwzMJyfrJZjRJqsoHDATP9Wg",
  "key2": "5dJ9KwGAd3z3eVUiwhfrk3wy6dMnqqYaAXBWLa9ajB6gCqbqsSxtGQrnE4w8CCd7BYpdnMHE4nUR5JLYo9gpbk7H",
  "key3": "2EqqsryYA6e6cj4HpNbz2xv8FUW6bfEjDHRKFTGD1mj8CuPH5jrdY7CGdzJsaTs9SXeSoKbss5exq5PBSNCCxa8z",
  "key4": "4HvT1ShJgsZYLKvBZvhd9Q1DRVgwAaDjnLRcNDh4pBmfx2ibuKj7mzS9BvjCG8kgz6s7ezdUPkSeNmf8qLPzHMSj",
  "key5": "XE98nRidLwwY9ELBnzPnA3RMDF4nVyDdJ6r393rAM1ZE79m185c9SAm9TeKeb6SQAerntJcV3BAMo9vg4CdLULL",
  "key6": "53T9SkPkSFKywTzZLXGkMPEkAdLU4rnRbAwoVte51Pxw74dcbnvpRQVW6sUjqAJrRhEvaX8CGQ9juAaXQfMRRmtw",
  "key7": "3atg87S9QrzHi9kKXbpfhdDP26FkprDseXYYTw8dL2joW37JYEjGtWXMtUV6WseCMCsSaU6iWEXbg1oscyN2XE7x",
  "key8": "ZHayXCdzAr5exvj9AZngfihuGcFyHftiYYjt7Jj686Nz3DWQpx8dKh8ZkNqLCB5QSnjLjcjqeo18BSy49T1mZGR",
  "key9": "4ctfrkYXezMxeJDY4utjHdihyuHNmzFywMUXCcQMz29abAsFAQKmEwhDjCHTPcF1p8W1JWcPixWqUWNV2CLpZBxN",
  "key10": "4E5ckhSbzWu8h9dWuMTGu5LeKfbsmd1fNshReWHP9peZvXkMP1gETSTYrPNE8QyU28ogtddasbhUaDwvMzQn3G6J",
  "key11": "48QCadCQ1CfHEDbgv1Emcu9wdC3y6UJWV8sYkYMyQ4SUmXUSBPqpWp8DAwf3h3svtFSoiKZMotCPmeQUP4zUdsHK",
  "key12": "3BbRCvM9rDRYzw3fEju3QxooE6PCd3167t7bYohLQzhWQAPPZHccvNUcy1rz85hcE7WuYCQmj46ZedhcxgdRhGj8",
  "key13": "4PREHzdfeRmWpatyaHeWYhEBJfS1ewvcftLcwdy65ZwZ6EicR9FFZz6YXqvP2Hbt2MjA4NCDKmg7E4VDYD8fa97h",
  "key14": "65kCCtAomjzWcQeHTn4TJVGJU9SXkGC8QZ9jcxd5sJTdaa91anfdm6N7hpTKxXV1Au6i5rRoTFkKCRVYWfWX5uJv",
  "key15": "2dPhLZS2fZP1LSHDw8LeTpfaC7hMKJPf33wD6PLM5CEbMNuhPp3zFpvejh1gDg2X3tgNuknsYMRoBpXRbrYbLynu",
  "key16": "35YrtoDdPKHZTpvT9wixigTEeCghahQqXrKFw4qchkdsw5Zny3pYBrqmr2dVZAwfsHPZHfMXcd4hGWHbZZC6Ping",
  "key17": "4f69grhffYp4eeHVtkCZ7Zedbwe15ukkdHEkoVA6f9PSNicFig44voiUfdKPemVZZZqdmqvPdZDK7gsH2dauaB2k",
  "key18": "62SYHez9pYEhw5maZGXPH6BaN35AhaZCtZzo3oEBLKMfLEPpzPqy7YW2GW5LeWdJ5Qr7iYs8PiBBkegDaUxP1daR",
  "key19": "123kWCwpaqH2dukK4iwEd8gT8DiV7FJdx9XVDjyYhM9DBvfZ7xExKtGGrtX9fzZZS3EF3h7UYbNK2njeKfZRCTuB",
  "key20": "LUArcuo39DUpLcGJ7zZD4tbiawQQDJTLJS63BEGjp5cJXkUQs1tWz3jCiYhLns2pnLPauDrnyDfm47vCdHHdVzY",
  "key21": "eL7o8FKuJrem8StNxNt8Zqa59aakvAUe6AKNvjaYgDoNZyeBiSuSiuJBV3D1ivFGefMio1Px19iin7h4vdsUQAP",
  "key22": "5e92FH3oxy8YTs8egSJwe5227967uH1hhqwEiLLt4BooC2PHqjxjN8yiTzGNpG23M3CwYDKPtMbi73QZNbPD5ZWj",
  "key23": "5db3XHtdCbtqEDuCaSxndCVJyVK1S6pZ3WJSaWcu5SZucRJDq7KX5QAHqpTjmfjeX8CZ6mh8LQe45VZ79wGq5MYx",
  "key24": "Y6LfYucQ66R1jUqZgFBcunLB3Q1uX2Cri9Lyc2KpnU1La9YBtszHdtePdycF3z227wxBP58n2VzNVumAYrLysZr",
  "key25": "3QYsCXq3bxJJvKAUhwnxBPvXkYmCcNgmxJvvDXGyLJZni5VWFa6rdDPoXm72gBptgJtjDHK9pmxDXKTioiq1biiK",
  "key26": "5ZTMjQEugQbhMZayxpcktBLgkVPU3w3qkqX2TSMhuxa1XnmsAAtNGYMtQzfNEh5HBuKuBYomGwRqxdW3cgHc9YRU",
  "key27": "HMT5FZeC9QPvAZ8tLUNUAe29YuoABsHdVMeLJmKYofQj2L8yoL1RbLvBvS1FiBRsuUNZAtjBJPsRqpcGhrxnEPX",
  "key28": "3zuAzTmcCUyFSQeQiXCgKe3xvP3ZcGN1KDVeNPGggKJsAZJ8fyQXFhDT9AJVuzwrXxH41fqNf1LtRDAvnxy3hdpM",
  "key29": "3EoZZD51tpL2ujopzKznbrXSTMUz5R1WTkqukPHYLmnu8RDFhJkmREwxCcFv2n2bd3qDjnLAjvrmnan3aHDk8GQU",
  "key30": "5V7HHi9wQWRWUgamwvv29rdu8VgpAaSfWCSejZDAhGdXAXiBYwuQMQxin7hHB6kdYmZ98NacrGM5AbX9CFZi1tcX",
  "key31": "hcuQTnJhvb91YwdJfUTCqe43EdwHQ7puWud2SFNnqsQn8TzhxNCzSaXH2SnrmLFzWELXfRVepyB3r4R3R2WH6GZ",
  "key32": "2CywRj4JAmN2ztHTj3caWBz1xBmfuLsgY5HWH5pq9sXGnr26N6Nvxw1ppqGV9ysA5pXxo4AMEsTzyAsEmqRWHXvu",
  "key33": "4i1eHKMe3zsQvdzbPEMpMh9TS7qMP9G3e7QRV84L6JuXDg7RqqpZX1ZTLWUDcxMPRUW65sc57hdJfs1VK1Z3vqmK",
  "key34": "4PGkTe1q3MKucvpjCqVtcpEq841qEmWKpvo2zswyNDzi683LL5cNAd2KAtbyGgLRpgReXtxpPydNWQGfxAE5cFiN",
  "key35": "5mJohFeoxkiqwPhDhcDGnVNZMJNN15YNPnuuJkei4LieF2FGjD6qmLCvcyaetgHDTzsNSpNMgRi9vqogwGMKVYor",
  "key36": "495zCnWq2b7BbuqB6zX9TuNeYmJ77zvHapr8Nn4bphYMwgjEHUi2MDAWbvv9Ajr3nRueEbS9oRNJXGe3CiqTXeDk",
  "key37": "4LJhrYu38Vm5sJgwmHubXAkqdU7acp3oVXB7f9vPpx6zTkn2Qsvb7EWDBKbfTq8sc1awxSgaokGaWXgMrjxXBcDy"
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
