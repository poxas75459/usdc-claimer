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
    "21qmdB9XzXUxY8AZNi2Xn6PYHN1ZAxthhh6nouxELmFNtLNPYC8Kbgcvh77xg4pivYpxTyQkLNXs7GhCgqjCsk4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4915vvDfdGBZoY8aQdiWQxHE8iLwDsPtVVQ5hsqLR8haUh6iKG5Vo9kHTwU9Vs2CNRDH5TRXxhdjCV6PEvBJcitv",
  "key1": "LkENkcBULTWEHv8dXSx1i4uYSiuwG4ajMH1aka55jhUUFDq4CgFzkAqDicNdYY8Jr3egf243NbMa5wbtep41jbC",
  "key2": "2emvL3v6UH5YNrc7QRygRnGepbq9nRcuTohetfHY5dBNM55oR6hfpw3aDj46E5ZFhocCdozFozcbDmuWstH7WriS",
  "key3": "5dZ7scNF7PBWjZWJ8xkBeQMFjS5DbQ8nSwZCd9wJcnnUTyjXYwNe54xLNCfj3dzPCY73Aeh9Za9GWY1tew3xqpjE",
  "key4": "VGnrvThAHXiitGgvKJfZet5MrioJBQqNQmJ6hrMwKvqqLfoCJebRF5LKZ9YqD1FbyzzcXC33F4XyarMfERuFgrH",
  "key5": "37qxC9nffVvDJPKvWrSKDmvEfU6budhKhqtVJAdMvGTA9n775Go4NGsmLRTFQ6nMvukKTJLnbMvUUGyGHWCfV6yw",
  "key6": "3gcuWwr4riYxVAsR9tpPkcQfbS3Tundc4EnuxMf25cUrxZ5ZPagFW6Gr9buS6mminRNZrVY1fPZUJD7YdVTVQ1td",
  "key7": "2AUrdDYJFa16CHRHYcrRfF6LSqZ6S3irdyjeBUen4vZKxvq6xb4WagR1D9G7zbcnfb3bbJuUSJY67it9sFZeXnLc",
  "key8": "2nww72n59wMvPVir8wv1nx1jUeZJwFu8Wv6ZiFR9K3F84uZ6aJG7NCriNXBK7k7VCDpS1NHRK5oA9hGCkwzE8kxp",
  "key9": "2QRBBup4fK7cyxStnVcKPfQwb2DnyTiEtswGVd7gw3NHdDx9cyBEjWwq2AxqpGomw2RNGHyvLyDjQgsbsLNQTE2A",
  "key10": "3v98QWnunhmf9HqaAi7izQSest3cyrXVMJTYfRH9FBtX4SuZQcAyj7KSTuG2gSGmTgJLrBHYdyiBbvUxNrdZExvJ",
  "key11": "34DLUr15XX9PJFfH9AiKobikCgBiTi4RZ2MtF8Uf2RKQ6yrEbwtiFYJZoxai5b2xGMHLHd8wvoXX1HLF8JRMZnYe",
  "key12": "4Yg1573dUh3bvAkFsbUTqG3ZVn8dYQFre1innp9NQ4S7Xv5arzgCWiXFRA86susquL31CmrF4VfD8ECHEMr1GEFH",
  "key13": "e4iunzBtDoUVAR73XpbquWPXNkvnSyYRJHKVadN7myTmjdZRCsHBGXcjMtUoQJWc49xnPATre3DPYN67yrmNWVf",
  "key14": "2jvZfqbpuuRtRyWjnWzf8HDuUa9JJXKZWLZQqpHnrPWy8sjNmhkDj4HZo9MS6UgFTkiN1Swvpz5f9f63voCdZUc3",
  "key15": "4yEU7wEwyGYyNthcFFt7rRCvsdb8zMzr2gpRdKTJvvuoB4Ltqu3y8P7L2ho59b5Npss5JF8csBTta2o5S7zvETH",
  "key16": "2WxW1uA5etzimLj3gZbZZRRmKDi1wuckprPj6mMMJhS3Q3yhGzcy5sNMR6sTVbnkunbpSjroPkLL652z97Dhmdky",
  "key17": "2BK3RKezKS6kaxjJSW5nbA6zwvDxU4Rzvt7h6CSWXagWX7JDRe69be7oCYiDXxzotjk9JMe7amhszj5Edy1RYd8i",
  "key18": "zYkgF4sGT7ew2CnYYWPMrpWhpzfpTgk35ExyKB96xEpcM5V2d7fFvrwhJszvHZYDiqfdqSssUXBY1aCRmEWg8J2",
  "key19": "61AP7JAG4FYEQqEUx3wYEgj9U4dF9hPTbifrDofWEWnoqH3NMUAyu75kUFYakhEisNuyVVpSqA9WFX4niMWwNVUU",
  "key20": "537rTC2MPAB7sPbJo2VKTjZ63FAZDBBCctL8nwAUyT5nLk4mDAKvAF6XqjDEPwMJTM74f28QBUMgrJxwDeZFjXTy",
  "key21": "3ihJZFEX1V8SJjMfYgDzk3FNF8k8A3GWhXgqTJ7GreqTKkZTXjurztfrR9Hpi8jLTgzwueWLzPK5BRGjWPhCQTft",
  "key22": "2a6i9YkNDMURR9V4W3jtjEdU6Rv4h8YMLrCUnVfYSjwzvECoxRRr6ys25GHSLvTusSX1dCD9YThk8W7J5NBQ5Tqh",
  "key23": "5JEALfkB57mgVnxSuiMB1WiRWbuEE55CsEYGtTnBxpQVytC4JhgHZDm61iKMp5ZnQtCWMzGefyiW6udedfb3jyyH",
  "key24": "LzWXmKYTqh8YQZ7U4AandmQXYkJt11Wndx1rbkkNGvdR4DdhgnjepvNcEtWgEnZa6PxpxCs8ociFLNG4xvfc231",
  "key25": "2KZbxWYZ9yAZ4p53J8EL5qTHAjZNGHtc1f4chCD7HUdZSZA3pzT82CFkN6YLMNREp3yNXrHBjxr7Tn7iwsbKV3xC",
  "key26": "5FurzssKqKSzSuxELmeJtjPiydeqTwZbU6yfFK9CzTTtStH5azSeUj2VEWhk6vzsXsmbk49X85zVQ7H6r267rpcs",
  "key27": "59H3v7ok51YQKFwBL2daLXmig7UD9yKmmgnrx1C9nJGTNLKjHimykVGzUjNdnRXZro7Ep8tpgGyUmNdDqhdBpoM1",
  "key28": "2MzXio56yxS5x19siUVg4kFf4cyNXjVL4e69pKGg9zGejMySUUrNCgnXrRZGEcYcikGJkiREMBS79Egum31MLLXx",
  "key29": "5QLpTncHHP8EiA1BnRtcRfgAKww7uNrzV9po4TahM3SKEBC2VqAxGZu3GrazMiQ4gc1yHzxzQEXXjwGoiUc2o7yw",
  "key30": "2paM1BdTPr8cAN1pB3j6iigUf9zAsgsQayKmK67Ds1mkvb4hiNoxLNUEtRdM2UvYyJok7kWd7a1sHzQSuKDC1s2d",
  "key31": "3AfgpNUcWM6r5XhyBB5neZcrcemhNckFU9E8aQz8f7h9StrLPEPq3s2YbXhSUVvQk73ynDj4dk29Yaf3E5e86XSp",
  "key32": "uNmC1MVNLGVmCqHovd3CfbJvkhCjMX1tgNPrV6FmVTDKxBfQix9Dimq53fQctaSBZiH3gdm3ogJJBzH6tWwbego",
  "key33": "5tzX51ZJ77uURyUKmSmT8zjLAEEXyeibuaphEPeY4zzAuZHE96xMvJAWESTpW5RqyTX3pvgpjQ3ZxgLCifZoWK1U",
  "key34": "2iQWWDX6K84R6uRz1YQQfpbSLj7G35mm3qCHTnFu7bMtuvuTwVsSCoymLFqT6bX9SsekzJQhrS8X69TpHibuqiFr",
  "key35": "27bY2bscrejmwUNaapRw1xCjTpV5NuEMVoo4vZAdUE3s3XAH2AE9VeD2yaDswqVftKnPuhpMkXb56B4p6vzQMCwx",
  "key36": "3BieW8g6XPo6F8j9TcRoMLc61MpXbNhVfd1GZPArUfF1DDXm3JG8HJVpFjpCkQY7nwzfe13N3JNMQ4D6ZU7TGHr",
  "key37": "WELxtutXBovQYshgw6PDLfgLVgUMKVe2enuopcVPwCCfTYcQB21xi2U67iMmdAPwrycRVUNNS4AqJ8mCDK9niBZ",
  "key38": "2h5LUAt8DU3dU7MHysDCzGYJHNLysT53RUSEdVSwVCbRTtHGhiC1z9cotiXwAYeM9AmWHyjsEbsdZSxo2qmTnLn1",
  "key39": "4gFyz1QsoY7ztVDj2BYFyDAsWFHwioLZpfqbjdryPsvMCJEZiyYjCdQuR5Gw8KdUm6hgpnEZvhDYtP7KPsF81FbD",
  "key40": "2WFnD8TdwShXSuBYS8TB9AzPgbqMt7BWCenTipNTWaKV6KxQVsAMuCpnjUtE5zaYssQMTRe8xHhVCef3zEDjhVbt",
  "key41": "3Tx7EURvVS24hvT41qay7RKgCw8G3V8zgE2wYCCb1MRPTFcE38h8Qs8qnMKpSyuFfQNtuuRQacEvSkc7ut8J5onP",
  "key42": "4qkejA2ZA2vGhzDRqtW8bfhkx21BFrDb4xmvprLW42AVyLBrx7PikZQk6EWSweV4xadcneaDzPqWQ2phEDQ5bgLY",
  "key43": "2fRfd45mX1nSDEybqWSbDJQ7hkBFmYdiNR7oKFb4LtcXZFPXttv7RQia67wPztHdvtmGhvXuiPTE47ieuwDvRmqq",
  "key44": "2yQsNFeajphVH4mGr7SgXLRujpJgWhHompckJGGGuG5Hpkd344TqyTRynD4GorZPAYo2vDxjSzSYnYNAi77KLdRG",
  "key45": "32ZDW6Q7i9hucWb7jYzAHxhi9u9ut8wm5jKfjqmfcQgFAiEs3oh4M9ebMe7AGRU4mfysTNHXieTyt6wCXFhWbAHD",
  "key46": "4VgN7Y76e1Y7UkT2gBy5MYAwDJ2kWEsLXY3pkYmGH6mepSxwWBrAozEWDKEQHHceg3cQiPhred2UjNP9hcNNKSKe",
  "key47": "4ShrskddVbq7uSqRoaLzMKuV9r1NDQzKNxCVF4XDjfPge9GVtn7jcE9RZ83U126LnxXmV9BGkNvgGqU1Hbh1iffu",
  "key48": "scDeetDJWop9Y9VQaeuYoWLvNUegntbghCjWENSpEFTQDSKcAiEtL3eJx1GJ5eXtJYn3gFt5js4Aog68VYpLVSB"
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
