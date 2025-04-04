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
    "ACKvY7hB83jK3JUhfXkkuvmvd1AXamZrScdnp3qP5AoBRyZCdLnZWLUi4Dnp6k8vDrHFRN3Q4pt6cBZGod1BVMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DoLGqpEXi7MJVdUTPmrrnohbUPe85PXM3zp8SbqM6SfkkekrEJyZshAhc1TtjMeEH3n6MCZHC7yAPvgG3RRzQZ",
  "key1": "PBgj9gM7eMJqv4HtdesJg6Nb59GvDjfMTw4NkGx2BZUP1KSr6FGSR9Nf2iCLCrTVJ8zQoRvQimhJvqsu2HZLUmd",
  "key2": "56WMYvDzKncSVnJHi2yLkVQn3jsrb1Pq9vxzSVs7mkZFcUnJfHQ1uykFBg95gSB799CuoeiDntN6GjDxxHvQNjgn",
  "key3": "3hCHz3cHd351CAKPM46DdtGyYrBs91EHrC9ZpH16aSzJ1LrbYumMafp7ohcZd3tVKYWJT1xxBHmPCsti5HnDx5Eh",
  "key4": "aor2LdZNKwGauS3GhAbcCTbCiQHHV4Z6aNSibg2SL7Cuw8rz6DqNXRicwr5Xief91smY4kVHkjbe95T8gEpLtLh",
  "key5": "4wRRgkHDPV6tLF5rpTVyn1NPvsjGESubh3NJgjD6Hgz3JzNP7Jj3PuueiEFnZaPaUAtprP7F9fVAY8RyDjpHjga7",
  "key6": "2R4PuxfonnASFHw2NwBr5Ru4ZPrJFrmRhLe8CwVRZjCxLSbhtT24sCAUmtx6Ekfv2H2bszTMrr5s7k3GqzJjGCgv",
  "key7": "5dBffm3T4Tt6U8f6yPJf8KvRj62b7mrg9eSYHuUxmYCXGCV2ytAdgwiZnJcSFZyGf2jLMMUJgEB4heqPA5ayo1AR",
  "key8": "HyBQKKh2uzEbCHvcF4MREi1Fn8cxhhkt2V6Y6yszBn57uyWjSJzmNAvxDzJv3NjnrhFHiFt2VAH1UAhofnrjVsL",
  "key9": "cP8X9NFZxzL42tm2NmRiTjrW3RGxJLxevFZJa29DZLigEeeo9QpJfxmBJGhJK6r5bFSymEcbvTB4B4CpibwePEa",
  "key10": "3RS9QtJUhhM6xsJCRXxJfEbMzdw7TcH49nXgg9SetGwWtvCC71DXyDmurxGaG8wA1pBupbVCVjJDu1Se39PujDxu",
  "key11": "TSukYMgfBMWDJipKc7QVLusgjrWQKn8xQELmAWRHyV1UAXgvstxkzPFqiKDcGDp1rZuWGJqwSAJTSm6EU4tt6hT",
  "key12": "uDAGbCKyawFT2hrGAKuXGmwudKcRHcT8zxZEtCLXcSr5AVawMU2FssFGGrQ38XKg7KzCFT4Fs6DJ5zgQ9CnXJbw",
  "key13": "2h7YJcpQ9TtWqdbz4zvpQSxitsTrfrd5DcFxVJqUM32zvRuy2him1f5Q5tv5QaYUjSn3ySs1nCrJQBkw6CCvpbFN",
  "key14": "4jDV2R7jDYcZCNXjFDAMhdREJGHTTdJ1LjZR1wv9pQbS4iSEnXQ6mhZPMXToDJVpFKeAkT1JSzZzFE685x9qXab9",
  "key15": "2ruvHfLPrpiLX5v9dmdxUZtmrbN1aMZw4pjtTijMpKnDmMCeAFnvELU2fzBEM7SvmJatCANEpxxvRcibCjaiFAjD",
  "key16": "3wS36kPtwbrXpY2MqujmMtPdH4xrU7wnvHxz8EadYFx4aEPaZEPuNaaT6phQZUSJ7EGSLAKgp6jug5DWXN1iyd2X",
  "key17": "22Kq6EDa2q6R4qkQ3xL4yqsN8RfJPq9DPwiM8uiJpunPK3MGbVS3ddyYzVuixVY74AvRYyG8ajdPcmLAATpjVnqy",
  "key18": "idZqKa2oH815drtVnECQ9QcwPTx6A2MMZMRoZWdpgq5Mzx69Qo52TwZL6YQf85byeqPktzcDXjBAiKK952T4Rrd",
  "key19": "WCwCaLnQdeMVMoX2gyMX8THDXKFVo6rV9ocikdfKiGLJvCxWA7XuN9wMk8TSkcmVGXp4WoJaBinKk83Ct9mknAm",
  "key20": "2j3AgQh2drS1Dy4uibZQWKA2cXhkE8XLaEpcqbfjJDuixFSR19q56BN4A7HxNcVNFXn69ksgbcGmtAksPcSQDUsU",
  "key21": "2CGrtGepaCVeUT58XY4u1iZrPgqUWdQDhRkT8C6jYuhsKbBTp8Bbk6ZET5ERxuMKDqTfgV8cJo7UH8Wb48UEFXsM",
  "key22": "fsv8Ch9c3f8RQ1LB27hdvut1mH3PXVYqCWx3x5ZTgWyRBK2N7PousoZX64jjRKUCHH6oVFDjstxFLPxxNsByiJB",
  "key23": "5pFX4MAXuGZVet8BWUWMCCVkiLW7GpebSR4PSzjhzWRP4ow3oGjDDav8qaT3sCz2Ks51Hn3bqCty6AaHKjKEej1D",
  "key24": "54KLxJkNFWQ9BZ3ehfGfyvA2AtDavTqq6P7mtJwTzKcQqmrJ9Nz28TxBMWpCtQj3eSHQ7GzihcPzxoiKfmuZADaV",
  "key25": "4Qqp8LWg9UyapEDGD1W3B1unSFPCY86aCruqkA4irUrm35JDf8PEGWy9gE6GnAYxgQgd46CbqMTZpuHny3Avg8aJ",
  "key26": "3LWyUT2gKEdTPGFvT74JY8gPGHGsRw9n9Yqj7KcnbPW4MyJTdu53Qk2TnzxdYgf1Ab6rvoD8TVB7nmJzuQn1Jpg2",
  "key27": "4r5ZuG4cZj3mdk1iWGNq83uFp1LJboswXCjZnsA4B8ZHXoHzwUHdHSneSSNjqR2b6sCv1c8SHfjZ36ezEJJhtRcn",
  "key28": "5jVmNB9z72L6QMWh5A9T335EDCK1A7hzBwsrEiBxZZXegB7ZDJAJgNH4tAwagygD3ySLLugZ7iHC5tfPJ7nWefC2",
  "key29": "22BhGigNStz5sGhMbbCSA8CEg6eCJfdHXGorNF3GCANsvhZPx1eq1WzkB27miHgHSNFqwJazJ7Y2YxViKJVXKtis",
  "key30": "5a1G7pdmCGaR8YE5uSiJqU2P6H9Aj7uUmNKgy2eXgqTd5jukyZkBcGeAcYNAHo8mDk2QC13XqgZJSN4PGqFKQZnc",
  "key31": "3ALiMHs5QY88jKxAoknbSpqK2QgunDRaf8Rw7Aqdvmg3MK5MfvaY3eDS5qSavsADgTPNk6TgtocAJ5b3VMVY4SEo",
  "key32": "4E6QEhCTvfdRvx971fg2dWp69aoVeNKGue73ppZAFkdYiS3AyRd6besV7iDe5SAJAdEZ3V4iXLFsZWhPLxYh9LrZ",
  "key33": "3YbYWATAooESKeZ1fEsnSYqWL2RAgRrb7N8h4uhi3eoTuELPJpy2BEQnaYfhyBW4oDjayuun7tMzkt84WaoAeCQg",
  "key34": "49PEWFP3DpPkEHMMRphFWjJKZXtxa4uTeqod3oVyQfCDKFLzdEjRRNcSQJoeVwxMKsXXA6QSE8xsD6rycMmWPwcG",
  "key35": "4uyMbqZtiUBwGBsT4jYPRe8rESEgtq9h13yPEACYUiXpnUvGda4iBZP6G6jbdkwJKipXS34AgdDDCHaKSx4ieGXs",
  "key36": "3CnFM824CYYFRKD8i7F7NZLRcRYtcFDGJUB7iF88bHUZY348ftTJKYtr4dTZqWAwGnQoNAV8fM6MiFx5jYEn6XDc",
  "key37": "2W81Bx4KTaiRqyCsbuMWoH6dnc7HUTi2qWnD3bf6Cb4DkXdRnzvPsH3bbc25Me4wgEmxmMjmr7NfmiQAiXaz9Aq7"
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
