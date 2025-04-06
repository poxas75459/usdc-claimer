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
    "87jYzgUEPJ9X1oV5W28jj7QfC1BghvfX7AarK7y4MxCY2JpDDfT6ST44bxsBnDjNG5vhKjXKcU9H766FHcq57x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHGemKaWZ1UCY4qyuHtsFKmP3kyXWQY9uX2EZCzL3mTqp12DZhchk5jUm1vjGjZ3VjpzPhqZn9FiF1MhopnVCJp",
  "key1": "tKzGJgV1GGvizKApa1QvFHGBjmaGDZncK8NnJJj6QarhkVtaPxv5k556EMtz7GM4qpWuqhhXnVLW3r4RUKjgwC4",
  "key2": "5cAgxHtZKPWsbGFffCMZmjuBL8Ta2Zfr5HEeyQ1C3MjiZZuaZt91uJXq61n5q544fmLhRN4xmPAc9vByuN1LmJA2",
  "key3": "4y5wjSHKGdoBZA88KdNX9VRYXkEXTmCkDHoiN2T5r5kiGRiJ7iTrQ1bo8sCKEvMEYDa3Cf6CsHMwuuA3gPfcpCLx",
  "key4": "5ScsCpFdcQpko1xPmgkNhJo4f1pYa2BZSA2Lb6VEPtekbQpXfx1TMoDnzwymbjhcH2enqf8rhFprmoZnrxxA1oTF",
  "key5": "5hqFy97drfw436rddnVinfPSTB38thhYDF1JFggXdDBY7LnfKu8iWrMMwhTnYeRb9s4FyxNSRJaySNZBDtQ92Dem",
  "key6": "4i3VxDPvnCCULuvqxsRNEftWmNDEEegCkbMrrbNLspefGAGq9PDbhsM19TqjF2No5xutFFsEhDCpC4J3accgQ5qH",
  "key7": "61Yc79n8fFk7ruaifNtPLDZzHrF7NCjGCzCuoJDAKWfd6yCLambDH7Evq41EN9ecRMbUbdyAccrxg9Sy2ifgfMGn",
  "key8": "4vNovN5P6YHEoQoLH9Bemu4SaLru98T5LinzfQPRCLnrxjwxPgNw4uRusmt3pvwyPGLJXxApx57izLsqjEDrCF8a",
  "key9": "3eCeNb6qavFE17a1biG5Qwj125Q6QXXDUeLi9C1BA4gHKXyVkUNhPRfAbxw6zWSkEZDSBaEU7KfbUHyR9ojn5qHf",
  "key10": "29svtUQepvxaBk3Mhx3JYoNY39ZhkqTJMfPgtwgVfYG8r9Vn2o74B7Q1S7Bw7BQvAomJJj5XVfqnKFjs365s6XDw",
  "key11": "2JEaxsrHBTCYorANy3zo8pn9PvU7dPv45m8tb5EyXFPMcjV8ECvFqBAsKzHDwLHY8enzELMUbUWAMrivcLRMkxAv",
  "key12": "239HcMPT6bXqZMGp1VkaJnrXgHjuy5xuBmJsLPNkcxFmDM3vUe2iXqZ8NxANvoeynmLsx5iMmegUykQhMXxkYXwZ",
  "key13": "uheK6g29FrQ3xccEezSKK6euYayCooUwy42EXHTaTHx7goenmFYa6gPnVRPpvnxEZQAVnmjfBYsbibAGMDTq1P1",
  "key14": "3xNMwRpEjkZb3o56j3S9n5vcCcrV4jnYTx7Dpp7VF5ohUdcKBefETHATbCGkqV1dhhbbAwRqFsVo8iXxaLsNeYRQ",
  "key15": "Nj4XDa82nbnFnKTyWfEAbnjF3fuBCdgKauQjKqjQgZwtix8Mq4Ttow24uDe8i3MBqd6TJEzLVBcTpM7uKetUwRr",
  "key16": "7KqE3LvgWNQw9ZipPrGbGrjm2nQwqppfbm3nEJRxwiAe3DeWZoPkKrdHfKiYyWMJ14KoyiwvX4PWzC9KC3TWNCb",
  "key17": "5gyBzLoWNWFxF7LhKYCkN8nUUHD1L1XPCW5dvsdj7EVh1vKa9oTPTkspbwuq9uzsVZp2LqnS7YkYJUnsTCLz4YMB",
  "key18": "2je7hPEs3dJrEcgHEPfXrcfwLYRTAnUJERuP8J64QDSeuRGfvBrhoqZZkk6KAkJNZc9mCamf9Y74M6QxTxtRhXb2",
  "key19": "46NBacyCPT7CvAycpYsmudhLDmtKvPF5g4XvKFdG4hRzPCpZftm4nyqtu5jzh6CDCpM9Lfi3woE5A459kd7KnSpL",
  "key20": "3VrDaHbnvBnQcY2LtfHgEyzb4Q9Nbdmkm4hNFbYz19ZPpBcQPxtQtPgAtGLMntva55q6DyNf3T7TWbqeTD61grLi",
  "key21": "MxzFrupJt119FN7c88yYDjJVktCNdbRXEVxPMQRPLDxHyNjRoLA3YcszW2rLjbHmxptt7R9jVP7w2wzwicoBA9C",
  "key22": "43PXrrGcThbztV5XNRoyTpbd2NmFC5Go71h3NEvp84PPt9oe6yjckX4Q2JT4iq9rmD82Y2wWeQMLhAeUsH9o8Arg",
  "key23": "5L9VmGkcMmWdrp5Lpo4nnpmKRaEC6vu38agLpBUqRC78kUMK1Ac5gAJpwTLGBf9XZB9jyGVmoe8jg85Ps4UA4A7B",
  "key24": "2K92C1D5hauLskU22JznmiWAr4UWToMWZbjD4XmRk2R5zk81XKAMuWWvZJc4U1Uyp1fN4JY6Dbkgz4D4LmBoZy5B",
  "key25": "4NUfQ1pFzSGXFYYnUBGVMsfK1kmNcBXcmNwc6zFcDguoR1ZNqt15Z6AHuhsYuUk9mWQBhzCGBQztYqFKMgDU9X4G",
  "key26": "aJVTbTjYNodiQ9E6yPD6V11nChm5uwcZsXzfXvzknNfe9qsgbbEh1bwTrSZpo4LRRxsWkF7MCW6Ew7vVqASKB5d",
  "key27": "NdVpG1jPd7oaKicVYUBKaWbkpTkfhHUqZGT4X3bSD2MB3GDvPZVTxD5nTAMGSFTdWHhjQ2BF4rtqVfPJFt7Uedf",
  "key28": "2yXot9RrPrdiP3jCRoSw8eFjKhzb2PDdS7P5iXj1c9sfowQmSY2n4wUkrJqNdETjchDkCCVDJNuNaaxFK6djmmBR",
  "key29": "5mKFj6mJr2DdardQezRfAKNiZ3CAB8LvWiisTNGyzQoKALPMYeMK2uTbRuSw83oizDAiCHBz23jgb7bR79QMC7tN",
  "key30": "4skPin9h8zHWnWWxxD6gfLZuDRmzpXVLrPKWQjTGYf56f5ytAp5zEFxwwg4mVX3WJGXNqrvLVHQqFtshEffAqxbn",
  "key31": "5QGDR5mpRjv1SuoeBfeGbL4gsxdwAA6CCvvszG3uvMUvoFkTRFsoRafxASiEPjYbjKBCD5MzfDT7QWFFv8fcvkvL",
  "key32": "5fk2cCepirXVtgQUmgk3zMyXxBqhSRUGKgF3g9ev6kadAqaWBWNTqEE2Be2wUPtpTXHc1aBwRN757qGR2KESNx2T",
  "key33": "2jtjLhZ8TyKCVzZsJ34jjbc5bbCKm8uMCpGu7zerzrxHKjPYUvyNBAtcKQgr6ZZL7roYommVp1Y18zpRfm6j2ui8",
  "key34": "2CF6RwJRbeweAi1zVtmWYAVt3AsLuu5JVvH1tCRCCatFWXQLDcAtLWrcqG3oUgDHAJYWk78eLn9658sDFvHZdHSw",
  "key35": "3ewZC9Hw17fRAV8D6T4cx6G3KmHcRF4iY2yN8jCLFHjwUgwhDQujxrDGps7gdHyagtDmUkZHdDFwBNsozABhSqkF",
  "key36": "2SmTTAvRdYLg8bsxiMni6ds6PYqUAqJNPymCQd6uZLpci1NPBaJhPFUBfBgqK6zgFjZuj5r1TuzLY271bikJjqej",
  "key37": "tSNkKw3eYpYt7znwZuyHwG5oLdGX3EXNaF9Rpa27dhZRvJBdBzoB8Fdq5bX2cvPNtenEUH6ezGkjdSK7UtMwCST",
  "key38": "5UsgHGWBokpMAKQdK63kxAxiUxMTM44jYUmFsZdU2UMD2tjLWDwvFSqx7CEK6TXpJQDP5rtSavqdcMaE8nUTpLan",
  "key39": "55HiWzNcdczHUs2GaH26Cb1CqPwJ2LrpXRVAAnfqHzBkcUzUdjJdPimWSTpYqXuNwb3D6wFD7abeCY55PJ7brzun",
  "key40": "3N5LiBi4CgY7EXrudwxePPvGAo493pJ1jgCyvcfWbYM88ZSK8jPYJbPsCBQW4TDGHvujf4XHjDntgydh8CjBu2by",
  "key41": "sEhNbbNDgTvN6ZMXF7MG9eK4nj2WKcgok3pyKyxR3SYM2HBT3wv8ewhnHJ6vYNp2jwhHyr6SfKcNiz1YbChu9if"
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
