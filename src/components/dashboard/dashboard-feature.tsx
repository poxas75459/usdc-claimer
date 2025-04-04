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
    "64ZTEmgNaAJvSeGzu2EghgTaKWLuAfgPJhymwXxK15pLT8ZCQuGhCsFpv9of5GHiA772gp1899Z1D4bxAv1LgdWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kasJTTyyKwxgcFaVqcxncKQDDCiCjPHkjb76w8d2ZHLgeos9s6QLN8nx2bSPBPDHgTJ2u4m55a1VtyBzMxCbbJP",
  "key1": "31rBa2TZj4FLo32CLZsYipDwTmESmCSDYguUcvkJAD3hBaWevxbueFezYqs9ySMHeKZZp6iYP5mqKJX6T6MvXk1a",
  "key2": "U7r6TMnFq94LmpxcBUcCgPDKDskCARsq3d3xQaop5azPCyQmNri8eX9mHiRYe8wtYnZiv7PeCPiXneSvy6SvpAn",
  "key3": "2uT199g7Xicm5DzUpJpVSEw8rq1avSeGGFovdpHXPzX18Hj8geoqLVatQ46XgqmX13jGSGEs9k1omVyn3ZezjysX",
  "key4": "JfEueAoH9GZKSpxrrYK66Q1YayWxUuH1v138zcoLH5wmwLZ1Ms8KbSmXAdMbS74YjmhtXT3f7Wdw3CgMvitMYsr",
  "key5": "4pKZVxyugMtH5tZdiJCHCCojxMFoGS4U64UaoxttF37XWnk4GqC4upDUSESnE84k9jXX6PzvqiXWCLFYDTVCvFZC",
  "key6": "2ePzydaEGeFB5ZChcZgFRKFmQV1aBKEfAcwFzFYz4dPb1NKamZpdjpMRWgoo81uWy93iJgN2E6wnsvQpTWrQ9VQF",
  "key7": "2jm2PMsJdGqvd3ZCAqP9S7BqJpze45vzf8yun5zb3uqiM1ABGf5reTmrJnSeo7tBZiCcBHYxrhXTpkHhfzy16RnJ",
  "key8": "2L8qbE3TGUKJqL9jsQcktQUPfRacoBJoWYcYyS2wyTVaTa2Cc7XSGUM7k6BidfV1gez3ny5pZNTmV53oJsC49tBD",
  "key9": "3Bpas3fWii9bm5PbonxfdA4JeEiZCZZnz1e896AUeWZsfGok6CoTLYGCMCfpgBXetJoeHToB9a2e2GzSBu182JtB",
  "key10": "5D87KnzoALi94YPoVR515h4VtDb2fKinhjvA9miQpwZvk3RiEfE9RdUvmSTPBu45UC31KRx828bAiEH8iZpPe8WT",
  "key11": "52oyJCQbzwMPL75dxWoZ3Ws8sTGqH8ifR5QYv9N5s9gxPg8DpYWzhr9VUd72eqpnYPka232vsZJXQ18pWr7bueQu",
  "key12": "vpmLdhxXfnpEkmcqvz1pWqbjdjVYxAiormaPLmia59VqaEYHDPPyewUFHDf5u3s7so8C13sdupzV3B2KuMAPtXR",
  "key13": "62iRJXZnoxXL3x5MbHQM2ERuK1McZ3bQYRpMWL3NJCpnYrr2wy4oPpcG57YPP3WN8NvcqUH9PiKxM1Eixkzv3PtV",
  "key14": "2h8C4TXEQjiHgc5xNXDzdoFJAqFMYyk6rhnwgnKNTgmMWbUqyUV1cae3umJ6naKYDNX3Zrk2NXurUCuB8CCSngaQ",
  "key15": "4dRDydeSSLR1yQLn1mTPegZnhZ2dvQ88gruyw4JFSPMWW7AchSuJRyXv6BgjNBajA5KGYhZxyW5wA5jBrio9XsfH",
  "key16": "5eibZ1GQqkzpaZNDt3G4c96sTR85tHMmL4NcC8bcYUpmpch74FsFEdfkUureNxguAFrtvUtXCxML8dPeyTGeUbku",
  "key17": "2tu2XhLjiBdeuooajz2ftbShBTjrGwmmyv24oUvh3mm6St3weETiDZxmes3sXiZHDHp2YdH8kNMABAMFMu3m6ZhF",
  "key18": "343BQa38tn5UFvYpCUyXP7pFWe8yB3MnkpYnDGbgyxGC3dPmq3LnZ9axwYBKrxJoj36HDRFceonxj6Yxr8vCz5Ar",
  "key19": "4jTh1Kgp2ghLoZ8AqGFLuayr8FWBnuy4gnfkLciLShuQqVT67npUB1vck9vKSpL8ZRn3e8XiM5ebvoSrAZytupha",
  "key20": "p8mknbYwBqYCtw7jTqkWvdzQ8iSbjgyQmaD4rhMRYp5JW6vqBSEb5adambeXK7Thq9Kpk5Q1ghQb9s7TW1Ux4zD",
  "key21": "232YFSg2pivRGuS7oAwiLvAqjWERXGPVxCFWYDGNQGf1kKi1uKQAvwMMav3jvSfMyHBgtkSiZF5NWpCX8bdkxhpQ",
  "key22": "2ZZMizNB89R1Uc7ppEVMdgBR7CnFY5mW1SUtmqMBWHSe9tsCHW43mB4WxHYWGAdTMFHwktrfyybKkzcbwcQP8Ek6",
  "key23": "5NVqbkgPyAap2fdsKd3ozHs15FziG6LSHRzjy3ZBpEoc23Yq4fawbSpnq4Fbw3RAf8vfZyEwn1zQv5uLe4opKFkx",
  "key24": "2wnseuaV4KTma1VWEw8cFQ4FKbycxX4PEfcrUQomo1gVvbRqqpfvhL8nj3j1iKiNCcmpPdNY7viNyQQFtZWr85Fq",
  "key25": "2RFaToMxYM4fBrBbMsYFUXJ59KFSfNxSQeqrVTWvNJ51N54R1GtVgSqH34o4waEPmtNpwgU9YMGABSug7ykjbvPw",
  "key26": "5cJsTpixX4YhYMcbHgaRD5LNfpcU5vBCmSawSiDTtwtwHE1WoNxKmDq7ru14woebEm2BRpqUPeRa4FMybD824twZ",
  "key27": "4GhbFbkFaAji7vkV775rv54BixQARW8LPpoBvzXLkb7SwLxdLZ9MnmqJg8e89jTPFZFCeJm32bbRU1xS5VftLFZy",
  "key28": "YKMBGQ9gvxa1FUD6Fo9osaJoTmCgVumtA18BVKiTYREdhskYY6r8nb5Ao5zjVy8XgqbPKawaPx1r5DHdCvYxYfm",
  "key29": "3scLffDuc4iPHt9uwCYNSeWMJmiuXKMT8Er2sKQ2Bm1JULavbRJKdf241pumn1B5nENAG3359KtHgnPefr6GNtfR",
  "key30": "4LRbt5wJ6qujk6u7Da2H9u2xQpSF27pix5tQCN5Ja42EbGBV5aYcvbuHQsxCSkVn2A4CRPd9Rq5U8RpydYGYgpkF",
  "key31": "5FtHRmtV8sGL5ahif1xDFGmRkTms8xMr3bwUFwouWzw1MoG9f98yXc7CE35RPAE9JhpBALbhkcutRCf7k6ViTKvF",
  "key32": "4WpNDSq6Ac8gPgL53k5pLSBYJ5eivoix4SuCVpwf5ZUcWwiMs26c8bwwS5aVHZfdXS6y78w1pThz9oRFyZzGNU5y",
  "key33": "2W5dTTqKNvXCej9NPxCiTCXqczD6ZgtV9A2mmtLf9Tdx6GFc2bSKn9CeEmuG8kTMAYcnJgwWEBZNapEN8hnyadJK",
  "key34": "7jdpuVN2qeTSn4AnVAR8gUTR77QeSKMcS3FDtHneZ83wyGjmGCysWFv2eqjtpiJwBzVfoWaaAMc5iouEzah44T3",
  "key35": "5GkgwQ4r9FP22XHr7A2sxH35RCnhiW6JnLmcBGVW455LSKi3rZmx28D36BXGpW7vS9SznVTSYnXs2fnrDbFut4fa",
  "key36": "242BRbwpoVorFTFcaNPA8UwdZrPcofbY9dysZ1UDfqMHzjWMenHr7uQCvNQemZkzUb2NKoZWkeTQ8gytpXN3RN47",
  "key37": "5sm6XreNinzBsDiuo6JDzfTnjA5Naj4Wye74wZW8ekATkQ7XBy1FH3BtynS4rNsWBfV1rTU6M4SUtq6RhxzpFVB7",
  "key38": "2djMipCrdcaUP7RUTNsBV62ag8DUk2SLZ7MjTiMSPj6o6SqFsUwiS2t4HrA7FhTCHTFxYzt37CmSd8VKCeS5BSWp",
  "key39": "4V3rTNriRRYWNLdaZCzYkiG6yiKPB3xvk8yPy4cE34CGSsEtQfjHcELxV75jcPX2TLvdft3BDqFcbtCogZgVTjJA",
  "key40": "58DdmnQF3bgF6Z8VubsLKd9fMFxep4mDoDZYYq86gpW8Cm3MehHpuSHMZYA2nUXYiHxUyAapAP4GiWMSmqpdCypN",
  "key41": "2mdfBQDQzHFJhwRucRTmjTMVJDJKW1iFgeUE3os5iJTpfbghNuSgbQQ8VRFhXZL72YCY5kULpc1oA91ew7TuGNV7",
  "key42": "3Q4fXYC2oXBaVtp1WSpsEuQ7YZkca1DvAJ2K39txExdvHUvhBaDchCMdbPS4rV6BcpuS9kL512YGpr9cqivCpoNk",
  "key43": "4E7DxtPK7g45Ab2znES6zyruatwJ339U6Gy7qpwzxWBXWBnLUheJ7JZhV1rQXovoeymE5pXpAoj8KncESJ7iaEJ1",
  "key44": "7ZUeUHXefixb9axPhUA375Y7U79mC3hURsxCoKJns8Hmyxev3wvH7xytcthdDiscCvVBa5zcEtpTwxhBbuwv1ko",
  "key45": "4yUUUiH4E8oRzKi45e6pTGaasAmZJiG7BjeM5QbmTUhZ7BiQtadZ2B2uEqTXmvn2kea6WDTzUAYGry5SZJmh1ha9",
  "key46": "ybRiTGgYyreoUgBaa9wEZtS6uBX3QJC5AsiMKraXbCcwG9dk7rKK6QhPntBWtbdFiApCeToMgCVw3snjcFmz5Uq",
  "key47": "5dGbzjPNtX9w4rfHR7p7yqgwSzMJC5TwJdV1q76g7kW3f7Yk9cdP829deCR6vbgRHMgjkjWzakjAJaQf1VjXUMVP"
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
