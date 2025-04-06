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
    "5wBnMHdeLJUPh9kUyvppw5z5Pf4BVyZxFi5FeMLCWga1vKQkQbdo8genEbAaKsuJa92NyaHnxt1dc5DctyvSDk83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJzBh4jRUFL8rWmEHW4vG4KyBtczHtHBNn4g5RkMpqnSDVLyqWtwykgkWmmuDVua61eechWftjR9qsN1NjmK1yk",
  "key1": "3pxbosCsiZQFSCknfvi3TEF8VjkoKGJdU7mBtypebhqaipAV85vLU6XWsG7AUXA1UxXTvTr6FtxFUGCdmiwj2eD2",
  "key2": "28ZvDB9uUyJcTb7jNDpVJeHgnSDss9oBM28ZuM7WwGt39gTEXeMf8MyNSTG2EmhKF7dt7r4Je4UzRfNsApgWFWyE",
  "key3": "41dbgsuBJKzWa2bFTEukjPEWSqi7MpNc2X4gdENyEmtWY6XCN3nDyrsEhUiVsDj5kQEzDj8cx8FZvraTHMYnWPqA",
  "key4": "3Gdac8FV3eEgphsfx4TSG731ZVEL4MQELqU9FQXp9BSmrpvfMqUhRU7Hq8E1MyR2EK9ha2CMkqDJf8sGuQnwBjtY",
  "key5": "3aWKUnGeqibGWfsejFQYQE9bfkwzhDjQqTbLXLRQbuZ447W6RTVTgdNzFarkqNNgs8WZ8rKs87yTgtSf6c1SgfiJ",
  "key6": "5oVgWt8AP6DmBZqLU3NEnQnFFvUqVtWoWK2b9YM5yYekWxNz1XTqsJnjcDXay7SR8AYmt99MnBwEh3DiqAipxpfb",
  "key7": "2DbGaKRKZEMc8s1L3dR7rHnWp8Fsem8aQjfeDAXb9VS5H2UaQXZCxydXcRd2n3V73F8nLkSKTtieMTTK9CdqCGgA",
  "key8": "vvBTDqmJ6FT3CDkAWALY16aZZZGDdgqzpasYW738BzxWkTL5TFET5xErxJNYoprWh4UQu3JMySbhrNVF2Q7Prdb",
  "key9": "24CCTx7GYa3y7YUtTc634gQwsaF3WNvKWQRQ8VxWcSV7TZ7x2cSzYUHk6qNwPSzJ7A2w4mCsMu5KrrtDXtrZ8M4N",
  "key10": "4sRp7djhoEEYQmtShvsMT78sNHrDAHiARR5v3wvwSQBjdt4zPDAFwMx3VXTyeR9Fo2tagkszQ3o3Qx51LUqyt7ms",
  "key11": "3kgqbnVZfccLiTeMo3RfFXtBw4vtWahEMiGu4ULSX1HbM6L9qa5tV3wf77rBrFmdVaur183S5UdPPixRjhmczs7m",
  "key12": "2FnLebjGySjiuaxTGutDWDaxCWwXSjFRALLnKtPYywtwpEz1zbDcjsWg2QNGB9kFyPTUFsDDmfiojxfLK7FQWWua",
  "key13": "2KGM7TZm1cBykh9DCeg4DFnr7DMxJ4X1nbrgTUx4PReyujNwRdxwrVrcdMeAgByjm3K5qBo24sDpMmeRARrJczb",
  "key14": "CLHA5bs9k7E4GvusxtL8Ycu4qanQbJFaBR3yFxsNJMpYvgGr9UHcKUTGsT42QomAGYSnWAZfXutKqLdAu5NvyU2",
  "key15": "22Zgwnicm7J6uZukzDqpbj7BwzLVsCQFUxzJXNJi6MBnvuY5PGnL5pGMwiXS4qhyGgbk3vRW4dUJN2RKpT41tuvD",
  "key16": "2PBkA1EEbawBMNNiw4Ydw4mo9sLA7dveEzHKfQGMVvmgkgh7FDBrd8mEwdjGh1ipkKR6vj36t4zDeEftXX85Xpbd",
  "key17": "3qi6ATyJckRbco6KnGqxgJdzFQefeeVN5qnHD16m3eSPtPR7BnKpHJZ6yUav75DyEwKZApcoZSXeZpQTVU9HE7k6",
  "key18": "5SUBpm3VM37iY43Nbo1rx7oWJixJDE4JcHAcdbUfrbtWoyvSryT6PZDcMXXKpahHzpQ9cZJbccvKEoZ8v6b3vo36",
  "key19": "5yvYNU8Ne1QKWwAGQwnw1BRKDye6q97ikj4tw4MrK1cBaJaseUXzEDsPPMYjYxkWyGg4qHXtUj6crdfAhfmP3Nmh",
  "key20": "2pQwg8c52EqUgdpzdhmaeZgVwGg1wttyjR839o27dD5ot7sMoacQVQDmYpSnjSnTffMGnRFAuC56KrDKvvyC2c3B",
  "key21": "4wBnrEdHbPDotFYr39LLo7qa9PuNoJjr9Seygrke7ZbNHfdvThCcQ8NgHR1a9TgmwqSqyhzp34QQ8Ge1hRYxmBmK",
  "key22": "5cjjPZBNXvnCQDPFd11RhZ4qsRCTTCmPa44yhAmemTxm5sdbWqauoAq2DaYREBGWh96XFmGde2VWj6K7oJEoSjjM",
  "key23": "2JbgRZQUA8Lk1VRb3sRpuTVTu9eKbvrMPjLk8rkKhg7YwNTrDykeMCqfFJRtvQPBEbr65YK5GfdnpnSZwYPLWkvu",
  "key24": "3tQLrur6ZyZJCFkmEz6TsV9LpBuNiewewiVFqWdAqDQwjusdcZgVng4s38ds6H9KYnbTCzsp1gHbwnoXopK8p214",
  "key25": "qCDemhUTcCgccj9D9VD1nKGSLnNS9H7Jo6SfmRkdn1NwcGLnAVfXQx2YN6K12HLum3fcB6VMwDDSRMNzi7irj1E",
  "key26": "4ftkou3KVf9NZQCYrmDPRUqNAFP4kWmA3kbubCt3y3RZ7pj6UmnuQ2LEofNHPDroFfgnYLiLn16nLeER4V1jbiPR",
  "key27": "3CNxCEcreiPNZ1j9Bob1yNxc3iePGiA2Zhtqjwik6byQjaR9vGELbzXxdxVFsWuPcUcdax5NoAMxM5e6eAzXc58A",
  "key28": "nNJSJmpiHngJR1x1RzZC3b72ePqMhzg58QYAPLf1sffjg38s2g4CCiS4w7mwcotTrVR7tAM7stFWJZqeAYxFzFP",
  "key29": "SXVYbQG8HxaCdnDCnZtWywJanzcs5i6J8tFV3cECfjW4ntzyk6VjttRHNTEaJV9RJnPHuq9jgweSck71NeXyef7",
  "key30": "2vYhQofdUBVbapt7mabNB2NJd1QrXZUbTQ1fmBVzNgFp3uouf3vUw76Ukj4Rt8ppG8akEf856Z5vNsjrZNpAJuXC",
  "key31": "ssDVqbLnT8CXNHE8weyELULgWhDtcx54gukUVxudGSx8cDhMcozJrp4aBoR5VFKn1Jh1g4FdNmBRzDyUtXcLaJL",
  "key32": "A6SLaFMVLTJiuNrnZSApw8nizRN1KbRyFTrN35GFUJjNiXpaD1KwVChDXjJxHR1LtK5bx8AhnhuuKUdJayKZxzA",
  "key33": "3ZWALS6ELuV4GWpLC2siW2NQD9JkuyS5AA3mWmyb23jpCqYwRyNKHDt9ujWe3Jz37ApNV3kzosGuJmmehtEr9K2p",
  "key34": "2xuKcjTHYpBrToLjtK3GcZngSnHSn95rKPMUqqSvdMBHXkkCB3DhTsqobhUsYa862yoNG1DywBD14mLct7Pn8muV",
  "key35": "3hscND7K2Zf4LDMAFTTq84nDBTdnEmBg3s1BWkmN5p2XrmCWsTtANMG4VtK1zYTvNRjmDg8KYehVbezpdHxZwKfi",
  "key36": "2G2pRUo2gKvbvQgAJZAEbHViF3vER9SWzZ7y5h5S4DTqtVN31Cq8i7YDKm7Jpp45SKY12UtKyP3Nv6SK4xaFBuF3",
  "key37": "3YzVo68aC7GQzdaDmouocJoMctc3njcuXARZcK3NkY23VVPGCe75vGS5jq5qsXCgFNJh67EiDKnBS54WZwzt8MZo",
  "key38": "42GTyzFKxj9J6bdK4jC2LVvMVTQJRomwfLUTFT1K1ZgM11P4i1BovF3pCg8JRgVKordUnBcBJaN65Ti1uABXMDjK",
  "key39": "5fUVySwfS2WSpKMGYdnrFs5CQ79EbvtwowJw9Sdb6oERhCiD5XYy79QZ5gA2DBvcrxKddkUtC7FLVuRB5dTpRSrE",
  "key40": "vdf1hZMTQxQ949MDMNTECBjnpeg8Eh3hLk1rDePTixx4KTSRBWCHBmCWANxexcLijQTGfMBr5vQdcQ9ceTmUK9p",
  "key41": "XEn7k36D7erJ7h1geYaKS5J4VL8W1PWpKnJnZ5wwZHLYPBBcGWpS6p5iLEMBP23EywGfZMPmL5u942Seq91yXPf",
  "key42": "2yMBuzfvcShhpbmTN1bSXtpYX4sdAbr4ZKxTm9wg99ogmccD1LUq2VVJ8XWQZjFTe1ppBmo6WSunu7tcJs6Nx3p1",
  "key43": "2wn292vK8kqgNUg6i219ybfJ4EtLPiA3XDX8SMxQcTRQCrjEVDDzdw9uZeVxsbu3KfNX98Rbq8pvzqs4VTJktCCc",
  "key44": "3TJ56qf8FTw271LQgsTdh1Fq2vZU5dYcUon3ZuYgWfggDUtLBYNYQkjGdGNV4LBAU3tPxQAszRB432WVR6dXKnHD",
  "key45": "433wtzPouZGBnDCcoYNkrWJ6ERLnXraSPf2fC96NrQzhjmoEVDJBgBDExHYRZsZEfW4unP95hemGvkbvoQyd3p4d",
  "key46": "8uVK4227NAZT3BjxoBGDNnDSQEx5CA8num2Pgbwry6mGcddycougrWkv1tv1KpWTfhnv9F7tko581bN316GD3zG",
  "key47": "4wXq6oR6kqRsqsePAN8YFDZJ4jFtGcwSydKesPFgZBq6Nn7pWL9bv2vEfCNqT8QSgfSYKYWVzV8pCaoKfpdjRrn9"
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
