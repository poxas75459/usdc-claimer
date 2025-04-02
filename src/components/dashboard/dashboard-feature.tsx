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
    "7EEf4kBta5fSNP4dBJy9agNc2JDP4URjc5EbonhP7w63YP9ALtsf9SSQn3FXZMRgCZ1q3FBBxLAUHVmR9uDsyVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCvLB7sWEucMih1GTXXfAznc8NgpXn3n6qefLpg2vjCE5zin1patdmbJU1Z5EE7MRoMVLbvh5vhp3pmsuLzMo7u",
  "key1": "X6uPirn1sbRycqkggoEMGzh6E5qmwmsfo5y9G1mrhztGQ64Y7Jyoz4oAjyJ6UwReMJkb68fkqAxb2PXx6M7iKWn",
  "key2": "gbs7cCic45kbVWu8oXWKqmFGyQtdnN8fqs73EdfZfYmhyz1jD6YdHgjD9CmAtZDNanfnVwxB3ADLR8V3mTJoxPF",
  "key3": "kiUQMBfD3J7qfGDN8nou8FYjPyh23rMGoTmAkvxdRLEdxeyg6Wb2vDT6svf9kJthbnsE9zy7uXCwWGWowysmgGb",
  "key4": "5ETVrajN58YSWSAzEy5aGV8nyVWxSskYwYuwZt8UipsZrZxqpQRbmFs4Ph4Dt6rsPk4MRX1g4yaXMw2is7zAMYcj",
  "key5": "3dsUaH6cikZXypxTUEBP3YvNca4Zab9TtpfBisnE8egw4kcK5QLYpCWu7Wbc6f1LWdT4zfSBTY7gh2BntkWRQ9wn",
  "key6": "58B2XhdZNUhvLKRzWVJy2GUYYFJH9po1UVEcrSQoSaJh6U2u8ekkWnUmT5y19RmZc8JB36hiL2RgzmqDkC2tysUR",
  "key7": "u5GUxiqhzCnPLTGSFKmsAKFAwESFojPr6QtUqdSWYABedmGLavUHUf6NDG2NC8jGfEAbby3fW1aiFewRaS6o1vi",
  "key8": "4UCm8d7is9bGMdoczH8nRriJbXwzzWcSazNwENP19KgquYMXC7vyhUsbSJerE3C8DQtNBMyxKNaPtyBnq8M3iWSk",
  "key9": "5CmMDQJjVDtZNvDBDxQFi263gkKUuUDs2nqh7EZuhyq7WoTJQ4vcCT4DofUs34sA9b8CWmWxqmdoXTw3WyhAAGa9",
  "key10": "4vPBsCei3Fghb6NCCoZVrTH2MLYMhyuAak2zfSQySjqJZevf6XSpfVhQn63hBTs5RCjYYzZguyyF1UU3YyoGvMHB",
  "key11": "5D6cuzLe1xxR4HZeei9F8riHJGu2tkTsZRGWu7oGbbCQaMibpu2EwjzBuuXhHufNsiMDKYdHr7E96RSreHpPdDky",
  "key12": "5C2foLfnbUEiA6RChmS6TAT7L6xWeFL5f5PE58SHHBKmfpnCVRsoGdVD37aeEhUBmmDcb3LkQ6jugbmShAQzpgpj",
  "key13": "3st2w1s19ASdzpyqHN22NN1PcybxowSCx7aJgWsmagiSg9JceBt6Cizu3UDqKweriNtb6ezKVWVXVpt5uquL5Hoq",
  "key14": "2SXdLtYzzPMsAn6ZMSBHbtvdgApF6ukECSKGUSdZAtCNxgEsFZbiHCRXgfJRUc6dVEStxt7QqT5SCmZTD8raUkMk",
  "key15": "47RsbnkrjBZYbSvP47GvRTNh3N5MtHTvys3krMqpCfWwQXvfpdH3X4au76izr3H3Jv21a7Tms4uXTLhaQZCSUMy2",
  "key16": "JniWFKgCTsz1jx5ZJi5Uq7LnX6qfzci7ejtq29tvzyLvgo8KS3VZCyYVwMj2fkChuAq86YPorBc1uw1uCnvndZV",
  "key17": "4SYeDMAJ7hpQaWRnuK1C2cLrh6HQJAWinBMvwGd1Z1T1vX7NLuG3bmS6svoAzpjKC8c7oGvanfu2QSTYCimXeJ3X",
  "key18": "2SttZPLYYyMmGzZadTySMz69FNLBx7RJo7JbgQsB6c2f2R8pvwtNwEpvWM3JQbCiAPrDopaBBoFGK2jegNCgBMb8",
  "key19": "37gE7CSvN4Ak3X21DWcfLzrbq1BuEADfohxibWf8f5NSPdsYHw9xPhjDftxGVqNSv2ouWfMeBs2kVfzXKkcweTqY",
  "key20": "248kj2gN2uiSyRLdJKqvPbYsYwokuibNFTZ6Qe71yBNfdaRJGJCaiyuXa722zFVxysMZZMC484d33SWtUpj1552i",
  "key21": "4cdd9rpdzvUJjxwu7GEh7RbBt1SBWPqcBamQK3ftw6uWiC5E2yLBjuHjErANwuLKbLAef1wbVtFUW1WpGpNjM3ax",
  "key22": "a3zLjU1Ho7bS81Mvm9YgUjZLpdXbzek5GJiW6AaTLq65EjMs1poPMLXh3vgDhZ26NdEmeRQaMYE3aEtZJr561XX",
  "key23": "3Zep7i1CAmPCmZrHCW5Pq863Mu5Cf3AvoFRbCbDDBEpk6twXXgZp3Nzo4aVxJDoV6XrJL3ochHNFva4M8WBgSH9S",
  "key24": "5jcpKg36AYcBTsfSgJbeXd3XaLZdnLwPH9Z4xnFrakMoLRDjmpMd9nP4uCZkmPWhTwNEB1aFMUpQnGtphcHENs1h",
  "key25": "3DXw1G6v3fuijwTK8vuBV5GpRk13skJoAsADX6thaJKcYz67EvLNBVJp6TkFT39xFcJx5TeyzqN846eUDp5JyYTg",
  "key26": "5UPBL1Uu1rGSZNg2qRtEwthYaP758q4mpn7hqogPsc4HSXjX2MnQBAtb1T9n8uGY1qk8YUGfCFyXLY2yukzfJ93y",
  "key27": "5Y8nD84RXAToQ1ceEgABiA74HfNPr6ozWdnR9V7Zvo7UuFZauKKCD4NZCBzjSynfJLoGeNz4X6j28yzq12r8ygv6",
  "key28": "3iasX9bB3YSAMArzrsDK5sZYSwK4j24RFRi4sudwP5QkXprXUJihCkS7YNeSGtziCv4tubDjaPzM5MhCerho97XQ",
  "key29": "3MYn7PmTZ8JBnwcNpRDFxAGCYtktckyukC1HRQfS16CHvzpyhNtpwazMSfPZeaMMsgvWaVkL4UEWg7DdFVGvbHAj",
  "key30": "66BFsUFWQQZmR3cDEFgmXqns7yuymgowoLkxaq9n1Hs8iV2mN8SeRv8XPG9csgAB9KSRCNNdaiUoYxLFULcKsB3X",
  "key31": "Eo6xup2JnQQspNnADnTxBjgY9Jqt828rvQv3oxfZgNBigCSxBQQSvxFLvBiuoudhWi2UQHbehFpQJWsALWZzs37",
  "key32": "3EULHYCWRvhxETpSAzffcbDvQ33SQwZkrDWqy7QupLuGGzUnnQuaASEeqfhkxtYc2uvvWb1XzdCFPzYzvicTzPDR",
  "key33": "2ecWtUseQz6RL65kUTPDyUHJkMTnANhE3V4jrRVWeHoNpbbeANnxhPErt62rxD2Fsh8uFZUhgYTdb7KuEbi1itzt",
  "key34": "bwCCSVHiJDYdAFWM5MkjEprmXXFtyN2jejm3cRios2i2Uv3m9ZnMsg1pbEDNvPMuEak3Kb6QHEhrhVdzY8fTZ5S",
  "key35": "55ZjVUphRLuGKNua2STKuW6wxtSzCFACQ6gDcGEbSubVmQumDAz6PJ3NFLaW98npKP1eRBvkW4sGGEthq8FGgjXE",
  "key36": "4mTp163qZ3HmVqvGMJtCxiSqBKc2ejDh7f3ci7xULhXiVjG1bW8LAFcoJwsJPJG1SyqFcxjaXV9zCrfK98U45u84",
  "key37": "2eN386i44rJApzxx2p3eu4fmHMpbRJsDEe2G7iGQQ2ERWmTmziGCSo3KCGVB6yL11ePZ4u9kx6FmUzja3kZFqqDa",
  "key38": "56VVMtSepxbpLGBXyiKWHHXJhwcnSeXXvQxcyoXWdBwy3BGJJcqBNFPZjp58EQ7fk2r758XFUGz3J8LFm7ZKQG4u",
  "key39": "4SrRNaiy2bJcDeZjTTm42uXy7eAWf9L9fr1XpmkaYxjAi98snSVWcbokJqAxE2eqJwka5ZurZL7Bhjz5st5gAS5o",
  "key40": "3gmEntwE2bEzXxAmU9D2Y9aBwSujcVKfXGUKsejtvuaSyUHdA3AKdG7e3FyvKiz7crxnsoxWWrWCW2taXpFWkLcG",
  "key41": "awPBKJji8oRu7CM59m5uj391nkoZfwEYj26fAFsYRK4Lziiiwvtxf8fHNhrD9VfU9LU24zDf82qfThZSkZvREMW",
  "key42": "3RzdVGg7ryGVLYEErUvVomaZuRbhtTPtQC28uRfjWzEfod2KkFLmB2ukWSEpPLVSvoVjp4vvMB4eNZvDtiSC6gcS",
  "key43": "KmxqmZdF4HBXHievooDkfUteE8coq3srX5GmffYr69uunqMVy5kN89KK6q9Txpip6srmKwiW7ZGCSNsi1yzYQsv",
  "key44": "3C7Uk53cAGEcRx7dNAi35hw7pDE5Ev9F8nR5E3SbuWkhDWWniyx9kCpEEVeGc7nwU1Lq1PPEN6fngRmddCWr5omy",
  "key45": "4TFKK3LNqNBiQvXwBVvNNWfCSfwBk7EmLWfC83K5UdmaQVEtiKm4uzfrw7AYYHzUWWcE67mqCV867VZVkAE5c9ca",
  "key46": "3Skhhf4cW3PYDkWM7N2bqZuMCGhBwr5bAeE9s6z5yivi4G4joLMkchxcwETc2dp38NsyWL7pm7FvYK4p7K6iARUA",
  "key47": "5x5GQHtEpGdRWga8SXQruQtYyrhzbE997QnVtFfVjs4sfkeDWWoyHhsQDuW7YKc5FrbPRLGPvkiZ4LFMoaJYhCMN",
  "key48": "3NmCDmH6ppvkfVx82u23FsMwyJD2SESZ6ByQUc23aFf2FTJ15rSK3LD66eMkzmMLgd77teDjHTywwZyL9YyGKgv4",
  "key49": "4CsUGygMQ5j3uf2ng9iVg69qjkaGyfRAMPcv1vJRawvt4T49P16EqhRFnbRrAohHk99N5VKNUKCQnuAvgobtWZmQ"
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
