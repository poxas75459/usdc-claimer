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
    "4k8qUSmChnGJv2ATpwwnfbSHbboq6HdPiksNsq9zarjcDBTw21RddDwsZiZ7Uuv6WveRWWtsDymXvXPDTseSXLDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5Kg2BRTsBNMBDQSaZnv7aLgTrKj8gKqEZhJrEzZMGqyQ6zSkjoD5VWL7bj14mFhnSbxp2BG84DeaePgrriUziX",
  "key1": "5QNFzYKuCx2tJt9RDCYaLgwisSmktugycN35rxezgFqosQJ5ZDHMi167KZtJzokfjX9hqVMjMs2gWc7Xo1CiR7gF",
  "key2": "2mdcwkje8zkpVUUXwkuszVmoRkDfv4SDfHxC4Hv64jGY97JB6kWZZe8T8cUHymr8Ze1pL7VcPt6NvSRysjNCvzjy",
  "key3": "2uyqUgqZzvEZyKW4FzPPWt7XKCbp3Fm85KqdriT3qASXg1EizCZua6HbpJtdUA9CkyAcfzhCLvxRSMxzhUkurnkA",
  "key4": "3ojzmzJrrXVjKjmPGkrSjiMgERhjUCXvmxmCfppEe5FqZAQkj23SmE3A14frqtVbatuKcPHkhSPJftY3K9tvP1CV",
  "key5": "53ecdhhPAUU5eLgX2AZgqxhGkXPYe8jrKwk6XkmNoppS7cPoUoaESE5q5jU5HD9cjbtB4vid7xM46CHyzwh4zQbF",
  "key6": "qeFvNy4NeMSyYfdBy3EcFBRn7BYWmPSP8QScoebe6ipuhoXhyBdhBYzGsAVVQGrCkdff4d57aDSuSqtowPsNg9S",
  "key7": "49B3cWPANa7De42uLkpDekgpUegSSudsj1ngC3iCoH9tHvKP9onjt3EU4vRLPGEmwvySUotx8tUhQRabyMVmSdMT",
  "key8": "2j4AZGKzzVgYkfpRu6jSsAwDn1hBpHFVYaLmGhSpqxm8CYM2363feETK582Rb2pexTXxW2AoivWqqinqNCRsjhvN",
  "key9": "3W1Exd9Rcw1SUB16afUFQ8GogVYhS2NMAHTknY9CEo9BiT2oKLMPNwbnfWUiUUyCgoYoAbmA29YvJ9ofEyhNvMH4",
  "key10": "zHFuTLneTCjmmcHX1tncGG1EanjXSY1BHGNLNioS9pnwxtQoozRykwCWCPknJv17s45AoW7zWP1ssK8YikqoFaV",
  "key11": "5zcJuc1D3mVSiWWEfYjLR8NfPcAh4R9v72HXahuuYf8x8DW5YkbMBaYwLhj8jjQ8UpCFXzUD96hssKHMkgG2ttc",
  "key12": "4ghhsNbJ2T2LkvmJsuCGAmweBmk9ThDSdcHYDSbRdDFURPqMzTEkDYzpxnvGz1MmiPFmFxA4tuQyTktVD4fpPGja",
  "key13": "3HfS73thUkyZQ6LgDKXABzh7j8azXbk4yBN8H4phoxqzkBPTvh2v3Dv5VjUk6o3n2uRUfWzouW7pAfa7ZfckauCn",
  "key14": "1q4KHZq22YAhVzSP2wJM34NQsCDY3KeqovfpPCts1eWB99xMYVsM78LKPLW2vFmQboRVL7jgowrZsT83XLXHmM3",
  "key15": "3zDVDTLcBg6uamH1rGJHMt1Z3csHCnVqy3PSsFpbrcDZBmdzKT77W9zoh9hsdoW9PsZA7okWTK8mJ6DjZwY2soVK",
  "key16": "2n5PHYaVgWjj3GQKzFwJBko8pbzM1TiXmjKnHrxnobaR9wgvhAaHEcwgEx5VQWKBvLguVPHbFZKpJAjzR222PxzX",
  "key17": "4MwHA9WvRbAtqjcrNW513avBPPdrd5rnzUvgTsvDx3bMqr3pmfDMoBHa1Ftf2UDWXsKPNJqchPMSEXNTx3GjaUac",
  "key18": "5cudmoLSb7q3ri25JYp9SZvV5rYaDX7namTqYsD5mJCRCwBAA4mRVbx7RtMGgeAnKKCSyPXsM6gbiBeScTDQKbGk",
  "key19": "5hSaiTzukDB48YPbRckPhvBZxihHSuqkBiinB7jCQA46FsV1Rtx9LewF2YhUf9wbhQPzVG84LpRNgTsA9WM6Cafh",
  "key20": "zY2U8CvT6EynUz1GmNduixacRcDnytZ88F9RhGyg7i5DhwcqBDDG74TzcoYyNdwpFMNsGEig2hNxhuA5xxn5Cbi",
  "key21": "4QcjY6AScPazFKhaNsuzdRWdUQetby2p38VZdcvrFZyipHzy88wEdzQ6X13A63vvDDQuKkRfnomRcKTKCoSTdB27",
  "key22": "2PsCGRczwFNkUMe2bW7dhA9SJRGvUhf93cKsjEnrYqXJBvScduuFQfkiaxDuvJLXnA7xKd9YSLoAaDvV4b965abh",
  "key23": "DoXCjsvL5Dhj6RHu74fTzbqENQSFDx5wJmowvEtP41MFgsj9pyFGZ8CDBcbYfDy9D8rzFYCKTMRqmtgfY7tbGAU",
  "key24": "5CV8SGL966yX5BPqb95RS7J6BGMRQNABMg6j1biasbxnaEw3Mwv7MXVDAQ8Pn7LgxpKAH8QSmJUywaZ3EhF8HXBc",
  "key25": "5QBE2c1YerJ46tihM36t9eh6E4T7aLJqqxbZZJ2fjzWaAYdEisB5HzX4FErwijoLZ5b5671wSHJxeb656KyhbWHQ",
  "key26": "4MuNAPfsbbKQH81EhQBehwtrGbbjDbRUkLnvyM2p6XhwKT86Eu3ST9SnW47TAri8YArtcw87GoWAsqLN7tvbZkWz",
  "key27": "3NX314bKsY5ETfwX9syCYFZhjQBVQaiyeqVVPWASZTS6b78QSipfnGyR3c4iTK86ZgbsYf2wTjehpT52D2b1xwL3",
  "key28": "rKPZN54joRNxnWVTuvrbZ4jEquQf8jsqRdSudy9emxWdjagGzLfA4FAaKYjegdtpJ5Mx2NuQzowSwCit877kPSg",
  "key29": "39J7ur3BMNAtpm4iadgHvXe83e2UnvtxJL1mevbeSbVqhetVV64QV9DrWztsFMFvhtSKtRftqrrRBFoTVL6VP7hr",
  "key30": "3aZhTLDUXsQuymmVrUJcNsiZ9ge64rZenFF7cbyVZRA7XKZ13Us4qeDzy3UHJywaPg7Z9srsLhXRXCtjktwzqePk",
  "key31": "3kHxeebd7i982d4c3aLortQNU6Zj8xjNiLGfvveFLkuuwpW1UUg4jWYKMVFGGdjKXsRWHULaQsEzos2sRUudkUht",
  "key32": "48xXtkKBXh16ZixUL4kE9dfopAHMhYk5DXa9QirYrSQnpJK5bJBNgWf3VNsynCwW9dFm1FJ53FFwckDCe8Z7LuEs",
  "key33": "5QvUYg2ac8ErbSftrcVqKyZnyJwjaEj3EwPUq2fCVyj4kBDDvhgVLMbEgYuhbrJdZ9yrdTr9K8pLFEtqq77NijwM",
  "key34": "5AHGLA8ZseawxvyPZurjbkew7cgRBpwGxDfCCM4aMETqgTpxH8MQ1eXkkqCAymzhm9ntyE2CnPpPXpBGaVuvzmfd",
  "key35": "2R9isTZVzWnssDtu4EBJGfFcs87R6mhjzdKoDDUK2dboykrx71BSruGKZzF2LgwoAQhGB3vyg2mraqGPP2hcn6Nh",
  "key36": "2nhRMmyXwfDfRqrMcuGgARCKkbVJHPj9CAtK2K23rDg5xTW6FaDBM71SQ2PqLCAg66taVGQ16pWov2turLEL4UGm"
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
