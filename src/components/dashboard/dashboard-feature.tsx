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
    "4dwqQhV2vMXYYcq93w4PeY2bVRAPSJG6bG2MwGDMWXEeDzHo8Q6ViujfknSEEMJ8srHpp8SSGP6KUp1YQsmEqkjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDW8sJgyXZWYhb9ttndYzAyf4DFkj5Bh19tgpWR1PwbbP62nUFvhn7fgZ1LVVGhFBMggBFQvi4Uh8283TWJPa2d",
  "key1": "3d95ncmRyFEoWjWb8hR3yGGmbnCyWkS6D9sjwMDZ5Q1RGAFALkkJL9JLyGqWYC9qdW9HdMTARzbKCGW4jAJt3XCA",
  "key2": "2M89MRSc6PWCjwH2Xzx4YoHi4yBqCDMpgfr5hTzFkLgfu65A4ZzvKr2r1S79fCAhyH3h65WMSvtdLifdSHk5DVA4",
  "key3": "378Rbaizk1VMoZDPPSYQMWHCuTXYnhG99oUmdHJoa4NJRiwx9iXMtYhP7x2qrstT6fwhD3kR1Kkn8bugW8aiWQzf",
  "key4": "3qr5MH8MJf3VxmSkh12tGyHVbpefvPspE1Dx9yhttgCB617LHfUq1g11fimzh8vAxDMCzoqT3H9G1xWoxccr1KQ3",
  "key5": "4Xu4LSdyHRUZLGZvAH4rZZRLyo5NBM5T8d7JHoQvYakratmnrReyg8xt4v9g5bvkdNGLjZrm4Lb8qzgjw89egyr7",
  "key6": "XnEUtivsX73QhhnJj9MobpDxNDzjVR4UW65RxcG4CTyGCrFrrHPptviH72jz1yK4rPAVQjie99hVQ4wUsuVqqht",
  "key7": "5kpM2RB1SuEgXmGg8XxbwMuHBtxduYJE9VzcLTdyG6YnAYQvzSP7GKRy2E4VypLnAsTSUUE3GfiHoTN1pBjbZigB",
  "key8": "3G9xYCAw3SafVey83Rn4TMQ5GTsaXSi8ZwkXFu4krH6PX6EEcHTTH8s6YcVPfoEwZVoe69jBMVQ4YsVSVdbHFgk3",
  "key9": "2zzVL73j5jgTkUwa5kUVJg1tHFKcrPpE1b6pvNmez6pvANnFj1q7pzu8uYMJSBQtt63WEGX6hpaiwxmQuXUttmnH",
  "key10": "29uz8pT6Eai4CsdotbF1kxFcS88aNvuEzbtArqac2U6UdNhLwV2MwMsYFvRtB7vysKrktTCnn2NgkeiS3BmBhzvt",
  "key11": "3mhTSUBkPbiY5TnpgqD2K1YpRb56EAAdPn2Uz26PhU21sjDk7jaJCBvznhD5M46AAXjdgFzTPCRQ8w8wfFSK3n4u",
  "key12": "2yze8SKHwvZnM5wMcq5491DaRK9hct5KpEy6hR2vCL5AceRK4bhECsEaQw5BVZqfT9HKydTShLinCxpnPC6V8tvD",
  "key13": "Xo7mJcHS6cohArVpucXyrpCF8FJVFTf9p2CGhpViF7nAeNoP3Qs1uHukgdb1f8vq5reMLUMmdmdMXyLWhq6Ts9V",
  "key14": "J7ZfCwe5qWxMEG8XXSVGfzjiiWju24Mn5UGAD4UQKNGkqDms6XkA8uChVYJr1obPkgCyqxQCVLYLGarb4mv9HLk",
  "key15": "3HCxxNsGwK2RChNYoBNQVjFk1uiUr7sYaECyfJvDrj1cNTinhycLK1Wf8t2N1YjYqwrsjdH2USysVvYXeYu3FhBV",
  "key16": "VVU5Gbi5JHyVmZ7tFtHh2FW7wGGr3NtdHWih6dNwtFzqwbZK6BYcfwHf9AHeap3EQBN6e5gx8eoD4kb8iWLoKoW",
  "key17": "sxHf19VeiUX3ddNsAaaF8Qz9CQFiMdydRLuaEe1sqqNHUMjWWpg97onWiL3MCYtNToXnXRbZjtb8kmqMyxyEfYg",
  "key18": "CYPBY5P8yPKmR7Fki3o22ujstCraRRb3Hgs5an9KiFoAcrsc2GhauqfPbUscZRekkZiBwV2gykdZWAqt5eFmR8z",
  "key19": "5PycDSHMvaou794FkhAFWGVw2dvgaFajTjQoQDhSLJXjX6QavY227tKyNoAvSJrQ9y3rqWHcne89GCi13N3gwpcY",
  "key20": "3S8d6tAdzwAsnzMCHCErmYXx4YRBgZiHuzYyfCKyWUVdgpBrSG46HbsFRGSSRAJQz3TBAoCturzWaNFrzqbMCXij",
  "key21": "Ym8xe7NhQoQXDPSUH6YRkbCcVtx6BjtQD4WmPuueEEeVRa1z5DULGjNSqmLEQi5TBBsR8Pm2zTzQGUBjZ48bJUJ",
  "key22": "5yPMAF52HLY6mbR1cRThFHSeho1TL2gLYmsxTuhDEMyaRb43p4KyKXKuJj2ZBbk7bkhKN9FMs3y6w9sH3srNijm2",
  "key23": "5sTTu9PWxdodwxbhcdJcana3rzkAHRUA7eEqa4Xpt5yyPkYxEGDsk2tD4Uh5GDeQ5deMiQMuTDZjzsAxf57EJ1e6",
  "key24": "5kneEhM3hWNbfjSGtHM4wU1U6yyKzj3DHZTVK3GKFgv3tm6VUDvT7eWfGVmB4f1zQjDsupwgE17aKdXyNkECddHo",
  "key25": "56HXC6jymgtFEgji71SWMSzUpKAZmW1wopFfRFbQEo21tSVeDaSDtJqGNJP3VaxUWZMQbix8CQVw7njDeSZQaXPn",
  "key26": "4AqdteurKmNZ4D1NWATzxUqyEZyNSMvPgjCgD6pbv9D4krKmCDRL9Sbwa67iuH5nujNnfHCFvSPpxh4vJHfvs6A5",
  "key27": "5ypkFhySSFR7y86ESRdkHxgbfXpXJ4RYBinD1HXfm5vrpKEqWVoqh8zYUgjCDdJbcUAeFuGQgV3UvKva31DR8Q3e",
  "key28": "39xEidSyZQVM1YTRDa6NAu8CTR9YU4ERFT9npCgvDvpwqcHw6fxsJhrQuTNuSWWogAG4ijNCo1b37unUnNKTkmBQ",
  "key29": "UUuPpXtwFq1frChr53hgoDUsHTxM6QaqoAn5RiVpTxECiwACDxHN3Wqn8tg6ge75uFNeoRCfX5QfsDZH1dHQnC8",
  "key30": "2eR7NubZam2BPYqGaoXkPg1E7ZD2N3ws5K5u576qSzikyGoqtgnb294JHVug1vboYugBZ8o6oB3FzaUVfWJex72A",
  "key31": "3MUfZYrJ1tADp9aa51Tob2vhqwLUVu6ygZg3Szrrz3Arw1UN9tLEnD5hi1LRBCKv2BYzrDgomeFDiNLTtK7x3msr",
  "key32": "3rFzwMPi1sksB2dNgUr5Bt5e4k7yUTu1ut74Hux2R1c92QGZiPn5zxWMMyrzeZeD63ktT6o61hLhxfTkMzHkAZdK",
  "key33": "5d45iFzPFdoBjgWjNMd2GJendcA3LvMqT29kgXqMqqScFUnyaqpqKtufj8fUrUb7Z5rdwtSXVUiexPzedJXhxhHK",
  "key34": "4Yjs5gyF6B5BHj6CVGnr24w6N1X5SLQYHp1p76aM3Fs7QsgnYRS3x3mrrv1odvqtYjaH6jmDDkpdn9zKuyGoh33J",
  "key35": "2Q8XtiPU7VNdWSWVL6KQCqchRwzLZEBczQbUKQ5d7ZQPhYLAmL8BD1HwCp9EJiwZ2T4j1ksWKGgY2qejrkyATFEz",
  "key36": "5jX7tDri12WRg3FFV8eKeVs4dJ1i5qH9uVeAR4y1ZbBvNcsVGezaFDPgn53m2o5qW3HJadN3Ln723nGR1GnYkwst",
  "key37": "3mT6Rf3kkNkvh3pcPuL96eDJ1Y4KfWsZt2y3qdg1dunYXBbSE2Z4MqL3bytTRJWT6vgrXEpQ5jDoavWDYsiXPYkM",
  "key38": "3jFeCGyT5f1ehL9viLgMRph4Sjtte1KRHkUD4NXh3i4qQUpY482EM3fLVUG1kuEhvk6ACjZHcKwDgzvAtuGKaUGb",
  "key39": "3yTKWUE94fWePYxRgRYFJoBWZJZybwC76AfsqbcjVUExScn5rBEUXtws2Yp3miXTLEWjfLjQJoK1rWGqFpNaq9CJ",
  "key40": "QcZgYttYXux5BuGYmygWyF5tfGm45sEtALh9buhPGpiVEp3PzxauopbvJEp8jXMT1LxYgnSSG5yCiVGT8tULqnF",
  "key41": "59JHiUdrxSYftmmHiTT9PN9xDHnLvJdsCUo4pwtoPrkPZHR1NVNAjY5P8GzrzHvPRwND4Zayr3uT6gVp68PFX1Br",
  "key42": "F9ALvPagDhHhuNitF2iXaLTayrYTibtACB8hwybABY7qCFjNQoL23bwbZgNfkBHngJJ9U4jnMtNHQPeY4MdJzrp",
  "key43": "TbstoA11ANAzwZpnscV22BaNP1CquiwrTU5VGWaiUoXim3gbi2nLjnghebefqrR1PhQseA27XWa8VkY3cayUBeg",
  "key44": "gh8JZdrBB93oTZMhmLXUjgXUppLTgEBFnHadG2QDitXHiYsWNZVRko48wsJW31Hqe5qm1ocw887we5eSJMfoUza",
  "key45": "zQotgQkc5Pq2cxA4FFg55rjcCzWAvmt22AVxArsYVXFgTk1NqsvBkTZcTXE4YxrUM39BrcgJmZsc3ZFeH95TKET",
  "key46": "5o2s5euB8Z4CkohGAnG68rdr9tuPcVsUyF2wPuU2aP16rCFd7TaWdDRxU8fQ2ye4QAYpSdCXa4qkB36hax8xYAFx",
  "key47": "5rwLLvKtHJUZGrd5ZyQRZaCsjHnuepYRt6CsS1DNUruLrvPDBVgE8946anvtA1Unb5wcDvpELbzxP9E2iqr3zJFc"
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
