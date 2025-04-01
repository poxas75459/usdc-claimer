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
    "2j8wTv2DvvJpjM7jyuqWiLt5gEa88u8a71YpeXweiFs5hprV5qqZNp6BA6J93CZ1GdC7bssUEHbpNdzzk7pYL8CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncbq1DaR6i5YQnVKYnywfJ5sZtMSTqvPjhmrbov5bnH5586ocweu8dqi9Cf3MSMpbBrETxibyLZP1asjFxXkuDZ",
  "key1": "4VikazkhHeZRgQ5WYx44nxcqL8xDo9SowZXNeWncV1cpkwhisHzj3udKVB2gtXGHcCED5m8GrGfB1oiZpr58bbjM",
  "key2": "5U6W2XDW8bkxGkdB56VPLgVvJLGZT9u8vPtigne3oWuY3JrW9eQNvsnFjUxGU9kLK8NtNffvz141PAHW2gSJYwLY",
  "key3": "4dUAS6XuVdCuQXAPYQxo6hzghcfovJEZWKLzB8SKSWgZebrMi7KvHdbSnTBnmyXwkL5qDigqQcnCm98QyeaArSNk",
  "key4": "5EBNf3cnw3YnBEZxpSbiZnomW9Lo3HktFzpSwdf9bJyU2PA1BbxGDE8escWMY73S1cXQXysDzWAux1yfbBcF1suk",
  "key5": "2p9SXWbrcMmfn4jfkHgiCus93WZJeaHtZuRA2mNeohRQmv62nqBkBN2CJr5FUBABFEkK3uVJXhZCERAkPZg7jpMW",
  "key6": "3tZRcEuDvzv8G5MKArTKp7d95sUEgeCwE9qqdw7vVWkqaxbcLEdBzYgMVzg1Kp2sWcfZXuoGJ22X9DmdP5DWsSzm",
  "key7": "3UmN7LcoNbZugGTnRUVfQuFxEV1bbd2ifPGqTsw2GSKrbzHd3Y85vfJVk7YdnZGnf1WrwCdwfE6wjk6RciZLDbk6",
  "key8": "4ePTUAgay2GXc6QXAioNZoG1qiHsvQ2rSahNNZBKmTBQzE48MH9dEWcybaoD2R9z5ZnCt6U8Kq43Pag2x3iKJ91Y",
  "key9": "VzmQzJ8MH8HBckqLkeuATdvbit3DNtKGjkscfRHdteoiXtRMwZrJ9XDkvznTPu6hd7pBSqhYG7Sxc294kNjNv1T",
  "key10": "5wD9x7RkNuvc34aBRsAWpRTax5E4T2b4BdXerzvBPePs6Y98REjoe9QWDm32TgDHtHNzQAfdZwtsRtrRNA9M9Zu6",
  "key11": "5xuyaaWotsUrUXVMAqHPq6f1gmufTkzfcv7H3s93ApGLig9iGNuGW8NPwDsPoyuDqLgNo2c5aD8x1viqLr63oyKn",
  "key12": "3USGwhHdfJdWAB1aRy5ZuVzGkrhNxF3rQTh3iwHhs8QaTPVtDzXLHnsBEkU5BGGWbmaCfJPNCP9H3QLJvhEFxnPw",
  "key13": "3GpHZ9GHnNynqiAarcMQhiuU6y9tLpkNCzFQVDSdtFFSmx3TCnyptpA4ZynCce62SyNjGTaW3KXMJajLrCWHirJE",
  "key14": "5iqhj1Ett5yTVdMPk4oNWvuRpSLojWcPC1htYkhHao9F9UvknEg649RossAs4bjNMy5vcSbciVKm7RDevWb4tuau",
  "key15": "5W2JTEsMZGmmog9rptnFSjzGhb3uPVtCApFC9YDtbuVpZBsXEJrKX8s9jeXCzKXfSxAbnqVXNS1SiSJwTisCDnhe",
  "key16": "514hDrMC2F6DaVhU6wHzq1h1Q2jMkRFLFcaWoKQSTkU1gnYwsuwfy6Nn8C3psQiqvPyJWqKniu2V2WcFHtyM617J",
  "key17": "imnvNNsMhUPKVXVeyZ9rTfG4WBu6MGVQhmBfsPe4u6rdW2uwXuFabnqgmUWvxPoPsSzoLR5CYG1bDPZQWFHBrLG",
  "key18": "48Gs1dzUnKWezELB9ddQX7LfJy643aXaZvVjEF8BS49yNTn9jtSbP5BXozgadhU2BJEwHwtmg1VPooShqPiiG5pi",
  "key19": "2jC7NnoYC9AhDRRUzZDVdNMW2djz4F9fbQ25hSCoZWhmevH3hBTTsALzQjKYpbvSYRywJSPCjJge18iEut79CtGU",
  "key20": "2zBKp8BYNdnNke83nchNdv4wSNxXoNU6WUH3egUnZ7vjC4Jk4ESa6NSGCoLDi33jGnt11eU6eDibPBcjq26zRLtB",
  "key21": "5jx1Sq7abfJJL7cPfDDHxzL9XY8hWLcbXorPUVUMyB7yK1xiUGTPqPkWEW7qw8qievasmSDbfzrt7XFmaSd7vu5V",
  "key22": "5tApDjJQBbbtAxhJcraTcczaNjV3yobkG4kdJjzj52Q31sJbQdpriAK8SG6NUsYvXQn5DqZ6qMxS5qM2JKVGCRmZ",
  "key23": "2HP8cN4Er4xBUN7P1u4TVXrVZXkKcHs82Zkr29GWtuFd4ZDcJ7jUWiUyLYWwHiYLHB2PtCjd3zNNqoXMvXH54JV8",
  "key24": "3uXvBPqVNtjweQKnkJSRGtyYimfCwxFyFjYkA64uW3PF4v6BNMpSU5UoRBxArFrF8qXYn12cKeKqd44F53HoBJcd",
  "key25": "2bqs7dJehsxiC9hxHiivjHCvs2boa8LLDvhEnVXkFf9D3v5ztmUHPQByM6HYodjPB9YEAfHJDsds78d6Qah1swP3",
  "key26": "2wh34iPmU9e7UBDS5k3iNJn5H6YpdUJmax2ew8kaV7ACYQrDjBCkBNUsfe32pvoCJmUDcPdsd9g6sS1kvA4SwiqP",
  "key27": "4c6jWwsKEzY4eKRxxrHYrULNHNFnKiN6VDbiSoPzLjdpJQ3c2pSAR8eh4SYh73RMcM7HWCmbLxzqDuTizqGLDaTy",
  "key28": "QSN2E1Jkx5ofmEgrF5TrwnpQSgnCWHigjMPQPhUqY46oU9Y1KeZLvhxJ3AFt4trZugzgH6Kgu9VegJhbzVo4AwK",
  "key29": "59JyiQWhwo5w9You3ndxzgoarfu7aKWskAwVirbaeK1MMQJJSjHyXPppJptoFRKw4z6yiXbc1FNirwkCoFvVuVik",
  "key30": "5UbiD92JwM9TtmSVyjgD7Gqqyon6dCKJQsWE452pbAXNoyKdNEPtmTyntZcdkwoFPW8RNs1R11UvzevV4fWuRUGp",
  "key31": "65v1sAmvYpVkeUVAkUBvKuHPq6Tt1tcaAnZCdwomQyd3mowMyT33t3u1M1xgGgXVjbjoQo9QihRUhFGorcimknvp",
  "key32": "4febPAbKeTBXVdN9ZZsQoLSMaaDKoN2Hb3ZSQ7qQWvTSq3yAKyrLxBC8CzEMW2Hv4jpH84Hex5vh1PAdv3t413t4",
  "key33": "vgUgxYosbmjtVvaedkswT4Qir1XQaryGSGFCZ5LbEcneQbBSrJvA9p4v3ihwMnNJsceWxeKsunjFrBXhnVAouXL",
  "key34": "5TNh6GRf7471DXBw9eMQ8PGL5Sf1pjHc26tpvUPHdicNLjXuBT26VUCWimX4JQW1AV6LsU7Zh8PtWbKz94oVG11i",
  "key35": "395UiF61JDR3VaY3gnjm9PBix3t68Qo466FGHtKSNJanEnUmPNuDGkcsmmyPYAYs5kM1cUwvsPMwZt1SzbaFjphy",
  "key36": "1wKX8NDhUBxa6n2QKN5CJEFK7Uzub5cneZo3ogWww5UYkeEXC3pspL5NLUT15RWo4nBKpcLJNhmp6BWNZJTSWjL",
  "key37": "k5LGQG1LbLbAAmF2AmbtQsj5u39hKhPGFQGWhknUHZe8qfNeVASo1UxGsY1aHoB7ZgMNhBSWYwcfLKdCqWtrBnF",
  "key38": "3WfnAfGecxF7eEAfSFTUVXnveCDevvzSvz6VTPcUWsKgFsSeDroWHDnneT356HBaifxnDQLv6cBxDBVyMf9pJV9E",
  "key39": "Be5SzCNyAPEKwpCE3BksWC3vsBdtxPNEK1w5Gw6vxQu2XaWFBKHRsDrv33ZRXoQRfFnEaKQeTakyuaE9QoRvGjc",
  "key40": "55XoL4aJNm1e4sLoiVY7DmNxxUsbqUsvcdKASdqFs813CJCrPwMu9DYqhnehG34LvX1AheCRwfKZC17CNqaVz5hX",
  "key41": "37KGsee1zr47xvBVgXu17eyk9xfrFWnx3AzAJBHRR6HgnBoyYN7RRnYfBPEamp8ayW6ofH81ANMJ3sNFTo8scVQ",
  "key42": "GudPTGqYHz3W5Re8wjGMh2Evdov542ZiMRaLb8rDPt2DyMAgEA6hAwTRhT8yGCV5S4aLTshciS9NmK3PQfFXrpV"
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
