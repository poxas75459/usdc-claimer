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
    "2399oBSeKL6sAJCt9jWkWrkVUJa1NPHpzFBpAMtLPQC7SzHimAz1CVn1dxdV8ydxWnk2rY4X3PXoLy3v2BAGeo7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXYg8ABBZpPS5RBBnhJw5xK6hEuHexfhKzHoSfaJjQUfTebYDSBM3gFwB415QWmjM2K3krd5mVRGhtWCfNQWF27",
  "key1": "2UhZkd5ar7xtWWruWRrtkqX9irFW3ZjuEnvXiKFpqGDdikLgYcQQUvv6apYFVjwsjhXKzhAAmHrkEbvxtb83Kiry",
  "key2": "5RMvz1tAoXhkv7omtDDa57mhnSgtiQ1ed5ZZkzSQyBkz4J73pDrQrj5FmJzWcZdarfh2HBDib2JTPGxWdX4BGet4",
  "key3": "2QyV6Su3NgyMk6Fn8PZaR7xMBSRHdQoWrPckknqHqborVmZFaoCCxy7zjHHiR8bqQ8DJLsMTkbaURrXtGCG9WBeh",
  "key4": "3xKucLrQFxjVDQScaZcPiq8je5edk8ZPdmJKi8H4N41uZNWiUssEjK3p43e5Nj89uuULoYLUvUUrZPZmoQKFx3hA",
  "key5": "2gntdC6egQrLuoDPHuvzW77NR9HisPe6PDqxx4jr2av4rnSscwcVXC1kheKrrfMFBnj2rxhSuhwY3YZxS9smk4cj",
  "key6": "2wGuMPEMa3StNQRk5fYcpPZToD3f1b4efUNdYjjuSn9atoVP4fzhT8iWkn37Mb1dVQuKCMmGrVCzwev9F5y1Rg5b",
  "key7": "4AZEcjwng9KPRN3gTvVvbEZeH1aoF6KnDbCNMxvZC3TLFqYP7jWSFQcTtkt48rhugQ6PEDpHCmbGxx5VAzx6gW8D",
  "key8": "2E3rDsaDTeDofKUCTHJnu3SM6pe4faHJExNGJt91WBLusEuzNDzEE5ggE3tHjqVxNmJKtaFgUfG8c65ELLnmLFF7",
  "key9": "3bqNitYTsqVDNqBaMtSjTAVd4yXknttMSs5Ewx11CbehxFbwCB91h5FzBysjBNqTUaqq2D7s8p1MXdFBSiX95v6S",
  "key10": "41uMep3uwBodFdTkaHKdq6emdRwZ2sZH2LQSRt5eBB8wyREFPGc48fpopPhxBr7HizJgSo2Wjok6svcsZEM6jewG",
  "key11": "2RpxYAzEgrVNr6cwCZm7KD3h3HRNwXDwDu6hwHFFNZwfxnhTeEyDgKtKBXHWgXN5An6KAV9xi9seHCw5WTBMgke1",
  "key12": "5GtrLsRfN1RzUmj5KVD9qbyjVsoHhiECc78o7YgHLgeV9JUcYcxKkWaQU2aS4bSFtxBzWCfj785Fh378ngd4e8iw",
  "key13": "2ZHchmoWW17qefwvgk6MXeweC3xhhcKzjrJXxftVGYCwzfQdK7EBonEhDHxneDg2WBfAfcDrQzgtbNJoyX1DfMF9",
  "key14": "2zEzTAvFrdQSpEPSZTT2rEwMFycjhyRbp3JajFtXFDANiEHjNJJtPTvEPLz3mdkKgPaMbFG7V4WP2hscaqoceAhB",
  "key15": "3Grqay2WHvTr3iCTK6Vosc7ULtAGv3bbwZz6HuNAweoGuWSRCYo66yG1mfJVFDvG1X2V2ZkPwV4xxdFVzMbZnnRS",
  "key16": "rKU3bZncnZJBiY9KcjoYEi9PPHHcgp4Aanz44WNKx6UmKpNp58eXDgGrJJqzjaWhCF7fihm3HUmiNcta7Fm8d57",
  "key17": "3UL3tuNyKf5kLHkYneKVkCn191gsUhE7iAS1npZS5CCN2A6CkP6urkmDvVM6tta1LLV8pmmHH7kTahtqvX6vr6sS",
  "key18": "2KFGobMEvpAfQWVvUfSgzGg6hfkgmKmyHRxZAVHvG8hNgDGWik91JfpsAM1xXtihkiW8aR5HZN3XTTyDsTZjM5mP",
  "key19": "5RFnAJRVBkn4jre2kLsAkxNoPcmFpv487hUjasoPbAYdkcTqmTo3V2gaARipsL2jEtXXmTfwq7XuciKJSrKzdL25",
  "key20": "4EsnXDJECA18S75RtxovJznWuc4H7jK4THtYxEieBcAewpmqG1B58GcuAsqBVzyLY2B5ieX3SYjtKgQ8fJLBdRgS",
  "key21": "372D5ygQfbCeFHEqe3BbXgiHXxv4rxZ84Ni7da6bVZKoJKaUgd9VfT9QNMdg3aKkaJd4LRv4gh5uNX1L85pcSaVs",
  "key22": "4vicdqhELhKNCSj2aYr9mHyXSFZdNKJYfaJLxa9v66dL2AvKFP7C4QFydE4vEVbteTg3aKiyC4t63QRRefkSqppV",
  "key23": "2nUTA7E8B4Jj8BFxVMZ6SFaXeoadyWn62HAaz1EbYE5my4St9XtVoTeNciva9mLqnSGYLwqyEv3UcuhCRhw524v",
  "key24": "2B4Gb9P64q31KhHTYFQ39uTCLx2bJ3e6UwUiUCP9FFnTsrPM7wxqjN8SUQ82zi6kPmGzJrxJNncCuK5gUrbGTKkD",
  "key25": "3qr92WSyJkY1wvx9kPGo5WynwcMuqfo5FwsDwb8bhYnWYRfsRieAkx2eD9t7HiRF3YFFuWVjMSMK9VAZXkh4U63y",
  "key26": "4BoPEwfMPTYhAdUTp8FQgPZPTaWEoNqmiAbyZcEU4SsipVwxAM4YVgZtP7Z3pBixCjZ49Wq28tJBGVay3WBg6RbA",
  "key27": "3VqXipvAVNvnwaJDLmphgoaCKZes1UHVZFWfdTqXuYaS3WBSCVijPjWD8iAj1W43kkP1GidRieMYMwskf9FWPCZE",
  "key28": "5JSuVSLZiAKQY2DawnDu99xx9aCvVJNns8QYTeySWrcPNz5XSHqTxfqXcVQmpHrPPNZcTb8MFwCFoBnJ1CAthk3v",
  "key29": "31aZHWqwyZeXFBDozBH23zDZJFXRLJamLXbsmssUrccTBYr2o1CWwQHew6L4hYFQr5bJYXJ8yEFsJyj8JcHCeoU8",
  "key30": "sM4uEdbshSxnq8EPF5kdNR3Pps7eUbbvfzHQQmZaVqKmsLGrCPEgV6mXt7dNTXvwhpmH4SCQ9Ap1faKEdUgXaMV",
  "key31": "61TQuCzrcvDJvPeADCmhCFfrt38qHnLwX5gidu718BeFFScBFL57Ht6dcbEXZCxcTXU84dMqcyFWayM4TusXb8EJ",
  "key32": "d2pKmoq2DQkxWHZ7eBZoxmmEc2cPBFWViQ23RJChqd3hZGMuD8nwPW1Ra9kjpkrLqXfEX4TYRdVNkKym6XcfCSJ",
  "key33": "att3xuvUvR2s344nHSq4xEV18C768EMaDRf3VqtoNRrptboKN9jCWhotR4dL1Tm1q4ED4oy3dHb32pBkiB1zG22",
  "key34": "7tWm2qzTjgf4fRfAD3Zxjxni4een7DRFBT7QL9y3Mn9zwobwDbgsj9MHCB64ttUKZKy5venepd3zXqBXTjZ7QJJ",
  "key35": "441c4U66Q9GXJbB6u33GPBYVc1wUVS5wCUCJcn9DffxR8UJR8h1aor8UWBccau8T5kxtzYpnqY2PLBrCaMwwKtnA",
  "key36": "5Ay91tH1SG6JHFMLAStbe7pP9RXmBeVVrGuwCrf6AKw7KUtRzPB2EBVDG3pL4cWG2LZaTriFbbDjHUyVtknCtLJh",
  "key37": "5FF2YjSYr7H7uwVjuUVuagrF3R3tC5Bwo6fxMJAiBwP9ZkffhaAS2Xm1SzYNFw8N97ErenyGTK3bc3t1pCcePZX6",
  "key38": "4UBa3W3rC5Xcc6hNaR4i5qVstZY3eXS9urh1XJtGC399Ji2Z1jaJ4Noa4Uz8tJ2ZDPh6QsjrGseiHEYQVepVmk6o",
  "key39": "2Nff3xgpirFYB2c5KzkvpbAwE6CrQcYZaZ5Nnd74T6cKLw9gYdkUZhZJgJyvCkVBKbLbAgtDNXCWw3HboyjTAURP",
  "key40": "4GgR3rbwu8o4GBA3ApUaPfZ6xhLsuxLjkmgPqMrDBj39XgC2TNfrCnjeqJjiWxFY8DD65fdySxcL6zTBB7XQDaN5",
  "key41": "41zqUG5NRUwqC4tyjxfQcqsQ3vmz92zqpZuVvxc4k8sW498UFQV9gkBW3eS9Rdw3ihMnYEZYW2uAoSgE8SfBSe5o",
  "key42": "QengcqUZ6k11FiJPmPsVNYCEqoVBDSD5xkYbBX8vjoNQWdKr7NowpY54tbaCTGuMd8jeyy6HJhzrEtBKtznhWoA",
  "key43": "2aLT96HcUGyK5yjCMSxikabc6KzSXvBFrAJcWeBBteeKfgW4Wdt6gCK5TmjKWFLScWkKhJyic7yybTWKm35c84Li",
  "key44": "236jmm2wGqpe6hWhMv1iL1M44yEZ43xkRYezZEkweJdpKXiUytRU47zBWL4eAzL1Jg49umrxBgVjoLyqy2AKsnJ7",
  "key45": "46g6M6Ctc5WpSody258TMycZyUqtgf6VzTkeAnbnMkrKWEqsKpDRqH4mPcHPkRayx7pz58ao9jrBRvQTMDJFBtU8",
  "key46": "UptR2GyEsmw6ez1i9uvX6Ag4YK11SiW8Atsw3obGqr7xCnoirSGiaa6wkp9eV8baBV1KPPCXabd9RnyMegehizV",
  "key47": "65DmHQWQCHaVT14Y6i5r8VA43LjrkHKmaYF78FDw5CBXxSpmdXoo1WgQ611UZbR1CzaNq9wGCB65QP5Y8cCiiFah",
  "key48": "2DyN3NvNurmhD4kiYe2BJudDJmVCPrmnapR34WDvpnAZYUQTfWm1xD7cdEzJ78G4pHeLdjhz6e7L6WXswAsYafiL",
  "key49": "dNb6cPzfJaBLzoE5DJFWgnKfnSi5mSxqTnT5mQjwFi1eKRCnY5sbZmoVwdBhsvYHumWR6LQhwj9JHhD2xXuPtRE"
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
