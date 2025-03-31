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
    "rxfyXk5o5sCAuZp4feumMifMH2iB77wuoSVRqneoyiybig6TqugZ2xc9xZkrQHwDqAYXP67Y9gFdo7fr9AdV7ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5gjoAiJG3hPMH38EUZNL3vKMKAuhgzx56iVkR1c66r1fVNoT1d6CyL5fom15E927Mgq9GZ5KWfRZrgf2ramgjZ",
  "key1": "27yxc4dorfnZ3nmmCmqkqtdoPvKK1iSNtBUHcX5UaZHBgVx3LyPsHWneXy1iJVfpsQ91quoR9wD2Ej8G2KNKAxhf",
  "key2": "4bKQPUZmrNMux91bN3WCC1nYaJvdFsuenPP5L4tyGorCa5yNK8oWHcdBN7ggMmJ4BPMk7Epikho5NT4CM3nuneNR",
  "key3": "4v66A8WdLXL8ovPTuyTxEuaeBTHZZcdZMbk2S7T9QyXt5TVrkoCggV3oaawKP2UnmgEfU1yWhiCAzgdbeZNiWxrp",
  "key4": "mykksz5WApJjh3vG8WYdsYgiUFkxjrsy5rN14W8GUQhvQTBhb9r3RQ4v9c2ePG9Mk4nAWZE8W8yQJrGNeN1LNWR",
  "key5": "5ufLkiTFBa2rqMuuRicNp14A9hKq16Y4wcDgsA2DwqiD1LuTY3wW4uugQwaVciomBy12Cn5rmHVWMkPgc89EmoLr",
  "key6": "3dgNbJRXFZt3U2pAufdajAFHWoojQ3zX4WYQ5ydqWZvBDfKWNWGRKz7qXmh7k3TdM8T3tiX2oMM3fDaPnVc4qWYY",
  "key7": "3cWahbYLrdkqX6jMYBgTLqNxuFumTK8KoKY3dC1J9baKRkgsPMoFrTfn7bQXRr9x3nZFdk4ujG588siSeedNZZeP",
  "key8": "ykUmmCFcqXVREwi7g2vGh3yTyhRgdy3NmD7RvVSm8oUVBYQEdHj4NXf5mQTP899ZgX4FejKqqhBWt82LgQRj5bH",
  "key9": "24BcSxuHfyUFniYn4Nwo6scecB9MmvEfeBrdn8waAgck9dPwkpQTCiLe1M81z5eXTbvEnau8i9Ho6qVXm1i6JwXr",
  "key10": "569YtQTcgcK7Ef12hBk6UP9qEjNovo2DPB6fjLYHEaDjrCp7XLz6wx26dJn6ZwqEcLoNa7JMX7eyAYbYmnVNNmEq",
  "key11": "3gdQgL7BxbUgX812bU7TnXkZtzkb3iw9tgmi6HFvXZiGCku1ydRxFrGMSNizAweZuuZ4bagpCz84tyBT9wuQTXfK",
  "key12": "3VbALLhE7AQ2nrbBzc73JVLzky4tFnXWiSDC84fUWSkWxGS5MYEZKfFMJ8g2fR4vXLso6ZCvTLgxYdYv2gEXBs6L",
  "key13": "4N3S7p3zWfLVi4eaK7TSuzVcXXRPp7pQfn9ucYEv3aa4KQpMSThPbc7cPJgQCod4YNV2H66cEAsoFhUySb592As",
  "key14": "29o9ZacoE27hJB9Cf4hbocgrtD5R3sqPteEHuw3qzVuSi6fJ9beMg7kp8sq9UHYbr9taqk93nLEMdgGTZM6Gnzm4",
  "key15": "5dnQGwP6ycfK3bTeYr3EDbpUf8QxpeYUAciJkknjePmAtZVZdejrg6RAkzCysWw52G9M34QrbViz7upBjhqxK5Pn",
  "key16": "3VRL2YigWxzB2yCS7dEd5vU2FmBK4a7JNVpibDMWJxNDCUdy8z2M9h1L8Df3ycq2mSYnMqhUN8ejs21qa3kx86xe",
  "key17": "3hPVz9Y94ZrDAkxEgJSHREpcGNTBH61WNpFbgnQMxtXMmwWN9k8YeoKJgoD5tCBJJCZx42jSgUeKZ3T5xWitkAT1",
  "key18": "NjYuLuEbEnLQ4KL8vusjwyzCerUWQ7xs3bhu4sRhbzRKavvmSGWzhHyjbRtxm87xRm8JkFVSQoWCymYAjQcKhSB",
  "key19": "4r11aeYqPsRn7F8JcPktRjdSJbRjZW8y2Q8HtUQUdrKmdQ55zMdsBoT9VwnXGQrhackZi5Aq3TvLYztLxd9yz6KM",
  "key20": "4nReRdmDXys3jP4kkHdhgTmCuP2ossoNQmczcaZZ5tdJfQAZkCdsMggorkZhganA8UCWiYr6b6r97tq2YAehBWNP",
  "key21": "3XPvo62KooMejpvebwfpynfaxKTsDtYSERBSknFe7eK1HanNGg34f4ciqBD5CtBYM7RAqUkRLV81UE2GRqSGAqWD",
  "key22": "61K4bUrujnJAT3qP3zSWbbByY8Wzyph2t4fZfzVGDMVz3LUcdEaycVksejAsoqmfo8WAGt8AJNew7CemqkVTTVzx",
  "key23": "4o3G2dFZ8FPeezZ5Pcsofu65hbP7R4x3K5xcSgqK15p3GeonT8hJd7csWfFCiJZm6F8mq3trtcSKT1cgeMZf1pLC",
  "key24": "6ZecSkGwnhi5TdiVph4YYfM7781rLUp4Jc5AyCwb9RYPj5FboDubfuPkTGcMt4nQbGgkUUtMovRx3dwrBetkZHQ",
  "key25": "2RYWw2ZJiDCLJeiQq7h23KpDifjRLeiipTCCv77pWXBqtrRwqNY6wCob2YcaAoqavewwewyc1e5dLwa3DtngK24S",
  "key26": "33KzVYJFCSdWNnct9N3XDsg3rRhZK8HvEyEBnLBtwf1saoawpTSKWk11dn3AYhWRkMf2DzBPe7fwpg9ViL76jDwH",
  "key27": "2ixH8DghUA7Q8td4xC5fQr13T6DLDiDyUS92ENZe2XVgSYkrxKBeGwGAmuq2NPvNyvLeDa3bT1L4kjaYj8y11DaR",
  "key28": "2kzeSaJD3k1Rb51UnpnU5CF2MaJsjSRo4xV4i7GJynEr7FLUawwFbRGBbTQpGDTpoyRFKsfm3brQMxHkoMkHyfju",
  "key29": "Ff1Gwb47r56VYVrmRxN8PKAU1qPBRiUjpTr1LENthFV93uCbbN7mvLrvx7qYqAEuApoVCAcu8n2iZHDm863bfAh",
  "key30": "3tA4hzJ8B9Ht39v3aLHGLiwrHbrNfr7UN7fdjGEKnDoyUr9mg5PgMETMyapUnd5Zhsut2rH9uNzArYM5rhXsZFGT",
  "key31": "f1Lx21P5LtJPb6uYQosbBobvx3E782qhwUR5R6LoEuvedyQYFUxazBWTtBAp3h2QpVUKJ1FjKKK5oGo3QkeEgXp",
  "key32": "5d4iFVyYfS4EVrmahTCMqQeyWaYpXgpw7je8RT3N3QPkZSujh3i8Y59B4vjvzH8RShoWbqamFVp6mHkUj9J3Y8rj",
  "key33": "2LDv75YKxRpXngy5kZty82nVBevJ4tkCDRhy38YZX5YrSBsyhkuThVjqifTpmpALEL5RDZbu88BL1HkudgyEU9p7",
  "key34": "22JABscWwZEBWjBCQvSNNfRezYG1ZSYzChMUW22W1HJN9eDc6zu8ziczLZ72PVjJyfVsceSJAmk4584YWJndo8mM",
  "key35": "65sPLS8uTv6EEwhcLSDMv4WxTYrMwxcD5qDCBjNrJD2vvBS2jPh7gffUUpVking7ZWn7sDX8aEQY4ZkubjWZaMKm",
  "key36": "5rScBA6x9xKbTBeQ2LeiSZLpwXg3jJQKCw7SJTcd4zrcjzC6woxkib9n6aC6ttDGKfYo5PJiNR26YoaqCu6CWz1C",
  "key37": "5QSix4YdgWfhMwqy2PXU1ZQzMujs51kaZJ1vFfNhHwDZRZ3uk4WBdThKGdurw4zEvD7FK74APjAHpckrsPWVD7DB",
  "key38": "5B87bcmwHyGvBnJQBFXYMNRCMcLangQxotcc9UCiNea8zsJFsjLabHkmcuj3TyQMPneEMsTD2q1cEaPYjRmAhZWK",
  "key39": "3RJS1j3tibFnq9pjoRjZhAEpHBbXa3wkYzyMwXNGWFV2Cmm7KHDhnfJTkPDogGSRhNDeVMw9GLKmtS3fetzXFAv5",
  "key40": "3iLyPEBunqBzfu88hy4EdpuUmxLCKanM3BKLYExtodYR2KJwuSJkMwZxoktbpaRtxGHsrhzJNHkkwGuQk59LCf99",
  "key41": "3wztkxZccqCheoSk7sTiH8rqJQtxnpdPkqK2QFvpk9yF4WQ9bv74eUSjPm8ujbKLjCLewUohCt2mbrdZDES5VzsK",
  "key42": "57vvyJD77XqJRNdNL8fPmh6v9VUp1JE2CDxrC6QdnfAHZzR3CZaspmTW5aoB3K5zVNngAEk5qThM6ijpTEgmcf8j",
  "key43": "4NiyBkNKhTtgfTkWqhQL8uyRrJ2oBNSXMkwz2dtGseco4K9VJge19g3MEkDomhhUJEY6CWpD7ooNVBMxNYiahUHh",
  "key44": "5CAbtmJZi3Dp71YWzkMDm6AhWbPJEJanXiyjYQ2T2ig1NUY1EmFy9DusvXR7TNBGki4hT3RxDkB3QDoZT1Nbokp7",
  "key45": "4fN2HCfUtpeJ5c2VgSsKmgRtbiSrrFMAQPx7Rk8NwZo38uJECN52w8tt7fQSG8TKTyRFjUYANWQgR78XmXokA8S5",
  "key46": "2bSVeQbnv4LxnHfKeA7K4rfVbsjwfvgdWLBjs4vL2YT2EVNpDSumPCwo6ie37wbj8w5H7kms4BDgwa1kUijaytFX",
  "key47": "cQtaCqWtznjztJagxBwDRxQRJfQGXwa1yFLwDvLXYgZbJy9jmPDoR2KU1N9x233ycmsM9C988iQJajCurdJ7Z3p",
  "key48": "57onH4tTZrJeKivfpjbWRBx5kAfvZB7m7JmzDkt3cjW8dPcjAEEHXK7rXocPCHKF7o2VpLAgKKSZAjt2DsCX6UaK",
  "key49": "3pVj5AAhy2mfZrhwBweL6hpjBFUj9QynkV6RNxwyAnFMuZjWf11jiPASq6kXB7na6z2BrYTK4y9K5qnqz9TjmCWZ"
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
