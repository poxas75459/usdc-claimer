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
    "36CmpV5yoJpxgYFbFiqcu2xqkkhkuww8nzB79U7sdKCHQK7A7B3gqBE3AW2ayn1dSUWmVRCfmtTKDiMY5ZdijaGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UTYft77pvvSisd12K9Ju1jUvNkvSJXpouDcFPv8NMCmtR431izVN1t35K1z1QMCv8JtkU7t9tKDuMxLcaEfTWE",
  "key1": "3ndq8wwFoWPGJBopW8TNa4FX6574HUh1KA8rHcPwmNu9xEvBENRQ2GcveGyuDKM8dbvkbEBSJAYQwaPH4nfxyykp",
  "key2": "ykP4zFFVNPm78jU8HGg58qJPKEmxEJ8KgQfG3SFqt11jVyi1ahQDX73wiFjwxFg3KojCDSjLQJp6BfuogCG62mc",
  "key3": "DgXQMKkBeSDiaxxkEUupgd9uQcdWoPNGN7HetRLtRtEr17c6BqVRCDDmNXTuSskisJ3ZmsJwNa2gjFkq3QLFWGb",
  "key4": "57dFkUNUapZ2KAak5ZLTNXy5Qhx9Ka9wv4BDk6CGMSeyQxMpNHegPYmmwdXgNGHE8aVQui88KeQHEbpTg2TCTmGz",
  "key5": "645RUYQ1pjJcmL9gsoecYD3UF8ZkH8bKTXHGfz9EFeBXt4gA5gXoDBzQfrRrdBcBpMgyXNCPw2oSLYau8okiPNiA",
  "key6": "2w9xekpWqPgdcorJZp5jXNYCPwooJxdoRX7N8WurZtNbttzKTrnNTJB7haQeUC5S8w1Z8pGgTit8YLSxMN95JXt3",
  "key7": "5ZwTWSM65D6eWfSRGBTefQEC5i87o8ryBAAymgwCpaftqJkTymvaWRcLhBAQVpenbrYe7JLu1dn1UJuT9S3fQa2H",
  "key8": "4NmTjcyzEzsKynpbYNhuQdr61wrADgqHJCLcbGwQfEcmDSs8CyZA9p4Kt54f3P7JoLfesBMUaobSL58vnqap87Ns",
  "key9": "74rHSYmHa7uXpZUMhnjkxsNJmCDjxfn4D6jZfWbAq2yZXe1gMSLxnyjrUok4jkUA4UmBfpXKBd9EB1PgeYbjNRq",
  "key10": "21ivoZ5CCFVieLZUwJrFkk1DsC5wAgttyRdapudp1wrDuSes7aFsJPsdxLJ18xhFeuE4U6fAqv4HfVsW6b8EhnKZ",
  "key11": "YB9uqcaMv4kBD9fPbEc8SNwL3ZyrLyC7eS8Y2X1JER6rohbaQmeW6FmVMDSoZCGjm1CJGQur2L3P78aSdCLQ92i",
  "key12": "5r7btSVXJfhbrBZ5tuPNCb7FPD3R2PW1N9Uby6QZe8Q3qHFKQfdteuAAdZL2FtFYwjEMuSijcSkwfqmJ5cPjtq39",
  "key13": "3brwjZaDoAFtcLY5TSERf4NXzZqhBp7iVFpD57FuKRQuA1gPcbGVcqrrzhDZzaJ83f3QoSzUSjCpVJJ9uzKyEkbm",
  "key14": "2yZ3C2RjL8bLnwtjMo12XvERiUyujyuPFVC7ptjaAj2AJFnFGri497Jcxrgj1eiMGxzEydrEn1qJhPiPUP5oLXM8",
  "key15": "5TV6wu6aBS4QJwAcaEHWPnGoCrpA4rQXzPpPtTtrhVcda2jiSMs7VZD9qBDvNBzS5fGCqpr16ET2oeSLtaFBUBrX",
  "key16": "5iQEHrL5KHVquk5NzkTS9EU7MmcATtqKUCuZxHEzfxZidr4iNz3xHsADrF2K5FvDr6iEm39CnsgRDu1izP2po1ab",
  "key17": "2LsjPQPC6cAQHXryFfFfBz7KvV9TAioKm3xQB2dDTFxAkV2zbK3yv86pJCCRF73GiQqsDHsP9EqJtbXKditEeD18",
  "key18": "5KDc56ZmhHs5GRp8zACm2EWg4oUbtbddtrUsCKJhDaMUm8HjU1NUJfXvsXhmqs7oeXtDeVsR2CY3U1GVHAWYcFYn",
  "key19": "4FoM8VjHAEVvS5Vv7sCfene1JLoHA7qcSZTKexn2kXRxvGWZWK86xEYkRoctMdCwtRGi8jis8r5teSqR2uvGpasW",
  "key20": "c7n1SixuXhRTRaYNP52GFREMZyedmkLhq7pz4o3dKikJ6GjxkMm7g5nSSxHi78mx9hT11GpbHhQSkgKEZUqagFQ",
  "key21": "2pRGKm3Cai1DPpFvKTmqwFtfZrNriHU4wcRSZicK4cUMstQAHiCQWrjYZLxyCyt4VTCKxt1sBFcvVmc39D3cpryU",
  "key22": "5rJWxhndGj86MJFjpP4GRH5tZQtHH8H22ghckg9QQNCHsQ8HS64YiShwmhmTEU15Fd1zx7mQeBmmcPUBFUnkHwq1",
  "key23": "3cNpWBo4vkLribhVyXJVqFvCpRPDTiHCcD9DtBMHqMpbebfZpTddQhgXGzXcBE4pu2paavpjWA1TuEfz783ttqjf",
  "key24": "4azKPt5q4uD3KQJUjsEhwUNtN7PXKkGGqNouWpcJKz8YxetMejraV5qHPbf1R2oqdr7iDwhLF2Xg4xpCouhS5bbc",
  "key25": "vxL3Exs6iBUTQp2amwJtP9fnSoEhXhqvi5mF8vSRHErkL9ZB9vaoXUjyxoTNYVDvd6XVdWFTQrQCVwXZBBTJfeQ",
  "key26": "ndsWxh5nhF8dxRjiAMfg5zmrZvfbctezfS8memDnfDpteJDf8JkTErPUukx6pYoetjQodrAg8kuz9Ge5gLy7VUM",
  "key27": "3EcYQ8rofwc2m9uDsRtYv7bRjWG6x2ZS9Wjf3JR4o3hetsekCEBwJ1aiWLmgRCi458Kkz9vtbdcA3XZXbTo78zU7",
  "key28": "2KNk4uLgvBFsieU4xnsrP19Tq4UTrdo5ZLACGW1TudfHQEexG8Z3DejU5u1yaUAjF6vY1fJ6DigWt5CPMKiv81MJ",
  "key29": "32Vn7Yked1XB8DVcAVq4t7Vgij9RrvX7ybrfH2m4icEbH63GqoFRLeqrbhBgjQAxsQK9NaPv2rcg45xWkkMhVPMp",
  "key30": "4jRYinP1AsaodEvv3gYXBWiuQmQVuLtVr6A5aJkAtUuY9SFXevzAS2LBrPpLqhkst5JGvgL1MpVF2Dd598DtrZmH",
  "key31": "4oP1HpSVKE2dL2BTUSBzRByrzFM2bj97frS6iY1u1AsuqW7MJt2Knr2KQFE3cUEbkE9Qoj6uFo6qra86Pk6sQVhJ",
  "key32": "zd69s8sPdZXJSmxmCDegX1PK9wsKcDBmtrnPtJUb34LbFgJf8HLU2ovCX3BKuAaW8szTLfaCP9Tyy9W6ncScqpD",
  "key33": "2svnC6VfPaqq2sJyZ8fE2aAmrRGPXWuZj4assAHwUEn3YPYxoasJ2Nh2erW7YAMgnFWgPWvbFjVNLjdGvVBNbf4U",
  "key34": "5QsWNE6hK2usQskon4vqnDWJk3owWLZVeqBSLoiL3YRzWL8QBQpaNqjcstediQyLXGohek4QBzF9VqGDoqWWjgFp",
  "key35": "3qtD6dfEoYjHTyK9rLhcQuTuTzn711bZspEf3o4wb1YVXYuSF5zg3UDELDQhpC94LkSNv2bEnvtRhgrYUEze9vY1",
  "key36": "2asP7uMPdrN3Hs8LFmQD6NdvrsNRcqzTi1fpQCmzz9zApm5D5HdY2ADcVEUsJysxuq9SyDWcETUZcNK9wTQGK4cR",
  "key37": "4FvqziiPtGUdDcRzxb7BjHEKSF1M2XSzF7ooCRxxZtjBqQJKBoUK9VpRrjwP7CwJp17C59iKRg28vhe7BvLk54qx",
  "key38": "2fsUdaCmJe8VaQsmHgSh3EgPN9JZTKC7EbTK7SWSAMV5XnRcr29beBfS3hGJBgTqHUbZZnQUj2n4iVVgvrXx4Cgi",
  "key39": "5UKHdV2NxzGA1woZ2Yx7JSmuPPybfFPJTi9hGWNXuov4JUNfarpGGHMrx5YP582SGpmcz4c4JB37QGVwkNkWYdQS",
  "key40": "42gXLSvAV7CUcMT9cjSgtyR7gEeBbqo5Q2rzqeYSVKMoBoyCrsir5E3wEfjBnqH4CDcKPqw4vyY7Dmq7HitJBf8N",
  "key41": "4xvX6wKv92UjzyvS3UL8z3jTLVVBW1orAPRx4XDF6jWqErmFBq8KY9bTHd9PoPT2R3G5xGh3w2dXBP184M27PkiC",
  "key42": "2PjXq1nwPpxpxDNzXNBWYPgi8j6MwKaFJxKLR6dFJUTWfGBLD94yV3U2UiWVGmrjbpSdJLzZDqAEq2f8F8tpQzPW",
  "key43": "4ZQLxWmk9qGQ9DNC3D2aDzQjEEQmnp4p5w2qiWHXbZH8pyEtX1jtbpa4bHLqZPpvqH7ifKosd1Z84eLUZWwUEXUA",
  "key44": "2PbcBfFuj6BhCPM5FntQCyQ2UkQQYnC9fCZnnKB4pUieapqxcg7MyhawY37rn8fw1wRCKvH44iZv2cuu3wq1Q67E",
  "key45": "3piYSm6khkKC4tcD6ffTo5wZUWqP7UPKpcMwfAREvSd5Mi2X383V4HwyxpRCFAi1KuPnJbQ1CtM4qfQbBmifwcBd",
  "key46": "3rVrtR8WCotahrYtbim6PMpnpTbqEmmGTFZxKGSC4YGfiVxM6RAKABUnCN6NWr2PF9o8iz2tZojKFsY1wPGiPitv",
  "key47": "446G6kVPbzpbDnx26jWi2xRuAiBdM1HyKrT8gCzRUnPtFfjZZu125muTyBaYhK7pfjP1ZbhTfodjjuyGNZu8NqNz"
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
