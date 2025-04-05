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
    "vqwDLQrSSbjxRvT1h1anwqmoLpK6kcx3P1bgDpk2jvhg73cQCCjW11TagjbV2aHXQDQSwzGTpHNxdPhmgTBknnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phxPbth5bPG5Mby3BfjmCBkASkcSZeVFDsn1mrN8szZ6FDeSMRBJZEEoAvitM4QoSGhmrvRHbMa3bRto9WKxsdc",
  "key1": "2pnr7UPNcZFTP56PDUYv53i2syaDM7moUSjNRaciwRKG9pdJ2TBGqP9wSZtNfF851GX75Gjn6a9ewgw9fc1MASto",
  "key2": "4RPeKMiSmacSJ7ZjrFA1WCULG57DLjdCxRSqbHcjGvApY5jQtFVSd7DVi1xbw6ybq71HhUDkdFENaUcjhiFzPP3j",
  "key3": "9zX9F433jjF7iM6whih3xrwUE3WBQkef8giZeXJFUJfMKSeiB54Dq9ET74WQDNPMqjNXbCoEmPWbPXoBGX5n6Dv",
  "key4": "KXG7LfrycBN4a5sdtgBgydstmKEAyT3fLXBXae9wqngTC37qFSVGYGcDvVA1z72zsS2gYPLGCk8owPQJExuFy2X",
  "key5": "A8JssRThKVWa2GaLdXRoSRGTfQ9JEsART2k2xEWjF6Ce7t7iK2QUPiorU3TNkxPYawotx3Y4CQpcCqhX2FfWJVx",
  "key6": "4FLrb9uLUgjTP28jRDJSPWU2P4FfCtLEDjtViByys3j5kFuh8dqL1vAThE2gX9tV8naWn6xnkYEUQBSNTijeHYkc",
  "key7": "4zeiFJTYZYsA2kha8ynXWjb9dtSHn88hw8EhB8KWk95jJtD3HhMoeDAEE2h5LvQozPWNjfmGpmZN5Af1coNpdV8W",
  "key8": "4E76TKf821VSFJKNcAwYhK5FHTgCYw8ye3iCKuG2JjfUUT38UEZ6fkEix9ckL2YxrhAngCdmfH4o42QE9VugJfkS",
  "key9": "3YHNVYKoWLQpnDgjgjx7YSjLZwaAHUJtccpBnfArNWLDk2eTrHph17Jo8CjH2yMJPTEUS5ZTXNTe8kU4tqwvUPBT",
  "key10": "3RkY2fqwvykEz39uxG3uyhetDgW62NiQejcJhdJ9rK8oQ6AUbPPgQukTCaJYCeUxG19ocGdhMioUUhTgTzx16qiS",
  "key11": "33hv6s8miYMxrpLcsePgoxSUPVSh5x3KfHYJuda1Q7DAR5JMWWFeEs4pVvuJTEBb9e5pHFQSnif2Dq5CcegHFAkc",
  "key12": "4wZ5eD3uXsc9fawgHzeVwK17Nv1dEFGBBzyutbmdh7FLP3zUcdgNA64qUs4feWrcTNrYVtJUBkdEkB7fKxhwpoNG",
  "key13": "3mxD8dtR3kbvTATDVhYS6UDDkY5FbMbsMR9BKPJCsNqrvR47DEVEDmbr34TUqovoKg2GkwEsxrtSknrVjgSUQ8st",
  "key14": "teURBC5GHYyEeDdKnP2rsTkJTBvVB2upeyxLq3uHRLJB5mjeHRuc5SL8RyHpsq74r2oT5m44UKFtXikaQLPLug1",
  "key15": "nifa6j8gH3ob4VfYrffs65uFuEMwQy6iSyMipJnyGagoK8sbqEMy63pQZ5h1fhh2gfFkD7q72q45bnqvWhc96NC",
  "key16": "3Gyu5VeG9DyXUQ3U6MkVUsGFYro1G95f7x7JwoZqZmPcRJc3bSEbGvGhveom3HiXHwAbDp7bYDXdtkFUMgrXjLbT",
  "key17": "38HsvpKCcF9fFFb94X1r6WbpKBqac9JFdrUkbzsq5gY1sDuVyXGuAZUG1YvS4dYkntwy2evEPVRcE39u3Rbcki6U",
  "key18": "5n4FuugM6t3qpBTCgPDLQZrFfckxTVR1jLiftUJWi6oqxkUH4DkgaytUxWfYrvdD74RjXGHd6AaVNVHZckjNa3iq",
  "key19": "5nfJKFAk5eG2DLeEvvXtHgmHy3ZuyVuxnnYcDAh51s1128E25P3jV4sv9PtbNLeX2sXTLujjnhNCKqYSk26MTMhT",
  "key20": "vQjozQoZuMa3TyZfPWvnirEvSd2tvger8tieSBWGpmge8fhgGrbrrCq1SV5CtWhiSEEks9ceNWzeVEt6F49E7ME",
  "key21": "2M8pfDakvihQv2XNFp5XgSfRAWAu57ThEYxRQYbg7yGBuKX4SGwjoRmU5QqKZZeDh4SeTrRfHxAFFZ1ko8U8KdXB",
  "key22": "4CPi6bXSjwNynH1tAMXxieDcFrmo7XN1CA1mw4kpqz9GtroviXaAgnfSM2dCZgET85a8hmUhqnCiihHsduAHceg5",
  "key23": "tp8EG5XEksaqFa1UmgYWPT1Tyti9beAsH7SAQzJQ4YsSgw3d5ZhvcF9WAsNrMU6HfqCp21y4Hymb5bpBPrnUXVL",
  "key24": "4DcsCfLLXEK4VZQqUXucX9FmXqHpDNK6tp5wd7JMnpzjVTqPVjvcmHvbXi5NCwVHTewBrxswc7jryaAN7Ko2sBGS",
  "key25": "sss8F878em2JF6UGUiWmR2dUYZwmNE6CYY5cx5B5gPDskVriHL2KoES8qvxueZhWjo3biCV7v8kqKuNh49BmpQ2",
  "key26": "xXbjVFV818Qk5UF1ice2PnvRxcbSwNfVE8LkYSsfS1aoiJTEVsneK1DFmcS5h6Wmxz2Efu5KKT8pAyYvg2ES3a6",
  "key27": "61Th6sDDE3UEvZorXyhNJtoeixsV44Ny2KqmUgprzXsKV67K9M5o3iwNMGcDrfQA66Ms3bdo5UuMndc7vHKxTN9Z",
  "key28": "2wjG6DVf5Uv5xWdYUSKPGmbL8xeD9qaumedEV7oPv2U4oWL1KKFbWgnr3FU7wH91VSHUS9FxU14KGaFsezKJeTKP",
  "key29": "2troKtbfHcTNkj4rk39arg1TvxZegLwwSbDvxaJZFcWyrppkvqzpnT8FLisFpan9iGngGHaNomLcSjNEfaiErWdE",
  "key30": "fJiXimELRiLVi9JRp73jVVGeDJn3ymfDU1MFGZnBePhMHDYCMCfUBQCn7AVBiNCr9kwhHJQra3BDR4N8Xs1viaX",
  "key31": "hBp5dDokQVFNYF7XqLaXgypR5fzxWuDDSFitzXhEXwYejmr63i3uTrFfHW1nxJJX1LTXobAcw11a4WNMK1EpgVa",
  "key32": "3fGNgu8dZudUvnwMVVJFFpTSSGHs3aoY5MAouGC6WoVL4EYNrvcywF6HYGWXmQu5gfTxirmFLa5Rz4LiswxnHjgd",
  "key33": "66CkaMxzjEz7yxqBG5W4pnD1QsrCdA42doFWzm7EpTGwNvxbTqtkMaLXdcKQ7eXGHihM7mPRJ34RWUbyo4bwagUf",
  "key34": "XnjVPQeVhaKwXwAx4rMCeVYuSwHQgTguG2KDoouogy3iuVQDwjM3FdQmriwwk85rYV51iy2bGFJq4BJWdUHv27x",
  "key35": "34U6iyUaMJ7MiPtTuizcxndQyptQVYpYRjYYEF1uEZaZSUa44vuoZetRSSSBDEJUFu7uk2vavkXK2ExXhnNAk5Hc",
  "key36": "226CADv1E5KiLGoJVWhxgcLdEu5RWY2km7EjpEkA6Kesh4CByHXFRZzsLfqoyFDsZPoB3UrmgoMJTVpsrb7JJmLz"
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
