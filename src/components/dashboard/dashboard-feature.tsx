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
    "2dR3QCWLtXVZzDyyBarqWyV79NDzorDDDC7BR271Pv35m8VpaCF7WdrFggKpoTWEQLiHmfBXRvQ9unL927SHJxmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ninoW623ihxN2K2arwP3Zb52CzjTHjtBAA3jZQCtf72FxZgLruMdR2RYjkzfdTwHSwd1ncaKD5RSBcYTVpzS8tE",
  "key1": "3msMLXD2M8HCwovfFAcBP5R3Ze9p1ZHa9mpNP9xfpipD5VtHzRA2DgCc1UeMS5PYx984yhZqbCk5QPW6wmZzgTzG",
  "key2": "aQfa4jRkVtuu1Das3JNxgHbkpqyP2d9mpwNGAYfeLo9ek47aSoZV38JjLNE8xhWXJCx1anmA8GMQk2GaYNKgoYF",
  "key3": "5U2cVKdHr7UDbcf7XsM9xrHtGxia6wDiiDkWHnC38jWYntYP7E2Q3cZWGVaGRmckGJzFCbViY6aX6vs4yuNQZr5S",
  "key4": "XUGERrNFx9zdnXmNcAr4doGxMTZDjSk4XQhVTSjimAzWWzNXppgxBVR3PeLov6WEQ9UoqqBC6pFLQcsXn7cEqis",
  "key5": "5vdHSqwAHN5AQrGP2i3yjv914etG9LmHtrh37z3vHcaj7GSo8iP26mLw4MkSsyExF4JYqAVu5Xte8AXyXYcpe5kG",
  "key6": "4oQrLjoB8N7Sc11N2wFEJCcnJYYV71G23gFnS8sYGBBbortfgJemNBerbr7a7hx8J4kH44Z3iowVtgJDgNQn73HZ",
  "key7": "44pCTc5jM8WdBcTGsZt4PUkUuHKDybjuH2yYDsd11PAj1pPwxuCAtrhjwdGRGhNmj6WFgykrpZhT3gMoVbUAnY9n",
  "key8": "3gQCwNQmzTrtJcd7bj7BzuLXgU74SyQkeVftP6T55Uyr7svYRTBxpo7TNoG1JFei8uTPJyFhY4pFQcexSDELVSAU",
  "key9": "7yiKSEUANM6buCjPoyuDHwjwNfCiiYKyjbDfLbhGAX6YjeJmbPFno5br24hHyjXi8CFXz6pP37pjziUpW1Modbg",
  "key10": "3mYcLUSrVuDccfpyfstAoYxKcX2g49Yyig8J4eK9wjkRsV8gJkK6x8J577hnCnP73nrc8ETcN5Aa8gcM3cxFjyns",
  "key11": "3gn94nJCnyU6Maqv1mzSf7b3LxBEwi3EeeaEwW3q12pwXCetqcmscA4Nmm4n7VbHCFwWmA4J7m3hnz63g5Aqmgsp",
  "key12": "AEPveSksieSt2hBHn2eN8jPc4eByrju9vjyc1b6nFgZ93FpfSJahSC42YfYpkHyqRd2bCzh63YxJpHMRqEmbXTu",
  "key13": "2tZxPJeGuBHnGTqvwKEbr1pvf5tLzWGj3Acp1hB9iExSMYktR1MeU11aHtDkkd147m8RjiufgvwoArCwTNT2uDgY",
  "key14": "5YHdP6uNDHok88sL1qSbVB2M7ZixmKkTowFK1T1pFA6Wtvxz9bvXDiqme3eofXPj3535Ux1a1gZDNg2mZ6f9LhuY",
  "key15": "2RKg4UyP9Taun6jUMFYiAAgZGUDKK8YpQvgLRjFYjzc3T9q87CCE6khvGKMaib7ThE14sWh3PVf9o2dhkze9SDr",
  "key16": "3cPi6z2VMaP4ApehuVBJzp1g4YnDMXnz9j9dmBhU6jdeNHRYy489VbhBGZoKhaVxAaHhypUTtnAiiKrhzBWJN2SB",
  "key17": "2nXu5ziAZpPfRpusUGyydJXAPQ8NRuRdzz7CYw76wEbDMS3qoHC2e9GGXUQqHsMr3uJbCxMQy5aNANjoKHkrSzsp",
  "key18": "UbdYvqeSxU84r6dLrS2u6yadDaxy4fLY6dTiBmqvpfKKHvHi9FqFoogEfZRtEQBFYzcgnW5JxoPsZ8cY5oM7bTy",
  "key19": "5EiBEtvvVfCp8VXmcLtuueA7zDRc7sFVodunUnAx5H2Nhigkfq8XuWpc7buvCtxq3DzauGWpLhAFRpg8Wt1u3SHE",
  "key20": "2JqfGT4K1VxTK1ShiynfLCTGExZniQJ9TfsfnooZ9fc7Dr6DYsRMFVMqiWryUPHpe5H41PLAgQzmj8VDthNXJdkv",
  "key21": "2qzZ94jysULzj8mmH1YD3orpj9FJqSFh3bVoaSUEiXKVrNhjKHDga4hDFtHetWMW63sjExttS5nn1tYun6YQ53SF",
  "key22": "VdSGHr13RkdYf52hhqCQFcdJthtHfreQXdWp9jPu4eMzXwQX6SEzSxaJzx8NBzk3NpMRiMQZWWU9ECyrF4vDp9D",
  "key23": "32JNrAEHLkVQx5kLrLDsr2myrnH2dtwBYGgcYBd2od1W24rU9vo19r8DDgtBjYf72fyKbSce38guADssto8BuKYT",
  "key24": "3BsbAUBkPGvugrCSaodBpoSnYbGqGMMNtLAv8SK8DhZdi4u7Wo7vBc4wq2QjW59TkiQTQQpk8od1J1sTpsq7yanb",
  "key25": "4tKLfsViqiwXhcaNYUGwvh1A8ukMbL3FPrWNAh879UPjPvHJndEbazVSppBGkakBitxHaqTcNtHmq34gfRCqMZpi",
  "key26": "3ycKvChWHWFzRn95fkv9QzqfUKCGzMrZCXEFtttvQ9Dr4x7drdzRJ1gGrUvfD9mrZKrNtH5YpdC5WLwdnW4b4kS8",
  "key27": "43oDEcdsG9aw5bwWtibMx22xh2GULFLCPhjnW9LRaA6BLUuBgfikDfMuBqQXgLj8Wu76od41DKHvbN1dn9AyXKch",
  "key28": "21DbCDGGdyyVqVX3zahWbgj9ZL2UfQwPpy51nPBfw8MewMD1oBnqy3ELZ2C9KKf7TqdABzPPwTUMKfgFECzNy41c",
  "key29": "3bLBJjgGwHHFek6FDSyvCmRqB27JqSSLTGqqqdrYRQFHadxMoiS3ZGUmRc8Tcx6PcMGLsdXM6fW8UuvY8ukrUW5",
  "key30": "5QxqvsCtrn98bLhvCNxQfGM98DUhzkUHERcYGayjYmTP2mmXoyksyQGyTUKC25JkUYFSYQ6AHhZio9rUrHJEpGke",
  "key31": "2UMCabfHqfFcKXbAy8KmnCdZHVyA3V76CeG4dbL4M9WKpG2xYJ8VUs3MAapEi8a55XkezXn3QE1ZqL1gu6psPXym",
  "key32": "3n8d9GvRJcemdGeGpovAGMxgZnpHaog4AaCdeNYEUyx4KYGfXK1Uk1AVzLbUohFagw7kpwnqR1DW63Exa79sYub4",
  "key33": "6SNDBsmPjVmrSSE7MXfCPPrGdu9tnXqWQ6RsFDtYAqD62cbTbcC3NWDYP45Jtrt3v1uiZn27FtjHgNTVzobNoRo",
  "key34": "5n1Nnj6VQRhQtKGedEhW2PYqUA8yAJViSkd8hF8mhhZsxNfbFL3q4XshtJ8us5BTo5x18up32iySDeGsVWvwiKLi",
  "key35": "5DdrGQSYZDeFwdMyRB6yuFm99pRQw3Gq3GUKR3YXRqXzShuZeB2ugsiqG6cemDAB4EGcj3j6b6NsMqLnH2CGGAgL",
  "key36": "3ucycZ3bACJMjuVz1XejzyDphHA8aHMa5g5yQnVvaWyvAcGES5rStwdKZGExRiRYNxXNZSvzduqQZzyDeVF7w73j",
  "key37": "2kzmcohrzewfnLhXZahoyjaWNmbyyaAgayNDvgELYKDds5QT8d42t7SDvwcwKE6j5dAqxRT97czkbYQYPkovXHXU",
  "key38": "cGjX5MLdtQNSdwTTynXifv9chPGCvxf6r7YbuTr5ktiMWSgBcrWr9sCHgDan123zS3ARM9dDdUgQAKaQcaTJUzu",
  "key39": "2bTSfp66crWLLKoT45VRwRCUQRmrdc8E3ZJmSjQ2au8A7dMtEzfJTSXP1WeKLvRfWDm5S5rHZJ1DrU12zpw6ZVe1",
  "key40": "3NRRpUXMt3fkg18CxkDFrRgGckjKTjPBqdZQRSxhrw1chBobx83cESVjTUmBqfqNMwDrbz35RnKNnZsykKvXgEQv",
  "key41": "4CTdQt8oPWK8QwfGZ89zrPgBjA3rLSMy17HM8jHV4v7y2vbEd1ez178PsbydWMuFcyoa7eUW3BzLYn1zEN4Wuwtv",
  "key42": "3JZYFePfYdPp2Hfugd67FGqFPKfdnneyHPHAvjTxU8R8SWmkeEozntut2X1DF8JmDogrjbnuEwcXgEdYBBhU8YqT",
  "key43": "2HKXi4r1stbFbXVS5a7RmLNZTdtMoNx4hYs6Hijbko9Lu6jAAH5Gf9wQNzXyRS1TshVaHfddHKcpUtXukjLnSmFY",
  "key44": "DAaxvstWcHGuyqyr6MVbbXErokEFR4SFgSwbxM1N79e9ZNRj81eUn4rL8PgUTyLytZLeQ464vyBTqGZ4iUJycys",
  "key45": "mLS6L9HtDYNHGMW3bkNuZR7BDRKtU4fSo3qxyY5bkNBTAxwEyhRuBSEP7Pd6pdnYCURx7ES2284ygiSjWvQR6g1",
  "key46": "4Hc4WsFR4M6m3va8zZztwExzuAELR1Vr7h2UYxmvMDsi9NrMLiDSKHMJdPKRofvqc2QFoAPepd3aVdDHwYYTFLoX"
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
