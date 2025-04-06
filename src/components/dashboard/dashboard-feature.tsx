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
    "3pTFgw2ARZiTJkMqENnQtunh2t8oQgJbjawX8LHxusJp1FK5V4YhLfLnwK9CppNiQjt3Dk5HRhF3ZPwsXFLCoGW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouf31p44trrTBgP6tndYojhqhxN7ETmhYXcCapAKU824Sh1NmR2rZKuVwduYBankvbrpmn3Bey57dGN4sMvZj1M",
  "key1": "2tRNY83tWkfXP1AN2rjfdyrgp67jJ5uoYYHr6Qz5jQRyGDaj8XvCjPXWJz4giSdRJQLDdnVUoSUwYoC4vM5wddtD",
  "key2": "uCztF2Kan4tjvHYxFzJ9XdLGS1rRZREcsrS24c9GVErxAMiiviqBamnYsYRPFBpSCw8Mto3vCoAH2uSis2ABXMR",
  "key3": "5emxr6mf1zd4XUxZJeNTJi5enEqhXcpJ4qiGu3VBvttukybQNfzm9dWpM4a8aYrUXHn8yWuKNL8LBTCrKYaUBneA",
  "key4": "rb2T9yQa2Uq9x22sbczE2aRYp9g3KE2ahXva3ou6dCtCazDnN3Tf1RfKaVSanrEzof9q81GrGQ7oWUfhojEMyPw",
  "key5": "3377nAGfcwopJc99U7HtkiN5wtww39RJRU5rYaEHktxMmeBpnbkck2ugEnrADgkAgMfwUhzQ3oeJKkvVTV293m6d",
  "key6": "23na99m54jgqCpVbpyDXUYvi8yP5sPVWvLQrFx8Ar1MMJx1HdPHDPH2dtujZnEz5TzfZHJYhfjWJj55un399B6XB",
  "key7": "547orqJezLquvrZA2c41Gak6PMebw4ne1GzgipFsobee1gw8ZDNqwJkgoVcBsQ17ckNYTm2DsLcjW1LRoRubjwzr",
  "key8": "2oEKVrcGs683Be7s9Pds14aamj1gS2dFMJiu3CKhLAheieh4RVd8Gx6nc6vnCXXjjtomxCd6x25uey4nkVfqfJSa",
  "key9": "5W8ozg2iwMWSWdeJa8o33YAW8P7B7aZ3a1nLvhBFT6cDSjdagFevHcTs4nPo4xjhdbwZBsdNQTAm3QL8DaypAzpc",
  "key10": "U6eWHf5SubQoAyLyC9w1fpBBcMo1KWne6eF9Eo4JnTTYtjq8ZJASqhnRp2qSRVqk3xJX7CFt8Hpn5d5EuQEP28t",
  "key11": "5usmhfaG9Uusc3YEKkGHFQHkKCrLWR91zJnKhP7M9h61FBSXJF19C2mkgsV73hdG1WePy7xKSkq4NonAb34H4qa5",
  "key12": "29bErbvcN8ZVqE2ANAt7wYX1pZ1v3pAimay5ZXtH9E4H2Qkca9mfvT9AnJVXTKuqtLH6r14iW9cuuZfuzDoxdvsF",
  "key13": "3QdZHPpuspeyfzZmyE6o8NKtv9ruZe1wCDmHfSkgUEQemyJsYV76ET7i94qX7DqXxQwQ6zJMhX53QYQMLsTn2on",
  "key14": "3kNatZR7c3sfpuU5R2BD4ve3FXm1xVFoVtoTaDeeB7yZJivWT8J5bGGYtJRjVtnn4D43CfVGxVJfnWktMGBUJqid",
  "key15": "41UoCqNgpm57Yo8M6kD4EDskAXDUVcTawLVKtqWAVSUGr8ycHoSDL5JKqb9SGFnP6srHpDkz6H81XiXevPbQiLmN",
  "key16": "2L6rKCq97Wb1kbtbyo8NC3s2yXoQAmwGXmHyW1wWGnEa9i8QAGvaGiiz2r8Qqck3nZun7d6QY1mqHKXoYqQfBsab",
  "key17": "5Y4wgwfyo2eU7YwPDm1wgifB3v5B3p74BXpPDMtAcXnLF6dx5hfECMwyPV2WFVuW2D57rMcQqsE7ZyQfgNZ3chTK",
  "key18": "2DHqvoV3qaGMPAdPYpAudmMovh7hydSo1a1p5Dt4anUt2qCLNzNvDv82Uf6ebPAAQU1mNrdhJYnQSxbTN4C4PtZj",
  "key19": "4eimzvWWkDfb6rzoGQgbNdtmTDyaM17FazVg514PT2vbbZjLNt2X3LWPya9P3qAkgtiXKhYnB84VEXd8yxXmF32E",
  "key20": "boMkALHix6RguY5mCz5TfWcmEgu9tCUTeYe1jc6D5JTYHjqi6jqsYvMPVrWDWVZVm474oRWV4wRLJsJbWzc6ztW",
  "key21": "4cRixwLHdoT9PBZs9BZ1DFjVLa6CktKmbdCQkNMf3WBYdPNvXJM7sz3BLAsZv1fSKWiXrRBgCVZj5h6NKd2MzcR6",
  "key22": "qU6ZAw33jKnNzto9qJAGjR2cetvEancWb18ALMH9Asj9ddzh66VbZBgHbMcJ33gjvdyNM5pN8UPdpsUuK2UwWEe",
  "key23": "zyfgvfgbwmDwy6ce3cHaah2f9SrXuwd732P1aeud75zGsSG4aLi3HvejRH5XwvcnQZPr4EF9SAVf9iqRhG31JQP",
  "key24": "GVKN8MLY4ku91jbpVceRdhYVYTw1cSNAogXzXfgFQ7VpA8oCA9W3W1bfCMzuRyLyeSSvPNkds1RA9aL9d5LC6cD",
  "key25": "5vsPn6VsCHfsAV6v3tFgauZLCbfqXrVSHGg2oy6KtaX9LFtEFTKe2sXiA12dTNGEwxXC8CgBpHtr8DL5A2oahfBV",
  "key26": "22zkBY3SWBvQVfUcu99MARkVt7qwcZuwRHmQpyRKMDdRu9BTt3XJJPQAuUKV34hqNCFCyEnvyz1nrjgT6PK7a6Zv",
  "key27": "JKUTQzSzv2QY4dRSG9HTQvVnUNeiy6wzjNXU1GkT1StRQzvEfWd5XkhM9s3MhzzhgZauH5YsNGK7WrePeV2MrMF",
  "key28": "4PL9MCtjNcpv1hUGQcF2anM5uMZzQuuN6G7Up7pqmaLHBKYaasTKepVLYP7HuJV2Ami5SAyd7RwtytAKtCaQcBSC",
  "key29": "3uSYkhH3M6sgjokzPNLwBuPrnjF2RQqvfgaZm1wAH8MQxy4cTtLJBovgs5CcDYzNcDBak9zHN1JxQ3jB3AXZPVKX",
  "key30": "3sRTywrm2nF1NC5yqBhcAGsuxop6zqjnYbwNfzzyzLPZkVVQEU4wDNCejXnH8u6KJQVAKQK5zConH5VTu2Mpn1Wp",
  "key31": "5d7RRhD58fNV8WTwnjTVa5GHXDPTRZaSX8ox27R27HDXwpuBEWeGM37z4onU2V6qXTrL4EmZRHfgNzyVAe3fNv62",
  "key32": "NLJdapCasYxfEzQQzPPubn2tXKVx64uNjd7NMvugWiNkMLh3G3Ta8eaYbX3ZvaoQByTmjKnxa7n535AcdLnYvg4",
  "key33": "32tYNFJtfcu34UrnJanuvwWVboap2PgPaCz5QnEQ8gHTWX8Z5Rc2j2EtV5tZ4aT9DP17SxXvhkk9WQUT1SEhQtWs"
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
