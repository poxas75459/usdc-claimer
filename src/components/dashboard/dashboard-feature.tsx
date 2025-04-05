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
    "5GWQWgZo3zbTdq5p3jDdDEDuMbRVMKNPsgne1gLVJJnDnuG8h9wGci1UWMgjoYKUZjHbWUcZ3rTHpDnJx873kQYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ggrf1cfTi2YUHPAb8cJQTkWBjLZ6PYwVFPRX149y9bR4T7tvw85rf4PEvtB8tqy3AHuPVSPyPtB1Kn1S2Fqgh8Z",
  "key1": "2TGs9hQnSypLnytUKLBLLV8ypauwReYUE9CNokL9H4GH8HypvxjKBhCtpAkU9EKnv5YERtuVajKzZNvngoWeL1hL",
  "key2": "3L2VVGiTyu16DZpA1pqkSkx3YEZqU9XfStFk5e3y7gpHhGm8S4KK9y9bmjHebZfW1F7TeACxMhGum8ok9iPF5ZdW",
  "key3": "3cjFx5YsJ1ooxAishY8uk3m1ZoSt48NuRGVGyucKnaNyw7dNP3BcpHvVW3Gqtnfsikcta1QeTYFGbBnnCTV1aPrm",
  "key4": "3Lk3netnGFMRzM3GjX5oYdFvpQL5QnTe3U4KGfLKfZKU1eiu2Cvvb5ugqYQznssEaZSaaAyQHXGBL1rccjc7i3Wg",
  "key5": "4y7BFtPVNWsMdQjjazXbY4s3KRrppqexSSDb7CmjzYnZ5dzfqhE3Ke15AtkXC12VdxxKbxhMn2WYrys3J1BTJD9T",
  "key6": "3fwD3qQwTXgRWk9PJtQZHc7mHm1ACFMurEVi7AJPWSXF6zryH1c8rjpUncbg4mbJ2HzuvjGtcUq2cP59U7Sb16Nf",
  "key7": "3jMzzoXfFb4MUnLzaHCrCuEdCeduGv3WJLd9vZDc2puq1Ztw1NprdL28q43teT26aSuh2HgVPmK3Wc6sPBq1dyiT",
  "key8": "2oBgCEoz8cY62gSD9oJptwHPASDbuSwUoJPeMCjiy2XnGQJTBKFFK1Dvi1Yuub33pfCE5ij37aQZwtXXBZwfNhkq",
  "key9": "2rk6gfiUsuzgefoMsWrgpKqwRTCav5txDLQJeFcVnh2nHBnmWd6vdaexP5PyKfvTgJaVF6rBnJfqe2Qyr585dEjV",
  "key10": "3jaZ4GbV8gqPws9gTtTEd5v9WQqJSJXBhFqbEtHkpzfaQooV48ARMr9umy28Ms2XAyFoy5jyABaqvdaozfEJk4JK",
  "key11": "394ejE8b585iZASQrVJMPWWUPcEsXo4TZ3PBx43pNgnFMFYtzuGqjZEpg2Fuvp1tXeETUMpWy97i3ZfjQyeJHiM",
  "key12": "5gkuEsVjnhXeKrsJsGCQ55mHV4k7redCB2yRLQaL9GqQkjHSqBmCt4eED5JNWdhPSnVnzf3TW8QfbJBKoNDDvXiN",
  "key13": "4HnT29pqNJcGqBN16Pj4iy4sp1CBSVV7sPSEmMFhRX3HGpYNMmGPQzcoioMwnYPVNLT3gEmN7Jk79Fi2izv3pZm3",
  "key14": "4ApJLxMZNZRw9p1ym8woy1NrhJpgfGDqMAVtucPwJBuy6KFPbEEuE1VSgnzpVq9PYbuoh3XaQjxYrx4kSMVmQetd",
  "key15": "2EvbsCTDV1QhAYdAuyuLWbTfCj3F6ivxhvvXH4AAdUUbD6o5PacpLySruHqs123qhvr3LA2eCtEM2vvH7bx2Sdft",
  "key16": "3KdrB3gmdTxGhmz7LjeUv6sdG2DLHoJ5mbLQGDD3xv43H2yLTqqs8xv9WVvyvAK8UsrgApAHm6cTBjUaedaUJyJr",
  "key17": "2FH1P3mPa5mthNnSzRyrYSDgWsohigoRSt6qAMDixE94CkaaX32dvHqnZThUiVsk5TMA5hBrrz2cT8DgjznpKkFw",
  "key18": "bLHhiCszxcQSTsokzYjCFf3czEgvA1BiAFmEwakxetn3th6JXfaEDWUrJWXcyBNqcxzMRraAsFEUdFhkxN7bWrq",
  "key19": "2Ht7JTm8BFpsehmjKJERStucBGxjNXgpzYotvM6x7G5LS4CTXgE343j672rYX4GDudS4RJKeewQ8hgAMaoSp5aK8",
  "key20": "2gK5tKbiZqEFZhzxHjRTebmY9jrNoEnhxVtFyWWGAmpZiHeJJsxQAn4ehmgRqABrqv3WuDtUFnDVpTzutpQYR5DF",
  "key21": "4nkCchR5kWTCBmzscxF6RZNTKmqhq8qcpLVZPhGJqpwH5kEBFtKtyK4XhDs78zMVDtJXUGg4KzZfhyuRKCbWwd3s",
  "key22": "4Jy68C6EECBaZ9cgy5wV3qte2P6ag7mcyHpTQUiWctFqXoS1kVQSWGEJzm12JABG6ZzgFbaWNVpRWezJmJHSPaET",
  "key23": "5ePgodwPQNyHK8MgAAYDUeDpHn2edPMPcQXvRAQYMqGXLyL5199yvDZziZGkTMYjSqLoxAwh88EXFEVfowBnwPYh",
  "key24": "4sCNzWr1tZpPUnWU56PVKrNhgr4qijyVg7c7TQVPZhrGGyCtefZG7aoaiTEra4zPXbPrhEN9gsuiP8cJ7btKgJGe",
  "key25": "2hWUBNjEN6KzcUVtS7NnSFHFsxKAF2uh3V1it8ykr75xMpSUm4DKdjtW2wkdk1bsrXhwKABFzeFPC12BF4jzMM4m",
  "key26": "4TohEAQ3qSNz8bM3sLnU1jxggRhgB2x8SArwidjeRjzDaMVNthji4SQBbbDDao7ZVWKiLvGjtirmJV6hSNjQEpXp",
  "key27": "2zVQNDATzS4Eopk1xTA3QVchKwBgtyiXvJQ7nJxEwuv1WdVEiqvocDEHpbf8cEeY19rNVKvjiDS4oqFCQoXBEcJz",
  "key28": "3KcMCcw2vdW48SvBnPXBkviGUMeUyM1H6BYSeBj9uc9MxHhiZSq5nRQzKnvLSLdB5b4BuebNEfNWPnZerhDgUJsF",
  "key29": "5k9V87MLZKv8kBt14tDmk72ERUyTwPUJrWfAQdLBJPxQ9W875h3PCb5niUFYxrpBmaiN2MDnSvxjHSgeUCi2Q9Y4",
  "key30": "jtLopuERzsxECswob28DbrD5qM2z8Jjcr21JSXWgfoZEwJ7qQMZZsw1X2EySAZa2ubsAKoyQmxfEiVCJypZLbht",
  "key31": "DdGfG4TNfevgzvTnu41Ub95ARTCrabQueU4JjFnWVrsHyHR7qsiSjTG5dUWX5aKQ9ta8DYgtQmr7xovkb7bv5UU",
  "key32": "5cyTJa97FwKvEmgZsVxeQonLy8hccYRaGdH6EHqmvBvumDBUPp8urct4tDEZ5miWa4cixHvGiZTQYJ1ZcDz7Bskb",
  "key33": "5vSxyPtEfZMp2YBHUEbsKhttcrgiMZeEEMMpXh51fzixoei7s6qki9veQ9Sp8xZU6CbNnr9noKNcxUVRff3ism3U",
  "key34": "37UKa1VzAiNMKVsk1uxkzHdGDeqDzbiF2oxEiErmacyp7QKM6Q4SpsTy6A9QAReCmjkJ51ALZWiwt1gFJ4L4HyMQ",
  "key35": "gP5U4xEW9ytT4XMK8bKM6gxAetZCvLKW128LzpqTrA9yk9jM2movpYYirZSsNMYth9Hf9KFYtwFYRYFPJUYTtuh",
  "key36": "4XbotkUmQufaxj74GNjwgs5c96XPEEZP1Udftgrw8bfsqb1ULtBLMG2DNyh11Ap9PNSKPTHRkTvYhWF4WgDC1mgD",
  "key37": "1HbBELKZGkLnzSHERoJcvhKoRWfhW6makmZHTn6zUF9ZwA7P1i8WyZkAoKVv5n4gUbGoJwCF6sbusRyXk1PZMkT",
  "key38": "5XW1P37Dbt9VKA9UDWjHgoZUERDJmtVQRURawv5ZBnNnpfKtHGWV3DDZQnt8ees7Wkg2KZyTqaHUTsJiUb6jsGbU",
  "key39": "2p2ULnCnbaHmWLYRWV2QoDoDnxxurn5aQFFFnQWbhSmxEEKB4cwJ5pmX2g6qu7HsZcivR97S82JZvHUVXp7qKqzN",
  "key40": "xG1EKeifzNaN41t2nbmod8MxaTmzeuVctsNyN7R75C277FVt26KbneAh3rA8vn2gg85pdPFj4L1iJCC5PVWcrqS",
  "key41": "478QC5hpshmjoc2zwPxGKBBFcSCwxeTr5vbr6sQBmh7Vk2xjfgQT8Y1ReAT7yQa9qRTsrQ1j5N9r5yWP5iYhVjoR",
  "key42": "3aaxLcNo5L6qLqK4cv3WHFt1DBmdXZmbejuwko6yCECoiWA88qsajTosYJVHTTp5sJSLveuHSGK1BXQzVLuQaDgQ",
  "key43": "2WU5NM4mD1ookoVxyuBAc8CSvPMVf6RWyLeHc2JJA2mVn1UZQfCbtuyqt5UT3AXf7SfiC2QZeuya7tsJtQx1fiFx",
  "key44": "31Vw289dGyPaV3zh9ZMA1wA8KjfZE7pXZdDJSi68KjJwBmTwFMMKKjjZC52ow6n7s4bDyCALkcmrha3DgEnPjatD",
  "key45": "2L3nQCvmDEjkE8UcVDTvpYtMdyQ2KQPDUDh2fEmkLvXzZmFvLA1YLyfLvhdmgV8VCPsJKZDntwUpoFxQZ69YKejz",
  "key46": "2tuVSyt1AMdJ3XG3b4x6cGycRNPg8qYaWBtW3uzrje5vw2yn4HZLizT2sCAndm2wRCb6P7oLjLvcAvZb4kzRev9J",
  "key47": "35htCDfxbs3E62Bbu2b9bMEoKrL9jMBhpbxa8suiDeYGiSxhqJuPSDBygM3YVEUZaBkry4yTXNHRP3etbT2EMqZk",
  "key48": "4XdVhgNxPzig5TMuqSgb5ncydXQyJP9z51RhdCfUoPcS1Y5Acoxbsg8R4o846R9Lkk6a8CZF9j9SxzbEDJ36hmKE",
  "key49": "2ruxbPeQ3cvfC4aGWXSLHwHR4wz35a63NpXFGFnsikPNpdcnyvCi6gMgS9KMCFDMUQZ53GBuqQRPyBnWSTbqxJS"
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
