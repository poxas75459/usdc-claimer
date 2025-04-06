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
    "28FzsZDvbYWfiUkYmVAzonUzHB8brCAoDd48EdNFbDryAxf6n2meaeFMDRoFcL2ZJ5GcQ8rQiucueTtdH7vuAKD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWqq9qDppKebDusAgmxMg7Yi5QzvW6tAry57aEN3hHeTHA7pvZ7Qnh5qJxDxviGi5pBnnRiQZYUV5iyLNRDnDqi",
  "key1": "3AVpSRo1n5HmDvr7kNsPchGRMzKW6ZTWMnYkDQBvtvchANFXMVWAEkv4ADfT5EpGZS3D9w1PQCvHnx2tq5Qqb41q",
  "key2": "21pjFdnJkrLaSEwzPmjwaFDeVNxSKX4zAzjTvPE38QW3j5Doz4SDB5JgvrGVruWgY9E4kAZXz1ucatnh1L9ZiRde",
  "key3": "2eUZYhbDcQKoNbnaWMBqE2GHnvV6uPS8DbHgdBLtaqRn3RqvnWhKuC7EzB6dGJkziSMbBsfXMJLRZ9Q6zK6wTmBf",
  "key4": "5KaZpwW7HpR7Ezsgih33ttq6tcru8qEHx7X8G2F91P2fmAzSSH4aHZpiVNmr8frCM5c5LWs4UF5oUxQN5JiJd53K",
  "key5": "3gk4EveE1P7qvM6Q8ioGoWnpx4QtVN1A2vYMJoon1ygNcH3z1pfsUAPPNhW9BsnkYqzAytvBRpyUgEj171p3oHYN",
  "key6": "58xoBin7dRjuHWdsnRJUujhHptuFA7oSENgYQv3HfHLg31Pb51CAaFGkLvb98Ujm91ETurNAQ6tn1t1GsTGkAobs",
  "key7": "2Ct7C8d4wPvRYmBfFyNcikMRGE81YByfjvDdJzfuSVUAtMFs3Mx1tP4dbXcUTMPo8ks7horBUAzjwGkXiEqBzqBy",
  "key8": "67aLB4HeUUE4DnnLJzH29j7GWJvMcswXuRbQaKYXwCNPPmKWcdkxWqBttKbLEaqX8rF3KU3F8k6ce6TUsU32tNJJ",
  "key9": "3Adw3ZMZK2facaEBSNJdz9s3Wae3qyoWM2M73PJb2oaNHfkwUQRNT79AMJSPgDGprbNDRC2VMQ6EmLLD9VHyAsbb",
  "key10": "4NmVEs7AXe1Sqt7xNrohPwW43AKekXqPfNbvK6PN6PGqnnLi1Wk3ckDXZPFUFfRnAHeX7nAdoi1psS5o5iGkhag4",
  "key11": "YAJYjYyrGo4kH3WSXhTwJqbatVUWXMyLCnraESapfASy7Bb4Ce4DzNfXdB2aJUotLtd5uA4uFuxZibSvdQXJ1ne",
  "key12": "2PpjNubQ7yQ5GXVHDH6sfBV8C6PE5NAXNGPkwzXaBTU9UudeWBfFQG5Gsv8wwdP7A88Y4JqKxGT6swpuxzXFWnC1",
  "key13": "3bxiZ2EuehUuohgC88dtKdsRu54LQG8oeY5z1G3Gs8AWqGAQE5WDwNV3Gn8DfXnknHyQQr3wYPpvLYzDHXRB1pkQ",
  "key14": "4tvnU7NqFAv3AFVzFyYpvCta1voh5tTpnJcSxKU3ncA2PGDGmaCqhEeKo24q4NDfWWEhs5j4po4ZMNUXq37YYtBD",
  "key15": "3dZmjdPh1Symta1AXFM75EW1ienZ5w9Cybs75H41cXsgTVqEqGQEtPpGcv6ByzrJbWGVcMA7WzmVpFix9Zf3btkQ",
  "key16": "4PoKnVnC2FRZ7x7f1m91Ai83jSpZ2M7XGv5zR43UfdBZAnzpyrDQ7JM38BWCvzV3XhoUN61hghqsCyajbjoPd1MJ",
  "key17": "3X4XEDQLiQUfzcpDLCUnSYeL7ph1coPrL4Yy7Pbwn3bU64EwQaz2imhPCWNzPe6RELnurchzeANNSoshBdD1UYqs",
  "key18": "58nxrw7qXo234bWqSHF7ttBaWjPLhr8xtfXtGefhntdFeTF1gfZMd7gS7KPSvYw29BQsztYDzXqPThUE2ukgrk2e",
  "key19": "3kjJU3zPBVNFfGEDKj5VDG5HWXEAbaXSGvdcQZg3E1TfsNTqtTbKpsnckzm4Et9eXDDuFeYXtFebHXJKV4PZzD2T",
  "key20": "5xCPxVR4ypVS84XYz5FFJPWDeyxAgsUhx63sqNUDKovxXkfWCWQernPAbNP861Vu7nF3k6x7g5ZEKHf1kdwbdb21",
  "key21": "5wMdFejrLcuHN5rXB45j1McdyXQ53oRgT5GxRh8V61uWmjN1dZjDNaePpa37dULuG5W3XYDRQaihwMXcymwiQjXW",
  "key22": "3Kyoy7Bb6QRmK8c7r4ZmGPVQVKYdwcYCr651QqDZxQy13AW9e8XepeZQRBcqr5YneaQPANo9i4oYi8mD3BXgyeGq",
  "key23": "47Y3ExYLv25GaDCUPGEvfUsXiWCvukAKXDBSLnNhQQXkZCr6ZENBkdmMxovwgKkvVjcnLPjYfDcAkS5vYmWRvcqz",
  "key24": "3RbFPXBVMQxBWFUwpGEoZVWgHXgfxpawdqSn5pjPgzzKPEnfw7VQXVa4Vir4ssSn2fMH7cN9bAzhy1gzrCG4PUJc",
  "key25": "PvwomACu2tHYnB9FA6bDCxzmfGyeFaYipJwDrLuwCrQSnpmtvgG3LdBx6uzkaPowNjfSwNyCvu6TLcuHRHq2mUC",
  "key26": "4ezD733tEavQdcwuMYTCgYxa1miyZ2cq47WxTgNsmFKUVQUBdQU6cYd8j8N8bM3dDxxR41aZGDTEi9F6URHWtZRx",
  "key27": "3wCPt7MsWoLWNdWZPTbGiPQR126eEr37HLXa699zJkuCRQjngcMQLmEBWqQj6dYHJyKr9AL6vf7xfENTcK7WJTwg",
  "key28": "2nAyxecSEibpgLayzR5VE1nBko5Z1U2yWHDeaH4eUh4WqZgiudYdW1uZnCTsPv7pndrcuxntHfnWBx5vzAMGrPRn",
  "key29": "5Suq4sionC83dqvaTzrhtNB3dsBZhUXmECiTeNzTmDLd9neayqGnDpb7pWZFrmbBb3smABLdmv7E4ZJD5f9XGjk6",
  "key30": "4t7TMsSw16yYECPcaBNjQoAfsvgsjp3tz1uefkHbNMHFfd7oy7rDE4aXR7L7hi56rVWPZwpzhFU2jhVkZ6KM6Bok",
  "key31": "5soLQAP5E85Tg3iA3YvSCUDQH4tjx5ek4TrwE7vTJL5HS3tn9zoxjBJTiy9Fx7RTUSN9JfUFS2aBYqbHMXi3o1QS",
  "key32": "4mQH47B9uELGkeq9g9e2m71zSNtrnQr3hzmH3TngxeQmGtihsRiTrXNwMP3DoA1rUdx8izD1BSZfLLFMgmsvGoWP",
  "key33": "31P7Zk17B2TQ8TatccthMs5C2DRvCS3WgWqYrgps5Um8L84F9WKcrLXWwB8o6QuEBS1wd5Cc2ZSPYCKeKwywjFbC",
  "key34": "5cEPYovKKgpgmF7ykAs79Bf9ARQVM8eRW6Nv7xab9bpJz9yZnKt9wu128tQaQyqU3qf3MRQCD7oqb3knQXzi4cBs",
  "key35": "QHkGFKcAxotjjZUnuYVBkVYdXK4WtJhKoHkbkoJJMPmGiXeHNNKdVHQebpQtghh2usvesWpsjPNyh29QGViYjTF"
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
