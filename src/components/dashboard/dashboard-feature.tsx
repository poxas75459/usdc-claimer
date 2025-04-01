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
    "5APqSCHeSqmgSrXeS8jVeJn18bExvNdLPApep2QaZWg3b9jDRdsKZP63rcC4ZQGQpXCrezket6R6WgxuwokcN6qY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWCKRw1GQjPMWXXcwuPxtq8zL6QX7vwiwWt92WnUEU3G4MB9DH6z4iFZeEa1cNkLjyrECBrULBZZFz6sqzF4JrR",
  "key1": "2uWstRuTNQBAsbomsev7cNTuJTyTfUCWTmWgYqmWNPFhQVA5x7Ppvf4MekWAv479EvmMr44xtBNUFTMEaaXDdMr",
  "key2": "3QMw4g9wyuLhz1Nfy4LMnxzGZTd9duhVqroD6jRmgieqp4mmcBmnzMrDZbP9V665zMQVbHDmoJD1i6Q3gWTDMPXA",
  "key3": "a1QZfsM7DEnoSmT1kuwMY1JWjcUvkSZ94KogbGCfWFvvMcqSokbV31ASrPaFEri76YZ2dn1pwpvZ2bVCgQTJktX",
  "key4": "n4PC2FpStxk99i1Jz4a9G1ApDsrPhzkQeC6wnXeuhyxp9f5NW3bhLwEucQh15d1FXz939Zf68vqBP1vtmjWaW7B",
  "key5": "pXbwPebnnTNNYfC3Gn2wexMPbXRtEdP9B9TRuxC5oWe3ESAodc1LKEnBwbwMfnrrNkLCLm3PQhsuquKPBfT8cKK",
  "key6": "D4BGcpHAQPG4V9HoCpNB8YDPwK1UhMHWS8t94eyKjQwVZHnSbMbNrB34CPaYmTMNk8qwuCNieXmZ4TPzrEYWDQy",
  "key7": "5uBza2cUTrvzx7aZYaUmPzPLthLZX5HETUp5TfYe7DiQNtn6U5LimmwaFa5y99mU1Phi3S9YSR7R1mMsi9P9YDSZ",
  "key8": "3n3mDsKri54RGXw1HfojuHeLjQm8JBUJwTUiWZ7m1feGMQEyvxVkbcHrWi27Rke3pK9Mh4tEW3GbPZPnDyf9ckwC",
  "key9": "5pib1PLipkWNt4BT3D7prcoZnWKVsGK4i7P4eCsXcPNTooDDquxHLD8T6GjmpUjiE6ZabWnRZY6zzpwvrebqw35d",
  "key10": "wx9BqrHzDZ4sLUEJrXzBrcQC4AW9S473trpmuveXFVvkvsffAH5QiapwQ8FwLFC2v2qJAUo2dqEnLeHUeDTV4Fc",
  "key11": "54U4G8iKEuZuxNEAJ12EwYrRvz8ZWHtQLV2rfSBH5mBWGktHVsdHf95M6ScNz9CEWgq1hYJ3PY1oGzP1VnYRtvgj",
  "key12": "5pSMvYeWYJQfsxauQTAXuXXShws9iYNN9afbVr7R75mprnrNxpNAUEie6WNjoSXMEgyNTwpF7FWBn9PNQf81W8CP",
  "key13": "4cfEPgexAMi141Sv9EgctgmZBkwRC78Jp11ZmfBcYntryLpq9234ydSYzupe3eqL99tXfji5AWRCu1xkRzfX1LQr",
  "key14": "LtywhJsm7hYPct3ptxmXuz7Yr9E5cZfvLUNUTfA5tLUuVgQhda4JyVQkULQGj5iaYhtgLyAqyh4hhisocoaXQVW",
  "key15": "343pYZutUrAd8svFnquuVM5twwrnVgDrGydWmtsSX31aCAbnFKFSBHHTWvUUfx3oFpdircT1CpQ8ES17Gg7JVrfd",
  "key16": "3NaLvs3wXVcpgxx1DUccQ22F1tQMF3WhQQbvqxsvsjtwqdrSfmTFmtHvhW8jXQBb2zJJLP693PwrtNijzk7CNEvu",
  "key17": "3utwZahZWhAYABJGpv65GCuY3XStS8o8uutxaTsWnUPZbg7XQvgE49zZZB5CxbuWgeaikSZwDGJk5EieWCxkJsw1",
  "key18": "7ZuEJshzeuCSzp98kgpCXu7wsxdPLUW7SeUr6cuGygwnccWJwLBneRebn6Nn4WQZ7CYy2PCy7cWGUfPt8cPVYnT",
  "key19": "5mTZTsTrZMG93zicA6cR3sGxSREea3JQv9mk9oZPE3FD2LywMdF4QjpouWwbk57VkH4M6ooSHuy2piVSTT5HVkrT",
  "key20": "4xbGnZbN2egtebYAQSK2b1ZjafXfDw1aFSHesMyP2kpDYGMWLKCxQrsswyfwqF9vRKaGKKeSyzHUAqR3sN8Bhy6R",
  "key21": "5ksiqbF1n4zvUt4UaVwkc11SD4YdNUQzYCj3wsX35MqmjKsYuSKp4eeu7Z8GWsRuMogMaweyZCSQ3sn58sjCRqtb",
  "key22": "3V2t4AD5uNraPwMAGBLHAUPxgKboPCyMtV9wFyphig9pwmTvVQSyjEbhoUhskEsw4NyZEG5W1vyc6zHk3oDh6jLS",
  "key23": "4qUmdqxVTfkj5W5dC6zXuH6jeWZveYbxrn2rYA3uZXnAj4J1U3XpF8aASftdQiehdmVP3NX9GiRQaCqq5zT4RTXt",
  "key24": "4p94zzDBpc3LTkd3D9DTHDbTMLfA2h7vjkc1z7VgXyfoSJW69jwe1PsKZ2CsNKmDsU13pD4jPF6Kxby5NvW4WoBb",
  "key25": "5sJShgL14wdMNQfkQ8cVxsPUCXQHTz3C3VkCTjnVwqrvNj28Ri2SwNNsWAp4UaXpiHQKZUAHkjpeUhtKj49PkynV",
  "key26": "2mc3VXuCezcSxzgJQRFy4u7vi3tAaC9vmhDD1poaW4yhqTKJbgo2Wi9zv1vRriS967BvU5NVpMnCVZzjTNTts8Ny",
  "key27": "5JhPp1eieJ5cDuGvDyXUXk9CmACALhYxdrNof5kbsyAgSpWm8Rc5Vp3SAXNfEEqFd75ZyXxZMy8eQaH8eDmqt72M",
  "key28": "45PZyr4SWitW9JgrSU7YpQY9n42KysaQ9J16q2qSrttFi528sBVtPKDbEeSwusVzdys6GCkEcunPFJZDmtQ5DT3Q",
  "key29": "61ykpakn7onv5jFuZk7fdUmEFia2nsMEwTbgskYXDN3Ebzz8ZscgTH89SjFY9XtnNnrCdRSRrKzNiZrRh3mpszQK",
  "key30": "2bXdVHauZP5hCWeMMqTQVF2Sxb4ETZ3uyGJq71zn7ifYbAj9KxJziQXsLh4y4C4bCT8kriLw1QDP3UHaDAyMSqS",
  "key31": "5h47PkhBDF7c9NtScK9oLH3fhcCn3wUDnLdfG4752xTWo2io7iBKR4tp85GdJojq3kjyTzEwgZ2iSMDUKVjchJvT",
  "key32": "HeQmaPGYBwNXTAJL3QVX4qyYXhtm4rM3Dh3KjGNEeD2ZzD9XYxor9zcqwUgdvxc4msY95A5taaPToxHGv2kgu2Q",
  "key33": "317yo7x9WWeoUziD2PfpnT9htPgKtnLgUma4yCiXSwn4E8bBUxZePFJ55hXqChYF7wUSeaXJSN3Ccx872s2FkUvc",
  "key34": "hb1kbMEy7JgHDZoh5PhVAzWGyWFTxoZLg5Y3Bs94kBLLJ5yErrAqTnHMHh4GvqSTobrTQcdhcMkEw29yv7MarJa",
  "key35": "2PN8LFVNtYgPd2qdxSX8hDQkmFHGb2ttkz4nfdGrPGtwkyGKex9QHkutYMEpFCnoh6TNapEckF7xDYGzdHoAPykp",
  "key36": "2xppzV2hyxbdT4GVwJdjRw8fecvxgbE6MzKL3UphNGo7gvDdqhG6gKAiFywVZXx8M9V5waZYoZTJeGTaqrRJ3r3y",
  "key37": "5CZweWUAacR9cKFaLkWUUvkPgCrcJ9Epth4WxNk6He2renb4prXfRavhcVz3zyes3BuUoPL5txeuKhg7k1n1RdA8"
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
