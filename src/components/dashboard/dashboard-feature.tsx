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
    "4PuJnY6cGTN4LDyvioKe8qhv97TSmCQAT3AbzL1zibGyWUMRWqZTm4SoeeRGsRLZyVdFcHxfSyvpsAk4D3SKkuQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2o34se5LjxFbrKPCaPEwDXWxqjEBAaEAQcTmU7EsZJD23QPzFhHSHM4FZ5Bt5Q3ep447LgkApyRyp1RYQ3cES3",
  "key1": "eQVZhjgyHU4LUT15kkkrtHpvCiiViLYbDnoTFqRua1WJW59Cszz2Eyic1vcCmcgXRkcWm6x6kQfjuUMfjPrLzeW",
  "key2": "jrvE3c6exoWuz5n2CtwVqYxR7F92cvwsJUaxRxmahMvYn85AFo5fL88b4ngrE8wU6GYJFnDokZcwdHWiHzwfnrY",
  "key3": "3TqoPXMVb7VDHHAu2WPztREYSGVdQjkGMDWA8DusFqhwpvEaRBWViThCty2mPixExLdBQWLyDo46vXXCgvN3Dyu4",
  "key4": "N5dssu8TjpVWdPKopFrWhsm1gBudQZHnssb5avE68DHyvUD8yk5R331FLwspCwPCcxf7467WZo8pvjnWH6g73ju",
  "key5": "5jfvWkLXB2ixYmMqnSRapEkkpQ1BP7gGvvi59t24fbSe4fqS6tWaY7WW4msF66sLa8Hres1xbwsGR2LHStL1ANNU",
  "key6": "3Bb5AvcYvnrJGHMd9S5nxsKiX7PBTN5fCsJFVzXso8SrWxbfA4G42eXSQWR1Zc9XScLRiQ7nqfUqPKP8yFbfVaFw",
  "key7": "3wpAorSo1TMQY3DFqnsfcWinc7D4wG7tEEAK8ikv6ZRXbdPgJbkvAercsMoP9vF3D9UxSgMsXZkh8MAKU84ssiwR",
  "key8": "45KuZkiHD2VgMFyJnKW9EgAKMAYx25b1mnoE8BQ5kdKv4eBCDTaEnrKUhzv75th8wSSjySKE8gZ3V5EjLQTJrtAW",
  "key9": "jdLaX9nYUhcE9LiJsnL58oeV38WBpeRSzZcusN3eZXoFEuPGhZCt1QGsG5rvTAZUuaHi3pPGFuteyUaxe3gayzm",
  "key10": "56yBRus9e1nAK5x7avbXCA7xzcfGyNg57YA3iWoMDeJVMyM783EuHj4ojhHsQw3p74sTDkFdw3GzPvXQqxEvAjth",
  "key11": "4SyCrwt5KtmUoYrkmLvEb3QAjFwho7V5zzekWNvfTuvwPBMVS9Gox3Y4xfcWs5Do1y73ubAx6q7wbywHkrLCFSrV",
  "key12": "5hNg12iysLaPfNEppKBRC27me56752qGVyFbDurdeLmq1hdcDhL2fmY9xdt1bQUetMRQqcuTPgebdryMGpd7T9Ng",
  "key13": "DCpTDtQAMG9bKTFT68SGmSwyvGUu9qaX9APxdERBVmCG3oUAENocWGGxeSwqV6DuxbeVBhJNfbsuo7zB7gQvrXw",
  "key14": "5aNz1LVCEacCmywfvYshmkFynUmyecVGmGrdKjr59RrxxTbjSgiBr586Wu8tSeNaVf6Dg74mxtivZV1AcCzGdupU",
  "key15": "4xzm1WrHn2owCHkkDWHi8adGdzyDxESNF88QVtmkp8VodwX7okgyfK9iRkVqrgSpzsrc8tj6N6zVvxus72vovgyJ",
  "key16": "2euFQfvQsWoBZvKGSJdE2L8uVCc34xB86SAN8ei34xt9MTL8epc268mrvr95fkm7APT5up7zQcMTB6nVJVEun4eR",
  "key17": "5aNv2K432QJ7hTM9N54Qr6bbKmCpL1qPENUoSfJKhcT6kULeaPLGUQd1FcQ7X3FsEpqrdPB7abpoa4bUKG3JCZHW",
  "key18": "4kBsvp3LBvo8kdHvapuc72ndmhbUSAYfvGhGVd14UxYZE5xRYpGVAMYgGbq2PpmLkb671C4CCqC6fTFs2PS4bB8b",
  "key19": "3JSLCuz3GBxbY2AxGizTZmmGosiJmHcQdcKFr64Wojt327WYrfXhqXbq4E6ebSSTNu9ev5kay9AQz1X3VQjXiKaV",
  "key20": "4xCCxarMTXAJwizeBDrFkJHo7Hcj9Mc94QRysDucASqSVjrSKgRQQjqMqW8118oYga8shEgg2pMDDNkm2Ldgx7Nd",
  "key21": "2uVJa1fVrxKNfze3MAD4zFzxY3DfqQqQSFfggPdiSNADdKv6sa3oC3B53pgnbykthn4zr1aqz7gAMCjCSYQNE2tc",
  "key22": "3YxsXrTKeWpf6rRxMCGoxxyDyoYyko4LqJVtwCDuDhwCcYUCHT39ZRvfnpa4KSZt4tidZn5Lf2gUF6BrnFBRh1i5",
  "key23": "iifSvCUYyvkdYqJSXM4qZ3bB1wQcAUQNXx3chWwHUoR6zohDoDJ5tP7xfGGH5iGaHwCKjQxp8UDCCKWf6Y6qWhH",
  "key24": "srKzjDDSyJtJ4UHGQNP66tkvaB4Naqz9v75kx3HTiyUbpcD3YbKxLPonVkMrQ35UBE5s5ezkQY7QCNYzDXXjiFR",
  "key25": "2cbrKt5oTHWKWstZaLot2qFCmukzVtSdQ6pwcYs9Asamakzk1kLqkRto9xd5j8YG4X7eHRP3VwRidMM9eubeVcZy"
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
