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
    "45vTxKkFfhj4gszqgdzbUPiE7d8odUoZLhHpasZeeqCJe45NDRSSrCm8DsTMNoUmYv2fWFsZVVonNDtco8beCHT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReTJce3cTTMPZH3LSnRuSbtdoRGS5ND6BtdzGNYtsJUZDWiygW8XW5cupvk9X5R7RRyxFe3WbGK5Lwxyyp4GkDT",
  "key1": "3DJLrb6SLUU8Sk5ECNsLz8dAoW5hgQtZ3RFXXBqem3GhpSoRkKU3jabASpNBpacjmjmTWvYrkJWPVJg4WoSxBjgg",
  "key2": "2hiuGJRMnYoKhTyKjr2LuZDHkKEe8DMfeNKnQa1S5EJdusBSNKdVMWFbpBdgVmQofak2AK5fWZtrXH2UoVSxoshQ",
  "key3": "3AmGUaiFFMqdMHEqWXcZwiNyAKa7zvQmjrbpG9ZmfEgd3zbaeNid5mo8zx1rogRRDR46C9AM4vZyVJ3AN7rUxtQp",
  "key4": "yxgZEZdhMGfpwV4kDnsFS3jfaxgU9mzgoKkEWrjf4vAGZMwDdAxLAk3ntgXjFRzcqvCHNZDEvzE5dJ6zdJJPGpw",
  "key5": "5E4fDaZdXS2MyPYdNVWsGGJRRKumK6u6TrkHY764no8xtjCNjTLZCreV9aNW769utp1fQTZ817kZ9JhEvXhaRJ14",
  "key6": "iTJ37zc2qnGPN1zkHqY83Z128Rhbmj1Qyg1ctkDtxyNNmGcTAfrDTAPZ5HnpLjR6NcCJBX8DWL3WRoNo4g6yQ7h",
  "key7": "64Xu4ctzwRokufqzaeWcuvroXxWsVaLQsvZpeahkQZAFJ5GqZvMEdBTke2vQqbtiMX5uu2YUk6tNbX72dPZyonKv",
  "key8": "2rHA8WBNVX4AvjS4PvQ7Zt7NPFsLcXAZjttPLF36dACpkRYkAXuqKCuDZp2LN8umHXkstnFSRoiAxBFNY6Mud5kF",
  "key9": "4zAPvTqfKmNwfvgq7wnZjnr5QAnkizQ4oiYVa993DxB1rV6sUhtUspsKNUF4eTZKBZDuMvncQSn67RBDSRT3EKv5",
  "key10": "2X7YxUVNK6Rntw2NcQowp6z5PnSdKKpm93aNQLHo66UkS5P9Hcm2itKPtCVsnjzHEZEdfYnNhxYdWQ6q6DDhUgkd",
  "key11": "21vrbRMBMjeMviWgRWxFnTJKWNfti5nN8dntiHCmRavjh3VmvyPsXRSKdzY46NdsCXwnSMHJJV3P7qwN9YeAG26c",
  "key12": "R3m1yJUcx7EGsTrqP1e359j5Xjh2R4FdditWBJuVBn9dbaxA5TMTs1MopCwGLq8CrnLMdrgmiHSGoFaudy7TT6M",
  "key13": "5tfKgpdVb1LnsgUhkwKE7XZiWmrUFqPoKyQkypy5tdw6gPYTNTST2Nk7jtTFQReQUWzANCVvgAv2m1BKyMwMwd1Z",
  "key14": "5MWCqt5pWbRgJEBrBAR4sYvmLB5DUSRhJT59NX26EDeenEq5cpZMXN879GwzSx6WRiXbH6svtCfgLMuXA5RgiQgF",
  "key15": "E5icJJjv1n45D2afCZAvK4wmXHsEJ1WACYWo3TSTBcaQrTyEoGjfMiD7N5WjjcsAzaCbHCUJr5Ces8ZwHHDpakq",
  "key16": "4B6j4fiZUdMyKdE4tgprRQiHt6UoBfvxfeczBgoKg7BuzhXoiPQpfnACcPwPLiyyWTWDnLNh7toBFg1iB3MfGMUr",
  "key17": "2LiAaP5ZHuDPQtTCsj1zwVWQg9uvgCqqAXGeALsUSRfsrkbNpco4JAK3mV9z7ZSyZWNiH7MmFmqDeywGWsnVrJDb",
  "key18": "c4q1SAkrd52H8AeA6EYsu9o7NFCpDsSZ27kx5d8m7D8hwAzpzHks1L282esUwyAhA4eRypNpiv3TMxNtLKj8sie",
  "key19": "4uHgJNuTwbB8QXi8zgtDjDS3sG1dGc98qDR4NAo671mzH1yPbcxbjLqFsVA7cJMYSbU8NXvPE2zwtzH3R1Bv968i",
  "key20": "3Upfp6zSr89oLdiNr2pQK7be9QqpNqruCYfLVcKpTqLY49CzYskYQKEXcPoGHbh2PHVefYX68XKZLBN6iBMhwZWJ",
  "key21": "4G4LpB1dQ2dbtGp8N855gNtLrHhvnAuEyt3qo8wdi9wHopwbQHJGfqEuMJvEoS5hpAcnxt4WvUcknCuDih6VFvXU",
  "key22": "5NdpQChSvvkuDp8317UuVzkqrwbdNXWteQ5XhvcBv3skZ4jEqGPm1cuMF4dUbzP4MFXvu7aQtMbqjKQTJNMF2YgY",
  "key23": "WuG2auBi6Eq1PoYYM7ufzU3bQBuJ8sfX81VDrPzwWcz91zpoeMnRXD1UgemhepW5Ji79Zzpj81gEXwAUqWPg7xc",
  "key24": "2h79nXW3n4wH1Q8xoX2Xspm1x59FtqXREBiyAoSGNnNV4Far5yx3URBiQn2VFT6sk3J2isCvtJKNwEaJyha5kDye",
  "key25": "5AZDfH25gi8ESxFyMPadbaqwHvENWax2mLAc83fLZBDmbra7e4awBpDi9suoxCY6DY8VMJbtApvUWyRv9dDq8aRR",
  "key26": "58wKWHARNHPXtrwHuhLcdbKfrL1HjCSgpoMrQwnbi6oN578c4hLginAJ9DuRBqjrj6oAJzZy6GxsnELuak6rnM5i",
  "key27": "2n3YHz8S6VZ7xq2HjSUFFqd45WPhqiS4YsUDPj2D27iA2iHrLMDwMvdL3XsBaHGasNRdQ5jTb2CrVdgk5YKM5amx",
  "key28": "4YKuERSGbAXRhQopm7QH93AqbxvFsR31KtG3jNsW78NipBuPSThh38H2P8yDCGabxrN2LYDbAsAkaLEuqgWsH9tp",
  "key29": "4PuKGkCVesXdMBe2jhCdaTBuumjkBpthUXbgP92Px76WrS8NPk2CaoqEsDcZ7j98tNcsdcCAveRAzm9q8AkHS8j2",
  "key30": "6396iANJpJ3DqGaCmtoGx9vRppDT6NQizHNESHwYTmpaEXEbBT7BNM9Ci1HmaxFmKUscDr5tXon49LAUwbV8uDw9",
  "key31": "4mxsPTHnqYTdVNkvEeKYeY2W8QVDfhJcdSPWPstdhfGyPwLpqXp4kCcFEwo3skAbBNCzXznQQvEu9R3oHfU8MiSZ",
  "key32": "41NTu9KrTtofmHKPCSJ2XmbdCyAhWC9HrWuQMKkfitCFaHszfmQVHS7WDBb5vqoGMhhHKrwT5NJHTYVhS5fGb9cq",
  "key33": "tTUWorW4KfMagipDL6o8zubbhzqJnFVpNmkoxG55vaPUt1yqGJmCH6BbTNszjtUMTPZAn6fSQfJvKuoGt1ZWKWf",
  "key34": "PoEzX23BHSi55c8A5gYQdRgKHYTfPGQEfhnorrCC7YjXz2SuG4Fh8UJmQiFn27f9pjUNXevFQFvgKFa7tSttoCD",
  "key35": "4vCrqjVN8v62DiWnzAoSXzJU3tg5CUvdmiS4i3KJk2AUpk68AoiwJFmKEw5A5d1uBdqmLRsdWTrsbYWsBQhbE8bS",
  "key36": "5sACa6rDAhbYYQs15iBmBqv4d8jqD3TYoq2VBg7wKxiywMCtFzTF2hVpAdpbGRqyyoLawZr2iwGUGfP9schEWEZh",
  "key37": "4mKmughGdGLuXUFozaUQ6Czhn9Ep2PJuThgYNYE76RJPnhoYcDVpCXBnVkk3JwWBKy9j1cWQ516k73hRWY8cvdGP",
  "key38": "yHGV7VJV8Rb2Hk29w7fYjQ936kios5yv1bpn4TKJqwh8srgUAPhbAboevhkaxRcPt2RyTfPjrSJfDJF7n6jkdUc",
  "key39": "21Xj8TUTa1hPETNzLESFLGyvhGYbwG8eU3Suk5iMVqSiyPVM2tpwcydBXek6jSAXLNEphdFpHQrRDPHWoe7DEAhR",
  "key40": "3gaAfFpQemAoPeZXoBSyjrzEh2SXde64mykHYforcmFAvXYvmtDNabGAMAuNHVDMzpc9gTu3Uuo8dQq7zHU9MXfH",
  "key41": "3WpiQCzcHDrMdM6fwj82DVp2Niq8NAcwb3LGBTUQPy3Jb8QWcPw918grxNcLZhXuX1cY4BCFaNoVMkFNmdWYkWhW",
  "key42": "3MniED5pUp25Kve7x1SdUpzKTbJcdB8wtLzCcVuTXJj61k2NXXrDSmHDysN4P4tQUYpNk1hKjEyYgh7D7RXf8x66",
  "key43": "3yooSLknR6uzzjsm3eDNCMGng1kuHPCT4BjJN88R8At3eWJG43GNMWXj5iBCWkE1dWDKS2MTHcgVHmgUQQH385o1",
  "key44": "26WY7kRB7TsdN7sA9MakD6ivzcKAPS7gyz3EXdncLfWUKYpuGYV2s84zNyEr42QYnhMpQyhLGmgR7GhDWpnhbaSu",
  "key45": "5K1RL6gF7TRiHJaVYj2EvDawKUaRGvCfFfc72Nz1i9nXdGBEvjyVUGc5Jr71BcXBf1Jsw5N8vinjbXjtS2hPNjXi",
  "key46": "7nMcwpo9D5fqyRY1S6w8fr71xuG5jAJ4S4ECnEdn5Bmke84wabatUE4BPEJSRKo9UTkzyG3GXauhiTLR1S6tTC6",
  "key47": "q824MEEMuQpTriFG1h6poMR8oque63mrws9GEaoBsGPVDgo7Nc3ruiMuWAtf7vtAB12rBWDQHu51uXoGTEcYXSt",
  "key48": "4hqcaREWMx8SCQ27me8mbPD9uYLYN2pcqNhGfNFApZbWfTwKc8Lo8mWWLQs4LFqqNqS1KovrHs8zSvQGo35q8D2B"
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
