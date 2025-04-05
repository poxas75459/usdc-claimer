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
    "2A3Bn5dZig7V6qWLJUzpzkGG1kstfLfmMesRgU6UEnmdjg86eEk4yNSBkjT6pubsjMugcgv6CXmNK7pBvu2m4X9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kikb1jX2i8cHeqNQ5VW3vSvBwZFEDVywcT2WeBVeSu4ScMVuZEiZbrGgkHSoK8ZTCrPSAjmgNPtrgJejZhmUehZ",
  "key1": "2UcxvMnE2SZyLic5DYniMVsm1m5W1ErhDKxC68fu9ZtHS3QyxsKdJGB44iL4dXhD9hn9sekRP1E3nW818VMdZXB8",
  "key2": "67esNa37tbP64QaYUnUgJcA9A8pFnbowHWK74xoBqBaDJEtftpr1KtYp9zRdRBFEmD7fVh3uqkxpScQ5HjxKphLc",
  "key3": "25hV5izVzkEQAZbkWJwsP7cqVJcnGZ1sWNegNDbrR145EHZW5B9H1mMAQ3MgfmMjLnGEXFj1hFG3RLy3dQXNZsF1",
  "key4": "65qsVtiofVwPbKM1Txz8H8JnfjJQPHiZrJnWZVYpTEufp9TRFqnFBcxmWhSBrTJLkf5E3hHdqhv4LKqPT2tVQnNM",
  "key5": "3sXLvvDngW4GcXaAgjEC2qrHBEoLi6yGRBD2FRZcjiijm5xtmWFiV3DpgERU4uK5ZwAmhLwxNq8giVtezXHwKoP1",
  "key6": "46CAUJSipZmML3anXpwLk1QbwnZTVujacrzEWutDoFt92U7LYx2GMp9yHX9hytLawmP4LB14s3H5nkrjAT964hCz",
  "key7": "5VcvbpwHziwvGF93q3zEKMrUrk2AAmt5R6FFTogRVHLZ1JwQxA6ep9YR8Eq6a3oECrh6RJYvm2tpBWA3CFAvLryP",
  "key8": "62ms61MeSj712hkF43u4TwGRQnE9KeBnrCEvCuwFB1L2XXQCGwijfJFMLL2oLh8zjS9DakJxL21B9eToyjdinfqk",
  "key9": "3mN4urMgceNMPCghkH53dHUSPCqN3mut4hoHt5HSgS34rqFSTX3MuzA7JTtXuQ4S29axv7FgekmVKpmWEh4T41e9",
  "key10": "35fCrQd3691XvpWwQ8Qzi2zTLR6n14B4Ghjcrg7YuQ4b6tnr3TXLjGPycbb4yHiSDigTcTzp2gGZpHhJ6oytjNAj",
  "key11": "53cJEvLTbAnGzgBqut1Q4KyxbHY5NhfygdWwGmiQb85wqYzAajh1HdqgRKecMNeQ2iZhuwffWTxCQBaAV3i5kGb2",
  "key12": "5UXYuEUPrypCHYrD9SdA5AH66k9qqfsKkpUWgkqiqoup67SzZmDyDhcGjkxo3p9No5a2YvHyvkgK78883FXvc8L6",
  "key13": "wP2moH6RviDp47ZHMo1hVmJBp7XvSF9rMS5dEHd2ztKLdR4GxHQbWsTmJzb66WvsFzqcu92SmbWogqnH8JPxAiw",
  "key14": "2fU3VFmyM3TpdqSruaTqQPiRCgxxyoNnbzGhh9KAd8PWpr3atc3PkrhAeTMWGoboLWWf6si1xFZMGPCge3usquBf",
  "key15": "r7N6rC3bPQSGirFZLvpzAgjwG5GYsLDHanejMstZXTYa7L7HGyuELNLzx1B2wnNiJWSNPSoDB2uGbSmA8a8HsNQ",
  "key16": "5Mj49eqLDZQ2222Mm74jdGuPtRi33nj6W578UqTBMpogMY3LPVp9nWXiNm99skTKcvZYwHSczsymcyDBrKJG1eqv",
  "key17": "4GAPi9d56CAbZHLCtayS1ci5d2pzJhnWqyx35U6xHuLnD5sv7FPpNUqzT72rst69dqUPhH2cWFE5tiqGhywajpY4",
  "key18": "32GyyLaoxsvm6gp9RWCps7J5ZNP6CiXJgTzRUgkqNnpA2UbVmdmpGzgCEdPiyp9nJVbimE6uwdr5uxxoq86PDoDr",
  "key19": "24xncqxytGMb1HUUhJHB23KzQZBXn4ud13UUpDGiuLeCoEsW9T5KS9jewm2Ak12uJzpe1LiD46yLbVPGevSPiTka",
  "key20": "2gmiB1emxEJBdccPK2oTYu8T9h2GvrDBpEn2wBi8epXgiEuRex3zeUREFZLekSBFkXFH8e6y1reZNFevm5WSpyWN",
  "key21": "5U3tNtioYPffzCrYSYkFfcHEjcUzzoKGWYdM6Azveg1T8WjtfhNw9t8DQ1okH2ALaWQfPWUxwXbzk1N4dq5JLKbL",
  "key22": "3j4dzhfs795SRFn2N8NF9TCeqTfVugg1GuTrh6s76bH9ZMeTnucWunwnHAEDs6z3iD3w4NXyZcMWdn76WTFHu82r",
  "key23": "3Jr5WgnQhfVrWaFWZBfyQJBDXPwkZgfZTL9ALGHtpYmx6GxZwnAtycHhwCmVmBi2RAKDaw1zxXWQXQsaDNFwndpg",
  "key24": "5k9sfyoSPNySHrLw596TSRhzmDirb3co8Wtszi7yMcKCibD69rej3vmxLXCpoG2ogcRVShfMBRtHfx6kHwyyV6Qy",
  "key25": "4PbHyhdMAZJeiVG2bkCGQeieyD2qJc8DTRoUPb5UySXNj5zSEhaFkcLpkH9foAPd4fDZ3TsYFpg3veCpsR9dApGi",
  "key26": "2j4JaxVWXxEx3N5TDXT6nkaAyt7gyF1uyTfWWWDH99aWgfrobuhG4AgXw1CwahtPNajMU6ohyyr8Zm877AymH7a8",
  "key27": "2iDmgBiPkqwiy9Dwck3sJ96QxZPH93oFdniAzmRgLo4KQXsZQhUSUjMpkqwoWDg1v9LmJqUezXCNPUx2J1ttEgVC",
  "key28": "4YkZmqhbZcQU1wfzSTxCr8PMMiiCnY3NGTA3fjsN9mPoKvcfh9UBAs1oSHXPfKhhDifWufqepRquJraEY4vU6vhY",
  "key29": "1rZw4gQfUqyWSBDVVp4eaSQbbtTAEyrCfbUPyUoYzbzueXEabxHhgne2A2JuLx4YX4tNgZMftzcgrkpNjh34DuD",
  "key30": "2Swm4ZSYSHxiFvwjhDyqkX797krwSja8A5HGeFWLv95c1fYF3iJh2phDZdPgRvr7jqvjE5XG1x6kS7ZYizuEz5A3",
  "key31": "162GtcN3jsPjsPpxQibD6QUsiYtoaNhu323w5pxkZy2ZkdifMhuZM9WoyTHKfKtyWBfpomCZQuHxtaS5WEyyT22",
  "key32": "2PZMUNi6UNRSPUXbwbUahENsTgQ7vce3XN8otXmjJYREmpi2zsoQYMgv67qX1EPUrR6VUvX18cvgcMWz44YzQQGp",
  "key33": "5vpXJ3Wo1UKcRwJJ88z8bJnB4g5onLCseBpon7EdSrc7CKp8mMfpKzXc3RXv6PVSnZaPd7w3cP1WmGCa8QiBSbT1",
  "key34": "5CsnuKG86UyowwnN7FBTaFntVS9FvAszRk78rJFuqjg2Uyr2MuLaaiqkjvLiYg2TVPmmP7oEL3Exced4gam6qCTc",
  "key35": "4Sc1qgBJNuxvgJLYbPtsyhycm6orJDAH6m94LDWLwc1qjmiyaJFJvpSDE9PECQ9nF2pQAxVRi5PWfc44eWYYNqmQ",
  "key36": "56tu1NsGB1mTokWLWcLjq6iaNexmKgsW2sPDuMbY8gLowYEE5deSGuiqaqwLfKEVKe4pqBeo1sdVFRVRtMxfkJXX"
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
