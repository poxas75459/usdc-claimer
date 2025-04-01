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
    "C87oMGmLYVz2u5RbmjFQVgbom3GaRZGvk4auuFVwqpX5CGcFYmZD54ehC678KysLNVjoDg9HZkyYaarJiQvX8vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLLiZZiMtiyM88apV7LPeoZsY4Rwtex21QfydRZGveRVZ9evPt81EJBEdd1axvMnGksaVC8uFBYTVBxzdLJGqW9",
  "key1": "5qZ4uNoDRcnZhu5MVakLbtX6o3y47sd4bHG6PjEDiChpob3fzT3u7JpYFPJe8Jt4hXDqYh882E4JKV9pyGaoMkJY",
  "key2": "5RcB59R4RRiwGP5eupKWBgm56bDPoJjVZQoZscpBhq4N8s8RYWXto6tEY9FUqj3aXLNmWGB6zj3nGx1PD1aeguND",
  "key3": "AwoGzGZptuvn1vZDB4hsP7mDBRCfFmSSCTxdT1yyh1XHHMiPVgUWQGHpUmR3PzJiuasDqoixHmBjpyKxRnfofUh",
  "key4": "4BsRu3tgHyJX8qXLihcrAPjG7Kqc5n7f6BAv5JfsDW4hptyqt3cQUQBoPK7zfkLwf9mr3a8bVZkHdXhYJ3ArCgJx",
  "key5": "iNpALtDsNy3j9P5Go3GL9BTuE4fW6mstuUeM3GrHcx6TPT1zAAG7pkbyDTUgskABvSPAo6fL85hUQd4DnroN9Zu",
  "key6": "crhboW3bj4SrpsYhQDyzRehQJm6Sb7dcCbyqMHkBTbu9Q41gi77TcvUu3KmMfqn4y7UCut3DDLra3LuZL14fN34",
  "key7": "3RinoF4EAozwLZzWgL2B71d1KYNEMTQcrocVbbYpB13dRzVxc21tmoKjUPrNHDKNnAkG2HD1LY49m5dCP2ggUQG1",
  "key8": "4A1fM3VR2xS5xhKfpVqZZ3SmconUbbTrtzBrWJ5qs8iTGpdyedb5vLizPZ7XzohtHRbRHpPTQGbp8SBNebqr9Y6y",
  "key9": "3AgshNXh4U2kwFJPMwNv51wmvgyWoe8C2KmJf32oShzfWHmJviaGw7DEGDoWveRc3CtFrTiR6kNjMbk3f5q2K3NJ",
  "key10": "B5Bcxs4DPxKLxd4zmawFYZxKNNYo6qHfFtorDtsTgoic5R6wyWuTnBzpzXAKwT2dYh4sSWKKGptnaT1YcjfDaxc",
  "key11": "SSxpbhUgpEz9D1F2wVFwxD6nNU7ekWJjShZHSUwtoVhnaecjVjUN7XoDGghjtHh4RUuUaphkX8WiQrztdfyp47E",
  "key12": "4mvTHzikqb1W1PSuabdVMdbzmoNJQZeiNMAXtZBkvgJwCQV4do4z9YFxsCWNSCseRJMPUnxVEWubdY9QgU6iYmw3",
  "key13": "Xyd4P5ATK5259zvwbFSg3stDWqycHhcZi8PXTZynBRKMv2Tp7PLzcqdzxb2cE1gKL6MzTRRMqiJbNgbVH3j9ooY",
  "key14": "5T2fTTvkewzMGmZrApngdxv4XMy5aGvHZhPumyQGdHUbz1VdjrHcA3S5ZP71ipH9hHBf9XTSBDZ6Cw5MGevZrFYH",
  "key15": "2KRb2PaVDvXzEHuBFa4XYXxEK2QQhr2dfYfteEWtx7PzVkmcDojNQED9r8P1dETqzfm8uwAEpo5zjh8cD55xVU7x",
  "key16": "3dHLkVbW8JKJktzFnxRWb9V3mtVC2zLGWccHSJuSq8oPVniXBmpbAhXMufyWdTiAAJn2wSKNdKkgBnkAZ2H4AdBJ",
  "key17": "66mLeHFsSqeE42Udp1xe7yVBsw1bht4Mqyrpmit8Xm6i1sEwBy95rxLaAGMgEpBKZX1qbZYR5UEFXxQwm59CY1df",
  "key18": "5WE4kQzxSXRHRbjgkBMdNa1QWEVu4gibjkM1dDrSrZcyaC1eLomSxN6XQa7SkQd4yhcHTDrxZtAjCCqMRjRmbDxY",
  "key19": "3uGyGtLYsinZ8WwXcJR1rbLV614ykKTa6zLkwRURBQBDjiX2u26DcNPdof3TMHPPsPNmu8Q8xifHNuq6iEBnu96r",
  "key20": "3VcNxeCoUvEBCLf2ThT8F7Ch5r4fEA2tRozgYjuJBfdWQ2N8MGF2qwJnAjGUMWZGUg4fEvwjcnbVPBTDaZgzFZjk",
  "key21": "5RKQ4vokDTCZV2cVZT1uvCLp7DnB3F1CCNY7LwY3A1U6uqmNyGZ9f7f4kpgACHsLyGyN2NEhJWpsQ697mdWndhSg",
  "key22": "3hFFG3LwxJV6tyTAsewVRApmcATN45BQb86Bi9mEZHWupakYppYRTcvQudZMtVG7Wu1uDEkLArBMuvr9XDyxWJ66",
  "key23": "5WFZfNsRWv6Cp17LK11GqYB26TcjfW7ZYeiuhVnEjor7zhai6PoUAyBm63FSGBbFanMgKm1NoW48RcJGYHWc3wea",
  "key24": "3cBdC1t2tUqdhRB3acXtAxUjNKuZS53ZZapJz6qz7VuJhjQxqjm2eVzo7zovzCFQgp1bvgex4yYg3z9L8Go1n877",
  "key25": "4WchQ9tad11gMrJXPe8VapiE4895D6y8KhUbMZhY7fht2bzPGj94L8iauRqSYSeRe6PNY3yAfUbUiztPiZYfSDp7",
  "key26": "2nKoc1uwcMDDD69EtwQL43DSXX14TqWDFby4BPaFZaa8J533XZL7ERvBvjHaF2Ah7kBkLKvK6mqBPGswtYq2ZGrN",
  "key27": "52Dj94dwbW1227ceXeRghcWnrsnCzZG9CDcapTGBx3WJ86tRBSX8tHVbuZVy9EEkzLzH5ERJQTymgAaL4HcmskBz",
  "key28": "24PPJWbASA4bxG8J5pWUcrxZaFP6JWMCcXMdpchJ2pxc5Z2LEwV2rcEFrvVBSfMBX3yM3kc8nvzRheBQeZ5aPgvo",
  "key29": "5QNWZN3ra9QTwRfHgvS7FmMxSKoR6q3ZSoEMGnuG4MPNuosQcupbhwT6YNXHPTJn3CgcTpKgS1DFtjsj49D3Hb7A",
  "key30": "4YZsTYv9GXDAZNqM9Ve5T4KK4W2fPVxWTrFu8jt6qTJZYwc7dPk4P2jeTxFyZu3HtKTqHS8Sn55EJjSeDXwXhdLi",
  "key31": "29pxd6bpJenUkEJxSpsfNJoVQguoFVH41UDFhVPgmMBwFEHTWRMyTgKiuNjgnwg9LJLej2XkPtWH8zQ9FSfddy8K"
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
