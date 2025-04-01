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
    "nkQm2ruuVLf4id7PGUenBLTFaGV2Wd4zcU6o6dMWvXtaXawUaph6Xf7RruWnx5QbCysbU37sHVgHTaxvp16wG66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BbUHFDGmmJoHqP7Xcfn89QFkfD8wMMKAj4WfhVpuzGsiaNydpmqcS1xFHp6jJzW2bcEvf6HBiVynPCtLXixVia",
  "key1": "3Zr1C7ZtFr2njcFCevwM5DepvWaHN4wiQL2osUyDU7Af4y6CLJCdtGVKX3uWzwUZ4UYUXDTta4JE6rsSZfA22ubS",
  "key2": "RBEEpfgqvKht3MNuzAs1xYCSnyhyuopR5hh76RutMxdSN5pa3xskYdtef3K83Yoj6NxZAhZGg7w7TskJWUooape",
  "key3": "2vS3cbViYDxydptFg88MrnnE98SfWz85edX8gWGxRRjunwSAR58wzYGPBY1hDTG1UHarf4tRHyBfSHkfo72VuA6h",
  "key4": "5NmiHz74uaWrWgJ4rSdHAbH7yEQZuN1orXhY7A8i5voGENjSDBQWsUT2A7wirVewNNwi6jKjxHWYpzRrE8KKsSB9",
  "key5": "4kiArAejqq6P5GKbSQeN6ri4pGQrh7khq2DEjkqPUndnDSny9gubQNWUWpqmjxMGqYguGeCQJ69yLdBANJox7n2b",
  "key6": "2hcssbeqMTfdfbMNtX6CBqJSSX3W1Ag3RNzEQfk2NKXV9o8rMkxeozR2QJ8HhVF2FD6ze3GctNNMpwtuzfEcFET5",
  "key7": "2Kzz6XG9FSvMsp2gj7XpbGTSZRxfyyB7zSoZ9bbsRFQ8zFggnik7cvnm25s4MoSNwwQBseqSezas382XhPq9cz87",
  "key8": "2ieZLag4ZLgVaePmsibjLVDxdjHnk3J1Ra6xhR2kAMxEYD9s3p5vdGXGBWX79YjhxSeDY3He7fpK3TensjXSHNjK",
  "key9": "2isQCaofPG86EAdFs8dgGcZgB9Kte7j5iT7fuyPvipcgpLpnfoybLxM7pYjsV5vXmA3bRgDLzzE1Z4jNTU6j2geg",
  "key10": "5eJirHNNZ1dQsyEAwn15Cu1k7FvBo7PqMyt9FgbigaE2mqrUGt3GW7DshbEAgLdMKXgMaSsPMqShHYryvrERc24g",
  "key11": "4cj7EUV6oHmrQPRenqFVznbWRWj6BHyZ13G4GeFF2iFHnDNm3HSh3kCN5YyyeRBNJ6PVJjQZTGrf1RL8PevUDA5o",
  "key12": "5c5ujziRzikEGKPCJcsaYTXRiB77RRt7PEdrMKCjMX253FhuTm647H8kU94dJPjdg5fGb98DVhuFi76cHyzY3FbF",
  "key13": "4ZMjrcGup6nbVNC5ybU4jiGL4ByJaJnyAcXsrzZ5AN4YjmAYJ6xGVat7WZ5MJzFgPvdGuZXLotaKLbzezRmLKPgS",
  "key14": "m3j8Nk2mkTLL3Y6GgScB2U9boEdHwAD9Lgs9NZZbc1AyKyRufHMYzbHAfGxq3JGK6nuuPV5JehpPnYodGBfRN1m",
  "key15": "NFfmyV8u76wRZc9o4i1b9CMsJnBgJ5uWSdA56pkuvp3EHqJonE2FkDJTekSQGZztjLonDYVzqtHz3y1nFW8wd9r",
  "key16": "HYpNdiXMjWGJ6daviEbn72tQsFdjSYPu19U4bxXcnsbRJ1FEtyQ7cHJTeN4BhfJqkzcrxUjrNU56CjtF5z3MkS5",
  "key17": "2Wreab4P17u5Y4ou4ht3b4hXyWPQwD4zR1TDfk7YqxWYr5zqmahK1kLQwMebcHMmEtvJnEkc2rRg6c32kgThnTp8",
  "key18": "2JWqHMXVED5YDEsbCQT6gACW3Xih1VCideXEc79i9kQVGZEezx23dJxqH5pJ3PyZE4scAbeCRp6r7rBDpiXhZKVA",
  "key19": "3BUz1sW2PLrGBrGavC6XMV2bh13X5Yn8M6eUGHhb42Vi1QwmL4Z9AjL1i63RaYGCAEdGPEvoNR19KbWhUcDy951u",
  "key20": "FNoXdkU1B9hd5wnutio76t8p7ZDuTKiNPpgyqYiELzZyiosA8W9MCKRmYmgWBapJ9QU4UwCDUNoE4HoH3ws8opp",
  "key21": "2L3HLzn3hcri8dmuhc7SbrqF8sD8ZH4FuzeC8UAaVGYCGyUAdbJn2zy288c96d7pGTtGx7R27gyGs2XN16GYftpA",
  "key22": "2kpELoXkevvxKo9mUmLDRYtSPtVirdSu4aSLK14VzSGWs9NVMXAowkM1gfg6W5DcVB7SCeAsaWd4pheNDCYtQbQX",
  "key23": "2prw5uAc5d31RDWoPVfyYLRUbnygUZqWwQNoaZHEeH9juSpMZSdazPMQkxq6JtS45UMaAEt8ngGhTaGWjosn5n9t",
  "key24": "3cWn5mPb9dG1rBL6HbMrCtqzqAiSUJAPHSSYRJxy5F8jskUsw2ma8MT6m9k7FcYDA5qTMYrWLd9YkQdftGFBMTZ6",
  "key25": "2KwFgNc8Fr91SUF1LHL1X3JmDy176DLXTkNJ9b29QZdLmMy112kDgeyLyUj1UMxgLznyaoAJUUkjuPCoR9xoQVmC",
  "key26": "5Mb412fq91yfuBMq57dWjTXiwPgmmJ9qHH8ZSYW3JBtkbuWoU3rJ29yPSHRsmagBf27dwURAauwLKWva8Ygashih",
  "key27": "idWJ7EGurJ8uCTWoUBWCYpvV8aexJAj2gpUqyqsJMLNwQWKEtcwEz1d3Lb8HNLDogyTpuAjEnUK2j4JHGYULiwM",
  "key28": "26ZrTp1b7FJ77t1yFTLjWMXEHafdPH9pWZqQ829zkPijTL4rNUbxYDjJDP1ALBggFUB92Nf1A1mWQXPYGttRaUkp",
  "key29": "4GqsoMeZ5c1xpiTdDjTNK5zzJbqwFmD39593sBQFKu1jEkMvEmQF1hirXYqJgMFrb2vhPknnfbcJU56LsCfitVZA",
  "key30": "gWPjcjEAf6CCd8fMoLXqDkkYsfjZnppzfDHkkDrYTUXVFSfDemyUB9HhdXDXQvqDJxFwMM32n3fgVevCRVWJDTw",
  "key31": "2Fqsm3e6s2wpUqUByLKS6WbnZYzixr1uNHDt5XsmCtcyAH5mKNwnZgTPDLwMC3XoKta1BxRFmToYW31AkvsEbMGd",
  "key32": "2NzAfMsk2G34U6d9ppHES3SF6zATZZ695KmZaYMxLZVX7B6zzVXFNFwYgdjBqcSA6QTZwVg152ATr3x4sVeJauJ2",
  "key33": "46ok8oUFFDCY3X74i6fUhzXEG7EM2kqvQch6Lg125pyeLm3XpUpb9jS3Hsy9U1MgHeyPqSkuxfdbxdTMqoATmwMC",
  "key34": "ANF49CkHr52fLhPc9WC5pv2HgPvkqMuFi8bcQEoJBMBfKWBkEDhFftj1riNCMA6mbfmzimbyJiD8QsiyfF5KhhP",
  "key35": "4ufKqVKsGoMPFn39LYSibNQqiFQzpGnSPEvkLt7nQsPtkMsMCbjn4PCpZvDZ2buQLKix1LTrVV7u2g2e4trxfhg6",
  "key36": "269TSB5ysheKu5jxPVvChcuu5vs2rNJmWrrTLH9JHM5CYbFvScTDjsVm9DY6kTGTPpaRSj1QFdEe4bDKq96UruFF",
  "key37": "5KKh2Xxf6WwbtXc12vcWYuDA91FRaTMP7nvTUkuUD287D3avcgkwpbHSqNpxhivXGXKXxazHnJ4N8Mi3eZXGhp45",
  "key38": "4ERJKPJwcfnypzvKbKuSy196fKTuF6jyKtViJkDuRP8Y6qVQpsBDQ3B4GyQqAv9mwKaKhuEgqSkLTrwbPCURpYvq",
  "key39": "dc81viasRgQZV69acgJzZGzCZHuaZRhqrqYEV94us65uSdKK94xpcXURNK6na6tRbJAkAiYtx45vTWZStQksRQU",
  "key40": "3kf4ZrBQFZggR4sU9mLsdBPpLUKtyDVSg8VTq5zw7qX8QzRNgH7f9QyKkwAQJRvFd6rMc29qQydjr5JWbrLLBcHY",
  "key41": "5M2zjQVVAQwf2dcFUgeDFXppVbKUsweW455LqsEhFvjGdNqxwCHkGoz1aTeenPsd7WqPkuJKLJpu3w2Ao74UqHGv",
  "key42": "48yV6C2Wq55n11bLiYYyQiJWvXBsXbFJ4pj3YKgSP7z7mwNZ4rKoTQtVLKJb1FcRQD2kFCsrNvDmKJZaCg9CNrRv",
  "key43": "4iKSg9LWtjofRoRzrctdJ4MuDJeA9tjQsgQ1ydo68K31XxZqUBcHPo3SgRSD67uQqUCCiSzE4VSeyueKZ4z9iCpE",
  "key44": "4hopGL12SiNMa5RpjRugHKHJ9NFqbB4wPPbGNMv7PdTXF8PhwiAhosRAkBkmT8hb1gd5HQ2tqSzJmxvFSb74m2XG",
  "key45": "4nuncv8T7bZrVeURVwEfDrxxqEeEeLV4APSeg2pVrZtdwetcNGMHNaTohmbNtEn2V5WA14thMTyh46MZ7WbunqxQ",
  "key46": "4mKLsvyB6yYPXhE3NoZZMHQH6a6qmjzZLmoG8KQnWA6N82ekJ6CRGMC2FWKrWRAqvuRiXpuj8AUa8crGtkb5cGSa",
  "key47": "4mKccmEYYiZJbkaMgs18YjFhpmWK26Vve9VxEtZ1Sy3g3Ru9U4AjXhb2EQsURAwPYwF8SDZj5FwuxiorbHJ8F9WQ"
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
