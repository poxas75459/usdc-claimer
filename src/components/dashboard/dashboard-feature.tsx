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
    "4efJfLwB89BehD6nSd4H5BLNdDBiJBxeYVw74BDYUSX7FqNzKE6JYZEs2tXoM5EBbzA3s2uGCux3NtUysCbXv2Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nhg3J5dpY4JYUapyTaaMms9rb5cjnesXwFh9wSWxxoZ7RUg73PftmUBXRYVde2jjcAPnAEvTz2CNjVor2tTXCji",
  "key1": "3aXi2AKJr6RgTYFSa8xR3j6dAVpDrGFv8twnTeMASXZuttRjRh4TtWHkEk2cWARjhQe1SLL7kkn3KQN5m4TA5tgC",
  "key2": "5o9BPQxnrTK6McSmMnmyZQmNZ7rxXBWSd9Tuuw68PgFNm5c2bz5fNsnjkRjXRCxWcxCRGMkgeUfV52vLvT8utoBy",
  "key3": "2QGYgqv2icBfdeqz3fitHDQG5ZmWnMGqEdEeotkKKD8VyxpDekoVztNyqK47j6YywDR7jLN68CGiKhzKNP6rRmdi",
  "key4": "4qgmDMAdVwhR8x6KREpLGHQFcBTmNE1c2nhhk9VLFY7TfjfyAQRcZdLc774XqfVrFgsSoPmTsWZBeKd7v1LQWs6n",
  "key5": "3vbLYYxHFfT4o3sPCh1JCWvix6vGKmAjVYyTUNA8Qk93zE5NtWoay4EwwtTgVeyY1zaavoRyTFMUSKd7VNgKRRTy",
  "key6": "2UHsUbi9tvukgfGXwyjm4tgbrxGtjCnhVX4EyUAkdynrUJ7K1rM1y7sPveU3PZHqXBdSmeMzKy8vh9d4o4GpCNkm",
  "key7": "4pfoULj32CceAGnAswxthyKNJM3ryaug9JBSd7d6zQWdV1ijp8prdoApFQxcGv7Z4QD4dJx8XB6YGYW5CQNZTcLq",
  "key8": "3vG5w2KwNbExpn7bT6ajAaA4Ps3PEDeNk3VMua82L75Hmp1bAHRdtm8eNJ6ruabn6TPDYYCMbATVDtvSU2X7bbfU",
  "key9": "3eGDmEtAUfPJxypyJ8FERMgXcAi4RcG6mAT2kqXTw8H7EY8HsXReEj2ErBt4bungpCoCi11mB23aRr6M7iyK298w",
  "key10": "2fXSmQopgWHtwfmCPxQWVwUZmotsr4nm5PPTFk3LWUYZYnecqGVv6ZAx25vziqYZKevfAC2xAJeKMi2uogyrMFyW",
  "key11": "27ArCfn9kVWSXjkwuL4G5AursjoXABV5Fda5kf7djobMppNuyUuDQ6Rig3rt8yszyJPew91uN3vwHEnp3672ybHk",
  "key12": "4EJdUHxk13hh7Z14UAVpTBGDKmf9Ginig3HtWpYZpYpzwsXjNgUuGaASFUfLtiMnsYAcjY5jVtbhyY98DMF8nm3C",
  "key13": "3LaqYJmYUbjS2vKNWFqj1ghGvS1cv4MCgRzrdtatS2cLMaeGFZqN45aGsVVh138UQrkejkgMJpQjaZwePNT9xMVV",
  "key14": "E2fJnTaqCpE9oVv85ULyCujEhLuvf3kPLT3qafVkwgBoFTRpK2JdVafucvvgT7fk6bqy1S6ksC5LremfRxMbNsp",
  "key15": "24xugVTykZoUocHAyCsS2rvAUS8Tx5xKEp6gkaL9g4LZqn1UvK8Pdy2q9DrW49pcasGPh8ysCP2WnrUh1FcyBL5L",
  "key16": "4Vjk2QusBZDii7GGpKC8xDR8pBjFSfCNvdhEGpht9VfgtEQHQGFPVW856hQ3nMs6jHJQCR4Xh5JxpmnVdNGySQgq",
  "key17": "qNgrhWecSSQUzyL8DihHxun8Ca1USnK9GjD2ShfJ7X4SE9CfxYdZgBxWtZ3wp59VrsT4BHUFct2Ud63StGmJxZT",
  "key18": "2kBedN4vw21jaro711qWcP2dk6Ji9JKY1feAeE6Zs9tFEaRxeGvv9ErqsAXSS2X6idaFb1q83QgVCK4Wqyvn4FC6",
  "key19": "61gs1mzTNFtQLPCznW4T3m5DKaPWi77RT3qYhQ9BiYHT1GnJ8VzJnT9jirrUjmhDSZsXghMQ7pSsXMrT9LWQosqL",
  "key20": "3zw7q1MSxjfkLKCSggN5ZnpNAEJ6ZU2Vmvxk6v2tznS3Rk2GvPGXaz2LGd4UMdzSaoeUM6MBrNk6jJXZTciYmrJP",
  "key21": "5VKBZwEupFZTyKWLwnVMzick6vGNgQa5TAP9vxG7RxKJb9g6f4vDTY6WauPG9LopKrBfEP7WYeUhQ2hnH4ApUfoy",
  "key22": "4rB8efWF7wqjy6bXY5iY3wxoEwZjXx4K9V3MrZZrUNFfMV2bezZXGqQJ4oBkLxhkc5WB2Z7j8v2PRCa5zjeJtCq9",
  "key23": "3tsrXyMiH8fVF7HBjzyCqPvdUfZjKrckd9yffeFHekz4NCV5ZK3RHF5Ss9xPnWFSo9cHGUMV2786y26Xft4oNhY5",
  "key24": "4igjFBaP9QXS9h3YyXfBKdcdodeNwU9QKzhwstDjemP2Ns9zuSC7soRRRnPA73JYkFAqEiZBJX9JVTXNSSPTTbtF",
  "key25": "4MacPitpxDs6SmNZPsddQeiN7362bwpb1DKv9jxZKcctYFrGdYtw72zvpThrKkkKhH2o62vwSuVSg1zMaXnKBr74",
  "key26": "4jaghVEPoNTsyPfi4VUAm7B8UCncjAoqWBuJBUz2iA7daZqw6bCyLWLcM54MvUqhhK6ocBxUut2pc5C8L7DpgrUk",
  "key27": "4WYq4Da7MGmhBHzhjpiGyWMixAbhN2LfdbxBz9RncKAB8jv38inAb5ueCSBo6JF5w49ELA23pekKWwHv91ibyK9E",
  "key28": "2EKpMGEWs5sYXASDcMthHA81rjgJYhgQmDdwKr6iVRiftiuH9WhTCNGYonZvitswuWtMsL8dXrADsnmJ7u5EpcfJ",
  "key29": "3QhS8X4qtk6b2PfgwSig3QGUWbZ3CPdy6DzfDnztQfS2W9bp5zuUAxDURzdheAm1o9hkrE2oq7Zx5USzWoCPKjsE",
  "key30": "51nWZrkUighoxhC3CcyxyQP6UodLeaN2TC2S932tVbnirhhFHekY7TmyRou8ynyqas1y65VEW2RNxiuUeUsca9fa",
  "key31": "4wvycLE9MpVs6bt2gx91HdWW3nonquHuRF96fcrwhEMzD2zyjaGZoBD75LgKqk1UVVDKVbePkBFZJMhyHNMr3ZPZ",
  "key32": "2HCm3Cfh7zFvdswQd6oWYqnTqZwhJVkoDqyvPQoBDUtt8WhczHEXmGiBN42Zuh6HsaTPi45hkQv8VjMstLmKKpgs",
  "key33": "5KwvcW1SQ85wXfuPzCiDbdSk2sJYbJ4HzNNnHt3paYDYwj3Ha57naY1wmnQmTXkWmA1PDFLSCTVxru1jo5rbfAGE",
  "key34": "LWqtzfjtD9mwte3qzgzsF1LeTg5ytRWg9B2ucrXy4oMZysVcnZW2vaPSvAms9B3pW1Fi7LPo7nEQD5t1xtzQYaP",
  "key35": "28KTMajRYHwWpaHmiXV2VKZ9WpDmZYgFwpqTvUbV1sahG1yXi8ZyuvNw8GzpGhbr7RfB9tiHGBnx9beMMbg3VLA2",
  "key36": "4ijKknFnLgAYdfECd5ZZAM6X4sH9GomazqeAyHMuaM6se1VZ9c5xAVQzogknuuz1jzFiS9RVKnHLNZ5KhLnFRiik",
  "key37": "4saHuTG1ijgZfkAwcMmmoNrkSNiAgXCCCUiM7UM7g9Wmqt4TbYGzsGiuuwxjWZcAdmnortaAsnygGGRbmNUR4ub3",
  "key38": "4XrGXQ4hGTmGb2GDgFivp8ZmhGzdy4TsjEYK3xKHiayiDhMchbzdiWUpuvq5bTeCzLABR3DVEVR13vhNWETXm7aj",
  "key39": "2WvZFyeXsSvgsRSZP7fZa7stQgMWBDPayPnv5npjRJe4JgdZ4zgArSvGFnnAvdCBTNywonR9bwiCZZD4vaJcamHG",
  "key40": "2Fv4bF4H9hzEAaGqxFCVUNuz5yfGaBoi9exLYwyQ2Ucnra7VagCzmJsPGJpnwBLiTdvY469Grp74wFAYK86QCYMe",
  "key41": "4Zv5k6BqWYAqYkAfLQw8V44EdX4BryS5saqog4pMuuNFVBGXmbvEEqfarD716DagjCFLwVZEVDtxHgH6FmG9H6Wg",
  "key42": "WgriY8hPbmnvkjD4ZZN2dbWRxPaBtwTwtrfgTgggr9dffPiqiZWWTwcEuXmRXqf1RgYM98SgGLAQjh1zfg1rkSY",
  "key43": "3wNscRGEvdqtBhTJx1Svur2ENh5rNaH9FmzD8qmqiJ21JTmFAshwnNTbmTvSwYphCQDPWTwjyJ3SvJqDhiudqDNo",
  "key44": "2xaoNrkQwe8MDWjQSChZUNnJbHmo53hqJPPx7eLYpBD5gXM9WAUTTmA7SzGTjHA4X1bgKYsqkL72WXBmG6xWSD1X",
  "key45": "tuRZqQJ6aarSC1Ls1yp9omKnSTe1kTL37LDdN9yx4B65ZBFdxHUCr1dynTvMUhTPx8JcajqnztrAExH2jQAc8Q8",
  "key46": "5Z6ibZjpM6LQQpMqPK5KhDkmAtd6GK8hPrjPrwSfzVhThZ4pH2B5TDGfZHCmjUWt2ob76TsSD91nsjf9DHoiDjf6"
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
