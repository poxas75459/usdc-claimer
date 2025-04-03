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
    "47vGYYmKLMKy9aVRR7VNxzdPU8DRhuLFSYynNwB1nubB9LU8rLoMwZMmwqyh8dLLUxGD8tbtohxk6Df5P9s6cvcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqZET9ngdQwCi8CWnXtC2Y7LUj4ZGTVThExq1r8PjAz98ndJsAkarfuLeqxDbCdWTFfP7LsymiUmndYjWuwXEEi",
  "key1": "4uyzjnvLW4tW8pBUPMsZWrKewEreo9q4JbKvfQGzERDXRUatWWPexBGLiFthkiG24qW1Do5szKhYyMsuedS6UcDo",
  "key2": "3cj5An95m4w9pRZHuxo7dJu7haJ4XdeBqkPAbo8ZcH9Dqkv4aZjhXgHajHoSmDL2AfMmdk3MuKwWNXBkrFMSiUgW",
  "key3": "4YNFRAYuj2iggnjE32BPQSGpbciEzz41xj2bmCXavp71mHx76GuFa7sxdtksMcyhj3F7J6EnfFWcd6aTC4B9Rd6H",
  "key4": "zSpnWnaqs98FkVj2tfvecVvUCQbCERR9NuEFFMjNUxJH3kpdmMnYvJN9MPJTKRQThsv6omr3Yo2LB6P9p1xH8AJ",
  "key5": "G78GWq6J8n3KiQHX2bQKbQ24CBcEMqbxenUzAV3Wo7XHSw1uXzqMCHx6XrDqHRU8avsPQgSA39uCn3BkPd2ue7E",
  "key6": "zNn8ez5MzoTx3jzKekUTLx8EauZqH7GnasB8rFSKmS3V3MfTPR2a5zkwkwZiLhzHyQWeKGK3vPtvv9A1pkzU5oh",
  "key7": "4BeDSR6nq9THmwRXomK1CGLiMJZwGjmLjh57orYJZQLFP7ubGZQMrd2eUZqHzszcnqvxhW31SvCrmKwjYcbmViNr",
  "key8": "4zYZQJZtYR1prLXiK35SNpFL3Tv89TCajUb82QBZVGz6dasjyGaUdKr81ohVncNy1vTfov4hquDjDcyZdUpcSxwb",
  "key9": "eLfxCkD9rbTf1GRavHfLCLZ8tx256iSdr2uroobnNXLa6XGXxFRvx2s4ah3RoLs6CMiWZKrkfb3Pgxr4wQfBMZx",
  "key10": "5G5octey7pJ2iXwTUXk9b9p2g8z8tXHw3zQmPmUCkJoCb7tZiveVdXjAvXV9qSdDqyHLvM8FLmijUz2VToJsWwoH",
  "key11": "4axkm7wroFi6NqwD9kRVAJ5PF1ZknFJuwuz9KJjz7DaQpXMrBMVp6xKQG2ZQVexNt22qWDgRnoyAV5yDWWEbvbLD",
  "key12": "38nddbM4kCaNEEd9pbpB1QfURo4gsd8Q8GKSDvLifuLaEvLPS7azxHJoQYgZvZbEc1BUaxavN2UYAFySEgVDVrxS",
  "key13": "577U9pvGmDyvk5y64fBqjveAN1THPjp5K59dcevSjFojorQXUP2dXcu2HYguJsVPWH5eWUmK6A86mDCMbmCZdcqp",
  "key14": "49srVAddtm3m68fh7opEQqdqHe3a65yWZ1QR9KRsqteXGng95TuJtWPFcYu4hXXpJkHN5n8VwsuRXCbW7EeNeEc2",
  "key15": "6iZBmbsStU3ovnqv7vxovED8cWTXHsCyuytMpagZU6ptSNuEsbxNMkecZFSWJmHtTeS8YdPoD2uJA7CsS7aqW62",
  "key16": "4xey5pmCjqsuEggj87hiriTR8gGbSjoLhW4KkvsxdEf7z87NzE22JcMvwvBVUQC9S1CT6894vqiDedbdyAGYg5Nf",
  "key17": "4F9aMazfFzNeJ6Tax7E4qHs7AxEf4fCBu6oCikAknRv9Fa8E23N5bu6vAyc4twbmtAZ91k6wi1wrwDN6UBZm3916",
  "key18": "3RChtS3M1tug2Ap9b5LLoT4h4iSmHyoUZoRYXWy7hL9iYusSU47duSz1j3w6GUM8EUjyfvTAb5zPj2QoFEXs3r3p",
  "key19": "ZdB7USt2Z575TwPomxQSH4pvwmLrsLbHuC8M8L9CBtCidAYtFxNeE3MkyYHJkdHUumeMz1wLUhMGPjEwjriKC7W",
  "key20": "34YGQ4nDaKrsuxn8oukbVwEeMa5hTTqefoQ39CmUgywAtbzdTLfJTJ4FoL5MmS7G6tyPoJkoS3FEsRCMbkAsLCga",
  "key21": "4HJvDMEG2sZVE1SjfS4pH4Zr11PkuGuqPh3jZiNDGsKeqrk2XHj9sNfJv6rHt8ia6BXcVe6gUQT9D4oQU69nkto3",
  "key22": "4uqPkhWkyKhrcrPNzjthRXzZrTix4LV8bdxf5VPPszDjAHAJgCbk9ZJj9F1pCczbzjoeQPujm59vCfXfuVdEy78Q",
  "key23": "WjXEwiuL7Rb1hpCuwxM8xLHe5kSVkeRJa1eWEPDYq9UipfbKmNMo64chwmrc4PF41KEM2xitm7TgU2GArWbnY3H",
  "key24": "xEiXeUAKot4UAeFZ43KDkC5uDKyRiZCgM2G27eM8EBSvtvzS3MBgkHxqAGtZoTF9sCvASNqNk8rhTppSRi5RXEQ",
  "key25": "9r7XXRVGLAptzZV7WmT9KmFc9q1itafZVHjtC528qkudywcoyxurDuh4dF9wodV9a7J26tJZTJ8xiDXgdoitVee",
  "key26": "4AukXHYSP8KyBMbGvuwJ1mmTW4YwNf4NTeSn9TrtJVYoyhZeh5ctdCiS7YW6ee5kV4u2pq9uDBQVbC4LUP7sR5j5",
  "key27": "4yVcYmJrkbULvFTeWXgDtcSGK2zrkQ8Q5G6GjL6cM5MmUeUfAX9C9Cc4HPgAheQpWWnLXFtT6tpEnNHSsgpqWuhx",
  "key28": "5eDFqwyAShC1e3YGrAhw5CdkjvfM82JAyT5boTjCY86JdCEwXtBpxkJwFooCF4fj149GcBz6MRvP9HBSxvYqrnK2",
  "key29": "45NiZbe7uG1GmFaPH8hNCsuCQQcf9pav28FgTiT6uc4HK2gWdGVFFNZUXs8mdwMUAMkzfy9rR1g9oMYSFw4WAp8i",
  "key30": "5VWiPodD1j1uoZpZEDceBHzVbkN1sLaPF6pxXPtEZ5pCJ5CccrgQV4etkgZfbPD4LjAPhVZXHYEs2eur6MCmqJ1C",
  "key31": "FDSbNz6fKNSmSFMrSYrJD4LojWBezPdHqZaioBdoEHubusjzc2RRToq7kFDtmtSBe28JTFteRcUBXDoBtmdZeBb",
  "key32": "Pf8ZSLPCPTnuPxhCej3jxrp2FtxGCeVvRQfCf2ARM1m1HM6wqLjm2ZyXdiuaUStcZrhT34VuHkWEW5RFSxxKSdT",
  "key33": "6ta3YBjQtvRdDhcPT4GkJdQQczuckkYPAgnym7rzzsWSFy6Cc8Ff3P9mDCwc4LusMN9AKLvbZdkNt2x5qpZ2CSc",
  "key34": "jNKZZVN3oRkuADLVp88HsD3BephYkxtcv3Y7FRogpAC4vhPy4zqaDKhF1Guk795iXbsRDymzYaizvaQCreYKGtE",
  "key35": "64Q4kQKMgvFB3hw7Aqz76k7D9HyJwb2g7LN7AvkqyVAuxUMqGYDLScHdi8dxQrRzcVexwkhQ2iDTjkzJb7j7oVvK",
  "key36": "5BCdFpNjLkxbYfeWmTFmk5uEc5Tc2K9E23P8VDMCv4wJSZYq5FMB7eQNpP3xBH478gwPtiPhJQo6g3y4e1GG8p76",
  "key37": "23aqz3W1kAP1gNGnHayT8T5ujwyVirfoLtcA5WUN2FmCskoJymih1ZDcLBJE8qR3oKinPSTaMmjF8V67DqoJU4h5",
  "key38": "5tFrsPUpQeC9pqzB2D2j3oMkxuipjWXquQBjuSx21bDRMcK6rd9H4jBpUN6DJYr52rHti9QHstax3Yo51m8DH8gR",
  "key39": "4v8KzLgg5WctBqw1dk2SPNJfgGHA37wak3UbL7RPtn3DYFuXhNAnAhufnUB82z1CuUpKqCpUrwJez1cyRs3w8a2z",
  "key40": "hX4pzfysUcWktJxrZtGREeNhWVYJPeA6ksjxZr7v61MnP4mUXAP39T8pD8xKBmAJ3xeWh1ZMRmezcwa3eUWQnVU",
  "key41": "4BMrCt2hnP2QuRhfwt4UboLfywskSoymbA2PEU8wgQyr3i6w6j1SDa45zX1haSpRD8FrfQVYNESXyT6AZubVnbhJ",
  "key42": "4wPPV14dpxAvViHUSqRZQeW5HZRTDEAXe24m7nQBffBSpXe36uwMrJr18xmzdJiYRj9ECoJVprTdNbZa2yha6sYX",
  "key43": "34anjZN7rMQRRnQgt1eK73ij71wh76KLbbNr41dNFVbp7uBzNyVqjVSRM8HxAbbAWncQSLyZC3Tvggy1R5RAuD58",
  "key44": "oysnACS1RKDQ1BPWBiBZh1FvBNDrks2dCEXKxvhiwRsDG1FzYZ9CYkjmkNAdJK5aYM8AXZLmo741ABkHdSUYbSX",
  "key45": "4C373ZJdNHBbdepLw2yRY3FwPFHyFy5X7XiFq9Qi78vGMRZzcbee6KDFNT2QZ62cxGeNA9t92qZ2DaBpb8u1qhBE",
  "key46": "2HpfPsCH42fD2e51GVxqGq9d8uCK7XoZk6eWMneKzzRx97AkUSRy8MdWk9JGY9j8KeJWRPF53sEocd5UeqGJNv3j",
  "key47": "3DgZFnDtTZZB6TdhzBz7jNHh7zb5hMhn2fpthey7BFG4p7cU5mfEK8YvzMKWXdoBXeCs17kge7qZJU1PKDiCbU8L",
  "key48": "2gXNDhfMfGj37uyr6eQ5zpZy35mCtyLBWYnK2Lq58Q537BR4sHz9UZBNTqnhqrjAbdP814WgC3YSp7uWL3JUG2tc",
  "key49": "gza78A1ZJAbUtENFnysviDZPfnnpxzr5Pdt7KJhfZGU9b9BuGpJ3PbcfFxDxsRiKeok4ZeyVTGX1aWT6ijeSJFy"
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
