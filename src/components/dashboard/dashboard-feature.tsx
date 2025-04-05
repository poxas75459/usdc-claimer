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
    "5YUXrkSzZzcWoKcWfvckT66aW2ZUWPaRyvUYE3LAMaYqC9od8np6XnPeia1emPAWHYfiUVqeZQZwn7KfxnSmqjou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315WViwJUBaqWz4jnbwafutUrt8HoWwdCzEq3cgFt5fF264Ww6QEv8K8DJnzTzSpRgVi1GXwbqHAMxa3Q7kFHYAJ",
  "key1": "38YTtGc9shiBJAuLg5kQCw9aRPsty7LzYzAwTKqiY3kmGSePMGFXNkTT7CDjbWdRhwtq87djrqGbFwEzAHWZBNB3",
  "key2": "34whqKsPe35ZTM3h4Dc69vpEN3YULZWLszSJuhALaLgd3xNrApdUtNrHJbH4eaRmaqG8ArP64GPBXKGX6DXciqan",
  "key3": "4GvbAEfmnMKvdr81PAyonqrAkzYknN6RxDvQ4XP8Z2NEWNJUhbAQ74Zxj5KGt66BKnfF5ZAS4Ku3wLrxvtLLDMrZ",
  "key4": "2xWLZF2yPn8txW6XWvNTn1L7FF1ZUNmFAhE7scYEhBWMNAa6fhjPTmWkZZU7FjM1BXw1WkQn2eVWLc8JBcjYLpa1",
  "key5": "3fQ6DVBdnzYtyfC3BXE33p292NGgKH67KN1zRRYtfJX8QxTdGtGxUPsoNk7w37DiCXPpJKTsmktWYECmzi6FpHbG",
  "key6": "59tSWPSaBmwYQLfrHfL9sjroewZakaiQZurnFX1jdpv7LmwnDNq4ib9k4gozCpsRgfZZNgcxgeTcKKvehR4WMV9S",
  "key7": "3T9e1qtREq8xiaUiXrHDy7hYqmwaPu82hM1xNGmLQNBRS8R1xhcc78thnCdWJFoacHhhLJjNQVSXF8ZSuQRRw2UW",
  "key8": "34Fx46C8bP4theBw1RwNVY3VHnnDQPSFFzcYDDaxdu9Aj6FzzTLmo3m1fGk1SRTVEGtQZhTGkXCBtvsEudmiwX54",
  "key9": "3kgutJhpRhayGAes2JpdSEF5wkijSiXN74Umyi7qN1SFuZEK5Xahw4ysxwfgn1zXUguWpq4XbngQQzELwQQ3PGut",
  "key10": "2jLedpqqUmueSsRzVgycripy98eGiL3UQh9VDwMS4fU2EXLa7fVPyzZCdFa2WD5dVzq2yD3CqbQHbcHCTQq4VxwQ",
  "key11": "26RLiRoTH1Bx6iYYUbtHHuYPxqtKWKaA5Q1SxSxpBkkkThJkNsXTgGqS9Q2g4eLTgW8fxfAjMxBaw8VwJLCx6Xzj",
  "key12": "tNiTownmS793cXLTAnP6UoPz33Jyz4dq9sb8B229262YKmX4CqGSwvpUJMsnCkaMARhUoks89kw6Wek3tH8RaWz",
  "key13": "3dMFNubwdao2VyWbrxcwWuFV9367EmFssoHux6yoiCeYHkJvZVkGFG4iEDhApwDzmNtzmhrtMA8ZZu14D28m5yzT",
  "key14": "4Usw5T3AX1RXCq3iuqbgrtTnwFhuKDaRjVGwK6vjsnTkYQqUWT6wyHeNtoe5szecVQLUznvZHXjUDXf2ZT1HfLnE",
  "key15": "ax8NwRjGZ38GSFanpmWLNKuHEtKkRHhAnDoHZv9WuoXa2MSrxBkmX6VJ97zNhqjArxf3wTiBaSz1PdjCquTkiSZ",
  "key16": "4Kd83x8BjydNVFNtvU3BmRthi65QeN6woSmA2WLR6SsGzWJhXjSCpqqSLtsUw9bexPiGwy2eJt1kUWNq1pxQQozv",
  "key17": "5BhDUanJuHQTr7ncrtA6kEYN5uDntD5buBA89JGtZf2dSTBMxaGwR4sXmSUf5MNaKo7GSsi7Duip2WNRqYF4VfJn",
  "key18": "cA77R4889YGn58uy279orw2eMDgfLyESPiAxfKuiGAU419d4Kf4ECZKQEmcapg2yYVseDkVNvuoMHu5oJLTz7Fm",
  "key19": "2fZghB4AJxvCMsbMtJ2bqFjYPkTDMi6MJYMVRpAhV6UzEA64fbDDhJ9FHWshXVCbFRcdCcyDTfv899WnEQcRwKSM",
  "key20": "3gNKFkr1Urupxyee1MZUUSFyWJmaNa4KwXxQnYk96mUcq8GtjBZKSefKJuQiXYbzqsCdD4k3cqn2jYnrdpzXBxKL",
  "key21": "549pZ9Q4b33S5TJz7hJwVGmbjNLERhNyUZKHZrsQS2HgxDbLeCSeruuNiYRZscW9N4Lq2NkvWbLTc88EfvaVUnGU",
  "key22": "3ozhRBUGCiRAzAozaqXopcY7JXwyZsTi6pL3g2imb7v8XhACQKhuUa5k4CvtRcqcjBoyCVwg2W2xkZbQsbXjUUBH",
  "key23": "5rJUYjxaFhLt3tZiduof87nRCz72qhM6Wyi2LSokxXANfsxY46WrQARtjA9PHQJnzrUi2Dbz15DrKSZGjkME5exR",
  "key24": "2sKmG6xGjZaUzdTH7kqrSaLcsVneYcqJagyTouVQJ2iKBMmh2NNFsPB2Cw9JsjFdTtde4B6R5yeWFLvGCRGFV9Zp",
  "key25": "3TEbYGY6YamSBBTB77WoYtrzDb44fu5FNKtie6k2TiAyAW6yPMVRaLixFjP6PadkfyNnnj5kvzStGYbVJsEjLufF",
  "key26": "62mf9PzyDAB6k8KMKdeV2apoYs3Xy6scxaijkzJWj8S2hHdDcj5b6t16ofonjtmatzsWgRvrHRZh7FTYfD4WzPst",
  "key27": "onyRwVswLmkPvsZaesnB3td6zMi7hodNyGE4VVLbW9QsfbPnm5wwmTerHbbfy87oacmHyTWHtcETFXo78GAaLkr",
  "key28": "5KpQJAYTguDTuJsguD8YDQWKn9mZq6xMrxx7zhpv8Z7zzMwTwE9CXDYmmFSw8W4Gs4Za3gbWUvPtWUSJoMYanTE8",
  "key29": "3DRrJXYsfrsDig1xbZsdE1zAvaM8RLi9DTLEnEGiwsc2sqkobMsD6DdV9YgZ317dvbFNdGtx1Bz7yQCRDBi8PYk4",
  "key30": "3MQVVNMaPgi3SWcEGDfn2qjNUK7sHU52XotbMVcDrVAkKGougaSH8gkXBxsbyoLzbctWBCZKFVrXzWiVtCufMgei",
  "key31": "4pRzSTuVeqTbKeKEPLeox3u4Aur6TXPGBp8Gra7T1bo2HTSng8VJC7khFR1LH59ztqb7ez92Gg4J3kbcduATuuf3",
  "key32": "5hCF33KNcia9jcZp3rpfL8uAvE5dQPhRBBUUhLNEmN2gik1oi3KCwWPAnG3XgMVe6xHxjKe1J9CKYCCiBqEXdP6V",
  "key33": "3tei9WVpovCYkqrzULjPLAJQ6zAjycwtMciZkoJnm1ukwStWZeGVhxcA3vFHKU2TG4sxQsSz4HSEHpLsirFehuDg",
  "key34": "5dhnWAHQpT52Ec4bFoozN5KRWoUks6YUMWv1PJLBc6PAdW2Uut7kJyaDTcyyZMTTgZEWXtjkzCKUE44tsT9Gyuk4",
  "key35": "32ReXC4wyAMjoqAxj4fsr2SLs4cBxBMjzfMnwYPuZiXzypLRMnngKLLSLocx4UCqpQ16wHoXYBfYVeBPHV7RwjdQ",
  "key36": "2heANvEy5uYwQAuVLZRwkwtvpozhbYMz3ozo7UeuAzoPHPV1314iz5LkRC2Fc6Bj11iam8aV6F4R66Zmzmd2smZv",
  "key37": "4Yim3zPxGbKxVzkBMrvYGiRKdhpA8bRMqFieiL437yih5ER9EsUjYwZHrsbSTk3oeSehUpr9LuBCvtQbfYxXbfnm",
  "key38": "vqjSaSpX9PUihJnuc3ZceD4wTLzZuVSxd624AumzzMTcnR5DPWTCfD3wznxURu1VCn4E5zSHfsgSQEePupeDVQ8",
  "key39": "jec1kJxjCg5ASynwZujDC8pypoNNNTyYdov6wftiE2VnGaCmfaispwHPuVd9iQvdvpXffJbLsBg2s9Nr1GwpiNg",
  "key40": "4gTv29oZf4EH4ra8jAWqKs47xNA957d6zvcgSj4oKY5oRBNRb7CCmCq2UnqVasgz34B6PPs9yMUnFZFpsm9P3aXZ",
  "key41": "5jcLmiYZjgDoUTfmftht12pRvUS5VddXQ8x9km9Npdi2XAYXQ4X5eL9Ld39n7FBJ7z5b3KjfUPcQtUADzJDn9NLz",
  "key42": "4YhNQxuJ5fZCiJxSHtgJM3G7zo7ZDYwKq2bPJkGrSQN5STVauvwkXmNhvwUHpdWUJMqwumjQSGk4g8o3GWNVezCh",
  "key43": "47FVLG6apwsEEXVmUeXPynbSnoBxWQE1T8RpeCBQAgqFFyhL2CYdZFyE7Pm3spf27Z4DXvhRCnSi8HPf2HNJziry"
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
