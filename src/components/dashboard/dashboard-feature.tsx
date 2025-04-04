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
    "51iokhEYXjrbs1VBSwzMGBVhAyDXMZsjmaZprhs9CCJq1oL7UabpavdP4Ka7zKpeUdVtzYSqbUXPwxavCU4RW14s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R7n7K383zgf1AJsVzx6vUimcSHNB6aGBacMRgGhrMBVddup59vMALLZfttEAjNQyjcDLVqNWCFYLsuh848Ndy2F",
  "key1": "3aMR5GQdRLB7uQmCRW2BASBxeC8opbyJFQgUtf2LGxoqgWdMfaiCQGxarJzD7c3q6rczn22jiV8cQHsPsi1dLhMw",
  "key2": "Buc2k8h46q8wsJg3JeLw5SMiQPmNvoD3gdgp1wUBJnpYu5MzDt5pCK7dKSqteGVtWmnfk2APeKZ2N9jBenh3mSr",
  "key3": "4rdi5FkHD1ACbZkswdU1Kouog5ar19sNYgWrFxVnGJ7kJDKqmGCs1ArpsNXGGodtadBF2JwRuAFBWut4KAsvQyvQ",
  "key4": "4VSGjURqsaFZxkJPMJ7GicGvjWPuJQwAAeSKQQVdEwhTCD1NsCxWhwnbbKE3gNVvxaJWHm3QgEVbWpjaYBuBuRVt",
  "key5": "46kmG1Zwcs4QEJQBFxNGMAxRWchqU8x39dkNAK2ncdJdASZ3zbNor8r4FVuxRwFAxGURxsDsQKstVybR5JdLeNe1",
  "key6": "2DLASVSwnTQrNBGgsY8juPuQ2i3sgYhzPg1TiTnsHMR5k3UvgkbCdEmpqxajCMShckteyfsR2Ma9ZCMWFCm2ekox",
  "key7": "3CPhDXDrQv35j5J5JhxfL4pGmzagmG8WFAXAdePPAjR1e1q1DEFZ3a3nYmJfXh1h9pWjG8WLaNu8c59A2esGFbgd",
  "key8": "T32444ZZrVxJfr6prpb9FAwXtL6eshnhDvY47jDPGq775dwn4vedjnnAGkeWTULZBMUheiYfaLdNVzPv1fFAffM",
  "key9": "5QqvzKhN4RHsuYmXZXm7gGTLr4jnKbZBnnDUvG7vVy16hJmgWoJwhH89BnUJ1bjNd1x7Pmcb4MhZ2MunGiHfdtHr",
  "key10": "4VEg2VtnoHALFy32K7CK8sL9Un9ZZJBk8H4QPoZEytWQ7mL7NqJuHGUTTXek4ru1iyipLB6qE8V31jnTNK7AsdAV",
  "key11": "56kKifNv6sb869PVB9eNWx41UcdCN3Ai9aVNcVV6gfirXYM2WjGxhPbTkpzGt5jWvxJ8YPVyj8Bib31GWeHHVja4",
  "key12": "2cchJtPWAuyNNjS32UMW8NyM4ctt8t7MaDF6tJRguubCdAbv4zcThpM2s7kgMCV4DZw92WVwtswWRxxZJrscR5ZG",
  "key13": "3SdNebLzwfzHvNsS5oNC1J13sotBHtaEWVsk7i8BQjACm6kLP59x7ww8mvo6tapRJrFcmVNkKWSzqmMBCq3rn2ov",
  "key14": "4nM66DaxC6LzwbX7GqnThq6JEMXcAJJWnfVVM5qhqt4341mVFKDU1nkRsCLADZbFiAEErGm6Dzpi3NqQzk6mj7Uw",
  "key15": "5i7QrfnjuFeLyK2cT2dF7N7ZRdhskA3xSTS1nXqmqyPgvuuSsEpiamG6uJXFXcYr1T872MsJUu9VnXabDjtJzfcd",
  "key16": "4ipoq2tAu6CoCJGNdWHq47ahbYYSkrNLJwpR1h8Fp3rxnj3c8tdcf6ozFM3TnZBbNTAX21jtavHaPc5KLvD2i5KU",
  "key17": "4ekQUY2VAb9gDn9HizGSjVXNM44d9nvqyVvpfHvb7dCEvrneSzF1kVv9EeoXmSc3dCVeFLafwaSzvGwXDQqNXygz",
  "key18": "4FUyXTghTXjCuvL5uYHTzK54mJQQgMifx3YzFS2DY4TkdTMiM3sG9oPNcvncX2sVxpfYhEV8Skmd3Ezygs6y88UJ",
  "key19": "3oH7y1W943r9qRcwzsob1Z3zk6U6zSgoG6y7LWrTwBuf9mWTvyKCiac217fQZUpRgosYC3XfR9iW8SUY7vM4AyGv",
  "key20": "PtAw9cHqa5eLk7GeKX7JChZd8xPefXChAvioq7tBBADCXCgSJ2T2ZK3CF66FEKaz3pHkqSAtLgCXE2WJmKBjsKi",
  "key21": "23bwPT18p4SVKNkrGMwhgk6bRmiBob4dN1QsbbepYgdGnCK9J8nPQKvx55aejSFjWN8Mc4xyrYEbDkESB1vq2Btz",
  "key22": "5ocCgdHA7Dwe38XegbDYE1ZnXFUdH78M29WesxM9eib5cxPXvER2g8MPz1aVNXSXbEczpmoeURyNWXZ8wTi8cDcH",
  "key23": "2WqXgY4DHQCx5ybFyzj42iuaKnkXftLQFVjBfEYCimYMuLbvXx17T5JDp6x2LBfMdqwrF6mJ47J6u2KrmpJFWuiY",
  "key24": "5UeFpae67tMAfYSBtTfR5HoWGYjECiXny3n3QjAR4thtaLHTe8UE1YWtCjx4YbR1xdBBgPJitJ5yTUdtxnMMWLbZ",
  "key25": "Qt2eKgoYXohXDuztpbMXrqB5mJocFNSQoLnK1W1o59KJPSF3HVdBZ9MeNaAbChSRy2psxNFkRWX9aTw6gpTF4kn",
  "key26": "Vvv5MpvobUKPhm3diz4dieS9r9ykqXcZoGhQfNj7i95uvXKFgme9ZXPTrzXNbrmR9Qit8WZrJHKJV3tTV83NKcU",
  "key27": "5rM5ZsvuNpWPBXUDKkSs8LcP4SxKMM4XAFTq83J1aEgTLwHLq1JVjd4iCgHEWB2nAbj6VN8wqyxKUpD1KfiP8471",
  "key28": "usXyG2vALjVBo6Jn7QUNm6VSdKDVtSjnYYFrYto1gog4dWjprbx5jja8HUft8cj3UMwVfGNTYxt6zC6dU3ZMBZr",
  "key29": "4Rkv9xU4YyPEjGfHvXbVB4VFupr2UHZGNyGesL9RUL74D4SwrumURwXV8XRp6DGjJoaawmmFVPxjRNhXH1rayzFf",
  "key30": "2WJTvjaQRoEsaeBZc1ic5rEaY6z4G7UjeEtyeQJaVYacNNdLwjPFDGcn8UaWHJ6pGBZJnqRH4bbFhuUmsggnk4Br",
  "key31": "4mufoDtEwh8TpW1wqrRpdo3FcByBiaa2ggmXJPe7NYTtY7FmtUTePjk6YN8q1Eb377qTPX7DCsGWv9eY1UfbKkH8",
  "key32": "3t4xErCYS2Cd9Q8JD5K8biLK9GPwNaQjcCbRcWXkgpvs4iBzjWteWASBoGWfr293P1TQvcuWRPdNEG9R42HhJGHR",
  "key33": "2pTxBAtmiUyBJi7N1Z4CVmdyyEmCDTdTqh1WbMJU3Vi3DXC4LWhJxCMFUpg5aZVYRWuZY6JktgCVVM1oFLNmbUqN",
  "key34": "3PSK9dtyjwXt1rFkDxcZiPv2jyyoaSz4uRgZ1kJzt1wG2mW1yvVRQe94F7gm5GkytZpRLMx3TcNgNvWYntjwbyNM",
  "key35": "5ZZ6BUci3pEG9PyJzp6UgzK7eiBgwirNgSZMoEZncwn273BGDDoNbh6pvMy3b58XhzznDtvPaSfZktZph9TgvJoY",
  "key36": "3BEm3UTWXh1f3DR8WsRza3JFSE256Rb3uKkZRrGc2Q7VSS9emyZeVw9NzwufmHvD7SGLAJNvnxXtFB8BYM3CDjnf",
  "key37": "2dQ3iRNTmhKLhLcnMwpPLCorSfBJbPNZyxJyAtD9Q2TQmYwznSajeV4uAX9Etbto9wKa7Whu7nDpY8CseYkKuMPn",
  "key38": "2zCxDwiXt3k2yYKmvyUbMcckSQqLoKMqTT37XG69zDxUvYePFAL6zJxPehDEKH4QUt4DXy4Cuxa4TsFBxgSaffNs",
  "key39": "f2Mgy9yui2S9tJ14XZVGiNwwJ8hiLke63eDzfvAvyJ3CUMkvRaP1mUE7qGK3VosVfP2Qns24Yy3PHeaacbuDvfq",
  "key40": "4MyNNLrsd7RomTiJtM2s5ox35fEATCc1cFJMRyW3dToXJZojLgTeaCQQFJGYUJhewYn6nnFXjVrVs9EhsFQiwT41",
  "key41": "WLGgRouSe48DH667D9Fe6svrHntFxA2Wdm1CZGrxHWJ3wGb53LD2EEEYSyM9f2wg4tQRu7gvKtekhd129VNU543",
  "key42": "5NsWAoTb2byJErxjWoKjMBQYCoCjQS16Jvw4kZL64kwNrbd3KbXs78ZhxLY22oZByvy8ves22npBLwng8JbXL3va",
  "key43": "2ueJ71A1rZd1gK9r9N5FxwFuK8bvQ4dEtJU6QfRnHGhsbb2f9Uc2d7DJpJrQ13H995zBdjBn3y6ttZqV3tq2AMS4",
  "key44": "3V8QAkoXvzrx88Vi4Nur1722PMQorTUNfvXnSQE68W5YkFhTWs48w96zSnp1PU5ghCAtMUNSLDGsiGDTM6dEKdGM",
  "key45": "4VLYassH967L9uwmotBjwudtuvayLsskwcuynn7WHbp884fPyB6NfK2D4ECF1ehsbMrb9otqD336yoV9yhTAhUqj",
  "key46": "2UH9oQdBupFC6PDhnNRmC7PfB5mf9aVFfX86JsCoZ92btdSPLoKeUuMLfnSGzEhvbQbGRN1oLBw2jVFcuLU9BRmS"
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
