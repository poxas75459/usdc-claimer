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
    "3yvhYdmER36xbMnnvGDrDLVPkUnu6Sq5sor4fAoNFRrQKRzrQY8rxNWqFBF5SheK78s8KzqW5mbgkkGM3shgohq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BB2smpFDnR9Z5JXkd2PJX7VEKX8K4kv36JZyVMDP6LzE5oc58z6UUtgbWugovqndAYnN1McfTLzMScmzYz16Gwx",
  "key1": "5kEgoVi6phcHCaLK7mMzsqNR3Z9XkC66KCsoo5igtAFjdpE9ZKuyyQF8ggtYT63HF9x4VNABJAoAPtYosooaxLKr",
  "key2": "3tPnQax2CzWJ2JkPzHVeKwtLoDXKkBNq7cALWbwkC5Dr7CWmkyu2pnbiTVp91ny3Q83z5hwiYFR2PT1RoAUKgvvh",
  "key3": "3dngyEHZcJ8H8ZoiPoXL66E1eq4xCbNFcLzs8fnMue7M8xDD54YhKKqCVMoXBQZGdVpB6yn57kSuHvAKx2yGCh6j",
  "key4": "2hYdEi3td2LNKTGXS25cR9GGNgu5ukxhGutVWNVjoG7dnrTWFVfNbwQenH6YcYVetPY4T6nwAA6ahYCUHHb9NJy",
  "key5": "53Y2XUPNdb51fhCbwJHBQkafxfDhPeewbVSqdj8HzWdgQAF9ySJpoHDuyHxAdphhptrHfYP63gz2cUAyRhao2sv4",
  "key6": "39vi1KVXEJ3cYHnNd4jbNbtHp3hCmtJ7uwQHLHqoZtq1DWiwVPfguXJqi4WdQiaUtYw13AwNNT1v7SPnWJpNxTfJ",
  "key7": "5TuuW4qsKrDtZchULgkR5dU7q9cQABiuTfoMVZQJXp1ogfB7hBY5Duzm12TAM5eqZ5GMtbw5LgvTbVj8Tu5aAAtn",
  "key8": "56yLmNG8Z8Attf6UHrMek3211sWEjc4Q4fkqJowr5SM4mXqYzdV3KGHzWg1L8DABB6aAYQSftfofZmYSCcN8UgtV",
  "key9": "2C2i7bkuWkwT1FHgAov8QyaDcnfHQRAhZAHWLyM9mPbUZ5466g7Lk8z3i8b9DSrBieNABePMbeo6tU7W3E2NroaB",
  "key10": "a78YdV3hcSEMyYRbkHDbD1a9Dm6qzFpPwVKcAxkDxihRM2GqfxZAJiHwtbPayFqTJs31VECCCGLQWDAaNj8ewS6",
  "key11": "4pGAwo6x8QUKjYxCtKBobqk6xg31y34hMxyxVeWKPDNwi3TzkwPU4mH6gjJGFiPh8MpG7rHDPqFcE374bFdHLKSh",
  "key12": "3Kp1ydy5u5rkWqEL2nGsLPyeBz93W56zrCqtv7ioHy1aFPLVrsNTAnoFiYU4sGWzZ8xDpVrfHCAQG9CeD8wuPBrk",
  "key13": "4WNnGQXVh2WdV4QQqA3xDdwhdGR6icWRxZahaVWikmTNKeoUsGLJV9kRWUw9xFJDHS8vrR51NeLMEYjPjoTNgkYh",
  "key14": "tqx2JLTuwn1pBUoGadqnum9nWYUGSR9hVfYoksy1MWN5CwQP7iNsnLksKVsobptDjdc4MwagZQYda4A5P787TSf",
  "key15": "45C4NtgWZYCo1RXuWqX53EjjDU9gyS1K5ru6sTpL5iqhSywgdwJswr8Nv9hcP5sGsehyKm5FGEJGk8y9FUoeUx9n",
  "key16": "44GxbMhxT73Q8oRmmL5Hywe61Y95GAZnkJr9SBYvygnxDUtCYeDU7sjKWJQekYHwYTvxGHugFkzb3CmeMScnnZnn",
  "key17": "2WK6nVKEk3DYhoZa4yp1ySYTu8ekLxRkoNdHdKvDFtoFXMN2H1mEnAzj3Qo1xyrMnCZCVBgtsPMsPHQsuoM4ZJMx",
  "key18": "3avihFwjVeRWMueCBhaMWDbVN4qvVhbJz1NnAHQZKgFtEU86ErJ8vndqh8UgeLGnHh4LsmAgX6Xo3PqSVKosodAy",
  "key19": "3QsedJZC58PKFYD9WbpoEYv8vCZngyz6cjoSAzheebrAK29uq8tEHSkLapEgTqSc83tRxsAMULoboqwjA9PHkzo9",
  "key20": "5is1DHVA64HQiJUJmgFN6GJHf4P1gGG353N4jkZgziU9BSfpYdvgk8Hiq6tuhW8k12fMYY129pT3Y9jjJ4mKuvcM",
  "key21": "3thRpzdnnTG2fimgvpgo9L5mVgmM8kamoMygaFvqyWVWGgAFMf3Yz1GTncSE8jpo8XB2jcF9f9hoULSn2s5R1Umr",
  "key22": "49PydwtM1unLXJJDGhtQwAei91ijhEMZwNTs2FER9EgqfVd3Nz7MLu8mkuqxYPVCv4hNGmkiv6e4E3nRQzus5ty6",
  "key23": "4aJfvS9dFZFj6Bty7SRCgHhDp3VXwFcGbiCyvBkyrTWs4Ej4ks567dnrASSQg6AW9ALMxqBmEGxWw9qizDRUnDK3",
  "key24": "3qdHgEQ92JNfgHyqyPpwsKYPDPTGFpU39kpEvEZPBfAKbFLzDFVocQhiczr1vMDFu66npcYH7S4xqY1kNejBQRcn",
  "key25": "59drGCVapbhkKG4Jk4GviGgEfGQiZMS47NyRewabuHXuCptGMKJGjmQ8EbDaH8St833Nj1NAJvvaHTwSFuqurzyF",
  "key26": "676k1Kj1UqGg9r8ptLNDcAA9bvj33Dejfsne7BCdtqu8mZfBYSm7fkbAfTAJdpZRXNJQytrXkoDLjr3X8Ej3ShUm",
  "key27": "3fMT89kqwmxvwfnukR51SsaigPqVGPvqm75KQWiTynWFS7C9hEcLcR1vv8LdTsT6ZY7REWwBv93fdYz6YnUotabg",
  "key28": "DmneVgf8obpKqAJLcSC5SJ2p8YAtEQgPwDaPXVdWJ5G2P51uM9u4YZzH2QkP7SLpAxEF8vokZQovWu931QXPvcY",
  "key29": "762m7WoxZtt7eN8tLicuUaJK47mhegsRvXD6DM2V6Ar9Nib4CbKFwErjPLBooGfWmrngXQBhhVPFGtLskgawG5w",
  "key30": "5WcSXBuoD9jFEtxoPNXTjU3j1hhaCUXLjR8d24DHFiAotBKRBsEK2S7ZzkDMVrhdeprpkVkZvWtcTmVVUFLpCfQx",
  "key31": "3qZjQp2bzFfN8LCUhfhiPzTrLeiTHqc5fyrDSc4iMTtupFRqhjsy1fVuc89LpQu4W7QDMxjeLCVTMKnADwvj7t2F",
  "key32": "48hUaJBjW5BLmKA79Ug5XKBQVLZoDJPq5PkXwBp5jYrZEn14EWDZKbYyVWtBqb26sx2j3XYCMdWre6MRtT4JFtz2",
  "key33": "3DaTKZb9eAtmzT3b1sddUVtiLFhgpnmXcXN2eq1kxAadwwaSBqe5o83ZjFiL6Gxr8595gbrXJYreeQzXU6mmFJku",
  "key34": "5ih4TwHjxe4kXjN3fXAYpkhfux1TqD8KowUa5qeaV33uqKieuQzk1oWfNtknSyQiVxYAh2MQT37x8zjdMoVMu2GA",
  "key35": "4tgn3aiqodwNnqaDZ6x34UxM2UC8knYQJg2qz2asPkFhKKKDa4qJnaU7DLdDwu4heKR6xCSxfcbAYf5F9C46XZW6",
  "key36": "2rLpMLpQiwFcHFMUK71pAUuNqj5BHnNLfm6dAA7Qn4yQmk3TYqmiVRntLhE4vhmENBsmd4VWkgcdK9rFucN4kLwS",
  "key37": "3ERhyYHvNdwyJ6HVmc2TiP8XRve8UWDwXP4FYVP6k8JF2VX5fwV7EPNgEKgFHrugMF4nUv6gnAWfK9wvHEhukaEW",
  "key38": "2M2ZKv71bMpJ7Rg76WK1cPas5GFDB3SkuZznnVeBDGpPY4dKbiEkma9YQJt4fVZgDzpdF5ZKXiroxGbDuVcH7LCG",
  "key39": "3ZwQAFY5gNVTPBVd4ASDu2LuvtU4ZqbGHwQsaH9Q1AjsZSo8EULhNud6yfdKDbWKhankbUsHFMkhskrt4bCw8SnV",
  "key40": "tKNG47WqQTsnUmbo3Tjf1pnwZewG4dvKgJ2h14b8HAiszZXBg4yYmmajKQWCTf4s1pdPywqt8J1vmxc75v6wHcT",
  "key41": "Lzk79bvLGXgDc5zEqZjYs6ojTaQknKQYSeUeXeZECjkHAkgBq8VSUYSvMKE7GEbv2oZxDv8z9jYQJvgq2y46d1k",
  "key42": "49e3QTU1dvJFSrRaUhMZo6UcGP4Ciby26QxiXpKWKYPA8a9UfHQzdUybqbkVd7TuxEsFk7ndsdjA7fvx9nWU8a19",
  "key43": "2WDYkCdWCD9Jz8nYhyu8rZ3NAGbvGMLK9Ko8a4ncHYub8d5RuHDQJMGCnKDy8xG3cpCgsY2k7s7YGkbaPN3oGZrX",
  "key44": "5LFH4fn17vVZREFNpY8ErrSunC2SPioic1iiiWXDYREFtDda18vtHxuVmxeE25hKFHGBrYURBAka86TpwoL3bCjE",
  "key45": "3ZnGX97ZPdqfhqQKybAYVQioUfZez4SQdgKuv2kPCVGRZP55WMcefTCCzB57AbR1sHW2cRrnncUuzCcEriQ5pj5p",
  "key46": "5hTjLq97ggVVMn5vVBHPaQr6rfXA3TRozsJabgE83GyBDWBr4zpZAzxBrmnP1GWBHbYcYT6txTXUkfVy5p9PvaCu",
  "key47": "4tveCZsDukPAD6HDUkRjqoxXds4P3qEVBeu4h2ed5o2yhbTkQj7RiDtZ8BMPjvqsopUqRWw7BVcBpt9MKW7ZJMFF"
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
