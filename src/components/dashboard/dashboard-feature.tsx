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
    "p17VDCQdhmnPYmfBKwd1zVCLGm1efZeGcvuvLhJvPm3s1jaPTGgKNdskCeog2fLf3guhXZwRCYHbqd9j1RTs453"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pPvRgPVdbVSQDw7qor4cu9CvSRCWhBDsgRvEcmN6ofMtqQ2dLYWsFyWrDGg5WS4J94eUVrGyuLHVE1CqfBKQC2y",
  "key1": "2BJ17ZZXtNpfy3wxCZuQXWY3euy1MgnE2sYhLKJCoUQuGhwQd9xf8tGn7okGzcyRUgoGbgD2AwMruwHt7CWFH29t",
  "key2": "596SiCXmNh6EsHXnNWp5yKTAGDbjykSFHFvwBwarR27MCHy2tqy8xZovVpXimhmNiR56UGhnuWLjqU9QjhdkEzwB",
  "key3": "J2uqh6Yh577SKNVRcVt7HQRuQ212y9TnF36dDgm9qfSW128Cdtp1P4bTHFmvmqq44BrgCaY4k2SC3nyb5W2wxCT",
  "key4": "2GRUTfjegJmtWZVCtWS4agR3jT8JL8h6f3o4fowSnGqDfmgGKEcqDtfWh8anXHsyEta6D6qEsLMRHfZYsJP3r15W",
  "key5": "2zRdcWzxsbFm56nq5ByPipJHn3Kr8LDV9kC3VEar3EgGrzjhPjo3YBtsWyavATR95Qdrgr4E211HviX4rhQ8S2kt",
  "key6": "62ipKFaJfhtqZAJ4toy5TBA21HYUU91DRwyT4LjGR7MA2iYai6mxGN7qRnazkES56A8znSUqw7oq9oDvmJ1kwJD8",
  "key7": "4YchDnTBuyqub82x4JQAvja71AUcSfEtJDRbdHSa5pSwdqYYtmFjSUGBGEUigfZKBHVwMty9GNG817qBsW4vuWaa",
  "key8": "2sXxDdUEArYNaiDGiiTQTspBRDzDndmhhV58qj8HQte2juBW5goXcU4GTkf3BkWjuVtLUkf2MmkzwCqfu43ar8zF",
  "key9": "3WyFi6pGKznTcieu6spfLFF1Bta3YXEAcgWNEZgxtMpzraRk2gP9y96w9LoQNtYXLtG73vrnmhDWgjCN1YPkrtFg",
  "key10": "24tbirukGmkzG5Ujto36RvXfUf9PebLykWcnyKJMXW9MySgATQRa1iQ6ea9J6cBYHt89zMwhZtjDkNQZu8DvKXjN",
  "key11": "423i4eRZ8K3aHAMD21k3hFJJhMwga4miBPGqyo5khq5QtKSb1EyKMA6JhhNC8SeHTvsF4vfAyxvXxHsJj53btPy2",
  "key12": "zzooj3KErVfLDwxxsF1s4hh8RNYVtmgS25kV8pHK19AS2JDsr5g2ksJgncPB617ufBxcmqaXEaqYYrN1LbLgbRK",
  "key13": "4ko6jodPMrEqk89PEQvsYaHLo4qU5bFFiXWSNR4VkR53Bh5JhMyVyt5fQfeQFMkhHrcejkfCzjQjSyD7zLK6cSzT",
  "key14": "3SSweQ3vTfrZAnmkgktmZZJnLeeznupXokXQepP9Ny86vYX8FxkUD1w5bDxKe3BvQcfhjwQqabhFk9YruseMsFgx",
  "key15": "3yvsv4EsxAehWR4qE4g12QqvFk8TaBhaQ6gfuhEuf8ykBHKnn8eBq2oYjBZLYBCb5gKfw6gGQy1NWqL1E5fVxu2U",
  "key16": "4EbVyzstLFAk2UsgfeSFKoxubChoaWa4eWd85t3ea3EUziX84RB1h1vWSQRdix9sgQDzuufQfXxqAD3MepNXBbeP",
  "key17": "5j27Wsg4UUWLbyS62Gkf6RNwiHvZCifffAWwRScVv8hBnJPDiVUWZ5x1ECNbSYC2ZrAhtNcndgTK2iqRSwNtcQPy",
  "key18": "3AMR8qGKFPsZi3V1nPBaR6aZb1j6p8vgoexj5UUbX8rGjChsbEbCJM6uCEe8uPqYznMLW93wvRvbEeaX55Dw3jPR",
  "key19": "2hdtCmvEFJWMDuNdhesgmUXsDXTDtg53LxuGNek4eGwnobN78qK1G69HXVJcWX9XSsmekRmnNaqerGodgi3iBQfK",
  "key20": "3tFvggG8w4ePxJriycG4vCKK1sXmAsZFj8YR6s4wY2z2eG8N5n6HApr7fSa6sTRNpPSogdRpr5gw6pwsCCJiFpzv",
  "key21": "5sm8eNnY3RFNyvXJCS3BNzNSCRivg2L1CiGEoJ7epkb52idLaDwQsRwCJNVHKwvzJUQZxgPfH7Y32FR1i9GrGJqX",
  "key22": "iAs2EuLBefWZD94UJHXVS9Wde28A4pfT2bGQWLLiaNUcr1RkmQYQeiz7cjHQuPUhdSgBVGGjgNRiDzTHfwEEAKe",
  "key23": "JgitQHFvZZgiKasBzWXBcPi929wgF9yxV824ejDEHi3YLxvM61pMV5tEXv6iNm6AYfH8S89wU4R1zKbNAEdu3Mi",
  "key24": "5K9Bsz4XGzWLoc9zF8v1mf55kVPUyhsESSGhK28447jXmaAQ3oAWGsDR5k9BmMoAnRGiZPdPFKsQbnsPSd8K3Y5N",
  "key25": "2o38c4H8kMzJLXV7HBWMPCudP3eMz6Sw742fDksi7nPtHA2iyggwRxCmeYUCSTzg52Frmf9oiehz3T4Z5oqZmhJt",
  "key26": "51Ymqj29gAxg2yKcQT5mwxDGiYLhJmbQq9ARVHAQVMaKr2aXouyc71LHQS7QShvq4RATPVas6fR8fppzjG7WJsG",
  "key27": "41JdfnCP6ByBVnQGC7shaV1LwagvhrcMsLsJQkY8EJdL2CZHCJKc9gcrq9KQA2C8ixtNHfhZRwYuGHudh52zTwaj",
  "key28": "ddvsPvFwuEwDdRgNRyEZbLdYBuq2pxHQzEe4y1HcJ6Jh17DWWThJWqwxdnzPjccfsyKhcj9KPaYiYZzi5dEec9B",
  "key29": "4zvdkN31eFGFLVAN1j4256Rq75JFyKjJPzERR23vgBAsXh8yfNoaJXzLbWxK4q5g1mmiTwsoLuF9zZ9DHz6YyrCu",
  "key30": "22mqNtc9C6VEazBF2hr442o74mnTa6tr6QxpeQ4zWfw2rddMtAtgt6gXXAPZ49dzjFwuFcuzEh7LcfeJwLn7oRFc",
  "key31": "FyUVPgFe6zLmSHgy8j1K2wFtikxDk57aL15rUJpVG9bssKq8CrDHMsjpggcXcjGGjGdRvEA3NgFpLy3AJUEbuJd",
  "key32": "2VhqEQ9FHrXTAVSxhogxGYqjwQoUyTGLY4UswtqX5dV57EKAmB5tfam6hD2cDfnpN66FexPh7W4odB57viZpDkxr",
  "key33": "5KksfP8JMdfCSkerx3f93gZj88PLemj2sPiJw7kHZpE9Nm3LcTwbFEi6YfB3F61efav2pyr5fqoGHtFDcwhxfHQu",
  "key34": "3JMCGDr8A13Srzm5NEwwB59b7sPbbUdXPvjNny5Hzv9yq9yfUVReriiJVyvaY3nAYaifK3HSpi2XULyD2qJRWVxT",
  "key35": "3BeNDh1mkPe53Xw8NaTVPdk4URUgyvPWnPquGm36WPSvpQbt616kSMRt8VGKcP8TTxczT4JcyDAL1xC4j2BryMwz",
  "key36": "25xCTUpUaG81DtsyNCBgzdcaym5LBrsVfWCHDDW6hHeVNCniph7QaDj8DXrj1uJG3pCVMCP2iD7FnLrKCFaRqmNR",
  "key37": "3VSEW5mNM4FUNrgVEZ4J4MA1R3UsZr7g54DjQ5pVqHQssZgfnFxGHgSkxsdokgYEDAEVxhbs4JQh5H6nbeuxccpp",
  "key38": "24dvY8KNKrEKwg9dKsWFbNZf2Yra3U8tMWE7q3TVY9b68BGeKwULzsvcTyUh1eqUfprgcSjd6JSxAtwku98F2EuU",
  "key39": "25R1EmqeasWYKPVuppDAHzuqCJQ7F5dLcFme9hUxkb2sXNy6JBza7rAZ42ZbqJcuNga4LEuEBy3rzctGdYyvYDKv",
  "key40": "4uohPrQWo9L5Pt1hBEpWD3tkh14duGycP2cndHP29oX6VoxoSpJmbvvZes8FrQJUMRAjQhSuw1zyhW98EgSDudL4",
  "key41": "hL2sujFFba62oasXitv46675E7DxzTtVHHLkoiwGmoTgWtZ1kgRkvn74Xf4XMiaMn3EYLr6jazwi2Rp99heZcyw",
  "key42": "2CKGV4HNDDmHHmxZ2mLNMhKsZWabE5WaYfYLnEqYgugg3VXv8zenZFqFBXmkDt93gxUPirTmYJneXHtKiTMdUpwJ",
  "key43": "5Vw2gbSkpjrtp2kvq5v42jdLgZCdSmujCmhANLB7evQgmpSjDXYp4KwMWwAZkAkjbJsSbuk2MdNHSyeyvZ9ZVXKF",
  "key44": "499njYsParjPTo6zJ6qqTvx8ACXAmJZf8duNNUq6RgHURx1jcdQwwaxwFZtKF5RXahek3MtqyVdxUTBBX6X2oJii",
  "key45": "3ZXrZPwpqoD7pqozfufbKitmg51sQxTYRnXrriZgHWTyZqcJGG4ZNN4UTF5gUqGpGjxh9BJpV7FfD7TT2hksDWGg",
  "key46": "Qi1mKCpmkzM3QSqZerCwjFpoJKFjgFZ95DfFySNmpTK2Vnd9etxAJYfSnD4oDB1d8qUZeQcjdvYVehiJLwjFeho",
  "key47": "5EVQcJpBBWAfZFaanXocyidPCRHjMhLf3p6c6UqdTujx3akaaUvhkDAiqEbbGNDCNLfCQM2xghVGxXZq35fiWq7H",
  "key48": "41BtyS7MZSrj74MLWuhaxadqZFv7EgadYC1hXetkrm1S3QrpPr4Mn6so1zcYWqaUDbJJwAjVSRjetzoVQH2g5R9n",
  "key49": "2hxo2YWmKrxyA3nVSwNzrzmXnZzQj5MuUNTHpiM5aXJAy774LktibhZPbE1jMQxGHvBuXj8qM66jXFmDe5TQH2jd"
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
