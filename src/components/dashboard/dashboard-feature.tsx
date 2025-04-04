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
    "3qLnitDMzNgXD17gXLryHgZ3KPmn5hxinX9zz3iRES7NwGDmsRhLAzXwBuAiYESHBQdxGRcm3UPsjeeRqCtoBKA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44x66rKaJndsoNc2AGoF4WUGncyHRxTSkX2nHPnuUpgnULUEvKp9nc9o6cLsTjvh3EzE8jcEfwzZUzfX4ih53Zgy",
  "key1": "4aug3sTDidHh9Yi6ncaHoMvspRrMS932Zju4e32oghreKqCzteyeokAfThNM9bwmeedjThUbxMV4xUxbJwCHNUgx",
  "key2": "3WRNdfzLTNJAdfrw4tQNCzToJdMP5kAz7DmV4skuFAUGG5UqGaNPn4s7LHA526NG6mDZWQGvozJxdvik7hzFUSAf",
  "key3": "2oXe8ui8PmmqJ34asTugcozrepXo6qnNzvjbdxP53wJjuDGhCQq8zHjjvBYA8PrEMJjDLPQKS2mSNgzyP4BSw2F2",
  "key4": "2rgjexyUKy7xFhkLsdFgB2hqeMKKBDLnG4jxEbvpsishXTZ2mBMeHcfSU1hBFpcn9Gsy2PR9TsJ1ssrVwG3Y6qBt",
  "key5": "4HQUJ35ahkW56qpQ4JvXXgpFXQBgTKjJfFzEFSdB7gu6yn9yAopmEP7XneVCjnnvy2VKVX1ob4fnG4j37jTko6Mm",
  "key6": "2GCSMu2ZYd89gDLNKWbH2U6deWdv5a82TUvG9VvvqcvSrUzUWEAJUY2HgSXN1KwTGjc1BP19y53cqYu2q9mWi3xp",
  "key7": "2t8vCycCN4tkDpTVn2tKDRNjzjmSsaBZZoCq3GahynRbqV2oBzoicKg8hnVGAbRhSNg5ok5jiD2tomVXagdYCGAn",
  "key8": "4WtWLh9rYrF6U7zN9EvzAkkG3biBJBQLsHsbW8425FjMBKwJ8JV2LsfyUwgKLden6YcHLxuRkB4hdCX7Ta9HJnws",
  "key9": "4QYbjowjCh6ZbuwwmaJ8LqL1Cy1Hhqbqo3Pw6nVfsPTch6QG8sZjQoJnCeLaVA6Nu9bvQbB5p1cqHLhiY4ePCUgW",
  "key10": "3rZ7fy6Y1mak6hxS7SnVo8GMtNG4z1wKxQxxNV7RWrLYZbtAccjXKBpThGxRb2wzSfM1tQHGDvmsz3Jbkp8oVboW",
  "key11": "2nq75hKgXh9rHZzRrgm4Z5cxsboHhxRXR5fJFumnawQ1A7MpJBSw4cDaiowLdRpPgM5GPkDdKwD9guyXvJ62s7us",
  "key12": "4d8xNFezeU74A32UMegi5A7sRaZMNVXJn1b7HCqi7XuuBpuLMAHWnFMdcXGntPS93zWB5stRExQ9cU59miymdwG",
  "key13": "46sxG5qZ1TSuZgF9PWWGiHGjNCGaC96T3aPL2KYSjQ6wNJk1ZweHwerTSnQKoRSM3mFs31q4x8PYNEvMG6mAib74",
  "key14": "2sUPmsJ7xgLkaKNPip9xaYzeBHAMgreHHHPXziU36xp96y4gZG69i2grCLrVbPv7ua5qm5LzeqK8n35dWLAe63vv",
  "key15": "aygKQTdYJqqeTncYV7diMTwZNvRgMEzhvBdrK53tgzVCNiTy9uWdGiofrUtJ5fkqQvJq8eof6WertnjQKt1h56S",
  "key16": "42v6FzJv9nQB6S3EY3Zpmhs2cdWZ7Lpvt1n5BtqkF7RmXsx4fe9Wjt36N2HRFmdDPwYzRy7Ui7vLPMFUK5PNyjZZ",
  "key17": "4HLP65EkFmtXQCV2t5VqtLRvxisjHmhnZxVrEfEQvpuR8G4291KB1em1tkqwXBTKQP5VjHi5qniALtc2q3puU9JJ",
  "key18": "Uv7QgXeXL3esnpYi4bgLuVxx6HmsuMjY15MrpD7pvPqnfKfWxrsWDttDPxKwcYyp3wGofbuoVX7Cesy64ga6Cjy",
  "key19": "4DLWCnXnnmQUkmg2py3SSshn1FszRJcAPhqTSnEZSKD8K8cm28em4wyv5YRp9fLRHPkF7jSHZBzb7z34pVJzf2nF",
  "key20": "A9QHaLbXfzBL2TmsWzaiTaNU51edPreLMzbqGVRHmuJ2PqjdBHRaa2zDPjafTiY1KbUxxtzMBCzQLgto26nHp2K",
  "key21": "3w4ANsgs69qJ9KpQXd9jenzWusr8A8M1M8YFc7Yk8EGSs19cptWHbvV1FmLYRAXDkvYmfFUDEbSSmZ8iHBLKeirC",
  "key22": "2N65GCbTy2LDb8HQ4saLVSXNtNPafgzUNNQxFYJB1d81JrkTN2K5ZcYe3MGCqruD5zVZNLRDvabDpSvfUvTXmwqx",
  "key23": "3CQ5iypbQCS2XtsW46k5vZV1ZewmMrqBsd8imBsYKMWgEfKoN2CW8cdBhgX1NMMzntTXJ52Pjg6TnAXF1F3BMye5",
  "key24": "t8GkxejVGctcCTwvcH1B4a7Ja7TK2H82YMrkn2rKi9RFDFw6KXK6Q1dJ3EHDjpB5DAu9jbSFoZP2T5moTRzAHoe",
  "key25": "uohWzqJrnCNCqcLginYc36b8SDPu7Z4cr2X7nBNCmpp8vE7xL58uyiHNpPqVD4DZv4Haro3R7E1gnfmyU6HS9p7",
  "key26": "5ZY5SrDoisHyW5ifxCyjJjK7mG8V9FFcfUPWPyCTpBypdDbk82YRE5Ad7gFqmbbvCx41xGPUzhurjo3fiDR6pGKD",
  "key27": "4sg8SDaYBWTpDs4BACXmjm3sYda8F6HF2J6cynWvzk9or6AtotLLzhjRmZLV6YjogLgPBSUx6AjQ7nKvaCQxf9Cb",
  "key28": "yw7FvcZ1XC2QjHfjfWeCqDNBsrD1tGtg8bdRWJFt1WUa4UAS8LYopeVsk1FiDVAeffN9VGYVHmHw1rKJSHRgWwi",
  "key29": "5y7qNte7e7ZYxdwJcp2CurAMuLRXWNWL86KUxXXEdhbrzzL8pg5FU8WHZMeaPUzXvMiLsBdDBbvqHYBpVhtFEiLy",
  "key30": "3kuCrwy35R3gTrcx22W6mgPpLqdsjExPLCdoh78pdet2dnR9xLvz9fbdKAyqLCugJnp9vP7Z7Hk9DB3r6jFTv7mD",
  "key31": "JNg5eFqSyTkMV1xT6HGdiLFhgpqXd2PPwGjkGheAUEZMmyZuD4twKsmfGgSn7Jsg9rxAaVDhywNsTM4eRXGNnaj",
  "key32": "3dSsuxfsYrXAa2oczPqdQRGTGBygjHy6FsNfHRbkqS3qC1WXKKzjc5FZ7bphMqM1vEiJBjNXbejPkiLhdw6kLUwu",
  "key33": "4PvUrkMevYKpArtFHwLYH9s9z5ZRy9DsWSCjezz35kJMqwEFAhzK427NyvWJTcPGsf7o6HTUaNGV5BJsAVW12TYz",
  "key34": "3PzjyrhhYcjXn93ywYESDDA5Q8xzLX2sctRTZtEcmTn9yAGs6zrMLvcdXqbWjmJK6yGYzeAfiJAHUcfDWNikDdvD",
  "key35": "3sd5bDocsuW9QipbNKbBvEAbHFC7G27YmTnFf8e5iF3FnVFgBKrk51a62znU6nPUoemMV9SoErCiAUUmQ5H9Zh7s",
  "key36": "2hYbtS9sUT4fCka36H2wqhWHZEjrnPfsF8qrZodjxXs3MsnGjKjP7tNPQkBYW5f3vi9JuUo3Jowg3qj6Y3W2yN7A",
  "key37": "5Vcu5fCmSeyZwHT4qsPXuQxaGAZvbABVELpSk36KFtCHepazRyxozaRVvTmM8jqZ1GrSzx2bMYutdvA2N6WRCR98",
  "key38": "3v8krwaBuqzAV8CGRwatyUKstf7Qizee9Cau3em7jWCj9fvhqgdTJoRPxd4Q2j3r8gpquRhpBuQXms53dVVUf6Ct",
  "key39": "3tKSBvxsTVZaxtctubjN5Vu97FZNTKRThCX3VtZbiUsfCJU1yoi1CrDuUeyYw2dw97KkTBm2pFX94L9p8hnv1z2t",
  "key40": "57PNq5MHBaaFStNcmXo7k1Xqgn1W1xZ5Jf42J1woLXvv6JTB7BrRikeYyiDZSk8tgjABj7TWT934tvz3ZV3Y5Y49",
  "key41": "CS5sxAQvHtRzv16qxoKqE5igSwnwFFPPhoGGEUuh3av3pR3u2ELPNGN4aQnceEpJfiKMN25Xaq4P3oPzTv6WhK8",
  "key42": "pZuTA5T3pSosgSJq3HA1NEMF3Gm4Bw7yCXMYUFM6tvFJ9SiJSG1GkyTzgzU2Cpqh9USeG5wvaBGMw6QKMG8GFm6",
  "key43": "3fkaLjieo8qwC5YRDxN9nTDU1xJPD6tVB8SKhPRnzPBvNDtxZGVHL9da4qF7vbEMfZctYJ6odG8uGwDdTpLtU2hD"
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
