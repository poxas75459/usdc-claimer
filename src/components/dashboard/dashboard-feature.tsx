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
    "59TZdTaGus5X74Yu2sTHejkaXqGoPm9bXEnKXqE8aCnVH72cY93HdxwjVHwMUcggxJQAHSdVKVTP7zWunYhXyg3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hjTKudSNo4CnqAWZinXcsTmG3zKoHiGDz7SZ9aWgMeJjnmaYym91X8R5aqhqcXuvcaPF7Sv4rhw3wc2N8uTZNh8",
  "key1": "5bozqu5MCJWRvJ8KR1MTw2DpL1q5on3P7EGFAsGoaxhKCiJut6PidrWJHNbUr9sXbdsEfdQkXJEYC9JmM2TgdtBB",
  "key2": "3Jcm5PbbbEWAEjZ2UfVw19SwGfGVqrvRLdg2PCiyKKMo9gZFhRnYyhV9SUxBPGY9URKrAGEBXYVqju1RAjbm1B3J",
  "key3": "uLfXGazf9iJ9hyJ4XtDMnzFmXD55LTbVB2GyV11vhBaVn7XhDYnkH5Wf2XyHy4vkAVPfbmCsCSz4byFN1pbPx9P",
  "key4": "3za7p4AwsJpnT2JyribjW7NYWRmDdk81rQp45FKqnv7JEDmHpwvpvRg6kWrKwTD2Ct3ytT4Aw2xqhbvRtoVDQYHX",
  "key5": "23hMzh8VqNuHhsj69dH1cktM214ynaq5rhJ2ZEi4F1MfZHLqZta1Mv4nYsAdrbkDwPMAExhcucGCURyuzGffy2LB",
  "key6": "2FjCGzNoPcrY5jpy23THee61KE2z67ev39BmXrhni9HL8r6QzSQxvAqW1gFVzD7cbYr8DPB3hXUzqyv7kooCHWGs",
  "key7": "VHEmb6MGxbKyouQTUcepkkg9hDvvTisGFcsVB2potHmhwZStSbWdUa3uYkbePkvPpadb4cWfphrbtmCP5EJi2wk",
  "key8": "5EQAG7aBZkUPVTium9zEkHCuhgG2Zv1yChmN3iii3FHx9d1gPuNyvvJm6FJ3xv9P6BQ8VDxw8K3Wtosw7kavEntz",
  "key9": "3RW4cCFK8XhL679SaL1uAjrydv72nrggCweSYwF2QpyYc669wSBsVYktRjT1S9cJtu8gwMYPNoUcpymG8h1txBGY",
  "key10": "5oA5Wf4fSqr9eouR3VZ7xKALVrpzUd59fF4i3SMf9npoEdMqnSkMZBJirfqF1HAYN9awm7G2KtM7dvkG2SQd7amB",
  "key11": "67qr8Ys9gyQEQGWdbvhUgqKyzvLJUZjXT1aiX9BFMFg54Dwtx6XNDSm5BvUDjYHNxm6DbzfweFgJ5B2suc4omQBu",
  "key12": "WXe5jya6b1dauuJGHcWzhgZebimjTKtVe5adjw6HBN9BA8PbYskjWQXdXKUw2vGGJxKAsjJh26Kp8usXzetRSVp",
  "key13": "5dptBD9qEKBrGnag69hZseiU9MwB5nLLzVwUA5En5oLU2PWgqWZzvC1uDf8771pbFLT9zuwXUWQNDbUGLbAj1AZJ",
  "key14": "4fTkgo5NgZ4X26vx6L6mjmv4R3hEXTY5xXeoupRUtizRhxZAskjQZ7yfufGaGEhic8vimFZP6cKYaHTzD7tETxPq",
  "key15": "4HuYHicRoW2PfmvxLj4H2VmCbbSm3QmNM463wf86cqcJpnUwCKFzygpc3iyjVKjq2N8FE91D6HgaiuobC7nzgRcX",
  "key16": "61JfM2dch1SHnNjmVyDWrbPyzpUcD8jW1eRyi7pDnVfeq1JK1Edz1fdHm6dnCUQVduRUiznMwRwoVExWpC57m6e4",
  "key17": "9b6dQTdyp3L9Lz4H9VW5CVYDfBiUuApWPrkqZpb5AQ3pFXxZhJJ6CkuJqddxHWk9F5eeocfMEKa6DhH2GBght6v",
  "key18": "5vCNmzs38tUv63rvgUGLVibNWo2awjMxSf3nkVoCeEDHZLo3sNd7KmKsEHWYZ2R2hr7YJFVfmoz5FqHcaaMF28NR",
  "key19": "4uCTkpFe1Ngk2tvjf6TZvJoPtEM1c6yC9BuN5qTtvtNsg1ghBR5peosHimC1CUe1gWihayGcrFFC62rrqbbypcpT",
  "key20": "5LghqExFCmd1D6aBsg6Hev5A3BEn1oZB3mP6do5BSabRisLKo213VfXwJss5qcu5jZexvFxpKyrSisVr1eJVA22",
  "key21": "4sDfoXbicXFTcbZ3eCz8bfTwH7gSroU1sivgjK7a5YRcQP2kiku6QMi8LrMQzbioM8kX8RpZwEuLiCNzi6U9wHVq",
  "key22": "4ZsCkDYWopSqrc8KfvBKhJiJivjwpmE2jN8WVhwgU3aAstgVCBTKdopnjwUqZfqRsvUAxJVpdHRijY3kVwqrMqzq",
  "key23": "3KneKuPfchERiGPcfgvF7V6P4iTd75Cmb3NHjJhwnXpTvJ6oECoG7Cndw5Axhw1NEbjVq6LEftdUcmUcVeoF8jGK",
  "key24": "4fa349fmtfii9KBHiTFfxnHQEynHw8kyXkW7zoRv8qwT8yU6eSceHE1od48JuHtecBXJf8rCXQVCL1C32gVxFNQb",
  "key25": "54cLA9KUwJsTJEyJkL8fUHfHTmCKvf14uNCqamiMYZPmYBboCPSYJMRhXgVoBwfowQZa2HoR7FdQBc4MqZSWQpJB",
  "key26": "2FZQ7itBm34SbGuXPA5HWQx7zmiQYxHj3Wz7BWS8a1amidDfbEPaLmQ5eGjSQJF6FRS6VYmJ9ha3V6b5BA4nT31u",
  "key27": "5SYs1T4vyi72KHchDFDC9cwKwr27n9xykdD9NFSrz4B6kWxvKoBnqhEk2P7yzrVpTtx7wTxRRWBGKuyCaYMKYsq8",
  "key28": "2vhYw5eX2oGT8hqULWyMBTJYnoyb7rbLwDjxrp55aUEjY3MSyfSVyRcnbKwvs6gpLoazu5ZjkRr9Sgt5gdtcg2p3",
  "key29": "5vgqJkeiRVokruRwBJPfqwHxjPJULRYHLHpP65HWLU7PN9JraMdBwuNmu3affGtAiahuh6CwrvtaN1jSZcMq6KAY",
  "key30": "Vbc5uN2DKKG1bJ3ygCj3CiGNJ6LiNkkWx56QhBguzoYBtr1gqpy7rYWd5VKgaA3piPjd5D2UDBECWhtcw8mxwXt",
  "key31": "rGkvRYPSapAbyJRTroy45YpvGiDxRKZqj8QDKu5kD886npNMPUSGMaYGtFuVcwW5APSq8daTh8GpmdLtyyyjpKn",
  "key32": "2J2asFZyLxXkzzsT3Ht41ytwWDu1VZsUN4imuzgmanUa17CC3qRik2NrSorkUJP1GBWxhP9287DjH7mfxt8GVSbk",
  "key33": "282kJ6zvZc3P9pzxcYoGjf1cFAT7PzhpZ1xDG8nBUDmCuNLXdYLRdxG34SmkEjAYvqvtWd7PPAJpt479e2RowuFN",
  "key34": "4GZhB39uLscx5cHKVyAweXFyNWowmqRr1ny8AEZJi6vCrF7Ut8PFKqyMDxWvC1GZUeVkupmsvRbg3mnKBe49TBiH",
  "key35": "5vmc6MfCJ6W5kcqGGesTyaiySh63crVpnDwrGk7j9YeVhsMzyPmi57GgoVf4L3zPV7GgPDZ5CQCD5bDdvbmaXTKz",
  "key36": "4hhvidkNZ9rfRDaQsPYo9TbotzQDXDqgAhHE6q4nFjWamVdeGRXsg3D7Ebsz6FetCELBwAnwB8D1stAiagohKHVs",
  "key37": "fiLeUDd6m3rh1UQwgvxKhGuJHGWm2DK1xtomLWWEWop5TU57a8gyd1bae3egeh9cZr7R36LLcapp5swhFTjWCrF",
  "key38": "3UJQQKrr6vmYGJjatEVy5ppoCV61RsSGusFCEwJmCocw3V47tc6RSSBVjyXVK2EPzeLfe94go4nwvvS82aXJc5ka",
  "key39": "Bc8ngeZYZ1BEUp5fa9egsGas9mf4UYwBKMUkVx6h41nqts5Xs7AxEqHzQ5pqcdseBRcwFTNrGmkQGZvxhyLVMWR",
  "key40": "wtRdpU9oeAMHpfSFnk9gYJWiY7g7b2jGLSfd616PARduFaJg7Y3AprmnKQnYmtnHKk6biyecJ3LuXk3Z1R1CpDi",
  "key41": "45WmHAWxXfg8DnXH6P46ew7VYuc2wbjAT7sAGVxHK2ezaZrDk6htGKHxsJSHLhxnFCMecu1oqTDzycVEHbE1MBP4",
  "key42": "5naT1iLTn7KZMtEwWZPKko26qA8LH8fU872phUdeR9xWNzRfRXMWbRsze4yadC2hkfudrTXu6UTBHwy3AGs8tdW9",
  "key43": "4NbAXDQE13HFBCX2AtE7zYAkrUCrE25AXdYCE946C6xsEqHMgydgzDRDxwUJwk4PRkHCBEouYjjF7hroMdxdf2pY",
  "key44": "2nkMWQ2VBE5THzmQJSRZcdikcLW1EgneuPquE9G5wAXLQ95AEphiVRDhfjgQ7VV8qRFWFMk6jT34TpwUzsBte14N",
  "key45": "2u4T3DrxSihrvF1eJLXkZwruipXzaoNBCh2B3Z6QKzSW5NSu2YrpbJZdmJkf7LZegSaEorgdZmM7tAsNZusmiVvF",
  "key46": "j9fXWhdyqEynyHyGZ5u9J6KhNbu6WkDJ72bAnozi1bKq88BVKphZUjKPzBg9PKr52yx1LS3nhqh8su5NXtUDAkN",
  "key47": "23Y1FLuzYZdtbxrXY3RvSaSaXiUF4tcxPEUj8PboNLqL3jvu5nqkUYxSRiV7hmKcQpnMc2C1zAXVNWeTjrBMLvFU",
  "key48": "WgGkbiRhX8a5x84czAjnCq1FpSuVLPhk6kSWdW9bmq6JJX6sdETVVNagpLhMYPZQKMtPpfHEWtAbLY8bnLakEFo"
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
