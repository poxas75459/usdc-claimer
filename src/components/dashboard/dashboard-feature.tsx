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
    "2kjHJ7GrcsxJFdtjVfgxCmVw9UTnCpxJLR17Ay6pGuY2ysRp6auZHc7hs9hv7Wg1BSFf2bDcZHfRUjKSspiiNKzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zsh2UA56i1ZuobZCYrq3xhmxTGww7ekXxK7MupV5NEpCZpRfmXGU8Lzr8Nt1cBC6irQbHrM9qrfdvKy89oL9SLK",
  "key1": "22g8BeS3ujypwGBwPwdyUhTByB1j2imyS6atAZmL6fvX7hNDz9bTfFYRKKw7hGcWsGx4Wc3vnsKvSuoyvJnDkxhU",
  "key2": "6nNypdPqAe2843ML5XzZjZ3AP43XZ2QiChBTYxyLahnMa8sZgWWy8L448fseBknTN2KhPBBFEDjiFvTUGExWxNC",
  "key3": "2SDKQFi68WT2T3dENbFrATXxSNpQ1947HVpMiXXFpnTMf6X4pcUAsvYKRzcTdJmv82WKfingyQkEguRdVfMxuBsi",
  "key4": "4rvGfHjWonbkJ2E5ibCs16fvUpaKPdAXXE5v1B51T1SyjdUmXs9xqRBoqSCbsbhSPRsx7pbbEVKrSPU7ebwfdUA2",
  "key5": "2DxUGCUXCLnAzusVaxDiQUW1rDZaaJvdLyLR5yLcfH2YRbbqKviUCUFLJyRqhs7ogUKdBkJrVGd21rHJFGbNF8RU",
  "key6": "4HMfEBmygh6G3JyxDWu9nJCoXQqBMgJw79Hu86Y2pSgb8X2Jiv2RmDsZybvwVvDdRAYFeVKgVPEoE9w1J3ZtpAAV",
  "key7": "21Zq5H84rKEj1ycvk7WL9WVVqnihJTuuJ3TqJmcTgDqwYXb5Bh48yfUPpHntQuPiYGRjhkYFj6jtPGHEhPZTy9kM",
  "key8": "5KxU6uvZMJwFUhbzLtczX6o4MHxT4CnkxD2SDiYXkmnddpYawqNYeQpdgVEXDiBTkcGSSNwDc3MWXtMCqeR4oW6J",
  "key9": "r6BeW8S3joSoPpYPULwjWUJf2c1McNVSCcZbSAbJ2uN1jrVtEhvekJCRHHpaxRzgoUtv1cAiAxbTgMNmLg57tHM",
  "key10": "5otXMvNVH6z5Wf2cPU9Du7fyxDjXBi7CT1rjmSswoz6AuXhtvcJ8wr7RdhNsszEexAVL1u9EGy1F3wDLZ2RwaqCV",
  "key11": "2WqYT6e7ajREn16QuVYhYTTPS8geeBJ1fPpVboAFFwPMEcRgXdwdoUv4xoiBngSsoTB3qyfBYUDgipkXfC1opoGz",
  "key12": "3C9iPmn56eBjmH6oqn5xeN5PAhLnNhfepdaKb3LDEDAppaYyLGJynbD3ANKhkfkaJtbxZc46YVZb1BJtkq8tpqWi",
  "key13": "3q9FLkLn6oMuTowf2ZQNvMUY9bJQXZsEWMwWCeQv4RsFitteoYt5x5tTksdzebJoej1oGAFYGUGXx4JLMQyxV9vR",
  "key14": "4wT8H2wCx2RTn3eNkFW5wYLChB6toNqLgxU3hWeViAsY6VTtQCEz67uHFbJFmURDtoSAcLVH8CPJziJPtxKULXHW",
  "key15": "33Abu5n4UBaegmt24x72n7VxLvp5HXw2UYmD8FxhqFbQewFSjeK88Gmqb1uKk9vhxxa8jqXBh6Sh1ZSGTfJ88zpa",
  "key16": "52VnKigeWNRaq36vj18qnqLhnupRQAEgcockyAugNBUpBMfEJgTM7NwuL4s8Heuv6RbcFHHmfz5awNfBG5btEhs8",
  "key17": "2ESbFo6ET5jqX19RV6tY8Ynx6gj7U8jbxnrMggDeB12zWWDyQDktzJ3zJkC9t51sBLcv9KmrKvUXXzicayjRgco8",
  "key18": "5WQBcgz288tENLLDJUXN8WeYxnSBv7EJaMP5vGgoaKa8LbG1hw3vPYWrnNY37pxP1TFZJm29oE6coiMuik6WrJsh",
  "key19": "5C7fXY7V3DUnkoZEgTqW4Y7LDjp81xVssP5L453hZRFctFU1juLfYHFB8pKMEzZR5KsQJpQMjo8cGVmt7rpJUAk7",
  "key20": "3pEp7eE2jKaUvxTHYj7s3R6474DSerXGXcAXQarHPSHHsnpVgyoGkbqCBb6rShadEirWw8C6JgdCTHEfMZbYnntV",
  "key21": "dreuTX5k5XCJnXoZgE7UbSUoeAhxrc1aJJ4tgs5dpP1NyRHjinsFoCQwQeiCqBdccaJQWjuhctse3TrQhBRohdr",
  "key22": "BavAvxUkQgAehYaAV2qvSH3shvJp2RAD9PMwTFdcprxvZJ4SXrmcqNzrJ2pB398dpaosVe5N3JQNaAGunGbQKSo",
  "key23": "2Pt6FMKCTBP49DnVfjJWpy4hwrovoESDKn7Sse7Uwaq86umd8Fn7eqDrBjSrdh17mhwby1B9aougFVdejoY5vZ6G",
  "key24": "yXbcPrtdFHfTbGCv7MZtENbZVMMfG3bnYcWCeLmS72gkAN7msFnxskpmQXD4g5ibfecpfFGkJzGVEmbykH2mke3",
  "key25": "3cMZigGDpkrfBJWUfbhnKRDpVZtaqyDU6neinis89cU8sxmPkLGuUHmJp3qV9y4vXctNmHg1QmcPNiaGWbVdCajT",
  "key26": "2H8s3NXnLJMmWALcbp6USyeQ8oZRQeJqmWoEcXWia5YSMSSeBq4P11kRbDmtob9eMsfqZQsEwPeh5uQfJ4LTrCSL",
  "key27": "5QUYFuu47Kwcur3v5EUvABvkXz357faEwDMwujtRR7SWBpTdaERP32fny7iWrCitnYiGAokcP2v1HYjRNdiKqn9M",
  "key28": "34gVEu315iEBk3HELArbAVLxpFH6rxVbMQZYeEF887GVja9bDNocTbr41KeVtduXVSPiJ4uTm7XYMbdf7GKLERtC",
  "key29": "62MR9rnMGASaGBHBHVfSUxmzVxjbS1DSSdEacgxLzHeYSs1viDWWsoWdjAEHpNcEPykP5e2byFfG2fUUHLcxf7cg",
  "key30": "4NpR3SHgJzxE3daDYMoibSRsgKop1nK9ZPFJVXvKQLjKkVmHpPmnrf8sRZz5TWhfK8EGJkUE8kCmBYTgZgJ6KXb1",
  "key31": "4UzTqoZvnKCUVVKuRJuAfPdF1LE3MjbdtpDe1i4X85Q5L3V5EcApSMgn8jjk4AVCczS67cxkv6WXyefdNi7AY8RC",
  "key32": "5xGqxcK4A1BAWwMFzY9GjfT3cTWCPyK6R8KnmLNdmshT58CveHmCxJn2oWvVfezaD2uyksiTZzJGTgokuCb2tDbQ",
  "key33": "T6PaPPL4G5bmEh7jYeticaomm245zsEMjLVHn8BcR7a8tUXq4FoLjx1nptaWkUCRj9tNWZrNGryeVdziDosj5ZH",
  "key34": "5w9fp4onW92Uy5DQ8noXfXBQRQ6qqXBwmHWjDveADxjPBPCXQsgDiEZw3H3XZfPaL1CnUFwN4dNBsCbGEadiqai3",
  "key35": "4rhPf8B5cNJeLf4zxWVxxvBK3gxMUbHrD1HgLiqZ727c7p5XB2s6GQ7imn48vDBHFB3JYE5xYKRkYvHuWh5oab47",
  "key36": "NdXBs5cG5syceF4siiNyt8w7SwkYuepKcgNmhHam1SQCy65AGbVGCyE2XoA4QfZrhLUhriQxx8ogCA8aPAoVTby",
  "key37": "NfoRUqPxvYptFPiN134AzTXsdXry6Qw4SQukAwzXBqgbb9Lcd2KKMji8MHQPEeqKhyji9uPvDyC7s8kabnDC6Kk",
  "key38": "2nw2BJ1DrJT8ekby6rW2GD12uzLX1UoJT1kginoak5RkJjni8RGK9vJjDbbK7X835ej4JMJSBB1xQym4zi1Mbz4M",
  "key39": "hNNkub1QWvPthJEWdi7TQUhr34jzQQh2An2Sa4AN7e4nT9F6DWrkMNTjdjukA699beaqpmMcGRj1tmWMBUxFAZt",
  "key40": "5FyLMKrTNdn7n1uJDk8a6VGfWCT6JpheCk4X9h2WH5APxrUfrs4vFtESCxxjQboQ7VQ45BarHx9SQXAJ1gSgrBEA",
  "key41": "4yMk4bgSAAmJD5sKGjd7YPKDD6yEA95ebEZD1ETPDHrWxKhsK8pCWavqTPMF71811Pzn9XN8cJ18PkxX4yJHVAgw",
  "key42": "5ieMsS8JzRFYLPJxaQktcS8fa2JMdHDJXVvBhtQek1DabgRy1Mo67eQHLmcq1aipMPvAog2McrKXPKasPUNVY7MZ",
  "key43": "25e9rWmUTXN9MnW8Nug1LuqdBXgL5YU878A7TtMNkf8MfbPeV1gQ3ji6GtcygZw4z6sF5SeU2Ar13fjzdKE6KHtV",
  "key44": "4LeZXbreUMVSBPiLDUW39qFTumAn5PZnMXDvaxmXUU7Epz37UFoXvtJsx3gVgZdBqYLEDbc7fZwzFTWZNRMmm92F"
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
