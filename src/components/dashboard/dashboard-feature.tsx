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
    "2tzF9maWbeAVMM5ssa8yw3Wpat5rkMw8rTA7A22AudywmNAgMTTyeF48eHoZ3nYXqWUEx8m2eRH6hya45Yz9UMXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWttXqDEbCNTUgmuHwwmx4ABatvYfaxL1kESrcWYZLDwMohsKsJcDUb8MkDG3rZMYVzhC3zpy7hZkpsj9JzTgoq",
  "key1": "2PWBfBpugHtPFP9T2GJr2EB38qQPcL9ERgVtpmCjB5pGNyXQ3TN5tNN6joFN8VugRvENDuKcnRmqnKji6L4EsVhe",
  "key2": "4qiEUDopvWbK5Y1sWTQhgqjc4gkDUsEDLYgTntbL4cGnfCHPGjhdxuA9a6vP7VbnyCjagfQBTm4iDjQJCsPx45WL",
  "key3": "5AR6BYHK284U54LPTvYXA82GPJFnefNnjG4qQn2DyrGMwxCGRhwMPuATeFhU8k76pShspPhyazCZBNykr4Bb2dzj",
  "key4": "w75qDQ7DdTw1TEtVWYEwNgGcmQgASyUAjMBH5gbrPrBjKbJsPBtnzTcAvjLSMfPtNAvRAjcgfn5E1gU6rnvPoDD",
  "key5": "9JmfCuQGkQxnbnQFhXzPFVcfNzyQWXVfTNrHGQaLJQGC1t6SCXyo9svVXJhhsLfEpKYNhUnRujUfPNH9ZrsNJvB",
  "key6": "3isGBfEUhdor8bU32hFXroW2za74phAmcqVhd2j1WRgqMYCMRhJhsJfsqhhL8i2GHmH8eTUnWh3jVeY8WA6Ger7s",
  "key7": "5ZVg6gk4FQ8ECnadFj1gaSwVE4JXHujxTXyfMd4oHiNyLu1RcAMc3djbHq6ycXPPp4mxq1zEzZ5Sg1dRAfPEUrun",
  "key8": "5rZ6djxiMNjXYaUNKAJ6HVuDoziSJnnf5D3QCvNqbVAW9RLgzayXJMCd3UBjesxCNJEnG3qNecDML6bJGYb6P8vf",
  "key9": "48kks6m5SfHpNZRtQCJBnKrqR8brGqy1ubAstbZQRsdTGQBkMseq4oQrmPAPPrj8wASpM5hZdPMG4LbVsJD31ZnH",
  "key10": "5fUiXJ4TyG5HU4qv6rCuLzEtR8wQM9GNTuWsUxhwnZpMpCyRxZv1pT78ZDAYUvNh1Fkka7rV2tFgahkQGmKxFtxk",
  "key11": "buaeSt7YyeiifK6YgzuAraP23ifjTqYaPEQNneeGAuszWd8sPiKLKypS5dJePs8r5YQCqx6zxd2C1Mm1SL3BQnK",
  "key12": "5c96jpemYfrE9dimyiaR2oLyq4fbHYGn2d3Lue18Hqg1492h9rsxydAZwXBFFcRpbTMsqKeeca5ELZ6DcnJ1VvL",
  "key13": "5hyDbcGjPtkKsHMPXg1ovi4Xr7ANKcLeVNh6kNZzEKLrYQZdyEABQf19MuvHJwHQMWF9pFaVVwT1RuqG54gHhMH6",
  "key14": "5EbxjWsBM8bmzUoymN8xZpFzd4ZG5x9XmJf1sw1di3sFaRDY5bCmM4B7vUaH8xfpJQHPCv9BkcCs1fzukCiAa4uX",
  "key15": "5ReLJ7if4eS9y6CYkkY2Ef5FVpBYithk753FG91Ebh7Lcnyd5Y9CoyCwNiGgyaXkHGFDCYsGn7GNRt83Fv882B8c",
  "key16": "66jGNF7hd3HDXegFWJvUPdbUCiw3zNciatz7JBdTz4YWrhoCwnyvHhKyghoos2dUhQvbTwE7Pt6E12Kz4ts4UFqt",
  "key17": "4DYny1k6vLLAdDAtVxUxFPnjGnCGwsgoUmzEMNzjc6gntM1wYeYs4parfsq268UYRAPechTh6jGw8bxnNR9VX8yQ",
  "key18": "38y8FaUsrPynPiGTeXsvPGPrNpuBjjphP7XFLLj6YHLQdLMFJsvqYqJELnUjGzJBWYqbnCRABrFKHHXrbZp3fFfm",
  "key19": "3n5zczr6zUU8syCs8LnTAdv3bjPwwBT8NUkaLnVE7Km4JYcL3KsUzVpbfh9jV5uMYCwnt5kv8XA1Kr4uAmTmBFem",
  "key20": "4ZRwVykgx21GAr1QeYL2HhnYLmDxC9KxYuGgVq2cCjyUM5voUk8NRmjArv6DvhHU6LzRondKdRzKsvpf5zSbAQPL",
  "key21": "2FvYqEdw7UuY46FTTjzr15srL3v58EK98oH8S5SEnA7hjWtiNfoYWijvEDH8bfRCP4HsipYyhHuidBhTYy4ZeJvA",
  "key22": "KeeC3tSidw9RiCFzrL2NCrwyw17etFxcAfCyAvQfWLg8p8VqALvAazBdSMzyzLamnLT8wVFiqBFapUyRE3by1k6",
  "key23": "5H3XkuCFTwzFRHkzGrwpAjxu4sPVJ6n5MjeKMXEnUhhuFU5qgVXmVAXNMYXn5TbZc6H9PiDNVrCDV6y3Xd3gFvU2",
  "key24": "39zN3j8HJeU39geNe8jnxXwrnPXoNMiSyQ6a9SPFKYm3cqQmrerFQcnwtSFujigJgSw5qbUUHTCEoGih7QYS6J81",
  "key25": "5LLJJJkT3GhfqBysSX3xhQd5QUDsnpari7em1P7QFJBrvBGmrqmQfgHeo44Bc4QXaxjgjCrVtmerbqiapLgZ2CMn",
  "key26": "3nWpB34ssCDwppqqSnzjymQQZpoucmbbjfPiaGzDWmrpnJRLLcqJy2mBPbgT2T41ztr4svLkctS9HoYbeaJqYV82",
  "key27": "24Dm1PoYBWMTkx4ZaiEPBfmuacP1SoaNJWkxMe1dPEBRVsxKT6mKf58v5qjfZ2n66vD7S7AkM2t4bkpNuP3eKa5n",
  "key28": "3s9xw4HT1VFBptDrRr3FBx59gths1yv6qngnc1oam6AxYkVP4xC4uFZEjvRbyXzTMWVYPebF6WLaFAahQ2eDs2HQ",
  "key29": "3wvE1ixHYRHTeSbgjHShPUwZGyghnwj3K4wgBjcCruWzoWjC7D1wYkPtQMBvreNyVMC9f5XVsuRsGoGFEGhqLy45",
  "key30": "5seiRbqhAb4MeMeTkvZ7MUUnh2zpqozvWNi65HMFDjWkjvzZfDS8D12JG53EmAkaX2EqRvekjLCbmGTVdZ2KRxky",
  "key31": "zXUfuuQ1ME6gr5zndEr7iiJb93j1yL98PhYqmqKnHp68nkEnUooFLxpas8ULRa5bq2e1X2Kq2iUaxQ2hxvxXF2r",
  "key32": "48c9EGhn8hy1mn9ejZcrhBC2i7LJoFYePEigyU7a1Z2b72LLtz1kGLvDbFXRYYpa19ZrzM55Pgasqw786DTu91qZ",
  "key33": "4ZtUmRzJyVSNkndPzrXKbGeyfZhvp1ozVmBemiNifxC5UgRvavzEyfonoytok3xYe42jm4ALvMvuChrjzr3ygEoR",
  "key34": "2pcCWKVob1e35SFaB28Q9KQod6Qeke4e24hzy8qrPEHUnnhk7BZXH4AsaZkhREa4rMnCgbyCKdc3mq8RKR3kHW9a",
  "key35": "5qVpqWNujmhNysPY4bwVwFr8t875Gd1af7xY52XTitsJh9sjX39Myok8buLmAZ9u3H6kyUJs8Zrr3rXWxUmotN82",
  "key36": "ubn7auWqHXgRqn7z4SiXCuaaEcgRFfeySA7Vq8QVmSpBoWeVUczy7DxzHA8EC4jFAHuoj9GKPCrfcWnZnb7EK4a",
  "key37": "3rTrHZQu4TusoxmZVUisUSDquzdxXDFgstvj1899rnqWB4nAsaoSDbQuAe3QdnhVEKfgcnAYvhoey7B67NkRvdWH",
  "key38": "4shc8kUatZGfLn3xsek8n45KjZPWvds9Hd7tTJ9Y5oKZoEMjEXpbF7aVikbCBNQeLmWYr47UzipUu4sZA8n331i1",
  "key39": "4ng38oCC7sg1X6BubxCk5nX19kFN1W1UT4r7ypBPCKShWoYbHE8xi2Fi3Wp95o5gEdVmADGdUVJDC5kd7uBApiDr",
  "key40": "GfDn7iMaXAcWaaEJ7mrp8LjJirqpAjyuYi5rpnyfHRA7egx4UbgosUfETuHuhLoNi7YAyYGQcd6bUdLdbVSYPZQ",
  "key41": "34TfLUpBgPvaMmPQ8sVQLng8T2TTmgxCpCMZqPvcJ7uKzowyqq4Eu2kBo6bGGNzWAUrarwo5TwEN2Z4q2KpxeQer",
  "key42": "wToLXJg1V6EYDwhh7E9tM4QsmZxaXhzzu8F36KtkByjSTWM8N96GY5mRBBuM7DMjQgwdHwM8sgtejQYiFdr95je"
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
