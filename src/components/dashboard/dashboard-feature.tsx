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
    "4e57kZpcQP1QKvgaKGSSet4cfWE6oBojBQ4fxhuLdE8PTmLSiN4K7Fp4iLkUSG4Gs4SUdQ1q59Bfrzs4wvaKB6mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tqb97BDNpLqciifw8MJxfSXxrK21YcnP5Vee8nPAmSNesaS5jb8kcPA3VktQrj8mG8givT6WhNkQCrA8tjmwaXF",
  "key1": "378c8xQRa9jzjKKRcihFeVtn89TS1gMQFM9R7L8SqowpMYMo8rnW1joZcq2yK29D5SK8RDnvGqQjZxrhuxoAntzh",
  "key2": "4wt4GUzNmVnQLoJjaU8suyJjufK88z9Rn1xi7JDbEzbFrqTn3tRwEhvSXsjig5jNv1kSrS7nyWBE9LDvNVhwxfX1",
  "key3": "cXcF4ZtpR2Sb6Y3b1GzbLRaoHnMLmCnb2r6PrCjFdeHeJq6usUFurjmgJktWgUKjrPjuXhsoUQoAYH9bTGzhkR5",
  "key4": "3aXLRGXu1FMgpZxG2nCnXVjKuvqbJnx9G6SdCRqTJ9UfM8YEVDAwZy5juMr5gHzjsXU3EqeWhWTUCQuW4Xe7saVH",
  "key5": "54tdh5j5QDDipQHUNK1ntXDmG8fRB9C1bWT2SEChLadJgGAKQ1GLXCo7rWb7LRgtV4Mxgg6TexhE1ursRYopJeKq",
  "key6": "3v89dA9FXSLchTgeKJ3VPgQJMnBDuy2g88CijyGyJPkRczjVW6F2pW8BETHoVWmrBs2Ay6XbYJUFFfQ2xDqEVrnb",
  "key7": "2SwGVT2iWK5vKS1LZF7KcLfxg2yRpv2B23oJtgazwRFkxGoxuL8YiAinZG8qr4QyjFTNhwezv4KiUB4d4UujFTcJ",
  "key8": "3TitwmjmqjFv8SwEXtXMzeaYHUZSrayshaeUrGHNjYM3btkKH7tmqeRyd1AXaPFfpMQ8pAReh5Hu6VuKjYzEtN3S",
  "key9": "4UkJvyN7WG6AdiPX9Y1vtcuDEJAvf3JbNdM3UkU5u3KSrD7SZjwWXumFXAXZ2GMLNiwdB2dDtBCoHTspEsjpVy89",
  "key10": "tr1reaU2y3aX8imCXS3DtAPpJnxgVhDbkFeA39TCfC31fDxsv5Luii3YwB1rzvBD4hkmdYC9kAcs9dMY79cuYde",
  "key11": "2hopnbCbN6t4HF4cQ4j4gK94DSBaHBTybSNyzD1n2XXLczrHK6Yk4hzh6XW1PfTew2n4L9W5aFYFack2mYDiCttE",
  "key12": "w5LgskeQeGpT2iS1K8pSHo4cZ9vU2dv9kmYBB3JoQohkLUtSqj1Q5Y9mZ2xe95Zr1RyEy7HobBeQu8NBwpq7NvU",
  "key13": "4JV5GBta4hxyQAVUaLjjzFFmdbdG1mo8ZWHWbi53Rd5Eim71gNumxbbMRdAvW82qoYATaJT7JPrXY8DbhES2LJUv",
  "key14": "49Df1kzFr8CzTENgESi2vgjW6343eQxTMhEsh8BCae3Di2vY9SH9yUnB27XHEZwsZtaDKGzGXsjYmNPTgEqL8X4H",
  "key15": "2bqtpPsCQ4Biue9FgpKphoJ8PbVaaDEX75rDUU43bnmvKEP386MPvcFkcFigNB8bqfY1BHXpo2Tr6FeH4WuxEgbP",
  "key16": "hCRCxkjHgcEpgYaPGVUWimQNHmsq1VtxUs8Qh2DYb7vqrsbvj3twzEduTgHTPrYa73fiQ1sNwSDf2HXPT1foFKE",
  "key17": "V34Z8keAoMA6uhKUubSbfPSiYDNZpjYMoRuLbvjauPJ3S2Axhq1ZwLkENhTPkdPqPzbLujhqRSFXVfyLcms8ipo",
  "key18": "3Dx86ksuJaWSEPGDxrcCUanhvKVcXubmEVU12qEqPWRcCm8hwduZT1fRF1GFboFs48kDdYZrj87UPcQuCHzC6JQ1",
  "key19": "4rRAn9WgpBPmJidBv5nwLzijz2Bu2DNoSX2AvC53bEeXv9VjJ5c7DVUvdQybUCxLkVuaLwQ98tgjqXNzfJ7c424V",
  "key20": "4UQjZdQ3UjaXFiiZqb3ZB5o2fHzPbRu1dMHMmtpnHtzHYapibFJHFH5Sn2GJ6zchmzomCZHYF32qz9hLSqda3LPc",
  "key21": "Ybh5TqFALFrUxVZjEnJsMWFGqiWdgLzLQSgEHugUadwVxJsCFLBNUo6tETdEGwuwwSvxX1RtFimx3rg645HUEkd",
  "key22": "2M4fXTL2f7K8RNmBgoNMkJmPrvsWWTiGAtfkqDw8GzfDdvzCdQMfTKARuFuLDPY77dbt36mHxPR8Fg8EeQWtuCZR",
  "key23": "5gaT9rveQemt6rQ6ZM4Az8wGeHBHt7QiTNDAXgiofpjuU5ysw4wpjjaQJ2cyqDcjphq5x6QrwV36rUtaaCE7Zgcs",
  "key24": "2VJkFRfhVyNS8VSqT7G3VrvXB6yEWfAX6nzVUv8tm63W14WvSPmbLwdjoMA6L5YJbfp44xupsWSaK6Po54YUgnWN",
  "key25": "48v88BpmLoe1e9itidxfqTfS94sYvjwcHcEs2K4b3bwHX4LVLMt1ySVHs7wGENNje88CcmKCRfVmyrLRNSzdnEPi",
  "key26": "39PVNbEB7RaRWwUL5odv8Q9ENUC9UJ4RD4Fed4sJjo7ZGLhNnaXduSJ16HMjakUMTCzBDuJp9KFxviwyjjuiA77E",
  "key27": "3fq1FENC5TrfUC3kDZSea5T2VRbdtmWsYqZQ37Mgas6f9qU7YzW7Gf2o6NtibyLabUjC3Bpz4bnWfg8o2CkpRK4K",
  "key28": "5Nt7FjM3VgzeEjeciHnzW6KNzn3Wj35F3eLT9CXFLeHwvRWAsqoVVSjrpnvYLveKV68VzP2dUoCmtbA8HijJQxSM",
  "key29": "2Din96dUMog2iD95TAAS16GJuhBPe3ERqahoeRJKH412qZ2T1jZR78fcFMpNxEiJUmxBnV6Jps6zpknggZ86xvE8",
  "key30": "53oTFnpKKch5kVgr2KWHHKXtwhL52oVAchjJJ14CJ7t7e6fMoHBwbdYUcTDWnxuxBauJAdTpWtFFz9nWiKE6oyey",
  "key31": "3Q1S9z86WcUm83ZmyEo3AGiz6zNyvdhLbTEn5WWEo6eJ98mNgW5W86V2SABXWCYRZg2kfEXDXeT5QnN7w7pa6WzW",
  "key32": "5nweZJPWw1VfMSbVdiSszzig9Joe4DyXshezvvZzmCtgr4HbHPLcCmJUXPtEFg1SyNH8n9yN1rd1fcPewPnQaLwA",
  "key33": "4kLEMpVNtPCkKgDRTYVDU3ypXQXT64TQ2LtyUYsKpnEowgiBXawgCqT96n6koTyiYtg4pjEWAJ81a62VzMsEgVfp",
  "key34": "4oPzS73AhnEk7BuBFJ91hAdQ4o5TFQPqL6A8D37pdHs1TKCibxgjRjVUpfwvtTJ2Ti9YSzJR7zktdPZgKdor9ai6",
  "key35": "59HY3HahBnHYTUXH7AmSvQ8mtv4xK84ZZrRiNZe5wjaqYSaTLNUG9BU7ccVx2K2UVW8PPaipSZ7UGfFcGMSitxRf",
  "key36": "yp5cPqCfMHqLMxxyS3J6gXXJDhGZTUFymmS31UbRAfCqumNffk57DxY495ij9yRHbaRg4a47BtxN2YudGiuoC7d",
  "key37": "2NnLN4xevxNDJt2hsffQ7Jz2ZheYbRDWde98rdSPJ9eG1E5ZY9rJUA8xszzGRkvaaZC6kpDHkSoLD3cPxKLRo3yP",
  "key38": "4XMkH243qgU8HztYMBPbXe4QiSvB1qXJLTeUFZdSsfh8h8L14ZBTcpFTDGkLo84Bx9CnaGpArHXtRN6nMghDD1bJ",
  "key39": "zLGQ4VLxv27nwP2XxkAGQFhb1DMmA53y9RmjHDcjUdK4tjs21hX5w6doT3zjEEW83MJSVSQtFCkGDBarqyjuj6F",
  "key40": "81kZ3hxpJywDmuebH8jiH2PwTAAKVG5iWHWLkiVSAJS1UF9nbDarfwp9VWXWix1B8o6WNM5ffjvTm6tqqjd7tMb"
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
