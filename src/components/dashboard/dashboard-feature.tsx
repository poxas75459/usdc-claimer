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
    "qrS882zvNHJsDQWm9vG57qrrmiUYKfzfQzUJhWqeddFETBdzgeApAFtYWesiiCTMAd7LoZAoaPLxBb8NecoL2Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XeaqauZu5jPeMr2yYVmENfKuA9DFwmXdrkpjPBrR1mHG8tHHkRsEBYCL1diPTLQZkZTbE9onqq5gaA81tuCK6LH",
  "key1": "wBU24RA4Ke4rxuSXZu55mmQeULssiVPm6bViHjmmePXRjiCWpy5vkRzGqgB8JyBHTVzQxE7jjfv1dNiBvXZcP7G",
  "key2": "4w9NMZwrQYnxyYcf7XEEmwgTn2nm6pfXUrLdSX2JPdEF5LNbHNhPDH9zUB1dkfjjVy4UGETXY8yTdngczHh6ugEK",
  "key3": "4AXAbRreJBeBrq9KpQyJHpspU89b6cx77mAcnxtqj7cWmsGeZoKpvDeVG8jQJ2dfsSSHDov1pJvU3DgDtJU4U2Am",
  "key4": "5hMPL68XKqtQZ7BcXvtECLmJKFpUMbMMEhBCiyATCeWgzzKB3sJPnUjXEzNX1E475FQL6xAz2VUX8WaJJDAZXig8",
  "key5": "35Kkid5sWrKfz4ryk2goQiA6Mvu7zJa91gUfcnDmHp8ySwxK6XvmpmUTNxEcFMn65gbUQHGbtNuKeLvN1AiNPyNE",
  "key6": "56KZ17FACkw8HgRTLsR5Txf5yKreNPvN3ADguQqcAdKsaYhYeSuB6hLCjiwutK52HVcmHMDKWjFZjdKwpmFWaFhi",
  "key7": "TUmuxUdtFaSdHU8rvZkMGXyf9TGukmX2eyMpQQhoerbMoLUnG1hxhn9oCgs6C19a2ba9rJbGraT1igEP7fjCxQ1",
  "key8": "3kj6tDbYfuWM96rpmdN7gfLT3sp125q9KwbAXz82DT2JreoE8KMZyH7VspBmKdoqJYLU5n4HW7mbNmbXNG9mBQqX",
  "key9": "yr3MHTCbrUZB2XCYLWn9XZiKh9hU93z7GdRhaRBAk1r4V3pWVwseqJyoWz5sDFyDrXjoAbR2i5b3bx8h1ihJ1ir",
  "key10": "3KiWhtFqDq5qhqc3dWEQMzfCLTuw5naSG28xfpAEQ3xv54yDVmdspweCEf5c6qDYS2es4dQWS9YZEqYtWwuQ7P4o",
  "key11": "55trC8rhYTiAYXMgRAp2yfBX96UPU9DK5Gx91wJnJgVn9vH9i8GwQmw1sKM3e2viKxikC3p3VAcdVChMjeTGggbi",
  "key12": "5qbcyUpEBJd5fyV5TxpPYDpcniwFu79ucUbLvpkpfBVTAfWiuD2BhrmGfpqKYSUdYJAp2MLbzJpDirbgUZ3THQBW",
  "key13": "59sGEF1k5sgfUdg93RLVYsbecQeVbQgPTKsG4G4z2oPDRTH2XGovS8c3sKFV7dTpdobqiBLqZi2Bt7qfmQ8q1WtJ",
  "key14": "35C8CWxxkagtEUJQ3CZ32ub4cUDh5RB6D1umDB3uHq1HSe8RwGQgRrfBeW77UFLBKRS5YgPoeTw2hb92BcTDvDgV",
  "key15": "2NtSGj1q5mFfrVJmsndCt3ShjYQgRaHndLhTDdARG6BwGQeFB2aQJne8fUC7cZs8v6KWKu3E4B8AgULsqb2mJaH8",
  "key16": "4UtYFYAGcrXBj5hEknT1Vx2GWsMrCJ6jrutBSJRHcF6WiDM7Lvq5D85wCivgthj6o6WMoRnwHqqbQ7LMtbAPSVM1",
  "key17": "4TXyeAgHQCJkATQnVHMFMAMBm6fcMWwz6SEsYLiS1Fg1vAMPyoNRdRPbXn363VHVM4KnsNxveMczjxivjPNczFvN",
  "key18": "FSvnvPi1jXtj4eJmn7WQuBxwLrJsfZxerJftm7AbfuMuKnPUDbCcBTTjiJhv2v5FcJWcqhj2GuPjproaQ47djXe",
  "key19": "3e6JsUTsihMDNuJgSN2MGJLKickj7avconNkUEN6jhyC7XuqLttmApMuoDLqaCi8hRZCKdeKLASFEkX51KB1jCye",
  "key20": "5hrK7kWyFgkvgb66V4wqEEQ6f6fX8ubaTZNx8Ev8yQp2UwcofETDFKgFaVyPzM8kYgwosKzAMmKAcVZWqr8rZN8q",
  "key21": "2CJLEPeKcGruoLcDF8Cjg8twm9tZ2e4GeoaxLvw1WxZuWEAp8GsGYUDcJC6boZrYxkfhNjmRf8CoHVFJShTFA5HH",
  "key22": "5FJmZjuRGbTkzPampp8tGEaTapM4zfMQy7AuGKdeyPuY53SSQigBeCVpkNKjfJN5VwGQmPBJ14Q56VqjhK9YuuXj",
  "key23": "5BFaj3RVtHRCFfxssycRyZZMLsjoouwAgyCKgWCGuX3HYvrEPR27fXEu9s72zopD2TALB3PQUKDAS3HK2oc6UEof",
  "key24": "4sY3mVCxPw59vut9gpesgh1enUBpk5sXkLrWHGNkikd5FZzvkoiNhfvGYbTvrrGTsUBzsRZ6WhCjguHynKpDC2VG",
  "key25": "5NHrAgh1ckswsGtrwUgcigALPd68rfkvbtZVbzv6g9WPfnFUocoY1c91vYSKufPjJHtLF5Lv9mytYAkYRoB8fuU",
  "key26": "4jLSHbVgfiuahHgsFDL3JQYMEEMKhke4YqjF9qYuVfQyjTZj3aN6Letz8GTj4R4uK55KAeuWsQNifEs1Jbe7UANQ",
  "key27": "65R4MzWjoPnDWxB1Jtfvzto9HmZoQhvfNvga4eqngQrpov4nBpCcjn5n3CxwhqANBNxViZyEkoFKk8pUmojyyfCZ",
  "key28": "4zX37AHViRsM1ds4wJLFTgJ7qFtvQudxCGi6ZpHtbrb2MkRQSBySduvciR4yyr5A7Pc3HCgnsia5dkGfFsNctesV",
  "key29": "2fJCB4vC6JAJQCmqUeeJ4ok6pSmT81fZ4LcsqpTZoqECoQCUex2W58XVcXGiVeZpQAKBCRzgH5wYu4uTsS5on6N2",
  "key30": "2pguqy3ViCPU2TdLXz3PyCcBT7QBWRVyTaNTd8TvUFVN4QNND1RKNex4qWyuwnP7wf8vgbbkoWGoxGuMJh3jMiH",
  "key31": "3nxnLK7K65jhDdQk4xEre8KaKoeUXMcStCqk62u1kzL6GtTWojVkUgNXEXu1sxfiUzsLeSRhqNqEcApCQEgXMTLx",
  "key32": "43wUS4DF6YVThL8mGxAZJKhxs4nBxYX8Qwrr21vSxE2fdqRv46mYo6QKMRGUnZGJMKDAVRuoS59Jbw82xeD6GkYv",
  "key33": "2RE1QCzDgLkEbezY3sKHqU4SVMpZd73FTxkNTx7hEqnCHyDtWUw5uz6xZ5jZsQKNkHA3MTJ3tGoGnqZJ4HfsTpN2",
  "key34": "4fHdNyKtFW4r6sHWN4fTUfvEqnf1P7nqyjGsDC8AAATezqukZhgJy4H5ZzddqgQwSvBLRCeNZidsBaMaEto1mPqv",
  "key35": "3sjdr3VVwiBmYThgmdf7qiMaiMXn2Lchi61NTG7hDMjUTiFQEUc3xMssU9evpPJdUJGBdbQfgHb52iByAAkinArE",
  "key36": "3aURVZwNxNALEwBAW55gqqT2qiCTHtiyXFkRjTCVrcjKX5qPcSi1ZovyVAG4nXeixeFKUtK2P3x5xNB1U6Dgt7KT",
  "key37": "3RM42yDwgik6XsE14XGSscmhgGo9xGu8u677wXhJJW4qppdDgHRfWDdPDdmb8bJLdnu1ZxEjc3x8LUbEEabDT2ue",
  "key38": "5TvuqNWWAhocupmXFEBF4QMDfepi1hNTz4t7zNYxUuUcSiwNFtn2Sbbvvxi7CFuWH77WvJdq5WVqv43j7A6Sgbq6",
  "key39": "hmzjeGxf2Pf126aqafWWyX6j7Z24HkNg1KsaudZBqXERCjGrNsEsMouV8VJ9odrvoytiZSbKToiHpwou8f8Rixv",
  "key40": "3Baj5TpmViKhWNuDxLTTe8iQj4qxb36TV3BPbikjLbGCTUjxySJ2WTucW5g4agMh5ZKuyN8cS38ktj3UXGftkD5r",
  "key41": "55J2zhsijPeNsg3yQ1ViWfFdxpcGjLavhueJpFjPbR1EDmN3m9doC5u3zMYvbxfn4w1R5XDL3rjSURpk8v3aKj1B",
  "key42": "rZFsAGq8C4EiFt4rwDdiFxLBvaisfEeBrvwGcdta4bBqyKWTLy1UAnNSNqDJsUkbd7zaMW858YghQcdmtJvMomn",
  "key43": "5me11uUdV5VVN14bpvb49A78RhoFJLHJt5CszEWoQnUrHiBEdiYkeLxrjZEDBs7Qn2QSmx2yWGKrxeXmYfPjB6pE",
  "key44": "5QqdLx5dJgjRakHJ7WeNFD1WnuhMMxJC6inTQPiVFZKPT6QrBBJxdGdqkgG94tz8T5Mac7s2EfpfN8pHsgcjWySL",
  "key45": "2N4vwpgBbLUnTFcZxFQnMadegy737sNEDHmZfd2emhRg7Q23FEZkXGPNtp44yfmCYyzx8HzqSYfcCMhxp1mPSBDc",
  "key46": "3M6X3xAwncUK4K3bbHPXVuZD8qTphCXZwDBz2BkKeLQYafk4DFe3wrvkaFKLiRP9bL2zz4dkNTRD6Mhfruo6xTy8"
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
