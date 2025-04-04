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
    "4bRqr6SgQ8zrqUQ9QbEwynLoy4h28VrAFtUerqPoYRZKamFSe6P6E3qFxHWJJqLZsnCPHnT6go12iATkafevCwRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VH4qqrs759d3VXFaPejpFAVbysBdWrWcD5VzfKhDJiTy4t6YLWpFQUJXDqaRPXpx1ww6rBv1x5L5wtzQv2ET3eZ",
  "key1": "2bfsLCG4ZvLeqgBScpVBtfpGu7t8Mb11mFKMu158UXWY6yaZjMb6ivzpGoWrmPkDKxouu9mj4sytZEt793ch1gNx",
  "key2": "4wTqFHTVZLUozPygdicoq5q3dK4Sj423YQtQK5EsXs4po1TGE3omWVbYufBFgyewi7co5T7Hsbndn7xwYditUNdF",
  "key3": "4E9frj35LBRgGM5tf8QmgjUGK1ey3nruryBTPxNFzoqjd1VPx7WbFA2QyitEuan6oeyHpMc6VP6r433ffLXE4Jhn",
  "key4": "ULBKWJ2fZww9uhYDxv8sdJ3optG9Rw2vjze2eJbhAroasGGSZuzTRYemfA85scZ1DPR8W2n1PqzmMGafYter2AP",
  "key5": "2evbnr7wrojKhNAyEtEn9qfMAE3s9fiypU2dpGnb9YzyVFe7Cr3fgNHFbkv7T4BRRMmA6eA1jmmKZjCE5Psdsp1s",
  "key6": "4Zcoo4DhQAoJtf5KirLqVFqSs1ofJMVmrdxczeYrSmFQXWV1sm8B9s8dTweXzn2vpfiN73aMCD5F6B5DtmFScNyV",
  "key7": "3TiVwEd26DrCJ2VYfZy4qUnS323sZXvW8BmeWBz6eMRPaCaBVQpwFc7iSBDgMbnftP9rcCRSP7RJK2SP35gJxBPw",
  "key8": "9y1TNrEVpxRv6YJ9NwwRyEoXjpW6QsavhpWpNRQqemP82gHqznCQ1sbcyT1gF2HCEAcmGZAmAYk87YoXemU5Y9y",
  "key9": "4xF3WLAtYnmfcLK2Mro3HvMZF2vcULyATdUNfEB3TJU4ZNqJLC3NAzRAAGsu9mwcP6xKboba9528Gxt1JJX7FSZr",
  "key10": "4GUerG7gB4XhUJ81LjUU9EMLVUTLJFKhDT3tUZhJo62MAVzcxt9gppqWZf4szPR3tvjrk8ETNSnXDaTYFCqXbMN1",
  "key11": "24oPrppHwF7YFPS5Nv99c5ourHgd6B9ZXa2ESXy51acb4sCbqDXTAvUBKbBeNSw2ZKMLvS5g2DWAESGBdb6VN8F4",
  "key12": "47YnMy6QSTGMjMn48S138T93rmQHm53cv5gGeoi7kj2K37yZVKiKYbMKasbvxLhomKYLhNCwNgAjaksGYFH2rmca",
  "key13": "5jcGF2yZ8fnFwh3igKS6KwGMPFGjErwTnTsLCRiHqaeLTEsMT3N6xXHJAedu9zHovnKxzbXuUcrRt6Nu2MwZ69Bi",
  "key14": "23P8YMNtNPszP9Ynd5RcvQdECtCEQGKfkoqDk51cJjKQcooy1rU394ieq37exxSyu5vedn6QQzcikPpQ3vJF3zdR",
  "key15": "5VhVhEEmYPHbeHrDQKm95D3trRx1ZGg4QpiyRuMJAesBMAQ3bN1bxD6954V8jGNJfeMwoVTvVZLU3tdK4KbeZRxJ",
  "key16": "GuwLGFm8BXJDmMjscut7swhiyi1QAiwwzYcHM5JCT4Bm1xcjTXAC5UGc9fjDwQJ8YtKnS7KNKpGh63DtzcTGXAZ",
  "key17": "3iRStCXtYh7GkPh3yxaEXSr2qoJE6YD24eVfDs64rqC9awAd4AifezWJDop7cJi1ALKPocDNKDySmEYUiVNN12J9",
  "key18": "2Q8qH9irNhfBy5xFFMZsgtPWLs5FUs6Agy3phxxzHEqpsU8ntaU3swgC6JAXDEzbwnqxLD62k9LrTE12J48QN6c6",
  "key19": "2eShTr6DiBTEA3zUY5MNkSoCfrWr6qWFohWDNqo5EoPY5Y7jpRhGSrSgkfR3AK2ns7vdiLsuzXCAAnzzprPBHKEr",
  "key20": "5NRYPjdnfjTG3mnUyZH1zAeuqmN6Wep9jMxtgQJjH4J8XiqMvkj6hUqMmNeBAqFFvdMWp64cfhVzUYVCaMckUuk9",
  "key21": "2nmYhTo4AvLe3NsP8xJow7RCe1jHcPikqVFjpF6N2t9uVzAvUiJkxZmhFe3TEPYAYQopr2Xis4cah3yQu5qtzVLA",
  "key22": "3wndutwK8WKDMiNdK9xq1FHAUCG1vvs9WR2pzVMyxTYHUVELZaHQzDWCBFjAMAcajfgTGPuZPn5fS1HyvKHBa5gc",
  "key23": "2z6PVNZaoWB29fxFXfx16S58ucwa2GL97acD4yKwu3LRNm4q6ggRFxXCujwuRSjVCLdLUzWZGXBnv7GsEiZkCb2F",
  "key24": "3y9x32fpsTw96dhhciNQw7H9fCfECaMYetd7kpFJgbeZbSM8Aa9xCoxn2k7tD4RyqVDqknyTNJZga8hnzLktqhs8",
  "key25": "3jGMbzLsudpkG6WFvhQUiMn5cisunxgXtbcNm8B3jeUzH8JnFedCq1FEjTMGoRJ2bKrzQtJaXDb7b1AsoVXrKzyb",
  "key26": "3rL9we5ScYHJKb4WTNxKtG7Gew6QssW6ya5ovmzsWZNQq6SLKsEQRp9hXYJC4a5jGRunrMh2F4NiBZWCQo582B9C",
  "key27": "6544w7XR5CxaG1uf8m1MEEnmCNHhqc98SeHSa15xYWR6PivSH56qvz2F324apkoPVabxnHfnWAbSSAB865FtcGMe",
  "key28": "4qDUpbRv2Ev7JTM7utp2gUeRW6HJcZDsSJWqBYjMXdQjYBjKuxr4UJrGGGkzEeaUgTGHiG95ruDRWfFqLiJdiiji",
  "key29": "4uzff85JPRCUvWQxQYCRiFs7UCEB9gCMbZfRapreiF3y5G2HdiXN63w3MT4fRSTNy48wN6997h1HEQmvh1Z4kipy",
  "key30": "4ys56wgtdj5HiVZAcQZgFKVSftJvXqJwi5BSDjSEFB8KKhLmk7pMGEHnHcGzMcTBCndhvyfjbwhEKHM2AQBnNoDD",
  "key31": "42CZ7fttaTsPXeFCkwDNPNs2r73jQVyVKsPE9ofVMfT1R3WVudh3XGPf67bNhXmrGws8rpxeJtkHVaBNcBqow7KR",
  "key32": "3DV2f3hfMHpQw4CsnVt3LQvvCSuqewZ59srrHDKCiag9BQoump59iVHcx9d5VKu1oZkfnhdoHoUpZStWKdutvFvN",
  "key33": "437ucf5Z8M1HJZNSYjcQ9Q74si9ZnLyobBJRp7P45UggWrNniefxk2CwAqQhSFJaSy18BxdVxPW8MXy7Vxbp1p3o",
  "key34": "4kMdgSpBK1kByZ9kpv4T3fReUipJG4YrePVM7MRAhrQgQazYk6Qjt8fd1jEwEocV9pS1CV8GMpRtyZZZqt4yi2Fv",
  "key35": "4zUAEd85t5dxz8NJ93qbnK1KcthroG6X36uX8vMUGsY44KRRhQtaTyRuiZPvYzHp79SWFZ1mJwrrKNcgGMD6eSE8",
  "key36": "b4DsEQSQxkqMzZJWaeDfzLofXhsFmK7UprJWy858c2LdaSt94cuFc3kecm6eLA1yBsWoVH8cXng9Mf4k7aJv9Sm",
  "key37": "4BMzUX6BX4Eq9cdb3EHJB4ACtLWddVFTq4RNAycYxgU3aihmGaCYwP6YpPyQgBwFDy2LFg29Agfg9svnm1hRVfFk",
  "key38": "2RMbxhwoGmBJayS3Ewdm4ZZ15aqytMMqCqnXCFPhUeMgiesVdCau5mCNpcsU1TLGPTP7ziNxb65ECrANecjPZtcu"
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
