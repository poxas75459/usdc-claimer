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
    "851kbEWi2dgHZRCwjYY2wA6QeM64y79SoZtfwz97euwhKuw4G1eBQ5AeWNQDMx3vRynTeoi2vvxToULGEJCm4ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaqsrA2mZhk1ZuZ5iHjzTu3UZJdLmzbwrZhKMf4bw3YTDWb8wcKzdZDDMVP6iLkgYbGt1K1VLyzJjDK7cr3AaRK",
  "key1": "5oEx13AL4W41nKxbdDy2CA6W4FMgtBDbbN9qDEnrMSHZyL9vAqid7QWQutzSuMeeZJzSPomM3fxxzkLdYfVHdCx9",
  "key2": "3DtgzrzmBYKGS1zCe7GhRfB1Dgxux6x2AN8o1jjcoPhcsrWqGtzcmKvGuviFJqG3HbJCUmQqPMRbBuUcxBNn7yKH",
  "key3": "5orR9EtyG2bUY5LFTG67r4Yg64im9NkwsGfSisyJtJotn6CLBRReXu8TDPqWrDtpPFQZYcqq8fDUvPsjeNcqSgix",
  "key4": "5rjNQcFKSggaaaUkSSng621BSVeNKNpML76PHi9CPLYw9A4nsuE6MeWAaCN1Mdi7S1nZmX6XeLwUnSCHsavqQEFk",
  "key5": "B6xKWnanEz9U2NxA5DxWehKDn4Gy1tsGqDmsykc6Rf3yt6recb9zr4h2mgT63AES3QsmDwFJXdXnugq45Xr92Sv",
  "key6": "4pjKePsihzvkrgkHjY38UWHX1kePMwYCmyEiLKPRhaxMFwZtTjfqurpgzLHtHabaMRenKRoMwsK8RBThFdyB23TM",
  "key7": "Ggvsd9vHjXbaVwLLyg7VXwrPs3U5oncFWvPuQyszswgfcz8CX9xDB9SZHcACAsnvicqzY7GpemuEoBypkVtrXy8",
  "key8": "3sHXPNyuwai3jRh6oSDiqaVcPKq5bxWnqEnuEQVU1rPhPYrowbKnbfUtrBkWA7cnHYZraaTCmjTXHHJpmoY1LqwT",
  "key9": "4dBfU5R9G2AJgzfnp5Ki2Ncu8L9Dzg8C6MBKpHZ8TuD5TDjarSDFbbDk2381ixUWaGVMA1jMWo68SyUFqUWxKRHr",
  "key10": "3yTosvydEs61gc4FayXLQcBYp3cbgd5FB5Ejb6ZHE9P6sDi6mWY5PFvsX4TfJ3mQcd7HDSyXiHYJFSjSrWaFRgJq",
  "key11": "3SZw4xzQq7Q5ESsSDdvQPhAi7tEfp5DCevJRnKYVTtqAAEYFDSy3dwk1Qog4z2nJrSWrSbbU9THy76Tw85BEQ4Tf",
  "key12": "3Mpx9NhHrkGnnA4DGT6iiNoCyKPY8y31g2aeKPM8z31dY2fDcZusQnnTRZv9KSw9Gb5k52EBkLHpme2DfuKix8nX",
  "key13": "3y9CZ9xWrqUzTM71tyMk7WLAVagMFBHVanmBg9sZeakVCzjcPko41JZkP1wxR7qkhJwCjMKq7vhakNcqy4QAwHo2",
  "key14": "RiYViuZBpMaKHVemZEu6XhEqgoFfszR8RR27UFo4RiF24YMpTUA6nPFnQa6YXaPE8r9Rq31giTr2XkG45kvKNLA",
  "key15": "2F6hn1BJPoRydmnYHNzkgAiesrWzs5YcGFsHicq2hLUmJTrPi3oRn8edXp6btyTiWdDX3EGVJ1musBd35ewigkkr",
  "key16": "2WJUzPCrj7thZFktVmzc1nXECzk73b9GHE67y4fFNbC51c6XBjbk4Dbk9Kp3e74Gux6qvs5T24QCVrdmqWQhYeS",
  "key17": "5Gj4Er7heLp5k65N98DvzPtdVzEowCFKRsiHSSPWrztFPvFmERqm6eWDXJD5t3FVfwf9cKjMPjH6781GKTijjpnZ",
  "key18": "55M6mnwtyp3wF7S8fv6FQpnBPZEDp2CbZVPUfherp7nVKpm3kHq1uEsEMT6rXk9p6v7oAc5oBfikaJbThPrDnz2Q",
  "key19": "4ybLXR7NPHdQLkC9SAkWfUsZ8CgefPKFoW7w9nmBBT4qr6srDnpuyKbShhD6i8g4AXjTsoMHMNr4HBMiyELS3Bb9",
  "key20": "32J3qio2dAxVd93So6KUmK3cbxiKkr4Z4WWw6n98djMgetCjbn5PuXGqvrERkmuSZVqVExy182dM4PDvS1PkQCKb",
  "key21": "2zYSzuEyjPJ5oSx6MGpBvZogVm5bUNu6CVBuWpEEpquTAEbZ2zNs94sZgcHrejA4ibk4xGBop8bPFX7uPakK1UrK",
  "key22": "2ML9evHtUte3qq4Kp48SgccETdRqiNC6iSM2ZFfCcXfoFn2NcCZ267NU2wDz9DhKAxU6YqHRR51DzmYxFbTQ6B8M",
  "key23": "5xtFF212LVrEuQQJS8GEn48rGSQd99iogNMrMyRKWbS4x3mMbNGGGCPCMvV9SWSKwyp4P27LbpLhTsA3z8gRArrw",
  "key24": "2gJjCJSrxqypSw9qvKeAAdwMpB4iMgipWSc61NKSf97AgsFUKFca7xoycmsG4eyvgeay7TT6BJxcR2h9HfcbEKWx",
  "key25": "2fpPVmC9HWkwTyrtdqHisyKZcbhtmGQvAYoiHjjGKpUo9o4vSXfLZ3Teb3Qo98gxML1A4U4BBXerodmnWGBbFR6B",
  "key26": "55zZnFJwsYCiUqEtpEuwT3SHQoZnMqA9E9HBSBSA12CFUxEFhJH7VN84AbnUnkoZWRSqGArjeT8od2DLgqB1SDza",
  "key27": "2mptxqPwY783S56RoEqfgefXET1ufSsCMC2WR5KAXJEEf1TtjXX8SFBkTpyJTc91EkBePi5VuAqYyNtaLfg2zpb9",
  "key28": "3ax8at4UsNAnj9WXzKqa8stBekWxKZwyb9H9YhByvy4ByTiAM94ULWpNnxBLX12EMFf8TyEPUKeoFkwhDPtMkh7F",
  "key29": "34UtvseSr5VXhp8qtmL5QpjTXoHQHgbswGVkzfKfTS5VRWhVCNEsGPQw8dzTp9vNjtqLtFRoBvsuk33rm1jryJfx",
  "key30": "4bXbihhcyEB3NCTyr18bt5WpXEFnq4EtbNAqNfxGRvc6wenvmtFWXU9MRyNNDuQ53JQMZ1ESGGYWeb76L7aXtZKh",
  "key31": "b1wxcb7Hu56UQrAghYwUHedq73DDjaRLCT5eZ3iV9Sj9L6uc5sVtJmdLiHWQqRVEbErBRviBPKM4o5hfF3KPiHb",
  "key32": "5fJXjKtLytW1Edg5thkrCKMtFFs344qtsu2JRnojX2UN7GQcNycvg3qremPiVynp3L8TidnsBJWBy9kjFXkMqTtP",
  "key33": "2EzRnxiNmAqnJY4FDzhvrB42CpXLMEjGH3UskGTBimHtnS2RfLFtTkyLbTvWxLSLRArwPtqi3m6h2qYiee5ntPgn",
  "key34": "5oPX1sSTntr89L86A9d3w4fHPAsz5q6aQN7VnU9DUNw6528Fp2RrPugXRpCwewFSoJzgXFBsJ5TsRVt8H3WULR8J",
  "key35": "4j8XxyisxohePZM2kjNyWrs8Cqr2qvTCwgZAnYvoUmvFuUZ81hr35buR9uNMmr8WakpCKLdGneGhg3hvZpkiD5jn",
  "key36": "4BBWa2nsA91MdLojrV9SCZCSztMcvuntKzqUqGXggeczMJSRBos517GvDcjmfChFfGgSjgC8btKPNabc91q3DWfh",
  "key37": "5NokV6Qve2wjzrmvnYFUtDd9H44c8oFeh6hLEwsDCXUiA3rGKkavw85rK7ZfEMGF6ccgEDgKcwitq13o1dzsqx3y",
  "key38": "2fkPcafGUN7ra1wDp3TsDTPjW4bcruLsaFe1D6BbRtncSB4MnfyeNXFo8Wdf39Mcxf8XWVB8ewK5iqvQhbcfUVeA",
  "key39": "HSXmG1mfxR8XqmKDaGKqcx8PxBpHvFL3etZeSqquyVP47Fc6ruF4Ei7P669f4tnxH4KxSFDDqSvLJPGfho9HK1D"
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
