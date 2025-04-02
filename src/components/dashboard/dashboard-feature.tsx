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
    "2wgiyV6QZ85KFcQK4RFuGCTXZXzk5FHMVByrMhbgcEnnanBxTrwvY8J1WX8NC9MabSdMhztr6opuRqzatBT6RhQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qy7fBdm1eKN1PiEsmMxn4t1PApmmz9CZ4ZJaU99nyAAaEwDLsDbhaKGCDz55VCB5XiQYikstVdwKfa7m8YkPWnv",
  "key1": "cPHjPaFaEXHfJFs3iLt2hAKMbzzpqn3SrsdnHb3F5p1K9DkUXu3utjhUbKcfnNvT17WfyjD4H2LtVtpWWPEq2o3",
  "key2": "2RSKftqovbfuSQDu4F3JhoUN7jgxhdAjFaK2ct1SiLDAXR9xyGh3116vTc5DHGZzW76FKhEtnyHDnpthQ3mMBEK8",
  "key3": "2PnQ9ywJaUYGWPM34DdV5SFZW1cU8FPPKsdK9fyv6E1Lza8incUfcYipeqWQwfEuDy6XHyVdRLPaym4hTc239hgM",
  "key4": "4ifzc1iyqFeG6zR43EDzMWDuZU977rGALDWrFGgY5SuX1bp6rRfcediJsKjjobfsw6dAQVL5qVpEmzcxVzEkYdgr",
  "key5": "2yyKxBkKbRnWpft2TKV4NPcKmZZj63TzBBrEgRPfQZu2eCmz6MXf29WfXdQFBYeArpjD9FVy6SzRjv9xRRKcD4iK",
  "key6": "2TUJUQMhiNu8S8Lq2kiEDyTcfUQwxdp4d69STkv9t73ZTCL9kx4pUK2Hp8hCR82zKmvTXuUBsRHxca2DoE7Ly7fa",
  "key7": "65L84YukG6e4ttQXQ49ZcT6bkFv9wEsWb98iUu5tymq43Q9f2EG46Xu6rsKLbz142vRAM7b9KuRXhcwZCef89Bvh",
  "key8": "2FbJd3k7qbLkaDj2JToXtPjQtcU7ZwT1FuTfmMUiPULrTdpFfjz6NSvXRbTNjVLfSx9qePMZ9UFiLnAbMBkykhp5",
  "key9": "3PVzhMDekGU6EAp6Bea2F2rAoq16NHq54Z3XhcAq7E5LmLnmP9SKEsFCJHq79Sigs8Yq7p25LzqA78BE9KWji2KF",
  "key10": "4qXe49AjFRgKUxiFpHWtraXseCPWLjEhSaNURh1MpjKVrDGkHMcr7M4TapbHacZh6eBQTBi6bp5UCLW2dJWkJpna",
  "key11": "4YUtafMg6QDJmtnaGERGiBKghmrdmfXEpLx7bUJibJjYcGAs8QJfAe34MBcVPNjZBergUxf9rACsGgh8TkE2WMcd",
  "key12": "5f4BdcTv7GFsXTa1MY7Y4tXu2hp7ZtM7icJ2UoguSwq23fC2j7bGoTkGt61V15fY2U6hmHX6dtLHFpErA1xUi8DE",
  "key13": "5SXrTEGQSYknQFgYEmeuCnTKJCp8ZESYiDE4Zqnrco44GPtpBPuMFDPaQyxWcLCVrv8jxBpZwYQqefYDfR2XXuzj",
  "key14": "Vvme5ifUhGN5GQKBMwMzVVbTAx5qdnYkeVoDkvW56asFSTa4pxGakaoGR6nVvqXLbBPrpu56doz5DYtwMgEH5yg",
  "key15": "34HXDt8ngsrQAtaPdn84RY3LZSv2QTj6kE8kcvbshmbWYJZHhAUvUpYDFiscZKMjJySbLVk2U3HeGiJHp3Dqg6Sr",
  "key16": "sqSMwPJ2cyYyt5fCthoSRCaN9cRNYFcLXZ3ELyj2BF9hFXVmvv46vtgBtHmKbY4ntqXAtH3j7tBDejsmr4TdnaQ",
  "key17": "2j7v4JgrVeypP6iuUPAe2tSLrVAhtFwNvZA7AZKqb1cH5d1eNPfxEZN8VuMEUkQVQZASmcuD9E4UqbXxEa5vUKnb",
  "key18": "53sD2qb2F8jSFy9bAZ9QstCXi2VReXscLGb1Y985tkHN8hmxhTFjuRmiW7hC61YQnzigcaBV1Hj7RnCnujCESiza",
  "key19": "1c443bNvJu9c3VbQZ3j3L9jLNWFLpdLCs5qwnV1JVCxymLyeFaR7pBXd4Tv37YhQXqnfwu7KnxFvPgsmAK3KwzD",
  "key20": "3paEct9cSYvTYk9EyYwXLPxofFcqGovsa5Csaoz8CmBNyEfZ6WLsCHMnYQpTcqzpGBhhhGmkoYQg2MV4thnFu6oL",
  "key21": "dC1ZaCXUqYAaL7ttddM5Yi6d6gMWrSTNvCG4sYN1YW47KLrfChDZiZJu31kiEeSNG3CEGgvw3Y2FTQVexb2dhXZ",
  "key22": "wT798vuTwVpFTdcEtKw2giodtyfYP7cAkmVzsgWS8bmUZZi3aXsvFgMfTnUKsTAwnqeb5nkYAH8KBB1G2DzAzfc",
  "key23": "3YgEdxr7Qpzb25eyqXzhcwS4uhPk2rgrDqzVBdHUfWaug6JwVgPxDdtjny8kUbG7wiaWJCkrJFpSbuE6DrHSEFto",
  "key24": "zyb1xR6i4Sc8ApatygGPpEXpmYDZX567bhpJjMzKmkgAqFmVouMuvZnDrh8cKjVVSySFipiHru3CM7EoBPV2Rzo",
  "key25": "33H6a2eePSHpPjEphndRbahrLT9dt26jYFqfpouF71AoQ5rTcbKgdUNdqdLVRnEGGttAkcarGRWWqMUwujJtxcQo",
  "key26": "42ZNNkmH5coXgfWq8KYEk681FdA96PWC1XzTuX5Lw1xGMLRs2W1cyzNS2oGoyLX4h2AmU6ZYGXGpreAtqWL1vTnp",
  "key27": "2b29SfgPcvmreDCSLdLJZkCt85EFdG5NqiTtkC7HVBFu8rPDfbWMGw5MQG4t9hcZp3L231gfoEMFsBSbHq5ioo97",
  "key28": "2Y1ocyhdqqbJRHvpdSUKVXjbC1Re8wz7KTPxw527Zp6YFYvXTce2XsbisQSmLsNzW1Rm8dvfDCwQSmdyf6U4oVWh",
  "key29": "2zDLFJgrU7jrYo7VBRFFM3JsLCC82dPbz9x1CjKDACLhi6myL33njRJueES96USGXkGfaF6AmkaxZoXgj5pkGAjs",
  "key30": "poyyJ3Qj17a5aqWgxahAzDtqvnF5btodCaRAHhTnA4tTv7jgiHW5pXRJPuEb3drEBixk57YQnV6BC4bzXdw6Z11",
  "key31": "4EpnjjWYuJkHZYPDLVh2dZGuKXFRdPGhFLMfNvtBsfbsXdTB21gBg7WZRmBx4Js3xhNsNt7oKADG7u7zseYwxukY",
  "key32": "tWRMrKsshhYjb1zLvKhbEhQZozfQ2GzLX4YXqQGmu2Xe8sxHco6HndevoURdGUQiUyM9E4BTXE7grPwMJRW6KoQ",
  "key33": "2U3zmk3BqtsMCNEe9Hnj3rF6qyKk7317gyVpZeERX7E8NZ1NkCkEZLt7nwjNdGW4LHvhFCXWhcgKSzt93aU1gwry",
  "key34": "53mryUWpib6b76EgrkvCNmARmcxi9wbqHVnMXM6u4kLtAJQPxosRJoE33zChmKJLrg83sqYxsxuW3RSUPwC2LEhY",
  "key35": "2A8sgB61wMpBqx4eXeYMpai9uV7TMPhs9SZawcSTNwTsCivrkBb6LLZrtEx39nRWzzyJq1MHU5WeUEUcrPeQffcz",
  "key36": "3ZZCFGY8Hb2JHmrVq2aJ8MkDQL6EWJuPkeGBTBH5MqWNWgYhF95A5SvVTyrHJqtCx6A2o7qKZNuwwymkB3oz67u7",
  "key37": "2P7XzyYsDe2R9Z6wdcnUEsrnidgwqV2YadP9ZhhAHUnihTrXBGPPZWW5RBEJ7cgVvxAfWNPpD31t3v1o1KMBMe3w",
  "key38": "2H2nMoEHQXrPkTDPkYd6pZjrroXAa7cNQfgVRz7tPG1nc4tqZZ9E2rUQA7dumEg6rohu43YEWQL6ivadCv1cfS15",
  "key39": "3UQ3yqKZ17URdxpXo2CfL8MGDCCzJD8K2HHQoAHyAeALpKs6pvc17SNz7oCrhVr22hzroVREmxJXgc3T6XH73mfp",
  "key40": "4Lk2tVZAbiyz9iuG6KAT4wWBtbZxgKsHk4wyHZxBze9ffp9S1hJdQVwhwkbpBKsnYsWnwDyQ3hhfXYrhPuKA9ngH",
  "key41": "5MPueeReT18gzdkdh4GBXvqCTz78rDwiYXthWoZhqBdCLVRx1GoEsCbsaZ7tddrX9RHdN24hj7C2p8oZ6mvr6f6N",
  "key42": "3aw5zbzm4witjSZoyCPWiLqYu6LoEpRNuHYJywXx4B3dgtyaPDTHdgh7P18TdBLJBZN1c7AEQHXSrRgvWN1jqE5Y",
  "key43": "2V6eXyWfpjPTUHjBA7eBTAYMGjXPGMPWdWK7R2B7s2JzfNBb3F2CfQgHPsUKv3DbarHEf77eHpCjGqkpzxe6tehU",
  "key44": "4PGh4LnErNpQLVPcNL9d4AULCwBpfqHReC5qxEWUKaR7JynaQaCc6UMVcaXUc12Vikc4TYZ9k1dMUg9BT2131jvE",
  "key45": "4LdEiuuZq3q6rRm7Ygao1Lz2voHTFfG64GK19D3YMJ2i7bfbXb7ZLTsHGGh1QxxuuHqcrmjKgtwWcUQQUuXya1kF",
  "key46": "4HgJ1tsGNerfprKHy7uhaPf2bSu3EpJztEEoD2qweQYtiJPnp3uM3cx8Z2YhZe6ceLvoWR6SeYDpaEKaC2VzSEpS"
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
