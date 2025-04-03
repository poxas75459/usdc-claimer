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
    "56gSzQodMvXd1Xb6GafY85AzGczenG72YZ8K3tsvngwYYfiy9WptMBijYrTVBKutt1FzKxdgDkSPpqsAZPWSQiyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5qzbNMj2XRBUujU46mNpiDCAK9KhsjqqNAs75vPWrvhmx6y8867oLxXyJeegmaih2rbUaL1njNoWpUdKBp6S91",
  "key1": "47P8GrEY7WPauqftx8WaGcqgzkqZ7TggWu6GMicSkLafuYHqA6t53Ggn2US41QYzbDRSQwieyRCH63QwX3KEQ62j",
  "key2": "5o7HZcGprJwRSnCDHncE4Uc8rzY9Eiboex4Tbs4Ej6TXxcJZQQobK6NpZrACbvWweSTPUyKEDW2nkq2XwcdioWay",
  "key3": "4z355CZwRUb2x96pZR72aXLy7W1HNKrXhaN9hen2AWdrtJzMzQCSSPpDTF5S4oTofursLZnr9iupb7KQa2yLotX2",
  "key4": "44wnrz2xDcN3MuwWPCdyXULgJc3wLdwjbs3gLvugQ22yysAK7VFnaPsCKWLpWKGiJb2iq61mN95kYbAcXFyBkeMS",
  "key5": "5ynXDY32AtJ9Dxy6wu9C1VeWR1S43VDY3tVpBz2GL6w3WiEDP7h6aHvkTpmsgkcJBpGyRuEF5Mjvc7TCtpDQXHzx",
  "key6": "5xr7upSRmSXrKRYFX9sePUoCYNqjMwuQEQYPPWbapDDVjQAciw5FByioKUBoWQeh66hbTZxshdnrchhWRf5cZcbn",
  "key7": "39g5CFBsofTgMa6EzSwvR2uxXvJqraYUPBDUjJQYmNjXj9FNEYrxoDWt6q4zJeUuJMMRmd5PeSK3yQXeme3pm4DQ",
  "key8": "4FoZeGBCVHTEhKGqLKUyFGguA14F6Xr6CQEnqAEwrWgaqYjW5Fyn8onfAzt7SNyxawrjwNsqrrU7qS1nYAgAonNE",
  "key9": "22sJ7jPUh9jnsh2zw5PSYEtzuwK4SnQsqzSoyPikPtZN2922RpMF3QqSR4Mm3eKjyprVBmmbGKT9t2bvDRpguDmi",
  "key10": "4U6whhsKh3eQEceRE2w5LYJhbW8nkRPGdVzeCnsS7MJfNabSTGMi3w3aaSYSxhwHL6LPAXqt8NxETPacmUDZdj7V",
  "key11": "4ZwZmKFuhy7c9HVnD8nz33JLnSexTsaWzHj3w81VsCbV3dmZ3SNhs8FLDB29yZ62EhvbsgUZWpmEt8Sewu4zHfRM",
  "key12": "2yEDcosiW8joKTHEZLwAvsL2tY1nnDbQdUejn32uiGp1iMt6gpt1bqCzNGDm5gaLgajUnwGWzQ3VaLhJwjkAaLPX",
  "key13": "2ztaNWEKhwrQBgDv6t1iTceQn771vVyQtycDvresnxYE3DbAZqFto5iP5prQUupMNUKY3mJqtJsgTj8LWtRe8N3X",
  "key14": "5n7m2aHH42zUW8oxARGEuegKkEXma73NnMCdTFNv2gAtU8oi3v8TvRwotiNgS5rUfRyFZfgqbPjpeVoiLKXn19xj",
  "key15": "452EW9chz2YECx4j3KzBNYGCmM6KKN62LBwwWDscfWzJAeR2mjEu25mfVNumMEn4PtA3nepQsvzi7TcgmUeK1Lhq",
  "key16": "34fjQEFk539WSvSnf5DUeD5JniwY9n4QBUjifp9DtGN8UAxMTHL52MkeTJqsY36xTmbytMGbyVgcCkLUkksd5gCz",
  "key17": "aJUxJCSYbgR7oLkE9ppvpbzmE49MdExUAUkbFTdVVVi7jd7f8uHLLPnUo7Z7hhkioMgDeLojwbvC8urWDgGh5sP",
  "key18": "iyqt426HEQ4okXDVfcNNJQ5ma7T8umUXGpK8ZNstoNNcVMvn95nb8yPNQ67NBbT4YEbTyUB9nRKYYdMxNmF9M81",
  "key19": "2LR4AsGHfJYzc3oXPjknPKKkM3mTNvrAF7FxNiPPsNEBkbRuCEnmnBF6dbDpznqBYxSbUqWfpPZbPxBMNZASGtCb",
  "key20": "JfGoM6txjpHkuP9LCb5MVf837HGfh4SqquZUURWeGdbDw9LkPTeYLtCJYVrmNPNhFpJxzgtKVKjCB8QpjdWjsR3",
  "key21": "5CtvkaLyoPDtx4RUxu39YHxEBV6oGuV27gYxxoUqTnnTg412wRVKXPLgNZ75VhKwrMzcb9Ggcgz6P9Ey3wCJN4vL",
  "key22": "2VGdH1SeeBmmWs8kboBsvn2oSgdM4xD7EFL7PbYDcuEoAYE2GNPaFnV5gb6z2Zk4LCAsD1mXJK3WaMzZ36WEtMYe",
  "key23": "3RhiyziJ7eNLpCdNugKwrK3tK6id1HBB87nNrJyT3s6xJeugLem7wZNDS9WMzkoHwub7oe8vbNcSibRNPAMPsWpZ",
  "key24": "3CYpLa1zQoFnP1rTrPFUQRPb5UrySw4ZfDpurXkVSGACofxKpN3uJ6noB2WYzbmDU3ZiepCX1NMwPF2r4hhhhuQb",
  "key25": "4QyJT3v5A33FrUhxvJQgCAmjPriSsCiouNKPRB3ArLw2ULVz1guFn1PdxMefcxxkftuSjN7tnZ8WMTpmi5kqiPEZ",
  "key26": "2HyJsHbhGi1u9DWVuMrwAapNLAHszdJqaBWMaLXwGVrQfyzQMJgFW1UFiJ2watzBzNQ3pGLLirozSnUDDVnzCmhE",
  "key27": "oeGUJzcGch9HT2shYSHteYdNhdGYZt6NM2pkozCGnrrPLBhhHoUXKPtyRYKrmTYSFinsUcMgvsU8HS5Rrvw7DAe",
  "key28": "5kReCPuYUVT7D6vkSDUYLinAzPX5i9Em8hUow5R4v2k5WLCTK8sxFgzcxGHtZ6CiCvmpbYPtrgoWx9SQ8KUozAs1",
  "key29": "5f5gVoBgMR7ctA7gd7kCmKfHHqQUFQ9sb3zgG38b4h5VNQ9BnwRctVYmCcn5XZQHi1hsgJE5pL4wAjnC7v8XbSLG",
  "key30": "eZrSzcL68QyFY6KLf9pshrXqPy37cVsyFu2GaSAdTEMaCxpFjugxDv6J4Wbf7zfitGCoYpyzq7GFiJJFfn3KHRx",
  "key31": "5oycaou8G8AjaYMCAB5xbQif8heEWF2HzMMsP77opGSvkb2hvB1zDisZaiGFAVPH6Xv25BUo5BpB9rvpBoi4axzT",
  "key32": "3vSzvy5hS6xwuypatjEGoVmzgGVJUzksJAdxCwHmi9BFSqG5z9MjHF7MA19EL18bFXUX12dZTTWHPRAZEpmRDWxw",
  "key33": "3HTfdwD9tVwi3djrTW5rUcbfaVMNYndyshg2AYpUEXJXU9QSRRN3BfRwVt1PJEb6dfDt6L8rJSjSvZugyefLeHr9",
  "key34": "YBxGFszruG2pRKpSHTfiwjtMH7YtNaJAaJcfAfbNd42rry5CM4mwY9jrnjVsHaGSaNAqdWVRcY7But363GSvFS7",
  "key35": "4t2xmg92TUiKqquAcZgjZTjZsSuqyGjExSukJ7Vxo4af6jsKTMnjYeVdrq3fqQvEoUa5yYJy8Rs3t4vn49Kz8Qaq",
  "key36": "5BoA2St6gydk5Gho8Wdyynk3xx4SKbxTedMJSspm4urUJJ3f8VpgLD8DQmJoBRDUpLDgjeHTYdmpahZb1KX3pnaf",
  "key37": "32GisE7YetViijQ6uPCa46WjrQ9o6J5vHyUzaVEJHVwS1xFZpb29NEDr4YoCdPkDyeUr13TrQRv5YeQxB6Gn2eYG",
  "key38": "4uWK26NqPjLqM34WJaXUNt3iYKC3uAC8HKwijmngDEhwLBeotciqCUojbBjAEUmceRjXgC6pDQxfDFmEi99U4D3z",
  "key39": "2zvWWY29tPSkK9km4JrKx6eazMpx3vFPFEQTq38NTQ8AtpPzgotKh8gHYwYCJr1fcjrGQiiTwUdv4Ct7yRXkUBk4",
  "key40": "2QGsRqxTc5K5DJT4J4HVxE34UBneaPpmtk1soYKSD4Zfu2nqzsKiqbYK28NsbNWgFRAkEYptEZpLKh9Ux4EgTA4Q",
  "key41": "3zXToLPu8VpXaYMSdjWBRWp4bYKzMBjLSbjJsTZ75YM7HqLefj722r6wPUXSQgRVtWtV96ecY6f1zEvdziTD32vV"
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
