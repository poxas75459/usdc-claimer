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
    "1q7KzZ6bsbF1u93mKpjDrV8bWdZmre3kw7RnPZmWJkF4ABC3tLWMhgRSJTnavaGdPEwiCQ3GhNQivDP3H657ZNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTtmk6Hfm1593jpjwvpLFc9r12VY9j9BHeDWy9nZ3x2jyVD9ggTwXCL63CzcZnymsgfQ23RqRDhdsYqLmUuRGWR",
  "key1": "2E6ZsZx7tcJpXzm12yhd8xPHhrFQibzK7XkaR81SGSELMb3PPcXvTzmuN1AQLo5GYojK8FzKRLSxiXfeyw1B6iBy",
  "key2": "43Cu9sLP1BU3pBzZQbGxEJcxjFbP4Z1sAkbSdMKohrGTBe5CGxtYkhcGtbnC1t76vTXSc8g4RJhQ9ockjCVDbv6q",
  "key3": "48q2rNZBP73pNmGTUpuqkYZMDWZLFh9pUfNXU4uEpPrRvhzKMv9u6D6jyeiPHck9gFu6Nzpxya5twUavfGDgATYR",
  "key4": "3bChew9819tw6qfkvFNdNhbEsg1nYmHcpc94SLhdsQmk1pD5vBtQF36mFxVSSnERU589qpSHPCyrZrEM1nwhm5MY",
  "key5": "4kv98mXgztun1mL3mcMTrpVxheTdrp8Yices2pBq6bTDLCvcYNUpkgJGJiJdiLft1Y31bSWKgDVTbQkVwCwCfiju",
  "key6": "3Bt7pENQDtv2GfGaviMMb9VpPj9nSuxjWDnpy3c8pvi7Bi1yC2DYBFfoZgTpBh8upTcD94Mke2bMY1RLfrYTt966",
  "key7": "4tnsBHF6CKinFTRAkaBN9yzGdpAcExN2zp5hycUq6s7pfZE4pMxhVdm71yQbJeHegV5r3JzoEyUMwhrUWSBpXdeb",
  "key8": "5ASwiy25AtgcpqXwdRNKFp9dNn7ks88cBF2JLn5sYhN8ZBjZCr2XsLcgJfNLhW6dtWWqreZF3thKYLJxojuUzc9s",
  "key9": "5bcEYCNiR8vqaFQ5TpuS9VbnJT7fFnBBJwBKtb9BmtTQfBnS55YGfDtDp5sHf19moLzVMTYvD2huxEFLUH94B2oB",
  "key10": "B7uELskG9ZdmytHXbry2cbkBtAahxULbtyUvJq8b1cuHuEvf2rKJvAREwSn5ihKCDsngmCZF3gA1zaf5YxWTzqe",
  "key11": "42Ax2i5ZW1GsgWXWfALyQ5m1rcm7U2eBFWoFcupkjSFoEsqbEMRLxku9NDboMaKQsFrcdTvoCscXwDArScZUpBTj",
  "key12": "4LWxaJ7y8ptTezAhXoMwEbRsDeFHvN11HK45YhKNpccacQi5kQXnaQPY2q3qdNN7Q2jfYnghPuTGcaE1SmSNXHvr",
  "key13": "3auBSZJtSPmde81pD7gWCTxevLygqYEvMeQvipqCEoi8tJ46SQByyZR7WnJ8qxboJ98y6Qxw6sdPwpzTCfh68uck",
  "key14": "46sfaio93YNCfTG7cwK5MtWiFseHxNiEZgGQf2gxVZ9saRBkVF9VCTVybFvvgcAeXXywLLGuedztFPCP1hkifQ2G",
  "key15": "3K6UrghGQVCCfoUdRtbHereAkjvGDxo9tcM1qNCL4ExDNM66YmuN4Tcv61RL5RhXRsVq7ztqVabkQFQwmboaW4Sn",
  "key16": "56RTK6JxvMJ2RTFtXCDcfkuFiojTByqc6c3ny46xnZ5vvs2Dh8ikDseR9pz2fxdQzibf1TvRTb9zfaYhiAaX3iVb",
  "key17": "5JPJ1Dimgk8dK4SjwLWkTzcyRLAmF69VitgoaFvFuEpa6wcPK6WzQ9B2hBntNdnw3woG2SDLEqMh9tgd3f3oqP9c",
  "key18": "5N78eFZPsyQAqcN1ZFvyqSNczaqtjZdfq8iSb1GSg3YqtuxyxxKHLbfC3SLFccZhFkdoXmTzNpbf8pxcT84BbkTF",
  "key19": "SVj9bD6PrwrZE2haYgLNy1Qq59g7KCzbuLsvBUfCUjq4kJzfWwp47afoapPGftL3drqRvn6sQN7HWwfwsBEHKzW",
  "key20": "5xyUjTfu3axBNVFaENZ8MgdVjrqVHJVDKFDFGzzNL5PF2wpAigczPTpt7TzNptQpcXZg6zuau9Y1t3Bbx6ahFD7u",
  "key21": "29taccgmGkTULAn33cbQnou1Es6k2m9WGvTRBEYt3qL27bPuX7jdTCHm8WZqq5mJqDE74kjNVgzwEhwUPrfW5D8K",
  "key22": "2hY7S7DUqkV9MJeiyeFFknAtKi9LAbdyU9EVuVyfE267whfU9UHw7Us67Gy5AWtSqauHBMfuU5hWF2zzYgHtkKaB",
  "key23": "46WWuZkS6RYTt7kvsmGYuKMZwXVMQZG17x6JpXp783PpHKJmZx5y38vZf9uFHmH8Ajz8GvFbmf6ADWxrFBJsf6Dj",
  "key24": "2maeh5ggfVN2Z4joSMLemaAYZrHQ5DHNmj5HdCasgk9bW2rBZx8NtE8J3CediJwnJv3eZsQMB59WsK78Yu32vRLB",
  "key25": "6AudaMMcag38voRZK1tqLz2dVRyJubGD2tV7npgoSbN2XSLc61g1EUN4TVCcfp6RuuWk81LR6Nzc2eSN8XwGX5b",
  "key26": "24cfEVhZudDGvGmXNZWxETVhWA4ekVk7whvfqPto12kFPHCQchMZ9fFNc23qWZUM1P4HLunNb6mXGwio6vrNcJBK",
  "key27": "2grWaJgTsuy41kqi7oDNpDFUNwL6he7rrz54RusLhDiMq9YVc6cZhUyy8LhvWgFwtFjzK5DnNjFq4PoRjAKCkfkd",
  "key28": "4Ev7iuMDEYyo4y9GhUCdAraZ4m1PvsJehuE1kXTmPqnxFY2PHjoz1P6DXVxLrSuhAnxLaEQ4YVwKvhhezqnfcybn",
  "key29": "Stmmshs5ESmQJmYpoHJLihHrZJNyApwL2oe7DC8Y4V8BDYrW5rBrgEgL4QJq9sG1UBkuNPSocjzZXXWVfvZ5KG8",
  "key30": "5YdNenvc4RYshJ4mDzEvBwFaHB726aqVdac2QmPW46UnzFriQMyx6ds4piAd8i3QbexzqVJuHPY16Gb7R8A5S7mk",
  "key31": "5HvS4GBTWNUivEtEK7p1i1eYYQwQQJACb3Z5QxHC8ftceF8qbR8L8gBogF96ssHKM5Zg51X16bus5KBKikqXgsWs",
  "key32": "266YAuy7sGjKedFMaD5tgw6Q4j5ezbbCGgAzK76hZKsDoW8r4Eshu2LLo6DygpdQynsZcfxse2LL5si6F1g38ivg",
  "key33": "4B3G4mMFeD8MBmRyMgG2eyuFwov7wquA3Y4eQXNbMH3aUSP2u6TATzEduC1ZN6GK1dwXdnQbjgoG2uX4rbTdTdFq",
  "key34": "uxiq6xiyeUQnnBgiGCbR61yUZ6tFbf4btnNGWvkW6MCQ3rfJ6JQ1E1mdMyyVjVLBLeuc9z8QmzvWvZ7PF2cUPXu",
  "key35": "52KDGv2XQ2Mkk9P7hJoczKAH516YHpfEWZ8zyACW494sHBSmuK16ToPMDQnjENZf7KZd1sjVpyjvezcAepnnBSr3",
  "key36": "21B2z5GdTrxiE2veqUgqzA19MSF1RiAsXr771VF33KWBGF1cgGXSvSCSTU1UuHyWevNLV5WbsXFLbBQjgqvbYkx3",
  "key37": "3PkN6Fi9cf46rRKnj4qk1B9H94WgYrPGZ9W4bMQNZT6YdFohGo1dkQftLe6DB9MTacUPFa6JJAL9Dphj6kapWMvp",
  "key38": "pWHSuM1Ap9g91DebG2CNKKTWEe1FPXUddgwB34Bohitsgbow1su1TX2YisFpgWPjeUih1UUfEmAEsyR5CLuoW3o",
  "key39": "2mmZtvt41Qd7fkGAdjvnRYDpaeCtMvdYKVmZJ4r9NscbmdDDYDQAnhYPBYsb3RyeAvbL7ALRpE6BwM34CTGPZZCu",
  "key40": "4UyZWyYcoccCf1qkMdcbtXozvYH5XyTKaHFRdZ4qhmzy91JNtEfbM8rQN9wk4d6CuutRSxou1DLFgrJpXT72nzkA",
  "key41": "AUvrJxx17BGancM1V4E5J9wkvDKmJjhWDmWPDxdoFbx6U4u4S5DhemMJrYfZwZsZ1yQ4xZvsLFNQGjmin7QXHxW",
  "key42": "5yAeCEmdETjo8GzdGPD3RpqYNihbBTEHfxCuMxEneRhH7RvoHuP1F1J3si2XesZ1SED9tyFkUWQZxmbqeCveUVft",
  "key43": "39XUdd1DpAWWp4xAPuLVv5NRwNqnV3NFbxV9m8uxYeFhFiJEpbywDmU1epTmVADkb6VYtUjBJYvhABbEhq94N5Zd",
  "key44": "5hXBapEs4xDQvUT8pxND2cQyx2DkABBvBh3hdAWB1GBpG5sQXbSdmpH23YKubWmjHnfnj9uCAav8K7q3FU1bEpzk",
  "key45": "4VQiBFwvDakEUJbo6y5XEDsFwTYsNGG9t3HMPRcy4qYToz3xwAzjjUBSfYPNswdgfdcntjCsBvoe4MUST76HbmZF"
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
