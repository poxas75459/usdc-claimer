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
    "5ZeLV33btjti4pNTJTmc1GRWcgug2idvYEdWiAUpGBTg9q6hYw2sVd6sM8d9LexQPRFCK1pyqVdR4FSEn9c7y1oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xGV1GVuUtNQHmaWfpqwYKv4XWgrapJ1QBR6dn6bhq7qH6gdLhM1wnWEo5CD52QEDBNFq4cZgwox9fKq7y1GUya",
  "key1": "3W76NN2xv9y3mDSd1qQijxQR39Q3BBZ6A1NUiTYMV4JcA92r3KTmmSuvWSsyBFh9foG1M6nLZzbRabbrwySgJ2rA",
  "key2": "2DEpnSKLDXBJcxKGUUD3Y5Z1khdYtUEyYTwoN7Z44kxmQfqqRA6MDKVBoCy1AdWfUvd3owzpXVsSvCVD1W7phXSC",
  "key3": "3uv1pYNTa2yeZ36bFihLvPFEkhoQtHkwqdku4XmyQpXk8v9xxycoT7GefbhM5bYE3397NJkV7cJs3zAbprSWiEWi",
  "key4": "4yjhgUZrs6muk6TPHyyvJPZWkHpxZhry4nQZWLPWzs4t9Zt1i92Q5w184Wp8pU9yQv4Dp2yy32EhGzkZRfMQnqtp",
  "key5": "39VX21njEDWPQFXdzxmTSXBEMV23bEkuMnN6zvTA2GZeqZr3MkVg4Gv4p2HRSpnzRjFJMc2Do6wib63YwEpE9ttG",
  "key6": "4aXRTpX5PBUahscc6GCVH3gLhXdyBp6r5GjLofAvDQXX8Z28LsWc1iTBcfwHiHUvquruWZzqxggKWfeY6AEgYUsD",
  "key7": "23aNbCc1SfQPztAYiHtB8gfAoiqHX7oBCgnXzN6TqMDwfA7NbkN36orc4fGKDHE6zaMkXdNSw766qkz9i1JfvJsY",
  "key8": "38SYAmFPMfnaZjfpVZE412u8P2ceQhSAeHNNKBZYPuu6AaHLi6fRKEPuwXPMwjtD8HyjxC6ZAoE5NS9Lc6Y8baZH",
  "key9": "4qFUP9nGJsDJCtsF9ussB4JJjTdRs5fGrbJXZU5rT6D9iScxyNcR3k3unFCV4ZDGDjmDkPpBrKjqQoj44M5H95e3",
  "key10": "2PVg5Eonbop1tnMVZQ3v81DX97T5JmRvpVm9EzcjkJsMCQwszTeXrXRVhde475HwfmyK1uCzJFKzRTXLVfhH7hC9",
  "key11": "5TFFMSZsvavB1BAqKDhfmzbyCyZvzeUSzQLnUq8GF4dgXQVQnDaECsPHW8ess3hMukCCLDZBWirRSGCo6HeWcRJm",
  "key12": "2TZCJ4fC9Q46U373ec7PBpQqKqrv2J2DbJ2R7AUkXbNcb8aEBpnMpBLQRGqy9rFy6Hf1nGiWsQt3DafUdfjLfibn",
  "key13": "wCNA1T7tnPhYZAnJG51U8wGhSooyC1aUdYU2aVbWhwwwuQyCqL9QMrd72Cq5jqLLtobs2gp6PUpo5KffLieM3eB",
  "key14": "5mQd21d91xarT7MpLsv6MhVwN2CHMapYZLM7jAQQYZgWeEHAHuDCr3uqoJbb5rRQ8fqDTEBpAozNnZHFemUaQLoW",
  "key15": "5PvVX1tXxwK6J92o3S9jwfjCowZPCidNAVJxnYJHTjD8rVD3MKXkrz4keezpEYo3cwBYcqgvaktawuEG6Sabwomf",
  "key16": "o4zGoS5pqAYKTwvnbn2rYCvpRhK6kW7UBP5rkhsw49LLT38E5gAoFTqmnS2bSexuKeUWtEVU5Ex1eCGin8AyLbo",
  "key17": "5w7SHrgV3WdjRJNjtVQTiqr8iH5HirmcjPGpT4YTQiqzyfxHPqFfkTuRnF6rBWiKuk7FAa4mSDotR9SexdLAJRex",
  "key18": "3y4ESd1yPxnoULJo4zmy62TeJpy3uqyCk3LweXJ3oNdHCid6ZLLLCL26GE2YRyrD536tsHuh9Rh3uCWQHPrpMinC",
  "key19": "59GerDYvZCkA6wosvzr9h68RmWV9ExCChqnaaZa59cAMGxoYghLxe8FMgytx2HafwrY5chUW7mxaZThBUXwKzXhT",
  "key20": "3zSS4f2kzbvp2V1HLrhJGpfWCo1YncPsh3nhuUW8uxC4r4yXFM8aoJGSjGNJnoTmZN4ijGYSaWeR1BmS6bEXLCCp",
  "key21": "2Uh2BrCqKkQX3A4tdPu1XBm5VuyHkVWu3fDA2b4yuHihisX68vv6PSbtqhUHha7jvWWLjWKenPjyTR9dZpgTJ9fY",
  "key22": "KwqJs9puPqjfZiXurjutdSJKoN2HgunCMpXFb6ER6BkTwNreSzSke3fHUno3dg7BoeGGm2TCELwNZHnJoesE5Tm",
  "key23": "5HxiYVTBjU5gKudHF94Na9Wd7Nc85ZVrnQCD9MZHcPpwUmdjnisC7HwFXGGb3N9B76Cky9RqQb7DRUFBRYXFjSFP",
  "key24": "4z4tebU4bvEr1i9Zi2xQQwry8j1F94NeyniLk3AkrxYxd5Pbz7MeBSR99pJBpKoCifAB57Goat4scZjTpXMy6Vhq",
  "key25": "4nUj5PDEUmSSfbuULBwfYJAWQuPecuF7LKNsRBLtEhB7jbdo1oQbfEEVgMcG2XMvax9wLJDx57iP4tcnVpyM3VNp",
  "key26": "3Zno92QwuxWiDnMZpeeuYccUnRUipmSGuupFnMgkRod2YRme3QzoFuDcxp8oGbTDMWfoYLfM4CUy65JGBusn4Qjw",
  "key27": "5Xy77gxVci8fWwgbPWabgXxEVxPbCfd6uLGiLJZMhMiYGBw6gf5AkTZBmEKFXEfeVFdK2ftVJpgnB5ZNfbDyKUAs",
  "key28": "4rnJj6VhdtavFsVowxXF9fj43VoWgN4W3DD7C5shyjWb2qoAqsQgucwM8ZnCiPxi817fvgiRBUAtYNSLZ5rW15FY",
  "key29": "2voRw96XkoyuW1JvLu5Ft5utv1u4HzLup5nV6LpkMRhejh8D2Sh45oXSkmtpDNKzZQeiWqLexRzXD3Rmk1kveftb",
  "key30": "5BP1zrW5jAr4ZrbubAa2zmMuwcq2joVUBFLwNKAuZU3rcMcLSc9QxEGPnfMXAm298qt2DR9C8WgMuGwEsucXEsvY",
  "key31": "4P1rz3qUCuqVbceoDGkBYmE3nVJUVa59eGMhRz8XgbRDeh4iiNpykEtbvU7DaphuJAeAjJ6XW5TgNfimvDmAjSDV",
  "key32": "3Z7kneBih7TPAuU3UnVKD9rTRncg7W3CeHM2xzGmooDjzGC8mDHioar99Leh5YUWujL7WbAJjVdQ1j3bvBXM2uZ4",
  "key33": "2q6uNj6m4eADiPc1ubgkLoQSEeorPm3mBuPnyGNrKeSgVkm8jitYGwGWWUSJZcRnsJKs1U2yEdxZyw4uzKz4gk6q",
  "key34": "4Q5HhQGYtRihnHUW8rpZEv2FDAfkiGDZbvfzFrBNKwqWPaggAEH8kB9RNFPDTMonPDV6pXaq9kBfh4tdcZZcnNqh",
  "key35": "42pUpUcaGgiXCPaNCLBnVba47hWZRFvMb8W6W3UeEztdFKanPqfQNxzkPGRBUqFkNck5ayvSUnfrp4EZn9EvR3py",
  "key36": "2o9JvHdgpc92n3gr5dag4pSLufgPeAaWtNS9qngQnJqeGyQqhtjQr3cbw2J8BCDJh6PnLwbrf9GwhoDxqYayCyLj",
  "key37": "67FAmsYaiYiMkNwPp9vZt4h4nDFxzpdEAdkgJxuKEbQ7AUaxjxHh4KshHBU8wqqhkRNsnmny39iwji9Kq2ZaG8Pr",
  "key38": "4i9emi8Yph7KHgbU6k7QQeBxvvnLA7myD8ao3RJP4oSreYGXYNJZCPAf28UxdQ74vb8F7tHkbXuk92Tdc5nPNwro",
  "key39": "bpPpkam1877jHrzXnGHs7S2ahkoLjmE4TsCrwTCsWS6xrLjUFuf9NchFsz7pJfmqWnAb635o6uk76eAr1UnZLHC",
  "key40": "3TpcJwXri6aJd1N9U7snzDXV1VjoxWMfhxaR2gXh78zxXsSE7WRZrWj2cTMUokKxnvdPQrzPWYaQ9NngRas78bfZ",
  "key41": "5jd8x3m7ACuL3DE8uuWEPHqxA9GaSRFjqqnWHm8s7AXbnP6fnXpby2TVKCFeTwFzRREhw6uqyuSnguM6rTGui4QQ",
  "key42": "2b9svEoHioBoPiUC9sudSDcJPYfVRyhWBnZ54b6Kqjcsn97XbnyVg9hSxDSvuqerLkSQ7wxKZbj4kTFTFMhhNsxe",
  "key43": "29XsB5huxm6NUZBXMxaN4HGze3Lthh3sjs46jGv59n2LecQBY9ArTBTT26LRT8dpmHarSKddiJg1t9zkckuJnbiS",
  "key44": "56qZsr4Nd5iKNhkaNwvuJEgsMGq9mgttMDsCDvpbLfa37rXxyS3NyLG14mbaqqpjuew714dtyrGHK1rh82YSJQJa",
  "key45": "5qt9gtW6TQwvie46ZysZGoUWgvvcR3UoQcxyqxLgoqewyQywxD5NqhsCCbAZSHRgM9R9kdEMf1MtXBqxEBEBVQjN"
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
