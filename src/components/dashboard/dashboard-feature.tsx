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
    "3h5TKAPLPj5nHn9WGkUdNwVtPTTtuSq7B4HTgW6eTuRDyexmLv8MsC4YZh5AmTKkd3RgdN5jCoHT6fZ8vtxm8cLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcZcLnfuGihPLY8ns6XFSn1DsPH9NeVmZWPjXLiAeXeM4g3NcqLjFPmovRiVativReaWq8pf85RZ8haSGQMA5cj",
  "key1": "4PaBYuUQUBQ6xd3a5WBUe7j2DAmCHJ5JpN8wooxsKQhKP353x9vHQvSURWEAxczi83DoC9n3xK8Q7MkyyZ1iSV9D",
  "key2": "3LDZCLtyPG7bbTUhUoUV3U96sW7V2txXgQCE68BtpujDicJxcXyMQ4yTupbjKnkzuDph3pkDzx36dDUanX8fsmQh",
  "key3": "4YFeF63q6mM46Aka5E9Fjamd28xoy4ndAkY7qcJeKtjoF6jweiazTpTteVusaMJFva7aM9GUvkDbEWA55MXon7cJ",
  "key4": "5rPPSoB9Lxii83dEz6gYdy3cc4R88HXRkrS59XoVd5nJHcHJRVR1QFsNxrYyhKHxhWAMZ9DuL1N6Z9U4PKKmxhJk",
  "key5": "3uquNaS6qZSFJKshVg8BCcgxRDqo3dGCquzzV4MFoNV6mf5FmW1eVFxzNtQBisKeJRTzgTuX3MtECs9zLYdCmP7G",
  "key6": "26mhNHdDwFVQrjdmxS8WATrkBrVnjbFQGRKURaLg6uAphWZyS978RHDCwb1NcGfF68qo2irwXbzJRnjKfoasUnp4",
  "key7": "4HsGPXT4xreoFzPbZu1bedQxVBHqJEbVNhfjHi3iMQ7AdjaBV2qo4GBuTB4ZM1GE8diuFjHFBB4WWbpeXVk1HxJD",
  "key8": "2SjjQ62m61zsvHEzVi52HNrGHuHyf1wdkEzxaNZw2AApADb1Zj8BEXfgqQwKFoEvepedUYgWt3LNQHxXFXJKnuk9",
  "key9": "vqHFKphXPzUSocLDzj63KeBwYuMxEN7GgZBNrn4TXLyQAVFjpitgNkaCPhAi9wJYykS6wYDWsxex52kjTiyjRbo",
  "key10": "9r1MtnewrSSTzuznc6hU8jhTE4QzpNdRoLZb7aujmjnaPJZu9SyYeQHZLL1PYnyNchMQmrQjW4Y9xQ5Lb1qYz82",
  "key11": "2rvZ7ToMHzev6AMMN4thGd21tkd2tvX3dD4PoS8bL1tVBdCU8ZQCqiDA2o5cgt3BaMEkBt952cWpx8UGtApb5rJ4",
  "key12": "321RdccYuF57XyWvdbXJFvGyr6a1WMMtBQPhWGAzftNV2JnHRqFesskVzq2ucgjEChwzAhZ9fWFTeikfUYB7jkPg",
  "key13": "234njMK6oeTbDiAgefJtx4Ub3GP7m92mNc2KyF1DyHAwCRjyE8NfNs6AcEvtCQmWPNzLuSzofPXhDDxv8Zm1xQ6r",
  "key14": "4qgVgMaBJTuzUBj7ChJ9h4MYVR66mo6FN3A2KLnm6nDiNU5nZYurnFxd3MHte4VRxuR5D5coJTNf7i6ESntkApMW",
  "key15": "3arabF5djPHbtzWWrN2NecxkVu1TEJu2UzcAMQsMNFffWj4NDyBe2hjnUjB6vFgp9gGFKJQf3sAQuE4tB72Pg2cx",
  "key16": "5KWWpk7Uz5jiCFaLfa6skviFiXCmT9ZMbEX8cw97pqUVbnXc3w8TYDNVyUTLBomhkSfxRwmLaAGh5WEjhSdLRV7c",
  "key17": "3dVer2FQo4kjVMAKDn34GJisQ5tK8G5EvBEsyiyrJrCwduoHLbazWJSMveYw2UXvJenFDVn4eRr5UaB3KuUm1nAR",
  "key18": "4N9AZokz7mHoMU4rK7tL1ZaGZRhTq9wjyjG8quVBVw1BCobJJRK7Y4YnuBHz7CoyXxhinqWUa2iW85pAXihiLcp",
  "key19": "4QczXdgrSuPHZG7sgNuPTwCmSrrmYK78UPKZTxCP1uuwajwdpqmAVTT5LoR7bs7JkZpQZzZLaMntMQkXeYmLX68e",
  "key20": "61YLcvRgeXYFto5zD8DAzk151WMfh76nup99BwyqaEsXZL2Fw7EWASXgTDnqPgRNgzo7QPhmtcANZ9WWZANiL42g",
  "key21": "5kFNJtA61qMsfFbWF4UedQGcznsDZWfUXHjsNXStdfNF6jQc1KmPuz68KiY6FStTtG2tYaB22C6LhezUmyx62p3d",
  "key22": "3t3GsmGzTnaLJanoju7i9zYTysykNWmF3HzEm8pkLDpmcqJbiRQvqji8mE98kDxWVuyNNZXCCZZKUmyvgtZq279o",
  "key23": "2Rdqx8LYJhw4Emv3NrZ1Z9Lo19T2TrQfAtDhvDsNeYRfiuaMReZ3E9mqkAmKN95oNmGzvTvp2wwEYeatgicDKTDS",
  "key24": "4e3c6ToG3TYBSrY9DFeAeXc5WDurUvvBZjEG1h47H7YxbPJo5fLhf3NpxVutaRo2kjBhCLV6cR57bJZ316faXZjm",
  "key25": "5XtiKCBzLUb7tsgucvKKi8YXqmYmK5zTtA6CVe22MU54HG8E4a75gbL3sNeMTf6NkpMnmrgf2GtmDH5Ppx7PDCZ9",
  "key26": "4KvzZYpPHGYKuSW4kSweCEDnSCdPkGiJDWwt7VDggmEs5Vu171Qq4me1GsehyeBzcRjT8QXEvWgzAb67GywzrR5L",
  "key27": "3f6PEYdkrffsRg5jfyBXj23DzFsPVQPPc6XD8D1kUA8yyYGtz2Dr8ZuTWy6qb2AH7QraXBXULXpDvwa6hMWA6jPc",
  "key28": "MXASG2LyMNaAyCsChRhHF6271uHm6mKGVWLWPop59CGzLdiJXKgnw3tXEwyPutKdoLjCtFUZk1LbKf132oVdDWX",
  "key29": "52pc64r1FizkzWducyEXPJR6BQQetnpiTvWPhXN6kAWTp21WX3pm21TegdvijdJ66d3pnAscD5Yt3ayw72C32Nvn",
  "key30": "2PzTyGAkQu9djeK8mFzKLR4HGvh7gexGXrJLbLbjhU5N1w5sxxA39rHEAmYWoQQjjDFphHqtTtdLDNwUeZJaAKHd",
  "key31": "5Ysd76bKyeZUC2WB7dvH1jATfUmBjHjkJDaTcHvD5Tq1fxEkC4hAWzayf2BQ7RdRDpeQ5oqxYqEq2QXoaL9troHq",
  "key32": "3jQVJrcQCf7QSLUNKNoQYN3YWXJkReYHAHGYhE3SBiBPugqrGWZ5pgukJ9vDEs43GEDrWYFb2VYMb37MXVKAayJP",
  "key33": "5UyuM39G18etJNeXjraTncLRrz37VBKtNHoUs5wrYNxxPKVbhdYtyTq781UeqoGfcCDYWZrz2HUq44egLjmDrvfE",
  "key34": "4xhD8WUEt2SyXaA4EHWs22PUhvqbCoBsr3sRk8xtryX1w1hsNquNv3oqS7xwaetcSGNqGYgdtywxFnt29ckRYYYa",
  "key35": "2TNQv7JLY4ZTMy4g4VxLL4qtZcQqWovMYy7GWty37v4qQwmMeMjTSrAGREbxordjpYxRUXxSN1otNizipE1qwJgB",
  "key36": "3aLFCA1UWWeRtFheEzEvr3KBFoHxoQdpwMCfWH6meZsbYswVjmGTsYRZqhxyqugwkBjTKzFkbxDhsvPD8VMxu1Zk",
  "key37": "36kRiYvKUzFXfWzRZXqU1c9VoJGiHF2WHFAKaP31vqynPetxaJFgibeXYQZL5duSpL2CkEGtvW3JQaM8hZ4U4y9m",
  "key38": "2imD84hHMKx1aBRjqW9L8BHawaA8u1jda3gJr1fmhSWmdXMrmKuQ4AjXGQbNhVWosMXP8UY3uBRptFkGqME1Es9X",
  "key39": "5Hh8SRw5RkqEJMZE88BmjnXBtwZeRGhqwMNJwArGuxLLwkuECVNLqrFp68Zt3qf3YznZG4e92wYXunv5SLTZinEc",
  "key40": "2UfBugkR7K6WbVeE63zUvxDX89zT9Srk8qbHgmAWCdAxnLCwcwdnKwKKTw1HNyUMHSrAbVzGYocQd4qqik2Ukpq9",
  "key41": "4euMrQ8idtouY1usJM3HurQupN1f1PF9j8t2z8UviXS22d25UT1Q9fwz9wmhWtuxXod1KsyFMKNdVWfEq9vxZobf",
  "key42": "451c2G16QKK3RM8g6mFW1Z5SYmyMQewrFqVi3MQxatn4rsxN9EVooH4YWfSVAXfJjvbam8wBGStT7wSSWvhNqBHd",
  "key43": "4FpsWY4CcK16S6AyY7G2iA3wQpm2N5wsjgT5gw5nckFqJYSU8Fyri1MJQSC3cgvy1Y4fGEgBhGMV2HUGiBR6Xh1b",
  "key44": "3u4jWsLuj6zY34jhDie3RUAT6iNiBhiqsRJg6xRBtjg5zi8Ms8Q56r2632vvqwxKYbqrCnhjUKkdVH8iEHm1vi7j",
  "key45": "4HRgdSnL29XCHFKbQYomYLkDXT7cXjKmCnmkKPs3o1XVahMVgQLEMgGm7oHehXHtMYv9yqQspWMViScFJUKHkUao",
  "key46": "64tTAJqGEKnZrWD5z7Zfn751k1sieM8vH3uVZT8Unq7CXMadF7hVn1fk8eDEDYPaf3YEMDdobbk8gbvY6vkRnUq",
  "key47": "3jCGzaS4pjyaG61V22EjrfeSPTNXYxF3LDNow4LBSTi6LkKNxN2GxNPWYFHwJxj1HNZHDN6tTeD52o4BUAHSxCkC"
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
