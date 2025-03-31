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
    "24kLYjNKQQxxLokxP5mzuz3BfjjEm6Xve45TFbGVeAX3q6htJEMHtYjx3xws3DgaiUCBRKHCZvUSLQTbQU4MRLHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZWoEXnh2xgU61brsZeANmU3uxhrzJSxRpz6CptQJkXJfgZuBW3kY66XrBsfoL8CGAdFCWzozgQWd8UE93TsG5i",
  "key1": "5N6TKuBGts7f8ycmE5nQUUxHWGLodjutctP3vTms1YGyir153jAFR32mDofrkuz4GrcwQdXCaT2mn3H4Kp6uyGDL",
  "key2": "uCHWvmjETdQ19XV6zN59KspVtUNXiTZUtSPPeNtBKBA63EUMHH9UiiE6JdbpWMeALbe3jZhEFmQKkYBS2mUd6Pf",
  "key3": "3jwhrhFLALd8sh1b2S91FKiuubuwq7YGYFnEhz4Vi4RfcQE7FziynmU4pNYRVa6vfZUs1g13JNUkKap8rGGeEc7Z",
  "key4": "5aP1c9bov9XxKutStS1DbLTXEhRnGED1cADfnge7gXM4r61NtULcLEmaw9H43F1PGRLw6RJjxbca95U7zjN9a6pZ",
  "key5": "3QQqYj1yuvLLvUAscAroHvUMuv1GkBhSZt8ZJsjNTD5VaXXLdWYfdq4LonrLPk8B4TVnCNwgJeUjmMcwxYb5X2hM",
  "key6": "5r3ubLZFrNmKeyNT4As1dHX9anWXSua8ju7RGqsSPBjPrnWrSNStgTeLwRszWNgmeSZNS9JKRicAw6yeP5ATjJqc",
  "key7": "3a4byeCiJxjyzWDnp3YiMvwxLxAGoMoz8FrmQ9tGLwMDzF7gvctHUcqd1iqkfRnuwwRpaXMykh5V89YXqM6EHL9P",
  "key8": "3VGS1fwfmdc47cvE5k57EugfkD5dAmhPp7MvKsfHmEew1UbJU55hX7sDQ8yFaJkEV81h6DQXA4uHrdpKYT7ofmSz",
  "key9": "3s4XKRXt7ajjSK2zufKb3N2QgdMZMbBHotKVHA2y4fQRA7HVDhd9WCArJSHKW467cBCHzuDRznJMRePazoQke2o4",
  "key10": "5awNPSW5p4ZzpGuszqzMW1KfcZ2ZSqdnk7rqWSKwsbodajs3VedL49wg4PhqYhFj2N5JcBCfZjcMAGBneV75r6EZ",
  "key11": "5LD23MZM32VY6GivAxutdBQRLHL68sqmHi4J3RGx9fUcCrPcfaoRVSa2fycduZUWtkQ7E9GRtR6xTcrSTaXMW74J",
  "key12": "3BL7MTaV4Xg6foxTjAFK5sP6zUKfii69PbaiTqaPiTnxfEi55EzdHKxok6RAtFgSLNnUpSaPLrQ9NSyEqzmPm1eH",
  "key13": "hLRdywgf5QvyrGFHaNeXfxuStPg12UJvDiwNV7XdpSbUb9ifXvf3QPf2yQEPMxW9Rkm7kNAoMShMKJAhByMkoCm",
  "key14": "5DQq1yHjJEqhrRzGamV4Xm4dM7DiCCF81DoDon2K2qWG4qDpRDabqzCmo5TcBAA8KNdd18YgDhnYuRX6UEjmu2cN",
  "key15": "57vsEdjBvMRqJAoREnkZHWd4VqBonm5CKHrxq6GibVq5BCjKt2mnCJmhvtWDEXfe57ABYszUKmEqbLVbBHZ7w3tq",
  "key16": "5fVbj5aSUMjhVxvKTthCxRJxT88WKaa9jaFCsKVEDhoBErvWWhrBwTSwYFMthCoDmnPRcaWCw5X2W8oaykWajH7Y",
  "key17": "3MPxB1D4shCvN51zPzDdpTnHEjNuGH4prxYPa5hT7osDAzwvTZFwiL5bveWNkzriopj5JBFNMYuHEbpMfP1nVMJ3",
  "key18": "2qtibtU89oS3SsSVBzrUtN6tFs2mywxy4dRcQ6QhsDRShDvsTiy9nczYtNQksDAiiP88yrmePUbmX4vgM4ELErBJ",
  "key19": "4BRCTKk7J5pRhd38ecjiLWauc9AEbV1RgE6y3L2u8W8jtWdgC4TX6yZU4LSSmhL5QiC9JZybHoqtR6sBwN85tkCz",
  "key20": "534WvVhsbgQHJ7m4WvSekcTBsriGFQdbmcJ22ouuvKCR9samQ63pWdDaDcWrNSfbSXDKgk1CDyk6teKeorpBb6AR",
  "key21": "mzoGyacvMM9YHcd1ETBC3x3f1BnNEVBpr4esXj68ok9FKNdWPYUpahkNdsWsQ1wXkoroe6AerqqoEs7A4V2XGdD",
  "key22": "e8XjGzWdCqxyUuT6Z7z3DAu8d93mX6juqxzmQ2NQF3DxNfuPYuzLGYHwVab2GJmNna53vgUVfvwQbJhWAPyo4mK",
  "key23": "4ezRiVFvEWRtp8BvpsRJwjxVxvrmSt2DU46sptKtbFhMFbX4npJoGt59GaEPnsMLD9vzbWV3wdssFtfwJB3PV1ry",
  "key24": "4iqHiWSR1XYGXvuZmmQVGRrYosPnmn1nsGNQPcSPSdpdvXm9jt8BoHg9UAeQUwUiuDhJdzUrQaBfenYwkh9eh9Jp",
  "key25": "5ZoTcpF4dFk2FbBBqFqNF7fLW58osjTWWpCQB3MDCs16Uphz16w2Udn5BK6K5EDDygYYJB61CPHkBRMrBwwVFuZ7",
  "key26": "3nTtnWYpM3yQS7ayk6C3qNFgBApZgFdDQ16j4mAAPkWLEh5MYM6fHnJM72geAF1gb5cthg96zkn6aLcSx6M1yeWR",
  "key27": "5riNmtg1jayVCVXnJ42gN7jwdppBDKekeC3y47DWVsxdMzNA4Y9K9B3LD6sLXybgT3WWrXSP98GVecPVf7LZYVhQ",
  "key28": "64xdN7D81ULmG1kHH8mXVXZVewVAM2bA3P2UqnWwkyoaFGAVqsL9m4AkZmgFV5Mqf6jkkFGYxwGeXhEgk73KWNHo",
  "key29": "5KU4d5gL78nFKx6Z7MjoXsxr3cRpwLkJdJe5jMCZXsVdaHjvgtGpAekYkbtsnVSQZsBqmwnQ7KSLPYbkACtfEECH",
  "key30": "46yPb4fSmZXDbLm9sEVcjMSiKQLy6g8UHLE1KQscoNEQSHSdtJTCFRcvAzudevnKXer3whLHLdyAHhxSdPsYfXJt",
  "key31": "n4dMSeQ1kQ4ud2mgbT4zGgz4HnGxheijDuxx6UP3Ry1vDjcGp52VzUHavHiTSo8j6jzj3jaexASH2FSmraeTJNm",
  "key32": "5zb6BjxauUqBJaZYg6BFbUCptqbfV7gDPFUGWYaAgEAeWWdRbWuJRreBSo2nDxA1Wpmw1aZqwmp27kQknUJbPnq5",
  "key33": "4tVDNrKj7tzvj9dwnRBzHG6nT8XmCYCjDkmbu46g2csBhuALQC1KBCFXnQimPEQruGNJ11aXqzE6Z3ZHHCqzs9VN",
  "key34": "eAo7DHyfnZR4jmeLQ2V1Vk98KbkTfLsPKHD3RVQoXSnwvjoKpRp8Nb6bhW3iuq38cSb9neUtyXPDvo3jh4e7GEh",
  "key35": "2A3CSLMVe5qBdX4rfqkS6wTcV3fDmB1hYo89e3mZeYZJ9JpRQGgKLBuSz3F8GmZifBbSL99puY81rrg1pwDMfmLw",
  "key36": "3kUGbAyCp2HjuBYDb8FCHSHnUXBDvCcQEtasUXZhXDFa764TuzANWT42tJoNYRi6Ee8M7bEQNtbJyNZE7Ldctb18",
  "key37": "8iTtDbrmMcRBxY9pESQsDKEs8cDktBjxjnEEjAUEphWF5Z155KZc3WmgLU5oCVbgsgrFAcsZ7KzRceTbgP3u3H3",
  "key38": "5eWoKmdZxBtK6fahgpccCQBCMFErx9ntgaK5oSSrHM7EJtHAGh333bVDmUNNGx3ASs4soyKs5aedTSXHgwTvKNtQ",
  "key39": "2JFcrB9zL6vPS5HuuUACrfGy725q6f8VKD35Tx52EzQHjN3TUW85ZT4uhttvwEDJUSccCHL3JovSJixwHE24AfFQ",
  "key40": "3vRHwtrQ2hYCaLYJgWARWRJKM3KVGsDDC5thbAW6ZCVzBnKFwZi6E8tVHxnb5hcovWZhW4Ae6JpCas4zo8TYGzqf",
  "key41": "4g3r3Q3ZBCeSMn2LK4iLdZvjeXGxbsEh8XvvMECnQ9HtknXFRDAK9qTUThqiQcT9AzuzrxX1FWkbu9N6DVUxWmcs",
  "key42": "48KEXuA2WoWawdRnmiE6Da5mdxu6hcEfvxpWk3kEGmeeqTD1dA4XXtS91t3n2xjXnD8XQ6E5eJ2nevuiBrz11cfW",
  "key43": "3oEsqnZVVnifcbC1k6Ry3t8QJeiveDGu3s7m5NidUgSrR3T2K5V8fmEBTEHTbNEVKEthNks6nURvAbaHtXjMop2F",
  "key44": "36Wsvf7TttzGewfCGLwcHonXvBuVFDk6rET97LdrYig2gLvEgTbbsLg9M9w8wRswwqTbtokXxqt2Q1BCeGHQ44vP",
  "key45": "2eTgwENmyBPGVwxJDaZqcL9N8Y3RMGEFksHSoEuMGQWCQcd2JDD6p77LPyvXUYZHxPyvPzhVRUGJoxsnMkB5qPUW",
  "key46": "4Kj72pMD8zRR4JTrn6vkfqFMAwaCBnJz6XAkcW5btNkU3zbeoaqmaDqeTbrC4UHmRo6XBk3FRo2GsvyvhqWaiPU3",
  "key47": "5cMYRDHPw7D48wyLjVQ777rXdrVMbxwiMk3BJ4vMJwXirR17XCPoUVA6dLM8uygcrd6ofGmuY7o4VtaDv539ia3C"
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
