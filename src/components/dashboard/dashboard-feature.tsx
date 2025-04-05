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
    "QdnweVsJm46PNaajnDSxha3JyjSpGS6ewGMEmoDsNyKgKvYJfPBiGsiATyQhvoDLULhkYDHGLAoG9ceYuH7mzwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WTLSQfwo4mCr2AJSnzk16T4hBHZihxcL3Nakp66tAuPM3AUSD8UkxWhiGRDF3Vc1CfzzsadCZQNkv2631cUuuz",
  "key1": "2XmM7AMncRmpfaUezg7mT3hyvefA4Jpvv6QhMtx7vxRzjfoTL6uHBVffZ6XK1j6SRfGZxARNmv23hbzLs3SMcUcK",
  "key2": "61vsTNUK5DcMHTbswy48zW78ZZ6UFDJUtm4W8XY2CRe5at8a1jtTDDhKhsFyQUgjgBv5DmSSTXzxuHUsMpTzkYT5",
  "key3": "4zYz3gukvYadzTWvpNfSnapKWDA54Kh8cKquizNmocLPwgfFrjerRA3YsptFtQXB6HjmVqSEQkijdC3WJrijERuc",
  "key4": "4Hog3QaBjtd1G8rbCJHRNbX3PUXvvvScPus3KhTzp2kfSwhBqrU1ydCapMyDpEaPiSsfhWfeVHkhAz8rxyZ39t7D",
  "key5": "5jE3YEuX4YapE8shfMorRMZGNxoAFkCCLSZBNpAKBEB9iXEcupGxQtLLX6Un5rNxsDNJeoo4oWVy2KfgqhWfXqrg",
  "key6": "KZWNd6eieiCgtovjquVQo9rhEC7xbGfNVJSCWziK4hywb9FD3RfwtSbsxrYkCerzwHH7ffvWXrvoqrZE7yH15ZY",
  "key7": "4QZP7WbBL46x99sKW8QssDPH7de2qzJKpoPeiwP6n9ZtRD7yoV6uNNwAyx4S6XH82To6rxYnMPK9q59RFf1yoLTC",
  "key8": "5UQSeXBa9FNzN7T4YepkbiJ98F52FdcifegwnLTeUfKkbciM8dxiiZMvXZU1eGv2Us3156wup43XyScgMqv5nZQ8",
  "key9": "7bYab4BuK1NeeFNYfuLCNkDhDrWq7EHNNgz8dyh5u9kmd2yrhBBqXP5MD6GqBKcdroV2djci9qMgsYe1c9qVEHg",
  "key10": "4FnSBTgFgvwznZBEmjatujov4LbRDrAMRh3qLAwfxJuzFmvuPqF7VUdUA6f7SAuGHKhfM4y53Rx5bNoVj2uc12EL",
  "key11": "65qDprJrPM4JFMU6QDZnDakJmfuVNgoiZdHzVi31weqUZhWhRYBpLhJnTRsu6DTVE3m7xhYK6tTDTPQhGkBV6y6b",
  "key12": "21Rw8tKYkV2nno3ycFJQVEeFJnvP3nYejnL49PpvmVtCu6oxW8SyQ5NhxdKoi1PTEHGXbM7o1FiqmMvCkVCNdTBF",
  "key13": "5CtvecD9CJxJYeivzKcm6VHMtQb5eGzSh2BXLiZe4oNatmm6VgdfMwwkoAgAqd6XYWkHmApr68gGKrNtqpJw983p",
  "key14": "fEmPtaQr4GW21cZWgq4MCkkCVXZDe656NsUA4seFB7zy42SYQNFVMDULv1dCFkuU8nxjZ56S2mzVBogwn5DPSc6",
  "key15": "5bQgxGqGapLtai8tbng6gDADTnSpHbsnvBd4BvruEfizoYz8bdSG9srqAfRZawd94yAJdzdwvwJtxF9GKg57eAsY",
  "key16": "8fZ3mp1Br6K2MqvF3UDJDfdDgSTBsnn1fRdJGSiNk2YAWLDdwYNjRcAjpn1SW4THMgwZ1pLPqRXzUsn3tqG56Ui",
  "key17": "3xwtqGZKUt7t9sU5tAmsgubCvNYB7rrTSSVhuXx34Bh16Mb68KMSrtVahMTozoABJBCki7BrmHswfoXMYRkWKbmR",
  "key18": "u6G4A3Y3xvy6PywcerpMzsxrQMQL63ovWpyPBb5ysyJvttrLuU7CHHyCHPsPcdWAScDLhtHAcrvDvb79VDdTMii",
  "key19": "4yhs7sPKDgRssJ6mNB12w7MDJxKRMLARekJrGDnY5TXsBtwfXdAAM5EQ1JqKnR8dkTri5Hbnp9GRUgjjkEmRhUyu",
  "key20": "8uUZoDnL1TLCPfFKFfj9WgjCExvrmcsw4CZ8Uh4PQEnQgoJasi3q696GFGSqF9osS2PQ86T4stYU7j6S22sDHRu",
  "key21": "xnLsPYjbSaqdRQizagS5RfQqqevvRutts7dUDXyeSRW7urMby7jeEWjv8vnGMp4UoJaadyGmRTU4tBL585GkdDL",
  "key22": "3K3CmiP1o24DqJ1ZARpv78kse3TZzPGTtf87VANK9HGKUASKFRF5URXBtcgUQsLxZ8tCWEet7VNy1rLZ7ftkrk8S",
  "key23": "3oMWh1QsbGmZL5hYPozZLpxre1UTVDWhuNn8BocoBwcpTKTUy7kf5uxUAzRQcsWPyH4JPQifW5Xx3RzNRiHaMd9g",
  "key24": "4Quucb1czwFgouj1mNF3iCCJM6YGgh5ZQUKLL1K56vXoECncPwkppCr4r8scfSJUEz2crtzrMiHD5w2MdF5bxf8g",
  "key25": "2wTdiK4GX6WWqNQnbSu8xtBxQiKkxVLYGgcjPmyZtH4QHPfDsDcodC76BWAWMazjSbcvrHstLBzfHViKHPPqsLWu",
  "key26": "2r457GXdTQZ7FVwzmoUMSWQZtWen14YwtQ5ZMC6QmomHXJCQmGbWjnUdtmyBJMk1xwi9EFogMdgub8PfWxMt7DvJ",
  "key27": "5unUJqbNXCyLA3LRvKTHZXn3TPYYBScXYPjSNxShottCHKQsUjJvnM8BiyTqRpKfD4LpjazfmxCpQmi3vcfT4wjN",
  "key28": "2o1zeQMYhbHiW9gxErTmbhp4HggZ2muzjxozSE2vgM1Y61aDnSt67pxowhUrGYKi3mpKFvCGUQgfmiAsdLxZFZqG",
  "key29": "FyoxLe6SY3WsQrpJNGm9Z7H2Fw87zhLMBsdB4GFvg2E46oUfrywdyvzQoRpuzGe8eLmzBGNGeNJxYy7whxUx6xY",
  "key30": "DFLbXacjT7kV1xgJoYuUBD61MeQPtjJ3MdqcF3DA9xLXns5RjEqbArPd7WyQVzF9oLuETd2JvKYXcnF4AcW8KEa",
  "key31": "3fbUQN3MkvSqUfTFNmJdaXK5qcemWqoYXLgagLov8U5N4VYxahVhN2wEj62KHZNDKDF3w3TGc8NrzkNxmUSJfbBz",
  "key32": "R6acAGVNADdaBzMsKZBbR5gy1CqmQWHyib38bRsJFsB6Zjnppi9cab14uSFqdfH391TDrNioEvs7SHXzQq6sEdR",
  "key33": "59RsiDYpTahhhbMimsFAMDAUrqxoik3iPBAzHjBFJ7mQBEujV6Q2BS5W4gZjhYZJ8NzQtohBMnXrmzoH3G6s1UnN",
  "key34": "29TboWV9iYB2RGebSit8fVEJgVxAMUeTbStCoKs3bqkXG3AynMm2nnhh8eEksXmwEABSLK7hszzkDhq6bSjbpziM",
  "key35": "5fc4QVXEiDKqCjpjJyj2i131K6pMfxYHRyhdSh9gXpR7qWhSfG8gUyJgAJNtrYhCGbKs9qcyeFPgnADDTheeCw38",
  "key36": "3QG4RhTKaWQyeQiN2LheaPTUnpZoimiVevsNM1jLiBMd8DGjGtJuxeSWEw6gbGvobrJMoiUJVbEX19wjtFGyeaJh",
  "key37": "31bPuLo55eCMYC4D4yretkx1wLfuVojGycyNuebCnVrsjR11Ez5cVCkg8jYfDjjnYaAsft4ue8GzkyrYkBLLEp4q",
  "key38": "2dhTKHvJoFKPxPBbGDnbqbcfEiqJTHCkLWwpbtPcH1MffTxXkETquyM2kqcRD9qEVYhc54PCoEMSYndzYTjKgNMo",
  "key39": "2GoVnSuybWXFa9gsnX1oQFXBorAKFjZMtNbbRKTVXewKRgaNguXChE9graVJgvFg2cZmRmB98by91FVj3ZaPGdQ",
  "key40": "5MmCMAgqx5X7KvmvAmgSePjxa679rPYQBhQENcLEfsNf8zw3bLWgi8WHs185sbZfi2UyQyEL7Db9dcUiwaVpWHk4",
  "key41": "2MiZHbXNbgegAG17rA3A66p6KBHfV9SsoXaG135kNKDKAqWL2CSawfVt7omoPS3B9AHTAyb7jjqxpy7u3DGxwBj7",
  "key42": "4ZyxXf47uQyMYVjn8ovxQKyxjx9oeE11gZhd4fcm8CDheuf22ewaxFZeBgw1eEPkiF1F9U8mRxMgyW5ssdVQCk1F",
  "key43": "3GSsvvoF1pQGHmfw49EWGsi3fevxjqQ8v3Ut9np6Ash3NHiexyGisjF4uyWeFwN9Rx7bNtZ3AnP8Pr7Ywmyx6Hyz",
  "key44": "5aWHsj7hkamaHfM7EZ8rsfhC6hGm2bpwXmwEekxu5wzPLipZjKEuBAoN9bHtRD5hZUMfDDdeEJaMV69fQizXJD2E",
  "key45": "gs1j8s4XKtx8nXHbyiLR3RFD35eDKdzRGsgWFmfSF9zQ2gFzNB6PCKxnFFzrjmgToVeGeg28qGcsKLDhQZiqqwT",
  "key46": "2cFtUvjSAPiSuPZKatHGNVpkWDEcbUAYxbjux6A9eEACuv6Hf6rFyuJMvQrjsTqNGb6S7w6pGdSGD8nWuU2HPFEg"
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
