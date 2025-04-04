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
    "3CzH22vSpbTE5rUk2iBJXZ4cQ8xaXcdUJdk2yXgoG1mqEN77rEcuNcshq99hATyyU3ZCTZSYPn7RDmUncQiLC4p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EKbqhM6pxYUqQjQ1wTGfb2TTNoZ6EDzCyt1w9b9weJ1isRCP4je2QtCM4pfi9q7q9VMaNxGuj795HUp1hmoQGNK",
  "key1": "61ABf5RiW31L19wbQPiKHExWtXZ2PsvtsZCbTZvDvU17yCC5FrsQ51EN8AfeQJZmwhC9AVMerWbkp3TKrAAKQRVd",
  "key2": "5tQ7u1DL1ctb5TrxReiUxuKxbVUGJ7p6ejwTR8Yaxyo5DeVrgXSSaWuiJYA8XXnWLFNvSri1CrrHwbDwfkiHYU4C",
  "key3": "3Uw1dVXBhRmhJyRt1AYpsZpyRddMugmka1dpaDRNF7PiEPJRz3ejkpo8oPSUZZKU4zhga81MyUeuWY3zFAYKbxUT",
  "key4": "Ygz2fWGbmv4snHPX9DKgUnLz4TovWTZ139cgozXtAJirp4JeWhLswmDiKs1Q2YLsGb159cXwnZ6hvEJbsLuyeQg",
  "key5": "3aeTTAqx7idAPkqzFRmrQtz1StKhaFbguZ8iju9xKUuo5A2C8pP55BhK6Q4WnyAGjHjfRnWKicoum5PT96d3UHTa",
  "key6": "3fCmau6kAnpvpi27Fpfy6D1KymHjVJc4A3doxd4Ctq2VtWYGXhxBKDg9UmZK9PCB5PtfPtZMD7JSjiwD7iviJd67",
  "key7": "UXZ8emfiDw3Dxqn8ZCuC3UU457maWGGZm9awiaHkU4eNSqUXQZMEy4Puzp9WY91tLXFriWJWsjEjm6Dk6mRyggP",
  "key8": "2pN8yrziQyBMJmNc91bXpm957nisdKBneyHcjkDCwysEHZuuajMELQdATp7EogDWXa87a4rhKzZD3qD3qwsTUF7a",
  "key9": "3WWWVdAXrUpi1suyFQm7aLXUuBfti1mJHHr6xHwpykAWGYm24PmhEuAEiGbd1Lv1hjffsxdrtqDYXDuW8F5fE5Wa",
  "key10": "3wkpJ4PbrCu2QjVh53TZgQKf7M4x9Pg6sS2y4phJH9aSHFy1nddYadhdRfJYwQHipe1wLDeqGUZFMkK8cPbumYEH",
  "key11": "4LpsaPUeV5GfR3XZMdm3i3543mSiHMPwcb7RvSQtBD5UUJ6G7oJ2mADqM8NVtWxnjL2v5YSEpYahkkiwdZEBd7De",
  "key12": "5Twg3pBit55XU2nx8YY1kMWjmBN3yGqzmj2knuj8PsbNuPkUiTbGU4SCXhcfUQZVkmuAH7NQXCtetPBHxde8pp4q",
  "key13": "3szJtdgjPippadRxwTvL5sPVvYVbSzZpsi3BHDT759dAoUnVju2xuTEJgErxu7HbkTD7AeGVif8uaJDH8hHebGfU",
  "key14": "pAcEAEiLgoRURAAE2AVn5aBQ29hjsvVowxZoKgDpNmyZvqkR2EN94AK4hUpcGvQuM4X3vZ9ThrBLtopgtbXaQtZ",
  "key15": "2xgpmWBAk1iMb6VsDcnQwfBGtjKNfYRwPbqQB7DFFTpBwicixMVNagRwbjp458gMFKSoPaGFPfmARMawrF6re7Ur",
  "key16": "2JDdE998K9vp78aQbBTgqPu8XE6mvP3PWBinorJi89DD6BcmYxuh5VRvTcU6UfZVBKESyKqwqsiva4WfbtEzsZMt",
  "key17": "4DUxQfqchrMpCitQtBLVLkJPthWWsxoNh8CwMAFyYAX5Wd9PZkRBmzSkLaCpAuNKcfqqdFTo8hPYtNrm61MR5deU",
  "key18": "vN5jPjdyABMHjLduHS6xxNsLQVfAmwzb41hou8PKHRZqxS2h5kLSGQjKzSmSipurrcTdsR7gpX464yQieLie4od",
  "key19": "4ekj3ywBmBq79mgDh6abTxcMMjwrVECfspNh8uQLTc6xSgHURBGCqFsJV2gavTd4Md9p3SKtHyXPztFwbB7xbeNy",
  "key20": "66RzYf7qLLLa5asE7NYuTnbZqP5qjSUeNJ3ktZhh4XSiiJmnLDbaExvCHymwtcrRHPKUnSM6NxA7E5rdgHx4buDd",
  "key21": "2FCXcwctWAT3CnWDcoXYUnVTej3EDf4rW4vUX8fKqa7PQi795T3QobcP1Eeuyb9Mo8f3Z8jYVS3uSgqtUDiKGk5v",
  "key22": "2X3UZheSRu2kagtuCX5qp4zRaA6Z1i2sYfjNiegGFctVrEb8mztTAzdiwNkxJx5SFsmV5usLvaHfJze47i9xx6x3",
  "key23": "4bWtcR2XzcRWB78JDPFiofT7UPg2WXnNFQ5CeZ7dMhpHMJRRVF4gpnxuYSBgdF3DbCZQLnABte6bAFC1D9hgmGEJ",
  "key24": "32UQVzXVNLkcQmBvncdK28uwj7D9cjAUsjMAXoqVwiBW2gX6wEpwNKEXMS4W8ehUpaNvBewmHJuLHpSYWJrc2zUX",
  "key25": "fX2DZQuPkvBfBaHbjJdmfo7HvHUe461u95xtUbkcXDusSnFReDjHn2fhDLo145Cc3CjyeaGDVSiVDSnB3mCoSu2",
  "key26": "4vnkNn5iM7Tmy7LPPByNLdaCu7yioWhras736kFjR9JEfQkrEmCvKPDLP82XwRXJend6LZrmZtaHqTwj3BzBYhNW",
  "key27": "4KduYpuTzh3QaUkHUMp4Xu5Smpz9jUTwG34XmG6DN1kGSZx3LzdZVznuZL8xY1Y2jPEjE7tKjCgnrPgn9a3YPa2A",
  "key28": "V8GRBvCkpvPWnnnUz2kvz7Zm4Hw8ZUQEGP44iz4tP3Jrqr1Zi9DxxBNt8soZRxjEAPcTFGrjufu9ZEsFt6zDDkM",
  "key29": "4BrZEhMpYaehvoWtsfxgcZJcCWd8SjupdeiFK4uXGGu3cpeV5qBXoL2egDKTrtmroTwncmYMhmSdU1oVnSNTAr5m",
  "key30": "5ASrEyd5Cfukmyc65iCJMciQUY4C9G1txTTR28bSPC3W6bbrCjjJbwSCEHCQyPAmi9yLepvNE25H5smYvow8sG6q",
  "key31": "cg27HBGtatQLJ35jDseo6KC5Wgp5dX1LzMVhTrZHBhM2orkMeC7cUxNa7pyxF3Kr2Jc1pdh1XJgCBQdhtB5bp66",
  "key32": "5f4tzC4EVr1B5Wwtd5aeGXsLRBWoZEHvtAkNAaRQkD8my8ZUiEeFBA5ye9CZfxfuhfFXQJvFmBNpHjQiuR6kwXwb",
  "key33": "3k6xwc53qpN2k6U4StYGWwPnnLedRGRY4kVae5BDfkNnhAP4QZNwVDjrGLiKdiy5Nmi8Euwdp7EfqRs7mfy4TP7m",
  "key34": "55SskGh8cjdYAhdEP9SvvywzuDKwb9WSNkGUETLQG3TJy5sPA8t4HPeY7KQfFCgXkSHNQW9ptXakvGUDW2eKhGhY",
  "key35": "5NoPCPfLxyGLbxBsuGJGc2CrB3r9soR29yk9vZbEp3gjRZ7pGD9AwPJnwtxomDuC6gmgggxVUSjwiYBx4ZjYfxXt",
  "key36": "418tCuZNPq8hDdji8wZYuxkzqCbwXStzeU5uzfR9TQipkpuYaR8PLf8rTC7Fj44WjLaby3NUs6mDuLyV7KwATjqM",
  "key37": "5GMdPkVsRVekUgsQtuNxV1hnoicyZL2ysSRtBQAgkCAJbhnkp2kRkqk4wbPBLRgLsjk9HfA66cv5RZrF6KZdWSEQ",
  "key38": "3uG5bSX7TRQHyYGsn38gHjyitXeQAVsrhcueJe2xQHTDEtgQC7ZXmXHphdvzjDsiHerJoST7mVFJcZH7dNgiqX7d",
  "key39": "4f9W3oCEdzucyg1gJcYuj4DjACsexSmbGxk1hab5pMhTi3DH17K24Xe9W7JRwusi9xuLTGESDTHhmWXYuuK6rh1H",
  "key40": "3cMZQ9ngrwQTHGUjjuGusmmRRkMTy3JRs4VgJ9Zj53mBP48REkTXpcRoDQeZidN253iGkftt56Me8TvCDMAgjzBe",
  "key41": "2abHyZEfgSY58Fe8x1epoSM7dKXGRmcWHprEBdDHpuynt3H9fWFv8rXWebv99iwm3rzycTRQyYF1dAc5bm6SSdq8",
  "key42": "3m3kcJ1cNL79TEJfHrAC3hTrzpYZ4u88J28w7ye81NnEcC7Xt5Get7wMTPDNKbA3fjq4t4APSLqYjYhwpsYhUdAz",
  "key43": "5R3PKMsvD8yaK5bZNX8EKchgyPigMZ5sPzu7CNw6jbsuf3k8537FEp49VixnEJyzyzVgRBLXStDwQEZHEbjGLVNP",
  "key44": "64N5GGCzmHJv6sucm7kMuCpzUeK1TXjLWunSHuXpJnKoDLFT3XiPnAvimNPWrcTEdbkHVrzNkHv67ny1DbSfBntK",
  "key45": "G3g25cYQHvEhCVu6VdRAgBVuVyAeMrAJj8EgNvwZaSNpTzsNPw9Eu2RyT1gjWZq1VkyePqhtpmWBG7eRiyeti4X",
  "key46": "35wHoRT51NicBkj2GyCLVooqcRyi44eZW3VLrJjCn5sbJbHAwZmLJoKvmGgt7eJAWggVtiwM2cL8KPtYjUtyZXcK",
  "key47": "2GxakpQMS3KJ8WXGCXwj9k9tU7N8f3byPsAcUhXoAjbymcATQjqEKpF5W8r8ZsjhyH3ukfmm3FJN1Hh174XkwFeX",
  "key48": "3ScB1NroYm7oVNcXpaVQDnDTN18qq9zmDBRt9wkdmaEirehAFwamq8jHQz4wFybPNi3y6zqAFaHLPNc59CY6KHV7",
  "key49": "252mmsUWnkYev7fcPYpQtsAavnJboYQbu3zRQPhvGSc6JBDP19wAXozK3wExatm4t7VRFrrhHUpeh6oBgULpBZ2C"
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
