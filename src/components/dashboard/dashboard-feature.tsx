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
    "3AsGiXnB1V4TpakFL4syCEHAdmxD9FV4nfW8ArPV3XfyE884v2i2KYk9rJ76b3Lhhxigf2vo82UJYKJro27GNKjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pd3tHr3fc9ewPT1SQuFtmJu4axDp8JikW7dMfiQnQv6Ns52tYTcJQ58jLiFZsqa7LuCSMa2DfPYsJzqwQVQzu6T",
  "key1": "5djF9JMFQJhJAkGchykB2v8qAd6oRsBKE293bMoK8iKEviC4ow2Ga8ZyA7qpsgo2ENvRftvHV8YjoNo3HQG2KQeB",
  "key2": "5YoVA6CBZBx8PA2FfHHRMZp722RmiHmVworK6Kd3x47CV8gwdRxZyHQCtk58aRmNguS6trhoV6nssrV4LuJM91SK",
  "key3": "53GUcRP6xVnCLbRr9YptaPKgtDGhMYphCZroko6SsWzBhzQqekUsDAqtsbU8GpwxrbYJo3pkBPmCSL3FdhDJjXaf",
  "key4": "633y9sn7UauNquwaD3sx2FLDjnEqdiUSAb1QzA8ndkrtMS6Qpr9gydjnxLNcUfZ2Ko95znSgdqTTt2R2sBiGaSAC",
  "key5": "2ctDJfRJ6ZAhVhW4n8JyMhgx6EKaTMw7PJuPfJkwCyDbRS5sBXFDWzv1XhdW6Rajan2gxRUvNsZYRKYam1kc5V2q",
  "key6": "nTYwbS75bungdFDwTdqE431ED5Fmbqo3e13fSVqKyBqBK2wTpSBr7EYPFFegH7FbxuAmQPqSX3Kg35NDz5MusCJ",
  "key7": "2jksyXgd2KPpREKWR9r4F5mHTiJ1SsKyzadJLxUnNxn3ZD4gEu8aquYQdzHqqM845y7uJkC755mz71YtdQ1GFKtb",
  "key8": "4nZ6M3dkiCYDQ29RFmQ9YwiSkEa3N2nM8k7dcJFfARMr2UKfxf6fLQKTiY96W91mm28fh4cRjGRXeaSsEhrVVNGp",
  "key9": "2bQxtRc64AkHaQW2qpTKSPaN5mWXxBigR7hjRvLr6Zc4ocjUi9RWDaSBQBRLnf7EGGaKLLQomgxsyhGYVPdW5Bm4",
  "key10": "8JkqNJkeJMuDFFG7tVKcqQ81j6CsRWqy7bX2RGksR681PVrASt4a6NaZbczvhfMLVs1JvPKCzgxxG3furzHm6KJ",
  "key11": "3EqwsefdTBEAnvgHVCRQoboiKG3acQx5UABCwrkn5ApWnDPLX9aEtKQW9E57bgc3F5B3NkLFpd1xsGy7aiuhDSH8",
  "key12": "XpZjHRpLATsYSBHg2qDXPV5VWvgTqCY6Z4xJb1MLf41VDHbK1fRBhQ8furnpupvqvLWZwWy2aX4uEZSUCkVY3Mp",
  "key13": "o5RSERzhJTwECXP4rzPzvvAoVmdE1Ln7CwTv26vNCVTPvbEkiLJxoxaFvYmc31d428Vgch1jJPupa8RK4ev8jCi",
  "key14": "4HapJF7b8EMzwUM42rta6GPwzVnWbke6BaXysyYX8nxm8gvYYPy3ugb6WGv4zkTK1qibuHYH6fuaUcRmotiQQsCE",
  "key15": "3CLgBwVmagrqJWsbr8g9d6boK6hmHk3141v6J2kKioQ4RJyCHrUGjYgvNGJPvpJ2rFqBvQx159dCMNPyj1qsXDkz",
  "key16": "2bRWrgBXrxCHcPZRC4RPQ7CgYGEtvANUxVSkRVutCuqBDuEFzVWwqZFUf31nNCWitTLQ5YhDqX67SG7B54M8QmNi",
  "key17": "2EetWXjio1zLayuB4DKh2LJPhywdv5gasmZ482KrnaQWHVMcFoDCuw3uT1c5jfwMP3BuCLh4YuXU1ciWG3GHhd2c",
  "key18": "2uuRHqWCRnM6w6hz47rqJnuVpmEmaLwqh7QfrD3aWy885dCFuhXMET1BA6FCk2Qaa1EksYUSCtoCEqCEPFrQh8pV",
  "key19": "5dNN4yS8qmBJ34wCbbkZJELsRC5DS6mGLVfqvLG3kWW6MxGopCv5tyvYdPewhUzHZQT3dtdSJHUpgvxX6P969D1L",
  "key20": "3eFB24q1tDAnzr4oLRSjJsabXuCrFQQytE9EJzsuQpcubTWfARGG2MwsnSK1ZMHd2iLHf6UhvRmfyr8t6QCxAdGo",
  "key21": "4nnDzDq7u8xAupb8eUeyM4QZdS2Pt1fRsje2Dn14q2EVU9KFA3zue5hftJfB666ycFstd8SdHu6CFWfPB25wakz4",
  "key22": "3tZNdWvrgrEVEV5WHYjnn3Ec3n55EYiTqMa1vGp9UmjUMosV6egEDQjDoALS3KTv8iTb4cvJXEvQDbVE4XLiJCwc",
  "key23": "5ZTGwNzm7KGoLUfRZQY7M8yBnBVSHCjsY1V1rWb5NLaJ2ahsy1YCZhewRFDaXELHBW4Czv3X2tsg8KpEhyDoqNqb",
  "key24": "436VF99zv5H9T5EM4g3gY1xTKRd61kw1h1ufAqS2FErEewwW3T9LRgmXRAvP1Cejr3A7vFoD9dbvvRycYRt8xQGn",
  "key25": "3x3WGQTFDdfhqBcEFSa8ndy81T97iqByrUAvJRyuCNphgKjve9ZqYpKhBjTtbQqtzuSWAGr8RDXufnhgMjP7DBw7",
  "key26": "5BM7CzoA51Jexwo6C53SwnP4JfhE8CgLS2DTQf9ze7mijMYpanUNjDWibSuVYtqVjFoPSNo9bu7YxucrGYtZh6eb",
  "key27": "62XkahmvCkuLrLceV4oekwLk14pEXVjYhDp97WFmYNEQUdHhdVbwaPTqkMJrjNMm5hLZ5rzDdwc7ELdSCNpJVQEn",
  "key28": "57ay6c5JdtWszHM6KJRrVq2BwY3pZ4xVwKShZhG5cSqB2rAERDxvFkKTgfG2bgNeoN9Cd3MTK3a1dFkHMsyiNMpq",
  "key29": "5QNP2uHq9WxrCKrDDwET7N8NSM1vm4eFVB6YuDKMH2jq9sq3RvcH5wRGyrEp6QjM1MVsvrBs2XKLzH9BPbBSQEDt",
  "key30": "4yuf8DPLVXogGZfWHcHdqpLWapcRw2diZi11MEAReAmFiHhHHdF2T45gZxshFZy3dj3bJW88KFftSnDHeAQFzgm1",
  "key31": "hkoXwoE4LR4DwMpfKpLoCoKM7NMYR5pto19w5V4JXrDGC7FQ1w1ckuvbpk7BTxFMuFcECpTv6od875oyD9FB1iW",
  "key32": "X8Xc7zTD8eikih89DaHr3njyQgVFcQABWQohrduaQCD8ZJT9HJwmwRNsUvSoYwkLPwycXxV6bt9cUAVHQB3hFat",
  "key33": "2Eid3pi3jWJndiQbuxXtic6atJGDBsHtu9zVaCw6EoQzi1r6bRvJRBNR4JA3UhLrSXiALXjCbDwxj3AcZ4WA9nch",
  "key34": "Qn6JM2F1FVfsm85qFb41urwr5EQMJdaNfrsqKSZtGsWsC82MxZLVarDYjJYZ3EQyGsuTpkKPgG26NpUTL9A1mQB",
  "key35": "oitPGcWeXCRhHpeKdpL6ekPvnT2WBpw96Yyxa9CpVqFYjhGBGZ96U2K54ZgGPamJXRWrrQqycsiupt7GLGutT8q",
  "key36": "2AqYDcqgRSE3RLcLSKrkkgDnUTiWNi1sX6eJT2c43yVNoE6tHQD1MuCTCgxVNuKn36Et7G2LvCuAEDgucGUe6iC",
  "key37": "2yBADQTc85swnQLGcsAdV5sYC2CGTMmS5qrBiXtvqjYS3rsihYiCB3sNwUrWbi4ofFyAqP5gmcUEZLiqobx6Aqsx",
  "key38": "2ZcE25uGwh2asEwv1QZ8oFQ4Dkvf8FVgVJHPcnhHTU2xP9Eo6vvqGe4Gpsh6t9fV1RmRDJ9n536xkDiQNaxPb6WZ",
  "key39": "3AvQzdnkwGAtPLtpUttyWdxZHycPzdZPABawy8pGe2FvSQQqe6YK9JMdAe9A4PoMLDFvm2PF3HnE2uj3AtJHZDvv",
  "key40": "2GNpNKAjJUMbLUuhSnQuAUV9mcy7dFeNsYarhuubWtvXzbNJM1ZBHczarUg24Erazgn7si4kjW2PwLU8AuvZQ344",
  "key41": "gRMLNdDEfJrNhstm72oQqbB3FedDBvs2d9mB3qNE4HMu4YM6ieoC7tSgHUeeiYAEZR4AayHc712pSdW9UJZJpCt",
  "key42": "2S5DRxK46gALP5KAsQvpKjLqzXUgWL6VPzNEuxrU7667FD8D9GGNBhRdzcGqSJKiFUtDntFdDPMn6dvxDvNfJWxV",
  "key43": "f6ib9kLdqsNoFfWPa8SQFxTC8nYKvJ5kz9an12jo8RhzXZSR5H9gaPkG5yBgYDRcJcj8SGbMCowGTyZpWE5Exgj",
  "key44": "235g9ZDRstMJYpALkemA9MxBQDYgNXf7guVkkQrB1eTuT9Ez3q6aQvdvHgEdHHgbTU9ETgmyTfDuuzuPdLczXxUr",
  "key45": "3VfH5ADnfNkX447gVjHWRYNz7CaEDyPhyRKnDG1uoQ1auzmo1wnKwYdgS8dQA2Pm9H4FeichrTbWkbXXk3q2nMvD",
  "key46": "aMjmy4Y4fjtc12PgRMBNhTnBftV9g78WYCVgU2AtvkBA3pDdtroRoXx1nGmgJ852vWAs3AdSRRhgo69KMr8MC64",
  "key47": "fAAFLsDwKKosiQeRUuKySwN23rNsZxddfHhVSSXZfS2Z4eZ7e1WLTjqVS4iVBwC3TeXzFmfdN3C4BT74KoXZufG",
  "key48": "3XkTccNVErigy3BKhwRF8LEG6bDmDzjuDgycn723osFpgiQRzbmaxWqrN6Joa7AtvgATCGfKwrz9URXwjXXeXaTb",
  "key49": "3tc3rzL8ERN1AxGogRutfvZi8sDht1RwYErkK31zrhZVgJ6CwVYVcjQtzW5giZvDmGeV8kL3P4UKiMtmBPrSxJmP"
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
