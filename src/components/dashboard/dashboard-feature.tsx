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
    "2nMuoxC8C39XjTzrvRgaWg3TtcqS8nJmPX3hcGFKZT52kMyagGAHpYeSVoPbL9dCMLRU14gT36ufBYEXH45chrWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1W7vm7DfeFw6yKXshuGWuDm3byadFgcXvWiKaDa3daoD8oEVHysZp1mYkrxEABwqAJJKodcPKaa9Fpu1eHv2ko1",
  "key1": "5Cn6kRhiBpMoRptBbLHRsQzHJbeRE71uEwS4rxH9YQDDUZKGAd1SwpXdBXDdsur6kJ4RXDyKTaLcVKcUWM3oWuMs",
  "key2": "364otu9jm7CVTurGRiB9gk4oQ3WLgkonYFztXZQLR4of2Yh7CPc436pWncBbb42y8i9mdsq8GH5gyN3B5aSkgVXs",
  "key3": "H9XUC3MaEgadfcqz7X5qHHrwdmddjWaTnha1uvcj6QCqS2idzxYpvNWB6ELUWHXHz1apPB32hqdqmFKo2JmmMv8",
  "key4": "57GvqUyXsztPUsF22Ayr3GLvWYvNjZC5WPL3zzTPqeDC8ngLfWBzwSVMKc8aqLSdopQV25o9MSPp8vRUrXrXZEnQ",
  "key5": "52STpo8hn7iFufUgZ1BKXCSPRDBD7SCuSWePVmsyd5Ms4wJJwGCk8uHpemaStwgmdGEFyMfT32kN3mdm26CpMu3y",
  "key6": "4f8GX8rmatoHd9XzdSjuCynt4ykJNgUSgD7j45C8PxgEXvfRRNudKSK9wCFPwVSR6F5Xb3hgUNy43cd98XETLtTR",
  "key7": "3n8oetoBLxUxDYVmfGv73SXFJrHtTzJzuNVQK348fzdoGWmLGRPfPSRbzDt35YQ62EC76ZToSipoAcpqfsXMfyWo",
  "key8": "4939mfxagasbVhuVHt7Xj4aew25qsWBWYQ85q7j4LDwKW38N3DkT5rQacDSuC5FiLzYRgfwHd2i4SPhHuHfUjzEr",
  "key9": "4L4B9U3fcAeZCQYiz7qaEmWDaip7bCp71YwbAAcM5YQgbZrXxG6C3i9Sy36ShzMDFtNx9NtLToyVEkUsBrXcAXHW",
  "key10": "3cV8pyxB1pa4f211QawRm2CmQxQnYAH2z6pRVEB82MB4fcqZzEhjvkpN618KSQpqJ9NaZ1KZA5uGHa2TkvJj7R7R",
  "key11": "2fcuKbwSczk4kGCB3dMPmzvaeXzePPZzoJgeeN3N71mb3VEL3ZeY1MXnH9MQvo6ysjwYbmPJiJ3CCXoze1QEwGRb",
  "key12": "3V4SfVYw97WKiWKHL2tbqrmxY2igzN7d8HK2gJLzujfk5L62RYZVNmiqH4ppFjKritkCbvRLfcQ2mp3Dp4WTRGZM",
  "key13": "2AfdbY2RSFGc2xe57Jk3heLbpkSLEaFRn8M2FiNfaJFbyj9t6RRmgCCxn6XuUwL4TMCJnYp6ynAYmEWqLN5fEhNf",
  "key14": "mvdoHrA9cmp9N2jLx9PqvV5jZadVRYBDtGWKBHnpeas8tgmaBDYiMd7CEJYBA39uC5qRSafyEoQfoR4ngFr58AA",
  "key15": "5jY8Jb1AWQByNHrAxgxWrjifwUbPpoWoGBwAbagUqF56pJTvnaNfHkyGC33JVLcdYpTvEvBqEmSExZ54Ke1hPato",
  "key16": "4bmZXo2wL8DZU1hHmbDZPxkPLPB4tHPJWbm4QUxTpDfKSdgirDQU9RcqJna5CdYczqdWBELmFARB2wghkwGT1Shj",
  "key17": "29TUgQmL76uR9kzp38rRzDNmG2jynVY1rXhcsodEn696pRpqWAMev9837UYg9uPVFMhFY74qdKM1aFfEqxYj76vr",
  "key18": "gdq8Wy75fXcFAa2jQoGQgEN4CHeaJ5BetUokr8oLfXLdPbJ4kbGoQ6kYm7LSQ6pG5cfvdpyr1yDvGPWi5c8FMeY",
  "key19": "42x2znEjE9spWwET5gLRh48QScSJFFswsvey4aRPeRYrFGyasrEbtLkMgmQGWK7XnWiMBx5tKHmbX1ec8Ar6CRZg",
  "key20": "31xgpfD1QyJQo1QHcBrWBh4Cje9S2ypUJ2TKcTcnLCZ4XrgrgHgdMFFRzojrrckPmC3vnQfZwhjdY1btfFWz8gaE",
  "key21": "4zCXV9GYDxaxxdSDWAM8aFevueXEyuQpvV4QQuHTf7XDr56pFXHUwpBAytFmyEH6fKrRPXg8UmqmggL3s43orT6g",
  "key22": "b7y3XYwbqZBHEHwRUNrDXYumreDV8ABYqi7qZgXvtbgfzAyqWxwVK4TdPpkMaAWPLxseEFJUChBG45PnRhsXce8",
  "key23": "3SrVkjQvLi6YJ3SgPeqBFja494PqVShw1xoNthTWTpJmVAAYKm5duoRENQCv2ng4UTgCiEE3uaT5zYs7V2PA363s",
  "key24": "4SbBcH68TTTHzMSELwdEeywfELqrwJGe54TmQFxwh9gq259n9ywj81mgCt6cf4f4hHKMrRHpjFS2UFg3jsWh5KXc",
  "key25": "2Gk9zzg1RqtwouHQadcuHKjcCTw7Hd48sRg888kky4fh5eQehSTsxdPCtoj4gQ7xszkSJtRyBaVbDj9WoZiNXLP9",
  "key26": "5jHFkT7WwdZjJbA9Hsx5RnJW4LZeoMFFo3sYoB8ERwsikWTDSaxPrVyjEsC1bEeqySmn77SphzWSHwKyEYSfKS6j",
  "key27": "3NkC67NRgvBmQ85pTD5cdYhC1jhmhCcrprK8EVhHxd1pE59qDFs3cKncUVaJyEpMGvNL4qeuKeofcWBzn55K8kfe",
  "key28": "4ChGB2NUDppsD5yKoRJ813KmXJM6GLPwYTx2ckxHZQ6F4jdfn2grLsvVWVo7MUmp9fdNMXdiuhEsjCmCvaGFoRTX",
  "key29": "VZKrjLotcnoPSK65J2SMtYX1bJMZFZUM76i5WDymbCZ5zAw68GvYqbpHaMoVAn8b9DpqrzttaC63PFmZxLqXSLu",
  "key30": "5x7FfKJTXTuYFLv58cdT51h4yN2nkMoActU8WbLrBNPLJnvH5oa1o5senv74bQwYnC4QqMquTovQTi3vKJDL3kZz"
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
